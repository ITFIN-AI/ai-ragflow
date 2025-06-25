'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [9512],
  {
    96635: function (e, t, n) {
      n.d(t, {
        a: function () {
          return u;
        },
        B: function () {
          return i;
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
        a = n(27080),
        s = n(5089),
        o = n(86074),
        i = function (e) {
          var t = e.name,
            n = e.className;
          return (0, o.jsx)('svg', {
            className: (0, a.cn)('fill-current size-4', n),
            children: (0, o.jsx)('use', { xlinkHref: '#icon-'.concat(t) }),
          });
        };
      function u(e) {
        var t = e.name,
          n = e.className,
          u = 'folder' === e.type;
        return (0, o.jsx)('span', {
          className: (0, a.cn)('size-4', n),
          children: (0, o.jsx)(i, { name: u ? 'file-sub' : r[(0, s.RT)(t)] }),
        });
      }
    },
    80499: function (e, t, n) {
      n.d(t, {
        NI: function () {
          return F;
        },
        Wi: function () {
          return _;
        },
        l0: function () {
          return Z;
        },
        lX: function () {
          return k;
        },
        pf: function () {
          return I;
        },
        xJ: function () {
          return C;
        },
        zG: function () {
          return A;
        },
      });
      var r = n(13769),
        a = n.n(r),
        s = n(97857),
        o = n.n(s),
        i = n(49677),
        u = n.n(i),
        c = n(88426),
        l = n(62435),
        d = n(87536),
        m = n(65038),
        f = n(27080),
        p = n(84146),
        h = n(86074),
        g = ['className'],
        v = ['className', 'tooltip'],
        x = ['className'],
        y = ['className', 'children'],
        Z = d.RV,
        b = l.createContext({}),
        j = l.createContext({}),
        _ = function (e) {
          var t = Object.assign({}, (u()(e), e));
          return (0, h.jsx)(j.Provider, {
            value: { name: t.name },
            children: (0, h.jsx)(d.Qr, o()({}, t)),
          });
        },
        w = function () {
          var e = l.useContext(j),
            t = l.useContext(b),
            n = (0, d.Gc)(),
            r = n.getFieldState,
            a = n.formState,
            s = r(e.name, a);
          if (!e)
            throw new Error('useFormField should be used within <FormField>');
          var i = t.id;
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
        N = l.forwardRef(function (e, t) {
          var n = e.className,
            r = a()(e, g),
            s = l.useId();
          return (0, h.jsx)(b.Provider, {
            value: { id: s },
            children: (0, h.jsx)(
              'div',
              o()({ ref: t, className: (0, f.cn)('space-y-2', n) }, r),
            ),
          });
        });
      N.displayName = 'FormItem';
      var C = l.memo(N),
        k = l.forwardRef(function (e, t) {
          var n = e.className,
            r = e.tooltip,
            s = a()(e, v),
            i = w(),
            u = i.error,
            c = i.formItemId;
          return (0, h.jsxs)(
            m._,
            o()(
              o()(
                {
                  ref: t,
                  className: (0, f.cn)(
                    u && 'text-destructive',
                    n,
                    'flex pb-0.5',
                  ),
                  htmlFor: c,
                },
                s,
              ),
              {},
              { children: [s.children, r && (0, h.jsx)(p.Z4, { tooltip: r })] },
            ),
          );
        });
      k.displayName = 'FormLabel';
      var F = l.forwardRef(function (e, t) {
        var n = Object.assign({}, (u()(e), e)),
          r = w(),
          a = r.error,
          s = r.formItemId,
          i = r.formDescriptionId,
          l = r.formMessageId;
        return (0, h.jsx)(
          c.g7,
          o()(
            {
              ref: t,
              id: s,
              'aria-describedby': a
                ? ''.concat(i, ' ').concat(l)
                : ''.concat(i),
              'aria-invalid': !!a,
            },
            n,
          ),
        );
      });
      F.displayName = 'FormControl';
      var I = l.forwardRef(function (e, t) {
        var n = e.className,
          r = a()(e, x),
          s = w().formDescriptionId;
        return (0, h.jsx)(
          'p',
          o()(
            {
              ref: t,
              id: s,
              className: (0, f.cn)('text-sm text-muted-foreground', n),
            },
            r,
          ),
        );
      });
      I.displayName = 'FormDescription';
      var A = l.forwardRef(function (e, t) {
        var n = e.className,
          r = e.children,
          s = a()(e, y),
          i = w(),
          u = i.error,
          c = i.formMessageId,
          l = u ? String(null == u ? void 0 : u.message) : r;
        return l
          ? (0, h.jsx)(
              'p',
              o()(
                o()(
                  {
                    ref: t,
                    id: c,
                    className: (0, f.cn)(
                      'text-sm font-medium text-destructive',
                      n,
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
    65038: function (e, t, n) {
      n.d(t, {
        _: function () {
          return p;
        },
      });
      var r = n(97857),
        a = n.n(r),
        s = n(13769),
        o = n.n(s),
        i = n(49102),
        u = n(45139),
        c = n(62435),
        l = n(27080),
        d = n(86074),
        m = ['className'],
        f = (0, u.j)(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        ),
        p = c.forwardRef(function (e, t) {
          var n = e.className,
            r = o()(e, m);
          return (0, d.jsx)(
            i.f,
            a()({ ref: t, className: (0, l.cn)(f(), n) }, r),
          );
        });
      p.displayName = i.f.displayName;
    },
    41225: function (e, t, n) {
      n.d(t, {
        r: function () {
          return i;
        },
      });
      var r = n(52677),
        a = n.n(r),
        s = n(27080),
        o = (n(62435), n(86074));
      function i(e) {
        var t = e.options,
          n = e.value,
          r = e.onChange,
          i = e.className;
        return (0, o.jsx)('div', {
          className: (0, s.cn)(
            'flex items-center rounded-3xl p-1 gap-2 bg-background-header-bar px-5 py-2.5',
            i,
          ),
          children: t.map(function (e) {
            var t = 'object' === a()(e),
              i = t ? e.value : e;
            return (0, o.jsx)(
              'div',
              {
                className: (0, s.cn)(
                  'inline-flex items-center px-6 py-2 text-base font-normal rounded-3xl cursor-pointer text-text-badge',
                  {
                    'bg-text-title': n === i,
                    'text-text-title-invert': n === i,
                  },
                ),
                onClick: function () {
                  return null == r ? void 0 : r(i);
                },
                children: t ? e.label : e,
              },
              i,
            );
          }),
        });
      }
    },
    92823: function (e, t, n) {
      n.d(t, {
        Xd: function () {
          return i;
        },
        Xn: function () {
          return s;
        },
        mm: function () {
          return o;
        },
      });
      var r = n(9783),
        a = n.n(r),
        s = (function (e) {
          return (e.Python = 'python'), (e.Javascript = 'javascript'), e;
        })({}),
        o = a()(
          a()(
            {},
            s.Python,
            'def main(arg1: str, arg2: str) -> str:\n    return f"result: {arg1 + arg2}"\n',
          ),
          s.Javascript,
          "const axios = require('axios');\nasync function main(args) {\n  try {\n    const response = await axios.get('https://github.com/infiniflow/ragflow');\n    console.log('Body:', response.data);\n  } catch (error) {\n    console.error('Error:', error.message);\n  }\n}\n\nmodule.exports = { main };\n",
        ),
        i = (function (e) {
          return (
            (e.SysQuery = 'sys.query'),
            (e.SysUserId = 'sys.user_id'),
            (e.SysConversationTurns = 'sys.conversation_turns'),
            (e.SysFiles = 'sys.files'),
            e
          );
        })({});
    },
    29612: function (e, t, n) {
      n.d(t, {
        AK: function () {
          return z;
        },
        Eb: function () {
          return L;
        },
        Mj: function () {
          return O;
        },
        Rz: function () {
          return Q;
        },
        W: function () {
          return M;
        },
        WX: function () {
          return K;
        },
        nH: function () {
          return q;
        },
      });
      var r = n(97857),
        a = n.n(r),
        s = n(15009),
        o = n.n(s),
        i = n(99289),
        u = n.n(i),
        c = n(9783),
        l = n.n(c),
        d = n(92823),
        m = n(54707),
        f = n(48230),
        p = n(36235),
        h = n(21578),
        g = n(71250),
        v = n(78551),
        x = n(30202),
        y = n(4527),
        Z = n(58580),
        b = n(45360),
        j = n(96486),
        _ = n(62435),
        w = n(67421),
        N = n(42028),
        C = n(57632),
        k = n(2938),
        F = 'fetchAgentList',
        I = 'updateAgentSetting',
        A = 'deleteAgent',
        S = 'fetchAgentDetail',
        D = 'resetAgent',
        P = 'setAgent',
        T = 'fetchAgentTemplates',
        R = {
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
        K = function () {
          var e,
            t = (0, w.$G)().t,
            n = (0, v.a)({
              queryKey: [T],
              initialData: [],
              queryFn:
                ((e = u()(
                  o()().mark(function e() {
                    var n, r;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.listTemplates();
                          case 2:
                            return (
                              (n = e.sent),
                              (r = n.data),
                              Array.isArray(null == r ? void 0 : r.data) &&
                                r.data.unshift({
                                  id: (0, C.Z)(),
                                  title: t('flow.blank'),
                                  description: t('flow.createFromNothing'),
                                  dsl: R,
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
          return n.data;
        },
        q = function () {
          var e,
            t = (0, k.Qe)(),
            n = t.searchString,
            r = t.handleInputChange,
            s = (0, k.ye)(),
            i = s.pagination,
            c = s.setPagination,
            l = (0, Z.Z)(n, { wait: 500 }),
            d = (0, v.a)({
              queryKey: [F, a()({ debouncedSearchString: l }, i)],
              initialData: { kbs: [], total: 0 },
              gcTime: 0,
              queryFn:
                ((e = u()(
                  o()().mark(function e() {
                    var t, n, r;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              h.Z.listCanvasTeam({
                                keywords: l,
                                page_size: i.pageSize,
                                page: i.current,
                              })
                            );
                          case 2:
                            return (
                              (n = e.sent),
                              (r = n.data),
                              e.abrupt(
                                'return',
                                null !== (t = null == r ? void 0 : r.data) &&
                                  void 0 !== t
                                  ? t
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
            p = (0, _.useCallback)(
              function (e) {
                r(e);
              },
              [r],
            );
          return {
            data: m.kbs,
            loading: f,
            searchString: n,
            handleInputChange: p,
            pagination: a()(
              a()({}, i),
              {},
              { total: null == m ? void 0 : m.total },
            ),
            setPagination: c,
          };
        },
        L = function () {
          var e,
            t = (0, x.NL)(),
            n = (0, y.D)({
              mutationKey: [I],
              mutationFn:
                ((e = u()(
                  o()().mark(function e(n) {
                    var r, a, s, i;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.settingCanvas(n);
                          case 2:
                            return (
                              0 ===
                              (null == (s = e.sent) ||
                              null === (r = s.data) ||
                              void 0 === r
                                ? void 0
                                : r.code)
                                ? (b.ZP.success('success'),
                                  t.invalidateQueries({ queryKey: [F] }))
                                : b.ZP.error(
                                    null == s ||
                                      null === (i = s.data) ||
                                      void 0 === i
                                      ? void 0
                                      : i.data,
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
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            updateAgentSetting: n.mutateAsync,
          };
        },
        M = function () {
          var e,
            t = (0, x.NL)(),
            n = (0, y.D)({
              mutationKey: [A],
              mutationFn:
                ((e = u()(
                  o()().mark(function e(n) {
                    var r, a, s;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), h.Z.removeCanvas({ canvasIds: n })
                            );
                          case 2:
                            return (
                              (a = e.sent),
                              0 === (s = a.data).code &&
                                t.invalidateQueries({ queryKey: [F] }),
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
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            deleteAgent: n.mutateAsync,
          };
        },
        Q = function () {
          var e,
            t = (0, N.UO)().id,
            n = (0, p.P7)().sharedId,
            r = (0, v.a)({
              queryKey: [S],
              initialData: {},
              refetchOnReconnect: !1,
              refetchOnMount: !1,
              refetchOnWindowFocus: !1,
              gcTime: 0,
              queryFn:
                ((e = u()(
                  o()().mark(function e() {
                    var r, a, s, i;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.getCanvas({}, n || t);
                          case 2:
                            return (
                              (a = e.sent),
                              (s = a.data),
                              (i = (0, g.Bl)(
                                (0, j.get)(s, 'data.dsl.messages', []),
                              )),
                              (0, j.set)(s, 'data.dsl.messages', i),
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
        O = function () {
          var e,
            t = (0, N.UO)().id,
            n = (0, y.D)({
              mutationKey: [D],
              mutationFn:
                ((e = u()(
                  o()().mark(function e() {
                    var n, r;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.resetCanvas({ id: t });
                          case 2:
                            return (
                              (n = e.sent), (r = n.data), e.abrupt('return', r)
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
            data: n.data,
            loading: n.isPending,
            resetAgent: n.mutateAsync,
          };
        },
        z = function () {
          var e,
            t = (0, x.NL)(),
            n = (0, y.D)({
              mutationKey: [P],
              mutationFn:
                ((e = u()(
                  o()().mark(function e(n) {
                    var r, a, s;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.setCanvas(n);
                          case 2:
                            return (
                              (r = e.sent),
                              (a = r.data),
                              0 === (s = void 0 === a ? {} : a).code &&
                                (b.ZP.success(
                                  m.Z.t(
                                    'message.'.concat(
                                      null != n && n.id
                                        ? 'modified'
                                        : 'created',
                                    ),
                                  ),
                                ),
                                t.invalidateQueries({ queryKey: [F] })),
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
            setAgent: n.mutateAsync,
          };
        };
    },
    48728: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        });
      var r = n(5574),
        a = n.n(r),
        s = n(9783),
        o = n.n(s),
        i = n(96635),
        u = n(41225),
        c = n(23454),
        l = n(62435),
        d = n(67421),
        m = n(42028),
        f = n(29612),
        p = n(91124),
        h = n(5715),
        g = n(87030),
        v = n(28382),
        x = n(64998),
        y = n(86074);
      function Z(e) {
        var t = e.app;
        return (0, y.jsx)(g.Zb, {
          className: 'w-[264px]',
          children: (0, y.jsxs)(g.aY, {
            className: 'p-2.5  group flex justify-between',
            children: [
              (0, y.jsxs)('div', {
                className: 'flex items-center gap-2.5',
                children: [
                  (0, y.jsxs)(h.qE, {
                    className: 'size-14 rounded-lg',
                    children: [
                      (0, y.jsx)(h.F$, {
                        src: null === t.avatar ? '' : t.avatar,
                      }),
                      (0, y.jsx)(h.Q5, {
                        className: 'rounded-lg',
                        children: 'CN',
                      }),
                    ],
                  }),
                  (0, y.jsxs)('div', {
                    className: 'flex-1',
                    children: [
                      (0, y.jsx)('h3', {
                        className: 'text-sm font-normal line-clamp-1 mb-1',
                        children: t.title,
                      }),
                      (0, y.jsx)('p', {
                        className: 'text-xs font-normal text-text-sub-title',
                        children: (0, v.p6)(t.update_time),
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsx)(p.z, { className: '' }),
            ],
          }),
        });
      }
      function b(e) {
        var t = e.click;
        return (0, y.jsx)(g.Zb, {
          className: 'w-64 min-h-[76px]',
          onClick: t,
          children: (0, y.jsxs)(g.aY, {
            className:
              'p-2.5 pt-1 w-full h-full flex items-center justify-center gap-1.5 text-text-sub-title',
            children: ['See All ', (0, y.jsx)(x.Z, { className: 'size-4' })],
          }),
        });
      }
      function j() {
        return (0, f.nH)()
          .data.slice(0, 10)
          .map(function (e) {
            return (0, y.jsx)(Z, { app: e }, e.id);
          });
      }
      var _ = n(15009),
        w = n.n(_),
        N = n(99289),
        C = n.n(N),
        k = n(1079),
        F = n(53506),
        I = n(78551),
        A = function () {
          var e,
            t,
            n,
            r,
            s,
            o,
            i,
            u = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            c =
              ((e = (0, m.lr)()),
              (t = a()(e, 2))[0],
              (n = t[1]),
              (r = (0, l.useMemo)(function () {
                return new URLSearchParams();
              }, [])),
              {
                handleClickDialog: (0, l.useCallback)(
                  function (e) {
                    r.set(k.oQ.DialogId, e), n(r);
                  },
                  [r, n],
                ),
              }),
            d = c.handleClickDialog,
            f = ((s = (0, m.lr)()),
            {
              dialogId: (o = a()(s, 1)[0]).get(k.oQ.DialogId) || '',
              conversationId: o.get(k.oQ.ConversationId) || '',
              isNew: o.get(k.oQ.isNew) || '',
            }).dialogId,
            p = (0, I.a)({
              queryKey: ['fetchDialogList'],
              initialData: [],
              gcTime: 0,
              refetchOnWindowFocus: !1,
              queryFn:
                ((i = C()(
                  w()().mark(function e() {
                    var t,
                      n,
                      r,
                      a,
                      s,
                      o,
                      i,
                      c = arguments;
                    return w()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              n = c.length, r = new Array(n), a = 0;
                              a < n;
                              a++
                            )
                              r[a] = c[a];
                            return (
                              console.log('🚀 ~ queryFn: ~ params:', r),
                              (e.next = 4),
                              F.Z.listDialog()
                            );
                          case 4:
                            return (
                              (s = e.sent),
                              0 === (o = s.data).code &&
                                ((i = o.data),
                                u ||
                                  (i.length > 0
                                    ? i.every(function (e) {
                                        return e.id !== f;
                                      }) && d(o.data[0].id)
                                    : m.m8.push('/chat'))),
                              e.abrupt(
                                'return',
                                null !== (t = null == o ? void 0 : o.data) &&
                                  void 0 !== t
                                  ? t
                                  : [],
                              )
                            );
                          case 8:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return i.apply(this, arguments);
                }),
            });
          return { data: p.data, loading: p.isFetching, refetch: p.refetch };
        };
      function S() {
        return A(!0)
          .data.slice(0, 10)
          .map(function (e) {
            return (0, y.jsx)(
              Z,
              {
                app: {
                  avatar: e.icon,
                  title: e.name,
                  update_time: e.update_time,
                },
              },
              e.id,
            );
          });
      }
      var D = o()(
        o()(o()({}, c.Z.Chats, 'chat'), c.Z.Searches, 'search'),
        c.Z.Agents,
        'agent',
      );
      function P() {
        var e,
          t = (0, l.useState)(c.Z.Chats),
          n = a()(t, 2),
          r = n[0],
          s = n[1],
          o = (0, d.$G)().t,
          f = (0, m.s0)(),
          p = (0, l.useCallback)(
            function () {
              f(r);
            },
            [f, r],
          ),
          h = (0, l.useMemo)(
            function () {
              return [
                { value: c.Z.Chats, label: o('header.chat') },
                { value: c.Z.Searches, label: o('header.search') },
                { value: c.Z.Agents, label: o('header.flow') },
              ];
            },
            [o],
          );
        return (0, y.jsxs)('section', {
          className: 'mt-12',
          children: [
            (0, y.jsxs)('div', {
              className: 'flex justify-between items-center mb-5',
              children: [
                (0, y.jsxs)('h2', {
                  className: 'text-2xl font-bold flex gap-2.5',
                  children: [
                    (0, y.jsx)(i.B, { name: D[r], className: 'size-8' }),
                    null ===
                      (e = h.find(function (e) {
                        return e.value === r;
                      })) || void 0 === e
                      ? void 0
                      : e.label,
                  ],
                }),
                (0, y.jsx)(u.r, {
                  options: h,
                  value: r,
                  onChange: function (e) {
                    s(e);
                  },
                  className: 'bg-transparent',
                }),
              ],
            }),
            (0, y.jsxs)('div', {
              className: 'flex flex-wrap gap-4',
              children: [
                r === c.Z.Agents && (0, y.jsx)(j, {}),
                r === c.Z.Chats && (0, y.jsx)(S, {}),
                (0, y.jsx)(b, { click: p }),
              ],
            }),
          ],
        });
      }
      function T() {
        var e = (0, d.$G)().t;
        return (0, y.jsxs)('section', {
          className: 'text-5xl pt-10 pb-14 font-bold',
          children: [
            (0, y.jsx)('span', {
              className: 'text-text-title',
              children: e('header.welcome'),
            }),
            (0, y.jsx)('span', {
              className:
                'pl-3 text-transparent bg-clip-text  bg-gradient-to-l from-[#40EBE3] to-[#4A51FF]',
              children: 'RAGFlow',
            }),
          ],
        });
      }
      var R = n(61363),
        K = n(87033),
        q = n(8002),
        L = n(10799),
        M = n(6368);
      function Q() {
        var e = (0, d.$G)().t,
          t = (0, q.Yi)(),
          n = t.kbs,
          r = t.loading,
          a = (0, M.y)(),
          s = a.datasetRenameLoading,
          o = a.initialDatasetName,
          u = a.onDatasetRenameOk,
          c = a.datasetRenameVisible,
          l = a.hideDatasetRenameModal,
          m = a.showDatasetRenameModal;
        return (0, y.jsxs)('section', {
          children: [
            (0, y.jsxs)('h2', {
              className: 'text-2xl font-bold mb-6 flex gap-2.5 items-center',
              children: [
                (0, y.jsx)(i.B, { name: 'data', className: 'size-8' }),
                e('header.knowledgeBase'),
              ],
            }),
            (0, y.jsxs)('div', {
              className: 'flex gap-6',
              children: [
                r
                  ? (0, y.jsx)('div', {
                      className: 'flex-1',
                      children: (0, y.jsx)(K.q4, {}),
                    })
                  : (0, y.jsx)('div', {
                      className: 'flex gap-4 flex-1',
                      children: n.slice(0, 6).map(function (e) {
                        return (0, y.jsx)(
                          L.p,
                          { dataset: e, showDatasetRenameModal: m },
                          e.id,
                        );
                      }),
                    }),
                (0, y.jsx)(L.W, {}),
              ],
            }),
            c &&
              (0, y.jsx)(R.L, {
                hideModal: l,
                onOk: u,
                initialName: o,
                loading: s,
              }),
          ],
        });
      }
      var O = function () {
        return (0, y.jsx)('div', {
          className: 'mx-8',
          children: (0, y.jsxs)('section', {
            children: [(0, y.jsx)(T, {}), (0, y.jsx)(Q, {}), (0, y.jsx)(P, {})],
          }),
        });
      };
    },
    21578: function (e, t, n) {
      var r = n(60806),
        a = n(66582),
        s = n(78158),
        o = {
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
        i = (0, a.Z)(o, s.ZP);
      t.Z = i;
    },
    73955: function (e, t, n) {
      n.d(t, {
        $V: function () {
          return L;
        },
        Fb: function () {
          return Q;
        },
        QL: function () {
          return R;
        },
        Qh: function () {
          return O;
        },
        Re: function () {
          return q;
        },
        sX: function () {
          return M;
        },
        tc: function () {
          return K;
        },
      });
      var r = n(60806),
        a = n(66582),
        s = n(78158),
        o = r.Z.create_kb,
        i = r.Z.update_kb,
        u = r.Z.rm_kb,
        c = r.Z.get_kb_detail,
        l = r.Z.kb_list,
        d = r.Z.get_document_list,
        m = r.Z.document_change_status,
        f = r.Z.document_rm,
        p = r.Z.document_delete,
        h = r.Z.document_create,
        g = r.Z.document_change_parser,
        v = r.Z.document_thumbnails,
        x = r.Z.chunk_list,
        y = r.Z.create_chunk,
        Z = r.Z.set_chunk,
        b = r.Z.get_chunk,
        j = r.Z.switch_chunk,
        _ = r.Z.rm_chunk,
        w = r.Z.retrieval_test,
        N = r.Z.document_rename,
        C = r.Z.document_run,
        k = r.Z.document_upload,
        F = r.Z.web_crawl,
        I = r.Z.knowledge_graph,
        A = r.Z.document_infos,
        S = r.Z.upload_and_parse,
        D = r.Z.listTagByKnowledgeIds,
        P = {
          createKb: { url: o, method: 'post' },
          updateKb: { url: i, method: 'post' },
          rmKb: { url: u, method: 'post' },
          get_kb_detail: { url: c, method: 'get' },
          getList: { url: l, method: 'post' },
          get_document_list: { url: d, method: 'get' },
          document_change_status: { url: m, method: 'post' },
          document_rm: { url: f, method: 'post' },
          document_rename: { url: N, method: 'post' },
          document_create: { url: h, method: 'post' },
          document_run: { url: C, method: 'post' },
          document_change_parser: { url: g, method: 'post' },
          document_thumbnails: { url: v, method: 'get' },
          document_upload: { url: k, method: 'post' },
          web_crawl: { url: F, method: 'post' },
          document_infos: { url: A, method: 'post' },
          setMeta: { url: r.Z.setMeta, method: 'post' },
          chunk_list: { url: x, method: 'post' },
          create_chunk: { url: y, method: 'post' },
          set_chunk: { url: Z, method: 'post' },
          get_chunk: { url: b, method: 'get' },
          switch_chunk: { url: j, method: 'post' },
          rm_chunk: { url: _, method: 'post' },
          retrieval_test: { url: w, method: 'post' },
          knowledge_graph: { url: I, method: 'get' },
          document_delete: { url: p, method: 'delete' },
          upload_and_parse: { url: S, method: 'post' },
          listTagByKnowledgeIds: { url: D, method: 'get' },
        },
        T = (0, a.Z)(P, s.ZP),
        R = function (e) {
          return s.ZP.get(r.Z.listTag(e));
        },
        K = function (e, t) {
          return (0, s.v_)(r.Z.removeTag(e), { tags: t });
        },
        q = function (e, t) {
          var n = t.fromTag,
            a = t.toTag;
          return (0, s.v_)(r.Z.renameTag(e), { fromTag: n, toTag: a });
        };
      function L(e) {
        return s.ZP.get(r.Z.getKnowledgeGraph(e));
      }
      function M(e) {
        return s.ZP.delete(r.Z.getKnowledgeGraph(e));
      }
      var Q = function (e, t) {
          return s.ZP.post(r.Z.kb_list, { data: t || {}, params: e });
        },
        O = function (e, t) {
          return s.ZP.post(r.Z.get_document_list, { data: t || {}, params: e });
        };
      t.ZP = T;
    },
    5089: function (e, t, n) {
      n.d(t, {
        Ep: function () {
          return d;
        },
        Or: function () {
          return m;
        },
        RT: function () {
          return c;
        },
        YC: function () {
          return l;
        },
        q1: function () {
          return u;
        },
      });
      var r = n(19632),
        a = n.n(r),
        s = n(40169),
        o = n(96486),
        i = n(57632),
        u = function (e, t) {
          var n;
          return Array.isArray(null == e ? void 0 : e.positions) &&
            e.positions.every(function (e) {
              return Array.isArray(e);
            })
            ? null == e || null === (n = e.positions) || void 0 === n
              ? void 0
              : n.map(function (n) {
                  var r = {
                    width: t.width,
                    height: t.height,
                    x1: n[1],
                    x2: n[2],
                    y1: n[3],
                    y2: n[4],
                  };
                  return {
                    id: (0, i.Z)(),
                    comment: { text: '', emoji: '' },
                    content: {
                      text:
                        (0, o.get)(e, 'content_with_weight') ||
                        (0, o.get)(e, 'content', ''),
                    },
                    position: { boundingRect: r, rects: [r], pageNumber: n[0] },
                  };
                })
            : [];
        },
        c = function (e) {
          var t;
          return null !==
            (t =
              null == e
                ? void 0
                : e.slice(e.lastIndexOf('.') + 1).toLowerCase()) && void 0 !== t
            ? t
            : '';
        },
        l = function (e) {
          return e.split('\n').length;
        },
        d = function (e) {
          return s.ru.includes(e);
        },
        m = function (e) {
          return [].concat(a()(s.rU), ['svg']).some(function (t) {
            return t === e;
          });
        };
    },
  },
]);
//# sourceMappingURL=p__home__index.544b7e3a.async.js.map
