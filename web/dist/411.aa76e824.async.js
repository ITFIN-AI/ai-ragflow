'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [411],
  {
    40411: function (t, e, o) {
      o.d(e, {
        Z: function () {
          return P;
        },
      });
      var n = o(62435),
        r = o(93967),
        a = o.n(r),
        i = o(82225),
        s = o(98787),
        l = o(96159),
        c = o(53124),
        d = o(54548),
        u = o(14747),
        m = o(98719),
        b = o(45503),
        g = o(91945);
      const p = new d.E4('antStatusProcessing', {
          '0%': { transform: 'scale(0.8)', opacity: 0.5 },
          '100%': { transform: 'scale(2.4)', opacity: 0 },
        }),
        f = new d.E4('antZoomBadgeIn', {
          '0%': { transform: 'scale(0) translate(50%, -50%)', opacity: 0 },
          '100%': { transform: 'scale(1) translate(50%, -50%)' },
        }),
        $ = new d.E4('antZoomBadgeOut', {
          '0%': { transform: 'scale(1) translate(50%, -50%)' },
          '100%': { transform: 'scale(0) translate(50%, -50%)', opacity: 0 },
        }),
        h = new d.E4('antNoWrapperZoomBadgeIn', {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)' },
        }),
        v = new d.E4('antNoWrapperZoomBadgeOut', {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)', opacity: 0 },
        }),
        y = new d.E4('antBadgeLoadingCircle', {
          '0%': { transformOrigin: '50%' },
          '100%': {
            transform: 'translate(50%, -50%) rotate(360deg)',
            transformOrigin: '50%',
          },
        }),
        O = (t) => {
          const {
              fontHeight: e,
              lineWidth: o,
              marginXS: n,
              colorBorderBg: r,
            } = t,
            a = e,
            i = o,
            s = t.colorBgContainer,
            l = t.colorError,
            c = t.colorErrorHover;
          return (0, b.TS)(t, {
            badgeFontHeight: a,
            badgeShadowSize: i,
            badgeTextColor: s,
            badgeColor: l,
            badgeColorHover: c,
            badgeShadowColor: r,
            badgeProcessingDuration: '1.2s',
            badgeRibbonOffset: n,
            badgeRibbonCornerTransform: 'scaleY(0.75)',
            badgeRibbonCornerFilter: 'brightness(75%)',
          });
        },
        C = (t) => {
          const { fontSize: e, lineHeight: o, fontSizeSM: n, lineWidth: r } = t;
          return {
            indicatorZIndex: 'auto',
            indicatorHeight: Math.round(e * o) - 2 * r,
            indicatorHeightSM: e,
            dotSize: n / 2,
            textFontSize: n,
            textFontSizeSM: n,
            textFontWeight: 'normal',
            statusSize: n / 2,
          };
        };
      var S = (0, g.I$)(
        'Badge',
        (t) =>
          ((t) => {
            const {
                componentCls: e,
                iconCls: o,
                antCls: n,
                badgeShadowSize: r,
                motionDurationSlow: a,
                textFontSize: i,
                textFontSizeSM: s,
                statusSize: l,
                dotSize: c,
                textFontWeight: b,
                indicatorHeight: g,
                indicatorHeightSM: O,
                marginXS: C,
                calc: S,
              } = t,
              w = `${n}-scroll-number`,
              x = (0, m.Z)(t, (t, o) => {
                let { darkColor: n } = o;
                return {
                  [`&${e} ${e}-color-${t}`]: {
                    background: n,
                    [`&:not(${e}-count)`]: { color: n },
                  },
                };
              });
            return {
              [e]: Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, (0, u.Wf)(t)), {
                    position: 'relative',
                    display: 'inline-block',
                    width: 'fit-content',
                    lineHeight: 1,
                    [`${e}-count`]: {
                      zIndex: t.indicatorZIndex,
                      minWidth: g,
                      height: g,
                      color: t.badgeTextColor,
                      fontWeight: b,
                      fontSize: i,
                      lineHeight: (0, d.bf)(g),
                      whiteSpace: 'nowrap',
                      textAlign: 'center',
                      background: t.badgeColor,
                      borderRadius: S(g).div(2).equal(),
                      boxShadow: `0 0 0 ${(0, d.bf)(r)} ${t.badgeShadowColor}`,
                      transition: `background ${t.motionDurationMid}`,
                      a: { color: t.badgeTextColor },
                      'a:hover': { color: t.badgeTextColor },
                      'a:hover &': { background: t.badgeColorHover },
                    },
                    [`${e}-count-sm`]: {
                      minWidth: O,
                      height: O,
                      fontSize: s,
                      lineHeight: (0, d.bf)(O),
                      borderRadius: S(O).div(2).equal(),
                    },
                    [`${e}-multiple-words`]: {
                      padding: `0 ${(0, d.bf)(t.paddingXS)}`,
                      bdi: { unicodeBidi: 'plaintext' },
                    },
                    [`${e}-dot`]: {
                      zIndex: t.indicatorZIndex,
                      width: c,
                      minWidth: c,
                      height: c,
                      background: t.badgeColor,
                      borderRadius: '100%',
                      boxShadow: `0 0 0 ${(0, d.bf)(r)} ${t.badgeShadowColor}`,
                    },
                    [`${e}-dot${w}`]: { transition: `background ${a}` },
                    [`${e}-count, ${e}-dot, ${w}-custom-component`]: {
                      position: 'absolute',
                      top: 0,
                      insetInlineEnd: 0,
                      transform: 'translate(50%, -50%)',
                      transformOrigin: '100% 0%',
                      [`&${o}-spin`]: {
                        animationName: y,
                        animationDuration: '1s',
                        animationIterationCount: 'infinite',
                        animationTimingFunction: 'linear',
                      },
                    },
                    [`&${e}-status`]: {
                      lineHeight: 'inherit',
                      verticalAlign: 'baseline',
                      [`${e}-status-dot`]: {
                        position: 'relative',
                        top: -1,
                        display: 'inline-block',
                        width: l,
                        height: l,
                        verticalAlign: 'middle',
                        borderRadius: '50%',
                      },
                      [`${e}-status-success`]: {
                        backgroundColor: t.colorSuccess,
                      },
                      [`${e}-status-processing`]: {
                        overflow: 'visible',
                        color: t.colorPrimary,
                        backgroundColor: t.colorPrimary,
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
                          animationName: p,
                          animationDuration: t.badgeProcessingDuration,
                          animationIterationCount: 'infinite',
                          animationTimingFunction: 'ease-in-out',
                          content: '""',
                        },
                      },
                      [`${e}-status-default`]: {
                        backgroundColor: t.colorTextPlaceholder,
                      },
                      [`${e}-status-error`]: { backgroundColor: t.colorError },
                      [`${e}-status-warning`]: {
                        backgroundColor: t.colorWarning,
                      },
                      [`${e}-status-text`]: {
                        marginInlineStart: C,
                        color: t.colorText,
                        fontSize: t.fontSize,
                      },
                    },
                  }),
                  x,
                ),
                {
                  [`${e}-zoom-appear, ${e}-zoom-enter`]: {
                    animationName: f,
                    animationDuration: t.motionDurationSlow,
                    animationTimingFunction: t.motionEaseOutBack,
                    animationFillMode: 'both',
                  },
                  [`${e}-zoom-leave`]: {
                    animationName: $,
                    animationDuration: t.motionDurationSlow,
                    animationTimingFunction: t.motionEaseOutBack,
                    animationFillMode: 'both',
                  },
                  [`&${e}-not-a-wrapper`]: {
                    [`${e}-zoom-appear, ${e}-zoom-enter`]: {
                      animationName: h,
                      animationDuration: t.motionDurationSlow,
                      animationTimingFunction: t.motionEaseOutBack,
                    },
                    [`${e}-zoom-leave`]: {
                      animationName: v,
                      animationDuration: t.motionDurationSlow,
                      animationTimingFunction: t.motionEaseOutBack,
                    },
                    [`&:not(${e}-status)`]: { verticalAlign: 'middle' },
                    [`${w}-custom-component, ${e}-count`]: {
                      transform: 'none',
                    },
                    [`${w}-custom-component, ${w}`]: {
                      position: 'relative',
                      top: 'auto',
                      display: 'block',
                      transformOrigin: '50% 50%',
                    },
                  },
                  [`${w}`]: {
                    overflow: 'hidden',
                    [`${w}-only`]: {
                      position: 'relative',
                      display: 'inline-block',
                      height: g,
                      transition: `all ${t.motionDurationSlow} ${t.motionEaseOutBack}`,
                      WebkitTransformStyle: 'preserve-3d',
                      WebkitBackfaceVisibility: 'hidden',
                      [`> p${w}-only-unit`]: {
                        height: g,
                        margin: 0,
                        WebkitTransformStyle: 'preserve-3d',
                        WebkitBackfaceVisibility: 'hidden',
                      },
                    },
                    [`${w}-symbol`]: { verticalAlign: 'top' },
                  },
                  '&-rtl': {
                    direction: 'rtl',
                    [`${e}-count, ${e}-dot, ${w}-custom-component`]: {
                      transform: 'translate(-50%, -50%)',
                    },
                  },
                },
              ),
            };
          })(O(t)),
        C,
      );
      var w = (0, g.I$)(
        ['Badge', 'Ribbon'],
        (t) =>
          ((t) => {
            const {
                antCls: e,
                badgeFontHeight: o,
                marginXS: n,
                badgeRibbonOffset: r,
                calc: a,
              } = t,
              i = `${e}-ribbon`,
              s = `${e}-ribbon-wrapper`,
              l = (0, m.Z)(t, (t, e) => {
                let { darkColor: o } = e;
                return { [`&${i}-color-${t}`]: { background: o, color: o } };
              });
            return {
              [`${s}`]: { position: 'relative' },
              [`${i}`]: Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, (0, u.Wf)(t)), {
                    position: 'absolute',
                    top: n,
                    padding: `0 ${(0, d.bf)(t.paddingXS)}`,
                    color: t.colorPrimary,
                    lineHeight: (0, d.bf)(o),
                    whiteSpace: 'nowrap',
                    backgroundColor: t.colorPrimary,
                    borderRadius: t.borderRadiusSM,
                    [`${i}-text`]: { color: t.colorTextLightSolid },
                    [`${i}-corner`]: {
                      position: 'absolute',
                      top: '100%',
                      width: r,
                      height: r,
                      color: 'currentcolor',
                      border: `${(0, d.bf)(a(r).div(2).equal())} solid`,
                      transform: t.badgeRibbonCornerTransform,
                      transformOrigin: 'top',
                      filter: t.badgeRibbonCornerFilter,
                    },
                  }),
                  l,
                ),
                {
                  [`&${i}-placement-end`]: {
                    insetInlineEnd: a(r).mul(-1).equal(),
                    borderEndEndRadius: 0,
                    [`${i}-corner`]: {
                      insetInlineEnd: 0,
                      borderInlineEndColor: 'transparent',
                      borderBlockEndColor: 'transparent',
                    },
                  },
                  [`&${i}-placement-start`]: {
                    insetInlineStart: a(r).mul(-1).equal(),
                    borderEndStartRadius: 0,
                    [`${i}-corner`]: {
                      insetInlineStart: 0,
                      borderBlockEndColor: 'transparent',
                      borderInlineStartColor: 'transparent',
                    },
                  },
                  '&-rtl': { direction: 'rtl' },
                },
              ),
            };
          })(O(t)),
        C,
      );
      var x = (t) => {
        const {
            className: e,
            prefixCls: o,
            style: r,
            color: i,
            children: l,
            text: d,
            placement: u = 'end',
            rootClassName: m,
          } = t,
          { getPrefixCls: b, direction: g } = n.useContext(c.E_),
          p = b('ribbon', o),
          f = `${p}-wrapper`,
          [$, h, v] = w(p, f),
          y = (0, s.o2)(i, !1),
          O = a()(
            p,
            `${p}-placement-${u}`,
            { [`${p}-rtl`]: 'rtl' === g, [`${p}-color-${i}`]: y },
            e,
          ),
          C = {},
          S = {};
        return (
          i && !y && ((C.background = i), (S.color = i)),
          $(
            n.createElement(
              'div',
              { className: a()(f, m, h, v) },
              l,
              n.createElement(
                'div',
                {
                  className: a()(O, h),
                  style: Object.assign(Object.assign({}, C), r),
                },
                n.createElement('span', { className: `${p}-text` }, d),
                n.createElement('div', { className: `${p}-corner`, style: S }),
              ),
            ),
          )
        );
      };
      function N(t) {
        let e,
          { prefixCls: o, value: r, current: i, offset: s = 0 } = t;
        return (
          s && (e = { position: 'absolute', top: `${s}00%`, left: 0 }),
          n.createElement(
            'span',
            { style: e, className: a()(`${o}-only-unit`, { current: i }) },
            r,
          )
        );
      }
      function E(t, e, o) {
        let n = t,
          r = 0;
        for (; (n + 10) % 10 !== e; ) (n += o), (r += o);
        return r;
      }
      function j(t) {
        const { prefixCls: e, count: o, value: r } = t,
          a = Number(r),
          i = Math.abs(o),
          [s, l] = n.useState(a),
          [c, d] = n.useState(i),
          u = () => {
            l(a), d(i);
          };
        let m, b;
        if (
          (n.useEffect(() => {
            const t = setTimeout(() => {
              u();
            }, 1e3);
            return () => {
              clearTimeout(t);
            };
          }, [a]),
          s === a || Number.isNaN(a) || Number.isNaN(s))
        )
          (m = [
            n.createElement(N, Object.assign({}, t, { key: a, current: !0 })),
          ]),
            (b = { transition: 'none' });
        else {
          m = [];
          const e = a + 10,
            o = [];
          for (let t = a; t <= e; t += 1) o.push(t);
          const r = o.findIndex((t) => t % 10 === s);
          m = o.map((e, o) => {
            const a = e % 10;
            return n.createElement(
              N,
              Object.assign({}, t, {
                key: e,
                value: a,
                offset: o - r,
                current: o === r,
              }),
            );
          });
          b = { transform: `translateY(${-E(s, a, c < i ? 1 : -1)}00%)` };
        }
        return n.createElement(
          'span',
          { className: `${e}-only`, style: b, onTransitionEnd: u },
          m,
        );
      }
      var k = function (t, e) {
        var o = {};
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            e.indexOf(n) < 0 &&
            (o[n] = t[n]);
        if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(t); r < n.length; r++)
            e.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, n[r]) &&
              (o[n[r]] = t[n[r]]);
        }
        return o;
      };
      const z = n.forwardRef((t, e) => {
        const {
            prefixCls: o,
            count: r,
            className: i,
            motionClassName: s,
            style: d,
            title: u,
            show: m,
            component: b = 'sup',
            children: g,
          } = t,
          p = k(t, [
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
          { getPrefixCls: f } = n.useContext(c.E_),
          $ = f('scroll-number', o),
          h = Object.assign(Object.assign({}, p), {
            'data-show': m,
            style: d,
            className: a()($, i, s),
            title: u,
          });
        let v = r;
        if (r && Number(r) % 1 == 0) {
          const t = String(r).split('');
          v = n.createElement(
            'bdi',
            null,
            t.map((e, o) =>
              n.createElement(j, {
                prefixCls: $,
                count: Number(r),
                value: e,
                key: t.length - o,
              }),
            ),
          );
        }
        return (
          d &&
            d.borderColor &&
            (h.style = Object.assign(Object.assign({}, d), {
              boxShadow: `0 0 0 1px ${d.borderColor} inset`,
            })),
          g
            ? (0, l.Tm)(g, (t) => ({
                className: a()(
                  `${$}-custom-component`,
                  null == t ? void 0 : t.className,
                  s,
                ),
              }))
            : n.createElement(b, Object.assign({}, h, { ref: e }), v)
        );
      });
      var I = z,
        T = function (t, e) {
          var o = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              e.indexOf(n) < 0 &&
              (o[n] = t[n]);
          if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(t); r < n.length; r++)
              e.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, n[r]) &&
                (o[n[r]] = t[n[r]]);
          }
          return o;
        };
      const R = (t, e) => {
          var o, r, d, u, m;
          const {
              prefixCls: b,
              scrollNumberPrefixCls: g,
              children: p,
              status: f,
              text: $,
              color: h,
              count: v = null,
              overflowCount: y = 99,
              dot: O = !1,
              size: C = 'default',
              title: w,
              offset: x,
              style: N,
              className: E,
              rootClassName: j,
              classNames: k,
              styles: z,
              showZero: R = !1,
            } = t,
            B = T(t, [
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
            { getPrefixCls: P, direction: F, badge: W } = n.useContext(c.E_),
            D = P('badge', b),
            [H, M, Z] = S(D),
            A = v > y ? `${y}+` : v,
            q = '0' === A || 0 === A,
            X = (null != f || null != h) && (null === v || (q && !R)),
            _ = O && !q,
            L = _ ? '' : A,
            V = (0, n.useMemo)(
              () => (null == L || '' === L || (q && !R)) && !_,
              [L, q, R, _],
            ),
            Y = (0, n.useRef)(v);
          V || (Y.current = v);
          const G = Y.current,
            J = (0, n.useRef)(L);
          V || (J.current = L);
          const K = J.current,
            Q = (0, n.useRef)(_);
          V || (Q.current = _);
          const U = (0, n.useMemo)(() => {
              if (!x)
                return Object.assign(
                  Object.assign({}, null == W ? void 0 : W.style),
                  N,
                );
              const t = { marginTop: x[1] };
              return (
                'rtl' === F
                  ? (t.left = parseInt(x[0], 10))
                  : (t.right = -parseInt(x[0], 10)),
                Object.assign(
                  Object.assign(
                    Object.assign({}, t),
                    null == W ? void 0 : W.style,
                  ),
                  N,
                )
              );
            }, [F, x, N, null == W ? void 0 : W.style]),
            tt =
              null != w
                ? w
                : 'string' == typeof G || 'number' == typeof G
                  ? G
                  : void 0,
            et =
              V || !$
                ? null
                : n.createElement('span', { className: `${D}-status-text` }, $),
            ot =
              G && 'object' == typeof G
                ? (0, l.Tm)(G, (t) => ({
                    style: Object.assign(Object.assign({}, U), t.style),
                  }))
                : void 0,
            nt = (0, s.o2)(h, !1),
            rt = a()(
              null == k ? void 0 : k.indicator,
              null === (o = null == W ? void 0 : W.classNames) || void 0 === o
                ? void 0
                : o.indicator,
              {
                [`${D}-status-dot`]: X,
                [`${D}-status-${f}`]: !!f,
                [`${D}-color-${h}`]: nt,
              },
            ),
            at = {};
          h && !nt && ((at.color = h), (at.background = h));
          const it = a()(
            D,
            {
              [`${D}-status`]: X,
              [`${D}-not-a-wrapper`]: !p,
              [`${D}-rtl`]: 'rtl' === F,
            },
            E,
            j,
            null == W ? void 0 : W.className,
            null === (r = null == W ? void 0 : W.classNames) || void 0 === r
              ? void 0
              : r.root,
            null == k ? void 0 : k.root,
            M,
            Z,
          );
          if (!p && X) {
            const t = U.color;
            return H(
              n.createElement(
                'span',
                Object.assign({}, B, {
                  className: it,
                  style: Object.assign(
                    Object.assign(
                      Object.assign({}, null == z ? void 0 : z.root),
                      null === (d = null == W ? void 0 : W.styles) ||
                        void 0 === d
                        ? void 0
                        : d.root,
                    ),
                    U,
                  ),
                }),
                n.createElement('span', {
                  className: rt,
                  style: Object.assign(
                    Object.assign(
                      Object.assign({}, null == z ? void 0 : z.indicator),
                      null === (u = null == W ? void 0 : W.styles) ||
                        void 0 === u
                        ? void 0
                        : u.indicator,
                    ),
                    at,
                  ),
                }),
                $ &&
                  n.createElement(
                    'span',
                    { style: { color: t }, className: `${D}-status-text` },
                    $,
                  ),
              ),
            );
          }
          return H(
            n.createElement(
              'span',
              Object.assign({ ref: e }, B, {
                className: it,
                style: Object.assign(
                  Object.assign(
                    {},
                    null === (m = null == W ? void 0 : W.styles) || void 0 === m
                      ? void 0
                      : m.root,
                  ),
                  null == z ? void 0 : z.root,
                ),
              }),
              p,
              n.createElement(
                i.ZP,
                {
                  visible: !V,
                  motionName: `${D}-zoom`,
                  motionAppear: !1,
                  motionDeadline: 1e3,
                },
                (t) => {
                  let { className: e, ref: o } = t;
                  var r, i;
                  const s = P('scroll-number', g),
                    l = Q.current,
                    c = a()(
                      null == k ? void 0 : k.indicator,
                      null === (r = null == W ? void 0 : W.classNames) ||
                        void 0 === r
                        ? void 0
                        : r.indicator,
                      {
                        [`${D}-dot`]: l,
                        [`${D}-count`]: !l,
                        [`${D}-count-sm`]: 'small' === C,
                        [`${D}-multiple-words`]:
                          !l && K && K.toString().length > 1,
                        [`${D}-status-${f}`]: !!f,
                        [`${D}-color-${h}`]: nt,
                      },
                    );
                  let d = Object.assign(
                    Object.assign(
                      Object.assign({}, null == z ? void 0 : z.indicator),
                      null === (i = null == W ? void 0 : W.styles) ||
                        void 0 === i
                        ? void 0
                        : i.indicator,
                    ),
                    U,
                  );
                  return (
                    h && !nt && ((d = d || {}), (d.background = h)),
                    n.createElement(
                      I,
                      {
                        prefixCls: s,
                        show: !V,
                        motionClassName: e,
                        className: c,
                        count: K,
                        title: tt,
                        style: d,
                        key: 'scrollNumber',
                        ref: o,
                      },
                      ot,
                    )
                  );
                },
              ),
              et,
            ),
          );
        },
        B = n.forwardRef(R);
      B.Ribbon = x;
      var P = B;
    },
  },
]);
//# sourceMappingURL=411.aa76e824.async.js.map
