import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import nftABI from './nftABI.json'
import stakingABI from './stakingABI.json'
import BN from 'bignumber.js'

let connected = false

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: '86e7e6a20ae7477ba9894b5ab356db3f'
        }
    }
}

const networks = {
    mainnet: {
        nft: '0x94d4A314FC718AdFb3E9E25D3e3A984862EC7F1b',
        staking: '0xC0Ada8Ef0C811fdd3059BB6DF5f5947d708f80AE',
    },
    ropsten: {
        nft: '0x1D694D0aa5d71b397E206E7d6f5C38b30864A6F1',
        staking: '0xecAcE6d26eb17d407d326BDF150eB95AEC8B4D6c',
    },
}

const network = typeof window !== 'undefined' && window.location.host.toLowerCase().indexOf('localhost') === -1 ? 'mainnet' : 'ropsten'
export const alchemy = new Web3.providers.WebsocketProvider(`wss://eth-${network}.alchemyapi.io/v2/UVshVfN22qgd9_HyuS1_n8Kunf9Bfuc2`)
export const web3 = new Web3(alchemy)
export const nft = new web3.eth.Contract(nftABI, networks[network].nft)
export const staking = new web3.eth.Contract(stakingABI, networks[network].staking)

export const web3Modal = new Web3Modal({
    network,
    cacheProvider: false,
    providerOptions
})

export default web3

export async function getMintDetails() {
    const [total, supply, price] = await Promise.all([
        nft.methods.totalCount().call().then(x => parseInt(x)),
        nft.methods.totalSupply().call().then(x => parseInt(x)),
        nft.methods.price().call()
    ])

    const remaining = total - supply

    return { total, supply, remaining, price }
}

export async function getNfts() {
    const [from] = await web3.eth.getAccounts()
    const [tokens, tokensDeposited] = await Promise.all([
        nft.methods.tokensOfOwner(from).call(),
        staking.methods.depositsOf(from).call(),
    ])
    const rewards = await staking.methods.calculateRewards(from, tokensDeposited).call()

    const nfts = await Promise.all(
        tokens.map(tokenId =>
            fetch(`https://nft.mypinata.cloud/ipfs/QmaW33qhL8JD9D1cosCcrHGHtq8Q2krWfUYAgxGHnsz53p/${tokenId}.json`)
            .then(res => res.json())
            .then(res => ({...res, tokenId }))
        )
    )

    const deposited = await Promise.all(
        tokensDeposited.map(tokenId =>
            fetch(`https://nft.mypinata.cloud/ipfs/QmaW33qhL8JD9D1cosCcrHGHtq8Q2krWfUYAgxGHnsz53p/${tokenId}.json`)
            .then(res => res.json())
            .then(res => ({...res, tokenId }))
        )
    )

    nfts.forEach(json => {
        json.image = `https://nft.mypinata.cloud/ipfs/QmU6JyewEs1SjakvtZMd8vxapHt26YQhsUeqh9onTVmNMs/${json.edition}.png`
    })

    deposited.forEach(json => {
        json.image = `https://nft.mypinata.cloud/ipfs/QmU6JyewEs1SjakvtZMd8vxapHt26YQhsUeqh9onTVmNMs/${json.edition}.png`
    })

    return { nfts, deposited, rewards }
}

export async function getDeposits() {
    const deposits = await staking.methods.depositsOf(from).call()
}

export async function isApproved() {
    const [from] = await web3.eth.getAccounts()
    const approved = await nft.methods.isApprovedForAll(from, staking._address).call()
    return approved
}

export async function approve(callback) {
    if (!(await isApproved())) {
        const [from] = await web3.eth.getAccounts()

        await nft.methods.setApprovalForAll(staking._address, true).send({ from }, (err, tx) => {
            if (err) console.log(err)
            callback(err, tx)
        })
    }

    return true
}

export async function stake(selected, callback) {
    const [from] = await web3.eth.getAccounts()

    await staking.methods.deposit(selected).send({ from }, (err, tx) => {
        if (err) console.log(err)
        callback(err, tx)
    })
}

export async function unstake(selected, callback) {
    const [from] = await web3.eth.getAccounts()

    await staking.methods.withdraw(selected).send({ from }, (err, tx) => {
        if (err) console.log(err)
        callback(err, tx)
    })
}

export async function claim(selected, callback) {
    const [from] = await web3.eth.getAccounts()

    await staking.methods.claimRewards(selected).send({ from }, (err, tx) => {
        if (err) console.log(err)
        callback(err, tx)
    })
}

window.farm = { stake, unstake, claim, isApproved, approve, getNfts }

export async function mint(mintAmount, price, callback) {
    const [from] = await web3.eth.getAccounts()

    return nft.methods.mint(mintAmount).send({
        from,
        gas: 185000 * mintAmount,
        value: (new BN(price)).multipliedBy(mintAmount).toString(),
    }, (err, tx) => {
        callback(err, tx)
    })
}

export function isConnected() {
    return connected
}

export async function connect(afterConnect, afterDisconnect) {
    if (isConnected()) return

    const providerNew = await web3Modal.connect()
    web3.setProvider(providerNew)

    const accs = await web3.eth.getAccounts()

    if (accs.length > 0) {
        connected = true
        await afterConnect()
    }

    providerNew.on('accountsChanged', (info) => {
        afterConnect()
    });

    providerNew.on('connect', (info) => {
        connected = true
        afterConnect()
    });

    providerNew.on('disconnect', (error) => {
        connected = false
        afterDisconnect()
    });
}

if (typeof window !== 'undefined') {
    window.web3 = web3
    window.staking = staking
    window.nft = nft
}