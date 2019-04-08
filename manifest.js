!function(e) {
    var t = window.webpackJsonp;
    window.webpackJsonp = function(r, a, i) {
        for (var c, u, s, l = 0, f = []; l < r.length; l++)
            u = r[l],
            n[u] && f.push(n[u][0]),
            n[u] = 0;
        for (c in a)
            Object.prototype.hasOwnProperty.call(a, c) && (e[c] = a[c]);
        for (t && t(r, a, i); f.length; )
            f.shift()();
        if (i)
            for (l = 0; l < i.length; l++)
                s = o(o.s = i[l]);
        return s
    }
    ;
    var r = {}
      , n = {
        5: 0
    };
    function o(t) {
        if (r[t])
            return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o),
        n.l = !0,
        n.exports
    }
    o.e = function(e) {
        var t = n[e];
        if (0 === t)
            return new Promise(function(e) {
                e()
            }
            );
        if (t)
            return t[2];
        var r = new Promise(function(r, o) {
            t = n[e] = [r, o]
        }
        );
        t[2] = r;
        var a = document.getElementsByTagName("head")[0]
          , i = document.createElement("script");
        i.type = "text/javascript",
        i.charset = "utf-8",
        i.async = !0,
        i.timeout = 12e4,
        o.nc && i.setAttribute("nonce", o.nc),
        i.src = o.p + "" + ({
            0: "/js/vendor",
            1: "/js/templates/home",
            2: "/js/templates/work",
            3: "/js/templates/work-item",
            4: "/js/site"
        }[e] || e) + ".js";
        var c = setTimeout(u, 12e4);
        function u() {
            i.onerror = i.onload = null,
            clearTimeout(c);
            var t = n[e];
            0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")),
            n[e] = void 0)
        }
        return i.onerror = i.onload = u,
        a.appendChild(i),
        r
    }
    ,
    o.m = e,
    o.c = r,
    o.d = function(e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "/",
    o.oe = function(e) {
        throw console.error(e),
        e
    }
}([]);
