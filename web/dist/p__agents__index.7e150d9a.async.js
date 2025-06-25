'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [8486],
  {
    91124: function (e, n, t) {
      t.d(n, {
        z: function () {
          return p;
        },
      });
      var a = t(97857),
        r = t.n(a),
        s = t(13769),
        i = t.n(s),
        o = t(27080),
        u = t(9404),
        c = t(62435),
        l = t(57636),
        d = t(86074),
        g = ['className', 'size'],
        p = c.forwardRef(function (e, n) {
          var t = e.className,
            a = e.size,
            s = i()(e, g);
          return (0, d.jsx)(
            l.zx,
            r()(
              r()(
                {
                  ref: n,
                  variant: 'ghost',
                  size: a || 'icon',
                  className: (0, o.cn)(
                    'invisible group-hover:visible size-3.5',
                    t,
                  ),
                },
                s,
              ),
              {},
              { children: (0, d.jsx)(u.Z, {}) },
            ),
          );
        });
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
      var a = t(9783),
        r = t.n(a),
        s = (function (e) {
          return (e.Python = 'python'), (e.Javascript = 'javascript'), e;
        })({}),
        i = r()(
          r()(
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
          return E;
        },
        Eb: function () {
          return I;
        },
        Mj: function () {
          return X;
        },
        Rz: function () {
          return O;
        },
        W: function () {
          return L;
        },
        WX: function () {
          return D;
        },
        nH: function () {
          return K;
        },
      });
      var a = t(97857),
        r = t.n(a),
        s = t(15009),
        i = t.n(s),
        o = t(99289),
        u = t.n(o),
        c = t(9783),
        l = t.n(c),
        d = t(92823),
        g = t(54707),
        p = t(48230),
        m = t(36235),
        h = t(21578),
        f = t(71250),
        v = t(78551),
        x = t(30202),
        y = t(4527),
        C = t(58580),
        b = t(45360),
        w = t(96486),
        j = t(62435),
        A = t(67421),
        Z = t(42028),
        k = t(57632),
        N = t(2938),
        S = 'fetchAgentList',
        P = 'updateAgentSetting',
        R = 'deleteAgent',
        F = 'fetchAgentDetail',
        z = 'resetAgent',
        T = 'setAgent',
        M = 'fetchAgentTemplates',
        q = {
          graph: {
            nodes: [
              {
                id: p.pj,
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
        D = function () {
          var e,
            n = (0, A.$G)().t,
            t = (0, v.a)({
              queryKey: [M],
              initialData: [],
              queryFn:
                ((e = u()(
                  i()().mark(function e() {
                    var t, a;
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.listTemplates();
                          case 2:
                            return (
                              (t = e.sent),
                              (a = t.data),
                              Array.isArray(null == a ? void 0 : a.data) &&
                                a.data.unshift({
                                  id: (0, k.Z)(),
                                  title: n('flow.blank'),
                                  description: n('flow.createFromNothing'),
                                  dsl: q,
                                }),
                              e.abrupt('return', a.data)
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
        K = function () {
          var e,
            n = (0, N.Qe)(),
            t = n.searchString,
            a = n.handleInputChange,
            s = (0, N.ye)(),
            o = s.pagination,
            c = s.setPagination,
            l = (0, C.Z)(t, { wait: 500 }),
            d = (0, v.a)({
              queryKey: [S, r()({ debouncedSearchString: l }, o)],
              initialData: { kbs: [], total: 0 },
              gcTime: 0,
              queryFn:
                ((e = u()(
                  i()().mark(function e() {
                    var n, t, a;
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
                              (a = t.data),
                              e.abrupt(
                                'return',
                                null !== (n = null == a ? void 0 : a.data) &&
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
            g = d.data,
            p = d.isFetching,
            m = (0, j.useCallback)(
              function (e) {
                a(e);
              },
              [a],
            );
          return {
            data: g.kbs,
            loading: p,
            searchString: t,
            handleInputChange: m,
            pagination: r()(
              r()({}, o),
              {},
              { total: null == g ? void 0 : g.total },
            ),
            setPagination: c,
          };
        },
        I = function () {
          var e,
            n = (0, x.NL)(),
            t = (0, y.D)({
              mutationKey: [P],
              mutationFn:
                ((e = u()(
                  i()().mark(function e(t) {
                    var a, r, s, o;
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.settingCanvas(t);
                          case 2:
                            return (
                              0 ===
                              (null == (s = e.sent) ||
                              null === (a = s.data) ||
                              void 0 === a
                                ? void 0
                                : a.code)
                                ? (b.ZP.success('success'),
                                  n.invalidateQueries({ queryKey: [S] }))
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
                                  null === (r = s.data) ||
                                  void 0 === r
                                  ? void 0
                                  : r.code,
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
        L = function () {
          var e,
            n = (0, x.NL)(),
            t = (0, y.D)({
              mutationKey: [R],
              mutationFn:
                ((e = u()(
                  i()().mark(function e(t) {
                    var a, r, s;
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), h.Z.removeCanvas({ canvasIds: t })
                            );
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (s = r.data).code &&
                                n.invalidateQueries({ queryKey: [S] }),
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
            n = (0, Z.UO)().id,
            t = (0, m.P7)().sharedId,
            a = (0, v.a)({
              queryKey: [F],
              initialData: {},
              refetchOnReconnect: !1,
              refetchOnMount: !1,
              refetchOnWindowFocus: !1,
              gcTime: 0,
              queryFn:
                ((e = u()(
                  i()().mark(function e() {
                    var a, r, s, o;
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.getCanvas({}, t || n);
                          case 2:
                            return (
                              (r = e.sent),
                              (s = r.data),
                              (o = (0, f.Bl)(
                                (0, w.get)(s, 'data.dsl.messages', []),
                              )),
                              (0, w.set)(s, 'data.dsl.messages', o),
                              e.abrupt(
                                'return',
                                null !== (a = null == s ? void 0 : s.data) &&
                                  void 0 !== a
                                  ? a
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
          return { data: a.data, loading: a.isFetching, refetch: a.refetch };
        },
        X = function () {
          var e,
            n = (0, Z.UO)().id,
            t = (0, y.D)({
              mutationKey: [z],
              mutationFn:
                ((e = u()(
                  i()().mark(function e() {
                    var t, a;
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.resetCanvas({ id: n });
                          case 2:
                            return (
                              (t = e.sent), (a = t.data), e.abrupt('return', a)
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
        E = function () {
          var e,
            n = (0, x.NL)(),
            t = (0, y.D)({
              mutationKey: [T],
              mutationFn:
                ((e = u()(
                  i()().mark(function e(t) {
                    var a, r, s;
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.Z.setCanvas(t);
                          case 2:
                            return (
                              (a = e.sent),
                              (r = a.data),
                              0 === (s = void 0 === r ? {} : r).code &&
                                (b.ZP.success(
                                  g.Z.t(
                                    'message.'.concat(
                                      null != t && t.id
                                        ? 'modified'
                                        : 'created',
                                    ),
                                  ),
                                ),
                                n.invalidateQueries({ queryKey: [S] })),
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
    49152: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return M;
          },
        });
      var a = t(97857),
        r = t.n(a),
        s = t(87926),
        i = t(61363),
        o = t(57636),
        u = t(57509),
        c = t(704),
        l = t(29612),
        d = t(96486),
        g = t(31012),
        p = t(62435),
        m = t(91124),
        h = t(5715),
        f = t(87030),
        v = t(28382),
        x = t(26625),
        y = t(25910),
        C = t(25169),
        b = t(13718),
        w = t(67421),
        j = t(86074);
      function A(e) {
        var n = e.children,
          t = e.showAgentRenameModal,
          a = e.agent,
          r = (0, w.$G)().t,
          s = (0, l.W)().deleteAgent,
          i = (0, p.useCallback)(
            function (e) {
              e.stopPropagation(), t(a);
            },
            [a, t],
          ),
          o = (0, p.useCallback)(
            function () {
              s([a.id]);
            },
            [a.id, s],
          );
        return (0, j.jsxs)(y.h_, {
          children: [
            (0, j.jsx)(y.$F, { asChild: !0, children: n }),
            (0, j.jsxs)(y.AW, {
              children: [
                (0, j.jsxs)(y.Xi, {
                  onClick: i,
                  children: [r('common.rename'), ' ', (0, j.jsx)(C.Z, {})],
                }),
                (0, j.jsx)(y.VD, {}),
                (0, j.jsx)(x.h, {
                  onOk: o,
                  children: (0, j.jsxs)(y.Xi, {
                    className: 'text-text-delete-red',
                    onSelect: function (e) {
                      e.preventDefault();
                    },
                    onClick: function (e) {
                      e.stopPropagation();
                    },
                    children: [r('common.delete'), ' ', (0, j.jsx)(b.Z, {})],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function Z(e) {
        var n = e.data,
          t = e.showAgentRenameModal,
          a = (0, c.$)().navigateToAgent;
        return (0, j.jsx)(
          f.Zb,
          {
            className: 'w-40',
            onClick: a(n.id),
            children: (0, j.jsxs)(f.aY, {
              className: 'p-2.5 pt-2 group',
              children: [
                (0, j.jsxs)('section', {
                  className: 'flex justify-between mb-2',
                  children: [
                    (0, j.jsx)('div', {
                      className: 'flex gap-2 items-center',
                      children: (0, j.jsxs)(h.qE, {
                        className: 'size-6 rounded-lg',
                        children: [
                          (0, j.jsx)(h.F$, { src: n.avatar }),
                          (0, j.jsx)(h.Q5, {
                            className: 'rounded-lg ',
                            children: 'CN',
                          }),
                        ],
                      }),
                    }),
                    (0, j.jsx)(A, {
                      showAgentRenameModal: t,
                      agent: n,
                      children: (0, j.jsx)(m.z, {}),
                    }),
                  ],
                }),
                (0, j.jsx)('div', {
                  className: 'flex justify-between items-end',
                  children: (0, j.jsxs)('div', {
                    className: 'w-full',
                    children: [
                      (0, j.jsx)('h3', {
                        className: 'text-lg font-semibold mb-2 line-clamp-1',
                        children: n.title,
                      }),
                      (0, j.jsx)('p', {
                        className: 'text-xs text-text-sub-title',
                        children: n.description,
                      }),
                      (0, j.jsx)('p', {
                        className: 'text-xs text-text-sub-title',
                        children: (0, v.p6)(n.update_time),
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
      var k = t(15009),
        N = t.n(k),
        S = t(99289),
        P = t.n(S),
        R = t(5574),
        F = t.n(R),
        z = t(86968),
        T = function () {
          var e = (0, p.useState)({}),
            n = F()(e, 2),
            t = n[0],
            a = n[1],
            s = (0, z.pG)(),
            i = s.visible,
            o = s.hideModal,
            u = s.showModal,
            c = (0, l.Eb)(),
            g = c.updateAgentSetting,
            m = c.loading,
            h = (0, p.useCallback)(
              (function () {
                var e = P()(
                  N()().mark(function e(n) {
                    return N()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g(
                                r()(
                                  r()(
                                    {},
                                    (0, d.pick)(t, [
                                      'id',
                                      'avatar',
                                      'description',
                                      'permission',
                                    ]),
                                  ),
                                  {},
                                  { title: n },
                                ),
                              )
                            );
                          case 2:
                            0 === e.sent && o();
                          case 4:
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
              [g, t, o],
            ),
            f = (0, p.useCallback)(
              (function () {
                var e = P()(
                  N()().mark(function e(n) {
                    return N()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            a(n), u();
                          case 2:
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
              [u],
            );
          return {
            agentRenameLoading: m,
            initialAgentName: null == t ? void 0 : t.title,
            onAgentRenameOk: h,
            agentRenameVisible: i,
            hideAgentRenameModal: o,
            showAgentRenameModal: f,
          };
        };
      function M() {
        var e = (0, l.nH)(),
          n = e.data,
          t = e.pagination,
          a = e.setPagination,
          m = e.searchString,
          h = e.handleInputChange,
          f = (0, c.$)().navigateToAgentTemplates,
          v = T(),
          x = v.agentRenameLoading,
          y = v.initialAgentName,
          C = v.onAgentRenameOk,
          b = v.agentRenameVisible,
          w = v.hideAgentRenameModal,
          A = v.showAgentRenameModal,
          k = (0, p.useCallback)(
            function (e, n) {
              a({ page: e, pageSize: n });
            },
            [a],
          );
        return (0, j.jsxs)('section', {
          children: [
            (0, j.jsx)('div', {
              className: 'px-8 pt-8',
              children: (0, j.jsx)(s.Z, {
                title: 'Agents',
                searchString: m,
                onSearchChange: h,
                children: (0, j.jsxs)(o.zx, {
                  onClick: f,
                  children: [
                    (0, j.jsx)(g.Z, { className: 'mr-2 h-4 w-4' }),
                    'Create Agent',
                  ],
                }),
              }),
            }),
            (0, j.jsx)('div', {
              className: 'flex flex-wrap gap-4 max-h-[78vh] overflow-auto px-8',
              children: n.map(function (e) {
                return (0, j.jsx)(
                  Z,
                  { data: e, showAgentRenameModal: A },
                  e.id,
                );
              }),
            }),
            (0, j.jsx)('div', {
              className: 'mt-8 px-8',
              children: (0, j.jsx)(
                u.g,
                r()(
                  r()({}, (0, d.pick)(t, 'current', 'pageSize')),
                  {},
                  { total: t.total, onChange: k },
                ),
              ),
            }),
            b &&
              (0, j.jsx)(i.L, {
                hideModal: w,
                onOk: C,
                initialName: y,
                loading: x,
              }),
          ],
        });
      }
    },
    21578: function (e, n, t) {
      var a = t(60806),
        r = t(66582),
        s = t(78158),
        i = {
          getCanvas: { url: a.Z.getCanvas, method: 'get' },
          getCanvasSSE: { url: a.Z.getCanvasSSE, method: 'get' },
          setCanvas: { url: a.Z.setCanvas, method: 'post' },
          getListVersion: { url: a.Z.getListVersion, method: 'get' },
          getVersion: { url: a.Z.getVersion, method: 'get' },
          listCanvas: { url: a.Z.listCanvas, method: 'get' },
          resetCanvas: { url: a.Z.resetCanvas, method: 'post' },
          removeCanvas: { url: a.Z.removeCanvas, method: 'post' },
          runCanvas: { url: a.Z.runCanvas, method: 'post' },
          listTemplates: { url: a.Z.listTemplates, method: 'get' },
          testDbConnect: { url: a.Z.testDbConnect, method: 'post' },
          getInputElements: { url: a.Z.getInputElements, method: 'get' },
          debugSingle: { url: a.Z.debug, method: 'post' },
          listCanvasTeam: { url: a.Z.listCanvasTeam, method: 'get' },
          settingCanvas: { url: a.Z.settingCanvas, method: 'post' },
        },
        o = (0, r.Z)(i, s.ZP);
      n.Z = o;
    },
  },
]);
//# sourceMappingURL=p__agents__index.7e150d9a.async.js.map
