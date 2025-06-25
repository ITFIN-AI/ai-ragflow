'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [8887],
  {
    36646: function (e, n, t) {
      t.d(n, {
        m: function () {
          return i;
        },
      });
      var r = t(53219),
        a = t(57636),
        s = t(86074);
      function i(e) {
        var n = e.back,
          t = e.title,
          i = e.children;
        return (0, s.jsxs)('header', {
          className: 'flex justify-between items-center border-b pr-9',
          children: [
            (0, s.jsxs)('div', {
              className: 'flex items-center ',
              children: [
                (0, s.jsx)('div', {
                  className: 'flex items-center border-r p-1.5',
                  children: (0, s.jsx)(a.zx, {
                    variant: 'ghost',
                    size: 'icon',
                    onClick: n,
                    children: (0, s.jsx)(r.Z, { className: 'w-5 h-5' }),
                  }),
                }),
                (0, s.jsx)('div', {
                  className: 'p-4',
                  children: (0, s.jsx)('h1', {
                    className: 'text-2xl font-semibold tracking-tight',
                    children: t,
                  }),
                }),
              ],
            }),
            i,
          ],
        });
      }
    },
    80499: function (e, n, t) {
      t.d(n, {
        NI: function () {
          return F;
        },
        Wi: function () {
          return C;
        },
        l0: function () {
          return j;
        },
        lX: function () {
          return I;
        },
        pf: function () {
          return S;
        },
        xJ: function () {
          return Z;
        },
        zG: function () {
          return A;
        },
      });
      var r = t(13769),
        a = t.n(r),
        s = t(97857),
        i = t.n(s),
        o = t(49677),
        c = t.n(o),
        u = t(88426),
        l = t(62435),
        d = t(87536),
        m = t(65038),
        f = t(27080),
        p = t(84146),
        h = t(86074),
        v = ['className'],
        g = ['className', 'tooltip'],
        x = ['className'],
        y = ['className', 'children'],
        j = d.RV,
        b = l.createContext({}),
        w = l.createContext({}),
        C = function (e) {
          var n = Object.assign({}, (c()(e), e));
          return (0, h.jsx)(w.Provider, {
            value: { name: n.name },
            children: (0, h.jsx)(d.Qr, i()({}, n)),
          });
        },
        N = function () {
          var e = l.useContext(w),
            n = l.useContext(b),
            t = (0, d.Gc)(),
            r = t.getFieldState,
            a = t.formState,
            s = r(e.name, a);
          if (!e)
            throw new Error('useFormField should be used within <FormField>');
          var o = n.id;
          return i()(
            {
              id: o,
              name: e.name,
              formItemId: ''.concat(o, '-form-item'),
              formDescriptionId: ''.concat(o, '-form-item-description'),
              formMessageId: ''.concat(o, '-form-item-message'),
            },
            s,
          );
        },
        k = l.forwardRef(function (e, n) {
          var t = e.className,
            r = a()(e, v),
            s = l.useId();
          return (0, h.jsx)(b.Provider, {
            value: { id: s },
            children: (0, h.jsx)(
              'div',
              i()({ ref: n, className: (0, f.cn)('space-y-2', t) }, r),
            ),
          });
        });
      k.displayName = 'FormItem';
      var Z = l.memo(k),
        I = l.forwardRef(function (e, n) {
          var t = e.className,
            r = e.tooltip,
            s = a()(e, g),
            o = N(),
            c = o.error,
            u = o.formItemId;
          return (0, h.jsxs)(
            m._,
            i()(
              i()(
                {
                  ref: n,
                  className: (0, f.cn)(
                    c && 'text-destructive',
                    t,
                    'flex pb-0.5',
                  ),
                  htmlFor: u,
                },
                s,
              ),
              {},
              { children: [s.children, r && (0, h.jsx)(p.Z4, { tooltip: r })] },
            ),
          );
        });
      I.displayName = 'FormLabel';
      var F = l.forwardRef(function (e, n) {
        var t = Object.assign({}, (c()(e), e)),
          r = N(),
          a = r.error,
          s = r.formItemId,
          o = r.formDescriptionId,
          l = r.formMessageId;
        return (0, h.jsx)(
          u.g7,
          i()(
            {
              ref: n,
              id: s,
              'aria-describedby': a
                ? ''.concat(o, ' ').concat(l)
                : ''.concat(o),
              'aria-invalid': !!a,
            },
            t,
          ),
        );
      });
      F.displayName = 'FormControl';
      var S = l.forwardRef(function (e, n) {
        var t = e.className,
          r = a()(e, x),
          s = N().formDescriptionId;
        return (0, h.jsx)(
          'p',
          i()(
            {
              ref: n,
              id: s,
              className: (0, f.cn)('text-sm text-muted-foreground', t),
            },
            r,
          ),
        );
      });
      S.displayName = 'FormDescription';
      var A = l.forwardRef(function (e, n) {
        var t = e.className,
          r = e.children,
          s = a()(e, y),
          o = N(),
          c = o.error,
          u = o.formMessageId,
          l = c ? String(null == c ? void 0 : c.message) : r;
        return l
          ? (0, h.jsx)(
              'p',
              i()(
                i()(
                  {
                    ref: n,
                    id: u,
                    className: (0, f.cn)(
                      'text-sm font-medium text-destructive',
                      t,
                    ),
                  },
                  s,
                ),
                {},
                { children: l },
              ),
            )
          : null;
      });
      A.displayName = 'FormMessage';
    },
    65038: function (e, n, t) {
      t.d(n, {
        _: function () {
          return p;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(13769),
        i = t.n(s),
        o = t(49102),
        c = t(45139),
        u = t(62435),
        l = t(27080),
        d = t(86074),
        m = ['className'],
        f = (0, c.j)(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        ),
        p = u.forwardRef(function (e, n) {
          var t = e.className,
            r = i()(e, m);
          return (0, d.jsx)(
            o.f,
            a()({ ref: n, className: (0, l.cn)(f(), t) }, r),
          );
        });
      p.displayName = o.f.displayName;
    },
    92823: function (e, n, t) {
      t.d(n, {
        Xd: function () {
          return o;
        },
        Xn: function () {
          return s;
        },
        mm: function () {
          return i;
        },
      });
      var r = t(9783),
        a = t.n(r),
        s = (function (e) {
          return (e.Python = 'python'), (e.Javascript = 'javascript'), e;
        })({}),
        i = a()(
          a()(
            {},
            s.Python,
            'def main(arg1: str, arg2: str) -> str:\n    return f"result: {arg1 + arg2}"\n',
          ),
          s.Javascript,
          "const axios = require('axios');\nasync function main(args) {\n  try {\n    const response = await axios.get('https://github.com/infiniflow/ragflow');\n    console.log('Body:', response.data);\n  } catch (error) {\n    console.error('Error:', error.message);\n  }\n}\n\nmodule.exports = { main };\n",
        ),
        o = (function (e) {
          return (
            (e.SysQuery = 'sys.query'),
            (e.SysUserId = 'sys.user_id'),
            (e.SysConversationTurns = 'sys.conversation_turns'),
            (e.SysFiles = 'sys.files'),
            e
          );
        })({});
    },
    29612: function (e, n, t) {
      t.d(n, {
        AK: function () {
          return $;
        },
        Eb: function () {
          return G;
        },
        Mj: function () {
          return X;
        },
        Rz: function () {
          return O;
        },
        W: function () {
          return K;
        },
        WX: function () {
          return M;
        },
        nH: function () {
          return q;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(15009),
        i = t.n(s),
        o = t(99289),
        c = t.n(o),
        u = t(9783),
        l = t.n(u),
        d = t(92823),
        m = t(54707),
        f = t(48230),
        p = t(36235),
        h = t(21578),
        v = t(71250),
        g = t(78551),
        x = t(30202),
        y = t(4527),
        j = t(58580),
        b = t(45360),
        w = t(96486),
        C = t(62435),
        N = t(67421),
        k = t(42028),
        Z = t(57632),
        I = t(2938),
        F = 'fetchAgentList',
        S = 'updateAgentSetting',
        A = 'deleteAgent',
        P = 'fetchAgentDetail',
        D = 'resetAgent',
        R = 'setAgent',
        T = 'fetchAgentTemplates',
        z = {
          graph: {
            nodes: [
              {
                id: f.pj,
                type: 'beginNode',
                position: { x: 50, y: 200 },
                data: { label: 'Begin', name: 'begin' },
                sourcePosition: 'left',
                targetPosition: 'right',
              },
            ],
            edges: [],
          },
          components: {
            begin: {
              obj: { component_name: 'Begin', params: {} },
              downstream: ['Answer:China'],
              upstream: [],
            },
          },
          retrieval: [],
          history: [],
          path: [],
          globals: l()(
            l()(
              l()(l()({}, d.Xd.SysQuery, ''), d.Xd.SysUserId, ''),
              d.Xd.SysConversationTurns,
              0,
            ),
            d.Xd.SysFiles,
            [],
          ),
        },
        M = function () {
          var e,
            n = (0, N.$G)().t,
            t = (0, g.a)({
              queryKey: [T],
              initialData: [],
              queryFn:
                ((e = c()(
                  i()().mark(function e() {
                    var t, r;
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.listTemplates();
                          case 2:
                            return (
                              (t = e.sent),
                              (r = t.data),
                              Array.isArray(null == r ? void 0 : r.data) &&
                                r.data.unshift({
                                  id: (0, Z.Z)(),
                                  title: n('flow.blank'),
                                  description: n('flow.createFromNothing'),
                                  dsl: z,
                                }),
                              e.abrupt('return', r.data)
                            );
                          case 6:
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
          return t.data;
        },
        q = function () {
          var e,
            n = (0, I.Qe)(),
            t = n.searchString,
            r = n.handleInputChange,
            s = (0, I.ye)(),
            o = s.pagination,
            u = s.setPagination,
            l = (0, j.Z)(t, { wait: 500 }),
            d = (0, g.a)({
              queryKey: [F, a()({ debouncedSearchString: l }, o)],
              initialData: { kbs: [], total: 0 },
              gcTime: 0,
              queryFn:
                ((e = c()(
                  i()().mark(function e() {
                    var n, t, r;
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              h.Z.listCanvasTeam({
                                keywords: l,
                                page_size: o.pageSize,
                                page: o.current,
                              })
                            );
                          case 2:
                            return (
                              (t = e.sent),
                              (r = t.data),
                              e.abrupt(
                                'return',
                                null !== (n = null == r ? void 0 : r.data) &&
                                  void 0 !== n
                                  ? n
                                  : [],
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
            m = d.data,
            f = d.isFetching,
            p = (0, C.useCallback)(
              function (e) {
                r(e);
              },
              [r],
            );
          return {
            data: m.kbs,
            loading: f,
            searchString: t,
            handleInputChange: p,
            pagination: a()(
              a()({}, o),
              {},
              { total: null == m ? void 0 : m.total },
            ),
            setPagination: u,
          };
        },
        G = function () {
          var e,
            n = (0, x.NL)(),
            t = (0, y.D)({
              mutationKey: [S],
              mutationFn:
                ((e = c()(
                  i()().mark(function e(t) {
                    var r, a, s, o;
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.settingCanvas(t);
                          case 2:
                            return (
                              0 ===
                              (null == (s = e.sent) ||
                              null === (r = s.data) ||
                              void 0 === r
                                ? void 0
                                : r.code)
                                ? (b.ZP.success('success'),
                                  n.invalidateQueries({ queryKey: [F] }))
                                : b.ZP.error(
                                    null == s ||
                                      null === (o = s.data) ||
                                      void 0 === o
                                      ? void 0
                                      : o.data,
                                  ),
                              e.abrupt(
                                'return',
                                null == s ||
                                  null === (a = s.data) ||
                                  void 0 === a
                                  ? void 0
                                  : a.code,
                              )
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: t.data,
            loading: t.isPending,
            updateAgentSetting: t.mutateAsync,
          };
        },
        K = function () {
          var e,
            n = (0, x.NL)(),
            t = (0, y.D)({
              mutationKey: [A],
              mutationFn:
                ((e = c()(
                  i()().mark(function e(t) {
                    var r, a, s;
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), h.Z.removeCanvas({ canvasIds: t })
                            );
                          case 2:
                            return (
                              (a = e.sent),
                              0 === (s = a.data).code &&
                                n.invalidateQueries({ queryKey: [F] }),
                              e.abrupt(
                                'return',
                                null !== (r = null == s ? void 0 : s.data) &&
                                  void 0 !== r
                                  ? r
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
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: t.data,
            loading: t.isPending,
            deleteAgent: t.mutateAsync,
          };
        },
        O = function () {
          var e,
            n = (0, k.UO)().id,
            t = (0, p.P7)().sharedId,
            r = (0, g.a)({
              queryKey: [P],
              initialData: {},
              refetchOnReconnect: !1,
              refetchOnMount: !1,
              refetchOnWindowFocus: !1,
              gcTime: 0,
              queryFn:
                ((e = c()(
                  i()().mark(function e() {
                    var r, a, s, o;
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.getCanvas({}, t || n);
                          case 2:
                            return (
                              (a = e.sent),
                              (s = a.data),
                              (o = (0, v.Bl)(
                                (0, w.get)(s, 'data.dsl.messages', []),
                              )),
                              (0, w.set)(s, 'data.dsl.messages', o),
                              e.abrupt(
                                'return',
                                null !== (r = null == s ? void 0 : s.data) &&
                                  void 0 !== r
                                  ? r
                                  : {},
                              )
                            );
                          case 7:
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
          return { data: r.data, loading: r.isFetching, refetch: r.refetch };
        },
        X = function () {
          var e,
            n = (0, k.UO)().id,
            t = (0, y.D)({
              mutationKey: [D],
              mutationFn:
                ((e = c()(
                  i()().mark(function e() {
                    var t, r;
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.resetCanvas({ id: n });
                          case 2:
                            return (
                              (t = e.sent), (r = t.data), e.abrupt('return', r)
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
          return {
            data: t.data,
            loading: t.isPending,
            resetAgent: t.mutateAsync,
          };
        },
        $ = function () {
          var e,
            n = (0, x.NL)(),
            t = (0, y.D)({
              mutationKey: [R],
              mutationFn:
                ((e = c()(
                  i()().mark(function e(t) {
                    var r, a, s;
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.setCanvas(t);
                          case 2:
                            return (
                              (r = e.sent),
                              (a = r.data),
                              0 === (s = void 0 === a ? {} : a).code &&
                                (b.ZP.success(
                                  m.Z.t(
                                    'message.'.concat(
                                      null != t && t.id
                                        ? 'modified'
                                        : 'created',
                                    ),
                                  ),
                                ),
                                n.invalidateQueries({ queryKey: [F] })),
                              e.abrupt('return', s)
                            );
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: t.data,
            loading: t.isPending,
            setAgent: t.mutateAsync,
          };
        };
    },
    8074: function (e, n, t) {
      t.d(n, {
        Rx: function () {
          return s.Rx;
        },
        j$: function () {
          return o;
        },
      });
      var r = t(9783),
        a = t.n(r),
        s = t(96330),
        i =
          (a()(
            a()(
              a()({}, s.Rx.Dataset, 'Dataset'),
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
          (a()(a()({}, i.Chunk, 'Chunk'), i.File, 'File Upload'), 'tagRename');
    },
    16324: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return P;
          },
        });
      var r = t(15009),
        a = t.n(r),
        s = t(99289),
        i = t.n(s),
        o = t(5574),
        c = t.n(o),
        u = t(36646),
        l = t(86968),
        d = t(704),
        m = t(29612),
        f = t(62435),
        p = t(67421),
        h = t(57636),
        v = t(28993),
        g = t(8074),
        x = t(97857),
        y = t.n(x),
        j = t(56312),
        b = t(87536),
        w = t(1604),
        C = t(80499),
        N = t(27591),
        k = t(86074);
      function Z(e) {
        var n = e.hideModal,
          t = e.onOk,
          r = (0, p.$G)().t,
          s = w.z.object({
            name: w.z
              .string()
              .min(1, { message: r('common.namePlaceholder') })
              .trim(),
            tag: w.z.string().trim().optional(),
            description: w.z.string().trim().optional(),
          }),
          o = (0, b.cI)({ resolver: (0, j.F)(s), defaultValues: { name: '' } });
        function c() {
          return (c = i()(
            a()().mark(function e(r) {
              return a()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), null == t ? void 0 : t(r);
                    case 2:
                      e.sent && (null == n || n());
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        return (0, k.jsx)(
          C.l0,
          y()(
            y()({}, o),
            {},
            {
              children: (0, k.jsxs)('form', {
                onSubmit: o.handleSubmit(function (e) {
                  return c.apply(this, arguments);
                }),
                className: 'space-y-6',
                id: g.j$,
                children: [
                  (0, k.jsx)(C.Wi, {
                    control: o.control,
                    name: 'name',
                    render: function (e) {
                      var n = e.field;
                      return (0, k.jsxs)(C.xJ, {
                        children: [
                          (0, k.jsx)(C.lX, { children: r('common.name') }),
                          (0, k.jsx)(C.NI, {
                            children: (0, k.jsx)(
                              N.II,
                              y()(
                                y()(
                                  { placeholder: r('common.namePlaceholder') },
                                  n,
                                ),
                                {},
                                { autoComplete: 'off' },
                              ),
                            ),
                          }),
                          (0, k.jsx)(C.zG, {}),
                        ],
                      });
                    },
                  }),
                  (0, k.jsx)(C.Wi, {
                    control: o.control,
                    name: 'tag',
                    render: function (e) {
                      var n = e.field;
                      return (0, k.jsxs)(C.xJ, {
                        children: [
                          (0, k.jsx)(C.lX, { children: r('flow.tag') }),
                          (0, k.jsx)(C.NI, {
                            children: (0, k.jsx)(
                              N.II,
                              y()(
                                y()(
                                  { placeholder: r('flow.tagPlaceholder') },
                                  n,
                                ),
                                {},
                                { autoComplete: 'off' },
                              ),
                            ),
                          }),
                          (0, k.jsx)(C.zG, {}),
                        ],
                      });
                    },
                  }),
                  (0, k.jsx)(C.Wi, {
                    control: o.control,
                    name: 'description',
                    render: function (e) {
                      var n = e.field;
                      return (0, k.jsxs)(C.xJ, {
                        children: [
                          (0, k.jsx)(C.lX, { children: r('flow.description') }),
                          (0, k.jsx)(C.NI, {
                            children: (0, k.jsx)(
                              N.II,
                              y()(
                                y()(
                                  {
                                    placeholder: r(
                                      'flow.descriptionPlaceholder',
                                    ),
                                  },
                                  n,
                                ),
                                {},
                                { autoComplete: 'off' },
                              ),
                            ),
                          }),
                          (0, k.jsx)(C.zG, {}),
                        ],
                      });
                    },
                  }),
                ],
              }),
            },
          ),
        );
      }
      function I(e) {
        var n = e.hideModal,
          t = e.onOk,
          r = e.loading,
          a = (0, p.$G)().t;
        return (0, k.jsx)(v.Vq, {
          open: !0,
          onOpenChange: n,
          children: (0, k.jsxs)(v.cZ, {
            className: 'sm:max-w-[425px]',
            children: [
              (0, k.jsx)(v.fK, {
                children: (0, k.jsx)(v.$N, { children: a('flow.createGraph') }),
              }),
              (0, k.jsx)(Z, { hideModal: n, onOk: t }),
              (0, k.jsx)(v.cN, {
                children: (0, k.jsx)(h.dw, {
                  type: 'submit',
                  form: g.j$,
                  loading: r,
                  children: a('common.save'),
                }),
              }),
            ],
          }),
        });
      }
      var F = t(5715),
        S = t(87030);
      function A(e) {
        var n = e.data,
          t = e.showModal,
          r = (0, p.$G)().t,
          a = (0, f.useCallback)(
            function () {
              t(n);
            },
            [n, t],
          );
        return (0, k.jsx)(S.Zb, {
          className:
            'bg-colors-background-inverse-weak  border-colors-outline-neutral-standard group relative',
          children: (0, k.jsxs)(S.aY, {
            className: 'p-4 ',
            children: [
              (0, k.jsx)('div', {
                className: 'flex justify-between mb-4',
                children: n.avatar
                  ? (0, k.jsx)('div', {
                      className: 'w-[70px] h-[70px] rounded-xl bg-cover',
                      style: { backgroundImage: 'url('.concat(n.avatar, ')') },
                    })
                  : (0, k.jsxs)(F.qE, {
                      className: 'w-[70px] h-[70px]',
                      children: [
                        (0, k.jsx)(F.F$, {
                          src: 'https://github.com/shadcn.png',
                        }),
                        (0, k.jsx)(F.Q5, { children: 'CN' }),
                      ],
                    }),
              }),
              (0, k.jsx)('h3', {
                className: 'text-xl font-bold mb-2',
                children: n.title,
              }),
              (0, k.jsx)('p', {
                className: 'break-words',
                children: n.description,
              }),
              (0, k.jsx)(h.zx, {
                variant: 'tertiary',
                className:
                  'absolute bottom-4 right-4 left-4 hidden justify-end group-hover:block text-center',
                onClick: a,
                children: r('flow.useTemplate'),
              }),
            ],
          }),
        });
      }
      function P() {
        var e = (0, d.$)().navigateToAgentList,
          n = (0, p.$G)().t,
          t = (0, m.WX)(),
          r = (0, m.AK)(),
          s = r.loading,
          o = r.setAgent,
          h = (0, l.pG)(),
          v = h.visible,
          g = h.hideModal,
          x = h.showModal,
          y = (0, f.useState)(),
          j = c()(y, 2),
          b = j[0],
          w = j[1],
          C = (0, f.useCallback)(
            function (e) {
              w(e), x();
            },
            [x],
          ),
          N = (0, d.$)().navigateToAgent,
          Z = (0, f.useCallback)(
            (function () {
              var e = i()(
                a()().mark(function e(n) {
                  var t, r;
                  return a()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = null == b ? void 0 : b.dsl),
                            (e.next = 3),
                            o({
                              title: n.name,
                              dsl: t,
                              avatar: null == b ? void 0 : b.avatar,
                            })
                          );
                        case 3:
                          0 === (null == (r = e.sent) ? void 0 : r.code) &&
                            (g(), N(r.data.id)());
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            [
              g,
              N,
              o,
              null == b ? void 0 : b.avatar,
              null == b ? void 0 : b.dsl,
            ],
          );
        return (0, k.jsxs)('section', {
          children: [
            (0, k.jsx)(u.m, { back: e, title: n('flow.createGraph') }),
            (0, k.jsx)('div', {
              className:
                'grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 max-h-[94vh] overflow-auto px-8',
              children:
                null == t
                  ? void 0
                  : t.map(function (e) {
                      return (0, k.jsx)(A, { data: e, showModal: C }, e.id);
                    }),
            }),
            v &&
              (0, k.jsx)(I, { loading: s, visible: v, hideModal: g, onOk: Z }),
          ],
        });
      }
    },
    21578: function (e, n, t) {
      var r = t(60806),
        a = t(66582),
        s = t(78158),
        i = {
          getCanvas: { url: r.Z.getCanvas, method: 'get' },
          getCanvasSSE: { url: r.Z.getCanvasSSE, method: 'get' },
          setCanvas: { url: r.Z.setCanvas, method: 'post' },
          getListVersion: { url: r.Z.getListVersion, method: 'get' },
          getVersion: { url: r.Z.getVersion, method: 'get' },
          listCanvas: { url: r.Z.listCanvas, method: 'get' },
          resetCanvas: { url: r.Z.resetCanvas, method: 'post' },
          removeCanvas: { url: r.Z.removeCanvas, method: 'post' },
          runCanvas: { url: r.Z.runCanvas, method: 'post' },
          listTemplates: { url: r.Z.listTemplates, method: 'get' },
          testDbConnect: { url: r.Z.testDbConnect, method: 'post' },
          getInputElements: { url: r.Z.getInputElements, method: 'get' },
          debugSingle: { url: r.Z.debug, method: 'post' },
          listCanvasTeam: { url: r.Z.listCanvasTeam, method: 'get' },
          settingCanvas: { url: r.Z.settingCanvas, method: 'post' },
        },
        o = (0, a.Z)(i, s.ZP);
      n.Z = o;
    },
  },
]);
//# sourceMappingURL=p__agents__agent-templates.2f998a0c.async.js.map
