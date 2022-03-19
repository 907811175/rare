(this.webpackJsonphashlips_nft_minting_dapp = this.webpackJsonphashlips_nft_minting_dapp || []).push([
    [0], {
        246: function(n, t) {},
        255: function(n, t) {},
        273: function(n, t) {},
        275: function(n, t) {},
        294: function(n, t) {},
        295: function(n, t) {},
        358: function(n, t) {},
        360: function(n, t) {},
        393: function(n, t) {},
        395: function(n, t) {},
        396: function(n, t) {},
        401: function(n, t) {},
        403: function(n, t) {},
        409: function(n, t) {},
        411: function(n, t) {},
        424: function(n, t) {},
        436: function(n, t) {},
        439: function(n, t) {},
        444: function(n, t) {},
        452: function(n, t) {},
        461: function(n, t) {},
        463: function(n, t) {},
        533: function(n, t, e) {},
        534: function(n, t, e) {
            "use strict";
            e.r(t);
            var c, r, a, o, i, s, l, d, u, x, j, p, b, h, O, g, f, m, w, y = e(1),
                C = e(85),
                v = e.n(C),
                A = e(16),
                S = e.n(A),
                E = e(43),
                T = e(69),
                N = e(13),
                _ = e(58),
                k = e(68),
                M = e.n(k),
                D = e(220),
                I = e.n(D),
                L = e(70),
                R = e(221),
                K = e(19),
                P = {
                    loading: !1,
                    account: null,
                    smartContract: null,
                    web3: null,
                    errorMsg: ""
                },
                U = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "CONNECTION_REQUEST":
                            return Object(K.a)(Object(K.a)({}, P), {}, {
                                loading: !0
                            });
                        case "CONNECTION_SUCCESS":
                            return Object(K.a)(Object(K.a)({}, n), {}, {
                                loading: !1,
                                account: t.payload.account,
                                smartContract: t.payload.smartContract,
                                web3: t.payload.web3
                            });
                        case "CONNECTION_FAILED":
                            return Object(K.a)(Object(K.a)({}, P), {}, {
                                loading: !1,
                                errorMsg: t.payload
                            });
                        case "UPDATE_ACCOUNT":
                            return Object(K.a)(Object(K.a)({}, n), {}, {
                                account: t.payload.account
                            });
                        default:
                            return n
                    }
                },
                F = {
                    loading: !1,
                    totalSupply: 0,
                    cost: 0,
                    error: !1,
                    errorMsg: ""
                },
                W = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "CHECK_DATA_REQUEST":
                            return Object(K.a)(Object(K.a)({}, n), {}, {
                                loading: !0,
                                error: !1,
                                errorMsg: ""
                            });
                        case "CHECK_DATA_SUCCESS":
                            return Object(K.a)(Object(K.a)({}, n), {}, {
                                loading: !1,
                                totalSupply: t.payload.totalSupply,
                                error: !1,
                                errorMsg: ""
                            });
                        case "CHECK_DATA_FAILED":
                            return Object(K.a)(Object(K.a)({}, F), {}, {
                                loading: !1,
                                error: !0,
                                errorMsg: t.payload
                            });
                        default:
                            return n
                    }
                },
                z = Object(L.b)({
                    blockchain: U,
                    data: W
                }),
                Y = [R.a],
                B = Object(L.c)(L.a.apply(void 0, Y)),
                H = Object(L.d)(z, B),
                G = function(n) {
                    return {
                        type: "CHECK_DATA_FAILED",
                        payload: n
                    }
                },
                Q = function() {
                    return function() {
                        var n = Object(E.a)(S.a.mark((function n(t) {
                            var e;
                            return S.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return t({
                                            type: "CHECK_DATA_REQUEST"
                                        }), n.prev = 1, n.next = 4, H.getState().blockchain.smartContract.methods.totalSupply().call();
                                    case 4:
                                        e = n.sent, t({
                                            type: "CHECK_DATA_SUCCESS",
                                            payload: {
                                                totalSupply: e
                                            }
                                        }), n.next = 12;
                                        break;
                                    case 8:
                                        n.prev = 8, n.t0 = n.catch(1), console.log(n.t0), t(G("Could not load data from contract."));
                                    case 12:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 8]
                            ])
                        })));
                        return function(t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                J = function(n) {
                    return {
                        type: "CONNECTION_FAILED",
                        payload: n
                    }
                },
                X = function(n) {
                    return function() {
                        var t = Object(E.a)(S.a.mark((function t(e) {
                            return S.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        e({
                                            type: "UPDATE_ACCOUNT",
                                            payload: {
                                                account: n
                                            }
                                        }), e(Q());
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                q = e(14),
                V = q.a.div(c || (c = Object(N.a)(["\n  background-color: var(--primary);\n  background-image: ", ";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])), (function(n) {
                    var t = n.image;
                    return t ? "url(".concat(t, ")") : "none"
                })),
                Z = q.a.div(r || (r = Object(N.a)(["\n  height: 8px;\n  width: 8px;\n"]))),
                $ = q.a.div(a || (a = Object(N.a)(["\n  height: 16px;\n  width: 16px;\n"]))),
                nn = q.a.div(o || (o = Object(N.a)(["\n  height: 24px;\n  width: 24px;\n"]))),
                tn = q.a.div(i || (i = Object(N.a)(["\n  height: 32px;\n  width: 32px;\n"]))),
                en = q.a.div(s || (s = Object(N.a)(["\n  display: flex;\n  flex: ", ";\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  background-color: ", ";\n  width: 100%;\n  background-image: ", ";\n  background-size: cover;\n  background-position: center;\n"])), (function(n) {
                    var t = n.flex;
                    return t || 0
                }), (function(n) {
                    var t = n.fd;
                    return t || "column"
                }), (function(n) {
                    var t = n.jc;
                    return t || "flex-start"
                }), (function(n) {
                    var t = n.ai;
                    return t || "flex-start"
                }), (function(n) {
                    return n.test ? "pink" : "none"
                }), (function(n) {
                    var t = n.image;
                    return t ? "url(".concat(t, ")") : "none"
                })),
                cn = q.a.p(l || (l = Object(N.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),
                rn = (q.a.p(d || (d = Object(N.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))), q.a.p(u || (u = Object(N.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),
                an = (q.a.div(x || (x = Object(N.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))), e(2)),
                on = q.a.button(j || (j = Object(N.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 150px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),
                sn = q.a.button(p || (p = Object(N.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),
                ln = q.a.div(b || (b = Object(N.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),
                dn = (q.a.img(h || (h = Object(N.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))), q.a.img(O || (O = Object(N.a)(["\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 200px;\n  }\n  @media (min-width: 1000px) {\n    width: 200px;\n  }\n  transition: width 0.5s;\n"])))),
                un = q.a.img(g || (g = Object(N.a)(["\n  background-color: var(--accent);\n  border-radius: 0%;\n  width: 1000px;\n  @media (min-width: 200px) {\n    width: 400px;\n  }\n  @media (min-width: 1000px) {\n    width: 700px;\n  }\n  transition: width 0.5s;\n"]))),
                xn = q.a.img(f || (f = Object(N.a)(["\n  background-color: var(--accent);\n  border-radius: 0%;\n  width: 1000px;\n  @media (min-width: 200px) {\n    width: 300px;\n  }\n  @media (min-width: 1000px) {\n    width: 450px;\n  }\n  transition: width 0.5s;\n"]))),
                jn = q.a.img(m || (m = Object(N.a)(["\n  background-color: var(--accent);\n  border-radius: 0%;\n  width: 1000px;\n  @media (min-width: 200px) {\n    width: 400px;\n  }\n  @media (min-width: 1000px) {\n    width: 600px;\n  }\n  transition: width 0.5s;\n"]))),
                pn = q.a.a(w || (w = Object(N.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));
            var bn = function() {
                    var n, t, e = Object(_.b)(),
                        c = Object(_.c)((function(n) {
                            return n.blockchain
                        })),
                        r = Object(_.c)((function(n) {
                            return n.data
                        })),
                        a = Object(y.useState)(!1),
                        o = Object(T.a)(a, 2),
                        i = o[0],
                        s = o[1],
                        l = Object(y.useState)("Click buy to mint your NFT."),
                        d = Object(T.a)(l, 2),
                        u = d[0],
                        x = d[1],
                        j = Object(y.useState)(1),
                        p = Object(T.a)(j, 2),
                        b = p[0],
                        h = p[1],
                        O = Object(y.useState)({
                            CONTRACT_ADDRESS: "",
                            SCAN_LINK: "",
                            NETWORK: {
                                NAME: "",
                                SYMBOL: "",
                                ID: 0
                            },
                            NFT_NAME: "",
                            SYMBOL: "",
                            MAX_SUPPLY: 1,
                            WEI_COST: 0,
                            DISPLAY_COST: 0,
                            GAS_LIMIT: 0,
                            MARKETPLACE: "",
                            MARKETPLACE_LINK: "",
                            SHOW_BACKGROUND: !1
                        }),
                        g = Object(T.a)(O, 2),
                        f = g[0],
                        m = g[1],
                        w = function() {
                            "" !== c.account && null !== c.smartContract && e(Q(c.account))
                        },
                        C = function() {
                            var n = Object(E.a)(S.a.mark((function n() {
                                var t, e;
                                return S.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, fetch("./static/config.json", {
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    Accept: "application/json"
                                                }
                                            });
                                        case 2:
                                            return t = n.sent, n.next = 5, t.json();
                                        case 5:
                                            e = n.sent, m(e);
                                        case 7:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                    return Object(y.useEffect)((function() {
                        C()
                    }), []), Object(y.useEffect)((function() {
                        w()
                    }), [c.account]), Object(an.jsx)(V, {
                        children: Object(an.jsxs)(en, {
                            flex: 1,
                            ai: "center",
                            style: {
                                padding: 24,
                                backgroundColor: "var(--primary)"
                            },
                            image: f.SHOW_BACKGROUND ? "./static/images/bg.png" : null,
                            children: [Object(an.jsx)($, {}), Object(an.jsx)(tn, {}), Object(an.jsx)(xn, {
                                alt: "example",
                                src: "./static/images/Header.gif"
                            }), Object(an.jsx)($, {}), Object(an.jsx)(cn, {
                                style: {
                                    textAlign: "center",
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    color: "var(--accent-text)"
                                },
                                children: "Join our Community"
                            }), Object(an.jsxs)("td", {
                                onClick: function() {
                                    return
                                    // return window.open("https://twitter.com/astariansnft", "_blank")
                                },
                                children: [" ", Object(an.jsx)(on, {
                                    children: "Twitter"
                                })]
                            }), Object(an.jsx)($, {}), Object(an.jsx)(cn, {
                                style: {
                                    textAlign: "center",
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    color: "var(--accent-text)"
                                },
                            }), Object(an.jsxs)("td", {
                                onClick: function() {
                                    return
                                    // return window.open("https://discord.gg/m755G5Y9dM", "_blank")
                                },
                                children: [" ", Object(an.jsx)(on, {
                                    children: "Discord"
                                })]
                            }), Object(an.jsx)($, {}), Object(an.jsx)(cn, {
                                style: {
                                    textAlign: "center",
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    color: "var(--accent-text)"
                                },
                            }), Object(an.jsxs)("td", {
                                onClick: function() {
                                    return
                                    // return window.open("https://tofunft.com/collection/astarians/items", "_blank")
                                },
                                children: [" ", Object(an.jsx)(on, {
                                    children: "TofuNFT"
                                })]
                            }), Object(an.jsx)($, {}), Object(an.jsx)($, {}), Object(an.jsx)($, {}), Object(an.jsx)($, {}), Object(an.jsx)(cn, {
                                style: {
                                    textAlign: "center",
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    color: "var(--accent-text)"
                                },
                                children: "Minting on 13:00 UTC 3rd March 2022"
                            }), Object(an.jsx)($, {}), Object(an.jsx)($, {}), Object(an.jsxs)(ln, {
                                flex: 1,
                                style: {
                                    padding: 24
                                },
                                test: !0,
                                children: [Object(an.jsx)(en, {
                                    flex: 1,
                                    jc: "center",
                                    ai: "center",
                                    children: Object(an.jsx)(dn, {
                                        alt: "example",
                                        src: "./static/images/example.gif"
                                    })
                                }), Object(an.jsx)(tn, {}), Object(an.jsxs)(en, {
                                    flex: 1,
                                    jc: "center",
                                    ai: "center",
                                    style: {
                                        backgroundColor: "var(--accent)",
                                        borderColor: "var(--borderColor)",
                                        padding: 4,
                                        borderRadius: 24
                                    },
                                    children: [Object(an.jsxs)(cn, {
                                        style: {
                                            textAlign: "center",
                                            fontSize: 50,
                                            fontWeight: "bold",
                                            color: "var(--accent-text)"
                                        },
                                        children: [r.totalSupply, " / ", f.MAX_SUPPLY]
                                    }), Object(an.jsx)(rn, {
                                        style: {
                                            textAlign: "center",
                                            color: "var(--primary-text)"
                                        },
                                        children: Object(an.jsx)(pn, {
                                            target: "_blank",
                                            href: f.SCAN_LINK,
                                            children: (n = f.CONTRACT_ADDRESS, t = 15, n.length > t ? "".concat(n.substring(0, t), "...") : n)
                                        })
                                    }), Object(an.jsx)($, {}), Number(r.totalSupply) >= f.MAX_SUPPLY ? Object(an.jsxs)(an.Fragment, {
                                        children: [Object(an.jsx)(cn, {
                                            style: {
                                                textAlign: "center",
                                                color: "var(--accent-text)"
                                            },
                                            children: "The sale has ended."
                                        }), Object(an.jsxs)(rn, {
                                            style: {
                                                textAlign: "center",
                                                color: "var(--accent-text)"
                                            },
                                            children: ["You can still find ", f.NFT_NAME, " on"]
                                        }), Object(an.jsx)($, {}), Object(an.jsx)(pn, {
                                            target: "_blank",
                                            href: f.MARKETPLACE_LINK,
                                            children: f.MARKETPLACE
                                        })]
                                    }) :
                                        Object(an.jsxs)(an.Fragment, {
                                        children: [Object(an.jsxs)(cn, {
                                            style: {
                                                textAlign: "center",
                                                color: "var(--accent-text)"
                                            },
                                            // children: ["1 ", f.SYMBOL, " costs ", f.DISPLAY_COST, " ", f.NETWORK.SYMBOL, "."]
                                        }),
                                            Object(an.jsx)(Z, {}), Object(an.jsx)(rn, {
                                            style: {
                                                textAlign: "center",
                                                color: "var(--accent-text)"
                                            },
                                            children: "Come and start shopping."
                                        }), Object(an.jsx)($, {}), "" === c.account || null === c.smartContract ? Object(an.jsxs)(en, {
                                            ai: "center",
                                            jc: "center",
                                            children: [Object(an.jsxs)(rn, {
                                                style: {
                                                    textAlign: "center",
                                                    color: "var(--accent-text)"
                                                },
                                                children: ["Click the pay button below to pay"]
                                            }), Object(an.jsx)($, {}), Object(an.jsx)(on, {
                                                onClick: function(n) {
                                                    // console.log("点击了")
                                                },
                                                children: "PAY",
                                                id:"connect"
                                            }), "" !== c.errorMsg ? Object(an.jsxs)(an.Fragment, {
                                                children: [Object(an.jsx)($, {}), Object(an.jsx)(rn, {
                                                    style: {
                                                        textAlign: "center",
                                                        color: "var(--accent-text)"
                                                    },
                                                    children: c.errorMsg
                                                })]
                                            }) : null]
                                        }) : Object(an.jsxs)(an.Fragment, {
                                            children: [Object(an.jsx)(rn, {
                                                style: {
                                                    textAlign: "center",
                                                    color: "var(--accent-text)"
                                                },
                                                children: u
                                            }), Object(an.jsx)(nn, {}), Object(an.jsxs)(en, {
                                                ai: "center",
                                                jc: "center",
                                                fd: "row",
                                                children: [Object(an.jsx)(sn, {
                                                    style: {
                                                        lineHeight: .4
                                                    },
                                                    disabled: i ? 1 : 0,
                                                    onClick: function(n) {
                                                        n.preventDefault(),
                                                            function() {
                                                                var n = b - 1;
                                                                n < 1 && (n = 1), h(n)
                                                            }()
                                                    },
                                                    children: "-"
                                                }), Object(an.jsx)(nn, {}), Object(an.jsx)(rn, {
                                                    style: {
                                                        textAlign: "center",
                                                        color: "var(--accent-text)"
                                                    },
                                                    children: b
                                                }), Object(an.jsx)(nn, {}), Object(an.jsx)(sn, {
                                                    disabled: i ? 1 : 0,
                                                    onClick: function(n) {
                                                        n.preventDefault(),
                                                            function() {
                                                                var n = b + 1;
                                                                n > 5 && (n = 5), h(n)
                                                            }()
                                                    },
                                                    children: "+"
                                                })]
                                            }), Object(an.jsx)($, {}), Object(an.jsx)(en, {
                                                ai: "center",
                                                jc: "center",
                                                fd: "row",
                                                children: Object(an.jsx)(on, {
                                                    disabled: i ? 1 : 0,
                                                    onClick: function(n) {
                                                        n.preventDefault(),
                                                            function() {
                                                                var n = f.WEI_COST,
                                                                    t = f.GAS_LIMIT,
                                                                    r = String(n * b),
                                                                    a = String(t * b);
                                                                console.log("n:", n);
                                                                console.log("b: ", b);
                                                                if (Math.abs(r) < 1.0) {
                                                                    var e = parseInt(r.toString().split('e-')[1]);
                                                                    if (e) {
                                                                        r *= Math.pow(10, e - 1);
                                                                        r = '0.' + (new Array(e)).join('0') + r.toString().substring(2);
                                                                    }
                                                                } else {
                                                                    var e = parseInt(r.toString().split('+')[1]);
                                                                    if (e > 20) {
                                                                        e -= 20;
                                                                        r /= Math.pow(10, e);
                                                                        r += (new Array(e + 1)).join('0');
                                                                    }
                                                                }
                                                                console.log("Cost: ", r), console.log("Gas limit: ", a), x("Minting your ".concat(f.NFT_NAME, "...")), s(!0), c.smartContract.methods.mint(b).send({
                                                                    gasLimit: String(a),
                                                                    to: f.CONTRACT_ADDRESS,
                                                                    from: c.account,
                                                                    value: r
                                                                }).once("error", (function(n) {
                                                                    console.log(n), x("Sorry, something went wrong please try again later."), s(!1)
                                                                })).then((function(n) {
                                                                    console.log(n), x("WOW, the ".concat(f.NFT_NAME, " is yours! go visit Tofunft.com to view it.")), s(!1), e(Q(c.account))
                                                                }))
                                                            }(), w()
                                                    },
                                                    children: i ? "" : ""
                                                })
                                            })]
                                        })]
                                    }), Object(an.jsx)(nn, {})]
                                }), Object(an.jsx)(tn, {}), Object(an.jsx)(en, {
                                    flex: 1,
                                    jc: "center",
                                    ai: "center",
                                    children: Object(an.jsx)(dn, {
                                        alt: "example",
                                        src: "./static/images/example2.gif"
                                    })
                                })]
                            }), Object(an.jsx)(un, {
                                alt: "example",
                                src: "./static/images/story.png"
                            }), Object(an.jsx)(jn, {
                                alt: "example",
                                src: "./static/images/story2.png"
                            }), Object(an.jsx)(jn, {
                                alt: "example",
                                src: "./static/images/story3b.png"
                            }), Object(an.jsx)(jn, {
                                alt: "example",
                                src: "./static/images/story4b.png"
                            }), Object(an.jsxs)("span", {
                                alt: "1",
                                children: [Object(an.jsxs)("span", {
                                    // onClick: function() {
                                    //     return window.open("https://twitter.com/cryptofreak212", "_blank")
                                    // },
                                    children: [" ", Object(an.jsxs)(on, {
                                        children: "@cryptofreak212"
                                    }), ]
                                }), Object(an.jsxs)("span", {
                                    // onClick: function() {
                                    //     return window.open("https://twitter.com/beaterfit_luca", "_blank")
                                    // },
                                    children: [" ", Object(an.jsxs)(on, {
                                        children: "@beaterfit_luca"
                                    }), ]
                                }), Object(an.jsxs)("span", {
                                    // onClick: function() {
                                    //     return window.open("https://twitter.com/RHEE_UNION", "_blank")
                                    // },
                                    children: [" ", Object(an.jsxs)(on, {
                                        children: "@RHEE_UNION"
                                    }), ]
                                })]
                            }), Object(an.jsx)($, {}), Object(an.jsx)($, {}), Object(an.jsx)(nn, {}), Object(an.jsxs)(en, {
                                jc: "center",
                                ai: "center",
                                style: {
                                    width: "70%"
                                },
                                children: [Object(an.jsxs)(rn, {
                                    style: {
                                        textAlign: "center",
                                        color: "var(--primary-text)"
                                    },
                                    children: ["Please make sure you are connected to the right network (", f.NETWORK.NAME, " Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]
                                }), Object(an.jsx)($, {}), Object(an.jsxs)(rn, {
                                    style: {
                                        textAlign: "center",
                                        color: "var(--primary-text)"
                                    },
                                    children: ["We have set the gas limit to ", f.GAS_LIMIT, " for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]
                                })]
                            }), Object(an.jsx)(en, {
                                jc: "center",
                                ai: "center",
                                style: {
                                    width: "70%"
                                }
                            })]
                        })
                    })
                },
                hn = function(n) {
                    n && n instanceof Function && e.e(3).then(e.bind(null, 538)).then((function(t) {
                        var e = t.getCLS,
                            c = t.getFID,
                            r = t.getFCP,
                            a = t.getLCP,
                            o = t.getTTFB;
                        e(n), c(n), r(n), a(n), o(n)
                    }))
                };
            e(533);
            v.a.render(Object(an.jsx)(_.a, {
                store: H,
                children: Object(an.jsx)(bn, {})
            }), document.getElementById("root")), hn()
        }
    },
    [
        [534, 1, 2]
    ]
]);