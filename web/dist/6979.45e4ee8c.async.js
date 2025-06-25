/*! For license information please see 6979.45e4ee8c.async.js.LICENSE.txt */
'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [6979],
  {
    50780: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('arrow-down-to-line', [
        ['path', { d: 'M12 17V3', key: '1cwfxf' }],
        ['path', { d: 'm6 11 6 6 6-6', key: '12ii2o' }],
        ['path', { d: 'M19 21H5', key: '150jfl' }],
      ]);
    },
    28250: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('brush-cleaning', [
        ['path', { d: 'm16 22-1-4', key: '1ow2iv' }],
        [
          'path',
          {
            d: 'M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1',
            key: 'iw8jdu',
          },
        ],
        [
          'path',
          {
            d: 'M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z',
            key: '1soew8',
          },
        ],
        ['path', { d: 'm8 22 1-4', key: 's3unb' }],
      ]);
    },
    98814: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('chevron-left', [
        ['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }],
      ]);
    },
    9404: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('ellipsis', [
        ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
        ['circle', { cx: '19', cy: '12', r: '1', key: '1wjl8i' }],
        ['circle', { cx: '5', cy: '12', r: '1', key: '1pcz8c' }],
      ]);
    },
    9141: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('folder-pen', [
        [
          'path',
          {
            d: 'M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5',
            key: 'a8xqs0',
          },
        ],
        [
          'path',
          {
            d: 'M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z',
            key: '1saktj',
          },
        ],
      ]);
    },
    38573: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return it;
        },
        fC: function () {
          return rt;
        },
        xz: function () {
          return ot;
        },
      });
      var r = n(62435),
        o = n.t(r, 2);
      function i(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      var s = n(86074);
      function a(e, t = []) {
        let n = [];
        const o = () => {
          const t = n.map((e) => r.createContext(e));
          return function (n) {
            const o = n?.[e] || t;
            return r.useMemo(
              () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
              [n, o],
            );
          };
        };
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              const i = r.createContext(o),
                a = n.length;
              n = [...n, o];
              const l = (t) => {
                const { scope: n, children: o, ...l } = t,
                  c = n?.[e]?.[a] || i,
                  u = r.useMemo(() => l, Object.values(l));
                return (0, s.jsx)(c.Provider, { value: u, children: o });
              };
              return (
                (l.displayName = t + 'Provider'),
                [
                  l,
                  function (n, s) {
                    const l = s?.[e]?.[a] || i,
                      c = r.useContext(l);
                    if (c) return c;
                    if (void 0 !== o) return o;
                    throw new Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            l(o, ...t),
          ]
        );
      }
      function l(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
          return function (e) {
            const o = n.reduce(
              (t, { useScope: n, scopeName: r }) => ({
                ...t,
                ...n(e)[`__scope${r}`],
              }),
              {},
            );
            return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
          };
        };
        return (n.scopeName = t.scopeName), n;
      }
      var c = globalThis?.document ? r.useLayoutEffect : () => {},
        u = o[' useInsertionEffect '.trim().toString()] || c;
      function f({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: o,
      }) {
        const [i, s, a] = (function ({ defaultProp: e, onChange: t }) {
            const [n, o] = r.useState(e),
              i = r.useRef(n),
              s = r.useRef(t);
            return (
              u(() => {
                s.current = t;
              }, [t]),
              r.useEffect(() => {
                i.current !== n && (s.current?.(n), (i.current = n));
              }, [n, i]),
              [n, o, s]
            );
          })({ defaultProp: t, onChange: n }),
          l = void 0 !== e,
          c = l ? e : i;
        {
          const t = r.useRef(void 0 !== e);
          r.useEffect(() => {
            const e = t.current;
            if (e !== l) {
              const t = e ? 'controlled' : 'uncontrolled',
                n = l ? 'controlled' : 'uncontrolled';
              console.warn(
                `${o} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
              );
            }
            t.current = l;
          }, [l, o]);
        }
        const f = r.useCallback(
          (t) => {
            if (l) {
              const n = (function (e) {
                return 'function' == typeof e;
              })(t)
                ? t(e)
                : t;
              n !== e && a.current?.(n);
            } else s(t);
          },
          [l, e, s, a],
        );
        return [c, f];
      }
      Symbol('RADIX:SYNC_STATE');
      function d(e, t) {
        if ('function' == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function p(...e) {
        return (t) => {
          let n = !1;
          const r = e.map((e) => {
            const r = d(e, t);
            return n || 'function' != typeof r || (n = !0), r;
          });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                const n = r[t];
                'function' == typeof n ? n() : d(e[t], null);
              }
            };
        };
      }
      function h(...e) {
        return r.useCallback(p(...e), e);
      }
      var m = n(71347);
      function g(e, t, n) {
        let { reference: r, floating: o } = e;
        const i = (0, m.Qq)(t),
          s = (0, m.Wh)(t),
          a = (0, m.I4)(s),
          l = (0, m.k3)(t),
          c = 'y' === i,
          u = r.x + r.width / 2 - o.width / 2,
          f = r.y + r.height / 2 - o.height / 2,
          d = r[a] / 2 - o[a] / 2;
        let p;
        switch (l) {
          case 'top':
            p = { x: u, y: r.y - o.height };
            break;
          case 'bottom':
            p = { x: u, y: r.y + r.height };
            break;
          case 'right':
            p = { x: r.x + r.width, y: f };
            break;
          case 'left':
            p = { x: r.x - o.width, y: f };
            break;
          default:
            p = { x: r.x, y: r.y };
        }
        switch ((0, m.hp)(t)) {
          case 'start':
            p[s] -= d * (n && c ? -1 : 1);
            break;
          case 'end':
            p[s] += d * (n && c ? -1 : 1);
        }
        return p;
      }
      async function y(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
            x: r,
            y: o,
            platform: i,
            rects: s,
            elements: a,
            strategy: l,
          } = e,
          {
            boundary: c = 'clippingAncestors',
            rootBoundary: u = 'viewport',
            elementContext: f = 'floating',
            altBoundary: d = !1,
            padding: p = 0,
          } = (0, m.ku)(t, e),
          h = (0, m.yd)(p),
          g = a[d ? ('floating' === f ? 'reference' : 'floating') : f],
          y = (0, m.JB)(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: c,
              rootBoundary: u,
              strategy: l,
            }),
          ),
          w =
            'floating' === f
              ? {
                  x: r,
                  y: o,
                  width: s.floating.width,
                  height: s.floating.height,
                }
              : s.reference,
          x = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          v = ((await (null == i.isElement ? void 0 : i.isElement(x))) &&
            (await (null == i.getScale ? void 0 : i.getScale(x)))) || {
            x: 1,
            y: 1,
          },
          b = (0, m.JB)(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: w,
                  offsetParent: x,
                  strategy: l,
                })
              : w,
          );
        return {
          top: (y.top - b.top + h.top) / v.y,
          bottom: (b.bottom - y.bottom + h.bottom) / v.y,
          left: (y.left - b.left + h.left) / v.x,
          right: (b.right - y.right + h.right) / v.x,
        };
      }
      function w(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function x(e) {
        return m.mA.some((t) => e[t] >= 0);
      }
      var v = n(37317);
      function b(e) {
        const t = (0, v.Dx)(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = (0, v.Re)(e),
          i = o ? e.offsetWidth : n,
          s = o ? e.offsetHeight : r,
          a = (0, m.NM)(n) !== i || (0, m.NM)(r) !== s;
        return a && ((n = i), (r = s)), { width: n, height: r, $: a };
      }
      function R(e) {
        return (0, v.kK)(e) ? e : e.contextElement;
      }
      function P(e) {
        const t = R(e);
        if (!(0, v.Re)(t)) return (0, m.ze)(1);
        const n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = b(t);
        let s = (i ? (0, m.NM)(n.width) : n.width) / r,
          a = (i ? (0, m.NM)(n.height) : n.height) / o;
        return (
          (s && Number.isFinite(s)) || (s = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: s, y: a }
        );
      }
      const C = (0, m.ze)(0);
      function O(e) {
        const t = (0, v.Jj)(e);
        return (0, v.Pf)() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : C;
      }
      function A(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = R(e);
        let s = (0, m.ze)(1);
        t && (r ? (0, v.kK)(r) && (s = P(r)) : (s = P(e)));
        const a = (function (e, t, n) {
          return (
            void 0 === t && (t = !1), !(!n || (t && n !== (0, v.Jj)(e))) && t
          );
        })(i, n, r)
          ? O(i)
          : (0, m.ze)(0);
        let l = (o.left + a.x) / s.x,
          c = (o.top + a.y) / s.y,
          u = o.width / s.x,
          f = o.height / s.y;
        if (i) {
          const e = (0, v.Jj)(i),
            t = r && (0, v.kK)(r) ? (0, v.Jj)(r) : r;
          let n = e,
            o = (0, v.wK)(n);
          for (; o && r && t !== n; ) {
            const e = P(o),
              t = o.getBoundingClientRect(),
              r = (0, v.Dx)(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              s = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (l *= e.x),
              (c *= e.y),
              (u *= e.x),
              (f *= e.y),
              (l += i),
              (c += s),
              (n = (0, v.Jj)(o)),
              (o = (0, v.wK)(n));
          }
        }
        return (0, m.JB)({ width: u, height: f, x: l, y: c });
      }
      function k(e, t) {
        const n = (0, v.Lw)(e).scrollLeft;
        return t ? t.left + n : A((0, v.tF)(e)).left + n;
      }
      function E(e, t, n) {
        void 0 === n && (n = !1);
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : k(e, r)),
          y: r.top + t.scrollTop,
        };
      }
      function S(e, t, n) {
        let r;
        if ('viewport' === t)
          r = (function (e, t) {
            const n = (0, v.Jj)(e),
              r = (0, v.tF)(e),
              o = n.visualViewport;
            let i = r.clientWidth,
              s = r.clientHeight,
              a = 0,
              l = 0;
            if (o) {
              (i = o.width), (s = o.height);
              const e = (0, v.Pf)();
              (!e || (e && 'fixed' === t)) &&
                ((a = o.offsetLeft), (l = o.offsetTop));
            }
            return { width: i, height: s, x: a, y: l };
          })(e, n);
        else if ('document' === t)
          r = (function (e) {
            const t = (0, v.tF)(e),
              n = (0, v.Lw)(e),
              r = e.ownerDocument.body,
              o = (0, m.Fp)(
                t.scrollWidth,
                t.clientWidth,
                r.scrollWidth,
                r.clientWidth,
              ),
              i = (0, m.Fp)(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight,
              );
            let s = -n.scrollLeft + k(e);
            const a = -n.scrollTop;
            return (
              'rtl' === (0, v.Dx)(r).direction &&
                (s += (0, m.Fp)(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: s, y: a }
            );
          })((0, v.tF)(e));
        else if ((0, v.kK)(t))
          r = (function (e, t) {
            const n = A(e, !0, 'fixed' === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = (0, v.Re)(e) ? P(e) : (0, m.ze)(1);
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
        return (0, m.JB)(r);
      }
      function T(e, t) {
        const n = (0, v.Ow)(e);
        return (
          !(n === t || !(0, v.kK)(n) || (0, v.Py)(n)) &&
          ('fixed' === (0, v.Dx)(n).position || T(n, t))
        );
      }
      function D(e, t, n) {
        const r = (0, v.Re)(t),
          o = (0, v.tF)(t),
          i = 'fixed' === n,
          s = A(e, !0, i, t);
        let a = { scrollLeft: 0, scrollTop: 0 };
        const l = (0, m.ze)(0);
        if (r || (!r && !i))
          if (
            (('body' !== (0, v.wk)(t) || (0, v.ao)(o)) && (a = (0, v.Lw)(t)), r)
          ) {
            const e = A(t, !0, i, t);
            (l.x = e.x + t.clientLeft), (l.y = e.y + t.clientTop);
          } else o && (l.x = k(o));
        const c = !o || r || i ? (0, m.ze)(0) : E(o, a);
        return {
          x: s.left + a.scrollLeft - l.x - c.x,
          y: s.top + a.scrollTop - l.y - c.y,
          width: s.width,
          height: s.height,
        };
      }
      function N(e) {
        return 'static' === (0, v.Dx)(e).position;
      }
      function F(e, t) {
        if (!(0, v.Re)(e) || 'fixed' === (0, v.Dx)(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return (0, v.tF)(e) === n && (n = n.ownerDocument.body), n;
      }
      function j(e, t) {
        const n = (0, v.Jj)(e);
        if ((0, v.tR)(e)) return n;
        if (!(0, v.Re)(e)) {
          let t = (0, v.Ow)(e);
          for (; t && !(0, v.Py)(t); ) {
            if ((0, v.kK)(t) && !N(t)) return t;
            t = (0, v.Ow)(t);
          }
          return n;
        }
        let r = F(e, t);
        for (; r && (0, v.Ze)(r) && N(r); ) r = F(r, t);
        return r && (0, v.Py)(r) && N(r) && !(0, v.hT)(r)
          ? n
          : r || (0, v.gQ)(e) || n;
      }
      const L = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
          const i = 'fixed' === o,
            s = (0, v.tF)(r),
            a = !!t && (0, v.tR)(t.floating);
          if (r === s || (a && i)) return n;
          let l = { scrollLeft: 0, scrollTop: 0 },
            c = (0, m.ze)(1);
          const u = (0, m.ze)(0),
            f = (0, v.Re)(r);
          if (
            (f || (!f && !i)) &&
            (('body' !== (0, v.wk)(r) || (0, v.ao)(s)) && (l = (0, v.Lw)(r)),
            (0, v.Re)(r))
          ) {
            const e = A(r);
            (c = P(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop);
          }
          const d = !s || f || i ? (0, m.ze)(0) : E(s, l, !0);
          return {
            width: n.width * c.x,
            height: n.height * c.y,
            x: n.x * c.x - l.scrollLeft * c.x + u.x + d.x,
            y: n.y * c.y - l.scrollTop * c.y + u.y + d.y,
          };
        },
        getDocumentElement: v.tF,
        getClippingRect: function (e) {
          let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
          const i = [
              ...('clippingAncestors' === n
                ? (0, v.tR)(t)
                  ? []
                  : (function (e, t) {
                      const n = t.get(e);
                      if (n) return n;
                      let r = (0, v.Kx)(e, [], !1).filter(
                          (e) => (0, v.kK)(e) && 'body' !== (0, v.wk)(e),
                        ),
                        o = null;
                      const i = 'fixed' === (0, v.Dx)(e).position;
                      let s = i ? (0, v.Ow)(e) : e;
                      for (; (0, v.kK)(s) && !(0, v.Py)(s); ) {
                        const t = (0, v.Dx)(s),
                          n = (0, v.hT)(s);
                        n || 'fixed' !== t.position || (o = null),
                          (
                            i
                              ? !n && !o
                              : (!n &&
                                  'static' === t.position &&
                                  o &&
                                  ['absolute', 'fixed'].includes(o.position)) ||
                                ((0, v.ao)(s) && !n && T(e, s))
                          )
                            ? (r = r.filter((e) => e !== s))
                            : (o = t),
                          (s = (0, v.Ow)(s));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                : [].concat(n)),
              r,
            ],
            s = i[0],
            a = i.reduce(
              (e, n) => {
                const r = S(t, n, o);
                return (
                  (e.top = (0, m.Fp)(r.top, e.top)),
                  (e.right = (0, m.VV)(r.right, e.right)),
                  (e.bottom = (0, m.VV)(r.bottom, e.bottom)),
                  (e.left = (0, m.Fp)(r.left, e.left)),
                  e
                );
              },
              S(t, s, o),
            );
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top,
          };
        },
        getOffsetParent: j,
        getElementRects: async function (e) {
          const t = this.getOffsetParent || j,
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
          const { width: t, height: n } = b(e);
          return { width: t, height: n };
        },
        getScale: P,
        isElement: v.kK,
        isRTL: function (e) {
          return 'rtl' === (0, v.Dx)(e).direction;
        },
      };
      function M(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      function _(e, t, n, r) {
        void 0 === r && (r = {});
        const {
            ancestorScroll: o = !0,
            ancestorResize: i = !0,
            elementResize: s = 'function' == typeof ResizeObserver,
            layoutShift: a = 'function' == typeof IntersectionObserver,
            animationFrame: l = !1,
          } = r,
          c = R(e),
          u = o || i ? [...(c ? (0, v.Kx)(c) : []), ...(0, v.Kx)(t)] : [];
        u.forEach((e) => {
          o && e.addEventListener('scroll', n, { passive: !0 }),
            i && e.addEventListener('resize', n);
        });
        const f =
          c && a
            ? (function (e, t) {
                let n,
                  r = null;
                const o = (0, v.tF)(e);
                function i() {
                  var e;
                  clearTimeout(n),
                    null == (e = r) || e.disconnect(),
                    (r = null);
                }
                return (
                  (function s(a, l) {
                    void 0 === a && (a = !1), void 0 === l && (l = 1), i();
                    const c = e.getBoundingClientRect(),
                      { left: u, top: f, width: d, height: p } = c;
                    if ((a || t(), !d || !p)) return;
                    const h = {
                      rootMargin:
                        -(0, m.GW)(f) +
                        'px ' +
                        -(0, m.GW)(o.clientWidth - (u + d)) +
                        'px ' +
                        -(0, m.GW)(o.clientHeight - (f + p)) +
                        'px ' +
                        -(0, m.GW)(u) +
                        'px',
                      threshold: (0, m.Fp)(0, (0, m.VV)(1, l)) || 1,
                    };
                    let g = !0;
                    function y(t) {
                      const r = t[0].intersectionRatio;
                      if (r !== l) {
                        if (!g) return s();
                        r
                          ? s(!1, r)
                          : (n = setTimeout(() => {
                              s(!1, 1e-7);
                            }, 1e3));
                      }
                      1 !== r || M(c, e.getBoundingClientRect()) || s(),
                        (g = !1);
                    }
                    try {
                      r = new IntersectionObserver(y, {
                        ...h,
                        root: o.ownerDocument,
                      });
                    } catch (e) {
                      r = new IntersectionObserver(y, h);
                    }
                    r.observe(e);
                  })(!0),
                  i
                );
              })(c, n)
            : null;
        let d,
          p = -1,
          h = null;
        s &&
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
          c && !l && h.observe(c),
          h.observe(t));
        let g = l ? A(e) : null;
        return (
          l &&
            (function t() {
              const r = A(e);
              g && !M(g, r) && n();
              (g = r), (d = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            var e;
            u.forEach((e) => {
              o && e.removeEventListener('scroll', n),
                i && e.removeEventListener('resize', n);
            }),
              null == f || f(),
              null == (e = h) || e.disconnect(),
              (h = null),
              l && cancelAnimationFrame(d);
          }
        );
      }
      const H = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: 'offset',
              options: e,
              async fn(t) {
                var n, r;
                const { x: o, y: i, placement: s, middlewareData: a } = t,
                  l = await (async function (e, t) {
                    const { placement: n, platform: r, elements: o } = e,
                      i = await (null == r.isRTL
                        ? void 0
                        : r.isRTL(o.floating)),
                      s = (0, m.k3)(n),
                      a = (0, m.hp)(n),
                      l = 'y' === (0, m.Qq)(n),
                      c = ['left', 'top'].includes(s) ? -1 : 1,
                      u = i && l ? -1 : 1,
                      f = (0, m.ku)(t, e);
                    let {
                      mainAxis: d,
                      crossAxis: p,
                      alignmentAxis: h,
                    } = 'number' == typeof f
                      ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
                      : {
                          mainAxis: f.mainAxis || 0,
                          crossAxis: f.crossAxis || 0,
                          alignmentAxis: f.alignmentAxis,
                        };
                    return (
                      a &&
                        'number' == typeof h &&
                        (p = 'end' === a ? -1 * h : h),
                      l ? { x: p * u, y: d * c } : { x: d * c, y: p * u }
                    );
                  })(t, e);
                return s === (null == (n = a.offset) ? void 0 : n.placement) &&
                  null != (r = a.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + l.x, y: i + l.y, data: { ...l, placement: s } };
              },
            }
          );
        },
        W = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'shift',
              options: e,
              async fn(t) {
                const { x: n, y: r, placement: o } = t,
                  {
                    mainAxis: i = !0,
                    crossAxis: s = !1,
                    limiter: a = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...l
                  } = (0, m.ku)(e, t),
                  c = { x: n, y: r },
                  u = await y(t, l),
                  f = (0, m.Qq)((0, m.k3)(o)),
                  d = (0, m.Rn)(f);
                let p = c[d],
                  h = c[f];
                if (i) {
                  const e = 'y' === d ? 'bottom' : 'right',
                    t = p + u['y' === d ? 'top' : 'left'],
                    n = p - u[e];
                  p = (0, m.uZ)(t, p, n);
                }
                if (s) {
                  const e = 'y' === f ? 'bottom' : 'right',
                    t = h + u['y' === f ? 'top' : 'left'],
                    n = h - u[e];
                  h = (0, m.uZ)(t, h, n);
                }
                const g = a.fn({ ...t, [d]: p, [f]: h });
                return {
                  ...g,
                  data: { x: g.x - n, y: g.y - r, enabled: { [d]: i, [f]: s } },
                };
              },
            }
          );
        },
        V = function (e) {
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
                    rects: s,
                    initialPlacement: a,
                    platform: l,
                    elements: c,
                  } = t,
                  {
                    mainAxis: u = !0,
                    crossAxis: f = !0,
                    fallbackPlacements: d,
                    fallbackStrategy: p = 'bestFit',
                    fallbackAxisSideDirection: h = 'none',
                    flipAlignment: g = !0,
                    ...w
                  } = (0, m.ku)(e, t);
                if (null != (n = i.arrow) && n.alignmentOffset) return {};
                const x = (0, m.k3)(o),
                  v = (0, m.Qq)(a),
                  b = (0, m.k3)(a) === a,
                  R = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                  P = d || (b || !g ? [(0, m.pw)(a)] : (0, m.gy)(a)),
                  C = 'none' !== h;
                !d && C && P.push(...(0, m.KX)(a, g, h, R));
                const O = [a, ...P],
                  A = await y(t, w),
                  k = [];
                let E = (null == (r = i.flip) ? void 0 : r.overflows) || [];
                if ((u && k.push(A[x]), f)) {
                  const e = (0, m.i8)(o, s, R);
                  k.push(A[e[0]], A[e[1]]);
                }
                if (
                  ((E = [...E, { placement: o, overflows: k }]),
                  !k.every((e) => e <= 0))
                ) {
                  var S, T;
                  const e =
                      ((null == (S = i.flip) ? void 0 : S.index) || 0) + 1,
                    t = O[e];
                  if (t)
                    return {
                      data: { index: e, overflows: E },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (T = E.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1],
                    )[0])
                      ? void 0
                      : T.placement;
                  if (!n)
                    switch (p) {
                      case 'bestFit': {
                        var D;
                        const e =
                          null ==
                          (D = E.filter((e) => {
                            if (C) {
                              const t = (0, m.Qq)(e.placement);
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
                            : D[0];
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
        z = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'size',
              options: e,
              async fn(t) {
                var n, r;
                const { placement: o, rects: i, platform: s, elements: a } = t,
                  { apply: l = () => {}, ...c } = (0, m.ku)(e, t),
                  u = await y(t, c),
                  f = (0, m.k3)(o),
                  d = (0, m.hp)(o),
                  p = 'y' === (0, m.Qq)(o),
                  { width: h, height: g } = i.floating;
                let w, x;
                'top' === f || 'bottom' === f
                  ? ((w = f),
                    (x =
                      d ===
                      ((await (null == s.isRTL ? void 0 : s.isRTL(a.floating)))
                        ? 'start'
                        : 'end')
                        ? 'left'
                        : 'right'))
                  : ((x = f), (w = 'end' === d ? 'top' : 'bottom'));
                const v = g - u.top - u.bottom,
                  b = h - u.left - u.right,
                  R = (0, m.VV)(g - u[w], v),
                  P = (0, m.VV)(h - u[x], b),
                  C = !t.middlewareData.shift;
                let O = R,
                  A = P;
                if (
                  (null != (n = t.middlewareData.shift) &&
                    n.enabled.x &&
                    (A = b),
                  null != (r = t.middlewareData.shift) &&
                    r.enabled.y &&
                    (O = v),
                  C && !d)
                ) {
                  const e = (0, m.Fp)(u.left, 0),
                    t = (0, m.Fp)(u.right, 0),
                    n = (0, m.Fp)(u.top, 0),
                    r = (0, m.Fp)(u.bottom, 0);
                  p
                    ? (A =
                        h -
                        2 *
                          (0 !== e || 0 !== t
                            ? e + t
                            : (0, m.Fp)(u.left, u.right)))
                    : (O =
                        g -
                        2 *
                          (0 !== n || 0 !== r
                            ? n + r
                            : (0, m.Fp)(u.top, u.bottom)));
                }
                await l({ ...t, availableWidth: A, availableHeight: O });
                const k = await s.getDimensions(a.floating);
                return h !== k.width || g !== k.height
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
                  { strategy: r = 'referenceHidden', ...o } = (0, m.ku)(e, t);
                switch (r) {
                  case 'referenceHidden': {
                    const e = w(
                      await y(t, { ...o, elementContext: 'reference' }),
                      n.reference,
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: x(e),
                      },
                    };
                  }
                  case 'escaped': {
                    const e = w(
                      await y(t, { ...o, altBoundary: !0 }),
                      n.floating,
                    );
                    return { data: { escapedOffsets: e, escaped: x(e) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        },
        $ = (e) => ({
          name: 'arrow',
          options: e,
          async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: s,
                elements: a,
                middlewareData: l,
              } = t,
              { element: c, padding: u = 0 } = (0, m.ku)(e, t) || {};
            if (null == c) return {};
            const f = (0, m.yd)(u),
              d = { x: n, y: r },
              p = (0, m.Wh)(o),
              h = (0, m.I4)(p),
              g = await s.getDimensions(c),
              y = 'y' === p,
              w = y ? 'top' : 'left',
              x = y ? 'bottom' : 'right',
              v = y ? 'clientHeight' : 'clientWidth',
              b = i.reference[h] + i.reference[p] - d[p] - i.floating[h],
              R = d[p] - i.reference[p],
              P = await (null == s.getOffsetParent
                ? void 0
                : s.getOffsetParent(c));
            let C = P ? P[v] : 0;
            (C && (await (null == s.isElement ? void 0 : s.isElement(P)))) ||
              (C = a.floating[v] || i.floating[h]);
            const O = b / 2 - R / 2,
              A = C / 2 - g[h] / 2 - 1,
              k = (0, m.VV)(f[w], A),
              E = (0, m.VV)(f[x], A),
              S = k,
              T = C - g[h] - E,
              D = C / 2 - g[h] / 2 + O,
              N = (0, m.uZ)(S, D, T),
              F =
                !l.arrow &&
                null != (0, m.hp)(o) &&
                D !== N &&
                i.reference[h] / 2 - (D < S ? k : E) - g[h] / 2 < 0,
              j = F ? (D < S ? D - S : D - T) : 0;
            return {
              [p]: d[p] + j,
              data: {
                [p]: N,
                centerOffset: D - N - j,
                ...(F && { alignmentOffset: j }),
              },
              reset: F,
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
                    middlewareData: s,
                  } = t,
                  {
                    offset: a = 0,
                    mainAxis: l = !0,
                    crossAxis: c = !0,
                  } = (0, m.ku)(e, t),
                  u = { x: n, y: r },
                  f = (0, m.Qq)(o),
                  d = (0, m.Rn)(f);
                let p = u[d],
                  h = u[f];
                const g = (0, m.ku)(a, t),
                  y =
                    'number' == typeof g
                      ? { mainAxis: g, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...g };
                if (l) {
                  const e = 'y' === d ? 'height' : 'width',
                    t = i.reference[d] - i.floating[e] + y.mainAxis,
                    n = i.reference[d] + i.reference[e] - y.mainAxis;
                  p < t ? (p = t) : p > n && (p = n);
                }
                if (c) {
                  var w, x;
                  const e = 'y' === d ? 'width' : 'height',
                    t = ['top', 'left'].includes((0, m.k3)(o)),
                    n =
                      i.reference[f] -
                      i.floating[e] +
                      ((t && (null == (w = s.offset) ? void 0 : w[f])) || 0) +
                      (t ? 0 : y.crossAxis),
                    r =
                      i.reference[f] +
                      i.reference[e] +
                      (t ? 0 : (null == (x = s.offset) ? void 0 : x[f]) || 0) -
                      (t ? y.crossAxis : 0);
                  h < n ? (h = n) : h > r && (h = r);
                }
                return { [d]: p, [f]: h };
              },
            }
          );
        },
        K = (e, t, n) => {
          const r = new Map(),
            o = { platform: L, ...n },
            i = { ...o.platform, _c: r };
          return (async (e, t, n) => {
            const {
                placement: r = 'bottom',
                strategy: o = 'absolute',
                middleware: i = [],
                platform: s,
              } = n,
              a = i.filter(Boolean),
              l = await (null == s.isRTL ? void 0 : s.isRTL(t));
            let c = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o,
              }),
              { x: u, y: f } = g(c, r, l),
              d = r,
              p = {},
              h = 0;
            for (let n = 0; n < a.length; n++) {
              const { name: i, fn: m } = a[n],
                {
                  x: y,
                  y: w,
                  data: x,
                  reset: v,
                } = await m({
                  x: u,
                  y: f,
                  initialPlacement: r,
                  placement: d,
                  strategy: o,
                  middlewareData: p,
                  rects: c,
                  platform: s,
                  elements: { reference: e, floating: t },
                });
              (u = null != y ? y : u),
                (f = null != w ? w : f),
                (p = { ...p, [i]: { ...p[i], ...x } }),
                v &&
                  h <= 50 &&
                  (h++,
                  'object' == typeof v &&
                    (v.placement && (d = v.placement),
                    v.rects &&
                      (c =
                        !0 === v.rects
                          ? await s.getElementRects({
                              reference: e,
                              floating: t,
                              strategy: o,
                            })
                          : v.rects),
                    ({ x: u, y: f } = g(c, d, l))),
                  (n = -1));
            }
            return { x: u, y: f, placement: d, strategy: o, middlewareData: p };
          })(e, t, { ...o, platform: i });
        };
      var U = n(61254),
        Z = 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect;
      function J(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ('function' == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && 'object' == typeof e) {
          if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; 0 != r--; ) if (!J(e[r], t[r])) return !1;
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
            if (('_owner' !== n || !e.$$typeof) && !J(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function q(e) {
        if ('undefined' == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function Q(e, t) {
        const n = q(e);
        return Math.round(t * n) / n;
      }
      function X(e) {
        const t = r.useRef(e);
        return (
          Z(() => {
            t.current = e;
          }),
          t
        );
      }
      const Y = (e) => ({
          name: 'arrow',
          options: e,
          fn(t) {
            const { element: n, padding: r } =
              'function' == typeof e ? e(t) : e;
            return n && ((o = n), {}.hasOwnProperty.call(o, 'current'))
              ? null != n.current
                ? $({ element: n.current, padding: r }).fn(t)
                : {}
              : n
                ? $({ element: n, padding: r }).fn(t)
                : {};
            var o;
          },
        }),
        G = (e, t) => ({ ...W(e), options: [e, t] }),
        ee = (e, t) => ({ ...B(e), options: [e, t] }),
        te = (e, t) => ({ ...V(e), options: [e, t] }),
        ne = (e, t) => ({ ...z(e), options: [e, t] }),
        re = (e, t) => ({ ...I(e), options: [e, t] }),
        oe = (e, t) => ({ ...Y(e), options: [e, t] });
      function ie(e) {
        const t = se(e),
          n = r.forwardRef((e, n) => {
            const { children: o, ...i } = e,
              a = r.Children.toArray(o),
              l = a.find(le);
            if (l) {
              const e = l.props.children,
                o = a.map((t) =>
                  t === l
                    ? r.Children.count(e) > 1
                      ? r.Children.only(null)
                      : r.isValidElement(e)
                        ? e.props.children
                        : null
                    : t,
                );
              return (0, s.jsx)(t, {
                ...i,
                ref: n,
                children: r.isValidElement(e)
                  ? r.cloneElement(e, void 0, o)
                  : null,
              });
            }
            return (0, s.jsx)(t, { ...i, ref: n, children: o });
          });
        return (n.displayName = `${e}.Slot`), n;
      }
      function se(e) {
        const t = r.forwardRef((e, t) => {
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
              })(n),
              i = (function (e, t) {
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
                      : 'className' === r &&
                        (n[r] = [o, i].filter(Boolean).join(' '));
                }
                return { ...e, ...n };
              })(o, n.props);
            return (
              n.type !== r.Fragment && (i.ref = t ? p(t, e) : e),
              r.cloneElement(n, i)
            );
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null;
        });
        return (t.displayName = `${e}.SlotClone`), t;
      }
      var ae = Symbol('radix.slottable');
      function le(e) {
        return (
          r.isValidElement(e) &&
          'function' == typeof e.type &&
          '__radixId' in e.type &&
          e.type.__radixId === ae
        );
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
        'select',
        'span',
        'svg',
        'ul',
      ].reduce((e, t) => {
        const n = ie(`Primitive.${t}`),
          o = r.forwardRef((e, r) => {
            const { asChild: o, ...i } = e,
              a = o ? n : t;
            return (
              'undefined' != typeof window &&
                (window[Symbol.for('radix-ui')] = !0),
              (0, s.jsx)(a, { ...i, ref: r })
            );
          });
        return (o.displayName = `Primitive.${t}`), { ...e, [t]: o };
      }, {});
      var ue = r.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: o = 5, ...i } = e;
        return (0, s.jsx)(ce.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: '0 0 30 10',
          preserveAspectRatio: 'none',
          children: e.asChild
            ? n
            : (0, s.jsx)('polygon', { points: '0,0 30,0 15,10' }),
        });
      });
      ue.displayName = 'Arrow';
      var fe = ue;
      var de = 'Popper',
        [pe, he] = a(de),
        [me, ge] = pe(de),
        ye = (e) => {
          const { __scopePopper: t, children: n } = e,
            [o, i] = r.useState(null);
          return (0, s.jsx)(me, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n,
          });
        };
      ye.displayName = de;
      var we = 'PopperAnchor',
        xe = r.forwardRef((e, t) => {
          const { __scopePopper: n, virtualRef: o, ...i } = e,
            a = ge(we, n),
            l = r.useRef(null),
            c = h(t, l);
          return (
            r.useEffect(() => {
              a.onAnchorChange(o?.current || l.current);
            }),
            o ? null : (0, s.jsx)(ce.div, { ...i, ref: c })
          );
        });
      xe.displayName = we;
      var ve = 'PopperContent',
        [be, Re] = pe(ve),
        Pe = r.forwardRef((e, t) => {
          const {
              __scopePopper: n,
              side: o = 'bottom',
              sideOffset: i = 0,
              align: a = 'center',
              alignOffset: l = 0,
              arrowPadding: u = 0,
              avoidCollisions: f = !0,
              collisionBoundary: d = [],
              collisionPadding: p = 0,
              sticky: m = 'partial',
              hideWhenDetached: g = !1,
              updatePositionStrategy: y = 'optimized',
              onPlaced: w,
              ...x
            } = e,
            v = ge(ve, n),
            [b, R] = r.useState(null),
            P = h(t, (e) => R(e)),
            [C, O] = r.useState(null),
            A = (function (e) {
              const [t, n] = r.useState(void 0);
              return (
                c(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    const t = new ResizeObserver((t) => {
                      if (!Array.isArray(t)) return;
                      if (!t.length) return;
                      const r = t[0];
                      let o, i;
                      if ('borderBoxSize' in r) {
                        const e = r.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (o = t.inlineSize), (i = t.blockSize);
                      } else (o = e.offsetWidth), (i = e.offsetHeight);
                      n({ width: o, height: i });
                    });
                    return (
                      t.observe(e, { box: 'border-box' }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(C),
            k = A?.width ?? 0,
            E = A?.height ?? 0,
            S = o + ('center' !== a ? '-' + a : ''),
            T =
              'number' == typeof p
                ? p
                : { top: 0, right: 0, bottom: 0, left: 0, ...p },
            D = Array.isArray(d) ? d : [d],
            N = D.length > 0,
            F = { padding: T, boundary: D.filter(ke), altBoundary: N },
            {
              refs: j,
              floatingStyles: L,
              placement: M,
              isPositioned: W,
              middlewareData: V,
            } = (function (e) {
              void 0 === e && (e = {});
              const {
                  placement: t = 'bottom',
                  strategy: n = 'absolute',
                  middleware: o = [],
                  platform: i,
                  elements: { reference: s, floating: a } = {},
                  transform: l = !0,
                  whileElementsMounted: c,
                  open: u,
                } = e,
                [f, d] = r.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, h] = r.useState(o);
              J(p, o) || h(o);
              const [m, g] = r.useState(null),
                [y, w] = r.useState(null),
                x = r.useCallback((e) => {
                  e !== P.current && ((P.current = e), g(e));
                }, []),
                v = r.useCallback((e) => {
                  e !== C.current && ((C.current = e), w(e));
                }, []),
                b = s || m,
                R = a || y,
                P = r.useRef(null),
                C = r.useRef(null),
                O = r.useRef(f),
                A = null != c,
                k = X(c),
                E = X(i),
                S = X(u),
                T = r.useCallback(() => {
                  if (!P.current || !C.current) return;
                  const e = { placement: t, strategy: n, middleware: p };
                  E.current && (e.platform = E.current),
                    K(P.current, C.current, e).then((e) => {
                      const t = { ...e, isPositioned: !1 !== S.current };
                      D.current &&
                        !J(O.current, t) &&
                        ((O.current = t),
                        U.flushSync(() => {
                          d(t);
                        }));
                    });
                }, [p, t, n, E, S]);
              Z(() => {
                !1 === u &&
                  O.current.isPositioned &&
                  ((O.current.isPositioned = !1),
                  d((e) => ({ ...e, isPositioned: !1 })));
              }, [u]);
              const D = r.useRef(!1);
              Z(
                () => (
                  (D.current = !0),
                  () => {
                    D.current = !1;
                  }
                ),
                [],
              ),
                Z(() => {
                  if ((b && (P.current = b), R && (C.current = R), b && R)) {
                    if (k.current) return k.current(b, R, T);
                    T();
                  }
                }, [b, R, T, k, A]);
              const N = r.useMemo(
                  () => ({
                    reference: P,
                    floating: C,
                    setReference: x,
                    setFloating: v,
                  }),
                  [x, v],
                ),
                F = r.useMemo(() => ({ reference: b, floating: R }), [b, R]),
                j = r.useMemo(() => {
                  const e = { position: n, left: 0, top: 0 };
                  if (!F.floating) return e;
                  const t = Q(F.floating, f.x),
                    r = Q(F.floating, f.y);
                  return l
                    ? {
                        ...e,
                        transform: 'translate(' + t + 'px, ' + r + 'px)',
                        ...(q(F.floating) >= 1.5 && {
                          willChange: 'transform',
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, l, F.floating, f.x, f.y]);
              return r.useMemo(
                () => ({
                  ...f,
                  update: T,
                  refs: N,
                  elements: F,
                  floatingStyles: j,
                }),
                [f, T, N, F, j],
              );
            })({
              strategy: 'fixed',
              placement: S,
              whileElementsMounted: (...e) =>
                _(...e, { animationFrame: 'always' === y }),
              elements: { reference: v.anchor },
              middleware: [
                ((z = { mainAxis: i + E, alignmentAxis: l }),
                { ...H(z), options: [z, I] }),
                f &&
                  G({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: 'partial' === m ? ee() : void 0,
                    ...F,
                  }),
                f && te({ ...F }),
                ne({
                  ...F,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r,
                  }) => {
                    const { width: o, height: i } = t.reference,
                      s = e.floating.style;
                    s.setProperty('--radix-popper-available-width', `${n}px`),
                      s.setProperty(
                        '--radix-popper-available-height',
                        `${r}px`,
                      ),
                      s.setProperty('--radix-popper-anchor-width', `${o}px`),
                      s.setProperty('--radix-popper-anchor-height', `${i}px`);
                  },
                }),
                C && oe({ element: C, padding: u }),
                Ee({ arrowWidth: k, arrowHeight: E }),
                g && re({ strategy: 'referenceHidden', ...F }),
              ],
            });
          var z, I;
          const [$, B] = Se(M),
            Y = (function (e) {
              const t = r.useRef(e);
              return (
                r.useEffect(() => {
                  t.current = e;
                }),
                r.useMemo(
                  () =>
                    (...e) =>
                      t.current?.(...e),
                  [],
                )
              );
            })(w);
          c(() => {
            W && Y?.();
          }, [W, Y]);
          const ie = V.arrow?.x,
            se = V.arrow?.y,
            ae = 0 !== V.arrow?.centerOffset,
            [le, ue] = r.useState();
          return (
            c(() => {
              b && ue(window.getComputedStyle(b).zIndex);
            }, [b]),
            (0, s.jsx)('div', {
              ref: j.setFloating,
              'data-radix-popper-content-wrapper': '',
              style: {
                ...L,
                transform: W ? L.transform : 'translate(0, -200%)',
                minWidth: 'max-content',
                zIndex: le,
                '--radix-popper-transform-origin': [
                  V.transformOrigin?.x,
                  V.transformOrigin?.y,
                ].join(' '),
                ...(V.hide?.referenceHidden && {
                  visibility: 'hidden',
                  pointerEvents: 'none',
                }),
              },
              dir: e.dir,
              children: (0, s.jsx)(be, {
                scope: n,
                placedSide: $,
                onArrowChange: O,
                arrowX: ie,
                arrowY: se,
                shouldHideArrow: ae,
                children: (0, s.jsx)(ce.div, {
                  'data-side': $,
                  'data-align': B,
                  ...x,
                  ref: P,
                  style: { ...x.style, animation: W ? void 0 : 'none' },
                }),
              }),
            })
          );
        });
      Pe.displayName = ve;
      var Ce = 'PopperArrow',
        Oe = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
        Ae = r.forwardRef(function (e, t) {
          const { __scopePopper: n, ...r } = e,
            o = Re(Ce, n),
            i = Oe[o.placedSide];
          return (0, s.jsx)('span', {
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
            children: (0, s.jsx)(fe, {
              ...r,
              ref: t,
              style: { ...r.style, display: 'block' },
            }),
          });
        });
      function ke(e) {
        return null !== e;
      }
      Ae.displayName = Ce;
      var Ee = (e) => ({
        name: 'transformOrigin',
        options: e,
        fn(t) {
          const { placement: n, rects: r, middlewareData: o } = t,
            i = 0 !== o.arrow?.centerOffset,
            s = i ? 0 : e.arrowWidth,
            a = i ? 0 : e.arrowHeight,
            [l, c] = Se(n),
            u = { start: '0%', center: '50%', end: '100%' }[c],
            f = (o.arrow?.x ?? 0) + s / 2,
            d = (o.arrow?.y ?? 0) + a / 2;
          let p = '',
            h = '';
          return (
            'bottom' === l
              ? ((p = i ? u : `${f}px`), (h = -a + 'px'))
              : 'top' === l
                ? ((p = i ? u : `${f}px`), (h = `${r.floating.height + a}px`))
                : 'right' === l
                  ? ((p = -a + 'px'), (h = i ? u : `${d}px`))
                  : 'left' === l &&
                    ((p = `${r.floating.width + a}px`), (h = i ? u : `${d}px`)),
            { data: { x: p, y: h } }
          );
        },
      });
      function Se(e) {
        const [t, n = 'center'] = e.split('-');
        return [t, n];
      }
      var Te = ye,
        De = xe,
        Ne = Pe,
        Fe = Ae,
        je = r.forwardRef((e, t) => {
          const { container: n, ...o } = e,
            [i, a] = r.useState(!1);
          c(() => a(!0), []);
          const l = n || (i && globalThis?.document?.body);
          return l
            ? U.createPortal((0, s.jsx)(ce.div, { ...o, ref: t }), l)
            : null;
        });
      je.displayName = 'Portal';
      var Le = (e) => {
        const { present: t, children: n } = e,
          o = (function (e) {
            const [t, n] = r.useState(),
              o = r.useRef(null),
              i = r.useRef(e),
              s = r.useRef('none'),
              a = e ? 'mounted' : 'unmounted',
              [l, u] = (function (e, t) {
                return r.useReducer((e, n) => t[e][n] ?? e, e);
              })(a, {
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
                const e = Me(o.current);
                s.current = 'mounted' === l ? e : 'none';
              }, [l]),
              c(() => {
                const t = o.current,
                  n = i.current;
                if (n !== e) {
                  const r = s.current,
                    o = Me(t);
                  if (e) u('MOUNT');
                  else if ('none' === o || 'none' === t?.display) u('UNMOUNT');
                  else {
                    u(n && r !== o ? 'ANIMATION_OUT' : 'UNMOUNT');
                  }
                  i.current = e;
                }
              }, [e, u]),
              c(() => {
                if (t) {
                  let e;
                  const n = t.ownerDocument.defaultView ?? window,
                    r = (r) => {
                      const s = Me(o.current).includes(r.animationName);
                      if (
                        r.target === t &&
                        s &&
                        (u('ANIMATION_END'), !i.current)
                      ) {
                        const r = t.style.animationFillMode;
                        (t.style.animationFillMode = 'forwards'),
                          (e = n.setTimeout(() => {
                            'forwards' === t.style.animationFillMode &&
                              (t.style.animationFillMode = r);
                          }));
                      }
                    },
                    a = (e) => {
                      e.target === t && (s.current = Me(o.current));
                    };
                  return (
                    t.addEventListener('animationstart', a),
                    t.addEventListener('animationcancel', r),
                    t.addEventListener('animationend', r),
                    () => {
                      n.clearTimeout(e),
                        t.removeEventListener('animationstart', a),
                        t.removeEventListener('animationcancel', r),
                        t.removeEventListener('animationend', r);
                    }
                  );
                }
                u('ANIMATION_END');
              }, [t, u]),
              {
                isPresent: ['mounted', 'unmountSuspended'].includes(l),
                ref: r.useCallback((e) => {
                  (o.current = e ? getComputedStyle(e) : null), n(e);
                }, []),
              }
            );
          })(t),
          i =
            'function' == typeof n
              ? n({ present: o.isPresent })
              : r.Children.only(n),
          s = h(
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
          ? r.cloneElement(i, { ref: s })
          : null;
      };
      function Me(e) {
        return e?.animationName || 'none';
      }
      Le.displayName = 'Presence';
      var _e,
        He = n(8183),
        We = 'HoverCard',
        [Ve, ze] = a(We, [he]),
        Ie = he(),
        [$e, Be] = Ve(We),
        Ke = (e) => {
          const {
              __scopeHoverCard: t,
              children: n,
              open: o,
              defaultOpen: i,
              onOpenChange: a,
              openDelay: l = 700,
              closeDelay: c = 300,
            } = e,
            u = Ie(t),
            d = r.useRef(0),
            p = r.useRef(0),
            h = r.useRef(!1),
            m = r.useRef(!1),
            [g, y] = f({
              prop: o,
              defaultProp: i ?? !1,
              onChange: a,
              caller: We,
            }),
            w = r.useCallback(() => {
              clearTimeout(p.current),
                (d.current = window.setTimeout(() => y(!0), l));
            }, [l, y]),
            x = r.useCallback(() => {
              clearTimeout(d.current),
                h.current ||
                  m.current ||
                  (p.current = window.setTimeout(() => y(!1), c));
            }, [c, y]),
            v = r.useCallback(() => y(!1), [y]);
          return (
            r.useEffect(
              () => () => {
                clearTimeout(d.current), clearTimeout(p.current);
              },
              [],
            ),
            (0, s.jsx)($e, {
              scope: t,
              open: g,
              onOpenChange: y,
              onOpen: w,
              onClose: x,
              onDismiss: v,
              hasSelectionRef: h,
              isPointerDownOnContentRef: m,
              children: (0, s.jsx)(Te, { ...u, children: n }),
            })
          );
        };
      Ke.displayName = We;
      var Ue = 'HoverCardTrigger',
        Ze = r.forwardRef((e, t) => {
          const { __scopeHoverCard: n, ...r } = e,
            o = Be(Ue, n),
            a = Ie(n);
          return (0, s.jsx)(De, {
            asChild: !0,
            ...a,
            children: (0, s.jsx)(ce.a, {
              'data-state': o.open ? 'open' : 'closed',
              ...r,
              ref: t,
              onPointerEnter: i(e.onPointerEnter, nt(o.onOpen)),
              onPointerLeave: i(e.onPointerLeave, nt(o.onClose)),
              onFocus: i(e.onFocus, o.onOpen),
              onBlur: i(e.onBlur, o.onClose),
              onTouchStart: i(e.onTouchStart, (e) => e.preventDefault()),
            }),
          });
        });
      Ze.displayName = Ue;
      var Je = 'HoverCardPortal',
        [qe, Qe] = Ve(Je, { forceMount: void 0 }),
        Xe = (e) => {
          const {
              __scopeHoverCard: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            i = Be(Je, t);
          return (0, s.jsx)(qe, {
            scope: t,
            forceMount: n,
            children: (0, s.jsx)(Le, {
              present: n || i.open,
              children: (0, s.jsx)(je, {
                asChild: !0,
                container: o,
                children: r,
              }),
            }),
          });
        };
      Xe.displayName = Je;
      var Ye = 'HoverCardContent',
        Ge = r.forwardRef((e, t) => {
          const n = Qe(Ye, e.__scopeHoverCard),
            { forceMount: r = n.forceMount, ...o } = e,
            a = Be(Ye, e.__scopeHoverCard);
          return (0, s.jsx)(Le, {
            present: r || a.open,
            children: (0, s.jsx)(et, {
              'data-state': a.open ? 'open' : 'closed',
              ...o,
              onPointerEnter: i(e.onPointerEnter, nt(a.onOpen)),
              onPointerLeave: i(e.onPointerLeave, nt(a.onClose)),
              ref: t,
            }),
          });
        });
      Ge.displayName = Ye;
      var et = r.forwardRef((e, t) => {
          const {
              __scopeHoverCard: n,
              onEscapeKeyDown: o,
              onPointerDownOutside: a,
              onFocusOutside: l,
              onInteractOutside: c,
              ...u
            } = e,
            f = Be(Ye, n),
            d = Ie(n),
            p = r.useRef(null),
            m = h(t, p),
            [g, y] = r.useState(!1);
          return (
            r.useEffect(() => {
              if (g) {
                const e = document.body;
                return (
                  (_e = e.style.userSelect || e.style.webkitUserSelect),
                  (e.style.userSelect = 'none'),
                  (e.style.webkitUserSelect = 'none'),
                  () => {
                    (e.style.userSelect = _e), (e.style.webkitUserSelect = _e);
                  }
                );
              }
            }, [g]),
            r.useEffect(() => {
              if (p.current) {
                const e = () => {
                  y(!1),
                    (f.isPointerDownOnContentRef.current = !1),
                    setTimeout(() => {
                      '' !== document.getSelection()?.toString() &&
                        (f.hasSelectionRef.current = !0);
                    });
                };
                return (
                  document.addEventListener('pointerup', e),
                  () => {
                    document.removeEventListener('pointerup', e),
                      (f.hasSelectionRef.current = !1),
                      (f.isPointerDownOnContentRef.current = !1);
                  }
                );
              }
            }, [f.isPointerDownOnContentRef, f.hasSelectionRef]),
            r.useEffect(() => {
              if (p.current) {
                (function (e) {
                  const t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                      acceptNode: (e) =>
                        e.tabIndex >= 0
                          ? NodeFilter.FILTER_ACCEPT
                          : NodeFilter.FILTER_SKIP,
                    });
                  for (; n.nextNode(); ) t.push(n.currentNode);
                  return t;
                })(p.current).forEach((e) => e.setAttribute('tabindex', '-1'));
              }
            }),
            (0, s.jsx)(He.XB, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onInteractOutside: c,
              onEscapeKeyDown: o,
              onPointerDownOutside: a,
              onFocusOutside: i(l, (e) => {
                e.preventDefault();
              }),
              onDismiss: f.onDismiss,
              children: (0, s.jsx)(Ne, {
                ...d,
                ...u,
                onPointerDown: i(u.onPointerDown, (e) => {
                  e.currentTarget.contains(e.target) && y(!0),
                    (f.hasSelectionRef.current = !1),
                    (f.isPointerDownOnContentRef.current = !0);
                }),
                ref: m,
                style: {
                  ...u.style,
                  userSelect: g ? 'text' : void 0,
                  WebkitUserSelect: g ? 'text' : void 0,
                  '--radix-hover-card-content-transform-origin':
                    'var(--radix-popper-transform-origin)',
                  '--radix-hover-card-content-available-width':
                    'var(--radix-popper-available-width)',
                  '--radix-hover-card-content-available-height':
                    'var(--radix-popper-available-height)',
                  '--radix-hover-card-trigger-width':
                    'var(--radix-popper-anchor-width)',
                  '--radix-hover-card-trigger-height':
                    'var(--radix-popper-anchor-height)',
                },
              }),
            })
          );
        }),
        tt = r.forwardRef((e, t) => {
          const { __scopeHoverCard: n, ...r } = e,
            o = Ie(n);
          return (0, s.jsx)(Fe, { ...o, ...r, ref: t });
        });
      function nt(e) {
        return (t) => ('touch' === t.pointerType ? void 0 : e());
      }
      tt.displayName = 'HoverCardArrow';
      var rt = Ke,
        ot = Ze,
        it = Ge;
    },
  },
]);
//# sourceMappingURL=6979.45e4ee8c.async.js.map
