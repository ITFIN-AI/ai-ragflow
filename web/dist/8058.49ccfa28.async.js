(self.webpackChunk = self.webpackChunk || []).push([
  [8058],
  {
    87547: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(87462),
        i = n(62435),
        s = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z',
                },
              },
            ],
          },
          name: 'user',
          theme: 'outlined',
        },
        o = n(84089),
        a = function (e, t) {
          return i.createElement(o.Z, (0, r.Z)({}, e, { ref: t, icon: s }));
        };
      var c = i.forwardRef(a);
    },
    4393: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return P;
        },
      });
      var r = n(62435),
        i = n(93967),
        s = n.n(i),
        o = n(98423),
        a = n(53124),
        c = n(98675),
        l = n(21687),
        u = n(92398),
        h = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        };
      var p = (e) => {
          var { prefixCls: t, className: n, hoverable: i = !0 } = e,
            o = h(e, ['prefixCls', 'className', 'hoverable']);
          const { getPrefixCls: c } = r.useContext(a.E_),
            l = c('card', t),
            u = s()(`${l}-grid`, n, { [`${l}-grid-hoverable`]: i });
          return r.createElement('div', Object.assign({}, o, { className: u }));
        },
        d = n(54548),
        f = n(14747),
        m = n(91945),
        E = n(45503);
      const T = (e) => {
          const {
            antCls: t,
            componentCls: n,
            headerHeight: r,
            cardPaddingBase: i,
            tabsMarginBottom: s,
          } = e;
          return Object.assign(
            Object.assign(
              {
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                minHeight: r,
                marginBottom: -1,
                padding: `0 ${(0, d.bf)(i)}`,
                color: e.colorTextHeading,
                fontWeight: e.fontWeightStrong,
                fontSize: e.headerFontSize,
                background: e.headerBg,
                borderBottom: `${(0, d.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
                borderRadius: `${(0, d.bf)(e.borderRadiusLG)} ${(0, d.bf)(e.borderRadiusLG)} 0 0`,
              },
              (0, f.dF)(),
            ),
            {
              '&-wrapper': {
                width: '100%',
                display: 'flex',
                alignItems: 'center',
              },
              '&-title': Object.assign(
                Object.assign({ display: 'inline-block', flex: 1 }, f.vS),
                {
                  [`\n          > ${n}-typography,\n          > ${n}-typography-edit-content\n        `]:
                    { insetInlineStart: 0, marginTop: 0, marginBottom: 0 },
                },
              ),
              [`${t}-tabs-top`]: {
                clear: 'both',
                marginBottom: s,
                color: e.colorText,
                fontWeight: 'normal',
                fontSize: e.fontSize,
                '&-bar': {
                  borderBottom: `${(0, d.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
                },
              },
            },
          );
        },
        A = (e) => {
          const {
            cardPaddingBase: t,
            colorBorderSecondary: n,
            cardShadow: r,
            lineWidth: i,
          } = e;
          return {
            width: '33.33%',
            padding: t,
            border: 0,
            borderRadius: 0,
            boxShadow: `\n      ${(0, d.bf)(i)} 0 0 0 ${n},\n      0 ${(0, d.bf)(i)} 0 0 ${n},\n      ${(0, d.bf)(i)} ${(0, d.bf)(i)} 0 0 ${n},\n      ${(0, d.bf)(i)} 0 0 0 ${n} inset,\n      0 ${(0, d.bf)(i)} 0 0 ${n} inset;\n    `,
            transition: `all ${e.motionDurationMid}`,
            '&-hoverable:hover': {
              position: 'relative',
              zIndex: 1,
              boxShadow: r,
            },
          };
        },
        _ = (e) => {
          const {
            componentCls: t,
            iconCls: n,
            actionsLiMargin: r,
            cardActionsIconSize: i,
            colorBorderSecondary: s,
            actionsBg: o,
          } = e;
          return Object.assign(
            Object.assign(
              {
                margin: 0,
                padding: 0,
                listStyle: 'none',
                background: o,
                borderTop: `${(0, d.bf)(e.lineWidth)} ${e.lineType} ${s}`,
                display: 'flex',
                borderRadius: `0 0 ${(0, d.bf)(e.borderRadiusLG)} ${(0, d.bf)(e.borderRadiusLG)}`,
              },
              (0, f.dF)(),
            ),
            {
              '& > li': {
                margin: r,
                color: e.colorTextDescription,
                textAlign: 'center',
                '> span': {
                  position: 'relative',
                  display: 'block',
                  minWidth: e.calc(e.cardActionsIconSize).mul(2).equal(),
                  fontSize: e.fontSize,
                  lineHeight: e.lineHeight,
                  cursor: 'pointer',
                  '&:hover': {
                    color: e.colorPrimary,
                    transition: `color ${e.motionDurationMid}`,
                  },
                  [`a:not(${t}-btn), > ${n}`]: {
                    display: 'inline-block',
                    width: '100%',
                    color: e.colorTextDescription,
                    lineHeight: (0, d.bf)(e.fontHeight),
                    transition: `color ${e.motionDurationMid}`,
                    '&:hover': { color: e.colorPrimary },
                  },
                  [`> ${n}`]: {
                    fontSize: i,
                    lineHeight: (0, d.bf)(e.calc(i).mul(e.lineHeight).equal()),
                  },
                },
                '&:not(:last-child)': {
                  borderInlineEnd: `${(0, d.bf)(e.lineWidth)} ${e.lineType} ${s}`,
                },
              },
            },
          );
        },
        g = (e) =>
          Object.assign(
            Object.assign(
              {
                margin: `${(0, d.bf)(e.calc(e.marginXXS).mul(-1).equal())} 0`,
                display: 'flex',
              },
              (0, f.dF)(),
            ),
            {
              '&-avatar': { paddingInlineEnd: e.padding },
              '&-detail': {
                overflow: 'hidden',
                flex: 1,
                '> div:not(:last-child)': { marginBottom: e.marginXS },
              },
              '&-title': Object.assign(
                {
                  color: e.colorTextHeading,
                  fontWeight: e.fontWeightStrong,
                  fontSize: e.fontSizeLG,
                },
                f.vS,
              ),
              '&-description': { color: e.colorTextDescription },
            },
          ),
        C = (e) => {
          const { componentCls: t, cardPaddingBase: n, colorFillAlter: r } = e;
          return {
            [`${t}-head`]: {
              padding: `0 ${(0, d.bf)(n)}`,
              background: r,
              '&-title': { fontSize: e.fontSize },
            },
            [`${t}-body`]: {
              padding: `${(0, d.bf)(e.padding)} ${(0, d.bf)(n)}`,
            },
          };
        },
        S = (e) => {
          const { componentCls: t } = e;
          return { overflow: 'hidden', [`${t}-body`]: { userSelect: 'none' } };
        },
        I = (e) => {
          const {
            antCls: t,
            componentCls: n,
            cardShadow: r,
            cardHeadPadding: i,
            colorBorderSecondary: s,
            boxShadowTertiary: o,
            cardPaddingBase: a,
            extraColor: c,
          } = e;
          return {
            [n]: Object.assign(Object.assign({}, (0, f.Wf)(e)), {
              position: 'relative',
              background: e.colorBgContainer,
              borderRadius: e.borderRadiusLG,
              [`&:not(${n}-bordered)`]: { boxShadow: o },
              [`${n}-head`]: T(e),
              [`${n}-extra`]: {
                marginInlineStart: 'auto',
                color: c,
                fontWeight: 'normal',
                fontSize: e.fontSize,
              },
              [`${n}-body`]: Object.assign(
                {
                  padding: a,
                  borderRadius: ` 0 0 ${(0, d.bf)(e.borderRadiusLG)} ${(0, d.bf)(e.borderRadiusLG)}`,
                },
                (0, f.dF)(),
              ),
              [`${n}-grid`]: A(e),
              [`${n}-cover`]: {
                '> *': { display: 'block', width: '100%' },
                [`img, img + ${t}-image-mask`]: {
                  borderRadius: `${(0, d.bf)(e.borderRadiusLG)} ${(0, d.bf)(e.borderRadiusLG)} 0 0`,
                },
              },
              [`${n}-actions`]: _(e),
              [`${n}-meta`]: g(e),
            }),
            [`${n}-bordered`]: {
              border: `${(0, d.bf)(e.lineWidth)} ${e.lineType} ${s}`,
              [`${n}-cover`]: {
                marginTop: -1,
                marginInlineStart: -1,
                marginInlineEnd: -1,
              },
            },
            [`${n}-hoverable`]: {
              cursor: 'pointer',
              transition: `box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,
              '&:hover': { borderColor: 'transparent', boxShadow: r },
            },
            [`${n}-contain-grid`]: {
              borderRadius: `${(0, d.bf)(e.borderRadiusLG)} ${(0, d.bf)(e.borderRadiusLG)} 0 0 `,
              [`${n}-body`]: { display: 'flex', flexWrap: 'wrap' },
              [`&:not(${n}-loading) ${n}-body`]: {
                marginBlockStart: e.calc(e.lineWidth).mul(-1).equal(),
                marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
                padding: 0,
              },
            },
            [`${n}-contain-tabs`]: {
              [`> ${n}-head`]: {
                minHeight: 0,
                [`${n}-head-title, ${n}-extra`]: { paddingTop: i },
              },
            },
            [`${n}-type-inner`]: C(e),
            [`${n}-loading`]: S(e),
            [`${n}-rtl`]: { direction: 'rtl' },
          };
        },
        N = (e) => {
          const {
            componentCls: t,
            cardPaddingSM: n,
            headerHeightSM: r,
            headerFontSizeSM: i,
          } = e;
          return {
            [`${t}-small`]: {
              [`> ${t}-head`]: {
                minHeight: r,
                padding: `0 ${(0, d.bf)(n)}`,
                fontSize: i,
                [`> ${t}-head-wrapper`]: {
                  [`> ${t}-extra`]: { fontSize: e.fontSize },
                },
              },
              [`> ${t}-body`]: { padding: n },
            },
            [`${t}-small${t}-contain-tabs`]: {
              [`> ${t}-head`]: {
                [`${t}-head-title, ${t}-extra`]: {
                  paddingTop: 0,
                  display: 'flex',
                  alignItems: 'center',
                },
              },
            },
          };
        };
      var k = (0, m.I$)(
          'Card',
          (e) => {
            const t = (0, E.TS)(e, {
              cardShadow: e.boxShadowCard,
              cardHeadPadding: e.padding,
              cardPaddingBase: e.paddingLG,
              cardActionsIconSize: e.fontSize,
              cardPaddingSM: 12,
            });
            return [I(t), N(t)];
          },
          (e) => ({
            headerBg: 'transparent',
            headerFontSize: e.fontSizeLG,
            headerFontSizeSM: e.fontSize,
            headerHeight: e.fontSizeLG * e.lineHeightLG + 2 * e.padding,
            headerHeightSM: e.fontSize * e.lineHeight + 2 * e.paddingXS,
            actionsBg: e.colorBgContainer,
            actionsLiMargin: `${e.paddingSM}px 0`,
            tabsMarginBottom: -e.padding - e.lineWidth,
            extraColor: e.colorText,
          }),
        ),
        b = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        };
      const D = (e) => {
          const { prefixCls: t, actions: n = [] } = e;
          return r.createElement(
            'ul',
            { className: `${t}-actions` },
            n.map((e, t) => {
              const i = `action-${t}`;
              return r.createElement(
                'li',
                { style: { width: 100 / n.length + '%' }, key: i },
                r.createElement('span', null, e),
              );
            }),
          );
        },
        O = r.forwardRef((e, t) => {
          const {
              prefixCls: n,
              className: i,
              rootClassName: h,
              style: d,
              extra: f,
              headStyle: m = {},
              bodyStyle: E = {},
              title: T,
              loading: A,
              bordered: _ = !0,
              size: g,
              type: C,
              cover: S,
              actions: I,
              tabList: N,
              children: O,
              activeTabKey: R,
              defaultActiveTabKey: y,
              tabBarExtraContent: L,
              hoverable: P,
              tabProps: M = {},
            } = e,
            x = b(e, [
              'prefixCls',
              'className',
              'rootClassName',
              'style',
              'extra',
              'headStyle',
              'bodyStyle',
              'title',
              'loading',
              'bordered',
              'size',
              'type',
              'cover',
              'actions',
              'tabList',
              'children',
              'activeTabKey',
              'defaultActiveTabKey',
              'tabBarExtraContent',
              'hoverable',
              'tabProps',
            ]),
            { getPrefixCls: v, direction: w, card: B } = r.useContext(a.E_),
            F = r.useMemo(() => {
              let e = !1;
              return (
                r.Children.forEach(O, (t) => {
                  t && t.type && t.type === p && (e = !0);
                }),
                e
              );
            }, [O]),
            H = v('card', n),
            [U, G, z] = k(H),
            Y = r.createElement(
              l.Z,
              { loading: !0, active: !0, paragraph: { rows: 4 }, title: !1 },
              O,
            ),
            j = void 0 !== R,
            q = Object.assign(Object.assign({}, M), {
              [j ? 'activeKey' : 'defaultActiveKey']: j ? R : y,
              tabBarExtraContent: L,
            });
          let W;
          const V = (0, c.Z)(g),
            Q = V && 'default' !== V ? V : 'large',
            X = N
              ? r.createElement(
                  u.Z,
                  Object.assign({ size: Q }, q, {
                    className: `${H}-head-tabs`,
                    onChange: (t) => {
                      var n;
                      null === (n = e.onTabChange) ||
                        void 0 === n ||
                        n.call(e, t);
                    },
                    items: N.map((e) => {
                      var { tab: t } = e,
                        n = b(e, ['tab']);
                      return Object.assign({ label: t }, n);
                    }),
                  }),
                )
              : null;
          (T || f || X) &&
            (W = r.createElement(
              'div',
              { className: `${H}-head`, style: m },
              r.createElement(
                'div',
                { className: `${H}-head-wrapper` },
                T &&
                  r.createElement('div', { className: `${H}-head-title` }, T),
                f && r.createElement('div', { className: `${H}-extra` }, f),
              ),
              X,
            ));
          const $ = S
              ? r.createElement('div', { className: `${H}-cover` }, S)
              : null,
            K = r.createElement(
              'div',
              { className: `${H}-body`, style: E },
              A ? Y : O,
            ),
            Z =
              I && I.length
                ? r.createElement(D, { prefixCls: H, actions: I })
                : null,
            J = (0, o.Z)(x, ['onTabChange']),
            ee = s()(
              H,
              null == B ? void 0 : B.className,
              {
                [`${H}-loading`]: A,
                [`${H}-bordered`]: _,
                [`${H}-hoverable`]: P,
                [`${H}-contain-grid`]: F,
                [`${H}-contain-tabs`]: N && N.length,
                [`${H}-${V}`]: V,
                [`${H}-type-${C}`]: !!C,
                [`${H}-rtl`]: 'rtl' === w,
              },
              i,
              h,
              G,
              z,
            ),
            te = Object.assign(
              Object.assign({}, null == B ? void 0 : B.style),
              d,
            );
          return U(
            r.createElement(
              'div',
              Object.assign({ ref: t }, J, { className: ee, style: te }),
              W,
              $,
              K,
              Z,
            ),
          );
        });
      var R = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      };
      var y = (e) => {
        const {
            prefixCls: t,
            className: n,
            avatar: i,
            title: o,
            description: c,
          } = e,
          l = R(e, [
            'prefixCls',
            'className',
            'avatar',
            'title',
            'description',
          ]),
          { getPrefixCls: u } = r.useContext(a.E_),
          h = u('card', t),
          p = s()(`${h}-meta`, n),
          d = i
            ? r.createElement('div', { className: `${h}-meta-avatar` }, i)
            : null,
          f = o
            ? r.createElement('div', { className: `${h}-meta-title` }, o)
            : null,
          m = c
            ? r.createElement('div', { className: `${h}-meta-description` }, c)
            : null,
          E =
            f || m
              ? r.createElement('div', { className: `${h}-meta-detail` }, f, m)
              : null;
        return r.createElement(
          'div',
          Object.assign({}, l, { className: p }),
          d,
          E,
        );
      };
      const L = O;
      (L.Grid = p), (L.Meta = y);
      var P = L;
    },
    94470: function (e) {
      'use strict';
      var t = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString,
        r = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        s = function (e) {
          return 'function' == typeof Array.isArray
            ? Array.isArray(e)
            : '[object Array]' === n.call(e);
        },
        o = function (e) {
          if (!e || '[object Object]' !== n.call(e)) return !1;
          var r,
            i = t.call(e, 'constructor'),
            s =
              e.constructor &&
              e.constructor.prototype &&
              t.call(e.constructor.prototype, 'isPrototypeOf');
          if (e.constructor && !i && !s) return !1;
          for (r in e);
          return void 0 === r || t.call(e, r);
        },
        a = function (e, t) {
          r && '__proto__' === t.name
            ? r(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0,
              })
            : (e[t.name] = t.newValue);
        },
        c = function (e, n) {
          if ('__proto__' === n) {
            if (!t.call(e, n)) return;
            if (i) return i(e, n).value;
          }
          return e[n];
        };
      e.exports = function e() {
        var t,
          n,
          r,
          i,
          l,
          u,
          h = arguments[0],
          p = 1,
          d = arguments.length,
          f = !1;
        for (
          'boolean' == typeof h && ((f = h), (h = arguments[1] || {}), (p = 2)),
            (null == h || ('object' != typeof h && 'function' != typeof h)) &&
              (h = {});
          p < d;
          ++p
        )
          if (null != (t = arguments[p]))
            for (n in t)
              (r = c(h, n)),
                h !== (i = c(t, n)) &&
                  (f && i && (o(i) || (l = s(i)))
                    ? (l
                        ? ((l = !1), (u = r && s(r) ? r : []))
                        : (u = r && o(r) ? r : {}),
                      a(h, { name: n, newValue: e(f, u, i) }))
                    : void 0 !== i && a(h, { name: n, newValue: i }));
        return h;
      };
    },
    18139: function (e) {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        n = /\n/g,
        r = /^\s*/,
        i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        s = /^:\s*/,
        o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        a = /^[;\s]*/,
        c = /^\s+|\s+$/g,
        l = '';
      function u(e) {
        return e ? e.replace(c, l) : l;
      }
      e.exports = function (e, c) {
        if ('string' != typeof e)
          throw new TypeError('First argument must be a string');
        if (!e) return [];
        c = c || {};
        var h = 1,
          p = 1;
        function d(e) {
          var t = e.match(n);
          t && (h += t.length);
          var r = e.lastIndexOf('\n');
          p = ~r ? e.length - r : p + e.length;
        }
        function f() {
          var e = { line: h, column: p };
          return function (t) {
            return (t.position = new m(e)), _(), t;
          };
        }
        function m(e) {
          (this.start = e),
            (this.end = { line: h, column: p }),
            (this.source = c.source);
        }
        m.prototype.content = e;
        var E = [];
        function T(t) {
          var n = new Error(c.source + ':' + h + ':' + p + ': ' + t);
          if (
            ((n.reason = t),
            (n.filename = c.source),
            (n.line = h),
            (n.column = p),
            (n.source = e),
            !c.silent)
          )
            throw n;
          E.push(n);
        }
        function A(t) {
          var n = t.exec(e);
          if (n) {
            var r = n[0];
            return d(r), (e = e.slice(r.length)), n;
          }
        }
        function _() {
          A(r);
        }
        function g(e) {
          var t;
          for (e = e || []; (t = C()); ) !1 !== t && e.push(t);
          return e;
        }
        function C() {
          var t = f();
          if ('/' == e.charAt(0) && '*' == e.charAt(1)) {
            for (
              var n = 2;
              l != e.charAt(n) &&
              ('*' != e.charAt(n) || '/' != e.charAt(n + 1));

            )
              ++n;
            if (((n += 2), l === e.charAt(n - 1)))
              return T('End of comment missing');
            var r = e.slice(2, n - 2);
            return (
              (p += 2),
              d(r),
              (e = e.slice(n)),
              (p += 2),
              t({ type: 'comment', comment: r })
            );
          }
        }
        function S() {
          var e = f(),
            n = A(i);
          if (n) {
            if ((C(), !A(s))) return T("property missing ':'");
            var r = A(o),
              c = e({
                type: 'declaration',
                property: u(n[0].replace(t, l)),
                value: r ? u(r[0].replace(t, l)) : l,
              });
            return A(a), c;
          }
        }
        return (
          _(),
          (function () {
            var e,
              t = [];
            for (g(t); (e = S()); ) !1 !== e && (t.push(e), g(t));
            return t;
          })()
        );
      };
    },
    5174: function (e, t, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = r(n(18139));
      t.default = function (e, t) {
        var n = null;
        if (!e || 'string' != typeof e) return n;
        var r = (0, i.default)(e),
          s = 'function' == typeof t;
        return (
          r.forEach(function (e) {
            if ('declaration' === e.type) {
              var r = e.property,
                i = e.value;
              s ? t(r, i, e) : i && ((n = n || {})[r] = i);
            }
          }),
          n
        );
      };
    },
    52835: function (e, t, n) {
      'use strict';
      n.d(t, {
        ZP: function () {
          return h;
        },
      });
      const r = 'object' == typeof self ? self : globalThis,
        i = (e) =>
          ((e, t) => {
            const n = (t, n) => (e.set(n, t), t),
              i = (s) => {
                if (e.has(s)) return e.get(s);
                const [o, a] = t[s];
                switch (o) {
                  case 0:
                  case -1:
                    return n(a, s);
                  case 1: {
                    const e = n([], s);
                    for (const t of a) e.push(i(t));
                    return e;
                  }
                  case 2: {
                    const e = n({}, s);
                    for (const [t, n] of a) e[i(t)] = i(n);
                    return e;
                  }
                  case 3:
                    return n(new Date(a), s);
                  case 4: {
                    const { source: e, flags: t } = a;
                    return n(new RegExp(e, t), s);
                  }
                  case 5: {
                    const e = n(new Map(), s);
                    for (const [t, n] of a) e.set(i(t), i(n));
                    return e;
                  }
                  case 6: {
                    const e = n(new Set(), s);
                    for (const t of a) e.add(i(t));
                    return e;
                  }
                  case 7: {
                    const { name: e, message: t } = a;
                    return n(new r[e](t), s);
                  }
                  case 8:
                    return n(BigInt(a), s);
                  case 'BigInt':
                    return n(Object(BigInt(a)), s);
                }
                return n(new r[o](a), s);
              };
            return i;
          })(
            new Map(),
            e,
          )(0),
        s = '',
        { toString: o } = {},
        { keys: a } = Object,
        c = (e) => {
          const t = typeof e;
          if ('object' !== t || !e) return [0, t];
          const n = o.call(e).slice(8, -1);
          switch (n) {
            case 'Array':
              return [1, s];
            case 'Object':
              return [2, s];
            case 'Date':
              return [3, s];
            case 'RegExp':
              return [4, s];
            case 'Map':
              return [5, s];
            case 'Set':
              return [6, s];
          }
          return n.includes('Array')
            ? [1, n]
            : n.includes('Error')
              ? [7, n]
              : [2, n];
        },
        l = ([e, t]) => 0 === e && ('function' === t || 'symbol' === t),
        u = (e, { json: t, lossy: n } = {}) => {
          const r = [];
          return (
            ((e, t, n, r) => {
              const i = (e, t) => {
                  const i = r.push(e) - 1;
                  return n.set(t, i), i;
                },
                s = (r) => {
                  if (n.has(r)) return n.get(r);
                  let [o, u] = c(r);
                  switch (o) {
                    case 0: {
                      let t = r;
                      switch (u) {
                        case 'bigint':
                          (o = 8), (t = r.toString());
                          break;
                        case 'function':
                        case 'symbol':
                          if (e)
                            throw new TypeError('unable to serialize ' + u);
                          t = null;
                          break;
                        case 'undefined':
                          return i([-1], r);
                      }
                      return i([o, t], r);
                    }
                    case 1: {
                      if (u) return i([u, [...r]], r);
                      const e = [],
                        t = i([o, e], r);
                      for (const t of r) e.push(s(t));
                      return t;
                    }
                    case 2: {
                      if (u)
                        switch (u) {
                          case 'BigInt':
                            return i([u, r.toString()], r);
                          case 'Boolean':
                          case 'Number':
                          case 'String':
                            return i([u, r.valueOf()], r);
                        }
                      if (t && 'toJSON' in r) return s(r.toJSON());
                      const n = [],
                        h = i([o, n], r);
                      for (const t of a(r))
                        (!e && l(c(r[t]))) || n.push([s(t), s(r[t])]);
                      return h;
                    }
                    case 3:
                      return i([o, r.toISOString()], r);
                    case 4: {
                      const { source: e, flags: t } = r;
                      return i([o, { source: e, flags: t }], r);
                    }
                    case 5: {
                      const t = [],
                        n = i([o, t], r);
                      for (const [n, i] of r)
                        (e || (!l(c(n)) && !l(c(i)))) && t.push([s(n), s(i)]);
                      return n;
                    }
                    case 6: {
                      const t = [],
                        n = i([o, t], r);
                      for (const n of r) (!e && l(c(n))) || t.push(s(n));
                      return n;
                    }
                  }
                  const { message: h } = r;
                  return i([o, { name: u, message: h }], r);
                };
              return s;
            })(
              !(t || n),
              !!t,
              new Map(),
              r,
            )(e),
            r
          );
        };
      var h =
        'function' == typeof structuredClone
          ? (e, t) =>
              t && ('json' in t || 'lossy' in t)
                ? i(u(e, t))
                : structuredClone(e)
          : (e, t) => i(u(e, t));
    },
    25668: function (e, t, n) {
      'use strict';
      function r(e) {
        const t = [],
          n = String(e || '');
        let r = n.indexOf(','),
          i = 0,
          s = !1;
        for (; !s; ) {
          -1 === r && ((r = n.length), (s = !0));
          const e = n.slice(i, r).trim();
          (!e && s) || t.push(e), (i = r + 1), (r = n.indexOf(',', i));
        }
        return t;
      }
      function i(e, t) {
        const n = t || {};
        return ('' === e[e.length - 1] ? [...e, ''] : e)
          .join((n.padRight ? ' ' : '') + ',' + (!1 === n.padLeft ? '' : ' '))
          .trim();
      }
      n.d(t, {
        P: function () {
          return i;
        },
        Q: function () {
          return r;
        },
      });
    },
    44301: function (e, t, n) {
      'use strict';
      n.d(t, {
        T: function () {
          return i;
        },
      });
      const r = document.createElement('i');
      function i(e) {
        const t = '&' + e + ';';
        r.innerHTML = t;
        const n = r.textContent;
        return (
          (59 !== n.charCodeAt(n.length - 1) || 'semi' === e) && n !== t && n
        );
      }
    },
    24345: function (e, t, n) {
      'use strict';
      function r() {}
      function i() {}
      n.d(t, {
        ok: function () {
          return r;
        },
        t1: function () {
          return i;
        },
      });
    },
    66297: function (e, t, n) {
      'use strict';
      n.d(t, {
        Y: function () {
          return r;
        },
      });
      const r = function (e) {
        if (null == e) return s;
        if ('string' == typeof e)
          return (function (e) {
            return i(t);
            function t(t) {
              return t.tagName === e;
            }
          })(e);
        if ('object' == typeof e)
          return (function (e) {
            const t = [];
            let n = -1;
            for (; ++n < e.length; ) t[n] = r(e[n]);
            return i(s);
            function s(...e) {
              let n = -1;
              for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
              return !1;
            }
          })(e);
        if ('function' == typeof e) return i(e);
        throw new Error('Expected function, string, or array as `test`');
      };
      function i(e) {
        return function (t, n, r) {
          return Boolean(
            o(t) &&
              e.call(this, t, 'number' == typeof n ? n : void 0, r || void 0),
          );
        };
      }
      function s(e) {
        return Boolean(
          e &&
            'object' == typeof e &&
            'type' in e &&
            'element' === e.type &&
            'tagName' in e &&
            'string' == typeof e.tagName,
        );
      }
      function o(e) {
        return (
          null !== e && 'object' == typeof e && 'type' in e && 'tagName' in e
        );
      }
    },
    98367: function (e, t, n) {
      'use strict';
      n.d(t, {
        Q: function () {
          return i;
        },
      });
      const r = /[ \t\n\f\r]/g;
      function i(e) {
        return 'object' == typeof e ? 'text' === e.type && s(e.value) : s(e);
      }
      function s(e) {
        return '' === e.replace(r, '');
      }
    },
    85996: function (e, t, n) {
      'use strict';
      function r(e, t) {
        const n = String(e);
        let r = n.indexOf(t),
          i = r,
          s = 0,
          o = 0;
        if ('string' != typeof t) throw new TypeError('Expected substring');
        for (; -1 !== r; )
          r === i ? ++s > o && (o = s) : (s = 1),
            (i = r + t.length),
            (r = n.indexOf(t, i));
        return o;
      }
      n.d(t, {
        J: function () {
          return r;
        },
      });
    },
    27962: function (e, t, n) {
      'use strict';
      n.d(t, {
        B: function () {
          return i;
        },
      });
      const r = {};
      function i(e, t) {
        const n = t || r;
        return s(
          e,
          'boolean' != typeof n.includeImageAlt || n.includeImageAlt,
          'boolean' != typeof n.includeHtml || n.includeHtml,
        );
      }
      function s(e, t, n) {
        if (
          (function (e) {
            return Boolean(e && 'object' == typeof e);
          })(e)
        ) {
          if ('value' in e) return 'html' !== e.type || n ? e.value : '';
          if (t && 'alt' in e && e.alt) return e.alt;
          if ('children' in e) return o(e.children, t, n);
        }
        return Array.isArray(e) ? o(e, t, n) : '';
      }
      function o(e, t, n) {
        const r = [];
        let i = -1;
        for (; ++i < e.length; ) r[i] = s(e[i], t, n);
        return r.join('');
      }
    },
    23402: function (e, t, n) {
      'use strict';
      n.d(t, {
        w: function () {
          return s;
        },
      });
      var r = n(42761),
        i = n(15459);
      const s = {
        tokenize: function (e, t, n) {
          return function (t) {
            return (0, i.xz)(t) ? (0, r.f)(e, s, 'linePrefix')(t) : s(t);
          };
          function s(e) {
            return null === e || (0, i.Ch)(e) ? t(e) : n(e);
          }
        },
        partial: !0,
      };
    },
    42761: function (e, t, n) {
      'use strict';
      n.d(t, {
        f: function () {
          return i;
        },
      });
      var r = n(15459);
      function i(e, t, n, i) {
        const s = i ? i - 1 : Number.POSITIVE_INFINITY;
        let o = 0;
        return function (i) {
          if ((0, r.xz)(i)) return e.enter(n), a(i);
          return t(i);
        };
        function a(i) {
          return (0, r.xz)(i) && o++ < s
            ? (e.consume(i), a)
            : (e.exit(n), t(i));
        }
      }
    },
    15459: function (e, t, n) {
      'use strict';
      n.d(t, {
        AF: function () {
          return c;
        },
        Av: function () {
          return o;
        },
        B8: function () {
          return f;
        },
        Ch: function () {
          return u;
        },
        H$: function () {
          return i;
        },
        Xh: function () {
          return d;
        },
        jv: function () {
          return r;
        },
        n9: function () {
          return s;
        },
        pY: function () {
          return a;
        },
        sR: function () {
          return l;
        },
        xz: function () {
          return p;
        },
        z3: function () {
          return h;
        },
      });
      const r = m(/[A-Za-z]/),
        i = m(/[\dA-Za-z]/),
        s = m(/[#-'*+\--9=?A-Z^-~]/);
      function o(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      const a = m(/\d/),
        c = m(/[\dA-Fa-f]/),
        l = m(/[!-/:-@[-`{-~]/);
      function u(e) {
        return null !== e && e < -2;
      }
      function h(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function p(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      const d = m(/\p{P}|\p{S}/u),
        f = m(/\s/);
      function m(e) {
        return function (t) {
          return null !== t && t > -1 && e.test(String.fromCharCode(t));
        };
      }
    },
    62888: function (e, t, n) {
      'use strict';
      function r(e, t, n, r) {
        const i = e.length;
        let s,
          o = 0;
        if (
          ((t = t < 0 ? (-t > i ? 0 : i + t) : t > i ? i : t),
          (n = n > 0 ? n : 0),
          r.length < 1e4)
        )
          (s = Array.from(r)), s.unshift(t, n), e.splice(...s);
        else
          for (n && e.splice(t, n); o < r.length; )
            (s = r.slice(o, o + 1e4)),
              s.unshift(t, 0),
              e.splice(...s),
              (o += 1e4),
              (t += 1e4);
      }
      function i(e, t) {
        return e.length > 0 ? (r(e, e.length, 0, t), e) : t;
      }
      n.d(t, {
        V: function () {
          return i;
        },
        d: function () {
          return r;
        },
      });
    },
    62987: function (e, t, n) {
      'use strict';
      n.d(t, {
        r: function () {
          return i;
        },
      });
      var r = n(15459);
      function i(e) {
        return null === e || (0, r.z3)(e) || (0, r.B8)(e)
          ? 1
          : (0, r.Xh)(e)
            ? 2
            : void 0;
      }
    },
    4663: function (e, t, n) {
      'use strict';
      n.d(t, {
        W: function () {
          return s;
        },
      });
      var r = n(62888);
      const i = {}.hasOwnProperty;
      function s(e) {
        const t = {};
        let n = -1;
        for (; ++n < e.length; ) o(t, e[n]);
        return t;
      }
      function o(e, t) {
        let n;
        for (n in t) {
          const r = (i.call(e, n) ? e[n] : void 0) || (e[n] = {}),
            s = t[n];
          let o;
          if (s)
            for (o in s) {
              i.call(r, o) || (r[o] = []);
              const e = s[o];
              a(r[o], Array.isArray(e) ? e : e ? [e] : []);
            }
        }
      }
      function a(e, t) {
        let n = -1;
        const i = [];
        for (; ++n < t.length; ) ('after' === t[n].add ? e : i).push(t[n]);
        (0, r.d)(e, 0, 0, i);
      }
    },
    11098: function (e, t, n) {
      'use strict';
      function r(e) {
        return e
          .replace(/[\t\n\r ]+/g, ' ')
          .replace(/^ | $/g, '')
          .toLowerCase()
          .toUpperCase();
      }
      n.d(t, {
        d: function () {
          return r;
        },
      });
    },
    63233: function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        const r = [];
        let i = -1;
        for (; ++i < e.length; ) {
          const s = e[i].resolveAll;
          s && !r.includes(s) && ((t = s(t, n)), r.push(s));
        }
        return t;
      }
      n.d(t, {
        C: function () {
          return r;
        },
      });
    },
    91634: function (e, t, n) {
      'use strict';
      n.d(t, {
        dy: function () {
          return A;
        },
        YP: function () {
          return _;
        },
      });
      class r {
        constructor(e, t, n) {
          (this.property = e), (this.normal = t), n && (this.space = n);
        }
      }
      function i(e, t) {
        const n = {},
          i = {};
        let s = -1;
        for (; ++s < e.length; )
          Object.assign(n, e[s].property), Object.assign(i, e[s].normal);
        return new r(n, i, t);
      }
      (r.prototype.property = {}),
        (r.prototype.normal = {}),
        (r.prototype.space = null);
      var s = n(93859),
        o = n(75729);
      const a = {}.hasOwnProperty;
      function c(e) {
        const t = {},
          n = {};
        let i;
        for (i in e.properties)
          if (a.call(e.properties, i)) {
            const r = e.properties[i],
              a = new o.I(i, e.transform(e.attributes || {}, i), r, e.space);
            e.mustUseProperty &&
              e.mustUseProperty.includes(i) &&
              (a.mustUseProperty = !0),
              (t[i] = a),
              (n[(0, s.F)(i)] = i),
              (n[(0, s.F)(a.attribute)] = i);
          }
        return new r(t, n, e.space);
      }
      const l = c({
          space: 'xlink',
          transform(e, t) {
            return 'xlink:' + t.slice(5).toLowerCase();
          },
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
        }),
        u = c({
          space: 'xml',
          transform(e, t) {
            return 'xml:' + t.slice(3).toLowerCase();
          },
          properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
        });
      function h(e, t) {
        return t in e ? e[t] : t;
      }
      function p(e, t) {
        return h(e, t.toLowerCase());
      }
      const d = c({
        space: 'xmlns',
        attributes: { xmlnsxlink: 'xmlns:xlink' },
        transform: p,
        properties: { xmlns: null, xmlnsXLink: null },
      });
      var f = n(47312);
      const m = c({
          transform(e, t) {
            return 'role' === t ? t : 'aria-' + t.slice(4).toLowerCase();
          },
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: f.booleanish,
            ariaAutoComplete: null,
            ariaBusy: f.booleanish,
            ariaChecked: f.booleanish,
            ariaColCount: f.number,
            ariaColIndex: f.number,
            ariaColSpan: f.number,
            ariaControls: f.spaceSeparated,
            ariaCurrent: null,
            ariaDescribedBy: f.spaceSeparated,
            ariaDetails: null,
            ariaDisabled: f.booleanish,
            ariaDropEffect: f.spaceSeparated,
            ariaErrorMessage: null,
            ariaExpanded: f.booleanish,
            ariaFlowTo: f.spaceSeparated,
            ariaGrabbed: f.booleanish,
            ariaHasPopup: null,
            ariaHidden: f.booleanish,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: f.spaceSeparated,
            ariaLevel: f.number,
            ariaLive: null,
            ariaModal: f.booleanish,
            ariaMultiLine: f.booleanish,
            ariaMultiSelectable: f.booleanish,
            ariaOrientation: null,
            ariaOwns: f.spaceSeparated,
            ariaPlaceholder: null,
            ariaPosInSet: f.number,
            ariaPressed: f.booleanish,
            ariaReadOnly: f.booleanish,
            ariaRelevant: null,
            ariaRequired: f.booleanish,
            ariaRoleDescription: f.spaceSeparated,
            ariaRowCount: f.number,
            ariaRowIndex: f.number,
            ariaRowSpan: f.number,
            ariaSelected: f.booleanish,
            ariaSetSize: f.number,
            ariaSort: null,
            ariaValueMax: f.number,
            ariaValueMin: f.number,
            ariaValueNow: f.number,
            ariaValueText: null,
            role: null,
          },
        }),
        E = c({
          space: 'html',
          attributes: {
            acceptcharset: 'accept-charset',
            classname: 'class',
            htmlfor: 'for',
            httpequiv: 'http-equiv',
          },
          transform: p,
          mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
          properties: {
            abbr: null,
            accept: f.commaSeparated,
            acceptCharset: f.spaceSeparated,
            accessKey: f.spaceSeparated,
            action: null,
            allow: null,
            allowFullScreen: f.boolean,
            allowPaymentRequest: f.boolean,
            allowUserMedia: f.boolean,
            alt: null,
            as: null,
            async: f.boolean,
            autoCapitalize: null,
            autoComplete: f.spaceSeparated,
            autoFocus: f.boolean,
            autoPlay: f.boolean,
            blocking: f.spaceSeparated,
            capture: null,
            charSet: null,
            checked: f.boolean,
            cite: null,
            className: f.spaceSeparated,
            cols: f.number,
            colSpan: null,
            content: null,
            contentEditable: f.booleanish,
            controls: f.boolean,
            controlsList: f.spaceSeparated,
            coords: f.number | f.commaSeparated,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: f.boolean,
            defer: f.boolean,
            dir: null,
            dirName: null,
            disabled: f.boolean,
            download: f.overloadedBoolean,
            draggable: f.booleanish,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: f.boolean,
            formTarget: null,
            headers: f.spaceSeparated,
            height: f.number,
            hidden: f.boolean,
            high: f.number,
            href: null,
            hrefLang: null,
            htmlFor: f.spaceSeparated,
            httpEquiv: f.spaceSeparated,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: f.boolean,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: f.boolean,
            itemId: null,
            itemProp: f.spaceSeparated,
            itemRef: f.spaceSeparated,
            itemScope: f.boolean,
            itemType: f.spaceSeparated,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: f.boolean,
            low: f.number,
            manifest: null,
            max: null,
            maxLength: f.number,
            media: null,
            method: null,
            min: null,
            minLength: f.number,
            multiple: f.boolean,
            muted: f.boolean,
            name: null,
            nonce: null,
            noModule: f.boolean,
            noValidate: f.boolean,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: f.boolean,
            optimum: f.number,
            pattern: null,
            ping: f.spaceSeparated,
            placeholder: null,
            playsInline: f.boolean,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: f.boolean,
            referrerPolicy: null,
            rel: f.spaceSeparated,
            required: f.boolean,
            reversed: f.boolean,
            rows: f.number,
            rowSpan: f.number,
            sandbox: f.spaceSeparated,
            scope: null,
            scoped: f.boolean,
            seamless: f.boolean,
            selected: f.boolean,
            shadowRootDelegatesFocus: f.boolean,
            shadowRootMode: null,
            shape: null,
            size: f.number,
            sizes: null,
            slot: null,
            span: f.number,
            spellCheck: f.booleanish,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: f.number,
            step: null,
            style: null,
            tabIndex: f.number,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: f.boolean,
            useMap: null,
            value: f.booleanish,
            width: f.number,
            wrap: null,
            align: null,
            aLink: null,
            archive: f.spaceSeparated,
            axis: null,
            background: null,
            bgColor: null,
            border: f.number,
            borderColor: null,
            bottomMargin: f.number,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: f.boolean,
            declare: f.boolean,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: f.number,
            leftMargin: f.number,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: f.number,
            marginWidth: f.number,
            noResize: f.boolean,
            noHref: f.boolean,
            noShade: f.boolean,
            noWrap: f.boolean,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: f.number,
            rules: null,
            scheme: null,
            scrolling: f.booleanish,
            standby: null,
            summary: null,
            text: null,
            topMargin: f.number,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: f.number,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: f.boolean,
            disableRemotePlayback: f.boolean,
            prefix: null,
            property: null,
            results: f.number,
            security: null,
            unselectable: null,
          },
        }),
        T = c({
          space: 'svg',
          attributes: {
            accentHeight: 'accent-height',
            alignmentBaseline: 'alignment-baseline',
            arabicForm: 'arabic-form',
            baselineShift: 'baseline-shift',
            capHeight: 'cap-height',
            className: 'class',
            clipPath: 'clip-path',
            clipRule: 'clip-rule',
            colorInterpolation: 'color-interpolation',
            colorInterpolationFilters: 'color-interpolation-filters',
            colorProfile: 'color-profile',
            colorRendering: 'color-rendering',
            crossOrigin: 'crossorigin',
            dataType: 'datatype',
            dominantBaseline: 'dominant-baseline',
            enableBackground: 'enable-background',
            fillOpacity: 'fill-opacity',
            fillRule: 'fill-rule',
            floodColor: 'flood-color',
            floodOpacity: 'flood-opacity',
            fontFamily: 'font-family',
            fontSize: 'font-size',
            fontSizeAdjust: 'font-size-adjust',
            fontStretch: 'font-stretch',
            fontStyle: 'font-style',
            fontVariant: 'font-variant',
            fontWeight: 'font-weight',
            glyphName: 'glyph-name',
            glyphOrientationHorizontal: 'glyph-orientation-horizontal',
            glyphOrientationVertical: 'glyph-orientation-vertical',
            hrefLang: 'hreflang',
            horizAdvX: 'horiz-adv-x',
            horizOriginX: 'horiz-origin-x',
            horizOriginY: 'horiz-origin-y',
            imageRendering: 'image-rendering',
            letterSpacing: 'letter-spacing',
            lightingColor: 'lighting-color',
            markerEnd: 'marker-end',
            markerMid: 'marker-mid',
            markerStart: 'marker-start',
            navDown: 'nav-down',
            navDownLeft: 'nav-down-left',
            navDownRight: 'nav-down-right',
            navLeft: 'nav-left',
            navNext: 'nav-next',
            navPrev: 'nav-prev',
            navRight: 'nav-right',
            navUp: 'nav-up',
            navUpLeft: 'nav-up-left',
            navUpRight: 'nav-up-right',
            onAbort: 'onabort',
            onActivate: 'onactivate',
            onAfterPrint: 'onafterprint',
            onBeforePrint: 'onbeforeprint',
            onBegin: 'onbegin',
            onCancel: 'oncancel',
            onCanPlay: 'oncanplay',
            onCanPlayThrough: 'oncanplaythrough',
            onChange: 'onchange',
            onClick: 'onclick',
            onClose: 'onclose',
            onCopy: 'oncopy',
            onCueChange: 'oncuechange',
            onCut: 'oncut',
            onDblClick: 'ondblclick',
            onDrag: 'ondrag',
            onDragEnd: 'ondragend',
            onDragEnter: 'ondragenter',
            onDragExit: 'ondragexit',
            onDragLeave: 'ondragleave',
            onDragOver: 'ondragover',
            onDragStart: 'ondragstart',
            onDrop: 'ondrop',
            onDurationChange: 'ondurationchange',
            onEmptied: 'onemptied',
            onEnd: 'onend',
            onEnded: 'onended',
            onError: 'onerror',
            onFocus: 'onfocus',
            onFocusIn: 'onfocusin',
            onFocusOut: 'onfocusout',
            onHashChange: 'onhashchange',
            onInput: 'oninput',
            onInvalid: 'oninvalid',
            onKeyDown: 'onkeydown',
            onKeyPress: 'onkeypress',
            onKeyUp: 'onkeyup',
            onLoad: 'onload',
            onLoadedData: 'onloadeddata',
            onLoadedMetadata: 'onloadedmetadata',
            onLoadStart: 'onloadstart',
            onMessage: 'onmessage',
            onMouseDown: 'onmousedown',
            onMouseEnter: 'onmouseenter',
            onMouseLeave: 'onmouseleave',
            onMouseMove: 'onmousemove',
            onMouseOut: 'onmouseout',
            onMouseOver: 'onmouseover',
            onMouseUp: 'onmouseup',
            onMouseWheel: 'onmousewheel',
            onOffline: 'onoffline',
            onOnline: 'ononline',
            onPageHide: 'onpagehide',
            onPageShow: 'onpageshow',
            onPaste: 'onpaste',
            onPause: 'onpause',
            onPlay: 'onplay',
            onPlaying: 'onplaying',
            onPopState: 'onpopstate',
            onProgress: 'onprogress',
            onRateChange: 'onratechange',
            onRepeat: 'onrepeat',
            onReset: 'onreset',
            onResize: 'onresize',
            onScroll: 'onscroll',
            onSeeked: 'onseeked',
            onSeeking: 'onseeking',
            onSelect: 'onselect',
            onShow: 'onshow',
            onStalled: 'onstalled',
            onStorage: 'onstorage',
            onSubmit: 'onsubmit',
            onSuspend: 'onsuspend',
            onTimeUpdate: 'ontimeupdate',
            onToggle: 'ontoggle',
            onUnload: 'onunload',
            onVolumeChange: 'onvolumechange',
            onWaiting: 'onwaiting',
            onZoom: 'onzoom',
            overlinePosition: 'overline-position',
            overlineThickness: 'overline-thickness',
            paintOrder: 'paint-order',
            panose1: 'panose-1',
            pointerEvents: 'pointer-events',
            referrerPolicy: 'referrerpolicy',
            renderingIntent: 'rendering-intent',
            shapeRendering: 'shape-rendering',
            stopColor: 'stop-color',
            stopOpacity: 'stop-opacity',
            strikethroughPosition: 'strikethrough-position',
            strikethroughThickness: 'strikethrough-thickness',
            strokeDashArray: 'stroke-dasharray',
            strokeDashOffset: 'stroke-dashoffset',
            strokeLineCap: 'stroke-linecap',
            strokeLineJoin: 'stroke-linejoin',
            strokeMiterLimit: 'stroke-miterlimit',
            strokeOpacity: 'stroke-opacity',
            strokeWidth: 'stroke-width',
            tabIndex: 'tabindex',
            textAnchor: 'text-anchor',
            textDecoration: 'text-decoration',
            textRendering: 'text-rendering',
            transformOrigin: 'transform-origin',
            typeOf: 'typeof',
            underlinePosition: 'underline-position',
            underlineThickness: 'underline-thickness',
            unicodeBidi: 'unicode-bidi',
            unicodeRange: 'unicode-range',
            unitsPerEm: 'units-per-em',
            vAlphabetic: 'v-alphabetic',
            vHanging: 'v-hanging',
            vIdeographic: 'v-ideographic',
            vMathematical: 'v-mathematical',
            vectorEffect: 'vector-effect',
            vertAdvY: 'vert-adv-y',
            vertOriginX: 'vert-origin-x',
            vertOriginY: 'vert-origin-y',
            wordSpacing: 'word-spacing',
            writingMode: 'writing-mode',
            xHeight: 'x-height',
            playbackOrder: 'playbackorder',
            timelineBegin: 'timelinebegin',
          },
          transform: h,
          properties: {
            about: f.commaOrSpaceSeparated,
            accentHeight: f.number,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: f.number,
            amplitude: f.number,
            arabicForm: null,
            ascent: f.number,
            attributeName: null,
            attributeType: null,
            azimuth: f.number,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: f.number,
            by: null,
            calcMode: null,
            capHeight: f.number,
            className: f.spaceSeparated,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: f.number,
            diffuseConstant: f.number,
            direction: null,
            display: null,
            dur: null,
            divisor: f.number,
            dominantBaseline: null,
            download: f.boolean,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: f.number,
            enableBackground: null,
            end: null,
            event: null,
            exponent: f.number,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: f.number,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: f.commaSeparated,
            g2: f.commaSeparated,
            glyphName: f.commaSeparated,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: f.number,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: f.number,
            horizOriginX: f.number,
            horizOriginY: f.number,
            id: null,
            ideographic: f.number,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: f.number,
            k: f.number,
            k1: f.number,
            k2: f.number,
            k3: f.number,
            k4: f.number,
            kernelMatrix: f.commaOrSpaceSeparated,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: f.number,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: f.number,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: f.number,
            overlineThickness: f.number,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: f.number,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: f.spaceSeparated,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: f.number,
            pointsAtY: f.number,
            pointsAtZ: f.number,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: f.commaOrSpaceSeparated,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: f.commaOrSpaceSeparated,
            rev: f.commaOrSpaceSeparated,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: f.commaOrSpaceSeparated,
            requiredFeatures: f.commaOrSpaceSeparated,
            requiredFonts: f.commaOrSpaceSeparated,
            requiredFormats: f.commaOrSpaceSeparated,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: f.number,
            specularExponent: f.number,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: f.number,
            strikethroughThickness: f.number,
            string: null,
            stroke: null,
            strokeDashArray: f.commaOrSpaceSeparated,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: f.number,
            strokeOpacity: f.number,
            strokeWidth: null,
            style: null,
            surfaceScale: f.number,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: f.commaOrSpaceSeparated,
            tabIndex: f.number,
            tableValues: null,
            target: null,
            targetX: f.number,
            targetY: f.number,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: f.commaOrSpaceSeparated,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: f.number,
            underlineThickness: f.number,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: f.number,
            values: null,
            vAlphabetic: f.number,
            vMathematical: f.number,
            vectorEffect: null,
            vHanging: f.number,
            vIdeographic: f.number,
            version: null,
            vertAdvY: f.number,
            vertOriginX: f.number,
            vertOriginY: f.number,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: f.number,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
        }),
        A = i([u, l, d, m, E], 'html'),
        _ = i([u, l, d, m, T], 'svg');
    },
    26103: function (e, t, n) {
      'use strict';
      n.d(t, {
        s: function () {
          return l;
        },
      });
      var r = n(93859),
        i = n(75729),
        s = n(49255);
      const o = /^data[-\w.:]+$/i,
        a = /-[a-z]/g,
        c = /[A-Z]/g;
      function l(e, t) {
        const n = (0, r.F)(t);
        let l = t,
          p = s.k;
        if (n in e.normal) return e.property[e.normal[n]];
        if (n.length > 4 && 'data' === n.slice(0, 4) && o.test(t)) {
          if ('-' === t.charAt(4)) {
            const e = t.slice(5).replace(a, h);
            l = 'data' + e.charAt(0).toUpperCase() + e.slice(1);
          } else {
            const e = t.slice(4);
            if (!a.test(e)) {
              let n = e.replace(c, u);
              '-' !== n.charAt(0) && (n = '-' + n), (t = 'data' + n);
            }
          }
          p = i.I;
        }
        return new p(l, t);
      }
      function u(e) {
        return '-' + e.toLowerCase();
      }
      function h(e) {
        return e.charAt(1).toUpperCase();
      }
    },
    93859: function (e, t, n) {
      'use strict';
      function r(e) {
        return e.toLowerCase();
      }
      n.d(t, {
        F: function () {
          return r;
        },
      });
    },
    75729: function (e, t, n) {
      'use strict';
      n.d(t, {
        I: function () {
          return o;
        },
      });
      var r = n(49255),
        i = n(47312);
      const s = Object.keys(i);
      class o extends r.k {
        constructor(e, t, n, r) {
          let o = -1;
          if ((super(e, t), a(this, 'space', r), 'number' == typeof n))
            for (; ++o < s.length; ) {
              const e = s[o];
              a(this, s[o], (n & i[e]) === i[e]);
            }
        }
      }
      function a(e, t, n) {
        n && (e[t] = n);
      }
      o.prototype.defined = !0;
    },
    49255: function (e, t, n) {
      'use strict';
      n.d(t, {
        k: function () {
          return r;
        },
      });
      class r {
        constructor(e, t) {
          (this.property = e), (this.attribute = t);
        }
      }
      (r.prototype.space = null),
        (r.prototype.boolean = !1),
        (r.prototype.booleanish = !1),
        (r.prototype.overloadedBoolean = !1),
        (r.prototype.number = !1),
        (r.prototype.commaSeparated = !1),
        (r.prototype.spaceSeparated = !1),
        (r.prototype.commaOrSpaceSeparated = !1),
        (r.prototype.mustUseProperty = !1),
        (r.prototype.defined = !1);
    },
    47312: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          boolean: function () {
            return i;
          },
          booleanish: function () {
            return s;
          },
          commaOrSpaceSeparated: function () {
            return u;
          },
          commaSeparated: function () {
            return l;
          },
          number: function () {
            return a;
          },
          overloadedBoolean: function () {
            return o;
          },
          spaceSeparated: function () {
            return c;
          },
        });
      let r = 0;
      const i = h(),
        s = h(),
        o = h(),
        a = h(),
        c = h(),
        l = h(),
        u = h();
      function h() {
        return 2 ** ++r;
      }
    },
    95246: function (e, t, n) {
      'use strict';
      n.d(t, {
        U: function () {
          return dn;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          attentionMarkers: function () {
            return it;
          },
          contentInitial: function () {
            return Ze;
          },
          disable: function () {
            return st;
          },
          document: function () {
            return Ke;
          },
          flow: function () {
            return et;
          },
          flowInitial: function () {
            return Je;
          },
          insideSpan: function () {
            return rt;
          },
          string: function () {
            return tt;
          },
          text: function () {
            return nt;
          },
        });
      var i = n(24345),
        s = n(25668);
      const o = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        a = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        c = {};
      function l(e, t) {
        return ((t || c).jsx ? a : o).test(e);
      }
      var u = n(98367),
        h = n(91634),
        p = n(26103);
      const d = {
        classId: 'classID',
        dataType: 'datatype',
        itemId: 'itemID',
        strokeDashArray: 'strokeDasharray',
        strokeDashOffset: 'strokeDashoffset',
        strokeLineCap: 'strokeLinecap',
        strokeLineJoin: 'strokeLinejoin',
        strokeMiterLimit: 'strokeMiterlimit',
        typeOf: 'typeof',
        xLinkActuate: 'xlinkActuate',
        xLinkArcRole: 'xlinkArcrole',
        xLinkHref: 'xlinkHref',
        xLinkRole: 'xlinkRole',
        xLinkShow: 'xlinkShow',
        xLinkTitle: 'xlinkTitle',
        xLinkType: 'xlinkType',
        xmlnsXLink: 'xmlnsXlink',
      };
      var f = n(50342),
        m = n(5174),
        E = m.default || m,
        T = n(3980);
      function A(e) {
        return e && 'object' == typeof e
          ? 'position' in e || 'type' in e
            ? g(e.position)
            : 'start' in e || 'end' in e
              ? g(e)
              : 'line' in e || 'column' in e
                ? _(e)
                : ''
          : '';
      }
      function _(e) {
        return C(e && e.line) + ':' + C(e && e.column);
      }
      function g(e) {
        return _(e && e.start) + '-' + _(e && e.end);
      }
      function C(e) {
        return e && 'number' == typeof e ? e : 1;
      }
      class S extends Error {
        constructor(e, t, n) {
          super(), 'string' == typeof t && ((n = t), (t = void 0));
          let r = '',
            i = {},
            s = !1;
          if (
            (t &&
              (i =
                ('line' in t && 'column' in t) || ('start' in t && 'end' in t)
                  ? { place: t }
                  : 'type' in t
                    ? { ancestors: [t], place: t.position }
                    : { ...t }),
            'string' == typeof e
              ? (r = e)
              : !i.cause && e && ((s = !0), (r = e.message), (i.cause = e)),
            !i.ruleId && !i.source && 'string' == typeof n)
          ) {
            const e = n.indexOf(':');
            -1 === e
              ? (i.ruleId = n)
              : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)));
          }
          if (!i.place && i.ancestors && i.ancestors) {
            const e = i.ancestors[i.ancestors.length - 1];
            e && (i.place = e.position);
          }
          const o = i.place && 'start' in i.place ? i.place.start : i.place;
          (this.ancestors = i.ancestors || void 0),
            (this.cause = i.cause || void 0),
            (this.column = o ? o.column : void 0),
            (this.fatal = void 0),
            this.file,
            (this.message = r),
            (this.line = o ? o.line : void 0),
            (this.name = A(i.place) || '1:1'),
            (this.place = i.place || void 0),
            (this.reason = this.message),
            (this.ruleId = i.ruleId || void 0),
            (this.source = i.source || void 0),
            (this.stack =
              s && i.cause && 'string' == typeof i.cause.stack
                ? i.cause.stack
                : ''),
            this.actual,
            this.expected,
            this.note,
            this.url;
        }
      }
      (S.prototype.file = ''),
        (S.prototype.name = ''),
        (S.prototype.reason = ''),
        (S.prototype.message = ''),
        (S.prototype.stack = ''),
        (S.prototype.column = void 0),
        (S.prototype.line = void 0),
        (S.prototype.ancestors = void 0),
        (S.prototype.cause = void 0),
        (S.prototype.fatal = void 0),
        (S.prototype.place = void 0),
        (S.prototype.ruleId = void 0),
        (S.prototype.source = void 0);
      const I = {}.hasOwnProperty,
        N = new Map(),
        k = /[A-Z]/g,
        b = /-([a-z])/g,
        D = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
        O = new Set(['td', 'th']),
        R = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
      function y(e, t) {
        if (!t || void 0 === t.Fragment)
          throw new TypeError('Expected `Fragment` in options');
        const n = t.filePath || void 0;
        let r;
        if (t.development) {
          if ('function' != typeof t.jsxDEV)
            throw new TypeError(
              'Expected `jsxDEV` in options when `development: true`',
            );
          r = (function (e, t) {
            return n;
            function n(n, r, i, s) {
              const o = Array.isArray(i.children),
                a = (0, T.Pk)(n);
              return t(
                r,
                i,
                s,
                o,
                {
                  columnNumber: a ? a.column - 1 : void 0,
                  fileName: e,
                  lineNumber: a ? a.line : void 0,
                },
                void 0,
              );
            }
          })(n, t.jsxDEV);
        } else {
          if ('function' != typeof t.jsx)
            throw new TypeError('Expected `jsx` in production options');
          if ('function' != typeof t.jsxs)
            throw new TypeError('Expected `jsxs` in production options');
          r = (function (e, t, n) {
            return r;
            function r(e, r, i, s) {
              const o = Array.isArray(i.children) ? n : t;
              return s ? o(r, i, s) : o(r, i);
            }
          })(0, t.jsx, t.jsxs);
        }
        const i = {
            Fragment: t.Fragment,
            ancestors: [],
            components: t.components || {},
            create: r,
            elementAttributeNameCase: t.elementAttributeNameCase || 'react',
            evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
            filePath: n,
            ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
            passKeys: !1 !== t.passKeys,
            passNode: t.passNode || !1,
            schema: 'svg' === t.space ? h.YP : h.dy,
            stylePropertyNameCase: t.stylePropertyNameCase || 'dom',
            tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle,
          },
          s = L(i, e, void 0);
        return s && 'string' != typeof s
          ? s
          : i.create(e, i.Fragment, { children: s || void 0 }, void 0);
      }
      function L(e, t, n) {
        return 'element' === t.type
          ? (function (e, t, n) {
              const r = e.schema;
              let i = r;
              'svg' === t.tagName.toLowerCase() &&
                'html' === r.space &&
                ((i = h.YP), (e.schema = i));
              e.ancestors.push(t);
              const s = w(e, t.tagName, !1),
                o = (function (e, t) {
                  const n = {};
                  let r, i;
                  for (i in t.properties)
                    if ('children' !== i && I.call(t.properties, i)) {
                      const s = v(e, i, t.properties[i]);
                      if (s) {
                        const [i, o] = s;
                        e.tableCellAlignToStyle &&
                        'align' === i &&
                        'string' == typeof o &&
                        O.has(t.tagName)
                          ? (r = o)
                          : (n[i] = o);
                      }
                    }
                  if (r) {
                    (n.style || (n.style = {}))[
                      'css' === e.stylePropertyNameCase
                        ? 'text-align'
                        : 'textAlign'
                    ] = r;
                  }
                  return n;
                })(e, t);
              let a = x(e, t);
              D.has(t.tagName) &&
                (a = a.filter(function (e) {
                  return 'string' != typeof e || !(0, u.Q)(e);
                }));
              return (
                P(e, o, s, t),
                M(o, a),
                e.ancestors.pop(),
                (e.schema = r),
                e.create(t, s, o, n)
              );
            })(e, t, n)
          : 'mdxFlowExpression' === t.type || 'mdxTextExpression' === t.type
            ? (function (e, t) {
                if (t.data && t.data.estree && e.evaluater) {
                  const n = t.data.estree.body[0];
                  return (
                    (0, i.ok)('ExpressionStatement' === n.type),
                    e.evaluater.evaluateExpression(n.expression)
                  );
                }
                B(e, t.position);
              })(e, t)
            : 'mdxJsxFlowElement' === t.type || 'mdxJsxTextElement' === t.type
              ? (function (e, t, n) {
                  const r = e.schema;
                  let s = r;
                  'svg' === t.name &&
                    'html' === r.space &&
                    ((s = h.YP), (e.schema = s));
                  e.ancestors.push(t);
                  const o = null === t.name ? e.Fragment : w(e, t.name, !0),
                    a = (function (e, t) {
                      const n = {};
                      for (const r of t.attributes)
                        if ('mdxJsxExpressionAttribute' === r.type)
                          if (r.data && r.data.estree && e.evaluater) {
                            const t = r.data.estree.body[0];
                            (0, i.ok)('ExpressionStatement' === t.type);
                            const s = t.expression;
                            (0, i.ok)('ObjectExpression' === s.type);
                            const o = s.properties[0];
                            (0, i.ok)('SpreadElement' === o.type),
                              Object.assign(
                                n,
                                e.evaluater.evaluateExpression(o.argument),
                              );
                          } else B(e, t.position);
                        else {
                          const s = r.name;
                          let o;
                          if (r.value && 'object' == typeof r.value)
                            if (
                              r.value.data &&
                              r.value.data.estree &&
                              e.evaluater
                            ) {
                              const t = r.value.data.estree.body[0];
                              (0, i.ok)('ExpressionStatement' === t.type),
                                (o = e.evaluater.evaluateExpression(
                                  t.expression,
                                ));
                            } else B(e, t.position);
                          else o = null === r.value || r.value;
                          n[s] = o;
                        }
                      return n;
                    })(e, t),
                    c = x(e, t);
                  return (
                    P(e, a, o, t),
                    M(a, c),
                    e.ancestors.pop(),
                    (e.schema = r),
                    e.create(t, o, a, n)
                  );
                })(e, t, n)
              : 'mdxjsEsm' === t.type
                ? (function (e, t) {
                    if (t.data && t.data.estree && e.evaluater)
                      return e.evaluater.evaluateProgram(t.data.estree);
                    B(e, t.position);
                  })(e, t)
                : 'root' === t.type
                  ? (function (e, t, n) {
                      const r = {};
                      return M(r, x(e, t)), e.create(t, e.Fragment, r, n);
                    })(e, t, n)
                  : 'text' === t.type
                    ? (function (e, t) {
                        return t.value;
                      })(0, t)
                    : void 0;
      }
      function P(e, t, n, r) {
        'string' != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
      }
      function M(e, t) {
        if (t.length > 0) {
          const n = t.length > 1 ? t : t[0];
          n && (e.children = n);
        }
      }
      function x(e, t) {
        const n = [];
        let r = -1;
        const i = e.passKeys ? new Map() : N;
        for (; ++r < t.children.length; ) {
          const s = t.children[r];
          let o;
          if (e.passKeys) {
            const e =
              'element' === s.type
                ? s.tagName
                : 'mdxJsxFlowElement' === s.type ||
                    'mdxJsxTextElement' === s.type
                  ? s.name
                  : void 0;
            if (e) {
              const t = i.get(e) || 0;
              (o = e + '-' + t), i.set(e, t + 1);
            }
          }
          const a = L(e, s, o);
          void 0 !== a && n.push(a);
        }
        return n;
      }
      function v(e, t, n) {
        const r = (0, p.s)(e.schema, t);
        if (!(null == n || ('number' == typeof n && Number.isNaN(n)))) {
          if (
            (Array.isArray(n) &&
              (n = r.commaSeparated ? (0, s.P)(n) : (0, f.P)(n)),
            'style' === r.property)
          ) {
            let t =
              'object' == typeof n
                ? n
                : (function (e, t) {
                    const n = {};
                    try {
                      E(t, r);
                    } catch (t) {
                      if (!e.ignoreInvalidStyle) {
                        const n = t,
                          r = new S('Cannot parse `style` attribute', {
                            ancestors: e.ancestors,
                            cause: n,
                            ruleId: 'style',
                            source: 'hast-util-to-jsx-runtime',
                          });
                        throw (
                          ((r.file = e.filePath || void 0),
                          (r.url = R + '#cannot-parse-style-attribute'),
                          r)
                        );
                      }
                    }
                    return n;
                    function r(e, t) {
                      let r = e;
                      '--' !== r.slice(0, 2) &&
                        ('-ms-' === r.slice(0, 4) && (r = 'ms-' + r.slice(4)),
                        (r = r.replace(b, H))),
                        (n[r] = t);
                    }
                  })(e, String(n));
            return (
              'css' === e.stylePropertyNameCase &&
                (t = (function (e) {
                  const t = {};
                  let n;
                  for (n in e) I.call(e, n) && (t[F(n)] = e[n]);
                  return t;
                })(t)),
              ['style', t]
            );
          }
          return [
            'react' === e.elementAttributeNameCase && r.space
              ? d[r.property] || r.property
              : r.attribute,
            n,
          ];
        }
      }
      function w(e, t, n) {
        let r;
        if (n)
          if (t.includes('.')) {
            const e = t.split('.');
            let n,
              s = -1;
            for (; ++s < e.length; ) {
              const t = l(e[s])
                ? { type: 'Identifier', name: e[s] }
                : { type: 'Literal', value: e[s] };
              n = n
                ? {
                    type: 'MemberExpression',
                    object: n,
                    property: t,
                    computed: Boolean(s && 'Literal' === t.type),
                    optional: !1,
                  }
                : t;
            }
            (0, i.ok)(n, 'always a result'), (r = n);
          } else
            r =
              l(t) && !/^[a-z]/.test(t)
                ? { type: 'Identifier', name: t }
                : { type: 'Literal', value: t };
        else r = { type: 'Literal', value: t };
        if ('Literal' === r.type) {
          const t = r.value;
          return I.call(e.components, t) ? e.components[t] : t;
        }
        if (e.evaluater) return e.evaluater.evaluateExpression(r);
        B(e);
      }
      function B(e, t) {
        const n = new S('Cannot handle MDX estrees without `createEvaluater`', {
          ancestors: e.ancestors,
          place: t,
          ruleId: 'mdx-estree',
          source: 'hast-util-to-jsx-runtime',
        });
        throw (
          ((n.file = e.filePath || void 0),
          (n.url = R + '#cannot-handle-mdx-estrees-without-createevaluater'),
          n)
        );
      }
      function F(e) {
        let t = e.replace(k, U);
        return 'ms-' === t.slice(0, 3) && (t = '-' + t), t;
      }
      function H(e, t) {
        return t.toUpperCase();
      }
      function U(e) {
        return '-' + e.toLowerCase();
      }
      const G = {
        action: ['form'],
        cite: ['blockquote', 'del', 'ins', 'q'],
        data: ['object'],
        formAction: ['button', 'input'],
        href: ['a', 'area', 'base', 'link'],
        icon: ['menuitem'],
        itemId: null,
        manifest: ['html'],
        ping: ['a', 'area'],
        poster: ['video'],
        src: [
          'audio',
          'embed',
          'iframe',
          'img',
          'input',
          'script',
          'source',
          'track',
          'video',
        ],
      };
      var z = n(86074),
        Y = n(27962),
        j = n(62888);
      function q(e) {
        const t = {};
        let n,
          r,
          i,
          s,
          o,
          a,
          c,
          l = -1;
        for (; ++l < e.length; ) {
          for (; l in t; ) l = t[l];
          if (
            ((n = e[l]),
            l &&
              'chunkFlow' === n[1].type &&
              'listItemPrefix' === e[l - 1][1].type &&
              ((a = n[1]._tokenizer.events),
              (i = 0),
              i < a.length && 'lineEndingBlank' === a[i][1].type && (i += 2),
              i < a.length && 'content' === a[i][1].type))
          )
            for (; ++i < a.length && 'content' !== a[i][1].type; )
              'chunkText' === a[i][1].type &&
                ((a[i][1]._isInFirstContentOfListItem = !0), i++);
          if ('enter' === n[0])
            n[1].contentType &&
              (Object.assign(t, W(e, l)), (l = t[l]), (c = !0));
          else if (n[1]._container) {
            for (
              i = l, r = void 0;
              i-- &&
              ((s = e[i]),
              'lineEnding' === s[1].type || 'lineEndingBlank' === s[1].type);

            )
              'enter' === s[0] &&
                (r && (e[r][1].type = 'lineEndingBlank'),
                (s[1].type = 'lineEnding'),
                (r = i));
            r &&
              ((n[1].end = Object.assign({}, e[r][1].start)),
              (o = e.slice(r, l)),
              o.unshift(n),
              (0, j.d)(e, r, l - r + 1, o));
          }
        }
        return !c;
      }
      function W(e, t) {
        const n = e[t][1],
          r = e[t][2];
        let i = t - 1;
        const s = [],
          o = n._tokenizer || r.parser[n.contentType](n.start),
          a = o.events,
          c = [],
          l = {};
        let u,
          h,
          p = -1,
          d = n,
          f = 0,
          m = 0;
        const E = [m];
        for (; d; ) {
          for (; e[++i][1] !== d; );
          s.push(i),
            d._tokenizer ||
              ((u = r.sliceStream(d)),
              d.next || u.push(null),
              h && o.defineSkip(d.start),
              d._isInFirstContentOfListItem &&
                (o._gfmTasklistFirstContentOfListItem = !0),
              o.write(u),
              d._isInFirstContentOfListItem &&
                (o._gfmTasklistFirstContentOfListItem = void 0)),
            (h = d),
            (d = d.next);
        }
        for (d = n; ++p < a.length; )
          'exit' === a[p][0] &&
            'enter' === a[p - 1][0] &&
            a[p][1].type === a[p - 1][1].type &&
            a[p][1].start.line !== a[p][1].end.line &&
            ((m = p + 1),
            E.push(m),
            (d._tokenizer = void 0),
            (d.previous = void 0),
            (d = d.next));
        for (
          o.events = [],
            d ? ((d._tokenizer = void 0), (d.previous = void 0)) : E.pop(),
            p = E.length;
          p--;

        ) {
          const t = a.slice(E[p], E[p + 1]),
            n = s.pop();
          c.unshift([n, n + t.length - 1]), (0, j.d)(e, n, 2, t);
        }
        for (p = -1; ++p < c.length; )
          (l[f + c[p][0]] = f + c[p][1]), (f += c[p][1] - c[p][0] - 1);
        return l;
      }
      var V = n(4663),
        Q = n(42761),
        X = n(15459);
      const $ = {
        tokenize: function (e) {
          const t = e.attempt(
            this.parser.constructs.contentInitial,
            function (n) {
              if (null === n) return void e.consume(n);
              return (
                e.enter('lineEnding'),
                e.consume(n),
                e.exit('lineEnding'),
                (0, Q.f)(e, t, 'linePrefix')
              );
            },
            function (t) {
              return e.enter('paragraph'), r(t);
            },
          );
          let n;
          return t;
          function r(t) {
            const r = e.enter('chunkText', {
              contentType: 'text',
              previous: n,
            });
            return n && (n.next = r), (n = r), i(t);
          }
          function i(t) {
            return null === t
              ? (e.exit('chunkText'), e.exit('paragraph'), void e.consume(t))
              : (0, X.Ch)(t)
                ? (e.consume(t), e.exit('chunkText'), r)
                : (e.consume(t), i);
          }
        },
      };
      const K = {
          tokenize: function (e) {
            const t = this,
              n = [];
            let r,
              i,
              s,
              o = 0;
            return a;
            function a(r) {
              if (o < n.length) {
                const i = n[o];
                return (
                  (t.containerState = i[1]),
                  e.attempt(i[0].continuation, c, l)(r)
                );
              }
              return l(r);
            }
            function c(e) {
              if ((o++, t.containerState._closeFlow)) {
                (t.containerState._closeFlow = void 0), r && A();
                const n = t.events.length;
                let i,
                  s = n;
                for (; s--; )
                  if (
                    'exit' === t.events[s][0] &&
                    'chunkFlow' === t.events[s][1].type
                  ) {
                    i = t.events[s][1].end;
                    break;
                  }
                T(o);
                let a = n;
                for (; a < t.events.length; )
                  (t.events[a][1].end = Object.assign({}, i)), a++;
                return (
                  (0, j.d)(t.events, s + 1, 0, t.events.slice(n)),
                  (t.events.length = a),
                  l(e)
                );
              }
              return a(e);
            }
            function l(i) {
              if (o === n.length) {
                if (!r) return p(i);
                if (r.currentConstruct && r.currentConstruct.concrete)
                  return f(i);
                t.interrupt = Boolean(
                  r.currentConstruct && !r._gfmTableDynamicInterruptHack,
                );
              }
              return (t.containerState = {}), e.check(Z, u, h)(i);
            }
            function u(e) {
              return r && A(), T(o), p(e);
            }
            function h(e) {
              return (
                (t.parser.lazy[t.now().line] = o !== n.length),
                (s = t.now().offset),
                f(e)
              );
            }
            function p(n) {
              return (t.containerState = {}), e.attempt(Z, d, f)(n);
            }
            function d(e) {
              return o++, n.push([t.currentConstruct, t.containerState]), p(e);
            }
            function f(n) {
              return null === n
                ? (r && A(), T(0), void e.consume(n))
                : ((r = r || t.parser.flow(t.now())),
                  e.enter('chunkFlow', {
                    contentType: 'flow',
                    previous: i,
                    _tokenizer: r,
                  }),
                  m(n));
            }
            function m(n) {
              return null === n
                ? (E(e.exit('chunkFlow'), !0), T(0), void e.consume(n))
                : (0, X.Ch)(n)
                  ? (e.consume(n),
                    E(e.exit('chunkFlow')),
                    (o = 0),
                    (t.interrupt = void 0),
                    a)
                  : (e.consume(n), m);
            }
            function E(e, n) {
              const a = t.sliceStream(e);
              if (
                (n && a.push(null),
                (e.previous = i),
                i && (i.next = e),
                (i = e),
                r.defineSkip(e.start),
                r.write(a),
                t.parser.lazy[e.start.line])
              ) {
                let e = r.events.length;
                for (; e--; )
                  if (
                    r.events[e][1].start.offset < s &&
                    (!r.events[e][1].end || r.events[e][1].end.offset > s)
                  )
                    return;
                const n = t.events.length;
                let i,
                  a,
                  c = n;
                for (; c--; )
                  if (
                    'exit' === t.events[c][0] &&
                    'chunkFlow' === t.events[c][1].type
                  ) {
                    if (i) {
                      a = t.events[c][1].end;
                      break;
                    }
                    i = !0;
                  }
                for (T(o), e = n; e < t.events.length; )
                  (t.events[e][1].end = Object.assign({}, a)), e++;
                (0, j.d)(t.events, c + 1, 0, t.events.slice(n)),
                  (t.events.length = e);
              }
            }
            function T(r) {
              let i = n.length;
              for (; i-- > r; ) {
                const r = n[i];
                (t.containerState = r[1]), r[0].exit.call(t, e);
              }
              n.length = r;
            }
            function A() {
              r.write([null]),
                (i = void 0),
                (r = void 0),
                (t.containerState._closeFlow = void 0);
            }
          },
        },
        Z = {
          tokenize: function (e, t, n) {
            return (0, Q.f)(
              e,
              e.attempt(this.parser.constructs.document, t, n),
              'linePrefix',
              this.parser.constructs.disable.null.includes('codeIndented')
                ? void 0
                : 4,
            );
          },
        };
      var J = n(23402);
      const ee = {
          tokenize: function (e, t) {
            let n;
            return function (t) {
              return (
                e.enter('content'),
                (n = e.enter('chunkContent', { contentType: 'content' })),
                r(t)
              );
            };
            function r(t) {
              return null === t
                ? i(t)
                : (0, X.Ch)(t)
                  ? e.check(te, s, i)(t)
                  : (e.consume(t), r);
            }
            function i(n) {
              return e.exit('chunkContent'), e.exit('content'), t(n);
            }
            function s(t) {
              return (
                e.consume(t),
                e.exit('chunkContent'),
                (n.next = e.enter('chunkContent', {
                  contentType: 'content',
                  previous: n,
                })),
                (n = n.next),
                r
              );
            }
          },
          resolve: function (e) {
            return q(e), e;
          },
        },
        te = {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              return (
                e.exit('chunkContent'),
                e.enter('lineEnding'),
                e.consume(t),
                e.exit('lineEnding'),
                (0, Q.f)(e, i, 'linePrefix')
              );
            };
            function i(i) {
              if (null === i || (0, X.Ch)(i)) return n(i);
              const s = r.events[r.events.length - 1];
              return !r.parser.constructs.disable.null.includes(
                'codeIndented',
              ) &&
                s &&
                'linePrefix' === s[1].type &&
                s[2].sliceSerialize(s[1], !0).length >= 4
                ? t(i)
                : e.interrupt(r.parser.constructs.flow, n, t)(i);
            }
          },
          partial: !0,
        };
      const ne = {
        tokenize: function (e) {
          const t = this,
            n = e.attempt(
              J.w,
              function (r) {
                if (null === r) return void e.consume(r);
                return (
                  e.enter('lineEndingBlank'),
                  e.consume(r),
                  e.exit('lineEndingBlank'),
                  (t.currentConstruct = void 0),
                  n
                );
              },
              e.attempt(
                this.parser.constructs.flowInitial,
                r,
                (0, Q.f)(
                  e,
                  e.attempt(this.parser.constructs.flow, r, e.attempt(ee, r)),
                  'linePrefix',
                ),
              ),
            );
          return n;
          function r(r) {
            if (null !== r)
              return (
                e.enter('lineEnding'),
                e.consume(r),
                e.exit('lineEnding'),
                (t.currentConstruct = void 0),
                n
              );
            e.consume(r);
          }
        },
      };
      const re = { resolveAll: ae() },
        ie = oe('string'),
        se = oe('text');
      function oe(e) {
        return {
          tokenize: function (t) {
            const n = this,
              r = this.parser.constructs[e],
              i = t.attempt(r, s, o);
            return s;
            function s(e) {
              return c(e) ? i(e) : o(e);
            }
            function o(e) {
              if (null !== e) return t.enter('data'), t.consume(e), a;
              t.consume(e);
            }
            function a(e) {
              return c(e) ? (t.exit('data'), i(e)) : (t.consume(e), a);
            }
            function c(e) {
              if (null === e) return !0;
              const t = r[e];
              let i = -1;
              if (t)
                for (; ++i < t.length; ) {
                  const e = t[i];
                  if (!e.previous || e.previous.call(n, n.previous)) return !0;
                }
              return !1;
            }
          },
          resolveAll: ae('text' === e ? ce : void 0),
        };
      }
      function ae(e) {
        return function (t, n) {
          let r,
            i = -1;
          for (; ++i <= t.length; )
            void 0 === r
              ? t[i] && 'data' === t[i][1].type && ((r = i), i++)
              : (t[i] && 'data' === t[i][1].type) ||
                (i !== r + 2 &&
                  ((t[r][1].end = t[i - 1][1].end),
                  t.splice(r + 2, i - r - 2),
                  (i = r + 2)),
                (r = void 0));
          return e ? e(t, n) : t;
        };
      }
      function ce(e, t) {
        let n = 0;
        for (; ++n <= e.length; )
          if (
            (n === e.length || 'lineEnding' === e[n][1].type) &&
            'data' === e[n - 1][1].type
          ) {
            const r = e[n - 1][1],
              i = t.sliceStream(r);
            let s,
              o = i.length,
              a = -1,
              c = 0;
            for (; o--; ) {
              const e = i[o];
              if ('string' == typeof e) {
                for (a = e.length; 32 === e.charCodeAt(a - 1); ) c++, a--;
                if (a) break;
                a = -1;
              } else if (-2 === e) (s = !0), c++;
              else if (-1 !== e) {
                o++;
                break;
              }
            }
            if (c) {
              const i = {
                type:
                  n === e.length || s || c < 2
                    ? 'lineSuffix'
                    : 'hardBreakTrailing',
                start: {
                  line: r.end.line,
                  column: r.end.column - c,
                  offset: r.end.offset - c,
                  _index: r.start._index + o,
                  _bufferIndex: o ? a : r.start._bufferIndex + a,
                },
                end: Object.assign({}, r.end),
              };
              (r.end = Object.assign({}, i.start)),
                r.start.offset === r.end.offset
                  ? Object.assign(r, i)
                  : (e.splice(n, 0, ['enter', i, t], ['exit', i, t]), (n += 2));
            }
            n++;
          }
        return e;
      }
      var le = n(63233);
      function ue(e, t, n) {
        let r = Object.assign(
          n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 },
          { _index: 0, _bufferIndex: -1 },
        );
        const i = {},
          s = [];
        let o = [],
          a = [],
          c = !0;
        const l = {
            consume: function (e) {
              (0, X.Ch)(e)
                ? (r.line++,
                  (r.column = 1),
                  (r.offset += -3 === e ? 2 : 1),
                  g())
                : -1 !== e && (r.column++, r.offset++);
              r._bufferIndex < 0
                ? r._index++
                : (r._bufferIndex++,
                  r._bufferIndex === o[r._index].length &&
                    ((r._bufferIndex = -1), r._index++));
              (u.previous = e), (c = !0);
            },
            enter: function (e, t) {
              const n = t || {};
              return (
                (n.type = e),
                (n.start = f()),
                u.events.push(['enter', n, u]),
                a.push(n),
                n
              );
            },
            exit: function (e) {
              const t = a.pop();
              return (t.end = f()), u.events.push(['exit', t, u]), t;
            },
            attempt: A(function (e, t) {
              _(e, t.from);
            }),
            check: A(T),
            interrupt: A(T, { interrupt: !0 }),
          },
          u = {
            previous: null,
            code: null,
            containerState: {},
            events: [],
            parser: e,
            sliceStream: d,
            sliceSerialize: function (e, t) {
              return (function (e, t) {
                let n = -1;
                const r = [];
                let i;
                for (; ++n < e.length; ) {
                  const s = e[n];
                  let o;
                  if ('string' == typeof s) o = s;
                  else
                    switch (s) {
                      case -5:
                        o = '\r';
                        break;
                      case -4:
                        o = '\n';
                        break;
                      case -3:
                        o = '\r\n';
                        break;
                      case -2:
                        o = t ? ' ' : '\t';
                        break;
                      case -1:
                        if (!t && i) continue;
                        o = ' ';
                        break;
                      default:
                        o = String.fromCharCode(s);
                    }
                  (i = -2 === s), r.push(o);
                }
                return r.join('');
              })(d(e), t);
            },
            now: f,
            defineSkip: function (e) {
              (i[e.line] = e.column), g();
            },
            write: function (e) {
              if (((o = (0, j.V)(o, e)), m(), null !== o[o.length - 1]))
                return [];
              return _(t, 0), (u.events = (0, le.C)(s, u.events, u)), u.events;
            },
          };
        let h,
          p = t.tokenize.call(u, l);
        return t.resolveAll && s.push(t), u;
        function d(e) {
          return (function (e, t) {
            const n = t.start._index,
              r = t.start._bufferIndex,
              i = t.end._index,
              s = t.end._bufferIndex;
            let o;
            if (n === i) o = [e[n].slice(r, s)];
            else {
              if (((o = e.slice(n, i)), r > -1)) {
                const e = o[0];
                'string' == typeof e ? (o[0] = e.slice(r)) : o.shift();
              }
              s > 0 && o.push(e[i].slice(0, s));
            }
            return o;
          })(o, e);
        }
        function f() {
          const {
            line: e,
            column: t,
            offset: n,
            _index: i,
            _bufferIndex: s,
          } = r;
          return { line: e, column: t, offset: n, _index: i, _bufferIndex: s };
        }
        function m() {
          let e;
          for (; r._index < o.length; ) {
            const t = o[r._index];
            if ('string' == typeof t)
              for (
                e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
                r._index === e && r._bufferIndex < t.length;

              )
                E(t.charCodeAt(r._bufferIndex));
            else E(t);
          }
        }
        function E(e) {
          (c = void 0), (h = e), (p = p(e));
        }
        function T(e, t) {
          t.restore();
        }
        function A(e, t) {
          return function (n, i, s) {
            let o, h, p, d;
            return Array.isArray(n)
              ? m(n)
              : 'tokenize' in n
                ? m([n])
                : (function (e) {
                    return t;
                    function t(t) {
                      const n = null !== t && e[t],
                        r = null !== t && e.null;
                      return m([
                        ...(Array.isArray(n) ? n : n ? [n] : []),
                        ...(Array.isArray(r) ? r : r ? [r] : []),
                      ])(t);
                    }
                  })(n);
            function m(e) {
              return (o = e), (h = 0), 0 === e.length ? s : E(e[h]);
            }
            function E(e) {
              return function (n) {
                (d = (function () {
                  const e = f(),
                    t = u.previous,
                    n = u.currentConstruct,
                    i = u.events.length,
                    s = Array.from(a);
                  return { restore: o, from: i };
                  function o() {
                    (r = e),
                      (u.previous = t),
                      (u.currentConstruct = n),
                      (u.events.length = i),
                      (a = s),
                      g();
                  }
                })()),
                  (p = e),
                  e.partial || (u.currentConstruct = e);
                if (e.name && u.parser.constructs.disable.null.includes(e.name))
                  return A(n);
                return e.tokenize.call(
                  t ? Object.assign(Object.create(u), t) : u,
                  l,
                  T,
                  A,
                )(n);
              };
            }
            function T(t) {
              return (c = !0), e(p, d), i;
            }
            function A(e) {
              return (c = !0), d.restore(), ++h < o.length ? E(o[h]) : s;
            }
          };
        }
        function _(e, t) {
          e.resolveAll && !s.includes(e) && s.push(e),
            e.resolve &&
              (0, j.d)(
                u.events,
                t,
                u.events.length - t,
                e.resolve(u.events.slice(t), u),
              ),
            e.resolveTo && (u.events = e.resolveTo(u.events, u));
        }
        function g() {
          r.line in i &&
            r.column < 2 &&
            ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
        }
      }
      const he = {
        name: 'thematicBreak',
        tokenize: function (e, t, n) {
          let r,
            i = 0;
          return function (t) {
            return (
              e.enter('thematicBreak'),
              (function (e) {
                return (r = e), s(e);
              })(t)
            );
          };
          function s(s) {
            return s === r
              ? (e.enter('thematicBreakSequence'), o(s))
              : i >= 3 && (null === s || (0, X.Ch)(s))
                ? (e.exit('thematicBreak'), t(s))
                : n(s);
          }
          function o(t) {
            return t === r
              ? (e.consume(t), i++, o)
              : (e.exit('thematicBreakSequence'),
                (0, X.xz)(t) ? (0, Q.f)(e, s, 'whitespace')(t) : s(t));
          }
        },
      };
      const pe = {
          name: 'list',
          tokenize: function (e, t, n) {
            const r = this,
              i = r.events[r.events.length - 1];
            let s =
                i && 'linePrefix' === i[1].type
                  ? i[2].sliceSerialize(i[1], !0).length
                  : 0,
              o = 0;
            return function (t) {
              const i =
                r.containerState.type ||
                (42 === t || 43 === t || 45 === t
                  ? 'listUnordered'
                  : 'listOrdered');
              if (
                'listUnordered' === i
                  ? !r.containerState.marker || t === r.containerState.marker
                  : (0, X.pY)(t)
              ) {
                if (
                  (r.containerState.type ||
                    ((r.containerState.type = i),
                    e.enter(i, { _container: !0 })),
                  'listUnordered' === i)
                )
                  return (
                    e.enter('listItemPrefix'),
                    42 === t || 45 === t ? e.check(he, n, c)(t) : c(t)
                  );
                if (!r.interrupt || 49 === t)
                  return (
                    e.enter('listItemPrefix'), e.enter('listItemValue'), a(t)
                  );
              }
              return n(t);
            };
            function a(t) {
              return (0, X.pY)(t) && ++o < 10
                ? (e.consume(t), a)
                : (!r.interrupt || o < 2) &&
                    (r.containerState.marker
                      ? t === r.containerState.marker
                      : 41 === t || 46 === t)
                  ? (e.exit('listItemValue'), c(t))
                  : n(t);
            }
            function c(t) {
              return (
                e.enter('listItemMarker'),
                e.consume(t),
                e.exit('listItemMarker'),
                (r.containerState.marker = r.containerState.marker || t),
                e.check(J.w, r.interrupt ? n : l, e.attempt(de, h, u))
              );
            }
            function l(e) {
              return (r.containerState.initialBlankLine = !0), s++, h(e);
            }
            function u(t) {
              return (0, X.xz)(t)
                ? (e.enter('listItemPrefixWhitespace'),
                  e.consume(t),
                  e.exit('listItemPrefixWhitespace'),
                  h)
                : n(t);
            }
            function h(n) {
              return (
                (r.containerState.size =
                  s + r.sliceSerialize(e.exit('listItemPrefix'), !0).length),
                t(n)
              );
            }
          },
          continuation: {
            tokenize: function (e, t, n) {
              const r = this;
              return (
                (r.containerState._closeFlow = void 0),
                e.check(
                  J.w,
                  function (n) {
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.furtherBlankLines ||
                        r.containerState.initialBlankLine),
                      (0, Q.f)(
                        e,
                        t,
                        'listItemIndent',
                        r.containerState.size + 1,
                      )(n)
                    );
                  },
                  function (n) {
                    if (r.containerState.furtherBlankLines || !(0, X.xz)(n))
                      return (
                        (r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        i(n)
                      );
                    return (
                      (r.containerState.furtherBlankLines = void 0),
                      (r.containerState.initialBlankLine = void 0),
                      e.attempt(fe, t, i)(n)
                    );
                  },
                )
              );
              function i(i) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  (0, Q.f)(
                    e,
                    e.attempt(pe, t, n),
                    'linePrefix',
                    r.parser.constructs.disable.null.includes('codeIndented')
                      ? void 0
                      : 4,
                  )(i)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
        },
        de = {
          tokenize: function (e, t, n) {
            const r = this;
            return (0, Q.f)(
              e,
              function (e) {
                const i = r.events[r.events.length - 1];
                return !(0, X.xz)(e) &&
                  i &&
                  'listItemPrefixWhitespace' === i[1].type
                  ? t(e)
                  : n(e);
              },
              'listItemPrefixWhitespace',
              r.parser.constructs.disable.null.includes('codeIndented')
                ? void 0
                : 5,
            );
          },
          partial: !0,
        },
        fe = {
          tokenize: function (e, t, n) {
            const r = this;
            return (0, Q.f)(
              e,
              function (e) {
                const i = r.events[r.events.length - 1];
                return i &&
                  'listItemIndent' === i[1].type &&
                  i[2].sliceSerialize(i[1], !0).length === r.containerState.size
                  ? t(e)
                  : n(e);
              },
              'listItemIndent',
              r.containerState.size + 1,
            );
          },
          partial: !0,
        };
      const me = {
        name: 'blockQuote',
        tokenize: function (e, t, n) {
          const r = this;
          return function (t) {
            if (62 === t) {
              const n = r.containerState;
              return (
                n.open ||
                  (e.enter('blockQuote', { _container: !0 }), (n.open = !0)),
                e.enter('blockQuotePrefix'),
                e.enter('blockQuoteMarker'),
                e.consume(t),
                e.exit('blockQuoteMarker'),
                i
              );
            }
            return n(t);
          };
          function i(n) {
            return (0, X.xz)(n)
              ? (e.enter('blockQuotePrefixWhitespace'),
                e.consume(n),
                e.exit('blockQuotePrefixWhitespace'),
                e.exit('blockQuotePrefix'),
                t)
              : (e.exit('blockQuotePrefix'), t(n));
          }
        },
        continuation: {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              if ((0, X.xz)(t))
                return (0, Q.f)(
                  e,
                  i,
                  'linePrefix',
                  r.parser.constructs.disable.null.includes('codeIndented')
                    ? void 0
                    : 4,
                )(t);
              return i(t);
            };
            function i(r) {
              return e.attempt(me, t, n)(r);
            }
          },
        },
        exit: function (e) {
          e.exit('blockQuote');
        },
      };
      function Ee(e, t, n, r, i, s, o, a, c) {
        const l = c || Number.POSITIVE_INFINITY;
        let u = 0;
        return function (t) {
          if (60 === t)
            return (
              e.enter(r), e.enter(i), e.enter(s), e.consume(t), e.exit(s), h
            );
          if (null === t || 32 === t || 41 === t || (0, X.Av)(t)) return n(t);
          return (
            e.enter(r),
            e.enter(o),
            e.enter(a),
            e.enter('chunkString', { contentType: 'string' }),
            f(t)
          );
        };
        function h(n) {
          return 62 === n
            ? (e.enter(s), e.consume(n), e.exit(s), e.exit(i), e.exit(r), t)
            : (e.enter(a),
              e.enter('chunkString', { contentType: 'string' }),
              p(n));
        }
        function p(t) {
          return 62 === t
            ? (e.exit('chunkString'), e.exit(a), h(t))
            : null === t || 60 === t || (0, X.Ch)(t)
              ? n(t)
              : (e.consume(t), 92 === t ? d : p);
        }
        function d(t) {
          return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t);
        }
        function f(i) {
          return u || (null !== i && 41 !== i && !(0, X.z3)(i))
            ? u < l && 40 === i
              ? (e.consume(i), u++, f)
              : 41 === i
                ? (e.consume(i), u--, f)
                : null === i || 32 === i || 40 === i || (0, X.Av)(i)
                  ? n(i)
                  : (e.consume(i), 92 === i ? m : f)
            : (e.exit('chunkString'), e.exit(a), e.exit(o), e.exit(r), t(i));
        }
        function m(t) {
          return 40 === t || 41 === t || 92 === t ? (e.consume(t), f) : f(t);
        }
      }
      function Te(e, t, n, r, i, s) {
        const o = this;
        let a,
          c = 0;
        return function (t) {
          return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(s), l;
        };
        function l(h) {
          return c > 999 ||
            null === h ||
            91 === h ||
            (93 === h && !a) ||
            (94 === h && !c && '_hiddenFootnoteSupport' in o.parser.constructs)
            ? n(h)
            : 93 === h
              ? (e.exit(s), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t)
              : (0, X.Ch)(h)
                ? (e.enter('lineEnding'), e.consume(h), e.exit('lineEnding'), l)
                : (e.enter('chunkString', { contentType: 'string' }), u(h));
        }
        function u(t) {
          return null === t || 91 === t || 93 === t || (0, X.Ch)(t) || c++ > 999
            ? (e.exit('chunkString'), l(t))
            : (e.consume(t), a || (a = !(0, X.xz)(t)), 92 === t ? h : u);
        }
        function h(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), c++, u)
            : u(t);
        }
      }
      function Ae(e, t, n, r, i, s) {
        let o;
        return function (t) {
          if (34 === t || 39 === t || 40 === t)
            return (
              e.enter(r),
              e.enter(i),
              e.consume(t),
              e.exit(i),
              (o = 40 === t ? 41 : t),
              a
            );
          return n(t);
        };
        function a(n) {
          return n === o
            ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
            : (e.enter(s), c(n));
        }
        function c(t) {
          return t === o
            ? (e.exit(s), a(o))
            : null === t
              ? n(t)
              : (0, X.Ch)(t)
                ? (e.enter('lineEnding'),
                  e.consume(t),
                  e.exit('lineEnding'),
                  (0, Q.f)(e, c, 'linePrefix'))
                : (e.enter('chunkString', { contentType: 'string' }), l(t));
        }
        function l(t) {
          return t === o || null === t || (0, X.Ch)(t)
            ? (e.exit('chunkString'), c(t))
            : (e.consume(t), 92 === t ? u : l);
        }
        function u(t) {
          return t === o || 92 === t ? (e.consume(t), l) : l(t);
        }
      }
      function _e(e, t) {
        let n;
        return function r(i) {
          if ((0, X.Ch)(i))
            return (
              e.enter('lineEnding'),
              e.consume(i),
              e.exit('lineEnding'),
              (n = !0),
              r
            );
          if ((0, X.xz)(i))
            return (0, Q.f)(e, r, n ? 'linePrefix' : 'lineSuffix')(i);
          return t(i);
        };
      }
      var ge = n(11098);
      const Ce = {
          name: 'definition',
          tokenize: function (e, t, n) {
            const r = this;
            let i;
            return function (t) {
              return (
                e.enter('definition'),
                (function (t) {
                  return Te.call(
                    r,
                    e,
                    s,
                    n,
                    'definitionLabel',
                    'definitionLabelMarker',
                    'definitionLabelString',
                  )(t);
                })(t)
              );
            };
            function s(t) {
              return (
                (i = (0, ge.d)(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1),
                )),
                58 === t
                  ? (e.enter('definitionMarker'),
                    e.consume(t),
                    e.exit('definitionMarker'),
                    o)
                  : n(t)
              );
            }
            function o(t) {
              return (0, X.z3)(t) ? _e(e, a)(t) : a(t);
            }
            function a(t) {
              return Ee(
                e,
                c,
                n,
                'definitionDestination',
                'definitionDestinationLiteral',
                'definitionDestinationLiteralMarker',
                'definitionDestinationRaw',
                'definitionDestinationString',
              )(t);
            }
            function c(t) {
              return e.attempt(Se, l, l)(t);
            }
            function l(t) {
              return (0, X.xz)(t) ? (0, Q.f)(e, u, 'whitespace')(t) : u(t);
            }
            function u(s) {
              return null === s || (0, X.Ch)(s)
                ? (e.exit('definition'), r.parser.defined.push(i), t(s))
                : n(s);
            }
          },
        },
        Se = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (0, X.z3)(t) ? _e(e, r)(t) : n(t);
            };
            function r(t) {
              return Ae(
                e,
                i,
                n,
                'definitionTitle',
                'definitionTitleMarker',
                'definitionTitleString',
              )(t);
            }
            function i(t) {
              return (0, X.xz)(t) ? (0, Q.f)(e, s, 'whitespace')(t) : s(t);
            }
            function s(e) {
              return null === e || (0, X.Ch)(e) ? t(e) : n(e);
            }
          },
          partial: !0,
        };
      const Ie = {
          name: 'codeIndented',
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              return (
                e.enter('codeIndented'), (0, Q.f)(e, i, 'linePrefix', 5)(t)
              );
            };
            function i(e) {
              const t = r.events[r.events.length - 1];
              return t &&
                'linePrefix' === t[1].type &&
                t[2].sliceSerialize(t[1], !0).length >= 4
                ? s(e)
                : n(e);
            }
            function s(t) {
              return null === t
                ? a(t)
                : (0, X.Ch)(t)
                  ? e.attempt(Ne, s, a)(t)
                  : (e.enter('codeFlowValue'), o(t));
            }
            function o(t) {
              return null === t || (0, X.Ch)(t)
                ? (e.exit('codeFlowValue'), s(t))
                : (e.consume(t), o);
            }
            function a(n) {
              return e.exit('codeIndented'), t(n);
            }
          },
        },
        Ne = {
          tokenize: function (e, t, n) {
            const r = this;
            return i;
            function i(t) {
              return r.parser.lazy[r.now().line]
                ? n(t)
                : (0, X.Ch)(t)
                  ? (e.enter('lineEnding'),
                    e.consume(t),
                    e.exit('lineEnding'),
                    i)
                  : (0, Q.f)(e, s, 'linePrefix', 5)(t);
            }
            function s(e) {
              const s = r.events[r.events.length - 1];
              return s &&
                'linePrefix' === s[1].type &&
                s[2].sliceSerialize(s[1], !0).length >= 4
                ? t(e)
                : (0, X.Ch)(e)
                  ? i(e)
                  : n(e);
            }
          },
          partial: !0,
        };
      const ke = {
        name: 'headingAtx',
        tokenize: function (e, t, n) {
          let r = 0;
          return function (t) {
            return (
              e.enter('atxHeading'),
              (function (t) {
                return e.enter('atxHeadingSequence'), i(t);
              })(t)
            );
          };
          function i(t) {
            return 35 === t && r++ < 6
              ? (e.consume(t), i)
              : null === t || (0, X.z3)(t)
                ? (e.exit('atxHeadingSequence'), s(t))
                : n(t);
          }
          function s(n) {
            return 35 === n
              ? (e.enter('atxHeadingSequence'), o(n))
              : null === n || (0, X.Ch)(n)
                ? (e.exit('atxHeading'), t(n))
                : (0, X.xz)(n)
                  ? (0, Q.f)(e, s, 'whitespace')(n)
                  : (e.enter('atxHeadingText'), a(n));
          }
          function o(t) {
            return 35 === t
              ? (e.consume(t), o)
              : (e.exit('atxHeadingSequence'), s(t));
          }
          function a(t) {
            return null === t || 35 === t || (0, X.z3)(t)
              ? (e.exit('atxHeadingText'), s(t))
              : (e.consume(t), a);
          }
        },
        resolve: function (e, t) {
          let n,
            r,
            i = e.length - 2,
            s = 3;
          'whitespace' === e[s][1].type && (s += 2);
          i - 2 > s && 'whitespace' === e[i][1].type && (i -= 2);
          'atxHeadingSequence' === e[i][1].type &&
            (s === i - 1 || (i - 4 > s && 'whitespace' === e[i - 2][1].type)) &&
            (i -= s + 1 === i ? 2 : 4);
          i > s &&
            ((n = {
              type: 'atxHeadingText',
              start: e[s][1].start,
              end: e[i][1].end,
            }),
            (r = {
              type: 'chunkText',
              start: e[s][1].start,
              end: e[i][1].end,
              contentType: 'text',
            }),
            (0, j.d)(e, s, i - s + 1, [
              ['enter', n, t],
              ['enter', r, t],
              ['exit', r, t],
              ['exit', n, t],
            ]));
          return e;
        },
      };
      const be = {
        name: 'setextUnderline',
        tokenize: function (e, t, n) {
          const r = this;
          let i;
          return function (t) {
            let o,
              a = r.events.length;
            for (; a--; )
              if (
                'lineEnding' !== r.events[a][1].type &&
                'linePrefix' !== r.events[a][1].type &&
                'content' !== r.events[a][1].type
              ) {
                o = 'paragraph' === r.events[a][1].type;
                break;
              }
            if (!r.parser.lazy[r.now().line] && (r.interrupt || o))
              return (
                e.enter('setextHeadingLine'),
                (i = t),
                (function (t) {
                  return e.enter('setextHeadingLineSequence'), s(t);
                })(t)
              );
            return n(t);
          };
          function s(t) {
            return t === i
              ? (e.consume(t), s)
              : (e.exit('setextHeadingLineSequence'),
                (0, X.xz)(t) ? (0, Q.f)(e, o, 'lineSuffix')(t) : o(t));
          }
          function o(r) {
            return null === r || (0, X.Ch)(r)
              ? (e.exit('setextHeadingLine'), t(r))
              : n(r);
          }
        },
        resolveTo: function (e, t) {
          let n,
            r,
            i,
            s = e.length;
          for (; s--; )
            if ('enter' === e[s][0]) {
              if ('content' === e[s][1].type) {
                n = s;
                break;
              }
              'paragraph' === e[s][1].type && (r = s);
            } else
              'content' === e[s][1].type && e.splice(s, 1),
                i || 'definition' !== e[s][1].type || (i = s);
          const o = {
            type: 'setextHeading',
            start: Object.assign({}, e[r][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
          };
          (e[r][1].type = 'setextHeadingText'),
            i
              ? (e.splice(r, 0, ['enter', o, t]),
                e.splice(i + 1, 0, ['exit', e[n][1], t]),
                (e[n][1].end = Object.assign({}, e[i][1].end)))
              : (e[n][1] = o);
          return e.push(['exit', o, t]), e;
        },
      };
      const De = [
          'address',
          'article',
          'aside',
          'base',
          'basefont',
          'blockquote',
          'body',
          'caption',
          'center',
          'col',
          'colgroup',
          'dd',
          'details',
          'dialog',
          'dir',
          'div',
          'dl',
          'dt',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'frame',
          'frameset',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hr',
          'html',
          'iframe',
          'legend',
          'li',
          'link',
          'main',
          'menu',
          'menuitem',
          'nav',
          'noframes',
          'ol',
          'optgroup',
          'option',
          'p',
          'param',
          'search',
          'section',
          'summary',
          'table',
          'tbody',
          'td',
          'tfoot',
          'th',
          'thead',
          'title',
          'tr',
          'track',
          'ul',
        ],
        Oe = ['pre', 'script', 'style', 'textarea'],
        Re = {
          name: 'htmlFlow',
          tokenize: function (e, t, n) {
            const r = this;
            let i, s, o, a, c;
            return function (t) {
              return (function (t) {
                return (
                  e.enter('htmlFlow'), e.enter('htmlFlowData'), e.consume(t), l
                );
              })(t);
            };
            function l(a) {
              return 33 === a
                ? (e.consume(a), u)
                : 47 === a
                  ? (e.consume(a), (s = !0), d)
                  : 63 === a
                    ? (e.consume(a), (i = 3), r.interrupt ? t : x)
                    : (0, X.jv)(a)
                      ? (e.consume(a), (o = String.fromCharCode(a)), f)
                      : n(a);
            }
            function u(s) {
              return 45 === s
                ? (e.consume(s), (i = 2), h)
                : 91 === s
                  ? (e.consume(s), (i = 5), (a = 0), p)
                  : (0, X.jv)(s)
                    ? (e.consume(s), (i = 4), r.interrupt ? t : x)
                    : n(s);
            }
            function h(i) {
              return 45 === i ? (e.consume(i), r.interrupt ? t : x) : n(i);
            }
            function p(i) {
              const s = 'CDATA[';
              return i === s.charCodeAt(a++)
                ? (e.consume(i), 6 === a ? (r.interrupt ? t : b) : p)
                : n(i);
            }
            function d(t) {
              return (0, X.jv)(t)
                ? (e.consume(t), (o = String.fromCharCode(t)), f)
                : n(t);
            }
            function f(a) {
              if (null === a || 47 === a || 62 === a || (0, X.z3)(a)) {
                const c = 47 === a,
                  l = o.toLowerCase();
                return c || s || !Oe.includes(l)
                  ? De.includes(o.toLowerCase())
                    ? ((i = 6),
                      c ? (e.consume(a), m) : r.interrupt ? t(a) : b(a))
                    : ((i = 7),
                      r.interrupt && !r.parser.lazy[r.now().line]
                        ? n(a)
                        : s
                          ? E(a)
                          : T(a))
                  : ((i = 1), r.interrupt ? t(a) : b(a));
              }
              return 45 === a || (0, X.H$)(a)
                ? (e.consume(a), (o += String.fromCharCode(a)), f)
                : n(a);
            }
            function m(i) {
              return 62 === i ? (e.consume(i), r.interrupt ? t : b) : n(i);
            }
            function E(t) {
              return (0, X.xz)(t) ? (e.consume(t), E) : N(t);
            }
            function T(t) {
              return 47 === t
                ? (e.consume(t), N)
                : 58 === t || 95 === t || (0, X.jv)(t)
                  ? (e.consume(t), A)
                  : (0, X.xz)(t)
                    ? (e.consume(t), T)
                    : N(t);
            }
            function A(t) {
              return 45 === t ||
                46 === t ||
                58 === t ||
                95 === t ||
                (0, X.H$)(t)
                ? (e.consume(t), A)
                : _(t);
            }
            function _(t) {
              return 61 === t
                ? (e.consume(t), g)
                : (0, X.xz)(t)
                  ? (e.consume(t), _)
                  : T(t);
            }
            function g(t) {
              return null === t || 60 === t || 61 === t || 62 === t || 96 === t
                ? n(t)
                : 34 === t || 39 === t
                  ? (e.consume(t), (c = t), C)
                  : (0, X.xz)(t)
                    ? (e.consume(t), g)
                    : S(t);
            }
            function C(t) {
              return t === c
                ? (e.consume(t), (c = null), I)
                : null === t || (0, X.Ch)(t)
                  ? n(t)
                  : (e.consume(t), C);
            }
            function S(t) {
              return null === t ||
                34 === t ||
                39 === t ||
                47 === t ||
                60 === t ||
                61 === t ||
                62 === t ||
                96 === t ||
                (0, X.z3)(t)
                ? _(t)
                : (e.consume(t), S);
            }
            function I(e) {
              return 47 === e || 62 === e || (0, X.xz)(e) ? T(e) : n(e);
            }
            function N(t) {
              return 62 === t ? (e.consume(t), k) : n(t);
            }
            function k(t) {
              return null === t || (0, X.Ch)(t)
                ? b(t)
                : (0, X.xz)(t)
                  ? (e.consume(t), k)
                  : n(t);
            }
            function b(t) {
              return 45 === t && 2 === i
                ? (e.consume(t), y)
                : 60 === t && 1 === i
                  ? (e.consume(t), L)
                  : 62 === t && 4 === i
                    ? (e.consume(t), v)
                    : 63 === t && 3 === i
                      ? (e.consume(t), x)
                      : 93 === t && 5 === i
                        ? (e.consume(t), M)
                        : !(0, X.Ch)(t) || (6 !== i && 7 !== i)
                          ? null === t || (0, X.Ch)(t)
                            ? (e.exit('htmlFlowData'), D(t))
                            : (e.consume(t), b)
                          : (e.exit('htmlFlowData'), e.check(ye, w, D)(t));
            }
            function D(t) {
              return e.check(Le, O, w)(t);
            }
            function O(t) {
              return (
                e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), R
              );
            }
            function R(t) {
              return null === t || (0, X.Ch)(t)
                ? D(t)
                : (e.enter('htmlFlowData'), b(t));
            }
            function y(t) {
              return 45 === t ? (e.consume(t), x) : b(t);
            }
            function L(t) {
              return 47 === t ? (e.consume(t), (o = ''), P) : b(t);
            }
            function P(t) {
              if (62 === t) {
                const n = o.toLowerCase();
                return Oe.includes(n) ? (e.consume(t), v) : b(t);
              }
              return (0, X.jv)(t) && o.length < 8
                ? (e.consume(t), (o += String.fromCharCode(t)), P)
                : b(t);
            }
            function M(t) {
              return 93 === t ? (e.consume(t), x) : b(t);
            }
            function x(t) {
              return 62 === t
                ? (e.consume(t), v)
                : 45 === t && 2 === i
                  ? (e.consume(t), x)
                  : b(t);
            }
            function v(t) {
              return null === t || (0, X.Ch)(t)
                ? (e.exit('htmlFlowData'), w(t))
                : (e.consume(t), v);
            }
            function w(n) {
              return e.exit('htmlFlow'), t(n);
            }
          },
          resolveTo: function (e) {
            let t = e.length;
            for (
              ;
              t-- && ('enter' !== e[t][0] || 'htmlFlow' !== e[t][1].type);

            );
            t > 1 &&
              'linePrefix' === e[t - 2][1].type &&
              ((e[t][1].start = e[t - 2][1].start),
              (e[t + 1][1].start = e[t - 2][1].start),
              e.splice(t - 2, 2));
            return e;
          },
          concrete: !0,
        },
        ye = {
          tokenize: function (e, t, n) {
            return function (r) {
              return (
                e.enter('lineEnding'),
                e.consume(r),
                e.exit('lineEnding'),
                e.attempt(J.w, t, n)
              );
            };
          },
          partial: !0,
        },
        Le = {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              if ((0, X.Ch)(t))
                return (
                  e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), i
                );
              return n(t);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        };
      const Pe = {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              if (null === t) return n(t);
              return (
                e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), i
              );
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        Me = {
          name: 'codeFenced',
          tokenize: function (e, t, n) {
            const r = this,
              i = {
                tokenize: function (e, t, n) {
                  let i = 0;
                  return o;
                  function o(t) {
                    return (
                      e.enter('lineEnding'),
                      e.consume(t),
                      e.exit('lineEnding'),
                      c
                    );
                  }
                  function c(t) {
                    return (
                      e.enter('codeFencedFence'),
                      (0, X.xz)(t)
                        ? (0, Q.f)(
                            e,
                            l,
                            'linePrefix',
                            r.parser.constructs.disable.null.includes(
                              'codeIndented',
                            )
                              ? void 0
                              : 4,
                          )(t)
                        : l(t)
                    );
                  }
                  function l(t) {
                    return t === s
                      ? (e.enter('codeFencedFenceSequence'), u(t))
                      : n(t);
                  }
                  function u(t) {
                    return t === s
                      ? (i++, e.consume(t), u)
                      : i >= a
                        ? (e.exit('codeFencedFenceSequence'),
                          (0, X.xz)(t) ? (0, Q.f)(e, h, 'whitespace')(t) : h(t))
                        : n(t);
                  }
                  function h(r) {
                    return null === r || (0, X.Ch)(r)
                      ? (e.exit('codeFencedFence'), t(r))
                      : n(r);
                  }
                },
                partial: !0,
              };
            let s,
              o = 0,
              a = 0;
            return function (t) {
              return (function (t) {
                const n = r.events[r.events.length - 1];
                return (
                  (o =
                    n && 'linePrefix' === n[1].type
                      ? n[2].sliceSerialize(n[1], !0).length
                      : 0),
                  (s = t),
                  e.enter('codeFenced'),
                  e.enter('codeFencedFence'),
                  e.enter('codeFencedFenceSequence'),
                  c(t)
                );
              })(t);
            };
            function c(t) {
              return t === s
                ? (a++, e.consume(t), c)
                : a < 3
                  ? n(t)
                  : (e.exit('codeFencedFenceSequence'),
                    (0, X.xz)(t) ? (0, Q.f)(e, l, 'whitespace')(t) : l(t));
            }
            function l(n) {
              return null === n || (0, X.Ch)(n)
                ? (e.exit('codeFencedFence'),
                  r.interrupt ? t(n) : e.check(Pe, d, A)(n))
                : (e.enter('codeFencedFenceInfo'),
                  e.enter('chunkString', { contentType: 'string' }),
                  u(n));
            }
            function u(t) {
              return null === t || (0, X.Ch)(t)
                ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), l(t))
                : (0, X.xz)(t)
                  ? (e.exit('chunkString'),
                    e.exit('codeFencedFenceInfo'),
                    (0, Q.f)(e, h, 'whitespace')(t))
                  : 96 === t && t === s
                    ? n(t)
                    : (e.consume(t), u);
            }
            function h(t) {
              return null === t || (0, X.Ch)(t)
                ? l(t)
                : (e.enter('codeFencedFenceMeta'),
                  e.enter('chunkString', { contentType: 'string' }),
                  p(t));
            }
            function p(t) {
              return null === t || (0, X.Ch)(t)
                ? (e.exit('chunkString'), e.exit('codeFencedFenceMeta'), l(t))
                : 96 === t && t === s
                  ? n(t)
                  : (e.consume(t), p);
            }
            function d(t) {
              return e.attempt(i, A, f)(t);
            }
            function f(t) {
              return (
                e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), m
              );
            }
            function m(t) {
              return o > 0 && (0, X.xz)(t)
                ? (0, Q.f)(e, E, 'linePrefix', o + 1)(t)
                : E(t);
            }
            function E(t) {
              return null === t || (0, X.Ch)(t)
                ? e.check(Pe, d, A)(t)
                : (e.enter('codeFlowValue'), T(t));
            }
            function T(t) {
              return null === t || (0, X.Ch)(t)
                ? (e.exit('codeFlowValue'), E(t))
                : (e.consume(t), T);
            }
            function A(n) {
              return e.exit('codeFenced'), t(n);
            }
          },
          concrete: !0,
        };
      var xe = n(44301);
      const ve = {
        name: 'characterReference',
        tokenize: function (e, t, n) {
          const r = this;
          let i,
            s,
            o = 0;
          return function (t) {
            return (
              e.enter('characterReference'),
              e.enter('characterReferenceMarker'),
              e.consume(t),
              e.exit('characterReferenceMarker'),
              a
            );
          };
          function a(t) {
            return 35 === t
              ? (e.enter('characterReferenceMarkerNumeric'),
                e.consume(t),
                e.exit('characterReferenceMarkerNumeric'),
                c)
              : (e.enter('characterReferenceValue'),
                (i = 31),
                (s = X.H$),
                l(t));
          }
          function c(t) {
            return 88 === t || 120 === t
              ? (e.enter('characterReferenceMarkerHexadecimal'),
                e.consume(t),
                e.exit('characterReferenceMarkerHexadecimal'),
                e.enter('characterReferenceValue'),
                (i = 6),
                (s = X.AF),
                l)
              : (e.enter('characterReferenceValue'), (i = 7), (s = X.pY), l(t));
          }
          function l(a) {
            if (59 === a && o) {
              const i = e.exit('characterReferenceValue');
              return s !== X.H$ || (0, xe.T)(r.sliceSerialize(i))
                ? (e.enter('characterReferenceMarker'),
                  e.consume(a),
                  e.exit('characterReferenceMarker'),
                  e.exit('characterReference'),
                  t)
                : n(a);
            }
            return s(a) && o++ < i ? (e.consume(a), l) : n(a);
          }
        },
      };
      const we = {
        name: 'characterEscape',
        tokenize: function (e, t, n) {
          return function (t) {
            return (
              e.enter('characterEscape'),
              e.enter('escapeMarker'),
              e.consume(t),
              e.exit('escapeMarker'),
              r
            );
          };
          function r(r) {
            return (0, X.sR)(r)
              ? (e.enter('characterEscapeValue'),
                e.consume(r),
                e.exit('characterEscapeValue'),
                e.exit('characterEscape'),
                t)
              : n(r);
          }
        },
      };
      const Be = {
        name: 'lineEnding',
        tokenize: function (e, t) {
          return function (n) {
            return (
              e.enter('lineEnding'),
              e.consume(n),
              e.exit('lineEnding'),
              (0, Q.f)(e, t, 'linePrefix')
            );
          };
        },
      };
      const Fe = {
          name: 'labelEnd',
          tokenize: function (e, t, n) {
            const r = this;
            let i,
              s,
              o = r.events.length;
            for (; o--; )
              if (
                ('labelImage' === r.events[o][1].type ||
                  'labelLink' === r.events[o][1].type) &&
                !r.events[o][1]._balanced
              ) {
                i = r.events[o][1];
                break;
              }
            return function (t) {
              if (!i) return n(t);
              if (i._inactive) return u(t);
              return (
                (s = r.parser.defined.includes(
                  (0, ge.d)(r.sliceSerialize({ start: i.end, end: r.now() })),
                )),
                e.enter('labelEnd'),
                e.enter('labelMarker'),
                e.consume(t),
                e.exit('labelMarker'),
                e.exit('labelEnd'),
                a
              );
            };
            function a(t) {
              return 40 === t
                ? e.attempt(He, l, s ? l : u)(t)
                : 91 === t
                  ? e.attempt(Ue, l, s ? c : u)(t)
                  : s
                    ? l(t)
                    : u(t);
            }
            function c(t) {
              return e.attempt(Ge, l, u)(t);
            }
            function l(e) {
              return t(e);
            }
            function u(e) {
              return (i._balanced = !0), n(e);
            }
          },
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              s,
              o = e.length,
              a = 0;
            for (; o--; )
              if (((n = e[o][1]), r)) {
                if (
                  'link' === n.type ||
                  ('labelLink' === n.type && n._inactive)
                )
                  break;
                'enter' === e[o][0] &&
                  'labelLink' === n.type &&
                  (n._inactive = !0);
              } else if (i) {
                if (
                  'enter' === e[o][0] &&
                  ('labelImage' === n.type || 'labelLink' === n.type) &&
                  !n._balanced &&
                  ((r = o), 'labelLink' !== n.type)
                ) {
                  a = 2;
                  break;
                }
              } else 'labelEnd' === n.type && (i = o);
            const c = {
                type: 'labelLink' === e[r][1].type ? 'link' : 'image',
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[e.length - 1][1].end),
              },
              l = {
                type: 'label',
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[i][1].end),
              },
              u = {
                type: 'labelText',
                start: Object.assign({}, e[r + a + 2][1].end),
                end: Object.assign({}, e[i - 2][1].start),
              };
            return (
              (s = [
                ['enter', c, t],
                ['enter', l, t],
              ]),
              (s = (0, j.V)(s, e.slice(r + 1, r + a + 3))),
              (s = (0, j.V)(s, [['enter', u, t]])),
              (s = (0, j.V)(
                s,
                (0, le.C)(
                  t.parser.constructs.insideSpan.null,
                  e.slice(r + a + 4, i - 3),
                  t,
                ),
              )),
              (s = (0, j.V)(s, [
                ['exit', u, t],
                e[i - 2],
                e[i - 1],
                ['exit', l, t],
              ])),
              (s = (0, j.V)(s, e.slice(i + 1))),
              (s = (0, j.V)(s, [['exit', c, t]])),
              (0, j.d)(e, r, e.length, s),
              e
            );
          },
          resolveAll: function (e) {
            let t = -1;
            for (; ++t < e.length; ) {
              const n = e[t][1];
              ('labelImage' !== n.type &&
                'labelLink' !== n.type &&
                'labelEnd' !== n.type) ||
                (e.splice(t + 1, 'labelImage' === n.type ? 4 : 2),
                (n.type = 'data'),
                t++);
            }
            return e;
          },
        },
        He = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter('resource'),
                e.enter('resourceMarker'),
                e.consume(t),
                e.exit('resourceMarker'),
                r
              );
            };
            function r(t) {
              return (0, X.z3)(t) ? _e(e, i)(t) : i(t);
            }
            function i(t) {
              return 41 === t
                ? l(t)
                : Ee(
                    e,
                    s,
                    o,
                    'resourceDestination',
                    'resourceDestinationLiteral',
                    'resourceDestinationLiteralMarker',
                    'resourceDestinationRaw',
                    'resourceDestinationString',
                    32,
                  )(t);
            }
            function s(t) {
              return (0, X.z3)(t) ? _e(e, a)(t) : l(t);
            }
            function o(e) {
              return n(e);
            }
            function a(t) {
              return 34 === t || 39 === t || 40 === t
                ? Ae(
                    e,
                    c,
                    n,
                    'resourceTitle',
                    'resourceTitleMarker',
                    'resourceTitleString',
                  )(t)
                : l(t);
            }
            function c(t) {
              return (0, X.z3)(t) ? _e(e, l)(t) : l(t);
            }
            function l(r) {
              return 41 === r
                ? (e.enter('resourceMarker'),
                  e.consume(r),
                  e.exit('resourceMarker'),
                  e.exit('resource'),
                  t)
                : n(r);
            }
          },
        },
        Ue = {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              return Te.call(
                r,
                e,
                i,
                s,
                'reference',
                'referenceMarker',
                'referenceString',
              )(t);
            };
            function i(e) {
              return r.parser.defined.includes(
                (0, ge.d)(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1),
                ),
              )
                ? t(e)
                : n(e);
            }
            function s(e) {
              return n(e);
            }
          },
        },
        Ge = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter('reference'),
                e.enter('referenceMarker'),
                e.consume(t),
                e.exit('referenceMarker'),
                r
              );
            };
            function r(r) {
              return 93 === r
                ? (e.enter('referenceMarker'),
                  e.consume(r),
                  e.exit('referenceMarker'),
                  e.exit('reference'),
                  t)
                : n(r);
            }
          },
        };
      const ze = {
        name: 'labelStartImage',
        tokenize: function (e, t, n) {
          const r = this;
          return function (t) {
            return (
              e.enter('labelImage'),
              e.enter('labelImageMarker'),
              e.consume(t),
              e.exit('labelImageMarker'),
              i
            );
          };
          function i(t) {
            return 91 === t
              ? (e.enter('labelMarker'),
                e.consume(t),
                e.exit('labelMarker'),
                e.exit('labelImage'),
                s)
              : n(t);
          }
          function s(e) {
            return 94 === e && '_hiddenFootnoteSupport' in r.parser.constructs
              ? n(e)
              : t(e);
          }
        },
        resolveAll: Fe.resolveAll,
      };
      var Ye = n(62987);
      const je = {
        name: 'attention',
        tokenize: function (e, t) {
          const n = this.parser.constructs.attentionMarkers.null,
            r = this.previous,
            i = (0, Ye.r)(r);
          let s;
          return function (t) {
            return (s = t), e.enter('attentionSequence'), o(t);
          };
          function o(a) {
            if (a === s) return e.consume(a), o;
            const c = e.exit('attentionSequence'),
              l = (0, Ye.r)(a),
              u = !l || (2 === l && i) || n.includes(a),
              h = !i || (2 === i && l) || n.includes(r);
            return (
              (c._open = Boolean(42 === s ? u : u && (i || !h))),
              (c._close = Boolean(42 === s ? h : h && (l || !u))),
              t(a)
            );
          }
        },
        resolveAll: function (e, t) {
          let n,
            r,
            i,
            s,
            o,
            a,
            c,
            l,
            u = -1;
          for (; ++u < e.length; )
            if (
              'enter' === e[u][0] &&
              'attentionSequence' === e[u][1].type &&
              e[u][1]._close
            )
              for (n = u; n--; )
                if (
                  'exit' === e[n][0] &&
                  'attentionSequence' === e[n][1].type &&
                  e[n][1]._open &&
                  t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                    t.sliceSerialize(e[u][1]).charCodeAt(0)
                ) {
                  if (
                    (e[n][1]._close || e[u][1]._open) &&
                    (e[u][1].end.offset - e[u][1].start.offset) % 3 &&
                    !(
                      (e[n][1].end.offset -
                        e[n][1].start.offset +
                        e[u][1].end.offset -
                        e[u][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  a =
                    e[n][1].end.offset - e[n][1].start.offset > 1 &&
                    e[u][1].end.offset - e[u][1].start.offset > 1
                      ? 2
                      : 1;
                  const h = Object.assign({}, e[n][1].end),
                    p = Object.assign({}, e[u][1].start);
                  qe(h, -a),
                    qe(p, a),
                    (s = {
                      type: a > 1 ? 'strongSequence' : 'emphasisSequence',
                      start: h,
                      end: Object.assign({}, e[n][1].end),
                    }),
                    (o = {
                      type: a > 1 ? 'strongSequence' : 'emphasisSequence',
                      start: Object.assign({}, e[u][1].start),
                      end: p,
                    }),
                    (i = {
                      type: a > 1 ? 'strongText' : 'emphasisText',
                      start: Object.assign({}, e[n][1].end),
                      end: Object.assign({}, e[u][1].start),
                    }),
                    (r = {
                      type: a > 1 ? 'strong' : 'emphasis',
                      start: Object.assign({}, s.start),
                      end: Object.assign({}, o.end),
                    }),
                    (e[n][1].end = Object.assign({}, s.start)),
                    (e[u][1].start = Object.assign({}, o.end)),
                    (c = []),
                    e[n][1].end.offset - e[n][1].start.offset &&
                      (c = (0, j.V)(c, [
                        ['enter', e[n][1], t],
                        ['exit', e[n][1], t],
                      ])),
                    (c = (0, j.V)(c, [
                      ['enter', r, t],
                      ['enter', s, t],
                      ['exit', s, t],
                      ['enter', i, t],
                    ])),
                    (c = (0, j.V)(
                      c,
                      (0, le.C)(
                        t.parser.constructs.insideSpan.null,
                        e.slice(n + 1, u),
                        t,
                      ),
                    )),
                    (c = (0, j.V)(c, [
                      ['exit', i, t],
                      ['enter', o, t],
                      ['exit', o, t],
                      ['exit', r, t],
                    ])),
                    e[u][1].end.offset - e[u][1].start.offset
                      ? ((l = 2),
                        (c = (0, j.V)(c, [
                          ['enter', e[u][1], t],
                          ['exit', e[u][1], t],
                        ])))
                      : (l = 0),
                    (0, j.d)(e, n - 1, u - n + 3, c),
                    (u = n + c.length - l - 2);
                  break;
                }
          u = -1;
          for (; ++u < e.length; )
            'attentionSequence' === e[u][1].type && (e[u][1].type = 'data');
          return e;
        },
      };
      function qe(e, t) {
        (e.column += t), (e.offset += t), (e._bufferIndex += t);
      }
      const We = {
        name: 'autolink',
        tokenize: function (e, t, n) {
          let r = 0;
          return function (t) {
            return (
              e.enter('autolink'),
              e.enter('autolinkMarker'),
              e.consume(t),
              e.exit('autolinkMarker'),
              e.enter('autolinkProtocol'),
              i
            );
          };
          function i(t) {
            return (0, X.jv)(t) ? (e.consume(t), s) : c(t);
          }
          function s(e) {
            return 43 === e || 45 === e || 46 === e || (0, X.H$)(e)
              ? ((r = 1), o(e))
              : c(e);
          }
          function o(t) {
            return 58 === t
              ? (e.consume(t), (r = 0), a)
              : (43 === t || 45 === t || 46 === t || (0, X.H$)(t)) && r++ < 32
                ? (e.consume(t), o)
                : ((r = 0), c(t));
          }
          function a(r) {
            return 62 === r
              ? (e.exit('autolinkProtocol'),
                e.enter('autolinkMarker'),
                e.consume(r),
                e.exit('autolinkMarker'),
                e.exit('autolink'),
                t)
              : null === r || 32 === r || 60 === r || (0, X.Av)(r)
                ? n(r)
                : (e.consume(r), a);
          }
          function c(t) {
            return 64 === t
              ? (e.consume(t), l)
              : (0, X.n9)(t)
                ? (e.consume(t), c)
                : n(t);
          }
          function l(e) {
            return (0, X.H$)(e) ? u(e) : n(e);
          }
          function u(n) {
            return 46 === n
              ? (e.consume(n), (r = 0), l)
              : 62 === n
                ? ((e.exit('autolinkProtocol').type = 'autolinkEmail'),
                  e.enter('autolinkMarker'),
                  e.consume(n),
                  e.exit('autolinkMarker'),
                  e.exit('autolink'),
                  t)
                : h(n);
          }
          function h(t) {
            if ((45 === t || (0, X.H$)(t)) && r++ < 63) {
              const n = 45 === t ? h : u;
              return e.consume(t), n;
            }
            return n(t);
          }
        },
      };
      const Ve = {
        name: 'htmlText',
        tokenize: function (e, t, n) {
          const r = this;
          let i, s, o;
          return function (t) {
            return (
              e.enter('htmlText'), e.enter('htmlTextData'), e.consume(t), a
            );
          };
          function a(t) {
            return 33 === t
              ? (e.consume(t), c)
              : 47 === t
                ? (e.consume(t), g)
                : 63 === t
                  ? (e.consume(t), A)
                  : (0, X.jv)(t)
                    ? (e.consume(t), I)
                    : n(t);
          }
          function c(t) {
            return 45 === t
              ? (e.consume(t), l)
              : 91 === t
                ? (e.consume(t), (s = 0), d)
                : (0, X.jv)(t)
                  ? (e.consume(t), T)
                  : n(t);
          }
          function l(t) {
            return 45 === t ? (e.consume(t), p) : n(t);
          }
          function u(t) {
            return null === t
              ? n(t)
              : 45 === t
                ? (e.consume(t), h)
                : (0, X.Ch)(t)
                  ? ((o = u), P(t))
                  : (e.consume(t), u);
          }
          function h(t) {
            return 45 === t ? (e.consume(t), p) : u(t);
          }
          function p(e) {
            return 62 === e ? L(e) : 45 === e ? h(e) : u(e);
          }
          function d(t) {
            const r = 'CDATA[';
            return t === r.charCodeAt(s++)
              ? (e.consume(t), 6 === s ? f : d)
              : n(t);
          }
          function f(t) {
            return null === t
              ? n(t)
              : 93 === t
                ? (e.consume(t), m)
                : (0, X.Ch)(t)
                  ? ((o = f), P(t))
                  : (e.consume(t), f);
          }
          function m(t) {
            return 93 === t ? (e.consume(t), E) : f(t);
          }
          function E(t) {
            return 62 === t ? L(t) : 93 === t ? (e.consume(t), E) : f(t);
          }
          function T(t) {
            return null === t || 62 === t
              ? L(t)
              : (0, X.Ch)(t)
                ? ((o = T), P(t))
                : (e.consume(t), T);
          }
          function A(t) {
            return null === t
              ? n(t)
              : 63 === t
                ? (e.consume(t), _)
                : (0, X.Ch)(t)
                  ? ((o = A), P(t))
                  : (e.consume(t), A);
          }
          function _(e) {
            return 62 === e ? L(e) : A(e);
          }
          function g(t) {
            return (0, X.jv)(t) ? (e.consume(t), C) : n(t);
          }
          function C(t) {
            return 45 === t || (0, X.H$)(t) ? (e.consume(t), C) : S(t);
          }
          function S(t) {
            return (0, X.Ch)(t)
              ? ((o = S), P(t))
              : (0, X.xz)(t)
                ? (e.consume(t), S)
                : L(t);
          }
          function I(t) {
            return 45 === t || (0, X.H$)(t)
              ? (e.consume(t), I)
              : 47 === t || 62 === t || (0, X.z3)(t)
                ? N(t)
                : n(t);
          }
          function N(t) {
            return 47 === t
              ? (e.consume(t), L)
              : 58 === t || 95 === t || (0, X.jv)(t)
                ? (e.consume(t), k)
                : (0, X.Ch)(t)
                  ? ((o = N), P(t))
                  : (0, X.xz)(t)
                    ? (e.consume(t), N)
                    : L(t);
          }
          function k(t) {
            return 45 === t || 46 === t || 58 === t || 95 === t || (0, X.H$)(t)
              ? (e.consume(t), k)
              : b(t);
          }
          function b(t) {
            return 61 === t
              ? (e.consume(t), D)
              : (0, X.Ch)(t)
                ? ((o = b), P(t))
                : (0, X.xz)(t)
                  ? (e.consume(t), b)
                  : N(t);
          }
          function D(t) {
            return null === t || 60 === t || 61 === t || 62 === t || 96 === t
              ? n(t)
              : 34 === t || 39 === t
                ? (e.consume(t), (i = t), O)
                : (0, X.Ch)(t)
                  ? ((o = D), P(t))
                  : (0, X.xz)(t)
                    ? (e.consume(t), D)
                    : (e.consume(t), R);
          }
          function O(t) {
            return t === i
              ? (e.consume(t), (i = void 0), y)
              : null === t
                ? n(t)
                : (0, X.Ch)(t)
                  ? ((o = O), P(t))
                  : (e.consume(t), O);
          }
          function R(t) {
            return null === t ||
              34 === t ||
              39 === t ||
              60 === t ||
              61 === t ||
              96 === t
              ? n(t)
              : 47 === t || 62 === t || (0, X.z3)(t)
                ? N(t)
                : (e.consume(t), R);
          }
          function y(e) {
            return 47 === e || 62 === e || (0, X.z3)(e) ? N(e) : n(e);
          }
          function L(r) {
            return 62 === r
              ? (e.consume(r), e.exit('htmlTextData'), e.exit('htmlText'), t)
              : n(r);
          }
          function P(t) {
            return (
              e.exit('htmlTextData'),
              e.enter('lineEnding'),
              e.consume(t),
              e.exit('lineEnding'),
              M
            );
          }
          function M(t) {
            return (0, X.xz)(t)
              ? (0, Q.f)(
                  e,
                  x,
                  'linePrefix',
                  r.parser.constructs.disable.null.includes('codeIndented')
                    ? void 0
                    : 4,
                )(t)
              : x(t);
          }
          function x(t) {
            return e.enter('htmlTextData'), o(t);
          }
        },
      };
      const Qe = {
        name: 'labelStartLink',
        tokenize: function (e, t, n) {
          const r = this;
          return function (t) {
            return (
              e.enter('labelLink'),
              e.enter('labelMarker'),
              e.consume(t),
              e.exit('labelMarker'),
              e.exit('labelLink'),
              i
            );
          };
          function i(e) {
            return 94 === e && '_hiddenFootnoteSupport' in r.parser.constructs
              ? n(e)
              : t(e);
          }
        },
        resolveAll: Fe.resolveAll,
      };
      const Xe = {
        name: 'hardBreakEscape',
        tokenize: function (e, t, n) {
          return function (t) {
            return e.enter('hardBreakEscape'), e.consume(t), r;
          };
          function r(r) {
            return (0, X.Ch)(r) ? (e.exit('hardBreakEscape'), t(r)) : n(r);
          }
        },
      };
      const $e = {
        name: 'codeText',
        tokenize: function (e, t, n) {
          let r,
            i,
            s = 0;
          return function (t) {
            return e.enter('codeText'), e.enter('codeTextSequence'), o(t);
          };
          function o(t) {
            return 96 === t
              ? (e.consume(t), s++, o)
              : (e.exit('codeTextSequence'), a(t));
          }
          function a(t) {
            return null === t
              ? n(t)
              : 32 === t
                ? (e.enter('space'), e.consume(t), e.exit('space'), a)
                : 96 === t
                  ? ((i = e.enter('codeTextSequence')), (r = 0), l(t))
                  : (0, X.Ch)(t)
                    ? (e.enter('lineEnding'),
                      e.consume(t),
                      e.exit('lineEnding'),
                      a)
                    : (e.enter('codeTextData'), c(t));
          }
          function c(t) {
            return null === t || 32 === t || 96 === t || (0, X.Ch)(t)
              ? (e.exit('codeTextData'), a(t))
              : (e.consume(t), c);
          }
          function l(n) {
            return 96 === n
              ? (e.consume(n), r++, l)
              : r === s
                ? (e.exit('codeTextSequence'), e.exit('codeText'), t(n))
                : ((i.type = 'codeTextData'), c(n));
          }
        },
        resolve: function (e) {
          let t,
            n,
            r = e.length - 4,
            i = 3;
          if (
            !(
              ('lineEnding' !== e[i][1].type && 'space' !== e[i][1].type) ||
              ('lineEnding' !== e[r][1].type && 'space' !== e[r][1].type)
            )
          )
            for (t = i; ++t < r; )
              if ('codeTextData' === e[t][1].type) {
                (e[i][1].type = 'codeTextPadding'),
                  (e[r][1].type = 'codeTextPadding'),
                  (i += 2),
                  (r -= 2);
                break;
              }
          (t = i - 1), r++;
          for (; ++t <= r; )
            void 0 === n
              ? t !== r && 'lineEnding' !== e[t][1].type && (n = t)
              : (t !== r && 'lineEnding' !== e[t][1].type) ||
                ((e[n][1].type = 'codeTextData'),
                t !== n + 2 &&
                  ((e[n][1].end = e[t - 1][1].end),
                  e.splice(n + 2, t - n - 2),
                  (r -= t - n - 2),
                  (t = n + 2)),
                (n = void 0));
          return e;
        },
        previous: function (e) {
          return (
            96 !== e ||
            'characterEscape' === this.events[this.events.length - 1][1].type
          );
        },
      };
      const Ke = {
          42: pe,
          43: pe,
          45: pe,
          48: pe,
          49: pe,
          50: pe,
          51: pe,
          52: pe,
          53: pe,
          54: pe,
          55: pe,
          56: pe,
          57: pe,
          62: me,
        },
        Ze = { 91: Ce },
        Je = { [-2]: Ie, [-1]: Ie, 32: Ie },
        et = {
          35: ke,
          42: he,
          45: [be, he],
          60: Re,
          61: be,
          95: he,
          96: Me,
          126: Me,
        },
        tt = { 38: ve, 92: we },
        nt = {
          [-5]: Be,
          [-4]: Be,
          [-3]: Be,
          33: ze,
          38: ve,
          42: je,
          60: [We, Ve],
          91: Qe,
          92: [Xe, we],
          93: Fe,
          95: je,
          96: $e,
        },
        rt = { null: [je, re] },
        it = { null: [42, 95] },
        st = { null: [] };
      const ot = /[\0\t\n\r]/g;
      function at(e, t) {
        const n = Number.parseInt(e, t);
        return n < 9 ||
          11 === n ||
          (n > 13 && n < 32) ||
          (n > 126 && n < 160) ||
          (n > 55295 && n < 57344) ||
          (n > 64975 && n < 65008) ||
          !(65535 & ~n) ||
          65534 == (65535 & n) ||
          n > 1114111
          ? '�'
          : String.fromCodePoint(n);
      }
      const ct =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function lt(e, t, n) {
        if (t) return t;
        if (35 === n.charCodeAt(0)) {
          const e = n.charCodeAt(1),
            t = 120 === e || 88 === e;
          return at(n.slice(t ? 2 : 1), t ? 16 : 10);
        }
        return (0, xe.T)(n) || e;
      }
      const ut = {}.hasOwnProperty;
      function ht(e, t, n) {
        return (
          'string' != typeof t && ((n = t), (t = void 0)),
          (function (e) {
            const t = {
              transforms: [],
              canContainEols: [
                'emphasis',
                'fragment',
                'heading',
                'paragraph',
                'strong',
              ],
              enter: {
                autolink: s(ne),
                autolinkProtocol: b,
                autolinkEmail: b,
                atxHeading: s(Z),
                blockQuote: s(V),
                characterEscape: b,
                characterReference: b,
                codeFenced: s(Q),
                codeFencedFenceInfo: o,
                codeFencedFenceMeta: o,
                codeIndented: s(Q, o),
                codeText: s(X, o),
                codeTextData: b,
                data: b,
                codeFlowValue: b,
                definition: s($),
                definitionDestinationString: o,
                definitionLabelString: o,
                definitionTitleString: o,
                emphasis: s(K),
                hardBreakEscape: s(J),
                hardBreakTrailing: s(J),
                htmlFlow: s(ee, o),
                htmlFlowData: b,
                htmlText: s(ee, o),
                htmlTextData: b,
                image: s(te),
                label: o,
                link: s(ne),
                listItem: s(ie),
                listItemValue: p,
                listOrdered: s(re, h),
                listUnordered: s(re),
                paragraph: s(se),
                reference: U,
                referenceString: o,
                resourceDestinationString: o,
                resourceTitleString: o,
                setextHeading: s(Z),
                strong: s(oe),
                thematicBreak: s(ce),
              },
              exit: {
                atxHeading: c(),
                atxHeadingSequence: S,
                autolink: c(),
                autolinkEmail: W,
                autolinkProtocol: q,
                blockQuote: c(),
                characterEscapeValue: D,
                characterReferenceMarkerHexadecimal: z,
                characterReferenceMarkerNumeric: z,
                characterReferenceValue: j,
                codeFenced: c(E),
                codeFencedFence: m,
                codeFencedFenceInfo: d,
                codeFencedFenceMeta: f,
                codeFlowValue: D,
                codeIndented: c(T),
                codeText: c(P),
                codeTextData: D,
                data: D,
                definition: c(),
                definitionDestinationString: C,
                definitionLabelString: _,
                definitionTitleString: g,
                emphasis: c(),
                hardBreakEscape: c(R),
                hardBreakTrailing: c(R),
                htmlFlow: c(y),
                htmlFlowData: D,
                htmlText: c(L),
                htmlTextData: D,
                image: c(x),
                label: w,
                labelText: v,
                lineEnding: O,
                link: c(M),
                listItem: c(),
                listOrdered: c(),
                listUnordered: c(),
                paragraph: c(),
                referenceString: G,
                resourceDestinationString: B,
                resourceTitleString: F,
                resource: H,
                setextHeading: c(k),
                setextHeadingLineSequence: N,
                setextHeadingText: I,
                strong: c(),
                thematicBreak: c(),
              },
            };
            dt(t, (e || {}).mdastExtensions || []);
            const n = {};
            return r;
            function r(e) {
              let r = { type: 'root', children: [] };
              const s = {
                  stack: [r],
                  tokenStack: [],
                  config: t,
                  enter: a,
                  exit: l,
                  buffer: o,
                  resume: u,
                  data: n,
                },
                c = [];
              let h = -1;
              for (; ++h < e.length; )
                if (
                  'listOrdered' === e[h][1].type ||
                  'listUnordered' === e[h][1].type
                )
                  if ('enter' === e[h][0]) c.push(h);
                  else {
                    h = i(e, c.pop(), h);
                  }
              for (h = -1; ++h < e.length; ) {
                const n = t[e[h][0]];
                ut.call(n, e[h][1].type) &&
                  n[e[h][1].type].call(
                    Object.assign(
                      { sliceSerialize: e[h][2].sliceSerialize },
                      s,
                    ),
                    e[h][1],
                  );
              }
              if (s.tokenStack.length > 0) {
                const e = s.tokenStack[s.tokenStack.length - 1];
                (e[1] || mt).call(s, void 0, e[0]);
              }
              for (
                r.position = {
                  start: pt(
                    e.length > 0
                      ? e[0][1].start
                      : { line: 1, column: 1, offset: 0 },
                  ),
                  end: pt(
                    e.length > 0
                      ? e[e.length - 2][1].end
                      : { line: 1, column: 1, offset: 0 },
                  ),
                },
                  h = -1;
                ++h < t.transforms.length;

              )
                r = t.transforms[h](r) || r;
              return r;
            }
            function i(e, t, n) {
              let r,
                i,
                s,
                o,
                a = t - 1,
                c = -1,
                l = !1;
              for (; ++a <= n; ) {
                const t = e[a];
                switch (t[1].type) {
                  case 'listUnordered':
                  case 'listOrdered':
                  case 'blockQuote':
                    'enter' === t[0] ? c++ : c--, (o = void 0);
                    break;
                  case 'lineEndingBlank':
                    'enter' === t[0] &&
                      (!r || o || c || s || (s = a), (o = void 0));
                    break;
                  case 'linePrefix':
                  case 'listItemValue':
                  case 'listItemMarker':
                  case 'listItemPrefix':
                  case 'listItemPrefixWhitespace':
                    break;
                  default:
                    o = void 0;
                }
                if (
                  (!c && 'enter' === t[0] && 'listItemPrefix' === t[1].type) ||
                  (-1 === c &&
                    'exit' === t[0] &&
                    ('listUnordered' === t[1].type ||
                      'listOrdered' === t[1].type))
                ) {
                  if (r) {
                    let o = a;
                    for (i = void 0; o--; ) {
                      const t = e[o];
                      if (
                        'lineEnding' === t[1].type ||
                        'lineEndingBlank' === t[1].type
                      ) {
                        if ('exit' === t[0]) continue;
                        i && ((e[i][1].type = 'lineEndingBlank'), (l = !0)),
                          (t[1].type = 'lineEnding'),
                          (i = o);
                      } else if (
                        'linePrefix' !== t[1].type &&
                        'blockQuotePrefix' !== t[1].type &&
                        'blockQuotePrefixWhitespace' !== t[1].type &&
                        'blockQuoteMarker' !== t[1].type &&
                        'listItemIndent' !== t[1].type
                      )
                        break;
                    }
                    s && (!i || s < i) && (r._spread = !0),
                      (r.end = Object.assign({}, i ? e[i][1].start : t[1].end)),
                      e.splice(i || a, 0, ['exit', r, t[2]]),
                      a++,
                      n++;
                  }
                  if ('listItemPrefix' === t[1].type) {
                    const i = {
                      type: 'listItem',
                      _spread: !1,
                      start: Object.assign({}, t[1].start),
                      end: void 0,
                    };
                    (r = i),
                      e.splice(a, 0, ['enter', i, t[2]]),
                      a++,
                      n++,
                      (s = void 0),
                      (o = !0);
                  }
                }
              }
              return (e[t][1]._spread = l), n;
            }
            function s(e, t) {
              return n;
              function n(n) {
                a.call(this, e(n), n), t && t.call(this, n);
              }
            }
            function o() {
              this.stack.push({ type: 'fragment', children: [] });
            }
            function a(e, t, n) {
              this.stack[this.stack.length - 1].children.push(e),
                this.stack.push(e),
                this.tokenStack.push([t, n]),
                (e.position = { start: pt(t.start), end: void 0 });
            }
            function c(e) {
              return t;
              function t(t) {
                e && e.call(this, t), l.call(this, t);
              }
            }
            function l(e, t) {
              const n = this.stack.pop(),
                r = this.tokenStack.pop();
              if (!r)
                throw new Error(
                  'Cannot close `' +
                    e.type +
                    '` (' +
                    A({ start: e.start, end: e.end }) +
                    '): it’s not open',
                );
              if (r[0].type !== e.type)
                if (t) t.call(this, e, r[0]);
                else {
                  (r[1] || mt).call(this, e, r[0]);
                }
              n.position.end = pt(e.end);
            }
            function u() {
              return (0, Y.B)(this.stack.pop());
            }
            function h() {
              this.data.expectingFirstListItemValue = !0;
            }
            function p(e) {
              if (this.data.expectingFirstListItemValue) {
                (this.stack[this.stack.length - 2].start = Number.parseInt(
                  this.sliceSerialize(e),
                  10,
                )),
                  (this.data.expectingFirstListItemValue = void 0);
              }
            }
            function d() {
              const e = this.resume();
              this.stack[this.stack.length - 1].lang = e;
            }
            function f() {
              const e = this.resume();
              this.stack[this.stack.length - 1].meta = e;
            }
            function m() {
              this.data.flowCodeInside ||
                (this.buffer(), (this.data.flowCodeInside = !0));
            }
            function E() {
              const e = this.resume();
              (this.stack[this.stack.length - 1].value = e.replace(
                /^(\r?\n|\r)|(\r?\n|\r)$/g,
                '',
              )),
                (this.data.flowCodeInside = void 0);
            }
            function T() {
              const e = this.resume();
              this.stack[this.stack.length - 1].value = e.replace(
                /(\r?\n|\r)$/g,
                '',
              );
            }
            function _(e) {
              const t = this.resume(),
                n = this.stack[this.stack.length - 1];
              (n.label = t),
                (n.identifier = (0, ge.d)(
                  this.sliceSerialize(e),
                ).toLowerCase());
            }
            function g() {
              const e = this.resume();
              this.stack[this.stack.length - 1].title = e;
            }
            function C() {
              const e = this.resume();
              this.stack[this.stack.length - 1].url = e;
            }
            function S(e) {
              const t = this.stack[this.stack.length - 1];
              if (!t.depth) {
                const n = this.sliceSerialize(e).length;
                t.depth = n;
              }
            }
            function I() {
              this.data.setextHeadingSlurpLineEnding = !0;
            }
            function N(e) {
              this.stack[this.stack.length - 1].depth =
                61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
            }
            function k() {
              this.data.setextHeadingSlurpLineEnding = void 0;
            }
            function b(e) {
              const t = this.stack[this.stack.length - 1].children;
              let n = t[t.length - 1];
              (n && 'text' === n.type) ||
                ((n = ae()),
                (n.position = { start: pt(e.start), end: void 0 }),
                t.push(n)),
                this.stack.push(n);
            }
            function D(e) {
              const t = this.stack.pop();
              (t.value += this.sliceSerialize(e)), (t.position.end = pt(e.end));
            }
            function O(e) {
              const n = this.stack[this.stack.length - 1];
              if (this.data.atHardBreak) {
                return (
                  (n.children[n.children.length - 1].position.end = pt(e.end)),
                  void (this.data.atHardBreak = void 0)
                );
              }
              !this.data.setextHeadingSlurpLineEnding &&
                t.canContainEols.includes(n.type) &&
                (b.call(this, e), D.call(this, e));
            }
            function R() {
              this.data.atHardBreak = !0;
            }
            function y() {
              const e = this.resume();
              this.stack[this.stack.length - 1].value = e;
            }
            function L() {
              const e = this.resume();
              this.stack[this.stack.length - 1].value = e;
            }
            function P() {
              const e = this.resume();
              this.stack[this.stack.length - 1].value = e;
            }
            function M() {
              const e = this.stack[this.stack.length - 1];
              if (this.data.inReference) {
                const t = this.data.referenceType || 'shortcut';
                (e.type += 'Reference'),
                  (e.referenceType = t),
                  delete e.url,
                  delete e.title;
              } else delete e.identifier, delete e.label;
              this.data.referenceType = void 0;
            }
            function x() {
              const e = this.stack[this.stack.length - 1];
              if (this.data.inReference) {
                const t = this.data.referenceType || 'shortcut';
                (e.type += 'Reference'),
                  (e.referenceType = t),
                  delete e.url,
                  delete e.title;
              } else delete e.identifier, delete e.label;
              this.data.referenceType = void 0;
            }
            function v(e) {
              const t = this.sliceSerialize(e),
                n = this.stack[this.stack.length - 2];
              (n.label = (function (e) {
                return e.replace(ct, lt);
              })(t)),
                (n.identifier = (0, ge.d)(t).toLowerCase());
            }
            function w() {
              const e = this.stack[this.stack.length - 1],
                t = this.resume(),
                n = this.stack[this.stack.length - 1];
              if (((this.data.inReference = !0), 'link' === n.type)) {
                const t = e.children;
                n.children = t;
              } else n.alt = t;
            }
            function B() {
              const e = this.resume();
              this.stack[this.stack.length - 1].url = e;
            }
            function F() {
              const e = this.resume();
              this.stack[this.stack.length - 1].title = e;
            }
            function H() {
              this.data.inReference = void 0;
            }
            function U() {
              this.data.referenceType = 'collapsed';
            }
            function G(e) {
              const t = this.resume(),
                n = this.stack[this.stack.length - 1];
              (n.label = t),
                (n.identifier = (0, ge.d)(
                  this.sliceSerialize(e),
                ).toLowerCase()),
                (this.data.referenceType = 'full');
            }
            function z(e) {
              this.data.characterReferenceType = e.type;
            }
            function j(e) {
              const t = this.sliceSerialize(e),
                n = this.data.characterReferenceType;
              let r;
              if (n)
                (r = at(t, 'characterReferenceMarkerNumeric' === n ? 10 : 16)),
                  (this.data.characterReferenceType = void 0);
              else {
                r = (0, xe.T)(t);
              }
              const i = this.stack.pop();
              (i.value += r), (i.position.end = pt(e.end));
            }
            function q(e) {
              D.call(this, e);
              this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
            }
            function W(e) {
              D.call(this, e);
              this.stack[this.stack.length - 1].url =
                'mailto:' + this.sliceSerialize(e);
            }
            function V() {
              return { type: 'blockquote', children: [] };
            }
            function Q() {
              return { type: 'code', lang: null, meta: null, value: '' };
            }
            function X() {
              return { type: 'inlineCode', value: '' };
            }
            function $() {
              return {
                type: 'definition',
                identifier: '',
                label: null,
                title: null,
                url: '',
              };
            }
            function K() {
              return { type: 'emphasis', children: [] };
            }
            function Z() {
              return { type: 'heading', depth: 0, children: [] };
            }
            function J() {
              return { type: 'break' };
            }
            function ee() {
              return { type: 'html', value: '' };
            }
            function te() {
              return { type: 'image', title: null, url: '', alt: null };
            }
            function ne() {
              return { type: 'link', title: null, url: '', children: [] };
            }
            function re(e) {
              return {
                type: 'list',
                ordered: 'listOrdered' === e.type,
                start: null,
                spread: e._spread,
                children: [],
              };
            }
            function ie(e) {
              return {
                type: 'listItem',
                spread: e._spread,
                checked: null,
                children: [],
              };
            }
            function se() {
              return { type: 'paragraph', children: [] };
            }
            function oe() {
              return { type: 'strong', children: [] };
            }
            function ae() {
              return { type: 'text', value: '' };
            }
            function ce() {
              return { type: 'thematicBreak' };
            }
          })(n)(
            (function (e) {
              for (; !q(e); );
              return e;
            })(
              (function (e) {
                const t = e || {},
                  n = {
                    defined: [],
                    lazy: {},
                    constructs: (0, V.W)([r, ...(t.extensions || [])]),
                    content: i($),
                    document: i(K),
                    flow: i(ne),
                    string: i(ie),
                    text: i(se),
                  };
                return n;
                function i(e) {
                  return function (t) {
                    return ue(n, e, t);
                  };
                }
              })(n)
                .document()
                .write(
                  (function () {
                    let e,
                      t = 1,
                      n = '',
                      r = !0;
                    return function (i, s, o) {
                      const a = [];
                      let c, l, u, h, p;
                      for (
                        i =
                          n +
                          ('string' == typeof i
                            ? i.toString()
                            : new TextDecoder(s || void 0).decode(i)),
                          u = 0,
                          n = '',
                          r && (65279 === i.charCodeAt(0) && u++, (r = void 0));
                        u < i.length;

                      ) {
                        if (
                          ((ot.lastIndex = u),
                          (c = ot.exec(i)),
                          (h = c && void 0 !== c.index ? c.index : i.length),
                          (p = i.charCodeAt(h)),
                          !c)
                        ) {
                          n = i.slice(u);
                          break;
                        }
                        if (10 === p && u === h && e) a.push(-3), (e = void 0);
                        else
                          switch (
                            (e && (a.push(-5), (e = void 0)),
                            u < h && (a.push(i.slice(u, h)), (t += h - u)),
                            p)
                          ) {
                            case 0:
                              a.push(65533), t++;
                              break;
                            case 9:
                              for (
                                l = 4 * Math.ceil(t / 4), a.push(-2);
                                t++ < l;

                              )
                                a.push(-1);
                              break;
                            case 10:
                              a.push(-4), (t = 1);
                              break;
                            default:
                              (e = !0), (t = 1);
                          }
                        u = h + 1;
                      }
                      return (
                        o && (e && a.push(-5), n && a.push(n), a.push(null)), a
                      );
                    };
                  })()(e, t, !0),
                ),
            ),
          )
        );
      }
      function pt(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function dt(e, t) {
        let n = -1;
        for (; ++n < t.length; ) {
          const r = t[n];
          Array.isArray(r) ? dt(e, r) : ft(e, r);
        }
      }
      function ft(e, t) {
        let n;
        for (n in t)
          if (ut.call(t, n))
            switch (n) {
              case 'canContainEols': {
                const r = t[n];
                r && e[n].push(...r);
                break;
              }
              case 'transforms': {
                const r = t[n];
                r && e[n].push(...r);
                break;
              }
              case 'enter':
              case 'exit': {
                const r = t[n];
                r && Object.assign(e[n], r);
                break;
              }
            }
      }
      function mt(e, t) {
        throw e
          ? new Error(
              'Cannot close `' +
                e.type +
                '` (' +
                A({ start: e.start, end: e.end }) +
                '): a different token (`' +
                t.type +
                '`, ' +
                A({ start: t.start, end: t.end }) +
                ') is open',
            )
          : new Error(
              'Cannot close document, a token (`' +
                t.type +
                '`, ' +
                A({ start: t.start, end: t.end }) +
                ') is still open',
            );
      }
      function Et(e) {
        const t = this;
        t.parser = function (n) {
          return ht(n, {
            ...t.data('settings'),
            ...e,
            extensions: t.data('micromarkExtensions') || [],
            mdastExtensions: t.data('fromMarkdownExtensions') || [],
          });
        };
      }
      var Tt = n(52835);
      function At(e) {
        const t = [];
        let n = -1,
          r = 0,
          i = 0;
        for (; ++n < e.length; ) {
          const s = e.charCodeAt(n);
          let o = '';
          if (
            37 === s &&
            (0, X.H$)(e.charCodeAt(n + 1)) &&
            (0, X.H$)(e.charCodeAt(n + 2))
          )
            i = 2;
          else if (s < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) ||
              (o = String.fromCharCode(s));
          else if (s > 55295 && s < 57344) {
            const t = e.charCodeAt(n + 1);
            s < 56320 && t > 56319 && t < 57344
              ? ((o = String.fromCharCode(s, t)), (i = 1))
              : (o = '�');
          } else o = String.fromCharCode(s);
          o &&
            (t.push(e.slice(r, n), encodeURIComponent(o)),
            (r = n + i + 1),
            (o = '')),
            i && ((n += i), (i = 0));
        }
        return t.join('') + e.slice(r);
      }
      function _t(e, t) {
        const n = [{ type: 'text', value: '↩' }];
        return (
          t > 1 &&
            n.push({
              type: 'element',
              tagName: 'sup',
              properties: {},
              children: [{ type: 'text', value: String(t) }],
            }),
          n
        );
      }
      function gt(e, t) {
        return 'Back to reference ' + (e + 1) + (t > 1 ? '-' + t : '');
      }
      var Ct = n(21623);
      function St(e, t) {
        const n = t.referenceType;
        let r = ']';
        if (
          ('collapsed' === n
            ? (r += '[]')
            : 'full' === n && (r += '[' + (t.label || t.identifier) + ']'),
          'imageReference' === t.type)
        )
          return [{ type: 'text', value: '![' + t.alt + r }];
        const i = e.all(t),
          s = i[0];
        s && 'text' === s.type
          ? (s.value = '[' + s.value)
          : i.unshift({ type: 'text', value: '[' });
        const o = i[i.length - 1];
        return (
          o && 'text' === o.type
            ? (o.value += r)
            : i.push({ type: 'text', value: r }),
          i
        );
      }
      function It(e) {
        const t = e.spread;
        return null == t ? e.children.length > 1 : t;
      }
      function Nt(e) {
        const t = String(e),
          n = /\r?\n|\r/g;
        let r = n.exec(t),
          i = 0;
        const s = [];
        for (; r; )
          s.push(kt(t.slice(i, r.index), i > 0, !0), r[0]),
            (i = r.index + r[0].length),
            (r = n.exec(t));
        return s.push(kt(t.slice(i), i > 0, !1)), s.join('');
      }
      function kt(e, t, n) {
        let r = 0,
          i = e.length;
        if (t) {
          let t = e.codePointAt(r);
          for (; 9 === t || 32 === t; ) r++, (t = e.codePointAt(r));
        }
        if (n) {
          let t = e.codePointAt(i - 1);
          for (; 9 === t || 32 === t; ) i--, (t = e.codePointAt(i - 1));
        }
        return i > r ? e.slice(r, i) : '';
      }
      const bt = {
        blockquote: function (e, t) {
          const n = {
            type: 'element',
            tagName: 'blockquote',
            properties: {},
            children: e.wrap(e.all(t), !0),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        break: function (e, t) {
          const n = {
            type: 'element',
            tagName: 'br',
            properties: {},
            children: [],
          };
          return (
            e.patch(t, n), [e.applyData(t, n), { type: 'text', value: '\n' }]
          );
        },
        code: function (e, t) {
          const n = t.value ? t.value + '\n' : '',
            r = {};
          t.lang && (r.className = ['language-' + t.lang]);
          let i = {
            type: 'element',
            tagName: 'code',
            properties: r,
            children: [{ type: 'text', value: n }],
          };
          return (
            t.meta && (i.data = { meta: t.meta }),
            e.patch(t, i),
            (i = e.applyData(t, i)),
            (i = {
              type: 'element',
              tagName: 'pre',
              properties: {},
              children: [i],
            }),
            e.patch(t, i),
            i
          );
        },
        delete: function (e, t) {
          const n = {
            type: 'element',
            tagName: 'del',
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        emphasis: function (e, t) {
          const n = {
            type: 'element',
            tagName: 'em',
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        footnoteReference: function (e, t) {
          const n =
              'string' == typeof e.options.clobberPrefix
                ? e.options.clobberPrefix
                : 'user-content-',
            r = String(t.identifier).toUpperCase(),
            i = At(r.toLowerCase()),
            s = e.footnoteOrder.indexOf(r);
          let o,
            a = e.footnoteCounts.get(r);
          void 0 === a
            ? ((a = 0), e.footnoteOrder.push(r), (o = e.footnoteOrder.length))
            : (o = s + 1),
            (a += 1),
            e.footnoteCounts.set(r, a);
          const c = {
            type: 'element',
            tagName: 'a',
            properties: {
              href: '#' + n + 'fn-' + i,
              id: n + 'fnref-' + i + (a > 1 ? '-' + a : ''),
              dataFootnoteRef: !0,
              ariaDescribedBy: ['footnote-label'],
            },
            children: [{ type: 'text', value: String(o) }],
          };
          e.patch(t, c);
          const l = {
            type: 'element',
            tagName: 'sup',
            properties: {},
            children: [c],
          };
          return e.patch(t, l), e.applyData(t, l);
        },
        heading: function (e, t) {
          const n = {
            type: 'element',
            tagName: 'h' + t.depth,
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        html: function (e, t) {
          if (e.options.allowDangerousHtml) {
            const n = { type: 'raw', value: t.value };
            return e.patch(t, n), e.applyData(t, n);
          }
        },
        imageReference: function (e, t) {
          const n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return St(e, t);
          const i = { src: At(r.url || ''), alt: t.alt };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          const s = {
            type: 'element',
            tagName: 'img',
            properties: i,
            children: [],
          };
          return e.patch(t, s), e.applyData(t, s);
        },
        image: function (e, t) {
          const n = { src: At(t.url) };
          null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
            null !== t.title && void 0 !== t.title && (n.title = t.title);
          const r = {
            type: 'element',
            tagName: 'img',
            properties: n,
            children: [],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        inlineCode: function (e, t) {
          const n = { type: 'text', value: t.value.replace(/\r?\n|\r/g, ' ') };
          e.patch(t, n);
          const r = {
            type: 'element',
            tagName: 'code',
            properties: {},
            children: [n],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        linkReference: function (e, t) {
          const n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return St(e, t);
          const i = { href: At(r.url || '') };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          const s = {
            type: 'element',
            tagName: 'a',
            properties: i,
            children: e.all(t),
          };
          return e.patch(t, s), e.applyData(t, s);
        },
        link: function (e, t) {
          const n = { href: At(t.url) };
          null !== t.title && void 0 !== t.title && (n.title = t.title);
          const r = {
            type: 'element',
            tagName: 'a',
            properties: n,
            children: e.all(t),
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        listItem: function (e, t, n) {
          const r = e.all(t),
            i = n
              ? (function (e) {
                  let t = !1;
                  if ('list' === e.type) {
                    t = e.spread || !1;
                    const n = e.children;
                    let r = -1;
                    for (; !t && ++r < n.length; ) t = It(n[r]);
                  }
                  return t;
                })(n)
              : It(t),
            s = {},
            o = [];
          if ('boolean' == typeof t.checked) {
            const e = r[0];
            let n;
            e && 'element' === e.type && 'p' === e.tagName
              ? (n = e)
              : ((n = {
                  type: 'element',
                  tagName: 'p',
                  properties: {},
                  children: [],
                }),
                r.unshift(n)),
              n.children.length > 0 &&
                n.children.unshift({ type: 'text', value: ' ' }),
              n.children.unshift({
                type: 'element',
                tagName: 'input',
                properties: {
                  type: 'checkbox',
                  checked: t.checked,
                  disabled: !0,
                },
                children: [],
              }),
              (s.className = ['task-list-item']);
          }
          let a = -1;
          for (; ++a < r.length; ) {
            const e = r[a];
            (i || 0 !== a || 'element' !== e.type || 'p' !== e.tagName) &&
              o.push({ type: 'text', value: '\n' }),
              'element' !== e.type || 'p' !== e.tagName || i
                ? o.push(e)
                : o.push(...e.children);
          }
          const c = r[r.length - 1];
          c &&
            (i || 'element' !== c.type || 'p' !== c.tagName) &&
            o.push({ type: 'text', value: '\n' });
          const l = {
            type: 'element',
            tagName: 'li',
            properties: s,
            children: o,
          };
          return e.patch(t, l), e.applyData(t, l);
        },
        list: function (e, t) {
          const n = {},
            r = e.all(t);
          let i = -1;
          for (
            'number' == typeof t.start && 1 !== t.start && (n.start = t.start);
            ++i < r.length;

          ) {
            const e = r[i];
            if (
              'element' === e.type &&
              'li' === e.tagName &&
              e.properties &&
              Array.isArray(e.properties.className) &&
              e.properties.className.includes('task-list-item')
            ) {
              n.className = ['contains-task-list'];
              break;
            }
          }
          const s = {
            type: 'element',
            tagName: t.ordered ? 'ol' : 'ul',
            properties: n,
            children: e.wrap(r, !0),
          };
          return e.patch(t, s), e.applyData(t, s);
        },
        paragraph: function (e, t) {
          const n = {
            type: 'element',
            tagName: 'p',
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        root: function (e, t) {
          const n = { type: 'root', children: e.wrap(e.all(t)) };
          return e.patch(t, n), e.applyData(t, n);
        },
        strong: function (e, t) {
          const n = {
            type: 'element',
            tagName: 'strong',
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        table: function (e, t) {
          const n = e.all(t),
            r = n.shift(),
            i = [];
          if (r) {
            const n = {
              type: 'element',
              tagName: 'thead',
              properties: {},
              children: e.wrap([r], !0),
            };
            e.patch(t.children[0], n), i.push(n);
          }
          if (n.length > 0) {
            const r = {
                type: 'element',
                tagName: 'tbody',
                properties: {},
                children: e.wrap(n, !0),
              },
              s = (0, T.Pk)(t.children[1]),
              o = (0, T.rb)(t.children[t.children.length - 1]);
            s && o && (r.position = { start: s, end: o }), i.push(r);
          }
          const s = {
            type: 'element',
            tagName: 'table',
            properties: {},
            children: e.wrap(i, !0),
          };
          return e.patch(t, s), e.applyData(t, s);
        },
        tableCell: function (e, t) {
          const n = {
            type: 'element',
            tagName: 'td',
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        tableRow: function (e, t, n) {
          const r = n ? n.children : void 0,
            i = 0 === (r ? r.indexOf(t) : 1) ? 'th' : 'td',
            s = n && 'table' === n.type ? n.align : void 0,
            o = s ? s.length : t.children.length;
          let a = -1;
          const c = [];
          for (; ++a < o; ) {
            const n = t.children[a],
              r = {},
              o = s ? s[a] : void 0;
            o && (r.align = o);
            let l = {
              type: 'element',
              tagName: i,
              properties: r,
              children: [],
            };
            n &&
              ((l.children = e.all(n)), e.patch(n, l), (l = e.applyData(n, l))),
              c.push(l);
          }
          const l = {
            type: 'element',
            tagName: 'tr',
            properties: {},
            children: e.wrap(c, !0),
          };
          return e.patch(t, l), e.applyData(t, l);
        },
        text: function (e, t) {
          const n = { type: 'text', value: Nt(String(t.value)) };
          return e.patch(t, n), e.applyData(t, n);
        },
        thematicBreak: function (e, t) {
          const n = {
            type: 'element',
            tagName: 'hr',
            properties: {},
            children: [],
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        toml: Dt,
        yaml: Dt,
        definition: Dt,
        footnoteDefinition: Dt,
      };
      function Dt() {}
      const Ot = {}.hasOwnProperty,
        Rt = {};
      function yt(e, t) {
        e.position && (t.position = (0, T.FK)(e));
      }
      function Lt(e, t) {
        let n = t;
        if (e && e.data) {
          const t = e.data.hName,
            r = e.data.hChildren,
            i = e.data.hProperties;
          if ('string' == typeof t)
            if ('element' === n.type) n.tagName = t;
            else {
              n = {
                type: 'element',
                tagName: t,
                properties: {},
                children: 'children' in n ? n.children : [n],
              };
            }
          'element' === n.type &&
            i &&
            Object.assign(n.properties, (0, Tt.ZP)(i)),
            'children' in n && n.children && null != r && (n.children = r);
        }
        return n;
      }
      function Pt(e, t) {
        const n = t.data || {},
          r =
            !('value' in t) ||
            Ot.call(n, 'hProperties') ||
            Ot.call(n, 'hChildren')
              ? {
                  type: 'element',
                  tagName: 'div',
                  properties: {},
                  children: e.all(t),
                }
              : { type: 'text', value: t.value };
        return e.patch(t, r), e.applyData(t, r);
      }
      function Mt(e, t) {
        const n = [];
        let r = -1;
        for (t && n.push({ type: 'text', value: '\n' }); ++r < e.length; )
          r && n.push({ type: 'text', value: '\n' }), n.push(e[r]);
        return t && e.length > 0 && n.push({ type: 'text', value: '\n' }), n;
      }
      function xt(e) {
        let t = 0,
          n = e.charCodeAt(t);
        for (; 9 === n || 32 === n; ) t++, (n = e.charCodeAt(t));
        return e.slice(t);
      }
      function vt(e, t) {
        const n = (function (e, t) {
            const n = t || Rt,
              r = new Map(),
              i = new Map(),
              s = new Map(),
              o = { ...bt, ...n.handlers },
              a = {
                all: function (e) {
                  const t = [];
                  if ('children' in e) {
                    const n = e.children;
                    let r = -1;
                    for (; ++r < n.length; ) {
                      const i = a.one(n[r], e);
                      if (i) {
                        if (
                          r &&
                          'break' === n[r - 1].type &&
                          (Array.isArray(i) ||
                            'text' !== i.type ||
                            (i.value = xt(i.value)),
                          !Array.isArray(i) && 'element' === i.type)
                        ) {
                          const e = i.children[0];
                          e && 'text' === e.type && (e.value = xt(e.value));
                        }
                        Array.isArray(i) ? t.push(...i) : t.push(i);
                      }
                    }
                  }
                  return t;
                },
                applyData: Lt,
                definitionById: r,
                footnoteById: i,
                footnoteCounts: s,
                footnoteOrder: [],
                handlers: o,
                one: function (e, t) {
                  const n = e.type,
                    r = a.handlers[n];
                  if (Ot.call(a.handlers, n) && r) return r(a, e, t);
                  if (
                    a.options.passThrough &&
                    a.options.passThrough.includes(n)
                  ) {
                    if ('children' in e) {
                      const { children: t, ...n } = e,
                        r = (0, Tt.ZP)(n);
                      return (r.children = a.all(e)), r;
                    }
                    return (0, Tt.ZP)(e);
                  }
                  return (a.options.unknownHandler || Pt)(a, e, t);
                },
                options: n,
                patch: yt,
                wrap: Mt,
              };
            return (
              (0, Ct.Vn)(e, function (e) {
                if (
                  'definition' === e.type ||
                  'footnoteDefinition' === e.type
                ) {
                  const t = 'definition' === e.type ? r : i,
                    n = String(e.identifier).toUpperCase();
                  t.has(n) || t.set(n, e);
                }
              }),
              a
            );
          })(e, t),
          r = n.one(e, void 0),
          s = (function (e) {
            const t =
                'string' == typeof e.options.clobberPrefix
                  ? e.options.clobberPrefix
                  : 'user-content-',
              n = e.options.footnoteBackContent || _t,
              r = e.options.footnoteBackLabel || gt,
              i = e.options.footnoteLabel || 'Footnotes',
              s = e.options.footnoteLabelTagName || 'h2',
              o = e.options.footnoteLabelProperties || {
                className: ['sr-only'],
              },
              a = [];
            let c = -1;
            for (; ++c < e.footnoteOrder.length; ) {
              const i = e.footnoteById.get(e.footnoteOrder[c]);
              if (!i) continue;
              const s = e.all(i),
                o = String(i.identifier).toUpperCase(),
                l = At(o.toLowerCase());
              let u = 0;
              const h = [],
                p = e.footnoteCounts.get(o);
              for (; void 0 !== p && ++u <= p; ) {
                h.length > 0 && h.push({ type: 'text', value: ' ' });
                let e = 'string' == typeof n ? n : n(c, u);
                'string' == typeof e && (e = { type: 'text', value: e }),
                  h.push({
                    type: 'element',
                    tagName: 'a',
                    properties: {
                      href: '#' + t + 'fnref-' + l + (u > 1 ? '-' + u : ''),
                      dataFootnoteBackref: '',
                      ariaLabel: 'string' == typeof r ? r : r(c, u),
                      className: ['data-footnote-backref'],
                    },
                    children: Array.isArray(e) ? e : [e],
                  });
              }
              const d = s[s.length - 1];
              if (d && 'element' === d.type && 'p' === d.tagName) {
                const e = d.children[d.children.length - 1];
                e && 'text' === e.type
                  ? (e.value += ' ')
                  : d.children.push({ type: 'text', value: ' ' }),
                  d.children.push(...h);
              } else s.push(...h);
              const f = {
                type: 'element',
                tagName: 'li',
                properties: { id: t + 'fn-' + l },
                children: e.wrap(s, !0),
              };
              e.patch(i, f), a.push(f);
            }
            if (0 !== a.length)
              return {
                type: 'element',
                tagName: 'section',
                properties: { dataFootnotes: !0, className: ['footnotes'] },
                children: [
                  {
                    type: 'element',
                    tagName: s,
                    properties: { ...(0, Tt.ZP)(o), id: 'footnote-label' },
                    children: [{ type: 'text', value: i }],
                  },
                  { type: 'text', value: '\n' },
                  {
                    type: 'element',
                    tagName: 'ol',
                    properties: {},
                    children: e.wrap(a, !0),
                  },
                  { type: 'text', value: '\n' },
                ],
              };
          })(n),
          o = Array.isArray(r)
            ? { type: 'root', children: r }
            : r || { type: 'root', children: [] };
        return (
          s &&
            ((0, i.ok)('children' in o),
            o.children.push({ type: 'text', value: '\n' }, s)),
          o
        );
      }
      function wt(e, t) {
        return e && 'run' in e
          ? async function (n, r) {
              const i = vt(n, { file: r, ...t });
              await e.run(i, r);
            }
          : function (n, r) {
              return vt(n, { file: r, ...(t || e) });
            };
      }
      function Bt(e) {
        if (e) throw e;
      }
      var Ft = n(94470);
      function Ht(e) {
        if ('object' != typeof e || null === e) return !1;
        const t = Object.getPrototypeOf(e);
        return !(
          (null !== t &&
            t !== Object.prototype &&
            null !== Object.getPrototypeOf(t)) ||
          Symbol.toStringTag in e ||
          Symbol.iterator in e
        );
      }
      function Ut() {
        const e = [],
          t = {
            run: function (...t) {
              let n = -1;
              const r = t.pop();
              if ('function' != typeof r)
                throw new TypeError(
                  'Expected function as last argument, not ' + r,
                );
              !(function i(s, ...o) {
                const a = e[++n];
                let c = -1;
                if (s) r(s);
                else {
                  for (; ++c < t.length; )
                    (null !== o[c] && void 0 !== o[c]) || (o[c] = t[c]);
                  (t = o),
                    a
                      ? (function (e, t) {
                          let n;
                          return r;
                          function r(...t) {
                            const r = e.length > t.length;
                            let o;
                            r && t.push(i);
                            try {
                              o = e.apply(this, t);
                            } catch (e) {
                              if (r && n) throw e;
                              return i(e);
                            }
                            r ||
                              (o && o.then && 'function' == typeof o.then
                                ? o.then(s, i)
                                : o instanceof Error
                                  ? i(o)
                                  : s(o));
                          }
                          function i(e, ...r) {
                            n || ((n = !0), t(e, ...r));
                          }
                          function s(e) {
                            i(null, e);
                          }
                        })(
                          a,
                          i,
                        )(...o)
                      : r(null, ...o);
                }
              })(null, ...t);
            },
            use: function (n) {
              if ('function' != typeof n)
                throw new TypeError(
                  'Expected `middelware` to be a function, not ' + n,
                );
              return e.push(n), t;
            },
          };
        return t;
      }
      const Gt = {
        basename: function (e, t) {
          if (void 0 !== t && 'string' != typeof t)
            throw new TypeError('"ext" argument must be a string');
          zt(e);
          let n,
            r = 0,
            i = -1,
            s = e.length;
          if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; s--; )
              if (47 === e.codePointAt(s)) {
                if (n) {
                  r = s + 1;
                  break;
                }
              } else i < 0 && ((n = !0), (i = s + 1));
            return i < 0 ? '' : e.slice(r, i);
          }
          if (t === e) return '';
          let o = -1,
            a = t.length - 1;
          for (; s--; )
            if (47 === e.codePointAt(s)) {
              if (n) {
                r = s + 1;
                break;
              }
            } else
              o < 0 && ((n = !0), (o = s + 1)),
                a > -1 &&
                  (e.codePointAt(s) === t.codePointAt(a--)
                    ? a < 0 && (i = s)
                    : ((a = -1), (i = o)));
          r === i ? (i = o) : i < 0 && (i = e.length);
          return e.slice(r, i);
        },
        dirname: function (e) {
          if ((zt(e), 0 === e.length)) return '.';
          let t,
            n = -1,
            r = e.length;
          for (; --r; )
            if (47 === e.codePointAt(r)) {
              if (t) {
                n = r;
                break;
              }
            } else t || (t = !0);
          return n < 0
            ? 47 === e.codePointAt(0)
              ? '/'
              : '.'
            : 1 === n && 47 === e.codePointAt(0)
              ? '//'
              : e.slice(0, n);
        },
        extname: function (e) {
          zt(e);
          let t,
            n = e.length,
            r = -1,
            i = 0,
            s = -1,
            o = 0;
          for (; n--; ) {
            const a = e.codePointAt(n);
            if (47 !== a)
              r < 0 && ((t = !0), (r = n + 1)),
                46 === a
                  ? s < 0
                    ? (s = n)
                    : 1 !== o && (o = 1)
                  : s > -1 && (o = -1);
            else if (t) {
              i = n + 1;
              break;
            }
          }
          if (
            s < 0 ||
            r < 0 ||
            0 === o ||
            (1 === o && s === r - 1 && s === i + 1)
          )
            return '';
          return e.slice(s, r);
        },
        join: function (...e) {
          let t,
            n = -1;
          for (; ++n < e.length; )
            zt(e[n]), e[n] && (t = void 0 === t ? e[n] : t + '/' + e[n]);
          return void 0 === t
            ? '.'
            : (function (e) {
                zt(e);
                const t = 47 === e.codePointAt(0);
                let n = (function (e, t) {
                  let n,
                    r,
                    i = '',
                    s = 0,
                    o = -1,
                    a = 0,
                    c = -1;
                  for (; ++c <= e.length; ) {
                    if (c < e.length) n = e.codePointAt(c);
                    else {
                      if (47 === n) break;
                      n = 47;
                    }
                    if (47 === n) {
                      if (o === c - 1 || 1 === a);
                      else if (o !== c - 1 && 2 === a) {
                        if (
                          i.length < 2 ||
                          2 !== s ||
                          46 !== i.codePointAt(i.length - 1) ||
                          46 !== i.codePointAt(i.length - 2)
                        )
                          if (i.length > 2) {
                            if (
                              ((r = i.lastIndexOf('/')), r !== i.length - 1)
                            ) {
                              r < 0
                                ? ((i = ''), (s = 0))
                                : ((i = i.slice(0, r)),
                                  (s = i.length - 1 - i.lastIndexOf('/'))),
                                (o = c),
                                (a = 0);
                              continue;
                            }
                          } else if (i.length > 0) {
                            (i = ''), (s = 0), (o = c), (a = 0);
                            continue;
                          }
                        t && ((i = i.length > 0 ? i + '/..' : '..'), (s = 2));
                      } else
                        i.length > 0
                          ? (i += '/' + e.slice(o + 1, c))
                          : (i = e.slice(o + 1, c)),
                          (s = c - o - 1);
                      (o = c), (a = 0);
                    } else 46 === n && a > -1 ? a++ : (a = -1);
                  }
                  return i;
                })(e, !t);
                0 !== n.length || t || (n = '.');
                n.length > 0 &&
                  47 === e.codePointAt(e.length - 1) &&
                  (n += '/');
                return t ? '/' + n : n;
              })(t);
        },
        sep: '/',
      };
      function zt(e) {
        if ('string' != typeof e)
          throw new TypeError(
            'Path must be a string. Received ' + JSON.stringify(e),
          );
      }
      const Yt = {
        cwd: function () {
          return '/';
        },
      };
      function jt(e) {
        return Boolean(
          null !== e &&
            'object' == typeof e &&
            'href' in e &&
            e.href &&
            'protocol' in e &&
            e.protocol &&
            void 0 === e.auth,
        );
      }
      function qt(e) {
        if ('string' == typeof e) e = new URL(e);
        else if (!jt(e)) {
          const t = new TypeError(
            'The "path" argument must be of type string or an instance of URL. Received `' +
              e +
              '`',
          );
          throw ((t.code = 'ERR_INVALID_ARG_TYPE'), t);
        }
        if ('file:' !== e.protocol) {
          const e = new TypeError('The URL must be of scheme file');
          throw ((e.code = 'ERR_INVALID_URL_SCHEME'), e);
        }
        return (function (e) {
          if ('' !== e.hostname) {
            const e = new TypeError(
              'File URL host must be "localhost" or empty on darwin',
            );
            throw ((e.code = 'ERR_INVALID_FILE_URL_HOST'), e);
          }
          const t = e.pathname;
          let n = -1;
          for (; ++n < t.length; )
            if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
              const e = t.codePointAt(n + 2);
              if (70 === e || 102 === e) {
                const e = new TypeError(
                  'File URL path must not include encoded / characters',
                );
                throw ((e.code = 'ERR_INVALID_FILE_URL_PATH'), e);
              }
            }
          return decodeURIComponent(t);
        })(e);
      }
      const Wt = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
      class Vt {
        constructor(e) {
          let t;
          (t = e
            ? jt(e)
              ? { path: e }
              : 'string' == typeof e ||
                  (function (e) {
                    return Boolean(
                      e &&
                        'object' == typeof e &&
                        'byteLength' in e &&
                        'byteOffset' in e,
                    );
                  })(e)
                ? { value: e }
                : e
            : {}),
            (this.cwd = Yt.cwd()),
            (this.data = {}),
            (this.history = []),
            (this.messages = []),
            this.value,
            this.map,
            this.result,
            this.stored;
          let n,
            r = -1;
          for (; ++r < Wt.length; ) {
            const e = Wt[r];
            e in t &&
              void 0 !== t[e] &&
              null !== t[e] &&
              (this[e] = 'history' === e ? [...t[e]] : t[e]);
          }
          for (n in t) Wt.includes(n) || (this[n] = t[n]);
        }
        get basename() {
          return 'string' == typeof this.path ? Gt.basename(this.path) : void 0;
        }
        set basename(e) {
          Xt(e, 'basename'),
            Qt(e, 'basename'),
            (this.path = Gt.join(this.dirname || '', e));
        }
        get dirname() {
          return 'string' == typeof this.path ? Gt.dirname(this.path) : void 0;
        }
        set dirname(e) {
          $t(this.basename, 'dirname'),
            (this.path = Gt.join(e || '', this.basename));
        }
        get extname() {
          return 'string' == typeof this.path ? Gt.extname(this.path) : void 0;
        }
        set extname(e) {
          if ((Qt(e, 'extname'), $t(this.dirname, 'extname'), e)) {
            if (46 !== e.codePointAt(0))
              throw new Error('`extname` must start with `.`');
            if (e.includes('.', 1))
              throw new Error('`extname` cannot contain multiple dots');
          }
          this.path = Gt.join(this.dirname, this.stem + (e || ''));
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          jt(e) && (e = qt(e)),
            Xt(e, 'path'),
            this.path !== e && this.history.push(e);
        }
        get stem() {
          return 'string' == typeof this.path
            ? Gt.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          Xt(e, 'stem'),
            Qt(e, 'stem'),
            (this.path = Gt.join(this.dirname || '', e + (this.extname || '')));
        }
        fail(e, t, n) {
          const r = this.message(e, t, n);
          throw ((r.fatal = !0), r);
        }
        info(e, t, n) {
          const r = this.message(e, t, n);
          return (r.fatal = void 0), r;
        }
        message(e, t, n) {
          const r = new S(e, t, n);
          return (
            this.path &&
              ((r.name = this.path + ':' + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        toString(e) {
          if (void 0 === this.value) return '';
          if ('string' == typeof this.value) return this.value;
          return new TextDecoder(e || void 0).decode(this.value);
        }
      }
      function Qt(e, t) {
        if (e && e.includes(Gt.sep))
          throw new Error(
            '`' + t + '` cannot be a path: did not expect `' + Gt.sep + '`',
          );
      }
      function Xt(e, t) {
        if (!e) throw new Error('`' + t + '` cannot be empty');
      }
      function $t(e, t) {
        if (!e)
          throw new Error('Setting `' + t + '` requires `path` to be set too');
      }
      const Kt = function (e) {
          const t = this.constructor.prototype,
            n = t[e],
            r = function () {
              return n.apply(r, arguments);
            };
          Object.setPrototypeOf(r, t);
          const i = Object.getOwnPropertyNames(n);
          for (const e of i) {
            const t = Object.getOwnPropertyDescriptor(n, e);
            t && Object.defineProperty(r, e, t);
          }
          return r;
        },
        Zt = {}.hasOwnProperty;
      class Jt extends Kt {
        constructor() {
          super('copy'),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = Ut());
        }
        copy() {
          const e = new Jt();
          let t = -1;
          for (; ++t < this.attachers.length; ) {
            const n = this.attachers[t];
            e.use(...n);
          }
          return e.data(Ft(!0, {}, this.namespace)), e;
        }
        data(e, t) {
          return 'string' == typeof e
            ? 2 === arguments.length
              ? (rn('data', this.frozen), (this.namespace[e] = t), this)
              : (Zt.call(this.namespace, e) && this.namespace[e]) || void 0
            : e
              ? (rn('data', this.frozen), (this.namespace = e), this)
              : this.namespace;
        }
        freeze() {
          if (this.frozen) return this;
          const e = this;
          for (; ++this.freezeIndex < this.attachers.length; ) {
            const [t, ...n] = this.attachers[this.freezeIndex];
            if (!1 === n[0]) continue;
            !0 === n[0] && (n[0] = void 0);
            const r = t.call(e, ...n);
            'function' == typeof r && this.transformers.use(r);
          }
          return (
            (this.frozen = !0),
            (this.freezeIndex = Number.POSITIVE_INFINITY),
            this
          );
        }
        parse(e) {
          this.freeze();
          const t = an(e),
            n = this.parser || this.Parser;
          return tn('parse', n), n(String(t), t);
        }
        process(e, t) {
          const n = this;
          return (
            this.freeze(),
            tn('process', this.parser || this.Parser),
            nn('process', this.compiler || this.Compiler),
            t ? r(void 0, t) : new Promise(r)
          );
          function r(r, s) {
            const o = an(e),
              a = n.parse(o);
            function c(e, n) {
              e || !n
                ? s(e)
                : r
                  ? r(n)
                  : ((0, i.ok)(t, '`done` is defined if `resolve` is not'),
                    t(void 0, n));
            }
            n.run(a, o, function (e, t, r) {
              if (e || !t || !r) return c(e);
              const i = t,
                s = n.stringify(i, r);
              var o;
              'string' == typeof (o = s) ||
              (function (e) {
                return Boolean(
                  e &&
                    'object' == typeof e &&
                    'byteLength' in e &&
                    'byteOffset' in e,
                );
              })(o)
                ? (r.value = s)
                : (r.result = s),
                c(e, r);
            });
          }
        }
        processSync(e) {
          let t,
            n = !1;
          return (
            this.freeze(),
            tn('processSync', this.parser || this.Parser),
            nn('processSync', this.compiler || this.Compiler),
            this.process(e, function (e, r) {
              (n = !0), Bt(e), (t = r);
            }),
            on('processSync', 'process', n),
            (0, i.ok)(t, 'we either bailed on an error or have a tree'),
            t
          );
        }
        run(e, t, n) {
          sn(e), this.freeze();
          const r = this.transformers;
          return (
            n || 'function' != typeof t || ((n = t), (t = void 0)),
            n ? s(void 0, n) : new Promise(s)
          );
          function s(s, o) {
            (0, i.ok)(
              'function' != typeof t,
              '`file` can’t be a `done` anymore, we checked',
            );
            const a = an(t);
            r.run(e, a, function (t, r, a) {
              const c = r || e;
              t
                ? o(t)
                : s
                  ? s(c)
                  : ((0, i.ok)(n, '`done` is defined if `resolve` is not'),
                    n(void 0, c, a));
            });
          }
        }
        runSync(e, t) {
          let n,
            r = !1;
          return (
            this.run(e, t, function (e, t) {
              Bt(e), (n = t), (r = !0);
            }),
            on('runSync', 'run', r),
            (0, i.ok)(n, 'we either bailed on an error or have a tree'),
            n
          );
        }
        stringify(e, t) {
          this.freeze();
          const n = an(t),
            r = this.compiler || this.Compiler;
          return nn('stringify', r), sn(e), r(e, n);
        }
        use(e, ...t) {
          const n = this.attachers,
            r = this.namespace;
          if ((rn('use', this.frozen), null == e));
          else if ('function' == typeof e) a(e, t);
          else {
            if ('object' != typeof e)
              throw new TypeError('Expected usable value, not `' + e + '`');
            Array.isArray(e) ? o(e) : s(e);
          }
          return this;
          function i(e) {
            if ('function' == typeof e) a(e, []);
            else {
              if ('object' != typeof e)
                throw new TypeError('Expected usable value, not `' + e + '`');
              if (Array.isArray(e)) {
                const [t, ...n] = e;
                a(t, n);
              } else s(e);
            }
          }
          function s(e) {
            if (!('plugins' in e) && !('settings' in e))
              throw new Error(
                'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither',
              );
            o(e.plugins),
              e.settings && (r.settings = Ft(!0, r.settings, e.settings));
          }
          function o(e) {
            let t = -1;
            if (null == e);
            else {
              if (!Array.isArray(e))
                throw new TypeError(
                  'Expected a list of plugins, not `' + e + '`',
                );
              for (; ++t < e.length; ) {
                i(e[t]);
              }
            }
          }
          function a(e, t) {
            let r = -1,
              i = -1;
            for (; ++r < n.length; )
              if (n[r][0] === e) {
                i = r;
                break;
              }
            if (-1 === i) n.push([e, ...t]);
            else if (t.length > 0) {
              let [r, ...s] = t;
              const o = n[i][1];
              Ht(o) && Ht(r) && (r = Ft(!0, o, r)), (n[i] = [e, r, ...s]);
            }
          }
        }
      }
      const en = new Jt().freeze();
      function tn(e, t) {
        if ('function' != typeof t)
          throw new TypeError('Cannot `' + e + '` without `parser`');
      }
      function nn(e, t) {
        if ('function' != typeof t)
          throw new TypeError('Cannot `' + e + '` without `compiler`');
      }
      function rn(e, t) {
        if (t)
          throw new Error(
            'Cannot call `' +
              e +
              '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.',
          );
      }
      function sn(e) {
        if (!Ht(e) || 'string' != typeof e.type)
          throw new TypeError('Expected node, got `' + e + '`');
      }
      function on(e, t, n) {
        if (!n)
          throw new Error(
            '`' + e + '` finished async. Use `' + t + '` instead',
          );
      }
      function an(e) {
        return (function (e) {
          return Boolean(
            e && 'object' == typeof e && 'message' in e && 'messages' in e,
          );
        })(e)
          ? e
          : new Vt(e);
      }
      const cn =
          'https://github.com/remarkjs/react-markdown/blob/main/changelog.md',
        ln = [],
        un = { allowDangerousHtml: !0 },
        hn = /^(https?|ircs?|mailto|xmpp)$/i,
        pn = [
          { from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser' },
          {
            from: 'allowDangerousHtml',
            id: 'remove-buggy-html-in-markdown-parser',
          },
          {
            from: 'allowNode',
            id: 'replace-allownode-allowedtypes-and-disallowedtypes',
            to: 'allowElement',
          },
          {
            from: 'allowedTypes',
            id: 'replace-allownode-allowedtypes-and-disallowedtypes',
            to: 'allowedElements',
          },
          {
            from: 'disallowedTypes',
            id: 'replace-allownode-allowedtypes-and-disallowedtypes',
            to: 'disallowedElements',
          },
          { from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser' },
          { from: 'includeElementIndex', id: '#remove-includeelementindex' },
          {
            from: 'includeNodeIndex',
            id: 'change-includenodeindex-to-includeelementindex',
          },
          { from: 'linkTarget', id: 'remove-linktarget' },
          {
            from: 'plugins',
            id: 'change-plugins-to-remarkplugins',
            to: 'remarkPlugins',
          },
          { from: 'rawSourcePos', id: '#remove-rawsourcepos' },
          {
            from: 'renderers',
            id: 'change-renderers-to-components',
            to: 'components',
          },
          { from: 'source', id: 'change-source-to-children', to: 'children' },
          { from: 'sourcePos', id: '#remove-sourcepos' },
          {
            from: 'transformImageUri',
            id: '#add-urltransform',
            to: 'urlTransform',
          },
          {
            from: 'transformLinkUri',
            id: '#add-urltransform',
            to: 'urlTransform',
          },
        ];
      function dn(e) {
        const t = e.allowedElements,
          n = e.allowElement,
          r = e.children || '',
          s = e.className,
          o = e.components,
          a = e.disallowedElements,
          c = e.rehypePlugins || ln,
          l = e.remarkPlugins || ln,
          u = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...un } : un,
          h = e.skipHtml,
          p = e.unwrapDisallowed,
          d = e.urlTransform || fn,
          f = en().use(Et).use(l).use(wt, u).use(c),
          m = new Vt();
        'string' == typeof r
          ? (m.value = r)
          : (0, i.t1)(
              'Unexpected value `' +
                r +
                '` for `children` prop, expected `string`',
            ),
          t &&
            a &&
            (0, i.t1)(
              'Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other',
            );
        for (const t of pn)
          Object.hasOwn(e, t.from) &&
            (0, i.t1)(
              'Unexpected `' +
                t.from +
                '` prop, ' +
                (t.to ? 'use `' + t.to + '` instead' : 'remove it') +
                ' (see <' +
                cn +
                '#' +
                t.id +
                '> for more info)',
            );
        const E = f.parse(m);
        let T = f.runSync(E, m);
        return (
          s &&
            (T = {
              type: 'element',
              tagName: 'div',
              properties: { className: s },
              children: 'root' === T.type ? T.children : [T],
            }),
          (0, Ct.Vn)(T, function (e, r, i) {
            if ('raw' === e.type && i && 'number' == typeof r)
              return (
                h
                  ? i.children.splice(r, 1)
                  : (i.children[r] = { type: 'text', value: e.value }),
                r
              );
            if ('element' === e.type) {
              let t;
              for (t in G)
                if (Object.hasOwn(G, t) && Object.hasOwn(e.properties, t)) {
                  const n = e.properties[t],
                    r = G[t];
                  (null === r || r.includes(e.tagName)) &&
                    (e.properties[t] = d(String(n || ''), t, e));
                }
            }
            if ('element' === e.type) {
              let s = t ? !t.includes(e.tagName) : !!a && a.includes(e.tagName);
              if (
                (!s && n && 'number' == typeof r && (s = !n(e, r, i)),
                s && i && 'number' == typeof r)
              )
                return (
                  p && e.children
                    ? i.children.splice(r, 1, ...e.children)
                    : i.children.splice(r, 1),
                  r
                );
            }
          }),
          y(T, {
            Fragment: z.Fragment,
            components: o,
            ignoreInvalidStyle: !0,
            jsx: z.jsx,
            jsxs: z.jsxs,
            passKeys: !0,
            passNode: !0,
          })
        );
      }
      function fn(e) {
        const t = e.indexOf(':'),
          n = e.indexOf('?'),
          r = e.indexOf('#'),
          i = e.indexOf('/');
        return t < 0 ||
          (i > -1 && t > i) ||
          (n > -1 && t > n) ||
          (r > -1 && t > r) ||
          hn.test(e.slice(0, t))
          ? e
          : '';
      }
    },
    7657: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return vn;
        },
      });
      var r = n(52835),
        i = n(24345),
        s = n(91634),
        o = n(25668);
      const a = /[#.]/g;
      var c = n(26103),
        l = n(93859),
        u = n(50342);
      const h = new Set(['button', 'menu', 'reset', 'submit']),
        p = {}.hasOwnProperty;
      function d(e, t, n) {
        const r =
          n &&
          (function (e) {
            const t = {};
            let n = -1;
            for (; ++n < e.length; ) t[e[n].toLowerCase()] = e[n];
            return t;
          })(n);
        return function (n, i, ...s) {
          let o,
            c = -1;
          if (null == n) {
            o = { type: 'root', children: [] };
            const e = i;
            s.unshift(e);
          } else if (
            ((o = (function (e, t) {
              const n = e || '',
                r = {};
              let i,
                s,
                o = 0;
              for (; o < n.length; ) {
                a.lastIndex = o;
                const e = a.exec(n),
                  t = n.slice(o, e ? e.index : n.length);
                t &&
                  (i
                    ? '#' === i
                      ? (r.id = t)
                      : Array.isArray(r.className)
                        ? r.className.push(t)
                        : (r.className = [t])
                    : (s = t),
                  (o += t.length)),
                  e && ((i = e[0]), o++);
              }
              return {
                type: 'element',
                tagName: s || t || 'div',
                properties: r,
                children: [],
              };
            })(n, t)),
            (o.tagName = o.tagName.toLowerCase()),
            r && p.call(r, o.tagName) && (o.tagName = r[o.tagName]),
            (function (e, t) {
              if (null == e || 'object' != typeof e || Array.isArray(e))
                return !1;
              if ('input' === t || !e.type || 'string' != typeof e.type)
                return !0;
              if ('children' in e && Array.isArray(e.children)) return !1;
              if ('button' === t) return h.has(e.type.toLowerCase());
              return !('value' in e);
            })(i, o.tagName))
          ) {
            let t;
            for (t in i) p.call(i, t) && f(e, o.properties, t, i[t]);
          } else s.unshift(i);
          for (; ++c < s.length; ) m(o.children, s[c]);
          return (
            'element' === o.type &&
              'template' === o.tagName &&
              ((o.content = { type: 'root', children: o.children }),
              (o.children = [])),
            o
          );
        };
      }
      function f(e, t, n, r) {
        const i = (0, c.s)(e, n);
        let s,
          a = -1;
        if (null != r) {
          if ('number' == typeof r) {
            if (Number.isNaN(r)) return;
            s = r;
          } else
            s =
              'boolean' == typeof r
                ? r
                : 'string' == typeof r
                  ? i.spaceSeparated
                    ? (0, u.Q)(r)
                    : i.commaSeparated
                      ? (0, o.Q)(r)
                      : i.commaOrSpaceSeparated
                        ? (0, u.Q)((0, o.Q)(r).join(' '))
                        : E(i, i.property, r)
                  : Array.isArray(r)
                    ? r.concat()
                    : 'style' === i.property
                      ? (function (e) {
                          const t = [];
                          let n;
                          for (n in e)
                            p.call(e, n) && t.push([n, e[n]].join(': '));
                          return t.join('; ');
                        })(r)
                      : String(r);
          if (Array.isArray(s)) {
            const e = [];
            for (; ++a < s.length; ) {
              const t = E(i, i.property, s[a]);
              e[a] = t;
            }
            s = e;
          }
          if ('className' === i.property && Array.isArray(t.className)) {
            const e = s;
            s = t.className.concat(e);
          }
          t[i.property] = s;
        }
      }
      function m(e, t) {
        let n = -1;
        if (null == t);
        else if ('string' == typeof t || 'number' == typeof t)
          e.push({ type: 'text', value: String(t) });
        else if (Array.isArray(t)) for (; ++n < t.length; ) m(e, t[n]);
        else {
          if ('object' != typeof t || !('type' in t))
            throw new Error('Expected node, nodes, or string, got `' + t + '`');
          'root' === t.type ? m(e, t.children) : e.push(t);
        }
      }
      function E(e, t, n) {
        if ('string' == typeof n) {
          if (e.number && n && !Number.isNaN(Number(n))) return Number(n);
          if (
            (e.boolean || e.overloadedBoolean) &&
            ('' === n || (0, l.F)(n) === (0, l.F)(t))
          )
            return !0;
        }
        return n;
      }
      const T = d(s.dy, 'div'),
        A = d(s.YP, 'g', [
          'altGlyph',
          'altGlyphDef',
          'altGlyphItem',
          'animateColor',
          'animateMotion',
          'animateTransform',
          'clipPath',
          'feBlend',
          'feColorMatrix',
          'feComponentTransfer',
          'feComposite',
          'feConvolveMatrix',
          'feDiffuseLighting',
          'feDisplacementMap',
          'feDistantLight',
          'feDropShadow',
          'feFlood',
          'feFuncA',
          'feFuncB',
          'feFuncG',
          'feFuncR',
          'feGaussianBlur',
          'feImage',
          'feMerge',
          'feMergeNode',
          'feMorphology',
          'feOffset',
          'fePointLight',
          'feSpecularLighting',
          'feSpotLight',
          'feTile',
          'feTurbulence',
          'foreignObject',
          'glyphRef',
          'linearGradient',
          'radialGradient',
          'solidColor',
          'textArea',
          'textPath',
        ]);
      function _(e, t) {
        const n = e.indexOf('\r', t),
          r = e.indexOf('\n', t);
        return -1 === r ? n : -1 === n || n + 1 === r ? r : n < r ? n : r;
      }
      var g = n(49911);
      const C = {}.hasOwnProperty,
        S = Object.prototype;
      function I(e, t) {
        const n = t || {};
        return N(
          {
            file: n.file || void 0,
            location: !1,
            schema: 'svg' === n.space ? s.YP : s.dy,
            verbose: n.verbose || !1,
          },
          e,
        );
      }
      function N(e, t) {
        let n;
        switch (t.nodeName) {
          case '#comment': {
            const r = t;
            return (n = { type: 'comment', value: r.data }), b(e, r, n), n;
          }
          case '#document':
          case '#document-fragment': {
            const r = t,
              s =
                'mode' in r &&
                ('quirks' === r.mode || 'limited-quirks' === r.mode);
            if (
              ((n = {
                type: 'root',
                children: k(e, t.childNodes),
                data: { quirksMode: s },
              }),
              e.file && e.location)
            ) {
              const t = String(e.file),
                r = (function (e) {
                  const t = String(e),
                    n = [];
                  return {
                    toOffset: function (e) {
                      if (
                        e &&
                        'number' == typeof e.line &&
                        'number' == typeof e.column &&
                        !Number.isNaN(e.line) &&
                        !Number.isNaN(e.column)
                      ) {
                        for (; n.length < e.line; ) {
                          const e = n[n.length - 1],
                            r = _(t, e),
                            i = -1 === r ? t.length + 1 : r + 1;
                          if (e === i) break;
                          n.push(i);
                        }
                        const r =
                          (e.line > 1 ? n[e.line - 2] : 0) + e.column - 1;
                        if (r < n[e.line - 1]) return r;
                      }
                    },
                    toPoint: function (e) {
                      if ('number' == typeof e && e > -1 && e <= t.length) {
                        let r = 0;
                        for (;;) {
                          let i = n[r];
                          if (void 0 === i) {
                            const e = _(t, n[r - 1]);
                            (i = -1 === e ? t.length + 1 : e + 1), (n[r] = i);
                          }
                          if (i > e)
                            return {
                              line: r + 1,
                              column: e - (r > 0 ? n[r - 1] : 0) + 1,
                              offset: e,
                            };
                          r++;
                        }
                      }
                    },
                  };
                })(t),
                s = r.toPoint(0),
                o = r.toPoint(t.length);
              (0, i.ok)(s, 'expected `start`'),
                (0, i.ok)(o, 'expected `end`'),
                (n.position = { start: s, end: o });
            }
            return n;
          }
          case '#documentType':
            return (n = { type: 'doctype' }), b(e, t, n), n;
          case '#text': {
            const r = t;
            return (n = { type: 'text', value: r.value }), b(e, r, n), n;
          }
          default:
            return (
              (n = (function (e, t) {
                const n = e.schema;
                e.schema = t.namespaceURI === g.t.svg ? s.YP : s.dy;
                let r = -1;
                const i = {};
                for (; ++r < t.attrs.length; ) {
                  const e = t.attrs[r],
                    n = (e.prefix ? e.prefix + ':' : '') + e.name;
                  C.call(S, n) || (i[n] = e.value);
                }
                const o = 'svg' === e.schema.space ? A : T,
                  a = o(t.tagName, i, k(e, t.childNodes));
                if ((b(e, t, a), 'template' === a.tagName)) {
                  const n = t,
                    r = n.sourceCodeLocation,
                    i = r && r.startTag && O(r.startTag),
                    s = r && r.endTag && O(r.endTag),
                    o = N(e, n.content);
                  i &&
                    s &&
                    e.file &&
                    (o.position = { start: i.end, end: s.start }),
                    (a.content = o);
                }
                return (e.schema = n), a;
              })(e, t)),
              n
            );
        }
      }
      function k(e, t) {
        let n = -1;
        const r = [];
        for (; ++n < t.length; ) {
          const i = N(e, t[n]);
          r.push(i);
        }
        return r;
      }
      function b(e, t, n) {
        if ('sourceCodeLocation' in t && t.sourceCodeLocation && e.file) {
          const r = D(e, n, t.sourceCodeLocation);
          r && ((e.location = !0), (n.position = r));
        }
      }
      function D(e, t, n) {
        const r = O(n);
        if ('element' === t.type) {
          const s = t.children[t.children.length - 1];
          if (
            (r &&
              !n.endTag &&
              s &&
              s.position &&
              s.position.end &&
              (r.end = Object.assign({}, s.position.end)),
            e.verbose)
          ) {
            const r = {};
            let s;
            if (n.attrs)
              for (s in n.attrs)
                C.call(n.attrs, s) &&
                  (r[(0, c.s)(e.schema, s).property] = O(n.attrs[s]));
            (0, i.ok)(n.startTag, 'a start tag should exist');
            const o = O(n.startTag),
              a = n.endTag ? O(n.endTag) : void 0,
              l = { opening: o };
            a && (l.closing = a),
              (l.properties = r),
              (t.data = { position: l });
          }
        }
        return r;
      }
      function O(e) {
        const t = R({
            line: e.startLine,
            column: e.startCol,
            offset: e.startOffset,
          }),
          n = R({ line: e.endLine, column: e.endCol, offset: e.endOffset });
        return t || n ? { start: t, end: n } : void 0;
      }
      function R(e) {
        return e.line && e.column ? e : void 0;
      }
      var y = n(77867);
      const L = {},
        P = {}.hasOwnProperty,
        M = (0, y.z)('type', {
          handlers: {
            root: function (e, t) {
              const n = {
                nodeName: '#document',
                mode: (e.data || {}).quirksMode ? 'quirks' : 'no-quirks',
                childNodes: [],
              };
              return (n.childNodes = v(e.children, n, t)), w(e, n), n;
            },
            element: function (e, t) {
              const n = t;
              let r = n;
              'element' === e.type &&
                'svg' === e.tagName.toLowerCase() &&
                'html' === n.space &&
                (r = s.YP);
              const o = [];
              let a;
              if (e.properties)
                for (a in e.properties)
                  if ('children' !== a && P.call(e.properties, a)) {
                    const t = x(r, a, e.properties[a]);
                    t && o.push(t);
                  }
              const c = r.space;
              (0, i.ok)(c);
              const l = {
                nodeName: e.tagName,
                tagName: e.tagName,
                attrs: o,
                namespaceURI: g.t[c],
                childNodes: [],
                parentNode: null,
              };
              (l.childNodes = v(e.children, l, r)),
                w(e, l),
                'template' === e.tagName &&
                  e.content &&
                  (l.content = (function (e, t) {
                    const n = {
                      nodeName: '#document-fragment',
                      childNodes: [],
                    };
                    return (n.childNodes = v(e.children, n, t)), w(e, n), n;
                  })(e.content, r));
              return l;
            },
            text: function (e) {
              const t = { nodeName: '#text', value: e.value, parentNode: null };
              return w(e, t), t;
            },
            comment: function (e) {
              const t = {
                nodeName: '#comment',
                data: e.value,
                parentNode: null,
              };
              return w(e, t), t;
            },
            doctype: function (e) {
              const t = {
                nodeName: '#documentType',
                name: 'html',
                publicId: '',
                systemId: '',
                parentNode: null,
              };
              return w(e, t), t;
            },
          },
        });
      function x(e, t, n) {
        const r = (0, c.s)(e, t);
        if (
          !1 === n ||
          null == n ||
          ('number' == typeof n && Number.isNaN(n)) ||
          (!n && r.boolean)
        )
          return;
        Array.isArray(n) && (n = r.commaSeparated ? (0, o.P)(n) : (0, u.P)(n));
        const i = { name: r.attribute, value: !0 === n ? '' : String(n) };
        if (r.space && 'html' !== r.space && 'svg' !== r.space) {
          const e = i.name.indexOf(':');
          e < 0
            ? (i.prefix = '')
            : ((i.name = i.name.slice(e + 1)),
              (i.prefix = r.attribute.slice(0, e))),
            (i.namespace = g.t[r.space]);
        }
        return i;
      }
      function v(e, t, n) {
        let r = -1;
        const i = [];
        if (e)
          for (; ++r < e.length; ) {
            const s = M(e[r], n);
            (s.parentNode = t), i.push(s);
          }
        return i;
      }
      function w(e, t) {
        const n = e.position;
        n &&
          n.start &&
          n.end &&
          ((0, i.ok)('number' == typeof n.start.offset),
          (0, i.ok)('number' == typeof n.end.offset),
          (t.sourceCodeLocation = {
            startLine: n.start.line,
            startCol: n.start.column,
            startOffset: n.start.offset,
            endLine: n.end.line,
            endCol: n.end.column,
            endOffset: n.end.offset,
          }));
      }
      const B = [
          'area',
          'base',
          'basefont',
          'bgsound',
          'br',
          'col',
          'command',
          'embed',
          'frame',
          'hr',
          'image',
          'img',
          'input',
          'keygen',
          'link',
          'meta',
          'param',
          'source',
          'track',
          'wbr',
        ],
        F = new Set([
          65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678,
          327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822,
          589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966,
          851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110,
          1114111,
        ]),
        H = '�';
      var U;
      !(function (e) {
        (e[(e.EOF = -1)] = 'EOF'),
          (e[(e.NULL = 0)] = 'NULL'),
          (e[(e.TABULATION = 9)] = 'TABULATION'),
          (e[(e.CARRIAGE_RETURN = 13)] = 'CARRIAGE_RETURN'),
          (e[(e.LINE_FEED = 10)] = 'LINE_FEED'),
          (e[(e.FORM_FEED = 12)] = 'FORM_FEED'),
          (e[(e.SPACE = 32)] = 'SPACE'),
          (e[(e.EXCLAMATION_MARK = 33)] = 'EXCLAMATION_MARK'),
          (e[(e.QUOTATION_MARK = 34)] = 'QUOTATION_MARK'),
          (e[(e.NUMBER_SIGN = 35)] = 'NUMBER_SIGN'),
          (e[(e.AMPERSAND = 38)] = 'AMPERSAND'),
          (e[(e.APOSTROPHE = 39)] = 'APOSTROPHE'),
          (e[(e.HYPHEN_MINUS = 45)] = 'HYPHEN_MINUS'),
          (e[(e.SOLIDUS = 47)] = 'SOLIDUS'),
          (e[(e.DIGIT_0 = 48)] = 'DIGIT_0'),
          (e[(e.DIGIT_9 = 57)] = 'DIGIT_9'),
          (e[(e.SEMICOLON = 59)] = 'SEMICOLON'),
          (e[(e.LESS_THAN_SIGN = 60)] = 'LESS_THAN_SIGN'),
          (e[(e.EQUALS_SIGN = 61)] = 'EQUALS_SIGN'),
          (e[(e.GREATER_THAN_SIGN = 62)] = 'GREATER_THAN_SIGN'),
          (e[(e.QUESTION_MARK = 63)] = 'QUESTION_MARK'),
          (e[(e.LATIN_CAPITAL_A = 65)] = 'LATIN_CAPITAL_A'),
          (e[(e.LATIN_CAPITAL_F = 70)] = 'LATIN_CAPITAL_F'),
          (e[(e.LATIN_CAPITAL_X = 88)] = 'LATIN_CAPITAL_X'),
          (e[(e.LATIN_CAPITAL_Z = 90)] = 'LATIN_CAPITAL_Z'),
          (e[(e.RIGHT_SQUARE_BRACKET = 93)] = 'RIGHT_SQUARE_BRACKET'),
          (e[(e.GRAVE_ACCENT = 96)] = 'GRAVE_ACCENT'),
          (e[(e.LATIN_SMALL_A = 97)] = 'LATIN_SMALL_A'),
          (e[(e.LATIN_SMALL_F = 102)] = 'LATIN_SMALL_F'),
          (e[(e.LATIN_SMALL_X = 120)] = 'LATIN_SMALL_X'),
          (e[(e.LATIN_SMALL_Z = 122)] = 'LATIN_SMALL_Z'),
          (e[(e.REPLACEMENT_CHARACTER = 65533)] = 'REPLACEMENT_CHARACTER');
      })((U = U || (U = {})));
      const G = '--',
        z = '[CDATA[',
        Y = 'doctype',
        j = 'script',
        q = 'public',
        W = 'system';
      function V(e) {
        return e >= 55296 && e <= 57343;
      }
      function Q(e) {
        return (
          (32 !== e &&
            10 !== e &&
            13 !== e &&
            9 !== e &&
            12 !== e &&
            e >= 1 &&
            e <= 31) ||
          (e >= 127 && e <= 159)
        );
      }
      function X(e) {
        return (e >= 64976 && e <= 65007) || F.has(e);
      }
      var $;
      !(function (e) {
        (e.controlCharacterInInputStream = 'control-character-in-input-stream'),
          (e.noncharacterInInputStream = 'noncharacter-in-input-stream'),
          (e.surrogateInInputStream = 'surrogate-in-input-stream'),
          (e.nonVoidHtmlElementStartTagWithTrailingSolidus =
            'non-void-html-element-start-tag-with-trailing-solidus'),
          (e.endTagWithAttributes = 'end-tag-with-attributes'),
          (e.endTagWithTrailingSolidus = 'end-tag-with-trailing-solidus'),
          (e.unexpectedSolidusInTag = 'unexpected-solidus-in-tag'),
          (e.unexpectedNullCharacter = 'unexpected-null-character'),
          (e.unexpectedQuestionMarkInsteadOfTagName =
            'unexpected-question-mark-instead-of-tag-name'),
          (e.invalidFirstCharacterOfTagName =
            'invalid-first-character-of-tag-name'),
          (e.unexpectedEqualsSignBeforeAttributeName =
            'unexpected-equals-sign-before-attribute-name'),
          (e.missingEndTagName = 'missing-end-tag-name'),
          (e.unexpectedCharacterInAttributeName =
            'unexpected-character-in-attribute-name'),
          (e.unknownNamedCharacterReference =
            'unknown-named-character-reference'),
          (e.missingSemicolonAfterCharacterReference =
            'missing-semicolon-after-character-reference'),
          (e.unexpectedCharacterAfterDoctypeSystemIdentifier =
            'unexpected-character-after-doctype-system-identifier'),
          (e.unexpectedCharacterInUnquotedAttributeValue =
            'unexpected-character-in-unquoted-attribute-value'),
          (e.eofBeforeTagName = 'eof-before-tag-name'),
          (e.eofInTag = 'eof-in-tag'),
          (e.missingAttributeValue = 'missing-attribute-value'),
          (e.missingWhitespaceBetweenAttributes =
            'missing-whitespace-between-attributes'),
          (e.missingWhitespaceAfterDoctypePublicKeyword =
            'missing-whitespace-after-doctype-public-keyword'),
          (e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers =
            'missing-whitespace-between-doctype-public-and-system-identifiers'),
          (e.missingWhitespaceAfterDoctypeSystemKeyword =
            'missing-whitespace-after-doctype-system-keyword'),
          (e.missingQuoteBeforeDoctypePublicIdentifier =
            'missing-quote-before-doctype-public-identifier'),
          (e.missingQuoteBeforeDoctypeSystemIdentifier =
            'missing-quote-before-doctype-system-identifier'),
          (e.missingDoctypePublicIdentifier =
            'missing-doctype-public-identifier'),
          (e.missingDoctypeSystemIdentifier =
            'missing-doctype-system-identifier'),
          (e.abruptDoctypePublicIdentifier =
            'abrupt-doctype-public-identifier'),
          (e.abruptDoctypeSystemIdentifier =
            'abrupt-doctype-system-identifier'),
          (e.cdataInHtmlContent = 'cdata-in-html-content'),
          (e.incorrectlyOpenedComment = 'incorrectly-opened-comment'),
          (e.eofInScriptHtmlCommentLikeText =
            'eof-in-script-html-comment-like-text'),
          (e.eofInDoctype = 'eof-in-doctype'),
          (e.nestedComment = 'nested-comment'),
          (e.abruptClosingOfEmptyComment = 'abrupt-closing-of-empty-comment'),
          (e.eofInComment = 'eof-in-comment'),
          (e.incorrectlyClosedComment = 'incorrectly-closed-comment'),
          (e.eofInCdata = 'eof-in-cdata'),
          (e.absenceOfDigitsInNumericCharacterReference =
            'absence-of-digits-in-numeric-character-reference'),
          (e.nullCharacterReference = 'null-character-reference'),
          (e.surrogateCharacterReference = 'surrogate-character-reference'),
          (e.characterReferenceOutsideUnicodeRange =
            'character-reference-outside-unicode-range'),
          (e.controlCharacterReference = 'control-character-reference'),
          (e.noncharacterCharacterReference =
            'noncharacter-character-reference'),
          (e.missingWhitespaceBeforeDoctypeName =
            'missing-whitespace-before-doctype-name'),
          (e.missingDoctypeName = 'missing-doctype-name'),
          (e.invalidCharacterSequenceAfterDoctypeName =
            'invalid-character-sequence-after-doctype-name'),
          (e.duplicateAttribute = 'duplicate-attribute'),
          (e.nonConformingDoctype = 'non-conforming-doctype'),
          (e.missingDoctype = 'missing-doctype'),
          (e.misplacedDoctype = 'misplaced-doctype'),
          (e.endTagWithoutMatchingOpenElement =
            'end-tag-without-matching-open-element'),
          (e.closingOfElementWithOpenChildElements =
            'closing-of-element-with-open-child-elements'),
          (e.disallowedContentInNoscriptInHead =
            'disallowed-content-in-noscript-in-head'),
          (e.openElementsLeftAfterEof = 'open-elements-left-after-eof'),
          (e.abandonedHeadElementChild = 'abandoned-head-element-child'),
          (e.misplacedStartTagForHeadElement =
            'misplaced-start-tag-for-head-element'),
          (e.nestedNoscriptInHead = 'nested-noscript-in-head'),
          (e.eofInElementThatCanContainOnlyText =
            'eof-in-element-that-can-contain-only-text');
      })(($ = $ || ($ = {})));
      class K {
        constructor(e) {
          (this.handler = e),
            (this.html = ''),
            (this.pos = -1),
            (this.lastGapPos = -2),
            (this.gapStack = []),
            (this.skipNextNewLine = !1),
            (this.lastChunkWritten = !1),
            (this.endOfChunkHit = !1),
            (this.bufferWaterline = 65536),
            (this.isEol = !1),
            (this.lineStartPos = 0),
            (this.droppedBufferSize = 0),
            (this.line = 1),
            (this.lastErrOffset = -1);
        }
        get col() {
          return (
            this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos)
          );
        }
        get offset() {
          return this.droppedBufferSize + this.pos;
        }
        getError(e) {
          const { line: t, col: n, offset: r } = this;
          return {
            code: e,
            startLine: t,
            endLine: t,
            startCol: n,
            endCol: n,
            startOffset: r,
            endOffset: r,
          };
        }
        _err(e) {
          this.handler.onParseError &&
            this.lastErrOffset !== this.offset &&
            ((this.lastErrOffset = this.offset),
            this.handler.onParseError(this.getError(e)));
        }
        _addGap() {
          this.gapStack.push(this.lastGapPos), (this.lastGapPos = this.pos);
        }
        _processSurrogate(e) {
          if (this.pos !== this.html.length - 1) {
            const t = this.html.charCodeAt(this.pos + 1);
            if (
              (function (e) {
                return e >= 56320 && e <= 57343;
              })(t)
            )
              return this.pos++, this._addGap(), 1024 * (e - 55296) + 9216 + t;
          } else if (!this.lastChunkWritten)
            return (this.endOfChunkHit = !0), U.EOF;
          return this._err($.surrogateInInputStream), e;
        }
        willDropParsedChunk() {
          return this.pos > this.bufferWaterline;
        }
        dropParsedChunk() {
          this.willDropParsedChunk() &&
            ((this.html = this.html.substring(this.pos)),
            (this.lineStartPos -= this.pos),
            (this.droppedBufferSize += this.pos),
            (this.pos = 0),
            (this.lastGapPos = -2),
            (this.gapStack.length = 0));
        }
        write(e, t) {
          this.html.length > 0 ? (this.html += e) : (this.html = e),
            (this.endOfChunkHit = !1),
            (this.lastChunkWritten = t);
        }
        insertHtmlAtCurrentPos(e) {
          (this.html =
            this.html.substring(0, this.pos + 1) +
            e +
            this.html.substring(this.pos + 1)),
            (this.endOfChunkHit = !1);
        }
        startsWith(e, t) {
          if (this.pos + e.length > this.html.length)
            return (this.endOfChunkHit = !this.lastChunkWritten), !1;
          if (t) return this.html.startsWith(e, this.pos);
          for (let t = 0; t < e.length; t++) {
            if ((32 | this.html.charCodeAt(this.pos + t)) !== e.charCodeAt(t))
              return !1;
          }
          return !0;
        }
        peek(e) {
          const t = this.pos + e;
          if (t >= this.html.length)
            return (this.endOfChunkHit = !this.lastChunkWritten), U.EOF;
          const n = this.html.charCodeAt(t);
          return n === U.CARRIAGE_RETURN ? U.LINE_FEED : n;
        }
        advance() {
          if (
            (this.pos++,
            this.isEol &&
              ((this.isEol = !1), this.line++, (this.lineStartPos = this.pos)),
            this.pos >= this.html.length)
          )
            return (this.endOfChunkHit = !this.lastChunkWritten), U.EOF;
          let e = this.html.charCodeAt(this.pos);
          if (e === U.CARRIAGE_RETURN)
            return (this.isEol = !0), (this.skipNextNewLine = !0), U.LINE_FEED;
          if (e === U.LINE_FEED && ((this.isEol = !0), this.skipNextNewLine))
            return (
              this.line--,
              (this.skipNextNewLine = !1),
              this._addGap(),
              this.advance()
            );
          (this.skipNextNewLine = !1), V(e) && (e = this._processSurrogate(e));
          return (
            null === this.handler.onParseError ||
              (e > 31 && e < 127) ||
              e === U.LINE_FEED ||
              e === U.CARRIAGE_RETURN ||
              (e > 159 && e < 64976) ||
              this._checkForProblematicCharacters(e),
            e
          );
        }
        _checkForProblematicCharacters(e) {
          Q(e)
            ? this._err($.controlCharacterInInputStream)
            : X(e) && this._err($.noncharacterInInputStream);
        }
        retreat(e) {
          for (this.pos -= e; this.pos < this.lastGapPos; )
            (this.lastGapPos = this.gapStack.pop()), this.pos--;
          this.isEol = !1;
        }
      }
      var Z;
      function J(e, t) {
        for (let n = e.attrs.length - 1; n >= 0; n--)
          if (e.attrs[n].name === t) return e.attrs[n].value;
        return null;
      }
      !(function (e) {
        (e[(e.CHARACTER = 0)] = 'CHARACTER'),
          (e[(e.NULL_CHARACTER = 1)] = 'NULL_CHARACTER'),
          (e[(e.WHITESPACE_CHARACTER = 2)] = 'WHITESPACE_CHARACTER'),
          (e[(e.START_TAG = 3)] = 'START_TAG'),
          (e[(e.END_TAG = 4)] = 'END_TAG'),
          (e[(e.COMMENT = 5)] = 'COMMENT'),
          (e[(e.DOCTYPE = 6)] = 'DOCTYPE'),
          (e[(e.EOF = 7)] = 'EOF'),
          (e[(e.HIBERNATION = 8)] = 'HIBERNATION');
      })((Z = Z || (Z = {})));
      var ee,
        te = new Uint16Array(
          'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'
            .split('')
            .map((e) => e.charCodeAt(0)),
        ),
        ne = new Uint16Array(
          'Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢'
            .split('')
            .map((e) => e.charCodeAt(0)),
        );
      const re = new Map([
          [0, 65533],
          [128, 8364],
          [130, 8218],
          [131, 402],
          [132, 8222],
          [133, 8230],
          [134, 8224],
          [135, 8225],
          [136, 710],
          [137, 8240],
          [138, 352],
          [139, 8249],
          [140, 338],
          [142, 381],
          [145, 8216],
          [146, 8217],
          [147, 8220],
          [148, 8221],
          [149, 8226],
          [150, 8211],
          [151, 8212],
          [152, 732],
          [153, 8482],
          [154, 353],
          [155, 8250],
          [156, 339],
          [158, 382],
          [159, 376],
        ]),
        ie =
          null !== (ee = String.fromCodePoint) && void 0 !== ee
            ? ee
            : function (e) {
                let t = '';
                return (
                  e > 65535 &&
                    ((e -= 65536),
                    (t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
                    (e = 56320 | (1023 & e))),
                  (t += String.fromCharCode(e)),
                  t
                );
              };
      function se(e) {
        var t;
        return (e >= 55296 && e <= 57343) || e > 1114111
          ? 65533
          : null !== (t = re.get(e)) && void 0 !== t
            ? t
            : e;
      }
      var oe;
      !(function (e) {
        (e[(e.NUM = 35)] = 'NUM'),
          (e[(e.SEMI = 59)] = 'SEMI'),
          (e[(e.EQUALS = 61)] = 'EQUALS'),
          (e[(e.ZERO = 48)] = 'ZERO'),
          (e[(e.NINE = 57)] = 'NINE'),
          (e[(e.LOWER_A = 97)] = 'LOWER_A'),
          (e[(e.LOWER_F = 102)] = 'LOWER_F'),
          (e[(e.LOWER_X = 120)] = 'LOWER_X'),
          (e[(e.LOWER_Z = 122)] = 'LOWER_Z'),
          (e[(e.UPPER_A = 65)] = 'UPPER_A'),
          (e[(e.UPPER_F = 70)] = 'UPPER_F'),
          (e[(e.UPPER_Z = 90)] = 'UPPER_Z');
      })(oe || (oe = {}));
      var ae, ce, le;
      function ue(e) {
        return e >= oe.ZERO && e <= oe.NINE;
      }
      function he(e) {
        return (
          e === oe.EQUALS ||
          (function (e) {
            return (
              (e >= oe.UPPER_A && e <= oe.UPPER_Z) ||
              (e >= oe.LOWER_A && e <= oe.LOWER_Z) ||
              ue(e)
            );
          })(e)
        );
      }
      !(function (e) {
        (e[(e.VALUE_LENGTH = 49152)] = 'VALUE_LENGTH'),
          (e[(e.BRANCH_LENGTH = 16256)] = 'BRANCH_LENGTH'),
          (e[(e.JUMP_TABLE = 127)] = 'JUMP_TABLE');
      })(ae || (ae = {})),
        (function (e) {
          (e[(e.EntityStart = 0)] = 'EntityStart'),
            (e[(e.NumericStart = 1)] = 'NumericStart'),
            (e[(e.NumericDecimal = 2)] = 'NumericDecimal'),
            (e[(e.NumericHex = 3)] = 'NumericHex'),
            (e[(e.NamedEntity = 4)] = 'NamedEntity');
        })(ce || (ce = {})),
        (function (e) {
          (e[(e.Legacy = 0)] = 'Legacy'),
            (e[(e.Strict = 1)] = 'Strict'),
            (e[(e.Attribute = 2)] = 'Attribute');
        })(le || (le = {}));
      class pe {
        constructor(e, t, n) {
          (this.decodeTree = e),
            (this.emitCodePoint = t),
            (this.errors = n),
            (this.state = ce.EntityStart),
            (this.consumed = 1),
            (this.result = 0),
            (this.treeIndex = 0),
            (this.excess = 1),
            (this.decodeMode = le.Strict);
        }
        startEntity(e) {
          (this.decodeMode = e),
            (this.state = ce.EntityStart),
            (this.result = 0),
            (this.treeIndex = 0),
            (this.excess = 1),
            (this.consumed = 1);
        }
        write(e, t) {
          switch (this.state) {
            case ce.EntityStart:
              return e.charCodeAt(t) === oe.NUM
                ? ((this.state = ce.NumericStart),
                  (this.consumed += 1),
                  this.stateNumericStart(e, t + 1))
                : ((this.state = ce.NamedEntity), this.stateNamedEntity(e, t));
            case ce.NumericStart:
              return this.stateNumericStart(e, t);
            case ce.NumericDecimal:
              return this.stateNumericDecimal(e, t);
            case ce.NumericHex:
              return this.stateNumericHex(e, t);
            case ce.NamedEntity:
              return this.stateNamedEntity(e, t);
          }
        }
        stateNumericStart(e, t) {
          return t >= e.length
            ? -1
            : (32 | e.charCodeAt(t)) === oe.LOWER_X
              ? ((this.state = ce.NumericHex),
                (this.consumed += 1),
                this.stateNumericHex(e, t + 1))
              : ((this.state = ce.NumericDecimal),
                this.stateNumericDecimal(e, t));
        }
        addToNumericResult(e, t, n, r) {
          if (t !== n) {
            const i = n - t;
            (this.result =
              this.result * Math.pow(r, i) + parseInt(e.substr(t, i), r)),
              (this.consumed += i);
          }
        }
        stateNumericHex(e, t) {
          const n = t;
          for (; t < e.length; ) {
            const i = e.charCodeAt(t);
            if (
              !(
                ue(i) ||
                ((r = i),
                (r >= oe.UPPER_A && r <= oe.UPPER_F) ||
                  (r >= oe.LOWER_A && r <= oe.LOWER_F))
              )
            )
              return (
                this.addToNumericResult(e, n, t, 16),
                this.emitNumericEntity(i, 3)
              );
            t += 1;
          }
          var r;
          return this.addToNumericResult(e, n, t, 16), -1;
        }
        stateNumericDecimal(e, t) {
          const n = t;
          for (; t < e.length; ) {
            const r = e.charCodeAt(t);
            if (!ue(r))
              return (
                this.addToNumericResult(e, n, t, 10),
                this.emitNumericEntity(r, 2)
              );
            t += 1;
          }
          return this.addToNumericResult(e, n, t, 10), -1;
        }
        emitNumericEntity(e, t) {
          var n;
          if (this.consumed <= t)
            return (
              null === (n = this.errors) ||
                void 0 === n ||
                n.absenceOfDigitsInNumericCharacterReference(this.consumed),
              0
            );
          if (e === oe.SEMI) this.consumed += 1;
          else if (this.decodeMode === le.Strict) return 0;
          return (
            this.emitCodePoint(se(this.result), this.consumed),
            this.errors &&
              (e !== oe.SEMI &&
                this.errors.missingSemicolonAfterCharacterReference(),
              this.errors.validateNumericCharacterReference(this.result)),
            this.consumed
          );
        }
        stateNamedEntity(e, t) {
          const { decodeTree: n } = this;
          let r = n[this.treeIndex],
            i = (r & ae.VALUE_LENGTH) >> 14;
          for (; t < e.length; t++, this.excess++) {
            const s = e.charCodeAt(t);
            if (
              ((this.treeIndex = fe(n, r, this.treeIndex + Math.max(1, i), s)),
              this.treeIndex < 0)
            )
              return 0 === this.result ||
                (this.decodeMode === le.Attribute && (0 === i || he(s)))
                ? 0
                : this.emitNotTerminatedNamedEntity();
            if (
              ((r = n[this.treeIndex]),
              (i = (r & ae.VALUE_LENGTH) >> 14),
              0 !== i)
            ) {
              if (s === oe.SEMI)
                return this.emitNamedEntityData(
                  this.treeIndex,
                  i,
                  this.consumed + this.excess,
                );
              this.decodeMode !== le.Strict &&
                ((this.result = this.treeIndex),
                (this.consumed += this.excess),
                (this.excess = 0));
            }
          }
          return -1;
        }
        emitNotTerminatedNamedEntity() {
          var e;
          const { result: t, decodeTree: n } = this,
            r = (n[t] & ae.VALUE_LENGTH) >> 14;
          return (
            this.emitNamedEntityData(t, r, this.consumed),
            null === (e = this.errors) ||
              void 0 === e ||
              e.missingSemicolonAfterCharacterReference(),
            this.consumed
          );
        }
        emitNamedEntityData(e, t, n) {
          const { decodeTree: r } = this;
          return (
            this.emitCodePoint(1 === t ? r[e] & ~ae.VALUE_LENGTH : r[e + 1], n),
            3 === t && this.emitCodePoint(r[e + 2], n),
            n
          );
        }
        end() {
          var e;
          switch (this.state) {
            case ce.NamedEntity:
              return 0 === this.result ||
                (this.decodeMode === le.Attribute &&
                  this.result !== this.treeIndex)
                ? 0
                : this.emitNotTerminatedNamedEntity();
            case ce.NumericDecimal:
              return this.emitNumericEntity(0, 2);
            case ce.NumericHex:
              return this.emitNumericEntity(0, 3);
            case ce.NumericStart:
              return (
                null === (e = this.errors) ||
                  void 0 === e ||
                  e.absenceOfDigitsInNumericCharacterReference(this.consumed),
                0
              );
            case ce.EntityStart:
              return 0;
          }
        }
      }
      function de(e) {
        let t = '';
        const n = new pe(e, (e) => (t += ie(e)));
        return function (e, r) {
          let i = 0,
            s = 0;
          for (; (s = e.indexOf('&', s)) >= 0; ) {
            (t += e.slice(i, s)), n.startEntity(r);
            const o = n.write(e, s + 1);
            if (o < 0) {
              i = s + n.end();
              break;
            }
            (i = s + o), (s = 0 === o ? i + 1 : i);
          }
          const o = t + e.slice(i);
          return (t = ''), o;
        };
      }
      function fe(e, t, n, r) {
        const i = (t & ae.BRANCH_LENGTH) >> 7,
          s = t & ae.JUMP_TABLE;
        if (0 === i) return 0 !== s && r === s ? n : -1;
        if (s) {
          const t = r - s;
          return t < 0 || t >= i ? -1 : e[n + t] - 1;
        }
        let o = n,
          a = o + i - 1;
        for (; o <= a; ) {
          const t = (o + a) >>> 1,
            n = e[t];
          if (n < r) o = t + 1;
          else {
            if (!(n > r)) return e[t + i];
            a = t - 1;
          }
        }
        return -1;
      }
      de(te), de(ne);
      var me, Ee, Te, Ae, _e;
      !(function (e) {
        (e.HTML = 'http://www.w3.org/1999/xhtml'),
          (e.MATHML = 'http://www.w3.org/1998/Math/MathML'),
          (e.SVG = 'http://www.w3.org/2000/svg'),
          (e.XLINK = 'http://www.w3.org/1999/xlink'),
          (e.XML = 'http://www.w3.org/XML/1998/namespace'),
          (e.XMLNS = 'http://www.w3.org/2000/xmlns/');
      })((me = me || (me = {}))),
        (function (e) {
          (e.TYPE = 'type'),
            (e.ACTION = 'action'),
            (e.ENCODING = 'encoding'),
            (e.PROMPT = 'prompt'),
            (e.NAME = 'name'),
            (e.COLOR = 'color'),
            (e.FACE = 'face'),
            (e.SIZE = 'size');
        })((Ee = Ee || (Ee = {}))),
        (function (e) {
          (e.NO_QUIRKS = 'no-quirks'),
            (e.QUIRKS = 'quirks'),
            (e.LIMITED_QUIRKS = 'limited-quirks');
        })((Te = Te || (Te = {}))),
        (function (e) {
          (e.A = 'a'),
            (e.ADDRESS = 'address'),
            (e.ANNOTATION_XML = 'annotation-xml'),
            (e.APPLET = 'applet'),
            (e.AREA = 'area'),
            (e.ARTICLE = 'article'),
            (e.ASIDE = 'aside'),
            (e.B = 'b'),
            (e.BASE = 'base'),
            (e.BASEFONT = 'basefont'),
            (e.BGSOUND = 'bgsound'),
            (e.BIG = 'big'),
            (e.BLOCKQUOTE = 'blockquote'),
            (e.BODY = 'body'),
            (e.BR = 'br'),
            (e.BUTTON = 'button'),
            (e.CAPTION = 'caption'),
            (e.CENTER = 'center'),
            (e.CODE = 'code'),
            (e.COL = 'col'),
            (e.COLGROUP = 'colgroup'),
            (e.DD = 'dd'),
            (e.DESC = 'desc'),
            (e.DETAILS = 'details'),
            (e.DIALOG = 'dialog'),
            (e.DIR = 'dir'),
            (e.DIV = 'div'),
            (e.DL = 'dl'),
            (e.DT = 'dt'),
            (e.EM = 'em'),
            (e.EMBED = 'embed'),
            (e.FIELDSET = 'fieldset'),
            (e.FIGCAPTION = 'figcaption'),
            (e.FIGURE = 'figure'),
            (e.FONT = 'font'),
            (e.FOOTER = 'footer'),
            (e.FOREIGN_OBJECT = 'foreignObject'),
            (e.FORM = 'form'),
            (e.FRAME = 'frame'),
            (e.FRAMESET = 'frameset'),
            (e.H1 = 'h1'),
            (e.H2 = 'h2'),
            (e.H3 = 'h3'),
            (e.H4 = 'h4'),
            (e.H5 = 'h5'),
            (e.H6 = 'h6'),
            (e.HEAD = 'head'),
            (e.HEADER = 'header'),
            (e.HGROUP = 'hgroup'),
            (e.HR = 'hr'),
            (e.HTML = 'html'),
            (e.I = 'i'),
            (e.IMG = 'img'),
            (e.IMAGE = 'image'),
            (e.INPUT = 'input'),
            (e.IFRAME = 'iframe'),
            (e.KEYGEN = 'keygen'),
            (e.LABEL = 'label'),
            (e.LI = 'li'),
            (e.LINK = 'link'),
            (e.LISTING = 'listing'),
            (e.MAIN = 'main'),
            (e.MALIGNMARK = 'malignmark'),
            (e.MARQUEE = 'marquee'),
            (e.MATH = 'math'),
            (e.MENU = 'menu'),
            (e.META = 'meta'),
            (e.MGLYPH = 'mglyph'),
            (e.MI = 'mi'),
            (e.MO = 'mo'),
            (e.MN = 'mn'),
            (e.MS = 'ms'),
            (e.MTEXT = 'mtext'),
            (e.NAV = 'nav'),
            (e.NOBR = 'nobr'),
            (e.NOFRAMES = 'noframes'),
            (e.NOEMBED = 'noembed'),
            (e.NOSCRIPT = 'noscript'),
            (e.OBJECT = 'object'),
            (e.OL = 'ol'),
            (e.OPTGROUP = 'optgroup'),
            (e.OPTION = 'option'),
            (e.P = 'p'),
            (e.PARAM = 'param'),
            (e.PLAINTEXT = 'plaintext'),
            (e.PRE = 'pre'),
            (e.RB = 'rb'),
            (e.RP = 'rp'),
            (e.RT = 'rt'),
            (e.RTC = 'rtc'),
            (e.RUBY = 'ruby'),
            (e.S = 's'),
            (e.SCRIPT = 'script'),
            (e.SECTION = 'section'),
            (e.SELECT = 'select'),
            (e.SOURCE = 'source'),
            (e.SMALL = 'small'),
            (e.SPAN = 'span'),
            (e.STRIKE = 'strike'),
            (e.STRONG = 'strong'),
            (e.STYLE = 'style'),
            (e.SUB = 'sub'),
            (e.SUMMARY = 'summary'),
            (e.SUP = 'sup'),
            (e.TABLE = 'table'),
            (e.TBODY = 'tbody'),
            (e.TEMPLATE = 'template'),
            (e.TEXTAREA = 'textarea'),
            (e.TFOOT = 'tfoot'),
            (e.TD = 'td'),
            (e.TH = 'th'),
            (e.THEAD = 'thead'),
            (e.TITLE = 'title'),
            (e.TR = 'tr'),
            (e.TRACK = 'track'),
            (e.TT = 'tt'),
            (e.U = 'u'),
            (e.UL = 'ul'),
            (e.SVG = 'svg'),
            (e.VAR = 'var'),
            (e.WBR = 'wbr'),
            (e.XMP = 'xmp');
        })((Ae = Ae || (Ae = {}))),
        (function (e) {
          (e[(e.UNKNOWN = 0)] = 'UNKNOWN'),
            (e[(e.A = 1)] = 'A'),
            (e[(e.ADDRESS = 2)] = 'ADDRESS'),
            (e[(e.ANNOTATION_XML = 3)] = 'ANNOTATION_XML'),
            (e[(e.APPLET = 4)] = 'APPLET'),
            (e[(e.AREA = 5)] = 'AREA'),
            (e[(e.ARTICLE = 6)] = 'ARTICLE'),
            (e[(e.ASIDE = 7)] = 'ASIDE'),
            (e[(e.B = 8)] = 'B'),
            (e[(e.BASE = 9)] = 'BASE'),
            (e[(e.BASEFONT = 10)] = 'BASEFONT'),
            (e[(e.BGSOUND = 11)] = 'BGSOUND'),
            (e[(e.BIG = 12)] = 'BIG'),
            (e[(e.BLOCKQUOTE = 13)] = 'BLOCKQUOTE'),
            (e[(e.BODY = 14)] = 'BODY'),
            (e[(e.BR = 15)] = 'BR'),
            (e[(e.BUTTON = 16)] = 'BUTTON'),
            (e[(e.CAPTION = 17)] = 'CAPTION'),
            (e[(e.CENTER = 18)] = 'CENTER'),
            (e[(e.CODE = 19)] = 'CODE'),
            (e[(e.COL = 20)] = 'COL'),
            (e[(e.COLGROUP = 21)] = 'COLGROUP'),
            (e[(e.DD = 22)] = 'DD'),
            (e[(e.DESC = 23)] = 'DESC'),
            (e[(e.DETAILS = 24)] = 'DETAILS'),
            (e[(e.DIALOG = 25)] = 'DIALOG'),
            (e[(e.DIR = 26)] = 'DIR'),
            (e[(e.DIV = 27)] = 'DIV'),
            (e[(e.DL = 28)] = 'DL'),
            (e[(e.DT = 29)] = 'DT'),
            (e[(e.EM = 30)] = 'EM'),
            (e[(e.EMBED = 31)] = 'EMBED'),
            (e[(e.FIELDSET = 32)] = 'FIELDSET'),
            (e[(e.FIGCAPTION = 33)] = 'FIGCAPTION'),
            (e[(e.FIGURE = 34)] = 'FIGURE'),
            (e[(e.FONT = 35)] = 'FONT'),
            (e[(e.FOOTER = 36)] = 'FOOTER'),
            (e[(e.FOREIGN_OBJECT = 37)] = 'FOREIGN_OBJECT'),
            (e[(e.FORM = 38)] = 'FORM'),
            (e[(e.FRAME = 39)] = 'FRAME'),
            (e[(e.FRAMESET = 40)] = 'FRAMESET'),
            (e[(e.H1 = 41)] = 'H1'),
            (e[(e.H2 = 42)] = 'H2'),
            (e[(e.H3 = 43)] = 'H3'),
            (e[(e.H4 = 44)] = 'H4'),
            (e[(e.H5 = 45)] = 'H5'),
            (e[(e.H6 = 46)] = 'H6'),
            (e[(e.HEAD = 47)] = 'HEAD'),
            (e[(e.HEADER = 48)] = 'HEADER'),
            (e[(e.HGROUP = 49)] = 'HGROUP'),
            (e[(e.HR = 50)] = 'HR'),
            (e[(e.HTML = 51)] = 'HTML'),
            (e[(e.I = 52)] = 'I'),
            (e[(e.IMG = 53)] = 'IMG'),
            (e[(e.IMAGE = 54)] = 'IMAGE'),
            (e[(e.INPUT = 55)] = 'INPUT'),
            (e[(e.IFRAME = 56)] = 'IFRAME'),
            (e[(e.KEYGEN = 57)] = 'KEYGEN'),
            (e[(e.LABEL = 58)] = 'LABEL'),
            (e[(e.LI = 59)] = 'LI'),
            (e[(e.LINK = 60)] = 'LINK'),
            (e[(e.LISTING = 61)] = 'LISTING'),
            (e[(e.MAIN = 62)] = 'MAIN'),
            (e[(e.MALIGNMARK = 63)] = 'MALIGNMARK'),
            (e[(e.MARQUEE = 64)] = 'MARQUEE'),
            (e[(e.MATH = 65)] = 'MATH'),
            (e[(e.MENU = 66)] = 'MENU'),
            (e[(e.META = 67)] = 'META'),
            (e[(e.MGLYPH = 68)] = 'MGLYPH'),
            (e[(e.MI = 69)] = 'MI'),
            (e[(e.MO = 70)] = 'MO'),
            (e[(e.MN = 71)] = 'MN'),
            (e[(e.MS = 72)] = 'MS'),
            (e[(e.MTEXT = 73)] = 'MTEXT'),
            (e[(e.NAV = 74)] = 'NAV'),
            (e[(e.NOBR = 75)] = 'NOBR'),
            (e[(e.NOFRAMES = 76)] = 'NOFRAMES'),
            (e[(e.NOEMBED = 77)] = 'NOEMBED'),
            (e[(e.NOSCRIPT = 78)] = 'NOSCRIPT'),
            (e[(e.OBJECT = 79)] = 'OBJECT'),
            (e[(e.OL = 80)] = 'OL'),
            (e[(e.OPTGROUP = 81)] = 'OPTGROUP'),
            (e[(e.OPTION = 82)] = 'OPTION'),
            (e[(e.P = 83)] = 'P'),
            (e[(e.PARAM = 84)] = 'PARAM'),
            (e[(e.PLAINTEXT = 85)] = 'PLAINTEXT'),
            (e[(e.PRE = 86)] = 'PRE'),
            (e[(e.RB = 87)] = 'RB'),
            (e[(e.RP = 88)] = 'RP'),
            (e[(e.RT = 89)] = 'RT'),
            (e[(e.RTC = 90)] = 'RTC'),
            (e[(e.RUBY = 91)] = 'RUBY'),
            (e[(e.S = 92)] = 'S'),
            (e[(e.SCRIPT = 93)] = 'SCRIPT'),
            (e[(e.SECTION = 94)] = 'SECTION'),
            (e[(e.SELECT = 95)] = 'SELECT'),
            (e[(e.SOURCE = 96)] = 'SOURCE'),
            (e[(e.SMALL = 97)] = 'SMALL'),
            (e[(e.SPAN = 98)] = 'SPAN'),
            (e[(e.STRIKE = 99)] = 'STRIKE'),
            (e[(e.STRONG = 100)] = 'STRONG'),
            (e[(e.STYLE = 101)] = 'STYLE'),
            (e[(e.SUB = 102)] = 'SUB'),
            (e[(e.SUMMARY = 103)] = 'SUMMARY'),
            (e[(e.SUP = 104)] = 'SUP'),
            (e[(e.TABLE = 105)] = 'TABLE'),
            (e[(e.TBODY = 106)] = 'TBODY'),
            (e[(e.TEMPLATE = 107)] = 'TEMPLATE'),
            (e[(e.TEXTAREA = 108)] = 'TEXTAREA'),
            (e[(e.TFOOT = 109)] = 'TFOOT'),
            (e[(e.TD = 110)] = 'TD'),
            (e[(e.TH = 111)] = 'TH'),
            (e[(e.THEAD = 112)] = 'THEAD'),
            (e[(e.TITLE = 113)] = 'TITLE'),
            (e[(e.TR = 114)] = 'TR'),
            (e[(e.TRACK = 115)] = 'TRACK'),
            (e[(e.TT = 116)] = 'TT'),
            (e[(e.U = 117)] = 'U'),
            (e[(e.UL = 118)] = 'UL'),
            (e[(e.SVG = 119)] = 'SVG'),
            (e[(e.VAR = 120)] = 'VAR'),
            (e[(e.WBR = 121)] = 'WBR'),
            (e[(e.XMP = 122)] = 'XMP');
        })((_e = _e || (_e = {})));
      const ge = new Map([
        [Ae.A, _e.A],
        [Ae.ADDRESS, _e.ADDRESS],
        [Ae.ANNOTATION_XML, _e.ANNOTATION_XML],
        [Ae.APPLET, _e.APPLET],
        [Ae.AREA, _e.AREA],
        [Ae.ARTICLE, _e.ARTICLE],
        [Ae.ASIDE, _e.ASIDE],
        [Ae.B, _e.B],
        [Ae.BASE, _e.BASE],
        [Ae.BASEFONT, _e.BASEFONT],
        [Ae.BGSOUND, _e.BGSOUND],
        [Ae.BIG, _e.BIG],
        [Ae.BLOCKQUOTE, _e.BLOCKQUOTE],
        [Ae.BODY, _e.BODY],
        [Ae.BR, _e.BR],
        [Ae.BUTTON, _e.BUTTON],
        [Ae.CAPTION, _e.CAPTION],
        [Ae.CENTER, _e.CENTER],
        [Ae.CODE, _e.CODE],
        [Ae.COL, _e.COL],
        [Ae.COLGROUP, _e.COLGROUP],
        [Ae.DD, _e.DD],
        [Ae.DESC, _e.DESC],
        [Ae.DETAILS, _e.DETAILS],
        [Ae.DIALOG, _e.DIALOG],
        [Ae.DIR, _e.DIR],
        [Ae.DIV, _e.DIV],
        [Ae.DL, _e.DL],
        [Ae.DT, _e.DT],
        [Ae.EM, _e.EM],
        [Ae.EMBED, _e.EMBED],
        [Ae.FIELDSET, _e.FIELDSET],
        [Ae.FIGCAPTION, _e.FIGCAPTION],
        [Ae.FIGURE, _e.FIGURE],
        [Ae.FONT, _e.FONT],
        [Ae.FOOTER, _e.FOOTER],
        [Ae.FOREIGN_OBJECT, _e.FOREIGN_OBJECT],
        [Ae.FORM, _e.FORM],
        [Ae.FRAME, _e.FRAME],
        [Ae.FRAMESET, _e.FRAMESET],
        [Ae.H1, _e.H1],
        [Ae.H2, _e.H2],
        [Ae.H3, _e.H3],
        [Ae.H4, _e.H4],
        [Ae.H5, _e.H5],
        [Ae.H6, _e.H6],
        [Ae.HEAD, _e.HEAD],
        [Ae.HEADER, _e.HEADER],
        [Ae.HGROUP, _e.HGROUP],
        [Ae.HR, _e.HR],
        [Ae.HTML, _e.HTML],
        [Ae.I, _e.I],
        [Ae.IMG, _e.IMG],
        [Ae.IMAGE, _e.IMAGE],
        [Ae.INPUT, _e.INPUT],
        [Ae.IFRAME, _e.IFRAME],
        [Ae.KEYGEN, _e.KEYGEN],
        [Ae.LABEL, _e.LABEL],
        [Ae.LI, _e.LI],
        [Ae.LINK, _e.LINK],
        [Ae.LISTING, _e.LISTING],
        [Ae.MAIN, _e.MAIN],
        [Ae.MALIGNMARK, _e.MALIGNMARK],
        [Ae.MARQUEE, _e.MARQUEE],
        [Ae.MATH, _e.MATH],
        [Ae.MENU, _e.MENU],
        [Ae.META, _e.META],
        [Ae.MGLYPH, _e.MGLYPH],
        [Ae.MI, _e.MI],
        [Ae.MO, _e.MO],
        [Ae.MN, _e.MN],
        [Ae.MS, _e.MS],
        [Ae.MTEXT, _e.MTEXT],
        [Ae.NAV, _e.NAV],
        [Ae.NOBR, _e.NOBR],
        [Ae.NOFRAMES, _e.NOFRAMES],
        [Ae.NOEMBED, _e.NOEMBED],
        [Ae.NOSCRIPT, _e.NOSCRIPT],
        [Ae.OBJECT, _e.OBJECT],
        [Ae.OL, _e.OL],
        [Ae.OPTGROUP, _e.OPTGROUP],
        [Ae.OPTION, _e.OPTION],
        [Ae.P, _e.P],
        [Ae.PARAM, _e.PARAM],
        [Ae.PLAINTEXT, _e.PLAINTEXT],
        [Ae.PRE, _e.PRE],
        [Ae.RB, _e.RB],
        [Ae.RP, _e.RP],
        [Ae.RT, _e.RT],
        [Ae.RTC, _e.RTC],
        [Ae.RUBY, _e.RUBY],
        [Ae.S, _e.S],
        [Ae.SCRIPT, _e.SCRIPT],
        [Ae.SECTION, _e.SECTION],
        [Ae.SELECT, _e.SELECT],
        [Ae.SOURCE, _e.SOURCE],
        [Ae.SMALL, _e.SMALL],
        [Ae.SPAN, _e.SPAN],
        [Ae.STRIKE, _e.STRIKE],
        [Ae.STRONG, _e.STRONG],
        [Ae.STYLE, _e.STYLE],
        [Ae.SUB, _e.SUB],
        [Ae.SUMMARY, _e.SUMMARY],
        [Ae.SUP, _e.SUP],
        [Ae.TABLE, _e.TABLE],
        [Ae.TBODY, _e.TBODY],
        [Ae.TEMPLATE, _e.TEMPLATE],
        [Ae.TEXTAREA, _e.TEXTAREA],
        [Ae.TFOOT, _e.TFOOT],
        [Ae.TD, _e.TD],
        [Ae.TH, _e.TH],
        [Ae.THEAD, _e.THEAD],
        [Ae.TITLE, _e.TITLE],
        [Ae.TR, _e.TR],
        [Ae.TRACK, _e.TRACK],
        [Ae.TT, _e.TT],
        [Ae.U, _e.U],
        [Ae.UL, _e.UL],
        [Ae.SVG, _e.SVG],
        [Ae.VAR, _e.VAR],
        [Ae.WBR, _e.WBR],
        [Ae.XMP, _e.XMP],
      ]);
      function Ce(e) {
        var t;
        return null !== (t = ge.get(e)) && void 0 !== t ? t : _e.UNKNOWN;
      }
      const Se = _e,
        Ie = {
          [me.HTML]: new Set([
            Se.ADDRESS,
            Se.APPLET,
            Se.AREA,
            Se.ARTICLE,
            Se.ASIDE,
            Se.BASE,
            Se.BASEFONT,
            Se.BGSOUND,
            Se.BLOCKQUOTE,
            Se.BODY,
            Se.BR,
            Se.BUTTON,
            Se.CAPTION,
            Se.CENTER,
            Se.COL,
            Se.COLGROUP,
            Se.DD,
            Se.DETAILS,
            Se.DIR,
            Se.DIV,
            Se.DL,
            Se.DT,
            Se.EMBED,
            Se.FIELDSET,
            Se.FIGCAPTION,
            Se.FIGURE,
            Se.FOOTER,
            Se.FORM,
            Se.FRAME,
            Se.FRAMESET,
            Se.H1,
            Se.H2,
            Se.H3,
            Se.H4,
            Se.H5,
            Se.H6,
            Se.HEAD,
            Se.HEADER,
            Se.HGROUP,
            Se.HR,
            Se.HTML,
            Se.IFRAME,
            Se.IMG,
            Se.INPUT,
            Se.LI,
            Se.LINK,
            Se.LISTING,
            Se.MAIN,
            Se.MARQUEE,
            Se.MENU,
            Se.META,
            Se.NAV,
            Se.NOEMBED,
            Se.NOFRAMES,
            Se.NOSCRIPT,
            Se.OBJECT,
            Se.OL,
            Se.P,
            Se.PARAM,
            Se.PLAINTEXT,
            Se.PRE,
            Se.SCRIPT,
            Se.SECTION,
            Se.SELECT,
            Se.SOURCE,
            Se.STYLE,
            Se.SUMMARY,
            Se.TABLE,
            Se.TBODY,
            Se.TD,
            Se.TEMPLATE,
            Se.TEXTAREA,
            Se.TFOOT,
            Se.TH,
            Se.THEAD,
            Se.TITLE,
            Se.TR,
            Se.TRACK,
            Se.UL,
            Se.WBR,
            Se.XMP,
          ]),
          [me.MATHML]: new Set([
            Se.MI,
            Se.MO,
            Se.MN,
            Se.MS,
            Se.MTEXT,
            Se.ANNOTATION_XML,
          ]),
          [me.SVG]: new Set([Se.TITLE, Se.FOREIGN_OBJECT, Se.DESC]),
          [me.XLINK]: new Set(),
          [me.XML]: new Set(),
          [me.XMLNS]: new Set(),
        };
      function Ne(e) {
        return (
          e === Se.H1 ||
          e === Se.H2 ||
          e === Se.H3 ||
          e === Se.H4 ||
          e === Se.H5 ||
          e === Se.H6
        );
      }
      new Set([
        Ae.STYLE,
        Ae.SCRIPT,
        Ae.XMP,
        Ae.IFRAME,
        Ae.NOEMBED,
        Ae.NOFRAMES,
        Ae.PLAINTEXT,
      ]);
      const ke = new Map([
        [128, 8364],
        [130, 8218],
        [131, 402],
        [132, 8222],
        [133, 8230],
        [134, 8224],
        [135, 8225],
        [136, 710],
        [137, 8240],
        [138, 352],
        [139, 8249],
        [140, 338],
        [142, 381],
        [145, 8216],
        [146, 8217],
        [147, 8220],
        [148, 8221],
        [149, 8226],
        [150, 8211],
        [151, 8212],
        [152, 732],
        [153, 8482],
        [154, 353],
        [155, 8250],
        [156, 339],
        [158, 382],
        [159, 376],
      ]);
      var be;
      !(function (e) {
        (e[(e.DATA = 0)] = 'DATA'),
          (e[(e.RCDATA = 1)] = 'RCDATA'),
          (e[(e.RAWTEXT = 2)] = 'RAWTEXT'),
          (e[(e.SCRIPT_DATA = 3)] = 'SCRIPT_DATA'),
          (e[(e.PLAINTEXT = 4)] = 'PLAINTEXT'),
          (e[(e.TAG_OPEN = 5)] = 'TAG_OPEN'),
          (e[(e.END_TAG_OPEN = 6)] = 'END_TAG_OPEN'),
          (e[(e.TAG_NAME = 7)] = 'TAG_NAME'),
          (e[(e.RCDATA_LESS_THAN_SIGN = 8)] = 'RCDATA_LESS_THAN_SIGN'),
          (e[(e.RCDATA_END_TAG_OPEN = 9)] = 'RCDATA_END_TAG_OPEN'),
          (e[(e.RCDATA_END_TAG_NAME = 10)] = 'RCDATA_END_TAG_NAME'),
          (e[(e.RAWTEXT_LESS_THAN_SIGN = 11)] = 'RAWTEXT_LESS_THAN_SIGN'),
          (e[(e.RAWTEXT_END_TAG_OPEN = 12)] = 'RAWTEXT_END_TAG_OPEN'),
          (e[(e.RAWTEXT_END_TAG_NAME = 13)] = 'RAWTEXT_END_TAG_NAME'),
          (e[(e.SCRIPT_DATA_LESS_THAN_SIGN = 14)] =
            'SCRIPT_DATA_LESS_THAN_SIGN'),
          (e[(e.SCRIPT_DATA_END_TAG_OPEN = 15)] = 'SCRIPT_DATA_END_TAG_OPEN'),
          (e[(e.SCRIPT_DATA_END_TAG_NAME = 16)] = 'SCRIPT_DATA_END_TAG_NAME'),
          (e[(e.SCRIPT_DATA_ESCAPE_START = 17)] = 'SCRIPT_DATA_ESCAPE_START'),
          (e[(e.SCRIPT_DATA_ESCAPE_START_DASH = 18)] =
            'SCRIPT_DATA_ESCAPE_START_DASH'),
          (e[(e.SCRIPT_DATA_ESCAPED = 19)] = 'SCRIPT_DATA_ESCAPED'),
          (e[(e.SCRIPT_DATA_ESCAPED_DASH = 20)] = 'SCRIPT_DATA_ESCAPED_DASH'),
          (e[(e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21)] =
            'SCRIPT_DATA_ESCAPED_DASH_DASH'),
          (e[(e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22)] =
            'SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN'),
          (e[(e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23)] =
            'SCRIPT_DATA_ESCAPED_END_TAG_OPEN'),
          (e[(e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24)] =
            'SCRIPT_DATA_ESCAPED_END_TAG_NAME'),
          (e[(e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25)] =
            'SCRIPT_DATA_DOUBLE_ESCAPE_START'),
          (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED = 26)] =
            'SCRIPT_DATA_DOUBLE_ESCAPED'),
          (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27)] =
            'SCRIPT_DATA_DOUBLE_ESCAPED_DASH'),
          (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28)] =
            'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH'),
          (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29)] =
            'SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN'),
          (e[(e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30)] =
            'SCRIPT_DATA_DOUBLE_ESCAPE_END'),
          (e[(e.BEFORE_ATTRIBUTE_NAME = 31)] = 'BEFORE_ATTRIBUTE_NAME'),
          (e[(e.ATTRIBUTE_NAME = 32)] = 'ATTRIBUTE_NAME'),
          (e[(e.AFTER_ATTRIBUTE_NAME = 33)] = 'AFTER_ATTRIBUTE_NAME'),
          (e[(e.BEFORE_ATTRIBUTE_VALUE = 34)] = 'BEFORE_ATTRIBUTE_VALUE'),
          (e[(e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35)] =
            'ATTRIBUTE_VALUE_DOUBLE_QUOTED'),
          (e[(e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36)] =
            'ATTRIBUTE_VALUE_SINGLE_QUOTED'),
          (e[(e.ATTRIBUTE_VALUE_UNQUOTED = 37)] = 'ATTRIBUTE_VALUE_UNQUOTED'),
          (e[(e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38)] =
            'AFTER_ATTRIBUTE_VALUE_QUOTED'),
          (e[(e.SELF_CLOSING_START_TAG = 39)] = 'SELF_CLOSING_START_TAG'),
          (e[(e.BOGUS_COMMENT = 40)] = 'BOGUS_COMMENT'),
          (e[(e.MARKUP_DECLARATION_OPEN = 41)] = 'MARKUP_DECLARATION_OPEN'),
          (e[(e.COMMENT_START = 42)] = 'COMMENT_START'),
          (e[(e.COMMENT_START_DASH = 43)] = 'COMMENT_START_DASH'),
          (e[(e.COMMENT = 44)] = 'COMMENT'),
          (e[(e.COMMENT_LESS_THAN_SIGN = 45)] = 'COMMENT_LESS_THAN_SIGN'),
          (e[(e.COMMENT_LESS_THAN_SIGN_BANG = 46)] =
            'COMMENT_LESS_THAN_SIGN_BANG'),
          (e[(e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47)] =
            'COMMENT_LESS_THAN_SIGN_BANG_DASH'),
          (e[(e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48)] =
            'COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH'),
          (e[(e.COMMENT_END_DASH = 49)] = 'COMMENT_END_DASH'),
          (e[(e.COMMENT_END = 50)] = 'COMMENT_END'),
          (e[(e.COMMENT_END_BANG = 51)] = 'COMMENT_END_BANG'),
          (e[(e.DOCTYPE = 52)] = 'DOCTYPE'),
          (e[(e.BEFORE_DOCTYPE_NAME = 53)] = 'BEFORE_DOCTYPE_NAME'),
          (e[(e.DOCTYPE_NAME = 54)] = 'DOCTYPE_NAME'),
          (e[(e.AFTER_DOCTYPE_NAME = 55)] = 'AFTER_DOCTYPE_NAME'),
          (e[(e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56)] =
            'AFTER_DOCTYPE_PUBLIC_KEYWORD'),
          (e[(e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57)] =
            'BEFORE_DOCTYPE_PUBLIC_IDENTIFIER'),
          (e[(e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58)] =
            'DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED'),
          (e[(e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59)] =
            'DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED'),
          (e[(e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60)] =
            'AFTER_DOCTYPE_PUBLIC_IDENTIFIER'),
          (e[(e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61)] =
            'BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS'),
          (e[(e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62)] =
            'AFTER_DOCTYPE_SYSTEM_KEYWORD'),
          (e[(e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63)] =
            'BEFORE_DOCTYPE_SYSTEM_IDENTIFIER'),
          (e[(e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64)] =
            'DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED'),
          (e[(e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65)] =
            'DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED'),
          (e[(e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66)] =
            'AFTER_DOCTYPE_SYSTEM_IDENTIFIER'),
          (e[(e.BOGUS_DOCTYPE = 67)] = 'BOGUS_DOCTYPE'),
          (e[(e.CDATA_SECTION = 68)] = 'CDATA_SECTION'),
          (e[(e.CDATA_SECTION_BRACKET = 69)] = 'CDATA_SECTION_BRACKET'),
          (e[(e.CDATA_SECTION_END = 70)] = 'CDATA_SECTION_END'),
          (e[(e.CHARACTER_REFERENCE = 71)] = 'CHARACTER_REFERENCE'),
          (e[(e.NAMED_CHARACTER_REFERENCE = 72)] = 'NAMED_CHARACTER_REFERENCE'),
          (e[(e.AMBIGUOUS_AMPERSAND = 73)] = 'AMBIGUOUS_AMPERSAND'),
          (e[(e.NUMERIC_CHARACTER_REFERENCE = 74)] =
            'NUMERIC_CHARACTER_REFERENCE'),
          (e[(e.HEXADEMICAL_CHARACTER_REFERENCE_START = 75)] =
            'HEXADEMICAL_CHARACTER_REFERENCE_START'),
          (e[(e.HEXADEMICAL_CHARACTER_REFERENCE = 76)] =
            'HEXADEMICAL_CHARACTER_REFERENCE'),
          (e[(e.DECIMAL_CHARACTER_REFERENCE = 77)] =
            'DECIMAL_CHARACTER_REFERENCE'),
          (e[(e.NUMERIC_CHARACTER_REFERENCE_END = 78)] =
            'NUMERIC_CHARACTER_REFERENCE_END');
      })(be || (be = {}));
      const De = {
        DATA: be.DATA,
        RCDATA: be.RCDATA,
        RAWTEXT: be.RAWTEXT,
        SCRIPT_DATA: be.SCRIPT_DATA,
        PLAINTEXT: be.PLAINTEXT,
        CDATA_SECTION: be.CDATA_SECTION,
      };
      function Oe(e) {
        return e >= U.DIGIT_0 && e <= U.DIGIT_9;
      }
      function Re(e) {
        return e >= U.LATIN_CAPITAL_A && e <= U.LATIN_CAPITAL_Z;
      }
      function ye(e) {
        return (
          (function (e) {
            return e >= U.LATIN_SMALL_A && e <= U.LATIN_SMALL_Z;
          })(e) || Re(e)
        );
      }
      function Le(e) {
        return ye(e) || Oe(e);
      }
      function Pe(e) {
        return e >= U.LATIN_CAPITAL_A && e <= U.LATIN_CAPITAL_F;
      }
      function Me(e) {
        return e >= U.LATIN_SMALL_A && e <= U.LATIN_SMALL_F;
      }
      function xe(e) {
        return e + 32;
      }
      function ve(e) {
        return (
          e === U.SPACE ||
          e === U.LINE_FEED ||
          e === U.TABULATION ||
          e === U.FORM_FEED
        );
      }
      function we(e) {
        return ve(e) || e === U.SOLIDUS || e === U.GREATER_THAN_SIGN;
      }
      class Be {
        constructor(e, t) {
          (this.options = e),
            (this.handler = t),
            (this.paused = !1),
            (this.inLoop = !1),
            (this.inForeignNode = !1),
            (this.lastStartTagName = ''),
            (this.active = !1),
            (this.state = be.DATA),
            (this.returnState = be.DATA),
            (this.charRefCode = -1),
            (this.consumedAfterSnapshot = -1),
            (this.currentCharacterToken = null),
            (this.currentToken = null),
            (this.currentAttr = { name: '', value: '' }),
            (this.preprocessor = new K(t)),
            (this.currentLocation = this.getCurrentLocation(-1));
        }
        _err(e) {
          var t, n;
          null === (n = (t = this.handler).onParseError) ||
            void 0 === n ||
            n.call(t, this.preprocessor.getError(e));
        }
        getCurrentLocation(e) {
          return this.options.sourceCodeLocationInfo
            ? {
                startLine: this.preprocessor.line,
                startCol: this.preprocessor.col - e,
                startOffset: this.preprocessor.offset - e,
                endLine: -1,
                endCol: -1,
                endOffset: -1,
              }
            : null;
        }
        _runParsingLoop() {
          if (!this.inLoop) {
            for (this.inLoop = !0; this.active && !this.paused; ) {
              this.consumedAfterSnapshot = 0;
              const e = this._consume();
              this._ensureHibernation() || this._callState(e);
            }
            this.inLoop = !1;
          }
        }
        pause() {
          this.paused = !0;
        }
        resume(e) {
          if (!this.paused) throw new Error('Parser was already resumed');
          (this.paused = !1),
            this.inLoop ||
              (this._runParsingLoop(), this.paused || null == e || e());
        }
        write(e, t, n) {
          (this.active = !0),
            this.preprocessor.write(e, t),
            this._runParsingLoop(),
            this.paused || null == n || n();
        }
        insertHtmlAtCurrentPos(e) {
          (this.active = !0),
            this.preprocessor.insertHtmlAtCurrentPos(e),
            this._runParsingLoop();
        }
        _ensureHibernation() {
          return (
            !!this.preprocessor.endOfChunkHit &&
            (this._unconsume(this.consumedAfterSnapshot),
            (this.active = !1),
            !0)
          );
        }
        _consume() {
          return this.consumedAfterSnapshot++, this.preprocessor.advance();
        }
        _unconsume(e) {
          (this.consumedAfterSnapshot -= e), this.preprocessor.retreat(e);
        }
        _reconsumeInState(e, t) {
          (this.state = e), this._callState(t);
        }
        _advanceBy(e) {
          this.consumedAfterSnapshot += e;
          for (let t = 0; t < e; t++) this.preprocessor.advance();
        }
        _consumeSequenceIfMatch(e, t) {
          return (
            !!this.preprocessor.startsWith(e, t) &&
            (this._advanceBy(e.length - 1), !0)
          );
        }
        _createStartTagToken() {
          this.currentToken = {
            type: Z.START_TAG,
            tagName: '',
            tagID: _e.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(1),
          };
        }
        _createEndTagToken() {
          this.currentToken = {
            type: Z.END_TAG,
            tagName: '',
            tagID: _e.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(2),
          };
        }
        _createCommentToken(e) {
          this.currentToken = {
            type: Z.COMMENT,
            data: '',
            location: this.getCurrentLocation(e),
          };
        }
        _createDoctypeToken(e) {
          this.currentToken = {
            type: Z.DOCTYPE,
            name: e,
            forceQuirks: !1,
            publicId: null,
            systemId: null,
            location: this.currentLocation,
          };
        }
        _createCharacterToken(e, t) {
          this.currentCharacterToken = {
            type: e,
            chars: t,
            location: this.currentLocation,
          };
        }
        _createAttr(e) {
          (this.currentAttr = { name: e, value: '' }),
            (this.currentLocation = this.getCurrentLocation(0));
        }
        _leaveAttrName() {
          var e, t;
          const n = this.currentToken;
          if (null === J(n, this.currentAttr.name)) {
            if (
              (n.attrs.push(this.currentAttr),
              n.location && this.currentLocation)
            ) {
              ((null !== (e = (t = n.location).attrs) && void 0 !== e
                ? e
                : (t.attrs = Object.create(null)))[this.currentAttr.name] =
                this.currentLocation),
                this._leaveAttrValue();
            }
          } else this._err($.duplicateAttribute);
        }
        _leaveAttrValue() {
          this.currentLocation &&
            ((this.currentLocation.endLine = this.preprocessor.line),
            (this.currentLocation.endCol = this.preprocessor.col),
            (this.currentLocation.endOffset = this.preprocessor.offset));
        }
        prepareToken(e) {
          this._emitCurrentCharacterToken(e.location),
            (this.currentToken = null),
            e.location &&
              ((e.location.endLine = this.preprocessor.line),
              (e.location.endCol = this.preprocessor.col + 1),
              (e.location.endOffset = this.preprocessor.offset + 1)),
            (this.currentLocation = this.getCurrentLocation(-1));
        }
        emitCurrentTagToken() {
          const e = this.currentToken;
          this.prepareToken(e),
            (e.tagID = Ce(e.tagName)),
            e.type === Z.START_TAG
              ? ((this.lastStartTagName = e.tagName),
                this.handler.onStartTag(e))
              : (e.attrs.length > 0 && this._err($.endTagWithAttributes),
                e.selfClosing && this._err($.endTagWithTrailingSolidus),
                this.handler.onEndTag(e)),
            this.preprocessor.dropParsedChunk();
        }
        emitCurrentComment(e) {
          this.prepareToken(e),
            this.handler.onComment(e),
            this.preprocessor.dropParsedChunk();
        }
        emitCurrentDoctype(e) {
          this.prepareToken(e),
            this.handler.onDoctype(e),
            this.preprocessor.dropParsedChunk();
        }
        _emitCurrentCharacterToken(e) {
          if (this.currentCharacterToken) {
            switch (
              (e &&
                this.currentCharacterToken.location &&
                ((this.currentCharacterToken.location.endLine = e.startLine),
                (this.currentCharacterToken.location.endCol = e.startCol),
                (this.currentCharacterToken.location.endOffset =
                  e.startOffset)),
              this.currentCharacterToken.type)
            ) {
              case Z.CHARACTER:
                this.handler.onCharacter(this.currentCharacterToken);
                break;
              case Z.NULL_CHARACTER:
                this.handler.onNullCharacter(this.currentCharacterToken);
                break;
              case Z.WHITESPACE_CHARACTER:
                this.handler.onWhitespaceCharacter(this.currentCharacterToken);
            }
            this.currentCharacterToken = null;
          }
        }
        _emitEOFToken() {
          const e = this.getCurrentLocation(0);
          e &&
            ((e.endLine = e.startLine),
            (e.endCol = e.startCol),
            (e.endOffset = e.startOffset)),
            this._emitCurrentCharacterToken(e),
            this.handler.onEof({ type: Z.EOF, location: e }),
            (this.active = !1);
        }
        _appendCharToCurrentCharacterToken(e, t) {
          if (this.currentCharacterToken) {
            if (this.currentCharacterToken.type === e)
              return void (this.currentCharacterToken.chars += t);
            (this.currentLocation = this.getCurrentLocation(0)),
              this._emitCurrentCharacterToken(this.currentLocation),
              this.preprocessor.dropParsedChunk();
          }
          this._createCharacterToken(e, t);
        }
        _emitCodePoint(e) {
          const t = ve(e)
            ? Z.WHITESPACE_CHARACTER
            : e === U.NULL
              ? Z.NULL_CHARACTER
              : Z.CHARACTER;
          this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e));
        }
        _emitChars(e) {
          this._appendCharToCurrentCharacterToken(Z.CHARACTER, e);
        }
        _matchNamedCharacterReference(e) {
          let t = null,
            n = 0,
            r = !1;
          for (
            let s = 0, o = te[0];
            s >= 0 && ((s = fe(te, o, s + 1, e)), !(s < 0));
            e = this._consume()
          ) {
            (n += 1), (o = te[s]);
            const a = o & ae.VALUE_LENGTH;
            if (a) {
              const o = (a >> 14) - 1;
              if (
                (e !== U.SEMICOLON &&
                this._isCharacterReferenceInAttribute() &&
                ((i = this.preprocessor.peek(1)) === U.EQUALS_SIGN || Le(i))
                  ? ((t = [U.AMPERSAND]), (s += o))
                  : ((t =
                      0 === o
                        ? [te[s] & ~ae.VALUE_LENGTH]
                        : 1 === o
                          ? [te[++s]]
                          : [te[++s], te[++s]]),
                    (n = 0),
                    (r = e !== U.SEMICOLON)),
                0 === o)
              ) {
                this._consume();
                break;
              }
            }
          }
          var i;
          return (
            this._unconsume(n),
            r &&
              !this.preprocessor.endOfChunkHit &&
              this._err($.missingSemicolonAfterCharacterReference),
            this._unconsume(1),
            t
          );
        }
        _isCharacterReferenceInAttribute() {
          return (
            this.returnState === be.ATTRIBUTE_VALUE_DOUBLE_QUOTED ||
            this.returnState === be.ATTRIBUTE_VALUE_SINGLE_QUOTED ||
            this.returnState === be.ATTRIBUTE_VALUE_UNQUOTED
          );
        }
        _flushCodePointConsumedAsCharacterReference(e) {
          this._isCharacterReferenceInAttribute()
            ? (this.currentAttr.value += String.fromCodePoint(e))
            : this._emitCodePoint(e);
        }
        _callState(e) {
          switch (this.state) {
            case be.DATA:
              this._stateData(e);
              break;
            case be.RCDATA:
              this._stateRcdata(e);
              break;
            case be.RAWTEXT:
              this._stateRawtext(e);
              break;
            case be.SCRIPT_DATA:
              this._stateScriptData(e);
              break;
            case be.PLAINTEXT:
              this._statePlaintext(e);
              break;
            case be.TAG_OPEN:
              this._stateTagOpen(e);
              break;
            case be.END_TAG_OPEN:
              this._stateEndTagOpen(e);
              break;
            case be.TAG_NAME:
              this._stateTagName(e);
              break;
            case be.RCDATA_LESS_THAN_SIGN:
              this._stateRcdataLessThanSign(e);
              break;
            case be.RCDATA_END_TAG_OPEN:
              this._stateRcdataEndTagOpen(e);
              break;
            case be.RCDATA_END_TAG_NAME:
              this._stateRcdataEndTagName(e);
              break;
            case be.RAWTEXT_LESS_THAN_SIGN:
              this._stateRawtextLessThanSign(e);
              break;
            case be.RAWTEXT_END_TAG_OPEN:
              this._stateRawtextEndTagOpen(e);
              break;
            case be.RAWTEXT_END_TAG_NAME:
              this._stateRawtextEndTagName(e);
              break;
            case be.SCRIPT_DATA_LESS_THAN_SIGN:
              this._stateScriptDataLessThanSign(e);
              break;
            case be.SCRIPT_DATA_END_TAG_OPEN:
              this._stateScriptDataEndTagOpen(e);
              break;
            case be.SCRIPT_DATA_END_TAG_NAME:
              this._stateScriptDataEndTagName(e);
              break;
            case be.SCRIPT_DATA_ESCAPE_START:
              this._stateScriptDataEscapeStart(e);
              break;
            case be.SCRIPT_DATA_ESCAPE_START_DASH:
              this._stateScriptDataEscapeStartDash(e);
              break;
            case be.SCRIPT_DATA_ESCAPED:
              this._stateScriptDataEscaped(e);
              break;
            case be.SCRIPT_DATA_ESCAPED_DASH:
              this._stateScriptDataEscapedDash(e);
              break;
            case be.SCRIPT_DATA_ESCAPED_DASH_DASH:
              this._stateScriptDataEscapedDashDash(e);
              break;
            case be.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
              this._stateScriptDataEscapedLessThanSign(e);
              break;
            case be.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
              this._stateScriptDataEscapedEndTagOpen(e);
              break;
            case be.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
              this._stateScriptDataEscapedEndTagName(e);
              break;
            case be.SCRIPT_DATA_DOUBLE_ESCAPE_START:
              this._stateScriptDataDoubleEscapeStart(e);
              break;
            case be.SCRIPT_DATA_DOUBLE_ESCAPED:
              this._stateScriptDataDoubleEscaped(e);
              break;
            case be.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
              this._stateScriptDataDoubleEscapedDash(e);
              break;
            case be.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
              this._stateScriptDataDoubleEscapedDashDash(e);
              break;
            case be.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
              this._stateScriptDataDoubleEscapedLessThanSign(e);
              break;
            case be.SCRIPT_DATA_DOUBLE_ESCAPE_END:
              this._stateScriptDataDoubleEscapeEnd(e);
              break;
            case be.BEFORE_ATTRIBUTE_NAME:
              this._stateBeforeAttributeName(e);
              break;
            case be.ATTRIBUTE_NAME:
              this._stateAttributeName(e);
              break;
            case be.AFTER_ATTRIBUTE_NAME:
              this._stateAfterAttributeName(e);
              break;
            case be.BEFORE_ATTRIBUTE_VALUE:
              this._stateBeforeAttributeValue(e);
              break;
            case be.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
              this._stateAttributeValueDoubleQuoted(e);
              break;
            case be.ATTRIBUTE_VALUE_SINGLE_QUOTED:
              this._stateAttributeValueSingleQuoted(e);
              break;
            case be.ATTRIBUTE_VALUE_UNQUOTED:
              this._stateAttributeValueUnquoted(e);
              break;
            case be.AFTER_ATTRIBUTE_VALUE_QUOTED:
              this._stateAfterAttributeValueQuoted(e);
              break;
            case be.SELF_CLOSING_START_TAG:
              this._stateSelfClosingStartTag(e);
              break;
            case be.BOGUS_COMMENT:
              this._stateBogusComment(e);
              break;
            case be.MARKUP_DECLARATION_OPEN:
              this._stateMarkupDeclarationOpen(e);
              break;
            case be.COMMENT_START:
              this._stateCommentStart(e);
              break;
            case be.COMMENT_START_DASH:
              this._stateCommentStartDash(e);
              break;
            case be.COMMENT:
              this._stateComment(e);
              break;
            case be.COMMENT_LESS_THAN_SIGN:
              this._stateCommentLessThanSign(e);
              break;
            case be.COMMENT_LESS_THAN_SIGN_BANG:
              this._stateCommentLessThanSignBang(e);
              break;
            case be.COMMENT_LESS_THAN_SIGN_BANG_DASH:
              this._stateCommentLessThanSignBangDash(e);
              break;
            case be.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
              this._stateCommentLessThanSignBangDashDash(e);
              break;
            case be.COMMENT_END_DASH:
              this._stateCommentEndDash(e);
              break;
            case be.COMMENT_END:
              this._stateCommentEnd(e);
              break;
            case be.COMMENT_END_BANG:
              this._stateCommentEndBang(e);
              break;
            case be.DOCTYPE:
              this._stateDoctype(e);
              break;
            case be.BEFORE_DOCTYPE_NAME:
              this._stateBeforeDoctypeName(e);
              break;
            case be.DOCTYPE_NAME:
              this._stateDoctypeName(e);
              break;
            case be.AFTER_DOCTYPE_NAME:
              this._stateAfterDoctypeName(e);
              break;
            case be.AFTER_DOCTYPE_PUBLIC_KEYWORD:
              this._stateAfterDoctypePublicKeyword(e);
              break;
            case be.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
              this._stateBeforeDoctypePublicIdentifier(e);
              break;
            case be.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
              this._stateDoctypePublicIdentifierDoubleQuoted(e);
              break;
            case be.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
              this._stateDoctypePublicIdentifierSingleQuoted(e);
              break;
            case be.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
              this._stateAfterDoctypePublicIdentifier(e);
              break;
            case be.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
              this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
              break;
            case be.AFTER_DOCTYPE_SYSTEM_KEYWORD:
              this._stateAfterDoctypeSystemKeyword(e);
              break;
            case be.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
              this._stateBeforeDoctypeSystemIdentifier(e);
              break;
            case be.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
              this._stateDoctypeSystemIdentifierDoubleQuoted(e);
              break;
            case be.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
              this._stateDoctypeSystemIdentifierSingleQuoted(e);
              break;
            case be.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
              this._stateAfterDoctypeSystemIdentifier(e);
              break;
            case be.BOGUS_DOCTYPE:
              this._stateBogusDoctype(e);
              break;
            case be.CDATA_SECTION:
              this._stateCdataSection(e);
              break;
            case be.CDATA_SECTION_BRACKET:
              this._stateCdataSectionBracket(e);
              break;
            case be.CDATA_SECTION_END:
              this._stateCdataSectionEnd(e);
              break;
            case be.CHARACTER_REFERENCE:
              this._stateCharacterReference(e);
              break;
            case be.NAMED_CHARACTER_REFERENCE:
              this._stateNamedCharacterReference(e);
              break;
            case be.AMBIGUOUS_AMPERSAND:
              this._stateAmbiguousAmpersand(e);
              break;
            case be.NUMERIC_CHARACTER_REFERENCE:
              this._stateNumericCharacterReference(e);
              break;
            case be.HEXADEMICAL_CHARACTER_REFERENCE_START:
              this._stateHexademicalCharacterReferenceStart(e);
              break;
            case be.HEXADEMICAL_CHARACTER_REFERENCE:
              this._stateHexademicalCharacterReference(e);
              break;
            case be.DECIMAL_CHARACTER_REFERENCE:
              this._stateDecimalCharacterReference(e);
              break;
            case be.NUMERIC_CHARACTER_REFERENCE_END:
              this._stateNumericCharacterReferenceEnd(e);
              break;
            default:
              throw new Error('Unknown state');
          }
        }
        _stateData(e) {
          switch (e) {
            case U.LESS_THAN_SIGN:
              this.state = be.TAG_OPEN;
              break;
            case U.AMPERSAND:
              (this.returnState = be.DATA),
                (this.state = be.CHARACTER_REFERENCE);
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter), this._emitCodePoint(e);
              break;
            case U.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateRcdata(e) {
          switch (e) {
            case U.AMPERSAND:
              (this.returnState = be.RCDATA),
                (this.state = be.CHARACTER_REFERENCE);
              break;
            case U.LESS_THAN_SIGN:
              this.state = be.RCDATA_LESS_THAN_SIGN;
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter), this._emitChars(H);
              break;
            case U.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateRawtext(e) {
          switch (e) {
            case U.LESS_THAN_SIGN:
              this.state = be.RAWTEXT_LESS_THAN_SIGN;
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter), this._emitChars(H);
              break;
            case U.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptData(e) {
          switch (e) {
            case U.LESS_THAN_SIGN:
              this.state = be.SCRIPT_DATA_LESS_THAN_SIGN;
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter), this._emitChars(H);
              break;
            case U.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _statePlaintext(e) {
          switch (e) {
            case U.NULL:
              this._err($.unexpectedNullCharacter), this._emitChars(H);
              break;
            case U.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateTagOpen(e) {
          if (ye(e))
            this._createStartTagToken(),
              (this.state = be.TAG_NAME),
              this._stateTagName(e);
          else
            switch (e) {
              case U.EXCLAMATION_MARK:
                this.state = be.MARKUP_DECLARATION_OPEN;
                break;
              case U.SOLIDUS:
                this.state = be.END_TAG_OPEN;
                break;
              case U.QUESTION_MARK:
                this._err($.unexpectedQuestionMarkInsteadOfTagName),
                  this._createCommentToken(1),
                  (this.state = be.BOGUS_COMMENT),
                  this._stateBogusComment(e);
                break;
              case U.EOF:
                this._err($.eofBeforeTagName),
                  this._emitChars('<'),
                  this._emitEOFToken();
                break;
              default:
                this._err($.invalidFirstCharacterOfTagName),
                  this._emitChars('<'),
                  (this.state = be.DATA),
                  this._stateData(e);
            }
        }
        _stateEndTagOpen(e) {
          if (ye(e))
            this._createEndTagToken(),
              (this.state = be.TAG_NAME),
              this._stateTagName(e);
          else
            switch (e) {
              case U.GREATER_THAN_SIGN:
                this._err($.missingEndTagName), (this.state = be.DATA);
                break;
              case U.EOF:
                this._err($.eofBeforeTagName),
                  this._emitChars('</'),
                  this._emitEOFToken();
                break;
              default:
                this._err($.invalidFirstCharacterOfTagName),
                  this._createCommentToken(2),
                  (this.state = be.BOGUS_COMMENT),
                  this._stateBogusComment(e);
            }
        }
        _stateTagName(e) {
          const t = this.currentToken;
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              this.state = be.BEFORE_ATTRIBUTE_NAME;
              break;
            case U.SOLIDUS:
              this.state = be.SELF_CLOSING_START_TAG;
              break;
            case U.GREATER_THAN_SIGN:
              (this.state = be.DATA), this.emitCurrentTagToken();
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter), (t.tagName += H);
              break;
            case U.EOF:
              this._err($.eofInTag), this._emitEOFToken();
              break;
            default:
              t.tagName += String.fromCodePoint(Re(e) ? xe(e) : e);
          }
        }
        _stateRcdataLessThanSign(e) {
          e === U.SOLIDUS
            ? (this.state = be.RCDATA_END_TAG_OPEN)
            : (this._emitChars('<'),
              (this.state = be.RCDATA),
              this._stateRcdata(e));
        }
        _stateRcdataEndTagOpen(e) {
          ye(e)
            ? ((this.state = be.RCDATA_END_TAG_NAME),
              this._stateRcdataEndTagName(e))
            : (this._emitChars('</'),
              (this.state = be.RCDATA),
              this._stateRcdata(e));
        }
        handleSpecialEndTag(e) {
          if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
            return !this._ensureHibernation();
          this._createEndTagToken();
          this.currentToken.tagName = this.lastStartTagName;
          switch (this.preprocessor.peek(this.lastStartTagName.length)) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              return (
                this._advanceBy(this.lastStartTagName.length),
                (this.state = be.BEFORE_ATTRIBUTE_NAME),
                !1
              );
            case U.SOLIDUS:
              return (
                this._advanceBy(this.lastStartTagName.length),
                (this.state = be.SELF_CLOSING_START_TAG),
                !1
              );
            case U.GREATER_THAN_SIGN:
              return (
                this._advanceBy(this.lastStartTagName.length),
                this.emitCurrentTagToken(),
                (this.state = be.DATA),
                !1
              );
            default:
              return !this._ensureHibernation();
          }
        }
        _stateRcdataEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars('</'),
            (this.state = be.RCDATA),
            this._stateRcdata(e));
        }
        _stateRawtextLessThanSign(e) {
          e === U.SOLIDUS
            ? (this.state = be.RAWTEXT_END_TAG_OPEN)
            : (this._emitChars('<'),
              (this.state = be.RAWTEXT),
              this._stateRawtext(e));
        }
        _stateRawtextEndTagOpen(e) {
          ye(e)
            ? ((this.state = be.RAWTEXT_END_TAG_NAME),
              this._stateRawtextEndTagName(e))
            : (this._emitChars('</'),
              (this.state = be.RAWTEXT),
              this._stateRawtext(e));
        }
        _stateRawtextEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars('</'),
            (this.state = be.RAWTEXT),
            this._stateRawtext(e));
        }
        _stateScriptDataLessThanSign(e) {
          switch (e) {
            case U.SOLIDUS:
              this.state = be.SCRIPT_DATA_END_TAG_OPEN;
              break;
            case U.EXCLAMATION_MARK:
              (this.state = be.SCRIPT_DATA_ESCAPE_START), this._emitChars('<!');
              break;
            default:
              this._emitChars('<'),
                (this.state = be.SCRIPT_DATA),
                this._stateScriptData(e);
          }
        }
        _stateScriptDataEndTagOpen(e) {
          ye(e)
            ? ((this.state = be.SCRIPT_DATA_END_TAG_NAME),
              this._stateScriptDataEndTagName(e))
            : (this._emitChars('</'),
              (this.state = be.SCRIPT_DATA),
              this._stateScriptData(e));
        }
        _stateScriptDataEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars('</'),
            (this.state = be.SCRIPT_DATA),
            this._stateScriptData(e));
        }
        _stateScriptDataEscapeStart(e) {
          e === U.HYPHEN_MINUS
            ? ((this.state = be.SCRIPT_DATA_ESCAPE_START_DASH),
              this._emitChars('-'))
            : ((this.state = be.SCRIPT_DATA), this._stateScriptData(e));
        }
        _stateScriptDataEscapeStartDash(e) {
          e === U.HYPHEN_MINUS
            ? ((this.state = be.SCRIPT_DATA_ESCAPED_DASH_DASH),
              this._emitChars('-'))
            : ((this.state = be.SCRIPT_DATA), this._stateScriptData(e));
        }
        _stateScriptDataEscaped(e) {
          switch (e) {
            case U.HYPHEN_MINUS:
              (this.state = be.SCRIPT_DATA_ESCAPED_DASH), this._emitChars('-');
              break;
            case U.LESS_THAN_SIGN:
              this.state = be.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter), this._emitChars(H);
              break;
            case U.EOF:
              this._err($.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedDash(e) {
          switch (e) {
            case U.HYPHEN_MINUS:
              (this.state = be.SCRIPT_DATA_ESCAPED_DASH_DASH),
                this._emitChars('-');
              break;
            case U.LESS_THAN_SIGN:
              this.state = be.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter),
                (this.state = be.SCRIPT_DATA_ESCAPED),
                this._emitChars(H);
              break;
            case U.EOF:
              this._err($.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = be.SCRIPT_DATA_ESCAPED), this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedDashDash(e) {
          switch (e) {
            case U.HYPHEN_MINUS:
              this._emitChars('-');
              break;
            case U.LESS_THAN_SIGN:
              this.state = be.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case U.GREATER_THAN_SIGN:
              (this.state = be.SCRIPT_DATA), this._emitChars('>');
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter),
                (this.state = be.SCRIPT_DATA_ESCAPED),
                this._emitChars(H);
              break;
            case U.EOF:
              this._err($.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = be.SCRIPT_DATA_ESCAPED), this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedLessThanSign(e) {
          e === U.SOLIDUS
            ? (this.state = be.SCRIPT_DATA_ESCAPED_END_TAG_OPEN)
            : ye(e)
              ? (this._emitChars('<'),
                (this.state = be.SCRIPT_DATA_DOUBLE_ESCAPE_START),
                this._stateScriptDataDoubleEscapeStart(e))
              : (this._emitChars('<'),
                (this.state = be.SCRIPT_DATA_ESCAPED),
                this._stateScriptDataEscaped(e));
        }
        _stateScriptDataEscapedEndTagOpen(e) {
          ye(e)
            ? ((this.state = be.SCRIPT_DATA_ESCAPED_END_TAG_NAME),
              this._stateScriptDataEscapedEndTagName(e))
            : (this._emitChars('</'),
              (this.state = be.SCRIPT_DATA_ESCAPED),
              this._stateScriptDataEscaped(e));
        }
        _stateScriptDataEscapedEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars('</'),
            (this.state = be.SCRIPT_DATA_ESCAPED),
            this._stateScriptDataEscaped(e));
        }
        _stateScriptDataDoubleEscapeStart(e) {
          if (
            this.preprocessor.startsWith(j, !1) &&
            we(this.preprocessor.peek(j.length))
          ) {
            this._emitCodePoint(e);
            for (let e = 0; e < j.length; e++)
              this._emitCodePoint(this._consume());
            this.state = be.SCRIPT_DATA_DOUBLE_ESCAPED;
          } else
            this._ensureHibernation() ||
              ((this.state = be.SCRIPT_DATA_ESCAPED),
              this._stateScriptDataEscaped(e));
        }
        _stateScriptDataDoubleEscaped(e) {
          switch (e) {
            case U.HYPHEN_MINUS:
              (this.state = be.SCRIPT_DATA_DOUBLE_ESCAPED_DASH),
                this._emitChars('-');
              break;
            case U.LESS_THAN_SIGN:
              (this.state = be.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars('<');
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter), this._emitChars(H);
              break;
            case U.EOF:
              this._err($.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedDash(e) {
          switch (e) {
            case U.HYPHEN_MINUS:
              (this.state = be.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH),
                this._emitChars('-');
              break;
            case U.LESS_THAN_SIGN:
              (this.state = be.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars('<');
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter),
                (this.state = be.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitChars(H);
              break;
            case U.EOF:
              this._err($.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = be.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedDashDash(e) {
          switch (e) {
            case U.HYPHEN_MINUS:
              this._emitChars('-');
              break;
            case U.LESS_THAN_SIGN:
              (this.state = be.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars('<');
              break;
            case U.GREATER_THAN_SIGN:
              (this.state = be.SCRIPT_DATA), this._emitChars('>');
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter),
                (this.state = be.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitChars(H);
              break;
            case U.EOF:
              this._err($.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = be.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedLessThanSign(e) {
          e === U.SOLIDUS
            ? ((this.state = be.SCRIPT_DATA_DOUBLE_ESCAPE_END),
              this._emitChars('/'))
            : ((this.state = be.SCRIPT_DATA_DOUBLE_ESCAPED),
              this._stateScriptDataDoubleEscaped(e));
        }
        _stateScriptDataDoubleEscapeEnd(e) {
          if (
            this.preprocessor.startsWith(j, !1) &&
            we(this.preprocessor.peek(j.length))
          ) {
            this._emitCodePoint(e);
            for (let e = 0; e < j.length; e++)
              this._emitCodePoint(this._consume());
            this.state = be.SCRIPT_DATA_ESCAPED;
          } else
            this._ensureHibernation() ||
              ((this.state = be.SCRIPT_DATA_DOUBLE_ESCAPED),
              this._stateScriptDataDoubleEscaped(e));
        }
        _stateBeforeAttributeName(e) {
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              break;
            case U.SOLIDUS:
            case U.GREATER_THAN_SIGN:
            case U.EOF:
              (this.state = be.AFTER_ATTRIBUTE_NAME),
                this._stateAfterAttributeName(e);
              break;
            case U.EQUALS_SIGN:
              this._err($.unexpectedEqualsSignBeforeAttributeName),
                this._createAttr('='),
                (this.state = be.ATTRIBUTE_NAME);
              break;
            default:
              this._createAttr(''),
                (this.state = be.ATTRIBUTE_NAME),
                this._stateAttributeName(e);
          }
        }
        _stateAttributeName(e) {
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
            case U.SOLIDUS:
            case U.GREATER_THAN_SIGN:
            case U.EOF:
              this._leaveAttrName(),
                (this.state = be.AFTER_ATTRIBUTE_NAME),
                this._stateAfterAttributeName(e);
              break;
            case U.EQUALS_SIGN:
              this._leaveAttrName(), (this.state = be.BEFORE_ATTRIBUTE_VALUE);
              break;
            case U.QUOTATION_MARK:
            case U.APOSTROPHE:
            case U.LESS_THAN_SIGN:
              this._err($.unexpectedCharacterInAttributeName),
                (this.currentAttr.name += String.fromCodePoint(e));
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter),
                (this.currentAttr.name += H);
              break;
            default:
              this.currentAttr.name += String.fromCodePoint(Re(e) ? xe(e) : e);
          }
        }
        _stateAfterAttributeName(e) {
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              break;
            case U.SOLIDUS:
              this.state = be.SELF_CLOSING_START_TAG;
              break;
            case U.EQUALS_SIGN:
              this.state = be.BEFORE_ATTRIBUTE_VALUE;
              break;
            case U.GREATER_THAN_SIGN:
              (this.state = be.DATA), this.emitCurrentTagToken();
              break;
            case U.EOF:
              this._err($.eofInTag), this._emitEOFToken();
              break;
            default:
              this._createAttr(''),
                (this.state = be.ATTRIBUTE_NAME),
                this._stateAttributeName(e);
          }
        }
        _stateBeforeAttributeValue(e) {
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              break;
            case U.QUOTATION_MARK:
              this.state = be.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
              break;
            case U.APOSTROPHE:
              this.state = be.ATTRIBUTE_VALUE_SINGLE_QUOTED;
              break;
            case U.GREATER_THAN_SIGN:
              this._err($.missingAttributeValue),
                (this.state = be.DATA),
                this.emitCurrentTagToken();
              break;
            default:
              (this.state = be.ATTRIBUTE_VALUE_UNQUOTED),
                this._stateAttributeValueUnquoted(e);
          }
        }
        _stateAttributeValueDoubleQuoted(e) {
          switch (e) {
            case U.QUOTATION_MARK:
              this.state = be.AFTER_ATTRIBUTE_VALUE_QUOTED;
              break;
            case U.AMPERSAND:
              (this.returnState = be.ATTRIBUTE_VALUE_DOUBLE_QUOTED),
                (this.state = be.CHARACTER_REFERENCE);
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter),
                (this.currentAttr.value += H);
              break;
            case U.EOF:
              this._err($.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAttributeValueSingleQuoted(e) {
          switch (e) {
            case U.APOSTROPHE:
              this.state = be.AFTER_ATTRIBUTE_VALUE_QUOTED;
              break;
            case U.AMPERSAND:
              (this.returnState = be.ATTRIBUTE_VALUE_SINGLE_QUOTED),
                (this.state = be.CHARACTER_REFERENCE);
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter),
                (this.currentAttr.value += H);
              break;
            case U.EOF:
              this._err($.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAttributeValueUnquoted(e) {
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              this._leaveAttrValue(), (this.state = be.BEFORE_ATTRIBUTE_NAME);
              break;
            case U.AMPERSAND:
              (this.returnState = be.ATTRIBUTE_VALUE_UNQUOTED),
                (this.state = be.CHARACTER_REFERENCE);
              break;
            case U.GREATER_THAN_SIGN:
              this._leaveAttrValue(),
                (this.state = be.DATA),
                this.emitCurrentTagToken();
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter),
                (this.currentAttr.value += H);
              break;
            case U.QUOTATION_MARK:
            case U.APOSTROPHE:
            case U.LESS_THAN_SIGN:
            case U.EQUALS_SIGN:
            case U.GRAVE_ACCENT:
              this._err($.unexpectedCharacterInUnquotedAttributeValue),
                (this.currentAttr.value += String.fromCodePoint(e));
              break;
            case U.EOF:
              this._err($.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAfterAttributeValueQuoted(e) {
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              this._leaveAttrValue(), (this.state = be.BEFORE_ATTRIBUTE_NAME);
              break;
            case U.SOLIDUS:
              this._leaveAttrValue(), (this.state = be.SELF_CLOSING_START_TAG);
              break;
            case U.GREATER_THAN_SIGN:
              this._leaveAttrValue(),
                (this.state = be.DATA),
                this.emitCurrentTagToken();
              break;
            case U.EOF:
              this._err($.eofInTag), this._emitEOFToken();
              break;
            default:
              this._err($.missingWhitespaceBetweenAttributes),
                (this.state = be.BEFORE_ATTRIBUTE_NAME),
                this._stateBeforeAttributeName(e);
          }
        }
        _stateSelfClosingStartTag(e) {
          switch (e) {
            case U.GREATER_THAN_SIGN:
              (this.currentToken.selfClosing = !0),
                (this.state = be.DATA),
                this.emitCurrentTagToken();
              break;
            case U.EOF:
              this._err($.eofInTag), this._emitEOFToken();
              break;
            default:
              this._err($.unexpectedSolidusInTag),
                (this.state = be.BEFORE_ATTRIBUTE_NAME),
                this._stateBeforeAttributeName(e);
          }
        }
        _stateBogusComment(e) {
          const t = this.currentToken;
          switch (e) {
            case U.GREATER_THAN_SIGN:
              (this.state = be.DATA), this.emitCurrentComment(t);
              break;
            case U.EOF:
              this.emitCurrentComment(t), this._emitEOFToken();
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter), (t.data += H);
              break;
            default:
              t.data += String.fromCodePoint(e);
          }
        }
        _stateMarkupDeclarationOpen(e) {
          this._consumeSequenceIfMatch(G, !0)
            ? (this._createCommentToken(G.length + 1),
              (this.state = be.COMMENT_START))
            : this._consumeSequenceIfMatch(Y, !1)
              ? ((this.currentLocation = this.getCurrentLocation(Y.length + 1)),
                (this.state = be.DOCTYPE))
              : this._consumeSequenceIfMatch(z, !0)
                ? this.inForeignNode
                  ? (this.state = be.CDATA_SECTION)
                  : (this._err($.cdataInHtmlContent),
                    this._createCommentToken(z.length + 1),
                    (this.currentToken.data = '[CDATA['),
                    (this.state = be.BOGUS_COMMENT))
                : this._ensureHibernation() ||
                  (this._err($.incorrectlyOpenedComment),
                  this._createCommentToken(2),
                  (this.state = be.BOGUS_COMMENT),
                  this._stateBogusComment(e));
        }
        _stateCommentStart(e) {
          switch (e) {
            case U.HYPHEN_MINUS:
              this.state = be.COMMENT_START_DASH;
              break;
            case U.GREATER_THAN_SIGN: {
              this._err($.abruptClosingOfEmptyComment), (this.state = be.DATA);
              const e = this.currentToken;
              this.emitCurrentComment(e);
              break;
            }
            default:
              (this.state = be.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentStartDash(e) {
          const t = this.currentToken;
          switch (e) {
            case U.HYPHEN_MINUS:
              this.state = be.COMMENT_END;
              break;
            case U.GREATER_THAN_SIGN:
              this._err($.abruptClosingOfEmptyComment),
                (this.state = be.DATA),
                this.emitCurrentComment(t);
              break;
            case U.EOF:
              this._err($.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += '-'), (this.state = be.COMMENT), this._stateComment(e);
          }
        }
        _stateComment(e) {
          const t = this.currentToken;
          switch (e) {
            case U.HYPHEN_MINUS:
              this.state = be.COMMENT_END_DASH;
              break;
            case U.LESS_THAN_SIGN:
              (t.data += '<'), (this.state = be.COMMENT_LESS_THAN_SIGN);
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter), (t.data += H);
              break;
            case U.EOF:
              this._err($.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              t.data += String.fromCodePoint(e);
          }
        }
        _stateCommentLessThanSign(e) {
          const t = this.currentToken;
          switch (e) {
            case U.EXCLAMATION_MARK:
              (t.data += '!'), (this.state = be.COMMENT_LESS_THAN_SIGN_BANG);
              break;
            case U.LESS_THAN_SIGN:
              t.data += '<';
              break;
            default:
              (this.state = be.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentLessThanSignBang(e) {
          e === U.HYPHEN_MINUS
            ? (this.state = be.COMMENT_LESS_THAN_SIGN_BANG_DASH)
            : ((this.state = be.COMMENT), this._stateComment(e));
        }
        _stateCommentLessThanSignBangDash(e) {
          e === U.HYPHEN_MINUS
            ? (this.state = be.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH)
            : ((this.state = be.COMMENT_END_DASH),
              this._stateCommentEndDash(e));
        }
        _stateCommentLessThanSignBangDashDash(e) {
          e !== U.GREATER_THAN_SIGN &&
            e !== U.EOF &&
            this._err($.nestedComment),
            (this.state = be.COMMENT_END),
            this._stateCommentEnd(e);
        }
        _stateCommentEndDash(e) {
          const t = this.currentToken;
          switch (e) {
            case U.HYPHEN_MINUS:
              this.state = be.COMMENT_END;
              break;
            case U.EOF:
              this._err($.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += '-'), (this.state = be.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentEnd(e) {
          const t = this.currentToken;
          switch (e) {
            case U.GREATER_THAN_SIGN:
              (this.state = be.DATA), this.emitCurrentComment(t);
              break;
            case U.EXCLAMATION_MARK:
              this.state = be.COMMENT_END_BANG;
              break;
            case U.HYPHEN_MINUS:
              t.data += '-';
              break;
            case U.EOF:
              this._err($.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += '--'),
                (this.state = be.COMMENT),
                this._stateComment(e);
          }
        }
        _stateCommentEndBang(e) {
          const t = this.currentToken;
          switch (e) {
            case U.HYPHEN_MINUS:
              (t.data += '--!'), (this.state = be.COMMENT_END_DASH);
              break;
            case U.GREATER_THAN_SIGN:
              this._err($.incorrectlyClosedComment),
                (this.state = be.DATA),
                this.emitCurrentComment(t);
              break;
            case U.EOF:
              this._err($.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += '--!'),
                (this.state = be.COMMENT),
                this._stateComment(e);
          }
        }
        _stateDoctype(e) {
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              this.state = be.BEFORE_DOCTYPE_NAME;
              break;
            case U.GREATER_THAN_SIGN:
              (this.state = be.BEFORE_DOCTYPE_NAME),
                this._stateBeforeDoctypeName(e);
              break;
            case U.EOF: {
              this._err($.eofInDoctype), this._createDoctypeToken(null);
              const e = this.currentToken;
              (e.forceQuirks = !0),
                this.emitCurrentDoctype(e),
                this._emitEOFToken();
              break;
            }
            default:
              this._err($.missingWhitespaceBeforeDoctypeName),
                (this.state = be.BEFORE_DOCTYPE_NAME),
                this._stateBeforeDoctypeName(e);
          }
        }
        _stateBeforeDoctypeName(e) {
          if (Re(e))
            this._createDoctypeToken(String.fromCharCode(xe(e))),
              (this.state = be.DOCTYPE_NAME);
          else
            switch (e) {
              case U.SPACE:
              case U.LINE_FEED:
              case U.TABULATION:
              case U.FORM_FEED:
                break;
              case U.NULL:
                this._err($.unexpectedNullCharacter),
                  this._createDoctypeToken(H),
                  (this.state = be.DOCTYPE_NAME);
                break;
              case U.GREATER_THAN_SIGN: {
                this._err($.missingDoctypeName), this._createDoctypeToken(null);
                const e = this.currentToken;
                (e.forceQuirks = !0),
                  this.emitCurrentDoctype(e),
                  (this.state = be.DATA);
                break;
              }
              case U.EOF: {
                this._err($.eofInDoctype), this._createDoctypeToken(null);
                const e = this.currentToken;
                (e.forceQuirks = !0),
                  this.emitCurrentDoctype(e),
                  this._emitEOFToken();
                break;
              }
              default:
                this._createDoctypeToken(String.fromCodePoint(e)),
                  (this.state = be.DOCTYPE_NAME);
            }
        }
        _stateDoctypeName(e) {
          const t = this.currentToken;
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              this.state = be.AFTER_DOCTYPE_NAME;
              break;
            case U.GREATER_THAN_SIGN:
              (this.state = be.DATA), this.emitCurrentDoctype(t);
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter), (t.name += H);
              break;
            case U.EOF:
              this._err($.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.name += String.fromCodePoint(Re(e) ? xe(e) : e);
          }
        }
        _stateAfterDoctypeName(e) {
          const t = this.currentToken;
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              break;
            case U.GREATER_THAN_SIGN:
              (this.state = be.DATA), this.emitCurrentDoctype(t);
              break;
            case U.EOF:
              this._err($.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._consumeSequenceIfMatch(q, !1)
                ? (this.state = be.AFTER_DOCTYPE_PUBLIC_KEYWORD)
                : this._consumeSequenceIfMatch(W, !1)
                  ? (this.state = be.AFTER_DOCTYPE_SYSTEM_KEYWORD)
                  : this._ensureHibernation() ||
                    (this._err($.invalidCharacterSequenceAfterDoctypeName),
                    (t.forceQuirks = !0),
                    (this.state = be.BOGUS_DOCTYPE),
                    this._stateBogusDoctype(e));
          }
        }
        _stateAfterDoctypePublicKeyword(e) {
          const t = this.currentToken;
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              this.state = be.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case U.QUOTATION_MARK:
              this._err($.missingWhitespaceAfterDoctypePublicKeyword),
                (t.publicId = ''),
                (this.state = be.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case U.APOSTROPHE:
              this._err($.missingWhitespaceAfterDoctypePublicKeyword),
                (t.publicId = ''),
                (this.state = be.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
              break;
            case U.GREATER_THAN_SIGN:
              this._err($.missingDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = be.DATA),
                this.emitCurrentDoctype(t);
              break;
            case U.EOF:
              this._err($.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err($.missingQuoteBeforeDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = be.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBeforeDoctypePublicIdentifier(e) {
          const t = this.currentToken;
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              break;
            case U.QUOTATION_MARK:
              (t.publicId = ''),
                (this.state = be.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case U.APOSTROPHE:
              (t.publicId = ''),
                (this.state = be.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
              break;
            case U.GREATER_THAN_SIGN:
              this._err($.missingDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = be.DATA),
                this.emitCurrentDoctype(t);
              break;
            case U.EOF:
              this._err($.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err($.missingQuoteBeforeDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = be.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateDoctypePublicIdentifierDoubleQuoted(e) {
          const t = this.currentToken;
          switch (e) {
            case U.QUOTATION_MARK:
              this.state = be.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter), (t.publicId += H);
              break;
            case U.GREATER_THAN_SIGN:
              this._err($.abruptDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = be.DATA);
              break;
            case U.EOF:
              this._err($.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.publicId += String.fromCodePoint(e);
          }
        }
        _stateDoctypePublicIdentifierSingleQuoted(e) {
          const t = this.currentToken;
          switch (e) {
            case U.APOSTROPHE:
              this.state = be.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter), (t.publicId += H);
              break;
            case U.GREATER_THAN_SIGN:
              this._err($.abruptDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = be.DATA);
              break;
            case U.EOF:
              this._err($.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.publicId += String.fromCodePoint(e);
          }
        }
        _stateAfterDoctypePublicIdentifier(e) {
          const t = this.currentToken;
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              this.state = be.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
              break;
            case U.GREATER_THAN_SIGN:
              (this.state = be.DATA), this.emitCurrentDoctype(t);
              break;
            case U.QUOTATION_MARK:
              this._err(
                $.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers,
              ),
                (t.systemId = ''),
                (this.state = be.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case U.APOSTROPHE:
              this._err(
                $.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers,
              ),
                (t.systemId = ''),
                (this.state = be.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case U.EOF:
              this._err($.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err($.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = be.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBetweenDoctypePublicAndSystemIdentifiers(e) {
          const t = this.currentToken;
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              break;
            case U.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = be.DATA);
              break;
            case U.QUOTATION_MARK:
              (t.systemId = ''),
                (this.state = be.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case U.APOSTROPHE:
              (t.systemId = ''),
                (this.state = be.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case U.EOF:
              this._err($.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err($.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = be.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateAfterDoctypeSystemKeyword(e) {
          const t = this.currentToken;
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              this.state = be.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case U.QUOTATION_MARK:
              this._err($.missingWhitespaceAfterDoctypeSystemKeyword),
                (t.systemId = ''),
                (this.state = be.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case U.APOSTROPHE:
              this._err($.missingWhitespaceAfterDoctypeSystemKeyword),
                (t.systemId = ''),
                (this.state = be.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case U.GREATER_THAN_SIGN:
              this._err($.missingDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = be.DATA),
                this.emitCurrentDoctype(t);
              break;
            case U.EOF:
              this._err($.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err($.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = be.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBeforeDoctypeSystemIdentifier(e) {
          const t = this.currentToken;
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              break;
            case U.QUOTATION_MARK:
              (t.systemId = ''),
                (this.state = be.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case U.APOSTROPHE:
              (t.systemId = ''),
                (this.state = be.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case U.GREATER_THAN_SIGN:
              this._err($.missingDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = be.DATA),
                this.emitCurrentDoctype(t);
              break;
            case U.EOF:
              this._err($.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err($.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = be.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateDoctypeSystemIdentifierDoubleQuoted(e) {
          const t = this.currentToken;
          switch (e) {
            case U.QUOTATION_MARK:
              this.state = be.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter), (t.systemId += H);
              break;
            case U.GREATER_THAN_SIGN:
              this._err($.abruptDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = be.DATA);
              break;
            case U.EOF:
              this._err($.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.systemId += String.fromCodePoint(e);
          }
        }
        _stateDoctypeSystemIdentifierSingleQuoted(e) {
          const t = this.currentToken;
          switch (e) {
            case U.APOSTROPHE:
              this.state = be.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter), (t.systemId += H);
              break;
            case U.GREATER_THAN_SIGN:
              this._err($.abruptDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = be.DATA);
              break;
            case U.EOF:
              this._err($.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.systemId += String.fromCodePoint(e);
          }
        }
        _stateAfterDoctypeSystemIdentifier(e) {
          const t = this.currentToken;
          switch (e) {
            case U.SPACE:
            case U.LINE_FEED:
            case U.TABULATION:
            case U.FORM_FEED:
              break;
            case U.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = be.DATA);
              break;
            case U.EOF:
              this._err($.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err($.unexpectedCharacterAfterDoctypeSystemIdentifier),
                (this.state = be.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBogusDoctype(e) {
          const t = this.currentToken;
          switch (e) {
            case U.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = be.DATA);
              break;
            case U.NULL:
              this._err($.unexpectedNullCharacter);
              break;
            case U.EOF:
              this.emitCurrentDoctype(t), this._emitEOFToken();
          }
        }
        _stateCdataSection(e) {
          switch (e) {
            case U.RIGHT_SQUARE_BRACKET:
              this.state = be.CDATA_SECTION_BRACKET;
              break;
            case U.EOF:
              this._err($.eofInCdata), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateCdataSectionBracket(e) {
          e === U.RIGHT_SQUARE_BRACKET
            ? (this.state = be.CDATA_SECTION_END)
            : (this._emitChars(']'),
              (this.state = be.CDATA_SECTION),
              this._stateCdataSection(e));
        }
        _stateCdataSectionEnd(e) {
          switch (e) {
            case U.GREATER_THAN_SIGN:
              this.state = be.DATA;
              break;
            case U.RIGHT_SQUARE_BRACKET:
              this._emitChars(']');
              break;
            default:
              this._emitChars(']]'),
                (this.state = be.CDATA_SECTION),
                this._stateCdataSection(e);
          }
        }
        _stateCharacterReference(e) {
          e === U.NUMBER_SIGN
            ? (this.state = be.NUMERIC_CHARACTER_REFERENCE)
            : Le(e)
              ? ((this.state = be.NAMED_CHARACTER_REFERENCE),
                this._stateNamedCharacterReference(e))
              : (this._flushCodePointConsumedAsCharacterReference(U.AMPERSAND),
                this._reconsumeInState(this.returnState, e));
        }
        _stateNamedCharacterReference(e) {
          const t = this._matchNamedCharacterReference(e);
          if (this._ensureHibernation());
          else if (t) {
            for (let e = 0; e < t.length; e++)
              this._flushCodePointConsumedAsCharacterReference(t[e]);
            this.state = this.returnState;
          } else
            this._flushCodePointConsumedAsCharacterReference(U.AMPERSAND),
              (this.state = be.AMBIGUOUS_AMPERSAND);
        }
        _stateAmbiguousAmpersand(e) {
          Le(e)
            ? this._flushCodePointConsumedAsCharacterReference(e)
            : (e === U.SEMICOLON && this._err($.unknownNamedCharacterReference),
              this._reconsumeInState(this.returnState, e));
        }
        _stateNumericCharacterReference(e) {
          (this.charRefCode = 0),
            e === U.LATIN_SMALL_X || e === U.LATIN_CAPITAL_X
              ? (this.state = be.HEXADEMICAL_CHARACTER_REFERENCE_START)
              : Oe(e)
                ? ((this.state = be.DECIMAL_CHARACTER_REFERENCE),
                  this._stateDecimalCharacterReference(e))
                : (this._err($.absenceOfDigitsInNumericCharacterReference),
                  this._flushCodePointConsumedAsCharacterReference(U.AMPERSAND),
                  this._flushCodePointConsumedAsCharacterReference(
                    U.NUMBER_SIGN,
                  ),
                  this._reconsumeInState(this.returnState, e));
        }
        _stateHexademicalCharacterReferenceStart(e) {
          !(function (e) {
            return Oe(e) || Pe(e) || Me(e);
          })(e)
            ? (this._err($.absenceOfDigitsInNumericCharacterReference),
              this._flushCodePointConsumedAsCharacterReference(U.AMPERSAND),
              this._flushCodePointConsumedAsCharacterReference(U.NUMBER_SIGN),
              this._unconsume(2),
              (this.state = this.returnState))
            : ((this.state = be.HEXADEMICAL_CHARACTER_REFERENCE),
              this._stateHexademicalCharacterReference(e));
        }
        _stateHexademicalCharacterReference(e) {
          Pe(e)
            ? (this.charRefCode = 16 * this.charRefCode + e - 55)
            : Me(e)
              ? (this.charRefCode = 16 * this.charRefCode + e - 87)
              : Oe(e)
                ? (this.charRefCode = 16 * this.charRefCode + e - 48)
                : e === U.SEMICOLON
                  ? (this.state = be.NUMERIC_CHARACTER_REFERENCE_END)
                  : (this._err($.missingSemicolonAfterCharacterReference),
                    (this.state = be.NUMERIC_CHARACTER_REFERENCE_END),
                    this._stateNumericCharacterReferenceEnd(e));
        }
        _stateDecimalCharacterReference(e) {
          Oe(e)
            ? (this.charRefCode = 10 * this.charRefCode + e - 48)
            : e === U.SEMICOLON
              ? (this.state = be.NUMERIC_CHARACTER_REFERENCE_END)
              : (this._err($.missingSemicolonAfterCharacterReference),
                (this.state = be.NUMERIC_CHARACTER_REFERENCE_END),
                this._stateNumericCharacterReferenceEnd(e));
        }
        _stateNumericCharacterReferenceEnd(e) {
          if (this.charRefCode === U.NULL)
            this._err($.nullCharacterReference),
              (this.charRefCode = U.REPLACEMENT_CHARACTER);
          else if (this.charRefCode > 1114111)
            this._err($.characterReferenceOutsideUnicodeRange),
              (this.charRefCode = U.REPLACEMENT_CHARACTER);
          else if (V(this.charRefCode))
            this._err($.surrogateCharacterReference),
              (this.charRefCode = U.REPLACEMENT_CHARACTER);
          else if (X(this.charRefCode))
            this._err($.noncharacterCharacterReference);
          else if (
            Q(this.charRefCode) ||
            this.charRefCode === U.CARRIAGE_RETURN
          ) {
            this._err($.controlCharacterReference);
            const e = ke.get(this.charRefCode);
            void 0 !== e && (this.charRefCode = e);
          }
          this._flushCodePointConsumedAsCharacterReference(this.charRefCode),
            this._reconsumeInState(this.returnState, e);
        }
      }
      const Fe = new Set([
          _e.DD,
          _e.DT,
          _e.LI,
          _e.OPTGROUP,
          _e.OPTION,
          _e.P,
          _e.RB,
          _e.RP,
          _e.RT,
          _e.RTC,
        ]),
        He = new Set([
          ...Fe,
          _e.CAPTION,
          _e.COLGROUP,
          _e.TBODY,
          _e.TD,
          _e.TFOOT,
          _e.TH,
          _e.THEAD,
          _e.TR,
        ]),
        Ue = new Map([
          [_e.APPLET, me.HTML],
          [_e.CAPTION, me.HTML],
          [_e.HTML, me.HTML],
          [_e.MARQUEE, me.HTML],
          [_e.OBJECT, me.HTML],
          [_e.TABLE, me.HTML],
          [_e.TD, me.HTML],
          [_e.TEMPLATE, me.HTML],
          [_e.TH, me.HTML],
          [_e.ANNOTATION_XML, me.MATHML],
          [_e.MI, me.MATHML],
          [_e.MN, me.MATHML],
          [_e.MO, me.MATHML],
          [_e.MS, me.MATHML],
          [_e.MTEXT, me.MATHML],
          [_e.DESC, me.SVG],
          [_e.FOREIGN_OBJECT, me.SVG],
          [_e.TITLE, me.SVG],
        ]),
        Ge = [_e.H1, _e.H2, _e.H3, _e.H4, _e.H5, _e.H6],
        ze = [_e.TR, _e.TEMPLATE, _e.HTML],
        Ye = [_e.TBODY, _e.TFOOT, _e.THEAD, _e.TEMPLATE, _e.HTML],
        je = [_e.TABLE, _e.TEMPLATE, _e.HTML],
        qe = [_e.TD, _e.TH];
      class We {
        get currentTmplContentOrNode() {
          return this._isInTemplate()
            ? this.treeAdapter.getTemplateContent(this.current)
            : this.current;
        }
        constructor(e, t, n) {
          (this.treeAdapter = t),
            (this.handler = n),
            (this.items = []),
            (this.tagIDs = []),
            (this.stackTop = -1),
            (this.tmplCount = 0),
            (this.currentTagId = _e.UNKNOWN),
            (this.current = e);
        }
        _indexOf(e) {
          return this.items.lastIndexOf(e, this.stackTop);
        }
        _isInTemplate() {
          return (
            this.currentTagId === _e.TEMPLATE &&
            this.treeAdapter.getNamespaceURI(this.current) === me.HTML
          );
        }
        _updateCurrentElement() {
          (this.current = this.items[this.stackTop]),
            (this.currentTagId = this.tagIDs[this.stackTop]);
        }
        push(e, t) {
          this.stackTop++,
            (this.items[this.stackTop] = e),
            (this.current = e),
            (this.tagIDs[this.stackTop] = t),
            (this.currentTagId = t),
            this._isInTemplate() && this.tmplCount++,
            this.handler.onItemPush(e, t, !0);
        }
        pop() {
          const e = this.current;
          this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--,
            this.stackTop--,
            this._updateCurrentElement(),
            this.handler.onItemPop(e, !0);
        }
        replace(e, t) {
          const n = this._indexOf(e);
          (this.items[n] = t), n === this.stackTop && (this.current = t);
        }
        insertAfter(e, t, n) {
          const r = this._indexOf(e) + 1;
          this.items.splice(r, 0, t),
            this.tagIDs.splice(r, 0, n),
            this.stackTop++,
            r === this.stackTop && this._updateCurrentElement(),
            this.handler.onItemPush(
              this.current,
              this.currentTagId,
              r === this.stackTop,
            );
        }
        popUntilTagNamePopped(e) {
          let t = this.stackTop + 1;
          do {
            t = this.tagIDs.lastIndexOf(e, t - 1);
          } while (
            t > 0 &&
            this.treeAdapter.getNamespaceURI(this.items[t]) !== me.HTML
          );
          this.shortenToLength(t < 0 ? 0 : t);
        }
        shortenToLength(e) {
          for (; this.stackTop >= e; ) {
            const t = this.current;
            this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1),
              this.stackTop--,
              this._updateCurrentElement(),
              this.handler.onItemPop(t, this.stackTop < e);
          }
        }
        popUntilElementPopped(e) {
          const t = this._indexOf(e);
          this.shortenToLength(t < 0 ? 0 : t);
        }
        popUntilPopped(e, t) {
          const n = this._indexOfTagNames(e, t);
          this.shortenToLength(n < 0 ? 0 : n);
        }
        popUntilNumberedHeaderPopped() {
          this.popUntilPopped(Ge, me.HTML);
        }
        popUntilTableCellPopped() {
          this.popUntilPopped(qe, me.HTML);
        }
        popAllUpToHtmlElement() {
          (this.tmplCount = 0), this.shortenToLength(1);
        }
        _indexOfTagNames(e, t) {
          for (let n = this.stackTop; n >= 0; n--)
            if (
              e.includes(this.tagIDs[n]) &&
              this.treeAdapter.getNamespaceURI(this.items[n]) === t
            )
              return n;
          return -1;
        }
        clearBackTo(e, t) {
          const n = this._indexOfTagNames(e, t);
          this.shortenToLength(n + 1);
        }
        clearBackToTableContext() {
          this.clearBackTo(je, me.HTML);
        }
        clearBackToTableBodyContext() {
          this.clearBackTo(Ye, me.HTML);
        }
        clearBackToTableRowContext() {
          this.clearBackTo(ze, me.HTML);
        }
        remove(e) {
          const t = this._indexOf(e);
          t >= 0 &&
            (t === this.stackTop
              ? this.pop()
              : (this.items.splice(t, 1),
                this.tagIDs.splice(t, 1),
                this.stackTop--,
                this._updateCurrentElement(),
                this.handler.onItemPop(e, !1)));
        }
        tryPeekProperlyNestedBodyElement() {
          return this.stackTop >= 1 && this.tagIDs[1] === _e.BODY
            ? this.items[1]
            : null;
        }
        contains(e) {
          return this._indexOf(e) > -1;
        }
        getCommonAncestor(e) {
          const t = this._indexOf(e) - 1;
          return t >= 0 ? this.items[t] : null;
        }
        isRootHtmlElementCurrent() {
          return 0 === this.stackTop && this.tagIDs[0] === _e.HTML;
        }
        hasInScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            const n = this.tagIDs[t],
              r = this.treeAdapter.getNamespaceURI(this.items[t]);
            if (n === e && r === me.HTML) return !0;
            if (Ue.get(n) === r) return !1;
          }
          return !0;
        }
        hasNumberedHeaderInScope() {
          for (let e = this.stackTop; e >= 0; e--) {
            const t = this.tagIDs[e],
              n = this.treeAdapter.getNamespaceURI(this.items[e]);
            if (Ne(t) && n === me.HTML) return !0;
            if (Ue.get(t) === n) return !1;
          }
          return !0;
        }
        hasInListItemScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            const n = this.tagIDs[t],
              r = this.treeAdapter.getNamespaceURI(this.items[t]);
            if (n === e && r === me.HTML) return !0;
            if (
              ((n === _e.UL || n === _e.OL) && r === me.HTML) ||
              Ue.get(n) === r
            )
              return !1;
          }
          return !0;
        }
        hasInButtonScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            const n = this.tagIDs[t],
              r = this.treeAdapter.getNamespaceURI(this.items[t]);
            if (n === e && r === me.HTML) return !0;
            if ((n === _e.BUTTON && r === me.HTML) || Ue.get(n) === r)
              return !1;
          }
          return !0;
        }
        hasInTableScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            const n = this.tagIDs[t];
            if (this.treeAdapter.getNamespaceURI(this.items[t]) === me.HTML) {
              if (n === e) return !0;
              if (n === _e.TABLE || n === _e.TEMPLATE || n === _e.HTML)
                return !1;
            }
          }
          return !0;
        }
        hasTableBodyContextInTableScope() {
          for (let e = this.stackTop; e >= 0; e--) {
            const t = this.tagIDs[e];
            if (this.treeAdapter.getNamespaceURI(this.items[e]) === me.HTML) {
              if (t === _e.TBODY || t === _e.THEAD || t === _e.TFOOT) return !0;
              if (t === _e.TABLE || t === _e.HTML) return !1;
            }
          }
          return !0;
        }
        hasInSelectScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            const n = this.tagIDs[t];
            if (this.treeAdapter.getNamespaceURI(this.items[t]) === me.HTML) {
              if (n === e) return !0;
              if (n !== _e.OPTION && n !== _e.OPTGROUP) return !1;
            }
          }
          return !0;
        }
        generateImpliedEndTags() {
          for (; Fe.has(this.currentTagId); ) this.pop();
        }
        generateImpliedEndTagsThoroughly() {
          for (; He.has(this.currentTagId); ) this.pop();
        }
        generateImpliedEndTagsWithExclusion(e) {
          for (; this.currentTagId !== e && He.has(this.currentTagId); )
            this.pop();
        }
      }
      var Ve;
      !(function (e) {
        (e[(e.Marker = 0)] = 'Marker'), (e[(e.Element = 1)] = 'Element');
      })((Ve = Ve || (Ve = {})));
      const Qe = { type: Ve.Marker };
      class Xe {
        constructor(e) {
          (this.treeAdapter = e), (this.entries = []), (this.bookmark = null);
        }
        _getNoahArkConditionCandidates(e, t) {
          const n = [],
            r = t.length,
            i = this.treeAdapter.getTagName(e),
            s = this.treeAdapter.getNamespaceURI(e);
          for (let e = 0; e < this.entries.length; e++) {
            const t = this.entries[e];
            if (t.type === Ve.Marker) break;
            const { element: o } = t;
            if (
              this.treeAdapter.getTagName(o) === i &&
              this.treeAdapter.getNamespaceURI(o) === s
            ) {
              const t = this.treeAdapter.getAttrList(o);
              t.length === r && n.push({ idx: e, attrs: t });
            }
          }
          return n;
        }
        _ensureNoahArkCondition(e) {
          if (this.entries.length < 3) return;
          const t = this.treeAdapter.getAttrList(e),
            n = this._getNoahArkConditionCandidates(e, t);
          if (n.length < 3) return;
          const r = new Map(t.map((e) => [e.name, e.value]));
          let i = 0;
          for (let e = 0; e < n.length; e++) {
            const t = n[e];
            t.attrs.every((e) => r.get(e.name) === e.value) &&
              ((i += 1), i >= 3 && this.entries.splice(t.idx, 1));
          }
        }
        insertMarker() {
          this.entries.unshift(Qe);
        }
        pushElement(e, t) {
          this._ensureNoahArkCondition(e),
            this.entries.unshift({ type: Ve.Element, element: e, token: t });
        }
        insertElementAfterBookmark(e, t) {
          const n = this.entries.indexOf(this.bookmark);
          this.entries.splice(n, 0, { type: Ve.Element, element: e, token: t });
        }
        removeEntry(e) {
          const t = this.entries.indexOf(e);
          t >= 0 && this.entries.splice(t, 1);
        }
        clearToLastMarker() {
          const e = this.entries.indexOf(Qe);
          e >= 0 ? this.entries.splice(0, e + 1) : (this.entries.length = 0);
        }
        getElementEntryInScopeWithTagName(e) {
          const t = this.entries.find(
            (t) =>
              t.type === Ve.Marker ||
              this.treeAdapter.getTagName(t.element) === e,
          );
          return t && t.type === Ve.Element ? t : null;
        }
        getElementEntry(e) {
          return this.entries.find(
            (t) => t.type === Ve.Element && t.element === e,
          );
        }
      }
      function $e(e) {
        return { nodeName: '#text', value: e, parentNode: null };
      }
      const Ke = {
          createDocument() {
            return {
              nodeName: '#document',
              mode: Te.NO_QUIRKS,
              childNodes: [],
            };
          },
          createDocumentFragment() {
            return { nodeName: '#document-fragment', childNodes: [] };
          },
          createElement(e, t, n) {
            return {
              nodeName: e,
              tagName: e,
              attrs: n,
              namespaceURI: t,
              childNodes: [],
              parentNode: null,
            };
          },
          createCommentNode(e) {
            return { nodeName: '#comment', data: e, parentNode: null };
          },
          appendChild(e, t) {
            e.childNodes.push(t), (t.parentNode = e);
          },
          insertBefore(e, t, n) {
            const r = e.childNodes.indexOf(n);
            e.childNodes.splice(r, 0, t), (t.parentNode = e);
          },
          setTemplateContent(e, t) {
            e.content = t;
          },
          getTemplateContent(e) {
            return e.content;
          },
          setDocumentType(e, t, n, r) {
            const i = e.childNodes.find((e) => '#documentType' === e.nodeName);
            if (i) (i.name = t), (i.publicId = n), (i.systemId = r);
            else {
              const i = {
                nodeName: '#documentType',
                name: t,
                publicId: n,
                systemId: r,
                parentNode: null,
              };
              Ke.appendChild(e, i);
            }
          },
          setDocumentMode(e, t) {
            e.mode = t;
          },
          getDocumentMode(e) {
            return e.mode;
          },
          detachNode(e) {
            if (e.parentNode) {
              const t = e.parentNode.childNodes.indexOf(e);
              e.parentNode.childNodes.splice(t, 1), (e.parentNode = null);
            }
          },
          insertText(e, t) {
            if (e.childNodes.length > 0) {
              const n = e.childNodes[e.childNodes.length - 1];
              if (Ke.isTextNode(n)) return void (n.value += t);
            }
            Ke.appendChild(e, $e(t));
          },
          insertTextBefore(e, t, n) {
            const r = e.childNodes[e.childNodes.indexOf(n) - 1];
            r && Ke.isTextNode(r)
              ? (r.value += t)
              : Ke.insertBefore(e, $e(t), n);
          },
          adoptAttributes(e, t) {
            const n = new Set(e.attrs.map((e) => e.name));
            for (let r = 0; r < t.length; r++)
              n.has(t[r].name) || e.attrs.push(t[r]);
          },
          getFirstChild(e) {
            return e.childNodes[0];
          },
          getChildNodes(e) {
            return e.childNodes;
          },
          getParentNode(e) {
            return e.parentNode;
          },
          getAttrList(e) {
            return e.attrs;
          },
          getTagName(e) {
            return e.tagName;
          },
          getNamespaceURI(e) {
            return e.namespaceURI;
          },
          getTextNodeContent(e) {
            return e.value;
          },
          getCommentNodeContent(e) {
            return e.data;
          },
          getDocumentTypeNodeName(e) {
            return e.name;
          },
          getDocumentTypeNodePublicId(e) {
            return e.publicId;
          },
          getDocumentTypeNodeSystemId(e) {
            return e.systemId;
          },
          isTextNode(e) {
            return '#text' === e.nodeName;
          },
          isCommentNode(e) {
            return '#comment' === e.nodeName;
          },
          isDocumentTypeNode(e) {
            return '#documentType' === e.nodeName;
          },
          isElementNode(e) {
            return Object.prototype.hasOwnProperty.call(e, 'tagName');
          },
          setNodeSourceCodeLocation(e, t) {
            e.sourceCodeLocation = t;
          },
          getNodeSourceCodeLocation(e) {
            return e.sourceCodeLocation;
          },
          updateNodeSourceCodeLocation(e, t) {
            e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
          },
        },
        Ze = 'html',
        Je = [
          '+//silmaril//dtd html pro v0r11 19970101//',
          '-//as//dtd html 3.0 aswedit + extensions//',
          '-//advasoft ltd//dtd html 3.0 aswedit + extensions//',
          '-//ietf//dtd html 2.0 level 1//',
          '-//ietf//dtd html 2.0 level 2//',
          '-//ietf//dtd html 2.0 strict level 1//',
          '-//ietf//dtd html 2.0 strict level 2//',
          '-//ietf//dtd html 2.0 strict//',
          '-//ietf//dtd html 2.0//',
          '-//ietf//dtd html 2.1e//',
          '-//ietf//dtd html 3.0//',
          '-//ietf//dtd html 3.2 final//',
          '-//ietf//dtd html 3.2//',
          '-//ietf//dtd html 3//',
          '-//ietf//dtd html level 0//',
          '-//ietf//dtd html level 1//',
          '-//ietf//dtd html level 2//',
          '-//ietf//dtd html level 3//',
          '-//ietf//dtd html strict level 0//',
          '-//ietf//dtd html strict level 1//',
          '-//ietf//dtd html strict level 2//',
          '-//ietf//dtd html strict level 3//',
          '-//ietf//dtd html strict//',
          '-//ietf//dtd html//',
          '-//metrius//dtd metrius presentational//',
          '-//microsoft//dtd internet explorer 2.0 html strict//',
          '-//microsoft//dtd internet explorer 2.0 html//',
          '-//microsoft//dtd internet explorer 2.0 tables//',
          '-//microsoft//dtd internet explorer 3.0 html strict//',
          '-//microsoft//dtd internet explorer 3.0 html//',
          '-//microsoft//dtd internet explorer 3.0 tables//',
          '-//netscape comm. corp.//dtd html//',
          '-//netscape comm. corp.//dtd strict html//',
          "-//o'reilly and associates//dtd html 2.0//",
          "-//o'reilly and associates//dtd html extended 1.0//",
          "-//o'reilly and associates//dtd html extended relaxed 1.0//",
          '-//sq//dtd html 2.0 hotmetal + extensions//',
          '-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//',
          '-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//',
          '-//spyglass//dtd html 2.0 extended//',
          '-//sun microsystems corp.//dtd hotjava html//',
          '-//sun microsystems corp.//dtd hotjava strict html//',
          '-//w3c//dtd html 3 1995-03-24//',
          '-//w3c//dtd html 3.2 draft//',
          '-//w3c//dtd html 3.2 final//',
          '-//w3c//dtd html 3.2//',
          '-//w3c//dtd html 3.2s draft//',
          '-//w3c//dtd html 4.0 frameset//',
          '-//w3c//dtd html 4.0 transitional//',
          '-//w3c//dtd html experimental 19960712//',
          '-//w3c//dtd html experimental 970421//',
          '-//w3c//dtd w3 html//',
          '-//w3o//dtd w3 html 3.0//',
          '-//webtechs//dtd mozilla html 2.0//',
          '-//webtechs//dtd mozilla html//',
        ],
        et = [
          ...Je,
          '-//w3c//dtd html 4.01 frameset//',
          '-//w3c//dtd html 4.01 transitional//',
        ],
        tt = new Set([
          '-//w3o//dtd w3 html strict 3.0//en//',
          '-/w3c/dtd html 4.0 transitional/en',
          'html',
        ]),
        nt = [
          '-//w3c//dtd xhtml 1.0 frameset//',
          '-//w3c//dtd xhtml 1.0 transitional//',
        ],
        rt = [
          ...nt,
          '-//w3c//dtd html 4.01 frameset//',
          '-//w3c//dtd html 4.01 transitional//',
        ];
      function it(e, t) {
        return t.some((t) => e.startsWith(t));
      }
      const st = 'text/html',
        ot = 'application/xhtml+xml',
        at = new Map(
          [
            'attributeName',
            'attributeType',
            'baseFrequency',
            'baseProfile',
            'calcMode',
            'clipPathUnits',
            'diffuseConstant',
            'edgeMode',
            'filterUnits',
            'glyphRef',
            'gradientTransform',
            'gradientUnits',
            'kernelMatrix',
            'kernelUnitLength',
            'keyPoints',
            'keySplines',
            'keyTimes',
            'lengthAdjust',
            'limitingConeAngle',
            'markerHeight',
            'markerUnits',
            'markerWidth',
            'maskContentUnits',
            'maskUnits',
            'numOctaves',
            'pathLength',
            'patternContentUnits',
            'patternTransform',
            'patternUnits',
            'pointsAtX',
            'pointsAtY',
            'pointsAtZ',
            'preserveAlpha',
            'preserveAspectRatio',
            'primitiveUnits',
            'refX',
            'refY',
            'repeatCount',
            'repeatDur',
            'requiredExtensions',
            'requiredFeatures',
            'specularConstant',
            'specularExponent',
            'spreadMethod',
            'startOffset',
            'stdDeviation',
            'stitchTiles',
            'surfaceScale',
            'systemLanguage',
            'tableValues',
            'targetX',
            'targetY',
            'textLength',
            'viewBox',
            'viewTarget',
            'xChannelSelector',
            'yChannelSelector',
            'zoomAndPan',
          ].map((e) => [e.toLowerCase(), e]),
        ),
        ct = new Map([
          [
            'xlink:actuate',
            { prefix: 'xlink', name: 'actuate', namespace: me.XLINK },
          ],
          [
            'xlink:arcrole',
            { prefix: 'xlink', name: 'arcrole', namespace: me.XLINK },
          ],
          [
            'xlink:href',
            { prefix: 'xlink', name: 'href', namespace: me.XLINK },
          ],
          [
            'xlink:role',
            { prefix: 'xlink', name: 'role', namespace: me.XLINK },
          ],
          [
            'xlink:show',
            { prefix: 'xlink', name: 'show', namespace: me.XLINK },
          ],
          [
            'xlink:title',
            { prefix: 'xlink', name: 'title', namespace: me.XLINK },
          ],
          [
            'xlink:type',
            { prefix: 'xlink', name: 'type', namespace: me.XLINK },
          ],
          ['xml:base', { prefix: 'xml', name: 'base', namespace: me.XML }],
          ['xml:lang', { prefix: 'xml', name: 'lang', namespace: me.XML }],
          ['xml:space', { prefix: 'xml', name: 'space', namespace: me.XML }],
          ['xmlns', { prefix: '', name: 'xmlns', namespace: me.XMLNS }],
          [
            'xmlns:xlink',
            { prefix: 'xmlns', name: 'xlink', namespace: me.XMLNS },
          ],
        ]),
        lt = new Map(
          [
            'altGlyph',
            'altGlyphDef',
            'altGlyphItem',
            'animateColor',
            'animateMotion',
            'animateTransform',
            'clipPath',
            'feBlend',
            'feColorMatrix',
            'feComponentTransfer',
            'feComposite',
            'feConvolveMatrix',
            'feDiffuseLighting',
            'feDisplacementMap',
            'feDistantLight',
            'feFlood',
            'feFuncA',
            'feFuncB',
            'feFuncG',
            'feFuncR',
            'feGaussianBlur',
            'feImage',
            'feMerge',
            'feMergeNode',
            'feMorphology',
            'feOffset',
            'fePointLight',
            'feSpecularLighting',
            'feSpotLight',
            'feTile',
            'feTurbulence',
            'foreignObject',
            'glyphRef',
            'linearGradient',
            'radialGradient',
            'textPath',
          ].map((e) => [e.toLowerCase(), e]),
        ),
        ut = new Set([
          _e.B,
          _e.BIG,
          _e.BLOCKQUOTE,
          _e.BODY,
          _e.BR,
          _e.CENTER,
          _e.CODE,
          _e.DD,
          _e.DIV,
          _e.DL,
          _e.DT,
          _e.EM,
          _e.EMBED,
          _e.H1,
          _e.H2,
          _e.H3,
          _e.H4,
          _e.H5,
          _e.H6,
          _e.HEAD,
          _e.HR,
          _e.I,
          _e.IMG,
          _e.LI,
          _e.LISTING,
          _e.MENU,
          _e.META,
          _e.NOBR,
          _e.OL,
          _e.P,
          _e.PRE,
          _e.RUBY,
          _e.S,
          _e.SMALL,
          _e.SPAN,
          _e.STRONG,
          _e.STRIKE,
          _e.SUB,
          _e.SUP,
          _e.TABLE,
          _e.TT,
          _e.U,
          _e.UL,
          _e.VAR,
        ]);
      function ht(e) {
        for (let t = 0; t < e.attrs.length; t++)
          if ('definitionurl' === e.attrs[t].name) {
            e.attrs[t].name = 'definitionURL';
            break;
          }
      }
      function pt(e) {
        for (let t = 0; t < e.attrs.length; t++) {
          const n = at.get(e.attrs[t].name);
          null != n && (e.attrs[t].name = n);
        }
      }
      function dt(e) {
        for (let t = 0; t < e.attrs.length; t++) {
          const n = ct.get(e.attrs[t].name);
          n &&
            ((e.attrs[t].prefix = n.prefix),
            (e.attrs[t].name = n.name),
            (e.attrs[t].namespace = n.namespace));
        }
      }
      function ft(e, t, n, r) {
        return (
          ((!r || r === me.HTML) &&
            (function (e, t, n) {
              if (t === me.MATHML && e === _e.ANNOTATION_XML)
                for (let e = 0; e < n.length; e++)
                  if (n[e].name === Ee.ENCODING) {
                    const t = n[e].value.toLowerCase();
                    return t === st || t === ot;
                  }
              return (
                t === me.SVG &&
                (e === _e.FOREIGN_OBJECT || e === _e.DESC || e === _e.TITLE)
              );
            })(e, t, n)) ||
          ((!r || r === me.MATHML) &&
            (function (e, t) {
              return (
                t === me.MATHML &&
                (e === _e.MI ||
                  e === _e.MO ||
                  e === _e.MN ||
                  e === _e.MS ||
                  e === _e.MTEXT)
              );
            })(e, t))
        );
      }
      var mt;
      !(function (e) {
        (e[(e.INITIAL = 0)] = 'INITIAL'),
          (e[(e.BEFORE_HTML = 1)] = 'BEFORE_HTML'),
          (e[(e.BEFORE_HEAD = 2)] = 'BEFORE_HEAD'),
          (e[(e.IN_HEAD = 3)] = 'IN_HEAD'),
          (e[(e.IN_HEAD_NO_SCRIPT = 4)] = 'IN_HEAD_NO_SCRIPT'),
          (e[(e.AFTER_HEAD = 5)] = 'AFTER_HEAD'),
          (e[(e.IN_BODY = 6)] = 'IN_BODY'),
          (e[(e.TEXT = 7)] = 'TEXT'),
          (e[(e.IN_TABLE = 8)] = 'IN_TABLE'),
          (e[(e.IN_TABLE_TEXT = 9)] = 'IN_TABLE_TEXT'),
          (e[(e.IN_CAPTION = 10)] = 'IN_CAPTION'),
          (e[(e.IN_COLUMN_GROUP = 11)] = 'IN_COLUMN_GROUP'),
          (e[(e.IN_TABLE_BODY = 12)] = 'IN_TABLE_BODY'),
          (e[(e.IN_ROW = 13)] = 'IN_ROW'),
          (e[(e.IN_CELL = 14)] = 'IN_CELL'),
          (e[(e.IN_SELECT = 15)] = 'IN_SELECT'),
          (e[(e.IN_SELECT_IN_TABLE = 16)] = 'IN_SELECT_IN_TABLE'),
          (e[(e.IN_TEMPLATE = 17)] = 'IN_TEMPLATE'),
          (e[(e.AFTER_BODY = 18)] = 'AFTER_BODY'),
          (e[(e.IN_FRAMESET = 19)] = 'IN_FRAMESET'),
          (e[(e.AFTER_FRAMESET = 20)] = 'AFTER_FRAMESET'),
          (e[(e.AFTER_AFTER_BODY = 21)] = 'AFTER_AFTER_BODY'),
          (e[(e.AFTER_AFTER_FRAMESET = 22)] = 'AFTER_AFTER_FRAMESET');
      })(mt || (mt = {}));
      const Et = {
          startLine: -1,
          startCol: -1,
          startOffset: -1,
          endLine: -1,
          endCol: -1,
          endOffset: -1,
        },
        Tt = new Set([_e.TABLE, _e.TBODY, _e.TFOOT, _e.THEAD, _e.TR]),
        At = {
          scriptingEnabled: !0,
          sourceCodeLocationInfo: !1,
          treeAdapter: Ke,
          onParseError: null,
        };
      class _t {
        constructor(e, t, n = null, r = null) {
          (this.fragmentContext = n),
            (this.scriptHandler = r),
            (this.currentToken = null),
            (this.stopped = !1),
            (this.insertionMode = mt.INITIAL),
            (this.originalInsertionMode = mt.INITIAL),
            (this.headElement = null),
            (this.formElement = null),
            (this.currentNotInHTML = !1),
            (this.tmplInsertionModeStack = []),
            (this.pendingCharacterTokens = []),
            (this.hasNonWhitespacePendingCharacterToken = !1),
            (this.framesetOk = !0),
            (this.skipNextNewLine = !1),
            (this.fosterParentingEnabled = !1),
            (this.options = { ...At, ...e }),
            (this.treeAdapter = this.options.treeAdapter),
            (this.onParseError = this.options.onParseError),
            this.onParseError && (this.options.sourceCodeLocationInfo = !0),
            (this.document = null != t ? t : this.treeAdapter.createDocument()),
            (this.tokenizer = new Be(this.options, this)),
            (this.activeFormattingElements = new Xe(this.treeAdapter)),
            (this.fragmentContextID = n
              ? Ce(this.treeAdapter.getTagName(n))
              : _e.UNKNOWN),
            this._setContextModes(
              null != n ? n : this.document,
              this.fragmentContextID,
            ),
            (this.openElements = new We(this.document, this.treeAdapter, this));
        }
        static parse(e, t) {
          const n = new this(t);
          return n.tokenizer.write(e, !0), n.document;
        }
        static getFragmentParser(e, t) {
          const n = { ...At, ...t };
          null != e ||
            (e = n.treeAdapter.createElement(Ae.TEMPLATE, me.HTML, []));
          const r = n.treeAdapter.createElement('documentmock', me.HTML, []),
            i = new this(n, r, e);
          return (
            i.fragmentContextID === _e.TEMPLATE &&
              i.tmplInsertionModeStack.unshift(mt.IN_TEMPLATE),
            i._initTokenizerForFragmentParsing(),
            i._insertFakeRootElement(),
            i._resetInsertionMode(),
            i._findFormInFragmentContext(),
            i
          );
        }
        getFragment() {
          const e = this.treeAdapter.getFirstChild(this.document),
            t = this.treeAdapter.createDocumentFragment();
          return this._adoptNodes(e, t), t;
        }
        _err(e, t, n) {
          var r;
          if (!this.onParseError) return;
          const i = null !== (r = e.location) && void 0 !== r ? r : Et,
            s = {
              code: t,
              startLine: i.startLine,
              startCol: i.startCol,
              startOffset: i.startOffset,
              endLine: n ? i.startLine : i.endLine,
              endCol: n ? i.startCol : i.endCol,
              endOffset: n ? i.startOffset : i.endOffset,
            };
          this.onParseError(s);
        }
        onItemPush(e, t, n) {
          var r, i;
          null === (i = (r = this.treeAdapter).onItemPush) ||
            void 0 === i ||
            i.call(r, e),
            n && this.openElements.stackTop > 0 && this._setContextModes(e, t);
        }
        onItemPop(e, t) {
          var n, r;
          if (
            (this.options.sourceCodeLocationInfo &&
              this._setEndLocation(e, this.currentToken),
            null === (r = (n = this.treeAdapter).onItemPop) ||
              void 0 === r ||
              r.call(n, e, this.openElements.current),
            t)
          ) {
            let e, t;
            0 === this.openElements.stackTop && this.fragmentContext
              ? ((e = this.fragmentContext), (t = this.fragmentContextID))
              : ({ current: e, currentTagId: t } = this.openElements),
              this._setContextModes(e, t);
          }
        }
        _setContextModes(e, t) {
          const n =
            e === this.document ||
            this.treeAdapter.getNamespaceURI(e) === me.HTML;
          (this.currentNotInHTML = !n),
            (this.tokenizer.inForeignNode =
              !n && !this._isIntegrationPoint(t, e));
        }
        _switchToTextParsing(e, t) {
          this._insertElement(e, me.HTML),
            (this.tokenizer.state = t),
            (this.originalInsertionMode = this.insertionMode),
            (this.insertionMode = mt.TEXT);
        }
        switchToPlaintextParsing() {
          (this.insertionMode = mt.TEXT),
            (this.originalInsertionMode = mt.IN_BODY),
            (this.tokenizer.state = De.PLAINTEXT);
        }
        _getAdjustedCurrentElement() {
          return 0 === this.openElements.stackTop && this.fragmentContext
            ? this.fragmentContext
            : this.openElements.current;
        }
        _findFormInFragmentContext() {
          let e = this.fragmentContext;
          for (; e; ) {
            if (this.treeAdapter.getTagName(e) === Ae.FORM) {
              this.formElement = e;
              break;
            }
            e = this.treeAdapter.getParentNode(e);
          }
        }
        _initTokenizerForFragmentParsing() {
          if (
            this.fragmentContext &&
            this.treeAdapter.getNamespaceURI(this.fragmentContext) === me.HTML
          )
            switch (this.fragmentContextID) {
              case _e.TITLE:
              case _e.TEXTAREA:
                this.tokenizer.state = De.RCDATA;
                break;
              case _e.STYLE:
              case _e.XMP:
              case _e.IFRAME:
              case _e.NOEMBED:
              case _e.NOFRAMES:
              case _e.NOSCRIPT:
                this.tokenizer.state = De.RAWTEXT;
                break;
              case _e.SCRIPT:
                this.tokenizer.state = De.SCRIPT_DATA;
                break;
              case _e.PLAINTEXT:
                this.tokenizer.state = De.PLAINTEXT;
            }
        }
        _setDocumentType(e) {
          const t = e.name || '',
            n = e.publicId || '',
            r = e.systemId || '';
          if (
            (this.treeAdapter.setDocumentType(this.document, t, n, r),
            e.location)
          ) {
            const t = this.treeAdapter
              .getChildNodes(this.document)
              .find((e) => this.treeAdapter.isDocumentTypeNode(e));
            t && this.treeAdapter.setNodeSourceCodeLocation(t, e.location);
          }
        }
        _attachElementToTree(e, t) {
          if (this.options.sourceCodeLocationInfo) {
            const n = t && { ...t, startTag: t };
            this.treeAdapter.setNodeSourceCodeLocation(e, n);
          }
          if (this._shouldFosterParentOnInsertion())
            this._fosterParentElement(e);
          else {
            const t = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.appendChild(t, e);
          }
        }
        _appendElement(e, t) {
          const n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
          this._attachElementToTree(n, e.location);
        }
        _insertElement(e, t) {
          const n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
          this._attachElementToTree(n, e.location),
            this.openElements.push(n, e.tagID);
        }
        _insertFakeElement(e, t) {
          const n = this.treeAdapter.createElement(e, me.HTML, []);
          this._attachElementToTree(n, null), this.openElements.push(n, t);
        }
        _insertTemplate(e) {
          const t = this.treeAdapter.createElement(e.tagName, me.HTML, e.attrs),
            n = this.treeAdapter.createDocumentFragment();
          this.treeAdapter.setTemplateContent(t, n),
            this._attachElementToTree(t, e.location),
            this.openElements.push(t, e.tagID),
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(n, null);
        }
        _insertFakeRootElement() {
          const e = this.treeAdapter.createElement(Ae.HTML, me.HTML, []);
          this.options.sourceCodeLocationInfo &&
            this.treeAdapter.setNodeSourceCodeLocation(e, null),
            this.treeAdapter.appendChild(this.openElements.current, e),
            this.openElements.push(e, _e.HTML);
        }
        _appendCommentNode(e, t) {
          const n = this.treeAdapter.createCommentNode(e.data);
          this.treeAdapter.appendChild(t, n),
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(n, e.location);
        }
        _insertCharacters(e) {
          let t, n;
          if (
            (this._shouldFosterParentOnInsertion()
              ? (({ parent: t, beforeElement: n } =
                  this._findFosterParentingLocation()),
                n
                  ? this.treeAdapter.insertTextBefore(t, e.chars, n)
                  : this.treeAdapter.insertText(t, e.chars))
              : ((t = this.openElements.currentTmplContentOrNode),
                this.treeAdapter.insertText(t, e.chars)),
            !e.location)
          )
            return;
          const r = this.treeAdapter.getChildNodes(t),
            i = n ? r.lastIndexOf(n) : r.length,
            s = r[i - 1];
          if (this.treeAdapter.getNodeSourceCodeLocation(s)) {
            const { endLine: t, endCol: n, endOffset: r } = e.location;
            this.treeAdapter.updateNodeSourceCodeLocation(s, {
              endLine: t,
              endCol: n,
              endOffset: r,
            });
          } else
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(s, e.location);
        }
        _adoptNodes(e, t) {
          for (
            let n = this.treeAdapter.getFirstChild(e);
            n;
            n = this.treeAdapter.getFirstChild(e)
          )
            this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(t, n);
        }
        _setEndLocation(e, t) {
          if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
            const n = t.location,
              r = this.treeAdapter.getTagName(e),
              i =
                t.type === Z.END_TAG && r === t.tagName
                  ? {
                      endTag: { ...n },
                      endLine: n.endLine,
                      endCol: n.endCol,
                      endOffset: n.endOffset,
                    }
                  : {
                      endLine: n.startLine,
                      endCol: n.startCol,
                      endOffset: n.startOffset,
                    };
            this.treeAdapter.updateNodeSourceCodeLocation(e, i);
          }
        }
        shouldProcessStartTagTokenInForeignContent(e) {
          if (!this.currentNotInHTML) return !1;
          let t, n;
          return (
            0 === this.openElements.stackTop && this.fragmentContext
              ? ((t = this.fragmentContext), (n = this.fragmentContextID))
              : ({ current: t, currentTagId: n } = this.openElements),
            (e.tagID !== _e.SVG ||
              this.treeAdapter.getTagName(t) !== Ae.ANNOTATION_XML ||
              this.treeAdapter.getNamespaceURI(t) !== me.MATHML) &&
              (this.tokenizer.inForeignNode ||
                ((e.tagID === _e.MGLYPH || e.tagID === _e.MALIGNMARK) &&
                  !this._isIntegrationPoint(n, t, me.HTML)))
          );
        }
        _processToken(e) {
          switch (e.type) {
            case Z.CHARACTER:
              this.onCharacter(e);
              break;
            case Z.NULL_CHARACTER:
              this.onNullCharacter(e);
              break;
            case Z.COMMENT:
              this.onComment(e);
              break;
            case Z.DOCTYPE:
              this.onDoctype(e);
              break;
            case Z.START_TAG:
              this._processStartTag(e);
              break;
            case Z.END_TAG:
              this.onEndTag(e);
              break;
            case Z.EOF:
              this.onEof(e);
              break;
            case Z.WHITESPACE_CHARACTER:
              this.onWhitespaceCharacter(e);
          }
        }
        _isIntegrationPoint(e, t, n) {
          return ft(
            e,
            this.treeAdapter.getNamespaceURI(t),
            this.treeAdapter.getAttrList(t),
            n,
          );
        }
        _reconstructActiveFormattingElements() {
          const e = this.activeFormattingElements.entries.length;
          if (e) {
            const t = this.activeFormattingElements.entries.findIndex(
              (e) =>
                e.type === Ve.Marker || this.openElements.contains(e.element),
            );
            for (let n = t < 0 ? e - 1 : t - 1; n >= 0; n--) {
              const e = this.activeFormattingElements.entries[n];
              this._insertElement(
                e.token,
                this.treeAdapter.getNamespaceURI(e.element),
              ),
                (e.element = this.openElements.current);
            }
          }
        }
        _closeTableCell() {
          this.openElements.generateImpliedEndTags(),
            this.openElements.popUntilTableCellPopped(),
            this.activeFormattingElements.clearToLastMarker(),
            (this.insertionMode = mt.IN_ROW);
        }
        _closePElement() {
          this.openElements.generateImpliedEndTagsWithExclusion(_e.P),
            this.openElements.popUntilTagNamePopped(_e.P);
        }
        _resetInsertionMode() {
          for (let e = this.openElements.stackTop; e >= 0; e--)
            switch (
              0 === e && this.fragmentContext
                ? this.fragmentContextID
                : this.openElements.tagIDs[e]
            ) {
              case _e.TR:
                return void (this.insertionMode = mt.IN_ROW);
              case _e.TBODY:
              case _e.THEAD:
              case _e.TFOOT:
                return void (this.insertionMode = mt.IN_TABLE_BODY);
              case _e.CAPTION:
                return void (this.insertionMode = mt.IN_CAPTION);
              case _e.COLGROUP:
                return void (this.insertionMode = mt.IN_COLUMN_GROUP);
              case _e.TABLE:
                return void (this.insertionMode = mt.IN_TABLE);
              case _e.BODY:
                return void (this.insertionMode = mt.IN_BODY);
              case _e.FRAMESET:
                return void (this.insertionMode = mt.IN_FRAMESET);
              case _e.SELECT:
                return void this._resetInsertionModeForSelect(e);
              case _e.TEMPLATE:
                return void (this.insertionMode =
                  this.tmplInsertionModeStack[0]);
              case _e.HTML:
                return void (this.insertionMode = this.headElement
                  ? mt.AFTER_HEAD
                  : mt.BEFORE_HEAD);
              case _e.TD:
              case _e.TH:
                if (e > 0) return void (this.insertionMode = mt.IN_CELL);
                break;
              case _e.HEAD:
                if (e > 0) return void (this.insertionMode = mt.IN_HEAD);
            }
          this.insertionMode = mt.IN_BODY;
        }
        _resetInsertionModeForSelect(e) {
          if (e > 0)
            for (let t = e - 1; t > 0; t--) {
              const e = this.openElements.tagIDs[t];
              if (e === _e.TEMPLATE) break;
              if (e === _e.TABLE)
                return void (this.insertionMode = mt.IN_SELECT_IN_TABLE);
            }
          this.insertionMode = mt.IN_SELECT;
        }
        _isElementCausesFosterParenting(e) {
          return Tt.has(e);
        }
        _shouldFosterParentOnInsertion() {
          return (
            this.fosterParentingEnabled &&
            this._isElementCausesFosterParenting(this.openElements.currentTagId)
          );
        }
        _findFosterParentingLocation() {
          for (let e = this.openElements.stackTop; e >= 0; e--) {
            const t = this.openElements.items[e];
            switch (this.openElements.tagIDs[e]) {
              case _e.TEMPLATE:
                if (this.treeAdapter.getNamespaceURI(t) === me.HTML)
                  return {
                    parent: this.treeAdapter.getTemplateContent(t),
                    beforeElement: null,
                  };
                break;
              case _e.TABLE: {
                const n = this.treeAdapter.getParentNode(t);
                return n
                  ? { parent: n, beforeElement: t }
                  : {
                      parent: this.openElements.items[e - 1],
                      beforeElement: null,
                    };
              }
            }
          }
          return { parent: this.openElements.items[0], beforeElement: null };
        }
        _fosterParentElement(e) {
          const t = this._findFosterParentingLocation();
          t.beforeElement
            ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement)
            : this.treeAdapter.appendChild(t.parent, e);
        }
        _isSpecialElement(e, t) {
          const n = this.treeAdapter.getNamespaceURI(e);
          return Ie[n].has(t);
        }
        onCharacter(e) {
          if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode))
            !(function (e, t) {
              e._insertCharacters(t), (e.framesetOk = !1);
            })(this, e);
          else
            switch (this.insertionMode) {
              case mt.INITIAL:
                Rt(this, e);
                break;
              case mt.BEFORE_HTML:
                yt(this, e);
                break;
              case mt.BEFORE_HEAD:
                Lt(this, e);
                break;
              case mt.IN_HEAD:
                xt(this, e);
                break;
              case mt.IN_HEAD_NO_SCRIPT:
                vt(this, e);
                break;
              case mt.AFTER_HEAD:
                wt(this, e);
                break;
              case mt.IN_BODY:
              case mt.IN_CAPTION:
              case mt.IN_CELL:
              case mt.IN_TEMPLATE:
                Ht(this, e);
                break;
              case mt.TEXT:
              case mt.IN_SELECT:
              case mt.IN_SELECT_IN_TABLE:
                this._insertCharacters(e);
                break;
              case mt.IN_TABLE:
              case mt.IN_TABLE_BODY:
              case mt.IN_ROW:
                Qt(this, e);
                break;
              case mt.IN_TABLE_TEXT:
                Jt(this, e);
                break;
              case mt.IN_COLUMN_GROUP:
                rn(this, e);
                break;
              case mt.AFTER_BODY:
                dn(this, e);
                break;
              case mt.AFTER_AFTER_BODY:
                fn(this, e);
            }
        }
        onNullCharacter(e) {
          if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode))
            !(function (e, t) {
              (t.chars = H), e._insertCharacters(t);
            })(this, e);
          else
            switch (this.insertionMode) {
              case mt.INITIAL:
                Rt(this, e);
                break;
              case mt.BEFORE_HTML:
                yt(this, e);
                break;
              case mt.BEFORE_HEAD:
                Lt(this, e);
                break;
              case mt.IN_HEAD:
                xt(this, e);
                break;
              case mt.IN_HEAD_NO_SCRIPT:
                vt(this, e);
                break;
              case mt.AFTER_HEAD:
                wt(this, e);
                break;
              case mt.TEXT:
                this._insertCharacters(e);
                break;
              case mt.IN_TABLE:
              case mt.IN_TABLE_BODY:
              case mt.IN_ROW:
                Qt(this, e);
                break;
              case mt.IN_COLUMN_GROUP:
                rn(this, e);
                break;
              case mt.AFTER_BODY:
                dn(this, e);
                break;
              case mt.AFTER_AFTER_BODY:
                fn(this, e);
            }
        }
        onComment(e) {
          if (((this.skipNextNewLine = !1), this.currentNotInHTML)) Dt(this, e);
          else
            switch (this.insertionMode) {
              case mt.INITIAL:
              case mt.BEFORE_HTML:
              case mt.BEFORE_HEAD:
              case mt.IN_HEAD:
              case mt.IN_HEAD_NO_SCRIPT:
              case mt.AFTER_HEAD:
              case mt.IN_BODY:
              case mt.IN_TABLE:
              case mt.IN_CAPTION:
              case mt.IN_COLUMN_GROUP:
              case mt.IN_TABLE_BODY:
              case mt.IN_ROW:
              case mt.IN_CELL:
              case mt.IN_SELECT:
              case mt.IN_SELECT_IN_TABLE:
              case mt.IN_TEMPLATE:
              case mt.IN_FRAMESET:
              case mt.AFTER_FRAMESET:
                Dt(this, e);
                break;
              case mt.IN_TABLE_TEXT:
                en(this, e);
                break;
              case mt.AFTER_BODY:
                !(function (e, t) {
                  e._appendCommentNode(t, e.openElements.items[0]);
                })(this, e);
                break;
              case mt.AFTER_AFTER_BODY:
              case mt.AFTER_AFTER_FRAMESET:
                !(function (e, t) {
                  e._appendCommentNode(t, e.document);
                })(this, e);
            }
        }
        onDoctype(e) {
          switch (((this.skipNextNewLine = !1), this.insertionMode)) {
            case mt.INITIAL:
              !(function (e, t) {
                e._setDocumentType(t);
                const n = t.forceQuirks
                  ? Te.QUIRKS
                  : (function (e) {
                      if (e.name !== Ze) return Te.QUIRKS;
                      const { systemId: t } = e;
                      if (
                        t &&
                        'http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd' ===
                          t.toLowerCase()
                      )
                        return Te.QUIRKS;
                      let { publicId: n } = e;
                      if (null !== n) {
                        if (((n = n.toLowerCase()), tt.has(n)))
                          return Te.QUIRKS;
                        let e = null === t ? et : Je;
                        if (it(n, e)) return Te.QUIRKS;
                        if (((e = null === t ? nt : rt), it(n, e)))
                          return Te.LIMITED_QUIRKS;
                      }
                      return Te.NO_QUIRKS;
                    })(t);
                (function (e) {
                  return (
                    e.name === Ze &&
                    null === e.publicId &&
                    (null === e.systemId ||
                      'about:legacy-compat' === e.systemId)
                  );
                })(t) || e._err(t, $.nonConformingDoctype);
                e.treeAdapter.setDocumentMode(e.document, n),
                  (e.insertionMode = mt.BEFORE_HTML);
              })(this, e);
              break;
            case mt.BEFORE_HEAD:
            case mt.IN_HEAD:
            case mt.IN_HEAD_NO_SCRIPT:
            case mt.AFTER_HEAD:
              this._err(e, $.misplacedDoctype);
              break;
            case mt.IN_TABLE_TEXT:
              en(this, e);
          }
        }
        onStartTag(e) {
          (this.skipNextNewLine = !1),
            (this.currentToken = e),
            this._processStartTag(e),
            e.selfClosing &&
              !e.ackSelfClosing &&
              this._err(e, $.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
        _processStartTag(e) {
          this.shouldProcessStartTagTokenInForeignContent(e)
            ? (function (e, t) {
                if (
                  (function (e) {
                    const t = e.tagID;
                    return (
                      (t === _e.FONT &&
                        e.attrs.some(
                          ({ name: e }) =>
                            e === Ee.COLOR || e === Ee.SIZE || e === Ee.FACE,
                        )) ||
                      ut.has(t)
                    );
                  })(t)
                )
                  mn(e), e._startTagOutsideForeignContent(t);
                else {
                  const n = e._getAdjustedCurrentElement(),
                    r = e.treeAdapter.getNamespaceURI(n);
                  r === me.MATHML
                    ? ht(t)
                    : r === me.SVG &&
                      (!(function (e) {
                        const t = lt.get(e.tagName);
                        null != t &&
                          ((e.tagName = t), (e.tagID = Ce(e.tagName)));
                      })(t),
                      pt(t)),
                    dt(t),
                    t.selfClosing
                      ? e._appendElement(t, r)
                      : e._insertElement(t, r),
                    (t.ackSelfClosing = !0);
                }
              })(this, e)
            : this._startTagOutsideForeignContent(e);
        }
        _startTagOutsideForeignContent(e) {
          switch (this.insertionMode) {
            case mt.INITIAL:
              Rt(this, e);
              break;
            case mt.BEFORE_HTML:
              !(function (e, t) {
                t.tagID === _e.HTML
                  ? (e._insertElement(t, me.HTML),
                    (e.insertionMode = mt.BEFORE_HEAD))
                  : yt(e, t);
              })(this, e);
              break;
            case mt.BEFORE_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case _e.HTML:
                    jt(e, t);
                    break;
                  case _e.HEAD:
                    e._insertElement(t, me.HTML),
                      (e.headElement = e.openElements.current),
                      (e.insertionMode = mt.IN_HEAD);
                    break;
                  default:
                    Lt(e, t);
                }
              })(this, e);
              break;
            case mt.IN_HEAD:
              Pt(this, e);
              break;
            case mt.IN_HEAD_NO_SCRIPT:
              !(function (e, t) {
                switch (t.tagID) {
                  case _e.HTML:
                    jt(e, t);
                    break;
                  case _e.BASEFONT:
                  case _e.BGSOUND:
                  case _e.HEAD:
                  case _e.LINK:
                  case _e.META:
                  case _e.NOFRAMES:
                  case _e.STYLE:
                    Pt(e, t);
                    break;
                  case _e.NOSCRIPT:
                    e._err(t, $.nestedNoscriptInHead);
                    break;
                  default:
                    vt(e, t);
                }
              })(this, e);
              break;
            case mt.AFTER_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case _e.HTML:
                    jt(e, t);
                    break;
                  case _e.BODY:
                    e._insertElement(t, me.HTML),
                      (e.framesetOk = !1),
                      (e.insertionMode = mt.IN_BODY);
                    break;
                  case _e.FRAMESET:
                    e._insertElement(t, me.HTML),
                      (e.insertionMode = mt.IN_FRAMESET);
                    break;
                  case _e.BASE:
                  case _e.BASEFONT:
                  case _e.BGSOUND:
                  case _e.LINK:
                  case _e.META:
                  case _e.NOFRAMES:
                  case _e.SCRIPT:
                  case _e.STYLE:
                  case _e.TEMPLATE:
                  case _e.TITLE:
                    e._err(t, $.abandonedHeadElementChild),
                      e.openElements.push(e.headElement, _e.HEAD),
                      Pt(e, t),
                      e.openElements.remove(e.headElement);
                    break;
                  case _e.HEAD:
                    e._err(t, $.misplacedStartTagForHeadElement);
                    break;
                  default:
                    wt(e, t);
                }
              })(this, e);
              break;
            case mt.IN_BODY:
              jt(this, e);
              break;
            case mt.IN_TABLE:
              Xt(this, e);
              break;
            case mt.IN_TABLE_TEXT:
              en(this, e);
              break;
            case mt.IN_CAPTION:
              !(function (e, t) {
                const n = t.tagID;
                tn.has(n)
                  ? e.openElements.hasInTableScope(_e.CAPTION) &&
                    (e.openElements.generateImpliedEndTags(),
                    e.openElements.popUntilTagNamePopped(_e.CAPTION),
                    e.activeFormattingElements.clearToLastMarker(),
                    (e.insertionMode = mt.IN_TABLE),
                    Xt(e, t))
                  : jt(e, t);
              })(this, e);
              break;
            case mt.IN_COLUMN_GROUP:
              nn(this, e);
              break;
            case mt.IN_TABLE_BODY:
              sn(this, e);
              break;
            case mt.IN_ROW:
              an(this, e);
              break;
            case mt.IN_CELL:
              !(function (e, t) {
                const n = t.tagID;
                tn.has(n)
                  ? (e.openElements.hasInTableScope(_e.TD) ||
                      e.openElements.hasInTableScope(_e.TH)) &&
                    (e._closeTableCell(), an(e, t))
                  : jt(e, t);
              })(this, e);
              break;
            case mt.IN_SELECT:
              ln(this, e);
              break;
            case mt.IN_SELECT_IN_TABLE:
              !(function (e, t) {
                const n = t.tagID;
                n === _e.CAPTION ||
                n === _e.TABLE ||
                n === _e.TBODY ||
                n === _e.TFOOT ||
                n === _e.THEAD ||
                n === _e.TR ||
                n === _e.TD ||
                n === _e.TH
                  ? (e.openElements.popUntilTagNamePopped(_e.SELECT),
                    e._resetInsertionMode(),
                    e._processStartTag(t))
                  : ln(e, t);
              })(this, e);
              break;
            case mt.IN_TEMPLATE:
              !(function (e, t) {
                switch (t.tagID) {
                  case _e.BASE:
                  case _e.BASEFONT:
                  case _e.BGSOUND:
                  case _e.LINK:
                  case _e.META:
                  case _e.NOFRAMES:
                  case _e.SCRIPT:
                  case _e.STYLE:
                  case _e.TEMPLATE:
                  case _e.TITLE:
                    Pt(e, t);
                    break;
                  case _e.CAPTION:
                  case _e.COLGROUP:
                  case _e.TBODY:
                  case _e.TFOOT:
                  case _e.THEAD:
                    (e.tmplInsertionModeStack[0] = mt.IN_TABLE),
                      (e.insertionMode = mt.IN_TABLE),
                      Xt(e, t);
                    break;
                  case _e.COL:
                    (e.tmplInsertionModeStack[0] = mt.IN_COLUMN_GROUP),
                      (e.insertionMode = mt.IN_COLUMN_GROUP),
                      nn(e, t);
                    break;
                  case _e.TR:
                    (e.tmplInsertionModeStack[0] = mt.IN_TABLE_BODY),
                      (e.insertionMode = mt.IN_TABLE_BODY),
                      sn(e, t);
                    break;
                  case _e.TD:
                  case _e.TH:
                    (e.tmplInsertionModeStack[0] = mt.IN_ROW),
                      (e.insertionMode = mt.IN_ROW),
                      an(e, t);
                    break;
                  default:
                    (e.tmplInsertionModeStack[0] = mt.IN_BODY),
                      (e.insertionMode = mt.IN_BODY),
                      jt(e, t);
                }
              })(this, e);
              break;
            case mt.AFTER_BODY:
              !(function (e, t) {
                t.tagID === _e.HTML ? jt(e, t) : dn(e, t);
              })(this, e);
              break;
            case mt.IN_FRAMESET:
              !(function (e, t) {
                switch (t.tagID) {
                  case _e.HTML:
                    jt(e, t);
                    break;
                  case _e.FRAMESET:
                    e._insertElement(t, me.HTML);
                    break;
                  case _e.FRAME:
                    e._appendElement(t, me.HTML), (t.ackSelfClosing = !0);
                    break;
                  case _e.NOFRAMES:
                    Pt(e, t);
                }
              })(this, e);
              break;
            case mt.AFTER_FRAMESET:
              !(function (e, t) {
                switch (t.tagID) {
                  case _e.HTML:
                    jt(e, t);
                    break;
                  case _e.NOFRAMES:
                    Pt(e, t);
                }
              })(this, e);
              break;
            case mt.AFTER_AFTER_BODY:
              !(function (e, t) {
                t.tagID === _e.HTML ? jt(e, t) : fn(e, t);
              })(this, e);
              break;
            case mt.AFTER_AFTER_FRAMESET:
              !(function (e, t) {
                switch (t.tagID) {
                  case _e.HTML:
                    jt(e, t);
                    break;
                  case _e.NOFRAMES:
                    Pt(e, t);
                }
              })(this, e);
          }
        }
        onEndTag(e) {
          (this.skipNextNewLine = !1),
            (this.currentToken = e),
            this.currentNotInHTML
              ? (function (e, t) {
                  if (t.tagID === _e.P || t.tagID === _e.BR)
                    return mn(e), void e._endTagOutsideForeignContent(t);
                  for (let n = e.openElements.stackTop; n > 0; n--) {
                    const r = e.openElements.items[n];
                    if (e.treeAdapter.getNamespaceURI(r) === me.HTML) {
                      e._endTagOutsideForeignContent(t);
                      break;
                    }
                    const i = e.treeAdapter.getTagName(r);
                    if (i.toLowerCase() === t.tagName) {
                      (t.tagName = i), e.openElements.shortenToLength(n);
                      break;
                    }
                  }
                })(this, e)
              : this._endTagOutsideForeignContent(e);
        }
        _endTagOutsideForeignContent(e) {
          switch (this.insertionMode) {
            case mt.INITIAL:
              Rt(this, e);
              break;
            case mt.BEFORE_HTML:
              !(function (e, t) {
                const n = t.tagID;
                (n !== _e.HTML &&
                  n !== _e.HEAD &&
                  n !== _e.BODY &&
                  n !== _e.BR) ||
                  yt(e, t);
              })(this, e);
              break;
            case mt.BEFORE_HEAD:
              !(function (e, t) {
                const n = t.tagID;
                n === _e.HEAD || n === _e.BODY || n === _e.HTML || n === _e.BR
                  ? Lt(e, t)
                  : e._err(t, $.endTagWithoutMatchingOpenElement);
              })(this, e);
              break;
            case mt.IN_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case _e.HEAD:
                    e.openElements.pop(), (e.insertionMode = mt.AFTER_HEAD);
                    break;
                  case _e.BODY:
                  case _e.BR:
                  case _e.HTML:
                    xt(e, t);
                    break;
                  case _e.TEMPLATE:
                    Mt(e, t);
                    break;
                  default:
                    e._err(t, $.endTagWithoutMatchingOpenElement);
                }
              })(this, e);
              break;
            case mt.IN_HEAD_NO_SCRIPT:
              !(function (e, t) {
                switch (t.tagID) {
                  case _e.NOSCRIPT:
                    e.openElements.pop(), (e.insertionMode = mt.IN_HEAD);
                    break;
                  case _e.BR:
                    vt(e, t);
                    break;
                  default:
                    e._err(t, $.endTagWithoutMatchingOpenElement);
                }
              })(this, e);
              break;
            case mt.AFTER_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case _e.BODY:
                  case _e.HTML:
                  case _e.BR:
                    wt(e, t);
                    break;
                  case _e.TEMPLATE:
                    Mt(e, t);
                    break;
                  default:
                    e._err(t, $.endTagWithoutMatchingOpenElement);
                }
              })(this, e);
              break;
            case mt.IN_BODY:
              Wt(this, e);
              break;
            case mt.TEXT:
              !(function (e, t) {
                var n;
                t.tagID === _e.SCRIPT &&
                  (null === (n = e.scriptHandler) ||
                    void 0 === n ||
                    n.call(e, e.openElements.current));
                e.openElements.pop(),
                  (e.insertionMode = e.originalInsertionMode);
              })(this, e);
              break;
            case mt.IN_TABLE:
              $t(this, e);
              break;
            case mt.IN_TABLE_TEXT:
              en(this, e);
              break;
            case mt.IN_CAPTION:
              !(function (e, t) {
                const n = t.tagID;
                switch (n) {
                  case _e.CAPTION:
                  case _e.TABLE:
                    e.openElements.hasInTableScope(_e.CAPTION) &&
                      (e.openElements.generateImpliedEndTags(),
                      e.openElements.popUntilTagNamePopped(_e.CAPTION),
                      e.activeFormattingElements.clearToLastMarker(),
                      (e.insertionMode = mt.IN_TABLE),
                      n === _e.TABLE && $t(e, t));
                    break;
                  case _e.BODY:
                  case _e.COL:
                  case _e.COLGROUP:
                  case _e.HTML:
                  case _e.TBODY:
                  case _e.TD:
                  case _e.TFOOT:
                  case _e.TH:
                  case _e.THEAD:
                  case _e.TR:
                    break;
                  default:
                    Wt(e, t);
                }
              })(this, e);
              break;
            case mt.IN_COLUMN_GROUP:
              !(function (e, t) {
                switch (t.tagID) {
                  case _e.COLGROUP:
                    e.openElements.currentTagId === _e.COLGROUP &&
                      (e.openElements.pop(), (e.insertionMode = mt.IN_TABLE));
                    break;
                  case _e.TEMPLATE:
                    Mt(e, t);
                    break;
                  case _e.COL:
                    break;
                  default:
                    rn(e, t);
                }
              })(this, e);
              break;
            case mt.IN_TABLE_BODY:
              on(this, e);
              break;
            case mt.IN_ROW:
              cn(this, e);
              break;
            case mt.IN_CELL:
              !(function (e, t) {
                const n = t.tagID;
                switch (n) {
                  case _e.TD:
                  case _e.TH:
                    e.openElements.hasInTableScope(n) &&
                      (e.openElements.generateImpliedEndTags(),
                      e.openElements.popUntilTagNamePopped(n),
                      e.activeFormattingElements.clearToLastMarker(),
                      (e.insertionMode = mt.IN_ROW));
                    break;
                  case _e.TABLE:
                  case _e.TBODY:
                  case _e.TFOOT:
                  case _e.THEAD:
                  case _e.TR:
                    e.openElements.hasInTableScope(n) &&
                      (e._closeTableCell(), cn(e, t));
                    break;
                  case _e.BODY:
                  case _e.CAPTION:
                  case _e.COL:
                  case _e.COLGROUP:
                  case _e.HTML:
                    break;
                  default:
                    Wt(e, t);
                }
              })(this, e);
              break;
            case mt.IN_SELECT:
              un(this, e);
              break;
            case mt.IN_SELECT_IN_TABLE:
              !(function (e, t) {
                const n = t.tagID;
                n === _e.CAPTION ||
                n === _e.TABLE ||
                n === _e.TBODY ||
                n === _e.TFOOT ||
                n === _e.THEAD ||
                n === _e.TR ||
                n === _e.TD ||
                n === _e.TH
                  ? e.openElements.hasInTableScope(n) &&
                    (e.openElements.popUntilTagNamePopped(_e.SELECT),
                    e._resetInsertionMode(),
                    e.onEndTag(t))
                  : un(e, t);
              })(this, e);
              break;
            case mt.IN_TEMPLATE:
              !(function (e, t) {
                t.tagID === _e.TEMPLATE && Mt(e, t);
              })(this, e);
              break;
            case mt.AFTER_BODY:
              pn(this, e);
              break;
            case mt.IN_FRAMESET:
              !(function (e, t) {
                t.tagID !== _e.FRAMESET ||
                  e.openElements.isRootHtmlElementCurrent() ||
                  (e.openElements.pop(),
                  e.fragmentContext ||
                    e.openElements.currentTagId === _e.FRAMESET ||
                    (e.insertionMode = mt.AFTER_FRAMESET));
              })(this, e);
              break;
            case mt.AFTER_FRAMESET:
              !(function (e, t) {
                t.tagID === _e.HTML &&
                  (e.insertionMode = mt.AFTER_AFTER_FRAMESET);
              })(this, e);
              break;
            case mt.AFTER_AFTER_BODY:
              fn(this, e);
          }
        }
        onEof(e) {
          switch (this.insertionMode) {
            case mt.INITIAL:
              Rt(this, e);
              break;
            case mt.BEFORE_HTML:
              yt(this, e);
              break;
            case mt.BEFORE_HEAD:
              Lt(this, e);
              break;
            case mt.IN_HEAD:
              xt(this, e);
              break;
            case mt.IN_HEAD_NO_SCRIPT:
              vt(this, e);
              break;
            case mt.AFTER_HEAD:
              wt(this, e);
              break;
            case mt.IN_BODY:
            case mt.IN_TABLE:
            case mt.IN_CAPTION:
            case mt.IN_COLUMN_GROUP:
            case mt.IN_TABLE_BODY:
            case mt.IN_ROW:
            case mt.IN_CELL:
            case mt.IN_SELECT:
            case mt.IN_SELECT_IN_TABLE:
              Vt(this, e);
              break;
            case mt.TEXT:
              !(function (e, t) {
                e._err(t, $.eofInElementThatCanContainOnlyText),
                  e.openElements.pop(),
                  (e.insertionMode = e.originalInsertionMode),
                  e.onEof(t);
              })(this, e);
              break;
            case mt.IN_TABLE_TEXT:
              en(this, e);
              break;
            case mt.IN_TEMPLATE:
              hn(this, e);
              break;
            case mt.AFTER_BODY:
            case mt.IN_FRAMESET:
            case mt.AFTER_FRAMESET:
            case mt.AFTER_AFTER_BODY:
            case mt.AFTER_AFTER_FRAMESET:
              Ot(this, e);
          }
        }
        onWhitespaceCharacter(e) {
          if (
            this.skipNextNewLine &&
            ((this.skipNextNewLine = !1), e.chars.charCodeAt(0) === U.LINE_FEED)
          ) {
            if (1 === e.chars.length) return;
            e.chars = e.chars.substr(1);
          }
          if (this.tokenizer.inForeignNode) this._insertCharacters(e);
          else
            switch (this.insertionMode) {
              case mt.IN_HEAD:
              case mt.IN_HEAD_NO_SCRIPT:
              case mt.AFTER_HEAD:
              case mt.TEXT:
              case mt.IN_COLUMN_GROUP:
              case mt.IN_SELECT:
              case mt.IN_SELECT_IN_TABLE:
              case mt.IN_FRAMESET:
              case mt.AFTER_FRAMESET:
                this._insertCharacters(e);
                break;
              case mt.IN_BODY:
              case mt.IN_CAPTION:
              case mt.IN_CELL:
              case mt.IN_TEMPLATE:
              case mt.AFTER_BODY:
              case mt.AFTER_AFTER_BODY:
              case mt.AFTER_AFTER_FRAMESET:
                Ft(this, e);
                break;
              case mt.IN_TABLE:
              case mt.IN_TABLE_BODY:
              case mt.IN_ROW:
                Qt(this, e);
                break;
              case mt.IN_TABLE_TEXT:
                Zt(this, e);
            }
        }
      }
      function gt(e, t) {
        let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(
          t.tagName,
        );
        return (
          n
            ? e.openElements.contains(n.element)
              ? e.openElements.hasInScope(t.tagID) || (n = null)
              : (e.activeFormattingElements.removeEntry(n), (n = null))
            : qt(e, t),
          n
        );
      }
      function Ct(e, t) {
        let n = null,
          r = e.openElements.stackTop;
        for (; r >= 0; r--) {
          const i = e.openElements.items[r];
          if (i === t.element) break;
          e._isSpecialElement(i, e.openElements.tagIDs[r]) && (n = i);
        }
        return (
          n ||
            (e.openElements.shortenToLength(r < 0 ? 0 : r),
            e.activeFormattingElements.removeEntry(t)),
          n
        );
      }
      function St(e, t, n) {
        let r = t,
          i = e.openElements.getCommonAncestor(t);
        for (let s = 0, o = i; o !== n; s++, o = i) {
          i = e.openElements.getCommonAncestor(o);
          const n = e.activeFormattingElements.getElementEntry(o),
            a = n && s >= 3;
          !n || a
            ? (a && e.activeFormattingElements.removeEntry(n),
              e.openElements.remove(o))
            : ((o = It(e, n)),
              r === t && (e.activeFormattingElements.bookmark = n),
              e.treeAdapter.detachNode(r),
              e.treeAdapter.appendChild(o, r),
              (r = o));
        }
        return r;
      }
      function It(e, t) {
        const n = e.treeAdapter.getNamespaceURI(t.element),
          r = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
        return e.openElements.replace(t.element, r), (t.element = r), r;
      }
      function Nt(e, t, n) {
        const r = Ce(e.treeAdapter.getTagName(t));
        if (e._isElementCausesFosterParenting(r)) e._fosterParentElement(n);
        else {
          const i = e.treeAdapter.getNamespaceURI(t);
          r === _e.TEMPLATE &&
            i === me.HTML &&
            (t = e.treeAdapter.getTemplateContent(t)),
            e.treeAdapter.appendChild(t, n);
        }
      }
      function kt(e, t, n) {
        const r = e.treeAdapter.getNamespaceURI(n.element),
          { token: i } = n,
          s = e.treeAdapter.createElement(i.tagName, r, i.attrs);
        e._adoptNodes(t, s),
          e.treeAdapter.appendChild(t, s),
          e.activeFormattingElements.insertElementAfterBookmark(s, i),
          e.activeFormattingElements.removeEntry(n),
          e.openElements.remove(n.element),
          e.openElements.insertAfter(t, s, i.tagID);
      }
      function bt(e, t) {
        for (let n = 0; n < 8; n++) {
          const n = gt(e, t);
          if (!n) break;
          const r = Ct(e, n);
          if (!r) break;
          e.activeFormattingElements.bookmark = n;
          const i = St(e, r, n.element),
            s = e.openElements.getCommonAncestor(n.element);
          e.treeAdapter.detachNode(i), s && Nt(e, s, i), kt(e, r, n);
        }
      }
      function Dt(e, t) {
        e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
      }
      function Ot(e, t) {
        if (((e.stopped = !0), t.location)) {
          const n = e.fragmentContext ? 0 : 2;
          for (let r = e.openElements.stackTop; r >= n; r--)
            e._setEndLocation(e.openElements.items[r], t);
          if (!e.fragmentContext && e.openElements.stackTop >= 0) {
            const n = e.openElements.items[0],
              r = e.treeAdapter.getNodeSourceCodeLocation(n);
            if (
              r &&
              !r.endTag &&
              (e._setEndLocation(n, t), e.openElements.stackTop >= 1)
            ) {
              const n = e.openElements.items[1],
                r = e.treeAdapter.getNodeSourceCodeLocation(n);
              r && !r.endTag && e._setEndLocation(n, t);
            }
          }
        }
      }
      function Rt(e, t) {
        e._err(t, $.missingDoctype, !0),
          e.treeAdapter.setDocumentMode(e.document, Te.QUIRKS),
          (e.insertionMode = mt.BEFORE_HTML),
          e._processToken(t);
      }
      function yt(e, t) {
        e._insertFakeRootElement(),
          (e.insertionMode = mt.BEFORE_HEAD),
          e._processToken(t);
      }
      function Lt(e, t) {
        e._insertFakeElement(Ae.HEAD, _e.HEAD),
          (e.headElement = e.openElements.current),
          (e.insertionMode = mt.IN_HEAD),
          e._processToken(t);
      }
      function Pt(e, t) {
        switch (t.tagID) {
          case _e.HTML:
            jt(e, t);
            break;
          case _e.BASE:
          case _e.BASEFONT:
          case _e.BGSOUND:
          case _e.LINK:
          case _e.META:
            e._appendElement(t, me.HTML), (t.ackSelfClosing = !0);
            break;
          case _e.TITLE:
            e._switchToTextParsing(t, De.RCDATA);
            break;
          case _e.NOSCRIPT:
            e.options.scriptingEnabled
              ? e._switchToTextParsing(t, De.RAWTEXT)
              : (e._insertElement(t, me.HTML),
                (e.insertionMode = mt.IN_HEAD_NO_SCRIPT));
            break;
          case _e.NOFRAMES:
          case _e.STYLE:
            e._switchToTextParsing(t, De.RAWTEXT);
            break;
          case _e.SCRIPT:
            e._switchToTextParsing(t, De.SCRIPT_DATA);
            break;
          case _e.TEMPLATE:
            e._insertTemplate(t),
              e.activeFormattingElements.insertMarker(),
              (e.framesetOk = !1),
              (e.insertionMode = mt.IN_TEMPLATE),
              e.tmplInsertionModeStack.unshift(mt.IN_TEMPLATE);
            break;
          case _e.HEAD:
            e._err(t, $.misplacedStartTagForHeadElement);
            break;
          default:
            xt(e, t);
        }
      }
      function Mt(e, t) {
        e.openElements.tmplCount > 0
          ? (e.openElements.generateImpliedEndTagsThoroughly(),
            e.openElements.currentTagId !== _e.TEMPLATE &&
              e._err(t, $.closingOfElementWithOpenChildElements),
            e.openElements.popUntilTagNamePopped(_e.TEMPLATE),
            e.activeFormattingElements.clearToLastMarker(),
            e.tmplInsertionModeStack.shift(),
            e._resetInsertionMode())
          : e._err(t, $.endTagWithoutMatchingOpenElement);
      }
      function xt(e, t) {
        e.openElements.pop(),
          (e.insertionMode = mt.AFTER_HEAD),
          e._processToken(t);
      }
      function vt(e, t) {
        const n =
          t.type === Z.EOF
            ? $.openElementsLeftAfterEof
            : $.disallowedContentInNoscriptInHead;
        e._err(t, n),
          e.openElements.pop(),
          (e.insertionMode = mt.IN_HEAD),
          e._processToken(t);
      }
      function wt(e, t) {
        e._insertFakeElement(Ae.BODY, _e.BODY),
          (e.insertionMode = mt.IN_BODY),
          Bt(e, t);
      }
      function Bt(e, t) {
        switch (t.type) {
          case Z.CHARACTER:
            Ht(e, t);
            break;
          case Z.WHITESPACE_CHARACTER:
            Ft(e, t);
            break;
          case Z.COMMENT:
            Dt(e, t);
            break;
          case Z.START_TAG:
            jt(e, t);
            break;
          case Z.END_TAG:
            Wt(e, t);
            break;
          case Z.EOF:
            Vt(e, t);
        }
      }
      function Ft(e, t) {
        e._reconstructActiveFormattingElements(), e._insertCharacters(t);
      }
      function Ht(e, t) {
        e._reconstructActiveFormattingElements(),
          e._insertCharacters(t),
          (e.framesetOk = !1);
      }
      function Ut(e, t) {
        e._reconstructActiveFormattingElements(),
          e._appendElement(t, me.HTML),
          (e.framesetOk = !1),
          (t.ackSelfClosing = !0);
      }
      function Gt(e) {
        const t = J(e, Ee.TYPE);
        return null != t && 'hidden' === t.toLowerCase();
      }
      function zt(e, t) {
        e._switchToTextParsing(t, De.RAWTEXT);
      }
      function Yt(e, t) {
        e._reconstructActiveFormattingElements(), e._insertElement(t, me.HTML);
      }
      function jt(e, t) {
        switch (t.tagID) {
          case _e.I:
          case _e.S:
          case _e.B:
          case _e.U:
          case _e.EM:
          case _e.TT:
          case _e.BIG:
          case _e.CODE:
          case _e.FONT:
          case _e.SMALL:
          case _e.STRIKE:
          case _e.STRONG:
            !(function (e, t) {
              e._reconstructActiveFormattingElements(),
                e._insertElement(t, me.HTML),
                e.activeFormattingElements.pushElement(
                  e.openElements.current,
                  t,
                );
            })(e, t);
            break;
          case _e.A:
            !(function (e, t) {
              const n =
                e.activeFormattingElements.getElementEntryInScopeWithTagName(
                  Ae.A,
                );
              n &&
                (bt(e, t),
                e.openElements.remove(n.element),
                e.activeFormattingElements.removeEntry(n)),
                e._reconstructActiveFormattingElements(),
                e._insertElement(t, me.HTML),
                e.activeFormattingElements.pushElement(
                  e.openElements.current,
                  t,
                );
            })(e, t);
            break;
          case _e.H1:
          case _e.H2:
          case _e.H3:
          case _e.H4:
          case _e.H5:
          case _e.H6:
            !(function (e, t) {
              e.openElements.hasInButtonScope(_e.P) && e._closePElement(),
                Ne(e.openElements.currentTagId) && e.openElements.pop(),
                e._insertElement(t, me.HTML);
            })(e, t);
            break;
          case _e.P:
          case _e.DL:
          case _e.OL:
          case _e.UL:
          case _e.DIV:
          case _e.DIR:
          case _e.NAV:
          case _e.MAIN:
          case _e.MENU:
          case _e.ASIDE:
          case _e.CENTER:
          case _e.FIGURE:
          case _e.FOOTER:
          case _e.HEADER:
          case _e.HGROUP:
          case _e.DIALOG:
          case _e.DETAILS:
          case _e.ADDRESS:
          case _e.ARTICLE:
          case _e.SECTION:
          case _e.SUMMARY:
          case _e.FIELDSET:
          case _e.BLOCKQUOTE:
          case _e.FIGCAPTION:
            !(function (e, t) {
              e.openElements.hasInButtonScope(_e.P) && e._closePElement(),
                e._insertElement(t, me.HTML);
            })(e, t);
            break;
          case _e.LI:
          case _e.DD:
          case _e.DT:
            !(function (e, t) {
              e.framesetOk = !1;
              const n = t.tagID;
              for (let t = e.openElements.stackTop; t >= 0; t--) {
                const r = e.openElements.tagIDs[t];
                if (
                  (n === _e.LI && r === _e.LI) ||
                  ((n === _e.DD || n === _e.DT) && (r === _e.DD || r === _e.DT))
                ) {
                  e.openElements.generateImpliedEndTagsWithExclusion(r),
                    e.openElements.popUntilTagNamePopped(r);
                  break;
                }
                if (
                  r !== _e.ADDRESS &&
                  r !== _e.DIV &&
                  r !== _e.P &&
                  e._isSpecialElement(e.openElements.items[t], r)
                )
                  break;
              }
              e.openElements.hasInButtonScope(_e.P) && e._closePElement(),
                e._insertElement(t, me.HTML);
            })(e, t);
            break;
          case _e.BR:
          case _e.IMG:
          case _e.WBR:
          case _e.AREA:
          case _e.EMBED:
          case _e.KEYGEN:
            Ut(e, t);
            break;
          case _e.HR:
            !(function (e, t) {
              e.openElements.hasInButtonScope(_e.P) && e._closePElement(),
                e._appendElement(t, me.HTML),
                (e.framesetOk = !1),
                (t.ackSelfClosing = !0);
            })(e, t);
            break;
          case _e.RB:
          case _e.RTC:
            !(function (e, t) {
              e.openElements.hasInScope(_e.RUBY) &&
                e.openElements.generateImpliedEndTags(),
                e._insertElement(t, me.HTML);
            })(e, t);
            break;
          case _e.RT:
          case _e.RP:
            !(function (e, t) {
              e.openElements.hasInScope(_e.RUBY) &&
                e.openElements.generateImpliedEndTagsWithExclusion(_e.RTC),
                e._insertElement(t, me.HTML);
            })(e, t);
            break;
          case _e.PRE:
          case _e.LISTING:
            !(function (e, t) {
              e.openElements.hasInButtonScope(_e.P) && e._closePElement(),
                e._insertElement(t, me.HTML),
                (e.skipNextNewLine = !0),
                (e.framesetOk = !1);
            })(e, t);
            break;
          case _e.XMP:
            !(function (e, t) {
              e.openElements.hasInButtonScope(_e.P) && e._closePElement(),
                e._reconstructActiveFormattingElements(),
                (e.framesetOk = !1),
                e._switchToTextParsing(t, De.RAWTEXT);
            })(e, t);
            break;
          case _e.SVG:
            !(function (e, t) {
              e._reconstructActiveFormattingElements(),
                pt(t),
                dt(t),
                t.selfClosing
                  ? e._appendElement(t, me.SVG)
                  : e._insertElement(t, me.SVG),
                (t.ackSelfClosing = !0);
            })(e, t);
            break;
          case _e.HTML:
            !(function (e, t) {
              0 === e.openElements.tmplCount &&
                e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
            })(e, t);
            break;
          case _e.BASE:
          case _e.LINK:
          case _e.META:
          case _e.STYLE:
          case _e.TITLE:
          case _e.SCRIPT:
          case _e.BGSOUND:
          case _e.BASEFONT:
          case _e.TEMPLATE:
            Pt(e, t);
            break;
          case _e.BODY:
            !(function (e, t) {
              const n = e.openElements.tryPeekProperlyNestedBodyElement();
              n &&
                0 === e.openElements.tmplCount &&
                ((e.framesetOk = !1),
                e.treeAdapter.adoptAttributes(n, t.attrs));
            })(e, t);
            break;
          case _e.FORM:
            !(function (e, t) {
              const n = e.openElements.tmplCount > 0;
              (e.formElement && !n) ||
                (e.openElements.hasInButtonScope(_e.P) && e._closePElement(),
                e._insertElement(t, me.HTML),
                n || (e.formElement = e.openElements.current));
            })(e, t);
            break;
          case _e.NOBR:
            !(function (e, t) {
              e._reconstructActiveFormattingElements(),
                e.openElements.hasInScope(_e.NOBR) &&
                  (bt(e, t), e._reconstructActiveFormattingElements()),
                e._insertElement(t, me.HTML),
                e.activeFormattingElements.pushElement(
                  e.openElements.current,
                  t,
                );
            })(e, t);
            break;
          case _e.MATH:
            !(function (e, t) {
              e._reconstructActiveFormattingElements(),
                ht(t),
                dt(t),
                t.selfClosing
                  ? e._appendElement(t, me.MATHML)
                  : e._insertElement(t, me.MATHML),
                (t.ackSelfClosing = !0);
            })(e, t);
            break;
          case _e.TABLE:
            !(function (e, t) {
              e.treeAdapter.getDocumentMode(e.document) !== Te.QUIRKS &&
                e.openElements.hasInButtonScope(_e.P) &&
                e._closePElement(),
                e._insertElement(t, me.HTML),
                (e.framesetOk = !1),
                (e.insertionMode = mt.IN_TABLE);
            })(e, t);
            break;
          case _e.INPUT:
            !(function (e, t) {
              e._reconstructActiveFormattingElements(),
                e._appendElement(t, me.HTML),
                Gt(t) || (e.framesetOk = !1),
                (t.ackSelfClosing = !0);
            })(e, t);
            break;
          case _e.PARAM:
          case _e.TRACK:
          case _e.SOURCE:
            !(function (e, t) {
              e._appendElement(t, me.HTML), (t.ackSelfClosing = !0);
            })(e, t);
            break;
          case _e.IMAGE:
            !(function (e, t) {
              (t.tagName = Ae.IMG), (t.tagID = _e.IMG), Ut(e, t);
            })(e, t);
            break;
          case _e.BUTTON:
            !(function (e, t) {
              e.openElements.hasInScope(_e.BUTTON) &&
                (e.openElements.generateImpliedEndTags(),
                e.openElements.popUntilTagNamePopped(_e.BUTTON)),
                e._reconstructActiveFormattingElements(),
                e._insertElement(t, me.HTML),
                (e.framesetOk = !1);
            })(e, t);
            break;
          case _e.APPLET:
          case _e.OBJECT:
          case _e.MARQUEE:
            !(function (e, t) {
              e._reconstructActiveFormattingElements(),
                e._insertElement(t, me.HTML),
                e.activeFormattingElements.insertMarker(),
                (e.framesetOk = !1);
            })(e, t);
            break;
          case _e.IFRAME:
            !(function (e, t) {
              (e.framesetOk = !1), e._switchToTextParsing(t, De.RAWTEXT);
            })(e, t);
            break;
          case _e.SELECT:
            !(function (e, t) {
              e._reconstructActiveFormattingElements(),
                e._insertElement(t, me.HTML),
                (e.framesetOk = !1),
                (e.insertionMode =
                  e.insertionMode === mt.IN_TABLE ||
                  e.insertionMode === mt.IN_CAPTION ||
                  e.insertionMode === mt.IN_TABLE_BODY ||
                  e.insertionMode === mt.IN_ROW ||
                  e.insertionMode === mt.IN_CELL
                    ? mt.IN_SELECT_IN_TABLE
                    : mt.IN_SELECT);
            })(e, t);
            break;
          case _e.OPTION:
          case _e.OPTGROUP:
            !(function (e, t) {
              e.openElements.currentTagId === _e.OPTION && e.openElements.pop(),
                e._reconstructActiveFormattingElements(),
                e._insertElement(t, me.HTML);
            })(e, t);
            break;
          case _e.NOEMBED:
            zt(e, t);
            break;
          case _e.FRAMESET:
            !(function (e, t) {
              const n = e.openElements.tryPeekProperlyNestedBodyElement();
              e.framesetOk &&
                n &&
                (e.treeAdapter.detachNode(n),
                e.openElements.popAllUpToHtmlElement(),
                e._insertElement(t, me.HTML),
                (e.insertionMode = mt.IN_FRAMESET));
            })(e, t);
            break;
          case _e.TEXTAREA:
            !(function (e, t) {
              e._insertElement(t, me.HTML),
                (e.skipNextNewLine = !0),
                (e.tokenizer.state = De.RCDATA),
                (e.originalInsertionMode = e.insertionMode),
                (e.framesetOk = !1),
                (e.insertionMode = mt.TEXT);
            })(e, t);
            break;
          case _e.NOSCRIPT:
            e.options.scriptingEnabled ? zt(e, t) : Yt(e, t);
            break;
          case _e.PLAINTEXT:
            !(function (e, t) {
              e.openElements.hasInButtonScope(_e.P) && e._closePElement(),
                e._insertElement(t, me.HTML),
                (e.tokenizer.state = De.PLAINTEXT);
            })(e, t);
            break;
          case _e.COL:
          case _e.TH:
          case _e.TD:
          case _e.TR:
          case _e.HEAD:
          case _e.FRAME:
          case _e.TBODY:
          case _e.TFOOT:
          case _e.THEAD:
          case _e.CAPTION:
          case _e.COLGROUP:
            break;
          default:
            Yt(e, t);
        }
      }
      function qt(e, t) {
        const n = t.tagName,
          r = t.tagID;
        for (let t = e.openElements.stackTop; t > 0; t--) {
          const i = e.openElements.items[t],
            s = e.openElements.tagIDs[t];
          if (
            r === s &&
            (r !== _e.UNKNOWN || e.treeAdapter.getTagName(i) === n)
          ) {
            e.openElements.generateImpliedEndTagsWithExclusion(r),
              e.openElements.stackTop >= t && e.openElements.shortenToLength(t);
            break;
          }
          if (e._isSpecialElement(i, s)) break;
        }
      }
      function Wt(e, t) {
        switch (t.tagID) {
          case _e.A:
          case _e.B:
          case _e.I:
          case _e.S:
          case _e.U:
          case _e.EM:
          case _e.TT:
          case _e.BIG:
          case _e.CODE:
          case _e.FONT:
          case _e.NOBR:
          case _e.SMALL:
          case _e.STRIKE:
          case _e.STRONG:
            bt(e, t);
            break;
          case _e.P:
            !(function (e) {
              e.openElements.hasInButtonScope(_e.P) ||
                e._insertFakeElement(Ae.P, _e.P),
                e._closePElement();
            })(e);
            break;
          case _e.DL:
          case _e.UL:
          case _e.OL:
          case _e.DIR:
          case _e.DIV:
          case _e.NAV:
          case _e.PRE:
          case _e.MAIN:
          case _e.MENU:
          case _e.ASIDE:
          case _e.BUTTON:
          case _e.CENTER:
          case _e.FIGURE:
          case _e.FOOTER:
          case _e.HEADER:
          case _e.HGROUP:
          case _e.DIALOG:
          case _e.ADDRESS:
          case _e.ARTICLE:
          case _e.DETAILS:
          case _e.SECTION:
          case _e.SUMMARY:
          case _e.LISTING:
          case _e.FIELDSET:
          case _e.BLOCKQUOTE:
          case _e.FIGCAPTION:
            !(function (e, t) {
              const n = t.tagID;
              e.openElements.hasInScope(n) &&
                (e.openElements.generateImpliedEndTags(),
                e.openElements.popUntilTagNamePopped(n));
            })(e, t);
            break;
          case _e.LI:
            !(function (e) {
              e.openElements.hasInListItemScope(_e.LI) &&
                (e.openElements.generateImpliedEndTagsWithExclusion(_e.LI),
                e.openElements.popUntilTagNamePopped(_e.LI));
            })(e);
            break;
          case _e.DD:
          case _e.DT:
            !(function (e, t) {
              const n = t.tagID;
              e.openElements.hasInScope(n) &&
                (e.openElements.generateImpliedEndTagsWithExclusion(n),
                e.openElements.popUntilTagNamePopped(n));
            })(e, t);
            break;
          case _e.H1:
          case _e.H2:
          case _e.H3:
          case _e.H4:
          case _e.H5:
          case _e.H6:
            !(function (e) {
              e.openElements.hasNumberedHeaderInScope() &&
                (e.openElements.generateImpliedEndTags(),
                e.openElements.popUntilNumberedHeaderPopped());
            })(e);
            break;
          case _e.BR:
            !(function (e) {
              e._reconstructActiveFormattingElements(),
                e._insertFakeElement(Ae.BR, _e.BR),
                e.openElements.pop(),
                (e.framesetOk = !1);
            })(e);
            break;
          case _e.BODY:
            !(function (e, t) {
              if (
                e.openElements.hasInScope(_e.BODY) &&
                ((e.insertionMode = mt.AFTER_BODY),
                e.options.sourceCodeLocationInfo)
              ) {
                const n = e.openElements.tryPeekProperlyNestedBodyElement();
                n && e._setEndLocation(n, t);
              }
            })(e, t);
            break;
          case _e.HTML:
            !(function (e, t) {
              e.openElements.hasInScope(_e.BODY) &&
                ((e.insertionMode = mt.AFTER_BODY), pn(e, t));
            })(e, t);
            break;
          case _e.FORM:
            !(function (e) {
              const t = e.openElements.tmplCount > 0,
                { formElement: n } = e;
              t || (e.formElement = null),
                (n || t) &&
                  e.openElements.hasInScope(_e.FORM) &&
                  (e.openElements.generateImpliedEndTags(),
                  t
                    ? e.openElements.popUntilTagNamePopped(_e.FORM)
                    : n && e.openElements.remove(n));
            })(e);
            break;
          case _e.APPLET:
          case _e.OBJECT:
          case _e.MARQUEE:
            !(function (e, t) {
              const n = t.tagID;
              e.openElements.hasInScope(n) &&
                (e.openElements.generateImpliedEndTags(),
                e.openElements.popUntilTagNamePopped(n),
                e.activeFormattingElements.clearToLastMarker());
            })(e, t);
            break;
          case _e.TEMPLATE:
            Mt(e, t);
            break;
          default:
            qt(e, t);
        }
      }
      function Vt(e, t) {
        e.tmplInsertionModeStack.length > 0 ? hn(e, t) : Ot(e, t);
      }
      function Qt(e, t) {
        if (Tt.has(e.openElements.currentTagId))
          switch (
            ((e.pendingCharacterTokens.length = 0),
            (e.hasNonWhitespacePendingCharacterToken = !1),
            (e.originalInsertionMode = e.insertionMode),
            (e.insertionMode = mt.IN_TABLE_TEXT),
            t.type)
          ) {
            case Z.CHARACTER:
              Jt(e, t);
              break;
            case Z.WHITESPACE_CHARACTER:
              Zt(e, t);
          }
        else Kt(e, t);
      }
      function Xt(e, t) {
        switch (t.tagID) {
          case _e.TD:
          case _e.TH:
          case _e.TR:
            !(function (e, t) {
              e.openElements.clearBackToTableContext(),
                e._insertFakeElement(Ae.TBODY, _e.TBODY),
                (e.insertionMode = mt.IN_TABLE_BODY),
                sn(e, t);
            })(e, t);
            break;
          case _e.STYLE:
          case _e.SCRIPT:
          case _e.TEMPLATE:
            Pt(e, t);
            break;
          case _e.COL:
            !(function (e, t) {
              e.openElements.clearBackToTableContext(),
                e._insertFakeElement(Ae.COLGROUP, _e.COLGROUP),
                (e.insertionMode = mt.IN_COLUMN_GROUP),
                nn(e, t);
            })(e, t);
            break;
          case _e.FORM:
            !(function (e, t) {
              e.formElement ||
                0 !== e.openElements.tmplCount ||
                (e._insertElement(t, me.HTML),
                (e.formElement = e.openElements.current),
                e.openElements.pop());
            })(e, t);
            break;
          case _e.TABLE:
            !(function (e, t) {
              e.openElements.hasInTableScope(_e.TABLE) &&
                (e.openElements.popUntilTagNamePopped(_e.TABLE),
                e._resetInsertionMode(),
                e._processStartTag(t));
            })(e, t);
            break;
          case _e.TBODY:
          case _e.TFOOT:
          case _e.THEAD:
            !(function (e, t) {
              e.openElements.clearBackToTableContext(),
                e._insertElement(t, me.HTML),
                (e.insertionMode = mt.IN_TABLE_BODY);
            })(e, t);
            break;
          case _e.INPUT:
            !(function (e, t) {
              Gt(t) ? e._appendElement(t, me.HTML) : Kt(e, t),
                (t.ackSelfClosing = !0);
            })(e, t);
            break;
          case _e.CAPTION:
            !(function (e, t) {
              e.openElements.clearBackToTableContext(),
                e.activeFormattingElements.insertMarker(),
                e._insertElement(t, me.HTML),
                (e.insertionMode = mt.IN_CAPTION);
            })(e, t);
            break;
          case _e.COLGROUP:
            !(function (e, t) {
              e.openElements.clearBackToTableContext(),
                e._insertElement(t, me.HTML),
                (e.insertionMode = mt.IN_COLUMN_GROUP);
            })(e, t);
            break;
          default:
            Kt(e, t);
        }
      }
      function $t(e, t) {
        switch (t.tagID) {
          case _e.TABLE:
            e.openElements.hasInTableScope(_e.TABLE) &&
              (e.openElements.popUntilTagNamePopped(_e.TABLE),
              e._resetInsertionMode());
            break;
          case _e.TEMPLATE:
            Mt(e, t);
            break;
          case _e.BODY:
          case _e.CAPTION:
          case _e.COL:
          case _e.COLGROUP:
          case _e.HTML:
          case _e.TBODY:
          case _e.TD:
          case _e.TFOOT:
          case _e.TH:
          case _e.THEAD:
          case _e.TR:
            break;
          default:
            Kt(e, t);
        }
      }
      function Kt(e, t) {
        const n = e.fosterParentingEnabled;
        (e.fosterParentingEnabled = !0),
          Bt(e, t),
          (e.fosterParentingEnabled = n);
      }
      function Zt(e, t) {
        e.pendingCharacterTokens.push(t);
      }
      function Jt(e, t) {
        e.pendingCharacterTokens.push(t),
          (e.hasNonWhitespacePendingCharacterToken = !0);
      }
      function en(e, t) {
        let n = 0;
        if (e.hasNonWhitespacePendingCharacterToken)
          for (; n < e.pendingCharacterTokens.length; n++)
            Kt(e, e.pendingCharacterTokens[n]);
        else
          for (; n < e.pendingCharacterTokens.length; n++)
            e._insertCharacters(e.pendingCharacterTokens[n]);
        (e.insertionMode = e.originalInsertionMode), e._processToken(t);
      }
      const tn = new Set([
        _e.CAPTION,
        _e.COL,
        _e.COLGROUP,
        _e.TBODY,
        _e.TD,
        _e.TFOOT,
        _e.TH,
        _e.THEAD,
        _e.TR,
      ]);
      function nn(e, t) {
        switch (t.tagID) {
          case _e.HTML:
            jt(e, t);
            break;
          case _e.COL:
            e._appendElement(t, me.HTML), (t.ackSelfClosing = !0);
            break;
          case _e.TEMPLATE:
            Pt(e, t);
            break;
          default:
            rn(e, t);
        }
      }
      function rn(e, t) {
        e.openElements.currentTagId === _e.COLGROUP &&
          (e.openElements.pop(),
          (e.insertionMode = mt.IN_TABLE),
          e._processToken(t));
      }
      function sn(e, t) {
        switch (t.tagID) {
          case _e.TR:
            e.openElements.clearBackToTableBodyContext(),
              e._insertElement(t, me.HTML),
              (e.insertionMode = mt.IN_ROW);
            break;
          case _e.TH:
          case _e.TD:
            e.openElements.clearBackToTableBodyContext(),
              e._insertFakeElement(Ae.TR, _e.TR),
              (e.insertionMode = mt.IN_ROW),
              an(e, t);
            break;
          case _e.CAPTION:
          case _e.COL:
          case _e.COLGROUP:
          case _e.TBODY:
          case _e.TFOOT:
          case _e.THEAD:
            e.openElements.hasTableBodyContextInTableScope() &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = mt.IN_TABLE),
              Xt(e, t));
            break;
          default:
            Xt(e, t);
        }
      }
      function on(e, t) {
        const n = t.tagID;
        switch (t.tagID) {
          case _e.TBODY:
          case _e.TFOOT:
          case _e.THEAD:
            e.openElements.hasInTableScope(n) &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = mt.IN_TABLE));
            break;
          case _e.TABLE:
            e.openElements.hasTableBodyContextInTableScope() &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = mt.IN_TABLE),
              $t(e, t));
            break;
          case _e.BODY:
          case _e.CAPTION:
          case _e.COL:
          case _e.COLGROUP:
          case _e.HTML:
          case _e.TD:
          case _e.TH:
          case _e.TR:
            break;
          default:
            $t(e, t);
        }
      }
      function an(e, t) {
        switch (t.tagID) {
          case _e.TH:
          case _e.TD:
            e.openElements.clearBackToTableRowContext(),
              e._insertElement(t, me.HTML),
              (e.insertionMode = mt.IN_CELL),
              e.activeFormattingElements.insertMarker();
            break;
          case _e.CAPTION:
          case _e.COL:
          case _e.COLGROUP:
          case _e.TBODY:
          case _e.TFOOT:
          case _e.THEAD:
          case _e.TR:
            e.openElements.hasInTableScope(_e.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = mt.IN_TABLE_BODY),
              sn(e, t));
            break;
          default:
            Xt(e, t);
        }
      }
      function cn(e, t) {
        switch (t.tagID) {
          case _e.TR:
            e.openElements.hasInTableScope(_e.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = mt.IN_TABLE_BODY));
            break;
          case _e.TABLE:
            e.openElements.hasInTableScope(_e.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = mt.IN_TABLE_BODY),
              on(e, t));
            break;
          case _e.TBODY:
          case _e.TFOOT:
          case _e.THEAD:
            (e.openElements.hasInTableScope(t.tagID) ||
              e.openElements.hasInTableScope(_e.TR)) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = mt.IN_TABLE_BODY),
              on(e, t));
            break;
          case _e.BODY:
          case _e.CAPTION:
          case _e.COL:
          case _e.COLGROUP:
          case _e.HTML:
          case _e.TD:
          case _e.TH:
            break;
          default:
            $t(e, t);
        }
      }
      function ln(e, t) {
        switch (t.tagID) {
          case _e.HTML:
            jt(e, t);
            break;
          case _e.OPTION:
            e.openElements.currentTagId === _e.OPTION && e.openElements.pop(),
              e._insertElement(t, me.HTML);
            break;
          case _e.OPTGROUP:
            e.openElements.currentTagId === _e.OPTION && e.openElements.pop(),
              e.openElements.currentTagId === _e.OPTGROUP &&
                e.openElements.pop(),
              e._insertElement(t, me.HTML);
            break;
          case _e.INPUT:
          case _e.KEYGEN:
          case _e.TEXTAREA:
          case _e.SELECT:
            e.openElements.hasInSelectScope(_e.SELECT) &&
              (e.openElements.popUntilTagNamePopped(_e.SELECT),
              e._resetInsertionMode(),
              t.tagID !== _e.SELECT && e._processStartTag(t));
            break;
          case _e.SCRIPT:
          case _e.TEMPLATE:
            Pt(e, t);
        }
      }
      function un(e, t) {
        switch (t.tagID) {
          case _e.OPTGROUP:
            e.openElements.stackTop > 0 &&
              e.openElements.currentTagId === _e.OPTION &&
              e.openElements.tagIDs[e.openElements.stackTop - 1] ===
                _e.OPTGROUP &&
              e.openElements.pop(),
              e.openElements.currentTagId === _e.OPTGROUP &&
                e.openElements.pop();
            break;
          case _e.OPTION:
            e.openElements.currentTagId === _e.OPTION && e.openElements.pop();
            break;
          case _e.SELECT:
            e.openElements.hasInSelectScope(_e.SELECT) &&
              (e.openElements.popUntilTagNamePopped(_e.SELECT),
              e._resetInsertionMode());
            break;
          case _e.TEMPLATE:
            Mt(e, t);
        }
      }
      function hn(e, t) {
        e.openElements.tmplCount > 0
          ? (e.openElements.popUntilTagNamePopped(_e.TEMPLATE),
            e.activeFormattingElements.clearToLastMarker(),
            e.tmplInsertionModeStack.shift(),
            e._resetInsertionMode(),
            e.onEof(t))
          : Ot(e, t);
      }
      function pn(e, t) {
        var n;
        if (t.tagID === _e.HTML) {
          if (
            (e.fragmentContext || (e.insertionMode = mt.AFTER_AFTER_BODY),
            e.options.sourceCodeLocationInfo &&
              e.openElements.tagIDs[0] === _e.HTML)
          ) {
            e._setEndLocation(e.openElements.items[0], t);
            const r = e.openElements.items[1];
            r &&
              !(null === (n = e.treeAdapter.getNodeSourceCodeLocation(r)) ||
              void 0 === n
                ? void 0
                : n.endTag) &&
              e._setEndLocation(r, t);
          }
        } else dn(e, t);
      }
      function dn(e, t) {
        (e.insertionMode = mt.IN_BODY), Bt(e, t);
      }
      function fn(e, t) {
        (e.insertionMode = mt.IN_BODY), Bt(e, t);
      }
      function mn(e) {
        for (
          ;
          e.treeAdapter.getNamespaceURI(e.openElements.current) !== me.HTML &&
          !e._isIntegrationPoint(
            e.openElements.currentTagId,
            e.openElements.current,
          );

        )
          e.openElements.pop();
      }
      const En = new Map([
        [34, '&quot;'],
        [38, '&amp;'],
        [39, '&apos;'],
        [60, '&lt;'],
        [62, '&gt;'],
      ]);
      String.prototype.codePointAt;
      function Tn(e, t) {
        return function (n) {
          let r,
            i = 0,
            s = '';
          for (; (r = e.exec(n)); )
            i !== r.index && (s += n.substring(i, r.index)),
              (s += t.get(r[0].charCodeAt(0))),
              (i = r.index + 1);
          return s + n.substring(i);
        };
      }
      Tn(/[&<>'"]/g, En),
        Tn(
          /["&\u00A0]/g,
          new Map([
            [34, '&quot;'],
            [38, '&amp;'],
            [160, '&nbsp;'],
          ]),
        ),
        Tn(
          /[&<>\u00A0]/g,
          new Map([
            [38, '&amp;'],
            [60, '&lt;'],
            [62, '&gt;'],
            [160, '&nbsp;'],
          ]),
        ),
        new Set([
          Ae.AREA,
          Ae.BASE,
          Ae.BASEFONT,
          Ae.BGSOUND,
          Ae.BR,
          Ae.COL,
          Ae.EMBED,
          Ae.FRAME,
          Ae.HR,
          Ae.IMG,
          Ae.INPUT,
          Ae.KEYGEN,
          Ae.LINK,
          Ae.META,
          Ae.PARAM,
          Ae.SOURCE,
          Ae.TRACK,
          Ae.WBR,
        ]);
      var An = n(3980),
        _n = n(21623);
      const gn = new Set([
          'mdxFlowExpression',
          'mdxJsxFlowElement',
          'mdxJsxTextElement',
          'mdxTextExpression',
          'mdxjsEsm',
        ]),
        Cn = { sourceCodeLocationInfo: !0, scriptingEnabled: !1 };
      function Sn(e, t) {
        const n = (function (e) {
            const t = 'root' === e.type ? e.children[0] : e;
            return Boolean(
              t &&
                ('doctype' === t.type ||
                  ('element' === t.type && 'html' === t.tagName.toLowerCase())),
            );
          })(e),
          r = (0, y.z)('type', {
            handlers: {
              root: Nn,
              element: kn,
              text: bn,
              comment: Rn,
              doctype: Dn,
              raw: yn,
            },
            unknown: Ln,
          }),
          i = {
            parser: n ? new _t(Cn) : _t.getFragmentParser(void 0, Cn),
            handle(e) {
              r(e, i);
            },
            stitches: !1,
            options: t || {},
          };
        r(e, i), Pn(i, (0, An.Pk)());
        const s = I(n ? i.parser.document : i.parser.getFragment(), {
          file: i.options.file,
        });
        return (
          i.stitches &&
            (0, _n.Vn)(s, 'comment', function (e, t, n) {
              const r = e;
              if (r.value.stitch && n && void 0 !== t) {
                return (n.children[t] = r.value.stitch), t;
              }
            }),
          'root' === s.type &&
          1 === s.children.length &&
          s.children[0].type === e.type
            ? s.children[0]
            : s
        );
      }
      function In(e, t) {
        let n = -1;
        if (e) for (; ++n < e.length; ) t.handle(e[n]);
      }
      function Nn(e, t) {
        In(e.children, t);
      }
      function kn(e, t) {
        !(function (e, t) {
          const n = e.tagName.toLowerCase();
          if (t.parser.tokenizer.state === De.PLAINTEXT) return;
          Pn(t, (0, An.Pk)(e));
          const r = t.parser.openElements.current;
          let i = 'namespaceURI' in r ? r.namespaceURI : g.t.html;
          i === g.t.html && 'svg' === n && (i = g.t.svg);
          const o = (function (e, t) {
              const n = (t || L).space;
              return M(e, 'svg' === n ? s.YP : s.dy);
            })(
              { ...e, children: [] },
              { space: i === g.t.svg ? 'svg' : 'html' },
            ),
            a = {
              type: Z.START_TAG,
              tagName: n,
              tagID: Ce(n),
              selfClosing: !1,
              ackSelfClosing: !1,
              attrs: 'attrs' in o ? o.attrs : [],
              location: xn(e),
            };
          (t.parser.currentToken = a),
            t.parser._processToken(t.parser.currentToken),
            (t.parser.tokenizer.lastStartTagName = n);
        })(e, t),
          In(e.children, t),
          (function (e, t) {
            const n = e.tagName.toLowerCase();
            if (!t.parser.tokenizer.inForeignNode && B.includes(n)) return;
            if (t.parser.tokenizer.state === De.PLAINTEXT) return;
            Pn(t, (0, An.rb)(e));
            const r = {
              type: Z.END_TAG,
              tagName: n,
              tagID: Ce(n),
              selfClosing: !1,
              ackSelfClosing: !1,
              attrs: [],
              location: xn(e),
            };
            (t.parser.currentToken = r),
              t.parser._processToken(t.parser.currentToken),
              n !== t.parser.tokenizer.lastStartTagName ||
                (t.parser.tokenizer.state !== De.RCDATA &&
                  t.parser.tokenizer.state !== De.RAWTEXT &&
                  t.parser.tokenizer.state !== De.SCRIPT_DATA) ||
                (t.parser.tokenizer.state = De.DATA);
          })(e, t);
      }
      function bn(e, t) {
        t.parser.tokenizer.state > 4 && (t.parser.tokenizer.state = 0);
        const n = { type: Z.CHARACTER, chars: e.value, location: xn(e) };
        Pn(t, (0, An.Pk)(e)),
          (t.parser.currentToken = n),
          t.parser._processToken(t.parser.currentToken);
      }
      function Dn(e, t) {
        const n = {
          type: Z.DOCTYPE,
          name: 'html',
          forceQuirks: !1,
          publicId: '',
          systemId: '',
          location: xn(e),
        };
        Pn(t, (0, An.Pk)(e)),
          (t.parser.currentToken = n),
          t.parser._processToken(t.parser.currentToken);
      }
      function On(e, t) {
        t.stitches = !0;
        const n = (function (e) {
          return 'children' in e
            ? (0, r.ZP)({ ...e, children: [] })
            : (0, r.ZP)(e);
        })(e);
        if ('children' in e && 'children' in n) {
          const r = Sn({ type: 'root', children: e.children }, t.options);
          n.children = r.children;
        }
        Rn({ type: 'comment', value: { stitch: n } }, t);
      }
      function Rn(e, t) {
        const n = e.value,
          r = { type: Z.COMMENT, data: n, location: xn(e) };
        Pn(t, (0, An.Pk)(e)),
          (t.parser.currentToken = r),
          t.parser._processToken(t.parser.currentToken);
      }
      function yn(e, t) {
        if (
          ((t.parser.tokenizer.preprocessor.html = ''),
          (t.parser.tokenizer.preprocessor.pos = -1),
          (t.parser.tokenizer.preprocessor.lastGapPos = -2),
          (t.parser.tokenizer.preprocessor.gapStack = []),
          (t.parser.tokenizer.preprocessor.skipNextNewLine = !1),
          (t.parser.tokenizer.preprocessor.lastChunkWritten = !1),
          (t.parser.tokenizer.preprocessor.endOfChunkHit = !1),
          (t.parser.tokenizer.preprocessor.isEol = !1),
          Mn(t, (0, An.Pk)(e)),
          t.parser.tokenizer.write(e.value, !1),
          t.parser.tokenizer._runParsingLoop(),
          72 === t.parser.tokenizer.state || 78 === t.parser.tokenizer.state)
        ) {
          t.parser.tokenizer.preprocessor.lastChunkWritten = !0;
          const e = t.parser.tokenizer._consume();
          t.parser.tokenizer._callState(e);
        }
      }
      function Ln(e, t) {
        const n = e;
        if (!t.options.passThrough || !t.options.passThrough.includes(n.type)) {
          let e = '';
          throw (
            (gn.has(n.type) &&
              (e =
                ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"),
            new Error('Cannot compile `' + n.type + '` node' + e))
          );
        }
        On(n, t);
      }
      function Pn(e, t) {
        Mn(e, t);
        const n = e.parser.tokenizer.currentCharacterToken;
        n &&
          n.location &&
          ((n.location.endLine = e.parser.tokenizer.preprocessor.line),
          (n.location.endCol = e.parser.tokenizer.preprocessor.col + 1),
          (n.location.endOffset = e.parser.tokenizer.preprocessor.offset + 1),
          (e.parser.currentToken = n),
          e.parser._processToken(e.parser.currentToken)),
          (e.parser.tokenizer.paused = !1),
          (e.parser.tokenizer.inLoop = !1),
          (e.parser.tokenizer.active = !1),
          (e.parser.tokenizer.returnState = De.DATA),
          (e.parser.tokenizer.charRefCode = -1),
          (e.parser.tokenizer.consumedAfterSnapshot = -1),
          (e.parser.tokenizer.currentLocation = null),
          (e.parser.tokenizer.currentCharacterToken = null),
          (e.parser.tokenizer.currentToken = null),
          (e.parser.tokenizer.currentAttr = { name: '', value: '' });
      }
      function Mn(e, t) {
        if (t && void 0 !== t.offset) {
          const n = {
            startLine: t.line,
            startCol: t.column,
            startOffset: t.offset,
            endLine: -1,
            endCol: -1,
            endOffset: -1,
          };
          (e.parser.tokenizer.preprocessor.lineStartPos = 1 - t.column),
            (e.parser.tokenizer.preprocessor.droppedBufferSize = t.offset),
            (e.parser.tokenizer.preprocessor.line = t.line),
            (e.parser.tokenizer.currentLocation = n);
        }
      }
      function xn(e) {
        const t = (0, An.Pk)(e) || {
            line: void 0,
            column: void 0,
            offset: void 0,
          },
          n = (0, An.rb)(e) || { line: void 0, column: void 0, offset: void 0 };
        return {
          startLine: t.line,
          startCol: t.column,
          startOffset: t.offset,
          endLine: n.line,
          endCol: n.column,
          endOffset: n.offset,
        };
      }
      function vn(e) {
        return function (t, n) {
          return Sn(t, { ...e, file: n });
        };
      }
    },
    78600: function (e, t, n) {
      'use strict';
      function r(e, t) {
        const n = String(e);
        if ('string' != typeof t) throw new TypeError('Expected character');
        let r = 0,
          i = n.indexOf(t);
        for (; -1 !== i; ) r++, (i = n.indexOf(t, i + t.length));
        return r;
      }
      n.d(t, {
        Z: function () {
          return it;
        },
      });
      var i = n(24345),
        s = n(15459);
      var o = n(88718),
        a = n(96093);
      function c(e, t, n) {
        const r = n || {},
          i = (0, a.O)(r.ignore || []),
          s = (function (e) {
            const t = [];
            if (!Array.isArray(e))
              throw new TypeError(
                'Expected find and replace tuple or list of tuples',
              );
            const n = !e[0] || Array.isArray(e[0]) ? e : [e];
            let r = -1;
            for (; ++r < n.length; ) {
              const e = n[r];
              t.push([l(e[0]), u(e[1])]);
            }
            return t;
          })(t);
        let c = -1;
        for (; ++c < s.length; ) (0, o.S4)(e, 'text', h);
        function h(e, t) {
          let n,
            r = -1;
          for (; ++r < t.length; ) {
            const e = t[r],
              s = n ? n.children : void 0;
            if (i(e, s ? s.indexOf(e) : void 0, n)) return;
            n = e;
          }
          if (n)
            return (function (e, t) {
              const n = t[t.length - 1],
                r = s[c][0],
                i = s[c][1];
              let o = 0;
              const a = n.children.indexOf(e);
              let l = !1,
                u = [];
              r.lastIndex = 0;
              let h = r.exec(e.value);
              for (; h; ) {
                const n = h.index,
                  s = { index: h.index, input: h.input, stack: [...t, e] };
                let a = i(...h, s);
                if (
                  ('string' == typeof a &&
                    (a = a.length > 0 ? { type: 'text', value: a } : void 0),
                  !1 === a
                    ? (r.lastIndex = n + 1)
                    : (o !== n &&
                        u.push({ type: 'text', value: e.value.slice(o, n) }),
                      Array.isArray(a) ? u.push(...a) : a && u.push(a),
                      (o = n + h[0].length),
                      (l = !0)),
                  !r.global)
                )
                  break;
                h = r.exec(e.value);
              }
              l
                ? (o < e.value.length &&
                    u.push({ type: 'text', value: e.value.slice(o) }),
                  n.children.splice(a, 1, ...u))
                : (u = [e]);
              return a + u.length;
            })(e, t);
        }
      }
      function l(e) {
        return 'string' == typeof e
          ? new RegExp(
              (function (e) {
                if ('string' != typeof e)
                  throw new TypeError('Expected a string');
                return e
                  .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
                  .replace(/-/g, '\\x2d');
              })(e),
              'g',
            )
          : e;
      }
      function u(e) {
        return 'function' == typeof e
          ? e
          : function () {
              return e;
            };
      }
      const h = 'phrasing',
        p = ['autolink', 'link', 'image', 'label'];
      function d(e) {
        this.enter({ type: 'link', title: null, url: '', children: [] }, e);
      }
      function f(e) {
        this.config.enter.autolinkProtocol.call(this, e);
      }
      function m(e) {
        this.config.exit.autolinkProtocol.call(this, e);
      }
      function E(e) {
        this.config.exit.data.call(this, e);
        const t = this.stack[this.stack.length - 1];
        (0, i.ok)('link' === t.type),
          (t.url = 'http://' + this.sliceSerialize(e));
      }
      function T(e) {
        this.config.exit.autolinkEmail.call(this, e);
      }
      function A(e) {
        this.exit(e);
      }
      function _(e) {
        c(
          e,
          [
            [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, g],
            [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, C],
          ],
          { ignore: ['link', 'linkReference'] },
        );
      }
      function g(e, t, n, i, s) {
        let o = '';
        if (!S(s)) return !1;
        if (
          (/^w/i.test(t) && ((n = t + n), (t = ''), (o = 'http://')),
          !(function (e) {
            const t = e.split('.');
            if (
              t.length < 2 ||
              (t[t.length - 1] &&
                (/_/.test(t[t.length - 1]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
              (t[t.length - 2] &&
                (/_/.test(t[t.length - 2]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 2])))
            )
              return !1;
            return !0;
          })(n))
        )
          return !1;
        const a = (function (e) {
          const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
          if (!t) return [e, void 0];
          e = e.slice(0, t.index);
          let n = t[0],
            i = n.indexOf(')');
          const s = r(e, '(');
          let o = r(e, ')');
          for (; -1 !== i && s > o; )
            (e += n.slice(0, i + 1)),
              (n = n.slice(i + 1)),
              (i = n.indexOf(')')),
              o++;
          return [e, n];
        })(n + i);
        if (!a[0]) return !1;
        const c = {
          type: 'link',
          title: null,
          url: o + t + a[0],
          children: [{ type: 'text', value: t + a[0] }],
        };
        return a[1] ? [c, { type: 'text', value: a[1] }] : c;
      }
      function C(e, t, n, r) {
        return (
          !(!S(r, !0) || /[-\d_]$/.test(n)) && {
            type: 'link',
            title: null,
            url: 'mailto:' + t + '@' + n,
            children: [{ type: 'text', value: t + '@' + n }],
          }
        );
      }
      function S(e, t) {
        const n = e.input.charCodeAt(e.index - 1);
        return (
          (0 === e.index || (0, s.B8)(n) || (0, s.Xh)(n)) && (!t || 47 !== n)
        );
      }
      var I = n(11098);
      function N(e) {
        this.enter(
          {
            type: 'footnoteDefinition',
            identifier: '',
            label: '',
            children: [],
          },
          e,
        );
      }
      function k() {
        this.buffer();
      }
      function b(e) {
        const t = this.resume(),
          n = this.stack[this.stack.length - 1];
        (0, i.ok)('footnoteDefinition' === n.type),
          (n.label = t),
          (n.identifier = (0, I.d)(this.sliceSerialize(e)).toLowerCase());
      }
      function D(e) {
        this.exit(e);
      }
      function O(e) {
        this.enter({ type: 'footnoteReference', identifier: '', label: '' }, e);
      }
      function R() {
        this.buffer();
      }
      function y(e) {
        const t = this.resume(),
          n = this.stack[this.stack.length - 1];
        (0, i.ok)('footnoteReference' === n.type),
          (n.label = t),
          (n.identifier = (0, I.d)(this.sliceSerialize(e)).toLowerCase());
      }
      function L(e) {
        this.exit(e);
      }
      function P(e, t, n, r) {
        const i = n.createTracker(r);
        let s = i.move('[^');
        const o = n.enter('footnoteReference'),
          a = n.enter('reference');
        return (
          (s += i.move(
            n.safe(n.associationId(e), {
              ...i.current(),
              before: s,
              after: ']',
            }),
          )),
          a(),
          o(),
          (s += i.move(']')),
          s
        );
      }
      function M(e, t, n, r) {
        const i = n.createTracker(r);
        let s = i.move('[^');
        const o = n.enter('footnoteDefinition'),
          a = n.enter('label');
        return (
          (s += i.move(
            n.safe(n.associationId(e), {
              ...i.current(),
              before: s,
              after: ']',
            }),
          )),
          a(),
          (s += i.move(
            ']:' + (e.children && e.children.length > 0 ? ' ' : ''),
          )),
          i.shift(4),
          (s += i.move(n.indentLines(n.containerFlow(e, i.current()), x))),
          o(),
          s
        );
      }
      function x(e, t, n) {
        return 0 === t ? e : (n ? '' : '    ') + e;
      }
      P.peek = function () {
        return '[';
      };
      const v = [
        'autolink',
        'destinationLiteral',
        'destinationRaw',
        'reference',
        'titleQuote',
        'titleApostrophe',
      ];
      function w(e) {
        this.enter({ type: 'delete', children: [] }, e);
      }
      function B(e) {
        this.exit(e);
      }
      function F(e, t, n, r) {
        const i = n.createTracker(r),
          s = n.enter('strikethrough');
        let o = i.move('~~');
        return (
          (o += n.containerPhrasing(e, {
            ...i.current(),
            before: o,
            after: '~',
          })),
          (o += i.move('~~')),
          s(),
          o
        );
      }
      function H(e) {
        return e.length;
      }
      function U(e) {
        const t = 'string' == typeof e ? e.codePointAt(0) : 0;
        return 67 === t || 99 === t
          ? 99
          : 76 === t || 108 === t
            ? 108
            : 82 === t || 114 === t
              ? 114
              : 0;
      }
      function G(e, t, n) {
        return '>' + (n ? '' : ' ') + e;
      }
      function z(e, t, n) {
        if (('string' == typeof t && (t = [t]), !t || 0 === t.length)) return n;
        let r = -1;
        for (; ++r < t.length; ) if (e.includes(t[r])) return !0;
        return !1;
      }
      function Y(e, t, n, r) {
        let i = -1;
        for (; ++i < n.unsafe.length; )
          if (
            '\n' === n.unsafe[i].character &&
            ((s = n.stack),
            (o = n.unsafe[i]),
            z(s, o.inConstruct, !0) && !z(s, o.notInConstruct, !1))
          )
            return /[ \t]/.test(r.before) ? '' : ' ';
        var s, o;
        return '\\\n';
      }
      F.peek = function () {
        return '~';
      };
      var j = n(85996);
      function q(e, t, n) {
        return (n ? '' : '    ') + e;
      }
      function W(e) {
        const t = e.options.quote || '"';
        if ('"' !== t && "'" !== t)
          throw new Error(
            'Cannot serialize title with `' +
              t +
              '` for `options.quote`, expected `"`, or `\'`',
          );
        return t;
      }
      function V(e, t, n, r) {
        const i = (function (e) {
            const t = e.options.emphasis || '*';
            if ('*' !== t && '_' !== t)
              throw new Error(
                'Cannot serialize emphasis with `' +
                  t +
                  '` for `options.emphasis`, expected `*`, or `_`',
              );
            return t;
          })(n),
          s = n.enter('emphasis'),
          o = n.createTracker(r);
        let a = o.move(i);
        return (
          (a += o.move(
            n.containerPhrasing(e, { before: a, after: i, ...o.current() }),
          )),
          (a += o.move(i)),
          s(),
          a
        );
      }
      V.peek = function (e, t, n) {
        return n.options.emphasis || '*';
      };
      var Q = n(21623),
        X = n(27962);
      function $(e) {
        return e.value || '';
      }
      function K(e, t, n, r) {
        const i = W(n),
          s = '"' === i ? 'Quote' : 'Apostrophe',
          o = n.enter('image');
        let a = n.enter('label');
        const c = n.createTracker(r);
        let l = c.move('![');
        return (
          (l += c.move(
            n.safe(e.alt, { before: l, after: ']', ...c.current() }),
          )),
          (l += c.move('](')),
          a(),
          (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
            ? ((a = n.enter('destinationLiteral')),
              (l += c.move('<')),
              (l += c.move(
                n.safe(e.url, { before: l, after: '>', ...c.current() }),
              )),
              (l += c.move('>')))
            : ((a = n.enter('destinationRaw')),
              (l += c.move(
                n.safe(e.url, {
                  before: l,
                  after: e.title ? ' ' : ')',
                  ...c.current(),
                }),
              ))),
          a(),
          e.title &&
            ((a = n.enter(`title${s}`)),
            (l += c.move(' ' + i)),
            (l += c.move(
              n.safe(e.title, { before: l, after: i, ...c.current() }),
            )),
            (l += c.move(i)),
            a()),
          (l += c.move(')')),
          o(),
          l
        );
      }
      function Z(e, t, n, r) {
        const i = e.referenceType,
          s = n.enter('imageReference');
        let o = n.enter('label');
        const a = n.createTracker(r);
        let c = a.move('![');
        const l = n.safe(e.alt, { before: c, after: ']', ...a.current() });
        (c += a.move(l + '][')), o();
        const u = n.stack;
        (n.stack = []), (o = n.enter('reference'));
        const h = n.safe(n.associationId(e), {
          before: c,
          after: ']',
          ...a.current(),
        });
        return (
          o(),
          (n.stack = u),
          s(),
          'full' !== i && l && l === h
            ? 'shortcut' === i
              ? (c = c.slice(0, -1))
              : (c += a.move(']'))
            : (c += a.move(h + ']')),
          c
        );
      }
      function J(e, t, n) {
        let r = e.value || '',
          i = '`',
          s = -1;
        for (; new RegExp('(^|[^`])' + i + '([^`]|$)').test(r); ) i += '`';
        for (
          /[^ \r\n]/.test(r) &&
          ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
          (r = ' ' + r + ' ');
          ++s < n.unsafe.length;

        ) {
          const e = n.unsafe[s],
            t = n.compilePattern(e);
          let i;
          if (e.atBreak)
            for (; (i = t.exec(r)); ) {
              let e = i.index;
              10 === r.charCodeAt(e) && 13 === r.charCodeAt(e - 1) && e--,
                (r = r.slice(0, e) + ' ' + r.slice(i.index + 1));
            }
        }
        return i + r + i;
      }
      function ee(e, t) {
        const n = (0, X.B)(e);
        return Boolean(
          !t.options.resourceLink &&
            e.url &&
            !e.title &&
            e.children &&
            1 === e.children.length &&
            'text' === e.children[0].type &&
            (n === e.url || 'mailto:' + n === e.url) &&
            /^[a-z][a-z+.-]+:/i.test(e.url) &&
            !/[\0- <>\u007F]/.test(e.url),
        );
      }
      function te(e, t, n, r) {
        const i = W(n),
          s = '"' === i ? 'Quote' : 'Apostrophe',
          o = n.createTracker(r);
        let a, c;
        if (ee(e, n)) {
          const t = n.stack;
          (n.stack = []), (a = n.enter('autolink'));
          let r = o.move('<');
          return (
            (r += o.move(
              n.containerPhrasing(e, { before: r, after: '>', ...o.current() }),
            )),
            (r += o.move('>')),
            a(),
            (n.stack = t),
            r
          );
        }
        (a = n.enter('link')), (c = n.enter('label'));
        let l = o.move('[');
        return (
          (l += o.move(
            n.containerPhrasing(e, { before: l, after: '](', ...o.current() }),
          )),
          (l += o.move('](')),
          c(),
          (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
            ? ((c = n.enter('destinationLiteral')),
              (l += o.move('<')),
              (l += o.move(
                n.safe(e.url, { before: l, after: '>', ...o.current() }),
              )),
              (l += o.move('>')))
            : ((c = n.enter('destinationRaw')),
              (l += o.move(
                n.safe(e.url, {
                  before: l,
                  after: e.title ? ' ' : ')',
                  ...o.current(),
                }),
              ))),
          c(),
          e.title &&
            ((c = n.enter(`title${s}`)),
            (l += o.move(' ' + i)),
            (l += o.move(
              n.safe(e.title, { before: l, after: i, ...o.current() }),
            )),
            (l += o.move(i)),
            c()),
          (l += o.move(')')),
          a(),
          l
        );
      }
      function ne(e, t, n, r) {
        const i = e.referenceType,
          s = n.enter('linkReference');
        let o = n.enter('label');
        const a = n.createTracker(r);
        let c = a.move('[');
        const l = n.containerPhrasing(e, {
          before: c,
          after: ']',
          ...a.current(),
        });
        (c += a.move(l + '][')), o();
        const u = n.stack;
        (n.stack = []), (o = n.enter('reference'));
        const h = n.safe(n.associationId(e), {
          before: c,
          after: ']',
          ...a.current(),
        });
        return (
          o(),
          (n.stack = u),
          s(),
          'full' !== i && l && l === h
            ? 'shortcut' === i
              ? (c = c.slice(0, -1))
              : (c += a.move(']'))
            : (c += a.move(h + ']')),
          c
        );
      }
      function re(e) {
        const t = e.options.bullet || '*';
        if ('*' !== t && '+' !== t && '-' !== t)
          throw new Error(
            'Cannot serialize items with `' +
              t +
              '` for `options.bullet`, expected `*`, `+`, or `-`',
          );
        return t;
      }
      function ie(e) {
        const t = e.options.rule || '*';
        if ('*' !== t && '-' !== t && '_' !== t)
          throw new Error(
            'Cannot serialize rules with `' +
              t +
              '` for `options.rule`, expected `*`, `-`, or `_`',
          );
        return t;
      }
      ($.peek = function () {
        return '<';
      }),
        (K.peek = function () {
          return '!';
        }),
        (Z.peek = function () {
          return '!';
        }),
        (J.peek = function () {
          return '`';
        }),
        (te.peek = function (e, t, n) {
          return ee(e, n) ? '<' : '[';
        }),
        (ne.peek = function () {
          return '[';
        });
      const se = (0, a.O)([
        'break',
        'delete',
        'emphasis',
        'footnote',
        'footnoteReference',
        'image',
        'imageReference',
        'inlineCode',
        'inlineMath',
        'link',
        'linkReference',
        'mdxJsxTextElement',
        'mdxTextExpression',
        'strong',
        'text',
        'textDirective',
      ]);
      function oe(e, t, n, r) {
        const i = (function (e) {
            const t = e.options.strong || '*';
            if ('*' !== t && '_' !== t)
              throw new Error(
                'Cannot serialize strong with `' +
                  t +
                  '` for `options.strong`, expected `*`, or `_`',
              );
            return t;
          })(n),
          s = n.enter('strong'),
          o = n.createTracker(r);
        let a = o.move(i + i);
        return (
          (a += o.move(
            n.containerPhrasing(e, { before: a, after: i, ...o.current() }),
          )),
          (a += o.move(i + i)),
          s(),
          a
        );
      }
      oe.peek = function (e, t, n) {
        return n.options.strong || '*';
      };
      const ae = {
        blockquote: function (e, t, n, r) {
          const i = n.enter('blockquote'),
            s = n.createTracker(r);
          s.move('> '), s.shift(2);
          const o = n.indentLines(n.containerFlow(e, s.current()), G);
          return i(), o;
        },
        break: Y,
        code: function (e, t, n, r) {
          const i = (function (e) {
              const t = e.options.fence || '`';
              if ('`' !== t && '~' !== t)
                throw new Error(
                  'Cannot serialize code with `' +
                    t +
                    '` for `options.fence`, expected `` ` `` or `~`',
                );
              return t;
            })(n),
            s = e.value || '',
            o = '`' === i ? 'GraveAccent' : 'Tilde';
          if (
            (function (e, t) {
              return Boolean(
                !1 === t.options.fences &&
                  e.value &&
                  !e.lang &&
                  /[^ \r\n]/.test(e.value) &&
                  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value),
              );
            })(e, n)
          ) {
            const e = n.enter('codeIndented'),
              t = n.indentLines(s, q);
            return e(), t;
          }
          const a = n.createTracker(r),
            c = i.repeat(Math.max((0, j.J)(s, i) + 1, 3)),
            l = n.enter('codeFenced');
          let u = a.move(c);
          if (e.lang) {
            const t = n.enter(`codeFencedLang${o}`);
            (u += a.move(
              n.safe(e.lang, {
                before: u,
                after: ' ',
                encode: ['`'],
                ...a.current(),
              }),
            )),
              t();
          }
          if (e.lang && e.meta) {
            const t = n.enter(`codeFencedMeta${o}`);
            (u += a.move(' ')),
              (u += a.move(
                n.safe(e.meta, {
                  before: u,
                  after: '\n',
                  encode: ['`'],
                  ...a.current(),
                }),
              )),
              t();
          }
          return (
            (u += a.move('\n')),
            s && (u += a.move(s + '\n')),
            (u += a.move(c)),
            l(),
            u
          );
        },
        definition: function (e, t, n, r) {
          const i = W(n),
            s = '"' === i ? 'Quote' : 'Apostrophe',
            o = n.enter('definition');
          let a = n.enter('label');
          const c = n.createTracker(r);
          let l = c.move('[');
          return (
            (l += c.move(
              n.safe(n.associationId(e), {
                before: l,
                after: ']',
                ...c.current(),
              }),
            )),
            (l += c.move(']: ')),
            a(),
            !e.url || /[\0- \u007F]/.test(e.url)
              ? ((a = n.enter('destinationLiteral')),
                (l += c.move('<')),
                (l += c.move(
                  n.safe(e.url, { before: l, after: '>', ...c.current() }),
                )),
                (l += c.move('>')))
              : ((a = n.enter('destinationRaw')),
                (l += c.move(
                  n.safe(e.url, {
                    before: l,
                    after: e.title ? ' ' : '\n',
                    ...c.current(),
                  }),
                ))),
            a(),
            e.title &&
              ((a = n.enter(`title${s}`)),
              (l += c.move(' ' + i)),
              (l += c.move(
                n.safe(e.title, { before: l, after: i, ...c.current() }),
              )),
              (l += c.move(i)),
              a()),
            o(),
            l
          );
        },
        emphasis: V,
        hardBreak: Y,
        heading: function (e, t, n, r) {
          const i = Math.max(Math.min(6, e.depth || 1), 1),
            s = n.createTracker(r);
          if (
            (function (e, t) {
              let n = !1;
              return (
                (0, Q.Vn)(e, function (e) {
                  if (
                    ('value' in e && /\r?\n|\r/.test(e.value)) ||
                    'break' === e.type
                  )
                    return (n = !0), o.BK;
                }),
                Boolean(
                  (!e.depth || e.depth < 3) &&
                    (0, X.B)(e) &&
                    (t.options.setext || n),
                )
              );
            })(e, n)
          ) {
            const t = n.enter('headingSetext'),
              r = n.enter('phrasing'),
              o = n.containerPhrasing(e, {
                ...s.current(),
                before: '\n',
                after: '\n',
              });
            return (
              r(),
              t(),
              o +
                '\n' +
                (1 === i ? '=' : '-').repeat(
                  o.length -
                    (Math.max(o.lastIndexOf('\r'), o.lastIndexOf('\n')) + 1),
                )
            );
          }
          const a = '#'.repeat(i),
            c = n.enter('headingAtx'),
            l = n.enter('phrasing');
          s.move(a + ' ');
          let u = n.containerPhrasing(e, {
            before: '# ',
            after: '\n',
            ...s.current(),
          });
          return (
            /^[\t ]/.test(u) &&
              (u =
                '&#x' +
                u.charCodeAt(0).toString(16).toUpperCase() +
                ';' +
                u.slice(1)),
            (u = u ? a + ' ' + u : a),
            n.options.closeAtx && (u += ' ' + a),
            l(),
            c(),
            u
          );
        },
        html: $,
        image: K,
        imageReference: Z,
        inlineCode: J,
        link: te,
        linkReference: ne,
        list: function (e, t, n, r) {
          const i = n.enter('list'),
            s = n.bulletCurrent;
          let o = e.ordered
            ? (function (e) {
                const t = e.options.bulletOrdered || '.';
                if ('.' !== t && ')' !== t)
                  throw new Error(
                    'Cannot serialize items with `' +
                      t +
                      '` for `options.bulletOrdered`, expected `.` or `)`',
                  );
                return t;
              })(n)
            : re(n);
          const a = e.ordered
            ? '.' === o
              ? ')'
              : '.'
            : (function (e) {
                const t = re(e),
                  n = e.options.bulletOther;
                if (!n) return '*' === t ? '-' : '*';
                if ('*' !== n && '+' !== n && '-' !== n)
                  throw new Error(
                    'Cannot serialize items with `' +
                      n +
                      '` for `options.bulletOther`, expected `*`, `+`, or `-`',
                  );
                if (n === t)
                  throw new Error(
                    'Expected `bullet` (`' +
                      t +
                      '`) and `bulletOther` (`' +
                      n +
                      '`) to be different',
                  );
                return n;
              })(n);
          let c = !(!t || !n.bulletLastUsed) && o === n.bulletLastUsed;
          if (!e.ordered) {
            const t = e.children ? e.children[0] : void 0;
            if (
              (('*' !== o && '-' !== o) ||
                !t ||
                (t.children && t.children[0]) ||
                'list' !== n.stack[n.stack.length - 1] ||
                'listItem' !== n.stack[n.stack.length - 2] ||
                'list' !== n.stack[n.stack.length - 3] ||
                'listItem' !== n.stack[n.stack.length - 4] ||
                0 !== n.indexStack[n.indexStack.length - 1] ||
                0 !== n.indexStack[n.indexStack.length - 2] ||
                0 !== n.indexStack[n.indexStack.length - 3] ||
                (c = !0),
              ie(n) === o && t)
            ) {
              let t = -1;
              for (; ++t < e.children.length; ) {
                const n = e.children[t];
                if (
                  n &&
                  'listItem' === n.type &&
                  n.children &&
                  n.children[0] &&
                  'thematicBreak' === n.children[0].type
                ) {
                  c = !0;
                  break;
                }
              }
            }
          }
          c && (o = a), (n.bulletCurrent = o);
          const l = n.containerFlow(e, r);
          return (n.bulletLastUsed = o), (n.bulletCurrent = s), i(), l;
        },
        listItem: function (e, t, n, r) {
          const i = (function (e) {
            const t = e.options.listItemIndent || 'one';
            if ('tab' !== t && 'one' !== t && 'mixed' !== t)
              throw new Error(
                'Cannot serialize items with `' +
                  t +
                  '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`',
              );
            return t;
          })(n);
          let s = n.bulletCurrent || re(n);
          t &&
            'list' === t.type &&
            t.ordered &&
            (s =
              ('number' == typeof t.start && t.start > -1 ? t.start : 1) +
              (!1 === n.options.incrementListMarker
                ? 0
                : t.children.indexOf(e)) +
              s);
          let o = s.length + 1;
          ('tab' === i ||
            ('mixed' === i &&
              ((t && 'list' === t.type && t.spread) || e.spread))) &&
            (o = 4 * Math.ceil(o / 4));
          const a = n.createTracker(r);
          a.move(s + ' '.repeat(o - s.length)), a.shift(o);
          const c = n.enter('listItem'),
            l = n.indentLines(
              n.containerFlow(e, a.current()),
              function (e, t, n) {
                if (t) return (n ? '' : ' '.repeat(o)) + e;
                return (n ? s : s + ' '.repeat(o - s.length)) + e;
              },
            );
          return c(), l;
        },
        paragraph: function (e, t, n, r) {
          const i = n.enter('paragraph'),
            s = n.enter('phrasing'),
            o = n.containerPhrasing(e, r);
          return s(), i(), o;
        },
        root: function (e, t, n, r) {
          return (
            e.children.some(function (e) {
              return se(e);
            })
              ? n.containerPhrasing
              : n.containerFlow
          ).call(n, e, r);
        },
        strong: oe,
        text: function (e, t, n, r) {
          return n.safe(e.value, r);
        },
        thematicBreak: function (e, t, n) {
          const r = (ie(n) + (n.options.ruleSpaces ? ' ' : '')).repeat(
            (function (e) {
              const t = e.options.ruleRepetition || 3;
              if (t < 3)
                throw new Error(
                  'Cannot serialize rules with repetition `' +
                    t +
                    '` for `options.ruleRepetition`, expected `3` or more',
                );
              return t;
            })(n),
          );
          return n.options.ruleSpaces ? r.slice(0, -1) : r;
        },
      };
      function ce(e) {
        const t = e._align;
        (0, i.ok)(t, 'expected `_align` on table'),
          this.enter(
            {
              type: 'table',
              align: t.map(function (e) {
                return 'none' === e ? null : e;
              }),
              children: [],
            },
            e,
          ),
          (this.data.inTable = !0);
      }
      function le(e) {
        this.exit(e), (this.data.inTable = void 0);
      }
      function ue(e) {
        this.enter({ type: 'tableRow', children: [] }, e);
      }
      function he(e) {
        this.exit(e);
      }
      function pe(e) {
        this.enter({ type: 'tableCell', children: [] }, e);
      }
      function de(e) {
        let t = this.resume();
        this.data.inTable && (t = t.replace(/\\([\\|])/g, fe));
        const n = this.stack[this.stack.length - 1];
        (0, i.ok)('inlineCode' === n.type), (n.value = t), this.exit(e);
      }
      function fe(e, t) {
        return '|' === t ? t : e;
      }
      function me(e) {
        const t = e || {},
          n = t.tableCellPadding,
          r = t.tablePipeAlign,
          i = t.stringLength,
          s = n ? ' ' : '|';
        return {
          unsafe: [
            { character: '\r', inConstruct: 'tableCell' },
            { character: '\n', inConstruct: 'tableCell' },
            { atBreak: !0, character: '|', after: '[\t :-]' },
            { character: '|', inConstruct: 'tableCell' },
            { atBreak: !0, character: ':', after: '-' },
            { atBreak: !0, character: '-', after: '[:|-]' },
          ],
          handlers: {
            inlineCode: function (e, t, n) {
              let r = ae.inlineCode(e, t, n);
              n.stack.includes('tableCell') && (r = r.replace(/\|/g, '\\$&'));
              return r;
            },
            table: function (e, t, n, r) {
              return a(
                (function (e, t, n) {
                  const r = e.children;
                  let i = -1;
                  const s = [],
                    o = t.enter('table');
                  for (; ++i < r.length; ) s[i] = c(r[i], t, n);
                  return o(), s;
                })(e, n, r),
                e.align,
              );
            },
            tableCell: o,
            tableRow: function (e, t, n, r) {
              const i = a([c(e, n, r)]);
              return i.slice(0, i.indexOf('\n'));
            },
          },
        };
        function o(e, t, n, r) {
          const i = n.enter('tableCell'),
            o = n.enter('phrasing'),
            a = n.containerPhrasing(e, { ...r, before: s, after: s });
          return o(), i(), a;
        }
        function a(e, t) {
          return (function (e, t = {}) {
            const n = (t.align || []).concat(),
              r = t.stringLength || H,
              i = [],
              s = [],
              o = [],
              a = [];
            let c = 0,
              l = -1;
            for (; ++l < e.length; ) {
              const n = [],
                i = [];
              let h = -1;
              for (e[l].length > c && (c = e[l].length); ++h < e[l].length; ) {
                const s = null == (u = e[l][h]) ? '' : String(u);
                if (!1 !== t.alignDelimiters) {
                  const e = r(s);
                  (i[h] = e), (void 0 === a[h] || e > a[h]) && (a[h] = e);
                }
                n.push(s);
              }
              (s[l] = n), (o[l] = i);
            }
            var u;
            let h = -1;
            if ('object' == typeof n && 'length' in n)
              for (; ++h < c; ) i[h] = U(n[h]);
            else {
              const e = U(n);
              for (; ++h < c; ) i[h] = e;
            }
            h = -1;
            const p = [],
              d = [];
            for (; ++h < c; ) {
              const e = i[h];
              let n = '',
                r = '';
              99 === e
                ? ((n = ':'), (r = ':'))
                : 108 === e
                  ? (n = ':')
                  : 114 === e && (r = ':');
              let s =
                !1 === t.alignDelimiters
                  ? 1
                  : Math.max(1, a[h] - n.length - r.length);
              const o = n + '-'.repeat(s) + r;
              !1 !== t.alignDelimiters &&
                ((s = n.length + s + r.length),
                s > a[h] && (a[h] = s),
                (d[h] = s)),
                (p[h] = o);
            }
            s.splice(1, 0, p), o.splice(1, 0, d), (l = -1);
            const f = [];
            for (; ++l < s.length; ) {
              const e = s[l],
                n = o[l];
              h = -1;
              const r = [];
              for (; ++h < c; ) {
                const s = e[h] || '';
                let o = '',
                  l = '';
                if (!1 !== t.alignDelimiters) {
                  const e = a[h] - (n[h] || 0),
                    t = i[h];
                  114 === t
                    ? (o = ' '.repeat(e))
                    : 99 === t
                      ? e % 2
                        ? ((o = ' '.repeat(e / 2 + 0.5)),
                          (l = ' '.repeat(e / 2 - 0.5)))
                        : ((o = ' '.repeat(e / 2)), (l = o))
                      : (l = ' '.repeat(e));
                }
                !1 === t.delimiterStart || h || r.push('|'),
                  !1 === t.padding ||
                    (!1 === t.alignDelimiters && '' === s) ||
                    (!1 === t.delimiterStart && !h) ||
                    r.push(' '),
                  !1 !== t.alignDelimiters && r.push(o),
                  r.push(s),
                  !1 !== t.alignDelimiters && r.push(l),
                  !1 !== t.padding && r.push(' '),
                  (!1 === t.delimiterEnd && h === c - 1) || r.push('|');
              }
              f.push(
                !1 === t.delimiterEnd
                  ? r.join('').replace(/ +$/, '')
                  : r.join(''),
              );
            }
            return f.join('\n');
          })(e, { align: t, alignDelimiters: r, padding: n, stringLength: i });
        }
        function c(e, t, n) {
          const r = e.children;
          let i = -1;
          const s = [],
            a = t.enter('tableRow');
          for (; ++i < r.length; ) s[i] = o(r[i], 0, t, n);
          return a(), s;
        }
      }
      function Ee(e) {
        const t = this.stack[this.stack.length - 2];
        (0, i.ok)('listItem' === t.type),
          (t.checked = 'taskListCheckValueChecked' === e.type);
      }
      function Te(e) {
        const t = this.stack[this.stack.length - 2];
        if (t && 'listItem' === t.type && 'boolean' == typeof t.checked) {
          const e = this.stack[this.stack.length - 1];
          (0, i.ok)('paragraph' === e.type);
          const n = e.children[0];
          if (n && 'text' === n.type) {
            const r = t.children;
            let i,
              s = -1;
            for (; ++s < r.length; ) {
              const e = r[s];
              if ('paragraph' === e.type) {
                i = e;
                break;
              }
            }
            i === e &&
              ((n.value = n.value.slice(1)),
              0 === n.value.length
                ? e.children.shift()
                : e.position &&
                  n.position &&
                  'number' == typeof n.position.start.offset &&
                  (n.position.start.column++,
                  n.position.start.offset++,
                  (e.position.start = Object.assign({}, n.position.start))));
          }
        }
        this.exit(e);
      }
      function Ae(e, t, n, r) {
        const i = e.children[0],
          s = 'boolean' == typeof e.checked && i && 'paragraph' === i.type,
          o = '[' + (e.checked ? 'x' : ' ') + '] ',
          a = n.createTracker(r);
        s && a.move(o);
        let c = ae.listItem(e, t, n, { ...r, ...a.current() });
        return (
          s &&
            (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function (e) {
              return e + o;
            })),
          c
        );
      }
      var _e = n(4663);
      const ge = {
          tokenize: function (e, t, n) {
            let r = 0;
            return function t(s) {
              if ((87 === s || 119 === s) && r < 3) return r++, e.consume(s), t;
              if (46 === s && 3 === r) return e.consume(s), i;
              return n(s);
            };
            function i(e) {
              return null === e ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        Ce = {
          tokenize: function (e, t, n) {
            let r, i, o;
            return a;
            function a(t) {
              return 46 === t || 95 === t
                ? e.check(Ie, l, c)(t)
                : null === t ||
                    (0, s.z3)(t) ||
                    (0, s.B8)(t) ||
                    (45 !== t && (0, s.Xh)(t))
                  ? l(t)
                  : ((o = !0), e.consume(t), a);
            }
            function c(t) {
              return (
                95 === t ? (r = !0) : ((i = r), (r = void 0)), e.consume(t), a
              );
            }
            function l(e) {
              return i || r || !o ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        Se = {
          tokenize: function (e, t) {
            let n = 0,
              r = 0;
            return i;
            function i(a) {
              return 40 === a
                ? (n++, e.consume(a), i)
                : 41 === a && r < n
                  ? o(a)
                  : 33 === a ||
                      34 === a ||
                      38 === a ||
                      39 === a ||
                      41 === a ||
                      42 === a ||
                      44 === a ||
                      46 === a ||
                      58 === a ||
                      59 === a ||
                      60 === a ||
                      63 === a ||
                      93 === a ||
                      95 === a ||
                      126 === a
                    ? e.check(Ie, t, o)(a)
                    : null === a || (0, s.z3)(a) || (0, s.B8)(a)
                      ? t(a)
                      : (e.consume(a), i);
            }
            function o(t) {
              return 41 === t && r++, e.consume(t), i;
            }
          },
          partial: !0,
        },
        Ie = {
          tokenize: function (e, t, n) {
            return r;
            function r(a) {
              return 33 === a ||
                34 === a ||
                39 === a ||
                41 === a ||
                42 === a ||
                44 === a ||
                46 === a ||
                58 === a ||
                59 === a ||
                63 === a ||
                95 === a ||
                126 === a
                ? (e.consume(a), r)
                : 38 === a
                  ? (e.consume(a), o)
                  : 93 === a
                    ? (e.consume(a), i)
                    : 60 === a || null === a || (0, s.z3)(a) || (0, s.B8)(a)
                      ? t(a)
                      : n(a);
            }
            function i(e) {
              return null === e ||
                40 === e ||
                91 === e ||
                (0, s.z3)(e) ||
                (0, s.B8)(e)
                ? t(e)
                : r(e);
            }
            function o(e) {
              return (0, s.jv)(e) ? a(e) : n(e);
            }
            function a(t) {
              return 59 === t
                ? (e.consume(t), r)
                : (0, s.jv)(t)
                  ? (e.consume(t), a)
                  : n(t);
            }
          },
          partial: !0,
        },
        Ne = {
          tokenize: function (e, t, n) {
            return function (t) {
              return e.consume(t), r;
            };
            function r(e) {
              return (0, s.H$)(e) ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        ke = {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              if (
                (87 !== t && 119 !== t) ||
                !ye.call(r, r.previous) ||
                xe(r.events)
              )
                return n(t);
              return (
                e.enter('literalAutolink'),
                e.enter('literalAutolinkWww'),
                e.check(ge, e.attempt(Ce, e.attempt(Se, i), n), n)(t)
              );
            };
            function i(n) {
              return (
                e.exit('literalAutolinkWww'), e.exit('literalAutolink'), t(n)
              );
            }
          },
          previous: ye,
        },
        be = {
          tokenize: function (e, t, n) {
            const r = this;
            let i = '',
              o = !1;
            return function (t) {
              if (
                (72 === t || 104 === t) &&
                Le.call(r, r.previous) &&
                !xe(r.events)
              )
                return (
                  e.enter('literalAutolink'),
                  e.enter('literalAutolinkHttp'),
                  (i += String.fromCodePoint(t)),
                  e.consume(t),
                  a
                );
              return n(t);
            };
            function a(t) {
              if ((0, s.jv)(t) && i.length < 5)
                return (i += String.fromCodePoint(t)), e.consume(t), a;
              if (58 === t) {
                const n = i.toLowerCase();
                if ('http' === n || 'https' === n) return e.consume(t), c;
              }
              return n(t);
            }
            function c(t) {
              return 47 === t ? (e.consume(t), o ? l : ((o = !0), c)) : n(t);
            }
            function l(t) {
              return null === t ||
                (0, s.Av)(t) ||
                (0, s.z3)(t) ||
                (0, s.B8)(t) ||
                (0, s.Xh)(t)
                ? n(t)
                : e.attempt(Ce, e.attempt(Se, u), n)(t);
            }
            function u(n) {
              return (
                e.exit('literalAutolinkHttp'), e.exit('literalAutolink'), t(n)
              );
            }
          },
          previous: Le,
        },
        De = {
          tokenize: function (e, t, n) {
            const r = this;
            let i, o;
            return function (t) {
              if (!Me(t) || !Pe.call(r, r.previous) || xe(r.events))
                return n(t);
              return (
                e.enter('literalAutolink'),
                e.enter('literalAutolinkEmail'),
                a(t)
              );
            };
            function a(t) {
              return Me(t)
                ? (e.consume(t), a)
                : 64 === t
                  ? (e.consume(t), c)
                  : n(t);
            }
            function c(t) {
              return 46 === t
                ? e.check(Ne, u, l)(t)
                : 45 === t || 95 === t || (0, s.H$)(t)
                  ? ((o = !0), e.consume(t), c)
                  : u(t);
            }
            function l(t) {
              return e.consume(t), (i = !0), c;
            }
            function u(a) {
              return o && i && (0, s.jv)(r.previous)
                ? (e.exit('literalAutolinkEmail'),
                  e.exit('literalAutolink'),
                  t(a))
                : n(a);
            }
          },
          previous: Pe,
        },
        Oe = {};
      let Re = 48;
      for (; Re < 123; )
        (Oe[Re] = De), Re++, 58 === Re ? (Re = 65) : 91 === Re && (Re = 97);
      function ye(e) {
        return (
          null === e ||
          40 === e ||
          42 === e ||
          95 === e ||
          91 === e ||
          93 === e ||
          126 === e ||
          (0, s.z3)(e)
        );
      }
      function Le(e) {
        return !(0, s.jv)(e);
      }
      function Pe(e) {
        return !(47 === e || Me(e));
      }
      function Me(e) {
        return 43 === e || 45 === e || 46 === e || 95 === e || (0, s.H$)(e);
      }
      function xe(e) {
        let t = e.length,
          n = !1;
        for (; t--; ) {
          const r = e[t][1];
          if (
            ('labelLink' === r.type || 'labelImage' === r.type) &&
            !r._balanced
          ) {
            n = !0;
            break;
          }
          if (r._gfmAutolinkLiteralWalkedInto) {
            n = !1;
            break;
          }
        }
        return (
          e.length > 0 &&
            !n &&
            (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
          n
        );
      }
      (Oe[43] = De),
        (Oe[45] = De),
        (Oe[46] = De),
        (Oe[95] = De),
        (Oe[72] = [De, be]),
        (Oe[104] = [De, be]),
        (Oe[87] = [De, ke]),
        (Oe[119] = [De, ke]);
      var ve = n(23402),
        we = n(42761);
      const Be = {
        tokenize: function (e, t, n) {
          const r = this;
          return (0, we.f)(
            e,
            function (e) {
              const i = r.events[r.events.length - 1];
              return i &&
                'gfmFootnoteDefinitionIndent' === i[1].type &&
                4 === i[2].sliceSerialize(i[1], !0).length
                ? t(e)
                : n(e);
            },
            'gfmFootnoteDefinitionIndent',
            5,
          );
        },
        partial: !0,
      };
      function Fe(e, t, n) {
        const r = this;
        let i = r.events.length;
        const s = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
        let o;
        for (; i--; ) {
          const e = r.events[i][1];
          if ('labelImage' === e.type) {
            o = e;
            break;
          }
          if (
            'gfmFootnoteCall' === e.type ||
            'labelLink' === e.type ||
            'label' === e.type ||
            'image' === e.type ||
            'link' === e.type
          )
            break;
        }
        return function (i) {
          if (!o || !o._balanced) return n(i);
          const a = (0, I.d)(r.sliceSerialize({ start: o.end, end: r.now() }));
          if (94 !== a.codePointAt(0) || !s.includes(a.slice(1))) return n(i);
          return (
            e.enter('gfmFootnoteCallLabelMarker'),
            e.consume(i),
            e.exit('gfmFootnoteCallLabelMarker'),
            t(i)
          );
        };
      }
      function He(e, t) {
        let n,
          r = e.length;
        for (; r--; )
          if ('labelImage' === e[r][1].type && 'enter' === e[r][0]) {
            n = e[r][1];
            break;
          }
        (e[r + 1][1].type = 'data'),
          (e[r + 3][1].type = 'gfmFootnoteCallLabelMarker');
        const i = {
            type: 'gfmFootnoteCall',
            start: Object.assign({}, e[r + 3][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
          },
          s = {
            type: 'gfmFootnoteCallMarker',
            start: Object.assign({}, e[r + 3][1].end),
            end: Object.assign({}, e[r + 3][1].end),
          };
        s.end.column++, s.end.offset++, s.end._bufferIndex++;
        const o = {
            type: 'gfmFootnoteCallString',
            start: Object.assign({}, s.end),
            end: Object.assign({}, e[e.length - 1][1].start),
          },
          a = {
            type: 'chunkString',
            contentType: 'string',
            start: Object.assign({}, o.start),
            end: Object.assign({}, o.end),
          },
          c = [
            e[r + 1],
            e[r + 2],
            ['enter', i, t],
            e[r + 3],
            e[r + 4],
            ['enter', s, t],
            ['exit', s, t],
            ['enter', o, t],
            ['enter', a, t],
            ['exit', a, t],
            ['exit', o, t],
            e[e.length - 2],
            e[e.length - 1],
            ['exit', i, t],
          ];
        return e.splice(r, e.length - r + 1, ...c), e;
      }
      function Ue(e, t, n) {
        const r = this,
          i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
        let o,
          a = 0;
        return function (t) {
          return (
            e.enter('gfmFootnoteCall'),
            e.enter('gfmFootnoteCallLabelMarker'),
            e.consume(t),
            e.exit('gfmFootnoteCallLabelMarker'),
            c
          );
        };
        function c(t) {
          return 94 !== t
            ? n(t)
            : (e.enter('gfmFootnoteCallMarker'),
              e.consume(t),
              e.exit('gfmFootnoteCallMarker'),
              e.enter('gfmFootnoteCallString'),
              (e.enter('chunkString').contentType = 'string'),
              l);
        }
        function l(c) {
          if (
            a > 999 ||
            (93 === c && !o) ||
            null === c ||
            91 === c ||
            (0, s.z3)(c)
          )
            return n(c);
          if (93 === c) {
            e.exit('chunkString');
            const s = e.exit('gfmFootnoteCallString');
            return i.includes((0, I.d)(r.sliceSerialize(s)))
              ? (e.enter('gfmFootnoteCallLabelMarker'),
                e.consume(c),
                e.exit('gfmFootnoteCallLabelMarker'),
                e.exit('gfmFootnoteCall'),
                t)
              : n(c);
          }
          return (0, s.z3)(c) || (o = !0), a++, e.consume(c), 92 === c ? u : l;
        }
        function u(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), a++, l)
            : l(t);
        }
      }
      function Ge(e, t, n) {
        const r = this,
          i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
        let o,
          a,
          c = 0;
        return function (t) {
          return (
            (e.enter('gfmFootnoteDefinition')._container = !0),
            e.enter('gfmFootnoteDefinitionLabel'),
            e.enter('gfmFootnoteDefinitionLabelMarker'),
            e.consume(t),
            e.exit('gfmFootnoteDefinitionLabelMarker'),
            l
          );
        };
        function l(t) {
          return 94 === t
            ? (e.enter('gfmFootnoteDefinitionMarker'),
              e.consume(t),
              e.exit('gfmFootnoteDefinitionMarker'),
              e.enter('gfmFootnoteDefinitionLabelString'),
              (e.enter('chunkString').contentType = 'string'),
              u)
            : n(t);
        }
        function u(t) {
          if (
            c > 999 ||
            (93 === t && !a) ||
            null === t ||
            91 === t ||
            (0, s.z3)(t)
          )
            return n(t);
          if (93 === t) {
            e.exit('chunkString');
            const n = e.exit('gfmFootnoteDefinitionLabelString');
            return (
              (o = (0, I.d)(r.sliceSerialize(n))),
              e.enter('gfmFootnoteDefinitionLabelMarker'),
              e.consume(t),
              e.exit('gfmFootnoteDefinitionLabelMarker'),
              e.exit('gfmFootnoteDefinitionLabel'),
              p
            );
          }
          return (0, s.z3)(t) || (a = !0), c++, e.consume(t), 92 === t ? h : u;
        }
        function h(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), c++, u)
            : u(t);
        }
        function p(t) {
          return 58 === t
            ? (e.enter('definitionMarker'),
              e.consume(t),
              e.exit('definitionMarker'),
              i.includes(o) || i.push(o),
              (0, we.f)(e, d, 'gfmFootnoteDefinitionWhitespace'))
            : n(t);
        }
        function d(e) {
          return t(e);
        }
      }
      function ze(e, t, n) {
        return e.check(ve.w, t, e.attempt(Be, t, n));
      }
      function Ye(e) {
        e.exit('gfmFootnoteDefinition');
      }
      var je = n(62888),
        qe = n(62987),
        We = n(63233);
      function Ve(e) {
        let t = (e || {}).singleTilde;
        const n = {
          tokenize: function (e, n, r) {
            const i = this.previous,
              s = this.events;
            let o = 0;
            return function (t) {
              if (126 === i && 'characterEscape' !== s[s.length - 1][1].type)
                return r(t);
              return e.enter('strikethroughSequenceTemporary'), a(t);
            };
            function a(s) {
              const c = (0, qe.r)(i);
              if (126 === s) return o > 1 ? r(s) : (e.consume(s), o++, a);
              if (o < 2 && !t) return r(s);
              const l = e.exit('strikethroughSequenceTemporary'),
                u = (0, qe.r)(s);
              return (
                (l._open = !u || (2 === u && Boolean(c))),
                (l._close = !c || (2 === c && Boolean(u))),
                n(s)
              );
            }
          },
          resolveAll: function (e, t) {
            let n = -1;
            for (; ++n < e.length; )
              if (
                'enter' === e[n][0] &&
                'strikethroughSequenceTemporary' === e[n][1].type &&
                e[n][1]._close
              ) {
                let r = n;
                for (; r--; )
                  if (
                    'exit' === e[r][0] &&
                    'strikethroughSequenceTemporary' === e[r][1].type &&
                    e[r][1]._open &&
                    e[n][1].end.offset - e[n][1].start.offset ==
                      e[r][1].end.offset - e[r][1].start.offset
                  ) {
                    (e[n][1].type = 'strikethroughSequence'),
                      (e[r][1].type = 'strikethroughSequence');
                    const i = {
                        type: 'strikethrough',
                        start: Object.assign({}, e[r][1].start),
                        end: Object.assign({}, e[n][1].end),
                      },
                      s = {
                        type: 'strikethroughText',
                        start: Object.assign({}, e[r][1].end),
                        end: Object.assign({}, e[n][1].start),
                      },
                      o = [
                        ['enter', i, t],
                        ['enter', e[r][1], t],
                        ['exit', e[r][1], t],
                        ['enter', s, t],
                      ],
                      a = t.parser.constructs.insideSpan.null;
                    a &&
                      (0, je.d)(
                        o,
                        o.length,
                        0,
                        (0, We.C)(a, e.slice(r + 1, n), t),
                      ),
                      (0, je.d)(o, o.length, 0, [
                        ['exit', s, t],
                        ['enter', e[n][1], t],
                        ['exit', e[n][1], t],
                        ['exit', i, t],
                      ]),
                      (0, je.d)(e, r - 1, n - r + 3, o),
                      (n = r + o.length - 2);
                    break;
                  }
              }
            n = -1;
            for (; ++n < e.length; )
              'strikethroughSequenceTemporary' === e[n][1].type &&
                (e[n][1].type = 'data');
            return e;
          },
        };
        return (
          null == t && (t = !0),
          {
            text: { 126: n },
            insideSpan: { null: [n] },
            attentionMarkers: { null: [126] },
          }
        );
      }
      class Qe {
        constructor() {
          this.map = [];
        }
        add(e, t, n) {
          !(function (e, t, n, r) {
            let i = 0;
            if (0 === n && 0 === r.length) return;
            for (; i < e.map.length; ) {
              if (e.map[i][0] === t)
                return (e.map[i][1] += n), void e.map[i][2].push(...r);
              i += 1;
            }
            e.map.push([t, n, r]);
          })(this, e, t, n);
        }
        consume(e) {
          if (
            (this.map.sort(function (e, t) {
              return e[0] - t[0];
            }),
            0 === this.map.length)
          )
            return;
          let t = this.map.length;
          const n = [];
          for (; t > 0; )
            (t -= 1),
              n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
              (e.length = this.map[t][0]);
          n.push([...e]), (e.length = 0);
          let r = n.pop();
          for (; r; ) e.push(...r), (r = n.pop());
          this.map.length = 0;
        }
      }
      function Xe(e, t) {
        let n = !1;
        const r = [];
        for (; t < e.length; ) {
          const i = e[t];
          if (n) {
            if ('enter' === i[0])
              'tableContent' === i[1].type &&
                r.push(
                  'tableDelimiterMarker' === e[t + 1][1].type ? 'left' : 'none',
                );
            else if ('tableContent' === i[1].type) {
              if ('tableDelimiterMarker' === e[t - 1][1].type) {
                const e = r.length - 1;
                r[e] = 'left' === r[e] ? 'center' : 'right';
              }
            } else if ('tableDelimiterRow' === i[1].type) break;
          } else
            'enter' === i[0] && 'tableDelimiterRow' === i[1].type && (n = !0);
          t += 1;
        }
        return r;
      }
      function $e(e, t, n) {
        const r = this;
        let i,
          o = 0,
          a = 0;
        return function (e) {
          let t = r.events.length - 1;
          for (; t > -1; ) {
            const e = r.events[t][1].type;
            if ('lineEnding' !== e && 'linePrefix' !== e) break;
            t--;
          }
          const i = t > -1 ? r.events[t][1].type : null,
            s = 'tableHead' === i || 'tableRow' === i ? C : c;
          if (s === C && r.parser.lazy[r.now().line]) return n(e);
          return s(e);
        };
        function c(t) {
          return (
            e.enter('tableHead'),
            e.enter('tableRow'),
            (function (e) {
              if (124 === e) return l(e);
              return (i = !0), (a += 1), l(e);
            })(t)
          );
        }
        function l(t) {
          return null === t
            ? n(t)
            : (0, s.Ch)(t)
              ? a > 1
                ? ((a = 0),
                  (r.interrupt = !0),
                  e.exit('tableRow'),
                  e.enter('lineEnding'),
                  e.consume(t),
                  e.exit('lineEnding'),
                  p)
                : n(t)
              : (0, s.xz)(t)
                ? (0, we.f)(e, l, 'whitespace')(t)
                : ((a += 1),
                  i && ((i = !1), (o += 1)),
                  124 === t
                    ? (e.enter('tableCellDivider'),
                      e.consume(t),
                      e.exit('tableCellDivider'),
                      (i = !0),
                      l)
                    : (e.enter('data'), u(t)));
        }
        function u(t) {
          return null === t || 124 === t || (0, s.z3)(t)
            ? (e.exit('data'), l(t))
            : (e.consume(t), 92 === t ? h : u);
        }
        function h(t) {
          return 92 === t || 124 === t ? (e.consume(t), u) : u(t);
        }
        function p(t) {
          return (
            (r.interrupt = !1),
            r.parser.lazy[r.now().line]
              ? n(t)
              : (e.enter('tableDelimiterRow'),
                (i = !1),
                (0, s.xz)(t)
                  ? (0, we.f)(
                      e,
                      d,
                      'linePrefix',
                      r.parser.constructs.disable.null.includes('codeIndented')
                        ? void 0
                        : 4,
                    )(t)
                  : d(t))
          );
        }
        function d(t) {
          return 45 === t || 58 === t
            ? m(t)
            : 124 === t
              ? ((i = !0),
                e.enter('tableCellDivider'),
                e.consume(t),
                e.exit('tableCellDivider'),
                f)
              : g(t);
        }
        function f(t) {
          return (0, s.xz)(t) ? (0, we.f)(e, m, 'whitespace')(t) : m(t);
        }
        function m(t) {
          return 58 === t
            ? ((a += 1),
              (i = !0),
              e.enter('tableDelimiterMarker'),
              e.consume(t),
              e.exit('tableDelimiterMarker'),
              E)
            : 45 === t
              ? ((a += 1), E(t))
              : null === t || (0, s.Ch)(t)
                ? _(t)
                : g(t);
        }
        function E(t) {
          return 45 === t ? (e.enter('tableDelimiterFiller'), T(t)) : g(t);
        }
        function T(t) {
          return 45 === t
            ? (e.consume(t), T)
            : 58 === t
              ? ((i = !0),
                e.exit('tableDelimiterFiller'),
                e.enter('tableDelimiterMarker'),
                e.consume(t),
                e.exit('tableDelimiterMarker'),
                A)
              : (e.exit('tableDelimiterFiller'), A(t));
        }
        function A(t) {
          return (0, s.xz)(t) ? (0, we.f)(e, _, 'whitespace')(t) : _(t);
        }
        function _(n) {
          return 124 === n
            ? d(n)
            : (null === n || (0, s.Ch)(n)) && i && o === a
              ? (e.exit('tableDelimiterRow'), e.exit('tableHead'), t(n))
              : g(n);
        }
        function g(e) {
          return n(e);
        }
        function C(t) {
          return e.enter('tableRow'), S(t);
        }
        function S(n) {
          return 124 === n
            ? (e.enter('tableCellDivider'),
              e.consume(n),
              e.exit('tableCellDivider'),
              S)
            : null === n || (0, s.Ch)(n)
              ? (e.exit('tableRow'), t(n))
              : (0, s.xz)(n)
                ? (0, we.f)(e, S, 'whitespace')(n)
                : (e.enter('data'), I(n));
        }
        function I(t) {
          return null === t || 124 === t || (0, s.z3)(t)
            ? (e.exit('data'), S(t))
            : (e.consume(t), 92 === t ? N : I);
        }
        function N(t) {
          return 92 === t || 124 === t ? (e.consume(t), I) : I(t);
        }
      }
      function Ke(e, t) {
        let n,
          r,
          i,
          s = -1,
          o = !0,
          a = 0,
          c = [0, 0, 0, 0],
          l = [0, 0, 0, 0],
          u = !1,
          h = 0;
        const p = new Qe();
        for (; ++s < e.length; ) {
          const d = e[s],
            f = d[1];
          'enter' === d[0]
            ? 'tableHead' === f.type
              ? ((u = !1),
                0 !== h && (Je(p, t, h, n, r), (r = void 0), (h = 0)),
                (n = {
                  type: 'table',
                  start: Object.assign({}, f.start),
                  end: Object.assign({}, f.end),
                }),
                p.add(s, 0, [['enter', n, t]]))
              : 'tableRow' === f.type || 'tableDelimiterRow' === f.type
                ? ((o = !0),
                  (i = void 0),
                  (c = [0, 0, 0, 0]),
                  (l = [0, s + 1, 0, 0]),
                  u &&
                    ((u = !1),
                    (r = {
                      type: 'tableBody',
                      start: Object.assign({}, f.start),
                      end: Object.assign({}, f.end),
                    }),
                    p.add(s, 0, [['enter', r, t]])),
                  (a = 'tableDelimiterRow' === f.type ? 2 : r ? 3 : 1))
                : !a ||
                    ('data' !== f.type &&
                      'tableDelimiterMarker' !== f.type &&
                      'tableDelimiterFiller' !== f.type)
                  ? 'tableCellDivider' === f.type &&
                    (o
                      ? (o = !1)
                      : (0 !== c[1] &&
                          ((l[0] = l[1]), (i = Ze(p, t, c, a, void 0, i))),
                        (c = l),
                        (l = [c[1], s, 0, 0])))
                  : ((o = !1),
                    0 === l[2] &&
                      (0 !== c[1] &&
                        ((l[0] = l[1]),
                        (i = Ze(p, t, c, a, void 0, i)),
                        (c = [0, 0, 0, 0])),
                      (l[2] = s)))
            : 'tableHead' === f.type
              ? ((u = !0), (h = s))
              : 'tableRow' === f.type || 'tableDelimiterRow' === f.type
                ? ((h = s),
                  0 !== c[1]
                    ? ((l[0] = l[1]), (i = Ze(p, t, c, a, s, i)))
                    : 0 !== l[1] && (i = Ze(p, t, l, a, s, i)),
                  (a = 0))
                : !a ||
                  ('data' !== f.type &&
                    'tableDelimiterMarker' !== f.type &&
                    'tableDelimiterFiller' !== f.type) ||
                  (l[3] = s);
        }
        for (
          0 !== h && Je(p, t, h, n, r), p.consume(t.events), s = -1;
          ++s < t.events.length;

        ) {
          const e = t.events[s];
          'enter' === e[0] &&
            'table' === e[1].type &&
            (e[1]._align = Xe(t.events, s));
        }
        return e;
      }
      function Ze(e, t, n, r, i, s) {
        const o =
          1 === r ? 'tableHeader' : 2 === r ? 'tableDelimiter' : 'tableData';
        0 !== n[0] &&
          ((s.end = Object.assign({}, et(t.events, n[0]))),
          e.add(n[0], 0, [['exit', s, t]]));
        const a = et(t.events, n[1]);
        if (
          ((s = {
            type: o,
            start: Object.assign({}, a),
            end: Object.assign({}, a),
          }),
          e.add(n[1], 0, [['enter', s, t]]),
          0 !== n[2])
        ) {
          const i = et(t.events, n[2]),
            s = et(t.events, n[3]),
            o = {
              type: 'tableContent',
              start: Object.assign({}, i),
              end: Object.assign({}, s),
            };
          if ((e.add(n[2], 0, [['enter', o, t]]), 2 !== r)) {
            const r = t.events[n[2]],
              i = t.events[n[3]];
            if (
              ((r[1].end = Object.assign({}, i[1].end)),
              (r[1].type = 'chunkText'),
              (r[1].contentType = 'text'),
              n[3] > n[2] + 1)
            ) {
              const t = n[2] + 1,
                r = n[3] - n[2] - 1;
              e.add(t, r, []);
            }
          }
          e.add(n[3] + 1, 0, [['exit', o, t]]);
        }
        return (
          void 0 !== i &&
            ((s.end = Object.assign({}, et(t.events, i))),
            e.add(i, 0, [['exit', s, t]]),
            (s = void 0)),
          s
        );
      }
      function Je(e, t, n, r, i) {
        const s = [],
          o = et(t.events, n);
        i && ((i.end = Object.assign({}, o)), s.push(['exit', i, t])),
          (r.end = Object.assign({}, o)),
          s.push(['exit', r, t]),
          e.add(n + 1, 0, s);
      }
      function et(e, t) {
        const n = e[t],
          r = 'enter' === n[0] ? 'start' : 'end';
        return n[1][r];
      }
      const tt = {
        tokenize: function (e, t, n) {
          const r = this;
          return function (t) {
            if (null !== r.previous || !r._gfmTasklistFirstContentOfListItem)
              return n(t);
            return (
              e.enter('taskListCheck'),
              e.enter('taskListCheckMarker'),
              e.consume(t),
              e.exit('taskListCheckMarker'),
              i
            );
          };
          function i(t) {
            return (0, s.z3)(t)
              ? (e.enter('taskListCheckValueUnchecked'),
                e.consume(t),
                e.exit('taskListCheckValueUnchecked'),
                o)
              : 88 === t || 120 === t
                ? (e.enter('taskListCheckValueChecked'),
                  e.consume(t),
                  e.exit('taskListCheckValueChecked'),
                  o)
                : n(t);
          }
          function o(t) {
            return 93 === t
              ? (e.enter('taskListCheckMarker'),
                e.consume(t),
                e.exit('taskListCheckMarker'),
                e.exit('taskListCheck'),
                a)
              : n(t);
          }
          function a(r) {
            return (0, s.Ch)(r)
              ? t(r)
              : (0, s.xz)(r)
                ? e.check({ tokenize: nt }, t, n)(r)
                : n(r);
          }
        },
      };
      function nt(e, t, n) {
        return (0, we.f)(
          e,
          function (e) {
            return null === e ? n(e) : t(e);
          },
          'whitespace',
        );
      }
      const rt = {};
      function it(e) {
        const t = e || rt,
          n = this.data(),
          r = n.micromarkExtensions || (n.micromarkExtensions = []),
          i = n.fromMarkdownExtensions || (n.fromMarkdownExtensions = []),
          s = n.toMarkdownExtensions || (n.toMarkdownExtensions = []);
        r.push(
          (function (e) {
            return (0, _e.W)([
              { text: Oe },
              {
                document: {
                  91: {
                    tokenize: Ge,
                    continuation: { tokenize: ze },
                    exit: Ye,
                  },
                },
                text: {
                  91: { tokenize: Ue },
                  93: { add: 'after', tokenize: Fe, resolveTo: He },
                },
              },
              Ve(e),
              { flow: { null: { tokenize: $e, resolveAll: Ke } } },
              { text: { 91: tt } },
            ]);
          })(t),
        ),
          i.push([
            {
              transforms: [_],
              enter: {
                literalAutolink: d,
                literalAutolinkEmail: f,
                literalAutolinkHttp: f,
                literalAutolinkWww: f,
              },
              exit: {
                literalAutolink: A,
                literalAutolinkEmail: T,
                literalAutolinkHttp: m,
                literalAutolinkWww: E,
              },
            },
            {
              enter: {
                gfmFootnoteDefinition: N,
                gfmFootnoteDefinitionLabelString: k,
                gfmFootnoteCall: O,
                gfmFootnoteCallString: R,
              },
              exit: {
                gfmFootnoteDefinition: D,
                gfmFootnoteDefinitionLabelString: b,
                gfmFootnoteCall: L,
                gfmFootnoteCallString: y,
              },
            },
            {
              canContainEols: ['delete'],
              enter: { strikethrough: w },
              exit: { strikethrough: B },
            },
            {
              enter: {
                table: ce,
                tableData: pe,
                tableHeader: pe,
                tableRow: ue,
              },
              exit: {
                codeText: de,
                table: le,
                tableData: he,
                tableHeader: he,
                tableRow: he,
              },
            },
            {
              exit: {
                taskListCheckValueChecked: Ee,
                taskListCheckValueUnchecked: Ee,
                paragraph: Te,
              },
            },
          ]),
          s.push(
            (function (e) {
              return {
                extensions: [
                  {
                    unsafe: [
                      {
                        character: '@',
                        before: '[+\\-.\\w]',
                        after: '[\\-.\\w]',
                        inConstruct: h,
                        notInConstruct: p,
                      },
                      {
                        character: '.',
                        before: '[Ww]',
                        after: '[\\-.\\w]',
                        inConstruct: h,
                        notInConstruct: p,
                      },
                      {
                        character: ':',
                        before: '[ps]',
                        after: '\\/',
                        inConstruct: h,
                        notInConstruct: p,
                      },
                    ],
                  },
                  {
                    unsafe: [
                      {
                        character: '[',
                        inConstruct: ['phrasing', 'label', 'reference'],
                      },
                    ],
                    handlers: { footnoteDefinition: M, footnoteReference: P },
                  },
                  {
                    unsafe: [
                      {
                        character: '~',
                        inConstruct: 'phrasing',
                        notInConstruct: v,
                      },
                    ],
                    handlers: { delete: F },
                  },
                  me(e),
                  {
                    unsafe: [{ atBreak: !0, character: '-', after: '[:|-]' }],
                    handlers: { listItem: Ae },
                  },
                ],
              };
            })(t),
          );
      }
    },
    50342: function (e, t, n) {
      'use strict';
      function r(e) {
        const t = String(e || '').trim();
        return t ? t.split(/[ \t\n\r\f]+/g) : [];
      }
      function i(e) {
        return e.join(' ').trim();
      }
      n.d(t, {
        P: function () {
          return i;
        },
        Q: function () {
          return r;
        },
      });
    },
    96093: function (e, t, n) {
      'use strict';
      n.d(t, {
        O: function () {
          return r;
        },
      });
      const r = function (e) {
        if (null == e) return s;
        if ('function' == typeof e) return i(e);
        if ('object' == typeof e)
          return Array.isArray(e)
            ? (function (e) {
                const t = [];
                let n = -1;
                for (; ++n < e.length; ) t[n] = r(e[n]);
                return i(s);
                function s(...e) {
                  let n = -1;
                  for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
                  return !1;
                }
              })(e)
            : (function (e) {
                const t = e;
                return i(n);
                function n(n) {
                  const r = n;
                  let i;
                  for (i in e) if (r[i] !== t[i]) return !1;
                  return !0;
                }
              })(e);
        if ('string' == typeof e)
          return (function (e) {
            return i(t);
            function t(t) {
              return t && t.type === e;
            }
          })(e);
        throw new Error('Expected function, string, or object as test');
      };
      function i(e) {
        return function (t, n, r) {
          return Boolean(
            o(t) &&
              e.call(this, t, 'number' == typeof n ? n : void 0, r || void 0),
          );
        };
      }
      function s() {
        return !0;
      }
      function o(e) {
        return null !== e && 'object' == typeof e && 'type' in e;
      }
    },
    3980: function (e, t, n) {
      'use strict';
      n.d(t, {
        FK: function () {
          return o;
        },
        Pk: function () {
          return i;
        },
        rb: function () {
          return r;
        },
      });
      const r = s('end'),
        i = s('start');
      function s(e) {
        return function (t) {
          const n = (t && t.position && t.position[e]) || {};
          if (
            'number' == typeof n.line &&
            n.line > 0 &&
            'number' == typeof n.column &&
            n.column > 0
          )
            return {
              line: n.line,
              column: n.column,
              offset:
                'number' == typeof n.offset && n.offset > -1
                  ? n.offset
                  : void 0,
            };
        };
      }
      function o(e) {
        const t = i(e),
          n = r(e);
        if (t && n) return { start: t, end: n };
      }
    },
    88718: function (e, t, n) {
      'use strict';
      n.d(t, {
        BK: function () {
          return o;
        },
        AM: function () {
          return a;
        },
        S4: function () {
          return c;
        },
      });
      var r = n(96093);
      const i = [],
        s = !0,
        o = !1,
        a = 'skip';
      function c(e, t, n, c) {
        let l;
        'function' == typeof t && 'function' != typeof n
          ? ((c = n), (n = t))
          : (l = t);
        const u = (0, r.O)(l),
          h = c ? -1 : 1;
        !(function e(r, l, p) {
          const d = r && 'object' == typeof r ? r : {};
          if ('string' == typeof d.type) {
            const e =
              'string' == typeof d.tagName
                ? d.tagName
                : 'string' == typeof d.name
                  ? d.name
                  : void 0;
            Object.defineProperty(f, 'name', {
              value: 'node (' + r.type + (e ? '<' + e + '>' : '') + ')',
            });
          }
          return f;
          function f() {
            let d,
              f,
              m,
              E = i;
            if (
              (!t || u(r, l, p[p.length - 1] || void 0)) &&
              ((E = (function (e) {
                if (Array.isArray(e)) return e;
                if ('number' == typeof e) return [s, e];
                return null == e ? i : [e];
              })(n(r, p))),
              E[0] === o)
            )
              return E;
            if ('children' in r && r.children) {
              const t = r;
              if (t.children && E[0] !== a)
                for (
                  f = (c ? t.children.length : -1) + h, m = p.concat(t);
                  f > -1 && f < t.children.length;

                ) {
                  const n = t.children[f];
                  if (((d = e(n, f, m)()), d[0] === o)) return d;
                  f = 'number' == typeof d[1] ? d[1] : f + h;
                }
            }
            return E;
          }
        })(e, void 0, [])();
      }
    },
    21623: function (e, t, n) {
      'use strict';
      n.d(t, {
        Vn: function () {
          return i;
        },
      });
      var r = n(88718);
      function i(e, t, n, i) {
        let s, o, a;
        'function' == typeof t && 'function' != typeof n
          ? ((o = void 0), (a = t), (s = n))
          : ((o = t), (a = n), (s = i)),
          (0, r.S4)(
            e,
            o,
            function (e, t) {
              const n = t[t.length - 1],
                r = n ? n.children.indexOf(e) : void 0;
              return a(e, r, n);
            },
            s,
          );
      }
    },
    49911: function (e, t, n) {
      'use strict';
      n.d(t, {
        t: function () {
          return r;
        },
      });
      const r = {
        html: 'http://www.w3.org/1999/xhtml',
        mathml: 'http://www.w3.org/1998/Math/MathML',
        svg: 'http://www.w3.org/2000/svg',
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/',
      };
    },
    77867: function (e, t, n) {
      'use strict';
      n.d(t, {
        z: function () {
          return i;
        },
      });
      const r = {}.hasOwnProperty;
      function i(e, t) {
        const n = t || {};
        function i(t, ...n) {
          let s = i.invalid;
          const o = i.handlers;
          if (t && r.call(t, e)) {
            const n = String(t[e]);
            s = r.call(o, n) ? o[n] : i.unknown;
          }
          if (s) return s.call(this, t, ...n);
        }
        return (
          (i.handlers = n.handlers || {}),
          (i.invalid = n.invalid),
          (i.unknown = n.unknown),
          i
        );
      }
    },
  },
]);
//# sourceMappingURL=8058.49ccfa28.async.js.map
