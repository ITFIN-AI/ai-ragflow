'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [8508],
  {
    6171: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return c;
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
                  d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
                },
              },
            ],
          },
          name: 'left',
          theme: 'outlined',
        },
        l = o(84089),
        a = function (e, t) {
          return r.createElement(l.Z, (0, n.Z)({}, e, { ref: t, icon: i }));
        };
      var c = r.forwardRef(a);
    },
    90814: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return c;
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
                  d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
                },
              },
            ],
          },
          name: 'right',
          theme: 'outlined',
        },
        l = o(84089),
        a = function (e, t) {
          return r.createElement(l.Z, (0, n.Z)({}, e, { ref: t, icon: i }));
        };
      var c = r.forwardRef(a);
    },
    7293: function (e, t, o) {
      o.d(t, {
        D: function () {
          return v;
        },
        Z: function () {
          return C;
        },
      });
      var n = o(62435),
        r = o(87462),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z',
                },
              },
            ],
          },
          name: 'bars',
          theme: 'outlined',
        },
        l = o(84089),
        a = function (e, t) {
          return n.createElement(l.Z, (0, r.Z)({}, e, { ref: t, icon: i }));
        };
      var c = n.forwardRef(a),
        s = o(6171),
        d = o(90814),
        m = o(93967),
        u = o.n(m),
        g = o(98423);
      var p = (e) => !isNaN(parseFloat(e)) && isFinite(e),
        b = o(53124),
        $ = o(82401),
        f = function (e, t) {
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
      const h = {
          xs: '479.98px',
          sm: '575.98px',
          md: '767.98px',
          lg: '991.98px',
          xl: '1199.98px',
          xxl: '1599.98px',
        },
        v = n.createContext({}),
        I = (() => {
          let e = 0;
          return function () {
            return (
              (e += 1),
              `${arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''}${e}`
            );
          };
        })();
      var C = n.forwardRef((e, t) => {
        const {
            prefixCls: o,
            className: r,
            trigger: i,
            children: l,
            defaultCollapsed: a = !1,
            theme: m = 'dark',
            style: C = {},
            collapsible: S = !1,
            reverseArrow: B = !1,
            width: y = 200,
            collapsedWidth: x = 80,
            zeroWidthTriggerStyle: O,
            breakpoint: w,
            onCollapse: k,
            onBreakpoint: j,
          } = e,
          z = f(e, [
            'prefixCls',
            'className',
            'trigger',
            'children',
            'defaultCollapsed',
            'theme',
            'style',
            'collapsible',
            'reverseArrow',
            'width',
            'collapsedWidth',
            'zeroWidthTriggerStyle',
            'breakpoint',
            'onCollapse',
            'onBreakpoint',
          ]),
          { siderHook: H } = (0, n.useContext)($.V),
          [E, T] = (0, n.useState)('collapsed' in e ? e.collapsed : a),
          [M, D] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          'collapsed' in e && T(e.collapsed);
        }, [e.collapsed]);
        const N = (t, o) => {
            'collapsed' in e || T(t), null == k || k(t, o);
          },
          P = (0, n.useRef)();
        (P.current = (e) => {
          D(e.matches),
            null == j || j(e.matches),
            E !== e.matches && N(e.matches, 'responsive');
        }),
          (0, n.useEffect)(() => {
            function e(e) {
              return P.current(e);
            }
            let t;
            if ('undefined' != typeof window) {
              const { matchMedia: o } = window;
              if (o && w && w in h) {
                t = o(`screen and (max-width: ${h[w]})`);
                try {
                  t.addEventListener('change', e);
                } catch (o) {
                  t.addListener(e);
                }
                e(t);
              }
            }
            return () => {
              try {
                null == t || t.removeEventListener('change', e);
              } catch (o) {
                null == t || t.removeListener(e);
              }
            };
          }, [w]),
          (0, n.useEffect)(() => {
            const e = I('ant-sider-');
            return H.addSider(e), () => H.removeSider(e);
          }, []);
        const A = () => {
            N(!E, 'clickTrigger');
          },
          { getPrefixCls: W } = (0, n.useContext)(b.E_),
          R = n.useMemo(() => ({ siderCollapsed: E }), [E]);
        return n.createElement(
          v.Provider,
          { value: R },
          (() => {
            const e = W('layout-sider', o),
              a = (0, g.Z)(z, ['collapsed']),
              b = E ? x : y,
              $ = p(b) ? `${b}px` : String(b),
              f =
                0 === parseFloat(String(x || 0))
                  ? n.createElement(
                      'span',
                      {
                        onClick: A,
                        className: u()(
                          `${e}-zero-width-trigger`,
                          `${e}-zero-width-trigger-${B ? 'right' : 'left'}`,
                        ),
                        style: O,
                      },
                      i || n.createElement(c, null),
                    )
                  : null,
              h = {
                expanded: B
                  ? n.createElement(d.Z, null)
                  : n.createElement(s.Z, null),
                collapsed: B
                  ? n.createElement(s.Z, null)
                  : n.createElement(d.Z, null),
              }[E ? 'collapsed' : 'expanded'],
              v =
                null !== i
                  ? f ||
                    n.createElement(
                      'div',
                      {
                        className: `${e}-trigger`,
                        onClick: A,
                        style: { width: $ },
                      },
                      i || h,
                    )
                  : null,
              I = Object.assign(Object.assign({}, C), {
                flex: `0 0 ${$}`,
                maxWidth: $,
                minWidth: $,
                width: $,
              }),
              w = u()(
                e,
                `${e}-${m}`,
                {
                  [`${e}-collapsed`]: !!E,
                  [`${e}-has-trigger`]: S && null !== i && !f,
                  [`${e}-below`]: !!M,
                  [`${e}-zero-width`]: 0 === parseFloat($),
                },
                r,
              );
            return n.createElement(
              'aside',
              Object.assign({ className: w }, a, { style: I, ref: t }),
              n.createElement('div', { className: `${e}-children` }, l),
              S || (M && f) ? v : null,
            );
          })(),
        );
      });
    },
    82401: function (e, t, o) {
      o.d(t, {
        V: function () {
          return n;
        },
      });
      const n = o(62435).createContext({
        siderHook: { addSider: () => null, removeSider: () => null },
      });
    },
    76529: function (e, t, o) {
      o.d(t, {
        J: function () {
          return c;
        },
      });
      var n = o(62435),
        r = o(56790),
        i = o(4173),
        l = function (e, t) {
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
      const a = n.createContext(null),
        c = n.forwardRef((e, t) => {
          const { children: o } = e,
            c = l(e, ['children']),
            s = n.useContext(a),
            d = n.useMemo(
              () => Object.assign(Object.assign({}, s), c),
              [s, c.prefixCls, c.mode, c.selectable, c.rootClassName],
            ),
            m = (0, r.t4)(o),
            u = (0, r.x1)(t, m ? o.ref : null);
          return n.createElement(
            a.Provider,
            { value: d },
            n.createElement(i.BR, null, m ? n.cloneElement(o, { ref: u }) : o),
          );
        });
      t.Z = a;
    },
    68508: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return K;
        },
      });
      var n = o(72512),
        r = o(62435),
        i = o(7293),
        l = o(93967),
        a = o.n(l),
        c = o(53124),
        s = function (e, t) {
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
      var d = (e) => {
          const { prefixCls: t, className: o, dashed: i } = e,
            l = s(e, ['prefixCls', 'className', 'dashed']),
            { getPrefixCls: d } = r.useContext(c.E_),
            m = d('menu', t),
            u = a()({ [`${m}-item-divider-dashed`]: !!i }, o);
          return r.createElement(n.iz, Object.assign({ className: u }, l));
        },
        m = o(50344),
        u = o(98423),
        g = o(83062),
        p = o(96159);
      var b = (0, r.createContext)({
        prefixCls: '',
        firstLevel: !0,
        inlineCollapsed: !1,
      });
      var $ = (e) => {
          var t;
          const { className: o, children: l, icon: c, title: s, danger: d } = e,
            {
              prefixCls: $,
              firstLevel: f,
              direction: h,
              disableMenuItemTitleTooltip: v,
              inlineCollapsed: I,
            } = r.useContext(b),
            { siderCollapsed: C } = r.useContext(i.D);
          let S = s;
          void 0 === s ? (S = f ? l : '') : !1 === s && (S = '');
          const B = { title: S };
          C || I || ((B.title = null), (B.open = !1));
          const y = (0, m.Z)(l).length;
          let x = r.createElement(
            n.ck,
            Object.assign({}, (0, u.Z)(e, ['title', 'icon', 'danger']), {
              className: a()(
                {
                  [`${$}-item-danger`]: d,
                  [`${$}-item-only-child`]: 1 === (c ? y + 1 : y),
                },
                o,
              ),
              title: 'string' == typeof s ? s : void 0,
            }),
            (0, p.Tm)(c, {
              className: a()(
                (0, p.l$)(c)
                  ? null === (t = c.props) || void 0 === t
                    ? void 0
                    : t.className
                  : '',
                `${$}-item-icon`,
              ),
            }),
            ((e) => {
              const t = r.createElement(
                'span',
                { className: `${$}-title-content` },
                l,
              );
              return (!c || ((0, p.l$)(l) && 'span' === l.type)) &&
                l &&
                e &&
                f &&
                'string' == typeof l
                ? r.createElement(
                    'div',
                    { className: `${$}-inline-collapsed-noicon` },
                    l.charAt(0),
                  )
                : t;
            })(I),
          );
          return (
            v ||
              (x = r.createElement(
                g.Z,
                Object.assign({}, B, {
                  placement: 'rtl' === h ? 'left' : 'right',
                  overlayClassName: `${$}-inline-collapsed-tooltip`,
                }),
                x,
              )),
            x
          );
        },
        f = o(87263);
      var h = (e) => {
          var t;
          const { popupClassName: o, icon: i, title: l, theme: c } = e,
            s = r.useContext(b),
            { prefixCls: d, inlineCollapsed: m, theme: g } = s,
            $ = (0, n.Xl)();
          let h;
          if (i) {
            const e = (0, p.l$)(l) && 'span' === l.type;
            h = r.createElement(
              r.Fragment,
              null,
              (0, p.Tm)(i, {
                className: a()(
                  (0, p.l$)(i)
                    ? null === (t = i.props) || void 0 === t
                      ? void 0
                      : t.className
                    : '',
                  `${d}-item-icon`,
                ),
              }),
              e
                ? l
                : r.createElement(
                    'span',
                    { className: `${d}-title-content` },
                    l,
                  ),
            );
          } else
            h =
              m && !$.length && l && 'string' == typeof l
                ? r.createElement(
                    'div',
                    { className: `${d}-inline-collapsed-noicon` },
                    l.charAt(0),
                  )
                : r.createElement(
                    'span',
                    { className: `${d}-title-content` },
                    l,
                  );
          const v = r.useMemo(
              () => Object.assign(Object.assign({}, s), { firstLevel: !1 }),
              [s],
            ),
            [I] = (0, f.Cn)('Menu');
          return r.createElement(
            b.Provider,
            { value: v },
            r.createElement(
              n.Wd,
              Object.assign({}, (0, u.Z)(e, ['icon']), {
                title: h,
                popupClassName: a()(d, o, `${d}-${c || g}`),
                popupStyle: { zIndex: I },
              }),
            ),
          );
        },
        v = o(89705),
        I = o(56790),
        C = o(33603),
        S = function (e, t) {
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
      function B(e) {
        return (e || [])
          .map((e, t) => {
            if (e && 'object' == typeof e) {
              const o = e,
                { label: i, children: l, key: a, type: c } = o,
                s = S(o, ['label', 'children', 'key', 'type']),
                m = null != a ? a : `tmp-${t}`;
              return l || 'group' === c
                ? 'group' === c
                  ? r.createElement(
                      n.BW,
                      Object.assign({ key: m }, s, { title: i }),
                      B(l),
                    )
                  : r.createElement(
                      h,
                      Object.assign({ key: m }, s, { title: i }),
                      B(l),
                    )
                : 'divider' === c
                  ? r.createElement(d, Object.assign({ key: m }, s))
                  : r.createElement($, Object.assign({ key: m }, s), i);
            }
            return null;
          })
          .filter((e) => e);
      }
      function y(e) {
        return r.useMemo(() => (e ? B(e) : e), [e]);
      }
      var x = o(76529),
        O = o(54548),
        w = o(10274),
        k = o(14747),
        j = o(33507),
        z = o(48611),
        H = o(50438),
        E = o(91945),
        T = o(45503);
      var M = (e) => {
        const {
          componentCls: t,
          motionDurationSlow: o,
          horizontalLineHeight: n,
          colorSplit: r,
          lineWidth: i,
          lineType: l,
          itemPaddingInline: a,
        } = e;
        return {
          [`${t}-horizontal`]: {
            lineHeight: n,
            border: 0,
            borderBottom: `${(0, O.bf)(i)} ${l} ${r}`,
            boxShadow: 'none',
            '&::after': {
              display: 'block',
              clear: 'both',
              height: 0,
              content: '"\\20"',
            },
            [`${t}-item, ${t}-submenu`]: {
              position: 'relative',
              display: 'inline-block',
              verticalAlign: 'bottom',
              paddingInline: a,
            },
            [`> ${t}-item:hover,\n        > ${t}-item-active,\n        > ${t}-submenu ${t}-submenu-title:hover`]:
              { backgroundColor: 'transparent' },
            [`${t}-item, ${t}-submenu-title`]: {
              transition: [`border-color ${o}`, `background ${o}`].join(','),
            },
            [`${t}-submenu-arrow`]: { display: 'none' },
          },
        };
      };
      var D = (e) => {
        let { componentCls: t, menuArrowOffset: o, calc: n } = e;
        return {
          [`${t}-rtl`]: { direction: 'rtl' },
          [`${t}-submenu-rtl`]: { transformOrigin: '100% 0' },
          [`${t}-rtl${t}-vertical,\n    ${t}-submenu-rtl ${t}-vertical`]: {
            [`${t}-submenu-arrow`]: {
              '&::before': {
                transform: `rotate(-45deg) translateY(${(0, O.bf)(n(o).mul(-1).equal())})`,
              },
              '&::after': {
                transform: `rotate(45deg) translateY(${(0, O.bf)(o)})`,
              },
            },
          },
        };
      };
      const N = (e) => Object.assign({}, (0, k.oN)(e));
      var P = (e, t) => {
        const {
          componentCls: o,
          itemColor: n,
          itemSelectedColor: r,
          groupTitleColor: i,
          itemBg: l,
          subMenuItemBg: a,
          itemSelectedBg: c,
          activeBarHeight: s,
          activeBarWidth: d,
          activeBarBorderWidth: m,
          motionDurationSlow: u,
          motionEaseInOut: g,
          motionEaseOut: p,
          itemPaddingInline: b,
          motionDurationMid: $,
          itemHoverColor: f,
          lineType: h,
          colorSplit: v,
          itemDisabledColor: I,
          dangerItemColor: C,
          dangerItemHoverColor: S,
          dangerItemSelectedColor: B,
          dangerItemActiveBg: y,
          dangerItemSelectedBg: x,
          itemHoverBg: w,
          itemActiveBg: k,
          menuSubMenuBg: j,
          horizontalItemSelectedColor: z,
          horizontalItemSelectedBg: H,
          horizontalItemBorderRadius: E,
          horizontalItemHoverBg: T,
          popupBg: M,
        } = e;
        return {
          [`${o}-${t}, ${o}-${t} > ${o}`]: {
            color: n,
            background: l,
            [`&${o}-root:focus-visible`]: Object.assign({}, N(e)),
            [`${o}-item-group-title`]: { color: i },
            [`${o}-submenu-selected`]: {
              [`> ${o}-submenu-title`]: { color: r },
            },
            [`${o}-item-disabled, ${o}-submenu-disabled`]: {
              color: `${I} !important`,
            },
            [`${o}-item:not(${o}-item-selected):not(${o}-submenu-selected)`]: {
              [`&:hover, > ${o}-submenu-title:hover`]: { color: f },
            },
            [`&:not(${o}-horizontal)`]: {
              [`${o}-item:not(${o}-item-selected)`]: {
                '&:hover': { backgroundColor: w },
                '&:active': { backgroundColor: k },
              },
              [`${o}-submenu-title`]: {
                '&:hover': { backgroundColor: w },
                '&:active': { backgroundColor: k },
              },
            },
            [`${o}-item-danger`]: {
              color: C,
              [`&${o}-item:hover`]: {
                [`&:not(${o}-item-selected):not(${o}-submenu-selected)`]: {
                  color: S,
                },
              },
              [`&${o}-item:active`]: { background: y },
            },
            [`${o}-item a`]: { '&, &:hover': { color: 'inherit' } },
            [`${o}-item-selected`]: {
              color: r,
              [`&${o}-item-danger`]: { color: B },
              'a, a:hover': { color: 'inherit' },
            },
            [`& ${o}-item-selected`]: {
              backgroundColor: c,
              [`&${o}-item-danger`]: { backgroundColor: x },
            },
            [`${o}-item, ${o}-submenu-title`]: {
              [`&:not(${o}-item-disabled):focus-visible`]: Object.assign(
                {},
                N(e),
              ),
            },
            [`&${o}-submenu > ${o}`]: { backgroundColor: j },
            [`&${o}-popup > ${o}`]: { backgroundColor: M },
            [`&${o}-horizontal`]: Object.assign(
              Object.assign({}, 'dark' === t ? { borderBottom: 0 } : {}),
              {
                [`> ${o}-item, > ${o}-submenu`]: {
                  top: m,
                  marginTop: e.calc(m).mul(-1).equal(),
                  marginBottom: 0,
                  borderRadius: E,
                  '&::after': {
                    position: 'absolute',
                    insetInline: b,
                    bottom: 0,
                    borderBottom: `${(0, O.bf)(s)} solid transparent`,
                    transition: `border-color ${u} ${g}`,
                    content: '""',
                  },
                  '&:hover, &-active, &-open': {
                    background: T,
                    '&::after': { borderBottomWidth: s, borderBottomColor: z },
                  },
                  '&-selected': {
                    color: z,
                    backgroundColor: H,
                    '&:hover': { backgroundColor: H },
                    '&::after': { borderBottomWidth: s, borderBottomColor: z },
                  },
                },
              },
            ),
            [`&${o}-root`]: {
              [`&${o}-inline, &${o}-vertical`]: {
                borderInlineEnd: `${(0, O.bf)(m)} ${h} ${v}`,
              },
            },
            [`&${o}-inline`]: {
              [`${o}-sub${o}-inline`]: { background: a },
              [`${o}-item`]: {
                position: 'relative',
                '&::after': {
                  position: 'absolute',
                  insetBlock: 0,
                  insetInlineEnd: 0,
                  borderInlineEnd: `${(0, O.bf)(d)} solid ${r}`,
                  transform: 'scaleY(0.0001)',
                  opacity: 0,
                  transition: [`transform ${$} ${p}`, `opacity ${$} ${p}`].join(
                    ',',
                  ),
                  content: '""',
                },
                [`&${o}-item-danger`]: {
                  '&::after': { borderInlineEndColor: B },
                },
              },
              [`${o}-selected, ${o}-item-selected`]: {
                '&::after': {
                  transform: 'scaleY(1)',
                  opacity: 1,
                  transition: [`transform ${$} ${g}`, `opacity ${$} ${g}`].join(
                    ',',
                  ),
                },
              },
            },
          },
        };
      };
      const A = (e) => {
        const {
            componentCls: t,
            itemHeight: o,
            itemMarginInline: n,
            padding: r,
            menuArrowSize: i,
            marginXS: l,
            itemMarginBlock: a,
            itemWidth: c,
          } = e,
          s = e.calc(i).add(r).add(l).equal();
        return {
          [`${t}-item`]: { position: 'relative', overflow: 'hidden' },
          [`${t}-item, ${t}-submenu-title`]: {
            height: o,
            lineHeight: (0, O.bf)(o),
            paddingInline: r,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginInline: n,
            marginBlock: a,
            width: c,
          },
          [`> ${t}-item,\n            > ${t}-submenu > ${t}-submenu-title`]: {
            height: o,
            lineHeight: (0, O.bf)(o),
          },
          [`${t}-item-group-list ${t}-submenu-title,\n            ${t}-submenu-title`]:
            { paddingInlineEnd: s },
        };
      };
      var W = (e) => {
        const {
            componentCls: t,
            iconCls: o,
            itemHeight: n,
            colorTextLightSolid: r,
            dropdownWidth: i,
            controlHeightLG: l,
            motionDurationMid: a,
            motionEaseOut: c,
            paddingXL: s,
            itemMarginInline: d,
            fontSizeLG: m,
            motionDurationSlow: u,
            paddingXS: g,
            boxShadowSecondary: p,
            collapsedWidth: b,
            collapsedIconSize: $,
          } = e,
          f = {
            height: n,
            lineHeight: (0, O.bf)(n),
            listStylePosition: 'inside',
            listStyleType: 'disc',
          };
        return [
          {
            [t]: {
              '&-inline, &-vertical': Object.assign(
                { [`&${t}-root`]: { boxShadow: 'none' } },
                A(e),
              ),
            },
            [`${t}-submenu-popup`]: {
              [`${t}-vertical`]: Object.assign(Object.assign({}, A(e)), {
                boxShadow: p,
              }),
            },
          },
          {
            [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
              minWidth: i,
              maxHeight: `calc(100vh - ${(0, O.bf)(e.calc(l).mul(2.5).equal())})`,
              padding: '0',
              overflow: 'hidden',
              borderInlineEnd: 0,
              "&:not([class*='-active'])": {
                overflowX: 'hidden',
                overflowY: 'auto',
              },
            },
          },
          {
            [`${t}-inline`]: {
              width: '100%',
              [`&${t}-root`]: {
                [`${t}-item, ${t}-submenu-title`]: {
                  display: 'flex',
                  alignItems: 'center',
                  transition: [
                    `border-color ${u}`,
                    `background ${u}`,
                    `padding ${a} ${c}`,
                  ].join(','),
                  [`> ${t}-title-content`]: {
                    flex: 'auto',
                    minWidth: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  },
                  '> *': { flex: 'none' },
                },
              },
              [`${t}-sub${t}-inline`]: {
                padding: 0,
                border: 0,
                borderRadius: 0,
                boxShadow: 'none',
                [`& > ${t}-submenu > ${t}-submenu-title`]: f,
                [`& ${t}-item-group-title`]: { paddingInlineStart: s },
              },
              [`${t}-item`]: f,
            },
          },
          {
            [`${t}-inline-collapsed`]: {
              width: b,
              [`&${t}-root`]: {
                [`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
                  [`> ${t}-inline-collapsed-noicon`]: {
                    fontSize: m,
                    textAlign: 'center',
                  },
                },
              },
              [`> ${t}-item,\n          > ${t}-item-group > ${t}-item-group-list > ${t}-item,\n          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,\n          > ${t}-submenu > ${t}-submenu-title`]:
                {
                  insetInlineStart: 0,
                  paddingInline: `calc(50% - ${(0, O.bf)(e.calc(m).div(2).equal())} - ${(0, O.bf)(d)})`,
                  textOverflow: 'clip',
                  [`\n            ${t}-submenu-arrow,\n            ${t}-submenu-expand-icon\n          `]:
                    { opacity: 0 },
                  [`${t}-item-icon, ${o}`]: {
                    margin: 0,
                    fontSize: $,
                    lineHeight: (0, O.bf)(n),
                    '+ span': { display: 'inline-block', opacity: 0 },
                  },
                },
              [`${t}-item-icon, ${o}`]: { display: 'inline-block' },
              '&-tooltip': {
                pointerEvents: 'none',
                [`${t}-item-icon, ${o}`]: { display: 'none' },
                'a, a:hover': { color: r },
              },
              [`${t}-item-group-title`]: Object.assign(
                Object.assign({}, k.vS),
                { paddingInline: g },
              ),
            },
          },
        ];
      };
      const R = (e) => {
          const {
            componentCls: t,
            motionDurationSlow: o,
            motionDurationMid: n,
            motionEaseInOut: r,
            motionEaseOut: i,
            iconCls: l,
            iconSize: a,
            iconMarginInlineEnd: c,
          } = e;
          return {
            [`${t}-item, ${t}-submenu-title`]: {
              position: 'relative',
              display: 'block',
              margin: 0,
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: [
                `border-color ${o}`,
                `background ${o}`,
                `padding ${o} ${r}`,
              ].join(','),
              [`${t}-item-icon, ${l}`]: {
                minWidth: a,
                fontSize: a,
                transition: [
                  `font-size ${n} ${i}`,
                  `margin ${o} ${r}`,
                  `color ${o}`,
                ].join(','),
                '+ span': {
                  marginInlineStart: c,
                  opacity: 1,
                  transition: [
                    `opacity ${o} ${r}`,
                    `margin ${o}`,
                    `color ${o}`,
                  ].join(','),
                },
              },
              [`${t}-item-icon`]: Object.assign({}, (0, k.Ro)()),
              [`&${t}-item-only-child`]: {
                [`> ${l}, > ${t}-item-icon`]: { marginInlineEnd: 0 },
              },
            },
            [`${t}-item-disabled, ${t}-submenu-disabled`]: {
              background: 'none !important',
              cursor: 'not-allowed',
              '&::after': { borderColor: 'transparent !important' },
              a: { color: 'inherit !important' },
              [`> ${t}-submenu-title`]: {
                color: 'inherit !important',
                cursor: 'not-allowed',
              },
            },
          };
        },
        L = (e) => {
          const {
            componentCls: t,
            motionDurationSlow: o,
            motionEaseInOut: n,
            borderRadius: r,
            menuArrowSize: i,
            menuArrowOffset: l,
          } = e;
          return {
            [`${t}-submenu`]: {
              '&-expand-icon, &-arrow': {
                position: 'absolute',
                top: '50%',
                insetInlineEnd: e.margin,
                width: i,
                color: 'currentcolor',
                transform: 'translateY(-50%)',
                transition: `transform ${o} ${n}, opacity ${o}`,
              },
              '&-arrow': {
                '&::before, &::after': {
                  position: 'absolute',
                  width: e.calc(i).mul(0.6).equal(),
                  height: e.calc(i).mul(0.15).equal(),
                  backgroundColor: 'currentcolor',
                  borderRadius: r,
                  transition: [
                    `background ${o} ${n}`,
                    `transform ${o} ${n}`,
                    `top ${o} ${n}`,
                    `color ${o} ${n}`,
                  ].join(','),
                  content: '""',
                },
                '&::before': {
                  transform: `rotate(45deg) translateY(${(0, O.bf)(e.calc(l).mul(-1).equal())})`,
                },
                '&::after': {
                  transform: `rotate(-45deg) translateY(${(0, O.bf)(l)})`,
                },
              },
            },
          };
        },
        Z = (e) => {
          const {
            antCls: t,
            componentCls: o,
            fontSize: n,
            motionDurationSlow: r,
            motionDurationMid: i,
            motionEaseInOut: l,
            paddingXS: a,
            padding: c,
            colorSplit: s,
            lineWidth: d,
            zIndexPopup: m,
            borderRadiusLG: u,
            subMenuItemBorderRadius: g,
            menuArrowSize: p,
            menuArrowOffset: b,
            lineType: $,
            menuPanelMaskInset: f,
            groupTitleLineHeight: h,
            groupTitleFontSize: v,
          } = e;
          return [
            {
              '': {
                [`${o}`]: Object.assign(Object.assign({}, (0, k.dF)()), {
                  '&-hidden': { display: 'none' },
                }),
              },
              [`${o}-submenu-hidden`]: { display: 'none' },
            },
            {
              [o]: Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign({}, (0, k.Wf)(e)),
                          (0, k.dF)(),
                        ),
                        {
                          marginBottom: 0,
                          paddingInlineStart: 0,
                          fontSize: n,
                          lineHeight: 0,
                          listStyle: 'none',
                          outline: 'none',
                          transition: `width ${r} cubic-bezier(0.2, 0, 0, 1) 0s`,
                          'ul, ol': {
                            margin: 0,
                            padding: 0,
                            listStyle: 'none',
                          },
                          '&-overflow': {
                            display: 'flex',
                            [`${o}-item`]: { flex: 'none' },
                          },
                          [`${o}-item, ${o}-submenu, ${o}-submenu-title`]: {
                            borderRadius: e.itemBorderRadius,
                          },
                          [`${o}-item-group-title`]: {
                            padding: `${(0, O.bf)(a)} ${(0, O.bf)(c)}`,
                            fontSize: v,
                            lineHeight: h,
                            transition: `all ${r}`,
                          },
                          [`&-horizontal ${o}-submenu`]: {
                            transition: [
                              `border-color ${r} ${l}`,
                              `background ${r} ${l}`,
                            ].join(','),
                          },
                          [`${o}-submenu, ${o}-submenu-inline`]: {
                            transition: [
                              `border-color ${r} ${l}`,
                              `background ${r} ${l}`,
                              `padding ${i} ${l}`,
                            ].join(','),
                          },
                          [`${o}-submenu ${o}-sub`]: {
                            cursor: 'initial',
                            transition: [
                              `background ${r} ${l}`,
                              `padding ${r} ${l}`,
                            ].join(','),
                          },
                          [`${o}-title-content`]: {
                            transition: `color ${r}`,
                            [`> ${t}-typography-ellipsis-single-line`]: {
                              display: 'inline',
                              verticalAlign: 'unset',
                            },
                          },
                          [`${o}-item a`]: {
                            '&::before': {
                              position: 'absolute',
                              inset: 0,
                              backgroundColor: 'transparent',
                              content: '""',
                            },
                          },
                          [`${o}-item-divider`]: {
                            overflow: 'hidden',
                            lineHeight: 0,
                            borderColor: s,
                            borderStyle: $,
                            borderWidth: 0,
                            borderTopWidth: d,
                            marginBlock: d,
                            padding: 0,
                            '&-dashed': { borderStyle: 'dashed' },
                          },
                        },
                      ),
                      R(e),
                    ),
                    {
                      [`${o}-item-group`]: {
                        [`${o}-item-group-list`]: {
                          margin: 0,
                          padding: 0,
                          [`${o}-item, ${o}-submenu-title`]: {
                            paddingInline: `${(0, O.bf)(e.calc(n).mul(2).equal())} ${(0, O.bf)(c)}`,
                          },
                        },
                      },
                      '&-submenu': {
                        '&-popup': {
                          position: 'absolute',
                          zIndex: m,
                          borderRadius: u,
                          boxShadow: 'none',
                          transformOrigin: '0 0',
                          [`&${o}-submenu`]: { background: 'transparent' },
                          '&::before': {
                            position: 'absolute',
                            inset: `${(0, O.bf)(f)} 0 0`,
                            zIndex: -1,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                            content: '""',
                          },
                        },
                        '&-placement-rightTop::before': {
                          top: 0,
                          insetInlineStart: f,
                        },
                        '\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ':
                          { transformOrigin: '100% 0' },
                        '\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ':
                          { transformOrigin: '100% 100%' },
                        '\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ':
                          { transformOrigin: '0 100%' },
                        '\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ':
                          { transformOrigin: '0 0' },
                        '\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ':
                          { paddingInlineEnd: e.paddingXS },
                        '\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ':
                          { paddingInlineStart: e.paddingXS },
                        '\n          &-placement-topRight,\n          &-placement-topLeft\n          ':
                          { paddingBottom: e.paddingXS },
                        '\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ':
                          { paddingTop: e.paddingXS },
                        [`> ${o}`]: Object.assign(
                          Object.assign(
                            Object.assign({ borderRadius: u }, R(e)),
                            L(e),
                          ),
                          {
                            [`${o}-item, ${o}-submenu > ${o}-submenu-title`]: {
                              borderRadius: g,
                            },
                            [`${o}-submenu-title::after`]: {
                              transition: `transform ${r} ${l}`,
                            },
                          },
                        ),
                      },
                    },
                  ),
                  L(e),
                ),
                {
                  [`&-inline-collapsed ${o}-submenu-arrow,\n        &-inline ${o}-submenu-arrow`]:
                    {
                      '&::before': {
                        transform: `rotate(-45deg) translateX(${(0, O.bf)(b)})`,
                      },
                      '&::after': {
                        transform: `rotate(45deg) translateX(${(0, O.bf)(e.calc(b).mul(-1).equal())})`,
                      },
                    },
                  [`${o}-submenu-open${o}-submenu-inline > ${o}-submenu-title > ${o}-submenu-arrow`]:
                    {
                      transform: `translateY(${(0, O.bf)(e.calc(p).mul(0.2).mul(-1).equal())})`,
                      '&::after': {
                        transform: `rotate(-45deg) translateX(${(0, O.bf)(e.calc(b).mul(-1).equal())})`,
                      },
                      '&::before': {
                        transform: `rotate(45deg) translateX(${(0, O.bf)(b)})`,
                      },
                    },
                },
              ),
            },
            { [`${t}-layout-header`]: { [o]: { lineHeight: 'inherit' } } },
          ];
        },
        X = (e) => {
          const {
              colorPrimary: t,
              colorError: o,
              colorTextDisabled: n,
              colorErrorBg: r,
              colorText: i,
              colorTextDescription: l,
              colorBgContainer: a,
              colorFillAlter: c,
              colorFillContent: s,
              lineWidth: d,
              lineWidthBold: m,
              controlItemBgActive: u,
              colorBgTextHover: g,
              controlHeightLG: p,
              lineHeight: b,
              colorBgElevated: $,
              marginXXS: f,
              padding: h,
              fontSize: v,
              controlHeightSM: I,
              fontSizeLG: C,
              colorTextLightSolid: S,
              colorErrorHover: B,
            } = e,
            y = new w.C(S).setAlpha(0.65).toRgbString();
          return {
            dropdownWidth: 160,
            zIndexPopup: e.zIndexPopupBase + 50,
            radiusItem: e.borderRadiusLG,
            itemBorderRadius: e.borderRadiusLG,
            radiusSubMenuItem: e.borderRadiusSM,
            subMenuItemBorderRadius: e.borderRadiusSM,
            colorItemText: i,
            itemColor: i,
            colorItemTextHover: i,
            itemHoverColor: i,
            colorItemTextHoverHorizontal: t,
            horizontalItemHoverColor: t,
            colorGroupTitle: l,
            groupTitleColor: l,
            colorItemTextSelected: t,
            itemSelectedColor: t,
            colorItemTextSelectedHorizontal: t,
            horizontalItemSelectedColor: t,
            colorItemBg: a,
            itemBg: a,
            colorItemBgHover: g,
            itemHoverBg: g,
            colorItemBgActive: s,
            itemActiveBg: u,
            colorSubItemBg: c,
            subMenuItemBg: c,
            colorItemBgSelected: u,
            itemSelectedBg: u,
            colorItemBgSelectedHorizontal: 'transparent',
            horizontalItemSelectedBg: 'transparent',
            colorActiveBarWidth: 0,
            activeBarWidth: 0,
            colorActiveBarHeight: m,
            activeBarHeight: m,
            colorActiveBarBorderSize: d,
            activeBarBorderWidth: d,
            colorItemTextDisabled: n,
            itemDisabledColor: n,
            colorDangerItemText: o,
            dangerItemColor: o,
            colorDangerItemTextHover: o,
            dangerItemHoverColor: o,
            colorDangerItemTextSelected: o,
            dangerItemSelectedColor: o,
            colorDangerItemBgActive: r,
            dangerItemActiveBg: r,
            colorDangerItemBgSelected: r,
            dangerItemSelectedBg: r,
            itemMarginInline: e.marginXXS,
            horizontalItemBorderRadius: 0,
            horizontalItemHoverBg: 'transparent',
            itemHeight: p,
            groupTitleLineHeight: b,
            collapsedWidth: 2 * p,
            popupBg: $,
            itemMarginBlock: f,
            itemPaddingInline: h,
            horizontalLineHeight: 1.15 * p + 'px',
            iconSize: v,
            iconMarginInlineEnd: I - v,
            collapsedIconSize: C,
            groupTitleFontSize: v,
            darkItemDisabledColor: new w.C(S).setAlpha(0.25).toRgbString(),
            darkItemColor: y,
            darkDangerItemColor: o,
            darkItemBg: '#001529',
            darkPopupBg: '#001529',
            darkSubMenuItemBg: '#000c17',
            darkItemSelectedColor: S,
            darkItemSelectedBg: t,
            darkDangerItemSelectedBg: o,
            darkItemHoverBg: 'transparent',
            darkGroupTitleColor: y,
            darkItemHoverColor: S,
            darkDangerItemHoverColor: B,
            darkDangerItemSelectedColor: S,
            darkDangerItemActiveBg: o,
            itemWidth: '',
          };
        },
        q = (e) =>
          Object.assign(Object.assign({}, e), {
            itemWidth: e.activeBarWidth
              ? `calc(100% + ${e.activeBarBorderWidth}px)`
              : `calc(100% - ${2 * e.itemMarginInline}px)`,
          });
      var G = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e,
            o =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
          return (0, E.I$)(
            'Menu',
            (e) => {
              const {
                  colorBgElevated: t,
                  colorPrimary: o,
                  colorTextLightSolid: n,
                  controlHeightLG: r,
                  fontSize: i,
                  darkItemColor: l,
                  darkDangerItemColor: a,
                  darkItemBg: c,
                  darkSubMenuItemBg: s,
                  darkItemSelectedColor: d,
                  darkItemSelectedBg: m,
                  darkDangerItemSelectedBg: u,
                  darkItemHoverBg: g,
                  darkGroupTitleColor: p,
                  darkItemHoverColor: b,
                  darkItemDisabledColor: $,
                  darkDangerItemHoverColor: f,
                  darkDangerItemSelectedColor: h,
                  darkDangerItemActiveBg: v,
                } = e,
                I = e.calc(i).div(7).mul(5).equal(),
                C = (0, T.TS)(e, {
                  menuArrowSize: I,
                  menuHorizontalHeight: e.calc(r).mul(1.15).equal(),
                  menuArrowOffset: e.calc(I).mul(0.25).equal(),
                  menuPanelMaskInset: -7,
                  menuSubMenuBg: t,
                  calc: e.calc,
                }),
                S = (0, T.TS)(C, {
                  itemColor: l,
                  itemHoverColor: b,
                  groupTitleColor: p,
                  itemSelectedColor: d,
                  itemBg: c,
                  popupBg: c,
                  subMenuItemBg: s,
                  itemActiveBg: 'transparent',
                  itemSelectedBg: m,
                  activeBarHeight: 0,
                  activeBarBorderWidth: 0,
                  itemHoverBg: g,
                  itemDisabledColor: $,
                  dangerItemColor: a,
                  dangerItemHoverColor: f,
                  dangerItemSelectedColor: h,
                  dangerItemActiveBg: v,
                  dangerItemSelectedBg: u,
                  menuSubMenuBg: s,
                  horizontalItemSelectedColor: n,
                  horizontalItemSelectedBg: o,
                });
              return [
                Z(C),
                M(C),
                W(C),
                P(C, 'light'),
                P(S, 'dark'),
                D(C),
                (0, j.Z)(C),
                (0, z.oN)(C, 'slide-up'),
                (0, z.oN)(C, 'slide-down'),
                (0, H._y)(C, 'zoom-big'),
              ];
            },
            X,
            {
              deprecatedTokens: [
                ['colorGroupTitle', 'groupTitleColor'],
                ['radiusItem', 'itemBorderRadius'],
                ['radiusSubMenuItem', 'subMenuItemBorderRadius'],
                ['colorItemText', 'itemColor'],
                ['colorItemTextHover', 'itemHoverColor'],
                ['colorItemTextHoverHorizontal', 'horizontalItemHoverColor'],
                ['colorItemTextSelected', 'itemSelectedColor'],
                [
                  'colorItemTextSelectedHorizontal',
                  'horizontalItemSelectedColor',
                ],
                ['colorItemTextDisabled', 'itemDisabledColor'],
                ['colorDangerItemText', 'dangerItemColor'],
                ['colorDangerItemTextHover', 'dangerItemHoverColor'],
                ['colorDangerItemTextSelected', 'dangerItemSelectedColor'],
                ['colorDangerItemBgActive', 'dangerItemActiveBg'],
                ['colorDangerItemBgSelected', 'dangerItemSelectedBg'],
                ['colorItemBg', 'itemBg'],
                ['colorItemBgHover', 'itemHoverBg'],
                ['colorSubItemBg', 'subMenuItemBg'],
                ['colorItemBgActive', 'itemActiveBg'],
                ['colorItemBgSelectedHorizontal', 'horizontalItemSelectedBg'],
                ['colorActiveBarWidth', 'activeBarWidth'],
                ['colorActiveBarHeight', 'activeBarHeight'],
                ['colorActiveBarBorderSize', 'activeBarBorderWidth'],
                ['colorItemBgSelected', 'itemSelectedBg'],
              ],
              format: q,
              injectStyle: o,
              unitless: { groupTitleLineHeight: !0 },
            },
          )(e, t);
        },
        F = o(35792),
        Y = function (e, t) {
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
      const _ = (0, r.forwardRef)((e, t) => {
        var o, i;
        const l = r.useContext(x.Z),
          s = l || {},
          {
            getPrefixCls: d,
            getPopupContainer: m,
            direction: g,
            menu: $,
          } = r.useContext(c.E_),
          f = d(),
          {
            prefixCls: h,
            className: S,
            style: B,
            theme: O = 'light',
            expandIcon: w,
            _internalDisableMenuItemTitleTooltip: k,
            inlineCollapsed: j,
            siderCollapsed: z,
            items: H,
            children: E,
            rootClassName: T,
            mode: M,
            selectable: D,
            onClick: N,
            overflowedIndicatorPopupClassName: P,
          } = e,
          A = Y(e, [
            'prefixCls',
            'className',
            'style',
            'theme',
            'expandIcon',
            '_internalDisableMenuItemTitleTooltip',
            'inlineCollapsed',
            'siderCollapsed',
            'items',
            'children',
            'rootClassName',
            'mode',
            'selectable',
            'onClick',
            'overflowedIndicatorPopupClassName',
          ]),
          W = (0, u.Z)(A, ['collapsedWidth']),
          R = y(H) || E;
        null === (o = s.validator) || void 0 === o || o.call(s, { mode: M });
        const L = (0, I.zX)(function () {
            var e;
            null == N || N.apply(void 0, arguments),
              null === (e = s.onClick) || void 0 === e || e.call(s);
          }),
          Z = s.mode || M,
          X = null != D ? D : s.selectable,
          q = r.useMemo(() => (void 0 !== z ? z : j), [j, z]),
          _ = {
            horizontal: { motionName: `${f}-slide-up` },
            inline: (0, C.Z)(f),
            other: { motionName: `${f}-zoom-big` },
          },
          V = d('menu', h || s.prefixCls),
          J = (0, F.Z)(V),
          [K, Q, U] = G(V, J, !l),
          ee = a()(`${V}-${O}`, null == $ ? void 0 : $.className, S);
        let te;
        if ('function' == typeof w) te = w;
        else if (null === w || !1 === w) te = null;
        else if (null === s.expandIcon || !1 === s.expandIcon) te = null;
        else {
          const e = null != w ? w : s.expandIcon;
          te = (0, p.Tm)(e, {
            className: a()(
              `${V}-submenu-expand-icon`,
              (0, p.l$)(e)
                ? null === (i = e.props) || void 0 === i
                  ? void 0
                  : i.className
                : '',
            ),
          });
        }
        const oe = r.useMemo(
          () => ({
            prefixCls: V,
            inlineCollapsed: q || !1,
            direction: g,
            firstLevel: !0,
            theme: O,
            mode: Z,
            disableMenuItemTitleTooltip: k,
          }),
          [V, q, g, k, O],
        );
        return K(
          r.createElement(
            x.Z.Provider,
            { value: null },
            r.createElement(
              b.Provider,
              { value: oe },
              r.createElement(
                n.ZP,
                Object.assign(
                  {
                    getPopupContainer: m,
                    overflowedIndicator: r.createElement(v.Z, null),
                    overflowedIndicatorPopupClassName: a()(V, `${V}-${O}`, P),
                    mode: Z,
                    selectable: X,
                    onClick: L,
                  },
                  W,
                  {
                    inlineCollapsed: q,
                    style: Object.assign(
                      Object.assign({}, null == $ ? void 0 : $.style),
                      B,
                    ),
                    className: ee,
                    prefixCls: V,
                    direction: g,
                    defaultMotions: _,
                    expandIcon: te,
                    ref: t,
                    rootClassName: a()(T, Q, s.rootClassName, U, J),
                  },
                ),
                R,
              ),
            ),
          ),
        );
      });
      var V = _;
      const J = (0, r.forwardRef)((e, t) => {
        const o = (0, r.useRef)(null),
          n = r.useContext(i.D);
        return (
          (0, r.useImperativeHandle)(t, () => ({
            menu: o.current,
            focus: (e) => {
              var t;
              null === (t = o.current) || void 0 === t || t.focus(e);
            },
          })),
          r.createElement(V, Object.assign({ ref: o }, e, n))
        );
      });
      (J.Item = $), (J.SubMenu = h), (J.Divider = d), (J.ItemGroup = n.BW);
      var K = J;
    },
  },
]);
//# sourceMappingURL=8508.43b85d62.async.js.map
