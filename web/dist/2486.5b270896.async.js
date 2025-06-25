/*! For license information please see 2486.5b270896.async.js.LICENSE.txt */
'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [2486],
  {
    13742: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('check', [
        ['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }],
      ]);
    },
    8971: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('chevron-down', [
        ['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }],
      ]);
    },
    84979: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('chevron-up', [
        ['path', { d: 'm18 15-6-6-6 6', key: '153udz' }],
      ]);
    },
    42614: function (e, t, n) {
      function r(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
      n.d(t, {
        u: function () {
          return r;
        },
      });
    },
    78990: function (e, t, n) {
      n.d(t, {
        gm: function () {
          return i;
        },
      });
      var r = n(62435),
        o = (n(86074), r.createContext(void 0));
      function i(e) {
        const t = r.useContext(o);
        return e || t || 'ltr';
      }
    },
    12291: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return en;
        },
        ZA: function () {
          return nn;
        },
        JO: function () {
          return Yt;
        },
        ck: function () {
          return on;
        },
        wU: function () {
          return an;
        },
        eT: function () {
          return ln;
        },
        __: function () {
          return rn;
        },
        h_: function () {
          return Gt;
        },
        fC: function () {
          return Ut;
        },
        $G: function () {
          return cn;
        },
        u_: function () {
          return sn;
        },
        Z0: function () {
          return un;
        },
        xz: function () {
          return Qt;
        },
        B4: function () {
          return Xt;
        },
        l_: function () {
          return tn;
        },
      });
      var r = n(62435),
        o = n(61254),
        i = n(42614);
      function l(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      var a = n(25360);
      function s(e, t) {
        if ('function' == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function c(...e) {
        return (t) => {
          let n = !1;
          const r = e.map((e) => {
            const r = s(e, t);
            return n || 'function' != typeof r || (n = !0), r;
          });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                const n = r[t];
                'function' == typeof n ? n() : s(e[t], null);
              }
            };
        };
      }
      function u(...e) {
        return r.useCallback(c(...e), e);
      }
      var d = n(86074),
        f = r.forwardRef((e, t) => {
          const { children: n, ...o } = e,
            i = r.Children.toArray(n),
            l = i.find(m);
          if (l) {
            const e = l.props.children,
              n = i.map((t) =>
                t === l
                  ? r.Children.count(e) > 1
                    ? r.Children.only(null)
                    : r.isValidElement(e)
                      ? e.props.children
                      : null
                  : t,
              );
            return (0, d.jsx)(p, {
              ...o,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, d.jsx)(p, { ...o, ref: t, children: n });
        });
      f.displayName = 'Slot';
      var p = r.forwardRef((e, t) => {
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
          return r.cloneElement(n, { ...g(o, n.props), ref: t ? c(t, e) : e });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      p.displayName = 'SlotClone';
      var h = ({ children: e }) => (0, d.jsx)(d.Fragment, { children: e });
      function m(e) {
        return r.isValidElement(e) && e.type === h;
      }
      function g(e, t) {
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
      var y = n(78990),
        w = n(8183),
        v = n(27552),
        x = n(36622),
        b = n(91276),
        S = n(71347);
      function R(e, t, n) {
        let { reference: r, floating: o } = e;
        const i = (0, S.Qq)(t),
          l = (0, S.Wh)(t),
          a = (0, S.I4)(l),
          s = (0, S.k3)(t),
          c = 'y' === i,
          u = r.x + r.width / 2 - o.width / 2,
          d = r.y + r.height / 2 - o.height / 2,
          f = r[a] / 2 - o[a] / 2;
        let p;
        switch (s) {
          case 'top':
            p = { x: u, y: r.y - o.height };
            break;
          case 'bottom':
            p = { x: u, y: r.y + r.height };
            break;
          case 'right':
            p = { x: r.x + r.width, y: d };
            break;
          case 'left':
            p = { x: r.x - o.width, y: d };
            break;
          default:
            p = { x: r.x, y: r.y };
        }
        switch ((0, S.hp)(t)) {
          case 'start':
            p[l] -= f * (n && c ? -1 : 1);
            break;
          case 'end':
            p[l] += f * (n && c ? -1 : 1);
        }
        return p;
      }
      async function C(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
            x: r,
            y: o,
            platform: i,
            rects: l,
            elements: a,
            strategy: s,
          } = e,
          {
            boundary: c = 'clippingAncestors',
            rootBoundary: u = 'viewport',
            elementContext: d = 'floating',
            altBoundary: f = !1,
            padding: p = 0,
          } = (0, S.ku)(t, e),
          h = (0, S.yd)(p),
          m = a[f ? ('floating' === d ? 'reference' : 'floating') : d],
          g = (0, S.JB)(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(m))) ||
                n
                  ? m
                  : m.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: c,
              rootBoundary: u,
              strategy: s,
            }),
          ),
          y =
            'floating' === d
              ? {
                  x: r,
                  y: o,
                  width: l.floating.width,
                  height: l.floating.height,
                }
              : l.reference,
          w = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          v = ((await (null == i.isElement ? void 0 : i.isElement(w))) &&
            (await (null == i.getScale ? void 0 : i.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          x = (0, S.JB)(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: y,
                  offsetParent: w,
                  strategy: s,
                })
              : y,
          );
        return {
          top: (g.top - x.top + h.top) / v.y,
          bottom: (x.bottom - g.bottom + h.bottom) / v.y,
          left: (g.left - x.left + h.left) / v.x,
          right: (x.right - g.right + h.right) / v.x,
        };
      }
      function P(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function k(e) {
        return S.mA.some((t) => e[t] >= 0);
      }
      var j = n(37317);
      function A(e) {
        const t = (0, j.Dx)(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = (0, j.Re)(e),
          i = o ? e.offsetWidth : n,
          l = o ? e.offsetHeight : r,
          a = (0, S.NM)(n) !== i || (0, S.NM)(r) !== l;
        return a && ((n = i), (r = l)), { width: n, height: r, $: a };
      }
      function T(e) {
        return (0, j.kK)(e) ? e : e.contextElement;
      }
      function D(e) {
        const t = T(e);
        if (!(0, j.Re)(t)) return (0, S.ze)(1);
        const n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = A(t);
        let l = (i ? (0, S.NM)(n.width) : n.width) / r,
          a = (i ? (0, S.NM)(n.height) : n.height) / o;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: l, y: a }
        );
      }
      const E = (0, S.ze)(0);
      function O(e) {
        const t = (0, j.Jj)(e);
        return (0, j.Pf)() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : E;
      }
      function _(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = T(e);
        let l = (0, S.ze)(1);
        t && (r ? (0, j.kK)(r) && (l = D(r)) : (l = D(e)));
        const a = (function (e, t, n) {
          return (
            void 0 === t && (t = !1), !(!n || (t && n !== (0, j.Jj)(e))) && t
          );
        })(i, n, r)
          ? O(i)
          : (0, S.ze)(0);
        let s = (o.left + a.x) / l.x,
          c = (o.top + a.y) / l.y,
          u = o.width / l.x,
          d = o.height / l.y;
        if (i) {
          const e = (0, j.Jj)(i),
            t = r && (0, j.kK)(r) ? (0, j.Jj)(r) : r;
          let n = e,
            o = (0, j.wK)(n);
          for (; o && r && t !== n; ) {
            const e = D(o),
              t = o.getBoundingClientRect(),
              r = (0, j.Dx)(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (s *= e.x),
              (c *= e.y),
              (u *= e.x),
              (d *= e.y),
              (s += i),
              (c += l),
              (n = (0, j.Jj)(o)),
              (o = (0, j.wK)(n));
          }
        }
        return (0, S.JB)({ width: u, height: d, x: s, y: c });
      }
      function L(e, t) {
        const n = (0, j.Lw)(e).scrollLeft;
        return t ? t.left + n : _((0, j.tF)(e)).left + n;
      }
      function N(e, t, n) {
        void 0 === n && (n = !1);
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : L(e, r)),
          y: r.top + t.scrollTop,
        };
      }
      function M(e, t, n) {
        let r;
        if ('viewport' === t)
          r = (function (e, t) {
            const n = (0, j.Jj)(e),
              r = (0, j.tF)(e),
              o = n.visualViewport;
            let i = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              s = 0;
            if (o) {
              (i = o.width), (l = o.height);
              const e = (0, j.Pf)();
              (!e || (e && 'fixed' === t)) &&
                ((a = o.offsetLeft), (s = o.offsetTop));
            }
            return { width: i, height: l, x: a, y: s };
          })(e, n);
        else if ('document' === t)
          r = (function (e) {
            const t = (0, j.tF)(e),
              n = (0, j.Lw)(e),
              r = e.ownerDocument.body,
              o = (0, S.Fp)(
                t.scrollWidth,
                t.clientWidth,
                r.scrollWidth,
                r.clientWidth,
              ),
              i = (0, S.Fp)(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight,
              );
            let l = -n.scrollLeft + L(e);
            const a = -n.scrollTop;
            return (
              'rtl' === (0, j.Dx)(r).direction &&
                (l += (0, S.Fp)(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: l, y: a }
            );
          })((0, j.tF)(e));
        else if ((0, j.kK)(t))
          r = (function (e, t) {
            const n = _(e, !0, 'fixed' === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = (0, j.Re)(e) ? D(e) : (0, S.ze)(1);
            return {
              width: e.clientWidth * i.x,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          const n = O(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return (0, S.JB)(r);
      }
      function I(e, t) {
        const n = (0, j.Ow)(e);
        return (
          !(n === t || !(0, j.kK)(n) || (0, j.Py)(n)) &&
          ('fixed' === (0, j.Dx)(n).position || I(n, t))
        );
      }
      function F(e, t, n) {
        const r = (0, j.Re)(t),
          o = (0, j.tF)(t),
          i = 'fixed' === n,
          l = _(e, !0, i, t);
        let a = { scrollLeft: 0, scrollTop: 0 };
        const s = (0, S.ze)(0);
        if (r || (!r && !i))
          if (
            (('body' !== (0, j.wk)(t) || (0, j.ao)(o)) && (a = (0, j.Lw)(t)), r)
          ) {
            const e = _(t, !0, i, t);
            (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
          } else o && (s.x = L(o));
        const c = !o || r || i ? (0, S.ze)(0) : N(o, a);
        return {
          x: l.left + a.scrollLeft - s.x - c.x,
          y: l.top + a.scrollTop - s.y - c.y,
          width: l.width,
          height: l.height,
        };
      }
      function V(e) {
        return 'static' === (0, j.Dx)(e).position;
      }
      function H(e, t) {
        if (!(0, j.Re)(e) || 'fixed' === (0, j.Dx)(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return (0, j.tF)(e) === n && (n = n.ownerDocument.body), n;
      }
      function W(e, t) {
        const n = (0, j.Jj)(e);
        if ((0, j.tR)(e)) return n;
        if (!(0, j.Re)(e)) {
          let t = (0, j.Ow)(e);
          for (; t && !(0, j.Py)(t); ) {
            if ((0, j.kK)(t) && !V(t)) return t;
            t = (0, j.Ow)(t);
          }
          return n;
        }
        let r = H(e, t);
        for (; r && (0, j.Ze)(r) && V(r); ) r = H(r, t);
        return r && (0, j.Py)(r) && V(r) && !(0, j.hT)(r)
          ? n
          : r || (0, j.gQ)(e) || n;
      }
      const B = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
          const i = 'fixed' === o,
            l = (0, j.tF)(r),
            a = !!t && (0, j.tR)(t.floating);
          if (r === l || (a && i)) return n;
          let s = { scrollLeft: 0, scrollTop: 0 },
            c = (0, S.ze)(1);
          const u = (0, S.ze)(0),
            d = (0, j.Re)(r);
          if (
            (d || (!d && !i)) &&
            (('body' !== (0, j.wk)(r) || (0, j.ao)(l)) && (s = (0, j.Lw)(r)),
            (0, j.Re)(r))
          ) {
            const e = _(r);
            (c = D(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop);
          }
          const f = !l || d || i ? (0, S.ze)(0) : N(l, s, !0);
          return {
            width: n.width * c.x,
            height: n.height * c.y,
            x: n.x * c.x - s.scrollLeft * c.x + u.x + f.x,
            y: n.y * c.y - s.scrollTop * c.y + u.y + f.y,
          };
        },
        getDocumentElement: j.tF,
        getClippingRect: function (e) {
          let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
          const i = [
              ...('clippingAncestors' === n
                ? (0, j.tR)(t)
                  ? []
                  : (function (e, t) {
                      const n = t.get(e);
                      if (n) return n;
                      let r = (0, j.Kx)(e, [], !1).filter(
                          (e) => (0, j.kK)(e) && 'body' !== (0, j.wk)(e),
                        ),
                        o = null;
                      const i = 'fixed' === (0, j.Dx)(e).position;
                      let l = i ? (0, j.Ow)(e) : e;
                      for (; (0, j.kK)(l) && !(0, j.Py)(l); ) {
                        const t = (0, j.Dx)(l),
                          n = (0, j.hT)(l);
                        n || 'fixed' !== t.position || (o = null),
                          (
                            i
                              ? !n && !o
                              : (!n &&
                                  'static' === t.position &&
                                  o &&
                                  ['absolute', 'fixed'].includes(o.position)) ||
                                ((0, j.ao)(l) && !n && I(e, l))
                          )
                            ? (r = r.filter((e) => e !== l))
                            : (o = t),
                          (l = (0, j.Ow)(l));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                : [].concat(n)),
              r,
            ],
            l = i[0],
            a = i.reduce(
              (e, n) => {
                const r = M(t, n, o);
                return (
                  (e.top = (0, S.Fp)(r.top, e.top)),
                  (e.right = (0, S.VV)(r.right, e.right)),
                  (e.bottom = (0, S.VV)(r.bottom, e.bottom)),
                  (e.left = (0, S.Fp)(r.left, e.left)),
                  e
                );
              },
              M(t, l, o),
            );
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top,
          };
        },
        getOffsetParent: W,
        getElementRects: async function (e) {
          const t = this.getOffsetParent || W,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: F(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        getClientRects: function (e) {
          return Array.from(e.getClientRects());
        },
        getDimensions: function (e) {
          const { width: t, height: n } = A(e);
          return { width: t, height: n };
        },
        getScale: D,
        isElement: j.kK,
        isRTL: function (e) {
          return 'rtl' === (0, j.Dx)(e).direction;
        },
      };
      function K(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      function z(e, t, n, r) {
        void 0 === r && (r = {});
        const {
            ancestorScroll: o = !0,
            ancestorResize: i = !0,
            elementResize: l = 'function' == typeof ResizeObserver,
            layoutShift: a = 'function' == typeof IntersectionObserver,
            animationFrame: s = !1,
          } = r,
          c = T(e),
          u = o || i ? [...(c ? (0, j.Kx)(c) : []), ...(0, j.Kx)(t)] : [];
        u.forEach((e) => {
          o && e.addEventListener('scroll', n, { passive: !0 }),
            i && e.addEventListener('resize', n);
        });
        const d =
          c && a
            ? (function (e, t) {
                let n,
                  r = null;
                const o = (0, j.tF)(e);
                function i() {
                  var e;
                  clearTimeout(n),
                    null == (e = r) || e.disconnect(),
                    (r = null);
                }
                return (
                  (function l(a, s) {
                    void 0 === a && (a = !1), void 0 === s && (s = 1), i();
                    const c = e.getBoundingClientRect(),
                      { left: u, top: d, width: f, height: p } = c;
                    if ((a || t(), !f || !p)) return;
                    const h = {
                      rootMargin:
                        -(0, S.GW)(d) +
                        'px ' +
                        -(0, S.GW)(o.clientWidth - (u + f)) +
                        'px ' +
                        -(0, S.GW)(o.clientHeight - (d + p)) +
                        'px ' +
                        -(0, S.GW)(u) +
                        'px',
                      threshold: (0, S.Fp)(0, (0, S.VV)(1, s)) || 1,
                    };
                    let m = !0;
                    function g(t) {
                      const r = t[0].intersectionRatio;
                      if (r !== s) {
                        if (!m) return l();
                        r
                          ? l(!1, r)
                          : (n = setTimeout(() => {
                              l(!1, 1e-7);
                            }, 1e3));
                      }
                      1 !== r || K(c, e.getBoundingClientRect()) || l(),
                        (m = !1);
                    }
                    try {
                      r = new IntersectionObserver(g, {
                        ...h,
                        root: o.ownerDocument,
                      });
                    } catch (e) {
                      r = new IntersectionObserver(g, h);
                    }
                    r.observe(e);
                  })(!0),
                  i
                );
              })(c, n)
            : null;
        let f,
          p = -1,
          h = null;
        l &&
          ((h = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === c &&
              h &&
              (h.unobserve(t),
              cancelAnimationFrame(p),
              (p = requestAnimationFrame(() => {
                var e;
                null == (e = h) || e.observe(t);
              }))),
              n();
          })),
          c && !s && h.observe(c),
          h.observe(t));
        let m = s ? _(e) : null;
        return (
          s &&
            (function t() {
              const r = _(e);
              m && !K(m, r) && n();
              (m = r), (f = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            var e;
            u.forEach((e) => {
              o && e.removeEventListener('scroll', n),
                i && e.removeEventListener('resize', n);
            }),
              null == d || d(),
              null == (e = h) || e.disconnect(),
              (h = null),
              s && cancelAnimationFrame(f);
          }
        );
      }
      const $ = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: 'offset',
              options: e,
              async fn(t) {
                var n, r;
                const { x: o, y: i, placement: l, middlewareData: a } = t,
                  s = await (async function (e, t) {
                    const { placement: n, platform: r, elements: o } = e,
                      i = await (null == r.isRTL
                        ? void 0
                        : r.isRTL(o.floating)),
                      l = (0, S.k3)(n),
                      a = (0, S.hp)(n),
                      s = 'y' === (0, S.Qq)(n),
                      c = ['left', 'top'].includes(l) ? -1 : 1,
                      u = i && s ? -1 : 1,
                      d = (0, S.ku)(t, e);
                    let {
                      mainAxis: f,
                      crossAxis: p,
                      alignmentAxis: h,
                    } = 'number' == typeof d
                      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
                      : {
                          mainAxis: d.mainAxis || 0,
                          crossAxis: d.crossAxis || 0,
                          alignmentAxis: d.alignmentAxis,
                        };
                    return (
                      a &&
                        'number' == typeof h &&
                        (p = 'end' === a ? -1 * h : h),
                      s ? { x: p * u, y: f * c } : { x: f * c, y: p * u }
                    );
                  })(t, e);
                return l === (null == (n = a.offset) ? void 0 : n.placement) &&
                  null != (r = a.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + s.x, y: i + s.y, data: { ...s, placement: l } };
              },
            }
          );
        },
        q = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'shift',
              options: e,
              async fn(t) {
                const { x: n, y: r, placement: o } = t,
                  {
                    mainAxis: i = !0,
                    crossAxis: l = !1,
                    limiter: a = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...s
                  } = (0, S.ku)(e, t),
                  c = { x: n, y: r },
                  u = await C(t, s),
                  d = (0, S.Qq)((0, S.k3)(o)),
                  f = (0, S.Rn)(d);
                let p = c[f],
                  h = c[d];
                if (i) {
                  const e = 'y' === f ? 'bottom' : 'right',
                    t = p + u['y' === f ? 'top' : 'left'],
                    n = p - u[e];
                  p = (0, S.uZ)(t, p, n);
                }
                if (l) {
                  const e = 'y' === d ? 'bottom' : 'right',
                    t = h + u['y' === d ? 'top' : 'left'],
                    n = h - u[e];
                  h = (0, S.uZ)(t, h, n);
                }
                const m = a.fn({ ...t, [f]: p, [d]: h });
                return {
                  ...m,
                  data: { x: m.x - n, y: m.y - r, enabled: { [f]: i, [d]: l } },
                };
              },
            }
          );
        },
        Z = function (e) {
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
                    rects: l,
                    initialPlacement: a,
                    platform: s,
                    elements: c,
                  } = t,
                  {
                    mainAxis: u = !0,
                    crossAxis: d = !0,
                    fallbackPlacements: f,
                    fallbackStrategy: p = 'bestFit',
                    fallbackAxisSideDirection: h = 'none',
                    flipAlignment: m = !0,
                    ...g
                  } = (0, S.ku)(e, t);
                if (null != (n = i.arrow) && n.alignmentOffset) return {};
                const y = (0, S.k3)(o),
                  w = (0, S.Qq)(a),
                  v = (0, S.k3)(a) === a,
                  x = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                  b = f || (v || !m ? [(0, S.pw)(a)] : (0, S.gy)(a)),
                  R = 'none' !== h;
                !f && R && b.push(...(0, S.KX)(a, m, h, x));
                const P = [a, ...b],
                  k = await C(t, g),
                  j = [];
                let A = (null == (r = i.flip) ? void 0 : r.overflows) || [];
                if ((u && j.push(k[y]), d)) {
                  const e = (0, S.i8)(o, l, x);
                  j.push(k[e[0]], k[e[1]]);
                }
                if (
                  ((A = [...A, { placement: o, overflows: j }]),
                  !j.every((e) => e <= 0))
                ) {
                  var T, D;
                  const e =
                      ((null == (T = i.flip) ? void 0 : T.index) || 0) + 1,
                    t = P[e];
                  if (t)
                    return {
                      data: { index: e, overflows: A },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (D = A.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1],
                    )[0])
                      ? void 0
                      : D.placement;
                  if (!n)
                    switch (p) {
                      case 'bestFit': {
                        var E;
                        const e =
                          null ==
                          (E = A.filter((e) => {
                            if (R) {
                              const t = (0, S.Qq)(e.placement);
                              return t === w || 'y' === t;
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
                            : E[0];
                        e && (n = e);
                        break;
                      }
                      case 'initialPlacement':
                        n = a;
                    }
                  if (o !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        J = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'size',
              options: e,
              async fn(t) {
                var n, r;
                const { placement: o, rects: i, platform: l, elements: a } = t,
                  { apply: s = () => {}, ...c } = (0, S.ku)(e, t),
                  u = await C(t, c),
                  d = (0, S.k3)(o),
                  f = (0, S.hp)(o),
                  p = 'y' === (0, S.Qq)(o),
                  { width: h, height: m } = i.floating;
                let g, y;
                'top' === d || 'bottom' === d
                  ? ((g = d),
                    (y =
                      f ===
                      ((await (null == l.isRTL ? void 0 : l.isRTL(a.floating)))
                        ? 'start'
                        : 'end')
                        ? 'left'
                        : 'right'))
                  : ((y = d), (g = 'end' === f ? 'top' : 'bottom'));
                const w = m - u.top - u.bottom,
                  v = h - u.left - u.right,
                  x = (0, S.VV)(m - u[g], w),
                  b = (0, S.VV)(h - u[y], v),
                  R = !t.middlewareData.shift;
                let P = x,
                  k = b;
                if (
                  (null != (n = t.middlewareData.shift) &&
                    n.enabled.x &&
                    (k = v),
                  null != (r = t.middlewareData.shift) &&
                    r.enabled.y &&
                    (P = w),
                  R && !f)
                ) {
                  const e = (0, S.Fp)(u.left, 0),
                    t = (0, S.Fp)(u.right, 0),
                    n = (0, S.Fp)(u.top, 0),
                    r = (0, S.Fp)(u.bottom, 0);
                  p
                    ? (k =
                        h -
                        2 *
                          (0 !== e || 0 !== t
                            ? e + t
                            : (0, S.Fp)(u.left, u.right)))
                    : (P =
                        m -
                        2 *
                          (0 !== n || 0 !== r
                            ? n + r
                            : (0, S.Fp)(u.top, u.bottom)));
                }
                await s({ ...t, availableWidth: k, availableHeight: P });
                const j = await l.getDimensions(a.floating);
                return h !== j.width || m !== j.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        },
        U = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'hide',
              options: e,
              async fn(t) {
                const { rects: n } = t,
                  { strategy: r = 'referenceHidden', ...o } = (0, S.ku)(e, t);
                switch (r) {
                  case 'referenceHidden': {
                    const e = P(
                      await C(t, { ...o, elementContext: 'reference' }),
                      n.reference,
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: k(e),
                      },
                    };
                  }
                  case 'escaped': {
                    const e = P(
                      await C(t, { ...o, altBoundary: !0 }),
                      n.floating,
                    );
                    return { data: { escapedOffsets: e, escaped: k(e) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        },
        Q = (e) => ({
          name: 'arrow',
          options: e,
          async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: l,
                elements: a,
                middlewareData: s,
              } = t,
              { element: c, padding: u = 0 } = (0, S.ku)(e, t) || {};
            if (null == c) return {};
            const d = (0, S.yd)(u),
              f = { x: n, y: r },
              p = (0, S.Wh)(o),
              h = (0, S.I4)(p),
              m = await l.getDimensions(c),
              g = 'y' === p,
              y = g ? 'top' : 'left',
              w = g ? 'bottom' : 'right',
              v = g ? 'clientHeight' : 'clientWidth',
              x = i.reference[h] + i.reference[p] - f[p] - i.floating[h],
              b = f[p] - i.reference[p],
              R = await (null == l.getOffsetParent
                ? void 0
                : l.getOffsetParent(c));
            let C = R ? R[v] : 0;
            (C && (await (null == l.isElement ? void 0 : l.isElement(R)))) ||
              (C = a.floating[v] || i.floating[h]);
            const P = x / 2 - b / 2,
              k = C / 2 - m[h] / 2 - 1,
              j = (0, S.VV)(d[y], k),
              A = (0, S.VV)(d[w], k),
              T = j,
              D = C - m[h] - A,
              E = C / 2 - m[h] / 2 + P,
              O = (0, S.uZ)(T, E, D),
              _ =
                !s.arrow &&
                null != (0, S.hp)(o) &&
                E !== O &&
                i.reference[h] / 2 - (E < T ? j : A) - m[h] / 2 < 0,
              L = _ ? (E < T ? E - T : E - D) : 0;
            return {
              [p]: f[p] + L,
              data: {
                [p]: O,
                centerOffset: E - O - L,
                ...(_ && { alignmentOffset: L }),
              },
              reset: _,
            };
          },
        }),
        X = function (e) {
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
                    middlewareData: l,
                  } = t,
                  {
                    offset: a = 0,
                    mainAxis: s = !0,
                    crossAxis: c = !0,
                  } = (0, S.ku)(e, t),
                  u = { x: n, y: r },
                  d = (0, S.Qq)(o),
                  f = (0, S.Rn)(d);
                let p = u[f],
                  h = u[d];
                const m = (0, S.ku)(a, t),
                  g =
                    'number' == typeof m
                      ? { mainAxis: m, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...m };
                if (s) {
                  const e = 'y' === f ? 'height' : 'width',
                    t = i.reference[f] - i.floating[e] + g.mainAxis,
                    n = i.reference[f] + i.reference[e] - g.mainAxis;
                  p < t ? (p = t) : p > n && (p = n);
                }
                if (c) {
                  var y, w;
                  const e = 'y' === f ? 'width' : 'height',
                    t = ['top', 'left'].includes((0, S.k3)(o)),
                    n =
                      i.reference[d] -
                      i.floating[e] +
                      ((t && (null == (y = l.offset) ? void 0 : y[d])) || 0) +
                      (t ? 0 : g.crossAxis),
                    r =
                      i.reference[d] +
                      i.reference[e] +
                      (t ? 0 : (null == (w = l.offset) ? void 0 : w[d]) || 0) -
                      (t ? g.crossAxis : 0);
                  h < n ? (h = n) : h > r && (h = r);
                }
                return { [f]: p, [d]: h };
              },
            }
          );
        },
        Y = (e, t, n) => {
          const r = new Map(),
            o = { platform: B, ...n },
            i = { ...o.platform, _c: r };
          return (async (e, t, n) => {
            const {
                placement: r = 'bottom',
                strategy: o = 'absolute',
                middleware: i = [],
                platform: l,
              } = n,
              a = i.filter(Boolean),
              s = await (null == l.isRTL ? void 0 : l.isRTL(t));
            let c = await l.getElementRects({
                reference: e,
                floating: t,
                strategy: o,
              }),
              { x: u, y: d } = R(c, r, s),
              f = r,
              p = {},
              h = 0;
            for (let n = 0; n < a.length; n++) {
              const { name: i, fn: m } = a[n],
                {
                  x: g,
                  y: y,
                  data: w,
                  reset: v,
                } = await m({
                  x: u,
                  y: d,
                  initialPlacement: r,
                  placement: f,
                  strategy: o,
                  middlewareData: p,
                  rects: c,
                  platform: l,
                  elements: { reference: e, floating: t },
                });
              (u = null != g ? g : u),
                (d = null != y ? y : d),
                (p = { ...p, [i]: { ...p[i], ...w } }),
                v &&
                  h <= 50 &&
                  (h++,
                  'object' == typeof v &&
                    (v.placement && (f = v.placement),
                    v.rects &&
                      (c =
                        !0 === v.rects
                          ? await l.getElementRects({
                              reference: e,
                              floating: t,
                              strategy: o,
                            })
                          : v.rects),
                    ({ x: u, y: d } = R(c, f, s))),
                  (n = -1));
            }
            return { x: u, y: d, placement: f, strategy: o, middlewareData: p };
          })(e, t, { ...o, platform: i });
        };
      var G = 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect;
      function ee(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ('function' == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && 'object' == typeof e) {
          if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; 0 != r--; ) if (!ee(e[r], t[r])) return !1;
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
            if (('_owner' !== n || !e.$$typeof) && !ee(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function te(e) {
        if ('undefined' == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ne(e, t) {
        const n = te(e);
        return Math.round(t * n) / n;
      }
      function re(e) {
        const t = r.useRef(e);
        return (
          G(() => {
            t.current = e;
          }),
          t
        );
      }
      const oe = (e) => ({
          name: 'arrow',
          options: e,
          fn(t) {
            const { element: n, padding: r } =
              'function' == typeof e ? e(t) : e;
            return n && ((o = n), {}.hasOwnProperty.call(o, 'current'))
              ? null != n.current
                ? Q({ element: n.current, padding: r }).fn(t)
                : {}
              : n
                ? Q({ element: n, padding: r }).fn(t)
                : {};
            var o;
          },
        }),
        ie = (e, t) => ({ ...q(e), options: [e, t] }),
        le = (e, t) => ({ ...X(e), options: [e, t] }),
        ae = (e, t) => ({ ...Z(e), options: [e, t] }),
        se = (e, t) => ({ ...J(e), options: [e, t] }),
        ce = (e, t) => ({ ...U(e), options: [e, t] }),
        ue = (e, t) => ({ ...oe(e), options: [e, t] });
      var de = [
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
            i = r ? f : t;
          return (
            'undefined' != typeof window &&
              (window[Symbol.for('radix-ui')] = !0),
            (0, d.jsx)(i, { ...o, ref: n })
          );
        });
        return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
      }, {});
      var fe = r.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: o = 5, ...i } = e;
        return (0, d.jsx)(de.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: '0 0 30 10',
          preserveAspectRatio: 'none',
          children: e.asChild
            ? n
            : (0, d.jsx)('polygon', { points: '0,0 30,0 15,10' }),
        });
      });
      fe.displayName = 'Arrow';
      var pe = fe,
        he = n(79698),
        me = n(9981),
        ge = n(7546),
        ye = 'Popper',
        [we, ve] = (0, a.b)(ye),
        [xe, be] = we(ye),
        Se = (e) => {
          const { __scopePopper: t, children: n } = e,
            [o, i] = r.useState(null);
          return (0, d.jsx)(xe, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n,
          });
        };
      Se.displayName = ye;
      var Re = 'PopperAnchor',
        Ce = r.forwardRef((e, t) => {
          const { __scopePopper: n, virtualRef: o, ...i } = e,
            l = be(Re, n),
            a = r.useRef(null),
            s = u(t, a);
          return (
            r.useEffect(() => {
              l.onAnchorChange(o?.current || a.current);
            }),
            o ? null : (0, d.jsx)(de.div, { ...i, ref: s })
          );
        });
      Ce.displayName = Re;
      var Pe = 'PopperContent',
        [ke, je] = we(Pe),
        Ae = r.forwardRef((e, t) => {
          const {
              __scopePopper: n,
              side: i = 'bottom',
              sideOffset: l = 0,
              align: a = 'center',
              alignOffset: s = 0,
              arrowPadding: c = 0,
              avoidCollisions: f = !0,
              collisionBoundary: p = [],
              collisionPadding: h = 0,
              sticky: m = 'partial',
              hideWhenDetached: g = !1,
              updatePositionStrategy: y = 'optimized',
              onPlaced: w,
              ...v
            } = e,
            x = be(Pe, n),
            [b, S] = r.useState(null),
            R = u(t, (e) => S(e)),
            [C, P] = r.useState(null),
            k = (0, ge.t)(C),
            j = k?.width ?? 0,
            A = k?.height ?? 0,
            T = i + ('center' !== a ? '-' + a : ''),
            D =
              'number' == typeof h
                ? h
                : { top: 0, right: 0, bottom: 0, left: 0, ...h },
            E = Array.isArray(p) ? p : [p],
            O = E.length > 0,
            _ = { padding: D, boundary: E.filter(Oe), altBoundary: O },
            {
              refs: L,
              floatingStyles: N,
              placement: M,
              isPositioned: I,
              middlewareData: F,
            } = (function (e) {
              void 0 === e && (e = {});
              const {
                  placement: t = 'bottom',
                  strategy: n = 'absolute',
                  middleware: i = [],
                  platform: l,
                  elements: { reference: a, floating: s } = {},
                  transform: c = !0,
                  whileElementsMounted: u,
                  open: d,
                } = e,
                [f, p] = r.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [h, m] = r.useState(i);
              ee(h, i) || m(i);
              const [g, y] = r.useState(null),
                [w, v] = r.useState(null),
                x = r.useCallback((e) => {
                  e !== C.current && ((C.current = e), y(e));
                }, []),
                b = r.useCallback((e) => {
                  e !== P.current && ((P.current = e), v(e));
                }, []),
                S = a || g,
                R = s || w,
                C = r.useRef(null),
                P = r.useRef(null),
                k = r.useRef(f),
                j = null != u,
                A = re(u),
                T = re(l),
                D = re(d),
                E = r.useCallback(() => {
                  if (!C.current || !P.current) return;
                  const e = { placement: t, strategy: n, middleware: h };
                  T.current && (e.platform = T.current),
                    Y(C.current, P.current, e).then((e) => {
                      const t = { ...e, isPositioned: !1 !== D.current };
                      O.current &&
                        !ee(k.current, t) &&
                        ((k.current = t),
                        o.flushSync(() => {
                          p(t);
                        }));
                    });
                }, [h, t, n, T, D]);
              G(() => {
                !1 === d &&
                  k.current.isPositioned &&
                  ((k.current.isPositioned = !1),
                  p((e) => ({ ...e, isPositioned: !1 })));
              }, [d]);
              const O = r.useRef(!1);
              G(
                () => (
                  (O.current = !0),
                  () => {
                    O.current = !1;
                  }
                ),
                [],
              ),
                G(() => {
                  if ((S && (C.current = S), R && (P.current = R), S && R)) {
                    if (A.current) return A.current(S, R, E);
                    E();
                  }
                }, [S, R, E, A, j]);
              const _ = r.useMemo(
                  () => ({
                    reference: C,
                    floating: P,
                    setReference: x,
                    setFloating: b,
                  }),
                  [x, b],
                ),
                L = r.useMemo(() => ({ reference: S, floating: R }), [S, R]),
                N = r.useMemo(() => {
                  const e = { position: n, left: 0, top: 0 };
                  if (!L.floating) return e;
                  const t = ne(L.floating, f.x),
                    r = ne(L.floating, f.y);
                  return c
                    ? {
                        ...e,
                        transform: 'translate(' + t + 'px, ' + r + 'px)',
                        ...(te(L.floating) >= 1.5 && {
                          willChange: 'transform',
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, c, L.floating, f.x, f.y]);
              return r.useMemo(
                () => ({
                  ...f,
                  update: E,
                  refs: _,
                  elements: L,
                  floatingStyles: N,
                }),
                [f, E, _, L, N],
              );
            })({
              strategy: 'fixed',
              placement: T,
              whileElementsMounted: (...e) =>
                z(...e, { animationFrame: 'always' === y }),
              elements: { reference: x.anchor },
              middleware: [
                ((V = { mainAxis: l + A, alignmentAxis: s }),
                { ...$(V), options: [V, H] }),
                f &&
                  ie({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: 'partial' === m ? le() : void 0,
                    ..._,
                  }),
                f && ae({ ..._ }),
                se({
                  ..._,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r,
                  }) => {
                    const { width: o, height: i } = t.reference,
                      l = e.floating.style;
                    l.setProperty('--radix-popper-available-width', `${n}px`),
                      l.setProperty(
                        '--radix-popper-available-height',
                        `${r}px`,
                      ),
                      l.setProperty('--radix-popper-anchor-width', `${o}px`),
                      l.setProperty('--radix-popper-anchor-height', `${i}px`);
                  },
                }),
                C && ue({ element: C, padding: c }),
                _e({ arrowWidth: j, arrowHeight: A }),
                g && ce({ strategy: 'referenceHidden', ..._ }),
              ],
            });
          var V, H;
          const [W, B] = Le(M),
            K = (0, he.W)(w);
          (0, me.b)(() => {
            I && K?.();
          }, [I, K]);
          const q = F.arrow?.x,
            Z = F.arrow?.y,
            J = 0 !== F.arrow?.centerOffset,
            [U, Q] = r.useState();
          return (
            (0, me.b)(() => {
              b && Q(window.getComputedStyle(b).zIndex);
            }, [b]),
            (0, d.jsx)('div', {
              ref: L.setFloating,
              'data-radix-popper-content-wrapper': '',
              style: {
                ...N,
                transform: I ? N.transform : 'translate(0, -200%)',
                minWidth: 'max-content',
                zIndex: U,
                '--radix-popper-transform-origin': [
                  F.transformOrigin?.x,
                  F.transformOrigin?.y,
                ].join(' '),
                ...(F.hide?.referenceHidden && {
                  visibility: 'hidden',
                  pointerEvents: 'none',
                }),
              },
              dir: e.dir,
              children: (0, d.jsx)(ke, {
                scope: n,
                placedSide: W,
                onArrowChange: P,
                arrowX: q,
                arrowY: Z,
                shouldHideArrow: J,
                children: (0, d.jsx)(de.div, {
                  'data-side': W,
                  'data-align': B,
                  ...v,
                  ref: R,
                  style: { ...v.style, animation: I ? void 0 : 'none' },
                }),
              }),
            })
          );
        });
      Ae.displayName = Pe;
      var Te = 'PopperArrow',
        De = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
        Ee = r.forwardRef(function (e, t) {
          const { __scopePopper: n, ...r } = e,
            o = je(Te, n),
            i = De[o.placedSide];
          return (0, d.jsx)('span', {
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
            children: (0, d.jsx)(pe, {
              ...r,
              ref: t,
              style: { ...r.style, display: 'block' },
            }),
          });
        });
      function Oe(e) {
        return null !== e;
      }
      Ee.displayName = Te;
      var _e = (e) => ({
        name: 'transformOrigin',
        options: e,
        fn(t) {
          const { placement: n, rects: r, middlewareData: o } = t,
            i = 0 !== o.arrow?.centerOffset,
            l = i ? 0 : e.arrowWidth,
            a = i ? 0 : e.arrowHeight,
            [s, c] = Le(n),
            u = { start: '0%', center: '50%', end: '100%' }[c],
            d = (o.arrow?.x ?? 0) + l / 2,
            f = (o.arrow?.y ?? 0) + a / 2;
          let p = '',
            h = '';
          return (
            'bottom' === s
              ? ((p = i ? u : `${d}px`), (h = -a + 'px'))
              : 'top' === s
                ? ((p = i ? u : `${d}px`), (h = `${r.floating.height + a}px`))
                : 'right' === s
                  ? ((p = -a + 'px'), (h = i ? u : `${f}px`))
                  : 'left' === s &&
                    ((p = `${r.floating.width + a}px`), (h = i ? u : `${f}px`)),
            { data: { x: p, y: h } }
          );
        },
      });
      function Le(e) {
        const [t, n = 'center'] = e.split('-');
        return [t, n];
      }
      var Ne = Se,
        Me = Ce,
        Ie = Ae,
        Fe = Ee,
        Ve = r.forwardRef((e, t) => {
          const { container: n, ...i } = e,
            [l, a] = r.useState(!1);
          (0, me.b)(() => a(!0), []);
          const s = n || (l && globalThis?.document?.body);
          return s
            ? o.createPortal((0, d.jsx)(de.div, { ...i, ref: t }), s)
            : null;
        });
      Ve.displayName = 'Portal';
      var He = n(77342),
        We = n(57898),
        Be = r.forwardRef((e, t) =>
          (0, d.jsx)(de.span, {
            ...e,
            ref: t,
            style: {
              position: 'absolute',
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              wordWrap: 'normal',
              ...e.style,
            },
          }),
        );
      Be.displayName = 'VisuallyHidden';
      var Ke = n(23541),
        ze = n(71930),
        $e = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
        qe = [' ', 'Enter'],
        Ze = 'Select',
        [Je, Ue, Qe] = (function (e) {
          const t = e + 'CollectionProvider',
            [n, o] = (0, a.b)(t),
            [i, l] = n(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            s = (e) => {
              const { scope: t, children: n } = e,
                o = r.useRef(null),
                l = r.useRef(new Map()).current;
              return (0, d.jsx)(i, {
                scope: t,
                itemMap: l,
                collectionRef: o,
                children: n,
              });
            };
          s.displayName = t;
          const c = e + 'CollectionSlot',
            p = r.forwardRef((e, t) => {
              const { scope: n, children: r } = e,
                o = u(t, l(c, n).collectionRef);
              return (0, d.jsx)(f, { ref: o, children: r });
            });
          p.displayName = c;
          const h = e + 'CollectionItemSlot',
            m = 'data-radix-collection-item',
            g = r.forwardRef((e, t) => {
              const { scope: n, children: o, ...i } = e,
                a = r.useRef(null),
                s = u(t, a),
                c = l(h, n);
              return (
                r.useEffect(
                  () => (
                    c.itemMap.set(a, { ref: a, ...i }),
                    () => {
                      c.itemMap.delete(a);
                    }
                  ),
                ),
                (0, d.jsx)(f, { [m]: '', ref: s, children: o })
              );
            });
          return (
            (g.displayName = h),
            [
              { Provider: s, Slot: p, ItemSlot: g },
              function (t) {
                const n = l(e + 'CollectionConsumer', t);
                return r.useCallback(() => {
                  const e = n.collectionRef.current;
                  if (!e) return [];
                  const t = Array.from(e.querySelectorAll(`[${m}]`));
                  return Array.from(n.itemMap.values()).sort(
                    (e, n) =>
                      t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
                  );
                }, [n.collectionRef, n.itemMap]);
              },
              o,
            ]
          );
        })(Ze),
        [Xe, Ye] = (0, a.b)(Ze, [Qe, ve]),
        Ge = ve(),
        [et, tt] = Xe(Ze),
        [nt, rt] = Xe(Ze),
        ot = (e) => {
          const {
              __scopeSelect: t,
              children: n,
              open: o,
              defaultOpen: i,
              onOpenChange: l,
              value: a,
              defaultValue: s,
              onValueChange: c,
              dir: u,
              name: f,
              autoComplete: p,
              disabled: h,
              required: m,
              form: g,
            } = e,
            w = Ge(t),
            [v, x] = r.useState(null),
            [S, R] = r.useState(null),
            [C, P] = r.useState(!1),
            k = (0, y.gm)(u),
            [j = !1, A] = (0, He.T)({ prop: o, defaultProp: i, onChange: l }),
            [T, D] = (0, He.T)({ prop: a, defaultProp: s, onChange: c }),
            E = r.useRef(null),
            O = !v || g || !!v.closest('form'),
            [_, L] = r.useState(new Set()),
            N = Array.from(_)
              .map((e) => e.props.value)
              .join(';');
          return (0, d.jsx)(Ne, {
            ...w,
            children: (0, d.jsxs)(et, {
              required: m,
              scope: t,
              trigger: v,
              onTriggerChange: x,
              valueNode: S,
              onValueNodeChange: R,
              valueNodeHasChildren: C,
              onValueNodeHasChildrenChange: P,
              contentId: (0, b.M)(),
              value: T,
              onValueChange: D,
              open: j,
              onOpenChange: A,
              dir: k,
              triggerPointerDownPosRef: E,
              disabled: h,
              children: [
                (0, d.jsx)(Je.Provider, {
                  scope: t,
                  children: (0, d.jsx)(nt, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: r.useCallback((e) => {
                      L((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: r.useCallback((e) => {
                      L((t) => {
                        const n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                    children: n,
                  }),
                }),
                O
                  ? (0, d.jsxs)(
                      qt,
                      {
                        'aria-hidden': !0,
                        required: m,
                        tabIndex: -1,
                        name: f,
                        autoComplete: p,
                        value: T,
                        onChange: (e) => D(e.target.value),
                        disabled: h,
                        form: g,
                        children: [
                          void 0 === T
                            ? (0, d.jsx)('option', { value: '' })
                            : null,
                          Array.from(_),
                        ],
                      },
                      N,
                    )
                  : null,
              ],
            }),
          });
        };
      ot.displayName = Ze;
      var it = 'SelectTrigger',
        lt = r.forwardRef((e, t) => {
          const { __scopeSelect: n, disabled: o = !1, ...i } = e,
            a = Ge(n),
            s = tt(it, n),
            c = s.disabled || o,
            f = u(t, s.onTriggerChange),
            p = Ue(n),
            h = r.useRef('touch'),
            [m, g, y] = Zt((e) => {
              const t = p().filter((e) => !e.disabled),
                n = t.find((e) => e.value === s.value),
                r = Jt(t, e, n);
              void 0 !== r && s.onValueChange(r.value);
            }),
            w = (e) => {
              c || (s.onOpenChange(!0), y()),
                e &&
                  (s.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, d.jsx)(Me, {
            asChild: !0,
            ...a,
            children: (0, d.jsx)(de.button, {
              type: 'button',
              role: 'combobox',
              'aria-controls': s.contentId,
              'aria-expanded': s.open,
              'aria-required': s.required,
              'aria-autocomplete': 'none',
              dir: s.dir,
              'data-state': s.open ? 'open' : 'closed',
              disabled: c,
              'data-disabled': c ? '' : void 0,
              'data-placeholder': $t(s.value) ? '' : void 0,
              ...i,
              ref: f,
              onClick: l(i.onClick, (e) => {
                e.currentTarget.focus(), 'mouse' !== h.current && w(e);
              }),
              onPointerDown: l(i.onPointerDown, (e) => {
                h.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    'mouse' === e.pointerType &&
                    (w(e), e.preventDefault());
              }),
              onKeyDown: l(i.onKeyDown, (e) => {
                const t = '' !== m.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  g(e.key),
                  (t && ' ' === e.key) ||
                    ($e.includes(e.key) && (w(), e.preventDefault()));
              }),
            }),
          });
        });
      lt.displayName = it;
      var at = 'SelectValue',
        st = r.forwardRef((e, t) => {
          const {
              __scopeSelect: n,
              className: r,
              style: o,
              children: i,
              placeholder: l = '',
              ...a
            } = e,
            s = tt(at, n),
            { onValueNodeHasChildrenChange: c } = s,
            f = void 0 !== i,
            p = u(t, s.onValueNodeChange);
          return (
            (0, me.b)(() => {
              c(f);
            }, [c, f]),
            (0, d.jsx)(de.span, {
              ...a,
              ref: p,
              style: { pointerEvents: 'none' },
              children: $t(s.value)
                ? (0, d.jsx)(d.Fragment, { children: l })
                : i,
            })
          );
        });
      st.displayName = at;
      var ct = r.forwardRef((e, t) => {
        const { __scopeSelect: n, children: r, ...o } = e;
        return (0, d.jsx)(de.span, {
          'aria-hidden': !0,
          ...o,
          ref: t,
          children: r || '▼',
        });
      });
      ct.displayName = 'SelectIcon';
      var ut = (e) => (0, d.jsx)(Ve, { asChild: !0, ...e });
      ut.displayName = 'SelectPortal';
      var dt = 'SelectContent',
        ft = r.forwardRef((e, t) => {
          const n = tt(dt, e.__scopeSelect),
            [i, l] = r.useState();
          if (
            ((0, me.b)(() => {
              l(new DocumentFragment());
            }, []),
            !n.open)
          ) {
            const t = i;
            return t
              ? o.createPortal(
                  (0, d.jsx)(ht, {
                    scope: e.__scopeSelect,
                    children: (0, d.jsx)(Je.Slot, {
                      scope: e.__scopeSelect,
                      children: (0, d.jsx)('div', { children: e.children }),
                    }),
                  }),
                  t,
                )
              : null;
          }
          return (0, d.jsx)(gt, { ...e, ref: t });
        });
      ft.displayName = dt;
      var pt = 10,
        [ht, mt] = Xe(dt),
        gt = r.forwardRef((e, t) => {
          const {
              __scopeSelect: n,
              position: o = 'item-aligned',
              onCloseAutoFocus: i,
              onEscapeKeyDown: a,
              onPointerDownOutside: s,
              side: c,
              sideOffset: p,
              align: h,
              alignOffset: m,
              arrowPadding: g,
              collisionBoundary: y,
              collisionPadding: b,
              sticky: S,
              hideWhenDetached: R,
              avoidCollisions: C,
              ...P
            } = e,
            k = tt(dt, n),
            [j, A] = r.useState(null),
            [T, D] = r.useState(null),
            E = u(t, (e) => A(e)),
            [O, _] = r.useState(null),
            [L, N] = r.useState(null),
            M = Ue(n),
            [I, F] = r.useState(!1),
            V = r.useRef(!1);
          r.useEffect(() => {
            if (j) return (0, Ke.Ry)(j);
          }, [j]),
            (0, v.EW)();
          const H = r.useCallback(
              (e) => {
                const [t, ...n] = M().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (const n of e) {
                  if (n === o) return;
                  if (
                    (n?.scrollIntoView({ block: 'nearest' }),
                    n === t && T && (T.scrollTop = 0),
                    n === r && T && (T.scrollTop = T.scrollHeight),
                    n?.focus(),
                    document.activeElement !== o)
                  )
                    return;
                }
              },
              [M, T],
            ),
            W = r.useCallback(() => H([O, j]), [H, O, j]);
          r.useEffect(() => {
            I && W();
          }, [I, W]);
          const { onOpenChange: B, triggerPointerDownPosRef: K } = k;
          r.useEffect(() => {
            if (j) {
              let e = { x: 0, y: 0 };
              const t = (t) => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (K.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (K.current?.y ?? 0)),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : j.contains(n.target) || B(!1),
                    document.removeEventListener('pointermove', t),
                    (K.current = null);
                };
              return (
                null !== K.current &&
                  (document.addEventListener('pointermove', t),
                  document.addEventListener('pointerup', n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener('pointermove', t),
                    document.removeEventListener('pointerup', n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [j, B, K]),
            r.useEffect(() => {
              const e = () => B(!1);
              return (
                window.addEventListener('blur', e),
                window.addEventListener('resize', e),
                () => {
                  window.removeEventListener('blur', e),
                    window.removeEventListener('resize', e);
                }
              );
            }, [B]);
          const [z, $] = Zt((e) => {
              const t = M().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = Jt(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            q = r.useCallback(
              (e, t, n) => {
                const r = !V.current && !n;
                ((void 0 !== k.value && k.value === t) || r) &&
                  (_(e), r && (V.current = !0));
              },
              [k.value],
            ),
            Z = r.useCallback(() => j?.focus(), [j]),
            J = r.useCallback(
              (e, t, n) => {
                const r = !V.current && !n;
                ((void 0 !== k.value && k.value === t) || r) && N(e);
              },
              [k.value],
            ),
            U = 'popper' === o ? wt : yt,
            Q =
              U === wt
                ? {
                    side: c,
                    sideOffset: p,
                    align: h,
                    alignOffset: m,
                    arrowPadding: g,
                    collisionBoundary: y,
                    collisionPadding: b,
                    sticky: S,
                    hideWhenDetached: R,
                    avoidCollisions: C,
                  }
                : {};
          return (0, d.jsx)(ht, {
            scope: n,
            content: j,
            viewport: T,
            onViewportChange: D,
            itemRefCallback: q,
            selectedItem: O,
            onItemLeave: Z,
            itemTextRefCallback: J,
            focusSelectedItem: W,
            selectedItemText: L,
            position: o,
            isPositioned: I,
            searchRef: z,
            children: (0, d.jsx)(ze.Z, {
              as: f,
              allowPinchZoom: !0,
              children: (0, d.jsx)(x.M, {
                asChild: !0,
                trapped: k.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: l(i, (e) => {
                  k.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
                }),
                children: (0, d.jsx)(w.XB, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => k.onOpenChange(!1),
                  children: (0, d.jsx)(U, {
                    role: 'listbox',
                    id: k.contentId,
                    'data-state': k.open ? 'open' : 'closed',
                    dir: k.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...P,
                    ...Q,
                    onPlaced: () => F(!0),
                    ref: E,
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      outline: 'none',
                      ...P.style,
                    },
                    onKeyDown: l(P.onKeyDown, (e) => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ('Tab' === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || $(e.key),
                        ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key))
                      ) {
                        let t = M()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (['ArrowUp', 'End'].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ['ArrowUp', 'ArrowDown'].includes(e.key))
                        ) {
                          const n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1);
                        }
                        setTimeout(() => H(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      gt.displayName = 'SelectContentImpl';
      var yt = r.forwardRef((e, t) => {
        const { __scopeSelect: n, onPlaced: o, ...l } = e,
          a = tt(dt, n),
          s = mt(dt, n),
          [c, f] = r.useState(null),
          [p, h] = r.useState(null),
          m = u(t, (e) => h(e)),
          g = Ue(n),
          y = r.useRef(!1),
          w = r.useRef(!0),
          {
            viewport: v,
            selectedItem: x,
            selectedItemText: b,
            focusSelectedItem: S,
          } = s,
          R = r.useCallback(() => {
            if (a.trigger && a.valueNode && c && p && v && x && b) {
              const e = a.trigger.getBoundingClientRect(),
                t = p.getBoundingClientRect(),
                n = a.valueNode.getBoundingClientRect(),
                r = b.getBoundingClientRect();
              if ('rtl' !== a.dir) {
                const o = r.left - t.left,
                  l = n.left - o,
                  a = e.left - l,
                  s = e.width + a,
                  u = Math.max(s, t.width),
                  d = window.innerWidth - pt,
                  f = (0, i.u)(l, [pt, Math.max(pt, d - u)]);
                (c.style.minWidth = s + 'px'), (c.style.left = f + 'px');
              } else {
                const o = t.right - r.right,
                  l = window.innerWidth - n.right - o,
                  a = window.innerWidth - e.right - l,
                  s = e.width + a,
                  u = Math.max(s, t.width),
                  d = window.innerWidth - pt,
                  f = (0, i.u)(l, [pt, Math.max(pt, d - u)]);
                (c.style.minWidth = s + 'px'), (c.style.right = f + 'px');
              }
              const l = g(),
                s = window.innerHeight - 2 * pt,
                u = v.scrollHeight,
                d = window.getComputedStyle(p),
                f = parseInt(d.borderTopWidth, 10),
                h = parseInt(d.paddingTop, 10),
                m = parseInt(d.borderBottomWidth, 10),
                w = f + h + u + parseInt(d.paddingBottom, 10) + m,
                S = Math.min(5 * x.offsetHeight, w),
                R = window.getComputedStyle(v),
                C = parseInt(R.paddingTop, 10),
                P = parseInt(R.paddingBottom, 10),
                k = e.top + e.height / 2 - pt,
                j = s - k,
                A = x.offsetHeight / 2,
                T = f + h + (x.offsetTop + A),
                D = w - T;
              if (T <= k) {
                const e = l.length > 0 && x === l[l.length - 1].ref.current;
                c.style.bottom = '0px';
                const t = p.clientHeight - v.offsetTop - v.offsetHeight,
                  n = T + Math.max(j, A + (e ? P : 0) + t + m);
                c.style.height = n + 'px';
              } else {
                const e = l.length > 0 && x === l[0].ref.current;
                c.style.top = '0px';
                const t = Math.max(k, f + v.offsetTop + (e ? C : 0) + A) + D;
                (c.style.height = t + 'px'),
                  (v.scrollTop = T - k + v.offsetTop);
              }
              (c.style.margin = `${pt}px 0`),
                (c.style.minHeight = S + 'px'),
                (c.style.maxHeight = s + 'px'),
                o?.(),
                requestAnimationFrame(() => (y.current = !0));
            }
          }, [g, a.trigger, a.valueNode, c, p, v, x, b, a.dir, o]);
        (0, me.b)(() => R(), [R]);
        const [C, P] = r.useState();
        (0, me.b)(() => {
          p && P(window.getComputedStyle(p).zIndex);
        }, [p]);
        const k = r.useCallback(
          (e) => {
            e && !0 === w.current && (R(), S?.(), (w.current = !1));
          },
          [R, S],
        );
        return (0, d.jsx)(vt, {
          scope: n,
          contentWrapper: c,
          shouldExpandOnScrollRef: y,
          onScrollButtonChange: k,
          children: (0, d.jsx)('div', {
            ref: f,
            style: {
              display: 'flex',
              flexDirection: 'column',
              position: 'fixed',
              zIndex: C,
            },
            children: (0, d.jsx)(de.div, {
              ...l,
              ref: m,
              style: { boxSizing: 'border-box', maxHeight: '100%', ...l.style },
            }),
          }),
        });
      });
      yt.displayName = 'SelectItemAlignedPosition';
      var wt = r.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            align: r = 'start',
            collisionPadding: o = pt,
            ...i
          } = e,
          l = Ge(n);
        return (0, d.jsx)(Ie, {
          ...l,
          ...i,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: 'border-box',
            ...i.style,
            '--radix-select-content-transform-origin':
              'var(--radix-popper-transform-origin)',
            '--radix-select-content-available-width':
              'var(--radix-popper-available-width)',
            '--radix-select-content-available-height':
              'var(--radix-popper-available-height)',
            '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-select-trigger-height':
              'var(--radix-popper-anchor-height)',
          },
        });
      });
      wt.displayName = 'SelectPopperPosition';
      var [vt, xt] = Xe(dt, {}),
        bt = 'SelectViewport',
        St = r.forwardRef((e, t) => {
          const { __scopeSelect: n, nonce: o, ...i } = e,
            a = mt(bt, n),
            s = xt(bt, n),
            c = u(t, a.onViewportChange),
            f = r.useRef(0);
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)('style', {
                dangerouslySetInnerHTML: {
                  __html:
                    '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
                },
                nonce: o,
              }),
              (0, d.jsx)(Je.Slot, {
                scope: n,
                children: (0, d.jsx)(de.div, {
                  'data-radix-select-viewport': '',
                  role: 'presentation',
                  ...i,
                  ref: c,
                  style: {
                    position: 'relative',
                    flex: 1,
                    overflow: 'hidden auto',
                    ...i.style,
                  },
                  onScroll: l(i.onScroll, (e) => {
                    const t = e.currentTarget,
                      { contentWrapper: n, shouldExpandOnScrollRef: r } = s;
                    if (r?.current && n) {
                      const e = Math.abs(f.current - t.scrollTop);
                      if (e > 0) {
                        const r = window.innerHeight - 2 * pt,
                          o = parseFloat(n.style.minHeight),
                          i = parseFloat(n.style.height),
                          l = Math.max(o, i);
                        if (l < r) {
                          const o = l + e,
                            i = Math.min(r, o),
                            a = o - i;
                          (n.style.height = i + 'px'),
                            '0px' === n.style.bottom &&
                              ((t.scrollTop = a > 0 ? a : 0),
                              (n.style.justifyContent = 'flex-end'));
                        }
                      }
                    }
                    f.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      St.displayName = bt;
      var Rt = 'SelectGroup',
        [Ct, Pt] = Xe(Rt),
        kt = r.forwardRef((e, t) => {
          const { __scopeSelect: n, ...r } = e,
            o = (0, b.M)();
          return (0, d.jsx)(Ct, {
            scope: n,
            id: o,
            children: (0, d.jsx)(de.div, {
              role: 'group',
              'aria-labelledby': o,
              ...r,
              ref: t,
            }),
          });
        });
      kt.displayName = Rt;
      var jt = 'SelectLabel',
        At = r.forwardRef((e, t) => {
          const { __scopeSelect: n, ...r } = e,
            o = Pt(jt, n);
          return (0, d.jsx)(de.div, { id: o.id, ...r, ref: t });
        });
      At.displayName = jt;
      var Tt = 'SelectItem',
        [Dt, Et] = Xe(Tt),
        Ot = r.forwardRef((e, t) => {
          const {
              __scopeSelect: n,
              value: o,
              disabled: i = !1,
              textValue: a,
              ...s
            } = e,
            c = tt(Tt, n),
            f = mt(Tt, n),
            p = c.value === o,
            [h, m] = r.useState(a ?? ''),
            [g, y] = r.useState(!1),
            w = u(t, (e) => f.itemRefCallback?.(e, o, i)),
            v = (0, b.M)(),
            x = r.useRef('touch'),
            S = () => {
              i || (c.onValueChange(o), c.onOpenChange(!1));
            };
          if ('' === o)
            throw new Error(
              'A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.',
            );
          return (0, d.jsx)(Dt, {
            scope: n,
            value: o,
            disabled: i,
            textId: v,
            isSelected: p,
            onItemTextChange: r.useCallback((e) => {
              m((t) => t || (e?.textContent ?? '').trim());
            }, []),
            children: (0, d.jsx)(Je.ItemSlot, {
              scope: n,
              value: o,
              disabled: i,
              textValue: h,
              children: (0, d.jsx)(de.div, {
                role: 'option',
                'aria-labelledby': v,
                'data-highlighted': g ? '' : void 0,
                'aria-selected': p && g,
                'data-state': p ? 'checked' : 'unchecked',
                'aria-disabled': i || void 0,
                'data-disabled': i ? '' : void 0,
                tabIndex: i ? void 0 : -1,
                ...s,
                ref: w,
                onFocus: l(s.onFocus, () => y(!0)),
                onBlur: l(s.onBlur, () => y(!1)),
                onClick: l(s.onClick, () => {
                  'mouse' !== x.current && S();
                }),
                onPointerUp: l(s.onPointerUp, () => {
                  'mouse' === x.current && S();
                }),
                onPointerDown: l(s.onPointerDown, (e) => {
                  x.current = e.pointerType;
                }),
                onPointerMove: l(s.onPointerMove, (e) => {
                  (x.current = e.pointerType),
                    i
                      ? f.onItemLeave?.()
                      : 'mouse' === x.current &&
                        e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: l(s.onPointerLeave, (e) => {
                  e.currentTarget === document.activeElement &&
                    f.onItemLeave?.();
                }),
                onKeyDown: l(s.onKeyDown, (e) => {
                  ('' !== f.searchRef?.current && ' ' === e.key) ||
                    (qe.includes(e.key) && S(),
                    ' ' === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      Ot.displayName = Tt;
      var _t = 'SelectItemText',
        Lt = r.forwardRef((e, t) => {
          const { __scopeSelect: n, className: i, style: l, ...a } = e,
            s = tt(_t, n),
            c = mt(_t, n),
            f = Et(_t, n),
            p = rt(_t, n),
            [h, m] = r.useState(null),
            g = u(
              t,
              (e) => m(e),
              f.onItemTextChange,
              (e) => c.itemTextRefCallback?.(e, f.value, f.disabled),
            ),
            y = h?.textContent,
            w = r.useMemo(
              () =>
                (0, d.jsx)(
                  'option',
                  { value: f.value, disabled: f.disabled, children: y },
                  f.value,
                ),
              [f.disabled, f.value, y],
            ),
            { onNativeOptionAdd: v, onNativeOptionRemove: x } = p;
          return (
            (0, me.b)(() => (v(w), () => x(w)), [v, x, w]),
            (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsx)(de.span, { id: f.textId, ...a, ref: g }),
                f.isSelected && s.valueNode && !s.valueNodeHasChildren
                  ? o.createPortal(a.children, s.valueNode)
                  : null,
              ],
            })
          );
        });
      Lt.displayName = _t;
      var Nt = 'SelectItemIndicator',
        Mt = r.forwardRef((e, t) => {
          const { __scopeSelect: n, ...r } = e;
          return Et(Nt, n).isSelected
            ? (0, d.jsx)(de.span, { 'aria-hidden': !0, ...r, ref: t })
            : null;
        });
      Mt.displayName = Nt;
      var It = 'SelectScrollUpButton',
        Ft = r.forwardRef((e, t) => {
          const n = mt(It, e.__scopeSelect),
            o = xt(It, e.__scopeSelect),
            [i, l] = r.useState(!1),
            a = u(t, o.onScrollButtonChange);
          return (
            (0, me.b)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                  const e = t.scrollTop > 0;
                  l(e);
                };
                const t = n.viewport;
                return (
                  e(),
                  t.addEventListener('scroll', e),
                  () => t.removeEventListener('scroll', e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            i
              ? (0, d.jsx)(Wt, {
                  ...e,
                  ref: a,
                  onAutoScroll: () => {
                    const { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      Ft.displayName = It;
      var Vt = 'SelectScrollDownButton',
        Ht = r.forwardRef((e, t) => {
          const n = mt(Vt, e.__scopeSelect),
            o = xt(Vt, e.__scopeSelect),
            [i, l] = r.useState(!1),
            a = u(t, o.onScrollButtonChange);
          return (
            (0, me.b)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                  const e = t.scrollHeight - t.clientHeight,
                    n = Math.ceil(t.scrollTop) < e;
                  l(n);
                };
                const t = n.viewport;
                return (
                  e(),
                  t.addEventListener('scroll', e),
                  () => t.removeEventListener('scroll', e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            i
              ? (0, d.jsx)(Wt, {
                  ...e,
                  ref: a,
                  onAutoScroll: () => {
                    const { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        });
      Ht.displayName = Vt;
      var Wt = r.forwardRef((e, t) => {
          const { __scopeSelect: n, onAutoScroll: o, ...i } = e,
            a = mt('SelectScrollButton', n),
            s = r.useRef(null),
            c = Ue(n),
            u = r.useCallback(() => {
              null !== s.current &&
                (window.clearInterval(s.current), (s.current = null));
            }, []);
          return (
            r.useEffect(() => () => u(), [u]),
            (0, me.b)(() => {
              const e = c().find(
                (e) => e.ref.current === document.activeElement,
              );
              e?.ref.current?.scrollIntoView({ block: 'nearest' });
            }, [c]),
            (0, d.jsx)(de.div, {
              'aria-hidden': !0,
              ...i,
              ref: t,
              style: { flexShrink: 0, ...i.style },
              onPointerDown: l(i.onPointerDown, () => {
                null === s.current && (s.current = window.setInterval(o, 50));
              }),
              onPointerMove: l(i.onPointerMove, () => {
                a.onItemLeave?.(),
                  null === s.current && (s.current = window.setInterval(o, 50));
              }),
              onPointerLeave: l(i.onPointerLeave, () => {
                u();
              }),
            })
          );
        }),
        Bt = r.forwardRef((e, t) => {
          const { __scopeSelect: n, ...r } = e;
          return (0, d.jsx)(de.div, { 'aria-hidden': !0, ...r, ref: t });
        });
      Bt.displayName = 'SelectSeparator';
      var Kt = 'SelectArrow',
        zt = r.forwardRef((e, t) => {
          const { __scopeSelect: n, ...r } = e,
            o = Ge(n),
            i = tt(Kt, n),
            l = mt(Kt, n);
          return i.open && 'popper' === l.position
            ? (0, d.jsx)(Fe, { ...o, ...r, ref: t })
            : null;
        });
      function $t(e) {
        return '' === e || void 0 === e;
      }
      zt.displayName = Kt;
      var qt = r.forwardRef((e, t) => {
        const { value: n, ...o } = e,
          i = r.useRef(null),
          l = u(t, i),
          a = (0, We.D)(n);
        return (
          r.useEffect(() => {
            const e = i.current,
              t = window.HTMLSelectElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, 'value').set;
            if (a !== n && r) {
              const t = new Event('change', { bubbles: !0 });
              r.call(e, n), e.dispatchEvent(t);
            }
          }, [a, n]),
          (0, d.jsx)(Be, {
            asChild: !0,
            children: (0, d.jsx)('select', { ...o, ref: l, defaultValue: n }),
          })
        );
      });
      function Zt(e) {
        const t = (0, he.W)(e),
          n = r.useRef(''),
          o = r.useRef(0),
          i = r.useCallback(
            (e) => {
              const r = n.current + e;
              t(r),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(o.current),
                    '' !== t &&
                      (o.current = window.setTimeout(() => e(''), 1e3));
                })(r);
            },
            [t],
          ),
          l = r.useCallback(() => {
            (n.current = ''), window.clearTimeout(o.current);
          }, []);
        return (
          r.useEffect(() => () => window.clearTimeout(o.current), []), [n, i, l]
        );
      }
      function Jt(e, t, n) {
        const r =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i =
          ((l = e),
          (a = Math.max(o, 0)),
          l.map((e, t) => l[(a + t) % l.length]));
        var l, a;
        1 === r.length && (i = i.filter((e) => e !== n));
        const s = i.find((e) =>
          e.textValue.toLowerCase().startsWith(r.toLowerCase()),
        );
        return s !== n ? s : void 0;
      }
      qt.displayName = 'BubbleSelect';
      var Ut = ot,
        Qt = lt,
        Xt = st,
        Yt = ct,
        Gt = ut,
        en = ft,
        tn = St,
        nn = kt,
        rn = At,
        on = Ot,
        ln = Lt,
        an = Mt,
        sn = Ft,
        cn = Ht,
        un = Bt;
    },
    57898: function (e, t, n) {
      n.d(t, {
        D: function () {
          return o;
        },
      });
      var r = n(62435);
      function o(e) {
        const t = r.useRef({ value: e, previous: e });
        return r.useMemo(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e],
        );
      }
    },
  },
]);
//# sourceMappingURL=2486.5b270896.async.js.map
