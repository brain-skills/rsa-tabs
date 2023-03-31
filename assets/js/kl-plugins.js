/***************************************************************************************************
JQuery Plugins included in this JS file:

* Magnific Popup - v1.1.0
* Easy video background jquery plugin
* SWF Object
* jQuery Easing v1.4.0
* imagesLoaded PACKAGED v4.1.3
* h5Validate
* jQuery SmartScroll
* jQuery cookie
* SmoothScroll for websites v1.4.5 (Balazs Galambosi) http://www.smoothscroll.net/ 
(deactivated, uncomment the script to activate)
* jQuery appear plugin
* jQuery SmartResize
* jQuery easyPieChart
* Twitter Post Fetcher v18.0.2
* Pajinate https://github.com/wesnolte/Pajinate
***************************************************************************************************/






/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function(a) { var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) { b.ev.on(o + a + p, c) },
        x = function(b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f },
        y = function(c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) },
        z = function(c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn },
        A = function() { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) },
        B = function() { var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;)
                if (b.pop() + "Transition" in a) return !0; return !1 };
    t.prototype = { constructor: t, init: function() { var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function(c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) } y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function() { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(),
                n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize();
                o && (n.marginRight = o) } b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function() { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function() { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function(a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function() { var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0 } e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function(a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function(c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function(a, c) { var d = function(d) { d.mfpEl = this, b._openClick(d, a, c) };
            c || (c = {}); var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function(c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g)
                    if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function(a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function(c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function(a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function(a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function(a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function(c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function(b, c, d) { var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) { if (void 0 === d || d === !1) return !0; if (e = c.split("_"), e.length > 1) { var f = b.find(p + "-" + e[0]); if (f.length > 0) { var g = e[1]; "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d) } } else b.find(p + "-" + c).html(d) }) }, _getScrollbarSize: function() { if (void 0 === b.scrollbarSize) { var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function(b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function() { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function(b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function(c) { A(); var d = a(this); if ("string" == typeof c)
            if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d }; var C, D, E, F = "inline",
        G = function() { E && (D.after(E.addClass(C)).detach(), E = null) };
    a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function() { b.types.push(F), w(h + "." + F, function() { G() }) }, getInline: function(c, d) { if (G(), c.src) { var e = b.st.inline,
                        f = a(c.src); if (f.length) { var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } }); var H, I = "ajax",
        J = function() { H && a(document.body).removeClass(H) },
        K = function() { J(), b.req && b.req.abort() };
    a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function(c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function(d, e, f) { var g = { data: d, xhr: f };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function() { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } }); var L, M = function(c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" };
    a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function() { var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function() { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function() { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function(a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function(a) { var c = 0,
                    d = a.img[0],
                    e = function(f) { L && clearInterval(L), L = setInterval(function() { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) };
                e(1) }, getImage: function(c, d) { var e = 0,
                    f = function() { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) },
                    g = function() { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) },
                    h = b.st.image,
                    i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } }); var N, O = function() { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N };
    a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function() { var a, c = b.st.zoom,
                    d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration,
                        j = function(a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b },
                        k = function() { b.content.css("visibility", "visible") };
                    w("BuildControls" + d, function() { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() { f.css(b._getOffset(!0)), e = setTimeout(function() { k(), setTimeout(function() { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function() { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return;
                                f = j(a) } f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() { f.css(b._getOffset()) }, 16) } }), w(h + d, function() { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function() { return "image" === b.currItem.type }, _getItemToZoom: function() { return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function(c) { var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } }); var P = "iframe",
        Q = "//about:blank",
        R = function(a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } };
    a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() { b.types.push(P), w("BeforeChange", function(a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function() { R() }) }, getIframe: function(c, d) { var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } }); var S = function(a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a },
        T = function(a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) };
    a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() { var c = b.st.gallery,
                    e = ".mfp-gallery"; return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function(a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function(a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function(a, d, e, f) { var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function() { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() { b.prev() }), f.click(function() { b.next() }), b.container.append(e.add(f)) } }), w(n + e, function() { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function() { d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function() { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function() { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function(a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function() { var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a) }, _preloadItem: function(c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() { d.hasSize = !0 }).on("error.mfploader", function() { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } }); var U = "retina";
    a.magnificPopup.registerModule(U, { options: { replaceSrc: function(a) { return a.src.replace(/\.\w+$/, function(a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function() { if (window.devicePixelRatio > 1) { var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function(b, d) { d.src = a.replaceSrc(d, c) })) } } } }), A() });
/* end Magnific Popup */



/* SWF Object */
var swfobject = function() {
    function e() { if (!M) { try { var e = k.getElementsByTagName("body")[0].appendChild(k.createElement("span"));
                e.parentNode.removeChild(e) } catch (t) { return } M = !0; for (var e = O.length, n = 0; e > n; n++) O[n]() } }

    function t(e) { M ? e() : O[O.length] = e }

    function n(e) { if (typeof L.addEventListener != A) L.addEventListener("load", e, !1);
        else if (typeof k.addEventListener != A) k.addEventListener("load", e, !1);
        else if (typeof L.attachEvent != A) p(L, "onload", e);
        else if ("function" == typeof L.onload) { var t = L.onload;
            L.onload = function() { t(), e() } } else L.onload = e }

    function a() { var e = k.getElementsByTagName("body")[0],
            t = k.createElement(N);
        t.setAttribute("type", T); var n = e.appendChild(t); if (n) { var a = 0;! function() { if (typeof n.GetVariable != A) { var r = n.GetVariable("$version");
                    r && (r = r.split(" ")[1].split(","), R.pv = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)]) } else if (10 > a) return a++, void setTimeout(arguments.callee, 10);
                e.removeChild(t), n = null, i() }() } else i() }

    function i() { var e = F.length; if (e > 0)
            for (var t = 0; e > t; t++) { var n = F[t].id,
                    a = F[t].callbackFn,
                    i = { success: !1, id: n }; if (0 < R.pv[0]) { var c = u(n); if (c)
                        if (!v(F[t].swfVersion) || R.wk && 312 > R.wk)
                            if (F[t].expressInstall && o()) { i = {}, i.data = F[t].expressInstall, i.width = c.getAttribute("width") || "0", i.height = c.getAttribute("height") || "0", c.getAttribute("class") && (i.styleclass = c.getAttribute("class")), c.getAttribute("align") && (i.align = c.getAttribute("align")); for (var d = {}, c = c.getElementsByTagName("param"), f = c.length, p = 0; f > p; p++) "movie" != c[p].getAttribute("name").toLowerCase() && (d[c[p].getAttribute("name")] = c[p].getAttribute("value"));
                                s(i, d, n, a) } else l(c), a && a(i);
                    else h(n, !0), a && (i.success = !0, i.ref = r(n), a(i)) } else h(n, !0), a && ((n = r(n)) && typeof n.SetVariable != A && (i.success = !0, i.ref = n), a(i)) } }

    function r(e) { var t = null; return (e = u(e)) && "OBJECT" == e.nodeName && (typeof e.SetVariable != A ? t = e : (e = e.getElementsByTagName(N)[0]) && (t = e)), t }

    function o() { return !V && v("6.0.65") && (R.win || R.mac) && !(R.wk && 312 > R.wk) }

    function s(e, t, n, a) { V = !0, b = a || null, E = { success: !1, id: n }; var i = u(n);
        i && ("OBJECT" == i.nodeName ? (g = c(i), w = null) : (g = i, w = n), e.id = I, (typeof e.width == A || !/%$/.test(e.width) && 310 > parseInt(e.width, 10)) && (e.width = "310"), (typeof e.height == A || !/%$/.test(e.height) && 137 > parseInt(e.height, 10)) && (e.height = "137"), k.title = k.title.slice(0, 47) + " - Flash Player Installation", a = R.ie && R.win ? "ActiveX" : "PlugIn", a = "MMredirectURL=" + L.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + a + "&MMdoctitle=" + k.title, t.flashvars = typeof t.flashvars != A ? t.flashvars + ("&" + a) : a, R.ie && R.win && 4 != i.readyState && (a = k.createElement("div"), n += "SWFObjectNew", a.setAttribute("id", n), i.parentNode.insertBefore(a, i), i.style.display = "none", function() { 4 == i.readyState ? i.parentNode.removeChild(i) : setTimeout(arguments.callee, 10) }()), d(e, t, n)) }

    function l(e) { if (R.ie && R.win && 4 != e.readyState) { var t = k.createElement("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(c(e), t), e.style.display = "none",
                function() { 4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10) }() } else e.parentNode.replaceChild(c(e), e) }

    function c(e) { var t = k.createElement("div"); if (R.win && R.ie) t.innerHTML = e.innerHTML;
        else if ((e = e.getElementsByTagName(N)[0]) && (e = e.childNodes))
            for (var n = e.length, a = 0; n > a; a++) 1 == e[a].nodeType && "PARAM" == e[a].nodeName || 8 == e[a].nodeType || t.appendChild(e[a].cloneNode(!0)); return t }

    function d(e, t, n) { var a, i = u(n); if (R.wk && 312 > R.wk) return a; if (i)
            if (typeof e.id == A && (e.id = n), R.ie && R.win) { var r, o = ""; for (r in e) e[r] != Object.prototype[r] && ("data" == r.toLowerCase() ? t.movie = e[r] : "styleclass" == r.toLowerCase() ? o += ' class="' + e[r] + '"' : "classid" != r.toLowerCase() && (o += " " + r + '="' + e[r] + '"'));
                r = ""; for (var s in t) t[s] != Object.prototype[s] && (r += '<param name="' + s + '" value="' + t[s] + '" />');
                i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + o + ">" + r + "</object>", $[$.length] = e.id, a = u(e.id) } else { s = k.createElement(N), s.setAttribute("type", T); for (var l in e) e[l] != Object.prototype[l] && ("styleclass" == l.toLowerCase() ? s.setAttribute("class", e[l]) : "classid" != l.toLowerCase() && s.setAttribute(l, e[l])); for (o in t) t[o] != Object.prototype[o] && "movie" != o.toLowerCase() && (e = s, r = o, l = t[o], n = k.createElement("param"), n.setAttribute("name", r), n.setAttribute("value", l), e.appendChild(n));
                i.parentNode.replaceChild(s, i), a = s } return a }

    function f(e) { var t = u(e);
        t && "OBJECT" == t.nodeName && (R.ie && R.win ? (t.style.display = "none", function() { if (4 == t.readyState) { var n = u(e); if (n) { for (var a in n) "function" == typeof n[a] && (n[a] = null);
                    n.parentNode.removeChild(n) } } else setTimeout(arguments.callee, 10) }()) : t.parentNode.removeChild(t)) }

    function u(e) { var t = null; try { t = k.getElementById(e) } catch (n) {} return t }

    function p(e, t, n) { e.attachEvent(t, n), x[x.length] = [e, t, n] }

    function v(e) { var t = R.pv; return e = e.split("."), e[0] = parseInt(e[0], 10), e[1] = parseInt(e[1], 10) || 0, e[2] = parseInt(e[2], 10) || 0, t[0] > e[0] || t[0] == e[0] && t[1] > e[1] || t[0] == e[0] && t[1] == e[1] && t[2] >= e[2] ? !0 : !1 }

    function y(e, t, n, a) { if (!R.ie || !R.mac) { var i = k.getElementsByTagName("head")[0];
            i && (n = n && "string" == typeof n ? n : "screen", a && (S = C = null), C && S == n || (a = k.createElement("style"), a.setAttribute("type", "text/css"), a.setAttribute("media", n), C = i.appendChild(a), R.ie && R.win && typeof k.styleSheets != A && 0 < k.styleSheets.length && (C = k.styleSheets[k.styleSheets.length - 1]), S = n), R.ie && R.win ? C && typeof C.addRule == N && C.addRule(e, t) : C && typeof k.createTextNode != A && C.appendChild(k.createTextNode(e + " {" + t + "}"))) } }

    function h(e, t) { if (P) { var n = t ? "visible" : "hidden";
            M && u(e) ? u(e).style.visibility = n : y("#" + e, "visibility:" + n) } }

    function m(e) { return null != /[\\\"<>\.;]/.exec(e) && typeof encodeURIComponent != A ? encodeURIComponent(e) : e } var g, w, b, E, C, S, A = "undefined",
        N = "object",
        T = "application/x-shockwave-flash",
        I = "SWFObjectExprInst",
        L = window,
        k = document,
        j = navigator,
        B = !1,
        O = [function() { B ? a() : i() }],
        F = [],
        $ = [],
        x = [],
        M = !1,
        V = !1,
        P = !0,
        R = function() { var e = typeof k.getElementById != A && typeof k.getElementsByTagName != A && typeof k.createElement != A,
                t = j.userAgent.toLowerCase(),
                n = j.platform.toLowerCase(),
                a = n ? /win/.test(n) : /win/.test(t),
                n = n ? /mac/.test(n) : /mac/.test(t),
                t = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                i = !1,
                r = [0, 0, 0],
                o = null; if (typeof j.plugins != A && typeof j.plugins["Shockwave Flash"] == N) !(o = j.plugins["Shockwave Flash"].description) || typeof j.mimeTypes != A && j.mimeTypes[T] && !j.mimeTypes[T].enabledPlugin || (B = !0, i = !1, o = o.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), r[0] = parseInt(o.replace(/^(.*)\..*$/, "$1"), 10), r[1] = parseInt(o.replace(/^.*\.(.*)\s.*$/, "$1"), 10), r[2] = /[a-zA-Z]/.test(o) ? parseInt(o.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof L.ActiveXObject != A) try { var s = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                s && (o = s.GetVariable("$version")) && (i = !0, o = o.split(" ")[1].split(","), r = [parseInt(o[0], 10), parseInt(o[1], 10), parseInt(o[2], 10)]) } catch (l) {}
            return { w3: e, pv: r, wk: t, ie: i, win: a, mac: n } }(); return function() { R.w3 && ((typeof k.readyState != A && "complete" == k.readyState || typeof k.readyState == A && (k.getElementsByTagName("body")[0] || k.body)) && e(), M || (typeof k.addEventListener != A && k.addEventListener("DOMContentLoaded", e, !1), R.ie && R.win && (k.attachEvent("onreadystatechange", function() { "complete" == k.readyState && (k.detachEvent("onreadystatechange", arguments.callee), e()) }), L == top && function() { if (!M) { try { k.documentElement.doScroll("left") } catch (t) { return void setTimeout(arguments.callee, 0) } e() } }()), R.wk && function() { M || (/loaded|complete/.test(k.readyState) ? e() : setTimeout(arguments.callee, 0)) }(), n(e))) }(),
        function() { R.ie && R.win && window.attachEvent("onunload", function() { for (var e = x.length, t = 0; e > t; t++) x[t][0].detachEvent(x[t][1], x[t][2]); for (e = $.length, t = 0; e > t; t++) f($[t]); for (var n in R) R[n] = null;
                R = null; for (var a in swfobject) swfobject[a] = null;
                swfobject = null }) }(), { registerObject: function(e, t, n, a) { if (R.w3 && e && t) { var i = {};
                    i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = a, F[F.length] = i, h(e, !1) } else a && a({ success: !1, id: e }) }, getObjectById: function(e) { return R.w3 ? r(e) : void 0 }, embedSWF: function(e, n, a, i, r, l, c, f, u, p) { var y = { success: !1, id: n };
                R.w3 && !(R.wk && 312 > R.wk) && e && n && a && i && r ? (h(n, !1), t(function() { a += "", i += ""; var t = {}; if (u && typeof u === N)
                        for (var m in u) t[m] = u[m]; if (t.data = e, t.width = a, t.height = i, m = {}, f && typeof f === N)
                        for (var g in f) m[g] = f[g]; if (c && typeof c === N)
                        for (var w in c) m.flashvars = typeof m.flashvars != A ? m.flashvars + ("&" + w + "=" + c[w]) : w + "=" + c[w]; if (v(r)) g = d(t, m, n), t.id == n && h(n, !0), y.success = !0, y.ref = g;
                    else { if (l && o()) return t.data = l, void s(t, m, n, p);
                        h(n, !0) } p && p(y) })) : p && p(y) }, switchOffAutoHideShow: function() { P = !1 }, ua: R, getFlashPlayerVersion: function() { return { major: R.pv[0], minor: R.pv[1], release: R.pv[2] } }, hasFlashPlayerVersion: v, createSWF: function(e, t, n) { return R.w3 ? d(e, t, n) : void 0 }, showExpressInstall: function(e, t, n, a) { R.w3 && o() && s(e, t, n, a) }, removeSWF: function(e) { R.w3 && f(e) }, createCSS: function(e, t, n, a) { R.w3 && y(e, t, n, a) }, addDomLoadEvent: t, addLoadEvent: n, getQueryParamValue: function(e) { var t = k.location.search || k.location.hash; if (t) { if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return m(t); for (var t = t.split("&"), n = 0; n < t.length; n++)
                        if (t[n].substring(0, t[n].indexOf("=")) == e) return m(t[n].substring(t[n].indexOf("=") + 1)) } return "" }, expressInstallCallback: function() { if (V) { var e = u(I);
                    e && g && (e.parentNode.replaceChild(g, e), w && (h(w, !0), R.ie && R.win && (g.style.display = "block")), b && b(E)), V = !1 } } } }();
/* end SWF Object */


/*
 * jQuery Easing v1.4.0 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
 */
(function(factory) { if (typeof define === "function" && define.amd) { define(["jquery"], function($) { return factory($) }) } else if (typeof module === "object" && typeof module.exports === "object") { exports = factory(require("jquery")) } else { factory(jQuery) } })(function($) { $.easing["jswing"] = $.easing["swing"]; var pow = Math.pow,
        sqrt = Math.sqrt,
        sin = Math.sin,
        cos = Math.cos,
        PI = Math.PI,
        c1 = 1.70158,
        c2 = c1 * 1.525,
        c3 = c1 + 1,
        c4 = 2 * PI / 3,
        c5 = 2 * PI / 4.5;

    function bounceOut(x) { var n1 = 7.5625,
            d1 = 2.75; if (x < 1 / d1) { return n1 * x * x } else if (x < 2 / d1) { return n1 * (x -= 1.5 / d1) * x + .75 } else if (x < 2.5 / d1) { return n1 * (x -= 2.25 / d1) * x + .9375 } else { return n1 * (x -= 2.625 / d1) * x + .984375 } } $.extend($.easing, { def: "easeOutQuad", swing: function(x) { return $.easing[$.easing.def](x) }, easeInQuad: function(x) { return x * x }, easeOutQuad: function(x) { return 1 - (1 - x) * (1 - x) }, easeInOutQuad: function(x) { return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2 }, easeInCubic: function(x) { return x * x * x }, easeOutCubic: function(x) { return 1 - pow(1 - x, 3) }, easeInOutCubic: function(x) { return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2 }, easeInQuart: function(x) { return x * x * x * x }, easeOutQuart: function(x) { return 1 - pow(1 - x, 4) }, easeInOutQuart: function(x) { return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2 }, easeInQuint: function(x) { return x * x * x * x * x }, easeOutQuint: function(x) { return 1 - pow(1 - x, 5) }, easeInOutQuint: function(x) { return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2 }, easeInSine: function(x) { return 1 - cos(x * PI / 2) }, easeOutSine: function(x) { return sin(x * PI / 2) }, easeInOutSine: function(x) { return -(cos(PI * x) - 1) / 2 }, easeInExpo: function(x) { return x === 0 ? 0 : pow(2, 10 * x - 10) }, easeOutExpo: function(x) { return x === 1 ? 1 : 1 - pow(2, -10 * x) }, easeInOutExpo: function(x) { return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2 }, easeInCirc: function(x) { return 1 - sqrt(1 - pow(x, 2)) }, easeOutCirc: function(x) { return sqrt(1 - pow(x - 1, 2)) }, easeInOutCirc: function(x) { return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2 }, easeInElastic: function(x) { return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4) }, easeOutElastic: function(x) { return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1 }, easeInOutElastic: function(x) { return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1 }, easeInBack: function(x) { return c3 * x * x * x - c1 * x * x }, easeOutBack: function(x) { return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2) }, easeInOutBack: function(x) { return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2 }, easeInBounce: function(x) { return 1 - bounceOut(1 - x) }, easeOutBounce: bounceOut, easeInOutBounce: function(x) { return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2 } }) });
/* end jQuery Easing v1.4.0 */



/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function(e, t) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t() }("undefined" != typeof window ? window : this, function() {
    function e() {} var t = e.prototype; return t.on = function(e, t) { if (e && t) { var i = this._events = this._events || {},
                n = i[e] = i[e] || []; return n.indexOf(t) == -1 && n.push(t), this } }, t.once = function(e, t) { if (e && t) { this.on(e, t); var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {}; return n[t] = !0, this } }, t.off = function(e, t) { var i = this._events && this._events[e]; if (i && i.length) { var n = i.indexOf(t); return n != -1 && i.splice(n, 1), this } }, t.emitEvent = function(e, t) { var i = this._events && this._events[e]; if (i && i.length) { i = i.slice(0), t = t || []; for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) { var r = i[o],
                    s = n && n[r];
                s && (this.off(e, r), delete n[r]), r.apply(this, t) } return this } }, t.allOff = function() { delete this._events, delete this._onceEvents }, e }),
function(e, t) { "use strict"; "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) { return t(e, i) }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter) }("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) { for (var i in t) e[i] = t[i]; return e }

    function n(e) { if (Array.isArray(e)) return e; var t = "object" == typeof e && "number" == typeof e.length; return t ? d.call(e) : [e] }

    function o(e, t, r) { if (!(this instanceof o)) return new o(e, t, r); var s = e; return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e)) }

    function r(e) { this.img = e }

    function s(e, t) { this.url = e, this.element = t, this.img = new Image } var h = e.jQuery,
        a = e.console,
        d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() { this.images = [], this.elements.forEach(this.addElementImages, this) }, o.prototype.addElementImages = function(e) { "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e); var t = e.nodeType; if (t && u[t]) { for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) { var o = i[n];
                this.addImage(o) } if ("string" == typeof this.options.background) { var r = e.querySelectorAll(this.options.background); for (n = 0; n < r.length; n++) { var s = r[n];
                    this.addElementBackgroundImages(s) } } } }; var u = { 1: !0, 9: !0, 11: !0 }; return o.prototype.addElementBackgroundImages = function(e) { var t = getComputedStyle(e); if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) { var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage) } }, o.prototype.addImage = function(e) { var t = new r(e);
        this.images.push(t) }, o.prototype.addBackground = function(e, t) { var i = new s(e, t);
        this.images.push(i) }, o.prototype.check = function() {
        function e(e, i, n) { setTimeout(function() { t.progress(e, i, n) }) } var t = this; return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) { t.once("progress", e), t.check() }) : void this.complete() }, o.prototype.progress = function(e, t, i) { this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t) }, o.prototype.complete = function() { var e = this.hasAnyBroken ? "fail" : "done"; if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) { var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this) } }, r.prototype = Object.create(t.prototype), r.prototype.check = function() { var e = this.getIsImageComplete(); return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src)) }, r.prototype.getIsImageComplete = function() { return this.img.complete && this.img.naturalWidth }, r.prototype.confirm = function(e, t) { this.isLoaded = e, this.emitEvent("progress", [this, this.img, t]) }, r.prototype.handleEvent = function(e) { var t = "on" + e.type;
        this[t] && this[t](e) }, r.prototype.onload = function() { this.confirm(!0, "onload"), this.unbindEvents() }, r.prototype.onerror = function() { this.confirm(!1, "onerror"), this.unbindEvents() }, r.prototype.unbindEvents = function() { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, s.prototype = Object.create(r.prototype), s.prototype.check = function() { this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url; var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents()) }, s.prototype.unbindEvents = function() { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, s.prototype.confirm = function(e, t) { this.isLoaded = e, this.emitEvent("progress", [this, this.element, t]) }, o.makeJQueryPlugin = function(t) { t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) { var i = new o(this, e, t); return i.jqDeferred.promise(h(this)) }) }, o.makeJQueryPlugin(), o });
/* end imagesLoaded PACKAGED v4.1.4 */


/**
 * h5Validate
 * @version v0.9.0
 * Using semantic versioning: http://semver.org/
 * @author Eric Hamilton http://ericleads.com/
 * @copyright 2010 - 2012 Eric Hamilton
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Developed under the sponsorship of RootMusic, Zumba Fitness, LLC, and Rese Property Management
 */

(function(e) { "use strict"; var t = window.console || function() {},
        n = { defaults: { debug: false, RODom: false, patternLibrary: { phone: /([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{1,6}[\)])?([0-9A-Za-z \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)/, email: /((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?/, url: /(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?/, number: /-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?/, dateISO: /\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/, alpha: /[a-zA-Z]+/, alphaNumeric: /\w+/, integer: /-?\d+/ }, classPrefix: "h5-", errorClass: "ui-state-error", validClass: "ui-state-valid", activeClass: "active", requiredClass: "required", requiredAttribute: "required", patternAttribute: "pattern", errorAttribute: "data-h5-errorid", customEvents: { validate: true }, kbSelectors: ":input:not(:button):not(:disabled):not(.novalidate)", focusout: true, focusin: false, change: true, keyup: false, activeKeyup: true, mSelectors: '[type="range"]:not(:disabled):not(.novalidate), :radio:not(:disabled):not(.novalidate), :checkbox:not(:disabled):not(.novalidate), select:not(:disabled):not(.novalidate), option:not(:disabled):not(.novalidate)', click: true, requiredVar: "h5-required", patternVar: "h5-pattern", stripMarkup: true, submit: true, focusFirstInvalidElementOnSubmit: true, validateOnSubmit: true, invalidCallback: function() {}, validCallback: function() {}, allValidSelectors: ":input:visible:not(:button):not(:disabled):not(.novalidate)", markInvalid: function(n) { var r = e(n.element),
                        i = e(n.errorID);
                    r.addClass(n.errorClass).removeClass(n.validClass);
                    r.addClass(n.settings.activeClass); if (i.length) { if (r.attr("title")) { i.text(r.attr("title")) } i.show() } r.data("valid", false);
                    n.settings.invalidCallback.call(n.element, n.validity); return r }, markValid: function(n) { var r = e(n.element),
                        i = e(n.errorID);
                    r.addClass(n.validClass).removeClass(n.errorClass); if (i.length) { i.hide() } r.data("valid", true);
                    n.settings.validCallback.call(n.element, n.validity); return r }, unmark: function(n) { var r = e(n.element);
                    r.removeClass(n.errorClass).removeClass(n.validClass);
                    r.form.find("#" + n.element.id).removeClass(n.errorClass).removeClass(n.validClass); return r } } },
        r = n.defaults,
        i = r.patternLibrary,
        s = function(n) { return e.extend({ customError: n.customError || false, patternMismatch: n.patternMismatch || false, rangeOverflow: n.rangeOverflow || false, rangeUnderflow: n.rangeUnderflow || false, stepMismatch: n.stepMismatch || false, tooLong: n.tooLong || false, typeMismatch: n.typeMismatch || false, valid: n.valid || true, valueMissing: n.valueMissing || false }, n) },
        o = { isValid: function(t, n) { var r = e(this);
                n = t && n || {}; if (n.revalidate !== false) { r.trigger("validate") } return r.data("valid") }, allValid: function(t, n) { var r = true,
                    i = [],
                    s = e(this),
                    o, u, a = [],
                    f = function(t, n) { n.e = t;
                        i.push(n) },
                    l = e.extend({}, t, n);
                n = n || {};
                s.trigger("formValidate", { settings: e.extend(true, {}, l) });
                s.undelegate(l.allValidSelectors, ".allValid", f);
                s.delegate(l.allValidSelectors, "validated.allValid", f);
                o = s.find(l.allValidSelectors);
                u = o.filter(function(e) { var t; if (this.tagName === "INPUT" && this.type === "radio") { t = this.name; if (a[t] === true) { return false } a[t] = true } return true });
                u.each(function() { var t = e(this);
                    r = t.h5Validate("isValid", n) && r });
                s.trigger("formValidated", { valid: r, elements: i }); return r }, validate: function(n) { var r = e(this),
                    i = r.filter("[pattern]")[0] ? r.attr("pattern") : false,
                    o = new RegExp("^(?:" + i + ")$"),
                    u = null,
                    a = r.is("[type=checkbox]") ? r.is(":checked") : r.is("[type=radio]") ? (u = r.parents("form").find('input[name="' + r.attr("name") + '"]')).filter(":checked").length > 0 : r.val(),
                    f = n.errorClass,
                    l = n.validClass,
                    c = r.attr(n.errorAttribute) || false,
                    h = c ? "#" + c.replace(/(:|\.|\[|\])/g, "\\$1") : false,
                    p = false,
                    d = s({ element: this, valid: true }),
                    v = e("<input required>"),
                    m; if (v.filter("[required]") && v.filter("[required]").length) { p = r.filter("[required]").length && r.attr("required") !== "false" } else { p = r.attr("required") !== undefined } if (n.debug && window.console) { t.log('Validate called on "' + a + '" with regex "' + o + '". Required: ' + p);
                    t.log("Regex test: " + o.test(a) + ", Pattern: " + i) } m = parseInt(r.attr("maxlength"), 10); if (!isNaN(m) && a.length > m) { d.valid = false;
                    d.tooLong = true } if (p && !a) { d.valid = false;
                    d.valueMissing = true } else if (i && !o.test(a) && a) { d.valid = false;
                    d.patternMismatch = true } else { if (!n.RODom) { n.markValid({ element: this, validity: d, errorClass: f, validClass: l, errorID: h, settings: n }) } } if (!d.valid) { if (!n.RODom) { n.markInvalid({ element: this, validity: d, errorClass: f, validClass: l, errorID: h, settings: n }) } } r.trigger("validated", d); if (u !== null && n.alreadyCheckingRelatedRadioButtons !== true) { n.alreadyCheckingRelatedRadioButtons = true;
                    u.not(r).trigger("validate");
                    n.alreadyCheckingRelatedRadioButtons = false } }, delegateEvents: function(t, n, r, i) { var s = {},
                    o = 0,
                    u = function() { i.validate.call(this, i) };
                e.each(n, function(e, t) { if (t) { s[e] = e } }); for (o in s) { if (s.hasOwnProperty(o)) { e(r).delegate(t, s[o] + ".h5Validate", u) } } return r }, bindDelegation: function(t) { var n = e(this),
                    r;
                e.each(i, function(n, r) { var i = r.toString();
                    i = i.substring(1, i.length - 1);
                    e("." + t.classPrefix + n).attr("pattern", i) });
                r = n.filter("form").add(n.find("form")).add(n.parents("form"));
                r.attr("novalidate", "novalidate").submit(u);
                r.find("input[formnovalidate][type='submit']").click(function() { e(this).closest("form").unbind("submit", u) }); return this.each(function() { var e = { focusout: t.focusout, focusin: t.focusin, change: t.change, keyup: t.keyup },
                        n = { click: t.click },
                        r = { keyup: t.activeKeyup };
                    t.delegateEvents(":input", t.customEvents, this, t);
                    t.delegateEvents(t.kbSelectors, e, this, t);
                    t.delegateEvents(t.mSelectors, n, this, t);
                    t.delegateEvents(t.activeClassSelector, r, this, t);
                    t.delegateEvents("textarea[maxlength]", { keyup: true }, this, t) }) } },
        u = function(t) { var n, r = l.call(this),
                i; if (r.submit !== true) { return } n = e(this);
            i = n.h5Validate("allValid", { revalidate: r.validateOnSubmit === true }); if (i !== true) { t.preventDefault(); if (r.focusFirstInvalidElementOnSubmit === true) { var s = e(r.allValidSelectors, n).filter(function(t) { return e(this).h5Validate("isValid", { revalidate: false }) !== true });
                    s.first().focus() } } return i },
        a = [],
        f = function(n) { var i = e.extend({}, r, n, o),
                s = i.classPrefix + i.activeClass; return e.extend(i, { activeClass: s, activeClassSelector: "." + s, requiredClass: i.classPrefix + i.requiredClass, el: this }) },
        l = function() { var n = e(this).closest("[data-h5-instanceId]"); return a[n.attr("data-h5-instanceId")] },
        c = function(n) { var r = a.push(n) - 1; if (n.RODom !== true) { e(this).attr("data-h5-instanceId", r) } e(this).trigger("instance", { "data-h5-instanceId": r }) };
    e.h5Validate = { addPatterns: function(e) { var t = r.patternLibrary,
                n; for (n in e) { if (e.hasOwnProperty(n)) { t[n] = e[n] } } return t }, validValues: function(t, n) { var r = 0,
                i = n.length,
                s = "",
                o; for (r = 0; r < i; r += 1) { s = s ? s + "|" + n[r] : n[r] } o = new RegExp("^(?:" + s + ")$");
            e(t).data("regex", o) } };
    e.fn.h5Validate = function(n) { var r, i, s; if (typeof n === "string" && typeof o[n] === "function") { s = l.call(this);
            i = [].slice.call(arguments, 0);
            r = n;
            i.shift();
            i = e.merge([s], i); return s[r].apply(this, i) } s = f.call(this, n);
        c.call(this, s); return o.bindDelegation.call(this, s) } })(jQuery);
/* end h5Validate */



/* jQuery SmartScroll - Debounced scroll event library for jQuery.
 * https://github.com/peschee/jquery-smartscroll
 */
;
(function(e, t) { var n = function(e, t, n) { var r; return function() {
            function u() { if (!n) e.apply(s, o);
                r = null } var s = this,
                o = arguments; if (r) clearTimeout(r);
            else if (n) e.apply(s, o);
            r = setTimeout(u, t || 100) } };
    jQuery.fn[t] = function(e, r) { return e ? this.bind("scroll", n(e, r)) : this.trigger(t) } })(jQuery, "smartscroll");




/* jQuery cookie */
! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery) }(function(e) {
    function n(e) { return u.raw ? e : encodeURIComponent(e) }

    function o(e) { return u.raw ? e : decodeURIComponent(e) }

    function i(e) { return n(u.json ? JSON.stringify(e) : String(e)) }

    function t(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e } catch (n) {} }

    function r(n, o) { var i = u.raw ? n : t(n); return e.isFunction(o) ? o(i) : i } var c = /\+/g,
        u = e.cookie = function(t, c, s) { if (arguments.length > 1 && !e.isFunction(c)) { if (s = e.extend({}, u.defaults, s), "number" == typeof s.expires) { var a = s.expires,
                        d = s.expires = new Date;
                    d.setMilliseconds(d.getMilliseconds() + 864e5 * a) } return document.cookie = [n(t), "=", i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("") } for (var f = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; m > l; l++) { var x = p[l].split("="),
                    g = o(x.shift()),
                    j = x.join("="); if (t === g) { f = r(j, c); break } t || void 0 === (j = r(j)) || (f[g] = j) } return f };
    u.defaults = {}, e.removeCookie = function(n, o) { return e.cookie(n, "", e.extend({}, o, { expires: -1 })), !e.cookie(n) } });
/* end jQuery cookie */


// // SmoothScroll for websites v1.4.5 (Balazs Galambosi) http://www.smoothscroll.net/
// // *** Uncoment the script to activate ****
// !function(){function o(){b.keyboardSupport&&H("keydown",w)}function p(){if(!f&&document.body){f=!0;var a=document.body,e=document.documentElement,k=window.innerHeight,l=a.scrollHeight;if(g=document.compatMode.indexOf("CSS")>=0?e:a,h=a,o(),top!=self)d=!0;else if(_&&l>k&&(a.offsetHeight<=k||e.offsetHeight<=k)){var m=document.createElement("div");m.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+g.scrollHeight+"px",document.body.appendChild(m);var n;j=function(){n||(n=setTimeout(function(){c||(m.style.height="0",m.style.height=g.scrollHeight+"px",n=null)},500))},setTimeout(j,10),H("resize",j);var p={attributes:!0,childList:!0,characterData:!1};if(i=new R(j),i.observe(a,p),g.offsetHeight<=k){var q=document.createElement("div");q.style.clear="both",a.appendChild(q)}}b.fixedBackground||c||(a.style.backgroundAttachment="scroll",e.style.backgroundAttachment="scroll")}}function q(){i&&i.disconnect(),I(ba,v),I("mousedown",x),I("keydown",w),I("resize",j),I("load",p)}function u(a,c,d){if(K(c,d),1!=b.accelerationMax){var e=Date.now(),f=e-t;if(f<b.accelerationDelta){var g=(1+50/f)/2;g>1&&(g=Math.min(g,b.accelerationMax),c*=g,d*=g)}t=Date.now()}if(r.push({x:c,y:d,lastX:c<0?.99:-.99,lastY:d<0?.99:-.99,start:Date.now()}),!s){var h=a===document.body,i=function(e){for(var f=Date.now(),g=0,j=0,k=0;k<r.length;k++){var l=r[k],m=f-l.start,n=m>=b.animationTime,o=n?1:m/b.animationTime;b.pulseAlgorithm&&(o=U(o));var p=l.x*o-l.lastX>>0,q=l.y*o-l.lastY>>0;g+=p,j+=q,l.lastX+=p,l.lastY+=q,n&&(r.splice(k,1),k--)}h?window.scrollBy(g,j):(g&&(a.scrollLeft+=g),j&&(a.scrollTop+=j)),c||d||(r=[]),r.length?Q(i,a,1e3/b.frameRate+1):s=!1};Q(i,a,0),s=!0}}function v(a){f||p();var c=a.target;if(a.defaultPrevented||a.ctrlKey)return!0;if(J(h,"embed")||J(c,"embed")&&/\.pdf/i.test(c.src)||J(h,"object")||c.shadowRoot)return!0;var e=-a.wheelDeltaX||a.deltaX||0,g=-a.wheelDeltaY||a.deltaY||0;l&&(a.wheelDeltaX&&N(a.wheelDeltaX,120)&&(e=-120*(a.wheelDeltaX/Math.abs(a.wheelDeltaX))),a.wheelDeltaY&&N(a.wheelDeltaY,120)&&(g=-120*(a.wheelDeltaY/Math.abs(a.wheelDeltaY)))),e||g||(g=-a.wheelDelta||0),1===a.deltaMode&&(e*=40,g*=40);var i=D(c);return i?!(b.touchpadSupport||!M(g))||(Math.abs(e)>1.2&&(e*=b.stepSize/120),Math.abs(g)>1.2&&(g*=b.stepSize/120),u(i,e,g),a.preventDefault(),void B()):!d||!X||(Object.defineProperty(a,"target",{value:window.frameElement}),parent.wheel(a))}function w(a){var c=a.target,e=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey&&a.keyCode!==m.spacebar;document.body.contains(h)||(h=document.activeElement);var f=/^(textarea|select|embed|object)$/i,g=/^(button|submit|radio|checkbox|file|color|image)$/i;if(a.defaultPrevented||f.test(c.nodeName)||J(c,"input")&&!g.test(c.type)||J(h,"video")||P(a)||c.isContentEditable||e)return!0;if((J(c,"button")||J(c,"input")&&g.test(c.type))&&a.keyCode===m.spacebar)return!0;if(J(c,"input")&&"radio"==c.type&&n[a.keyCode])return!0;var i,j=0,k=0,l=D(h);if(!l)return!d||!X||parent.keydown(a);var o=l.clientHeight;switch(l==document.body&&(o=window.innerHeight),a.keyCode){case m.up:k=-b.arrowScroll;break;case m.down:k=b.arrowScroll;break;case m.spacebar:i=a.shiftKey?1:-1,k=-i*o*.9;break;case m.pageup:k=.9*-o;break;case m.pagedown:k=.9*o;break;case m.home:k=-l.scrollTop;break;case m.end:var p=l.scrollHeight-l.scrollTop,q=p-o;k=q>0?q+10:0;break;case m.left:j=-b.arrowScroll;break;case m.right:j=b.arrowScroll;break;default:return!0}u(l,j,k),a.preventDefault(),B()}function x(a){h=a.target}function B(){clearTimeout(A),A=setInterval(function(){z={}},1e3)}function C(a,b){for(var c=a.length;c--;)z[y(a[c])]=b;return b}function D(a){var b=[],c=document.body,e=g.scrollHeight;do{var f=z[y(a)];if(f)return C(b,f);if(b.push(a),e===a.scrollHeight){var h=F(g)&&F(c),i=h||G(g);if(d&&E(g)||!d&&i)return C(b,S())}else if(E(a)&&G(a))return C(b,a)}while(a=a.parentElement)}function E(a){return a.clientHeight+10<a.scrollHeight}function F(a){var b=getComputedStyle(a,"").getPropertyValue("overflow-y");return"hidden"!==b}function G(a){var b=getComputedStyle(a,"").getPropertyValue("overflow-y");return"scroll"===b||"auto"===b}function H(a,b){window.addEventListener(a,b,!1)}function I(a,b){window.removeEventListener(a,b,!1)}function J(a,b){return(a.nodeName||"").toLowerCase()===b.toLowerCase()}function K(a,b){a=a>0?1:-1,b=b>0?1:-1,e.x===a&&e.y===b||(e.x=a,e.y=b,r=[],t=0)}function M(a){if(a)return k.length||(k=[a,a,a]),a=Math.abs(a),k.push(a),k.shift(),clearTimeout(L),L=setTimeout(function(){try{localStorage.SS_deltaBuffer=k.join(",")}catch(a){}},1e3),!O(120)&&!O(100)}function N(a,b){return Math.floor(a/b)==a/b}function O(a){return N(k[0],a)&&N(k[1],a)&&N(k[2],a)}function P(a){var b=a.target,c=!1;if(document.URL.indexOf("www.youtube.com/watch")!=-1)do if(c=b.classList&&b.classList.contains("html5-video-controls"))break;while(b=b.parentNode);return c}function T(a){var c,d,e;return a*=b.pulseScale,a<1?c=a-(1-Math.exp(-a)):(d=Math.exp(-1),a-=1,e=1-Math.exp(-a),c=d+e*(1-d)),c*b.pulseNormalize}function U(a){return a>=1?1:a<=0?0:(1==b.pulseNormalize&&(b.pulseNormalize/=T(1)),T(a))}function ca(c){for(var d in c)a.hasOwnProperty(d)&&(b[d]=c[d])}var h,i,j,A,L,a={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!1,fixedBackground:!0,excluded:""},b=a,c=!1,d=!1,e={x:0,y:0},f=!1,g=document.documentElement,k=[],l=/^Mac/.test(navigator.platform),m={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},n={37:1,38:1,39:1,40:1},r=[],s=!1,t=Date.now(),y=function(){var a=0;return function(b){return b.uniqueID||(b.uniqueID=a++)}}(),z={};if(window.localStorage&&localStorage.SS_deltaBuffer)try{k=localStorage.SS_deltaBuffer.split(",")}catch(a){}var ba,Q=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a,b,c){window.setTimeout(a,c||1e3/60)}}(),R=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,S=function(){var a;return function(){if(!a){var b=document.createElement("div");b.style.cssText="height:10000px;width:1px;",document.body.appendChild(b);var c=document.body.scrollTop;document.documentElement.scrollTop;window.scrollBy(0,3),a=document.body.scrollTop!=c?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(b)}return a}}(),V=window.navigator.userAgent,W=/Edge/.test(V),X=/chrome/i.test(V)&&!W,Y=/safari/i.test(V)&&!W,Z=/mobile/i.test(V),$=/Windows NT 6.1/i.test(V)&&/rv:11/i.test(V),_=Y&&(/Version\/8/i.test(V)||/Version\/9/i.test(V)),aa=(X||Y||$)&&!Z;"onwheel"in document.createElement("div")?ba="wheel":"onmousewheel"in document.createElement("div")&&(ba="mousewheel"),ba&&aa&&(H(ba,v),H("mousedown",x),H("load",p)),ca.destroy=q,window.SmoothScrollOptions&&ca(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return ca}):"object"==typeof exports?module.exports=ca:window.SmoothScroll=ca}();



/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.3
 */
;
(function(e) {
    function a() { r = false; for (var n = 0; n < t.length; n++) { var i = e(t[n]).filter(function() { return e(this).is(":appeared") });
            i.trigger("appear", [i]); if (u) { var s = u.not(i);
                s.trigger("disappear", [s]) } u = i } } var t = []; var n = false; var r = false; var i = { interval: 250, force_process: false, appear_left_offset: 0, appear_top_offset: 0 }; var s = {}; var o = e(window); var u;
    e.expr[":"]["appeared"] = function(t) { var n = e(t); if (!n.is(":visible")) { return false } var r = o.scrollLeft(); var i = o.scrollTop(); var u = n.offset(); var a = u.left; var f = u.top; if (f + n.height() >= i && f - (n.data("appear-top-offset") || s.appear_top_offset) <= i + o.height() && a + n.width() >= r && a - (n.data("appear-left-offset") || s.appear_left_offset) <= r + o.width()) { return true } else { return false } };
    e.fn.extend({ appear: function(o) { var u = e.extend({}, i, o || {});
            s = u; var f = this.selector || this; if (!n) { var l = function() { if (r) { return } r = true;
                    setTimeout(a, u.interval) };
                e(window).scroll(l).resize(l);
                n = true } if (u.force_process) { setTimeout(a, u.interval) } t.push(f); return e(f) } });
    e.extend({ force_appear: function() { if (n) { a(); return true } return false } }) })(jQuery);


/* jQuery SmartResize - Debounced resize event library for jQuery.
 * http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
 */
;
(function(e, t) { var n = function(e, t, n) { var r; return function() {
            function u() { if (!n) e.apply(s, o);
                r = null } var s = this,
                o = arguments; if (r) clearTimeout(r);
            else if (n) e.apply(s, o);
            r = setTimeout(u, t || 100) } };
    jQuery.fn[t] = function(e) { return e ? this.bind("resize", n(e)) : this.trigger(t) } })(jQuery, "smartresize");


/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.0.3
 **/
! function(a) { var b = function(a, b) { var c, d = document.createElement("canvas"); "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d); var e = d.getContext("2d");
            d.width = d.height = b.size, a.appendChild(d); var f = 1;
            window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-0.5 + b.rotate / 180) * Math.PI); var g = (b.size - b.lineWidth) / 2;
            b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function() { return +new Date }; var h = function(a, b, c) { c = Math.min(Math.max(0, c || 1), 1), e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, !1), e.strokeStyle = a, e.lineWidth = b, e.stroke() },
                i = function() { var a, c, d = 24;
                    e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save(); for (var d = 24; d > 0; --d) 0 === d % 6 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
                    e.restore() },
                j = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) { window.setTimeout(a, 1e3 / 60) } }(),
                k = function() { b.scaleColor && i(), b.trackColor && h(b.trackColor, b.lineWidth) };
            this.clear = function() { e.clearRect(b.size / -2, b.size / -2, b.size, b.size) }, this.draw = function(a) { b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap; var d;
                d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, a > 0 && h(d, b.lineWidth, a / 100) }.bind(this), this.animate = function(a, c) { var d = Date.now();
                b.onStart(a, c); var e = function() { var f = Math.min(Date.now() - d, b.animate),
                        g = b.easing(this, f, a, c - a, b.animate);
                    this.draw(g), b.onStep(a, c, g), f >= b.animate ? b.onStop(a, c) : j(e) }.bind(this);
                j(e) }.bind(this) },
        c = function(a, c) { var d = { barColor: "#ef1e25", trackColor: "#f9f9f9", scaleColor: "#dfe0e0", scaleLength: 5, lineCap: "round", lineWidth: 3, size: 110, rotate: 0, animate: 1e3, easing: function(a, b, c, d, e) { return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c }, onStart: function() {}, onStep: function() {}, onStop: function() {} }; if ("undefined" != typeof b) d.renderer = b;
            else { if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                d.renderer = SVGRenderer } var e = {},
                f = 0,
                g = function() { this.el = a, this.options = e; for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
                    e.easing = "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? jQuery.easing[e.easing] : d.easing, this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent && this.update(parseInt(a.dataset.percent, 10)) }.bind(this);
            this.update = function(a) { return a = parseInt(a, 10), e.animate ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this }.bind(this), g() };
    a.fn.easyPieChart = function(b) { return this.each(function() { a.data(this, "easyPieChart") || a.data(this, "easyPieChart", new c(this, b)) }) } }(jQuery);


/*********************************************************************
 *  #### Twitter Post Fetcher v18.0.2 ####
 *  Coded by Jason Mayes 2015. A present to all the developers out there.
 *  www.jasonmayes.com
 *  Please keep this disclaimer with my code if you use it. Thanks. :-)
 *  Got feedback or questions, ask here:
 *  http://www.jasonmayes.com/projects/twitterApi/
 *  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
 *  Updates will be posted to this site.
 *********************************************************************/
(function(root, factory) { if (typeof define === 'function' && define.amd) { define([], factory); } else if (typeof exports === 'object') { module.exports = factory(); } else { factory(); } }(this, function() {
    var domNode = '';
    var maxTweets = 20;
    var parseLinks = true;
    var queue = [];
    var inProgress = false;
    var printTime = true;
    var printUser = true;
    var formatterFunction = null;
    var supportsClassName = true;
    var showRts = true;
    var customCallbackFunction = null;
    var showInteractionLinks = true;
    var showImages = false;
    var useEmoji = false;
    var targetBlank = true;
    var lang = 'en';
    var permalinks = true;
    var dataOnly = false;
    var script = null;
    var scriptAdded = false;

    function handleTweets(tweets) {
        if (customCallbackFunction === null) {
            var x = tweets.length;
            var n = 0;
            var element = document.getElementById(domNode);
            var html = '<ul>';
            while (n < x) { html += '<li>' + tweets[n] + '</li>';
                n++; }
            html += '</ul>';
            element.innerHTML = html;
        } else { customCallbackFunction(tweets); }
    }

    function strip(data) { return data.replace(/<b[^>]*>(.*?)<\/b>/gi, function(a, s) { return s; }).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, ''); }

    function targetLinksToNewWindow(el) { var links = el.getElementsByTagName('a'); for (var i = links.length - 1; i >= 0; i--) { links[i].setAttribute('target', '_blank');
            links[i].setAttribute('rel', 'noopener'); } }

    function getElementsByClassName(node, classname) {
        var a = [];
        var regex = new RegExp('(^| )' + classname + '( |$)');
        var elems = node.getElementsByTagName('*');
        for (var i = 0, j = elems.length; i < j; i++) { if (regex.test(elems[i].className)) { a.push(elems[i]); } }
        return a;
    }

    function extractImageUrl(image_data) { if (image_data !== undefined && image_data.innerHTML.indexOf('data-image') >= 0) { var data_src = image_data.innerHTML.match(/data-image=\"([A-z0-9]+:\/\/[A-z0-9]+\.[A-z0-9]+\.[A-z0-9]+\/[A-z0-9]+\/[A-z0-9\-]+)/i)[1]; return decodeURIComponent(data_src) + '.jpg'; } }
    var twitterFetcher = {
        fetch: function(config) {
            if (config.maxTweets === undefined) { config.maxTweets = 20; }
            if (config.enableLinks === undefined) { config.enableLinks = true; }
            if (config.showUser === undefined) { config.showUser = true; }
            if (config.showTime === undefined) { config.showTime = true; }
            if (config.dateFunction === undefined) { config.dateFunction = 'default'; }
            if (config.showRetweet === undefined) { config.showRetweet = true; }
            if (config.customCallback === undefined) { config.customCallback = null; }
            if (config.showInteraction === undefined) { config.showInteraction = true; }
            if (config.showImages === undefined) { config.showImages = false; }
            if (config.useEmoji === undefined) { config.useEmoji = false; }
            if (config.linksInNewWindow === undefined) { config.linksInNewWindow = true; }
            if (config.showPermalinks === undefined) { config.showPermalinks = true; }
            if (config.dataOnly === undefined) { config.dataOnly = false; }
            if (inProgress) { queue.push(config); } else {
                inProgress = true;
                domNode = config.domId;
                maxTweets = config.maxTweets;
                parseLinks = config.enableLinks;
                printUser = config.showUser;
                printTime = config.showTime;
                showRts = config.showRetweet;
                formatterFunction = config.dateFunction;
                customCallbackFunction = config.customCallback;
                showInteractionLinks = config.showInteraction;
                showImages = config.showImages;
                useEmoji = config.useEmoji;
                targetBlank = config.linksInNewWindow;
                permalinks = config.showPermalinks;
                dataOnly = config.dataOnly;
                var head = document.getElementsByTagName('head')[0];
                if (script !== null) { head.removeChild(script); }
                script = document.createElement('script');
                script.type = 'text/javascript';
                if (config.list !== undefined) {
                    script.src = 'https://syndication.twitter.com/timeline/list?' + 'callback=__twttrf.callback&dnt=false&list_slug=' +
                        config.list.listSlug + '&screen_name=' + config.list.screenName + '&suppress_response_codes=true&lang=' + (config.lang || lang) + '&rnd=' + Math.random();
                } else if (config.profile !== undefined) { script.src = 'https://syndication.twitter.com/timeline/profile?' + 'callback=__twttrf.callback&dnt=false' + '&screen_name=' + config.profile.screenName + '&suppress_response_codes=true&lang=' + (config.lang || lang) + '&rnd=' + Math.random(); } else if (config.likes !== undefined) { script.src = 'https://syndication.twitter.com/timeline/likes?' + 'callback=__twttrf.callback&dnt=false' + '&screen_name=' + config.likes.screenName + '&suppress_response_codes=true&lang=' + (config.lang || lang) + '&rnd=' + Math.random(); } else {
                    script.src = 'https://cdn.syndication.twimg.com/widgets/timelines/' +
                        config.id + '?&lang=' + (config.lang || lang) + '&callback=__twttrf.callback&' + 'suppress_response_codes=true&rnd=' + Math.random();
                }
                head.appendChild(script);
            }
        },
        callback: function(data) {
            if (data === undefined || data.body === undefined) {
                inProgress = false;
                if (queue.length > 0) { twitterFetcher.fetch(queue[0]);
                    queue.splice(0, 1); }
                return;
            }
            if (!useEmoji) { data.body = data.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g, ''); }
            if (!showImages) { data.body = data.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g, ''); }
            if (!printUser) { data.body = data.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g, ''); }
            var div = document.createElement('div');
            div.innerHTML = data.body;
            if (typeof(div.getElementsByClassName) === 'undefined') { supportsClassName = false; }

            function swapDataSrc(element) {
                var avatarImg = element.getElementsByTagName('img')[0];
                if (avatarImg) { avatarImg.src = avatarImg.getAttribute('data-src-2x'); } else { var screenName = element.getElementsByTagName('a')[0].getAttribute('href').split('twitter.com/')[1]; var img = document.createElement('img');
                    img.setAttribute('src', 'https://twitter.com/' + screenName + '/profile_image?size=bigger');
                    element.prepend(img); }
                return element;
            }
            var tweets = [];
            var authors = [];
            var times = [];
            var images = [];
            var rts = [];
            var tids = [];
            var permalinksURL = [];
            var x = 0;
            if (supportsClassName) {
                var tmp = div.getElementsByClassName('timeline-Tweet');
                while (x < tmp.length) {
                    if (tmp[x].getElementsByClassName('timeline-Tweet-retweetCredit').length > 0) { rts.push(true); } else { rts.push(false); }
                    if (!rts[x] || rts[x] && showRts) {
                        tweets.push(tmp[x].getElementsByClassName('timeline-Tweet-text')[0]);
                        tids.push(tmp[x].getAttribute('data-tweet-id'));
                        if (printUser) { authors.push(swapDataSrc(tmp[x].getElementsByClassName('timeline-Tweet-author')[0])); }
                        times.push(tmp[x].getElementsByClassName('dt-updated')[0]);
                        permalinksURL.push(tmp[x].getElementsByClassName('timeline-Tweet-timestamp')[0]);
                        if (tmp[x].getElementsByClassName('timeline-Tweet-media')[0] !== undefined) { images.push(tmp[x].getElementsByClassName('timeline-Tweet-media')[0]); } else { images.push(undefined); }
                    }
                    x++;
                }
            } else {
                var tmp = getElementsByClassName(div, 'timeline-Tweet');
                while (x < tmp.length) {
                    if (getElementsByClassName(tmp[x], 'timeline-Tweet-retweetCredit').length > 0) { rts.push(true); } else { rts.push(false); }
                    if (!rts[x] || rts[x] && showRts) {
                        tweets.push(getElementsByClassName(tmp[x], 'timeline-Tweet-text')[0]);
                        tids.push(tmp[x].getAttribute('data-tweet-id'));
                        if (printUser) { authors.push(swapDataSrc(getElementsByClassName(tmp[x], 'timeline-Tweet-author')[0])); }
                        times.push(getElementsByClassName(tmp[x], 'dt-updated')[0]);
                        permalinksURL.push(getElementsByClassName(tmp[x], 'timeline-Tweet-timestamp')[0]);
                        if (getElementsByClassName(tmp[x], 'timeline-Tweet-media')[0] !== undefined) { images.push(getElementsByClassName(tmp[x], 'timeline-Tweet-media')[0]); } else { images.push(undefined); }
                    }
                    x++;
                }
            }
            if (tweets.length > maxTweets) { tweets.splice(maxTweets, (tweets.length - maxTweets));
                authors.splice(maxTweets, (authors.length - maxTweets));
                times.splice(maxTweets, (times.length - maxTweets));
                rts.splice(maxTweets, (rts.length - maxTweets));
                images.splice(maxTweets, (images.length - maxTweets));
                permalinksURL.splice(maxTweets, (permalinksURL.length - maxTweets)); }
            var arrayTweets = [];
            var x = tweets.length;
            var n = 0;
            if (dataOnly) { while (n < x) { arrayTweets.push({ tweet: tweets[n].innerHTML, author: authors[n] ? authors[n].innerHTML : 'Unknown Author', author_data: { profile_url: authors[n] ? authors[n].querySelector('[data-scribe="element:user_link"]').href : null, profile_image: authors[n] ? 'https://twitter.com/' + authors[n].querySelector('[data-scribe="element:screen_name"]').title.split('@')[1] + '/profile_image?size=bigger' : null, profile_image_2x: authors[n] ? 'https://twitter.com/' + authors[n].querySelector('[data-scribe="element:screen_name"]').title.split('@')[1] + '/profile_image?size=original' : null, screen_name: authors[n] ? authors[n].querySelector('[data-scribe="element:screen_name"]').title : null, name: authors[n] ? authors[n].querySelector('[data-scribe="element:name"]').title : null }, time: times[n].textContent, timestamp: times[n].getAttribute('datetime').replace('+0000', 'Z').replace(/([\+\-])(\d\d)(\d\d)/, '$1$2:$3'), image: extractImageUrl(images[n]), rt: rts[n], tid: tids[n], permalinkURL: (permalinksURL[n] === undefined) ? '' : permalinksURL[n].href });
                    n++; } } else {
                while (n < x) {
                    if (typeof(formatterFunction) !== 'string') { var datetimeText = times[n].getAttribute('datetime'); var newDate = new Date(times[n].getAttribute('datetime').replace(/-/g, '/').replace('T', ' ').split('+')[0]); var dateString = formatterFunction(newDate, datetimeText);
                        times[n].setAttribute('aria-label', dateString); if (tweets[n].textContent) { if (supportsClassName) { times[n].textContent = dateString; } else { var h = document.createElement('p'); var t = document.createTextNode(dateString);
                                h.appendChild(t);
                                h.setAttribute('aria-label', dateString);
                                times[n] = h; } } else { times[n].textContent = dateString; } }
                    var op = '';
                    if (parseLinks) {
                        if (targetBlank) { targetLinksToNewWindow(tweets[n]); if (printUser) { targetLinksToNewWindow(authors[n]); } }
                        if (printUser) { op += '<div class="user">' + strip(authors[n].innerHTML) + '</div>'; }
                        op += '<p class="tweet">' + strip(tweets[n].innerHTML) + '</p>';
                        if (printTime) {
                            if (permalinks) { op += '<p class="timePosted"><a href="' + permalinksURL[n] + '">' + times[n].getAttribute('aria-label') + '</a></p>'; } else {
                                op += '<p class="timePosted">' +
                                    times[n].getAttribute('aria-label') + '</p>';
                            }
                        }
                    } else {
                        if (tweets[n].textContent) {
                            if (printUser) { op += '<p class="user">' + authors[n].textContent + '</p>'; }
                            op += '<p class="tweet">' + tweets[n].textContent + '</p>';
                            if (printTime) { op += '<p class="timePosted">' + times[n].textContent + '</p>'; }
                        } else {
                            if (printUser) { op += '<p class="user">' + authors[n].textContent + '</p>'; }
                            op += '<p class="tweet">' + tweets[n].textContent + '</p>';
                            if (printTime) { op += '<p class="timePosted">' + times[n].textContent + '</p>'; }
                        }
                    }
                    if (showInteractionLinks) {
                        op += '<p class="interact"><a href="https://twitter.com/intent/' + 'tweet?in_reply_to=' + tids[n] + '" class="twitter_reply_icon"' +
                            (targetBlank ? ' target="_blank" rel="noopener">' : '>') + 'Reply</a><a href="https://twitter.com/intent/retweet?' + 'tweet_id=' + tids[n] + '" class="twitter_retweet_icon"' +
                            (targetBlank ? ' target="_blank" rel="noopener">' : '>') + 'Retweet</a>' + '<a href="https://twitter.com/intent/favorite?tweet_id=' +
                            tids[n] + '" class="twitter_fav_icon"' +
                            (targetBlank ? ' target="_blank" rel="noopener">' : '>') + 'Favorite</a></p>';
                    }
                    if (showImages && images[n] !== undefined && extractImageUrl(images[n]) !== undefined) { op += '<div class="media">' + '<img src="' + extractImageUrl(images[n]) + '" alt="Image from tweet" />' + '</div>'; }
                    if (showImages) { arrayTweets.push(op); } else if (!showImages && tweets[n].textContent.length) { arrayTweets.push(op); }
                    n++;
                }
            }
            handleTweets(arrayTweets);
            inProgress = false;
            if (queue.length > 0) { twitterFetcher.fetch(queue[0]);
                queue.splice(0, 1); }
        }
    };
    window.__twttrf = twitterFetcher;
    window.twitterFetcher = twitterFetcher;
    return twitterFetcher;
}));
(function(arr) {
    arr.forEach(function(item) {
        if (item.hasOwnProperty('prepend')) { return; }
        Object.defineProperty(item, 'prepend', { configurable: true, enumerable: true, writable: true, value: function prepend() { var argArr = Array.prototype.slice.call(arguments),
                    docFrag = document.createDocumentFragment();
                argArr.forEach(function(argItem) { var isNode = argItem instanceof Node;
                    docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem))); });
                this.insertBefore(docFrag, this.firstChild); } });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);


// Pajinate
(function($) { $.fn.pajinate = function(options) { var current_page = "current_page"; var items_per_page = "items_per_page"; var meta; var defaults = { item_container_id: ".content", items_per_page: 10, nav_panel_id: ".page_navigation", nav_info_id: ".info_text", num_page_links_to_display: 20, start_page: 0, wrap_around: false, nav_label_first: "", nav_label_prev: "", nav_label_next: "", nav_label_last: "", nav_order: ["first", "prev", "num", "next", "last"], nav_label_info: "Showing {0}-{1} of {2} results", show_first_last: true, abort_on_small_lists: false, jquery_ui: false, jquery_ui_active: "ui-state-highlight", jquery_ui_default: "ui-state-default", jquery_ui_disabled: "ui-state-disabled" }; var options = $.extend(defaults, options); var $item_container; var $page_container; var $items; var $nav_panels; var total_page_no_links; var jquery_ui_default_class = options.jquery_ui ? options.jquery_ui_default : ""; var jquery_ui_active_class = options.jquery_ui ? options.jquery_ui_active : ""; var jquery_ui_disabled_class = options.jquery_ui ? options.jquery_ui_disabled : ""; return this.each(function() { $page_container = $(this);
            $item_container = $(this).find(options.item_container_id);
            $items = $page_container.find(options.item_container_id).children(); if (options.abort_on_small_lists && options.items_per_page >= $items.length) return $page_container;
            meta = $page_container;
            meta.data(current_page, 0);
            meta.data(items_per_page, options.items_per_page); var total_items = $item_container.children().length; var number_of_pages = Math.ceil(total_items / options.items_per_page); var more = '<span class="ellipse more">...</span>'; var less = '<span class="ellipse less">...</span>'; var first = !options.show_first_last ? "" : '<a class="first_link ' + jquery_ui_default_class + '" href="">' + options.nav_label_first + "</a>"; var last = !options.show_first_last ? "" : '<a class="last_link ' + jquery_ui_default_class + '" href="">' + options.nav_label_last + "</a>"; var navigation_html = ""; for (var i = 0; i < options.nav_order.length; i++) { switch (options.nav_order[i]) {
                    case "first":
                        navigation_html += first; break;
                    case "last":
                        navigation_html += last; break;
                    case "next":
                        navigation_html += '<a class="next_link ' + jquery_ui_default_class + '" href="">' + options.nav_label_next + "</a>"; break;
                    case "prev":
                        navigation_html += '<a class="previous_link ' + jquery_ui_default_class + '" href="">' + options.nav_label_prev + "</a>"; break;
                    case "num":
                        navigation_html += less; var current_link = 0; while (number_of_pages > current_link) { navigation_html += '<a class="page_link ' + jquery_ui_default_class + '" href="" longdesc="' + current_link + '">' + (current_link + 1) + "</a>";
                            current_link++ } navigation_html += more; break;
                    default:
                        break } } $nav_panels = $page_container.find(options.nav_panel_id);
            $nav_panels.html(navigation_html).each(function() { $(this).find(".page_link:first").addClass("first");
                $(this).find(".page_link:last").addClass("last") });
            $nav_panels.children(".ellipse").hide();
            $nav_panels.find(".previous_link").next().next().addClass("active_page " + jquery_ui_active_class);
            $items.hide();
            $items.slice(0, meta.data(items_per_page)).show();
            total_page_no_links = $page_container.find(options.nav_panel_id + ":first").children(".page_link").length;
            options.num_page_links_to_display = Math.min(options.num_page_links_to_display, total_page_no_links);
            $nav_panels.children(".page_link").hide();
            $nav_panels.each(function() { $(this).children(".page_link").slice(0, options.num_page_links_to_display).show() });
            $page_container.find(".first_link").click(function(e) { e.preventDefault();
                movePageNumbersRight($(this), 0);
                gotopage(0) });
            $page_container.find(".last_link").click(function(e) { e.preventDefault(); var lastPage = total_page_no_links - 1;
                movePageNumbersLeft($(this), lastPage);
                gotopage(lastPage) });
            $page_container.find(".previous_link").click(function(e) { e.preventDefault();
                showPrevPage($(this)) });
            $page_container.find(".next_link").click(function(e) { e.preventDefault();
                showNextPage($(this)) });
            $page_container.find(".page_link").click(function(e) { e.preventDefault();
                gotopage($(this).attr("longdesc")) });
            gotopage(parseInt(options.start_page));
            toggleMoreLess(); if (!options.wrap_around) tagNextPrev() });

        function showPrevPage(e) { new_page = parseInt(meta.data(current_page)) - 1; if ($(e).siblings(".active_page").prev(".page_link").length == true) { movePageNumbersRight(e, new_page);
                gotopage(new_page) } else if (options.wrap_around) { gotopage(total_page_no_links - 1) } }

        function showNextPage(e) { new_page = parseInt(meta.data(current_page)) + 1; if ($(e).siblings(".active_page").next(".page_link").length == true) { movePageNumbersLeft(e, new_page);
                gotopage(new_page) } else if (options.wrap_around) { gotopage(0) } }

        function gotopage(page_num) { page_num = parseInt(page_num, 10); var ipp = parseInt(meta.data(items_per_page));
            start_from = page_num * ipp;
            end_on = start_from + ipp; var items = $items.hide().slice(start_from, end_on);
            items.show();
            $page_container.find(options.nav_panel_id).children(".page_link[longdesc=" + page_num + "]").addClass("active_page " + jquery_ui_active_class).siblings(".active_page").removeClass("active_page " + jquery_ui_active_class);
            meta.data(current_page, page_num); var $current_page = parseInt(meta.data(current_page) + 1); var total_items = $item_container.children().length; var $number_of_pages = Math.ceil(total_items / options.items_per_page);
            $page_container.find(options.nav_info_id).html(options.nav_label_info.replace("{0}", start_from + 1).replace("{1}", start_from + items.length).replace("{2}", $items.length).replace("{3}", $current_page).replace("{4}", $number_of_pages));
            toggleMoreLess();
            tagNextPrev(); if (typeof options.onPageDisplayed !== "undefined") { options.onPageDisplayed.call(this, page_num + 1) } }

        function movePageNumbersLeft(e, new_p) { var new_page = new_p; var $current_active_link = $(e).siblings(".active_page"); if ($current_active_link.siblings(".page_link[longdesc=" + new_page + "]").css("display") == "none") { $nav_panels.each(function() { $(this).children(".page_link").hide().slice(parseInt(new_page - options.num_page_links_to_display + 1), new_page + 1).show() }) } }

        function movePageNumbersRight(e, new_p) { var new_page = new_p; var $current_active_link = $(e).siblings(".active_page"); if ($current_active_link.siblings(".page_link[longdesc=" + new_page + "]").css("display") == "none") { $nav_panels.each(function() { $(this).children(".page_link").hide().slice(new_page, new_page + parseInt(options.num_page_links_to_display)).show() }) } }

        function toggleMoreLess() { if (!$nav_panels.children(".page_link:visible").hasClass("last")) { $nav_panels.children(".more").show() } else { $nav_panels.children(".more").hide() } if (!$nav_panels.children(".page_link:visible").hasClass("first")) { $nav_panels.children(".less").show() } else { $nav_panels.children(".less").hide() } }

        function tagNextPrev() { if ($nav_panels.children(".last").hasClass("active_page")) { $nav_panels.children(".next_link").add(".last_link").addClass("no_more " + jquery_ui_disabled_class) } else { $nav_panels.children(".next_link").add(".last_link").removeClass("no_more " + jquery_ui_disabled_class) } if ($nav_panels.children(".first").hasClass("active_page")) { $nav_panels.children(".previous_link").add(".first_link").addClass("no_more " + jquery_ui_disabled_class) } else { $nav_panels.children(".previous_link").add(".first_link").removeClass("no_more " + jquery_ui_disabled_class) } } } })(jQuery);