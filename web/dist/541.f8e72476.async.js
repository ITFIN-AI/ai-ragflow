'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [541],
  {
    10541: function (t, e, n) {
      n.d(e, {
        $F: function () {
          return V;
        },
        $G: function () {
          return A;
        },
        E2: function () {
          return L;
        },
        L5: function () {
          return T;
        },
        MA: function () {
          return D;
        },
        ME: function () {
          return q;
        },
        Og: function () {
          return E;
        },
        PX: function () {
          return P;
        },
        Q7: function () {
          return z;
        },
        Sq: function () {
          return X;
        },
        VJ: function () {
          return x;
        },
        aD: function () {
          return Q;
        },
        aX: function () {
          return C;
        },
        dT: function () {
          return N;
        },
        lX: function () {
          return B;
        },
        lx: function () {
          return G;
        },
        pY: function () {
          return F;
        },
        rd: function () {
          return $;
        },
        uG: function () {
          return I;
        },
        w9: function () {
          return b;
        },
        wq: function () {
          return S;
        },
        z5: function () {
          return M;
        },
      });
      var r = n(97857),
        a = n.n(r),
        u = n(15009),
        i = n.n(u),
        o = n(99289),
        s = n.n(o),
        c = n(5574),
        d = n.n(c),
        l = n(54707),
        f = n(73955),
        m = n(78551),
        g = n(4614),
        p = n(30202),
        h = n(4527),
        v = n(99346),
        _ = n(58580),
        y = n(45360),
        k = n(62435),
        w = n(42028),
        Z = n(2938),
        K = n(96100),
        b = function () {
          var t = (0, w.lr)();
          return d()(t, 1)[0].get('id') || '';
        },
        P = function () {
          var t,
            e = b(),
            n = (0, m.a)({
              queryKey: ['fetchKnowledgeDetail'],
              initialData: {},
              gcTime: 0,
              queryFn:
                ((t = s()(
                  i()().mark(function t() {
                    var n, r, a;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), f.ZP.get_kb_detail({ kb_id: e })
                            );
                          case 2:
                            return (
                              (r = t.sent),
                              (a = r.data),
                              t.abrupt(
                                'return',
                                null !== (n = null == a ? void 0 : a.data) &&
                                  void 0 !== n
                                  ? n
                                  : {},
                              )
                            );
                          case 5:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            });
          return { data: n.data, loading: n.isFetching };
        },
        x = function () {
          var t,
            e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = (0, m.a)({
              queryKey: ['fetchKnowledgeList'],
              initialData: [],
              gcTime: 0,
              queryFn:
                ((t = s()(
                  i()().mark(function t() {
                    var n, r, a, u, o;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, f.Fb)();
                          case 2:
                            return (
                              (a = t.sent),
                              (u = a.data),
                              (o =
                                null !==
                                  (n =
                                    null == u ||
                                    null === (r = u.data) ||
                                    void 0 === r
                                      ? void 0
                                      : r.kbs) && void 0 !== n
                                  ? n
                                  : []),
                              t.abrupt(
                                'return',
                                e
                                  ? o.filter(function (t) {
                                      return t.chunk_num > 0;
                                    })
                                  : o,
                              )
                            );
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            });
          return { list: n.data, loading: n.isFetching };
        },
        F = function () {
          var t = x().list;
          return null == t
            ? void 0
            : t.map(function (t) {
                return { label: t.name, value: t.id };
              });
        },
        T = function () {
          var t,
            e = (0, Z.Qe)(),
            n = e.searchString,
            r = e.handleInputChange,
            a = (0, _.Z)(n, { wait: 500 }),
            u = (0, g.N)({
              queryKey: ['infiniteFetchKnowledgeList', a],
              queryFn:
                ((t = s()(
                  i()().mark(function t(e) {
                    var n, r, u, o, s;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = e.pageParam),
                              (t.next = 3),
                              (0, f.Fb)({ page: r, page_size: 30, keywords: a })
                            );
                          case 3:
                            return (
                              (u = t.sent),
                              (o = u.data),
                              (s =
                                null !== (n = null == o ? void 0 : o.data) &&
                                void 0 !== n
                                  ? n
                                  : []),
                              t.abrupt('return', s)
                            );
                          case 7:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
              initialPageParam: 1,
              getNextPageParam: function (t, e, n) {
                if (30 * n <= t.total) return n + 1;
              },
            }),
            o = u.data,
            c = u.error,
            d = u.fetchNextPage,
            l = u.hasNextPage,
            m = u.isFetching;
          return {
            data: o,
            loading: m,
            error: c,
            fetchNextPage: d,
            hasNextPage: l,
            isFetching: m,
            isFetchingNextPage: u.isFetchingNextPage,
            status: u.status,
            handleInputChange: r,
            searchString: n,
          };
        },
        q = function () {
          var t,
            e = (0, p.NL)(),
            n = (0, h.D)({
              mutationKey: ['infiniteFetchKnowledgeList'],
              mutationFn:
                ((t = s()(
                  i()().mark(function t(n) {
                    var r, a, u;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), f.ZP.createKb(n);
                          case 2:
                            return (
                              (r = t.sent),
                              (a = r.data),
                              0 === (u = void 0 === a ? {} : a).code &&
                                (y.ZP.success(
                                  l.Z.t(
                                    'message.'.concat(
                                      null != n && n.id
                                        ? 'modified'
                                        : 'created',
                                    ),
                                  ),
                                ),
                                e.invalidateQueries({
                                  queryKey: ['fetchKnowledgeList'],
                                })),
                              t.abrupt('return', u)
                            );
                          case 7:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            createKnowledge: n.mutateAsync,
          };
        },
        L = function () {
          var t,
            e = (0, p.NL)(),
            n = (0, h.D)({
              mutationKey: ['deleteKnowledge'],
              mutationFn:
                ((t = s()(
                  i()().mark(function t(n) {
                    var r, a, u;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), f.ZP.rmKb({ kb_id: n });
                          case 2:
                            return (
                              (a = t.sent),
                              0 === (u = a.data).code &&
                                (y.ZP.success(l.Z.t('message.deleted')),
                                e.invalidateQueries({
                                  queryKey: ['infiniteFetchKnowledgeList'],
                                })),
                              t.abrupt(
                                'return',
                                null !== (r = null == u ? void 0 : u.data) &&
                                  void 0 !== r
                                  ? r
                                  : [],
                              )
                            );
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            deleteKnowledge: n.mutateAsync,
          };
        },
        D = function () {
          var t,
            e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = b(),
            r = (0, p.NL)(),
            u = (0, h.D)({
              mutationKey: ['saveKnowledge'],
              mutationFn:
                ((t = s()(
                  i()().mark(function t(u) {
                    var o, s, c;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              f.ZP.updateKb(
                                a()(
                                  {
                                    kb_id:
                                      null != u && u.kb_id
                                        ? null == u
                                          ? void 0
                                          : u.kb_id
                                        : n,
                                  },
                                  u,
                                ),
                              )
                            );
                          case 2:
                            return (
                              (o = t.sent),
                              (s = o.data),
                              0 === (c = void 0 === s ? {} : s).code &&
                                (y.ZP.success(l.Z.t('message.updated')),
                                e
                                  ? r.invalidateQueries({
                                      queryKey: ['fetchKnowledgeListByPage'],
                                    })
                                  : r.invalidateQueries({
                                      queryKey: ['fetchKnowledgeDetail'],
                                    })),
                              t.abrupt('return', c)
                            );
                          case 7:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
            });
          return {
            data: u.data,
            loading: u.isPending,
            saveKnowledgeConfiguration: u.mutateAsync,
          };
        },
        C = function () {
          var t,
            e = b(),
            n = (0, K.fz)(),
            r = n.page,
            u = n.size,
            o = (0, h.D)({
              mutationKey: ['testChunk'],
              gcTime: 0,
              mutationFn:
                ((t = s()(
                  i()().mark(function t(n) {
                    var o, s, c, d, l;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              f.ZP.retrieval_test(
                                a()(
                                  a()({}, n),
                                  {},
                                  {
                                    kb_id:
                                      null !== (o = n.kb_id) && void 0 !== o
                                        ? o
                                        : e,
                                    page: r,
                                    size: u,
                                  },
                                ),
                              )
                            );
                          case 2:
                            if (((c = t.sent), 0 !== (d = c.data).code)) {
                              t.next = 7;
                              break;
                            }
                            return (
                              (l = d.data),
                              t.abrupt(
                                'return',
                                a()(a()({}, l), {}, { documents: l.doc_aggs }),
                              )
                            );
                          case 7:
                            return t.abrupt(
                              'return',
                              null !== (s = null == d ? void 0 : d.data) &&
                                void 0 !== s
                                ? s
                                : { chunks: [], documents: [], total: 0 },
                            );
                          case 8:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
            }),
            c = o.data;
          return {
            data: null != c ? c : { chunks: [], documents: [], total: 0 },
            loading: o.isPending,
            testChunk: o.mutateAsync,
          };
        },
        N = function () {
          var t,
            e = b(),
            n = (0, K.fz)(),
            r = n.page,
            u = n.size,
            o = (0, h.D)({
              mutationKey: ['testChunkAll'],
              gcTime: 0,
              mutationFn:
                ((t = s()(
                  i()().mark(function t(n) {
                    var o, s, c, d, l;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              f.ZP.retrieval_test(
                                a()(
                                  a()({}, n),
                                  {},
                                  {
                                    kb_id:
                                      null !== (o = n.kb_id) && void 0 !== o
                                        ? o
                                        : e,
                                    doc_ids: [],
                                    page: r,
                                    size: u,
                                  },
                                ),
                              )
                            );
                          case 2:
                            if (((c = t.sent), 0 !== (d = c.data).code)) {
                              t.next = 7;
                              break;
                            }
                            return (
                              (l = d.data),
                              t.abrupt(
                                'return',
                                a()(a()({}, l), {}, { documents: l.doc_aggs }),
                              )
                            );
                          case 7:
                            return t.abrupt(
                              'return',
                              null !== (s = null == d ? void 0 : d.data) &&
                                void 0 !== s
                                ? s
                                : { chunks: [], documents: [], total: 0 },
                            );
                          case 8:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
            }),
            c = o.data;
          return {
            data: null != c ? c : { chunks: [], documents: [], total: 0 },
            loading: o.isPending,
            testChunkAll: o.mutateAsync,
          };
        },
        A = function () {
          return (0, v.B)({ mutationKey: ['testChunk'] }) > 0;
        },
        Q = function () {
          var t;
          return null !==
            (t = (0, v.S)({
              filters: { mutationKey: ['testChunk'] },
              select: function (t) {
                return t.state.data;
              },
            }).at(-1)) && void 0 !== t
            ? t
            : { chunks: [], documents: [], total: 0 };
        },
        z = function () {
          return (
            'success' ===
            (0, v.S)({
              filters: { mutationKey: ['testChunk'] },
              select: function (t) {
                return t.state.status;
              },
            }).at(-1)
          );
        },
        G = function () {
          return (
            'success' ===
            (0, v.S)({
              filters: { mutationKey: ['testChunkAll'] },
              select: function (t) {
                return t.state.status;
              },
            }).at(-1)
          );
        },
        S = function () {
          var t;
          return null !==
            (t = (0, v.S)({
              filters: { mutationKey: ['testChunkAll'] },
              select: function (t) {
                return t.state.data;
              },
            }).at(-1)) && void 0 !== t
            ? t
            : { chunks: [], documents: [], total: 0 };
        },
        B = function () {
          var t,
            e = b(),
            n = (0, m.a)({
              queryKey: ['fetchTagList'],
              initialData: [],
              gcTime: 0,
              queryFn:
                ((t = s()(
                  i()().mark(function t() {
                    var n, r, a;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, f.QL)(e);
                          case 2:
                            return (
                              (n = t.sent),
                              (r = n.data),
                              (a = (null == r ? void 0 : r.data) || []),
                              t.abrupt('return', a)
                            );
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            });
          return { list: n.data, loading: n.isFetching };
        },
        I = function () {
          var t,
            e = b(),
            n = (0, p.NL)(),
            r = (0, h.D)({
              mutationKey: ['deleteTag'],
              mutationFn:
                ((t = s()(
                  i()().mark(function t(r) {
                    var a, u, o;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, f.tc)(e, r);
                          case 2:
                            return (
                              (u = t.sent),
                              0 === (o = u.data).code &&
                                (y.ZP.success(l.Z.t('message.deleted')),
                                n.invalidateQueries({
                                  queryKey: ['fetchTagList'],
                                })),
                              t.abrupt(
                                'return',
                                null !== (a = null == o ? void 0 : o.data) &&
                                  void 0 !== a
                                  ? a
                                  : [],
                              )
                            );
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
            });
          return {
            data: r.data,
            loading: r.isPending,
            deleteTag: r.mutateAsync,
          };
        },
        X = function () {
          var t,
            e = b(),
            n = (0, p.NL)(),
            r = (0, h.D)({
              mutationKey: ['renameTag'],
              mutationFn:
                ((t = s()(
                  i()().mark(function t(r) {
                    var a, u, o;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, f.Re)(e, r);
                          case 2:
                            return (
                              (u = t.sent),
                              0 === (o = u.data).code &&
                                (y.ZP.success(l.Z.t('message.modified')),
                                n.invalidateQueries({
                                  queryKey: ['fetchTagList'],
                                })),
                              t.abrupt(
                                'return',
                                null !== (a = null == o ? void 0 : o.data) &&
                                  void 0 !== a
                                  ? a
                                  : [],
                              )
                            );
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
            });
          return {
            data: r.data,
            loading: r.isPending,
            renameTag: r.mutateAsync,
          };
        },
        M = function () {
          return (0, v.B)({ mutationKey: ['renameTag'] }) > 0;
        },
        $ = function () {
          var t,
            e = (0, k.useState)([]),
            n = d()(e, 2),
            r = n[0],
            a = n[1],
            u = (0, m.a)({
              queryKey: ['fetchTagListByKnowledgeIds'],
              enabled: r.length > 0,
              initialData: [],
              gcTime: 0,
              queryFn:
                ((t = s()(
                  i()().mark(function t() {
                    var e, n, a;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              f.ZP.listTagByKnowledgeIds({
                                kb_ids: r.join(','),
                              })
                            );
                          case 2:
                            return (
                              (e = t.sent),
                              (n = e.data),
                              (a = (null == n ? void 0 : n.data) || []),
                              t.abrupt('return', a)
                            );
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            });
          return { list: u.data, loading: u.isFetching, setKnowledgeIds: a };
        };
      function V() {
        var t,
          e = b(),
          n = (0, m.a)({
            queryKey: ['fetchKnowledgeGraph', e],
            initialData: { graph: {}, mind_map: {} },
            enabled: !!e,
            gcTime: 0,
            queryFn:
              ((t = s()(
                i()().mark(function t() {
                  var n, r;
                  return i()().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), (0, f.$V)(e);
                        case 2:
                          return (
                            (n = t.sent),
                            (r = n.data),
                            t.abrupt('return', null == r ? void 0 : r.data)
                          );
                        case 5:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              )),
              function () {
                return t.apply(this, arguments);
              }),
          });
        return { data: n.data, loading: n.isFetching };
      }
      var E = function () {
        var t,
          e = b(),
          n = (0, p.NL)(),
          r = (0, h.D)({
            mutationKey: ['removeKnowledgeGraph'],
            mutationFn:
              ((t = s()(
                i()().mark(function t() {
                  var r, a;
                  return i()().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), (0, f.sX)(e);
                        case 2:
                          return (
                            (r = t.sent),
                            0 === (a = r.data).code &&
                              (y.ZP.success(l.Z.t('message.deleted')),
                              n.invalidateQueries({
                                queryKey: ['fetchKnowledgeGraph'],
                              })),
                            t.abrupt('return', null == a ? void 0 : a.code)
                          );
                        case 6:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              )),
              function () {
                return t.apply(this, arguments);
              }),
          });
        return {
          data: r.data,
          loading: r.isPending,
          removeKnowledgeGraph: r.mutateAsync,
        };
      };
    },
    73955: function (t, e, n) {
      n.d(e, {
        $V: function () {
          return S;
        },
        Fb: function () {
          return I;
        },
        QL: function () {
          return Q;
        },
        Qh: function () {
          return X;
        },
        Re: function () {
          return G;
        },
        sX: function () {
          return B;
        },
        tc: function () {
          return z;
        },
      });
      var r = n(60806),
        a = n(66582),
        u = n(78158),
        i = r.Z.create_kb,
        o = r.Z.update_kb,
        s = r.Z.rm_kb,
        c = r.Z.get_kb_detail,
        d = r.Z.kb_list,
        l = r.Z.get_document_list,
        f = r.Z.document_change_status,
        m = r.Z.document_rm,
        g = r.Z.document_delete,
        p = r.Z.document_create,
        h = r.Z.document_change_parser,
        v = r.Z.document_thumbnails,
        _ = r.Z.chunk_list,
        y = r.Z.create_chunk,
        k = r.Z.set_chunk,
        w = r.Z.get_chunk,
        Z = r.Z.switch_chunk,
        K = r.Z.rm_chunk,
        b = r.Z.retrieval_test,
        P = r.Z.document_rename,
        x = r.Z.document_run,
        F = r.Z.document_upload,
        T = r.Z.web_crawl,
        q = r.Z.knowledge_graph,
        L = r.Z.document_infos,
        D = r.Z.upload_and_parse,
        C = r.Z.listTagByKnowledgeIds,
        N = {
          createKb: { url: i, method: 'post' },
          updateKb: { url: o, method: 'post' },
          rmKb: { url: s, method: 'post' },
          get_kb_detail: { url: c, method: 'get' },
          getList: { url: d, method: 'post' },
          get_document_list: { url: l, method: 'get' },
          document_change_status: { url: f, method: 'post' },
          document_rm: { url: m, method: 'post' },
          document_rename: { url: P, method: 'post' },
          document_create: { url: p, method: 'post' },
          document_run: { url: x, method: 'post' },
          document_change_parser: { url: h, method: 'post' },
          document_thumbnails: { url: v, method: 'get' },
          document_upload: { url: F, method: 'post' },
          web_crawl: { url: T, method: 'post' },
          document_infos: { url: L, method: 'post' },
          setMeta: { url: r.Z.setMeta, method: 'post' },
          chunk_list: { url: _, method: 'post' },
          create_chunk: { url: y, method: 'post' },
          set_chunk: { url: k, method: 'post' },
          get_chunk: { url: w, method: 'get' },
          switch_chunk: { url: Z, method: 'post' },
          rm_chunk: { url: K, method: 'post' },
          retrieval_test: { url: b, method: 'post' },
          knowledge_graph: { url: q, method: 'get' },
          document_delete: { url: g, method: 'delete' },
          upload_and_parse: { url: D, method: 'post' },
          listTagByKnowledgeIds: { url: C, method: 'get' },
        },
        A = (0, a.Z)(N, u.ZP),
        Q = function (t) {
          return u.ZP.get(r.Z.listTag(t));
        },
        z = function (t, e) {
          return (0, u.v_)(r.Z.removeTag(t), { tags: e });
        },
        G = function (t, e) {
          var n = e.fromTag,
            a = e.toTag;
          return (0, u.v_)(r.Z.renameTag(t), { fromTag: n, toTag: a });
        };
      function S(t) {
        return u.ZP.get(r.Z.getKnowledgeGraph(t));
      }
      function B(t) {
        return u.ZP.delete(r.Z.getKnowledgeGraph(t));
      }
      var I = function (t, e) {
          return u.ZP.post(r.Z.kb_list, { data: e || {}, params: t });
        },
        X = function (t, e) {
          return u.ZP.post(r.Z.get_document_list, { data: e || {}, params: t });
        };
      e.ZP = A;
    },
  },
]);
//# sourceMappingURL=541.f8e72476.async.js.map
