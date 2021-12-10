import web3, { connect, stake, unstake, isApproved, approve, claim, getNfts, isConnected, mint, getMintDetails, nft, staking } from './web3'
import confetti from 'canvas-confetti'
import BN, { BigNumber } from 'bignumber.js'
import modal from './modal'

require('./jquery')
require('../webflow')

const $ = typeof window !== 'undefined' && window.jQuery
let price = 1e10
let mintAmount = 1
let maxAmount = 10
let nfts = null
let remainingNfts = 0
let nftsDeposited = null
let approved = false
let selectedNfts = []
let stakingRewards = 0
let stakingRewardsSum = 0
let modalTab
let lastTxHash

let $mintButton = $('.mint-button')
let $stakeButton = $('.stake-button')
let $unstakeButton = $('.unstake-button')
let $claimButton = $('.claim-button')
let $mintAmountEl = $('.mint-button > div > span')
let $minusButton = $('.minus-button')
let $plusButton = $('.plus-button')
let $stakingSelectors = $('.staking-selectors')
let $stakingControls = $('.staking-controls')
let $stakingWarning = $('.staking-warning')
let $stakingSelectedValue = $('.staking-selected-value')
let $stakingTabs = $('#staking-modal .modal-tabs > li > a')
let $stakingFtrBtn = $('.staking-footer-button')
let $modalTabs = $('.modal-tabs')
let $stakingApproveBtn = $('.staking-approve-button')

async function refreshStakingModal(tab) {
    $stakingSelectors.html('')

    let items = []
    switch (tab) {
        case 'stake':
            items = nfts || []
            break
        case 'claim':
        case 'unstake':
            items = nftsDeposited || []
            break
    }

    items.forEach((token, index) => {
        $stakingSelectors.append(`
            <div tabIndex="0" data-select-tokenId="${token.tokenId}" class="staking-selector">
                <div class="staking-coins">${tab !== 'stake' ? (new BigNumber(stakingRewards[index] || 0)).div(1e18).toFixed(3) : 0}</div>
                <img crossorigin="anonymous" src="${token.image}" alt="${token.name}" />
                <h5>#${token.edition}</h5>
            </div>
        `)
    })

    $stakingSelectors.find('[data-select-tokenId]').on('click', function(e) {
        e.preventDefault()
        const $select = $(this)
        $select.toggleClass('selected')
        if ($select.hasClass('selected')) {
            selectedNfts.push($select.attr('data-select-tokenId'))
        } else {
            selectedNfts.splice(selectedNfts.findIndex(x => x === $select.attr('data-select-tokenId')), 1)
        }

        if (tab === 'claim') {
            $stakingSelectedValue.html(selectedNfts.map((_, i) => stakingRewards[i]).reduce((a, b) => a.plus(b), new BigNumber(0)).div(1e18).toFixed(3))
        } else {
            $stakingSelectedValue.html(selectedNfts.length)
        }

        if (selectedNfts.length > 0) {
            $stakingFtrBtn.removeClass('btn-disabled')
        } else {
            $stakingFtrBtn.addClass('btn-disabled')
        }
    })
}

async function updateNfts() {
    let result = await getNfts()
    nfts = result.nfts
    nftsDeposited = result.deposited
    stakingRewards = result.rewards
    stakingRewardsSum = result.rewards.reduce((a, b) => a.plus(b), new BigNumber(0)).div(1e18).toFixed(3)
    jQuery('.staking-wallet-value').html(nfts.length)
    jQuery('.staking-deposited-value').html(nftsDeposited.length)
    jQuery('.staking-rewards-value').html(stakingRewardsSum)
    await refreshStakingModal(modalTab)
}

async function afterConnect() {
    const accs = await web3.eth.getAccounts()
    jQuery('.connect-btn').hide()
    jQuery('.logged-in-btn > .text-block').html(`${accs[0].slice(0, 5)}...${accs[0].slice(-5)}`)
    jQuery('.logged-in-btn').show()
    setApproved(await isApproved())
    await updateNfts()
}

async function afterDisconnect() {
    jQuery('.connect-btn').show()
    jQuery('.logged-in-btn').hide()
    nfts = null
    nftsDeposited = null
}

function setModalTab(tab) {
    modalTab = tab
    selectedNfts = []
    $stakingSelectedValue.html('0')
    $stakingFtrBtn.addClass('btn-disabled')
    $stakingTabs.each(function() {
        if (this.hash.substr(1) === tab) {
            $(this).parent().addClass('selected')
        } else {
            $(this).parent().removeClass('selected')
        }
    })

    $('.staking-button-text').html(tab.toUpperCase())

    refreshStakingModal(tab)
}

async function openStakingModal(tab) {
    setModalTab(tab)
    $('#staking-modal').modal()
}

function celebrate() {
    const duration = 5000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
            return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)
            // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }))
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }))
    }, 250)
}

function updateMintAmount(amount) {
    mintAmount = amount
    $mintAmountEl.html(mintAmount)
    $minusButton.removeClass('disabled')
    $plusButton.removeClass('disabled')
    if (mintAmount === maxAmount) {
        $plusButton.addClass('disabled')
    } else if (mintAmount === 1) {
        $minusButton.addClass('disabled')
    }
}

function setApproved(_approved) {
    approved = _approved
    if (_approved) {
        $stakingWarning.hide()
        $stakingSelectors.show()
        $modalTabs.show()
        $stakingApproveBtn.hide()
        $stakingFtrBtn.show()
    } else {
        $stakingWarning.show()
        $stakingSelectors.hide()
        $modalTabs.hide()
        $stakingApproveBtn.show()
        $stakingFtrBtn.hide()
    }
}

function initialize() {
    getMintDetails().then(async({ total, remaining, price: _price }) => {
        $('.mints-total').html(total.toLocaleString())
        $('.mints-remaining').html(remaining.toLocaleString())
        price = _price
        remainingNfts = remaining

        if (parseInt(remaining) <= 2) {
            $('.opensea-link').show()
            $('.mints-text').html('Sold out!')
            return
        } else {
            $('.mint-btn-container').show()
        }
    })

    $stakingFtrBtn.on('click', async(e) => {
        e.preventDefault()

        const callback = (err, tx) => {
            $stakingFtrBtn.find('.loading-text').show()
            $stakingFtrBtn.find('.main-text').hide()
            $stakingFtrBtn.addClass('btn-disabled')
        }

        try {
            switch (modalTab) {
                case 'unstake':
                    await unstake(selectedNfts, callback)
                    break
                case 'stake':
                    await stake(selectedNfts, callback)
                    break
                case 'claim':
                    await claim(selectedNfts, callback)
                    break
            }

            await updateNfts()
        } catch (err) {
            console.log(err)
        } finally {
            $stakingFtrBtn.find('.loading-text').hide()
            $stakingFtrBtn.find('.main-text').show()
            $stakingFtrBtn.removeClass('btn-disabled')
        }
    })

    $plusButton.on('click', (e) => {
        e.preventDefault()
        updateMintAmount(Math.min(mintAmount + 1, 10))
    })

    $minusButton.on('click', (e) => {
        e.preventDefault()
        updateMintAmount(Math.max(mintAmount - 1, 1))
    })

    $('.close-link').on('click', (e) => {
        $('.header-notification').hide()
    })

    $('.connect-btn').on('click', () => {
        connect(afterConnect, afterDisconnect)
    })

    $stakingApproveBtn.on('click', (e) => {
        e.preventDefault()
        approve((err) => {
                if (!err) $stakingApproveBtn.addClass('btn-disabled').find('div').html('APPROVING...')
            })
            .then(() => setApproved(true))
            .catch(() => $stakingApproveBtn.removeClass('btn-disabled').find('div').html('APPROVE'))
    })

    $mintButton.on('click', async(e) => {
        e.preventDefault()

        await connect(afterConnect, afterDisconnect)

        await mint(mintAmount, price, (err, tx) => {
            if (err) return console.log(err)
            lastTxHash = tx
            remainingNfts -= mintAmount
            $('.mints-remaining').html(remainingNfts.toLocaleString())
            celebrate()
            $('.header-notification').show()
            $('.waifu-count').html(mintAmount)
            $('.transaction-link').attr('href', 'https://etherscan.io/tx/' + lastTxHash)
        })

        await updateWaifus()
    })

    $stakingTabs.on('click', function(e) {
        e.preventDefault()
        setModalTab(this.hash.substr(1))
    })

    $stakeButton.on('click', async(e) => {
        e.preventDefault()
        await connect(afterConnect, afterDisconnect)
        await openStakingModal('stake')
    })

    $unstakeButton.on('click', async(e) => {
        e.preventDefault()
        await connect(afterConnect, afterDisconnect)
        await openStakingModal('unstake')
    })

    $claimButton.on('click', async(e) => {
        e.preventDefault()
        await connect(afterConnect, afterDisconnect)
        await openStakingModal('claim')
    })
}

initialize()