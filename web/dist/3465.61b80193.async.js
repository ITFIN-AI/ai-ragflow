/*! For license information please see 3465.61b80193.async.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [3465],
  {
    99611: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = t(87462),
        i = t(62435),
        a = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z',
                },
              },
            ],
          },
          name: 'eye',
          theme: 'outlined',
        },
        o = t(84089),
        l = function (e, n) {
          return i.createElement(o.Z, (0, r.Z)({}, e, { ref: n, icon: a }));
        };
      var c = i.forwardRef(l);
    },
    24969: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = t(87462),
        i = t(62435),
        a = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z',
                },
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z',
                },
              },
            ],
          },
          name: 'plus',
          theme: 'outlined',
        },
        o = t(84089),
        l = function (e, n) {
          return i.createElement(o.Z, (0, r.Z)({}, e, { ref: n, icon: a }));
        };
      var c = i.forwardRef(l);
    },
    15746: function (e, n, t) {
      'use strict';
      var r = t(21584);
      n.Z = r.Z;
    },
    79531: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return z;
        },
      });
      var r = t(62435),
        i = t(93967),
        a = t.n(i),
        o = t(53124),
        l = t(65223),
        c = t(47673);
      var s = (e) => {
          const { getPrefixCls: n, direction: t } = (0, r.useContext)(o.E_),
            { prefixCls: i, className: s } = e,
            u = n('input-group', i),
            d = n('input'),
            [f, p] = (0, c.ZP)(d),
            h = a()(
              u,
              {
                [`${u}-lg`]: 'large' === e.size,
                [`${u}-sm`]: 'small' === e.size,
                [`${u}-compact`]: e.compact,
                [`${u}-rtl`]: 'rtl' === t,
              },
              p,
              s,
            ),
            m = (0, r.useContext)(l.aM),
            g = (0, r.useMemo)(
              () =>
                Object.assign(Object.assign({}, m), { isFormItemInput: !1 }),
              [m],
            );
          return f(
            r.createElement(
              'span',
              {
                className: h,
                style: e.style,
                onMouseEnter: e.onMouseEnter,
                onMouseLeave: e.onMouseLeave,
                onFocus: e.onFocus,
                onBlur: e.onBlur,
              },
              r.createElement(l.aM.Provider, { value: g }, e.children),
            ),
          );
        },
        u = t(82586),
        d = t(87462),
        f = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z',
                },
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z',
                },
              },
            ],
          },
          name: 'eye-invisible',
          theme: 'outlined',
        },
        p = t(84089),
        h = function (e, n) {
          return r.createElement(p.Z, (0, d.Z)({}, e, { ref: n, icon: f }));
        };
      var m = r.forwardRef(h),
        g = t(99611),
        v = t(98423),
        b = t(42550),
        y = t(72922),
        x = function (e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              n.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (t[r[i]] = e[r[i]]);
          }
          return t;
        };
      const k = (e) =>
          e ? r.createElement(g.Z, null) : r.createElement(m, null),
        C = { click: 'onClick', hover: 'onMouseOver' };
      var $ = r.forwardRef((e, n) => {
          const { visibilityToggle: t = !0 } = e,
            i = 'object' == typeof t && void 0 !== t.visible,
            [l, c] = (0, r.useState)(() => !!i && t.visible),
            s = (0, r.useRef)(null);
          r.useEffect(() => {
            i && c(t.visible);
          }, [i, t]);
          const d = (0, y.Z)(s),
            f = () => {
              const { disabled: n } = e;
              n ||
                (l && d(),
                c((e) => {
                  var n;
                  const r = !e;
                  return (
                    'object' == typeof t &&
                      (null === (n = t.onVisibleChange) ||
                        void 0 === n ||
                        n.call(t, r)),
                    r
                  );
                }));
            },
            { className: p, prefixCls: h, inputPrefixCls: m, size: g } = e,
            $ = x(e, ['className', 'prefixCls', 'inputPrefixCls', 'size']),
            { getPrefixCls: w } = r.useContext(o.E_),
            S = w('input', m),
            E = w('input-password', h),
            I =
              t &&
              ((n) => {
                const { action: t = 'click', iconRender: i = k } = e,
                  a = C[t] || '',
                  o = i(l),
                  c = {
                    [a]: f,
                    className: `${n}-icon`,
                    key: 'passwordIcon',
                    onMouseDown: (e) => {
                      e.preventDefault();
                    },
                    onMouseUp: (e) => {
                      e.preventDefault();
                    },
                  };
                return r.cloneElement(
                  r.isValidElement(o) ? o : r.createElement('span', null, o),
                  c,
                );
              })(E),
            O = a()(E, p, { [`${E}-${g}`]: !!g }),
            j = Object.assign(
              Object.assign(
                {},
                (0, v.Z)($, ['suffix', 'iconRender', 'visibilityToggle']),
              ),
              {
                type: l ? 'text' : 'password',
                className: O,
                prefixCls: S,
                suffix: I,
              },
            );
          return (
            g && (j.size = g),
            r.createElement(u.Z, Object.assign({ ref: (0, b.sQ)(n, s) }, j))
          );
        }),
        w = t(68795),
        S = t(96159),
        E = t(15867),
        I = t(98675),
        O = t(4173),
        j = function (e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              n.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (t[r[i]] = e[r[i]]);
          }
          return t;
        };
      var M = r.forwardRef((e, n) => {
          const {
              prefixCls: t,
              inputPrefixCls: i,
              className: l,
              size: c,
              suffix: s,
              enterButton: d = !1,
              addonAfter: f,
              loading: p,
              disabled: h,
              onSearch: m,
              onChange: g,
              onCompositionStart: v,
              onCompositionEnd: y,
            } = e,
            x = j(e, [
              'prefixCls',
              'inputPrefixCls',
              'className',
              'size',
              'suffix',
              'enterButton',
              'addonAfter',
              'loading',
              'disabled',
              'onSearch',
              'onChange',
              'onCompositionStart',
              'onCompositionEnd',
            ]),
            { getPrefixCls: k, direction: C } = r.useContext(o.E_),
            $ = r.useRef(!1),
            M = k('input-search', t),
            N = k('input', i),
            { compactSize: D } = (0, O.ri)(M, C),
            z = (0, I.Z)((e) => {
              var n;
              return null !== (n = null != c ? c : D) && void 0 !== n ? n : e;
            }),
            Z = r.useRef(null),
            P = (e) => {
              var n;
              document.activeElement ===
                (null === (n = Z.current) || void 0 === n ? void 0 : n.input) &&
                e.preventDefault();
            },
            R = (e) => {
              var n, t;
              m &&
                m(
                  null ===
                    (t =
                      null === (n = Z.current) || void 0 === n
                        ? void 0
                        : n.input) || void 0 === t
                    ? void 0
                    : t.value,
                  e,
                  { source: 'input' },
                );
            },
            A = 'boolean' == typeof d ? r.createElement(w.Z, null) : null,
            _ = `${M}-button`;
          let q;
          const T = d || {},
            L = T.type && !0 === T.type.__ANT_BUTTON;
          (q =
            L || 'button' === T.type
              ? (0, S.Tm)(
                  T,
                  Object.assign(
                    {
                      onMouseDown: P,
                      onClick: (e) => {
                        var n, t;
                        null ===
                          (t =
                            null === (n = null == T ? void 0 : T.props) ||
                            void 0 === n
                              ? void 0
                              : n.onClick) ||
                          void 0 === t ||
                          t.call(n, e),
                          R(e);
                      },
                      key: 'enterButton',
                    },
                    L ? { className: _, size: z } : {},
                  ),
                )
              : r.createElement(
                  E.ZP,
                  {
                    className: _,
                    type: d ? 'primary' : void 0,
                    size: z,
                    disabled: h,
                    key: 'enterButton',
                    onMouseDown: P,
                    onClick: R,
                    loading: p,
                    icon: A,
                  },
                  d,
                )),
            f && (q = [q, (0, S.Tm)(f, { key: 'addonAfter' })]);
          const V = a()(
            M,
            {
              [`${M}-rtl`]: 'rtl' === C,
              [`${M}-${z}`]: !!z,
              [`${M}-with-button`]: !!d,
            },
            l,
          );
          return r.createElement(
            u.Z,
            Object.assign(
              {
                ref: (0, b.sQ)(Z, n),
                onPressEnter: (e) => {
                  $.current || p || R(e);
                },
              },
              x,
              {
                size: z,
                onCompositionStart: (e) => {
                  ($.current = !0), null == v || v(e);
                },
                onCompositionEnd: (e) => {
                  ($.current = !1), null == y || y(e);
                },
                prefixCls: N,
                addonAfter: q,
                suffix: s,
                onChange: (e) => {
                  e &&
                    e.target &&
                    'click' === e.type &&
                    m &&
                    m(e.target.value, e, { source: 'clear' }),
                    g && g(e);
                },
                className: V,
                disabled: h,
              },
            ),
          );
        }),
        N = t(22913);
      const D = u.Z;
      (D.Group = s), (D.Search = M), (D.TextArea = N.Z), (D.Password = $);
      var z = D;
    },
    71230: function (e, n, t) {
      'use strict';
      var r = t(92820);
      n.Z = r.Z;
    },
    42075: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return v;
        },
      });
      var r = t(62435),
        i = t(93967),
        a = t.n(i),
        o = t(50344),
        l = t(98065),
        c = t(53124),
        s = t(4173);
      const u = r.createContext({ latestIndex: 0 }),
        d = u.Provider;
      var f = (e) => {
          let { className: n, index: t, children: i, split: a, style: o } = e;
          const { latestIndex: l } = r.useContext(u);
          return null == i
            ? null
            : r.createElement(
                r.Fragment,
                null,
                r.createElement('div', { className: n, style: o }, i),
                t < l &&
                  a &&
                  r.createElement('span', { className: `${n}-split` }, a),
              );
        },
        p = t(51916),
        h = function (e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              n.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (t[r[i]] = e[r[i]]);
          }
          return t;
        };
      const m = r.forwardRef((e, n) => {
        var t, i;
        const { getPrefixCls: s, space: u, direction: m } = r.useContext(c.E_),
          {
            size: g = (null == u ? void 0 : u.size) || 'small',
            align: v,
            className: b,
            rootClassName: y,
            children: x,
            direction: k = 'horizontal',
            prefixCls: C,
            split: $,
            style: w,
            wrap: S = !1,
            classNames: E,
            styles: I,
          } = e,
          O = h(e, [
            'size',
            'align',
            'className',
            'rootClassName',
            'children',
            'direction',
            'prefixCls',
            'split',
            'style',
            'wrap',
            'classNames',
            'styles',
          ]),
          [j, M] = Array.isArray(g) ? g : [g, g],
          N = (0, l.n)(M),
          D = (0, l.n)(j),
          z = (0, l.T)(M),
          Z = (0, l.T)(j),
          P = (0, o.Z)(x, { keepEmpty: !0 }),
          R = void 0 === v && 'horizontal' === k ? 'center' : v,
          A = s('space', C),
          [_, q, T] = (0, p.Z)(A),
          L = a()(
            A,
            null == u ? void 0 : u.className,
            q,
            `${A}-${k}`,
            {
              [`${A}-rtl`]: 'rtl' === m,
              [`${A}-align-${R}`]: R,
              [`${A}-gap-row-${M}`]: N,
              [`${A}-gap-col-${j}`]: D,
            },
            b,
            y,
            T,
          ),
          V = a()(
            `${A}-item`,
            null !== (t = null == E ? void 0 : E.item) && void 0 !== t
              ? t
              : null === (i = null == u ? void 0 : u.classNames) || void 0 === i
                ? void 0
                : i.item,
          );
        let H = 0;
        const W = P.map((e, n) => {
            var t, i;
            null != e && (H = n);
            const a = (e && e.key) || `${V}-${n}`;
            return r.createElement(
              f,
              {
                className: V,
                key: a,
                index: n,
                split: $,
                style:
                  null !== (t = null == I ? void 0 : I.item) && void 0 !== t
                    ? t
                    : null === (i = null == u ? void 0 : u.styles) ||
                        void 0 === i
                      ? void 0
                      : i.item,
              },
              e,
            );
          }),
          B = r.useMemo(() => ({ latestIndex: H }), [H]);
        if (0 === P.length) return null;
        const F = {};
        return (
          S && (F.flexWrap = 'wrap'),
          !D && Z && (F.columnGap = j),
          !N && z && (F.rowGap = M),
          _(
            r.createElement(
              'div',
              Object.assign(
                {
                  ref: n,
                  className: L,
                  style: Object.assign(
                    Object.assign(
                      Object.assign({}, F),
                      null == u ? void 0 : u.style,
                    ),
                    w,
                  ),
                },
                O,
              ),
              r.createElement(d, { value: B }, W),
            ),
          )
        );
      });
      const g = m;
      g.Compact = s.ZP;
      var v = g;
    },
    72269: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return z;
        },
      });
      var r = t(62435),
        i = t(50888),
        a = t(93967),
        o = t.n(a),
        l = t(87462),
        c = t(4942),
        s = t(97685),
        u = t(45987),
        d = t(21770),
        f = t(15105),
        p = [
          'prefixCls',
          'className',
          'checked',
          'defaultChecked',
          'disabled',
          'loadingIcon',
          'checkedChildren',
          'unCheckedChildren',
          'onClick',
          'onChange',
          'onKeyDown',
        ],
        h = r.forwardRef(function (e, n) {
          var t,
            i = e.prefixCls,
            a = void 0 === i ? 'rc-switch' : i,
            h = e.className,
            m = e.checked,
            g = e.defaultChecked,
            v = e.disabled,
            b = e.loadingIcon,
            y = e.checkedChildren,
            x = e.unCheckedChildren,
            k = e.onClick,
            C = e.onChange,
            $ = e.onKeyDown,
            w = (0, u.Z)(e, p),
            S = (0, d.Z)(!1, { value: m, defaultValue: g }),
            E = (0, s.Z)(S, 2),
            I = E[0],
            O = E[1];
          function j(e, n) {
            var t = I;
            return v || (O((t = e)), null == C || C(t, n)), t;
          }
          var M = o()(
            a,
            h,
            ((t = {}),
            (0, c.Z)(t, ''.concat(a, '-checked'), I),
            (0, c.Z)(t, ''.concat(a, '-disabled'), v),
            t),
          );
          return r.createElement(
            'button',
            (0, l.Z)({}, w, {
              type: 'button',
              role: 'switch',
              'aria-checked': I,
              disabled: v,
              className: M,
              ref: n,
              onKeyDown: function (e) {
                e.which === f.Z.LEFT
                  ? j(!1, e)
                  : e.which === f.Z.RIGHT && j(!0, e),
                  null == $ || $(e);
              },
              onClick: function (e) {
                var n = j(!I, e);
                null == k || k(n, e);
              },
            }),
            b,
            r.createElement(
              'span',
              { className: ''.concat(a, '-inner') },
              r.createElement(
                'span',
                { className: ''.concat(a, '-inner-checked') },
                y,
              ),
              r.createElement(
                'span',
                { className: ''.concat(a, '-inner-unchecked') },
                x,
              ),
            ),
          );
        });
      h.displayName = 'Switch';
      var m = h,
        g = t(45353),
        v = t(53124),
        b = t(98866),
        y = t(98675),
        x = t(54548),
        k = t(10274),
        C = t(14747),
        $ = t(91945),
        w = t(45503);
      const S = (e) => {
          const {
              componentCls: n,
              trackHeightSM: t,
              trackPadding: r,
              trackMinWidthSM: i,
              innerMinMarginSM: a,
              innerMaxMarginSM: o,
              handleSizeSM: l,
              calc: c,
            } = e,
            s = `${n}-inner`,
            u = (0, x.bf)(c(l).add(c(r).mul(2)).equal()),
            d = (0, x.bf)(c(o).mul(2).equal());
          return {
            [n]: {
              [`&${n}-small`]: {
                minWidth: i,
                height: t,
                lineHeight: (0, x.bf)(t),
                [`${n}-inner`]: {
                  paddingInlineStart: o,
                  paddingInlineEnd: a,
                  [`${s}-checked`]: {
                    marginInlineStart: `calc(-100% + ${u} - ${d})`,
                    marginInlineEnd: `calc(100% - ${u} + ${d})`,
                  },
                  [`${s}-unchecked`]: {
                    marginTop: c(t).mul(-1).equal(),
                    marginInlineStart: 0,
                    marginInlineEnd: 0,
                  },
                },
                [`${n}-handle`]: { width: l, height: l },
                [`${n}-loading-icon`]: {
                  top: c(c(l).sub(e.switchLoadingIconSize)).div(2).equal(),
                  fontSize: e.switchLoadingIconSize,
                },
                [`&${n}-checked`]: {
                  [`${n}-inner`]: {
                    paddingInlineStart: a,
                    paddingInlineEnd: o,
                    [`${s}-checked`]: {
                      marginInlineStart: 0,
                      marginInlineEnd: 0,
                    },
                    [`${s}-unchecked`]: {
                      marginInlineStart: `calc(100% - ${u} + ${d})`,
                      marginInlineEnd: `calc(-100% + ${u} - ${d})`,
                    },
                  },
                  [`${n}-handle`]: {
                    insetInlineStart: `calc(100% - ${(0, x.bf)(c(l).add(r).equal())})`,
                  },
                },
                [`&:not(${n}-disabled):active`]: {
                  [`&:not(${n}-checked) ${s}`]: {
                    [`${s}-unchecked`]: {
                      marginInlineStart: c(e.marginXXS).div(2).equal(),
                      marginInlineEnd: c(e.marginXXS).mul(-1).div(2).equal(),
                    },
                  },
                  [`&${n}-checked ${s}`]: {
                    [`${s}-checked`]: {
                      marginInlineStart: c(e.marginXXS).mul(-1).div(2).equal(),
                      marginInlineEnd: c(e.marginXXS).div(2).equal(),
                    },
                  },
                },
              },
            },
          };
        },
        E = (e) => {
          const { componentCls: n, handleSize: t, calc: r } = e;
          return {
            [n]: {
              [`${n}-loading-icon${e.iconCls}`]: {
                position: 'relative',
                top: r(r(t).sub(e.fontSize)).div(2).equal(),
                color: e.switchLoadingIconColor,
                verticalAlign: 'top',
              },
              [`&${n}-checked ${n}-loading-icon`]: { color: e.switchColor },
            },
          };
        },
        I = (e) => {
          const {
              componentCls: n,
              trackPadding: t,
              handleBg: r,
              handleShadow: i,
              handleSize: a,
              calc: o,
            } = e,
            l = `${n}-handle`;
          return {
            [n]: {
              [l]: {
                position: 'absolute',
                top: t,
                insetInlineStart: t,
                width: a,
                height: a,
                transition: `all ${e.switchDuration} ease-in-out`,
                '&::before': {
                  position: 'absolute',
                  top: 0,
                  insetInlineEnd: 0,
                  bottom: 0,
                  insetInlineStart: 0,
                  backgroundColor: r,
                  borderRadius: o(a).div(2).equal(),
                  boxShadow: i,
                  transition: `all ${e.switchDuration} ease-in-out`,
                  content: '""',
                },
              },
              [`&${n}-checked ${l}`]: {
                insetInlineStart: `calc(100% - ${(0, x.bf)(o(a).add(t).equal())})`,
              },
              [`&:not(${n}-disabled):active`]: {
                [`${l}::before`]: {
                  insetInlineEnd: e.switchHandleActiveInset,
                  insetInlineStart: 0,
                },
                [`&${n}-checked ${l}::before`]: {
                  insetInlineEnd: 0,
                  insetInlineStart: e.switchHandleActiveInset,
                },
              },
            },
          };
        },
        O = (e) => {
          const {
              componentCls: n,
              trackHeight: t,
              trackPadding: r,
              innerMinMargin: i,
              innerMaxMargin: a,
              handleSize: o,
              calc: l,
            } = e,
            c = `${n}-inner`,
            s = (0, x.bf)(l(o).add(l(r).mul(2)).equal()),
            u = (0, x.bf)(l(a).mul(2).equal());
          return {
            [n]: {
              [c]: {
                display: 'block',
                overflow: 'hidden',
                borderRadius: 100,
                height: '100%',
                paddingInlineStart: a,
                paddingInlineEnd: i,
                transition: `padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,
                [`${c}-checked, ${c}-unchecked`]: {
                  display: 'block',
                  color: e.colorTextLightSolid,
                  fontSize: e.fontSizeSM,
                  transition: `margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,
                  pointerEvents: 'none',
                },
                [`${c}-checked`]: {
                  marginInlineStart: `calc(-100% + ${s} - ${u})`,
                  marginInlineEnd: `calc(100% - ${s} + ${u})`,
                },
                [`${c}-unchecked`]: {
                  marginTop: l(t).mul(-1).equal(),
                  marginInlineStart: 0,
                  marginInlineEnd: 0,
                },
              },
              [`&${n}-checked ${c}`]: {
                paddingInlineStart: i,
                paddingInlineEnd: a,
                [`${c}-checked`]: { marginInlineStart: 0, marginInlineEnd: 0 },
                [`${c}-unchecked`]: {
                  marginInlineStart: `calc(100% - ${s} + ${u})`,
                  marginInlineEnd: `calc(-100% + ${s} - ${u})`,
                },
              },
              [`&:not(${n}-disabled):active`]: {
                [`&:not(${n}-checked) ${c}`]: {
                  [`${c}-unchecked`]: {
                    marginInlineStart: l(r).mul(2).equal(),
                    marginInlineEnd: l(r).mul(-1).mul(2).equal(),
                  },
                },
                [`&${n}-checked ${c}`]: {
                  [`${c}-checked`]: {
                    marginInlineStart: l(r).mul(-1).mul(2).equal(),
                    marginInlineEnd: l(r).mul(2).equal(),
                  },
                },
              },
            },
          };
        },
        j = (e) => {
          const { componentCls: n, trackHeight: t, trackMinWidth: r } = e;
          return {
            [n]: Object.assign(
              Object.assign(
                Object.assign(Object.assign({}, (0, C.Wf)(e)), {
                  position: 'relative',
                  display: 'inline-block',
                  boxSizing: 'border-box',
                  minWidth: r,
                  height: t,
                  lineHeight: `${(0, x.bf)(t)}`,
                  verticalAlign: 'middle',
                  background: e.colorTextQuaternary,
                  border: '0',
                  borderRadius: 100,
                  cursor: 'pointer',
                  transition: `all ${e.motionDurationMid}`,
                  userSelect: 'none',
                  [`&:hover:not(${n}-disabled)`]: {
                    background: e.colorTextTertiary,
                  },
                }),
                (0, C.Qy)(e),
              ),
              {
                [`&${n}-checked`]: {
                  background: e.switchColor,
                  [`&:hover:not(${n}-disabled)`]: {
                    background: e.colorPrimaryHover,
                  },
                },
                [`&${n}-loading, &${n}-disabled`]: {
                  cursor: 'not-allowed',
                  opacity: e.switchDisabledOpacity,
                  '*': { boxShadow: 'none', cursor: 'not-allowed' },
                },
                [`&${n}-rtl`]: { direction: 'rtl' },
              },
            ),
          };
        };
      var M = (0, $.I$)(
          'Switch',
          (e) => {
            const n = (0, w.TS)(e, {
              switchDuration: e.motionDurationMid,
              switchColor: e.colorPrimary,
              switchDisabledOpacity: e.opacityLoading,
              switchLoadingIconSize: e.calc(e.fontSizeIcon).mul(0.75).equal(),
              switchLoadingIconColor: `rgba(0, 0, 0, ${e.opacityLoading})`,
              switchHandleActiveInset: '-30%',
            });
            return [j(n), O(n), I(n), E(n), S(n)];
          },
          (e) => {
            const {
                fontSize: n,
                lineHeight: t,
                controlHeight: r,
                colorWhite: i,
              } = e,
              a = n * t,
              o = r / 2,
              l = a - 4,
              c = o - 4;
            return {
              trackHeight: a,
              trackHeightSM: o,
              trackMinWidth: 2 * l + 8,
              trackMinWidthSM: 2 * c + 4,
              trackPadding: 2,
              handleBg: i,
              handleSize: l,
              handleSizeSM: c,
              handleShadow: `0 2px 4px 0 ${new k.C('#00230b').setAlpha(0.2).toRgbString()}`,
              innerMinMargin: l / 2,
              innerMaxMargin: l + 2 + 4,
              innerMinMarginSM: c / 2,
              innerMaxMarginSM: c + 2 + 4,
            };
          },
        ),
        N = function (e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              n.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (t[r[i]] = e[r[i]]);
          }
          return t;
        };
      const D = r.forwardRef((e, n) => {
        const {
            prefixCls: t,
            size: a,
            disabled: l,
            loading: c,
            className: s,
            rootClassName: u,
            style: f,
            checked: p,
            value: h,
            defaultChecked: x,
            defaultValue: k,
            onChange: C,
          } = e,
          $ = N(e, [
            'prefixCls',
            'size',
            'disabled',
            'loading',
            'className',
            'rootClassName',
            'style',
            'checked',
            'value',
            'defaultChecked',
            'defaultValue',
            'onChange',
          ]),
          [w, S] = (0, d.Z)(!1, {
            value: null != p ? p : h,
            defaultValue: null != x ? x : k,
          }),
          { getPrefixCls: E, direction: I, switch: O } = r.useContext(v.E_),
          j = r.useContext(b.Z),
          D = (null != l ? l : j) || c,
          z = E('switch', t),
          Z = r.createElement(
            'div',
            { className: `${z}-handle` },
            c && r.createElement(i.Z, { className: `${z}-loading-icon` }),
          ),
          [P, R, A] = M(z),
          _ = (0, y.Z)(a),
          q = o()(
            null == O ? void 0 : O.className,
            {
              [`${z}-small`]: 'small' === _,
              [`${z}-loading`]: c,
              [`${z}-rtl`]: 'rtl' === I,
            },
            s,
            u,
            R,
            A,
          ),
          T = Object.assign(Object.assign({}, null == O ? void 0 : O.style), f);
        return P(
          r.createElement(
            g.Z,
            { component: 'Switch' },
            r.createElement(
              m,
              Object.assign({}, $, {
                checked: w,
                onChange: function () {
                  S(arguments.length <= 0 ? void 0 : arguments[0]),
                    null == C || C.apply(void 0, arguments);
                },
                prefixCls: z,
                className: q,
                style: T,
                disabled: D,
                ref: n,
                loadingIcon: Z,
              }),
            ),
          ),
        );
      });
      D.__ANT_SWITCH = !0;
      var z = D;
    },
    13: function (e) {
      e.exports = function (e, n) {
        return null != e && n in Object(e);
      };
    },
    25970: function (e, n, t) {
      var r = t(63012),
        i = t(79095);
      e.exports = function (e, n) {
        return r(e, n, function (n, t) {
          return i(e, t);
        });
      };
    },
    63012: function (e, n, t) {
      var r = t(97786),
        i = t(10611),
        a = t(71811);
      e.exports = function (e, n, t) {
        for (var o = -1, l = n.length, c = {}; ++o < l; ) {
          var s = n[o],
            u = r(e, s);
          t(u, s) && i(c, a(s, e), u);
        }
        return c;
      };
    },
    69877: function (e) {
      var n = Math.floor,
        t = Math.random;
      e.exports = function (e, r) {
        return e + n(t() * (r - e + 1));
      };
    },
    10611: function (e, n, t) {
      var r = t(34865),
        i = t(71811),
        a = t(65776),
        o = t(13218),
        l = t(40327);
      e.exports = function (e, n, t, c) {
        if (!o(e)) return e;
        for (
          var s = -1, u = (n = i(n, e)).length, d = u - 1, f = e;
          null != f && ++s < u;

        ) {
          var p = l(n[s]),
            h = t;
          if ('__proto__' === p || 'constructor' === p || 'prototype' === p)
            return e;
          if (s != d) {
            var m = f[p];
            void 0 === (h = c ? c(m, p, f) : void 0) &&
              (h = o(m) ? m : a(n[s + 1]) ? [] : {});
          }
          r(f, p, h), (f = f[p]);
        }
        return e;
      };
    },
    222: function (e, n, t) {
      var r = t(71811),
        i = t(35694),
        a = t(1469),
        o = t(65776),
        l = t(41780),
        c = t(40327);
      e.exports = function (e, n, t) {
        for (var s = -1, u = (n = r(n, e)).length, d = !1; ++s < u; ) {
          var f = c(n[s]);
          if (!(d = null != e && t(e, f))) break;
          e = e[f];
        }
        return d || ++s != u
          ? d
          : !!(u = null == e ? 0 : e.length) &&
              l(u) &&
              o(f, u) &&
              (a(e) || i(e));
      };
    },
    16612: function (e, n, t) {
      var r = t(77813),
        i = t(98612),
        a = t(65776),
        o = t(13218);
      e.exports = function (e, n, t) {
        if (!o(t)) return !1;
        var l = typeof n;
        return (
          !!('number' == l
            ? i(t) && a(n, t.length)
            : 'string' == l && n in t) && r(t[n], e)
        );
      };
    },
    79095: function (e, n, t) {
      var r = t(13),
        i = t(222);
      e.exports = function (e, n) {
        return null != e && i(e, n, r);
      };
    },
    78718: function (e, n, t) {
      var r = t(25970),
        i = t(92129)(function (e, n) {
          return null == e ? {} : r(e, n);
        });
      e.exports = i;
    },
    83608: function (e, n, t) {
      var r = t(69877),
        i = t(16612),
        a = t(18601),
        o = parseFloat,
        l = Math.min,
        c = Math.random;
      e.exports = function (e, n, t) {
        if (
          (t && 'boolean' != typeof t && i(e, n, t) && (n = t = void 0),
          void 0 === t &&
            ('boolean' == typeof n
              ? ((t = n), (n = void 0))
              : 'boolean' == typeof e && ((t = e), (e = void 0))),
          void 0 === e && void 0 === n
            ? ((e = 0), (n = 1))
            : ((e = a(e)), void 0 === n ? ((n = e), (e = 0)) : (n = a(n))),
          e > n)
        ) {
          var s = e;
          (e = n), (n = s);
        }
        if (t || e % 1 || n % 1) {
          var u = c();
          return l(e + u * (n - e + o('1e-' + ((u + '').length - 1))), n);
        }
        return r(e, n);
      };
    },
    18601: function (e, n, t) {
      var r = t(14841),
        i = 1 / 0;
      e.exports = function (e) {
        return e
          ? (e = r(e)) === i || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
    },
    61932: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      const r = (0, t(91373).Z)('arrow-up-down', [
        ['path', { d: 'm21 16-4 4-4-4', key: 'f6ql7i' }],
        ['path', { d: 'M17 20V4', key: '1ejh1v' }],
        ['path', { d: 'm3 8 4-4 4 4', key: '11wl7u' }],
        ['path', { d: 'M7 4v16', key: '1glfcx' }],
      ]);
    },
    13742: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      const r = (0, t(91373).Z)('check', [
        ['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }],
      ]);
    },
    90470: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      const r = (0, t(91373).Z)('pencil', [
        [
          'path',
          {
            d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z',
            key: '1a8usu',
          },
        ],
        ['path', { d: 'm15 5 4 4', key: '1mk7zo' }],
      ]);
    },
    67007: function (e, n, t) {
      'use strict';
      t.d(n, {
        aU: function () {
          return L;
        },
        $j: function () {
          return V;
        },
        VY: function () {
          return T;
        },
        dk: function () {
          return W;
        },
        aV: function () {
          return q;
        },
        h_: function () {
          return _;
        },
        fC: function () {
          return R;
        },
        Dx: function () {
          return H;
        },
        xz: function () {
          return A;
        },
      });
      var r = t(62435),
        i = t(25360);
      function a(e, n) {
        if ('function' == typeof e) return e(n);
        null != e && (e.current = n);
      }
      function o(...e) {
        return (n) => {
          let t = !1;
          const r = e.map((e) => {
            const r = a(e, n);
            return t || 'function' != typeof r || (t = !0), r;
          });
          if (t)
            return () => {
              for (let n = 0; n < r.length; n++) {
                const t = r[n];
                'function' == typeof t ? t() : a(e[n], null);
              }
            };
        };
      }
      function l(...e) {
        return r.useCallback(o(...e), e);
      }
      var c = t(28828);
      function s(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === t || !r.defaultPrevented)) return n?.(r);
        };
      }
      var u = t(86074),
        d = r.forwardRef((e, n) => {
          const { children: t, ...i } = e,
            a = r.Children.toArray(t),
            o = a.find(h);
          if (o) {
            const e = o.props.children,
              t = a.map((n) =>
                n === o
                  ? r.Children.count(e) > 1
                    ? r.Children.only(null)
                    : r.isValidElement(e)
                      ? e.props.children
                      : null
                  : n,
              );
            return (0, u.jsx)(f, {
              ...i,
              ref: n,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, t)
                : null,
            });
          }
          return (0, u.jsx)(f, { ...i, ref: n, children: t });
        });
      d.displayName = 'Slot';
      var f = r.forwardRef((e, n) => {
        const { children: t, ...i } = e;
        if (r.isValidElement(t)) {
          const e = (function (e) {
            let n = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
              t = n && 'isReactWarning' in n && n.isReactWarning;
            if (t) return e.ref;
            if (
              ((n = Object.getOwnPropertyDescriptor(e, 'ref')?.get),
              (t = n && 'isReactWarning' in n && n.isReactWarning),
              t)
            )
              return e.props.ref;
            return e.props.ref || e.ref;
          })(t);
          return r.cloneElement(t, { ...m(i, t.props), ref: n ? o(n, e) : e });
        }
        return r.Children.count(t) > 1 ? r.Children.only(null) : null;
      });
      f.displayName = 'SlotClone';
      var p = ({ children: e }) => (0, u.jsx)(u.Fragment, { children: e });
      function h(e) {
        return r.isValidElement(e) && e.type === p;
      }
      function m(e, n) {
        const t = { ...n };
        for (const r in n) {
          const i = e[r],
            a = n[r];
          /^on[A-Z]/.test(r)
            ? i && a
              ? (t[r] = (...e) => {
                  a(...e), i(...e);
                })
              : i && (t[r] = i)
            : 'style' === r
              ? (t[r] = { ...i, ...a })
              : 'className' === r && (t[r] = [i, a].filter(Boolean).join(' '));
        }
        return { ...e, ...t };
      }
      var g = 'AlertDialog',
        [v, b] = (0, i.b)(g, [c.p8]),
        y = (0, c.p8)(),
        x = (e) => {
          const { __scopeAlertDialog: n, ...t } = e,
            r = y(n);
          return (0, u.jsx)(c.fC, { ...r, ...t, modal: !0 });
        };
      x.displayName = g;
      var k = r.forwardRef((e, n) => {
        const { __scopeAlertDialog: t, ...r } = e,
          i = y(t);
        return (0, u.jsx)(c.xz, { ...i, ...r, ref: n });
      });
      k.displayName = 'AlertDialogTrigger';
      var C = (e) => {
        const { __scopeAlertDialog: n, ...t } = e,
          r = y(n);
        return (0, u.jsx)(c.h_, { ...r, ...t });
      };
      C.displayName = 'AlertDialogPortal';
      var $ = r.forwardRef((e, n) => {
        const { __scopeAlertDialog: t, ...r } = e,
          i = y(t);
        return (0, u.jsx)(c.aV, { ...i, ...r, ref: n });
      });
      $.displayName = 'AlertDialogOverlay';
      var w = 'AlertDialogContent',
        [S, E] = v(w),
        I = r.forwardRef((e, n) => {
          const { __scopeAlertDialog: t, children: i, ...a } = e,
            o = y(t),
            d = r.useRef(null),
            f = l(n, d),
            h = r.useRef(null);
          return (0, u.jsx)(c.jm, {
            contentName: w,
            titleName: O,
            docsSlug: 'alert-dialog',
            children: (0, u.jsx)(S, {
              scope: t,
              cancelRef: h,
              children: (0, u.jsxs)(c.VY, {
                role: 'alertdialog',
                ...o,
                ...a,
                ref: f,
                onOpenAutoFocus: s(a.onOpenAutoFocus, (e) => {
                  e.preventDefault(), h.current?.focus({ preventScroll: !0 });
                }),
                onPointerDownOutside: (e) => e.preventDefault(),
                onInteractOutside: (e) => e.preventDefault(),
                children: [
                  (0, u.jsx)(p, { children: i }),
                  (0, u.jsx)(P, { contentRef: d }),
                ],
              }),
            }),
          });
        });
      I.displayName = w;
      var O = 'AlertDialogTitle',
        j = r.forwardRef((e, n) => {
          const { __scopeAlertDialog: t, ...r } = e,
            i = y(t);
          return (0, u.jsx)(c.Dx, { ...i, ...r, ref: n });
        });
      j.displayName = O;
      var M = 'AlertDialogDescription',
        N = r.forwardRef((e, n) => {
          const { __scopeAlertDialog: t, ...r } = e,
            i = y(t);
          return (0, u.jsx)(c.dk, { ...i, ...r, ref: n });
        });
      N.displayName = M;
      var D = r.forwardRef((e, n) => {
        const { __scopeAlertDialog: t, ...r } = e,
          i = y(t);
        return (0, u.jsx)(c.x8, { ...i, ...r, ref: n });
      });
      D.displayName = 'AlertDialogAction';
      var z = 'AlertDialogCancel',
        Z = r.forwardRef((e, n) => {
          const { __scopeAlertDialog: t, ...r } = e,
            { cancelRef: i } = E(z, t),
            a = y(t),
            o = l(n, i);
          return (0, u.jsx)(c.x8, { ...a, ...r, ref: o });
        });
      Z.displayName = z;
      var P = ({ contentRef: e }) => {
          const n = `\`${w}\` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the \`${w}\` by passing a \`${M}\` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${w}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
          return (
            r.useEffect(() => {
              document.getElementById(
                e.current?.getAttribute('aria-describedby'),
              ) || console.warn(n);
            }, [n, e]),
            null
          );
        },
        R = x,
        A = k,
        _ = C,
        q = $,
        T = I,
        L = D,
        V = Z,
        H = j,
        W = N;
    },
    46069: function (e, n, t) {
      'use strict';
      t.d(n, {
        fC: function () {
          return w;
        },
        z$: function () {
          return S;
        },
      });
      var r = t(62435),
        i = t(28771),
        a = t(25360),
        o = t(36206),
        l = t(77342),
        c = t(57898),
        s = t(7546),
        u = t(29115),
        d = t(75320),
        f = t(86074),
        p = 'Checkbox',
        [h, m] = (0, a.b)(p),
        [g, v] = h(p),
        b = r.forwardRef((e, n) => {
          const {
              __scopeCheckbox: t,
              name: a,
              checked: c,
              defaultChecked: s,
              required: u,
              disabled: p,
              value: h = 'on',
              onCheckedChange: m,
              form: v,
              ...b
            } = e,
            [y, x] = r.useState(null),
            w = (0, i.e)(n, (e) => x(e)),
            S = r.useRef(!1),
            E = !y || v || !!y.closest('form'),
            [I = !1, O] = (0, l.T)({ prop: c, defaultProp: s, onChange: m }),
            j = r.useRef(I);
          return (
            r.useEffect(() => {
              const e = y?.form;
              if (e) {
                const n = () => O(j.current);
                return (
                  e.addEventListener('reset', n),
                  () => e.removeEventListener('reset', n)
                );
              }
            }, [y, O]),
            (0, f.jsxs)(g, {
              scope: t,
              state: I,
              disabled: p,
              children: [
                (0, f.jsx)(d.WV.button, {
                  type: 'button',
                  role: 'checkbox',
                  'aria-checked': C(I) ? 'mixed' : I,
                  'aria-required': u,
                  'data-state': $(I),
                  'data-disabled': p ? '' : void 0,
                  disabled: p,
                  value: h,
                  ...b,
                  ref: w,
                  onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                    'Enter' === e.key && e.preventDefault();
                  }),
                  onClick: (0, o.M)(e.onClick, (e) => {
                    O((e) => !!C(e) || !e),
                      E &&
                        ((S.current = e.isPropagationStopped()),
                        S.current || e.stopPropagation());
                  }),
                }),
                E &&
                  (0, f.jsx)(k, {
                    control: y,
                    bubbles: !S.current,
                    name: a,
                    value: h,
                    checked: I,
                    required: u,
                    disabled: p,
                    form: v,
                    style: { transform: 'translateX(-100%)' },
                    defaultChecked: !C(s) && s,
                  }),
              ],
            })
          );
        });
      b.displayName = p;
      var y = 'CheckboxIndicator',
        x = r.forwardRef((e, n) => {
          const { __scopeCheckbox: t, forceMount: r, ...i } = e,
            a = v(y, t);
          return (0, f.jsx)(u.z, {
            present: r || C(a.state) || !0 === a.state,
            children: (0, f.jsx)(d.WV.span, {
              'data-state': $(a.state),
              'data-disabled': a.disabled ? '' : void 0,
              ...i,
              ref: n,
              style: { pointerEvents: 'none', ...e.style },
            }),
          });
        });
      x.displayName = y;
      var k = (e) => {
        const {
            control: n,
            checked: t,
            bubbles: i = !0,
            defaultChecked: a,
            ...o
          } = e,
          l = r.useRef(null),
          u = (0, c.D)(t),
          d = (0, s.t)(n);
        r.useEffect(() => {
          const e = l.current,
            n = window.HTMLInputElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, 'checked').set;
          if (u !== t && r) {
            const n = new Event('click', { bubbles: i });
            (e.indeterminate = C(t)), r.call(e, !C(t) && t), e.dispatchEvent(n);
          }
        }, [u, t, i]);
        const p = r.useRef(!C(t) && t);
        return (0, f.jsx)('input', {
          type: 'checkbox',
          'aria-hidden': !0,
          defaultChecked: a ?? p.current,
          ...o,
          tabIndex: -1,
          ref: l,
          style: {
            ...e.style,
            ...d,
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0,
            margin: 0,
          },
        });
      };
      function C(e) {
        return 'indeterminate' === e;
      }
      function $(e) {
        return C(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
      }
      var w = b,
        S = x;
    },
    57898: function (e, n, t) {
      'use strict';
      t.d(n, {
        D: function () {
          return i;
        },
      });
      var r = t(62435);
      function i(e) {
        const n = r.useRef({ value: e, previous: e });
        return r.useMemo(
          () => (
            n.current.value !== e &&
              ((n.current.previous = n.current.value), (n.current.value = e)),
            n.current.previous
          ),
          [e],
        );
      }
    },
    72141: function (e, n, t) {
      'use strict';
      t.d(n, {
        y: function () {
          return o;
        },
      });
      var r = t(62435),
        i = t(67112),
        a = t(30202);
      function o(e, n) {
        const t = (0, a.NL)(n),
          o = t.getQueryCache();
        return r.useSyncExternalStore(
          r.useCallback((e) => o.subscribe(i.V.batchCalls(e)), [o]),
          () => t.isFetching(e),
          () => t.isFetching(e),
        );
      }
    },
  },
]);
//# sourceMappingURL=3465.61b80193.async.js.map
