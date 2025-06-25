'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [8312],
  {
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
    91124: function (e, t, n) {
      n.d(t, {
        z: function () {
          return g;
        },
      });
      var a = n(97857),
        r = n.n(a),
        i = n(13769),
        s = n.n(i),
        u = n(27080),
        c = n(9404),
        o = n(62435),
        l = n(57636),
        d = n(86074),
        f = ['className', 'size'],
        g = o.forwardRef(function (e, t) {
          var n = e.className,
            a = e.size,
            i = s()(e, f);
          return (0, d.jsx)(
            l.zx,
            r()(
              r()(
                {
                  ref: t,
                  variant: 'ghost',
                  size: a || 'icon',
                  className: (0, u.cn)(
                    'invisible group-hover:visible size-3.5',
                    n,
                  ),
                },
                i,
              ),
              {},
              { children: (0, d.jsx)(c.Z, {}) },
            ),
          );
        });
    },
    19252: function (e, t, n) {
      n.d(t, {
        C: function () {
          return f;
        },
      });
      var a = n(97857),
        r = n.n(a),
        i = n(13769),
        s = n.n(i),
        u = n(45139),
        c = (n(62435), n(27080)),
        o = n(86074),
        l = ['className', 'variant'],
        d = (0, u.j)(
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
        var t = e.className,
          n = e.variant,
          a = s()(e, l);
        return (0, o.jsx)(
          'div',
          r()({ className: (0, c.cn)(d({ variant: n }), t) }, a),
        );
      }
    },
    8002: function (e, t, n) {
      n.d(t, {
        C4: function () {
          return S;
        },
        E2: function () {
          return Z;
        },
        MA: function () {
          return z;
        },
        ME: function () {
          return P;
        },
        PX: function () {
          return q;
        },
        Yi: function () {
          return F;
        },
      });
      var a = n(15009),
        r = n.n(a),
        i = n(99289),
        s = n.n(i),
        u = n(97857),
        c = n.n(u),
        o = n(5574),
        l = n.n(o),
        d = n(87181),
        f = n(54707),
        g = n(73955),
        p = n(78551),
        m = n(30202),
        v = n(4527),
        h = n(58580),
        x = n(45360),
        b = n(62435),
        w = n(42028),
        k = n(2938),
        y = 'testRetrieval',
        j = 'fetchKnowledgeListByPage',
        N = 'createKnowledge',
        K = 'deleteKnowledge',
        _ = 'saveKnowledge',
        C = 'fetchKnowledgeDetail',
        D = function () {
          return (0, w.UO)().id;
        },
        S = function () {
          var e,
            t = D(),
            n = (0, b.useState)(),
            a = l()(n, 2),
            i = a[0],
            u = a[1],
            o = (0, b.useRef)(!1),
            f = (0, d.Q)(),
            m = f.filterValue,
            v = f.handleFilterSubmit,
            h = (0, b.useState)(1),
            x = l()(h, 2),
            w = x[0],
            k = x[1],
            j = (0, b.useState)(10),
            N = l()(j, 2),
            K = N[0],
            _ = N[1],
            C = (0, b.useCallback)(function (e, t) {
              k(e), _(t);
            }, []),
            S = (0, b.useMemo)(
              function () {
                return c()(
                  c()({}, i),
                  {},
                  {
                    kb_id: (null == i ? void 0 : i.kb_id) || t,
                    page: w,
                    size: K,
                    doc_ids: m.doc_ids,
                  },
                );
              },
              [m, t, w, K, i],
            ),
            F = (0, p.a)({
              queryKey: [y, S, w, K],
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
                            return (e.next = 2), g.ZP.retrieval_test(S);
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
            P = F.data,
            Z = F.isFetching,
            z = F.refetch;
          return (
            (0, b.useEffect)(
              function () {
                o.current && z(), (o.current = !0);
              },
              [w, K, z, m],
            ),
            {
              data: P,
              loading: Z,
              setValues: u,
              refetch: z,
              onPaginationChange: C,
              page: w,
              pageSize: K,
              handleFilterSubmit: v,
              filterValue: m,
            }
          );
        },
        F = function () {
          var e,
            t = (0, k.Qe)(),
            n = t.searchString,
            a = t.handleInputChange,
            i = (0, k.ye)(),
            u = i.pagination,
            o = i.setPagination,
            l = (0, h.Z)(n, { wait: 500 }),
            f = (0, d.Q)(),
            m = f.filterValue,
            v = f.handleFilterSubmit,
            x = (0, p.a)({
              queryKey: [
                j,
                c()(
                  c()({ debouncedSearchString: l }, u),
                  {},
                  { filterValue: m },
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
                              (0, g.Fb)(
                                {
                                  keywords: l,
                                  page_size: u.pageSize,
                                  page: u.current,
                                },
                                { owner_ids: m.owner },
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
            w = x.data,
            y = x.isFetching,
            N = (0, b.useCallback)(
              function (e) {
                a(e);
              },
              [a],
            );
          return c()(
            c()({}, w),
            {},
            {
              searchString: n,
              handleInputChange: N,
              pagination: c()(
                c()({}, u),
                {},
                { total: null == w ? void 0 : w.total },
              ),
              setPagination: o,
              loading: y,
              filterValue: m,
              handleFilterSubmit: v,
            },
          );
        },
        P = function () {
          var e,
            t = (0, m.NL)(),
            n = (0, v.D)({
              mutationKey: [N],
              mutationFn:
                ((e = s()(
                  r()().mark(function e(n) {
                    var a, i, s;
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), g.ZP.createKb(n);
                          case 2:
                            return (
                              (a = e.sent),
                              (i = a.data),
                              0 === (s = void 0 === i ? {} : i).code &&
                                (x.ZP.success(
                                  f.Z.t(
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
        Z = function () {
          var e,
            t = (0, m.NL)(),
            n = (0, v.D)({
              mutationKey: [K],
              mutationFn:
                ((e = s()(
                  r()().mark(function e(n) {
                    var a, i, s;
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), g.ZP.rmKb({ kb_id: n });
                          case 2:
                            return (
                              (i = e.sent),
                              0 === (s = i.data).code &&
                                (x.ZP.success(f.Z.t('message.deleted')),
                                t.invalidateQueries({ queryKey: [j] })),
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
        z = function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = D(),
            a = (0, m.NL)(),
            i = (0, v.D)({
              mutationKey: [_],
              mutationFn:
                ((e = s()(
                  r()().mark(function e(i) {
                    var s, u, o;
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g.ZP.updateKb(
                                c()(
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
                              (u = s.data),
                              0 === (o = void 0 === u ? {} : u).code &&
                                (x.ZP.success(f.Z.t('message.updated')),
                                t
                                  ? a.invalidateQueries({ queryKey: [j] })
                                  : a.invalidateQueries({
                                      queryKey: ['fetchKnowledgeDetail'],
                                    })),
                              e.abrupt('return', o)
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
        q = function (e) {
          var t = (0, w.UO)().id,
            n = [C];
          'number' == typeof e && (n = [C, e]);
          var a,
            i = (0, p.a)({
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
                              (e.next = 2), g.ZP.get_kb_detail({ kb_id: t })
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
    10799: function (e, t, n) {
      n.d(t, {
        p: function () {
          return w;
        },
        W: function () {
          return k;
        },
      });
      var a = n(91124),
        r = n(5715),
        i = n(19252),
        s = n(87030),
        u = n(704),
        c = n(28382),
        o = n(64998),
        l = n(26625),
        d = n(25910),
        f = n(8002),
        g = n(25169),
        p = n(13718),
        m = n(62435),
        v = n(67421),
        h = n(86074);
      function x(e) {
        var t = e.children,
          n = e.showDatasetRenameModal,
          a = e.dataset,
          r = (0, v.$G)().t,
          i = (0, f.E2)().deleteKnowledge,
          s = (0, m.useCallback)(
            function (e) {
              e.stopPropagation(), n(a);
            },
            [a, n],
          ),
          u = (0, m.useCallback)(
            function () {
              i(a.id);
            },
            [a.id, i],
          );
        return (0, h.jsxs)(d.h_, {
          children: [
            (0, h.jsx)(d.$F, { asChild: !0, children: t }),
            (0, h.jsxs)(d.AW, {
              children: [
                (0, h.jsxs)(d.Xi, {
                  onClick: s,
                  children: [r('common.rename'), ' ', (0, h.jsx)(g.Z, {})],
                }),
                (0, h.jsx)(d.VD, {}),
                (0, h.jsx)(l.h, {
                  onOk: u,
                  children: (0, h.jsxs)(d.Xi, {
                    className: 'text-text-delete-red',
                    onSelect: function (e) {
                      e.preventDefault();
                    },
                    onClick: function (e) {
                      e.stopPropagation();
                    },
                    children: [r('common.delete'), ' ', (0, h.jsx)(p.Z, {})],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var b = n(39259);
      function w(e) {
        var t,
          n = e.dataset,
          o = e.showDatasetRenameModal,
          l = (0, u.$)().navigateToDataset,
          d = ((t = (0, b.fS)().data),
          (0, m.useCallback)(
            function (e, n) {
              return e === t.tenant_id ? null : n;
            },
            [t.tenant_id],
          ))(n.tenant_id, n.nickname);
        return (0, h.jsx)(
          s.Zb,
          {
            className: 'w-40',
            onClick: l(n.id),
            children: (0, h.jsxs)(s.aY, {
              className: 'p-2.5 pt-2 group',
              children: [
                (0, h.jsxs)('section', {
                  className: 'flex justify-between mb-2',
                  children: [
                    (0, h.jsxs)('div', {
                      className: 'flex gap-2 items-center',
                      children: [
                        (0, h.jsxs)(r.qE, {
                          className: 'size-6 rounded-lg',
                          children: [
                            (0, h.jsx)(r.F$, { src: n.avatar }),
                            (0, h.jsx)(r.Q5, {
                              className: 'rounded-lg ',
                              children: 'CN',
                            }),
                          ],
                        }),
                        d &&
                          (0, h.jsx)(i.C, {
                            className:
                              'h-5 rounded-sm px-1 bg-background-badge text-text-badge',
                            children: d,
                          }),
                      ],
                    }),
                    (0, h.jsx)(x, {
                      showDatasetRenameModal: o,
                      dataset: n,
                      children: (0, h.jsx)(a.z, {}),
                    }),
                  ],
                }),
                (0, h.jsx)('div', {
                  className: 'flex justify-between items-end',
                  children: (0, h.jsxs)('div', {
                    className: 'w-full',
                    children: [
                      (0, h.jsx)('h3', {
                        className: 'text-lg font-semibold mb-2 line-clamp-1',
                        children: n.name,
                      }),
                      (0, h.jsxs)('p', {
                        className: 'text-xs text-text-sub-title',
                        children: [n.doc_num, ' files'],
                      }),
                      (0, h.jsx)('p', {
                        className: 'text-xs text-text-sub-title',
                        children: (0, c.p6)(n.update_time),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          },
          n.id,
        );
      }
      function k() {
        var e = (0, u.$)().navigateToDatasetList;
        return (0, h.jsx)(s.Zb, {
          className: 'bg-colors-background-inverse-weak w-40',
          onClick: e,
          children: (0, h.jsxs)(s.aY, {
            className:
              'p-2.5 pt-1 w-full h-full flex items-center justify-center gap-1.5 text-text-sub-title',
            children: ['See All ', (0, h.jsx)(o.Z, { className: 'size-4' })],
          }),
        });
      }
    },
    6368: function (e, t, n) {
      n.d(t, {
        y: function () {
          return m;
        },
      });
      var a = n(15009),
        r = n.n(a),
        i = n(97857),
        s = n.n(i),
        u = n(99289),
        c = n.n(u),
        o = n(5574),
        l = n.n(o),
        d = n(86968),
        f = n(8002),
        g = n(96486),
        p = n(62435),
        m = function () {
          var e = (0, p.useState)({}),
            t = l()(e, 2),
            n = t[0],
            a = t[1],
            i = (0, d.pG)(),
            u = i.visible,
            o = i.hideModal,
            m = i.showModal,
            v = (0, f.MA)(!0),
            h = v.saveKnowledgeConfiguration,
            x = v.loading,
            b = (0, p.useCallback)(
              (function () {
                var e = c()(
                  r()().mark(function e(t) {
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              h(
                                s()(
                                  s()(
                                    {},
                                    (0, g.omit)(n, [
                                      'id',
                                      'update_time',
                                      'nickname',
                                      'tenant_avatar',
                                      'tenant_id',
                                    ]),
                                  ),
                                  {},
                                  { kb_id: n.id, name: t },
                                ),
                              )
                            );
                          case 2:
                            0 === e.sent.code && o();
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [h, n, o],
            ),
            w = (0, p.useCallback)(
              (function () {
                var e = c()(
                  r()().mark(function e(t) {
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            a(t), m();
                          case 2:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [m],
            );
          return {
            datasetRenameLoading: x,
            initialDatasetName: null == n ? void 0 : n.name,
            onDatasetRenameOk: b,
            datasetRenameVisible: u,
            hideDatasetRenameModal: o,
            showDatasetRenameModal: w,
          };
        };
    },
  },
]);
//# sourceMappingURL=8312.96b63137.async.js.map
