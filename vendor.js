webpackJsonp([0], [function(t, e, n) {
    var i, r;
    !function(o, s) {
        i = [n(17)],
        void 0 === (r = function(t) {
            return s(o, t)
        }
        .apply(e, i)) || (t.exports = r)
    }(window, function(t, e) {
        "use strict";
        var n = {
            extend: function(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t
            },
            modulo: function(t, e) {
                return (t % e + e) % e
            }
        }
          , i = Array.prototype.slice;
        n.makeArray = function(t) {
            return Array.isArray(t) ? t : null === t || void 0 === t ? [] : "object" == typeof t && "number" == typeof t.length ? i.call(t) : [t]
        }
        ,
        n.removeFrom = function(t, e) {
            var n = t.indexOf(e);
            -1 != n && t.splice(n, 1)
        }
        ,
        n.getParent = function(t, n) {
            for (; t.parentNode && t != document.body; )
                if (t = t.parentNode,
                e(t, n))
                    return t
        }
        ,
        n.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }
        ,
        n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }
        ,
        n.filterFindElements = function(t, i) {
            var r = [];
            return (t = n.makeArray(t)).forEach(function(t) {
                if (t instanceof HTMLElement)
                    if (i) {
                        e(t, i) && r.push(t);
                        for (var n = t.querySelectorAll(i), o = 0; o < n.length; o++)
                            r.push(n[o])
                    } else
                        r.push(t)
            }),
            r
        }
        ,
        n.debounceMethod = function(t, e, n) {
            n = n || 100;
            var i = t.prototype[e]
              , r = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[r];
                clearTimeout(t);
                var e = arguments
                  , o = this;
                this[r] = setTimeout(function() {
                    i.apply(o, e),
                    delete o[r]
                }, n)
            }
        }
        ,
        n.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }
        ,
        n.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        }
        ;
        var r = t.console;
        return n.htmlInit = function(e, i) {
            n.docReady(function() {
                var o = n.toDashed(i)
                  , s = "data-" + o
                  , a = document.querySelectorAll("[" + s + "]")
                  , l = document.querySelectorAll(".js-" + o)
                  , u = n.makeArray(a).concat(n.makeArray(l))
                  , c = s + "-options"
                  , h = t.jQuery;
                u.forEach(function(t) {
                    var n, o = t.getAttribute(s) || t.getAttribute(c);
                    try {
                        n = o && JSON.parse(o)
                    } catch (e) {
                        return void (r && r.error("Error parsing " + s + " on " + t.className + ": " + e))
                    }
                    var a = new e(t,n);
                    h && h.data(t, i, a)
                })
            })
        }
        ,
        n
    })
}
, function(t, e, n) {
    var i, r, o, s;
    window,
    s = function(t) {
        return t
    }
    ,
    r = [n(2), n(21), n(23), n(24), n(25), n(26), n(27)],
    void 0 === (o = "function" == typeof (i = s) ? i.apply(e, r) : i) || (t.exports = o)
}
, function(t, e, n) {
    var i, r;
    !function(o, s) {
        i = [n(10), n(11), n(0), n(18), n(19), n(20)],
        void 0 === (r = function(t, e, n, i, r, a) {
            return s(o, t, e, n, i, r, a)
        }
        .apply(e, i)) || (t.exports = r)
    }(window, function(t, e, n, i, r, o, s) {
        "use strict";
        var a = t.jQuery
          , l = t.getComputedStyle
          , u = t.console;
        function c(t, e) {
            for (t = i.makeArray(t); t.length; )
                e.appendChild(t.shift())
        }
        var h = 0
          , d = {};
        function f(t, e) {
            var n = i.getQueryElement(t);
            if (n) {
                if (this.element = n,
                this.element.flickityGUID) {
                    var r = d[this.element.flickityGUID];
                    return r.option(e),
                    r
                }
                a && (this.$element = a(this.element)),
                this.options = i.extend({}, this.constructor.defaults),
                this.option(e),
                this._create()
            } else
                u && u.error("Bad element for Flickity: " + (n || t))
        }
        f.defaults = {
            accessibility: !0,
            cellAlign: "center",
            freeScrollFriction: .075,
            friction: .28,
            namespaceJQueryEvents: !0,
            percentPosition: !0,
            resize: !0,
            selectedAttraction: .025,
            setGallerySize: !0
        },
        f.createMethods = [];
        var p = f.prototype;
        i.extend(p, e.prototype),
        p._create = function() {
            var e = this.guid = ++h;
            for (var n in this.element.flickityGUID = e,
            d[e] = this,
            this.selectedIndex = 0,
            this.restingFrames = 0,
            this.x = 0,
            this.velocity = 0,
            this.originSide = this.options.rightToLeft ? "right" : "left",
            this.viewport = document.createElement("div"),
            this.viewport.className = "flickity-viewport",
            this._createSlider(),
            (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this),
            this.options.on) {
                var i = this.options.on[n];
                this.on(n, i)
            }
            f.createMethods.forEach(function(t) {
                this[t]()
            }, this),
            this.options.watchCSS ? this.watchCSS() : this.activate()
        }
        ,
        p.option = function(t) {
            i.extend(this.options, t)
        }
        ,
        p.activate = function() {
            if (!this.isActive) {
                var t;
                this.isActive = !0,
                this.element.classList.add("flickity-enabled"),
                this.options.rightToLeft && this.element.classList.add("flickity-rtl"),
                this.getSize(),
                c(this._filterFindCellElements(this.element.children), this.slider),
                this.viewport.appendChild(this.slider),
                this.element.appendChild(this.viewport),
                this.reloadCells(),
                this.options.accessibility && (this.element.tabIndex = 0,
                this.element.addEventListener("keydown", this)),
                this.emitEvent("activate");
                var e = this.options.initialIndex;
                t = this.isInitActivated ? this.selectedIndex : void 0 !== e && this.cells[e] ? e : 0,
                this.select(t, !1, !0),
                this.isInitActivated = !0,
                this.dispatchEvent("ready")
            }
        }
        ,
        p._createSlider = function() {
            var t = document.createElement("div");
            t.className = "flickity-slider",
            t.style[this.originSide] = 0,
            this.slider = t
        }
        ,
        p._filterFindCellElements = function(t) {
            return i.filterFindElements(t, this.options.cellSelector)
        }
        ,
        p.reloadCells = function() {
            this.cells = this._makeCells(this.slider.children),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize()
        }
        ,
        p._makeCells = function(t) {
            return this._filterFindCellElements(t).map(function(t) {
                return new r(t,this)
            }, this)
        }
        ,
        p.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }
        ,
        p.getLastSlide = function() {
            return this.slides[this.slides.length - 1]
        }
        ,
        p.positionCells = function() {
            this._sizeCells(this.cells),
            this._positionCells(0)
        }
        ,
        p._positionCells = function(t) {
            t = t || 0,
            this.maxCellHeight = t && this.maxCellHeight || 0;
            var e = 0;
            if (t > 0) {
                var n = this.cells[t - 1];
                e = n.x + n.size.outerWidth
            }
            for (var i = this.cells.length, r = t; r < i; r++) {
                var o = this.cells[r];
                o.setPosition(e),
                e += o.size.outerWidth,
                this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
            }
            this.slideableWidth = e,
            this.updateSlides(),
            this._containSlides(),
            this.slidesWidth = i ? this.getLastSlide().target - this.slides[0].target : 0
        }
        ,
        p._sizeCells = function(t) {
            t.forEach(function(t) {
                t.getSize()
            })
        }
        ,
        p.updateSlides = function() {
            if (this.slides = [],
            this.cells.length) {
                var t = new o(this);
                this.slides.push(t);
                var e = "left" == this.originSide ? "marginRight" : "marginLeft"
                  , n = this._getCanCellFit();
                this.cells.forEach(function(i, r) {
                    if (t.cells.length) {
                        var s = t.outerWidth - t.firstMargin + (i.size.outerWidth - i.size[e]);
                        n.call(this, r, s) ? t.addCell(i) : (t.updateTarget(),
                        t = new o(this),
                        this.slides.push(t),
                        t.addCell(i))
                    } else
                        t.addCell(i)
                }, this),
                t.updateTarget(),
                this.updateSelectedSlide()
            }
        }
        ,
        p._getCanCellFit = function() {
            var t = this.options.groupCells;
            if (!t)
                return function() {
                    return !1
                }
                ;
            if ("number" == typeof t) {
                var e = parseInt(t, 10);
                return function(t) {
                    return t % e != 0
                }
            }
            var n = "string" == typeof t && t.match(/^(\d+)%$/)
              , i = n ? parseInt(n[1], 10) / 100 : 1;
            return function(t, e) {
                return e <= (this.size.innerWidth + 1) * i
            }
        }
        ,
        p._init = p.reposition = function() {
            this.positionCells(),
            this.positionSliderAtSelected()
        }
        ,
        p.getSize = function() {
            this.size = n(this.element),
            this.setCellAlign(),
            this.cursorPosition = this.size.innerWidth * this.cellAlign
        }
        ;
        var g = {
            center: {
                left: .5,
                right: .5
            },
            left: {
                left: 0,
                right: 1
            },
            right: {
                right: 0,
                left: 1
            }
        };
        return p.setCellAlign = function() {
            var t = g[this.options.cellAlign];
            this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
        }
        ,
        p.setGallerySize = function() {
            if (this.options.setGallerySize) {
                var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                this.viewport.style.height = t + "px"
            }
        }
        ,
        p._getWrapShiftCells = function() {
            if (this.options.wrapAround) {
                this._unshiftCells(this.beforeShiftCells),
                this._unshiftCells(this.afterShiftCells);
                var t = this.cursorPosition
                  , e = this.cells.length - 1;
                this.beforeShiftCells = this._getGapCells(t, e, -1),
                t = this.size.innerWidth - this.cursorPosition,
                this.afterShiftCells = this._getGapCells(t, 0, 1)
            }
        }
        ,
        p._getGapCells = function(t, e, n) {
            for (var i = []; t > 0; ) {
                var r = this.cells[e];
                if (!r)
                    break;
                i.push(r),
                e += n,
                t -= r.size.outerWidth
            }
            return i
        }
        ,
        p._containSlides = function() {
            if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                var t = this.options.rightToLeft
                  , e = t ? "marginRight" : "marginLeft"
                  , n = t ? "marginLeft" : "marginRight"
                  , i = this.slideableWidth - this.getLastCell().size[n]
                  , r = i < this.size.innerWidth
                  , o = this.cursorPosition + this.cells[0].size[e]
                  , s = i - this.size.innerWidth * (1 - this.cellAlign);
                this.slides.forEach(function(t) {
                    r ? t.target = i * this.cellAlign : (t.target = Math.max(t.target, o),
                    t.target = Math.min(t.target, s))
                }, this)
            }
        }
        ,
        p.dispatchEvent = function(t, e, n) {
            var i = e ? [e].concat(n) : n;
            if (this.emitEvent(t, i),
            a && this.$element) {
                var r = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
                if (e) {
                    var o = a.Event(e);
                    o.type = t,
                    r = o
                }
                this.$element.trigger(r, n)
            }
        }
        ,
        p.select = function(t, e, n) {
            if (this.isActive && (t = parseInt(t, 10),
            this._wrapSelect(t),
            (this.options.wrapAround || e) && (t = i.modulo(t, this.slides.length)),
            this.slides[t])) {
                var r = this.selectedIndex;
                this.selectedIndex = t,
                this.updateSelectedSlide(),
                n ? this.positionSliderAtSelected() : this.startAnimation(),
                this.options.adaptiveHeight && this.setGallerySize(),
                this.dispatchEvent("select", null, [t]),
                t != r && this.dispatchEvent("change", null, [t]),
                this.dispatchEvent("cellSelect")
            }
        }
        ,
        p._wrapSelect = function(t) {
            var e = this.slides.length;
            if (!(this.options.wrapAround && e > 1))
                return t;
            var n = i.modulo(t, e)
              , r = Math.abs(n - this.selectedIndex)
              , o = Math.abs(n + e - this.selectedIndex)
              , s = Math.abs(n - e - this.selectedIndex);
            !this.isDragSelect && o < r ? t += e : !this.isDragSelect && s < r && (t -= e),
            t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
        }
        ,
        p.previous = function(t, e) {
            this.select(this.selectedIndex - 1, t, e)
        }
        ,
        p.next = function(t, e) {
            this.select(this.selectedIndex + 1, t, e)
        }
        ,
        p.updateSelectedSlide = function() {
            var t = this.slides[this.selectedIndex];
            t && (this.unselectSelectedSlide(),
            this.selectedSlide = t,
            t.select(),
            this.selectedCells = t.cells,
            this.selectedElements = t.getCellElements(),
            this.selectedCell = t.cells[0],
            this.selectedElement = this.selectedElements[0])
        }
        ,
        p.unselectSelectedSlide = function() {
            this.selectedSlide && this.selectedSlide.unselect()
        }
        ,
        p.selectCell = function(t, e, n) {
            var i = this.queryCell(t);
            if (i) {
                var r = this.getCellSlideIndex(i);
                this.select(r, e, n)
            }
        }
        ,
        p.getCellSlideIndex = function(t) {
            for (var e = 0; e < this.slides.length; e++) {
                if (-1 != this.slides[e].cells.indexOf(t))
                    return e
            }
        }
        ,
        p.getCell = function(t) {
            for (var e = 0; e < this.cells.length; e++) {
                var n = this.cells[e];
                if (n.element == t)
                    return n
            }
        }
        ,
        p.getCells = function(t) {
            var e = [];
            return (t = i.makeArray(t)).forEach(function(t) {
                var n = this.getCell(t);
                n && e.push(n)
            }, this),
            e
        }
        ,
        p.getCellElements = function() {
            return this.cells.map(function(t) {
                return t.element
            })
        }
        ,
        p.getParentCell = function(t) {
            var e = this.getCell(t);
            return e || (t = i.getParent(t, ".flickity-slider > *"),
            this.getCell(t))
        }
        ,
        p.getAdjacentCellElements = function(t, e) {
            if (!t)
                return this.selectedSlide.getCellElements();
            e = void 0 === e ? this.selectedIndex : e;
            var n = this.slides.length;
            if (1 + 2 * t >= n)
                return this.getCellElements();
            for (var r = [], o = e - t; o <= e + t; o++) {
                var s = this.options.wrapAround ? i.modulo(o, n) : o
                  , a = this.slides[s];
                a && (r = r.concat(a.getCellElements()))
            }
            return r
        }
        ,
        p.queryCell = function(t) {
            return "number" == typeof t ? this.cells[t] : ("string" == typeof t && (t = this.element.querySelector(t)),
            this.getCell(t))
        }
        ,
        p.uiChange = function() {
            this.emitEvent("uiChange")
        }
        ,
        p.childUIPointerDown = function(t) {
            this.emitEvent("childUIPointerDown", [t])
        }
        ,
        p.onresize = function() {
            this.watchCSS(),
            this.resize()
        }
        ,
        i.debounceMethod(f, "onresize", 150),
        p.resize = function() {
            if (this.isActive) {
                this.getSize(),
                this.options.wrapAround && (this.x = i.modulo(this.x, this.slideableWidth)),
                this.positionCells(),
                this._getWrapShiftCells(),
                this.setGallerySize(),
                this.emitEvent("resize");
                var t = this.selectedElements && this.selectedElements[0];
                this.selectCell(t, !1, !0)
            }
        }
        ,
        p.watchCSS = function() {
            this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
        }
        ,
        p.onkeydown = function(t) {
            var e = document.activeElement && document.activeElement != this.element;
            if (this.options.accessibility && !e) {
                var n = f.keyboardHandlers[t.keyCode];
                n && n.call(this)
            }
        }
        ,
        f.keyboardHandlers = {
            37: function() {
                var t = this.options.rightToLeft ? "next" : "previous";
                this.uiChange(),
                this[t]()
            },
            39: function() {
                var t = this.options.rightToLeft ? "previous" : "next";
                this.uiChange(),
                this[t]()
            }
        },
        p.focus = function() {
            var e = t.pageYOffset;
            this.element.focus({
                preventScroll: !0
            }),
            t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
        }
        ,
        p.deactivate = function() {
            this.isActive && (this.element.classList.remove("flickity-enabled"),
            this.element.classList.remove("flickity-rtl"),
            this.unselectSelectedSlide(),
            this.cells.forEach(function(t) {
                t.destroy()
            }),
            this.element.removeChild(this.viewport),
            c(this.slider.children, this.element),
            this.options.accessibility && (this.element.removeAttribute("tabIndex"),
            this.element.removeEventListener("keydown", this)),
            this.isActive = !1,
            this.emitEvent("deactivate"))
        }
        ,
        p.destroy = function() {
            this.deactivate(),
            t.removeEventListener("resize", this),
            this.emitEvent("destroy"),
            a && this.$element && a.removeData(this.element, "flickity"),
            delete this.element.flickityGUID,
            delete d[this.guid]
        }
        ,
        i.extend(p, s),
        f.data = function(t) {
            var e = (t = i.getQueryElement(t)) && t.flickityGUID;
            return e && d[e]
        }
        ,
        i.htmlInit(f, "flickity"),
        a && a.bridget && a.bridget("flickity", f),
        f.setJQuery = function(t) {
            a = t
        }
        ,
        f.Cell = r,
        f
    })
}
, , , , , , , , function(t, e, n) {
    var i, r;
    "undefined" != typeof window && window,
    void 0 === (r = "function" == typeof (i = function() {
        "use strict";
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var n = this._events = this._events || {}
                  , i = n[t] = n[t] || [];
                return -1 == i.indexOf(e) && i.push(e),
                this
            }
        }
        ,
        e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[t] = n[t] || {})[e] = !0,
                this
            }
        }
        ,
        e.off = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = n.indexOf(e);
                return -1 != i && n.splice(i, 1),
                this
            }
        }
        ,
        e.emitEvent = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                n = n.slice(0),
                e = e || [];
                for (var i = this._onceEvents && this._onceEvents[t], r = 0; r < n.length; r++) {
                    var o = n[r];
                    i && i[o] && (this.off(t, o),
                    delete i[o]),
                    o.apply(this, e)
                }
                return this
            }
        }
        ,
        e.allOff = function() {
            delete this._events,
            delete this._onceEvents
        }
        ,
        t
    }
    ) ? i.call(e, n, e, t) : i) || (t.exports = r)
}
, function(t, e, n) {
    var i;
    !function(r, o) {
        "use strict";
        void 0 === (i = function() {
            return o()
        }
        .call(e, n, e, t)) || (t.exports = i)
    }(window, function() {
        "use strict";
        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }
        var e = "undefined" == typeof console ? function() {}
        : function(t) {
            console.error(t)
        }
          , n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]
          , i = n.length;
        function r(t) {
            var n = getComputedStyle(t);
            return n || e("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
            n
        }
        var o, s = !1;
        function a(e) {
            if (function() {
                if (!s) {
                    s = !0;
                    var e = document.createElement("div");
                    e.style.width = "200px",
                    e.style.padding = "1px 2px 3px 4px",
                    e.style.borderStyle = "solid",
                    e.style.borderWidth = "1px 2px 3px 4px",
                    e.style.boxSizing = "border-box";
                    var n = document.body || document.documentElement;
                    n.appendChild(e);
                    var i = r(e);
                    a.isBoxSizeOuter = o = 200 == t(i.width),
                    n.removeChild(e)
                }
            }(),
            "string" == typeof e && (e = document.querySelector(e)),
            e && "object" == typeof e && e.nodeType) {
                var l = r(e);
                if ("none" == l.display)
                    return function() {
                        for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < i; e++)
                            t[n[e]] = 0;
                        return t
                    }();
                var u = {};
                u.width = e.offsetWidth,
                u.height = e.offsetHeight;
                for (var c = u.isBorderBox = "border-box" == l.boxSizing, h = 0; h < i; h++) {
                    var d = n[h]
                      , f = l[d]
                      , p = parseFloat(f);
                    u[d] = isNaN(p) ? 0 : p
                }
                var g = u.paddingLeft + u.paddingRight
                  , v = u.paddingTop + u.paddingBottom
                  , m = u.marginLeft + u.marginRight
                  , y = u.marginTop + u.marginBottom
                  , x = u.borderLeftWidth + u.borderRightWidth
                  , b = u.borderTopWidth + u.borderBottomWidth
                  , w = c && o
                  , C = t(l.width);
                !1 !== C && (u.width = C + (w ? 0 : g + x));
                var S = t(l.height);
                return !1 !== S && (u.height = S + (w ? 0 : v + b)),
                u.innerWidth = u.width - (g + x),
                u.innerHeight = u.height - (v + b),
                u.outerWidth = u.width + m,
                u.outerHeight = u.height + y,
                u
            }
        }
        return a
    })
}
, function(t, e, n) {
    var i, r;
    !function(o, s) {
        i = [n(10)],
        void 0 === (r = function(t) {
            return s(o, t)
        }
        .apply(e, i)) || (t.exports = r)
    }(window, function(t, e) {
        "use strict";
        function n() {}
        var i = n.prototype = Object.create(e.prototype);
        i.bindStartEvent = function(t) {
            this._bindStartEvent(t, !0)
        }
        ,
        i.unbindStartEvent = function(t) {
            this._bindStartEvent(t, !1)
        }
        ,
        i._bindStartEvent = function(e, n) {
            var i = (n = void 0 === n || n) ? "addEventListener" : "removeEventListener"
              , r = "mousedown";
            t.PointerEvent ? r = "pointerdown" : "ontouchstart"in t && (r = "touchstart"),
            e[i](r, this)
        }
        ,
        i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }
        ,
        i.getTouch = function(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (n.identifier == this.pointerIdentifier)
                    return n
            }
        }
        ,
        i.onmousedown = function(t) {
            var e = t.button;
            e && 0 !== e && 1 !== e || this._pointerDown(t, t)
        }
        ,
        i.ontouchstart = function(t) {
            this._pointerDown(t, t.changedTouches[0])
        }
        ,
        i.onpointerdown = function(t) {
            this._pointerDown(t, t)
        }
        ,
        i._pointerDown = function(t, e) {
            t.button || this.isPointerDown || (this.isPointerDown = !0,
            this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier,
            this.pointerDown(t, e))
        }
        ,
        i.pointerDown = function(t, e) {
            this._bindPostStartEvents(t),
            this.emitEvent("pointerDown", [t, e])
        }
        ;
        var r = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"]
        };
        return i._bindPostStartEvents = function(e) {
            if (e) {
                var n = r[e.type];
                n.forEach(function(e) {
                    t.addEventListener(e, this)
                }, this),
                this._boundPointerEvents = n
            }
        }
        ,
        i._unbindPostStartEvents = function() {
            this._boundPointerEvents && (this._boundPointerEvents.forEach(function(e) {
                t.removeEventListener(e, this)
            }, this),
            delete this._boundPointerEvents)
        }
        ,
        i.onmousemove = function(t) {
            this._pointerMove(t, t)
        }
        ,
        i.onpointermove = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
        }
        ,
        i.ontouchmove = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerMove(t, e)
        }
        ,
        i._pointerMove = function(t, e) {
            this.pointerMove(t, e)
        }
        ,
        i.pointerMove = function(t, e) {
            this.emitEvent("pointerMove", [t, e])
        }
        ,
        i.onmouseup = function(t) {
            this._pointerUp(t, t)
        }
        ,
        i.onpointerup = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
        }
        ,
        i.ontouchend = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerUp(t, e)
        }
        ,
        i._pointerUp = function(t, e) {
            this._pointerDone(),
            this.pointerUp(t, e)
        }
        ,
        i.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e])
        }
        ,
        i._pointerDone = function() {
            this._pointerReset(),
            this._unbindPostStartEvents(),
            this.pointerDone()
        }
        ,
        i._pointerReset = function() {
            this.isPointerDown = !1,
            delete this.pointerIdentifier
        }
        ,
        i.pointerDone = function() {}
        ,
        i.onpointercancel = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
        }
        ,
        i.ontouchcancel = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerCancel(t, e)
        }
        ,
        i._pointerCancel = function(t, e) {
            this._pointerDone(),
            this.pointerCancel(t, e)
        }
        ,
        i.pointerCancel = function(t, e) {
            this.emitEvent("pointerCancel", [t, e])
        }
        ,
        n.getPointerPoint = function(t) {
            return {
                x: t.pageX,
                y: t.pageY
            }
        }
        ,
        n
    })
}
, function(t, e, n) {
    var i, r;
    !function(o, s) {
        i = [n(12)],
        void 0 === (r = function(t) {
            return s(o, t)
        }
        .apply(e, i)) || (t.exports = r)
    }(window, function(t, e) {
        "use strict";
        function n(t) {
            this.bindTap(t)
        }
        var i = n.prototype = Object.create(e.prototype);
        return i.bindTap = function(t) {
            t && (this.unbindTap(),
            this.tapElement = t,
            this._bindStartEvent(t, !0))
        }
        ,
        i.unbindTap = function() {
            this.tapElement && (this._bindStartEvent(this.tapElement, !0),
            delete this.tapElement)
        }
        ,
        i.pointerUp = function(n, i) {
            if (!this.isIgnoringMouseUp || "mouseup" != n.type) {
                var r = e.getPointerPoint(i)
                  , o = this.tapElement.getBoundingClientRect()
                  , s = t.pageXOffset
                  , a = t.pageYOffset;
                if (r.x >= o.left + s && r.x <= o.right + s && r.y >= o.top + a && r.y <= o.bottom + a && this.emitEvent("tap", [n, i]),
                "mouseup" != n.type) {
                    this.isIgnoringMouseUp = !0;
                    var l = this;
                    setTimeout(function() {
                        delete l.isIgnoringMouseUp
                    }, 400)
                }
            }
        }
        ,
        i.destroy = function() {
            this.pointerDone(),
            this.unbindTap()
        }
        ,
        n
    })
}
, function(t, e, n) {
    var i;
    !function(e, n) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
            if (!t.document)
                throw new Error("jQuery requires a window with a document");
            return n(t)
        }
        : n(e)
    }("undefined" != typeof window ? window : this, function(n, r) {
        "use strict";
        var o = []
          , s = n.document
          , a = Object.getPrototypeOf
          , l = o.slice
          , u = o.concat
          , c = o.push
          , h = o.indexOf
          , d = {}
          , f = d.toString
          , p = d.hasOwnProperty
          , g = p.toString
          , v = g.call(Object)
          , m = {}
          , y = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }
          , x = function(t) {
            return null != t && t === t.window
        }
          , b = {
            type: !0,
            src: !0,
            noModule: !0
        };
        function w(t, e, n) {
            var i, r = (e = e || s).createElement("script");
            if (r.text = t,
            n)
                for (i in b)
                    n[i] && (r[i] = n[i]);
            e.head.appendChild(r).parentNode.removeChild(r)
        }
        function C(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? d[f.call(t)] || "object" : typeof t
        }
        var S = function(t, e) {
            return new S.fn.init(t,e)
        }
          , E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function D(t) {
            var e = !!t && "length"in t && t.length
              , n = C(t);
            return !y(t) && !x(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        S.fn = S.prototype = {
            jquery: "3.3.1",
            constructor: S,
            length: 0,
            toArray: function() {
                return l.call(this)
            },
            get: function(t) {
                return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = S.merge(this.constructor(), t);
                return e.prevObject = this,
                e
            },
            each: function(t) {
                return S.each(this, t)
            },
            map: function(t) {
                return this.pushStack(S.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length
                  , n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: c,
            sort: o.sort,
            splice: o.splice
        },
        S.extend = S.fn.extend = function() {
            var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s,
            s = arguments[a] || {},
            a++),
            "object" == typeof s || y(s) || (s = {}),
            a === l && (s = this,
            a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t)
                        n = s[e],
                        s !== (i = t[e]) && (u && i && (S.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1,
                        o = n && Array.isArray(n) ? n : []) : o = n && S.isPlainObject(n) ? n : {},
                        s[e] = S.extend(u, o, i)) : void 0 !== i && (s[e] = i));
            return s
        }
        ,
        S.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== f.call(t)) && (!(e = a(t)) || "function" == typeof (n = p.call(e, "constructor") && e.constructor) && g.call(n) === v)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t)
                    return !1;
                return !0
            },
            globalEval: function(t) {
                w(t)
            },
            each: function(t, e) {
                var n, i = 0;
                if (D(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++)
                        ;
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i]))
                            break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(E, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (D(Object(t)) ? S.merge(n, "string" == typeof t ? [t] : t) : c.call(n, t)),
                n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : h.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++)
                    t[r++] = e[i];
                return t.length = r,
                t
            },
            grep: function(t, e, n) {
                for (var i = [], r = 0, o = t.length, s = !n; r < o; r++)
                    !e(t[r], r) !== s && i.push(t[r]);
                return i
            },
            map: function(t, e, n) {
                var i, r, o = 0, s = [];
                if (D(t))
                    for (i = t.length; o < i; o++)
                        null != (r = e(t[o], o, n)) && s.push(r);
                else
                    for (o in t)
                        null != (r = e(t[o], o, n)) && s.push(r);
                return u.apply([], s)
            },
            guid: 1,
            support: m
        }),
        "function" == typeof Symbol && (S.fn[Symbol.iterator] = o[Symbol.iterator]),
        S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            d["[object " + e + "]"] = e.toLowerCase()
        });
        var T = function(t) {
            var e, n, i, r, o, s, a, l, u, c, h, d, f, p, g, v, m, y, x, b = "sizzle" + 1 * new Date, w = t.document, C = 0, S = 0, E = st(), D = st(), T = st(), A = function(t, e) {
                return t === e && (h = !0),
                0
            }, k = {}.hasOwnProperty, P = [], L = P.pop, N = P.push, _ = P.push, j = P.slice, M = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e)
                        return n;
                return -1
            }, I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", q = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", O = "\\[" + q + "*(" + H + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + q + "*\\]", W = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", z = new RegExp(q + "+","g"), R = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$","g"), F = new RegExp("^" + q + "*," + q + "*"), B = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"), U = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]","g"), $ = new RegExp(W), X = new RegExp("^" + H + "$"), V = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)","i"),
                bool: new RegExp("^(?:" + I + ")$","i"),
                needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)","i")
            }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)","ig"), tt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, nt = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, it = function() {
                d()
            }, rt = yt(function(t) {
                return !0 === t.disabled && ("form"in t || "label"in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                _.apply(P = j.call(w.childNodes), w.childNodes),
                P[w.childNodes.length].nodeType
            } catch (t) {
                _ = {
                    apply: P.length ? function(t, e) {
                        N.apply(t, j.call(e))
                    }
                    : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++]; )
                            ;
                        t.length = n - 1
                    }
                }
            }
            function ot(t, e, i, r) {
                var o, a, u, c, h, p, m, y = e && e.ownerDocument, C = e ? e.nodeType : 9;
                if (i = i || [],
                "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C)
                    return i;
                if (!r && ((e ? e.ownerDocument || e : w) !== f && d(e),
                e = e || f,
                g)) {
                    if (11 !== C && (h = J.exec(t)))
                        if (o = h[1]) {
                            if (9 === C) {
                                if (!(u = e.getElementById(o)))
                                    return i;
                                if (u.id === o)
                                    return i.push(u),
                                    i
                            } else if (y && (u = y.getElementById(o)) && x(e, u) && u.id === o)
                                return i.push(u),
                                i
                        } else {
                            if (h[2])
                                return _.apply(i, e.getElementsByTagName(t)),
                                i;
                            if ((o = h[3]) && n.getElementsByClassName && e.getElementsByClassName)
                                return _.apply(i, e.getElementsByClassName(o)),
                                i
                        }
                    if (n.qsa && !T[t + " "] && (!v || !v.test(t))) {
                        if (1 !== C)
                            y = e,
                            m = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((c = e.getAttribute("id")) ? c = c.replace(et, nt) : e.setAttribute("id", c = b),
                            a = (p = s(t)).length; a--; )
                                p[a] = "#" + c + " " + mt(p[a]);
                            m = p.join(","),
                            y = K.test(t) && gt(e.parentNode) || e
                        }
                        if (m)
                            try {
                                return _.apply(i, y.querySelectorAll(m)),
                                i
                            } catch (t) {} finally {
                                c === b && e.removeAttribute("id")
                            }
                    }
                }
                return l(t.replace(R, "$1"), e, i, r)
            }
            function st() {
                var t = [];
                return function e(n, r) {
                    return t.push(n + " ") > i.cacheLength && delete e[t.shift()],
                    e[n + " "] = r
                }
            }
            function at(t) {
                return t[b] = !0,
                t
            }
            function lt(t) {
                var e = f.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e),
                    e = null
                }
            }
            function ut(t, e) {
                for (var n = t.split("|"), r = n.length; r--; )
                    i.attrHandle[n[r]] = e
            }
            function ct(t, e) {
                var n = e && t
                  , i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === e)
                            return -1;
                return t ? 1 : -1
            }
            function ht(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }
            function dt(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }
            function ft(t) {
                return function(e) {
                    return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && rt(e) === t : e.disabled === t : "label"in e && e.disabled === t
                }
            }
            function pt(t) {
                return at(function(e) {
                    return e = +e,
                    at(function(n, i) {
                        for (var r, o = t([], n.length, e), s = o.length; s--; )
                            n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }
            function gt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in n = ot.support = {},
            o = ot.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }
            ,
            d = ot.setDocument = function(t) {
                var e, r, s = t ? t.ownerDocument || t : w;
                return s !== f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement,
                g = !o(f),
                w !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", it, !1) : r.attachEvent && r.attachEvent("onunload", it)),
                n.attributes = lt(function(t) {
                    return t.className = "i",
                    !t.getAttribute("className")
                }),
                n.getElementsByTagName = lt(function(t) {
                    return t.appendChild(f.createComment("")),
                    !t.getElementsByTagName("*").length
                }),
                n.getElementsByClassName = Q.test(f.getElementsByClassName),
                n.getById = lt(function(t) {
                    return p.appendChild(t).id = b,
                    !f.getElementsByName || !f.getElementsByName(b).length
                }),
                n.getById ? (i.filter.ID = function(t) {
                    var e = t.replace(Z, tt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }
                ,
                i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && g) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }
                ) : (i.filter.ID = function(t) {
                    var e = t.replace(Z, tt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }
                ,
                i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && g) {
                        var n, i, r, o = e.getElementById(t);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === t)
                                return [o];
                            for (r = e.getElementsByName(t),
                            i = 0; o = r[i++]; )
                                if ((n = o.getAttributeNode("id")) && n.value === t)
                                    return [o]
                        }
                        return []
                    }
                }
                ),
                i.find.TAG = n.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                }
                : function(t, e) {
                    var n, i = [], r = 0, o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++]; )
                            1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }
                ,
                i.find.CLASS = n.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && g)
                        return e.getElementsByClassName(t)
                }
                ,
                m = [],
                v = [],
                (n.qsa = Q.test(f.querySelectorAll)) && (lt(function(t) {
                    p.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + q + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length || v.push("\\[" + q + "*(?:value|" + I + ")"),
                    t.querySelectorAll("[id~=" + b + "-]").length || v.push("~="),
                    t.querySelectorAll(":checked").length || v.push(":checked"),
                    t.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]")
                }),
                lt(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = f.createElement("input");
                    e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length && v.push("name" + q + "*[*^$|!~]?="),
                    2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                    p.appendChild(t).disabled = !0,
                    2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    v.push(",.*:")
                })),
                (n.matchesSelector = Q.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt(function(t) {
                    n.disconnectedMatch = y.call(t, "*"),
                    y.call(t, "[s!='']:x"),
                    m.push("!=", W)
                }),
                v = v.length && new RegExp(v.join("|")),
                m = m.length && new RegExp(m.join("|")),
                e = Q.test(p.compareDocumentPosition),
                x = e || Q.test(p.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t
                      , i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                }
                : function(t, e) {
                    if (e)
                        for (; e = e.parentNode; )
                            if (e === t)
                                return !0;
                    return !1
                }
                ,
                A = e ? function(t, e) {
                    if (t === e)
                        return h = !0,
                        0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === f || t.ownerDocument === w && x(w, t) ? -1 : e === f || e.ownerDocument === w && x(w, e) ? 1 : c ? M(c, t) - M(c, e) : 0 : 4 & i ? -1 : 1)
                }
                : function(t, e) {
                    if (t === e)
                        return h = !0,
                        0;
                    var n, i = 0, r = t.parentNode, o = e.parentNode, s = [t], a = [e];
                    if (!r || !o)
                        return t === f ? -1 : e === f ? 1 : r ? -1 : o ? 1 : c ? M(c, t) - M(c, e) : 0;
                    if (r === o)
                        return ct(t, e);
                    for (n = t; n = n.parentNode; )
                        s.unshift(n);
                    for (n = e; n = n.parentNode; )
                        a.unshift(n);
                    for (; s[i] === a[i]; )
                        i++;
                    return i ? ct(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
                }
                ,
                f) : f
            }
            ,
            ot.matches = function(t, e) {
                return ot(t, null, null, e)
            }
            ,
            ot.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== f && d(t),
                e = e.replace(U, "='$1']"),
                n.matchesSelector && g && !T[e + " "] && (!m || !m.test(e)) && (!v || !v.test(e)))
                    try {
                        var i = y.call(t, e);
                        if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                            return i
                    } catch (t) {}
                return ot(e, f, null, [t]).length > 0
            }
            ,
            ot.contains = function(t, e) {
                return (t.ownerDocument || t) !== f && d(t),
                x(t, e)
            }
            ,
            ot.attr = function(t, e) {
                (t.ownerDocument || t) !== f && d(t);
                var r = i.attrHandle[e.toLowerCase()]
                  , o = r && k.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
            }
            ,
            ot.escape = function(t) {
                return (t + "").replace(et, nt)
            }
            ,
            ot.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }
            ,
            ot.uniqueSort = function(t) {
                var e, i = [], r = 0, o = 0;
                if (h = !n.detectDuplicates,
                c = !n.sortStable && t.slice(0),
                t.sort(A),
                h) {
                    for (; e = t[o++]; )
                        e === t[o] && (r = i.push(o));
                    for (; r--; )
                        t.splice(i[r], 1)
                }
                return c = null,
                t
            }
            ,
            r = ot.getText = function(t) {
                var e, n = "", i = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent)
                            return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)
                            n += r(t)
                    } else if (3 === o || 4 === o)
                        return t.nodeValue
                } else
                    for (; e = t[i++]; )
                        n += r(e);
                return n
            }
            ,
            (i = ot.selectors = {
                cacheLength: 50,
                createPseudo: at,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(Z, tt),
                        t[3] = (t[3] || t[4] || t[5] || "").replace(Z, tt),
                        "~=" === t[2] && (t[3] = " " + t[3] + " "),
                        t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(),
                        "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]),
                        t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                        t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]),
                        t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && $.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                        t[2] = n.slice(0, e)),
                        t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(Z, tt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        }
                        : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = E[t + " "];
                        return e || (e = new RegExp("(^|" + q + ")" + t + "(" + q + "|$)")) && E(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, n) {
                        return function(i) {
                            var r = ot.attr(i, t);
                            return null == r ? "!=" === e : !e || (r += "",
                            "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(z, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3)
                          , s = "last" !== t.slice(-4)
                          , a = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) {
                            return !!t.parentNode
                        }
                        : function(e, n, l) {
                            var u, c, h, d, f, p, g = o !== s ? "nextSibling" : "previousSibling", v = e.parentNode, m = a && e.nodeName.toLowerCase(), y = !l && !a, x = !1;
                            if (v) {
                                if (o) {
                                    for (; g; ) {
                                        for (d = e; d = d[g]; )
                                            if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType)
                                                return !1;
                                        p = g = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? v.firstChild : v.lastChild],
                                s && y) {
                                    for (x = (f = (u = (c = (h = (d = v)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === C && u[1]) && u[2],
                                    d = f && v.childNodes[f]; d = ++f && d && d[g] || (x = f = 0) || p.pop(); )
                                        if (1 === d.nodeType && ++x && d === e) {
                                            c[t] = [C, f, x];
                                            break
                                        }
                                } else if (y && (x = f = (u = (c = (h = (d = e)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === C && u[1]),
                                !1 === x)
                                    for (; (d = ++f && d && d[g] || (x = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++x || (y && ((c = (h = d[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [C, x]),
                                    d !== e)); )
                                        ;
                                return (x -= r) === i || x % i == 0 && x / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                        return r[b] ? r(e) : r.length > 1 ? (n = [t, t, "", e],
                        i.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, n) {
                            for (var i, o = r(t, e), s = o.length; s--; )
                                t[i = M(t, o[s])] = !(n[i] = o[s])
                        }) : function(t) {
                            return r(t, 0, n)
                        }
                        ) : r
                    }
                },
                pseudos: {
                    not: at(function(t) {
                        var e = []
                          , n = []
                          , i = a(t.replace(R, "$1"));
                        return i[b] ? at(function(t, e, n, r) {
                            for (var o, s = i(t, null, r, []), a = t.length; a--; )
                                (o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, r, o) {
                            return e[0] = t,
                            i(e, null, o, n),
                            e[0] = null,
                            !n.pop()
                        }
                    }),
                    has: at(function(t) {
                        return function(e) {
                            return ot(t, e).length > 0
                        }
                    }),
                    contains: at(function(t) {
                        return t = t.replace(Z, tt),
                        function(e) {
                            return (e.textContent || e.innerText || r(e)).indexOf(t) > -1
                        }
                    }),
                    lang: at(function(t) {
                        return X.test(t || "") || ot.error("unsupported lang: " + t),
                        t = t.replace(Z, tt).toLowerCase(),
                        function(e) {
                            var n;
                            do {
                                if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                    return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                        }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === p
                    },
                    focus: function(t) {
                        return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: ft(!1),
                    disabled: ft(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex,
                        !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !i.pseudos.empty(t)
                    },
                    header: function(t) {
                        return Y.test(t.nodeName)
                    },
                    input: function(t) {
                        return G.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: pt(function() {
                        return [0]
                    }),
                    last: pt(function(t, e) {
                        return [e - 1]
                    }),
                    eq: pt(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: pt(function(t, e) {
                        for (var n = 0; n < e; n += 2)
                            t.push(n);
                        return t
                    }),
                    odd: pt(function(t, e) {
                        for (var n = 1; n < e; n += 2)
                            t.push(n);
                        return t
                    }),
                    lt: pt(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0; )
                            t.push(i);
                        return t
                    }),
                    gt: pt(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e; )
                            t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = i.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                i.pseudos[e] = ht(e);
            for (e in {
                submit: !0,
                reset: !0
            })
                i.pseudos[e] = dt(e);
            function vt() {}
            function mt(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++)
                    i += t[e].value;
                return i
            }
            function yt(t, e, n) {
                var i = e.dir
                  , r = e.next
                  , o = r || i
                  , s = n && "parentNode" === o
                  , a = S++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i]; )
                        if (1 === e.nodeType || s)
                            return t(e, n, r);
                    return !1
                }
                : function(e, n, l) {
                    var u, c, h, d = [C, a];
                    if (l) {
                        for (; e = e[i]; )
                            if ((1 === e.nodeType || s) && t(e, n, l))
                                return !0
                    } else
                        for (; e = e[i]; )
                            if (1 === e.nodeType || s)
                                if (c = (h = e[b] || (e[b] = {}))[e.uniqueID] || (h[e.uniqueID] = {}),
                                r && r === e.nodeName.toLowerCase())
                                    e = e[i] || e;
                                else {
                                    if ((u = c[o]) && u[0] === C && u[1] === a)
                                        return d[2] = u[2];
                                    if (c[o] = d,
                                    d[2] = t(e, n, l))
                                        return !0
                                }
                    return !1
                }
            }
            function xt(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var r = t.length; r--; )
                        if (!t[r](e, n, i))
                            return !1;
                    return !0
                }
                : t[0]
            }
            function bt(t, e, n, i, r) {
                for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)
                    (o = t[a]) && (n && !n(o, i, r) || (s.push(o),
                    u && e.push(a)));
                return s
            }
            function wt(t, e, n, i, r, o) {
                return i && !i[b] && (i = wt(i)),
                r && !r[b] && (r = wt(r, o)),
                at(function(o, s, a, l) {
                    var u, c, h, d = [], f = [], p = s.length, g = o || function(t, e, n) {
                        for (var i = 0, r = e.length; i < r; i++)
                            ot(t, e[i], n);
                        return n
                    }(e || "*", a.nodeType ? [a] : a, []), v = !t || !o && e ? g : bt(g, d, t, a, l), m = n ? r || (o ? t : p || i) ? [] : s : v;
                    if (n && n(v, m, a, l),
                    i)
                        for (u = bt(m, f),
                        i(u, [], a, l),
                        c = u.length; c--; )
                            (h = u[c]) && (m[f[c]] = !(v[f[c]] = h));
                    if (o) {
                        if (r || t) {
                            if (r) {
                                for (u = [],
                                c = m.length; c--; )
                                    (h = m[c]) && u.push(v[c] = h);
                                r(null, m = [], u, l)
                            }
                            for (c = m.length; c--; )
                                (h = m[c]) && (u = r ? M(o, h) : d[c]) > -1 && (o[u] = !(s[u] = h))
                        }
                    } else
                        m = bt(m === s ? m.splice(p, m.length) : m),
                        r ? r(null, s, m, l) : _.apply(s, m)
                })
            }
            function Ct(t) {
                for (var e, n, r, o = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = yt(function(t) {
                    return t === e
                }, a, !0), h = yt(function(t) {
                    return M(e, t) > -1
                }, a, !0), d = [function(t, n, i) {
                    var r = !s && (i || n !== u) || ((e = n).nodeType ? c(t, n, i) : h(t, n, i));
                    return e = null,
                    r
                }
                ]; l < o; l++)
                    if (n = i.relative[t[l].type])
                        d = [yt(xt(d), n)];
                    else {
                        if ((n = i.filter[t[l].type].apply(null, t[l].matches))[b]) {
                            for (r = ++l; r < o && !i.relative[t[r].type]; r++)
                                ;
                            return wt(l > 1 && xt(d), l > 1 && mt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(R, "$1"), n, l < r && Ct(t.slice(l, r)), r < o && Ct(t = t.slice(r)), r < o && mt(t))
                        }
                        d.push(n)
                    }
                return xt(d)
            }
            return vt.prototype = i.filters = i.pseudos,
            i.setFilters = new vt,
            s = ot.tokenize = function(t, e) {
                var n, r, o, s, a, l, u, c = D[t + " "];
                if (c)
                    return e ? 0 : c.slice(0);
                for (a = t,
                l = [],
                u = i.preFilter; a; ) {
                    for (s in n && !(r = F.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                    l.push(o = [])),
                    n = !1,
                    (r = B.exec(a)) && (n = r.shift(),
                    o.push({
                        value: n,
                        type: r[0].replace(R, " ")
                    }),
                    a = a.slice(n.length)),
                    i.filter)
                        !(r = V[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(),
                        o.push({
                            value: n,
                            type: s,
                            matches: r
                        }),
                        a = a.slice(n.length));
                    if (!n)
                        break
                }
                return e ? a.length : a ? ot.error(t) : D(t, l).slice(0)
            }
            ,
            a = ot.compile = function(t, e) {
                var n, r = [], o = [], a = T[t + " "];
                if (!a) {
                    for (e || (e = s(t)),
                    n = e.length; n--; )
                        (a = Ct(e[n]))[b] ? r.push(a) : o.push(a);
                    (a = T(t, function(t, e) {
                        var n = e.length > 0
                          , r = t.length > 0
                          , o = function(o, s, a, l, c) {
                            var h, p, v, m = 0, y = "0", x = o && [], b = [], w = u, S = o || r && i.find.TAG("*", c), E = C += null == w ? 1 : Math.random() || .1, D = S.length;
                            for (c && (u = s === f || s || c); y !== D && null != (h = S[y]); y++) {
                                if (r && h) {
                                    for (p = 0,
                                    s || h.ownerDocument === f || (d(h),
                                    a = !g); v = t[p++]; )
                                        if (v(h, s || f, a)) {
                                            l.push(h);
                                            break
                                        }
                                    c && (C = E)
                                }
                                n && ((h = !v && h) && m--,
                                o && x.push(h))
                            }
                            if (m += y,
                            n && y !== m) {
                                for (p = 0; v = e[p++]; )
                                    v(x, b, s, a);
                                if (o) {
                                    if (m > 0)
                                        for (; y--; )
                                            x[y] || b[y] || (b[y] = L.call(l));
                                    b = bt(b)
                                }
                                _.apply(l, b),
                                c && !o && b.length > 0 && m + e.length > 1 && ot.uniqueSort(l)
                            }
                            return c && (C = E,
                            u = w),
                            x
                        };
                        return n ? at(o) : o
                    }(o, r))).selector = t
                }
                return a
            }
            ,
            l = ot.select = function(t, e, n, r) {
                var o, l, u, c, h, d = "function" == typeof t && t, f = !r && s(t = d.selector || t);
                if (n = n || [],
                1 === f.length) {
                    if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                        if (!(e = (i.find.ID(u.matches[0].replace(Z, tt), e) || [])[0]))
                            return n;
                        d && (e = e.parentNode),
                        t = t.slice(l.shift().value.length)
                    }
                    for (o = V.needsContext.test(t) ? 0 : l.length; o-- && (u = l[o],
                    !i.relative[c = u.type]); )
                        if ((h = i.find[c]) && (r = h(u.matches[0].replace(Z, tt), K.test(l[0].type) && gt(e.parentNode) || e))) {
                            if (l.splice(o, 1),
                            !(t = r.length && mt(l)))
                                return _.apply(n, r),
                                n;
                            break
                        }
                }
                return (d || a(t, f))(r, e, !g, n, !e || K.test(t) && gt(e.parentNode) || e),
                n
            }
            ,
            n.sortStable = b.split("").sort(A).join("") === b,
            n.detectDuplicates = !!h,
            d(),
            n.sortDetached = lt(function(t) {
                return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
            }),
            lt(function(t) {
                return t.innerHTML = "<a href='#'></a>",
                "#" === t.firstChild.getAttribute("href")
            }) || ut("type|href|height|width", function(t, e, n) {
                if (!n)
                    return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }),
            n.attributes && lt(function(t) {
                return t.innerHTML = "<input/>",
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
            }) || ut("value", function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase())
                    return t.defaultValue
            }),
            lt(function(t) {
                return null == t.getAttribute("disabled")
            }) || ut(I, function(t, e, n) {
                var i;
                if (!n)
                    return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }),
            ot
        }(n);
        S.find = T,
        S.expr = T.selectors,
        S.expr[":"] = S.expr.pseudos,
        S.uniqueSort = S.unique = T.uniqueSort,
        S.text = T.getText,
        S.isXMLDoc = T.isXML,
        S.contains = T.contains,
        S.escapeSelector = T.escape;
        var A = function(t, e, n) {
            for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (r && S(t).is(n))
                        break;
                    i.push(t)
                }
            return i
        }
          , k = function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
          , P = S.expr.match.needsContext;
        function L(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function _(t, e, n) {
            return y(e) ? S.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            }) : e.nodeType ? S.grep(t, function(t) {
                return t === e !== n
            }) : "string" != typeof e ? S.grep(t, function(t) {
                return h.call(e, t) > -1 !== n
            }) : S.filter(e, t, n)
        }
        S.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === i.nodeType ? S.find.matchesSelector(i, t) ? [i] : [] : S.find.matches(t, S.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }
        ,
        S.fn.extend({
            find: function(t) {
                var e, n, i = this.length, r = this;
                if ("string" != typeof t)
                    return this.pushStack(S(t).filter(function() {
                        for (e = 0; e < i; e++)
                            if (S.contains(r[e], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                e = 0; e < i; e++)
                    S.find(t, r[e], n);
                return i > 1 ? S.uniqueSort(n) : n
            },
            filter: function(t) {
                return this.pushStack(_(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(_(this, t || [], !0))
            },
            is: function(t) {
                return !!_(this, "string" == typeof t && P.test(t) ? S(t) : t || [], !1).length
            }
        });
        var j, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (S.fn.init = function(t, e, n) {
            var i, r;
            if (!t)
                return this;
            if (n = n || j,
            "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : M.exec(t)) || !i[1] && e)
                    return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof S ? e[0] : e,
                    S.merge(this, S.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : s, !0)),
                    N.test(i[1]) && S.isPlainObject(e))
                        for (i in e)
                            y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (r = s.getElementById(i[2])) && (this[0] = r,
                this.length = 1),
                this
            }
            return t.nodeType ? (this[0] = t,
            this.length = 1,
            this) : y(t) ? void 0 !== n.ready ? n.ready(t) : t(S) : S.makeArray(t, this)
        }
        ).prototype = S.fn,
        j = S(s);
        var I = /^(?:parents|prev(?:Until|All))/
          , q = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function H(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType; )
                ;
            return t
        }
        S.fn.extend({
            has: function(t) {
                var e = S(t, this)
                  , n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (S.contains(this, e[t]))
                            return !0
                })
            },
            closest: function(t, e) {
                var n, i = 0, r = this.length, o = [], s = "string" != typeof t && S(t);
                if (!P.test(t))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, t))) {
                                o.push(n);
                                break
                            }
                return this.pushStack(o.length > 1 ? S.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? h.call(S(t), this[0]) : h.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(S.uniqueSort(S.merge(this.get(), S(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }),
        S.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return A(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return A(t, "parentNode", n)
            },
            next: function(t) {
                return H(t, "nextSibling")
            },
            prev: function(t) {
                return H(t, "previousSibling")
            },
            nextAll: function(t) {
                return A(t, "nextSibling")
            },
            prevAll: function(t) {
                return A(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return A(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return A(t, "previousSibling", n)
            },
            siblings: function(t) {
                return k((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return k(t.firstChild)
            },
            contents: function(t) {
                return L(t, "iframe") ? t.contentDocument : (L(t, "template") && (t = t.content || t),
                S.merge([], t.childNodes))
            }
        }, function(t, e) {
            S.fn[t] = function(n, i) {
                var r = S.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n),
                i && "string" == typeof i && (r = S.filter(i, r)),
                this.length > 1 && (q[t] || S.uniqueSort(r),
                I.test(t) && r.reverse()),
                this.pushStack(r)
            }
        });
        var O = /[^\x20\t\r\n\f]+/g;
        function W(t) {
            return t
        }
        function z(t) {
            throw t
        }
        function R(t, e, n, i) {
            var r;
            try {
                t && y(r = t.promise) ? r.call(t).done(e).fail(n) : t && y(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }
        S.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return S.each(t.match(O) || [], function(t, n) {
                    e[n] = !0
                }),
                e
            }(t) : S.extend({}, t);
            var e, n, i, r, o = [], s = [], a = -1, l = function() {
                for (r = r || t.once,
                i = e = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < o.length; )
                        !1 === o[a].apply(n[0], n[1]) && t.stopOnFalse && (a = o.length,
                        n = !1);
                t.memory || (n = !1),
                e = !1,
                r && (o = n ? [] : "")
            }, u = {
                add: function() {
                    return o && (n && !e && (a = o.length - 1,
                    s.push(n)),
                    function e(n) {
                        S.each(n, function(n, i) {
                            y(i) ? t.unique && u.has(i) || o.push(i) : i && i.length && "string" !== C(i) && e(i)
                        })
                    }(arguments),
                    n && !e && l()),
                    this
                },
                remove: function() {
                    return S.each(arguments, function(t, e) {
                        for (var n; (n = S.inArray(e, o, n)) > -1; )
                            o.splice(n, 1),
                            n <= a && a--
                    }),
                    this
                },
                has: function(t) {
                    return t ? S.inArray(t, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []),
                    this
                },
                disable: function() {
                    return r = s = [],
                    o = n = "",
                    this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = s = [],
                    n || e || (o = n = ""),
                    this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, n) {
                    return r || (n = [t, (n = n || []).slice ? n.slice() : n],
                    s.push(n),
                    e || l()),
                    this
                },
                fire: function() {
                    return u.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!i
                }
            };
            return u
        }
        ,
        S.extend({
            Deferred: function(t) {
                var e = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
                  , i = "pending"
                  , r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(t) {
                        return r.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return S.Deferred(function(n) {
                            S.each(e, function(e, i) {
                                var r = y(t[i[4]]) && t[i[4]];
                                o[i[1]](function() {
                                    var t = r && r.apply(this, arguments);
                                    t && y(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments)
                                })
                            }),
                            t = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        var o = 0;
                        function s(t, e, i, r) {
                            return function() {
                                var a = this
                                  , l = arguments
                                  , u = function() {
                                    var n, u;
                                    if (!(t < o)) {
                                        if ((n = i.apply(a, l)) === e.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        u = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        y(u) ? r ? u.call(n, s(o, e, W, r), s(o, e, z, r)) : (o++,
                                        u.call(n, s(o, e, W, r), s(o, e, z, r), s(o, e, W, e.notifyWith))) : (i !== W && (a = void 0,
                                        l = [n]),
                                        (r || e.resolveWith)(a, l))
                                    }
                                }
                                  , c = r ? u : function() {
                                    try {
                                        u()
                                    } catch (n) {
                                        S.Deferred.exceptionHook && S.Deferred.exceptionHook(n, c.stackTrace),
                                        t + 1 >= o && (i !== z && (a = void 0,
                                        l = [n]),
                                        e.rejectWith(a, l))
                                    }
                                }
                                ;
                                t ? c() : (S.Deferred.getStackHook && (c.stackTrace = S.Deferred.getStackHook()),
                                n.setTimeout(c))
                            }
                        }
                        return S.Deferred(function(n) {
                            e[0][3].add(s(0, n, y(r) ? r : W, n.notifyWith)),
                            e[1][3].add(s(0, n, y(t) ? t : W)),
                            e[2][3].add(s(0, n, y(i) ? i : z))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? S.extend(t, r) : r
                    }
                }
                  , o = {};
                return S.each(e, function(t, n) {
                    var s = n[2]
                      , a = n[5];
                    r[n[1]] = s.add,
                    a && s.add(function() {
                        i = a
                    }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock),
                    s.add(n[3].fire),
                    o[n[0]] = function() {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments),
                        this
                    }
                    ,
                    o[n[0] + "With"] = s.fireWith
                }),
                r.promise(o),
                t && t.call(o, o),
                o
            },
            when: function(t) {
                var e = arguments.length
                  , n = e
                  , i = Array(n)
                  , r = l.call(arguments)
                  , o = S.Deferred()
                  , s = function(t) {
                    return function(n) {
                        i[t] = this,
                        r[t] = arguments.length > 1 ? l.call(arguments) : n,
                        --e || o.resolveWith(i, r)
                    }
                };
                if (e <= 1 && (R(t, o.done(s(n)).resolve, o.reject, !e),
                "pending" === o.state() || y(r[n] && r[n].then)))
                    return o.then();
                for (; n--; )
                    R(r[n], s(n), o.reject);
                return o.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        S.Deferred.exceptionHook = function(t, e) {
            n.console && n.console.warn && t && F.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }
        ,
        S.readyException = function(t) {
            n.setTimeout(function() {
                throw t
            })
        }
        ;
        var B = S.Deferred();
        function U() {
            s.removeEventListener("DOMContentLoaded", U),
            n.removeEventListener("load", U),
            S.ready()
        }
        S.fn.ready = function(t) {
            return B.then(t).catch(function(t) {
                S.readyException(t)
            }),
            this
        }
        ,
        S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --S.readyWait : S.isReady) || (S.isReady = !0,
                !0 !== t && --S.readyWait > 0 || B.resolveWith(s, [S]))
            }
        }),
        S.ready.then = B.then,
        "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(S.ready) : (s.addEventListener("DOMContentLoaded", U),
        n.addEventListener("load", U));
        var $ = function(t, e, n, i, r, o, s) {
            var a = 0
              , l = t.length
              , u = null == n;
            if ("object" === C(n))
                for (a in r = !0,
                n)
                    $(t, e, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0,
            y(i) || (s = !0),
            u && (s ? (e.call(t, i),
            e = null) : (u = e,
            e = function(t, e, n) {
                return u.call(S(t), n)
            }
            )),
            e))
                for (; a < l; a++)
                    e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
        }
          , X = /^-ms-/
          , V = /-([a-z])/g;
        function G(t, e) {
            return e.toUpperCase()
        }
        function Y(t) {
            return t.replace(X, "ms-").replace(V, G)
        }
        var Q = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
        function J() {
            this.expando = S.expando + J.uid++
        }
        J.uid = 1,
        J.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {},
                Q(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))),
                e
            },
            set: function(t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e)
                    r[Y(e)] = n;
                else
                    for (i in e)
                        r[Y(i)] = e[i];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n),
                void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e))in i ? [e] : e.match(O) || []).length;
                        for (; n--; )
                            delete i[e[n]]
                    }
                    (void 0 === e || S.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !S.isEmptyObject(e)
            }
        };
        var K = new J
          , Z = new J
          , tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , et = /[A-Z]/g;
        function nt(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(et, "-$&").toLowerCase(),
                "string" == typeof (n = t.getAttribute(i))) {
                    try {
                        n = function(t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                        }(n)
                    } catch (t) {}
                    Z.set(t, e, n)
                } else
                    n = void 0;
            return n
        }
        S.extend({
            hasData: function(t) {
                return Z.hasData(t) || K.hasData(t)
            },
            data: function(t, e, n) {
                return Z.access(t, e, n)
            },
            removeData: function(t, e) {
                Z.remove(t, e)
            },
            _data: function(t, e, n) {
                return K.access(t, e, n)
            },
            _removeData: function(t, e) {
                K.remove(t, e)
            }
        }),
        S.fn.extend({
            data: function(t, e) {
                var n, i, r, o = this[0], s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = Z.get(o),
                    1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--; )
                            s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Y(i.slice(5)),
                            nt(o, i, r[i]));
                        K.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    Z.set(this, t)
                }) : $(this, function(e) {
                    var n;
                    if (o && void 0 === e)
                        return void 0 !== (n = Z.get(o, t)) ? n : void 0 !== (n = nt(o, t)) ? n : void 0;
                    this.each(function() {
                        Z.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Z.remove(this, t)
                })
            }
        }),
        S.extend({
            queue: function(t, e, n) {
                var i;
                if (t)
                    return e = (e || "fx") + "queue",
                    i = K.get(t, e),
                    n && (!i || Array.isArray(n) ? i = K.access(t, e, S.makeArray(n)) : i.push(n)),
                    i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = S.queue(t, e)
                  , i = n.length
                  , r = n.shift()
                  , o = S._queueHooks(t, e);
                "inprogress" === r && (r = n.shift(),
                i--),
                r && ("fx" === e && n.unshift("inprogress"),
                delete o.stop,
                r.call(t, function() {
                    S.dequeue(t, e)
                }, o)),
                !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return K.get(t, n) || K.access(t, n, {
                    empty: S.Callbacks("once memory").add(function() {
                        K.remove(t, [e + "queue", n])
                    })
                })
            }
        }),
        S.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t,
                t = "fx",
                n--),
                arguments.length < n ? S.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = S.queue(this, t, e);
                    S._queueHooks(this, t),
                    "fx" === t && "inprogress" !== n[0] && S.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    S.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1, r = S.Deferred(), o = this, s = this.length, a = function() {
                    --i || r.resolveWith(o, [o])
                };
                for ("string" != typeof t && (e = t,
                t = void 0),
                t = t || "fx"; s--; )
                    (n = K.get(o[s], t + "queueHooks")) && n.empty && (i++,
                    n.empty.add(a));
                return a(),
                r.promise(e)
            }
        });
        var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , rt = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$","i")
          , ot = ["Top", "Right", "Bottom", "Left"]
          , st = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && S.contains(t.ownerDocument, t) && "none" === S.css(t, "display")
        }
          , at = function(t, e, n, i) {
            var r, o, s = {};
            for (o in e)
                s[o] = t.style[o],
                t.style[o] = e[o];
            for (o in r = n.apply(t, i || []),
            e)
                t.style[o] = s[o];
            return r
        };
        function lt(t, e, n, i) {
            var r, o, s = 20, a = i ? function() {
                return i.cur()
            }
            : function() {
                return S.css(t, e, "")
            }
            , l = a(), u = n && n[3] || (S.cssNumber[e] ? "" : "px"), c = (S.cssNumber[e] || "px" !== u && +l) && rt.exec(S.css(t, e));
            if (c && c[3] !== u) {
                for (l /= 2,
                u = u || c[3],
                c = +l || 1; s--; )
                    S.style(t, e, c + u),
                    (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0),
                    c /= o;
                c *= 2,
                S.style(t, e, c + u),
                n = n || []
            }
            return n && (c = +c || +l || 0,
            r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
            i && (i.unit = u,
            i.start = c,
            i.end = r)),
            r
        }
        var ut = {};
        function ct(t) {
            var e, n = t.ownerDocument, i = t.nodeName, r = ut[i];
            return r || (e = n.body.appendChild(n.createElement(i)),
            r = S.css(e, "display"),
            e.parentNode.removeChild(e),
            "none" === r && (r = "block"),
            ut[i] = r,
            r)
        }
        function ht(t, e) {
            for (var n, i, r = [], o = 0, s = t.length; o < s; o++)
                (i = t[o]).style && (n = i.style.display,
                e ? ("none" === n && (r[o] = K.get(i, "display") || null,
                r[o] || (i.style.display = "")),
                "" === i.style.display && st(i) && (r[o] = ct(i))) : "none" !== n && (r[o] = "none",
                K.set(i, "display", n)));
            for (o = 0; o < s; o++)
                null != r[o] && (t[o].style.display = r[o]);
            return t
        }
        S.fn.extend({
            show: function() {
                return ht(this, !0)
            },
            hide: function() {
                return ht(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    st(this) ? S(this).show() : S(this).hide()
                })
            }
        });
        var dt = /^(?:checkbox|radio)$/i
          , ft = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
          , pt = /^$|^module$|\/(?:java|ecma)script/i
          , gt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function vt(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
            void 0 === e || e && L(t, e) ? S.merge([t], n) : n
        }
        function mt(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                K.set(t[n], "globalEval", !e || K.get(e[n], "globalEval"))
        }
        gt.optgroup = gt.option,
        gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead,
        gt.th = gt.td;
        var yt, xt, bt = /<|&#?\w+;/;
        function wt(t, e, n, i, r) {
            for (var o, s, a, l, u, c, h = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++)
                if ((o = t[f]) || 0 === o)
                    if ("object" === C(o))
                        S.merge(d, o.nodeType ? [o] : o);
                    else if (bt.test(o)) {
                        for (s = s || h.appendChild(e.createElement("div")),
                        a = (ft.exec(o) || ["", ""])[1].toLowerCase(),
                        l = gt[a] || gt._default,
                        s.innerHTML = l[1] + S.htmlPrefilter(o) + l[2],
                        c = l[0]; c--; )
                            s = s.lastChild;
                        S.merge(d, s.childNodes),
                        (s = h.firstChild).textContent = ""
                    } else
                        d.push(e.createTextNode(o));
            for (h.textContent = "",
            f = 0; o = d[f++]; )
                if (i && S.inArray(o, i) > -1)
                    r && r.push(o);
                else if (u = S.contains(o.ownerDocument, o),
                s = vt(h.appendChild(o), "script"),
                u && mt(s),
                n)
                    for (c = 0; o = s[c++]; )
                        pt.test(o.type || "") && n.push(o);
            return h
        }
        yt = s.createDocumentFragment().appendChild(s.createElement("div")),
        (xt = s.createElement("input")).setAttribute("type", "radio"),
        xt.setAttribute("checked", "checked"),
        xt.setAttribute("name", "t"),
        yt.appendChild(xt),
        m.checkClone = yt.cloneNode(!0).cloneNode(!0).lastChild.checked,
        yt.innerHTML = "<textarea>x</textarea>",
        m.noCloneChecked = !!yt.cloneNode(!0).lastChild.defaultValue;
        var Ct = s.documentElement
          , St = /^key/
          , Et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , Dt = /^([^.]*)(?:\.(.+)|)/;
        function Tt() {
            return !0
        }
        function At() {
            return !1
        }
        function kt() {
            try {
                return s.activeElement
            } catch (t) {}
        }
        function Pt(t, e, n, i, r, o) {
            var s, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof n && (i = i || n,
                n = void 0),
                e)
                    Pt(t, a, n, i, e[a], o);
                return t
            }
            if (null == i && null == r ? (r = n,
            i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
            i = void 0) : (r = i,
            i = n,
            n = void 0)),
            !1 === r)
                r = At;
            else if (!r)
                return t;
            return 1 === o && (s = r,
            (r = function(t) {
                return S().off(t),
                s.apply(this, arguments)
            }
            ).guid = s.guid || (s.guid = S.guid++)),
            t.each(function() {
                S.event.add(this, e, r, i, n)
            })
        }
        S.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var o, s, a, l, u, c, h, d, f, p, g, v = K.get(t);
                if (v)
                    for (n.handler && (n = (o = n).handler,
                    r = o.selector),
                    r && S.find.matchesSelector(Ct, r),
                    n.guid || (n.guid = S.guid++),
                    (l = v.events) || (l = v.events = {}),
                    (s = v.handle) || (s = v.handle = function(e) {
                        return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    u = (e = (e || "").match(O) || [""]).length; u--; )
                        f = g = (a = Dt.exec(e[u]) || [])[1],
                        p = (a[2] || "").split(".").sort(),
                        f && (h = S.event.special[f] || {},
                        f = (r ? h.delegateType : h.bindType) || f,
                        h = S.event.special[f] || {},
                        c = S.extend({
                            type: f,
                            origType: g,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && S.expr.match.needsContext.test(r),
                            namespace: p.join(".")
                        }, o),
                        (d = l[f]) || ((d = l[f] = []).delegateCount = 0,
                        h.setup && !1 !== h.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(f, s)),
                        h.add && (h.add.call(t, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                        r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                        S.event.global[f] = !0)
            },
            remove: function(t, e, n, i, r) {
                var o, s, a, l, u, c, h, d, f, p, g, v = K.hasData(t) && K.get(t);
                if (v && (l = v.events)) {
                    for (u = (e = (e || "").match(O) || [""]).length; u--; )
                        if (f = g = (a = Dt.exec(e[u]) || [])[1],
                        p = (a[2] || "").split(".").sort(),
                        f) {
                            for (h = S.event.special[f] || {},
                            d = l[f = (i ? h.delegateType : h.bindType) || f] || [],
                            a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            s = o = d.length; o--; )
                                c = d[o],
                                !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1),
                                c.selector && d.delegateCount--,
                                h.remove && h.remove.call(t, c));
                            s && !d.length && (h.teardown && !1 !== h.teardown.call(t, p, v.handle) || S.removeEvent(t, f, v.handle),
                            delete l[f])
                        } else
                            for (f in l)
                                S.event.remove(t, f + e[u], n, i, !0);
                    S.isEmptyObject(l) && K.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, r, o, s, a = S.event.fix(t), l = new Array(arguments.length), u = (K.get(this, "events") || {})[a.type] || [], c = S.event.special[a.type] || {};
                for (l[0] = a,
                e = 1; e < arguments.length; e++)
                    l[e] = arguments[e];
                if (a.delegateTarget = this,
                !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                    for (s = S.event.handlers.call(this, a, u),
                    e = 0; (r = s[e++]) && !a.isPropagationStopped(); )
                        for (a.currentTarget = r.elem,
                        n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                            a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                            a.data = o.data,
                            void 0 !== (i = ((S.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(),
                            a.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, a),
                    a.result
                }
            },
            handlers: function(t, e) {
                var n, i, r, o, s, a = [], l = e.delegateCount, u = t.target;
                if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                            for (o = [],
                            s = {},
                            n = 0; n < l; n++)
                                void 0 === s[r = (i = e[n]).selector + " "] && (s[r] = i.needsContext ? S(r, this).index(u) > -1 : S.find(r, this, null, [u]).length),
                                s[r] && o.push(i);
                            o.length && a.push({
                                elem: u,
                                handlers: o
                            })
                        }
                return u = this,
                l < e.length && a.push({
                    elem: u,
                    handlers: e.slice(l)
                }),
                a
            },
            addProp: function(t, e) {
                Object.defineProperty(S.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(e) ? function() {
                        if (this.originalEvent)
                            return e(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                    ,
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[S.expando] ? t : new S.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== kt() && this.focus)
                            return this.focus(),
                            !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === kt() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && L(this, "input"))
                            return this.click(),
                            !1
                    },
                    _default: function(t) {
                        return L(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        },
        S.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }
        ,
        S.Event = function(t, e) {
            if (!(this instanceof S.Event))
                return new S.Event(t,e);
            t && t.type ? (this.originalEvent = t,
            this.type = t.type,
            this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Tt : At,
            this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
            this.currentTarget = t.currentTarget,
            this.relatedTarget = t.relatedTarget) : this.type = t,
            e && S.extend(this, e),
            this.timeStamp = t && t.timeStamp || Date.now(),
            this[S.expando] = !0
        }
        ,
        S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: At,
            isPropagationStopped: At,
            isImmediatePropagationStopped: At,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = Tt,
                t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = Tt,
                t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = Tt,
                t && !this.isSimulated && t.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        S.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && St.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Et.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, S.event.addProp),
        S.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            S.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = t.relatedTarget, r = t.handleObj;
                    return i && (i === this || S.contains(this, i)) || (t.type = r.origType,
                    n = r.handler.apply(this, arguments),
                    t.type = e),
                    n
                }
            }
        }),
        S.fn.extend({
            on: function(t, e, n, i) {
                return Pt(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return Pt(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj)
                    return i = t.handleObj,
                    S(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                    this;
                if ("object" == typeof t) {
                    for (r in t)
                        this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e,
                e = void 0),
                !1 === n && (n = At),
                this.each(function() {
                    S.event.remove(this, t, n, e)
                })
            }
        });
        var Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , Nt = /<script|<style|<link/i
          , _t = /checked\s*(?:[^=]|=\s*.checked.)/i
          , jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Mt(t, e) {
            return L(t, "table") && L(11 !== e.nodeType ? e : e.firstChild, "tr") && S(t).children("tbody")[0] || t
        }
        function It(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
            t
        }
        function qt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
            t
        }
        function Ht(t, e) {
            var n, i, r, o, s, a, l, u;
            if (1 === e.nodeType) {
                if (K.hasData(t) && (o = K.access(t),
                s = K.set(e, o),
                u = o.events))
                    for (r in delete s.handle,
                    s.events = {},
                    u)
                        for (n = 0,
                        i = u[r].length; n < i; n++)
                            S.event.add(e, r, u[r][n]);
                Z.hasData(t) && (a = Z.access(t),
                l = S.extend({}, a),
                Z.set(e, l))
            }
        }
        function Ot(t, e, n, i) {
            e = u.apply([], e);
            var r, o, s, a, l, c, h = 0, d = t.length, f = d - 1, p = e[0], g = y(p);
            if (g || d > 1 && "string" == typeof p && !m.checkClone && _t.test(p))
                return t.each(function(r) {
                    var o = t.eq(r);
                    g && (e[0] = p.call(this, r, o.html())),
                    Ot(o, e, n, i)
                });
            if (d && (o = (r = wt(e, t[0].ownerDocument, !1, t, i)).firstChild,
            1 === r.childNodes.length && (r = o),
            o || i)) {
                for (a = (s = S.map(vt(r, "script"), It)).length; h < d; h++)
                    l = r,
                    h !== f && (l = S.clone(l, !0, !0),
                    a && S.merge(s, vt(l, "script"))),
                    n.call(t[h], l, h);
                if (a)
                    for (c = s[s.length - 1].ownerDocument,
                    S.map(s, qt),
                    h = 0; h < a; h++)
                        l = s[h],
                        pt.test(l.type || "") && !K.access(l, "globalEval") && S.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && S._evalUrl(l.src) : w(l.textContent.replace(jt, ""), c, l))
            }
            return t
        }
        function Wt(t, e, n) {
            for (var i, r = e ? S.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
                n || 1 !== i.nodeType || S.cleanData(vt(i)),
                i.parentNode && (n && S.contains(i.ownerDocument, i) && mt(vt(i, "script")),
                i.parentNode.removeChild(i));
            return t
        }
        S.extend({
            htmlPrefilter: function(t) {
                return t.replace(Lt, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, r, o, s, a, l, u, c = t.cloneNode(!0), h = S.contains(t.ownerDocument, t);
                if (!(m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || S.isXMLDoc(t)))
                    for (s = vt(c),
                    i = 0,
                    r = (o = vt(t)).length; i < r; i++)
                        a = o[i],
                        l = s[i],
                        void 0,
                        "input" === (u = l.nodeName.toLowerCase()) && dt.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
                if (e)
                    if (n)
                        for (o = o || vt(t),
                        s = s || vt(c),
                        i = 0,
                        r = o.length; i < r; i++)
                            Ht(o[i], s[i]);
                    else
                        Ht(t, c);
                return (s = vt(c, "script")).length > 0 && mt(s, !h && vt(t, "script")),
                c
            },
            cleanData: function(t) {
                for (var e, n, i, r = S.event.special, o = 0; void 0 !== (n = t[o]); o++)
                    if (Q(n)) {
                        if (e = n[K.expando]) {
                            if (e.events)
                                for (i in e.events)
                                    r[i] ? S.event.remove(n, i) : S.removeEvent(n, i, e.handle);
                            n[K.expando] = void 0
                        }
                        n[Z.expando] && (n[Z.expando] = void 0)
                    }
            }
        }),
        S.fn.extend({
            detach: function(t) {
                return Wt(this, t, !0)
            },
            remove: function(t) {
                return Wt(this, t)
            },
            text: function(t) {
                return $(this, function(t) {
                    return void 0 === t ? S.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return Ot(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Mt(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return Ot(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Mt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return Ot(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return Ot(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++)
                    1 === t.nodeType && (S.cleanData(vt(t, !1)),
                    t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t,
                e = null == e ? t : e,
                this.map(function() {
                    return S.clone(this, t, e)
                })
            },
            html: function(t) {
                return $(this, function(t) {
                    var e = this[0] || {}
                      , n = 0
                      , i = this.length;
                    if (void 0 === t && 1 === e.nodeType)
                        return e.innerHTML;
                    if ("string" == typeof t && !Nt.test(t) && !gt[(ft.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = S.htmlPrefilter(t);
                        try {
                            for (; n < i; n++)
                                1 === (e = this[n] || {}).nodeType && (S.cleanData(vt(e, !1)),
                                e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return Ot(this, arguments, function(e) {
                    var n = this.parentNode;
                    S.inArray(this, t) < 0 && (S.cleanData(vt(this)),
                    n && n.replaceChild(e, this))
                }, t)
            }
        }),
        S.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            S.fn[t] = function(t) {
                for (var n, i = [], r = S(t), o = r.length - 1, s = 0; s <= o; s++)
                    n = s === o ? this : this.clone(!0),
                    S(r[s])[e](n),
                    c.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var zt = new RegExp("^(" + it + ")(?!px)[a-z%]+$","i")
          , Rt = function(t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = n),
            e.getComputedStyle(t)
        }
          , Ft = new RegExp(ot.join("|"),"i");
        function Bt(t, e, n) {
            var i, r, o, s, a = t.style;
            return (n = n || Rt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || S.contains(t.ownerDocument, t) || (s = S.style(t, e)),
            !m.pixelBoxStyles() && zt.test(s) && Ft.test(e) && (i = a.width,
            r = a.minWidth,
            o = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = s,
            s = n.width,
            a.width = i,
            a.minWidth = r,
            a.maxWidth = o)),
            void 0 !== s ? s + "" : s
        }
        function Ut(t, e) {
            return {
                get: function() {
                    if (!t())
                        return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function t() {
                if (c) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    Ct.appendChild(u).appendChild(c);
                    var t = n.getComputedStyle(c);
                    i = "1%" !== t.top,
                    l = 12 === e(t.marginLeft),
                    c.style.right = "60%",
                    a = 36 === e(t.right),
                    r = 36 === e(t.width),
                    c.style.position = "absolute",
                    o = 36 === c.offsetWidth || "absolute",
                    Ct.removeChild(u),
                    c = null
                }
            }
            function e(t) {
                return Math.round(parseFloat(t))
            }
            var i, r, o, a, l, u = s.createElement("div"), c = s.createElement("div");
            c.style && (c.style.backgroundClip = "content-box",
            c.cloneNode(!0).style.backgroundClip = "",
            m.clearCloneStyle = "content-box" === c.style.backgroundClip,
            S.extend(m, {
                boxSizingReliable: function() {
                    return t(),
                    r
                },
                pixelBoxStyles: function() {
                    return t(),
                    a
                },
                pixelPosition: function() {
                    return t(),
                    i
                },
                reliableMarginLeft: function() {
                    return t(),
                    l
                },
                scrollboxSize: function() {
                    return t(),
                    o
                }
            }))
        }();
        var $t = /^(none|table(?!-c[ea]).+)/
          , Xt = /^--/
          , Vt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Gt = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , Yt = ["Webkit", "Moz", "ms"]
          , Qt = s.createElement("div").style;
        function Jt(t) {
            var e = S.cssProps[t];
            return e || (e = S.cssProps[t] = function(t) {
                if (t in Qt)
                    return t;
                for (var e = t[0].toUpperCase() + t.slice(1), n = Yt.length; n--; )
                    if ((t = Yt[n] + e)in Qt)
                        return t
            }(t) || t),
            e
        }
        function Kt(t, e, n) {
            var i = rt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }
        function Zt(t, e, n, i, r, o) {
            var s = "width" === e ? 1 : 0
              , a = 0
              , l = 0;
            if (n === (i ? "border" : "content"))
                return 0;
            for (; s < 4; s += 2)
                "margin" === n && (l += S.css(t, n + ot[s], !0, r)),
                i ? ("content" === n && (l -= S.css(t, "padding" + ot[s], !0, r)),
                "margin" !== n && (l -= S.css(t, "border" + ot[s] + "Width", !0, r))) : (l += S.css(t, "padding" + ot[s], !0, r),
                "padding" !== n ? l += S.css(t, "border" + ot[s] + "Width", !0, r) : a += S.css(t, "border" + ot[s] + "Width", !0, r));
            return !i && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5))),
            l
        }
        function te(t, e, n) {
            var i = Rt(t)
              , r = Bt(t, e, i)
              , o = "border-box" === S.css(t, "boxSizing", !1, i)
              , s = o;
            if (zt.test(r)) {
                if (!n)
                    return r;
                r = "auto"
            }
            return s = s && (m.boxSizingReliable() || r === t.style[e]),
            ("auto" === r || !parseFloat(r) && "inline" === S.css(t, "display", !1, i)) && (r = t["offset" + e[0].toUpperCase() + e.slice(1)],
            s = !0),
            (r = parseFloat(r) || 0) + Zt(t, e, n || (o ? "border" : "content"), s, i, r) + "px"
        }
        function ee(t, e, n, i, r) {
            return new ee.prototype.init(t,e,n,i,r)
        }
        S.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = Bt(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = Y(e), l = Xt.test(e), u = t.style;
                    if (l || (e = Jt(a)),
                    s = S.cssHooks[e] || S.cssHooks[a],
                    void 0 === n)
                        return s && "get"in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e];
                    "string" === (o = typeof n) && (r = rt.exec(n)) && r[1] && (n = lt(t, e, r),
                    o = "number"),
                    null != n && n == n && ("number" === o && (n += r && r[3] || (S.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"),
                    s && "set"in s && void 0 === (n = s.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
                }
            },
            css: function(t, e, n, i) {
                var r, o, s, a = Y(e);
                return Xt.test(e) || (e = Jt(a)),
                (s = S.cssHooks[e] || S.cssHooks[a]) && "get"in s && (r = s.get(t, !0, n)),
                void 0 === r && (r = Bt(t, e, i)),
                "normal" === r && e in Gt && (r = Gt[e]),
                "" === n || n ? (o = parseFloat(r),
                !0 === n || isFinite(o) ? o || 0 : r) : r
            }
        }),
        S.each(["height", "width"], function(t, e) {
            S.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n)
                        return !$t.test(S.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? te(t, e, i) : at(t, Vt, function() {
                            return te(t, e, i)
                        })
                },
                set: function(t, n, i) {
                    var r, o = Rt(t), s = "border-box" === S.css(t, "boxSizing", !1, o), a = i && Zt(t, e, i, s, o);
                    return s && m.scrollboxSize() === o.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Zt(t, e, "border", !1, o) - .5)),
                    a && (r = rt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n,
                    n = S.css(t, e)),
                    Kt(0, n, a)
                }
            }
        }),
        S.cssHooks.marginLeft = Ut(m.reliableMarginLeft, function(t, e) {
            if (e)
                return (parseFloat(Bt(t, "marginLeft")) || t.getBoundingClientRect().left - at(t, {
                    marginLeft: 0
                }, function() {
                    return t.getBoundingClientRect().left
                })) + "px"
        }),
        S.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            S.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                        r[t + ot[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            },
            "margin" !== t && (S.cssHooks[t + e].set = Kt)
        }),
        S.fn.extend({
            css: function(t, e) {
                return $(this, function(t, e, n) {
                    var i, r, o = {}, s = 0;
                    if (Array.isArray(e)) {
                        for (i = Rt(t),
                        r = e.length; s < r; s++)
                            o[e[s]] = S.css(t, e[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? S.style(t, e, n) : S.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }),
        S.Tween = ee,
        ee.prototype = {
            constructor: ee,
            init: function(t, e, n, i, r, o) {
                this.elem = t,
                this.prop = n,
                this.easing = r || S.easing._default,
                this.options = e,
                this.start = this.now = this.cur(),
                this.end = i,
                this.unit = o || (S.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = ee.propHooks[this.prop];
                return t && t.get ? t.get(this) : ee.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = ee.propHooks[this.prop];
                return this.options.duration ? this.pos = e = S.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                this.now = (this.end - this.start) * e + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : ee.propHooks._default.set(this),
                this
            }
        },
        ee.prototype.init.prototype = ee.prototype,
        ee.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = S.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    S.fx.step[t.prop] ? S.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[S.cssProps[t.prop]] && !S.cssHooks[t.prop] ? t.elem[t.prop] = t.now : S.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        },
        ee.propHooks.scrollTop = ee.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        },
        S.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        },
        S.fx = ee.prototype.init,
        S.fx.step = {};
        var ne, ie, re = /^(?:toggle|show|hide)$/, oe = /queueHooks$/;
        function se() {
            ie && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(se) : n.setTimeout(se, S.fx.interval),
            S.fx.tick())
        }
        function ae() {
            return n.setTimeout(function() {
                ne = void 0
            }),
            ne = Date.now()
        }
        function le(t, e) {
            var n, i = 0, r = {
                height: t
            };
            for (e = e ? 1 : 0; i < 4; i += 2 - e)
                r["margin" + (n = ot[i])] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t),
            r
        }
        function ue(t, e, n) {
            for (var i, r = (ce.tweeners[e] || []).concat(ce.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                if (i = r[o].call(n, e, t))
                    return i
        }
        function ce(t, e, n) {
            var i, r, o = 0, s = ce.prefilters.length, a = S.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (r)
                    return !1;
                for (var e = ne || ae(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++)
                    u.tweens[o].run(i);
                return a.notifyWith(t, [u, i, n]),
                i < 1 && s ? n : (s || a.notifyWith(t, [u, 1, 0]),
                a.resolveWith(t, [u]),
                !1)
            }, u = a.promise({
                elem: t,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ne || ae(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = S.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i),
                    i
                },
                stop: function(e) {
                    var n = 0
                      , i = e ? u.tweens.length : 0;
                    if (r)
                        return this;
                    for (r = !0; n < i; n++)
                        u.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [u, 1, 0]),
                    a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]),
                    this
                }
            }), c = u.props;
            for (!function(t, e) {
                var n, i, r, o, s;
                for (n in t)
                    if (r = e[i = Y(n)],
                    o = t[n],
                    Array.isArray(o) && (r = o[1],
                    o = t[n] = o[0]),
                    n !== i && (t[i] = o,
                    delete t[n]),
                    (s = S.cssHooks[i]) && "expand"in s)
                        for (n in o = s.expand(o),
                        delete t[i],
                        o)
                            n in t || (t[n] = o[n],
                            e[n] = r);
                    else
                        e[i] = r
            }(c, u.opts.specialEasing); o < s; o++)
                if (i = ce.prefilters[o].call(u, t, c, u.opts))
                    return y(i.stop) && (S._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
                    i;
            return S.map(c, ue, u),
            y(u.opts.start) && u.opts.start.call(t, u),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
            S.fx.timer(S.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })),
            u
        }
        S.Animation = S.extend(ce, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return lt(n.elem, t, rt.exec(e), n),
                    n
                }
                ]
            },
            tweener: function(t, e) {
                y(t) ? (e = t,
                t = ["*"]) : t = t.match(O);
                for (var n, i = 0, r = t.length; i < r; i++)
                    n = t[i],
                    ce.tweeners[n] = ce.tweeners[n] || [],
                    ce.tweeners[n].unshift(e)
            },
            prefilters: [function(t, e, n) {
                var i, r, o, s, a, l, u, c, h = "width"in e || "height"in e, d = this, f = {}, p = t.style, g = t.nodeType && st(t), v = K.get(t, "fxshow");
                for (i in n.queue || (null == (s = S._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
                a = s.empty.fire,
                s.empty.fire = function() {
                    s.unqueued || a()
                }
                ),
                s.unqueued++,
                d.always(function() {
                    d.always(function() {
                        s.unqueued--,
                        S.queue(t, "fx").length || s.empty.fire()
                    })
                })),
                e)
                    if (r = e[i],
                    re.test(r)) {
                        if (delete e[i],
                        o = o || "toggle" === r,
                        r === (g ? "hide" : "show")) {
                            if ("show" !== r || !v || void 0 === v[i])
                                continue;
                            g = !0
                        }
                        f[i] = v && v[i] || S.style(t, i)
                    }
                if ((l = !S.isEmptyObject(e)) || !S.isEmptyObject(f))
                    for (i in h && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                    null == (u = v && v.display) && (u = K.get(t, "display")),
                    "none" === (c = S.css(t, "display")) && (u ? c = u : (ht([t], !0),
                    u = t.style.display || u,
                    c = S.css(t, "display"),
                    ht([t]))),
                    ("inline" === c || "inline-block" === c && null != u) && "none" === S.css(t, "float") && (l || (d.done(function() {
                        p.display = u
                    }),
                    null == u && (c = p.display,
                    u = "none" === c ? "" : c)),
                    p.display = "inline-block")),
                    n.overflow && (p.overflow = "hidden",
                    d.always(function() {
                        p.overflow = n.overflow[0],
                        p.overflowX = n.overflow[1],
                        p.overflowY = n.overflow[2]
                    })),
                    l = !1,
                    f)
                        l || (v ? "hidden"in v && (g = v.hidden) : v = K.access(t, "fxshow", {
                            display: u
                        }),
                        o && (v.hidden = !g),
                        g && ht([t], !0),
                        d.done(function() {
                            for (i in g || ht([t]),
                            K.remove(t, "fxshow"),
                            f)
                                S.style(t, i, f[i])
                        })),
                        l = ue(g ? v[i] : 0, i, d),
                        i in v || (v[i] = l.start,
                        g && (l.end = l.start,
                        l.start = 0))
            }
            ],
            prefilter: function(t, e) {
                e ? ce.prefilters.unshift(t) : ce.prefilters.push(t)
            }
        }),
        S.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? S.extend({}, t) : {
                complete: n || !n && e || y(t) && t,
                duration: t,
                easing: n && e || e && !y(e) && e
            };
            return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default),
            null != i.queue && !0 !== i.queue || (i.queue = "fx"),
            i.old = i.complete,
            i.complete = function() {
                y(i.old) && i.old.call(this),
                i.queue && S.dequeue(this, i.queue)
            }
            ,
            i
        }
        ,
        S.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(st).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = S.isEmptyObject(t)
                  , o = S.speed(e, n, i)
                  , s = function() {
                    var e = ce(this, S.extend({}, t), o);
                    (r || K.get(this, "finish")) && e.stop(!0)
                };
                return s.finish = s,
                r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop,
                    e(n)
                };
                return "string" != typeof t && (n = e,
                e = t,
                t = void 0),
                e && !1 !== t && this.queue(t || "fx", []),
                this.each(function() {
                    var e = !0
                      , r = null != t && t + "queueHooks"
                      , o = S.timers
                      , s = K.get(this);
                    if (r)
                        s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s)
                            s[r] && s[r].stop && oe.test(r) && i(s[r]);
                    for (r = o.length; r--; )
                        o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n),
                        e = !1,
                        o.splice(r, 1));
                    !e && n || S.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"),
                this.each(function() {
                    var e, n = K.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = S.timers, s = i ? i.length : 0;
                    for (n.finish = !0,
                    S.queue(this, t, []),
                    r && r.stop && r.stop.call(this, !0),
                    e = o.length; e--; )
                        o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0),
                        o.splice(e, 1));
                    for (e = 0; e < s; e++)
                        i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }),
        S.each(["toggle", "show", "hide"], function(t, e) {
            var n = S.fn[e];
            S.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(le(e, !0), t, i, r)
            }
        }),
        S.each({
            slideDown: le("show"),
            slideUp: le("hide"),
            slideToggle: le("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            S.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }),
        S.timers = [],
        S.fx.tick = function() {
            var t, e = 0, n = S.timers;
            for (ne = Date.now(); e < n.length; e++)
                (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || S.fx.stop(),
            ne = void 0
        }
        ,
        S.fx.timer = function(t) {
            S.timers.push(t),
            S.fx.start()
        }
        ,
        S.fx.interval = 13,
        S.fx.start = function() {
            ie || (ie = !0,
            se())
        }
        ,
        S.fx.stop = function() {
            ie = null
        }
        ,
        S.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        S.fn.delay = function(t, e) {
            return t = S.fx && S.fx.speeds[t] || t,
            e = e || "fx",
            this.queue(e, function(e, i) {
                var r = n.setTimeout(e, t);
                i.stop = function() {
                    n.clearTimeout(r)
                }
            })
        }
        ,
        function() {
            var t = s.createElement("input")
              , e = s.createElement("select").appendChild(s.createElement("option"));
            t.type = "checkbox",
            m.checkOn = "" !== t.value,
            m.optSelected = e.selected,
            (t = s.createElement("input")).value = "t",
            t.type = "radio",
            m.radioValue = "t" === t.value
        }();
        var he, de = S.expr.attrHandle;
        S.fn.extend({
            attr: function(t, e) {
                return $(this, S.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    S.removeAttr(this, t)
                })
            }
        }),
        S.extend({
            attr: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === t.getAttribute ? S.prop(t, e, n) : (1 === o && S.isXMLDoc(t) || (r = S.attrHooks[e.toLowerCase()] || (S.expr.match.bool.test(e) ? he : void 0)),
                    void 0 !== n ? null === n ? void S.removeAttr(t, e) : r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
                    n) : r && "get"in r && null !== (i = r.get(t, e)) ? i : null == (i = S.find.attr(t, e)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!m.radioValue && "radio" === e && L(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e),
                            n && (t.value = n),
                            e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i = 0, r = e && e.match(O);
                if (r && 1 === t.nodeType)
                    for (; n = r[i++]; )
                        t.removeAttribute(n)
            }
        }),
        he = {
            set: function(t, e, n) {
                return !1 === e ? S.removeAttr(t, n) : t.setAttribute(n, n),
                n
            }
        },
        S.each(S.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = de[e] || S.find.attr;
            de[e] = function(t, e, i) {
                var r, o, s = e.toLowerCase();
                return i || (o = de[s],
                de[s] = r,
                r = null != n(t, e, i) ? s : null,
                de[s] = o),
                r
            }
        });
        var fe = /^(?:input|select|textarea|button)$/i
          , pe = /^(?:a|area)$/i;
        function ge(t) {
            return (t.match(O) || []).join(" ")
        }
        function ve(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }
        function me(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(O) || []
        }
        S.fn.extend({
            prop: function(t, e) {
                return $(this, S.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[S.propFix[t] || t]
                })
            }
        }),
        S.extend({
            prop: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && S.isXMLDoc(t) || (e = S.propFix[e] || e,
                    r = S.propHooks[e]),
                    void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = S.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : fe.test(t.nodeName) || pe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        m.optSelected || (S.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex,
                null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex,
                e.parentNode && e.parentNode.selectedIndex)
            }
        }),
        S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            S.propFix[this.toLowerCase()] = this
        }),
        S.fn.extend({
            addClass: function(t) {
                var e, n, i, r, o, s, a, l = 0;
                if (y(t))
                    return this.each(function(e) {
                        S(this).addClass(t.call(this, e, ve(this)))
                    });
                if ((e = me(t)).length)
                    for (; n = this[l++]; )
                        if (r = ve(n),
                        i = 1 === n.nodeType && " " + ge(r) + " ") {
                            for (s = 0; o = e[s++]; )
                                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (a = ge(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, r, o, s, a, l = 0;
                if (y(t))
                    return this.each(function(e) {
                        S(this).removeClass(t.call(this, e, ve(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((e = me(t)).length)
                    for (; n = this[l++]; )
                        if (r = ve(n),
                        i = 1 === n.nodeType && " " + ge(r) + " ") {
                            for (s = 0; o = e[s++]; )
                                for (; i.indexOf(" " + o + " ") > -1; )
                                    i = i.replace(" " + o + " ", " ");
                            r !== (a = ge(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t
                  , i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : y(t) ? this.each(function(n) {
                    S(this).toggleClass(t.call(this, n, ve(this), e), e)
                }) : this.each(function() {
                    var e, r, o, s;
                    if (i)
                        for (r = 0,
                        o = S(this),
                        s = me(t); e = s[r++]; )
                            o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else
                        void 0 !== t && "boolean" !== n || ((e = ve(this)) && K.set(this, "__className__", e),
                        this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : K.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++]; )
                    if (1 === n.nodeType && (" " + ge(ve(n)) + " ").indexOf(e) > -1)
                        return !0;
                return !1
            }
        });
        var ye = /\r/g;
        S.fn.extend({
            val: function(t) {
                var e, n, i, r = this[0];
                return arguments.length ? (i = y(t),
                this.each(function(n) {
                    var r;
                    1 === this.nodeType && (null == (r = i ? t.call(this, n, S(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = S.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })),
                    (e = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = S.valHooks[r.type] || S.valHooks[r.nodeName.toLowerCase()]) && "get"in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(ye, "") : null == n ? "" : n : void 0
            }
        }),
        S.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = S.find.attr(t, "value");
                        return null != e ? e : ge(S.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, n, i, r = t.options, o = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [], l = s ? o + 1 : r.length;
                        for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                                if (e = S(n).val(),
                                s)
                                    return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, o = S.makeArray(e), s = r.length; s--; )
                            ((i = r[s]).selected = S.inArray(S.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1),
                        o
                    }
                }
            }
        }),
        S.each(["radio", "checkbox"], function() {
            S.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e))
                        return t.checked = S.inArray(S(t).val(), e) > -1
                }
            },
            m.checkOn || (S.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
            )
        }),
        m.focusin = "onfocusin"in n;
        var xe = /^(?:focusinfocus|focusoutblur)$/
          , be = function(t) {
            t.stopPropagation()
        };
        S.extend(S.event, {
            trigger: function(t, e, i, r) {
                var o, a, l, u, c, h, d, f, g = [i || s], v = p.call(t, "type") ? t.type : t, m = p.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = f = l = i = i || s,
                3 !== i.nodeType && 8 !== i.nodeType && !xe.test(v + S.event.triggered) && (v.indexOf(".") > -1 && (v = (m = v.split(".")).shift(),
                m.sort()),
                c = v.indexOf(":") < 0 && "on" + v,
                (t = t[S.expando] ? t : new S.Event(v,"object" == typeof t && t)).isTrigger = r ? 2 : 3,
                t.namespace = m.join("."),
                t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                t.result = void 0,
                t.target || (t.target = i),
                e = null == e ? [t] : S.makeArray(e, [t]),
                d = S.event.special[v] || {},
                r || !d.trigger || !1 !== d.trigger.apply(i, e))) {
                    if (!r && !d.noBubble && !x(i)) {
                        for (u = d.delegateType || v,
                        xe.test(u + v) || (a = a.parentNode); a; a = a.parentNode)
                            g.push(a),
                            l = a;
                        l === (i.ownerDocument || s) && g.push(l.defaultView || l.parentWindow || n)
                    }
                    for (o = 0; (a = g[o++]) && !t.isPropagationStopped(); )
                        f = a,
                        t.type = o > 1 ? u : d.bindType || v,
                        (h = (K.get(a, "events") || {})[t.type] && K.get(a, "handle")) && h.apply(a, e),
                        (h = c && a[c]) && h.apply && Q(a) && (t.result = h.apply(a, e),
                        !1 === t.result && t.preventDefault());
                    return t.type = v,
                    r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), e) || !Q(i) || c && y(i[v]) && !x(i) && ((l = i[c]) && (i[c] = null),
                    S.event.triggered = v,
                    t.isPropagationStopped() && f.addEventListener(v, be),
                    i[v](),
                    t.isPropagationStopped() && f.removeEventListener(v, be),
                    S.event.triggered = void 0,
                    l && (i[c] = l)),
                    t.result
                }
            },
            simulate: function(t, e, n) {
                var i = S.extend(new S.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                S.event.trigger(i, null, e)
            }
        }),
        S.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    S.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n)
                    return S.event.trigger(t, e, n, !0)
            }
        }),
        m.focusin || S.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                S.event.simulate(e, t.target, S.event.fix(t))
            };
            S.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this
                      , r = K.access(i, e);
                    r || i.addEventListener(t, n, !0),
                    K.access(i, e, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this
                      , r = K.access(i, e) - 1;
                    r ? K.access(i, e, r) : (i.removeEventListener(t, n, !0),
                    K.remove(i, e))
                }
            }
        });
        var we = n.location
          , Ce = Date.now()
          , Se = /\?/;
        S.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t)
                return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + t),
            e
        }
        ;
        var Ee = /\[\]$/
          , De = /\r?\n/g
          , Te = /^(?:submit|button|image|reset|file)$/i
          , Ae = /^(?:input|select|textarea|keygen)/i;
        function ke(t, e, n, i) {
            var r;
            if (Array.isArray(e))
                S.each(e, function(e, r) {
                    n || Ee.test(t) ? i(t, r) : ke(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
                });
            else if (n || "object" !== C(e))
                i(t, e);
            else
                for (r in e)
                    ke(t + "[" + r + "]", e[r], n, i)
        }
        S.param = function(t, e) {
            var n, i = [], r = function(t, e) {
                var n = y(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (Array.isArray(t) || t.jquery && !S.isPlainObject(t))
                S.each(t, function() {
                    r(this.name, this.value)
                });
            else
                for (n in t)
                    ke(n, t[n], e, r);
            return i.join("&")
        }
        ,
        S.fn.extend({
            serialize: function() {
                return S.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = S.prop(this, "elements");
                    return t ? S.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !S(this).is(":disabled") && Ae.test(this.nodeName) && !Te.test(t) && (this.checked || !dt.test(t))
                }).map(function(t, e) {
                    var n = S(this).val();
                    return null == n ? null : Array.isArray(n) ? S.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(De, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(De, "\r\n")
                    }
                }).get()
            }
        });
        var Pe = /%20/g
          , Le = /#.*$/
          , Ne = /([?&])_=[^&]*/
          , _e = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , je = /^(?:GET|HEAD)$/
          , Me = /^\/\//
          , Ie = {}
          , qe = {}
          , He = "*/".concat("*")
          , Oe = s.createElement("a");
        function We(t) {
            return function(e, n) {
                "string" != typeof e && (n = e,
                e = "*");
                var i, r = 0, o = e.toLowerCase().match(O) || [];
                if (y(n))
                    for (; i = o[r++]; )
                        "+" === i[0] ? (i = i.slice(1) || "*",
                        (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }
        function ze(t, e, n, i) {
            var r = {}
              , o = t === qe;
            function s(a) {
                var l;
                return r[a] = !0,
                S.each(t[a] || [], function(t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u),
                    s(u),
                    !1)
                }),
                l
            }
            return s(e.dataTypes[0]) || !r["*"] && s("*")
        }
        function Re(t, e) {
            var n, i, r = S.ajaxSettings.flatOptions || {};
            for (n in e)
                void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && S.extend(!0, t, i),
            t
        }
        Oe.href = we.href,
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: we.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(we.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": He,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": S.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Re(Re(t, S.ajaxSettings), e) : Re(S.ajaxSettings, t)
            },
            ajaxPrefilter: We(Ie),
            ajaxTransport: We(qe),
            ajax: function(t, e) {
                "object" == typeof t && (e = t,
                t = void 0),
                e = e || {};
                var i, r, o, a, l, u, c, h, d, f, p = S.ajaxSetup({}, e), g = p.context || p, v = p.context && (g.nodeType || g.jquery) ? S(g) : S.event, m = S.Deferred(), y = S.Callbacks("once memory"), x = p.statusCode || {}, b = {}, w = {}, C = "canceled", E = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (c) {
                            if (!a)
                                for (a = {}; e = _e.exec(o); )
                                    a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return c ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t,
                        b[t] = e),
                        this
                    },
                    overrideMimeType: function(t) {
                        return null == c && (p.mimeType = t),
                        this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (c)
                                E.always(t[E.status]);
                            else
                                for (e in t)
                                    x[e] = [x[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || C;
                        return i && i.abort(e),
                        D(0, e),
                        this
                    }
                };
                if (m.promise(E),
                p.url = ((t || p.url || we.href) + "").replace(Me, we.protocol + "//"),
                p.type = e.method || e.type || p.method || p.type,
                p.dataTypes = (p.dataType || "*").toLowerCase().match(O) || [""],
                null == p.crossDomain) {
                    u = s.createElement("a");
                    try {
                        u.href = p.url,
                        u.href = u.href,
                        p.crossDomain = Oe.protocol + "//" + Oe.host != u.protocol + "//" + u.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = S.param(p.data, p.traditional)),
                ze(Ie, p, e, E),
                c)
                    return E;
                for (d in (h = S.event && p.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
                p.type = p.type.toUpperCase(),
                p.hasContent = !je.test(p.type),
                r = p.url.replace(Le, ""),
                p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Pe, "+")) : (f = p.url.slice(r.length),
                p.data && (p.processData || "string" == typeof p.data) && (r += (Se.test(r) ? "&" : "?") + p.data,
                delete p.data),
                !1 === p.cache && (r = r.replace(Ne, "$1"),
                f = (Se.test(r) ? "&" : "?") + "_=" + Ce++ + f),
                p.url = r + f),
                p.ifModified && (S.lastModified[r] && E.setRequestHeader("If-Modified-Since", S.lastModified[r]),
                S.etag[r] && E.setRequestHeader("If-None-Match", S.etag[r])),
                (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && E.setRequestHeader("Content-Type", p.contentType),
                E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + He + "; q=0.01" : "") : p.accepts["*"]),
                p.headers)
                    E.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(g, E, p) || c))
                    return E.abort();
                if (C = "abort",
                y.add(p.complete),
                E.done(p.success),
                E.fail(p.error),
                i = ze(qe, p, e, E)) {
                    if (E.readyState = 1,
                    h && v.trigger("ajaxSend", [E, p]),
                    c)
                        return E;
                    p.async && p.timeout > 0 && (l = n.setTimeout(function() {
                        E.abort("timeout")
                    }, p.timeout));
                    try {
                        c = !1,
                        i.send(b, D)
                    } catch (t) {
                        if (c)
                            throw t;
                        D(-1, t)
                    }
                } else
                    D(-1, "No Transport");
                function D(t, e, s, a) {
                    var u, d, f, b, w, C = e;
                    c || (c = !0,
                    l && n.clearTimeout(l),
                    i = void 0,
                    o = a || "",
                    E.readyState = t > 0 ? 4 : 0,
                    u = t >= 200 && t < 300 || 304 === t,
                    s && (b = function(t, e, n) {
                        for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                            l.shift(),
                            void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (i)
                            for (r in a)
                                if (a[r] && a[r].test(i)) {
                                    l.unshift(r);
                                    break
                                }
                        if (l[0]in n)
                            o = l[0];
                        else {
                            for (r in n) {
                                if (!l[0] || t.converters[r + " " + l[0]]) {
                                    o = r;
                                    break
                                }
                                s || (s = r)
                            }
                            o = o || s
                        }
                        if (o)
                            return o !== l[0] && l.unshift(o),
                            n[o]
                    }(p, E, s)),
                    b = function(t, e, n, i) {
                        var r, o, s, a, l, u = {}, c = t.dataTypes.slice();
                        if (c[1])
                            for (s in t.converters)
                                u[s.toLowerCase()] = t.converters[s];
                        for (o = c.shift(); o; )
                            if (t.responseFields[o] && (n[t.responseFields[o]] = e),
                            !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                            l = o,
                            o = c.shift())
                                if ("*" === o)
                                    o = l;
                                else if ("*" !== l && l !== o) {
                                    if (!(s = u[l + " " + o] || u["* " + o]))
                                        for (r in u)
                                            if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                                !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0],
                                                c.unshift(a[1]));
                                                break
                                            }
                                    if (!0 !== s)
                                        if (s && t.throws)
                                            e = s(e);
                                        else
                                            try {
                                                e = s(e)
                                            } catch (t) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ? t : "No conversion from " + l + " to " + o
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: e
                        }
                    }(p, b, E, u),
                    u ? (p.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (S.lastModified[r] = w),
                    (w = E.getResponseHeader("etag")) && (S.etag[r] = w)),
                    204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state,
                    d = b.data,
                    u = !(f = b.error))) : (f = C,
                    !t && C || (C = "error",
                    t < 0 && (t = 0))),
                    E.status = t,
                    E.statusText = (e || C) + "",
                    u ? m.resolveWith(g, [d, C, E]) : m.rejectWith(g, [E, C, f]),
                    E.statusCode(x),
                    x = void 0,
                    h && v.trigger(u ? "ajaxSuccess" : "ajaxError", [E, p, u ? d : f]),
                    y.fireWith(g, [E, C]),
                    h && (v.trigger("ajaxComplete", [E, p]),
                    --S.active || S.event.trigger("ajaxStop")))
                }
                return E
            },
            getJSON: function(t, e, n) {
                return S.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return S.get(t, void 0, e, "script")
            }
        }),
        S.each(["get", "post"], function(t, e) {
            S[e] = function(t, n, i, r) {
                return y(n) && (r = r || i,
                i = n,
                n = void 0),
                S.ajax(S.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, S.isPlainObject(t) && t))
            }
        }),
        S._evalUrl = function(t) {
            return S.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        S.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (y(t) && (t = t.call(this[0])),
                e = S(t, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstElementChild; )
                        t = t.firstElementChild;
                    return t
                }).append(this)),
                this
            },
            wrapInner: function(t) {
                return y(t) ? this.each(function(e) {
                    S(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = S(this)
                      , n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = y(t);
                return this.each(function(n) {
                    S(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    S(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        S.expr.pseudos.hidden = function(t) {
            return !S.expr.pseudos.visible(t)
        }
        ,
        S.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }
        ,
        S.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        }
        ;
        var Fe = {
            0: 200,
            1223: 204
        }
          , Be = S.ajaxSettings.xhr();
        m.cors = !!Be && "withCredentials"in Be,
        m.ajax = Be = !!Be,
        S.ajaxTransport(function(t) {
            var e, i;
            if (m.cors || Be && !t.crossDomain)
                return {
                    send: function(r, o) {
                        var s, a = t.xhr();
                        if (a.open(t.type, t.url, t.async, t.username, t.password),
                        t.xhrFields)
                            for (s in t.xhrFields)
                                a[s] = t.xhrFields[s];
                        for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                        t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                        r)
                            a.setRequestHeader(s, r[s]);
                        e = function(t) {
                            return function() {
                                e && (e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Fe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }
                        ,
                        a.onload = e(),
                        i = a.onerror = a.ontimeout = e("error"),
                        void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                            4 === a.readyState && n.setTimeout(function() {
                                e && i()
                            })
                        }
                        ,
                        e = e("abort");
                        try {
                            a.send(t.hasContent && t.data || null)
                        } catch (t) {
                            if (e)
                                throw t
                        }
                    },
                    abort: function() {
                        e && e()
                    }
                }
        }),
        S.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }),
        S.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return S.globalEval(t),
                    t
                }
            }
        }),
        S.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET")
        }),
        S.ajaxTransport("script", function(t) {
            var e, n;
            if (t.crossDomain)
                return {
                    send: function(i, r) {
                        e = S("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(),
                            n = null,
                            t && r("error" === t.type ? 404 : 200, t.type)
                        }
                        ),
                        s.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
        });
        var Ue, $e = [], Xe = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = $e.pop() || S.expando + "_" + Ce++;
                return this[t] = !0,
                t
            }
        }),
        S.ajaxPrefilter("json jsonp", function(t, e, i) {
            var r, o, s, a = !1 !== t.jsonp && (Xe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xe.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0])
                return r = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                a ? t[a] = t[a].replace(Xe, "$1" + r) : !1 !== t.jsonp && (t.url += (Se.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                t.converters["script json"] = function() {
                    return s || S.error(r + " was not called"),
                    s[0]
                }
                ,
                t.dataTypes[0] = "json",
                o = n[r],
                n[r] = function() {
                    s = arguments
                }
                ,
                i.always(function() {
                    void 0 === o ? S(n).removeProp(r) : n[r] = o,
                    t[r] && (t.jsonpCallback = e.jsonpCallback,
                    $e.push(r)),
                    s && y(o) && o(s[0]),
                    s = o = void 0
                }),
                "script"
        }),
        m.createHTMLDocument = ((Ue = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
        2 === Ue.childNodes.length),
        S.parseHTML = function(t, e, n) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e,
            e = !1),
            e || (m.createHTMLDocument ? ((i = (e = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href,
            e.head.appendChild(i)) : e = s),
            r = N.exec(t),
            o = !n && [],
            r ? [e.createElement(r[1])] : (r = wt([t], e, o),
            o && o.length && S(o).remove(),
            S.merge([], r.childNodes)));
            var i, r, o
        }
        ,
        S.fn.load = function(t, e, n) {
            var i, r, o, s = this, a = t.indexOf(" ");
            return a > -1 && (i = ge(t.slice(a)),
            t = t.slice(0, a)),
            y(e) ? (n = e,
            e = void 0) : e && "object" == typeof e && (r = "POST"),
            s.length > 0 && S.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments,
                s.html(i ? S("<div>").append(S.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                s.each(function() {
                    n.apply(this, o || [t.responseText, e, t])
                })
            }
            ),
            this
        }
        ,
        S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            S.fn[e] = function(t) {
                return this.on(e, t)
            }
        }),
        S.expr.pseudos.animated = function(t) {
            return S.grep(S.timers, function(e) {
                return t === e.elem
            }).length
        }
        ,
        S.offset = {
            setOffset: function(t, e, n) {
                var i, r, o, s, a, l, u = S.css(t, "position"), c = S(t), h = {};
                "static" === u && (t.style.position = "relative"),
                a = c.offset(),
                o = S.css(t, "top"),
                l = S.css(t, "left"),
                ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = c.position()).top,
                r = i.left) : (s = parseFloat(o) || 0,
                r = parseFloat(l) || 0),
                y(e) && (e = e.call(t, n, S.extend({}, a))),
                null != e.top && (h.top = e.top - a.top + s),
                null != e.left && (h.left = e.left - a.left + r),
                "using"in e ? e.using.call(t, h) : c.css(h)
            }
        },
        S.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function(e) {
                        S.offset.setOffset(this, t, e)
                    });
                var e, n, i = this[0];
                return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(),
                n = i.ownerDocument.defaultView,
                {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n, i = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === S.css(i, "position"))
                        e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(),
                        n = i.ownerDocument,
                        t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === S.css(t, "position"); )
                            t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && ((r = S(t).offset()).top += S.css(t, "borderTopWidth", !0),
                        r.left += S.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - r.top - S.css(i, "marginTop", !0),
                        left: e.left - r.left - S.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === S.css(t, "position"); )
                        t = t.offsetParent;
                    return t || Ct
                })
            }
        }),
        S.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            S.fn[t] = function(i) {
                return $(this, function(t, i, r) {
                    var o;
                    if (x(t) ? o = t : 9 === t.nodeType && (o = t.defaultView),
                    void 0 === r)
                        return o ? o[e] : t[i];
                    o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
                }, t, i, arguments.length)
            }
        }),
        S.each(["top", "left"], function(t, e) {
            S.cssHooks[e] = Ut(m.pixelPosition, function(t, n) {
                if (n)
                    return n = Bt(t, e),
                    zt.test(n) ? S(t).position()[e] + "px" : n
            })
        }),
        S.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            S.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                S.fn[i] = function(r, o) {
                    var s = arguments.length && (n || "boolean" != typeof r)
                      , a = n || (!0 === r || !0 === o ? "margin" : "border");
                    return $(this, function(e, n, r) {
                        var o;
                        return x(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement,
                        Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? S.css(e, n, a) : S.style(e, n, r, a)
                    }, e, s ? r : void 0, s)
                }
            })
        }),
        S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            S.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }),
        S.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }),
        S.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }),
        S.proxy = function(t, e) {
            var n, i, r;
            if ("string" == typeof e && (n = t[e],
            e = t,
            t = n),
            y(t))
                return i = l.call(arguments, 2),
                (r = function() {
                    return t.apply(e || this, i.concat(l.call(arguments)))
                }
                ).guid = t.guid = t.guid || S.guid++,
                r
        }
        ,
        S.holdReady = function(t) {
            t ? S.readyWait++ : S.ready(!0)
        }
        ,
        S.isArray = Array.isArray,
        S.parseJSON = JSON.parse,
        S.nodeName = L,
        S.isFunction = y,
        S.isWindow = x,
        S.camelCase = Y,
        S.type = C,
        S.now = Date.now,
        S.isNumeric = function(t) {
            var e = S.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }
        ,
        void 0 === (i = function() {
            return S
        }
        .apply(e, [])) || (t.exports = i);
        var Ve = n.jQuery
          , Ge = n.$;
        return S.noConflict = function(t) {
            return n.$ === S && (n.$ = Ge),
            t && n.jQuery === S && (n.jQuery = Ve),
            S
        }
        ,
        r || (n.jQuery = n.$ = S),
        S
    })
}
, , , function(t, e, n) {
    var i, r;
    !function(o, s) {
        "use strict";
        void 0 === (r = "function" == typeof (i = s) ? i.call(e, n, e, t) : i) || (t.exports = r)
    }(window, function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches)
                return "matches";
            if (t.matchesSelector)
                return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var i = e[n] + "MatchesSelector";
                if (t[i])
                    return i
            }
        }();
        return function(e, n) {
            return e[t](n)
        }
    })
}
, function(t, e, n) {
    var i, r;
    !function(o, s) {
        i = [n(11)],
        void 0 === (r = function(t) {
            return s(o, t)
        }
        .apply(e, i)) || (t.exports = r)
    }(window, function(t, e) {
        "use strict";
        function n(t, e) {
            this.element = t,
            this.parent = e,
            this.create()
        }
        var i = n.prototype;
        return i.create = function() {
            this.element.style.position = "absolute",
            this.element.setAttribute("aria-selected", "false"),
            this.x = 0,
            this.shift = 0
        }
        ,
        i.destroy = function() {
            this.element.style.position = "";
            var t = this.parent.originSide;
            this.element.removeAttribute("aria-selected"),
            this.element.style[t] = ""
        }
        ,
        i.getSize = function() {
            this.size = e(this.element)
        }
        ,
        i.setPosition = function(t) {
            this.x = t,
            this.updateTarget(),
            this.renderPosition(t)
        }
        ,
        i.updateTarget = i.setDefaultTarget = function() {
            var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
            this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
        }
        ,
        i.renderPosition = function(t) {
            var e = this.parent.originSide;
            this.element.style[e] = this.parent.getPositionValue(t)
        }
        ,
        i.wrapShift = function(t) {
            this.shift = t,
            this.renderPosition(this.x + this.parent.slideableWidth * t)
        }
        ,
        i.remove = function() {
            this.element.parentNode.removeChild(this.element)
        }
        ,
        n
    })
}
, function(t, e, n) {
    var i, r;
    window,
    void 0 === (r = "function" == typeof (i = function() {
        "use strict";
        function t(t) {
            this.parent = t,
            this.isOriginLeft = "left" == t.originSide,
            this.cells = [],
            this.outerWidth = 0,
            this.height = 0
        }
        var e = t.prototype;
        return e.addCell = function(t) {
            if (this.cells.push(t),
            this.outerWidth += t.size.outerWidth,
            this.height = Math.max(t.size.outerHeight, this.height),
            1 == this.cells.length) {
                this.x = t.x;
                var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                this.firstMargin = t.size[e]
            }
        }
        ,
        e.updateTarget = function() {
            var t = this.isOriginLeft ? "marginRight" : "marginLeft"
              , e = this.getLastCell()
              , n = e ? e.size[t] : 0
              , i = this.outerWidth - (this.firstMargin + n);
            this.target = this.x + this.firstMargin + i * this.parent.cellAlign
        }
        ,
        e.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }
        ,
        e.select = function() {
            this.changeSelected(!0)
        }
        ,
        e.unselect = function() {
            this.changeSelected(!1)
        }
        ,
        e.changeSelected = function(t) {
            var e = t ? "add" : "remove";
            this.cells.forEach(function(n) {
                n.element.classList[e]("is-selected"),
                n.element.setAttribute("aria-selected", t.toString())
            })
        }
        ,
        e.getCellElements = function() {
            return this.cells.map(function(t) {
                return t.element
            })
        }
        ,
        t
    }
    ) ? i.call(e, n, e, t) : i) || (t.exports = r)
}
, function(t, e, n) {
    var i, r;
    !function(o, s) {
        i = [n(0)],
        void 0 === (r = function(t) {
            return s(o, t)
        }
        .apply(e, i)) || (t.exports = r)
    }(window, function(t, e) {
        "use strict";
        var n = {
            startAnimation: function() {
                this.isAnimating || (this.isAnimating = !0,
                this.restingFrames = 0,
                this.animate())
            },
            animate: function() {
                this.applyDragForce(),
                this.applySelectedAttraction();
                var t = this.x;
                if (this.integratePhysics(),
                this.positionSlider(),
                this.settle(t),
                this.isAnimating) {
                    var e = this;
                    requestAnimationFrame(function() {
                        e.animate()
                    })
                }
            },
            positionSlider: function() {
                var t = this.x;
                this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth),
                t -= this.slideableWidth,
                this.shiftWrapCells(t)),
                t += this.cursorPosition,
                t = this.options.rightToLeft ? -t : t;
                var n = this.getPositionValue(t);
                this.slider.style.transform = this.isAnimating ? "translate3d(" + n + ",0,0)" : "translateX(" + n + ")";
                var i = this.slides[0];
                if (i) {
                    var r = -this.x - i.target
                      , o = r / this.slidesWidth;
                    this.dispatchEvent("scroll", null, [o, r])
                }
            },
            positionSliderAtSelected: function() {
                this.cells.length && (this.x = -this.selectedSlide.target,
                this.velocity = 0,
                this.positionSlider())
            },
            getPositionValue: function(t) {
                return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
            },
            settle: function(t) {
                this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++,
                this.restingFrames > 2 && (this.isAnimating = !1,
                delete this.isFreeScrolling,
                this.positionSlider(),
                this.dispatchEvent("settle", null, [this.selectedIndex]))
            },
            shiftWrapCells: function(t) {
                var e = this.cursorPosition + t;
                this._shiftCells(this.beforeShiftCells, e, -1);
                var n = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
                this._shiftCells(this.afterShiftCells, n, 1)
            },
            _shiftCells: function(t, e, n) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i]
                      , o = e > 0 ? n : 0;
                    r.wrapShift(o),
                    e -= r.size.outerWidth
                }
            },
            _unshiftCells: function(t) {
                if (t && t.length)
                    for (var e = 0; e < t.length; e++)
                        t[e].wrapShift(0)
            },
            integratePhysics: function() {
                this.x += this.velocity,
                this.velocity *= this.getFrictionFactor()
            },
            applyForce: function(t) {
                this.velocity += t
            },
            getFrictionFactor: function() {
                return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
            },
            getRestingPosition: function() {
                return this.x + this.velocity / (1 - this.getFrictionFactor())
            },
            applyDragForce: function() {
                if (this.isDraggable && this.isPointerDown) {
                    var t = this.dragX - this.x - this.velocity;
                    this.applyForce(t)
                }
            },
            applySelectedAttraction: function() {
                if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                    var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                    this.applyForce(t)
                }
            }
        };
        return n
    })
}
, function(t, e, n) {
    var i, r;
    !function(o, s) {
        i = [n(2), n(22), n(0)],
        void 0 === (r = function(t, e, n) {
            return s(o, t, e, n)
        }
        .apply(e, i)) || (t.exports = r)
    }(window, function(t, e, n, i) {
        "use strict";
        i.extend(e.defaults, {
            draggable: ">1",
            dragThreshold: 3
        }),
        e.createMethods.push("_createDrag");
        var r = e.prototype;
        i.extend(r, n.prototype),
        r._touchActionValue = "pan-y";
        var o = "createTouch"in document
          , s = !1;
        r._createDrag = function() {
            this.on("activate", this.onActivateDrag),
            this.on("uiChange", this._uiChangeDrag),
            this.on("childUIPointerDown", this._childUIPointerDownDrag),
            this.on("deactivate", this.onDeactivateDrag),
            this.on("cellChange", this.updateDraggable),
            o && !s && (t.addEventListener("touchmove", function() {}),
            s = !0)
        }
        ,
        r.onActivateDrag = function() {
            this.handles = [this.viewport],
            this.bindHandles(),
            this.updateDraggable()
        }
        ,
        r.onDeactivateDrag = function() {
            this.unbindHandles(),
            this.element.classList.remove("is-draggable")
        }
        ,
        r.updateDraggable = function() {
            ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable,
            this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
        }
        ,
        r.bindDrag = function() {
            this.options.draggable = !0,
            this.updateDraggable()
        }
        ,
        r.unbindDrag = function() {
            this.options.draggable = !1,
            this.updateDraggable()
        }
        ,
        r._uiChangeDrag = function() {
            delete this.isFreeScrolling
        }
        ,
        r._childUIPointerDownDrag = function(t) {
            t.preventDefault(),
            this.pointerDownFocus(t)
        }
        ,
        r.pointerDown = function(e, n) {
            this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e),
            this.pointerDownFocus(e),
            document.activeElement != this.element && this.pointerDownBlur(),
            this.dragX = this.x,
            this.viewport.classList.add("is-pointer-down"),
            this.pointerDownScroll = l(),
            t.addEventListener("scroll", this),
            this._pointerDownDefault(e, n)) : this._pointerDownDefault(e, n)
        }
        ,
        r._pointerDownDefault = function(t, e) {
            this.pointerDownPointer = e,
            this._bindPostStartEvents(t),
            this.dispatchEvent("pointerDown", t, [e])
        }
        ;
        var a = {
            INPUT: !0,
            TEXTAREA: !0,
            SELECT: !0
        };
        function l() {
            return {
                x: t.pageXOffset,
                y: t.pageYOffset
            }
        }
        return r.pointerDownFocus = function(t) {
            a[t.target.nodeName] || this.focus()
        }
        ,
        r._pointerDownPreventDefault = function(t) {
            var e = "touchstart" == t.type
              , n = "touch" == t.pointerType
              , i = a[t.target.nodeName];
            e || n || i || t.preventDefault()
        }
        ,
        r.hasDragStarted = function(t) {
            return Math.abs(t.x) > this.options.dragThreshold
        }
        ,
        r.pointerUp = function(t, e) {
            delete this.isTouchScrolling,
            this.viewport.classList.remove("is-pointer-down"),
            this.dispatchEvent("pointerUp", t, [e]),
            this._dragPointerUp(t, e)
        }
        ,
        r.pointerDone = function() {
            t.removeEventListener("scroll", this),
            delete this.pointerDownScroll
        }
        ,
        r.dragStart = function(e, n) {
            this.isDraggable && (this.dragStartPosition = this.x,
            this.startAnimation(),
            t.removeEventListener("scroll", this),
            this.dispatchEvent("dragStart", e, [n]))
        }
        ,
        r.pointerMove = function(t, e) {
            var n = this._dragPointerMove(t, e);
            this.dispatchEvent("pointerMove", t, [e, n]),
            this._dragMove(t, e, n)
        }
        ,
        r.dragMove = function(t, e, n) {
            if (this.isDraggable) {
                t.preventDefault(),
                this.previousDragX = this.dragX;
                var i = this.options.rightToLeft ? -1 : 1;
                this.options.wrapAround && (n.x = n.x % this.slideableWidth);
                var r = this.dragStartPosition + n.x * i;
                if (!this.options.wrapAround && this.slides.length) {
                    var o = Math.max(-this.slides[0].target, this.dragStartPosition);
                    r = r > o ? .5 * (r + o) : r;
                    var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                    r = r < s ? .5 * (r + s) : r
                }
                this.dragX = r,
                this.dragMoveTime = new Date,
                this.dispatchEvent("dragMove", t, [e, n])
            }
        }
        ,
        r.dragEnd = function(t, e) {
            if (this.isDraggable) {
                this.options.freeScroll && (this.isFreeScrolling = !0);
                var n = this.dragEndRestingSelect();
                if (this.options.freeScroll && !this.options.wrapAround) {
                    var i = this.getRestingPosition();
                    this.isFreeScrolling = -i > this.slides[0].target && -i < this.getLastSlide().target
                } else
                    this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());
                delete this.previousDragX,
                this.isDragSelect = this.options.wrapAround,
                this.select(n),
                delete this.isDragSelect,
                this.dispatchEvent("dragEnd", t, [e])
            }
        }
        ,
        r.dragEndRestingSelect = function() {
            var t = this.getRestingPosition()
              , e = Math.abs(this.getSlideDistance(-t, this.selectedIndex))
              , n = this._getClosestResting(t, e, 1)
              , i = this._getClosestResting(t, e, -1);
            return n.distance < i.distance ? n.index : i.index
        }
        ,
        r._getClosestResting = function(t, e, n) {
            for (var i = this.selectedIndex, r = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) {
                return t <= e
            }
            : function(t, e) {
                return t < e
            }
            ; o(e, r) && (i += n,
            r = e,
            null !== (e = this.getSlideDistance(-t, i))); )
                e = Math.abs(e);
            return {
                distance: r,
                index: i - n
            }
        }
        ,
        r.getSlideDistance = function(t, e) {
            var n = this.slides.length
              , r = this.options.wrapAround && n > 1
              , o = r ? i.modulo(e, n) : e
              , s = this.slides[o];
            if (!s)
                return null;
            var a = r ? this.slideableWidth * Math.floor(e / n) : 0;
            return t - (s.target + a)
        }
        ,
        r.dragEndBoostSelect = function() {
            if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100)
                return 0;
            var t = this.getSlideDistance(-this.dragX, this.selectedIndex)
              , e = this.previousDragX - this.dragX;
            return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
        }
        ,
        r.staticClick = function(t, e) {
            var n = this.getParentCell(t.target)
              , i = n && n.element
              , r = n && this.cells.indexOf(n);
            this.dispatchEvent("staticClick", t, [e, i, r])
        }
        ,
        r.onscroll = function() {
            var t = l()
              , e = this.pointerDownScroll.x - t.x
              , n = this.pointerDownScroll.y - t.y;
            (Math.abs(e) > 3 || Math.abs(n) > 3) && this._pointerDone()
        }
        ,
        e
    })
}
, function(t, e, n) {
    var i, r;
    !function(o, s) {
        i = [n(12)],
        void 0 === (r = function(t) {
            return s(o, t)
        }
        .apply(e, i)) || (t.exports = r)
    }(window, function(t, e) {
        "use strict";
        function n() {}
        var i = n.prototype = Object.create(e.prototype);
        i.bindHandles = function() {
            this._bindHandles(!0)
        }
        ,
        i.unbindHandles = function() {
            this._bindHandles(!1)
        }
        ,
        i._bindHandles = function(e) {
            for (var n = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", i = e ? this._touchActionValue : "", r = 0; r < this.handles.length; r++) {
                var o = this.handles[r];
                this._bindStartEvent(o, e),
                o[n]("click", this),
                t.PointerEvent && (o.style.touchAction = i)
            }
        }
        ,
        i._touchActionValue = "none",
        i.pointerDown = function(t, e) {
            this.okayPointerDown(t) && (this.pointerDownPointer = e,
            t.preventDefault(),
            this.pointerDownBlur(),
            this._bindPostStartEvents(t),
            this.emitEvent("pointerDown", [t, e]))
        }
        ;
        var r = {
            TEXTAREA: !0,
            INPUT: !0,
            SELECT: !0,
            OPTION: !0
        }
          , o = {
            radio: !0,
            checkbox: !0,
            button: !0,
            submit: !0,
            image: !0,
            file: !0
        };
        return i.okayPointerDown = function(t) {
            var e = r[t.target.nodeName]
              , n = o[t.target.type]
              , i = !e || n;
            return i || this._pointerReset(),
            i
        }
        ,
        i.pointerDownBlur = function() {
            var t = document.activeElement;
            t && t.blur && t != document.body && t.blur()
        }
        ,
        i.pointerMove = function(t, e) {
            var n = this._dragPointerMove(t, e);
            this.emitEvent("pointerMove", [t, e, n]),
            this._dragMove(t, e, n)
        }
        ,
        i._dragPointerMove = function(t, e) {
            var n = {
                x: e.pageX - this.pointerDownPointer.pageX,
                y: e.pageY - this.pointerDownPointer.pageY
            };
            return !this.isDragging && this.hasDragStarted(n) && this._dragStart(t, e),
            n
        }
        ,
        i.hasDragStarted = function(t) {
            return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
        }
        ,
        i.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e]),
            this._dragPointerUp(t, e)
        }
        ,
        i._dragPointerUp = function(t, e) {
            this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
        }
        ,
        i._dragStart = function(t, e) {
            this.isDragging = !0,
            this.isPreventingClicks = !0,
            this.dragStart(t, e)
        }
        ,
        i.dragStart = function(t, e) {
            this.emitEvent("dragStart", [t, e])
        }
        ,
        i._dragMove = function(t, e, n) {
            this.isDragging && this.dragMove(t, e, n)
        }
        ,
        i.dragMove = function(t, e, n) {
            t.preventDefault(),
            this.emitEvent("dragMove", [t, e, n])
        }
        ,
        i._dragEnd = function(t, e) {
            this.isDragging = !1,
            setTimeout(function() {
                delete this.isPreventingClicks
            }
            .bind(this)),
            this.dragEnd(t, e)
        }
        ,
        i.dragEnd = function(t, e) {
            this.emitEvent("dragEnd", [t, e])
        }
        ,
        i.onclick = function(t) {
            this.isPreventingClicks && t.preventDefault()
        }
        ,
        i._staticClick = function(t, e) {
            this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e),
            "mouseup" != t.type && (this.isIgnoringMouseUp = !0,
            setTimeout(function() {
                delete this.isIgnoringMouseUp
            }
            .bind(this), 400)))
        }
        ,
        i.staticClick = function(t, e) {
            this.emitEvent("staticClick", [t, e])
        }
        ,
        n.getPointerPoint = e.getPointerPoint,
        n
    })
}
, function(t, e, n) {
    var i, r;
    !function(o, s) {
        i = [n(2), n(13), n(0)],
        void 0 === (r = function(t, e, n) {
            return s(o, t, e, n)
        }
        .apply(e, i)) || (t.exports = r)
    }(window, function(t, e, n, i) {
        "use strict";
        var r = "http://www.w3.org/2000/svg";
        function o(t, e) {
            this.direction = t,
            this.parent = e,
            this._create()
        }
        o.prototype = Object.create(n.prototype),
        o.prototype._create = function() {
            this.isEnabled = !0,
            this.isPrevious = -1 == this.direction;
            var t = this.parent.options.rightToLeft ? 1 : -1;
            this.isLeft = this.direction == t;
            var e = this.element = document.createElement("button");
            e.className = "flickity-button flickity-prev-next-button",
            e.className += this.isPrevious ? " previous" : " next",
            e.setAttribute("type", "button"),
            this.disable(),
            e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
            var n = this.createSVG();
            e.appendChild(n),
            this.on("tap", this.onTap),
            this.parent.on("select", this.update.bind(this)),
            this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }
        ,
        o.prototype.activate = function() {
            this.bindTap(this.element),
            this.element.addEventListener("click", this),
            this.parent.element.appendChild(this.element)
        }
        ,
        o.prototype.deactivate = function() {
            this.parent.element.removeChild(this.element),
            n.prototype.destroy.call(this),
            this.element.removeEventListener("click", this)
        }
        ,
        o.prototype.createSVG = function() {
            var t = document.createElementNS(r, "svg");
            t.setAttribute("class", "flickity-button-icon"),
            t.setAttribute("viewBox", "0 0 100 100");
            var e = document.createElementNS(r, "path")
              , n = function(t) {
                if ("string" == typeof t)
                    return t;
                return "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
            }(this.parent.options.arrowShape);
            return e.setAttribute("d", n),
            e.setAttribute("class", "arrow"),
            this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "),
            t.appendChild(e),
            t
        }
        ,
        o.prototype.onTap = function() {
            if (this.isEnabled) {
                this.parent.uiChange();
                var t = this.isPrevious ? "previous" : "next";
                this.parent[t]()
            }
        }
        ,
        o.prototype.handleEvent = i.handleEvent,
        o.prototype.onclick = function(t) {
            var e = document.activeElement;
            e && e == this.element && this.onTap(t, t)
        }
        ,
        o.prototype.enable = function() {
            this.isEnabled || (this.element.disabled = !1,
            this.isEnabled = !0)
        }
        ,
        o.prototype.disable = function() {
            this.isEnabled && (this.element.disabled = !0,
            this.isEnabled = !1)
        }
        ,
        o.prototype.update = function() {
            var t = this.parent.slides;
            if (this.parent.options.wrapAround && t.length > 1)
                this.enable();
            else {
                var e = t.length ? t.length - 1 : 0
                  , n = this.isPrevious ? 0 : e;
                this[this.parent.selectedIndex == n ? "disable" : "enable"]()
            }
        }
        ,
        o.prototype.destroy = function() {
            this.deactivate()
        }
        ,
        i.extend(e.defaults, {
            prevNextButtons: !0,
            arrowShape: {
                x0: 10,
                x1: 60,
                y1: 50,
                x2: 70,
                y2: 40,
                x3: 30
            }
        }),
        e.createMethods.push("_createPrevNextButtons");
        var s = e.prototype;
        return s._createPrevNextButtons = function() {
            this.options.prevNextButtons && (this.prevButton = new o(-1,this),
            this.nextButton = new o(1,this),
            this.on("activate", this.activatePrevNextButtons))
        }
        ,
        s.activatePrevNextButtons = function() {
            this.prevButton.activate(),
            this.nextButton.activate(),
            this.on("deactivate", this.deactivatePrevNextButtons)
        }
        ,
        s.deactivatePrevNextButtons = function() {
            this.prevButton.deactivate(),
            this.nextButton.deactivate(),
            this.off("deactivate", this.deactivatePrevNextButtons)
        }
        ,
        e.PrevNextButton = o,
        e
    })
}
, function(t, e, n) {
    var i, r;
    !function(o, s) {
        i = [n(2), n(13), n(0)],
        void 0 === (r = function(t, e, n) {
            return s(o, t, e, n)
        }
        .apply(e, i)) || (t.exports = r)
    }(window, function(t, e, n, i) {
        "use strict";
        function r(t) {
            this.parent = t,
            this._create()
        }
        r.prototype = new n,
        r.prototype._create = function() {
            this.holder = document.createElement("ol"),
            this.holder.className = "flickity-page-dots",
            this.dots = [],
            this.on("tap", this.onTap),
            this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }
        ,
        r.prototype.activate = function() {
            this.setDots(),
            this.bindTap(this.holder),
            this.parent.element.appendChild(this.holder)
        }
        ,
        r.prototype.deactivate = function() {
            this.parent.element.removeChild(this.holder),
            n.prototype.destroy.call(this)
        }
        ,
        r.prototype.setDots = function() {
            var t = this.parent.slides.length - this.dots.length;
            t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
        }
        ,
        r.prototype.addDots = function(t) {
            for (var e = document.createDocumentFragment(), n = [], i = this.dots.length, r = i + t, o = i; o < r; o++) {
                var s = document.createElement("li");
                s.className = "dot",
                s.setAttribute("aria-label", "Page dot " + (o + 1)),
                e.appendChild(s),
                n.push(s)
            }
            this.holder.appendChild(e),
            this.dots = this.dots.concat(n)
        }
        ,
        r.prototype.removeDots = function(t) {
            this.dots.splice(this.dots.length - t, t).forEach(function(t) {
                this.holder.removeChild(t)
            }, this)
        }
        ,
        r.prototype.updateSelected = function() {
            this.selectedDot && (this.selectedDot.className = "dot",
            this.selectedDot.removeAttribute("aria-current")),
            this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex],
            this.selectedDot.className = "dot is-selected",
            this.selectedDot.setAttribute("aria-current", "step"))
        }
        ,
        r.prototype.onTap = function(t) {
            var e = t.target;
            if ("LI" == e.nodeName) {
                this.parent.uiChange();
                var n = this.dots.indexOf(e);
                this.parent.select(n)
            }
        }
        ,
        r.prototype.destroy = function() {
            this.deactivate()
        }
        ,
        e.PageDots = r,
        i.extend(e.defaults, {
            pageDots: !0
        }),
        e.createMethods.push("_createPageDots");
        var o = e.prototype;
        return o._createPageDots = function() {
            this.options.pageDots && (this.pageDots = new r(this),
            this.on("activate", this.activatePageDots),
            this.on("select", this.updateSelectedPageDots),
            this.on("cellChange", this.updatePageDots),
            this.on("resize", this.updatePageDots),
            this.on("deactivate", this.deactivatePageDots))
        }
        ,
        o.activatePageDots = function() {
            this.pageDots.activate()
        }
        ,
        o.updateSelectedPageDots = function() {
            this.pageDots.updateSelected()
        }
        ,
        o.updatePageDots = function() {
            this.pageDots.setDots()
        }
        ,
        o.deactivatePageDots = function() {
            this.pageDots.deactivate()
        }
        ,
        e.PageDots = r,
        e
    })
}
, function(t, e, n) {
    var i, r, o;
    window,
    o = function(t, e, n) {
        "use strict";
        function i(t) {
            this.parent = t,
            this.state = "stopped",
            this.onVisibilityChange = this.visibilityChange.bind(this),
            this.onVisibilityPlay = this.visibilityPlay.bind(this)
        }
        i.prototype = Object.create(t.prototype),
        i.prototype.play = function() {
            "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing",
            document.addEventListener("visibilitychange", this.onVisibilityChange),
            this.tick()))
        }
        ,
        i.prototype.tick = function() {
            if ("playing" == this.state) {
                var t = this.parent.options.autoPlay;
                t = "number" == typeof t ? t : 3e3;
                var e = this;
                this.clear(),
                this.timeout = setTimeout(function() {
                    e.parent.next(!0),
                    e.tick()
                }, t)
            }
        }
        ,
        i.prototype.stop = function() {
            this.state = "stopped",
            this.clear(),
            document.removeEventListener("visibilitychange", this.onVisibilityChange)
        }
        ,
        i.prototype.clear = function() {
            clearTimeout(this.timeout)
        }
        ,
        i.prototype.pause = function() {
            "playing" == this.state && (this.state = "paused",
            this.clear())
        }
        ,
        i.prototype.unpause = function() {
            "paused" == this.state && this.play()
        }
        ,
        i.prototype.visibilityChange = function() {
            this[document.hidden ? "pause" : "unpause"]()
        }
        ,
        i.prototype.visibilityPlay = function() {
            this.play(),
            document.removeEventListener("visibilitychange", this.onVisibilityPlay)
        }
        ,
        e.extend(n.defaults, {
            pauseAutoPlayOnHover: !0
        }),
        n.createMethods.push("_createPlayer");
        var r = n.prototype;
        return r._createPlayer = function() {
            this.player = new i(this),
            this.on("activate", this.activatePlayer),
            this.on("uiChange", this.stopPlayer),
            this.on("pointerDown", this.stopPlayer),
            this.on("deactivate", this.deactivatePlayer)
        }
        ,
        r.activatePlayer = function() {
            this.options.autoPlay && (this.player.play(),
            this.element.addEventListener("mouseenter", this))
        }
        ,
        r.playPlayer = function() {
            this.player.play()
        }
        ,
        r.stopPlayer = function() {
            this.player.stop()
        }
        ,
        r.pausePlayer = function() {
            this.player.pause()
        }
        ,
        r.unpausePlayer = function() {
            this.player.unpause()
        }
        ,
        r.deactivatePlayer = function() {
            this.player.stop(),
            this.element.removeEventListener("mouseenter", this)
        }
        ,
        r.onmouseenter = function() {
            this.options.pauseAutoPlayOnHover && (this.player.pause(),
            this.element.addEventListener("mouseleave", this))
        }
        ,
        r.onmouseleave = function() {
            this.player.unpause(),
            this.element.removeEventListener("mouseleave", this)
        }
        ,
        n.Player = i,
        n
    }
    ,
    i = [n(10), n(0), n(2)],
    void 0 === (r = function(t, e, n) {
        return o(t, e, n)
    }
    .apply(e, i)) || (t.exports = r)
}
, function(t, e, n) {
    var i, r;
    !function(o, s) {
        i = [n(2), n(0)],
        void 0 === (r = function(t, e) {
            return s(o, t, e)
        }
        .apply(e, i)) || (t.exports = r)
    }(window, function(t, e, n) {
        "use strict";
        var i = e.prototype;
        return i.insert = function(t, e) {
            var n = this._makeCells(t);
            if (n && n.length) {
                var i = this.cells.length;
                e = void 0 === e ? i : e;
                var r = function(t) {
                    var e = document.createDocumentFragment();
                    return t.forEach(function(t) {
                        e.appendChild(t.element)
                    }),
                    e
                }(n)
                  , o = e == i;
                if (o)
                    this.slider.appendChild(r);
                else {
                    var s = this.cells[e].element;
                    this.slider.insertBefore(r, s)
                }
                if (0 === e)
                    this.cells = n.concat(this.cells);
                else if (o)
                    this.cells = this.cells.concat(n);
                else {
                    var a = this.cells.splice(e, i - e);
                    this.cells = this.cells.concat(n).concat(a)
                }
                this._sizeCells(n),
                this.cellChange(e, !0)
            }
        }
        ,
        i.append = function(t) {
            this.insert(t, this.cells.length)
        }
        ,
        i.prepend = function(t) {
            this.insert(t, 0)
        }
        ,
        i.remove = function(t) {
            var e = this.getCells(t);
            if (e && e.length) {
                var i = this.cells.length - 1;
                e.forEach(function(t) {
                    t.remove();
                    var e = this.cells.indexOf(t);
                    i = Math.min(e, i),
                    n.removeFrom(this.cells, t)
                }, this),
                this.cellChange(i, !0)
            }
        }
        ,
        i.cellSizeChange = function(t) {
            var e = this.getCell(t);
            if (e) {
                e.getSize();
                var n = this.cells.indexOf(e);
                this.cellChange(n)
            }
        }
        ,
        i.cellChange = function(t, e) {
            var n = this.selectedElement;
            this._positionCells(t),
            this._getWrapShiftCells(),
            this.setGallerySize();
            var i = this.getCell(n);
            i && (this.selectedIndex = this.getCellSlideIndex(i)),
            this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex),
            this.emitEvent("cellChange", [t]),
            this.select(this.selectedIndex),
            e && this.positionSliderAtSelected()
        }
        ,
        e
    })
}
, function(t, e, n) {
    var i, r;
    !function(o, s) {
        i = [n(2), n(0)],
        void 0 === (r = function(t, e) {
            return s(o, t, e)
        }
        .apply(e, i)) || (t.exports = r)
    }(window, function(t, e, n) {
        "use strict";
        e.createMethods.push("_createLazyload");
        var i = e.prototype;
        function r(t, e) {
            this.img = t,
            this.flickity = e,
            this.load()
        }
        return i._createLazyload = function() {
            this.on("select", this.lazyLoad)
        }
        ,
        i.lazyLoad = function() {
            var t = this.options.lazyLoad;
            if (t) {
                var e = "number" == typeof t ? t : 0
                  , i = [];
                this.getAdjacentCellElements(e).forEach(function(t) {
                    var e = function(t) {
                        if ("IMG" == t.nodeName) {
                            var e = t.getAttribute("data-flickity-lazyload")
                              , i = t.getAttribute("data-flickity-lazyload-src")
                              , r = t.getAttribute("data-flickity-lazyload-srcset");
                            if (e || i || r)
                                return [t]
                        }
                        var o = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                        return n.makeArray(o)
                    }(t);
                    i = i.concat(e)
                }),
                i.forEach(function(t) {
                    new r(t,this)
                }, this)
            }
        }
        ,
        r.prototype.handleEvent = n.handleEvent,
        r.prototype.load = function() {
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this);
            var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src")
              , e = this.img.getAttribute("data-flickity-lazyload-srcset");
            this.img.src = t,
            e && this.img.setAttribute("srcset", e),
            this.img.removeAttribute("data-flickity-lazyload"),
            this.img.removeAttribute("data-flickity-lazyload-src"),
            this.img.removeAttribute("data-flickity-lazyload-srcset")
        }
        ,
        r.prototype.onload = function(t) {
            this.complete(t, "flickity-lazyloaded")
        }
        ,
        r.prototype.onerror = function(t) {
            this.complete(t, "flickity-lazyerror")
        }
        ,
        r.prototype.complete = function(t, e) {
            this.img.removeEventListener("load", this),
            this.img.removeEventListener("error", this);
            var n = this.flickity.getParentCell(this.img)
              , i = n && n.element;
            this.flickity.cellSizeChange(i),
            this.img.classList.add(e),
            this.flickity.dispatchEvent("lazyLoad", t, i)
        }
        ,
        e.LazyLoader = r,
        e
    })
}
, , , , , , , , , , , , function(t, e, n) {
    n(1),
    t.exports = n(14)
}
], [39]);
