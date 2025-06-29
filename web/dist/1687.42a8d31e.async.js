'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [1687],
  {
    21687: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return T;
        },
      });
      var n = a(93967),
        s = a.n(n),
        i = a(62435),
        l = a(53124),
        r = a(98423);
      var o = (e) => {
          const { prefixCls: t, className: a, style: n, size: l, shape: r } = e,
            o = s()({ [`${t}-lg`]: 'large' === l, [`${t}-sm`]: 'small' === l }),
            c = s()({
              [`${t}-circle`]: 'circle' === r,
              [`${t}-square`]: 'square' === r,
              [`${t}-round`]: 'round' === r,
            }),
            g = i.useMemo(
              () =>
                'number' == typeof l
                  ? { width: l, height: l, lineHeight: `${l}px` }
                  : {},
              [l],
            );
          return i.createElement('span', {
            className: s()(t, o, c, a),
            style: Object.assign(Object.assign({}, g), n),
          });
        },
        c = a(54548),
        g = a(91945),
        d = a(45503);
      const u = new c.E4('ant-skeleton-loading', {
          '0%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0 50%' },
        }),
        m = (e) => ({ height: e, lineHeight: (0, c.bf)(e) }),
        b = (e) => Object.assign({ width: e }, m(e)),
        $ = (e) => ({
          background: e.skeletonLoadingBackground,
          backgroundSize: '400% 100%',
          animationName: u,
          animationDuration: e.skeletonLoadingMotionDuration,
          animationTimingFunction: 'ease',
          animationIterationCount: 'infinite',
        }),
        h = (e, t) =>
          Object.assign(
            { width: t(e).mul(5).equal(), minWidth: t(e).mul(5).equal() },
            m(e),
          ),
        p = (e) => {
          const {
            skeletonAvatarCls: t,
            gradientFromColor: a,
            controlHeight: n,
            controlHeightLG: s,
            controlHeightSM: i,
          } = e;
          return {
            [`${t}`]: Object.assign(
              { display: 'inline-block', verticalAlign: 'top', background: a },
              b(n),
            ),
            [`${t}${t}-circle`]: { borderRadius: '50%' },
            [`${t}${t}-lg`]: Object.assign({}, b(s)),
            [`${t}${t}-sm`]: Object.assign({}, b(i)),
          };
        },
        C = (e) => {
          const {
            controlHeight: t,
            borderRadiusSM: a,
            skeletonInputCls: n,
            controlHeightLG: s,
            controlHeightSM: i,
            gradientFromColor: l,
            calc: r,
          } = e;
          return {
            [`${n}`]: Object.assign(
              {
                display: 'inline-block',
                verticalAlign: 'top',
                background: l,
                borderRadius: a,
              },
              h(t, r),
            ),
            [`${n}-lg`]: Object.assign({}, h(s, r)),
            [`${n}-sm`]: Object.assign({}, h(i, r)),
          };
        },
        v = (e) => Object.assign({ width: e }, m(e)),
        k = (e) => {
          const {
            skeletonImageCls: t,
            imageSizeBase: a,
            gradientFromColor: n,
            borderRadiusSM: s,
            calc: i,
          } = e;
          return {
            [`${t}`]: Object.assign(
              Object.assign(
                {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  verticalAlign: 'top',
                  background: n,
                  borderRadius: s,
                },
                v(i(a).mul(2).equal()),
              ),
              {
                [`${t}-path`]: { fill: '#bfbfbf' },
                [`${t}-svg`]: Object.assign(Object.assign({}, v(a)), {
                  maxWidth: i(a).mul(4).equal(),
                  maxHeight: i(a).mul(4).equal(),
                }),
                [`${t}-svg${t}-svg-circle`]: { borderRadius: '50%' },
              },
            ),
            [`${t}${t}-circle`]: { borderRadius: '50%' },
          };
        },
        f = (e, t, a) => {
          const { skeletonButtonCls: n } = e;
          return {
            [`${a}${n}-circle`]: { width: t, minWidth: t, borderRadius: '50%' },
            [`${a}${n}-round`]: { borderRadius: t },
          };
        },
        j = (e, t) =>
          Object.assign(
            { width: t(e).mul(2).equal(), minWidth: t(e).mul(2).equal() },
            m(e),
          ),
        O = (e) => {
          const {
            borderRadiusSM: t,
            skeletonButtonCls: a,
            controlHeight: n,
            controlHeightLG: s,
            controlHeightSM: i,
            gradientFromColor: l,
            calc: r,
          } = e;
          return Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {
                      [`${a}`]: Object.assign(
                        {
                          display: 'inline-block',
                          verticalAlign: 'top',
                          background: l,
                          borderRadius: t,
                          width: r(n).mul(2).equal(),
                          minWidth: r(n).mul(2).equal(),
                        },
                        j(n, r),
                      ),
                    },
                    f(e, n, a),
                  ),
                  { [`${a}-lg`]: Object.assign({}, j(s, r)) },
                ),
                f(e, s, `${a}-lg`),
              ),
              { [`${a}-sm`]: Object.assign({}, j(i, r)) },
            ),
            f(e, i, `${a}-sm`),
          );
        },
        w = (e) => {
          const {
            componentCls: t,
            skeletonAvatarCls: a,
            skeletonTitleCls: n,
            skeletonParagraphCls: s,
            skeletonButtonCls: i,
            skeletonInputCls: l,
            skeletonImageCls: r,
            controlHeight: o,
            controlHeightLG: c,
            controlHeightSM: g,
            gradientFromColor: d,
            padding: u,
            marginSM: m,
            borderRadius: h,
            titleHeight: v,
            blockRadius: f,
            paragraphLiHeight: j,
            controlHeightXS: w,
            paragraphMarginTop: x,
          } = e;
          return {
            [`${t}`]: {
              display: 'table',
              width: '100%',
              [`${t}-header`]: {
                display: 'table-cell',
                paddingInlineEnd: u,
                verticalAlign: 'top',
                [`${a}`]: Object.assign(
                  {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    background: d,
                  },
                  b(o),
                ),
                [`${a}-circle`]: { borderRadius: '50%' },
                [`${a}-lg`]: Object.assign({}, b(c)),
                [`${a}-sm`]: Object.assign({}, b(g)),
              },
              [`${t}-content`]: {
                display: 'table-cell',
                width: '100%',
                verticalAlign: 'top',
                [`${n}`]: {
                  width: '100%',
                  height: v,
                  background: d,
                  borderRadius: f,
                  [`+ ${s}`]: { marginBlockStart: g },
                },
                [`${s}`]: {
                  padding: 0,
                  '> li': {
                    width: '100%',
                    height: j,
                    listStyle: 'none',
                    background: d,
                    borderRadius: f,
                    '+ li': { marginBlockStart: w },
                  },
                },
                [`${s}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
                  width: '61%',
                },
              },
              [`&-round ${t}-content`]: {
                [`${n}, ${s} > li`]: { borderRadius: h },
              },
            },
            [`${t}-with-avatar ${t}-content`]: {
              [`${n}`]: {
                marginBlockStart: m,
                [`+ ${s}`]: { marginBlockStart: x },
              },
            },
            [`${t}${t}-element`]: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    { display: 'inline-block', width: 'auto' },
                    O(e),
                  ),
                  p(e),
                ),
                C(e),
              ),
              k(e),
            ),
            [`${t}${t}-block`]: {
              width: '100%',
              [`${i}`]: { width: '100%' },
              [`${l}`]: { width: '100%' },
            },
            [`${t}${t}-active`]: {
              [`\n        ${n},\n        ${s} > li,\n        ${a},\n        ${i},\n        ${l},\n        ${r}\n      `]:
                Object.assign({}, $(e)),
            },
          };
        };
      var x = (0, g.I$)(
        'Skeleton',
        (e) => {
          const { componentCls: t, calc: a } = e,
            n = (0, d.TS)(e, {
              skeletonAvatarCls: `${t}-avatar`,
              skeletonTitleCls: `${t}-title`,
              skeletonParagraphCls: `${t}-paragraph`,
              skeletonButtonCls: `${t}-button`,
              skeletonInputCls: `${t}-input`,
              skeletonImageCls: `${t}-image`,
              imageSizeBase: a(e.controlHeight).mul(1.5).equal(),
              borderRadius: 100,
              skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
              skeletonLoadingMotionDuration: '1.4s',
            });
          return [w(n)];
        },
        (e) => {
          const { colorFillContent: t, colorFill: a } = e;
          return {
            color: t,
            colorGradientEnd: a,
            gradientFromColor: t,
            gradientToColor: a,
            titleHeight: e.controlHeight / 2,
            blockRadius: e.borderRadiusSM,
            paragraphMarginTop: e.marginLG + e.marginXXS,
            paragraphLiHeight: e.controlHeight / 2,
          };
        },
        {
          deprecatedTokens: [
            ['color', 'gradientFromColor'],
            ['colorGradientEnd', 'gradientToColor'],
          ],
        },
      );
      var E = (e) => {
        const {
            prefixCls: t,
            className: a,
            rootClassName: n,
            active: c,
            shape: g = 'circle',
            size: d = 'default',
          } = e,
          { getPrefixCls: u } = i.useContext(l.E_),
          m = u('skeleton', t),
          [b, $, h] = x(m),
          p = (0, r.Z)(e, ['prefixCls', 'className']),
          C = s()(m, `${m}-element`, { [`${m}-active`]: c }, a, n, $, h);
        return b(
          i.createElement(
            'div',
            { className: C },
            i.createElement(
              o,
              Object.assign({ prefixCls: `${m}-avatar`, shape: g, size: d }, p),
            ),
          ),
        );
      };
      var N = (e) => {
        const {
            prefixCls: t,
            className: a,
            rootClassName: n,
            active: c,
            block: g = !1,
            size: d = 'default',
          } = e,
          { getPrefixCls: u } = i.useContext(l.E_),
          m = u('skeleton', t),
          [b, $, h] = x(m),
          p = (0, r.Z)(e, ['prefixCls']),
          C = s()(
            m,
            `${m}-element`,
            { [`${m}-active`]: c, [`${m}-block`]: g },
            a,
            n,
            $,
            h,
          );
        return b(
          i.createElement(
            'div',
            { className: C },
            i.createElement(
              o,
              Object.assign({ prefixCls: `${m}-button`, size: d }, p),
            ),
          ),
        );
      };
      var y = (e) => {
        const {
            prefixCls: t,
            className: a,
            rootClassName: n,
            style: r,
            active: o,
          } = e,
          { getPrefixCls: c } = i.useContext(l.E_),
          g = c('skeleton', t),
          [d, u, m] = x(g),
          b = s()(g, `${g}-element`, { [`${g}-active`]: o }, a, n, u, m);
        return d(
          i.createElement(
            'div',
            { className: b },
            i.createElement(
              'div',
              { className: s()(`${g}-image`, a), style: r },
              i.createElement(
                'svg',
                {
                  viewBox: '0 0 1098 1024',
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: `${g}-image-svg`,
                },
                i.createElement('path', {
                  d: 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z',
                  className: `${g}-image-path`,
                }),
              ),
            ),
          ),
        );
      };
      var H = (e) => {
          const {
              prefixCls: t,
              className: a,
              rootClassName: n,
              active: c,
              block: g,
              size: d = 'default',
            } = e,
            { getPrefixCls: u } = i.useContext(l.E_),
            m = u('skeleton', t),
            [b, $, h] = x(m),
            p = (0, r.Z)(e, ['prefixCls']),
            C = s()(
              m,
              `${m}-element`,
              { [`${m}-active`]: c, [`${m}-block`]: g },
              a,
              n,
              $,
              h,
            );
          return b(
            i.createElement(
              'div',
              { className: C },
              i.createElement(
                o,
                Object.assign({ prefixCls: `${m}-input`, size: d }, p),
              ),
            ),
          );
        },
        q = a(87462),
        z = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z',
                },
              },
            ],
          },
          name: 'dot-chart',
          theme: 'outlined',
        },
        R = a(84089),
        S = function (e, t) {
          return i.createElement(R.Z, (0, q.Z)({}, e, { ref: t, icon: z }));
        };
      var M = i.forwardRef(S);
      var B = (e) => {
          const {
              prefixCls: t,
              className: a,
              rootClassName: n,
              style: r,
              active: o,
              children: c,
            } = e,
            { getPrefixCls: g } = i.useContext(l.E_),
            d = g('skeleton', t),
            [u, m, b] = x(d),
            $ = s()(d, `${d}-element`, { [`${d}-active`]: o }, m, a, n, b),
            h = null != c ? c : i.createElement(M, null);
          return u(
            i.createElement(
              'div',
              { className: $ },
              i.createElement(
                'div',
                { className: s()(`${d}-image`, a), style: r },
                h,
              ),
            ),
          );
        },
        A = a(74902);
      var F = (e) => {
        const t = (t) => {
            const { width: a, rows: n = 2 } = e;
            return Array.isArray(a) ? a[t] : n - 1 === t ? a : void 0;
          },
          { prefixCls: a, className: n, style: l, rows: r } = e,
          o = (0, A.Z)(Array(r)).map((e, a) =>
            i.createElement('li', { key: a, style: { width: t(a) } }),
          );
        return i.createElement('ul', { className: s()(a, n), style: l }, o);
      };
      var I = (e) => {
        let { prefixCls: t, className: a, width: n, style: l } = e;
        return i.createElement('h3', {
          className: s()(t, a),
          style: Object.assign({ width: n }, l),
        });
      };
      function L(e) {
        return e && 'object' == typeof e ? e : {};
      }
      const P = (e) => {
        const {
            prefixCls: t,
            loading: a,
            className: n,
            rootClassName: r,
            style: c,
            children: g,
            avatar: d = !1,
            title: u = !0,
            paragraph: m = !0,
            active: b,
            round: $,
          } = e,
          { getPrefixCls: h, direction: p, skeleton: C } = i.useContext(l.E_),
          v = h('skeleton', t),
          [k, f, j] = x(v);
        if (a || !('loading' in e)) {
          const e = !!d,
            t = !!u,
            a = !!m;
          let l, g;
          if (e) {
            const e = Object.assign(
              Object.assign(
                { prefixCls: `${v}-avatar` },
                (function (e, t) {
                  return e && !t
                    ? { size: 'large', shape: 'square' }
                    : { size: 'large', shape: 'circle' };
                })(t, a),
              ),
              L(d),
            );
            l = i.createElement(
              'div',
              { className: `${v}-header` },
              i.createElement(o, Object.assign({}, e)),
            );
          }
          if (t || a) {
            let n, s;
            if (t) {
              const t = Object.assign(
                Object.assign(
                  { prefixCls: `${v}-title` },
                  (function (e, t) {
                    return !e && t
                      ? { width: '38%' }
                      : e && t
                        ? { width: '50%' }
                        : {};
                  })(e, a),
                ),
                L(u),
              );
              n = i.createElement(I, Object.assign({}, t));
            }
            if (a) {
              const a = Object.assign(
                Object.assign(
                  { prefixCls: `${v}-paragraph` },
                  (function (e, t) {
                    const a = {};
                    return (
                      (e && t) || (a.width = '61%'),
                      (a.rows = !e && t ? 3 : 2),
                      a
                    );
                  })(e, t),
                ),
                L(m),
              );
              s = i.createElement(F, Object.assign({}, a));
            }
            g = i.createElement('div', { className: `${v}-content` }, n, s);
          }
          const h = s()(
            v,
            {
              [`${v}-with-avatar`]: e,
              [`${v}-active`]: b,
              [`${v}-rtl`]: 'rtl' === p,
              [`${v}-round`]: $,
            },
            null == C ? void 0 : C.className,
            n,
            r,
            f,
            j,
          );
          return k(
            i.createElement(
              'div',
              {
                className: h,
                style: Object.assign(
                  Object.assign({}, null == C ? void 0 : C.style),
                  c,
                ),
              },
              l,
              g,
            ),
          );
        }
        return void 0 !== g ? g : null;
      };
      (P.Button = N),
        (P.Avatar = E),
        (P.Input = H),
        (P.Image = y),
        (P.Node = B);
      var T = P;
    },
  },
]);
//# sourceMappingURL=1687.42a8d31e.async.js.map
