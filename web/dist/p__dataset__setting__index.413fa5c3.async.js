'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [7445],
  {
    26625: function (e, n, a) {
      a.d(n, {
        h: function () {
          return M;
        },
      });
      var r = a(97857),
        t = a.n(r),
        s = a(13769),
        i = a.n(s),
        o = a(67007),
        l = a(62435),
        c = a(57636),
        d = a(27080),
        u = a(86074),
        m = ['className'],
        x = ['className'],
        f = ['className'],
        p = ['className'],
        h = ['className'],
        j = ['className'],
        g = ['className'],
        v = ['className'],
        N = o.fC,
        b = o.xz,
        w = o.h_,
        y = l.forwardRef(function (e, n) {
          var a = e.className,
            r = i()(e, m);
          return (0, u.jsx)(
            o.aV,
            t()(
              t()(
                {
                  className: (0, d.cn)(
                    'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    a,
                  ),
                },
                r,
              ),
              {},
              { ref: n },
            ),
          );
        });
      y.displayName = o.aV.displayName;
      var k = l.forwardRef(function (e, n) {
        var a = e.className,
          r = i()(e, x);
        return (0, u.jsxs)(w, {
          children: [
            (0, u.jsx)(y, {}),
            (0, u.jsx)(
              o.VY,
              t()(
                {
                  ref: n,
                  className: (0, d.cn)(
                    'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-colors-background-neutral-standard p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                    a,
                  ),
                },
                r,
              ),
            ),
          ],
        });
      });
      k.displayName = o.VY.displayName;
      var C = function (e) {
        var n = e.className,
          a = i()(e, f);
        return (0, u.jsx)(
          'div',
          t()(
            {
              className: (0, d.cn)(
                'flex flex-col space-y-2 text-center sm:text-left',
                n,
              ),
            },
            a,
          ),
        );
      };
      C.displayName = 'AlertDialogHeader';
      var _ = function (e) {
        var n = e.className,
          a = i()(e, p);
        return (0, u.jsx)(
          'div',
          t()(
            {
              className: (0, d.cn)(
                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                n,
              ),
            },
            a,
          ),
        );
      };
      _.displayName = 'AlertDialogFooter';
      var z = l.forwardRef(function (e, n) {
        var a = e.className,
          r = i()(e, h);
        return (0, u.jsx)(
          o.Dx,
          t()({ ref: n, className: (0, d.cn)('text-lg font-semibold', a) }, r),
        );
      });
      (z.displayName = o.Dx.displayName),
        (l.forwardRef(function (e, n) {
          var a = e.className,
            r = i()(e, j);
          return (0, u.jsx)(
            o.dk,
            t()(
              {
                ref: n,
                className: (0, d.cn)('text-sm text-muted-foreground', a),
              },
              r,
            ),
          );
        }).displayName = o.dk.displayName);
      var S = l.forwardRef(function (e, n) {
        var a = e.className,
          r = i()(e, g);
        return (0, u.jsx)(
          o.aU,
          t()({ ref: n, className: (0, d.cn)((0, c.dc)(), a) }, r),
        );
      });
      S.displayName = o.aU.displayName;
      var R = l.forwardRef(function (e, n) {
        var a = e.className,
          r = i()(e, v);
        return (0, u.jsx)(
          o.$j,
          t()(
            {
              ref: n,
              className: (0, d.cn)(
                (0, c.dc)({ variant: 'outline' }),
                'mt-2 sm:mt-0',
                a,
              ),
            },
            r,
          ),
        );
      });
      R.displayName = o.$j.displayName;
      var Z = a(67421);
      function M(e) {
        var n = e.children,
          a = e.title,
          r = e.onOk,
          t = e.onCancel,
          s = e.hidden,
          i = void 0 !== s && s,
          o = (0, Z.$G)().t;
        return i
          ? n
          : (0, u.jsxs)(N, {
              children: [
                (0, u.jsx)(b, { asChild: !0, children: n }),
                (0, u.jsxs)(k, {
                  onSelect: function (e) {
                    return e.preventDefault();
                  },
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                  children: [
                    (0, u.jsx)(C, {
                      children: (0, u.jsx)(z, {
                        children: null != a ? a : o('common.deleteModalTitle'),
                      }),
                    }),
                    (0, u.jsxs)(_, {
                      children: [
                        (0, u.jsx)(R, {
                          onClick: t,
                          children: o('common.cancel'),
                        }),
                        (0, u.jsx)(S, {
                          className: 'bg-text-delete-red text-text-title',
                          onClick: r,
                          children: o('common.ok'),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
    },
    5715: function (e, n, a) {
      a.d(n, {
        F$: function () {
          return p;
        },
        Q5: function () {
          return h;
        },
        qE: function () {
          return f;
        },
      });
      var r = a(97857),
        t = a.n(r),
        s = a(13769),
        i = a.n(s),
        o = a(10952),
        l = a(62435),
        c = a(27080),
        d = a(86074),
        u = ['className'],
        m = ['className'],
        x = ['className'],
        f = l.forwardRef(function (e, n) {
          var a = e.className,
            r = i()(e, u);
          return (0, d.jsx)(
            o.fC,
            t()(
              {
                ref: n,
                className: (0, c.cn)(
                  'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
                  a,
                ),
              },
              r,
            ),
          );
        });
      f.displayName = o.fC.displayName;
      var p = l.forwardRef(function (e, n) {
        var a = e.className,
          r = i()(e, m);
        return (0, d.jsx)(
          o.Ee,
          t()(
            { ref: n, className: (0, c.cn)('aspect-square h-full w-full', a) },
            r,
          ),
        );
      });
      p.displayName = o.Ee.displayName;
      var h = l.forwardRef(function (e, n) {
        var a = e.className,
          r = i()(e, x);
        return (0, d.jsx)(
          o.NY,
          t()(
            {
              ref: n,
              className: (0, c.cn)(
                'flex h-full w-full items-center justify-center rounded-full bg-muted',
                a,
              ),
            },
            r,
          ),
        );
      });
      h.displayName = o.NY.displayName;
    },
    19252: function (e, n, a) {
      a.d(n, {
        C: function () {
          return m;
        },
      });
      var r = a(97857),
        t = a.n(r),
        s = a(13769),
        i = a.n(s),
        o = a(45139),
        l = (a(62435), a(27080)),
        c = a(86074),
        d = ['className', 'variant'],
        u = (0, o.j)(
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
        var n = e.className,
          a = e.variant,
          r = i()(e, d);
        return (0, c.jsx)(
          'div',
          t()({ className: (0, l.cn)(u({ variant: a }), n) }, r),
        );
      }
    },
    23309: function (e, n, a) {
      a.d(n, {
        X: function () {
          return x;
        },
      });
      var r = a(97857),
        t = a.n(r),
        s = a(13769),
        i = a.n(s),
        o = a(46069),
        l = a(13742),
        c = a(62435),
        d = a(27080),
        u = a(86074),
        m = ['className'],
        x = c.forwardRef(function (e, n) {
          var a = e.className,
            r = i()(e, m);
          return (0, u.jsx)(
            o.fC,
            t()(
              t()(
                {
                  ref: n,
                  className: (0, d.cn)(
                    'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                    a,
                  ),
                },
                r,
              ),
              {},
              {
                children: (0, u.jsx)(o.z$, {
                  className: (0, d.cn)(
                    'flex items-center justify-center text-current',
                  ),
                  children: (0, u.jsx)(l.Z, { className: 'h-4 w-4' }),
                }),
              },
            ),
          );
        });
      x.displayName = o.fC.displayName;
    },
    52118: function (e, n, a) {
      a.d(n, {
        di: function () {
          return k;
        },
        e8: function () {
          return N;
        },
        fu: function () {
          return w;
        },
        mY: function () {
          return g;
        },
        rb: function () {
          return b;
        },
        sZ: function () {
          return v;
        },
        zz: function () {
          return y;
        },
      });
      var r = a(97857),
        t = a.n(r),
        s = a(13769),
        i = a.n(s),
        o = a(13879),
        l = a(87764),
        c = a(62435),
        d = (a(28993), a(27080)),
        u = a(86074),
        m = ['className'],
        x = ['className'],
        f = ['className'],
        p = ['className'],
        h = ['className'],
        j = ['className'],
        g = c.forwardRef(function (e, n) {
          var a = e.className,
            r = i()(e, m);
          return (0, u.jsx)(
            o.mY,
            t()(
              {
                ref: n,
                className: (0, d.cn)(
                  'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
                  a,
                ),
              },
              r,
            ),
          );
        });
      g.displayName = o.mY.displayName;
      var v = c.forwardRef(function (e, n) {
        var a = e.className,
          r = i()(e, x);
        return (0, u.jsxs)('div', {
          className: 'flex items-center border-b px-3',
          'cmdk-input-wrapper': '',
          children: [
            (0, u.jsx)(l.Z, { className: 'mr-2 h-4 w-4 shrink-0 opacity-50' }),
            (0, u.jsx)(
              o.mY.Input,
              t()(
                {
                  ref: n,
                  className: (0, d.cn)(
                    'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
                    a,
                  ),
                },
                r,
              ),
            ),
          ],
        });
      });
      v.displayName = o.mY.Input.displayName;
      var N = c.forwardRef(function (e, n) {
        var a = e.className,
          r = i()(e, f);
        return (0, u.jsx)(
          o.mY.List,
          t()(
            {
              ref: n,
              className: (0, d.cn)(
                'max-h-[300px] overflow-y-auto overflow-x-hidden',
                a,
              ),
            },
            r,
          ),
        );
      });
      N.displayName = o.mY.List.displayName;
      var b = c.forwardRef(function (e, n) {
        return (0, u.jsx)(
          o.mY.Empty,
          t()({ ref: n, className: 'py-6 text-center text-sm' }, e),
        );
      });
      b.displayName = o.mY.Empty.displayName;
      var w = c.forwardRef(function (e, n) {
        var a = e.className,
          r = i()(e, p);
        return (0, u.jsx)(
          o.mY.Group,
          t()(
            {
              ref: n,
              className: (0, d.cn)(
                'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
                a,
              ),
            },
            r,
          ),
        );
      });
      w.displayName = o.mY.Group.displayName;
      var y = c.forwardRef(function (e, n) {
        var a = e.className,
          r = i()(e, h);
        return (0, u.jsx)(
          o.mY.Separator,
          t()({ ref: n, className: (0, d.cn)('-mx-1 h-px bg-border', a) }, r),
        );
      });
      y.displayName = o.mY.Separator.displayName;
      var k = c.forwardRef(function (e, n) {
        var a = e.className,
          r = i()(e, j);
        return (0, u.jsx)(
          o.mY.Item,
          t()(
            {
              ref: n,
              className: (0, d.cn)(
                "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
                a,
              ),
            },
            r,
          ),
        );
      });
      k.displayName = o.mY.Item.displayName;
    },
    11524: function (e, n, a) {
      a.d(n, {
        f: function () {
          return p;
        },
      });
      var r = a(97857),
        t = a.n(r),
        s = a(13769),
        i = a.n(s),
        o = a(27080),
        l = a(88426),
        c = a(45139),
        d = a(36316),
        u = a(62435),
        m = a(86074),
        x = [
          'className',
          'loading',
          'children',
          'disabled',
          'variant',
          'size',
          'asChild',
        ],
        f = (0, c.j)(
          'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            variants: {
              variant: {
                default:
                  'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                  'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                  'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary:
                  'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
                tertiary:
                  'bg-colors-background-sentiment-solid-primary text-colors-text-persist-light hover:bg-colors-background-sentiment-solid-primary/80',
              },
              size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
              },
            },
            defaultVariants: { variant: 'default', size: 'default' },
          },
        ),
        p = u.forwardRef(function (e, n) {
          var a = e.className,
            r = e.loading,
            s = void 0 !== r && r,
            c = e.children,
            u = e.disabled,
            p = e.variant,
            h = e.size,
            j = e.asChild,
            g = void 0 !== j && j,
            v = i()(e, x),
            N = g ? l.g7 : 'button';
          return (0, m.jsxs)(
            N,
            t()(
              t()(
                {
                  className: (0, o.cn)(
                    f({ variant: p, size: h, className: a }),
                  ),
                  ref: n,
                  disabled: s || u,
                },
                v,
              ),
              {},
              {
                children: [
                  s &&
                    (0, m.jsx)(d.Z, { className: 'mr-2 h-5 w-5 animate-spin' }),
                  (0, m.jsx)(l.A4, { children: c }),
                ],
              },
            ),
          );
        });
      p.displayName = 'LoadingButton';
    },
    73352: function (e, n, a) {
      a.d(n, {
        N: function () {
          return z;
        },
      });
      var r = a(97857),
        t = a.n(r),
        s = a(19632),
        i = a.n(s),
        o = a(5574),
        l = a.n(o),
        c = a(13769),
        d = a.n(c),
        u = a(45139),
        m = a(61108),
        x = a(41352),
        f = a(8971),
        p = a(13742),
        h = a(6571),
        j = a(62435),
        g = a(19252),
        v = a(57636),
        N = a(52118),
        b = a(23499),
        w = a(81136),
        y = a(27080),
        k = a(86074),
        C = [
          'options',
          'onValueChange',
          'variant',
          'defaultValue',
          'placeholder',
          'animation',
          'maxCount',
          'modalPopover',
          'asChild',
          'className',
        ],
        _ = (0, u.j)(
          'm-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300',
          {
            variants: {
              variant: {
                default:
                  'border-foreground/10 text-foreground bg-card hover:bg-card/80',
                secondary:
                  'border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80',
                destructive:
                  'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
                inverted: 'inverted',
              },
            },
            defaultVariants: { variant: 'default' },
          },
        ),
        z = j.forwardRef(function (e, n) {
          var a = e.options,
            r = e.onValueChange,
            s = e.variant,
            o = e.defaultValue,
            c = void 0 === o ? [] : o,
            u = e.placeholder,
            z = void 0 === u ? 'Select options' : u,
            S = e.animation,
            R = void 0 === S ? 0 : S,
            Z = e.maxCount,
            M = void 0 === Z ? 3 : Z,
            P = e.modalPopover,
            F = void 0 !== P && P,
            G = (e.asChild, e.className),
            V = d()(e, C),
            I = j.useState(c),
            E = l()(I, 2),
            T = E[0],
            Y = E[1],
            K = j.useState(!1),
            D = l()(K, 2),
            $ = D[0],
            q = D[1],
            X = j.useState(!1),
            B = l()(X, 2),
            J = B[0],
            A = B[1],
            O = function (e) {
              var n = T.includes(e)
                ? T.filter(function (n) {
                    return n !== e;
                  })
                : [].concat(i()(T), [e]);
              Y(n), r(n);
            },
            W = function () {
              Y([]), r([]);
            };
          return (0, k.jsxs)(b.J2, {
            open: $,
            onOpenChange: q,
            modal: F,
            children: [
              (0, k.jsx)(b.xo, {
                asChild: !0,
                children: (0, k.jsx)(
                  v.zx,
                  t()(
                    t()({ ref: n }, V),
                    {},
                    {
                      onClick: function () {
                        q(function (e) {
                          return !e;
                        });
                      },
                      className: (0, y.cn)(
                        'flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between bg-inherit hover:bg-inherit [&_svg]:pointer-events-auto',
                        G,
                      ),
                      children:
                        T.length > 0
                          ? (0, k.jsxs)('div', {
                              className:
                                'flex justify-between items-center w-full',
                              children: [
                                (0, k.jsxs)('div', {
                                  className: 'flex flex-wrap items-center',
                                  children: [
                                    T.slice(0, M).map(function (e) {
                                      var n = a.find(function (n) {
                                          return n.value === e;
                                        }),
                                        r = null == n ? void 0 : n.icon;
                                      return (0, k.jsxs)(
                                        g.C,
                                        {
                                          className: (0, y.cn)(
                                            J ? 'animate-bounce' : '',
                                            _({ variant: s }),
                                          ),
                                          style: {
                                            animationDuration: ''.concat(
                                              R,
                                              's',
                                            ),
                                          },
                                          children: [
                                            r &&
                                              (0, k.jsx)(r, {
                                                className: 'h-4 w-4 mr-2',
                                              }),
                                            null == n ? void 0 : n.label,
                                            (0, k.jsx)(m.Z, {
                                              className:
                                                'ml-2 h-4 w-4 cursor-pointer',
                                              onClick: function (n) {
                                                n.stopPropagation(), O(e);
                                              },
                                            }),
                                          ],
                                        },
                                        e,
                                      );
                                    }),
                                    T.length > M &&
                                      (0, k.jsxs)(g.C, {
                                        className: (0, y.cn)(
                                          'bg-transparent text-foreground border-foreground/1 hover:bg-transparent',
                                          J ? 'animate-bounce' : '',
                                          _({ variant: s }),
                                        ),
                                        style: {
                                          animationDuration: ''.concat(R, 's'),
                                        },
                                        children: [
                                          '+ '.concat(T.length - M, ' more'),
                                          (0, k.jsx)(m.Z, {
                                            className:
                                              'ml-2 h-4 w-4 cursor-pointer',
                                            onClick: function (e) {
                                              var n;
                                              e.stopPropagation(),
                                                (n = T.slice(0, M)),
                                                Y(n),
                                                r(n);
                                            },
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, k.jsxs)('div', {
                                  className:
                                    'flex items-center justify-between',
                                  children: [
                                    (0, k.jsx)(x.Z, {
                                      className:
                                        'h-4 mx-2 cursor-pointer text-muted-foreground',
                                      onClick: function (e) {
                                        e.stopPropagation(), W();
                                      },
                                    }),
                                    (0, k.jsx)(w.Z, {
                                      orientation: 'vertical',
                                      className: 'flex min-h-6 h-full',
                                    }),
                                    (0, k.jsx)(f.Z, {
                                      className:
                                        'h-4 mx-2 cursor-pointer text-muted-foreground',
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, k.jsxs)('div', {
                              className:
                                'flex items-center justify-between w-full mx-auto',
                              children: [
                                (0, k.jsx)('span', {
                                  className:
                                    'text-sm text-muted-foreground mx-3',
                                  children: z,
                                }),
                                (0, k.jsx)(f.Z, {
                                  className:
                                    'h-4 cursor-pointer text-muted-foreground mx-2',
                                }),
                              ],
                            }),
                    },
                  ),
                ),
              }),
              (0, k.jsx)(b.yk, {
                className: 'w-auto p-0',
                align: 'start',
                onEscapeKeyDown: function () {
                  return q(!1);
                },
                children: (0, k.jsxs)(N.mY, {
                  children: [
                    (0, k.jsx)(N.sZ, {
                      placeholder: 'Search...',
                      onKeyDown: function (e) {
                        if ('Enter' === e.key) q(!0);
                        else if (
                          'Backspace' === e.key &&
                          !e.currentTarget.value
                        ) {
                          var n = i()(T);
                          n.pop(), Y(n), r(n);
                        }
                      },
                    }),
                    (0, k.jsxs)(N.e8, {
                      children: [
                        (0, k.jsx)(N.rb, { children: 'No results found.' }),
                        (0, k.jsxs)(N.fu, {
                          children: [
                            (0, k.jsxs)(
                              N.di,
                              {
                                onSelect: function () {
                                  if (T.length === a.length) W();
                                  else {
                                    var e = a.map(function (e) {
                                      return e.value;
                                    });
                                    Y(e), r(e);
                                  }
                                },
                                className: 'cursor-pointer',
                                children: [
                                  (0, k.jsx)('div', {
                                    className: (0, y.cn)(
                                      'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                      T.length === a.length
                                        ? 'bg-primary text-primary-foreground'
                                        : 'opacity-50 [&_svg]:invisible',
                                    ),
                                    children: (0, k.jsx)(p.Z, {
                                      className: 'h-4 w-4',
                                    }),
                                  }),
                                  (0, k.jsx)('span', {
                                    children: '(Select All)',
                                  }),
                                ],
                              },
                              'all',
                            ),
                            a.map(function (e) {
                              var n = T.includes(e.value);
                              return (0, k.jsxs)(
                                N.di,
                                {
                                  onSelect: function () {
                                    return O(e.value);
                                  },
                                  className: 'cursor-pointer',
                                  children: [
                                    (0, k.jsx)('div', {
                                      className: (0, y.cn)(
                                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                        n
                                          ? 'bg-primary text-primary-foreground'
                                          : 'opacity-50 [&_svg]:invisible',
                                      ),
                                      children: (0, k.jsx)(p.Z, {
                                        className: 'h-4 w-4',
                                      }),
                                    }),
                                    e.icon &&
                                      (0, k.jsx)(e.icon, {
                                        className:
                                          'mr-2 h-4 w-4 text-muted-foreground',
                                      }),
                                    (0, k.jsx)('span', { children: e.label }),
                                  ],
                                },
                                e.value,
                              );
                            }),
                          ],
                        }),
                        (0, k.jsx)(N.zz, {}),
                        (0, k.jsx)(N.fu, {
                          children: (0, k.jsxs)('div', {
                            className: 'flex items-center justify-between',
                            children: [
                              T.length > 0 &&
                                (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    (0, k.jsx)(N.di, {
                                      onSelect: W,
                                      className:
                                        'flex-1 justify-center cursor-pointer',
                                      children: 'Clear',
                                    }),
                                    (0, k.jsx)(w.Z, {
                                      orientation: 'vertical',
                                      className: 'flex min-h-6 h-full',
                                    }),
                                  ],
                                }),
                              (0, k.jsx)(N.di, {
                                onSelect: function () {
                                  return q(!1);
                                },
                                className:
                                  'flex-1 justify-center cursor-pointer max-w-full',
                                children: 'Close',
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              R > 0 &&
                T.length > 0 &&
                (0, k.jsx)(h.Z, {
                  className: (0, y.cn)(
                    'cursor-pointer my-2 text-foreground bg-background w-3 h-3',
                    J ? '' : 'text-muted-foreground',
                  ),
                  onClick: function () {
                    return A(!J);
                  },
                }),
            ],
          });
        });
      z.displayName = 'MultiSelect';
    },
    23499: function (e, n, a) {
      a.d(n, {
        J2: function () {
          return m;
        },
        xo: function () {
          return x;
        },
        yk: function () {
          return f;
        },
      });
      var r = a(97857),
        t = a.n(r),
        s = a(13769),
        i = a.n(s),
        o = a(48843),
        l = a(62435),
        c = a(27080),
        d = a(86074),
        u = ['className', 'align', 'sideOffset'],
        m = o.fC,
        x = o.xz,
        f = l.forwardRef(function (e, n) {
          var a = e.className,
            r = e.align,
            s = void 0 === r ? 'center' : r,
            l = e.sideOffset,
            m = void 0 === l ? 4 : l,
            x = i()(e, u);
          return (0, d.jsx)(o.h_, {
            children: (0, d.jsx)(
              o.VY,
              t()(
                {
                  ref: n,
                  align: s,
                  sideOffset: m,
                  className: (0, c.cn)(
                    'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    a,
                  ),
                },
                x,
              ),
            ),
          });
        });
      f.displayName = o.VY.displayName;
    },
    84586: function (e, n, a) {
      a.d(n, {
        Bw: function () {
          return Z;
        },
        DI: function () {
          return C;
        },
        Ph: function () {
          return k;
        },
        Ql: function () {
          return P;
        },
        i4: function () {
          return z;
        },
        ki: function () {
          return _;
        },
        n5: function () {
          return M;
        },
        vM: function () {
          return F;
        },
      });
      var r = a(5574),
        t = a.n(r),
        s = a(97857),
        i = a.n(s),
        o = a(13769),
        l = a.n(o),
        c = a(12291),
        d = a(41352),
        u = a(8971),
        m = a(84979),
        x = a(13742),
        f = a(62435),
        p = a(27080),
        h = a(86074),
        j = ['className', 'children', 'value', 'onReset', 'allowClear'],
        g = ['className'],
        v = ['className'],
        N = ['className', 'children', 'position'],
        b = ['className'],
        w = ['className', 'children'],
        y = ['className'],
        k = c.fC,
        C = c.ZA,
        _ = c.B4,
        z = f.forwardRef(function (e, n) {
          var a = e.className,
            r = e.children,
            t = e.value,
            s = e.onReset,
            o = e.allowClear,
            m = l()(e, j);
          return (0, h.jsxs)(
            c.xz,
            i()(
              i()(
                {
                  ref: n,
                  className: (0, p.cn)(
                    'flex h-8 w-full items-center justify-between rounded-md border border-input bg-colors-background-inverse-weak px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
                    a,
                  ),
                },
                m,
              ),
              {},
              {
                children: [
                  r,
                  (0, h.jsx)(c.JO, {
                    asChild: !0,
                    onPointerDown: function (e) {
                      e.stopPropagation();
                    },
                    children:
                      t && o
                        ? (0, h.jsx)(d.Z, {
                            className: 'h-4 w-4 opacity-50 cursor-pointer',
                            onClick: s,
                          })
                        : (0, h.jsx)(u.Z, { className: 'h-4 w-4 opacity-50' }),
                  }),
                ],
              },
            ),
          );
        });
      z.displayName = c.xz.displayName;
      var S = f.forwardRef(function (e, n) {
        var a = e.className,
          r = l()(e, g);
        return (0, h.jsx)(
          c.u_,
          i()(
            i()(
              {
                ref: n,
                className: (0, p.cn)(
                  'flex cursor-default items-center justify-center py-1',
                  a,
                ),
              },
              r,
            ),
            {},
            { children: (0, h.jsx)(m.Z, { className: 'h-4 w-4' }) },
          ),
        );
      });
      S.displayName = c.u_.displayName;
      var R = f.forwardRef(function (e, n) {
        var a = e.className,
          r = l()(e, v);
        return (0, h.jsx)(
          c.$G,
          i()(
            i()(
              {
                ref: n,
                className: (0, p.cn)(
                  'flex cursor-default items-center justify-center py-1',
                  a,
                ),
              },
              r,
            ),
            {},
            { children: (0, h.jsx)(u.Z, { className: 'h-4 w-4' }) },
          ),
        );
      });
      R.displayName = c.$G.displayName;
      var Z = f.forwardRef(function (e, n) {
        var a = e.className,
          r = e.children,
          t = e.position,
          s = void 0 === t ? 'popper' : t,
          o = l()(e, N);
        return (0, h.jsx)(c.h_, {
          children: (0, h.jsxs)(
            c.VY,
            i()(
              i()(
                {
                  ref: n,
                  className: (0, p.cn)(
                    'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    'popper' === s &&
                      'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
                    a,
                  ),
                  position: s,
                },
                o,
              ),
              {},
              {
                children: [
                  (0, h.jsx)(S, {}),
                  (0, h.jsx)(c.l_, {
                    className: (0, p.cn)(
                      'p-1',
                      'popper' === s &&
                        'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
                    ),
                    children: r,
                  }),
                  (0, h.jsx)(R, {}),
                ],
              },
            ),
          ),
        });
      });
      Z.displayName = c.VY.displayName;
      var M = f.forwardRef(function (e, n) {
        var a = e.className,
          r = l()(e, b);
        return (0, h.jsx)(
          c.__,
          i()(
            {
              ref: n,
              className: (0, p.cn)('py-1.5 pl-8 pr-2 text-sm font-semibold', a),
            },
            r,
          ),
        );
      });
      M.displayName = c.__.displayName;
      var P = f.forwardRef(function (e, n) {
        var a = e.className,
          r = e.children,
          t = l()(e, w);
        return (0, h.jsxs)(
          c.ck,
          i()(
            i()(
              {
                ref: n,
                className: (0, p.cn)(
                  'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  a,
                ),
              },
              t,
            ),
            {},
            {
              children: [
                (0, h.jsx)('span', {
                  className:
                    'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
                  children: (0, h.jsx)(c.wU, {
                    children: (0, h.jsx)(x.Z, { className: 'h-4 w-4' }),
                  }),
                }),
                (0, h.jsx)(c.eT, { children: r }),
              ],
            },
          ),
        );
      });
      (P.displayName = c.ck.displayName),
        (f.forwardRef(function (e, n) {
          var a = e.className,
            r = l()(e, y);
          return (0, h.jsx)(
            c.Z0,
            i()(
              { ref: n, className: (0, p.cn)('-mx-1 my-1 h-px bg-muted', a) },
              r,
            ),
          );
        }).displayName = c.Z0.displayName);
      var F = (0, f.forwardRef)(function (e, n) {
        var a = e.value,
          r = e.onChange,
          s = e.FormControlComponent,
          o = e.options,
          l = void 0 === o ? [] : o,
          c = e.allowClear,
          d = e.placeholder,
          u = e.contentProps,
          m = void 0 === u ? {} : u,
          x = e.triggerClassName,
          p = e.onlyShowSelectedIcon,
          j = void 0 !== p && p,
          g = f.useState(+new Date()),
          v = t()(g, 2),
          N = v[0],
          b = v[1],
          w = f.useState(a),
          y = t()(w, 2),
          S = y[0],
          R = y[1],
          F =
            s ||
            function (e) {
              var n = e.children;
              return (0, h.jsx)('div', { children: n });
            },
          G = (0, f.useCallback)(
            function (e) {
              R(e), null == r || r(e);
            },
            [r],
          ),
          V = (0, f.useCallback)(
            function () {
              G(void 0), b(+new Date());
            },
            [G],
          );
        (0, f.useEffect)(
          function () {
            R(function (e) {
              return e !== a ? a : e;
            });
          },
          [a],
        );
        var I = f.useMemo(
          function () {
            var e = l;
            l.some(function (e) {
              return !('value' in e);
            }) &&
              (e = l.reduce(function (e, n) {
                var a;
                return e.concat(
                  null !== (a = null == n ? void 0 : n.options) && void 0 !== a
                    ? a
                    : [],
                );
              }, []));
            var n = e.find(function (e) {
              return e.value === S;
            });
            return j
              ? null == n
                ? void 0
                : n.icon
              : null == n
                ? void 0
                : n.label;
          },
          [j, l, S],
        );
        return (0, h.jsxs)(
          k,
          {
            onValueChange: G,
            value: S,
            children: [
              (0, h.jsx)(F, {
                children: (0, h.jsx)(z, {
                  value: S,
                  onReset: V,
                  allowClear: c,
                  ref: n,
                  className: x,
                  children: (0, h.jsx)(_, { placeholder: d, children: I }),
                }),
              }),
              (0, h.jsx)(
                Z,
                i()(
                  i()({}, m),
                  {},
                  {
                    children: l.map(function (e, n) {
                      return 'value' in e
                        ? (0, h.jsx)(
                            P,
                            {
                              value: e.value,
                              disabled: e.disabled,
                              children: (0, h.jsxs)('div', {
                                className: 'flex items-center gap-1',
                                children: [e.icon, e.label],
                              }),
                            },
                            e.value,
                          )
                        : (0, h.jsxs)(
                            C,
                            {
                              children: [
                                (0, h.jsx)(M, {
                                  className: 'pl-2',
                                  children: e.label,
                                }),
                                e.options.map(function (e) {
                                  return (0, h.jsx)(
                                    P,
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
                            n,
                          );
                    }),
                  },
                ),
              ),
            ],
          },
          N,
        );
      });
      F.displayName = 'RAGFlowSelect';
    },
    8074: function (e, n, a) {
      a.d(n, {
        Rx: function () {
          return s.Rx;
        },
        j$: function () {
          return o;
        },
      });
      var r = a(9783),
        t = a.n(r),
        s = a(96330),
        i =
          (t()(
            t()(
              t()({}, s.Rx.Dataset, 'Dataset'),
              s.Rx.Testing,
              'Retrieval testing',
            ),
            s.Rx.Configuration,
            'Configuration',
          ),
          (function (e) {
            return (e.Chunk = 'chunk'), (e.File = 'file'), e;
          })({})),
        o =
          (t()(t()({}, i.Chunk, 'Chunk'), i.File, 'File Upload'), 'tagRename');
    },
    14120: function (e, n, a) {
      a.d(n, {
        n: function () {
          return t;
        },
      });
      var r = a(86074);
      function t(e) {
        var n = e.title,
          a = e.description;
        return (0, r.jsxs)('div', {
          className: 'pb-5',
          children: [
            (0, r.jsx)('div', {
              className: 'text-2xl font-semibold',
              children: n,
            }),
            (0, r.jsx)('p', {
              className: 'text-text-sub-title pt-2',
              children: a,
            }),
          ],
        });
      }
    },
    55081: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return Nn;
          },
        });
      var r = a(15009),
        t = a.n(r),
        s = a(97857),
        i = a.n(s),
        o = a(99289),
        l = a.n(o),
        c = a(5574),
        d = a.n(c),
        u = a(80499),
        m = a(13769),
        x = a.n(m),
        f = a(50981),
        p = a(62435),
        h = a(27080),
        j = a(86074),
        g = ['className'],
        v = ['className'],
        N = ['className'],
        b = ['className'];
      function w(e) {
        var n = e.className,
          a = x()(e, g);
        return (0, j.jsx)(
          f.fC,
          i()(
            {
              'data-slot': 'tabs',
              className: (0, h.cn)('flex flex-col gap-2', n),
            },
            a,
          ),
        );
      }
      function y(e) {
        var n = e.className,
          a = x()(e, v);
        return (0, j.jsx)(
          f.aV,
          i()(
            {
              'data-slot': 'tabs-list',
              className: (0, h.cn)(
                'bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
                n,
              ),
            },
            a,
          ),
        );
      }
      function k(e) {
        var n = e.className,
          a = x()(e, N);
        return (0, j.jsx)(
          f.xz,
          i()(
            {
              'data-slot': 'tabs-trigger',
              className: (0, h.cn)(
                "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                n,
              ),
            },
            a,
          ),
        );
      }
      function C(e) {
        var n = e.className,
          a = x()(e, b);
        return (0, j.jsx)(
          f.VY,
          i()(
            {
              'data-slot': 'tabs-content',
              className: (0, h.cn)('flex-1 outline-none', n),
            },
            a,
          ),
        );
      }
      var _ = a(96330),
        z = a(56312),
        S = a(87536),
        R = a(67421),
        Z = a(14120),
        M = a(9783),
        P = a.n(M),
        F = a(57636),
        G = a(36316),
        V = a(10541),
        I = a(42028),
        E = a(62378),
        T = a(86968),
        Y = a(15309);
      var K = function () {
          var e = (0, T.qM)('knowledgeConfiguration').t;
          return (0, j.jsx)(Y.W, {
            name: 'pagerank',
            label: e('pageRank'),
            tooltip: e('pageRankTip'),
            defaultValue: 0,
            max: 100,
            min: 0,
          });
        },
        D = a(60739),
        $ = a(59909),
        q = a(51811);
      function X(e) {
        var n = e.children,
          a = e.className;
        return (0, j.jsx)(q.Y, {
          className: (0, h.cn)('p-10', a),
          children: n,
        });
      }
      function B(e) {
        var n = e.children;
        return (0, j.jsx)('section', { className: 'space-y-5', children: n });
      }
      var J = a(73352),
        A = a(87547),
        O = a(42075),
        W = a(7134),
        L = (a(22150), a(34041), a(86250), a(71338), a(48928), a(27856)),
        U = a.n(L),
        H = function () {
          var e = (0, R.$G)().t,
            n = (0, S.Gc)(),
            a = (0, V.VJ)(!0)
              .list.filter(function (e) {
                return 'tag' === e.parser_id;
              })
              .map(function (e) {
                return {
                  label: e.name,
                  value: e.id,
                  icon: function () {
                    return (0, j.jsxs)(O.Z, {
                      children: [
                        (0, j.jsx)(W.C, {
                          size: 20,
                          icon: (0, j.jsx)(A.Z, {}),
                          src: e.avatar,
                        }),
                        e.name,
                      ],
                    });
                  },
                };
              });
          return (0, j.jsx)(u.Wi, {
            control: n.control,
            name: 'parser_config.tag_kb_ids',
            render: function (n) {
              var r = n.field;
              return (0, j.jsxs)(u.xJ, {
                className: ' items-center space-y-0 ',
                children: [
                  (0, j.jsxs)('div', {
                    className: 'flex items-center',
                    children: [
                      (0, j.jsx)(u.lX, {
                        className:
                          'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                        tooltip: (0, j.jsx)('div', {
                          dangerouslySetInnerHTML: {
                            __html: U().sanitize(
                              e('knowledgeConfiguration.tagSetTip'),
                            ),
                          },
                        }),
                        children: e('knowledgeConfiguration.tagSet'),
                      }),
                      (0, j.jsx)('div', {
                        className: 'w-3/4',
                        children: (0, j.jsx)(u.NI, {
                          children: (0, j.jsx)(
                            J.N,
                            i()(
                              {
                                options: a,
                                onValueChange: r.onChange,
                                placeholder: e('chat.knowledgeBasesMessage'),
                                variant: 'inverted',
                                maxCount: 0,
                              },
                              r,
                            ),
                          ),
                        }),
                      }),
                    ],
                  }),
                  (0, j.jsxs)('div', {
                    className: 'flex pt-1',
                    children: [
                      (0, j.jsx)('div', { className: 'w-1/4' }),
                      (0, j.jsx)(u.zG, {}),
                    ],
                  }),
                ],
              });
            },
          });
        },
        Q = function () {
          var e = (0, R.$G)().t;
          return (0, j.jsx)(Y.W, {
            name: 'parser_config.topn_tags',
            label: e('knowledgeConfiguration.topnTags'),
            max: 10,
            min: 1,
            defaultValue: 3,
          });
        };
      function ee() {
        var e = (0, S.Gc)(),
          n = (0, S.qo)({
            control: e.control,
            name: 'parser_config.tag_kb_ids',
          });
        return (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsx)(H, {}),
            Array.isArray(n) && n.length > 0 && (0, j.jsx)(Q, {}),
          ],
        });
      }
      var ne = a(84586),
        ae = a(38392),
        re = (a(96100), a(8002)),
        te = a(39259),
        se = a(51331),
        ie = a(96486),
        oe = ['email', 'picture', 'audio'];
      var le = function (e) {
        var n = (0, re.PX)().data;
        return (
          (0, p.useEffect)(
            function () {
              var a = (0, se.P2)(n.avatar);
              console.log('🚀 ~ useEffect ~ fileList:', a),
                e.reset(
                  i()(
                    i()(
                      {},
                      (0, ie.pick)(n, [
                        'description',
                        'name',
                        'permission',
                        'embd_id',
                        'parser_id',
                        'language',
                        'parser_config',
                        'pagerank',
                      ]),
                    ),
                    {},
                    { avatar: a },
                  ),
                );
            },
            [e, n],
          ),
          n
        );
      };
      function ce() {
        var e = (0, T.qM)('knowledgeConfiguration').t,
          n = (0, S.Gc)(),
          a = (0, te.XH)().filter(function (e) {
            return !oe.some(function (n) {
              return n === e.value;
            });
          });
        return (0, j.jsx)(u.Wi, {
          control: n.control,
          name: 'parser_id',
          render: function (n) {
            var r = n.field;
            return (0, j.jsxs)(u.xJ, {
              className: ' items-center space-y-0 ',
              children: [
                (0, j.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, j.jsx)(u.lX, {
                      tooltip: e('chunkMethodTip'),
                      className:
                        'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                      children: e('chunkMethod'),
                    }),
                    (0, j.jsx)('div', {
                      className: 'w-3/4 ',
                      children: (0, j.jsx)(u.NI, {
                        children: (0, j.jsx)(
                          ne.vM,
                          i()(
                            i()({}, r),
                            {},
                            {
                              options: a,
                              placeholder: e('chunkMethodPlaceholder'),
                            },
                          ),
                        ),
                      }),
                    }),
                  ],
                }),
                (0, j.jsxs)('div', {
                  className: 'flex pt-1',
                  children: [
                    (0, j.jsx)('div', { className: 'w-1/4' }),
                    (0, j.jsx)(u.zG, {}),
                  ],
                }),
              ],
            });
          },
        });
      }
      function de() {
        var e = (0, T.qM)('knowledgeConfiguration').t,
          n = (0, S.Gc)(),
          a = (0, ae.hl)()[_.Vr.Embedding],
          r = (0, re.PX)().data.chunk_num > 0;
        return (0, j.jsx)(u.Wi, {
          control: n.control,
          name: 'embd_id',
          render: function (n) {
            var t = n.field;
            return (0, j.jsxs)(u.xJ, {
              className: ' items-center space-y-0 ',
              children: [
                (0, j.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, j.jsx)(u.lX, {
                      tooltip: e('embeddingModelTip'),
                      className:
                        'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                      children: e('embeddingModel'),
                    }),
                    (0, j.jsx)('div', {
                      className: 'w-3/4',
                      children: (0, j.jsx)(u.NI, {
                        children: (0, j.jsx)(
                          ne.vM,
                          i()(
                            i()({}, t),
                            {},
                            {
                              options: a,
                              disabled: r,
                              placeholder: e('embeddingModelPlaceholder'),
                            },
                          ),
                        ),
                      }),
                    }),
                  ],
                }),
                (0, j.jsxs)('div', {
                  className: 'flex pt-1',
                  children: [
                    (0, j.jsx)('div', { className: 'w-1/4' }),
                    (0, j.jsx)(u.zG, {}),
                  ],
                }),
              ],
            });
          },
        });
      }
      var ue = a(36758);
      var me = a(43669),
        xe = a(72687),
        fe = a(76973);
      var pe,
        he = a(45841);
      var je =
        ((pe = {}),
        P()(
          P()(
            P()(
              P()(
                P()(
                  P()(
                    P()(
                      P()(
                        P()(
                          P()(pe, _.K1.Naive, function () {
                            return (0, j.jsxs)(B, {
                              children: [
                                (0, j.jsxs)(X, {
                                  children: [
                                    (0, j.jsx)(ce, {}),
                                    (0, j.jsx)(ue.E, {}),
                                    (0, j.jsx)(de, {}),
                                    (0, j.jsx)(fe.M, {}),
                                    (0, j.jsx)(me.M, {}),
                                  ],
                                }),
                                (0, j.jsxs)(X, {
                                  children: [
                                    (0, j.jsx)(K, {}),
                                    (0, j.jsx)(E.G, {}),
                                    (0, j.jsx)(E.e, {}),
                                    (0, j.jsx)(he.s, {}),
                                    (0, j.jsx)(ee, {}),
                                  ],
                                }),
                                (0, j.jsx)(X, {
                                  children: (0, j.jsx)($.ZP, {}),
                                }),
                                (0, j.jsx)(D.ZP, {}),
                              ],
                            });
                          }),
                          _.K1.Qa,
                          function () {
                            return (0, j.jsxs)(X, {
                              children: [
                                (0, j.jsx)(ce, {}),
                                (0, j.jsx)(de, {}),
                                (0, j.jsx)(K, {}),
                                (0, j.jsx)(ee, {}),
                              ],
                            });
                          },
                        ),
                        _.K1.Resume,
                        function () {
                          return (0, j.jsxs)(X, {
                            children: [
                              (0, j.jsx)(ce, {}),
                              (0, j.jsx)(de, {}),
                              (0, j.jsx)(K, {}),
                              (0, j.jsx)(ee, {}),
                            ],
                          });
                        },
                      ),
                      _.K1.Manual,
                      function () {
                        return (0, j.jsxs)(B, {
                          children: [
                            (0, j.jsxs)(X, {
                              children: [
                                (0, j.jsx)(ce, {}),
                                (0, j.jsx)(ue.E, {}),
                                (0, j.jsx)(de, {}),
                                (0, j.jsx)(K, {}),
                              ],
                            }),
                            (0, j.jsxs)(X, {
                              children: [
                                (0, j.jsx)(E.G, {}),
                                (0, j.jsx)(E.e, {}),
                              ],
                            }),
                            (0, j.jsx)(X, { children: (0, j.jsx)($.ZP, {}) }),
                            (0, j.jsx)(D.ZP, { marginBottom: !0 }),
                            (0, j.jsx)(ee, {}),
                          ],
                        });
                      },
                    ),
                    _.K1.Table,
                    function () {
                      return (0, j.jsxs)(X, {
                        children: [
                          (0, j.jsx)(ce, {}),
                          (0, j.jsx)(de, {}),
                          (0, j.jsx)(K, {}),
                        ],
                      });
                    },
                  ),
                  _.K1.Paper,
                  function () {
                    return (0, j.jsxs)(B, {
                      children: [
                        (0, j.jsxs)(X, {
                          children: [
                            (0, j.jsx)(ce, {}),
                            (0, j.jsx)(ue.E, {}),
                            (0, j.jsx)(de, {}),
                            (0, j.jsx)(K, {}),
                          ],
                        }),
                        (0, j.jsxs)(X, {
                          children: [(0, j.jsx)(E.G, {}), (0, j.jsx)(E.e, {})],
                        }),
                        (0, j.jsx)(X, { children: (0, j.jsx)($.ZP, {}) }),
                        (0, j.jsx)(D.ZP, { marginBottom: !0 }),
                        (0, j.jsx)(X, { children: (0, j.jsx)(ee, {}) }),
                      ],
                    });
                  },
                ),
                _.K1.Book,
                function () {
                  return (0, j.jsxs)(B, {
                    children: [
                      (0, j.jsxs)(X, {
                        children: [
                          (0, j.jsx)(ce, {}),
                          (0, j.jsx)(ue.E, {}),
                          (0, j.jsx)(de, {}),
                          (0, j.jsx)(K, {}),
                        ],
                      }),
                      (0, j.jsxs)(X, {
                        children: [(0, j.jsx)(E.G, {}), (0, j.jsx)(E.e, {})],
                      }),
                      (0, j.jsx)(X, { children: (0, j.jsx)($.ZP, {}) }),
                      (0, j.jsx)(D.ZP, { marginBottom: !0, className: 'p-10' }),
                      (0, j.jsx)(X, { children: (0, j.jsx)(ee, {}) }),
                    ],
                  });
                },
              ),
              _.K1.Laws,
              function () {
                return (0, j.jsxs)(B, {
                  children: [
                    (0, j.jsxs)(X, {
                      children: [
                        (0, j.jsx)(ce, {}),
                        (0, j.jsx)(ue.E, {}),
                        (0, j.jsx)(de, {}),
                        (0, j.jsx)(K, {}),
                      ],
                    }),
                    (0, j.jsxs)(X, {
                      children: [(0, j.jsx)(E.G, {}), (0, j.jsx)(E.e, {})],
                    }),
                    (0, j.jsx)(X, { children: (0, j.jsx)($.ZP, {}) }),
                    (0, j.jsx)(D.ZP, { marginBottom: !0 }),
                    (0, j.jsx)(X, { children: (0, j.jsx)(ee, {}) }),
                  ],
                });
              },
            ),
            _.K1.Presentation,
            function () {
              return (0, j.jsxs)(B, {
                children: [
                  (0, j.jsxs)(X, {
                    children: [
                      (0, j.jsx)(ce, {}),
                      (0, j.jsx)(ue.E, {}),
                      (0, j.jsx)(de, {}),
                      (0, j.jsx)(K, {}),
                    ],
                  }),
                  (0, j.jsxs)(X, {
                    children: [(0, j.jsx)(E.G, {}), (0, j.jsx)(E.e, {})],
                  }),
                  (0, j.jsx)(X, { children: (0, j.jsx)($.ZP, {}) }),
                  (0, j.jsx)(D.ZP, { marginBottom: !0 }),
                  (0, j.jsx)(X, { children: (0, j.jsx)(ee, {}) }),
                ],
              });
            },
          ),
          _.K1.Picture,
          function () {
            return (0, j.jsxs)(X, {
              children: [
                (0, j.jsx)(ce, {}),
                (0, j.jsx)(de, {}),
                (0, j.jsx)(K, {}),
                (0, j.jsxs)(j.Fragment, {
                  children: [(0, j.jsx)(E.G, {}), (0, j.jsx)(E.e, {})],
                }),
                (0, j.jsx)(ee, {}),
              ],
            });
          },
        ),
        P()(
          P()(
            P()(
              P()(
                P()(pe, _.K1.One, function () {
                  return (0, j.jsxs)(X, {
                    children: [
                      (0, j.jsx)(ce, {}),
                      (0, j.jsx)(ue.E, {}),
                      (0, j.jsx)(de, {}),
                      (0, j.jsx)(K, {}),
                      (0, j.jsxs)(j.Fragment, {
                        children: [(0, j.jsx)(E.G, {}), (0, j.jsx)(E.e, {})],
                      }),
                      (0, j.jsx)(D.ZP, { marginBottom: !0 }),
                      (0, j.jsx)(ee, {}),
                    ],
                  });
                }),
                _.K1.Audio,
                function () {
                  return (0, j.jsxs)(X, {
                    children: [
                      (0, j.jsx)(ce, {}),
                      (0, j.jsx)(de, {}),
                      (0, j.jsx)(K, {}),
                      (0, j.jsxs)(j.Fragment, {
                        children: [(0, j.jsx)(E.G, {}), (0, j.jsx)(E.e, {})],
                      }),
                      (0, j.jsx)($.ZP, {}),
                      (0, j.jsx)(D.ZP, { marginBottom: !0 }),
                      (0, j.jsx)(ee, {}),
                    ],
                  });
                },
              ),
              _.K1.Email,
              function () {
                return (0, j.jsxs)(X, {
                  children: [
                    (0, j.jsx)(ce, {}),
                    (0, j.jsx)(de, {}),
                    (0, j.jsx)(K, {}),
                    (0, j.jsxs)(j.Fragment, {
                      children: [(0, j.jsx)(E.G, {}), (0, j.jsx)(E.e, {})],
                    }),
                    (0, j.jsx)($.ZP, {}),
                    (0, j.jsx)(D.ZP, { marginBottom: !0 }),
                    (0, j.jsx)(ee, {}),
                  ],
                });
              },
            ),
            _.K1.Tag,
            function () {
              return (0, j.jsxs)(X, {
                children: [
                  (0, j.jsx)(ce, {}),
                  (0, j.jsx)(de, {}),
                  (0, j.jsx)(K, {}),
                ],
              });
            },
          ),
          _.K1.KnowledgeGraph,
          function () {
            return (0, j.jsxs)(j.Fragment, {
              children: [
                (0, j.jsx)(ce, {}),
                (0, j.jsx)(de, {}),
                (0, j.jsx)(K, {}),
                (0, j.jsxs)(j.Fragment, {
                  children: [
                    (0, j.jsx)(xe.i, {}),
                    (0, j.jsx)(fe.M, { max: 16384 }),
                    (0, j.jsx)(me.M, {}),
                  ],
                }),
              ],
            });
          },
        ));
      function ge() {
        return (0, j.jsx)('div', {});
      }
      function ve() {
        var e = (0, S.Gc)(),
          n = (0, R.$G)().t,
          a = (0, I.UO)().id,
          r = (0, V.MA)(),
          s = r.saveKnowledgeConfiguration,
          o = r.loading,
          c = (0, S.qo)({ control: e.control, name: 'parser_id' }),
          d = (0, p.useMemo)(
            function () {
              return c ? je[c] : ge;
            },
            [c],
          );
        return (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsx)('section', {
              className: 'overflow-auto max-h-[76vh]',
              children: (0, j.jsx)(d, {}),
            }),
            (0, j.jsx)('div', {
              className: 'text-right pt-4',
              children: (0, j.jsxs)(F.zx, {
                disabled: o,
                onClick: function () {
                  l()(
                    t()().mark(function n() {
                      var r, o;
                      return t()().wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.prev = 0),
                                  (n.next = 3),
                                  e.formControl.trigger()
                                );
                              case 3:
                                (r = n.sent),
                                  console.log('user chunk form: ', e),
                                  r &&
                                    (delete (o = e.formState.values).avatar,
                                    s(i()(i()({}, o), {}, { kb_id: a }))),
                                  (n.next = 11);
                                break;
                              case 8:
                                (n.prev = 8),
                                  (n.t0 = n.catch(0)),
                                  console.log(n.t0);
                              case 11:
                                return (n.prev = 11), n.finish(11);
                              case 13:
                              case 'end':
                                return n.stop();
                            }
                        },
                        n,
                        null,
                        [[0, 8, 11, 13]],
                      );
                    }),
                  )();
                },
                children: [
                  o && (0, j.jsx)(G.Z, { className: 'animate-spin' }),
                  n('common.submit'),
                ],
              }),
            }),
          ],
        });
      }
      var Ne = a(41352),
        be = a(46693),
        we = a(22850),
        ye = a(71230),
        ke = a(15746),
        Ce = a(96074),
        _e = a(32983),
        ze = a(68929),
        Se = a.n(ze),
        Re = 'categoryPanelWrapper___p126B',
        Ze = 'imageRow___Km77j',
        Me = 'image___vIgxT',
        Pe = a(92783),
        Fe = a(74094),
        Ge = a(27060),
        Ve = a(61932),
        Ie = a(13718),
        Ee = a(90470),
        Te = a(26625),
        Ye = a(23309),
        Ke = a(27591),
        De = a(75269),
        $e = a(84146),
        qe = a(28993),
        Xe = a(11524),
        Be = a(8074),
        Je = a(1604);
      function Ae(e) {
        var n = e.initialName,
          a = e.hideModal,
          r = (0, R.$G)().t,
          s = Je.z.object({
            name: Je.z
              .string()
              .min(1, { message: r('common.namePlaceholder') })
              .trim(),
          }),
          o = (0, S.cI)({ resolver: (0, z.F)(s), defaultValues: { name: '' } }),
          c = (0, V.Sq)().renameTag;
        function d() {
          return (d = l()(
            t()().mark(function e(r) {
              return t()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), c({ fromTag: n, toTag: r.name });
                    case 2:
                      e.sent && (null == a || a());
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        return (
          (0, p.useEffect)(
            function () {
              o.setValue('name', n);
            },
            [o, n],
          ),
          (0, j.jsx)(
            u.l0,
            i()(
              i()({}, o),
              {},
              {
                children: (0, j.jsx)('form', {
                  onSubmit: o.handleSubmit(function (e) {
                    return d.apply(this, arguments);
                  }),
                  className: 'space-y-6',
                  id: Be.j$,
                  children: (0, j.jsx)(u.Wi, {
                    control: o.control,
                    name: 'name',
                    render: function (e) {
                      var n = e.field;
                      return (0, j.jsxs)(u.xJ, {
                        children: [
                          (0, j.jsx)(u.lX, { children: r('common.name') }),
                          (0, j.jsx)(u.NI, {
                            children: (0, j.jsx)(
                              Ke.II,
                              i()(
                                i()(
                                  { placeholder: r('common.namePlaceholder') },
                                  n,
                                ),
                                {},
                                { autoComplete: 'off' },
                              ),
                            ),
                          }),
                          (0, j.jsx)(u.zG, {}),
                        ],
                      });
                    },
                  }),
                }),
              },
            ),
          )
        );
      }
      function Oe(e) {
        var n = e.hideModal,
          a = e.initialName,
          r = (0, R.$G)().t,
          t = (0, V.z5)();
        return (0, j.jsx)(qe.Vq, {
          open: !0,
          onOpenChange: n,
          children: (0, j.jsxs)(qe.cZ, {
            className: 'sm:max-w-[425px]',
            children: [
              (0, j.jsx)(qe.fK, {
                children: (0, j.jsx)(qe.$N, { children: r('common.rename') }),
              }),
              (0, j.jsx)(Ae, { initialName: a, hideModal: n }),
              (0, j.jsx)(qe.cN, {
                children: (0, j.jsx)(Xe.f, {
                  type: 'submit',
                  form: Be.j$,
                  loading: t,
                  children: r('common.save'),
                }),
              }),
            ],
          }),
        });
      }
      function We() {
        var e,
          n,
          a,
          r = (0, R.$G)().t,
          t = (0, V.lX)().list,
          s = (0, p.useState)([]),
          i = d()(s, 2),
          o = i[0],
          l = i[1],
          c = p.useState([]),
          u = d()(c, 2),
          m = u[0],
          x = u[1],
          f = p.useState([]),
          h = d()(f, 2),
          g = h[0],
          v = h[1],
          N = p.useState({}),
          b = d()(N, 2),
          w = b[0],
          y = b[1],
          k = (0, p.useState)({}),
          C = d()(k, 2),
          _ = C[0],
          z = C[1],
          S = (0, V.uG)().deleteTag;
        (0, p.useEffect)(
          function () {
            l(
              t.map(function (e) {
                return { tag: e[0], frequency: e[1] };
              }),
            );
          },
          [t],
        );
        var Z = (0, p.useCallback)(
            function (e) {
              return function () {
                S(e);
              };
            },
            [S],
          ),
          M = (function () {
            var e = (0, p.useState)(''),
              n = d()(e, 2),
              a = n[0],
              r = n[1],
              t = (0, T.pG)(),
              s = t.visible,
              i = t.hideModal,
              o = t.showModal;
            return {
              initialName: a,
              tagRenameVisible: s,
              hideTagRenameModal: i,
              showTagRenameModal: (0, p.useCallback)(
                function (e) {
                  r(e), o();
                },
                [o],
              ),
            };
          })(),
          P = M.showTagRenameModal,
          G = M.hideTagRenameModal,
          I = M.tagRenameVisible,
          E = M.initialName,
          Y = [
            {
              id: 'select',
              header: function (e) {
                var n = e.table;
                return (0, j.jsx)(Ye.X, {
                  checked:
                    n.getIsAllPageRowsSelected() ||
                    (n.getIsSomePageRowsSelected() && 'indeterminate'),
                  onCheckedChange: function (e) {
                    return n.toggleAllPageRowsSelected(!!e);
                  },
                  'aria-label': 'Select all',
                });
              },
              cell: function (e) {
                var n = e.row;
                return (0, j.jsx)(Ye.X, {
                  checked: n.getIsSelected(),
                  onCheckedChange: function (e) {
                    return n.toggleSelected(!!e);
                  },
                  'aria-label': 'Select row',
                });
              },
              enableSorting: !1,
              enableHiding: !1,
            },
            {
              accessorKey: 'tag',
              header: function (e) {
                var n = e.column;
                return (0, j.jsxs)(F.zx, {
                  variant: 'ghost',
                  onClick: function () {
                    return n.toggleSorting('asc' === n.getIsSorted());
                  },
                  children: [
                    r('knowledgeConfiguration.tagName'),
                    (0, j.jsx)(Ve.Z, {}),
                  ],
                });
              },
              cell: function (e) {
                var n = e.row.getValue('tag');
                return (0, j.jsx)('div', { children: n });
              },
            },
            {
              accessorKey: 'frequency',
              header: function (e) {
                var n = e.column;
                return (0, j.jsxs)(F.zx, {
                  variant: 'ghost',
                  onClick: function () {
                    return n.toggleSorting('asc' === n.getIsSorted());
                  },
                  children: [
                    r('knowledgeConfiguration.frequency'),
                    (0, j.jsx)(Ve.Z, {}),
                  ],
                });
              },
              cell: function (e) {
                var n = e.row;
                return (0, j.jsx)('div', {
                  className: 'capitalize ',
                  children: n.getValue('frequency'),
                });
              },
            },
            {
              id: 'actions',
              enableHiding: !1,
              header: r('common.action'),
              cell: function (e) {
                var n = e.row;
                return (0, j.jsxs)('div', {
                  className: 'flex gap-1',
                  children: [
                    (0, j.jsxs)($e.u, {
                      children: [
                        (0, j.jsx)(Te.h, {
                          onOk: Z([n.original.tag]),
                          children: (0, j.jsx)($e.aJ, {
                            asChild: !0,
                            children: (0, j.jsx)(F.zx, {
                              variant: 'ghost',
                              size: 'icon',
                              children: (0, j.jsx)(Ie.Z, {}),
                            }),
                          }),
                        }),
                        (0, j.jsx)($e._v, {
                          children: (0, j.jsx)('p', {
                            children: r('common.delete'),
                          }),
                        }),
                      ],
                    }),
                    (0, j.jsxs)($e.u, {
                      children: [
                        (0, j.jsx)($e.aJ, {
                          asChild: !0,
                          children: (0, j.jsx)(F.zx, {
                            variant: 'ghost',
                            size: 'icon',
                            onClick: function () {
                              return P(n.original.tag);
                            },
                            children: (0, j.jsx)(Ee.Z, {}),
                          }),
                        }),
                        (0, j.jsx)($e._v, {
                          children: (0, j.jsx)('p', {
                            children: r('common.rename'),
                          }),
                        }),
                      ],
                    }),
                  ],
                });
              },
            },
          ],
          K = (0, Fe.b7)({
            data: o,
            columns: Y,
            onSortingChange: x,
            onColumnFiltersChange: v,
            getCoreRowModel: (0, Ge.sC)(),
            getPaginationRowModel: (0, Ge.G_)(),
            getSortedRowModel: (0, Ge.tj)(),
            getFilteredRowModel: (0, Ge.vL)(),
            onColumnVisibilityChange: y,
            onRowSelectionChange: z,
            state: {
              sorting: m,
              columnFilters: g,
              columnVisibility: w,
              rowSelection: _,
            },
          }),
          D = K.getFilteredSelectedRowModel().rows.length;
        return (0, j.jsxs)($e.pn, {
          children: [
            (0, j.jsxs)('div', {
              className: 'w-full',
              children: [
                (0, j.jsxs)('div', {
                  className: 'flex items-center justify-between py-4 ',
                  children: [
                    (0, j.jsx)(Ke.II, {
                      placeholder: r('knowledgeConfiguration.searchTags'),
                      value:
                        null !==
                          (e =
                            null === (n = K.getColumn('tag')) || void 0 === n
                              ? void 0
                              : n.getFilterValue()) && void 0 !== e
                          ? e
                          : '',
                      onChange: function (e) {
                        var n;
                        return null === (n = K.getColumn('tag')) || void 0 === n
                          ? void 0
                          : n.setFilterValue(e.target.value);
                      },
                      className: 'w-1/2',
                    }),
                    D > 0 &&
                      (0, j.jsx)(Te.h, {
                        onOk: Z(
                          K.getFilteredSelectedRowModel().rows.map(
                            function (e) {
                              return e.original.tag;
                            },
                          ),
                        ),
                        children: (0, j.jsx)(F.zx, {
                          variant: 'outline',
                          size: 'icon',
                          children: (0, j.jsx)(Ie.Z, {}),
                        }),
                      }),
                  ],
                }),
                (0, j.jsx)('div', {
                  className: 'rounded-md border',
                  children: (0, j.jsxs)(De.iA, {
                    children: [
                      (0, j.jsx)(De.xD, {
                        children: K.getHeaderGroups().map(function (e) {
                          return (0, j.jsx)(
                            De.SC,
                            {
                              children: e.headers.map(function (e) {
                                return (0, j.jsx)(
                                  De.ss,
                                  {
                                    children: e.isPlaceholder
                                      ? null
                                      : (0, Fe.ie)(
                                          e.column.columnDef.header,
                                          e.getContext(),
                                        ),
                                  },
                                  e.id,
                                );
                              }),
                            },
                            e.id,
                          );
                        }),
                      }),
                      (0, j.jsx)(De.RM, {
                        children:
                          null !== (a = K.getRowModel().rows) &&
                          void 0 !== a &&
                          a.length
                            ? K.getRowModel().rows.map(function (e) {
                                return (0, j.jsx)(
                                  De.SC,
                                  {
                                    'data-state':
                                      e.getIsSelected() && 'selected',
                                    children: e
                                      .getVisibleCells()
                                      .map(function (e) {
                                        return (0, j.jsx)(
                                          De.pj,
                                          {
                                            children: (0, Fe.ie)(
                                              e.column.columnDef.cell,
                                              e.getContext(),
                                            ),
                                          },
                                          e.id,
                                        );
                                      }),
                                  },
                                  e.id,
                                );
                              })
                            : (0, j.jsx)(De.SC, {
                                children: (0, j.jsx)(De.pj, {
                                  colSpan: Y.length,
                                  className: 'h-24 text-center',
                                  children: 'No results.',
                                }),
                              }),
                      }),
                    ],
                  }),
                }),
                (0, j.jsxs)('div', {
                  className: 'flex items-center justify-end space-x-2 py-4',
                  children: [
                    (0, j.jsxs)('div', {
                      className: 'flex-1 text-sm text-muted-foreground',
                      children: [
                        D,
                        ' of ',
                        K.getFilteredRowModel().rows.length,
                        ' ',
                        'row(s) selected.',
                      ],
                    }),
                    (0, j.jsxs)('div', {
                      className: 'space-x-2',
                      children: [
                        (0, j.jsx)(F.zx, {
                          variant: 'outline',
                          size: 'sm',
                          onClick: function () {
                            return K.previousPage();
                          },
                          disabled: !K.getCanPreviousPage(),
                          children: r('common.previousPage'),
                        }),
                        (0, j.jsx)(F.zx, {
                          variant: 'outline',
                          size: 'sm',
                          onClick: function () {
                            return K.nextPage();
                          },
                          disabled: !K.getCanNextPage(),
                          children: r('common.nextPage'),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            I && (0, j.jsx)(Oe, { hideModal: G, initialName: E }),
          ],
        });
      }
      var Le = a(38332);
      function Ue() {
        var e = (0, p.useRef)(null),
          n = (0, p.useRef)(),
          a = (0, V.lX)().list,
          r = (0, p.useMemo)(
            function () {
              var e = a
                .sort(function (e, n) {
                  return n[1] - e[1];
                })
                .slice(0, 256);
              return {
                list: e.map(function (e) {
                  return { text: e[0], value: e[1], name: e[0] };
                }),
                sumValue: (0, ie.sumBy)(e, function (e) {
                  return e[1];
                }),
                length: e.length,
              };
            },
            [a],
          ),
          t = r.list,
          s = (0, p.useCallback)(
            function () {
              e.current &&
                ((n.current = new Le.kL({ container: e.current })),
                n.current.options({
                  type: 'wordCloud',
                  autoFit: !0,
                  layout: { fontSize: [10, 50] },
                  data: { type: 'inline', value: t },
                  encode: { color: 'text' },
                  legend: !1,
                  tooltip: { title: 'name', items: ['value'] },
                }),
                n.current.render());
            },
            [t],
          );
        return (
          (0, p.useEffect)(
            function () {
              return (
                s(),
                function () {
                  var e;
                  null === (e = n.current) || void 0 === e || e.destroy();
                }
              );
            },
            [s],
          ),
          (0, j.jsx)('div', { ref: e, className: 'w-full h-[38vh]' })
        );
      }
      var He = (function (e) {
          return (e.Cloud = 'cloud'), (e.Table = 'table'), e;
        })(He || {}),
        Qe = P()(
          P()({}, He.Cloud, (0, j.jsx)(Ue, {})),
          He.Table,
          (0, j.jsx)(We, {}),
        );
      function en() {
        var e = (0, p.useState)(He.Cloud),
          n = d()(e, 2),
          a = n[0],
          r = n[1],
          t = (0, R.$G)().t,
          s = [He.Cloud, He.Table].map(function (e) {
            return {
              label: t(
                'knowledgeConfiguration.tag'.concat((0, ie.upperFirst)(e)),
              ),
              value: e,
            };
          });
        return (0, j.jsxs)('section', {
          className: 'mt-4',
          children: [
            (0, j.jsx)(Pe.Z, {
              value: a,
              options: s,
              onChange: function (e) {
                return r(e);
              },
            }),
            Qe[a],
          ],
        });
      }
      var nn = function (e, n) {
          return new Array(n).fill(0).map(function (n, a) {
            return 'chunk-method/'.concat(e, '-0').concat(a + 1);
          });
        },
        an = {
          book: nn('book', 4),
          laws: nn('law', 2),
          manual: nn('manual', 4),
          picture: nn('media', 2),
          naive: nn('naive', 2),
          paper: nn('paper', 2),
          presentation: nn('presentation', 2),
          qa: nn('qa', 2),
          resume: nn('resume', 2),
          table: nn('table', 2),
          one: nn('one', 2),
          knowledge_graph: nn('knowledge-graph', 2),
        },
        rn = we.Z.Text,
        tn = function (e) {
          var n = e.chunkMethod,
            a = (0, te.XH)(),
            r = (0, T.qM)('knowledgeConfiguration').t,
            t = (0, p.useMemo)(
              function () {
                var e = a.find(function (e) {
                  return e.value === n;
                });
                return e
                  ? { title: e.label, description: r(Se()(e.value)) }
                  : { title: '', description: '' };
              },
              [a, n, r],
            ),
            s = (0, p.useMemo)(
              function () {
                return n in an ? an[n] : [];
              },
              [n],
            );
          return (0, j.jsxs)('section', {
            className: Re,
            children: [
              s.length > 0
                ? (0, j.jsxs)(j.Fragment, {
                    children: [
                      (0, j.jsx)('h5', {
                        className: 'font-semibold text-base mt-0 mb-1',
                        children: '"'
                          .concat(t.title, '" ')
                          .concat(r('methodTitle')),
                      }),
                      (0, j.jsx)('p', {
                        dangerouslySetInnerHTML: {
                          __html: U().sanitize(t.description),
                        },
                      }),
                      (0, j.jsx)('h5', {
                        className: 'font-semibold text-base mt-4 mb-1',
                        children: '"'
                          .concat(t.title, '" ')
                          .concat(r('methodExamples')),
                      }),
                      (0, j.jsx)(rn, {
                        children: r('methodExamplesDescription'),
                      }),
                      (0, j.jsx)(ye.Z, {
                        gutter: [10, 10],
                        className: Ze,
                        children: s.map(function (e) {
                          return (0, j.jsx)(
                            ke.Z,
                            {
                              span: 12,
                              children: (0, j.jsx)(be.Z, {
                                name: e,
                                width: '100%',
                                className: Me,
                              }),
                            },
                            e,
                          );
                        }),
                      }),
                      (0, j.jsxs)('h5', {
                        className: 'font-semibold text-base mt-4 mb-1',
                        children: [t.title, ' ', r('dialogueExamplesTitle')],
                      }),
                      (0, j.jsx)(Ce.Z, {}),
                    ],
                  })
                : (0, j.jsxs)(_e.Z, {
                    description: '',
                    image: null,
                    children: [
                      (0, j.jsx)('p', { children: r('methodEmpty') }),
                      (0, j.jsx)(be.Z, {
                        name: 'chunk-method/chunk-empty',
                        width: '100%',
                      }),
                    ],
                  }),
              'tag' === n && (0, j.jsx)(en, {}),
            ],
          });
        },
        sn = function (e) {
          var n = e.tab,
            a = void 0 === n ? 'generalForm' : n,
            r = e.parserId,
            t = (0, p.useState)(!0),
            s = d()(t, 2),
            i = s[0],
            o = s[1];
          return (0, j.jsxs)('div', {
            style: { display: 'chunkMethodForm' === a ? 'block' : 'none' },
            children: [
              (0, j.jsx)(F.zx, {
                variant: 'outline',
                onClick: function () {
                  o(!i);
                },
                children: 'Learn More',
              }),
              (0, j.jsxs)('div', {
                className:
                  'bg-[#FFF]/10 p-[20px] rounded-[12px] mt-[10px] relative',
                style: { display: i ? 'block' : 'none' },
                children: [
                  (0, j.jsx)(tn, { chunkMethod: r }),
                  (0, j.jsx)('div', {
                    className:
                      'absolute right-1 top-1 cursor-pointer hover:text-[#FFF]/30',
                    onClick: function () {
                      o(!1);
                    },
                    children: (0, j.jsx)(Ne.Z, {}),
                  }),
                ],
              }),
            ],
          });
        },
        on = Je.z.object({
          name: Je.z
            .string()
            .min(1, { message: 'Username must be at least 2 characters.' }),
          description: Je.z
            .string()
            .min(2, { message: 'Username must be at least 2 characters.' }),
          avatar: Je.z.any().nullish(),
          permission: Je.z.string(),
          parser_id: Je.z.string(),
          embd_id: Je.z.string(),
          parser_config: Je.z
            .object({
              layout_recognize: Je.z.string(),
              chunk_token_num: Je.z.number(),
              delimiter: Je.z.string(),
              auto_keywords: Je.z.number().optional(),
              auto_questions: Je.z.number().optional(),
              html4excel: Je.z.boolean(),
              tag_kb_ids: Je.z.array(Je.z.string()).nullish(),
              topn_tags: Je.z.number().optional(),
              raptor: Je.z
                .object({
                  use_raptor: Je.z.boolean().optional(),
                  prompt: Je.z.string().optional(),
                  max_token: Je.z.number().optional(),
                  threshold: Je.z.number().optional(),
                  max_cluster: Je.z.number().optional(),
                  random_seed: Je.z.number().optional(),
                })
                .refine(
                  function (e) {
                    return !(e.use_raptor && !e.prompt);
                  },
                  { message: 'Prompt is required', path: ['prompt'] },
                ),
              graphrag: Je.z
                .object({
                  use_graphrag: Je.z.boolean().optional(),
                  entity_types: Je.z.array(Je.z.string()).optional(),
                  method: Je.z.string().optional(),
                  resolution: Je.z.boolean().optional(),
                  community: Je.z.boolean().optional(),
                })
                .refine(
                  function (e) {
                    return !(
                      e.use_graphrag &&
                      (!e.entity_types || 0 === e.entity_types.length)
                    );
                  },
                  {
                    message: 'Please enter Entity types',
                    path: ['entity_types'],
                  },
                ),
            })
            .optional(),
          pagerank: Je.z.number(),
        }),
        ln = a(52677),
        cn = a.n(ln),
        dn = a(5715),
        un = a(62426),
        mn = a(50316),
        xn = ['className'],
        fn = ['className'],
        pn = p.forwardRef(function (e, n) {
          var a = e.className,
            r = x()(e, xn);
          return (0, j.jsx)(
            un.fC,
            i()(
              i()({ className: (0, h.cn)('grid gap-2', a) }, r),
              {},
              { ref: n },
            ),
          );
        });
      pn.displayName = un.fC.displayName;
      var hn = p.forwardRef(function (e, n) {
        var a = e.className,
          r = x()(e, fn);
        return (0, j.jsx)(
          un.ck,
          i()(
            i()(
              {
                ref: n,
                className: (0, h.cn)(
                  'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                  a,
                ),
              },
              r,
            ),
            {},
            {
              children: (0, j.jsx)(un.z$, {
                className: 'flex items-center justify-center',
                children: (0, j.jsx)(mn.Z, {
                  className: 'h-2.5 w-2.5 fill-current text-current',
                }),
              }),
            },
          ),
        );
      });
      hn.displayName = un.ck.displayName;
      var jn = a(28142);
      function gn() {
        var e = (0, S.Gc)(),
          n = (0, R.$G)().t,
          a = (0, p.useState)(null),
          r = d()(a, 2),
          s = r[0],
          o = r[1],
          c = (0, p.useState)(''),
          m = d()(c, 2),
          x = m[0],
          f = m[1],
          h = (0, V.MA)(),
          g = h.saveKnowledgeConfiguration,
          v = h.loading,
          N = (0, p.useMemo)(
            function () {
              var n;
              return null !== (n = e.formState.defaultValues) && void 0 !== n
                ? n
                : {};
            },
            [e.formState.defaultValues],
          ),
          b = N.parser_id,
          w = (0, I.UO)().id;
        return (
          (0, p.useEffect)(
            function () {
              if (!s) {
                var e = N.avatar;
                e && e.length > 0 && f(e[0].thumbUrl);
              }
            },
            [s, N],
          ),
          (0, p.useEffect)(
            function () {
              s &&
                l()(
                  t()().mark(function e() {
                    return t()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.t0 = f), (e.next = 3), (0, se._V)(s);
                          case 3:
                            (e.t1 = e.sent), (0, e.t0)(e.t1);
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )();
            },
            [s],
          ),
          (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsxs)(q.Y, {
                className: 'space-y-10 p-10',
                children: [
                  (0, j.jsx)(u.Wi, {
                    control: e.control,
                    name: 'name',
                    render: function (e) {
                      var a = e.field;
                      return (0, j.jsxs)(u.xJ, {
                        className: 'items-center space-y-0',
                        children: [
                          (0, j.jsxs)('div', {
                            className: 'flex',
                            children: [
                              (0, j.jsxs)(u.lX, {
                                className:
                                  'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                                children: [
                                  (0, j.jsx)('span', {
                                    className: 'text-red-600',
                                    children: '*',
                                  }),
                                  n('common.name'),
                                ],
                              }),
                              (0, j.jsx)(u.NI, {
                                className: 'w-3/4',
                                children: (0, j.jsx)(Ke.II, i()({}, a)),
                              }),
                            ],
                          }),
                          (0, j.jsxs)('div', {
                            className: 'flex pt-1',
                            children: [
                              (0, j.jsx)('div', { className: 'w-1/4' }),
                              (0, j.jsx)(u.zG, {}),
                            ],
                          }),
                        ],
                      });
                    },
                  }),
                  (0, j.jsx)(u.Wi, {
                    control: e.control,
                    name: 'description',
                    render: function (a) {
                      var r = a.field;
                      return (
                        'object' !== cn()(r.value) ||
                          r.value ||
                          e.setValue('description', '  '),
                        (0, j.jsxs)(u.xJ, {
                          className: 'items-center space-y-0',
                          children: [
                            (0, j.jsxs)('div', {
                              className: 'flex',
                              children: [
                                (0, j.jsx)(u.lX, {
                                  className:
                                    'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                                  children: n('flow.description'),
                                }),
                                (0, j.jsx)(u.NI, {
                                  className: 'w-3/4',
                                  children: (0, j.jsx)(Ke.II, i()({}, r)),
                                }),
                              ],
                            }),
                            (0, j.jsxs)('div', {
                              className: 'flex pt-1',
                              children: [
                                (0, j.jsx)('div', { className: 'w-1/4' }),
                                (0, j.jsx)(u.zG, {}),
                              ],
                            }),
                          ],
                        })
                      );
                    },
                  }),
                  (0, j.jsx)(u.Wi, {
                    control: e.control,
                    name: 'avatar',
                    render: function (e) {
                      e.field;
                      return (0, j.jsxs)(u.xJ, {
                        className: 'items-center space-y-0',
                        children: [
                          (0, j.jsxs)('div', {
                            className: 'flex',
                            children: [
                              (0, j.jsx)(u.lX, {
                                className:
                                  'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                                children: n('setting.avatar'),
                              }),
                              (0, j.jsx)(u.NI, {
                                className: 'w-3/4',
                                children: (0, j.jsx)(j.Fragment, {
                                  children: (0, j.jsxs)('div', {
                                    className: 'relative group',
                                    children: [
                                      x
                                        ? (0, j.jsxs)('div', {
                                            className:
                                              'w-[64px] h-[64px] relative grid place-content-center',
                                            children: [
                                              (0, j.jsxs)(dn.qE, {
                                                className: 'w-[64px] h-[64px]',
                                                children: [
                                                  (0, j.jsx)(dn.F$, {
                                                    className: ' block',
                                                    src: x,
                                                    alt: '',
                                                  }),
                                                  (0, j.jsx)(dn.Q5, {}),
                                                ],
                                              }),
                                              (0, j.jsx)('div', {
                                                className:
                                                  'absolute inset-0 bg-[#000]/20 group-hover:bg-[#000]/60',
                                                children: (0, j.jsx)(Ee.Z, {
                                                  size: 20,
                                                  className:
                                                    'absolute right-2 bottom-0 opacity-50 hidden group-hover:block',
                                                }),
                                              }),
                                            ],
                                          })
                                        : (0, j.jsx)('div', {
                                            className:
                                              'w-[64px] h-[64px] grid place-content-center border border-dashed\trounded-md',
                                            children: (0, j.jsxs)('div', {
                                              className:
                                                'flex flex-col items-center',
                                              children: [
                                                (0, j.jsx)(jn.Z, {}),
                                                (0, j.jsx)('p', {
                                                  children: 'Upload',
                                                }),
                                              ],
                                            }),
                                          }),
                                      (0, j.jsx)(Ke.II, {
                                        placeholder: '',
                                        type: 'file',
                                        title: '',
                                        accept: 'image/*',
                                        className:
                                          'absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer',
                                        onChange: function (e) {
                                          var n,
                                            a,
                                            r =
                                              null === (n = e.target) ||
                                              void 0 === n ||
                                              null === (n = n.files) ||
                                              void 0 === n
                                                ? void 0
                                                : n[0];
                                          /\.(jpg|jpeg|png|webp|bmp)$/i.test(
                                            null !==
                                              (a =
                                                null == r ? void 0 : r.name) &&
                                              void 0 !== a
                                              ? a
                                              : '',
                                          ) && o(r),
                                            (e.target.value = '');
                                        },
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, j.jsxs)('div', {
                            className: 'flex pt-1',
                            children: [
                              (0, j.jsx)('div', { className: 'w-1/4' }),
                              (0, j.jsx)(u.zG, {}),
                            ],
                          }),
                        ],
                      });
                    },
                  }),
                  (0, j.jsx)(u.Wi, {
                    control: e.control,
                    name: 'permission',
                    render: function (e) {
                      var a = e.field;
                      return (0, j.jsxs)(u.xJ, {
                        className: 'flex items-center space-y-0',
                        children: [
                          (0, j.jsx)(u.lX, {
                            className:
                              'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                            tooltip: n('knowledgeConfiguration.permissionsTip'),
                            children: n('knowledgeConfiguration.permissions'),
                          }),
                          (0, j.jsx)(u.NI, {
                            className: 'w-3/4',
                            children: (0, j.jsxs)(pn, {
                              onValueChange: a.onChange,
                              value: a.value,
                              className: 'flex space-y-1 gap-5',
                              children: [
                                (0, j.jsxs)(u.xJ, {
                                  className:
                                    'flex items-center space-x-1 space-y-0',
                                  children: [
                                    (0, j.jsx)(u.NI, {
                                      children: (0, j.jsx)(hn, { value: 'me' }),
                                    }),
                                    (0, j.jsx)(u.lX, {
                                      className: 'font-normal',
                                      children: n('knowledgeConfiguration.me'),
                                    }),
                                  ],
                                }),
                                (0, j.jsxs)(u.xJ, {
                                  className:
                                    'flex items-center space-x-1 space-y-0',
                                  children: [
                                    (0, j.jsx)(u.NI, {
                                      children: (0, j.jsx)(hn, {
                                        value: 'team',
                                      }),
                                    }),
                                    (0, j.jsx)(u.lX, {
                                      className: 'font-normal',
                                      children: n(
                                        'knowledgeConfiguration.team',
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, j.jsx)(u.zG, {}),
                        ],
                      });
                    },
                  }),
                ],
              }),
              (0, j.jsx)('div', {
                className: 'text-right pt-4',
                children: (0, j.jsxs)(F.zx, {
                  type: 'button',
                  disabled: v,
                  onClick: function () {
                    l()(
                      t()().mark(function n() {
                        var a, r, s, i, o, l;
                        return t()().wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.next = 2), e.formControl.trigger('name')
                                );
                              case 2:
                                (a = n.sent),
                                  (r = e.formState.values),
                                  (s = r.name),
                                  (i = r.description),
                                  (o = r.permission),
                                  (l = x),
                                  a &&
                                    g({
                                      kb_id: w,
                                      parser_id: b,
                                      name: s,
                                      description: i,
                                      permission: o,
                                      avatar: l,
                                    });
                              case 6:
                              case 'end':
                                return n.stop();
                            }
                        }, n);
                      }),
                    )();
                  },
                  children: [
                    v && (0, j.jsx)(G.Z, { className: 'animate-spin' }),
                    n('common.submit'),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var vn = ['organization', 'person', 'geo', 'event', 'category'];
      function Nn() {
        var e = (0, R.$G)().t,
          n = (0, S.cI)({
            resolver: (0, z.F)(on),
            defaultValues: {
              name: '',
              parser_id: _.K1.Naive,
              permission: 'me',
              parser_config: {
                layout_recognize: 'DeepDOC',
                chunk_token_num: 512,
                delimiter: '\n',
                auto_keywords: 0,
                auto_questions: 0,
                html4excel: !1,
                topn_tags: 3,
                raptor: {
                  use_raptor: !1,
                  max_token: 256,
                  threshold: 0.1,
                  max_cluster: 64,
                  random_seed: 0,
                },
                graphrag: {
                  use_graphrag: !1,
                  entity_types: vn,
                  method: 'light',
                },
              },
              pagerank: 0,
            },
          });
        le(n);
        var a = (0, p.useState)('generalForm'),
          r = d()(a, 2),
          s = r[0],
          o = r[1],
          c = (0, S.qo)({ control: n.control, name: 'parser_id' });
        function m() {
          return (m = l()(
            t()().mark(function e(n) {
              return t()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      console.log('🚀 ~ DatasetSettings ~ data:', n);
                    case 1:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        return (0, j.jsxs)('section', {
          className: 'p-5 ',
          children: [
            (0, j.jsx)(Z.n, {
              title: e('knowledgeDetails.configuration'),
              description: e('knowledgeConfiguration.titleDescription'),
            }),
            (0, j.jsxs)('div', {
              className: 'flex gap-14',
              children: [
                (0, j.jsx)(
                  u.l0,
                  i()(
                    i()({}, n),
                    {},
                    {
                      children: (0, j.jsx)('form', {
                        onSubmit: n.handleSubmit(function (e) {
                          return m.apply(this, arguments);
                        }),
                        className:
                          'space-y-6 basis-full min-w-[1000px] max-w-[1000px]',
                        children: (0, j.jsxs)(w, {
                          defaultValue: 'generalForm',
                          onValueChange: function (e) {
                            o(e);
                          },
                          children: [
                            (0, j.jsxs)(y, {
                              className:
                                'grid w-full bg-background grid-cols-2 rounded-none bg-[#161618]',
                              children: [
                                (0, j.jsx)(k, {
                                  value: 'generalForm',
                                  className:
                                    'group bg-transparent p-0 !border-transparent',
                                  children: (0, j.jsx)('div', {
                                    className:
                                      'flex w-full h-full justify-center\titems-center\tbg-[#161618]',
                                    children: (0, j.jsx)('span', {
                                      className:
                                        'h-full group-data-[state=active]:border-b-2 border-white\t',
                                      children: 'General',
                                    }),
                                  }),
                                }),
                                (0, j.jsx)(k, {
                                  value: 'chunkMethodForm',
                                  className:
                                    'group bg-transparent p-0 !border-transparent',
                                  children: (0, j.jsx)('div', {
                                    className:
                                      'flex w-full h-full justify-center\titems-center\tbg-[#161618]',
                                    children: (0, j.jsx)('span', {
                                      className:
                                        'h-full group-data-[state=active]:border-b-2 border-white\t',
                                      children: 'Chunk Method',
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, j.jsx)(C, {
                              value: 'generalForm',
                              children: (0, j.jsx)(gn, {}),
                            }),
                            (0, j.jsx)(C, {
                              value: 'chunkMethodForm',
                              children: (0, j.jsx)(ve, {}),
                            }),
                          ],
                        }),
                      }),
                    },
                  ),
                ),
                (0, j.jsx)(sn, { tab: s, parserId: c }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=p__dataset__setting__index.413fa5c3.async.js.map
