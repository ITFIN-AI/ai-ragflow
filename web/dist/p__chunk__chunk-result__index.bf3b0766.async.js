/*! For license information please see p__chunk__chunk-result__index.bf3b0766.async.js.LICENSE.txt */
'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [9860],
  {
    87030: function (e, n, t) {
      t.d(n, {
        Ol: function () {
          return v;
        },
        SZ: function () {
          return N;
        },
        Zb: function () {
          return h;
        },
        aY: function () {
          return g;
        },
        ll: function () {
          return b;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(13769),
        c = t.n(s),
        o = t(62435),
        l = t(27080),
        i = t(86074),
        d = ['className'],
        u = ['className'],
        f = ['className'],
        x = ['className'],
        m = ['className'],
        p = ['className'],
        h = o.forwardRef(function (e, n) {
          var t = e.className,
            r = c()(e, d);
          return (0, i.jsx)(
            'div',
            a()(
              {
                ref: n,
                className: (0, l.cn)(
                  'rounded-lg  bg-background-card  text-card-foreground shadow-sm',
                  t,
                ),
              },
              r,
            ),
          );
        });
      h.displayName = 'Card';
      var v = o.forwardRef(function (e, n) {
        var t = e.className,
          r = c()(e, u);
        return (0, i.jsx)(
          'div',
          a()(
            {
              ref: n,
              className: (0, l.cn)('flex flex-col space-y-1.5 p-6', t),
            },
            r,
          ),
        );
      });
      v.displayName = 'CardHeader';
      var b = o.forwardRef(function (e, n) {
        var t = e.className,
          r = c()(e, f);
        return (0, i.jsx)(
          'div',
          a()(
            {
              ref: n,
              className: (0, l.cn)(
                'text-2xl font-semibold leading-none tracking-tight',
                t,
              ),
            },
            r,
          ),
        );
      });
      b.displayName = 'CardTitle';
      var N = o.forwardRef(function (e, n) {
        var t = e.className,
          r = c()(e, x);
        return (0, i.jsx)(
          'div',
          a()(
            {
              ref: n,
              className: (0, l.cn)('text-sm text-muted-foreground', t),
            },
            r,
          ),
        );
      });
      N.displayName = 'CardDescription';
      var g = o.forwardRef(function (e, n) {
        var t = e.className,
          r = c()(e, m);
        return (0, i.jsx)(
          'div',
          a()({ ref: n, className: (0, l.cn)('p-6 pt-0', t) }, r),
        );
      });
      (g.displayName = 'CardContent'),
        (o.forwardRef(function (e, n) {
          var t = e.className,
            r = c()(e, p);
          return (0, i.jsx)(
            'div',
            a()(
              { ref: n, className: (0, l.cn)('flex items-center p-6 pt-0', t) },
              r,
            ),
          );
        }).displayName = 'CardFooter');
    },
    2834: function (e, n, t) {
      t.d(n, {
        r: function () {
          return f;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(13769),
        c = t.n(s),
        o = t(60761),
        l = t(62435),
        i = t(27080),
        d = t(86074),
        u = ['className'],
        f = l.forwardRef(function (e, n) {
          var t = e.className,
            r = c()(e, u);
          return (0, d.jsx)(
            o.fC,
            a()(
              a()(
                {
                  className: (0, i.cn)(
                    'peer inline-flex h-3.5 w-6 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-background-checked data-[state=unchecked]:bg-text-sub-title',
                    t,
                  ),
                },
                r,
              ),
              {},
              {
                ref: n,
                children: (0, d.jsx)(o.bU, {
                  className: (0, i.cn)(
                    'pointer-events-none block size-3 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-2 data-[state=unchecked]:translate-x-0',
                  ),
                }),
              },
            ),
          );
        });
      f.displayName = o.fC.displayName;
    },
    59087: function (e, n, t) {
      t.d(n, {
        d: function () {
          return l;
        },
        M: function () {
          return o;
        },
      });
      var r = t(87030),
        a = t(2834);
      const s = (0, t(91373).Z)('annoyed', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['path', { d: 'M8 15h8', key: '45n4r' }],
        ['path', { d: 'M8 9h2', key: '1g203m' }],
        ['path', { d: 'M14 9h2', key: '116p9w' }],
      ]);
      var c = t(86074);
      function o(e) {
        var n = e.page,
          t = e.content;
        return (0, c.jsx)(r.Zb, {
          className:
            'bg-colors-outline-neutral-standard border-colors-outline-neutral-strong rounded-3xl',
          children: (0, c.jsxs)(r.aY, {
            className: 'p-4',
            children: [
              (0, c.jsx)('p', {
                className: 'text-colors-text-neutral-standard text-base',
                children: n,
              }),
              (0, c.jsx)('div', {
                className: 'text-colors-text-neutral-strong text-lg mt-2',
                children: t,
              }),
            ],
          }),
        });
      }
      function l(e) {
        var n = e.content;
        return (0, c.jsx)(r.Zb, {
          className:
            'bg-colors-outline-neutral-standard border-colors-outline-neutral-strong rounded-3xl',
          children: (0, c.jsxs)(r.aY, {
            className: 'p-4',
            children: [
              (0, c.jsxs)('div', {
                className: 'flex justify-between items-center',
                children: [
                  (0, c.jsx)(s, {}),
                  (0, c.jsxs)('div', {
                    className: 'flex items-center space-x-2',
                    children: [
                      (0, c.jsx)(a.r, {}),
                      (0, c.jsx)('span', {
                        className: 'text-colors-text-neutral-strong',
                        children: 'Active',
                      }),
                    ],
                  }),
                ],
              }),
              (0, c.jsx)('div', {
                className:
                  'text-colors-text-neutral-strong text-lg mt-2 line-clamp-4',
                children: n,
              }),
            ],
          }),
        });
      }
    },
    57195: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return i;
          },
        });
      var r = t(5273),
        a = t(59087),
        s = t(48105),
        c = t(86074),
        o = new Array(10).fill({
          page: 'page 1',
          content:
            'Word并不像 TeX／LaTeX为我们提供了合适的定理环境，因此需要我们另想办法。\n  \n  第1节 自定义定理环境\n  我们已经使用了“定理样式”作为定理排版的样式，如：\n  \n  定理1.1．对顶角相等。\n  \n  如果大家需要其他的如引理，公理，定义等环境可以仿照定义。\n  \n  定理1.2．三边对应相等的三角形全等。\n  \n  我们将这个过程也定义成了宏，在工具栏Theorem里面。书写过程如下：先写好定理本身，然后在该段落处放置光标，打开Theorem工具栏，点SetTheorem，即可见到效果。请尝试下面一个例子：',
        });
      function l() {
        return (0, c.jsxs)('div', {
          className: 'flex-1 py-6 border-l space-y-6',
          children: [
            (0, c.jsx)(s.Z, { text: 'Parsed  results' }),
            (0, c.jsx)('div', {
              className: 'space-y-6  overflow-auto max-h-[87vh] px-9',
              children: o.map(function (e, n) {
                return (0, c.jsx)(a.M, { page: e.page, content: e.content }, n);
              }),
            }),
          ],
        });
      }
      function i() {
        return (0, c.jsxs)('section', {
          className: 'flex',
          children: [
            (0, c.jsx)(l, {}),
            (0, c.jsx)('div', {
              className: 'flex-1',
              children: (0, c.jsx)(r.Z, {}),
            }),
          ],
        });
      }
    },
    48105: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = t(57636),
        a = t(76915),
        s = t(86074);
      function c(e) {
        var n = e.text;
        return (0, s.jsxs)('div', {
          className: 'flex justify-between px-9',
          children: [
            (0, s.jsx)('span', {
              className: 'text-colors-text-neutral-strong text-3xl font-bold',
              children: n,
            }),
            (0, s.jsxs)('div', {
              className: 'flex items-center gap-3',
              children: [
                (0, s.jsx)(r.zx, {
                  variant: 'icon',
                  size: 'icon',
                  children: (0, s.jsx)(a.Z, {}),
                }),
                (0, s.jsx)(r.zx, {
                  variant: 'outline',
                  size: 'sm',
                  children: 'Export',
                }),
              ],
            }),
          ],
        });
      }
    },
    5273: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(59087),
        a = t(48105),
        s = t(86074),
        c = new Array(10).fill({
          page: 'page 1',
          content:
            'Word并不像 TeX／LaTeX为我们提供了合适的定理环境，因此需要我们另想办法。\n  \n  第1节 自定义定理环境\n  我们已经使用了“定理样式”作为定理排版的样式，如：\n  \n  定理1.1．对顶角相等。\n  \n  如果大家需要其他的如引理，公理，定义等环境可以仿照定义。\n  \n  定理1.2．三边对应相等的三角形全等。\n  \n  我们将这个过程也定义成了宏，在工具栏Theorem里面。书写过程如下：先写好定理本身，然后在该段落处放置光标，打开Theorem工具栏，点SetTheorem，即可见到效果。请尝试下面一个例子：',
        });
      function o() {
        return (0, s.jsxs)('div', {
          className: 'flex-1 py-6 border-l space-y-6',
          children: [
            (0, s.jsx)(a.Z, { text: 'Chunked  results' }),
            (0, s.jsx)('div', {
              className: 'space-y-6  overflow-auto max-h-[87vh] px-9',
              children: c.map(function (e, n) {
                return (0, s.jsx)(
                  r.d,
                  { content: e.content, activated: !0 },
                  n,
                );
              }),
            }),
          ],
        });
      }
    },
    76915: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      const r = (0, t(91373).Z)('copy', [
        [
          'rect',
          {
            width: '14',
            height: '14',
            x: '8',
            y: '8',
            rx: '2',
            ry: '2',
            key: '17jyea',
          },
        ],
        [
          'path',
          {
            d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2',
            key: 'zix9uf',
          },
        ],
      ]);
    },
    60761: function (e, n, t) {
      t.d(n, {
        bU: function () {
          return k;
        },
        fC: function () {
          return y;
        },
      });
      var r = t(62435),
        a = t(36206),
        s = t(28771),
        c = t(25360),
        o = t(77342),
        l = t(57898),
        i = t(7546),
        d = t(75320),
        u = t(86074),
        f = 'Switch',
        [x, m] = (0, c.b)(f),
        [p, h] = x(f),
        v = r.forwardRef((e, n) => {
          const {
              __scopeSwitch: t,
              name: c,
              checked: l,
              defaultChecked: i,
              required: f,
              disabled: x,
              value: m = 'on',
              onCheckedChange: h,
              form: v,
              ...b
            } = e,
            [N, y] = r.useState(null),
            k = (0, s.e)(n, (e) => y(e)),
            w = r.useRef(!1),
            C = !N || v || !!N.closest('form'),
            [T = !1, Z] = (0, o.T)({ prop: l, defaultProp: i, onChange: h });
          return (0, u.jsxs)(p, {
            scope: t,
            checked: T,
            disabled: x,
            children: [
              (0, u.jsx)(d.WV.button, {
                type: 'button',
                role: 'switch',
                'aria-checked': T,
                'aria-required': f,
                'data-state': j(T),
                'data-disabled': x ? '' : void 0,
                disabled: x,
                value: m,
                ...b,
                ref: k,
                onClick: (0, a.M)(e.onClick, (e) => {
                  Z((e) => !e),
                    C &&
                      ((w.current = e.isPropagationStopped()),
                      w.current || e.stopPropagation());
                }),
              }),
              C &&
                (0, u.jsx)(g, {
                  control: N,
                  bubbles: !w.current,
                  name: c,
                  value: m,
                  checked: T,
                  required: f,
                  disabled: x,
                  form: v,
                  style: { transform: 'translateX(-100%)' },
                }),
            ],
          });
        });
      v.displayName = f;
      var b = 'SwitchThumb',
        N = r.forwardRef((e, n) => {
          const { __scopeSwitch: t, ...r } = e,
            a = h(b, t);
          return (0, u.jsx)(d.WV.span, {
            'data-state': j(a.checked),
            'data-disabled': a.disabled ? '' : void 0,
            ...r,
            ref: n,
          });
        });
      N.displayName = b;
      var g = (e) => {
        const { control: n, checked: t, bubbles: a = !0, ...s } = e,
          c = r.useRef(null),
          o = (0, l.D)(t),
          d = (0, i.t)(n);
        return (
          r.useEffect(() => {
            const e = c.current,
              n = window.HTMLInputElement.prototype,
              r = Object.getOwnPropertyDescriptor(n, 'checked').set;
            if (o !== t && r) {
              const n = new Event('click', { bubbles: a });
              r.call(e, t), e.dispatchEvent(n);
            }
          }, [o, t, a]),
          (0, u.jsx)('input', {
            type: 'checkbox',
            'aria-hidden': !0,
            defaultChecked: t,
            ...s,
            tabIndex: -1,
            ref: c,
            style: {
              ...e.style,
              ...d,
              position: 'absolute',
              pointerEvents: 'none',
              opacity: 0,
              margin: 0,
            },
          })
        );
      };
      function j(e) {
        return e ? 'checked' : 'unchecked';
      }
      var y = v,
        k = N;
    },
    57898: function (e, n, t) {
      t.d(n, {
        D: function () {
          return a;
        },
      });
      var r = t(62435);
      function a(e) {
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
  },
]);
//# sourceMappingURL=p__chunk__chunk-result__index.bf3b0766.async.js.map
