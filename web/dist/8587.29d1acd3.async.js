'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [8587, 411],
  {
    16165: function (e, t, o) {
      var n = o(87462),
        r = o(1413),
        i = o(4942),
        a = o(45987),
        l = o(62435),
        s = o(93967),
        c = o.n(s),
        d = o(42550),
        u = o(63017),
        g = o(41755),
        p = [
          'className',
          'component',
          'viewBox',
          'spin',
          'rotate',
          'tabIndex',
          'onClick',
          'children',
        ],
        f = l.forwardRef(function (e, t) {
          var o = e.className,
            s = e.component,
            f = e.viewBox,
            m = e.spin,
            b = e.rotate,
            h = e.tabIndex,
            $ = e.onClick,
            y = e.children,
            v = (0, a.Z)(e, p),
            x = l.useRef(),
            C = (0, d.x1)(x, t);
          (0, g.Kp)(
            Boolean(s || y),
            'Should have `component` prop or `children`.',
          ),
            (0, g.C3)(x);
          var S = l.useContext(u.Z),
            O = S.prefixCls,
            k = void 0 === O ? 'anticon' : O,
            E = S.rootClassName,
            w = c()(E, k, o),
            j = c()((0, i.Z)({}, ''.concat(k, '-spin'), !!m)),
            I = b
              ? {
                  msTransform: 'rotate('.concat(b, 'deg)'),
                  transform: 'rotate('.concat(b, 'deg)'),
                }
              : void 0,
            N = (0, r.Z)(
              (0, r.Z)({}, g.vD),
              {},
              { className: j, style: I, viewBox: f },
            );
          f || delete N.viewBox;
          var B = h;
          return (
            void 0 === B && $ && (B = -1),
            l.createElement(
              'span',
              (0, n.Z)({ role: 'img' }, v, {
                ref: C,
                tabIndex: B,
                onClick: $,
                className: w,
              }),
              s
                ? l.createElement(s, N, y)
                : y
                  ? ((0, g.Kp)(
                      Boolean(f) ||
                        (1 === l.Children.count(y) &&
                          l.isValidElement(y) &&
                          'use' === l.Children.only(y).type),
                      'Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon.',
                    ),
                    l.createElement('svg', (0, n.Z)({}, N, { viewBox: f }), y))
                  : null,
            )
          );
        });
      (f.displayName = 'AntdIcon'), (t.Z = f);
    },
    15360: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = o(87462),
        r = o(62435),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z',
                },
              },
            ],
          },
          name: 'file-text',
          theme: 'outlined',
        },
        a = o(84089),
        l = function (e, t) {
          return r.createElement(a.Z, (0, n.Z)({}, e, { ref: t, icon: i }));
        };
      var s = r.forwardRef(l);
    },
    48783: function (e, t, o) {
      var n = o(74902),
        r = o(75164);
      t.Z = function (e) {
        let t;
        const o = function () {
          if (null == t) {
            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
              i[a] = arguments[a];
            t = (0, r.Z)(
              ((o) => () => {
                (t = null), e.apply(void 0, (0, n.Z)(o));
              })(i),
            );
          }
        };
        return (
          (o.cancel = () => {
            r.Z.cancel(t), (t = null);
          }),
          o
        );
      };
    },
    40411: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return Z;
        },
      });
      var n = o(62435),
        r = o(93967),
        i = o.n(r),
        a = o(82225),
        l = o(98787),
        s = o(96159),
        c = o(53124),
        d = o(54548),
        u = o(14747),
        g = o(98719),
        p = o(45503),
        f = o(91945);
      const m = new d.E4('antStatusProcessing', {
          '0%': { transform: 'scale(0.8)', opacity: 0.5 },
          '100%': { transform: 'scale(2.4)', opacity: 0 },
        }),
        b = new d.E4('antZoomBadgeIn', {
          '0%': { transform: 'scale(0) translate(50%, -50%)', opacity: 0 },
          '100%': { transform: 'scale(1) translate(50%, -50%)' },
        }),
        h = new d.E4('antZoomBadgeOut', {
          '0%': { transform: 'scale(1) translate(50%, -50%)' },
          '100%': { transform: 'scale(0) translate(50%, -50%)', opacity: 0 },
        }),
        $ = new d.E4('antNoWrapperZoomBadgeIn', {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)' },
        }),
        y = new d.E4('antNoWrapperZoomBadgeOut', {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)', opacity: 0 },
        }),
        v = new d.E4('antBadgeLoadingCircle', {
          '0%': { transformOrigin: '50%' },
          '100%': {
            transform: 'translate(50%, -50%) rotate(360deg)',
            transformOrigin: '50%',
          },
        }),
        x = (e) => {
          const {
              fontHeight: t,
              lineWidth: o,
              marginXS: n,
              colorBorderBg: r,
            } = e,
            i = t,
            a = o,
            l = e.colorBgContainer,
            s = e.colorError,
            c = e.colorErrorHover;
          return (0, p.TS)(e, {
            badgeFontHeight: i,
            badgeShadowSize: a,
            badgeTextColor: l,
            badgeColor: s,
            badgeColorHover: c,
            badgeShadowColor: r,
            badgeProcessingDuration: '1.2s',
            badgeRibbonOffset: n,
            badgeRibbonCornerTransform: 'scaleY(0.75)',
            badgeRibbonCornerFilter: 'brightness(75%)',
          });
        },
        C = (e) => {
          const { fontSize: t, lineHeight: o, fontSizeSM: n, lineWidth: r } = e;
          return {
            indicatorZIndex: 'auto',
            indicatorHeight: Math.round(t * o) - 2 * r,
            indicatorHeightSM: t,
            dotSize: n / 2,
            textFontSize: n,
            textFontSizeSM: n,
            textFontWeight: 'normal',
            statusSize: n / 2,
          };
        };
      var S = (0, f.I$)(
        'Badge',
        (e) =>
          ((e) => {
            const {
                componentCls: t,
                iconCls: o,
                antCls: n,
                badgeShadowSize: r,
                motionDurationSlow: i,
                textFontSize: a,
                textFontSizeSM: l,
                statusSize: s,
                dotSize: c,
                textFontWeight: p,
                indicatorHeight: f,
                indicatorHeightSM: x,
                marginXS: C,
                calc: S,
              } = e,
              O = `${n}-scroll-number`,
              k = (0, g.Z)(e, (e, o) => {
                let { darkColor: n } = o;
                return {
                  [`&${t} ${t}-color-${e}`]: {
                    background: n,
                    [`&:not(${t}-count)`]: { color: n },
                  },
                };
              });
            return {
              [t]: Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, (0, u.Wf)(e)), {
                    position: 'relative',
                    display: 'inline-block',
                    width: 'fit-content',
                    lineHeight: 1,
                    [`${t}-count`]: {
                      zIndex: e.indicatorZIndex,
                      minWidth: f,
                      height: f,
                      color: e.badgeTextColor,
                      fontWeight: p,
                      fontSize: a,
                      lineHeight: (0, d.bf)(f),
                      whiteSpace: 'nowrap',
                      textAlign: 'center',
                      background: e.badgeColor,
                      borderRadius: S(f).div(2).equal(),
                      boxShadow: `0 0 0 ${(0, d.bf)(r)} ${e.badgeShadowColor}`,
                      transition: `background ${e.motionDurationMid}`,
                      a: { color: e.badgeTextColor },
                      'a:hover': { color: e.badgeTextColor },
                      'a:hover &': { background: e.badgeColorHover },
                    },
                    [`${t}-count-sm`]: {
                      minWidth: x,
                      height: x,
                      fontSize: l,
                      lineHeight: (0, d.bf)(x),
                      borderRadius: S(x).div(2).equal(),
                    },
                    [`${t}-multiple-words`]: {
                      padding: `0 ${(0, d.bf)(e.paddingXS)}`,
                      bdi: { unicodeBidi: 'plaintext' },
                    },
                    [`${t}-dot`]: {
                      zIndex: e.indicatorZIndex,
                      width: c,
                      minWidth: c,
                      height: c,
                      background: e.badgeColor,
                      borderRadius: '100%',
                      boxShadow: `0 0 0 ${(0, d.bf)(r)} ${e.badgeShadowColor}`,
                    },
                    [`${t}-dot${O}`]: { transition: `background ${i}` },
                    [`${t}-count, ${t}-dot, ${O}-custom-component`]: {
                      position: 'absolute',
                      top: 0,
                      insetInlineEnd: 0,
                      transform: 'translate(50%, -50%)',
                      transformOrigin: '100% 0%',
                      [`&${o}-spin`]: {
                        animationName: v,
                        animationDuration: '1s',
                        animationIterationCount: 'infinite',
                        animationTimingFunction: 'linear',
                      },
                    },
                    [`&${t}-status`]: {
                      lineHeight: 'inherit',
                      verticalAlign: 'baseline',
                      [`${t}-status-dot`]: {
                        position: 'relative',
                        top: -1,
                        display: 'inline-block',
                        width: s,
                        height: s,
                        verticalAlign: 'middle',
                        borderRadius: '50%',
                      },
                      [`${t}-status-success`]: {
                        backgroundColor: e.colorSuccess,
                      },
                      [`${t}-status-processing`]: {
                        overflow: 'visible',
                        color: e.colorPrimary,
                        backgroundColor: e.colorPrimary,
                        '&::after': {
                          position: 'absolute',
                          top: 0,
                          insetInlineStart: 0,
                          width: '100%',
                          height: '100%',
                          borderWidth: r,
                          borderStyle: 'solid',
                          borderColor: 'inherit',
                          borderRadius: '50%',
                          animationName: m,
                          animationDuration: e.badgeProcessingDuration,
                          animationIterationCount: 'infinite',
                          animationTimingFunction: 'ease-in-out',
                          content: '""',
                        },
                      },
                      [`${t}-status-default`]: {
                        backgroundColor: e.colorTextPlaceholder,
                      },
                      [`${t}-status-error`]: { backgroundColor: e.colorError },
                      [`${t}-status-warning`]: {
                        backgroundColor: e.colorWarning,
                      },
                      [`${t}-status-text`]: {
                        marginInlineStart: C,
                        color: e.colorText,
                        fontSize: e.fontSize,
                      },
                    },
                  }),
                  k,
                ),
                {
                  [`${t}-zoom-appear, ${t}-zoom-enter`]: {
                    animationName: b,
                    animationDuration: e.motionDurationSlow,
                    animationTimingFunction: e.motionEaseOutBack,
                    animationFillMode: 'both',
                  },
                  [`${t}-zoom-leave`]: {
                    animationName: h,
                    animationDuration: e.motionDurationSlow,
                    animationTimingFunction: e.motionEaseOutBack,
                    animationFillMode: 'both',
                  },
                  [`&${t}-not-a-wrapper`]: {
                    [`${t}-zoom-appear, ${t}-zoom-enter`]: {
                      animationName: $,
                      animationDuration: e.motionDurationSlow,
                      animationTimingFunction: e.motionEaseOutBack,
                    },
                    [`${t}-zoom-leave`]: {
                      animationName: y,
                      animationDuration: e.motionDurationSlow,
                      animationTimingFunction: e.motionEaseOutBack,
                    },
                    [`&:not(${t}-status)`]: { verticalAlign: 'middle' },
                    [`${O}-custom-component, ${t}-count`]: {
                      transform: 'none',
                    },
                    [`${O}-custom-component, ${O}`]: {
                      position: 'relative',
                      top: 'auto',
                      display: 'block',
                      transformOrigin: '50% 50%',
                    },
                  },
                  [`${O}`]: {
                    overflow: 'hidden',
                    [`${O}-only`]: {
                      position: 'relative',
                      display: 'inline-block',
                      height: f,
                      transition: `all ${e.motionDurationSlow} ${e.motionEaseOutBack}`,
                      WebkitTransformStyle: 'preserve-3d',
                      WebkitBackfaceVisibility: 'hidden',
                      [`> p${O}-only-unit`]: {
                        height: f,
                        margin: 0,
                        WebkitTransformStyle: 'preserve-3d',
                        WebkitBackfaceVisibility: 'hidden',
                      },
                    },
                    [`${O}-symbol`]: { verticalAlign: 'top' },
                  },
                  '&-rtl': {
                    direction: 'rtl',
                    [`${t}-count, ${t}-dot, ${O}-custom-component`]: {
                      transform: 'translate(-50%, -50%)',
                    },
                  },
                },
              ),
            };
          })(x(e)),
        C,
      );
      var O = (0, f.I$)(
        ['Badge', 'Ribbon'],
        (e) =>
          ((e) => {
            const {
                antCls: t,
                badgeFontHeight: o,
                marginXS: n,
                badgeRibbonOffset: r,
                calc: i,
              } = e,
              a = `${t}-ribbon`,
              l = `${t}-ribbon-wrapper`,
              s = (0, g.Z)(e, (e, t) => {
                let { darkColor: o } = t;
                return { [`&${a}-color-${e}`]: { background: o, color: o } };
              });
            return {
              [`${l}`]: { position: 'relative' },
              [`${a}`]: Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, (0, u.Wf)(e)), {
                    position: 'absolute',
                    top: n,
                    padding: `0 ${(0, d.bf)(e.paddingXS)}`,
                    color: e.colorPrimary,
                    lineHeight: (0, d.bf)(o),
                    whiteSpace: 'nowrap',
                    backgroundColor: e.colorPrimary,
                    borderRadius: e.borderRadiusSM,
                    [`${a}-text`]: { color: e.colorTextLightSolid },
                    [`${a}-corner`]: {
                      position: 'absolute',
                      top: '100%',
                      width: r,
                      height: r,
                      color: 'currentcolor',
                      border: `${(0, d.bf)(i(r).div(2).equal())} solid`,
                      transform: e.badgeRibbonCornerTransform,
                      transformOrigin: 'top',
                      filter: e.badgeRibbonCornerFilter,
                    },
                  }),
                  s,
                ),
                {
                  [`&${a}-placement-end`]: {
                    insetInlineEnd: i(r).mul(-1).equal(),
                    borderEndEndRadius: 0,
                    [`${a}-corner`]: {
                      insetInlineEnd: 0,
                      borderInlineEndColor: 'transparent',
                      borderBlockEndColor: 'transparent',
                    },
                  },
                  [`&${a}-placement-start`]: {
                    insetInlineStart: i(r).mul(-1).equal(),
                    borderEndStartRadius: 0,
                    [`${a}-corner`]: {
                      insetInlineStart: 0,
                      borderBlockEndColor: 'transparent',
                      borderInlineStartColor: 'transparent',
                    },
                  },
                  '&-rtl': { direction: 'rtl' },
                },
              ),
            };
          })(x(e)),
        C,
      );
      var k = (e) => {
        const {
            className: t,
            prefixCls: o,
            style: r,
            color: a,
            children: s,
            text: d,
            placement: u = 'end',
            rootClassName: g,
          } = e,
          { getPrefixCls: p, direction: f } = n.useContext(c.E_),
          m = p('ribbon', o),
          b = `${m}-wrapper`,
          [h, $, y] = O(m, b),
          v = (0, l.o2)(a, !1),
          x = i()(
            m,
            `${m}-placement-${u}`,
            { [`${m}-rtl`]: 'rtl' === f, [`${m}-color-${a}`]: v },
            t,
          ),
          C = {},
          S = {};
        return (
          a && !v && ((C.background = a), (S.color = a)),
          h(
            n.createElement(
              'div',
              { className: i()(b, g, $, y) },
              s,
              n.createElement(
                'div',
                {
                  className: i()(x, $),
                  style: Object.assign(Object.assign({}, C), r),
                },
                n.createElement('span', { className: `${m}-text` }, d),
                n.createElement('div', { className: `${m}-corner`, style: S }),
              ),
            ),
          )
        );
      };
      function E(e) {
        let t,
          { prefixCls: o, value: r, current: a, offset: l = 0 } = e;
        return (
          l && (t = { position: 'absolute', top: `${l}00%`, left: 0 }),
          n.createElement(
            'span',
            { style: t, className: i()(`${o}-only-unit`, { current: a }) },
            r,
          )
        );
      }
      function w(e, t, o) {
        let n = e,
          r = 0;
        for (; (n + 10) % 10 !== t; ) (n += o), (r += o);
        return r;
      }
      function j(e) {
        const { prefixCls: t, count: o, value: r } = e,
          i = Number(r),
          a = Math.abs(o),
          [l, s] = n.useState(i),
          [c, d] = n.useState(a),
          u = () => {
            s(i), d(a);
          };
        let g, p;
        if (
          (n.useEffect(() => {
            const e = setTimeout(() => {
              u();
            }, 1e3);
            return () => {
              clearTimeout(e);
            };
          }, [i]),
          l === i || Number.isNaN(i) || Number.isNaN(l))
        )
          (g = [
            n.createElement(E, Object.assign({}, e, { key: i, current: !0 })),
          ]),
            (p = { transition: 'none' });
        else {
          g = [];
          const t = i + 10,
            o = [];
          for (let e = i; e <= t; e += 1) o.push(e);
          const r = o.findIndex((e) => e % 10 === l);
          g = o.map((t, o) => {
            const i = t % 10;
            return n.createElement(
              E,
              Object.assign({}, e, {
                key: t,
                value: i,
                offset: o - r,
                current: o === r,
              }),
            );
          });
          p = { transform: `translateY(${-w(l, i, c < a ? 1 : -1)}00%)` };
        }
        return n.createElement(
          'span',
          { className: `${t}-only`, style: p, onTransitionEnd: u },
          g,
        );
      }
      var I = function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      };
      const N = n.forwardRef((e, t) => {
        const {
            prefixCls: o,
            count: r,
            className: a,
            motionClassName: l,
            style: d,
            title: u,
            show: g,
            component: p = 'sup',
            children: f,
          } = e,
          m = I(e, [
            'prefixCls',
            'count',
            'className',
            'motionClassName',
            'style',
            'title',
            'show',
            'component',
            'children',
          ]),
          { getPrefixCls: b } = n.useContext(c.E_),
          h = b('scroll-number', o),
          $ = Object.assign(Object.assign({}, m), {
            'data-show': g,
            style: d,
            className: i()(h, a, l),
            title: u,
          });
        let y = r;
        if (r && Number(r) % 1 == 0) {
          const e = String(r).split('');
          y = n.createElement(
            'bdi',
            null,
            e.map((t, o) =>
              n.createElement(j, {
                prefixCls: h,
                count: Number(r),
                value: t,
                key: e.length - o,
              }),
            ),
          );
        }
        return (
          d &&
            d.borderColor &&
            ($.style = Object.assign(Object.assign({}, d), {
              boxShadow: `0 0 0 1px ${d.borderColor} inset`,
            })),
          f
            ? (0, s.Tm)(f, (e) => ({
                className: i()(
                  `${h}-custom-component`,
                  null == e ? void 0 : e.className,
                  l,
                ),
              }))
            : n.createElement(p, Object.assign({}, $, { ref: t }), y)
        );
      });
      var B = N,
        P = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        };
      const z = (e, t) => {
          var o, r, d, u, g;
          const {
              prefixCls: p,
              scrollNumberPrefixCls: f,
              children: m,
              status: b,
              text: h,
              color: $,
              count: y = null,
              overflowCount: v = 99,
              dot: x = !1,
              size: C = 'default',
              title: O,
              offset: k,
              style: E,
              className: w,
              rootClassName: j,
              classNames: I,
              styles: N,
              showZero: z = !1,
            } = e,
            R = P(e, [
              'prefixCls',
              'scrollNumberPrefixCls',
              'children',
              'status',
              'text',
              'color',
              'count',
              'overflowCount',
              'dot',
              'size',
              'title',
              'offset',
              'style',
              'className',
              'rootClassName',
              'classNames',
              'styles',
              'showZero',
            ]),
            { getPrefixCls: Z, direction: M, badge: T } = n.useContext(c.E_),
            H = Z('badge', p),
            [W, D, L] = S(H),
            A = y > v ? `${v}+` : y,
            F = '0' === A || 0 === A,
            X = (null != b || null != $) && (null === y || (F && !z)),
            q = x && !F,
            G = q ? '' : A,
            _ = (0, n.useMemo)(
              () => (null == G || '' === G || (F && !z)) && !q,
              [G, F, z, q],
            ),
            K = (0, n.useRef)(y);
          _ || (K.current = y);
          const V = K.current,
            Y = (0, n.useRef)(G);
          _ || (Y.current = G);
          const J = Y.current,
            Q = (0, n.useRef)(q);
          _ || (Q.current = q);
          const U = (0, n.useMemo)(() => {
              if (!k)
                return Object.assign(
                  Object.assign({}, null == T ? void 0 : T.style),
                  E,
                );
              const e = { marginTop: k[1] };
              return (
                'rtl' === M
                  ? (e.left = parseInt(k[0], 10))
                  : (e.right = -parseInt(k[0], 10)),
                Object.assign(
                  Object.assign(
                    Object.assign({}, e),
                    null == T ? void 0 : T.style,
                  ),
                  E,
                )
              );
            }, [M, k, E, null == T ? void 0 : T.style]),
            ee =
              null != O
                ? O
                : 'string' == typeof V || 'number' == typeof V
                  ? V
                  : void 0,
            te =
              _ || !h
                ? null
                : n.createElement('span', { className: `${H}-status-text` }, h),
            oe =
              V && 'object' == typeof V
                ? (0, s.Tm)(V, (e) => ({
                    style: Object.assign(Object.assign({}, U), e.style),
                  }))
                : void 0,
            ne = (0, l.o2)($, !1),
            re = i()(
              null == I ? void 0 : I.indicator,
              null === (o = null == T ? void 0 : T.classNames) || void 0 === o
                ? void 0
                : o.indicator,
              {
                [`${H}-status-dot`]: X,
                [`${H}-status-${b}`]: !!b,
                [`${H}-color-${$}`]: ne,
              },
            ),
            ie = {};
          $ && !ne && ((ie.color = $), (ie.background = $));
          const ae = i()(
            H,
            {
              [`${H}-status`]: X,
              [`${H}-not-a-wrapper`]: !m,
              [`${H}-rtl`]: 'rtl' === M,
            },
            w,
            j,
            null == T ? void 0 : T.className,
            null === (r = null == T ? void 0 : T.classNames) || void 0 === r
              ? void 0
              : r.root,
            null == I ? void 0 : I.root,
            D,
            L,
          );
          if (!m && X) {
            const e = U.color;
            return W(
              n.createElement(
                'span',
                Object.assign({}, R, {
                  className: ae,
                  style: Object.assign(
                    Object.assign(
                      Object.assign({}, null == N ? void 0 : N.root),
                      null === (d = null == T ? void 0 : T.styles) ||
                        void 0 === d
                        ? void 0
                        : d.root,
                    ),
                    U,
                  ),
                }),
                n.createElement('span', {
                  className: re,
                  style: Object.assign(
                    Object.assign(
                      Object.assign({}, null == N ? void 0 : N.indicator),
                      null === (u = null == T ? void 0 : T.styles) ||
                        void 0 === u
                        ? void 0
                        : u.indicator,
                    ),
                    ie,
                  ),
                }),
                h &&
                  n.createElement(
                    'span',
                    { style: { color: e }, className: `${H}-status-text` },
                    h,
                  ),
              ),
            );
          }
          return W(
            n.createElement(
              'span',
              Object.assign({ ref: t }, R, {
                className: ae,
                style: Object.assign(
                  Object.assign(
                    {},
                    null === (g = null == T ? void 0 : T.styles) || void 0 === g
                      ? void 0
                      : g.root,
                  ),
                  null == N ? void 0 : N.root,
                ),
              }),
              m,
              n.createElement(
                a.ZP,
                {
                  visible: !_,
                  motionName: `${H}-zoom`,
                  motionAppear: !1,
                  motionDeadline: 1e3,
                },
                (e) => {
                  let { className: t, ref: o } = e;
                  var r, a;
                  const l = Z('scroll-number', f),
                    s = Q.current,
                    c = i()(
                      null == I ? void 0 : I.indicator,
                      null === (r = null == T ? void 0 : T.classNames) ||
                        void 0 === r
                        ? void 0
                        : r.indicator,
                      {
                        [`${H}-dot`]: s,
                        [`${H}-count`]: !s,
                        [`${H}-count-sm`]: 'small' === C,
                        [`${H}-multiple-words`]:
                          !s && J && J.toString().length > 1,
                        [`${H}-status-${b}`]: !!b,
                        [`${H}-color-${$}`]: ne,
                      },
                    );
                  let d = Object.assign(
                    Object.assign(
                      Object.assign({}, null == N ? void 0 : N.indicator),
                      null === (a = null == T ? void 0 : T.styles) ||
                        void 0 === a
                        ? void 0
                        : a.indicator,
                    ),
                    U,
                  );
                  return (
                    $ && !ne && ((d = d || {}), (d.background = $)),
                    n.createElement(
                      B,
                      {
                        prefixCls: l,
                        show: !_,
                        motionClassName: t,
                        className: c,
                        count: J,
                        title: ee,
                        style: d,
                        key: 'scrollNumber',
                        ref: o,
                      },
                      oe,
                    )
                  );
                },
              ),
              te,
            ),
          );
        },
        R = n.forwardRef(z);
      R.Ribbon = k;
      var Z = R;
    },
    47221: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return q;
        },
      });
      var n = o(62435),
        r = o(90814),
        i = o(93967),
        a = o.n(i),
        l = o(74902),
        s = o(97685),
        c = o(71002),
        d = o(21770),
        u = o(80334),
        g = o(87462),
        p = o(45987),
        f = o(50344),
        m = o(4942),
        b = o(82225),
        h = o(15105),
        $ = n.forwardRef(function (e, t) {
          var o,
            r = e.prefixCls,
            i = e.forceRender,
            l = e.className,
            c = e.style,
            d = e.children,
            u = e.isActive,
            g = e.role,
            p = n.useState(u || i),
            f = (0, s.Z)(p, 2),
            b = f[0],
            h = f[1];
          return (
            n.useEffect(
              function () {
                (i || u) && h(!0);
              },
              [i, u],
            ),
            b
              ? n.createElement(
                  'div',
                  {
                    ref: t,
                    className: a()(
                      ''.concat(r, '-content'),
                      ((o = {}),
                      (0, m.Z)(o, ''.concat(r, '-content-active'), u),
                      (0, m.Z)(o, ''.concat(r, '-content-inactive'), !u),
                      o),
                      l,
                    ),
                    style: c,
                    role: g,
                  },
                  n.createElement(
                    'div',
                    { className: ''.concat(r, '-content-box') },
                    d,
                  ),
                )
              : null
          );
        });
      $.displayName = 'PanelContent';
      var y = $,
        v = [
          'showArrow',
          'headerClass',
          'isActive',
          'onItemClick',
          'forceRender',
          'className',
          'prefixCls',
          'collapsible',
          'accordion',
          'panelKey',
          'extra',
          'header',
          'expandIcon',
          'openMotion',
          'destroyInactivePanel',
          'children',
        ],
        x = n.forwardRef(function (e, t) {
          var o,
            r,
            i = e.showArrow,
            l = void 0 === i || i,
            s = e.headerClass,
            c = e.isActive,
            d = e.onItemClick,
            u = e.forceRender,
            f = e.className,
            $ = e.prefixCls,
            x = e.collapsible,
            C = e.accordion,
            S = e.panelKey,
            O = e.extra,
            k = e.header,
            E = e.expandIcon,
            w = e.openMotion,
            j = e.destroyInactivePanel,
            I = e.children,
            N = (0, p.Z)(e, v),
            B = 'disabled' === x,
            P = 'header' === x,
            z = 'icon' === x,
            R = null != O && 'boolean' != typeof O,
            Z = function () {
              null == d || d(S);
            },
            M =
              'function' == typeof E
                ? E(e)
                : n.createElement('i', { className: 'arrow' });
          M &&
            (M = n.createElement(
              'div',
              {
                className: ''.concat($, '-expand-icon'),
                onClick: ['header', 'icon'].includes(x) ? Z : void 0,
              },
              M,
            ));
          var T = a()(
              ((o = {}),
              (0, m.Z)(o, ''.concat($, '-item'), !0),
              (0, m.Z)(o, ''.concat($, '-item-active'), c),
              (0, m.Z)(o, ''.concat($, '-item-disabled'), B),
              o),
              f,
            ),
            H = {
              className: a()(
                s,
                ((r = {}),
                (0, m.Z)(r, ''.concat($, '-header'), !0),
                (0, m.Z)(r, ''.concat($, '-header-collapsible-only'), P),
                (0, m.Z)(r, ''.concat($, '-icon-collapsible-only'), z),
                r),
              ),
              'aria-expanded': c,
              'aria-disabled': B,
              onKeyDown: function (e) {
                ('Enter' !== e.key &&
                  e.keyCode !== h.Z.ENTER &&
                  e.which !== h.Z.ENTER) ||
                  Z();
              },
            };
          return (
            P ||
              z ||
              ((H.onClick = Z),
              (H.role = C ? 'tab' : 'button'),
              (H.tabIndex = B ? -1 : 0)),
            n.createElement(
              'div',
              (0, g.Z)({}, N, { ref: t, className: T }),
              n.createElement(
                'div',
                H,
                l && M,
                n.createElement(
                  'span',
                  {
                    className: ''.concat($, '-header-text'),
                    onClick: 'header' === x ? Z : void 0,
                  },
                  k,
                ),
                R &&
                  n.createElement(
                    'div',
                    { className: ''.concat($, '-extra') },
                    O,
                  ),
              ),
              n.createElement(
                b.ZP,
                (0, g.Z)(
                  {
                    visible: c,
                    leavedClassName: ''.concat($, '-content-hidden'),
                  },
                  w,
                  { forceRender: u, removeOnLeave: j },
                ),
                function (e, t) {
                  var o = e.className,
                    r = e.style;
                  return n.createElement(
                    y,
                    {
                      ref: t,
                      prefixCls: $,
                      className: o,
                      style: r,
                      isActive: c,
                      forceRender: u,
                      role: C ? 'tabpanel' : void 0,
                    },
                    I,
                  );
                },
              ),
            )
          );
        }),
        C = [
          'children',
          'label',
          'key',
          'collapsible',
          'onItemClick',
          'destroyInactivePanel',
        ];
      var S = function (e, t, o) {
        return Array.isArray(e)
          ? (function (e, t) {
              var o = t.prefixCls,
                r = t.accordion,
                i = t.collapsible,
                a = t.destroyInactivePanel,
                l = t.onItemClick,
                s = t.activeKey,
                c = t.openMotion,
                d = t.expandIcon;
              return e.map(function (e, t) {
                var u = e.children,
                  f = e.label,
                  m = e.key,
                  b = e.collapsible,
                  h = e.onItemClick,
                  $ = e.destroyInactivePanel,
                  y = (0, p.Z)(e, C),
                  v = String(null != m ? m : t),
                  S = null != b ? b : i,
                  O = null != $ ? $ : a,
                  k = !1;
                return (
                  (k = r ? s[0] === v : s.indexOf(v) > -1),
                  n.createElement(
                    x,
                    (0, g.Z)({}, y, {
                      prefixCls: o,
                      key: v,
                      panelKey: v,
                      isActive: k,
                      accordion: r,
                      openMotion: c,
                      expandIcon: d,
                      header: f,
                      collapsible: S,
                      onItemClick: function (e) {
                        'disabled' !== S && (l(e), null == h || h(e));
                      },
                      destroyInactivePanel: O,
                    }),
                    u,
                  )
                );
              });
            })(e, o)
          : (0, f.Z)(t).map(function (e, t) {
              return (function (e, t, o) {
                if (!e) return null;
                var r = o.prefixCls,
                  i = o.accordion,
                  a = o.collapsible,
                  l = o.destroyInactivePanel,
                  s = o.onItemClick,
                  c = o.activeKey,
                  d = o.openMotion,
                  u = o.expandIcon,
                  g = e.key || String(t),
                  p = e.props,
                  f = p.header,
                  m = p.headerClass,
                  b = p.destroyInactivePanel,
                  h = p.collapsible,
                  $ = p.onItemClick,
                  y = !1;
                y = i ? c[0] === g : c.indexOf(g) > -1;
                var v = null != h ? h : a,
                  x = {
                    key: g,
                    panelKey: g,
                    header: f,
                    headerClass: m,
                    isActive: y,
                    prefixCls: r,
                    destroyInactivePanel: null != b ? b : l,
                    openMotion: d,
                    accordion: i,
                    children: e.props.children,
                    onItemClick: function (e) {
                      'disabled' !== v && (s(e), null == $ || $(e));
                    },
                    expandIcon: u,
                    collapsible: v,
                  };
                return 'string' == typeof e.type
                  ? e
                  : (Object.keys(x).forEach(function (e) {
                      void 0 === x[e] && delete x[e];
                    }),
                    n.cloneElement(e, x));
              })(e, t, o);
            });
      };
      function O(e) {
        var t = e;
        if (!Array.isArray(t)) {
          var o = (0, c.Z)(t);
          t = 'number' === o || 'string' === o ? [t] : [];
        }
        return t.map(function (e) {
          return String(e);
        });
      }
      var k = n.forwardRef(function (e, t) {
          var o = e.prefixCls,
            r = void 0 === o ? 'rc-collapse' : o,
            i = e.destroyInactivePanel,
            c = void 0 !== i && i,
            g = e.style,
            p = e.accordion,
            f = e.className,
            m = e.children,
            b = e.collapsible,
            h = e.openMotion,
            $ = e.expandIcon,
            y = e.activeKey,
            v = e.defaultActiveKey,
            x = e.onChange,
            C = e.items,
            k = a()(r, f),
            E = (0, d.Z)([], {
              value: y,
              onChange: function (e) {
                return null == x ? void 0 : x(e);
              },
              defaultValue: v,
              postState: O,
            }),
            w = (0, s.Z)(E, 2),
            j = w[0],
            I = w[1];
          (0, u.ZP)(
            !m,
            '[rc-collapse] `children` will be removed in next major version. Please use `items` instead.',
          );
          var N = S(C, m, {
            prefixCls: r,
            accordion: p,
            openMotion: h,
            expandIcon: $,
            collapsible: b,
            destroyInactivePanel: c,
            onItemClick: function (e) {
              return I(function () {
                return p
                  ? j[0] === e
                    ? []
                    : [e]
                  : j.indexOf(e) > -1
                    ? j.filter(function (t) {
                        return t !== e;
                      })
                    : [].concat((0, l.Z)(j), [e]);
              });
            },
            activeKey: j,
          });
          return n.createElement(
            'div',
            { ref: t, className: k, style: g, role: p ? 'tablist' : void 0 },
            N,
          );
        }),
        E = Object.assign(k, { Panel: x }),
        w = E,
        j = (E.Panel, o(98423)),
        I = o(33603),
        N = o(96159),
        B = o(53124),
        P = o(98675);
      var z = n.forwardRef((e, t) => {
          const { getPrefixCls: o } = n.useContext(B.E_),
            { prefixCls: r, className: i, showArrow: l = !0 } = e,
            s = o('collapse', r),
            c = a()({ [`${s}-no-arrow`]: !l }, i);
          return n.createElement(
            w.Panel,
            Object.assign({ ref: t }, e, { prefixCls: s, className: c }),
          );
        }),
        R = o(54548),
        Z = o(14747),
        M = o(33507),
        T = o(91945),
        H = o(45503);
      const W = (e) => {
          const {
              componentCls: t,
              contentBg: o,
              padding: n,
              headerBg: r,
              headerPadding: i,
              collapseHeaderPaddingSM: a,
              collapseHeaderPaddingLG: l,
              collapsePanelBorderRadius: s,
              lineWidth: c,
              lineType: d,
              colorBorder: u,
              colorText: g,
              colorTextHeading: p,
              colorTextDisabled: f,
              fontSizeLG: m,
              lineHeight: b,
              lineHeightLG: h,
              marginSM: $,
              paddingSM: y,
              paddingLG: v,
              paddingXS: x,
              motionDurationSlow: C,
              fontSizeIcon: S,
              contentPadding: O,
              fontHeight: k,
              fontHeightLG: E,
            } = e,
            w = `${(0, R.bf)(c)} ${d} ${u}`;
          return {
            [t]: Object.assign(Object.assign({}, (0, Z.Wf)(e)), {
              backgroundColor: r,
              border: w,
              borderBottom: 0,
              borderRadius: s,
              '&-rtl': { direction: 'rtl' },
              [`& > ${t}-item`]: {
                borderBottom: w,
                '&:last-child': {
                  [`\n            &,\n            & > ${t}-header`]: {
                    borderRadius: `0 0 ${(0, R.bf)(s)} ${(0, R.bf)(s)}`,
                  },
                },
                [`> ${t}-header`]: {
                  position: 'relative',
                  display: 'flex',
                  flexWrap: 'nowrap',
                  alignItems: 'flex-start',
                  padding: i,
                  color: p,
                  lineHeight: b,
                  cursor: 'pointer',
                  transition: `all ${C}, visibility 0s`,
                  [`> ${t}-header-text`]: { flex: 'auto' },
                  '&:focus': { outline: 'none' },
                  [`${t}-expand-icon`]: {
                    height: k,
                    display: 'flex',
                    alignItems: 'center',
                    paddingInlineEnd: $,
                  },
                  [`${t}-arrow`]: Object.assign(
                    Object.assign({}, (0, Z.Ro)()),
                    { fontSize: S, svg: { transition: `transform ${C}` } },
                  ),
                  [`${t}-header-text`]: { marginInlineEnd: 'auto' },
                },
                [`${t}-icon-collapsible-only`]: {
                  cursor: 'unset',
                  [`${t}-expand-icon`]: { cursor: 'pointer' },
                },
              },
              [`${t}-content`]: {
                color: g,
                backgroundColor: o,
                borderTop: w,
                [`& > ${t}-content-box`]: { padding: O },
                '&-hidden': { display: 'none' },
              },
              '&-small': {
                [`> ${t}-item`]: {
                  [`> ${t}-header`]: {
                    padding: a,
                    paddingInlineStart: x,
                    [`> ${t}-expand-icon`]: {
                      marginInlineStart: e.calc(y).sub(x).equal(),
                    },
                  },
                  [`> ${t}-content > ${t}-content-box`]: { padding: y },
                },
              },
              '&-large': {
                [`> ${t}-item`]: {
                  fontSize: m,
                  lineHeight: h,
                  [`> ${t}-header`]: {
                    padding: l,
                    paddingInlineStart: n,
                    [`> ${t}-expand-icon`]: {
                      height: E,
                      marginInlineStart: e.calc(v).sub(n).equal(),
                    },
                  },
                  [`> ${t}-content > ${t}-content-box`]: { padding: v },
                },
              },
              [`${t}-item:last-child`]: {
                [`> ${t}-content`]: {
                  borderRadius: `0 0 ${(0, R.bf)(s)} ${(0, R.bf)(s)}`,
                },
              },
              [`& ${t}-item-disabled > ${t}-header`]: {
                '\n          &,\n          & > .arrow\n        ': {
                  color: f,
                  cursor: 'not-allowed',
                },
              },
              [`&${t}-icon-position-end`]: {
                [`& > ${t}-item`]: {
                  [`> ${t}-header`]: {
                    [`${t}-expand-icon`]: {
                      order: 1,
                      paddingInlineEnd: 0,
                      paddingInlineStart: $,
                    },
                  },
                },
              },
            }),
          };
        },
        D = (e) => {
          const { componentCls: t } = e,
            o = `> ${t}-item > ${t}-header ${t}-arrow svg`;
          return { [`${t}-rtl`]: { [o]: { transform: 'rotate(180deg)' } } };
        },
        L = (e) => {
          const {
            componentCls: t,
            headerBg: o,
            paddingXXS: n,
            colorBorder: r,
          } = e;
          return {
            [`${t}-borderless`]: {
              backgroundColor: o,
              border: 0,
              [`> ${t}-item`]: { borderBottom: `1px solid ${r}` },
              [`\n        > ${t}-item:last-child,\n        > ${t}-item:last-child ${t}-header\n      `]:
                { borderRadius: 0 },
              [`> ${t}-item:last-child`]: { borderBottom: 0 },
              [`> ${t}-item > ${t}-content`]: {
                backgroundColor: 'transparent',
                borderTop: 0,
              },
              [`> ${t}-item > ${t}-content > ${t}-content-box`]: {
                paddingTop: n,
              },
            },
          };
        },
        A = (e) => {
          const { componentCls: t, paddingSM: o } = e;
          return {
            [`${t}-ghost`]: {
              backgroundColor: 'transparent',
              border: 0,
              [`> ${t}-item`]: {
                borderBottom: 0,
                [`> ${t}-content`]: {
                  backgroundColor: 'transparent',
                  border: 0,
                  [`> ${t}-content-box`]: { paddingBlock: o },
                },
              },
            },
          };
        };
      var F = (0, T.I$)(
        'Collapse',
        (e) => {
          const t = (0, H.TS)(e, {
            collapseHeaderPaddingSM: `${(0, R.bf)(e.paddingXS)} ${(0, R.bf)(e.paddingSM)}`,
            collapseHeaderPaddingLG: `${(0, R.bf)(e.padding)} ${(0, R.bf)(e.paddingLG)}`,
            collapsePanelBorderRadius: e.borderRadiusLG,
          });
          return [W(t), L(t), A(t), D(t), (0, M.Z)(t)];
        },
        (e) => ({
          headerPadding: `${e.paddingSM}px ${e.padding}px`,
          headerBg: e.colorFillAlter,
          contentPadding: `${e.padding}px 16px`,
          contentBg: e.colorBgContainer,
        }),
      );
      const X = n.forwardRef((e, t) => {
        const {
            getPrefixCls: o,
            direction: i,
            collapse: l,
          } = n.useContext(B.E_),
          {
            prefixCls: s,
            className: c,
            rootClassName: d,
            style: u,
            bordered: g = !0,
            ghost: p,
            size: m,
            expandIconPosition: b = 'start',
            children: h,
            expandIcon: $,
          } = e,
          y = (0, P.Z)((e) => {
            var t;
            return null !== (t = null != m ? m : e) && void 0 !== t
              ? t
              : 'middle';
          }),
          v = o('collapse', s),
          x = o(),
          [C, S, O] = F(v);
        const k = n.useMemo(
            () => ('left' === b ? 'start' : 'right' === b ? 'end' : b),
            [b],
          ),
          E = a()(
            `${v}-icon-position-${k}`,
            {
              [`${v}-borderless`]: !g,
              [`${v}-rtl`]: 'rtl' === i,
              [`${v}-ghost`]: !!p,
              [`${v}-${y}`]: 'middle' !== y,
            },
            null == l ? void 0 : l.className,
            c,
            d,
            S,
            O,
          ),
          z = Object.assign(Object.assign({}, (0, I.Z)(x)), {
            motionAppear: !1,
            leavedClassName: `${v}-content-hidden`,
          }),
          R = n.useMemo(
            () =>
              h
                ? (0, f.Z)(h).map((e, t) => {
                    var o, n;
                    if (
                      null === (o = e.props) || void 0 === o
                        ? void 0
                        : o.disabled
                    ) {
                      const o =
                          null !== (n = e.key) && void 0 !== n ? n : String(t),
                        { disabled: r, collapsible: i } = e.props,
                        a = Object.assign(
                          Object.assign({}, (0, j.Z)(e.props, ['disabled'])),
                          {
                            key: o,
                            collapsible:
                              null != i ? i : r ? 'disabled' : void 0,
                          },
                        );
                      return (0, N.Tm)(e, a);
                    }
                    return e;
                  })
                : null,
            [h],
          );
        return C(
          n.createElement(
            w,
            Object.assign(
              { ref: t, openMotion: z },
              (0, j.Z)(e, ['rootClassName']),
              {
                expandIcon: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  const t = $
                    ? $(e)
                    : n.createElement(r.Z, {
                        rotate: e.isActive ? 90 : void 0,
                      });
                  return (0, N.Tm)(t, () => ({
                    className: a()(t.props.className, `${v}-arrow`),
                  }));
                },
                prefixCls: v,
                className: E,
                style: Object.assign(
                  Object.assign({}, null == l ? void 0 : l.style),
                  u,
                ),
              },
            ),
            R,
          ),
        );
      });
      var q = Object.assign(X, { Panel: z });
    },
    96074: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = o(62435),
        r = o(93967),
        i = o.n(r),
        a = o(53124),
        l = o(54548),
        s = o(14747),
        c = o(91945),
        d = o(45503);
      const u = (e) => {
        const {
          componentCls: t,
          sizePaddingEdgeHorizontal: o,
          colorSplit: n,
          lineWidth: r,
          textPaddingInline: i,
          orientationMargin: a,
          verticalMarginInline: c,
        } = e;
        return {
          [t]: Object.assign(Object.assign({}, (0, s.Wf)(e)), {
            borderBlockStart: `${(0, l.bf)(r)} solid ${n}`,
            '&-vertical': {
              position: 'relative',
              top: '-0.06em',
              display: 'inline-block',
              height: '0.9em',
              marginInline: c,
              marginBlock: 0,
              verticalAlign: 'middle',
              borderTop: 0,
              borderInlineStart: `${(0, l.bf)(r)} solid ${n}`,
            },
            '&-horizontal': {
              display: 'flex',
              clear: 'both',
              width: '100%',
              minWidth: '100%',
              margin: `${(0, l.bf)(e.dividerHorizontalGutterMargin)} 0`,
            },
            [`&-horizontal${t}-with-text`]: {
              display: 'flex',
              alignItems: 'center',
              margin: `${(0, l.bf)(e.dividerHorizontalWithTextGutterMargin)} 0`,
              color: e.colorTextHeading,
              fontWeight: 500,
              fontSize: e.fontSizeLG,
              whiteSpace: 'nowrap',
              textAlign: 'center',
              borderBlockStart: `0 ${n}`,
              '&::before, &::after': {
                position: 'relative',
                width: '50%',
                borderBlockStart: `${(0, l.bf)(r)} solid transparent`,
                borderBlockStartColor: 'inherit',
                borderBlockEnd: 0,
                transform: 'translateY(50%)',
                content: "''",
              },
            },
            [`&-horizontal${t}-with-text-left`]: {
              '&::before': { width: `calc(${a} * 100%)` },
              '&::after': { width: `calc(100% - ${a} * 100%)` },
            },
            [`&-horizontal${t}-with-text-right`]: {
              '&::before': { width: `calc(100% - ${a} * 100%)` },
              '&::after': { width: `calc(${a} * 100%)` },
            },
            [`${t}-inner-text`]: {
              display: 'inline-block',
              paddingBlock: 0,
              paddingInline: i,
            },
            '&-dashed': {
              background: 'none',
              borderColor: n,
              borderStyle: 'dashed',
              borderWidth: `${(0, l.bf)(r)} 0 0`,
            },
            [`&-horizontal${t}-with-text${t}-dashed`]: {
              '&::before, &::after': { borderStyle: 'dashed none none' },
            },
            [`&-vertical${t}-dashed`]: {
              borderInlineStartWidth: r,
              borderInlineEnd: 0,
              borderBlockStart: 0,
              borderBlockEnd: 0,
            },
            [`&-plain${t}-with-text`]: {
              color: e.colorText,
              fontWeight: 'normal',
              fontSize: e.fontSize,
            },
            [`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:
              {
                '&::before': { width: 0 },
                '&::after': { width: '100%' },
                [`${t}-inner-text`]: { paddingInlineStart: o },
              },
            [`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:
              {
                '&::before': { width: '100%' },
                '&::after': { width: 0 },
                [`${t}-inner-text`]: { paddingInlineEnd: o },
              },
          }),
        };
      };
      var g = (0, c.I$)(
          'Divider',
          (e) => {
            const t = (0, d.TS)(e, {
              dividerHorizontalWithTextGutterMargin: e.margin,
              dividerHorizontalGutterMargin: e.marginLG,
              sizePaddingEdgeHorizontal: 0,
            });
            return [u(t)];
          },
          (e) => ({
            textPaddingInline: '1em',
            orientationMargin: 0.05,
            verticalMarginInline: e.marginXS,
          }),
          { unitless: { orientationMargin: !0 } },
        ),
        p = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        };
      var f = (e) => {
        const {
            getPrefixCls: t,
            direction: o,
            divider: r,
          } = n.useContext(a.E_),
          {
            prefixCls: l,
            type: s = 'horizontal',
            orientation: c = 'center',
            orientationMargin: d,
            className: u,
            rootClassName: f,
            children: m,
            dashed: b,
            plain: h,
            style: $,
          } = e,
          y = p(e, [
            'prefixCls',
            'type',
            'orientation',
            'orientationMargin',
            'className',
            'rootClassName',
            'children',
            'dashed',
            'plain',
            'style',
          ]),
          v = t('divider', l),
          [x, C, S] = g(v),
          O = c.length > 0 ? `-${c}` : c,
          k = !!m,
          E = 'left' === c && null != d,
          w = 'right' === c && null != d,
          j = i()(
            v,
            null == r ? void 0 : r.className,
            C,
            S,
            `${v}-${s}`,
            {
              [`${v}-with-text`]: k,
              [`${v}-with-text${O}`]: k,
              [`${v}-dashed`]: !!b,
              [`${v}-plain`]: !!h,
              [`${v}-rtl`]: 'rtl' === o,
              [`${v}-no-default-orientation-margin-left`]: E,
              [`${v}-no-default-orientation-margin-right`]: w,
            },
            u,
            f,
          ),
          I = n.useMemo(
            () => ('number' == typeof d ? d : /^\d+$/.test(d) ? Number(d) : d),
            [d],
          ),
          N = Object.assign(
            Object.assign({}, E && { marginLeft: I }),
            w && { marginRight: I },
          );
        return x(
          n.createElement(
            'div',
            Object.assign(
              {
                className: j,
                style: Object.assign(
                  Object.assign({}, null == r ? void 0 : r.style),
                  $,
                ),
              },
              y,
              { role: 'separator' },
            ),
            m &&
              'vertical' !== s &&
              n.createElement(
                'span',
                { className: `${v}-inner-text`, style: N },
                m,
              ),
          ),
        );
      };
    },
    66540: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return Y;
        },
      });
      var n = o(62435),
        r = o(87462),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z',
                },
              },
            ],
          },
          name: 'vertical-align-top',
          theme: 'outlined',
        },
        a = o(84089),
        l = function (e, t) {
          return n.createElement(a.Z, (0, r.Z)({}, e, { ref: t, icon: i }));
        };
      var s = n.forwardRef(l),
        c = o(93967),
        d = o.n(c),
        u = o(82225),
        g = o(66367),
        p = o(58375),
        f = o(48783),
        m = o(53124);
      const b = n.createContext(void 0),
        { Provider: h } = b;
      var $ = b,
        y = o(98423),
        v = o(40411),
        x = o(83062),
        C = o(15360);
      const S = (e) => {
        const { icon: t, description: o, prefixCls: r, className: i } = e,
          a = n.createElement(
            'div',
            { className: `${r}-icon` },
            n.createElement(C.Z, null),
          );
        return n.createElement(
          'div',
          {
            onClick: e.onClick,
            onFocus: e.onFocus,
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            className: d()(i, `${r}-content`),
          },
          t || o
            ? n.createElement(
                n.Fragment,
                null,
                t && n.createElement('div', { className: `${r}-icon` }, t),
                o &&
                  n.createElement('div', { className: `${r}-description` }, o),
              )
            : a,
        );
      };
      var O = (0, n.memo)(S),
        k = o(54548),
        E = o(14747),
        w = o(16932),
        j = o(93590),
        I = o(91945),
        N = o(45503);
      var B = (e) => (0 === e ? 0 : e - Math.sqrt(Math.pow(e, 2) / 2));
      const P = (e) => {
          const {
              componentCls: t,
              floatButtonSize: o,
              motionDurationSlow: n,
              motionEaseInOutCirc: r,
            } = e,
            i = `${t}-group`,
            a = new k.E4('antFloatButtonMoveDownIn', {
              '0%': {
                transform: `translate3d(0, ${(0, k.bf)(o)}, 0)`,
                transformOrigin: '0 0',
                opacity: 0,
              },
              '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1,
              },
            }),
            l = new k.E4('antFloatButtonMoveDownOut', {
              '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1,
              },
              '100%': {
                transform: `translate3d(0, ${(0, k.bf)(o)}, 0)`,
                transformOrigin: '0 0',
                opacity: 0,
              },
            });
          return [
            {
              [`${i}-wrap`]: Object.assign(
                {},
                (0, j.R)(`${i}-wrap`, a, l, n, !0),
              ),
            },
            {
              [`${i}-wrap`]: {
                [`\n          &${i}-wrap-enter,\n          &${i}-wrap-appear\n        `]:
                  { opacity: 0, animationTimingFunction: r },
                [`&${i}-wrap-leave`]: { animationTimingFunction: r },
              },
            },
          ];
        },
        z = (e) => {
          const {
              antCls: t,
              componentCls: o,
              floatButtonSize: n,
              margin: r,
              borderRadiusLG: i,
              borderRadiusSM: a,
              badgeOffset: l,
              floatButtonBodyPadding: s,
              calc: c,
            } = e,
            d = `${o}-group`;
          return {
            [d]: Object.assign(Object.assign({}, (0, E.Wf)(e)), {
              zIndex: 99,
              display: 'block',
              border: 'none',
              position: 'fixed',
              width: n,
              height: 'auto',
              boxShadow: 'none',
              minHeight: n,
              insetInlineEnd: e.floatButtonInsetInlineEnd,
              insetBlockEnd: e.floatButtonInsetBlockEnd,
              borderRadius: i,
              [`${d}-wrap`]: {
                zIndex: -1,
                display: 'block',
                position: 'relative',
                marginBottom: r,
              },
              [`&${d}-rtl`]: { direction: 'rtl' },
              [o]: { position: 'static' },
            }),
            [`${d}-circle`]: {
              [`${o}-circle:not(:last-child)`]: {
                marginBottom: e.margin,
                [`${o}-body`]: { width: n, height: n, borderRadius: '50%' },
              },
            },
            [`${d}-square`]: {
              [`${o}-square`]: {
                borderRadius: 0,
                padding: 0,
                '&:first-child': {
                  borderStartStartRadius: i,
                  borderStartEndRadius: i,
                },
                '&:last-child': {
                  borderEndStartRadius: i,
                  borderEndEndRadius: i,
                },
                '&:not(:last-child)': {
                  borderBottom: `${(0, k.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
                },
                [`${t}-badge`]: {
                  [`${t}-badge-count`]: {
                    top: c(c(s).add(l)).mul(-1).equal(),
                    insetInlineEnd: c(c(s).add(l)).mul(-1).equal(),
                  },
                },
              },
              [`${d}-wrap`]: {
                display: 'block',
                borderRadius: i,
                boxShadow: e.boxShadowSecondary,
                [`${o}-square`]: {
                  boxShadow: 'none',
                  marginTop: 0,
                  borderRadius: 0,
                  padding: s,
                  '&:first-child': {
                    borderStartStartRadius: i,
                    borderStartEndRadius: i,
                  },
                  '&:last-child': {
                    borderEndStartRadius: i,
                    borderEndEndRadius: i,
                  },
                  '&:not(:last-child)': {
                    borderBottom: `${(0, k.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
                  },
                  [`${o}-body`]: {
                    width: e.floatButtonBodySize,
                    height: e.floatButtonBodySize,
                  },
                },
              },
            },
            [`${d}-circle-shadow`]: { boxShadow: 'none' },
            [`${d}-square-shadow`]: {
              boxShadow: e.boxShadowSecondary,
              [`${o}-square`]: {
                boxShadow: 'none',
                padding: s,
                [`${o}-body`]: {
                  width: e.floatButtonBodySize,
                  height: e.floatButtonBodySize,
                  borderRadius: a,
                },
              },
            },
          };
        },
        R = (e) => {
          const {
            antCls: t,
            componentCls: o,
            floatButtonBodyPadding: n,
            floatButtonIconSize: r,
            floatButtonSize: i,
            borderRadiusLG: a,
            badgeOffset: l,
            dotOffsetInSquare: s,
            dotOffsetInCircle: c,
            calc: d,
          } = e;
          return {
            [o]: Object.assign(Object.assign({}, (0, E.Wf)(e)), {
              border: 'none',
              position: 'fixed',
              cursor: 'pointer',
              zIndex: 99,
              display: 'block',
              width: i,
              height: i,
              insetInlineEnd: e.floatButtonInsetInlineEnd,
              insetBlockEnd: e.floatButtonInsetBlockEnd,
              boxShadow: e.boxShadowSecondary,
              '&-pure': { position: 'relative', inset: 'auto' },
              '&:empty': { display: 'none' },
              [`${t}-badge`]: {
                width: '100%',
                height: '100%',
                [`${t}-badge-count`]: {
                  transform: 'translate(0, 0)',
                  transformOrigin: 'center',
                  top: d(l).mul(-1).equal(),
                  insetInlineEnd: d(l).mul(-1).equal(),
                },
              },
              [`${o}-body`]: {
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: `all ${e.motionDurationMid}`,
                [`${o}-content`]: {
                  overflow: 'hidden',
                  textAlign: 'center',
                  minHeight: i,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: `${(0, k.bf)(d(n).div(2).equal())} ${(0, k.bf)(n)}`,
                  [`${o}-icon`]: {
                    textAlign: 'center',
                    margin: 'auto',
                    width: r,
                    fontSize: r,
                    lineHeight: 1,
                  },
                },
              },
            }),
            [`${o}-rtl`]: { direction: 'rtl' },
            [`${o}-circle`]: {
              height: i,
              borderRadius: '50%',
              [`${t}-badge`]: {
                [`${t}-badge-dot`]: { top: c, insetInlineEnd: c },
              },
              [`${o}-body`]: { borderRadius: '50%' },
            },
            [`${o}-square`]: {
              height: 'auto',
              minHeight: i,
              borderRadius: a,
              [`${t}-badge`]: {
                [`${t}-badge-dot`]: { top: s, insetInlineEnd: s },
              },
              [`${o}-body`]: { height: 'auto', borderRadius: a },
            },
            [`${o}-default`]: {
              backgroundColor: e.floatButtonBackgroundColor,
              transition: `background-color ${e.motionDurationMid}`,
              [`${o}-body`]: {
                backgroundColor: e.floatButtonBackgroundColor,
                transition: `background-color ${e.motionDurationMid}`,
                '&:hover': { backgroundColor: e.colorFillContent },
                [`${o}-content`]: {
                  [`${o}-icon`]: { color: e.colorText },
                  [`${o}-description`]: {
                    display: 'flex',
                    alignItems: 'center',
                    lineHeight: (0, k.bf)(e.fontSizeLG),
                    color: e.colorText,
                    fontSize: e.fontSizeSM,
                  },
                },
              },
            },
            [`${o}-primary`]: {
              backgroundColor: e.colorPrimary,
              [`${o}-body`]: {
                backgroundColor: e.colorPrimary,
                transition: `background-color ${e.motionDurationMid}`,
                '&:hover': { backgroundColor: e.colorPrimaryHover },
                [`${o}-content`]: {
                  [`${o}-icon`]: { color: e.colorTextLightSolid },
                  [`${o}-description`]: {
                    display: 'flex',
                    alignItems: 'center',
                    lineHeight: (0, k.bf)(e.fontSizeLG),
                    color: e.colorTextLightSolid,
                    fontSize: e.fontSizeSM,
                  },
                },
              },
            },
          };
        };
      var Z = (0, I.I$)(
          'FloatButton',
          (e) => {
            const {
                colorTextLightSolid: t,
                colorBgElevated: o,
                controlHeightLG: n,
                marginXXL: r,
                marginLG: i,
                fontSize: a,
                fontSizeIcon: l,
                controlItemBgHover: s,
                paddingXXS: c,
                calc: d,
              } = e,
              u = (0, N.TS)(e, {
                floatButtonBackgroundColor: o,
                floatButtonColor: t,
                floatButtonHoverBackgroundColor: s,
                floatButtonFontSize: a,
                floatButtonIconSize: d(l).mul(1.5).equal(),
                floatButtonSize: n,
                floatButtonInsetBlockEnd: r,
                floatButtonInsetInlineEnd: i,
                floatButtonBodySize: d(n).sub(d(c).mul(2)).equal(),
                floatButtonBodyPadding: c,
                badgeOffset: d(c).mul(1.5).equal(),
              });
            return [z(u), R(u), (0, w.J$)(e), P(u)];
          },
          (e) => ({
            dotOffsetInCircle: B(e.controlHeightLG / 2),
            dotOffsetInSquare: B(e.borderRadiusLG),
          }),
        ),
        M = o(35792),
        T = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        };
      const H = 'float-btn';
      var W = n.forwardRef((e, t) => {
          const {
              prefixCls: o,
              className: r,
              rootClassName: i,
              type: a = 'default',
              shape: l = 'circle',
              icon: s,
              description: c,
              tooltip: u,
              badge: g = {},
            } = e,
            p = T(e, [
              'prefixCls',
              'className',
              'rootClassName',
              'type',
              'shape',
              'icon',
              'description',
              'tooltip',
              'badge',
            ]),
            { getPrefixCls: f, direction: b } = (0, n.useContext)(m.E_),
            h = (0, n.useContext)($),
            C = f(H, o),
            S = (0, M.Z)(C),
            [k, E, w] = Z(C, S),
            j = h || l,
            I = d()(E, w, S, C, r, i, `${C}-${a}`, `${C}-${j}`, {
              [`${C}-rtl`]: 'rtl' === b,
            }),
            N = (0, n.useMemo)(
              () => (0, y.Z)(g, ['title', 'children', 'status', 'text']),
              [g],
            ),
            B = (0, n.useMemo)(
              () => ({ prefixCls: C, description: c, icon: s, type: a }),
              [C, c, s, a],
            );
          let P = n.createElement(
            'div',
            { className: `${C}-body` },
            n.createElement(O, Object.assign({}, B)),
          );
          return (
            'badge' in e && (P = n.createElement(v.Z, Object.assign({}, N), P)),
            'tooltip' in e &&
              (P = n.createElement(
                x.Z,
                { title: u, placement: 'rtl' === b ? 'right' : 'left' },
                P,
              )),
            k(
              e.href
                ? n.createElement(
                    'a',
                    Object.assign({ ref: t }, p, { className: I }),
                    P,
                  )
                : n.createElement(
                    'button',
                    Object.assign({ ref: t }, p, {
                      className: I,
                      type: 'button',
                    }),
                    P,
                  ),
            )
          );
        }),
        D = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        };
      var L = n.forwardRef((e, t) => {
          const {
              prefixCls: o,
              className: r,
              type: i = 'default',
              shape: a = 'circle',
              visibilityHeight: l = 400,
              icon: c = n.createElement(s, null),
              target: b,
              onClick: h,
              duration: y = 450,
            } = e,
            v = D(e, [
              'prefixCls',
              'className',
              'type',
              'shape',
              'visibilityHeight',
              'icon',
              'target',
              'onClick',
              'duration',
            ]),
            [x, C] = (0, n.useState)(0 === l),
            S = n.useRef(null);
          n.useImperativeHandle(t, () => ({ nativeElement: S.current }));
          const O = () =>
              S.current && S.current.ownerDocument
                ? S.current.ownerDocument
                : window,
            k = (0, f.Z)((e) => {
              const t = (0, g.Z)(e.target, !0);
              C(t >= l);
            });
          (0, n.useEffect)(() => {
            const e = (b || O)();
            return (
              k({ target: e }),
              null == e || e.addEventListener('scroll', k),
              () => {
                k.cancel(), null == e || e.removeEventListener('scroll', k);
              }
            );
          }, [b]);
          const E = (e) => {
              (0, p.Z)(0, { getContainer: b || O, duration: y }),
                null == h || h(e);
            },
            { getPrefixCls: w } = (0, n.useContext)(m.E_),
            j = w(H, o),
            I = w(),
            N = (0, n.useContext)($) || a,
            B = Object.assign({ prefixCls: j, icon: c, type: i, shape: N }, v);
          return n.createElement(
            u.ZP,
            { visible: x, motionName: `${I}-fade` },
            (e) => {
              let { className: t } = e;
              return n.createElement(
                W,
                Object.assign({ ref: S }, B, {
                  onClick: E,
                  className: d()(r, t),
                }),
              );
            },
          );
        }),
        A = o(97937),
        F = o(21770),
        X = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        };
      const q = (e) => {
        const {
            prefixCls: t,
            className: o,
            style: r,
            shape: i = 'circle',
            type: a = 'default',
            icon: l = n.createElement(C.Z, null),
            closeIcon: s = n.createElement(A.Z, null),
            description: c,
            trigger: g,
            children: p,
            onOpenChange: f,
            open: b,
          } = e,
          $ = X(e, [
            'prefixCls',
            'className',
            'style',
            'shape',
            'type',
            'icon',
            'closeIcon',
            'description',
            'trigger',
            'children',
            'onOpenChange',
            'open',
          ]),
          { direction: y, getPrefixCls: v } = (0, n.useContext)(m.E_),
          x = v(H, t),
          S = (0, M.Z)(x),
          [O, k, E] = Z(x, S),
          w = `${x}-group`,
          j = d()(w, k, E, S, o, {
            [`${w}-rtl`]: 'rtl' === y,
            [`${w}-${i}`]: i,
            [`${w}-${i}-shadow`]: !g,
          }),
          I = d()(k, `${w}-wrap`),
          [N, B] = (0, F.Z)(!1, { value: b }),
          P = n.useRef(null),
          z = n.useRef(null),
          R = n.useMemo(
            () =>
              'hover' === g
                ? {
                    onMouseEnter() {
                      B(!0), null == f || f(!0);
                    },
                    onMouseLeave() {
                      B(!1), null == f || f(!1);
                    },
                  }
                : {},
            [g],
          ),
          T = (0, n.useCallback)(
            (e) => {
              var t, o;
              (
                null === (t = P.current) || void 0 === t
                  ? void 0
                  : t.contains(e.target)
              )
                ? (null === (o = z.current) || void 0 === o
                    ? void 0
                    : o.contains(e.target)) &&
                  B((e) => (null == f || f(!e), !e))
                : (B(!1), null == f || f(!1));
            },
            [g],
          );
        return (
          (0, n.useEffect)(() => {
            if ('click' === g)
              return (
                document.addEventListener('click', T),
                () => {
                  document.removeEventListener('click', T);
                }
              );
          }, [g]),
          O(
            n.createElement(
              h,
              { value: i },
              n.createElement(
                'div',
                Object.assign({ ref: P, className: j, style: r }, R),
                g && ['click', 'hover'].includes(g)
                  ? n.createElement(
                      n.Fragment,
                      null,
                      n.createElement(
                        u.ZP,
                        { visible: N, motionName: `${w}-wrap` },
                        (e) => {
                          let { className: t } = e;
                          return n.createElement(
                            'div',
                            { className: d()(t, I) },
                            p,
                          );
                        },
                      ),
                      n.createElement(
                        W,
                        Object.assign(
                          {
                            ref: z,
                            type: a,
                            shape: i,
                            icon: N ? s : l,
                            description: c,
                            'aria-label': e['aria-label'],
                          },
                          $,
                        ),
                      ),
                    )
                  : p,
              ),
            ),
          )
        );
      };
      var G = (0, n.memo)(q),
        _ = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        };
      const K = (e) => {
        var { backTop: t } = e,
          o = _(e, ['backTop']);
        return t
          ? n.createElement(L, Object.assign({}, o, { visibilityHeight: 0 }))
          : n.createElement(W, Object.assign({}, o));
      };
      var V = (e) => {
        var { className: t, items: o } = e,
          r = _(e, ['className', 'items']);
        const { prefixCls: i } = r,
          { getPrefixCls: a } = n.useContext(m.E_),
          l = `${a(H, i)}-pure`;
        return o
          ? n.createElement(
              G,
              Object.assign({ className: d()(t, l) }, r),
              o.map((e, t) => n.createElement(K, Object.assign({ key: t }, e))),
            )
          : n.createElement(K, Object.assign({ className: d()(t, l) }, r));
      };
      (W.BackTop = L),
        (W.Group = G),
        (W._InternalPanelDoNotUseOrYouWillBeFired = V);
      var Y = W;
    },
    99134: function (e, t, o) {
      const n = (0, o(62435).createContext)({});
      t.Z = n;
    },
    21584: function (e, t, o) {
      var n = o(62435),
        r = o(93967),
        i = o.n(r),
        a = o(53124),
        l = o(99134),
        s = o(6999),
        c = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        };
      const d = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        u = n.forwardRef((e, t) => {
          const { getPrefixCls: o, direction: r } = n.useContext(a.E_),
            { gutter: u, wrap: g } = n.useContext(l.Z),
            {
              prefixCls: p,
              span: f,
              order: m,
              offset: b,
              push: h,
              pull: $,
              className: y,
              children: v,
              flex: x,
              style: C,
            } = e,
            S = c(e, [
              'prefixCls',
              'span',
              'order',
              'offset',
              'push',
              'pull',
              'className',
              'children',
              'flex',
              'style',
            ]),
            O = o('col', p),
            [k, E, w] = (0, s.cG)(O);
          let j = {};
          d.forEach((t) => {
            let o = {};
            const n = e[t];
            'number' == typeof n
              ? (o.span = n)
              : 'object' == typeof n && (o = n || {}),
              delete S[t],
              (j = Object.assign(Object.assign({}, j), {
                [`${O}-${t}-${o.span}`]: void 0 !== o.span,
                [`${O}-${t}-order-${o.order}`]: o.order || 0 === o.order,
                [`${O}-${t}-offset-${o.offset}`]: o.offset || 0 === o.offset,
                [`${O}-${t}-push-${o.push}`]: o.push || 0 === o.push,
                [`${O}-${t}-pull-${o.pull}`]: o.pull || 0 === o.pull,
                [`${O}-${t}-flex-${o.flex}`]: o.flex || 'auto' === o.flex,
                [`${O}-rtl`]: 'rtl' === r,
              }));
          });
          const I = i()(
              O,
              {
                [`${O}-${f}`]: void 0 !== f,
                [`${O}-order-${m}`]: m,
                [`${O}-offset-${b}`]: b,
                [`${O}-push-${h}`]: h,
                [`${O}-pull-${$}`]: $,
              },
              y,
              j,
              E,
              w,
            ),
            N = {};
          if (u && u[0] > 0) {
            const e = u[0] / 2;
            (N.paddingLeft = e), (N.paddingRight = e);
          }
          return (
            x &&
              ((N.flex = (function (e) {
                return 'number' == typeof e
                  ? `${e} ${e} auto`
                  : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e)
                    ? `0 0 ${e}`
                    : e;
              })(x)),
              !1 !== g || N.minWidth || (N.minWidth = 0)),
            k(
              n.createElement(
                'div',
                Object.assign({}, S, {
                  style: Object.assign(Object.assign({}, N), C),
                  className: I,
                  ref: t,
                }),
                v,
              ),
            )
          );
        });
      t.Z = u;
    },
    92820: function (e, t, o) {
      var n = o(62435),
        r = o(93967),
        i = o.n(r),
        a = o(74443),
        l = o(53124),
        s = o(99134),
        c = o(6999),
        d = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        };
      function u(e, t) {
        const [o, r] = n.useState('string' == typeof e ? e : '');
        return (
          n.useEffect(() => {
            (() => {
              if (('string' == typeof e && r(e), 'object' == typeof e))
                for (let o = 0; o < a.c4.length; o++) {
                  const n = a.c4[o];
                  if (!t[n]) continue;
                  const i = e[n];
                  if (void 0 !== i) return void r(i);
                }
            })();
          }, [JSON.stringify(e), t]),
          o
        );
      }
      const g = n.forwardRef((e, t) => {
        const {
            prefixCls: o,
            justify: r,
            align: g,
            className: p,
            style: f,
            children: m,
            gutter: b = 0,
            wrap: h,
          } = e,
          $ = d(e, [
            'prefixCls',
            'justify',
            'align',
            'className',
            'style',
            'children',
            'gutter',
            'wrap',
          ]),
          { getPrefixCls: y, direction: v } = n.useContext(l.E_),
          [x, C] = n.useState({
            xs: !0,
            sm: !0,
            md: !0,
            lg: !0,
            xl: !0,
            xxl: !0,
          }),
          [S, O] = n.useState({
            xs: !1,
            sm: !1,
            md: !1,
            lg: !1,
            xl: !1,
            xxl: !1,
          }),
          k = u(g, S),
          E = u(r, S),
          w = n.useRef(b),
          j = (0, a.ZP)();
        n.useEffect(() => {
          const e = j.subscribe((e) => {
            O(e);
            const t = w.current || 0;
            ((!Array.isArray(t) && 'object' == typeof t) ||
              (Array.isArray(t) &&
                ('object' == typeof t[0] || 'object' == typeof t[1]))) &&
              C(e);
          });
          return () => j.unsubscribe(e);
        }, []);
        const I = y('row', o),
          [N, B, P] = (0, c.VM)(I),
          z = (() => {
            const e = [void 0, void 0];
            return (
              (Array.isArray(b) ? b : [b, void 0]).forEach((t, o) => {
                if ('object' == typeof t)
                  for (let n = 0; n < a.c4.length; n++) {
                    const r = a.c4[n];
                    if (x[r] && void 0 !== t[r]) {
                      e[o] = t[r];
                      break;
                    }
                  }
                else e[o] = t;
              }),
              e
            );
          })(),
          R = i()(
            I,
            {
              [`${I}-no-wrap`]: !1 === h,
              [`${I}-${E}`]: E,
              [`${I}-${k}`]: k,
              [`${I}-rtl`]: 'rtl' === v,
            },
            p,
            B,
            P,
          ),
          Z = {},
          M = null != z[0] && z[0] > 0 ? z[0] / -2 : void 0;
        M && ((Z.marginLeft = M), (Z.marginRight = M)), ([, Z.rowGap] = z);
        const [T, H] = z,
          W = n.useMemo(() => ({ gutter: [T, H], wrap: h }), [T, H, h]);
        return N(
          n.createElement(
            s.Z.Provider,
            { value: W },
            n.createElement(
              'div',
              Object.assign({}, $, {
                className: R,
                style: Object.assign(Object.assign({}, Z), f),
                ref: t,
              }),
              m,
            ),
          ),
        );
      });
      t.Z = g;
    },
    6999: function (e, t, o) {
      o.d(t, {
        VM: function () {
          return s;
        },
        cG: function () {
          return c;
        },
      });
      var n = o(54548),
        r = o(91945),
        i = o(45503);
      const a = (e) => {
          const { componentCls: t } = e;
          return {
            [t]: { position: 'relative', maxWidth: '100%', minHeight: 1 },
          };
        },
        l = (e, t) =>
          ((e, t) => {
            const { componentCls: o, gridColumns: n } = e,
              r = {};
            for (let e = n; e >= 0; e--)
              0 === e
                ? ((r[`${o}${t}-${e}`] = { display: 'none' }),
                  (r[`${o}-push-${e}`] = { insetInlineStart: 'auto' }),
                  (r[`${o}-pull-${e}`] = { insetInlineEnd: 'auto' }),
                  (r[`${o}${t}-push-${e}`] = { insetInlineStart: 'auto' }),
                  (r[`${o}${t}-pull-${e}`] = { insetInlineEnd: 'auto' }),
                  (r[`${o}${t}-offset-${e}`] = { marginInlineStart: 0 }),
                  (r[`${o}${t}-order-${e}`] = { order: 0 }))
                : ((r[`${o}${t}-${e}`] = [
                    { '--ant-display': 'block', display: 'block' },
                    {
                      display: 'var(--ant-display)',
                      flex: `0 0 ${(e / n) * 100}%`,
                      maxWidth: (e / n) * 100 + '%',
                    },
                  ]),
                  (r[`${o}${t}-push-${e}`] = {
                    insetInlineStart: (e / n) * 100 + '%',
                  }),
                  (r[`${o}${t}-pull-${e}`] = {
                    insetInlineEnd: (e / n) * 100 + '%',
                  }),
                  (r[`${o}${t}-offset-${e}`] = {
                    marginInlineStart: (e / n) * 100 + '%',
                  }),
                  (r[`${o}${t}-order-${e}`] = { order: e }));
            return r;
          })(e, t),
        s = (0, r.I$)(
          'Grid',
          (e) => {
            const { componentCls: t } = e;
            return {
              [t]: {
                display: 'flex',
                flexFlow: 'row wrap',
                minWidth: 0,
                '&::before, &::after': { display: 'flex' },
                '&-no-wrap': { flexWrap: 'nowrap' },
                '&-start': { justifyContent: 'flex-start' },
                '&-center': { justifyContent: 'center' },
                '&-end': { justifyContent: 'flex-end' },
                '&-space-between': { justifyContent: 'space-between' },
                '&-space-around': { justifyContent: 'space-around' },
                '&-space-evenly': { justifyContent: 'space-evenly' },
                '&-top': { alignItems: 'flex-start' },
                '&-middle': { alignItems: 'center' },
                '&-bottom': { alignItems: 'flex-end' },
              },
            };
          },
          () => ({}),
        ),
        c = (0, r.I$)(
          'Grid',
          (e) => {
            const t = (0, i.TS)(e, { gridColumns: 24 }),
              o = {
                '-sm': t.screenSMMin,
                '-md': t.screenMDMin,
                '-lg': t.screenLGMin,
                '-xl': t.screenXLMin,
                '-xxl': t.screenXXLMin,
              };
            return [
              a(t),
              l(t, ''),
              l(t, '-xs'),
              Object.keys(o)
                .map((e) =>
                  ((e, t, o) => ({
                    [`@media (min-width: ${(0, n.bf)(t)})`]: Object.assign(
                      {},
                      l(e, o),
                    ),
                  }))(t, o[e], e),
                )
                .reduce((e, t) => Object.assign(Object.assign({}, e), t), {}),
            ];
          },
          () => ({}),
        );
    },
    21612: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return E;
        },
      });
      var n = o(74902),
        r = o(62435),
        i = o(93967),
        a = o.n(i),
        l = o(98423),
        s = o(53124),
        c = o(82401),
        d = o(50344),
        u = o(7293);
      var g = o(54548),
        p = o(91945);
      var f = (e) => {
        const {
          componentCls: t,
          bodyBg: o,
          lightSiderBg: n,
          lightTriggerBg: r,
          lightTriggerColor: i,
        } = e;
        return {
          [`${t}-sider-light`]: {
            background: n,
            [`${t}-sider-trigger`]: { color: i, background: r },
            [`${t}-sider-zero-width-trigger`]: {
              color: i,
              background: r,
              border: `1px solid ${o}`,
              borderInlineStart: 0,
            },
          },
        };
      };
      const m = (e) => {
        const {
          antCls: t,
          componentCls: o,
          colorText: n,
          triggerColor: r,
          footerBg: i,
          triggerBg: a,
          headerHeight: l,
          headerPadding: s,
          headerColor: c,
          footerPadding: d,
          triggerHeight: u,
          zeroTriggerHeight: p,
          zeroTriggerWidth: m,
          motionDurationMid: b,
          motionDurationSlow: h,
          fontSize: $,
          borderRadius: y,
          bodyBg: v,
          headerBg: x,
          siderBg: C,
        } = e;
        return {
          [o]: Object.assign(
            Object.assign(
              {
                display: 'flex',
                flex: 'auto',
                flexDirection: 'column',
                minHeight: 0,
                background: v,
                '&, *': { boxSizing: 'border-box' },
                [`&${o}-has-sider`]: {
                  flexDirection: 'row',
                  [`> ${o}, > ${o}-content`]: { width: 0 },
                },
                [`${o}-header, &${o}-footer`]: { flex: '0 0 auto' },
                [`${o}-sider`]: {
                  position: 'relative',
                  minWidth: 0,
                  background: C,
                  transition: `all ${b}, background 0s`,
                  '&-children': {
                    height: '100%',
                    marginTop: -0.1,
                    paddingTop: 0.1,
                    [`${t}-menu${t}-menu-inline-collapsed`]: { width: 'auto' },
                  },
                  '&-has-trigger': { paddingBottom: u },
                  '&-right': { order: 1 },
                  '&-trigger': {
                    position: 'fixed',
                    bottom: 0,
                    zIndex: 1,
                    height: u,
                    color: r,
                    lineHeight: (0, g.bf)(u),
                    textAlign: 'center',
                    background: a,
                    cursor: 'pointer',
                    transition: `all ${b}`,
                  },
                  '&-zero-width': {
                    '> *': { overflow: 'hidden' },
                    '&-trigger': {
                      position: 'absolute',
                      top: l,
                      insetInlineEnd: e.calc(m).mul(-1).equal(),
                      zIndex: 1,
                      width: m,
                      height: p,
                      color: r,
                      fontSize: e.fontSizeXL,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: C,
                      borderStartStartRadius: 0,
                      borderStartEndRadius: y,
                      borderEndEndRadius: y,
                      borderEndStartRadius: 0,
                      cursor: 'pointer',
                      transition: `background ${h} ease`,
                      '&::after': {
                        position: 'absolute',
                        inset: 0,
                        background: 'transparent',
                        transition: `all ${h}`,
                        content: '""',
                      },
                      '&:hover::after': {
                        background: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&-right': {
                        insetInlineStart: e.calc(m).mul(-1).equal(),
                        borderStartStartRadius: y,
                        borderStartEndRadius: 0,
                        borderEndEndRadius: 0,
                        borderEndStartRadius: y,
                      },
                    },
                  },
                },
              },
              f(e),
            ),
            { '&-rtl': { direction: 'rtl' } },
          ),
          [`${o}-header`]: {
            height: l,
            padding: s,
            color: c,
            lineHeight: (0, g.bf)(l),
            background: x,
            [`${t}-menu`]: { lineHeight: 'inherit' },
          },
          [`${o}-footer`]: { padding: d, color: n, fontSize: $, background: i },
          [`${o}-content`]: { flex: 'auto', minHeight: 0 },
        };
      };
      var b = (0, p.I$)(
          'Layout',
          (e) => [m(e)],
          (e) => {
            const {
                colorBgLayout: t,
                controlHeight: o,
                controlHeightLG: n,
                colorText: r,
                controlHeightSM: i,
                marginXXS: a,
                colorTextLightSolid: l,
                colorBgContainer: s,
              } = e,
              c = 1.25 * n;
            return {
              colorBgHeader: '#001529',
              colorBgBody: t,
              colorBgTrigger: '#002140',
              bodyBg: t,
              headerBg: '#001529',
              headerHeight: 2 * o,
              headerPadding: `0 ${c}px`,
              headerColor: r,
              footerPadding: `${i}px ${c}px`,
              footerBg: t,
              siderBg: '#001529',
              triggerHeight: n + 2 * a,
              triggerBg: '#002140',
              triggerColor: l,
              zeroTriggerWidth: n,
              zeroTriggerHeight: n,
              lightSiderBg: s,
              lightTriggerBg: s,
              lightTriggerColor: r,
            };
          },
          {
            deprecatedTokens: [
              ['colorBgBody', 'bodyBg'],
              ['colorBgHeader', 'headerBg'],
              ['colorBgTrigger', 'triggerBg'],
            ],
          },
        ),
        h = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        };
      function $(e) {
        let { suffixCls: t, tagName: o, displayName: n } = e;
        return (e) =>
          r.forwardRef((n, i) =>
            r.createElement(
              e,
              Object.assign({ ref: i, suffixCls: t, tagName: o }, n),
            ),
          );
      }
      const y = r.forwardRef((e, t) => {
          const { prefixCls: o, suffixCls: n, className: i, tagName: l } = e,
            c = h(e, ['prefixCls', 'suffixCls', 'className', 'tagName']),
            { getPrefixCls: d } = r.useContext(s.E_),
            u = d('layout', o),
            [g, p, f] = b(u),
            m = n ? `${u}-${n}` : u;
          return g(
            r.createElement(
              l,
              Object.assign({ className: a()(o || m, i, p, f), ref: t }, c),
            ),
          );
        }),
        v = r.forwardRef((e, t) => {
          const { direction: o } = r.useContext(s.E_),
            [i, g] = r.useState([]),
            {
              prefixCls: p,
              className: f,
              rootClassName: m,
              children: $,
              hasSider: y,
              tagName: v,
              style: x,
            } = e,
            C = h(e, [
              'prefixCls',
              'className',
              'rootClassName',
              'children',
              'hasSider',
              'tagName',
              'style',
            ]),
            S = (0, l.Z)(C, ['suffixCls']),
            { getPrefixCls: O, layout: k } = r.useContext(s.E_),
            E = O('layout', p),
            w = (function (e, t, o) {
              return 'boolean' == typeof o
                ? o
                : !!e.length || (0, d.Z)(t).some((e) => e.type === u.Z);
            })(i, $, y),
            [j, I, N] = b(E),
            B = a()(
              E,
              { [`${E}-has-sider`]: w, [`${E}-rtl`]: 'rtl' === o },
              null == k ? void 0 : k.className,
              f,
              m,
              I,
              N,
            ),
            P = r.useMemo(
              () => ({
                siderHook: {
                  addSider: (e) => {
                    g((t) => [].concat((0, n.Z)(t), [e]));
                  },
                  removeSider: (e) => {
                    g((t) => t.filter((t) => t !== e));
                  },
                },
              }),
              [],
            );
          return j(
            r.createElement(
              c.V.Provider,
              { value: P },
              r.createElement(
                v,
                Object.assign(
                  {
                    ref: t,
                    className: B,
                    style: Object.assign(
                      Object.assign({}, null == k ? void 0 : k.style),
                      x,
                    ),
                  },
                  S,
                ),
                $,
              ),
            ),
          );
        }),
        x = $({ tagName: 'div', displayName: 'Layout' })(v),
        C = $({
          suffixCls: 'header',
          tagName: 'header',
          displayName: 'Header',
        })(y),
        S = $({
          suffixCls: 'footer',
          tagName: 'footer',
          displayName: 'Footer',
        })(y),
        O = $({
          suffixCls: 'content',
          tagName: 'main',
          displayName: 'Content',
        })(y);
      const k = x;
      (k.Header = C),
        (k.Footer = S),
        (k.Content = O),
        (k.Sider = u.Z),
        (k._InternalSiderContext = u.D);
      var E = k;
    },
    38703: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return te;
        },
      });
      var n = o(62435),
        r = o(89739),
        i = o(63606),
        a = o(4340),
        l = o(97937),
        s = o(93967),
        c = o.n(s),
        d = o(98423),
        u = o(53124),
        g = o(87462),
        p = o(1413),
        f = o(45987),
        m = {
          percent: 0,
          prefixCls: 'rc-progress',
          strokeColor: '#2db7f5',
          strokeLinecap: 'round',
          strokeWidth: 1,
          trailColor: '#D9D9D9',
          trailWidth: 1,
          gapPosition: 'bottom',
        },
        b = function () {
          var e = (0, n.useRef)([]),
            t = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(function () {
              var o = Date.now(),
                n = !1;
              e.current.forEach(function (e) {
                if (e) {
                  n = !0;
                  var r = e.style;
                  (r.transitionDuration = '.3s, .3s, .3s, .06s'),
                    t.current &&
                      o - t.current < 100 &&
                      (r.transitionDuration = '0s, 0s');
                }
              }),
                n && (t.current = Date.now());
            }),
            e.current
          );
        };
      var h = o(71002),
        $ = o(97685),
        y = o(98924),
        v = 0,
        x = (0, y.Z)();
      var C = function (e) {
          var t = n.useState(),
            o = (0, $.Z)(t, 2),
            r = o[0],
            i = o[1];
          return (
            n.useEffect(function () {
              var e;
              i(
                'rc_progress_'.concat(
                  (x ? ((e = v), (v += 1)) : (e = 'TEST_OR_SSR'), e),
                ),
              );
            }, []),
            e || r
          );
        },
        S = function (e) {
          var t = e.bg,
            o = e.children;
          return n.createElement(
            'div',
            { style: { width: '100%', height: '100%', background: t } },
            o,
          );
        };
      function O(e, t) {
        return Object.keys(e).map(function (o) {
          var n = parseFloat(o),
            r = ''.concat(Math.floor(n * t), '%');
          return ''.concat(e[o], ' ').concat(r);
        });
      }
      var k = n.forwardRef(function (e, t) {
          var o = e.prefixCls,
            r = e.color,
            i = e.gradientId,
            a = e.radius,
            l = e.style,
            s = e.ptg,
            c = e.strokeLinecap,
            d = e.strokeWidth,
            u = e.size,
            g = e.gapDegree,
            p = r && 'object' === (0, h.Z)(r),
            f = p ? '#FFF' : void 0,
            m = u / 2,
            b = n.createElement('circle', {
              className: ''.concat(o, '-circle-path'),
              r: a,
              cx: m,
              cy: m,
              stroke: f,
              strokeLinecap: c,
              strokeWidth: d,
              opacity: 0 === s ? 0 : 1,
              style: l,
              ref: t,
            });
          if (!p) return b;
          var $ = ''.concat(i, '-conic'),
            y = g ? ''.concat(180 + g / 2, 'deg') : '0deg',
            v = O(r, (360 - g) / 360),
            x = O(r, 1),
            C = 'conic-gradient(from '
              .concat(y, ', ')
              .concat(v.join(', '), ')'),
            k = 'linear-gradient(to '
              .concat(g ? 'bottom' : 'top', ', ')
              .concat(x.join(', '), ')');
          return n.createElement(
            n.Fragment,
            null,
            n.createElement('mask', { id: $ }, b),
            n.createElement(
              'foreignObject',
              { x: 0, y: 0, width: u, height: u, mask: 'url(#'.concat($, ')') },
              n.createElement(S, { bg: k }, n.createElement(S, { bg: C })),
            ),
          );
        }),
        E = 100,
        w = function (e, t, o, n, r, i, a, l, s, c) {
          var d =
              arguments.length > 10 && void 0 !== arguments[10]
                ? arguments[10]
                : 0,
            u = (o / 100) * 360 * ((360 - i) / 360),
            g = 0 === i ? 0 : { bottom: 0, top: 180, left: 90, right: -90 }[a],
            p = ((100 - n) / 100) * t;
          'round' === s && 100 !== n && (p += c / 2) >= t && (p = t - 0.01);
          return {
            stroke: 'string' == typeof l ? l : void 0,
            strokeDasharray: ''.concat(t, 'px ').concat(e),
            strokeDashoffset: p + d,
            transform: 'rotate('.concat(r + u + g, 'deg)'),
            transformOrigin: ''.concat(50, 'px ').concat(50, 'px'),
            transition:
              'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s',
            fillOpacity: 0,
          };
        },
        j = [
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
      var N = function (e) {
          var t,
            o,
            r,
            i = (0, p.Z)((0, p.Z)({}, m), e),
            a = i.id,
            l = i.prefixCls,
            s = i.steps,
            d = i.strokeWidth,
            u = i.trailWidth,
            $ = i.gapDegree,
            y = void 0 === $ ? 0 : $,
            v = i.gapPosition,
            x = i.trailColor,
            S = i.strokeLinecap,
            O = i.style,
            N = i.className,
            B = i.strokeColor,
            P = i.percent,
            z = (0, f.Z)(i, j),
            R = C(a),
            Z = ''.concat(R, '-gradient'),
            M = 50 - d / 2,
            T = 2 * Math.PI * M,
            H = y > 0 ? 90 + y / 2 : -90,
            W = T * ((360 - y) / 360),
            D = 'object' === (0, h.Z)(s) ? s : { count: s, space: 2 },
            L = D.count,
            A = D.space,
            F = I(P),
            X = I(B),
            q = X.find(function (e) {
              return e && 'object' === (0, h.Z)(e);
            }),
            G = q && 'object' === (0, h.Z)(q) ? 'butt' : S,
            _ = w(T, W, 0, 100, H, y, v, x, G, d),
            K = b();
          return n.createElement(
            'svg',
            (0, g.Z)(
              {
                className: c()(''.concat(l, '-circle'), N),
                viewBox: '0 0 '.concat(E, ' ').concat(E),
                style: O,
                id: a,
                role: 'presentation',
              },
              z,
            ),
            !L &&
              n.createElement('circle', {
                className: ''.concat(l, '-circle-trail'),
                r: M,
                cx: 50,
                cy: 50,
                stroke: x,
                strokeLinecap: G,
                strokeWidth: u || d,
                style: _,
              }),
            L
              ? ((t = Math.round(L * (F[0] / 100))),
                (o = 100 / L),
                (r = 0),
                new Array(L).fill(null).map(function (e, i) {
                  var a = i <= t - 1 ? X[0] : x,
                    s =
                      a && 'object' === (0, h.Z)(a)
                        ? 'url(#'.concat(Z, ')')
                        : void 0,
                    c = w(T, W, r, o, H, y, v, a, 'butt', d, A);
                  return (
                    (r += (100 * (W - c.strokeDashoffset + A)) / W),
                    n.createElement('circle', {
                      key: i,
                      className: ''.concat(l, '-circle-path'),
                      r: M,
                      cx: 50,
                      cy: 50,
                      stroke: s,
                      strokeWidth: d,
                      opacity: 1,
                      style: c,
                      ref: function (e) {
                        K[i] = e;
                      },
                    })
                  );
                }))
              : (function () {
                  var e = 0;
                  return F.map(function (t, o) {
                    var r = X[o] || X[X.length - 1],
                      i = w(T, W, e, t, H, y, v, r, G, d);
                    return (
                      (e += t),
                      n.createElement(k, {
                        key: o,
                        color: r,
                        ptg: t,
                        radius: M,
                        prefixCls: l,
                        gradientId: Z,
                        style: i,
                        strokeLinecap: G,
                        strokeWidth: d,
                        gapDegree: y,
                        ref: function (e) {
                          K[o] = e;
                        },
                        size: E,
                      })
                    );
                  }).reverse();
                })(),
          );
        },
        B = o(83062),
        P = o(16397);
      function z(e) {
        return !e || e < 0 ? 0 : e > 100 ? 100 : e;
      }
      function R(e) {
        let { success: t, successPercent: o } = e,
          n = o;
        return (
          t && 'progress' in t && (n = t.progress),
          t && 'percent' in t && (n = t.percent),
          n
        );
      }
      const Z = (e) => {
          let { percent: t, success: o, successPercent: n } = e;
          const r = z(R({ success: o, successPercent: n }));
          return [r, z(z(t) - r)];
        },
        M = (e, t, o) => {
          var n, r, i, a;
          let l = -1,
            s = -1;
          if ('step' === t) {
            const t = o.steps,
              n = o.strokeWidth;
            'string' == typeof e || void 0 === e
              ? ((l = 'small' === e ? 2 : 14), (s = null != n ? n : 8))
              : 'number' == typeof e
                ? ([l, s] = [e, e])
                : ([l = 14, s = 8] = e),
              (l *= t);
          } else if ('line' === t) {
            const t = null == o ? void 0 : o.strokeWidth;
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
                        (r = null !== (n = e[0]) && void 0 !== n ? n : e[1]) &&
                      void 0 !== r
                        ? r
                        : 120),
                    (s =
                      null !==
                        (a = null !== (i = e[0]) && void 0 !== i ? i : e[1]) &&
                      void 0 !== a
                        ? a
                        : 120)));
          return [l, s];
        };
      var T = (e) => {
          const {
              prefixCls: t,
              trailColor: o = null,
              strokeLinecap: r = 'round',
              gapPosition: i,
              gapDegree: a,
              width: l = 120,
              type: s,
              children: d,
              success: u,
              size: g = l,
            } = e,
            [p, f] = M(g, 'circle');
          let { strokeWidth: m } = e;
          void 0 === m && (m = Math.max(((e) => (3 / e) * 100)(p), 6));
          const b = { width: p, height: f, fontSize: 0.15 * p + 6 },
            h = n.useMemo(
              () => (a || 0 === a ? a : 'dashboard' === s ? 75 : void 0),
              [a, s],
            ),
            $ = i || ('dashboard' === s && 'bottom') || void 0,
            y =
              '[object Object]' ===
              Object.prototype.toString.call(e.strokeColor),
            v = ((e) => {
              let { success: t = {}, strokeColor: o } = e;
              const { strokeColor: n } = t;
              return [n || P.ez.green, o || null];
            })({ success: u, strokeColor: e.strokeColor }),
            x = c()(`${t}-inner`, { [`${t}-circle-gradient`]: y }),
            C = n.createElement(N, {
              percent: Z(e),
              strokeWidth: m,
              trailWidth: m,
              strokeColor: v,
              strokeLinecap: r,
              trailColor: o,
              prefixCls: t,
              gapDegree: h,
              gapPosition: $,
            });
          return n.createElement(
            'div',
            { className: x, style: b },
            p <= 20
              ? n.createElement(
                  B.Z,
                  { title: d },
                  n.createElement('span', null, C),
                )
              : n.createElement(n.Fragment, null, C, d),
          );
        },
        H = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        };
      const W = (e, t) => {
        const {
            from: o = P.ez.blue,
            to: n = P.ez.blue,
            direction: r = 'rtl' === t ? 'to left' : 'to right',
          } = e,
          i = H(e, ['from', 'to', 'direction']);
        if (0 !== Object.keys(i).length) {
          return {
            backgroundImage: `linear-gradient(${r}, ${((e) => {
              let t = [];
              return (
                Object.keys(e).forEach((o) => {
                  const n = parseFloat(o.replace(/%/g, ''));
                  isNaN(n) || t.push({ key: n, value: e[o] });
                }),
                (t = t.sort((e, t) => e.key - t.key)),
                t
                  .map((e) => {
                    let { key: t, value: o } = e;
                    return `${o} ${t}%`;
                  })
                  .join(', ')
              );
            })(i)})`,
          };
        }
        return { backgroundImage: `linear-gradient(${r}, ${o}, ${n})` };
      };
      var D = (e) => {
        const {
            prefixCls: t,
            direction: o,
            percent: r,
            size: i,
            strokeWidth: a,
            strokeColor: l,
            strokeLinecap: s = 'round',
            children: c,
            trailColor: d = null,
            success: g,
          } = e,
          { direction: p } = (0, n.useContext)(u.E_),
          f = l && 'string' != typeof l ? W(l, o) : { backgroundColor: l },
          m = 'square' === s || 'butt' === s ? 0 : void 0,
          b = { backgroundColor: d || void 0, borderRadius: m },
          h = null != i ? i : [-1, a || ('small' === i ? 6 : 8)],
          [$, y] = M(h, 'line', { strokeWidth: a });
        const v = 'square' === s || 'butt' === s ? 0 : '100px',
          x = Object.assign(
            {
              width: '100%',
              height: y,
              borderRadius: m,
              clipPath:
                'rtl' === p
                  ? `inset(0 0 0 ${100 - z(r)}% round ${v})`
                  : `inset(0 ${100 - z(r)}% 0 0 round ${v})`,
            },
            f,
          ),
          C = R(e),
          S = {
            width: '100%',
            height: y,
            borderRadius: m,
            clipPath:
              'rtl' === p
                ? `inset(0 0 0 ${100 - z(C)}% round ${v})`
                : `inset(0 ${100 - z(C)}% 0 0 round ${v})`,
            backgroundColor: null == g ? void 0 : g.strokeColor,
          },
          O = { width: $ < 0 ? '100%' : $, height: y };
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            'div',
            { className: `${t}-outer`, style: O },
            n.createElement(
              'div',
              { className: `${t}-inner`, style: b },
              n.createElement('div', { className: `${t}-bg`, style: x }),
              void 0 !== C
                ? n.createElement('div', {
                    className: `${t}-success-bg`,
                    style: S,
                  })
                : null,
            ),
          ),
          c,
        );
      };
      var L = (e) => {
          const {
              size: t,
              steps: o,
              percent: r = 0,
              strokeWidth: i = 8,
              strokeColor: a,
              trailColor: l = null,
              prefixCls: s,
              children: d,
            } = e,
            u = Math.round(o * (r / 100)),
            g = null != t ? t : ['small' === t ? 2 : 14, i],
            [p, f] = M(g, 'step', { steps: o, strokeWidth: i }),
            m = p / o,
            b = new Array(o);
          for (let e = 0; e < o; e++) {
            const t = Array.isArray(a) ? a[e] : a;
            b[e] = n.createElement('div', {
              key: e,
              className: c()(`${s}-steps-item`, {
                [`${s}-steps-item-active`]: e <= u - 1,
              }),
              style: {
                backgroundColor: e <= u - 1 ? t : l,
                width: m,
                height: f,
              },
            });
          }
          return n.createElement(
            'div',
            { className: `${s}-steps-outer` },
            b,
            d,
          );
        },
        A = o(54548),
        F = o(14747),
        X = o(91945),
        q = o(45503);
      const G = (e) => {
          const t = e ? '100%' : '-100%';
          return new A.E4(`antProgress${e ? 'RTL' : 'LTR'}Active`, {
            '0%': { transform: `translateX(${t}) scaleX(0)`, opacity: 0.1 },
            '20%': { transform: `translateX(${t}) scaleX(0)`, opacity: 0.5 },
            to: { transform: 'translateX(0) scaleX(1)', opacity: 0 },
          });
        },
        _ = (e) => {
          const { componentCls: t, iconCls: o } = e;
          return {
            [t]: Object.assign(Object.assign({}, (0, F.Wf)(e)), {
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
                  marginInlineEnd: `calc(-2em - ${(0, A.bf)(e.marginXS)})`,
                  paddingInlineEnd: `calc(2em + ${(0, A.bf)(e.paddingXS)})`,
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
                [o]: { fontSize: e.fontSize },
              },
              [`&${t}-status-active`]: {
                [`${t}-bg::before`]: {
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: e.colorBgContainer,
                  borderRadius: e.lineBorderRadius,
                  opacity: 0,
                  animationName: G(),
                  animationDuration: e.progressActiveMotionDuration,
                  animationTimingFunction: e.motionEaseOutQuint,
                  animationIterationCount: 'infinite',
                  content: '""',
                },
              },
              [`&${t}-rtl${t}-status-active`]: {
                [`${t}-bg::before`]: { animationName: G(!0) },
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
        K = (e) => {
          const { componentCls: t, iconCls: o } = e;
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
                [o]: { fontSize: e.circleIconFontSize },
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
        V = (e) => {
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
        Y = (e) => {
          const { componentCls: t, iconCls: o } = e;
          return {
            [t]: {
              [`${t}-small&-line, ${t}-small&-line ${t}-text ${o}`]: {
                fontSize: e.fontSizeSM,
              },
            },
          };
        };
      var J = (0, X.I$)(
          'Progress',
          (e) => {
            const t = e.calc(e.marginXXS).div(2).equal(),
              o = (0, q.TS)(e, {
                progressStepMarginInlineEnd: t,
                progressStepMinWidth: t,
                progressActiveMotionDuration: '2.4s',
              });
            return [_(o), K(o), V(o), Y(o)];
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
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        };
      const U = ['normal', 'exception', 'active', 'success'],
        ee = n.forwardRef((e, t) => {
          const {
              prefixCls: o,
              className: s,
              rootClassName: g,
              steps: p,
              strokeColor: f,
              percent: m = 0,
              size: b = 'default',
              showInfo: h = !0,
              type: $ = 'line',
              status: y,
              format: v,
              style: x,
            } = e,
            C = Q(e, [
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
            S = n.useMemo(() => {
              var t, o;
              const n = R(e);
              return parseInt(
                void 0 !== n
                  ? null === (t = null != n ? n : 0) || void 0 === t
                    ? void 0
                    : t.toString()
                  : null === (o = null != m ? m : 0) || void 0 === o
                    ? void 0
                    : o.toString(),
                10,
              );
            }, [m, e.success, e.successPercent]),
            O = n.useMemo(
              () => (!U.includes(y) && S >= 100 ? 'success' : y || 'normal'),
              [y, S],
            ),
            { getPrefixCls: k, direction: E, progress: w } = n.useContext(u.E_),
            j = k('progress', o),
            [I, N, B] = J(j),
            P = n.useMemo(() => {
              if (!h) return null;
              const t = R(e);
              let o;
              const s = 'line' === $;
              return (
                v || ('exception' !== O && 'success' !== O)
                  ? (o = (v || ((e) => `${e}%`))(z(m), z(t)))
                  : 'exception' === O
                    ? (o = s
                        ? n.createElement(a.Z, null)
                        : n.createElement(l.Z, null))
                    : 'success' === O &&
                      (o = s
                        ? n.createElement(r.Z, null)
                        : n.createElement(i.Z, null)),
                n.createElement(
                  'span',
                  {
                    className: `${j}-text`,
                    title: 'string' == typeof o ? o : void 0,
                  },
                  o,
                )
              );
            }, [h, m, S, O, $, j, v]);
          const Z = Array.isArray(f) ? f[0] : f,
            H = 'string' == typeof f || Array.isArray(f) ? f : void 0;
          let W;
          'line' === $
            ? (W = p
                ? n.createElement(
                    L,
                    Object.assign({}, e, {
                      strokeColor: H,
                      prefixCls: j,
                      steps: p,
                    }),
                    P,
                  )
                : n.createElement(
                    D,
                    Object.assign({}, e, {
                      strokeColor: Z,
                      prefixCls: j,
                      direction: E,
                    }),
                    P,
                  ))
            : ('circle' !== $ && 'dashboard' !== $) ||
              (W = n.createElement(
                T,
                Object.assign({}, e, {
                  strokeColor: Z,
                  prefixCls: j,
                  progressStatus: O,
                }),
                P,
              ));
          const A = c()(
            j,
            `${j}-status-${O}`,
            `${j}-${('dashboard' === $ ? 'circle' : p && 'steps') || $}`,
            {
              [`${j}-inline-circle`]: 'circle' === $ && M(b, 'circle')[0] <= 20,
              [`${j}-show-info`]: h,
              [`${j}-${b}`]: 'string' == typeof b,
              [`${j}-rtl`]: 'rtl' === E,
            },
            null == w ? void 0 : w.className,
            s,
            g,
            N,
            B,
          );
          return I(
            n.createElement(
              'div',
              Object.assign(
                {
                  ref: t,
                  style: Object.assign(
                    Object.assign({}, null == w ? void 0 : w.style),
                    x,
                  ),
                  className: A,
                  role: 'progressbar',
                  'aria-valuenow': S,
                },
                (0, d.Z)(C, [
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
              W,
            ),
          );
        });
      var te = ee;
    },
    33507: function (e, t) {
      t.Z = (e) => ({
        [e.componentCls]: {
          [`${e.antCls}-motion-collapse-legacy`]: {
            overflow: 'hidden',
            '&-active': {
              transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},\n        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
            },
          },
          [`${e.antCls}-motion-collapse`]: {
            overflow: 'hidden',
            transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},\n        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
          },
        },
      });
    },
    66309: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return I;
        },
      });
      var n = o(62435),
        r = o(97937),
        i = o(93967),
        a = o.n(i),
        l = o(98787),
        s = o(69760),
        c = o(45353),
        d = o(53124),
        u = o(54548),
        g = o(10274),
        p = o(14747),
        f = o(45503),
        m = o(91945);
      const b = (e) => {
          const { lineWidth: t, fontSizeIcon: o, calc: n } = e,
            r = e.fontSizeSM;
          return (0, f.TS)(e, {
            tagFontSize: r,
            tagLineHeight: (0, u.bf)(n(e.lineHeightSM).mul(r).equal()),
            tagIconSize: n(o).sub(n(t).mul(2)).equal(),
            tagPaddingHorizontal: 8,
            tagBorderlessBg: e.colorFillTertiary,
          });
        },
        h = (e) => ({
          defaultBg: new g.C(e.colorFillQuaternary)
            .onBackground(e.colorBgContainer)
            .toHexString(),
          defaultColor: e.colorText,
        });
      var $ = (0, m.I$)(
          'Tag',
          (e) =>
            ((e) => {
              const {
                  paddingXXS: t,
                  lineWidth: o,
                  tagPaddingHorizontal: n,
                  componentCls: r,
                  calc: i,
                } = e,
                a = i(n).sub(o).equal(),
                l = i(t).sub(o).equal();
              return {
                [r]: Object.assign(Object.assign({}, (0, p.Wf)(e)), {
                  display: 'inline-block',
                  height: 'auto',
                  marginInlineEnd: e.marginXS,
                  paddingInline: a,
                  fontSize: e.tagFontSize,
                  lineHeight: e.tagLineHeight,
                  whiteSpace: 'nowrap',
                  background: e.defaultBg,
                  border: `${(0, u.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                  borderRadius: e.borderRadiusSM,
                  opacity: 1,
                  transition: `all ${e.motionDurationMid}`,
                  textAlign: 'start',
                  position: 'relative',
                  [`&${r}-rtl`]: { direction: 'rtl' },
                  '&, a, a:hover': { color: e.defaultColor },
                  [`${r}-close-icon`]: {
                    marginInlineStart: l,
                    fontSize: e.tagIconSize,
                    color: e.colorTextDescription,
                    cursor: 'pointer',
                    transition: `all ${e.motionDurationMid}`,
                    '&:hover': { color: e.colorTextHeading },
                  },
                  [`&${r}-has-color`]: {
                    borderColor: 'transparent',
                    [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:
                      { color: e.colorTextLightSolid },
                  },
                  '&-checkable': {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    cursor: 'pointer',
                    [`&:not(${r}-checkable-checked):hover`]: {
                      color: e.colorPrimary,
                      backgroundColor: e.colorFillSecondary,
                    },
                    '&:active, &-checked': { color: e.colorTextLightSolid },
                    '&-checked': {
                      backgroundColor: e.colorPrimary,
                      '&:hover': { backgroundColor: e.colorPrimaryHover },
                    },
                    '&:active': { backgroundColor: e.colorPrimaryActive },
                  },
                  '&-hidden': { display: 'none' },
                  [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: {
                    marginInlineStart: a,
                  },
                }),
                [`${r}-borderless`]: {
                  borderColor: 'transparent',
                  background: e.tagBorderlessBg,
                },
              };
            })(b(e)),
          h,
        ),
        y = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        };
      const v = n.forwardRef((e, t) => {
        const {
            prefixCls: o,
            style: r,
            className: i,
            checked: l,
            onChange: s,
            onClick: c,
          } = e,
          u = y(e, [
            'prefixCls',
            'style',
            'className',
            'checked',
            'onChange',
            'onClick',
          ]),
          { getPrefixCls: g, tag: p } = n.useContext(d.E_),
          f = g('tag', o),
          [m, b, h] = $(f),
          v = a()(
            f,
            `${f}-checkable`,
            { [`${f}-checkable-checked`]: l },
            null == p ? void 0 : p.className,
            i,
            b,
            h,
          );
        return m(
          n.createElement(
            'span',
            Object.assign({}, u, {
              ref: t,
              style: Object.assign(
                Object.assign({}, r),
                null == p ? void 0 : p.style,
              ),
              className: v,
              onClick: (e) => {
                null == s || s(!l), null == c || c(e);
              },
            }),
          ),
        );
      });
      var x = v,
        C = o(98719);
      var S = (0, m.bk)(
        ['Tag', 'preset'],
        (e) =>
          ((e) =>
            (0, C.Z)(e, (t, o) => {
              let {
                textColor: n,
                lightBorderColor: r,
                lightColor: i,
                darkColor: a,
              } = o;
              return {
                [`${e.componentCls}${e.componentCls}-${t}`]: {
                  color: n,
                  background: i,
                  borderColor: r,
                  '&-inverse': {
                    color: e.colorTextLightSolid,
                    background: a,
                    borderColor: a,
                  },
                  [`&${e.componentCls}-borderless`]: {
                    borderColor: 'transparent',
                  },
                },
              };
            }))(b(e)),
        h,
      );
      const O = (e, t, o) => {
        const n =
          'string' != typeof (r = o)
            ? r
            : r.charAt(0).toUpperCase() + r.slice(1);
        var r;
        return {
          [`${e.componentCls}${e.componentCls}-${t}`]: {
            color: e[`color${o}`],
            background: e[`color${n}Bg`],
            borderColor: e[`color${n}Border`],
            [`&${e.componentCls}-borderless`]: { borderColor: 'transparent' },
          },
        };
      };
      var k = (0, m.bk)(
          ['Tag', 'status'],
          (e) => {
            const t = b(e);
            return [
              O(t, 'success', 'Success'),
              O(t, 'processing', 'Info'),
              O(t, 'error', 'Error'),
              O(t, 'warning', 'Warning'),
            ];
          },
          h,
        ),
        E = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        };
      const w = (e, t) => {
          const {
              prefixCls: o,
              className: i,
              rootClassName: u,
              style: g,
              children: p,
              icon: f,
              color: m,
              onClose: b,
              closeIcon: h,
              closable: y,
              bordered: v = !0,
            } = e,
            x = E(e, [
              'prefixCls',
              'className',
              'rootClassName',
              'style',
              'children',
              'icon',
              'color',
              'onClose',
              'closeIcon',
              'closable',
              'bordered',
            ]),
            { getPrefixCls: C, direction: O, tag: w } = n.useContext(d.E_),
            [j, I] = n.useState(!0);
          n.useEffect(() => {
            'visible' in x && I(x.visible);
          }, [x.visible]);
          const N = (0, l.o2)(m),
            B = (0, l.yT)(m),
            P = N || B,
            z = Object.assign(
              Object.assign(
                { backgroundColor: m && !P ? m : void 0 },
                null == w ? void 0 : w.style,
              ),
              g,
            ),
            R = C('tag', o),
            [Z, M, T] = $(R),
            H = a()(
              R,
              null == w ? void 0 : w.className,
              {
                [`${R}-${m}`]: P,
                [`${R}-has-color`]: m && !P,
                [`${R}-hidden`]: !j,
                [`${R}-rtl`]: 'rtl' === O,
                [`${R}-borderless`]: !v,
              },
              i,
              u,
              M,
              T,
            ),
            W = (e) => {
              e.stopPropagation(),
                null == b || b(e),
                e.defaultPrevented || I(!1);
            },
            [, D] = (0, s.Z)(
              y,
              h,
              (e) =>
                null === e
                  ? n.createElement(r.Z, {
                      className: `${R}-close-icon`,
                      onClick: W,
                    })
                  : n.createElement(
                      'span',
                      { className: `${R}-close-icon`, onClick: W },
                      e,
                    ),
              null,
              !1,
            ),
            L = 'function' == typeof x.onClick || (p && 'a' === p.type),
            A = f || null,
            F = A
              ? n.createElement(
                  n.Fragment,
                  null,
                  A,
                  p && n.createElement('span', null, p),
                )
              : p,
            X = n.createElement(
              'span',
              Object.assign({}, x, { ref: t, className: H, style: z }),
              F,
              D,
              N && n.createElement(S, { key: 'preset', prefixCls: R }),
              B && n.createElement(k, { key: 'status', prefixCls: R }),
            );
          return Z(L ? n.createElement(c.Z, { component: 'Tag' }, X) : X);
        },
        j = n.forwardRef(w);
      j.CheckableTag = x;
      var I = j;
    },
  },
]);
//# sourceMappingURL=8587.29d1acd3.async.js.map
