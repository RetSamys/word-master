function copyToClipboard(textToCopy) {
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(textToCopy);
    } else {
        // text area method
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            // here the magic happens
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
        });
    }
}
/*! For license information please see main.39a7d28d.js.LICENSE.txt */ ! function() {
    var e = {
            618: function(e, t, n) {
                var r;
                ! function() {
                    "use strict";
                    var a = !("undefined" === typeof window || !window.document || !window.document.createElement),
                        s = {
                            canUseDOM: a,
                            canUseWorkers: "undefined" !== typeof Worker,
                            canUseEventListeners: a && !(!window.addEventListener && !window.attachEvent),
                            canUseViewport: a && !!window.screen
                        };
                    void 0 === (r = function() {
                        return s;
                    }.call(t, n, t, e)) || (e.exports = r)
                }()
            },
            725: function(e) {
                "use strict";
                var t = Object.getOwnPropertySymbols,
                    n = Object.prototype.hasOwnProperty,
                    r = Object.prototype.propertyIsEnumerable;

                function a(e) {
                    if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }
                e.exports = function() {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                return t[e]
                            })).join("")) return !1;
                        var r = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                            r[e] = e
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                    } catch (a) {
                        return !1
                    }
                }() ? Object.assign : function(e, s) {
                    for (var o, l, i = a(e), u = 1; u < arguments.length; u++) {
                        for (var c in o = Object(arguments[u])) n.call(o, c) && (i[c] = o[c]);
                        if (t) {
                            l = t(o);
                            for (var d = 0; d < l.length; d++) r.call(o, l[d]) && (i[l[d]] = o[l[d]])
                        }
                    }
                    return i
                }
            },
            888: function(e, t, n) {
                "use strict";
                var r = n(47);

                function a() {}

                function s() {}
                s.resetWarningCache = a, e.exports = function() {
                    function e(e, t, n, a, s, o) {
                        if (o !== r) {
                            var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw l.name = "Invariant Violation", l
                        }
                    }

                    function t() {
                        return e
                    }
                    e.isRequired = e;
                    var n = {
                        array: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: s,
                        resetWarningCache: a
                    };
                    return n.PropTypes = n, n
                }
            },
            7: function(e, t, n) {
                e.exports = n(888)()
            },
            47: function(e) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            },
            463: function(e, t, n) {
                "use strict";
                var r = n(791),
                    a = n(725),
                    s = n(296);

                function o(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                if (!r) throw Error(o(227));
                var l = new Set,
                    i = {};

                function u(e, t) {
                    c(e, t), c(e + "Capture", t)
                }

                function c(e, t) {
                    for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e])
                }
                var d = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    p = Object.prototype.hasOwnProperty,
                    m = {},
                    h = {};

                function y(e, t, n, r, a, s, o) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o
                }
                var g = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    g[e] = new y(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    g[t] = new y(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    g[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    g[e] = new y(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    g[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    g[e] = new y(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    g[e] = new y(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    g[e] = new y(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    g[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var b = /[\-:]([a-z])/g;

                function v(e) {
                    return e[1].toUpperCase()
                }

                function k(e, t, n, r) {
                    var a = g.hasOwnProperty(t) ? g[t] : null;
                    (null !== a ? 0 === a.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
                        if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, a, r) && (n = null), r || null === a ? function(e) {
                        return !!p.call(h, e) || !p.call(m, e) && (f.test(e) ? h[e] = !0 : (m[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(b, v);
                    g[t] = new y(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(b, v);
                    g[t] = new y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(b, v);
                    g[t] = new y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    g[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), g.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    g[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    x = 60103,
                    S = 60106,
                    E = 60107,
                    j = 60108,
                    z = 60114,
                    C = 60109,
                    O = 60110,
                    _ = 60112,
                    N = 60113,
                    P = 60120,
                    T = 60115,
                    L = 60116,
                    M = 60121,
                    R = 60128,
                    D = 60129,
                    F = 60130,
                    A = 60131;
                if ("function" === typeof Symbol && Symbol.for) {
                    var I = Symbol.for;
                    x = I("react.element"), S = I("react.portal"), E = I("react.fragment"), j = I("react.strict_mode"), z = I("react.profiler"), C = I("react.provider"), O = I("react.context"), _ = I("react.forward_ref"), N = I("react.suspense"), P = I("react.suspense_list"), T = I("react.memo"), L = I("react.lazy"), M = I("react.block"), I("react.scope"), R = I("react.opaque.id"), D = I("react.debug_trace_mode"), F = I("react.offscreen"), A = I("react.legacy_hidden")
                }
                var U, q = "function" === typeof Symbol && Symbol.iterator;

                function W(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = q && e[q] || e["@@iterator"]) ? e : null
                }

                function B(e) {
                    if (void 0 === U) try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        U = t && t[1] || ""
                    }
                    return "\n" + U + e
                }
                var H = !1;

                function V(e, t) {
                    if (!e || H) return "";
                    H = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (i) {
                                    var r = i
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (i) {
                                    r = i
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (i) {
                                r = i
                            }
                            e()
                        }
                    } catch (i) {
                        if (i && r && "string" === typeof i.stack) {
                            for (var a = i.stack.split("\n"), s = r.stack.split("\n"), o = a.length - 1, l = s.length - 1; 1 <= o && 0 <= l && a[o] !== s[l];) l--;
                            for (; 1 <= o && 0 <= l; o--, l--)
                                if (a[o] !== s[l]) {
                                    if (1 !== o || 1 !== l)
                                        do {
                                            if (o--, 0 > --l || a[o] !== s[l]) return "\n" + a[o].replace(" at new ", " at ")
                                        } while (1 <= o && 0 <= l);
                                    break
                                }
                        }
                    } finally {
                        H = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? B(e) : ""
                }

                function $(e) {
                    switch (e.tag) {
                        case 5:
                            return B(e.type);
                        case 16:
                            return B("Lazy");
                        case 13:
                            return B("Suspense");
                        case 19:
                            return B("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = V(e.type, !1);
                        case 11:
                            return e = V(e.type.render, !1);
                        case 22:
                            return e = V(e.type._render, !1);
                        case 1:
                            return e = V(e.type, !0);
                        default:
                            return ""
                    }
                }

                function Q(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case E:
                            return "Fragment";
                        case S:
                            return "Portal";
                        case z:
                            return "Profiler";
                        case j:
                            return "StrictMode";
                        case N:
                            return "Suspense";
                        case P:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case O:
                            return (e.displayName || "Context") + ".Consumer";
                        case C:
                            return (e._context.displayName || "Context") + ".Provider";
                        case _:
                            var t = e.render;
                            return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                        case T:
                            return Q(e.type);
                        case M:
                            return Q(e._render);
                        case L:
                            t = e._payload, e = e._init;
                            try {
                                return Q(e(t))
                            } catch (n) {}
                    }
                    return null
                }

                function K(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "object":
                        case "string":
                        case "undefined":
                            return e;
                        default:
                            return ""
                    }
                }

                function Y(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function G(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = Y(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var a = n.get,
                                s = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return a.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, s.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(e) {
                                    r = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function X(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = Y(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function J(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function Z(e, t) {
                    var n = t.checked;
                    return a({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function ee(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = K(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function te(e, t) {
                    null != (t = t.checked) && k(e, "checked", t, !1)
                }

                function ne(e, t) {
                    te(e, t);
                    var n = K(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ae(e, t.type, n) : t.hasOwnProperty("defaultValue") && ae(e, t.type, K(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function re(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function ae(e, t, n) {
                    "number" === t && J(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }

                function se(e, t) {
                    return e = a({
                        children: void 0
                    }, t), (t = function(e) {
                        var t = "";
                        return r.Children.forEach(e, (function(e) {
                            null != e && (t += e)
                        })), t
                    }(t.children)) && (e.children = t), e
                }

                function oe(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                        for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + K(n), t = null, a = 0; a < e.length; a++) {
                            if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                            null !== t || e[a].disabled || (t = e[a])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function le(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
                    return a({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function ie(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(o(92));
                            if (Array.isArray(n)) {
                                if (!(1 >= n.length)) throw Error(o(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: K(n)
                    }
                }

                function ue(e, t) {
                    var n = K(t.value),
                        r = K(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function ce(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }
                var de = "http://www.w3.org/1999/xhtml",
                    fe = "http://www.w3.org/2000/svg";

                function pe(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function me(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? pe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var he, ye, ge = (ye = function(e, t) {
                    if (e.namespaceURI !== fe || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((he = he || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = he.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return ye(e, t)
                    }))
                } : ye);

                function be(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var ve = {
                        animationIterationCount: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    ke = ["Webkit", "ms", "Moz", "O"];

                function we(e, t, n) {
                    return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || ve.hasOwnProperty(e) && ve[e] ? ("" + t).trim() : t + "px"
                }

                function xe(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                a = we(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
                        }
                }
                Object.keys(ve).forEach((function(e) {
                    ke.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), ve[t] = ve[e]
                    }))
                }));
                var Se = a({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function Ee(e, t) {
                    if (t) {
                        if (Se[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(o(60));
                            if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
                        }
                        if (null != t.style && "object" !== typeof t.style) throw Error(o(62))
                    }
                }

                function je(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }

                function ze(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Ce = null,
                    Oe = null,
                    _e = null;

                function Ne(e) {
                    if (e = ra(e)) {
                        if ("function" !== typeof Ce) throw Error(o(280));
                        var t = e.stateNode;
                        t && (t = sa(t), Ce(e.stateNode, e.type, t))
                    }
                }

                function Pe(e) {
                    Oe ? _e ? _e.push(e) : _e = [e] : Oe = e
                }

                function Te() {
                    if (Oe) {
                        var e = Oe,
                            t = _e;
                        if (_e = Oe = null, Ne(e), t)
                            for (e = 0; e < t.length; e++) Ne(t[e])
                    }
                }

                function Le(e, t) {
                    return e(t)
                }

                function Me(e, t, n, r, a) {
                    return e(t, n, r, a)
                }

                function Re() {}
                var De = Le,
                    Fe = !1,
                    Ae = !1;

                function Ie() {
                    null === Oe && null === _e || (Re(), Te())
                }

                function Ue(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = sa(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
                    return n
                }
                var qe = !1;
                if (d) try {
                    var We = {};
                    Object.defineProperty(We, "passive", {
                        get: function() {
                            qe = !0
                        }
                    }), window.addEventListener("test", We, We), window.removeEventListener("test", We, We)
                } catch (ye) {
                    qe = !1
                }

                function Be(e, t, n, r, a, s, o, l, i) {
                    var u = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, u)
                    } catch (c) {
                        this.onError(c)
                    }
                }
                var He = !1,
                    Ve = null,
                    $e = !1,
                    Qe = null,
                    Ke = {
                        onError: function(e) {
                            He = !0, Ve = e
                        }
                    };

                function Ye(e, t, n, r, a, s, o, l, i) {
                    He = !1, Ve = null, Be.apply(Ke, arguments)
                }

                function Ge(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (1026 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function Xe(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function Je(e) {
                    if (Ge(e) !== e) throw Error(o(188))
                }

                function Ze(e) {
                    if (e = function(e) {
                            var t = e.alternate;
                            if (!t) {
                                if (null === (t = Ge(e))) throw Error(o(188));
                                return t !== e ? null : e
                            }
                            for (var n = e, r = t;;) {
                                var a = n.return;
                                if (null === a) break;
                                var s = a.alternate;
                                if (null === s) {
                                    if (null !== (r = a.return)) {
                                        n = r;
                                        continue
                                    }
                                    break
                                }
                                if (a.child === s.child) {
                                    for (s = a.child; s;) {
                                        if (s === n) return Je(a), e;
                                        if (s === r) return Je(a), t;
                                        s = s.sibling
                                    }
                                    throw Error(o(188))
                                }
                                if (n.return !== r.return) n = a, r = s;
                                else {
                                    for (var l = !1, i = a.child; i;) {
                                        if (i === n) {
                                            l = !0, n = a, r = s;
                                            break
                                        }
                                        if (i === r) {
                                            l = !0, r = a, n = s;
                                            break
                                        }
                                        i = i.sibling
                                    }
                                    if (!l) {
                                        for (i = s.child; i;) {
                                            if (i === n) {
                                                l = !0, n = s, r = a;
                                                break
                                            }
                                            if (i === r) {
                                                l = !0, r = s, n = a;
                                                break
                                            }
                                            i = i.sibling
                                        }
                                        if (!l) throw Error(o(189))
                                    }
                                }
                                if (n.alternate !== r) throw Error(o(190))
                            }
                            if (3 !== n.tag) throw Error(o(188));
                            return n.stateNode.current === n ? e : t
                        }(e), !e) return null;
                    for (var t = e;;) {
                        if (5 === t.tag || 6 === t.tag) return t;
                        if (t.child) t.child.return = t, t = t.child;
                        else {
                            if (t === e) break;
                            for (; !t.sibling;) {
                                if (!t.return || t.return === e) return null;
                                t = t.return
                            }
                            t.sibling.return = t.return, t = t.sibling
                        }
                    }
                    return null
                }

                function et(e, t) {
                    for (var n = e.alternate; null !== t;) {
                        if (t === e || t === n) return !0;
                        t = t.return
                    }
                    return !1
                }
                var tt, nt, rt, at, st = !1,
                    ot = [],
                    lt = null,
                    it = null,
                    ut = null,
                    ct = new Map,
                    dt = new Map,
                    ft = [],
                    pt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function mt(e, t, n, r, a) {
                    return {
                        blockedOn: e,
                        domEventName: t,
                        eventSystemFlags: 16 | n,
                        nativeEvent: a,
                        targetContainers: [r]
                    }
                }

                function ht(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            lt = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            it = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            ut = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            ct.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            dt.delete(t.pointerId)
                    }
                }

                function yt(e, t, n, r, a, s) {
                    return null === e || e.nativeEvent !== s ? (e = mt(t, n, r, a, s), null !== t && (null !== (t = ra(t)) && nt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
                }

                function gt(e) {
                    var t = na(e.target);
                    if (null !== t) {
                        var n = Ge(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = Xe(n))) return e.blockedOn = t, void at(e.lanePriority, (function() {
                                    s.unstable_runWithPriority(e.priority, (function() {
                                        rt(n)
                                    }))
                                }))
                            } else if (3 === t && n.stateNode.hydrate) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function bt(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = ra(n)) && nt(t), e.blockedOn = n, !1;
                        t.shift()
                    }
                    return !0
                }

                function vt(e, t, n) {
                    bt(e) && n.delete(t)
                }

                function kt() {
                    for (st = !1; 0 < ot.length;) {
                        var e = ot[0];
                        if (null !== e.blockedOn) {
                            null !== (e = ra(e.blockedOn)) && tt(e);
                            break
                        }
                        for (var t = e.targetContainers; 0 < t.length;) {
                            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                            if (null !== n) {
                                e.blockedOn = n;
                                break
                            }
                            t.shift()
                        }
                        null === e.blockedOn && ot.shift()
                    }
                    null !== lt && bt(lt) && (lt = null), null !== it && bt(it) && (it = null), null !== ut && bt(ut) && (ut = null), ct.forEach(vt), dt.forEach(vt)
                }

                function wt(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, st || (st = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, kt)))
                }

                function xt(e) {
                    function t(t) {
                        return wt(t, e)
                    }
                    if (0 < ot.length) {
                        wt(ot[0], e);
                        for (var n = 1; n < ot.length; n++) {
                            var r = ot[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== lt && wt(lt, e), null !== it && wt(it, e), null !== ut && wt(ut, e), ct.forEach(t), dt.forEach(t), n = 0; n < ft.length; n++)(r = ft[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < ft.length && null === (n = ft[0]).blockedOn;) gt(n), null === n.blockedOn && ft.shift()
                }

                function St(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var Et = {
                        animationend: St("Animation", "AnimationEnd"),
                        animationiteration: St("Animation", "AnimationIteration"),
                        animationstart: St("Animation", "AnimationStart"),
                        transitionend: St("Transition", "TransitionEnd")
                    },
                    jt = {},
                    zt = {};

                function Ct(e) {
                    if (jt[e]) return jt[e];
                    if (!Et[e]) return e;
                    var t, n = Et[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in zt) return jt[e] = n[t];
                    return e
                }
                d && (zt = document.createElement("div").style, "AnimationEvent" in window || (delete Et.animationend.animation, delete Et.animationiteration.animation, delete Et.animationstart.animation), "TransitionEvent" in window || delete Et.transitionend.transition);
                var Ot = Ct("animationend"),
                    _t = Ct("animationiteration"),
                    Nt = Ct("animationstart"),
                    Pt = Ct("transitionend"),
                    Tt = new Map,
                    Lt = new Map,
                    Mt = ["abort", "abort", Ot, "animationEnd", _t, "animationIteration", Nt, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Pt, "transitionEnd", "waiting", "waiting"];

                function Rt(e, t) {
                    for (var n = 0; n < e.length; n += 2) {
                        var r = e[n],
                            a = e[n + 1];
                        a = "on" + (a[0].toUpperCase() + a.slice(1)), Lt.set(r, t), Tt.set(r, a), u(a, [r])
                    }
                }(0, s.unstable_now)();
                var Dt = 8;

                function Ft(e) {
                    if (0 !== (1 & e)) return Dt = 15, 1;
                    if (0 !== (2 & e)) return Dt = 14, 2;
                    if (0 !== (4 & e)) return Dt = 13, 4;
                    var t = 24 & e;
                    return 0 !== t ? (Dt = 12, t) : 0 !== (32 & e) ? (Dt = 11, 32) : 0 !== (t = 192 & e) ? (Dt = 10, t) : 0 !== (256 & e) ? (Dt = 9, 256) : 0 !== (t = 3584 & e) ? (Dt = 8, t) : 0 !== (4096 & e) ? (Dt = 7, 4096) : 0 !== (t = 4186112 & e) ? (Dt = 6, t) : 0 !== (t = 62914560 & e) ? (Dt = 5, t) : 67108864 & e ? (Dt = 4, 67108864) : 0 !== (134217728 & e) ? (Dt = 3, 134217728) : 0 !== (t = 805306368 & e) ? (Dt = 2, t) : 0 !== (1073741824 & e) ? (Dt = 1, 1073741824) : (Dt = 8, e)
                }

                function At(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return Dt = 0;
                    var r = 0,
                        a = 0,
                        s = e.expiredLanes,
                        o = e.suspendedLanes,
                        l = e.pingedLanes;
                    if (0 !== s) r = s, a = Dt = 15;
                    else if (0 !== (s = 134217727 & n)) {
                        var i = s & ~o;
                        0 !== i ? (r = Ft(i), a = Dt) : 0 !== (l &= s) && (r = Ft(l), a = Dt)
                    } else 0 !== (s = n & ~o) ? (r = Ft(s), a = Dt) : 0 !== l && (r = Ft(l), a = Dt);
                    if (0 === r) return 0;
                    if (r = n & ((0 > (r = 31 - Ht(r)) ? 0 : 1 << r) << 1) - 1, 0 !== t && t !== r && 0 === (t & o)) {
                        if (Ft(t), a <= Dt) return t;
                        Dt = a
                    }
                    if (0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - Ht(t)), r |= e[n], t &= ~a;
                    return r
                }

                function It(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function Ut(e, t) {
                    switch (e) {
                        case 15:
                            return 1;
                        case 14:
                            return 2;
                        case 12:
                            return 0 === (e = qt(24 & ~t)) ? Ut(10, t) : e;
                        case 10:
                            return 0 === (e = qt(192 & ~t)) ? Ut(8, t) : e;
                        case 8:
                            return 0 === (e = qt(3584 & ~t)) && (0 === (e = qt(4186112 & ~t)) && (e = 512)), e;
                        case 2:
                            return 0 === (t = qt(805306368 & ~t)) && (t = 268435456), t
                    }
                    throw Error(o(358, e))
                }

                function qt(e) {
                    return e & -e
                }

                function Wt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function Bt(e, t, n) {
                    e.pendingLanes |= t;
                    var r = t - 1;
                    e.suspendedLanes &= r, e.pingedLanes &= r, (e = e.eventTimes)[t = 31 - Ht(t)] = n
                }
                var Ht = Math.clz32 ? Math.clz32 : function(e) {
                        return 0 === e ? 32 : 31 - (Vt(e) / $t | 0) | 0
                    },
                    Vt = Math.log,
                    $t = Math.LN2;
                var Qt = s.unstable_UserBlockingPriority,
                    Kt = s.unstable_runWithPriority,
                    Yt = !0;

                function Gt(e, t, n, r) {
                    Fe || Re();
                    var a = Jt,
                        s = Fe;
                    Fe = !0;
                    try {
                        Me(a, e, t, n, r)
                    } finally {
                        (Fe = s) || Ie()
                    }
                }

                function Xt(e, t, n, r) {
                    Kt(Qt, Jt.bind(null, e, t, n, r))
                }

                function Jt(e, t, n, r) {
                    var a;
                    if (Yt)
                        if ((a = 0 === (4 & t)) && 0 < ot.length && -1 < pt.indexOf(e)) e = mt(null, e, t, n, r), ot.push(e);
                        else {
                            var s = Zt(e, t, n, r);
                            if (null === s) a && ht(e, r);
                            else {
                                if (a) {
                                    if (-1 < pt.indexOf(e)) return e = mt(s, e, t, n, r), void ot.push(e);
                                    if (function(e, t, n, r, a) {
                                            switch (t) {
                                                case "focusin":
                                                    return lt = yt(lt, e, t, n, r, a), !0;
                                                case "dragenter":
                                                    return it = yt(it, e, t, n, r, a), !0;
                                                case "mouseover":
                                                    return ut = yt(ut, e, t, n, r, a), !0;
                                                case "pointerover":
                                                    var s = a.pointerId;
                                                    return ct.set(s, yt(ct.get(s) || null, e, t, n, r, a)), !0;
                                                case "gotpointercapture":
                                                    return s = a.pointerId, dt.set(s, yt(dt.get(s) || null, e, t, n, r, a)), !0
                                            }
                                            return !1
                                        }(s, e, t, n, r)) return;
                                    ht(e, r)
                                }
                                Rr(e, t, r, null, n)
                            }
                        }
                }

                function Zt(e, t, n, r) {
                    var a = ze(r);
                    if (null !== (a = na(a))) {
                        var s = Ge(a);
                        if (null === s) a = null;
                        else {
                            var o = s.tag;
                            if (13 === o) {
                                if (null !== (a = Xe(s))) return a;
                                a = null
                            } else if (3 === o) {
                                if (s.stateNode.hydrate) return 3 === s.tag ? s.stateNode.containerInfo : null;
                                a = null
                            } else s !== a && (a = null)
                        }
                    }
                    return Rr(e, t, r, a, n), null
                }
                var en = null,
                    tn = null,
                    nn = null;

                function rn() {
                    if (nn) return nn;
                    var e, t, n = tn,
                        r = n.length,
                        a = "value" in en ? en.value : en.textContent,
                        s = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var o = r - e;
                    for (t = 1; t <= o && n[r - t] === a[s - t]; t++);
                    return nn = a.slice(e, 1 < t ? 1 - t : void 0)
                }

                function an(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function sn() {
                    return !0
                }

                function on() {
                    return !1
                }

                function ln(e) {
                    function t(t, n, r, a, s) {
                        for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = s, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]);
                        return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? sn : on, this.isPropagationStopped = on, this
                    }
                    return a(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = sn)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = sn)
                        },
                        persist: function() {},
                        isPersistent: sn
                    }), t
                }
                var un, cn, dn, fn = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    pn = ln(fn),
                    mn = a({}, fn, {
                        view: 0,
                        detail: 0
                    }),
                    hn = ln(mn),
                    yn = a({}, mn, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: On,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== dn && (dn && "mousemove" === e.type ? (un = e.screenX - dn.screenX, cn = e.screenY - dn.screenY) : cn = un = 0, dn = e), un)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : cn
                        }
                    }),
                    gn = ln(yn),
                    bn = ln(a({}, yn, {
                        dataTransfer: 0
                    })),
                    vn = ln(a({}, mn, {
                        relatedTarget: 0
                    })),
                    kn = ln(a({}, fn, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    wn = a({}, fn, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    xn = ln(wn),
                    Sn = ln(a({}, fn, {
                        data: 0
                    })),
                    En = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    jn = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    zn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function Cn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = zn[e]) && !!t[e]
                }

                function On() {
                    return Cn
                }
                var _n = a({}, mn, {
                        key: function(e) {
                            if (e.key) {
                                var t = En[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = an(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? jn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: On,
                        charCode: function(e) {
                            return "keypress" === e.type ? an(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? an(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    Nn = ln(_n),
                    Pn = ln(a({}, yn, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    Tn = ln(a({}, mn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: On
                    })),
                    Ln = ln(a({}, fn, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    Mn = a({}, yn, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    Rn = ln(Mn),
                    Dn = [9, 13, 27, 32],
                    Fn = d && "CompositionEvent" in window,
                    An = null;
                d && "documentMode" in document && (An = document.documentMode);
                var In = d && "TextEvent" in window && !An,
                    Un = d && (!Fn || An && 8 < An && 11 >= An),
                    qn = String.fromCharCode(32),
                    Wn = !1;

                function Bn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Dn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Hn(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Vn = !1;
                var $n = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function Qn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!$n[e.type] : "textarea" === t
                }

                function Kn(e, t, n, r) {
                    Pe(r), 0 < (t = Fr(t, "onChange")).length && (n = new pn("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Yn = null,
                    Gn = null;

                function Xn(e) {
                    _r(e, 0)
                }

                function Jn(e) {
                    if (X(aa(e))) return e
                }

                function Zn(e, t) {
                    if ("change" === e) return t
                }
                var er = !1;
                if (d) {
                    var tr;
                    if (d) {
                        var nr = "oninput" in document;
                        if (!nr) {
                            var rr = document.createElement("div");
                            rr.setAttribute("oninput", "return;"), nr = "function" === typeof rr.oninput
                        }
                        tr = nr
                    } else tr = !1;
                    er = tr && (!document.documentMode || 9 < document.documentMode)
                }

                function ar() {
                    Yn && (Yn.detachEvent("onpropertychange", sr), Gn = Yn = null)
                }

                function sr(e) {
                    if ("value" === e.propertyName && Jn(Gn)) {
                        var t = [];
                        if (Kn(t, Gn, e, ze(e)), e = Xn, Fe) e(t);
                        else {
                            Fe = !0;
                            try {
                                Le(e, t)
                            } finally {
                                Fe = !1, Ie()
                            }
                        }
                    }
                }

                function or(e, t, n) {
                    "focusin" === e ? (ar(), Gn = n, (Yn = t).attachEvent("onpropertychange", sr)) : "focusout" === e && ar()
                }

                function lr(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Jn(Gn)
                }

                function ir(e, t) {
                    if ("click" === e) return Jn(t)
                }

                function ur(e, t) {
                    if ("input" === e || "change" === e) return Jn(t)
                }
                var cr = "function" === typeof Object.is ? Object.is : function(e, t) {
                        return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                    },
                    dr = Object.prototype.hasOwnProperty;

                function fr(e, t) {
                    if (cr(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++)
                        if (!dr.call(t, n[r]) || !cr(e[n[r]], t[n[r]])) return !1;
                    return !0
                }

                function pr(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function mr(e, t) {
                    var n, r = pr(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = pr(r)
                    }
                }

                function hr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? hr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function yr() {
                    for (var e = window, t = J(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        t = J((e = t.contentWindow).document)
                    }
                    return t
                }

                function gr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }
                var br = d && "documentMode" in document && 11 >= document.documentMode,
                    vr = null,
                    kr = null,
                    wr = null,
                    xr = !1;

                function Sr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    xr || null == vr || vr !== J(r) || ("selectionStart" in (r = vr) && gr(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, wr && fr(wr, r) || (wr = r, 0 < (r = Fr(kr, "onSelect")).length && (t = new pn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = vr)))
                }
                Rt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Rt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Rt(Mt, 2);
                for (var Er = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), jr = 0; jr < Er.length; jr++) Lt.set(Er[jr], 0);
                c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Cr = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));

                function Or(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, a, s, l, i, u) {
                            if (Ye.apply(this, arguments), He) {
                                if (!He) throw Error(o(198));
                                var c = Ve;
                                He = !1, Ve = null, $e || ($e = !0, Qe = c)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function _r(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var s = void 0;
                            if (t)
                                for (var o = r.length - 1; 0 <= o; o--) {
                                    var l = r[o],
                                        i = l.instance,
                                        u = l.currentTarget;
                                    if (l = l.listener, i !== s && a.isPropagationStopped()) break e;
                                    Or(a, l, u), s = i
                                } else
                                    for (o = 0; o < r.length; o++) {
                                        if (i = (l = r[o]).instance, u = l.currentTarget, l = l.listener, i !== s && a.isPropagationStopped()) break e;
                                        Or(a, l, u), s = i
                                    }
                        }
                    }
                    if ($e) throw e = Qe, $e = !1, Qe = null, e
                }

                function Nr(e, t) {
                    var n = oa(t),
                        r = e + "__bubble";
                    n.has(r) || (Mr(t, e, 2, !1), n.add(r))
                }
                var Pr = "_reactListening" + Math.random().toString(36).slice(2);

                function Tr(e) {
                    e[Pr] || (e[Pr] = !0, l.forEach((function(t) {
                        Cr.has(t) || Lr(t, !1, e, null), Lr(t, !0, e, null)
                    })))
                }

                function Lr(e, t, n, r) {
                    var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                        s = n;
                    if ("selectionchange" === e && 9 !== n.nodeType && (s = n.ownerDocument), null !== r && !t && Cr.has(e)) {
                        if ("scroll" !== e) return;
                        a |= 2, s = r
                    }
                    var o = oa(s),
                        l = e + "__" + (t ? "capture" : "bubble");
                    o.has(l) || (t && (a |= 4), Mr(s, e, a, t), o.add(l))
                }

                function Mr(e, t, n, r) {
                    var a = Lt.get(t);
                    switch (void 0 === a ? 2 : a) {
                        case 0:
                            a = Gt;
                            break;
                        case 1:
                            a = Xt;
                            break;
                        default:
                            a = Jt
                    }
                    n = a.bind(null, t, n, e), a = void 0, !qe || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: a
                    }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                        passive: a
                    }) : e.addEventListener(t, n, !1)
                }

                function Rr(e, t, n, r, a) {
                    var s = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var o = r.tag;
                        if (3 === o || 4 === o) {
                            var l = r.stateNode.containerInfo;
                            if (l === a || 8 === l.nodeType && l.parentNode === a) break;
                            if (4 === o)
                                for (o = r.return; null !== o;) {
                                    var i = o.tag;
                                    if ((3 === i || 4 === i) && ((i = o.stateNode.containerInfo) === a || 8 === i.nodeType && i.parentNode === a)) return;
                                    o = o.return
                                }
                            for (; null !== l;) {
                                if (null === (o = na(l))) return;
                                if (5 === (i = o.tag) || 6 === i) {
                                    r = s = o;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        r = r.return
                    }! function(e, t, n) {
                        if (Ae) return e(t, n);
                        Ae = !0;
                        try {
                            De(e, t, n)
                        } finally {
                            Ae = !1, Ie()
                        }
                    }((function() {
                        var r = s,
                            a = ze(n),
                            o = [];
                        e: {
                            var l = Tt.get(e);
                            if (void 0 !== l) {
                                var i = pn,
                                    u = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === an(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        i = Nn;
                                        break;
                                    case "focusin":
                                        u = "focus", i = vn;
                                        break;
                                    case "focusout":
                                        u = "blur", i = vn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        i = vn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        i = gn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        i = bn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        i = Tn;
                                        break;
                                    case Ot:
                                    case _t:
                                    case Nt:
                                        i = kn;
                                        break;
                                    case Pt:
                                        i = Ln;
                                        break;
                                    case "scroll":
                                        i = hn;
                                        break;
                                    case "wheel":
                                        i = Rn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        i = xn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        i = Pn
                                }
                                var c = 0 !== (4 & t),
                                    d = !c && "scroll" === e,
                                    f = c ? null !== l ? l + "Capture" : null : l;
                                c = [];
                                for (var p, m = r; null !== m;) {
                                    var h = (p = m).stateNode;
                                    if (5 === p.tag && null !== h && (p = h, null !== f && (null != (h = Ue(m, f)) && c.push(Dr(m, h, p)))), d) break;
                                    m = m.return
                                }
                                0 < c.length && (l = new i(l, u, null, n, a), o.push({
                                    event: l,
                                    listeners: c
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (i = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || 0 !== (16 & t) || !(u = n.relatedTarget || n.fromElement) || !na(u) && !u[ea]) && (i || l) && (l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window, i ? (i = r, null !== (u = (u = n.relatedTarget || n.toElement) ? na(u) : null) && (u !== (d = Ge(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (i = null, u = r), i !== u)) {
                                if (c = gn, h = "onMouseLeave", f = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Pn, h = "onPointerLeave", f = "onPointerEnter", m = "pointer"), d = null == i ? l : aa(i), p = null == u ? l : aa(u), (l = new c(h, m + "leave", i, n, a)).target = d, l.relatedTarget = p, h = null, na(a) === r && ((c = new c(f, m + "enter", u, n, a)).target = p, c.relatedTarget = d, h = c), d = h, i && u) e: {
                                    for (f = u, m = 0, p = c = i; p; p = Ar(p)) m++;
                                    for (p = 0, h = f; h; h = Ar(h)) p++;
                                    for (; 0 < m - p;) c = Ar(c),
                                    m--;
                                    for (; 0 < p - m;) f = Ar(f),
                                    p--;
                                    for (; m--;) {
                                        if (c === f || null !== f && c === f.alternate) break e;
                                        c = Ar(c), f = Ar(f)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== i && Ir(o, l, i, c, !1), null !== u && null !== d && Ir(o, d, u, c, !0)
                            }
                            if ("select" === (i = (l = r ? aa(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === i && "file" === l.type) var y = Zn;
                            else if (Qn(l))
                                if (er) y = ur;
                                else {
                                    y = lr;
                                    var g = or
                                }
                            else(i = l.nodeName) && "input" === i.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (y = ir);
                            switch (y && (y = y(e, r)) ? Kn(o, y, n, a) : (g && g(e, l, r), "focusout" === e && (g = l._wrapperState) && g.controlled && "number" === l.type && ae(l, "number", l.value)), g = r ? aa(r) : window, e) {
                                case "focusin":
                                    (Qn(g) || "true" === g.contentEditable) && (vr = g, kr = r, wr = null);
                                    break;
                                case "focusout":
                                    wr = kr = vr = null;
                                    break;
                                case "mousedown":
                                    xr = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    xr = !1, Sr(o, n, a);
                                    break;
                                case "selectionchange":
                                    if (br) break;
                                case "keydown":
                                case "keyup":
                                    Sr(o, n, a)
                            }
                            var b;
                            if (Fn) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var v = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        v = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        v = "onCompositionUpdate";
                                        break e
                                }
                                v = void 0
                            }
                            else Vn ? Bn(e, n) && (v = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (v = "onCompositionStart");
                            v && (Un && "ko" !== n.locale && (Vn || "onCompositionStart" !== v ? "onCompositionEnd" === v && Vn && (b = rn()) : (tn = "value" in (en = a) ? en.value : en.textContent, Vn = !0)), 0 < (g = Fr(r, v)).length && (v = new Sn(v, e, null, n, a), o.push({
                                event: v,
                                listeners: g
                            }), b ? v.data = b : null !== (b = Hn(n)) && (v.data = b))), (b = In ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Hn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Wn = !0, qn);
                                    case "textInput":
                                        return (e = t.data) === qn && Wn ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Vn) return "compositionend" === e || !Fn && Bn(e, t) ? (e = rn(), nn = tn = en = null, Vn = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return Un && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = Fr(r, "onBeforeInput")).length && (a = new Sn("onBeforeInput", "beforeinput", null, n, a), o.push({
                                event: a,
                                listeners: r
                            }), a.data = b))
                        }
                        _r(o, t)
                    }))
                }

                function Dr(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Fr(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var a = e,
                            s = a.stateNode;
                        5 === a.tag && null !== s && (a = s, null != (s = Ue(e, n)) && r.unshift(Dr(e, s, a)), null != (s = Ue(e, t)) && r.push(Dr(e, s, a))), e = e.return
                    }
                    return r
                }

                function Ar(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Ir(e, t, n, r, a) {
                    for (var s = t._reactName, o = []; null !== n && n !== r;) {
                        var l = n,
                            i = l.alternate,
                            u = l.stateNode;
                        if (null !== i && i === r) break;
                        5 === l.tag && null !== u && (l = u, a ? null != (i = Ue(n, s)) && o.unshift(Dr(n, i, l)) : a || null != (i = Ue(n, s)) && o.push(Dr(n, i, l))), n = n.return
                    }
                    0 !== o.length && e.push({
                        event: t,
                        listeners: o
                    })
                }

                function Ur() {}
                var qr = null,
                    Wr = null;

                function Br(e, t) {
                    switch (e) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            return !!t.autoFocus
                    }
                    return !1
                }

                function Hr(e, t) {
                    return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var Vr = "function" === typeof setTimeout ? setTimeout : void 0,
                    $r = "function" === typeof clearTimeout ? clearTimeout : void 0;

                function Qr(e) {
                    1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = ""))
                }

                function Kr(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break
                    }
                    return e
                }

                function Yr(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var Gr = 0;
                var Xr = Math.random().toString(36).slice(2),
                    Jr = "__reactFiber$" + Xr,
                    Zr = "__reactProps$" + Xr,
                    ea = "__reactContainer$" + Xr,
                    ta = "__reactEvents$" + Xr;

                function na(e) {
                    var t = e[Jr];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[ea] || n[Jr]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = Yr(e); null !== e;) {
                                    if (n = e[Jr]) return n;
                                    e = Yr(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function ra(e) {
                    return !(e = e[Jr] || e[ea]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function aa(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(o(33))
                }

                function sa(e) {
                    return e[Zr] || null
                }

                function oa(e) {
                    var t = e[ta];
                    return void 0 === t && (t = e[ta] = new Set), t
                }
                var la = [],
                    ia = -1;

                function ua(e) {
                    return {
                        current: e
                    }
                }

                function ca(e) {
                    0 > ia || (e.current = la[ia], la[ia] = null, ia--)
                }

                function da(e, t) {
                    ia++, la[ia] = e.current, e.current = t
                }
                var fa = {},
                    pa = ua(fa),
                    ma = ua(!1),
                    ha = fa;

                function ya(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return fa;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var a, s = {};
                    for (a in n) s[a] = t[a];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s
                }

                function ga(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function ba() {
                    ca(ma), ca(pa)
                }

                function va(e, t, n) {
                    if (pa.current !== fa) throw Error(o(168));
                    da(pa, t), da(ma, n)
                }

                function ka(e, t, n) {
                    var r = e.stateNode;
                    if (e = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var s in r = r.getChildContext())
                        if (!(s in e)) throw Error(o(108, Q(t) || "Unknown", s));
                    return a({}, n, r)
                }

                function wa(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || fa, ha = pa.current, da(pa, e), da(ma, ma.current), !0
                }

                function xa(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(o(169));
                    n ? (e = ka(e, t, ha), r.__reactInternalMemoizedMergedChildContext = e, ca(ma), ca(pa), da(pa, e)) : ca(ma), da(ma, n)
                }
                var Sa = null,
                    Ea = null,
                    ja = s.unstable_runWithPriority,
                    za = s.unstable_scheduleCallback,
                    Ca = s.unstable_cancelCallback,
                    Oa = s.unstable_shouldYield,
                    _a = s.unstable_requestPaint,
                    Na = s.unstable_now,
                    Pa = s.unstable_getCurrentPriorityLevel,
                    Ta = s.unstable_ImmediatePriority,
                    La = s.unstable_UserBlockingPriority,
                    Ma = s.unstable_NormalPriority,
                    Ra = s.unstable_LowPriority,
                    Da = s.unstable_IdlePriority,
                    Fa = {},
                    Aa = void 0 !== _a ? _a : function() {},
                    Ia = null,
                    Ua = null,
                    qa = !1,
                    Wa = Na(),
                    Ba = 1e4 > Wa ? Na : function() {
                        return Na() - Wa
                    };

                function Ha() {
                    switch (Pa()) {
                        case Ta:
                            return 99;
                        case La:
                            return 98;
                        case Ma:
                            return 97;
                        case Ra:
                            return 96;
                        case Da:
                            return 95;
                        default:
                            throw Error(o(332))
                    }
                }

                function Va(e) {
                    switch (e) {
                        case 99:
                            return Ta;
                        case 98:
                            return La;
                        case 97:
                            return Ma;
                        case 96:
                            return Ra;
                        case 95:
                            return Da;
                        default:
                            throw Error(o(332))
                    }
                }

                function $a(e, t) {
                    return e = Va(e), ja(e, t)
                }

                function Qa(e, t, n) {
                    return e = Va(e), za(e, t, n)
                }

                function Ka() {
                    if (null !== Ua) {
                        var e = Ua;
                        Ua = null, Ca(e)
                    }
                    Ya()
                }

                function Ya() {
                    if (!qa && null !== Ia) {
                        qa = !0;
                        var e = 0;
                        try {
                            var t = Ia;
                            $a(99, (function() {
                                for (; e < t.length; e++) {
                                    var n = t[e];
                                    do {
                                        n = n(!0)
                                    } while (null !== n)
                                }
                            })), Ia = null
                        } catch (n) {
                            throw null !== Ia && (Ia = Ia.slice(e + 1)), za(Ta, Ka), n
                        } finally {
                            qa = !1
                        }
                    }
                }
                var Ga = w.ReactCurrentBatchConfig;

                function Xa(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = a({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }
                var Ja = ua(null),
                    Za = null,
                    es = null,
                    ts = null;

                function ns() {
                    ts = es = Za = null
                }

                function rs(e) {
                    var t = Ja.current;
                    ca(Ja), e.type._context._currentValue = t
                }

                function as(e, t) {
                    for (; null !== e;) {
                        var n = e.alternate;
                        if ((e.childLanes & t) === t) {
                            if (null === n || (n.childLanes & t) === t) break;
                            n.childLanes |= t
                        } else e.childLanes |= t, null !== n && (n.childLanes |= t);
                        e = e.return
                    }
                }

                function ss(e, t) {
                    Za = e, ts = es = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (Fo = !0), e.firstContext = null)
                }

                function os(e, t) {
                    if (ts !== e && !1 !== t && 0 !== t)
                        if ("number" === typeof t && 1073741823 !== t || (ts = e, t = 1073741823), t = {
                                context: e,
                                observedBits: t,
                                next: null
                            }, null === es) {
                            if (null === Za) throw Error(o(308));
                            es = t, Za.dependencies = {
                                lanes: 0,
                                firstContext: t,
                                responders: null
                            }
                        } else es = es.next = t;
                    return e._currentValue
                }
                var ls = !1;

                function is(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null
                        },
                        effects: null
                    }
                }

                function us(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function cs(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function ds(e, t) {
                    if (null !== (e = e.updateQueue)) {
                        var n = (e = e.shared).pending;
                        null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                    }
                }

                function fs(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            s = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var o = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === s ? a = s = o : s = s.next = o, n = n.next
                            } while (null !== n);
                            null === s ? a = s = t : s = s.next = t
                        } else a = s = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: a,
                            lastBaseUpdate: s,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function ps(e, t, n, r) {
                    var s = e.updateQueue;
                    ls = !1;
                    var o = s.firstBaseUpdate,
                        l = s.lastBaseUpdate,
                        i = s.shared.pending;
                    if (null !== i) {
                        s.shared.pending = null;
                        var u = i,
                            c = u.next;
                        u.next = null, null === l ? o = c : l.next = c, l = u;
                        var d = e.alternate;
                        if (null !== d) {
                            var f = (d = d.updateQueue).lastBaseUpdate;
                            f !== l && (null === f ? d.firstBaseUpdate = c : f.next = c, d.lastBaseUpdate = u)
                        }
                    }
                    if (null !== o) {
                        for (f = s.baseState, l = 0, d = c = u = null;;) {
                            i = o.lane;
                            var p = o.eventTime;
                            if ((r & i) === i) {
                                null !== d && (d = d.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: o.tag,
                                    payload: o.payload,
                                    callback: o.callback,
                                    next: null
                                });
                                e: {
                                    var m = e,
                                        h = o;
                                    switch (i = t, p = n, h.tag) {
                                        case 1:
                                            if ("function" === typeof(m = h.payload)) {
                                                f = m.call(p, f, i);
                                                break e
                                            }
                                            f = m;
                                            break e;
                                        case 3:
                                            m.flags = -4097 & m.flags | 64;
                                        case 0:
                                            if (null === (i = "function" === typeof(m = h.payload) ? m.call(p, f, i) : m) || void 0 === i) break e;
                                            f = a({}, f, i);
                                            break e;
                                        case 2:
                                            ls = !0
                                    }
                                }
                                null !== o.callback && (e.flags |= 32, null === (i = s.effects) ? s.effects = [o] : i.push(o))
                            } else p = {
                                eventTime: p,
                                lane: i,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            }, null === d ? (c = d = p, u = f) : d = d.next = p, l |= i;
                            if (null === (o = o.next)) {
                                if (null === (i = s.shared.pending)) break;
                                o = i.next, i.next = null, s.lastBaseUpdate = i, s.shared.pending = null
                            }
                        }
                        null === d && (u = f), s.baseState = u, s.firstBaseUpdate = c, s.lastBaseUpdate = d, ql |= l, e.lanes = l, e.memoizedState = f
                    }
                }

                function ms(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                a = r.callback;
                            if (null !== a) {
                                if (r.callback = null, r = n, "function" !== typeof a) throw Error(o(191, a));
                                a.call(r)
                            }
                        }
                }
                var hs = (new r.Component).refs;

                function ys(e, t, n, r) {
                    n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : a({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var gs = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && Ge(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = fi(),
                            a = pi(e),
                            s = cs(r, a);
                        s.payload = t, void 0 !== n && null !== n && (s.callback = n), ds(e, s), mi(e, a, r)
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = fi(),
                            a = pi(e),
                            s = cs(r, a);
                        s.tag = 1, s.payload = t, void 0 !== n && null !== n && (s.callback = n), ds(e, s), mi(e, a, r)
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = fi(),
                            r = pi(e),
                            a = cs(n, r);
                        a.tag = 2, void 0 !== t && null !== t && (a.callback = t), ds(e, a), mi(e, r, n)
                    }
                };

                function bs(e, t, n, r, a, s, o) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, s, o) : !t.prototype || !t.prototype.isPureReactComponent || (!fr(n, r) || !fr(a, s))
                }

                function vs(e, t, n) {
                    var r = !1,
                        a = fa,
                        s = t.contextType;
                    return "object" === typeof s && null !== s ? s = os(s) : (a = ga(t) ? ha : pa.current, s = (r = null !== (r = t.contextTypes) && void 0 !== r) ? ya(e, a) : fa), t = new t(n, s), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = gs, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = s), t
                }

                function ks(e, t, n, r) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && gs.enqueueReplaceState(t, t.state, null)
                }

                function ws(e, t, n, r) {
                    var a = e.stateNode;
                    a.props = n, a.state = e.memoizedState, a.refs = hs, is(e);
                    var s = t.contextType;
                    "object" === typeof s && null !== s ? a.context = os(s) : (s = ga(t) ? ha : pa.current, a.context = ya(e, s)), ps(e, n, a, r), a.state = e.memoizedState, "function" === typeof(s = t.getDerivedStateFromProps) && (ys(e, t, s, n), a.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && gs.enqueueReplaceState(a, a.state, null), ps(e, n, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4)
                }
                var xs = Array.isArray;

                function Ss(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(o(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(o(147, e));
                            var a = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === a ? t.ref : (t = function(e) {
                                var t = r.refs;
                                t === hs && (t = r.refs = {}), null === e ? delete t[a] : t[a] = e
                            }, t._stringRef = a, t)
                        }
                        if ("string" !== typeof e) throw Error(o(284));
                        if (!n._owner) throw Error(o(290, e))
                    }
                    return e
                }

                function Es(e, t) {
                    if ("textarea" !== e.type) throw Error(o(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
                }

                function js(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.lastEffect;
                            null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.flags = 8
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function a(e, t) {
                        return (e = $i(e, t)).index = 0, e.sibling = null, e
                    }

                    function s(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags = 2, n) : r : (t.flags = 2, n) : n
                    }

                    function l(t) {
                        return e && null === t.alternate && (t.flags = 2), t
                    }

                    function i(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = Gi(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function u(e, t, n, r) {
                        return null !== t && t.elementType === n.type ? ((r = a(t, n.props)).ref = Ss(e, t, n), r.return = e, r) : ((r = Qi(n.type, n.key, n.props, null, e.mode, r)).ref = Ss(e, t, n), r.return = e, r)
                    }

                    function c(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Xi(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                    }

                    function d(e, t, n, r, s) {
                        return null === t || 7 !== t.tag ? ((t = Ki(n, e.mode, r, s)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function f(e, t, n) {
                        if ("string" === typeof t || "number" === typeof t) return (t = Gi("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case x:
                                    return (n = Qi(t.type, t.key, t.props, null, e.mode, n)).ref = Ss(e, null, t), n.return = e, n;
                                case S:
                                    return (t = Xi(t, e.mode, n)).return = e, t
                            }
                            if (xs(t) || W(t)) return (t = Ki(t, e.mode, n, null)).return = e, t;
                            Es(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if ("string" === typeof n || "number" === typeof n) return null !== a ? null : i(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case x:
                                    return n.key === a ? n.type === E ? d(e, t, n.props.children, r, a) : u(e, t, n, r) : null;
                                case S:
                                    return n.key === a ? c(e, t, n, r) : null
                            }
                            if (xs(n) || W(n)) return null !== a ? null : d(e, t, n, r, null);
                            Es(e, n)
                        }
                        return null
                    }

                    function m(e, t, n, r, a) {
                        if ("string" === typeof r || "number" === typeof r) return i(t, e = e.get(n) || null, "" + r, a);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case x:
                                    return e = e.get(null === r.key ? n : r.key) || null, r.type === E ? d(t, e, r.props.children, a, r.key) : u(t, e, r, a);
                                case S:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a)
                            }
                            if (xs(r) || W(r)) return d(t, e = e.get(n) || null, r, a, null);
                            Es(t, r)
                        }
                        return null
                    }

                    function h(a, o, l, i) {
                        for (var u = null, c = null, d = o, h = o = 0, y = null; null !== d && h < l.length; h++) {
                            d.index > h ? (y = d, d = null) : y = d.sibling;
                            var g = p(a, d, l[h], i);
                            if (null === g) {
                                null === d && (d = y);
                                break
                            }
                            e && d && null === g.alternate && t(a, d), o = s(g, o, h), null === c ? u = g : c.sibling = g, c = g, d = y
                        }
                        if (h === l.length) return n(a, d), u;
                        if (null === d) {
                            for (; h < l.length; h++) null !== (d = f(a, l[h], i)) && (o = s(d, o, h), null === c ? u = d : c.sibling = d, c = d);
                            return u
                        }
                        for (d = r(a, d); h < l.length; h++) null !== (y = m(d, a, h, l[h], i)) && (e && null !== y.alternate && d.delete(null === y.key ? h : y.key), o = s(y, o, h), null === c ? u = y : c.sibling = y, c = y);
                        return e && d.forEach((function(e) {
                            return t(a, e)
                        })), u
                    }

                    function y(a, l, i, u) {
                        var c = W(i);
                        if ("function" !== typeof c) throw Error(o(150));
                        if (null == (i = c.call(i))) throw Error(o(151));
                        for (var d = c = null, h = l, y = l = 0, g = null, b = i.next(); null !== h && !b.done; y++, b = i.next()) {
                            h.index > y ? (g = h, h = null) : g = h.sibling;
                            var v = p(a, h, b.value, u);
                            if (null === v) {
                                null === h && (h = g);
                                break
                            }
                            e && h && null === v.alternate && t(a, h), l = s(v, l, y), null === d ? c = v : d.sibling = v, d = v, h = g
                        }
                        if (b.done) return n(a, h), c;
                        if (null === h) {
                            for (; !b.done; y++, b = i.next()) null !== (b = f(a, b.value, u)) && (l = s(b, l, y), null === d ? c = b : d.sibling = b, d = b);
                            return c
                        }
                        for (h = r(a, h); !b.done; y++, b = i.next()) null !== (b = m(h, a, y, b.value, u)) && (e && null !== b.alternate && h.delete(null === b.key ? y : b.key), l = s(b, l, y), null === d ? c = b : d.sibling = b, d = b);
                        return e && h.forEach((function(e) {
                            return t(a, e)
                        })), c
                    }
                    return function(e, r, s, i) {
                        var u = "object" === typeof s && null !== s && s.type === E && null === s.key;
                        u && (s = s.props.children);
                        var c = "object" === typeof s && null !== s;
                        if (c) switch (s.$$typeof) {
                            case x:
                                e: {
                                    for (c = s.key, u = r; null !== u;) {
                                        if (u.key === c) {
                                            if (7 === u.tag) {
                                                if (s.type === E) {
                                                    n(e, u.sibling), (r = a(u, s.props.children)).return = e, e = r;
                                                    break e
                                                }
                                            } else if (u.elementType === s.type) {
                                                n(e, u.sibling), (r = a(u, s.props)).ref = Ss(e, u, s), r.return = e, e = r;
                                                break e
                                            }
                                            n(e, u);
                                            break
                                        }
                                        t(e, u), u = u.sibling
                                    }
                                    s.type === E ? ((r = Ki(s.props.children, e.mode, i, s.key)).return = e, e = r) : ((i = Qi(s.type, s.key, s.props, null, e.mode, i)).ref = Ss(e, r, s), i.return = e, e = i)
                                }
                                return l(e);
                            case S:
                                e: {
                                    for (u = s.key; null !== r;) {
                                        if (r.key === u) {
                                            if (4 === r.tag && r.stateNode.containerInfo === s.containerInfo && r.stateNode.implementation === s.implementation) {
                                                n(e, r.sibling), (r = a(r, s.children || [])).return = e, e = r;
                                                break e
                                            }
                                            n(e, r);
                                            break
                                        }
                                        t(e, r), r = r.sibling
                                    }(r = Xi(s, e.mode, i)).return = e,
                                    e = r
                                }
                                return l(e)
                        }
                        if ("string" === typeof s || "number" === typeof s) return s = "" + s, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = a(r, s)).return = e, e = r) : (n(e, r), (r = Gi(s, e.mode, i)).return = e, e = r), l(e);
                        if (xs(s)) return h(e, r, s, i);
                        if (W(s)) return y(e, r, s, i);
                        if (c && Es(e, s), "undefined" === typeof s && !u) switch (e.tag) {
                            case 1:
                            case 22:
                            case 0:
                            case 11:
                            case 15:
                                throw Error(o(152, Q(e.type) || "Component"))
                        }
                        return n(e, r)
                    }
                }
                var zs = js(!0),
                    Cs = js(!1),
                    Os = {},
                    _s = ua(Os),
                    Ns = ua(Os),
                    Ps = ua(Os);

                function Ts(e) {
                    if (e === Os) throw Error(o(174));
                    return e
                }

                function Ls(e, t) {
                    switch (da(Ps, t), da(Ns, e), da(_s, Os), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : me(null, "");
                            break;
                        default:
                            t = me(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    ca(_s), da(_s, t)
                }

                function Ms() {
                    ca(_s), ca(Ns), ca(Ps)
                }

                function Rs(e) {
                    Ts(Ps.current);
                    var t = Ts(_s.current),
                        n = me(t, e.type);
                    t !== n && (da(Ns, e), da(_s, n))
                }

                function Ds(e) {
                    Ns.current === e && (ca(_s), ca(Ns))
                }
                var Fs = ua(0);

                function As(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 !== (64 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var Is = null,
                    Us = null,
                    qs = !1;

                function Ws(e, t) {
                    var n = Hi(5, null, null, 0);
                    n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
                }

                function Bs(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
                        default:
                            return !1
                    }
                }

                function Hs(e) {
                    if (qs) {
                        var t = Us;
                        if (t) {
                            var n = t;
                            if (!Bs(e, t)) {
                                if (!(t = Kr(n.nextSibling)) || !Bs(e, t)) return e.flags = -1025 & e.flags | 2, qs = !1, void(Is = e);
                                Ws(Is, n)
                            }
                            Is = e, Us = Kr(t.firstChild)
                        } else e.flags = -1025 & e.flags | 2, qs = !1, Is = e
                    }
                }

                function Vs(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    Is = e
                }

                function $s(e) {
                    if (e !== Is) return !1;
                    if (!qs) return Vs(e), qs = !0, !1;
                    var t = e.type;
                    if (5 !== e.tag || "head" !== t && "body" !== t && !Hr(t, e.memoizedProps))
                        for (t = Us; t;) Ws(e, t), t = Kr(t.nextSibling);
                    if (Vs(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            Us = Kr(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            Us = null
                        }
                    } else Us = Is ? Kr(e.stateNode.nextSibling) : null;
                    return !0
                }

                function Qs() {
                    Us = Is = null, qs = !1
                }
                var Ks = [];

                function Ys() {
                    for (var e = 0; e < Ks.length; e++) Ks[e]._workInProgressVersionPrimary = null;
                    Ks.length = 0
                }
                var Gs = w.ReactCurrentDispatcher,
                    Xs = w.ReactCurrentBatchConfig,
                    Js = 0,
                    Zs = null,
                    eo = null,
                    to = null,
                    no = !1,
                    ro = !1;

                function ao() {
                    throw Error(o(321))
                }

                function so(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!cr(e[n], t[n])) return !1;
                    return !0
                }

                function oo(e, t, n, r, a, s) {
                    if (Js = s, Zs = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Gs.current = null === e || null === e.memoizedState ? Lo : Mo, e = n(r, a), ro) {
                        s = 0;
                        do {
                            if (ro = !1, !(25 > s)) throw Error(o(301));
                            s += 1, to = eo = null, t.updateQueue = null, Gs.current = Ro, e = n(r, a)
                        } while (ro)
                    }
                    if (Gs.current = To, t = null !== eo && null !== eo.next, Js = 0, to = eo = Zs = null, no = !1, t) throw Error(o(300));
                    return e
                }

                function lo() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === to ? Zs.memoizedState = to = e : to = to.next = e, to
                }

                function io() {
                    if (null === eo) {
                        var e = Zs.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = eo.next;
                    var t = null === to ? Zs.memoizedState : to.next;
                    if (null !== t) to = t, eo = e;
                    else {
                        if (null === e) throw Error(o(310));
                        e = {
                            memoizedState: (eo = e).memoizedState,
                            baseState: eo.baseState,
                            baseQueue: eo.baseQueue,
                            queue: eo.queue,
                            next: null
                        }, null === to ? Zs.memoizedState = to = e : to = to.next = e
                    }
                    return to
                }

                function uo(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function co(e) {
                    var t = io(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = eo,
                        a = r.baseQueue,
                        s = n.pending;
                    if (null !== s) {
                        if (null !== a) {
                            var l = a.next;
                            a.next = s.next, s.next = l
                        }
                        r.baseQueue = a = s, n.pending = null
                    }
                    if (null !== a) {
                        a = a.next, r = r.baseState;
                        var i = l = s = null,
                            u = a;
                        do {
                            var c = u.lane;
                            if ((Js & c) === c) null !== i && (i = i.next = {
                                lane: 0,
                                action: u.action,
                                eagerReducer: u.eagerReducer,
                                eagerState: u.eagerState,
                                next: null
                            }), r = u.eagerReducer === e ? u.eagerState : e(r, u.action);
                            else {
                                var d = {
                                    lane: c,
                                    action: u.action,
                                    eagerReducer: u.eagerReducer,
                                    eagerState: u.eagerState,
                                    next: null
                                };
                                null === i ? (l = i = d, s = r) : i = i.next = d, Zs.lanes |= c, ql |= c
                            }
                            u = u.next
                        } while (null !== u && u !== a);
                        null === i ? s = r : i.next = l, cr(r, t.memoizedState) || (Fo = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = i, n.lastRenderedState = r
                    }
                    return [t.memoizedState, n.dispatch]
                }

                function fo(e) {
                    var t = io(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        s = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var l = a = a.next;
                        do {
                            s = e(s, l.action), l = l.next
                        } while (l !== a);
                        cr(s, t.memoizedState) || (Fo = !0), t.memoizedState = s, null === t.baseQueue && (t.baseState = s), n.lastRenderedState = s
                    }
                    return [s, r]
                }

                function po(e, t, n) {
                    var r = t._getVersion;
                    r = r(t._source);
                    var a = t._workInProgressVersionPrimary;
                    if (null !== a ? e = a === r : (e = e.mutableReadLanes, (e = (Js & e) === e) && (t._workInProgressVersionPrimary = r, Ks.push(t))), e) return n(t._source);
                    throw Ks.push(t), Error(o(350))
                }

                function mo(e, t, n, r) {
                    var a = Ll;
                    if (null === a) throw Error(o(349));
                    var s = t._getVersion,
                        l = s(t._source),
                        i = Gs.current,
                        u = i.useState((function() {
                            return po(a, t, n)
                        })),
                        c = u[1],
                        d = u[0];
                    u = to;
                    var f = e.memoizedState,
                        p = f.refs,
                        m = p.getSnapshot,
                        h = f.source;
                    f = f.subscribe;
                    var y = Zs;
                    return e.memoizedState = {
                        refs: p,
                        source: t,
                        subscribe: r
                    }, i.useEffect((function() {
                        p.getSnapshot = n, p.setSnapshot = c;
                        var e = s(t._source);
                        if (!cr(l, e)) {
                            e = n(t._source), cr(d, e) || (c(e), e = pi(y), a.mutableReadLanes |= e & a.pendingLanes), e = a.mutableReadLanes, a.entangledLanes |= e;
                            for (var r = a.entanglements, o = e; 0 < o;) {
                                var i = 31 - Ht(o),
                                    u = 1 << i;
                                r[i] |= e, o &= ~u
                            }
                        }
                    }), [n, t, r]), i.useEffect((function() {
                        return r(t._source, (function() {
                            var e = p.getSnapshot,
                                n = p.setSnapshot;
                            try {
                                n(e(t._source));
                                var r = pi(y);
                                a.mutableReadLanes |= r & a.pendingLanes
                            } catch (s) {
                                n((function() {
                                    throw s
                                }))
                            }
                        }))
                    }), [t, r]), cr(m, n) && cr(h, t) && cr(f, r) || ((e = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: uo,
                        lastRenderedState: d
                    }).dispatch = c = Po.bind(null, Zs, e), u.queue = e, u.baseQueue = null, d = po(a, t, n), u.memoizedState = u.baseState = d), d
                }

                function ho(e, t, n) {
                    return mo(io(), e, t, n)
                }

                function yo(e) {
                    var t = lo();
                    return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: uo,
                        lastRenderedState: e
                    }).dispatch = Po.bind(null, Zs, e), [t.memoizedState, e]
                }

                function go(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = Zs.updateQueue) ? (t = {
                        lastEffect: null
                    }, Zs.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function bo(e) {
                    return e = {
                        current: e
                    }, lo().memoizedState = e
                }

                function vo() {
                    return io().memoizedState
                }

                function ko(e, t, n, r) {
                    var a = lo();
                    Zs.flags |= e, a.memoizedState = go(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function wo(e, t, n, r) {
                    var a = io();
                    r = void 0 === r ? null : r;
                    var s = void 0;
                    if (null !== eo) {
                        var o = eo.memoizedState;
                        if (s = o.destroy, null !== r && so(r, o.deps)) return void go(t, n, s, r)
                    }
                    Zs.flags |= e, a.memoizedState = go(1 | t, n, s, r)
                }

                function xo(e, t) {
                    return ko(516, 4, e, t)
                }

                function So(e, t) {
                    return wo(516, 4, e, t)
                }

                function Eo(e, t) {
                    return wo(4, 2, e, t)
                }

                function jo(e, t) {
                    return "function" === typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function zo(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, wo(4, 2, jo.bind(null, t, e), n)
                }

                function Co() {}

                function Oo(e, t) {
                    var n = io();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && so(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function _o(e, t) {
                    var n = io();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && so(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function No(e, t) {
                    var n = Ha();
                    $a(98 > n ? 98 : n, (function() {
                        e(!0)
                    })), $a(97 < n ? 97 : n, (function() {
                        var n = Xs.transition;
                        Xs.transition = 1;
                        try {
                            e(!1), t()
                        } finally {
                            Xs.transition = n
                        }
                    }))
                }

                function Po(e, t, n) {
                    var r = fi(),
                        a = pi(e),
                        s = {
                            lane: a,
                            action: n,
                            eagerReducer: null,
                            eagerState: null,
                            next: null
                        },
                        o = t.pending;
                    if (null === o ? s.next = s : (s.next = o.next, o.next = s), t.pending = s, o = e.alternate, e === Zs || null !== o && o === Zs) ro = no = !0;
                    else {
                        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try {
                            var l = t.lastRenderedState,
                                i = o(l, n);
                            if (s.eagerReducer = o, s.eagerState = i, cr(i, l)) return
                        } catch (u) {}
                        mi(e, a, r)
                    }
                }
                var To = {
                        readContext: os,
                        useCallback: ao,
                        useContext: ao,
                        useEffect: ao,
                        useImperativeHandle: ao,
                        useLayoutEffect: ao,
                        useMemo: ao,
                        useReducer: ao,
                        useRef: ao,
                        useState: ao,
                        useDebugValue: ao,
                        useDeferredValue: ao,
                        useTransition: ao,
                        useMutableSource: ao,
                        useOpaqueIdentifier: ao,
                        unstable_isNewReconciler: !1
                    },
                    Lo = {
                        readContext: os,
                        useCallback: function(e, t) {
                            return lo().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: os,
                        useEffect: xo,
                        useImperativeHandle: function(e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, ko(4, 2, jo.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return ko(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = lo();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = lo();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                                pending: null,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }).dispatch = Po.bind(null, Zs, e), [r.memoizedState, e]
                        },
                        useRef: bo,
                        useState: yo,
                        useDebugValue: Co,
                        useDeferredValue: function(e) {
                            var t = yo(e),
                                n = t[0],
                                r = t[1];
                            return xo((function() {
                                var t = Xs.transition;
                                Xs.transition = 1;
                                try {
                                    r(e)
                                } finally {
                                    Xs.transition = t
                                }
                            }), [e]), n
                        },
                        useTransition: function() {
                            var e = yo(!1),
                                t = e[0];
                            return bo(e = No.bind(null, e[1])), [e, t]
                        },
                        useMutableSource: function(e, t, n) {
                            var r = lo();
                            return r.memoizedState = {
                                refs: {
                                    getSnapshot: t,
                                    setSnapshot: null
                                },
                                source: e,
                                subscribe: n
                            }, mo(r, e, t, n)
                        },
                        useOpaqueIdentifier: function() {
                            if (qs) {
                                var e = !1,
                                    t = function(e) {
                                        return {
                                            $$typeof: R,
                                            toString: e,
                                            valueOf: e
                                        }
                                    }((function() {
                                        throw e || (e = !0, n("r:" + (Gr++).toString(36))), Error(o(355))
                                    })),
                                    n = yo(t)[1];
                                return 0 === (2 & Zs.mode) && (Zs.flags |= 516, go(5, (function() {
                                    n("r:" + (Gr++).toString(36))
                                }), void 0, null)), t
                            }
                            return yo(t = "r:" + (Gr++).toString(36)), t
                        },
                        unstable_isNewReconciler: !1
                    },
                    Mo = {
                        readContext: os,
                        useCallback: Oo,
                        useContext: os,
                        useEffect: So,
                        useImperativeHandle: zo,
                        useLayoutEffect: Eo,
                        useMemo: _o,
                        useReducer: co,
                        useRef: vo,
                        useState: function() {
                            return co(uo)
                        },
                        useDebugValue: Co,
                        useDeferredValue: function(e) {
                            var t = co(uo),
                                n = t[0],
                                r = t[1];
                            return So((function() {
                                var t = Xs.transition;
                                Xs.transition = 1;
                                try {
                                    r(e)
                                } finally {
                                    Xs.transition = t
                                }
                            }), [e]), n
                        },
                        useTransition: function() {
                            var e = co(uo)[0];
                            return [vo().current, e]
                        },
                        useMutableSource: ho,
                        useOpaqueIdentifier: function() {
                            return co(uo)[0]
                        },
                        unstable_isNewReconciler: !1
                    },
                    Ro = {
                        readContext: os,
                        useCallback: Oo,
                        useContext: os,
                        useEffect: So,
                        useImperativeHandle: zo,
                        useLayoutEffect: Eo,
                        useMemo: _o,
                        useReducer: fo,
                        useRef: vo,
                        useState: function() {
                            return fo(uo)
                        },
                        useDebugValue: Co,
                        useDeferredValue: function(e) {
                            var t = fo(uo),
                                n = t[0],
                                r = t[1];
                            return So((function() {
                                var t = Xs.transition;
                                Xs.transition = 1;
                                try {
                                    r(e)
                                } finally {
                                    Xs.transition = t
                                }
                            }), [e]), n
                        },
                        useTransition: function() {
                            var e = fo(uo)[0];
                            return [vo().current, e]
                        },
                        useMutableSource: ho,
                        useOpaqueIdentifier: function() {
                            return fo(uo)[0]
                        },
                        unstable_isNewReconciler: !1
                    },
                    Do = w.ReactCurrentOwner,
                    Fo = !1;

                function Ao(e, t, n, r) {
                    t.child = null === e ? Cs(t, null, n, r) : zs(t, e.child, n, r)
                }

                function Io(e, t, n, r, a) {
                    n = n.render;
                    var s = t.ref;
                    return ss(t, a), r = oo(e, t, n, r, s, a), null === e || Fo ? (t.flags |= 1, Ao(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~a, sl(e, t, a))
                }

                function Uo(e, t, n, r, a, s) {
                    if (null === e) {
                        var o = n.type;
                        return "function" !== typeof o || Vi(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Qi(n.type, null, r, t, t.mode, s)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, qo(e, t, o, r, a, s))
                    }
                    return o = e.child, 0 === (a & s) && (a = o.memoizedProps, (n = null !== (n = n.compare) ? n : fr)(a, r) && e.ref === t.ref) ? sl(e, t, s) : (t.flags |= 1, (e = $i(o, r)).ref = t.ref, e.return = t, t.child = e)
                }

                function qo(e, t, n, r, a, s) {
                    if (null !== e && fr(e.memoizedProps, r) && e.ref === t.ref) {
                        if (Fo = !1, 0 === (s & a)) return t.lanes = e.lanes, sl(e, t, s);
                        0 !== (16384 & e.flags) && (Fo = !0)
                    }
                    return Ho(e, t, n, r, s)
                }

                function Wo(e, t, n) {
                    var r = t.pendingProps,
                        a = r.children,
                        s = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
                        if (0 === (4 & t.mode)) t.memoizedState = {
                            baseLanes: 0
                        }, xi(t, n);
                        else {
                            if (0 === (1073741824 & n)) return e = null !== s ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e
                            }, xi(t, e), null;
                            t.memoizedState = {
                                baseLanes: 0
                            }, xi(t, null !== s ? s.baseLanes : n)
                        }
                    else null !== s ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, xi(t, r);
                    return Ao(e, t, a, n), t.child
                }

                function Bo(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 128)
                }

                function Ho(e, t, n, r, a) {
                    var s = ga(n) ? ha : pa.current;
                    return s = ya(t, s), ss(t, a), n = oo(e, t, n, r, s, a), null === e || Fo ? (t.flags |= 1, Ao(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~a, sl(e, t, a))
                }

                function Vo(e, t, n, r, a) {
                    if (ga(n)) {
                        var s = !0;
                        wa(t)
                    } else s = !1;
                    if (ss(t, a), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), vs(t, n, r), ws(t, n, r, a), r = !0;
                    else if (null === e) {
                        var o = t.stateNode,
                            l = t.memoizedProps;
                        o.props = l;
                        var i = o.context,
                            u = n.contextType;
                        "object" === typeof u && null !== u ? u = os(u) : u = ya(t, u = ga(n) ? ha : pa.current);
                        var c = n.getDerivedStateFromProps,
                            d = "function" === typeof c || "function" === typeof o.getSnapshotBeforeUpdate;
                        d || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (l !== r || i !== u) && ks(t, o, r, u), ls = !1;
                        var f = t.memoizedState;
                        o.state = f, ps(t, r, o, a), i = t.memoizedState, l !== r || f !== i || ma.current || ls ? ("function" === typeof c && (ys(t, n, c, r), i = t.memoizedState), (l = ls || bs(t, n, l, r, f, i, u)) ? (d || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || ("function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" === typeof o.componentDidMount && (t.flags |= 4)) : ("function" === typeof o.componentDidMount && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = i), o.props = r, o.state = i, o.context = u, r = l) : ("function" === typeof o.componentDidMount && (t.flags |= 4), r = !1)
                    } else {
                        o = t.stateNode, us(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Xa(t.type, l), o.props = u, d = t.pendingProps, f = o.context, "object" === typeof(i = n.contextType) && null !== i ? i = os(i) : i = ya(t, i = ga(n) ? ha : pa.current);
                        var p = n.getDerivedStateFromProps;
                        (c = "function" === typeof p || "function" === typeof o.getSnapshotBeforeUpdate) || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (l !== d || f !== i) && ks(t, o, r, i), ls = !1, f = t.memoizedState, o.state = f, ps(t, r, o, a);
                        var m = t.memoizedState;
                        l !== d || f !== m || ma.current || ls ? ("function" === typeof p && (ys(t, n, p, r), m = t.memoizedState), (u = ls || bs(t, n, u, r, f, m, i)) ? (c || "function" !== typeof o.UNSAFE_componentWillUpdate && "function" !== typeof o.componentWillUpdate || ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(r, m, i), "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, m, i)), "function" === typeof o.componentDidUpdate && (t.flags |= 4), "function" === typeof o.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" !== typeof o.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = i, r = u) : ("function" !== typeof o.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 256), r = !1)
                    }
                    return $o(e, t, n, r, s, a)
                }

                function $o(e, t, n, r, a, s) {
                    Bo(e, t);
                    var o = 0 !== (64 & t.flags);
                    if (!r && !o) return a && xa(t, n, !1), sl(e, t, s);
                    r = t.stateNode, Do.current = t;
                    var l = o && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && o ? (t.child = zs(t, e.child, null, s), t.child = zs(t, null, l, s)) : Ao(e, t, l, s), t.memoizedState = r.state, a && xa(t, n, !0), t.child
                }

                function Qo(e) {
                    var t = e.stateNode;
                    t.pendingContext ? va(0, t.pendingContext, t.pendingContext !== t.context) : t.context && va(0, t.context, !1), Ls(e, t.containerInfo)
                }
                var Ko, Yo, Go, Xo = {
                    dehydrated: null,
                    retryLane: 0
                };

                function Jo(e, t, n) {
                    var r, a = t.pendingProps,
                        s = Fs.current,
                        o = !1;
                    return (r = 0 !== (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & s)), r ? (o = !0, t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (s |= 1), da(Fs, 1 & s), null === e ? (void 0 !== a.fallback && Hs(t), e = a.children, s = a.fallback, o ? (e = Zo(t, e, s, n), t.child.memoizedState = {
                        baseLanes: n
                    }, t.memoizedState = Xo, e) : "number" === typeof a.unstable_expectedLoadTime ? (e = Zo(t, e, s, n), t.child.memoizedState = {
                        baseLanes: n
                    }, t.memoizedState = Xo, t.lanes = 33554432, e) : ((n = Yi({
                        mode: "visible",
                        children: e
                    }, t.mode, n, null)).return = t, t.child = n)) : (e.memoizedState, o ? (a = tl(e, t, a.children, a.fallback, n), o = t.child, s = e.child.memoizedState, o.memoizedState = null === s ? {
                        baseLanes: n
                    } : {
                        baseLanes: s.baseLanes | n
                    }, o.childLanes = e.childLanes & ~n, t.memoizedState = Xo, a) : (n = el(e, t, a.children, n), t.memoizedState = null, n))
                }

                function Zo(e, t, n, r) {
                    var a = e.mode,
                        s = e.child;
                    return t = {
                        mode: "hidden",
                        children: t
                    }, 0 === (2 & a) && null !== s ? (s.childLanes = 0, s.pendingProps = t) : s = Yi(t, a, 0, null), n = Ki(n, a, r, null), s.return = e, n.return = e, s.sibling = n, e.child = s, n
                }

                function el(e, t, n, r) {
                    var a = e.child;
                    return e = a.sibling, n = $i(a, {
                        mode: "visible",
                        children: n
                    }), 0 === (2 & t.mode) && (n.lanes = r), n.return = t, n.sibling = null, null !== e && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n
                }

                function tl(e, t, n, r, a) {
                    var s = t.mode,
                        o = e.child;
                    e = o.sibling;
                    var l = {
                        mode: "hidden",
                        children: n
                    };
                    return 0 === (2 & s) && t.child !== o ? ((n = t.child).childLanes = 0, n.pendingProps = l, null !== (o = n.lastEffect) ? (t.firstEffect = n.firstEffect, t.lastEffect = o, o.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = $i(o, l), null !== e ? r = $i(e, r) : (r = Ki(r, s, a, null)).flags |= 2, r.return = t, n.return = t, n.sibling = r, t.child = n, r
                }

                function nl(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    null !== n && (n.lanes |= t), as(e.return, t)
                }

                function rl(e, t, n, r, a, s) {
                    var o = e.memoizedState;
                    null === o ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: a,
                        lastEffect: s
                    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a, o.lastEffect = s)
                }

                function al(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        s = r.tail;
                    if (Ao(e, t, r.children, n), 0 !== (2 & (r = Fs.current))) r = 1 & r | 2, t.flags |= 64;
                    else {
                        if (null !== e && 0 !== (64 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && nl(e, n);
                            else if (19 === e.tag) nl(e, n);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (da(Fs, r), 0 === (2 & t.mode)) t.memoizedState = null;
                    else switch (a) {
                        case "forwards":
                            for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === As(e) && (a = n), n = n.sibling;
                            null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), rl(t, !1, a, n, s, t.lastEffect);
                            break;
                        case "backwards":
                            for (n = null, a = t.child, t.child = null; null !== a;) {
                                if (null !== (e = a.alternate) && null === As(e)) {
                                    t.child = a;
                                    break
                                }
                                e = a.sibling, a.sibling = n, n = a, a = e
                            }
                            rl(t, !0, n, null, s, t.lastEffect);
                            break;
                        case "together":
                            rl(t, !1, null, null, void 0, t.lastEffect);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function sl(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), ql |= t.lanes, 0 !== (n & t.childLanes)) {
                        if (null !== e && t.child !== e.child) throw Error(o(153));
                        if (null !== t.child) {
                            for (n = $i(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = $i(e, e.pendingProps)).return = t;
                            n.sibling = null
                        }
                        return t.child
                    }
                    return null
                }

                function ol(e, t) {
                    if (!qs) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function ll(e, t, n) {
                    var r = t.pendingProps;
                    switch (t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return null;
                        case 1:
                        case 17:
                            return ga(t.type) && ba(), null;
                        case 3:
                            return Ms(), ca(ma), ca(pa), Ys(), (r = t.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || ($s(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), null;
                        case 5:
                            Ds(t);
                            var s = Ts(Ps.current);
                            if (n = t.type, null !== e && null != t.stateNode) Yo(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(o(166));
                                    return null
                                }
                                if (e = Ts(_s.current), $s(t)) {
                                    r = t.stateNode, n = t.type;
                                    var l = t.memoizedProps;
                                    switch (r[Jr] = t, r[Zr] = l, n) {
                                        case "dialog":
                                            Nr("cancel", r), Nr("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Nr("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (e = 0; e < zr.length; e++) Nr(zr[e], r);
                                            break;
                                        case "source":
                                            Nr("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Nr("error", r), Nr("load", r);
                                            break;
                                        case "details":
                                            Nr("toggle", r);
                                            break;
                                        case "input":
                                            ee(r, l), Nr("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!l.multiple
                                            }, Nr("invalid", r);
                                            break;
                                        case "textarea":
                                            ie(r, l), Nr("invalid", r)
                                    }
                                    for (var u in Ee(n, l), e = null, l) l.hasOwnProperty(u) && (s = l[u], "children" === u ? "string" === typeof s ? r.textContent !== s && (e = ["children", s]) : "number" === typeof s && r.textContent !== "" + s && (e = ["children", "" + s]) : i.hasOwnProperty(u) && null != s && "onScroll" === u && Nr("scroll", r));
                                    switch (n) {
                                        case "input":
                                            G(r), re(r, l, !0);
                                            break;
                                        case "textarea":
                                            G(r), ce(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof l.onClick && (r.onclick = Ur)
                                    }
                                    r = e, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    switch (u = 9 === s.nodeType ? s : s.ownerDocument, e === de && (e = pe(n)), e === de ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = u.createElement(n, {
                                            is: r.is
                                        }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[Jr] = t, e[Zr] = r, Ko(e, t), t.stateNode = e, u = je(n, r), n) {
                                        case "dialog":
                                            Nr("cancel", e), Nr("close", e), s = r;
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Nr("load", e), s = r;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (s = 0; s < zr.length; s++) Nr(zr[s], e);
                                            s = r;
                                            break;
                                        case "source":
                                            Nr("error", e), s = r;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Nr("error", e), Nr("load", e), s = r;
                                            break;
                                        case "details":
                                            Nr("toggle", e), s = r;
                                            break;
                                        case "input":
                                            ee(e, r), s = Z(e, r), Nr("invalid", e);
                                            break;
                                        case "option":
                                            s = se(e, r);
                                            break;
                                        case "select":
                                            e._wrapperState = {
                                                wasMultiple: !!r.multiple
                                            }, s = a({}, r, {
                                                value: void 0
                                            }), Nr("invalid", e);
                                            break;
                                        case "textarea":
                                            ie(e, r), s = le(e, r), Nr("invalid", e);
                                            break;
                                        default:
                                            s = r
                                    }
                                    Ee(n, s);
                                    var c = s;
                                    for (l in c)
                                        if (c.hasOwnProperty(l)) {
                                            var d = c[l];
                                            "style" === l ? xe(e, d) : "dangerouslySetInnerHTML" === l ? null != (d = d ? d.__html : void 0) && ge(e, d) : "children" === l ? "string" === typeof d ? ("textarea" !== n || "" !== d) && be(e, d) : "number" === typeof d && be(e, "" + d) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (i.hasOwnProperty(l) ? null != d && "onScroll" === l && Nr("scroll", e) : null != d && k(e, l, d, u))
                                        } switch (n) {
                                        case "input":
                                            G(e), re(e, r, !1);
                                            break;
                                        case "textarea":
                                            G(e), ce(e);
                                            break;
                                        case "option":
                                            null != r.value && e.setAttribute("value", "" + K(r.value));
                                            break;
                                        case "select":
                                            e.multiple = !!r.multiple, null != (l = r.value) ? oe(e, !!r.multiple, l, !1) : null != r.defaultValue && oe(e, !!r.multiple, r.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof s.onClick && (e.onclick = Ur)
                                    }
                                    Br(n, r) && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 128)
                            }
                            return null;
                        case 6:
                            if (e && null != t.stateNode) Go(0, t, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(o(166));
                                n = Ts(Ps.current), Ts(_s.current), $s(t) ? (r = t.stateNode, n = t.memoizedProps, r[Jr] = t, r.nodeValue !== n && (t.flags |= 4)) : ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Jr] = t, t.stateNode = r)
                            }
                            return null;
                        case 13:
                            return ca(Fs), r = t.memoizedState, 0 !== (64 & t.flags) ? (t.lanes = n, t) : (r = null !== r, n = !1, null === e ? void 0 !== t.memoizedProps.fallback && $s(t) : n = null !== e.memoizedState, r && !n && 0 !== (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & Fs.current) ? 0 === Al && (Al = 3) : (0 !== Al && 3 !== Al || (Al = 4), null === Ll || 0 === (134217727 & ql) && 0 === (134217727 & Wl) || bi(Ll, Rl))), (r || n) && (t.flags |= 4), null);
                        case 4:
                            return Ms(), null === e && Tr(t.stateNode.containerInfo), null;
                        case 10:
                            return rs(t), null;
                        case 19:
                            if (ca(Fs), null === (r = t.memoizedState)) return null;
                            if (l = 0 !== (64 & t.flags), null === (u = r.rendering))
                                if (l) ol(r, !1);
                                else {
                                    if (0 !== Al || null !== e && 0 !== (64 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (u = As(e))) {
                                                for (t.flags |= 64, ol(r, !1), null !== (l = u.updateQueue) && (t.updateQueue = l, t.flags |= 4), null === r.lastEffect && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; null !== n;) e = r, (l = n).flags &= 2, l.nextEffect = null, l.firstEffect = null, l.lastEffect = null, null === (u = l.alternate) ? (l.childLanes = 0, l.lanes = e, l.child = null, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, e = u.dependencies, l.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return da(Fs, 1 & Fs.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== r.tail && Ba() > $l && (t.flags |= 64, l = !0, ol(r, !1), t.lanes = 33554432)
                                }
                            else {
                                if (!l)
                                    if (null !== (e = As(u))) {
                                        if (t.flags |= 64, l = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), ol(r, !0), null === r.tail && "hidden" === r.tailMode && !u.alternate && !qs) return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null
                                    } else 2 * Ba() - r.renderingStartTime > $l && 1073741824 !== n && (t.flags |= 64, l = !0, ol(r, !1), t.lanes = 33554432);
                                r.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = r.last) ? n.sibling = u : t.child = u, r.last = u)
                            }
                            return null !== r.tail ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = Ba(), n.sibling = null, t = Fs.current, da(Fs, l ? 1 & t | 2 : 1 & t), n) : null;
                        case 23:
                        case 24:
                            return Si(), null !== e && null !== e.memoizedState !== (null !== t.memoizedState) && "unstable-defer-without-hiding" !== r.mode && (t.flags |= 4), null
                    }
                    throw Error(o(156, t.tag))
                }

                function il(e) {
                    switch (e.tag) {
                        case 1:
                            ga(e.type) && ba();
                            var t = e.flags;
                            return 4096 & t ? (e.flags = -4097 & t | 64, e) : null;
                        case 3:
                            if (Ms(), ca(ma), ca(pa), Ys(), 0 !== (64 & (t = e.flags))) throw Error(o(285));
                            return e.flags = -4097 & t | 64, e;
                        case 5:
                            return Ds(e), null;
                        case 13:
                            return ca(Fs), 4096 & (t = e.flags) ? (e.flags = -4097 & t | 64, e) : null;
                        case 19:
                            return ca(Fs), null;
                        case 4:
                            return Ms(), null;
                        case 10:
                            return rs(e), null;
                        case 23:
                        case 24:
                            return Si(), null;
                        default:
                            return null
                    }
                }

                function ul(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += $(r), r = r.return
                        } while (r);
                        var a = n
                    } catch (s) {
                        a = "\nError generating stack: " + s.message + "\n" + s.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: a
                    }
                }

                function cl(e, t) {
                    try {
                        console.error(t.value)
                    } catch (n) {
                        setTimeout((function() {
                            throw n
                        }))
                    }
                }
                Ko = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Yo = function(e, t, n, r) {
                    var s = e.memoizedProps;
                    if (s !== r) {
                        e = t.stateNode, Ts(_s.current);
                        var o, l = null;
                        switch (n) {
                            case "input":
                                s = Z(e, s), r = Z(e, r), l = [];
                                break;
                            case "option":
                                s = se(e, s), r = se(e, r), l = [];
                                break;
                            case "select":
                                s = a({}, s, {
                                    value: void 0
                                }), r = a({}, r, {
                                    value: void 0
                                }), l = [];
                                break;
                            case "textarea":
                                s = le(e, s), r = le(e, r), l = [];
                                break;
                            default:
                                "function" !== typeof s.onClick && "function" === typeof r.onClick && (e.onclick = Ur)
                        }
                        for (d in Ee(n, r), n = null, s)
                            if (!r.hasOwnProperty(d) && s.hasOwnProperty(d) && null != s[d])
                                if ("style" === d) {
                                    var u = s[d];
                                    for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                                } else "dangerouslySetInnerHTML" !== d && "children" !== d && "suppressContentEditableWarning" !== d && "suppressHydrationWarning" !== d && "autoFocus" !== d && (i.hasOwnProperty(d) ? l || (l = []) : (l = l || []).push(d, null));
                        for (d in r) {
                            var c = r[d];
                            if (u = null != s ? s[d] : void 0, r.hasOwnProperty(d) && c !== u && (null != c || null != u))
                                if ("style" === d)
                                    if (u) {
                                        for (o in u) !u.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                                        for (o in c) c.hasOwnProperty(o) && u[o] !== c[o] && (n || (n = {}), n[o] = c[o])
                                    } else n || (l || (l = []), l.push(d, n)), n = c;
                            else "dangerouslySetInnerHTML" === d ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, null != c && u !== c && (l = l || []).push(d, c)) : "children" === d ? "string" !== typeof c && "number" !== typeof c || (l = l || []).push(d, "" + c) : "suppressContentEditableWarning" !== d && "suppressHydrationWarning" !== d && (i.hasOwnProperty(d) ? (null != c && "onScroll" === d && Nr("scroll", e), l || u === c || (l = [])) : "object" === typeof c && null !== c && c.$$typeof === R ? c.toString() : (l = l || []).push(d, c))
                        }
                        n && (l = l || []).push("style", n);
                        var d = l;
                        (t.updateQueue = d) && (t.flags |= 4)
                    }
                }, Go = function(e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var dl = "function" === typeof WeakMap ? WeakMap : Map;

                function fl(e, t, n) {
                    (n = cs(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        Gl || (Gl = !0, Xl = r), cl(0, t)
                    }, n
                }

                function pl(e, t, n) {
                    (n = cs(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var a = t.value;
                        n.payload = function() {
                            return cl(0, t), r(a)
                        }
                    }
                    var s = e.stateNode;
                    return null !== s && "function" === typeof s.componentDidCatch && (n.callback = function() {
                        "function" !== typeof r && (null === Jl ? Jl = new Set([this]) : Jl.add(this), cl(0, t));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }
                var ml = "function" === typeof WeakSet ? WeakSet : Set;

                function hl(e) {
                    var t = e.ref;
                    if (null !== t)
                        if ("function" === typeof t) try {
                            t(null)
                        } catch (n) {
                            Ui(e, n)
                        } else t.current = null
                }

                function yl(e, t) {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            return;
                        case 1:
                            if (256 & t.flags && null !== e) {
                                var n = e.memoizedProps,
                                    r = e.memoizedState;
                                t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Xa(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
                            }
                            return;
                        case 3:
                            return void(256 & t.flags && Qr(t.stateNode.containerInfo))
                    }
                    throw Error(o(163))
                }

                function gl(e, t, n) {
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                                e = t = t.next;
                                do {
                                    if (3 === (3 & e.tag)) {
                                        var r = e.create;
                                        e.destroy = r()
                                    }
                                    e = e.next
                                } while (e !== t)
                            }
                            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                                e = t = t.next;
                                do {
                                    var a = e;
                                    r = a.next, 0 !== (4 & (a = a.tag)) && 0 !== (1 & a) && (Fi(n, e), Di(n, e)), e = r
                                } while (e !== t)
                            }
                            return;
                        case 1:
                            return e = n.stateNode, 4 & n.flags && (null === t ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Xa(n.type, t.memoizedProps), e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), void(null !== (t = n.updateQueue) && ms(n, t, e));
                        case 3:
                            if (null !== (t = n.updateQueue)) {
                                if (e = null, null !== n.child) switch (n.child.tag) {
                                    case 5:
                                    case 1:
                                        e = n.child.stateNode
                                }
                                ms(n, t, e)
                            }
                            return;
                        case 5:
                            return e = n.stateNode, void(null === t && 4 & n.flags && Br(n.type, n.memoizedProps) && e.focus());
                        case 6:
                        case 4:
                        case 12:
                        case 19:
                        case 17:
                        case 20:
                        case 21:
                        case 23:
                        case 24:
                            return;
                        case 13:
                            return void(null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && xt(n)))))
                    }
                    throw Error(o(163))
                }

                function bl(e, t) {
                    for (var n = e;;) {
                        if (5 === n.tag) {
                            var r = n.stateNode;
                            if (t) "function" === typeof(r = r.style).setProperty ? r.setProperty("display", "none", "important") : r.display = "none";
                            else {
                                r = n.stateNode;
                                var a = n.memoizedProps.style;
                                a = void 0 !== a && null !== a && a.hasOwnProperty("display") ? a.display : null, r.style.display = we("display", a)
                            }
                        } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                        else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === e) && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === e) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === e) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }

                function vl(e, t) {
                    if (Ea && "function" === typeof Ea.onCommitFiberUnmount) try {
                        Ea.onCommitFiberUnmount(Sa, t)
                    } catch (s) {}
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                                var n = e = e.next;
                                do {
                                    var r = n,
                                        a = r.destroy;
                                    if (r = r.tag, void 0 !== a)
                                        if (0 !== (4 & r)) Fi(t, n);
                                        else {
                                            r = t;
                                            try {
                                                a()
                                            } catch (s) {
                                                Ui(r, s)
                                            }
                                        } n = n.next
                                } while (n !== e)
                            }
                            break;
                        case 1:
                            if (hl(t), "function" === typeof(e = t.stateNode).componentWillUnmount) try {
                                e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                            } catch (s) {
                                Ui(t, s)
                            }
                            break;
                        case 5:
                            hl(t);
                            break;
                        case 4:
                            jl(e, t)
                    }
                }

                function kl(e) {
                    e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null
                }

                function wl(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function xl(e) {
                    e: {
                        for (var t = e.return; null !== t;) {
                            if (wl(t)) break e;
                            t = t.return
                        }
                        throw Error(o(160))
                    }
                    var n = t;
                    switch (t = n.stateNode, n.tag) {
                        case 5:
                            var r = !1;
                            break;
                        case 3:
                        case 4:
                            t = t.containerInfo, r = !0;
                            break;
                        default:
                            throw Error(o(161))
                    }
                    16 & n.flags && (be(t, ""), n.flags &= -17);e: t: for (n = e;;) {
                        for (; null === n.sibling;) {
                            if (null === n.return || wl(n.return)) {
                                n = null;
                                break e
                            }
                            n = n.return
                        }
                        for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                            if (2 & n.flags) continue t;
                            if (null === n.child || 4 === n.tag) continue t;
                            n.child.return = n, n = n.child
                        }
                        if (!(2 & n.flags)) {
                            n = n.stateNode;
                            break e
                        }
                    }
                    r ? Sl(e, n, t) : El(e, n, t)
                }

                function Sl(e, t, n) {
                    var r = e.tag,
                        a = 5 === r || 6 === r;
                    if (a) e = a ? e.stateNode : e.stateNode.instance, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Ur));
                    else if (4 !== r && null !== (e = e.child))
                        for (Sl(e, t, n), e = e.sibling; null !== e;) Sl(e, t, n), e = e.sibling
                }

                function El(e, t, n) {
                    var r = e.tag,
                        a = 5 === r || 6 === r;
                    if (a) e = a ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (El(e, t, n), e = e.sibling; null !== e;) El(e, t, n), e = e.sibling
                }

                function jl(e, t) {
                    for (var n, r, a = t, s = !1;;) {
                        if (!s) {
                            s = a.return;
                            e: for (;;) {
                                if (null === s) throw Error(o(160));
                                switch (n = s.stateNode, s.tag) {
                                    case 5:
                                        r = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        n = n.containerInfo, r = !0;
                                        break e
                                }
                                s = s.return
                            }
                            s = !0
                        }
                        if (5 === a.tag || 6 === a.tag) {
                            e: for (var l = e, i = a, u = i;;)
                                if (vl(l, u), null !== u.child && 4 !== u.tag) u.child.return = u, u = u.child;
                                else {
                                    if (u === i) break e;
                                    for (; null === u.sibling;) {
                                        if (null === u.return || u.return === i) break e;
                                        u = u.return
                                    }
                                    u.sibling.return = u.return, u = u.sibling
                                }r ? (l = n, i = a.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(i) : l.removeChild(i)) : n.removeChild(a.stateNode)
                        }
                        else if (4 === a.tag) {
                            if (null !== a.child) {
                                n = a.stateNode.containerInfo, r = !0, a.child.return = a, a = a.child;
                                continue
                            }
                        } else if (vl(e, a), null !== a.child) {
                            a.child.return = a, a = a.child;
                            continue
                        }
                        if (a === t) break;
                        for (; null === a.sibling;) {
                            if (null === a.return || a.return === t) return;
                            4 === (a = a.return).tag && (s = !1)
                        }
                        a.sibling.return = a.return, a = a.sibling
                    }
                }

                function zl(e, t) {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            var n = t.updateQueue;
                            if (null !== (n = null !== n ? n.lastEffect : null)) {
                                var r = n = n.next;
                                do {
                                    3 === (3 & r.tag) && (e = r.destroy, r.destroy = void 0, void 0 !== e && e()), r = r.next
                                } while (r !== n)
                            }
                            return;
                        case 1:
                        case 12:
                        case 17:
                            return;
                        case 5:
                            if (null != (n = t.stateNode)) {
                                r = t.memoizedProps;
                                var a = null !== e ? e.memoizedProps : r;
                                e = t.type;
                                var s = t.updateQueue;
                                if (t.updateQueue = null, null !== s) {
                                    for (n[Zr] = r, "input" === e && "radio" === r.type && null != r.name && te(n, r), je(e, a), t = je(e, r), a = 0; a < s.length; a += 2) {
                                        var l = s[a],
                                            i = s[a + 1];
                                        "style" === l ? xe(n, i) : "dangerouslySetInnerHTML" === l ? ge(n, i) : "children" === l ? be(n, i) : k(n, l, i, t)
                                    }
                                    switch (e) {
                                        case "input":
                                            ne(n, r);
                                            break;
                                        case "textarea":
                                            ue(n, r);
                                            break;
                                        case "select":
                                            e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (s = r.value) ? oe(n, !!r.multiple, s, !1) : e !== !!r.multiple && (null != r.defaultValue ? oe(n, !!r.multiple, r.defaultValue, !0) : oe(n, !!r.multiple, r.multiple ? [] : "", !1))
                                    }
                                }
                            }
                            return;
                        case 6:
                            if (null === t.stateNode) throw Error(o(162));
                            return void(t.stateNode.nodeValue = t.memoizedProps);
                        case 3:
                            return void((n = t.stateNode).hydrate && (n.hydrate = !1, xt(n.containerInfo)));
                        case 13:
                            return null !== t.memoizedState && (Vl = Ba(), bl(t.child, !0)), void Cl(t);
                        case 19:
                            return void Cl(t);
                        case 23:
                        case 24:
                            return void bl(t, null !== t.memoizedState)
                    }
                    throw Error(o(163))
                }

                function Cl(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new ml), t.forEach((function(t) {
                            var r = Wi.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function Ol(e, t) {
                    return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (t = t.memoizedState) && null === t.dehydrated)
                }
                var _l = Math.ceil,
                    Nl = w.ReactCurrentDispatcher,
                    Pl = w.ReactCurrentOwner,
                    Tl = 0,
                    Ll = null,
                    Ml = null,
                    Rl = 0,
                    Dl = 0,
                    Fl = ua(0),
                    Al = 0,
                    Il = null,
                    Ul = 0,
                    ql = 0,
                    Wl = 0,
                    Bl = 0,
                    Hl = null,
                    Vl = 0,
                    $l = 1 / 0;

                function Ql() {
                    $l = Ba() + 500
                }
                var Kl, Yl = null,
                    Gl = !1,
                    Xl = null,
                    Jl = null,
                    Zl = !1,
                    ei = null,
                    ti = 90,
                    ni = [],
                    ri = [],
                    ai = null,
                    si = 0,
                    oi = null,
                    li = -1,
                    ii = 0,
                    ui = 0,
                    ci = null,
                    di = !1;

                function fi() {
                    return 0 !== (48 & Tl) ? Ba() : -1 !== li ? li : li = Ba()
                }

                function pi(e) {
                    if (0 === (2 & (e = e.mode))) return 1;
                    if (0 === (4 & e)) return 99 === Ha() ? 1 : 2;
                    if (0 === ii && (ii = Ul), 0 !== Ga.transition) {
                        0 !== ui && (ui = null !== Hl ? Hl.pendingLanes : 0), e = ii;
                        var t = 4186112 & ~ui;
                        return 0 === (t &= -t) && (0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192)), t
                    }
                    return e = Ha(), 0 !== (4 & Tl) && 98 === e ? e = Ut(12, ii) : e = Ut(e = function(e) {
                        switch (e) {
                            case 99:
                                return 15;
                            case 98:
                                return 10;
                            case 97:
                            case 96:
                                return 8;
                            case 95:
                                return 2;
                            default:
                                return 0
                        }
                    }(e), ii), e
                }

                function mi(e, t, n) {
                    if (50 < si) throw si = 0, oi = null, Error(o(185));
                    if (null === (e = hi(e, t))) return null;
                    Bt(e, t, n), e === Ll && (Wl |= t, 4 === Al && bi(e, Rl));
                    var r = Ha();
                    1 === t ? 0 !== (8 & Tl) && 0 === (48 & Tl) ? vi(e) : (yi(e, n), 0 === Tl && (Ql(), Ka())) : (0 === (4 & Tl) || 98 !== r && 99 !== r || (null === ai ? ai = new Set([e]) : ai.add(e)), yi(e, n)), Hl = e
                }

                function hi(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }

                function yi(e, t) {
                    for (var n = e.callbackNode, r = e.suspendedLanes, a = e.pingedLanes, s = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
                        var i = 31 - Ht(l),
                            u = 1 << i,
                            c = s[i];
                        if (-1 === c) {
                            if (0 === (u & r) || 0 !== (u & a)) {
                                c = t, Ft(u);
                                var d = Dt;
                                s[i] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1
                            }
                        } else c <= t && (e.expiredLanes |= u);
                        l &= ~u
                    }
                    if (r = At(e, e === Ll ? Rl : 0), t = Dt, 0 === r) null !== n && (n !== Fa && Ca(n), e.callbackNode = null, e.callbackPriority = 0);
                    else {
                        if (null !== n) {
                            if (e.callbackPriority === t) return;
                            n !== Fa && Ca(n)
                        }
                        15 === t ? (n = vi.bind(null, e), null === Ia ? (Ia = [n], Ua = za(Ta, Ya)) : Ia.push(n), n = Fa) : 14 === t ? n = Qa(99, vi.bind(null, e)) : (n = function(e) {
                            switch (e) {
                                case 15:
                                case 14:
                                    return 99;
                                case 13:
                                case 12:
                                case 11:
                                case 10:
                                    return 98;
                                case 9:
                                case 8:
                                case 7:
                                case 6:
                                case 4:
                                case 5:
                                    return 97;
                                case 3:
                                case 2:
                                case 1:
                                    return 95;
                                case 0:
                                    return 90;
                                default:
                                    throw Error(o(358, e))
                            }
                        }(t), n = Qa(n, gi.bind(null, e))), e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function gi(e) {
                    if (li = -1, ui = ii = 0, 0 !== (48 & Tl)) throw Error(o(327));
                    var t = e.callbackNode;
                    if (Ri() && e.callbackNode !== t) return null;
                    var n = At(e, e === Ll ? Rl : 0);
                    if (0 === n) return null;
                    var r = n,
                        a = Tl;
                    Tl |= 16;
                    var s = zi();
                    for (Ll === e && Rl === r || (Ql(), Ei(e, r));;) try {
                        _i();
                        break
                    } catch (i) {
                        ji(e, i)
                    }
                    if (ns(), Nl.current = s, Tl = a, null !== Ml ? r = 0 : (Ll = null, Rl = 0, r = Al), 0 !== (Ul & Wl)) Ei(e, 0);
                    else if (0 !== r) {
                        if (2 === r && (Tl |= 64, e.hydrate && (e.hydrate = !1, Qr(e.containerInfo)), 0 !== (n = It(e)) && (r = Ci(e, n))), 1 === r) throw t = Il, Ei(e, 0), bi(e, n), yi(e, Ba()), t;
                        switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
                            case 0:
                            case 1:
                                throw Error(o(345));
                            case 2:
                            case 5:
                                Ti(e);
                                break;
                            case 3:
                                if (bi(e, n), (62914560 & n) === n && 10 < (r = Vl + 500 - Ba())) {
                                    if (0 !== At(e, 0)) break;
                                    if (((a = e.suspendedLanes) & n) !== n) {
                                        fi(), e.pingedLanes |= e.suspendedLanes & a;
                                        break
                                    }
                                    e.timeoutHandle = Vr(Ti.bind(null, e), r);
                                    break
                                }
                                Ti(e);
                                break;
                            case 4:
                                if (bi(e, n), (4186112 & n) === n) break;
                                for (r = e.eventTimes, a = -1; 0 < n;) {
                                    var l = 31 - Ht(n);
                                    s = 1 << l, (l = r[l]) > a && (a = l), n &= ~s
                                }
                                if (n = a, 10 < (n = (120 > (n = Ba() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * _l(n / 1960)) - n)) {
                                    e.timeoutHandle = Vr(Ti.bind(null, e), n);
                                    break
                                }
                                Ti(e);
                                break;
                            default:
                                throw Error(o(329))
                        }
                    }
                    return yi(e, Ba()), e.callbackNode === t ? gi.bind(null, e) : null
                }

                function bi(e, t) {
                    for (t &= ~Bl, t &= ~Wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - Ht(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function vi(e) {
                    if (0 !== (48 & Tl)) throw Error(o(327));
                    if (Ri(), e === Ll && 0 !== (e.expiredLanes & Rl)) {
                        var t = Rl,
                            n = Ci(e, t);
                        0 !== (Ul & Wl) && (n = Ci(e, t = At(e, t)))
                    } else n = Ci(e, t = At(e, 0));
                    if (0 !== e.tag && 2 === n && (Tl |= 64, e.hydrate && (e.hydrate = !1, Qr(e.containerInfo)), 0 !== (t = It(e)) && (n = Ci(e, t))), 1 === n) throw n = Il, Ei(e, 0), bi(e, t), yi(e, Ba()), n;
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ti(e), yi(e, Ba()), null
                }

                function ki(e, t) {
                    var n = Tl;
                    Tl |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (Tl = n) && (Ql(), Ka())
                    }
                }

                function wi(e, t) {
                    var n = Tl;
                    Tl &= -2, Tl |= 8;
                    try {
                        return e(t)
                    } finally {
                        0 === (Tl = n) && (Ql(), Ka())
                    }
                }

                function xi(e, t) {
                    da(Fl, Dl), Dl |= t, Ul |= t
                }

                function Si() {
                    Dl = Fl.current, ca(Fl)
                }

                function Ei(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, $r(n)), null !== Ml)
                        for (n = Ml.return; null !== n;) {
                            var r = n;
                            switch (r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && ba();
                                    break;
                                case 3:
                                    Ms(), ca(ma), ca(pa), Ys();
                                    break;
                                case 5:
                                    Ds(r);
                                    break;
                                case 4:
                                    Ms();
                                    break;
                                case 13:
                                case 19:
                                    ca(Fs);
                                    break;
                                case 10:
                                    rs(r);
                                    break;
                                case 23:
                                case 24:
                                    Si()
                            }
                            n = n.return
                        }
                    Ll = e, Ml = $i(e.current, null), Rl = Dl = Ul = t, Al = 0, Il = null, Bl = Wl = ql = 0
                }

                function ji(e, t) {
                    for (;;) {
                        var n = Ml;
                        try {
                            if (ns(), Gs.current = To, no) {
                                for (var r = Zs.memoizedState; null !== r;) {
                                    var a = r.queue;
                                    null !== a && (a.pending = null), r = r.next
                                }
                                no = !1
                            }
                            if (Js = 0, to = eo = Zs = null, ro = !1, Pl.current = null, null === n || null === n.return) {
                                Al = 1, Il = t, Ml = null;
                                break
                            }
                            e: {
                                var s = e,
                                    o = n.return,
                                    l = n,
                                    i = t;
                                if (t = Rl, l.flags |= 2048, l.firstEffect = l.lastEffect = null, null !== i && "object" === typeof i && "function" === typeof i.then) {
                                    var u = i;
                                    if (0 === (2 & l.mode)) {
                                        var c = l.alternate;
                                        c ? (l.updateQueue = c.updateQueue, l.memoizedState = c.memoizedState, l.lanes = c.lanes) : (l.updateQueue = null, l.memoizedState = null)
                                    }
                                    var d = 0 !== (1 & Fs.current),
                                        f = o;
                                    do {
                                        var p;
                                        if (p = 13 === f.tag) {
                                            var m = f.memoizedState;
                                            if (null !== m) p = null !== m.dehydrated;
                                            else {
                                                var h = f.memoizedProps;
                                                p = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !d)
                                            }
                                        }
                                        if (p) {
                                            var y = f.updateQueue;
                                            if (null === y) {
                                                var g = new Set;
                                                g.add(u), f.updateQueue = g
                                            } else y.add(u);
                                            if (0 === (2 & f.mode)) {
                                                if (f.flags |= 64, l.flags |= 16384, l.flags &= -2981, 1 === l.tag)
                                                    if (null === l.alternate) l.tag = 17;
                                                    else {
                                                        var b = cs(-1, 1);
                                                        b.tag = 2, ds(l, b)
                                                    } l.lanes |= 1;
                                                break e
                                            }
                                            i = void 0, l = t;
                                            var v = s.pingCache;
                                            if (null === v ? (v = s.pingCache = new dl, i = new Set, v.set(u, i)) : void 0 === (i = v.get(u)) && (i = new Set, v.set(u, i)), !i.has(l)) {
                                                i.add(l);
                                                var k = qi.bind(null, s, u, l);
                                                u.then(k, k)
                                            }
                                            f.flags |= 4096, f.lanes = t;
                                            break e
                                        }
                                        f = f.return
                                    } while (null !== f);
                                    i = Error((Q(l.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                                }
                                5 !== Al && (Al = 2),
                                i = ul(i, l),
                                f = o;do {
                                    switch (f.tag) {
                                        case 3:
                                            s = i, f.flags |= 4096, t &= -t, f.lanes |= t, fs(f, fl(0, s, t));
                                            break e;
                                        case 1:
                                            s = i;
                                            var w = f.type,
                                                x = f.stateNode;
                                            if (0 === (64 & f.flags) && ("function" === typeof w.getDerivedStateFromError || null !== x && "function" === typeof x.componentDidCatch && (null === Jl || !Jl.has(x)))) {
                                                f.flags |= 4096, t &= -t, f.lanes |= t, fs(f, pl(f, s, t));
                                                break e
                                            }
                                    }
                                    f = f.return
                                } while (null !== f)
                            }
                            Pi(n)
                        } catch (S) {
                            t = S, Ml === n && null !== n && (Ml = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function zi() {
                    var e = Nl.current;
                    return Nl.current = To, null === e ? To : e
                }

                function Ci(e, t) {
                    var n = Tl;
                    Tl |= 16;
                    var r = zi();
                    for (Ll === e && Rl === t || Ei(e, t);;) try {
                        Oi();
                        break
                    } catch (a) {
                        ji(e, a)
                    }
                    if (ns(), Tl = n, Nl.current = r, null !== Ml) throw Error(o(261));
                    return Ll = null, Rl = 0, Al
                }

                function Oi() {
                    for (; null !== Ml;) Ni(Ml)
                }

                function _i() {
                    for (; null !== Ml && !Oa();) Ni(Ml)
                }

                function Ni(e) {
                    var t = Kl(e.alternate, e, Dl);
                    e.memoizedProps = e.pendingProps, null === t ? Pi(e) : Ml = t, Pl.current = null
                }

                function Pi(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 0 === (2048 & t.flags)) {
                            if (null !== (n = ll(n, t, Dl))) return void(Ml = n);
                            if (24 !== (n = t).tag && 23 !== n.tag || null === n.memoizedState || 0 !== (1073741824 & Dl) || 0 === (4 & n.mode)) {
                                for (var r = 0, a = n.child; null !== a;) r |= a.lanes | a.childLanes, a = a.sibling;
                                n.childLanes = r
                            }
                            null !== e && 0 === (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect), null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t))
                        } else {
                            if (null !== (n = il(t))) return n.flags &= 2047, void(Ml = n);
                            null !== e && (e.firstEffect = e.lastEffect = null, e.flags |= 2048)
                        }
                        if (null !== (t = t.sibling)) return void(Ml = t);
                        Ml = t = e
                    } while (null !== t);
                    0 === Al && (Al = 5)
                }

                function Ti(e) {
                    var t = Ha();
                    return $a(99, Li.bind(null, e, t)), null
                }

                function Li(e, t) {
                    do {
                        Ri()
                    } while (null !== ei);
                    if (0 !== (48 & Tl)) throw Error(o(327));
                    var n = e.finishedWork;
                    if (null === n) return null;
                    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
                    e.callbackNode = null;
                    var r = n.lanes | n.childLanes,
                        a = r,
                        s = e.pendingLanes & ~a;
                    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= a, e.mutableReadLanes &= a, e.entangledLanes &= a, a = e.entanglements;
                    for (var l = e.eventTimes, i = e.expirationTimes; 0 < s;) {
                        var u = 31 - Ht(s),
                            c = 1 << u;
                        a[u] = 0, l[u] = -1, i[u] = -1, s &= ~c
                    }
                    if (null !== ai && 0 === (24 & r) && ai.has(e) && ai.delete(e), e === Ll && (Ml = Ll = null, Rl = 0), 1 < n.flags ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, null !== r) {
                        if (a = Tl, Tl |= 32, Pl.current = null, qr = Yt, gr(l = yr())) {
                            if ("selectionStart" in l) i = {
                                start: l.selectionStart,
                                end: l.selectionEnd
                            };
                            else e: if (i = (i = l.ownerDocument) && i.defaultView || window, (c = i.getSelection && i.getSelection()) && 0 !== c.rangeCount) {
                                i = c.anchorNode, s = c.anchorOffset, u = c.focusNode, c = c.focusOffset;
                                try {
                                    i.nodeType, u.nodeType
                                } catch (z) {
                                    i = null;
                                    break e
                                }
                                var d = 0,
                                    f = -1,
                                    p = -1,
                                    m = 0,
                                    h = 0,
                                    y = l,
                                    g = null;
                                t: for (;;) {
                                    for (var b; y !== i || 0 !== s && 3 !== y.nodeType || (f = d + s), y !== u || 0 !== c && 3 !== y.nodeType || (p = d + c), 3 === y.nodeType && (d += y.nodeValue.length), null !== (b = y.firstChild);) g = y, y = b;
                                    for (;;) {
                                        if (y === l) break t;
                                        if (g === i && ++m === s && (f = d), g === u && ++h === c && (p = d), null !== (b = y.nextSibling)) break;
                                        g = (y = g).parentNode
                                    }
                                    y = b
                                }
                                i = -1 === f || -1 === p ? null : {
                                    start: f,
                                    end: p
                                }
                            } else i = null;
                            i = i || {
                                start: 0,
                                end: 0
                            }
                        } else i = null;
                        Wr = {
                            focusedElem: l,
                            selectionRange: i
                        }, Yt = !1, ci = null, di = !1, Yl = r;
                        do {
                            try {
                                Mi()
                            } catch (z) {
                                if (null === Yl) throw Error(o(330));
                                Ui(Yl, z), Yl = Yl.nextEffect
                            }
                        } while (null !== Yl);
                        ci = null, Yl = r;
                        do {
                            try {
                                for (l = e; null !== Yl;) {
                                    var v = Yl.flags;
                                    if (16 & v && be(Yl.stateNode, ""), 128 & v) {
                                        var k = Yl.alternate;
                                        if (null !== k) {
                                            var w = k.ref;
                                            null !== w && ("function" === typeof w ? w(null) : w.current = null)
                                        }
                                    }
                                    switch (1038 & v) {
                                        case 2:
                                            xl(Yl), Yl.flags &= -3;
                                            break;
                                        case 6:
                                            xl(Yl), Yl.flags &= -3, zl(Yl.alternate, Yl);
                                            break;
                                        case 1024:
                                            Yl.flags &= -1025;
                                            break;
                                        case 1028:
                                            Yl.flags &= -1025, zl(Yl.alternate, Yl);
                                            break;
                                        case 4:
                                            zl(Yl.alternate, Yl);
                                            break;
                                        case 8:
                                            jl(l, i = Yl);
                                            var x = i.alternate;
                                            kl(i), null !== x && kl(x)
                                    }
                                    Yl = Yl.nextEffect
                                }
                            } catch (z) {
                                if (null === Yl) throw Error(o(330));
                                Ui(Yl, z), Yl = Yl.nextEffect
                            }
                        } while (null !== Yl);
                        if (w = Wr, k = yr(), v = w.focusedElem, l = w.selectionRange, k !== v && v && v.ownerDocument && hr(v.ownerDocument.documentElement, v)) {
                            null !== l && gr(v) && (k = l.start, void 0 === (w = l.end) && (w = k), "selectionStart" in v ? (v.selectionStart = k, v.selectionEnd = Math.min(w, v.value.length)) : (w = (k = v.ownerDocument || document) && k.defaultView || window).getSelection && (w = w.getSelection(), i = v.textContent.length, x = Math.min(l.start, i), l = void 0 === l.end ? x : Math.min(l.end, i), !w.extend && x > l && (i = l, l = x, x = i), i = mr(v, x), s = mr(v, l), i && s && (1 !== w.rangeCount || w.anchorNode !== i.node || w.anchorOffset !== i.offset || w.focusNode !== s.node || w.focusOffset !== s.offset) && ((k = k.createRange()).setStart(i.node, i.offset), w.removeAllRanges(), x > l ? (w.addRange(k), w.extend(s.node, s.offset)) : (k.setEnd(s.node, s.offset), w.addRange(k))))), k = [];
                            for (w = v; w = w.parentNode;) 1 === w.nodeType && k.push({
                                element: w,
                                left: w.scrollLeft,
                                top: w.scrollTop
                            });
                            for ("function" === typeof v.focus && v.focus(), v = 0; v < k.length; v++)(w = k[v]).element.scrollLeft = w.left, w.element.scrollTop = w.top
                        }
                        Yt = !!qr, Wr = qr = null, e.current = n, Yl = r;
                        do {
                            try {
                                for (v = e; null !== Yl;) {
                                    var S = Yl.flags;
                                    if (36 & S && gl(v, Yl.alternate, Yl), 128 & S) {
                                        k = void 0;
                                        var E = Yl.ref;
                                        if (null !== E) {
                                            var j = Yl.stateNode;
                                            Yl.tag, k = j, "function" === typeof E ? E(k) : E.current = k
                                        }
                                    }
                                    Yl = Yl.nextEffect
                                }
                            } catch (z) {
                                if (null === Yl) throw Error(o(330));
                                Ui(Yl, z), Yl = Yl.nextEffect
                            }
                        } while (null !== Yl);
                        Yl = null, Aa(), Tl = a
                    } else e.current = n;
                    if (Zl) Zl = !1, ei = e, ti = t;
                    else
                        for (Yl = r; null !== Yl;) t = Yl.nextEffect, Yl.nextEffect = null, 8 & Yl.flags && ((S = Yl).sibling = null, S.stateNode = null), Yl = t;
                    if (0 === (r = e.pendingLanes) && (Jl = null), 1 === r ? e === oi ? si++ : (si = 0, oi = e) : si = 0, n = n.stateNode, Ea && "function" === typeof Ea.onCommitFiberRoot) try {
                        Ea.onCommitFiberRoot(Sa, n, void 0, 64 === (64 & n.current.flags))
                    } catch (z) {}
                    if (yi(e, Ba()), Gl) throw Gl = !1, e = Xl, Xl = null, e;
                    return 0 !== (8 & Tl) || Ka(), null
                }

                function Mi() {
                    for (; null !== Yl;) {
                        var e = Yl.alternate;
                        di || null === ci || (0 !== (8 & Yl.flags) ? et(Yl, ci) && (di = !0) : 13 === Yl.tag && Ol(e, Yl) && et(Yl, ci) && (di = !0));
                        var t = Yl.flags;
                        0 !== (256 & t) && yl(e, Yl), 0 === (512 & t) || Zl || (Zl = !0, Qa(97, (function() {
                            return Ri(), null
                        }))), Yl = Yl.nextEffect
                    }
                }

                function Ri() {
                    if (90 !== ti) {
                        var e = 97 < ti ? 97 : ti;
                        return ti = 90, $a(e, Ai)
                    }
                    return !1
                }

                function Di(e, t) {
                    ni.push(t, e), Zl || (Zl = !0, Qa(97, (function() {
                        return Ri(), null
                    })))
                }

                function Fi(e, t) {
                    ri.push(t, e), Zl || (Zl = !0, Qa(97, (function() {
                        return Ri(), null
                    })))
                }

                function Ai() {
                    if (null === ei) return !1;
                    var e = ei;
                    if (ei = null, 0 !== (48 & Tl)) throw Error(o(331));
                    var t = Tl;
                    Tl |= 32;
                    var n = ri;
                    ri = [];
                    for (var r = 0; r < n.length; r += 2) {
                        var a = n[r],
                            s = n[r + 1],
                            l = a.destroy;
                        if (a.destroy = void 0, "function" === typeof l) try {
                            l()
                        } catch (u) {
                            if (null === s) throw Error(o(330));
                            Ui(s, u)
                        }
                    }
                    for (n = ni, ni = [], r = 0; r < n.length; r += 2) {
                        a = n[r], s = n[r + 1];
                        try {
                            var i = a.create;
                            a.destroy = i()
                        } catch (u) {
                            if (null === s) throw Error(o(330));
                            Ui(s, u)
                        }
                    }
                    for (i = e.current.firstEffect; null !== i;) e = i.nextEffect, i.nextEffect = null, 8 & i.flags && (i.sibling = null, i.stateNode = null), i = e;
                    return Tl = t, Ka(), !0
                }

                function Ii(e, t, n) {
                    ds(e, t = fl(0, t = ul(n, t), 1)), t = fi(), null !== (e = hi(e, 1)) && (Bt(e, 1, t), yi(e, t))
                }

                function Ui(e, t) {
                    if (3 === e.tag) Ii(e, e, t);
                    else
                        for (var n = e.return; null !== n;) {
                            if (3 === n.tag) {
                                Ii(n, e, t);
                                break
                            }
                            if (1 === n.tag) {
                                var r = n.stateNode;
                                if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Jl || !Jl.has(r))) {
                                    var a = pl(n, e = ul(t, e), 1);
                                    if (ds(n, a), a = fi(), null !== (n = hi(n, 1))) Bt(n, 1, a), yi(n, a);
                                    else if ("function" === typeof r.componentDidCatch && (null === Jl || !Jl.has(r))) try {
                                        r.componentDidCatch(t, e)
                                    } catch (s) {}
                                    break
                                }
                            }
                            n = n.return
                        }
                }

                function qi(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = fi(), e.pingedLanes |= e.suspendedLanes & n, Ll === e && (Rl & n) === n && (4 === Al || 3 === Al && (62914560 & Rl) === Rl && 500 > Ba() - Vl ? Ei(e, 0) : Bl |= n), yi(e, t)
                }

                function Wi(e, t) {
                    var n = e.stateNode;
                    null !== n && n.delete(t), 0 === (t = 0) && (0 === (2 & (t = e.mode)) ? t = 1 : 0 === (4 & t) ? t = 99 === Ha() ? 1 : 2 : (0 === ii && (ii = Ul), 0 === (t = qt(62914560 & ~ii)) && (t = 4194304))), n = fi(), null !== (e = hi(e, t)) && (Bt(e, t, n), yi(e, n))
                }

                function Bi(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Hi(e, t, n, r) {
                    return new Bi(e, t, n, r)
                }

                function Vi(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function $i(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Hi(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function Qi(e, t, n, r, a, s) {
                    var l = 2;
                    if (r = e, "function" === typeof e) Vi(e) && (l = 1);
                    else if ("string" === typeof e) l = 5;
                    else e: switch (e) {
                        case E:
                            return Ki(n.children, a, s, t);
                        case D:
                            l = 8, a |= 16;
                            break;
                        case j:
                            l = 8, a |= 1;
                            break;
                        case z:
                            return (e = Hi(12, n, t, 8 | a)).elementType = z, e.type = z, e.lanes = s, e;
                        case N:
                            return (e = Hi(13, n, t, a)).type = N, e.elementType = N, e.lanes = s, e;
                        case P:
                            return (e = Hi(19, n, t, a)).elementType = P, e.lanes = s, e;
                        case F:
                            return Yi(n, a, s, t);
                        case A:
                            return (e = Hi(24, n, t, a)).elementType = A, e.lanes = s, e;
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case C:
                                    l = 10;
                                    break e;
                                case O:
                                    l = 9;
                                    break e;
                                case _:
                                    l = 11;
                                    break e;
                                case T:
                                    l = 14;
                                    break e;
                                case L:
                                    l = 16, r = null;
                                    break e;
                                case M:
                                    l = 22;
                                    break e
                            }
                            throw Error(o(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Hi(l, n, t, a)).elementType = e, t.type = r, t.lanes = s, t
                }

                function Ki(e, t, n, r) {
                    return (e = Hi(7, e, r, t)).lanes = n, e
                }

                function Yi(e, t, n, r) {
                    return (e = Hi(23, e, r, t)).elementType = F, e.lanes = n, e
                }

                function Gi(e, t, n) {
                    return (e = Hi(6, e, null, t)).lanes = n, e
                }

                function Xi(e, t, n) {
                    return (t = Hi(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Ji(e, t, n) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Wt(0), this.expirationTimes = Wt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wt(0), this.mutableSourceEagerHydrationData = null
                }

                function Zi(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: S,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }

                function eu(e, t, n, r) {
                    var a = t.current,
                        s = fi(),
                        l = pi(a);
                    e: if (n) {
                        t: {
                            if (Ge(n = n._reactInternals) !== n || 1 !== n.tag) throw Error(o(170));
                            var i = n;do {
                                switch (i.tag) {
                                    case 3:
                                        i = i.stateNode.context;
                                        break t;
                                    case 1:
                                        if (ga(i.type)) {
                                            i = i.stateNode.__reactInternalMemoizedMergedChildContext;
                                            break t
                                        }
                                }
                                i = i.return
                            } while (null !== i);
                            throw Error(o(171))
                        }
                        if (1 === n.tag) {
                            var u = n.type;
                            if (ga(u)) {
                                n = ka(n, u, i);
                                break e
                            }
                        }
                        n = i
                    }
                    else n = fa;
                    return null === t.context ? t.context = n : t.pendingContext = n, (t = cs(s, l)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), ds(a, t), mi(a, l, s), l
                }

                function tu(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function nu(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function ru(e, t) {
                    nu(e, t), (e = e.alternate) && nu(e, t)
                }

                function au(e, t, n) {
                    var r = null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources || null;
                    if (n = new Ji(e, t, null != n && !0 === n.hydrate), t = Hi(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0), n.current = t, t.stateNode = n, is(t), e[ea] = n.current, Tr(8 === e.nodeType ? e.parentNode : e), r)
                        for (e = 0; e < r.length; e++) {
                            var a = (t = r[e])._getVersion;
                            a = a(t._source), null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, a] : n.mutableSourceEagerHydrationData.push(t, a)
                        }
                    this._internalRoot = n
                }

                function su(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function ou(e, t, n, r, a) {
                    var s = n._reactRootContainer;
                    if (s) {
                        var o = s._internalRoot;
                        if ("function" === typeof a) {
                            var l = a;
                            a = function() {
                                var e = tu(o);
                                l.call(e)
                            }
                        }
                        eu(t, o, e, a)
                    } else {
                        if (s = n._reactRootContainer = function(e, t) {
                                if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                                    for (var n; n = e.lastChild;) e.removeChild(n);
                                return new au(e, 0, t ? {
                                    hydrate: !0
                                } : void 0)
                            }(n, r), o = s._internalRoot, "function" === typeof a) {
                            var i = a;
                            a = function() {
                                var e = tu(o);
                                i.call(e)
                            }
                        }
                        wi((function() {
                            eu(t, o, e, a)
                        }))
                    }
                    return tu(o)
                }

                function lu(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!su(t)) throw Error(o(200));
                    return Zi(e, t, null, n)
                }
                Kl = function(e, t, n) {
                    var r = t.lanes;
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || ma.current) Fo = !0;
                        else {
                            if (0 === (n & r)) {
                                switch (Fo = !1, t.tag) {
                                    case 3:
                                        Qo(t), Qs();
                                        break;
                                    case 5:
                                        Rs(t);
                                        break;
                                    case 1:
                                        ga(t.type) && wa(t);
                                        break;
                                    case 4:
                                        Ls(t, t.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        r = t.memoizedProps.value;
                                        var a = t.type._context;
                                        da(Ja, a._currentValue), a._currentValue = r;
                                        break;
                                    case 13:
                                        if (null !== t.memoizedState) return 0 !== (n & t.child.childLanes) ? Jo(e, t, n) : (da(Fs, 1 & Fs.current), null !== (t = sl(e, t, n)) ? t.sibling : null);
                                        da(Fs, 1 & Fs.current);
                                        break;
                                    case 19:
                                        if (r = 0 !== (n & t.childLanes), 0 !== (64 & e.flags)) {
                                            if (r) return al(e, t, n);
                                            t.flags |= 64
                                        }
                                        if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), da(Fs, Fs.current), r) break;
                                        return null;
                                    case 23:
                                    case 24:
                                        return t.lanes = 0, Wo(e, t, n)
                                }
                                return sl(e, t, n)
                            }
                            Fo = 0 !== (16384 & e.flags)
                        }
                    else Fo = !1;
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, a = ya(t, pa.current), ss(t, n), a = oo(null, t, r, e, a, n), t.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof) {
                                if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ga(r)) {
                                    var s = !0;
                                    wa(t)
                                } else s = !1;
                                t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, is(t);
                                var l = r.getDerivedStateFromProps;
                                "function" === typeof l && ys(t, r, l, e), a.updater = gs, t.stateNode = a, a._reactInternals = t, ws(t, r, e, n), t = $o(null, t, r, !0, s, n)
                            } else t.tag = 0, Ao(null, t, a, n), t = t.child;
                            return t;
                        case 16:
                            a = t.elementType;
                            e: {
                                switch (null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, a = (s = a._init)(a._payload), t.type = a, s = t.tag = function(e) {
                                        if ("function" === typeof e) return Vi(e) ? 1 : 0;
                                        if (void 0 !== e && null !== e) {
                                            if ((e = e.$$typeof) === _) return 11;
                                            if (e === T) return 14
                                        }
                                        return 2
                                    }(a), e = Xa(a, e), s) {
                                    case 0:
                                        t = Ho(null, t, a, e, n);
                                        break e;
                                    case 1:
                                        t = Vo(null, t, a, e, n);
                                        break e;
                                    case 11:
                                        t = Io(null, t, a, e, n);
                                        break e;
                                    case 14:
                                        t = Uo(null, t, a, Xa(a.type, e), r, n);
                                        break e
                                }
                                throw Error(o(306, a, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, a = t.pendingProps, Ho(e, t, r, a = t.elementType === r ? a : Xa(r, a), n);
                        case 1:
                            return r = t.type, a = t.pendingProps, Vo(e, t, r, a = t.elementType === r ? a : Xa(r, a), n);
                        case 3:
                            if (Qo(t), r = t.updateQueue, null === e || null === r) throw Error(o(282));
                            if (r = t.pendingProps, a = null !== (a = t.memoizedState) ? a.element : null, us(e, t), ps(t, r, null, n), (r = t.memoizedState.element) === a) Qs(), t = sl(e, t, n);
                            else {
                                if ((s = (a = t.stateNode).hydrate) && (Us = Kr(t.stateNode.containerInfo.firstChild), Is = t, s = qs = !0), s) {
                                    if (null != (e = a.mutableSourceEagerHydrationData))
                                        for (a = 0; a < e.length; a += 2)(s = e[a])._workInProgressVersionPrimary = e[a + 1], Ks.push(s);
                                    for (n = Cs(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 1024, n = n.sibling
                                } else Ao(e, t, r, n), Qs();
                                t = t.child
                            }
                            return t;
                        case 5:
                            return Rs(t), null === e && Hs(t), r = t.type, a = t.pendingProps, s = null !== e ? e.memoizedProps : null, l = a.children, Hr(r, a) ? l = null : null !== s && Hr(r, s) && (t.flags |= 16), Bo(e, t), Ao(e, t, l, n), t.child;
                        case 6:
                            return null === e && Hs(t), null;
                        case 13:
                            return Jo(e, t, n);
                        case 4:
                            return Ls(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = zs(t, null, r, n) : Ao(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, a = t.pendingProps, Io(e, t, r, a = t.elementType === r ? a : Xa(r, a), n);
                        case 7:
                            return Ao(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return Ao(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                r = t.type._context,
                                a = t.pendingProps,
                                l = t.memoizedProps,
                                s = a.value;
                                var i = t.type._context;
                                if (da(Ja, i._currentValue), i._currentValue = s, null !== l)
                                    if (i = l.value, 0 === (s = cr(i, s) ? 0 : 0 | ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(i, s) : 1073741823))) {
                                        if (l.children === a.children && !ma.current) {
                                            t = sl(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (i = t.child) && (i.return = t); null !== i;) {
                                            var u = i.dependencies;
                                            if (null !== u) {
                                                l = i.child;
                                                for (var c = u.firstContext; null !== c;) {
                                                    if (c.context === r && 0 !== (c.observedBits & s)) {
                                                        1 === i.tag && ((c = cs(-1, n & -n)).tag = 2, ds(i, c)), i.lanes |= n, null !== (c = i.alternate) && (c.lanes |= n), as(i.return, n), u.lanes |= n;
                                                        break
                                                    }
                                                    c = c.next
                                                }
                                            } else l = 10 === i.tag && i.type === t.type ? null : i.child;
                                            if (null !== l) l.return = i;
                                            else
                                                for (l = i; null !== l;) {
                                                    if (l === t) {
                                                        l = null;
                                                        break
                                                    }
                                                    if (null !== (i = l.sibling)) {
                                                        i.return = l.return, l = i;
                                                        break
                                                    }
                                                    l = l.return
                                                }
                                            i = l
                                        }
                                Ao(e, t, a.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return a = t.type, r = (s = t.pendingProps).children, ss(t, n), r = r(a = os(a, s.unstable_observedBits)), t.flags |= 1, Ao(e, t, r, n), t.child;
                        case 14:
                            return s = Xa(a = t.type, t.pendingProps), Uo(e, t, a, s = Xa(a.type, s), r, n);
                        case 15:
                            return qo(e, t, t.type, t.pendingProps, r, n);
                        case 17:
                            return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Xa(r, a), null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, ga(r) ? (e = !0, wa(t)) : e = !1, ss(t, n), vs(t, r, a), ws(t, r, a, n), $o(null, t, r, !0, e, n);
                        case 19:
                            return al(e, t, n);
                        case 23:
                        case 24:
                            return Wo(e, t, n)
                    }
                    throw Error(o(156, t.tag))
                }, au.prototype.render = function(e) {
                    eu(e, this._internalRoot, null, null)
                }, au.prototype.unmount = function() {
                    var e = this._internalRoot,
                        t = e.containerInfo;
                    eu(null, e, null, (function() {
                        t[ea] = null
                    }))
                }, tt = function(e) {
                    13 === e.tag && (mi(e, 4, fi()), ru(e, 4))
                }, nt = function(e) {
                    13 === e.tag && (mi(e, 67108864, fi()), ru(e, 67108864))
                }, rt = function(e) {
                    if (13 === e.tag) {
                        var t = fi(),
                            n = pi(e);
                        mi(e, n, t), ru(e, n)
                    }
                }, at = function(e, t) {
                    return t()
                }, Ce = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (ne(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var a = sa(r);
                                        if (!a) throw Error(o(90));
                                        X(r), ne(r, a)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ue(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && oe(e, !!n.multiple, t, !1)
                    }
                }, Le = ki, Me = function(e, t, n, r, a) {
                    var s = Tl;
                    Tl |= 4;
                    try {
                        return $a(98, e.bind(null, t, n, r, a))
                    } finally {
                        0 === (Tl = s) && (Ql(), Ka())
                    }
                }, Re = function() {
                    0 === (49 & Tl) && (function() {
                        if (null !== ai) {
                            var e = ai;
                            ai = null, e.forEach((function(e) {
                                e.expiredLanes |= 24 & e.pendingLanes, yi(e, Ba())
                            }))
                        }
                        Ka()
                    }(), Ri())
                }, De = function(e, t) {
                    var n = Tl;
                    Tl |= 2;
                    try {
                        return e(t)
                    } finally {
                        0 === (Tl = n) && (Ql(), Ka())
                    }
                };
                var iu = {
                        Events: [ra, aa, sa, Pe, Te, Ri, {
                            current: !1
                        }]
                    },
                    uu = {
                        findFiberByHostInstance: na,
                        bundleType: 0,
                        version: "17.0.2",
                        rendererPackageName: "react-dom"
                    },
                    cu = {
                        bundleType: uu.bundleType,
                        version: uu.version,
                        rendererPackageName: uu.rendererPackageName,
                        rendererConfig: uu.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: w.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = Ze(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: uu.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!du.isDisabled && du.supportsFiber) try {
                        Sa = du.inject(cu), Ea = du
                    } catch (ye) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iu, t.createPortal = lu, t.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(o(188));
                        throw Error(o(268, Object.keys(e)))
                    }
                    return e = null === (e = Ze(t)) ? null : e.stateNode
                }, t.flushSync = function(e, t) {
                    var n = Tl;
                    if (0 !== (48 & n)) return e(t);
                    Tl |= 1;
                    try {
                        if (e) return $a(99, e.bind(null, t))
                    } finally {
                        Tl = n, Ka()
                    }
                }, t.hydrate = function(e, t, n) {
                    if (!su(t)) throw Error(o(200));
                    return ou(null, e, t, !0, n)
                }, t.render = function(e, t, n) {
                    if (!su(t)) throw Error(o(200));
                    return ou(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function(e) {
                    if (!su(e)) throw Error(o(40));
                    return !!e._reactRootContainer && (wi((function() {
                        ou(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[ea] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = ki, t.unstable_createPortal = function(e, t) {
                    return lu(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
                }, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                    if (!su(n)) throw Error(o(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(o(38));
                    return ou(e, t, n, !1, r)
                }, t.version = "17.0.2"
            },
            164: function(e, t, n) {
                "use strict";
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(463)
            },
            688: function(e, t, n) {
                "use strict";

                function r() {
                    var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
                    null !== e && void 0 !== e && this.setState(e)
                }

                function a(e) {
                    this.setState(function(t) {
                        var n = this.constructor.getDerivedStateFromProps(e, t);
                        return null !== n && void 0 !== n ? n : null
                    }.bind(this))
                }

                function s(e, t) {
                    try {
                        var n = this.props,
                            r = this.state;
                        this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r)
                    } finally {
                        this.props = n, this.state = r
                    }
                }

                function o(e) {
                    var t = e.prototype;
                    if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
                    if ("function" !== typeof e.getDerivedStateFromProps && "function" !== typeof t.getSnapshotBeforeUpdate) return e;
                    var n = null,
                        o = null,
                        l = null;
                    if ("function" === typeof t.componentWillMount ? n = "componentWillMount" : "function" === typeof t.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" === typeof t.componentWillReceiveProps ? o = "componentWillReceiveProps" : "function" === typeof t.UNSAFE_componentWillReceiveProps && (o = "UNSAFE_componentWillReceiveProps"), "function" === typeof t.componentWillUpdate ? l = "componentWillUpdate" : "function" === typeof t.UNSAFE_componentWillUpdate && (l = "UNSAFE_componentWillUpdate"), null !== n || null !== o || null !== l) {
                        var i = e.displayName || e.name,
                            u = "function" === typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                        throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + i + " uses " + u + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== o ? "\n  " + o : "") + (null !== l ? "\n  " + l : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")
                    }
                    if ("function" === typeof e.getDerivedStateFromProps && (t.componentWillMount = r, t.componentWillReceiveProps = a), "function" === typeof t.getSnapshotBeforeUpdate) {
                        if ("function" !== typeof t.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
                        t.componentWillUpdate = s;
                        var c = t.componentDidUpdate;
                        t.componentDidUpdate = function(e, t, n) {
                            var r = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
                            c.call(this, e, t, r)
                        }
                    }
                    return e
                }
                n.r(t), n.d(t, {
                    polyfill: function() {
                        return o
                    }
                }), r.__suppressDeprecationWarning = !0, a.__suppressDeprecationWarning = !0, s.__suppressDeprecationWarning = !0
            },
            240: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.bodyOpenClassName = t.portalClassName = void 0;
                var r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    },
                    a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    s = n(791),
                    o = m(s),
                    l = m(n(164)),
                    i = m(n(7)),
                    u = m(n(334)),
                    c = function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    }(n(858)),
                    d = n(663),
                    f = m(d),
                    p = n(688);

                function m(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function h(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function y(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }
                var g = t.portalClassName = "ReactModalPortal",
                    b = t.bodyOpenClassName = "ReactModal__Body--open",
                    v = d.canUseDOM && void 0 !== l.default.createPortal,
                    k = function(e) {
                        return document.createElement(e)
                    },
                    w = function() {
                        return v ? l.default.createPortal : l.default.unstable_renderSubtreeIntoContainer
                    };

                function x(e) {
                    return e()
                }
                var S = function(e) {
                    function t() {
                        var e, n, a;
                        h(this, t);
                        for (var s = arguments.length, i = Array(s), c = 0; c < s; c++) i[c] = arguments[c];
                        return n = a = y(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), a.removePortal = function() {
                            !v && l.default.unmountComponentAtNode(a.node);
                            var e = x(a.props.parentSelector);
                            e && e.contains(a.node) ? e.removeChild(a.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')
                        }, a.portalRef = function(e) {
                            a.portal = e
                        }, a.renderPortal = function(e) {
                            var n = w()(a, o.default.createElement(u.default, r({
                                defaultStyles: t.defaultStyles
                            }, e)), a.node);
                            a.portalRef(n)
                        }, y(a, n)
                    }
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), a(t, [{
                        key: "componentDidMount",
                        value: function() {
                            d.canUseDOM && (v || (this.node = k("div")), this.node.className = this.props.portalClassName, x(this.props.parentSelector).appendChild(this.node), !v && this.renderPortal(this.props))
                        }
                    }, {
                        key: "getSnapshotBeforeUpdate",
                        value: function(e) {
                            return {
                                prevParent: x(e.parentSelector),
                                nextParent: x(this.props.parentSelector)
                            }
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t, n) {
                            if (d.canUseDOM) {
                                var r = this.props,
                                    a = r.isOpen,
                                    s = r.portalClassName;
                                e.portalClassName !== s && (this.node.className = s);
                                var o = n.prevParent,
                                    l = n.nextParent;
                                l !== o && (o.removeChild(this.node), l.appendChild(this.node)), (e.isOpen || a) && !v && this.renderPortal(this.props)
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            if (d.canUseDOM && this.node && this.portal) {
                                var e = this.portal.state,
                                    t = Date.now(),
                                    n = e.isOpen && this.props.closeTimeoutMS && (e.closesAt || t + this.props.closeTimeoutMS);
                                n ? (e.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, n - t)) : this.removePortal()
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return d.canUseDOM && v ? (!this.node && v && (this.node = k("div")), w()(o.default.createElement(u.default, r({
                                ref: this.portalRef,
                                defaultStyles: t.defaultStyles
                            }, this.props)), this.node)) : null
                        }
                    }], [{
                        key: "setAppElement",
                        value: function(e) {
                            c.setElement(e)
                        }
                    }]), t
                }(s.Component);
                S.propTypes = {
                    isOpen: i.default.bool.isRequired,
                    style: i.default.shape({
                        content: i.default.object,
                        overlay: i.default.object
                    }),
                    portalClassName: i.default.string,
                    bodyOpenClassName: i.default.string,
                    htmlOpenClassName: i.default.string,
                    className: i.default.oneOfType([i.default.string, i.default.shape({
                        base: i.default.string.isRequired,
                        afterOpen: i.default.string.isRequired,
                        beforeClose: i.default.string.isRequired
                    })]),
                    overlayClassName: i.default.oneOfType([i.default.string, i.default.shape({
                        base: i.default.string.isRequired,
                        afterOpen: i.default.string.isRequired,
                        beforeClose: i.default.string.isRequired
                    })]),
                    appElement: i.default.oneOfType([i.default.instanceOf(f.default), i.default.instanceOf(d.SafeHTMLCollection), i.default.instanceOf(d.SafeNodeList), i.default.arrayOf(i.default.instanceOf(f.default))]),
                    onAfterOpen: i.default.func,
                    onRequestClose: i.default.func,
                    closeTimeoutMS: i.default.number,
                    ariaHideApp: i.default.bool,
                    shouldFocusAfterRender: i.default.bool,
                    shouldCloseOnOverlayClick: i.default.bool,
                    shouldReturnFocusAfterClose: i.default.bool,
                    preventScroll: i.default.bool,
                    parentSelector: i.default.func,
                    aria: i.default.object,
                    data: i.default.object,
                    role: i.default.string,
                    contentLabel: i.default.string,
                    shouldCloseOnEsc: i.default.bool,
                    overlayRef: i.default.func,
                    contentRef: i.default.func,
                    id: i.default.string,
                    overlayElement: i.default.func,
                    contentElement: i.default.func
                }, S.defaultProps = {
                    isOpen: !1,
                    portalClassName: g,
                    bodyOpenClassName: b,
                    role: "dialog",
                    ariaHideApp: !0,
                    closeTimeoutMS: 0,
                    shouldFocusAfterRender: !0,
                    shouldCloseOnEsc: !0,
                    shouldCloseOnOverlayClick: !0,
                    shouldReturnFocusAfterClose: !0,
                    preventScroll: !1,
                    parentSelector: function() {
                        return document.body
                    },
                    overlayElement: function(e, t) {
                        return o.default.createElement("div", e, t)
                    },
                    contentElement: function(e, t) {
                        return o.default.createElement("div", e, t)
                    }
                }, S.defaultStyles = {
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(255, 255, 255, 0.75)"
                    },
                    content: {
                        position: "absolute",
                        top: "40px",
                        left: "40px",
                        right: "40px",
                        bottom: "40px",
                        border: "1px solid #ccc",
                        background: "#fff",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch",
                        borderRadius: "4px",
                        outline: "none",
                        padding: "20px"
                    }
                }, (0, p.polyfill)(S), t.default = S
            },
            334: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    },
                    a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    s = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = n(791),
                    l = y(n(7)),
                    i = h(n(844)),
                    u = y(n(870)),
                    c = h(n(858)),
                    d = h(n(942)),
                    f = n(663),
                    p = y(f),
                    m = y(n(484));

                function h(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }

                function y(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                n(670);
                var g = {
                        overlay: "ReactModal__Overlay",
                        content: "ReactModal__Content"
                    },
                    b = 0,
                    v = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return n.setOverlayRef = function(e) {
                                n.overlay = e, n.props.overlayRef && n.props.overlayRef(e)
                            }, n.setContentRef = function(e) {
                                n.content = e, n.props.contentRef && n.props.contentRef(e)
                            }, n.afterClose = function() {
                                var e = n.props,
                                    t = e.appElement,
                                    r = e.ariaHideApp,
                                    a = e.htmlOpenClassName,
                                    s = e.bodyOpenClassName;
                                s && d.remove(document.body, s), a && d.remove(document.getElementsByTagName("html")[0], a), r && b > 0 && 0 === (b -= 1) && c.show(t), n.props.shouldFocusAfterRender && (n.props.shouldReturnFocusAfterClose ? (i.returnFocus(n.props.preventScroll), i.teardownScopedFocus()) : i.popWithoutFocus()), n.props.onAfterClose && n.props.onAfterClose(), m.default.deregister(n)
                            }, n.open = function() {
                                n.beforeOpen(), n.state.afterOpen && n.state.beforeClose ? (clearTimeout(n.closeTimer), n.setState({
                                    beforeClose: !1
                                })) : (n.props.shouldFocusAfterRender && (i.setupScopedFocus(n.node), i.markForFocusLater()), n.setState({
                                    isOpen: !0
                                }, (function() {
                                    n.openAnimationFrame = requestAnimationFrame((function() {
                                        n.setState({
                                            afterOpen: !0
                                        }), n.props.isOpen && n.props.onAfterOpen && n.props.onAfterOpen({
                                            overlayEl: n.overlay,
                                            contentEl: n.content
                                        })
                                    }))
                                })))
                            }, n.close = function() {
                                n.props.closeTimeoutMS > 0 ? n.closeWithTimeout() : n.closeWithoutTimeout()
                            }, n.focusContent = function() {
                                return n.content && !n.contentHasFocus() && n.content.focus({
                                    preventScroll: !0
                                })
                            }, n.closeWithTimeout = function() {
                                var e = Date.now() + n.props.closeTimeoutMS;
                                n.setState({
                                    beforeClose: !0,
                                    closesAt: e
                                }, (function() {
                                    n.closeTimer = setTimeout(n.closeWithoutTimeout, n.state.closesAt - Date.now())
                                }))
                            }, n.closeWithoutTimeout = function() {
                                n.setState({
                                    beforeClose: !1,
                                    isOpen: !1,
                                    afterOpen: !1,
                                    closesAt: null
                                }, n.afterClose)
                            }, n.handleKeyDown = function(e) {
                                9 === e.keyCode && (0, u.default)(n.content, e), n.props.shouldCloseOnEsc && 27 === e.keyCode && (e.stopPropagation(), n.requestClose(e))
                            }, n.handleOverlayOnClick = function(e) {
                                null === n.shouldClose && (n.shouldClose = !0), n.shouldClose && n.props.shouldCloseOnOverlayClick && (n.ownerHandlesClose() ? n.requestClose(e) : n.focusContent()), n.shouldClose = null
                            }, n.handleContentOnMouseUp = function() {
                                n.shouldClose = !1
                            }, n.handleOverlayOnMouseDown = function(e) {
                                n.props.shouldCloseOnOverlayClick || e.target != n.overlay || e.preventDefault()
                            }, n.handleContentOnClick = function() {
                                n.shouldClose = !1
                            }, n.handleContentOnMouseDown = function() {
                                n.shouldClose = !1
                            }, n.requestClose = function(e) {
                                return n.ownerHandlesClose() && n.props.onRequestClose(e)
                            }, n.ownerHandlesClose = function() {
                                return n.props.onRequestClose
                            }, n.shouldBeClosed = function() {
                                return !n.state.isOpen && !n.state.beforeClose
                            }, n.contentHasFocus = function() {
                                return document.activeElement === n.content || n.content.contains(document.activeElement)
                            }, n.buildClassName = function(e, t) {
                                var r = "object" === ("undefined" === typeof t ? "undefined" : a(t)) ? t : {
                                        base: g[e],
                                        afterOpen: g[e] + "--after-open",
                                        beforeClose: g[e] + "--before-close"
                                    },
                                    s = r.base;
                                return n.state.afterOpen && (s = s + " " + r.afterOpen), n.state.beforeClose && (s = s + " " + r.beforeClose), "string" === typeof t && t ? s + " " + t : s
                            }, n.attributesFromObject = function(e, t) {
                                return Object.keys(t).reduce((function(n, r) {
                                    return n[e + "-" + r] = t[r], n
                                }), {})
                            }, n.state = {
                                afterOpen: !1,
                                beforeClose: !1
                            }, n.shouldClose = null, n.moveFromContentToOverlay = null, n
                        }
                        return function(e, t) {
                            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), s(t, [{
                            key: "componentDidMount",
                            value: function() {
                                this.props.isOpen && this.open()
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function(e, t) {
                                this.props.isOpen && !e.isOpen ? this.open() : !this.props.isOpen && e.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !t.isOpen && this.focusContent()
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame)
                            }
                        }, {
                            key: "beforeOpen",
                            value: function() {
                                var e = this.props,
                                    t = e.appElement,
                                    n = e.ariaHideApp,
                                    r = e.htmlOpenClassName,
                                    a = e.bodyOpenClassName;
                                a && d.add(document.body, a), r && d.add(document.getElementsByTagName("html")[0], r), n && (b += 1, c.hide(t)), m.default.register(this)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.id,
                                    n = e.className,
                                    a = e.overlayClassName,
                                    s = e.defaultStyles,
                                    o = e.children,
                                    l = n ? {} : s.content,
                                    i = a ? {} : s.overlay;
                                if (this.shouldBeClosed()) return null;
                                var u = {
                                        ref: this.setOverlayRef,
                                        className: this.buildClassName("overlay", a),
                                        style: r({}, i, this.props.style.overlay),
                                        onClick: this.handleOverlayOnClick,
                                        onMouseDown: this.handleOverlayOnMouseDown
                                    },
                                    c = r({
                                        id: t,
                                        ref: this.setContentRef,
                                        style: r({}, l, this.props.style.content),
                                        className: this.buildClassName("content", n),
                                        tabIndex: "-1",
                                        onKeyDown: this.handleKeyDown,
                                        onMouseDown: this.handleContentOnMouseDown,
                                        onMouseUp: this.handleContentOnMouseUp,
                                        onClick: this.handleContentOnClick,
                                        role: this.props.role,
                                        "aria-label": this.props.contentLabel
                                    }, this.attributesFromObject("aria", r({
                                        modal: !0
                                    }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
                                        "data-testid": this.props.testId
                                    }),
                                    d = this.props.contentElement(c, o);
                                return this.props.overlayElement(u, d)
                            }
                        }]), t
                    }(o.Component);
                v.defaultProps = {
                    style: {
                        overlay: {},
                        content: {}
                    },
                    defaultStyles: {}
                }, v.propTypes = {
                    isOpen: l.default.bool.isRequired,
                    defaultStyles: l.default.shape({
                        content: l.default.object,
                        overlay: l.default.object
                    }),
                    style: l.default.shape({
                        content: l.default.object,
                        overlay: l.default.object
                    }),
                    className: l.default.oneOfType([l.default.string, l.default.object]),
                    overlayClassName: l.default.oneOfType([l.default.string, l.default.object]),
                    bodyOpenClassName: l.default.string,
                    htmlOpenClassName: l.default.string,
                    ariaHideApp: l.default.bool,
                    appElement: l.default.oneOfType([l.default.instanceOf(p.default), l.default.instanceOf(f.SafeHTMLCollection), l.default.instanceOf(f.SafeNodeList), l.default.arrayOf(l.default.instanceOf(p.default))]),
                    onAfterOpen: l.default.func,
                    onAfterClose: l.default.func,
                    onRequestClose: l.default.func,
                    closeTimeoutMS: l.default.number,
                    shouldFocusAfterRender: l.default.bool,
                    shouldCloseOnOverlayClick: l.default.bool,
                    shouldReturnFocusAfterClose: l.default.bool,
                    preventScroll: l.default.bool,
                    role: l.default.string,
                    contentLabel: l.default.string,
                    aria: l.default.object,
                    data: l.default.object,
                    children: l.default.node,
                    shouldCloseOnEsc: l.default.bool,
                    overlayRef: l.default.func,
                    contentRef: l.default.func,
                    id: l.default.string,
                    overlayElement: l.default.func,
                    contentElement: l.default.func,
                    testId: l.default.string
                }, t.default = v, e.exports = t.default
            },
            858: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.resetState = function() {
                    l && (l.removeAttribute ? l.removeAttribute("aria-hidden") : null != l.length ? l.forEach((function(e) {
                        return e.removeAttribute("aria-hidden")
                    })) : document.querySelectorAll(l).forEach((function(e) {
                        return e.removeAttribute("aria-hidden")
                    })));
                    l = null
                }, t.log = function() {
                    0
                }, t.assertNodeList = i, t.setElement = function(e) {
                    var t = e;
                    if ("string" === typeof t && o.canUseDOM) {
                        var n = document.querySelectorAll(t);
                        i(n, t), t = n
                    }
                    return l = t || l
                }, t.validateElement = u, t.hide = function(e) {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var a, s = u(e)[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                            a.value.setAttribute("aria-hidden", "true")
                        }
                    } catch (o) {
                        n = !0, r = o
                    } finally {
                        try {
                            !t && s.return && s.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                }, t.show = function(e) {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var a, s = u(e)[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                            a.value.removeAttribute("aria-hidden")
                        }
                    } catch (o) {
                        n = !0, r = o
                    } finally {
                        try {
                            !t && s.return && s.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                }, t.documentNotReadyOrSSRTesting = function() {
                    l = null
                };
                var r, a = n(391),
                    s = (r = a) && r.__esModule ? r : {
                        default: r
                    },
                    o = n(663);
                var l = null;

                function i(e, t) {
                    if (!e || !e.length) throw new Error("react-modal: No elements were found for selector " + t + ".")
                }

                function u(e) {
                    var t = e || l;
                    return t ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList ? t : [t] : ((0, s.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), [])
                }
            },
            670: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.resetState = function() {
                    for (var e = [o, l], t = 0; t < e.length; t++) {
                        var n = e[t];
                        n && (n.parentNode && n.parentNode.removeChild(n))
                    }
                    o = l = null, i = []
                }, t.log = function() {
                    console.log("bodyTrap ----------"), console.log(i.length);
                    for (var e = [o, l], t = 0; t < e.length; t++) {
                        var n = e[t] || {};
                        console.log(n.nodeName, n.className, n.id)
                    }
                    console.log("edn bodyTrap ----------")
                };
                var r, a = n(484),
                    s = (r = a) && r.__esModule ? r : {
                        default: r
                    };
                var o = void 0,
                    l = void 0,
                    i = [];

                function u() {
                    0 !== i.length && i[i.length - 1].focusContent()
                }
                s.default.subscribe((function(e, t) {
                    o || l || ((o = document.createElement("div")).setAttribute("data-react-modal-body-trap", ""), o.style.position = "absolute", o.style.opacity = "0", o.setAttribute("tabindex", "0"), o.addEventListener("focus", u), (l = o.cloneNode()).addEventListener("focus", u)), (i = t).length > 0 ? (document.body.firstChild !== o && document.body.insertBefore(o, document.body.firstChild), document.body.lastChild !== l && document.body.appendChild(l)) : (o.parentElement && o.parentElement.removeChild(o), l.parentElement && l.parentElement.removeChild(l))
                }))
            },
            942: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.resetState = function() {
                    var e = document.getElementsByTagName("html")[0];
                    for (var t in n) a(e, n[t]);
                    var s = document.body;
                    for (var o in r) a(s, r[o]);
                    n = {}, r = {}
                }, t.log = function() {
                    0
                };
                var n = {},
                    r = {};

                function a(e, t) {
                    e.classList.remove(t)
                }
                t.add = function(e, t) {
                    return a = e.classList, s = "html" == e.nodeName.toLowerCase() ? n : r, void t.split(" ").forEach((function(e) {
                        ! function(e, t) {
                            e[t] || (e[t] = 0), e[t] += 1
                        }(s, e), a.add(e)
                    }));
                    var a, s
                }, t.remove = function(e, t) {
                    return a = e.classList, s = "html" == e.nodeName.toLowerCase() ? n : r, void t.split(" ").forEach((function(e) {
                        ! function(e, t) {
                            e[t] && (e[t] -= 1)
                        }(s, e), 0 === s[e] && a.remove(e)
                    }));
                    var a, s
                }
            },
            844: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.resetState = function() {
                    o = []
                }, t.log = function() {
                    0
                }, t.handleBlur = u, t.handleFocus = c, t.markForFocusLater = function() {
                    o.push(document.activeElement)
                }, t.returnFocus = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = null;
                    try {
                        return void(0 !== o.length && (t = o.pop()).focus({
                            preventScroll: e
                        }))
                    } catch (n) {
                        console.warn(["You tried to return focus to", t, "but it is not in the DOM anymore"].join(" "))
                    }
                }, t.popWithoutFocus = function() {
                    o.length > 0 && o.pop()
                }, t.setupScopedFocus = function(e) {
                    l = e, window.addEventListener ? (window.addEventListener("blur", u, !1), document.addEventListener("focus", c, !0)) : (window.attachEvent("onBlur", u), document.attachEvent("onFocus", c))
                }, t.teardownScopedFocus = function() {
                    l = null, window.addEventListener ? (window.removeEventListener("blur", u), document.removeEventListener("focus", c)) : (window.detachEvent("onBlur", u), document.detachEvent("onFocus", c))
                };
                var r, a = n(750),
                    s = (r = a) && r.__esModule ? r : {
                        default: r
                    };
                var o = [],
                    l = null,
                    i = !1;

                function u() {
                    i = !0
                }

                function c() {
                    if (i) {
                        if (i = !1, !l) return;
                        setTimeout((function() {
                            l.contains(document.activeElement) || ((0, s.default)(l)[0] || l).focus()
                        }), 0)
                    }
                }
            },
            484: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.log = function() {
                    console.log("portalOpenInstances ----------"), console.log(r.openInstances.length), r.openInstances.forEach((function(e) {
                        return console.log(e)
                    })), console.log("end portalOpenInstances ----------")
                }, t.resetState = function() {
                    r = new n
                };
                var n = function e() {
                        var t = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.register = function(e) {
                            -1 === t.openInstances.indexOf(e) && (t.openInstances.push(e), t.emit("register"))
                        }, this.deregister = function(e) {
                            var n = t.openInstances.indexOf(e); - 1 !== n && (t.openInstances.splice(n, 1), t.emit("deregister"))
                        }, this.subscribe = function(e) {
                            t.subscribers.push(e)
                        }, this.emit = function(e) {
                            t.subscribers.forEach((function(n) {
                                return n(e, t.openInstances.slice())
                            }))
                        }, this.openInstances = [], this.subscribers = []
                    },
                    r = new n;
                t.default = r
            },
            663: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.canUseDOM = t.SafeNodeList = t.SafeHTMLCollection = void 0;
                var r, a = n(618);
                var s = ((r = a) && r.__esModule ? r : {
                        default: r
                    }).default,
                    o = s.canUseDOM ? window.HTMLElement : {};
                t.SafeHTMLCollection = s.canUseDOM ? window.HTMLCollection : {}, t.SafeNodeList = s.canUseDOM ? window.NodeList : {}, t.canUseDOM = s.canUseDOM;
                t.default = o
            },
            870: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t) {
                    var n = (0, s.default)(e);
                    if (!n.length) return void t.preventDefault();
                    var r = void 0,
                        a = t.shiftKey,
                        l = n[0],
                        i = n[n.length - 1],
                        u = o();
                    if (e === u) {
                        if (!a) return;
                        r = i
                    }
                    i !== u || a || (r = l);
                    l === u && a && (r = i);
                    if (r) return t.preventDefault(), void r.focus();
                    var c = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
                    if (null == c || "Chrome" == c[1] || null != /\biPod\b|\biPad\b/g.exec(navigator.userAgent)) return;
                    var d = n.indexOf(u);
                    d > -1 && (d += a ? -1 : 1);
                    if ("undefined" === typeof(r = n[d])) return t.preventDefault(), void(r = a ? i : l).focus();
                    t.preventDefault(), r.focus()
                };
                var r, a = n(750),
                    s = (r = a) && r.__esModule ? r : {
                        default: r
                    };

                function o() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                    return e.activeElement.shadowRoot ? o(e.activeElement.shadowRoot) : e.activeElement
                }
                e.exports = t.default
            },
            750: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e(t) {
                    var n = [].slice.call(t.querySelectorAll("*"), 0).reduce((function(t, n) {
                        return t.concat(n.shadowRoot ? e(n.shadowRoot) : [n])
                    }), []);
                    return n.filter(s)
                };
                var n = /input|select|textarea|button|object/;

                function r(e) {
                    var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
                    if (t && !e.innerHTML) return !0;
                    try {
                        var n = window.getComputedStyle(e);
                        return t ? "visible" !== n.getPropertyValue("overflow") || e.scrollWidth <= 0 && e.scrollHeight <= 0 : "none" == n.getPropertyValue("display")
                    } catch (r) {
                        return console.warn("Failed to inspect element style"), !1
                    }
                }

                function a(e, t) {
                    var a = e.nodeName.toLowerCase();
                    return (n.test(a) && !e.disabled || "a" === a && e.href || t) && function(e) {
                        for (var t = e, n = e.getRootNode && e.getRootNode(); t && t !== document.body;) {
                            if (n && t === n && (t = n.host.parentNode), r(t)) return !1;
                            t = t.parentNode
                        }
                        return !0
                    }(e)
                }

                function s(e) {
                    var t = e.getAttribute("tabindex");
                    null === t && (t = void 0);
                    var n = isNaN(t);
                    return (n || t >= 0) && a(e, !n)
                }
                e.exports = t.default
            },
            948: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, a = n(240),
                    s = (r = a) && r.__esModule ? r : {
                        default: r
                    };
                t.default = s.default, e.exports = t.default
            },
            374: function(e, t, n) {
                "use strict";
                n(725);
                var r = n(791),
                    a = 60103;
                if (t.Fragment = 60107, "function" === typeof Symbol && Symbol.for) {
                    var s = Symbol.for;
                    a = s("react.element"), t.Fragment = s("react.fragment")
                }
                var o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = Object.prototype.hasOwnProperty,
                    i = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function u(e, t, n) {
                    var r, s = {},
                        u = null,
                        c = null;
                    for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t) l.call(t, r) && !i.hasOwnProperty(r) && (s[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === s[r] && (s[r] = t[r]);
                    return {
                        $$typeof: a,
                        type: e,
                        key: u,
                        ref: c,
                        props: s,
                        _owner: o.current
                    }
                }
                t.jsx = u, t.jsxs = u
            },
            117: function(e, t, n) {
                "use strict";
                var r = n(725),
                    a = 60103,
                    s = 60106;
                t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
                var o = 60109,
                    l = 60110,
                    i = 60112;
                t.Suspense = 60113;
                var u = 60115,
                    c = 60116;
                if ("function" === typeof Symbol && Symbol.for) {
                    var d = Symbol.for;
                    a = d("react.element"), s = d("react.portal"), t.Fragment = d("react.fragment"), t.StrictMode = d("react.strict_mode"), t.Profiler = d("react.profiler"), o = d("react.provider"), l = d("react.context"), i = d("react.forward_ref"), t.Suspense = d("react.suspense"), u = d("react.memo"), c = d("react.lazy")
                }
                var f = "function" === typeof Symbol && Symbol.iterator;

                function p(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var m = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    h = {};

                function y(e, t, n) {
                    this.props = e, this.context = t, this.refs = h, this.updater = n || m
                }

                function g() {}

                function b(e, t, n) {
                    this.props = e, this.context = t, this.refs = h, this.updater = n || m
                }
                y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(p(85));
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, y.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, g.prototype = y.prototype;
                var v = b.prototype = new g;
                v.constructor = b, r(v, y.prototype), v.isPureReactComponent = !0;
                var k = {
                        current: null
                    },
                    w = Object.prototype.hasOwnProperty,
                    x = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function S(e, t, n) {
                    var r, s = {},
                        o = null,
                        l = null;
                    if (null != t)
                        for (r in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (o = "" + t.key), t) w.call(t, r) && !x.hasOwnProperty(r) && (s[r] = t[r]);
                    var i = arguments.length - 2;
                    if (1 === i) s.children = n;
                    else if (1 < i) {
                        for (var u = Array(i), c = 0; c < i; c++) u[c] = arguments[c + 2];
                        s.children = u
                    }
                    if (e && e.defaultProps)
                        for (r in i = e.defaultProps) void 0 === s[r] && (s[r] = i[r]);
                    return {
                        $$typeof: a,
                        type: e,
                        key: o,
                        ref: l,
                        props: s,
                        _owner: k.current
                    }
                }

                function E(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === a
                }
                var j = /\/+/g;

                function z(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function C(e, t, n, r, o) {
                    var l = typeof e;
                    "undefined" !== l && "boolean" !== l || (e = null);
                    var i = !1;
                    if (null === e) i = !0;
                    else switch (l) {
                        case "string":
                        case "number":
                            i = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case a:
                                case s:
                                    i = !0
                            }
                    }
                    if (i) return o = o(i = e), e = "" === r ? "." + z(i, 0) : r, Array.isArray(o) ? (n = "", null != e && (n = e.replace(j, "$&/") + "/"), C(o, t, n, "", (function(e) {
                        return e
                    }))) : null != o && (E(o) && (o = function(e, t) {
                        return {
                            $$typeof: a,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(j, "$&/") + "/") + e)), t.push(o)), 1;
                    if (i = 0, r = "" === r ? "." : r + ":", Array.isArray(e))
                        for (var u = 0; u < e.length; u++) {
                            var c = r + z(l = e[u], u);
                            i += C(l, t, n, c, o)
                        } else if (c = function(e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof(e = f && e[f] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof c)
                            for (e = c.call(e), u = 0; !(l = e.next()).done;) i += C(l = l.value, t, n, c = r + z(l, u++), o);
                        else if ("object" === l) throw t = "" + e, Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
                    return i
                }

                function O(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return C(e, r, "", "", (function(e) {
                        return t.call(n, e, a++)
                    })), r
                }

                function _(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        t = t(), e._status = 0, e._result = t, t.then((function(t) {
                            0 === e._status && (t = t.default, e._status = 1, e._result = t)
                        }), (function(t) {
                            0 === e._status && (e._status = 2, e._result = t)
                        }))
                    }
                    if (1 === e._status) return e._result;
                    throw e._result
                }
                var N = {
                    current: null
                };

                function P() {
                    var e = N.current;
                    if (null === e) throw Error(p(321));
                    return e
                }
                var T = {
                    ReactCurrentDispatcher: N,
                    ReactCurrentBatchConfig: {
                        transition: 0
                    },
                    ReactCurrentOwner: k,
                    IsSomeRendererActing: {
                        current: !1
                    },
                    assign: r
                };
                t.Children = {
                    map: O,
                    forEach: function(e, t, n) {
                        O(e, (function() {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function(e) {
                        var t = 0;
                        return O(e, (function() {
                            t++
                        })), t
                    },
                    toArray: function(e) {
                        return O(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!E(e)) throw Error(p(143));
                        return e
                    }
                }, t.Component = y, t.PureComponent = b, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, t.cloneElement = function(e, t, n) {
                    if (null === e || void 0 === e) throw Error(p(267, e));
                    var s = r({}, e.props),
                        o = e.key,
                        l = e.ref,
                        i = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (l = t.ref, i = k.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
                        for (c in t) w.call(t, c) && !x.hasOwnProperty(c) && (s[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c])
                    }
                    var c = arguments.length - 2;
                    if (1 === c) s.children = n;
                    else if (1 < c) {
                        u = Array(c);
                        for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
                        s.children = u
                    }
                    return {
                        $$typeof: a,
                        type: e.type,
                        key: o,
                        ref: l,
                        props: s,
                        _owner: i
                    }
                }, t.createContext = function(e, t) {
                    return void 0 === t && (t = null), (e = {
                        $$typeof: l,
                        _calculateChangedBits: t,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    }).Provider = {
                        $$typeof: o,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = S, t.createFactory = function(e) {
                    var t = S.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: i,
                        render: e
                    }
                }, t.isValidElement = E, t.lazy = function(e) {
                    return {
                        $$typeof: c,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: _
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: u,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.useCallback = function(e, t) {
                    return P().useCallback(e, t)
                }, t.useContext = function(e, t) {
                    return P().useContext(e, t)
                }, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
                    return P().useEffect(e, t)
                }, t.useImperativeHandle = function(e, t, n) {
                    return P().useImperativeHandle(e, t, n)
                }, t.useLayoutEffect = function(e, t) {
                    return P().useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return P().useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return P().useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return P().useRef(e)
                }, t.useState = function(e) {
                    return P().useState(e)
                }, t.version = "17.0.2"
            },
            791: function(e, t, n) {
                "use strict";
                e.exports = n(117)
            },
            184: function(e, t, n) {
                "use strict";
                e.exports = n(374)
            },
            813: function(e, t) {
                "use strict";
                var n, r, a, s;
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var o = performance;
                    t.unstable_now = function() {
                        return o.now()
                    }
                } else {
                    var l = Date,
                        i = l.now();
                    t.unstable_now = function() {
                        return l.now() - i
                    }
                }
                if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                    var u = null,
                        c = null,
                        d = function e() {
                            if (null !== u) try {
                                var n = t.unstable_now();
                                u(!0, n), u = null
                            } catch (r) {
                                throw setTimeout(e, 0), r
                            }
                        };
                    n = function(e) {
                        null !== u ? setTimeout(n, 0, e) : (u = e, setTimeout(d, 0))
                    }, r = function(e, t) {
                        c = setTimeout(e, t)
                    }, a = function() {
                        clearTimeout(c)
                    }, t.unstable_shouldYield = function() {
                        return !1
                    }, s = t.unstable_forceFrameRate = function() {}
                } else {
                    var f = window.setTimeout,
                        p = window.clearTimeout;
                    if ("undefined" !== typeof console) {
                        var m = window.cancelAnimationFrame;
                        "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" !== typeof m && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
                    }
                    var h = !1,
                        y = null,
                        g = -1,
                        b = 5,
                        v = 0;
                    t.unstable_shouldYield = function() {
                        return t.unstable_now() >= v
                    }, s = function() {}, t.unstable_forceFrameRate = function(e) {
                        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < e ? Math.floor(1e3 / e) : 5
                    };
                    var k = new MessageChannel,
                        w = k.port2;
                    k.port1.onmessage = function() {
                        if (null !== y) {
                            var e = t.unstable_now();
                            v = e + b;
                            try {
                                y(!0, e) ? w.postMessage(null) : (h = !1, y = null)
                            } catch (n) {
                                throw w.postMessage(null), n
                            }
                        } else h = !1
                    }, n = function(e) {
                        y = e, h || (h = !0, w.postMessage(null))
                    }, r = function(e, n) {
                        g = f((function() {
                            e(t.unstable_now())
                        }), n)
                    }, a = function() {
                        p(g), g = -1
                    }
                }

                function x(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (;;) {
                        var r = n - 1 >>> 1,
                            a = e[r];
                        if (!(void 0 !== a && 0 < j(a, t))) break e;
                        e[r] = t, e[n] = a, n = r
                    }
                }

                function S(e) {
                    return void 0 === (e = e[0]) ? null : e
                }

                function E(e) {
                    var t = e[0];
                    if (void 0 !== t) {
                        var n = e.pop();
                        if (n !== t) {
                            e[0] = n;
                            e: for (var r = 0, a = e.length; r < a;) {
                                var s = 2 * (r + 1) - 1,
                                    o = e[s],
                                    l = s + 1,
                                    i = e[l];
                                if (void 0 !== o && 0 > j(o, n)) void 0 !== i && 0 > j(i, o) ? (e[r] = i, e[l] = n, r = l) : (e[r] = o, e[s] = n, r = s);
                                else {
                                    if (!(void 0 !== i && 0 > j(i, n))) break e;
                                    e[r] = i, e[l] = n, r = l
                                }
                            }
                        }
                        return t
                    }
                    return null
                }

                function j(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                var z = [],
                    C = [],
                    O = 1,
                    _ = null,
                    N = 3,
                    P = !1,
                    T = !1,
                    L = !1;

                function M(e) {
                    for (var t = S(C); null !== t;) {
                        if (null === t.callback) E(C);
                        else {
                            if (!(t.startTime <= e)) break;
                            E(C), t.sortIndex = t.expirationTime, x(z, t)
                        }
                        t = S(C)
                    }
                }

                function R(e) {
                    if (L = !1, M(e), !T)
                        if (null !== S(z)) T = !0, n(D);
                        else {
                            var t = S(C);
                            null !== t && r(R, t.startTime - e)
                        }
                }

                function D(e, n) {
                    T = !1, L && (L = !1, a()), P = !0;
                    var s = N;
                    try {
                        for (M(n), _ = S(z); null !== _ && (!(_.expirationTime > n) || e && !t.unstable_shouldYield());) {
                            var o = _.callback;
                            if ("function" === typeof o) {
                                _.callback = null, N = _.priorityLevel;
                                var l = o(_.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof l ? _.callback = l : _ === S(z) && E(z), M(n)
                            } else E(z);
                            _ = S(z)
                        }
                        if (null !== _) var i = !0;
                        else {
                            var u = S(C);
                            null !== u && r(R, u.startTime - n), i = !1
                        }
                        return i
                    } finally {
                        _ = null, N = s, P = !1
                    }
                }
                var F = s;
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_continueExecution = function() {
                    T || P || (T = !0, n(D))
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return N
                }, t.unstable_getFirstCallbackNode = function() {
                    return S(z)
                }, t.unstable_next = function(e) {
                    switch (N) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = N
                    }
                    var n = N;
                    N = t;
                    try {
                        return e()
                    } finally {
                        N = n
                    }
                }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = F, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = N;
                    N = e;
                    try {
                        return t()
                    } finally {
                        N = n
                    }
                }, t.unstable_scheduleCallback = function(e, s, o) {
                    var l = t.unstable_now();
                    switch ("object" === typeof o && null !== o ? o = "number" === typeof(o = o.delay) && 0 < o ? l + o : l : o = l, e) {
                        case 1:
                            var i = -1;
                            break;
                        case 2:
                            i = 250;
                            break;
                        case 5:
                            i = 1073741823;
                            break;
                        case 4:
                            i = 1e4;
                            break;
                        default:
                            i = 5e3
                    }
                    return e = {
                        id: O++,
                        callback: s,
                        priorityLevel: e,
                        startTime: o,
                        expirationTime: i = o + i,
                        sortIndex: -1
                    }, o > l ? (e.sortIndex = o, x(C, e), null === S(z) && e === S(C) && (L ? a() : L = !0, r(R, o - l))) : (e.sortIndex = i, x(z, e), T || P || (T = !0, n(D))), e
                }, t.unstable_wrapCallback = function(e) {
                    var t = N;
                    return function() {
                        var n = N;
                        N = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            N = n
                        }
                    }
                }
            },
            296: function(e, t, n) {
                "use strict";
                e.exports = n(813)
            },
            391: function(e) {
                "use strict";
                var t = function() {};
                e.exports = t
            },
            295: function(e, t, n) {
                "use strict";
                e.exports = n.p + "static/media/Cross.cbf77228e847522eff11.png"
            },
            895: function(e, t, n) {
                "use strict";
                e.exports = n.p + "static/media/Success.df533be8f86a57bc5946.png"
            }
        },
        t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var s = t[r] = {
            exports: {}
        };
        return e[r](s, s.exports, n), s.exports
    }
    n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.p = "/word-master/",
        function() {
            "use strict";
            var e = n(791),
                t = n(164);

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                if (e) {
                    if ("string" === typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                }
            }

            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) return s(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || o(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, s = [],
                            o = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (s.push(r.value), !t || s.length !== t); o = !0);
                        } catch (i) {
                            l = !0, a = i
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return s
                    }
                }(e, t) || o(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var u, c = [
                    ["W", "E", "T", "U", "I", "O", "P"],
                    ["A", "S", "J", "K", "L"],
                    ["N", "M"]
                ],
                d = ["A", "E", "I", "J", "K", "L", "M", "N", "O", "P", "S", "T", "U", "W"],
                f = "green",
                p = "yellow",
                m = "gray",
                h = "unguessed",
                y = n(184),
                g = function(t) {
                    var n = t.letterStatuses,
                        r = t.addLetter,
                        a = t.onEnterPress,
                        s = t.onDeletePress,
                        o = t.gameDisabled,
                        l = function(e) {
                            switch (n[e]) {
                                case f:
                                    return "bg-n-green text-gray-50";
                                case p:
                                    return "bg-yellow-500 text-gray-50";
                                case m:
                                    return "bg-n-gray text-gray-50";
                                default:
                                    return "text-primary dark:text-primary-dark"
                            }
                        },
                        i = (0, e.useCallback)((function(e) {
                            if (!o) {
                                var t = e.key.toUpperCase();
                                d.includes(t) ? r(t) : "ENTER" === t ? (a(), e.preventDefault()) : "BACKSPACE" === t && s()
                            }
                        }), [r, a, s, o]);
                    return (0, e.useEffect)((function() {
                        return window.addEventListener("keydown", i),
                            function() {
                                return window.removeEventListener("keydown", i)
                            }
                    }), [i]), (0, y.jsx)("div", {
                        className: "w-full flex flex-col items-center mb-3 select-none",
                        children: c.map((function(e, t) {
                            return (0, y.jsxs)("div", {
                                className: "w-full flex justify-center my-[5px]",
                                children: [2 === t && (0, y.jsx)("button", {
                                    onClick: a,
                                    className: "h-10 xxs:h-14 w-12 px-1 text-xs font-medium mx-[3.5px] rounded nm-flat-background-sm dark:nm-flat-background-dark-sm text-primary dark:text-primary-dark",
                                    children: "ENTER"
                                }), e.map((function(e) {
                                    return (0, y.jsx)("button", {
                                        onClick: function() {
                                            return function(e) {
                                                e = e.toLowerCase(), window.dispatchEvent(new KeyboardEvent("keydown", {
                                                    key: e
                                                }))
                                            }(e)
                                        },
                                        className: "h-10 xxs:h-14 w-[2rem] sm:w-10 mx-[3.5px] text-sm font-medium rounded-[4px] nm-flat-background-sm dark:nm-flat-background-dark-sm",
                                        children: (0, y.jsx)("div", {
                                            className: "h-full w-full rounded-[3px] flex items-center justify-center ".concat(l(e)),
                                            children: e
                                        })
                                    }, e)
                                })), 2 === t && (0, y.jsx)("button", {
                                    onClick: s,
                                    className: "h-10 xxs:h-14 w-12 flex items-center justify-center nm-flat-background-sm dark:nm-flat-background-dark-sm text-primary dark:text-primary-dark mx-[3.5px] text-sm  rounded",
                                    children: (0, y.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, y.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 1.5,
                                            d: "M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                                        })
                                    })
                                })]
                            }, t)
                        }))
                    })
                },
                //b = ['anpa', 'ante', 'awen', 'esun', 'insa', 'jaki', 'jelo', 'kala', 'kama', 'kasi', 'kili', 'kule', 'kute', 'lape', 'laso', 'lawa', 'lete', 'lili', 'lipu', 'loje', 'luka', 'lupa', 'mama', 'mani', 'meli', 'mije', 'moku', 'moli', 'musi', 'mute', 'nasa', 'nena', 'nimi', 'noka', 'olin', 'open', 'pali', 'pana', 'pini', 'pipi', 'poka', 'poki', 'pona', 'sama', 'seli', 'selo', 'seme', 'sewi', 'sike', 'sina', 'sona', 'suli', 'suno', 'supa', 'suwi', 'taso', 'tawa', 'telo', 'toki', 'tomo', 'unpa', 'walo', 'waso', 'wawa', 'weka', 'wile', 'leko', 'meso', 'soko', 'kese', 'kiki', 'loka', 'misa', 'neja', 'pake', 'pata', 'peto', 'powe', 'samu', 'soto', 'suke', 'taki', 'teje', 'toma', 'tuli', 'enko', 'jaku', 'jami', 'jans', 'jatu', 'jume', 'kajo', 'kapa', 'kisa', 'kulu', 'loku', 'natu', 'nele', 'nuwa', 'omen', 'patu', 'peta', 'pika', 'pipo', 'puwa', 'take'],
				b=['anpa', 'ante', 'awen', 'esun', 'insa', 'jaki', 'jelo', 'kala', 'kama', 'kasi', 'kili', 'kule', 'kute', 'lape', 'laso', 'lawa', 'lete', 'lili', 'lipu', 'loje', 'luka', 'lupa', 'mama', 'mani', 'meli', 'mije', 'moku', 'moli', 'musi', 'mute', 'nasa', 'nena', 'nimi', 'noka', 'olin', 'open', 'pali', 'pana', 'pini', 'pipi', 'poka', 'poki', 'pona', 'sama', 'seli', 'selo', 'seme', 'sewi', 'sike', 'sina', 'sona', 'suli', 'suno', 'supa', 'suwi', 'taso', 'tawa', 'telo', 'toki', 'tomo', 'unpa', 'walo', 'waso', 'wawa', 'weka', 'wile'],
                v = {anpa: !0,ante: !0,awen: !0,esun: !0,insa: !0,jaki: !0,jelo: !0,kala: !0,kama: !0,kasi: !0,kili: !0,kule: !0,kute: !0,lape: !0,laso: !0,lawa: !0,lete: !0,lili: !0,lipu: !0,loje: !0,luka: !0,lupa: !0,mama: !0,mani: !0,meli: !0,mije: !0,moku: !0,moli: !0,musi: !0,mute: !0,nasa: !0,nena: !0,nimi: !0,noka: !0,olin: !0,open: !0,pali: !0,pana: !0,pini: !0,pipi: !0,poka: !0,poki: !0,pona: !0,sama: !0,seli: !0,selo: !0,seme: !0,sewi: !0,sike: !0,sina: !0,sona: !0,suli: !0,suno: !0,supa: !0,suwi: !0,taso: !0,tawa: !0,telo: !0,toki: !0,tomo: !0,unpa: !0,walo: !0,waso: !0,wawa: !0,weka: !0,wile: !0,leko: !0,meso: !0,soko: !0,kese: !0,kiki: !0,loka: !0,misa: !0,neja: !0,pake: !0,pata: !0,peto: !0,powe: !0,samu: !0,soto: !0,suke: !0,taki: !0,teje: !0,toma: !0,tuli: !0,enko: !0,jaku: !0,jami: !0,jans: !0,jatu: !0,jume: !0,kajo: !0,kapa: !0,kisa: !0,kulu: !0,loku: !0,natu: !0,nele: !0,nuwa: !0,omen: !0,patu: !0,peta: !0,pika: !0,pipo: !0,puwa: !0,take: !0},
                k = function(t, n) {
                    var r = i((0, e.useState)((function() {
                            try {
                                var e = window.localStorage.getItem(t);
                                return e ? JSON.parse(e) : n
                            } catch (r) {
                                return console.log(r), n
                            }
                        })), 2),
                        a = r[0],
                        s = r[1];
                    return [a, function(e) {
                        try {
                            var n = e instanceof Function ? e(a) : e;
                            s(n), window.localStorage.setItem(t, JSON.stringify(n))
                        } catch (r) {
                            console.log(r)
                        }
                    }]
                },
                w = ["title", "titleId"];

            function x() {
                return x = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, x.apply(this, arguments)
            }

            function S(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function E(t, n) {
                var r = t.title,
                    a = t.titleId,
                    s = S(t, w);
                return e.createElement("svg", x({
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    ref: n,
                    "aria-labelledby": a
                }, s), r ? e.createElement("title", {
                    id: a
                }, r) : null, u || (u = e.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                })))
            }
            var j, z, C = e.forwardRef(E),
                O = (n.p, ["title", "titleId"]);

            function _() {
                return _ = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, _.apply(this, arguments)
            }

            function N(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function P(t, n) {
                var r = t.title,
                    a = t.titleId,
                    s = N(t, O);
                return e.createElement("svg", _({
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    ref: n,
                    "aria-labelledby": a
                }, s), r ? e.createElement("title", {
                    id: a
                }, r) : null, j || (j = e.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                })), z || (z = e.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                })))
            }
            var T, L = e.forwardRef(P),
                M = (n.p, ["title", "titleId"]);

            function R() {
                return R = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, R.apply(this, arguments)
            }

            function D(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function F(t, n) {
                var r = t.title,
                    a = t.titleId,
                    s = D(t, M);
                return e.createElement("svg", R({
                    role: "img",
                    height: "100%",
                    width: "100%",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: n,
                    "aria-labelledby": a
                }, s), void 0 === r ? e.createElement("title", {
                    id: a
                }, "GitHub") : r ? e.createElement("title", {
                    id: a
                }, r) : null, T || (T = e.createElement("path", {
                    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                })))
            }
            var A, I = e.forwardRef(F),
                U = (n.p, ["title", "titleId"]);

            function q() {
                return q = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, q.apply(this, arguments)
            }

            function W(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function B(t, n) {
                var r = t.title,
                    a = t.titleId,
                    s = W(t, U);
                return e.createElement("svg", q({
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "100%",
                    width: "100%",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    ref: n,
                    "aria-labelledby": a
                }, s), r ? e.createElement("title", {
                    id: a
                }, r) : null, A || (A = e.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                })))
            }
            var H = e.forwardRef(B),
                V = (n.p, n(948)),
                $ = n.n(V);
            $().setAppElement("#root");
            var Q, K, Y, G = function(e) {
                var t = e.isOpen,
                    n = e.handleClose,
                    r = e.darkMode,
                    a = e.styles;
                return (0, y.jsx)($(), {
                    isOpen: t,
                    onRequestClose: n,
                    style: a,
                    contentLabel: "Game Info Modal",
                    children: (0, y.jsxs)("div", {
                        className: "h-full ".concat(r ? "dark" : ""),
                        children: [(0, y.jsx)("button", {
                            className: "absolute top-4 right-4 rounded-full nm-flat-background dark:nm-flat-background-dark text-primary dark:text-primary-dark p-1 w-6 h-6 sm:p-2 sm:h-8 sm:w-8 hover:nm-inset-background dark:hover:nm-inset-background-dark",
                            onClick: n,
                            children: (0, y.jsx)(H, {})
                        }), (0, y.jsxs)("div", {
                            className: "h-full flex flex-col items-center justify-center max-w-[390px] mx-auto pt-9 text-primary dark:text-primary-dark",
                            children: [(0, y.jsxs)("div", {
                                className: "flex-1 w-full sm:text-base text-sm",
                                children: [(0, y.jsx)("h1", {
                                    className: "text-center sm:text-3xl text-2xl",
                                    children: "nasin pi musi ni"
                                }), (0, y.jsxs)("ul", {
                                    className: "list-disc pl-5 block sm:text-base text-sm",
                                    children: [(0, y.jsx)("li", {
                                        className: "mt-6 mb-2",
                                        children: "sina wile sona e nimi pona. sina ken pana e nimi luka taso."
                                    }), (0, y.jsx)("li", {
                                        className: "mb-2",
                                        children: "sina ken pana e nimi ale pi toki pona."
                                    }), (0, y.jsx)("li", {
                                        className: "mb-2",
                                        children: "pana li pini la, sitelen lili ale li kama laso anu jelo anu pimeja walo lon nimi pana."
                                    })]
                                }), (0, y.jsxs)("div", {
                                    className: "mb-3 mt-8 flex items-center",
                                    children: [(0, y.jsx)("span", {
                                        className: "nm-inset-n-green text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full",
                                        children: "W"
                                    }), (0, y.jsx)("span", {
                                        className: "mx-2",
                                        children: "="
                                    }), (0, y.jsx)("span", {
                                        children: "sitelen li pona, li lon poka pona"
                                    })]
                                }), (0, y.jsxs)("div", {
                                    className: "mb-3",
                                    children: [(0, y.jsx)("span", {
                                        className: "nm-inset-yellow-500 text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full",
                                        children: "W"
                                    }), (0, y.jsx)("span", {
                                        className: "mx-2",
                                        children: "="
                                    }), (0, y.jsx)("span", {
                                        children: "sitelen li pona, li lon poka ike"
                                    })]
                                }), (0, y.jsx)("span", {
                                    className: "nm-inset-n-gray text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full",
                                    children: "W"
                                }), (0, y.jsx)("span", {
                                    className: "mx-2",
                                    children: "="
                                }), (0, y.jsx)("span", {
                                    children: "sitelen ike"
                                })]
                            }), (0, y.jsxs)("div", {
                                className: "flex justify-center sm:text-base text-sm",
                                children: [(0, y.jsx)("span", {
                                    children: "pali ni li kepeken nasin Opensource lon"
                                }), (0, y.jsx)("a", {
                                    className: "ml-[6px] rounded-full h-5 w-5 sm:h-6 sm:w-6",
                                    href: "https://github.com/octokatherine/word-master",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, y.jsx)(I, {})
                                })]
                            })]
                        })]
                    })
                })
            };

            function X() {
                return X = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, X.apply(this, arguments)
            }

            function J(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    s = Object.keys(e);
                for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }

            function Z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ee(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" === typeof e) return Z(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Z(e, t) : void 0
                            }
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0;
                        return function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (n = e[Symbol.iterator]()).next.bind(n)
            }

            function te(e, t) {
                if (e in t) {
                    for (var n = t[e], r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) a[s - 2] = arguments[s];
                    return "function" === typeof n ? n.apply(void 0, a) : n
                }
                var o = new Error('Tried to handle "' + e + '" but there is no handler defined. Only defined handlers are: ' + Object.keys(t).map((function(e) {
                    return '"' + e + '"'
                })).join(", ") + ".");
                throw Error.captureStackTrace && Error.captureStackTrace(o, te), o
            }

            function ne(e) {
                var t = e.props,
                    n = e.slot,
                    r = e.defaultTag,
                    a = e.features,
                    s = e.visible,
                    o = void 0 === s || s,
                    l = e.name;
                if (o) return re(t, n, r, l);
                var i = null != a ? a : Q.None;
                if (i & Q.Static) {
                    var u = t.static,
                        c = void 0 !== u && u,
                        d = J(t, ["static"]);
                    if (c) return re(d, n, r, l)
                }
                if (i & Q.RenderStrategy) {
                    var f, p = t.unmount,
                        m = void 0 === p || p,
                        h = J(t, ["unmount"]);
                    return te(m ? K.Unmount : K.Hidden, ((f = {})[K.Unmount] = function() {
                        return null
                    }, f[K.Hidden] = function() {
                        return re(X({}, h, {
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }), n, r, l)
                    }, f))
                }
                return re(t, n, r, l)
            }

            function re(t, n, r, a) {
                var s;
                void 0 === n && (n = {});
                var o = ae(t, ["unmount", "static"]),
                    l = o.as,
                    i = void 0 === l ? r : l,
                    u = o.children,
                    c = o.refName,
                    d = void 0 === c ? "ref" : c,
                    f = J(o, ["as", "children", "refName"]),
                    p = void 0 !== t.ref ? ((s = {})[d] = t.ref, s) : {},
                    m = "function" === typeof u ? u(n) : u;
                if (f.className && "function" === typeof f.className && (f.className = f.className(n)), i === e.Fragment && Object.keys(f).length > 0) {
                    if (!(0, e.isValidElement)(m) || Array.isArray(m) && m.length > 1) throw new Error(['Passing props on "Fragment"!', "", "The current component <" + a + ' /> is rendering a "Fragment".', "However we need to passthrough the following props:", Object.keys(f).map((function(e) {
                        return "  - " + e
                    })).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((function(e) {
                        return "  - " + e
                    })).join("\n")].join("\n"));
                    return (0, e.cloneElement)(m, Object.assign({}, function(e, t, n) {
                        for (var r, a = Object.assign({}, e), s = function() {
                                var n, s = r.value;
                                void 0 !== e[s] && void 0 !== t[s] && Object.assign(a, ((n = {})[s] = function(n) {
                                    n.defaultPrevented || e[s](n), n.defaultPrevented || t[s](n)
                                }, n))
                            }, o = ee(n); !(r = o()).done;) s();
                        return a
                    }(function(e) {
                        var t = Object.assign({}, e);
                        for (var n in t) void 0 === t[n] && delete t[n];
                        return t
                    }(ae(f, ["ref"])), m.props, ["onClick"]), p))
                }
                return (0, e.createElement)(i, Object.assign({}, ae(f, ["ref"]), i !== e.Fragment && p), m)
            }

            function ae(e, t) {
                void 0 === t && (t = []);
                for (var n, r = Object.assign({}, e), a = ee(t); !(n = a()).done;) {
                    var s = n.value;
                    s in r && delete r[s]
                }
                return r
            }

            function se(e) {
                for (var t, n, r = e.parentElement, a = null; r && !(r instanceof HTMLFieldSetElement);) r instanceof HTMLLegendElement && (a = r), r = r.parentElement;
                var s = null != (t = "" === (null == (n = r) ? void 0 : n.getAttribute("disabled"))) && t;
                return (!s || ! function(e) {
                    if (!e) return !1;
                    var t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (t instanceof HTMLLegendElement) return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(a)) && s
            }! function(e) {
                e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static"
            }(Q || (Q = {})),
            function(e) {
                e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden"
            }(K || (K = {})),
            function(e) {
                e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab"
            }(Y || (Y = {}));
            var oe = "undefined" !== typeof window ? e.useLayoutEffect : e.useEffect,
                le = {
                    serverHandoffComplete: !1
                };
            var ie = 0;

            function ue() {
                return ++ie
            }

            function ce() {
                var t = function() {
                        var t = (0, e.useState)(le.serverHandoffComplete),
                            n = t[0],
                            r = t[1];
                        return (0, e.useEffect)((function() {
                            !0 !== n && r(!0)
                        }), [n]), (0, e.useEffect)((function() {
                            !1 === le.serverHandoffComplete && (le.serverHandoffComplete = !0)
                        }), []), n
                    }(),
                    n = (0, e.useState)(t ? ue : null),
                    r = n[0],
                    a = n[1];
                return oe((function() {
                    null === r && a(ue())
                }), [r]), null != r ? "" + r : void 0
            }
            var de = (0, e.createContext)(null);

            function fe() {
                var t = (0, e.useContext)(de);
                if (null === t) {
                    var n = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(n, fe), n
                }
                return t
            }

            function pe(e) {
                var t;
                if (e.type) return e.type;
                var n = null != (t = e.as) ? t : "button";
                return "string" === typeof n && "button" === n.toLowerCase() ? "button" : void 0
            }

            function me(t, n) {
                var r = (0, e.useState)((function() {
                        return pe(t)
                    })),
                    a = r[0],
                    s = r[1];
                return oe((function() {
                    s(pe(t))
                }), [t.type, t.as]), oe((function() {
                    a || n.current && n.current instanceof HTMLButtonElement && !n.current.hasAttribute("type") && s("button")
                }), [a, n]), a
            }
            var he = (0, e.createContext)(null);

            function ye() {
                var t = (0, e.useContext)(he);
                if (null === t) {
                    var n = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(n, ye), n
                }
                return t
            }
            var ge = (0, e.createContext)(null);
            ge.displayName = "GroupContext";
            var be = e.Fragment;

            function ve(t) {
                var n = t.checked,
                    r = t.onChange,
                    a = J(t, ["checked", "onChange"]),
                    s = "headlessui-switch-" + ce(),
                    o = (0, e.useContext)(ge),
                    l = (0, e.useRef)(null),
                    i = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        var a = (0, e.useRef)(n);
                        return (0, e.useEffect)((function() {
                            a.current = n
                        }), [n]), (0, e.useCallback)((function(e) {
                            for (var t, n = ee(a.current); !(t = n()).done;) {
                                var r = t.value;
                                null != r && ("function" === typeof r ? r(e) : r.current = e)
                            }
                        }), [a])
                    }(l, null === o ? null : o.setSwitch),
                    u = (0, e.useCallback)((function() {
                        return r(!n)
                    }), [r, n]),
                    c = (0, e.useCallback)((function(e) {
                        if (se(e.currentTarget)) return e.preventDefault();
                        e.preventDefault(), u()
                    }), [u]),
                    d = (0, e.useCallback)((function(e) {
                        e.key !== Y.Tab && e.preventDefault(), e.key === Y.Space && u()
                    }), [u]),
                    f = (0, e.useCallback)((function(e) {
                        return e.preventDefault()
                    }), []),
                    p = (0, e.useMemo)((function() {
                        return {
                            checked: n
                        }
                    }), [n]);
                return ne({
                    props: X({}, a, {
                        id: s,
                        ref: i,
                        role: "switch",
                        type: me(t, l),
                        tabIndex: 0,
                        "aria-checked": n,
                        "aria-labelledby": null == o ? void 0 : o.labelledby,
                        "aria-describedby": null == o ? void 0 : o.describedby,
                        onClick: c,
                        onKeyUp: d,
                        onKeyPress: f
                    }),
                    slot: p,
                    defaultTag: "button",
                    name: "Switch"
                })
            }
            ve.Group = function(t) {
                var n = (0, e.useState)(null),
                    r = n[0],
                    a = n[1],
                    s = function() {
                        var t = (0, e.useState)([]),
                            n = t[0],
                            r = t[1];
                        return [n.length > 0 ? n.join(" ") : void 0, (0, e.useMemo)((function() {
                            return function(t) {
                                var n = (0, e.useCallback)((function(e) {
                                        return r((function(t) {
                                                return [].concat(t, [e])
                                            })),
                                            function() {
                                                return r((function(t) {
                                                    var n = t.slice(),
                                                        r = n.indexOf(e);
                                                    return -1 !== r && n.splice(r, 1), n
                                                }))
                                            }
                                    }), []),
                                    a = (0, e.useMemo)((function() {
                                        return {
                                            register: n,
                                            slot: t.slot,
                                            name: t.name,
                                            props: t.props
                                        }
                                    }), [n, t.slot, t.name, t.props]);
                                return e.createElement(he.Provider, {
                                    value: a
                                }, t.children)
                            }
                        }), [r])]
                    }(),
                    o = s[0],
                    l = s[1],
                    i = function() {
                        var t = (0, e.useState)([]),
                            n = t[0],
                            r = t[1];
                        return [n.length > 0 ? n.join(" ") : void 0, (0, e.useMemo)((function() {
                            return function(t) {
                                var n = (0, e.useCallback)((function(e) {
                                        return r((function(t) {
                                                return [].concat(t, [e])
                                            })),
                                            function() {
                                                return r((function(t) {
                                                    var n = t.slice(),
                                                        r = n.indexOf(e);
                                                    return -1 !== r && n.splice(r, 1), n
                                                }))
                                            }
                                    }), []),
                                    a = (0, e.useMemo)((function() {
                                        return {
                                            register: n,
                                            slot: t.slot,
                                            name: t.name,
                                            props: t.props
                                        }
                                    }), [n, t.slot, t.name, t.props]);
                                return e.createElement(de.Provider, {
                                    value: a
                                }, t.children)
                            }
                        }), [r])]
                    }(),
                    u = i[0],
                    c = i[1],
                    d = (0, e.useMemo)((function() {
                        return {
                            switch: r,
                            setSwitch: a,
                            labelledby: o,
                            describedby: u
                        }
                    }), [r, a, o, u]);
                return e.createElement(c, {
                    name: "Switch.Description"
                }, e.createElement(l, {
                    name: "Switch.Label",
                    props: {
                        onClick: function() {
                            r && (r.click(), r.focus({
                                preventScroll: !0
                            }))
                        }
                    }
                }, e.createElement(ge.Provider, {
                    value: d
                }, ne({
                    props: t,
                    defaultTag: be,
                    name: "Switch.Group"
                }))))
            }, ve.Label = function(e) {
                var t = e.passive,
                    n = void 0 !== t && t,
                    r = J(e, ["passive"]),
                    a = ye(),
                    s = "headlessui-label-" + ce();
                oe((function() {
                    return a.register(s)
                }), [s, a.register]);
                var o = X({}, a.props, {
                        id: s
                    }),
                    l = X({}, r, o);
                return n && delete l.onClick, ne({
                    props: l,
                    slot: a.slot || {},
                    defaultTag: "label",
                    name: a.name || "Label"
                })
            }, ve.Description = function(e) {
                var t = fe(),
                    n = "headlessui-description-" + ce();
                oe((function() {
                    return t.register(n)
                }), [n, t.register]);
                var r = e,
                    a = X({}, t.props, {
                        id: n
                    });
                return ne({
                    props: X({}, r, a),
                    slot: t.slot || {},
                    defaultTag: "p",
                    name: t.name || "Description"
                })
            }, $().setAppElement("#root");
            var ke = function(e) {
                    var t = e.isOpen,
                        n = e.handleClose,
                        r = e.styles,
                        a = e.darkMode,
                        s = e.toggleDarkMode;
                    return (0, y.jsx)($(), {
                        isOpen: t,
                        onRequestClose: n,
                        style: r,
                        contentLabel: "Settings Modal",
                        children: (0, y.jsx)("div", {
                            className: "h-full ".concat(a ? "dark" : ""),
                            children: (0, y.jsxs)("div", {
                                className: "h-full flex flex-col items-center justify-center max-w-[390px] mx-auto pt-9 text-primary dark:text-primary-dark ",
                                children: [(0, y.jsx)("h1", {
                                    className: "text-center mb-4 sm:text-3xl text-2xl",
                                    children: "ante"
                                }), (0, y.jsxs)("div", {
                                    className: "flex-1 w-full border-b border-slate-400 mb-4",
                                    children: [(0, y.jsx)("button", {
                                        className: "absolute top-4 right-4 rounded-full nm-flat-background dark:nm-flat-background-dark text-primary dark:text-primary-dark p-1 w-6 h-6 sm:p-2 sm:h-8 sm:w-8 hover:nm-inset-background dark:hover:nm-inset-background-dark",
                                        onClick: n,
                                        children: (0, y.jsx)(H, {})
                                    }), (0, y.jsxs)(ve.Group, {
                                        as: "div",
                                        className: "flex items-center",
                                        children: [(0, y.jsx)(ve, {
                                            checked: a,
                                            onChange: s,
                                            className: "".concat(a ? "nm-inset-yellow-500 border-background-dark" : "nm-inset-background border-transparent", " relative inline-flex flex-shrink-0 h-8 w-14 p-1 border-2 rounded-full cursor-pointer transition ease-in-out duration-200"),
                                            children: (0, y.jsx)("span", {
                                                "aria-hidden": "true",
                                                className: "".concat(a ? "translate-x-[1.55rem]" : "translate-x-0", " absolute pointer-events-none inline-block top-1/2 -translate-y-1/2 h-5 w-5 shadow rounded-full bg-white transform ring-0 transition ease-in-out duration-200")
                                            })
                                        }), (0, y.jsx)(ve.Label, {
                                            as: "span",
                                            className: "ml-3 cursor-pointer",
                                            children: "o pimeja"
                                        })]
                                    })]
                                }), (0, y.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [(0, y.jsxs)("div", {
                                        className: "mb-4",
                                        children: ["ni ale li pona tawa sina la, sina ken pana e mani tawa jan pali ilo", " ", (0, y.jsx)("a", {
                                            href: "https://www.buymeacoffee.com/katherinecodes",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: ""
                                        }), (0, y.jsx)("span", {
                                            className: "ml-1 text-xs",
                                            children: "\ud83d\udc9b"
                                        })]
                                    }), (0, y.jsx)("a", {
                                        href: "https://www.buymeacoffee.com/katherinecodes",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "nm-flat-background dark:nm-flat-background-dark rounded-xl hover:nm-inset-background dark:hover:nm-inset-background-dark",
                                        children: (0, y.jsx)("img", {
                                            alt: "o pana e mani",
                                            src: "https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=katherinecodes&button_colour=eab308&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                we = n(895),
                xe = n(295);
            $().setAppElement("#root");
            var Se = function(e) {
                    var t = e.isOpen,
                        n = e.handleClose,
                        r = e.styles,
                        a = e.darkMode,
                        s = e.gameState,
                        o = e.state,
                        l = e.currentStreak,
                        i = e.longestStreak,
                        u = e.answer,
                        c = e.playAgain,
						k=e.kule,
                        d = function() {
                            return (0, y.jsx)("div", {
                                className: a ? "dark" : "",
                                children: [(0, y.jsx)("button", {
                                    type: "button",
                                    className: "rounded-lg px-6 py-2 mt-8 text-lg nm-flat-background dark:nm-flat-background-dark hover:nm-inset-background dark:hover:nm-inset-background-dark text-primary dark:text-primary-dark",
                                    onClick: c,
                                    children: "musi sin"
                                }),(0, y.jsx)("button", {
                                    type: "button",
                                    className: "rounded-lg z-10 px-6 py-2 text-lg nm-flat-background dark:nm-flat-background-dark hover:nm-inset-background dark:hover:nm-inset-background-dark text-primary dark:text-primary-dark",
                                    onClick: k,
                                    children: "o awen e kule"
                                })]
                            })
                        };
                    return (0, y.jsx)($(), {
                        isOpen: t,
                        onRequestClose: n,
                        style: r,
                        contentLabel: "Game End Modal",
                        children: (0, y.jsx)("div", {
                            className: a ? "dark" : "",
                            children: (0, y.jsxs)("div", {
                                className: "h-full flex flex-col items-center justify-center max-w-[300px] mx-auto text-primary dark:text-primary-dark",
                                children: [(0, y.jsx)("button", {
                                    className: "absolute top-4 right-4 rounded-full nm-flat-background dark:nm-flat-background-dark text-primary dark:text-primary-dark p-1 w-6 h-6 sm:p-2 sm:h-8 sm:w-8 hover:nm-inset-background dark:hover:nm-inset-background-dark",
                                    onClick: n,
                                    children: (0, y.jsx)(H, {})
                                }), s === o.won && (0, y.jsxs)(y.Fragment, {
                                    children: [(0, y.jsx)("img", {
                                        src: we,
                                        alt: "pona a",
                                        height: "auto",
                                        width: "auto"
                                    }), (0, y.jsx)("h1", {
                                        className: " text-3xl",
                                        children: "pona a!"
                                    }), (0, y.jsxs)("p", {
                                        className: "mt-6",
                                        children: ["tenpo ni la, sina awen wawa lon musi pi mute ni: ", (0, y.jsx)("strong", {
                                            children: l
                                        }), " ", l > 4 && "\ud83d\udd25"]
                                    }), (0, y.jsxs)("p", {
                                        children: ["tenpo pini la, sina awen wawa lon musi pi mute ni: ", (0, y.jsx)("strong", {
                                            children: i
                                        })]
                                    })]
                                }), s === o.lost && (0, y.jsxs)(y.Fragment, {
                                    children: [(0, y.jsx)("img", {
                                        src: xe,
                                        alt: "pona a!",
                                        height: "auto",
                                        width: "80%"
                                    }), (0, y.jsxs)("div", {
                                        className: "text-primary dark:text-primary-dark text-4xl text-center",
                                        children: [(0, y.jsx)("p", {
                                            children: "pakala!"
                                        }), (0, y.jsxs)("p", {
                                            className: "mt-3 text-2xl",
                                            children: ["nimi pona li ", (0, y.jsx)("strong", {
                                                children: u
                                            })]
                                        }), (0, y.jsxs)("p", {
                                            className: "mt-6 text-base",
                                            children: ["tenpo ni la, sina awen wawa lon musi pi mute ni: ", (0, y.jsx)("strong", {
                                                children: l
                                            }), " ", l > 4 && "\ud83d\udd25"]
                                        }), (0, y.jsxs)("p", {
                                            className: "text-base",
                                            children: ["tenpo pini la, sina awen wawa lon musi pi mute ni: ", (0, y.jsx)("strong", {
                                                children: i
                                            })]
                                        })]
                                    })]
                                }), (0, y.jsx)(d, {})]
                            })
                        })
                    })
                },
                Ee = {
                    playing: "playing",
                    won: "won",
                    lost: "lost"
                };
            var je = function() {
                var t = {
                        answer: function() {
                            return function() {
                                var e = Math.floor(Math.random() * b.length);
                                return b[e].toUpperCase()
                            }()
                        },
                        gameState: Ee.playing,
                        board: [
                            ["", "", "", ""],
                            ["", "", "", ""],
                            ["", "", "", ""],
                            ["", "", "", ""],
                            //["", "", "", "", ""],
                            ["", "", "", ""]
                        ],
                        cellStatuses: function() {
                            return Array(5).fill(Array(4).fill(h))
                        },
                        currentRow: 0,
                        currentCol: 0,
                        letterStatuses: function() {
                            var e = {};
                            return d.forEach((function(t) {
                                e[t] = h
                            })), e
                        }
                    },
                    n = i((0, e.useState)(t.answer), 2),
                    s = n[0],
                    o = n[1],
                    u = i((0, e.useState)(t.gameState), 2),
                    c = u[0],
                    w = u[1],
                    x = i((0, e.useState)(t.board), 2),
                    S = x[0],
                    E = x[1],
                    j = i((0, e.useState)(t.cellStatuses), 2),
                    z = j[0],
                    O = j[1],
                    _ = i((0, e.useState)(t.currentRow), 2),
                    N = _[0],
                    P = _[1],
                    T = i((0, e.useState)(t.currentCol), 2),
                    M = T[0],
                    R = T[1],
                    D = i((0, e.useState)(t.letterStatuses), 2),
                    F = D[0],
                    A = D[1],
                    I = i((0, e.useState)(!1), 2),
                    U = I[0],
                    q = I[1],
                    W = i(k("current-streak", 0), 2),
                    B = W[0],
                    H = W[1],
                    V = i(k("longest-streak", 0), 2),
                    $ = V[0],
                    Q = V[1],
                    K = (0, e.useRef)(!1),
                    Y = i((0, e.useState)(!1), 2),
                    X = Y[0],
                    J = Y[1],
                    Z = i(k("first-time", !0), 2),
                    ee = Z[0],
                    te = Z[1],
                    ne = i((0, e.useState)(ee), 2),
                    re = ne[0],
                    ae = ne[1],
                    se = i((0, e.useState)(!1), 2),
                    oe = se[0],
                    le = se[1],
                    ie = function() {
                        return J(!1)
                    },
                    ue = i(k("dark-mode", !1), 2),
                    ce = ue[0],
                    de = ue[1];
                (0, e.useEffect)((function() {
                    c !== Ee.playing && setTimeout((function() {
                        J(!0)
                    }), 500)
                }), [c]), (0, e.useEffect)((function() {
                    K.current || (c === Ee.won ? (B >= $ && Q((function(e) {
                        return e + 1
                    })), H((function(e) {
                        return e + 1
                    })), K.current = !0) : c === Ee.lost && (H(0), K.current = !0))
                }), [c, B, $, Q, H]);
                var fe = function(e, t, n) {
                        if (e === N) return n ? "nm-inset-background dark:nm-inset-background-dark text-primary dark:text-primary-dark ".concat(U ? "border border-red-800" : "") : "nm-flat-background dark:nm-flat-background-dark text-primary dark:text-primary-dark";
                        switch (z[e][t]) {
                            case f:
                                return "nm-inset-n-green text-gray-50";
                            case p:
                                return "nm-inset-yellow-500 text-gray-50";
                            case m:
                                return "nm-inset-n-gray text-gray-50";
                            default:
                                return "nm-flat-background dark:nm-flat-background-dark text-primary dark:text-primary-dark"
                        }
                    },
                    pe = function(e, t) {
                        O((function(n) {
                            var r = l(n);
                            r[t] = l(n[t]);
                            for (var a = e.length, o = s.split(""), i = 0; i < a; i++) r[t][i] = m;
                            for (var u = a - 1; u >= 0; u--) e[u] === s[u] && (r[t][u] = f, o.splice(u, 1));
                            for (var c = 0; c < a; c++) o.includes(e[c]) && r[t][c] !== f && (r[t][c] = p, o.splice(o.indexOf(e[c]), 1));
                            return r
                        }))
                    };
                (0, e.useEffect)((function() {
                    var e = l(z).reverse().find((function(e) {
                        return e[0] !== h
                    }));
                    e && e.every((function(e) {
                        return e === f
                    })) ? w(Ee.won) : 5 === N && w(Ee.lost)
                }), [z, N]);
                var me = function(e) {
                        A((function(t) {
                            for (var n = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? a(Object(n), !0).forEach((function(t) {
                                            r(e, t, n[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }))
                                    }
                                    return e
                                }({}, t), o = e.length, l = 0; l < o; l++) n[e[l]] !== f && (e[l] === s[l] ? n[e[l]] = f : s.includes(e[l]) ? n[e[l]] = p : n[e[l]] = m);
                            return n
                        }))
                    },
                    he = function() {
                        o(t.answer), w(t.gameState), E(t.board), O(t.cellStatuses), P(t.currentRow), R(t.currentCol), A(t.letterStatuses), ie(), K.current = !1
                    },
					ku=async function(){
						var lili=document.getElementsByClassName("text-lg");
						var toki="Wordle (tok):\n";
						for (var nanpa=0;nanpa<lili.length;nanpa++){
							if(nanpa%4==0){toki=toki+"\n";}
							if(lili[nanpa].classList[0]=="nm-inset-n-gray"){
								toki=toki+"â¬›";
							}
							else if(lili[nanpa].classList[0]=="nm-inset-yellow-500"){
								toki=toki+"ðŸŸ¨";
							}
							else if(lili[nanpa].classList[0]=="nm-inset-n-green"){
								toki=toki+"ðŸŸ©";
							}else{
								nanpa=lili.length;
							}
						}
						copyToClipboard(toki);
					},
                    ye = {
                        overlay: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: ce ? "hsl(231, 16%, 25%)" : "hsl(231, 16%, 92%)",
                            zIndex: 99
                        },
                        content: {
                            top: "50%",
                            left: "50%",
                            right: "auto",
                            bottom: "auto",
                            transform: "translate(-50%, -50%)",
                            height: "calc(100% - 2rem)",
                            width: "calc(100% - 2rem)",
                            backgroundColor: ce ? "hsl(231, 16%, 25%)" : "hsl(231, 16%, 92%)",
                            boxShadow: "".concat(ce ? "0.2em 0.2em calc(0.2em * 2) #252834, calc(0.2em * -1) calc(0.2em * -1) calc(0.2em * 2) #43475C" : "0.2em 0.2em calc(0.2em * 2) #A3A7BD, calc(0.2em * -1) calc(0.2em * -1) calc(0.2em * 2) #FFFFFF"),
                            border: "none",
                            borderRadius: "1rem",
                            maxWidth: "475px",
                            maxHeight: "650px",
                            position: "relative"
                        }
                    };
                return (0, y.jsx)("div", {
                    className: ce ? "dark" : "",
                    children: (0, y.jsxs)("div", {
                        className: "flex flex-col justify-between h-fill bg-background dark:bg-background-dark",
                        children: [(0, y.jsxs)("header", {
                            className: "flex items-center py-2 px-3 text-primary dark:text-primary-dark",
                            children: [(0, y.jsx)("button", {
                                type: "button",
                                onClick: function() {
                                    return le(!0)
                                },
                                className: "p-1 rounded-full",
                                children: (0, y.jsx)(L, {})
                            }), (0, y.jsx)("h1", {
                                className: "flex-1 text-center text-xl xxs:text-2xl sm:text-4xl tracking-wide font-bold font-righteous",
                                children: "WAWA NIMI"
                            }), (0, y.jsx)("button", {
                                type: "button",
                                onClick: function() {
                                    return ae(!0)
                                },
                                className: "p-1 rounded-full",
                                children: (0, y.jsx)(C, {})
                            })]
                        }), (0, y.jsx)("div", {
                            className: "flex items-center flex-col py-3",
                            children: (0, y.jsx)("div", {
                                className: "grid grid-cols-4 grid-flow-row gap-4",
                                children: S.map((function(e, t) {
                                    return e.map((function(e, n) {
                                        return (0, y.jsx)("span", {
                                            className: "".concat(fe(t, n, e), " inline-flex items-center font-medium justify-center text-lg w-[14vw] h-[14vw] xs:w-14 xs:h-14 sm:w-20 sm:h-20 rounded-full"),
                                            children: e
                                        }, n)
                                    }))
                                }))
                            })
                        }), (0, y.jsx)(G, {
                            isOpen: re,
                            handleClose: function() {
                                te(!1), ae(!1)
                            },
                            darkMode: ce,
                            styles: ye
                        }), (0, y.jsx)(Se, {
                            isOpen: X,
                            handleClose: ie,
                            styles: ye,
                            darkMode: ce,
                            gameState: c,
                            state: Ee,
                            currentStreak: B,
                            longestStreak: $,
                            answer: s,
                            playAgain: he,
							kule:ku
                        }), (0, y.jsx)(ke, {
                            isOpen: oe,
                            handleClose: function() {
                                return le(!1)
                            },
                            styles: ye,
                            darkMode: ce,
                            toggleDarkMode: function() {
                                return de((function(e) {
                                    return !e
                                }))
                            }
                        }), c === Ee.playing ? (0, y.jsx)(g, {
                            letterStatuses: F,
                            addLetter: function(e) {
                                q(!1), E((function(t) {
                                    if (M > 3) return t;
                                    var n = l(t);
                                    return n[N][M] = e, n
                                })), M < 4 && R((function(e) {
                                    return e + 1
                                }))
                            },
                            onEnterPress: function() {
                                var e = S[N].join("");
                                ! function(e) {
                                    return !(e.length < 4) && v[e.toLowerCase()]
                                }(e) ? q(!0): 6 !== N && (pe(e, N), me(e), P((function(e) {
                                    return e + 1
                                })), R(0))
                            },
                            onDeletePress: function() {
                                q(!1), 0 !== M && (E((function(e) {
                                    var t = l(e);
                                    return t[N][M - 1] = "", t
                                })), R((function(e) {
                                    return e - 1
                                })))
                            },
                            gameDisabled: c !== Ee.playing
                        }) : (0, y.jsx)("div", {
                            className: "flex-1 flex pt-8 items-start justify-center",
                            children: (0, y.jsx)("div", {
                                className: ce ? "dark" : "",
                                children: [(0, y.jsx)("button", {
                                    type: "button",
                                    className: "rounded-lg z-10 px-6 py-2 text-lg nm-flat-background dark:nm-flat-background-dark hover:nm-inset-background dark:hover:nm-inset-background-dark text-primary dark:text-primary-dark",
                                    onClick: he,
                                    children: "musi sin"
                                }),
								(0, y.jsx)("button", {
                                    type: "button",
                                    className: "rounded-lg z-10 px-6 py-2 text-lg nm-flat-background dark:nm-flat-background-dark hover:nm-inset-background dark:hover:nm-inset-background-dark text-primary dark:text-primary-dark",
                                    onClick: ku,
                                    children: "o awen e kule"
                                })
								]
                            })
                        })]
                    })
                })
            };
            t.render((0, y.jsx)(je, {}), document.getElementById("root"))
        }()
}();
//# sourceMappingURL=main.39a7d28d.js.map
