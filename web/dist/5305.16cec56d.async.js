'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [5305],
  {
    16165: function (e, t, n) {
      var r = n(87462),
        o = n(1413),
        i = n(4942),
        a = n(45987),
        l = n(62435),
        s = n(93967),
        c = n.n(s),
        d = n(42550),
        u = n(63017),
        p = n(41755),
        f = [
          'className',
          'component',
          'viewBox',
          'spin',
          'rotate',
          'tabIndex',
          'onClick',
          'children',
        ],
        m = l.forwardRef(function (e, t) {
          var n = e.className,
            s = e.component,
            m = e.viewBox,
            g = e.spin,
            h = e.rotate,
            v = e.tabIndex,
            b = e.onClick,
            y = e.children,
            $ = (0, a.Z)(e, f),
            w = l.useRef(),
            k = (0, d.x1)(w, t);
          (0, p.Kp)(
            Boolean(s || y),
            'Should have `component` prop or `children`.',
          ),
            (0, p.C3)(w);
          var C = l.useContext(u.Z),
            E = C.prefixCls,
            x = void 0 === E ? 'anticon' : E,
            S = C.rootClassName,
            O = c()(S, x, n),
            Z = c()((0, i.Z)({}, ''.concat(x, '-spin'), !!g)),
            I = h
              ? {
                  msTransform: 'rotate('.concat(h, 'deg)'),
                  transform: 'rotate('.concat(h, 'deg)'),
                }
              : void 0,
            j = (0, o.Z)(
              (0, o.Z)({}, p.vD),
              {},
              { className: Z, style: I, viewBox: m },
            );
          m || delete j.viewBox;
          var R = v;
          return (
            void 0 === R && b && (R = -1),
            l.createElement(
              'span',
              (0, r.Z)({ role: 'img' }, $, {
                ref: k,
                tabIndex: R,
                onClick: b,
                className: O,
              }),
              s
                ? l.createElement(s, j, y)
                : y
                  ? ((0, p.Kp)(
                      Boolean(m) ||
                        (1 === l.Children.count(y) &&
                          l.isValidElement(y) &&
                          'use' === l.Children.only(y).type),
                      'Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon.',
                    ),
                    l.createElement('svg', (0, r.Z)({}, j, { viewBox: m }), y))
                  : null,
            )
          );
        });
      (m.displayName = 'AntdIcon'), (t.Z = m);
    },
    48689: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(87462),
        o = n(62435),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z',
                },
              },
            ],
          },
          name: 'delete',
          theme: 'outlined',
        },
        a = n(84089),
        l = function (e, t) {
          return o.createElement(a.Z, (0, r.Z)({}, e, { ref: t, icon: i }));
        };
      var s = o.forwardRef(l);
    },
    23430: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(87462),
        o = n(62435),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'download',
          theme: 'outlined',
        },
        a = n(84089),
        l = function (e, t) {
          return o.createElement(a.Z, (0, r.Z)({}, e, { ref: t, icon: i }));
        };
      var s = o.forwardRef(l);
    },
    38703: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return te;
        },
      });
      var r = n(62435),
        o = n(89739),
        i = n(63606),
        a = n(4340),
        l = n(97937),
        s = n(93967),
        c = n.n(s),
        d = n(98423),
        u = n(53124),
        p = n(87462),
        f = n(1413),
        m = n(45987),
        g = {
          percent: 0,
          prefixCls: 'rc-progress',
          strokeColor: '#2db7f5',
          strokeLinecap: 'round',
          strokeWidth: 1,
          trailColor: '#D9D9D9',
          trailWidth: 1,
          gapPosition: 'bottom',
        },
        h = function () {
          var e = (0, r.useRef)([]),
            t = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(function () {
              var n = Date.now(),
                r = !1;
              e.current.forEach(function (e) {
                if (e) {
                  r = !0;
                  var o = e.style;
                  (o.transitionDuration = '.3s, .3s, .3s, .06s'),
                    t.current &&
                      n - t.current < 100 &&
                      (o.transitionDuration = '0s, 0s');
                }
              }),
                r && (t.current = Date.now());
            }),
            e.current
          );
        };
      var v = n(71002),
        b = n(97685),
        y = n(98924),
        $ = 0,
        w = (0, y.Z)();
      var k = function (e) {
          var t = r.useState(),
            n = (0, b.Z)(t, 2),
            o = n[0],
            i = n[1];
          return (
            r.useEffect(function () {
              var e;
              i(
                'rc_progress_'.concat(
                  (w ? ((e = $), ($ += 1)) : (e = 'TEST_OR_SSR'), e),
                ),
              );
            }, []),
            e || o
          );
        },
        C = function (e) {
          var t = e.bg,
            n = e.children;
          return r.createElement(
            'div',
            { style: { width: '100%', height: '100%', background: t } },
            n,
          );
        };
      function E(e, t) {
        return Object.keys(e).map(function (n) {
          var r = parseFloat(n),
            o = ''.concat(Math.floor(r * t), '%');
          return ''.concat(e[n], ' ').concat(o);
        });
      }
      var x = r.forwardRef(function (e, t) {
          var n = e.prefixCls,
            o = e.color,
            i = e.gradientId,
            a = e.radius,
            l = e.style,
            s = e.ptg,
            c = e.strokeLinecap,
            d = e.strokeWidth,
            u = e.size,
            p = e.gapDegree,
            f = o && 'object' === (0, v.Z)(o),
            m = f ? '#FFF' : void 0,
            g = u / 2,
            h = r.createElement('circle', {
              className: ''.concat(n, '-circle-path'),
              r: a,
              cx: g,
              cy: g,
              stroke: m,
              strokeLinecap: c,
              strokeWidth: d,
              opacity: 0 === s ? 0 : 1,
              style: l,
              ref: t,
            });
          if (!f) return h;
          var b = ''.concat(i, '-conic'),
            y = p ? ''.concat(180 + p / 2, 'deg') : '0deg',
            $ = E(o, (360 - p) / 360),
            w = E(o, 1),
            k = 'conic-gradient(from '
              .concat(y, ', ')
              .concat($.join(', '), ')'),
            x = 'linear-gradient(to '
              .concat(p ? 'bottom' : 'top', ', ')
              .concat(w.join(', '), ')');
          return r.createElement(
            r.Fragment,
            null,
            r.createElement('mask', { id: b }, h),
            r.createElement(
              'foreignObject',
              { x: 0, y: 0, width: u, height: u, mask: 'url(#'.concat(b, ')') },
              r.createElement(C, { bg: x }, r.createElement(C, { bg: k })),
            ),
          );
        }),
        S = 100,
        O = function (e, t, n, r, o, i, a, l, s, c) {
          var d =
              arguments.length > 10 && void 0 !== arguments[10]
                ? arguments[10]
                : 0,
            u = (n / 100) * 360 * ((360 - i) / 360),
            p = 0 === i ? 0 : { bottom: 0, top: 180, left: 90, right: -90 }[a],
            f = ((100 - r) / 100) * t;
          'round' === s && 100 !== r && (f += c / 2) >= t && (f = t - 0.01);
          return {
            stroke: 'string' == typeof l ? l : void 0,
            strokeDasharray: ''.concat(t, 'px ').concat(e),
            strokeDashoffset: f + d,
            transform: 'rotate('.concat(o + u + p, 'deg)'),
            transformOrigin: ''.concat(50, 'px ').concat(50, 'px'),
            transition:
              'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s',
            fillOpacity: 0,
          };
        },
        Z = [
          'id',
          'prefixCls',
          'steps',
          'strokeWidth',
          'trailWidth',
          'gapDegree',
          'gapPosition',
          'trailColor',
          'strokeLinecap',
          'style',
          'className',
          'strokeColor',
          'percent',
        ];
      function I(e) {
        var t = null != e ? e : [];
        return Array.isArray(t) ? t : [t];
      }
      var j = function (e) {
          var t,
            n,
            o,
            i = (0, f.Z)((0, f.Z)({}, g), e),
            a = i.id,
            l = i.prefixCls,
            s = i.steps,
            d = i.strokeWidth,
            u = i.trailWidth,
            b = i.gapDegree,
            y = void 0 === b ? 0 : b,
            $ = i.gapPosition,
            w = i.trailColor,
            C = i.strokeLinecap,
            E = i.style,
            j = i.className,
            R = i.strokeColor,
            D = i.percent,
            N = (0, m.Z)(i, Z),
            P = k(a),
            z = ''.concat(P, '-gradient'),
            F = 50 - d / 2,
            M = 2 * Math.PI * F,
            L = y > 0 ? 90 + y / 2 : -90,
            A = M * ((360 - y) / 360),
            T = 'object' === (0, v.Z)(s) ? s : { count: s, space: 2 },
            B = T.count,
            H = T.space,
            W = I(D),
            U = I(R),
            X = U.find(function (e) {
              return e && 'object' === (0, v.Z)(e);
            }),
            q = X && 'object' === (0, v.Z)(X) ? 'butt' : C,
            _ = O(M, A, 0, 100, L, y, $, w, q, d),
            V = h();
          return r.createElement(
            'svg',
            (0, p.Z)(
              {
                className: c()(''.concat(l, '-circle'), j),
                viewBox: '0 0 '.concat(S, ' ').concat(S),
                style: E,
                id: a,
                role: 'presentation',
              },
              N,
            ),
            !B &&
              r.createElement('circle', {
                className: ''.concat(l, '-circle-trail'),
                r: F,
                cx: 50,
                cy: 50,
                stroke: w,
                strokeLinecap: q,
                strokeWidth: u || d,
                style: _,
              }),
            B
              ? ((t = Math.round(B * (W[0] / 100))),
                (n = 100 / B),
                (o = 0),
                new Array(B).fill(null).map(function (e, i) {
                  var a = i <= t - 1 ? U[0] : w,
                    s =
                      a && 'object' === (0, v.Z)(a)
                        ? 'url(#'.concat(z, ')')
                        : void 0,
                    c = O(M, A, o, n, L, y, $, a, 'butt', d, H);
                  return (
                    (o += (100 * (A - c.strokeDashoffset + H)) / A),
                    r.createElement('circle', {
                      key: i,
                      className: ''.concat(l, '-circle-path'),
                      r: F,
                      cx: 50,
                      cy: 50,
                      stroke: s,
                      strokeWidth: d,
                      opacity: 1,
                      style: c,
                      ref: function (e) {
                        V[i] = e;
                      },
                    })
                  );
                }))
              : (function () {
                  var e = 0;
                  return W.map(function (t, n) {
                    var o = U[n] || U[U.length - 1],
                      i = O(M, A, e, t, L, y, $, o, q, d);
                    return (
                      (e += t),
                      r.createElement(x, {
                        key: n,
                        color: o,
                        ptg: t,
                        radius: F,
                        prefixCls: l,
                        gradientId: z,
                        style: i,
                        strokeLinecap: q,
                        strokeWidth: d,
                        gapDegree: y,
                        ref: function (e) {
                          V[n] = e;
                        },
                        size: S,
                      })
                    );
                  }).reverse();
                })(),
          );
        },
        R = n(83062),
        D = n(16397);
      function N(e) {
        return !e || e < 0 ? 0 : e > 100 ? 100 : e;
      }
      function P(e) {
        let { success: t, successPercent: n } = e,
          r = n;
        return (
          t && 'progress' in t && (r = t.progress),
          t && 'percent' in t && (r = t.percent),
          r
        );
      }
      const z = (e) => {
          let { percent: t, success: n, successPercent: r } = e;
          const o = N(P({ success: n, successPercent: r }));
          return [o, N(N(t) - o)];
        },
        F = (e, t, n) => {
          var r, o, i, a;
          let l = -1,
            s = -1;
          if ('step' === t) {
            const t = n.steps,
              r = n.strokeWidth;
            'string' == typeof e || void 0 === e
              ? ((l = 'small' === e ? 2 : 14), (s = null != r ? r : 8))
              : 'number' == typeof e
                ? ([l, s] = [e, e])
                : ([l = 14, s = 8] = e),
              (l *= t);
          } else if ('line' === t) {
            const t = null == n ? void 0 : n.strokeWidth;
            'string' == typeof e || void 0 === e
              ? (s = t || ('small' === e ? 6 : 8))
              : 'number' == typeof e
                ? ([l, s] = [e, e])
                : ([l = -1, s = 8] = e);
          } else
            ('circle' !== t && 'dashboard' !== t) ||
              ('string' == typeof e || void 0 === e
                ? ([l, s] = 'small' === e ? [60, 60] : [120, 120])
                : 'number' == typeof e
                  ? ([l, s] = [e, e])
                  : ((l =
                      null !==
                        (o = null !== (r = e[0]) && void 0 !== r ? r : e[1]) &&
                      void 0 !== o
                        ? o
                        : 120),
                    (s =
                      null !==
                        (a = null !== (i = e[0]) && void 0 !== i ? i : e[1]) &&
                      void 0 !== a
                        ? a
                        : 120)));
          return [l, s];
        };
      var M = (e) => {
          const {
              prefixCls: t,
              trailColor: n = null,
              strokeLinecap: o = 'round',
              gapPosition: i,
              gapDegree: a,
              width: l = 120,
              type: s,
              children: d,
              success: u,
              size: p = l,
            } = e,
            [f, m] = F(p, 'circle');
          let { strokeWidth: g } = e;
          void 0 === g && (g = Math.max(((e) => (3 / e) * 100)(f), 6));
          const h = { width: f, height: m, fontSize: 0.15 * f + 6 },
            v = r.useMemo(
              () => (a || 0 === a ? a : 'dashboard' === s ? 75 : void 0),
              [a, s],
            ),
            b = i || ('dashboard' === s && 'bottom') || void 0,
            y =
              '[object Object]' ===
              Object.prototype.toString.call(e.strokeColor),
            $ = ((e) => {
              let { success: t = {}, strokeColor: n } = e;
              const { strokeColor: r } = t;
              return [r || D.ez.green, n || null];
            })({ success: u, strokeColor: e.strokeColor }),
            w = c()(`${t}-inner`, { [`${t}-circle-gradient`]: y }),
            k = r.createElement(j, {
              percent: z(e),
              strokeWidth: g,
              trailWidth: g,
              strokeColor: $,
              strokeLinecap: o,
              trailColor: n,
              prefixCls: t,
              gapDegree: v,
              gapPosition: b,
            });
          return r.createElement(
            'div',
            { className: w, style: h },
            f <= 20
              ? r.createElement(
                  R.Z,
                  { title: d },
                  r.createElement('span', null, k),
                )
              : r.createElement(r.Fragment, null, k, d),
          );
        },
        L = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        };
      const A = (e, t) => {
        const {
            from: n = D.ez.blue,
            to: r = D.ez.blue,
            direction: o = 'rtl' === t ? 'to left' : 'to right',
          } = e,
          i = L(e, ['from', 'to', 'direction']);
        if (0 !== Object.keys(i).length) {
          return {
            backgroundImage: `linear-gradient(${o}, ${((e) => {
              let t = [];
              return (
                Object.keys(e).forEach((n) => {
                  const r = parseFloat(n.replace(/%/g, ''));
                  isNaN(r) || t.push({ key: r, value: e[n] });
                }),
                (t = t.sort((e, t) => e.key - t.key)),
                t
                  .map((e) => {
                    let { key: t, value: n } = e;
                    return `${n} ${t}%`;
                  })
                  .join(', ')
              );
            })(i)})`,
          };
        }
        return { backgroundImage: `linear-gradient(${o}, ${n}, ${r})` };
      };
      var T = (e) => {
        const {
            prefixCls: t,
            direction: n,
            percent: o,
            size: i,
            strokeWidth: a,
            strokeColor: l,
            strokeLinecap: s = 'round',
            children: c,
            trailColor: d = null,
            success: p,
          } = e,
          { direction: f } = (0, r.useContext)(u.E_),
          m = l && 'string' != typeof l ? A(l, n) : { backgroundColor: l },
          g = 'square' === s || 'butt' === s ? 0 : void 0,
          h = { backgroundColor: d || void 0, borderRadius: g },
          v = null != i ? i : [-1, a || ('small' === i ? 6 : 8)],
          [b, y] = F(v, 'line', { strokeWidth: a });
        const $ = 'square' === s || 'butt' === s ? 0 : '100px',
          w = Object.assign(
            {
              width: '100%',
              height: y,
              borderRadius: g,
              clipPath:
                'rtl' === f
                  ? `inset(0 0 0 ${100 - N(o)}% round ${$})`
                  : `inset(0 ${100 - N(o)}% 0 0 round ${$})`,
            },
            m,
          ),
          k = P(e),
          C = {
            width: '100%',
            height: y,
            borderRadius: g,
            clipPath:
              'rtl' === f
                ? `inset(0 0 0 ${100 - N(k)}% round ${$})`
                : `inset(0 ${100 - N(k)}% 0 0 round ${$})`,
            backgroundColor: null == p ? void 0 : p.strokeColor,
          },
          E = { width: b < 0 ? '100%' : b, height: y };
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            'div',
            { className: `${t}-outer`, style: E },
            r.createElement(
              'div',
              { className: `${t}-inner`, style: h },
              r.createElement('div', { className: `${t}-bg`, style: w }),
              void 0 !== k
                ? r.createElement('div', {
                    className: `${t}-success-bg`,
                    style: C,
                  })
                : null,
            ),
          ),
          c,
        );
      };
      var B = (e) => {
          const {
              size: t,
              steps: n,
              percent: o = 0,
              strokeWidth: i = 8,
              strokeColor: a,
              trailColor: l = null,
              prefixCls: s,
              children: d,
            } = e,
            u = Math.round(n * (o / 100)),
            p = null != t ? t : ['small' === t ? 2 : 14, i],
            [f, m] = F(p, 'step', { steps: n, strokeWidth: i }),
            g = f / n,
            h = new Array(n);
          for (let e = 0; e < n; e++) {
            const t = Array.isArray(a) ? a[e] : a;
            h[e] = r.createElement('div', {
              key: e,
              className: c()(`${s}-steps-item`, {
                [`${s}-steps-item-active`]: e <= u - 1,
              }),
              style: {
                backgroundColor: e <= u - 1 ? t : l,
                width: g,
                height: m,
              },
            });
          }
          return r.createElement(
            'div',
            { className: `${s}-steps-outer` },
            h,
            d,
          );
        },
        H = n(54548),
        W = n(14747),
        U = n(91945),
        X = n(45503);
      const q = (e) => {
          const t = e ? '100%' : '-100%';
          return new H.E4(`antProgress${e ? 'RTL' : 'LTR'}Active`, {
            '0%': { transform: `translateX(${t}) scaleX(0)`, opacity: 0.1 },
            '20%': { transform: `translateX(${t}) scaleX(0)`, opacity: 0.5 },
            to: { transform: 'translateX(0) scaleX(1)', opacity: 0 },
          });
        },
        _ = (e) => {
          const { componentCls: t, iconCls: n } = e;
          return {
            [t]: Object.assign(Object.assign({}, (0, W.Wf)(e)), {
              display: 'inline-block',
              '&-rtl': { direction: 'rtl' },
              '&-line': {
                position: 'relative',
                width: '100%',
                fontSize: e.fontSize,
                marginInlineEnd: e.marginXS,
                marginBottom: e.marginXS,
              },
              [`${t}-outer`]: { display: 'inline-block', width: '100%' },
              [`&${t}-show-info`]: {
                [`${t}-outer`]: {
                  marginInlineEnd: `calc(-2em - ${(0, H.bf)(e.marginXS)})`,
                  paddingInlineEnd: `calc(2em + ${(0, H.bf)(e.paddingXS)})`,
                },
              },
              [`${t}-inner`]: {
                position: 'relative',
                display: 'inline-block',
                width: '100%',
                overflow: 'hidden',
                verticalAlign: 'middle',
                backgroundColor: e.remainingColor,
                borderRadius: e.lineBorderRadius,
              },
              [`${t}-inner:not(${t}-circle-gradient)`]: {
                [`${t}-circle-path`]: { stroke: e.defaultColor },
              },
              [`${t}-success-bg, ${t}-bg`]: {
                position: 'relative',
                backgroundColor: e.defaultColor,
                borderRadius: e.lineBorderRadius,
                transition: `all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
              },
              [`${t}-success-bg`]: {
                position: 'absolute',
                insetBlockStart: 0,
                insetInlineStart: 0,
                backgroundColor: e.colorSuccess,
              },
              [`${t}-text`]: {
                display: 'inline-block',
                width: '2em',
                marginInlineStart: e.marginXS,
                color: e.colorText,
                lineHeight: 1,
                whiteSpace: 'nowrap',
                textAlign: 'start',
                verticalAlign: 'middle',
                wordBreak: 'normal',
                [n]: { fontSize: e.fontSize },
              },
              [`&${t}-status-active`]: {
                [`${t}-bg::before`]: {
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: e.colorBgContainer,
                  borderRadius: e.lineBorderRadius,
                  opacity: 0,
                  animationName: q(),
                  animationDuration: e.progressActiveMotionDuration,
                  animationTimingFunction: e.motionEaseOutQuint,
                  animationIterationCount: 'infinite',
                  content: '""',
                },
              },
              [`&${t}-rtl${t}-status-active`]: {
                [`${t}-bg::before`]: { animationName: q(!0) },
              },
              [`&${t}-status-exception`]: {
                [`${t}-bg`]: { backgroundColor: e.colorError },
                [`${t}-text`]: { color: e.colorError },
              },
              [`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]: {
                [`${t}-circle-path`]: { stroke: e.colorError },
              },
              [`&${t}-status-success`]: {
                [`${t}-bg`]: { backgroundColor: e.colorSuccess },
                [`${t}-text`]: { color: e.colorSuccess },
              },
              [`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]: {
                [`${t}-circle-path`]: { stroke: e.colorSuccess },
              },
            }),
          };
        },
        V = (e) => {
          const { componentCls: t, iconCls: n } = e;
          return {
            [t]: {
              [`${t}-circle-trail`]: { stroke: e.remainingColor },
              [`&${t}-circle ${t}-inner`]: {
                position: 'relative',
                lineHeight: 1,
                backgroundColor: 'transparent',
              },
              [`&${t}-circle ${t}-text`]: {
                position: 'absolute',
                insetBlockStart: '50%',
                insetInlineStart: 0,
                width: '100%',
                margin: 0,
                padding: 0,
                color: e.circleTextColor,
                fontSize: e.circleTextFontSize,
                lineHeight: 1,
                whiteSpace: 'normal',
                textAlign: 'center',
                transform: 'translateY(-50%)',
                [n]: { fontSize: e.circleIconFontSize },
              },
              [`${t}-circle&-status-exception`]: {
                [`${t}-text`]: { color: e.colorError },
              },
              [`${t}-circle&-status-success`]: {
                [`${t}-text`]: { color: e.colorSuccess },
              },
            },
            [`${t}-inline-circle`]: {
              lineHeight: 1,
              [`${t}-inner`]: { verticalAlign: 'bottom' },
            },
          };
        },
        G = (e) => {
          const { componentCls: t } = e;
          return {
            [t]: {
              [`${t}-steps`]: {
                display: 'inline-block',
                '&-outer': {
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                },
                '&-item': {
                  flexShrink: 0,
                  minWidth: e.progressStepMinWidth,
                  marginInlineEnd: e.progressStepMarginInlineEnd,
                  backgroundColor: e.remainingColor,
                  transition: `all ${e.motionDurationSlow}`,
                  '&-active': { backgroundColor: e.defaultColor },
                },
              },
            },
          };
        },
        K = (e) => {
          const { componentCls: t, iconCls: n } = e;
          return {
            [t]: {
              [`${t}-small&-line, ${t}-small&-line ${t}-text ${n}`]: {
                fontSize: e.fontSizeSM,
              },
            },
          };
        };
      var J = (0, U.I$)(
          'Progress',
          (e) => {
            const t = e.calc(e.marginXXS).div(2).equal(),
              n = (0, X.TS)(e, {
                progressStepMarginInlineEnd: t,
                progressStepMinWidth: t,
                progressActiveMotionDuration: '2.4s',
              });
            return [_(n), V(n), G(n), K(n)];
          },
          (e) => ({
            circleTextColor: e.colorText,
            defaultColor: e.colorInfo,
            remainingColor: e.colorFillSecondary,
            lineBorderRadius: 100,
            circleTextFontSize: '1em',
            circleIconFontSize: e.fontSize / e.fontSizeSM + 'em',
          }),
        ),
        Q = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        };
      const Y = ['normal', 'exception', 'active', 'success'],
        ee = r.forwardRef((e, t) => {
          const {
              prefixCls: n,
              className: s,
              rootClassName: p,
              steps: f,
              strokeColor: m,
              percent: g = 0,
              size: h = 'default',
              showInfo: v = !0,
              type: b = 'line',
              status: y,
              format: $,
              style: w,
            } = e,
            k = Q(e, [
              'prefixCls',
              'className',
              'rootClassName',
              'steps',
              'strokeColor',
              'percent',
              'size',
              'showInfo',
              'type',
              'status',
              'format',
              'style',
            ]),
            C = r.useMemo(() => {
              var t, n;
              const r = P(e);
              return parseInt(
                void 0 !== r
                  ? null === (t = null != r ? r : 0) || void 0 === t
                    ? void 0
                    : t.toString()
                  : null === (n = null != g ? g : 0) || void 0 === n
                    ? void 0
                    : n.toString(),
                10,
              );
            }, [g, e.success, e.successPercent]),
            E = r.useMemo(
              () => (!Y.includes(y) && C >= 100 ? 'success' : y || 'normal'),
              [y, C],
            ),
            { getPrefixCls: x, direction: S, progress: O } = r.useContext(u.E_),
            Z = x('progress', n),
            [I, j, R] = J(Z),
            D = r.useMemo(() => {
              if (!v) return null;
              const t = P(e);
              let n;
              const s = 'line' === b;
              return (
                $ || ('exception' !== E && 'success' !== E)
                  ? (n = ($ || ((e) => `${e}%`))(N(g), N(t)))
                  : 'exception' === E
                    ? (n = s
                        ? r.createElement(a.Z, null)
                        : r.createElement(l.Z, null))
                    : 'success' === E &&
                      (n = s
                        ? r.createElement(o.Z, null)
                        : r.createElement(i.Z, null)),
                r.createElement(
                  'span',
                  {
                    className: `${Z}-text`,
                    title: 'string' == typeof n ? n : void 0,
                  },
                  n,
                )
              );
            }, [v, g, C, E, b, Z, $]);
          const z = Array.isArray(m) ? m[0] : m,
            L = 'string' == typeof m || Array.isArray(m) ? m : void 0;
          let A;
          'line' === b
            ? (A = f
                ? r.createElement(
                    B,
                    Object.assign({}, e, {
                      strokeColor: L,
                      prefixCls: Z,
                      steps: f,
                    }),
                    D,
                  )
                : r.createElement(
                    T,
                    Object.assign({}, e, {
                      strokeColor: z,
                      prefixCls: Z,
                      direction: S,
                    }),
                    D,
                  ))
            : ('circle' !== b && 'dashboard' !== b) ||
              (A = r.createElement(
                M,
                Object.assign({}, e, {
                  strokeColor: z,
                  prefixCls: Z,
                  progressStatus: E,
                }),
                D,
              ));
          const H = c()(
            Z,
            `${Z}-status-${E}`,
            `${Z}-${('dashboard' === b ? 'circle' : f && 'steps') || b}`,
            {
              [`${Z}-inline-circle`]: 'circle' === b && F(h, 'circle')[0] <= 20,
              [`${Z}-show-info`]: v,
              [`${Z}-${h}`]: 'string' == typeof h,
              [`${Z}-rtl`]: 'rtl' === S,
            },
            null == O ? void 0 : O.className,
            s,
            p,
            j,
            R,
          );
          return I(
            r.createElement(
              'div',
              Object.assign(
                {
                  ref: t,
                  style: Object.assign(
                    Object.assign({}, null == O ? void 0 : O.style),
                    w,
                  ),
                  className: H,
                  role: 'progressbar',
                  'aria-valuenow': C,
                },
                (0, d.Z)(k, [
                  'trailColor',
                  'strokeWidth',
                  'width',
                  'gapDegree',
                  'gapPosition',
                  'strokeLinecap',
                  'success',
                  'successPercent',
                ]),
              ),
              A,
            ),
          );
        });
      var te = ee;
    },
    31365: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return We;
        },
      });
      var r = n(62435),
        o = n(74902),
        i = n(61254),
        a = n(93967),
        l = n.n(a),
        s = n(87462),
        c = n(15671),
        d = n(43144),
        u = n(97326),
        p = n(60136),
        f = n(29388),
        m = n(4942),
        g = n(1413),
        h = n(45987),
        v = n(74165),
        b = n(71002),
        y = n(15861),
        $ = n(64217),
        w = n(80334),
        k = function (e, t) {
          if (e && t) {
            var n = Array.isArray(t) ? t : t.split(','),
              r = e.name || '',
              o = e.type || '',
              i = o.replace(/\/.*$/, '');
            return n.some(function (e) {
              var t = e.trim();
              if (/^\*(\/\*)?$/.test(e)) return !0;
              if ('.' === t.charAt(0)) {
                var n = r.toLowerCase(),
                  a = t.toLowerCase(),
                  l = [a];
                return (
                  ('.jpg' !== a && '.jpeg' !== a) || (l = ['.jpg', '.jpeg']),
                  l.some(function (e) {
                    return n.endsWith(e);
                  })
                );
              }
              return /\/\*$/.test(t)
                ? i === t.replace(/\/.*$/, '')
                : o === t ||
                    (!!/^\w+$/.test(t) &&
                      ((0, w.ZP)(
                        !1,
                        "Upload takes an invalidate 'accept' type '".concat(
                          t,
                          "'.Skip for check.",
                        ),
                      ),
                      !0));
            });
          }
          return !0;
        };
      function C(e) {
        var t = e.responseText || e.response;
        if (!t) return t;
        try {
          return JSON.parse(t);
        } catch (e) {
          return t;
        }
      }
      function E(e) {
        var t = new XMLHttpRequest();
        e.onProgress &&
          t.upload &&
          (t.upload.onprogress = function (t) {
            t.total > 0 && (t.percent = (t.loaded / t.total) * 100),
              e.onProgress(t);
          });
        var n = new FormData();
        e.data &&
          Object.keys(e.data).forEach(function (t) {
            var r = e.data[t];
            Array.isArray(r)
              ? r.forEach(function (e) {
                  n.append(''.concat(t, '[]'), e);
                })
              : n.append(t, r);
          }),
          e.file instanceof Blob
            ? n.append(e.filename, e.file, e.file.name)
            : n.append(e.filename, e.file),
          (t.onerror = function (t) {
            e.onError(t);
          }),
          (t.onload = function () {
            return t.status < 200 || t.status >= 300
              ? e.onError(
                  (function (e, t) {
                    var n = 'cannot '
                        .concat(e.method, ' ')
                        .concat(e.action, ' ')
                        .concat(t.status, "'"),
                      r = new Error(n);
                    return (
                      (r.status = t.status),
                      (r.method = e.method),
                      (r.url = e.action),
                      r
                    );
                  })(e, t),
                  C(t),
                )
              : e.onSuccess(C(t), t);
          }),
          t.open(e.method, e.action, !0),
          e.withCredentials &&
            'withCredentials' in t &&
            (t.withCredentials = !0);
        var r = e.headers || {};
        return (
          null !== r['X-Requested-With'] &&
            t.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
          Object.keys(r).forEach(function (e) {
            null !== r[e] && t.setRequestHeader(e, r[e]);
          }),
          t.send(n),
          {
            abort: function () {
              t.abort();
            },
          }
        );
      }
      var x = function (e, t, n) {
          var r = function e(r, o) {
            r &&
              ((r.path = o || ''),
              r.isFile
                ? r.file(function (e) {
                    n(e) &&
                      (r.fullPath &&
                        !e.webkitRelativePath &&
                        (Object.defineProperties(e, {
                          webkitRelativePath: { writable: !0 },
                        }),
                        (e.webkitRelativePath = r.fullPath.replace(/^\//, '')),
                        Object.defineProperties(e, {
                          webkitRelativePath: { writable: !1 },
                        })),
                      t([e]));
                  })
                : r.isDirectory &&
                  (function (e, t) {
                    var n = e.createReader(),
                      r = [];
                    !(function e() {
                      n.readEntries(function (n) {
                        var o = Array.prototype.slice.apply(n);
                        (r = r.concat(o)), o.length ? e() : t(r);
                      });
                    })();
                  })(r, function (t) {
                    t.forEach(function (t) {
                      e(t, ''.concat(o).concat(r.name, '/'));
                    });
                  }));
          };
          e.forEach(function (e) {
            r(e.webkitGetAsEntry());
          });
        },
        S = +new Date(),
        O = 0;
      function Z() {
        return 'rc-upload-'.concat(S, '-').concat(++O);
      }
      var I = [
          'component',
          'prefixCls',
          'className',
          'classNames',
          'disabled',
          'id',
          'style',
          'styles',
          'multiple',
          'accept',
          'capture',
          'children',
          'directory',
          'openFileDialogOnClick',
          'onMouseEnter',
          'onMouseLeave',
          'hasControlInside',
        ],
        j = (function (e) {
          (0, p.Z)(n, e);
          var t = (0, f.Z)(n);
          function n() {
            var e;
            (0, c.Z)(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              (e = t.call.apply(t, [this].concat(i))),
              (0, m.Z)((0, u.Z)(e), 'state', { uid: Z() }),
              (0, m.Z)((0, u.Z)(e), 'reqs', {}),
              (0, m.Z)((0, u.Z)(e), 'fileInput', void 0),
              (0, m.Z)((0, u.Z)(e), '_isMounted', void 0),
              (0, m.Z)((0, u.Z)(e), 'onChange', function (t) {
                var n = e.props,
                  r = n.accept,
                  i = n.directory,
                  a = t.target.files,
                  l = (0, o.Z)(a).filter(function (e) {
                    return !i || k(e, r);
                  });
                e.uploadFiles(l), e.reset();
              }),
              (0, m.Z)((0, u.Z)(e), 'onClick', function (t) {
                var n = e.fileInput;
                if (n) {
                  var r = t.target,
                    o = e.props.onClick;
                  if (r && 'BUTTON' === r.tagName)
                    n.parentNode.focus(), r.blur();
                  n.click(), o && o(t);
                }
              }),
              (0, m.Z)((0, u.Z)(e), 'onKeyDown', function (t) {
                'Enter' === t.key && e.onClick(t);
              }),
              (0, m.Z)((0, u.Z)(e), 'onFileDrop', function (t) {
                var n = e.props.multiple;
                if ((t.preventDefault(), 'dragover' !== t.type))
                  if (e.props.directory)
                    x(
                      Array.prototype.slice.call(t.dataTransfer.items),
                      e.uploadFiles,
                      function (t) {
                        return k(t, e.props.accept);
                      },
                    );
                  else {
                    var r = (0, o.Z)(t.dataTransfer.files).filter(function (t) {
                      return k(t, e.props.accept);
                    });
                    !1 === n && (r = r.slice(0, 1)), e.uploadFiles(r);
                  }
              }),
              (0, m.Z)((0, u.Z)(e), 'uploadFiles', function (t) {
                var n = (0, o.Z)(t),
                  r = n.map(function (t) {
                    return (t.uid = Z()), e.processFile(t, n);
                  });
                Promise.all(r).then(function (t) {
                  var n = e.props.onBatchStart;
                  null == n ||
                    n(
                      t.map(function (e) {
                        return { file: e.origin, parsedFile: e.parsedFile };
                      }),
                    ),
                    t
                      .filter(function (e) {
                        return null !== e.parsedFile;
                      })
                      .forEach(function (t) {
                        e.post(t);
                      });
                });
              }),
              (0, m.Z)(
                (0, u.Z)(e),
                'processFile',
                (function () {
                  var t = (0, y.Z)(
                    (0, v.Z)().mark(function t(n, r) {
                      var o, i, a, l, s, c, d, u, p;
                      return (0, v.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((o = e.props.beforeUpload), (i = n), !o)) {
                                  t.next = 14;
                                  break;
                                }
                                return (t.prev = 3), (t.next = 6), o(n, r);
                              case 6:
                                (i = t.sent), (t.next = 12);
                                break;
                              case 9:
                                (t.prev = 9), (t.t0 = t.catch(3)), (i = !1);
                              case 12:
                                if (!1 !== i) {
                                  t.next = 14;
                                  break;
                                }
                                return t.abrupt('return', {
                                  origin: n,
                                  parsedFile: null,
                                  action: null,
                                  data: null,
                                });
                              case 14:
                                if ('function' != typeof (a = e.props.action)) {
                                  t.next = 21;
                                  break;
                                }
                                return (t.next = 18), a(n);
                              case 18:
                                (l = t.sent), (t.next = 22);
                                break;
                              case 21:
                                l = a;
                              case 22:
                                if ('function' != typeof (s = e.props.data)) {
                                  t.next = 29;
                                  break;
                                }
                                return (t.next = 26), s(n);
                              case 26:
                                (c = t.sent), (t.next = 30);
                                break;
                              case 29:
                                c = s;
                              case 30:
                                return (
                                  (d =
                                    ('object' !== (0, b.Z)(i) &&
                                      'string' != typeof i) ||
                                    !i
                                      ? n
                                      : i),
                                  (u =
                                    d instanceof File
                                      ? d
                                      : new File([d], n.name, {
                                          type: n.type,
                                        })),
                                  ((p = u).uid = n.uid),
                                  t.abrupt('return', {
                                    origin: n,
                                    data: c,
                                    parsedFile: p,
                                    action: l,
                                  })
                                );
                              case 35:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[3, 9]],
                      );
                    }),
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              ),
              (0, m.Z)((0, u.Z)(e), 'saveFileInput', function (t) {
                e.fileInput = t;
              }),
              e
            );
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._isMounted = !0;
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  (this._isMounted = !1), this.abort();
                },
              },
              {
                key: 'post',
                value: function (e) {
                  var t = this,
                    n = e.data,
                    r = e.origin,
                    o = e.action,
                    i = e.parsedFile;
                  if (this._isMounted) {
                    var a = this.props,
                      l = a.onStart,
                      s = a.customRequest,
                      c = a.name,
                      d = a.headers,
                      u = a.withCredentials,
                      p = a.method,
                      f = r.uid,
                      m = s || E,
                      g = {
                        action: o,
                        filename: c,
                        data: n,
                        file: i,
                        headers: d,
                        withCredentials: u,
                        method: p || 'post',
                        onProgress: function (e) {
                          var n = t.props.onProgress;
                          null == n || n(e, i);
                        },
                        onSuccess: function (e, n) {
                          var r = t.props.onSuccess;
                          null == r || r(e, i, n), delete t.reqs[f];
                        },
                        onError: function (e, n) {
                          var r = t.props.onError;
                          null == r || r(e, n, i), delete t.reqs[f];
                        },
                      };
                    l(r), (this.reqs[f] = m(g));
                  }
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.setState({ uid: Z() });
                },
              },
              {
                key: 'abort',
                value: function (e) {
                  var t = this.reqs;
                  if (e) {
                    var n = e.uid ? e.uid : e;
                    t[n] && t[n].abort && t[n].abort(), delete t[n];
                  } else
                    Object.keys(t).forEach(function (e) {
                      t[e] && t[e].abort && t[e].abort(), delete t[e];
                    });
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.component,
                    o = t.prefixCls,
                    i = t.className,
                    a = t.classNames,
                    c = void 0 === a ? {} : a,
                    d = t.disabled,
                    u = t.id,
                    p = t.style,
                    f = t.styles,
                    v = void 0 === f ? {} : f,
                    b = t.multiple,
                    y = t.accept,
                    w = t.capture,
                    k = t.children,
                    C = t.directory,
                    E = t.openFileDialogOnClick,
                    x = t.onMouseEnter,
                    S = t.onMouseLeave,
                    O = t.hasControlInside,
                    Z = (0, h.Z)(t, I),
                    j = l()(
                      ((e = {}),
                      (0, m.Z)(e, o, !0),
                      (0, m.Z)(e, ''.concat(o, '-disabled'), d),
                      (0, m.Z)(e, i, i),
                      e),
                    ),
                    R = C
                      ? {
                          directory: 'directory',
                          webkitdirectory: 'webkitdirectory',
                        }
                      : {},
                    D = d
                      ? {}
                      : {
                          onClick: E ? this.onClick : function () {},
                          onKeyDown: E ? this.onKeyDown : function () {},
                          onMouseEnter: x,
                          onMouseLeave: S,
                          onDrop: this.onFileDrop,
                          onDragOver: this.onFileDrop,
                          tabIndex: O ? void 0 : '0',
                        };
                  return r.createElement(
                    n,
                    (0, s.Z)({}, D, {
                      className: j,
                      role: O ? void 0 : 'button',
                      style: p,
                    }),
                    r.createElement(
                      'input',
                      (0, s.Z)(
                        {},
                        (0, $.Z)(Z, { aria: !0, data: !0 }),
                        {
                          id: u,
                          disabled: d,
                          type: 'file',
                          ref: this.saveFileInput,
                          onClick: function (e) {
                            return e.stopPropagation();
                          },
                          key: this.state.uid,
                          style: (0, g.Z)({ display: 'none' }, v.input),
                          className: c.input,
                          accept: y,
                        },
                        R,
                        { multiple: b, onChange: this.onChange },
                        null != w ? { capture: w } : {},
                      ),
                    ),
                    k,
                  );
                },
              },
            ]),
            n
          );
        })(r.Component),
        R = j;
      function D() {}
      var N = (function (e) {
        (0, p.Z)(n, e);
        var t = (0, f.Z)(n);
        function n() {
          var e;
          (0, c.Z)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, m.Z)((0, u.Z)(e), 'uploader', void 0),
            (0, m.Z)((0, u.Z)(e), 'saveUploader', function (t) {
              e.uploader = t;
            }),
            e
          );
        }
        return (
          (0, d.Z)(n, [
            {
              key: 'abort',
              value: function (e) {
                this.uploader.abort(e);
              },
            },
            {
              key: 'render',
              value: function () {
                return r.createElement(
                  R,
                  (0, s.Z)({}, this.props, { ref: this.saveUploader }),
                );
              },
            },
          ]),
          n
        );
      })(r.Component);
      (0, m.Z)(N, 'defaultProps', {
        component: 'span',
        prefixCls: 'rc-upload',
        data: {},
        headers: {},
        name: 'file',
        multipart: !1,
        onStart: D,
        onError: D,
        onSuccess: D,
        multiple: !1,
        beforeUpload: null,
        customRequest: null,
        withCredentials: !1,
        openFileDialogOnClick: !0,
        hasControlInside: !1,
      });
      var P = N,
        z = n(21770),
        F = n(53124),
        M = n(98866),
        L = n(10110),
        A = n(24457),
        T = n(14747),
        B = n(33507),
        H = n(91945),
        W = n(45503),
        U = n(54548);
      var X = (e) => {
        const { componentCls: t, iconCls: n } = e;
        return {
          [`${t}-wrapper`]: {
            [`${t}-drag`]: {
              position: 'relative',
              width: '100%',
              height: '100%',
              textAlign: 'center',
              background: e.colorFillAlter,
              border: `${(0, U.bf)(e.lineWidth)} dashed ${e.colorBorder}`,
              borderRadius: e.borderRadiusLG,
              cursor: 'pointer',
              transition: `border-color ${e.motionDurationSlow}`,
              [t]: { padding: e.padding },
              [`${t}-btn`]: {
                display: 'flex',
                placeContent: 'center',
                outline: 'none',
                borderRadius: e.borderRadiusLG,
                '&:focus': {
                  outline: `${(0, U.bf)(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
                },
              },
              [`${t}-drag-container`]: {
                display: 'table-cell',
                verticalAlign: 'middle',
              },
              [`\n          &:not(${t}-disabled):hover,\n          &-hover:not(${t}-disabled)\n        `]:
                { borderColor: e.colorPrimaryHover },
              [`p${t}-drag-icon`]: {
                marginBottom: e.margin,
                [n]: { color: e.colorPrimary, fontSize: e.uploadThumbnailSize },
              },
              [`p${t}-text`]: {
                margin: `0 0 ${(0, U.bf)(e.marginXXS)}`,
                color: e.colorTextHeading,
                fontSize: e.fontSizeLG,
              },
              [`p${t}-hint`]: {
                color: e.colorTextDescription,
                fontSize: e.fontSize,
              },
              [`&${t}-disabled`]: {
                [`p${t}-drag-icon ${n},\n            p${t}-text,\n            p${t}-hint\n          `]:
                  { color: e.colorTextDisabled },
              },
            },
          },
        };
      };
      var q = (e) => {
          const {
              componentCls: t,
              antCls: n,
              iconCls: r,
              fontSize: o,
              lineHeight: i,
              calc: a,
            } = e,
            l = `${t}-list-item`,
            s = `${l}-actions`,
            c = `${l}-action`,
            d = e.fontHeightSM;
          return {
            [`${t}-wrapper`]: {
              [`${t}-list`]: Object.assign(Object.assign({}, (0, T.dF)()), {
                lineHeight: e.lineHeight,
                [l]: {
                  position: 'relative',
                  height: a(e.lineHeight).mul(o).equal(),
                  marginTop: e.marginXS,
                  fontSize: o,
                  display: 'flex',
                  alignItems: 'center',
                  transition: `background-color ${e.motionDurationSlow}`,
                  '&:hover': { backgroundColor: e.controlItemBgHover },
                  [`${l}-name`]: Object.assign(Object.assign({}, T.vS), {
                    padding: `0 ${(0, U.bf)(e.paddingXS)}`,
                    lineHeight: i,
                    flex: 'auto',
                    transition: `all ${e.motionDurationSlow}`,
                  }),
                  [s]: {
                    [c]: { opacity: 0 },
                    [r]: {
                      color: e.actionsColor,
                      transition: `all ${e.motionDurationSlow}`,
                    },
                    [`\n              ${c}:focus-visible,\n              &.picture ${c}\n            `]:
                      { opacity: 1 },
                    [`${c}${n}-btn`]: { height: d, border: 0, lineHeight: 1 },
                  },
                  [`${t}-icon ${r}`]: {
                    color: e.colorTextDescription,
                    fontSize: o,
                  },
                  [`${l}-progress`]: {
                    position: 'absolute',
                    bottom: e.calc(e.uploadProgressOffset).mul(-1).equal(),
                    width: '100%',
                    paddingInlineStart: a(o).add(e.paddingXS).equal(),
                    fontSize: o,
                    lineHeight: 0,
                    pointerEvents: 'none',
                    '> div': { margin: 0 },
                  },
                },
                [`${l}:hover ${c}`]: { opacity: 1 },
                [`${l}-error`]: {
                  color: e.colorError,
                  [`${l}-name, ${t}-icon ${r}`]: { color: e.colorError },
                  [s]: {
                    [`${r}, ${r}:hover`]: { color: e.colorError },
                    [c]: { opacity: 1 },
                  },
                },
                [`${t}-list-item-container`]: {
                  transition: `opacity ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
                  '&::before': {
                    display: 'table',
                    width: 0,
                    height: 0,
                    content: '""',
                  },
                },
              }),
            },
          };
        },
        _ = n(16932);
      const V = new U.E4('uploadAnimateInlineIn', {
          from: { width: 0, height: 0, margin: 0, padding: 0, opacity: 0 },
        }),
        G = new U.E4('uploadAnimateInlineOut', {
          to: { width: 0, height: 0, margin: 0, padding: 0, opacity: 0 },
        });
      var K = (e) => {
          const { componentCls: t } = e,
            n = `${t}-animate-inline`;
          return [
            {
              [`${t}-wrapper`]: {
                [`${n}-appear, ${n}-enter, ${n}-leave`]: {
                  animationDuration: e.motionDurationSlow,
                  animationTimingFunction: e.motionEaseInOutCirc,
                  animationFillMode: 'forwards',
                },
                [`${n}-appear, ${n}-enter`]: { animationName: V },
                [`${n}-leave`]: { animationName: G },
              },
            },
            { [`${t}-wrapper`]: (0, _.J$)(e) },
            V,
            G,
          ];
        },
        J = n(16397);
      const Q = (e) => {
          const {
              componentCls: t,
              iconCls: n,
              uploadThumbnailSize: r,
              uploadProgressOffset: o,
              calc: i,
            } = e,
            a = `${t}-list`,
            l = `${a}-item`;
          return {
            [`${t}-wrapper`]: {
              [`\n        ${a}${a}-picture,\n        ${a}${a}-picture-card,\n        ${a}${a}-picture-circle\n      `]:
                {
                  [l]: {
                    position: 'relative',
                    height: i(r)
                      .add(i(e.lineWidth).mul(2))
                      .add(i(e.paddingXS).mul(2))
                      .equal(),
                    padding: e.paddingXS,
                    border: `${(0, U.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                    borderRadius: e.borderRadiusLG,
                    '&:hover': { background: 'transparent' },
                    [`${l}-thumbnail`]: Object.assign(Object.assign({}, T.vS), {
                      width: r,
                      height: r,
                      lineHeight: (0, U.bf)(i(r).add(e.paddingSM).equal()),
                      textAlign: 'center',
                      flex: 'none',
                      [n]: {
                        fontSize: e.fontSizeHeading2,
                        color: e.colorPrimary,
                      },
                      img: {
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                      },
                    }),
                    [`${l}-progress`]: {
                      bottom: o,
                      width: `calc(100% - ${(0, U.bf)(i(e.paddingSM).mul(2).equal())})`,
                      marginTop: 0,
                      paddingInlineStart: i(r).add(e.paddingXS).equal(),
                    },
                  },
                  [`${l}-error`]: {
                    borderColor: e.colorError,
                    [`${l}-thumbnail ${n}`]: {
                      [`svg path[fill='${J.iN[0]}']`]: { fill: e.colorErrorBg },
                      [`svg path[fill='${J.iN.primary}']`]: {
                        fill: e.colorError,
                      },
                    },
                  },
                  [`${l}-uploading`]: {
                    borderStyle: 'dashed',
                    [`${l}-name`]: { marginBottom: o },
                  },
                },
              [`${a}${a}-picture-circle ${l}`]: {
                [`&, &::before, ${l}-thumbnail`]: { borderRadius: '50%' },
              },
            },
          };
        },
        Y = (e) => {
          const {
              componentCls: t,
              iconCls: n,
              fontSizeLG: r,
              colorTextLightSolid: o,
              calc: i,
            } = e,
            a = `${t}-list`,
            l = `${a}-item`,
            s = e.uploadPicCardSize;
          return {
            [`\n      ${t}-wrapper${t}-picture-card-wrapper,\n      ${t}-wrapper${t}-picture-circle-wrapper\n    `]:
              Object.assign(Object.assign({}, (0, T.dF)()), {
                display: 'inline-block',
                width: '100%',
                [`${t}${t}-select`]: {
                  width: s,
                  height: s,
                  marginInlineEnd: e.marginXS,
                  marginBottom: e.marginXS,
                  textAlign: 'center',
                  verticalAlign: 'top',
                  backgroundColor: e.colorFillAlter,
                  border: `${(0, U.bf)(e.lineWidth)} dashed ${e.colorBorder}`,
                  borderRadius: e.borderRadiusLG,
                  cursor: 'pointer',
                  transition: `border-color ${e.motionDurationSlow}`,
                  [`> ${t}`]: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center',
                  },
                  [`&:not(${t}-disabled):hover`]: {
                    borderColor: e.colorPrimary,
                  },
                },
                [`${a}${a}-picture-card, ${a}${a}-picture-circle`]: {
                  [`${a}-item-container`]: {
                    display: 'inline-block',
                    width: s,
                    height: s,
                    marginBlock: `0 ${(0, U.bf)(e.marginXS)}`,
                    marginInline: `0 ${(0, U.bf)(e.marginXS)}`,
                    verticalAlign: 'top',
                  },
                  '&::after': { display: 'none' },
                  [l]: {
                    height: '100%',
                    margin: 0,
                    '&::before': {
                      position: 'absolute',
                      zIndex: 1,
                      width: `calc(100% - ${(0, U.bf)(i(e.paddingXS).mul(2).equal())})`,
                      height: `calc(100% - ${(0, U.bf)(i(e.paddingXS).mul(2).equal())})`,
                      backgroundColor: e.colorBgMask,
                      opacity: 0,
                      transition: `all ${e.motionDurationSlow}`,
                      content: '" "',
                    },
                  },
                  [`${l}:hover`]: {
                    [`&::before, ${l}-actions`]: { opacity: 1 },
                  },
                  [`${l}-actions`]: {
                    position: 'absolute',
                    insetInlineStart: 0,
                    zIndex: 10,
                    width: '100%',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                    opacity: 0,
                    transition: `all ${e.motionDurationSlow}`,
                    [`\n            ${n}-eye,\n            ${n}-download,\n            ${n}-delete\n          `]:
                      {
                        zIndex: 10,
                        width: r,
                        margin: `0 ${(0, U.bf)(e.marginXXS)}`,
                        fontSize: r,
                        cursor: 'pointer',
                        transition: `all ${e.motionDurationSlow}`,
                        color: o,
                        '&:hover': { color: o },
                        svg: { verticalAlign: 'baseline' },
                      },
                  },
                  [`${l}-thumbnail, ${l}-thumbnail img`]: {
                    position: 'static',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  },
                  [`${l}-name`]: { display: 'none', textAlign: 'center' },
                  [`${l}-file + ${l}-name`]: {
                    position: 'absolute',
                    bottom: e.margin,
                    display: 'block',
                    width: `calc(100% - ${(0, U.bf)(i(e.paddingXS).mul(2).equal())})`,
                  },
                  [`${l}-uploading`]: {
                    [`&${l}`]: { backgroundColor: e.colorFillAlter },
                    [`&::before, ${n}-eye, ${n}-download, ${n}-delete`]: {
                      display: 'none',
                    },
                  },
                  [`${l}-progress`]: {
                    bottom: e.marginXL,
                    width: `calc(100% - ${(0, U.bf)(i(e.paddingXS).mul(2).equal())})`,
                    paddingInlineStart: 0,
                  },
                },
              }),
            [`${t}-wrapper${t}-picture-circle-wrapper`]: {
              [`${t}${t}-select`]: { borderRadius: '50%' },
            },
          };
        };
      var ee = (e) => {
        const { componentCls: t } = e;
        return { [`${t}-rtl`]: { direction: 'rtl' } };
      };
      const te = (e) => {
        const { componentCls: t, colorTextDisabled: n } = e;
        return {
          [`${t}-wrapper`]: Object.assign(Object.assign({}, (0, T.Wf)(e)), {
            [t]: { outline: 0, "input[type='file']": { cursor: 'pointer' } },
            [`${t}-select`]: { display: 'inline-block' },
            [`${t}-disabled`]: { color: n, cursor: 'not-allowed' },
          }),
        };
      };
      var ne = (0, H.I$)(
          'Upload',
          (e) => {
            const {
                fontSizeHeading3: t,
                fontHeight: n,
                lineWidth: r,
                controlHeightLG: o,
                calc: i,
              } = e,
              a = (0, W.TS)(e, {
                uploadThumbnailSize: i(t).mul(2).equal(),
                uploadProgressOffset: i(i(n).div(2)).add(r).equal(),
                uploadPicCardSize: i(o).mul(2.55).equal(),
              });
            return [te(a), X(a), Q(a), Y(a), q(a), K(a), ee(a), (0, B.Z)(a)];
          },
          (e) => ({ actionsColor: e.colorTextDescription }),
        ),
        re = {
          icon: function (e, t) {
            return {
              tag: 'svg',
              attrs: { viewBox: '64 64 896 896', focusable: 'false' },
              children: [
                {
                  tag: 'path',
                  attrs: {
                    d: 'M534 352V136H232v752h560V394H576a42 42 0 01-42-42z',
                    fill: t,
                  },
                },
                {
                  tag: 'path',
                  attrs: {
                    d: 'M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z',
                    fill: e,
                  },
                },
              ],
            };
          },
          name: 'file',
          theme: 'twotone',
        },
        oe = n(84089),
        ie = function (e, t) {
          return r.createElement(oe.Z, (0, s.Z)({}, e, { ref: t, icon: re }));
        };
      var ae = r.forwardRef(ie),
        le = n(50888),
        se = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z',
                },
              },
            ],
          },
          name: 'paper-clip',
          theme: 'outlined',
        },
        ce = function (e, t) {
          return r.createElement(oe.Z, (0, s.Z)({}, e, { ref: t, icon: se }));
        };
      var de = r.forwardRef(ce),
        ue = {
          icon: function (e, t) {
            return {
              tag: 'svg',
              attrs: { viewBox: '64 64 896 896', focusable: 'false' },
              children: [
                {
                  tag: 'path',
                  attrs: {
                    d: 'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z',
                    fill: e,
                  },
                },
                {
                  tag: 'path',
                  attrs: {
                    d: 'M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z',
                    fill: t,
                  },
                },
                {
                  tag: 'path',
                  attrs: {
                    d: 'M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z',
                    fill: t,
                  },
                },
                {
                  tag: 'path',
                  attrs: {
                    d: 'M276 368a28 28 0 1056 0 28 28 0 10-56 0z',
                    fill: t,
                  },
                },
                {
                  tag: 'path',
                  attrs: {
                    d: 'M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z',
                    fill: e,
                  },
                },
              ],
            };
          },
          name: 'picture',
          theme: 'twotone',
        },
        pe = function (e, t) {
          return r.createElement(oe.Z, (0, s.Z)({}, e, { ref: t, icon: ue }));
        };
      var fe = r.forwardRef(pe),
        me = n(82225),
        ge = n(57838),
        he = n(33603),
        ve = n(96159),
        be = n(15867);
      function ye(e) {
        return Object.assign(Object.assign({}, e), {
          lastModified: e.lastModified,
          lastModifiedDate: e.lastModifiedDate,
          name: e.name,
          size: e.size,
          type: e.type,
          uid: e.uid,
          percent: 0,
          originFileObj: e,
        });
      }
      function $e(e, t) {
        const n = (0, o.Z)(t),
          r = n.findIndex((t) => {
            let { uid: n } = t;
            return n === e.uid;
          });
        return -1 === r ? n.push(e) : (n[r] = e), n;
      }
      function we(e, t) {
        const n = void 0 !== e.uid ? 'uid' : 'name';
        return t.filter((t) => t[n] === e[n])[0];
      }
      const ke = (e) => 0 === e.indexOf('image/'),
        Ce = (e) => {
          if (e.type && !e.thumbUrl) return ke(e.type);
          const t = e.thumbUrl || e.url || '',
            n = (function () {
              const e = (
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : ''
                ).split('/'),
                t = e[e.length - 1].split(/#|\?/)[0];
              return (/\.[^./\\]*$/.exec(t) || [''])[0];
            })(t);
          return (
            !(
              !/^data:image\//.test(t) &&
              !/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(
                n,
              )
            ) ||
            (!/^data:/.test(t) && !n)
          );
        },
        Ee = 200;
      function xe(e) {
        return new Promise((t) => {
          if (!e.type || !ke(e.type)) return void t('');
          const n = document.createElement('canvas');
          (n.width = Ee),
            (n.height = Ee),
            (n.style.cssText =
              'position: fixed; left: 0; top: 0; width: 200px; height: 200px; z-index: 9999; display: none;'),
            document.body.appendChild(n);
          const r = n.getContext('2d'),
            o = new Image();
          if (
            ((o.onload = () => {
              const { width: e, height: i } = o;
              let a = Ee,
                l = Ee,
                s = 0,
                c = 0;
              e > i
                ? ((l = i * (Ee / e)), (c = -(l - a) / 2))
                : ((a = e * (Ee / i)), (s = -(a - l) / 2)),
                r.drawImage(o, s, c, a, l);
              const d = n.toDataURL();
              document.body.removeChild(n),
                window.URL.revokeObjectURL(o.src),
                t(d);
            }),
            (o.crossOrigin = 'anonymous'),
            e.type.startsWith('image/svg+xml'))
          ) {
            const t = new FileReader();
            (t.onload = () => {
              t.result && (o.src = t.result);
            }),
              t.readAsDataURL(e);
          } else if (e.type.startsWith('image/gif')) {
            const n = new FileReader();
            (n.onload = () => {
              n.result && t(n.result);
            }),
              n.readAsDataURL(e);
          } else o.src = window.URL.createObjectURL(e);
        });
      }
      var Se = n(48689),
        Oe = n(23430),
        Ze = n(99611),
        Ie = n(38703),
        je = n(83062);
      const Re = r.forwardRef((e, t) => {
        let {
          prefixCls: n,
          className: o,
          style: i,
          locale: a,
          listType: s,
          file: c,
          items: d,
          progress: u,
          iconRender: p,
          actionIconRender: f,
          itemRender: m,
          isImgUrl: g,
          showPreviewIcon: h,
          showRemoveIcon: v,
          showDownloadIcon: b,
          previewIcon: y,
          removeIcon: $,
          downloadIcon: w,
          onPreview: k,
          onDownload: C,
          onClose: E,
        } = e;
        var x, S;
        const { status: O } = c,
          [Z, I] = r.useState(O);
        r.useEffect(() => {
          'removed' !== O && I(O);
        }, [O]);
        const [j, R] = r.useState(!1);
        r.useEffect(() => {
          const e = setTimeout(() => {
            R(!0);
          }, 300);
          return () => {
            clearTimeout(e);
          };
        }, []);
        const D = p(c);
        let N = r.createElement('div', { className: `${n}-icon` }, D);
        if ('picture' === s || 'picture-card' === s || 'picture-circle' === s)
          if ('uploading' === Z || (!c.thumbUrl && !c.url)) {
            const e = l()(`${n}-list-item-thumbnail`, {
              [`${n}-list-item-file`]: 'uploading' !== Z,
            });
            N = r.createElement('div', { className: e }, D);
          } else {
            const e = (null == g ? void 0 : g(c))
                ? r.createElement('img', {
                    src: c.thumbUrl || c.url,
                    alt: c.name,
                    className: `${n}-list-item-image`,
                    crossOrigin: c.crossOrigin,
                  })
                : D,
              t = l()(`${n}-list-item-thumbnail`, {
                [`${n}-list-item-file`]: g && !g(c),
              });
            N = r.createElement(
              'a',
              {
                className: t,
                onClick: (e) => k(c, e),
                href: c.url || c.thumbUrl,
                target: '_blank',
                rel: 'noopener noreferrer',
              },
              e,
            );
          }
        const P = l()(`${n}-list-item`, `${n}-list-item-${Z}`),
          z =
            'string' == typeof c.linkProps
              ? JSON.parse(c.linkProps)
              : c.linkProps,
          M = v
            ? f(
                ('function' == typeof $ ? $(c) : $) ||
                  r.createElement(Se.Z, null),
                () => E(c),
                n,
                a.removeFile,
                !0,
              )
            : null,
          L =
            b && 'done' === Z
              ? f(
                  ('function' == typeof w ? w(c) : w) ||
                    r.createElement(Oe.Z, null),
                  () => C(c),
                  n,
                  a.downloadFile,
                )
              : null,
          A =
            'picture-card' !== s &&
            'picture-circle' !== s &&
            r.createElement(
              'span',
              {
                key: 'download-delete',
                className: l()(`${n}-list-item-actions`, {
                  picture: 'picture' === s,
                }),
              },
              L,
              M,
            ),
          T = l()(`${n}-list-item-name`),
          B = c.url
            ? [
                r.createElement(
                  'a',
                  Object.assign(
                    {
                      key: 'view',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: T,
                      title: c.name,
                    },
                    z,
                    { href: c.url, onClick: (e) => k(c, e) },
                  ),
                  c.name,
                ),
                A,
              ]
            : [
                r.createElement(
                  'span',
                  {
                    key: 'view',
                    className: T,
                    onClick: (e) => k(c, e),
                    title: c.name,
                  },
                  c.name,
                ),
                A,
              ],
          H =
            h && (c.url || c.thumbUrl)
              ? r.createElement(
                  'a',
                  {
                    href: c.url || c.thumbUrl,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    onClick: (e) => k(c, e),
                    title: a.previewFile,
                  },
                  'function' == typeof y
                    ? y(c)
                    : y || r.createElement(Ze.Z, null),
                )
              : null,
          W =
            ('picture-card' === s || 'picture-circle' === s) &&
            'uploading' !== Z &&
            r.createElement(
              'span',
              { className: `${n}-list-item-actions` },
              H,
              'done' === Z && L,
              M,
            ),
          { getPrefixCls: U } = r.useContext(F.E_),
          X = U(),
          q = r.createElement(
            'div',
            { className: P },
            N,
            B,
            W,
            j &&
              r.createElement(
                me.ZP,
                {
                  motionName: `${X}-fade`,
                  visible: 'uploading' === Z,
                  motionDeadline: 2e3,
                },
                (e) => {
                  let { className: t } = e;
                  const o =
                    'percent' in c
                      ? r.createElement(
                          Ie.Z,
                          Object.assign({}, u, {
                            type: 'line',
                            percent: c.percent,
                            'aria-label': c['aria-label'],
                            'aria-labelledby': c['aria-labelledby'],
                          }),
                        )
                      : null;
                  return r.createElement(
                    'div',
                    { className: l()(`${n}-list-item-progress`, t) },
                    o,
                  );
                },
              ),
          ),
          _ =
            c.response && 'string' == typeof c.response
              ? c.response
              : (null === (x = c.error) || void 0 === x
                  ? void 0
                  : x.statusText) ||
                (null === (S = c.error) || void 0 === S ? void 0 : S.message) ||
                a.uploadError,
          V =
            'error' === Z
              ? r.createElement(
                  je.Z,
                  { title: _, getPopupContainer: (e) => e.parentNode },
                  q,
                )
              : q;
        return r.createElement(
          'div',
          { className: l()(`${n}-list-item-container`, o), style: i, ref: t },
          m
            ? m(V, c, d, {
                download: C.bind(null, c),
                preview: k.bind(null, c),
                remove: E.bind(null, c),
              })
            : V,
        );
      });
      var De = Re;
      const Ne = (e, t) => {
        const {
            listType: n = 'text',
            previewFile: i = xe,
            onPreview: a,
            onDownload: s,
            onRemove: c,
            locale: d,
            iconRender: u,
            isImageUrl: p = Ce,
            prefixCls: f,
            items: m = [],
            showPreviewIcon: g = !0,
            showRemoveIcon: h = !0,
            showDownloadIcon: v = !1,
            removeIcon: b,
            previewIcon: y,
            downloadIcon: $,
            progress: w = { size: [-1, 2], showInfo: !1 },
            appendAction: k,
            appendActionVisible: C = !0,
            itemRender: E,
            disabled: x,
          } = e,
          S = (0, ge.Z)(),
          [O, Z] = r.useState(!1);
        r.useEffect(() => {
          ('picture' !== n && 'picture-card' !== n && 'picture-circle' !== n) ||
            (m || []).forEach((e) => {
              'undefined' != typeof document &&
                'undefined' != typeof window &&
                window.FileReader &&
                window.File &&
                (e.originFileObj instanceof File ||
                  e.originFileObj instanceof Blob) &&
                void 0 === e.thumbUrl &&
                ((e.thumbUrl = ''),
                i &&
                  i(e.originFileObj).then((t) => {
                    (e.thumbUrl = t || ''), S();
                  }));
            });
        }, [n, m, i]),
          r.useEffect(() => {
            Z(!0);
          }, []);
        const I = (e, t) => {
            if (a) return null == t || t.preventDefault(), a(e);
          },
          j = (e) => {
            'function' == typeof s ? s(e) : e.url && window.open(e.url);
          },
          R = (e) => {
            null == c || c(e);
          },
          D = (e) => {
            if (u) return u(e, n);
            const t = 'uploading' === e.status,
              o =
                p && p(e)
                  ? r.createElement(fe, null)
                  : r.createElement(ae, null);
            let i = t ? r.createElement(le.Z, null) : r.createElement(de, null);
            return (
              'picture' === n
                ? (i = t ? r.createElement(le.Z, null) : o)
                : ('picture-card' !== n && 'picture-circle' !== n) ||
                  (i = t ? d.uploading : o),
              i
            );
          },
          N = (e, t, n, o, i) => {
            const a = {
              type: 'text',
              size: 'small',
              title: o,
              onClick: (n) => {
                t(), (0, ve.l$)(e) && e.props.onClick && e.props.onClick(n);
              },
              className: `${n}-list-item-action`,
            };
            if ((i && (a.disabled = x), (0, ve.l$)(e))) {
              const t = (0, ve.Tm)(
                e,
                Object.assign(Object.assign({}, e.props), {
                  onClick: () => {},
                }),
              );
              return r.createElement(be.ZP, Object.assign({}, a, { icon: t }));
            }
            return r.createElement(
              be.ZP,
              Object.assign({}, a),
              r.createElement('span', null, e),
            );
          };
        r.useImperativeHandle(t, () => ({
          handlePreview: I,
          handleDownload: j,
        }));
        const { getPrefixCls: P } = r.useContext(F.E_),
          z = P('upload', f),
          M = P(),
          L = l()(`${z}-list`, `${z}-list-${n}`),
          A = (0, o.Z)(m.map((e) => ({ key: e.uid, file: e })));
        let T = {
          motionDeadline: 2e3,
          motionName: `${z}-${'picture-card' === n || 'picture-circle' === n ? 'animate-inline' : 'animate'}`,
          keys: A,
          motionAppear: O,
        };
        const B = r.useMemo(() => {
          const e = Object.assign({}, (0, he.Z)(M));
          return (
            delete e.onAppearEnd, delete e.onEnterEnd, delete e.onLeaveEnd, e
          );
        }, [M]);
        return (
          'picture-card' !== n &&
            'picture-circle' !== n &&
            (T = Object.assign(Object.assign({}, B), T)),
          r.createElement(
            'div',
            { className: L },
            r.createElement(
              me.V4,
              Object.assign({}, T, { component: !1 }),
              (e) => {
                let { key: t, file: o, className: i, style: a } = e;
                return r.createElement(De, {
                  key: t,
                  locale: d,
                  prefixCls: z,
                  className: i,
                  style: a,
                  file: o,
                  items: m,
                  progress: w,
                  listType: n,
                  isImgUrl: p,
                  showPreviewIcon: g,
                  showRemoveIcon: h,
                  showDownloadIcon: v,
                  removeIcon: b,
                  previewIcon: y,
                  downloadIcon: $,
                  iconRender: D,
                  actionIconRender: N,
                  itemRender: E,
                  onPreview: I,
                  onDownload: j,
                  onClose: R,
                });
              },
            ),
            k &&
              r.createElement(
                me.ZP,
                Object.assign({}, T, { visible: C, forceRender: !0 }),
                (e) => {
                  let { className: t, style: n } = e;
                  return (0, ve.Tm)(k, (e) => ({
                    className: l()(e.className, t),
                    style: Object.assign(
                      Object.assign(Object.assign({}, n), {
                        pointerEvents: t ? 'none' : void 0,
                      }),
                      e.style,
                    ),
                  }));
                },
              ),
          )
        );
      };
      var Pe = r.forwardRef(Ne),
        ze = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            s((r = r.apply(e, t || [])).next());
          });
        };
      const Fe = `__LIST_IGNORE_${Date.now()}__`,
        Me = (e, t) => {
          const {
              fileList: n,
              defaultFileList: a,
              onRemove: s,
              showUploadList: c = !0,
              listType: d = 'text',
              onPreview: u,
              onDownload: p,
              onChange: f,
              onDrop: m,
              previewFile: g,
              disabled: h,
              locale: v,
              iconRender: b,
              isImageUrl: y,
              progress: $,
              prefixCls: w,
              className: k,
              type: C = 'select',
              children: E,
              style: x,
              itemRender: S,
              maxCount: O,
              data: Z = {},
              multiple: I = !1,
              hasControlInside: j = !0,
              action: R = '',
              accept: D = '',
              supportServerRender: N = !0,
              rootClassName: T,
            } = e,
            B = r.useContext(M.Z),
            H = null != h ? h : B,
            [W, U] = (0, z.Z)(a || [], {
              value: n,
              postState: (e) => (null != e ? e : []),
            }),
            [X, q] = r.useState('drop'),
            _ = r.useRef(null);
          r.useMemo(() => {
            const e = Date.now();
            (n || []).forEach((t, n) => {
              t.uid || Object.isFrozen(t) || (t.uid = `__AUTO__${e}_${n}__`);
            });
          }, [n]);
          const V = (e, t, n) => {
              let r = (0, o.Z)(t),
                a = !1;
              1 === O
                ? (r = r.slice(-1))
                : O && ((a = r.length > O), (r = r.slice(0, O))),
                (0, i.flushSync)(() => {
                  U(r);
                });
              const l = { file: e, fileList: r };
              n && (l.event = n),
                (a && !r.some((t) => t.uid === e.uid)) ||
                  (0, i.flushSync)(() => {
                    null == f || f(l);
                  });
            },
            G = (e) => {
              const t = e.filter((e) => !e.file[Fe]);
              if (!t.length) return;
              const n = t.map((e) => ye(e.file));
              let r = (0, o.Z)(W);
              n.forEach((e) => {
                r = $e(e, r);
              }),
                n.forEach((e, n) => {
                  let o = e;
                  if (t[n].parsedFile) e.status = 'uploading';
                  else {
                    const { originFileObj: t } = e;
                    let n;
                    try {
                      n = new File([t], t.name, { type: t.type });
                    } catch (e) {
                      (n = new Blob([t], { type: t.type })),
                        (n.name = t.name),
                        (n.lastModifiedDate = new Date()),
                        (n.lastModified = new Date().getTime());
                    }
                    (n.uid = e.uid), (o = n);
                  }
                  V(o, r);
                });
            },
            K = (e, t, n) => {
              try {
                'string' == typeof e && (e = JSON.parse(e));
              } catch (e) {}
              if (!we(t, W)) return;
              const r = ye(t);
              (r.status = 'done'),
                (r.percent = 100),
                (r.response = e),
                (r.xhr = n);
              const o = $e(r, W);
              V(r, o);
            },
            J = (e, t) => {
              if (!we(t, W)) return;
              const n = ye(t);
              (n.status = 'uploading'), (n.percent = e.percent);
              const r = $e(n, W);
              V(n, r, e);
            },
            Q = (e, t, n) => {
              if (!we(n, W)) return;
              const r = ye(n);
              (r.error = e), (r.response = t), (r.status = 'error');
              const o = $e(r, W);
              V(r, o);
            },
            Y = (e) => {
              let t;
              Promise.resolve('function' == typeof s ? s(e) : s).then((n) => {
                var r;
                if (!1 === n) return;
                const o = (function (e, t) {
                  const n = void 0 !== e.uid ? 'uid' : 'name',
                    r = t.filter((t) => t[n] !== e[n]);
                  return r.length === t.length ? null : r;
                })(e, W);
                o &&
                  ((t = Object.assign(Object.assign({}, e), {
                    status: 'removed',
                  })),
                  null == W ||
                    W.forEach((e) => {
                      const n = void 0 !== t.uid ? 'uid' : 'name';
                      e[n] !== t[n] ||
                        Object.isFrozen(e) ||
                        (e.status = 'removed');
                    }),
                  null === (r = _.current) || void 0 === r || r.abort(t),
                  V(t, o));
              });
            },
            ee = (e) => {
              q(e.type), 'drop' === e.type && (null == m || m(e));
            };
          r.useImperativeHandle(t, () => ({
            onBatchStart: G,
            onSuccess: K,
            onProgress: J,
            onError: Q,
            fileList: W,
            upload: _.current,
          }));
          const {
              getPrefixCls: te,
              direction: re,
              upload: oe,
            } = r.useContext(F.E_),
            ie = te('upload', w),
            ae = Object.assign(
              Object.assign(
                { onBatchStart: G, onError: Q, onProgress: J, onSuccess: K },
                e,
              ),
              {
                data: Z,
                multiple: I,
                action: R,
                accept: D,
                supportServerRender: N,
                prefixCls: ie,
                disabled: H,
                beforeUpload: (t, n) =>
                  ze(void 0, void 0, void 0, function* () {
                    const { beforeUpload: r, transformFile: o } = e;
                    let i = t;
                    if (r) {
                      const e = yield r(t, n);
                      if (!1 === e) return !1;
                      if ((delete t[Fe], e === Fe))
                        return (
                          Object.defineProperty(t, Fe, {
                            value: !0,
                            configurable: !0,
                          }),
                          !1
                        );
                      'object' == typeof e && e && (i = e);
                    }
                    return o && (i = yield o(i)), i;
                  }),
                onChange: void 0,
                hasControlInside: j,
              },
            );
          delete ae.className, delete ae.style, (E && !H) || delete ae.id;
          const le = `${ie}-wrapper`,
            [se, ce, de] = ne(ie, le),
            [ue] = (0, L.Z)('Upload', A.Z.Upload),
            {
              showRemoveIcon: pe,
              showPreviewIcon: fe,
              showDownloadIcon: me,
              removeIcon: ge,
              previewIcon: he,
              downloadIcon: ve,
            } = 'boolean' == typeof c ? {} : c,
            be = void 0 === pe ? !H : !!pe,
            ke = (e, t) =>
              c
                ? r.createElement(Pe, {
                    prefixCls: ie,
                    listType: d,
                    items: W,
                    previewFile: g,
                    onPreview: u,
                    onDownload: p,
                    onRemove: Y,
                    showRemoveIcon: be,
                    showPreviewIcon: fe,
                    showDownloadIcon: me,
                    removeIcon: ge,
                    previewIcon: he,
                    downloadIcon: ve,
                    iconRender: b,
                    locale: Object.assign(Object.assign({}, ue), v),
                    isImageUrl: y,
                    progress: $,
                    appendAction: e,
                    appendActionVisible: t,
                    itemRender: S,
                    disabled: H,
                  })
                : e,
            Ce = l()(le, k, T, ce, de, null == oe ? void 0 : oe.className, {
              [`${ie}-rtl`]: 'rtl' === re,
              [`${ie}-picture-card-wrapper`]: 'picture-card' === d,
              [`${ie}-picture-circle-wrapper`]: 'picture-circle' === d,
            }),
            Ee = Object.assign(
              Object.assign({}, null == oe ? void 0 : oe.style),
              x,
            );
          if ('drag' === C) {
            const e = l()(ce, ie, `${ie}-drag`, {
              [`${ie}-drag-uploading`]: W.some((e) => 'uploading' === e.status),
              [`${ie}-drag-hover`]: 'dragover' === X,
              [`${ie}-disabled`]: H,
              [`${ie}-rtl`]: 'rtl' === re,
            });
            return se(
              r.createElement(
                'span',
                { className: Ce },
                r.createElement(
                  'div',
                  {
                    className: e,
                    style: Ee,
                    onDrop: ee,
                    onDragOver: ee,
                    onDragLeave: ee,
                  },
                  r.createElement(
                    P,
                    Object.assign({}, ae, { ref: _, className: `${ie}-btn` }),
                    r.createElement(
                      'div',
                      { className: `${ie}-drag-container` },
                      E,
                    ),
                  ),
                ),
                ke(),
              ),
            );
          }
          const xe = l()(ie, `${ie}-select`, { [`${ie}-disabled`]: H }),
            Se =
              ((Oe = E ? void 0 : { display: 'none' }),
              r.createElement(
                'div',
                { className: xe, style: Oe },
                r.createElement(P, Object.assign({}, ae, { ref: _ })),
              ));
          var Oe;
          return se(
            'picture-card' === d || 'picture-circle' === d
              ? r.createElement('span', { className: Ce }, ke(Se, !!E))
              : r.createElement('span', { className: Ce }, Se, ke()),
          );
        };
      var Le = r.forwardRef(Me),
        Ae = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        };
      const Te = r.forwardRef((e, t) => {
        var { style: n, height: o, hasControlInside: i = !1 } = e,
          a = Ae(e, ['style', 'height', 'hasControlInside']);
        return r.createElement(
          Le,
          Object.assign({ ref: t, hasControlInside: i }, a, {
            type: 'drag',
            style: Object.assign(Object.assign({}, n), { height: o }),
          }),
        );
      });
      var Be = Te;
      const He = Le;
      (He.Dragger = Be), (He.LIST_IGNORE = Fe);
      var We = He;
    },
  },
]);
//# sourceMappingURL=5305.16cec56d.async.js.map
