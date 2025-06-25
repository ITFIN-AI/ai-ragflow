(self.webpackChunk = self.webpackChunk || []).push([
  [1282, 2938, 541, 8392],
  {
    46693: function (t, e, n) {
      'use strict';
      n.d(e, {
        $: function () {
          return h;
        },
      });
      var s,
        r = n(97857),
        i = n.n(r),
        a = n(13769),
        c = n.n(a),
        u = n(39386),
        o = n(27080),
        l = n(16165),
        f = n(87547),
        d = n(7134),
        p = n(86074),
        g = ['name', 'width', 'height', 'imgClass'],
        v = [];
      try {
        (s = n(78131)),
          (v = s.keys().map(function (t) {
            return { name: t.replace(/\.\/(.*)\.\w+$/, '$1'), value: s(t) };
          }));
      } catch (t) {
        console.warn(t), (v = []);
      }
      var m = function (t) {
          var e = t.name,
            n = t.width,
            s = t.height,
            r = t.imgClass,
            a = c()(t, g),
            u = v.find(function (t) {
              return t.name === e;
            });
          return (0, p.jsx)(
            l.Z,
            i()(
              {
                component: function () {
                  return (0, p.jsx)('img', {
                    src: null == u ? void 0 : u.value,
                    alt: '',
                    width: n,
                    height: s,
                    className: (0, o.cn)(r, 'max-w-full'),
                  });
                },
              },
              a,
            ),
          );
        },
        h = function (t) {
          var e = t.name,
            n = t.height,
            s = void 0 === n ? 48 : n,
            r = t.width,
            i = void 0 === r ? 48 : r,
            a = t.size,
            c = void 0 === a ? 'large' : a,
            o = t.imgClass,
            l = u.s[e];
          return l
            ? (0, p.jsx)(m, {
                name: 'llm/'.concat(l),
                width: i,
                height: s,
                imgClass: o,
              })
            : (0, p.jsx)(d.C, {
                shape: 'square',
                size: c,
                icon: (0, p.jsx)(f.Z, {}),
              });
        };
      e.Z = m;
    },
    80499: function (t, e, n) {
      'use strict';
      n.d(e, {
        NI: function () {
          return N;
        },
        Wi: function () {
          return _;
        },
        l0: function () {
          return k;
        },
        lX: function () {
          return P;
        },
        pf: function () {
          return T;
        },
        xJ: function () {
          return C;
        },
        zG: function () {
          return F;
        },
      });
      var s = n(13769),
        r = n.n(s),
        i = n(97857),
        a = n.n(i),
        c = n(49677),
        u = n.n(c),
        o = n(88426),
        l = n(62435),
        f = n(87536),
        d = n(65038),
        p = n(27080),
        g = n(84146),
        v = n(86074),
        m = ['className'],
        h = ['className', 'tooltip'],
        x = ['className'],
        b = ['className', 'children'],
        k = f.RV,
        y = l.createContext({}),
        w = l.createContext({}),
        _ = function (t) {
          var e = Object.assign({}, (u()(t), t));
          return (0, v.jsx)(w.Provider, {
            value: { name: e.name },
            children: (0, v.jsx)(f.Qr, a()({}, e)),
          });
        },
        K = function () {
          var t = l.useContext(w),
            e = l.useContext(y),
            n = (0, f.Gc)(),
            s = n.getFieldState,
            r = n.formState,
            i = s(t.name, r);
          if (!t)
            throw new Error('useFormField should be used within <FormField>');
          var c = e.id;
          return a()(
            {
              id: c,
              name: t.name,
              formItemId: ''.concat(c, '-form-item'),
              formDescriptionId: ''.concat(c, '-form-item-description'),
              formMessageId: ''.concat(c, '-form-item-message'),
            },
            i,
          );
        },
        Z = l.forwardRef(function (t, e) {
          var n = t.className,
            s = r()(t, m),
            i = l.useId();
          return (0, v.jsx)(y.Provider, {
            value: { id: i },
            children: (0, v.jsx)(
              'div',
              a()({ ref: e, className: (0, p.cn)('space-y-2', n) }, s),
            ),
          });
        });
      Z.displayName = 'FormItem';
      var C = l.memo(Z),
        P = l.forwardRef(function (t, e) {
          var n = t.className,
            s = t.tooltip,
            i = r()(t, h),
            c = K(),
            u = c.error,
            o = c.formItemId;
          return (0, v.jsxs)(
            d._,
            a()(
              a()(
                {
                  ref: e,
                  className: (0, p.cn)(
                    u && 'text-destructive',
                    n,
                    'flex pb-0.5',
                  ),
                  htmlFor: o,
                },
                i,
              ),
              {},
              { children: [i.children, s && (0, v.jsx)(g.Z4, { tooltip: s })] },
            ),
          );
        });
      P.displayName = 'FormLabel';
      var N = l.forwardRef(function (t, e) {
        var n = Object.assign({}, (u()(t), t)),
          s = K(),
          r = s.error,
          i = s.formItemId,
          c = s.formDescriptionId,
          l = s.formMessageId;
        return (0, v.jsx)(
          o.g7,
          a()(
            {
              ref: e,
              id: i,
              'aria-describedby': r
                ? ''.concat(c, ' ').concat(l)
                : ''.concat(c),
              'aria-invalid': !!r,
            },
            n,
          ),
        );
      });
      N.displayName = 'FormControl';
      var T = l.forwardRef(function (t, e) {
        var n = t.className,
          s = r()(t, x),
          i = K().formDescriptionId;
        return (0, v.jsx)(
          'p',
          a()(
            {
              ref: e,
              id: i,
              className: (0, p.cn)('text-sm text-muted-foreground', n),
            },
            s,
          ),
        );
      });
      T.displayName = 'FormDescription';
      var F = l.forwardRef(function (t, e) {
        var n = t.className,
          s = t.children,
          i = r()(t, b),
          c = K(),
          u = c.error,
          o = c.formMessageId,
          l = u ? String(null == u ? void 0 : u.message) : s;
        return l
          ? (0, v.jsx)(
              'p',
              a()(
                a()(
                  {
                    ref: e,
                    id: o,
                    className: (0, p.cn)(
                      'text-sm font-medium text-destructive',
                      n,
                    ),
                  },
                  i,
                ),
                {},
                { children: l },
              ),
            )
          : null;
      });
      F.displayName = 'FormMessage';
    },
    65038: function (t, e, n) {
      'use strict';
      n.d(e, {
        _: function () {
          return g;
        },
      });
      var s = n(97857),
        r = n.n(s),
        i = n(13769),
        a = n.n(i),
        c = n(49102),
        u = n(45139),
        o = n(62435),
        l = n(27080),
        f = n(86074),
        d = ['className'],
        p = (0, u.j)(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        ),
        g = o.forwardRef(function (t, e) {
          var n = t.className,
            s = a()(t, d);
          return (0, f.jsx)(
            c.f,
            r()({ ref: e, className: (0, l.cn)(p(), n) }, s),
          );
        });
      g.displayName = c.f.displayName;
    },
    96330: function (t, e, n) {
      'use strict';
      n.d(e, {
        K1: function () {
          return d;
        },
        Rx: function () {
          return i;
        },
        S8: function () {
          return u;
        },
        Vr: function () {
          return o;
        },
        cG: function () {
          return a;
        },
        ld: function () {
          return l;
        },
        n_: function () {
          return f;
        },
        oQ: function () {
          return c;
        },
      });
      var s = n(9783),
        r = n.n(s),
        i = (function (t) {
          return (
            (t.Dataset = 'dataset'),
            (t.Testing = 'testing'),
            (t.Configuration = 'configuration'),
            (t.KnowledgeGraph = 'knowledgeGraph'),
            t
          );
        })({}),
        a = (function (t) {
          return (
            (t.UNSTART = '0'),
            (t.RUNNING = '1'),
            (t.CANCEL = '2'),
            (t.DONE = '3'),
            (t.FAIL = '4'),
            t
          );
        })({}),
        c = (function (t) {
          return (
            (t.Improvise = 'Improvise'),
            (t.Precise = 'Precise'),
            (t.Balance = 'Balance'),
            t
          );
        })({}),
        u = r()(
          r()(
            r()({}, c.Improvise, {
              temperature: 0.8,
              top_p: 0.9,
              frequency_penalty: 0.1,
              presence_penalty: 0.1,
              max_tokens: 4096,
            }),
            c.Precise,
            {
              temperature: 0.2,
              top_p: 0.75,
              frequency_penalty: 0.5,
              presence_penalty: 0.5,
              max_tokens: 4096,
            },
          ),
          c.Balance,
          {
            temperature: 0.5,
            top_p: 0.85,
            frequency_penalty: 0.3,
            presence_penalty: 0.2,
            max_tokens: 4096,
          },
        ),
        o = (function (t) {
          return (
            (t.Embedding = 'embedding'),
            (t.Chat = 'chat'),
            (t.Image2text = 'image2text'),
            (t.Speech2text = 'speech2text'),
            (t.Rerank = 'rerank'),
            (t.TTS = 'tts'),
            t
          );
        })({}),
        l = (function (t) {
          return (t.DocumentId = 'doc_id'), (t.KnowledgeId = 'id'), t;
        })({}),
        f = (function (t) {
          return (t.Virtual = 'virtual'), (t.Visual = 'visual'), t;
        })({}),
        d = (function (t) {
          return (
            (t.Naive = 'naive'),
            (t.Qa = 'qa'),
            (t.Resume = 'resume'),
            (t.Manual = 'manual'),
            (t.Table = 'table'),
            (t.Paper = 'paper'),
            (t.Book = 'book'),
            (t.Laws = 'laws'),
            (t.Presentation = 'presentation'),
            (t.Picture = 'picture'),
            (t.One = 'one'),
            (t.Audio = 'audio'),
            (t.Email = 'email'),
            (t.Tag = 'tag'),
            (t.KnowledgeGraph = 'knowledge_graph'),
            t
          );
        })({});
    },
    10541: function (t, e, n) {
      'use strict';
      n.d(e, {
        $F: function () {
          return V;
        },
        $G: function () {
          return I;
        },
        E2: function () {
          return F;
        },
        L5: function () {
          return N;
        },
        MA: function () {
          return q;
        },
        ME: function () {
          return T;
        },
        Og: function () {
          return G;
        },
        PX: function () {
          return Z;
        },
        Q7: function () {
          return D;
        },
        Sq: function () {
          return M;
        },
        VJ: function () {
          return C;
        },
        aD: function () {
          return S;
        },
        aX: function () {
          return L;
        },
        dT: function () {
          return j;
        },
        lX: function () {
          return O;
        },
        lx: function () {
          return A;
        },
        pY: function () {
          return P;
        },
        rd: function () {
          return E;
        },
        uG: function () {
          return Q;
        },
        w9: function () {
          return K;
        },
        wq: function () {
          return z;
        },
        z5: function () {
          return R;
        },
      });
      var s = n(97857),
        r = n.n(s),
        i = n(15009),
        a = n.n(i),
        c = n(99289),
        u = n.n(c),
        o = n(5574),
        l = n.n(o),
        f = n(54707),
        d = n(73955),
        p = n(78551),
        g = n(4614),
        v = n(30202),
        m = n(4527),
        h = n(99346),
        x = n(58580),
        b = n(45360),
        k = n(62435),
        y = n(42028),
        w = n(2938),
        _ = n(96100),
        K = function () {
          var t = (0, y.lr)();
          return l()(t, 1)[0].get('id') || '';
        },
        Z = function () {
          var t,
            e = K(),
            n = (0, p.a)({
              queryKey: ['fetchKnowledgeDetail'],
              initialData: {},
              gcTime: 0,
              queryFn:
                ((t = u()(
                  a()().mark(function t() {
                    var n, s, r;
                    return a()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), d.ZP.get_kb_detail({ kb_id: e })
                            );
                          case 2:
                            return (
                              (s = t.sent),
                              (r = s.data),
                              t.abrupt(
                                'return',
                                null !== (n = null == r ? void 0 : r.data) &&
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
        C = function () {
          var t,
            e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = (0, p.a)({
              queryKey: ['fetchKnowledgeList'],
              initialData: [],
              gcTime: 0,
              queryFn:
                ((t = u()(
                  a()().mark(function t() {
                    var n, s, r, i, c;
                    return a()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, d.Fb)();
                          case 2:
                            return (
                              (r = t.sent),
                              (i = r.data),
                              (c =
                                null !==
                                  (n =
                                    null == i ||
                                    null === (s = i.data) ||
                                    void 0 === s
                                      ? void 0
                                      : s.kbs) && void 0 !== n
                                  ? n
                                  : []),
                              t.abrupt(
                                'return',
                                e
                                  ? c.filter(function (t) {
                                      return t.chunk_num > 0;
                                    })
                                  : c,
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
        P = function () {
          var t = C().list;
          return null == t
            ? void 0
            : t.map(function (t) {
                return { label: t.name, value: t.id };
              });
        },
        N = function () {
          var t,
            e = (0, w.Qe)(),
            n = e.searchString,
            s = e.handleInputChange,
            r = (0, x.Z)(n, { wait: 500 }),
            i = (0, g.N)({
              queryKey: ['infiniteFetchKnowledgeList', r],
              queryFn:
                ((t = u()(
                  a()().mark(function t(e) {
                    var n, s, i, c, u;
                    return a()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (s = e.pageParam),
                              (t.next = 3),
                              (0, d.Fb)({ page: s, page_size: 30, keywords: r })
                            );
                          case 3:
                            return (
                              (i = t.sent),
                              (c = i.data),
                              (u =
                                null !== (n = null == c ? void 0 : c.data) &&
                                void 0 !== n
                                  ? n
                                  : []),
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
              initialPageParam: 1,
              getNextPageParam: function (t, e, n) {
                if (30 * n <= t.total) return n + 1;
              },
            }),
            c = i.data,
            o = i.error,
            l = i.fetchNextPage,
            f = i.hasNextPage,
            p = i.isFetching;
          return {
            data: c,
            loading: p,
            error: o,
            fetchNextPage: l,
            hasNextPage: f,
            isFetching: p,
            isFetchingNextPage: i.isFetchingNextPage,
            status: i.status,
            handleInputChange: s,
            searchString: n,
          };
        },
        T = function () {
          var t,
            e = (0, v.NL)(),
            n = (0, m.D)({
              mutationKey: ['infiniteFetchKnowledgeList'],
              mutationFn:
                ((t = u()(
                  a()().mark(function t(n) {
                    var s, r, i;
                    return a()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), d.ZP.createKb(n);
                          case 2:
                            return (
                              (s = t.sent),
                              (r = s.data),
                              0 === (i = void 0 === r ? {} : r).code &&
                                (b.ZP.success(
                                  f.Z.t(
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
                              t.abrupt('return', i)
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
        F = function () {
          var t,
            e = (0, v.NL)(),
            n = (0, m.D)({
              mutationKey: ['deleteKnowledge'],
              mutationFn:
                ((t = u()(
                  a()().mark(function t(n) {
                    var s, r, i;
                    return a()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), d.ZP.rmKb({ kb_id: n });
                          case 2:
                            return (
                              (r = t.sent),
                              0 === (i = r.data).code &&
                                (b.ZP.success(f.Z.t('message.deleted')),
                                e.invalidateQueries({
                                  queryKey: ['infiniteFetchKnowledgeList'],
                                })),
                              t.abrupt(
                                'return',
                                null !== (s = null == i ? void 0 : i.data) &&
                                  void 0 !== s
                                  ? s
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
        q = function () {
          var t,
            e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = K(),
            s = (0, v.NL)(),
            i = (0, m.D)({
              mutationKey: ['saveKnowledge'],
              mutationFn:
                ((t = u()(
                  a()().mark(function t(i) {
                    var c, u, o;
                    return a()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              d.ZP.updateKb(
                                r()(
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
                              (c = t.sent),
                              (u = c.data),
                              0 === (o = void 0 === u ? {} : u).code &&
                                (b.ZP.success(f.Z.t('message.updated')),
                                e
                                  ? s.invalidateQueries({
                                      queryKey: ['fetchKnowledgeListByPage'],
                                    })
                                  : s.invalidateQueries({
                                      queryKey: ['fetchKnowledgeDetail'],
                                    })),
                              t.abrupt('return', o)
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
            data: i.data,
            loading: i.isPending,
            saveKnowledgeConfiguration: i.mutateAsync,
          };
        },
        L = function () {
          var t,
            e = K(),
            n = (0, _.fz)(),
            s = n.page,
            i = n.size,
            c = (0, m.D)({
              mutationKey: ['testChunk'],
              gcTime: 0,
              mutationFn:
                ((t = u()(
                  a()().mark(function t(n) {
                    var c, u, o, l, f;
                    return a()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              d.ZP.retrieval_test(
                                r()(
                                  r()({}, n),
                                  {},
                                  {
                                    kb_id:
                                      null !== (c = n.kb_id) && void 0 !== c
                                        ? c
                                        : e,
                                    page: s,
                                    size: i,
                                  },
                                ),
                              )
                            );
                          case 2:
                            if (((o = t.sent), 0 !== (l = o.data).code)) {
                              t.next = 7;
                              break;
                            }
                            return (
                              (f = l.data),
                              t.abrupt(
                                'return',
                                r()(r()({}, f), {}, { documents: f.doc_aggs }),
                              )
                            );
                          case 7:
                            return t.abrupt(
                              'return',
                              null !== (u = null == l ? void 0 : l.data) &&
                                void 0 !== u
                                ? u
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
            o = c.data;
          return {
            data: null != o ? o : { chunks: [], documents: [], total: 0 },
            loading: c.isPending,
            testChunk: c.mutateAsync,
          };
        },
        j = function () {
          var t,
            e = K(),
            n = (0, _.fz)(),
            s = n.page,
            i = n.size,
            c = (0, m.D)({
              mutationKey: ['testChunkAll'],
              gcTime: 0,
              mutationFn:
                ((t = u()(
                  a()().mark(function t(n) {
                    var c, u, o, l, f;
                    return a()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              d.ZP.retrieval_test(
                                r()(
                                  r()({}, n),
                                  {},
                                  {
                                    kb_id:
                                      null !== (c = n.kb_id) && void 0 !== c
                                        ? c
                                        : e,
                                    doc_ids: [],
                                    page: s,
                                    size: i,
                                  },
                                ),
                              )
                            );
                          case 2:
                            if (((o = t.sent), 0 !== (l = o.data).code)) {
                              t.next = 7;
                              break;
                            }
                            return (
                              (f = l.data),
                              t.abrupt(
                                'return',
                                r()(r()({}, f), {}, { documents: f.doc_aggs }),
                              )
                            );
                          case 7:
                            return t.abrupt(
                              'return',
                              null !== (u = null == l ? void 0 : l.data) &&
                                void 0 !== u
                                ? u
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
            o = c.data;
          return {
            data: null != o ? o : { chunks: [], documents: [], total: 0 },
            loading: c.isPending,
            testChunkAll: c.mutateAsync,
          };
        },
        I = function () {
          return (0, h.B)({ mutationKey: ['testChunk'] }) > 0;
        },
        S = function () {
          var t;
          return null !==
            (t = (0, h.S)({
              filters: { mutationKey: ['testChunk'] },
              select: function (t) {
                return t.state.data;
              },
            }).at(-1)) && void 0 !== t
            ? t
            : { chunks: [], documents: [], total: 0 };
        },
        D = function () {
          return (
            'success' ===
            (0, h.S)({
              filters: { mutationKey: ['testChunk'] },
              select: function (t) {
                return t.state.status;
              },
            }).at(-1)
          );
        },
        A = function () {
          return (
            'success' ===
            (0, h.S)({
              filters: { mutationKey: ['testChunkAll'] },
              select: function (t) {
                return t.state.status;
              },
            }).at(-1)
          );
        },
        z = function () {
          var t;
          return null !==
            (t = (0, h.S)({
              filters: { mutationKey: ['testChunkAll'] },
              select: function (t) {
                return t.state.data;
              },
            }).at(-1)) && void 0 !== t
            ? t
            : { chunks: [], documents: [], total: 0 };
        },
        O = function () {
          var t,
            e = K(),
            n = (0, p.a)({
              queryKey: ['fetchTagList'],
              initialData: [],
              gcTime: 0,
              queryFn:
                ((t = u()(
                  a()().mark(function t() {
                    var n, s, r;
                    return a()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, d.QL)(e);
                          case 2:
                            return (
                              (n = t.sent),
                              (s = n.data),
                              (r = (null == s ? void 0 : s.data) || []),
                              t.abrupt('return', r)
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
        Q = function () {
          var t,
            e = K(),
            n = (0, v.NL)(),
            s = (0, m.D)({
              mutationKey: ['deleteTag'],
              mutationFn:
                ((t = u()(
                  a()().mark(function t(s) {
                    var r, i, c;
                    return a()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, d.tc)(e, s);
                          case 2:
                            return (
                              (i = t.sent),
                              0 === (c = i.data).code &&
                                (b.ZP.success(f.Z.t('message.deleted')),
                                n.invalidateQueries({
                                  queryKey: ['fetchTagList'],
                                })),
                              t.abrupt(
                                'return',
                                null !== (r = null == c ? void 0 : c.data) &&
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
            data: s.data,
            loading: s.isPending,
            deleteTag: s.mutateAsync,
          };
        },
        M = function () {
          var t,
            e = K(),
            n = (0, v.NL)(),
            s = (0, m.D)({
              mutationKey: ['renameTag'],
              mutationFn:
                ((t = u()(
                  a()().mark(function t(s) {
                    var r, i, c;
                    return a()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, d.Re)(e, s);
                          case 2:
                            return (
                              (i = t.sent),
                              0 === (c = i.data).code &&
                                (b.ZP.success(f.Z.t('message.modified')),
                                n.invalidateQueries({
                                  queryKey: ['fetchTagList'],
                                })),
                              t.abrupt(
                                'return',
                                null !== (r = null == c ? void 0 : c.data) &&
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
            data: s.data,
            loading: s.isPending,
            renameTag: s.mutateAsync,
          };
        },
        R = function () {
          return (0, h.B)({ mutationKey: ['renameTag'] }) > 0;
        },
        E = function () {
          var t,
            e = (0, k.useState)([]),
            n = l()(e, 2),
            s = n[0],
            r = n[1],
            i = (0, p.a)({
              queryKey: ['fetchTagListByKnowledgeIds'],
              enabled: s.length > 0,
              initialData: [],
              gcTime: 0,
              queryFn:
                ((t = u()(
                  a()().mark(function t() {
                    var e, n, r;
                    return a()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              d.ZP.listTagByKnowledgeIds({
                                kb_ids: s.join(','),
                              })
                            );
                          case 2:
                            return (
                              (e = t.sent),
                              (n = e.data),
                              (r = (null == n ? void 0 : n.data) || []),
                              t.abrupt('return', r)
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
          return { list: i.data, loading: i.isFetching, setKnowledgeIds: r };
        };
      function V() {
        var t,
          e = K(),
          n = (0, p.a)({
            queryKey: ['fetchKnowledgeGraph', e],
            initialData: { graph: {}, mind_map: {} },
            enabled: !!e,
            gcTime: 0,
            queryFn:
              ((t = u()(
                a()().mark(function t() {
                  var n, s;
                  return a()().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), (0, d.$V)(e);
                        case 2:
                          return (
                            (n = t.sent),
                            (s = n.data),
                            t.abrupt('return', null == s ? void 0 : s.data)
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
      var G = function () {
        var t,
          e = K(),
          n = (0, v.NL)(),
          s = (0, m.D)({
            mutationKey: ['removeKnowledgeGraph'],
            mutationFn:
              ((t = u()(
                a()().mark(function t() {
                  var s, r;
                  return a()().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), (0, d.sX)(e);
                        case 2:
                          return (
                            (s = t.sent),
                            0 === (r = s.data).code &&
                              (b.ZP.success(f.Z.t('message.deleted')),
                              n.invalidateQueries({
                                queryKey: ['fetchKnowledgeGraph'],
                              })),
                            t.abrupt('return', null == r ? void 0 : r.code)
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
          data: s.data,
          loading: s.isPending,
          removeKnowledgeGraph: s.mutateAsync,
        };
      };
    },
    38392: function (t, e, n) {
      'use strict';
      n.d(e, {
        DC: function () {
          return L;
        },
        Ju: function () {
          return D;
        },
        OR: function () {
          return I;
        },
        T: function () {
          return q;
        },
        X7: function () {
          return A;
        },
        hl: function () {
          return F;
        },
        uZ: function () {
          return S;
        },
        ux: function () {
          return j;
        },
      });
      var s = n(97857),
        r = n.n(s),
        i = n(19632),
        a = n.n(i),
        c = n(9783),
        u = n.n(c),
        o = n(5574),
        l = n.n(o),
        f = n(15009),
        d = n.n(f),
        p = n(99289),
        g = n.n(p),
        v = n(46693),
        m = n(96330),
        h = n(72668),
        x = n(31098),
        b = n(33092),
        k = n(78551),
        y = n(30202),
        w = n(4527),
        _ = n(86250),
        K = n(45360),
        Z = n(62435),
        C = n(67421),
        P = n(86074),
        N = function (t) {
          var e,
            n = (0, k.a)({
              queryKey: ['llmList'],
              initialData: {},
              queryFn:
                ((e = g()(
                  d()().mark(function e() {
                    var n, s, r;
                    return d()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), h.ZP.llm_list({ model_type: t })
                            );
                          case 2:
                            return (
                              (s = e.sent),
                              (r = s.data),
                              e.abrupt(
                                'return',
                                null !== (n = null == r ? void 0 : r.data) &&
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
                  return e.apply(this, arguments);
                }),
            });
          return n.data;
        };
      function T(t) {
        return {
          label: (0, P.jsxs)(_.Z, {
            align: 'center',
            gap: 6,
            children: [
              (0, P.jsx)(v.$, {
                name: (0, b.Os)(t.fid, t.llm_name),
                width: 26,
                height: 26,
                size: 'small',
              }),
              (0, P.jsx)('span', { children: (0, b.KE)(t.llm_name) }),
            ],
          }),
          value: ''.concat(t.llm_name, '@').concat(t.fid),
          disabled: !t.available,
          is_tools: t.is_tools,
        };
      }
      var F = function () {
          var t = N(),
            e = (0, Z.useCallback)(
              function () {
                var e = m.Vr.Image2text,
                  n = e.toUpperCase();
                return Object.entries(t)
                  .map(function (t) {
                    var s = l()(t, 2);
                    return {
                      label: s[0],
                      options: s[1]
                        .filter(function (t) {
                          return (
                            (t.model_type.includes(e) ||
                              (t.tags && t.tags.includes(n))) &&
                            t.available
                          );
                        })
                        .map(T),
                    };
                  })
                  .filter(function (t) {
                    return t.options.length > 0;
                  });
              },
              [t],
            ),
            n = (0, Z.useCallback)(
              function (e) {
                return Object.entries(t)
                  .filter(function (t) {
                    var n = l()(t, 2)[1];
                    return (
                      !e ||
                      n.some(function (t) {
                        return t.model_type.includes(e);
                      })
                    );
                  })
                  .map(function (t) {
                    var n = l()(t, 2);
                    return {
                      label: n[0],
                      options: n[1]
                        .filter(function (t) {
                          return (
                            (!e || t.model_type.includes(e)) && t.available
                          );
                        })
                        .map(T),
                    };
                  })
                  .filter(function (t) {
                    return t.options.length > 0;
                  });
              },
              [t],
            );
          return u()(
            u()(
              u()(
                u()(
                  u()(
                    u()({}, m.Vr.Chat, n(m.Vr.Chat)),
                    m.Vr.Embedding,
                    n(m.Vr.Embedding),
                  ),
                  m.Vr.Image2text,
                  e(),
                ),
                m.Vr.Speech2text,
                n(m.Vr.Speech2text),
              ),
              m.Vr.Rerank,
              n(m.Vr.Rerank),
            ),
            m.Vr.TTS,
            n(m.Vr.TTS),
          );
        },
        q = function (t) {
          var e = F();
          return t.reduce(function (t, n) {
            return (
              e[n].forEach(function (e) {
                var n,
                  s = t.find(function (t) {
                    return t.label === e.label;
                  });
                s ? (n = s.options).push.apply(n, a()(e.options)) : t.push(e);
              }),
              t
            );
          }, []);
        },
        L = function () {
          var t,
            e,
            n,
            s,
            i =
              ((e = (0, k.a)({
                queryKey: ['myLlmList'],
                initialData: {},
                gcTime: 0,
                queryFn:
                  ((t = g()(
                    d()().mark(function t() {
                      var e, n, s;
                      return d()().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), h.ZP.my_llm();
                            case 2:
                              return (
                                (n = t.sent),
                                (s = n.data),
                                t.abrupt(
                                  'return',
                                  null !== (e = null == s ? void 0 : s.data) &&
                                    void 0 !== e
                                    ? e
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
              })),
              { data: e.data, loading: e.isFetching }),
            a = i.data,
            c = i.loading,
            u =
              ((s = (0, k.a)({
                queryKey: ['factoryList'],
                initialData: [],
                gcTime: 0,
                queryFn:
                  ((n = g()(
                    d()().mark(function t() {
                      var e, n, s;
                      return d()().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), h.ZP.factories_list();
                            case 2:
                              return (
                                (n = t.sent),
                                (s = n.data),
                                t.abrupt(
                                  'return',
                                  null !== (e = null == s ? void 0 : s.data) &&
                                    void 0 !== e
                                    ? e
                                    : [],
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
                    return n.apply(this, arguments);
                  }),
              })),
              { data: s.data, loading: s.isFetching }),
            o = u.data,
            f = u.loading;
          return {
            myLlmList: (0, Z.useMemo)(
              function () {
                return Object.entries(a).map(function (t) {
                  var e,
                    n,
                    s = l()(t, 2),
                    i = s[0],
                    a = s[1];
                  return r()(
                    r()(
                      {
                        name: i,
                        logo:
                          null !==
                            (e =
                              null ===
                                (n = o.find(function (t) {
                                  return t.name === i;
                                })) || void 0 === n
                                ? void 0
                                : n.logo) && void 0 !== e
                            ? e
                            : '',
                      },
                      a,
                    ),
                    {},
                    {
                      llm: a.llm.map(function (t) {
                        return r()(r()({}, t), {}, { name: t.name });
                      }),
                    },
                  );
                });
              },
              [a, o],
            ),
            factoryList: (0, Z.useMemo)(
              function () {
                var t = o.filter(function (t) {
                  return Object.keys(a).every(function (e) {
                    return e !== t.name;
                  });
                });
                return (0, x.tJ)(t);
              },
              [o, a],
            ),
            loading: c || f,
          };
        },
        j = function () {
          var t,
            e = (0, y.NL)(),
            n = (0, C.$G)().t,
            s = (0, w.D)({
              mutationKey: ['saveApiKey'],
              mutationFn:
                ((t = g()(
                  d()().mark(function t(s) {
                    var r, i;
                    return d()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), h.ZP.set_api_key(s);
                          case 2:
                            return (
                              (r = t.sent),
                              0 === (i = r.data).code &&
                                (K.ZP.success(n('message.modified')),
                                e.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                e.invalidateQueries({
                                  queryKey: ['factoryList'],
                                })),
                              t.abrupt('return', i.code)
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
            data: s.data,
            loading: s.isPending,
            saveApiKey: s.mutateAsync,
          };
        },
        I = function () {
          var t,
            e = (0, C.$G)().t,
            n = (0, w.D)({
              mutationKey: ['saveTenantInfo'],
              mutationFn:
                ((t = g()(
                  d()().mark(function t(n) {
                    var s, r;
                    return d()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), h.ZP.set_tenant_info(n);
                          case 2:
                            return (
                              (s = t.sent),
                              0 === (r = s.data).code &&
                                K.ZP.success(e('message.modified')),
                              t.abrupt('return', r.code)
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
            saveTenantInfo: n.mutateAsync,
          };
        },
        S = function () {
          var t,
            e = (0, y.NL)(),
            n = (0, C.$G)().t,
            s = (0, w.D)({
              mutationKey: ['addLlm'],
              mutationFn:
                ((t = g()(
                  d()().mark(function t(s) {
                    var r, i;
                    return d()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), h.ZP.add_llm(s);
                          case 2:
                            return (
                              (r = t.sent),
                              0 === (i = r.data).code &&
                                (e.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                e.invalidateQueries({
                                  queryKey: ['factoryList'],
                                }),
                                K.ZP.success(n('message.modified'))),
                              t.abrupt('return', i.code)
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
          return { data: s.data, loading: s.isPending, addLlm: s.mutateAsync };
        },
        D = function () {
          var t,
            e = (0, y.NL)(),
            n = (0, C.$G)().t,
            s = (0, w.D)({
              mutationKey: ['deleteLlm'],
              mutationFn:
                ((t = g()(
                  d()().mark(function t(s) {
                    var r, i;
                    return d()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), h.ZP.delete_llm(s);
                          case 2:
                            return (
                              (r = t.sent),
                              0 === (i = r.data).code &&
                                (e.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                e.invalidateQueries({
                                  queryKey: ['factoryList'],
                                }),
                                K.ZP.success(n('message.deleted'))),
                              t.abrupt('return', i.code)
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
            data: s.data,
            loading: s.isPending,
            deleteLlm: s.mutateAsync,
          };
        },
        A = function () {
          var t,
            e = (0, y.NL)(),
            n = (0, C.$G)().t,
            s = (0, w.D)({
              mutationKey: ['deleteFactory'],
              mutationFn:
                ((t = g()(
                  d()().mark(function t(s) {
                    var r, i;
                    return d()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), h.ZP.deleteFactory(s);
                          case 2:
                            return (
                              (r = t.sent),
                              0 === (i = r.data).code &&
                                (e.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                e.invalidateQueries({
                                  queryKey: ['factoryList'],
                                }),
                                K.ZP.success(n('message.deleted'))),
                              t.abrupt('return', i.code)
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
            data: s.data,
            loading: s.isPending,
            deleteFactory: s.mutateAsync,
          };
        };
    },
    2938: function (t, e, n) {
      'use strict';
      n.d(e, {
        H0: function () {
          return D;
        },
        IV: function () {
          return S;
        },
        NT: function () {
          return z;
        },
        Qe: function () {
          return L;
        },
        UL: function () {
          return j;
        },
        Y2: function () {
          return G;
        },
        c5: function () {
          return A;
        },
        cE: function () {
          return q;
        },
        ox: function () {
          return R;
        },
        sO: function () {
          return V;
        },
        vv: function () {
          return Q;
        },
        vy: function () {
          return M;
        },
        y7: function () {
          return O;
        },
        ye: function () {
          return I;
        },
      });
      var s = n(19632),
        r = n.n(s),
        i = n(97857),
        a = n.n(i),
        c = n(9783),
        u = n.n(c),
        o = n(15009),
        l = n.n(o),
        f = n(99289),
        d = n.n(f),
        p = n(5574),
        g = n.n(p),
        v = n(39918),
        m = n(1079),
        h = n(40169),
        x = n(60806),
        b = n(61921),
        k = n(71250),
        y = n(45360),
        w = n(87066),
        _ = n(24809),
        K = n(96486),
        Z = n(62435),
        C = n(67421),
        P = n(57632),
        N = n(86968),
        T = n(96100),
        F = n(39259),
        q = function () {
          var t = (0, Z.useState)({}),
            e = g()(t, 2),
            n = e[0],
            s = e[1];
          return {
            currentRecord: n,
            setRecord: function (t) {
              s(t);
            },
          };
        },
        L = function () {
          var t = (0, Z.useState)(''),
            e = g()(t, 2),
            n = e[0],
            s = e[1];
          return {
            handleInputChange: (0, Z.useCallback)(function (t) {
              var e = t.target.value;
              s(e);
            }, []),
            searchString: n,
          };
        },
        j = function () {
          var t = (0, C.$G)().i18n,
            e = (0, F.WH)().saveSetting;
          return function (n) {
            t.changeLanguage(h.Kj[n]), e({ language: n });
          };
        },
        I = function () {
          var t = (0, N.qM)('common').t,
            e = (0, T.fz)(),
            n = e.setPaginationParams,
            s = e.page,
            r = e.size,
            i = (0, Z.useCallback)(
              function (t, e) {
                n(t, e);
              },
              [n],
            ),
            a = (0, Z.useCallback)(
              function (t) {
                n(t.page, t.pageSize);
              },
              [n],
            );
          return {
            pagination: (0, Z.useMemo)(
              function () {
                return {
                  showQuickJumper: !0,
                  total: 0,
                  showSizeChanger: !0,
                  current: s,
                  pageSize: r,
                  pageSizeOptions: [1, 2, 10, 20, 50, 100],
                  onChange: i,
                  showTotal: function (e) {
                    return ''.concat(t('total'), ' ').concat(e);
                  },
                };
              },
              [t, i, s, r],
            ),
            setPagination: a,
          };
        },
        S = function () {
          var t = (0, Z.useState)({}),
            e = g()(t, 2),
            n = e[0],
            s = e[1],
            r = (0, Z.useCallback)(
              d()(
                l()().mark(function t() {
                  var e;
                  return l()().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), w.Z.get('/conf.json');
                        case 2:
                          (e = t.sent), s(e.data);
                        case 4:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              ),
              [],
            );
          return (
            (0, Z.useEffect)(
              function () {
                r();
              },
              [r],
            ),
            n
          );
        },
        D = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : x.Z.completeConversation,
            e = (0, Z.useState)({}),
            n = g()(e, 2),
            s = n[0],
            r = n[1],
            i = (0, Z.useState)(!0),
            c = g()(i, 2),
            o = c[0],
            f = c[1],
            p = (0, Z.useRef)(),
            m = (0, Z.useRef)(),
            h = (0, Z.useCallback)(function () {
              m.current = new AbortController();
            }, []),
            k = (0, Z.useCallback)(function () {
              p.current && clearTimeout(p.current),
                (p.current = setTimeout(function () {
                  r({}), clearTimeout(p.current);
                }, 1e3));
            }, []),
            y = (0, Z.useCallback)(
              (function () {
                var e = d()(
                  l()().mark(function e(n, s) {
                    var i, c, o, d, p, g, x, y, w, K;
                    return l()().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                h(),
                                (e.prev = 1),
                                f(!1),
                                (e.next = 5),
                                fetch(t, {
                                  method: 'POST',
                                  headers: u()(
                                    u()({}, v._n, (0, b.cD)()),
                                    'Content-Type',
                                    'application/json',
                                  ),
                                  body: JSON.stringify(n),
                                  signal:
                                    (null == s ? void 0 : s.signal) ||
                                    (null === (i = m.current) || void 0 === i
                                      ? void 0
                                      : i.signal),
                                })
                              );
                            case 5:
                              (o = e.sent),
                                (d = o.clone().json()),
                                (p =
                                  null == o ||
                                  null === (c = o.body) ||
                                  void 0 === c
                                    ? void 0
                                    : c
                                        .pipeThrough(new TextDecoderStream())
                                        .pipeThrough(new _.m())
                                        .getReader());
                            case 8:
                              return (
                                (e.next = 11), null == p ? void 0 : p.read()
                              );
                            case 11:
                              if (!(g = e.sent)) {
                                e.next = 19;
                                break;
                              }
                              if (((x = g.done), (y = g.value), !x)) {
                                e.next = 18;
                                break;
                              }
                              return (
                                console.info('done'), k(), e.abrupt('break', 21)
                              );
                            case 18:
                              try {
                                (w = JSON.parse(
                                  (null == y ? void 0 : y.data) || '',
                                )),
                                  'boolean' !=
                                    typeof (K = null == w ? void 0 : w.data) &&
                                    (console.info('data:', K),
                                    r(
                                      a()(
                                        a()({}, K),
                                        {},
                                        {
                                          conversationId:
                                            null == n
                                              ? void 0
                                              : n.conversation_id,
                                        },
                                      ),
                                    ));
                              } catch (t) {
                                console.warn(t);
                              }
                            case 19:
                              e.next = 8;
                              break;
                            case 21:
                              return (
                                console.info('done?'),
                                f(!0),
                                k(),
                                (e.next = 26),
                                d
                              );
                            case 26:
                              return (
                                (e.t0 = e.sent),
                                (e.t1 = o),
                                e.abrupt('return', {
                                  data: e.t0,
                                  response: e.t1,
                                })
                              );
                            case 31:
                              (e.prev = 31),
                                (e.t2 = e.catch(1)),
                                f(!0),
                                k(),
                                console.warn(e.t2);
                            case 36:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 31]],
                    );
                  }),
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [h, t, k],
            ),
            w = (0, Z.useCallback)(function () {
              var t;
              null === (t = m.current) || void 0 === t || t.abort();
            }, []);
          return {
            send: y,
            answer: s,
            done: o,
            setDone: f,
            resetAnswer: k,
            stopOutputMessage: w,
          };
        },
        A = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : x.Z.tts,
            e = (0, Z.useCallback)(
              (function () {
                var e = d()(
                  l()().mark(function e(n) {
                    var s, r;
                    return l()().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                fetch(t, {
                                  method: 'POST',
                                  headers: u()(
                                    u()({}, v._n, (0, b.cD)()),
                                    'Content-Type',
                                    'application/json',
                                  ),
                                  body: JSON.stringify(n),
                                })
                              );
                            case 2:
                              return (
                                (s = e.sent),
                                (e.prev = 3),
                                (e.next = 6),
                                s.clone().json()
                              );
                            case 6:
                              0 !== (null == (r = e.sent) ? void 0 : r.code) &&
                                y.ZP.error(null == r ? void 0 : r.message),
                                (e.next = 13);
                              break;
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(3)),
                                console.warn('🚀 ~ error:', e.t0);
                            case 13:
                              return e.abrupt('return', s);
                            case 14:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 10]],
                    );
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [t],
            );
          return { read: e };
        },
        z = function () {
          var t = (0, Z.useState)(''),
            e = g()(t, 2),
            n = e[0],
            s = e[1];
          return {
            handleInputChange: function (t) {
              var e = t.target.value
                .replaceAll('\\n', '\n')
                .replaceAll('\\t', '\t');
              s(e);
            },
            value: n,
            setValue: s,
          };
        },
        O = function () {
          var t = (0, Z.useState)([]),
            e = g()(t, 2),
            n = e[0],
            s = e[1],
            i = (function (t) {
              var e = (0, Z.useRef)(null),
                n = (0, Z.useCallback)(
                  function () {
                    var n;
                    t &&
                      (null === (n = e.current) ||
                        void 0 === n ||
                        n.scrollIntoView({ behavior: 'instant' }));
                  },
                  [t],
                );
              return (
                (0, Z.useEffect)(
                  function () {
                    n();
                  },
                  [n],
                ),
                e
              );
            })(n),
            c = (0, Z.useCallback)(function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : '';
              s(function (n) {
                return [].concat(r()(n), [
                  a()(a()({}, t), {}, { id: (0, k.Kj)(t) }),
                  {
                    role: m.Cs.Assistant,
                    content: e,
                    id: (0, k.Kj)(
                      a()(a()({}, t), {}, { role: m.Cs.Assistant }),
                    ),
                  },
                ]);
              });
            }, []),
            u = (0, Z.useCallback)(function (t) {
              s(function (e) {
                return [].concat(r()(e), [
                  a()(a()({}, t), {}, { id: (0, k.Kj)(t) }),
                ]);
              });
            }, []),
            o = (0, Z.useCallback)(function (t) {
              s(function (e) {
                var n;
                return [].concat(
                  r()(
                    null !== (n = null == e ? void 0 : e.slice(0, -1)) &&
                      void 0 !== n
                      ? n
                      : [],
                  ),
                  [
                    a()(
                      {
                        role: m.Cs.Assistant,
                        content: t.answer,
                        reference: t.reference,
                        id: (0, k.Kj)({ id: t.id, role: m.Cs.Assistant }),
                        prompt: t.prompt,
                        audio_binary: t.audio_binary,
                      },
                      (0, K.omit)(t, 'reference'),
                    ),
                  ],
                );
              });
            }, []),
            l = (0, Z.useCallback)(function (t) {
              s(function (e) {
                return -1 !==
                  e.findIndex(function (e) {
                    return e.id === t.id;
                  })
                  ? e.map(function (e) {
                      return e.id === t.id
                        ? a()(a()({}, e), {}, { content: t.answer })
                        : e;
                    })
                  : [].concat(r()(null != e ? e : []), [
                      a()(
                        {
                          role: m.Cs.Assistant,
                          content: t.answer,
                          reference: t.reference,
                          id: (0, k.Kj)({ id: t.id, role: m.Cs.Assistant }),
                          prompt: t.prompt,
                          audio_binary: t.audio_binary,
                        },
                        (0, K.omit)(t, 'reference'),
                      ),
                    ]);
              });
            }, []),
            f = (0, Z.useCallback)(function () {
              s(function (t) {
                var e;
                return null !== (e = null == t ? void 0 : t.slice(0, -2)) &&
                  void 0 !== e
                  ? e
                  : [];
              });
            }, []),
            d = (0, Z.useCallback)(
              function (t) {
                s(function (e) {
                  var n;
                  return null !==
                    (n =
                      null == e
                        ? void 0
                        : e.filter(function (e) {
                            return e.id !== t;
                          })) && void 0 !== n
                    ? n
                    : [];
                });
              },
              [s],
            ),
            p = (0, Z.useCallback)(
              function (t) {
                s(function (e) {
                  var n = e.findIndex(function (e) {
                    return e.id === t;
                  });
                  if (-1 !== n) {
                    var s,
                      i =
                        null !== (s = e.slice(0, n + 2)) && void 0 !== s
                          ? s
                          : [],
                      c = i.at(-1);
                    return (i = c
                      ? [].concat(r()(i.slice(0, -1)), [
                          a()(
                            a()({}, c),
                            {},
                            { content: '', reference: void 0, prompt: void 0 },
                          ),
                        ])
                      : i);
                  }
                  return e;
                });
              },
              [s],
            );
          return {
            ref: i,
            derivedMessages: n,
            setDerivedMessages: s,
            addNewestQuestion: c,
            addNewestAnswer: o,
            removeLatestMessage: f,
            removeMessageById: d,
            addNewestOneQuestion: u,
            addNewestOneAnswer: l,
            removeMessagesAfterCurrentMessage: p,
          };
        },
        Q = function (t) {
          var e = t.removeMessagesAfterCurrentMessage,
            n = t.sendMessage,
            s = t.messages,
            r = (0, Z.useCallback)(
              (function () {
                var t = d()(
                  l()().mark(function t(r) {
                    var i, c;
                    return l()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            r.id &&
                              (e(r.id),
                              -1 !==
                                (i = s.findIndex(function (t) {
                                  return t.id === r.id;
                                })) && (c = s.slice(0, i)),
                              n({
                                message: a()(
                                  a()({}, r),
                                  {},
                                  { id: (0, P.Z)() },
                                ),
                                messages: c,
                              }));
                          case 1:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e, n, s],
            );
          return { regenerateMessage: r };
        },
        M = function (t) {
          var e = (0, Z.useState)(''),
            n = g()(e, 2),
            s = n[0],
            r = n[1],
            i = (0, Z.useCallback)(function (t) {
              return function () {
                r(t);
              };
            }, []);
          return (
            (0, Z.useEffect)(
              function () {
                t && r(t);
              },
              [t],
            ),
            { selectedId: s, handleItemClick: i }
          );
        },
        R = function () {
          var t,
            e = (0, F.fS)(!0).data;
          return null !== (t = null == e ? void 0 : e.llm_id) && void 0 !== t
            ? t
            : '';
        },
        E = { naive: 128, knowledge_graph: 8192 },
        V = function (t) {
          return (0, Z.useCallback)(
            function (e) {
              e in E &&
                t.setFieldValue(['parser_config', 'chunk_token_num'], E[e]);
            },
            [t],
          );
        },
        G = function (t) {
          var e = t.form,
            n = t.visible,
            s = (0, Z.useRef)();
          (0, Z.useEffect)(
            function () {
              s.current = n;
            },
            [n],
          );
          var r = s.current;
          (0, Z.useEffect)(
            function () {
              !n && r && e.resetFields();
            },
            [e, r, n],
          );
        };
    },
    96100: function (t, e, n) {
      'use strict';
      n.d(e, {
        HK: function () {
          return f;
        },
        Uu: function () {
          return l;
        },
        fz: function () {
          return v;
        },
        nT: function () {
          return g;
        },
        pE: function () {
          return d;
        },
        wy: function () {
          return p;
        },
      });
      var s = n(5574),
        r = n.n(s),
        i = n(96330),
        a = n(62435),
        c = n(42028),
        u = (function (t) {
          return (t.Second = '2'), (t.Third = '3'), t;
        })({}),
        o = function (t) {
          return (0, c.TH)().pathname.split('/')[t] || '';
        },
        l = function () {
          return o(u.Second);
        },
        f = function () {
          return o(u.Third);
        },
        d = function () {
          var t = (0, c.lr)(),
            e = r()(t, 1)[0];
          return {
            documentId: e.get(i.ld.DocumentId) || '',
            knowledgeId: e.get(i.ld.KnowledgeId) || '',
          };
        },
        p = function () {
          var t = (0, c.s0)();
          return (0, a.useCallback)(
            function (e) {
              t(e, { state: { from: e } });
            },
            [t],
          );
        },
        g = function () {
          var t = (0, c.s0)(),
            e = d().knowledgeId;
          return (0, a.useCallback)(
            function () {
              t('/knowledge/'.concat(i.Rx.Dataset, '?id=').concat(e));
            },
            [e, t],
          );
        },
        v = function () {
          var t = (0, c.lr)(),
            e = r()(t, 2),
            n = e[0],
            s = e[1],
            i = (0, a.useCallback)(
              function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1,
                  e = arguments.length > 1 ? arguments[1] : void 0;
                n.set('page', t.toString()),
                  e && n.set('size', e.toString()),
                  s(n);
              },
              [s, n],
            );
          return {
            setPaginationParams: i,
            page: Number(n.get('page')) || 1,
            size: Number(n.get('size')) || 10,
          };
        };
    },
    73955: function (t, e, n) {
      'use strict';
      n.d(e, {
        $V: function () {
          return z;
        },
        Fb: function () {
          return Q;
        },
        QL: function () {
          return S;
        },
        Qh: function () {
          return M;
        },
        Re: function () {
          return A;
        },
        sX: function () {
          return O;
        },
        tc: function () {
          return D;
        },
      });
      var s = n(60806),
        r = n(66582),
        i = n(78158),
        a = s.Z.create_kb,
        c = s.Z.update_kb,
        u = s.Z.rm_kb,
        o = s.Z.get_kb_detail,
        l = s.Z.kb_list,
        f = s.Z.get_document_list,
        d = s.Z.document_change_status,
        p = s.Z.document_rm,
        g = s.Z.document_delete,
        v = s.Z.document_create,
        m = s.Z.document_change_parser,
        h = s.Z.document_thumbnails,
        x = s.Z.chunk_list,
        b = s.Z.create_chunk,
        k = s.Z.set_chunk,
        y = s.Z.get_chunk,
        w = s.Z.switch_chunk,
        _ = s.Z.rm_chunk,
        K = s.Z.retrieval_test,
        Z = s.Z.document_rename,
        C = s.Z.document_run,
        P = s.Z.document_upload,
        N = s.Z.web_crawl,
        T = s.Z.knowledge_graph,
        F = s.Z.document_infos,
        q = s.Z.upload_and_parse,
        L = s.Z.listTagByKnowledgeIds,
        j = {
          createKb: { url: a, method: 'post' },
          updateKb: { url: c, method: 'post' },
          rmKb: { url: u, method: 'post' },
          get_kb_detail: { url: o, method: 'get' },
          getList: { url: l, method: 'post' },
          get_document_list: { url: f, method: 'get' },
          document_change_status: { url: d, method: 'post' },
          document_rm: { url: p, method: 'post' },
          document_rename: { url: Z, method: 'post' },
          document_create: { url: v, method: 'post' },
          document_run: { url: C, method: 'post' },
          document_change_parser: { url: m, method: 'post' },
          document_thumbnails: { url: h, method: 'get' },
          document_upload: { url: P, method: 'post' },
          web_crawl: { url: N, method: 'post' },
          document_infos: { url: F, method: 'post' },
          setMeta: { url: s.Z.setMeta, method: 'post' },
          chunk_list: { url: x, method: 'post' },
          create_chunk: { url: b, method: 'post' },
          set_chunk: { url: k, method: 'post' },
          get_chunk: { url: y, method: 'get' },
          switch_chunk: { url: w, method: 'post' },
          rm_chunk: { url: _, method: 'post' },
          retrieval_test: { url: K, method: 'post' },
          knowledge_graph: { url: T, method: 'get' },
          document_delete: { url: g, method: 'delete' },
          upload_and_parse: { url: q, method: 'post' },
          listTagByKnowledgeIds: { url: L, method: 'get' },
        },
        I = (0, r.Z)(j, i.ZP),
        S = function (t) {
          return i.ZP.get(s.Z.listTag(t));
        },
        D = function (t, e) {
          return (0, i.v_)(s.Z.removeTag(t), { tags: e });
        },
        A = function (t, e) {
          var n = e.fromTag,
            r = e.toTag;
          return (0, i.v_)(s.Z.renameTag(t), { fromTag: n, toTag: r });
        };
      function z(t) {
        return i.ZP.get(s.Z.getKnowledgeGraph(t));
      }
      function O(t) {
        return i.ZP.delete(s.Z.getKnowledgeGraph(t));
      }
      var Q = function (t, e) {
          return i.ZP.post(s.Z.kb_list, { data: e || {}, params: t });
        },
        M = function (t, e) {
          return i.ZP.post(s.Z.get_document_list, { data: e || {}, params: t });
        };
      e.ZP = I;
    },
    71250: function (t, e, n) {
      'use strict';
      n.d(e, {
        Bl: function () {
          return l;
        },
        CE: function () {
          return p;
        },
        IC: function () {
          return u;
        },
        Kj: function () {
          return o;
        },
        hH: function () {
          return g;
        },
        mN: function () {
          return d;
        },
        mV: function () {
          return v;
        },
        o_: function () {
          return f;
        },
        od: function () {
          return h;
        },
        uq: function () {
          return x;
        },
      });
      var s = n(97857),
        r = n.n(s),
        i = n(1079),
        a = n(96486),
        c = n(57632),
        u = function (t) {
          return t !== i.Pc && '' !== t;
        },
        o = function (t) {
          return 'id' in t && t.id ? t.id : (0, c.Z)();
        },
        l = function (t) {
          var e;
          return null !==
            (e =
              null == t
                ? void 0
                : t.map(function (t) {
                    return r()(
                      r()({}, (0, a.omit)(t, 'reference')),
                      {},
                      { id: o(t) },
                    );
                  })) && void 0 !== e
            ? e
            : [];
        },
        f = function () {
          return (0, c.Z)().replace(/-/g, '');
        },
        d = function (t) {
          return ''.concat(t.role, '_').concat(t.id);
        },
        p = function (t) {
          return t
            .replace(/\\\[([\s\S]*?)\\\]/g, function (t, e) {
              return '$$'.concat(e, '$$');
            })
            .replace(/\\\(([\s\S]*?)\\\)/g, function (t, e) {
              return '$'.concat(e, '$');
            });
        };
      function g() {
        return (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''
        ).replace(
          /<think>([\s\S]*?)<\/think>/g,
          '<section class="think">$1</section>',
        );
      }
      function v(t) {
        return !1;
      }
      var m = ['image', 'table'];
      function h(t) {
        return m.some(function (e) {
          return e === t;
        });
      }
      function x() {
        return Object.values(i.uY).reduce(function (t, e) {
          return (t[e] = e !== i.uY.MaxTokensEnabled), t;
        }, {});
      }
    },
    33092: function (t, e, n) {
      'use strict';
      n.d(e, {
        KE: function () {
          return c;
        },
        Os: function () {
          return i;
        },
        Xy: function () {
          return a;
        },
      });
      var s = n(5574),
        r = n.n(s),
        i = function (t, e) {
          var n;
          return 'FastEmbed' === t
            ? null !== (n = e.split('/').at(0)) && void 0 !== n
              ? n
              : ''
            : t;
        },
        a = function (t) {
          var e = (null == t ? void 0 : t.split('@')) || [],
            n = r()(e, 2),
            s = n[0];
          return { fId: n[1], llmName: s };
        };
      function c(t) {
        var e;
        return null !== (e = t.split('__').at(0)) && void 0 !== e ? e : '';
      }
    },
    78131: function (t, e, n) {
      var s = {
        './akshare.svg': 26032,
        './api.svg': 30747,
        './arxiv.svg': 90854,
        './assistant.svg': 4159,
        './baidu-fanyi.svg': 83544,
        './baidu.svg': 92892,
        './begin.svg': 69779,
        './bing.svg': 55914,
        './cancel.svg': 8156,
        './chat-app-cube.svg': 34339,
        './chat-configuration-atom.svg': 57950,
        './chat-star.svg': 49570,
        './chunk-method/book-01.svg': 38726,
        './chunk-method/book-02.svg': 21357,
        './chunk-method/book-03.svg': 88093,
        './chunk-method/book-04.svg': 58355,
        './chunk-method/chunk-empty.svg': 16035,
        './chunk-method/knowledge-graph-01.svg': 42576,
        './chunk-method/knowledge-graph-02.svg': 46853,
        './chunk-method/law-01.svg': 54530,
        './chunk-method/law-02.svg': 75787,
        './chunk-method/manual-01.svg': 64179,
        './chunk-method/manual-02.svg': 40547,
        './chunk-method/manual-03.svg': 1437,
        './chunk-method/manual-04.svg': 81486,
        './chunk-method/media-01.svg': 33952,
        './chunk-method/media-02.svg': 93802,
        './chunk-method/naive-01.svg': 88488,
        './chunk-method/naive-02.svg': 74795,
        './chunk-method/one-01.svg': 88533,
        './chunk-method/one-02.svg': 99199,
        './chunk-method/one-03.svg': 23192,
        './chunk-method/one-04.svg': 72906,
        './chunk-method/paper-01.svg': 64018,
        './chunk-method/paper-02.svg': 77250,
        './chunk-method/presentation-01.svg': 87162,
        './chunk-method/presentation-02.svg': 59640,
        './chunk-method/qa-01.svg': 39420,
        './chunk-method/qa-02.svg': 55086,
        './chunk-method/resume-01.svg': 76604,
        './chunk-method/resume-02.svg': 96131,
        './chunk-method/table-01.svg': 42743,
        './chunk-method/table-02.svg': 84817,
        './chunk-method/tag-01.svg': 96953,
        './chunk-method/tag-02.svg': 82472,
        './concentrator.svg': 86933,
        './crawler.svg': 71090,
        './database.svg': 38575,
        './deepl.svg': 98301,
        './delete.svg': 71483,
        './disable.svg': 84377,
        './duck.svg': 24287,
        './email.svg': 10808,
        './enable.svg': 8207,
        './es.svg': 96492,
        './exesql.svg': 43004,
        './file-icon/aep.svg': 83889,
        './file-icon/ai.svg': 28897,
        './file-icon/avi.svg': 27635,
        './file-icon/css.svg': 52229,
        './file-icon/csv.svg': 50747,
        './file-icon/dmg.svg': 71691,
        './file-icon/doc.svg': 35354,
        './file-icon/docx.svg': 69139,
        './file-icon/eps.svg': 43279,
        './file-icon/exe.svg': 46462,
        './file-icon/fig.svg': 33179,
        './file-icon/folder.svg': 54168,
        './file-icon/gif.svg': 73845,
        './file-icon/html.svg': 53682,
        './file-icon/indd.svg': 26763,
        './file-icon/java.svg': 13916,
        './file-icon/jpeg.svg': 19525,
        './file-icon/jpg.svg': 24674,
        './file-icon/js.svg': 38470,
        './file-icon/json.svg': 56373,
        './file-icon/md.svg': 77357,
        './file-icon/mkv.svg': 49197,
        './file-icon/mp3.svg': 44538,
        './file-icon/mp4.svg': 52038,
        './file-icon/mpeg.svg': 77747,
        './file-icon/pdf.svg': 82938,
        './file-icon/png.svg': 71915,
        './file-icon/ppt.svg': 85173,
        './file-icon/pptx.svg': 62133,
        './file-icon/psd.svg': 30182,
        './file-icon/rss.svg': 38428,
        './file-icon/sql.svg': 78501,
        './file-icon/svg.svg': 72515,
        './file-icon/tiff.svg': 4502,
        './file-icon/txt.svg': 55773,
        './file-icon/wav.svg': 63645,
        './file-icon/webp.svg': 87260,
        './file-icon/xls.svg': 5343,
        './file-icon/xlsx.svg': 41475,
        './file-icon/xml.svg': 38476,
        './file-management.svg': 39121,
        './github.svg': 69696,
        './google-scholar.svg': 99466,
        './google.svg': 18176,
        './graph.svg': 57355,
        './invoke-ai.svg': 82888,
        './jin10.svg': 31801,
        './keyword.svg': 30552,
        './knowledge-base.svg': 87055,
        './knowledge-configration.svg': 96450,
        './knowledge-dataset.svg': 9385,
        './knowledge-testing.svg': 65376,
        './langfuse.svg': 6514,
        './llm/anthropic.svg': 74768,
        './llm/azure.svg': 99817,
        './llm/baai.svg': 93594,
        './llm/baichuan.svg': 6507,
        './llm/bedrock.svg': 30818,
        './llm/chat-minimax.svg': 69534,
        './llm/cohere.svg': 86198,
        './llm/deepseek.svg': 23476,
        './llm/fish-audio.svg': 97300,
        './llm/gemini.svg': 69156,
        './llm/github.svg': 29034,
        './llm/google-cloud.svg': 75383,
        './llm/google.svg': 93926,
        './llm/gpustack.svg': 41538,
        './llm/groq-next.svg': 43719,
        './llm/huggingface.svg': 20566,
        './llm/hunyuan.svg': 10266,
        './llm/jina.svg': 19765,
        './llm/lepton-ai.svg': 68341,
        './llm/lm-studio.svg': 77894,
        './llm/local-ai.svg': 97354,
        './llm/mistral.svg': 58247,
        './llm/modelscope.svg': 21248,
        './llm/moonshot.svg': 98184,
        './llm/nomic-ai.svg': 14860,
        './llm/novita-ai.svg': 72584,
        './llm/nvidia.svg': 33325,
        './llm/ollama.svg': 59488,
        './llm/open-router.svg': 23258,
        './llm/openai-api.svg': 63715,
        './llm/openai.svg': 81459,
        './llm/perfx-cloud.svg': 39886,
        './llm/ppio.svg': 89957,
        './llm/replicate.svg': 13492,
        './llm/sentence-transformers.svg': 85448,
        './llm/siliconflow.svg': 65762,
        './llm/spark.svg': 4216,
        './llm/stepfun.svg': 53618,
        './llm/tencent-cloud.svg': 96734,
        './llm/together-ai.svg': 65167,
        './llm/tongyi.svg': 74296,
        './llm/upstage.svg': 30464,
        './llm/vllm.svg': 91333,
        './llm/volc_engine.svg': 25210,
        './llm/voyage.svg': 6385,
        './llm/wenxin.svg': 34981,
        './llm/xinference.svg': 76577,
        './llm/yi.svg': 20447,
        './llm/yiyan.svg': 55103,
        './llm/youdao.svg': 81010,
        './llm/zhipu.svg': 19568,
        './login-avatars.svg': 68683,
        './login-background.svg': 89624,
        './login-star.svg': 31130,
        './logo-with-text-white.svg': 49313,
        './logout.svg': 67487,
        './minio.svg': 32382,
        './model-providers.svg': 70410,
        './moon.svg': 22350,
        './more-model.svg': 88458,
        './more.svg': 1333,
        './move.svg': 90076,
        './mysql.svg': 37124,
        './navigation-pointer.svg': 1979,
        './next-login-bg.svg': 33391,
        './note.svg': 28687,
        './nothing.svg': 47138,
        './paper-clip.svg': 2306,
        './password.svg': 33530,
        './plus-circle-fill.svg': 3804,
        './plus.svg': 75350,
        './profile.svg': 1769,
        './prompt.svg': 49261,
        './pubmed.svg': 78566,
        './qweather.svg': 56077,
        './redis.svg': 43867,
        './refresh.svg': 96198,
        './resize.svg': 80415,
        './run.svg': 91449,
        './select-files-end.svg': 14387,
        './select-files-start.svg': 16734,
        './selected-files-collapse.svg': 40975,
        './sso.svg': 51653,
        './storage.svg': 99021,
        './switch.svg': 1311,
        './team.svg': 52381,
        './template.svg': 63993,
        './translation.svg': 40724,
        './tushare.svg': 16521,
        './wencai.svg': 72835,
        './wikipedia.svg': 18684,
        './yahoo-finance.svg': 7957,
      };
      function r(t) {
        var e = i(t);
        return n(e);
      }
      function i(t) {
        if (!n.o(s, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return s[t];
      }
      (r.keys = function () {
        return Object.keys(s);
      }),
        (r.resolve = i),
        (t.exports = r),
        (r.id = 78131);
    },
    26032: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/akshare.ef2caf5a.svg';
    },
    30747: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/api.683cd994.svg';
    },
    90854: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/arxiv.bce2900b.svg';
    },
    4159: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/assistant.072e25ce.svg';
    },
    83544: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/baidu-fanyi.ab76b9e5.svg';
    },
    92892: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/baidu.75b1998a.svg';
    },
    69779: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/begin.1a91ddf7.svg';
    },
    55914: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/bing.dce94add.svg';
    },
    8156: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/cancel.4450bdfb.svg';
    },
    34339: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/chat-app-cube.0d35727d.svg';
    },
    57950: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/chat-configuration-atom.94c02c7a.svg';
    },
    49570: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/chat-star.7acfee68.svg';
    },
    38726: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/book-01.6e2a8a37.svg';
    },
    21357: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/book-02.4dd45490.svg';
    },
    88093: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/book-03.bd76b691.svg';
    },
    58355: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/book-04.594d0d1a.svg';
    },
    16035: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/chunk-empty.2b83673a.svg';
    },
    42576: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/knowledge-graph-01.597a96f3.svg';
    },
    46853: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/knowledge-graph-02.f36b7fab.svg';
    },
    54530: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/law-01.7070b7b3.svg';
    },
    75787: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/law-02.cae944e5.svg';
    },
    64179: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/manual-01.e3bb11d2.svg';
    },
    40547: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/manual-02.1a214f22.svg';
    },
    1437: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/manual-03.530928ca.svg';
    },
    81486: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/manual-04.63d43265.svg';
    },
    33952: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/media-01.086483b6.svg';
    },
    93802: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/media-02.d4c36e3e.svg';
    },
    88488: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/naive-01.f57569b7.svg';
    },
    74795: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/naive-02.3fe3610b.svg';
    },
    88533: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/one-01.5a1d6960.svg';
    },
    99199: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/one-02.0adb16f8.svg';
    },
    23192: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/one-03.466dec02.svg';
    },
    72906: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/one-04.3b10ee6d.svg';
    },
    64018: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/paper-01.e0019dcd.svg';
    },
    77250: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/paper-02.cf73a211.svg';
    },
    87162: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/presentation-01.06115027.svg';
    },
    59640: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/presentation-02.14d98352.svg';
    },
    39420: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/qa-01.ce8702ee.svg';
    },
    55086: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/qa-02.c181fcd6.svg';
    },
    76604: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/resume-01.75f1c93f.svg';
    },
    96131: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/resume-02.9c115ed1.svg';
    },
    42743: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/table-01.ec5d8a4d.svg';
    },
    84817: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/table-02.e4d2487c.svg';
    },
    96953: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/tag-01.ff996302.svg';
    },
    82472: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/tag-02.079b2b47.svg';
    },
    86933: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/concentrator.1353af83.svg';
    },
    71090: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/crawler.646367e0.svg';
    },
    38575: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/database.ef8eb5c8.svg';
    },
    98301: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/deepl.dc5ab23b.svg';
    },
    71483: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/delete.028228ac.svg';
    },
    84377: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/disable.55c8b50f.svg';
    },
    24287: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/duck.3285e948.svg';
    },
    10808: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/email.ac0507af.svg';
    },
    8207: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/enable.1b0d90c7.svg';
    },
    96492: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/es.d9969bbd.svg';
    },
    43004: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/exesql.696e27b1.svg';
    },
    83889: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/aep.90be9439.svg';
    },
    28897: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/ai.10138190.svg';
    },
    27635: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/avi.02b94047.svg';
    },
    52229: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/css.8f0ad31d.svg';
    },
    50747: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/csv.9a256b45.svg';
    },
    71691: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/dmg.57f9c02c.svg';
    },
    35354: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/doc.d8918cc4.svg';
    },
    69139: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/docx.38d543b1.svg';
    },
    43279: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/eps.3f104d7d.svg';
    },
    46462: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/exe.7c93a166.svg';
    },
    33179: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/fig.38a31555.svg';
    },
    54168: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/folder.84bcc794.svg';
    },
    73845: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/gif.06cc115a.svg';
    },
    53682: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/html.240ba9a0.svg';
    },
    26763: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/indd.22c71a5d.svg';
    },
    13916: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/java.bc10ed5b.svg';
    },
    19525: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/jpeg.b4ff21a3.svg';
    },
    24674: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/jpg.166b6e5d.svg';
    },
    38470: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/js.acbe367d.svg';
    },
    56373: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/json.79aa2433.svg';
    },
    77357: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/md.41082c13.svg';
    },
    49197: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/mkv.ed2674b7.svg';
    },
    44538: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/mp3.773e22e6.svg';
    },
    52038: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/mp4.4b08cc18.svg';
    },
    77747: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/mpeg.ca6e2469.svg';
    },
    82938: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/pdf.44344347.svg';
    },
    71915: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/png.b6606e2b.svg';
    },
    85173: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/ppt.1cb25ad9.svg';
    },
    62133: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/pptx.b108e970.svg';
    },
    30182: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/psd.1d66388a.svg';
    },
    38428: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/rss.f27341d3.svg';
    },
    78501: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/sql.f90e0e1d.svg';
    },
    72515: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/svg.a95ef072.svg';
    },
    4502: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/tiff.4719932c.svg';
    },
    55773: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/txt.ef59d3d8.svg';
    },
    63645: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/wav.fa097b95.svg';
    },
    87260: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/webp.ef46db37.svg';
    },
    5343: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/xls.2ba7600c.svg';
    },
    41475: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/xlsx.746a1908.svg';
    },
    38476: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/xml.b90e705e.svg';
    },
    39121: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/file-management.b76487d8.svg';
    },
    69696: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/github.0aef0d01.svg';
    },
    99466: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/google-scholar.44e74dbb.svg';
    },
    18176: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/google.be71d0f8.svg';
    },
    57355: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/graph.aed14f6e.svg';
    },
    82888: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/invoke-ai.f20c65b6.svg';
    },
    31801: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/jin10.878bef8b.svg';
    },
    30552: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/keyword.2d1a0d69.svg';
    },
    87055: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/knowledge-base.1c6120ee.svg';
    },
    96450: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/knowledge-configration.852175c9.svg';
    },
    9385: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/knowledge-dataset.722b6fe7.svg';
    },
    65376: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/knowledge-testing.bde5e258.svg';
    },
    6514: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/langfuse.78704466.svg';
    },
    74768: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/anthropic.65954479.svg';
    },
    99817: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/azure.c56d7584.svg';
    },
    93594: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/baai.c8138ebe.svg';
    },
    6507: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/baichuan.e3f694dc.svg';
    },
    30818: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/bedrock.3a8ac5ed.svg';
    },
    69534: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/chat-minimax.9b4384d0.svg';
    },
    86198: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/cohere.6ea354af.svg';
    },
    23476: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/deepseek.f974cd8d.svg';
    },
    97300: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/fish-audio.fc05a3e6.svg';
    },
    69156: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/gemini.87ab9858.svg';
    },
    29034: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/github.6dbd4f80.svg';
    },
    75383: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/google-cloud.d0802654.svg';
    },
    93926: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/google.36013c77.svg';
    },
    41538: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/gpustack.e4d6956b.svg';
    },
    43719: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/groq-next.8c75e144.svg';
    },
    20566: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/huggingface.fcf354fa.svg';
    },
    10266: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/hunyuan.3b1d640a.svg';
    },
    19765: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/jina.bfc92c30.svg';
    },
    68341: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/lepton-ai.0e3dff35.svg';
    },
    77894: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/lm-studio.7129f824.svg';
    },
    97354: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/local-ai.7a303131.svg';
    },
    58247: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/mistral.dfb07556.svg';
    },
    21248: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/modelscope.b21a1489.svg';
    },
    98184: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/moonshot.192bc590.svg';
    },
    14860: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/nomic-ai.ecf954c1.svg';
    },
    72584: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/novita-ai.f8cc289c.svg';
    },
    33325: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/nvidia.3031fca1.svg';
    },
    59488: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/ollama.2677a93a.svg';
    },
    23258: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/open-router.7226a5e8.svg';
    },
    63715: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/openai-api.42d3bdf6.svg';
    },
    81459: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/openai.6242ead4.svg';
    },
    39886: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/perfx-cloud.9668e908.svg';
    },
    89957: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/ppio.ce974b8e.svg';
    },
    13492: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/replicate.b558c271.svg';
    },
    85448: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/sentence-transformers.80312660.svg';
    },
    65762: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/siliconflow.6bafc788.svg';
    },
    4216: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/spark.54d37193.svg';
    },
    53618: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/stepfun.38dd7ff5.svg';
    },
    96734: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/tencent-cloud.637fb842.svg';
    },
    65167: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/together-ai.0777a553.svg';
    },
    74296: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/tongyi.8c1b0f0d.svg';
    },
    30464: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/upstage.bff6c9f0.svg';
    },
    91333: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/vllm.4895bd3a.svg';
    },
    25210: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/volc_engine.c93921c9.svg';
    },
    6385: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/voyage.ec478775.svg';
    },
    34981: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/wenxin.c029f1ef.svg';
    },
    76577: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/xinference.4bf1c9ad.svg';
    },
    20447: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/yi.56b2684e.svg';
    },
    55103: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/yiyan.c029f1ef.svg';
    },
    81010: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/youdao.dc5f6515.svg';
    },
    19568: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/zhipu.53c4367a.svg';
    },
    68683: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/login-avatars.2cd59ec8.svg';
    },
    89624: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/login-background.53821b0f.svg';
    },
    31130: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/login-star.a1de9742.svg';
    },
    49313: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/logo-with-text-white.22c9d002.svg';
    },
    67487: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/logout.acbe92a8.svg';
    },
    32382: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/minio.2aa38883.svg';
    },
    70410: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/model-providers.43583ddb.svg';
    },
    22350: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/moon.15e7f056.svg';
    },
    88458: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/more-model.7a1d39d8.svg';
    },
    1333: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/more.4f8a95a4.svg';
    },
    90076: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/move.0b544311.svg';
    },
    37124: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/mysql.cb3593ae.svg';
    },
    1979: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/navigation-pointer.a22fd9df.svg';
    },
    33391: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/next-login-bg.2b21817d.svg';
    },
    28687: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/note.7480c088.svg';
    },
    47138: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/nothing.ab562a79.svg';
    },
    2306: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/paper-clip.dd171c2f.svg';
    },
    33530: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/password.668a7506.svg';
    },
    3804: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/plus-circle-fill.5b401d20.svg';
    },
    75350: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/plus.4df8c2ae.svg';
    },
    1769: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/profile.67855e30.svg';
    },
    49261: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/prompt.37be0fb8.svg';
    },
    78566: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/pubmed.77561d8d.svg';
    },
    56077: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/qweather.af060254.svg';
    },
    43867: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/redis.c34741f7.svg';
    },
    96198: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/refresh.8782839f.svg';
    },
    80415: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/resize.dac0f2bf.svg';
    },
    91449: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/run.23b47028.svg';
    },
    14387: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/select-files-end.c089e39f.svg';
    },
    16734: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/select-files-start.fc6d0609.svg';
    },
    40975: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/selected-files-collapse.9b76e30e.svg';
    },
    51653: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/sso.9e8a3ae3.svg';
    },
    99021: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/storage.c77a9838.svg';
    },
    1311: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/switch.8b45face.svg';
    },
    52381: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/team.40ab5e28.svg';
    },
    63993: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/template.d3713e5e.svg';
    },
    40724: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/translation.1d6d8a4a.svg';
    },
    16521: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/tushare.dce7f503.svg';
    },
    72835: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/wencai.664373a4.svg';
    },
    18684: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/wikipedia.ed88485f.svg';
    },
    7957: function (t, e, n) {
      'use strict';
      t.exports = n.p + 'static/yahoo-finance.9deb3b1e.svg';
    },
  },
]);
//# sourceMappingURL=1282.6f37de5e.async.js.map
