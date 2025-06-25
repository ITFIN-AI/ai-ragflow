/*! For license information please see p__profile-setting__plan__index.7b8d1593.async.js.LICENSE.txt */
'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [8752],
  {
    19252: function (e, a, r) {
      r.d(a, {
        C: function () {
          return m;
        },
      });
      var s = r(97857),
        t = r.n(s),
        n = r(13769),
        l = r.n(n),
        i = r(45139),
        c = (r(62435), r(27080)),
        o = r(86074),
        d = ['className', 'variant'],
        u = (0, i.j)(
          'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          {
            variants: {
              variant: {
                default:
                  'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
                secondary:
                  'border-transparent bg-background-card text-text-sub-title-invert hover:bg-secondary/80 rounded-md',
                destructive:
                  'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
                outline: 'text-foreground',
                tertiary:
                  'border-transparent bg-colors-background-core-strong text-colors-text-persist-light hover:bg-colors-background-core-strong/80',
              },
            },
            defaultVariants: { variant: 'default' },
          },
        );
      function m(e) {
        var a = e.className,
          r = e.variant,
          s = l()(e, d);
        return (0, o.jsx)(
          'div',
          t()({ className: (0, c.cn)(u({ variant: r }), a) }, s),
        );
      }
    },
    87030: function (e, a, r) {
      r.d(a, {
        Ol: function () {
          return b;
        },
        SZ: function () {
          return h;
        },
        Zb: function () {
          return v;
        },
        aY: function () {
          return j;
        },
        ll: function () {
          return g;
        },
      });
      var s = r(97857),
        t = r.n(s),
        n = r(13769),
        l = r.n(n),
        i = r(62435),
        c = r(27080),
        o = r(86074),
        d = ['className'],
        u = ['className'],
        m = ['className'],
        x = ['className'],
        f = ['className'],
        p = ['className'],
        v = i.forwardRef(function (e, a) {
          var r = e.className,
            s = l()(e, d);
          return (0, o.jsx)(
            'div',
            t()(
              {
                ref: a,
                className: (0, c.cn)(
                  'rounded-lg  bg-background-card  text-card-foreground shadow-sm',
                  r,
                ),
              },
              s,
            ),
          );
        });
      v.displayName = 'Card';
      var b = i.forwardRef(function (e, a) {
        var r = e.className,
          s = l()(e, u);
        return (0, o.jsx)(
          'div',
          t()(
            {
              ref: a,
              className: (0, c.cn)('flex flex-col space-y-1.5 p-6', r),
            },
            s,
          ),
        );
      });
      b.displayName = 'CardHeader';
      var g = i.forwardRef(function (e, a) {
        var r = e.className,
          s = l()(e, m);
        return (0, o.jsx)(
          'div',
          t()(
            {
              ref: a,
              className: (0, c.cn)(
                'text-2xl font-semibold leading-none tracking-tight',
                r,
              ),
            },
            s,
          ),
        );
      });
      g.displayName = 'CardTitle';
      var h = i.forwardRef(function (e, a) {
        var r = e.className,
          s = l()(e, x);
        return (0, o.jsx)(
          'div',
          t()(
            {
              ref: a,
              className: (0, c.cn)('text-sm text-muted-foreground', r),
            },
            s,
          ),
        );
      });
      h.displayName = 'CardDescription';
      var j = i.forwardRef(function (e, a) {
        var r = e.className,
          s = l()(e, f);
        return (0, o.jsx)(
          'div',
          t()({ ref: a, className: (0, c.cn)('p-6 pt-0', r) }, s),
        );
      });
      (j.displayName = 'CardContent'),
        (i.forwardRef(function (e, a) {
          var r = e.className,
            s = l()(e, p);
          return (0, o.jsx)(
            'div',
            t()(
              { ref: a, className: (0, c.cn)('flex items-center p-6 pt-0', r) },
              s,
            ),
          );
        }).displayName = 'CardFooter');
    },
    41225: function (e, a, r) {
      r.d(a, {
        r: function () {
          return i;
        },
      });
      var s = r(52677),
        t = r.n(s),
        n = r(27080),
        l = (r(62435), r(86074));
      function i(e) {
        var a = e.options,
          r = e.value,
          s = e.onChange,
          i = e.className;
        return (0, l.jsx)('div', {
          className: (0, n.cn)(
            'flex items-center rounded-3xl p-1 gap-2 bg-background-header-bar px-5 py-2.5',
            i,
          ),
          children: a.map(function (e) {
            var a = 'object' === t()(e),
              i = a ? e.value : e;
            return (0, l.jsx)(
              'div',
              {
                className: (0, n.cn)(
                  'inline-flex items-center px-6 py-2 text-base font-normal rounded-3xl cursor-pointer text-text-badge',
                  {
                    'bg-text-title': r === i,
                    'text-text-title-invert': r === i,
                  },
                ),
                onClick: function () {
                  return null == s ? void 0 : s(i);
                },
                children: a ? e.label : e,
              },
              i,
            );
          }),
        });
      }
    },
    78015: function (e, a, r) {
      r.r(a),
        r.d(a, {
          default: function () {
            return N;
          },
        });
      var s = r(97857),
        t = r.n(s),
        n = r(5574),
        l = r.n(n),
        i = r(57636),
        c = r(87030),
        o = r(41225),
        d = r(78051),
        u = r(91373);
      const m = (0, u.Z)('circle-check-big', [
        ['path', { d: 'M21.801 10A10 10 0 1 1 17 3.335', key: 'yps3ct' }],
        ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
      ]);
      var x = r(62435),
        f = r(19252),
        p = r(27080);
      const v = (0, u.Z)('zap', [
          [
            'path',
            {
              d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
              key: '1xq2db',
            },
          ],
        ]),
        b = (0, u.Z)('mail', [
          [
            'path',
            { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7', key: '132q7q' },
          ],
          [
            'rect',
            {
              x: '2',
              y: '4',
              width: '20',
              height: '16',
              rx: '2',
              key: 'izxlao',
            },
          ],
        ]);
      var g = r(86074);
      function h(e) {
        var a = e.title,
          r = e.price,
          s = e.description,
          t = e.features,
          n = e.buttonText,
          l = e.isPro,
          o = e.isEnterprise,
          d = 'Free' === a;
        return (0, g.jsxs)(c.Zb, {
          className:
            'flex flex-col bg-colors-background-neutral-weak divide-y divide-colors-outline-neutral-strong p-4',
          children: [
            (0, g.jsxs)(c.Ol, {
              className: ' justify-between p-0 pb-3 h-52',
              children: [
                (0, g.jsxs)('section', {
                  children: [
                    (0, g.jsx)('div', {
                      className: 'flex items-center justify-between mb-2',
                      children: (0, g.jsxs)(f.C, {
                        variant: d ? 'secondary' : 'tertiary',
                        className: 'text-xs',
                        children: [
                          l && (0, g.jsx)(v, { className: 'mr-2 h-4 w-4' }),
                          o && (0, g.jsx)(b, { className: 'mr-2 h-4 w-4' }),
                          a,
                        ],
                      }),
                    }),
                    (0, g.jsx)('p', {
                      className: 'text-sm text-colors-text-neutral-standard',
                      children: s,
                    }),
                  ],
                }),
                (0, g.jsxs)('section', {
                  children: [
                    (0, g.jsxs)('div', {
                      className: 'flex items-baseline text-3xl font-bold pb-3',
                      children: [
                        r,
                        'Customed' !== r &&
                          (0, g.jsx)('span', {
                            className: 'text-sm font-normal',
                            children: '/mo',
                          }),
                      ],
                    }),
                    (0, g.jsxs)(i.zx, {
                      variant: d ? 'secondary' : 'tertiary',
                      className: (0, p.cn)('w-full', {
                        'bg-colors-text-core-standard': !d,
                      }),
                      size: 'sm',
                      children: [
                        l && (0, g.jsx)(v, { className: 'mr-2 h-4 w-4' }),
                        o && (0, g.jsx)(b, {}),
                        n,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, g.jsx)(c.aY, {
              className: ' p-0 pt-3',
              children: (0, g.jsx)('ul', {
                className: 'space-y-2',
                children: t.map(function (e, a) {
                  return (0, g.jsxs)(
                    'li',
                    {
                      className: '',
                      children: [
                        (0, g.jsx)('div', {
                          className: 'text-colors-text-core-standard',
                          children: e.name,
                        }),
                        (0, g.jsx)('span', {
                          className: 'text-sm',
                          children: (0, g.jsx)('span', {
                            className: 'font-medium',
                            children: e.value,
                          }),
                        }),
                      ],
                    },
                    a,
                  );
                }),
              }),
            }),
          ],
        });
      }
      var j = [
        {
          title: 'Free',
          price: '$0',
          description: 'Meh, just looking',
          features: [
            { name: 'Project', value: '1 project' },
            { name: 'Storage', value: '1 Gb' },
            { name: 'Team', value: '2 members' },
            { name: 'Features', value: 'Basic features' },
          ],
          buttonText: 'Current plan',
          buttonVariant: 'outline',
        },
        {
          title: 'Pro',
          price: '$16.00',
          description: 'For professional use.',
          features: [
            { name: 'Project', value: 'Unlimited projects' },
            { name: 'Storage', value: '100 Gb' },
            { name: 'Team', value: 'Unlimited members' },
            { name: 'Features', value: 'Basic features All advanced features' },
          ],
          buttonText: 'Upgrade',
          buttonVariant: 'default',
          isPro: !0,
        },
        {
          title: 'Enterprise',
          price: 'Customed',
          description:
            'Get full capabilities and support for large-scale mission-critical systems.',
          features: [
            { name: 'Project', value: 'Unlimited projects' },
            { name: 'Storage', value: '100 Gb' },
            { name: 'Team', value: 'Unlimited members' },
            { name: 'Features', value: 'Basic features All advanced features' },
          ],
          buttonText: 'Contact us',
          buttonVariant: 'secondary',
          isEnterprise: !0,
        },
      ];
      function N() {
        var e = (0, x.useState)('monthly'),
          a = l()(e, 2),
          r = a[0],
          s = a[1],
          n = (0, x.useMemo)(function () {
            return [
              { label: 'Monthly', value: 'monthly' },
              { label: 'Yearly', value: 'yearly' },
            ];
          }, []);
        return (0, g.jsxs)('section', {
          className: 'p-8',
          children: [
            (0, g.jsx)('h1', {
              className: 'text-3xl font-bold mb-6',
              children: 'Plan & balance',
            }),
            (0, g.jsxs)(c.Zb, {
              className:
                'border-0 p-6 mb-6 bg-colors-background-inverse-weak divide-y divide-colors-outline-neutral-strong',
              children: [
                (0, g.jsxs)('div', {
                  className: 'pb-2 flex justify-between text-xl',
                  children: [
                    (0, g.jsx)('span', {
                      className: 'font-bold ',
                      children: 'Balance',
                    }),
                    (0, g.jsx)('span', {
                      className: 'font-medium',
                      children: '$ 100.00',
                    }),
                  ],
                }),
                (0, g.jsxs)('div', {
                  className: 'flex items-center justify-between pt-3',
                  children: [
                    (0, g.jsx)('span', {
                      children:
                        'The value equals to 1,000 tokens or 10.00 GBs of storage',
                    }),
                    (0, g.jsxs)(i.zx, {
                      variant: 'tertiary',
                      size: 'sm',
                      children: [(0, g.jsx)(d.Z, {}), 'Recharge'],
                    }),
                  ],
                }),
              ],
            }),
            (0, g.jsx)(c.Zb, {
              className: 'pt-6 bg-colors-background-inverse-weak',
              children: (0, g.jsxs)(c.aY, {
                className: 'space-y-4',
                children: [
                  (0, g.jsx)('div', {
                    className: 'font-bold text-xl',
                    children: 'Upgrade to access',
                  }),
                  (0, g.jsx)('section', {
                    className: 'grid grid-cols-2 gap-3',
                    children: [
                      'Full access to pro features',
                      'Exclusive analyze models',
                      'Create more teams',
                      'Invite more collaborators',
                    ].map(function (e, a) {
                      return (0, g.jsxs)(
                        'div',
                        {
                          className: 'flex items-center gap-2',
                          children: [
                            (0, g.jsx)(m, { className: 'size-4' }),
                            (0, g.jsx)('span', { children: e }),
                          ],
                        },
                        a,
                      );
                    }),
                  }),
                  (0, g.jsx)(o.r, {
                    options: n,
                    value: r,
                    onChange: function (e) {
                      s(e);
                    },
                    className:
                      'bg-colors-background-inverse-standard inline-flex',
                  }),
                  (0, g.jsx)('div', {
                    className: 'grid gap-8 md:grid-cols-2 lg:grid-cols-3',
                    children: j.map(function (e, a) {
                      return (0, g.jsx)(h, t()({}, e), a);
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    78051: function (e, a, r) {
      r.d(a, {
        Z: function () {
          return s;
        },
      });
      const s = (0, r(91373).Z)('log-out', [
        [
          'path',
          { d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', key: '1uf3rs' },
        ],
        ['polyline', { points: '16 17 21 12 16 7', key: '1gabdz' }],
        ['line', { x1: '21', x2: '9', y1: '12', y2: '12', key: '1uyos4' }],
      ]);
    },
  },
]);
//# sourceMappingURL=p__profile-setting__plan__index.7b8d1593.async.js.map
