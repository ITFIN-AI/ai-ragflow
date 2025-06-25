'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [4102],
  {
    91929: function (e, n, r) {
      r.d(n, {
        p: function () {
          return N;
        },
      });
      var a = r(97857),
        t = r.n(a),
        s = r(96330),
        o = r(86968),
        i = r(10541),
        l = r(87547),
        c = r(42075),
        d = r(7134),
        u = r(22150),
        f = r(34041),
        m = r(39612),
        p = r(87536),
        x = r(5715),
        v = r(80499),
        h = r(73352),
        g = r(86074);
      function N() {
        var e = (0, p.Gc)(),
          n = (0, o.qM)('chat').t,
          r = (0, i.VJ)(!0)
            .list.filter(function (e) {
              return e.parser_id !== s.K1.Tag;
            })
            .map(function (e) {
              return {
                label: e.name,
                value: e.id,
                icon: function () {
                  return (0, g.jsxs)(x.qE, {
                    className: 'size-4 mr-2',
                    children: [
                      (0, g.jsx)(x.F$, { src: e.avatar }),
                      (0, g.jsx)(x.Q5, { children: (0, g.jsx)(m.Z, {}) }),
                    ],
                  });
                },
              };
            });
        return (0, g.jsx)(v.Wi, {
          control: e.control,
          name: 'kb_ids',
          render: function (e) {
            var a = e.field;
            return (0, g.jsxs)(v.xJ, {
              children: [
                (0, g.jsx)(v.lX, { children: n('knowledgeBases') }),
                (0, g.jsx)(v.NI, {
                  children: (0, g.jsx)(
                    h.N,
                    t()(
                      {
                        options: r,
                        onValueChange: a.onChange,
                        placeholder: n('knowledgeBasesMessage'),
                        variant: 'inverted',
                        maxCount: 100,
                        defaultValue: a.value,
                      },
                      a,
                    ),
                  ),
                }),
              ],
            });
          },
        });
      }
      n.Z = function (e) {
        var n = e.label,
          r = e.tooltipText,
          a = e.name,
          t = e.required,
          m = void 0 === t || t,
          p = e.onChange,
          x = (0, o.qM)('chat').t,
          v = (0, i.VJ)(!0)
            .list.filter(function (e) {
              return e.parser_id !== s.K1.Tag;
            })
            .map(function (e) {
              return {
                label: (0, g.jsxs)(c.Z, {
                  children: [
                    (0, g.jsx)(d.C, {
                      size: 20,
                      icon: (0, g.jsx)(l.Z, {}),
                      src: e.avatar,
                    }),
                    e.name,
                  ],
                }),
                value: e.id,
              };
            });
        return (0, g.jsx)(u.Z.Item, {
          label: n || x('knowledgeBases'),
          name: a || 'kb_ids',
          tooltip: r || x('knowledgeBasesTip'),
          rules: [
            { required: m, message: x('knowledgeBasesMessage'), type: 'array' },
          ],
          children: (0, g.jsx)(f.Z, {
            mode: 'multiple',
            options: v,
            placeholder: x('knowledgeBasesMessage'),
            onChange: p,
          }),
        });
      };
    },
    77567: function (e, n, r) {
      r.d(n, {
        Nr: function () {
          return w;
        },
        eT: function () {
          return Z;
        },
        lk: function () {
          return y;
        },
      });
      var a = r(97857),
        t = r.n(a),
        s = r(5574),
        o = r.n(s),
        i = r(96330),
        l = r(86968),
        c = r(38392),
        d = r(45360),
        u = r(22150),
        f = r(34041),
        m = r(71338),
        p = r(62435),
        x = r(87536),
        v = r(1604),
        h = r(15309),
        g = r(80499),
        N = r(84586),
        j = r(86074),
        b = function () {
          var e = (0, l.qM)('knowledgeDetails').t,
            n = (0, c.hl)(),
            r = d.ZP.useMessage(),
            a = o()(r, 2),
            t = a[0],
            s = a[1],
            m = (0, p.useCallback)(
              function (n) {
                n &&
                  t.open({ type: 'warning', content: e('reRankModelWaring') });
              },
              [t, e],
            );
          return (0, j.jsxs)(j.Fragment, {
            children: [
              s,
              (0, j.jsx)(u.Z.Item, {
                label: e('rerankModel'),
                name: 'rerank_id',
                tooltip: e('rerankTip'),
                children: (0, j.jsx)(f.Z, {
                  options: n[i.Vr.Rerank],
                  allowClear: !0,
                  placeholder: e('rerankPlaceholder'),
                  onChange: m,
                }),
              }),
            ],
          });
        },
        y = { top_k: v.z.number().optional() },
        w = { top_k: 1024 };
      n.ZP = function () {
        var e = (0, l.qM)('knowledgeDetails').t;
        return (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsx)(b, {}),
            (0, j.jsx)(u.Z.Item, {
              noStyle: !0,
              dependencies: ['rerank_id'],
              children: function (n) {
                return (
                  (0, n.getFieldValue)('rerank_id') &&
                  (0, j.jsx)(u.Z.Item, {
                    label: e('topK'),
                    name: 'top_k',
                    initialValue: 1024,
                    tooltip: e('topKTip'),
                    children: (0, j.jsx)(m.Z, { max: 2048, min: 1 }),
                  })
                );
              },
            }),
          ],
        });
      };
      var k = 'rerank_id';
      function C() {
        var e = (0, x.Gc)(),
          n = (0, l.qM)('knowledgeDetails').t,
          r = (0, c.hl)()[i.Vr.Rerank];
        return (0, j.jsx)(g.Wi, {
          control: e.control,
          name: k,
          render: function (e) {
            var a = e.field;
            return (0, j.jsxs)(g.xJ, {
              children: [
                (0, j.jsx)(g.lX, {
                  tooltip: n('rerankTip'),
                  children: n('rerankModel'),
                }),
                (0, j.jsx)(g.NI, {
                  children: (0, j.jsx)(
                    N.vM,
                    t()(t()({ allowClear: !0 }, a), {}, { options: r }),
                  ),
                }),
                (0, j.jsx)(g.zG, {}),
              ],
            });
          },
        });
      }
      function Z() {
        var e = (0, x.Gc)().watch,
          n = (0, l.qM)('knowledgeDetails').t,
          r = e(k);
        return (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsx)(C, {}),
            r &&
              (0, j.jsx)(h.W, {
                name: 'top_k',
                label: n('topK'),
                max: 2048,
                min: 1,
                tooltip: n('topKTip'),
              }),
          ],
        });
      }
    },
    84676: function (e, n, r) {
      r.d(n, {
        _: function () {
          return l;
        },
      });
      var a = r(86968),
        t = r(22150),
        s = r(71338),
        o = r(15309),
        i = r(86074);
      function l(e) {
        var n = e.max,
          r = void 0 === n ? 30 : n,
          t = (0, a.qM)('chat').t;
        return (0, i.jsx)(o.W, {
          name: 'top_n',
          label: t('topN'),
          max: r,
          tooltip: t('topNTip'),
        });
      }
      n.Z = function (e) {
        var n = e.initialValue,
          r = void 0 === n ? 8 : n,
          o = e.max,
          l = void 0 === o ? 30 : o,
          c = (0, a.qM)('chat').t;
        return (0, i.jsx)(t.Z.Item, {
          label: c('topN'),
          name: 'top_n',
          initialValue: r,
          tooltip: c('topNTip'),
          children: (0, i.jsx)(s.Z, { max: l }),
        });
      };
    },
    19252: function (e, n, r) {
      r.d(n, {
        C: function () {
          return f;
        },
      });
      var a = r(97857),
        t = r.n(a),
        s = r(13769),
        o = r.n(s),
        i = r(45139),
        l = (r(62435), r(27080)),
        c = r(86074),
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
      function f(e) {
        var n = e.className,
          r = e.variant,
          a = o()(e, d);
        return (0, c.jsx)(
          'div',
          t()({ className: (0, l.cn)(u({ variant: r }), n) }, a),
        );
      }
    },
    52118: function (e, n, r) {
      r.d(n, {
        di: function () {
          return k;
        },
        e8: function () {
          return j;
        },
        fu: function () {
          return y;
        },
        mY: function () {
          return g;
        },
        rb: function () {
          return b;
        },
        sZ: function () {
          return N;
        },
        zz: function () {
          return w;
        },
      });
      var a = r(97857),
        t = r.n(a),
        s = r(13769),
        o = r.n(s),
        i = r(13879),
        l = r(87764),
        c = r(62435),
        d = (r(28993), r(27080)),
        u = r(86074),
        f = ['className'],
        m = ['className'],
        p = ['className'],
        x = ['className'],
        v = ['className'],
        h = ['className'],
        g = c.forwardRef(function (e, n) {
          var r = e.className,
            a = o()(e, f);
          return (0, u.jsx)(
            i.mY,
            t()(
              {
                ref: n,
                className: (0, d.cn)(
                  'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
                  r,
                ),
              },
              a,
            ),
          );
        });
      g.displayName = i.mY.displayName;
      var N = c.forwardRef(function (e, n) {
        var r = e.className,
          a = o()(e, m);
        return (0, u.jsxs)('div', {
          className: 'flex items-center border-b px-3',
          'cmdk-input-wrapper': '',
          children: [
            (0, u.jsx)(l.Z, { className: 'mr-2 h-4 w-4 shrink-0 opacity-50' }),
            (0, u.jsx)(
              i.mY.Input,
              t()(
                {
                  ref: n,
                  className: (0, d.cn)(
                    'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
                    r,
                  ),
                },
                a,
              ),
            ),
          ],
        });
      });
      N.displayName = i.mY.Input.displayName;
      var j = c.forwardRef(function (e, n) {
        var r = e.className,
          a = o()(e, p);
        return (0, u.jsx)(
          i.mY.List,
          t()(
            {
              ref: n,
              className: (0, d.cn)(
                'max-h-[300px] overflow-y-auto overflow-x-hidden',
                r,
              ),
            },
            a,
          ),
        );
      });
      j.displayName = i.mY.List.displayName;
      var b = c.forwardRef(function (e, n) {
        return (0, u.jsx)(
          i.mY.Empty,
          t()({ ref: n, className: 'py-6 text-center text-sm' }, e),
        );
      });
      b.displayName = i.mY.Empty.displayName;
      var y = c.forwardRef(function (e, n) {
        var r = e.className,
          a = o()(e, x);
        return (0, u.jsx)(
          i.mY.Group,
          t()(
            {
              ref: n,
              className: (0, d.cn)(
                'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
                r,
              ),
            },
            a,
          ),
        );
      });
      y.displayName = i.mY.Group.displayName;
      var w = c.forwardRef(function (e, n) {
        var r = e.className,
          a = o()(e, v);
        return (0, u.jsx)(
          i.mY.Separator,
          t()({ ref: n, className: (0, d.cn)('-mx-1 h-px bg-border', r) }, a),
        );
      });
      w.displayName = i.mY.Separator.displayName;
      var k = c.forwardRef(function (e, n) {
        var r = e.className,
          a = o()(e, h);
        return (0, u.jsx)(
          i.mY.Item,
          t()(
            {
              ref: n,
              className: (0, d.cn)(
                "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
                r,
              ),
            },
            a,
          ),
        );
      });
      k.displayName = i.mY.Item.displayName;
    },
    80499: function (e, n, r) {
      r.d(n, {
        NI: function () {
          return R;
        },
        Wi: function () {
          return w;
        },
        l0: function () {
          return j;
        },
        lX: function () {
          return _;
        },
        pf: function () {
          return I;
        },
        xJ: function () {
          return Z;
        },
        zG: function () {
          return M;
        },
      });
      var a = r(13769),
        t = r.n(a),
        s = r(97857),
        o = r.n(s),
        i = r(49677),
        l = r.n(i),
        c = r(88426),
        d = r(62435),
        u = r(87536),
        f = r(65038),
        m = r(27080),
        p = r(84146),
        x = r(86074),
        v = ['className'],
        h = ['className', 'tooltip'],
        g = ['className'],
        N = ['className', 'children'],
        j = u.RV,
        b = d.createContext({}),
        y = d.createContext({}),
        w = function (e) {
          var n = Object.assign({}, (l()(e), e));
          return (0, x.jsx)(y.Provider, {
            value: { name: n.name },
            children: (0, x.jsx)(u.Qr, o()({}, n)),
          });
        },
        k = function () {
          var e = d.useContext(y),
            n = d.useContext(b),
            r = (0, u.Gc)(),
            a = r.getFieldState,
            t = r.formState,
            s = a(e.name, t);
          if (!e)
            throw new Error('useFormField should be used within <FormField>');
          var i = n.id;
          return o()(
            {
              id: i,
              name: e.name,
              formItemId: ''.concat(i, '-form-item'),
              formDescriptionId: ''.concat(i, '-form-item-description'),
              formMessageId: ''.concat(i, '-form-item-message'),
            },
            s,
          );
        },
        C = d.forwardRef(function (e, n) {
          var r = e.className,
            a = t()(e, v),
            s = d.useId();
          return (0, x.jsx)(b.Provider, {
            value: { id: s },
            children: (0, x.jsx)(
              'div',
              o()({ ref: n, className: (0, m.cn)('space-y-2', r) }, a),
            ),
          });
        });
      C.displayName = 'FormItem';
      var Z = d.memo(C),
        _ = d.forwardRef(function (e, n) {
          var r = e.className,
            a = e.tooltip,
            s = t()(e, h),
            i = k(),
            l = i.error,
            c = i.formItemId;
          return (0, x.jsxs)(
            f._,
            o()(
              o()(
                {
                  ref: n,
                  className: (0, m.cn)(
                    l && 'text-destructive',
                    r,
                    'flex pb-0.5',
                  ),
                  htmlFor: c,
                },
                s,
              ),
              {},
              { children: [s.children, a && (0, x.jsx)(p.Z4, { tooltip: a })] },
            ),
          );
        });
      _.displayName = 'FormLabel';
      var R = d.forwardRef(function (e, n) {
        var r = Object.assign({}, (l()(e), e)),
          a = k(),
          t = a.error,
          s = a.formItemId,
          i = a.formDescriptionId,
          d = a.formMessageId;
        return (0, x.jsx)(
          c.g7,
          o()(
            {
              ref: n,
              id: s,
              'aria-describedby': t
                ? ''.concat(i, ' ').concat(d)
                : ''.concat(i),
              'aria-invalid': !!t,
            },
            r,
          ),
        );
      });
      R.displayName = 'FormControl';
      var I = d.forwardRef(function (e, n) {
        var r = e.className,
          a = t()(e, g),
          s = k().formDescriptionId;
        return (0, x.jsx)(
          'p',
          o()(
            {
              ref: n,
              id: s,
              className: (0, m.cn)('text-sm text-muted-foreground', r),
            },
            a,
          ),
        );
      });
      I.displayName = 'FormDescription';
      var M = d.forwardRef(function (e, n) {
        var r = e.className,
          a = e.children,
          s = t()(e, N),
          i = k(),
          l = i.error,
          c = i.formMessageId,
          d = l ? String(null == l ? void 0 : l.message) : a;
        return d
          ? (0, x.jsx)(
              'p',
              o()(
                o()(
                  {
                    ref: n,
                    id: c,
                    className: (0, m.cn)(
                      'text-sm font-medium text-destructive',
                      r,
                    ),
                  },
                  s,
                ),
                {},
                { children: d },
              ),
            )
          : null;
      });
      M.displayName = 'FormMessage';
    },
    65038: function (e, n, r) {
      r.d(n, {
        _: function () {
          return p;
        },
      });
      var a = r(97857),
        t = r.n(a),
        s = r(13769),
        o = r.n(s),
        i = r(49102),
        l = r(45139),
        c = r(62435),
        d = r(27080),
        u = r(86074),
        f = ['className'],
        m = (0, l.j)(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        ),
        p = c.forwardRef(function (e, n) {
          var r = e.className,
            a = o()(e, f);
          return (0, u.jsx)(
            i.f,
            t()({ ref: n, className: (0, d.cn)(m(), r) }, a),
          );
        });
      p.displayName = i.f.displayName;
    },
    73352: function (e, n, r) {
      r.d(n, {
        N: function () {
          return _;
        },
      });
      var a = r(97857),
        t = r.n(a),
        s = r(19632),
        o = r.n(s),
        i = r(5574),
        l = r.n(i),
        c = r(13769),
        d = r.n(c),
        u = r(45139),
        f = r(61108),
        m = r(41352),
        p = r(8971),
        x = r(13742),
        v = r(6571),
        h = r(62435),
        g = r(19252),
        N = r(57636),
        j = r(52118),
        b = r(23499),
        y = r(81136),
        w = r(27080),
        k = r(86074),
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
        Z = (0, u.j)(
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
        _ = h.forwardRef(function (e, n) {
          var r = e.options,
            a = e.onValueChange,
            s = e.variant,
            i = e.defaultValue,
            c = void 0 === i ? [] : i,
            u = e.placeholder,
            _ = void 0 === u ? 'Select options' : u,
            R = e.animation,
            I = void 0 === R ? 0 : R,
            M = e.maxCount,
            S = void 0 === M ? 3 : M,
            V = e.modalPopover,
            z = void 0 !== V && V,
            Y = (e.asChild, e.className),
            F = d()(e, C),
            D = h.useState(c),
            P = l()(D, 2),
            T = P[0],
            q = P[1],
            G = h.useState(!1),
            O = l()(G, 2),
            B = O[0],
            E = O[1],
            J = h.useState(!1),
            K = l()(J, 2),
            W = K[0],
            A = K[1],
            L = function (e) {
              var n = T.includes(e)
                ? T.filter(function (n) {
                    return n !== e;
                  })
                : [].concat(o()(T), [e]);
              q(n), a(n);
            },
            Q = function () {
              q([]), a([]);
            };
          return (0, k.jsxs)(b.J2, {
            open: B,
            onOpenChange: E,
            modal: z,
            children: [
              (0, k.jsx)(b.xo, {
                asChild: !0,
                children: (0, k.jsx)(
                  N.zx,
                  t()(
                    t()({ ref: n }, F),
                    {},
                    {
                      onClick: function () {
                        E(function (e) {
                          return !e;
                        });
                      },
                      className: (0, w.cn)(
                        'flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between bg-inherit hover:bg-inherit [&_svg]:pointer-events-auto',
                        Y,
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
                                    T.slice(0, S).map(function (e) {
                                      var n = r.find(function (n) {
                                          return n.value === e;
                                        }),
                                        a = null == n ? void 0 : n.icon;
                                      return (0, k.jsxs)(
                                        g.C,
                                        {
                                          className: (0, w.cn)(
                                            W ? 'animate-bounce' : '',
                                            Z({ variant: s }),
                                          ),
                                          style: {
                                            animationDuration: ''.concat(
                                              I,
                                              's',
                                            ),
                                          },
                                          children: [
                                            a &&
                                              (0, k.jsx)(a, {
                                                className: 'h-4 w-4 mr-2',
                                              }),
                                            null == n ? void 0 : n.label,
                                            (0, k.jsx)(f.Z, {
                                              className:
                                                'ml-2 h-4 w-4 cursor-pointer',
                                              onClick: function (n) {
                                                n.stopPropagation(), L(e);
                                              },
                                            }),
                                          ],
                                        },
                                        e,
                                      );
                                    }),
                                    T.length > S &&
                                      (0, k.jsxs)(g.C, {
                                        className: (0, w.cn)(
                                          'bg-transparent text-foreground border-foreground/1 hover:bg-transparent',
                                          W ? 'animate-bounce' : '',
                                          Z({ variant: s }),
                                        ),
                                        style: {
                                          animationDuration: ''.concat(I, 's'),
                                        },
                                        children: [
                                          '+ '.concat(T.length - S, ' more'),
                                          (0, k.jsx)(f.Z, {
                                            className:
                                              'ml-2 h-4 w-4 cursor-pointer',
                                            onClick: function (e) {
                                              var n;
                                              e.stopPropagation(),
                                                (n = T.slice(0, S)),
                                                q(n),
                                                a(n);
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
                                    (0, k.jsx)(m.Z, {
                                      className:
                                        'h-4 mx-2 cursor-pointer text-muted-foreground',
                                      onClick: function (e) {
                                        e.stopPropagation(), Q();
                                      },
                                    }),
                                    (0, k.jsx)(y.Z, {
                                      orientation: 'vertical',
                                      className: 'flex min-h-6 h-full',
                                    }),
                                    (0, k.jsx)(p.Z, {
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
                                  children: _,
                                }),
                                (0, k.jsx)(p.Z, {
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
                  return E(!1);
                },
                children: (0, k.jsxs)(j.mY, {
                  children: [
                    (0, k.jsx)(j.sZ, {
                      placeholder: 'Search...',
                      onKeyDown: function (e) {
                        if ('Enter' === e.key) E(!0);
                        else if (
                          'Backspace' === e.key &&
                          !e.currentTarget.value
                        ) {
                          var n = o()(T);
                          n.pop(), q(n), a(n);
                        }
                      },
                    }),
                    (0, k.jsxs)(j.e8, {
                      children: [
                        (0, k.jsx)(j.rb, { children: 'No results found.' }),
                        (0, k.jsxs)(j.fu, {
                          children: [
                            (0, k.jsxs)(
                              j.di,
                              {
                                onSelect: function () {
                                  if (T.length === r.length) Q();
                                  else {
                                    var e = r.map(function (e) {
                                      return e.value;
                                    });
                                    q(e), a(e);
                                  }
                                },
                                className: 'cursor-pointer',
                                children: [
                                  (0, k.jsx)('div', {
                                    className: (0, w.cn)(
                                      'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                      T.length === r.length
                                        ? 'bg-primary text-primary-foreground'
                                        : 'opacity-50 [&_svg]:invisible',
                                    ),
                                    children: (0, k.jsx)(x.Z, {
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
                            r.map(function (e) {
                              var n = T.includes(e.value);
                              return (0, k.jsxs)(
                                j.di,
                                {
                                  onSelect: function () {
                                    return L(e.value);
                                  },
                                  className: 'cursor-pointer',
                                  children: [
                                    (0, k.jsx)('div', {
                                      className: (0, w.cn)(
                                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                        n
                                          ? 'bg-primary text-primary-foreground'
                                          : 'opacity-50 [&_svg]:invisible',
                                      ),
                                      children: (0, k.jsx)(x.Z, {
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
                        (0, k.jsx)(j.zz, {}),
                        (0, k.jsx)(j.fu, {
                          children: (0, k.jsxs)('div', {
                            className: 'flex items-center justify-between',
                            children: [
                              T.length > 0 &&
                                (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    (0, k.jsx)(j.di, {
                                      onSelect: Q,
                                      className:
                                        'flex-1 justify-center cursor-pointer',
                                      children: 'Clear',
                                    }),
                                    (0, k.jsx)(y.Z, {
                                      orientation: 'vertical',
                                      className: 'flex min-h-6 h-full',
                                    }),
                                  ],
                                }),
                              (0, k.jsx)(j.di, {
                                onSelect: function () {
                                  return E(!1);
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
              I > 0 &&
                T.length > 0 &&
                (0, k.jsx)(v.Z, {
                  className: (0, w.cn)(
                    'cursor-pointer my-2 text-foreground bg-background w-3 h-3',
                    W ? '' : 'text-muted-foreground',
                  ),
                  onClick: function () {
                    return A(!W);
                  },
                }),
            ],
          });
        });
      _.displayName = 'MultiSelect';
    },
    23499: function (e, n, r) {
      r.d(n, {
        J2: function () {
          return f;
        },
        xo: function () {
          return m;
        },
        yk: function () {
          return p;
        },
      });
      var a = r(97857),
        t = r.n(a),
        s = r(13769),
        o = r.n(s),
        i = r(48843),
        l = r(62435),
        c = r(27080),
        d = r(86074),
        u = ['className', 'align', 'sideOffset'],
        f = i.fC,
        m = i.xz,
        p = l.forwardRef(function (e, n) {
          var r = e.className,
            a = e.align,
            s = void 0 === a ? 'center' : a,
            l = e.sideOffset,
            f = void 0 === l ? 4 : l,
            m = o()(e, u);
          return (0, d.jsx)(i.h_, {
            children: (0, d.jsx)(
              i.VY,
              t()(
                {
                  ref: n,
                  align: s,
                  sideOffset: f,
                  className: (0, c.cn)(
                    'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    r,
                  ),
                },
                m,
              ),
            ),
          });
        });
      p.displayName = i.VY.displayName;
    },
    84586: function (e, n, r) {
      r.d(n, {
        Bw: function () {
          return M;
        },
        DI: function () {
          return C;
        },
        Ph: function () {
          return k;
        },
        Ql: function () {
          return V;
        },
        i4: function () {
          return _;
        },
        ki: function () {
          return Z;
        },
        n5: function () {
          return S;
        },
        vM: function () {
          return z;
        },
      });
      var a = r(5574),
        t = r.n(a),
        s = r(97857),
        o = r.n(s),
        i = r(13769),
        l = r.n(i),
        c = r(12291),
        d = r(41352),
        u = r(8971),
        f = r(84979),
        m = r(13742),
        p = r(62435),
        x = r(27080),
        v = r(86074),
        h = ['className', 'children', 'value', 'onReset', 'allowClear'],
        g = ['className'],
        N = ['className'],
        j = ['className', 'children', 'position'],
        b = ['className'],
        y = ['className', 'children'],
        w = ['className'],
        k = c.fC,
        C = c.ZA,
        Z = c.B4,
        _ = p.forwardRef(function (e, n) {
          var r = e.className,
            a = e.children,
            t = e.value,
            s = e.onReset,
            i = e.allowClear,
            f = l()(e, h);
          return (0, v.jsxs)(
            c.xz,
            o()(
              o()(
                {
                  ref: n,
                  className: (0, x.cn)(
                    'flex h-8 w-full items-center justify-between rounded-md border border-input bg-colors-background-inverse-weak px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
                    r,
                  ),
                },
                f,
              ),
              {},
              {
                children: [
                  a,
                  (0, v.jsx)(c.JO, {
                    asChild: !0,
                    onPointerDown: function (e) {
                      e.stopPropagation();
                    },
                    children:
                      t && i
                        ? (0, v.jsx)(d.Z, {
                            className: 'h-4 w-4 opacity-50 cursor-pointer',
                            onClick: s,
                          })
                        : (0, v.jsx)(u.Z, { className: 'h-4 w-4 opacity-50' }),
                  }),
                ],
              },
            ),
          );
        });
      _.displayName = c.xz.displayName;
      var R = p.forwardRef(function (e, n) {
        var r = e.className,
          a = l()(e, g);
        return (0, v.jsx)(
          c.u_,
          o()(
            o()(
              {
                ref: n,
                className: (0, x.cn)(
                  'flex cursor-default items-center justify-center py-1',
                  r,
                ),
              },
              a,
            ),
            {},
            { children: (0, v.jsx)(f.Z, { className: 'h-4 w-4' }) },
          ),
        );
      });
      R.displayName = c.u_.displayName;
      var I = p.forwardRef(function (e, n) {
        var r = e.className,
          a = l()(e, N);
        return (0, v.jsx)(
          c.$G,
          o()(
            o()(
              {
                ref: n,
                className: (0, x.cn)(
                  'flex cursor-default items-center justify-center py-1',
                  r,
                ),
              },
              a,
            ),
            {},
            { children: (0, v.jsx)(u.Z, { className: 'h-4 w-4' }) },
          ),
        );
      });
      I.displayName = c.$G.displayName;
      var M = p.forwardRef(function (e, n) {
        var r = e.className,
          a = e.children,
          t = e.position,
          s = void 0 === t ? 'popper' : t,
          i = l()(e, j);
        return (0, v.jsx)(c.h_, {
          children: (0, v.jsxs)(
            c.VY,
            o()(
              o()(
                {
                  ref: n,
                  className: (0, x.cn)(
                    'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    'popper' === s &&
                      'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
                    r,
                  ),
                  position: s,
                },
                i,
              ),
              {},
              {
                children: [
                  (0, v.jsx)(R, {}),
                  (0, v.jsx)(c.l_, {
                    className: (0, x.cn)(
                      'p-1',
                      'popper' === s &&
                        'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
                    ),
                    children: a,
                  }),
                  (0, v.jsx)(I, {}),
                ],
              },
            ),
          ),
        });
      });
      M.displayName = c.VY.displayName;
      var S = p.forwardRef(function (e, n) {
        var r = e.className,
          a = l()(e, b);
        return (0, v.jsx)(
          c.__,
          o()(
            {
              ref: n,
              className: (0, x.cn)('py-1.5 pl-8 pr-2 text-sm font-semibold', r),
            },
            a,
          ),
        );
      });
      S.displayName = c.__.displayName;
      var V = p.forwardRef(function (e, n) {
        var r = e.className,
          a = e.children,
          t = l()(e, y);
        return (0, v.jsxs)(
          c.ck,
          o()(
            o()(
              {
                ref: n,
                className: (0, x.cn)(
                  'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  r,
                ),
              },
              t,
            ),
            {},
            {
              children: [
                (0, v.jsx)('span', {
                  className:
                    'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
                  children: (0, v.jsx)(c.wU, {
                    children: (0, v.jsx)(m.Z, { className: 'h-4 w-4' }),
                  }),
                }),
                (0, v.jsx)(c.eT, { children: a }),
              ],
            },
          ),
        );
      });
      (V.displayName = c.ck.displayName),
        (p.forwardRef(function (e, n) {
          var r = e.className,
            a = l()(e, w);
          return (0, v.jsx)(
            c.Z0,
            o()(
              { ref: n, className: (0, x.cn)('-mx-1 my-1 h-px bg-muted', r) },
              a,
            ),
          );
        }).displayName = c.Z0.displayName);
      var z = (0, p.forwardRef)(function (e, n) {
        var r = e.value,
          a = e.onChange,
          s = e.FormControlComponent,
          i = e.options,
          l = void 0 === i ? [] : i,
          c = e.allowClear,
          d = e.placeholder,
          u = e.contentProps,
          f = void 0 === u ? {} : u,
          m = e.triggerClassName,
          x = e.onlyShowSelectedIcon,
          h = void 0 !== x && x,
          g = p.useState(+new Date()),
          N = t()(g, 2),
          j = N[0],
          b = N[1],
          y = p.useState(r),
          w = t()(y, 2),
          R = w[0],
          I = w[1],
          z =
            s ||
            function (e) {
              var n = e.children;
              return (0, v.jsx)('div', { children: n });
            },
          Y = (0, p.useCallback)(
            function (e) {
              I(e), null == a || a(e);
            },
            [a],
          ),
          F = (0, p.useCallback)(
            function () {
              Y(void 0), b(+new Date());
            },
            [Y],
          );
        (0, p.useEffect)(
          function () {
            I(function (e) {
              return e !== r ? r : e;
            });
          },
          [r],
        );
        var D = p.useMemo(
          function () {
            var e = l;
            l.some(function (e) {
              return !('value' in e);
            }) &&
              (e = l.reduce(function (e, n) {
                var r;
                return e.concat(
                  null !== (r = null == n ? void 0 : n.options) && void 0 !== r
                    ? r
                    : [],
                );
              }, []));
            var n = e.find(function (e) {
              return e.value === R;
            });
            return h
              ? null == n
                ? void 0
                : n.icon
              : null == n
                ? void 0
                : n.label;
          },
          [h, l, R],
        );
        return (0, v.jsxs)(
          k,
          {
            onValueChange: Y,
            value: R,
            children: [
              (0, v.jsx)(z, {
                children: (0, v.jsx)(_, {
                  value: R,
                  onReset: F,
                  allowClear: c,
                  ref: n,
                  className: m,
                  children: (0, v.jsx)(Z, { placeholder: d, children: D }),
                }),
              }),
              (0, v.jsx)(
                M,
                o()(
                  o()({}, f),
                  {},
                  {
                    children: l.map(function (e, n) {
                      return 'value' in e
                        ? (0, v.jsx)(
                            V,
                            {
                              value: e.value,
                              disabled: e.disabled,
                              children: (0, v.jsxs)('div', {
                                className: 'flex items-center gap-1',
                                children: [e.icon, e.label],
                              }),
                            },
                            e.value,
                          )
                        : (0, v.jsxs)(
                            C,
                            {
                              children: [
                                (0, v.jsx)(S, {
                                  className: 'pl-2',
                                  children: e.label,
                                }),
                                e.options.map(function (e) {
                                  return (0, v.jsx)(
                                    V,
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
          j,
        );
      });
      z.displayName = 'RAGFlowSelect';
    },
    2834: function (e, n, r) {
      r.d(n, {
        r: function () {
          return f;
        },
      });
      var a = r(97857),
        t = r.n(a),
        s = r(13769),
        o = r.n(s),
        i = r(60761),
        l = r(62435),
        c = r(27080),
        d = r(86074),
        u = ['className'],
        f = l.forwardRef(function (e, n) {
          var r = e.className,
            a = o()(e, u);
          return (0, d.jsx)(
            i.fC,
            t()(
              t()(
                {
                  className: (0, c.cn)(
                    'peer inline-flex h-3.5 w-6 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-background-checked data-[state=unchecked]:bg-text-sub-title',
                    r,
                  ),
                },
                a,
              ),
              {},
              {
                ref: n,
                children: (0, d.jsx)(i.bU, {
                  className: (0, c.cn)(
                    'pointer-events-none block size-3 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-2 data-[state=unchecked]:translate-x-0',
                  ),
                }),
              },
            ),
          );
        });
      f.displayName = i.fC.displayName;
    },
    51418: function (e, n, r) {
      r.d(n, {
        R5: function () {
          return l;
        },
        fE: function () {
          return c;
        },
      });
      var a = r(19632),
        t = r.n(a),
        s = r(1079),
        o = r(57557),
        i = r.n(o),
        l = function (e, n) {
          var r = i()(
            e,
            [].concat(
              t()(Object.keys(s.vv)),
              ['parameter'],
              t()(
                (function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 'llm_setting.';
                  return Object.keys(s.vv)
                    .filter(function (n) {
                      return !e[n];
                    })
                    .map(function (e) {
                      return ''.concat(n).concat(s.vv[e]);
                    });
                })(e, n),
              ),
            ),
          );
          return r;
        };
      function c(e) {
        return Object.values(e).map(function (e) {
          return { label: e, value: e };
        });
      }
    },
  },
]);
//# sourceMappingURL=4102.b2278d79.async.js.map
