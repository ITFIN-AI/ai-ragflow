'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [7237],
  {
    51811: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return i;
        },
      });
      var a = n(27080),
        r = n(86074);
      function i(e) {
        var t = e.children,
          n = e.show,
          i = void 0 === n || n,
          s = e.className;
        return i
          ? (0, r.jsx)('section', {
              className: (0, a.cn)('border rounded-lg p-5 space-y-5', s),
              children: t,
            })
          : t;
      }
    },
    87181: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return s;
        },
      });
      var a = n(5574),
        r = n.n(a),
        i = n(62435);
      function s() {
        var e = (0, i.useState)({}),
          t = r()(e, 2),
          n = t[0],
          a = t[1],
          s = (0, i.useCallback)(function (e) {
            a(e);
          }, []);
        return { filterValue: n, setFilterValue: a, handleFilterSubmit: s };
      }
    },
    77567: function (e, t, n) {
      n.d(t, {
        Nr: function () {
          return w;
        },
        eT: function () {
          return Z;
        },
        lk: function () {
          return N;
        },
      });
      var a = n(97857),
        r = n.n(a),
        i = n(5574),
        s = n.n(i),
        o = n(96330),
        l = n(86968),
        c = n(38392),
        u = n(45360),
        d = n(22150),
        m = n(34041),
        f = n(71338),
        h = n(62435),
        p = n(87536),
        g = n(1604),
        x = n(15309),
        v = n(80499),
        b = n(84586),
        j = n(86074),
        y = function () {
          var e = (0, l.qM)('knowledgeDetails').t,
            t = (0, c.hl)(),
            n = u.ZP.useMessage(),
            a = s()(n, 2),
            r = a[0],
            i = a[1],
            f = (0, h.useCallback)(
              function (t) {
                t &&
                  r.open({ type: 'warning', content: e('reRankModelWaring') });
              },
              [r, e],
            );
          return (0, j.jsxs)(j.Fragment, {
            children: [
              i,
              (0, j.jsx)(d.Z.Item, {
                label: e('rerankModel'),
                name: 'rerank_id',
                tooltip: e('rerankTip'),
                children: (0, j.jsx)(m.Z, {
                  options: t[o.Vr.Rerank],
                  allowClear: !0,
                  placeholder: e('rerankPlaceholder'),
                  onChange: f,
                }),
              }),
            ],
          });
        },
        N = { top_k: g.z.number().optional() },
        w = { top_k: 1024 };
      t.ZP = function () {
        var e = (0, l.qM)('knowledgeDetails').t;
        return (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsx)(y, {}),
            (0, j.jsx)(d.Z.Item, {
              noStyle: !0,
              dependencies: ['rerank_id'],
              children: function (t) {
                return (
                  (0, t.getFieldValue)('rerank_id') &&
                  (0, j.jsx)(d.Z.Item, {
                    label: e('topK'),
                    name: 'top_k',
                    initialValue: 1024,
                    tooltip: e('topKTip'),
                    children: (0, j.jsx)(f.Z, { max: 2048, min: 1 }),
                  })
                );
              },
            }),
          ],
        });
      };
      var k = 'rerank_id';
      function _() {
        var e = (0, p.Gc)(),
          t = (0, l.qM)('knowledgeDetails').t,
          n = (0, c.hl)()[o.Vr.Rerank];
        return (0, j.jsx)(v.Wi, {
          control: e.control,
          name: k,
          render: function (e) {
            var a = e.field;
            return (0, j.jsxs)(v.xJ, {
              children: [
                (0, j.jsx)(v.lX, {
                  tooltip: t('rerankTip'),
                  children: t('rerankModel'),
                }),
                (0, j.jsx)(v.NI, {
                  children: (0, j.jsx)(
                    b.vM,
                    r()(r()({ allowClear: !0 }, a), {}, { options: n }),
                  ),
                }),
                (0, j.jsx)(v.zG, {}),
              ],
            });
          },
        });
      }
      function Z() {
        var e = (0, p.Gc)().watch,
          t = (0, l.qM)('knowledgeDetails').t,
          n = e(k);
        return (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsx)(_, {}),
            n &&
              (0, j.jsx)(x.W, {
                name: 'top_k',
                label: t('topK'),
                max: 2048,
                min: 1,
                tooltip: t('topKTip'),
              }),
          ],
        });
      }
    },
    32739: function (e, t, n) {
      n.d(t, {
        FG: function () {
          return f;
        },
        Gs: function () {
          return u;
        },
        YC: function () {
          return m;
        },
        oD: function () {
          return c;
        },
        uo: function () {
          return d;
        },
      });
      var a = n(86968),
        r = n(22150),
        i = n(71338),
        s = n(1604),
        o = n(15309),
        l = n(86074);
      t.ZP = function (e) {
        var t = e.isTooltipShown,
          n = void 0 !== t && t,
          s = e.vectorSimilarityWeightName,
          o = void 0 === s ? 'vector_similarity_weight' : s,
          c = (0, a.qM)('knowledgeDetails').t;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(r.Z.Item, {
              label: c('similarityThreshold'),
              name: 'similarity_threshold',
              tooltip: n && c('similarityThresholdTip'),
              initialValue: 0.2,
              children: (0, l.jsx)(i.Z, { max: 1, step: 0.01 }),
            }),
            (0, l.jsx)(r.Z.Item, {
              label: c('vectorSimilarityWeight'),
              name: o,
              initialValue: 0.7,
              tooltip: n && c('vectorSimilarityWeightTip'),
              children: (0, l.jsx)(i.Z, { max: 1, step: 0.01 }),
            }),
          ],
        });
      };
      var c = { similarity_threshold: 0.2 },
        u = { keywords_similarity_weight: 0.7 },
        d = { similarity_threshold: s.z.number() },
        m = { keywords_similarity_weight: s.z.number() };
      function f(e) {
        var t = e.vectorSimilarityWeightName,
          n = void 0 === t ? 'vector_similarity_weight' : t,
          r = e.isTooltipShown,
          i = (0, a.qM)('knowledgeDetails').t;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(o.W, {
              name: 'similarity_threshold',
              label: i('similarityThreshold'),
              max: 1,
              step: 0.01,
              tooltip: r && i('similarityThresholdTip'),
            }),
            (0, l.jsx)(o.W, {
              name: n,
              label: i('vectorSimilarityWeight'),
              max: 1,
              step: 0.01,
              tooltip: r && i('vectorSimilarityWeightTip'),
            }),
          ],
        });
      }
    },
    15309: function (e, t, n) {
      n.d(t, {
        W: function () {
          return d;
        },
      });
      var a = n(97857),
        r = n.n(a),
        i = n(27080),
        s = n(87536),
        o = n(4533),
        l = n(80499),
        c = n(27591),
        u = n(86074);
      function d(e) {
        var t = e.max,
          n = e.min,
          a = e.step,
          d = e.label,
          m = e.name,
          f = e.tooltip,
          h = e.defaultValue,
          p = e.className,
          g = (0, s.Gc)();
        return (0, u.jsx)(l.Wi, {
          control: g.control,
          name: m,
          defaultValue: h || 0,
          render: function (e) {
            var s = e.field;
            return (0, u.jsxs)(l.xJ, {
              className: ' items-center space-y-0 ',
              children: [
                (0, u.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, u.jsx)(l.lX, {
                      tooltip: f,
                      className:
                        'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                      children: d,
                    }),
                    (0, u.jsxs)('div', {
                      className: (0, i.cn)(
                        'flex items-center gap-14 justify-between',
                        'w-3/4',
                        p,
                      ),
                      children: [
                        (0, u.jsx)(l.NI, {
                          children: (0, u.jsx)(
                            o.b,
                            r()(r()({}, s), {}, { max: t, min: n, step: a }),
                          ),
                        }),
                        (0, u.jsx)(l.NI, {
                          children: (0, u.jsx)(
                            c.II,
                            r()(
                              r()(
                                {
                                  type: 'number',
                                  className: 'h-7 w-20',
                                  max: t,
                                  min: n,
                                  step: a,
                                },
                                s,
                              ),
                              {},
                              {
                                onChange: function (e) {
                                  var t = e.target.value;
                                  s.onChange('' === t ? 0 : Number(t));
                                },
                              },
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, u.jsx)(l.zG, {}),
              ],
            });
          },
        });
      }
    },
    16772: function (e, t, n) {
      n.d(t, {
        I: function () {
          return l;
        },
      });
      var a = n(80499),
        r = n(2834),
        i = n(27080),
        s = n(87536),
        o = n(86074);
      function l(e) {
        var t = e.label,
          n = e.name,
          l = e.vertical,
          c = void 0 === l || l,
          u = e.tooltip,
          d = (0, s.Gc)();
        return (0, o.jsx)(a.Wi, {
          control: d.control,
          name: n,
          render: function (e) {
            var n = e.field;
            return (0, o.jsxs)(a.xJ, {
              className: (0, i.cn)('flex', {
                'gap-2': c,
                'flex-col': c,
                'justify-between': !c,
              }),
              children: [
                (0, o.jsx)(a.lX, { tooltip: u, children: t }),
                (0, o.jsx)(a.NI, {
                  children: (0, o.jsx)(r.r, {
                    checked: n.value,
                    onCheckedChange: n.onChange,
                    'aria-readonly': !0,
                    className: '!m-0',
                  }),
                }),
              ],
            });
          },
        });
      }
    },
    19252: function (e, t, n) {
      n.d(t, {
        C: function () {
          return m;
        },
      });
      var a = n(97857),
        r = n.n(a),
        i = n(13769),
        s = n.n(i),
        o = n(45139),
        l = (n(62435), n(27080)),
        c = n(86074),
        u = ['className', 'variant'],
        d = (0, o.j)(
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
        var t = e.className,
          n = e.variant,
          a = s()(e, u);
        return (0, c.jsx)(
          'div',
          r()({ className: (0, l.cn)(d({ variant: n }), t) }, a),
        );
      }
    },
    52118: function (e, t, n) {
      n.d(t, {
        di: function () {
          return k;
        },
        e8: function () {
          return j;
        },
        fu: function () {
          return N;
        },
        mY: function () {
          return v;
        },
        rb: function () {
          return y;
        },
        sZ: function () {
          return b;
        },
        zz: function () {
          return w;
        },
      });
      var a = n(97857),
        r = n.n(a),
        i = n(13769),
        s = n.n(i),
        o = n(13879),
        l = n(87764),
        c = n(62435),
        u = (n(28993), n(27080)),
        d = n(86074),
        m = ['className'],
        f = ['className'],
        h = ['className'],
        p = ['className'],
        g = ['className'],
        x = ['className'],
        v = c.forwardRef(function (e, t) {
          var n = e.className,
            a = s()(e, m);
          return (0, d.jsx)(
            o.mY,
            r()(
              {
                ref: t,
                className: (0, u.cn)(
                  'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
                  n,
                ),
              },
              a,
            ),
          );
        });
      v.displayName = o.mY.displayName;
      var b = c.forwardRef(function (e, t) {
        var n = e.className,
          a = s()(e, f);
        return (0, d.jsxs)('div', {
          className: 'flex items-center border-b px-3',
          'cmdk-input-wrapper': '',
          children: [
            (0, d.jsx)(l.Z, { className: 'mr-2 h-4 w-4 shrink-0 opacity-50' }),
            (0, d.jsx)(
              o.mY.Input,
              r()(
                {
                  ref: t,
                  className: (0, u.cn)(
                    'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
                    n,
                  ),
                },
                a,
              ),
            ),
          ],
        });
      });
      b.displayName = o.mY.Input.displayName;
      var j = c.forwardRef(function (e, t) {
        var n = e.className,
          a = s()(e, h);
        return (0, d.jsx)(
          o.mY.List,
          r()(
            {
              ref: t,
              className: (0, u.cn)(
                'max-h-[300px] overflow-y-auto overflow-x-hidden',
                n,
              ),
            },
            a,
          ),
        );
      });
      j.displayName = o.mY.List.displayName;
      var y = c.forwardRef(function (e, t) {
        return (0, d.jsx)(
          o.mY.Empty,
          r()({ ref: t, className: 'py-6 text-center text-sm' }, e),
        );
      });
      y.displayName = o.mY.Empty.displayName;
      var N = c.forwardRef(function (e, t) {
        var n = e.className,
          a = s()(e, p);
        return (0, d.jsx)(
          o.mY.Group,
          r()(
            {
              ref: t,
              className: (0, u.cn)(
                'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
                n,
              ),
            },
            a,
          ),
        );
      });
      N.displayName = o.mY.Group.displayName;
      var w = c.forwardRef(function (e, t) {
        var n = e.className,
          a = s()(e, g);
        return (0, d.jsx)(
          o.mY.Separator,
          r()({ ref: t, className: (0, u.cn)('-mx-1 h-px bg-border', n) }, a),
        );
      });
      w.displayName = o.mY.Separator.displayName;
      var k = c.forwardRef(function (e, t) {
        var n = e.className,
          a = s()(e, x);
        return (0, d.jsx)(
          o.mY.Item,
          r()(
            {
              ref: t,
              className: (0, u.cn)(
                "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
                n,
              ),
            },
            a,
          ),
        );
      });
      k.displayName = o.mY.Item.displayName;
    },
    28993: function (e, t, n) {
      n.d(t, {
        $N: function () {
          return _;
        },
        Vq: function () {
          return v;
        },
        cN: function () {
          return k;
        },
        cZ: function () {
          return N;
        },
        fK: function () {
          return w;
        },
        hg: function () {
          return b;
        },
      });
      var a = n(97857),
        r = n.n(a),
        i = n(13769),
        s = n.n(i),
        o = n(28828),
        l = n(41352),
        c = n(62435),
        u = n(27080),
        d = n(86074),
        m = ['className'],
        f = ['className', 'children'],
        h = ['className'],
        p = ['className'],
        g = ['className'],
        x = ['className'],
        v = o.fC,
        b = o.xz,
        j = o.h_,
        y =
          (o.x8,
          c.forwardRef(function (e, t) {
            var n = e.className,
              a = s()(e, m);
            return (0, d.jsx)(
              o.aV,
              r()(
                {
                  ref: t,
                  className: (0, u.cn)(
                    'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    n,
                  ),
                },
                a,
              ),
            );
          }));
      y.displayName = o.aV.displayName;
      var N = c.forwardRef(function (e, t) {
        var n = e.className,
          a = e.children,
          i = s()(e, f);
        return (0, d.jsxs)(j, {
          children: [
            (0, d.jsx)(y, {}),
            (0, d.jsxs)(
              o.VY,
              r()(
                r()(
                  {
                    ref: t,
                    className: (0, u.cn)(
                      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-colors-background-neutral-standard p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                      n,
                    ),
                  },
                  i,
                ),
                {},
                {
                  children: [
                    a,
                    (0, d.jsxs)(o.x8, {
                      className:
                        'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                      children: [
                        (0, d.jsx)(l.Z, { className: 'h-4 w-4' }),
                        (0, d.jsx)('span', {
                          className: 'sr-only',
                          children: 'Close',
                        }),
                      ],
                    }),
                  ],
                },
              ),
            ),
          ],
        });
      });
      N.displayName = o.VY.displayName;
      var w = function (e) {
        var t = e.className,
          n = s()(e, h);
        return (0, d.jsx)(
          'div',
          r()(
            {
              className: (0, u.cn)(
                'flex flex-col space-y-1.5 text-center sm:text-left',
                t,
              ),
            },
            n,
          ),
        );
      };
      w.displayName = 'DialogHeader';
      var k = function (e) {
        var t = e.className,
          n = s()(e, p);
        return (0, d.jsx)(
          'div',
          r()(
            {
              className: (0, u.cn)(
                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                t,
              ),
            },
            n,
          ),
        );
      };
      k.displayName = 'DialogFooter';
      var _ = c.forwardRef(function (e, t) {
        var n = e.className,
          a = s()(e, g);
        return (0, d.jsx)(
          o.Dx,
          r()(
            {
              ref: t,
              className: (0, u.cn)(
                'text-lg font-semibold leading-none tracking-tight',
                n,
              ),
            },
            a,
          ),
        );
      });
      (_.displayName = o.Dx.displayName),
        (c.forwardRef(function (e, t) {
          var n = e.className,
            a = s()(e, x);
          return (0, d.jsx)(
            o.dk,
            r()(
              {
                ref: t,
                className: (0, u.cn)('text-sm text-muted-foreground', n),
              },
              a,
            ),
          );
        }).displayName = o.dk.displayName);
    },
    4533: function (e, t, n) {
      n.d(t, {
        b: function () {
          return h;
        },
      });
      var a = n(97857),
        r = n.n(a),
        i = n(13769),
        s = n.n(i),
        o = n(68482),
        l = n(62435),
        c = n(27080),
        u = n(86074),
        d = ['className', 'label', 'labelPosition'],
        m = ['value', 'onChange'],
        f = l.forwardRef(function (e, t) {
          var n = e.className,
            a = e.label,
            i = e.labelPosition,
            m = void 0 === i ? 'top' : i,
            f = s()(e, d),
            h = Array.isArray(f.value) ? f.value : [f.min, f.max];
          return (0, u.jsxs)(
            o.fC,
            r()(
              r()(
                {
                  ref: t,
                  className: (0, c.cn)(
                    'relative flex w-full touch-none select-none items-center',
                    n,
                  ),
                },
                f,
              ),
              {},
              {
                children: [
                  (0, u.jsx)(o.fQ, {
                    className:
                      'relative h-2 w-full grow overflow-hidden rounded-full bg-secondary',
                    children: (0, u.jsx)(o.e6, {
                      className: 'absolute h-full bg-background-checked',
                    }),
                  }),
                  h.map(function (e, t) {
                    return (0, u.jsx)(
                      l.Fragment,
                      {
                        children: (0, u.jsx)(o.bU, {
                          className:
                            'relative block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
                          children:
                            a &&
                            (0, u.jsx)('span', {
                              className: (0, c.cn)(
                                'absolute flex w-full justify-center',
                                'top' === m && '-top-7',
                                'bottom' === m && 'top-4',
                              ),
                              children: a(e),
                            }),
                        }),
                      },
                      t,
                    );
                  }),
                ],
              },
            ),
          );
        });
      f.displayName = 'DualRangeSlider';
      var h = l.forwardRef(function (e, t) {
        var n = e.value,
          a = e.onChange,
          i = s()(e, m);
        return (0, u.jsx)(
          f,
          r()(
            {
              ref: t,
              value: [n],
              onValueChange: function (e) {
                a(e[0]);
              },
            },
            i,
          ),
        );
      });
    },
    73352: function (e, t, n) {
      n.d(t, {
        N: function () {
          return C;
        },
      });
      var a = n(97857),
        r = n.n(a),
        i = n(19632),
        s = n.n(i),
        o = n(5574),
        l = n.n(o),
        c = n(13769),
        u = n.n(c),
        d = n(45139),
        m = n(61108),
        f = n(41352),
        h = n(8971),
        p = n(13742),
        g = n(6571),
        x = n(62435),
        v = n(19252),
        b = n(57636),
        j = n(52118),
        y = n(23499),
        N = n(81136),
        w = n(27080),
        k = n(86074),
        _ = [
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
        Z = (0, d.j)(
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
        C = x.forwardRef(function (e, t) {
          var n = e.options,
            a = e.onValueChange,
            i = e.variant,
            o = e.defaultValue,
            c = void 0 === o ? [] : o,
            d = e.placeholder,
            C = void 0 === d ? 'Select options' : d,
            S = e.animation,
            V = void 0 === S ? 0 : S,
            K = e.maxCount,
            P = void 0 === K ? 3 : K,
            T = e.modalPopover,
            F = void 0 !== T && T,
            z = (e.asChild, e.className),
            D = u()(e, _),
            G = x.useState(c),
            I = l()(G, 2),
            R = I[0],
            Y = I[1],
            q = x.useState(!1),
            M = l()(q, 2),
            W = M[0],
            L = M[1],
            E = x.useState(!1),
            Q = l()(E, 2),
            A = Q[0],
            X = Q[1],
            J = function (e) {
              var t = R.includes(e)
                ? R.filter(function (t) {
                    return t !== e;
                  })
                : [].concat(s()(R), [e]);
              Y(t), a(t);
            },
            $ = function () {
              Y([]), a([]);
            };
          return (0, k.jsxs)(y.J2, {
            open: W,
            onOpenChange: L,
            modal: F,
            children: [
              (0, k.jsx)(y.xo, {
                asChild: !0,
                children: (0, k.jsx)(
                  b.zx,
                  r()(
                    r()({ ref: t }, D),
                    {},
                    {
                      onClick: function () {
                        L(function (e) {
                          return !e;
                        });
                      },
                      className: (0, w.cn)(
                        'flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between bg-inherit hover:bg-inherit [&_svg]:pointer-events-auto',
                        z,
                      ),
                      children:
                        R.length > 0
                          ? (0, k.jsxs)('div', {
                              className:
                                'flex justify-between items-center w-full',
                              children: [
                                (0, k.jsxs)('div', {
                                  className: 'flex flex-wrap items-center',
                                  children: [
                                    R.slice(0, P).map(function (e) {
                                      var t = n.find(function (t) {
                                          return t.value === e;
                                        }),
                                        a = null == t ? void 0 : t.icon;
                                      return (0, k.jsxs)(
                                        v.C,
                                        {
                                          className: (0, w.cn)(
                                            A ? 'animate-bounce' : '',
                                            Z({ variant: i }),
                                          ),
                                          style: {
                                            animationDuration: ''.concat(
                                              V,
                                              's',
                                            ),
                                          },
                                          children: [
                                            a &&
                                              (0, k.jsx)(a, {
                                                className: 'h-4 w-4 mr-2',
                                              }),
                                            null == t ? void 0 : t.label,
                                            (0, k.jsx)(m.Z, {
                                              className:
                                                'ml-2 h-4 w-4 cursor-pointer',
                                              onClick: function (t) {
                                                t.stopPropagation(), J(e);
                                              },
                                            }),
                                          ],
                                        },
                                        e,
                                      );
                                    }),
                                    R.length > P &&
                                      (0, k.jsxs)(v.C, {
                                        className: (0, w.cn)(
                                          'bg-transparent text-foreground border-foreground/1 hover:bg-transparent',
                                          A ? 'animate-bounce' : '',
                                          Z({ variant: i }),
                                        ),
                                        style: {
                                          animationDuration: ''.concat(V, 's'),
                                        },
                                        children: [
                                          '+ '.concat(R.length - P, ' more'),
                                          (0, k.jsx)(m.Z, {
                                            className:
                                              'ml-2 h-4 w-4 cursor-pointer',
                                            onClick: function (e) {
                                              var t;
                                              e.stopPropagation(),
                                                (t = R.slice(0, P)),
                                                Y(t),
                                                a(t);
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
                                    (0, k.jsx)(f.Z, {
                                      className:
                                        'h-4 mx-2 cursor-pointer text-muted-foreground',
                                      onClick: function (e) {
                                        e.stopPropagation(), $();
                                      },
                                    }),
                                    (0, k.jsx)(N.Z, {
                                      orientation: 'vertical',
                                      className: 'flex min-h-6 h-full',
                                    }),
                                    (0, k.jsx)(h.Z, {
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
                                  children: C,
                                }),
                                (0, k.jsx)(h.Z, {
                                  className:
                                    'h-4 cursor-pointer text-muted-foreground mx-2',
                                }),
                              ],
                            }),
                    },
                  ),
                ),
              }),
              (0, k.jsx)(y.yk, {
                className: 'w-auto p-0',
                align: 'start',
                onEscapeKeyDown: function () {
                  return L(!1);
                },
                children: (0, k.jsxs)(j.mY, {
                  children: [
                    (0, k.jsx)(j.sZ, {
                      placeholder: 'Search...',
                      onKeyDown: function (e) {
                        if ('Enter' === e.key) L(!0);
                        else if (
                          'Backspace' === e.key &&
                          !e.currentTarget.value
                        ) {
                          var t = s()(R);
                          t.pop(), Y(t), a(t);
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
                                  if (R.length === n.length) $();
                                  else {
                                    var e = n.map(function (e) {
                                      return e.value;
                                    });
                                    Y(e), a(e);
                                  }
                                },
                                className: 'cursor-pointer',
                                children: [
                                  (0, k.jsx)('div', {
                                    className: (0, w.cn)(
                                      'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                      R.length === n.length
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
                            n.map(function (e) {
                              var t = R.includes(e.value);
                              return (0, k.jsxs)(
                                j.di,
                                {
                                  onSelect: function () {
                                    return J(e.value);
                                  },
                                  className: 'cursor-pointer',
                                  children: [
                                    (0, k.jsx)('div', {
                                      className: (0, w.cn)(
                                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                        t
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
                        (0, k.jsx)(j.zz, {}),
                        (0, k.jsx)(j.fu, {
                          children: (0, k.jsxs)('div', {
                            className: 'flex items-center justify-between',
                            children: [
                              R.length > 0 &&
                                (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    (0, k.jsx)(j.di, {
                                      onSelect: $,
                                      className:
                                        'flex-1 justify-center cursor-pointer',
                                      children: 'Clear',
                                    }),
                                    (0, k.jsx)(N.Z, {
                                      orientation: 'vertical',
                                      className: 'flex min-h-6 h-full',
                                    }),
                                  ],
                                }),
                              (0, k.jsx)(j.di, {
                                onSelect: function () {
                                  return L(!1);
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
              V > 0 &&
                R.length > 0 &&
                (0, k.jsx)(g.Z, {
                  className: (0, w.cn)(
                    'cursor-pointer my-2 text-foreground bg-background w-3 h-3',
                    A ? '' : 'text-muted-foreground',
                  ),
                  onClick: function () {
                    return X(!A);
                  },
                }),
            ],
          });
        });
      C.displayName = 'MultiSelect';
    },
    2834: function (e, t, n) {
      n.d(t, {
        r: function () {
          return m;
        },
      });
      var a = n(97857),
        r = n.n(a),
        i = n(13769),
        s = n.n(i),
        o = n(60761),
        l = n(62435),
        c = n(27080),
        u = n(86074),
        d = ['className'],
        m = l.forwardRef(function (e, t) {
          var n = e.className,
            a = s()(e, d);
          return (0, u.jsx)(
            o.fC,
            r()(
              r()(
                {
                  className: (0, c.cn)(
                    'peer inline-flex h-3.5 w-6 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-background-checked data-[state=unchecked]:bg-text-sub-title',
                    n,
                  ),
                },
                a,
              ),
              {},
              {
                ref: t,
                children: (0, u.jsx)(o.bU, {
                  className: (0, c.cn)(
                    'pointer-events-none block size-3 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-2 data-[state=unchecked]:translate-x-0',
                  ),
                }),
              },
            ),
          );
        });
      m.displayName = o.fC.displayName;
    },
    79720: function (e, t, n) {
      n.d(t, {
        A: function () {
          return p;
        },
        g: function () {
          return h;
        },
      });
      var a = n(5574),
        r = n.n(a),
        i = n(97857),
        s = n.n(i),
        o = n(13769),
        l = n.n(o),
        c = n(62435),
        u = n(27080),
        d = n(86074),
        m = ['className'],
        f = ['value', 'onChange'],
        h = c.forwardRef(function (e, t) {
          var n = e.className,
            a = l()(e, m);
          return (0, d.jsx)(
            'textarea',
            s()(
              {
                className: (0, u.cn)(
                  'flex min-h-[80px] w-full rounded-md border border-input bg-colors-background-inverse-weak px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm overflow-hidden',
                  n,
                ),
                ref: t,
              },
              a,
            ),
          );
        });
      h.displayName = 'Textarea';
      var p = c.forwardRef(function (e, t) {
        var n = e.value,
          a = e.onChange,
          i = l()(e, f),
          o = c.useState(),
          u = r()(o, 2),
          m = u[0],
          p = u[1],
          g = c.useCallback(function (e) {
            p(e.target.value);
          }, []),
          x = c.useCallback(
            function (e) {
              null == a || a(e.target.value);
            },
            [a],
          );
        return (
          c.useEffect(
            function () {
              p(n);
            },
            [n],
          ),
          (0, d.jsx)(
            h,
            s()(s()({}, i), {}, { value: m, onBlur: x, onChange: g, ref: t }),
          )
        );
      });
    },
    70125: function (e, t, n) {
      n.d(t, {
        C: function () {
          return l;
        },
        H: function () {
          return c;
        },
      });
      var a = n(22150),
        r = n(72269),
        i = n(67421),
        s = n(16772),
        o = n(86074);
      function l(e) {
        var t = e.filedName,
          n = (0, i.$G)().t;
        return (0, o.jsx)(a.Z.Item, {
          label: n('chat.useKnowledgeGraph'),
          tooltip: n('chat.useKnowledgeGraphTip'),
          name: t,
          initialValue: !1,
          children: (0, o.jsx)(r.Z, {}),
        });
      }
      function c(e) {
        var t = e.name,
          n = (0, i.$G)().t;
        return (0, o.jsx)(s.I, {
          name: t,
          label: n('chat.useKnowledgeGraph'),
          tooltip: n('chat.useKnowledgeGraphTip'),
        });
      }
    },
    8002: function (e, t, n) {
      n.d(t, {
        C4: function () {
          return V;
        },
        E2: function () {
          return T;
        },
        MA: function () {
          return F;
        },
        ME: function () {
          return P;
        },
        PX: function () {
          return z;
        },
        Yi: function () {
          return K;
        },
      });
      var a = n(15009),
        r = n.n(a),
        i = n(99289),
        s = n.n(i),
        o = n(97857),
        l = n.n(o),
        c = n(5574),
        u = n.n(c),
        d = n(87181),
        m = n(54707),
        f = n(73955),
        h = n(78551),
        p = n(30202),
        g = n(4527),
        x = n(58580),
        v = n(45360),
        b = n(62435),
        j = n(42028),
        y = n(2938),
        N = 'testRetrieval',
        w = 'fetchKnowledgeListByPage',
        k = 'createKnowledge',
        _ = 'deleteKnowledge',
        Z = 'saveKnowledge',
        C = 'fetchKnowledgeDetail',
        S = function () {
          return (0, j.UO)().id;
        },
        V = function () {
          var e,
            t = S(),
            n = (0, b.useState)(),
            a = u()(n, 2),
            i = a[0],
            o = a[1],
            c = (0, b.useRef)(!1),
            m = (0, d.Q)(),
            p = m.filterValue,
            g = m.handleFilterSubmit,
            x = (0, b.useState)(1),
            v = u()(x, 2),
            j = v[0],
            y = v[1],
            w = (0, b.useState)(10),
            k = u()(w, 2),
            _ = k[0],
            Z = k[1],
            C = (0, b.useCallback)(function (e, t) {
              y(e), Z(t);
            }, []),
            V = (0, b.useMemo)(
              function () {
                return l()(
                  l()({}, i),
                  {},
                  {
                    kb_id: (null == i ? void 0 : i.kb_id) || t,
                    page: j,
                    size: _,
                    doc_ids: p.doc_ids,
                  },
                );
              },
              [p, t, j, _, i],
            ),
            K = (0, h.a)({
              queryKey: [N, V, j, _],
              initialData: { chunks: [], doc_aggs: [], total: 0 },
              enabled: !1,
              gcTime: 0,
              queryFn:
                ((e = s()(
                  r()().mark(function e() {
                    var t, n, a;
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), f.ZP.retrieval_test(V);
                          case 2:
                            return (
                              (n = e.sent),
                              (a = n.data),
                              e.abrupt(
                                'return',
                                null !== (t = null == a ? void 0 : a.data) &&
                                  void 0 !== t
                                  ? t
                                  : {},
                              )
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            }),
            P = K.data,
            T = K.isFetching,
            F = K.refetch;
          return (
            (0, b.useEffect)(
              function () {
                c.current && F(), (c.current = !0);
              },
              [j, _, F, p],
            ),
            {
              data: P,
              loading: T,
              setValues: o,
              refetch: F,
              onPaginationChange: C,
              page: j,
              pageSize: _,
              handleFilterSubmit: g,
              filterValue: p,
            }
          );
        },
        K = function () {
          var e,
            t = (0, y.Qe)(),
            n = t.searchString,
            a = t.handleInputChange,
            i = (0, y.ye)(),
            o = i.pagination,
            c = i.setPagination,
            u = (0, x.Z)(n, { wait: 500 }),
            m = (0, d.Q)(),
            p = m.filterValue,
            g = m.handleFilterSubmit,
            v = (0, h.a)({
              queryKey: [
                w,
                l()(
                  l()({ debouncedSearchString: u }, o),
                  {},
                  { filterValue: p },
                ),
              ],
              initialData: { kbs: [], total: 0 },
              gcTime: 0,
              queryFn:
                ((e = s()(
                  r()().mark(function e() {
                    var t, n;
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              (0, f.Fb)(
                                {
                                  keywords: u,
                                  page_size: o.pageSize,
                                  page: o.current,
                                },
                                { owner_ids: p.owner },
                              )
                            );
                          case 2:
                            return (
                              (t = e.sent),
                              (n = t.data),
                              e.abrupt('return', null == n ? void 0 : n.data)
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            }),
            j = v.data,
            N = v.isFetching,
            k = (0, b.useCallback)(
              function (e) {
                a(e);
              },
              [a],
            );
          return l()(
            l()({}, j),
            {},
            {
              searchString: n,
              handleInputChange: k,
              pagination: l()(
                l()({}, o),
                {},
                { total: null == j ? void 0 : j.total },
              ),
              setPagination: c,
              loading: N,
              filterValue: p,
              handleFilterSubmit: g,
            },
          );
        },
        P = function () {
          var e,
            t = (0, p.NL)(),
            n = (0, g.D)({
              mutationKey: [k],
              mutationFn:
                ((e = s()(
                  r()().mark(function e(n) {
                    var a, i, s;
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), f.ZP.createKb(n);
                          case 2:
                            return (
                              (a = e.sent),
                              (i = a.data),
                              0 === (s = void 0 === i ? {} : i).code &&
                                (v.ZP.success(
                                  m.Z.t(
                                    'message.'.concat(
                                      null != n && n.id
                                        ? 'modified'
                                        : 'created',
                                    ),
                                  ),
                                ),
                                t.invalidateQueries({
                                  queryKey: ['fetchKnowledgeList'],
                                })),
                              e.abrupt('return', s)
                            );
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            createKnowledge: n.mutateAsync,
          };
        },
        T = function () {
          var e,
            t = (0, p.NL)(),
            n = (0, g.D)({
              mutationKey: [_],
              mutationFn:
                ((e = s()(
                  r()().mark(function e(n) {
                    var a, i, s;
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), f.ZP.rmKb({ kb_id: n });
                          case 2:
                            return (
                              (i = e.sent),
                              0 === (s = i.data).code &&
                                (v.ZP.success(m.Z.t('message.deleted')),
                                t.invalidateQueries({ queryKey: [w] })),
                              e.abrupt(
                                'return',
                                null !== (a = null == s ? void 0 : s.data) &&
                                  void 0 !== a
                                  ? a
                                  : [],
                              )
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            deleteKnowledge: n.mutateAsync,
          };
        },
        F = function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = S(),
            a = (0, p.NL)(),
            i = (0, g.D)({
              mutationKey: [Z],
              mutationFn:
                ((e = s()(
                  r()().mark(function e(i) {
                    var s, o, c;
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              f.ZP.updateKb(
                                l()(
                                  {
                                    kb_id:
                                      null != i && i.kb_id
                                        ? null == i
                                          ? void 0
                                          : i.kb_id
                                        : n,
                                  },
                                  i,
                                ),
                              )
                            );
                          case 2:
                            return (
                              (s = e.sent),
                              (o = s.data),
                              0 === (c = void 0 === o ? {} : o).code &&
                                (v.ZP.success(m.Z.t('message.updated')),
                                t
                                  ? a.invalidateQueries({ queryKey: [w] })
                                  : a.invalidateQueries({
                                      queryKey: ['fetchKnowledgeDetail'],
                                    })),
                              e.abrupt('return', c)
                            );
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: i.data,
            loading: i.isPending,
            saveKnowledgeConfiguration: i.mutateAsync,
          };
        },
        z = function (e) {
          var t = (0, j.UO)().id,
            n = [C];
          'number' == typeof e && (n = [C, e]);
          var a,
            i = (0, h.a)({
              queryKey: n,
              initialData: {},
              gcTime: 0,
              queryFn:
                ((a = s()(
                  r()().mark(function e() {
                    var n, a, i;
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), f.ZP.get_kb_detail({ kb_id: t })
                            );
                          case 2:
                            return (
                              (a = e.sent),
                              (i = a.data),
                              e.abrupt(
                                'return',
                                null !== (n = null == i ? void 0 : i.data) &&
                                  void 0 !== n
                                  ? n
                                  : {},
                              )
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return a.apply(this, arguments);
                }),
            });
          return { data: i.data, loading: i.isFetching };
        };
    },
    14120: function (e, t, n) {
      n.d(t, {
        n: function () {
          return r;
        },
      });
      var a = n(86074);
      function r(e) {
        var t = e.title,
          n = e.description;
        return (0, a.jsxs)('div', {
          className: 'pb-5',
          children: [
            (0, a.jsx)('div', {
              className: 'text-2xl font-semibold',
              children: t,
            }),
            (0, a.jsx)('p', {
              className: 'text-text-sub-title pt-2',
              children: n,
            }),
          ],
        });
      }
    },
    14150: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var a = n(5574),
        r = n.n(a),
        i = n(8002),
        s = n(62435),
        o = n(14120),
        l = n(97857),
        c = n.n(l),
        u = n(56312),
        d = n(87536),
        m = n(1604),
        f = n(80499),
        h = n(73352),
        p = n(67421),
        g = n(86074),
        x = [
          'English',
          'Chinese',
          'Spanish',
          'French',
          'German',
          'Japanese',
          'Korean',
        ].map(function (e) {
          return { label: e, value: e };
        }),
        v = function (e) {
          e.name;
          var t = e.onChange,
            n = void 0 === t ? function () {} : t,
            a = (0, p.$G)().t;
          return (0, g.jsxs)('div', {
            children: [
              (0, g.jsx)('div', {
                className: 'pb-2',
                children: (0, g.jsx)(f.lX, {
                  tooltip: a('chat.crossLanguageTip'),
                  children: a('chat.crossLanguage'),
                }),
              }),
              (0, g.jsx)(h.N, {
                options: x,
                onValueChange: function (e) {
                  n(e);
                },
                placeholder: a('fileManager.pleaseSelect'),
                maxCount: 100,
                modalPopover: !0,
              }),
            ],
          });
        },
        b = n(51811),
        j = n(77567),
        y = n(32739),
        N = n(57636),
        w = n(79720),
        k = n(70125),
        _ = n(96486),
        Z = n(76439);
      function C(e) {
        var t = e.loading,
          n = e.refetch,
          a = e.setValues,
          i = (0, p.$G)().t,
          o = (0, s.useState)([]),
          l = r()(o, 2),
          h = l[0],
          x = l[1],
          C = m.z.object(
            c()(
              c()(
                c()(
                  {
                    question: m.z
                      .string()
                      .min(1, {
                        message: i('knowledgeDetails.testTextPlaceholder'),
                      }),
                  },
                  y.uo,
                ),
                y.YC,
              ),
              j.lk,
            ),
          ),
          S = (0, d.cI)({
            resolver: (0, u.F)(C),
            defaultValues: c()(c()(c()({}, y.oD), y.Gs), j.Nr),
          }),
          V = S.watch('question'),
          K = (0, d.qo)({ control: S.control });
        return (
          (0, s.useEffect)(
            function () {
              a(c()(c()({}, K), {}, { cross_languages: h }));
            },
            [a, K, h],
          ),
          (0, g.jsx)(
            f.l0,
            c()(
              c()({}, S),
              {},
              {
                children: (0, g.jsxs)('form', {
                  onSubmit: S.handleSubmit(function () {
                    n();
                  }),
                  className: 'space-y-8',
                  children: [
                    (0, g.jsxs)(b.Y, {
                      className: 'p-10',
                      children: [
                        (0, g.jsx)(y.FG, {
                          vectorSimilarityWeightName:
                            'keywords_similarity_weight',
                          isTooltipShown: !0,
                        }),
                        (0, g.jsx)(j.eT, {}),
                        (0, g.jsx)(k.H, { name: 'use_kg' }),
                        (0, g.jsx)(v, {
                          name: 'cross_languages',
                          onChange: function (e) {
                            x(e);
                          },
                        }),
                      ],
                    }),
                    (0, g.jsx)(f.Wi, {
                      control: S.control,
                      name: 'question',
                      render: function (e) {
                        var t = e.field;
                        return (0, g.jsxs)(f.xJ, {
                          children: [
                            (0, g.jsx)(f.lX, {
                              children: i('knowledgeDetails.testText'),
                            }),
                            (0, g.jsx)(f.NI, {
                              children: (0, g.jsx)(
                                w.g,
                                c()(
                                  c()({}, t),
                                  {},
                                  {
                                    className:
                                      'bg-colors-background-inverse-weak',
                                  },
                                ),
                              ),
                            }),
                            (0, g.jsx)(f.zG, {}),
                          ],
                        });
                      },
                    }),
                    (0, g.jsx)('div', {
                      className: 'flex justify-end',
                      children: (0, g.jsxs)(N.dw, {
                        type: 'submit',
                        disabled: !(0, _.trim)(V),
                        loading: t,
                        children: [
                          !t && (0, g.jsx)(Z.Z, {}),
                          i('knowledgeDetails.testingLabel'),
                        ],
                      }),
                    }),
                  ],
                }),
              },
            ),
          )
        );
      }
      var S = n(87926),
        V = n(39932),
        K = n(57509),
        P = n(86968),
        T = n(68929),
        F = n.n(T),
        z = [
          { field: 'similarity', label: 'Hybrid Similarity' },
          { field: 'term_similarity', label: 'Term Similarity' },
          { field: 'vector_similarity', label: 'Vector Similarity' },
        ],
        D = function (e) {
          var t = e.item,
            n = (0, P.qM)('knowledgeDetails').t;
          return (0, g.jsx)('div', {
            className: 'flex gap-3 text-xs text-text-sub-title-invert italic',
            children: z.map(function (e) {
              return (0, g.jsxs)(
                'div',
                {
                  className: 'space-x-1',
                  children: [
                    (0, g.jsx)('span', {
                      children: (100 * t[e.field]).toFixed(2),
                    }),
                    (0, g.jsx)('span', { children: n(F()(e.field)) }),
                  ],
                },
                e.field,
              );
            }),
          });
        };
      function G(e) {
        var t,
          n = e.filterValue,
          a = e.handleFilterSubmit,
          r = e.page,
          i = e.pageSize,
          o = e.onPaginationChange,
          l = e.data,
          c = (0, s.useMemo)(
            function () {
              var e, t;
              return [
                {
                  field: 'doc_ids',
                  label: 'File',
                  list:
                    null !==
                      (e =
                        null === (t = l.doc_aggs) || void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              return {
                                id: e.doc_id,
                                label: e.doc_name,
                                count: e.count,
                              };
                            })) && void 0 !== e
                      ? e
                      : [],
                },
              ];
            },
            [l.doc_aggs],
          );
        return (0, g.jsxs)('div', {
          className: 'p-4 flex-1',
          children: [
            (0, g.jsxs)('div', {
              className: 'flex justify-between pb-2.5',
              children: [
                (0, g.jsx)('span', {
                  className: 'text-text-title font-semibold text-2xl',
                  children: 'Test results',
                }),
                (0, g.jsx)(V.E, {
                  filters: c,
                  onChange: a,
                  value: n,
                  children: (0, g.jsx)(S.L, {}),
                }),
              ],
            }),
            (0, g.jsx)('section', {
              className: 'flex flex-col gap-5 overflow-auto h-[76vh] mb-5',
              children:
                null === (t = l.chunks) || void 0 === t
                  ? void 0
                  : t.map(function (e) {
                      return (0, g.jsxs)(
                        b.Y,
                        {
                          className: 'px-5 py-2.5',
                          children: [
                            (0, g.jsx)(D, { item: e }),
                            (0, g.jsxs)('p', {
                              className: '!mt-2.5',
                              children: [' ', e.content_with_weight],
                            }),
                          ],
                        },
                        e.chunk_id,
                      );
                    }),
            }),
            (0, g.jsx)(K.g, {
              total: l.total,
              onChange: o,
              current: r,
              pageSize: i,
            }),
          ],
        });
      }
      function I() {
        var e = (0, i.C4)(),
          t = e.loading,
          n = e.setValues,
          a = e.refetch,
          l = e.data,
          c = e.onPaginationChange,
          u = e.page,
          d = e.pageSize,
          m = e.handleFilterSubmit,
          f = e.filterValue,
          h = (0, s.useState)(1),
          p = r()(h, 2),
          x = p[0],
          v = p[1];
        (0, s.useCallback)(function () {
          v(2);
        }, []),
          (0, s.useCallback)(function () {
            v(1);
          }, []);
        return (0, g.jsxs)('div', {
          className: 'p-5',
          children: [
            (0, g.jsx)('section', {
              className: 'flex justify-between items-center',
              children: (0, g.jsx)(o.n, {
                title: 'Configuration',
                description:
                  '  Update your knowledge base configuration here, particularly the chunk\n                  method.',
              }),
            }),
            1 === x
              ? (0, g.jsxs)('section', {
                  className: 'flex divide-x h-full',
                  children: [
                    (0, g.jsxs)('div', {
                      className: 'p-4 flex-1',
                      children: [
                        (0, g.jsx)('div', {
                          className: 'flex justify-between pb-2.5',
                          children: (0, g.jsx)('span', {
                            className: 'text-text-title font-semibold text-2xl',
                            children: 'Test setting',
                          }),
                        }),
                        (0, g.jsx)(C, { loading: t, setValues: n, refetch: a }),
                      ],
                    }),
                    (0, g.jsx)(G, {
                      data: l,
                      page: u,
                      pageSize: d,
                      filterValue: f,
                      handleFilterSubmit: m,
                      onPaginationChange: c,
                    }),
                  ],
                })
              : (0, g.jsxs)('section', {
                  className: 'flex gap-2',
                  children: [
                    (0, g.jsxs)('div', {
                      className: 'flex-1',
                      children: [
                        (0, g.jsx)(C, { loading: t, setValues: n, refetch: a }),
                        (0, g.jsx)(G, {
                          data: l,
                          page: u,
                          pageSize: d,
                          filterValue: f,
                          handleFilterSubmit: m,
                          onPaginationChange: c,
                        }),
                      ],
                    }),
                    (0, g.jsxs)('div', {
                      className: 'flex-1',
                      children: [
                        (0, g.jsx)(C, { loading: t, setValues: n, refetch: a }),
                        (0, g.jsx)(G, {
                          data: l,
                          page: u,
                          pageSize: d,
                          filterValue: f,
                          handleFilterSubmit: m,
                          onPaginationChange: c,
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        });
      }
    },
    73955: function (e, t, n) {
      n.d(t, {
        $V: function () {
          return R;
        },
        Fb: function () {
          return q;
        },
        QL: function () {
          return D;
        },
        Qh: function () {
          return M;
        },
        Re: function () {
          return I;
        },
        sX: function () {
          return Y;
        },
        tc: function () {
          return G;
        },
      });
      var a = n(60806),
        r = n(66582),
        i = n(78158),
        s = a.Z.create_kb,
        o = a.Z.update_kb,
        l = a.Z.rm_kb,
        c = a.Z.get_kb_detail,
        u = a.Z.kb_list,
        d = a.Z.get_document_list,
        m = a.Z.document_change_status,
        f = a.Z.document_rm,
        h = a.Z.document_delete,
        p = a.Z.document_create,
        g = a.Z.document_change_parser,
        x = a.Z.document_thumbnails,
        v = a.Z.chunk_list,
        b = a.Z.create_chunk,
        j = a.Z.set_chunk,
        y = a.Z.get_chunk,
        N = a.Z.switch_chunk,
        w = a.Z.rm_chunk,
        k = a.Z.retrieval_test,
        _ = a.Z.document_rename,
        Z = a.Z.document_run,
        C = a.Z.document_upload,
        S = a.Z.web_crawl,
        V = a.Z.knowledge_graph,
        K = a.Z.document_infos,
        P = a.Z.upload_and_parse,
        T = a.Z.listTagByKnowledgeIds,
        F = {
          createKb: { url: s, method: 'post' },
          updateKb: { url: o, method: 'post' },
          rmKb: { url: l, method: 'post' },
          get_kb_detail: { url: c, method: 'get' },
          getList: { url: u, method: 'post' },
          get_document_list: { url: d, method: 'get' },
          document_change_status: { url: m, method: 'post' },
          document_rm: { url: f, method: 'post' },
          document_rename: { url: _, method: 'post' },
          document_create: { url: p, method: 'post' },
          document_run: { url: Z, method: 'post' },
          document_change_parser: { url: g, method: 'post' },
          document_thumbnails: { url: x, method: 'get' },
          document_upload: { url: C, method: 'post' },
          web_crawl: { url: S, method: 'post' },
          document_infos: { url: K, method: 'post' },
          setMeta: { url: a.Z.setMeta, method: 'post' },
          chunk_list: { url: v, method: 'post' },
          create_chunk: { url: b, method: 'post' },
          set_chunk: { url: j, method: 'post' },
          get_chunk: { url: y, method: 'get' },
          switch_chunk: { url: N, method: 'post' },
          rm_chunk: { url: w, method: 'post' },
          retrieval_test: { url: k, method: 'post' },
          knowledge_graph: { url: V, method: 'get' },
          document_delete: { url: h, method: 'delete' },
          upload_and_parse: { url: P, method: 'post' },
          listTagByKnowledgeIds: { url: T, method: 'get' },
        },
        z = (0, r.Z)(F, i.ZP),
        D = function (e) {
          return i.ZP.get(a.Z.listTag(e));
        },
        G = function (e, t) {
          return (0, i.v_)(a.Z.removeTag(e), { tags: t });
        },
        I = function (e, t) {
          var n = t.fromTag,
            r = t.toTag;
          return (0, i.v_)(a.Z.renameTag(e), { fromTag: n, toTag: r });
        };
      function R(e) {
        return i.ZP.get(a.Z.getKnowledgeGraph(e));
      }
      function Y(e) {
        return i.ZP.delete(a.Z.getKnowledgeGraph(e));
      }
      var q = function (e, t) {
          return i.ZP.post(a.Z.kb_list, { data: t || {}, params: e });
        },
        M = function (e, t) {
          return i.ZP.post(a.Z.get_document_list, { data: t || {}, params: e });
        };
      t.ZP = z;
    },
  },
]);
//# sourceMappingURL=p__dataset__testing__index.b6de173c.async.js.map
