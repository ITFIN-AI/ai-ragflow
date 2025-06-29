'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [5040],
  {
    91028: function (e, n, t) {
      t.d(n, {
        $D: function () {
          return x;
        },
        Ah: function () {
          return T;
        },
        Cf: function () {
          return N;
        },
        OW: function () {
          return S;
        },
        PU: function () {
          return P;
        },
        RQ: function () {
          return O;
        },
        Ty: function () {
          return F;
        },
        VF: function () {
          return Q;
        },
        VH: function () {
          return A;
        },
        WP: function () {
          return L;
        },
        Ys: function () {
          return _;
        },
        Zo: function () {
          return R;
        },
        bP: function () {
          return B;
        },
        cE: function () {
          return E;
        },
        en: function () {
          return Z;
        },
        g6: function () {
          return D;
        },
        vV: function () {
          return I;
        },
        wC: function () {
          return K;
        },
        xr: function () {
          return M;
        },
        y8: function () {
          return q;
        },
      });
      var r = t(97857),
        a = t.n(r),
        o = t(15009),
        s = t.n(o),
        i = t(99289),
        u = t.n(i),
        c = t(5574),
        d = t.n(c),
        l = t(1079),
        f = t(54707),
        v = t(36235),
        g = t(53506),
        p = t(71250),
        m = t(78551),
        h = t(30202),
        C = t(4527),
        w = t(45360),
        y = (t(27484), t(96486)),
        k = t(62435),
        b = t(42028),
        x = function () {
          var e = (0, b.lr)(),
            n = d()(e, 2),
            t = (n[0], n[1]),
            r = (0, k.useMemo)(function () {
              return new URLSearchParams();
            }, []);
          return {
            handleClickDialog: (0, k.useCallback)(
              function (e) {
                r.set(l.oQ.DialogId, e), t(r);
              },
              [r, t],
            ),
          };
        },
        I = function () {
          var e = (0, b.lr)(),
            n = d()(e, 2),
            t = n[0],
            r = n[1],
            a = (0, k.useMemo)(
              function () {
                return new URLSearchParams(t.toString());
              },
              [t],
            );
          return {
            handleClickConversation: (0, k.useCallback)(
              function (e, n) {
                a.set(l.oQ.ConversationId, e), a.set(l.oQ.isNew, n), r(a);
              },
              [r, a],
            ),
          };
        },
        D = function () {
          var e = (0, b.lr)(),
            n = d()(e, 1)[0];
          return {
            dialogId: n.get(l.oQ.DialogId) || '',
            conversationId: n.get(l.oQ.ConversationId) || '',
            isNew: n.get(l.oQ.isNew) || '',
          };
        },
        Z = function () {
          var e,
            n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = x().handleClickDialog,
            r = D().dialogId,
            a = (0, m.a)({
              queryKey: ['fetchDialogList'],
              initialData: [],
              gcTime: 0,
              refetchOnWindowFocus: !1,
              queryFn:
                ((e = u()(
                  s()().mark(function e() {
                    var a,
                      o,
                      i,
                      u,
                      c,
                      d,
                      l,
                      f = arguments;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              o = f.length, i = new Array(o), u = 0;
                              u < o;
                              u++
                            )
                              i[u] = f[u];
                            return (
                              console.log('🚀 ~ queryFn: ~ params:', i),
                              (e.next = 4),
                              g.Z.listDialog()
                            );
                          case 4:
                            return (
                              (c = e.sent),
                              0 === (d = c.data).code &&
                                ((l = d.data),
                                n ||
                                  (l.length > 0
                                    ? l.every(function (e) {
                                        return e.id !== r;
                                      }) && t(d.data[0].id)
                                    : b.m8.push('/chat'))),
                              e.abrupt(
                                'return',
                                null !== (a = null == d ? void 0 : d.data) &&
                                  void 0 !== a
                                  ? a
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
                  return e.apply(this, arguments);
                }),
            });
          return { data: a.data, loading: a.isFetching, refetch: a.refetch };
        },
        M = function () {
          var e,
            n = (0, m.a)({
              queryKey: ['fetchChatAppList'],
              initialData: [],
              gcTime: 0,
              refetchOnWindowFocus: !1,
              queryFn:
                ((e = u()(
                  s()().mark(function e() {
                    var n, t, r;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), g.Z.listDialog();
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
            });
          return { data: n.data, loading: n.isFetching, refetch: n.refetch };
        },
        A = function () {
          var e,
            n = (0, h.NL)(),
            t = (0, C.D)({
              mutationKey: ['setDialog'],
              mutationFn:
                ((e = u()(
                  s()().mark(function e(t) {
                    var r, a;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), g.Z.setDialog(t);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (a = r.data).code &&
                                (n.invalidateQueries({
                                  exact: !1,
                                  queryKey: ['fetchDialogList'],
                                }),
                                n.invalidateQueries({
                                  queryKey: ['fetchDialog'],
                                }),
                                w.ZP.success(
                                  f.Z.t(
                                    'message.'.concat(
                                      t.dialog_id ? 'modified' : 'created',
                                    ),
                                  ),
                                )),
                              e.abrupt('return', null == a ? void 0 : a.code)
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
            setDialog: t.mutateAsync,
          };
        },
        E = function () {
          var e,
            n = D().dialogId,
            t = (0, m.a)({
              queryKey: ['fetchDialog', n],
              gcTime: 0,
              initialData: {},
              enabled: !!n,
              refetchOnWindowFocus: !1,
              queryFn:
                ((e = u()(
                  s()().mark(function e() {
                    var t, r, a;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), g.Z.getDialog({ dialogId: n });
                          case 2:
                            return (
                              (r = e.sent),
                              (a = r.data),
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
            });
          return { data: t.data, loading: t.isFetching, refetch: t.refetch };
        },
        N = function () {
          var e,
            n = (0, C.D)({
              mutationKey: ['fetchManualDialog'],
              gcTime: 0,
              mutationFn:
                ((e = u()(
                  s()().mark(function e(n) {
                    var t, r;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), g.Z.getDialog({ dialogId: n });
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
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            fetchDialog: n.mutateAsync,
          };
        },
        P = function () {
          var e,
            n = (0, h.NL)(),
            t = (0, C.D)({
              mutationKey: ['removeDialog'],
              mutationFn:
                ((e = u()(
                  s()().mark(function e(t) {
                    var r, a;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), g.Z.removeDialog({ dialogIds: t })
                            );
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (a = r.data).code &&
                                (n.invalidateQueries({
                                  queryKey: ['fetchDialogList'],
                                }),
                                w.ZP.success(f.Z.t('message.deleted'))),
                              e.abrupt('return', a.code)
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
            removeDialog: t.mutateAsync,
          };
        },
        F = function () {
          var e,
            n = D().dialogId,
            t = I().handleClickConversation,
            r = (0, m.a)({
              queryKey: ['fetchConversationList', n],
              initialData: [],
              gcTime: 0,
              refetchOnWindowFocus: !1,
              enabled: !!n,
              queryFn:
                ((e = u()(
                  s()().mark(function e() {
                    var r, a;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g.Z.listConversation({ dialogId: n })
                            );
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (a = r.data).code &&
                                (a.data.length > 0
                                  ? t(a.data[0].id, '')
                                  : t('', '')),
                              e.abrupt('return', null == a ? void 0 : a.data)
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
          return { data: r.data, loading: r.isFetching, refetch: r.refetch };
        },
        L = function () {
          var e,
            n = D(),
            t = n.isNew,
            r = n.conversationId,
            o = (0, v.P7)().sharedId,
            i = (0, m.a)({
              queryKey: ['fetchConversation', r],
              initialData: {},
              gcTime: 0,
              refetchOnWindowFocus: !1,
              queryFn:
                ((e = u()(
                  s()().mark(function e() {
                    var n, i, u, c, d;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ('true' === t || !(0, p.IC)(o || r)) {
                              e.next = 8;
                              break;
                            }
                            return (
                              (e.next = 3),
                              g.Z.getConversation({ conversationId: r || o })
                            );
                          case 3:
                            return (
                              (i = e.sent),
                              (u = i.data),
                              (c =
                                null !== (n = null == u ? void 0 : u.data) &&
                                void 0 !== n
                                  ? n
                                  : {}),
                              (d = (0, p.Bl)(null == c ? void 0 : c.message)),
                              e.abrupt(
                                'return',
                                a()(a()({}, c), {}, { message: d }),
                              )
                            );
                          case 8:
                            return e.abrupt('return', { message: [] });
                          case 9:
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
          return { data: i.data, loading: i.isFetching, refetch: i.refetch };
        },
        q = function () {
          var e,
            n = D().isNew,
            t = (0, v.P7)().sharedId,
            r = (0, m.a)({
              queryKey: ['fetchConversationSSE', t],
              initialData: {},
              gcTime: 0,
              refetchOnWindowFocus: !1,
              queryFn:
                ((e = u()(
                  s()().mark(function e() {
                    var r, o, i, u, c;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ('true' === n || !(0, p.IC)(t || '')) {
                              e.next = 10;
                              break;
                            }
                            if (t) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt('return', {});
                          case 3:
                            return (e.next = 5), g.Z.getConversationSSE({}, t);
                          case 5:
                            return (
                              (o = e.sent),
                              (i = o.data),
                              (u =
                                null !== (r = null == i ? void 0 : i.data) &&
                                void 0 !== r
                                  ? r
                                  : {}),
                              (c = (0, p.Bl)(null == u ? void 0 : u.message)),
                              e.abrupt(
                                'return',
                                a()(a()({}, u), {}, { message: c }),
                              )
                            );
                          case 10:
                            return e.abrupt('return', { message: [] });
                          case 11:
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
        Q = function () {
          var e,
            n = (0, C.D)({
              mutationKey: ['fetchManualConversation'],
              gcTime: 0,
              mutationFn:
                ((e = u()(
                  s()().mark(function e(n) {
                    var t, r;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g.Z.getConversation({ conversationId: n })
                            );
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
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            fetchConversation: n.mutateAsync,
          };
        },
        S = function () {
          var e,
            n = (0, h.NL)(),
            t = (0, C.D)({
              mutationKey: ['updateConversation'],
              mutationFn:
                ((e = u()(
                  s()().mark(function e(t) {
                    var r, o;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g.Z.setConversation(
                                a()(
                                  a()({}, t),
                                  {},
                                  {
                                    conversation_id: t.conversation_id
                                      ? t.conversation_id
                                      : (0, p.o_)(),
                                  },
                                ),
                              )
                            );
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (o = r.data).code &&
                                (n.invalidateQueries({
                                  queryKey: ['fetchConversationList'],
                                }),
                                w.ZP.success(f.Z.t('message.modified'))),
                              e.abrupt('return', o)
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
            updateConversation: t.mutateAsync,
          };
        },
        K = function () {
          var e,
            n = (0, h.NL)(),
            t = D().dialogId,
            r = (0, C.D)({
              mutationKey: ['removeConversation'],
              mutationFn:
                ((e = u()(
                  s()().mark(function e(r) {
                    var a, o;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g.Z.removeConversation({
                                conversationIds: r,
                                dialogId: t,
                              })
                            );
                          case 2:
                            return (
                              (a = e.sent),
                              0 === (o = a.data).code &&
                                n.invalidateQueries({
                                  queryKey: ['fetchConversationList'],
                                }),
                              e.abrupt('return', o.code)
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
            data: r.data,
            loading: r.isPending,
            removeConversation: r.mutateAsync,
          };
        },
        O = function () {
          var e,
            n = D().conversationId,
            t = (0, C.D)({
              mutationKey: ['deleteMessage'],
              mutationFn:
                ((e = u()(
                  s()().mark(function e(t) {
                    var r, a;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g.Z.deleteMessage({
                                messageId: t,
                                conversationId: n,
                              })
                            );
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (a = r.data).code &&
                                w.ZP.success(f.Z.t('message.deleted')),
                              e.abrupt('return', a.code)
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
            deleteMessage: t.mutateAsync,
          };
        },
        R = function () {
          var e,
            n = D().conversationId,
            t = (0, C.D)({
              mutationKey: ['feedback'],
              mutationFn:
                ((e = u()(
                  s()().mark(function e(t) {
                    var r, o;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g.Z.thumbup(
                                a()(a()({}, t), {}, { conversationId: n }),
                              )
                            );
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (o = r.data).code &&
                                w.ZP.success(f.Z.t('message.operated')),
                              e.abrupt('return', o.code)
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
            feedback: t.mutateAsync,
          };
        },
        T = function () {
          var e,
            n = (0, C.D)({
              mutationKey: ['createSharedConversation'],
              mutationFn:
                ((e = u()(
                  s()().mark(function e(n) {
                    var t, r;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g.Z.createExternalConversation({ userId: n })
                            );
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
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            createSharedConversation: n.mutateAsync,
          };
        },
        _ = function () {
          var e,
            n = (0, C.D)({
              mutationKey: ['fetchMindMap'],
              gcTime: 0,
              mutationFn:
                ((e = u()(
                  s()().mark(function e(n) {
                    var t, r, a;
                    return s()().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), g.Z.getMindMap(n)
                              );
                            case 3:
                              return (
                                (a = e.sent),
                                e.abrupt(
                                  'return',
                                  null !==
                                    (t =
                                      null == a ||
                                      null === (r = a.data) ||
                                      void 0 === r
                                        ? void 0
                                        : r.data) && void 0 !== t
                                    ? t
                                    : {},
                                )
                              );
                            case 7:
                              return (
                                (e.prev = 7),
                                (e.t0 = e.catch(0)),
                                (0, y.has)(e.t0, 'message') &&
                                  w.ZP.error(e.t0.message),
                                e.abrupt('return', [])
                              );
                            case 11:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]],
                    );
                  }),
                )),
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            fetchMindMap: n.mutateAsync,
          };
        },
        B = function () {
          var e,
            n = (0, C.D)({
              mutationKey: ['fetchRelatedQuestions'],
              gcTime: 0,
              mutationFn:
                ((e = u()(
                  s()().mark(function e(n) {
                    var t, r, a;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g.Z.getRelatedQuestions({ question: n })
                            );
                          case 2:
                            return (
                              (r = e.sent),
                              (a = r.data),
                              e.abrupt(
                                'return',
                                null !== (t = null == a ? void 0 : a.data) &&
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
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            fetchRelatedQuestions: n.mutateAsync,
          };
        };
    },
    41923: function (e, n, t) {
      t.d(n, {
        E$: function () {
          return Q;
        },
        G8: function () {
          return q;
        },
        GI: function () {
          return D;
        },
        HN: function () {
          return A;
        },
        NT: function () {
          return F;
        },
        XU: function () {
          return M;
        },
        ch: function () {
          return N;
        },
        dd: function () {
          return Z;
        },
        hF: function () {
          return S;
        },
        lT: function () {
          return K;
        },
        q3: function () {
          return O;
        },
        s3: function () {
          return L;
        },
        sk: function () {
          return R;
        },
      });
      var r = t(19632),
        a = t.n(r),
        o = t(15009),
        s = t.n(o),
        i = t(99289),
        u = t.n(i),
        c = t(5574),
        d = t.n(c),
        l = t(1079),
        f = t(40169),
        v = t(91028),
        g = t(86968),
        p = t(2938),
        m = t(19515),
        h = t(60806),
        C = t(71250),
        w = (t(96486), t(92742)),
        y = t.n(w),
        k = t(62435),
        b = t(42028),
        x = t(57632),
        I = function () {
          var e = (0, b.lr)(),
            n = d()(e, 2),
            t = n[0],
            r = n[1],
            a = (0, k.useMemo)(
              function () {
                return new URLSearchParams(t.toString());
              },
              [t],
            );
          return {
            setConversationIsNew: (0, k.useCallback)(
              function (e) {
                a.set(l.oQ.isNew, e), r(a);
              },
              [a, r],
            ),
            getConversationIsNew: (0, k.useCallback)(
              function () {
                return a.get(l.oQ.isNew);
              },
              [a],
            ),
          };
        },
        D = function () {
          var e = (0, v.cE)().data;
          return (0, k.useMemo)(
            function () {
              var n,
                t,
                r =
                  null !==
                    (n =
                      null == e ||
                      null === (t = e.prompt_config) ||
                      void 0 === t
                        ? void 0
                        : t.parameters) && void 0 !== n
                    ? n
                    : [];
              return e.id
                ? r.map(function (e) {
                    return {
                      key: (0, x.Z)(),
                      variable: e.key,
                      optional: e.optional,
                    };
                  })
                : [{ key: (0, x.Z)(), variable: 'knowledge', optional: !1 }];
            },
            [e],
          );
        },
        Z = function () {
          var e = (0, g.I3)(),
            n = (0, v.PU)().removeDialog;
          return {
            onRemoveDialog: function (t) {
              e({
                onOk: function () {
                  return n(t);
                },
              });
            },
          };
        },
        M = function () {
          var e = (0, k.useState)(''),
            n = d()(e, 2),
            t = n[0],
            r = n[1];
          return {
            activated: t,
            handleItemEnter: function (e) {
              r(e);
            },
            handleItemLeave: function () {
              r('');
            },
          };
        },
        A = function () {
          var e = (0, k.useState)({}),
            n = d()(e, 2),
            t = n[0],
            r = n[1],
            a = (0, v.Cf)().fetchDialog,
            o = (0, v.VH)(),
            i = o.setDialog,
            c = o.loading,
            l = (0, g.pG)(),
            f = l.visible,
            p = l.hideModal,
            m = l.showModal,
            h = (0, k.useCallback)(
              function () {
                r({}), p();
              },
              [p],
            ),
            C = (0, k.useCallback)(
              (function () {
                var e = u()(
                  s()().mark(function e(n) {
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), i(n);
                          case 2:
                            0 === e.sent && h();
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
              [i, h],
            ),
            w = (0, k.useCallback)(
              (function () {
                var e = u()(
                  s()().mark(function e(n) {
                    var t;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!n) {
                              e.next = 5;
                              break;
                            }
                            return (e.next = 3), a(n);
                          case 3:
                            0 === (t = e.sent).code && r(t.data);
                          case 5:
                            m();
                          case 6:
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
              [m, a],
            ),
            y = (0, k.useCallback)(function () {
              r({});
            }, []);
          return {
            dialogSettingLoading: c,
            initialDialog: t,
            onDialogEditOk: C,
            dialogEditVisible: f,
            hideDialogEditModal: h,
            showDialogEditModal: w,
            clearDialog: y,
          };
        },
        E = function () {
          var e = (0, v.g6)().dialogId,
            n = (0, v.en)(!0).data;
          return (0, k.useMemo)(
            function () {
              var t;
              return null ===
                (t = n.find(function (n) {
                  return n.id === e;
                })) || void 0 === t
                ? void 0
                : t.prompt_config.prologue;
            },
            [e, n],
          );
        },
        N = function () {
          var e,
            n,
            t,
            r,
            o,
            s = (0, g.qM)('chat').t,
            i = (0, k.useState)([]),
            u = d()(i, 2),
            c = u[0],
            f = u[1],
            p = (0, v.Ty)(),
            m = p.data,
            h = p.loading,
            w = (0, v.g6)().dialogId,
            y = ((e = (0, b.lr)()),
            (n = d()(e, 2)),
            (t = n[0]),
            (r = n[1]),
            (o = (0, k.useMemo)(
              function () {
                return new URLSearchParams(t.toString());
              },
              [t],
            )),
            {
              setNewConversationRouteParams: (0, k.useCallback)(
                function (e, n) {
                  o.set(l.oQ.ConversationId, e), o.set(l.oQ.isNew, n), r(o);
                },
                [o, r],
              ),
            }).setNewConversationRouteParams,
            x = E(),
            I = (0, k.useCallback)(
              function () {
                var e = (0, C.o_)();
                f(function (n) {
                  return w
                    ? (y(e, 'true'),
                      [
                        {
                          id: e,
                          name: s('newConversation'),
                          dialog_id: w,
                          is_new: !0,
                          message: [{ content: x, role: l.Cs.Assistant }],
                        },
                      ].concat(a()(m)))
                    : n;
                });
              },
              [m, w, x, s, y],
            );
          return (
            (0, k.useEffect)(
              function () {
                f(a()(m));
              },
              [m],
            ),
            { list: c, addTemporaryConversation: I, loading: h }
          );
        },
        P = function () {
          var e = (0, v.g6)().dialogId,
            n = (0, v.OW)().updateConversation,
            t = (0, k.useCallback)(
              (function () {
                var t = u()(
                  s()().mark(function t(r) {
                    var a,
                      o,
                      i,
                      u = arguments;
                    return s()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (a = u.length > 1 && void 0 !== u[1] && u[1]),
                              (o = u.length > 2 ? u[2] : void 0),
                              (t.next = 4),
                              n({
                                dialog_id: e,
                                name: r,
                                is_new: a,
                                conversation_id: o,
                                message: [{ role: l.Cs.Assistant, content: r }],
                              })
                            );
                          case 4:
                            return (i = t.sent), t.abrupt('return', i);
                          case 6:
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
              [n, e],
            );
          return { setConversation: t };
        },
        F = function () {
          var e = (0, k.useState)(''),
            n = d()(e, 2),
            t = n[0],
            r = n[1];
          return {
            handleInputChange: function (e) {
              var n = e.target.value;
              r(n);
            },
            value: t,
            setValue: r,
          };
        },
        L = function (e) {
          var n = P().setConversation,
            t = (0, v.g6)(),
            r = t.conversationId,
            o = t.isNew,
            i = F(),
            c = i.handleInputChange,
            d = i.value,
            f = i.setValue,
            g = (0, p.H0)(h.Z.completeConversation),
            m = g.send,
            C = g.answer,
            w = g.done,
            b = (function () {
              var e = (0, p.y7)(),
                n = e.ref,
                t = e.setDerivedMessages,
                r = e.derivedMessages,
                a = e.addNewestAnswer,
                o = e.addNewestQuestion,
                s = e.removeLatestMessage,
                i = e.removeMessageById,
                u = e.removeMessagesAfterCurrentMessage,
                c = (0, v.WP)(),
                d = c.data,
                f = c.loading,
                g = (0, v.g6)(),
                m = g.conversationId,
                h = g.dialogId,
                C = g.isNew,
                w = E(),
                y = (0, k.useCallback)(
                  function () {
                    if ('' !== h && 'true' === C) {
                      var e = {
                        role: l.Cs.Assistant,
                        content: w,
                        id: (0, x.Z)(),
                      };
                      t([e]);
                    }
                  },
                  [h, C, w, t],
                );
              return (
                (0, k.useEffect)(
                  function () {
                    y();
                  },
                  [y],
                ),
                (0, k.useEffect)(
                  function () {
                    var e;
                    m &&
                      'true' !== C &&
                      (null === (e = d.message) || void 0 === e
                        ? void 0
                        : e.length) > 0 &&
                      t(d.message),
                      m || t([]);
                  },
                  [d.message, m, t, C],
                ),
                {
                  ref: n,
                  derivedMessages: r,
                  loading: f,
                  addNewestAnswer: a,
                  addNewestQuestion: o,
                  removeLatestMessage: s,
                  removeMessageById: i,
                  removeMessagesAfterCurrentMessage: u,
                }
              );
            })(),
            D = b.ref,
            Z = b.derivedMessages,
            M = b.loading,
            A = b.addNewestAnswer,
            N = b.addNewestQuestion,
            L = b.removeLatestMessage,
            q = b.removeMessageById,
            Q = b.removeMessagesAfterCurrentMessage,
            S = I(),
            K = S.setConversationIsNew,
            O = S.getConversationIsNew,
            R = (0, k.useCallback)(
              function () {
                e.abort();
              },
              [e],
            ),
            T = (0, k.useCallback)(
              (function () {
                var n = u()(
                  s()().mark(function n(t) {
                    var o, i, u, c, d, l;
                    return s()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (u = t.message),
                              (c = t.currentConversationId),
                              (d = t.messages),
                              (n.next = 3),
                              m(
                                {
                                  conversation_id: null != c ? c : r,
                                  messages: [].concat(
                                    a()(
                                      null !== (o = null != d ? d : Z) &&
                                        void 0 !== o
                                        ? o
                                        : [],
                                    ),
                                    [u],
                                  ),
                                },
                                e,
                              )
                            );
                          case 3:
                            !(l = n.sent) ||
                              (200 ===
                                (null == l ? void 0 : l.response.status) &&
                                0 ===
                                  (null == l ||
                                  null === (i = l.data) ||
                                  void 0 === i
                                    ? void 0
                                    : i.code)) ||
                              (f(u.content),
                              console.info('removeLatestMessage111'),
                              L());
                          case 5:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                return function (e) {
                  return n.apply(this, arguments);
                };
              })(),
              [Z, r, L, f, m, e],
            ),
            _ = (0, k.useCallback)(
              (function () {
                var e = u()(
                  s()().mark(function e(t) {
                    var a, o;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ('true' === O()) {
                              e.next = 5;
                              break;
                            }
                            T({ message: t }), (e.next = 9);
                            break;
                          case 5:
                            return (e.next = 7), n(t.content, !0, r);
                          case 7:
                            0 === (a = e.sent).code &&
                              (K(''),
                              (o = a.data.id),
                              T({
                                message: t,
                                currentConversationId: o,
                                messages: a.data.message,
                              }));
                          case 9:
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
              [n, T, K, O, r],
            ),
            B = (0, p.vv)({
              removeMessagesAfterCurrentMessage: Q,
              sendMessage: T,
              messages: Z,
            }).regenerateMessage;
          return (
            (0, k.useEffect)(
              function () {
                C.answer && r && 'true' !== o && A(C);
              },
              [C, A, r, o],
            ),
            {
              handlePressEnter: (0, k.useCallback)(
                function (e) {
                  if ('' !== y()(d)) {
                    var n = (0, x.Z)();
                    N({ content: d, doc_ids: e, id: n, role: l.Cs.User }),
                      w &&
                        (f(''),
                        _({
                          id: n,
                          content: d.trim(),
                          role: l.Cs.User,
                          doc_ids: e,
                        }));
                  }
                },
                [N, _, w, f, d],
              ),
              handleInputChange: c,
              value: d,
              setValue: f,
              regenerateMessage: B,
              sendLoading: !w,
              loading: M,
              ref: D,
              derivedMessages: Z,
              removeMessageById: q,
              stopOutputMessage: R,
            }
          );
        },
        q = function () {
          return function (e) {
            var n = (0, m.mD)(e),
              t = f.eV[n];
            return '@/assets/svg/file-icon/'.concat(t);
          };
        },
        Q = function () {
          var e = (0, g.I3)(),
            n = (0, v.wC)().removeConversation,
            t = function (e) {
              return u()(
                s()().mark(function t() {
                  var r;
                  return s()().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), n(e);
                        case 2:
                          return (r = t.sent), t.abrupt('return', r);
                        case 4:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              );
            };
          return {
            onRemoveConversation: function (n) {
              e({ onOk: t(n) });
            },
          };
        },
        S = function () {
          var e = (0, k.useState)({}),
            n = d()(e, 2),
            t = n[0],
            r = n[1],
            a = (0, v.VF)().fetchConversation,
            o = (0, g.pG)(),
            i = o.visible,
            c = o.hideModal,
            l = o.showModal,
            f = (0, v.OW)(),
            p = f.updateConversation,
            m = f.loading,
            h = (0, k.useCallback)(
              (function () {
                var e = u()(
                  s()().mark(function e(n) {
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              p({ conversation_id: t.id, name: n, is_new: !1 })
                            );
                          case 2:
                            0 === e.sent.code && c();
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
              [p, t, c],
            ),
            C = (0, k.useCallback)(
              (function () {
                var e = u()(
                  s()().mark(function e(n) {
                    var t;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), a(n);
                          case 2:
                            0 === (t = e.sent).code && r(t.data), l();
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
              [l, a],
            );
          return {
            conversationRenameLoading: m,
            initialConversationName: t.name,
            onConversationRenameOk: h,
            conversationRenameVisible: i,
            hideConversationRenameModal: c,
            showConversationRenameModal: C,
          };
        },
        K = function () {
          var e = (0, v.g6)(),
            n = e.dialogId,
            t = e.conversationId;
          return '' === n || '' === t;
        },
        O = function (e) {
          return '' === y()(e);
        },
        R = function () {
          var e = P().setConversation,
            n = (0, v.g6)().dialogId,
            t = I().getConversationIsNew,
            r = (0, k.useCallback)(
              (function () {
                var n = u()(
                  s()().mark(function n(r) {
                    var a;
                    return s()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if ('true' !== t()) {
                              n.next = 6;
                              break;
                            }
                            return (n.next = 4), e(r, !0);
                          case 4:
                            return (a = n.sent), n.abrupt('return', a);
                          case 6:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                return function (e) {
                  return n.apply(this, arguments);
                };
              })(),
              [e, t],
            );
          return { createConversationBeforeUploadDocument: r, dialogId: n };
        };
    },
    36235: function (e, n, t) {
      t.d(n, {
        I8: function () {
          return I;
        },
        P7: function () {
          return x;
        },
      });
      var r = t(97857),
        a = t.n(r),
        o = t(15009),
        s = t.n(o),
        i = t(99289),
        u = t.n(i),
        c = t(5574),
        d = t.n(c),
        l = t(1079),
        f = t(91028),
        v = t(2938),
        g = t(45360),
        p = t(96486),
        m = t(92742),
        h = t.n(m),
        C = t(62435),
        w = t(42028),
        y = t(57632),
        k = t(41923),
        b = function (e) {
          var n;
          return (
            e &&
            (200 !== (null == e ? void 0 : e.response.status) ||
              0 !==
                (null == e || null === (n = e.data) || void 0 === n
                  ? void 0
                  : n.code))
          );
        },
        x = function () {
          var e = (0, w.lr)(),
            n = d()(e, 1)[0],
            t = 'data_',
            r = Object.fromEntries(
              n
                .entries()
                .filter(function (e) {
                  var n = d()(e, 2),
                    r = n[0];
                  n[1];
                  return r.startsWith(t);
                })
                .map(function (e) {
                  var n = d()(e, 2),
                    r = n[0],
                    a = n[1];
                  return [r.replace(t, ''), a];
                }),
            );
          return {
            from: n.get('from'),
            sharedId: n.get('shared_id'),
            locale: n.get('locale'),
            data: r,
            visibleAvatar:
              !n.get('visible_avatar') || '1' !== n.get('visible_avatar'),
          };
        },
        I = function () {
          var e = x(),
            n = e.from,
            t = e.sharedId,
            r = e.data,
            o = (0, f.Ah)().createSharedConversation,
            i = (0, k.NT)(),
            c = i.handleInputChange,
            m = i.value,
            w = i.setValue,
            I = (0, v.H0)(
              '/api/v1/'
                .concat(n === l.qH.Agent ? 'agentbots' : 'chatbots', '/')
                .concat(t, '/completions'),
            ),
            D = I.send,
            Z = I.answer,
            M = I.done,
            A = I.stopOutputMessage,
            E = (0, v.y7)(),
            N = E.derivedMessages,
            P = E.ref,
            F = E.removeLatestMessage,
            L = E.addNewestAnswer,
            q = E.addNewestQuestion,
            Q = (0, C.useState)(!1),
            S = d()(Q, 2),
            K = S[0],
            O = S[1],
            R = (0, C.useCallback)(
              (function () {
                var e = u()(
                  s()().mark(function e(n, r) {
                    var a;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              D({
                                conversation_id: null != r ? r : t,
                                quote: !0,
                                question: n.content,
                                session_id: (0, p.get)(N, '0.session_id'),
                              })
                            );
                          case 2:
                            (a = e.sent), b(a) && (w(n.content), F());
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (n, t) {
                  return e.apply(this, arguments);
                };
              })(),
              [D, t, N, w, F],
            ),
            T = (0, C.useCallback)(
              (function () {
                var e = u()(
                  s()().mark(function e(n) {
                    var r, a;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ('' === t) {
                              e.next = 4;
                              break;
                            }
                            R(n), (e.next = 8);
                            break;
                          case 4:
                            return (e.next = 6), o('user id');
                          case 6:
                            0 === (r = e.sent).code &&
                              ((a = r.data.id), R(n, a));
                          case 8:
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
              [t, o, R],
            ),
            _ = (0, C.useCallback)(
              u()(
                s()().mark(function e() {
                  var n, t;
                  return s()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = { question: '' }),
                            (e.next = 3),
                            D(a()(a()({}, n), r))
                          );
                        case 3:
                          (t = e.sent),
                            b(t) &&
                              (g.ZP.error(null == t ? void 0 : t.data.message),
                              O(!0));
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [D],
            );
          return (
            (0, C.useEffect)(
              function () {
                _();
              },
              [_, D],
            ),
            (0, C.useEffect)(
              function () {
                Z.answer && L(Z);
              },
              [Z, L],
            ),
            {
              handlePressEnter: (0, C.useCallback)(
                function (e) {
                  if ('' !== h()(m)) {
                    var n = (0, y.Z)();
                    M &&
                      (w(''),
                      q({ content: m, doc_ids: e, id: n, role: l.Cs.User }),
                      T({ content: m.trim(), id: n, role: l.Cs.User }));
                  }
                },
                [q, M, T, w, m],
              ),
              handleInputChange: c,
              value: m,
              sendLoading: !M,
              ref: P,
              loading: !1,
              derivedMessages: N,
              hasError: K,
              stopOutputMessage: A,
            }
          );
        };
    },
    53506: function (e, n, t) {
      var r = t(60806),
        a = t(66582),
        o = t(78158),
        s = r.Z.getDialog,
        i = r.Z.setDialog,
        u = r.Z.listDialog,
        c = r.Z.removeDialog,
        d = r.Z.getConversation,
        l = r.Z.getConversationSSE,
        f = r.Z.setConversation,
        v = r.Z.completeConversation,
        g = {
          getDialog: { url: s, method: 'get' },
          setDialog: { url: i, method: 'post' },
          removeDialog: { url: c, method: 'post' },
          listDialog: { url: u, method: 'get' },
          listConversation: { url: r.Z.listConversation, method: 'get' },
          getConversation: { url: d, method: 'get' },
          getConversationSSE: { url: l, method: 'get' },
          setConversation: { url: f, method: 'post' },
          completeConversation: { url: v, method: 'post' },
          removeConversation: { url: r.Z.removeConversation, method: 'post' },
          createToken: { url: r.Z.createToken, method: 'post' },
          listToken: { url: r.Z.listToken, method: 'get' },
          removeToken: { url: r.Z.removeToken, method: 'post' },
          getStats: { url: r.Z.getStats, method: 'get' },
          createExternalConversation: {
            url: r.Z.createExternalConversation,
            method: 'get',
          },
          getExternalConversation: {
            url: r.Z.getExternalConversation,
            method: 'get',
          },
          completeExternalConversation: {
            url: r.Z.completeExternalConversation,
            method: 'post',
          },
          uploadAndParseExternal: {
            url: r.Z.uploadAndParseExternal,
            method: 'post',
          },
          deleteMessage: { url: r.Z.deleteMessage, method: 'post' },
          thumbup: { url: r.Z.thumbup, method: 'post' },
          tts: { url: r.Z.tts, method: 'post' },
          ask: { url: r.Z.ask, method: 'post' },
          getMindMap: { url: r.Z.mindmap, method: 'post' },
          getRelatedQuestions: { url: r.Z.getRelatedQuestions, method: 'post' },
        },
        p = (0, a.Z)(g, o.ZP);
      n.Z = p;
    },
    19515: function (e, n, t) {
      t.d(n, {
        dz: function () {
          return o;
        },
        mD: function () {
          return i;
        },
        n$: function () {
          return s;
        },
      });
      var r = t(52300),
        a = t(98361),
        o = function () {
          return { width: window.innerWidth };
        },
        s = function (e) {
          var n = new a.Z();
          return (
            n.setPublicKey(
              '-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArq9XTUSeYr2+N1h3Afl/z8Dse/2yD0ZGrKwx+EEEcdsBLca9Ynmx3nIB5obmLlSfmskLpBo0UACBmB5rEjBp2Q2f3AG3Hjd4B+gNCG6BDaawuDlgANIhGnaTLrIqWrrcm4EMzJOnAOI1fgzJRsOOUEfaS318Eq9OVO3apEyCCt0lOQK6PuksduOjVxtltDav+guVAA068NrPYmRNabVKRNLJpL8w4D44sfth5RvZ3q9t+6RTArpEtc5sh5ChzvqPOzKGMXW83C95TxmXqpbK6olN4RevSfVjEAgCydH6HN6OhtOQEcnrU97r9H0iZOWwbw3pVrZiUkuRD1R56Wzs2wIDAQAB-----END PUBLIC KEY-----',
            ),
            n.encrypt(r.DS.encode(e))
          );
        },
        i = function (e) {
          return e.slice(e.lastIndexOf('.') + 1).toLowerCase();
        };
    },
  },
]);
//# sourceMappingURL=5040.9c611349.async.js.map
