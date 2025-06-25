/*! For license information please see 609.2c8cde4c.async.js.LICENSE.txt */
'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [609],
  {
    64998: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('chevron-right', [
        ['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }],
      ]);
    },
    50316: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('circle', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
      ]);
    },
    38100: function (e, t, n) {
      n.d(t, {
        oC: function () {
          return yr;
        },
        VY: function () {
          return hr;
        },
        ZA: function () {
          return mr;
        },
        ck: function () {
          return wr;
        },
        wU: function () {
          return br;
        },
        __: function () {
          return gr;
        },
        Uv: function () {
          return pr;
        },
        Ee: function () {
          return vr;
        },
        Rk: function () {
          return xr;
        },
        fC: function () {
          return dr;
        },
        Z0: function () {
          return Rr;
        },
        Tr: function () {
          return Mr;
        },
        tu: function () {
          return Dr;
        },
        fF: function () {
          return Cr;
        },
        xz: function () {
          return fr;
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
      var s = n(25360),
        c = n(77342),
        l = n(61254),
        u = n(86074),
        d = r.forwardRef((e, t) => {
          const { children: n, ...o } = e,
            i = r.Children.toArray(n),
            a = i.find(h);
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
            return (0, u.jsx)(f, {
              ...o,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, u.jsx)(f, { ...o, ref: t, children: n });
        });
      d.displayName = 'Slot';
      var f = r.forwardRef((e, t) => {
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
          return r.cloneElement(n, { ...m(o, n.props), ref: t ? a(t, e) : e });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      f.displayName = 'SlotClone';
      var p = ({ children: e }) => (0, u.jsx)(u.Fragment, { children: e });
      function h(e) {
        return r.isValidElement(e) && e.type === p;
      }
      function m(e, t) {
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
      var g = [
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
            i = r ? d : t;
          return (
            'undefined' != typeof window &&
              (window[Symbol.for('radix-ui')] = !0),
            (0, u.jsx)(i, { ...o, ref: n })
          );
        });
        return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
      }, {});
      function w(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      function y(e, t) {
        if ('function' == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function v(...e) {
        return (t) => {
          let n = !1;
          const r = e.map((e) => {
            const r = y(e, t);
            return n || 'function' != typeof r || (n = !0), r;
          });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                const n = r[t];
                'function' == typeof n ? n() : y(e[t], null);
              }
            };
        };
      }
      function x(...e) {
        return r.useCallback(v(...e), e);
      }
      var b = r.forwardRef((e, t) => {
        const { children: n, ...o } = e,
          i = r.Children.toArray(n),
          a = i.find(C);
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
          return (0, u.jsx)(R, {
            ...o,
            ref: t,
            children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null,
          });
        }
        return (0, u.jsx)(R, { ...o, ref: t, children: n });
      });
      b.displayName = 'Slot';
      var R = r.forwardRef((e, t) => {
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
          return r.cloneElement(n, { ...D(o, n.props), ref: t ? v(t, e) : e });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      R.displayName = 'SlotClone';
      var M = ({ children: e }) => (0, u.jsx)(u.Fragment, { children: e });
      function C(e) {
        return r.isValidElement(e) && e.type === M;
      }
      function D(e, t) {
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
      function _(e) {
        const t = e + 'CollectionProvider',
          [n, o] = (0, s.b)(t),
          [i, a] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          c = (e) => {
            const { scope: t, children: n } = e,
              o = r.useRef(null),
              a = r.useRef(new Map()).current;
            return (0, u.jsx)(i, {
              scope: t,
              itemMap: a,
              collectionRef: o,
              children: n,
            });
          };
        c.displayName = t;
        const l = e + 'CollectionSlot',
          d = r.forwardRef((e, t) => {
            const { scope: n, children: r } = e,
              o = x(t, a(l, n).collectionRef);
            return (0, u.jsx)(b, { ref: o, children: r });
          });
        d.displayName = l;
        const f = e + 'CollectionItemSlot',
          p = 'data-radix-collection-item',
          h = r.forwardRef((e, t) => {
            const { scope: n, children: o, ...i } = e,
              s = r.useRef(null),
              c = x(t, s),
              l = a(f, n);
            return (
              r.useEffect(
                () => (
                  l.itemMap.set(s, { ref: s, ...i }),
                  () => {
                    l.itemMap.delete(s);
                  }
                ),
              ),
              (0, u.jsx)(b, { [p]: '', ref: c, children: o })
            );
          });
        return (
          (h.displayName = f),
          [
            { Provider: c, Slot: d, ItemSlot: h },
            function (t) {
              const n = a(e + 'CollectionConsumer', t);
              return r.useCallback(() => {
                const e = n.collectionRef.current;
                if (!e) return [];
                const t = Array.from(e.querySelectorAll(`[${p}]`));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
                );
              }, [n.collectionRef, n.itemMap]);
            },
            o,
          ]
        );
      }
      var P = n(78990),
        O = n(8183),
        j = n(27552),
        k = n(36622),
        A = n(91276),
        E = n(71347);
      function T(e, t, n) {
        let { reference: r, floating: o } = e;
        const i = (0, E.Qq)(t),
          a = (0, E.Wh)(t),
          s = (0, E.I4)(a),
          c = (0, E.k3)(t),
          l = 'y' === i,
          u = r.x + r.width / 2 - o.width / 2,
          d = r.y + r.height / 2 - o.height / 2,
          f = r[s] / 2 - o[s] / 2;
        let p;
        switch (c) {
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
        switch ((0, E.hp)(t)) {
          case 'start':
            p[a] -= f * (n && l ? -1 : 1);
            break;
          case 'end':
            p[a] += f * (n && l ? -1 : 1);
        }
        return p;
      }
      async function F(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
            x: r,
            y: o,
            platform: i,
            rects: a,
            elements: s,
            strategy: c,
          } = e,
          {
            boundary: l = 'clippingAncestors',
            rootBoundary: u = 'viewport',
            elementContext: d = 'floating',
            altBoundary: f = !1,
            padding: p = 0,
          } = (0, E.ku)(t, e),
          h = (0, E.yd)(p),
          m = s[f ? ('floating' === d ? 'reference' : 'floating') : d],
          g = (0, E.JB)(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(m))) ||
                n
                  ? m
                  : m.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(s.floating))),
              boundary: l,
              rootBoundary: u,
              strategy: c,
            }),
          ),
          w =
            'floating' === d
              ? {
                  x: r,
                  y: o,
                  width: a.floating.width,
                  height: a.floating.height,
                }
              : a.reference,
          y = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(s.floating)),
          v = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
            (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          x = (0, E.JB)(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: s,
                  rect: w,
                  offsetParent: y,
                  strategy: c,
                })
              : w,
          );
        return {
          top: (g.top - x.top + h.top) / v.y,
          bottom: (x.bottom - g.bottom + h.bottom) / v.y,
          left: (g.left - x.left + h.left) / v.x,
          right: (x.right - g.right + h.right) / v.x,
        };
      }
      function S(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function N(e) {
        return E.mA.some((t) => e[t] >= 0);
      }
      var I = n(37317);
      function L(e) {
        const t = (0, I.Dx)(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = (0, I.Re)(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          s = (0, E.NM)(n) !== i || (0, E.NM)(r) !== a;
        return s && ((n = i), (r = a)), { width: n, height: r, $: s };
      }
      function K(e) {
        return (0, I.kK)(e) ? e : e.contextElement;
      }
      function W(e) {
        const t = K(e);
        if (!(0, I.Re)(t)) return (0, E.ze)(1);
        const n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = L(t);
        let a = (i ? (0, E.NM)(n.width) : n.width) / r,
          s = (i ? (0, E.NM)(n.height) : n.height) / o;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (s && Number.isFinite(s)) || (s = 1),
          { x: a, y: s }
        );
      }
      const V = (0, E.ze)(0);
      function B(e) {
        const t = (0, I.Jj)(e);
        return (0, I.Pf)() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : V;
      }
      function U(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = K(e);
        let a = (0, E.ze)(1);
        t && (r ? (0, I.kK)(r) && (a = W(r)) : (a = W(e)));
        const s = (function (e, t, n) {
          return (
            void 0 === t && (t = !1), !(!n || (t && n !== (0, I.Jj)(e))) && t
          );
        })(i, n, r)
          ? B(i)
          : (0, E.ze)(0);
        let c = (o.left + s.x) / a.x,
          l = (o.top + s.y) / a.y,
          u = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const e = (0, I.Jj)(i),
            t = r && (0, I.kK)(r) ? (0, I.Jj)(r) : r;
          let n = e,
            o = (0, I.wK)(n);
          for (; o && r && t !== n; ) {
            const e = W(o),
              t = o.getBoundingClientRect(),
              r = (0, I.Dx)(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (l *= e.y),
              (u *= e.x),
              (d *= e.y),
              (c += i),
              (l += a),
              (n = (0, I.Jj)(o)),
              (o = (0, I.wK)(n));
          }
        }
        return (0, E.JB)({ width: u, height: d, x: c, y: l });
      }
      function z(e, t) {
        const n = (0, I.Lw)(e).scrollLeft;
        return t ? t.left + n : U((0, I.tF)(e)).left + n;
      }
      function G(e, t, n) {
        void 0 === n && (n = !1);
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : z(e, r)),
          y: r.top + t.scrollTop,
        };
      }
      function H(e, t, n) {
        let r;
        if ('viewport' === t)
          r = (function (e, t) {
            const n = (0, I.Jj)(e),
              r = (0, I.tF)(e),
              o = n.visualViewport;
            let i = r.clientWidth,
              a = r.clientHeight,
              s = 0,
              c = 0;
            if (o) {
              (i = o.width), (a = o.height);
              const e = (0, I.Pf)();
              (!e || (e && 'fixed' === t)) &&
                ((s = o.offsetLeft), (c = o.offsetTop));
            }
            return { width: i, height: a, x: s, y: c };
          })(e, n);
        else if ('document' === t)
          r = (function (e) {
            const t = (0, I.tF)(e),
              n = (0, I.Lw)(e),
              r = e.ownerDocument.body,
              o = (0, E.Fp)(
                t.scrollWidth,
                t.clientWidth,
                r.scrollWidth,
                r.clientWidth,
              ),
              i = (0, E.Fp)(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight,
              );
            let a = -n.scrollLeft + z(e);
            const s = -n.scrollTop;
            return (
              'rtl' === (0, I.Dx)(r).direction &&
                (a += (0, E.Fp)(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: a, y: s }
            );
          })((0, I.tF)(e));
        else if ((0, I.kK)(t))
          r = (function (e, t) {
            const n = U(e, !0, 'fixed' === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = (0, I.Re)(e) ? W(e) : (0, E.ze)(1);
            return {
              width: e.clientWidth * i.x,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          const n = B(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return (0, E.JB)(r);
      }
      function $(e, t) {
        const n = (0, I.Ow)(e);
        return (
          !(n === t || !(0, I.kK)(n) || (0, I.Py)(n)) &&
          ('fixed' === (0, I.Dx)(n).position || $(n, t))
        );
      }
      function Z(e, t, n) {
        const r = (0, I.Re)(t),
          o = (0, I.tF)(t),
          i = 'fixed' === n,
          a = U(e, !0, i, t);
        let s = { scrollLeft: 0, scrollTop: 0 };
        const c = (0, E.ze)(0);
        if (r || (!r && !i))
          if (
            (('body' !== (0, I.wk)(t) || (0, I.ao)(o)) && (s = (0, I.Lw)(t)), r)
          ) {
            const e = U(t, !0, i, t);
            (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
          } else o && (c.x = z(o));
        const l = !o || r || i ? (0, E.ze)(0) : G(o, s);
        return {
          x: a.left + s.scrollLeft - c.x - l.x,
          y: a.top + s.scrollTop - c.y - l.y,
          width: a.width,
          height: a.height,
        };
      }
      function q(e) {
        return 'static' === (0, I.Dx)(e).position;
      }
      function J(e, t) {
        if (!(0, I.Re)(e) || 'fixed' === (0, I.Dx)(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return (0, I.tF)(e) === n && (n = n.ownerDocument.body), n;
      }
      function X(e, t) {
        const n = (0, I.Jj)(e);
        if ((0, I.tR)(e)) return n;
        if (!(0, I.Re)(e)) {
          let t = (0, I.Ow)(e);
          for (; t && !(0, I.Py)(t); ) {
            if ((0, I.kK)(t) && !q(t)) return t;
            t = (0, I.Ow)(t);
          }
          return n;
        }
        let r = J(e, t);
        for (; r && (0, I.Ze)(r) && q(r); ) r = J(r, t);
        return r && (0, I.Py)(r) && q(r) && !(0, I.hT)(r)
          ? n
          : r || (0, I.gQ)(e) || n;
      }
      const Q = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
          const i = 'fixed' === o,
            a = (0, I.tF)(r),
            s = !!t && (0, I.tR)(t.floating);
          if (r === a || (s && i)) return n;
          let c = { scrollLeft: 0, scrollTop: 0 },
            l = (0, E.ze)(1);
          const u = (0, E.ze)(0),
            d = (0, I.Re)(r);
          if (
            (d || (!d && !i)) &&
            (('body' !== (0, I.wk)(r) || (0, I.ao)(a)) && (c = (0, I.Lw)(r)),
            (0, I.Re)(r))
          ) {
            const e = U(r);
            (l = W(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop);
          }
          const f = !a || d || i ? (0, E.ze)(0) : G(a, c, !0);
          return {
            width: n.width * l.x,
            height: n.height * l.y,
            x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
            y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
          };
        },
        getDocumentElement: I.tF,
        getClippingRect: function (e) {
          let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
          const i = [
              ...('clippingAncestors' === n
                ? (0, I.tR)(t)
                  ? []
                  : (function (e, t) {
                      const n = t.get(e);
                      if (n) return n;
                      let r = (0, I.Kx)(e, [], !1).filter(
                          (e) => (0, I.kK)(e) && 'body' !== (0, I.wk)(e),
                        ),
                        o = null;
                      const i = 'fixed' === (0, I.Dx)(e).position;
                      let a = i ? (0, I.Ow)(e) : e;
                      for (; (0, I.kK)(a) && !(0, I.Py)(a); ) {
                        const t = (0, I.Dx)(a),
                          n = (0, I.hT)(a);
                        n || 'fixed' !== t.position || (o = null),
                          (
                            i
                              ? !n && !o
                              : (!n &&
                                  'static' === t.position &&
                                  o &&
                                  ['absolute', 'fixed'].includes(o.position)) ||
                                ((0, I.ao)(a) && !n && $(e, a))
                          )
                            ? (r = r.filter((e) => e !== a))
                            : (o = t),
                          (a = (0, I.Ow)(a));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                : [].concat(n)),
              r,
            ],
            a = i[0],
            s = i.reduce(
              (e, n) => {
                const r = H(t, n, o);
                return (
                  (e.top = (0, E.Fp)(r.top, e.top)),
                  (e.right = (0, E.VV)(r.right, e.right)),
                  (e.bottom = (0, E.VV)(r.bottom, e.bottom)),
                  (e.left = (0, E.Fp)(r.left, e.left)),
                  e
                );
              },
              H(t, a, o),
            );
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top,
          };
        },
        getOffsetParent: X,
        getElementRects: async function (e) {
          const t = this.getOffsetParent || X,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: Z(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        getClientRects: function (e) {
          return Array.from(e.getClientRects());
        },
        getDimensions: function (e) {
          const { width: t, height: n } = L(e);
          return { width: t, height: n };
        },
        getScale: W,
        isElement: I.kK,
        isRTL: function (e) {
          return 'rtl' === (0, I.Dx)(e).direction;
        },
      };
      function Y(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      function ee(e, t, n, r) {
        void 0 === r && (r = {});
        const {
            ancestorScroll: o = !0,
            ancestorResize: i = !0,
            elementResize: a = 'function' == typeof ResizeObserver,
            layoutShift: s = 'function' == typeof IntersectionObserver,
            animationFrame: c = !1,
          } = r,
          l = K(e),
          u = o || i ? [...(l ? (0, I.Kx)(l) : []), ...(0, I.Kx)(t)] : [];
        u.forEach((e) => {
          o && e.addEventListener('scroll', n, { passive: !0 }),
            i && e.addEventListener('resize', n);
        });
        const d =
          l && s
            ? (function (e, t) {
                let n,
                  r = null;
                const o = (0, I.tF)(e);
                function i() {
                  var e;
                  clearTimeout(n),
                    null == (e = r) || e.disconnect(),
                    (r = null);
                }
                return (
                  (function a(s, c) {
                    void 0 === s && (s = !1), void 0 === c && (c = 1), i();
                    const l = e.getBoundingClientRect(),
                      { left: u, top: d, width: f, height: p } = l;
                    if ((s || t(), !f || !p)) return;
                    const h = {
                      rootMargin:
                        -(0, E.GW)(d) +
                        'px ' +
                        -(0, E.GW)(o.clientWidth - (u + f)) +
                        'px ' +
                        -(0, E.GW)(o.clientHeight - (d + p)) +
                        'px ' +
                        -(0, E.GW)(u) +
                        'px',
                      threshold: (0, E.Fp)(0, (0, E.VV)(1, c)) || 1,
                    };
                    let m = !0;
                    function g(t) {
                      const r = t[0].intersectionRatio;
                      if (r !== c) {
                        if (!m) return a();
                        r
                          ? a(!1, r)
                          : (n = setTimeout(() => {
                              a(!1, 1e-7);
                            }, 1e3));
                      }
                      1 !== r || Y(l, e.getBoundingClientRect()) || a(),
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
              })(l, n)
            : null;
        let f,
          p = -1,
          h = null;
        a &&
          ((h = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === l &&
              h &&
              (h.unobserve(t),
              cancelAnimationFrame(p),
              (p = requestAnimationFrame(() => {
                var e;
                null == (e = h) || e.observe(t);
              }))),
              n();
          })),
          l && !c && h.observe(l),
          h.observe(t));
        let m = c ? U(e) : null;
        return (
          c &&
            (function t() {
              const r = U(e);
              m && !Y(m, r) && n();
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
              c && cancelAnimationFrame(f);
          }
        );
      }
      const te = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: 'offset',
              options: e,
              async fn(t) {
                var n, r;
                const { x: o, y: i, placement: a, middlewareData: s } = t,
                  c = await (async function (e, t) {
                    const { placement: n, platform: r, elements: o } = e,
                      i = await (null == r.isRTL
                        ? void 0
                        : r.isRTL(o.floating)),
                      a = (0, E.k3)(n),
                      s = (0, E.hp)(n),
                      c = 'y' === (0, E.Qq)(n),
                      l = ['left', 'top'].includes(a) ? -1 : 1,
                      u = i && c ? -1 : 1,
                      d = (0, E.ku)(t, e);
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
                      s &&
                        'number' == typeof h &&
                        (p = 'end' === s ? -1 * h : h),
                      c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
                    );
                  })(t, e);
                return a === (null == (n = s.offset) ? void 0 : n.placement) &&
                  null != (r = s.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + c.x, y: i + c.y, data: { ...c, placement: a } };
              },
            }
          );
        },
        ne = function (e) {
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
                    ...c
                  } = (0, E.ku)(e, t),
                  l = { x: n, y: r },
                  u = await F(t, c),
                  d = (0, E.Qq)((0, E.k3)(o)),
                  f = (0, E.Rn)(d);
                let p = l[f],
                  h = l[d];
                if (i) {
                  const e = 'y' === f ? 'bottom' : 'right',
                    t = p + u['y' === f ? 'top' : 'left'],
                    n = p - u[e];
                  p = (0, E.uZ)(t, p, n);
                }
                if (a) {
                  const e = 'y' === d ? 'bottom' : 'right',
                    t = h + u['y' === d ? 'top' : 'left'],
                    n = h - u[e];
                  h = (0, E.uZ)(t, h, n);
                }
                const m = s.fn({ ...t, [f]: p, [d]: h });
                return {
                  ...m,
                  data: { x: m.x - n, y: m.y - r, enabled: { [f]: i, [d]: a } },
                };
              },
            }
          );
        },
        re = function (e) {
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
                    platform: c,
                    elements: l,
                  } = t,
                  {
                    mainAxis: u = !0,
                    crossAxis: d = !0,
                    fallbackPlacements: f,
                    fallbackStrategy: p = 'bestFit',
                    fallbackAxisSideDirection: h = 'none',
                    flipAlignment: m = !0,
                    ...g
                  } = (0, E.ku)(e, t);
                if (null != (n = i.arrow) && n.alignmentOffset) return {};
                const w = (0, E.k3)(o),
                  y = (0, E.Qq)(s),
                  v = (0, E.k3)(s) === s,
                  x = await (null == c.isRTL ? void 0 : c.isRTL(l.floating)),
                  b = f || (v || !m ? [(0, E.pw)(s)] : (0, E.gy)(s)),
                  R = 'none' !== h;
                !f && R && b.push(...(0, E.KX)(s, m, h, x));
                const M = [s, ...b],
                  C = await F(t, g),
                  D = [];
                let _ = (null == (r = i.flip) ? void 0 : r.overflows) || [];
                if ((u && D.push(C[w]), d)) {
                  const e = (0, E.i8)(o, a, x);
                  D.push(C[e[0]], C[e[1]]);
                }
                if (
                  ((_ = [..._, { placement: o, overflows: D }]),
                  !D.every((e) => e <= 0))
                ) {
                  var P, O;
                  const e =
                      ((null == (P = i.flip) ? void 0 : P.index) || 0) + 1,
                    t = M[e];
                  if (t)
                    return {
                      data: { index: e, overflows: _ },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (O = _.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1],
                    )[0])
                      ? void 0
                      : O.placement;
                  if (!n)
                    switch (p) {
                      case 'bestFit': {
                        var j;
                        const e =
                          null ==
                          (j = _.filter((e) => {
                            if (R) {
                              const t = (0, E.Qq)(e.placement);
                              return t === y || 'y' === t;
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
        oe = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'size',
              options: e,
              async fn(t) {
                var n, r;
                const { placement: o, rects: i, platform: a, elements: s } = t,
                  { apply: c = () => {}, ...l } = (0, E.ku)(e, t),
                  u = await F(t, l),
                  d = (0, E.k3)(o),
                  f = (0, E.hp)(o),
                  p = 'y' === (0, E.Qq)(o),
                  { width: h, height: m } = i.floating;
                let g, w;
                'top' === d || 'bottom' === d
                  ? ((g = d),
                    (w =
                      f ===
                      ((await (null == a.isRTL ? void 0 : a.isRTL(s.floating)))
                        ? 'start'
                        : 'end')
                        ? 'left'
                        : 'right'))
                  : ((w = d), (g = 'end' === f ? 'top' : 'bottom'));
                const y = m - u.top - u.bottom,
                  v = h - u.left - u.right,
                  x = (0, E.VV)(m - u[g], y),
                  b = (0, E.VV)(h - u[w], v),
                  R = !t.middlewareData.shift;
                let M = x,
                  C = b;
                if (
                  (null != (n = t.middlewareData.shift) &&
                    n.enabled.x &&
                    (C = v),
                  null != (r = t.middlewareData.shift) &&
                    r.enabled.y &&
                    (M = y),
                  R && !f)
                ) {
                  const e = (0, E.Fp)(u.left, 0),
                    t = (0, E.Fp)(u.right, 0),
                    n = (0, E.Fp)(u.top, 0),
                    r = (0, E.Fp)(u.bottom, 0);
                  p
                    ? (C =
                        h -
                        2 *
                          (0 !== e || 0 !== t
                            ? e + t
                            : (0, E.Fp)(u.left, u.right)))
                    : (M =
                        m -
                        2 *
                          (0 !== n || 0 !== r
                            ? n + r
                            : (0, E.Fp)(u.top, u.bottom)));
                }
                await c({ ...t, availableWidth: C, availableHeight: M });
                const D = await a.getDimensions(s.floating);
                return h !== D.width || m !== D.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        },
        ie = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'hide',
              options: e,
              async fn(t) {
                const { rects: n } = t,
                  { strategy: r = 'referenceHidden', ...o } = (0, E.ku)(e, t);
                switch (r) {
                  case 'referenceHidden': {
                    const e = S(
                      await F(t, { ...o, elementContext: 'reference' }),
                      n.reference,
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: N(e),
                      },
                    };
                  }
                  case 'escaped': {
                    const e = S(
                      await F(t, { ...o, altBoundary: !0 }),
                      n.floating,
                    );
                    return { data: { escapedOffsets: e, escaped: N(e) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        },
        ae = (e) => ({
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
                middlewareData: c,
              } = t,
              { element: l, padding: u = 0 } = (0, E.ku)(e, t) || {};
            if (null == l) return {};
            const d = (0, E.yd)(u),
              f = { x: n, y: r },
              p = (0, E.Wh)(o),
              h = (0, E.I4)(p),
              m = await a.getDimensions(l),
              g = 'y' === p,
              w = g ? 'top' : 'left',
              y = g ? 'bottom' : 'right',
              v = g ? 'clientHeight' : 'clientWidth',
              x = i.reference[h] + i.reference[p] - f[p] - i.floating[h],
              b = f[p] - i.reference[p],
              R = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(l));
            let M = R ? R[v] : 0;
            (M && (await (null == a.isElement ? void 0 : a.isElement(R)))) ||
              (M = s.floating[v] || i.floating[h]);
            const C = x / 2 - b / 2,
              D = M / 2 - m[h] / 2 - 1,
              _ = (0, E.VV)(d[w], D),
              P = (0, E.VV)(d[y], D),
              O = _,
              j = M - m[h] - P,
              k = M / 2 - m[h] / 2 + C,
              A = (0, E.uZ)(O, k, j),
              T =
                !c.arrow &&
                null != (0, E.hp)(o) &&
                k !== A &&
                i.reference[h] / 2 - (k < O ? _ : P) - m[h] / 2 < 0,
              F = T ? (k < O ? k - O : k - j) : 0;
            return {
              [p]: f[p] + F,
              data: {
                [p]: A,
                centerOffset: k - A - F,
                ...(T && { alignmentOffset: F }),
              },
              reset: T,
            };
          },
        }),
        se = function (e) {
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
                    mainAxis: c = !0,
                    crossAxis: l = !0,
                  } = (0, E.ku)(e, t),
                  u = { x: n, y: r },
                  d = (0, E.Qq)(o),
                  f = (0, E.Rn)(d);
                let p = u[f],
                  h = u[d];
                const m = (0, E.ku)(s, t),
                  g =
                    'number' == typeof m
                      ? { mainAxis: m, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...m };
                if (c) {
                  const e = 'y' === f ? 'height' : 'width',
                    t = i.reference[f] - i.floating[e] + g.mainAxis,
                    n = i.reference[f] + i.reference[e] - g.mainAxis;
                  p < t ? (p = t) : p > n && (p = n);
                }
                if (l) {
                  var w, y;
                  const e = 'y' === f ? 'width' : 'height',
                    t = ['top', 'left'].includes((0, E.k3)(o)),
                    n =
                      i.reference[d] -
                      i.floating[e] +
                      ((t && (null == (w = a.offset) ? void 0 : w[d])) || 0) +
                      (t ? 0 : g.crossAxis),
                    r =
                      i.reference[d] +
                      i.reference[e] +
                      (t ? 0 : (null == (y = a.offset) ? void 0 : y[d]) || 0) -
                      (t ? g.crossAxis : 0);
                  h < n ? (h = n) : h > r && (h = r);
                }
                return { [f]: p, [d]: h };
              },
            }
          );
        },
        ce = (e, t, n) => {
          const r = new Map(),
            o = { platform: Q, ...n },
            i = { ...o.platform, _c: r };
          return (async (e, t, n) => {
            const {
                placement: r = 'bottom',
                strategy: o = 'absolute',
                middleware: i = [],
                platform: a,
              } = n,
              s = i.filter(Boolean),
              c = await (null == a.isRTL ? void 0 : a.isRTL(t));
            let l = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o,
              }),
              { x: u, y: d } = T(l, r, c),
              f = r,
              p = {},
              h = 0;
            for (let n = 0; n < s.length; n++) {
              const { name: i, fn: m } = s[n],
                {
                  x: g,
                  y: w,
                  data: y,
                  reset: v,
                } = await m({
                  x: u,
                  y: d,
                  initialPlacement: r,
                  placement: f,
                  strategy: o,
                  middlewareData: p,
                  rects: l,
                  platform: a,
                  elements: { reference: e, floating: t },
                });
              (u = null != g ? g : u),
                (d = null != w ? w : d),
                (p = { ...p, [i]: { ...p[i], ...y } }),
                v &&
                  h <= 50 &&
                  (h++,
                  'object' == typeof v &&
                    (v.placement && (f = v.placement),
                    v.rects &&
                      (l =
                        !0 === v.rects
                          ? await a.getElementRects({
                              reference: e,
                              floating: t,
                              strategy: o,
                            })
                          : v.rects),
                    ({ x: u, y: d } = T(l, f, c))),
                  (n = -1));
            }
            return { x: u, y: d, placement: f, strategy: o, middlewareData: p };
          })(e, t, { ...o, platform: i });
        };
      var le = 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect;
      function ue(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ('function' == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && 'object' == typeof e) {
          if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; 0 != r--; ) if (!ue(e[r], t[r])) return !1;
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
            if (('_owner' !== n || !e.$$typeof) && !ue(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function de(e) {
        if ('undefined' == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function fe(e, t) {
        const n = de(e);
        return Math.round(t * n) / n;
      }
      function pe(e) {
        const t = r.useRef(e);
        return (
          le(() => {
            t.current = e;
          }),
          t
        );
      }
      const he = (e) => ({
          name: 'arrow',
          options: e,
          fn(t) {
            const { element: n, padding: r } =
              'function' == typeof e ? e(t) : e;
            return n && ((o = n), {}.hasOwnProperty.call(o, 'current'))
              ? null != n.current
                ? ae({ element: n.current, padding: r }).fn(t)
                : {}
              : n
                ? ae({ element: n, padding: r }).fn(t)
                : {};
            var o;
          },
        }),
        me = (e, t) => ({ ...ne(e), options: [e, t] }),
        ge = (e, t) => ({ ...se(e), options: [e, t] }),
        we = (e, t) => ({ ...re(e), options: [e, t] }),
        ye = (e, t) => ({ ...oe(e), options: [e, t] }),
        ve = (e, t) => ({ ...ie(e), options: [e, t] }),
        xe = (e, t) => ({ ...he(e), options: [e, t] });
      var be = [
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
            i = r ? b : t;
          return (
            'undefined' != typeof window &&
              (window[Symbol.for('radix-ui')] = !0),
            (0, u.jsx)(i, { ...o, ref: n })
          );
        });
        return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
      }, {});
      var Re = r.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: o = 5, ...i } = e;
        return (0, u.jsx)(be.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: '0 0 30 10',
          preserveAspectRatio: 'none',
          children: e.asChild
            ? n
            : (0, u.jsx)('polygon', { points: '0,0 30,0 15,10' }),
        });
      });
      Re.displayName = 'Arrow';
      var Me = Re,
        Ce = n(79698),
        De = n(9981),
        _e = n(7546),
        Pe = 'Popper',
        [Oe, je] = (0, s.b)(Pe),
        [ke, Ae] = Oe(Pe),
        Ee = (e) => {
          const { __scopePopper: t, children: n } = e,
            [o, i] = r.useState(null);
          return (0, u.jsx)(ke, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n,
          });
        };
      Ee.displayName = Pe;
      var Te = 'PopperAnchor',
        Fe = r.forwardRef((e, t) => {
          const { __scopePopper: n, virtualRef: o, ...i } = e,
            a = Ae(Te, n),
            s = r.useRef(null),
            c = x(t, s);
          return (
            r.useEffect(() => {
              a.onAnchorChange(o?.current || s.current);
            }),
            o ? null : (0, u.jsx)(be.div, { ...i, ref: c })
          );
        });
      Fe.displayName = Te;
      var Se = 'PopperContent',
        [Ne, Ie] = Oe(Se),
        Le = r.forwardRef((e, t) => {
          const {
              __scopePopper: n,
              side: o = 'bottom',
              sideOffset: i = 0,
              align: a = 'center',
              alignOffset: s = 0,
              arrowPadding: c = 0,
              avoidCollisions: d = !0,
              collisionBoundary: f = [],
              collisionPadding: p = 0,
              sticky: h = 'partial',
              hideWhenDetached: m = !1,
              updatePositionStrategy: g = 'optimized',
              onPlaced: w,
              ...y
            } = e,
            v = Ae(Se, n),
            [b, R] = r.useState(null),
            M = x(t, (e) => R(e)),
            [C, D] = r.useState(null),
            _ = (0, _e.t)(C),
            P = _?.width ?? 0,
            O = _?.height ?? 0,
            j = o + ('center' !== a ? '-' + a : ''),
            k =
              'number' == typeof p
                ? p
                : { top: 0, right: 0, bottom: 0, left: 0, ...p },
            A = Array.isArray(f) ? f : [f],
            E = A.length > 0,
            T = { padding: k, boundary: A.filter(Be), altBoundary: E },
            {
              refs: F,
              floatingStyles: S,
              placement: N,
              isPositioned: I,
              middlewareData: L,
            } = (function (e) {
              void 0 === e && (e = {});
              const {
                  placement: t = 'bottom',
                  strategy: n = 'absolute',
                  middleware: o = [],
                  platform: i,
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
                [h, m] = r.useState(o);
              ue(h, o) || m(o);
              const [g, w] = r.useState(null),
                [y, v] = r.useState(null),
                x = r.useCallback((e) => {
                  e !== C.current && ((C.current = e), w(e));
                }, []),
                b = r.useCallback((e) => {
                  e !== D.current && ((D.current = e), v(e));
                }, []),
                R = a || g,
                M = s || y,
                C = r.useRef(null),
                D = r.useRef(null),
                _ = r.useRef(f),
                P = null != u,
                O = pe(u),
                j = pe(i),
                k = pe(d),
                A = r.useCallback(() => {
                  if (!C.current || !D.current) return;
                  const e = { placement: t, strategy: n, middleware: h };
                  j.current && (e.platform = j.current),
                    ce(C.current, D.current, e).then((e) => {
                      const t = { ...e, isPositioned: !1 !== k.current };
                      E.current &&
                        !ue(_.current, t) &&
                        ((_.current = t),
                        l.flushSync(() => {
                          p(t);
                        }));
                    });
                }, [h, t, n, j, k]);
              le(() => {
                !1 === d &&
                  _.current.isPositioned &&
                  ((_.current.isPositioned = !1),
                  p((e) => ({ ...e, isPositioned: !1 })));
              }, [d]);
              const E = r.useRef(!1);
              le(
                () => (
                  (E.current = !0),
                  () => {
                    E.current = !1;
                  }
                ),
                [],
              ),
                le(() => {
                  if ((R && (C.current = R), M && (D.current = M), R && M)) {
                    if (O.current) return O.current(R, M, A);
                    A();
                  }
                }, [R, M, A, O, P]);
              const T = r.useMemo(
                  () => ({
                    reference: C,
                    floating: D,
                    setReference: x,
                    setFloating: b,
                  }),
                  [x, b],
                ),
                F = r.useMemo(() => ({ reference: R, floating: M }), [R, M]),
                S = r.useMemo(() => {
                  const e = { position: n, left: 0, top: 0 };
                  if (!F.floating) return e;
                  const t = fe(F.floating, f.x),
                    r = fe(F.floating, f.y);
                  return c
                    ? {
                        ...e,
                        transform: 'translate(' + t + 'px, ' + r + 'px)',
                        ...(de(F.floating) >= 1.5 && {
                          willChange: 'transform',
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, c, F.floating, f.x, f.y]);
              return r.useMemo(
                () => ({
                  ...f,
                  update: A,
                  refs: T,
                  elements: F,
                  floatingStyles: S,
                }),
                [f, A, T, F, S],
              );
            })({
              strategy: 'fixed',
              placement: j,
              whileElementsMounted: (...e) =>
                ee(...e, { animationFrame: 'always' === g }),
              elements: { reference: v.anchor },
              middleware: [
                ((K = { mainAxis: i + O, alignmentAxis: s }),
                { ...te(K), options: [K, W] }),
                d &&
                  me({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: 'partial' === h ? ge() : void 0,
                    ...T,
                  }),
                d && we({ ...T }),
                ye({
                  ...T,
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
                C && xe({ element: C, padding: c }),
                Ue({ arrowWidth: P, arrowHeight: O }),
                m && ve({ strategy: 'referenceHidden', ...T }),
              ],
            });
          var K, W;
          const [V, B] = ze(N),
            U = (0, Ce.W)(w);
          (0, De.b)(() => {
            I && U?.();
          }, [I, U]);
          const z = L.arrow?.x,
            G = L.arrow?.y,
            H = 0 !== L.arrow?.centerOffset,
            [$, Z] = r.useState();
          return (
            (0, De.b)(() => {
              b && Z(window.getComputedStyle(b).zIndex);
            }, [b]),
            (0, u.jsx)('div', {
              ref: F.setFloating,
              'data-radix-popper-content-wrapper': '',
              style: {
                ...S,
                transform: I ? S.transform : 'translate(0, -200%)',
                minWidth: 'max-content',
                zIndex: $,
                '--radix-popper-transform-origin': [
                  L.transformOrigin?.x,
                  L.transformOrigin?.y,
                ].join(' '),
                ...(L.hide?.referenceHidden && {
                  visibility: 'hidden',
                  pointerEvents: 'none',
                }),
              },
              dir: e.dir,
              children: (0, u.jsx)(Ne, {
                scope: n,
                placedSide: V,
                onArrowChange: D,
                arrowX: z,
                arrowY: G,
                shouldHideArrow: H,
                children: (0, u.jsx)(be.div, {
                  'data-side': V,
                  'data-align': B,
                  ...y,
                  ref: M,
                  style: { ...y.style, animation: I ? void 0 : 'none' },
                }),
              }),
            })
          );
        });
      Le.displayName = Se;
      var Ke = 'PopperArrow',
        We = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
        Ve = r.forwardRef(function (e, t) {
          const { __scopePopper: n, ...r } = e,
            o = Ie(Ke, n),
            i = We[o.placedSide];
          return (0, u.jsx)('span', {
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
            children: (0, u.jsx)(Me, {
              ...r,
              ref: t,
              style: { ...r.style, display: 'block' },
            }),
          });
        });
      function Be(e) {
        return null !== e;
      }
      Ve.displayName = Ke;
      var Ue = (e) => ({
        name: 'transformOrigin',
        options: e,
        fn(t) {
          const { placement: n, rects: r, middlewareData: o } = t,
            i = 0 !== o.arrow?.centerOffset,
            a = i ? 0 : e.arrowWidth,
            s = i ? 0 : e.arrowHeight,
            [c, l] = ze(n),
            u = { start: '0%', center: '50%', end: '100%' }[l],
            d = (o.arrow?.x ?? 0) + a / 2,
            f = (o.arrow?.y ?? 0) + s / 2;
          let p = '',
            h = '';
          return (
            'bottom' === c
              ? ((p = i ? u : `${d}px`), (h = -s + 'px'))
              : 'top' === c
                ? ((p = i ? u : `${d}px`), (h = `${r.floating.height + s}px`))
                : 'right' === c
                  ? ((p = -s + 'px'), (h = i ? u : `${f}px`))
                  : 'left' === c &&
                    ((p = `${r.floating.width + s}px`), (h = i ? u : `${f}px`)),
            { data: { x: p, y: h } }
          );
        },
      });
      function ze(e) {
        const [t, n = 'center'] = e.split('-');
        return [t, n];
      }
      var Ge = Ee,
        He = Fe,
        $e = Le,
        Ze = Ve,
        qe = r.forwardRef((e, t) => {
          const { container: n, ...o } = e,
            [i, a] = r.useState(!1);
          (0, De.b)(() => a(!0), []);
          const s = n || (i && globalThis?.document?.body);
          return s
            ? l.createPortal((0, u.jsx)(be.div, { ...o, ref: t }), s)
            : null;
        });
      qe.displayName = 'Portal';
      var Je = (e) => {
        const { present: t, children: n } = e,
          o = (function (e) {
            const [t, n] = r.useState(),
              o = r.useRef({}),
              i = r.useRef(e),
              a = r.useRef('none'),
              s = e ? 'mounted' : 'unmounted',
              [c, l] = (function (e, t) {
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
                const e = Xe(o.current);
                a.current = 'mounted' === c ? e : 'none';
              }, [c]),
              (0, De.b)(() => {
                const t = o.current,
                  n = i.current;
                if (n !== e) {
                  const r = a.current,
                    o = Xe(t);
                  if (e) l('MOUNT');
                  else if ('none' === o || 'none' === t?.display) l('UNMOUNT');
                  else {
                    l(n && r !== o ? 'ANIMATION_OUT' : 'UNMOUNT');
                  }
                  i.current = e;
                }
              }, [e, l]),
              (0, De.b)(() => {
                if (t) {
                  let e;
                  const n = t.ownerDocument.defaultView ?? window,
                    r = (r) => {
                      const a = Xe(o.current).includes(r.animationName);
                      if (
                        r.target === t &&
                        a &&
                        (l('ANIMATION_END'), !i.current)
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
                      e.target === t && (a.current = Xe(o.current));
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
                l('ANIMATION_END');
              }, [t, l]),
              {
                isPresent: ['mounted', 'unmountSuspended'].includes(c),
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
          a = x(
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
      function Xe(e) {
        return e?.animationName || 'none';
      }
      Je.displayName = 'Presence';
      var Qe = 'rovingFocusGroup.onEntryFocus',
        Ye = { bubbles: !1, cancelable: !0 },
        et = 'RovingFocusGroup',
        [tt, nt, rt] = _(et),
        [ot, it] = (0, s.b)(et, [rt]),
        [at, st] = ot(et),
        ct = r.forwardRef((e, t) =>
          (0, u.jsx)(tt.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, u.jsx)(tt.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, u.jsx)(lt, { ...e, ref: t }),
            }),
          }),
        );
      ct.displayName = et;
      var lt = r.forwardRef((e, t) => {
          const {
              __scopeRovingFocusGroup: n,
              orientation: o,
              loop: i = !1,
              dir: a,
              currentTabStopId: s,
              defaultCurrentTabStopId: l,
              onCurrentTabStopIdChange: d,
              onEntryFocus: f,
              preventScrollOnEntryFocus: p = !1,
              ...h
            } = e,
            m = r.useRef(null),
            g = x(t, m),
            y = (0, P.gm)(a),
            [v = null, b] = (0, c.T)({ prop: s, defaultProp: l, onChange: d }),
            [R, M] = r.useState(!1),
            C = (0, Ce.W)(f),
            D = nt(n),
            _ = r.useRef(!1),
            [O, j] = r.useState(0);
          return (
            r.useEffect(() => {
              const e = m.current;
              if (e)
                return (
                  e.addEventListener(Qe, C), () => e.removeEventListener(Qe, C)
                );
            }, [C]),
            (0, u.jsx)(at, {
              scope: n,
              orientation: o,
              dir: y,
              loop: i,
              currentTabStopId: v,
              onItemFocus: r.useCallback((e) => b(e), [b]),
              onItemShiftTab: r.useCallback(() => M(!0), []),
              onFocusableItemAdd: r.useCallback(() => j((e) => e + 1), []),
              onFocusableItemRemove: r.useCallback(() => j((e) => e - 1), []),
              children: (0, u.jsx)(be.div, {
                tabIndex: R || 0 === O ? -1 : 0,
                'data-orientation': o,
                ...h,
                ref: g,
                style: { outline: 'none', ...e.style },
                onMouseDown: w(e.onMouseDown, () => {
                  _.current = !0;
                }),
                onFocus: w(e.onFocus, (e) => {
                  const t = !_.current;
                  if (e.target === e.currentTarget && t && !R) {
                    const t = new CustomEvent(Qe, Ye);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      const e = D().filter((e) => e.focusable);
                      pt(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === v),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        p,
                      );
                    }
                  }
                  _.current = !1;
                }),
                onBlur: w(e.onBlur, () => M(!1)),
              }),
            })
          );
        }),
        ut = 'RovingFocusGroupItem',
        dt = r.forwardRef((e, t) => {
          const {
              __scopeRovingFocusGroup: n,
              focusable: o = !0,
              active: i = !1,
              tabStopId: a,
              ...s
            } = e,
            c = (0, A.M)(),
            l = a || c,
            d = st(ut, n),
            f = d.currentTabStopId === l,
            p = nt(n),
            { onFocusableItemAdd: h, onFocusableItemRemove: m } = d;
          return (
            r.useEffect(() => {
              if (o) return h(), () => m();
            }, [o, h, m]),
            (0, u.jsx)(tt.ItemSlot, {
              scope: n,
              id: l,
              focusable: o,
              active: i,
              children: (0, u.jsx)(be.span, {
                tabIndex: f ? 0 : -1,
                'data-orientation': d.orientation,
                ...s,
                ref: t,
                onMouseDown: w(e.onMouseDown, (e) => {
                  o ? d.onItemFocus(l) : e.preventDefault();
                }),
                onFocus: w(e.onFocus, () => d.onItemFocus(l)),
                onKeyDown: w(e.onKeyDown, (e) => {
                  if ('Tab' === e.key && e.shiftKey)
                    return void d.onItemShiftTab();
                  if (e.target !== e.currentTarget) return;
                  const t = (function (e, t, n) {
                    const r = (function (e, t) {
                      return 'rtl' !== t
                        ? e
                        : 'ArrowLeft' === e
                          ? 'ArrowRight'
                          : 'ArrowRight' === e
                            ? 'ArrowLeft'
                            : e;
                    })(e.key, n);
                    return ('vertical' === t &&
                      ['ArrowLeft', 'ArrowRight'].includes(r)) ||
                      ('horizontal' === t &&
                        ['ArrowUp', 'ArrowDown'].includes(r))
                      ? void 0
                      : ft[r];
                  })(e, d.orientation, d.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let o = p()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ('last' === t) o.reverse();
                    else if ('prev' === t || 'next' === t) {
                      'prev' === t && o.reverse();
                      const i = o.indexOf(e.currentTarget);
                      o = d.loop
                        ? ((r = i + 1),
                          (n = o).map((e, t) => n[(r + t) % n.length]))
                        : o.slice(i + 1);
                    }
                    setTimeout(() => pt(o));
                  }
                  var n, r;
                }),
              }),
            })
          );
        });
      dt.displayName = ut;
      var ft = {
        ArrowLeft: 'prev',
        ArrowUp: 'prev',
        ArrowRight: 'next',
        ArrowDown: 'next',
        PageUp: 'first',
        Home: 'first',
        PageDown: 'last',
        End: 'last',
      };
      function pt(e, t = !1) {
        const n = document.activeElement;
        for (const r of e) {
          if (r === n) return;
          if ((r.focus({ preventScroll: t }), document.activeElement !== n))
            return;
        }
      }
      var ht = ct,
        mt = dt,
        gt = n(23541),
        wt = n(71930),
        yt = ['Enter', ' '],
        vt = ['ArrowUp', 'PageDown', 'End'],
        xt = ['ArrowDown', 'PageUp', 'Home', ...vt],
        bt = { ltr: [...yt, 'ArrowRight'], rtl: [...yt, 'ArrowLeft'] },
        Rt = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
        Mt = 'Menu',
        [Ct, Dt, _t] = _(Mt),
        [Pt, Ot] = (0, s.b)(Mt, [_t, je, it]),
        jt = je(),
        kt = it(),
        [At, Et] = Pt(Mt),
        [Tt, Ft] = Pt(Mt),
        St = (e) => {
          const {
              __scopeMenu: t,
              open: n = !1,
              children: o,
              dir: i,
              onOpenChange: a,
              modal: s = !0,
            } = e,
            c = jt(t),
            [l, d] = r.useState(null),
            f = r.useRef(!1),
            p = (0, Ce.W)(a),
            h = (0, P.gm)(i);
          return (
            r.useEffect(() => {
              const e = () => {
                  (f.current = !0),
                    document.addEventListener('pointerdown', t, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener('pointermove', t, {
                      capture: !0,
                      once: !0,
                    });
                },
                t = () => (f.current = !1);
              return (
                document.addEventListener('keydown', e, { capture: !0 }),
                () => {
                  document.removeEventListener('keydown', e, { capture: !0 }),
                    document.removeEventListener('pointerdown', t, {
                      capture: !0,
                    }),
                    document.removeEventListener('pointermove', t, {
                      capture: !0,
                    });
                }
              );
            }, []),
            (0, u.jsx)(Ge, {
              ...c,
              children: (0, u.jsx)(At, {
                scope: t,
                open: n,
                onOpenChange: p,
                content: l,
                onContentChange: d,
                children: (0, u.jsx)(Tt, {
                  scope: t,
                  onClose: r.useCallback(() => p(!1), [p]),
                  isUsingKeyboardRef: f,
                  dir: h,
                  modal: s,
                  children: o,
                }),
              }),
            })
          );
        };
      St.displayName = Mt;
      var Nt = r.forwardRef((e, t) => {
        const { __scopeMenu: n, ...r } = e,
          o = jt(n);
        return (0, u.jsx)(He, { ...o, ...r, ref: t });
      });
      Nt.displayName = 'MenuAnchor';
      var It = 'MenuPortal',
        [Lt, Kt] = Pt(It, { forceMount: void 0 }),
        Wt = (e) => {
          const {
              __scopeMenu: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            i = Et(It, t);
          return (0, u.jsx)(Lt, {
            scope: t,
            forceMount: n,
            children: (0, u.jsx)(Je, {
              present: n || i.open,
              children: (0, u.jsx)(qe, {
                asChild: !0,
                container: o,
                children: r,
              }),
            }),
          });
        };
      Wt.displayName = It;
      var Vt = 'MenuContent',
        [Bt, Ut] = Pt(Vt),
        zt = r.forwardRef((e, t) => {
          const n = Kt(Vt, e.__scopeMenu),
            { forceMount: r = n.forceMount, ...o } = e,
            i = Et(Vt, e.__scopeMenu),
            a = Ft(Vt, e.__scopeMenu);
          return (0, u.jsx)(Ct.Provider, {
            scope: e.__scopeMenu,
            children: (0, u.jsx)(Je, {
              present: r || i.open,
              children: (0, u.jsx)(Ct.Slot, {
                scope: e.__scopeMenu,
                children: a.modal
                  ? (0, u.jsx)(Gt, { ...o, ref: t })
                  : (0, u.jsx)(Ht, { ...o, ref: t }),
              }),
            }),
          });
        }),
        Gt = r.forwardRef((e, t) => {
          const n = Et(Vt, e.__scopeMenu),
            o = r.useRef(null),
            i = x(t, o);
          return (
            r.useEffect(() => {
              const e = o.current;
              if (e) return (0, gt.Ry)(e);
            }, []),
            (0, u.jsx)($t, {
              ...e,
              ref: i,
              trapFocus: n.open,
              disableOutsidePointerEvents: n.open,
              disableOutsideScroll: !0,
              onFocusOutside: w(e.onFocusOutside, (e) => e.preventDefault(), {
                checkForDefaultPrevented: !1,
              }),
              onDismiss: () => n.onOpenChange(!1),
            })
          );
        }),
        Ht = r.forwardRef((e, t) => {
          const n = Et(Vt, e.__scopeMenu);
          return (0, u.jsx)($t, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => n.onOpenChange(!1),
          });
        }),
        $t = r.forwardRef((e, t) => {
          const {
              __scopeMenu: n,
              loop: o = !1,
              trapFocus: i,
              onOpenAutoFocus: a,
              onCloseAutoFocus: s,
              disableOutsidePointerEvents: c,
              onEntryFocus: l,
              onEscapeKeyDown: d,
              onPointerDownOutside: f,
              onFocusOutside: p,
              onInteractOutside: h,
              onDismiss: m,
              disableOutsideScroll: g,
              ...y
            } = e,
            v = Et(Vt, n),
            R = Ft(Vt, n),
            M = jt(n),
            C = kt(n),
            D = Dt(n),
            [_, P] = r.useState(null),
            A = r.useRef(null),
            E = x(t, A, v.onContentChange),
            T = r.useRef(0),
            F = r.useRef(''),
            S = r.useRef(0),
            N = r.useRef(null),
            I = r.useRef('right'),
            L = r.useRef(0),
            K = g ? wt.Z : r.Fragment,
            W = g ? { as: b, allowPinchZoom: !0 } : void 0,
            V = (e) => {
              const t = F.current + e,
                n = D().filter((e) => !e.disabled),
                r = document.activeElement,
                o = n.find((e) => e.ref.current === r)?.textValue,
                i = (function (e, t, n) {
                  const r =
                      t.length > 1 && Array.from(t).every((e) => e === t[0]),
                    o = r ? t[0] : t,
                    i = n ? e.indexOf(n) : -1;
                  let a =
                    ((s = e),
                    (c = Math.max(i, 0)),
                    s.map((e, t) => s[(c + t) % s.length]));
                  var s, c;
                  1 === o.length && (a = a.filter((e) => e !== n));
                  const l = a.find((e) =>
                    e.toLowerCase().startsWith(o.toLowerCase()),
                  );
                  return l !== n ? l : void 0;
                })(
                  n.map((e) => e.textValue),
                  t,
                  o,
                ),
                a = n.find((e) => e.textValue === i)?.ref.current;
              !(function e(t) {
                (F.current = t),
                  window.clearTimeout(T.current),
                  '' !== t && (T.current = window.setTimeout(() => e(''), 1e3));
              })(t),
                a && setTimeout(() => a.focus());
            };
          r.useEffect(() => () => window.clearTimeout(T.current), []),
            (0, j.EW)();
          const B = r.useCallback(
            (e) =>
              I.current === N.current?.side &&
              (function (e, t) {
                if (!t) return !1;
                const n = { x: e.clientX, y: e.clientY };
                return (function (e, t) {
                  const { x: n, y: r } = e;
                  let o = !1;
                  for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                    const a = t[e].x,
                      s = t[e].y,
                      c = t[i].x,
                      l = t[i].y;
                    s > r != l > r &&
                      n < ((c - a) * (r - s)) / (l - s) + a &&
                      (o = !o);
                  }
                  return o;
                })(n, t);
              })(e, N.current?.area),
            [],
          );
          return (0, u.jsx)(Bt, {
            scope: n,
            searchRef: F,
            onItemEnter: r.useCallback(
              (e) => {
                B(e) && e.preventDefault();
              },
              [B],
            ),
            onItemLeave: r.useCallback(
              (e) => {
                B(e) || (A.current?.focus(), P(null));
              },
              [B],
            ),
            onTriggerLeave: r.useCallback(
              (e) => {
                B(e) && e.preventDefault();
              },
              [B],
            ),
            pointerGraceTimerRef: S,
            onPointerGraceIntentChange: r.useCallback((e) => {
              N.current = e;
            }, []),
            children: (0, u.jsx)(K, {
              ...W,
              children: (0, u.jsx)(k.M, {
                asChild: !0,
                trapped: i,
                onMountAutoFocus: w(a, (e) => {
                  e.preventDefault(), A.current?.focus({ preventScroll: !0 });
                }),
                onUnmountAutoFocus: s,
                children: (0, u.jsx)(O.XB, {
                  asChild: !0,
                  disableOutsidePointerEvents: c,
                  onEscapeKeyDown: d,
                  onPointerDownOutside: f,
                  onFocusOutside: p,
                  onInteractOutside: h,
                  onDismiss: m,
                  children: (0, u.jsx)(ht, {
                    asChild: !0,
                    ...C,
                    dir: R.dir,
                    orientation: 'vertical',
                    loop: o,
                    currentTabStopId: _,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: w(l, (e) => {
                      R.isUsingKeyboardRef.current || e.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: (0, u.jsx)($e, {
                      role: 'menu',
                      'aria-orientation': 'vertical',
                      'data-state': Rn(v.open),
                      'data-radix-menu-content': '',
                      dir: R.dir,
                      ...M,
                      ...y,
                      ref: E,
                      style: { outline: 'none', ...y.style },
                      onKeyDown: w(y.onKeyDown, (e) => {
                        const t =
                            e.target.closest('[data-radix-menu-content]') ===
                            e.currentTarget,
                          n = e.ctrlKey || e.altKey || e.metaKey,
                          r = 1 === e.key.length;
                        t &&
                          ('Tab' === e.key && e.preventDefault(),
                          !n && r && V(e.key));
                        const o = A.current;
                        if (e.target !== o) return;
                        if (!xt.includes(e.key)) return;
                        e.preventDefault();
                        const i = D()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        vt.includes(e.key) && i.reverse(),
                          (function (e) {
                            const t = document.activeElement;
                            for (const n of e) {
                              if (n === t) return;
                              if ((n.focus(), document.activeElement !== t))
                                return;
                            }
                          })(i);
                      }),
                      onBlur: w(e.onBlur, (e) => {
                        e.currentTarget.contains(e.target) ||
                          (window.clearTimeout(T.current), (F.current = ''));
                      }),
                      onPointerMove: w(
                        e.onPointerMove,
                        Dn((e) => {
                          const t = e.target,
                            n = L.current !== e.clientX;
                          if (e.currentTarget.contains(t) && n) {
                            const t = e.clientX > L.current ? 'right' : 'left';
                            (I.current = t), (L.current = e.clientX);
                          }
                        }),
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      zt.displayName = Vt;
      var Zt = r.forwardRef((e, t) => {
        const { __scopeMenu: n, ...r } = e;
        return (0, u.jsx)(be.div, { role: 'group', ...r, ref: t });
      });
      Zt.displayName = 'MenuGroup';
      var qt = r.forwardRef((e, t) => {
        const { __scopeMenu: n, ...r } = e;
        return (0, u.jsx)(be.div, { ...r, ref: t });
      });
      qt.displayName = 'MenuLabel';
      var Jt = 'MenuItem',
        Xt = 'menu.itemSelect',
        Qt = r.forwardRef((e, t) => {
          const { disabled: n = !1, onSelect: o, ...i } = e,
            a = r.useRef(null),
            s = Ft(Jt, e.__scopeMenu),
            c = Ut(Jt, e.__scopeMenu),
            d = x(t, a),
            f = r.useRef(!1);
          return (0, u.jsx)(Yt, {
            ...i,
            ref: d,
            disabled: n,
            onClick: w(e.onClick, () => {
              const e = a.current;
              if (!n && e) {
                const n = new CustomEvent(Xt, { bubbles: !0, cancelable: !0 });
                e.addEventListener(Xt, (e) => o?.(e), { once: !0 }),
                  (r = n),
                  (t = e) && l.flushSync(() => t.dispatchEvent(r)),
                  n.defaultPrevented ? (f.current = !1) : s.onClose();
              }
              var t, r;
            }),
            onPointerDown: (t) => {
              e.onPointerDown?.(t), (f.current = !0);
            },
            onPointerUp: w(e.onPointerUp, (e) => {
              f.current || e.currentTarget?.click();
            }),
            onKeyDown: w(e.onKeyDown, (e) => {
              const t = '' !== c.searchRef.current;
              n ||
                (t && ' ' === e.key) ||
                (yt.includes(e.key) &&
                  (e.currentTarget.click(), e.preventDefault()));
            }),
          });
        });
      Qt.displayName = Jt;
      var Yt = r.forwardRef((e, t) => {
          const { __scopeMenu: n, disabled: o = !1, textValue: i, ...a } = e,
            s = Ut(Jt, n),
            c = kt(n),
            l = r.useRef(null),
            d = x(t, l),
            [f, p] = r.useState(!1),
            [h, m] = r.useState('');
          return (
            r.useEffect(() => {
              const e = l.current;
              e && m((e.textContent ?? '').trim());
            }, [a.children]),
            (0, u.jsx)(Ct.ItemSlot, {
              scope: n,
              disabled: o,
              textValue: i ?? h,
              children: (0, u.jsx)(mt, {
                asChild: !0,
                ...c,
                focusable: !o,
                children: (0, u.jsx)(be.div, {
                  role: 'menuitem',
                  'data-highlighted': f ? '' : void 0,
                  'aria-disabled': o || void 0,
                  'data-disabled': o ? '' : void 0,
                  ...a,
                  ref: d,
                  onPointerMove: w(
                    e.onPointerMove,
                    Dn((e) => {
                      if (o) s.onItemLeave(e);
                      else if ((s.onItemEnter(e), !e.defaultPrevented)) {
                        e.currentTarget.focus({ preventScroll: !0 });
                      }
                    }),
                  ),
                  onPointerLeave: w(
                    e.onPointerLeave,
                    Dn((e) => s.onItemLeave(e)),
                  ),
                  onFocus: w(e.onFocus, () => p(!0)),
                  onBlur: w(e.onBlur, () => p(!1)),
                }),
              }),
            })
          );
        }),
        en = r.forwardRef((e, t) => {
          const { checked: n = !1, onCheckedChange: r, ...o } = e;
          return (0, u.jsx)(ln, {
            scope: e.__scopeMenu,
            checked: n,
            children: (0, u.jsx)(Qt, {
              role: 'menuitemcheckbox',
              'aria-checked': Mn(n) ? 'mixed' : n,
              ...o,
              ref: t,
              'data-state': Cn(n),
              onSelect: w(o.onSelect, () => r?.(!!Mn(n) || !n), {
                checkForDefaultPrevented: !1,
              }),
            }),
          });
        });
      en.displayName = 'MenuCheckboxItem';
      var tn = 'MenuRadioGroup',
        [nn, rn] = Pt(tn, { value: void 0, onValueChange: () => {} }),
        on = r.forwardRef((e, t) => {
          const { value: n, onValueChange: r, ...o } = e,
            i = (0, Ce.W)(r);
          return (0, u.jsx)(nn, {
            scope: e.__scopeMenu,
            value: n,
            onValueChange: i,
            children: (0, u.jsx)(Zt, { ...o, ref: t }),
          });
        });
      on.displayName = tn;
      var an = 'MenuRadioItem',
        sn = r.forwardRef((e, t) => {
          const { value: n, ...r } = e,
            o = rn(an, e.__scopeMenu),
            i = n === o.value;
          return (0, u.jsx)(ln, {
            scope: e.__scopeMenu,
            checked: i,
            children: (0, u.jsx)(Qt, {
              role: 'menuitemradio',
              'aria-checked': i,
              ...r,
              ref: t,
              'data-state': Cn(i),
              onSelect: w(r.onSelect, () => o.onValueChange?.(n), {
                checkForDefaultPrevented: !1,
              }),
            }),
          });
        });
      sn.displayName = an;
      var cn = 'MenuItemIndicator',
        [ln, un] = Pt(cn, { checked: !1 }),
        dn = r.forwardRef((e, t) => {
          const { __scopeMenu: n, forceMount: r, ...o } = e,
            i = un(cn, n);
          return (0, u.jsx)(Je, {
            present: r || Mn(i.checked) || !0 === i.checked,
            children: (0, u.jsx)(be.span, {
              ...o,
              ref: t,
              'data-state': Cn(i.checked),
            }),
          });
        });
      dn.displayName = cn;
      var fn = r.forwardRef((e, t) => {
        const { __scopeMenu: n, ...r } = e;
        return (0, u.jsx)(be.div, {
          role: 'separator',
          'aria-orientation': 'horizontal',
          ...r,
          ref: t,
        });
      });
      fn.displayName = 'MenuSeparator';
      var pn = r.forwardRef((e, t) => {
        const { __scopeMenu: n, ...r } = e,
          o = jt(n);
        return (0, u.jsx)(Ze, { ...o, ...r, ref: t });
      });
      pn.displayName = 'MenuArrow';
      var hn = 'MenuSub',
        [mn, gn] = Pt(hn),
        wn = (e) => {
          const {
              __scopeMenu: t,
              children: n,
              open: o = !1,
              onOpenChange: i,
            } = e,
            a = Et(hn, t),
            s = jt(t),
            [c, l] = r.useState(null),
            [d, f] = r.useState(null),
            p = (0, Ce.W)(i);
          return (
            r.useEffect(
              () => (!1 === a.open && p(!1), () => p(!1)),
              [a.open, p],
            ),
            (0, u.jsx)(Ge, {
              ...s,
              children: (0, u.jsx)(At, {
                scope: t,
                open: o,
                onOpenChange: p,
                content: d,
                onContentChange: f,
                children: (0, u.jsx)(mn, {
                  scope: t,
                  contentId: (0, A.M)(),
                  triggerId: (0, A.M)(),
                  trigger: c,
                  onTriggerChange: l,
                  children: n,
                }),
              }),
            })
          );
        };
      wn.displayName = hn;
      var yn = 'MenuSubTrigger',
        vn = r.forwardRef((e, t) => {
          const n = Et(yn, e.__scopeMenu),
            o = Ft(yn, e.__scopeMenu),
            i = gn(yn, e.__scopeMenu),
            a = Ut(yn, e.__scopeMenu),
            s = r.useRef(null),
            { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = a,
            d = { __scopeMenu: e.__scopeMenu },
            f = r.useCallback(() => {
              s.current && window.clearTimeout(s.current), (s.current = null);
            }, []);
          return (
            r.useEffect(() => f, [f]),
            r.useEffect(() => {
              const e = c.current;
              return () => {
                window.clearTimeout(e), l(null);
              };
            }, [c, l]),
            (0, u.jsx)(Nt, {
              asChild: !0,
              ...d,
              children: (0, u.jsx)(Yt, {
                id: i.triggerId,
                'aria-haspopup': 'menu',
                'aria-expanded': n.open,
                'aria-controls': i.contentId,
                'data-state': Rn(n.open),
                ...e,
                ref: v(t, i.onTriggerChange),
                onClick: (t) => {
                  e.onClick?.(t),
                    e.disabled ||
                      t.defaultPrevented ||
                      (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
                },
                onPointerMove: w(
                  e.onPointerMove,
                  Dn((t) => {
                    a.onItemEnter(t),
                      t.defaultPrevented ||
                        e.disabled ||
                        n.open ||
                        s.current ||
                        (a.onPointerGraceIntentChange(null),
                        (s.current = window.setTimeout(() => {
                          n.onOpenChange(!0), f();
                        }, 100)));
                  }),
                ),
                onPointerLeave: w(
                  e.onPointerLeave,
                  Dn((e) => {
                    f();
                    const t = n.content?.getBoundingClientRect();
                    if (t) {
                      const r = n.content?.dataset.side,
                        o = 'right' === r,
                        i = o ? -5 : 5,
                        s = t[o ? 'left' : 'right'],
                        l = t[o ? 'right' : 'left'];
                      a.onPointerGraceIntentChange({
                        area: [
                          { x: e.clientX + i, y: e.clientY },
                          { x: s, y: t.top },
                          { x: l, y: t.top },
                          { x: l, y: t.bottom },
                          { x: s, y: t.bottom },
                        ],
                        side: r,
                      }),
                        window.clearTimeout(c.current),
                        (c.current = window.setTimeout(
                          () => a.onPointerGraceIntentChange(null),
                          300,
                        ));
                    } else {
                      if ((a.onTriggerLeave(e), e.defaultPrevented)) return;
                      a.onPointerGraceIntentChange(null);
                    }
                  }),
                ),
                onKeyDown: w(e.onKeyDown, (t) => {
                  const r = '' !== a.searchRef.current;
                  e.disabled ||
                    (r && ' ' === t.key) ||
                    (bt[o.dir].includes(t.key) &&
                      (n.onOpenChange(!0),
                      n.content?.focus(),
                      t.preventDefault()));
                }),
              }),
            })
          );
        });
      vn.displayName = yn;
      var xn = 'MenuSubContent',
        bn = r.forwardRef((e, t) => {
          const n = Kt(Vt, e.__scopeMenu),
            { forceMount: o = n.forceMount, ...i } = e,
            a = Et(Vt, e.__scopeMenu),
            s = Ft(Vt, e.__scopeMenu),
            c = gn(xn, e.__scopeMenu),
            l = r.useRef(null),
            d = x(t, l);
          return (0, u.jsx)(Ct.Provider, {
            scope: e.__scopeMenu,
            children: (0, u.jsx)(Je, {
              present: o || a.open,
              children: (0, u.jsx)(Ct.Slot, {
                scope: e.__scopeMenu,
                children: (0, u.jsx)($t, {
                  id: c.contentId,
                  'aria-labelledby': c.triggerId,
                  ...i,
                  ref: d,
                  align: 'start',
                  side: 'rtl' === s.dir ? 'left' : 'right',
                  disableOutsidePointerEvents: !1,
                  disableOutsideScroll: !1,
                  trapFocus: !1,
                  onOpenAutoFocus: (e) => {
                    s.isUsingKeyboardRef.current && l.current?.focus(),
                      e.preventDefault();
                  },
                  onCloseAutoFocus: (e) => e.preventDefault(),
                  onFocusOutside: w(e.onFocusOutside, (e) => {
                    e.target !== c.trigger && a.onOpenChange(!1);
                  }),
                  onEscapeKeyDown: w(e.onEscapeKeyDown, (e) => {
                    s.onClose(), e.preventDefault();
                  }),
                  onKeyDown: w(e.onKeyDown, (e) => {
                    const t = e.currentTarget.contains(e.target),
                      n = Rt[s.dir].includes(e.key);
                    t &&
                      n &&
                      (a.onOpenChange(!1),
                      c.trigger?.focus(),
                      e.preventDefault());
                  }),
                }),
              }),
            }),
          });
        });
      function Rn(e) {
        return e ? 'open' : 'closed';
      }
      function Mn(e) {
        return 'indeterminate' === e;
      }
      function Cn(e) {
        return Mn(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
      }
      function Dn(e) {
        return (t) => ('mouse' === t.pointerType ? e(t) : void 0);
      }
      bn.displayName = xn;
      var _n = St,
        Pn = Nt,
        On = Wt,
        jn = zt,
        kn = Zt,
        An = qt,
        En = Qt,
        Tn = en,
        Fn = on,
        Sn = sn,
        Nn = dn,
        In = fn,
        Ln = pn,
        Kn = wn,
        Wn = vn,
        Vn = bn,
        Bn = 'DropdownMenu',
        [Un, zn] = (0, s.b)(Bn, [Ot]),
        Gn = Ot(),
        [Hn, $n] = Un(Bn),
        Zn = (e) => {
          const {
              __scopeDropdownMenu: t,
              children: n,
              dir: o,
              open: i,
              defaultOpen: a,
              onOpenChange: s,
              modal: l = !0,
            } = e,
            d = Gn(t),
            f = r.useRef(null),
            [p = !1, h] = (0, c.T)({ prop: i, defaultProp: a, onChange: s });
          return (0, u.jsx)(Hn, {
            scope: t,
            triggerId: (0, A.M)(),
            triggerRef: f,
            contentId: (0, A.M)(),
            open: p,
            onOpenChange: h,
            onOpenToggle: r.useCallback(() => h((e) => !e), [h]),
            modal: l,
            children: (0, u.jsx)(_n, {
              ...d,
              open: p,
              onOpenChange: h,
              dir: o,
              modal: l,
              children: n,
            }),
          });
        };
      Zn.displayName = Bn;
      var qn = 'DropdownMenuTrigger',
        Jn = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e,
            s = $n(qn, n),
            c = Gn(n);
          return (0, u.jsx)(Pn, {
            asChild: !0,
            ...c,
            children: (0, u.jsx)(g.button, {
              type: 'button',
              id: s.triggerId,
              'aria-haspopup': 'menu',
              'aria-expanded': s.open,
              'aria-controls': s.open ? s.contentId : void 0,
              'data-state': s.open ? 'open' : 'closed',
              'data-disabled': r ? '' : void 0,
              disabled: r,
              ...i,
              ref: a(t, s.triggerRef),
              onPointerDown: o(e.onPointerDown, (e) => {
                r ||
                  0 !== e.button ||
                  !1 !== e.ctrlKey ||
                  (s.onOpenToggle(), s.open || e.preventDefault());
              }),
              onKeyDown: o(e.onKeyDown, (e) => {
                r ||
                  (['Enter', ' '].includes(e.key) && s.onOpenToggle(),
                  'ArrowDown' === e.key && s.onOpenChange(!0),
                  ['Enter', ' ', 'ArrowDown'].includes(e.key) &&
                    e.preventDefault());
              }),
            }),
          });
        });
      Jn.displayName = qn;
      var Xn = (e) => {
        const { __scopeDropdownMenu: t, ...n } = e,
          r = Gn(t);
        return (0, u.jsx)(On, { ...r, ...n });
      };
      Xn.displayName = 'DropdownMenuPortal';
      var Qn = 'DropdownMenuContent',
        Yn = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...i } = e,
            a = $n(Qn, n),
            s = Gn(n),
            c = r.useRef(!1);
          return (0, u.jsx)(jn, {
            id: a.contentId,
            'aria-labelledby': a.triggerId,
            ...s,
            ...i,
            ref: t,
            onCloseAutoFocus: o(e.onCloseAutoFocus, (e) => {
              c.current || a.triggerRef.current?.focus(),
                (c.current = !1),
                e.preventDefault();
            }),
            onInteractOutside: o(e.onInteractOutside, (e) => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey,
                r = 2 === t.button || n;
              (a.modal && !r) || (c.current = !0);
            }),
            style: {
              ...e.style,
              '--radix-dropdown-menu-content-transform-origin':
                'var(--radix-popper-transform-origin)',
              '--radix-dropdown-menu-content-available-width':
                'var(--radix-popper-available-width)',
              '--radix-dropdown-menu-content-available-height':
                'var(--radix-popper-available-height)',
              '--radix-dropdown-menu-trigger-width':
                'var(--radix-popper-anchor-width)',
              '--radix-dropdown-menu-trigger-height':
                'var(--radix-popper-anchor-height)',
            },
          });
        });
      Yn.displayName = Qn;
      var er = r.forwardRef((e, t) => {
        const { __scopeDropdownMenu: n, ...r } = e,
          o = Gn(n);
        return (0, u.jsx)(kn, { ...o, ...r, ref: t });
      });
      er.displayName = 'DropdownMenuGroup';
      var tr = r.forwardRef((e, t) => {
        const { __scopeDropdownMenu: n, ...r } = e,
          o = Gn(n);
        return (0, u.jsx)(An, { ...o, ...r, ref: t });
      });
      tr.displayName = 'DropdownMenuLabel';
      var nr = r.forwardRef((e, t) => {
        const { __scopeDropdownMenu: n, ...r } = e,
          o = Gn(n);
        return (0, u.jsx)(En, { ...o, ...r, ref: t });
      });
      nr.displayName = 'DropdownMenuItem';
      var rr = r.forwardRef((e, t) => {
        const { __scopeDropdownMenu: n, ...r } = e,
          o = Gn(n);
        return (0, u.jsx)(Tn, { ...o, ...r, ref: t });
      });
      rr.displayName = 'DropdownMenuCheckboxItem';
      var or = r.forwardRef((e, t) => {
        const { __scopeDropdownMenu: n, ...r } = e,
          o = Gn(n);
        return (0, u.jsx)(Fn, { ...o, ...r, ref: t });
      });
      or.displayName = 'DropdownMenuRadioGroup';
      var ir = r.forwardRef((e, t) => {
        const { __scopeDropdownMenu: n, ...r } = e,
          o = Gn(n);
        return (0, u.jsx)(Sn, { ...o, ...r, ref: t });
      });
      ir.displayName = 'DropdownMenuRadioItem';
      var ar = r.forwardRef((e, t) => {
        const { __scopeDropdownMenu: n, ...r } = e,
          o = Gn(n);
        return (0, u.jsx)(Nn, { ...o, ...r, ref: t });
      });
      ar.displayName = 'DropdownMenuItemIndicator';
      var sr = r.forwardRef((e, t) => {
        const { __scopeDropdownMenu: n, ...r } = e,
          o = Gn(n);
        return (0, u.jsx)(In, { ...o, ...r, ref: t });
      });
      sr.displayName = 'DropdownMenuSeparator';
      var cr = r.forwardRef((e, t) => {
        const { __scopeDropdownMenu: n, ...r } = e,
          o = Gn(n);
        return (0, u.jsx)(Ln, { ...o, ...r, ref: t });
      });
      cr.displayName = 'DropdownMenuArrow';
      var lr = r.forwardRef((e, t) => {
        const { __scopeDropdownMenu: n, ...r } = e,
          o = Gn(n);
        return (0, u.jsx)(Wn, { ...o, ...r, ref: t });
      });
      lr.displayName = 'DropdownMenuSubTrigger';
      var ur = r.forwardRef((e, t) => {
        const { __scopeDropdownMenu: n, ...r } = e,
          o = Gn(n);
        return (0, u.jsx)(Vn, {
          ...o,
          ...r,
          ref: t,
          style: {
            ...e.style,
            '--radix-dropdown-menu-content-transform-origin':
              'var(--radix-popper-transform-origin)',
            '--radix-dropdown-menu-content-available-width':
              'var(--radix-popper-available-width)',
            '--radix-dropdown-menu-content-available-height':
              'var(--radix-popper-available-height)',
            '--radix-dropdown-menu-trigger-width':
              'var(--radix-popper-anchor-width)',
            '--radix-dropdown-menu-trigger-height':
              'var(--radix-popper-anchor-height)',
          },
        });
      });
      ur.displayName = 'DropdownMenuSubContent';
      var dr = Zn,
        fr = Jn,
        pr = Xn,
        hr = Yn,
        mr = er,
        gr = tr,
        wr = nr,
        yr = rr,
        vr = or,
        xr = ir,
        br = ar,
        Rr = sr,
        Mr = (e) => {
          const {
              __scopeDropdownMenu: t,
              children: n,
              open: r,
              onOpenChange: o,
              defaultOpen: i,
            } = e,
            a = Gn(t),
            [s = !1, l] = (0, c.T)({ prop: r, defaultProp: i, onChange: o });
          return (0, u.jsx)(Kn, {
            ...a,
            open: s,
            onOpenChange: l,
            children: n,
          });
        },
        Cr = lr,
        Dr = ur;
    },
  },
]);
//# sourceMappingURL=609.2c8cde4c.async.js.map
