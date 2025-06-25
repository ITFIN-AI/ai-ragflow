/*! For license information please see p__profile-setting__model__index.1739ac1e.async.js.LICENSE.txt */
'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [4481],
  {
    5715: function (e, a, s) {
      s.d(a, {
        F$: function () {
          return h;
        },
        Q5: function () {
          return p;
        },
        qE: function () {
          return x;
        },
      });
      var n = s(97857),
        r = s.n(n),
        l = s(13769),
        t = s.n(l),
        i = s(10952),
        c = s(62435),
        d = s(27080),
        o = s(86074),
        u = ['className'],
        f = ['className'],
        m = ['className'],
        x = c.forwardRef(function (e, a) {
          var s = e.className,
            n = t()(e, u);
          return (0, o.jsx)(
            i.fC,
            r()(
              {
                ref: a,
                className: (0, d.cn)(
                  'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
                  s,
                ),
              },
              n,
            ),
          );
        });
      x.displayName = i.fC.displayName;
      var h = c.forwardRef(function (e, a) {
        var s = e.className,
          n = t()(e, f);
        return (0, o.jsx)(
          i.Ee,
          r()(
            { ref: a, className: (0, d.cn)('aspect-square h-full w-full', s) },
            n,
          ),
        );
      });
      h.displayName = i.Ee.displayName;
      var p = c.forwardRef(function (e, a) {
        var s = e.className,
          n = t()(e, m);
        return (0, o.jsx)(
          i.NY,
          r()(
            {
              ref: a,
              className: (0, d.cn)(
                'flex h-full w-full items-center justify-center rounded-full bg-muted',
                s,
              ),
            },
            n,
          ),
        );
      });
      p.displayName = i.NY.displayName;
    },
    87030: function (e, a, s) {
      s.d(a, {
        Ol: function () {
          return N;
        },
        SZ: function () {
          return j;
        },
        Zb: function () {
          return p;
        },
        aY: function () {
          return y;
        },
        ll: function () {
          return v;
        },
      });
      var n = s(97857),
        r = s.n(n),
        l = s(13769),
        t = s.n(l),
        i = s(62435),
        c = s(27080),
        d = s(86074),
        o = ['className'],
        u = ['className'],
        f = ['className'],
        m = ['className'],
        x = ['className'],
        h = ['className'],
        p = i.forwardRef(function (e, a) {
          var s = e.className,
            n = t()(e, o);
          return (0, d.jsx)(
            'div',
            r()(
              {
                ref: a,
                className: (0, c.cn)(
                  'rounded-lg  bg-background-card  text-card-foreground shadow-sm',
                  s,
                ),
              },
              n,
            ),
          );
        });
      p.displayName = 'Card';
      var N = i.forwardRef(function (e, a) {
        var s = e.className,
          n = t()(e, u);
        return (0, d.jsx)(
          'div',
          r()(
            {
              ref: a,
              className: (0, c.cn)('flex flex-col space-y-1.5 p-6', s),
            },
            n,
          ),
        );
      });
      N.displayName = 'CardHeader';
      var v = i.forwardRef(function (e, a) {
        var s = e.className,
          n = t()(e, f);
        return (0, d.jsx)(
          'div',
          r()(
            {
              ref: a,
              className: (0, c.cn)(
                'text-2xl font-semibold leading-none tracking-tight',
                s,
              ),
            },
            n,
          ),
        );
      });
      v.displayName = 'CardTitle';
      var j = i.forwardRef(function (e, a) {
        var s = e.className,
          n = t()(e, m);
        return (0, d.jsx)(
          'div',
          r()(
            {
              ref: a,
              className: (0, c.cn)('text-sm text-muted-foreground', s),
            },
            n,
          ),
        );
      });
      j.displayName = 'CardDescription';
      var y = i.forwardRef(function (e, a) {
        var s = e.className,
          n = t()(e, x);
        return (0, d.jsx)(
          'div',
          r()({ ref: a, className: (0, c.cn)('p-6 pt-0', s) }, n),
        );
      });
      (y.displayName = 'CardContent'),
        (i.forwardRef(function (e, a) {
          var s = e.className,
            n = t()(e, h);
          return (0, d.jsx)(
            'div',
            r()(
              { ref: a, className: (0, c.cn)('flex items-center p-6 pt-0', s) },
              n,
            ),
          );
        }).displayName = 'CardFooter');
    },
    84586: function (e, a, s) {
      s.d(a, {
        Bw: function () {
          return S;
        },
        DI: function () {
          return C;
        },
        Ph: function () {
          return k;
        },
        Ql: function () {
          return D;
        },
        i4: function () {
          return T;
        },
        ki: function () {
          return R;
        },
        n5: function () {
          return M;
        },
        vM: function () {
          return A;
        },
      });
      var n = s(5574),
        r = s.n(n),
        l = s(97857),
        t = s.n(l),
        i = s(13769),
        c = s.n(i),
        d = s(12291),
        o = s(41352),
        u = s(8971),
        f = s(84979),
        m = s(13742),
        x = s(62435),
        h = s(27080),
        p = s(86074),
        N = ['className', 'children', 'value', 'onReset', 'allowClear'],
        v = ['className'],
        j = ['className'],
        y = ['className', 'children', 'position'],
        g = ['className'],
        w = ['className', 'children'],
        b = ['className'],
        k = d.fC,
        C = d.ZA,
        R = d.B4,
        T = x.forwardRef(function (e, a) {
          var s = e.className,
            n = e.children,
            r = e.value,
            l = e.onReset,
            i = e.allowClear,
            f = c()(e, N);
          return (0, p.jsxs)(
            d.xz,
            t()(
              t()(
                {
                  ref: a,
                  className: (0, h.cn)(
                    'flex h-8 w-full items-center justify-between rounded-md border border-input bg-colors-background-inverse-weak px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
                    s,
                  ),
                },
                f,
              ),
              {},
              {
                children: [
                  n,
                  (0, p.jsx)(d.JO, {
                    asChild: !0,
                    onPointerDown: function (e) {
                      e.stopPropagation();
                    },
                    children:
                      r && i
                        ? (0, p.jsx)(o.Z, {
                            className: 'h-4 w-4 opacity-50 cursor-pointer',
                            onClick: l,
                          })
                        : (0, p.jsx)(u.Z, { className: 'h-4 w-4 opacity-50' }),
                  }),
                ],
              },
            ),
          );
        });
      T.displayName = d.xz.displayName;
      var Z = x.forwardRef(function (e, a) {
        var s = e.className,
          n = c()(e, v);
        return (0, p.jsx)(
          d.u_,
          t()(
            t()(
              {
                ref: a,
                className: (0, h.cn)(
                  'flex cursor-default items-center justify-center py-1',
                  s,
                ),
              },
              n,
            ),
            {},
            { children: (0, p.jsx)(f.Z, { className: 'h-4 w-4' }) },
          ),
        );
      });
      Z.displayName = d.u_.displayName;
      var E = x.forwardRef(function (e, a) {
        var s = e.className,
          n = c()(e, j);
        return (0, p.jsx)(
          d.$G,
          t()(
            t()(
              {
                ref: a,
                className: (0, h.cn)(
                  'flex cursor-default items-center justify-center py-1',
                  s,
                ),
              },
              n,
            ),
            {},
            { children: (0, p.jsx)(u.Z, { className: 'h-4 w-4' }) },
          ),
        );
      });
      E.displayName = d.$G.displayName;
      var S = x.forwardRef(function (e, a) {
        var s = e.className,
          n = e.children,
          r = e.position,
          l = void 0 === r ? 'popper' : r,
          i = c()(e, y);
        return (0, p.jsx)(d.h_, {
          children: (0, p.jsxs)(
            d.VY,
            t()(
              t()(
                {
                  ref: a,
                  className: (0, h.cn)(
                    'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    'popper' === l &&
                      'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
                    s,
                  ),
                  position: l,
                },
                i,
              ),
              {},
              {
                children: [
                  (0, p.jsx)(Z, {}),
                  (0, p.jsx)(d.l_, {
                    className: (0, h.cn)(
                      'p-1',
                      'popper' === l &&
                        'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
                    ),
                    children: n,
                  }),
                  (0, p.jsx)(E, {}),
                ],
              },
            ),
          ),
        });
      });
      S.displayName = d.VY.displayName;
      var M = x.forwardRef(function (e, a) {
        var s = e.className,
          n = c()(e, g);
        return (0, p.jsx)(
          d.__,
          t()(
            {
              ref: a,
              className: (0, h.cn)('py-1.5 pl-8 pr-2 text-sm font-semibold', s),
            },
            n,
          ),
        );
      });
      M.displayName = d.__.displayName;
      var D = x.forwardRef(function (e, a) {
        var s = e.className,
          n = e.children,
          r = c()(e, w);
        return (0, p.jsxs)(
          d.ck,
          t()(
            t()(
              {
                ref: a,
                className: (0, h.cn)(
                  'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  s,
                ),
              },
              r,
            ),
            {},
            {
              children: [
                (0, p.jsx)('span', {
                  className:
                    'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
                  children: (0, p.jsx)(d.wU, {
                    children: (0, p.jsx)(m.Z, { className: 'h-4 w-4' }),
                  }),
                }),
                (0, p.jsx)(d.eT, { children: n }),
              ],
            },
          ),
        );
      });
      (D.displayName = d.ck.displayName),
        (x.forwardRef(function (e, a) {
          var s = e.className,
            n = c()(e, b);
          return (0, p.jsx)(
            d.Z0,
            t()(
              { ref: a, className: (0, h.cn)('-mx-1 my-1 h-px bg-muted', s) },
              n,
            ),
          );
        }).displayName = d.Z0.displayName);
      var A = (0, x.forwardRef)(function (e, a) {
        var s = e.value,
          n = e.onChange,
          l = e.FormControlComponent,
          i = e.options,
          c = void 0 === i ? [] : i,
          d = e.allowClear,
          o = e.placeholder,
          u = e.contentProps,
          f = void 0 === u ? {} : u,
          m = e.triggerClassName,
          h = e.onlyShowSelectedIcon,
          N = void 0 !== h && h,
          v = x.useState(+new Date()),
          j = r()(v, 2),
          y = j[0],
          g = j[1],
          w = x.useState(s),
          b = r()(w, 2),
          Z = b[0],
          E = b[1],
          A =
            l ||
            function (e) {
              var a = e.children;
              return (0, p.jsx)('div', { children: a });
            },
          I = (0, x.useCallback)(
            function (e) {
              E(e), null == n || n(e);
            },
            [n],
          ),
          _ = (0, x.useCallback)(
            function () {
              I(void 0), g(+new Date());
            },
            [I],
          );
        (0, x.useEffect)(
          function () {
            E(function (e) {
              return e !== s ? s : e;
            });
          },
          [s],
        );
        var z = x.useMemo(
          function () {
            var e = c;
            c.some(function (e) {
              return !('value' in e);
            }) &&
              (e = c.reduce(function (e, a) {
                var s;
                return e.concat(
                  null !== (s = null == a ? void 0 : a.options) && void 0 !== s
                    ? s
                    : [],
                );
              }, []));
            var a = e.find(function (e) {
              return e.value === Z;
            });
            return N
              ? null == a
                ? void 0
                : a.icon
              : null == a
                ? void 0
                : a.label;
          },
          [N, c, Z],
        );
        return (0, p.jsxs)(
          k,
          {
            onValueChange: I,
            value: Z,
            children: [
              (0, p.jsx)(A, {
                children: (0, p.jsx)(T, {
                  value: Z,
                  onReset: _,
                  allowClear: d,
                  ref: a,
                  className: m,
                  children: (0, p.jsx)(R, { placeholder: o, children: z }),
                }),
              }),
              (0, p.jsx)(
                S,
                t()(
                  t()({}, f),
                  {},
                  {
                    children: c.map(function (e, a) {
                      return 'value' in e
                        ? (0, p.jsx)(
                            D,
                            {
                              value: e.value,
                              disabled: e.disabled,
                              children: (0, p.jsxs)('div', {
                                className: 'flex items-center gap-1',
                                children: [e.icon, e.label],
                              }),
                            },
                            e.value,
                          )
                        : (0, p.jsxs)(
                            C,
                            {
                              children: [
                                (0, p.jsx)(M, {
                                  className: 'pl-2',
                                  children: e.label,
                                }),
                                e.options.map(function (e) {
                                  return (0, p.jsx)(
                                    D,
                                    {
                                      value: e.value,
                                      disabled: e.disabled,
                                      children: e.label,
                                    },
                                    e.value,
                                  );
                                }),
                              ],
                            },
                            a,
                          );
                    }),
                  },
                ),
              ),
            ],
          },
          y,
        );
      });
      A.displayName = 'RAGFlowSelect';
    },
    89199: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return y;
          },
        });
      var n = s(57636),
        r = s(27591),
        l = s(5715),
        t = s(87030),
        i = s(84586),
        c = s(13718),
        d = s(95999),
        o = s(46609),
        u = s(31012),
        f = s(86074),
        m = [
          {
            title: 'GPT Model',
            description:
              'The default chat LLM all the newly created knowledgebase will use.',
            model: 'DeepseekChat',
          },
          {
            title: 'Embedding Model',
            description:
              'The default embedding model all the newly created knowledgebase will use.',
            model: 'DeepseekChat',
          },
          {
            title: 'Image Model',
            description:
              'The default multi-capable model all the newly created knowledgebase will use. It can generate a picture or video.',
            model: 'DeepseekChat',
          },
          {
            title: 'Speech2TXT Model',
            description:
              'The default ASR model all the newly created knowledgebase will use. Use this model to translate voices to text something text.',
            model: 'DeepseekChat',
          },
          {
            title: 'TTS Model',
            description:
              'The default text to speech model all the newly created knowledgebase will use.',
            model: 'DeepseekChat',
          },
        ];
      function x(e) {
        var a = e.children;
        return (0, f.jsx)('span', {
          className: 'font-bold text-xl',
          children: a,
        });
      }
      function h() {
        return (0, f.jsx)(t.Zb, {
          children: (0, f.jsx)(t.aY, {
            className: 'p-4 space-y-6',
            children: m.map(function (e, a) {
              return (0, f.jsxs)(
                'div',
                {
                  className: 'flex items-center',
                  children: [
                    (0, f.jsxs)('div', {
                      className: 'flex-1 flex flex-col',
                      children: [
                        (0, f.jsx)('span', {
                          className: 'font-semibold text-base',
                          children: e.title,
                        }),
                        (0, f.jsx)('span', {
                          className: 'text-colors-text-neutral-standard',
                          children: e.description,
                        }),
                      ],
                    }),
                    (0, f.jsx)('div', {
                      className: 'flex-1',
                      children: (0, f.jsxs)(i.Ph, {
                        defaultValue: 'english',
                        children: [
                          (0, f.jsx)(i.i4, { children: (0, f.jsx)(i.ki, {}) }),
                          (0, f.jsx)(i.Bw, {
                            children: (0, f.jsx)(i.Ql, {
                              value: 'english',
                              children: 'English',
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                },
                a,
              );
            }),
          }),
        });
      }
      function p() {
        return (0, f.jsx)(t.Zb, {
          className: 'pt-4',
          children: (0, f.jsxs)(t.aY, {
            className: 'space-y-4',
            children: [
              (0, f.jsxs)('div', {
                className: 'flex justify-between space-y-4',
                children: [
                  (0, f.jsxs)(l.qE, {
                    children: [
                      (0, f.jsx)(l.F$, {
                        src: 'https://github.com/shadcn.png',
                        alt: '@shadcn',
                      }),
                      (0, f.jsx)(l.Q5, { children: 'CN' }),
                    ],
                  }),
                  (0, f.jsx)(n.zx, {
                    variant: 'outline',
                    children: 'Sub models',
                  }),
                ],
              }),
              (0, f.jsx)(x, { children: 'Deep seek' }),
              (0, f.jsx)('p', {
                children: 'LLM,TEXT EMBEDDING, SPEECH2TEXT, MODERATION',
              }),
              (0, f.jsx)(t.Zb, {
                children: (0, f.jsxs)(t.aY, {
                  className: 'p-3 flex gap-2',
                  children: [
                    (0, f.jsxs)(n.zx, {
                      variant: 'secondary',
                      children: ['deepseek-chat ', (0, f.jsx)(c.Z, {})],
                    }),
                    (0, f.jsxs)(n.zx, {
                      variant: 'secondary',
                      children: ['deepseek-code ', (0, f.jsx)(c.Z, {})],
                    }),
                  ],
                }),
              }),
              (0, f.jsxs)('div', {
                className: 'flex justify-end gap-2',
                children: [
                  (0, f.jsx)(n.zx, {
                    variant: 'secondary',
                    size: 'icon',
                    children: (0, f.jsx)(d.Z, { className: 'h-4 w-4' }),
                  }),
                  (0, f.jsxs)(n.zx, {
                    variant: 'tertiary',
                    children: [(0, f.jsx)(o.Z, {}), ' API'],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function N() {
        return (0, f.jsx)(t.Zb, {
          className: 'pt-4',
          children: (0, f.jsxs)(t.aY, {
            className: 'space-y-4',
            children: [
              (0, f.jsxs)(l.qE, {
                className: 'mb-4',
                children: [
                  (0, f.jsx)(l.F$, {
                    src: 'https://github.com/shadcn.png',
                    alt: '@shadcn',
                  }),
                  (0, f.jsx)(l.Q5, { children: 'CN' }),
                ],
              }),
              (0, f.jsx)(x, { children: 'Deep seek' }),
              (0, f.jsx)('p', {
                children: 'LLM,TEXT EMBEDDING, SPEECH2TEXT, MODERATION',
              }),
              (0, f.jsx)('div', {
                className: 'text-right',
                children: (0, f.jsxs)(n.zx, {
                  variant: 'tertiary',
                  children: [(0, f.jsx)(u.Z, {}), ' Add'],
                }),
              }),
            ],
          }),
        });
      }
      var v = new Array(4).fill(1),
        j = new Array(4).fill(1);
      function y() {
        return (0, f.jsxs)('section', {
          className: 'p-8 space-y-8 ',
          children: [
            (0, f.jsxs)('div', {
              className: 'flex justify-between items-center ',
              children: [
                (0, f.jsx)('h1', {
                  className: 'text-4xl font-bold',
                  children: 'Team management',
                }),
                (0, f.jsx)(n.zx, { children: 'Unfinished' }),
              ],
            }),
            (0, f.jsxs)('div', {
              className: 'max-h-[84vh] overflow-auto',
              children: [
                (0, f.jsx)(h, {}),
                (0, f.jsxs)('section', {
                  className: 'mt-6',
                  children: [
                    (0, f.jsx)('h2', {
                      className: 'text-2xl font-semibold mb-3',
                      children: 'Added model',
                    }),
                    (0, f.jsx)('div', {
                      className:
                        'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4',
                      children: v.map(function (e, a) {
                        return (0, f.jsx)(p, {}, a);
                      }),
                    }),
                  ],
                }),
                (0, f.jsxs)('section', {
                  className: 'mt-6',
                  children: [
                    (0, f.jsxs)('div', {
                      className: 'flex justify-between items-center mb-3',
                      children: [
                        (0, f.jsx)('h2', {
                          className: 'text-2xl font-semibold ',
                          children: 'Model library',
                        }),
                        (0, f.jsx)(r.II, {
                          placeholder: 'search',
                          className: 'bg-colors-background-inverse-weak w-1/5',
                        }),
                      ],
                    }),
                    (0, f.jsx)('div', {
                      className:
                        'grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4',
                      children: j.map(function (e, a) {
                        return (0, f.jsx)(N, {}, a);
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    95999: function (e, a, s) {
      s.d(a, {
        Z: function () {
          return n;
        },
      });
      const n = (0, s(91373).Z)('ellipsis-vertical', [
        ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
        ['circle', { cx: '12', cy: '5', r: '1', key: 'gxeob9' }],
        ['circle', { cx: '12', cy: '19', r: '1', key: 'lyex9k' }],
      ]);
    },
    46609: function (e, a, s) {
      s.d(a, {
        Z: function () {
          return n;
        },
      });
      const n = (0, s(91373).Z)('key', [
        [
          'path',
          {
            d: 'm15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4',
            key: 'g0fldk',
          },
        ],
        ['path', { d: 'm21 2-9.6 9.6', key: '1j0ho8' }],
        ['circle', { cx: '7.5', cy: '15.5', r: '5.5', key: 'yqb3hr' }],
      ]);
    },
    13718: function (e, a, s) {
      s.d(a, {
        Z: function () {
          return n;
        },
      });
      const n = (0, s(91373).Z)('trash-2', [
        ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
        ['path', { d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6', key: '4alrt4' }],
        ['path', { d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', key: 'v07s0e' }],
        ['line', { x1: '10', x2: '10', y1: '11', y2: '17', key: '1uufr5' }],
        ['line', { x1: '14', x2: '14', y1: '11', y2: '17', key: 'xtxkd' }],
      ]);
    },
    10952: function (e, a, s) {
      s.d(a, {
        Ee: function () {
          return y;
        },
        NY: function () {
          return g;
        },
        fC: function () {
          return j;
        },
      });
      var n = s(62435),
        r = s(25360),
        l = s(79698),
        t = s(9981),
        i = s(75320),
        c = s(86074),
        d = 'Avatar',
        [o, u] = (0, r.b)(d),
        [f, m] = o(d),
        x = n.forwardRef((e, a) => {
          const { __scopeAvatar: s, ...r } = e,
            [l, t] = n.useState('idle');
          return (0, c.jsx)(f, {
            scope: s,
            imageLoadingStatus: l,
            onImageLoadingStatusChange: t,
            children: (0, c.jsx)(i.WV.span, { ...r, ref: a }),
          });
        });
      x.displayName = d;
      var h = 'AvatarImage',
        p = n.forwardRef((e, a) => {
          const {
              __scopeAvatar: s,
              src: r,
              onLoadingStatusChange: d = () => {},
              ...o
            } = e,
            u = m(h, s),
            f = (function (e, a) {
              const [s, r] = n.useState('idle');
              return (
                (0, t.b)(() => {
                  if (!e) return void r('error');
                  let s = !0;
                  const n = new window.Image(),
                    l = (e) => () => {
                      s && r(e);
                    };
                  return (
                    r('loading'),
                    (n.onload = l('loaded')),
                    (n.onerror = l('error')),
                    (n.src = e),
                    a && (n.referrerPolicy = a),
                    () => {
                      s = !1;
                    }
                  );
                }, [e, a]),
                s
              );
            })(r, o.referrerPolicy),
            x = (0, l.W)((e) => {
              d(e), u.onImageLoadingStatusChange(e);
            });
          return (
            (0, t.b)(() => {
              'idle' !== f && x(f);
            }, [f, x]),
            'loaded' === f
              ? (0, c.jsx)(i.WV.img, { ...o, ref: a, src: r })
              : null
          );
        });
      p.displayName = h;
      var N = 'AvatarFallback',
        v = n.forwardRef((e, a) => {
          const { __scopeAvatar: s, delayMs: r, ...l } = e,
            t = m(N, s),
            [d, o] = n.useState(void 0 === r);
          return (
            n.useEffect(() => {
              if (void 0 !== r) {
                const e = window.setTimeout(() => o(!0), r);
                return () => window.clearTimeout(e);
              }
            }, [r]),
            d && 'loaded' !== t.imageLoadingStatus
              ? (0, c.jsx)(i.WV.span, { ...l, ref: a })
              : null
          );
        });
      v.displayName = N;
      var j = x,
        y = p,
        g = v;
    },
  },
]);
//# sourceMappingURL=p__profile-setting__model__index.1739ac1e.async.js.map
