(self.webpackChunk = self.webpackChunk || []).push([
  [6231],
  {
    57132: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(87462),
        o = n(62435),
        l = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z',
                },
              },
            ],
          },
          name: 'copy',
          theme: 'outlined',
        },
        i = n(84089),
        a = function (e, t) {
          return o.createElement(i.Z, (0, r.Z)({}, e, { ref: t, icon: l }));
        };
      var c = o.forwardRef(a);
    },
    86548: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(87462),
        o = n(62435),
        l = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z',
                },
              },
            ],
          },
          name: 'edit',
          theme: 'outlined',
        },
        i = n(84089),
        a = function (e, t) {
          return o.createElement(i.Z, (0, r.Z)({}, e, { ref: t, icon: l }));
        };
      var c = o.forwardRef(a);
    },
    86250: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var r = n(62435),
        o = n(93967),
        l = n.n(o),
        i = n(98423),
        a = n(98065),
        c = n(53124),
        s = n(91945),
        u = n(45503);
      const d = ['wrap', 'nowrap', 'wrap-reverse'],
        p = [
          'flex-start',
          'flex-end',
          'start',
          'end',
          'center',
          'space-between',
          'space-around',
          'space-evenly',
          'stretch',
          'normal',
          'left',
          'right',
        ],
        f = [
          'center',
          'start',
          'end',
          'flex-start',
          'flex-end',
          'self-start',
          'self-end',
          'baseline',
          'normal',
          'stretch',
        ];
      var m = function (e, t) {
        return l()(
          Object.assign(
            Object.assign(
              Object.assign(
                {},
                ((e, t) => {
                  const n = {};
                  return (
                    d.forEach((r) => {
                      n[`${e}-wrap-${r}`] = t.wrap === r;
                    }),
                    n
                  );
                })(e, t),
              ),
              ((e, t) => {
                const n = {};
                return (
                  f.forEach((r) => {
                    n[`${e}-align-${r}`] = t.align === r;
                  }),
                  (n[`${e}-align-stretch`] = !t.align && !!t.vertical),
                  n
                );
              })(e, t),
            ),
            ((e, t) => {
              const n = {};
              return (
                p.forEach((r) => {
                  n[`${e}-justify-${r}`] = t.justify === r;
                }),
                n
              );
            })(e, t),
          ),
        );
      };
      const g = (e) => {
          const { componentCls: t } = e;
          return {
            [t]: {
              display: 'flex',
              '&-vertical': { flexDirection: 'column' },
              '&-rtl': { direction: 'rtl' },
              '&:empty': { display: 'none' },
            },
          };
        },
        b = (e) => {
          const { componentCls: t } = e;
          return {
            [t]: {
              '&-gap-small': { gap: e.flexGapSM },
              '&-gap-middle': { gap: e.flexGap },
              '&-gap-large': { gap: e.flexGapLG },
            },
          };
        },
        y = (e) => {
          const { componentCls: t } = e,
            n = {};
          return (
            d.forEach((e) => {
              n[`${t}-wrap-${e}`] = { flexWrap: e };
            }),
            n
          );
        },
        v = (e) => {
          const { componentCls: t } = e,
            n = {};
          return (
            f.forEach((e) => {
              n[`${t}-align-${e}`] = { alignItems: e };
            }),
            n
          );
        },
        h = (e) => {
          const { componentCls: t } = e,
            n = {};
          return (
            p.forEach((e) => {
              n[`${t}-justify-${e}`] = { justifyContent: e };
            }),
            n
          );
        };
      var x = (0, s.I$)(
          'Flex',
          (e) => {
            const { paddingXS: t, padding: n, paddingLG: r } = e,
              o = (0, u.TS)(e, { flexGapSM: t, flexGap: n, flexGapLG: r });
            return [g(o), b(o), y(o), v(o), h(o)];
          },
          () => ({}),
          { resetStyle: !1 },
        ),
        O = function (e, t) {
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
      const w = r.forwardRef((e, t) => {
        const {
            prefixCls: n,
            rootClassName: o,
            className: s,
            style: u,
            flex: d,
            gap: p,
            children: f,
            vertical: g = !1,
            component: b = 'div',
          } = e,
          y = O(e, [
            'prefixCls',
            'rootClassName',
            'className',
            'style',
            'flex',
            'gap',
            'children',
            'vertical',
            'component',
          ]),
          { flex: v, direction: h, getPrefixCls: w } = r.useContext(c.E_),
          E = w('flex', n),
          [S, j, C] = x(E),
          k = null != g ? g : null == v ? void 0 : v.vertical,
          $ = l()(s, o, null == v ? void 0 : v.className, E, j, C, m(E, e), {
            [`${E}-rtl`]: 'rtl' === h,
            [`${E}-gap-${p}`]: (0, a.n)(p),
            [`${E}-vertical`]: k,
          }),
          R = Object.assign(Object.assign({}, null == v ? void 0 : v.style), u);
        return (
          d && (R.flex = d),
          p && !(0, a.n)(p) && (R.gap = p),
          S(
            r.createElement(
              b,
              Object.assign(
                { ref: t, className: $, style: R },
                (0, i.Z)(y, ['justify', 'wrap', 'align']),
              ),
              f,
            ),
          )
        );
      });
      var E = w;
    },
    49867: function (e, t, n) {
      'use strict';
      n.d(t, {
        N: function () {
          return r;
        },
      });
      const r = (e) => ({
        color: e.colorLink,
        textDecoration: 'none',
        outline: 'none',
        cursor: 'pointer',
        transition: `color ${e.motionDurationSlow}`,
        '&:focus, &:hover': { color: e.colorLinkHover },
        '&:active': { color: e.colorLinkActive },
      });
    },
    22850: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return fe;
        },
      });
      var r = n(62435),
        o = n(63606),
        l = n(57132),
        i = n(86548),
        a = n(93967),
        c = n.n(a),
        s = n(20640),
        u = n.n(s),
        d = n(9220),
        p = n(50344),
        f = n(8410),
        m = n(21770),
        g = n(98423),
        b = n(42550),
        y = n(79370),
        v = n(15105),
        h = function (e, t) {
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
      const x = {
        border: 0,
        background: 'transparent',
        padding: 0,
        lineHeight: 'inherit',
        display: 'inline-block',
      };
      var O = r.forwardRef((e, t) => {
          const { style: n, noStyle: o, disabled: l } = e,
            i = h(e, ['style', 'noStyle', 'disabled']);
          let a = {};
          return (
            o || (a = Object.assign({}, x)),
            l && (a.pointerEvents = 'none'),
            (a = Object.assign(Object.assign({}, a), n)),
            r.createElement(
              'div',
              Object.assign({ role: 'button', tabIndex: 0, ref: t }, i, {
                onKeyDown: (e) => {
                  const { keyCode: t } = e;
                  t === v.Z.ENTER && e.preventDefault();
                },
                onKeyUp: (t) => {
                  const { keyCode: n } = t,
                    { onClick: r } = e;
                  n === v.Z.ENTER && r && r();
                },
                style: a,
              }),
            )
          );
        }),
        w = n(53124),
        E = n(10110),
        S = n(83062),
        j = n(87462),
        C = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'enter',
          theme: 'outlined',
        },
        k = n(84089),
        $ = function (e, t) {
          return r.createElement(k.Z, (0, j.Z)({}, e, { ref: t, icon: C }));
        };
      var R = r.forwardRef($),
        D = n(96159),
        T = n(22913),
        Z = n(49867),
        I = n(91945),
        N = n(16397),
        P = n(54548);
      const z = (e) => {
          const t = {};
          return (
            [1, 2, 3, 4, 5].forEach((n) => {
              t[
                `\n      h${n}&,\n      div&-h${n},\n      div&-h${n} > textarea,\n      h${n}\n    `
              ] = ((e, t, n, r) => {
                const { titleMarginBottom: o, fontWeightStrong: l } = r;
                return {
                  marginBottom: o,
                  color: n,
                  fontWeight: l,
                  fontSize: e,
                  lineHeight: t,
                };
              })(
                e[`fontSizeHeading${n}`],
                e[`lineHeightHeading${n}`],
                e.colorTextHeading,
                e,
              );
            }),
            t
          );
        },
        M = (e) => {
          const { componentCls: t } = e;
          return {
            'a&, a': Object.assign(Object.assign({}, (0, Z.N)(e)), {
              textDecoration: e.linkDecoration,
              '&:active, &:hover': { textDecoration: e.linkHoverDecoration },
              [`&[disabled], &${t}-disabled`]: {
                color: e.colorTextDisabled,
                cursor: 'not-allowed',
                '&:active, &:hover': { color: e.colorTextDisabled },
                '&:active': { pointerEvents: 'none' },
              },
            }),
          };
        },
        H = (e) => ({
          code: {
            margin: '0 0.2em',
            paddingInline: '0.4em',
            paddingBlock: '0.2em 0.1em',
            fontSize: '85%',
            fontFamily: e.fontFamilyCode,
            background: 'rgba(150, 150, 150, 0.1)',
            border: '1px solid rgba(100, 100, 100, 0.2)',
            borderRadius: 3,
          },
          kbd: {
            margin: '0 0.2em',
            paddingInline: '0.4em',
            paddingBlock: '0.15em 0.1em',
            fontSize: '90%',
            fontFamily: e.fontFamilyCode,
            background: 'rgba(150, 150, 150, 0.06)',
            border: '1px solid rgba(100, 100, 100, 0.2)',
            borderBottomWidth: 2,
            borderRadius: 3,
          },
          mark: { padding: 0, backgroundColor: N.EV[2] },
          'u, ins': {
            textDecoration: 'underline',
            textDecorationSkipInk: 'auto',
          },
          's, del': { textDecoration: 'line-through' },
          strong: { fontWeight: 600 },
          'ul, ol': {
            marginInline: 0,
            marginBlock: '0 1em',
            padding: 0,
            li: {
              marginInline: '20px 0',
              marginBlock: 0,
              paddingInline: '4px 0',
              paddingBlock: 0,
            },
          },
          ul: { listStyleType: 'circle', ul: { listStyleType: 'disc' } },
          ol: { listStyleType: 'decimal' },
          'pre, blockquote': { margin: '1em 0' },
          pre: {
            padding: '0.4em 0.6em',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            background: 'rgba(150, 150, 150, 0.1)',
            border: '1px solid rgba(100, 100, 100, 0.2)',
            borderRadius: 3,
            fontFamily: e.fontFamilyCode,
            code: {
              display: 'inline',
              margin: 0,
              padding: 0,
              fontSize: 'inherit',
              fontFamily: 'inherit',
              background: 'transparent',
              border: 0,
            },
          },
          blockquote: {
            paddingInline: '0.6em 0',
            paddingBlock: 0,
            borderInlineStart: '4px solid rgba(100, 100, 100, 0.2)',
            opacity: 0.85,
          },
        }),
        B = (e) => {
          const { componentCls: t, paddingSM: n } = e,
            r = n;
          return {
            '&-edit-content': {
              position: 'relative',
              'div&': {
                insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
                marginTop: e.calc(r).mul(-1).equal(),
                marginBottom: `calc(1em - ${(0, P.bf)(r)})`,
              },
              [`${t}-edit-content-confirm`]: {
                position: 'absolute',
                insetInlineEnd: e.calc(e.marginXS).add(2).equal(),
                insetBlockEnd: e.marginXS,
                color: e.colorTextDescription,
                fontWeight: 'normal',
                fontSize: e.fontSize,
                fontStyle: 'normal',
                pointerEvents: 'none',
              },
              textarea: {
                margin: '0!important',
                MozTransition: 'none',
                height: '1em',
              },
            },
          };
        },
        A = (e) => ({
          '&-copy-success': {
            '\n    &,\n    &:hover,\n    &:focus': { color: e.colorSuccess },
          },
        }),
        L = (e) => {
          const { componentCls: t, titleMarginTop: n } = e;
          return {
            [t]: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              {
                                color: e.colorText,
                                wordBreak: 'break-word',
                                lineHeight: e.lineHeight,
                                [`&${t}-secondary`]: {
                                  color: e.colorTextDescription,
                                },
                                [`&${t}-success`]: { color: e.colorSuccess },
                                [`&${t}-warning`]: { color: e.colorWarning },
                                [`&${t}-danger`]: {
                                  color: e.colorError,
                                  'a&:active, a&:focus': {
                                    color: e.colorErrorActive,
                                  },
                                  'a&:hover': { color: e.colorErrorHover },
                                },
                                [`&${t}-disabled`]: {
                                  color: e.colorTextDisabled,
                                  cursor: 'not-allowed',
                                  userSelect: 'none',
                                },
                                '\n        div&,\n        p\n      ': {
                                  marginBottom: '1em',
                                },
                              },
                              z(e),
                            ),
                            {
                              [`\n      & + h1${t},\n      & + h2${t},\n      & + h3${t},\n      & + h4${t},\n      & + h5${t}\n      `]:
                                { marginTop: n },
                              '\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5':
                                {
                                  '\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ':
                                    { marginTop: n },
                                },
                            },
                          ),
                          H(e),
                        ),
                        M(e),
                      ),
                      {
                        [`\n        ${t}-expand,\n        ${t}-edit,\n        ${t}-copy\n      `]:
                          Object.assign(Object.assign({}, (0, Z.N)(e)), {
                            marginInlineStart: e.marginXXS,
                          }),
                      },
                    ),
                    B(e),
                  ),
                  A(e),
                ),
                {
                  '\n  a&-ellipsis,\n  span&-ellipsis\n  ': {
                    display: 'inline-block',
                    maxWidth: '100%',
                  },
                  '&-single-line': { whiteSpace: 'nowrap' },
                  '&-ellipsis-single-line': {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    'a&, span&': { verticalAlign: 'bottom' },
                    '> code': {
                      paddingBlock: 0,
                      maxWidth: 'calc(100% - 1.2em)',
                      display: 'inline-block',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      verticalAlign: 'bottom',
                      boxSizing: 'content-box',
                    },
                  },
                  '&-ellipsis-multiple-line': {
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  },
                },
              ),
              { '&-rtl': { direction: 'rtl' } },
            ),
          };
        };
      var W = (0, I.I$)(
        'Typography',
        (e) => [L(e)],
        () => ({ titleMarginTop: '1.2em', titleMarginBottom: '0.5em' }),
      );
      var G = (e) => {
        const {
            prefixCls: t,
            'aria-label': n,
            className: o,
            style: l,
            direction: i,
            maxLength: a,
            autoSize: s = !0,
            value: u,
            onSave: d,
            onCancel: p,
            onEnd: f,
            component: m,
            enterIcon: g = r.createElement(R, null),
          } = e,
          b = r.useRef(null),
          y = r.useRef(!1),
          h = r.useRef(),
          [x, O] = r.useState(u);
        r.useEffect(() => {
          O(u);
        }, [u]),
          r.useEffect(() => {
            if (b.current && b.current.resizableTextArea) {
              const { textArea: e } = b.current.resizableTextArea;
              e.focus();
              const { length: t } = e.value;
              e.setSelectionRange(t, t);
            }
          }, []);
        const w = () => {
            d(x.trim());
          },
          E = m ? `${t}-${m}` : '',
          [S, j, C] = W(t),
          k = c()(
            t,
            `${t}-edit-content`,
            { [`${t}-rtl`]: 'rtl' === i },
            o,
            E,
            j,
            C,
          );
        return S(
          r.createElement(
            'div',
            { className: k, style: l },
            r.createElement(T.Z, {
              ref: b,
              maxLength: a,
              value: x,
              onChange: (e) => {
                let { target: t } = e;
                O(t.value.replace(/[\n\r]/g, ''));
              },
              onKeyDown: (e) => {
                let { keyCode: t } = e;
                y.current || (h.current = t);
              },
              onKeyUp: (e) => {
                let {
                  keyCode: t,
                  ctrlKey: n,
                  altKey: r,
                  metaKey: o,
                  shiftKey: l,
                } = e;
                h.current !== t ||
                  y.current ||
                  n ||
                  r ||
                  o ||
                  l ||
                  (t === v.Z.ENTER
                    ? (w(), null == f || f())
                    : t === v.Z.ESC && p());
              },
              onCompositionStart: () => {
                y.current = !0;
              },
              onCompositionEnd: () => {
                y.current = !1;
              },
              onBlur: () => {
                w();
              },
              'aria-label': n,
              rows: 1,
              autoSize: s,
            }),
            null !== g
              ? (0, D.Tm)(g, { className: `${t}-edit-content-confirm` })
              : null,
          ),
        );
      };
      function F(e, t) {
        return r.useMemo(() => {
          const n = !!e;
          return [
            n,
            Object.assign(
              Object.assign({}, t),
              n && 'object' == typeof e ? e : null,
            ),
          ];
        }, [e]);
      }
      var K = (e, t) => {
          const n = r.useRef(!1);
          r.useEffect(() => {
            n.current ? e() : (n.current = !0);
          }, t);
        },
        U = function (e, t) {
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
      const V = r.forwardRef((e, t) => {
        const {
            prefixCls: n,
            component: o = 'article',
            className: l,
            rootClassName: i,
            setContentRef: a,
            children: s,
            direction: u,
            style: d,
          } = e,
          p = U(e, [
            'prefixCls',
            'component',
            'className',
            'rootClassName',
            'setContentRef',
            'children',
            'direction',
            'style',
          ]),
          { getPrefixCls: f, direction: m, typography: g } = r.useContext(w.E_),
          y = null != u ? u : m;
        let v = t;
        a && (v = (0, b.sQ)(t, a));
        const h = f('typography', n),
          [x, O, E] = W(h),
          S = c()(
            h,
            null == g ? void 0 : g.className,
            { [`${h}-rtl`]: 'rtl' === y },
            l,
            i,
            O,
            E,
          ),
          j = Object.assign(Object.assign({}, null == g ? void 0 : g.style), d);
        return x(
          r.createElement(
            o,
            Object.assign({ className: S, style: j, ref: v }, p),
            s,
          ),
        );
      });
      var X = V;
      function q(e) {
        const t = typeof e;
        return 'string' === t || 'number' === t;
      }
      function _(e, t) {
        let n = 0;
        const r = [];
        for (let o = 0; o < e.length; o += 1) {
          if (n === t) return r;
          const l = e[o],
            i = n + (q(l) ? String(l).length : 1);
          if (i > t) {
            const e = t - n;
            return r.push(String(l).slice(0, e)), r;
          }
          r.push(l), (n = i);
        }
        return e;
      }
      var Q = (e) => {
        let {
          enabledMeasure: t,
          children: n,
          text: o,
          width: l,
          fontSize: i,
          rows: a,
          onEllipsis: c,
        } = e;
        const [[s, u, d], m] = r.useState([0, 0, 0]),
          [g, b] = r.useState(0),
          [y, v] = r.useState(0),
          [h, x] = r.useState(0),
          O = r.useRef(null),
          w = r.useRef(null),
          E = r.useMemo(() => (0, p.Z)(o), [o]),
          S = r.useMemo(
            () =>
              (function (e) {
                let t = 0;
                return (
                  e.forEach((e) => {
                    q(e) ? (t += String(e).length) : (t += 1);
                  }),
                  t
                );
              })(E),
            [E],
          ),
          j = r.useMemo(
            () =>
              t && 3 === y
                ? n(_(E, u), u < S)
                : g && 4 !== y && t
                  ? n(_(E, g), g < S)
                  : n(E, !1),
            [t, y, n, E, u, S],
          );
        (0, f.Z)(() => {
          t && l && i && S && (v(1), m([0, Math.ceil(S / 2), S]));
        }, [t, l, i, o, S, a]),
          (0, f.Z)(() => {
            var e;
            1 === y &&
              x(
                (null === (e = O.current) || void 0 === e
                  ? void 0
                  : e.offsetHeight) || 0,
              );
          }, [y]),
          (0, f.Z)(() => {
            var e, t;
            if (h)
              if (1 === y) {
                ((null === (e = w.current) || void 0 === e
                  ? void 0
                  : e.offsetHeight) || 0) <=
                a * h
                  ? (v(4), c(!1))
                  : v(2);
              } else if (2 === y)
                if (s !== d) {
                  const e =
                    (null === (t = w.current) || void 0 === t
                      ? void 0
                      : t.offsetHeight) || 0;
                  let n = s,
                    r = d;
                  s === d - 1 ? (r = s) : e <= a * h ? (n = u) : (r = u);
                  const o = Math.ceil((n + r) / 2);
                  m([n, o, r]);
                } else v(3), b(u), c(!0);
          }, [y, s, d, a, h]);
        const C = { width: l, whiteSpace: 'normal', margin: 0, padding: 0 },
          k = (e, t, n) =>
            r.createElement(
              'span',
              {
                'aria-hidden': !0,
                ref: t,
                style: Object.assign(
                  {
                    position: 'fixed',
                    display: 'block',
                    left: 0,
                    top: 0,
                    zIndex: -9999,
                    visibility: 'hidden',
                    pointerEvents: 'none',
                    fontSize: 2 * Math.ceil(i / 2),
                  },
                  n,
                ),
              },
              e,
            );
        return r.createElement(
          r.Fragment,
          null,
          j,
          t &&
            3 !== y &&
            4 !== y &&
            r.createElement(
              r.Fragment,
              null,
              k('lg', O, { wordBreak: 'keep-all', whiteSpace: 'nowrap' }),
              1 === y
                ? k(n(E, !1), w, C)
                : ((e, t) => {
                    const r = _(E, e);
                    return k(n(r, !0), t, C);
                  })(u, w),
            ),
        );
      };
      var J = (e) => {
          let {
            enabledEllipsis: t,
            isEllipsis: n,
            children: o,
            tooltipProps: l,
          } = e;
          return (null == l ? void 0 : l.title) && t
            ? r.createElement(S.Z, Object.assign({ open: !!n && void 0 }, l), o)
            : o;
        },
        Y = function (e, t) {
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
      function ee(e, t, n) {
        return !0 === e || void 0 === e ? t : e || (n && t);
      }
      function te(e) {
        return !1 === e ? [!1, !1] : Array.isArray(e) ? e : [e];
      }
      var ne = r.forwardRef((e, t) => {
          var n, a, s;
          const {
              prefixCls: v,
              className: h,
              style: x,
              type: j,
              disabled: C,
              children: k,
              ellipsis: $,
              editable: R,
              copyable: D,
              component: T,
              title: Z,
            } = e,
            I = Y(e, [
              'prefixCls',
              'className',
              'style',
              'type',
              'disabled',
              'children',
              'ellipsis',
              'editable',
              'copyable',
              'component',
              'title',
            ]),
            { getPrefixCls: N, direction: P } = r.useContext(w.E_),
            [z] = (0, E.Z)('Text'),
            M = r.useRef(null),
            H = r.useRef(null),
            B = N('typography', v),
            A = (0, g.Z)(I, [
              'mark',
              'code',
              'delete',
              'underline',
              'strong',
              'keyboard',
              'italic',
            ]),
            [L, W] = F(R),
            [U, V] = (0, m.Z)(!1, { value: W.editing }),
            { triggerType: q = ['icon'] } = W,
            _ = (e) => {
              var t;
              e && (null === (t = W.onStart) || void 0 === t || t.call(W)),
                V(e);
            };
          K(() => {
            var e;
            U || null === (e = H.current) || void 0 === e || e.focus();
          }, [U]);
          const ne = (e) => {
              null == e || e.preventDefault(), _(!0);
            },
            re = (e) => {
              var t;
              null === (t = W.onChange) || void 0 === t || t.call(W, e), _(!1);
            },
            oe = () => {
              var e;
              null === (e = W.onCancel) || void 0 === e || e.call(W), _(!1);
            },
            [le, ie] = F(D),
            [ae, ce] = r.useState(!1),
            se = r.useRef(null),
            ue = {};
          ie.format && (ue.format = ie.format);
          const de = () => {
              se.current && clearTimeout(se.current);
            },
            pe = (e) => {
              var t;
              null == e || e.preventDefault(),
                null == e || e.stopPropagation(),
                u()(ie.text || String(k) || '', ue),
                ce(!0),
                de(),
                (se.current = setTimeout(() => {
                  ce(!1);
                }, 3e3)),
                null === (t = ie.onCopy) || void 0 === t || t.call(ie, e);
            };
          r.useEffect(() => de, []);
          const [fe, me] = r.useState(!1),
            [ge, be] = r.useState(!1),
            [ye, ve] = r.useState(!1),
            [he, xe] = r.useState(!1),
            [Oe, we] = r.useState(!1),
            [Ee, Se] = r.useState(!0),
            [je, Ce] = F($, { expandable: !1 }),
            ke = je && !ye,
            { rows: $e = 1 } = Ce,
            Re = r.useMemo(
              () =>
                !ke ||
                void 0 !== Ce.suffix ||
                Ce.onEllipsis ||
                Ce.expandable ||
                L ||
                le,
              [ke, Ce, L, le],
            );
          (0, f.Z)(() => {
            je &&
              !Re &&
              (me((0, y.G)('webkitLineClamp')), be((0, y.G)('textOverflow')));
          }, [Re, je]);
          const De = r.useMemo(() => !Re && (1 === $e ? ge : fe), [Re, ge, fe]),
            Te = ke && (De ? Oe : he),
            Ze = ke && 1 === $e && De,
            Ie = ke && $e > 1 && De,
            Ne = (e) => {
              var t;
              ve(!0),
                null === (t = Ce.onExpand) || void 0 === t || t.call(Ce, e);
            },
            [Pe, ze] = r.useState(0),
            [Me, He] = r.useState(0),
            Be = (e) => {
              var t;
              xe(e),
                he !== e &&
                  (null === (t = Ce.onEllipsis) ||
                    void 0 === t ||
                    t.call(Ce, e));
            };
          r.useEffect(() => {
            const e = M.current;
            if (je && De && e) {
              const t = Ie
                ? e.offsetHeight < e.scrollHeight
                : e.offsetWidth < e.scrollWidth;
              Oe !== t && we(t);
            }
          }, [je, De, k, Ie, Ee, Pe]),
            r.useEffect(() => {
              const e = M.current;
              if (
                'undefined' == typeof IntersectionObserver ||
                !e ||
                !De ||
                !ke
              )
                return;
              const t = new IntersectionObserver(() => {
                Se(!!e.offsetParent);
              });
              return (
                t.observe(e),
                () => {
                  t.disconnect();
                }
              );
            }, [De, ke]);
          let Ae = {};
          Ae =
            !0 === Ce.tooltip
              ? { title: null !== (n = W.text) && void 0 !== n ? n : k }
              : r.isValidElement(Ce.tooltip)
                ? { title: Ce.tooltip }
                : 'object' == typeof Ce.tooltip
                  ? Object.assign(
                      { title: null !== (a = W.text) && void 0 !== a ? a : k },
                      Ce.tooltip,
                    )
                  : { title: Ce.tooltip };
          const Le = r.useMemo(() => {
            const e = (e) => ['string', 'number'].includes(typeof e);
            if (je && !De)
              return e(W.text)
                ? W.text
                : e(k)
                  ? k
                  : e(Z)
                    ? Z
                    : e(Ae.title)
                      ? Ae.title
                      : void 0;
          }, [je, De, Z, Ae.title, Te]);
          if (U)
            return r.createElement(G, {
              value:
                null !== (s = W.text) && void 0 !== s
                  ? s
                  : 'string' == typeof k
                    ? k
                    : '',
              onSave: re,
              onCancel: oe,
              onEnd: W.onEnd,
              prefixCls: B,
              className: h,
              style: x,
              direction: P,
              component: T,
              maxLength: W.maxLength,
              autoSize: W.autoSize,
              enterIcon: W.enterIcon,
            });
          const We = () => {
              const { expandable: e, symbol: t } = Ce;
              if (!e) return null;
              let n;
              return (
                (n = t || (null == z ? void 0 : z.expand)),
                r.createElement(
                  'a',
                  {
                    key: 'expand',
                    className: `${B}-expand`,
                    onClick: Ne,
                    'aria-label': null == z ? void 0 : z.expand,
                  },
                  n,
                )
              );
            },
            Ge = () => {
              if (!L) return;
              const { icon: e, tooltip: t } = W,
                n = (0, p.Z)(t)[0] || (null == z ? void 0 : z.edit),
                o = 'string' == typeof n ? n : '';
              return q.includes('icon')
                ? r.createElement(
                    S.Z,
                    { key: 'edit', title: !1 === t ? '' : n },
                    r.createElement(
                      O,
                      {
                        ref: H,
                        className: `${B}-edit`,
                        onClick: ne,
                        'aria-label': o,
                      },
                      e || r.createElement(i.Z, { role: 'button' }),
                    ),
                  )
                : null;
            },
            Fe = () => {
              if (!le) return;
              const { tooltips: e, icon: t } = ie,
                n = te(e),
                i = te(t),
                a = ae
                  ? ee(n[1], null == z ? void 0 : z.copied)
                  : ee(n[0], null == z ? void 0 : z.copy),
                s = ae
                  ? null == z
                    ? void 0
                    : z.copied
                  : null == z
                    ? void 0
                    : z.copy,
                u = 'string' == typeof a ? a : s;
              return r.createElement(
                S.Z,
                { key: 'copy', title: a },
                r.createElement(
                  O,
                  {
                    className: c()(`${B}-copy`, ae && `${B}-copy-success`),
                    onClick: pe,
                    'aria-label': u,
                  },
                  ae
                    ? ee(i[1], r.createElement(o.Z, null), !0)
                    : ee(i[0], r.createElement(l.Z, null), !0),
                ),
              );
            };
          return r.createElement(
            d.Z,
            {
              onResize: (e, t) => {
                let { offsetWidth: n } = e;
                var r;
                ze(n),
                  He(
                    parseInt(
                      null === (r = window.getComputedStyle) || void 0 === r
                        ? void 0
                        : r.call(window, t).fontSize,
                      10,
                    ) || 0,
                  );
              },
              disabled: !ke,
            },
            (n) =>
              r.createElement(
                J,
                { tooltipProps: Ae, enabledEllipsis: ke, isEllipsis: Te },
                r.createElement(
                  X,
                  Object.assign(
                    {
                      className: c()(
                        {
                          [`${B}-${j}`]: j,
                          [`${B}-disabled`]: C,
                          [`${B}-ellipsis`]: je,
                          [`${B}-single-line`]: ke && 1 === $e,
                          [`${B}-ellipsis-single-line`]: Ze,
                          [`${B}-ellipsis-multiple-line`]: Ie,
                        },
                        h,
                      ),
                      prefixCls: v,
                      style: Object.assign(Object.assign({}, x), {
                        WebkitLineClamp: Ie ? $e : void 0,
                      }),
                      component: T,
                      ref: (0, b.sQ)(n, M, t),
                      direction: P,
                      onClick: q.includes('text') ? ne : void 0,
                      'aria-label': null == Le ? void 0 : Le.toString(),
                      title: Z,
                    },
                    A,
                  ),
                  r.createElement(
                    Q,
                    {
                      enabledMeasure: ke && !De,
                      text: k,
                      rows: $e,
                      width: Pe,
                      fontSize: Me,
                      onEllipsis: Be,
                    },
                    (t, n) => {
                      let o = t;
                      t.length &&
                        n &&
                        Le &&
                        (o = r.createElement(
                          'span',
                          { key: 'show-content', 'aria-hidden': !0 },
                          o,
                        ));
                      const l = (function (e, t) {
                        let {
                            mark: n,
                            code: o,
                            underline: l,
                            delete: i,
                            strong: a,
                            keyboard: c,
                            italic: s,
                          } = e,
                          u = t;
                        function d(e, t) {
                          t && (u = r.createElement(e, {}, u));
                        }
                        return (
                          d('strong', a),
                          d('u', l),
                          d('del', i),
                          d('code', o),
                          d('mark', n),
                          d('kbd', c),
                          d('i', s),
                          u
                        );
                      })(
                        e,
                        r.createElement(
                          r.Fragment,
                          null,
                          o,
                          ((e) => {
                            return [
                              e &&
                                r.createElement(
                                  'span',
                                  { 'aria-hidden': !0, key: 'ellipsis' },
                                  '...',
                                ),
                              Ce.suffix,
                              ((t = e), [t && We(), Ge(), Fe()]),
                            ];
                            var t;
                          })(n),
                        ),
                      );
                      return l;
                    },
                  ),
                ),
              ),
          );
        }),
        re = function (e, t) {
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
      var oe = r.forwardRef((e, t) => {
        var { ellipsis: n, rel: o } = e,
          l = re(e, ['ellipsis', 'rel']);
        const i = Object.assign(Object.assign({}, l), {
          rel:
            void 0 === o && '_blank' === l.target ? 'noopener noreferrer' : o,
        });
        return (
          delete i.navigate,
          r.createElement(
            ne,
            Object.assign({}, i, { ref: t, ellipsis: !!n, component: 'a' }),
          )
        );
      });
      var le = r.forwardRef((e, t) =>
          r.createElement(
            ne,
            Object.assign({ ref: t }, e, { component: 'div' }),
          ),
        ),
        ie = function (e, t) {
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
      const ae = (e, t) => {
        var { ellipsis: n } = e,
          o = ie(e, ['ellipsis']);
        const l = r.useMemo(
          () =>
            n && 'object' == typeof n ? (0, g.Z)(n, ['expandable', 'rows']) : n,
          [n],
        );
        return r.createElement(
          ne,
          Object.assign({ ref: t }, o, { ellipsis: l, component: 'span' }),
        );
      };
      var ce = r.forwardRef(ae),
        se = function (e, t) {
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
      const ue = [1, 2, 3, 4, 5];
      var de = r.forwardRef((e, t) => {
        const { level: n = 1 } = e,
          o = se(e, ['level']);
        let l;
        return (
          (l = ue.includes(n) ? `h${n}` : 'h1'),
          r.createElement(ne, Object.assign({ ref: t }, o, { component: l }))
        );
      });
      const pe = X;
      (pe.Text = ce), (pe.Link = oe), (pe.Title = de), (pe.Paragraph = le);
      var fe = pe;
    },
    20640: function (e, t, n) {
      'use strict';
      var r = n(11742),
        o = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' };
      e.exports = function (e, t) {
        var n,
          l,
          i,
          a,
          c,
          s,
          u = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((i = r()),
            (a = document.createRange()),
            (c = document.getSelection()),
            ((s = document.createElement('span')).textContent = e),
            (s.ariaHidden = 'true'),
            (s.style.all = 'unset'),
            (s.style.position = 'fixed'),
            (s.style.top = 0),
            (s.style.clip = 'rect(0, 0, 0, 0)'),
            (s.style.whiteSpace = 'pre'),
            (s.style.webkitUserSelect = 'text'),
            (s.style.MozUserSelect = 'text'),
            (s.style.msUserSelect = 'text'),
            (s.style.userSelect = 'text'),
            s.addEventListener('copy', function (r) {
              if ((r.stopPropagation(), t.format))
                if ((r.preventDefault(), void 0 === r.clipboardData)) {
                  n && console.warn('unable to use e.clipboardData'),
                    n && console.warn('trying IE specific stuff'),
                    window.clipboardData.clearData();
                  var l = o[t.format] || o.default;
                  window.clipboardData.setData(l, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(t.format, e);
              t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
            }),
            document.body.appendChild(s),
            a.selectNodeContents(s),
            c.addRange(a),
            !document.execCommand('copy'))
          )
            throw new Error('copy command was unsuccessful');
          u = !0;
        } catch (r) {
          n && console.error('unable to copy using execCommand: ', r),
            n && console.warn('trying IE specific stuff');
          try {
            window.clipboardData.setData(t.format || 'text', e),
              t.onCopy && t.onCopy(window.clipboardData),
              (u = !0);
          } catch (r) {
            n && console.error('unable to copy using clipboardData: ', r),
              n && console.error('falling back to prompt'),
              (l = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                'message' in t ? t.message : 'Copy to clipboard: #{key}, Enter',
              )),
              window.prompt(l, e);
          }
        } finally {
          c &&
            ('function' == typeof c.removeRange
              ? c.removeRange(a)
              : c.removeAllRanges()),
            s && document.body.removeChild(s),
            i();
        }
        return u;
      };
    },
    79370: function (e, t, n) {
      'use strict';
      n.d(t, {
        G: function () {
          return i;
        },
      });
      var r = n(98924),
        o = function (e) {
          if ((0, r.Z)() && window.document.documentElement) {
            var t = Array.isArray(e) ? e : [e],
              n = window.document.documentElement;
            return t.some(function (e) {
              return e in n.style;
            });
          }
          return !1;
        },
        l = function (e, t) {
          if (!o(e)) return !1;
          var n = document.createElement('div'),
            r = n.style[e];
          return (n.style[e] = t), n.style[e] !== r;
        };
      function i(e, t) {
        return Array.isArray(e) || void 0 === t ? o(e) : l(e, t);
      }
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], r = 0;
          r < e.rangeCount;
          r++
        )
          n.push(e.getRangeAt(r));
        switch (t.tagName.toUpperCase()) {
          case 'INPUT':
          case 'TEXTAREA':
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            'Caret' === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
  },
]);
//# sourceMappingURL=6231.1739c351.async.js.map
