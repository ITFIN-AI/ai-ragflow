'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [7926],
  {
    96635: function (e, n, t) {
      t.d(n, {
        a: function () {
          return c;
        },
        B: function () {
          return o;
        },
      });
      var r = {
          doc: 'doc',
          docx: 'doc',
          pdf: 'pdf',
          xls: 'excel',
          xlsx: 'excel',
          ppt: 'ppt',
          pptx: 'ppt',
          jpg: 'jpg',
          jpeg: 'jpg',
          png: 'png',
          txt: 'text',
          csv: 'pdf',
          md: 'md',
        },
        s = t(27080),
        i = t(5089),
        a = t(86074),
        o = function (e) {
          var n = e.name,
            t = e.className;
          return (0, a.jsx)('svg', {
            className: (0, s.cn)('fill-current size-4', t),
            children: (0, a.jsx)('use', { xlinkHref: '#icon-'.concat(n) }),
          });
        };
      function c(e) {
        var n = e.name,
          t = e.className,
          c = 'folder' === e.type;
        return (0, a.jsx)('span', {
          className: (0, s.cn)('size-4', t),
          children: (0, a.jsx)(o, { name: c ? 'file-sub' : r[(0, i.RT)(n)] }),
        });
      }
    },
    39932: function (e, n, t) {
      t.d(n, {
        E: function () {
          return g;
        },
      });
      var r = t(5574),
        s = t.n(r),
        i = t(97857),
        a = t.n(i),
        o = t(19632),
        c = t.n(o),
        l = t(23499),
        d = t(56312),
        u = t(62435),
        f = t(87536),
        m = t(1604),
        x = t(57636),
        p = t(23309),
        v = t(80499),
        h = t(86074);
      function j(e) {
        var n = e.filters,
          t = void 0 === n ? [] : n,
          r = e.value,
          s = e.onChange,
          i = e.setOpen,
          o =
            null == t
              ? void 0
              : t.reduce(function (e, n) {
                  return (e[n.field] = []), e;
                }, {}),
          l = m.z.object(
            t.reduce(function (e, n) {
              return (e[n.field] = m.z.array(m.z.string())), e;
            }, {}),
          ),
          j = (0, f.cI)({ resolver: (0, d.F)(l), defaultValues: o });
        var g = (0, u.useCallback)(
          function () {
            null == s || s(o), i(!1);
          },
          [o, s, i],
        );
        return (
          (0, u.useEffect)(
            function () {
              j.reset(r);
            },
            [j, r],
          ),
          (0, h.jsx)(
            v.l0,
            a()(
              a()({}, j),
              {},
              {
                children: (0, h.jsxs)('form', {
                  onSubmit: j.handleSubmit(function (e) {
                    null == s || s(e), i(!1);
                  }),
                  className: 'space-y-8 px-5 py-2.5',
                  onReset: function () {
                    return j.reset();
                  },
                  children: [
                    t.map(function (e) {
                      return (0, h.jsx)(
                        v.Wi,
                        {
                          control: j.control,
                          name: e.field,
                          render: function () {
                            return (0, h.jsxs)(v.xJ, {
                              className: 'space-y-4',
                              children: [
                                (0, h.jsx)('div', {
                                  children: (0, h.jsx)(v.lX, {
                                    className:
                                      'text-base text-text-sub-title-invert',
                                    children: e.label,
                                  }),
                                }),
                                e.list.map(function (n) {
                                  return (0, h.jsx)(
                                    v.Wi,
                                    {
                                      control: j.control,
                                      name: e.field,
                                      render: function (e) {
                                        var t,
                                          r = e.field;
                                        return (0, h.jsxs)('div', {
                                          className:
                                            'flex items-center justify-between text-text-title text-xs',
                                          children: [
                                            (0, h.jsxs)(
                                              v.xJ,
                                              {
                                                className:
                                                  'flex flex-row  space-x-3 space-y-0 items-center ',
                                                children: [
                                                  (0, h.jsx)(v.NI, {
                                                    children: (0, h.jsx)(p.X, {
                                                      checked:
                                                        null ===
                                                          (t = r.value) ||
                                                        void 0 === t
                                                          ? void 0
                                                          : t.includes(n.id),
                                                      onCheckedChange:
                                                        function (e) {
                                                          var t;
                                                          return e
                                                            ? r.onChange(
                                                                [].concat(
                                                                  c()(r.value),
                                                                  [n.id],
                                                                ),
                                                              )
                                                            : r.onChange(
                                                                null ===
                                                                  (t =
                                                                    r.value) ||
                                                                  void 0 === t
                                                                  ? void 0
                                                                  : t.filter(
                                                                      function (
                                                                        e,
                                                                      ) {
                                                                        return (
                                                                          e !==
                                                                          n.id
                                                                        );
                                                                      },
                                                                    ),
                                                              );
                                                        },
                                                    }),
                                                  }),
                                                  (0, h.jsx)(v.lX, {
                                                    children: n.label,
                                                  }),
                                                ],
                                              },
                                              n.id,
                                            ),
                                            (0, h.jsx)('span', {
                                              className: ' text-sm',
                                              children: n.count,
                                            }),
                                          ],
                                        });
                                      },
                                    },
                                    n.id,
                                  );
                                }),
                                (0, h.jsx)(v.zG, {}),
                              ],
                            });
                          },
                        },
                        e.field,
                      );
                    }),
                    (0, h.jsxs)('div', {
                      className: 'flex justify-end gap-5',
                      children: [
                        (0, h.jsx)(x.zx, {
                          type: 'button',
                          variant: 'outline',
                          size: 'sm',
                          onClick: g,
                          children: 'Clear',
                        }),
                        (0, h.jsx)(x.zx, {
                          type: 'submit',
                          size: 'sm',
                          children: 'Submit',
                        }),
                      ],
                    }),
                  ],
                }),
              },
            ),
          )
        );
      }
      function g(e) {
        var n = e.children,
          t = e.value,
          r = e.onChange,
          i = e.filters,
          a = (0, u.useState)(!1),
          o = s()(a, 2),
          c = o[0],
          d = o[1];
        return (0, h.jsxs)(l.J2, {
          open: c,
          onOpenChange: d,
          children: [
            (0, h.jsx)(l.xo, { asChild: !0, children: n }),
            (0, h.jsx)(l.yk, {
              className: 'p-0',
              children: (0, h.jsx)(j, {
                onChange: r,
                value: t,
                filters: i,
                setOpen: d,
              }),
            }),
          ],
        });
      }
    },
    87926: function (e, n, t) {
      t.d(n, {
        L: function () {
          return j;
        },
        Z: function () {
          return g;
        },
      });
      var r = t(52677),
        s = t.n(r),
        i = t(97857),
        a = t.n(i),
        o = t(13769),
        c = t.n(o),
        l = t(27080),
        d = t(8971),
        u = t(62435),
        f = t(96635),
        m = t(57636),
        x = t(27591),
        p = t(39932),
        v = t(86074),
        h = ['count'],
        j = u.forwardRef(function (e, n) {
          var t = e.count,
            r = void 0 === t ? 0 : t,
            s = c()(e, h);
          return (0, v.jsxs)(
            m.zx,
            a()(
              a()({ variant: 'secondary' }, s),
              {},
              {
                ref: n,
                children: [
                  (0, v.jsx)('span', {
                    className: (0, l.cn)({
                      'text-text-title': r > 0,
                      'text-text-sub-title-invert': 0 === r,
                    }),
                    children: 'Filter',
                  }),
                  r > 0 &&
                    (0, v.jsx)('span', {
                      className: 'rounded-full bg-text-badge px-1 text-xs ',
                      children: r,
                    }),
                  (0, v.jsx)(d.Z, {}),
                ],
              },
            ),
          );
        });
      function g(e) {
        var n = e.title,
          t = e.children,
          r = e.searchString,
          i = e.onSearchChange,
          a = e.showFilter,
          o = void 0 === a || a,
          c = e.leftPanel,
          d = e.value,
          m = e.onChange,
          h = e.filters,
          g = e.className,
          N = e.icon,
          b = (0, u.useMemo)(
            function () {
              return 'object' === s()(d) && null !== d
                ? Object.values(d).reduce(function (e, n) {
                    return e + n.length;
                  }, 0)
                : 0;
            },
            [d],
          );
        return (0, v.jsxs)('div', {
          className: (0, l.cn)('flex justify-between mb-5 items-center', g),
          children: [
            (0, v.jsxs)('div', {
              className: 'text-2xl font-semibold flex items-center gap-2.5',
              children: [
                'string' == typeof N
                  ? (0, v.jsx)(f.B, { name: N, className: 'size-6' })
                  : N,
                c || n,
              ],
            }),
            (0, v.jsxs)('div', {
              className: 'flex gap-5 items-center',
              children: [
                o &&
                  (0, v.jsx)(p.E, {
                    value: d,
                    onChange: m,
                    filters: h,
                    children: (0, v.jsx)(j, { count: b }),
                  }),
                (0, v.jsx)(x.Mj, { value: r, onChange: i, className: 'w-32' }),
                t,
              ],
            }),
          ],
        });
      }
    },
    23309: function (e, n, t) {
      t.d(n, {
        X: function () {
          return m;
        },
      });
      var r = t(97857),
        s = t.n(r),
        i = t(13769),
        a = t.n(i),
        o = t(46069),
        c = t(13742),
        l = t(62435),
        d = t(27080),
        u = t(86074),
        f = ['className'],
        m = l.forwardRef(function (e, n) {
          var t = e.className,
            r = a()(e, f);
          return (0, u.jsx)(
            o.fC,
            s()(
              s()(
                {
                  ref: n,
                  className: (0, d.cn)(
                    'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                    t,
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
                  children: (0, u.jsx)(c.Z, { className: 'h-4 w-4' }),
                }),
              },
            ),
          );
        });
      m.displayName = o.fC.displayName;
    },
    80499: function (e, n, t) {
      t.d(n, {
        NI: function () {
          return F;
        },
        Wi: function () {
          return w;
        },
        l0: function () {
          return N;
        },
        lX: function () {
          return k;
        },
        pf: function () {
          return R;
        },
        xJ: function () {
          return I;
        },
        zG: function () {
          return O;
        },
      });
      var r = t(13769),
        s = t.n(r),
        i = t(97857),
        a = t.n(i),
        o = t(49677),
        c = t.n(o),
        l = t(88426),
        d = t(62435),
        u = t(87536),
        f = t(65038),
        m = t(27080),
        x = t(84146),
        p = t(86074),
        v = ['className'],
        h = ['className', 'tooltip'],
        j = ['className'],
        g = ['className', 'children'],
        N = u.RV,
        b = d.createContext({}),
        y = d.createContext({}),
        w = function (e) {
          var n = Object.assign({}, (c()(e), e));
          return (0, p.jsx)(y.Provider, {
            value: { name: n.name },
            children: (0, p.jsx)(u.Qr, a()({}, n)),
          });
        },
        C = function () {
          var e = d.useContext(y),
            n = d.useContext(b),
            t = (0, u.Gc)(),
            r = t.getFieldState,
            s = t.formState,
            i = r(e.name, s);
          if (!e)
            throw new Error('useFormField should be used within <FormField>');
          var o = n.id;
          return a()(
            {
              id: o,
              name: e.name,
              formItemId: ''.concat(o, '-form-item'),
              formDescriptionId: ''.concat(o, '-form-item-description'),
              formMessageId: ''.concat(o, '-form-item-message'),
            },
            i,
          );
        },
        z = d.forwardRef(function (e, n) {
          var t = e.className,
            r = s()(e, v),
            i = d.useId();
          return (0, p.jsx)(b.Provider, {
            value: { id: i },
            children: (0, p.jsx)(
              'div',
              a()({ ref: n, className: (0, m.cn)('space-y-2', t) }, r),
            ),
          });
        });
      z.displayName = 'FormItem';
      var I = d.memo(z),
        k = d.forwardRef(function (e, n) {
          var t = e.className,
            r = e.tooltip,
            i = s()(e, h),
            o = C(),
            c = o.error,
            l = o.formItemId;
          return (0, p.jsxs)(
            f._,
            a()(
              a()(
                {
                  ref: n,
                  className: (0, m.cn)(
                    c && 'text-destructive',
                    t,
                    'flex pb-0.5',
                  ),
                  htmlFor: l,
                },
                i,
              ),
              {},
              { children: [i.children, r && (0, p.jsx)(x.Z4, { tooltip: r })] },
            ),
          );
        });
      k.displayName = 'FormLabel';
      var F = d.forwardRef(function (e, n) {
        var t = Object.assign({}, (c()(e), e)),
          r = C(),
          s = r.error,
          i = r.formItemId,
          o = r.formDescriptionId,
          d = r.formMessageId;
        return (0, p.jsx)(
          l.g7,
          a()(
            {
              ref: n,
              id: i,
              'aria-describedby': s
                ? ''.concat(o, ' ').concat(d)
                : ''.concat(o),
              'aria-invalid': !!s,
            },
            t,
          ),
        );
      });
      F.displayName = 'FormControl';
      var R = d.forwardRef(function (e, n) {
        var t = e.className,
          r = s()(e, j),
          i = C().formDescriptionId;
        return (0, p.jsx)(
          'p',
          a()(
            {
              ref: n,
              id: i,
              className: (0, m.cn)('text-sm text-muted-foreground', t),
            },
            r,
          ),
        );
      });
      R.displayName = 'FormDescription';
      var O = d.forwardRef(function (e, n) {
        var t = e.className,
          r = e.children,
          i = s()(e, g),
          o = C(),
          c = o.error,
          l = o.formMessageId,
          d = c ? String(null == c ? void 0 : c.message) : r;
        return d
          ? (0, p.jsx)(
              'p',
              a()(
                a()(
                  {
                    ref: n,
                    id: l,
                    className: (0, m.cn)(
                      'text-sm font-medium text-destructive',
                      t,
                    ),
                  },
                  i,
                ),
                {},
                { children: d },
              ),
            )
          : null;
      });
      O.displayName = 'FormMessage';
    },
    65038: function (e, n, t) {
      t.d(n, {
        _: function () {
          return x;
        },
      });
      var r = t(97857),
        s = t.n(r),
        i = t(13769),
        a = t.n(i),
        o = t(49102),
        c = t(45139),
        l = t(62435),
        d = t(27080),
        u = t(86074),
        f = ['className'],
        m = (0, c.j)(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        ),
        x = l.forwardRef(function (e, n) {
          var t = e.className,
            r = a()(e, f);
          return (0, u.jsx)(
            o.f,
            s()({ ref: n, className: (0, d.cn)(m(), t) }, r),
          );
        });
      x.displayName = o.f.displayName;
    },
    23499: function (e, n, t) {
      t.d(n, {
        J2: function () {
          return f;
        },
        xo: function () {
          return m;
        },
        yk: function () {
          return x;
        },
      });
      var r = t(97857),
        s = t.n(r),
        i = t(13769),
        a = t.n(i),
        o = t(48843),
        c = t(62435),
        l = t(27080),
        d = t(86074),
        u = ['className', 'align', 'sideOffset'],
        f = o.fC,
        m = o.xz,
        x = c.forwardRef(function (e, n) {
          var t = e.className,
            r = e.align,
            i = void 0 === r ? 'center' : r,
            c = e.sideOffset,
            f = void 0 === c ? 4 : c,
            m = a()(e, u);
          return (0, d.jsx)(o.h_, {
            children: (0, d.jsx)(
              o.VY,
              s()(
                {
                  ref: n,
                  align: i,
                  sideOffset: f,
                  className: (0, l.cn)(
                    'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    t,
                  ),
                },
                m,
              ),
            ),
          });
        });
      x.displayName = o.VY.displayName;
    },
    5089: function (e, n, t) {
      t.d(n, {
        Ep: function () {
          return u;
        },
        Or: function () {
          return f;
        },
        RT: function () {
          return l;
        },
        YC: function () {
          return d;
        },
        q1: function () {
          return c;
        },
      });
      var r = t(19632),
        s = t.n(r),
        i = t(40169),
        a = t(96486),
        o = t(57632),
        c = function (e, n) {
          var t;
          return Array.isArray(null == e ? void 0 : e.positions) &&
            e.positions.every(function (e) {
              return Array.isArray(e);
            })
            ? null == e || null === (t = e.positions) || void 0 === t
              ? void 0
              : t.map(function (t) {
                  var r = {
                    width: n.width,
                    height: n.height,
                    x1: t[1],
                    x2: t[2],
                    y1: t[3],
                    y2: t[4],
                  };
                  return {
                    id: (0, o.Z)(),
                    comment: { text: '', emoji: '' },
                    content: {
                      text:
                        (0, a.get)(e, 'content_with_weight') ||
                        (0, a.get)(e, 'content', ''),
                    },
                    position: { boundingRect: r, rects: [r], pageNumber: t[0] },
                  };
                })
            : [];
        },
        l = function (e) {
          var n;
          return null !==
            (n =
              null == e
                ? void 0
                : e.slice(e.lastIndexOf('.') + 1).toLowerCase()) && void 0 !== n
            ? n
            : '';
        },
        d = function (e) {
          return e.split('\n').length;
        },
        u = function (e) {
          return i.ru.includes(e);
        },
        f = function (e) {
          return [].concat(s()(i.rU), ['svg']).some(function (n) {
            return n === e;
          });
        };
    },
  },
]);
//# sourceMappingURL=7926.f23455ab.async.js.map
