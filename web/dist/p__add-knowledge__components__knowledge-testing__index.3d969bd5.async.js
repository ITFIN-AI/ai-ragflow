'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [3884],
  {
    27012: function (e, n, t) {
      t.d(n, {
        X: function () {
          return o;
        },
      });
      var r = t(22150),
        i = t(34041),
        a = t(67421),
        l = t(86074),
        s = [
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
        o = function (e) {
          var n = e.name,
            t = void 0 === n ? ['prompt_config', 'cross_languages'] : n,
            o = (0, a.$G)().t;
          return (0, l.jsx)(r.Z.Item, {
            label: o('chat.crossLanguage'),
            name: t,
            tooltip: o('chat.crossLanguageTip'),
            children: (0, l.jsx)(i.Z, {
              options: s,
              allowClear: !0,
              placeholder: o('common.languagePlaceholder'),
              mode: 'multiple',
            }),
          });
        };
    },
    18334: function (e, n, t) {
      var r = t(5089),
        i = (t(62435), t(86074));
      n.Z = function (e) {
        var n = e.children,
          t = e.link,
          a = e.preventDefault,
          l = void 0 !== a && a,
          s = e.color,
          o = void 0 === s ? 'rgb(15, 79, 170)' : s,
          c = e.documentId,
          d = e.documentName,
          u = e.prefix,
          m = void 0 === u ? 'file' : u,
          f = e.className,
          h = t,
          p = (0, r.RT)(d);
        return (
          t ||
            (h = '/document/'
              .concat(c, '?ext=')
              .concat(p, '&prefix=')
              .concat(m)),
          (0, i.jsx)('a', {
            target: '_blank',
            onClick:
              !l || (0, r.Ep)(p)
                ? void 0
                : function (e) {
                    return e.preventDefault();
                  },
            href: h,
            rel: 'noreferrer',
            style: { color: f ? '' : o, wordBreak: 'break-all' },
            className: f,
            children: n,
          })
        );
      };
    },
    77567: function (e, n, t) {
      t.d(n, {
        Nr: function () {
          return N;
        },
        eT: function () {
          return C;
        },
        lk: function () {
          return y;
        },
      });
      var r = t(97857),
        i = t.n(r),
        a = t(5574),
        l = t.n(a),
        s = t(96330),
        o = t(86968),
        c = t(38392),
        d = t(45360),
        u = t(22150),
        m = t(34041),
        f = t(71338),
        h = t(62435),
        p = t(87536),
        x = t(1604),
        v = t(15309),
        g = t(80499),
        j = t(84586),
        b = t(86074),
        w = function () {
          var e = (0, o.qM)('knowledgeDetails').t,
            n = (0, c.hl)(),
            t = d.ZP.useMessage(),
            r = l()(t, 2),
            i = r[0],
            a = r[1],
            f = (0, h.useCallback)(
              function (n) {
                n &&
                  i.open({ type: 'warning', content: e('reRankModelWaring') });
              },
              [i, e],
            );
          return (0, b.jsxs)(b.Fragment, {
            children: [
              a,
              (0, b.jsx)(u.Z.Item, {
                label: e('rerankModel'),
                name: 'rerank_id',
                tooltip: e('rerankTip'),
                children: (0, b.jsx)(m.Z, {
                  options: n[s.Vr.Rerank],
                  allowClear: !0,
                  placeholder: e('rerankPlaceholder'),
                  onChange: f,
                }),
              }),
            ],
          });
        },
        y = { top_k: x.z.number().optional() },
        N = { top_k: 1024 };
      n.ZP = function () {
        var e = (0, o.qM)('knowledgeDetails').t;
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(w, {}),
            (0, b.jsx)(u.Z.Item, {
              noStyle: !0,
              dependencies: ['rerank_id'],
              children: function (n) {
                return (
                  (0, n.getFieldValue)('rerank_id') &&
                  (0, b.jsx)(u.Z.Item, {
                    label: e('topK'),
                    name: 'top_k',
                    initialValue: 1024,
                    tooltip: e('topKTip'),
                    children: (0, b.jsx)(f.Z, { max: 2048, min: 1 }),
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
          n = (0, o.qM)('knowledgeDetails').t,
          t = (0, c.hl)()[s.Vr.Rerank];
        return (0, b.jsx)(g.Wi, {
          control: e.control,
          name: k,
          render: function (e) {
            var r = e.field;
            return (0, b.jsxs)(g.xJ, {
              children: [
                (0, b.jsx)(g.lX, {
                  tooltip: n('rerankTip'),
                  children: n('rerankModel'),
                }),
                (0, b.jsx)(g.NI, {
                  children: (0, b.jsx)(
                    j.vM,
                    i()(i()({ allowClear: !0 }, r), {}, { options: t }),
                  ),
                }),
                (0, b.jsx)(g.zG, {}),
              ],
            });
          },
        });
      }
      function C() {
        var e = (0, p.Gc)().watch,
          n = (0, o.qM)('knowledgeDetails').t,
          t = e(k);
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(_, {}),
            t &&
              (0, b.jsx)(v.W, {
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
    32739: function (e, n, t) {
      t.d(n, {
        FG: function () {
          return f;
        },
        Gs: function () {
          return d;
        },
        YC: function () {
          return m;
        },
        oD: function () {
          return c;
        },
        uo: function () {
          return u;
        },
      });
      var r = t(86968),
        i = t(22150),
        a = t(71338),
        l = t(1604),
        s = t(15309),
        o = t(86074);
      n.ZP = function (e) {
        var n = e.isTooltipShown,
          t = void 0 !== n && n,
          l = e.vectorSimilarityWeightName,
          s = void 0 === l ? 'vector_similarity_weight' : l,
          c = (0, r.qM)('knowledgeDetails').t;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.Z.Item, {
              label: c('similarityThreshold'),
              name: 'similarity_threshold',
              tooltip: t && c('similarityThresholdTip'),
              initialValue: 0.2,
              children: (0, o.jsx)(a.Z, { max: 1, step: 0.01 }),
            }),
            (0, o.jsx)(i.Z.Item, {
              label: c('vectorSimilarityWeight'),
              name: s,
              initialValue: 0.7,
              tooltip: t && c('vectorSimilarityWeightTip'),
              children: (0, o.jsx)(a.Z, { max: 1, step: 0.01 }),
            }),
          ],
        });
      };
      var c = { similarity_threshold: 0.2 },
        d = { keywords_similarity_weight: 0.7 },
        u = { similarity_threshold: l.z.number() },
        m = { keywords_similarity_weight: l.z.number() };
      function f(e) {
        var n = e.vectorSimilarityWeightName,
          t = void 0 === n ? 'vector_similarity_weight' : n,
          i = e.isTooltipShown,
          a = (0, r.qM)('knowledgeDetails').t;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(s.W, {
              name: 'similarity_threshold',
              label: a('similarityThreshold'),
              max: 1,
              step: 0.01,
              tooltip: i && a('similarityThresholdTip'),
            }),
            (0, o.jsx)(s.W, {
              name: t,
              label: a('vectorSimilarityWeight'),
              max: 1,
              step: 0.01,
              tooltip: i && a('vectorSimilarityWeightTip'),
            }),
          ],
        });
      }
    },
    15309: function (e, n, t) {
      t.d(n, {
        W: function () {
          return u;
        },
      });
      var r = t(97857),
        i = t.n(r),
        a = t(27080),
        l = t(87536),
        s = t(4533),
        o = t(80499),
        c = t(27591),
        d = t(86074);
      function u(e) {
        var n = e.max,
          t = e.min,
          r = e.step,
          u = e.label,
          m = e.name,
          f = e.tooltip,
          h = e.defaultValue,
          p = e.className,
          x = (0, l.Gc)();
        return (0, d.jsx)(o.Wi, {
          control: x.control,
          name: m,
          defaultValue: h || 0,
          render: function (e) {
            var l = e.field;
            return (0, d.jsxs)(o.xJ, {
              className: ' items-center space-y-0 ',
              children: [
                (0, d.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, d.jsx)(o.lX, {
                      tooltip: f,
                      className:
                        'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                      children: u,
                    }),
                    (0, d.jsxs)('div', {
                      className: (0, a.cn)(
                        'flex items-center gap-14 justify-between',
                        'w-3/4',
                        p,
                      ),
                      children: [
                        (0, d.jsx)(o.NI, {
                          children: (0, d.jsx)(
                            s.b,
                            i()(i()({}, l), {}, { max: n, min: t, step: r }),
                          ),
                        }),
                        (0, d.jsx)(o.NI, {
                          children: (0, d.jsx)(
                            c.II,
                            i()(
                              i()(
                                {
                                  type: 'number',
                                  className: 'h-7 w-20',
                                  max: n,
                                  min: t,
                                  step: r,
                                },
                                l,
                              ),
                              {},
                              {
                                onChange: function (e) {
                                  var n = e.target.value;
                                  l.onChange('' === n ? 0 : Number(n));
                                },
                              },
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, d.jsx)(o.zG, {}),
              ],
            });
          },
        });
      }
    },
    16772: function (e, n, t) {
      t.d(n, {
        I: function () {
          return o;
        },
      });
      var r = t(80499),
        i = t(2834),
        a = t(27080),
        l = t(87536),
        s = t(86074);
      function o(e) {
        var n = e.label,
          t = e.name,
          o = e.vertical,
          c = void 0 === o || o,
          d = e.tooltip,
          u = (0, l.Gc)();
        return (0, s.jsx)(r.Wi, {
          control: u.control,
          name: t,
          render: function (e) {
            var t = e.field;
            return (0, s.jsxs)(r.xJ, {
              className: (0, a.cn)('flex', {
                'gap-2': c,
                'flex-col': c,
                'justify-between': !c,
              }),
              children: [
                (0, s.jsx)(r.lX, { tooltip: d, children: n }),
                (0, s.jsx)(r.NI, {
                  children: (0, s.jsx)(i.r, {
                    checked: t.value,
                    onCheckedChange: t.onChange,
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
    4533: function (e, n, t) {
      t.d(n, {
        b: function () {
          return h;
        },
      });
      var r = t(97857),
        i = t.n(r),
        a = t(13769),
        l = t.n(a),
        s = t(68482),
        o = t(62435),
        c = t(27080),
        d = t(86074),
        u = ['className', 'label', 'labelPosition'],
        m = ['value', 'onChange'],
        f = o.forwardRef(function (e, n) {
          var t = e.className,
            r = e.label,
            a = e.labelPosition,
            m = void 0 === a ? 'top' : a,
            f = l()(e, u),
            h = Array.isArray(f.value) ? f.value : [f.min, f.max];
          return (0, d.jsxs)(
            s.fC,
            i()(
              i()(
                {
                  ref: n,
                  className: (0, c.cn)(
                    'relative flex w-full touch-none select-none items-center',
                    t,
                  ),
                },
                f,
              ),
              {},
              {
                children: [
                  (0, d.jsx)(s.fQ, {
                    className:
                      'relative h-2 w-full grow overflow-hidden rounded-full bg-secondary',
                    children: (0, d.jsx)(s.e6, {
                      className: 'absolute h-full bg-background-checked',
                    }),
                  }),
                  h.map(function (e, n) {
                    return (0, d.jsx)(
                      o.Fragment,
                      {
                        children: (0, d.jsx)(s.bU, {
                          className:
                            'relative block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
                          children:
                            r &&
                            (0, d.jsx)('span', {
                              className: (0, c.cn)(
                                'absolute flex w-full justify-center',
                                'top' === m && '-top-7',
                                'bottom' === m && 'top-4',
                              ),
                              children: r(e),
                            }),
                        }),
                      },
                      n,
                    );
                  }),
                ],
              },
            ),
          );
        });
      f.displayName = 'DualRangeSlider';
      var h = o.forwardRef(function (e, n) {
        var t = e.value,
          r = e.onChange,
          a = l()(e, m);
        return (0, d.jsx)(
          f,
          i()(
            {
              ref: n,
              value: [t],
              onValueChange: function (e) {
                r(e[0]);
              },
            },
            a,
          ),
        );
      });
    },
    84586: function (e, n, t) {
      t.d(n, {
        Bw: function () {
          return S;
        },
        DI: function () {
          return _;
        },
        Ph: function () {
          return k;
        },
        Ql: function () {
          return R;
        },
        i4: function () {
          return Z;
        },
        ki: function () {
          return C;
        },
        n5: function () {
          return D;
        },
        vM: function () {
          return G;
        },
      });
      var r = t(5574),
        i = t.n(r),
        a = t(97857),
        l = t.n(a),
        s = t(13769),
        o = t.n(s),
        c = t(12291),
        d = t(41352),
        u = t(8971),
        m = t(84979),
        f = t(13742),
        h = t(62435),
        p = t(27080),
        x = t(86074),
        v = ['className', 'children', 'value', 'onReset', 'allowClear'],
        g = ['className'],
        j = ['className'],
        b = ['className', 'children', 'position'],
        w = ['className'],
        y = ['className', 'children'],
        N = ['className'],
        k = c.fC,
        _ = c.ZA,
        C = c.B4,
        Z = h.forwardRef(function (e, n) {
          var t = e.className,
            r = e.children,
            i = e.value,
            a = e.onReset,
            s = e.allowClear,
            m = o()(e, v);
          return (0, x.jsxs)(
            c.xz,
            l()(
              l()(
                {
                  ref: n,
                  className: (0, p.cn)(
                    'flex h-8 w-full items-center justify-between rounded-md border border-input bg-colors-background-inverse-weak px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
                    t,
                  ),
                },
                m,
              ),
              {},
              {
                children: [
                  r,
                  (0, x.jsx)(c.JO, {
                    asChild: !0,
                    onPointerDown: function (e) {
                      e.stopPropagation();
                    },
                    children:
                      i && s
                        ? (0, x.jsx)(d.Z, {
                            className: 'h-4 w-4 opacity-50 cursor-pointer',
                            onClick: a,
                          })
                        : (0, x.jsx)(u.Z, { className: 'h-4 w-4 opacity-50' }),
                  }),
                ],
              },
            ),
          );
        });
      Z.displayName = c.xz.displayName;
      var T = h.forwardRef(function (e, n) {
        var t = e.className,
          r = o()(e, g);
        return (0, x.jsx)(
          c.u_,
          l()(
            l()(
              {
                ref: n,
                className: (0, p.cn)(
                  'flex cursor-default items-center justify-center py-1',
                  t,
                ),
              },
              r,
            ),
            {},
            { children: (0, x.jsx)(m.Z, { className: 'h-4 w-4' }) },
          ),
        );
      });
      T.displayName = c.u_.displayName;
      var I = h.forwardRef(function (e, n) {
        var t = e.className,
          r = o()(e, j);
        return (0, x.jsx)(
          c.$G,
          l()(
            l()(
              {
                ref: n,
                className: (0, p.cn)(
                  'flex cursor-default items-center justify-center py-1',
                  t,
                ),
              },
              r,
            ),
            {},
            { children: (0, x.jsx)(u.Z, { className: 'h-4 w-4' }) },
          ),
        );
      });
      I.displayName = c.$G.displayName;
      var S = h.forwardRef(function (e, n) {
        var t = e.className,
          r = e.children,
          i = e.position,
          a = void 0 === i ? 'popper' : i,
          s = o()(e, b);
        return (0, x.jsx)(c.h_, {
          children: (0, x.jsxs)(
            c.VY,
            l()(
              l()(
                {
                  ref: n,
                  className: (0, p.cn)(
                    'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    'popper' === a &&
                      'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
                    t,
                  ),
                  position: a,
                },
                s,
              ),
              {},
              {
                children: [
                  (0, x.jsx)(T, {}),
                  (0, x.jsx)(c.l_, {
                    className: (0, p.cn)(
                      'p-1',
                      'popper' === a &&
                        'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
                    ),
                    children: r,
                  }),
                  (0, x.jsx)(I, {}),
                ],
              },
            ),
          ),
        });
      });
      S.displayName = c.VY.displayName;
      var D = h.forwardRef(function (e, n) {
        var t = e.className,
          r = o()(e, w);
        return (0, x.jsx)(
          c.__,
          l()(
            {
              ref: n,
              className: (0, p.cn)('py-1.5 pl-8 pr-2 text-sm font-semibold', t),
            },
            r,
          ),
        );
      });
      D.displayName = c.__.displayName;
      var R = h.forwardRef(function (e, n) {
        var t = e.className,
          r = e.children,
          i = o()(e, y);
        return (0, x.jsxs)(
          c.ck,
          l()(
            l()(
              {
                ref: n,
                className: (0, p.cn)(
                  'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  t,
                ),
              },
              i,
            ),
            {},
            {
              children: [
                (0, x.jsx)('span', {
                  className:
                    'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
                  children: (0, x.jsx)(c.wU, {
                    children: (0, x.jsx)(f.Z, { className: 'h-4 w-4' }),
                  }),
                }),
                (0, x.jsx)(c.eT, { children: r }),
              ],
            },
          ),
        );
      });
      (R.displayName = c.ck.displayName),
        (h.forwardRef(function (e, n) {
          var t = e.className,
            r = o()(e, N);
          return (0, x.jsx)(
            c.Z0,
            l()(
              { ref: n, className: (0, p.cn)('-mx-1 my-1 h-px bg-muted', t) },
              r,
            ),
          );
        }).displayName = c.Z0.displayName);
      var G = (0, h.forwardRef)(function (e, n) {
        var t = e.value,
          r = e.onChange,
          a = e.FormControlComponent,
          s = e.options,
          o = void 0 === s ? [] : s,
          c = e.allowClear,
          d = e.placeholder,
          u = e.contentProps,
          m = void 0 === u ? {} : u,
          f = e.triggerClassName,
          p = e.onlyShowSelectedIcon,
          v = void 0 !== p && p,
          g = h.useState(+new Date()),
          j = i()(g, 2),
          b = j[0],
          w = j[1],
          y = h.useState(t),
          N = i()(y, 2),
          T = N[0],
          I = N[1],
          G =
            a ||
            function (e) {
              var n = e.children;
              return (0, x.jsx)('div', { children: n });
            },
          W = (0, h.useCallback)(
            function (e) {
              I(e), null == r || r(e);
            },
            [r],
          ),
          M = (0, h.useCallback)(
            function () {
              W(void 0), w(+new Date());
            },
            [W],
          );
        (0, h.useEffect)(
          function () {
            I(function (e) {
              return e !== t ? t : e;
            });
          },
          [t],
        );
        var P = h.useMemo(
          function () {
            var e = o;
            o.some(function (e) {
              return !('value' in e);
            }) &&
              (e = o.reduce(function (e, n) {
                var t;
                return e.concat(
                  null !== (t = null == n ? void 0 : n.options) && void 0 !== t
                    ? t
                    : [],
                );
              }, []));
            var n = e.find(function (e) {
              return e.value === T;
            });
            return v
              ? null == n
                ? void 0
                : n.icon
              : null == n
                ? void 0
                : n.label;
          },
          [v, o, T],
        );
        return (0, x.jsxs)(
          k,
          {
            onValueChange: W,
            value: T,
            children: [
              (0, x.jsx)(G, {
                children: (0, x.jsx)(Z, {
                  value: T,
                  onReset: M,
                  allowClear: c,
                  ref: n,
                  className: f,
                  children: (0, x.jsx)(C, { placeholder: d, children: P }),
                }),
              }),
              (0, x.jsx)(
                S,
                l()(
                  l()({}, m),
                  {},
                  {
                    children: o.map(function (e, n) {
                      return 'value' in e
                        ? (0, x.jsx)(
                            R,
                            {
                              value: e.value,
                              disabled: e.disabled,
                              children: (0, x.jsxs)('div', {
                                className: 'flex items-center gap-1',
                                children: [e.icon, e.label],
                              }),
                            },
                            e.value,
                          )
                        : (0, x.jsxs)(
                            _,
                            {
                              children: [
                                (0, x.jsx)(D, {
                                  className: 'pl-2',
                                  children: e.label,
                                }),
                                e.options.map(function (e) {
                                  return (0, x.jsx)(
                                    R,
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
          b,
        );
      });
      G.displayName = 'RAGFlowSelect';
    },
    2834: function (e, n, t) {
      t.d(n, {
        r: function () {
          return m;
        },
      });
      var r = t(97857),
        i = t.n(r),
        a = t(13769),
        l = t.n(a),
        s = t(60761),
        o = t(62435),
        c = t(27080),
        d = t(86074),
        u = ['className'],
        m = o.forwardRef(function (e, n) {
          var t = e.className,
            r = l()(e, u);
          return (0, d.jsx)(
            s.fC,
            i()(
              i()(
                {
                  className: (0, c.cn)(
                    'peer inline-flex h-3.5 w-6 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-background-checked data-[state=unchecked]:bg-text-sub-title',
                    t,
                  ),
                },
                r,
              ),
              {},
              {
                ref: n,
                children: (0, d.jsx)(s.bU, {
                  className: (0, c.cn)(
                    'pointer-events-none block size-3 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-2 data-[state=unchecked]:translate-x-0',
                  ),
                }),
              },
            ),
          );
        });
      m.displayName = s.fC.displayName;
    },
    70125: function (e, n, t) {
      t.d(n, {
        C: function () {
          return o;
        },
        H: function () {
          return c;
        },
      });
      var r = t(22150),
        i = t(72269),
        a = t(67421),
        l = t(16772),
        s = t(86074);
      function o(e) {
        var n = e.filedName,
          t = (0, a.$G)().t;
        return (0, s.jsx)(r.Z.Item, {
          label: t('chat.useKnowledgeGraph'),
          tooltip: t('chat.useKnowledgeGraphTip'),
          name: n,
          initialValue: !1,
          children: (0, s.jsx)(i.Z, {}),
        });
      }
      function c(e) {
        var n = e.name,
          t = (0, a.$G)().t;
        return (0, s.jsx)(l.I, {
          name: n,
          label: t('chat.useKnowledgeGraph'),
          tooltip: t('chat.useKnowledgeGraphTip'),
        });
      }
    },
    34345: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return ee;
          },
        });
      var r = t(15009),
        i = t.n(r),
        a = t(97857),
        l = t.n(a),
        s = t(99289),
        o = t.n(s),
        c = t(5574),
        d = t.n(c),
        u = t(10541),
        m = t(22150),
        f = t(86250),
        h = t(77567),
        p = t(32739),
        x = t(86968),
        v = t(96074),
        g = t(4393),
        j = t(79531),
        b = t(15867),
        w = t(38332),
        y = t(62435),
        N = t(86074);
      function k() {
        var e = (0, y.useRef)(null),
          n = (0, y.useRef)(),
          t = (0, u.aD)().labels,
          r = (0, y.useMemo)(
            function () {
              return t
                ? Object.keys(t).reduce(function (e, n) {
                    return e.push({ name: n, text: n, value: t[n] }), e;
                  }, [])
                : [];
            },
            [t],
          ),
          i = (0, y.useCallback)(
            function () {
              e.current &&
                r.length &&
                ((n.current = new w.kL({ container: e.current })),
                n.current.options({
                  type: 'wordCloud',
                  autoFit: !0,
                  layout: { fontSize: [6, 15] },
                  data: { type: 'inline', value: r },
                  encode: { color: 'text' },
                  legend: !1,
                  tooltip: { title: 'name', items: ['value'] },
                }),
                n.current.render());
            },
            [r],
          );
        return (
          (0, y.useEffect)(
            function () {
              return (
                i(),
                function () {
                  var e;
                  null === (e = n.current) || void 0 === e || e.destroy();
                }
              );
            },
            [i],
          ),
          (0, N.jsx)('div', { ref: e, className: 'w-full h-[13vh]' })
        );
      }
      var _ = t(27012),
        C = t(70125),
        Z = 'testingControlWrapper___p4CKW',
        T = function (e) {
          var n = e.form,
            t = e.handleTesting,
            r = e.selectedDocumentIds,
            i = m.Z.useWatch('question', { form: n, preserve: !0 }),
            a = (0, u.$G)(),
            l = (0, x.qM)('knowledgeDetails').t,
            s = !i || ('string' == typeof i && '' === i.trim());
          return (0, N.jsxs)('section', {
            className: Z,
            children: [
              (0, N.jsx)('div', {
                children: (0, N.jsx)('b', { children: l('testing') }),
              }),
              (0, N.jsx)('p', { children: l('testingDescription') }),
              (0, N.jsx)(v.Z, {}),
              (0, N.jsx)('section', {
                children: (0, N.jsxs)(m.Z, {
                  name: 'testing',
                  layout: 'vertical',
                  form: n,
                  children: [
                    (0, N.jsx)(p.ZP, { isTooltipShown: !0 }),
                    (0, N.jsx)(h.ZP, {}),
                    (0, N.jsx)(C.C, { filedName: ['use_kg'] }),
                    (0, N.jsx)(_.X, { name: 'cross_languages' }),
                    (0, N.jsxs)(g.Z, {
                      size: 'small',
                      title: l('testText'),
                      children: [
                        (0, N.jsx)(m.Z.Item, {
                          name: 'question',
                          rules: [
                            { required: !0, message: l('testTextPlaceholder') },
                          ],
                          children: (0, N.jsx)(j.Z.TextArea, {
                            autoSize: { minRows: 8 },
                          }),
                        }),
                        (0, N.jsx)(f.Z, {
                          justify: 'end',
                          children: (0, N.jsx)(b.ZP, {
                            type: 'primary',
                            size: 'small',
                            onClick: function () {
                              t(r);
                            },
                            disabled: s,
                            loading: a,
                            children: l('testingLabel'),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, N.jsx)(k, {}),
            ],
          });
        },
        I = t(74815),
        S = t(42075),
        D = t(47221),
        R = t(98163),
        G = t(32983),
        W = t(11980),
        M = t(68929),
        P = t.n(M),
        z = t(18334),
        F = t(99611),
        q = t(83062),
        V = t(43106),
        A = function (e) {
          var n = e.setSelectedDocumentIds,
            t = e.handleTesting,
            r = (0, u.wq)().documents,
            i = (0, x.qM)('fileManager').t,
            a = [
              {
                title: 'Name',
                dataIndex: 'doc_name',
                key: 'doc_name',
                render: function (e) {
                  return (0, N.jsx)('p', { children: e });
                },
              },
              { title: 'Hits', dataIndex: 'count', key: 'count', width: 80 },
              {
                title: 'View',
                key: 'view',
                width: 50,
                render: function (e, n) {
                  var t = n.doc_id,
                    r = n.doc_name;
                  return (0, N.jsx)(z.Z, {
                    documentName: r,
                    documentId: t,
                    prefix: 'document',
                    children: (0, N.jsx)(q.Z, {
                      title: i('preview'),
                      children: (0, N.jsx)(b.ZP, {
                        type: 'text',
                        children: (0, N.jsx)(F.Z, { size: 20 }),
                      }),
                    }),
                  });
                },
              },
            ],
            l = {
              onChange: function (e) {
                n(e), t(e);
              },
              getCheckboxProps: function (e) {
                return {
                  disabled: 'Disabled User' === e.doc_name,
                  name: e.doc_name,
                };
              },
            };
          return (0, N.jsx)(V.Z, {
            columns: a,
            dataSource: r,
            showHeader: !1,
            rowSelection: l,
            rowKey: 'doc_id',
          });
        },
        K = t(2938),
        O = t(60806),
        E = t(71250),
        L = 'testingResultWrapper____vEJI',
        X = 'selectFilesCollapse___WeBtG',
        J = 'selectFilesTitle___nknYG',
        $ = 'similarityCircle___aWv8z',
        U = 'similarityText___sA5SL',
        Y = [
          { field: 'similarity', label: 'Hybrid Similarity' },
          { field: 'term_similarity', label: 'Term Similarity' },
          { field: 'vector_similarity', label: 'Vector Similarity' },
        ],
        B = function (e) {
          var n = e.item,
            t = (0, x.qM)('knowledgeDetails').t;
          return (0, N.jsx)(f.Z, {
            gap: 10,
            children: Y.map(function (e) {
              return (0, N.jsxs)(
                S.Z,
                {
                  children: [
                    (0, N.jsx)('span', {
                      className: $,
                      children: (100 * n[e.field]).toFixed(2),
                    }),
                    (0, N.jsx)('span', {
                      className: U,
                      children: t(P()(e.field)),
                    }),
                  ],
                },
                e.field,
              );
            }),
          });
        },
        H = function (e) {
          var n,
            t,
            r = e.handleTesting,
            i = e.selectedDocumentIds,
            a = e.setSelectedDocumentIds,
            s = (0, u.aD)(),
            o = (s.documents, s.chunks),
            c = s.total,
            d = (0, u.wq)(),
            m = d.documents,
            h = (d.total, (0, x.qM)('knowledgeDetails').t),
            p = (0, K.ye)(),
            v = p.pagination,
            j = p.setPagination,
            b = (0, u.Q7)(),
            w =
              ((0, u.lx)(),
              (0, y.useCallback)(
                function (e) {
                  j({ page: 1 }), r(e);
                },
                [j, r],
              ));
          return (0, N.jsxs)('section', {
            className: L,
            children: [
              (0, N.jsx)(D.Z, {
                expandIcon: function () {
                  return (0, N.jsx)(I.r, {});
                },
                className: X,
                items: [
                  {
                    key: '1',
                    label: (0, N.jsx)(f.Z, {
                      justify: 'space-between',
                      align: 'center',
                      className: J,
                      children: (0, N.jsxs)(S.Z, {
                        children: [
                          (0, N.jsxs)('span', {
                            children: [
                              null !== (n = null == i ? void 0 : i.length) &&
                              void 0 !== n
                                ? n
                                : 0,
                              '/',
                              null !== (t = null == m ? void 0 : m.length) &&
                              void 0 !== t
                                ? t
                                : 0,
                            ],
                          }),
                          h('filesSelected'),
                        ],
                      }),
                    }),
                    children: (0, N.jsx)('div', {
                      children: (0, N.jsx)(A, {
                        setSelectedDocumentIds: a,
                        handleTesting: w,
                      }),
                    }),
                  },
                ],
              }),
              (0, N.jsx)(f.Z, {
                gap: 'large',
                vertical: !0,
                flex: 1,
                className: X,
                children:
                  b && o.length > 0
                    ? null == o
                      ? void 0
                      : o.map(function (e) {
                          return (0, N.jsxs)(
                            g.Z,
                            {
                              title: (0, N.jsx)(B, { item: e }),
                              children: [
                                (0, N.jsx)('div', {
                                  className: 'flex justify-center',
                                  children:
                                    (0, E.od)(e.doc_type_kwd) &&
                                    (0, N.jsx)(R.Z, {
                                      id: e.image_id,
                                      className:
                                        'object-contain max-h-[30vh] w-full text-center',
                                      src: ''
                                        .concat(O.N, '/document/image/')
                                        .concat(e.image_id),
                                    }),
                                }),
                                (0, N.jsx)('div', {
                                  className: 'pt-4',
                                  children: e.content_with_weight,
                                }),
                              ],
                            },
                            e.chunk_id,
                          );
                        })
                    : b && 0 === o.length
                      ? (0, N.jsx)(G.Z, {})
                      : null,
              }),
              (0, N.jsx)(
                W.Z,
                l()(
                  l()({}, v),
                  {},
                  {
                    size: 'small',
                    total: c,
                    onChange: function (e, n) {
                      var t;
                      null === (t = v.onChange) ||
                        void 0 === t ||
                        t.call(v, e, n),
                        r(i);
                    },
                  },
                ),
              ),
            ],
          });
        },
        Q = 'testingWrapper___w_vXb',
        ee = function () {
          var e = m.Z.useForm(),
            n = d()(e, 1)[0],
            t = (0, u.aX)().testChunk,
            r = (0, u.dT)().testChunkAll,
            a = (0, y.useState)([]),
            s = d()(a, 2),
            c = s[0],
            h = s[1],
            p = (function () {
              var e = o()(
                i()().mark(function e() {
                  var a,
                    s,
                    o = arguments;
                  return i()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = o.length > 0 && void 0 !== o[0] ? o[0] : []),
                            (e.next = 3),
                            n.validateFields()
                          );
                        case 3:
                          (s = e.sent),
                            t(
                              l()(
                                l()({}, s),
                                {},
                                {
                                  doc_ids: Array.isArray(a) ? a : [],
                                  vector_similarity_weight:
                                    1 - s.vector_similarity_weight,
                                },
                              ),
                            ),
                            r(
                              l()(
                                l()({}, s),
                                {},
                                {
                                  doc_ids: [],
                                  vector_similarity_weight:
                                    1 - s.vector_similarity_weight,
                                },
                              ),
                            );
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, N.jsxs)(f.Z, {
            className: Q,
            gap: 16,
            children: [
              (0, N.jsx)(T, {
                form: n,
                handleTesting: p,
                selectedDocumentIds: c,
              }),
              (0, N.jsx)(H, {
                handleTesting: p,
                selectedDocumentIds: c,
                setSelectedDocumentIds: h,
              }),
            ],
          });
        };
    },
    5089: function (e, n, t) {
      t.d(n, {
        Ep: function () {
          return u;
        },
        Or: function () {
          return m;
        },
        RT: function () {
          return c;
        },
        YC: function () {
          return d;
        },
        q1: function () {
          return o;
        },
      });
      var r = t(19632),
        i = t.n(r),
        a = t(40169),
        l = t(96486),
        s = t(57632),
        o = function (e, n) {
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
                    id: (0, s.Z)(),
                    comment: { text: '', emoji: '' },
                    content: {
                      text:
                        (0, l.get)(e, 'content_with_weight') ||
                        (0, l.get)(e, 'content', ''),
                    },
                    position: { boundingRect: r, rects: [r], pageNumber: t[0] },
                  };
                })
            : [];
        },
        c = function (e) {
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
          return a.ru.includes(e);
        },
        m = function (e) {
          return [].concat(i()(a.rU), ['svg']).some(function (n) {
            return n === e;
          });
        };
    },
    74815: function (e, n, t) {
      t.d(n, {
        r: function () {
          return c;
        },
      });
      var r = t(62435),
        i = Object.defineProperty,
        a = Object.getOwnPropertySymbols,
        l = Object.prototype.hasOwnProperty,
        s = Object.prototype.propertyIsEnumerable,
        o = (e, n, t) =>
          n in e
            ? i(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[n] = t);
      const c = (e) =>
        r.createElement(
          'svg',
          ((e, n) => {
            for (var t in n || (n = {})) l.call(n, t) && o(e, t, n[t]);
            if (a) for (var t of a(n)) s.call(n, t) && o(e, t, n[t]);
            return e;
          })(
            {
              width: 20,
              height: 20,
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            e,
          ),
          r.createElement('path', {
            d: 'M6.667 10h6.666M6.5 17.5h7c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092c.273-.535.273-1.235.273-2.635v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C15.6 2.5 14.9 2.5 13.5 2.5h-7c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2.5 4.4 2.5 5.1 2.5 6.5v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.4 17.5 5.1 17.5 6.5 17.5Z',
            stroke: '#7F56D9',
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        );
    },
  },
]);
//# sourceMappingURL=p__add-knowledge__components__knowledge-testing__index.3d969bd5.async.js.map
