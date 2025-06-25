'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [7530],
  {
    87181: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return c;
        },
      });
      var a = n(5574),
        r = n.n(a),
        s = n(62435);
      function c() {
        var e = (0, s.useState)({}),
          t = r()(e, 2),
          n = t[0],
          a = t[1],
          c = (0, s.useCallback)(function (e) {
            a(e);
          }, []);
        return { filterValue: n, setFilterValue: a, handleFilterSubmit: c };
      }
    },
    36646: function (e, t, n) {
      n.d(t, {
        m: function () {
          return c;
        },
      });
      var a = n(53219),
        r = n(57636),
        s = n(86074);
      function c(e) {
        var t = e.back,
          n = e.title,
          c = e.children;
        return (0, s.jsxs)('header', {
          className: 'flex justify-between items-center border-b pr-9',
          children: [
            (0, s.jsxs)('div', {
              className: 'flex items-center ',
              children: [
                (0, s.jsx)('div', {
                  className: 'flex items-center border-r p-1.5',
                  children: (0, s.jsx)(r.zx, {
                    variant: 'ghost',
                    size: 'icon',
                    onClick: t,
                    children: (0, s.jsx)(a.Z, { className: 'w-5 h-5' }),
                  }),
                }),
                (0, s.jsx)('div', {
                  className: 'p-4',
                  children: (0, s.jsx)('h1', {
                    className: 'text-2xl font-semibold tracking-tight',
                    children: n,
                  }),
                }),
              ],
            }),
            c,
          ],
        });
      }
    },
    86709: function (e, t, n) {
      n.d(t, {
        t: function () {
          return m;
        },
      });
      var a = n(97857),
        r = n.n(a),
        s = n(13769),
        c = n.n(s),
        o = n(27080),
        i = n(96486),
        u = n(62435),
        l = n(5715),
        d = n(86074),
        f = ['name', 'avatar', 'isPerson', 'className'],
        g = [
          { from: '#4F6DEE', to: '#67BDF9' },
          { from: '#38A04D', to: '#93DCA2' },
          { from: '#EDB395', to: '#C35F2B' },
          { from: '#633897', to: '#CBA1FF' },
        ],
        m = (0, u.forwardRef)(function (e, t) {
          var n = e.name,
            a = e.avatar,
            s = e.isPerson,
            u = void 0 !== s && s,
            m = e.className,
            h = c()(e, f),
            p = (0, i.random)(0, 3);
          console.log('🚀 ~ index:', p);
          var v = g[p];
          return (0, d.jsxs)(
            l.qE,
            r()(
              r()({ ref: t }, h),
              {},
              {
                className: (0, o.cn)(m, { 'rounded-md': !u }),
                children: [
                  (0, d.jsx)(l.F$, { src: a }),
                  (0, d.jsx)(l.Q5, {
                    className: (0, o.cn)(
                      'bg-gradient-to-b from-['
                        .concat(v.from, '] to-[')
                        .concat(v.to, ']'),
                      { 'rounded-md': !u },
                    ),
                    children: null == n ? void 0 : n.slice(0, 1),
                  }),
                ],
              },
            ),
          );
        });
      m.displayName = 'RAGFlowAvatar';
    },
    5715: function (e, t, n) {
      n.d(t, {
        F$: function () {
          return h;
        },
        Q5: function () {
          return p;
        },
        qE: function () {
          return m;
        },
      });
      var a = n(97857),
        r = n.n(a),
        s = n(13769),
        c = n.n(s),
        o = n(10952),
        i = n(62435),
        u = n(27080),
        l = n(86074),
        d = ['className'],
        f = ['className'],
        g = ['className'],
        m = i.forwardRef(function (e, t) {
          var n = e.className,
            a = c()(e, d);
          return (0, l.jsx)(
            o.fC,
            r()(
              {
                ref: t,
                className: (0, u.cn)(
                  'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
                  n,
                ),
              },
              a,
            ),
          );
        });
      m.displayName = o.fC.displayName;
      var h = i.forwardRef(function (e, t) {
        var n = e.className,
          a = c()(e, f);
        return (0, l.jsx)(
          o.Ee,
          r()(
            { ref: t, className: (0, u.cn)('aspect-square h-full w-full', n) },
            a,
          ),
        );
      });
      h.displayName = o.Ee.displayName;
      var p = i.forwardRef(function (e, t) {
        var n = e.className,
          a = c()(e, g);
        return (0, l.jsx)(
          o.NY,
          r()(
            {
              ref: t,
              className: (0, u.cn)(
                'flex h-full w-full items-center justify-center rounded-full bg-muted',
                n,
              ),
            },
            a,
          ),
        );
      });
      p.displayName = o.NY.displayName;
    },
    704: function (e, t, n) {
      n.d(t, {
        $: function () {
          return d;
        },
        t: function () {
          return l;
        },
      });
      var a = n(9783),
        r = n.n(a),
        s = n(5574),
        c = n.n(s),
        o = n(23454),
        i = n(62435),
        u = n(42028),
        l = (function (e) {
          return (e.KnowledgeId = 'knowledgeId'), e;
        })({}),
        d = function () {
          var e = (0, u.s0)(),
            t = (0, u.lr)(),
            n = c()(t, 1)[0],
            a = (0, u.UO)().id,
            s = (0, i.useCallback)(
              function () {
                e(o.Z.Datasets);
              },
              [e],
            ),
            d = (0, i.useCallback)(
              function (t) {
                return function () {
                  e(''.concat(o.Z.Dataset, '/').concat(t));
                };
              },
              [e],
            ),
            f = (0, i.useCallback)(
              function () {
                e(o.Z.Home);
              },
              [e],
            ),
            g = (0, i.useCallback)(
              function () {
                e(o.Z.ProfileSetting);
              },
              [e],
            ),
            m = (0, i.useCallback)(
              function () {
                e(o.Z.Chats);
              },
              [e],
            ),
            h = (0, i.useCallback)(
              function () {
                e(o.Z.Chat);
              },
              [e],
            ),
            p = (0, i.useCallback)(
              function () {
                e(o.Z.Agents);
              },
              [e],
            ),
            v = (0, i.useCallback)(
              function (t) {
                return function () {
                  e(''.concat(o.Z.Agent, '/').concat(t));
                };
              },
              [e],
            ),
            k = (0, i.useCallback)(
              function () {
                e(o.Z.AgentTemplates);
              },
              [e],
            ),
            b = (0, i.useCallback)(
              function () {
                e(o.Z.Searches);
              },
              [e],
            ),
            _ = (0, i.useCallback)(
              function () {
                e(o.Z.Search);
              },
              [e],
            ),
            x = (0, i.useCallback)(
              function (t, n) {
                return function () {
                  e(
                    ''
                      .concat(o.Z.ParsedResult, '/chunks?id=')
                      .concat(n, '&doc_id=')
                      .concat(t),
                  );
                };
              },
              [e],
            ),
            Z = (0, i.useCallback)(
              function (e) {
                var t = r()({}, l.KnowledgeId, n.get(l.KnowledgeId));
                return e ? t[e] : t;
              },
              [n],
            ),
            w = (0, i.useCallback)(
              function (t) {
                e(
                  ''
                    .concat(t, '/')
                    .concat(a, '?')
                    .concat(l.KnowledgeId, '=')
                    .concat(Z(l.KnowledgeId)),
                );
              },
              [Z, a, e],
            ),
            C = (0, i.useCallback)(
              function (t) {
                e(''.concat(o.Z.Files, '?folderId=').concat(t));
              },
              [e],
            );
          return {
            navigateToDatasetList: s,
            navigateToDataset: d,
            navigateToHome: f,
            navigateToProfile: g,
            navigateToChatList: m,
            navigateToChat: h,
            navigateToChunkParsedResult: x,
            getQueryString: Z,
            navigateToChunk: w,
            navigateToAgentList: p,
            navigateToAgent: v,
            navigateToAgentTemplates: k,
            navigateToSearchList: b,
            navigateToSearch: _,
            navigateToFiles: C,
          };
        };
    },
    8002: function (e, t, n) {
      n.d(t, {
        C4: function () {
          return N;
        },
        E2: function () {
          return K;
        },
        MA: function () {
          return F;
        },
        ME: function () {
          return T;
        },
        PX: function () {
          return A;
        },
        Yi: function () {
          return j;
        },
      });
      var a = n(15009),
        r = n.n(a),
        s = n(99289),
        c = n.n(s),
        o = n(97857),
        i = n.n(o),
        u = n(5574),
        l = n.n(u),
        d = n(87181),
        f = n(54707),
        g = n(73955),
        m = n(78551),
        h = n(30202),
        p = n(4527),
        v = n(58580),
        k = n(45360),
        b = n(62435),
        _ = n(42028),
        x = n(2938),
        Z = 'testRetrieval',
        w = 'fetchKnowledgeListByPage',
        C = 'createKnowledge',
        D = 'deleteKnowledge',
        y = 'saveKnowledge',
        P = 'fetchKnowledgeDetail',
        S = function () {
          return (0, _.UO)().id;
        },
        N = function () {
          var e,
            t = S(),
            n = (0, b.useState)(),
            a = l()(n, 2),
            s = a[0],
            o = a[1],
            u = (0, b.useRef)(!1),
            f = (0, d.Q)(),
            h = f.filterValue,
            p = f.handleFilterSubmit,
            v = (0, b.useState)(1),
            k = l()(v, 2),
            _ = k[0],
            x = k[1],
            w = (0, b.useState)(10),
            C = l()(w, 2),
            D = C[0],
            y = C[1],
            P = (0, b.useCallback)(function (e, t) {
              x(e), y(t);
            }, []),
            N = (0, b.useMemo)(
              function () {
                return i()(
                  i()({}, s),
                  {},
                  {
                    kb_id: (null == s ? void 0 : s.kb_id) || t,
                    page: _,
                    size: D,
                    doc_ids: h.doc_ids,
                  },
                );
              },
              [h, t, _, D, s],
            ),
            j = (0, m.a)({
              queryKey: [Z, N, _, D],
              initialData: { chunks: [], doc_aggs: [], total: 0 },
              enabled: !1,
              gcTime: 0,
              queryFn:
                ((e = c()(
                  r()().mark(function e() {
                    var t, n, a;
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), g.ZP.retrieval_test(N);
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
            T = j.data,
            K = j.isFetching,
            F = j.refetch;
          return (
            (0, b.useEffect)(
              function () {
                u.current && F(), (u.current = !0);
              },
              [_, D, F, h],
            ),
            {
              data: T,
              loading: K,
              setValues: o,
              refetch: F,
              onPaginationChange: P,
              page: _,
              pageSize: D,
              handleFilterSubmit: p,
              filterValue: h,
            }
          );
        },
        j = function () {
          var e,
            t = (0, x.Qe)(),
            n = t.searchString,
            a = t.handleInputChange,
            s = (0, x.ye)(),
            o = s.pagination,
            u = s.setPagination,
            l = (0, v.Z)(n, { wait: 500 }),
            f = (0, d.Q)(),
            h = f.filterValue,
            p = f.handleFilterSubmit,
            k = (0, m.a)({
              queryKey: [
                w,
                i()(
                  i()({ debouncedSearchString: l }, o),
                  {},
                  { filterValue: h },
                ),
              ],
              initialData: { kbs: [], total: 0 },
              gcTime: 0,
              queryFn:
                ((e = c()(
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
                                  page_size: o.pageSize,
                                  page: o.current,
                                },
                                { owner_ids: h.owner },
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
            _ = k.data,
            Z = k.isFetching,
            C = (0, b.useCallback)(
              function (e) {
                a(e);
              },
              [a],
            );
          return i()(
            i()({}, _),
            {},
            {
              searchString: n,
              handleInputChange: C,
              pagination: i()(
                i()({}, o),
                {},
                { total: null == _ ? void 0 : _.total },
              ),
              setPagination: u,
              loading: Z,
              filterValue: h,
              handleFilterSubmit: p,
            },
          );
        },
        T = function () {
          var e,
            t = (0, h.NL)(),
            n = (0, p.D)({
              mutationKey: [C],
              mutationFn:
                ((e = c()(
                  r()().mark(function e(n) {
                    var a, s, c;
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), g.ZP.createKb(n);
                          case 2:
                            return (
                              (a = e.sent),
                              (s = a.data),
                              0 === (c = void 0 === s ? {} : s).code &&
                                (k.ZP.success(
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
            data: n.data,
            loading: n.isPending,
            createKnowledge: n.mutateAsync,
          };
        },
        K = function () {
          var e,
            t = (0, h.NL)(),
            n = (0, p.D)({
              mutationKey: [D],
              mutationFn:
                ((e = c()(
                  r()().mark(function e(n) {
                    var a, s, c;
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), g.ZP.rmKb({ kb_id: n });
                          case 2:
                            return (
                              (s = e.sent),
                              0 === (c = s.data).code &&
                                (k.ZP.success(f.Z.t('message.deleted')),
                                t.invalidateQueries({ queryKey: [w] })),
                              e.abrupt(
                                'return',
                                null !== (a = null == c ? void 0 : c.data) &&
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
            a = (0, h.NL)(),
            s = (0, p.D)({
              mutationKey: [y],
              mutationFn:
                ((e = c()(
                  r()().mark(function e(s) {
                    var c, o, u;
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g.ZP.updateKb(
                                i()(
                                  {
                                    kb_id:
                                      null != s && s.kb_id
                                        ? null == s
                                          ? void 0
                                          : s.kb_id
                                        : n,
                                  },
                                  s,
                                ),
                              )
                            );
                          case 2:
                            return (
                              (c = e.sent),
                              (o = c.data),
                              0 === (u = void 0 === o ? {} : o).code &&
                                (k.ZP.success(f.Z.t('message.updated')),
                                t
                                  ? a.invalidateQueries({ queryKey: [w] })
                                  : a.invalidateQueries({
                                      queryKey: ['fetchKnowledgeDetail'],
                                    })),
                              e.abrupt('return', u)
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
            data: s.data,
            loading: s.isPending,
            saveKnowledgeConfiguration: s.mutateAsync,
          };
        },
        A = function (e) {
          var t = (0, _.UO)().id,
            n = [P];
          'number' == typeof e && (n = [P, e]);
          var a,
            s = (0, m.a)({
              queryKey: n,
              initialData: {},
              gcTime: 0,
              queryFn:
                ((a = c()(
                  r()().mark(function e() {
                    var n, a, s;
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
                              (s = a.data),
                              e.abrupt(
                                'return',
                                null !== (n = null == s ? void 0 : s.data) &&
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
          return { data: s.data, loading: s.isFetching };
        };
    },
    27918: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var a = n(36646),
        r = n(704),
        s = n(42028),
        c = n(86709),
        o = n(57636),
        i = n(96100),
        u = n(8002),
        l = n(27080),
        d = n(23454),
        f = n(28382),
        g = n(33587),
        m = n(10954),
        h = n(64154),
        p = n(62435),
        v = n(67421),
        k = function () {
          var e = (0, s.s0)(),
            t = (0, s.UO)().id;
          return {
            handleMenuClick: (0, p.useCallback)(
              function (n) {
                return function () {
                  e(''.concat(d.Z.DatasetBase).concat(n, '/').concat(t));
                };
              },
              [t, e],
            ),
          };
        },
        b = n(86074);
      function _(e) {
        var t = e.refreshCount,
          n = (0, i.Uu)(),
          a = k().handleMenuClick,
          r = (0, u.PX)(t).data,
          s = (0, v.$G)().t,
          _ = (0, p.useMemo)(
            function () {
              return [
                {
                  icon: g.Z,
                  label: s('knowledgeDetails.dataset'),
                  key: d.Z.DatasetBase,
                },
                {
                  icon: m.Z,
                  label: s('knowledgeDetails.testing'),
                  key: d.Z.DatasetTesting,
                },
                {
                  icon: h.Z,
                  label: s('knowledgeDetails.configuration'),
                  key: d.Z.DatasetSetting,
                },
              ];
            },
            [s],
          );
        return (0, b.jsxs)('aside', {
          className: 'relative p-5 space-y-8',
          children: [
            (0, b.jsxs)('div', {
              className: 'flex gap-2.5 max-w-[200px] items-center',
              children: [
                (0, b.jsx)(c.t, {
                  avatar: r.avatar,
                  name: r.name,
                  className: 'size-16',
                }),
                (0, b.jsxs)('div', {
                  className: ' text-text-sub-title text-xs space-y-1',
                  children: [
                    (0, b.jsx)('h3', {
                      className:
                        'text-lg font-semibold line-clamp-1 text-text-title',
                      children: r.name,
                    }),
                    (0, b.jsxs)('div', {
                      className: 'flex justify-between',
                      children: [
                        (0, b.jsxs)('span', {
                          children: [r.doc_num, ' files'],
                        }),
                        (0, b.jsx)('span', { children: (0, l.t)(r.size) }),
                      ],
                    }),
                    (0, b.jsxs)('div', {
                      children: ['Created ', (0, f.Qc)(r.create_time)],
                    }),
                  ],
                }),
              ],
            }),
            (0, b.jsx)('div', {
              className: 'w-[200px] flex flex-col gap-5',
              children: _.map(function (e, t) {
                var r = '/' + n === e.key;
                return (0, b.jsxs)(
                  o.zx,
                  {
                    variant: r ? 'secondary' : 'ghost',
                    className: (0, l.cn)(
                      'w-full justify-start gap-2.5 px-3 relative h-10 text-text-sub-title-invert',
                      { 'bg-background-card': r, 'text-text-title': r },
                    ),
                    onClick: a(e.key),
                    children: [
                      (0, b.jsx)(e.icon, { className: 'size-4' }),
                      (0, b.jsx)('span', { children: e.label }),
                    ],
                  },
                  t,
                );
              }),
            }),
          ],
        });
      }
      function x() {
        var e = (0, r.$)().navigateToDatasetList;
        return (0, b.jsxs)('section', {
          children: [
            (0, b.jsx)(a.m, { title: 'Dataset details', back: e }),
            (0, b.jsxs)('div', {
              className: 'flex flex-1',
              children: [
                (0, b.jsx)(_, {}),
                (0, b.jsx)('div', {
                  className: 'flex-1',
                  children: (0, b.jsx)(s.j3, {}),
                }),
              ],
            }),
          ],
        });
      }
    },
    23454: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var a = (function (e) {
        return (
          (e.Login = '/login'),
          (e.Home = '/home'),
          (e.Datasets = '/datasets'),
          (e.DatasetBase = '/dataset'),
          (e[(e.Dataset = ''.concat(e.DatasetBase).concat(e.DatasetBase))] =
            'Dataset'),
          (e.Agent = '/agent'),
          (e.AgentTemplates = '/agent-templates'),
          (e.Agents = '/agents'),
          (e.Searches = '/next-searches'),
          (e.Search = '/next-search'),
          (e.Chats = '/next-chats'),
          (e.Chat = '/next-chat'),
          (e.Files = '/files'),
          (e.ProfileSetting = '/profile-setting'),
          (e.DatasetTesting = '/testing'),
          (e.DatasetSetting = '/setting'),
          (e.Chunk = '/chunk'),
          (e.ChunkResult = '/chunk/chunk'),
          (e.Parsed = '/parsed'),
          (e.ParsedResult = '/chunk/parsed'),
          (e.Result = '/result'),
          (e.ResultView = '/chunk/result'),
          e
        );
      })({});
      a.Home,
        a.Home,
        '@/pages'.concat(a.Home),
        a.Datasets,
        a.Datasets,
        '@/pages'.concat(a.Datasets),
        a.Chats,
        a.Chats,
        '@/pages'.concat(a.Chats),
        a.Chat,
        '@/pages'.concat(a.Chats, '/chat'),
        a.Searches,
        a.Searches,
        '@/pages'.concat(a.Searches),
        a.Search,
        '@/pages'.concat(a.Search),
        a.Agents,
        a.Agents,
        '@/pages'.concat(a.Agents),
        ''.concat(a.Agent, '/:id'),
        '@/pages'.concat(a.Agent),
        a.AgentTemplates,
        '@/pages'.concat(a.Agents).concat(a.AgentTemplates),
        a.Files,
        a.Files,
        '@/pages'.concat(a.Files),
        a.DatasetBase,
        a.DatasetBase,
        a.Dataset,
        a.DatasetBase,
        '@/pages'.concat(a.DatasetBase),
        ''.concat(a.Dataset, '/:id'),
        '@/pages'.concat(a.Dataset),
        ''.concat(a.DatasetBase).concat(a.DatasetSetting, '/:id'),
        '@/pages'.concat(a.DatasetBase).concat(a.DatasetSetting),
        ''.concat(a.DatasetBase).concat(a.DatasetTesting, '/:id'),
        '@/pages'.concat(a.DatasetBase).concat(a.DatasetTesting),
        ''.concat(a.ParsedResult, '/chunks'),
        '@/pages'.concat(
          a.Chunk,
          '/parsed-result/add-knowledge/components/knowledge-chunk',
        ),
        a.Chunk,
        a.Chunk,
        '@/pages'.concat(a.Chunk),
        ''.concat(a.ChunkResult, '/:id'),
        '@/pages'.concat(a.Chunk, '/chunk-result'),
        ''.concat(a.ResultView, '/:id'),
        '@/pages'.concat(a.Chunk, '/result-view'),
        a.Chunk,
        '@/pages'.concat(a.Chunk),
        a.ProfileSetting,
        '@/pages'.concat(a.ProfileSetting),
        a.ProfileSetting,
        ''.concat(a.ProfileSetting, '/profile'),
        ''.concat(a.ProfileSetting, '/profile'),
        '@/pages'.concat(a.ProfileSetting, '/profile'),
        ''.concat(a.ProfileSetting, '/team'),
        '@/pages'.concat(a.ProfileSetting, '/team'),
        ''.concat(a.ProfileSetting, '/plan'),
        '@/pages'.concat(a.ProfileSetting, '/plan'),
        ''.concat(a.ProfileSetting, '/model'),
        '@/pages'.concat(a.ProfileSetting, '/model'),
        ''.concat(a.ProfileSetting, '/prompt'),
        '@/pages'.concat(a.ProfileSetting, '/prompt');
    },
    73955: function (e, t, n) {
      n.d(t, {
        $V: function () {
          return q;
        },
        Fb: function () {
          return M;
        },
        QL: function () {
          return B;
        },
        Qh: function () {
          return I;
        },
        Re: function () {
          return Q;
        },
        sX: function () {
          return L;
        },
        tc: function () {
          return R;
        },
      });
      var a = n(60806),
        r = n(66582),
        s = n(78158),
        c = a.Z.create_kb,
        o = a.Z.update_kb,
        i = a.Z.rm_kb,
        u = a.Z.get_kb_detail,
        l = a.Z.kb_list,
        d = a.Z.get_document_list,
        f = a.Z.document_change_status,
        g = a.Z.document_rm,
        m = a.Z.document_delete,
        h = a.Z.document_create,
        p = a.Z.document_change_parser,
        v = a.Z.document_thumbnails,
        k = a.Z.chunk_list,
        b = a.Z.create_chunk,
        _ = a.Z.set_chunk,
        x = a.Z.get_chunk,
        Z = a.Z.switch_chunk,
        w = a.Z.rm_chunk,
        C = a.Z.retrieval_test,
        D = a.Z.document_rename,
        y = a.Z.document_run,
        P = a.Z.document_upload,
        S = a.Z.web_crawl,
        N = a.Z.knowledge_graph,
        j = a.Z.document_infos,
        T = a.Z.upload_and_parse,
        K = a.Z.listTagByKnowledgeIds,
        F = {
          createKb: { url: c, method: 'post' },
          updateKb: { url: o, method: 'post' },
          rmKb: { url: i, method: 'post' },
          get_kb_detail: { url: u, method: 'get' },
          getList: { url: l, method: 'post' },
          get_document_list: { url: d, method: 'get' },
          document_change_status: { url: f, method: 'post' },
          document_rm: { url: g, method: 'post' },
          document_rename: { url: D, method: 'post' },
          document_create: { url: h, method: 'post' },
          document_run: { url: y, method: 'post' },
          document_change_parser: { url: p, method: 'post' },
          document_thumbnails: { url: v, method: 'get' },
          document_upload: { url: P, method: 'post' },
          web_crawl: { url: S, method: 'post' },
          document_infos: { url: j, method: 'post' },
          setMeta: { url: a.Z.setMeta, method: 'post' },
          chunk_list: { url: k, method: 'post' },
          create_chunk: { url: b, method: 'post' },
          set_chunk: { url: _, method: 'post' },
          get_chunk: { url: x, method: 'get' },
          switch_chunk: { url: Z, method: 'post' },
          rm_chunk: { url: w, method: 'post' },
          retrieval_test: { url: C, method: 'post' },
          knowledge_graph: { url: N, method: 'get' },
          document_delete: { url: m, method: 'delete' },
          upload_and_parse: { url: T, method: 'post' },
          listTagByKnowledgeIds: { url: K, method: 'get' },
        },
        A = (0, r.Z)(F, s.ZP),
        B = function (e) {
          return s.ZP.get(a.Z.listTag(e));
        },
        R = function (e, t) {
          return (0, s.v_)(a.Z.removeTag(e), { tags: t });
        },
        Q = function (e, t) {
          var n = t.fromTag,
            r = t.toTag;
          return (0, s.v_)(a.Z.renameTag(e), { fromTag: n, toTag: r });
        };
      function q(e) {
        return s.ZP.get(a.Z.getKnowledgeGraph(e));
      }
      function L(e) {
        return s.ZP.delete(a.Z.getKnowledgeGraph(e));
      }
      var M = function (e, t) {
          return s.ZP.post(a.Z.kb_list, { data: t || {}, params: e });
        },
        I = function (e, t) {
          return s.ZP.post(a.Z.get_document_list, { data: t || {}, params: e });
        };
      t.ZP = A;
    },
    28382: function (e, t, n) {
      n.d(t, {
        Qc: function () {
          return o;
        },
        mr: function () {
          return c;
        },
        p6: function () {
          return s;
        },
      });
      var a = n(27484),
        r = n.n(a);
      function s(e) {
        return e ? r()(e).format('DD/MM/YYYY HH:mm:ss') : '';
      }
      function c(e) {
        return e ? r()(e).format('HH:mm:ss') : '';
      }
      function o(e) {
        return e ? r()(e).format('DD/MM/YYYY') : '';
      }
    },
  },
]);
//# sourceMappingURL=p__dataset__index.165ce694.async.js.map
