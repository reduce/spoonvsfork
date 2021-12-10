! function(n) { var i = {};

    function r(t) { if (i[t]) return i[t].exports; var e = i[t] = { i: t, l: !1, exports: {} }; return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports }
    r.m = n, r.c = i, r.d = function(t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, r.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function(e, t) { if (1 & t && (e = r(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function(t) { return e[t] }.bind(null, i)); return n }, r.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return r.d(e, "a", e), e }, r.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "", r(r.s = 152) }([function(t, e, n) { var c = n(7),
        u = n(117).f,
        d = n(21),
        h = n(118),
        f = n(74),
        p = n(232),
        m = n(236);
    t.exports = function(t, e) { var n, i, r, a = t.target,
            s = t.global,
            o = t.stat,
            l = s ? c : o ? c[a] || f(a, {}) : (c[a] || {}).prototype; if (l)
            for (n in e) { if (i = e[n], r = t.noTargetGet ? (r = u(l, n)) && r.value : l[n], !m(s ? n : a + (o ? "." : "#") + n, t.forced) && void 0 !== r) { if (typeof i == typeof r) continue;
                    p(i, r) }(t.sham || r && r.sham) && d(i, "sham", !0), h(l, n, i, t) } } }, function(t, e) { t.exports = function(t) { return t && t.__esModule ? t : { default: t } } }, function(t, e) { var n = Array.isArray;
    t.exports = n }, function(t, e, n) { var i = n(27),
        r = Math.min;
    t.exports = function(t) { return 0 < t ? r(i(t), 9007199254740991) : 0 } }, function(t, e, n) { var i = n(72);
    t.exports = function(t) { return Object(i(t)) } }, function(t, e, n) { var i = n(7),
        r = n(51),
        a = n(115),
        s = n(239),
        o = i.Symbol,
        l = r("wks");
    t.exports = function(t) { return l[t] || (l[t] = s && o[t] || (s ? o : a)("Symbol." + t)) } }, function(t, e, n) { "use strict"; var i = n(39);
    Object.defineProperty(e, "__esModule", { value: !0 }); var r = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    e.IX2EngineConstants = e.IX2EngineActionTypes = void 0; var a = n(307);
    Object.keys(a).forEach(function(t) { "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(r, t) || Object.defineProperty(e, t, { enumerable: !0, get: function() { return a[t] } })) }); var s = n(135);
    Object.keys(s).forEach(function(t) { "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(r, t) || Object.defineProperty(e, t, { enumerable: !0, get: function() { return s[t] } })) }); var o = n(308);
    Object.keys(o).forEach(function(t) { "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(r, t) || Object.defineProperty(e, t, { enumerable: !0, get: function() { return o[t] } })) }); var l = n(309);
    Object.keys(l).forEach(function(t) { "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(r, t) || Object.defineProperty(e, t, { enumerable: !0, get: function() { return l[t] } })) }); var c = i(n(310));
    e.IX2EngineActionTypes = c;
    n = i(n(311));
    e.IX2EngineConstants = n }, function(i, t, e) {
    (function(t) {
        function e(t) { return t && t.Math == Math && t } var n = "object";
        i.exports = e(typeof globalThis == n && globalThis) || e(typeof window == n && window) || e(typeof self == n && self) || e(typeof t == n && t) || Function("return this")() }).call(this, e(44)) }, function(t, e) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, e, n) { var i = n(96),
        n = "object" == typeof self && self && self.Object === Object && self,
        n = i || n || Function("return this")();
    t.exports = n }, function(t, e, n) { var i = n(5),
        r = n(123),
        n = n(21),
        a = i("unscopables"),
        s = Array.prototype;
    null == s[a] && n(s, a, r(null)), t.exports = function(t) { s[a][t] = !0 } }, function(t, e, n) { "use strict"; var i = {},
        r = {},
        a = [],
        s = window.Webflow || [],
        o = window.jQuery,
        l = o(window),
        c = o(document),
        u = o.isFunction,
        d = i._ = n(154),
        h = i.tram = n(91) && o.tram,
        f = !1,
        p = !1;

    function m(t) { i.env() && (u(t.design) && l.on("__wf_design", t.design), u(t.preview) && l.on("__wf_preview", t.preview)), u(t.destroy) && l.on("__wf_destroy", t.destroy), t.ready && u(t.ready) && (t = t, f ? t.ready() : d.contains(a, t.ready) || a.push(t.ready)) }

    function g(t) { var e;
        u(t.design) && l.off("__wf_design", t.design), u(t.preview) && l.off("__wf_preview", t.preview), u(t.destroy) && l.off("__wf_destroy", t.destroy), t.ready && u(t.ready) && (e = t, a = d.filter(a, function(t) { return t !== e.ready })) }
    h.config.hideBackface = !1, h.config.keepInherited = !0, i.define = function(t, e, n) { r[t] && g(r[t]);
        n = r[t] = e(o, d, n) || {}; return m(n), n }, i.require = function(t) { return r[t] }, i.push = function(t) { f ? u(t) && t() : s.push(t) }, i.env = function(t) { var e = window.__wf_design,
            n = void 0 !== e; return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n }; var y, v = navigator.userAgent.toLowerCase(),
        E = i.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        n = i.env.chrome = /chrome/.test(v) && /Google/.test(navigator.vendor) && parseInt(v.match(/chrome\/(\d+)\./)[1], 10),
        h = i.env.ios = /(ipod|iphone|ipad)/.test(v);
    i.env.safari = /safari/.test(v) && !n && !h, E && c.on("touchstart mousedown", function(t) { y = t.target }), i.validClick = E ? function(t) { return t === y || o.contains(t, y) } : function() { return !0 }; var b, E = "resize.webflow orientationchange.webflow load.webflow";

    function T(t, e) { var n = [],
            i = {}; return i.up = d.throttle(function(e) { d.each(n, function(t) { t(e) }) }), t && e && t.on(e, i.up), i.on = function(t) { "function" == typeof t && (d.contains(n, t) || n.push(t)) }, i.off = function(e) { n = arguments.length ? d.filter(n, function(t) { return t !== e }) : [] }, i }

    function I(t) { u(t) && t() }

    function _() { b && (b.reject(), l.off("load", b.resolve)), b = new o.Deferred, l.on("load", b.resolve) }
    i.resize = T(l, E), i.scroll = T(l, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), i.redraw = T(), i.location = function(t) { window.location = t }, i.env() && (i.location = function() {}), i.ready = function() { f = !0, p ? (p = !1, d.each(r, m)) : d.each(a, I), d.each(s, I), i.resize.up() }, i.load = function(t) { b.then(t) }, i.destroy = function(t) { t = t || {}, p = !0, l.triggerHandler("__wf_destroy"), null != t.domready && (f = t.domready), d.each(r, g), i.resize.off(), i.scroll.off(), i.redraw.off(), a = [], s = [], "pending" === b.state() && _() }, o(i.ready), _(), t.exports = window.Webflow = i }, function(t, e) { t.exports = function(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) } }, function(t, e, n) { "use strict"; var i = n(8);
    t.exports = function(t, e) { var n = [][t]; return !n || !i(function() { n.call(null, e || function() { throw 1 }, 1) }) } }, function(t, e, n) { n = n(8);
    t.exports = !n(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(t, e, n) { var i = n(14),
        r = n(113),
        a = n(28),
        s = n(75),
        o = Object.defineProperty;
    e.f = i ? o : function(t, e, n) { if (a(t), e = s(e, !0), a(n), r) try { return o(t, e, n) } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported"); return "value" in n && (t[e] = n.value), t } }, function(t, e) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, e) { var n = {}.hasOwnProperty;
    t.exports = function(t, e) { return n.call(t, e) } }, function(t, e, n) { var i = n(158),
        r = n(212),
        a = n(70),
        s = n(2),
        o = n(221);
    t.exports = function(t) { return "function" == typeof t ? t : null == t ? a : "object" == typeof t ? s(t) ? r(t[0], t[1]) : i(t) : o(t) } }, function(t, e, n) { var i = n(170),
        r = n(175);
    t.exports = function(t, e) { return e = r(t, e), i(e) ? e : void 0 } }, function(t, e) { t.exports = function(t) { return null != t && "object" == typeof t } }, function(t, e, n) { var i = n(14),
        r = n(15),
        a = n(52);
    t.exports = i ? function(t, e, n) { return r.f(t, e, a(1, n)) } : function(t, e, n) { return t[e] = n, t } }, function(t, e, n) { var i = n(53),
        r = n(72);
    t.exports = function(t) { return i(r(t)) } }, function(t, e, n) { var E = n(54),
        b = n(53),
        T = n(4),
        I = n(3),
        _ = n(37),
        A = [].push,
        n = function(h) { var f = 1 == h,
                p = 2 == h,
                m = 3 == h,
                g = 4 == h,
                y = 6 == h,
                v = 5 == h || y; return function(t, e, n, i) { for (var r, a, s = T(t), o = b(s), l = E(e, n, 3), c = I(o.length), u = 0, i = i || _, d = f ? i(t, c) : p ? i(t, 0) : void 0; u < c; u++)
                    if ((v || u in o) && (a = l(r = o[u], u, s), h))
                        if (f) d[u] = a;
                        else if (a) switch (h) {
                    case 3:
                        return !0;
                    case 5:
                        return r;
                    case 6:
                        return u;
                    case 2:
                        A.call(d, r) } else if (g) return !1;
                return y ? -1 : m || g ? g : d } };
    t.exports = { forEach: n(0), map: n(1), filter: n(2), some: n(3), every: n(4), find: n(5), findIndex: n(6) } }, function(t, e) { t.exports = function(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } }, function(t, e, n) { var i = n(32),
        r = n(171),
        a = n(172),
        s = i ? i.toStringTag : void 0;
    t.exports = function(t) { return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : (s && s in Object(t) ? r : a)(t) } }, function(t, e, n) { var i = n(95),
        r = n(63);
    t.exports = function(t) { return null != t && r(t.length) && !i(t) } }, function(t, e) { var n = Math.ceil,
        i = Math.floor;
    t.exports = function(t) { return isNaN(t = +t) ? 0 : (0 < t ? i : n)(t) } }, function(t, e, n) { var i = n(16);
    t.exports = function(t) { if (!i(t)) throw TypeError(String(t) + " is not an object"); return t } }, function(t, e, n) { var i = n(79);
    t.exports = Array.isArray || function(t) { return "Array" == i(t) } }, function(t, e, n) { "use strict"; var i = n(39);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0; var r = i(n(86));
    e.IX2BrowserSupport = r;
    r = i(n(138));
    e.IX2Easings = r;
    r = i(n(140));
    e.IX2EasingUtils = r;
    r = i(n(317));
    e.IX2ElementsReducer = r;
    r = i(n(142));
    e.IX2VanillaPlugins = r;
    n = i(n(319));
    e.IX2VanillaUtils = n }, function(t, e) {
    function n() { return t.exports = n = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n, i = arguments[e]; for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]) } return t }, n.apply(this, arguments) }
    t.exports = n }, function(t, e, n) { n = n(9).Symbol;
    t.exports = n }, function(t, e, n) { var i = n(50);
    t.exports = function(t) { if ("string" == typeof t || i(t)) return t; var e = t + ""; return "0" == e && 1 / t == -1 / 0 ? "-0" : e } }, function(t, e, n) { var i = n(27),
        r = Math.max,
        a = Math.min;
    t.exports = function(t, e) { t = i(t); return t < 0 ? r(t + e, 0) : a(t, e) } }, function(t, e) { t.exports = {} }, function(t, e, n) { "use strict"; var i = n(75),
        r = n(15),
        a = n(52);
    t.exports = function(t, e, n) { e = i(e);
        e in t ? r.f(t, e, a(0, n)) : t[e] = n } }, function(t, e, n) { var i = n(16),
        r = n(29),
        a = n(5)("species");
    t.exports = function(t, e) { var n; return r(t) && ("function" == typeof(n = t.constructor) && (n === Array || r(n.prototype)) || i(n) && null === (n = n[a])) && (n = void 0), new(void 0 === n ? Array : n)(0 === e ? 0 : e) } }, function(t, e, n) { var i = n(8),
        r = n(5)("species");
    t.exports = function(e) { return !i(function() { var t = []; return (t.constructor = {})[r] = function() { return { foo: 1 } }, 1 !== t[e](Boolean).foo }) } }, function(t, e) { t.exports = function(t) { if (t && t.__esModule) return t; var e, n = {}; if (null != t)
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && ((e = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, i) : {}).get || e.set ? Object.defineProperty(n, i, e) : n[i] = t[i]); return n.default = t, n } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
    e.clone = y, e.addLast = r, e.addFirst = a, e.removeLast = s, e.removeFirst = o, e.insert = l, e.removeAt = u, e.replaceAt = d, e.getIn = h, e.set = f, e.setIn = b, e.update = T, e.updateIn = I, e.merge = _, e.mergeDeep = A, e.mergeIn = S, e.omit = x, e.addDefaults = R; var p = "INVALID_ARGS";

    function m(t) { throw new Error(t) }

    function g(t) { var e = Object.keys(t); return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e } var c = {}.hasOwnProperty;

    function y(t) { if (Array.isArray(t)) return t.slice(); for (var e = g(t), n = {}, i = 0; i < e.length; i++) { var r = e[i];
            n[r] = t[r] } return n }

    function v(t, e, n) { var i = n;
        null == i && m(p); for (var r = !1, a = arguments.length, s = Array(3 < a ? a - 3 : 0), o = 3; o < a; o++) s[o - 3] = arguments[o]; for (var l = 0; l < s.length; l++) { var c = s[l]; if (null != c) { var u = g(c); if (u.length)
                    for (var d = 0; d <= u.length; d++) { var h, f = u[d];
                        t && void 0 !== i[f] || (h = c[f], e && E(i[f]) && E(h) && (h = v(t, e, i[f], h)), void 0 !== h && h !== i[f] && (r || (r = !0, i = y(i)), i[f] = h)) } } } return i }

    function E(t) { var e = void 0 === t ? "undefined" : i(t); return null != t && ("object" === e || "function" === e) }

    function r(t, e) { return Array.isArray(e) ? t.concat(e) : t.concat([e]) }

    function a(t, e) { return (Array.isArray(e) ? e : [e]).concat(t) }

    function s(t) { return t.length ? t.slice(0, t.length - 1) : t }

    function o(t) { return t.length ? t.slice(1) : t }

    function l(t, e, n) { return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e)) }

    function u(t, e) { return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1)) }

    function d(t, e, n) { if (t[e] === n) return t; for (var i = t.length, r = Array(i), a = 0; a < i; a++) r[a] = t[a]; return r[e] = n, r }

    function h(t, e) { if (Array.isArray(e) || m(p), null != t) { for (var n = t, i = 0; i < e.length; i++) { var r = e[i]; if (void 0 === (n = null != n ? n[r] : void 0)) return n } return n } }

    function f(t, e, n) { t = null == t ? "number" == typeof e ? [] : {} : t; if (t[e] === n) return t;
        t = y(t); return t[e] = n, t }

    function b(t, e, n) { return e.length ? function t(e, n, i, r) { var a = n[r]; return f(e, a, r === n.length - 1 ? i : t(E(e) && E(e[a]) ? e[a] : "number" == typeof n[r + 1] ? [] : {}, n, i, r + 1)) }(t, e, n, 0) : n }

    function T(t, e, n) { return f(t, e, n(null == t ? void 0 : t[e])) }

    function I(t, e, n) { return b(t, e, n(h(t, e))) }

    function _(t, e, n, i, r, a) { for (var s = arguments.length, o = Array(6 < s ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l]; return o.length ? v.call.apply(v, [null, !1, !1, t, e, n, i, r, a].concat(o)) : v(!1, !1, t, e, n, i, r, a) }

    function A(t, e, n, i, r, a) { for (var s = arguments.length, o = Array(6 < s ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l]; return o.length ? v.call.apply(v, [null, !1, !0, t, e, n, i, r, a].concat(o)) : v(!1, !0, t, e, n, i, r, a) }

    function S(t, e, n, i, r, a, s) { var o = h(t, e);
        null == o && (o = {}); for (var l = arguments.length, c = Array(7 < l ? l - 7 : 0), u = 7; u < l; u++) c[u - 7] = arguments[u]; return b(t, e, c.length ? v.call.apply(v, [null, !1, !1, o, n, i, r, a, s].concat(c)) : v(!1, !1, o, n, i, r, a, s)) }

    function x(t, e) { for (var n = Array.isArray(e) ? e : [e], i = !1, r = 0; r < n.length; r++)
            if (c.call(t, n[r])) { i = !0; break }
        if (!i) return t; for (var a = {}, s = g(t), o = 0; o < s.length; o++) { var l = s[o];
            0 <= n.indexOf(l) || (a[l] = t[l]) } return a }

    function R(t, e, n, i, r, a) { for (var s = arguments.length, o = Array(6 < s ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l]; return o.length ? v.call.apply(v, [null, !0, !1, t, e, n, i, r, a].concat(o)) : v(!0, !1, t, e, n, i, r, a) } var P = { clone: y, addLast: r, addFirst: a, removeLast: s, removeFirst: o, insert: l, removeAt: u, replaceAt: d, getIn: h, set: f, setIn: b, update: T, updateIn: I, merge: _, mergeDeep: A, mergeIn: S, omit: x, addDefaults: R };
    e.default = P }, function(e, t) {
    function n(t) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function i(t) { return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? e.exports = i = function(t) { return n(t) } : e.exports = i = function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t) }, i(t) }
    e.exports = i }, function(t, e, n) { var i = n(160),
        r = n(161),
        a = n(162),
        s = n(163),
        n = n(164);

    function o(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var i = t[e];
            this.set(i[0], i[1]) } }
    o.prototype.clear = i, o.prototype.delete = r, o.prototype.get = a, o.prototype.has = s, o.prototype.set = n, t.exports = o }, function(t, e, n) { var i = n(56);
    t.exports = function(t, e) { for (var n = t.length; n--;)
            if (i(t[n][0], e)) return n;
        return -1 } }, function(t, e) { var n = function() { return this }(); try { n = n || new Function("return this")() } catch (t) { "object" == typeof window && (n = window) }
    t.exports = n }, function(t, e, n) { n = n(19)(Object, "create");
    t.exports = n }, function(t, e, n) { var i = n(184);
    t.exports = function(t, e) { return t = t.__data__, i(e) ? t["string" == typeof e ? "string" : "hash"] : t.map } }, function(t, e, n) { var i = n(103),
        r = n(64),
        a = n(26);
    t.exports = function(t) { return (a(t) ? i : r)(t) } }, function(t, e, n) { var i = n(202),
        r = n(20),
        n = Object.prototype,
        a = n.hasOwnProperty,
        s = n.propertyIsEnumerable,
        i = i(function() { return arguments }()) ? i : function(t) { return r(t) && a.call(t, "callee") && !s.call(t, "callee") };
    t.exports = i }, function(t, e, n) { var i = n(2),
        r = n(69),
        a = n(213),
        s = n(216);
    t.exports = function(t, e) { return i(t) ? t : r(t, e) ? [t] : a(s(t)) } }, function(t, e, n) { var i = n(25),
        r = n(20);
    t.exports = function(t) { return "symbol" == typeof t || r(t) && "[object Symbol]" == i(t) } }, function(t, e, n) { var i = n(7),
        r = n(74),
        a = n(76),
        n = "__core-js_shared__",
        s = i[n] || r(n, {});
    (t.exports = function(t, e) { return s[t] || (s[t] = void 0 !== e ? e : {}) })("versions", []).push({ version: "3.1.3", mode: a ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" }) }, function(t, e) { t.exports = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function(t, e, n) { var i = n(8),
        r = n(79),
        a = "".split;
    t.exports = i(function() { return !Object("z").propertyIsEnumerable(0) }) ? function(t) { return "String" == r(t) ? a.call(t, "") : Object(t) } : Object }, function(t, e, n) { var a = n(55);
    t.exports = function(i, r, t) { if (a(i), void 0 === r) return i; switch (t) {
            case 0:
                return function() { return i.call(r) };
            case 1:
                return function(t) { return i.call(r, t) };
            case 2:
                return function(t, e) { return i.call(r, t, e) };
            case 3:
                return function(t, e, n) { return i.call(r, t, e, n) } } return function() { return i.apply(r, arguments) } } }, function(t, e) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(String(t) + " is not a function"); return t } }, function(t, e) { t.exports = function(t, e) { return t === e || t != t && e != e } }, function(t, e, n) { n = n(19)(n(9), "Map");
    t.exports = n }, function(t, e, n) { var i = n(176),
        r = n(183),
        a = n(185),
        s = n(186),
        n = n(187);

    function o(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var i = t[e];
            this.set(i[0], i[1]) } }
    o.prototype.clear = i, o.prototype.delete = r, o.prototype.get = a, o.prototype.has = s, o.prototype.set = n, t.exports = o }, function(t, e) { t.exports = function(t, e) { for (var n = -1, i = e.length, r = t.length; ++n < i;) t[r + n] = e[n]; return t } }, function(t, a, s) {
    (function(t) { var e = s(9),
            n = s(203),
            i = a && !a.nodeType && a,
            r = i && "object" == typeof t && t && !t.nodeType && t,
            e = r && r.exports === i ? e.Buffer : void 0,
            n = (e ? e.isBuffer : void 0) || n;
        t.exports = n }).call(this, s(104)(t)) }, function(t, e) { var i = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) { var n = typeof t; return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && i.test(t)) && -1 < t && t % 1 == 0 && t < e } }, function(t, e, n) { var i = n(204),
        r = n(205),
        n = n(206),
        n = n && n.isTypedArray,
        i = n ? r(n) : i;
    t.exports = i }, function(t, e) { t.exports = function(t) { return "number" == typeof t && -1 < t && t % 1 == 0 && t <= 9007199254740991 } }, function(t, e, n) { var i = n(65),
        r = n(207),
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t) { if (!i(t)) return r(t); var e, n = []; for (e in Object(t)) a.call(t, e) && "constructor" != e && n.push(e); return n } }, function(t, e) { var n = Object.prototype;
    t.exports = function(t) { var e = t && t.constructor; return t === ("function" == typeof e && e.prototype || n) } }, function(t, e, n) { var i = n(208),
        r = n(57),
        a = n(209),
        s = n(210),
        o = n(106),
        l = n(25),
        c = n(97),
        u = "[object Map]",
        d = "[object Promise]",
        h = "[object Set]",
        f = "[object WeakMap]",
        p = "[object DataView]",
        m = c(i),
        g = c(r),
        y = c(a),
        v = c(s),
        E = c(o),
        n = l;
    (i && n(new i(new ArrayBuffer(1))) != p || r && n(new r) != u || a && n(a.resolve()) != d || s && n(new s) != h || o && n(new o) != f) && (n = function(t) { var e = l(t),
            t = "[object Object]" == e ? t.constructor : void 0,
            t = t ? c(t) : ""; if (t) switch (t) {
            case m:
                return p;
            case g:
                return u;
            case y:
                return d;
            case v:
                return h;
            case E:
                return f }
        return e }), t.exports = n }, function(t, e, n) { var i = n(68);
    t.exports = function(t, e, n) { return void 0 === (e = null == t ? void 0 : i(t, e)) ? n : e } }, function(t, e, n) { var r = n(49),
        a = n(33);
    t.exports = function(t, e) { for (var n = 0, i = (e = r(e, t)).length; null != t && n < i;) t = t[a(e[n++])]; return n && n == i ? t : void 0 } }, function(t, e, n) { var i = n(2),
        r = n(50),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
    t.exports = function(t, e) { if (i(t)) return !1; var n = typeof t; return !("number" != n && "symbol" != n && "boolean" != n && null != t && !r(t)) || (s.test(t) || !a.test(t) || null != e && t in Object(e)) } }, function(t, e) { t.exports = function(t) { return t } }, function(t, e, n) { var i = n(224),
        r = n(12),
        a = n(50),
        s = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        c = parseInt;
    t.exports = function(t) { if ("number" == typeof t) return t; if (a(t)) return NaN; if (r(t) && (e = "function" == typeof t.valueOf ? t.valueOf() : t, t = r(e) ? e + "" : e), "string" != typeof t) return 0 === t ? t : +t;
        t = i(t); var e = o.test(t); return e || l.test(t) ? c(t.slice(2), e ? 2 : 8) : s.test(t) ? NaN : +t } }, function(t, e) { t.exports = function(t) { if (null == t) throw TypeError("Can't call method on " + t); return t } }, function(t, e, n) { var i, r, a, s, o, l, c, u, d = n(230),
        h = n(7),
        f = n(16),
        p = n(21),
        m = n(17),
        g = n(77),
        n = n(78),
        h = h.WeakMap;
    c = d ? (i = new h, r = i.get, a = i.has, s = i.set, o = function(t, e) { return s.call(i, t, e), e }, l = function(t) { return r.call(i, t) || {} }, function(t) { return a.call(i, t) }) : (n[u = g("state")] = !0, o = function(t, e) { return p(t, u, e), e }, l = function(t) { return m(t, u) ? t[u] : {} }, function(t) { return m(t, u) }), t.exports = { set: o, get: l, has: c, enforce: function(t) { return c(t) ? l(t) : o(t, {}) }, getterFor: function(n) { return function(t) { var e; if (!f(t) || (e = l(t)).type !== n) throw TypeError("Incompatible receiver, " + n + " required"); return e } } } }, function(t, e, n) { var i = n(7),
        r = n(21);
    t.exports = function(e, n) { try { r(i, e, n) } catch (t) { i[e] = n } return n } }, function(t, e, n) { var r = n(16);
    t.exports = function(t, e) { if (!r(t)) return t; var n, i; if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i; if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i; if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i; throw TypeError("Can't convert object to primitive value") } }, function(t, e) { t.exports = !1 }, function(t, e, n) { var i = n(51),
        r = n(115),
        a = i("keys");
    t.exports = function(t) { return a[t] || (a[t] = r(t)) } }, function(t, e) { t.exports = {} }, function(t, e) { var n = {}.toString;
    t.exports = function(t) { return n.call(t).slice(8, -1) } }, function(t, e, n) {
    function i(t) { return "function" == typeof t ? t : void 0 } var r = n(119),
        a = n(7);
    t.exports = function(t, e) { return arguments.length < 2 ? i(r[t]) || i(a[t]) : r[t] && r[t][e] || a[t] && a[t][e] } }, function(t, e, n) { var l = n(22),
        c = n(3),
        u = n(34),
        n = function(o) { return function(t, e, n) { var i, r = l(t),
                    a = c(r.length),
                    s = u(n, a); if (o && e != e) { for (; s < a;)
                        if ((i = r[s++]) != i) return !0 } else
                    for (; s < a; s++)
                        if ((o || s in r) && r[s] === e) return o || s || 0; return !o && -1 } };
    t.exports = { includes: n(!0), indexOf: n(!1) } }, function(t, e) { t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"] }, function(t, e, n) { "use strict"; var i = n(288);

    function r(t, e) { var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n) } var a = window.jQuery,
        s = {},
        n = { reset: function(t, e) { i.triggers.reset(t, e) }, intro: function(t, e) { i.triggers.intro(t, e), r(e, "COMPONENT_ACTIVE") }, outro: function(t, e) { i.triggers.outro(t, e), r(e, "COMPONENT_INACTIVE") } };
    s.triggers = {}, s.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }, a.extend(s.triggers, n), t.exports = s }, function(t, e, n) { "use strict";
    n.r(e), n.d(e, "ActionTypes", function() { return p }), n.d(e, "default", function() { return m }); var h = n(129),
        f = n(302),
        p = { INIT: "@@redux/INIT" };

    function m(t, e, n) { if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) { if ("function" != typeof n) throw new Error("Expected the enhancer to be a function."); return n(m)(t, e) } if ("function" != typeof t) throw new Error("Expected the reducer to be a function."); var i = t,
            r = e,
            a = [],
            s = a,
            o = !1;

        function l() { s === a && (s = a.slice()) }

        function c() { return r }

        function u(e) { if ("function" != typeof e) throw new Error("Expected listener to be a function."); var n = !0; return l(), s.push(e),
                function() { var t;
                    n && (n = !1, l(), t = s.indexOf(e), s.splice(t, 1)) } }

        function d(t) { if (!Object(h.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions."); if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?'); if (o) throw new Error("Reducers may not dispatch actions."); try { o = !0, r = i(r, t) } finally { o = !1 } for (var e = a = s, n = 0; n < e.length; n++) e[n](); return t } return d({ type: p.INIT }), (e = { dispatch: d, subscribe: u, getState: c, replaceReducer: function(t) { if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                i = t, d({ type: p.INIT }) } })[f.default] = function() { var n = u,
                t = { subscribe: function(t) { if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

                        function e() { t.next && t.next(r) } return e(), { unsubscribe: n(e) } } }; return t[f.default] = function() { return this }, t }, e } }, function(t, e, n) { "use strict";

    function i() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n]; if (0 === e.length) return function(t) { return t }; if (1 === e.length) return e[0]; var i = e[e.length - 1],
            r = e.slice(0, -1); return function() { return r.reduceRight(function(t, e) { return e(t) }, i.apply(void 0, arguments)) } }
    n.r(e), n.d(e, "default", function() { return i }) }, function(t, e, n) { "use strict"; var i = n(1);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0; var r = i(n(136)),
        a = "undefined" != typeof window;
    e.IS_BROWSER_ENV = a;
    i = function(t, e) { return a ? t() : e }, n = (e.withBrowser = i)(function() { return (0, r.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function(t) { return t in Element.prototype }) });
    e.ELEMENT_MATCHES = n;
    n = i(function() { var t = document.createElement("i"),
            e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]; try { for (var n = e.length, i = 0; i < n; i++) { var r = e[i]; if (t.style.display = r, t.style.display === r) return r } return "" } catch (t) { return "" } }, "flex");
    e.FLEX_PREFIXED = n;
    i = i(function() { var t = document.createElement("i"); if (null == t.style.transform)
            for (var e = ["Webkit", "Moz", "ms"], n = e.length, i = 0; i < n; i++) { var r = e[i] + "Transform"; if (void 0 !== t.style[r]) return r }
        return "transform" }, "transform"), i = (e.TRANSFORM_PREFIXED = i).split("transform")[0], i = i ? i + "TransformStyle" : "transformStyle";
    e.TRANSFORM_STYLE_PREFIXED = i }, function(t, e, n) { "use strict"; var i = n(1);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0; var r = i(n(31)),
        c = n(6),
        i = n(30),
        n = c.IX2EngineActionTypes,
        a = n.IX2_RAW_DATA_IMPORTED,
        s = n.IX2_SESSION_INITIALIZED,
        o = n.IX2_SESSION_STARTED,
        l = n.IX2_SESSION_STOPPED,
        u = n.IX2_PREVIEW_REQUESTED,
        d = n.IX2_PLAYBACK_REQUESTED,
        h = n.IX2_STOP_REQUESTED,
        f = n.IX2_CLEAR_REQUESTED,
        p = n.IX2_EVENT_LISTENER_ADDED,
        m = n.IX2_TEST_FRAME_RENDERED,
        g = n.IX2_EVENT_STATE_CHANGED,
        y = n.IX2_ANIMATION_FRAME_CHANGED,
        v = n.IX2_PARAMETER_CHANGED,
        E = n.IX2_INSTANCE_ADDED,
        b = n.IX2_INSTANCE_STARTED,
        T = n.IX2_INSTANCE_REMOVED,
        I = n.IX2_ELEMENT_STATE_CHANGED,
        _ = n.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        A = n.IX2_VIEWPORT_WIDTH_CHANGED,
        S = n.IX2_MEDIA_QUERIES_DEFINED,
        x = i.IX2VanillaUtils.reifyState;
    e.rawDataImported = function(t) { return { type: a, payload: (0, r.default)({}, x(t)) } };
    e.sessionInitialized = function(t) { var e = t.hasBoundaryNodes,
            t = t.reducedMotion; return { type: s, payload: { hasBoundaryNodes: e, reducedMotion: t } } };
    e.sessionStarted = function() { return { type: o } };
    e.sessionStopped = function() { return { type: l } };
    e.previewRequested = function(t) { var e = t.rawData,
            t = t.defer; return { type: u, payload: { defer: t, rawData: e } } };
    e.playbackRequested = function(t) { var e = t.actionTypeId,
            n = void 0 === e ? c.ActionTypeConsts.GENERAL_START_ACTION : e,
            i = t.actionListId,
            r = t.actionItemId,
            a = t.eventId,
            s = t.allowEvents,
            o = t.immediate,
            l = t.testManual,
            e = t.verbose,
            t = t.rawData; return { type: d, payload: { actionTypeId: n, actionListId: i, actionItemId: r, testManual: l, eventId: a, allowEvents: s, immediate: o, verbose: e, rawData: t } } };
    e.stopRequested = function(t) { return { type: h, payload: { actionListId: t } } };
    e.clearRequested = function() { return { type: f } };
    e.eventListenerAdded = function(t, e) { return { type: p, payload: { target: t, listenerParams: e } } };
    e.testFrameRendered = function() { return { type: m, payload: { step: 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1 } } };
    e.eventStateChanged = function(t, e) { return { type: g, payload: { stateKey: t, newState: e } } };
    e.animationFrameChanged = function(t, e) { return { type: y, payload: { now: t, parameters: e } } };
    e.parameterChanged = function(t, e) { return { type: v, payload: { key: t, value: e } } };
    e.instanceAdded = function(t) { return { type: E, payload: (0, r.default)({}, t) } };
    e.instanceStarted = function(t, e) { return { type: b, payload: { instanceId: t, time: e } } };
    e.instanceRemoved = function(t) { return { type: T, payload: { instanceId: t } } };
    e.elementStateChanged = function(t, e, n, i) { return { type: I, payload: { elementId: t, actionTypeId: e, current: n, actionItem: i } } };
    e.actionListPlaybackChanged = function(t) { var e = t.actionListId,
            t = t.isPlaying; return { type: _, payload: { actionListId: e, isPlaying: t } } };
    e.viewportWidthChanged = function(t) { var e = t.width,
            t = t.mediaQueries; return { type: A, payload: { width: e, mediaQueries: t } } };
    e.mediaQueriesDefined = function() { return { type: S } } }, function(t, e, n) { var i = n(149),
        n = n(89);

    function r(t, e) { this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0 }(r.prototype = i(n.prototype)).constructor = r, t.exports = r }, function(t, e) { t.exports = function() {} }, function(t, e, n) { var i = n(149),
        n = n(89);

    function r(t) { this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [] }(r.prototype = i(n.prototype)).constructor = r, t.exports = r }, function(t, e, n) { "use strict"; var Z = n(1)(n(41));
    window.tram = function(o) {
        function e(t, e) { return (new B.Bare).init(t, e) }

        function l(t) { t = parseInt(t.slice(1), 16); return [t >> 16 & 255, t >> 8 & 255, 255 & t] }

        function c(t, e, n) { return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1) }

        function u() {}

        function g(t, e, n) { if (void 0 !== e && (n = e), void 0 === t) return n;
            e = n; return K.test(t) || !$.test(t) ? e = parseInt(t, 10) : $.test(t) && (e = 1e3 * parseFloat(t)), e < 0 && (e = 0), e == e ? e : n }

        function y(t) { j.debug && window && window.console.warn(t) } var d, h, f, t = (d = "prototype", h = {}.hasOwnProperty, function e(n, t) {
                function i() { var t = new r; return D(t.init) && t.init.apply(t, arguments), t }

                function r() {}
                t === f && (t = n, n = Object), i.Bare = r; var a, s = w[d] = n[d],
                    o = r[d] = i[d] = new w; return (o.constructor = i).mixin = function(t) { return r[d] = i[d] = e(i, t)[d], i }, (i.open = function(t) { if (a = {}, D(t) ? a = t.call(i, o, s, i, n) : M(t) && (a = t), M(a))
                        for (var e in a) h.call(a, e) && (o[e] = a[e]); return D(o.init) || (o.init = n), i })(t) }),
            p = { ease: ["ease", function(t, e, n, i) { var r = (t /= i) * t,
                        i = r * t; return e + n * (-2.75 * i * r + 11 * r * r + -15.5 * i + 8 * r + .25 * t) }], "ease-in": ["ease-in", function(t, e, n, i) { i = (t /= i) * t, t *= i; return e + n * (-1 * t * i + 3 * i * i + -3 * t + 2 * i) }], "ease-out": ["ease-out", function(t, e, n, i) { var r = (t /= i) * t,
                        i = r * t; return e + n * (.3 * i * r + -1.6 * r * r + 2.2 * i + -1.8 * r + 1.9 * t) }], "ease-in-out": ["ease-in-out", function(t, e, n, i) { i = (t /= i) * t, t *= i; return e + n * (2 * t * i + -5 * i * i + 2 * t + 2 * i) }], linear: ["linear", function(t, e, n, i) { return n * t / i + e }], "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, i) { return n * (t /= i) * t + e }], "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, i) { return -n * (t /= i) * (t - 2) + e }], "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, i) { return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e }], "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, i) { return n * (t /= i) * t * t + e }], "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, i) { return n * ((t = t / i - 1) * t * t + 1) + e }], "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, i) { return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e }], "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, i) { return n * (t /= i) * t * t * t + e }], "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, i) { return -n * ((t = t / i - 1) * t * t * t - 1) + e }], "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, i) { return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e }], "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, i) { return n * (t /= i) * t * t * t * t + e }], "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, i) { return n * ((t = t / i - 1) * t * t * t * t + 1) + e }], "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, i) { return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e }], "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, i) { return -n * Math.cos(t / i * (Math.PI / 2)) + n + e }], "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, i) { return n * Math.sin(t / i * (Math.PI / 2)) + e }], "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, i) { return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + e }], "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, i) { return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e }], "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, i) { return t === i ? e + n : n * (1 - Math.pow(2, -10 * t / i)) + e }], "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, i) { return 0 === t ? e : t === i ? e + n : (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e }], "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, i) { return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e }], "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, i) { return n * Math.sqrt(1 - (t = t / i - 1) * t) + e }], "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, i) { return (t /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e }], "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, i, r) { return void 0 === r && (r = 1.70158), n * (t /= i) * t * ((r + 1) * t - r) + e }], "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, i, r) { return void 0 === r && (r = 1.70158), n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e }], "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, i, r) { return void 0 === r && (r = 1.70158), (t /= i / 2) < 1 ? n / 2 * t * t * ((1 + (r *= 1.525)) * t - r) + e : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e }] },
            n = { "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)", "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)", "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)" },
            i = document,
            r = window,
            a = "bkwld-tram",
            m = /[\-\.0-9]/g,
            v = /[A-Z]/,
            E = "number",
            b = /^(rgb|#)/,
            T = /(em|cm|mm|in|pt|pc|px)$/,
            I = /(em|cm|mm|in|pt|pc|px|%)$/,
            _ = /(deg|rad|turn)$/,
            A = "unitless",
            s = /(all|none) 0s ease 0s/,
            S = /^(width|height)$/,
            x = i.createElement("a"),
            R = ["Webkit", "Moz", "O", "ms"],
            P = ["-webkit-", "-moz-", "-o-", "-ms-"],
            C = function(t) { if (t in x.style) return { dom: t, css: t }; for (var e, n = "", i = t.split("-"), r = 0; r < i.length; r++) n += i[r].charAt(0).toUpperCase() + i[r].slice(1); for (r = 0; r < R.length; r++)
                    if ((e = R[r] + n) in x.style) return { dom: e, css: P[r] + t } },
            O = e.support = { bind: Function.prototype.bind, transform: C("transform"), transition: C("transition"), backface: C("backface-visibility"), timing: C("transition-timing-function") };

        function M(t) { return "object" == (0, Z.default)(t) }

        function D(t) { return "function" == typeof t }

        function w() {} if (O.transition) { var N = O.timing.dom; if (x.style[N] = p["ease-in-back"][0], !x.style[N])
                for (var L in n) p[L][0] = n[L] } var k, F = e.frame = (k = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.oRequestAnimationFrame || r.msRequestAnimationFrame) && O.bind ? k.bind(r) : function(t) { r.setTimeout(t, 16) },
            V = e.now = (i = r.performance, (C = i && (i.now || i.webkitNow || i.msNow || i.mozNow)) && O.bind ? C.bind(i) : Date.now || function() { return +new Date }),
            G = t(function(n) {
                function c(t, e) { var n = function(t) { for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) { var r = t[e];
                                r && i.push(r) } return i }(("" + t).split(" ")),
                        i = n[0];
                    e = e || {}; var r = q[i]; if (!r) return y("Unsupported property: " + i); if (!e.weak || !this.props[i]) { var a = r[0],
                            t = this.props[i]; return (t = t || (this.props[i] = new a.Bare)).init(this.$el, n, r, e), t } }

                function e(t, e, n) { if (t) { var i, r, a, s, o = (0, Z.default)(t); if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new z({ duration: t, context: this, complete: l }), void(this.active = !0); if ("string" == o && e) { switch (t) {
                                case "hide":
                                    d.call(this); break;
                                case "stop":
                                    u.call(this); break;
                                case "redraw":
                                    h.call(this); break;
                                default:
                                    c.call(this, t, n && n[1]) } return l.call(this) } "function" != o ? "object" == o && (i = 0, p.call(this, t, function(t, e) { t.span > i && (i = t.span), t.stop(), t.animate(e) }, function(t) { "wait" in t && (i = g(t.wait, 0)) }), f.call(this), 0 < i && (this.timer = new z({ duration: i, context: this }), this.active = !0, e && (this.timer.complete = l)), r = this, a = !1, s = {}, F(function() { p.call(r, t, function(t) { t.active && (a = !0, s[t.name] = t.nextStyle) }), a && r.$el.css(s) })) : t.call(this, this) } }

                function l() { var t;
                    this.timer && this.timer.destroy(), this.active = !1, this.queue.length && (t = this.queue.shift(), e.call(this, t.options, !0, t.args)) }

                function u(t) { var e;
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, Z.default)(t) && null != t ? t : this.props, p.call(this, e, m), f.call(this) }

                function d() { u.call(this), this.el.style.display = "none" }

                function h() { this.el.offsetHeight }

                function f() { var t, e, n = []; for (t in this.upstream && n.push(this.upstream), this.props)(e = this.props[t]).active && n.push(e.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[O.transition.dom] = n) }

                function p(t, e, n) { var i, r, a, s, o = e !== m,
                        l = {}; for (i in t) a = t[i], i in Q ? (l.transform || (l.transform = {}), l.transform[i] = a) : (v.test(i) && (i = i.replace(/[A-Z]/g, function(t) { return "-" + t.toLowerCase() })), i in q ? l[i] = a : (s = s || {})[i] = a); for (i in l) { if (a = l[i], !(r = this.props[i])) { if (!o) continue;
                            r = c.call(this, i) }
                        e.call(this, r, a) }
                    n && s && n.call(this, s) }

                function m(t) { t.stop() }

                function i(t, e) { t.set(e) }

                function r(t) { this.$el.css(t) }

                function t(t, e) { n[t] = function() { return this.children ? function(t, e) { var n, i = this.children.length; for (n = 0; n < i; n++) t.apply(this.children[n], e); return this }.call(this, e, arguments) : (this.el && e.apply(this, arguments), this) } }
                n.init = function(t) { var e;
                    this.$el = o(t), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, j.keepInherited && !j.fallback && (e = W(this.el, "transition")) && !s.test(e) && (this.upstream = e), O.backface && j.hideBackface && X(this.el, O.backface.css, "hidden") }, t("add", c), t("start", e), t("wait", function(t) { t = g(t, 0), this.active ? this.queue.push({ options: t }) : (this.timer = new z({ duration: t, context: this, complete: l }), this.active = !0) }), t("then", function(t) { return this.active ? (this.queue.push({ options: t, args: arguments }), void(this.timer.complete = l)) : y("No active transition timer. Use start() or wait() before then().") }), t("next", l), t("stop", u), t("set", function(t) { u.call(this, t), p.call(this, t, i, r) }), t("show", function(t) { "string" != typeof t && (t = "block"), this.el.style.display = t }), t("hide", d), t("redraw", h), t("destroy", function() { u.call(this), o.removeData(this.el, a), this.$el = this.el = null }) }),
            B = t(G, function(t) {
                function r(t, e) { var n = o.data(t, a) || o.data(t, a, new G.Bare); return n.el || n.init(t), e ? n.start(e) : n }
                t.init = function(t, n) { t = o(t); if (!t.length) return this; if (1 === t.length) return r(t[0], n); var i = []; return t.each(function(t, e) { i.push(r(e, n)) }), this.children = i, this } }),
            N = t(function(t) {
                function n() { var t = this.get();
                    this.update("auto"); var e = this.get(); return this.update(t), e } var r = 500,
                    a = "ease",
                    s = 0;
                t.init = function(t, e, n, i) { this.$el = t, this.el = t[0];
                    t = e[0];
                    n[2] && (t = n[2]), Y[t] && (t = Y[t]), this.name = t, this.type = n[1], this.duration = g(e[1], this.duration, r), this.ease = (t = e[2], n = this.ease, n = void 0 !== n ? n : a, t in p ? t : n), this.delay = g(e[3], this.delay, s), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = S.test(this.name), this.unit = i.unit || this.unit || j.defaultUnit, this.angle = i.angle || this.angle || j.defaultAngle, j.fallback || i.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + " " + this.duration + "ms" + ("ease" != this.ease ? " " + p[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : "")) }, t.set = function(t) { t = this.convert(t, this.type), this.update(t), this.redraw() }, t.transition = function(t) { this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = n.call(this))), this.nextStyle = t }, t.fallback = function(t) { var e = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == e && (e = this.convert(this.get(), this.type)), "auto" == t && (t = n.call(this))), this.tween = new U({ from: e, to: t, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this }) }, t.get = function() { return W(this.el, this.name) }, t.update = function(t) { X(this.el, this.name, t) }, t.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, X(this.el, this.name, this.get())); var t = this.tween;
                    t && t.context && t.destroy() }, t.convert = function(t, e) { if ("auto" == t && this.auto) return t; var n, i, r, a, s = "number" == typeof t,
                        o = "string" == typeof t; switch (e) {
                        case E:
                            if (s) return t; if (o && "" === t.replace(m, "")) return +t;
                            n = "number(unitless)"; break;
                        case b:
                            if (o) { if ("" === t && this.original) return this.original; if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : ((r = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(i = t)) ? c(r[1], r[2], r[3]) : i).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3") }
                            n = "hex or rgb string"; break;
                        case T:
                            if (s) return t + this.unit; if (o && e.test(t)) return t;
                            n = "number(px) or string(unit)"; break;
                        case I:
                            if (s) return t + this.unit; if (o && e.test(t)) return t;
                            n = "number(px) or string(unit or %)"; break;
                        case _:
                            if (s) return t + this.angle; if (o && e.test(t)) return t;
                            n = "number(deg) or string(angle)"; break;
                        case A:
                            if (s) return t; if (o && I.test(t)) return t;
                            n = "number(unitless) or string(unit or %)" } return a = t, y("Type warning: Expected: [" + n + "] Got: [" + (0, Z.default)(a) + "] " + a), t }, t.redraw = function() { this.el.offsetHeight } }),
            k = t(N, function(t, e) { t.init = function() { e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), b)) } }),
            C = t(N, function(t, e) { t.init = function() { e.init.apply(this, arguments), this.animate = this.fallback }, t.get = function() { return this.$el[this.name]() }, t.update = function(t) { this.$el[this.name](t) } }),
            i = t(N, function(t, e) {
                function n(t, e) { var n, i, r, a; for (n in t) r = (a = Q[n])[0], i = a[1] || n, a = this.convert(t[n], r), e.call(this, i, a, r) }
                t.init = function() { e.init.apply(this, arguments), this.current || (this.current = {}, Q.perspective && j.perspective && (this.current.perspective = j.perspective, X(this.el, this.name, this.style(this.current)), this.redraw())) }, t.set = function(t) { n.call(this, t, function(t, e) { this.current[t] = e }), X(this.el, this.name, this.style(this.current)), this.redraw() }, t.transition = function(t) { var e = this.values(t);
                    this.tween = new H({ current: this.current, values: e, duration: this.duration, delay: this.delay, ease: this.ease }); var n, i = {}; for (n in this.current) i[n] = (n in e ? e : this.current)[n];
                    this.active = !0, this.nextStyle = this.style(i) }, t.fallback = function(t) { t = this.values(t);
                    this.tween = new H({ current: this.current, values: t, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this }) }, t.update = function() { X(this.el, this.name, this.style(this.current)) }, t.style = function(t) { var e, n = ""; for (e in t) n += e + "(" + t[e] + ") "; return n }, t.values = function(t) { var i, r = {}; return n.call(this, t, function(t, e, n) { r[t] = e, void 0 === this.current[t] && (i = 0, ~t.indexOf("scale") && (i = 1), this.current[t] = this.convert(i, n)) }), r } }),
            U = t(function(t) {
                function r() { var t, e, n, i = a.length; if (i)
                        for (F(r), e = V(), t = i; t--;)(n = a[t]) && n.render(e) } var i = { ease: p.ease[1], from: 0, to: 1 };
                t.init = function(t) { this.duration = t.duration || 0, this.delay = t.delay || 0; var e = t.ease || i.ease;
                    p[e] && (e = p[e][1]), "function" != typeof e && (e = i.ease), this.ease = e, this.update = t.update || u, this.complete = t.complete || u, this.context = t.context || this, this.name = t.name; var n = t.from,
                        e = t.to;
                    void 0 === n && (n = i.from), void 0 === e && (e = i.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof e ? (this.begin = n, this.change = e - n) : this.format(e, n), this.value = this.begin + this.unit, this.start = V(), !1 !== t.autoplay && this.play() }, t.play = function() { var t;
                    this.active || (this.start || (this.start = V()), this.active = !0, t = this, 1 === a.push(t) && F(r)) }, t.stop = function() { var t, e;
                    this.active && (this.active = !1, t = this, 0 <= (e = o.inArray(t, a)) && (t = a.slice(e + 1), a.length = e, t.length && (a = a.concat(t)))) }, t.render = function(t) { var e, n = t - this.start; if (this.delay) { if (n <= this.delay) return;
                        n -= this.delay } if (n < this.duration) { var i = this.ease(n, 0, 1, this.duration),
                            r = this.startRGB ? (e = this.startRGB, t = this.endRGB, n = i, c(e[0] + n * (t[0] - e[0]), e[1] + n * (t[1] - e[1]), e[2] + n * (t[2] - e[2]))) : (r = this.begin + i * this.change, Math.round(r * s) / s); return this.value = r + this.unit, void this.update.call(this.context, this.value) }
                    r = this.endHex || this.begin + this.change, this.value = r + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy() }, t.format = function(t, e) { if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = l(e), this.endRGB = l(t), this.endHex = t, this.begin = 0, void(this.change = 1); var n;
                    this.unit || ((n = e.replace(m, "")) !== t.replace(m, "") && y("Units do not match [" + "tween" + "]: " + e + ", " + t), this.unit = n), e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e }, t.destroy = function() { this.stop(), this.context = null, this.ease = this.update = this.complete = u }; var a = [],
                    s = 1e3 }),
            z = t(U, function(t) { t.init = function(t) { this.duration = t.duration || 0, this.complete = t.complete || u, this.context = t.context, this.play() }, t.render = function(t) { t - this.start < this.duration || (this.complete.call(this.context), this.destroy()) } }),
            H = t(U, function(t, e) { t.init = function(t) { var e, n; for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new U({ name: e, from: this.current[e], to: n, duration: t.duration, delay: t.delay, ease: t.ease, autoplay: !1 }));
                    this.play() }, t.render = function(t) { for (var e, n = !1, i = this.tweens.length; i--;)(e = this.tweens[i]).context && (e.render(t), this.current[e.name] = e.value, n = !0); return n ? void(this.update && this.update.call(this.context)) : this.destroy() }, t.destroy = function() { if (e.destroy.call(this), this.tweens) { for (var t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null } } }),
            j = e.config = { debug: !1, defaultUnit: "px", defaultAngle: "deg", keepInherited: !1, hideBackface: !1, perspective: "", fallback: !O.transition, agentTests: [] };
        (e.fallback = function(t) { if (!O.transition) return j.fallback = !0;
            j.agentTests.push("(" + t + ")");
            t = new RegExp(j.agentTests.join("|"), "i");
            j.fallback = t.test(navigator.userAgent) })("6.0.[2-5] Safari"), e.tween = function(t) { return new U(t) }, e.delay = function(t, e, n) { return new z({ complete: e, duration: t, context: n }) }, o.fn.tram = function(t) { return e.call(null, this, t) }; var X = o.style,
            W = o.css,
            Y = { transform: O.transform && O.transform.css },
            q = { color: [k, b], background: [k, b, "background-color"], "outline-color": [k, b], "border-color": [k, b], "border-top-color": [k, b], "border-right-color": [k, b], "border-bottom-color": [k, b], "border-left-color": [k, b], "border-width": [N, T], "border-top-width": [N, T], "border-right-width": [N, T], "border-bottom-width": [N, T], "border-left-width": [N, T], "border-spacing": [N, T], "letter-spacing": [N, T], margin: [N, T], "margin-top": [N, T], "margin-right": [N, T], "margin-bottom": [N, T], "margin-left": [N, T], padding: [N, T], "padding-top": [N, T], "padding-right": [N, T], "padding-bottom": [N, T], "padding-left": [N, T], "outline-width": [N, T], opacity: [N, E], top: [N, I], right: [N, I], bottom: [N, I], left: [N, I], "font-size": [N, I], "text-indent": [N, I], "word-spacing": [N, I], width: [N, I], "min-width": [N, I], "max-width": [N, I], height: [N, I], "min-height": [N, I], "max-height": [N, I], "line-height": [N, A], "scroll-top": [C, E, "scrollTop"], "scroll-left": [C, E, "scrollLeft"] },
            Q = {};
        O.transform && (q.transform = [i], Q = { x: [I, "translateX"], y: [I, "translateY"], rotate: [_], rotateX: [_], rotateY: [_], scale: [E], scaleX: [E], scaleY: [E], skew: [_], skewX: [_], skewY: [_] }), O.transform && O.backface && (Q.z = [I, "translateZ"], Q.rotateZ = [_], Q.scaleZ = [E], Q.perspective = [T]); var K = /ms/,
            $ = /s|\./; return o.tram = e }(window.jQuery) }, function(t, e, n) { var r = n(93),
        a = n(18),
        s = n(111),
        o = Math.max;
    t.exports = function(t, e, n) { var i = null == t ? 0 : t.length; return i ? ((n = null == n ? 0 : s(n)) < 0 && (n = o(i + n, 0)), r(t, a(e, 3), n)) : -1 } }, function(t, e) { t.exports = function(t, e, n, i) { for (var r = t.length, a = n + (i ? 1 : -1); i ? a-- : ++a < r;)
            if (e(t[a], a, t)) return a;
        return -1 } }, function(t, e, n) { var i = n(42),
        r = n(165),
        a = n(166),
        s = n(167),
        o = n(168),
        n = n(169);

    function l(t) { t = this.__data__ = new i(t);
        this.size = t.size }
    l.prototype.clear = r, l.prototype.delete = a, l.prototype.get = s, l.prototype.has = o, l.prototype.set = n, t.exports = l }, function(t, e, n) { var i = n(25),
        r = n(12);
    t.exports = function(t) { return !!r(t) && ("[object Function]" == (t = i(t)) || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t) } }, function(e, t, n) {
    (function(t) { t = "object" == typeof t && t && t.Object === Object && t;
        e.exports = t }).call(this, n(44)) }, function(t, e) { var n = Function.prototype.toString;
    t.exports = function(t) { if (null != t) { try { return n.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" } }, function(t, e, n) { var s = n(188),
        o = n(20);
    t.exports = function t(e, n, i, r, a) { return e === n || (null == e || null == n || !o(e) && !o(n) ? e != e && n != n : s(e, n, i, r, t, a)) } }, function(t, e, n) { var g = n(189),
        y = n(192),
        v = n(193);
    t.exports = function(t, e, n, i, r, a) { var s = 1 & n,
            o = t.length,
            l = e.length; if (o != l && !(s && o < l)) return !1; var c = a.get(t),
            l = a.get(e); if (c && l) return c == e && l == t; var u = -1,
            d = !0,
            h = 2 & n ? new g : void 0; for (a.set(t, e), a.set(e, t); ++u < o;) { var f, p = t[u],
                m = e[u]; if (i && (f = s ? i(m, p, u, e, t, a) : i(p, m, u, t, e, a)), void 0 !== f) { if (f) continue;
                d = !1; break } if (h) { if (!y(e, function(t, e) { if (!v(h, e) && (p === t || r(p, t, n, i, a))) return h.push(e) })) { d = !1; break } } else if (p !== m && !r(p, m, n, i, a)) { d = !1; break } } return a.delete(t), a.delete(e), d } }, function(t, e, n) { var i = n(59),
        r = n(2);
    t.exports = function(t, e, n) { return e = e(t), r(t) ? e : i(e, n(t)) } }, function(t, e, n) { var i = n(200),
        n = n(102),
        r = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        n = a ? function(e) { return null == e ? [] : (e = Object(e), i(a(e), function(t) { return r.call(e, t) })) } : n;
    t.exports = n }, function(t, e) { t.exports = function() { return [] } }, function(t, e, n) { var u = n(201),
        d = n(48),
        h = n(2),
        f = n(60),
        p = n(61),
        m = n(62),
        g = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) { var n, i = h(t),
            r = !i && d(t),
            a = !i && !r && f(t),
            s = !i && !r && !a && m(t),
            o = i || r || a || s,
            l = o ? u(t.length, String) : [],
            c = l.length; for (n in t) !e && !g.call(t, n) || o && ("length" == n || a && ("offset" == n || "parent" == n) || s && ("buffer" == n || "byteLength" == n || "byteOffset" == n) || p(n, c)) || l.push(n); return l } }, function(t, e) { t.exports = function(t) { return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function() { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() { return t.i } }), t.webpackPolyfill = 1), t } }, function(t, e) { t.exports = function(e, n) { return function(t) { return e(n(t)) } } }, function(t, e, n) { n = n(19)(n(9), "WeakMap");
    t.exports = n }, function(t, e, n) { var i = n(12);
    t.exports = function(t) { return t == t && !i(t) } }, function(t, e) { t.exports = function(e, n) { return function(t) { return null != t && (t[e] === n && (void 0 !== n || e in Object(t))) } } }, function(t, e) { t.exports = function(t, e) { for (var n = -1, i = null == t ? 0 : t.length, r = Array(i); ++n < i;) r[n] = e(t[n], n, t); return r } }, function(t, e) { t.exports = function(e) { return function(t) { return null == t ? void 0 : t[e] } } }, function(t, e, n) { var i = n(223);
    t.exports = function(t) { var e = i(t),
            t = e % 1; return e == e ? t ? e - t : e : 0 } }, function(t, e, n) { n = n(51);
    t.exports = n("native-function-to-string", Function.toString) }, function(t, e, n) { var i = n(14),
        r = n(8),
        a = n(114);
    t.exports = !i && !r(function() { return 7 != Object.defineProperty(a("div"), "a", { get: function() { return 7 } }).a }) }, function(t, e, n) { var i = n(7),
        n = n(16),
        r = i.document,
        a = n(r) && n(r.createElement);
    t.exports = function(t) { return a ? r.createElement(t) : {} } }, function(t, e) { var n = 0,
        i = Math.random();
    t.exports = function(t) { return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + i).toString(36) } }, function(t, e, n) { "use strict";

    function m() { return this } var g = n(0),
        y = n(237),
        v = n(122),
        E = n(243),
        b = n(124),
        T = n(21),
        I = n(118),
        i = n(5),
        _ = n(76),
        A = n(35),
        n = n(121),
        S = n.IteratorPrototype,
        x = n.BUGGY_SAFARI_ITERATORS,
        R = i("iterator"),
        P = "values",
        C = "entries";
    t.exports = function(t, e, n, i, r, a, s) { y(n, e, i);

        function o(t) { if (t === r && p) return p; if (!x && t in h) return h[t]; switch (t) {
                case "keys":
                case P:
                case C:
                    return function() { return new n(this, t) } } return function() { return new n(this) } } var l, c, u = e + " Iterator",
            d = !1,
            h = t.prototype,
            f = h[R] || h["@@iterator"] || r && h[r],
            p = !x && f || o(r),
            i = "Array" == e && h.entries || f; if (i && (t = v(i.call(new t)), S !== Object.prototype && t.next && (_ || v(t) === S || (E ? E(t, S) : "function" != typeof t[R] && T(t, R, m)), b(t, u, !0, !0), _ && (A[u] = m))), r == P && f && f.name !== P && (d = !0, p = function() { return f.call(this) }), _ && !s || h[R] === p || T(h, R, p), A[e] = p, r)
            if (l = { values: o(P), keys: a ? p : o("keys"), entries: o(C) }, s)
                for (c in l) !x && !d && c in h || I(h, c, l[c]);
            else g({ target: e, proto: !0, forced: x || d }, l);
        return l } }, function(t, e, n) { var i = n(14),
        r = n(231),
        a = n(52),
        s = n(22),
        o = n(75),
        l = n(17),
        c = n(113),
        u = Object.getOwnPropertyDescriptor;
    e.f = i ? u : function(t, e) { if (t = s(t), e = o(e, !0), c) try { return u(t, e) } catch (t) {}
        if (l(t, e)) return a(!r.f.call(t, e), t[e]) } }, function(t, e, n) { var s = n(7),
        i = n(51),
        o = n(21),
        l = n(17),
        c = n(74),
        r = n(112),
        n = n(73),
        a = n.get,
        u = n.enforce,
        d = String(r).split("toString");
    i("inspectSource", function(t) { return r.call(t) }), (t.exports = function(t, e, n, i) { var r = !!i && !!i.unsafe,
            a = !!i && !!i.enumerable,
            i = !!i && !!i.noTargetGet; "function" == typeof n && ("string" != typeof e || l(n, "name") || o(n, "name", e), u(n).source = d.join("string" == typeof e ? e : "")), t !== s ? (r ? !i && t[e] && (a = !0) : delete t[e], a ? t[e] = n : o(t, e, n)) : a ? t[e] = n : c(e, n) })(Function.prototype, "toString", function() { return "function" == typeof this && a(this).source || r.call(this) }) }, function(t, e, n) { t.exports = n(7) }, function(t, e, n) { var s = n(17),
        o = n(22),
        l = n(81).indexOf,
        c = n(78);
    t.exports = function(t, e) { var n, i = o(t),
            r = 0,
            a = []; for (n in i) !s(c, n) && s(i, n) && a.push(n); for (; e.length > r;) s(i, n = e[r++]) && (~l(a, n) || a.push(n)); return a } }, function(t, e, n) { "use strict"; var i, r = n(122),
        a = n(21),
        s = n(17),
        o = n(5),
        l = n(76),
        c = o("iterator"),
        n = !1;
    [].keys && ("next" in (o = [].keys()) ? (o = r(r(o))) !== Object.prototype && (i = o) : n = !0), null == i && (i = {}), l || s(i, c) || a(i, c, function() { return this }), t.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: n } }, function(t, e, n) { var i = n(17),
        r = n(4),
        a = n(77),
        n = n(238),
        s = a("IE_PROTO"),
        o = Object.prototype;
    t.exports = n ? Object.getPrototypeOf : function(t) { return t = r(t), i(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? o : null } }, function(t, e, n) {
    function i() {} var r = n(28),
        a = n(240),
        s = n(82),
        o = n(78),
        l = n(242),
        c = n(114),
        u = n(77)("IE_PROTO"),
        d = "prototype",
        h = function() { var t = c("iframe"),
                e = s.length,
                n = "script"; for (t.style.display = "none", l.appendChild(t), t.src = String("javascript:"), (t = t.contentWindow.document).open(), t.write("<script>document.F=Object</" + n + ">"), t.close(), h = t.F; e--;) delete h[d][s[e]]; return h() };
    t.exports = Object.create || function(t, e) { var n; return null !== t ? (i[d] = r(t), n = new i, i[d] = null, n[u] = t) : n = h(), void 0 === e ? n : a(n, e) }, o[u] = !0 }, function(t, e, n) { var i = n(15).f,
        r = n(17),
        a = n(5)("toStringTag");
    t.exports = function(t, e, n) { t && !r(t = n ? t : t.prototype, a) && i(t, a, { configurable: !0, value: e }) } }, function(t, e, n) { "use strict"; var h = n(29),
        f = n(3),
        p = n(54),
        m = function(t, e, n, i, r, a, s, o) { for (var l, c = r, u = 0, d = !!s && p(s, o, 3); u < i;) { if (u in n) { if (l = d ? d(n[u], u, e) : n[u], 0 < a && h(l)) c = m(t, e, l, f(l.length), c, a - 1) - 1;
                    else { if (9007199254740991 <= c) throw TypeError("Exceed the acceptable array length");
                        t[c] = l }
                    c++ }
                u++ } return c };
    t.exports = m }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(81).includes,
        n = n(10);
    i({ target: "Array", proto: !0 }, { includes: function(t) { return r(this, t, 1 < arguments.length ? arguments[1] : void 0) } }), n("includes") }, function(t, e, n) { var u = n(55),
        d = n(4),
        h = n(53),
        f = n(3),
        n = function(c) { return function(t, e, n, i) { u(e); var r = d(t),
                    a = h(r),
                    s = f(r.length),
                    o = c ? s - 1 : 0,
                    l = c ? -1 : 1; if (n < 2)
                    for (;;) { if (o in a) { i = a[o], o += l; break } if (o += l, c ? o < 0 : s <= o) throw TypeError("Reduce of empty array with no initial value") }
                for (; c ? 0 <= o : o < s; o += l) o in a && (i = e(i, a[o], o, r)); return i } };
    t.exports = { left: n(!1), right: n(!0) } }, function(t, e, n) { "use strict";
    n.r(e); var i = n(84);
    n.d(e, "createStore", function() { return i.default }); var r = n(131);
    n.d(e, "combineReducers", function() { return r.default }); var a = n(133);
    n.d(e, "bindActionCreators", function() { return a.default }); var s = n(134);
    n.d(e, "applyMiddleware", function() { return s.default }); var o = n(85);
    n.d(e, "compose", function() { return o.default });
    n(132) }, function(t, e, n) { "use strict";
    n.r(e); var i = n(294),
        r = n(299),
        a = n(301),
        s = Function.prototype,
        n = Object.prototype,
        o = s.toString,
        l = n.hasOwnProperty,
        c = o.call(Object);
    e.default = function(t) { return !(!Object(a.default)(t) || "[object Object]" != Object(i.default)(t)) && (null === (t = Object(r.default)(t)) || "function" == typeof(t = l.call(t, "constructor") && t.constructor) && t instanceof t && o.call(t) == c) } }, function(t, e, n) { "use strict";
    n.r(e);
    n = n(295).default.Symbol;
    e.default = n }, function(t, e, n) { "use strict";
    n.r(e), n.d(e, "default", function() { return i }); var a = n(84);
    n(129), n(132);

    function i(t) { for (var e = Object.keys(t), u = {}, n = 0; n < e.length; n++) { var i = e[n];
            0, "function" == typeof t[i] && (u[i] = t[i]) } var d, r, h = Object.keys(u); try { r = u, Object.keys(r).forEach(function(t) { var e = r[t]; if (void 0 === e(void 0, { type: a.ActionTypes.INIT })) throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'); if (void 0 === e(void 0, { type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".") })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + a.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.') }) } catch (t) { d = t } return function() { var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = arguments[1]; if (d) throw d; for (var n = !1, i = {}, r = 0; r < h.length; r++) { var a = h[r],
                    s = u[a],
                    o = t[a],
                    l = s(o, e); if (void 0 === l) { var c = (c = a, "Given action " + ((s = (s = e) && s.type) && '"' + s.toString() + '"' || "an action") + ', reducer "' + c + '" returned undefined. To ignore an action, you must explicitly return the previous state.'); throw new Error(c) }
                i[a] = l, n = n || l !== o } return n ? i : t } } }, function(t, e, n) { "use strict";

    function i(t) { "undefined" != typeof console && "function" == typeof console.error && console.error(t); try { throw new Error(t) } catch (t) {} }
    n.r(e), n.d(e, "default", function() { return i }) }, function(t, e, n) { "use strict";

    function o(t, e) { return function() { return e(t.apply(void 0, arguments)) } }

    function i(t, e) { if ("function" == typeof t) return o(t, e); if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'); for (var n = Object.keys(t), i = {}, r = 0; r < n.length; r++) { var a = n[r],
                s = t[a]; "function" == typeof s && (i[a] = o(s, e)) } return i }
    n.r(e), n.d(e, "default", function() { return i }) }, function(t, e, n) { "use strict";
    n.r(e), n.d(e, "default", function() { return i }); var o = n(85),
        l = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n, i = arguments[e]; for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]) } return t };

    function i() { for (var t = arguments.length, s = Array(t), e = 0; e < t; e++) s[e] = arguments[e]; return function(a) { return function(t, e, n) { var e = a(t, e, n),
                    i = e.dispatch,
                    n = [],
                    r = { getState: e.getState, dispatch: function(t) { return i(t) } },
                    n = s.map(function(t) { return t(r) }),
                    i = o.default.apply(void 0, n)(e.dispatch); return l({}, e, { dispatch: i }) } } } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ActionAppliesTo = e.ActionTypeConsts = void 0;
    e.ActionTypeConsts = { TRANSFORM_MOVE: "TRANSFORM_MOVE", TRANSFORM_SCALE: "TRANSFORM_SCALE", TRANSFORM_ROTATE: "TRANSFORM_ROTATE", TRANSFORM_SKEW: "TRANSFORM_SKEW", STYLE_OPACITY: "STYLE_OPACITY", STYLE_SIZE: "STYLE_SIZE", STYLE_FILTER: "STYLE_FILTER", STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR", STYLE_BORDER: "STYLE_BORDER", STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR", PLUGIN_LOTTIE: "PLUGIN_LOTTIE", GENERAL_DISPLAY: "GENERAL_DISPLAY", GENERAL_START_ACTION: "GENERAL_START_ACTION", GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION", GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS", GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION", GENERAL_LOOP: "GENERAL_LOOP", STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW" };
    e.ActionAppliesTo = { ELEMENT: "ELEMENT", ELEMENT_CLASS: "ELEMENT_CLASS", TRIGGER_ELEMENT: "TRIGGER_ELEMENT" } }, function(t, e, n) { n = n(137)(n(92));
    t.exports = n }, function(t, e, n) { var s = n(18),
        o = n(26),
        l = n(47);
    t.exports = function(a) { return function(t, e, n) { var i, r = Object(t);
            o(t) || (i = s(e, 3), t = l(t), e = function(t) { return i(r[t], t, r) });
            n = a(t, e, n); return -1 < n ? r[i ? t[n] : n] : void 0 } } }, function(t, e, n) { "use strict"; var i = n(1);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.inQuad = function(t) { return Math.pow(t, 2) }, e.outQuad = function(t) { return -(Math.pow(t - 1, 2) - 1) }, e.inOutQuad = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 2); return -.5 * ((t -= 2) * t - 2) }, e.inCubic = function(t) { return Math.pow(t, 3) }, e.outCubic = function(t) { return Math.pow(t - 1, 3) + 1 }, e.inOutCubic = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 3); return .5 * (Math.pow(t - 2, 3) + 2) }, e.inQuart = function(t) { return Math.pow(t, 4) }, e.outQuart = function(t) { return -(Math.pow(t - 1, 4) - 1) }, e.inOutQuart = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 4); return -.5 * ((t -= 2) * Math.pow(t, 3) - 2) }, e.inQuint = function(t) { return Math.pow(t, 5) }, e.outQuint = function(t) { return Math.pow(t - 1, 5) + 1 }, e.inOutQuint = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 5); return .5 * (Math.pow(t - 2, 5) + 2) }, e.inSine = function(t) { return 1 - Math.cos(t * (Math.PI / 2)) }, e.outSine = function(t) { return Math.sin(t * (Math.PI / 2)) }, e.inOutSine = function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) }, e.inExpo = function(t) { return 0 === t ? 0 : Math.pow(2, 10 * (t - 1)) }, e.outExpo = function(t) { return 1 === t ? 1 : 1 - Math.pow(2, -10 * t) }, e.inOutExpo = function(t) { if (0 === t) return 0; if (1 === t) return 1; if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1)); return .5 * (2 - Math.pow(2, -10 * --t)) }, e.inCirc = function(t) { return -(Math.sqrt(1 - t * t) - 1) }, e.outCirc = function(t) { return Math.sqrt(1 - Math.pow(t - 1, 2)) }, e.inOutCirc = function(t) { if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1); return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) }, e.outBounce = function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }, e.inBack = function(t) { return t * t * ((r + 1) * t - r) }, e.outBack = function(t) { return --t * t * ((r + 1) * t + r) + 1 }, e.inOutBack = function(t) { var e = r; if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5; return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2) }, e.inElastic = function(t) { var e = r,
            n = 0,
            i = 1; if (0 === t) return 0; if (1 === t) return 1;
        n = n || .3;
        e = i < 1 ? (i = 1, n / 4) : n / (2 * Math.PI) * Math.asin(1 / i); return -(i * Math.pow(2, 10 * --t) * Math.sin((t - e) * (2 * Math.PI) / n)) }, e.outElastic = function(t) { var e = r,
            n = 0,
            i = 1; if (0 === t) return 0; if (1 === t) return 1;
        n = n || .3;
        e = i < 1 ? (i = 1, n / 4) : n / (2 * Math.PI) * Math.asin(1 / i); return i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1 }, e.inOutElastic = function(t) { var e = r,
            n = 0,
            i = 1; if (0 === t) return 0; if (2 == (t /= .5)) return 1;
        n = n || .3 * 1.5;
        e = i < 1 ? (i = 1, n / 4) : n / (2 * Math.PI) * Math.asin(1 / i); if (t < 1) return i * Math.pow(2, 10 * --t) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5; return i * Math.pow(2, -10 * --t) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1 }, e.swingFromTo = function(t) { var e = r; return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2) }, e.swingFrom = function(t) { return t * t * ((r + 1) * t - r) }, e.swingTo = function(t) { return --t * t * ((r + 1) * t + r) + 1 }, e.bounce = function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }, e.bouncePast = function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0; var i = i(n(139)),
        r = 1.70158,
        n = (0, i.default)(.25, .1, .25, 1);
    e.ease = n;
    n = (0, i.default)(.42, 0, 1, 1);
    e.easeIn = n;
    n = (0, i.default)(0, 0, .58, 1);
    e.easeOut = n;
    i = (0, i.default)(.42, 0, .58, 1);
    e.easeInOut = i }, function(t, e) { var l = 4,
        c = 1e-7,
        u = 10,
        r = "function" == typeof Float32Array;

    function i(t, e) { return 1 - 3 * e + 3 * t }

    function d(t, e, n) { return ((i(e, n) * t + (3 * n - 6 * e)) * t + 3 * e) * t }

    function h(t, e, n) { return 3 * i(e, n) * t * t + 2 * (3 * n - 6 * e) * t + 3 * e }
    t.exports = function(a, e, s, n) { if (!(0 <= a && a <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range"); var o = new(r ? Float32Array : Array)(11); if (a !== e || s !== n)
            for (var t = 0; t < 11; ++t) o[t] = d(.1 * t, a, s);

        function i(t) { for (var e = 0, n = 1; 10 !== n && o[n] <= t; ++n) e += .1; var i = e + .1 * ((t - o[--n]) / (o[n + 1] - o[n])),
                r = h(i, a, s); return .001 <= r ? function(t, e, n, i) { for (var r = 0; r < l; ++r) { var a = h(e, n, i); if (0 === a) return e;
                    e -= (d(e, n, i) - t) / a } return e }(t, i, a, s) : 0 === r ? i : function(t, e, n, i, r) { for (var a, s, o = 0; 0 < (a = d(s = e + (n - e) / 2, i, r) - t) ? n = s : e = s, Math.abs(a) > c && ++o < u;); return s }(t, e, e + .1, a, s) } return function(t) { return a === e && s === n ? t : 0 === t ? 0 : 1 === t ? 1 : d(i(t), e, n) } } }, function(t, e, n) { "use strict"; var i = n(1)(n(141)),
        r = n(1),
        a = n(39);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.optimizeFloat = l, e.createBezierEasing = function(t) { return o.default.apply(void 0, (0, i.default)(t)) }, e.applyEasing = function(t, e, n) { if (0 === e) return 0; if (1 === e) return 1; if (n) return l(0 < e ? n(e) : e); return l(0 < e && t && s[t] ? s[t](e) : e) }; var s = a(n(138)),
        o = r(n(139));

    function l(t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 5,
            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 10,
            e = Math.pow(n, e),
            e = Number(Math.round(t * e) / e); return 1e-4 < Math.abs(e) ? e : 0 } }, function(t, e, n) { var i = n(314),
        r = n(315),
        a = n(316);
    t.exports = function(t) { return i(t) || r(t) || a() } }, function(t, e, n) { "use strict"; var i = n(1)(n(24));
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isPluginType = function(t) { return t === a.ActionTypeConsts.PLUGIN_LOTTIE }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0; var r = n(318),
        a = n(6),
        s = n(86),
        o = (0, i.default)({}, a.ActionTypeConsts.PLUGIN_LOTTIE, { getConfig: r.getPluginConfig, getOrigin: r.getPluginOrigin, getDuration: r.getPluginDuration, getDestination: r.getPluginDestination, createInstance: r.createPluginInstance, render: r.renderPlugin, clear: r.clearPlugin });
    i = function(n) { return function(t) { if (!s.IS_BROWSER_ENV) return function() { return null }; var e = o[t]; if (!e) throw new Error("IX2 no plugin configured for: ".concat(t));
            e = e[n]; if (!e) throw new Error("IX2 invalid plugin method: ".concat(n)); return e } }, r = i("getConfig");
    e.getPluginConfig = r;
    r = i("getOrigin");
    e.getPluginOrigin = r;
    r = i("getDuration");
    e.getPluginDuration = r;
    r = i("getDestination");
    e.getPluginDestination = r;
    r = i("createInstance");
    e.createPluginInstance = r;
    r = i("render");
    e.renderPlugin = r;
    i = i("clear");
    e.clearPlugin = i }, function(t, e, n) { var i = n(144),
        i = n(325)(i);
    t.exports = i }, function(t, e, n) { var i = n(323),
        r = n(47);
    t.exports = function(t, e) { return t && i(t, e, r) } }, function(t, e, n) { "use strict"; var i = n(329);
    e.__esModule = !0, e.default = void 0;
    n = i(n(330)).default;
    e.default = n }, function(t, e, n) { "use strict"; var v = n(1)(n(141)),
        i = n(39),
        r = n(1);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.observeRequests = function(t) { w({ store: t, select: function(t) { return t.ixRequest.preview }, onChange: K }), w({ store: t, select: function(t) { return t.ixRequest.playback }, onChange: Z }), w({ store: t, select: function(t) { return t.ixRequest.stop }, onChange: J }), w({ store: t, select: function(t) { return t.ixRequest.clear }, onChange: tt }) }, e.startEngine = et, e.stopEngine = nt, e.stopAllActionGroups = ut, e.stopActionGroup = dt, e.startActionGroup = ht; var E = r(n(31)),
        b = r(n(333)),
        f = r(n(136)),
        T = r(n(67)),
        p = r(n(334)),
        a = r(n(340)),
        s = r(n(352)),
        o = r(n(353)),
        m = r(n(354)),
        g = r(n(357)),
        y = r(n(145)),
        I = n(6),
        e = n(30),
        _ = n(87),
        A = i(n(360)),
        c = r(n(361)),
        l = Object.keys(I.QuickEffectIds),
        S = function(t) { return l.includes(t) },
        n = I.IX2EngineConstants,
        x = n.COLON_DELIMITER,
        R = n.BOUNDARY_SELECTOR,
        P = n.HTML_ELEMENT,
        C = n.RENDER_GENERAL,
        u = n.W_MOD_IX,
        n = e.IX2VanillaUtils,
        O = n.getAffectedElements,
        M = n.getElementId,
        D = n.getDestinationValues,
        w = n.observeStore,
        N = n.getInstanceId,
        L = n.renderHTMLElement,
        d = n.clearAllStyles,
        k = n.getMaxDurationItemIndex,
        F = n.getComputedStyle,
        V = n.getInstanceOrigin,
        h = n.reduceListToGroup,
        G = n.shouldNamespaceEventParameter,
        B = n.getNamespacedParameterId,
        U = n.shouldAllowMediaQuery,
        z = n.cleanupHTMLElement,
        H = n.stringifyTarget,
        j = n.mediaQueriesEqual,
        e = e.IX2VanillaPlugins,
        X = e.isPluginType,
        W = e.createPluginInstance,
        Y = e.getPluginDuration,
        e = navigator.userAgent,
        q = e.match(/iPad/i) || e.match(/iPhone/),
        Q = 12;

    function K(t, e) {
        function n() { et({ store: e, rawData: i, allowEvents: !0 }), $() } var i = t.rawData;
        t.defer ? setTimeout(n, 0) : n() }

    function $() { document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE")) }

    function Z(t, e) { var n = t.actionTypeId,
            i = t.actionListId,
            r = t.actionItemId,
            a = t.eventId,
            s = t.allowEvents,
            o = t.immediate,
            l = t.testManual,
            c = t.verbose,
            u = void 0 === c || c,
            c = t.rawData;
        i && r && c && o && ((t = c.actionLists[i]) && (c = h({ actionList: t, actionItemId: r, rawData: c }))), et({ store: e, rawData: c, allowEvents: s, testManual: l }), (i && n === I.ActionTypeConsts.GENERAL_START_ACTION || S(n)) && (dt({ store: e, actionListId: i }), ct({ store: e, actionListId: i, eventId: a }), a = ht({ store: e, eventId: a, actionListId: i, immediate: o, verbose: u }), u && a && e.dispatch((0, _.actionListPlaybackChanged)({ actionListId: i, isPlaying: !o }))) }

    function J(t, e) { t = t.actionListId;
        t ? dt({ store: e, actionListId: t }) : ut({ store: e }), nt(e) }

    function tt(t, e) { nt(e), d({ store: e, elementApi: A }) }

    function et(t) { var s, o, e, i, n = t.store,
            r = t.rawData,
            a = t.allowEvents,
            l = t.testManual,
            t = n.getState().ixSession;
        r && n.dispatch((0, _.rawDataImported)(r)), t.active || (n.dispatch((0, _.sessionInitialized)({ hasBoundaryNodes: Boolean(document.querySelector(R)), reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches })), a && (a = (i = n).getState().ixData.eventTypeMap, at(i), (0, m.default)(a, function(t, e) { var n = c.default[e];
            n ? function(t) { var e = t.logic,
                    c = t.store,
                    u = t.events;! function(t) { if (q) { var e, n, i = {},
                            r = ""; for (e in t) { var a = t[e],
                                s = a.eventTypeId,
                                a = a.target,
                                a = A.getQuerySelector(a);
                            i[a] || s !== I.EventTypeConsts.MOUSE_CLICK && s !== I.EventTypeConsts.MOUSE_SECOND_CLICK || (i[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}") }
                        r && ((n = document.createElement("style")).textContent = r, document.body.appendChild(n)) } }(u); var r, n = e.types,
                    l = e.handler,
                    d = c.getState().ixData,
                    h = d.actionLists,
                    i = st(u, lt);

                function a(s) { var o = c.getState().ixSession;
                    ot(i, function(e, t, n) { var i = u[t],
                            r = o.eventState[n],
                            a = i.action,
                            t = i.mediaQueries,
                            t = void 0 === t ? d.mediaQueryKeys : t;
                        U(t, o.mediaQueryKey) && (t = function() { var t = l({ store: c, element: e, event: i, eventConfig: 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, nativeEvent: s, eventStateKey: n }, r);
                            (0, y.default)(t, r) || c.dispatch((0, _.eventStateChanged)(n, t)) }, a.actionTypeId === I.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(i.config) ? i.config : [i.config]).forEach(t) : t()) }) }(0, p.default)(i) && ((0, m.default)(i, function(s, t) { var e = u[t],
                        n = e.action,
                        o = e.id,
                        t = e.mediaQueries,
                        t = void 0 === t ? d.mediaQueryKeys : t,
                        l = n.config.actionListId;
                    j(t, d.mediaQueryKeys) || c.dispatch((0, _.mediaQueriesDefined)()), n.actionTypeId === I.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(e.config) ? e.config : [e.config]).forEach(function(n) { var e = n.continuousParameterGroupId,
                            t = (0, T.default)(h, "".concat(l, ".continuousParameterGroups"), []),
                            i = (0, f.default)(t, function(t) { return t.id === e }),
                            r = (n.smoothing || 0) / 100,
                            a = (n.restingState || 0) / 100;
                        i && s.forEach(function(t, e) {! function(t) { var a = t.store,
                                    e = t.eventStateKey,
                                    s = t.eventTarget,
                                    o = t.eventId,
                                    n = t.eventConfig,
                                    l = t.actionListId,
                                    i = t.parameterGroup,
                                    c = t.smoothing,
                                    u = t.restingValue,
                                    r = (h = a.getState()).ixData,
                                    t = h.ixSession,
                                    d = r.events[o],
                                    h = d.eventTypeId,
                                    f = {},
                                    p = {},
                                    m = [],
                                    r = i.continuousActionGroups,
                                    g = i.id;
                                G(h, n) && (g = B(e, g)); var y = t.hasBoundaryNodes && s ? A.getClosestElement(s, R) : null;
                                r.forEach(function(t) { var a = t.keyframe;
                                    t.actionItems.forEach(function(t) { var e, n, i = t.actionTypeId,
                                            r = t.config.target;
                                        r && (e = r.boundaryMode ? y : null, n = H(r) + x + i, p[n] = function() { var n, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                                                i = 1 < arguments.length ? arguments[1] : void 0,
                                                e = 2 < arguments.length ? arguments[2] : void 0,
                                                t = (0, v.default)(t);
                                            t.some(function(t, e) { return t.keyframe === i && (n = e, !0) }), null == n && (n = t.length, t.push({ keyframe: i, actionItems: [] })); return t[n].actionItems.push(e), t }(p[n], a, t), f[n] || (f[n] = !0, t = t.config, O({ config: t, event: d, eventTarget: s, elementRoot: e, elementApi: A }).forEach(function(t) { m.push({ element: t, key: n }) }))) }) }), m.forEach(function(t) { var e = t.element,
                                        n = t.key,
                                        i = p[n],
                                        r = (0, T.default)(i, "[0].actionItems[0]", {}),
                                        t = r.actionTypeId,
                                        n = X(t) ? W(t)(e, r) : null,
                                        t = D({ element: e, actionItem: r, elementApi: A }, n);
                                    ft({ store: a, element: e, eventId: o, actionListId: l, actionItem: r, destination: t, continuous: !0, parameterId: g, actionGroups: i, smoothing: c, restingValue: u, pluginInstance: n }) }) }({ store: c, eventStateKey: o + x + e, eventTarget: t, eventId: o, eventConfig: n, actionListId: l, parameterGroup: i, smoothing: r, restingValue: a }) }) }), n.actionTypeId !== I.ActionTypeConsts.GENERAL_START_ACTION && !S(n.actionTypeId) || ct({ store: c, actionListId: l, eventId: o }) }), r = (0, g.default)(a, Q), t = function(t) { var e = t.target,
                        n = void 0 === e ? document : e,
                        e = t.types,
                        i = t.throttle;
                    e.split(" ").filter(Boolean).forEach(function(t) { var e = i ? r : a;
                        n.addEventListener(t, e), c.dispatch((0, _.eventListenerAdded)(n, [t, e])) }) }, Array.isArray(n) ? n.forEach(t) : "string" == typeof n && t(e)) }({ logic: n, store: i, events: t }) : console.warn("IX2 event type not configured: ".concat(e)) }), i.getState().ixSession.eventListeners.length && function(e) {
            function n() { at(e) }
            rt.forEach(function(t) { window.addEventListener(t, n), e.dispatch((0, _.eventListenerAdded)(window, [t, n])) }), n() }(i), -1 === (a = document.documentElement).className.indexOf(u) && (a.className += " ".concat(u)), n.getState().ixSession.hasDefinedMediaQueries && w({ store: e = n, select: function(t) { return t.ixSession.mediaQueryKey }, onChange: function() { nt(e), d({ store: e, elementApi: A }), et({ store: e, allowEvents: !0 }), $() } })), n.dispatch((0, _.sessionStarted)()), s = n, o = l, function t(e) { var n, i, r = s.getState(),
                a = r.ixSession,
                r = r.ixParameters;
            a.active && (s.dispatch((0, _.animationFrameChanged)(e, r)), o ? (n = t, i = w({ store: s, select: function(t) { return t.ixSession.tick }, onChange: function(t) { n(t), i() } })) : requestAnimationFrame(t)) }(window.performance.now())) }

    function nt(t) { var e = t.getState().ixSession;
        e.active && (e.eventListeners.forEach(it), t.dispatch((0, _.sessionStopped)())) }

    function it(t) { var e = t.target,
            t = t.listenerParams;
        e.removeEventListener.apply(e, t) } var rt = ["resize", "orientationchange"];

    function at(t) { var e = t.getState(),
            n = e.ixSession,
            i = e.ixData,
            e = window.innerWidth;
        e !== n.viewportWidth && (i = i.mediaQueries, t.dispatch((0, _.viewportWidthChanged)({ width: e, mediaQueries: i }))) } var st = function(t, e) { return (0, a.default)((0, o.default)(t, e), s.default) },
        ot = function(t, i) {
            (0, m.default)(t, function(t, n) { t.forEach(function(t, e) { i(t, n, n + x + e) }) }) },
        lt = function(t) { t = { target: t.target, targets: t.targets }; return O({ config: t, elementApi: A }) };

    function ct(t) { var a = t.store,
            s = t.actionListId,
            o = t.eventId,
            e = a.getState(),
            n = e.ixData,
            t = e.ixSession,
            e = n.actionLists,
            l = n.events[o],
            e = e[s];
        e && e.useFirstGroupAsInitialState && (e = (0, T.default)(e, "actionItemGroups[0].actionItems", []), n = (0, T.default)(l, "mediaQueries", n.mediaQueryKeys), U(n, t.mediaQueryKey) && e.forEach(function(n) { var t, e = n.config,
                i = n.actionTypeId,
                e = !0 === (null == e || null === (t = e.target) || void 0 === t ? void 0 : t.useEventTarget) ? { target: l.target, targets: l.targets } : e,
                e = O({ config: e, event: l, elementApi: A }),
                r = X(i);
            e.forEach(function(t) { var e = r ? W(i)(t, n) : null;
                ft({ destination: D({ element: t, actionItem: n, elementApi: A }, e), immediate: !0, store: a, element: t, eventId: o, actionItem: n, actionListId: s, pluginInstance: e }) }) })) }

    function ut(t) { var i = t.store,
            t = i.getState().ixInstances;
        (0, m.default)(t, function(t) { var e, n;
            t.continuous || (e = t.actionListId, n = t.verbose, pt(t, i), n && i.dispatch((0, _.actionListPlaybackChanged)({ actionListId: e, isPlaying: !1 }))) }) }

    function dt(t) { var i = t.store,
            r = t.eventId,
            e = t.eventTarget,
            a = t.eventStateKey,
            s = t.actionListId,
            n = i.getState(),
            t = n.ixInstances,
            o = n.ixSession.hasBoundaryNodes && e ? A.getClosestElement(e, R) : null;
        (0, m.default)(t, function(t) { var e = (0, T.default)(t, "actionItem.config.target.boundaryMode"),
                n = !a || t.eventStateKey === a;
            t.actionListId === s && t.eventId === r && n && (o && e && !A.elementContains(o, t.element) || (pt(t, i), t.verbose && i.dispatch((0, _.actionListPlaybackChanged)({ actionListId: s, isPlaying: !1 })))) }) }

    function ht(t) { var u = t.store,
            d = t.eventId,
            h = t.eventTarget,
            f = t.eventStateKey,
            p = t.actionListId,
            e = t.groupIndex,
            m = void 0 === e ? 0 : e,
            g = t.immediate,
            y = t.verbose,
            n = u.getState(),
            i = n.ixData,
            e = n.ixSession,
            r = i.events[d] || {},
            t = r.mediaQueries,
            n = void 0 === t ? i.mediaQueryKeys : t,
            t = (0, T.default)(i, "actionLists.".concat(p), {}),
            i = t.actionItemGroups,
            t = t.useFirstGroupAsInitialState; if (!i || !i.length) return !1;
        m >= i.length && (0, T.default)(r, "config.loop") && (m = 0), 0 === m && t && m++; var v = (0 === m || 1 === m && t) && S(null === (t = r.action) || void 0 === t ? void 0 : t.actionTypeId) ? r.config.delay : void 0,
            i = (0, T.default)(i, [m, "actionItems"], []); if (!i.length) return !1; if (!U(n, e.mediaQueryKey)) return !1; var a = e.hasBoundaryNodes && h ? A.getClosestElement(h, R) : null,
            E = k(i),
            b = !1; return i.forEach(function(s, o) { var t = s.config,
                l = s.actionTypeId,
                c = X(l),
                e = t.target;
            e && (e = e.boundaryMode ? a : null, O({ config: t, event: r, eventTarget: h, elementRoot: e, elementApi: A }).forEach(function(t, e) { var n = c ? W(l)(t, s) : null,
                    i = c ? Y(l)(t, s) : null;
                b = !0; var r = E === o && 0 === e,
                    a = F({ element: t, actionItem: s }),
                    e = D({ element: t, actionItem: s, elementApi: A }, n);
                ft({ store: u, element: t, actionItem: s, eventId: d, eventTarget: h, eventStateKey: f, actionListId: p, groupIndex: m, isCarrier: r, computedStyle: a, destination: e, immediate: g, verbose: y, pluginInstance: n, pluginDuration: i, instanceDelay: v }) })) }), b }

    function ft(t) { var e, n = t.store,
            i = t.computedStyle,
            r = (0, b.default)(t, ["store", "computedStyle"]),
            a = r.element,
            s = r.actionItem,
            o = r.immediate,
            l = r.pluginInstance,
            c = r.continuous,
            u = r.restingValue,
            d = r.eventId,
            h = !c,
            f = N(),
            p = n.getState(),
            m = p.ixElements,
            g = p.ixSession,
            y = p.ixData,
            v = M(m, a),
            t = (m[v] || {}).refState,
            p = A.getRefType(a),
            m = g.reducedMotion && I.ReducedMotionTypes[s.actionTypeId]; if (m && c) switch (null === (d = y.events[d]) || void 0 === d ? void 0 : d.eventTypeId) {
            case I.EventTypeConsts.MOUSE_MOVE:
            case I.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                e = u; break;
            default:
                e = .5 }
        l = V(a, t, i, s, A, l); if (n.dispatch((0, _.instanceAdded)((0, E.default)({ instanceId: f, elementId: v, origin: l, refType: p, skipMotion: m, skipToValue: e }, r))), mt(document.body, "ix2-animation-started", f), o) return m = f, o = (r = n).getState().ixParameters, r.dispatch((0, _.instanceStarted)(m, 0)), r.dispatch((0, _.animationFrameChanged)(performance.now(), o)), void gt(r.getState().ixInstances[m], r);
        w({ store: n, select: function(t) { return t.ixInstances[f] }, onChange: gt }), h && n.dispatch((0, _.instanceStarted)(f, g.tick)) }

    function pt(t, e) { mt(document.body, "ix2-animation-stopping", { instanceId: t.id, state: e.getState() }); var n = t.elementId,
            i = t.actionItem,
            n = e.getState().ixElements[n] || {};
        n.refType === P && z(n.ref, i, A), e.dispatch((0, _.instanceRemoved)(t.id)) }

    function mt(t, e, n) { var i = document.createEvent("CustomEvent");
        i.initCustomEvent(e, !0, !0, n), t.dispatchEvent(i) }

    function gt(t, e) { var n = t.active,
            i = t.continuous,
            r = t.complete,
            a = t.elementId,
            s = t.actionItem,
            o = t.actionTypeId,
            l = t.renderType,
            c = t.current,
            u = t.groupIndex,
            d = t.eventId,
            h = t.eventTarget,
            f = t.eventStateKey,
            p = t.actionListId,
            m = t.isCarrier,
            g = t.styleProp,
            y = t.verbose,
            v = t.pluginInstance,
            E = e.getState(),
            b = E.ixData,
            T = E.ixSession,
            E = (b.events[d] || {}).mediaQueries,
            E = void 0 === E ? b.mediaQueryKeys : E;
        U(E, T.mediaQueryKey) && (i || n || r) && ((c || l === C && r) && (e.dispatch((0, _.elementStateChanged)(a, o, c, s)), c = (n = e.getState().ixElements[a] || {}).ref, a = n.refType, o = (n = n.refState) && n[o], a === P && L(c, n, o, d, s, g, A, l, v)), r && (m && (u = ht({ store: e, eventId: d, eventTarget: h, eventStateKey: f, actionListId: p, groupIndex: u + 1, verbose: y }), y && !u && e.dispatch((0, _.actionListPlaybackChanged)({ actionListId: p, isPlaying: !1 }))), pt(t, e))) } }, function(t, e, n) { var i = n(148);
    t.exports = function(t, e, n) { "__proto__" == e && i ? i(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n } }, function(t, e, n) { var i = n(19),
        n = function() { try { var t = i(Object, "defineProperty"); return t({}, "", {}), t } catch (t) {} }();
    t.exports = n }, function(t, e, n) { var i = n(12),
        r = Object.create,
        n = function(t) { if (!i(t)) return {}; if (r) return r(t);
            a.prototype = t;
            t = new a; return a.prototype = void 0, t };

    function a() {}
    t.exports = n }, function(t, e, n) { var i = n(374),
        n = n(375),
        n = i ? function(t) { return i.get(t) } : n;
    t.exports = n }, function(t, e, n) { var s = n(376),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) { for (var e = t.name + "", n = s[e], i = o.call(s, e) ? n.length : 0; i--;) { var r = n[i],
                a = r.func; if (null == a || a == t) return r.name } return e } }, function(t, e, n) { n(153), n(287), n(83), n(289), n(383), n(384), n(385), n(386), n(387), t.exports = n(392) }, function(t, e, n) { "use strict"; var i = n(11),
        r = n(155),
        a = n(286);
    i.define("lottie", t.exports = function() { return { lottie: a, createInstance: r.createInstance, cleanupElement: r.cleanupElement, init: r.init, destroy: r.destroy, ready: r.ready } }) }, function(t, e, n) { "use strict"; var i = window.$,
        E = n(91) && i.tram;
    t.exports = function() { var u = { VERSION: "1.6.0-Webflow" },
            s = {},
            t = Array.prototype,
            e = Object.prototype,
            n = Function.prototype,
            i = (t.push, t.slice),
            r = (t.concat, e.toString, e.hasOwnProperty),
            o = t.forEach,
            l = t.map,
            c = (t.reduce, t.reduceRight, t.filter),
            d = (t.every, t.some),
            a = t.indexOf,
            h = (t.lastIndexOf, Array.isArray, Object.keys),
            f = (n.bind, u.each = u.forEach = function(t, e, n) { if (null == t) return t; if (o && t.forEach === o) t.forEach(e, n);
                else if (t.length === +t.length) { for (var i = 0, r = t.length; i < r; i++)
                        if (e.call(n, t[i], i, t) === s) return } else
                    for (var a = u.keys(t), i = 0, r = a.length; i < r; i++)
                        if (e.call(n, t[a[i]], a[i], t) === s) return; return t });
        u.map = u.collect = function(t, i, r) { var a = []; return null == t ? a : l && t.map === l ? t.map(i, r) : (f(t, function(t, e, n) { a.push(i.call(r, t, e, n)) }), a) }, u.find = u.detect = function(t, i, r) { var a; return p(t, function(t, e, n) { if (i.call(r, t, e, n)) return a = t, !0 }), a }, u.filter = u.select = function(t, i, r) { var a = []; return null == t ? a : c && t.filter === c ? t.filter(i, r) : (f(t, function(t, e, n) { i.call(r, t, e, n) && a.push(t) }), a) }; var p = u.some = u.any = function(t, i, r) { i = i || u.identity; var a = !1; return null == t ? a : d && t.some === d ? t.some(i, r) : (f(t, function(t, e, n) { if (a = a || i.call(r, t, e, n)) return s }), !!a) };
        u.contains = u.include = function(t, e) { return null != t && (a && t.indexOf === a ? -1 != t.indexOf(e) : p(t, function(t) { return t === e })) }, u.delay = function(t, e) { var n = i.call(arguments, 2); return setTimeout(function() { return t.apply(null, n) }, e) }, u.defer = function(t) { return u.delay.apply(u, [t, 1].concat(i.call(arguments, 1))) }, u.throttle = function(t) { var e, n, i; return function() { e || (e = !0, n = arguments, i = this, E.frame(function() { e = !1, t.apply(i, n) })) } }, u.debounce = function(e, n, i) {
            function r() { var t = u.now() - l;
                t < n ? a = setTimeout(r, n - t) : (a = null, i || (c = e.apply(o, s), o = s = null)) } var a, s, o, l, c; return function() { o = this, s = arguments, l = u.now(); var t = i && !a; return a = a || setTimeout(r, n), t && (c = e.apply(o, s), o = s = null), c } }, u.defaults = function(t) { if (!u.isObject(t)) return t; for (var e = 1, n = arguments.length; e < n; e++) { var i, r = arguments[e]; for (i in r) void 0 === t[i] && (t[i] = r[i]) } return t }, u.keys = function(t) { if (!u.isObject(t)) return []; if (h) return h(t); var e, n = []; for (e in t) u.has(t, e) && n.push(e); return n }, u.has = function(t, e) { return r.call(t, e) }, u.isObject = function(t) { return t === Object(t) }, u.now = Date.now || function() { return (new Date).getTime() }, u.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };

        function m(t) { return "\\" + y[t] } var g = /(.)^/,
            y = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
            v = /\\|'|\r|\n|\u2028|\u2029/g; return u.template = function(a, t, e) {!t && e && (t = e), t = u.defaults({}, t, u.templateSettings); var n = RegExp([(t.escape || g).source, (t.interpolate || g).source, (t.evaluate || g).source].join("|") + "|$", "g"),
                s = 0,
                o = "__p+='";
            a.replace(n, function(t, e, n, i, r) { return o += a.slice(s, r).replace(v, m), s = r + t.length, e ? o += "'+\n((__t=(" + e + "))==null?'':_.escape(__t))+\n'" : n ? o += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : i && (o += "';\n" + i + "\n__p+='"), t }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n"; try { var i = new Function(t.variable || "obj", "_", o) } catch (t) { throw t.source = o, t }
            e = function(t) { return i.call(this, t, u) }, n = t.variable || "obj"; return e.source = "function(" + n + "){\n" + o + "}", e }, u }() }, function(t, e, n) { "use strict"; var i = n(1),
        r = i(n(156)),
        a = i(n(157)),
        i = n(1);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ready = e.destroy = e.init = e.cleanupElement = e.createInstance = void 0; var p = i(n(31)),
        s = i(n(24)),
        o = i(n(92));
    n(226);

    function l() { return Array.from(document.querySelectorAll('[data-animation-type="lottie"]')) }

    function c(t) { var e = g.get(t); return null == e && (e = new u), e.load(t), e } var m = { Playing: "playing", Stopped: "stopped" },
        g = new(function() {
            function t() {
                (0, r.default)(this, t), (0, s.default)(this, "_cache", []) } return (0, a.default)(t, [{ key: "set", value: function(e, t) { var n = (0, o.default)(this._cache, function(t) { return t.wrapper === e }); - 1 !== n && this._cache.splice(n, 1), this._cache.push({ wrapper: e, instance: t }) } }, { key: "delete", value: function(e) { var t = (0, o.default)(this._cache, function(t) { return t.wrapper === e }); - 1 !== t && this._cache.splice(t, 1) } }, { key: "get", value: function(e) { var t = (0, o.default)(this._cache, function(t) { return t.wrapper === e }); return -1 !== t ? this._cache[t].instance : null } }]), t }()),
        y = {},
        u = function() {
            function t() {
                (0, r.default)(this, t), (0, s.default)(this, "config", null), (0, s.default)(this, "currentState", m.Stopped), (0, s.default)(this, "handlers", { enterFrame: [], complete: [], loop: [], dataReady: [], destroy: [], error: [] }) } return (0, a.default)(t, [{ key: "load", value: function(t) { var r = this,
                        e = t.dataset || y,
                        n = e.src || "",
                        i = e.preserveAspectRatio || "xMidYMid meet",
                        a = e.renderer || "svg",
                        s = 1 === parseFloat(e.loop),
                        o = parseFloat(e.direction) || 1,
                        l = 1 === parseFloat(e.autoplay),
                        c = parseFloat(e.duration) || 0,
                        u = 1 === parseFloat(e.isIx2Target),
                        d = parseFloat(e.ix2InitialState);
                    isNaN(d) && (d = null); var h = { src: n, loop: s, autoplay: l, renderer: a, direction: o, duration: c, hasIx2: u, ix2InitialValue: d, preserveAspectRatio: i }; if (this.animationItem && this.config && this.config.src === n && a === this.config.renderer && i === this.config.preserveAspectRatio) return s !== this.config.loop && this.setLooping(s), u || (o !== this.config.direction && this.setDirection(o), c !== this.config.duration && (0 < c && c !== this.duration ? this.setSpeed(this.duration / c) : this.setSpeed(1))), l && this.play(), d && d !== this.config.ix2InitialValue && (e = d / 100, this.goToFrame(this.frames * e)), void(this.config = h); var f = { container: t, loop: s, autoplay: l, renderer: a, rendererSettings: { preserveAspectRatio: i, progressiveLoad: !0, hideOnTransparent: !0 } }; try { this.animationItem && this.destroy(), this.animationItem = window.Webflow.require("lottie").lottie.loadAnimation((0, p.default)({}, f, { path: n })) } catch (e) { return void this.handlers.error.forEach(function(t) { return t(e) }) }
                    this.animationItem && (Boolean(window.Webflow.env("design") || window.Webflow.env("preview")) && (this.animationItem.addEventListener("enterFrame", function() { var e, t, n, i;
                        r.isPlaying && (t = r.animationItem, e = t.currentFrame, n = t.totalFrames, t = t.playDirection, n = e / n * 100, i = Math.round(1 === t ? n : 100 - n), r.handlers.enterFrame.forEach(function(t) { return t(i, e) })) }), this.animationItem.addEventListener("complete", function() { r.currentState === m.Playing ? r.animationItem.loop ? r.currentState = m.Stopped : r.handlers.complete.forEach(function(t) { return t() }) : r.handlers.complete.forEach(function(t) { return t() }) }), this.animationItem.addEventListener("loopComplete", function(e) { r.handlers.loop.forEach(function(t) { return t(e) }) }), this.animationItem.addEventListener("data_failed", function(e) { r.handlers.error.forEach(function(t) { return t(e) }) }), this.animationItem.addEventListener("error", function(e) { r.handlers.error.forEach(function(t) { return t(e) }) })), this.isLoaded ? (this.handlers.dataReady.forEach(function(t) { return t() }), l && this.play()) : this.animationItem.addEventListener("data_ready", function() { var t;
                        r.handlers.dataReady.forEach(function(t) { return t() }), u || (r.setDirection(o), 0 < c && c !== r.duration && r.setSpeed(r.duration / c), l && r.play()), d && (t = d / 100, r.goToFrame(r.frames * t)) }), g.set(t, this), this.container = t, this.config = h) } }, { key: "onFrameChange", value: function(t) {-1 === this.handlers.enterFrame.indexOf(t) && this.handlers.enterFrame.push(t) } }, { key: "onPlaybackComplete", value: function(t) {-1 === this.handlers.complete.indexOf(t) && this.handlers.complete.push(t) } }, { key: "onLoopComplete", value: function(t) {-1 === this.handlers.loop.indexOf(t) && this.handlers.loop.push(t) } }, { key: "onDestroy", value: function(t) {-1 === this.handlers.destroy.indexOf(t) && this.handlers.destroy.push(t) } }, { key: "onDataReady", value: function(t) {-1 === this.handlers.dataReady.indexOf(t) && this.handlers.dataReady.push(t) } }, { key: "onError", value: function(t) {-1 === this.handlers.error.indexOf(t) && this.handlers.error.push(t) } }, { key: "play", value: function() { var t;
                    this.animationItem && (t = 1 === this.animationItem.playDirection ? 0 : this.frames, this.animationItem.goToAndPlay(t, !0), this.currentState = m.Playing) } }, { key: "stop", value: function() { var t;
                    this.animationItem && (this.isPlaying && (t = 1 === this.animationItem.playDirection ? 0 : this.frames, this.animationItem.goToAndStop(t, !0)), this.currentState = m.Stopped) } }, { key: "destroy", value: function() { var e = this;
                    this.animationItem && (this.isPlaying && this.stop(), this.handlers.destroy.forEach(function(t) { return t() }), this.container && g.delete(this.container), this.animationItem.destroy(), Object.keys(this.handlers).forEach(function(t) { return e.handlers[t].length = 0 }), this.animationItem = null, this.container = null, this.config = null) } }, { key: "goToFrame", value: function(t) { this.animationItem && this.animationItem.setCurrentRawFrameValue(t) } }, { key: "setSubframe", value: function(t) { this.animationItem && this.animationItem.setSubframe(t) } }, { key: "setSpeed", value: function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(t)) } }, { key: "setLooping", value: function(t) { this.animationItem && (this.isPlaying && this.stop(), this.animationItem.loop = t) } }, { key: "setDirection", value: function(t) { this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setDirection(t), this.goToFrame(1 === t ? 0 : this.frames)) } }, { key: "isPlaying", get: function() { return !!this.animationItem && !this.animationItem.isPaused } }, { key: "isPaused", get: function() { return !!this.animationItem && this.animationItem.isPaused } }, { key: "duration", get: function() { return this.animationItem ? this.animationItem.getDuration() : 0 } }, { key: "frames", get: function() { return this.animationItem ? this.animationItem.totalFrames : 0 } }, { key: "direction", get: function() { return this.animationItem ? this.animationItem.playDirection : 1 } }, { key: "isLoaded", get: function() { return this.animationItem, this.animationItem.isLoaded } }, { key: "ix2InitialValue", get: function() { return this.config ? this.config.ix2InitialValue : null } }]), t }();
    e.createInstance = c;

    function d(t) {
        (t = g.get(t)) && t.destroy() }
    e.cleanupElement = d;
    n = function() { l().forEach(function(t) { 1 === parseFloat(t.getAttribute("data-is-ix2-target")) || d(t), c(t) }) };
    e.init = n;
    e.destroy = function() { l().forEach(d) }, e.ready = n }, function(t, e) { t.exports = function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } }, function(t, e) {
    function i(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } }
    t.exports = function(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t } }, function(t, e, n) { var i = n(159),
        r = n(211),
        a = n(108);
    t.exports = function(e) { var n = r(e); return 1 == n.length && n[0][2] ? a(n[0][0], n[0][1]) : function(t) { return t === e || i(t, e, n) } } }, function(t, e, n) { var f = n(94),
        p = n(98);
    t.exports = function(t, e, n, i) { var r = n.length,
            a = r,
            s = !i; if (null == t) return !a; for (t = Object(t); r--;) { var o = n[r]; if (s && o[2] ? o[1] !== t[o[0]] : !(o[0] in t)) return !1 } for (; ++r < a;) { var l = (o = n[r])[0],
                c = t[l],
                u = o[1]; if (s && o[2]) { if (void 0 === c && !(l in t)) return !1 } else { var d, h = new f; if (i && (d = i(c, u, l, t, e, h)), !(void 0 === d ? p(u, c, 3, i, h) : d)) return !1 } } return !0 } }, function(t, e) { t.exports = function() { this.__data__ = [], this.size = 0 } }, function(t, e, n) { var i = n(43),
        r = Array.prototype.splice;
    t.exports = function(t) { var e = this.__data__; return !((t = i(e, t)) < 0) && (t == e.length - 1 ? e.pop() : r.call(e, t, 1), --this.size, !0) } }, function(t, e, n) { var i = n(43);
    t.exports = function(t) { var e = this.__data__; return (t = i(e, t)) < 0 ? void 0 : e[t][1] } }, function(t, e, n) { var i = n(43);
    t.exports = function(t) { return -1 < i(this.__data__, t) } }, function(t, e, n) { var r = n(43);
    t.exports = function(t, e) { var n = this.__data__,
            i = r(n, t); return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this } }, function(t, e, n) { var i = n(42);
    t.exports = function() { this.__data__ = new i, this.size = 0 } }, function(t, e) { t.exports = function(t) { var e = this.__data__,
            t = e.delete(t); return this.size = e.size, t } }, function(t, e) { t.exports = function(t) { return this.__data__.get(t) } }, function(t, e) { t.exports = function(t) { return this.__data__.has(t) } }, function(t, e, n) { var r = n(42),
        a = n(57),
        s = n(58);
    t.exports = function(t, e) { var n = this.__data__; if (n instanceof r) { var i = n.__data__; if (!a || i.length < 199) return i.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new s(i) } return n.set(t, e), this.size = n.size, this } }, function(t, e, n) { var i = n(95),
        r = n(173),
        a = n(12),
        s = n(97),
        o = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        n = Object.prototype,
        l = l.toString,
        n = n.hasOwnProperty,
        c = RegExp("^" + l.call(n).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) { return !(!a(t) || r(t)) && (i(t) ? c : o).test(s(t)) } }, function(t, e, n) { var i = n(32),
        n = Object.prototype,
        a = n.hasOwnProperty,
        s = n.toString,
        o = i ? i.toStringTag : void 0;
    t.exports = function(t) { var e = a.call(t, o),
            n = t[o]; try { var i = !(t[o] = void 0) } catch (t) {} var r = s.call(t); return i && (e ? t[o] = n : delete t[o]), r } }, function(t, e) { var n = Object.prototype.toString;
    t.exports = function(t) { return n.call(t) } }, function(t, e, n) { var n = n(174),
        i = (n = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
    t.exports = function(t) { return !!i && i in t } }, function(t, e, n) { n = n(9)["__core-js_shared__"];
    t.exports = n }, function(t, e) { t.exports = function(t, e) { return null == t ? void 0 : t[e] } }, function(t, e, n) { var i = n(177),
        r = n(42),
        a = n(57);
    t.exports = function() { this.size = 0, this.__data__ = { hash: new i, map: new(a || r), string: new i } } }, function(t, e, n) { var i = n(178),
        r = n(179),
        a = n(180),
        s = n(181),
        n = n(182);

    function o(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var i = t[e];
            this.set(i[0], i[1]) } }
    o.prototype.clear = i, o.prototype.delete = r, o.prototype.get = a, o.prototype.has = s, o.prototype.set = n, t.exports = o }, function(t, e, n) { var i = n(45);
    t.exports = function() { this.__data__ = i ? i(null) : {}, this.size = 0 } }, function(t, e) { t.exports = function(t) { return t = this.has(t) && delete this.__data__[t], this.size -= t ? 1 : 0, t } }, function(t, e, n) { var i = n(45),
        r = Object.prototype.hasOwnProperty;
    t.exports = function(t) { var e = this.__data__; if (i) { var n = e[t]; return "__lodash_hash_undefined__" === n ? void 0 : n } return r.call(e, t) ? e[t] : void 0 } }, function(t, e, n) { var i = n(45),
        r = Object.prototype.hasOwnProperty;
    t.exports = function(t) { var e = this.__data__; return i ? void 0 !== e[t] : r.call(e, t) } }, function(t, e, n) { var i = n(45);
    t.exports = function(t, e) { var n = this.__data__; return this.size += this.has(t) ? 0 : 1, n[t] = i && void 0 === e ? "__lodash_hash_undefined__" : e, this } }, function(t, e, n) { var i = n(46);
    t.exports = function(t) { return t = i(this, t).delete(t), this.size -= t ? 1 : 0, t } }, function(t, e) { t.exports = function(t) { var e = typeof t; return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t } }, function(t, e, n) { var i = n(46);
    t.exports = function(t) { return i(this, t).get(t) } }, function(t, e, n) { var i = n(46);
    t.exports = function(t) { return i(this, t).has(t) } }, function(t, e, n) { var r = n(46);
    t.exports = function(t, e) { var n = r(this, t),
            i = n.size; return n.set(t, e), this.size += n.size == i ? 0 : 1, this } }, function(t, e, n) { var d = n(94),
        h = n(99),
        f = n(194),
        p = n(198),
        m = n(66),
        g = n(2),
        y = n(60),
        v = n(62),
        E = "[object Arguments]",
        b = "[object Array]",
        T = "[object Object]",
        I = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, i, r, a) { var s = g(t),
            o = g(e),
            l = s ? b : m(t),
            c = o ? b : m(e),
            u = (l = l == E ? T : l) == T,
            o = (c = c == E ? T : c) == T; if ((c = l == c) && y(t)) { if (!y(e)) return !1;
            u = !(s = !0) } if (c && !u) return a = a || new d, s || v(t) ? h(t, e, n, i, r, a) : f(t, e, l, n, i, r, a); if (!(1 & n)) { u = u && I.call(t, "__wrapped__"), o = o && I.call(e, "__wrapped__"); if (u || o) return r(u ? t.value() : t, o ? e.value() : e, n, i, a = a || new d) } return !!c && (a = a || new d, p(t, e, n, i, r, a)) } }, function(t, e, n) { var i = n(58),
        r = n(190),
        n = n(191);

    function a(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.__data__ = new i; ++e < n;) this.add(t[e]) }
    a.prototype.add = a.prototype.push = r, a.prototype.has = n, t.exports = a }, function(t, e) { t.exports = function(t) { return this.__data__.set(t, "__lodash_hash_undefined__"), this } }, function(t, e) { t.exports = function(t) { return this.__data__.has(t) } }, function(t, e) { t.exports = function(t, e) { for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
            if (e(t[n], n, t)) return !0;
        return !1 } }, function(t, e) { t.exports = function(t, e) { return t.has(e) } }, function(t, e, n) { var i = n(32),
        c = n(195),
        u = n(56),
        d = n(99),
        h = n(196),
        f = n(197),
        i = i ? i.prototype : void 0,
        p = i ? i.valueOf : void 0;
    t.exports = function(t, e, n, i, r, a, s) { switch (n) {
            case "[object DataView]":
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case "[object ArrayBuffer]":
                return t.byteLength == e.byteLength && a(new c(t), new c(e)) ? !0 : !1;
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return u(+t, +e);
            case "[object Error]":
                return t.name == e.name && t.message == e.message;
            case "[object RegExp]":
            case "[object String]":
                return t == e + "";
            case "[object Map]":
                var o = h;
            case "[object Set]":
                var l = 1 & i,
                    o = o || f; if (t.size != e.size && !l) return !1;
                l = s.get(t); if (l) return l == e;
                i |= 2, s.set(t, e);
                o = d(o(t), o(e), i, r, a, s); return s.delete(t), o;
            case "[object Symbol]":
                if (p) return p.call(t) == p.call(e) } return !1 } }, function(t, e, n) { n = n(9).Uint8Array;
    t.exports = n }, function(t, e) { t.exports = function(t) { var n = -1,
            i = Array(t.size); return t.forEach(function(t, e) { i[++n] = [e, t] }), i } }, function(t, e) { t.exports = function(t) { var e = -1,
            n = Array(t.size); return t.forEach(function(t) { n[++e] = t }), n } }, function(t, e, n) { var v = n(199),
        E = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, i, r, a) { var s = 1 & n,
            o = v(t),
            l = o.length; if (l != v(e).length && !s) return !1; for (var c = l; c--;) { var u = o[c]; if (!(s ? u in e : E.call(e, u))) return !1 } var d = a.get(t),
            h = a.get(e); if (d && h) return d == e && h == t; var f = !0;
        a.set(t, e), a.set(e, t); for (var p = s; ++c < l;) { var m, g = t[u = o[c]],
                y = e[u]; if (i && (m = s ? i(y, g, u, e, t, a) : i(g, y, u, t, e, a)), !(void 0 === m ? g === y || r(g, y, n, i, a) : m)) { f = !1; break }
            p = p || "constructor" == u } return !f || p || (d = t.constructor) != (h = e.constructor) && "constructor" in t && "constructor" in e && !("function" == typeof d && d instanceof d && "function" == typeof h && h instanceof h) && (f = !1), a.delete(t), a.delete(e), f } }, function(t, e, n) { var i = n(100),
        r = n(101),
        a = n(47);
    t.exports = function(t) { return i(t, a, r) } }, function(t, e) { t.exports = function(t, e) { for (var n = -1, i = null == t ? 0 : t.length, r = 0, a = []; ++n < i;) { var s = t[n];
            e(s, n, t) && (a[r++] = s) } return a } }, function(t, e) { t.exports = function(t, e) { for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n); return i } }, function(t, e, n) { var i = n(25),
        r = n(20);
    t.exports = function(t) { return r(t) && "[object Arguments]" == i(t) } }, function(t, e) { t.exports = function() { return !1 } }, function(t, e, n) { var i = n(25),
        r = n(63),
        a = n(20),
        s = {};
    s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, t.exports = function(t) { return a(t) && r(t.length) && !!s[i(t)] } }, function(t, e) { t.exports = function(e) { return function(t) { return e(t) } } }, function(t, a, s) {
    (function(t) { var e = s(96),
            n = a && !a.nodeType && a,
            i = n && "object" == typeof t && t && !t.nodeType && t,
            r = i && i.exports === n && e.process,
            e = function() { try { var t = i && i.require && i.require("util").types; return t ? t : r && r.binding && r.binding("util") } catch (t) {} }();
        t.exports = e }).call(this, s(104)(t)) }, function(t, e, n) { n = n(105)(Object.keys, Object);
    t.exports = n }, function(t, e, n) { n = n(19)(n(9), "DataView");
    t.exports = n }, function(t, e, n) { n = n(19)(n(9), "Promise");
    t.exports = n }, function(t, e, n) { n = n(19)(n(9), "Set");
    t.exports = n }, function(t, e, n) { var a = n(107),
        s = n(47);
    t.exports = function(t) { for (var e = s(t), n = e.length; n--;) { var i = e[n],
                r = t[i];
            e[n] = [i, r, a(r)] } return e } }, function(t, e, n) { var r = n(98),
        a = n(67),
        s = n(218),
        o = n(69),
        l = n(107),
        c = n(108),
        u = n(33);
    t.exports = function(n, i) { return o(n) && l(i) ? c(u(n), i) : function(t) { var e = a(t, n); return void 0 === e && e === i ? s(t, n) : r(i, e, 3) } } }, function(t, e, n) { var n = n(214),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        n = n(function(t) { var r = []; return 46 === t.charCodeAt(0) && r.push(""), t.replace(i, function(t, e, n, i) { r.push(n ? i.replace(a, "$1") : e || t) }), r });
    t.exports = n }, function(t, e, n) { var i = n(215);
    t.exports = function(t) { var e = (t = i(t, function(t) { return 500 === e.size && e.clear(), t })).cache; return t } }, function(t, e, n) { var s = n(58),
        o = "Expected a function";

    function l(i, r) { if ("function" != typeof i || null != r && "function" != typeof r) throw new TypeError(o); var a = function() { var t = arguments,
                e = r ? r.apply(this, t) : t[0],
                n = a.cache; if (n.has(e)) return n.get(e);
            t = i.apply(this, t); return a.cache = n.set(e, t) || n, t }; return a.cache = new(l.Cache || s), a }
    l.Cache = s, t.exports = l }, function(t, e, n) { var i = n(217);
    t.exports = function(t) { return null == t ? "" : i(t) } }, function(t, e, n) { var i = n(32),
        r = n(109),
        a = n(2),
        s = n(50),
        o = 1 / 0,
        i = i ? i.prototype : void 0,
        l = i ? i.toString : void 0;
    t.exports = function t(e) { if ("string" == typeof e) return e; if (a(e)) return r(e, t) + ""; if (s(e)) return l ? l.call(e) : ""; var n = e + ""; return "0" == n && 1 / e == -o ? "-0" : n } }, function(t, e, n) { var i = n(219),
        r = n(220);
    t.exports = function(t, e) { return null != t && r(t, e, i) } }, function(t, e) { t.exports = function(t, e) { return null != t && e in Object(t) } }, function(t, e, n) { var o = n(49),
        l = n(48),
        c = n(2),
        u = n(61),
        d = n(63),
        h = n(33);
    t.exports = function(t, e, n) { for (var i = -1, r = (e = o(e, t)).length, a = !1; ++i < r;) { var s = h(e[i]); if (!(a = null != t && n(t, s))) break;
            t = t[s] } return a || ++i != r ? a : !!(r = null == t ? 0 : t.length) && d(r) && u(s, r) && (c(t) || l(t)) } }, function(t, e, n) { var i = n(110),
        r = n(222),
        a = n(69),
        s = n(33);
    t.exports = function(t) { return a(t) ? i(s(t)) : r(t) } }, function(t, e, n) { var i = n(68);
    t.exports = function(e) { return function(t) { return i(t, e) } } }, function(t, e, n) { var i = n(71);
    t.exports = function(t) { return t ? (t = i(t)) !== 1 / 0 && t !== -1 / 0 ? t == t ? t : 0 : 17976931348623157e292 * (t < 0 ? -1 : 1) : 0 === t ? t : 0 } }, function(t, e, n) { var i = n(225),
        r = /^\s+/;
    t.exports = function(t) { return t && t.slice(0, i(t) + 1).replace(r, "") } }, function(t, e) { var n = /\s/;
    t.exports = function(t) { for (var e = t.length; e-- && n.test(t.charAt(e));); return e } }, function(t, e, n) { t.exports = n(227), n(284), n(285) }, function(t, e, n) { n(228), n(245), n(252), n(253), n(254), n(255), n(257), n(258), n(260), n(261), n(262), n(263), n(264), n(265), n(126), n(267), n(268), n(269), n(270), n(272), n(273), n(274), n(275), n(276), n(277), n(278), n(279), n(281), n(282), n(283);
    n = n(119);
    t.exports = n.Array }, function(t, e, n) { "use strict"; var i = n(229).charAt,
        r = n(73),
        n = n(116),
        a = "String Iterator",
        s = r.set,
        o = r.getterFor(a);
    n(String, "String", function(t) { s(this, { type: a, string: String(t), index: 0 }) }, function() { var t = o(this),
            e = t.string,
            n = t.index; return n >= e.length ? { value: void 0, done: !0 } : (n = i(e, n), t.index += n.length, { value: n, done: !1 }) }) }, function(t, e, n) { var s = n(27),
        o = n(72),
        n = function(a) { return function(t, e) { var n, i = String(o(t)),
                    r = s(e),
                    t = i.length; return r < 0 || t <= r ? a ? "" : void 0 : (e = i.charCodeAt(r)) < 55296 || 56319 < e || r + 1 === t || (n = i.charCodeAt(r + 1)) < 56320 || 57343 < n ? a ? i.charAt(r) : e : a ? i.slice(r, r + 2) : n - 56320 + (e - 55296 << 10) + 65536 } };
    t.exports = { codeAt: n(!1), charAt: n(!0) } }, function(t, e, n) { var i = n(7),
        n = n(112),
        i = i.WeakMap;
    t.exports = "function" == typeof i && /native code/.test(n.call(i)) }, function(t, e, n) { "use strict"; var i = {}.propertyIsEnumerable,
        r = Object.getOwnPropertyDescriptor,
        a = r && !i.call({ 1: 2 }, 1);
    e.f = a ? function(t) { t = r(this, t); return !!t && t.enumerable } : i }, function(t, e, n) { var o = n(17),
        l = n(233),
        c = n(117),
        u = n(15);
    t.exports = function(t, e) { for (var n = l(e), i = u.f, r = c.f, a = 0; a < n.length; a++) { var s = n[a];
            o(t, s) || i(t, s, r(e, s)) } } }, function(t, e, n) { var i = n(80),
        r = n(234),
        a = n(235),
        s = n(28);
    t.exports = i("Reflect", "ownKeys") || function(t) { var e = r.f(s(t)),
            n = a.f; return n ? e.concat(n(t)) : e } }, function(t, e, n) { var i = n(120),
        r = n(82).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) { return i(t, r) } }, function(t, e) { e.f = Object.getOwnPropertySymbols }, function(t, e, n) { var i = n(8),
        r = /#|\.prototype\./,
        n = function(t, e) { t = s[a(t)]; return t == l || t != o && ("function" == typeof e ? i(e) : !!e) },
        a = n.normalize = function(t) { return String(t).replace(r, ".").toLowerCase() },
        s = n.data = {},
        o = n.NATIVE = "N",
        l = n.POLYFILL = "P";
    t.exports = n }, function(t, e, n) { "use strict";

    function i() { return this } var r = n(121).IteratorPrototype,
        a = n(123),
        s = n(52),
        o = n(124),
        l = n(35);
    t.exports = function(t, e, n) { e += " Iterator"; return t.prototype = a(r, { next: s(1, n) }), o(t, e, !1, !0), l[e] = i, t } }, function(t, e, n) { n = n(8);
    t.exports = !n(function() {
        function t() {} return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype }) }, function(t, e, n) { n = n(8);
    t.exports = !!Object.getOwnPropertySymbols && !n(function() { return !String(Symbol()) }) }, function(t, e, n) { var i = n(14),
        s = n(15),
        o = n(28),
        l = n(241);
    t.exports = i ? Object.defineProperties : function(t, e) { o(t); for (var n, i = l(e), r = i.length, a = 0; a < r;) s.f(t, n = i[a++], e[n]); return t } }, function(t, e, n) { var i = n(120),
        r = n(82);
    t.exports = Object.keys || function(t) { return i(t, r) } }, function(t, e, n) { n = n(80);
    t.exports = n("document", "documentElement") }, function(t, e, n) { var r = n(28),
        a = n(244);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() { var n, i = !1,
            t = {}; try {
            (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []), i = t instanceof Array } catch (t) {} return function(t, e) { return r(t), a(e), i ? n.call(t, e) : t.__proto__ = e, t } }() : void 0) }, function(t, e, n) { var i = n(16);
    t.exports = function(t) { if (!i(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype"); return t } }, function(t, e, n) { var i = n(0),
        r = n(246);
    i({ target: "Array", stat: !0, forced: !n(251)(function(t) { Array.from(t) }) }, { from: r }) }, function(t, e, n) { "use strict"; var d = n(54),
        h = n(4),
        f = n(247),
        p = n(248),
        m = n(3),
        g = n(36),
        y = n(249);
    t.exports = function(t) { var e, n, i, r, a = h(t),
            s = "function" == typeof this ? this : Array,
            o = arguments.length,
            l = 1 < o ? arguments[1] : void 0,
            c = void 0 !== l,
            u = 0,
            t = y(a); if (c && (l = d(l, 2 < o ? arguments[2] : void 0, 2)), null == t || s == Array && p(t))
            for (n = new s(e = m(a.length)); u < e; u++) g(n, u, c ? l(a[u], u) : a[u]);
        else
            for (r = t.call(a), n = new s; !(i = r.next()).done; u++) g(n, u, c ? f(r, l, [i.value, u], !0) : i.value); return n.length = u, n } }, function(t, e, n) { var a = n(28);
    t.exports = function(e, t, n, i) { try { return i ? t(a(n)[0], n[1]) : t(n) } catch (t) { var r = e.return; throw void 0 !== r && a(r.call(e)), t } } }, function(t, e, n) { var i = n(5),
        r = n(35),
        a = i("iterator"),
        s = Array.prototype;
    t.exports = function(t) { return void 0 !== t && (r.Array === t || s[a] === t) } }, function(t, e, n) { var i = n(250),
        r = n(35),
        a = n(5)("iterator");
    t.exports = function(t) { if (null != t) return t[a] || t["@@iterator"] || r[i(t)] } }, function(t, e, n) { var i = n(79),
        r = n(5)("toStringTag"),
        a = "Arguments" == i(function() { return arguments }());
    t.exports = function(t) { var e; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(t = function(t, e) { try { return t[e] } catch (t) {} }(e = Object(t), r)) ? t : a ? i(e) : "Object" == (t = i(e)) && "function" == typeof e.callee ? "Arguments" : t } }, function(t, e, n) { var r = n(5)("iterator"),
        a = !1; try { var i = 0,
            s = { next: function() { return { done: !!i++ } }, return: function() { a = !0 } };
        s[r] = function() { return this }, Array.from(s, function() { throw 2 }) } catch (t) {}
    t.exports = function(t, e) { if (!e && !a) return !1; var n = !1; try { var i = {};
            i[r] = function() { return { next: function() { return { done: n = !0 } } } }, t(i) } catch (t) {} return n } }, function(t, e, n) { n(0)({ target: "Array", stat: !0 }, { isArray: n(29) }) }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(8),
        a = n(36);
    i({ target: "Array", stat: !0, forced: r(function() {
            function t() {} return !(Array.of.call(t) instanceof t) }) }, { of: function() { for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); t < e;) a(n, t, arguments[t++]); return n.length = e, n } }) }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(8),
        c = n(29),
        u = n(16),
        d = n(4),
        h = n(3),
        f = n(36),
        p = n(37),
        a = n(38),
        m = n(5)("isConcatSpreadable"),
        g = 9007199254740991,
        y = "Maximum allowed index exceeded",
        r = !r(function() { var t = []; return t[m] = !1, t.concat()[0] !== t }),
        a = a("concat");
    i({ target: "Array", proto: !0, forced: !r || !a }, { concat: function(t) { for (var e, n, i, r = d(this), a = p(r, 0), s = 0, o = -1, l = arguments.length; o < l; o++)
                if (function(t) { if (!u(t)) return !1; var e = t[m]; return void 0 !== e ? !!e : c(t) }(i = -1 === o ? r : arguments[o])) { if (n = h(i.length), g < s + n) throw TypeError(y); for (e = 0; e < n; e++, s++) e in i && f(a, s, i[e]) } else { if (g <= s) throw TypeError(y);
                    f(a, s++, i) }
            return a.length = s, a } }) }, function(t, e, n) { var i = n(0),
        r = n(256),
        n = n(10);
    i({ target: "Array", proto: !0 }, { copyWithin: r }), n("copyWithin") }, function(t, e, n) { "use strict"; var l = n(4),
        c = n(34),
        u = n(3),
        d = Math.min;
    t.exports = [].copyWithin || function(t, e) { var n = l(this),
            i = u(n.length),
            r = c(t, i),
            a = c(e, i),
            e = 2 < arguments.length ? arguments[2] : void 0,
            s = d((void 0 === e ? i : c(e, i)) - a, i - r),
            o = 1; for (a < r && r < a + s && (o = -1, a += s - 1, r += s - 1); 0 < s--;) a in n ? n[r] = n[a] : delete n[r], r += o, a += o; return n } }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(23).every;
    i({ target: "Array", proto: !0, forced: n(13)("every") }, { every: function(t) { return r(this, t, 1 < arguments.length ? arguments[1] : void 0) } }) }, function(t, e, n) { var i = n(0),
        r = n(259),
        n = n(10);
    i({ target: "Array", proto: !0 }, { fill: r }), n("fill") }, function(t, e, n) { "use strict"; var s = n(4),
        o = n(34),
        l = n(3);
    t.exports = function(t) { for (var e = s(this), n = l(e.length), i = arguments.length, r = o(1 < i ? arguments[1] : void 0, n), i = 2 < i ? arguments[2] : void 0, a = void 0 === i ? n : o(i, n); r < a;) e[r++] = t; return e } }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(23).filter;
    i({ target: "Array", proto: !0, forced: !n(38)("filter") }, { filter: function(t) { return r(this, t, 1 < arguments.length ? arguments[1] : void 0) } }) }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(23).find,
        n = n(10),
        a = !0; "find" in [] && Array(1).find(function() { a = !1 }), i({ target: "Array", proto: !0, forced: a }, { find: function(t) { return r(this, t, 1 < arguments.length ? arguments[1] : void 0) } }), n("find") }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(23).findIndex,
        a = n(10),
        n = "findIndex",
        s = !0;
    n in [] && Array(1)[n](function() { s = !1 }), i({ target: "Array", proto: !0, forced: s }, { findIndex: function(t) { return r(this, t, 1 < arguments.length ? arguments[1] : void 0) } }), a(n) }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(125),
        a = n(4),
        s = n(3),
        o = n(27),
        l = n(37);
    i({ target: "Array", proto: !0 }, { flat: function() { var t = arguments.length ? arguments[0] : void 0,
                e = a(this),
                n = s(e.length),
                i = l(e, 0); return i.length = r(i, e, e, n, 0, void 0 === t ? 1 : o(t)), i } }) }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(125),
        a = n(4),
        s = n(3),
        o = n(55),
        l = n(37);
    i({ target: "Array", proto: !0 }, { flatMap: function(t) { var e, n = a(this),
                i = s(n.length); return o(t), (e = l(n, 0)).length = r(e, n, n, i, 0, 1, t, 1 < arguments.length ? arguments[1] : void 0), e } }) }, function(t, e, n) { "use strict"; var i = n(0),
        n = n(266);
    i({ target: "Array", proto: !0, forced: [].forEach != n }, { forEach: n }) }, function(t, e, n) { "use strict"; var i = n(23).forEach,
        n = n(13);
    t.exports = n("forEach") ? function(t) { return i(this, t, 1 < arguments.length ? arguments[1] : void 0) } : [].forEach }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(81).indexOf,
        n = n(13),
        a = [].indexOf,
        s = !!a && 1 / [1].indexOf(1, -0) < 0,
        n = n("indexOf");
    i({ target: "Array", proto: !0, forced: s || n }, { indexOf: function(t) { return s ? a.apply(this, arguments) || 0 : r(this, t, 1 < arguments.length ? arguments[1] : void 0) } }) }, function(t, e, n) { "use strict"; var i = n(22),
        r = n(10),
        a = n(35),
        s = n(73),
        n = n(116),
        o = "Array Iterator",
        l = s.set,
        c = s.getterFor(o);
    t.exports = n(Array, "Array", function(t, e) { l(this, { type: o, target: i(t), index: 0, kind: e }) }, function() { var t = c(this),
            e = t.target,
            n = t.kind,
            i = t.index++; return !e || i >= e.length ? { value: t.target = void 0, done: !0 } : "keys" == n ? { value: i, done: !1 } : "values" == n ? { value: e[i], done: !1 } : { value: [i, e[i]], done: !1 } }, "values"), a.Arguments = a.Array, r("keys"), r("values"), r("entries") }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(53),
        a = n(22),
        n = n(13),
        s = [].join,
        r = r != Object,
        n = n("join", ",");
    i({ target: "Array", proto: !0, forced: r || n }, { join: function(t) { return s.call(a(this), void 0 === t ? "," : t) } }) }, function(t, e, n) { var i = n(0),
        n = n(271);
    i({ target: "Array", proto: !0, forced: n !== [].lastIndexOf }, { lastIndexOf: n }) }, function(t, e, n) { "use strict"; var r = n(22),
        a = n(27),
        s = n(3),
        n = n(13),
        o = Math.min,
        l = [].lastIndexOf,
        c = !!l && 1 / [1].lastIndexOf(1, -0) < 0,
        n = n("lastIndexOf");
    t.exports = c || n ? function(t) { if (c) return l.apply(this, arguments) || 0; var e = r(this),
            n = s(e.length),
            i = n - 1; for (1 < arguments.length && (i = o(i, a(arguments[1]))), i < 0 && (i = n + i); 0 <= i; i--)
            if (i in e && e[i] === t) return i || 0;
        return -1 } : l }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(23).map;
    i({ target: "Array", proto: !0, forced: !n(38)("map") }, { map: function(t) { return r(this, t, 1 < arguments.length ? arguments[1] : void 0) } }) }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(127).left;
    i({ target: "Array", proto: !0, forced: n(13)("reduce") }, { reduce: function(t) { return r(this, t, arguments.length, 1 < arguments.length ? arguments[1] : void 0) } }) }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(127).right;
    i({ target: "Array", proto: !0, forced: n(13)("reduceRight") }, { reduceRight: function(t) { return r(this, t, arguments.length, 1 < arguments.length ? arguments[1] : void 0) } }) }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(29),
        a = [].reverse,
        n = [1, 2];
    i({ target: "Array", proto: !0, forced: String(n) === String(n.reverse()) }, { reverse: function() { return r(this) && (this.length = this.length), a.call(this) } }) }, function(t, e, n) { "use strict"; var i = n(0),
        c = n(16),
        u = n(29),
        d = n(34),
        h = n(3),
        f = n(22),
        p = n(36),
        r = n(38),
        m = n(5)("species"),
        g = [].slice,
        y = Math.max;
    i({ target: "Array", proto: !0, forced: !r("slice") }, { slice: function(t, e) { var n, i, r, a = f(this),
                s = h(a.length),
                o = d(t, s),
                l = d(void 0 === e ? s : e, s); if (u(a) && (("function" == typeof(n = a.constructor) && (n === Array || u(n.prototype)) || c(n) && null === (n = n[m])) && (n = void 0), n === Array || void 0 === n)) return g.call(a, o, l); for (i = new(void 0 === n ? Array : n)(y(l - o, 0)), r = 0; o < l; o++, r++) o in a && p(i, r, a[o]); return i.length = r, i } }) }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(23).some;
    i({ target: "Array", proto: !0, forced: n(13)("some") }, { some: function(t) { return r(this, t, 1 < arguments.length ? arguments[1] : void 0) } }) }, function(t, e, n) { "use strict"; var i = n(0),
        r = n(55),
        a = n(4),
        s = n(8),
        o = n(13),
        l = [].sort,
        c = [1, 2, 3],
        n = s(function() { c.sort(void 0) }),
        s = s(function() { c.sort(null) }),
        o = o("sort");
    i({ target: "Array", proto: !0, forced: n || !s || o }, { sort: function(t) { return void 0 === t ? l.call(a(this)) : l.call(a(this), r(t)) } }) }, function(t, e, n) { n(280)("Array") }, function(t, e, n) { "use strict"; var i = n(80),
        r = n(15),
        a = n(5),
        s = n(14),
        o = a("species");
    t.exports = function(t) { var e = i(t),
            t = r.f;
        s && e && !e[o] && t(e, o, { configurable: !0, get: function() { return this } }) } }, function(t, e, n) { "use strict"; var i = n(0),
        d = n(34),
        h = n(27),
        f = n(3),
        p = n(4),
        m = n(37),
        g = n(36),
        n = n(38),
        y = Math.max,
        v = Math.min;
    i({ target: "Array", proto: !0, forced: !n("splice") }, { splice: function(t, e) { var n, i, r, a, s, o, l = p(this),
                c = f(l.length),
                u = d(t, c),
                t = arguments.length; if (0 === t ? n = i = 0 : i = 1 === t ? (n = 0, c - u) : (n = t - 2, v(y(h(e), 0), c - u)), 9007199254740991 < c + n - i) throw TypeError("Maximum allowed length exceeded"); for (r = m(l, i), a = 0; a < i; a++)(s = u + a) in l && g(r, a, l[s]); if (n < (r.length = i)) { for (a = u; a < c - i; a++) o = a + n, (s = a + i) in l ? l[o] = l[s] : delete l[o]; for (a = c; c - i + n < a; a--) delete l[a - 1] } else if (i < n)
                for (a = c - i; u < a; a--) o = a + n - 1, (s = a + i - 1) in l ? l[o] = l[s] : delete l[o]; for (a = 0; a < n; a++) l[a + u] = arguments[a + 2]; return l.length = c - i + n, r } }) }, function(t, e, n) { n(10)("flat") }, function(t, e, n) { n(10)("flatMap") }, function(t, e, n) { "use strict"; var i = n(14),
        r = n(10),
        a = n(4),
        s = n(3),
        n = n(15).f;!i || "lastItem" in [] || (n(Array.prototype, "lastItem", { configurable: !0, get: function() { var t = a(this),
                e = s(t.length); return 0 == e ? void 0 : t[e - 1] }, set: function(t) { var e = a(this),
                n = s(e.length); return e[0 == n ? 0 : n - 1] = t } }), r("lastItem")) }, function(t, e, n) { "use strict"; var i = n(14),
        r = n(10),
        a = n(4),
        s = n(3),
        n = n(15).f;!i || "lastIndex" in [] || (n(Array.prototype, "lastIndex", { configurable: !0, get: function() { var t = a(this),
                t = s(t.length); return 0 == t ? 0 : t - 1 } }), r("lastIndex")) }, function(module, exports, __webpack_require__) { var __WEBPACK_AMD_DEFINE_RESULT__, $ra, _ra; "undefined" != typeof navigator && ($ra = window || {}, _ra = function(window) { "use strict"; var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            initialDefaultFrame = -999999,
            subframeEnabled = !0,
            idPrefix = "",
            expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            cachedColors = {},
            bmRnd, bmPow = Math.pow,
            bmSqrt = Math.sqrt,
            bmFloor = Math.floor,
            bmMax = Math.max,
            bmMin = Math.min,
            BMMath = {};

        function ProjectInterface() { return {} }! function() { for (var t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], e = t.length, n = 0; n < e; n += 1) BMMath[t[n]] = Math[t[n]] }(), BMMath.random = Math.random, BMMath.abs = function(t) { if ("object" == typeof t && t.length) { for (var e = createSizedArray(t.length), n = t.length, i = 0; i < n; i += 1) e[i] = Math.abs(t[i]); return e } return Math.abs(t) }; var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = .5519;

        function roundValues(t) { bmRnd = t ? Math.round : function(t) { return t } }

        function styleDiv(t) { t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d" }

        function BMEnterFrameEvent(t, e, n, i) { this.type = t, this.currentTime = e, this.totalTime = n, this.direction = i < 0 ? -1 : 1 }

        function BMCompleteEvent(t, e) { this.type = t, this.direction = e < 0 ? -1 : 1 }

        function BMCompleteLoopEvent(t, e, n, i) { this.type = t, this.currentLoop = n, this.totalLoops = e, this.direction = i < 0 ? -1 : 1 }

        function BMSegmentStartEvent(t, e, n) { this.type = t, this.firstFrame = e, this.totalFrames = n }

        function BMDestroyEvent(t, e) { this.type = t, this.target = e }

        function BMRenderFrameErrorEvent(t, e) { this.type = "renderFrameError", this.nativeError = t, this.currentTime = e }

        function BMConfigErrorEvent(t) { this.type = "configError", this.nativeError = t }

        function BMAnimationConfigErrorEvent(t, e) { this.type = t, this.nativeError = e }
        roundValues(!1); var createElementID = (Fsa = 0, function() { return idPrefix + "__lottie_element_" + (Fsa += 1) }),
            Fsa;

        function HSVtoRGB(t, e, n) { var i, r, a, s = Math.floor(6 * t),
                t = 6 * t - s,
                o = n * (1 - e),
                l = n * (1 - t * e),
                c = n * (1 - (1 - t) * e); switch (s % 6) {
                case 0:
                    i = n, r = c, a = o; break;
                case 1:
                    i = l, r = n, a = o; break;
                case 2:
                    i = o, r = n, a = c; break;
                case 3:
                    i = o, r = l, a = n; break;
                case 4:
                    i = c, r = o, a = n; break;
                case 5:
                    i = n, r = o, a = l } return [i, r, a] }

        function RGBtoHSV(t, e, n) { var i, r = Math.max(t, e, n),
                a = Math.min(t, e, n),
                s = r - a,
                o = 0 === r ? 0 : s / r,
                l = r / 255; switch (r) {
                case a:
                    i = 0; break;
                case t:
                    i = e - n + s * (e < n ? 6 : 0), i /= 6 * s; break;
                case e:
                    i = n - t + 2 * s, i /= 6 * s; break;
                case n:
                    i = t - e + 4 * s, i /= 6 * s } return [i, o, l] }

        function addSaturationToRGB(t, e) { t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return t[1] += e, 1 < t[1] ? t[1] = 1 : t[1] <= 0 && (t[1] = 0), HSVtoRGB(t[0], t[1], t[2]) }

        function addBrightnessToRGB(t, e) { t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return t[2] += e, 1 < t[2] ? t[2] = 1 : t[2] < 0 && (t[2] = 0), HSVtoRGB(t[0], t[1], t[2]) }

        function addHueToRGB(t, e) { t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return t[0] += e / 360, 1 < t[0] ? --t[0] : t[0] < 0 && (t[0] += 1), HSVtoRGB(t[0], t[1], t[2]) } var rgbToHex = function() { for (var t, i = [], e = 0; e < 256; e += 1) t = e.toString(16), i[e] = 1 === t.length ? "0" + t : t; return function(t, e, n) { return t < 0 && (t = 0), e < 0 && (e = 0), n < 0 && (n = 0), "#" + i[t] + i[e] + i[n] } }();

        function BaseEvent() {}
        BaseEvent.prototype = { triggerEvent: function(t, e) { if (this._cbs[t])
                    for (var n = this._cbs[t], i = 0; i < n.length; i += 1) n[i](e) }, addEventListener: function(t, e) { return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                    function() { this.removeEventListener(t, e) }.bind(this) }, removeEventListener: function(t, e) { if (e) { if (this._cbs[t]) { for (var n = 0, i = this._cbs[t].length; n < i;) this._cbs[t][n] === e && (this._cbs[t].splice(n, 1), --n, --i), n += 1;
                        this._cbs[t].length || (this._cbs[t] = null) } } else this._cbs[t] = null } }; var createTypedArray = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t, e) { return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : yta(t, e) } : yta;

        function yta(t, e) { var n, i = 0,
                r = []; switch (t) {
                case "int16":
                case "uint8c":
                    n = 1; break;
                default:
                    n = 1.1 } for (i = 0; i < e; i += 1) r.push(n); return r }

        function createSizedArray(t) { return Array.apply(null, { length: t }) }

        function createNS(t) { return document.createElementNS(svgNS, t) }

        function createTag(t) { return document.createElement(t) }

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = { addDynamicProperty: function(t) {-1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0) }, iterateDynamicProperties: function() { this._mdf = !1; for (var t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0) }, initDynamicPropertyContainer: function(t) { this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1 } }; var getBlendMode = (Ota = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" }, function(t) { return Ota[t] || "" }),
            Ota, lineCapEnum = { 1: "butt", 2: "round", 3: "square" },
            lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" },
            Matrix = (Qta = Math.cos, Rta = Math.sin, Sta = Math.tan, Tta = Math.round, function() { this.reset = Uta, this.rotate = Vta, this.rotateX = Wta, this.rotateY = Xta, this.rotateZ = Yta, this.skew = $ta, this.skewFromAxis = _ta, this.shear = Zta, this.scale = aua, this.setTransform = bua, this.translate = cua, this.transform = dua, this.applyToPoint = iua, this.applyToX = jua, this.applyToY = kua, this.applyToZ = lua, this.applyToPointArray = qua, this.applyToTriplePoints = pua, this.applyToPointStringified = rua, this.toCSS = sua, this.to2dCSS = uua, this.clone = gua, this.cloneFromProps = hua, this.equals = fua, this.inversePoints = oua, this.inversePoint = nua, this.getInverseMatrix = mua, this._t = this.transform, this.isIdentity = eua, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset() }),
            Qta, Rta, Sta, Tta;

        function Uta() { return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this }

        function Vta(t) { if (0 === t) return this; var e = Qta(t),
                t = Rta(t); return this._t(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) }

        function Wta(t) { if (0 === t) return this; var e = Qta(t),
                t = Rta(t); return this._t(1, 0, 0, 0, 0, e, -t, 0, 0, t, e, 0, 0, 0, 0, 1) }

        function Xta(t) { if (0 === t) return this; var e = Qta(t),
                t = Rta(t); return this._t(e, 0, t, 0, 0, 1, 0, 0, -t, 0, e, 0, 0, 0, 0, 1) }

        function Yta(t) { if (0 === t) return this; var e = Qta(t),
                t = Rta(t); return this._t(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) }

        function Zta(t, e) { return this._t(1, e, t, 1, 0, 0) }

        function $ta(t, e) { return this.shear(Sta(t), Sta(e)) }

        function _ta(t, e) { var n = Qta(e),
                e = Rta(e); return this._t(n, e, 0, 0, -e, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, Sta(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(n, -e, 0, 0, e, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) }

        function aua(t, e, n) { return n || 0 === n || (n = 1), 1 === t && 1 === e && 1 === n ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1) }

        function bua(t, e, n, i, r, a, s, o, l, c, u, d, h, f, p, m) { return this.props[0] = t, this.props[1] = e, this.props[2] = n, this.props[3] = i, this.props[4] = r, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = c, this.props[10] = u, this.props[11] = d, this.props[12] = h, this.props[13] = f, this.props[14] = p, this.props[15] = m, this }

        function cua(t, e, n) { return n = n || 0, 0 !== t || 0 !== e || 0 !== n ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, n, 1) : this }

        function dua(t, e, n, i, r, a, s, o, l, c, u, d, h, f, p, m) { var g = this.props; if (1 === t && 0 === e && 0 === n && 0 === i && 0 === r && 1 === a && 0 === s && 0 === o && 0 === l && 0 === c && 1 === u && 0 === d) return g[12] = g[12] * t + g[15] * h, g[13] = g[13] * a + g[15] * f, g[14] = g[14] * u + g[15] * p, g[15] *= m, this._identityCalculated = !1, this; var y = g[0],
                v = g[1],
                E = g[2],
                b = g[3],
                T = g[4],
                I = g[5],
                _ = g[6],
                A = g[7],
                S = g[8],
                x = g[9],
                R = g[10],
                P = g[11],
                C = g[12],
                O = g[13],
                M = g[14],
                D = g[15]; return g[0] = y * t + v * r + E * l + b * h, g[1] = y * e + v * a + E * c + b * f, g[2] = y * n + v * s + E * u + b * p, g[3] = y * i + v * o + E * d + b * m, g[4] = T * t + I * r + _ * l + A * h, g[5] = T * e + I * a + _ * c + A * f, g[6] = T * n + I * s + _ * u + A * p, g[7] = T * i + I * o + _ * d + A * m, g[8] = S * t + x * r + R * l + P * h, g[9] = S * e + x * a + R * c + P * f, g[10] = S * n + x * s + R * u + P * p, g[11] = S * i + x * o + R * d + P * m, g[12] = C * t + O * r + M * l + D * h, g[13] = C * e + O * a + M * c + D * f, g[14] = C * n + O * s + M * u + D * p, g[15] = C * i + O * o + M * d + D * m, this._identityCalculated = !1, this }

        function eua() { return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity }

        function fua(t) { for (var e = 0; e < 16;) { if (t.props[e] !== this.props[e]) return !1;
                e += 1 } return !0 }

        function gua(t) { for (var e = 0; e < 16; e += 1) t.props[e] = this.props[e]; return t }

        function hua(t) { for (var e = 0; e < 16; e += 1) this.props[e] = t[e] }

        function iua(t, e, n) { return { x: t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12], y: t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13], z: t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14] } }

        function jua(t, e, n) { return t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12] }

        function kua(t, e, n) { return t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13] }

        function lua(t, e, n) { return t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14] }

        function mua() { var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                e = this.props[5] / t,
                n = -this.props[1] / t,
                i = -this.props[4] / t,
                r = this.props[0] / t,
                a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                s = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                t = new Matrix; return t.props[0] = e, t.props[1] = n, t.props[4] = i, t.props[5] = r, t.props[12] = a, t.props[13] = s, t }

        function nua(t) { return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0) }

        function oua(t) { for (var e = t.length, n = [], i = 0; i < e; i += 1) n[i] = nua(t[i]); return n }

        function pua(t, e, n) { var i, r, a, s, o, l, c = createTypedArray("float32", 6); return this.isIdentity() ? (c[0] = t[0], c[1] = t[1], c[2] = e[0], c[3] = e[1], c[4] = n[0], c[5] = n[1]) : (i = this.props[0], r = this.props[1], a = this.props[4], s = this.props[5], o = this.props[12], l = this.props[13], c[0] = t[0] * i + t[1] * a + o, c[1] = t[0] * r + t[1] * s + l, c[2] = e[0] * i + e[1] * a + o, c[3] = e[0] * r + e[1] * s + l, c[4] = n[0] * i + n[1] * a + o, c[5] = n[0] * r + n[1] * s + l), c }

        function qua(t, e, n) { n = this.isIdentity() ? [t, e, n] : [t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14]]; return n }

        function rua(t, e) { if (this.isIdentity()) return t + "," + e; var n = this.props; return Math.round(100 * (t * n[0] + e * n[4] + n[12])) / 100 + "," + Math.round(100 * (t * n[1] + e * n[5] + n[13])) / 100 }

        function sua() { for (var t = 0, e = this.props, n = "matrix3d("; t < 16;) n += Tta(1e4 * e[t]) / 1e4, n += 15 === t ? ")" : ",", t += 1; return n }

        function tua(t) { return t < 1e-6 && 0 < t || -1e-6 < t && t < 0 ? Tta(1e4 * t) / 1e4 : t }

        function uua() { var t = this.props; return "matrix(" + tua(t[0]) + "," + tua(t[1]) + "," + tua(t[4]) + "," + tua(t[5]) + "," + tua(t[12]) + "," + tua(t[13]) + ")" }! function(a, s) { var o, l = this,
                c = 256,
                u = 6,
                d = "random",
                h = s.pow(c, u),
                f = s.pow(2, 52),
                p = 2 * f,
                m = c - 1;

            function g(t) { var e, n = t.length,
                    s = this,
                    i = 0,
                    r = s.i = s.j = 0,
                    a = s.S = []; for (n || (t = [n++]); i < c;) a[i] = i++; for (i = 0; i < c; i++) a[i] = a[r = m & r + t[i % n] + (e = a[i])], a[r] = e;
                s.g = function(t) { for (var e, n = 0, i = s.i, r = s.j, a = s.S; t--;) e = a[i = m & i + 1], n = n * c + a[m & (a[i] = a[r = m & r + e]) + (a[r] = e)]; return s.i = i, s.j = r, n } }

            function y(t, e) { return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e }

            function v(t, e) { for (var n, i = t + "", r = 0; r < i.length;) e[m & r] = m & (n ^= 19 * e[m & r]) + i.charCodeAt(r++); return E(e) }

            function E(t) { return String.fromCharCode.apply(0, t) }
            s["seed" + d] = function(t, e, n) { var i = [],
                    t = v(function t(e, n) { var i, r = [],
                            a = typeof e; if (n && "object" == a)
                            for (i in e) try { r.push(t(e[i], n - 1)) } catch (t) {}
                        return r.length ? r : "string" == a ? e : e + "\0" }((e = !0 === e ? { entropy: !0 } : e || {}).entropy ? [t, E(a)] : null === t ? function() { try { if (o) return E(o.randomBytes(c)); var t = new Uint8Array(c); return (l.crypto || l.msCrypto).getRandomValues(t), E(t) } catch (t) { var e = l.navigator,
                                e = e && e.plugins; return [+new Date, l, e, l.screen, E(a)] } }() : t, 3), i),
                    r = new g(i); return (i = function() { for (var t = r.g(u), e = h, n = 0; t < f;) t = (t + n) * c, e *= c, n = r.g(1); for (; p <= t;) t /= 2, e /= 2, n >>>= 1; return (t + n) / e }).int32 = function() { return 0 | r.g(4) }, i.quick = function() { return r.g(4) / 4294967296 }, i.double = i, v(E(r.S), a), (e.pass || n || function(t, e, n, i) { return i && (i.S && y(i, r), t.state = function() { return y(r, {}) }), n ? (s[d] = t, e) : t })(i, t, "global" in e ? e.global : this == s, e.state) }, v(s.random(), a) }([], BMMath); var BezierFactory = (gya = { getBezierEasing: function(t, e, n, i, r) { r = r || ("bez_" + t + "_" + e + "_" + n + "_" + i).replace(/\./g, "p"); if (hya[r]) return hya[r];
                    i = new xya([t, e, n, i]); return hya[r] = i } }, hya = {}, nya = 11, oya = 1 / (nya - 1), pya = "function" == typeof Float32Array, xya.prototype = { get: function(t) { var e = this._p[0],
                        n = this._p[1],
                        i = this._p[2],
                        r = this._p[3]; return this._precomputed || this._precompute(), e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : tya(this._getTForX(t), n, r) }, _precompute: function() { var t = this._p[0],
                        e = this._p[1],
                        n = this._p[2],
                        i = this._p[3];
                    this._precomputed = !0, t === e && n === i || this._calcSampleValues() }, _calcSampleValues: function() { for (var t = this._p[0], e = this._p[2], n = 0; n < nya; ++n) this._mSampleValues[n] = tya(n * oya, t, e) }, _getTForX: function(t) { for (var e = this._p[0], n = this._p[2], i = this._mSampleValues, r = 0, a = 1, s = nya - 1; a !== s && i[a] <= t; ++a) r += oya; var o = r + (t - i[--a]) / (i[a + 1] - i[a]) * oya,
                        l = uya(o, e, n); return .001 <= l ? function(t, e, n, i) { for (var r = 0; r < 4; ++r) { var a = uya(e, n, i); if (0 === a) return e;
                            e -= (tya(e, n, i) - t) / a } return e }(t, o, e, n) : 0 === l ? o : function(t, e, n, i, r) { for (var a, s, o = 0; 0 < (a = tya(s = e + (n - e) / 2, i, r) - t) ? n = s : e = s, 1e-7 < Math.abs(a) && ++o < 10;); return s }(t, r, r + oya, e, n) } }, gya),
            gya, hya, nya, oya, pya;

        function qya(t, e) { return 1 - 3 * e + 3 * t }

        function tya(t, e, n) { return ((qya(e, n) * t + (3 * n - 6 * e)) * t + 3 * e) * t }

        function uya(t, e, n) { return 3 * qya(e, n) * t * t + 2 * (3 * n - 6 * e) * t + 3 * e }

        function xya(t) { this._p = t, this._mSampleValues = new(pya ? Float32Array : Array)(nya), this._precomputed = !1, this.get = this.get.bind(this) }

        function extendPrototype(t, e) { for (var n, i = t.length, r = 0; r < i; r += 1)
                for (var a in n = t[r].prototype) Object.prototype.hasOwnProperty.call(n, a) && (e.prototype[a] = n[a]) }

        function getDescriptor(t, e) { return Object.getOwnPropertyDescriptor(t, e) }

        function createProxyFunction(t) {
            function e() {} return e.prototype = t, e }

        function bezFunction() { var x = Math;

            function g(t, e, n, i, r, a) { e = t * i + e * r + n * a - r * i - a * t - n * e; return -.001 < e && e < .001 } var u = function(t, e, n, i) { for (var r, a, s, o, l = defaultCurveSegments, c = 0, u = [], d = [], h = bezierLengthPool.newElement(), f = n.length, p = 0; p < l; p += 1) { for (s = p / (l - 1), r = o = 0; r < f; r += 1) a = bmPow(1 - s, 3) * t[r] + 3 * bmPow(1 - s, 2) * s * n[r] + 3 * (1 - s) * bmPow(s, 2) * i[r] + bmPow(s, 3) * e[r], u[r] = a, null !== d[r] && (o += bmPow(u[r] - d[r], 2)), d[r] = u[r];
                    o && (c += o = bmSqrt(o)), h.percents[p] = s, h.lengths[p] = c } return h.addedLength = c, h };

            function y(t) { this.segmentLength = 0, this.points = new Array(t) }

            function v(t, e) { this.partialLength = t, this.point = e } var E, t = (E = {}, function(t, e, n, i) { var r = (t[0] + "_" + t[1] + "_" + e[0] + "_" + e[1] + "_" + n[0] + "_" + n[1] + "_" + i[0] + "_" + i[1]).replace(/\./g, "p"); if (!E[r]) { var a, s, o, l, c, u = defaultCurveSegments,
                        d = 0,
                        h = null;
                    2 === t.length && (t[0] !== e[0] || t[1] !== e[1]) && g(t[0], t[1], e[0], e[1], t[0] + n[0], t[1] + n[1]) && g(t[0], t[1], e[0], e[1], e[0] + i[0], e[1] + i[1]) && (u = 2); for (var f = new y(u), p = n.length, m = 0; m < u; m += 1) { for (c = createSizedArray(p), o = m / (u - 1), a = l = 0; a < p; a += 1) s = bmPow(1 - o, 3) * t[a] + 3 * bmPow(1 - o, 2) * o * (t[a] + n[a]) + 3 * (1 - o) * bmPow(o, 2) * (e[a] + i[a]) + bmPow(o, 3) * e[a], c[a] = s, null !== h && (l += bmPow(c[a] - h[a], 2));
                        d += l = bmSqrt(l), f.points[m] = new v(l, c), h = c }
                    f.segmentLength = d, E[r] = f } return E[r] });

            function R(t, e) { var n = e.percents,
                    i = e.lengths,
                    r = n.length,
                    a = bmFloor((r - 1) * t),
                    s = t * e.addedLength,
                    o = 0; if (a === r - 1 || 0 === a || s === i[a]) return n[a]; for (var l = i[a] > s ? -1 : 1, c = !0; c;)
                    if (i[a] <= s && i[a + 1] > s ? (o = (s - i[a]) / (i[a + 1] - i[a]), c = !1) : a += l, a < 0 || r - 1 <= a) { if (a === r - 1) return n[a];
                        c = !1 }
                return n[a] + (n[a + 1] - n[a]) * o } var P = createTypedArray("float32", 8); return { getSegmentsLength: function(t) { for (var e = segmentsLengthPool.newElement(), n = t.c, i = t.v, r = t.o, a = t.i, s = t._length, o = e.lengths, l = 0, c = 0; c < s - 1; c += 1) o[c] = u(i[c], i[c + 1], r[c], a[c + 1]), l += o[c].addedLength; return n && s && (o[c] = u(i[c], i[0], r[c], a[0]), l += o[c].addedLength), e.totalLength = l, e }, getNewSegment: function(t, e, n, i, r, a, s) { r < 0 ? r = 0 : 1 < r && (r = 1); for (var o = R(r, s), r = R(a = 1 < a ? 1 : a, s), l = t.length, c = (a = 1 - o) * a * a, u = o * a * a * 3, d = o * o * a * 3, h = o * o * o, f = a * a * (s = 1 - r), p = o * a * s + a * o * s + a * a * r, m = o * o * s + a * o * r + o * a * r, g = o * o * r, y = a * s * s, v = o * s * s + a * r * s + a * s * r, E = o * r * s + a * r * r + o * s * r, b = o * r * r, T = s * s * s, I = r * s * s + s * r * s + s * s * r, _ = r * r * s + s * r * r + r * s * r, A = r * r * r, S = 0; S < l; S += 1) P[4 * S] = x.round(1e3 * (c * t[S] + u * n[S] + d * i[S] + h * e[S])) / 1e3, P[4 * S + 1] = x.round(1e3 * (f * t[S] + p * n[S] + m * i[S] + g * e[S])) / 1e3, P[4 * S + 2] = x.round(1e3 * (y * t[S] + v * n[S] + E * i[S] + b * e[S])) / 1e3, P[4 * S + 3] = x.round(1e3 * (T * t[S] + I * n[S] + _ * i[S] + A * e[S])) / 1e3; return P }, getPointInSegment: function(t, e, n, i, r, a) { return r = R(r, a), a = 1 - r, [x.round(1e3 * (a * a * a * t[0] + (r * a * a + a * r * a + a * a * r) * n[0] + (r * r * a + a * r * r + r * a * r) * i[0] + r * r * r * e[0])) / 1e3, x.round(1e3 * (a * a * a * t[1] + (r * a * a + a * r * a + a * a * r) * n[1] + (r * r * a + a * r * r + r * a * r) * i[1] + r * r * r * e[1])) / 1e3] }, buildBezierData: t, pointOnLine2D: g, pointOnLine3D: function(t, e, n, i, r, a, s, o, l) { if (0 === n && 0 === a && 0 === l) return g(t, e, i, r, s, o); var c = x.sqrt(x.pow(i - t, 2) + x.pow(r - e, 2) + x.pow(a - n, 2)),
                        n = x.sqrt(x.pow(s - t, 2) + x.pow(o - e, 2) + x.pow(l - n, 2)),
                        a = x.sqrt(x.pow(s - i, 2) + x.pow(o - r, 2) + x.pow(l - a, 2)); return -1e-4 < (a = n < c ? a < c ? c - n - a : a - n - c : n < a ? a - n - c : n - c - a) && a < 1e-4 } } }! function() { for (var r = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(t) { var e = (new Date).getTime(),
                    n = Math.max(0, 16 - (e - r)),
                    i = setTimeout(function() { t(e + n) }, n); return r = e + n, i }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) { clearTimeout(t) }) }(); var bez = bezFunction();

        function dataFunctionManager() {
            function d(t, e, n) { for (var i, r, a, s = t.length, o = 0; o < s; o += 1)
                    if ("ks" in (a = t[o]) && !a.completed) { if (a.completed = !0, a.tt && (t[o - 1].td = a.tt), a.hasMask)
                            for (var l = a.masksProperties, c = l.length, u = 0; u < c; u += 1)
                                if (l[u].pt.k.i) h(l[u].pt.k);
                                else
                                    for (r = l[u].pt.k.length, i = 0; i < r; i += 1) l[u].pt.k[i].s && h(l[u].pt.k[i].s[0]), l[u].pt.k[i].e && h(l[u].pt.k[i].e[0]);
                        0 === a.ty ? (a.layers = function(t, e) { var n = 0,
                                i = e.length; for (; n < i;) { if (e[n].id === t) return e[n].layers.__used ? JSON.parse(JSON.stringify(e[n].layers)) : (e[n].layers.__used = !0, e[n].layers);
                                n += 1 } return null }(a.refId, e), d(a.layers, e, n)) : 4 === a.ty ? function t(e) { var n; var i = e.length; var r; var a; for (n = i - 1; 0 <= n; --n)
                                if ("sh" === e[n].ty)
                                    if (e[n].ks.k.i) h(e[n].ks.k);
                                    else
                                        for (a = e[n].ks.k.length, r = 0; r < a; r += 1) e[n].ks.k[r].s && h(e[n].ks.k[r].s[0]), e[n].ks.k[r].e && h(e[n].ks.k[r].e[0]);
                            else "gr" === e[n].ty && t(e[n].it) }(a.shapes) : 5 === a.ty && (0 !== (a = a).t.a.length || "m" in a.t.p || (a.singleShape = !0)) } }

            function h(t) { for (var e = t.i.length, n = 0; n < e; n += 1) t.i[n][0] += t.v[n][0], t.i[n][1] += t.v[n][1], t.o[n][0] += t.v[n][0], t.o[n][1] += t.v[n][1] }

            function o(t, e) { e = e ? e.split(".") : [100, 100, 100]; return t[0] > e[0] || !(e[0] > t[0]) && (t[1] > e[1] || !(e[1] > t[1]) && (t[2] > e[2] || (e[2], void t[2]))) } var i, n = (i = [4, 4, 14], function(t) { if (o(i, t.v) && (r(t.layers), t.assets))
                    for (var e = t.assets.length, n = 0; n < e; n += 1) t.assets[n].layers && r(t.assets[n].layers) });

            function r(t) { for (var e, n, i = t.length, r = 0; r < i; r += 1) 5 === t[r].ty && (e = t[r], n = void 0, n = e.t.d, e.t.d = { k: [{ s: n, t: 0 }] }) } var l, a, s = (l = [4, 7, 99], function(t) { if (t.chars && !o(l, t.v))
                        for (var e, n, i, r, a = t.chars.length, s = 0; s < a; s += 1)
                            if (t.chars[s].data && t.chars[s].data.shapes)
                                for (n = (r = t.chars[s].data.shapes[0].it).length, e = 0; e < n; e += 1)(i = r[e].ks.k).__converted || (h(r[e].ks.k), i.__converted = !0) }),
                c = (a = [4, 1, 9], function(t) { if (o(a, t.v) && (u(t.layers), t.assets))
                        for (var e = t.assets.length, n = 0; n < e; n += 1) t.assets[n].layers && u(t.assets[n].layers) });

            function u(t) { for (var e = t.length, n = 0; n < e; n += 1) 4 === t[n].ty && ! function t(e) { for (var n, i, r = e.length, a = 0; a < r; a += 1)
                        if ("gr" === e[a].ty) t(e[a].it);
                        else if ("fl" === e[a].ty || "st" === e[a].ty)
                        if (e[a].c.k && e[a].c.k[0].i)
                            for (i = e[a].c.k.length, n = 0; n < i; n += 1) e[a].c.k[n].s && (e[a].c.k[n].s[0] /= 255, e[a].c.k[n].s[1] /= 255, e[a].c.k[n].s[2] /= 255, e[a].c.k[n].s[3] /= 255), e[a].c.k[n].e && (e[a].c.k[n].e[0] /= 255, e[a].c.k[n].e[1] /= 255, e[a].c.k[n].e[2] /= 255, e[a].c.k[n].e[3] /= 255);
                        else e[a].c.k[0] /= 255, e[a].c.k[1] /= 255, e[a].c.k[2] /= 255, e[a].c.k[3] /= 255 }(t[n].shapes) } var f, p = (f = [4, 4, 18], function(t) { if (o(f, t.v) && (m(t.layers), t.assets))
                    for (var e = t.assets.length, n = 0; n < e; n += 1) t.assets[n].layers && m(t.assets[n].layers) });

            function m(t) { for (var e, n, i, r = t.length, a = 0; a < r; a += 1) { if ((e = t[a]).hasMask)
                        for (var s = e.masksProperties, o = s.length, l = 0; l < o; l += 1)
                            if (s[l].pt.k.i) s[l].pt.k.c = s[l].cl;
                            else
                                for (i = s[l].pt.k.length, n = 0; n < i; n += 1) s[l].pt.k[n].s && (s[l].pt.k[n].s[0].c = s[l].cl), s[l].pt.k[n].e && (s[l].pt.k[n].e[0].c = s[l].cl);
                    4 === e.ty && ! function t(e) { for (var n, i, r = e.length - 1; 0 <= r; --r)
                            if ("sh" === e[r].ty)
                                if (e[r].ks.k.i) e[r].ks.k.c = e[r].closed;
                                else
                                    for (i = e[r].ks.k.length, n = 0; n < i; n += 1) e[r].ks.k[n].s && (e[r].ks.k[n].s[0].c = e[r].closed), e[r].ks.k[n].e && (e[r].ks.k[n].e[0].c = e[r].closed);
                        else "gr" === e[r].ty && t(e[r].it) }(e.shapes) } } var t = { completeData: function(t, e) { t.__complete || (c(t), n(t), s(t), p(t), d(t.layers, t.assets, e), t.__complete = !0) } }; return t.checkColors = c, t.checkChars = s, t.checkShapes = p, t.completeLayers = d, t } var dataManager = dataFunctionManager();

        function getFontProperties(t) { for (var e = t.fStyle ? t.fStyle.split(" ") : [], n = "normal", i = "normal", r = e.length, a = 0; a < r; a += 1) switch (e[a].toLowerCase()) {
                case "italic":
                    i = "italic"; break;
                case "bold":
                    n = "700"; break;
                case "black":
                    n = "900"; break;
                case "medium":
                    n = "500"; break;
                case "regular":
                case "normal":
                    n = "400"; break;
                case "light":
                case "thin":
                    n = "200" }
            return { style: i, weight: t.fWeight || n } } var FontManager = (cEa = { w: 0, size: 0, shapes: [] }, dEa = (dEa = []).concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]), eEa = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"], fEa = [65039, 8205], tEa.isModifier = function(t, e) { return e = t.toString(16) + e.toString(16), -1 !== eEa.indexOf(e) }, tEa.isZeroWidthJoiner = function(t, e) { return e ? t === fEa[0] && e === fEa[1] : t === fEa[1] }, tEa.isCombinedCharacter = function(t) { return -1 !== dEa.indexOf(t) }, tEa.prototype = { addChars: function(t) { if (t) { this.chars || (this.chars = []); for (var e, n, i = t.length, r = this.chars.length, a = 0; a < i; a += 1) { for (e = 0, n = !1; e < r;) this.chars[e].style === t[a].style && this.chars[e].fFamily === t[a].fFamily && this.chars[e].ch === t[a].ch && (n = !0), e += 1;
                            n || (this.chars.push(t[a]), r += 1) } } }, addFonts: function(t, e) { if (t) { if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list); for (var n = t.list, i = n.length, r = i, a = 0; a < i; a += 1) { var s, o, l, c, u = !0; if (n[a].loaded = !1, n[a].monoCase = hEa(n[a].fFamily, "monospace"), n[a].sansCase = hEa(n[a].fFamily, "sans-serif"), n[a].fPath) { if ("p" === n[a].fOrigin || 3 === n[a].origin) 0 < (l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[a].fFamily + '"], style[f-origin="3"][f-family="' + n[a].fFamily + '"]')).length && (u = !1), u && ((o = createTag("style")).setAttribute("f-forigin", n[a].fOrigin), o.setAttribute("f-origin", n[a].origin), o.setAttribute("f-family", n[a].fFamily), o.type = "text/css", o.innerText = "@font-face {font-family: " + n[a].fFamily + "; font-style: normal; src: url('" + n[a].fPath + "');}", e.appendChild(o));
                                else if ("g" === n[a].fOrigin || 1 === n[a].origin) { for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), s = 0; s < l.length; s += 1) - 1 !== l[s].href.indexOf(n[a].fPath) && (u = !1);
                                    u && ((c = createTag("link")).setAttribute("f-forigin", n[a].fOrigin), c.setAttribute("f-origin", n[a].origin), c.type = "text/css", c.rel = "stylesheet", c.href = n[a].fPath, document.body.appendChild(c)) } else if ("t" === n[a].fOrigin || 2 === n[a].origin) { for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), s = 0; s < l.length; s += 1) n[a].fPath === l[s].src && (u = !1);
                                    u && ((c = createTag("link")).setAttribute("f-forigin", n[a].fOrigin), c.setAttribute("f-origin", n[a].origin), c.setAttribute("rel", "stylesheet"), c.setAttribute("href", n[a].fPath), e.appendChild(c)) } } else n[a].loaded = !0, --r;
                            n[a].helper = function(t, e) { var n = createNS("text");
                                n.style.fontSize = "100px"; var i = getFontProperties(e); return n.setAttribute("font-family", e.fFamily), n.setAttribute("font-style", i.style), n.setAttribute("font-weight", i.weight), n.textContent = "1", e.fClass ? (n.style.fontFamily = "inherit", n.setAttribute("class", e.fClass)) : n.style.fontFamily = e.fFamily, t.appendChild(n), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, n }(e, n[a]), n[a].cache = {}, this.fonts.push(n[a]) }
                        0 === r ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100) } else this.isLoaded = !0 }, getCharData: function(t, e, n) { for (var i = 0, r = this.chars.length; i < r;) { if (this.chars[i].ch === t && this.chars[i].style === e && this.chars[i].fFamily === n) return this.chars[i];
                        i += 1 } return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", t, e, n)), cEa }, getFontByName: function(t) { for (var e = 0, n = this.fonts.length; e < n;) { if (this.fonts[e].fName === t) return this.fonts[e];
                        e += 1 } return this.fonts[0] }, measureText: function(t, e, n) { var i, r, a = this.getFontByName(e),
                        s = t.charCodeAt(0); return a.cache[s + 1] || (i = a.helper, " " === t ? (i.textContent = "|" + t + "|", r = i.getComputedTextLength(), i.textContent = "||", e = i.getComputedTextLength(), a.cache[s + 1] = (r - e) / 100) : (i.textContent = t, a.cache[s + 1] = i.getComputedTextLength() / 100)), a.cache[s + 1] * n }, checkLoadedFonts: function() { for (var t, e, n = this.fonts.length, i = n, r = 0; r < n; r += 1) this.fonts[r].loaded ? --i : "n" === this.fonts[r].fOrigin || 0 === this.fonts[r].origin ? this.fonts[r].loaded = !0 : (t = this.fonts[r].monoCase.node, e = this.fonts[r].monoCase.w, t.offsetWidth !== e ? (--i, this.fonts[r].loaded = !0) : (t = this.fonts[r].sansCase.node, e = this.fonts[r].sansCase.w, t.offsetWidth !== e && (--i, this.fonts[r].loaded = !0)), this.fonts[r].loaded && (this.fonts[r].sansCase.parent.parentNode.removeChild(this.fonts[r].sansCase.parent), this.fonts[r].monoCase.parent.parentNode.removeChild(this.fonts[r].monoCase.parent)));
                    0 !== i && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10) }, setIsLoaded: function() { this.isLoaded = !0 } }, tEa),
            cEa, dEa, eEa, fEa;

        function hEa(t, e) { var n = createTag("span");
            n.setAttribute("aria-hidden", !0), n.style.fontFamily = e; var i = createTag("span");
            i.innerText = "giItT1WQy@!-/#", n.style.position = "absolute", n.style.left = "-10000px", n.style.top = "-10000px", n.style.fontSize = "300px", n.style.fontVariant = "normal", n.style.fontStyle = "normal", n.style.fontWeight = "normal", n.style.letterSpacing = "0", n.appendChild(i), document.body.appendChild(n); var r = i.offsetWidth; return i.style.fontFamily = function(t) { for (var e = t.split(","), n = e.length, i = [], r = 0; r < n; r += 1) "sans-serif" !== e[r] && "monospace" !== e[r] && i.push(e[r]); return i.join(",") }(t) + ", " + e, { node: i, w: r, parent: n } }

        function tEa() { this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this) } var PropertyFactory = (BFa = initialDefaultFrame, CFa = Math.abs, { getProp: function(t, e, n, i, r) { var a; if (e.k.length)
                        if ("number" == typeof e.k[0]) a = new MFa(t, e, i, r);
                        else switch (n) {
                            case 0:
                                a = new NFa(t, e, i, r); break;
                            case 1:
                                a = new OFa(t, e, i, r) } else a = new LFa(t, e, i, r);
                    return a.effectsSequence.length && r.addDynamicProperty(a), a } }),
            BFa, CFa;

        function DFa(t, e) { var n, i = this.offsetTime; "multidimensional" === this.propType && (n = createTypedArray("float32", this.pv.length)); for (var r, a, s, o, l = e.lastIndex, c = l, u = this.keyframes.length - 1, d = !0; d;) { if (r = this.keyframes[c], a = this.keyframes[c + 1], c === u - 1 && t >= a.t - i) { r.h && (r = a), l = 0; break } if (a.t - i > t) { l = c; break }
                c < u - 1 ? c += 1 : (l = 0, d = !1) } var h, f, p, m, g, y = a.t - i,
                v = r.t - i; if (r.to) { r.bezierData || (r.bezierData = bez.buildBezierData(r.s, a.s || r.e, r.to, r.ti)); var E = r.bezierData; if (y <= t || t < v)
                    for (var b = y <= t ? E.points.length - 1 : 0, T = E.points[b].point.length, I = 0; I < T; I += 1) n[I] = E.points[b].point[I];
                else { r.__fnct ? o = r.__fnct : (o = BezierFactory.getBezierEasing(r.o.x, r.o.y, r.i.x, r.i.y, r.n).get, r.__fnct = o), s = o((t - v) / (y - v)); for (var _, A = E.segmentLength * s, S = e.lastFrame < t && e._lastKeyframeIndex === c ? e._lastAddedLength : 0, x = e.lastFrame < t && e._lastKeyframeIndex === c ? e._lastPoint : 0, d = !0, R = E.points.length; d;) { if (S += E.points[x].partialLength, 0 == A || 0 === s || x === E.points.length - 1) { for (T = E.points[x].point.length, I = 0; I < T; I += 1) n[I] = E.points[x].point[I]; break } if (S <= A && A < S + E.points[x + 1].partialLength) { for (_ = (A - S) / E.points[x + 1].partialLength, T = E.points[x].point.length, I = 0; I < T; I += 1) n[I] = E.points[x].point[I] + (E.points[x + 1].point[I] - E.points[x].point[I]) * _; break }
                        x < R - 1 ? x += 1 : d = !1 }
                    e._lastPoint = x, e._lastAddedLength = S - E.points[x].partialLength, e._lastKeyframeIndex = c } } else { var P, C, O, M, D, w, N, u = r.s.length,
                    L = a.s || r.e; if (this.sh && 1 !== r.h) y <= t ? (n[0] = L[0], n[1] = L[1], n[2] = L[2]) : t <= v ? (n[0] = r.s[0], n[1] = r.s[1], n[2] = r.s[2]) : (w = GFa(r.s), N = GFa(L), h = n, f = function(t, e, n) { var i, r = [],
                        a = t[0],
                        s = t[1],
                        o = t[2],
                        l = t[3],
                        c = e[0],
                        u = e[1],
                        d = e[2],
                        h = e[3];
                    (t = a * c + s * u + o * d + l * h) < 0 && (t = -t, c = -c, u = -u, d = -d, h = -h);
                    n = 1e-6 < 1 - t ? (e = Math.acos(t), t = Math.sin(e), i = Math.sin((1 - n) * e) / t, Math.sin(n * e) / t) : (i = 1 - n, n); return r[0] = i * a + n * c, r[1] = i * s + n * u, r[2] = i * o + n * d, r[3] = i * l + n * h, r }(w, N, (t - v) / (y - v)), p = f[0], m = f[1], g = f[2], w = f[3], N = Math.atan2(2 * m * w - 2 * p * g, 1 - 2 * m * m - 2 * g * g), f = Math.asin(2 * p * m + 2 * g * w), g = Math.atan2(2 * p * w - 2 * m * g, 1 - 2 * p * p - 2 * g * g), h[0] = N / degToRads, h[1] = f / degToRads, h[2] = g / degToRads);
                else
                    for (c = 0; c < u; c += 1) 1 !== r.h && (s = y <= t ? 1 : t < v ? 0 : (r.o.x.constructor === Array ? (r.__fnct || (r.__fnct = []), r.__fnct[c] ? o = r.__fnct[c] : (P = void 0 === r.o.x[c] ? r.o.x[0] : r.o.x[c], C = void 0 === r.o.y[c] ? r.o.y[0] : r.o.y[c], O = void 0 === r.i.x[c] ? r.i.x[0] : r.i.x[c], M = void 0 === r.i.y[c] ? r.i.y[0] : r.i.y[c], o = BezierFactory.getBezierEasing(P, C, O, M).get, r.__fnct[c] = o)) : r.__fnct ? o = r.__fnct : (P = r.o.x, C = r.o.y, O = r.i.x, M = r.i.y, o = BezierFactory.getBezierEasing(P, C, O, M).get, r.__fnct = o), o((t - v) / (y - v)))), L = a.s || r.e, D = 1 === r.h ? r.s[c] : r.s[c] + (L[c] - r.s[c]) * s, "multidimensional" === this.propType ? n[c] = D : n = D } return e.lastIndex = l, n }

        function GFa(t) { var e = t[0] * degToRads,
                n = t[1] * degToRads,
                i = t[2] * degToRads,
                r = Math.cos(e / 2),
                a = Math.cos(n / 2),
                t = Math.cos(i / 2),
                e = Math.sin(e / 2),
                n = Math.sin(n / 2),
                i = Math.sin(i / 2); return [e * n * t + r * a * i, e * a * t + r * n * i, r * n * t - e * a * i, r * a * t - e * n * i] }

        function HFa() { var t = this.comp.renderedFrame - this.offsetTime,
                e = this.keyframes[0].t - this.offsetTime,
                n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime; return t === this._caching.lastFrame || this._caching.lastFrame !== BFa && (this._caching.lastFrame >= n && n <= t || this._caching.lastFrame < e && t < e) || (this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0), e = this.interpolateValue(t, this._caching), this.pv = e), this._caching.lastFrame = t, this.pv }

        function IFa(t) { var e; if ("unidimensional" === this.propType) e = t * this.mult, 1e-5 < CFa(this.v - e) && (this.v = e, this._mdf = !0);
            else
                for (var n = 0, i = this.v.length; n < i;) e = t[n] * this.mult, 1e-5 < CFa(this.v[n] - e) && (this.v[n] = e, this._mdf = !0), n += 1 }

        function JFa() { if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                if (this.lock) this.setVValue(this.pv);
                else { this.lock = !0, this._mdf = this._isFirstFrame; for (var t = this.effectsSequence.length, e = this.kf ? this.pv : this.data.k, n = 0; n < t; n += 1) e = this.effectsSequence[n](e);
                    this.setVValue(e), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId } }

        function KFa(t) { this.effectsSequence.push(t), this.container.addDynamicProperty(this) }

        function LFa(t, e, n, i) { this.propType = "unidimensional", this.mult = n || 1, this.data = e, this.v = n ? e.k * n : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = JFa, this.setVValue = IFa, this.addEffect = KFa }

        function MFa(t, e, n, i) { var r;
            this.propType = "multidimensional", this.mult = n || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1; var a = e.k.length; for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), r = 0; r < a; r += 1) this.v[r] = e.k[r] * this.mult, this.pv[r] = e.k[r];
            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = JFa, this.setVValue = IFa, this.addEffect = KFa }

        function NFa(t, e, n, i) { this.propType = "unidimensional", this.keyframes = e.k, this.offsetTime = t.data.st, this.frameId = -1, this._caching = { lastFrame: BFa, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = !0, this.kf = !0, this.data = e, this.mult = n || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = BFa, this.pv = BFa, this._isFirstFrame = !0, this.getValue = JFa, this.setVValue = IFa, this.interpolateValue = DFa, this.effectsSequence = [HFa.bind(this)], this.addEffect = KFa }

        function OFa(t, e, n, i) { this.propType = "multidimensional"; for (var r, a, s, o, l = e.k.length, c = 0; c < l - 1; c += 1) e.k[c].to && e.k[c].s && e.k[c + 1] && e.k[c + 1].s && (r = e.k[c].s, a = e.k[c + 1].s, s = e.k[c].to, o = e.k[c].ti, (2 === r.length && (r[0] !== a[0] || r[1] !== a[1]) && bez.pointOnLine2D(r[0], r[1], a[0], a[1], r[0] + s[0], r[1] + s[1]) && bez.pointOnLine2D(r[0], r[1], a[0], a[1], a[0] + o[0], a[1] + o[1]) || 3 === r.length && (r[0] !== a[0] || r[1] !== a[1] || r[2] !== a[2]) && bez.pointOnLine3D(r[0], r[1], r[2], a[0], a[1], a[2], r[0] + s[0], r[1] + s[1], r[2] + s[2]) && bez.pointOnLine3D(r[0], r[1], r[2], a[0], a[1], a[2], a[0] + o[0], a[1] + o[1], a[2] + o[2])) && (e.k[c].to = null, e.k[c].ti = null), r[0] === a[0] && r[1] === a[1] && 0 === s[0] && 0 === s[1] && 0 === o[0] && 0 === o[1] && (2 === r.length || r[2] === a[2] && 0 === s[2] && 0 === o[2]) && (e.k[c].to = null, e.k[c].ti = null));
            this.effectsSequence = [HFa.bind(this)], this.data = e, this.keyframes = e.k, this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = n || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = JFa, this.setVValue = IFa, this.interpolateValue = DFa, this.frameId = -1; var u = e.k[0].s.length; for (this.v = createTypedArray("float32", u), this.pv = createTypedArray("float32", u), c = 0; c < u; c += 1) this.v[c] = BFa, this.pv[c] = BFa;
            this._caching = { lastFrame: BFa, lastIndex: 0, value: createTypedArray("float32", u) }, this.addEffect = KFa } var TransformPropertyFactory = (YHa = [0, 0], cIa.prototype = { applyToMatrix: function(t) { var e = this._mdf;
                    this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]) }, getValue: function(t) { var e, n, i, r;
                    this.elem.globalData.frameId !== this.frameId && (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), (this._mdf || t) && (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented && (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime ? n = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (e = this.p.pv, this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime)) : this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime ? (e = [], n = [], i = this.px, t = this.py, i._caching.lastFrame + i.offsetTime <= i.keyframes[0].t ? (e[0] = i.getValueAtTime((i.keyframes[0].t + .01) / r, 0), e[1] = t.getValueAtTime((t.keyframes[0].t + .01) / r, 0), n[0] = i.getValueAtTime(i.keyframes[0].t / r, 0), n[1] = t.getValueAtTime(t.keyframes[0].t / r, 0)) : i._caching.lastFrame + i.offsetTime >= i.keyframes[i.keyframes.length - 1].t ? (e[0] = i.getValueAtTime(i.keyframes[i.keyframes.length - 1].t / r, 0), e[1] = t.getValueAtTime(t.keyframes[t.keyframes.length - 1].t / r, 0), n[0] = i.getValueAtTime((i.keyframes[i.keyframes.length - 1].t - .01) / r, 0), n[1] = t.getValueAtTime((t.keyframes[t.keyframes.length - 1].t - .01) / r, 0)) : (e = [i.pv, t.pv], n[0] = i.getValueAtTime((i._caching.lastFrame + i.offsetTime - .01) / r, i.offsetTime), n[1] = t.getValueAtTime((t._caching.lastFrame + t.offsetTime - .01) / r, t.offsetTime))) : e = n = YHa, this.v.rotate(-Math.atan2(e[1] - n[1], e[0] - n[0]))), this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])), this.frameId = this.elem.globalData.frameId) }, precalculateMatrix: function() { if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) { if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) { if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3 }
                        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4) } }, autoOrient: function() {} }, extendPrototype([DynamicPropertyContainer], cIa), cIa.prototype.addDynamicProperty = function(t) { this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0 }, cIa.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, { getTransformProperty: function(t, e, n) { return new cIa(t, e, n) } }),
            YHa;

        function cIa(t, e, n) { if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(n || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || { k: [0, 0, 0] }, 1, 0, this), e.rx) { if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti)
                    for (var i = e.or.k.length, r = 0; r < i; r += 1) e.or.k[r].to = null, e.or.k[r].ti = null;
                this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0 } else this.r = PropertyFactory.getProp(t, e.r || { k: 0 }, 0, degToRads, this);
            e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || { k: [100, 100, 100] }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = { _mdf: !1, v: 1 }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0) }

        function ShapePath() { this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength) }
        ShapePath.prototype.setPathData = function(t, e) { this.c = t, this.setLength(e); for (var n = 0; n < e;) this.v[n] = pointPool.newElement(), this.o[n] = pointPool.newElement(), this.i[n] = pointPool.newElement(), n += 1 }, ShapePath.prototype.setLength = function(t) { for (; this._maxLength < t;) this.doubleArrayLength();
            this._length = t }, ShapePath.prototype.doubleArrayLength = function() { this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2 }, ShapePath.prototype.setXYAt = function(t, e, n, i, r) { var a; switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), n) {
                case "v":
                    a = this.v; break;
                case "i":
                    a = this.i; break;
                case "o":
                    a = this.o; break;
                default:
                    a = [] }
            a[i] && (!a[i] || r) || (a[i] = pointPool.newElement()), a[i][0] = t, a[i][1] = e }, ShapePath.prototype.setTripleAt = function(t, e, n, i, r, a, s, o) { this.setXYAt(t, e, "v", s, o), this.setXYAt(n, i, "o", s, o), this.setXYAt(r, a, "i", s, o) }, ShapePath.prototype.reverse = function() { var t = new ShapePath;
            t.setPathData(this.c, this._length); var e = this.v,
                n = this.o,
                i = this.i,
                r = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], n[0][0], n[0][1], 0, !1), r = 1); for (var a = this._length - 1, s = this._length, o = r; o < s; o += 1) t.setTripleAt(e[a][0], e[a][1], i[a][0], i[a][1], n[a][0], n[a][1], o, !1), --a; return t }; var ShapePropertyFactory = function() { var r = -999999;

                function t(t, e, n) { var i, r, a, s, o, l, c, u = n.lastIndex,
                        d = this.keyframes; if (t < d[0].t - this.offsetTime) i = d[0].s[0], r = !0, u = 0;
                    else if (t >= d[d.length - 1].t - this.offsetTime) i = (d[d.length - 1].s ? d[d.length - 1].s : d[d.length - 2].e)[0], r = !0;
                    else { for (var h, f, p, m, g, y = u, v = d.length - 1, E = !0; E && (h = d[y], !((f = d[y + 1]).t - this.offsetTime > t));) y < v - 1 ? y += 1 : E = !1;
                        u = y, (r = 1 === h.h) || (m = t >= f.t - this.offsetTime ? 1 : t < h.t - this.offsetTime ? 0 : (h.__fnct ? p = h.__fnct : (p = BezierFactory.getBezierEasing(h.o.x, h.o.y, h.i.x, h.i.y).get, h.__fnct = p), p((t - (h.t - this.offsetTime)) / (f.t - this.offsetTime - (h.t - this.offsetTime)))), g = (f.s || h.e)[0]), i = h.s[0] } for (o = e._length, l = i.i[0].length, n.lastIndex = u, a = 0; a < o; a += 1)
                        for (s = 0; s < l; s += 1) c = r ? i.i[a][s] : i.i[a][s] + (g.i[a][s] - i.i[a][s]) * m, e.i[a][s] = c, c = r ? i.o[a][s] : i.o[a][s] + (g.o[a][s] - i.o[a][s]) * m, e.o[a][s] = c, c = r ? i.v[a][s] : i.v[a][s] + (g.v[a][s] - i.v[a][s]) * m, e.v[a][s] = c }

                function i() { this.paths = this.localShapeCollection }

                function e(t) {! function(t, e) { if (t._length === e._length && t.c === e.c) { for (var n = t._length, i = 0; i < n; i += 1)
                                if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return;
                            return 1 } }(this.v, t) && (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection) }

                function n() { if (this.elem.globalData.frameId !== this.frameId)
                        if (this.effectsSequence.length)
                            if (this.lock) this.setVValue(this.pv);
                            else { var t;
                                this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : (this.data.ks || this.data.pt).k; for (var e = this.effectsSequence.length, n = 0; n < e; n += 1) t = this.effectsSequence[n](t);
                                this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId }
                    else this._mdf = !1 }

                function a(t, e, n) { this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                    e = (3 === n ? e.pt : e.ks).k;
                    this.v = shapePool.clone(e), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [] }

                function s(t) { this.effectsSequence.push(t), this.container.addDynamicProperty(this) }

                function o(t, e, n) { this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = (3 === n ? e.pt : e.ks).k, this.k = !0, this.kf = !0;
                    e = this.keyframes[0].s[0].i.length;
                    this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, e), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = r, this.reset = i, this._caching = { lastFrame: r, lastIndex: 0 }, this.effectsSequence = [function() { var t = this.comp.renderedFrame - this.offsetTime,
                            e = this.keyframes[0].t - this.offsetTime,
                            n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                            i = this._caching.lastFrame; return i !== r && (i < e && t < e || n < i && n < t) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv }.bind(this)] }
                a.prototype.interpolateShape = t, a.prototype.getValue = n, a.prototype.setVValue = e, a.prototype.addEffect = s, o.prototype.getValue = n, o.prototype.interpolateShape = t, o.prototype.setVValue = e, o.prototype.addEffect = s; var l, c = (l = roundCorner, u.prototype = { reset: i, getValue: function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath()) }, convertEllToPath: function() { var t = this.p.v[0],
                            e = this.p.v[1],
                            n = this.s.v[0] / 2,
                            i = this.s.v[1] / 2,
                            r = 3 !== this.d,
                            a = this.v;
                        a.v[0][0] = t, a.v[0][1] = e - i, a.v[1][0] = r ? t + n : t - n, a.v[1][1] = e, a.v[2][0] = t, a.v[2][1] = e + i, a.v[3][0] = r ? t - n : t + n, a.v[3][1] = e, a.i[0][0] = r ? t - n * l : t + n * l, a.i[0][1] = e - i, a.i[1][0] = r ? t + n : t - n, a.i[1][1] = e - i * l, a.i[2][0] = r ? t + n * l : t - n * l, a.i[2][1] = e + i, a.i[3][0] = r ? t - n : t + n, a.i[3][1] = e + i * l, a.o[0][0] = r ? t + n * l : t - n * l, a.o[0][1] = e - i, a.o[1][0] = r ? t + n : t - n, a.o[1][1] = e + i * l, a.o[2][0] = r ? t - n * l : t + n * l, a.o[2][1] = e + i, a.o[3][0] = r ? t - n : t + n, a.o[3][1] = e - i * l } }, extendPrototype([DynamicPropertyContainer], u), u);

                function u(t, e) { this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath()) } var d = (h.prototype = { reset: i, getValue: function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath()) }, convertStarToPath: function() { var t, e, n = 2 * Math.floor(this.pt.v),
                            i = 2 * Math.PI / n,
                            r = !0,
                            a = this.or.v,
                            s = this.ir.v,
                            o = this.os.v,
                            l = this.is.v,
                            c = 2 * Math.PI * a / (2 * n),
                            u = 2 * Math.PI * s / (2 * n),
                            d = -Math.PI / 2;
                        d += this.r.v; for (var h = 3 === this.data.d ? -1 : 1, f = this.v._length = 0; f < n; f += 1) { t = r ? o : l, e = r ? c : u; var p = (y = r ? a : s) * Math.cos(d),
                                m = y * Math.sin(d),
                                g = 0 === p && 0 === m ? 0 : m / Math.sqrt(p * p + m * m),
                                y = 0 === p && 0 === m ? 0 : -p / Math.sqrt(p * p + m * m);
                            p += +this.p.v[0], m += +this.p.v[1], this.v.setTripleAt(p, m, p - g * e * t * h, m - y * e * t * h, p + g * e * t * h, m + y * e * t * h, f, !0), r = !r, d += i * h } }, convertPolygonToPath: function() { var t, e = Math.floor(this.pt.v),
                            n = 2 * Math.PI / e,
                            i = this.or.v,
                            r = this.os.v,
                            a = 2 * Math.PI * i / (4 * e),
                            s = .5 * -Math.PI,
                            o = 3 === this.data.d ? -1 : 1; for (s += this.r.v, t = this.v._length = 0; t < e; t += 1) { var l = i * Math.cos(s),
                                c = i * Math.sin(s),
                                u = 0 === l && 0 === c ? 0 : c / Math.sqrt(l * l + c * c),
                                d = 0 === l && 0 === c ? 0 : -l / Math.sqrt(l * l + c * c);
                            l += +this.p.v[0], c += +this.p.v[1], this.v.setTripleAt(l, c, l - u * a * r * o, c - d * a * r * o, l + u * a * r * o, c + d * a * r * o, t, !0), s += n * o }
                        this.paths.length = 0, this.paths[0] = this.v } }, extendPrototype([DynamicPropertyContainer], h), h);

                function h(t, e) { this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath()) } var f = (p.prototype = { convertRectToPath: function() { var t = this.p.v[0],
                            e = this.p.v[1],
                            n = this.s.v[0] / 2,
                            i = this.s.v[1] / 2,
                            r = bmMin(n, i, this.r.v),
                            a = r * (1 - roundCorner);
                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + n, e - i + r, t + n, e - i + r, t + n, e - i + a, 0, !0), this.v.setTripleAt(t + n, e + i - r, t + n, e + i - a, t + n, e + i - r, 1, !0), 0 !== r ? (this.v.setTripleAt(t + n - r, e + i, t + n - r, e + i, t + n - a, e + i, 2, !0), this.v.setTripleAt(t - n + r, e + i, t - n + a, e + i, t - n + r, e + i, 3, !0), this.v.setTripleAt(t - n, e + i - r, t - n, e + i - r, t - n, e + i - a, 4, !0), this.v.setTripleAt(t - n, e - i + r, t - n, e - i + a, t - n, e - i + r, 5, !0), this.v.setTripleAt(t - n + r, e - i, t - n + r, e - i, t - n + a, e - i, 6, !0), this.v.setTripleAt(t + n - r, e - i, t + n - a, e - i, t + n - r, e - i, 7, !0)) : (this.v.setTripleAt(t - n, e + i, t - n + a, e + i, t - n, e + i, 2), this.v.setTripleAt(t - n, e - i, t - n, e - i + a, t - n, e - i, 3))) : (this.v.setTripleAt(t + n, e - i + r, t + n, e - i + a, t + n, e - i + r, 0, !0), 0 !== r ? (this.v.setTripleAt(t + n - r, e - i, t + n - r, e - i, t + n - a, e - i, 1, !0), this.v.setTripleAt(t - n + r, e - i, t - n + a, e - i, t - n + r, e - i, 2, !0), this.v.setTripleAt(t - n, e - i + r, t - n, e - i + r, t - n, e - i + a, 3, !0), this.v.setTripleAt(t - n, e + i - r, t - n, e + i - a, t - n, e + i - r, 4, !0), this.v.setTripleAt(t - n + r, e + i, t - n + r, e + i, t - n + a, e + i, 5, !0), this.v.setTripleAt(t + n - r, e + i, t + n - a, e + i, t + n - r, e + i, 6, !0), this.v.setTripleAt(t + n, e + i - r, t + n, e + i - r, t + n, e + i - a, 7, !0)) : (this.v.setTripleAt(t - n, e - i, t - n + a, e - i, t - n, e - i, 1, !0), this.v.setTripleAt(t - n, e + i, t - n, e + i - a, t - n, e + i, 2, !0), this.v.setTripleAt(t + n, e + i, t + n - a, e + i, t + n, e + i, 3, !0))) }, getValue: function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath()) }, reset: i }, extendPrototype([DynamicPropertyContainer], p), p);

                function p(t, e) { this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath()) } var m = { getShapeProp: function(t, e, n) { var i; return 3 === n || 4 === n ? i = new((3 === n ? e.pt : e.ks).k.length ? o : a)(t, e, n) : 5 === n ? i = new f(t, e) : 6 === n ? i = new c(t, e) : 7 === n && (i = new d(t, e)), i.k && t.addDynamicProperty(i), i }, getConstructorFunction: function() { return a }, getKeyframedConstructorFunction: function() { return o } }; return m }(),
            ShapeModifiers = (cLa = {}, dLa = {}, cLa.registerModifier = function(t, e) { dLa[t] || (dLa[t] = e) }, cLa.getModifier = function(t, e, n) { return new dLa[t](e, n) }, cLa),
            cLa, dLa;

        function ShapeModifier() {}

        function TrimModifier() {}

        function RoundCornersModifier() {}

        function PuckerAndBloatModifier() {}

        function RepeaterModifier() {}

        function ShapeCollection() { this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength) }

        function DashProperty(t, e, n, i) { this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = n, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i); for (var r, a = e.length || 0, s = 0; s < a; s += 1) r = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = r.k || this.k, this.dataProps[s] = { n: e[s].n, p: r };
            this.k || this.getValue(!0), this._isAnimated = this.k }

        function GradientProperty(t, e, n) { this.data = e, this.c = createTypedArray("uint8c", 4 * e.p); var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
            this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(n), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0) }
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) { var e;
            this.closed || (t.sh.container.addDynamicProperty(t.sh), e = { shape: t.sh, data: t, localShapeCollection: shapeCollectionPool.newShapeCollection() }, this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()) }, ShapeModifier.prototype.init = function(t, e) { this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0) }, ShapeModifier.prototype.processKeys = function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties()) }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) { this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length }, TrimModifier.prototype.addShapeToModifier = function(t) { t.pathsData = [] }, TrimModifier.prototype.calculateShapeEdges = function(t, e, n, i, r) { var a = [];
            e <= 1 ? a.push({ s: t, e: e }) : 1 <= t ? a.push({ s: t - 1, e: e - 1 }) : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 })); for (var s, o, l = [], c = a.length, u = 0; u < c; u += 1)(o = a[u]).e * r < i || o.s * r > i + n || (s = o.s * r <= i ? 0 : (o.s * r - i) / n, o = o.e * r >= i + n ? 1 : (o.e * r - i) / n, l.push([s, o])); return l.length || l.push([0, 0]), l }, TrimModifier.prototype.releasePathsData = function(t) { for (var e = t.length, n = 0; n < e; n += 1) segmentsLengthPool.release(t[n]); return t.length = 0, t }, TrimModifier.prototype.processShapes = function(t) { var e, n, i, r;
            this._mdf || t ? ((e = this.o.v % 360 / 360) < 0 && (e += 1), n = 1 < this.s.v ? 1 + e : this.s.v < 0 ? 0 + e : this.s.v + e, (i = 1 < this.e.v ? 1 + e : this.e.v < 0 ? 0 + e : this.e.v + e) < n && (e = n, n = i, i = e), n = 1e-4 * Math.round(1e4 * n), i = 1e-4 * Math.round(1e4 * i), this.sValue = n, this.eValue = i) : (n = this.sValue, i = this.eValue); var a, s, o, l, c, u = this.shapes.length,
                d = 0; if (i === n)
                for (m = 0; m < u; m += 1) this.shapes[m].localShapeCollection.releaseShapes(), this.shapes[m].shape._mdf = !0, this.shapes[m].shape.paths = this.shapes[m].localShapeCollection, this._mdf && (this.shapes[m].pathsData.length = 0);
            else if (1 === i && 0 === n || 0 === i && 1 === n) { if (this._mdf)
                    for (m = 0; m < u; m += 1) this.shapes[m].pathsData.length = 0, this.shapes[m].shape._mdf = !0 } else { for (var h, f, p = [], m = 0; m < u; m += 1)
                    if ((h = this.shapes[m]).shape._mdf || this._mdf || t || 2 === this.m) { if (s = (r = h.shape.paths)._length, c = 0, !h.shape._mdf && h.pathsData.length) c = h.totalShapeLength;
                        else { for (o = this.releasePathsData(h.pathsData), a = 0; a < s; a += 1) l = bez.getSegmentsLength(r.shapes[a]), o.push(l), c += l.totalLength;
                            h.totalShapeLength = c, h.pathsData = o }
                        d += c, h.shape._mdf = !0 } else h.shape.paths = h.localShapeCollection;
                var g, y = n,
                    v = i,
                    E = 0; for (m = u - 1; 0 <= m; --m)
                    if ((h = this.shapes[m]).shape._mdf) { for ((f = h.localShapeCollection).releaseShapes(), 2 === this.m && 1 < u ? (g = this.calculateShapeEdges(n, i, h.totalShapeLength, E, d), E += h.totalShapeLength) : g = [
                                [y, v]
                            ], s = g.length, a = 0; a < s; a += 1) { y = g[a][0], v = g[a][1], p.length = 0, v <= 1 ? p.push({ s: h.totalShapeLength * y, e: h.totalShapeLength * v }) : 1 <= y ? p.push({ s: h.totalShapeLength * (y - 1), e: h.totalShapeLength * (v - 1) }) : (p.push({ s: h.totalShapeLength * y, e: h.totalShapeLength }), p.push({ s: 0, e: h.totalShapeLength * (v - 1) })); var b, T = this.addShapes(h, p[0]);
                            p[0].s !== p[0].e && (1 < p.length && (T = h.shape.paths.shapes[h.shape.paths._length - 1].c ? (b = T.pop(), this.addPaths(T, f), this.addShapes(h, p[1], b)) : (this.addPaths(T, f), this.addShapes(h, p[1]))), this.addPaths(T, f)) }
                        h.shape.paths = f } } }, TrimModifier.prototype.addPaths = function(t, e) { for (var n = t.length, i = 0; i < n; i += 1) e.addShape(t[i]) }, TrimModifier.prototype.addSegment = function(t, e, n, i, r, a, s) { r.setXYAt(e[0], e[1], "o", a), r.setXYAt(n[0], n[1], "i", a + 1), s && r.setXYAt(t[0], t[1], "v", a), r.setXYAt(i[0], i[1], "v", a + 1) }, TrimModifier.prototype.addSegmentFromArray = function(t, e, n, i) { e.setXYAt(t[1], t[5], "o", n), e.setXYAt(t[2], t[6], "i", n + 1), i && e.setXYAt(t[0], t[4], "v", n), e.setXYAt(t[3], t[7], "v", n + 1) }, TrimModifier.prototype.addShapes = function(t, e, n) { var i, r, a, s, o, l, c, u, d = t.pathsData,
                h = t.shape.paths.shapes,
                f = t.shape.paths._length,
                p = 0,
                m = [],
                g = !0,
                y = n ? (s = n._length, n._length) : (n = shapePool.newElement(), s = 0); for (m.push(n), i = 0; i < f; i += 1) { for (o = d[i].lengths, n.c = h[i].c, a = h[i].c ? o.length : o.length + 1, r = 1; r < a; r += 1)
                    if (p + (u = o[r - 1]).addedLength < e.s) p += u.addedLength, n.c = !1;
                    else { if (p > e.e) { n.c = !1; break }
                        e.s <= p && e.e >= p + u.addedLength ? (this.addSegment(h[i].v[r - 1], h[i].o[r - 1], h[i].i[r], h[i].v[r], n, s, g), g = !1) : (l = bez.getNewSegment(h[i].v[r - 1], h[i].v[r], h[i].o[r - 1], h[i].i[r], (e.s - p) / u.addedLength, (e.e - p) / u.addedLength, o[r - 1]), this.addSegmentFromArray(l, n, s, g), g = !1, n.c = !1), p += u.addedLength, s += 1 }
                if (h[i].c && o.length && (u = o[r - 1], p <= e.e ? (c = o[r - 1].addedLength, e.s <= p && e.e >= p + c ? (this.addSegment(h[i].v[r - 1], h[i].o[r - 1], h[i].i[0], h[i].v[0], n, s, g), g = !1) : (l = bez.getNewSegment(h[i].v[r - 1], h[i].v[0], h[i].o[r - 1], h[i].i[0], (e.s - p) / c, (e.e - p) / c, o[r - 1]), this.addSegmentFromArray(l, n, s, g), g = !1, n.c = !1)) : n.c = !1, p += u.addedLength, s += 1), n._length && (n.setXYAt(n.v[y][0], n.v[y][1], "i", y), n.setXYAt(n.v[n._length - 1][0], n.v[n._length - 1][1], "o", n._length - 1)), p > e.e) break;
                i < f - 1 && (n = shapePool.newElement(), g = !0, m.push(n), s = 0) } return m }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) { this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length }, RoundCornersModifier.prototype.processPath = function(t, e) { var n = shapePool.newElement();
            n.c = t.c; for (var i, r, a, s, o, l, c, u, d, h, f, p, m = t._length, g = 0, y = 0; y < m; y += 1) i = t.v[y], a = t.o[y], r = t.i[y], i[0] === a[0] && i[1] === a[1] && i[0] === r[0] && i[1] === r[1] ? 0 !== y && y !== m - 1 || t.c ? (s = 0 === y ? t.v[m - 1] : t.v[y - 1], l = (o = Math.sqrt(Math.pow(i[0] - s[0], 2) + Math.pow(i[1] - s[1], 2))) ? Math.min(o / 2, e) / o : 0, c = f = i[0] + (s[0] - i[0]) * l, u = p = i[1] - (i[1] - s[1]) * l, d = c - (c - i[0]) * roundCorner, h = u - (u - i[1]) * roundCorner, n.setTripleAt(c, u, d, h, f, p, g), g += 1, s = y === m - 1 ? t.v[0] : t.v[y + 1], l = (o = Math.sqrt(Math.pow(i[0] - s[0], 2) + Math.pow(i[1] - s[1], 2))) ? Math.min(o / 2, e) / o : 0, c = d = i[0] + (s[0] - i[0]) * l, u = h = i[1] + (s[1] - i[1]) * l, f = c - (c - i[0]) * roundCorner, p = u - (u - i[1]) * roundCorner, n.setTripleAt(c, u, d, h, f, p, g)) : n.setTripleAt(i[0], i[1], a[0], a[1], r[0], r[1], g) : n.setTripleAt(t.v[y][0], t.v[y][1], t.o[y][0], t.o[y][1], t.i[y][0], t.i[y][1], g), g += 1; return n }, RoundCornersModifier.prototype.processShapes = function(t) { var e, n, i, r = this.shapes.length,
                a = this.rd.v; if (0 !== a)
                for (var s, o, l = 0; l < r; l += 1) { if (o = (s = this.shapes[l]).localShapeCollection, s.shape._mdf || this._mdf || t)
                        for (o.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, i = s.shape.paths._length, n = 0; n < i; n += 1) o.addShape(this.processPath(e[n], a));
                    s.shape.paths = s.localShapeCollection }
            this.dynamicProperties.length || (this._mdf = !1) }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) { this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length }, PuckerAndBloatModifier.prototype.processPath = function(t, e) { for (var n = e / 100, i = [0, 0], r = t._length, a = 0, a = 0; a < r; a += 1) i[0] += t.v[a][0], i[1] += t.v[a][1];
            i[0] /= r, i[1] /= r; var s, o, l, c, u, d, h = shapePool.newElement(); for (h.c = t.c, a = 0; a < r; a += 1) s = t.v[a][0] + (i[0] - t.v[a][0]) * n, o = t.v[a][1] + (i[1] - t.v[a][1]) * n, l = t.o[a][0] + (i[0] - t.o[a][0]) * -n, c = t.o[a][1] + (i[1] - t.o[a][1]) * -n, u = t.i[a][0] + (i[0] - t.i[a][0]) * -n, d = t.i[a][1] + (i[1] - t.i[a][1]) * -n, h.setTripleAt(s, o, l, c, u, d, a); return h }, PuckerAndBloatModifier.prototype.processShapes = function(t) { var e, n, i, r = this.shapes.length,
                a = this.amount.v; if (0 !== a)
                for (var s, o, l = 0; l < r; l += 1) { if (o = (s = this.shapes[l]).localShapeCollection, s.shape._mdf || this._mdf || t)
                        for (o.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, i = s.shape.paths._length, n = 0; n < i; n += 1) o.addShape(this.processPath(e[n], a));
                    s.shape.paths = s.localShapeCollection }
            this.dynamicProperties.length || (this._mdf = !1) }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) { this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix }, RepeaterModifier.prototype.applyTransforms = function(t, e, n, i, r, a) { var s = a ? -1 : 1,
                o = i.s.v[0] + (1 - i.s.v[0]) * (1 - r),
                l = i.s.v[1] + (1 - i.s.v[1]) * (1 - r);
            t.translate(i.p.v[0] * s * r, i.p.v[1] * s * r, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * s * r), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), n.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), n.scale(a ? 1 / o : o, a ? 1 / l : l), n.translate(i.a.v[0], i.a.v[1], i.a.v[2]) }, RepeaterModifier.prototype.init = function(t, e, n, i) { for (this.elem = t, this.arr = e, this.pos = n, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[n]); 0 < n;) --n, this._elements.unshift(e[n]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0) }, RepeaterModifier.prototype.resetElements = function(t) { for (var e = t.length, n = 0; n < e; n += 1) t[n]._processed = !1, "gr" === t[n].ty && this.resetElements(t[n].it) }, RepeaterModifier.prototype.cloneElements = function(t) { t = JSON.parse(JSON.stringify(t)); return this.resetElements(t), t }, RepeaterModifier.prototype.changeGroupRender = function(t, e) { for (var n = t.length, i = 0; i < n; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e) }, RepeaterModifier.prototype.processShapes = function(t) { var e, n, i, r, a, s = !1; if (this._mdf || t) { var o = Math.ceil(this.c.v); if (this._groups.length < o) { for (; this._groups.length < o;) { var l = { it: this.cloneElements(this._elements), ty: "gr" };
                        l.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1 }
                    this.elem.reloadShapes(), s = !0 } for (i = a = 0; i <= this._groups.length - 1; i += 1) { var c = a < o;
                    this._groups[i]._render = c, this.changeGroupRender(this._groups[i].it, c), c || (0 !== (c = (c = this.elemsData[i].it)[c.length - 1]).transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1), a += 1 }
                this._currentCopies = o; var u = this.o.v,
                    t = u % 1,
                    d = 0 < u ? Math.floor(u) : Math.ceil(u),
                    h = this.pMatrix.props,
                    f = this.rMatrix.props,
                    p = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset(); var m, g, y = 0; if (0 < u) { for (; y < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), y += 1;
                    t && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, t, !1), y += t) } else if (u < 0) { for (; d < y;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), --y;
                    t && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -t, !0), y -= t) } for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, r = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) { if (g = (n = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== y) { for ((0 !== i && 1 === r || i !== this._currentCopies - 1 && -1 === r) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), this.matrix.transform(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9], h[10], h[11], h[12], h[13], h[14], h[15]), m = 0; m < g; m += 1) n[m] = this.matrix.props[m];
                        this.matrix.reset() } else
                        for (this.matrix.reset(), m = 0; m < g; m += 1) n[m] = this.matrix.props[m];
                    y += 1, --a, i += r } } else
                for (a = this._currentCopies, i = 0, r = 1; a;) n = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, --a, i += r; return s }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) { this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1 }, ShapeCollection.prototype.releaseShapes = function() { for (var t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
            this._length = 0 }, DashProperty.prototype.getValue = function(t) { if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) { var e = 0,
                    n = this.dataProps.length; for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < n; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v } }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) { for (var n = 0, i = this.o.length / 2; n < i;) { if (.01 < Math.abs(t[4 * n] - t[4 * e + 2 * n])) return !1;
                n += 1 } return !0 }, GradientProperty.prototype.checkCollapsable = function() { if (this.o.length / 2 != this.c.length / 4) return !1; if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e;) { if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                    t += 1 } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0 }, GradientProperty.prototype.getValue = function(t) { if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) { for (var e, n, i = 4 * this.data.p, r = 0; r < i; r += 1) e = r % 4 == 0 ? 100 : 255, n = Math.round(this.prop.v[r] * e), this.c[r] !== n && (this.c[r] = n, this._cmdf = !t); if (this.o.length)
                    for (i = this.prop.v.length, r = 4 * this.data.p; r < i; r += 1) e = r % 2 == 0 ? 100 : 1, n = r % 2 == 0 ? Math.round(100 * this.prop.v[r]) : this.prop.v[r], this.o[r - 4 * this.data.p] !== n && (this.o[r - 4 * this.data.p] = n, this._omdf = !t);
                this._mdf = !t } }, extendPrototype([DynamicPropertyContainer], GradientProperty); var buildShapeString = function(t, e, n, i) { if (0 === e) return ""; for (var r = t.o, a = t.i, s = t.v, o = " M" + i.applyToPointStringified(s[0][0], s[0][1]), l = 1; l < e; l += 1) o += " C" + i.applyToPointStringified(r[l - 1][0], r[l - 1][1]) + " " + i.applyToPointStringified(a[l][0], a[l][1]) + " " + i.applyToPointStringified(s[l][0], s[l][1]); return n && e && (o += " C" + i.applyToPointStringified(r[l - 1][0], r[l - 1][1]) + " " + i.applyToPointStringified(a[0][0], a[0][1]) + " " + i.applyToPointStringified(s[0][0], s[0][1]), o += "z"), o },
            audioControllerFactory = (jPa.prototype = { addAudio: function(t) { this.audios.push(t) }, pause: function() { for (var t = this.audios.length, e = 0; e < t; e += 1) this.audios[e].pause() }, resume: function() { for (var t = this.audios.length, e = 0; e < t; e += 1) this.audios[e].resume() }, setRate: function(t) { for (var e = this.audios.length, n = 0; n < e; n += 1) this.audios[n].setRate(t) }, createAudio: function(t) { return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({ src: [t] }) : { isPlaying: !1, play: function() { this.isPlaying = !0 }, seek: function() { this.isPlaying = !1 }, playing: function() {}, rate: function() {}, setVolume: function() {} } }, setAudioFactory: function(t) { this.audioFactory = t }, setVolume: function(t) { this._volume = t, this._updateVolume() }, mute: function() { this._isMuted = !0, this._updateVolume() }, unmute: function() { this._isMuted = !1, this._updateVolume() }, getVolume: function() { return this._volume }, _updateVolume: function() { for (var t = this.audios.length, e = 0; e < t; e += 1) this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1)) } }, function() { return new jPa });

        function jPa(t) { this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1 } var ImagePreloader = (yPa = function() { var t = createTag("canvas");
                t.width = 1, t.height = 1; var e = t.getContext("2d"); return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t }(), OPa.prototype = { loadAssets: function(t, e) { this.imagesLoadedCb = e; for (var n = t.length, i = 0; i < n; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i])))) }, setAssetsPath: function(t) { this.assetsPath = t || "" }, setPath: function(t) { this.path = t || "" }, loadedImages: function() { return this.totalImages === this.loadedAssets }, loadedFootages: function() { return this.totalFootages === this.loadedFootagesCount }, destroy: function() { this.imagesLoadedCb = null, this.images.length = 0 }, getAsset: function(t) { for (var e = 0, n = this.images.length; e < n;) { if (this.images[e].assetData === t) return this.images[e].img;
                        e += 1 } return null }, createImgData: function(t) { var e = BPa(t, this.assetsPath, this.path),
                        n = createTag("img");
                    n.crossOrigin = "anonymous", n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() { i.img = yPa, this._imageLoaded() }.bind(this), !1), n.src = e; var i = { img: n, assetData: t }; return i }, createImageData: function(t) { var e = BPa(t, this.assetsPath, this.path),
                        n = createNS("image");
                    isSafari ? this.testImageLoaded(n) : n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() { i.img = yPa, this._imageLoaded() }.bind(this), !1), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this._elementHelper.append ? this._elementHelper.append(n) : this._elementHelper.appendChild(n); var i = { img: n, assetData: t }; return i }, imageLoaded: zPa, footageLoaded: APa, setCacheType: function(t, e) { "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this) } }, OPa),
            yPa;

        function zPa() { this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null) }

        function APa() { this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null) }

        function BPa(t, e, n) { var i, r = ""; return t.e ? r = t.p : e ? (-1 !== (i = t.p).indexOf("images/") && (i = i.split("/")[1]), r = e + i) : (r = n, r += t.u || "", r += t.p), r }

        function OPa() { this._imageLoaded = zPa.bind(this), this._footageLoaded = APa.bind(this), this.testImageLoaded = function(t) { var e = 0,
                    n = setInterval(function() {
                        (t.getBBox().width || 500 < e) && (this._imageLoaded(), clearInterval(n)), e += 1 }.bind(this), 50) }.bind(this), this.createFootageData = function(t) { var e = { assetData: t },
                    t = BPa(t, this.assetsPath, this.path); return assetLoader.load(t, function(t) { e.img = t, this._footageLoaded() }.bind(this), function() { e.img = {}, this._footageLoaded() }.bind(this)), e }.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [] } var featureSupport = (vQa = { maskType: !0 }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (vQa.maskType = !1), vQa),
            vQa, filtersFactory = (wQa = {}, wQa.createFilter = function(t, e) { var n = createNS("filter");
                n.setAttribute("id", t), !0 !== e && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")); return n }, wQa.createAlphaToLuminanceFilter = function() { var t = createNS("feColorMatrix"); return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t }, wQa),
            wQa, assetLoader = { load: function(t, e, n) { var i, r = new XMLHttpRequest; try { r.responseType = "json" } catch (t) {}
                    r.onreadystatechange = function() { if (4 === r.readyState)
                            if (200 === r.status) i = DQa(r), e(i);
                            else try { i = DQa(r), e(i) } catch (t) { n && n(t) } }, r.open("GET", t, !0), r.send() } };

        function DQa(t) { return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null }

        function TextAnimatorProperty(t, e, n) { this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = n, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(n) }

        function TextAnimatorDataProperty(t, e, n) { var i = { propType: !1 },
                r = PropertyFactory.getProp,
                a = e.a;
            this.a = { r: a.r ? r(t, a.r, 0, degToRads, n) : i, rx: a.rx ? r(t, a.rx, 0, degToRads, n) : i, ry: a.ry ? r(t, a.ry, 0, degToRads, n) : i, sk: a.sk ? r(t, a.sk, 0, degToRads, n) : i, sa: a.sa ? r(t, a.sa, 0, degToRads, n) : i, s: a.s ? r(t, a.s, 1, .01, n) : i, a: a.a ? r(t, a.a, 1, 0, n) : i, o: a.o ? r(t, a.o, 0, .01, n) : i, p: a.p ? r(t, a.p, 1, 0, n) : i, sw: a.sw ? r(t, a.sw, 0, 0, n) : i, sc: a.sc ? r(t, a.sc, 1, 0, n) : i, fc: a.fc ? r(t, a.fc, 1, 0, n) : i, fh: a.fh ? r(t, a.fh, 0, 0, n) : i, fs: a.fs ? r(t, a.fs, 0, .01, n) : i, fb: a.fb ? r(t, a.fb, 0, .01, n) : i, t: a.t ? r(t, a.t, 0, 0, n) : i }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, n), this.s.t = e.s.t }

        function LetterProps(t, e, n, i, r, a) { this.o = t, this.sw = e, this.sc = n, this.fc = i, this.m = r, this.p = a, this._mdf = { o: !0, sw: !!e, sc: !!n, fc: !!i, m: !0, p: !0 } }

        function TextProperty(t, e) { this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: !1, strokeColorAnim: !1, strokeWidthAnim: !1, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: !1 }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData) }
        TextAnimatorProperty.prototype.searchProperties = function() { for (var t, e = this._textData.a.length, n = PropertyFactory.getProp, i = 0; i < e; i += 1) t = this._textData.a[i], this._animatorsData[i] = new TextAnimatorDataProperty(this._elem, t, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = { f: n(this._elem, this._textData.p.f, 0, 0, this), l: n(this._elem, this._textData.p.l, 0, 0, this), r: this._textData.p.r, m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this) }, TextAnimatorProperty.prototype.getMeasures = function(t, e) { if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) { this._isFirstFrame = !1; var n, i, r, a, s, o, l, c, u, d, h, f, p, m, g, y, v, E = this._moreOptions.alignment.v,
                    b = this._animatorsData,
                    T = this._textData,
                    I = this.mHelper,
                    _ = this._renderType,
                    A = this.renderedLetters.length,
                    S = t.l; if (this._hasMaskedPath) { if (v = this._pathData.m, !this._pathData.n || this._pathData._mdf) { var x, R = v.v; for (this._pathData.r && (R = R.reverse()), a = { tLength: 0, segments: [] }, r = R._length - 1, at = g = 0; at < r; at += 1) x = bez.buildBezierData(R.v[at], R.v[at + 1], [R.o[at][0] - R.v[at][0], R.o[at][1] - R.v[at][1]], [R.i[at + 1][0] - R.v[at + 1][0], R.i[at + 1][1] - R.v[at + 1][1]]), a.tLength += x.segmentLength, a.segments.push(x), g += x.segmentLength;
                        at = r, v.v.c && (x = bez.buildBezierData(R.v[at], R.v[0], [R.o[at][0] - R.v[at][0], R.o[at][1] - R.v[at][1]], [R.i[0][0] - R.v[0][0], R.i[0][1] - R.v[0][1]]), a.tLength += x.segmentLength, a.segments.push(x), g += x.segmentLength), this._pathData.pi = a } if (a = this._pathData.pi, s = this._pathData.f.v, u = 1, c = !(l = d = 0), p = a.segments, s < 0 && v.v.c)
                        for (a.tLength < Math.abs(s) && (s = -Math.abs(s) % a.tLength), u = (f = p[d = p.length - 1].points).length - 1; s < 0;) s += f[u].partialLength, --u < 0 && (u = (f = p[--d].points).length - 1);
                    h = (f = p[d].points)[u - 1], m = (o = f[u]).partialLength }
                r = S.length, i = n = 0; var P, C, O, M, D, w, N, L, k, F, V, G, B, U, z, H, j = 1.2 * t.finalSize * .714,
                    X = !0,
                    W = b.length,
                    Y = -1,
                    q = s,
                    Q = d,
                    K = u,
                    $ = -1,
                    Z = "",
                    J = this.defaultPropsArray; if (2 === t.j || 1 === t.j) { for (var tt = 0, et = 0, nt = 2 === t.j ? -.5 : -1, it = 0, rt = !0, at = 0; at < r; at += 1)
                        if (S[at].n) { for (tt && (tt += et); it < at;) S[it].animatorJustifyOffset = tt, it += 1;
                            rt = !(tt = 0) } else { for (ot = 0; ot < W; ot += 1)(P = b[ot].a).t.propType && (rt && 2 === t.j && (et += P.t.v * nt), (O = b[ot].s.getMult(S[at].anIndexes[ot], T.a[ot].s.totalChars)).length ? tt += P.t.v * O[0] * nt : tt += P.t.v * O * nt);
                            rt = !1 }
                    for (tt && (tt += et); it < at;) S[it].animatorJustifyOffset = tt, it += 1 } for (at = 0; at < r; at += 1) { if (I.reset(), N = 1, S[at].n) n = 0, i += t.yOffset, i += X ? 1 : 0, s = q, X = !1, this._hasMaskedPath && (u = K, h = (f = p[d = Q].points)[u - 1], m = (o = f[u]).partialLength, l = 0), z = G = U = Z = "", J = this.defaultPropsArray;
                    else { if (this._hasMaskedPath) { if ($ !== S[at].line) { switch (t.j) {
                                    case 1:
                                        s += g - t.lineWidths[S[at].line]; break;
                                    case 2:
                                        s += (g - t.lineWidths[S[at].line]) / 2 }
                                $ = S[at].line }
                            Y !== S[at].ind && (S[Y] && (s += S[Y].extra), s += S[at].an / 2, Y = S[at].ind), s += E[0] * S[at].an * .005; for (var st = 0, ot = 0; ot < W; ot += 1)(P = b[ot].a).p.propType && ((O = b[ot].s.getMult(S[at].anIndexes[ot], T.a[ot].s.totalChars)).length ? st += P.p.v[0] * O[0] : st += P.p.v[0] * O), P.a.propType && ((O = b[ot].s.getMult(S[at].anIndexes[ot], T.a[ot].s.totalChars)).length ? st += P.a.v[0] * O[0] : st += P.a.v[0] * O); for (c = !0; c;) s + st <= l + m || !f ? (y = (s + st - l) / o.partialLength, D = h.point[0] + (o.point[0] - h.point[0]) * y, w = h.point[1] + (o.point[1] - h.point[1]) * y, I.translate(-E[0] * S[at].an * .005, -E[1] * j * .01), c = !1) : f && (l += o.partialLength, (u += 1) >= f.length && (u = 0, f = p[d += 1] ? p[d].points : v.v.c ? p[d = u = 0].points : (l -= o.partialLength, null)), f && (h = o, m = (o = f[u]).partialLength));
                            M = S[at].an / 2 - S[at].add, I.translate(-M, 0, 0) } else M = S[at].an / 2 - S[at].add, I.translate(-M, 0, 0), I.translate(-E[0] * S[at].an * .005, -E[1] * j * .01, 0); for (ot = 0; ot < W; ot += 1)(P = b[ot].a).t.propType && (O = b[ot].s.getMult(S[at].anIndexes[ot], T.a[ot].s.totalChars), 0 === n && 0 === t.j || (this._hasMaskedPath ? O.length ? s += P.t.v * O[0] : s += P.t.v * O : O.length ? n += P.t.v * O[0] : n += P.t.v * O)); for (t.strokeWidthAnim && (k = t.sw || 0), t.strokeColorAnim && (L = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (F = [t.fc[0], t.fc[1], t.fc[2]]), ot = 0; ot < W; ot += 1)(P = b[ot].a).a.propType && ((O = b[ot].s.getMult(S[at].anIndexes[ot], T.a[ot].s.totalChars)).length ? I.translate(-P.a.v[0] * O[0], -P.a.v[1] * O[1], P.a.v[2] * O[2]) : I.translate(-P.a.v[0] * O, -P.a.v[1] * O, P.a.v[2] * O)); for (ot = 0; ot < W; ot += 1)(P = b[ot].a).s.propType && ((O = b[ot].s.getMult(S[at].anIndexes[ot], T.a[ot].s.totalChars)).length ? I.scale(1 + (P.s.v[0] - 1) * O[0], 1 + (P.s.v[1] - 1) * O[1], 1) : I.scale(1 + (P.s.v[0] - 1) * O, 1 + (P.s.v[1] - 1) * O, 1)); for (ot = 0; ot < W; ot += 1) { if (P = b[ot].a, O = b[ot].s.getMult(S[at].anIndexes[ot], T.a[ot].s.totalChars), P.sk.propType && (O.length ? I.skewFromAxis(-P.sk.v * O[0], P.sa.v * O[1]) : I.skewFromAxis(-P.sk.v * O, P.sa.v * O)), P.r.propType && (O.length ? I.rotateZ(-P.r.v * O[2]) : I.rotateZ(-P.r.v * O)), P.ry.propType && (O.length ? I.rotateY(P.ry.v * O[1]) : I.rotateY(P.ry.v * O)), P.rx.propType && (O.length ? I.rotateX(P.rx.v * O[0]) : I.rotateX(P.rx.v * O)), P.o.propType && (O.length ? N += (P.o.v * O[0] - N) * O[0] : N += (P.o.v * O - N) * O), t.strokeWidthAnim && P.sw.propType && (O.length ? k += P.sw.v * O[0] : k += P.sw.v * O), t.strokeColorAnim && P.sc.propType)
                                for (V = 0; V < 3; V += 1) O.length ? L[V] += (P.sc.v[V] - L[V]) * O[0] : L[V] += (P.sc.v[V] - L[V]) * O; if (t.fillColorAnim && t.fc) { if (P.fc.propType)
                                    for (V = 0; V < 3; V += 1) O.length ? F[V] += (P.fc.v[V] - F[V]) * O[0] : F[V] += (P.fc.v[V] - F[V]) * O;
                                P.fh.propType && (F = O.length ? addHueToRGB(F, P.fh.v * O[0]) : addHueToRGB(F, P.fh.v * O)), P.fs.propType && (F = O.length ? addSaturationToRGB(F, P.fs.v * O[0]) : addSaturationToRGB(F, P.fs.v * O)), P.fb.propType && (F = O.length ? addBrightnessToRGB(F, P.fb.v * O[0]) : addBrightnessToRGB(F, P.fb.v * O)) } } for (ot = 0; ot < W; ot += 1)(P = b[ot].a).p.propType && (O = b[ot].s.getMult(S[at].anIndexes[ot], T.a[ot].s.totalChars), this._hasMaskedPath ? O.length ? I.translate(0, P.p.v[1] * O[0], -P.p.v[2] * O[1]) : I.translate(0, P.p.v[1] * O, -P.p.v[2] * O) : O.length ? I.translate(P.p.v[0] * O[0], P.p.v[1] * O[1], -P.p.v[2] * O[2]) : I.translate(P.p.v[0] * O, P.p.v[1] * O, -P.p.v[2] * O)); if (t.strokeWidthAnim && (G = k < 0 ? 0 : k), t.strokeColorAnim && (B = "rgb(" + Math.round(255 * L[0]) + "," + Math.round(255 * L[1]) + "," + Math.round(255 * L[2]) + ")"), t.fillColorAnim && t.fc && (U = "rgb(" + Math.round(255 * F[0]) + "," + Math.round(255 * F[1]) + "," + Math.round(255 * F[2]) + ")"), this._hasMaskedPath) I.translate(0, -t.ls), I.translate(0, E[1] * j * .01 + i, 0), T.p.p && (H = (o.point[1] - h.point[1]) / (o.point[0] - h.point[0]), H = 180 * Math.atan(H) / Math.PI, o.point[0] < h.point[0] && (H += 180), I.rotate(-H * Math.PI / 180)), I.translate(D, w, 0), s -= E[0] * S[at].an * .005, S[at + 1] && Y !== S[at + 1].ind && (s += S[at].an / 2, s += .001 * t.tr * t.finalSize);
                        else { switch (I.translate(n, i, 0), t.ps && I.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                case 1:
                                    I.translate(S[at].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[S[at].line]), 0, 0); break;
                                case 2:
                                    I.translate(S[at].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[S[at].line]) / 2, 0, 0) }
                            I.translate(0, -t.ls), I.translate(M, 0, 0), I.translate(E[0] * S[at].an * .005, E[1] * j * .01, 0), n += S[at].l + .001 * t.tr * t.finalSize } "html" === _ ? Z = I.toCSS() : "svg" === _ ? Z = I.to2dCSS() : J = [I.props[0], I.props[1], I.props[2], I.props[3], I.props[4], I.props[5], I.props[6], I.props[7], I.props[8], I.props[9], I.props[10], I.props[11], I.props[12], I.props[13], I.props[14], I.props[15]], z = N }
                    A <= at ? (C = new LetterProps(z, G, B, U, Z, J), this.renderedLetters.push(C), A += 1, this.lettersChangedFlag = !0) : (C = this.renderedLetters[at], this.lettersChangedFlag = C.update(z, G, B, U, Z, J) || this.lettersChangedFlag) } } }, TextAnimatorProperty.prototype.getValue = function() { this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties()) }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, n, i, r, a) { this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1; var s = this._mdf.p = !1; return this.o !== t && (this.o = t, s = this._mdf.o = !0), this.sw !== e && (this.sw = e, s = this._mdf.sw = !0), this.sc !== n && (this.sc = n, s = this._mdf.sc = !0), this.fc !== i && (this.fc = i, s = this._mdf.fc = !0), this.m !== r && (this.m = r, s = this._mdf.m = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, s = this._mdf.p = !0), s }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) { for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t }, TextProperty.prototype.setCurrentData = function(t) { t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0 }, TextProperty.prototype.searchProperty = function() { return this.searchKeyframes() }, TextProperty.prototype.searchKeyframes = function() { return this.kf = 1 < this.data.d.k.length, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf }, TextProperty.prototype.addEffect = function(t) { this.effectsSequence.push(t), this.elem.addDynamicProperty(this) }, TextProperty.prototype.getValue = function(t) { if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) { this.currentData.t = this.data.d.k[this.keysIndex].s.t; var e = this.currentData,
                    n = this.keysIndex; if (this.lock) this.setCurrentData(this.currentData);
                else { this.lock = !0, this._mdf = !1; for (var i = this.effectsSequence.length, r = t || this.data.d.k[this.keysIndex].s, a = 0; a < i; a += 1) r = n !== this.keysIndex ? this.effectsSequence[a](r, r.t) : this.effectsSequence[a](this.currentData, r.t);
                    e !== r && this.setCurrentData(r), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId } } }, TextProperty.prototype.getKeyframeValue = function() { for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, n = 0, i = t.length; n <= i - 1 && !(n === i - 1 || t[n + 1].t > e);) n += 1; return this.keysIndex !== n && (this.keysIndex = n), this.data.d.k[this.keysIndex].s }, TextProperty.prototype.buildFinalText = function(t) { for (var e, n, i = [], r = 0, a = t.length, s = !1; r < a;) e = t.charCodeAt(r), FontManager.isCombinedCharacter(e) ? i[i.length - 1] += t.charAt(r) : 55296 <= e && e <= 56319 ? 56320 <= (n = t.charCodeAt(r + 1)) && n <= 57343 ? (s || FontManager.isModifier(e, n) ? (i[i.length - 1] += t.substr(r, 2), s = !1) : i.push(t.substr(r, 2)), r += 1) : i.push(t.charAt(r)) : 56319 < e ? (n = t.charCodeAt(r + 1), FontManager.isZeroWidthJoiner(e, n) ? (s = !0, i[i.length - 1] += t.substr(r, 2), r += 1) : i.push(t.charAt(r))) : FontManager.isZeroWidthJoiner(e) ? (i[i.length - 1] += t.charAt(r), s = !0) : i.push(t.charAt(r)), r += 1; return i }, TextProperty.prototype.completeTextData = function(t) { t.__complete = !0; var e, n, i, r, a = this.elem.globalData.fontManager,
                s = this.data,
                o = [],
                l = 0,
                c = s.m.g,
                u = 0,
                d = 0,
                h = 0,
                f = [],
                p = 0,
                m = 0,
                g = a.getFontByName(t.f),
                y = 0,
                v = getFontProperties(g);
            t.fWeight = v.weight, t.fStyle = v.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), e = t.finalText.length, t.finalLineHeight = t.lh; var E, b = t.tr / 1e3 * t.finalSize; if (t.sz)
                for (var T, I, _ = !0, A = t.sz[0], S = t.sz[1]; _;) { p = T = 0, e = (I = this.buildFinalText(t.t)).length, b = t.tr / 1e3 * t.finalSize; for (var x = -1, R = 0; R < e; R += 1) E = I[R].charCodeAt(0), n = !1, " " === I[R] ? x = R : 13 !== E && 3 !== E || (n = !(p = 0), T += t.finalLineHeight || 1.2 * t.finalSize), A < p + (y = a.chars ? (r = a.getCharData(I[R], g.fStyle, g.fFamily), n ? 0 : r.w * t.finalSize / 100) : a.measureText(I[R], t.f, t.finalSize)) && " " !== I[R] ? (-1 === x ? e += 1 : R = x, T += t.finalLineHeight || 1.2 * t.finalSize, I.splice(R, x === R ? 1 : 0, "\r"), x = -1, p = 0) : (p += y, p += b);
                    T += g.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && S < T ? (--t.finalSize, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = I, e = t.finalText.length, _ = !1) }
            p = -b; var P, C = y = 0; for (R = 0; R < e; R += 1)
                if (n = !1, 13 === (E = (P = t.finalText[R]).charCodeAt(0)) || 3 === E ? (C = 0, f.push(p), m = m < p ? p : m, p = -2 * b, n = !(i = ""), h += 1) : i = P, y = a.chars ? (r = a.getCharData(P, g.fStyle, a.getFontByName(t.f).fFamily), n ? 0 : r.w * t.finalSize / 100) : a.measureText(i, t.f, t.finalSize), " " === P ? C += y + b : (p += y + b + C, C = 0), o.push({ l: y, an: y, add: u, n: n, anIndexes: [], val: i, line: h, animatorJustifyOffset: 0 }), 2 == c) { if (u += y, "" === i || " " === i || R === e - 1) { for ("" !== i && " " !== i || (u -= y); d <= R;) o[d].an = u, o[d].ind = l, o[d].extra = y, d += 1;
                        l += 1, u = 0 } } else if (3 == c) { if (u += y, "" === i || R === e - 1) { for ("" === i && (u -= y); d <= R;) o[d].an = u, o[d].ind = l, o[d].extra = y, d += 1;
                    u = 0, l += 1 } } else o[l].ind = l, o[l].extra = 0, l += 1; if (t.l = o, m = m < p ? p : m, f.push(p), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch (t.boxWidth = m, t.j) {
                case 1:
                    t.justifyOffset = -t.boxWidth; break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2; break;
                default:
                    t.justifyOffset = 0 }
            t.lineWidths = f; for (var O, M, D, w, N = s.a, L = N.length, k = [], F = 0; F < L; F += 1) { for ((O = N[F]).a.sc && (t.strokeColorAnim = !0), O.a.sw && (t.strokeWidthAnim = !0), (O.a.fc || O.a.fh || O.a.fs || O.a.fb) && (t.fillColorAnim = !0), w = 0, D = O.s.b, R = 0; R < e; R += 1)(M = o[R]).anIndexes[F] = w, (1 == D && "" !== M.val || 2 == D && "" !== M.val && " " !== M.val || 3 == D && (M.n || " " == M.val || R == e - 1) || 4 == D && (M.n || R == e - 1)) && (1 === O.s.rn && k.push(w), w += 1);
                s.a[F].s.totalChars = w; var V, G = -1; if (1 === O.s.rn)
                    for (R = 0; R < e; R += 1) G != (M = o[R]).anIndexes[F] && (G = M.anIndexes[F], V = k.splice(Math.floor(Math.random() * k.length), 1)[0]), M.anIndexes[F] = V }
            t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = g.ascent * t.finalSize / 100 }, TextProperty.prototype.updateDocumentData = function(t, e) { e = void 0 === e ? this.keysIndex : e; var n = this.copyData({}, this.data.d.k[e].s),
                n = this.copyData(n, t);
            this.data.d.k[e].s = n, this.recalculate(e), this.elem.addDynamicProperty(this) }, TextProperty.prototype.recalculate = function(t) { t = this.data.d.k[t].s;
            t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t) }, TextProperty.prototype.canResizeFont = function(t) { this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this) }, TextProperty.prototype.setMinimumFontSize = function(t) { this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this) }; var TextSelectorProp = (MTa = Math.max, NTa = Math.min, OTa = Math.floor, PTa.prototype = { getMult: function(t) { this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue(); var e = 0,
                        n = 0,
                        i = 1,
                        r = 1;
                    0 < this.ne.v ? e = this.ne.v / 100 : n = -this.ne.v / 100, 0 < this.xe.v ? i = 1 - this.xe.v / 100 : r = 1 + this.xe.v / 100; var a = BezierFactory.getBezierEasing(e, n, i, r).get,
                        s = 0,
                        o = this.finalS,
                        e = this.finalE,
                        n = this.data.sh; return (s = 2 === n ? a(s = e === o ? e <= t ? 1 : 0 : MTa(0, NTa(.5 / (e - o) + (t - o) / (e - o), 1))) : 3 === n ? a(s = e === o ? e <= t ? 0 : 1 : 1 - MTa(0, NTa(.5 / (e - o) + (t - o) / (e - o), 1))) : 4 === n ? (e === o ? s = 0 : (s = MTa(0, NTa(.5 / (e - o) + (t - o) / (e - o), 1))) < .5 ? s *= 2 : s = 1 - 2 * (s - .5), a(s)) : 5 === n ? a(s = e === o ? 0 : (r = -(i = e - o) / 2 + (t = NTa(MTa(0, t + .5 - o), e - o)), i = i / 2, Math.sqrt(1 - r * r / (i * i)))) : 6 === n ? a(s = e === o ? 0 : (t = NTa(MTa(0, t + .5 - o), e - o), (1 + Math.cos(Math.PI + 2 * Math.PI * t / (e - o))) / 2)) : (t >= OTa(o) && (s = MTa(0, NTa(t - o < 0 ? NTa(e, 1) - (o - t) : e - t, 1))), a(s))) * this.a.v }, getValue: function(t) { this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength); var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                        n = this.o.v / e,
                        t = this.s.v / e + n,
                        e = this.e.v / e + n;
                    e < t && (n = t, t = e, e = n), this.finalS = t, this.finalE = e } }, extendPrototype([DynamicPropertyContainer], PTa), { getTextSelectorProp: function(t, e, n) { return new PTa(t, e) } }),
            MTa, NTa, OTa;

        function PTa(t, e) { this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || { k: 0 }, 0, 0, this), "e" in e ? this.e = PropertyFactory.getProp(t, e.e, 0, 0, this) : this.e = { v: 100 }, this.o = PropertyFactory.getProp(t, e.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || { k: 0 }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue() } var poolFactory = function(t, e, n) { var i = 0,
                    r = t,
                    a = createSizedArray(r); return { newElement: function() { var t;
                        t = i ? a[--i] : e(); return t }, release: function(t) { i === r && (a = pooling.double(a), r *= 2);
                        n && n(t);
                        a[i] = t, i += 1 } } },
            pooling = { double: function(t) { return t.concat(createSizedArray(t.length)) } },
            pointPool = poolFactory(8, function() { return createTypedArray("float32", 2) }),
            shapePool = (EUa = poolFactory(4, function() { return new ShapePath }, function(t) { for (var e = t._length, n = 0; n < e; n += 1) pointPool.release(t.v[n]), pointPool.release(t.i[n]), pointPool.release(t.o[n]), t.v[n] = null, t.i[n] = null, t.o[n] = null;
                t._length = 0, t.c = !1 }), EUa.clone = function(t) { var e, n = EUa.newElement(),
                    i = void 0 === t._length ? t.v.length : t._length; for (n.setLength(i), n.c = t.c, e = 0; e < i; e += 1) n.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e); return n }, EUa),
            EUa, shapeCollectionPool = (MUa = { newShapeCollection: function() { var t;
                    t = NUa ? PUa[--NUa] : new ShapeCollection; return t }, release: function(t) { var e, n = t._length; for (e = 0; e < n; e += 1) shapePool.release(t.shapes[e]);
                    t._length = 0, NUa === OUa && (PUa = pooling.double(PUa), OUa *= 2);
                    PUa[NUa] = t, NUa += 1 } }, NUa = 0, OUa = 4, PUa = createSizedArray(OUa), MUa),
            MUa, NUa, OUa, PUa, segmentsLengthPool = poolFactory(8, function() { return { lengths: [], totalLength: 0 } }, function(t) { for (var e = t.lengths.length, n = 0; n < e; n += 1) bezierLengthPool.release(t.lengths[n]);
                t.lengths.length = 0 }),
            bezierLengthPool = poolFactory(8, function() { return { addedLength: 0, percents: createTypedArray("float32", defaultCurveSegments), lengths: createTypedArray("float32", defaultCurveSegments) } }),
            markerParser = function(e) { for (var t = [], n = 0; n < e.length; n += 1) { var i = e[n],
                        r = { time: i.tm, duration: i.dr }; try { r.payload = JSON.parse(e[n].cm) } catch (t) { try { r.payload = function(t) { for (var e, n = t.split("\r\n"), i = {}, r = 0, a = 0; a < n.length; a += 1) 2 === (e = n[a].split(":")).length && (i[e[0]] = e[1].trim(), r += 1); if (0 === r) throw new Error; return i }(e[n].cm) } catch (t) { r.payload = { name: e[n] } } }
                    t.push(r) } return t };

        function BaseRenderer() {}

        function SVGRenderer(t, e) { this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg"); var n, i = "";
            e && e.title && (t = createNS("title"), n = createElementID(), t.setAttribute("id", n), t.textContent = e.title, this.svgElement.appendChild(t), i += n), e && e.description && (n = createNS("desc"), r = createElementID(), n.setAttribute("id", r), n.textContent = e.description, this.svgElement.appendChild(n), i += " " + r), i && this.svgElement.setAttribute("aria-labelledby", i); var r = createNS("defs");
            this.svgElement.appendChild(r);
            i = createNS("g");
            this.svgElement.appendChild(i), this.layerElement = i, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", progressiveLoad: e && e.progressiveLoad || !1, hideOnTransparent: !(e && !1 === e.hideOnTransparent), viewBoxOnly: e && e.viewBoxOnly || !1, viewBoxSize: e && e.viewBoxSize || !1, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" } }, this.globalData = { _mdf: !1, frameNum: -1, defs: r, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg" }

        function CanvasRenderer(t, e) { this.animationItem = t, this.renderConfig = { clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas, context: e && e.context || null, progressiveLoad: e && e.progressiveLoad || !1, preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", className: e && e.className || "", id: e && e.id || "" }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: !1, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas" }

        function HybridRenderer(t, e) { this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && !1 === e.hideOnTransparent), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" } }, this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html" }

        function MaskElement(t, e, n) { this.data = t, this.element = e, this.globalData = n, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null; var i, r = this.globalData.defs,
                a = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(a), this.solidPath = ""; for (var s, o, l, c, u, d = this.masksProperties, h = 0, f = [], p = createElementID(), m = "clipPath", g = "clip-path", y = 0; y < a; y += 1)
                if (("a" !== d[y].mode && "n" !== d[y].mode || d[y].inv || 100 !== d[y].o.k || d[y].o.x) && (g = m = "mask"), "s" !== d[y].mode && "i" !== d[y].mode || 0 !== h ? o = null : ((o = createNS("rect")).setAttribute("fill", "#ffffff"), o.setAttribute("width", this.element.comp.data.w || 0), o.setAttribute("height", this.element.comp.data.h || 0), f.push(o)), i = createNS("path"), "n" === d[y].mode) this.viewData[y] = { op: PropertyFactory.getProp(this.element, d[y].o, 0, .01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, d[y], 3), elem: i, lastPath: "" }, r.appendChild(i);
                else { if (h += 1, i.setAttribute("fill", "s" === d[y].mode ? "#000000" : "#ffffff"), i.setAttribute("clip-rule", "nonzero"), 0 !== d[y].x.k ? (g = m = "mask", c = PropertyFactory.getProp(this.element, d[y].x, 0, null, this.element), u = createElementID(), (b = createNS("filter")).setAttribute("id", u), (l = createNS("feMorphology")).setAttribute("operator", "erode"), l.setAttribute("in", "SourceGraphic"), l.setAttribute("radius", "0"), b.appendChild(l), r.appendChild(b), i.setAttribute("stroke", "s" === d[y].mode ? "#000000" : "#ffffff")) : c = l = null, this.storedData[y] = { elem: i, x: c, expan: l, lastPath: "", lastOperator: "", filterId: u, lastRadius: 0 }, "i" === d[y].mode) { s = f.length; for (var v = createNS("g"), E = 0; E < s; E += 1) v.appendChild(f[E]); var b = createNS("mask");
                        b.setAttribute("mask-type", "alpha"), b.setAttribute("id", p + "_" + h), b.appendChild(i), r.appendChild(b), v.setAttribute("mask", "url(" + locationHref + "#" + p + "_" + h + ")"), f.length = 0, f.push(v) } else f.push(i);
                    d[y].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[y] = { elem: i, lastPath: "", op: PropertyFactory.getProp(this.element, d[y].o, 0, .01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, d[y], 3), invRect: o }, this.viewData[y].prop.k || this.drawPath(d[y], this.viewData[y].prop.v, this.viewData[y]) }
            for (this.maskElement = createNS(m), a = f.length, y = 0; y < a; y += 1) this.maskElement.appendChild(f[y]);
            0 < h && (this.maskElement.setAttribute("id", p), this.element.maskedElement.setAttribute(g, "url(" + locationHref + "#" + p + ")"), r.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this) }

        function HierarchyElement() {}

        function FrameElement() {}

        function TransformElement() {}

        function RenderableElement() {}

        function RenderableDOMElement() {}

        function ProcessedElement(t, e) { this.elem = t, this.pos = e }

        function SVGStyleData(t, e) { this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null }

        function SVGShapeData(t, e, n) { this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = n, this.lvl = e, this._isAnimated = !!n.k; for (var i = 0, r = t.length; i < r;) { if (t[i].mProps.dynamicProperties.length) { this._isAnimated = !0; break }
                i += 1 } }

        function SVGTransformData(t, e, n) { this.transform = { mProps: t, op: e, container: n }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length }

        function SVGStrokeStyleData(t, e, n) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = n, this._isAnimated = !!this._isAnimated }

        function SVGFillStyleData(t, e, n) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = n }

        function SVGGradientFillStyleData(t, e, n) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, n) }

        function SVGGradientStrokeStyleData(t, e, n) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, n), this._isAnimated = !!this._isAnimated }

        function ShapeGroupData() { this.it = [], this.prevViewData = [], this.gr = createNS("g") }
        BaseRenderer.prototype.checkLayers = function(t) { var e, n, i = this.layers.length; for (this.completeLayers = !0, e = i - 1; 0 <= e; --e) this.elements[e] || (n = this.layers[e]).ip - n.st <= t - this.layers[e].st && n.op - n.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
            this.checkPendingElements() }, BaseRenderer.prototype.createItem = function(t) { switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t);
                default:
                    return this.createNull(t) } }, BaseRenderer.prototype.createCamera = function() { throw new Error("You're using a 3d camera. Try the html renderer.") }, BaseRenderer.prototype.createAudio = function(t) { return new AudioElement(t, this.globalData, this) }, BaseRenderer.prototype.createFootage = function(t) { return new FootageElement(t, this.globalData, this) }, BaseRenderer.prototype.buildAllItems = function() { for (var t = this.layers.length, e = 0; e < t; e += 1) this.buildItem(e);
            this.checkPendingElements() }, BaseRenderer.prototype.includeLayers = function(t) { this.completeLayers = !1; for (var e, n = t.length, i = this.layers.length, r = 0; r < n; r += 1)
                for (e = 0; e < i;) { if (this.layers[e].id === t[r].id) { this.layers[e] = t[r]; break }
                    e += 1 } }, BaseRenderer.prototype.setProjectInterface = function(t) { this.globalData.projectInterface = t }, BaseRenderer.prototype.initItems = function() { this.globalData.progressiveLoad || this.buildAllItems() }, BaseRenderer.prototype.buildElementParenting = function(t, e, n) { for (var i = this.elements, r = this.layers, a = 0, s = r.length; a < s;) r[a].ind == e && (i[a] && !0 !== i[a] ? (n.push(i[a]), i[a].setAsParent(), void 0 !== r[a].parent ? this.buildElementParenting(t, r[a].parent, n) : t.setHierarchy(n)) : (this.buildItem(a), this.addPendingElement(t))), a += 1 }, BaseRenderer.prototype.addPendingElement = function(t) { this.pendingElements.push(t) }, BaseRenderer.prototype.searchExtraCompositions = function(t) { for (var e, n = t.length, i = 0; i < n; i += 1) t[i].xt && ((e = this.createComp(t[i])).initExpressions(), this.globalData.projectInterface.registerComposition(e)) }, BaseRenderer.prototype.setupGlobalData = function(t, e) { this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h } }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) { return new NullElement(t, this.globalData, this) }, SVGRenderer.prototype.createShape = function(t) { return new SVGShapeElement(t, this.globalData, this) }, SVGRenderer.prototype.createText = function(t) { return new SVGTextLottieElement(t, this.globalData, this) }, SVGRenderer.prototype.createImage = function(t) { return new IImageElement(t, this.globalData, this) }, SVGRenderer.prototype.createComp = function(t) { return new SVGCompElement(t, this.globalData, this) }, SVGRenderer.prototype.createSolid = function(t) { return new ISolidElement(t, this.globalData, this) }, SVGRenderer.prototype.configAnimation = function(t) { this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement); var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t; var n = createNS("clipPath"),
                i = createNS("rect");
            i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0); var r = createElementID();
            n.setAttribute("id", r), n.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + r + ")"), e.appendChild(n), this.layers = t.layers, this.elements = createSizedArray(t.layers.length) }, SVGRenderer.prototype.destroy = function() { this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null; for (var t = this.layers ? this.layers.length : 0, e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) { var e, n = this.elements;
            n[t] || 99 === this.layers[t].ty || (n[t] = !0, e = this.createItem(this.layers[t]), n[t] = e, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(e), e.initExpressions()), this.appendElementInPos(e, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? e.setMatte(n[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(e)))) }, SVGRenderer.prototype.checkPendingElements = function() { for (; this.pendingElements.length;) { var t = this.pendingElements.pop(); if (t.checkParenting(), t.data.tt)
                    for (var e = 0, n = this.elements.length; e < n;) { if (this.elements[e] === t) { t.setMatte(this.elements[e - 1].layerId); break }
                        e += 1 } } }, SVGRenderer.prototype.renderFrame = function(t) { if (this.renderedFrame !== t && !this.destroyed) { var e;
                null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1; var n = this.layers.length; for (this.completeLayers || this.checkLayers(t), e = n - 1; 0 <= e; --e)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st); if (this.globalData._mdf)
                    for (e = 0; e < n; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame() } }, SVGRenderer.prototype.appendElementInPos = function(t, e) { t = t.getBaseElement(); if (t) { for (var n, i = 0; i < e;) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), i += 1;
                n ? this.layerElement.insertBefore(t, n) : this.layerElement.appendChild(t) } }, SVGRenderer.prototype.hide = function() { this.layerElement.style.display = "none" }, SVGRenderer.prototype.show = function() { this.layerElement.style.display = "block" }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) { return new CVShapeElement(t, this.globalData, this) }, CanvasRenderer.prototype.createText = function(t) { return new CVTextElement(t, this.globalData, this) }, CanvasRenderer.prototype.createImage = function(t) { return new CVImageElement(t, this.globalData, this) }, CanvasRenderer.prototype.createComp = function(t) { return new CVCompElement(t, this.globalData, this) }, CanvasRenderer.prototype.createSolid = function(t) { return new CVSolidElement(t, this.globalData, this) }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) { var e;
            1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || (this.renderConfig.clearCanvas ? (this.transformMat.cloneFromProps(t), e = this.contextData.cTr.props, this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props), e = this.contextData.cTr.props, this.canvasContext.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])) : this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])) }, CanvasRenderer.prototype.ctxOpacity = function(t) { if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
            this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO) }, CanvasRenderer.prototype.reset = function() { this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore() }, CanvasRenderer.prototype.save = function(t) { if (this.renderConfig.clearCanvas) { t && this.canvasContext.save(); var e = this.contextData.cTr.props;
                this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate(); for (var n = this.contextData.saved[this.contextData.cArrPos], i = 0; i < 16; i += 1) n[i] = e[i];
                this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1 } else this.canvasContext.save() }, CanvasRenderer.prototype.restore = function(t) { if (this.renderConfig.clearCanvas) { t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), --this.contextData.cArrPos; for (var e = this.contextData.saved[this.contextData.cArrPos], n = this.contextData.cTr.props, i = 0; i < 16; i += 1) n[i] = e[i];
                this.canvasContext.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]), e = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = e, this.globalData.currentGlobalAlpha !== e && (this.canvasContext.globalAlpha = e, this.globalData.currentGlobalAlpha = e) } else this.canvasContext.restore() }, CanvasRenderer.prototype.configAnimation = function(t) { var e, n;
            this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), (e = this.animationItem.container.style).width = "100%", e.height = "100%", n = "0px 0px 0px", e.transformOrigin = n, e.mozTransformOrigin = n, e.webkitTransformOrigin = n, e["-webkit-transform"] = n, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)) : this.canvasContext = this.renderConfig.context, this.data = t, this.layers = t.layers, this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, (this.globalData.renderer = this).globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize() }, CanvasRenderer.prototype.updateContainerSize = function() { var t, e, n, i, r, a, s;
            this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice") ? (n = (a = this.renderConfig.preserveAspectRatio.split(" "))[1] || "meet", i = (s = a[0] || "xMidYMid").substr(0, 4), r = s.substr(4), (a = t / e) < (s = this.transformCanvas.w / this.transformCanvas.h) && "meet" === n || s < a && "slice" === n ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === i && (s < a && "meet" === n || a < s && "slice" === n) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === i && (s < a && "meet" === n || a < s && "slice" === n) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === r && (a < s && "meet" === n || s < a && "slice" === n) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === r && (a < s && "meet" === n || s < a && "slice" === n) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0) : ("none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0), this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0) }, CanvasRenderer.prototype.destroy = function() { this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""); for (var t = (this.layers ? this.layers.length : 0) - 1; 0 <= t; --t) this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0 }, CanvasRenderer.prototype.renderFrame = function(t, e) { if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) { var n;
                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t; var i = this.layers.length; for (this.completeLayers || this.checkLayers(t), n = 0; n < i; n += 1)(this.completeLayers || this.elements[n]) && this.elements[n].prepareFrame(t - this.layers[n].st); if (this.globalData._mdf) { for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), n = i - 1; 0 <= n; --n)(this.completeLayers || this.elements[n]) && this.elements[n].renderFrame();!0 !== this.renderConfig.clearCanvas && this.restore() } } }, CanvasRenderer.prototype.buildItem = function(t) { var e, n = this.elements;
            n[t] || 99 === this.layers[t].ty || (e = this.createItem(this.layers[t], this, this.globalData), (n[t] = e).initExpressions()) }, CanvasRenderer.prototype.checkPendingElements = function() { for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting() }, CanvasRenderer.prototype.hide = function() { this.animationItem.container.style.display = "none" }, CanvasRenderer.prototype.show = function() { this.animationItem.container.style.display = "block" }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() { for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting() }, HybridRenderer.prototype.appendElementInPos = function(t, e) { var n = t.getBaseElement(); if (n) { t = this.layers[e]; if (t.ddd && this.supports3d) this.addTo3dContainer(n, e);
                else if (this.threeDElements) this.addTo3dContainer(n, e);
                else { for (var i, r, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (r = this.elements[a], i = (this.layers[a].ddd ? this.getThreeDContainerByPos(a) : r.getBaseElement()) || i), a += 1;
                    i ? t.ddd && this.supports3d || this.layerElement.insertBefore(n, i) : t.ddd && this.supports3d || this.layerElement.appendChild(n) } } }, HybridRenderer.prototype.createShape = function(t) { return new(this.supports3d ? HShapeElement : SVGShapeElement)(t, this.globalData, this) }, HybridRenderer.prototype.createText = function(t) { return new(this.supports3d ? HTextElement : SVGTextLottieElement)(t, this.globalData, this) }, HybridRenderer.prototype.createCamera = function(t) { return this.camera = new HCameraElement(t, this.globalData, this), this.camera }, HybridRenderer.prototype.createImage = function(t) { return new(this.supports3d ? HImageElement : IImageElement)(t, this.globalData, this) }, HybridRenderer.prototype.createComp = function(t) { return new(this.supports3d ? HCompElement : SVGCompElement)(t, this.globalData, this) }, HybridRenderer.prototype.createSolid = function(t) { return new(this.supports3d ? HSolidElement : ISolidElement)(t, this.globalData, this) }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) { for (var e = 0, n = this.threeDElements.length; e < n;) { if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                e += 1 } return null }, HybridRenderer.prototype.createThreeDContainer = function(t, e) { var n = createTag("div");
            styleDiv(n); var i, r, a = createTag("div");
            styleDiv(a), "3d" === e && ((r = n.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px", i = "50% 50%", r.webkitTransformOrigin = i, r.mozTransformOrigin = i, r.transformOrigin = i, r = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)", (i = a.style).transform = r, i.webkitTransform = r), n.appendChild(a);
            e = { container: a, perspectiveElem: n, startPos: t, endPos: t, type: e }; return this.threeDElements.push(e), e }, HybridRenderer.prototype.build3dContainers = function() { for (var t, e = this.layers.length, n = "", i = 0; i < e; i += 1) this.layers[i].ddd && 3 !== this.layers[i].ty ? "3d" !== n && (n = "3d", t = this.createThreeDContainer(i, "3d")) : "2d" !== n && (n = "2d", t = this.createThreeDContainer(i, "2d")), t.endPos = Math.max(t.endPos, i); for (i = (e = this.threeDElements.length) - 1; 0 <= i; --i) this.resizerElem.appendChild(this.threeDElements[i].perspectiveElem) }, HybridRenderer.prototype.addTo3dContainer = function(t, e) { for (var n = 0, i = this.threeDElements.length; n < i;) { if (e <= this.threeDElements[n].endPos) { for (var r, a = this.threeDElements[n].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (r = this.elements[a].getBaseElement()), a += 1;
                    r ? this.threeDElements[n].container.insertBefore(t, r) : this.threeDElements[n].container.appendChild(t); break }
                n += 1 } }, HybridRenderer.prototype.configAnimation = function(t) { var e = createTag("div"),
                n = this.animationItem.wrapper,
                i = e.style;
            i.width = t.w + "px", i.height = t.h + "px", styleDiv(this.resizerElem = e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), n.appendChild(e), i.overflow = "hidden";
            e = createNS("svg");
            e.setAttribute("width", "1"), e.setAttribute("height", "1"), styleDiv(e), this.resizerElem.appendChild(e);
            i = createNS("defs");
            e.appendChild(i), this.data = t, this.setupGlobalData(t, e), this.globalData.defs = i, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize() }, HybridRenderer.prototype.destroy = function() { this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null; for (var t = this.layers ? this.layers.length : 0, e = 0; e < t; e += 1) this.elements[e].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null }, HybridRenderer.prototype.updateContainerSize = function() { var t, e, n, i = this.animationItem.wrapper.offsetWidth,
                r = this.animationItem.wrapper.offsetHeight,
                i = i / r < this.globalData.compSize.w / this.globalData.compSize.h ? (t = i / this.globalData.compSize.w, e = i / this.globalData.compSize.w, n = 0, (r - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (t = r / this.globalData.compSize.h, e = r / this.globalData.compSize.h, n = (i - this.globalData.compSize.w * (r / this.globalData.compSize.h)) / 2, 0),
                r = this.resizerElem.style;
            r.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + n + "," + i + ",0,1)", r.transform = r.webkitTransform }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() { this.resizerElem.style.display = "none" }, HybridRenderer.prototype.show = function() { this.resizerElem.style.display = "block" }, HybridRenderer.prototype.initItems = function() { if (this.buildAllItems(), this.camera) this.camera.setup();
            else
                for (var t = this.globalData.compSize.w, e = this.globalData.compSize.h, n = this.threeDElements.length, i = 0; i < n; i += 1) { var r = this.threeDElements[i].perspectiveElem.style;
                    r.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px", r.perspective = r.webkitPerspective } }, HybridRenderer.prototype.searchExtraCompositions = function(t) { for (var e, n = t.length, i = createTag("div"), r = 0; r < n; r += 1) t[r].xt && ((e = this.createComp(t[r], i, this.globalData.comp, null)).initExpressions(), this.globalData.projectInterface.registerComposition(e)) }, MaskElement.prototype.getMaskProperty = function(t) { return this.viewData[t].prop }, MaskElement.prototype.renderFrame = function(t) { for (var e, n = this.element.finalTransform.mat, i = this.masksProperties.length, r = 0; r < i; r += 1)(this.viewData[r].prop._mdf || t) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]), (this.viewData[r].op._mdf || t) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v), "n" !== this.masksProperties[r].mode && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[r].invRect.setAttribute("transform", n.getInverseMatrix().to2dCSS()), this.storedData[r].x && (this.storedData[r].x._mdf || t) && (e = this.storedData[r].expan, this.storedData[r].x.v < 0 ? ("erode" !== this.storedData[r].lastOperator && (this.storedData[r].lastOperator = "erode", this.storedData[r].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[r].filterId + ")")), e.setAttribute("radius", -this.storedData[r].x.v)) : ("dilate" !== this.storedData[r].lastOperator && (this.storedData[r].lastOperator = "dilate", this.storedData[r].elem.setAttribute("filter", null)), this.storedData[r].elem.setAttribute("stroke-width", 2 * this.storedData[r].x.v)))) }, MaskElement.prototype.getMaskelement = function() { return this.maskElement }, MaskElement.prototype.createLayerSolidPath = function() { var t = "M0,0 "; return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " " }, MaskElement.prototype.drawPath = function(t, e, n) { for (var i, r = " M" + e.v[0][0] + "," + e.v[0][1], a = e._length, s = 1; s < a; s += 1) r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
            e.c && 1 < a && (r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), n.lastPath !== r && (i = "", n.elem && (e.c && (i = t.inv ? this.solidPath + r : r), n.elem.setAttribute("d", i)), n.lastPath = r) }, MaskElement.prototype.destroy = function() { this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null }, HierarchyElement.prototype = { initHierarchy: function() { this.hierarchy = [], this._isParent = !1, this.checkParenting() }, setHierarchy: function(t) { this.hierarchy = t }, setAsParent: function() { this._isParent = !0 }, checkParenting: function() { void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []) } }, FrameElement.prototype = { initFrame: function() { this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1 }, prepareProperties: function(t, e) { for (var n = this.dynamicProperties.length, i = 0; i < n; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0)) }, addDynamicProperty: function(t) {-1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t) } }, TransformElement.prototype = { initTransform: function() { this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: !1, _opMdf: !1, mat: new Matrix }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty }, renderTransform: function() { if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) { var t, e = this.finalTransform.mat,
                        n = 0,
                        i = this.hierarchy.length; if (!this.finalTransform._matMdf)
                        for (; n < i;) { if (this.hierarchy[n].finalTransform.mProp._mdf) { this.finalTransform._matMdf = !0; break }
                            n += 1 }
                    if (this.finalTransform._matMdf)
                        for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), n = 0; n < i; n += 1) t = this.hierarchy[n].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]) } }, globalToLocal: function(t) { var e = [];
                e.push(this.finalTransform); for (var n = !0, i = this.comp; n;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : n = !1; for (var r, a = e.length, s = 0; s < a; s += 1) r = e[s].mat.applyToPointArray(0, 0, 0), t = [t[0] - r[0], t[1] - r[1], 0]; return t }, mHelper: new Matrix }, RenderableElement.prototype = { initRenderable: function() { this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [] }, addRenderableComponent: function(t) {-1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t) }, removeRenderableComponent: function(t) {-1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1) }, prepareRenderableFrame: function(t) { this.checkLayerLimits(t) }, checkTransparency: function() { this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show()) }, checkLayerLimits: function(t) { this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide()) }, renderRenderable: function() { for (var t = this.renderableComponents.length, e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame) }, sourceRectAtTime: function() { return { top: 0, left: 0, width: 100, height: 100 } }, getLayerSize: function() { return 5 === this.data.ty ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height } } }, extendPrototype([RenderableElement, createProxyFunction({ initElement: function(t, e, n) { this.initFrame(), this.initBaseData(t, e, n), this.initTransform(t, e, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide() }, hide: function() { this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0) }, show: function() { this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0) }, renderFrame: function() { this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1)) }, renderInnerContent: function() {}, prepareFrame: function(t) { this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency() }, destroy: function() { this.innerElem = null, this.destroyBaseElement() } })], RenderableDOMElement), SVGStyleData.prototype.reset = function() { this.d = "", this._mdf = !1 }, SVGShapeData.prototype.setAsAnimated = function() { this._isAnimated = !0 }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, n) { this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = n, this.stops = [], this.setGradientData(n.pElem, e), this.setGradientOpacity(e, n), this._isAnimated = !!this._isAnimated }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) { var n = createElementID(),
                i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            i.setAttribute("id", n), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse"); for (var r, a = [], s = 4 * e.g.p, o = 0; o < s; o += 4) r = createNS("stop"), i.appendChild(r), a.push(r);
            t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + n + ")"), this.gf = i, this.cst = a }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) { if (this.g._hasOpacity && !this.g._collapsable) { var n, i, r = createNS("mask"),
                    a = createNS("path");
                r.appendChild(a); var s = createElementID(),
                    o = createElementID();
                r.setAttribute("id", o); var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                l.setAttribute("id", s), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), i = (t.g.k.k[0].s || t.g.k.k).length; for (var c = this.stops, u = 4 * t.g.p; u < i; u += 2)(n = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(n), c.push(n);
                a.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + s + ")"), "gs" === t.ty && (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = r, this.ost = c, this.maskId = o, e.msElem = a } }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData); var SVGElementsRenderer = (C$a = new Matrix, D$a = new Matrix, { createRenderFunction: function(t) { switch (t.ty) {
                        case "fl":
                            return I$a;
                        case "gf":
                            return K$a;
                        case "gs":
                            return J$a;
                        case "st":
                            return L$a;
                        case "sh":
                        case "el":
                        case "rc":
                        case "sr":
                            return H$a;
                        case "tr":
                            return G$a;
                        default:
                            return null } } }),
            C$a, D$a;

        function G$a(t, e, n) {
            (n || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (n || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS()) }

        function H$a(t, e, n) { for (var i, r, a, s, o, l, c, u, d, h, f = e.styles.length, p = e.lvl, m = 0; m < f; m += 1) { if (s = e.sh._mdf || n, e.styles[m].lvl < p) { for (c = D$a.reset(), d = p - e.styles[m].lvl, h = e.transformers.length - 1; !s && 0 < d;) s = e.transformers[h].mProps._mdf || s, --d, --h; if (s)
                        for (d = p - e.styles[m].lvl, h = e.transformers.length - 1; 0 < d;) u = e.transformers[h].mProps.v.props, c.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), --d, --h } else c = C$a; if (r = (l = e.sh.paths)._length, s) { for (a = "", i = 0; i < r; i += 1)(o = l.shapes[i]) && o._length && (a += buildShapeString(o, o._length, o.c, c));
                    e.caches[m] = a } else a = e.caches[m];
                e.styles[m].d += !0 === t.hd ? "" : a, e.styles[m]._mdf = s || e.styles[m]._mdf } }

        function I$a(t, e, n) { var i = e.style;
            (e.c._mdf || n) && i.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || n) && i.pElem.setAttribute("fill-opacity", e.o.v) }

        function J$a(t, e, n) { K$a(t, e, n), L$a(0, e, n) }

        function K$a(t, e, n) { var i, r, a, s, o = e.gf,
                l = e.g._hasOpacity,
                c = e.s.v,
                u = e.e.v; if ((e.o._mdf || n) && (r = "gf" === t.ty ? "fill-opacity" : "stroke-opacity", e.style.pElem.setAttribute(r, e.o.v)), (e.s._mdf || n) && (r = "x1" == (i = 1 === t.t ? "x1" : "cx") ? "y1" : "cy", o.setAttribute(i, c[0]), o.setAttribute(r, c[1]), l && !e.g._collapsable && (e.of.setAttribute(i, c[0]), e.of.setAttribute(r, c[1]))), e.g._cmdf || n) { p = e.cst; for (var d = e.g.c, h = p.length, f = 0; f < h; f += 1)(a = p[f]).setAttribute("offset", d[4 * f] + "%"), a.setAttribute("stop-color", "rgb(" + d[4 * f + 1] + "," + d[4 * f + 2] + "," + d[4 * f + 3] + ")") } if (l && (e.g._omdf || n)) { var p, m = e.g.o; for (h = (p = e.g._collapsable ? e.cst : e.ost).length, f = 0; f < h; f += 1) a = p[f], e.g._collapsable || a.setAttribute("offset", m[2 * f] + "%"), a.setAttribute("stop-opacity", m[2 * f + 1]) }
            1 === t.t ? (e.e._mdf || n) && (o.setAttribute("x2", u[0]), o.setAttribute("y2", u[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", u[0]), e.of.setAttribute("y2", u[1]))) : ((e.s._mdf || e.e._mdf || n) && (s = Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2)), o.setAttribute("r", s), l && !e.g._collapsable && e.of.setAttribute("r", s)), (e.e._mdf || e.h._mdf || e.a._mdf || n) && (s = s || Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2)), n = Math.atan2(u[1] - c[1], u[0] - c[0]), 1 <= (u = e.h.v) ? u = .99 : u <= -1 && (u = -.99), s = s * u, u = Math.cos(n + e.a.v) * s + c[0], c = Math.sin(n + e.a.v) * s + c[1], o.setAttribute("fx", u), o.setAttribute("fy", c), l && !e.g._collapsable && (e.of.setAttribute("fx", u), e.of.setAttribute("fy", c)))) }

        function L$a(t, e, n) { var i = e.style,
                r = e.d;
            r && (r._mdf || n) && r.dashStr && (i.pElem.setAttribute("stroke-dasharray", r.dashStr), i.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0])), e.c && (e.c._mdf || n) && i.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || n) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || n) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v)) }

        function ShapeTransformManager() { this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0 }

        function CVShapeData(t, e, n, i) { this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0]; var r = 4; "rc" === e.ty ? r = 5 : "el" === e.ty ? r = 6 : "sr" === e.ty && (r = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, r, t); for (var a, s = n.length, o = 0; o < s; o += 1) n[o].closed || (a = { transforms: i.addTransformSequence(n[o].transforms), trNodes: [] }, this.styledShapes.push(a), n[o].elements.push(a)) }

        function BaseElement() {}

        function NullElement(t, e, n) { this.initFrame(), this.initBaseData(t, e, n), this.initFrame(), this.initTransform(t, e, n), this.initHierarchy() }

        function SVGBaseElement() {}

        function IShapeElement() {}

        function ITextElement() {}

        function ICompElement() {}

        function IImageElement(t, e, n) { this.assetData = e.getAssetData(t.refId), this.initElement(t, e, n), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h } }

        function ISolidElement(t, e, n) { this.initElement(t, e, n) }

        function AudioElement(t, e, n) { this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, n), this._isPlaying = !1, this._canPlay = !1;
            n = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(n), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } }

        function FootageElement(t, e, n) { this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, n) }

        function SVGCompElement(t, e, n) { this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, n), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } }

        function SVGTextLottieElement(t, e, n) { this.textSpans = [], this.renderType = "svg", this.initElement(t, e, n) }

        function SVGShapeElement(t, e, n) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, n), this.prevViewData = [] }

        function SVGTintFilter(t, e) { this.filterManager = e; var n = createNS("feColorMatrix");
            n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), n.setAttribute("result", "f1"), t.appendChild(n), (n = createNS("feColorMatrix")).setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", "f2"), t.appendChild(n), this.matrixFilter = n, 100 === e.effectElements[2].p.v && !e.effectElements[2].p.k || (e = createNS("feMerge"), t.appendChild(e), (t = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), e.appendChild(t), (t = createNS("feMergeNode")).setAttribute("in", "f2"), e.appendChild(t)) }

        function SVGFillFilter(t, e) { this.filterManager = e;
            e = createNS("feColorMatrix");
            e.setAttribute("type", "matrix"), e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(e), this.matrixFilter = e }

        function SVGGaussianBlurEffect(t, e) { t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
            e = createNS("feGaussianBlur");
            t.appendChild(e), this.feGaussianBlur = e }

        function SVGStrokeEffect(t, e) { this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = [] }

        function SVGTritoneFilter(t, e) { this.filterManager = e;
            e = createNS("feColorMatrix");
            e.setAttribute("type", "matrix"), e.setAttribute("color-interpolation-filters", "linearRGB"), e.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.setAttribute("result", "f1"), t.appendChild(e);
            e = createNS("feComponentTransfer");
            e.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(e), this.matrixFilter = e;
            t = createNS("feFuncR");
            t.setAttribute("type", "table"), e.appendChild(t), this.feFuncR = t;
            t = createNS("feFuncG");
            t.setAttribute("type", "table"), e.appendChild(t), this.feFuncG = t;
            t = createNS("feFuncB");
            t.setAttribute("type", "table"), e.appendChild(t), this.feFuncB = t }

        function SVGProLevelsFilter(t, e) { this.filterManager = e; var n = this.filterManager.effectElements,
                e = createNS("feComponentTransfer");
            (n[10].p.k || 0 !== n[10].p.v || n[11].p.k || 1 !== n[11].p.v || n[12].p.k || 1 !== n[12].p.v || n[13].p.k || 0 !== n[13].p.v || n[14].p.k || 1 !== n[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", e)), (n[17].p.k || 0 !== n[17].p.v || n[18].p.k || 1 !== n[18].p.v || n[19].p.k || 1 !== n[19].p.v || n[20].p.k || 0 !== n[20].p.v || n[21].p.k || 1 !== n[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", e)), (n[24].p.k || 0 !== n[24].p.v || n[25].p.k || 1 !== n[25].p.v || n[26].p.k || 1 !== n[26].p.v || n[27].p.k || 0 !== n[27].p.v || n[28].p.k || 1 !== n[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", e)), (n[31].p.k || 0 !== n[31].p.v || n[32].p.k || 1 !== n[32].p.v || n[33].p.k || 1 !== n[33].p.v || n[34].p.k || 0 !== n[34].p.v || n[35].p.k || 1 !== n[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", e)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (e.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(e), e = createNS("feComponentTransfer")), (n[3].p.k || 0 !== n[3].p.v || n[4].p.k || 1 !== n[4].p.v || n[5].p.k || 1 !== n[5].p.v || n[6].p.k || 0 !== n[6].p.v || n[7].p.k || 1 !== n[7].p.v) && (e.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(e), this.feFuncRComposed = this.createFeFunc("feFuncR", e), this.feFuncGComposed = this.createFeFunc("feFuncG", e), this.feFuncBComposed = this.createFeFunc("feFuncB", e)) }

        function SVGDropShadowEffect(t, e) { var n = e.container.globalData.renderConfig.filterSize;
            t.setAttribute("x", n.x), t.setAttribute("y", n.y), t.setAttribute("width", n.width), t.setAttribute("height", n.height), this.filterManager = e;
            e = createNS("feGaussianBlur");
            e.setAttribute("in", "SourceAlpha"), e.setAttribute("result", "drop_shadow_1"), e.setAttribute("stdDeviation", "0"), this.feGaussianBlur = e, t.appendChild(e);
            e = createNS("feOffset");
            e.setAttribute("dx", "25"), e.setAttribute("dy", "0"), e.setAttribute("in", "drop_shadow_1"), e.setAttribute("result", "drop_shadow_2"), this.feOffset = e, t.appendChild(e);
            e = createNS("feFlood");
            e.setAttribute("flood-color", "#00ff00"), e.setAttribute("flood-opacity", "1"), e.setAttribute("result", "drop_shadow_3"), this.feFlood = e, t.appendChild(e);
            e = createNS("feComposite");
            e.setAttribute("in", "drop_shadow_3"), e.setAttribute("in2", "drop_shadow_2"), e.setAttribute("operator", "in"), e.setAttribute("result", "drop_shadow_4"), t.appendChild(e);
            e = createNS("feMerge");
            t.appendChild(e), t = createNS("feMergeNode"), e.appendChild(t), (t = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = t, this.feMerge = e, this.originalNodeAdded = !1, e.appendChild(t) }
        ShapeTransformManager.prototype = { addTransformSequence: function(t) { for (var e = t.length, n = "_", i = 0; i < e; i += 1) n += t[i].transform.key + "_"; var r = this.sequences[n]; return r || (r = { transforms: [].concat(t), finalTransform: new Matrix, _mdf: !1 }, this.sequences[n] = r, this.sequenceList.push(r)), r }, processSequence: function(t, e) { for (var n, i = 0, r = t.transforms.length, a = e; i < r && !e;) { if (t.transforms[i].transform.mProps._mdf) { a = !0; break }
                    i += 1 } if (a)
                    for (t.finalTransform.reset(), i = r - 1; 0 <= i; --i) n = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11], n[12], n[13], n[14], n[15]);
                t._mdf = a }, processSequences: function(t) { for (var e = this.sequenceList.length, n = 0; n < e; n += 1) this.processSequence(this.sequenceList[n], t) }, getNewKey: function() { return this.transform_key_count += 1, "_" + this.transform_key_count } }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = { checkMasks: function() { if (!this.data.hasMask) return !1; for (var t = 0, e = this.data.masksProperties.length; t < e;) { if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                    t += 1 } return !1 }, initExpressions: function() { this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager); var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface) }, setBlendMode: function() { var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style["mix-blend-mode"] = t }, initBaseData: function(t, e, n) { this.globalData = e, this.comp = n, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties) }, getType: function() { return this.type }, sourceRectAtTime: function() {} }, NullElement.prototype.prepareFrame = function(t) { this.prepareProperties(t, !0) }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() { return null }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = { initRendererElement: function() { this.layerElement = createNS("g") }, createContainerElements: function() { this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1; var t, e, n, i, r, a, s, o = null;
                this.data.td ? 3 == this.data.td || 1 == this.data.td ? ((i = createNS("mask")).setAttribute("id", this.layerId), i.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), i.appendChild(this.layerElement), o = i, this.globalData.defs.appendChild(i), featureSupport.maskType || 1 != this.data.td || (i.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), o = r, i.appendChild(r), r.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))) : 2 == this.data.td && ((a = createNS("mask")).setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha"), s = createNS("g"), a.appendChild(s), t = createElementID(), e = filtersFactory.createFilter(t), (n = createNS("feComponentTransfer")).setAttribute("in", "SourceGraphic"), e.appendChild(n), (i = createNS("feFuncA")).setAttribute("type", "table"), i.setAttribute("tableValues", "1.0 0.0"), n.appendChild(i), this.globalData.defs.appendChild(e), (i = createNS("rect")).setAttribute("width", this.comp.data.w), i.setAttribute("height", this.comp.data.h), i.setAttribute("x", "0"), i.setAttribute("y", "0"), i.setAttribute("fill", "#ffffff"), i.setAttribute("opacity", "0"), s.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), s.appendChild(i), s.appendChild(this.layerElement), o = s, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), s.appendChild(i), r.appendChild(this.layerElement), o = r, s.appendChild(r)), this.globalData.defs.appendChild(a)) : this.data.tt ? (this.matteElement.appendChild(this.layerElement), o = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.ty || this.data.hd || (s = createNS("clipPath"), (r = createNS("path")).setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z"), a = createElementID(), s.setAttribute("id", a), s.appendChild(r), this.globalData.defs.appendChild(s), this.checkMasks() ? ((s = createNS("g")).setAttribute("clip-path", "url(" + locationHref + "#" + a + ")"), s.appendChild(this.layerElement), this.transformedElement = s, o ? o.appendChild(this.transformedElement) : this.baseElement = this.transformedElement) : this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + a + ")")), 0 !== this.data.bm && this.setBlendMode() }, renderElement: function() { this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v) }, destroyBaseElement: function() { this.layerElement = null, this.matteElement = null, this.maskManager.destroy() }, getBaseElement: function() { return this.data.hd ? null : this.baseElement }, createRenderableComponents: function() { this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this) }, setMatte: function(t) { this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")") } }, IShapeElement.prototype = { addShapeToModifiers: function(t) { for (var e = this.shapeModifiers.length, n = 0; n < e; n += 1) this.shapeModifiers[n].addShape(t) }, isShapeInAnimatedModifiers: function(t) { for (var e = this.shapeModifiers.length; 0 < e;)
                    if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                return !1 }, renderModifiers: function() { if (this.shapeModifiers.length) { for (var t = this.shapes.length, e = 0; e < t; e += 1) this.shapes[e].sh.reset(); for (e = (t = this.shapeModifiers.length) - 1; 0 <= e && !this.shapeModifiers[e].processShapes(this._isFirstFrame); --e); } }, searchProcessedElement: function(t) { for (var e = this.processedElements, n = 0, i = e.length; n < i;) { if (e[n].elem === t) return e[n].pos;
                    n += 1 } return 0 }, addProcessedElement: function(t, e) { for (var n = this.processedElements, i = n.length; i;)
                    if (n[--i].elem === t) return void(n[i].pos = e);
                n.push(new ProcessedElement(t, e)) }, prepareFrame: function(t) { this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange) } }, ITextElement.prototype.initElement = function(t, e, n) { this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, n), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties) }, ITextElement.prototype.prepareFrame = function(t) { this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1) }, ITextElement.prototype.createPathShape = function(t, e) { for (var n, i = e.length, r = "", a = 0; a < i; a += 1) n = e[a].ks.k, r += buildShapeString(n, n.i.length, !0, t); return r }, ITextElement.prototype.updateDocumentData = function(t, e) { this.textProperty.updateDocumentData(t, e) }, ITextElement.prototype.canResizeFont = function(t) { this.textProperty.canResizeFont(t) }, ITextElement.prototype.setMinimumFontSize = function(t) { this.textProperty.setMinimumFontSize(t) }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, n, i, r) { switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[n]), 0, 0); break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[n]) / 2, 0, 0) }
            e.translate(i, r, 0) }, ITextElement.prototype.buildColor = function(t) { return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")" }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, n) { this.initFrame(), this.initBaseData(t, e, n), this.initTransform(t, e, n), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide() }, ICompElement.prototype.prepareFrame = function(t) { if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) { var e;
                this.tm._placeholder ? this.renderedFrame = t / this.data.sr : ((n = this.tm.v) === this.data.op && (n = this.data.op - 1), this.renderedFrame = n); var n = this.elements.length; for (this.completeLayers || this.checkLayers(this.renderedFrame), e = n - 1; 0 <= e; --e)(this.completeLayers || this.elements[e]) && (this.elements[e].prepareFrame(this.renderedFrame - this.layers[e].st), this.elements[e]._mdf && (this._mdf = !0)) } }, ICompElement.prototype.renderInnerContent = function() { for (var t = this.layers.length, e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame() }, ICompElement.prototype.setElements = function(t) { this.elements = t }, ICompElement.prototype.getElements = function() { return this.elements }, ICompElement.prototype.destroyElements = function() { for (var t = this.layers.length, e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy() }, ICompElement.prototype.destroy = function() { this.destroyElements(), this.destroyBaseElement() }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() { var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem) }, IImageElement.prototype.sourceRectAtTime = function() { return this.sourceRect }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() { var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t) }, AudioElement.prototype.prepareFrame = function(t) { this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder ? this._currentTime = t / this.data.sr : (t = this.tm.v, this._currentTime = t) }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() { this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || .1 < Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek())) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0)) }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() { this.audio.pause(), this._isPlaying = !1 }, AudioElement.prototype.pause = function() { this.audio.pause(), this._isPlaying = !1, this._canPlay = !1 }, AudioElement.prototype.resume = function() { this._canPlay = !0 }, AudioElement.prototype.setRate = function(t) { this.audio.rate(t) }, AudioElement.prototype.volume = function(t) { this.audio.volume(t) }, AudioElement.prototype.getBaseElement = function() { return null }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() { return null }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() { this.layerInterface = FootageInterface(this) }, FootageElement.prototype.getFootageData = function() { return this.footageData }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() { this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text")) }, SVGTextLottieElement.prototype.buildTextContents = function(t) { for (var e = 0, n = t.length, i = [], r = ""; e < n;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(r), r = "") : r += t[e], e += 1; return i.push(r), i }, SVGTextLottieElement.prototype.buildNewText = function() { var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t ? t.l.length : 0), t.fc ? this.layerElement.setAttribute("fill", this.buildColor(t.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), t.sc && (this.layerElement.setAttribute("stroke", this.buildColor(t.sc)), this.layerElement.setAttribute("stroke-width", t.sw)), this.layerElement.setAttribute("font-size", t.finalSize); var e, n, i = this.globalData.fontManager.getFontByName(t.f);
            i.fClass ? this.layerElement.setAttribute("class", i.fClass) : (this.layerElement.setAttribute("font-family", i.fFamily), e = t.fWeight, n = t.fStyle, this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", e)), this.layerElement.setAttribute("aria-label", t.t); var r, a = t.l || [],
                s = !!this.globalData.fontManager.chars;
            E = a.length; var o = this.mHelper,
                l = "",
                c = this.data.singleShape,
                u = 0,
                d = 0,
                h = !0,
                f = .001 * t.tr * t.finalSize; if (!c || s || t.sz) { var p, m = this.textSpans.length; for (b = 0; b < E; b += 1) s && c && 0 !== b || (r = b < m ? this.textSpans[b] : createNS(s ? "path" : "text"), m <= b && (r.setAttribute("stroke-linecap", "butt"), r.setAttribute("stroke-linejoin", "round"), r.setAttribute("stroke-miterlimit", "4"), this.textSpans[b] = r, this.layerElement.appendChild(r)), r.style.display = "inherit"), o.reset(), o.scale(t.finalSize / 100, t.finalSize / 100), c && (a[b].n && (u = -f, d += t.yOffset, d += h ? 1 : 0, h = !1), this.applyTextPropertiesToMatrix(t, o, a[b].line, u, d), u += a[b].l || 0, u += f), s ? (p = (p = (p = this.globalData.fontManager.getCharData(t.finalText[b], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && p.data || {}).shapes ? p.shapes[0].it : [], c ? l += this.createPathShape(o, p) : r.setAttribute("d", this.createPathShape(o, p))) : (c && r.setAttribute("transform", "translate(" + o.props[12] + "," + o.props[13] + ")"), r.textContent = a[b].val, r.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                c && r && r.setAttribute("d", l) } else { var g = this.textContainer,
                    y = "start"; switch (t.j) {
                    case 1:
                        y = "end"; break;
                    case 2:
                        y = "middle"; break;
                    default:
                        y = "start" }
                g.setAttribute("text-anchor", y), g.setAttribute("letter-spacing", f); for (var v = this.buildTextContents(t.finalText), E = v.length, d = t.ps ? t.ps[1] + t.ascent : 0, b = 0; b < E; b += 1)(r = this.textSpans[b] || createNS("tspan")).textContent = v[b], r.setAttribute("x", 0), r.setAttribute("y", d), r.style.display = "inherit", g.appendChild(r), this.textSpans[b] = r, d += t.finalLineHeight;
                this.layerElement.appendChild(g) } for (; b < this.textSpans.length;) this.textSpans[b].style.display = "none", b += 1;
            this._sizeChanged = !0 }, SVGTextLottieElement.prototype.sourceRectAtTime = function() { var t; return this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged && (this._sizeChanged = !1, t = this.layerElement.getBBox(), this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height }), this.bbox }, SVGTextLottieElement.prototype.renderInnerContent = function() { if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) { this._sizeChanged = !0; for (var t, e, n = this.textAnimator.renderedLetters, i = this.textProperty.currentData.l, r = i.length, a = 0; a < r; a += 1) i[a].n || (t = n[a], e = this.textSpans[a], t._mdf.m && e.setAttribute("transform", t.m), t._mdf.o && e.setAttribute("opacity", t.o), t._mdf.sw && e.setAttribute("stroke-width", t.sw), t._mdf.sc && e.setAttribute("stroke", t.sc), t._mdf.fc && e.setAttribute("fill", t.fc)) } }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() { this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes() }, SVGShapeElement.prototype.filterUniqueShapes = function() { for (var t, e, n, i = this.shapes.length, r = this.stylesList.length, a = [], s = !1, o = 0; o < r; o += 1) { for (n = this.stylesList[o], s = !1, t = a.length = 0; t < i; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(n) && (a.push(e), s = e._isAnimated || s);
                1 < a.length && s && this.setShapesAsAnimated(a) } }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) { for (var e = t.length, n = 0; n < e; n += 1) t[n].setAsAnimated() }, SVGShapeElement.prototype.createStyleElement = function(t, e) { var n, i = new SVGStyleData(t, e),
                e = i.pElem; return "st" === t.ty ? n = new SVGStrokeStyleData(this, t, i) : "fl" === t.ty ? n = new SVGFillStyleData(this, t, i) : "gf" !== t.ty && "gs" !== t.ty || (n = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(n.gf), n.maskId && (this.globalData.defs.appendChild(n.ms), this.globalData.defs.appendChild(n.of), e.setAttribute("mask", "url(" + locationHref + "#" + n.maskId + ")"))), "st" !== t.ty && "gs" !== t.ty || (e.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), e.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), e.setAttribute("fill-opacity", "0"), 1 === t.lj && e.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && e.setAttribute("fill-rule", "evenodd"), t.ln && e.setAttribute("id", t.ln), t.cl && e.setAttribute("class", t.cl), t.bm && (e.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, n), n }, SVGShapeElement.prototype.createGroupElement = function(t) { var e = new ShapeGroupData; return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e }, SVGShapeElement.prototype.createTransformElement = function(t, e) { var n = TransformPropertyFactory.getTransformProperty(this, t, this),
                e = new SVGTransformData(n, n.o, e); return this.addToAnimatedContents(t, e), e }, SVGShapeElement.prototype.createShapeElement = function(t, e, n) { var i = 4; "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
            i = new SVGShapeData(e, n, ShapePropertyFactory.getShapeProp(this, t, i, this)); return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(t, i), i }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) { for (var n = 0, i = this.animatedContents.length; n < i;) { if (this.animatedContents[n].element === e) return;
                n += 1 }
            this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t }) }, SVGShapeElement.prototype.setElementStyles = function(t) { for (var e = t.styles, n = this.stylesList.length, i = 0; i < n; i += 1) this.stylesList[i].closed || e.push(this.stylesList[i]) }, SVGShapeElement.prototype.reloadShapes = function() { this._isFirstFrame = !0; for (var t = this.itemsData.length, e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e]; for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
            this.renderModifiers() }, SVGShapeElement.prototype.searchShapes = function(t, e, n, i, r, a, s) { for (var o, l, c, u, d, h = [].concat(a), f = t.length - 1, p = [], m = [], g = f; 0 <= g; --g) { if ((d = this.searchProcessedElement(t[g])) ? e[g] = n[d - 1] : t[g]._render = s, "fl" === t[g].ty || "st" === t[g].ty || "gf" === t[g].ty || "gs" === t[g].ty) d ? e[g].style.closed = !1 : e[g] = this.createStyleElement(t[g], r), t[g]._render && i.appendChild(e[g].style.pElem), p.push(e[g].style);
                else if ("gr" === t[g].ty) { if (d)
                        for (l = e[g].it.length, o = 0; o < l; o += 1) e[g].prevViewData[o] = e[g].it[o];
                    else e[g] = this.createGroupElement(t[g]);
                    this.searchShapes(t[g].it, e[g].it, e[g].prevViewData, e[g].gr, r + 1, h, s), t[g]._render && i.appendChild(e[g].gr) } else "tr" === t[g].ty ? (d || (e[g] = this.createTransformElement(t[g], i)), c = e[g].transform, h.push(c)) : "sh" === t[g].ty || "rc" === t[g].ty || "el" === t[g].ty || "sr" === t[g].ty ? (d || (e[g] = this.createShapeElement(t[g], h, r)), this.setElementStyles(e[g])) : "tm" === t[g].ty || "rd" === t[g].ty || "ms" === t[g].ty || "pb" === t[g].ty ? (d ? (u = e[g]).closed = !1 : ((u = ShapeModifiers.getModifier(t[g].ty)).init(this, t[g]), e[g] = u, this.shapeModifiers.push(u)), m.push(u)) : "rp" === t[g].ty && (d ? (u = e[g]).closed = !0 : (u = ShapeModifiers.getModifier(t[g].ty), (e[g] = u).init(this, t, g, e), this.shapeModifiers.push(u), s = !1), m.push(u));
                this.addProcessedElement(t[g], g + 1) } for (f = p.length, g = 0; g < f; g += 1) p[g].closed = !0; for (f = m.length, g = 0; g < f; g += 1) m[g].closed = !0 }, SVGShapeElement.prototype.renderInnerContent = function() { this.renderModifiers(); for (var t = this.stylesList.length, e = 0; e < t; e += 1) this.stylesList[e].reset(); for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0")) }, SVGShapeElement.prototype.renderShape = function() { for (var t, e = this.animatedContents.length, n = 0; n < e; n += 1) t = this.animatedContents[n], (this._isFirstFrame || t.element._isAnimated) && !0 !== t.data && t.fn(t.data, t.element, this._isFirstFrame) }, SVGShapeElement.prototype.destroy = function() { this.destroyBaseElement(), this.shapesData = null, this.itemsData = null }, SVGTintFilter.prototype.renderFrame = function(t) { var e, n;
            (t || this.filterManager._mdf) && (e = this.filterManager.effectElements[0].p.v, n = this.filterManager.effectElements[1].p.v, t = this.filterManager.effectElements[2].p.v / 100, this.matrixFilter.setAttribute("values", n[0] - e[0] + " 0 0 0 " + e[0] + " " + (n[1] - e[1]) + " 0 0 0 " + e[1] + " " + (n[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + t + " 0")) }, SVGFillFilter.prototype.renderFrame = function(t) { var e;
            (t || this.filterManager._mdf) && (e = this.filterManager.effectElements[2].p.v, t = this.filterManager.effectElements[6].p.v, this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + t + " 0")) }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) { var e, n;
            (t || this.filterManager._mdf) && (n = .3 * this.filterManager.effectElements[0].p.v, t = 3 == (e = this.filterManager.effectElements[1].p.v) ? 0 : n, n = 2 == e ? 0 : n, this.feGaussianBlur.setAttribute("stdDeviation", t + " " + n), n = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate", this.feGaussianBlur.setAttribute("edgeMode", n)) }, SVGStrokeEffect.prototype.initialize = function() { var t, e, n, i, r = this.elem.layerElement.children || this.elem.layerElement.childNodes; for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, n = 0) : i = (n = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); n < i; n += 1) t = createNS("path"), e.appendChild(t), this.paths.push({ p: t, m: n }); if (3 === this.filterManager.effectElements[10].p.v) { var a = createNS("mask"),
                    s = createElementID();
                a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a); var o = createNS("g"); for (o.setAttribute("mask", "url(" + locationHref + "#" + s + ")"); r[0];) o.appendChild(r[0]);
                this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff") } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) { if (2 === this.filterManager.effectElements[10].p.v)
                    for (r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length;) this.elem.layerElement.removeChild(r[0]);
                this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff") }
            this.initialized = !0, this.pathMasker = e }, SVGStrokeEffect.prototype.renderFrame = function(t) { this.initialized || this.initialize(); for (var e, n, i = this.paths.length, r = 0; r < i; r += 1)
                if (-1 !== this.paths[r].m && (o = this.elem.maskManager.viewData[this.paths[r].m], e = this.paths[r].p, (t || this.filterManager._mdf || o.prop._mdf) && e.setAttribute("d", o.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || o.prop._mdf)) { if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) { for (var a = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), s = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), o = e.getTotalLength(), l = "0 0 0 " + o * a + " ", s = o * (s - a), a = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01, c = Math.floor(s / a), u = 0; u < c; u += 1) l += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                        l += "0 " + 10 * o + " 0 0" } else l = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                    e.setAttribute("stroke-dasharray", l) }(t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), 1 !== this.filterManager.effectElements[10].p.v && 2 !== this.filterManager.effectElements[10].p.v || (t || this.filterManager.effectElements[3].p._mdf) && (n = this.filterManager.effectElements[3].p.v, this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * n[0]) + "," + bmFloor(255 * n[1]) + "," + bmFloor(255 * n[2]) + ")")) }, SVGTritoneFilter.prototype.renderFrame = function(t) { var e, n, i, r;
            (t || this.filterManager._mdf) && (r = this.filterManager.effectElements[0].p.v, e = this.filterManager.effectElements[1].p.v, i = (n = this.filterManager.effectElements[2].p.v)[0] + " " + e[0] + " " + r[0], t = n[1] + " " + e[1] + " " + r[1], r = n[2] + " " + e[2] + " " + r[2], this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", t), this.feFuncB.setAttribute("tableValues", r)) }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) { t = createNS(t); return t.setAttribute("type", "table"), e.appendChild(t), t }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, n, i, r) { for (var a, s = 0, o = Math.min(t, e), l = Math.max(t, e), c = Array.call(null, { length: 256 }), u = 0, d = r - i, h = e - t; s <= 256;) a = (a = s / 256) <= o ? h < 0 ? r : i : l <= a ? h < 0 ? i : r : i + d * Math.pow((a - t) / h, 1 / n), c[u] = a, u += 1, s += 256 / 255; return c.join(" ") }, SVGProLevelsFilter.prototype.renderFrame = function(t) { var e, n;
            (t || this.filterManager._mdf) && (n = this.filterManager.effectElements, this.feFuncRComposed && (t || n[3].p._mdf || n[4].p._mdf || n[5].p._mdf || n[6].p._mdf || n[7].p._mdf) && (e = this.getTableValue(n[3].p.v, n[4].p.v, n[5].p.v, n[6].p.v, n[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || n[10].p._mdf || n[11].p._mdf || n[12].p._mdf || n[13].p._mdf || n[14].p._mdf) && (e = this.getTableValue(n[10].p.v, n[11].p.v, n[12].p.v, n[13].p.v, n[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || n[17].p._mdf || n[18].p._mdf || n[19].p._mdf || n[20].p._mdf || n[21].p._mdf) && (e = this.getTableValue(n[17].p.v, n[18].p.v, n[19].p.v, n[20].p.v, n[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || n[24].p._mdf || n[25].p._mdf || n[26].p._mdf || n[27].p._mdf || n[28].p._mdf) && (e = this.getTableValue(n[24].p.v, n[25].p.v, n[26].p.v, n[27].p.v, n[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || n[31].p._mdf || n[32].p._mdf || n[33].p._mdf || n[34].p._mdf || n[35].p._mdf) && (e = this.getTableValue(n[31].p.v, n[32].p.v, n[33].p.v, n[34].p.v, n[35].p.v), this.feFuncA.setAttribute("tableValues", e))) }, SVGDropShadowEffect.prototype.renderFrame = function(t) { var e, n;
            (t || this.filterManager._mdf) && ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), (t || this.filterManager.effectElements[0].p._mdf) && (n = this.filterManager.effectElements[0].p.v, this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * n[0]), Math.round(255 * n[1]), Math.round(255 * n[2])))), (t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), (t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) && (e = this.filterManager.effectElements[3].p.v, n = (this.filterManager.effectElements[2].p.v - 90) * degToRads, t = e * Math.cos(n), n = e * Math.sin(n), this.feOffset.setAttribute("dx", t), this.feOffset.setAttribute("dy", n))) }; var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, n) { this.initialized = !1, this.filterManager = e, this.filterElem = t, (this.elem = n).matteElement = createNS("g"), n.matteElement.appendChild(n.layerElement), n.matteElement.appendChild(n.transformedElement), n.baseElement = n.matteElement }

        function SVGEffects(t) { var e, n, i = t.data.ef ? t.data.ef.length : 0,
                r = createElementID(),
                a = filtersFactory.createFilter(r, !0),
                s = 0; for (this.filters = [], e = 0; e < i; e += 1) n = null, 20 === t.data.ef[e].ty ? (s += 1, n = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (s += 1, n = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? n = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (s += 1, n = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (s += 1, n = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (s += 1, n = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? n = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (s += 1, n = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e])), n && this.filters.push(n);
            s && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this) }

        function CVContextData() { var t;
            this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1; for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
            this._length = 15 }

        function CVBaseElement() {}

        function CVImageElement(t, e, n) { this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, n) }

        function CVCompElement(t, e, n) { this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, n), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } }

        function CVMaskElement(t, e) { this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length); for (var n = this.masksProperties.length, i = !1, r = 0; r < n; r += 1) "n" !== this.masksProperties[r].mode && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
            (this.hasMasks = i) && this.element.addRenderableComponent(this) }

        function CVShapeElement(t, e, n) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, n) }

        function CVSolidElement(t, e, n) { this.initElement(t, e, n) }

        function CVTextElement(t, e, n) { this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(t, e, n) }

        function CVEffects() {}

        function HBaseElement() {}

        function HSolidElement(t, e, n) { this.initElement(t, e, n) }

        function HCompElement(t, e, n) { this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, n), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } }

        function HShapeElement(t, e, n) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, n), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 } }

        function HTextElement(t, e, n) { this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, n) }

        function HImageElement(t, e, n) { this.assetData = e.getAssetData(t.refId), this.initElement(t, e, n) }

        function HCameraElement(t, e, n) { this.initFrame(), this.initBaseData(t, e, n), this.initHierarchy();
            n = PropertyFactory.getProp; if (this.pe = n(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = n(this, t.ks.p.x, 1, 0, this), this.py = n(this, t.ks.p.y, 1, 0, this), this.pz = n(this, t.ks.p.z, 1, 0, this)) : this.p = n(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = n(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to)
                for (var i = t.ks.or.k.length, r = 0; r < i; r += 1) t.ks.or.k[r].to = null, t.ks.or.k[r].ti = null;
            this.or = n(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, t.ks.rx, 0, degToRads, this), this.ry = n(this, t.ks.ry, 0, degToRads, this), this.rz = n(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = { mProp: this } }

        function HEffects() {}
        SVGMatte3Effect.prototype.findSymbol = function(t) { for (var e = 0, n = _svgMatteSymbols.length; e < n;) { if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                e += 1 } return null }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) { var n = t.layerElement.parentNode; if (n) { for (var i, r = n.children, a = 0, s = r.length; a < s && r[a] !== t.layerElement;) a += 1;
                a <= s - 2 && (i = r[a + 1]); var o = createNS("use");
                o.setAttribute("href", "#" + e), i ? n.insertBefore(o, i) : n.appendChild(o) } }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) { var n, i, r, a;
            this.findSymbol(e) || (n = createElementID(), (i = createNS("mask")).setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e), (r = t.globalData.defs).appendChild(i), (a = createNS("symbol")).setAttribute("id", n), this.replaceInParent(e, n), a.appendChild(e.layerElement), r.appendChild(a), (a = createNS("use")).setAttribute("href", "#" + n), i.appendChild(a), e.data.hd = !1, e.show()), t.setMatte(e.layerId) }, SVGMatte3Effect.prototype.initialize = function() { for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, n = 0, i = e.length; n < i;) e[n] && e[n].data.ind === t && this.setElementAsMask(this.elem, e[n]), n += 1;
            this.initialized = !0 }, SVGMatte3Effect.prototype.renderFrame = function() { this.initialized || this.initialize() }, SVGEffects.prototype.renderFrame = function(t) { for (var e = this.filters.length, n = 0; n < e; n += 1) this.filters[n].renderFrame(t) }, CVContextData.prototype.duplicate = function() { var t = 2 * this._length,
                e = this.savedOp;
            this.savedOp = createTypedArray("float32", t), this.savedOp.set(e); for (var n = 0, n = this._length; n < t; n += 1) this.saved[n] = createTypedArray("float32", 16);
            this._length = t }, CVContextData.prototype.reset = function() { this.cArrPos = 0, this.cTr.reset(), this.cO = 1 }, CVBaseElement.prototype = { createElements: function() {}, initRendererElement: function() {}, createContainerElements: function() { this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this) }, createContent: function() {}, setBlendMode: function() { var t, e = this.globalData;
                e.blendMode !== this.data.bm && (e.blendMode = this.data.bm, t = getBlendMode(this.data.bm), e.canvasContext.globalCompositeOperation = t) }, createRenderableComponents: function() { this.maskManager = new CVMaskElement(this.data, this) }, hideElement: function() { this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0) }, showElement: function() { this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0) }, renderFrame: function() { var t;
                this.hidden || this.data.hd || (this.renderTransform(), this.renderRenderable(), this.setBlendMode(), t = 0 === this.data.ty, this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)) }, destroy: function() { this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy() }, mHelper: new Matrix }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() { var t, e, n, i, r, a, s, o, l;!this.img.width || this.assetData.w === this.img.width && this.assetData.h === this.img.height || ((t = createTag("canvas")).width = this.assetData.w, t.height = this.assetData.h, e = t.getContext("2d"), r = (n = this.img.width) / (i = this.img.height), a = this.assetData.w / this.assetData.h, l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio, a < r && "xMidYMid slice" === l || r < a && "xMidYMid slice" !== l ? s = (o = i) * a : o = (s = n) / a, e.drawImage(this.img, (n - s) / 2, (i - o) / 2, s, o, 0, 0, this.assetData.w, this.assetData.h), this.img = t) }, CVImageElement.prototype.renderInnerContent = function() { this.canvasContext.drawImage(this.img, 0, 0) }, CVImageElement.prototype.destroy = function() { this.img = null }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() { var t = this.canvasContext;
            t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(); for (var e = this.layers.length - 1; 0 <= e; --e)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame() }, CVCompElement.prototype.destroy = function() { for (var t = this.layers.length - 1; 0 <= t; --t) this.elements[t] && this.elements[t].destroy();
            this.layers = null, this.elements = null }, CVMaskElement.prototype.renderFrame = function() { if (this.hasMasks) { var t, e, n, i, r = this.element.finalTransform.mat,
                    a = this.element.canvasContext,
                    s = this.masksProperties.length; for (a.beginPath(), t = 0; t < s; t += 1)
                    if ("n" !== this.masksProperties[t].mode) { this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[t].v, e = r.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(e[0], e[1]); for (var o = i._length, l = 1; l < o; l += 1) n = r.applyToTriplePoints(i.o[l - 1], i.i[l], i.v[l]), a.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                        n = r.applyToTriplePoints(i.o[l - 1], i.i[0], i.v[0]), a.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]) }
                this.element.globalData.renderer.save(!0), a.clip() } }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() { this.element = null }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() { this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []) }, CVShapeElement.prototype.createStyleElement = function(t, e) { var n = { data: t, type: t.ty, preTransforms: this.transformsManager.addTransformSequence(e), transforms: [], elements: [], closed: !0 === t.hd },
                i = {}; return "fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (n.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty ? (n.lc = lineCapEnum[t.lc || 2], n.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (n.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (n.wi = i.w.v), t.d && (e = new DashProperty(this, t.d, "canvas", this), i.d = e, i.d.k || (n.da = i.d.dashArray, n.do = i.d.dashoffset[0]))) : n.r = 2 === t.r ? "evenodd" : "nonzero", this.stylesList.push(n), i.style = n, i }, CVShapeElement.prototype.createGroupElement = function() { return { it: [], prevViewData: [] } }, CVShapeElement.prototype.createTransformElement = function(t) { return { transform: { opacity: 1, _opMdf: !1, key: this.transformsManager.getNewKey(), op: PropertyFactory.getProp(this, t.o, 0, .01, this), mProps: TransformPropertyFactory.getTransformProperty(this, t, this) } } }, CVShapeElement.prototype.createShapeElement = function(t) { t = new CVShapeData(this, t, this.stylesList, this.transformsManager); return this.shapes.push(t), this.addShapeToModifiers(t), t }, CVShapeElement.prototype.reloadShapes = function() { this._isFirstFrame = !0; for (var t = this.itemsData.length, e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e]; for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame) }, CVShapeElement.prototype.addTransformToStyleList = function(t) { for (var e = this.stylesList.length, n = 0; n < e; n += 1) this.stylesList[n].closed || this.stylesList[n].transforms.push(t) }, CVShapeElement.prototype.removeTransformFromStyleList = function() { for (var t = this.stylesList.length, e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop() }, CVShapeElement.prototype.closeStyles = function(t) { for (var e = t.length, n = 0; n < e; n += 1) t[n].closed = !0 }, CVShapeElement.prototype.searchShapes = function(t, e, n, i, r) { for (var a, s, o, l, c, u = t.length - 1, d = [], h = [], f = [].concat(r), p = u; 0 <= p; --p) { if ((o = this.searchProcessedElement(t[p])) ? e[p] = n[o - 1] : t[p]._shouldRender = i, "fl" === t[p].ty || "st" === t[p].ty || "gf" === t[p].ty || "gs" === t[p].ty) o ? e[p].style.closed = !1 : e[p] = this.createStyleElement(t[p], f), d.push(e[p].style);
                else if ("gr" === t[p].ty) { if (o)
                        for (s = e[p].it.length, a = 0; a < s; a += 1) e[p].prevViewData[a] = e[p].it[a];
                    else e[p] = this.createGroupElement(t[p]);
                    this.searchShapes(t[p].it, e[p].it, e[p].prevViewData, i, f) } else "tr" === t[p].ty ? (o || (c = this.createTransformElement(t[p]), e[p] = c), f.push(e[p]), this.addTransformToStyleList(e[p])) : "sh" === t[p].ty || "rc" === t[p].ty || "el" === t[p].ty || "sr" === t[p].ty ? o || (e[p] = this.createShapeElement(t[p])) : "tm" === t[p].ty || "rd" === t[p].ty || "pb" === t[p].ty ? (o ? (l = e[p]).closed = !1 : ((l = ShapeModifiers.getModifier(t[p].ty)).init(this, t[p]), e[p] = l, this.shapeModifiers.push(l)), h.push(l)) : "rp" === t[p].ty && (o ? (l = e[p]).closed = !0 : (l = ShapeModifiers.getModifier(t[p].ty), (e[p] = l).init(this, t, p, e), this.shapeModifiers.push(l), i = !1), h.push(l));
                this.addProcessedElement(t[p], p + 1) } for (this.removeTransformFromStyleList(), this.closeStyles(d), u = h.length, p = 0; p < u; p += 1) h[p].closed = !0 }, CVShapeElement.prototype.renderInnerContent = function() { this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0) }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0) }, CVShapeElement.prototype.drawLayer = function() { for (var t, e, n, i, r, a, s, o, l = this.stylesList.length, c = this.globalData.renderer, u = this.globalData.canvasContext, d = 0; d < l; d += 1)
                if (("st" !== (s = (o = this.stylesList[d]).type) && "gs" !== s || 0 !== o.wi) && o.data._shouldRender && 0 !== o.coOp && 0 !== this.globalData.currentGlobalAlpha) { for (c.save(), r = o.elements, "st" === s || "gs" === s ? (u.strokeStyle = "st" === s ? o.co : o.grd, u.lineWidth = o.wi, u.lineCap = o.lc, u.lineJoin = o.lj, u.miterLimit = o.ml || 0) : u.fillStyle = "fl" === s ? o.co : o.grd, c.ctxOpacity(o.coOp), "st" !== s && "gs" !== s && u.beginPath(), c.ctxTransform(o.preTransforms.finalTransform.props), e = r.length, t = 0; t < e; t += 1) { for ("st" !== s && "gs" !== s || (u.beginPath(), o.da && (u.setLineDash(o.da), u.lineDashOffset = o.do)), i = (a = r[t].trNodes).length, n = 0; n < i; n += 1) "m" === a[n].t ? u.moveTo(a[n].p[0], a[n].p[1]) : "c" === a[n].t ? u.bezierCurveTo(a[n].pts[0], a[n].pts[1], a[n].pts[2], a[n].pts[3], a[n].pts[4], a[n].pts[5]) : u.closePath(); "st" !== s && "gs" !== s || (u.stroke(), o.da && u.setLineDash(this.dashResetter)) } "st" !== s && "gs" !== s && u.fill(o.r), c.restore() } }, CVShapeElement.prototype.renderShape = function(t, e, n, i) { for (var r = t, a = e.length - 1; 0 <= a; --a) "tr" === e[a].ty ? (r = n[a].transform, this.renderShapeTransform(t, r)) : "sh" === e[a].ty || "el" === e[a].ty || "rc" === e[a].ty || "sr" === e[a].ty ? this.renderPath(e[a], n[a]) : "fl" === e[a].ty ? this.renderFill(e[a], n[a], r) : "st" === e[a].ty ? this.renderStroke(e[a], n[a], r) : "gf" === e[a].ty || "gs" === e[a].ty ? this.renderGradientFill(e[a], n[a], r) : "gr" === e[a].ty ? this.renderShape(r, e[a].it, n[a].it) : e[a].ty;
            i && this.drawLayer() }, CVShapeElement.prototype.renderStyledShape = function(t, e) { if (this._isFirstFrame || e._mdf || t.transforms._mdf) { var n, i, r = t.trNodes,
                    a = e.paths,
                    s = a._length;
                r.length = 0; for (var o = t.transforms.finalTransform, l = 0; l < s; l += 1) { var c = a.shapes[l]; if (c && c.v) { for (i = c._length, n = 1; n < i; n += 1) 1 === n && r.push({ t: "m", p: o.applyToPointArray(c.v[0][0], c.v[0][1], 0) }), r.push({ t: "c", pts: o.applyToTriplePoints(c.o[n - 1], c.i[n], c.v[n]) });
                        1 === i && r.push({ t: "m", p: o.applyToPointArray(c.v[0][0], c.v[0][1], 0) }), c.c && i && (r.push({ t: "c", pts: o.applyToTriplePoints(c.o[n - 1], c.i[0], c.v[0]) }), r.push({ t: "z" })) } }
                t.trNodes = r } }, CVShapeElement.prototype.renderPath = function(t, e) { if (!0 !== t.hd && t._shouldRender)
                for (var n = e.styledShapes.length, i = 0; i < n; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh) }, CVShapeElement.prototype.renderFill = function(t, e, n) { var i = e.style;
            (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || n._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * n.opacity) }, CVShapeElement.prototype.renderGradientFill = function(t, e, n) { var i = e.style; if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) { var r, a, s, o, l = this.globalData.canvasContext,
                    c = e.s.v,
                    u = e.e.v;
                o = 1 === t.t ? l.createLinearGradient(c[0], c[1], u[0], u[1]) : (r = Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2)), a = Math.atan2(u[1] - c[1], u[0] - c[0]), 1 <= (s = e.h.v) ? s = .99 : s <= -1 && (s = -.99), u = r * s, s = Math.cos(a + e.a.v) * u + c[0], u = Math.sin(a + e.a.v) * u + c[1], l.createRadialGradient(s, u, 0, c[0], c[1], r)); for (var d = t.g.p, h = e.g.c, f = 1, p = 0; p < d; p += 1) e.g._hasOpacity && e.g._collapsable && (f = e.g.o[2 * p + 1]), o.addColorStop(h[4 * p] / 100, "rgba(" + h[4 * p + 1] + "," + h[4 * p + 2] + "," + h[4 * p + 3] + "," + f + ")");
                i.grd = o }
            i.coOp = e.o.v * n.opacity }, CVShapeElement.prototype.renderStroke = function(t, e, n) { var i = e.style,
                r = e.d;
            r && (r._mdf || this._isFirstFrame) && (i.da = r.dashArray, i.do = r.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || n._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * n.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v) }, CVShapeElement.prototype.destroy = function() { this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0 }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() { var t = this.canvasContext;
            t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh) }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() { var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0); var e = !1;
            t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
            e = !1;
            t.sc && (e = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw); var n, i, r, a, s, o, l, c, u, d, h = this.globalData.fontManager.getFontByName(t.f),
                f = t.l,
                p = this.mHelper;
            this.stroke = e, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, n = t.finalText.length; for (var m = this.data.singleShape, g = .001 * t.tr * t.finalSize, y = 0, v = 0, E = !0, b = 0, T = 0; T < n; T += 1) { for (i = (i = this.globalData.fontManager.getCharData(t.finalText[T], h.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && i.data || {}, p.reset(), m && f[T].n && (y = -g, v += t.yOffset, v += E ? 1 : 0, E = !1), l = (s = i.shapes ? i.shapes[0].it : []).length, p.scale(t.finalSize / 100, t.finalSize / 100), m && this.applyTextPropertiesToMatrix(t, p, f[T].line, y, v), u = createSizedArray(l), o = 0; o < l; o += 1) { for (a = s[o].ks.k.i.length, c = s[o].ks.k, d = [], r = 1; r < a; r += 1) 1 === r && d.push(p.applyToX(c.v[0][0], c.v[0][1], 0), p.applyToY(c.v[0][0], c.v[0][1], 0)), d.push(p.applyToX(c.o[r - 1][0], c.o[r - 1][1], 0), p.applyToY(c.o[r - 1][0], c.o[r - 1][1], 0), p.applyToX(c.i[r][0], c.i[r][1], 0), p.applyToY(c.i[r][0], c.i[r][1], 0), p.applyToX(c.v[r][0], c.v[r][1], 0), p.applyToY(c.v[r][0], c.v[r][1], 0));
                    d.push(p.applyToX(c.o[r - 1][0], c.o[r - 1][1], 0), p.applyToY(c.o[r - 1][0], c.o[r - 1][1], 0), p.applyToX(c.i[0][0], c.i[0][1], 0), p.applyToY(c.i[0][0], c.i[0][1], 0), p.applyToX(c.v[0][0], c.v[0][1], 0), p.applyToY(c.v[0][0], c.v[0][1], 0)), u[o] = d }
                m && (y += f[T].l, y += g), this.textSpans[b] ? this.textSpans[b].elem = u : this.textSpans[b] = { elem: u }, b += 1 } }, CVTextElement.prototype.renderInnerContent = function() { var t, e, n, i, r = this.canvasContext;
            r.font = this.values.fValue, r.lineCap = "butt", r.lineJoin = "miter", r.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag); for (var a, s, o, l = this.textAnimator.renderedLetters, c = this.textProperty.currentData.l, u = c.length, d = null, h = null, f = null, p = 0; p < u; p += 1)
                if (!c[p].n) { if ((a = l[p]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(a.p), this.globalData.renderer.ctxOpacity(a.o)), this.fill) { for (a && a.fc ? d !== a.fc && (d = a.fc, r.fillStyle = a.fc) : d !== this.values.fill && (d = this.values.fill, r.fillStyle = this.values.fill), e = (s = this.textSpans[p].elem).length, this.globalData.canvasContext.beginPath(), t = 0; t < e; t += 1)
                            for (i = (o = s[t]).length, this.globalData.canvasContext.moveTo(o[0], o[1]), n = 2; n < i; n += 6) this.globalData.canvasContext.bezierCurveTo(o[n], o[n + 1], o[n + 2], o[n + 3], o[n + 4], o[n + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill() } if (this.stroke) { for (a && a.sw ? f !== a.sw && (f = a.sw, r.lineWidth = a.sw) : f !== this.values.sWidth && (f = this.values.sWidth, r.lineWidth = this.values.sWidth), a && a.sc ? h !== a.sc && (h = a.sc, r.strokeStyle = a.sc) : h !== this.values.stroke && (h = this.values.stroke, r.strokeStyle = this.values.stroke), e = (s = this.textSpans[p].elem).length, this.globalData.canvasContext.beginPath(), t = 0; t < e; t += 1)
                            for (i = (o = s[t]).length, this.globalData.canvasContext.moveTo(o[0], o[1]), n = 2; n < i; n += 6) this.globalData.canvasContext.bezierCurveTo(o[n], o[n + 1], o[n + 2], o[n + 3], o[n + 4], o[n + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke() }
                    a && this.globalData.renderer.restore() } }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = { checkBlendMode: function() {}, initRendererElement: function() { this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement) }, createContainerElements: function() { this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode() }, renderElement: function() { var t, e = this.transformedElement ? this.transformedElement.style : {};
                this.finalTransform._matMdf && (t = this.finalTransform.mat.toCSS(), e.transform = t, e.webkitTransform = t), this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v) }, renderFrame: function() { this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1)) }, destroy: function() { this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null) }, createRenderableComponents: function() { this.maskManager = new MaskElement(this.data, this, this.globalData) }, addEffects: function() {}, setMatte: function() {} }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() { var t;
            this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t) }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() { this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement }, HCompElement.prototype.addTo3dContainer = function(t, e) { for (var n, i = 0; i < e;) this.elements[i] && this.elements[i].getBaseElement && (n = this.elements[i].getBaseElement()), i += 1;
            n ? this.layerElement.insertBefore(t, n) : this.layerElement.appendChild(t) }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() { var t, e;
            this.baseElement.style.fontSize = 0, this.data.hasMask ? (this.layerElement.appendChild(this.shapesContainer), t = this.svgElement) : (t = createNS("svg"), e = this.comp.data || this.globalData.compSize, t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)), this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t }, HShapeElement.prototype.getTransformedPoint = function(t, e) { for (var n = t.length, i = 0; i < n; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0); return e }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) { var n, i, r, a, s, o = t.sh.v,
                l = t.transformers,
                c = o._length; if (!(c <= 1)) { for (n = 0; n < c - 1; n += 1) i = this.getTransformedPoint(l, o.v[n]), r = this.getTransformedPoint(l, o.o[n]), a = this.getTransformedPoint(l, o.i[n + 1]), s = this.getTransformedPoint(l, o.v[n + 1]), this.checkBounds(i, r, a, s, e);
                o.c && (i = this.getTransformedPoint(l, o.v[n]), r = this.getTransformedPoint(l, o.o[n]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(i, r, a, s, e)) } }, HShapeElement.prototype.checkBounds = function(t, e, n, i, r) { this.getBoundsOfCurve(t, e, n, i);
            i = this.shapeBoundingBox;
            r.x = bmMin(i.left, r.x), r.xMax = bmMax(i.right, r.xMax), r.y = bmMin(i.top, r.y), r.yMax = bmMax(i.bottom, r.yMax) }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, n, i) { for (var r, a, s, o, l = [
                    [t[0], i[0]],
                    [t[1], i[1]]
                ], c = 0; c < 2; ++c) r = 6 * t[c] - 12 * e[c] + 6 * n[c], o = -3 * t[c] + 9 * e[c] - 9 * n[c] + 3 * i[c], s = 3 * e[c] - 3 * t[c], r |= 0, s |= 0, 0 == (o |= 0) && 0 == r || (0 == o ? 0 < (a = -s / r) && a < 1 && l[c].push(this.calculateF(a, t, e, n, i, c)) : 0 <= (a = r * r - 4 * s * o) && (0 < (s = (-r + bmSqrt(a)) / (2 * o)) && s < 1 && l[c].push(this.calculateF(s, t, e, n, i, c)), 0 < (o = (-r - bmSqrt(a)) / (2 * o)) && o < 1 && l[c].push(this.calculateF(o, t, e, n, i, c))));
            this.shapeBoundingBox.left = bmMin.apply(null, l[0]), this.shapeBoundingBox.top = bmMin.apply(null, l[1]), this.shapeBoundingBox.right = bmMax.apply(null, l[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, l[1]) }, HShapeElement.prototype.calculateF = function(t, e, n, i, r, a) { return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * n[a] + 3 * (1 - t) * bmPow(t, 2) * i[a] + bmPow(t, 3) * r[a] }, HShapeElement.prototype.calculateBoundingBox = function(t, e) { for (var n = t.length, i = 0; i < n; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e) }, HShapeElement.prototype.currentBoxContains = function(t) { return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height }, HShapeElement.prototype.renderInnerContent = function() { var t, e;
            this._renderShapeFrame(), this.hidden || !this._isFirstFrame && !this._mdf || (t = 999999, (e = this.tempBoundingBox).x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e) || (t = !1, this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), t = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), t = !0), !t && this.currentBBox.x === e.x && this.currentBBox.y === e.y || (this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.shapeCont.style, e = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)", t.transform = e, t.webkitTransform = e))) }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() { var t;
            this.isMasked = this.checkMasks(), this.isMasked ? (this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH), t = createNS("g"), this.maskedElement.appendChild(t), this.innerElem = t) : (this.renderType = "html", this.innerElem = this.layerElement), this.checkParenting() }, HTextElement.prototype.buildNewText = function() { var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0); var e = this.innerElem.style,
                n = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            e.fill = n, e.color = n, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px"); var i, r = this.globalData.fontManager.getFontByName(t.f);
            this.globalData.fontManager.chars || (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", r.fClass ? this.innerElem.className = r.fClass : (e.fontFamily = r.fFamily, i = t.fWeight, n = t.fStyle, e.fontStyle = n, e.fontWeight = i)); for (var a, s, o, l, c, u, d, h, f = t.l, p = f.length, m = this.mHelper, g = 0, y = 0; y < p; y += 1) this.globalData.fontManager.chars ? (this.textPaths[g] ? a = this.textPaths[g] : ((a = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), a.setAttribute("stroke-linejoin", lineJoinEnum[2]), a.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[g] ? o = (s = this.textSpans[g]).children[0] : ((s = createTag("div")).style.lineHeight = 0, (o = createNS("svg")).appendChild(a), styleDiv(s)))) : this.isMasked ? a = this.textPaths[g] || createNS("text") : this.textSpans[g] ? (s = this.textSpans[g], a = this.textPaths[g]) : (styleDiv(s = createTag("span")), styleDiv(a = createTag("span")), s.appendChild(a)), this.globalData.fontManager.chars ? (u = (c = this.globalData.fontManager.getCharData(t.finalText[y], r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) ? c.data : null, m.reset(), u && u.shapes && (c = u.shapes[0].it, m.scale(t.finalSize / 100, t.finalSize / 100), l = this.createPathShape(m, c), a.setAttribute("d", l)), this.isMasked ? this.innerElem.appendChild(a) : (this.innerElem.appendChild(s), u && u.shapes ? (document.body.appendChild(o), h = o.getBBox(), o.setAttribute("width", h.width + 2), o.setAttribute("height", h.height + 2), o.setAttribute("viewBox", h.x - 1 + " " + (h.y - 1) + " " + (h.width + 2) + " " + (h.height + 2)), u = o.style, d = "translate(" + (h.x - 1) + "px," + (h.y - 1) + "px)", u.transform = d, u.webkitTransform = d, f[y].yOffset = h.y - 1) : (o.setAttribute("width", 1), o.setAttribute("height", 1)), s.appendChild(o))) : (a.textContent = f[y].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(a) : (this.innerElem.appendChild(s), d = a.style, h = "translate3d(0," + -t.finalSize / 1.2 + "px,0)", d.transform = h, d.webkitTransform = h)), this.isMasked ? this.textSpans[g] = a : this.textSpans[g] = s, this.textSpans[g].style.display = "block", this.textPaths[g] = a, g += 1; for (; g < this.textSpans.length;) this.textSpans[g].style.display = "none", g += 1 }, HTextElement.prototype.renderInnerContent = function() { var t; if (this.data.singleShape) { if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style, r = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)", t.transform = r, t.webkitTransform = r) } if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) { for (var e, n, i, r, a = 0, s = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l, l = o.length, c = 0; c < l; c += 1) o[c].n ? a += 1 : (n = this.textSpans[c], i = this.textPaths[c], e = s[a], a += 1, e._mdf.m && (this.isMasked ? n.setAttribute("transform", e.m) : (n.style.webkitTransform = e.m, n.style.transform = e.m)), n.style.opacity = e.o, e.sw && e._mdf.sw && i.setAttribute("stroke-width", e.sw), e.sc && e._mdf.sc && i.setAttribute("stroke", e.sc), e.fc && e._mdf.fc && (i.setAttribute("fill", e.fc), i.style.color = e.fc));
                this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf) && (r = this.innerElem.getBBox(), this.currentBBox.w !== r.width && (this.currentBBox.w = r.width, this.svgElement.setAttribute("width", r.width)), this.currentBBox.h !== r.height && (this.currentBBox.h = r.height, this.svgElement.setAttribute("height", r.height)), this.currentBBox.w === r.width + 2 && this.currentBBox.h === r.height + 2 && this.currentBBox.x === r.x - 1 && this.currentBBox.y === r.y - 1 || (this.currentBBox.w = r.width + 2, this.currentBBox.h = r.height + 2, this.currentBBox.x = r.x - 1, this.currentBBox.y = r.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style, r = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)", t.transform = r, t.webkitTransform = r)) } }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() { var t = this.globalData.getAssetsPath(this.assetData),
                e = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln) }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() { for (var t, e, n, i, r, a = this.comp.threeDElements.length, s = 0; s < a; s += 1) "3d" === (r = this.comp.threeDElements[s]).type && (t = r.perspectiveElem.style, e = r.container.style, n = this.pe.v + "px", i = "0px 0px 0px", r = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)", t.perspective = n, t.webkitPerspective = n, e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, t.transform = r, t.webkitTransform = r) }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() { var t, e, n = this._isFirstFrame; if (this.hierarchy)
                for (l = this.hierarchy.length, c = 0; c < l; c += 1) n = this.hierarchy[c].finalTransform.mProp._mdf || n; if (n || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) { if (this.mat.reset(), this.hierarchy)
                    for (c = l = this.hierarchy.length - 1; 0 <= c; --c) { var i = this.hierarchy[c].finalTransform.mProp;
                        this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]) }
                this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a && (e = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]], t = Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2)), e = [e[0] / t, e[1] / t, e[2] / t], t = Math.sqrt(e[2] * e[2] + e[0] * e[0]), t = Math.atan2(e[1], t), e = Math.atan2(e[0], -e[2]), this.mat.rotateY(e).rotateX(-t)), this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v); var r = !this._prevMat.equals(this.mat); if ((r || this.pe._mdf) && this.comp.threeDElements) { for (var a, s, o, l = this.comp.threeDElements.length, c = 0; c < l; c += 1) "3d" === (o = this.comp.threeDElements[c]).type && (r && (a = this.mat.toCSS(), (s = o.container.style).transform = a, s.webkitTransform = a), this.pe._mdf && ((o = o.perspectiveElem.style).perspective = this.pe.v + "px", o.webkitPerspective = this.pe.v + "px"));
                    this.mat.clone(this._prevMat) } }
            this._isFirstFrame = !1 }, HCameraElement.prototype.prepareFrame = function(t) { this.prepareProperties(t, !0) }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() { return null }, HEffects.prototype.renderFrame = function() {}; var animationManager = (Bcb = {}, Ccb = [], Dcb = 0, Ecb = 0, Fcb = 0, Gcb = !0, Hcb = !1, Bcb.registerAnimation = Jcb, Bcb.loadAnimation = function(t) { var e = new AnimationItem; return Ncb(e, null), e.setParams(t), e }, Bcb.setSpeed = function(t, e) { for (var n = 0; n < Ecb; n += 1) Ccb[n].animation.setSpeed(t, e) }, Bcb.setDirection = function(t, e) { for (var n = 0; n < Ecb; n += 1) Ccb[n].animation.setDirection(t, e) }, Bcb.play = function(t) { for (var e = 0; e < Ecb; e += 1) Ccb[e].animation.play(t) }, Bcb.pause = function(t) { for (var e = 0; e < Ecb; e += 1) Ccb[e].animation.pause(t) }, Bcb.stop = function(t) { for (var e = 0; e < Ecb; e += 1) Ccb[e].animation.stop(t) }, Bcb.togglePause = function(t) { for (var e = 0; e < Ecb; e += 1) Ccb[e].animation.togglePause(t) }, Bcb.searchAnimations = function(t, e, n) { for (var i, r = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), a = r.length, s = 0; s < a; s += 1) n && r[s].setAttribute("data-bm-type", n), Jcb(r[s], t);
                e && 0 === a && (n = n || "svg", (i = document.getElementsByTagName("body")[0]).innerText = "", (e = createTag("div")).style.width = "100%", e.style.height = "100%", e.setAttribute("data-bm-type", n), i.appendChild(e), Jcb(e, t)) }, Bcb.resize = function() { for (var t = 0; t < Ecb; t += 1) Ccb[t].animation.resize() }, Bcb.goToAndStop = function(t, e, n) { for (var i = 0; i < Ecb; i += 1) Ccb[i].animation.goToAndStop(t, e, n) }, Bcb.destroy = function(t) { for (var e = Ecb - 1; 0 <= e; --e) Ccb[e].animation.destroy(t) }, Bcb.freeze = function() { Hcb = !0 }, Bcb.unfreeze = function() { Hcb = !1, _cb() }, Bcb.setVolume = function(t, e) { for (var n = 0; n < Ecb; n += 1) Ccb[n].animation.setVolume(t, e) }, Bcb.mute = function(t) { for (var e = 0; e < Ecb; e += 1) Ccb[e].animation.mute(t) }, Bcb.unmute = function(t) { for (var e = 0; e < Ecb; e += 1) Ccb[e].animation.unmute(t) }, Bcb.getRegisteredAnimations = function() { for (var t = Ccb.length, e = [], n = 0; n < t; n += 1) e.push(Ccb[n].animation); return e }, Bcb),
            Bcb, Ccb, Dcb, Ecb, Fcb, Gcb, Hcb;

        function Icb(t) { for (var e = 0, n = t.target; e < Ecb;) Ccb[e].animation === n && (Ccb.splice(e, 1), --e, --Ecb, n.isPaused || Mcb()), e += 1 }

        function Jcb(t, e) { if (!t) return null; for (var n = 0; n < Ecb;) { if (Ccb[n].elem === t && null !== Ccb[n].elem) return Ccb[n].animation;
                n += 1 } var i = new AnimationItem; return Ncb(i, t), i.setData(t, e), i }

        function Lcb() { Fcb += 1, _cb() }

        function Mcb() {--Fcb }

        function Ncb(t, e) { t.addEventListener("destroy", Icb), t.addEventListener("_active", Lcb), t.addEventListener("_idle", Mcb), Ccb.push({ elem: e, animation: t }), Ecb += 1 }

        function Scb(t) { for (var e = t - Dcb, n = 0; n < Ecb; n += 1) Ccb[n].animation.advanceTime(e);
            Dcb = t, Fcb && !Hcb ? window.requestAnimationFrame(Scb) : Gcb = !0 }

        function Tcb(t) { Dcb = t, window.requestAnimationFrame(Scb) }

        function _cb() {!Hcb && Fcb && Gcb && (window.requestAnimationFrame(Tcb), Gcb = !1) } var AnimationItem = function() { this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [] };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container); var e = "svg"; switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
                case "canvas":
                    this.renderer = new CanvasRenderer(this, t.rendererSettings); break;
                case "svg":
                    this.renderer = new SVGRenderer(this, t.rendererSettings); break;
                default:
                    this.renderer = new HybridRenderer(this, t.rendererSettings) }
            this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name || "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() { this.trigger("data_failed") }.bind(this))) }, AnimationItem.prototype.setData = function(t, e) { e && "object" != typeof e && (e = JSON.parse(e)); var n = { wrapper: t, animationData: e },
                e = t.attributes;
            n.path = e.getNamedItem("data-animation-path") ? e.getNamedItem("data-animation-path").value : e.getNamedItem("data-bm-path") ? e.getNamedItem("data-bm-path").value : e.getNamedItem("bm-path") ? e.getNamedItem("bm-path").value : "", n.animType = e.getNamedItem("data-anim-type") ? e.getNamedItem("data-anim-type").value : e.getNamedItem("data-bm-type") ? e.getNamedItem("data-bm-type").value : e.getNamedItem("bm-type") ? e.getNamedItem("bm-type").value : e.getNamedItem("data-bm-renderer") ? e.getNamedItem("data-bm-renderer").value : e.getNamedItem("bm-renderer") ? e.getNamedItem("bm-renderer").value : "canvas";
            t = e.getNamedItem("data-anim-loop") ? e.getNamedItem("data-anim-loop").value : e.getNamedItem("data-bm-loop") ? e.getNamedItem("data-bm-loop").value : e.getNamedItem("bm-loop") ? e.getNamedItem("bm-loop").value : ""; "false" === t ? n.loop = !1 : "true" === t ? n.loop = !0 : "" !== t && (n.loop = parseInt(t, 10));
            t = e.getNamedItem("data-anim-autoplay") ? e.getNamedItem("data-anim-autoplay").value : e.getNamedItem("data-bm-autoplay") ? e.getNamedItem("data-bm-autoplay").value : !e.getNamedItem("bm-autoplay") || e.getNamedItem("bm-autoplay").value;
            n.autoplay = "false" !== t, n.name = e.getNamedItem("data-name") ? e.getNamedItem("data-name").value : e.getNamedItem("data-bm-name") ? e.getNamedItem("data-bm-name").value : e.getNamedItem("bm-name") ? e.getNamedItem("bm-name").value : "", "false" === (e.getNamedItem("data-anim-prerender") ? e.getNamedItem("data-anim-prerender").value : e.getNamedItem("data-bm-prerender") ? e.getNamedItem("data-bm-prerender").value : e.getNamedItem("bm-prerender") ? e.getNamedItem("bm-prerender").value : "") && (n.prerender = !1), this.setParams(n) }, AnimationItem.prototype.includeLayers = function(t) { t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip)); for (var e, n = this.animationData.layers, i = n.length, r = t.layers, a = r.length, s = 0; s < a; s += 1)
                for (e = 0; e < i;) { if (n[e].id === r[s].id) { n[e] = r[s]; break }
                    e += 1 }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                for (i = t.assets.length, e = 0; e < i; e += 1) this.animationData.assets.push(t.assets[e]);
            this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment() }, AnimationItem.prototype.loadNextSegment = function() { var t = this.animationData.segments; if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
            t = t.shift();
            this.timeCompleted = t.time * this.frameRate;
            t = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, assetLoader.load(t, this.includeLayers.bind(this), function() { this.trigger("data_failed") }.bind(this)) }, AnimationItem.prototype.loadSegments = function() { this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment() }, AnimationItem.prototype.imagesLoaded = function() { this.trigger("loaded_images"), this.checkLoaded() }, AnimationItem.prototype.preloadImages = function() { this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this)) }, AnimationItem.prototype.configAnimation = function(t) { if (this.renderer) try { this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause() } catch (t) { this.triggerConfigError(t) } }, AnimationItem.prototype.waitForFontsLoaded = function() { this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20)) }, AnimationItem.prototype.checkLoaded = function() {!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() { this.trigger("DOMLoaded") }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()) }, AnimationItem.prototype.resize = function() { this.renderer.updateContainerSize() }, AnimationItem.prototype.setSubframe = function(t) { this.isSubframeEnabled = !!t }, AnimationItem.prototype.gotoFrame = function() { this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame() }, AnimationItem.prototype.renderFrame = function() { if (!1 !== this.isLoaded && this.renderer) try { this.renderer.renderFrame(this.currentFrame + this.firstFrame) } catch (t) { this.triggerRenderFrameError(t) } }, AnimationItem.prototype.play = function(t) { t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active"))) }, AnimationItem.prototype.pause = function(t) { t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause()) }, AnimationItem.prototype.togglePause = function(t) { t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause()) }, AnimationItem.prototype.stop = function(t) { t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0)) }, AnimationItem.prototype.getMarkerData = function(t) { for (var e, n = 0; n < this.markers.length; n += 1)
                if ((e = this.markers[n]).payload && e.payload.name === t) return e;
            return null }, AnimationItem.prototype.goToAndStop = function(t, e, n) { n && this.name !== n || (n = Number(t), isNaN(n) ? (n = this.getMarkerData(t)) && this.goToAndStop(n.time, !0) : e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause()) }, AnimationItem.prototype.goToAndPlay = function(t, e, n) { var i;
            n && this.name !== n || (i = Number(t), isNaN(i) ? (t = this.getMarkerData(t)) && (t.duration ? this.playSegments([t.time, t.time + t.duration], !0) : this.goToAndStop(t.time, !0)) : this.goToAndStop(i, e, n), this.play()) }, AnimationItem.prototype.advanceTime = function(t) { var e;!0 !== this.isPaused && !1 !== this.isLoaded && (e = !1, (t = this.currentRawFrame + t * this.frameModifier) >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (e = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (e = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), e && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))) }, AnimationItem.prototype.adjustSegment = function(t, e) { this.playCount = 0, t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart") }, AnimationItem.prototype.setSegment = function(t, e) { var n = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? n = t : this.currentRawFrame + this.firstFrame > e && (n = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== n && this.goToAndStop(n, !0) }, AnimationItem.prototype.playSegments = function(t, e) { if (e && (this.segments.length = 0), "object" == typeof t[0])
                for (var n = t.length, i = 0; i < n; i += 1) this.segments.push(t[i]);
            else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play() }, AnimationItem.prototype.resetSegments = function(t) { this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0) }, AnimationItem.prototype.checkSegments = function(t) { return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0) }, AnimationItem.prototype.destroy = function(t) { t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null) }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) { this.currentRawFrame = t, this.gotoFrame() }, AnimationItem.prototype.setSpeed = function(t) { this.playSpeed = t, this.updaFrameModifier() }, AnimationItem.prototype.setDirection = function(t) { this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier() }, AnimationItem.prototype.setVolume = function(t, e) { e && this.name !== e || this.audioController.setVolume(t) }, AnimationItem.prototype.getVolume = function() { return this.audioController.getVolume() }, AnimationItem.prototype.mute = function(t) { t && this.name !== t || this.audioController.mute() }, AnimationItem.prototype.unmute = function(t) { t && this.name !== t || this.audioController.unmute() }, AnimationItem.prototype.updaFrameModifier = function() { this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection) }, AnimationItem.prototype.getPath = function() { return this.path }, AnimationItem.prototype.getAssetsPath = function(t) { var e, n = ""; return t.e ? n = t.p : this.assetsPath ? (-1 !== (e = t.p).indexOf("images/") && (e = e.split("/")[1]), n = this.assetsPath + e) : (n = this.path, n += t.u || "", n += t.p), n }, AnimationItem.prototype.getAssetData = function(t) { for (var e = 0, n = this.assets.length; e < n;) { if (t === this.assets[e].id) return this.assets[e];
                e += 1 } return null }, AnimationItem.prototype.hide = function() { this.renderer.hide() }, AnimationItem.prototype.show = function() { this.renderer.show() }, AnimationItem.prototype.getDuration = function(t) { return t ? this.totalFrames : this.totalFrames / this.frameRate }, AnimationItem.prototype.trigger = function(t) { if (this._cbs && this._cbs[t]) switch (t) {
                case "enterFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier)); break;
                case "loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)); break;
                case "complete":
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult)); break;
                case "segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)); break;
                case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this)); break;
                default:
                    this.triggerEvent(t) }
            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this)) }, AnimationItem.prototype.triggerRenderFrameError = function(t) { t = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", t), this.onError && this.onError.call(this, t) }, AnimationItem.prototype.triggerConfigError = function(t) { t = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", t), this.onError && this.onError.call(this, t) }; var Expressions = (Afb = {}, Afb.initExpressions = function(t) { var e = 0,
                    n = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() { e += 1 }, t.renderer.globalData.popExpression = function() { 0 === --e && function() { var t, e = n.length; for (t = 0; t < e; t += 1) n[t].release();
                        n.length = 0 }() }, t.renderer.globalData.registerExpressionProperty = function(t) {-1 === n.indexOf(t) && n.push(t) } }, Afb),
            Afb, expressionsPlugin = Expressions,
            ExpressionManager = function() { var ob = {},
                    Math = BMMath,
                    window = null,
                    document = null,
                    XMLHttpRequest = null,
                    fetch = null;

                function $bm_isInstanceOfArray(t) { return t.constructor === Array || t.constructor === Float32Array }

                function isNumerable(t, e) { return "number" === t || "boolean" === t || "string" === t || e instanceof Number }

                function $bm_neg(t) { var e = typeof t; if ("number" == e || "boolean" == e || t instanceof Number) return -t; if ($bm_isInstanceOfArray(t)) { for (var n = t.length, i = [], r = 0; r < n; r += 1) i[r] = -t[r]; return i } return t.propType ? t.v : -t } var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                    easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                    easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                function sum(t, e) { var n = typeof t,
                        i = typeof e; if ("string" == n || "string" == i) return t + e; if (isNumerable(n, t) && isNumerable(i, e)) return t + e; if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] += e, t; if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e; if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) { for (var r = 0, a = t.length, s = e.length, o = []; r < a || r < s;)("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? o[r] = t[r] + e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r], r += 1; return o } return 0 } var add = sum;

                function sub(t, e) { var n = typeof t,
                        i = typeof e; if (isNumerable(n, t) && isNumerable(i, e)) return "string" == n && (t = parseInt(t, 10)), "string" == i && (e = parseInt(e, 10)), t - e; if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] -= e, t; if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e; if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) { for (var r = 0, a = t.length, s = e.length, o = []; r < a || r < s;)("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? o[r] = t[r] - e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r], r += 1; return o } return 0 }

                function mul(t, e) { var n, i, r, a = typeof t,
                        s = typeof e; if (isNumerable(a, t) && isNumerable(s, e)) return t * e; if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) { for (r = t.length, n = createTypedArray("float32", r), i = 0; i < r; i += 1) n[i] = t[i] * e; return n } if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) { for (r = e.length, n = createTypedArray("float32", r), i = 0; i < r; i += 1) n[i] = t * e[i]; return n } return 0 }

                function div(t, e) { var n, i, r, a = typeof t,
                        s = typeof e; if (isNumerable(a, t) && isNumerable(s, e)) return t / e; if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) { for (r = t.length, n = createTypedArray("float32", r), i = 0; i < r; i += 1) n[i] = t[i] / e; return n } if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) { for (r = e.length, n = createTypedArray("float32", r), i = 0; i < r; i += 1) n[i] = t / e[i]; return n } return 0 }

                function mod(t, e) { return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e } var $bm_sum = sum,
                    $bm_sub = sub,
                    $bm_mul = mul,
                    $bm_div = div,
                    $bm_mod = mod;

                function clamp(t, e, n) { var i; return n < e && (i = n, n = e, e = i), Math.min(Math.max(t, e), n) }

                function radiansToDegrees(t) { return t / degToRads } var radians_to_degrees = radiansToDegrees;

                function degreesToRadians(t) { return t * degToRads } var degrees_to_radians = radiansToDegrees,
                    helperLengthArray = [0, 0, 0, 0, 0, 0];

                function length(t, e) { if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                    e = e || helperLengthArray; for (var n = Math.min(t.length, e.length), i = 0, r = 0; r < n; r += 1) i += Math.pow(e[r] - t[r], 2); return Math.sqrt(i) }

                function normalize(t) { return div(t, length(t)) }

                function rgbToHsl(t) { var e = t[0],
                        n = t[1],
                        i = t[2],
                        r = Math.max(e, n, i),
                        a = Math.min(e, n, i); if (r === a) 0;
                    else { switch (r) {
                            case e:
                                0; break;
                            case n:
                                0; break;
                            case i:
                                0 }
                        0 } return t[3], 1 }

                function hue2rgb(t, e, n) { return n < 0 && (n += 1), 1 < n && --n, n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t }

                function hslToRgb(t) { var e = t[0],
                        n = t[1],
                        i = t[2]; return 0 === n ? 0 : (hue2rgb(n = 2 * i - (i = i < .5 ? i * (1 + n) : i + n - i * n), i, e + 1 / 3), hue2rgb(n, i, e), hue2rgb(n, i, e - 1 / 3)), t[3], 1 }

                function linear(t, e, n, i, r) { var a; if (void 0 !== i && void 0 !== r || (i = e, r = n, e = 0, n = 1), n < e && (a = n, n = e, e = a), t <= e) return i; if (n <= t) return r; var s = n === e ? 0 : (t - e) / (n - e); if (!i.length) return i + (r - i) * s; for (var o = i.length, l = createTypedArray("float32", o), c = 0; c < o; c += 1) l[c] = i[c] + (r[c] - i[c]) * s; return l }

                function random(t, e) { if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) { var n = e.length;
                        t = t || createTypedArray("float32", n); for (var i = createTypedArray("float32", n), r = BMMath.random(), a = 0; a < n; a += 1) i[a] = t[a] + r * (e[a] - t[a]); return i } return void 0 === t && (t = 0), t + BMMath.random() * (e - t) }

                function createPath(t, e, n, i) { var r = t.length,
                        a = shapePool.newElement();
                    a.setPathData(!!i, r); for (var s, o, l = [0, 0], c = 0; c < r; c += 1) s = e && e[c] ? e[c] : l, o = n && n[c] ? n[c] : l, a.setTripleAt(t[c][0], t[c][1], o[0] + t[c][0], o[1] + t[c][1], s[0] + t[c][0], s[1] + t[c][1], c, !0); return a }

                function initiateExpression(elem, data, property) { var val = data.x,
                        needsVelocity = /velocity(?![\w\d])/.test(val),
                        _needsRandom = -1 !== val.indexOf("random"),
                        elemType = elem.data.ty,
                        transform, $bm_transform, content, effect, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", { get: function() { return thisProperty.v } }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0; var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                        width = elem.data.sw || 0,
                        height = elem.data.sh || 0,
                        name = elem.data.nm,
                        loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                        numKeys = property.kf ? data.k.length : 0,
                        active = !this.data || !0 !== this.data.hd,
                        wiggle = function(t, e) { var n = this.pv.length || 1,
                                i = createTypedArray("float32", n); for (var r = Math.floor(5 * time), a = 0, s = 0; a < r;) { for (s = 0; s < n; s += 1) i[s] += -e + 2 * e * BMMath.random();
                                a += 1 } var o = 5 * time,
                                l = o - Math.floor(o),
                                c = createTypedArray("float32", n); if (1 < n) { for (s = 0; s < n; s += 1) c[s] = this.pv[s] + i[s] + (-e + 2 * e * BMMath.random()) * l; return c } return this.pv + i[0] + (-e + 2 * e * BMMath.random()) * l }.bind(this);

                    function loopInDuration(t, e) { return loopIn(t, e, !0) }

                    function loopOutDuration(t, e) { return loopOut(t, e, !0) }
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this)); var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                        time, velocity, value, text, textIndex, textTotal, selectorValue;

                    function lookAt(t, e) { t = [e[0] - t[0], e[1] - t[1], e[2] - t[2]], Math.atan2(t[0], Math.sqrt(t[1] * t[1] + t[2] * t[2])), Math.atan2(t[1], t[2]); return 1 }

                    function easeOut(t, e, n, i, r) { return applyEase(easeOutBez, t, e, n, i, r) }

                    function easeIn(t, e, n, i, r) { return applyEase(easeInBez, t, e, n, i, r) }

                    function ease(t, e, n, i, r) { return applyEase(easeInOutBez, t, e, n, i, r) }

                    function applyEase(t, e, n, i, r, a) { void 0 === r ? (r = n, a = i) : e = (e - n) / (i - n), 1 < e ? e = 1 : e < 0 && (e = 0); var s = t(e); if ($bm_isInstanceOfArray(r)) { for (var o = r.length, l = createTypedArray("float32", o), c = 0; c < o; c += 1) l[c] = (a[c] - r[c]) * s + r[c]; return l } return (a - r) * s + r }

                    function nearestKey(t) { var e, n, i, r = data.k.length; if (data.k.length && "number" != typeof data.k[0])
                            if (n = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) n = 1, i = data.k[0].t;
                            else { for (e = 0; e < r - 1; e += 1) { if (t === data.k[e].t) { n = e + 1, i = data.k[e].t; break } if (t > data.k[e].t && t < data.k[e + 1].t) { i = t - data.k[e].t > data.k[e + 1].t - t ? (n = e + 2, data.k[e + 1].t) : (n = e + 1, data.k[e].t); break } } - 1 === n && (n = e + 1, i = data.k[e].t) }
                        else i = n = 0; var a = {}; return a.index = n, a.time = i / elem.comp.globalData.frameRate, a }

                    function key(t) { var e; if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);--t, e = { time: data.k[t].t / elem.comp.globalData.frameRate, value: [] }; for (var n = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e, i = n.length, r = 0; r < i; r += 1) e[r] = n[r], e.value[r] = n[r]; return e }

                    function framesToTime(t, e) { return t / (e = e || elem.comp.globalData.frameRate) }

                    function timeToFrames(t, e) { return t || 0 === t || (t = time), t * (e = e || elem.comp.globalData.frameRate) }

                    function seedRandom(t) { BMMath.seedrandom(randSeed + t) }

                    function sourceRectAtTime() { return elem.sourceRectAtTime() }

                    function substring(t, e) { return "string" == typeof value && (void 0 === e ? value.substring(t) : value.substring(t, e)) }

                    function substr(t, e) { return "string" == typeof value && (void 0 === e ? value.substr(t) : value.substr(t, e)) }

                    function posterizeTime(t) { time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time) } var index = elem.data.ind,
                        hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                        parent, randSeed = Math.floor(1e6 * Math.random()),
                        globalData = elem.globalData;

                    function executeExpression(t) { return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), ($bm_transform = transform) && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect = effect || thisLayer(4), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt) } return executeExpression } return ob.initiateExpression = initiateExpression, ob }(),
            expressionHelpers = { searchExpressions: function(t, e, n) { e.x && (n.k = !0, n.x = !0, n.initiateExpression = ExpressionManager.initiateExpression, n.effectsSequence.push(n.initiateExpression(t, e, n).bind(n))) }, getSpeedAtTime: function(t) { var e = this.getValueAtTime(t),
                        n = this.getValueAtTime(t + -.01),
                        i = 0; if (e.length) { for (var r = 0; r < e.length; r += 1) i += Math.pow(n[r] - e[r], 2);
                        i = 100 * Math.sqrt(i) } else i = 0; return i }, getVelocityAtTime: function(t) { if (void 0 !== this.vel) return this.vel; var e = this.getValueAtTime(t),
                        n = this.getValueAtTime(t + -.001); if (e.length)
                        for (var i = createTypedArray("float32", e.length), r = 0; r < e.length; r += 1) i[r] = (n[r] - e[r]) / -.001;
                    else i = (n - e) / -.001; return i }, getValueAtTime: function(t) { return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value }, getStaticValueAtTime: function() { return this.pv }, setGroupProperty: function(t) { this.propertyGroup = t } };! function() {
            function s(t, e, n) { if (!this.k || !this.keyframes) return this.pv;
                t = t ? t.toLowerCase() : ""; var i, r, a, s, o, l = this.comp.renderedFrame,
                    c = this.keyframes,
                    u = c[c.length - 1].t; if (l <= u) return this.pv; if (n ? r = u - (i = e ? Math.abs(u - this.elem.comp.globalData.frameRate * e) : Math.max(0, u - this.elem.data.ip)) : ((!e || e > c.length - 1) && (e = c.length - 1), i = u - (r = c[c.length - 1 - e].t)), "pingpong" === t) { if (Math.floor((l - r) / i) % 2 != 0) return this.getValueAtTime((i - (l - r) % i + r) / this.comp.globalData.frameRate, 0) } else { if ("offset" === t) { var d = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                            h = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                            f = this.getValueAtTime(((l - r) % i + r) / this.comp.globalData.frameRate, 0),
                            p = Math.floor((l - r) / i); if (this.pv.length) { for (s = (o = new Array(d.length)).length, a = 0; a < s; a += 1) o[a] = (h[a] - d[a]) * p + f[a]; return o } return (h - d) * p + f } if ("continue" === t) { var m = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                            g = this.getValueAtTime((u - .001) / this.comp.globalData.frameRate, 0); if (this.pv.length) { for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - g[a]) * ((l - u) / this.comp.globalData.frameRate) / 5e-4; return o } return m + (l - u) / .001 * (m - g) } } return this.getValueAtTime(((l - r) % i + r) / this.comp.globalData.frameRate, 0) }

            function o(t, e, n) { if (!this.k) return this.pv;
                t = t ? t.toLowerCase() : ""; var i, r, a, s, o, l = this.comp.renderedFrame,
                    c = this.keyframes,
                    u = c[0].t; if (u <= l) return this.pv; if (n ? r = u + (i = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - u)) : ((!e || e > c.length - 1) && (e = c.length - 1), i = (r = c[e].t) - u), "pingpong" === t) { if (Math.floor((u - l) / i) % 2 == 0) return this.getValueAtTime(((u - l) % i + u) / this.comp.globalData.frameRate, 0) } else { if ("offset" === t) { var d = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                            h = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                            f = this.getValueAtTime((i - (u - l) % i + u) / this.comp.globalData.frameRate, 0),
                            p = Math.floor((u - l) / i) + 1; if (this.pv.length) { for (s = (o = new Array(d.length)).length, a = 0; a < s; a += 1) o[a] = f[a] - (h[a] - d[a]) * p; return o } return f - (h - d) * p } if ("continue" === t) { var m = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                            g = this.getValueAtTime((u + .001) / this.comp.globalData.frameRate, 0); if (this.pv.length) { for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - g[a]) * (u - l) / .001; return o } return m + (m - g) * (u - l) / .001 } } return this.getValueAtTime((i - ((u - l) % i + u)) / this.comp.globalData.frameRate, 0) }

            function l(t, e) { if (!this.k) return this.pv; if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv; for (var n, i = this.comp.renderedFrame / this.comp.globalData.frameRate, r = i - t, a = 1 < e ? (i + t - r) / (e - 1) : 1, s = 0, o = 0, l = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; s < e;) { if (n = this.getValueAtTime(r + s * a), this.pv.length)
                        for (o = 0; o < this.pv.length; o += 1) l[o] += n[o];
                    else l += n;
                    s += 1 } if (this.pv.length)
                    for (o = 0; o < this.pv.length; o += 1) l[o] /= e;
                else l /= e; return l } var i = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(t, e, n) { n = i(t, e, n); return n.dynamicProperties.length ? n.getValueAtTime = function(t) { this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix }); var e, n, i, r, a, s, o = this._transformCachingAtTime.v; return o.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && (e = this.a.getValueAtTime(t), o.translate(-e[0] * this.a.mult, -e[1] * this.a.mult, e[2] * this.a.mult)), this.appliedTransformations < 2 && (n = this.s.getValueAtTime(t), o.scale(n[0] * this.s.mult, n[1] * this.s.mult, n[2] * this.s.mult)), this.sk && this.appliedTransformations < 3 && (e = this.sk.getValueAtTime(t), n = this.sa.getValueAtTime(t), o.skewFromAxis(-e * this.sk.mult, n * this.sa.mult)), this.r && this.appliedTransformations < 4 ? (i = this.r.getValueAtTime(t), o.rotate(-i * this.r.mult)) : !this.r && this.appliedTransformations < 4 && (i = this.rz.getValueAtTime(t), r = this.ry.getValueAtTime(t), a = this.rx.getValueAtTime(t), s = this.or.getValueAtTime(t), o.rotateZ(-i * this.rz.mult).rotateY(r * this.ry.mult).rotateX(a * this.rx.mult).rotateZ(-s[2] * this.or.mult).rotateY(s[1] * this.or.mult).rotateX(s[0] * this.or.mult)), this.data.p && this.data.p.s ? (r = this.px.getValueAtTime(t), a = this.py.getValueAtTime(t), this.data.p.z ? (s = this.pz.getValueAtTime(t), o.translate(r * this.px.mult, a * this.py.mult, -s * this.pz.mult)) : o.translate(r * this.px.mult, a * this.py.mult, 0)) : (t = this.p.getValueAtTime(t), o.translate(t[0] * this.p.mult, t[1] * this.p.mult, -t[2] * this.p.mult)), o }.bind(n) : n.getValueAtTime = function() { return this.v.clone(new Matrix) }.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n }; var c = PropertyFactory.getProp;
            PropertyFactory.getProp = function(t, e, n, i, r) { var a = c(t, e, n, i, r);
                a.kf ? a.getValueAtTime = expressionHelpers.getValueAtTime.bind(a) : a.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(a), a.setGroupProperty = expressionHelpers.setGroupProperty, a.loopOut = s, a.loopIn = o, a.smooth = l, a.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(a), a.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(a), a.numKeys = 1 === e.a ? e.k.length : 0, a.propertyIndex = e.ix;
                i = 0; return 0 !== n && (i = createTypedArray("float32", (1 === e.a ? e.k[0].s : e.k).length)), a._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: i }, expressionHelpers.searchExpressions(t, e, a), a.k && r.addDynamicProperty(a), a }; var t = ShapePropertyFactory.getConstructorFunction(),
                e = ShapePropertyFactory.getKeyframedConstructorFunction();

            function n() {}
            n.prototype = { vertices: function(t, e) { this.k && this.getValue(); var n = this.v;
                    void 0 !== e && (n = this.getValueAtTime(e, 0)); for (var i = n._length, r = n[t], a = n.v, s = createSizedArray(i), o = 0; o < i; o += 1) s[o] = "i" === t || "o" === t ? [r[o][0] - a[o][0], r[o][1] - a[o][1]] : [r[o][0], r[o][1]]; return s }, points: function(t) { return this.vertices("v", t) }, inTangents: function(t) { return this.vertices("i", t) }, outTangents: function(t) { return this.vertices("o", t) }, isClosed: function() { return this.v.c }, pointOnPath: function(t, e) { var n = this.v;
                    void 0 !== e && (n = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(n)); for (var e = this._segmentsLength, i = e.lengths, r = e.totalLength * t, a = 0, s = i.length, o = 0; a < s;) { if (o + i[a].addedLength > r) { var l = n.c && a === s - 1 ? 0 : a + 1,
                                c = (r - o) / i[a].addedLength,
                                u = bez.getPointInSegment(n.v[a], n.v[l], n.o[a], n.i[l], c, i[a]); break }
                        o += i[a].addedLength, a += 1 } return u = u || (n.c ? [n.v[0][0], n.v[0][1]] : [n.v[n._length - 1][0], n.v[n._length - 1][1]]) }, vectorOnPath: function(t, e, n) { 1 == t ? t = this.v.c : 0 == t && (t = .999); var i = this.pointOnPath(t, e),
                        t = this.pointOnPath(t + .001, e),
                        e = t[0] - i[0],
                        t = t[1] - i[1],
                        i = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)); return 0 === i ? [0, 0] : "tangent" === n ? [e / i, t / i] : [-t / i, e / i] }, tangentOnPath: function(t, e) { return this.vectorOnPath(t, e, "tangent") }, normalOnPath: function(t, e) { return this.vectorOnPath(t, e, "normal") }, setGroupProperty: expressionHelpers.setGroupProperty, getValueAtTime: expressionHelpers.getStaticValueAtTime }, extendPrototype([n], t), extendPrototype([n], e), e.prototype.getValueAtTime = function(t) { return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shapePool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue }, e.prototype.initiateExpression = ExpressionManager.initiateExpression; var a = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(t, e, n, i, r) { r = a(t, e, n, i, r); return r.propertyIndex = e.ix, r.lock = !1, 3 === n ? expressionHelpers.searchExpressions(t, e.pt, r) : 4 === n && expressionHelpers.searchExpressions(t, e.ks, r), r.k && t.addDynamicProperty(r), r } }(), TextProperty.prototype.getExpressionValue = function(t, e) { var n = this.calculateExpression(e); if (t.t === n) return t;
            e = {}; return this.copyData(e, t), e.t = n.toString(), e.__complete = !1, e }, TextProperty.prototype.searchProperty = function() { var t = this.searchKeyframes(),
                e = this.searchExpressions(); return this.kf = t || e, this.kf }, TextProperty.prototype.searchExpressions = function() { return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null }; var ShapePathInterface = function(t, e, n) { var i = e.sh;

                function r(t) { return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? r.path : null }
                e = propertyGroupFactory(r, n); return i.setGroupProperty(PropertyInterface("Path", e)), Object.defineProperties(r, { path: { get: function() { return i.k && i.getValue(), i } }, shape: { get: function() { return i.k && i.getValue(), i } }, _name: { value: t.nm }, ix: { value: t.ix }, propertyIndex: { value: t.ix }, mn: { value: t.mn }, propertyGroup: { value: n } }), r },
            propertyGroupFactory = function(e, n) { return function(t) { return (t = void 0 === t ? 1 : t) <= 0 ? e : n(t - 1) } },
            PropertyInterface = function(t, e) { var n = { _name: t }; return function(t) { return (t = void 0 === t ? 1 : t) <= 0 ? n : e(t - 1) } },
            ShapeExpressionInterface = function(t, e, i) { var r;

                function n(t) { if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? i : r[t - 1]; for (var e = 0, n = r.length; e < n;) { if (r[e]._name === t) return r[e];
                        e += 1 } return null } return n.propertyGroup = propertyGroupFactory(n, function() { return i }), r = emb(t, e, n.propertyGroup), n.numProperties = r.length, n._name = "Contents", n };

        function emb(t, e, n) { for (var i, r, a, s = [], o = t ? t.length : 0, l = 0; l < o; l += 1) "gr" === t[l].ty ? s.push(function(t, e, n) { var i = function(t) { switch (t) {
                        case "ADBE Vectors Group":
                        case "Contents":
                        case 2:
                            return i.content;
                        default:
                            return i.transform } };
                i.propertyGroup = propertyGroupFactory(i, n);
                n = function(t, e, n) {
                    function i(t) { for (var e = 0, n = r.length; e < n;) { if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t) return r[e];
                            e += 1 } return "number" == typeof t ? r[t - 1] : null } var r;
                    i.propertyGroup = propertyGroupFactory(i, n), r = emb(t.it, e.it, i.propertyGroup), i.numProperties = r.length;
                    e = mmb(t.it[t.it.length - 1], e.it[e.it.length - 1], i.propertyGroup); return i.transform = e, i.propertyIndex = t.cix, i._name = t.nm, i }(t, e, i.propertyGroup), e = mmb(t.it[t.it.length - 1], e.it[e.it.length - 1], i.propertyGroup); return i.content = n, i.transform = e, Object.defineProperty(i, "_name", { get: function() { return t.nm } }), i.numProperties = t.np, i.propertyIndex = t.ix, i.nm = t.nm, i.mn = t.mn, i }(t[l], e[l], n)) : "fl" === t[l].ty ? s.push((i = t[l], r = e[l], a = n, Object.defineProperties(u, { color: { get: ExpressionPropertyInterface(r.c) }, opacity: { get: ExpressionPropertyInterface(r.o) }, _name: { value: i.nm }, mn: { value: i.mn } }), r.c.setGroupProperty(PropertyInterface("Color", a)), r.o.setGroupProperty(PropertyInterface("Opacity", a)), u)) : "st" === t[l].ty ? s.push(function(t, e, n) { var i, n = propertyGroupFactory(o, n),
                    r = propertyGroupFactory(s, n); var a = t.d ? t.d.length : 0,
                    s = {}; for (i = 0; i < a; i += 1) Object.defineProperty(s, t.d[i].nm, { get: ExpressionPropertyInterface(e.d.dataProps[i].p) }), e.d.dataProps[i].p.setGroupProperty(r);

                function o(t) { return "Color" === t || "color" === t ? o.color : "Opacity" === t || "opacity" === t ? o.opacity : "Stroke Width" === t || "stroke width" === t ? o.strokeWidth : null } return Object.defineProperties(o, { color: { get: ExpressionPropertyInterface(e.c) }, opacity: { get: ExpressionPropertyInterface(e.o) }, strokeWidth: { get: ExpressionPropertyInterface(e.w) }, dash: { get: function() { return s } }, _name: { value: t.nm }, mn: { value: t.mn } }), e.c.setGroupProperty(PropertyInterface("Color", n)), e.o.setGroupProperty(PropertyInterface("Opacity", n)), e.w.setGroupProperty(PropertyInterface("Stroke Width", n)), o }(t[l], e[l], n)) : "tm" === t[l].ty ? s.push(function(e, t, n) {
                function i(t) { return t === e.e.ix || "End" === t || "end" === t ? i.end : t === e.s.ix ? i.start : t === e.o.ix ? i.offset : null } var r = propertyGroupFactory(i, n); return i.propertyIndex = e.ix, t.s.setGroupProperty(PropertyInterface("Start", r)), t.e.setGroupProperty(PropertyInterface("End", r)), t.o.setGroupProperty(PropertyInterface("Offset", r)), i.propertyIndex = e.ix, i.propertyGroup = n, Object.defineProperties(i, { start: { get: ExpressionPropertyInterface(t.s) }, end: { get: ExpressionPropertyInterface(t.e) }, offset: { get: ExpressionPropertyInterface(t.o) }, _name: { value: e.nm } }), i.mn = e.mn, i }(t[l], e[l], n)) : "tr" === t[l].ty || ("el" === t[l].ty ? s.push(function(e, t, n) {
                function i(t) { return e.p.ix === t ? i.position : e.s.ix === t ? i.size : null }
                n = propertyGroupFactory(i, n);
                i.propertyIndex = e.ix;
                t = "tm" === t.sh.ty ? t.sh.prop : t.sh; return t.s.setGroupProperty(PropertyInterface("Size", n)), t.p.setGroupProperty(PropertyInterface("Position", n)), Object.defineProperties(i, { size: { get: ExpressionPropertyInterface(t.s) }, position: { get: ExpressionPropertyInterface(t.p) }, _name: { value: e.nm } }), i.mn = e.mn, i }(t[l], e[l], n)) : "sr" === t[l].ty ? s.push(function(e, t, n) {
                function i(t) { return e.p.ix === t ? i.position : e.r.ix === t ? i.rotation : e.pt.ix === t ? i.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? i.outerRadius : e.os.ix === t ? i.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? i.innerRoundness : null : i.innerRadius }
                n = propertyGroupFactory(i, n), t = "tm" === t.sh.ty ? t.sh.prop : t.sh;
                i.propertyIndex = e.ix, t.or.setGroupProperty(PropertyInterface("Outer Radius", n)), t.os.setGroupProperty(PropertyInterface("Outer Roundness", n)), t.pt.setGroupProperty(PropertyInterface("Points", n)), t.p.setGroupProperty(PropertyInterface("Position", n)), t.r.setGroupProperty(PropertyInterface("Rotation", n)), e.ir && (t.ir.setGroupProperty(PropertyInterface("Inner Radius", n)), t.is.setGroupProperty(PropertyInterface("Inner Roundness", n))); return Object.defineProperties(i, { position: { get: ExpressionPropertyInterface(t.p) }, rotation: { get: ExpressionPropertyInterface(t.r) }, points: { get: ExpressionPropertyInterface(t.pt) }, outerRadius: { get: ExpressionPropertyInterface(t.or) }, outerRoundness: { get: ExpressionPropertyInterface(t.os) }, innerRadius: { get: ExpressionPropertyInterface(t.ir) }, innerRoundness: { get: ExpressionPropertyInterface(t.is) }, _name: { value: e.nm } }), i.mn = e.mn, i }(t[l], e[l], n)) : "sh" === t[l].ty ? s.push(ShapePathInterface(t[l], e[l], n)) : "rc" === t[l].ty ? s.push(function(e, t, n) {
                function i(t) { return e.p.ix === t ? i.position : e.r.ix === t ? i.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? i.size : null }
                n = propertyGroupFactory(i, n), t = "tm" === t.sh.ty ? t.sh.prop : t.sh; return i.propertyIndex = e.ix, t.p.setGroupProperty(PropertyInterface("Position", n)), t.s.setGroupProperty(PropertyInterface("Size", n)), t.r.setGroupProperty(PropertyInterface("Rotation", n)), Object.defineProperties(i, { position: { get: ExpressionPropertyInterface(t.p) }, roundness: { get: ExpressionPropertyInterface(t.r) }, size: { get: ExpressionPropertyInterface(t.s) }, _name: { value: e.nm } }), i.mn = e.mn, i }(t[l], e[l], n)) : "rd" === t[l].ty ? s.push(function(e, t, n) {
                function i(t) { return e.r.ix === t || "Round Corners 1" === t ? i.radius : null }
                n = propertyGroupFactory(i, n); return i.propertyIndex = e.ix, t.rd.setGroupProperty(PropertyInterface("Radius", n)), Object.defineProperties(i, { radius: { get: ExpressionPropertyInterface(t.rd) }, _name: { value: e.nm } }), i.mn = e.mn, i }(t[l], e[l], n)) : "rp" === t[l].ty ? s.push(function(e, t, n) {
                function i(t) { return e.c.ix === t || "Copies" === t ? i.copies : e.o.ix === t || "Offset" === t ? i.offset : null }
                n = propertyGroupFactory(i, n); return i.propertyIndex = e.ix, t.c.setGroupProperty(PropertyInterface("Copies", n)), t.o.setGroupProperty(PropertyInterface("Offset", n)), Object.defineProperties(i, { copies: { get: ExpressionPropertyInterface(t.c) }, offset: { get: ExpressionPropertyInterface(t.o) }, _name: { value: e.nm } }), i.mn = e.mn, i }(t[l], e[l], n)) : "gf" === t[l].ty ? s.push((i = t[l], r = e[l], a = n, Object.defineProperties(c, { startPoint: { get: ExpressionPropertyInterface(r.s) }, endPoint: { get: ExpressionPropertyInterface(r.e) }, opacity: { get: ExpressionPropertyInterface(r.o) }, type: { get: function() { return "a" } }, _name: { value: i.nm }, mn: { value: i.mn } }), r.s.setGroupProperty(PropertyInterface("Start Point", a)), r.e.setGroupProperty(PropertyInterface("End Point", a)), r.o.setGroupProperty(PropertyInterface("Opacity", a)), c)) : s.push((t[l], e[l], function() { return null })));

            function c(t) { return "Start Point" === t || "start point" === t ? c.startPoint : "End Point" === t || "end point" === t ? c.endPoint : "Opacity" === t || "opacity" === t ? c.opacity : null }

            function u(t) { return "Color" === t || "color" === t ? u.color : "Opacity" === t || "opacity" === t ? u.opacity : null } return s }

        function mmb(e, t, n) {
            function i(t) { return e.a.ix === t || "Anchor Point" === t ? i.anchorPoint : e.o.ix === t || "Opacity" === t ? i.opacity : e.p.ix === t || "Position" === t ? i.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? i.rotation : e.s.ix === t || "Scale" === t ? i.scale : e.sk && e.sk.ix === t || "Skew" === t ? i.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? i.skewAxis : null } var r = propertyGroupFactory(i, n); return t.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", r)), t.transform.mProps.p.setGroupProperty(PropertyInterface("Position", r)), t.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", r)), t.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", r)), t.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", r)), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", r)), t.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", r))), t.transform.op.setGroupProperty(PropertyInterface("Opacity", r)), Object.defineProperties(i, { opacity: { get: ExpressionPropertyInterface(t.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(t.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(t.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(t.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(t.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(t.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(t.transform.mProps.sa) }, _name: { value: e.nm } }), i.ty = "tr", i.mn = e.mn, i.propertyGroup = n, i } var TextExpressionInterface = function(e) { var n;

                function i(t) { return "ADBE Text Document" !== t ? null : i.sourceText } return Object.defineProperty(i, "sourceText", { get: function() { e.textProperty.getValue(); var t = e.textProperty.currentData.t; return void 0 !== t && (e.textProperty.currentData.t = void 0, (n = new String(t)).value = t || new String(t)), n } }), i },
            LayerExpressionInterface = function(e) { var n;

                function i(t) { switch (t) {
                        case "ADBE Root Vectors Group":
                        case "Contents":
                        case 2:
                            return i.shapeInterface;
                        case 1:
                        case 6:
                        case "Transform":
                        case "transform":
                        case "ADBE Transform Group":
                            return n;
                        case 4:
                        case "ADBE Effect Parade":
                        case "effects":
                        case "Effects":
                            return i.effect;
                        case "ADBE Text Properties":
                            return i.textInterface;
                        default:
                            return null } }
                i.getMatrix = tob, i.invertPoint = zob, i.applyPoint = yob, i.toWorld = vob, i.toWorldVec = uob, i.fromWorld = xob, i.fromWorldVec = wob, i.toComp = vob, i.fromComp = Aob, i.sampleImage = Bob, i.sourceRectAtTime = e.sourceRectAtTime.bind(e); var t = getDescriptor(n = TransformExpressionInterface((i._elem = e).finalTransform.mProp), "anchorPoint"); return Object.defineProperties(i, { hasParent: { get: function() { return e.hierarchy.length } }, parent: { get: function() { return e.hierarchy[0].layerInterface } }, rotation: getDescriptor(n, "rotation"), scale: getDescriptor(n, "scale"), position: getDescriptor(n, "position"), opacity: getDescriptor(n, "opacity"), anchorPoint: t, anchor_point: t, transform: { get: function() { return n } }, active: { get: function() { return e.isInRange } } }), i.startTime = e.data.st, i.index = e.data.ind, i.source = e.data.refId, i.height = 0 === e.data.ty ? e.data.h : 100, i.width = 0 === e.data.ty ? e.data.w : 100, i.inPoint = e.data.ip / e.comp.globalData.frameRate, i.outPoint = e.data.op / e.comp.globalData.frameRate, i._name = e.data.nm, i.registerMaskInterface = function(t) { i.mask = new MaskManagerInterface(t, e) }, i.registerEffectsInterface = function(t) { i.effect = t }, i };

        function tob(t) { var e = new Matrix; return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e }

        function uob(t, e) { e = this.getMatrix(e); return e.props[12] = 0, e.props[13] = 0, e.props[14] = 0, this.applyPoint(e, t) }

        function vob(t, e) { e = this.getMatrix(e); return this.applyPoint(e, t) }

        function wob(t, e) { e = this.getMatrix(e); return e.props[12] = 0, e.props[13] = 0, e.props[14] = 0, this.invertPoint(e, t) }

        function xob(t, e) { e = this.getMatrix(e); return this.invertPoint(e, t) }

        function yob(t, e) { if (this._elem.hierarchy && this._elem.hierarchy.length)
                for (var n = this._elem.hierarchy.length, i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t); return t.applyToPointArray(e[0], e[1], e[2] || 0) }

        function zob(t, e) { if (this._elem.hierarchy && this._elem.hierarchy.length)
                for (var n = this._elem.hierarchy.length, i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t); return t.inversePoint(e) }

        function Aob(t) { var e = new Matrix; if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) { for (var n = this._elem.hierarchy.length, i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e); return e.inversePoint(t) } return e.inversePoint(t) }

        function Bob() { return [1, 1, 1, 1] } var FootageInterface = function(t) {
            function e(t) { return "Data" === t ? e.dataInterface : null } return e._name = "Data", e.dataInterface = mpb(t), e };

        function mpb(t) {
            function e(t) { return "Outline" === t ? e.outlineInterface() : null }

            function n(t) { if (a[t]) return "object" == typeof(a = a[r = t]) ? n : a; var e = t.indexOf(r); if (-1 === e) return "";
                e = parseInt(t.substr(e + r.length), 10); return "object" == typeof(a = a[e]) ? n : a } var i, r, a; return e._name = "Outline", e.outlineInterface = (r = "", a = (i = t).getFootageData(), function() { return r = "", a = i.getFootageData(), n }), e } var CompExpressionInterface = function(i) {
                function t(t) { for (var e = 0, n = i.layers.length; e < n;) { if (i.layers[e].nm === t || i.layers[e].ind === t) return i.elements[e].layerInterface;
                        e += 1 } return null } return Object.defineProperty(t, "_name", { value: i.data.nm }), (t.layer = t).pixelAspect = 1, t.height = i.data.h || i.globalData.compSize.h, t.width = i.data.w || i.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / i.globalData.frameRate, t.displayStartTime = 0, t.numLayers = i.layers.length, t },
            TransformExpressionInterface = function(t) {
                function e(t) { switch (t) {
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                            return e.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                            return e.rotation;
                        case "ADBE Rotate X":
                            return e.xRotation;
                        case "ADBE Rotate Y":
                            return e.yRotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                            return e.position;
                        case "ADBE Position_0":
                            return e.xPosition;
                        case "ADBE Position_1":
                            return e.yPosition;
                        case "ADBE Position_2":
                            return e.zPosition;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                            return e.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                            return e.opacity;
                        default:
                            return null } } var n, i, r, a; return Object.defineProperty(e, "rotation", { get: ExpressionPropertyInterface(t.r || t.rz) }), Object.defineProperty(e, "zRotation", { get: ExpressionPropertyInterface(t.rz || t.r) }), Object.defineProperty(e, "xRotation", { get: ExpressionPropertyInterface(t.rx) }), Object.defineProperty(e, "yRotation", { get: ExpressionPropertyInterface(t.ry) }), Object.defineProperty(e, "scale", { get: ExpressionPropertyInterface(t.s) }), t.p ? a = ExpressionPropertyInterface(t.p) : (n = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (r = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", { get: function() { return t.p ? a() : [n(), i(), r ? r() : 0] } }), Object.defineProperty(e, "xPosition", { get: ExpressionPropertyInterface(t.px) }), Object.defineProperty(e, "yPosition", { get: ExpressionPropertyInterface(t.py) }), Object.defineProperty(e, "zPosition", { get: ExpressionPropertyInterface(t.pz) }), Object.defineProperty(e, "anchorPoint", { get: ExpressionPropertyInterface(t.a) }), Object.defineProperty(e, "opacity", { get: ExpressionPropertyInterface(t.o) }), Object.defineProperty(e, "skew", { get: ExpressionPropertyInterface(t.sk) }), Object.defineProperty(e, "skewAxis", { get: ExpressionPropertyInterface(t.sa) }), Object.defineProperty(e, "orientation", { get: ExpressionPropertyInterface(t.or) }), e },
            ProjectInterface = function() {
                function t(t) { for (var e = 0, n = this.compositions.length; e < n;) { if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                        e += 1 } return null } return t.compositions = [], t.currentFrame = 0, t.registerComposition = Npb, t };

        function Npb(t) { this.compositions.push(t) } var EffectsExpressionInterface = { createEffectsInterface: function(t, e) { if (t.effectsManager) { var n, i = [],
                        r = t.data.ef,
                        a = t.effectsManager.effectElements.length; for (n = 0; n < a; n += 1) i.push(function t(r, e, n, i) {
                        function a(t) { for (var e = r.ef, n = 0, i = e.length; n < i;) { if (t === e[n].nm || t === e[n].mn || t === e[n].ix) return 5 === e[n].ty ? o[n] : o[n]();
                                n += 1 } throw new Error } var s = propertyGroupFactory(a, n); var o = []; var l; var c = r.ef.length; for (l = 0; l < c; l += 1) 5 === r.ef[l].ty ? o.push(t(r.ef[l], e.effectElements[l], e.effectElements[l].propertyGroup, i)) : o.push(Wpb(e.effectElements[l], r.ef[l].ty, i, s)); "ADBE Color Control" === r.mn && Object.defineProperty(a, "color", { get: function() { return o[0]() } });
                        Object.defineProperties(a, { numProperties: { get: function() { return r.np } }, _name: { value: r.nm }, propertyGroup: { value: s } });
                        a.enabled = 0 !== r.en;
                        a.active = a.enabled; return a }(r[n], t.effectsManager.effectElements[n], e, t)); var s = t.data.ef || [],
                        o = function(t) { for (n = 0, a = s.length; n < a;) { if (t === s[n].nm || t === s[n].mn || t === s[n].ix) return i[n];
                                n += 1 } return null }; return Object.defineProperty(o, "numProperties", { get: function() { return s.length } }), o } return null } };

        function Wpb(t, e, n, i) { var r = ExpressionPropertyInterface(t.p); return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", i)),
                function() { return 10 === e ? n.comp.compInterface(t.p.v) : r() } } var MaskManagerInterface = function() {
                function t(t, e) { this._mask = t, this._data = e }
                Object.defineProperty(t.prototype, "maskPath", { get: function() { return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop } }), Object.defineProperty(t.prototype, "maskOpacity", { get: function() { return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v } }); return function(e) { for (var n = createSizedArray(e.viewData.length), i = e.viewData.length, r = 0; r < i; r += 1) n[r] = new t(e.viewData[r], e.masksProperties[r]); return function(t) { for (r = 0; r < i;) { if (e.masksProperties[r].nm === t) return n[r];
                            r += 1 } return null } } }(),
            ExpressionPropertyInterface = (Hqb = { pv: 0, v: 0, mult: 1 }, Iqb = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 }, function(t) { return t ? ("unidimensional" === t.propType ? function(t) { t && "pv" in t || (t = Hqb); var e = 1 / t.mult,
                        n = t.pv * e,
                        i = new Number(n); return i.value = n, Jqb(i, t, "unidimensional"),
                        function() { return t.k && t.getValue(), n = t.v * e, i.value !== n && ((i = new Number(n)).value = n, Jqb(i, t, "unidimensional")), i } } : function(e) { e && "pv" in e || (e = Iqb); var n = 1 / e.mult,
                        i = e.data && e.data.l || e.pv.length,
                        r = createTypedArray("float32", i),
                        a = createTypedArray("float32", i); return r.value = a, Jqb(r, e, "multidimensional"),
                        function() { e.k && e.getValue(); for (var t = 0; t < i; t += 1) a[t] = e.v[t] * n, r[t] = a[t]; return r } })(t) : Mqb }),
            Hqb, Iqb;

        function Jqb(i, r, a) { Object.defineProperty(i, "velocity", { get: function() { return r.getVelocityAtTime(r.comp.currentFrame) } }), i.numKeys = r.keyframes ? r.keyframes.length : 0, i.key = function(t) { if (!i.numKeys) return 0; var e = "",
                    e = "s" in r.keyframes[t - 1] ? r.keyframes[t - 1].s : "e" in r.keyframes[t - 2] ? r.keyframes[t - 2].e : r.keyframes[t - 2].s,
                    n = "unidimensional" === a ? new Number(e) : Object.assign({}, e); return n.time = r.keyframes[t - 1].t / r.elem.comp.globalData.frameRate, n.value = "unidimensional" === a ? e[0] : e, n }, i.valueAtTime = r.getValueAtTime, i.speedAtTime = r.getSpeedAtTime, i.velocityAtTime = r.getVelocityAtTime, i.propertyGroup = r.propertyGroup }

        function Mqb() { return Hqb } var TextExpressionSelectorPropFactory = function(t, e) { this.pv = 1, this.comp = t.comp, this.elem = t, this.mult = .01, this.propType = "textSelector", this.textTotal = e.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(t, e, this), this.getMult = crb, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty };

        function crb(t, e) { return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v } var propertyGetTextProp = TextSelectorProp.getTextSelectorProp;

        function SliderEffect(t, e, n) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, n) }

        function AngleEffect(t, e, n) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, n) }

        function ColorEffect(t, e, n) { this.p = PropertyFactory.getProp(e, t.v, 1, 0, n) }

        function PointEffect(t, e, n) { this.p = PropertyFactory.getProp(e, t.v, 1, 0, n) }

        function LayerIndexEffect(t, e, n) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, n) }

        function MaskIndexEffect(t, e, n) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, n) }

        function CheckboxEffect(t, e, n) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, n) }

        function NoValueEffect() { this.p = {} }

        function EffectsManager(t, e) { var n = t.ef || [];
            this.effectElements = []; for (var i, r = n.length, a = 0; a < r; a += 1) i = new GroupEffect(n[a], e), this.effectElements.push(i) }

        function GroupEffect(t, e) { this.init(t, e) }
        TextSelectorProp.getTextSelectorProp = function(t, e, n) { return 1 === e.t ? new TextExpressionSelectorPropFactory(t, e, n) : propertyGetTextProp(t, e, n) }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) { this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e); for (var n, i = this.data.ef.length, r = this.data.ef, a = 0; a < i; a += 1) { switch (n = null, r[a].ty) {
                    case 0:
                        n = new SliderEffect(r[a], e, this); break;
                    case 1:
                        n = new AngleEffect(r[a], e, this); break;
                    case 2:
                        n = new ColorEffect(r[a], e, this); break;
                    case 3:
                        n = new PointEffect(r[a], e, this); break;
                    case 4:
                    case 7:
                        n = new CheckboxEffect(r[a], e, this); break;
                    case 10:
                        n = new LayerIndexEffect(r[a], e, this); break;
                    case 11:
                        n = new MaskIndexEffect(r[a], e, this); break;
                    case 5:
                        n = new EffectsManager(r[a], e, this); break;
                    default:
                        n = new NoValueEffect(r[a], e, this) }
                n && this.effectElements.push(n) } }; var lottie = {};

        function setLocationHref(t) { locationHref = t }

        function searchAnimations() {!0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations() }

        function setSubframeRendering(t) { subframeEnabled = t }

        function setIDPrefix(t) { idPrefix = t }

        function loadAnimation(t) { return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t) }

        function setQuality(t) { if ("string" == typeof t) switch (t) {
                case "high":
                    defaultCurveSegments = 200; break;
                default:
                case "medium":
                    defaultCurveSegments = 50; break;
                case "low":
                    defaultCurveSegments = 10 } else !isNaN(t) && 1 < t && (defaultCurveSegments = t);
            roundValues(!(50 <= defaultCurveSegments)) }

        function inBrowser() { return "undefined" != typeof navigator }

        function installPlugin(t, e) { "expressions" === t && (expressionsPlugin = e) }

        function getFactory(t) { switch (t) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix;
                default:
                    return null } }

        function checkReady() { "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations()) }

        function getQueryVariable(t) { for (var e = queryString.split("&"), n = 0; n < e.length; n += 1) { var i = e[n].split("="); if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]) } return null }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.setIDPrefix = setIDPrefix, lottie.__getFactory = getFactory, lottie.version = "5.7.13"; var standalone = "__[STANDALONE]__",
            animationData = "__[ANIMATIONDATA]__",
            renderer = "",
            queryString, scripts, index, myScript, queryString, renderer;
        standalone && (scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || { src: "" }, queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer")); var readyStateCheckInterval = setInterval(checkReady, 100); return lottie }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() { return _ra($ra) }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) }, function(t, e, n) { "use strict"; var f = n(11);
    f.define("brand", t.exports = function(i) { var r, t = {},
            a = document,
            s = i("html"),
            o = i("body"),
            l = window.location,
            c = /PhantomJS/i.test(navigator.userAgent),
            u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function d() { var t = a.fullScreen || a.mozFullScreen || a.webkitIsFullScreen || a.msFullscreenElement || Boolean(a.webkitFullscreenElement);
            i(r).attr("style", t ? "display: none !important;" : "") }

        function h() { var t = o.children(".w-webflow-badge"),
                e = t.length && t.get(0) === r,
                n = f.env("editor");
            e ? n && t.remove() : (t.length && t.remove(), n || o.append(r)) } return t.ready = function() { var t, e = s.attr("data-wf-status"),
                n = s.attr("data-wf-domain") || ""; /\.webflow\.io$/i.test(n) && l.hostname !== n && (e = !0), e && !c && (r = r || (t = i('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), n = i("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({ marginRight: "8px", width: "16px" }), e = i("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), t.append(n, e), t[0]), h(), setTimeout(h, 500), i(a).off(u, d).on(u, d)) }, t }) }, function(t, e, n) { "use strict"; var i = window.jQuery,
        r = {},
        a = [],
        s = { reset: function(t, e) { e.__wf_intro = null }, intro: function(t, e) { e.__wf_intro || (e.__wf_intro = !0, i(e).triggerHandler(r.types.INTRO)) }, outro: function(t, e) { e.__wf_intro && (e.__wf_intro = null, i(e).triggerHandler(r.types.OUTRO)) } };
    r.triggers = {}, r.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }, r.init = function() { for (var t = a.length, e = 0; e < t; e++) { var n = a[e];
            n[0](0, n[1]) }
        a = [], i.extend(r.triggers, s) }, r.async = function() { for (var t in s) { var n = s[t];
            s.hasOwnProperty(t) && (r.triggers[t] = function(t, e) { a.push([n, e]) }) } }, r.async(), t.exports = r }, function(t, e, n) { "use strict"; var i = n(11),
        r = n(290);
    r.setEnv(i.env), i.define("ix2", t.exports = function() { return r }) }, function(t, e, n) { "use strict"; var i = n(39),
        r = n(1);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.setEnv = function(t) { t() && (0, s.observeRequests)(o) }, e.init = function(t) { l(), (0, s.startEngine)({ store: o, rawData: t, allowEvents: !0 }) }, e.destroy = l, e.actions = e.store = void 0, n(291); var a = n(128),
        r = r(n(305)),
        s = n(146),
        n = i(n(87));
    e.actions = n; var o = (0, a.createStore)(r.default);

    function l() {
        (0, s.stopEngine)(o) }
    e.store = o }, function(t, e, n) { t.exports = n(292) }, function(t, e, n) { n(126);
    n = n(293);
    t.exports = n("Array", "includes") }, function(t, e, n) { var i = n(7),
        r = n(54),
        a = Function.call;
    t.exports = function(t, e, n) { return r(a, i[t].prototype[e], n) } }, function(t, e, n) { "use strict";
    n.r(e); var i = n(130),
        r = n(297),
        a = n(298),
        s = i.default ? i.default.toStringTag : void 0;
    e.default = function(t) { return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : (s && s in Object(t) ? Object(r.default) : Object(a.default))(t) } }, function(t, e, n) { "use strict";
    n.r(e); var i = n(296),
        n = "object" == typeof self && self && self.Object === Object && self,
        n = i.default || n || Function("return this")();
    e.default = n }, function(t, e, n) { "use strict";
    n.r(e),
        function(t) { t = "object" == typeof t && t && t.Object === Object && t;
            e.default = t }.call(this, n(44)) }, function(t, e, n) { "use strict";
    n.r(e); var i = n(130),
        n = Object.prototype,
        a = n.hasOwnProperty,
        s = n.toString,
        o = i.default ? i.default.toStringTag : void 0;
    e.default = function(t) { var e = a.call(t, o),
            n = t[o]; try { var i = !(t[o] = void 0) } catch (t) {} var r = s.call(t); return i && (e ? t[o] = n : delete t[o]), r } }, function(t, e, n) { "use strict";
    n.r(e); var i = Object.prototype.toString;
    e.default = function(t) { return i.call(t) } }, function(t, e, n) { "use strict";
    n.r(e);
    n = n(300), n = Object(n.default)(Object.getPrototypeOf, Object);
    e.default = n }, function(t, e, n) { "use strict";
    n.r(e), e.default = function(e, n) { return function(t) { return e(n(t)) } } }, function(t, e, n) { "use strict";
    n.r(e), e.default = function(t) { return null != t && "object" == typeof t } }, function(t, i, r) { "use strict";
    r.r(i),
        function(t, e) { var n = r(304),
                e = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : e,
                e = Object(n.default)(e);
            i.default = e }.call(this, r(44), r(303)(t)) }, function(t, e) { t.exports = function(t) { var e; return t.webpackPolyfill || ((e = Object.create(t)).children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), Object.defineProperty(e, "exports", { enumerable: !0 }), e.webpackPolyfill = 1), e } }, function(t, e, n) { "use strict";

    function i(t) { var e, t = t.Symbol; return "function" == typeof t ? t.observable ? e = t.observable : (e = t("observable"), t.observable = e) : e = "@@observable", e }
    n.r(e), n.d(e, "default", function() { return i }) }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var i = n(128),
        r = n(306),
        a = n(312),
        s = n(313),
        o = n(30),
        l = n(331),
        n = n(332),
        o = o.IX2ElementsReducer.ixElements,
        n = (0, i.combineReducers)({ ixData: r.ixData, ixRequest: a.ixRequest, ixSession: s.ixSession, ixElements: o, ixInstances: l.ixInstances, ixParameters: n.ixParameters });
    e.default = n }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixData = void 0; var i = n(6).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = 1 < arguments.length ? arguments[1] : void 0; return e.type !== i ? t : e.payload.ixData || Object.freeze({}) } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.QuickEffectDirectionConsts = e.QuickEffectIds = e.EventLimitAffectedElements = e.EventContinuousMouseAxes = e.EventBasedOn = e.EventAppliesTo = e.EventTypeConsts = void 0;
    e.EventTypeConsts = { NAVBAR_OPEN: "NAVBAR_OPEN", NAVBAR_CLOSE: "NAVBAR_CLOSE", TAB_ACTIVE: "TAB_ACTIVE", TAB_INACTIVE: "TAB_INACTIVE", SLIDER_ACTIVE: "SLIDER_ACTIVE", SLIDER_INACTIVE: "SLIDER_INACTIVE", DROPDOWN_OPEN: "DROPDOWN_OPEN", DROPDOWN_CLOSE: "DROPDOWN_CLOSE", MOUSE_CLICK: "MOUSE_CLICK", MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK", MOUSE_DOWN: "MOUSE_DOWN", MOUSE_UP: "MOUSE_UP", MOUSE_OVER: "MOUSE_OVER", MOUSE_OUT: "MOUSE_OUT", MOUSE_MOVE: "MOUSE_MOVE", MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT", SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW", SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW", SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW", ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN", ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE", PAGE_START: "PAGE_START", PAGE_FINISH: "PAGE_FINISH", PAGE_SCROLL_UP: "PAGE_SCROLL_UP", PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN", PAGE_SCROLL: "PAGE_SCROLL" };
    e.EventAppliesTo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    e.EventBasedOn = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    e.EventContinuousMouseAxes = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    e.EventLimitAffectedElements = { CHILDREN: "CHILDREN", SIBLINGS: "SIBLINGS", IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN" };
    e.QuickEffectIds = { FADE_EFFECT: "FADE_EFFECT", SLIDE_EFFECT: "SLIDE_EFFECT", GROW_EFFECT: "GROW_EFFECT", SHRINK_EFFECT: "SHRINK_EFFECT", SPIN_EFFECT: "SPIN_EFFECT", FLY_EFFECT: "FLY_EFFECT", POP_EFFECT: "POP_EFFECT", FLIP_EFFECT: "FLIP_EFFECT", JIGGLE_EFFECT: "JIGGLE_EFFECT", PULSE_EFFECT: "PULSE_EFFECT", DROP_EFFECT: "DROP_EFFECT", BLINK_EFFECT: "BLINK_EFFECT", BOUNCE_EFFECT: "BOUNCE_EFFECT", FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT", FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT", RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT", JELLO_EFFECT: "JELLO_EFFECT", GROW_BIG_EFFECT: "GROW_BIG_EFFECT", SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT", PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT" };
    e.QuickEffectDirectionConsts = { LEFT: "LEFT", RIGHT: "RIGHT", BOTTOM: "BOTTOM", TOP: "TOP", BOTTOM_LEFT: "BOTTOM_LEFT", BOTTOM_RIGHT: "BOTTOM_RIGHT", TOP_RIGHT: "TOP_RIGHT", TOP_LEFT: "TOP_LEFT", CLOCKWISE: "CLOCKWISE", COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE" } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.InteractionTypeConsts = void 0;
    e.InteractionTypeConsts = { MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION", MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION", MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION", SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION", SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION", MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION", PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION", PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION", PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION", NAVBAR_INTERACTION: "NAVBAR_INTERACTION", DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION", ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION", TAB_INTERACTION: "TAB_INTERACTION", SLIDER_INTERACTION: "SLIDER_INTERACTION" } }, function(t, e, n) { "use strict"; var i = n(1)(n(24));
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ReducedMotionTypes = void 0; var r = n(135).ActionTypeConsts,
        a = r.TRANSFORM_MOVE,
        s = r.TRANSFORM_SCALE,
        o = r.TRANSFORM_ROTATE,
        l = r.TRANSFORM_SKEW,
        c = r.STYLE_SIZE,
        n = r.STYLE_FILTER,
        r = (r = {}, (0, i.default)(r, a, !0), (0, i.default)(r, s, !0), (0, i.default)(r, o, !0), (0, i.default)(r, l, !0), (0, i.default)(r, c, !0), (0, i.default)(r, n, !0), r);
    e.ReducedMotionTypes = r }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
    e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
    e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
    e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
    e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
    e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
    e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
    e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
    e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
    e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
    e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
    e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
    e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
    e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
    e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
    e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
    e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
    e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
    e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED" }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
    e.IX2_ID_DELIMITER = "|";
    e.WF_PAGE = "data-wf-page";
    e.W_MOD_JS = "w-mod-js";
    e.W_MOD_IX = "w-mod-ix";
    e.BOUNDARY_SELECTOR = ".w-dyn-item";
    e.CONFIG_X_VALUE = "xValue";
    e.CONFIG_Y_VALUE = "yValue";
    e.CONFIG_Z_VALUE = "zValue";
    e.CONFIG_VALUE = "value";
    e.CONFIG_X_UNIT = "xUnit";
    e.CONFIG_Y_UNIT = "yUnit";
    e.CONFIG_Z_UNIT = "zUnit";
    e.CONFIG_UNIT = "unit";
    e.TRANSFORM = "transform";
    e.TRANSLATE_X = "translateX";
    e.TRANSLATE_Y = "translateY";
    e.TRANSLATE_Z = "translateZ";
    e.TRANSLATE_3D = "translate3d";
    e.SCALE_X = "scaleX";
    e.SCALE_Y = "scaleY";
    e.SCALE_Z = "scaleZ";
    e.SCALE_3D = "scale3d";
    e.ROTATE_X = "rotateX";
    e.ROTATE_Y = "rotateY";
    e.ROTATE_Z = "rotateZ";
    e.SKEW = "skew";
    e.SKEW_X = "skewX";
    e.SKEW_Y = "skewY";
    e.OPACITY = "opacity";
    e.FILTER = "filter";
    e.WIDTH = "width";
    e.HEIGHT = "height";
    e.BACKGROUND_COLOR = "backgroundColor";
    e.BACKGROUND = "background";
    e.BORDER_COLOR = "borderColor";
    e.COLOR = "color";
    e.DISPLAY = "display";
    e.FLEX = "flex";
    e.WILL_CHANGE = "willChange";
    e.AUTO = "AUTO";
    e.COMMA_DELIMITER = ",";
    e.COLON_DELIMITER = ":";
    e.BAR_DELIMITER = "|";
    e.CHILDREN = "CHILDREN";
    e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
    e.SIBLINGS = "SIBLINGS";
    e.PARENT = "PARENT";
    e.PRESERVE_3D = "preserve-3d";
    e.HTML_ELEMENT = "HTML_ELEMENT";
    e.PLAIN_OBJECT = "PLAIN_OBJECT";
    e.ABSTRACT_NODE = "ABSTRACT_NODE";
    e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
    e.RENDER_GENERAL = "RENDER_GENERAL";
    e.RENDER_STYLE = "RENDER_STYLE";
    e.RENDER_PLUGIN = "RENDER_PLUGIN" }, function(t, e, n) { "use strict"; var i = n(1)(n(24)),
        r = n(1);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixRequest = void 0; var a = r(n(31)),
        s = n(6),
        o = n(40),
        l = s.IX2EngineActionTypes,
        c = l.IX2_PREVIEW_REQUESTED,
        r = l.IX2_PLAYBACK_REQUESTED,
        n = l.IX2_STOP_REQUESTED,
        s = l.IX2_CLEAR_REQUESTED,
        u = { preview: {}, playback: {}, stop: {}, clear: {} },
        d = Object.create(null, (l = {}, (0, i.default)(l, c, { value: "preview" }), (0, i.default)(l, r, { value: "playback" }), (0, i.default)(l, n, { value: "stop" }), (0, i.default)(l, s, { value: "clear" }), l));
    e.ixRequest = function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : u,
            e = 1 < arguments.length ? arguments[1] : void 0; if (e.type in d) { var n = [d[e.type]]; return (0, o.setIn)(t, [n], (0, a.default)({}, e.payload)) } return t } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixSession = void 0; var i = n(6),
        g = n(40),
        i = i.IX2EngineActionTypes,
        y = i.IX2_SESSION_INITIALIZED,
        v = i.IX2_SESSION_STARTED,
        E = i.IX2_TEST_FRAME_RENDERED,
        b = i.IX2_SESSION_STOPPED,
        T = i.IX2_EVENT_LISTENER_ADDED,
        I = i.IX2_EVENT_STATE_CHANGED,
        _ = i.IX2_ANIMATION_FRAME_CHANGED,
        A = i.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        S = i.IX2_VIEWPORT_WIDTH_CHANGED,
        x = i.IX2_MEDIA_QUERIES_DEFINED,
        R = { active: !1, tick: 0, eventListeners: [], eventState: {}, playbackState: {}, viewportWidth: 0, mediaQueryKey: null, hasBoundaryNodes: !1, hasDefinedMediaQueries: !1, reducedMotion: !1 };
    e.ixSession = function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : R,
            e = 1 < arguments.length ? arguments[1] : void 0; switch (e.type) {
            case y:
                var n = e.payload,
                    i = n.hasBoundaryNodes,
                    n = n.reducedMotion; return (0, g.merge)(t, { hasBoundaryNodes: i, reducedMotion: n });
            case v:
                return (0, g.set)(t, "active", !0);
            case E:
                var r = e.payload.step,
                    r = void 0 === r ? 20 : r; return (0, g.set)(t, "tick", t.tick + r);
            case b:
                return R;
            case _:
                r = e.payload.now; return (0, g.set)(t, "tick", r);
            case T:
                var a = (0, g.addLast)(t.eventListeners, e.payload); return (0, g.set)(t, "eventListeners", a);
            case I:
                var s = e.payload,
                    a = s.stateKey,
                    s = s.newState; return (0, g.setIn)(t, ["eventState", a], s);
            case A:
                var o = e.payload,
                    s = o.actionListId,
                    o = o.isPlaying; return (0, g.setIn)(t, ["playbackState", s], o);
            case S:
                for (var o = e.payload, l = o.width, c = o.mediaQueries, u = c.length, d = null, h = 0; h < u; h++) { var f = c[h],
                        p = f.key,
                        m = f.min,
                        f = f.max; if (m <= l && l <= f) { d = p; break } } return (0, g.merge)(t, { viewportWidth: l, mediaQueryKey: d });
            case x:
                return (0, g.set)(t, "hasDefinedMediaQueries", !0);
            default:
                return t } } }, function(t, e) { t.exports = function(t) { if (Array.isArray(t)) { for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e]; return n } } }, function(t, e) { t.exports = function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) } }, function(t, e) { t.exports = function() { throw new TypeError("Invalid attempt to spread non-iterable instance") } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createElementState = v, e.mergeActionState = E, e.ixElements = void 0; var c = n(40),
        i = n(6),
        r = i.IX2EngineConstants,
        a = (r.HTML_ELEMENT, r.PLAIN_OBJECT),
        s = (r.ABSTRACT_NODE, r.CONFIG_X_VALUE),
        o = r.CONFIG_Y_VALUE,
        l = r.CONFIG_Z_VALUE,
        u = r.CONFIG_VALUE,
        d = r.CONFIG_X_UNIT,
        h = r.CONFIG_Y_UNIT,
        n = r.CONFIG_Z_UNIT,
        r = r.CONFIG_UNIT,
        i = i.IX2EngineActionTypes,
        f = i.IX2_SESSION_STOPPED,
        p = i.IX2_INSTANCE_ADDED,
        m = i.IX2_ELEMENT_STATE_CHANGED,
        g = {},
        y = "refState";

    function v(t, e, n, i, r) { r = n === a ? (0, c.getIn)(r, ["config", "target", "objectId"]) : null; return (0, c.mergeIn)(t, [i], { id: i, ref: e, refId: r, refType: n }) }

    function E(t, e, n, i, r) { var a, r = (a = r.config, b.reduce(function(t, e) { var n = e[0],
                    i = e[1],
                    e = a[n],
                    n = a[i]; return null != e && null != n && (t[i] = n), t }, {})),
            n = [e, y, n]; return (0, c.mergeIn)(t, n, i, r) }
    e.ixElements = function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g,
            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; switch (e.type) {
            case f:
                return g;
            case p:
                var n = e.payload,
                    i = n.elementId,
                    r = n.element,
                    a = n.origin,
                    s = n.actionItem,
                    o = n.refType,
                    l = s.actionTypeId,
                    n = t; return (0, c.getIn)(n, [i, r]) !== r && (n = v(n, r, o, i, s)), E(n, i, l, a, s);
            case m:
                s = e.payload; return E(t, s.elementId, s.actionTypeId, s.current, s.actionItem);
            default:
                return t } }; var b = [
        [s, d],
        [o, h],
        [l, n],
        [u, r]
    ] }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
    e.getPluginConfig = function(t) { return t.value };
    e.getPluginDuration = function(t, e) { if ("auto" !== e.config.duration) return null;
        e = parseFloat(t.getAttribute("data-duration")); return 0 < e ? 1e3 * e : 1e3 * parseFloat(t.getAttribute("data-default-duration")) };
    e.getPluginOrigin = function(t) { return t || { value: 0 } };
    e.getPluginDestination = function(t) { return { value: t.value } };
    e.createPluginInstance = function(t) { t = window.Webflow.require("lottie").createInstance(t); return t.stop(), t.setSubframe(!0), t };
    e.renderPlugin = function(t, e, n) { t && (n = e[n.actionTypeId].value / 100, t.goToFrame(t.frames * n)) };
    e.clearPlugin = function(t) { window.Webflow.require("lottie").createInstance(t).stop() } }, function(t, e, n) { "use strict"; var i = n(1),
        r = i(n(41)),
        o = i(n(24)),
        a = n(1);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getInstanceId = function() { return "i" + ot++ }, e.getElementId = function(t, e) { for (var n in t) { var i = t[n]; if (i && i.ref === e) return i.id } return "e" + lt++ }, e.reifyState = function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.events,
            n = t.actionLists,
            i = t.site,
            r = (0, f.default)(e, function(t, e) { var n = e.eventTypeId; return t[n] || (t[n] = {}), t[n][e.id] = e, t }, {}),
            t = i && i.mediaQueries,
            i = [];
        t ? i = t.map(function(t) { return t.key }) : (t = [], console.warn("IX2 missing mediaQueries in site data")); return { ixData: { events: e, actionLists: n, eventTypeMap: r, mediaQueries: t, mediaQueryKeys: i } } }, e.observeStore = function(t) { var e = t.store,
            n = t.select,
            i = t.onChange,
            t = t.comparator,
            r = void 0 === t ? ct : t,
            a = e.getState,
            s = (0, e.subscribe)(function() { var t = n(a()); if (null == t) return void s();
                r(t, o) || i(o = t, e) }),
            o = n(a()); return s }, e.getAffectedElements = dt, e.getComputedStyle = function(t) { var e = t.element,
            t = t.actionItem; if (!x.IS_BROWSER_ENV) return {}; switch (t.actionTypeId) {
            case $:
            case Z:
            case J:
            case tt:
            case et:
                return window.getComputedStyle(e);
            default:
                return {} } }, e.getInstanceOrigin = function(t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
            i = 3 < arguments.length ? arguments[3] : void 0,
            r = (4 < arguments.length ? arguments[4] : void 0).getStyle,
            a = i.actionTypeId,
            s = i.config; if ((0, h.isPluginType)(a)) return (0, h.getPluginOrigin)(a)(e[a]); switch (a) {
            case X:
            case W:
            case Y:
            case q:
                return e[a] || gt[a];
            case K:
                return ft(e[a], i.config.filters);
            case Q:
                return { value: (0, c.default)(parseFloat(r(t, R)), 1) };
            case $:
                var o = r(t, C),
                    l = r(t, O); return o = s.widthUnit === F ? ht.test(o) ? parseFloat(o) : parseFloat(n.width) : (0, c.default)(parseFloat(o), parseFloat(n.width)), l = s.heightUnit === F ? ht.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, c.default)(parseFloat(l), parseFloat(n.height)), { widthValue: o, heightValue: l };
            case Z:
            case J:
            case tt:
                return function(t) { var e = t.element,
                        n = t.actionTypeId,
                        i = t.computedStyle,
                        t = t.getStyle,
                        n = rt[n],
                        e = t(e, n),
                        n = bt.test(e) ? e : i[n],
                        n = function(t, e) { e = t.exec(e); return e ? e[1] : "" }(Tt, n).split(V); return { rValue: (0, c.default)(parseInt(n[0], 10), 255), gValue: (0, c.default)(parseInt(n[1], 10), 255), bValue: (0, c.default)(parseInt(n[2], 10), 255), aValue: (0, c.default)(parseFloat(n[3]), 1) } }({ element: t, actionTypeId: a, computedStyle: n, getStyle: r });
            case et:
                return { value: (0, c.default)(r(t, L), n.display) };
            case nt:
                return e[a] || { value: 0 };
            default:
                return } }, e.getDestinationValues = function(t) { var e = t.element,
            n = t.actionItem,
            i = t.elementApi,
            t = n.actionTypeId; if ((0, h.isPluginType)(t)) return (0, h.getPluginDestination)(t)(n.config); switch (t) {
            case X:
            case W:
            case Y:
            case q:
                var r = n.config,
                    a = r.xValue,
                    s = r.yValue,
                    o = r.zValue; return { xValue: a, yValue: s, zValue: o };
            case $:
                var r = i.getStyle,
                    l = i.setStyle,
                    a = i.getProperty,
                    c = n.config,
                    s = c.widthUnit,
                    o = c.heightUnit,
                    u = n.config,
                    c = u.widthValue,
                    u = u.heightValue; return x.IS_BROWSER_ENV ? (s === F && (s = r(e, C), l(e, C, ""), c = a(e, "offsetWidth"), l(e, C, s)), o === F && (d = r(e, O), l(e, O, ""), u = a(e, "offsetHeight"), l(e, O, d)), { widthValue: c, heightValue: u }) : { widthValue: c, heightValue: u };
            case Z:
            case J:
            case tt:
                var l = n.config,
                    d = l.rValue,
                    c = l.gValue,
                    u = l.bValue,
                    l = l.aValue; return { rValue: d, gValue: c, bValue: u, aValue: l };
            case K:
                return n.config.filters.reduce(pt, {});
            default:
                return { value: n.config.value } } }, e.getRenderType = mt, e.getStyleProp = function(t, e) { return t === H ? e.replace("STYLE_", "").toLowerCase() : null }, e.renderHTMLElement = function(t, e, n, i, r, a, s, o, l) { switch (o) {
            case U:
                return function(t, u, e, n, i) { var r = Et.map(function(t) { var e = gt[t],
                                n = u[t] || {},
                                i = n.xValue,
                                r = void 0 === i ? e.xValue : i,
                                i = n.yValue,
                                a = void 0 === i ? e.yValue : i,
                                i = n.zValue,
                                s = void 0 === i ? e.zValue : i,
                                i = n.xUnit,
                                o = void 0 === i ? "" : i,
                                i = n.yUnit,
                                l = void 0 === i ? "" : i,
                                n = n.zUnit,
                                c = void 0 === n ? "" : n; switch (t) {
                                case X:
                                    return "".concat(y, "(").concat(r).concat(o, ", ").concat(a).concat(l, ", ").concat(s).concat(c, ")");
                                case W:
                                    return "".concat(v, "(").concat(r).concat(o, ", ").concat(a).concat(l, ", ").concat(s).concat(c, ")");
                                case Y:
                                    return "".concat(E, "(").concat(r).concat(o, ") ").concat(b, "(").concat(a).concat(l, ") ").concat(T, "(").concat(s).concat(c, ")");
                                case q:
                                    return "".concat(I, "(").concat(r).concat(o, ", ").concat(a).concat(l, ")");
                                default:
                                    return "" } }).join(" "),
                        a = i.setStyle;
                    It(t, x.TRANSFORM_PREFIXED, i), a(t, x.TRANSFORM_PREFIXED, r),
                        function(t, e) { var n = t.actionTypeId,
                                i = e.xValue,
                                t = e.yValue,
                                e = e.zValue; return n === X && void 0 !== e || n === W && void 0 !== e || n === Y && (void 0 !== i || void 0 !== t) }(n, e) && a(t, x.TRANSFORM_STYLE_PREFIXED, _) }(t, e, n, r, s);
            case H:
                return function(t, e, n, i, r) { var a = r.setStyle,
                        s = n.actionTypeId,
                        o = n.config; switch (s) {
                        case $:
                            var l = n.config,
                                c = l.widthUnit,
                                u = void 0 === c ? "" : c,
                                d = l.heightUnit,
                                c = void 0 === d ? "" : d,
                                l = e.widthValue,
                                d = e.heightValue;
                            void 0 !== l && (u === F && (u = "px"), It(t, C, r), a(t, C, l + u)), void 0 !== d && (c === F && (c = "px"), It(t, O, r), a(t, O, d + c)); break;
                        case K:
                            ! function(t, e, i, n) { var r = (0, f.default)(e, function(t, e, n) { return "".concat(t, " ").concat(n, "(").concat(e).concat(vt(n, i), ")") }, ""),
                                    e = n.setStyle;
                                It(t, P, n), e(t, P, r) }(t, e, o, r); break;
                        case Z:
                        case J:
                        case tt:
                            var l = rt[s],
                                u = Math.round(e.rValue),
                                d = Math.round(e.gValue),
                                c = Math.round(e.bValue),
                                h = e.aValue;
                            It(t, l, r), a(t, l, 1 <= h ? "rgb(".concat(u, ",").concat(d, ",").concat(c, ")") : "rgba(".concat(u, ",").concat(d, ",").concat(c, ",").concat(h, ")")); break;
                        default:
                            h = o.unit, h = void 0 === h ? "" : h;
                            It(t, i, r), a(t, i, e.value + h) } }(t, n, r, a, s);
            case z:
                return function(t, e, n) { n = n.setStyle; if (e.actionTypeId === et) { e = e.config.value;
                        e === A && x.IS_BROWSER_ENV ? n(t, L, x.FLEX_PREFIXED) : n(t, L, e) } }(t, r, s);
            case j:
                var c = r.actionTypeId; if ((0, h.isPluginType)(c)) return (0, h.renderPlugin)(c)(l, e, r) } }, e.clearAllStyles = function(t) { var e = t.store,
            n = t.elementApi,
            t = e.getState().ixData,
            e = t.events,
            i = void 0 === e ? {} : e,
            t = t.actionLists,
            r = void 0 === t ? {} : t;
        Object.keys(i).forEach(function(t) { var e = i[t],
                t = e.action.config.actionListId,
                t = r[t];
            t && At({ actionList: t, event: e, elementApi: n }) }), Object.keys(r).forEach(function(t) { At({ actionList: r[t], elementApi: n }) }) }, e.cleanupHTMLElement = function(t, e, n) { var i = n.setStyle,
            r = n.getStyle,
            a = e.actionTypeId;
        a === $ && ((e = e.config).widthUnit === F && i(t, C, ""), e.heightUnit === F && i(t, O, ""));
        r(t, k) && xt({ effect: _t, actionTypeId: a, elementApi: n })(t) }, e.getMaxDurationItemIndex = Pt, e.getActionListProgress = function(t, e) { var n = t.actionItemGroups,
            i = t.useFirstGroupAsInitialState,
            r = e.actionItem,
            e = e.verboseTimeElapsed,
            a = void 0 === e ? 0 : e,
            s = 0,
            o = 0; return n.forEach(function(t, e) { var n;
            i && 0 === e || (t = (e = (n = t.actionItems)[Pt(n)]).config, n = e.actionTypeId, r.id === e.id && (o = s + a), n = mt(n) === z ? 0 : t.duration, s += t.delay + n) }), 0 < s ? (0, d.optimizeFloat)(o / s) : 0 }, e.reduceListToGroup = function(t) {
        function e(t) { return s.push((0, l.mergeIn)(t, ["config"], { delay: 0, duration: 0 })), t.id === i } var n = t.actionList,
            i = t.actionItemId,
            r = t.rawData,
            a = n.actionItemGroups,
            t = n.continuousParameterGroups,
            s = []; return a && a.some(function(t) { return t.actionItems.some(e) }), t && t.some(function(t) { return t.continuousActionGroups.some(function(t) { return t.actionItems.some(e) }) }), (0, l.setIn)(r, ["actionLists"], (0, o.default)({}, n.id, { id: n.id, actionItemGroups: [{ actionItems: s }] })) }, e.shouldNamespaceEventParameter = function(t, e) { e = e.basedOn; return t === S.EventTypeConsts.SCROLLING_IN_VIEW && (e === S.EventBasedOn.ELEMENT || null == e) || t === S.EventTypeConsts.MOUSE_MOVE && e === S.EventBasedOn.ELEMENT }, e.getNamespacedParameterId = function(t, e) { return t + G + e }, e.shouldAllowMediaQuery = function(t, e) { return null == e || -1 !== t.indexOf(e) }, e.mediaQueriesEqual = function(t, e) { return (0, u.default)(t && t.sort(), e && e.sort()) }, e.stringifyTarget = function(t) { if ("string" == typeof t) return t; var e = t.id,
            n = void 0 === e ? "" : e,
            e = t.selector,
            e = void 0 === e ? "" : e,
            t = t.useEventTarget; return n + B + e + B + (void 0 === t ? "" : t) }, e.getItemConfigByKey = void 0; var c = a(n(320)),
        f = a(n(321)),
        s = a(n(327)),
        l = n(40),
        u = a(n(145)),
        S = n(6),
        d = n(140),
        h = n(142),
        x = n(86),
        p = S.IX2EngineConstants,
        m = p.BACKGROUND,
        g = p.TRANSFORM,
        y = p.TRANSLATE_3D,
        v = p.SCALE_3D,
        E = p.ROTATE_X,
        b = p.ROTATE_Y,
        T = p.ROTATE_Z,
        I = p.SKEW,
        _ = p.PRESERVE_3D,
        A = p.FLEX,
        R = p.OPACITY,
        P = p.FILTER,
        C = p.WIDTH,
        O = p.HEIGHT,
        i = p.BACKGROUND_COLOR,
        a = p.BORDER_COLOR,
        n = p.COLOR,
        M = p.CHILDREN,
        D = p.IMMEDIATE_CHILDREN,
        w = p.SIBLINGS,
        N = p.PARENT,
        L = p.DISPLAY,
        k = p.WILL_CHANGE,
        F = p.AUTO,
        V = p.COMMA_DELIMITER,
        G = p.COLON_DELIMITER,
        B = p.BAR_DELIMITER,
        U = p.RENDER_TRANSFORM,
        z = p.RENDER_GENERAL,
        H = p.RENDER_STYLE,
        j = p.RENDER_PLUGIN,
        p = S.ActionTypeConsts,
        X = p.TRANSFORM_MOVE,
        W = p.TRANSFORM_SCALE,
        Y = p.TRANSFORM_ROTATE,
        q = p.TRANSFORM_SKEW,
        Q = p.STYLE_OPACITY,
        K = p.STYLE_FILTER,
        $ = p.STYLE_SIZE,
        Z = p.STYLE_BACKGROUND_COLOR,
        J = p.STYLE_BORDER,
        tt = p.STYLE_TEXT_COLOR,
        et = p.GENERAL_DISPLAY,
        nt = "OBJECT_VALUE",
        it = function(t) { return t.trim() },
        rt = Object.freeze((p = {}, (0, o.default)(p, Z, i), (0, o.default)(p, J, a), (0, o.default)(p, tt, n), p)),
        at = Object.freeze((p = {}, (0, o.default)(p, x.TRANSFORM_PREFIXED, g), (0, o.default)(p, i, m), (0, o.default)(p, R, R), (0, o.default)(p, P, P), (0, o.default)(p, C, C), (0, o.default)(p, O, O), p)),
        st = {},
        ot = 1; var lt = 1; var ct = function(t, e) { return t === e };

    function ut(t) { var e = (0, r.default)(t); return "string" === e ? { id: t } : null != t && "object" === e ? { id: t.id, objectId: t.objectId, selector: t.selector, selectorGuids: t.selectorGuids, appliesTo: t.appliesTo, useEventTarget: t.useEventTarget } : {} }

    function dt(t) { var e = t.config,
            n = t.event,
            i = t.eventTarget,
            r = t.elementRoot,
            a = t.elementApi; if (!a) throw new Error("IX2 missing elementApi"); var s = e.targets; if (Array.isArray(s) && 0 < s.length) return s.reduce(function(t, e) { return t.concat(dt({ config: { target: e }, event: n, eventTarget: i, elementRoot: r, elementApi: a })) }, []); var o = a.getValidDocument,
            l = a.getQuerySelector,
            c = a.queryDocument,
            u = a.getChildElements,
            d = a.getSiblingElements,
            h = a.matchSelector,
            f = a.elementContains,
            p = a.isSiblingNode,
            m = e.target; if (!m) return []; var g = ut(m),
            y = g.id,
            t = g.objectId,
            s = g.selector,
            e = g.selectorGuids,
            m = g.appliesTo,
            g = g.useEventTarget; if (t) return [st[t] || (st[t] = {})]; if (m === S.EventAppliesTo.PAGE) { var v = o(y); return v ? [v] : [] } var E, b, T, I = (null !== (v = null == n || null === (I = n.action) || void 0 === I || null === (_ = I.config) || void 0 === _ ? void 0 : _.affectedElements) && void 0 !== v ? v : {})[y || s] || {},
            _ = Boolean(I.id || I.selector),
            v = n && l(ut(n.target)); if (_ ? (E = I.limitAffectedElements, b = v, T = l(I)) : b = T = l({ id: y, selector: s, selectorGuids: e }), n && g) { var A = i && (T || !0 === g) ? [i] : c(v); if (T) { if (g === N) return c(T).filter(function(e) { return A.some(function(t) { return f(e, t) }) }); if (g === M) return c(T).filter(function(e) { return A.some(function(t) { return f(t, e) }) }); if (g === w) return c(T).filter(function(e) { return A.some(function(t) { return p(t, e) }) }) } return A } return null == b || null == T ? [] : x.IS_BROWSER_ENV && r ? c(T).filter(function(t) { return r.contains(t) }) : E === M ? c(b, T) : E === D ? u(c(b)).filter(h(T)) : E === w ? d(c(b)).filter(h(T)) : c(T) } var ht = /px/,
        ft = function(t, e) { return e.reduce(function(t, e) { return null == t[e.type] && (t[e.type] = yt[e.type]), t }, t || {}) }; var pt = function(t, e) { return e && (t[e.type] = e.value || 0), t };

    function mt(t) { return /^TRANSFORM_/.test(t) ? U : /^STYLE_/.test(t) ? H : /^GENERAL_/.test(t) ? z : /^PLUGIN_/.test(t) ? j : void 0 }
    e.getItemConfigByKey = function(t, e, n) { if ((0, h.isPluginType)(t)) return (0, h.getPluginConfig)(t)(n, e); if (t !== K) return n[e];
        n = (0, s.default)(n.filters, function(t) { return t.type === e }); return n ? n.value : 0 }; var gt = (e = {}, (0, o.default)(e, X, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })), (0, o.default)(e, W, Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })), (0, o.default)(e, Y, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })), (0, o.default)(e, q, Object.freeze({ xValue: 0, yValue: 0 })), e),
        yt = Object.freeze({ blur: 0, "hue-rotate": 0, invert: 0, grayscale: 0, saturate: 100, sepia: 0, contrast: 100, brightness: 100 }),
        vt = function(e, t) { t = (0, s.default)(t.filters, function(t) { return t.type === e }); if (t && t.unit) return t.unit; switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%" } },
        Et = Object.keys(gt); var bt = /^rgb/,
        Tt = RegExp("rgba?".concat("\\(([^)]+)\\)"));

    function It(t, e, n) { var i;!x.IS_BROWSER_ENV || (i = at[e]) && (e = n.getStyle, n = n.setStyle, (e = e(t, k)) ? -1 === (e = e.split(V).map(it)).indexOf(i) && n(t, k, e.concat(i).join(V)) : n(t, k, i)) }

    function _t(t, e, n) { var i;!x.IS_BROWSER_ENV || (i = at[e]) && (e = n.getStyle, n = n.setStyle, (e = e(t, k)) && -1 !== e.indexOf(i) && n(t, k, e.split(V).map(it).filter(function(t) { return t !== i }).join(V))) }

    function At(t) { var e = t.actionList,
            e = void 0 === e ? {} : e,
            n = t.event,
            i = t.elementApi,
            t = e.actionItemGroups,
            e = e.continuousParameterGroups;
        t && t.forEach(function(t) { St({ actionGroup: t, event: n, elementApi: i }) }), e && e.forEach(function(t) { t.continuousActionGroups.forEach(function(t) { St({ actionGroup: t, event: n, elementApi: i }) }) }) }

    function St(t) { var e = t.actionGroup,
            n = t.event,
            i = t.elementApi;
        e.actionItems.forEach(function(t) { var e = t.actionTypeId,
                t = t.config,
                e = (0, h.isPluginType)(e) ? (0, h.clearPlugin)(e) : xt({ effect: Rt, actionTypeId: e, elementApi: i });
            dt({ config: t, event: n, elementApi: i }).forEach(e) }) } var xt = function(t) { var e = t.effect,
            n = t.actionTypeId,
            i = t.elementApi; return function(t) { switch (n) {
                case X:
                case W:
                case Y:
                case q:
                    e(t, x.TRANSFORM_PREFIXED, i); break;
                case K:
                    e(t, P, i); break;
                case Q:
                    e(t, R, i); break;
                case $:
                    e(t, C, i), e(t, O, i); break;
                case Z:
                case J:
                case tt:
                    e(t, rt[n], i); break;
                case et:
                    e(t, L, i) } } };

    function Rt(t, e, n) { var i = n.setStyle;
        _t(t, e, n), i(t, e, ""), e === x.TRANSFORM_PREFIXED && i(t, x.TRANSFORM_STYLE_PREFIXED, "") }

    function Pt(t) { var n = 0,
            i = 0; return t.forEach(function(t, e) { t = t.config, t = t.delay + t.duration;
            n <= t && (n = t, i = e) }), i } }, function(t, e) { t.exports = function(t, e) { return null == t || t != t ? e : t } }, function(t, e, n) { var a = n(322),
        s = n(143),
        o = n(18),
        l = n(326),
        c = n(2);
    t.exports = function(t, e, n) { var i = c(t) ? a : l,
            r = arguments.length < 3; return i(t, o(e, 4), n, r, s) } }, function(t, e) { t.exports = function(t, e, n, i) { var r = -1,
            a = null == t ? 0 : t.length; for (i && a && (n = t[++r]); ++r < a;) n = e(n, t[r], r, t); return n } }, function(t, e, n) { n = n(324)();
    t.exports = n }, function(t, e) { t.exports = function(l) { return function(t, e, n) { for (var i = -1, r = Object(t), a = n(t), s = a.length; s--;) { var o = a[l ? s : ++i]; if (!1 === e(r[o], o, r)) break } return t } } }, function(t, e, n) { var o = n(26);
    t.exports = function(a, s) { return function(t, e) { if (null == t) return t; if (!o(t)) return a(t, e); for (var n = t.length, i = s ? n : -1, r = Object(t);
                (s ? i-- : ++i < n) && !1 !== e(r[i], i, r);); return t } } }, function(t, e) { t.exports = function(t, i, r, a, e) { return e(t, function(t, e, n) { r = a ? (a = !1, t) : i(r, t, e, n) }), r } }, function(t, e, n) { n = n(137)(n(328));
    t.exports = n }, function(t, e, n) { var a = n(93),
        s = n(18),
        o = n(111),
        l = Math.max,
        c = Math.min;
    t.exports = function(t, e, n) { var i = null == t ? 0 : t.length; if (!i) return -1; var r = i - 1; return void 0 !== n && (r = o(n), r = n < 0 ? l(i + r, 0) : c(r, i - 1)), a(t, s(e, 3), r, !0) } }, function(t, e) { t.exports = function(t) { return t && t.__esModule ? t : { default: t } } }, function(t, e, n) { "use strict"; var a = Object.prototype.hasOwnProperty;

    function s(t, e) { return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e }
    t.exports = function(t, e) { if (s(t, e)) return !0; if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1; var n = Object.keys(t),
            i = Object.keys(e); if (n.length !== i.length) return !1; for (var r = 0; r < n.length; r++)
            if (!a.call(e, n[r]) || !s(t[n[r]], e[n[r]])) return !1;
        return !0 } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixInstances = void 0;

    function H(t, e) { var n = t.position,
            i = t.parameterId,
            r = t.actionGroups,
            a = t.destinationKeys,
            s = t.smoothing,
            o = t.restingValue,
            l = t.actionTypeId,
            c = t.customEasingFn,
            u = t.skipMotion,
            d = t.skipToValue,
            e = e.payload.parameters,
            s = Math.max(1 - s, .01);
        null == (i = e[i]) && (s = 1, i = o); var h, f, p, i = Math.max(i, 0) || 0,
            i = M(i - n),
            m = 100 * (i = u ? d : M(n + i * s)); if (i === n && t.current) return t; for (var g = 0, y = r.length; g < y; g++) { var v, E = r[g],
                b = E.keyframe,
                T = E.actionItems;
            0 === g && (h = T[0]), b <= m && (h = T[0], v = (T = (E = r[g + 1]) && m !== b) ? E.actionItems[0] : null, T && (f = b / 100, p = (E.keyframe - b) / 100)) } var I = {}; if (h && !v)
            for (var _ = 0, A = a.length; _ < A; _++) { var S = a[_];
                I[S] = w(l, S, h.config) } else if (h && v && void 0 !== f && void 0 !== p)
                for (var s = (i - f) / p, n = h.config.easing, x = D(n, s, c), R = 0, P = a.length; R < P; R++) { var C = a[R],
                        O = w(l, C, h.config),
                        O = (w(l, C, v.config) - O) * x + O;
                    I[C] = O }
            return (0, X.merge)(t, { position: i, current: I }) }

    function j(t, e) { var n = t.active,
            r = t.origin,
            i = t.start,
            a = t.immediate,
            s = t.renderType,
            o = t.verbose,
            l = t.actionItem,
            c = t.destination,
            u = t.destinationKeys,
            d = t.pluginDuration,
            h = t.instanceDelay,
            f = t.customEasingFn,
            p = t.skipMotion,
            m = l.config.easing,
            l = (g = l.config).duration,
            g = g.delay; if (null != d && (l = d), g = null != h ? h : g, s === v ? l = 0 : (a || p) && (l = g = 0), e = e.payload.now, n && r) { n = e - (i + g); if (o && (i = e - i, g = l + g, i = M(Math.min(Math.max(0, i / g), 1)), t = (0, X.set)(t, "verboseTimeElapsed", g * i)), n < 0) return t; var l = M(Math.min(Math.max(0, n / l), 1)),
                y = D(m, l, f),
                m = {},
                f = null; return u.length && (f = u.reduce(function(t, e) { var n = c[e],
                    i = parseFloat(r[e]) || 0,
                    i = (parseFloat(n) - i) * y + i; return t[e] = i, t }, {})), m.current = f, 1 === (m.position = l) && (m.active = !1, m.complete = !0), (0, X.merge)(t, m) } return t } var i = n(6),
        r = n(30),
        X = n(40),
        n = i.IX2EngineActionTypes,
        W = n.IX2_RAW_DATA_IMPORTED,
        Y = n.IX2_SESSION_STOPPED,
        q = n.IX2_INSTANCE_ADDED,
        Q = n.IX2_INSTANCE_STARTED,
        K = n.IX2_INSTANCE_REMOVED,
        $ = n.IX2_ANIMATION_FRAME_CHANGED,
        n = r.IX2EasingUtils,
        M = n.optimizeFloat,
        D = n.applyEasing,
        Z = n.createBezierEasing,
        v = i.IX2EngineConstants.RENDER_GENERAL,
        r = r.IX2VanillaUtils,
        w = r.getItemConfigByKey,
        J = r.getRenderType,
        tt = r.getStyleProp;
    e.ixInstances = function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = 1 < arguments.length ? arguments[1] : void 0; switch (e.type) {
            case W:
                return e.payload.ixInstances || Object.freeze({});
            case Y:
                return Object.freeze({});
            case q:
                var n = e.payload,
                    i = n.instanceId,
                    r = n.elementId,
                    a = n.actionItem,
                    s = n.eventId,
                    o = n.eventTarget,
                    l = n.eventStateKey,
                    c = n.actionListId,
                    u = n.groupIndex,
                    d = n.isCarrier,
                    h = n.origin,
                    f = n.destination,
                    p = n.immediate,
                    m = n.verbose,
                    g = n.continuous,
                    y = n.parameterId,
                    v = n.actionGroups,
                    E = n.smoothing,
                    b = n.restingValue,
                    T = n.pluginInstance,
                    I = n.pluginDuration,
                    _ = n.instanceDelay,
                    A = n.skipMotion,
                    S = n.skipToValue,
                    x = a.actionTypeId,
                    R = J(x),
                    P = tt(R, x),
                    C = Object.keys(f).filter(function(t) { return null != f[t] }),
                    n = a.config.easing; return (0, X.set)(t, i, { id: i, elementId: r, active: !1, position: 0, start: 0, origin: h, destination: f, destinationKeys: C, immediate: p, verbose: m, current: null, actionItem: a, actionTypeId: x, eventId: s, eventTarget: o, eventStateKey: l, actionListId: c, groupIndex: u, renderType: R, isCarrier: d, styleProp: P, continuous: g, parameterId: y, actionGroups: v, smoothing: E, restingValue: b, pluginInstance: T, pluginDuration: I, instanceDelay: _, skipMotion: A, skipToValue: S, customEasingFn: Array.isArray(n) && 4 === n.length ? Z(n) : void 0 });
            case Q:
                S = e.payload, n = S.instanceId, S = S.time; return (0, X.mergeIn)(t, [n], { active: !0, complete: !1, start: S });
            case K:
                var O = e.payload.instanceId; if (!t[O]) return t; for (var M = {}, D = Object.keys(t), w = D.length, N = 0; N < w; N++) { var L = D[N];
                    L !== O && (M[L] = t[L]) } return M;
            case $:
                for (var k = t, F = Object.keys(t), V = F.length, G = 0; G < V; G++) var B = F[G],
                    U = t[B],
                    z = U.continuous ? H : j,
                    k = (0, X.set)(k, B, z(U, e)); return k;
            default:
                return t } } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixParameters = void 0; var n = n(6).IX2EngineActionTypes,
        r = n.IX2_RAW_DATA_IMPORTED,
        a = n.IX2_SESSION_STOPPED,
        s = n.IX2_PARAMETER_CHANGED;
    e.ixParameters = function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            e = 1 < arguments.length ? arguments[1] : void 0; switch (e.type) {
            case r:
                return e.payload.ixParameters || {};
            case a:
                return {};
            case s:
                var n = e.payload,
                    i = n.key,
                    n = n.value; return t[i] = n, t;
            default:
                return t } } }, function(t, e) { t.exports = function(t, e) { if (null == t) return {}; for (var n, i = {}, r = Object.keys(t), a = 0; a < r.length; a++) n = r[a], 0 <= e.indexOf(n) || (i[n] = t[n]); return i } }, function(t, e, n) { var i = n(64),
        r = n(66),
        a = n(26),
        s = n(335),
        o = n(336);
    t.exports = function(t) { if (null == t) return 0; if (a(t)) return s(t) ? o(t) : t.length; var e = r(t); return "[object Map]" == e || "[object Set]" == e ? t.size : i(t).length } }, function(t, e, n) { var i = n(25),
        r = n(2),
        a = n(20);
    t.exports = function(t) { return "string" == typeof t || !r(t) && a(t) && "[object String]" == i(t) } }, function(t, e, n) { var i = n(337),
        r = n(338),
        a = n(339);
    t.exports = function(t) { return (r(t) ? a : i)(t) } }, function(t, e, n) { n = n(110)("length");
    t.exports = n }, function(t, e) { var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    t.exports = function(t) { return n.test(t) } }, function(t, e) { var n = "\\ud800-\\udfff",
        i = "[" + n + "]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        a = "\\ud83c[\\udffb-\\udfff]",
        s = "[^" + n + "]",
        o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        l = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + r + "|" + a + ")" + "?",
        n = "[\\ufe0e\\ufe0f]?",
        c = n + c + ("(?:\\u200d(?:" + [s, o, l].join("|") + ")" + n + c + ")*"),
        i = "(?:" + [s + r + "?", r, o, l, i].join("|") + ")",
        u = RegExp(a + "(?=" + a + ")|" + i + c, "g");
    t.exports = function(t) { for (var e = u.lastIndex = 0; u.test(t);) ++e; return e } }, function(t, e, n) { var i = n(18),
        r = n(341),
        a = n(342);
    t.exports = function(t, e) { return a(t, r(i(e))) } }, function(t, e) { t.exports = function(e) { if ("function" != typeof e) throw new TypeError("Expected a function"); return function() { var t = arguments; switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2]) } return !e.apply(this, t) } } }, function(t, e, n) { var i = n(109),
        r = n(18),
        a = n(343),
        s = n(346);
    t.exports = function(t, n) { if (null == t) return {}; var e = i(s(t), function(t) { return [t] }); return n = r(n), a(t, e, function(t, e) { return n(t, e[0]) }) } }, function(t, e, n) { var l = n(68),
        c = n(344),
        u = n(49);
    t.exports = function(t, e, n) { for (var i = -1, r = e.length, a = {}; ++i < r;) { var s = e[i],
                o = l(t, s);
            n(o, s) && c(a, u(s, t), o) } return a } }, function(t, e, n) { var d = n(345),
        h = n(49),
        f = n(61),
        p = n(12),
        m = n(33);
    t.exports = function(t, e, n, i) { if (!p(t)) return t; for (var r = -1, a = (e = h(e, t)).length, s = a - 1, o = t; null != o && ++r < a;) { var l, c = m(e[r]),
                u = n; if ("__proto__" === c || "constructor" === c || "prototype" === c) return t;
            r != s && (l = o[c], void 0 === (u = i ? i(l, c, o) : void 0) && (u = p(l) ? l : f(e[r + 1]) ? [] : {})), d(o, c, u), o = o[c] } return t } }, function(t, e, n) { var r = n(147),
        a = n(56),
        s = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n) { var i = t[e];
        s.call(t, e) && a(i, n) && (void 0 !== n || e in t) || r(t, e, n) } }, function(t, e, n) { var i = n(100),
        r = n(347),
        a = n(349);
    t.exports = function(t) { return i(t, a, r) } }, function(t, e, n) { var i = n(59),
        r = n(348),
        a = n(101),
        n = n(102),
        n = Object.getOwnPropertySymbols ? function(t) { for (var e = []; t;) i(e, a(t)), t = r(t); return e } : n;
    t.exports = n }, function(t, e, n) { n = n(105)(Object.getPrototypeOf, Object);
    t.exports = n }, function(t, e, n) { var i = n(103),
        r = n(350),
        a = n(26);
    t.exports = function(t) { return a(t) ? i(t, !0) : r(t) } }, function(t, e, n) { var r = n(12),
        a = n(65),
        s = n(351),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) { if (!r(t)) return s(t); var e, n = a(t),
            i = []; for (e in t)("constructor" != e || !n && o.call(t, e)) && i.push(e); return i } }, function(t, e) { t.exports = function(t) { var e = []; if (null != t)
            for (var n in Object(t)) e.push(n); return e } }, function(t, e, n) { var i = n(64),
        r = n(66),
        a = n(48),
        s = n(2),
        o = n(26),
        l = n(60),
        c = n(65),
        u = n(62),
        d = Object.prototype.hasOwnProperty;
    t.exports = function(t) { if (null == t) return !0; if (o(t) && (s(t) || "string" == typeof t || "function" == typeof t.splice || l(t) || u(t) || a(t))) return !t.length; var e, n = r(t); if ("[object Map]" == n || "[object Set]" == n) return !t.size; if (c(t)) return !i(t).length; for (e in t)
            if (d.call(t, e)) return !1;
        return !0 } }, function(t, e, n) { var a = n(147),
        s = n(144),
        o = n(18);
    t.exports = function(t, i) { var r = {}; return i = o(i, 3), s(t, function(t, e, n) { a(r, e, i(t, e, n)) }), r } }, function(t, e, n) { var i = n(355),
        r = n(143),
        a = n(356),
        s = n(2);
    t.exports = function(t, e) { return (s(t) ? i : r)(t, a(e)) } }, function(t, e) { t.exports = function(t, e) { for (var n = -1, i = null == t ? 0 : t.length; ++n < i && !1 !== e(t[n], n, t);); return t } }, function(t, e, n) { var i = n(70);
    t.exports = function(t) { return "function" == typeof t ? t : i } }, function(t, e, n) { var a = n(358),
        s = n(12);
    t.exports = function(t, e, n) { var i = !0,
            r = !0; if ("function" != typeof t) throw new TypeError("Expected a function"); return s(n) && (i = "leading" in n ? !!n.leading : i, r = "trailing" in n ? !!n.trailing : r), a(t, e, { leading: i, maxWait: e, trailing: r }) } }, function(t, e, n) { var v = n(12),
        E = n(359),
        b = n(71),
        T = Math.max,
        I = Math.min;
    t.exports = function(i, n, t) { var r, a, s, o, l, c, u = 0,
            d = !1,
            h = !1,
            e = !0; if ("function" != typeof i) throw new TypeError("Expected a function");

        function f(t) { var e = r,
                n = a; return r = a = void 0, u = t, o = i.apply(n, e) }

        function p(t) { var e = t - c; return void 0 === c || n <= e || e < 0 || h && s <= t - u }

        function m() { var t, e = E(); if (p(e)) return g(e);
            l = setTimeout(m, (e = n - ((t = e) - c), h ? I(e, s - (t - u)) : e)) }

        function g(t) { return l = void 0, e && r ? f(t) : (r = a = void 0, o) }

        function y() { var t = E(),
                e = p(t); if (r = arguments, a = this, c = t, e) { if (void 0 === l) return u = e = c, l = setTimeout(m, n), d ? f(e) : o; if (h) return clearTimeout(l), l = setTimeout(m, n), f(c) } return void 0 === l && (l = setTimeout(m, n)), o } return n = b(n) || 0, v(t) && (d = !!t.leading, h = "maxWait" in t, s = h ? T(b(t.maxWait) || 0, n) : s, e = "trailing" in t ? !!t.trailing : e), y.cancel = function() { void 0 !== l && clearTimeout(l), r = c = a = l = void(u = 0) }, y.flush = function() { return void 0 === l ? o : g(E()) }, y } }, function(t, e, n) { var i = n(9);
    t.exports = function() { return i.Date.now() } }, function(t, e, n) { "use strict"; var i = n(1)(n(41));
    Object.defineProperty(e, "__esModule", { value: !0 }), e.setStyle = function(t, e, n) { t.style[e] = n }, e.getStyle = function(t, e) { return t.style[e] }, e.getProperty = function(t, e) { return t[e] }, e.matchSelector = function(e) { return function(t) { return t[a](e) } }, e.getQuerySelector = function(t) { var e = t.id,
            n = t.selector; if (e) { var i = e; if (-1 !== e.indexOf(s)) { t = e.split(s), e = t[0]; if (i = t[1], e !== document.documentElement.getAttribute(c)) return null } return '[data-w-id="'.concat(i, '"], [data-w-id^="').concat(i, '_instance"]') } return n }, e.getValidDocument = function(t) { return null != t && t !== document.documentElement.getAttribute(c) ? null : document }, e.queryDocument = function(t, e) { return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t)) }, e.elementContains = function(t, e) { return t.contains(e) }, e.isSiblingNode = function(t, e) { return t !== e && t.parentNode === e.parentNode }, e.getChildElements = function(t) { for (var e = [], n = 0, i = (t || []).length; n < i; n++) { var r = t[n].children,
                a = r.length; if (a)
                for (var s = 0; s < a; s++) e.push(r[s]) } return e }, e.getSiblingElements = function() { for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], i = 0, r = t.length; i < r; i++) { var a = t[i].parentNode; if (a && a.children && a.children.length && -1 === n.indexOf(a)) { n.push(a); for (var s = a.firstElementChild; null != s;) - 1 === t.indexOf(s) && e.push(s), s = s.nextElementSibling } } return e }, e.getRefType = function(t) { return null == t || "object" != (0, i.default)(t) ? null : t instanceof Element ? o : l }, e.getClosestElement = void 0; var r = n(30),
        n = n(6),
        a = r.IX2BrowserSupport.ELEMENT_MATCHES,
        n = n.IX2EngineConstants,
        s = n.IX2_ID_DELIMITER,
        o = n.HTML_ELEMENT,
        l = n.PLAIN_OBJECT,
        c = n.WF_PAGE;
    n = Element.prototype.closest ? function(t, e) { return document.documentElement.contains(t) ? t.closest(e) : null } : function(t, e) { if (!document.documentElement.contains(t)) return null; var n = t;
        do { if (n[a] && n[a](e)) return n } while (null != (n = n.parentNode)); return null };
    e.getClosestElement = n }, function(t, e, n) { "use strict"; var i = n(1),
        r = i(n(24)),
        a = i(n(41)),
        s = n(1);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;

    function l(t, e) { if (e) { e = t.getState().ixData.events[e]; if (e && !lt[e.eventTypeId]) return e } return null }

    function o(t, e) { var n = t.store,
            i = t.event,
            r = t.element,
            a = t.eventStateKey,
            s = i.action,
            o = i.id,
            i = (t = s.config).actionListId,
            s = t.autoStopEventId; return (t = l(n, s)) && (0, b.stopActionGroup)({ store: n, eventId: s, eventTarget: r, eventStateKey: s + Z + a.split(Z)[1], actionListId: (0, v.default)(t, "action.config.actionListId") }), (0, b.stopActionGroup)({ store: n, eventId: o, eventTarget: r, eventStateKey: a, actionListId: i }), (0, b.startActionGroup)({ store: n, eventId: o, eventTarget: r, eventStateKey: a, actionListId: i }), e }

    function c(n, i) { return function(t, e) { return !0 === n(t, e) ? i(t, e) : e } }

    function u(i) { return function(t, e) { var n = t.nativeEvent.type,
                n = -1 !== [K, $].indexOf(n) ? n === K : e.isActive,
                n = (0, g.default)({}, e, { isActive: n }); return (!e || n.isActive !== e.isActive) && i(t, n) || n } } var d, h, f, p, m, g = s(n(31)),
        y = s(n(362)),
        v = s(n(67)),
        E = s(n(381)),
        R = n(6),
        b = n(146),
        P = n(87),
        T = n(30),
        I = R.EventTypeConsts,
        _ = I.MOUSE_CLICK,
        A = I.MOUSE_SECOND_CLICK,
        S = I.MOUSE_DOWN,
        x = I.MOUSE_UP,
        C = I.MOUSE_OVER,
        O = I.MOUSE_OUT,
        M = I.DROPDOWN_CLOSE,
        D = I.DROPDOWN_OPEN,
        w = I.SLIDER_ACTIVE,
        N = I.SLIDER_INACTIVE,
        L = I.TAB_ACTIVE,
        k = I.TAB_INACTIVE,
        F = I.NAVBAR_CLOSE,
        V = I.NAVBAR_OPEN,
        G = I.MOUSE_MOVE,
        B = I.PAGE_SCROLL_DOWN,
        U = I.SCROLL_INTO_VIEW,
        z = I.SCROLL_OUT_OF_VIEW,
        H = I.PAGE_SCROLL_UP,
        j = I.SCROLLING_IN_VIEW,
        X = I.PAGE_FINISH,
        W = I.ECOMMERCE_CART_CLOSE,
        Y = I.ECOMMERCE_CART_OPEN,
        q = I.PAGE_START,
        Q = I.PAGE_SCROLL,
        K = "COMPONENT_ACTIVE",
        $ = "COMPONENT_INACTIVE",
        Z = R.IX2EngineConstants.COLON_DELIMITER,
        J = T.IX2VanillaUtils.getNamespacedParameterId,
        tt = function(e) { return function(t) { return !("object" !== (0, a.default)(t) || !e(t)) || t } },
        et = tt(function(t) { return t.element === t.nativeEvent.target }),
        nt = tt(function(t) { var e = t.element,
                t = t.nativeEvent; return e.contains(t.target) }),
        it = (0, y.default)([et, nt]),
        rt = { handler: c(it, o) },
        at = (0, g.default)({}, rt, { types: [K, $].join(" ") }),
        st = [{ target: window, types: "resize orientationchange", throttle: !0 }, { target: document, types: "scroll wheel readystatechange IX2_PAGE_UPDATE", throttle: !0 }],
        ot = "mouseover mouseout",
        i = { types: st },
        lt = { PAGE_START: q, PAGE_FINISH: X },
        ct = (d = void 0 !== window.pageXOffset, h = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function() { return { scrollLeft: d ? window.pageXOffset : h.scrollLeft, scrollTop: d ? window.pageYOffset : h.scrollTop, stiffScrollTop: (0, E.default)(d ? window.pageYOffset : h.scrollTop, 0, h.scrollHeight - window.innerHeight), scrollWidth: h.scrollWidth, scrollHeight: h.scrollHeight, clientWidth: h.clientWidth, clientHeight: h.clientHeight, innerWidth: window.innerWidth, innerHeight: window.innerHeight } }),
        s = function(i) { return function(t, e) { var n = { elementHovered: function(t) { var e = t.element,
                            n = t.nativeEvent,
                            i = n.type,
                            t = n.target,
                            n = n.relatedTarget,
                            t = e.contains(t); if ("mouseover" === i && t) return !0;
                        n = e.contains(n); return !("mouseout" !== i || !t || !n) }(t) }; return (e ? n.elementHovered !== e.elementHovered : n.elementHovered) && i(t, n) || n } },
        n = function(u) { return function(t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n = ct(),
                    i = n.stiffScrollTop,
                    r = n.scrollHeight,
                    a = n.innerHeight,
                    s = t.event,
                    o = s.config,
                    n = s.eventTypeId,
                    s = o.scrollOffsetValue,
                    o = "PX" === o.scrollOffsetUnit,
                    r = r - a,
                    i = Number((i / r).toFixed(2)); if (e && e.percentTop === i) return e; var l, s = (o ? s : a * (s || 0) / 100) / r,
                    r = 0;
                e && (c = i > e.percentTop, r = (l = e.scrollingDown !== c) ? i : e.anchorTop); var s = n === B ? r + s <= i : i <= r - s,
                    c = (0, g.default)({}, e, { percentTop: i, inBounds: s, anchorTop: r, scrollingDown: c }); return e && s && (l || c.inBounds !== e.inBounds) && u(t, c) || c } },
        I = function(i) { return function(t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : { clickCount: 0 },
                    n = { clickCount: e.clickCount % 2 + 1 }; return n.clickCount !== e.clickCount && i(t, n) || n } },
        T = function() { var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]; return (0, g.default)({}, at, { handler: c(t ? it : et, u(function(t, e) { return e.isActive ? rt.handler(t, e) : e })) }) },
        tt = function() { var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]; return (0, g.default)({}, at, { handler: c(t ? it : et, u(function(t, e) { return e.isActive ? e : rt.handler(t, e) })) }) },
        y = (0, g.default)({}, i, { handler: (f = function(t, e) { var n = e.elementVisible,
                    i = t.event; return (t.store.getState().ixData.events[i.action.config.autoStopEventId] || !e.triggered) && i.eventTypeId === U === n ? (o(t), (0, g.default)({}, e, { triggered: !0 })) : e }, function(t, e) { var n, i, r, a, s, a = (0, g.default)({}, e, { elementVisible: (i = (n = t).element, r = n.event.config, a = ct(), s = a.clientWidth, n = a.clientHeight, a = r.scrollOffsetValue, a = "PX" === r.scrollOffsetUnit ? a : n * (a || 0) / 100, i = i.getBoundingClientRect(), a = { left: 0, top: a, right: s, bottom: n - a }, !(i.left > a.right || i.right < a.left || i.top > a.bottom || i.bottom < a.top)) }); return (e ? a.elementVisible !== e.elementVisible : a.elementVisible) && f(t, a) || a }) }),
        nt = (nt = {}, (0, r.default)(nt, w, T()), (0, r.default)(nt, N, tt()), (0, r.default)(nt, D, T()), (0, r.default)(nt, M, tt()), (0, r.default)(nt, V, T(!1)), (0, r.default)(nt, F, tt(!1)), (0, r.default)(nt, L, T()), (0, r.default)(nt, k, tt()), (0, r.default)(nt, Y, { types: "ecommerce-cart-open", handler: c(it, o) }), (0, r.default)(nt, W, { types: "ecommerce-cart-close", handler: c(it, o) }), (0, r.default)(nt, _, { types: "click", handler: c(it, I(function(t, e) { var n, i = e.clickCount;
                e = (n = t).store, n = n.event.action.config.autoStopEventId, Boolean(l(e, n)) && 1 !== i || o(t) })) }), (0, r.default)(nt, A, { types: "click", handler: c(it, I(function(t, e) { 2 === e.clickCount && o(t) })) }), (0, r.default)(nt, S, (0, g.default)({}, rt, { types: "mousedown" })), (0, r.default)(nt, x, (0, g.default)({}, rt, { types: "mouseup" })), (0, r.default)(nt, C, { types: ot, handler: c(it, s(function(t, e) { e.elementHovered && o(t) })) }), (0, r.default)(nt, O, { types: ot, handler: c(it, s(function(t, e) { e.elementHovered || o(t) })) }), (0, r.default)(nt, G, { types: "mousemove mouseout scroll", handler: function(t) { var e = t.store,
                    n = t.element,
                    i = t.eventConfig,
                    r = t.nativeEvent,
                    a = t.eventStateKey,
                    s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
                    o = i.basedOn,
                    l = i.selectedAxis,
                    c = i.continuousParameterGroupId,
                    u = i.reverse,
                    t = i.restingState,
                    i = void 0 === t ? 0 : t,
                    t = r.clientX,
                    d = void 0 === t ? s.clientX : t,
                    t = r.clientY,
                    h = void 0 === t ? s.clientY : t,
                    t = r.pageX,
                    f = void 0 === t ? s.pageX : t,
                    t = r.pageY,
                    p = void 0 === t ? s.pageY : t,
                    m = "X_AXIS" === l,
                    l = "mouseout" === r.type,
                    g = i / 100,
                    y = c,
                    v = !1; switch (o) {
                    case R.EventBasedOn.VIEWPORT:
                        g = m ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(h, window.innerHeight) / window.innerHeight; break;
                    case R.EventBasedOn.PAGE:
                        var E = ct(),
                            b = E.scrollLeft,
                            T = E.scrollTop,
                            I = E.scrollWidth,
                            E = E.scrollHeight,
                            g = m ? Math.min(b + f, I) / I : Math.min(T + p, E) / E; break;
                    case R.EventBasedOn.ELEMENT:
                    default:
                        y = J(a, c); var T = 0 === r.type.indexOf("mouse"); if (T && !0 !== it({ element: n, nativeEvent: r })) break; var E = n.getBoundingClientRect(),
                            _ = E.left,
                            A = E.top,
                            S = E.width,
                            x = E.height; if (!(T || (T = { left: d, top: h }).left > (E = E).left && T.left < E.right && T.top > E.top && T.top < E.bottom)) break;
                        v = !0, g = m ? (d - _) / S : (h - A) / x } return l && (.95 < g || g < .05) && (g = Math.round(g)), o === R.EventBasedOn.ELEMENT && !v && v === s.elementHovered || (g = u ? 1 - g : g, e.dispatch((0, P.parameterChanged)(y, g))), { elementHovered: v, clientX: d, clientY: h, pageX: f, pageY: p } } }), (0, r.default)(nt, Q, { types: st, handler: function(t) { var e = t.store,
                    n = t.eventConfig,
                    i = n.continuousParameterGroupId,
                    t = n.reverse,
                    n = ct(),
                    n = n.scrollTop / (n.scrollHeight - n.clientHeight),
                    n = t ? 1 - n : n;
                e.dispatch((0, P.parameterChanged)(i, n)) } }), (0, r.default)(nt, j, { types: st, handler: function(t) { var e = t.element,
                    n = t.store,
                    i = t.eventConfig,
                    r = t.eventStateKey,
                    a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : { scrollPercent: 0 },
                    s = ct(),
                    o = s.scrollLeft,
                    l = s.scrollTop,
                    c = s.scrollWidth,
                    u = s.scrollHeight,
                    d = s.clientHeight,
                    h = i.basedOn,
                    f = i.selectedAxis,
                    p = i.continuousParameterGroupId,
                    m = i.startsEntering,
                    g = i.startsExiting,
                    y = i.addEndOffset,
                    t = i.addStartOffset,
                    s = i.addOffsetValue,
                    s = void 0 === s ? 0 : s,
                    i = i.endOffsetValue,
                    i = void 0 === i ? 0 : i,
                    f = "X_AXIS" === f; if (h === R.EventBasedOn.VIEWPORT) { l = f ? o / c : l / u; return l !== a.scrollPercent && n.dispatch((0, P.parameterChanged)(p, l)), { scrollPercent: l } }
                p = J(r, p), e = e.getBoundingClientRect(), s = (t ? s : 0) / 100, i = (y ? i : 0) / 100, s = m ? s : 1 - s, i = g ? i : 1 - i, s = e.top + Math.min(e.height * s, d), i = e.top + e.height * i - s, u = Math.min(d + i, u), u = Math.min(Math.max(0, d - s), u) / u; return u !== a.scrollPercent && n.dispatch((0, P.parameterChanged)(p, u)), { scrollPercent: u } } }), (0, r.default)(nt, U, y), (0, r.default)(nt, z, y), (0, r.default)(nt, B, (0, g.default)({}, i, { handler: n(function(t, e) { e.scrollingDown && o(t) }) })), (0, r.default)(nt, H, (0, g.default)({}, i, { handler: n(function(t, e) { e.scrollingDown || o(t) }) })), (0, r.default)(nt, X, { types: "readystatechange IX2_PAGE_UPDATE", handler: c(et, (m = o, function(t, e) { var n = { finished: "complete" === document.readyState }; return !n.finished || e && e.finshed || m(t), n })) }), (0, r.default)(nt, q, { types: "readystatechange IX2_PAGE_UPDATE", handler: c(et, (p = o, function(t, e) { return e || p(t), { started: !0 } })) }), nt);
    e.default = nt }, function(t, e, n) { n = n(363)();
    t.exports = n }, function(t, e, n) { var c = n(88),
        i = n(364),
        u = n(150),
        d = n(151),
        h = n(2),
        f = n(377);
    t.exports = function(l) { return i(function(r) { var a = r.length,
                t = a,
                e = c.prototype.thru; for (l && r.reverse(); t--;) { var n = r[t]; if ("function" != typeof n) throw new TypeError("Expected a function");
                e && !o && "wrapper" == d(n) && (o = new c([], !0)) } for (t = o ? t : a; ++t < a;) { n = r[t]; var i = d(n),
                    s = "wrapper" == i ? u(n) : void 0,
                    o = s && f(s[0]) && 424 == s[1] && !s[4].length && 1 == s[9] ? o[d(s[0])].apply(o, s[3]) : 1 == n.length && f(n) ? o[i]() : o.thru(n) } return function() { var t = arguments,
                    e = t[0]; if (o && 1 == t.length && h(e)) return o.plant(e).value(); for (var n = 0, i = a ? r[n].apply(this, t) : e; ++n < a;) i = r[n].call(this, i); return i } }) } }, function(t, e, n) { var i = n(365),
        r = n(368),
        a = n(370);
    t.exports = function(t) { return a(r(t, void 0, i), t + "") } }, function(t, e, n) { var i = n(366);
    t.exports = function(t) { return (null == t ? 0 : t.length) ? i(t, 1) : [] } }, function(t, e, n) { var c = n(59),
        u = n(367);
    t.exports = function t(e, n, i, r, a) { var s = -1,
            o = e.length; for (i = i || u, a = a || []; ++s < o;) { var l = e[s];
            0 < n && i(l) ? 1 < n ? t(l, n - 1, i, r, a) : c(a, l) : r || (a[a.length] = l) } return a } }, function(t, e, n) { var i = n(32),
        r = n(48),
        a = n(2),
        s = i ? i.isConcatSpreadable : void 0;
    t.exports = function(t) { return a(t) || r(t) || !!(s && t && t[s]) } }, function(t, e, n) { var l = n(369),
        c = Math.max;
    t.exports = function(a, s, o) { return s = c(void 0 === s ? a.length - 1 : s, 0),
            function() { for (var t = arguments, e = -1, n = c(t.length - s, 0), i = Array(n); ++e < n;) i[e] = t[s + e];
                e = -1; for (var r = Array(s + 1); ++e < s;) r[e] = t[e]; return r[s] = o(i), l(a, this, r) } } }, function(t, e) { t.exports = function(t, e, n) { switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2]) } return t.apply(e, n) } }, function(t, e, n) { var i = n(371),
        i = n(373)(i);
    t.exports = i }, function(t, e, n) { var i = n(372),
        r = n(148),
        n = n(70),
        n = r ? function(t, e) { return r(t, "toString", { configurable: !0, enumerable: !1, value: i(e), writable: !0 }) } : n;
    t.exports = n }, function(t, e) { t.exports = function(t) { return function() { return t } } }, function(t, e) { var a = Date.now;
    t.exports = function(n) { var i = 0,
            r = 0; return function() { var t = a(),
                e = 16 - (t - r); if (r = t, 0 < e) { if (800 <= ++i) return arguments[0] } else i = 0; return n.apply(void 0, arguments) } } }, function(t, e, n) { n = n(106), n = n && new n;
    t.exports = n }, function(t, e) { t.exports = function() {} }, function(t, e) { t.exports = {} }, function(t, e, n) { var i = n(90),
        r = n(150),
        a = n(151),
        s = n(378);
    t.exports = function(t) { var e = a(t),
            n = s[e]; return "function" == typeof n && e in i.prototype && (t === n || !!(n = r(n)) && t === n[0]) } }, function(t, e, n) { var i = n(90),
        r = n(88),
        a = n(89),
        s = n(2),
        o = n(20),
        l = n(379),
        c = Object.prototype.hasOwnProperty;

    function u(t) { if (o(t) && !s(t) && !(t instanceof i)) { if (t instanceof r) return t; if (c.call(t, "__wrapped__")) return l(t) } return new r(t) }(u.prototype = a.prototype).constructor = u, t.exports = u }, function(t, e, n) { var i = n(90),
        r = n(88),
        a = n(380);
    t.exports = function(t) { if (t instanceof i) return t.clone(); var e = new r(t.__wrapped__, t.__chain__); return e.__actions__ = a(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e } }, function(t, e) { t.exports = function(t, e) { var n = -1,
            i = t.length; for (e = e || Array(i); ++n < i;) e[n] = t[n]; return e } }, function(t, e, n) { var i = n(382),
        r = n(71);
    t.exports = function(t, e, n) { return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = r(n)) == n ? n : 0), void 0 !== e && (e = (e = r(e)) == e ? e : 0), i(r(t), e, n) } }, function(t, e) { t.exports = function(t, e, n) { return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = e <= t ? t : e)), t } }, function(t, e, n) { "use strict"; var m = n(11);
    m.define("links", t.exports = function(i, t) { var r, a, s, e = {},
            n = i(window),
            o = m.env(),
            l = window.location,
            c = document.createElement("a"),
            u = "w--current",
            d = /index\.(html|php)$/,
            h = /\/$/;

        function f() { var s = n.scrollTop(),
                o = n.height();
            t.each(a, function(t) { var e = t.link,
                    n = t.sec,
                    i = n.offset().top,
                    r = n.outerHeight(),
                    a = .5 * o,
                    a = n.is(":visible") && s <= i + r - a && i + a <= s + o;
                t.active !== a && (t.active = a, p(e, u, a)) }) }

        function p(t, e, n) { var i = t.hasClass(e);
            n && i || (n || i) && (n ? t.addClass(e) : t.removeClass(e)) } return e.ready = e.design = e.preview = function() { r = o && m.env("design"), s = m.env("slug") || l.pathname || "", m.scroll.off(f), a = []; for (var t = document.links, e = 0; e < t.length; ++e) ! function(t) { var e = r && t.getAttribute("href-disabled") || t.getAttribute("href"); if (!(0 <= (c.href = e).indexOf(":"))) { var n = i(t); if (1 < c.hash.length && c.host + c.pathname === l.host + l.pathname) { if (!/^#[a-zA-Z0-9\-\_]+$/.test(c.hash)) return;
                        t = i(c.hash); return t.length && a.push({ link: n, sec: t, active: !1 }) } "#" !== e && "" !== e && (e = c.href === l.href || e === s || d.test(e) && h.test(s), p(n, u, e)) } }(t[e]);
            a.length && (m.scroll.on(f), f()) }, e }) }, function(t, e, n) { "use strict"; var y = n(11);
    y.define("scroll", t.exports = function(l) { var e = "click.wf-empty-link",
            n = "click.wf-scroll",
            i = window.location,
            r = function() { try { return Boolean(window.frameElement) } catch (t) { return !0 } }() ? null : window.history,
            c = l(window),
            a = l(document),
            u = l(document.body),
            d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) { window.setTimeout(t, 15) },
            t = y.env("editor") ? ".w-editor-body" : "body",
            h = "header, " + t + " > .header, " + t + " > .w-nav:not([data-no-scroll])",
            s = 'a[href="#"]',
            o = document.createElement("style");
        o.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}')); var f = /^#[a-zA-Z0-9][\w:.-]*$/; var p = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

        function m(t, e) { var n; switch (e) {
                case "add":
                    (n = t.attr("tabindex")) ? t.attr("data-wf-tabindex-swap", n): t.attr("tabindex", "-1"); break;
                case "remove":
                    (n = t.attr("data-wf-tabindex-swap")) ? (t.attr("tabindex", n), t.removeAttr("data-wf-tabindex-swap")) : t.removeAttr("tabindex") }
            t.toggleClass("wf-force-outline-none", "add" === e) }

        function g(t) { var e, o, n = t.currentTarget;
            y.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(n.className) || (e = n, "" === (n = f.test(e.hash) && e.host + e.pathname === i.host + i.pathname ? n.hash : "") || (o = l(n)).length && (t && (t.preventDefault(), t.stopPropagation()), n = n, i.hash === n || !r || !r.pushState || y.env.chrome && "file:" === i.protocol || (r.state && r.state.hash) !== n && r.pushState({ hash: n }, "", n), window.setTimeout(function() { var t, n, i, r, a, s;
                t = o, n = function() { m(o, "add"), o.get(0).focus({ preventScroll: !0 }), m(o, "remove") }, a = c.scrollTop(), s = function(t) { var e = l(h),
                        n = "fixed" === e.css("position") ? e.outerHeight() : 0,
                        e = t.offset().top - n; "mid" === t.data("scroll") && (n = c.height() - n, (t = t.outerHeight()) < n && (e -= Math.round((n - t) / 2))); return e }(t), a !== s && (i = function(t, e, n) { if ("none" === document.body.getAttribute("data-wf-scroll-motion") || p.matches) return 0; var i = 1; return u.add(t).each(function(t, e) { e = parseFloat(e.getAttribute("data-scroll-time"));!isNaN(e) && 0 <= e && (i = e) }), (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) * i }(t, a, s), r = Date.now(), t = function t() { var e = Date.now() - r;
                    window.scroll(0, function(t, e, n, i) { if (i < n) return e; return t + (e - t) * function(t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }(n / i) }(a, s, e, i)), e <= i ? d(t) : "function" == typeof n && n() }, d(t)) }, t ? 0 : 300))) } return { ready: function() { var t = e;
                a.on(n, 'a[href*="#"]:not(.w-tab-link):not(a[href="#"])', g), a.on(t, s, function(t) { t.preventDefault() }), document.head.insertBefore(o, document.head.firstChild) } } }) }, function(t, e, n) { "use strict";
    n(11).define("touch", t.exports = function(u) { var t = {},
            d = window.getSelection;

        function e(t) { var n, i, r = !1,
                a = !1,
                s = Math.min(Math.round(.04 * window.innerWidth), 40);

            function e(t) { var e = t.touches;
                e && 1 < e.length || (r = !0, n = e ? (a = !0, e[0].clientX) : t.clientX, i = n) }

            function o(t) { if (r) { if (a && "mousemove" === t.type) return t.preventDefault(), void t.stopPropagation(); var e = t.touches,
                        n = (e ? e[0] : t).clientX,
                        e = n - i;
                    i = n, Math.abs(e) > s && d && "" === String(d()) && (n = "swipe", t = t, e = { direction: 0 < e ? "right" : "left" }, n = u.Event(n, { originalEvent: t }), u(t.target).trigger(n, e), c()) } }

            function l(t) { r && (r = !1, a && "mouseup" === t.type && (t.preventDefault(), t.stopPropagation(), a = !1)) }

            function c() { r = !1 }
            t.addEventListener("touchstart", e, !1), t.addEventListener("touchmove", o, !1), t.addEventListener("touchend", l, !1), t.addEventListener("touchcancel", c, !1), t.addEventListener("mousedown", e, !1), t.addEventListener("mousemove", o, !1), t.addEventListener("mouseup", l, !1), t.addEventListener("mouseout", c, !1), this.destroy = function() { t.removeEventListener("touchstart", e, !1), t.removeEventListener("touchmove", o, !1), t.removeEventListener("touchend", l, !1), t.removeEventListener("touchcancel", c, !1), t.removeEventListener("mousedown", e, !1), t.removeEventListener("mousemove", o, !1), t.removeEventListener("mouseup", l, !1), t.removeEventListener("mouseout", c, !1), t = null } } return u.event.special.tap = { bindType: "click", delegateType: "click" }, t.init = function(t) { return (t = "string" == typeof t ? u(t).get(0) : t) ? new e(t) : null }, t.instance = t.init(document), t }) }, function(t, e, n) { "use strict"; var D = n(11),
        c = n(83),
        w = 37,
        N = 38,
        L = 39,
        k = 40,
        F = 27,
        V = 32,
        G = 13,
        B = 36,
        U = 35,
        z = /^#[a-zA-Z0-9\-_]+$/;
    D.define("dropdown", t.exports = function(f, t) { var p, i, m = t.debounce,
            t = {},
            g = D.env(),
            y = !1,
            n = D.env.touch,
            v = ".w-dropdown",
            E = "w--open",
            r = c.triggers,
            a = 900,
            b = "focusout" + v,
            T = "keydown" + v,
            I = "mouseenter" + v,
            s = "mousemove" + v,
            o = "mouseleave" + v,
            _ = (n ? "click" : "mouseup") + v,
            A = "w-close" + v,
            S = "setting" + v,
            x = f(document);

        function e() { p = g && D.env("design"), (i = x.find(v)).each(l) }

        function l(t, e) { var n, i, r, a = f(e),
                s = f.data(e, v);
            (s = s || f.data(e, v, { open: !1, el: a, config: {}, selectedIdx: -1 })).toggle = s.el.children(".w-dropdown-toggle"), s.list = s.el.children(".w-dropdown-list"), s.links = s.list.find("a:not(.w-dropdown .w-dropdown a)"), s.complete = (n = s, function() { n.list.removeClass(E), n.toggle.removeClass(E), n.manageZ && n.el.css("z-index", "") }), s.mouseLeave = (i = s, function() { i.hovering = !1, i.links.is(":focus") || O(i) }), s.mouseUpOutside = function(i) { i.mouseUpOutside && x.off(_, i.mouseUpOutside); return m(function(t) { if (i.open) { var e = f(t.target); if (!e.closest(".w-dropdown-toggle").length) { var n = -1 === f.inArray(i.el[0], e.parents(v)),
                                t = D.env("editor"); if (n) { if (t) { t = 1 === e.parents().length && 1 === e.parents("svg").length, e = e.parents(".w-editor-bem-EditorHoverControls").length; if (t || e) return }
                                O(i) } } } }) }(s), s.mouseMoveOutside = (r = s, m(function(t) { var e, n;
                r.open && (n = f(t.target), -1 === f.inArray(r.el[0], n.parents(v)) && (e = n.parents(".w-editor-bem-EditorHoverControls").length, t = n.parents(".w-editor-bem-RTToolbar").length, n = (n = f(".w-editor-bem-EditorOverlay")).find(".w-editor-edit-outline").length || n.find(".w-editor-bem-RTToolbar").length, e || t || n || (r.hovering = !1, O(r)))) })), R(s);
            e = (e = s.toggle.attr("id")) || "w-dropdown-toggle-" + t, a = (a = s.list.attr("id")) || "w-dropdown-list-" + t;
            s.toggle.attr("id", e), s.toggle.attr("aria-controls", a), s.toggle.attr("aria-haspopup", "menu"), s.toggle.attr("aria-expanded", "false"), s.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), "BUTTON" !== s.toggle.prop("tagName") && (s.toggle.attr("role", "button"), s.toggle.attr("tabindex") || s.toggle.attr("tabindex", "0")), s.list.attr("id", a), s.list.attr("aria-labelledby", e), s.links.each(function(t, e) { e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0"), z.test(e.hash) && e.addEventListener("click", O.bind(null, s)) }), s.el.off(v), s.toggle.off(v), s.nav && s.nav.off(v); var o, l, c, u, d, h, e = P(s, !0);
            p && s.el.on(S, (o = s, function(t, e) { e = e || {}, R(o), !0 === e.open && C(o), !1 === e.open && O(o, { immediate: !0 }) })), p || (g && (s.hovering = !1, O(s)), s.config.hover && s.toggle.on(I, (h = s, function() { h.hovering = !0, C(h) })), s.el.on(A, e), s.el.on(T, (d = s, function(t) { if (!p && !y && d.open) switch (d.selectedIdx = d.links.index(document.activeElement), t.keyCode) {
                    case B:
                        return d.open ? (d.selectedIdx = 0, M(d), t.preventDefault()) : void 0;
                    case U:
                        return d.open ? (d.selectedIdx = d.links.length - 1, M(d), t.preventDefault()) : void 0;
                    case F:
                        return O(d), d.toggle.focus(), t.stopPropagation();
                    case L:
                    case k:
                        return d.selectedIdx = Math.min(d.links.length - 1, d.selectedIdx + 1), M(d), t.preventDefault();
                    case w:
                    case N:
                        return d.selectedIdx = Math.max(-1, d.selectedIdx - 1), M(d), t.preventDefault() } })), s.el.on(b, (u = s, m(function(t) { var e = t.relatedTarget,
                    n = t.target,
                    i = u.el[0]; return i.contains(e) || i.contains(n) || O(u), t.stopPropagation() }))), s.toggle.on(_, e), s.toggle.on(T, (c = P(l = s, !0), function(t) { if (!p && !y) { if (!l.open) switch (t.keyCode) {
                        case N:
                        case k:
                            return t.stopPropagation() }
                    switch (t.keyCode) {
                        case V:
                        case G:
                            return c(), t.stopPropagation(), t.preventDefault() } } })), s.nav = s.el.closest(".w-nav"), s.nav.on(A, e)) }

        function R(t) { var e = Number(t.el.css("z-index"));
            t.manageZ = e === a || e === a + 1, t.config = { hover: "true" === t.el.attr("data-hover") && !n, delay: t.el.attr("data-delay") } }

        function P(e, n) { return m(function(t) { return e.open || t && "w-close" === t.type ? O(e, { forceClose: n }) : void C(e) }) }

        function C(t) { var n, e;
            t.open || (n = t.el[0], i.each(function(t, e) { e = f(e);
                e.is(n) || e.has(n).length || e.triggerHandler(A) }), t.open = !0, t.list.addClass(E), t.toggle.addClass(E), t.toggle.attr("aria-expanded", "true"), r.intro(0, t.el[0]), D.redraw.up(), t.manageZ && t.el.css("z-index", a + 1), e = D.env("editor"), p || x.on(_, t.mouseUpOutside), t.hovering && !e && t.el.on(o, t.mouseLeave), t.hovering && e && x.on(s, t.mouseMoveOutside), window.clearTimeout(t.delayId)) }

        function O(t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = e.immediate,
                e = e.forceClose; if (t.open && (!t.config.hover || !t.hovering || e)) { t.toggle.attr("aria-expanded", "false"), t.open = !1;
                e = t.config; if (r.outro(0, t.el[0]), x.off(_, t.mouseUpOutside), x.off(s, t.mouseMoveOutside), t.el.off(o, t.mouseLeave), window.clearTimeout(t.delayId), !e.delay || n) return t.complete();
                t.delayId = window.setTimeout(t.complete, e.delay) } }

        function M(t) { t.links[t.selectedIdx] && t.links[t.selectedIdx].focus() } return t.ready = e, t.design = function() { y && x.find(v).each(function(t, e) { f(e).triggerHandler(A) }), y = !1, e() }, t.preview = function() { y = !0, e() }, t }) }, function(t, e, n) { "use strict"; var T = n(1)(n(388)),
        R = n(11);
    R.define("forms", t.exports = function(I, o) { var t, i, a, e, _, n = {},
            s = I(document),
            l = window.location,
            r = window.XDomainRequest && !window.atob,
            c = ".w-form",
            u = /e(-)?mail/i,
            d = /^\S+@\S+$/,
            h = window.alert,
            A = R.env(),
            f = /list-manage[1-9]?.com/i,
            p = o.debounce(function() { h("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.") }, 100);

        function m(t, e) { var n = I(e),
                T = I.data(e, c);
            S(T = T || I.data(e, c, { form: n }));
            e = n.closest("div.w-form");
            T.done = e.find("> .w-form-done"), T.fail = e.find("> .w-form-fail"), T.fileUploads = e.find(".w-file-upload"), T.fileUploads.each(function(t) {
                function r(t) { var e = t.responseJSON && t.responseJSON.msg,
                        t = b; "string" == typeof e && 0 === e.indexOf("InvalidFileTypeError") ? t = E : "string" == typeof e && 0 === e.indexOf("MaxFileSizeError") && (t = v), m.text(t), h.removeAttr("data-value"), h.val(""), u.toggle(!1), c.toggle(!0), d.toggle(!0), o.fileUploads[s].uploading = !1, i() || S(o) }

                function n(t, e) { if (t) return r(t); var n = e.fileName,
                        i = e.postData,
                        t = e.fileId,
                        e = e.s3Url;
                    h.attr("data-value", t),
                        function(t, e, n, i, r) { var a, s = new FormData; for (a in e) s.append(a, e[a]);
                            s.append("file", n, i), I.ajax({ type: "POST", url: t, data: s, processData: !1, contentType: !1 }).done(function() { r(null) }).fail(function(t) { r(t) }) }(e, i, l, n, a) }

                function a(t) { if (t) return r(t);
                    u.toggle(!1), e.css("display", "inline-block"), o.fileUploads[s].uploading = !1, i() || S(o) }

                function i() { return (o.fileUploads && o.fileUploads.toArray() || []).some(function(t) { return t.uploading }) } var s, o, l, c, u, e, d, h, f, p, m, g, y, v, E, b;
                s = t, (o = T).fileUploads && o.fileUploads[s] && (c = (g = I(o.fileUploads[s])).find("> .w-file-upload-default"), u = g.find("> .w-file-upload-uploading"), e = g.find("> .w-file-upload-success"), d = g.find("> .w-file-upload-error"), h = c.find(".w-file-upload-input"), f = c.find(".w-file-upload-label"), p = f.children(), m = d.find(".w-file-upload-error-msg"), t = e.find(".w-file-upload-file"), g = e.find(".w-file-remove-link"), y = t.find(".w-file-upload-file-name"), v = m.attr("data-w-size-error"), E = m.attr("data-w-type-error"), b = m.attr("data-w-generic-error"), A ? (h.on("click", function(t) { t.preventDefault() }), f.on("click", function(t) { t.preventDefault() }), p.on("click", function(t) { t.preventDefault() })) : (g.on("click", function() { h.removeAttr("data-value"), h.val(""), y.html(""), c.toggle(!0), e.toggle(!1) }), h.on("change", function(t) { var e;
                    (l = t.target && t.target.files && t.target.files[0]) && (c.toggle(!1), d.toggle(!1), u.toggle(!0), y.text(l.name), i() || x(o), o.fileUploads[s].uploading = !0, e = n, t = { name: (t = l).name, size: t.size }, I.ajax({ type: "POST", url: _, data: t, dataType: "json", crossDomain: !0 }).done(function(t) { e(null, t) }).fail(function(t) { e(t) })) }), f = f.outerHeight(), h.height(f), h.width(1))) });
            e = T.action = n.attr("action");
            T.handler = null, T.redirect = n.attr("data-redirect"), f.test(e) ? T.handler = v : e || (i ? T.handler = "function" == typeof hostedSubmitWebflow ? hostedSubmitWebflow : y : p()) }

        function S(t) { var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label) }

        function x(t) { var e = t.btn,
                n = t.wait;
            e.prop("disabled", !0), n && (t.label = e.val(), e.val(n)) }

        function g(r, a) { var s = null; return a = a || {}, r.find(':input:not([type="submit"]):not([type="file"])').each(function(t, e) { var n = I(e),
                    i = n.attr("type"),
                    e = n.attr("data-name") || n.attr("name") || "Field " + (t + 1),
                    t = n.val(); if ("checkbox" === i) t = n.is(":checked");
                else if ("radio" === i) { if (null === a[e] || "string" == typeof a[e]) return;
                    t = r.find('input[name="' + n.attr("name") + '"]:checked').val() || null } "string" == typeof t && (t = I.trim(t)), a[e] = t, s = s || function(t, e, n, i) { var r = null; "password" === e ? r = "Passwords cannot be submitted." : t.attr("required") ? i ? u.test(t.attr("type")) && (d.test(i) || (r = "Please enter a valid email address for: " + n)) : r = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || i || (r = "Please confirm you’re not a robot."); return r }(n, i, e, t) }), s }
        n.ready = n.design = n.preview = function() { i = I("html").attr("data-wf-site"), e = "https://webflow.com/api/v1/form/" + i, r && 0 <= e.indexOf("https://webflow.com") && (e = e.replace("https://webflow.com", "http://formdata.webflow.com")), _ = "".concat(e, "/signFile"), (t = I(c + " form")).length && t.each(m), A || a || function() { a = !0, s.on("submit", c + " form", function(t) { var e = I.data(this, c);
                    e.handler && (e.evt = t, e.handler(e)) }); var e = ".w-checkbox-input",
                    n = ".w-radio-input",
                    i = "w--redirected-checked",
                    r = "w--redirected-focus",
                    t = [
                        ["checkbox", e],
                        ["radio", n]
                    ];
                s.on("change", c + ' form input[type="checkbox"]:not(' + e + ")", function(t) { I(t.target).siblings(e).toggleClass(i) }), s.on("change", c + ' form input[type="radio"]', function(t) { I('input[name="'.concat(t.target.name, '"]:not(').concat(e, ")")).map(function(t, e) { return I(e).siblings(n).removeClass(i) });
                    t = I(t.target);
                    t.hasClass("w-radio-input") || t.siblings(n).addClass(i) }), t.forEach(function(t) { var e = (0, T.default)(t, 2),
                        t = e[0],
                        n = e[1];
                    s.on("focus", c + ' form input[type="'.concat(t, '"]:not(') + n + ")", function(t) { I(t.target).siblings(n).addClass(r) }), s.on("blur", c + ' form input[type="'.concat(t, '"]:not(') + n + ")", function(t) { I(t.target).siblings(n).removeClass(r) }) }) }() };

        function y(t) { b(t), E(t) }

        function v(e) { S(e); var t = e.form,
                n = {}; if (!/^https/.test(l.href) || /^https/.test(e.action)) { b(e); var i, r = g(t, n); if (r) return h(r);
                x(e), o.each(n, function(t, e) { u.test(e) && (n.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (i = t), /^(first[ _-]?name)$/i.test(e) && (n.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (n.LNAME = t) }), i && !n.FNAME && (i = i.split(" "), n.FNAME = i[0], n.LNAME = n.LNAME || i[1]); var a = e.action.replace("/post?", "/post-json?") + "&c=?",
                    s = a.indexOf("u=") + 2,
                    s = a.substring(s, a.indexOf("&", s)),
                    r = a.indexOf("id=") + 3,
                    r = a.substring(r, a.indexOf("&", r));
                n["b_" + s + "_" + r] = "", I.ajax({ url: a, data: n, dataType: "jsonp" }).done(function(t) { e.success = "success" === t.result || /already/.test(t.msg), e.success || console.info("MailChimp error: " + t.msg), E(e) }).fail(function() { E(e) }) } else t.attr("method", "post") }

        function E(t) { var e = t.form,
                n = t.redirect,
                i = t.success;
            i && n ? R.location(n) : (t.done.toggle(i), t.fail.toggle(!i), e.toggle(!i), S(t)) }

        function b(t) { t.evt && t.evt.preventDefault(), t.evt = null } return n }) }, function(t, e, n) { var i = n(389),
        r = n(390),
        a = n(391);
    t.exports = function(t, e) { return i(t) || r(t, e) || a() } }, function(t, e) { t.exports = function(t) { if (Array.isArray(t)) return t } }, function(t, e) { t.exports = function(t, e) { var n = [],
            i = !0,
            r = !1,
            a = void 0; try { for (var s, o = t[Symbol.iterator](); !(i = (s = o.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0); } catch (t) { r = !0, a = t } finally { try { i || null == o.return || o.return() } finally { if (r) throw a } } return n } }, function(t, e) { t.exports = function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") } }, function(t, e, n) { "use strict"; var G = n(11),
        B = n(83),
        U = 37,
        z = 38,
        H = 39,
        j = 40,
        X = 27,
        W = 32,
        Y = 13,
        q = 36,
        Q = 35;
    G.define("navbar", t.exports = function(o, l) { var i, t, c, u, e = {},
            d = o.tram,
            h = o(window),
            f = o(document),
            n = l.debounce,
            r = G.env(),
            p = '<div class="w-nav-overlay" data-wf-ignore />',
            m = ".w-nav",
            g = "w--open",
            y = "w--nav-dropdown-open",
            v = "w--nav-dropdown-toggle-open",
            E = "w--nav-dropdown-list-open",
            b = "w--nav-link-open",
            T = B.triggers,
            I = o();

        function a() { G.resize.off(s) }

        function s() { t.each(D) }

        function _(t, e) { var n = o(e),
                i = o.data(e, m);
            (i = i || o.data(e, m, { open: !1, el: n, config: {}, selectedIdx: -1 })).menu = n.find(".w-nav-menu"), i.links = i.menu.find(".w-nav-link"), i.dropdowns = i.menu.find(".w-dropdown"), i.dropdownToggle = i.menu.find(".w-dropdown-toggle"), i.dropdownList = i.menu.find(".w-dropdown-list"), i.button = n.find(".w-nav-button"), i.container = n.find(".w-container"), i.overlayContainerId = "w-nav-overlay-" + t, i.outside = function(e) { e.outside && f.off("click" + m, e.outside); return function(t) { t = o(t.target);
                    u && t.closest(".w-editor-bem-EditorOverlay").length || M(e, t) } }(i); var r, a, s, n = n.find(".w-nav-brand");
            n && "/" === n.attr("href") && null == n.attr("aria-label") && n.attr("aria-label", "home"), i.button.attr("style", "-webkit-user-select: text;"), null == i.button.attr("aria-label") && i.button.attr("aria-label", "menu"), i.button.attr("role", "button"), i.button.attr("tabindex", "0"), i.button.attr("aria-controls", i.overlayContainerId), i.button.attr("aria-haspopup", "menu"), i.button.attr("aria-expanded", "false"), i.el.off(m), i.button.off(m), i.menu.off(m), x(i), c ? (S(i), i.el.on("setting" + m, (s = i, function(t, e) { e = e || {}; var n = h.width();
                x(s), !0 === e.open && k(s, !0), !1 === e.open && V(s, !0), s.open && l.defer(function() { n !== h.width() && P(s) }) }))) : ((n = i).overlay || (n.overlay = o(p).appendTo(n.el), n.overlay.attr("id", n.overlayContainerId), n.parent = n.menu.parent(), V(n, !0)), i.button.on("click" + m, C(i)), i.menu.on("click" + m, "a", O(i)), i.button.on("keydown" + m, (a = i, function(t) { switch (t.keyCode) {
                    case W:
                    case Y:
                        return C(a)(), t.preventDefault(), t.stopPropagation();
                    case X:
                        return V(a), t.preventDefault(), t.stopPropagation();
                    case H:
                    case j:
                    case q:
                    case Q:
                        return a.open && (t.keyCode === Q ? a.selectedIdx = a.links.length - 1 : a.selectedIdx = 0, R(a)), t.preventDefault(), t.stopPropagation() } })), i.el.on("keydown" + m, (r = i, function(t) { if (r.open) switch (r.selectedIdx = r.links.index(document.activeElement), t.keyCode) {
                    case q:
                    case Q:
                        return t.keyCode === Q ? r.selectedIdx = r.links.length - 1 : r.selectedIdx = 0, R(r), t.preventDefault(), t.stopPropagation();
                    case X:
                        return V(r), r.button.focus(), t.preventDefault(), t.stopPropagation();
                    case U:
                    case z:
                        return r.selectedIdx = Math.max(-1, r.selectedIdx - 1), R(r), t.preventDefault(), t.stopPropagation();
                    case H:
                    case j:
                        return r.selectedIdx = Math.min(r.links.length - 1, r.selectedIdx + 1), R(r), t.preventDefault(), t.stopPropagation() } }))), D(0, e) }

        function A(t, e) { var n = o.data(e, m);
            n && (S(n), o.removeData(e, m)) }

        function S(t) { t.overlay && (V(t, !0), t.overlay.remove(), t.overlay = null) }

        function x(t) { var e = {},
                n = t.config || {},
                i = e.animation = t.el.attr("data-animation") || "default";
            e.animOver = /^over/.test(i), e.animDirect = /left$/.test(i) ? -1 : 1, n.animation !== i && t.open && l.defer(P, t), e.easing = t.el.attr("data-easing") || "ease", e.easing2 = t.el.attr("data-easing2") || "ease";
            i = t.el.attr("data-duration");
            e.duration = null != i ? Number(i) : 400, e.docHeight = t.el.attr("data-doc-height"), t.config = e }

        function R(t) { t.links[t.selectedIdx] && ((t = t.links[t.selectedIdx]).focus(), O(t)) }

        function P(t) { t.open && (V(t, !0), k(t, !0)) }

        function C(t) { return n(function() {
                (t.open ? V : k)(t) }) }

        function O(n) { return function(t) { var e = o(this).attr("href");
                G.validClick(t.currentTarget) ? e && 0 === e.indexOf("#") && n.open && V(n) : t.preventDefault() } }
        e.ready = e.design = e.preview = function() { if (c = r && G.env("design"), u = G.env("editor"), i = o(document.body), !(t = f.find(m)).length) return;
            t.each(_), a(), G.resize.on(s) }, e.destroy = function() { I = o(), a(), t && t.length && t.each(A) }; var M = n(function(t, e) { t.open && (e = e.closest(".w-nav-menu"), t.menu.is(e) || V(t)) });

        function D(t, e) { var n = o.data(e, m),
                e = n.collapsed = "none" !== n.button.css("display");!n.open || e || c || V(n, !0), n.container.length && (e = function(t) { var n = t.container.css(w); "none" === n && (n = ""); return function(t, e) {
                    (e = o(e)).css(w, ""), "none" === e.css(w) && e.css(w, n) } }(n), n.links.each(e), n.dropdowns.each(e)), n.open && F(n) } var w = "max-width";

        function N(t, e) { e.setAttribute("data-nav-menu-open", "") }

        function L(t, e) { e.removeAttribute("data-nav-menu-open") }

        function k(t, e) { if (!t.open) { t.open = !0, t.menu.each(N), t.links.addClass(b), t.dropdowns.addClass(y), t.dropdownToggle.addClass(v), t.dropdownList.addClass(E), t.button.addClass(g); var n = t.config;
                ("none" === n.animation || !d.support.transform || n.duration <= 0) && (e = !0); var i = F(t),
                    r = t.menu.outerHeight(!0),
                    a = t.menu.outerWidth(!0),
                    s = t.el.height(),
                    o = t.el[0]; if (D(0, o), T.intro(0, o), G.redraw.up(), c || f.on("click" + m, t.outside), e) l();
                else { e = "transform " + n.duration + "ms " + n.easing; if (t.overlay && (I = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver) return d(t.menu).add(e).set({ x: n.animDirect * a, height: i }).start({ x: 0 }).then(l), void(t.overlay && t.overlay.width(a));
                    r = s + r;
                    d(t.menu).add(e).set({ y: -r }).start({ y: 0 }).then(l) } }

            function l() { t.button.attr("aria-expanded", "true") } }

        function F(t) { var e = t.config,
                n = (e.docHeight ? f : i).height(); return e.animOver ? t.menu.height(n) : "fixed" !== t.el.css("position") && (n -= t.el.outerHeight(!0)), t.overlay && t.overlay.height(n), n }

        function V(t, e) { if (t.open) { t.open = !1, t.button.removeClass(g); var n = t.config; if (("none" === n.animation || !d.support.transform || n.duration <= 0) && (e = !0), T.outro(0, t.el[0]), f.off("click" + m, t.outside), e) return d(t.menu).stop(), void s(); var i = "transform " + n.duration + "ms " + n.easing2,
                    r = t.menu.outerHeight(!0),
                    a = t.menu.outerWidth(!0),
                    e = t.el.height();
                n.animOver ? d(t.menu).add(i).start({ x: a * n.animDirect }).then(s) : (r = e + r, d(t.menu).add(i).start({ y: -r }).then(s)) }

            function s() { t.menu.height(""), d(t.menu).set({ x: 0, y: 0 }), t.menu.each(L), t.links.removeClass(b), t.dropdowns.removeClass(y), t.dropdownToggle.removeClass(v), t.dropdownList.removeClass(E), t.overlay && t.overlay.children().length && (I.length ? t.menu.insertAfter(I) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close"), t.button.attr("aria-expanded", "false") } } return e }) }]), Webflow.require("ix2").init({ events: { "e-251": { id: "e-251", name: "", animationType: "preset", eventTypeId: "SCROLL_INTO_VIEW", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-67", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-252" } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "548d1234-1735-eef8-d915-0a8a476ba6ce", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "548d1234-1735-eef8-d915-0a8a476ba6ce", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null }, createdOn: 1610042242734 }, "e-287": { id: "e-287", name: "", animationType: "preset", eventTypeId: "PAGE_START", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-62", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-288" } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "6163bf40de60bb693575bf16", appliesTo: "PAGE", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb693575bf16", appliesTo: "PAGE", styleBlockIds: [] }], config: { loop: !0, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1610421426766 }, "e-337": { id: "e-337", name: "", animationType: "custom", eventTypeId: "SCROLLING_IN_VIEW", action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-77", affectedElements: {}, duration: 0 } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "6163bf40de60bb693575bf16|39638c11-f42e-cf3a-2571-429b0297ff22", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb693575bf16|39638c11-f42e-cf3a-2571-429b0297ff22", appliesTo: "ELEMENT", styleBlockIds: [] }], config: [{ continuousParameterGroupId: "a-77-p", smoothing: 50, startsEntering: !0, addStartOffset: !1, addOffsetValue: 50, startsExiting: !1, addEndOffset: !1, endOffsetValue: 50 }], createdOn: 1615002894860 }, "e-343": { id: "e-343", name: "", animationType: "custom", eventTypeId: "SCROLLING_IN_VIEW", action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-81", affectedElements: {}, duration: 0 } }, mediaQueries: ["main"], target: { id: "6163bf40de60bb693575bf16|a61938d9-0c64-bdfb-c508-2cada07152e4", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb693575bf16|a61938d9-0c64-bdfb-c508-2cada07152e4", appliesTo: "ELEMENT", styleBlockIds: [] }], config: [{ continuousParameterGroupId: "a-81-p", smoothing: 90, startsEntering: !0, addStartOffset: !1, addOffsetValue: 50, startsExiting: !1, addEndOffset: !0, endOffsetValue: 70 }], createdOn: 1615238997688 }, "e-455": { id: "e-455", name: "", animationType: "preset", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-456" } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "f2967155-fa7c-7558-f6b1-bc6bd0f669cb", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "f2967155-fa7c-7558-f6b1-bc6bd0f669cb", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615605879409 }, "e-456": { id: "e-456", name: "", animationType: "preset", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-455" } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "f2967155-fa7c-7558-f6b1-bc6bd0f669cb", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "f2967155-fa7c-7558-f6b1-bc6bd0f669cb", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615605879409 }, "e-457": { id: "e-457", name: "", animationType: "preset", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-458" } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "f2967155-fa7c-7558-f6b1-bc6bd0f669cf", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "f2967155-fa7c-7558-f6b1-bc6bd0f669cf", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615605880061 }, "e-458": { id: "e-458", name: "", animationType: "preset", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-457" } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "f2967155-fa7c-7558-f6b1-bc6bd0f669cf", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "f2967155-fa7c-7558-f6b1-bc6bd0f669cf", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615605880061 }, "e-459": { id: "e-459", name: "", animationType: "custom", eventTypeId: "NAVBAR_OPEN", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-91", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-460" } }, mediaQueries: ["medium", "small", "tiny"], target: { id: "f2967155-fa7c-7558-f6b1-bc6bd0f669b9", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "f2967155-fa7c-7558-f6b1-bc6bd0f669b9", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615606379254 }, "e-460": { id: "e-460", name: "", animationType: "custom", eventTypeId: "NAVBAR_CLOSE", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-92", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-459" } }, mediaQueries: ["medium", "small", "tiny"], target: { id: "f2967155-fa7c-7558-f6b1-bc6bd0f669b9", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "f2967155-fa7c-7558-f6b1-bc6bd0f669b9", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615606379271 }, "e-475": { id: "e-475", name: "", animationType: "preset", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-95", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-476" } }, mediaQueries: ["main"], target: { id: "6163bf40de60bb1c0075bef8|c7ad01c9-8fa7-a024-14cd-588ed4bc9931", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb1c0075bef8|c7ad01c9-8fa7-a024-14cd-588ed4bc9931", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615771815266 }, "e-476": { id: "e-476", name: "", animationType: "preset", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-66", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-475" } }, mediaQueries: ["main"], target: { id: "6163bf40de60bb1c0075bef8|c7ad01c9-8fa7-a024-14cd-588ed4bc9931", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb1c0075bef8|c7ad01c9-8fa7-a024-14cd-588ed4bc9931", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615771815266 }, "e-477": { id: "e-477", name: "", animationType: "preset", eventTypeId: "MOUSE_MOVE", action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-64", affectedElements: {}, duration: 0 } }, mediaQueries: ["main"], target: { id: "6163bf40de60bb1c0075bef8|c7ad01c9-8fa7-a024-14cd-588ed4bc9931", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb1c0075bef8|c7ad01c9-8fa7-a024-14cd-588ed4bc9931", appliesTo: "ELEMENT", styleBlockIds: [] }], config: [{ continuousParameterGroupId: "a-64-p", selectedAxis: "X_AXIS", basedOn: "ELEMENT", reverse: !1, smoothing: 90, restingState: 50 }, { continuousParameterGroupId: "a-64-p-2", selectedAxis: "Y_AXIS", basedOn: "ELEMENT", reverse: !1, smoothing: 90, restingState: 50 }], createdOn: 1615771815266 }, "e-482": { id: "e-482", name: "", animationType: "preset", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-483" } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "6163bf40de60bb1c0075bef8|b6b11e1e-9122-ae6d-5c6a-1a2b08fb7003", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb1c0075bef8|b6b11e1e-9122-ae6d-5c6a-1a2b08fb7003", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615773667331 }, "e-483": { id: "e-483", name: "", animationType: "preset", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-482" } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "6163bf40de60bb1c0075bef8|b6b11e1e-9122-ae6d-5c6a-1a2b08fb7003", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb1c0075bef8|b6b11e1e-9122-ae6d-5c6a-1a2b08fb7003", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615773667331 }, "e-492": { id: "e-492", name: "", animationType: "custom", eventTypeId: "PAGE_START", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-99", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-493" } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "6163bf40de60bb693575bf16", appliesTo: "PAGE", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb693575bf16", appliesTo: "PAGE", styleBlockIds: [] }], config: { loop: !0, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615861636550 }, "e-494": { id: "e-494", name: "", animationType: "custom", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-100", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-495" } }, mediaQueries: ["main"], target: { id: "f2967155-fa7c-7558-f6b1-bc6bd0f669bc", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "f2967155-fa7c-7558-f6b1-bc6bd0f669bc", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615863993650 }, "e-495": { id: "e-495", name: "", animationType: "custom", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-101", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-494" } }, mediaQueries: ["main"], target: { id: "f2967155-fa7c-7558-f6b1-bc6bd0f669bc", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "f2967155-fa7c-7558-f6b1-bc6bd0f669bc", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615863993669 }, "e-496": { id: "e-496", name: "", animationType: "custom", eventTypeId: "PAGE_START", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-102", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-497" } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "6163bf40de60bb693575bf16", appliesTo: "PAGE", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb693575bf16", appliesTo: "PAGE", styleBlockIds: [] }], config: { loop: !0, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615865372323 }, "e-497": { id: "e-497", name: "", animationType: "custom", eventTypeId: "PAGE_FINISH", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-103", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-496" } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "6163bf40de60bb693575bf16", appliesTo: "PAGE", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb693575bf16", appliesTo: "PAGE", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1615865372341 }, "e-513": { id: "e-513", name: "", animationType: "custom", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-106", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-514" } }, mediaQueries: ["main"], target: { id: "6163bf40de60bb1c0075bef8|b4c5b61c-5380-e037-72b8-765af7f7c0d7", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb1c0075bef8|b4c5b61c-5380-e037-72b8-765af7f7c0d7", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1616041887050 }, "e-514": { id: "e-514", name: "", animationType: "custom", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-108", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-513" } }, mediaQueries: ["main"], target: { id: "6163bf40de60bb1c0075bef8|b4c5b61c-5380-e037-72b8-765af7f7c0d7", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb1c0075bef8|b4c5b61c-5380-e037-72b8-765af7f7c0d7", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1616041887056 }, "e-515": { id: "e-515", name: "", animationType: "custom", eventTypeId: "MOUSE_MOVE", action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-107", affectedElements: {}, duration: 0 } }, mediaQueries: ["main"], target: { id: "6163bf40de60bb1c0075bef8|b4c5b61c-5380-e037-72b8-765af7f7c0d7", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb1c0075bef8|b4c5b61c-5380-e037-72b8-765af7f7c0d7", appliesTo: "ELEMENT", styleBlockIds: [] }], config: [{ continuousParameterGroupId: "a-107-p", selectedAxis: "X_AXIS", basedOn: "ELEMENT", reverse: !1, smoothing: 50, restingState: 50 }, { continuousParameterGroupId: "a-107-p-2", selectedAxis: "Y_AXIS", basedOn: "ELEMENT", reverse: !1, smoothing: 50, restingState: 50 }], createdOn: 1616042078181 }, "e-615": { id: "e-615", name: "", animationType: "preset", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-104", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-616" } }, mediaQueries: ["main"], target: { id: "6163bf40de60bb693575bf16|547d25fc-bdd7-3cb2-6919-7986e77720ce", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb693575bf16|547d25fc-bdd7-3cb2-6919-7986e77720ce", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1616382702330 }, "e-616": { id: "e-616", name: "", animationType: "preset", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-105", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-615" } }, mediaQueries: ["main"], target: { id: "6163bf40de60bb693575bf16|547d25fc-bdd7-3cb2-6919-7986e77720ce", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb693575bf16|547d25fc-bdd7-3cb2-6919-7986e77720ce", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1616382702330 }, "e-785": { id: "e-785", name: "", animationType: "custom", eventTypeId: "PAGE_START", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-102", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-786" } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "6163bf40de60bb1c0075bef8", appliesTo: "PAGE", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb1c0075bef8", appliesTo: "PAGE", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1616813171304 }, "e-786": { id: "e-786", name: "", animationType: "custom", eventTypeId: "PAGE_FINISH", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-103", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-785" } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "6163bf40de60bb1c0075bef8", appliesTo: "PAGE", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb1c0075bef8", appliesTo: "PAGE", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1616813171321 }, "e-822": { id: "e-822", name: "", animationType: "custom", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-823" } }, mediaQueries: ["main"], target: { id: "d882b78b-4731-a9b5-078f-2475e8d40ee3", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "d882b78b-4731-a9b5-078f-2475e8d40ee3", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1618250598474 }, "e-823": { id: "e-823", name: "", animationType: "custom", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-822" } }, mediaQueries: ["main"], target: { id: "d882b78b-4731-a9b5-078f-2475e8d40ee3", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "d882b78b-4731-a9b5-078f-2475e8d40ee3", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1618250598489 }, "e-836": { id: "e-836", name: "", animationType: "preset", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-837" } }, mediaQueries: ["main"], target: { id: "7e0c0e53-5260-64a5-2899-7c52c27ac3fc", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "7e0c0e53-5260-64a5-2899-7c52c27ac3fc", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1620269451186 }, "e-837": { id: "e-837", name: "", animationType: "preset", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-836" } }, mediaQueries: ["main"], target: { id: "7e0c0e53-5260-64a5-2899-7c52c27ac3fc", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "7e0c0e53-5260-64a5-2899-7c52c27ac3fc", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1620269451186 }, "e-838": { id: "e-838", name: "", animationType: "preset", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-839" } }, mediaQueries: ["main"], target: { id: "7e0c0e53-5260-64a5-2899-7c52c27ac404", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "7e0c0e53-5260-64a5-2899-7c52c27ac404", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1620269451186 }, "e-839": { id: "e-839", name: "", animationType: "preset", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-838" } }, mediaQueries: ["main"], target: { id: "7e0c0e53-5260-64a5-2899-7c52c27ac404", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "7e0c0e53-5260-64a5-2899-7c52c27ac404", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1620269451186 }, "e-840": { id: "e-840", name: "", animationType: "preset", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-841" } }, mediaQueries: ["main"], target: { id: "7e0c0e53-5260-64a5-2899-7c52c27ac400", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "7e0c0e53-5260-64a5-2899-7c52c27ac400", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1620269451186 }, "e-841": { id: "e-841", name: "", animationType: "preset", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-840" } }, mediaQueries: ["main"], target: { id: "7e0c0e53-5260-64a5-2899-7c52c27ac400", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "7e0c0e53-5260-64a5-2899-7c52c27ac400", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1620269451186 }, "e-844": { id: "e-844", name: "", animationType: "preset", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-845" } }, mediaQueries: ["main"], target: { id: "7e0c0e53-5260-64a5-2899-7c52c27ac41c", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "7e0c0e53-5260-64a5-2899-7c52c27ac41c", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1620269451186 }, "e-845": { id: "e-845", name: "", animationType: "preset", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-844" } }, mediaQueries: ["main"], target: { id: "7e0c0e53-5260-64a5-2899-7c52c27ac41c", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "7e0c0e53-5260-64a5-2899-7c52c27ac41c", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1620269451186 }, "e-846": { id: "e-846", name: "", animationType: "preset", eventTypeId: "SCROLL_INTO_VIEW", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-67", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-847" } }, mediaQueries: ["main", "medium", "small", "tiny"], target: { id: "1d9b1bfd-b208-375f-4fa2-1d2e48745cfa", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "1d9b1bfd-b208-375f-4fa2-1d2e48745cfa", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null }, createdOn: 1620269497306 }, "e-864": { id: "e-864", name: "", animationType: "custom", eventTypeId: "SCROLLING_IN_VIEW", action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-160", affectedElements: {}, duration: 0 } }, mediaQueries: ["main"], target: { id: "6163bf40de60bb693575bf16|3082732b-3331-3f69-b91a-b82109062cd1", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb693575bf16|3082732b-3331-3f69-b91a-b82109062cd1", appliesTo: "ELEMENT", styleBlockIds: [] }], config: [{ continuousParameterGroupId: "a-160-p", smoothing: 50, startsEntering: !1, addStartOffset: !0, addOffsetValue: 70, startsExiting: !1, addEndOffset: !0, endOffsetValue: 25 }], createdOn: 1614999819055 }, "e-865": { id: "e-865", name: "", animationType: "custom", eventTypeId: "SCROLLING_IN_VIEW", action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-161", affectedElements: {}, duration: 0 } }, mediaQueries: ["medium", "small", "tiny"], target: { id: "6163bf40de60bb693575bf16|3082732b-3331-3f69-b91a-b82109062d18", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb693575bf16|3082732b-3331-3f69-b91a-b82109062d18", appliesTo: "ELEMENT", styleBlockIds: [] }], config: [{ continuousParameterGroupId: "a-161-p", smoothing: 50, startsEntering: !0, addStartOffset: !0, addOffsetValue: 20, startsExiting: !0, addEndOffset: !0, endOffsetValue: 50 }], createdOn: 1615325434834 }, "e-866": { id: "e-866", name: "", animationType: "custom", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-867" } }, mediaQueries: ["main"], target: { id: "7e0c0e53-5260-64a5-2899-7c52c27ac412", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "7e0c0e53-5260-64a5-2899-7c52c27ac412", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1620878282549 }, "e-867": { id: "e-867", name: "", animationType: "custom", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-866" } }, mediaQueries: ["main"], target: { id: "7e0c0e53-5260-64a5-2899-7c52c27ac412", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "7e0c0e53-5260-64a5-2899-7c52c27ac412", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1620878282561 }, "e-898": { id: "e-898", name: "", animationType: "custom", eventTypeId: "SCROLLING_IN_VIEW", action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-163", affectedElements: {}, duration: 0 } }, mediaQueries: ["medium", "small", "tiny"], target: { id: "6163bf40de60bb693575bf16|a61938d9-0c64-bdfb-c508-2cada07152e4", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb693575bf16|a61938d9-0c64-bdfb-c508-2cada07152e4", appliesTo: "ELEMENT", styleBlockIds: [] }], config: [{ continuousParameterGroupId: "a-163-p", smoothing: 90, startsEntering: !0, addStartOffset: !1, addOffsetValue: 50, startsExiting: !1, addEndOffset: !0, endOffsetValue: 70 }], createdOn: 1621140992686 }, "e-933": { id: "e-933", name: "", animationType: "preset", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-934" } }, mediaQueries: ["main"], target: { id: "6163bf40de60bb693575bf16|2b8323de-b158-88c7-ba64-e1db5a0bcdb0", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb693575bf16|2b8323de-b158-88c7-ba64-e1db5a0bcdb0", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1622125309606 }, "e-934": { id: "e-934", name: "", animationType: "preset", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-933" } }, mediaQueries: ["main"], target: { id: "6163bf40de60bb693575bf16|2b8323de-b158-88c7-ba64-e1db5a0bcdb0", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "6163bf40de60bb693575bf16|2b8323de-b158-88c7-ba64-e1db5a0bcdb0", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1622125309606 }, "e-965": { id: "e-965", name: "", animationType: "custom", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-100", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-966" } }, mediaQueries: ["main"], target: { id: "476db182-71a9-4b36-b817-3f635ca327ed", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "476db182-71a9-4b36-b817-3f635ca327ed", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1622167553396 }, "e-966": { id: "e-966", name: "", animationType: "custom", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-101", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-965" } }, mediaQueries: ["main"], target: { id: "476db182-71a9-4b36-b817-3f635ca327ed", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "476db182-71a9-4b36-b817-3f635ca327ed", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1622167553409 }, "e-969": { id: "e-969", name: "", animationType: "custom", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-970" } }, mediaQueries: ["main"], target: { id: "476db182-71a9-4b36-b817-3f635ca32832", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "476db182-71a9-4b36-b817-3f635ca32832", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1622168188257 }, "e-970": { id: "e-970", name: "", animationType: "custom", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-969" } }, mediaQueries: ["main"], target: { id: "476db182-71a9-4b36-b817-3f635ca32832", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "476db182-71a9-4b36-b817-3f635ca32832", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1622168188273 }, "e-985": { id: "e-985", name: "", animationType: "custom", eventTypeId: "NAVBAR_OPEN", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-91", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-986" } }, mediaQueries: ["medium", "small", "tiny"], target: { id: "476db182-71a9-4b36-b817-3f635ca327ea", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "476db182-71a9-4b36-b817-3f635ca327ea", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1622255914311 }, "e-986": { id: "e-986", name: "", animationType: "custom", eventTypeId: "NAVBAR_CLOSE", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-92", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-985" } }, mediaQueries: ["medium", "small", "tiny"], target: { id: "476db182-71a9-4b36-b817-3f635ca327ea", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "476db182-71a9-4b36-b817-3f635ca327ea", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1622255914328 }, "e-987": { id: "e-987", name: "", animationType: "custom", eventTypeId: "MOUSE_OVER", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-988" } }, mediaQueries: ["main"], target: { id: "e7852914-708b-cdb1-3d06-abbd836ddca9", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "e7852914-708b-cdb1-3d06-abbd836ddca9", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1622398955609 }, "e-988": { id: "e-988", name: "", animationType: "custom", eventTypeId: "MOUSE_OUT", action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: !1, autoStopEventId: "e-987" } }, mediaQueries: ["main"], target: { id: "e7852914-708b-cdb1-3d06-abbd836ddca9", appliesTo: "ELEMENT", styleBlockIds: [] }, targets: [{ id: "e7852914-708b-cdb1-3d06-abbd836ddca9", appliesTo: "ELEMENT", styleBlockIds: [] }], config: { loop: !1, playInReverse: !1, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null }, createdOn: 1622398955623 } }, actionLists: { "a-67": { id: "a-67", title: "SCROLL Into View — Divider", actionItemGroups: [{ actionItems: [{ id: "a-67-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".divider-line", selectorGuids: ["c46f66db-8e79-da08-b358-a52ba9d6cc20"] }, xValue: -100, xUnit: "%", yUnit: "PX", zUnit: "PX" } }] }, { actionItems: [{ id: "a-67-n-2", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "inOutQuart", duration: 2e3, target: { useEventTarget: "CHILDREN", selector: ".divider-line", selectorGuids: ["c46f66db-8e79-da08-b358-a52ba9d6cc20"] }, xValue: 0, xUnit: "%", yUnit: "PX", zUnit: "PX" } }] }], useFirstGroupAsInitialState: !0, createdOn: 1610042173737 }, "a-62": { id: "a-62", title: "LOOP — Scrolling TXT Hero", actionItemGroups: [{ actionItems: [{ id: "a-62-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 12e3, target: { selector: ".small-text-scrolling", selectorGuids: ["3d821d72-b759-c952-5a6d-50151919dcd5"] }, xValue: -100, xUnit: "%", yUnit: "PX", zUnit: "PX" } }] }, { actionItems: [{ id: "a-62-n-2", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 0, target: { selector: ".small-text-scrolling", selectorGuids: ["3d821d72-b759-c952-5a6d-50151919dcd5"] }, xValue: 0, xUnit: "%", yUnit: "PX", zUnit: "PX" } }] }], useFirstGroupAsInitialState: !1, createdOn: 1609968421378 }, "a-77": { id: "a-77", title: "SCROLLING — Big Type", continuousParameterGroups: [{ id: "a-77-p", type: "SCROLL_PROGRESS", parameterLabel: "Scroll", continuousActionGroups: [{ keyframe: 0, actionItems: [{ id: "a-77-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", id: "6163bf40de60bb693575bf16|032bf23c-0294-1ee8-ca5c-f8c6ce164f60" }, xValue: 50, xUnit: "vw", yUnit: "PX", zUnit: "PX" } }, { id: "a-77-n-3", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", id: "6163bf40de60bb693575bf16|476da57c-f110-29a8-f089-a82175bfc8cd" }, xValue: -100, xUnit: "vw", yUnit: "PX", zUnit: "PX" } }] }, { keyframe: 100, actionItems: [{ id: "a-77-n-2", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", id: "6163bf40de60bb693575bf16|032bf23c-0294-1ee8-ca5c-f8c6ce164f60" }, xValue: -45, xUnit: "vw", yUnit: "PX", zUnit: "PX" } }, { id: "a-77-n-4", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", id: "6163bf40de60bb693575bf16|476da57c-f110-29a8-f089-a82175bfc8cd" }, xValue: 35, xUnit: "vw", yUnit: "PX", zUnit: "PX" } }] }] }], createdOn: 1615002897478 }, "a-81": { id: "a-81", title: "ABOUT IMG — Scrolling — Second Section", continuousParameterGroups: [{ id: "a-81-p", type: "SCROLL_PROGRESS", parameterLabel: "Scroll", continuousActionGroups: [{ keyframe: 0, actionItems: [{ id: "a-81-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, xValue: 80, yValue: -15, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-81-n-3", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, zValue: 20, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-81-n-21", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, xValue: .5, yValue: .5, locked: !0 } }] }, { keyframe: 1, actionItems: [{ id: "a-81-n-6", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, xValue: 60, yValue: 45, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-81-n-7", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, zValue: 15, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-81-n-23", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, xValue: .65, yValue: .65, locked: !0 } }] }, { keyframe: 7, actionItems: [{ id: "a-81-n-16", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-05", selectorGuids: ["b2f9a230-fddd-22a6-01bc-2c1902580379"] }, xValue: 45, yValue: 80, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-81-n-17", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-05", selectorGuids: ["b2f9a230-fddd-22a6-01bc-2c1902580379"] }, zValue: -25, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-81-n-27", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-05", selectorGuids: ["b2f9a230-fddd-22a6-01bc-2c1902580379"] }, xValue: .72, yValue: .72, locked: !0 } }] }, { keyframe: 22, actionItems: [{ id: "a-81-n-11", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-06", selectorGuids: ["66e10312-b933-48db-7028-67942ddabdf2"] }, xValue: 90, yValue: 70, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-81-n-12", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-06", selectorGuids: ["66e10312-b933-48db-7028-67942ddabdf2"] }, zValue: -20, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-81-n-25", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-06", selectorGuids: ["66e10312-b933-48db-7028-67942ddabdf2"] }, xValue: .65, yValue: .65, locked: !0 } }] }, { keyframe: 35, actionItems: [{ id: "a-81-n-8", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, zValue: -15, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 50, actionItems: [{ id: "a-81-n-18", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-05", selectorGuids: ["b2f9a230-fddd-22a6-01bc-2c1902580379"] }, zValue: 15, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-81-n-5", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, zValue: -12, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 65, actionItems: [{ id: "a-81-n-13", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-06", selectorGuids: ["66e10312-b933-48db-7028-67942ddabdf2"] }, zValue: 20, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-81-n-31", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, xValue: 30, yValue: 20, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }] }, { keyframe: 75, actionItems: [{ id: "a-81-n-29", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, zValue: 20, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-81-n-32", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, xValue: 10, yValue: 20, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }] }, { keyframe: 78, actionItems: [{ id: "a-81-n-19", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-05", selectorGuids: ["b2f9a230-fddd-22a6-01bc-2c1902580379"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-81-n-20", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-05", selectorGuids: ["b2f9a230-fddd-22a6-01bc-2c1902580379"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-81-n-28", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-05", selectorGuids: ["b2f9a230-fddd-22a6-01bc-2c1902580379"] }, xValue: 1, yValue: 1, locked: !0 } }] }, { keyframe: 90, actionItems: [{ id: "a-81-n-30", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, zValue: 8, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 95, actionItems: [{ id: "a-81-n-14", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-81-n-15", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-81-n-24", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, xValue: 1, yValue: 1, locked: !0 } }] }, { keyframe: 100, actionItems: [{ id: "a-81-n-9", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-81-n-10", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-81-n-22", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, xValue: 1, yValue: 1, locked: !0 } }, { id: "a-81-n-2", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-06", selectorGuids: ["66e10312-b933-48db-7028-67942ddabdf2"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-81-n-4", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-06", selectorGuids: ["66e10312-b933-48db-7028-67942ddabdf2"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-81-n-26", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-06", selectorGuids: ["66e10312-b933-48db-7028-67942ddabdf2"] }, xValue: 1, yValue: 1, locked: !0 } }] }] }], createdOn: 1615239000888 }, "a-15": { id: "a-15", title: "HOVER — Link In", actionItemGroups: [{ actionItems: [{ id: "a-15-n-2", actionTypeId: "STYLE_SIZE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hover-underline", selectorGuids: ["f342c4d1-d2de-9bc1-0e35-37ebeddc8f72"] }, widthValue: .1, widthUnit: "PX", heightUnit: "PX", locked: !1 } }, { id: "a-15-n-6", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "CHILDREN", selector: ".hover-underline", selectorGuids: ["f342c4d1-d2de-9bc1-0e35-37ebeddc8f72"] }, value: "none" } }, { id: "a-15-n-4", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hover-underline", selectorGuids: ["f342c4d1-d2de-9bc1-0e35-37ebeddc8f72"] }, xValue: -5, xUnit: "PX", yUnit: "PX", zUnit: "PX" } }] }, { actionItems: [{ id: "a-15-n-7", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "CHILDREN", selector: ".hover-underline", selectorGuids: ["f342c4d1-d2de-9bc1-0e35-37ebeddc8f72"] }, value: "block" } }] }, { actionItems: [{ id: "a-15-n-3", actionTypeId: "STYLE_SIZE", config: { delay: 0, easing: "outQuint", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hover-underline", selectorGuids: ["f342c4d1-d2de-9bc1-0e35-37ebeddc8f72"] }, widthValue: .1, widthUnit: "AUTO", heightUnit: "PX", locked: !1 } }, { id: "a-15-n-5", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hover-underline", selectorGuids: ["f342c4d1-d2de-9bc1-0e35-37ebeddc8f72"] }, xValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" } }] }], useFirstGroupAsInitialState: !0, createdOn: 1560658196144 }, "a-16": { id: "a-16", title: "HOVER — Link Out", actionItemGroups: [{ actionItems: [{ id: "a-16-n", actionTypeId: "STYLE_SIZE", config: { delay: 0, easing: "outQuart", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hover-underline", selectorGuids: ["f342c4d1-d2de-9bc1-0e35-37ebeddc8f72"] }, widthValue: .1, widthUnit: "PX", heightUnit: "PX", locked: !1 } }, { id: "a-16-n-2", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hover-underline", selectorGuids: ["f342c4d1-d2de-9bc1-0e35-37ebeddc8f72"] }, xValue: -5, xUnit: "PX", yUnit: "PX", zUnit: "PX" } }] }, { actionItems: [{ id: "a-16-n-3", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "CHILDREN", selector: ".hover-underline", selectorGuids: ["f342c4d1-d2de-9bc1-0e35-37ebeddc8f72"] }, value: "none" } }] }], useFirstGroupAsInitialState: !1, createdOn: 1560658196144 }, "a-91": { id: "a-91", title: "NAVBAR — Open", actionItemGroups: [{ actionItems: [{ id: "a-91-n-11", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".nav-background", selectorGuids: ["290ec00b-459c-35e0-036c-3f818b83c920"] }, value: "none" } }, { id: "a-91-n-15", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".nav-menu", selectorGuids: ["747f73bb-fd06-387b-6ca7-4ba40989cc39"] }, value: 0, unit: "" } }, { id: "a-91-n-6", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { selector: ".nav-background", selectorGuids: ["290ec00b-459c-35e0-036c-3f818b83c920"] }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }, { actionItems: [{ id: "a-91-n-10", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "CHILDREN", selector: ".nav-menu.social-mobile", selectorGuids: ["747f73bb-fd06-387b-6ca7-4ba40989cc39", "3392ea38-6f73-cc6c-3101-8c998d430b45"] }, value: "flex" } }, { id: "a-91-n", actionTypeId: "PLUGIN_LOTTIE", config: { delay: 0, easing: "outQuart", duration: 0, target: { selector: ".lottie-animation", selectorGuids: ["aa736aa2-ee68-7b01-bd7c-b6c3bccbeced"] }, value: 50 } }, { id: "a-91-n-7", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "inOutQuart", duration: 650, target: { selector: ".nav-background", selectorGuids: ["290ec00b-459c-35e0-036c-3f818b83c920"] }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" } }, { id: "a-91-n-12", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".nav-background", selectorGuids: ["290ec00b-459c-35e0-036c-3f818b83c920"] }, value: "block" } }, { id: "a-91-n-16", actionTypeId: "STYLE_OPACITY", config: { delay: 600, easing: "outQuart", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".nav-menu", selectorGuids: ["747f73bb-fd06-387b-6ca7-4ba40989cc39"] }, value: 1, unit: "" } }] }], useFirstGroupAsInitialState: !0, createdOn: 1615605092685 }, "a-92": { id: "a-92", title: "NAVBAR — Close", actionItemGroups: [{ actionItems: [{ id: "a-92-n-4", actionTypeId: "PLUGIN_LOTTIE", config: { delay: 0, easing: "", duration: 0, target: { selector: ".lottie-animation", selectorGuids: ["aa736aa2-ee68-7b01-bd7c-b6c3bccbeced"] }, value: 0 } }, { id: "a-92-n-10", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "CHILDREN", selector: ".nav-menu", selectorGuids: ["747f73bb-fd06-387b-6ca7-4ba40989cc39"] }, value: 0, unit: "" } }, { id: "a-92-n-6", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "CHILDREN", selector: ".nav-menu.social-mobile", selectorGuids: ["747f73bb-fd06-387b-6ca7-4ba40989cc39", "3392ea38-6f73-cc6c-3101-8c998d430b45"] }, value: "none" } }, { id: "a-92-n-2", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 0, target: { selector: ".nav-background", selectorGuids: ["290ec00b-459c-35e0-036c-3f818b83c920"] }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: !1, createdOn: 1615605092685 }, "a-95": { id: "a-95", title: "HOVER — Button Works", actionItemGroups: [{ actionItems: [{ id: "a-95-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hover-button-circle", selectorGuids: ["5c9b10c7-bbac-952e-ab5e-e72980a344a2"] }, xValue: .1, yValue: .1, locked: !0 } }, { id: "a-95-n-7", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "CHILDREN", selector: ".hover-button-circle", selectorGuids: ["5c9b10c7-bbac-952e-ab5e-e72980a344a2"] }, value: "block" } }, { id: "a-95-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hover-button-circle", selectorGuids: ["5c9b10c7-bbac-952e-ab5e-e72980a344a2"] }, value: 0, unit: "" } }] }, { actionItems: [{ id: "a-95-n-3", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "CHILDREN", selector: ".hover-button-circle", selectorGuids: ["5c9b10c7-bbac-952e-ab5e-e72980a344a2"] }, value: 1, unit: "" } }, { id: "a-95-n-4", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "outQuart", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hover-button-circle", selectorGuids: ["5c9b10c7-bbac-952e-ab5e-e72980a344a2"] }, xValue: 1, yValue: 1, locked: !0 } }, { id: "a-95-n-6", actionTypeId: "STYLE_BORDER", config: { delay: 100, easing: "", duration: 200, target: { useEventTarget: !0, id: "6163bf40de60bbcea175bf0e|bdab2046-c484-076f-092d-ea657c85c05c" }, globalSwatchId: "", rValue: 255, bValue: 255, gValue: 255, aValue: 0 } }] }], useFirstGroupAsInitialState: !0, createdOn: 1609981639951 }, "a-66": { id: "a-66", title: "HOVER — Button Circle Out", actionItemGroups: [{ actionItems: [{ id: "a-66-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "outQuart", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".hover-button-circle", selectorGuids: ["5c9b10c7-bbac-952e-ab5e-e72980a344a2"] }, xValue: .01, yValue: .01, locked: !0 } }, { id: "a-66-n-3", actionTypeId: "STYLE_BORDER", config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: !0, id: "6163bf40de60bbcea175bf0e|bdab2046-c484-076f-092d-ea657c85c05c" }, globalSwatchId: "", rValue: 255, bValue: 255, gValue: 255, aValue: .2 } }, { id: "a-66-n-4", actionTypeId: "STYLE_BACKGROUND_COLOR", config: { delay: 0, easing: "", duration: 0, target: { id: "6163bf40de60bbcea175bf0e|5d05ccbbc9e4d636b7d05f91" }, globalSwatchId: "", rValue: 0, bValue: 0, gValue: 0, aValue: 1 } }, { id: "a-66-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 350, easing: "", duration: 0, target: { useEventTarget: "CHILDREN", selector: ".hover-button-circle", selectorGuids: ["5c9b10c7-bbac-952e-ab5e-e72980a344a2"] }, value: 0, unit: "" } }] }], useFirstGroupAsInitialState: !1, createdOn: 1609981791107 }, "a-64": { id: "a-64", title: "Mouse Move — Button", continuousParameterGroups: [{ id: "a-64-p", type: "MOUSE_X", parameterLabel: "Mouse X", continuousActionGroups: [{ keyframe: 0, actionItems: [{ id: "a-64-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: !0, id: "6163bf40de60bbcea175bf0e|bdab2046-c484-076f-092d-ea657c85c05c" }, xValue: -2.5, xUnit: "vw", yUnit: "PX", zUnit: "PX" } }] }, { keyframe: 100, actionItems: [{ id: "a-64-n-2", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: !0, id: "6163bf40de60bbcea175bf0e|bdab2046-c484-076f-092d-ea657c85c05c" }, xValue: 2.5, xUnit: "vw", yUnit: "PX", zUnit: "PX" } }] }] }, { id: "a-64-p-2", type: "MOUSE_Y", parameterLabel: "Mouse Y", continuousActionGroups: [{ keyframe: 0, actionItems: [{ id: "a-64-n-3", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: !0, id: "6163bf40de60bbcea175bf0e|bdab2046-c484-076f-092d-ea657c85c05c" }, yValue: -4.5, xUnit: "PX", yUnit: "vh", zUnit: "PX" } }] }, { keyframe: 100, actionItems: [{ id: "a-64-n-4", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: !0, id: "6163bf40de60bbcea175bf0e|bdab2046-c484-076f-092d-ea657c85c05c" }, yValue: 4.5, xUnit: "PX", yUnit: "vh", zUnit: "PX" } }] }] }], createdOn: 1609979057620 }, "a-99": { id: "a-99", title: "LOOP — Scrolling About", actionItemGroups: [{ actionItems: [{ id: "a-99-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 25e3, target: { selector: ".flex-rail.overlap", selectorGuids: ["6eec38b3-206f-b707-a0b9-eefc4d116fb8", "cd428962-106f-e50c-26bf-a7b3280e5012"] }, xValue: -100, xUnit: "%", yUnit: "PX", zUnit: "PX" } }] }, { actionItems: [{ id: "a-99-n-2", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 0, target: { selector: ".flex-rail.overlap", selectorGuids: ["6eec38b3-206f-b707-a0b9-eefc4d116fb8", "cd428962-106f-e50c-26bf-a7b3280e5012"] }, xValue: 0, xUnit: "%", yUnit: "PX", zUnit: "PX" } }] }], useFirstGroupAsInitialState: !1, createdOn: 1615861639037 }, "a-100": { id: "a-100", title: "HOVER — Logo", actionItemGroups: [{ actionItems: [{ id: "a-100-n-2", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "outQuint", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".logo", selectorGuids: ["f41cc745-6c58-551d-f70e-be9afc8d6ffe"] }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: !1, createdOn: 1615863996498 }, "a-101": { id: "a-101", title: "HOVER — Logo Back", actionItemGroups: [{ actionItems: [{ id: "a-101-n-2", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "outQuint", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".logo", selectorGuids: ["f41cc745-6c58-551d-f70e-be9afc8d6ffe"] }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: !1, createdOn: 1615863996498 }, "a-102": { id: "a-102", title: "LOADER — ON", actionItemGroups: [{ actionItems: [{ id: "a-102-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".preloader", selectorGuids: ["b1095e7b-3abc-7d59-77fb-8133acaaabdc"] }, value: "flex" } }, { id: "a-102-n-2", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { selector: ".loader-bar-fill", selectorGuids: ["dee31dab-b600-18dc-8cf8-0485d85cb06a"] }, xValue: -100, xUnit: "%", yUnit: "PX", zUnit: "PX" } }] }, { actionItems: [{ id: "a-102-n-3", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "inOutExpo", duration: 500, target: { selector: ".loader-bar-fill", selectorGuids: ["dee31dab-b600-18dc-8cf8-0485d85cb06a"] }, xValue: 0, xUnit: "%", yUnit: "PX", zUnit: "PX" } }] }, { actionItems: [{ id: "a-102-n-4", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "inOutExpo", duration: 500, target: { selector: ".loader-bar-fill", selectorGuids: ["dee31dab-b600-18dc-8cf8-0485d85cb06a"] }, xValue: 100, xUnit: "%", yUnit: "PX", zUnit: "PX" } }] }, { actionItems: [{ id: "a-102-n-5", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "inOutExpo", duration: 500, target: { selector: ".loader-bar-fill", selectorGuids: ["dee31dab-b600-18dc-8cf8-0485d85cb06a"] }, xValue: 0, xUnit: "%", yUnit: "PX", zUnit: "PX" } }] }, { actionItems: [{ id: "a-102-n-6", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { selector: ".loader-bar-fill", selectorGuids: ["dee31dab-b600-18dc-8cf8-0485d85cb06a"] }, xValue: -100, xUnit: "%", yUnit: "PX", zUnit: "PX" } }] }], useFirstGroupAsInitialState: !0, createdOn: 1615865375057 }, "a-103": { id: "a-103", title: "LOADER — OFF", actionItemGroups: [{ actionItems: [{ id: "a-103-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".preloader", selectorGuids: ["b1095e7b-3abc-7d59-77fb-8133acaaabdc"] }, value: "none" } }] }], useFirstGroupAsInitialState: !1, createdOn: 1615865375057 }, "a-106": { id: "a-106", title: "HOVER — Next In", actionItemGroups: [{ actionItems: [{ id: "a-106-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "CHILDREN", selector: ".thumb-hover-next", selectorGuids: ["9343fe19-20d8-7852-29e8-150026d261be"] }, value: "none" } }, { id: "a-106-n-5", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".thumb-hover-next", selectorGuids: ["9343fe19-20d8-7852-29e8-150026d261be"] }, xValue: .9, yValue: .9, locked: !0 } }, { id: "a-106-n-3", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".thumb-hover-next", selectorGuids: ["9343fe19-20d8-7852-29e8-150026d261be"] }, value: 0, unit: "" } }] }, { actionItems: [{ id: "a-106-n-2", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "CHILDREN", selector: ".thumb-hover-next", selectorGuids: ["9343fe19-20d8-7852-29e8-150026d261be"] }, value: "block" } }, { id: "a-106-n-4", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "inOutQuart", duration: 650, target: { useEventTarget: "CHILDREN", selector: ".thumb-hover-next", selectorGuids: ["9343fe19-20d8-7852-29e8-150026d261be"] }, value: 1, unit: "" } }, { id: "a-106-n-6", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "inOutQuart", duration: 650, target: { useEventTarget: "CHILDREN", selector: ".thumb-hover-next", selectorGuids: ["9343fe19-20d8-7852-29e8-150026d261be"] }, xValue: 1, yValue: 1, locked: !0 } }] }], useFirstGroupAsInitialState: !0, createdOn: 1616041889744 }, "a-108": { id: "a-108", title: "HOVER — Next Out", actionItemGroups: [{ actionItems: [{ id: "a-108-n-3", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "inOutQuint", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".thumb-hover-next", selectorGuids: ["9343fe19-20d8-7852-29e8-150026d261be"] }, xValue: .9, yValue: .9, locked: !0 } }, { id: "a-108-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "inOutQuint", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".thumb-hover-next", selectorGuids: ["9343fe19-20d8-7852-29e8-150026d261be"] }, value: 0, unit: "" } }] }, { actionItems: [{ id: "a-108-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "CHILDREN", selector: ".thumb-hover-next", selectorGuids: ["9343fe19-20d8-7852-29e8-150026d261be"] }, value: "none" } }] }], useFirstGroupAsInitialState: !1, createdOn: 1616041889744 }, "a-107": { id: "a-107", title: "MOUSE MOVE - Next", continuousParameterGroups: [{ id: "a-107-p", type: "MOUSE_X", parameterLabel: "Mouse X", continuousActionGroups: [{ keyframe: 0, actionItems: [{ id: "a-107-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".thumb-hover-next", selectorGuids: ["9343fe19-20d8-7852-29e8-150026d261be"] }, xValue: -35, xUnit: "%", yUnit: "PX", zUnit: "PX" } }] }, { keyframe: 100, actionItems: [{ id: "a-107-n-2", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".thumb-hover-next", selectorGuids: ["9343fe19-20d8-7852-29e8-150026d261be"] }, xValue: 35, xUnit: "%", yUnit: "PX", zUnit: "PX" } }] }] }, { id: "a-107-p-2", type: "MOUSE_Y", parameterLabel: "Mouse Y", continuousActionGroups: [{ keyframe: 0, actionItems: [{ id: "a-107-n-3", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".thumb-hover-next", selectorGuids: ["9343fe19-20d8-7852-29e8-150026d261be"] }, yValue: -20, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }, { keyframe: 100, actionItems: [{ id: "a-107-n-4", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".thumb-hover-next", selectorGuids: ["9343fe19-20d8-7852-29e8-150026d261be"] }, yValue: 20, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }] }], createdOn: 1616042080165 }, "a-104": { id: "a-104", title: "HOVER — Scrolling Link In", actionItemGroups: [{ actionItems: [{ id: "a-104-n", actionTypeId: "STYLE_BACKGROUND_COLOR", config: { delay: 0, easing: "outQuart", duration: 0, target: { useEventTarget: !0, id: "6163bf40de60bbcea175bf0e|5179cbfe-bcd2-bd02-ac9f-6239b0a30a4b" }, globalSwatchId: "", rValue: 255, bValue: 255, gValue: 255, aValue: 1 } }, { id: "a-104-n-2", actionTypeId: "STYLE_TEXT_COLOR", config: { delay: 0, easing: "", duration: 0, target: { selector: ".inner-text-scrolling", selectorGuids: ["15996d8c-da5d-8410-daba-04af95f5db22"] }, globalSwatchId: "", rValue: 0, bValue: 0, gValue: 0, aValue: 1 } }] }], useFirstGroupAsInitialState: !1, createdOn: 1616039241552 }, "a-105": { id: "a-105", title: "HOVER — Scrolling Link Out", actionItemGroups: [{ actionItems: [{ id: "a-105-n", actionTypeId: "STYLE_BACKGROUND_COLOR", config: { delay: 0, easing: "outQuart", duration: 500, target: { useEventTarget: !0, id: "6163bf40de60bbcea175bf0e|5179cbfe-bcd2-bd02-ac9f-6239b0a30a4b" }, globalSwatchId: "", rValue: 0, bValue: 0, gValue: 0, aValue: 0 } }, { id: "a-105-n-5", actionTypeId: "STYLE_TEXT_COLOR", config: { delay: 0, easing: "", duration: 0, target: { selector: ".inner-text-scrolling", selectorGuids: ["15996d8c-da5d-8410-daba-04af95f5db22"] }, globalSwatchId: "", rValue: 255, bValue: 255, gValue: 255, aValue: 1 } }] }], useFirstGroupAsInitialState: !1, createdOn: 1616039241552 }, "a-160": { id: "a-160", title: "HERO — Scrolling", continuousParameterGroups: [{ id: "a-160-p", type: "SCROLL_PROGRESS", parameterLabel: "Scroll", continuousActionGroups: [{ keyframe: 0, actionItems: [{ id: "a-160-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-160-n-2", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-160-n-6", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, xValue: 1, yValue: 1, locked: !0 } }, { id: "a-160-n-7", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, xValue: 1, yValue: 1, locked: !0 } }] }, { keyframe: 1, actionItems: [{ id: "a-160-n-8", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-160-n-9", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-160-n-10", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, xValue: 1, yValue: 1, locked: !0 } }] }, { keyframe: 2, actionItems: [{ id: "a-160-n-11", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-160-n-12", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-160-n-13", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, xValue: 1, yValue: 1, locked: !0 } }] }, { keyframe: 3, actionItems: [{ id: "a-160-n-14", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-160-n-15", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-160-n-16", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, xValue: 1, yValue: 1, locked: !0 } }] }, { keyframe: 11, actionItems: [{ id: "a-160-n-17", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, xValue: -7, yValue: 10, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }] }, { keyframe: 13, actionItems: [{ id: "a-160-n-18", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, xValue: -15, yValue: 10, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }] }, { keyframe: 14, actionItems: [{ id: "a-160-n-19", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, xValue: -22, yValue: 10, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }] }, { keyframe: 15, actionItems: [{ id: "a-160-n-20", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, xValue: -18, yValue: 10, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }] }, { keyframe: 35, actionItems: [{ id: "a-160-n-21", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, zValue: 12, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 36, actionItems: [{ id: "a-160-n-22", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, zValue: -6, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 37, actionItems: [{ id: "a-160-n-23", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, zValue: 12, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 38, actionItems: [{ id: "a-160-n-24", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, zValue: 12, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 75, actionItems: [{ id: "a-160-n-25", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, zValue: -6, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 76, actionItems: [{ id: "a-160-n-26", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, zValue: 16, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 78, actionItems: [{ id: "a-160-n-27", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, zValue: 2, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 79, actionItems: [{ id: "a-160-n-28", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, zValue: -6, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 94, actionItems: [{ id: "a-160-n-32", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, xValue: -79, yValue: 10, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-160-n-33", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, zValue: -18, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 96, actionItems: [{ id: "a-160-n-34", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, xValue: -66, yValue: -30, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-160-n-35", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, zValue: -4, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 100, actionItems: [{ id: "a-160-n-36", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, xValue: -55, yValue: -15, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-160-n-37", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, zValue: 8, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-160-n-38", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, xValue: .6, yValue: .6, locked: !0 } }, { id: "a-160-n-39", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, xValue: .6, yValue: .6, locked: !0 } }, { id: "a-160-n-40", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, xValue: .6, yValue: .6, locked: !0 } }, { id: "a-160-n-41", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, xValue: .55, yValue: .55, locked: !0 } }, { id: "a-160-n-42", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, xValue: -70, yValue: 30, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-160-n-43", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, zValue: 35, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }] }], createdOn: 1614889520220 }, "a-161": { id: "a-161", title: "ABOUT IMG — Scrolling", continuousParameterGroups: [{ id: "a-161-p", type: "SCROLL_PROGRESS", parameterLabel: "Scroll", continuousActionGroups: [{ keyframe: 0, actionItems: [{ id: "a-161-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-161-n-2", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, xValue: 1, yValue: 1, locked: !0 } }, { id: "a-161-n-3", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 1, actionItems: [{ id: "a-161-n-4", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-161-n-5", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, xValue: 1, yValue: 1, locked: !0 } }, { id: "a-161-n-6", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 2, actionItems: [{ id: "a-161-n-7", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-161-n-8", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, xValue: 1, yValue: 1, locked: !0 } }, { id: "a-161-n-9", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 3, actionItems: [{ id: "a-161-n-10", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-161-n-11", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, xValue: 1, yValue: 1, locked: !0 } }, { id: "a-161-n-12", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 81, actionItems: [{ id: "a-161-n-13", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, xValue: 0, yValue: 20, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-161-n-14", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, xValue: 1, yValue: 1, locked: !0 } }, { id: "a-161-n-15", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-01", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea91f"] }, zValue: -12, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 87, actionItems: [{ id: "a-161-n-16", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, xValue: 0, yValue: 25, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-161-n-17", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, xValue: 1, yValue: 1, locked: !0 } }, { id: "a-161-n-18", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-02", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea926"] }, zValue: 5, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 93, actionItems: [{ id: "a-161-n-19", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, xValue: 0, yValue: 30, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-161-n-20", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, xValue: 1, yValue: 1, locked: !0 } }, { id: "a-161-n-21", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-03", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea922"] }, zValue: -10, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 100, actionItems: [{ id: "a-161-n-22", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, xValue: 35, yValue: 45, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-161-n-23", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, xValue: .6, yValue: .6, locked: !0 } }, { id: "a-161-n-24", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-04", selectorGuids: ["1a6875c1-cf99-9e37-7fd9-0414bc7ea919"] }, zValue: 15, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }] }], createdOn: 1615325437327 }, "a-163": { id: "a-163", title: "ABOUT IMG — Mobile — Scrolling", continuousParameterGroups: [{ id: "a-163-p", type: "SCROLL_PROGRESS", parameterLabel: "Scroll", continuousActionGroups: [{ keyframe: 0, actionItems: [{ id: "a-163-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, xValue: 80, yValue: -15, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-163-n-2", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, zValue: 20, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-163-n-3", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, xValue: .5, yValue: .5, locked: !0 } }] }, { keyframe: 1, actionItems: [{ id: "a-163-n-4", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, xValue: 60, yValue: 45, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-163-n-5", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, zValue: 15, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-163-n-6", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, xValue: .65, yValue: .65, locked: !0 } }] }, { keyframe: 7, actionItems: [{ id: "a-163-n-7", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-05", selectorGuids: ["b2f9a230-fddd-22a6-01bc-2c1902580379"] }, xValue: 45, yValue: 80, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-163-n-8", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-05", selectorGuids: ["b2f9a230-fddd-22a6-01bc-2c1902580379"] }, zValue: -25, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-163-n-9", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-05", selectorGuids: ["b2f9a230-fddd-22a6-01bc-2c1902580379"] }, xValue: .72, yValue: .72, locked: !0 } }] }, { keyframe: 22, actionItems: [{ id: "a-163-n-10", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-06", selectorGuids: ["66e10312-b933-48db-7028-67942ddabdf2"] }, xValue: 90, yValue: 70, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-163-n-11", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-06", selectorGuids: ["66e10312-b933-48db-7028-67942ddabdf2"] }, zValue: -20, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-163-n-12", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-06", selectorGuids: ["66e10312-b933-48db-7028-67942ddabdf2"] }, xValue: .65, yValue: .65, locked: !0 } }] }, { keyframe: 35, actionItems: [{ id: "a-163-n-13", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, zValue: -15, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 50, actionItems: [{ id: "a-163-n-14", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-05", selectorGuids: ["b2f9a230-fddd-22a6-01bc-2c1902580379"] }, zValue: 15, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-163-n-15", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, zValue: -12, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 65, actionItems: [{ id: "a-163-n-16", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-06", selectorGuids: ["66e10312-b933-48db-7028-67942ddabdf2"] }, zValue: 20, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-163-n-17", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, xValue: 30, yValue: 20, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }] }, { keyframe: 75, actionItems: [{ id: "a-163-n-18", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, zValue: 20, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-163-n-19", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, xValue: 10, yValue: 20, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }] }, { keyframe: 78, actionItems: [{ id: "a-163-n-20", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-05", selectorGuids: ["b2f9a230-fddd-22a6-01bc-2c1902580379"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-163-n-21", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-05", selectorGuids: ["b2f9a230-fddd-22a6-01bc-2c1902580379"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-163-n-22", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-05", selectorGuids: ["b2f9a230-fddd-22a6-01bc-2c1902580379"] }, xValue: 1, yValue: 1, locked: !0 } }] }, { keyframe: 90, actionItems: [{ id: "a-163-n-23", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, zValue: 8, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }] }, { keyframe: 95, actionItems: [{ id: "a-163-n-24", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-163-n-25", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-163-n-26", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-07", selectorGuids: ["4329b464-651d-b8a9-4f18-aecfc286c976"] }, xValue: 1, yValue: 1, locked: !0 } }] }, { keyframe: 100, actionItems: [{ id: "a-163-n-27", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-163-n-28", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-163-n-29", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-08", selectorGuids: ["52b2eb50-275d-ada6-1336-0425a4509b7b"] }, xValue: 1, yValue: 1, locked: !0 } }, { id: "a-163-n-30", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-06", selectorGuids: ["66e10312-b933-48db-7028-67942ddabdf2"] }, xValue: 0, yValue: 0, xUnit: "vw", yUnit: "vh", zUnit: "PX" } }, { id: "a-163-n-31", actionTypeId: "TRANSFORM_ROTATE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-06", selectorGuids: ["66e10312-b933-48db-7028-67942ddabdf2"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" } }, { id: "a-163-n-32", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".img-about-06", selectorGuids: ["66e10312-b933-48db-7028-67942ddabdf2"] }, xValue: 1, yValue: 1, locked: !0 } }] }] }], createdOn: 1615239000888 } }, site: { mediaQueries: [{ key: "main", min: 992, max: 1e4 }, { key: "medium", min: 768, max: 991 }, { key: "small", min: 480, max: 767 }, { key: "tiny", min: 0, max: 479 }] } });