'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [8843],
  {
    48843: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return gt;
        },
        h_: function () {
          return mt;
        },
        fC: function () {
          return pt;
        },
        xz: function () {
          return ht;
        },
      });
      var r = n(62435);
      function o(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      function i(e, t) {
        if ('function' == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function a(...e) {
        return (t) => {
          let n = !1;
          const r = e.map((e) => {
            const r = i(e, t);
            return n || 'function' != typeof r || (n = !0), r;
          });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                const n = r[t];
                'function' == typeof n ? n() : i(e[t], null);
              }
            };
        };
      }
      function s(...e) {
        return r.useCallback(a(...e), e);
      }
      var l = n(25360),
        c = n(8183),
        f = n(27552),
        u = n(36622),
        d = n(91276),
        p = n(71347);
      function h(e, t, n) {
        let { reference: r, floating: o } = e;
        const i = (0, p.Qq)(t),
          a = (0, p.Wh)(t),
          s = (0, p.I4)(a),
          l = (0, p.k3)(t),
          c = 'y' === i,
          f = r.x + r.width / 2 - o.width / 2,
          u = r.y + r.height / 2 - o.height / 2,
          d = r[s] / 2 - o[s] / 2;
        let h;
        switch (l) {
          case 'top':
            h = { x: f, y: r.y - o.height };
            break;
          case 'bottom':
            h = { x: f, y: r.y + r.height };
            break;
          case 'right':
            h = { x: r.x + r.width, y: u };
            break;
          case 'left':
            h = { x: r.x - o.width, y: u };
            break;
          default:
            h = { x: r.x, y: r.y };
        }
        switch ((0, p.hp)(t)) {
          case 'start':
            h[a] -= d * (n && c ? -1 : 1);
            break;
          case 'end':
            h[a] += d * (n && c ? -1 : 1);
        }
        return h;
      }
      async function m(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
            x: r,
            y: o,
            platform: i,
            rects: a,
            elements: s,
            strategy: l,
          } = e,
          {
            boundary: c = 'clippingAncestors',
            rootBoundary: f = 'viewport',
            elementContext: u = 'floating',
            altBoundary: d = !1,
            padding: h = 0,
          } = (0, p.ku)(t, e),
          m = (0, p.yd)(h),
          g = s[d ? ('floating' === u ? 'reference' : 'floating') : u],
          y = (0, p.JB)(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(s.floating))),
              boundary: c,
              rootBoundary: f,
              strategy: l,
            }),
          ),
          w =
            'floating' === u
              ? {
                  x: r,
                  y: o,
                  width: a.floating.width,
                  height: a.floating.height,
                }
              : a.reference,
          x = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(s.floating)),
          v = ((await (null == i.isElement ? void 0 : i.isElement(x))) &&
            (await (null == i.getScale ? void 0 : i.getScale(x)))) || {
            x: 1,
            y: 1,
          },
          b = (0, p.JB)(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: s,
                  rect: w,
                  offsetParent: x,
                  strategy: l,
                })
              : w,
          );
        return {
          top: (y.top - b.top + m.top) / v.y,
          bottom: (b.bottom - y.bottom + m.bottom) / v.y,
          left: (y.left - b.left + m.left) / v.x,
          right: (b.right - y.right + m.right) / v.x,
        };
      }
      function g(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function y(e) {
        return p.mA.some((t) => e[t] >= 0);
      }
      var w = n(37317);
      function x(e) {
        const t = (0, w.Dx)(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = (0, w.Re)(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          s = (0, p.NM)(n) !== i || (0, p.NM)(r) !== a;
        return s && ((n = i), (r = a)), { width: n, height: r, $: s };
      }
      function v(e) {
        return (0, w.kK)(e) ? e : e.contextElement;
      }
      function b(e) {
        const t = v(e);
        if (!(0, w.Re)(t)) return (0, p.ze)(1);
        const n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = x(t);
        let a = (i ? (0, p.NM)(n.width) : n.width) / r,
          s = (i ? (0, p.NM)(n.height) : n.height) / o;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (s && Number.isFinite(s)) || (s = 1),
          { x: a, y: s }
        );
      }
      const R = (0, p.ze)(0);
      function P(e) {
        const t = (0, w.Jj)(e);
        return (0, w.Pf)() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : R;
      }
      function A(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = v(e);
        let a = (0, p.ze)(1);
        t && (r ? (0, w.kK)(r) && (a = b(r)) : (a = b(e)));
        const s = (function (e, t, n) {
          return (
            void 0 === t && (t = !1), !(!n || (t && n !== (0, w.Jj)(e))) && t
          );
        })(i, n, r)
          ? P(i)
          : (0, p.ze)(0);
        let l = (o.left + s.x) / a.x,
          c = (o.top + s.y) / a.y,
          f = o.width / a.x,
          u = o.height / a.y;
        if (i) {
          const e = (0, w.Jj)(i),
            t = r && (0, w.kK)(r) ? (0, w.Jj)(r) : r;
          let n = e,
            o = (0, w.wK)(n);
          for (; o && r && t !== n; ) {
            const e = b(o),
              t = o.getBoundingClientRect(),
              r = (0, w.Dx)(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (l *= e.x),
              (c *= e.y),
              (f *= e.x),
              (u *= e.y),
              (l += i),
              (c += a),
              (n = (0, w.Jj)(o)),
              (o = (0, w.wK)(n));
          }
        }
        return (0, p.JB)({ width: f, height: u, x: l, y: c });
      }
      function O(e, t) {
        const n = (0, w.Lw)(e).scrollLeft;
        return t ? t.left + n : A((0, w.tF)(e)).left + n;
      }
      function C(e, t, n) {
        void 0 === n && (n = !1);
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : O(e, r)),
          y: r.top + t.scrollTop,
        };
      }
      function k(e, t, n) {
        let r;
        if ('viewport' === t)
          r = (function (e, t) {
            const n = (0, w.Jj)(e),
              r = (0, w.tF)(e),
              o = n.visualViewport;
            let i = r.clientWidth,
              a = r.clientHeight,
              s = 0,
              l = 0;
            if (o) {
              (i = o.width), (a = o.height);
              const e = (0, w.Pf)();
              (!e || (e && 'fixed' === t)) &&
                ((s = o.offsetLeft), (l = o.offsetTop));
            }
            return { width: i, height: a, x: s, y: l };
          })(e, n);
        else if ('document' === t)
          r = (function (e) {
            const t = (0, w.tF)(e),
              n = (0, w.Lw)(e),
              r = e.ownerDocument.body,
              o = (0, p.Fp)(
                t.scrollWidth,
                t.clientWidth,
                r.scrollWidth,
                r.clientWidth,
              ),
              i = (0, p.Fp)(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight,
              );
            let a = -n.scrollLeft + O(e);
            const s = -n.scrollTop;
            return (
              'rtl' === (0, w.Dx)(r).direction &&
                (a += (0, p.Fp)(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: a, y: s }
            );
          })((0, w.tF)(e));
        else if ((0, w.kK)(t))
          r = (function (e, t) {
            const n = A(e, !0, 'fixed' === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = (0, w.Re)(e) ? b(e) : (0, p.ze)(1);
            return {
              width: e.clientWidth * i.x,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          const n = P(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return (0, p.JB)(r);
      }
      function F(e, t) {
        const n = (0, w.Ow)(e);
        return (
          !(n === t || !(0, w.kK)(n) || (0, w.Py)(n)) &&
          ('fixed' === (0, w.Dx)(n).position || F(n, t))
        );
      }
      function D(e, t, n) {
        const r = (0, w.Re)(t),
          o = (0, w.tF)(t),
          i = 'fixed' === n,
          a = A(e, !0, i, t);
        let s = { scrollLeft: 0, scrollTop: 0 };
        const l = (0, p.ze)(0);
        if (r || (!r && !i))
          if (
            (('body' !== (0, w.wk)(t) || (0, w.ao)(o)) && (s = (0, w.Lw)(t)), r)
          ) {
            const e = A(t, !0, i, t);
            (l.x = e.x + t.clientLeft), (l.y = e.y + t.clientTop);
          } else o && (l.x = O(o));
        const c = !o || r || i ? (0, p.ze)(0) : C(o, s);
        return {
          x: a.left + s.scrollLeft - l.x - c.x,
          y: a.top + s.scrollTop - l.y - c.y,
          width: a.width,
          height: a.height,
        };
      }
      function E(e) {
        return 'static' === (0, w.Dx)(e).position;
      }
      function j(e, t) {
        if (!(0, w.Re)(e) || 'fixed' === (0, w.Dx)(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return (0, w.tF)(e) === n && (n = n.ownerDocument.body), n;
      }
      function T(e, t) {
        const n = (0, w.Jj)(e);
        if ((0, w.tR)(e)) return n;
        if (!(0, w.Re)(e)) {
          let t = (0, w.Ow)(e);
          for (; t && !(0, w.Py)(t); ) {
            if ((0, w.kK)(t) && !E(t)) return t;
            t = (0, w.Ow)(t);
          }
          return n;
        }
        let r = j(e, t);
        for (; r && (0, w.Ze)(r) && E(r); ) r = j(r, t);
        return r && (0, w.Py)(r) && E(r) && !(0, w.hT)(r)
          ? n
          : r || (0, w.gQ)(e) || n;
      }
      const N = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
          const i = 'fixed' === o,
            a = (0, w.tF)(r),
            s = !!t && (0, w.tR)(t.floating);
          if (r === a || (s && i)) return n;
          let l = { scrollLeft: 0, scrollTop: 0 },
            c = (0, p.ze)(1);
          const f = (0, p.ze)(0),
            u = (0, w.Re)(r);
          if (
            (u || (!u && !i)) &&
            (('body' !== (0, w.wk)(r) || (0, w.ao)(a)) && (l = (0, w.Lw)(r)),
            (0, w.Re)(r))
          ) {
            const e = A(r);
            (c = b(r)), (f.x = e.x + r.clientLeft), (f.y = e.y + r.clientTop);
          }
          const d = !a || u || i ? (0, p.ze)(0) : C(a, l, !0);
          return {
            width: n.width * c.x,
            height: n.height * c.y,
            x: n.x * c.x - l.scrollLeft * c.x + f.x + d.x,
            y: n.y * c.y - l.scrollTop * c.y + f.y + d.y,
          };
        },
        getDocumentElement: w.tF,
        getClippingRect: function (e) {
          let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
          const i = [
              ...('clippingAncestors' === n
                ? (0, w.tR)(t)
                  ? []
                  : (function (e, t) {
                      const n = t.get(e);
                      if (n) return n;
                      let r = (0, w.Kx)(e, [], !1).filter(
                          (e) => (0, w.kK)(e) && 'body' !== (0, w.wk)(e),
                        ),
                        o = null;
                      const i = 'fixed' === (0, w.Dx)(e).position;
                      let a = i ? (0, w.Ow)(e) : e;
                      for (; (0, w.kK)(a) && !(0, w.Py)(a); ) {
                        const t = (0, w.Dx)(a),
                          n = (0, w.hT)(a);
                        n || 'fixed' !== t.position || (o = null),
                          (
                            i
                              ? !n && !o
                              : (!n &&
                                  'static' === t.position &&
                                  o &&
                                  ['absolute', 'fixed'].includes(o.position)) ||
                                ((0, w.ao)(a) && !n && F(e, a))
                          )
                            ? (r = r.filter((e) => e !== a))
                            : (o = t),
                          (a = (0, w.Ow)(a));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                : [].concat(n)),
              r,
            ],
            a = i[0],
            s = i.reduce(
              (e, n) => {
                const r = k(t, n, o);
                return (
                  (e.top = (0, p.Fp)(r.top, e.top)),
                  (e.right = (0, p.VV)(r.right, e.right)),
                  (e.bottom = (0, p.VV)(r.bottom, e.bottom)),
                  (e.left = (0, p.Fp)(r.left, e.left)),
                  e
                );
              },
              k(t, a, o),
            );
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top,
          };
        },
        getOffsetParent: T,
        getElementRects: async function (e) {
          const t = this.getOffsetParent || T,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: D(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        getClientRects: function (e) {
          return Array.from(e.getClientRects());
        },
        getDimensions: function (e) {
          const { width: t, height: n } = x(e);
          return { width: t, height: n };
        },
        getScale: b,
        isElement: w.kK,
        isRTL: function (e) {
          return 'rtl' === (0, w.Dx)(e).direction;
        },
      };
      function _(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      function L(e, t, n, r) {
        void 0 === r && (r = {});
        const {
            ancestorScroll: o = !0,
            ancestorResize: i = !0,
            elementResize: a = 'function' == typeof ResizeObserver,
            layoutShift: s = 'function' == typeof IntersectionObserver,
            animationFrame: l = !1,
          } = r,
          c = v(e),
          f = o || i ? [...(c ? (0, w.Kx)(c) : []), ...(0, w.Kx)(t)] : [];
        f.forEach((e) => {
          o && e.addEventListener('scroll', n, { passive: !0 }),
            i && e.addEventListener('resize', n);
        });
        const u =
          c && s
            ? (function (e, t) {
                let n,
                  r = null;
                const o = (0, w.tF)(e);
                function i() {
                  var e;
                  clearTimeout(n),
                    null == (e = r) || e.disconnect(),
                    (r = null);
                }
                return (
                  (function a(s, l) {
                    void 0 === s && (s = !1), void 0 === l && (l = 1), i();
                    const c = e.getBoundingClientRect(),
                      { left: f, top: u, width: d, height: h } = c;
                    if ((s || t(), !d || !h)) return;
                    const m = {
                      rootMargin:
                        -(0, p.GW)(u) +
                        'px ' +
                        -(0, p.GW)(o.clientWidth - (f + d)) +
                        'px ' +
                        -(0, p.GW)(o.clientHeight - (u + h)) +
                        'px ' +
                        -(0, p.GW)(f) +
                        'px',
                      threshold: (0, p.Fp)(0, (0, p.VV)(1, l)) || 1,
                    };
                    let g = !0;
                    function y(t) {
                      const r = t[0].intersectionRatio;
                      if (r !== l) {
                        if (!g) return a();
                        r
                          ? a(!1, r)
                          : (n = setTimeout(() => {
                              a(!1, 1e-7);
                            }, 1e3));
                      }
                      1 !== r || _(c, e.getBoundingClientRect()) || a(),
                        (g = !1);
                    }
                    try {
                      r = new IntersectionObserver(y, {
                        ...m,
                        root: o.ownerDocument,
                      });
                    } catch (e) {
                      r = new IntersectionObserver(y, m);
                    }
                    r.observe(e);
                  })(!0),
                  i
                );
              })(c, n)
            : null;
        let d,
          h = -1,
          m = null;
        a &&
          ((m = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === c &&
              m &&
              (m.unobserve(t),
              cancelAnimationFrame(h),
              (h = requestAnimationFrame(() => {
                var e;
                null == (e = m) || e.observe(t);
              }))),
              n();
          })),
          c && !l && m.observe(c),
          m.observe(t));
        let g = l ? A(e) : null;
        return (
          l &&
            (function t() {
              const r = A(e);
              g && !_(g, r) && n();
              (g = r), (d = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            var e;
            f.forEach((e) => {
              o && e.removeEventListener('scroll', n),
                i && e.removeEventListener('resize', n);
            }),
              null == u || u(),
              null == (e = m) || e.disconnect(),
              (m = null),
              l && cancelAnimationFrame(d);
          }
        );
      }
      const M = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: 'offset',
              options: e,
              async fn(t) {
                var n, r;
                const { x: o, y: i, placement: a, middlewareData: s } = t,
                  l = await (async function (e, t) {
                    const { placement: n, platform: r, elements: o } = e,
                      i = await (null == r.isRTL
                        ? void 0
                        : r.isRTL(o.floating)),
                      a = (0, p.k3)(n),
                      s = (0, p.hp)(n),
                      l = 'y' === (0, p.Qq)(n),
                      c = ['left', 'top'].includes(a) ? -1 : 1,
                      f = i && l ? -1 : 1,
                      u = (0, p.ku)(t, e);
                    let {
                      mainAxis: d,
                      crossAxis: h,
                      alignmentAxis: m,
                    } = 'number' == typeof u
                      ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
                      : {
                          mainAxis: u.mainAxis || 0,
                          crossAxis: u.crossAxis || 0,
                          alignmentAxis: u.alignmentAxis,
                        };
                    return (
                      s &&
                        'number' == typeof m &&
                        (h = 'end' === s ? -1 * m : m),
                      l ? { x: h * f, y: d * c } : { x: d * c, y: h * f }
                    );
                  })(t, e);
                return a === (null == (n = s.offset) ? void 0 : n.placement) &&
                  null != (r = s.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + l.x, y: i + l.y, data: { ...l, placement: a } };
              },
            }
          );
        },
        S = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'shift',
              options: e,
              async fn(t) {
                const { x: n, y: r, placement: o } = t,
                  {
                    mainAxis: i = !0,
                    crossAxis: a = !1,
                    limiter: s = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...l
                  } = (0, p.ku)(e, t),
                  c = { x: n, y: r },
                  f = await m(t, l),
                  u = (0, p.Qq)((0, p.k3)(o)),
                  d = (0, p.Rn)(u);
                let h = c[d],
                  g = c[u];
                if (i) {
                  const e = 'y' === d ? 'bottom' : 'right',
                    t = h + f['y' === d ? 'top' : 'left'],
                    n = h - f[e];
                  h = (0, p.uZ)(t, h, n);
                }
                if (a) {
                  const e = 'y' === u ? 'bottom' : 'right',
                    t = g + f['y' === u ? 'top' : 'left'],
                    n = g - f[e];
                  g = (0, p.uZ)(t, g, n);
                }
                const y = s.fn({ ...t, [d]: h, [u]: g });
                return {
                  ...y,
                  data: { x: y.x - n, y: y.y - r, enabled: { [d]: i, [u]: a } },
                };
              },
            }
          );
        },
        W = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'flip',
              options: e,
              async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: i,
                    rects: a,
                    initialPlacement: s,
                    platform: l,
                    elements: c,
                  } = t,
                  {
                    mainAxis: f = !0,
                    crossAxis: u = !0,
                    fallbackPlacements: d,
                    fallbackStrategy: h = 'bestFit',
                    fallbackAxisSideDirection: g = 'none',
                    flipAlignment: y = !0,
                    ...w
                  } = (0, p.ku)(e, t);
                if (null != (n = i.arrow) && n.alignmentOffset) return {};
                const x = (0, p.k3)(o),
                  v = (0, p.Qq)(s),
                  b = (0, p.k3)(s) === s,
                  R = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                  P = d || (b || !y ? [(0, p.pw)(s)] : (0, p.gy)(s)),
                  A = 'none' !== g;
                !d && A && P.push(...(0, p.KX)(s, y, g, R));
                const O = [s, ...P],
                  C = await m(t, w),
                  k = [];
                let F = (null == (r = i.flip) ? void 0 : r.overflows) || [];
                if ((f && k.push(C[x]), u)) {
                  const e = (0, p.i8)(o, a, R);
                  k.push(C[e[0]], C[e[1]]);
                }
                if (
                  ((F = [...F, { placement: o, overflows: k }]),
                  !k.every((e) => e <= 0))
                ) {
                  var D, E;
                  const e =
                      ((null == (D = i.flip) ? void 0 : D.index) || 0) + 1,
                    t = O[e];
                  if (t)
                    return {
                      data: { index: e, overflows: F },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (E = F.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1],
                    )[0])
                      ? void 0
                      : E.placement;
                  if (!n)
                    switch (h) {
                      case 'bestFit': {
                        var j;
                        const e =
                          null ==
                          (j = F.filter((e) => {
                            if (A) {
                              const t = (0, p.Qq)(e.placement);
                              return t === v || 'y' === t;
                            }
                            return !0;
                          })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : j[0];
                        e && (n = e);
                        break;
                      }
                      case 'initialPlacement':
                        n = s;
                    }
                  if (o !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        V = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'size',
              options: e,
              async fn(t) {
                var n, r;
                const { placement: o, rects: i, platform: a, elements: s } = t,
                  { apply: l = () => {}, ...c } = (0, p.ku)(e, t),
                  f = await m(t, c),
                  u = (0, p.k3)(o),
                  d = (0, p.hp)(o),
                  h = 'y' === (0, p.Qq)(o),
                  { width: g, height: y } = i.floating;
                let w, x;
                'top' === u || 'bottom' === u
                  ? ((w = u),
                    (x =
                      d ===
                      ((await (null == a.isRTL ? void 0 : a.isRTL(s.floating)))
                        ? 'start'
                        : 'end')
                        ? 'left'
                        : 'right'))
                  : ((x = u), (w = 'end' === d ? 'top' : 'bottom'));
                const v = y - f.top - f.bottom,
                  b = g - f.left - f.right,
                  R = (0, p.VV)(y - f[w], v),
                  P = (0, p.VV)(g - f[x], b),
                  A = !t.middlewareData.shift;
                let O = R,
                  C = P;
                if (
                  (null != (n = t.middlewareData.shift) &&
                    n.enabled.x &&
                    (C = b),
                  null != (r = t.middlewareData.shift) &&
                    r.enabled.y &&
                    (O = v),
                  A && !d)
                ) {
                  const e = (0, p.Fp)(f.left, 0),
                    t = (0, p.Fp)(f.right, 0),
                    n = (0, p.Fp)(f.top, 0),
                    r = (0, p.Fp)(f.bottom, 0);
                  h
                    ? (C =
                        g -
                        2 *
                          (0 !== e || 0 !== t
                            ? e + t
                            : (0, p.Fp)(f.left, f.right)))
                    : (O =
                        y -
                        2 *
                          (0 !== n || 0 !== r
                            ? n + r
                            : (0, p.Fp)(f.top, f.bottom)));
                }
                await l({ ...t, availableWidth: C, availableHeight: O });
                const k = await a.getDimensions(s.floating);
                return g !== k.width || y !== k.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        },
        I = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'hide',
              options: e,
              async fn(t) {
                const { rects: n } = t,
                  { strategy: r = 'referenceHidden', ...o } = (0, p.ku)(e, t);
                switch (r) {
                  case 'referenceHidden': {
                    const e = g(
                      await m(t, { ...o, elementContext: 'reference' }),
                      n.reference,
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: y(e),
                      },
                    };
                  }
                  case 'escaped': {
                    const e = g(
                      await m(t, { ...o, altBoundary: !0 }),
                      n.floating,
                    );
                    return { data: { escapedOffsets: e, escaped: y(e) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        },
        z = (e) => ({
          name: 'arrow',
          options: e,
          async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: a,
                elements: s,
                middlewareData: l,
              } = t,
              { element: c, padding: f = 0 } = (0, p.ku)(e, t) || {};
            if (null == c) return {};
            const u = (0, p.yd)(f),
              d = { x: n, y: r },
              h = (0, p.Wh)(o),
              m = (0, p.I4)(h),
              g = await a.getDimensions(c),
              y = 'y' === h,
              w = y ? 'top' : 'left',
              x = y ? 'bottom' : 'right',
              v = y ? 'clientHeight' : 'clientWidth',
              b = i.reference[m] + i.reference[h] - d[h] - i.floating[m],
              R = d[h] - i.reference[h],
              P = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(c));
            let A = P ? P[v] : 0;
            (A && (await (null == a.isElement ? void 0 : a.isElement(P)))) ||
              (A = s.floating[v] || i.floating[m]);
            const O = b / 2 - R / 2,
              C = A / 2 - g[m] / 2 - 1,
              k = (0, p.VV)(u[w], C),
              F = (0, p.VV)(u[x], C),
              D = k,
              E = A - g[m] - F,
              j = A / 2 - g[m] / 2 + O,
              T = (0, p.uZ)(D, j, E),
              N =
                !l.arrow &&
                null != (0, p.hp)(o) &&
                j !== T &&
                i.reference[m] / 2 - (j < D ? k : F) - g[m] / 2 < 0,
              _ = N ? (j < D ? j - D : j - E) : 0;
            return {
              [h]: d[h] + _,
              data: {
                [h]: T,
                centerOffset: j - T - _,
                ...(N && { alignmentOffset: _ }),
              },
              reset: N,
            };
          },
        }),
        B = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              options: e,
              fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: a,
                  } = t,
                  {
                    offset: s = 0,
                    mainAxis: l = !0,
                    crossAxis: c = !0,
                  } = (0, p.ku)(e, t),
                  f = { x: n, y: r },
                  u = (0, p.Qq)(o),
                  d = (0, p.Rn)(u);
                let h = f[d],
                  m = f[u];
                const g = (0, p.ku)(s, t),
                  y =
                    'number' == typeof g
                      ? { mainAxis: g, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...g };
                if (l) {
                  const e = 'y' === d ? 'height' : 'width',
                    t = i.reference[d] - i.floating[e] + y.mainAxis,
                    n = i.reference[d] + i.reference[e] - y.mainAxis;
                  h < t ? (h = t) : h > n && (h = n);
                }
                if (c) {
                  var w, x;
                  const e = 'y' === d ? 'width' : 'height',
                    t = ['top', 'left'].includes((0, p.k3)(o)),
                    n =
                      i.reference[u] -
                      i.floating[e] +
                      ((t && (null == (w = a.offset) ? void 0 : w[u])) || 0) +
                      (t ? 0 : y.crossAxis),
                    r =
                      i.reference[u] +
                      i.reference[e] +
                      (t ? 0 : (null == (x = a.offset) ? void 0 : x[u]) || 0) -
                      (t ? y.crossAxis : 0);
                  m < n ? (m = n) : m > r && (m = r);
                }
                return { [d]: h, [u]: m };
              },
            }
          );
        },
        H = (e, t, n) => {
          const r = new Map(),
            o = { platform: N, ...n },
            i = { ...o.platform, _c: r };
          return (async (e, t, n) => {
            const {
                placement: r = 'bottom',
                strategy: o = 'absolute',
                middleware: i = [],
                platform: a,
              } = n,
              s = i.filter(Boolean),
              l = await (null == a.isRTL ? void 0 : a.isRTL(t));
            let c = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o,
              }),
              { x: f, y: u } = h(c, r, l),
              d = r,
              p = {},
              m = 0;
            for (let n = 0; n < s.length; n++) {
              const { name: i, fn: g } = s[n],
                {
                  x: y,
                  y: w,
                  data: x,
                  reset: v,
                } = await g({
                  x: f,
                  y: u,
                  initialPlacement: r,
                  placement: d,
                  strategy: o,
                  middlewareData: p,
                  rects: c,
                  platform: a,
                  elements: { reference: e, floating: t },
                });
              (f = null != y ? y : f),
                (u = null != w ? w : u),
                (p = { ...p, [i]: { ...p[i], ...x } }),
                v &&
                  m <= 50 &&
                  (m++,
                  'object' == typeof v &&
                    (v.placement && (d = v.placement),
                    v.rects &&
                      (c =
                        !0 === v.rects
                          ? await a.getElementRects({
                              reference: e,
                              floating: t,
                              strategy: o,
                            })
                          : v.rects),
                    ({ x: f, y: u } = h(c, d, l))),
                  (n = -1));
            }
            return { x: f, y: u, placement: d, strategy: o, middlewareData: p };
          })(e, t, { ...o, platform: i });
        };
      var K = n(61254),
        $ = 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect;
      function U(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ('function' == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && 'object' == typeof e) {
          if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; 0 != r--; ) if (!U(e[r], t[r])) return !1;
            return !0;
          }
          if (
            ((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)
          )
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            const n = o[r];
            if (('_owner' !== n || !e.$$typeof) && !U(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function J(e) {
        if ('undefined' == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function q(e, t) {
        const n = J(e);
        return Math.round(t * n) / n;
      }
      function Q(e) {
        const t = r.useRef(e);
        return (
          $(() => {
            t.current = e;
          }),
          t
        );
      }
      const Z = (e) => ({
          name: 'arrow',
          options: e,
          fn(t) {
            const { element: n, padding: r } =
              'function' == typeof e ? e(t) : e;
            return n && ((o = n), {}.hasOwnProperty.call(o, 'current'))
              ? null != n.current
                ? z({ element: n.current, padding: r }).fn(t)
                : {}
              : n
                ? z({ element: n, padding: r }).fn(t)
                : {};
            var o;
          },
        }),
        X = (e, t) => ({ ...S(e), options: [e, t] }),
        Y = (e, t) => ({ ...B(e), options: [e, t] }),
        G = (e, t) => ({ ...W(e), options: [e, t] }),
        ee = (e, t) => ({ ...V(e), options: [e, t] }),
        te = (e, t) => ({ ...I(e), options: [e, t] }),
        ne = (e, t) => ({ ...Z(e), options: [e, t] });
      var re = n(86074),
        oe = r.forwardRef((e, t) => {
          const { children: n, ...o } = e,
            i = r.Children.toArray(n),
            a = i.find(se);
          if (a) {
            const e = a.props.children,
              n = i.map((t) =>
                t === a
                  ? r.Children.count(e) > 1
                    ? r.Children.only(null)
                    : r.isValidElement(e)
                      ? e.props.children
                      : null
                  : t,
              );
            return (0, re.jsx)(ie, {
              ...o,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, re.jsx)(ie, { ...o, ref: t, children: n });
        });
      oe.displayName = 'Slot';
      var ie = r.forwardRef((e, t) => {
        const { children: n, ...o } = e;
        if (r.isValidElement(n)) {
          const e = (function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
              n = t && 'isReactWarning' in t && t.isReactWarning;
            if (n) return e.ref;
            if (
              ((t = Object.getOwnPropertyDescriptor(e, 'ref')?.get),
              (n = t && 'isReactWarning' in t && t.isReactWarning),
              n)
            )
              return e.props.ref;
            return e.props.ref || e.ref;
          })(n);
          return r.cloneElement(n, { ...le(o, n.props), ref: t ? a(t, e) : e });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      ie.displayName = 'SlotClone';
      var ae = ({ children: e }) => (0, re.jsx)(re.Fragment, { children: e });
      function se(e) {
        return r.isValidElement(e) && e.type === ae;
      }
      function le(e, t) {
        const n = { ...t };
        for (const r in t) {
          const o = e[r],
            i = t[r];
          /^on[A-Z]/.test(r)
            ? o && i
              ? (n[r] = (...e) => {
                  i(...e), o(...e);
                })
              : o && (n[r] = o)
            : 'style' === r
              ? (n[r] = { ...o, ...i })
              : 'className' === r && (n[r] = [o, i].filter(Boolean).join(' '));
        }
        return { ...e, ...n };
      }
      var ce = [
        'a',
        'button',
        'div',
        'form',
        'h2',
        'h3',
        'img',
        'input',
        'label',
        'li',
        'nav',
        'ol',
        'p',
        'span',
        'svg',
        'ul',
      ].reduce((e, t) => {
        const n = r.forwardRef((e, n) => {
          const { asChild: r, ...o } = e,
            i = r ? oe : t;
          return (
            'undefined' != typeof window &&
              (window[Symbol.for('radix-ui')] = !0),
            (0, re.jsx)(i, { ...o, ref: n })
          );
        });
        return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
      }, {});
      var fe = r.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: o = 5, ...i } = e;
        return (0, re.jsx)(ce.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: '0 0 30 10',
          preserveAspectRatio: 'none',
          children: e.asChild
            ? n
            : (0, re.jsx)('polygon', { points: '0,0 30,0 15,10' }),
        });
      });
      fe.displayName = 'Arrow';
      var ue = fe,
        de = n(79698),
        pe = n(9981),
        he = n(7546),
        me = 'Popper',
        [ge, ye] = (0, l.b)(me),
        [we, xe] = ge(me),
        ve = (e) => {
          const { __scopePopper: t, children: n } = e,
            [o, i] = r.useState(null);
          return (0, re.jsx)(we, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n,
          });
        };
      ve.displayName = me;
      var be = 'PopperAnchor',
        Re = r.forwardRef((e, t) => {
          const { __scopePopper: n, virtualRef: o, ...i } = e,
            a = xe(be, n),
            l = r.useRef(null),
            c = s(t, l);
          return (
            r.useEffect(() => {
              a.onAnchorChange(o?.current || l.current);
            }),
            o ? null : (0, re.jsx)(ce.div, { ...i, ref: c })
          );
        });
      Re.displayName = be;
      var Pe = 'PopperContent',
        [Ae, Oe] = ge(Pe),
        Ce = r.forwardRef((e, t) => {
          const {
              __scopePopper: n,
              side: o = 'bottom',
              sideOffset: i = 0,
              align: a = 'center',
              alignOffset: l = 0,
              arrowPadding: c = 0,
              avoidCollisions: f = !0,
              collisionBoundary: u = [],
              collisionPadding: d = 0,
              sticky: p = 'partial',
              hideWhenDetached: h = !1,
              updatePositionStrategy: m = 'optimized',
              onPlaced: g,
              ...y
            } = e,
            w = xe(Pe, n),
            [x, v] = r.useState(null),
            b = s(t, (e) => v(e)),
            [R, P] = r.useState(null),
            A = (0, he.t)(R),
            O = A?.width ?? 0,
            C = A?.height ?? 0,
            k = o + ('center' !== a ? '-' + a : ''),
            F =
              'number' == typeof d
                ? d
                : { top: 0, right: 0, bottom: 0, left: 0, ...d },
            D = Array.isArray(u) ? u : [u],
            E = D.length > 0,
            j = { padding: F, boundary: D.filter(Ee), altBoundary: E },
            {
              refs: T,
              floatingStyles: N,
              placement: _,
              isPositioned: S,
              middlewareData: W,
            } = (function (e) {
              void 0 === e && (e = {});
              const {
                  placement: t = 'bottom',
                  strategy: n = 'absolute',
                  middleware: o = [],
                  platform: i,
                  elements: { reference: a, floating: s } = {},
                  transform: l = !0,
                  whileElementsMounted: c,
                  open: f,
                } = e,
                [u, d] = r.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, h] = r.useState(o);
              U(p, o) || h(o);
              const [m, g] = r.useState(null),
                [y, w] = r.useState(null),
                x = r.useCallback((e) => {
                  e !== P.current && ((P.current = e), g(e));
                }, []),
                v = r.useCallback((e) => {
                  e !== A.current && ((A.current = e), w(e));
                }, []),
                b = a || m,
                R = s || y,
                P = r.useRef(null),
                A = r.useRef(null),
                O = r.useRef(u),
                C = null != c,
                k = Q(c),
                F = Q(i),
                D = Q(f),
                E = r.useCallback(() => {
                  if (!P.current || !A.current) return;
                  const e = { placement: t, strategy: n, middleware: p };
                  F.current && (e.platform = F.current),
                    H(P.current, A.current, e).then((e) => {
                      const t = { ...e, isPositioned: !1 !== D.current };
                      j.current &&
                        !U(O.current, t) &&
                        ((O.current = t),
                        K.flushSync(() => {
                          d(t);
                        }));
                    });
                }, [p, t, n, F, D]);
              $(() => {
                !1 === f &&
                  O.current.isPositioned &&
                  ((O.current.isPositioned = !1),
                  d((e) => ({ ...e, isPositioned: !1 })));
              }, [f]);
              const j = r.useRef(!1);
              $(
                () => (
                  (j.current = !0),
                  () => {
                    j.current = !1;
                  }
                ),
                [],
              ),
                $(() => {
                  if ((b && (P.current = b), R && (A.current = R), b && R)) {
                    if (k.current) return k.current(b, R, E);
                    E();
                  }
                }, [b, R, E, k, C]);
              const T = r.useMemo(
                  () => ({
                    reference: P,
                    floating: A,
                    setReference: x,
                    setFloating: v,
                  }),
                  [x, v],
                ),
                N = r.useMemo(() => ({ reference: b, floating: R }), [b, R]),
                _ = r.useMemo(() => {
                  const e = { position: n, left: 0, top: 0 };
                  if (!N.floating) return e;
                  const t = q(N.floating, u.x),
                    r = q(N.floating, u.y);
                  return l
                    ? {
                        ...e,
                        transform: 'translate(' + t + 'px, ' + r + 'px)',
                        ...(J(N.floating) >= 1.5 && {
                          willChange: 'transform',
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, l, N.floating, u.x, u.y]);
              return r.useMemo(
                () => ({
                  ...u,
                  update: E,
                  refs: T,
                  elements: N,
                  floatingStyles: _,
                }),
                [u, E, T, N, _],
              );
            })({
              strategy: 'fixed',
              placement: k,
              whileElementsMounted: (...e) =>
                L(...e, { animationFrame: 'always' === m }),
              elements: { reference: w.anchor },
              middleware: [
                ((V = { mainAxis: i + C, alignmentAxis: l }),
                { ...M(V), options: [V, I] }),
                f &&
                  X({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: 'partial' === p ? Y() : void 0,
                    ...j,
                  }),
                f && G({ ...j }),
                ee({
                  ...j,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r,
                  }) => {
                    const { width: o, height: i } = t.reference,
                      a = e.floating.style;
                    a.setProperty('--radix-popper-available-width', `${n}px`),
                      a.setProperty(
                        '--radix-popper-available-height',
                        `${r}px`,
                      ),
                      a.setProperty('--radix-popper-anchor-width', `${o}px`),
                      a.setProperty('--radix-popper-anchor-height', `${i}px`);
                  },
                }),
                R && ne({ element: R, padding: c }),
                je({ arrowWidth: O, arrowHeight: C }),
                h && te({ strategy: 'referenceHidden', ...j }),
              ],
            });
          var V, I;
          const [z, B] = Te(_),
            Z = (0, de.W)(g);
          (0, pe.b)(() => {
            S && Z?.();
          }, [S, Z]);
          const oe = W.arrow?.x,
            ie = W.arrow?.y,
            ae = 0 !== W.arrow?.centerOffset,
            [se, le] = r.useState();
          return (
            (0, pe.b)(() => {
              x && le(window.getComputedStyle(x).zIndex);
            }, [x]),
            (0, re.jsx)('div', {
              ref: T.setFloating,
              'data-radix-popper-content-wrapper': '',
              style: {
                ...N,
                transform: S ? N.transform : 'translate(0, -200%)',
                minWidth: 'max-content',
                zIndex: se,
                '--radix-popper-transform-origin': [
                  W.transformOrigin?.x,
                  W.transformOrigin?.y,
                ].join(' '),
                ...(W.hide?.referenceHidden && {
                  visibility: 'hidden',
                  pointerEvents: 'none',
                }),
              },
              dir: e.dir,
              children: (0, re.jsx)(Ae, {
                scope: n,
                placedSide: z,
                onArrowChange: P,
                arrowX: oe,
                arrowY: ie,
                shouldHideArrow: ae,
                children: (0, re.jsx)(ce.div, {
                  'data-side': z,
                  'data-align': B,
                  ...y,
                  ref: b,
                  style: { ...y.style, animation: S ? void 0 : 'none' },
                }),
              }),
            })
          );
        });
      Ce.displayName = Pe;
      var ke = 'PopperArrow',
        Fe = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
        De = r.forwardRef(function (e, t) {
          const { __scopePopper: n, ...r } = e,
            o = Oe(ke, n),
            i = Fe[o.placedSide];
          return (0, re.jsx)('span', {
            ref: o.onArrowChange,
            style: {
              position: 'absolute',
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
              transformOrigin: {
                top: '',
                right: '0 0',
                bottom: 'center 0',
                left: '100% 0',
              }[o.placedSide],
              transform: {
                top: 'translateY(100%)',
                right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                bottom: 'rotate(180deg)',
                left: 'translateY(50%) rotate(-90deg) translateX(50%)',
              }[o.placedSide],
              visibility: o.shouldHideArrow ? 'hidden' : void 0,
            },
            children: (0, re.jsx)(ue, {
              ...r,
              ref: t,
              style: { ...r.style, display: 'block' },
            }),
          });
        });
      function Ee(e) {
        return null !== e;
      }
      De.displayName = ke;
      var je = (e) => ({
        name: 'transformOrigin',
        options: e,
        fn(t) {
          const { placement: n, rects: r, middlewareData: o } = t,
            i = 0 !== o.arrow?.centerOffset,
            a = i ? 0 : e.arrowWidth,
            s = i ? 0 : e.arrowHeight,
            [l, c] = Te(n),
            f = { start: '0%', center: '50%', end: '100%' }[c],
            u = (o.arrow?.x ?? 0) + a / 2,
            d = (o.arrow?.y ?? 0) + s / 2;
          let p = '',
            h = '';
          return (
            'bottom' === l
              ? ((p = i ? f : `${u}px`), (h = -s + 'px'))
              : 'top' === l
                ? ((p = i ? f : `${u}px`), (h = `${r.floating.height + s}px`))
                : 'right' === l
                  ? ((p = -s + 'px'), (h = i ? f : `${d}px`))
                  : 'left' === l &&
                    ((p = `${r.floating.width + s}px`), (h = i ? f : `${d}px`)),
            { data: { x: p, y: h } }
          );
        },
      });
      function Te(e) {
        const [t, n = 'center'] = e.split('-');
        return [t, n];
      }
      var Ne = ve,
        _e = Re,
        Le = Ce,
        Me = De,
        Se = r.forwardRef((e, t) => {
          const { container: n, ...o } = e,
            [i, a] = r.useState(!1);
          (0, pe.b)(() => a(!0), []);
          const s = n || (i && globalThis?.document?.body);
          return s
            ? K.createPortal((0, re.jsx)(ce.div, { ...o, ref: t }), s)
            : null;
        });
      Se.displayName = 'Portal';
      var We = (e) => {
        const { present: t, children: n } = e,
          o = (function (e) {
            const [t, n] = r.useState(),
              o = r.useRef({}),
              i = r.useRef(e),
              a = r.useRef('none'),
              s = e ? 'mounted' : 'unmounted',
              [l, c] = (function (e, t) {
                return r.useReducer((e, n) => t[e][n] ?? e, e);
              })(s, {
                mounted: {
                  UNMOUNT: 'unmounted',
                  ANIMATION_OUT: 'unmountSuspended',
                },
                unmountSuspended: {
                  MOUNT: 'mounted',
                  ANIMATION_END: 'unmounted',
                },
                unmounted: { MOUNT: 'mounted' },
              });
            return (
              r.useEffect(() => {
                const e = Ve(o.current);
                a.current = 'mounted' === l ? e : 'none';
              }, [l]),
              (0, pe.b)(() => {
                const t = o.current,
                  n = i.current;
                if (n !== e) {
                  const r = a.current,
                    o = Ve(t);
                  if (e) c('MOUNT');
                  else if ('none' === o || 'none' === t?.display) c('UNMOUNT');
                  else {
                    c(n && r !== o ? 'ANIMATION_OUT' : 'UNMOUNT');
                  }
                  i.current = e;
                }
              }, [e, c]),
              (0, pe.b)(() => {
                if (t) {
                  let e;
                  const n = t.ownerDocument.defaultView ?? window,
                    r = (r) => {
                      const a = Ve(o.current).includes(r.animationName);
                      if (
                        r.target === t &&
                        a &&
                        (c('ANIMATION_END'), !i.current)
                      ) {
                        const r = t.style.animationFillMode;
                        (t.style.animationFillMode = 'forwards'),
                          (e = n.setTimeout(() => {
                            'forwards' === t.style.animationFillMode &&
                              (t.style.animationFillMode = r);
                          }));
                      }
                    },
                    s = (e) => {
                      e.target === t && (a.current = Ve(o.current));
                    };
                  return (
                    t.addEventListener('animationstart', s),
                    t.addEventListener('animationcancel', r),
                    t.addEventListener('animationend', r),
                    () => {
                      n.clearTimeout(e),
                        t.removeEventListener('animationstart', s),
                        t.removeEventListener('animationcancel', r),
                        t.removeEventListener('animationend', r);
                    }
                  );
                }
                c('ANIMATION_END');
              }, [t, c]),
              {
                isPresent: ['mounted', 'unmountSuspended'].includes(l),
                ref: r.useCallback((e) => {
                  e && (o.current = getComputedStyle(e)), n(e);
                }, []),
              }
            );
          })(t),
          i =
            'function' == typeof n
              ? n({ present: o.isPresent })
              : r.Children.only(n),
          a = s(
            o.ref,
            (function (e) {
              let t = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
                n = t && 'isReactWarning' in t && t.isReactWarning;
              if (n) return e.ref;
              if (
                ((t = Object.getOwnPropertyDescriptor(e, 'ref')?.get),
                (n = t && 'isReactWarning' in t && t.isReactWarning),
                n)
              )
                return e.props.ref;
              return e.props.ref || e.ref;
            })(i),
          );
        return 'function' == typeof n || o.isPresent
          ? r.cloneElement(i, { ref: a })
          : null;
      };
      function Ve(e) {
        return e?.animationName || 'none';
      }
      We.displayName = 'Presence';
      var Ie = n(77342),
        ze = n(23541),
        Be = n(71930),
        He = 'Popover',
        [Ke, $e] = (0, l.b)(He, [ye]),
        Ue = ye(),
        [Je, qe] = Ke(He),
        Qe = (e) => {
          const {
              __scopePopover: t,
              children: n,
              open: o,
              defaultOpen: i,
              onOpenChange: a,
              modal: s = !1,
            } = e,
            l = Ue(t),
            c = r.useRef(null),
            [f, u] = r.useState(!1),
            [p = !1, h] = (0, Ie.T)({ prop: o, defaultProp: i, onChange: a });
          return (0, re.jsx)(Ne, {
            ...l,
            children: (0, re.jsx)(Je, {
              scope: t,
              contentId: (0, d.M)(),
              triggerRef: c,
              open: p,
              onOpenChange: h,
              onOpenToggle: r.useCallback(() => h((e) => !e), [h]),
              hasCustomAnchor: f,
              onCustomAnchorAdd: r.useCallback(() => u(!0), []),
              onCustomAnchorRemove: r.useCallback(() => u(!1), []),
              modal: s,
              children: n,
            }),
          });
        };
      Qe.displayName = He;
      var Ze = 'PopoverAnchor',
        Xe = r.forwardRef((e, t) => {
          const { __scopePopover: n, ...o } = e,
            i = qe(Ze, n),
            a = Ue(n),
            { onCustomAnchorAdd: s, onCustomAnchorRemove: l } = i;
          return (
            r.useEffect(() => (s(), () => l()), [s, l]),
            (0, re.jsx)(_e, { ...a, ...o, ref: t })
          );
        });
      Xe.displayName = Ze;
      var Ye = 'PopoverTrigger',
        Ge = r.forwardRef((e, t) => {
          const { __scopePopover: n, ...r } = e,
            i = qe(Ye, n),
            a = Ue(n),
            l = s(t, i.triggerRef),
            c = (0, re.jsx)(ce.button, {
              type: 'button',
              'aria-haspopup': 'dialog',
              'aria-expanded': i.open,
              'aria-controls': i.contentId,
              'data-state': dt(i.open),
              ...r,
              ref: l,
              onClick: o(e.onClick, i.onOpenToggle),
            });
          return i.hasCustomAnchor
            ? c
            : (0, re.jsx)(_e, { asChild: !0, ...a, children: c });
        });
      Ge.displayName = Ye;
      var et = 'PopoverPortal',
        [tt, nt] = Ke(et, { forceMount: void 0 }),
        rt = (e) => {
          const {
              __scopePopover: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            i = qe(et, t);
          return (0, re.jsx)(tt, {
            scope: t,
            forceMount: n,
            children: (0, re.jsx)(We, {
              present: n || i.open,
              children: (0, re.jsx)(Se, {
                asChild: !0,
                container: o,
                children: r,
              }),
            }),
          });
        };
      rt.displayName = et;
      var ot = 'PopoverContent',
        it = r.forwardRef((e, t) => {
          const n = nt(ot, e.__scopePopover),
            { forceMount: r = n.forceMount, ...o } = e,
            i = qe(ot, e.__scopePopover);
          return (0, re.jsx)(We, {
            present: r || i.open,
            children: i.modal
              ? (0, re.jsx)(at, { ...o, ref: t })
              : (0, re.jsx)(st, { ...o, ref: t }),
          });
        });
      it.displayName = ot;
      var at = r.forwardRef((e, t) => {
          const n = qe(ot, e.__scopePopover),
            i = r.useRef(null),
            a = s(t, i),
            l = r.useRef(!1);
          return (
            r.useEffect(() => {
              const e = i.current;
              if (e) return (0, ze.Ry)(e);
            }, []),
            (0, re.jsx)(Be.Z, {
              as: oe,
              allowPinchZoom: !0,
              children: (0, re.jsx)(lt, {
                ...e,
                ref: a,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: o(e.onCloseAutoFocus, (e) => {
                  e.preventDefault(),
                    l.current || n.triggerRef.current?.focus();
                }),
                onPointerDownOutside: o(
                  e.onPointerDownOutside,
                  (e) => {
                    const t = e.detail.originalEvent,
                      n = 0 === t.button && !0 === t.ctrlKey,
                      r = 2 === t.button || n;
                    l.current = r;
                  },
                  { checkForDefaultPrevented: !1 },
                ),
                onFocusOutside: o(e.onFocusOutside, (e) => e.preventDefault(), {
                  checkForDefaultPrevented: !1,
                }),
              }),
            })
          );
        }),
        st = r.forwardRef((e, t) => {
          const n = qe(ot, e.__scopePopover),
            o = r.useRef(!1),
            i = r.useRef(!1);
          return (0, re.jsx)(lt, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              e.onCloseAutoFocus?.(t),
                t.defaultPrevented ||
                  (o.current || n.triggerRef.current?.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (i.current = !1);
            },
            onInteractOutside: (t) => {
              e.onInteractOutside?.(t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  'pointerdown' === t.detail.originalEvent.type &&
                    (i.current = !0));
              const r = t.target,
                a = n.triggerRef.current?.contains(r);
              a && t.preventDefault(),
                'focusin' === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault();
            },
          });
        }),
        lt = r.forwardRef((e, t) => {
          const {
              __scopePopover: n,
              trapFocus: r,
              onOpenAutoFocus: o,
              onCloseAutoFocus: i,
              disableOutsidePointerEvents: a,
              onEscapeKeyDown: s,
              onPointerDownOutside: l,
              onFocusOutside: d,
              onInteractOutside: p,
              ...h
            } = e,
            m = qe(ot, n),
            g = Ue(n);
          return (
            (0, f.EW)(),
            (0, re.jsx)(u.M, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, re.jsx)(c.XB, {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onInteractOutside: p,
                onEscapeKeyDown: s,
                onPointerDownOutside: l,
                onFocusOutside: d,
                onDismiss: () => m.onOpenChange(!1),
                children: (0, re.jsx)(Le, {
                  'data-state': dt(m.open),
                  role: 'dialog',
                  id: m.contentId,
                  ...g,
                  ...h,
                  ref: t,
                  style: {
                    ...h.style,
                    '--radix-popover-content-transform-origin':
                      'var(--radix-popper-transform-origin)',
                    '--radix-popover-content-available-width':
                      'var(--radix-popper-available-width)',
                    '--radix-popover-content-available-height':
                      'var(--radix-popper-available-height)',
                    '--radix-popover-trigger-width':
                      'var(--radix-popper-anchor-width)',
                    '--radix-popover-trigger-height':
                      'var(--radix-popper-anchor-height)',
                  },
                }),
              }),
            })
          );
        }),
        ct = 'PopoverClose',
        ft = r.forwardRef((e, t) => {
          const { __scopePopover: n, ...r } = e,
            i = qe(ct, n);
          return (0, re.jsx)(ce.button, {
            type: 'button',
            ...r,
            ref: t,
            onClick: o(e.onClick, () => i.onOpenChange(!1)),
          });
        });
      ft.displayName = ct;
      var ut = r.forwardRef((e, t) => {
        const { __scopePopover: n, ...r } = e,
          o = Ue(n);
        return (0, re.jsx)(Me, { ...o, ...r, ref: t });
      });
      function dt(e) {
        return e ? 'open' : 'closed';
      }
      ut.displayName = 'PopoverArrow';
      var pt = Qe,
        ht = Ge,
        mt = rt,
        gt = it;
    },
  },
]);
//# sourceMappingURL=8843.b264b542.async.js.map
