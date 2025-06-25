'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [2106],
  {
    26625: function (e, a, t) {
      t.d(a, {
        h: function () {
          return V;
        },
      });
      var n = t(97857),
        s = t.n(n),
        r = t(13769),
        o = t.n(r),
        i = t(67007),
        l = t(62435),
        d = t(57636),
        c = t(27080),
        m = t(86074),
        f = ['className'],
        u = ['className'],
        p = ['className'],
        x = ['className'],
        N = ['className'],
        h = ['className'],
        v = ['className'],
        j = ['className'],
        y = i.fC,
        g = i.xz,
        w = i.h_,
        b = l.forwardRef(function (e, a) {
          var t = e.className,
            n = o()(e, f);
          return (0, m.jsx)(
            i.aV,
            s()(
              s()(
                {
                  className: (0, c.cn)(
                    'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    t,
                  ),
                },
                n,
              ),
              {},
              { ref: a },
            ),
          );
        });
      b.displayName = i.aV.displayName;
      var k = l.forwardRef(function (e, a) {
        var t = e.className,
          n = o()(e, u);
        return (0, m.jsxs)(w, {
          children: [
            (0, m.jsx)(b, {}),
            (0, m.jsx)(
              i.VY,
              s()(
                {
                  ref: a,
                  className: (0, c.cn)(
                    'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-colors-background-neutral-standard p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                    t,
                  ),
                },
                n,
              ),
            ),
          ],
        });
      });
      k.displayName = i.VY.displayName;
      var R = function (e) {
        var a = e.className,
          t = o()(e, p);
        return (0, m.jsx)(
          'div',
          s()(
            {
              className: (0, c.cn)(
                'flex flex-col space-y-2 text-center sm:text-left',
                a,
              ),
            },
            t,
          ),
        );
      };
      R.displayName = 'AlertDialogHeader';
      var C = function (e) {
        var a = e.className,
          t = o()(e, x);
        return (0, m.jsx)(
          'div',
          s()(
            {
              className: (0, c.cn)(
                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                a,
              ),
            },
            t,
          ),
        );
      };
      C.displayName = 'AlertDialogFooter';
      var z = l.forwardRef(function (e, a) {
        var t = e.className,
          n = o()(e, N);
        return (0, m.jsx)(
          i.Dx,
          s()({ ref: a, className: (0, c.cn)('text-lg font-semibold', t) }, n),
        );
      });
      (z.displayName = i.Dx.displayName),
        (l.forwardRef(function (e, a) {
          var t = e.className,
            n = o()(e, h);
          return (0, m.jsx)(
            i.dk,
            s()(
              {
                ref: a,
                className: (0, c.cn)('text-sm text-muted-foreground', t),
              },
              n,
            ),
          );
        }).displayName = i.dk.displayName);
      var D = l.forwardRef(function (e, a) {
        var t = e.className,
          n = o()(e, v);
        return (0, m.jsx)(
          i.aU,
          s()({ ref: a, className: (0, c.cn)((0, d.dc)(), t) }, n),
        );
      });
      D.displayName = i.aU.displayName;
      var Y = l.forwardRef(function (e, a) {
        var t = e.className,
          n = o()(e, j);
        return (0, m.jsx)(
          i.$j,
          s()(
            {
              ref: a,
              className: (0, c.cn)(
                (0, d.dc)({ variant: 'outline' }),
                'mt-2 sm:mt-0',
                t,
              ),
            },
            n,
          ),
        );
      });
      Y.displayName = i.$j.displayName;
      var _ = t(67421);
      function V(e) {
        var a = e.children,
          t = e.title,
          n = e.onOk,
          s = e.onCancel,
          r = e.hidden,
          o = void 0 !== r && r,
          i = (0, _.$G)().t;
        return o
          ? a
          : (0, m.jsxs)(y, {
              children: [
                (0, m.jsx)(g, { asChild: !0, children: a }),
                (0, m.jsxs)(k, {
                  onSelect: function (e) {
                    return e.preventDefault();
                  },
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                  children: [
                    (0, m.jsx)(R, {
                      children: (0, m.jsx)(z, {
                        children: null != t ? t : i('common.deleteModalTitle'),
                      }),
                    }),
                    (0, m.jsxs)(C, {
                      children: [
                        (0, m.jsx)(Y, {
                          onClick: s,
                          children: i('common.cancel'),
                        }),
                        (0, m.jsx)(D, {
                          className: 'bg-text-delete-red text-text-title',
                          onClick: n,
                          children: i('common.ok'),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
    },
    61363: function (e, a, t) {
      t.d(a, {
        L: function () {
          return g;
        },
      });
      var n = t(28993),
        s = t(8074),
        r = t(67421),
        o = t(57636),
        i = t(15009),
        l = t.n(i),
        d = t(97857),
        c = t.n(d),
        m = t(99289),
        f = t.n(m),
        u = t(56312),
        p = t(87536),
        x = t(1604),
        N = t(80499),
        h = t(27591),
        v = t(62435),
        j = t(86074);
      function y(e) {
        var a = e.initialName,
          t = e.hideModal,
          n = e.onOk,
          o = (0, r.$G)().t,
          i = x.z.object({
            name: x.z
              .string()
              .min(1, { message: o('common.namePlaceholder') })
              .trim(),
          }),
          d = (0, p.cI)({ resolver: (0, u.F)(i), defaultValues: { name: '' } });
        function m() {
          return (m = f()(
            l()().mark(function e(a) {
              return l()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), null == n ? void 0 : n(a.name);
                    case 2:
                      e.sent && (null == t || t());
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        return (
          (0, v.useEffect)(
            function () {
              a && d.setValue('name', a);
            },
            [d, a],
          ),
          (0, j.jsx)(
            N.l0,
            c()(
              c()({}, d),
              {},
              {
                children: (0, j.jsx)('form', {
                  onSubmit: d.handleSubmit(function (e) {
                    return m.apply(this, arguments);
                  }),
                  className: 'space-y-6',
                  id: s.j$,
                  children: (0, j.jsx)(N.Wi, {
                    control: d.control,
                    name: 'name',
                    render: function (e) {
                      var a = e.field;
                      return (0, j.jsxs)(N.xJ, {
                        children: [
                          (0, j.jsx)(N.lX, { children: o('common.name') }),
                          (0, j.jsx)(N.NI, {
                            children: (0, j.jsx)(
                              h.II,
                              c()(
                                c()(
                                  { placeholder: o('common.namePlaceholder') },
                                  a,
                                ),
                                {},
                                { autoComplete: 'off' },
                              ),
                            ),
                          }),
                          (0, j.jsx)(N.zG, {}),
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
      function g(e) {
        var a = e.hideModal,
          t = e.initialName,
          i = e.onOk,
          l = e.loading,
          d = e.title,
          c = (0, r.$G)().t;
        return (0, j.jsx)(n.Vq, {
          open: !0,
          onOpenChange: a,
          children: (0, j.jsxs)(n.cZ, {
            className: 'sm:max-w-[425px]',
            children: [
              (0, j.jsx)(n.fK, {
                children: (0, j.jsx)(n.$N, {
                  children: d || c('common.rename'),
                }),
              }),
              (0, j.jsx)(y, { initialName: t, hideModal: a, onOk: i }),
              (0, j.jsx)(n.cN, {
                children: (0, j.jsx)(o.dw, {
                  type: 'submit',
                  form: s.j$,
                  loading: l,
                  children: c('common.save'),
                }),
              }),
            ],
          }),
        });
      }
    },
    25910: function (e, a, t) {
      t.d(a, {
        $F: function () {
          return b;
        },
        AW: function () {
          return k;
        },
        Ju: function () {
          return C;
        },
        VD: function () {
          return z;
        },
        Xi: function () {
          return R;
        },
        h_: function () {
          return w;
        },
      });
      var n = t(97857),
        s = t.n(n),
        r = t(13769),
        o = t.n(r),
        i = t(38100),
        l = t(64998),
        d = t(13742),
        c = t(50316),
        m = t(62435),
        f = t(27080),
        u = t(86074),
        p = ['className', 'inset', 'children'],
        x = ['className'],
        N = ['className', 'sideOffset'],
        h = ['className', 'inset', 'justifyBetween'],
        v = ['className', 'children', 'checked'],
        j = ['className', 'children'],
        y = ['className', 'inset'],
        g = ['className'],
        w = i.fC,
        b = i.xz;
      i.ZA, i.Uv, i.Tr, i.Ee;
      (m.forwardRef(function (e, a) {
        var t = e.className,
          n = e.inset,
          r = e.children,
          d = o()(e, p);
        return (0, u.jsxs)(
          i.fF,
          s()(
            s()(
              {
                ref: a,
                className: (0, f.cn)(
                  'flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
                  n && 'pl-8',
                  t,
                ),
              },
              d,
            ),
            {},
            { children: [r, (0, u.jsx)(l.Z, { className: 'ml-auto' })] },
          ),
        );
      }).displayName = i.fF.displayName),
        (m.forwardRef(function (e, a) {
          var t = e.className,
            n = o()(e, x);
          return (0, u.jsx)(
            i.tu,
            s()(
              {
                ref: a,
                className: (0, f.cn)(
                  'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                  t,
                ),
              },
              n,
            ),
          );
        }).displayName = i.tu.displayName);
      var k = m.forwardRef(function (e, a) {
        var t = e.className,
          n = e.sideOffset,
          r = void 0 === n ? 4 : n,
          l = o()(e, N);
        return (0, u.jsx)(i.Uv, {
          children: (0, u.jsx)(
            i.VY,
            s()(
              {
                ref: a,
                sideOffset: r,
                className: (0, f.cn)(
                  'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                  t,
                ),
              },
              l,
            ),
          ),
        });
      });
      k.displayName = i.VY.displayName;
      var R = m.forwardRef(function (e, a) {
        var t = e.className,
          n = e.inset,
          r = e.justifyBetween,
          l = void 0 === r || r,
          d = o()(e, h);
        return (0, u.jsx)(
          i.ck,
          s()(
            {
              ref: a,
              className: (0, f.cn)(
                'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
                n && 'pl-8',
                l && 'flex justify-between',
                t,
              ),
            },
            d,
          ),
        );
      });
      (R.displayName = i.ck.displayName),
        (m.forwardRef(function (e, a) {
          var t = e.className,
            n = e.children,
            r = e.checked,
            l = o()(e, v);
          return (0, u.jsxs)(
            i.oC,
            s()(
              s()(
                {
                  ref: a,
                  className: (0, f.cn)(
                    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                    t,
                  ),
                  checked: r,
                },
                l,
              ),
              {},
              {
                children: [
                  (0, u.jsx)('span', {
                    className:
                      'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                    children: (0, u.jsx)(i.wU, {
                      children: (0, u.jsx)(d.Z, { className: 'h-4 w-4' }),
                    }),
                  }),
                  n,
                ],
              },
            ),
          );
        }).displayName = i.oC.displayName),
        (m.forwardRef(function (e, a) {
          var t = e.className,
            n = e.children,
            r = o()(e, j);
          return (0, u.jsxs)(
            i.Rk,
            s()(
              s()(
                {
                  ref: a,
                  className: (0, f.cn)(
                    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                    t,
                  ),
                },
                r,
              ),
              {},
              {
                children: [
                  (0, u.jsx)('span', {
                    className:
                      'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                    children: (0, u.jsx)(i.wU, {
                      children: (0, u.jsx)(c.Z, {
                        className: 'h-2 w-2 fill-current',
                      }),
                    }),
                  }),
                  n,
                ],
              },
            ),
          );
        }).displayName = i.Rk.displayName);
      var C = m.forwardRef(function (e, a) {
        var t = e.className,
          n = e.inset,
          r = o()(e, y);
        return (0, u.jsx)(
          i.__,
          s()(
            {
              ref: a,
              className: (0, f.cn)(
                'px-2 py-1.5 text-sm font-semibold',
                n && 'pl-8',
                t,
              ),
            },
            r,
          ),
        );
      });
      C.displayName = i.__.displayName;
      var z = m.forwardRef(function (e, a) {
        var t = e.className,
          n = o()(e, g);
        return (0, u.jsx)(
          i.Z0,
          s()(
            { ref: a, className: (0, f.cn)('-mx-1 my-1 h-px bg-muted', t) },
            n,
          ),
        );
      });
      z.displayName = i.Z0.displayName;
    },
    8074: function (e, a, t) {
      t.d(a, {
        Rx: function () {
          return r.Rx;
        },
        j$: function () {
          return i;
        },
      });
      var n = t(9783),
        s = t.n(n),
        r = t(96330),
        o =
          (s()(
            s()(
              s()({}, r.Rx.Dataset, 'Dataset'),
              r.Rx.Testing,
              'Retrieval testing',
            ),
            r.Rx.Configuration,
            'Configuration',
          ),
          (function (e) {
            return (e.Chunk = 'chunk'), (e.File = 'file'), e;
          })({})),
        i =
          (s()(s()({}, o.Chunk, 'Chunk'), o.File, 'File Upload'), 'tagRename');
    },
    28382: function (e, a, t) {
      t.d(a, {
        Qc: function () {
          return i;
        },
        mr: function () {
          return o;
        },
        p6: function () {
          return r;
        },
      });
      var n = t(27484),
        s = t.n(n);
      function r(e) {
        return e ? s()(e).format('DD/MM/YYYY HH:mm:ss') : '';
      }
      function o(e) {
        return e ? s()(e).format('HH:mm:ss') : '';
      }
      function i(e) {
        return e ? s()(e).format('DD/MM/YYYY') : '';
      }
    },
  },
]);
//# sourceMappingURL=2106.1f18a05d.async.js.map
