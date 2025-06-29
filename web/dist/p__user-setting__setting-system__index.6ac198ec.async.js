(self.webpackChunk = self.webpackChunk || []).push([
  [4144],
  {
    46693: function (t, e, s) {
      'use strict';
      s.d(e, {
        $: function () {
          return x;
        },
      });
      var n,
        c = s(97857),
        a = s.n(c),
        i = s(13769),
        r = s.n(i),
        o = s(39386),
        u = s(27080),
        l = s(16165),
        g = s(87547),
        p = s(7134),
        v = s(86074),
        d = ['name', 'width', 'height', 'imgClass'],
        f = [];
      try {
        (n = s(78131)),
          (f = n.keys().map(function (t) {
            return { name: t.replace(/\.\/(.*)\.\w+$/, '$1'), value: n(t) };
          }));
      } catch (t) {
        console.warn(t), (f = []);
      }
      var m = function (t) {
          var e = t.name,
            s = t.width,
            n = t.height,
            c = t.imgClass,
            i = r()(t, d),
            o = f.find(function (t) {
              return t.name === e;
            });
          return (0, v.jsx)(
            l.Z,
            a()(
              {
                component: function () {
                  return (0, v.jsx)('img', {
                    src: null == o ? void 0 : o.value,
                    alt: '',
                    width: s,
                    height: n,
                    className: (0, u.cn)(c, 'max-w-full'),
                  });
                },
              },
              i,
            ),
          );
        },
        x = function (t) {
          var e = t.name,
            s = t.height,
            n = void 0 === s ? 48 : s,
            c = t.width,
            a = void 0 === c ? 48 : c,
            i = t.size,
            r = void 0 === i ? 'large' : i,
            u = t.imgClass,
            l = o.s[e];
          return l
            ? (0, v.jsx)(m, {
                name: 'llm/'.concat(l),
                width: a,
                height: n,
                imgClass: u,
              })
            : (0, v.jsx)(p.C, {
                shape: 'square',
                size: r,
                icon: (0, v.jsx)(g.Z, {}),
              });
        };
      e.Z = m;
    },
    39259: function (t, e, s) {
      'use strict';
      s.d(e, {
        CV: function () {
          return N;
        },
        F1: function () {
          return F;
        },
        Jf: function () {
          return C;
        },
        Jv: function () {
          return M;
        },
        PI: function () {
          return D;
        },
        WH: function () {
          return j;
        },
        XH: function () {
          return T;
        },
        d1: function () {
          return E;
        },
        ef: function () {
          return q;
        },
        er: function () {
          return U;
        },
        fS: function () {
          return Z;
        },
        hZ: function () {
          return L;
        },
        jd: function () {
          return w;
        },
        m_: function () {
          return K;
        },
        nv: function () {
          return S;
        },
        oH: function () {
          return A;
        },
        v: function () {
          return P;
        },
        x_: function () {
          return I;
        },
      });
      var n = s(5574),
        c = s.n(n),
        a = s(15009),
        i = s.n(a),
        r = s(99289),
        o = s.n(r),
        u = s(40169),
        l = s(72668),
        g = s(78551),
        p = s(30202),
        v = s(4527),
        d = s(85576),
        f = s(45360),
        m = s(27856),
        x = s.n(m),
        h = s(96486),
        b = s(62435),
        k = s(67421),
        _ = s(42028),
        y = s(86074),
        w = function () {
          var t,
            e = (0, k.$G)().i18n,
            s = (0, g.a)({
              queryKey: ['userInfo'],
              initialData: {},
              gcTime: 0,
              queryFn:
                ((t = o()(
                  i()().mark(function t() {
                    var s, n, c;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.user_info();
                          case 2:
                            return (
                              (n = t.sent),
                              0 === (c = n.data).code &&
                                e.changeLanguage(u.Kj[c.data.language]),
                              t.abrupt(
                                'return',
                                null !== (s = null == c ? void 0 : c.data) &&
                                  void 0 !== s
                                  ? s
                                  : {},
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
          return { data: s.data, loading: s.isFetching };
        },
        Z = function () {
          var t,
            e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            s = (0, k.$G)().t,
            n = (0, g.a)({
              queryKey: ['tenantInfo'],
              initialData: {},
              gcTime: 0,
              queryFn:
                ((t = o()(
                  i()().mark(function t() {
                    var n, c, a;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.get_tenant_info();
                          case 2:
                            if (((n = t.sent), 0 !== (c = n.data).code)) {
                              t.next = 10;
                              break;
                            }
                            return (
                              (a = c.data),
                              e &&
                                ((0, h.isEmpty)(a.embd_id) ||
                                  (0, h.isEmpty)(a.llm_id)) &&
                                d.Z.warning({
                                  title: s('common.warn'),
                                  content: (0, y.jsx)('div', {
                                    dangerouslySetInnerHTML: {
                                      __html: x().sanitize(
                                        s('setting.modelProvidersWarn'),
                                      ),
                                    },
                                  }),
                                  onOk: function () {
                                    _.m8.push('/user-setting/model');
                                  },
                                }),
                              (a.chat_id = a.llm_id),
                              (a.speech2text_id = a.asr_id),
                              t.abrupt('return', a)
                            );
                          case 10:
                            return t.abrupt('return', c);
                          case 11:
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
        T = function () {
          var t = Z(!0).data;
          return (0, b.useMemo)(
            function () {
              var e, s;
              return (
                null !==
                  (e =
                    null == t || null === (s = t.parser_ids) || void 0 === s
                      ? void 0
                      : s.split(',')) && void 0 !== e
                  ? e
                  : []
              ).map(function (t) {
                var e = t.split(':');
                return { value: e[0], label: e[1] };
              });
            },
            [t],
          );
        },
        j = function () {
          var t,
            e = (0, p.NL)(),
            s = (0, k.$G)().t,
            n = (0, v.D)({
              mutationKey: ['saveSetting'],
              mutationFn:
                ((t = o()(
                  i()().mark(function t(n) {
                    var c, a;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.setting(n);
                          case 2:
                            return (
                              (c = t.sent),
                              0 === (a = c.data).code &&
                                (f.ZP.success(s('message.modified')),
                                e.invalidateQueries({
                                  queryKey: ['userInfo'],
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
                function (e) {
                  return t.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            saveSetting: n.mutateAsync,
          };
        },
        S = function () {
          var t = (0, b.useState)(''),
            e = c()(t, 2),
            s = e[0],
            n = e[1],
            a = (0, b.useState)(!1),
            r = c()(a, 2),
            u = r[0],
            g = r[1];
          return {
            fetchSystemVersion: (0, b.useCallback)(
              o()(
                i()().mark(function t() {
                  var e, s;
                  return i()().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              g(!0),
                              (t.next = 4),
                              l.ZP.getSystemVersion()
                            );
                          case 4:
                            (e = t.sent),
                              0 === (s = e.data).code && (n(s.data), g(!1)),
                              (t.next = 12);
                            break;
                          case 9:
                            (t.prev = 9), (t.t0 = t.catch(0)), g(!1);
                          case 12:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 9]],
                  );
                }),
              ),
              [],
            ),
            version: s,
            loading: u,
          };
        },
        C = function () {
          var t = (0, b.useState)({}),
            e = c()(t, 2),
            s = e[0],
            n = e[1],
            a = (0, b.useState)(!1),
            r = c()(a, 2),
            u = r[0],
            g = r[1];
          return {
            systemStatus: s,
            fetchSystemStatus: (0, b.useCallback)(
              o()(
                i()().mark(function t() {
                  var e, s;
                  return i()().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return g(!0), (t.next = 3), l.ZP.getSystemStatus();
                        case 3:
                          (e = t.sent),
                            0 === (s = e.data).code && (n(s.data), g(!1));
                        case 6:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              ),
              [],
            ),
            loading: u,
          };
        },
        P = function () {
          var t,
            e = (0, v.D)({
              mutationKey: ['fetchManualSystemTokenList'],
              mutationFn:
                ((t = o()(
                  i()().mark(function t() {
                    var e, s, n;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.listToken();
                          case 2:
                            return (
                              (s = t.sent),
                              (n = s.data),
                              t.abrupt(
                                'return',
                                null !== (e = null == n ? void 0 : n.data) &&
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
                  return t.apply(this, arguments);
                }),
            });
          return {
            data: e.data,
            loading: e.isPending,
            fetchSystemTokenList: e.mutateAsync,
          };
        },
        F = function () {
          var t,
            e = (0, g.a)({
              queryKey: ['fetchSystemTokenList'],
              initialData: [],
              gcTime: 0,
              queryFn:
                ((t = o()(
                  i()().mark(function t() {
                    var e, s, n;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.listToken();
                          case 2:
                            return (
                              (s = t.sent),
                              (n = s.data),
                              t.abrupt(
                                'return',
                                null !== (e = null == n ? void 0 : n.data) &&
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
                  return t.apply(this, arguments);
                }),
            });
          return { data: e.data, loading: e.isFetching, refetch: e.refetch };
        },
        q = function () {
          var t,
            e = (0, p.NL)(),
            s = (0, k.$G)().t,
            n = (0, v.D)({
              mutationKey: ['removeSystemToken'],
              mutationFn:
                ((t = o()(
                  i()().mark(function t(n) {
                    var c, a, r;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.removeToken({}, n);
                          case 2:
                            return (
                              (a = t.sent),
                              0 === (r = a.data).code &&
                                (f.ZP.success(s('message.deleted')),
                                e.invalidateQueries({
                                  queryKey: ['fetchSystemTokenList'],
                                })),
                              t.abrupt(
                                'return',
                                null !== (c = null == r ? void 0 : r.data) &&
                                  void 0 !== c
                                  ? c
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
            removeToken: n.mutateAsync,
          };
        },
        D = function () {
          var t,
            e = (0, p.NL)(),
            s = (0, v.D)({
              mutationKey: ['createSystemToken'],
              mutationFn:
                ((t = o()(
                  i()().mark(function t(s) {
                    var n, c, a;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.createToken(s);
                          case 2:
                            return (
                              (c = t.sent),
                              0 === (a = c.data).code &&
                                e.invalidateQueries({
                                  queryKey: ['fetchSystemTokenList'],
                                }),
                              t.abrupt(
                                'return',
                                null !== (n = null == a ? void 0 : a.data) &&
                                  void 0 !== n
                                  ? n
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
            createToken: s.mutateAsync,
          };
        },
        L = function () {
          var t,
            e = Z().data.tenant_id,
            s = (0, g.a)({
              queryKey: ['listTenantUser', e],
              initialData: [],
              gcTime: 0,
              enabled: !!e,
              queryFn:
                ((t = o()(
                  i()().mark(function t() {
                    var s, n, c;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, l.WX)(e);
                          case 2:
                            return (
                              (n = t.sent),
                              (c = n.data),
                              t.abrupt(
                                'return',
                                null !== (s = null == c ? void 0 : c.data) &&
                                  void 0 !== s
                                  ? s
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
                  return t.apply(this, arguments);
                }),
            });
          return { data: s.data, loading: s.isFetching, refetch: s.refetch };
        },
        K = function () {
          var t,
            e = Z().data,
            s = (0, p.NL)(),
            n = (0, v.D)({
              mutationKey: ['addTenantUser'],
              mutationFn:
                ((t = o()(
                  i()().mark(function t(n) {
                    var c, a;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, l.AH)(e.tenant_id, n);
                          case 2:
                            return (
                              (c = t.sent),
                              0 === (a = c.data).code &&
                                s.invalidateQueries({
                                  queryKey: ['listTenantUser'],
                                }),
                              t.abrupt('return', null == a ? void 0 : a.code)
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
            addTenantUser: n.mutateAsync,
          };
        },
        N = function () {
          var t,
            e = Z().data,
            s = (0, p.NL)(),
            n = (0, k.$G)().t,
            c = (0, v.D)({
              mutationKey: ['deleteTenantUser'],
              mutationFn:
                ((t = o()(
                  i()().mark(function t(c) {
                    var a, r, o, u, g;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = c.userId),
                              (o = c.tenantId),
                              (t.next = 3),
                              (0, l.EE)({
                                tenantId: null != o ? o : e.tenant_id,
                                userId: r,
                              })
                            );
                          case 3:
                            return (
                              (u = t.sent),
                              0 === (g = u.data).code &&
                                (f.ZP.success(n('message.deleted')),
                                s.invalidateQueries({
                                  queryKey: ['listTenantUser'],
                                }),
                                s.invalidateQueries({
                                  queryKey: ['listTenant'],
                                })),
                              t.abrupt(
                                'return',
                                null !== (a = null == g ? void 0 : g.data) &&
                                  void 0 !== a
                                  ? a
                                  : [],
                              )
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
            data: c.data,
            loading: c.isPending,
            deleteTenantUser: c.mutateAsync,
          };
        },
        E = function () {
          var t,
            e = Z().data.tenant_id,
            s = (0, g.a)({
              queryKey: ['listTenant', e],
              initialData: [],
              gcTime: 0,
              enabled: !!e,
              queryFn:
                ((t = o()(
                  i()().mark(function t() {
                    var e, s, n;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, l.vh)();
                          case 2:
                            return (
                              (s = t.sent),
                              (n = s.data),
                              t.abrupt(
                                'return',
                                null !== (e = null == n ? void 0 : n.data) &&
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
                  return t.apply(this, arguments);
                }),
            });
          return { data: s.data, loading: s.isFetching, refetch: s.refetch };
        },
        A = function () {
          var t,
            e = (0, p.NL)(),
            s = (0, k.$G)().t,
            n = (0, v.D)({
              mutationKey: ['agreeTenant'],
              mutationFn:
                ((t = o()(
                  i()().mark(function t(n) {
                    var c, a, r;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, l.FG)(n);
                          case 2:
                            return (
                              (a = t.sent),
                              0 === (r = a.data).code &&
                                (f.ZP.success(s('message.operated')),
                                e.invalidateQueries({
                                  queryKey: ['listTenant'],
                                })),
                              t.abrupt(
                                'return',
                                null !== (c = null == r ? void 0 : r.data) &&
                                  void 0 !== c
                                  ? c
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
            agreeTenant: n.mutateAsync,
          };
        },
        M = function () {
          var t,
            e = (0, k.$G)().t,
            s = (0, v.D)({
              mutationKey: ['setLangfuseConfig'],
              mutationFn:
                ((t = o()(
                  i()().mark(function t(s) {
                    var n, c;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.setLangfuseConfig(s);
                          case 2:
                            return (
                              (n = t.sent),
                              0 === (c = n.data).code &&
                                f.ZP.success(e('message.operated')),
                              t.abrupt('return', null == c ? void 0 : c.code)
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
            setLangfuseConfig: s.mutateAsync,
          };
        },
        I = function () {
          var t,
            e = (0, k.$G)().t,
            s = (0, v.D)({
              mutationKey: ['deleteLangfuseConfig'],
              mutationFn:
                ((t = o()(
                  i()().mark(function t() {
                    var s, n;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.deleteLangfuseConfig();
                          case 2:
                            return (
                              (s = t.sent),
                              0 === (n = s.data).code &&
                                f.ZP.success(e('message.deleted')),
                              t.abrupt('return', null == n ? void 0 : n.code)
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
            deleteLangfuseConfig: s.mutateAsync,
          };
        },
        U = function () {
          var t,
            e = (0, g.a)({
              queryKey: ['fetchLangfuseConfig'],
              gcTime: 0,
              queryFn:
                ((t = o()(
                  i()().mark(function t() {
                    var e, s;
                    return i()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.getLangfuseConfig();
                          case 2:
                            return (
                              (e = t.sent),
                              (s = e.data),
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
          return { data: e.data, loading: e.isFetching };
        };
    },
    52610: function (t, e, s) {
      'use strict';
      s.r(e),
        s.d(e, {
          default: function () {
            return et;
          },
        });
      var n = s(9783),
        c = s.n(n),
        a = s(46693),
        i = s(39259),
        r = s(22850),
        o = s(75081),
        u = s(86250),
        l = s(4393),
        g = s(40411),
        p = s(93967),
        v = s.n(p),
        d = s(45021),
        f = s.n(d),
        m = s(11700),
        x = s.n(m),
        h = s(62435),
        b = s(31098),
        k = s(96486),
        _ = 'systemInfo___ufsjg',
        y = 'title___g9daS',
        w = 'text___dsVaC',
        Z = 'badge___lUCbZ',
        T = 'error___DIP2V',
        j = 'taskBar___cTWDX',
        S = 'taskBarTitle___iiila',
        C = s(97857),
        P = s.n(C),
        F = s(5574),
        q = s.n(F),
        D = s(13769),
        L = s.n(D),
        K = s(96074),
        N = s(29009),
        E = s(61837),
        A = s(3023),
        M = s(14195),
        I = s(26050),
        U = s(33558),
        O = s(18242),
        $ = s(13481),
        G = s(28382),
        H = s(27484),
        z = s.n(H),
        V = s(79123),
        Q = (s(20034), s(86074)),
        Y = ['active', 'payload'],
        B = function (t) {
          var e = t.active,
            s = t.payload,
            n = L()(t, Y);
          if (e && s && s.length) {
            var c = (0, k.get)(s, '0.payload', {});
            return (0, Q.jsx)('div', {
              className: 'custom-tooltip',
              children: (0, Q.jsxs)('div', {
                className:
                  'bg-slate-50 p-2 rounded-md border border-indigo-100',
                children: [
                  (0, Q.jsx)('div', {
                    className: 'font-semibold text-lg',
                    children: (0, G.p6)(n.label),
                  }),
                  (0, Q.jsx)(V.ZP, {
                    src: c,
                    displaySize: 30,
                    className: 'w-full max-h-[300px] break-words overflow-auto',
                  }),
                ],
              }),
            });
          }
          return null;
        },
        W = function (t) {
          var e = t.data;
          return Object.entries(e).map(function (t) {
            var e = q()(t, 2),
              s = e[0],
              n = e[1].map(function (t) {
                return P()(P()({}, t), {}, { now: z()(t.now).valueOf() });
              }),
              c = n[0],
              a = n[n.length - 1],
              i = [null == c ? void 0 : c.now, null == a ? void 0 : a.now];
            return (0, Q.jsxs)(
              u.Z,
              {
                className: j,
                vertical: !0,
                children: [
                  (0, Q.jsxs)('div', {
                    className: 'flex gap-8',
                    children: [
                      (0, Q.jsxs)('b', { className: S, children: ['ID: ', s] }),
                      (0, Q.jsxs)('b', {
                        className: S,
                        children: ['Lag: ', null == a ? void 0 : a.lag],
                      }),
                      (0, Q.jsxs)('b', {
                        className: S,
                        children: ['Pending: ', null == a ? void 0 : a.pending],
                      }),
                    ],
                  }),
                  (0, Q.jsx)(N.h, {
                    children: (0, Q.jsxs)(E.v, {
                      data: n,
                      children: [
                        (0, Q.jsx)(A.K, {
                          dataKey: 'now',
                          type: 'number',
                          scale: 'time',
                          domain: i,
                          tickFormatter: function (t) {
                            return (0, G.mr)(t);
                          },
                          allowDataOverflow: !0,
                          angle: 60,
                          padding: { left: 20, right: 20 },
                          tickMargin: 20,
                        }),
                        (0, Q.jsx)(M.q, { strokeDasharray: '3 3' }),
                        (0, Q.jsx)(I.u, {
                          wrapperStyle: { pointerEvents: 'auto' },
                          content: (0, Q.jsx)(B, {}),
                          trigger: 'click',
                        }),
                        (0, Q.jsx)(U.D, { wrapperStyle: { bottom: -22 } }),
                        (0, Q.jsx)(O.$, {
                          dataKey: 'done',
                          fill: '#2fe235',
                          activeBar: (0, Q.jsx)($.A, {
                            fill: 'pink',
                            stroke: 'blue',
                          }),
                        }),
                        (0, Q.jsx)(O.$, {
                          dataKey: 'failed',
                          fill: '#ef3b74',
                          activeBar: (0, Q.jsx)($.A, {
                            fill: 'gold',
                            stroke: 'purple',
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, Q.jsx)(K.Z, {}),
                ],
              },
              s,
            );
          });
        },
        X = r.Z.Text,
        J = (function (t) {
          return (
            (t.green = 'success'), (t.red = 'error'), (t.yellow = 'warning'), t
          );
        })(J || {}),
        R = {
          doc_engine: 'Doc Engine',
          storage: 'Object Storage',
          redis: 'Redis',
          database: 'Database',
          task_executor_heartbeats: 'Task Executor',
        },
        tt = {
          es: 'es',
          doc_engine: 'storage',
          redis: 'redis',
          storage: 'minio',
          database: 'database',
        },
        et = function () {
          var t = (0, i.Jf)(),
            e = t.systemStatus,
            s = t.fetchSystemStatus,
            n = t.loading;
          return (
            (0, h.useEffect)(
              function () {
                s();
              },
              [s],
            ),
            (0, Q.jsx)('section', {
              className: _,
              children: (0, Q.jsx)(o.Z, {
                spinning: n,
                children: (0, Q.jsx)(u.Z, {
                  gap: 16,
                  vertical: !0,
                  children: Object.keys(e).map(function (t) {
                    var s = e[t];
                    return (0, Q.jsx)(
                      l.Z,
                      {
                        type: 'inner',
                        title: (0, Q.jsxs)(u.Z, {
                          align: 'center',
                          gap: 10,
                          children: [
                            'task_executor_heartbeats' === t
                              ? (0, Q.jsx)('img', {
                                  src: '/logo.svg',
                                  alt: '',
                                  width: 26,
                                })
                              : (0, Q.jsx)(a.Z, { name: tt[t], width: 26 }),
                            (0, Q.jsx)('span', {
                              className: y,
                              children: R[t],
                            }),
                            (0, Q.jsx)(g.Z, {
                              className: Z,
                              status: J[s.status],
                            }),
                          ],
                        }),
                        children:
                          'task_executor_heartbeats' === t
                            ? (0, k.isObject)(s)
                              ? (0, Q.jsx)(W, { data: s })
                              : (0, Q.jsx)(X, {
                                  className: T,
                                  children:
                                    'string' == typeof s.error ? s.error : '',
                                })
                            : Object.keys(s)
                                .filter(function (t) {
                                  return 'status' !== t;
                                })
                                .map(function (t) {
                                  return (0, Q.jsxs)(
                                    u.Z,
                                    {
                                      align: 'center',
                                      gap: 16,
                                      className: w,
                                      children: [
                                        (0, Q.jsxs)('b', {
                                          children: [x()(f()(t)), ':'],
                                        }),
                                        (0, Q.jsxs)(X, {
                                          className: v()(
                                            c()({}, T, 'error' === t),
                                          ),
                                          children: [
                                            (0, b.FH)(s[t]),
                                            'elapsed' === t && ' ms',
                                          ],
                                        }),
                                      ],
                                    },
                                    t,
                                  );
                                }),
                      },
                      t,
                    );
                  }),
                }),
              }),
            })
          );
        };
    },
    72668: function (t, e, s) {
      'use strict';
      s.d(e, {
        AH: function () {
          return D;
        },
        EE: function () {
          return L;
        },
        FG: function () {
          return N;
        },
        WX: function () {
          return q;
        },
        nO: function () {
          return F;
        },
        vh: function () {
          return K;
        },
        vi: function () {
          return P;
        },
      });
      var n = s(60806),
        c = s(66582),
        a = s(78158),
        i = n.Z.login,
        r = n.Z.logout,
        o = n.Z.register,
        u = n.Z.setting,
        l = n.Z.user_info,
        g = n.Z.tenant_info,
        p = n.Z.factories_list,
        v = n.Z.llm_list,
        d = n.Z.my_llm,
        f = n.Z.set_api_key,
        m = n.Z.set_tenant_info,
        x = n.Z.add_llm,
        h = n.Z.delete_llm,
        b = n.Z.deleteFactory,
        k = n.Z.getSystemStatus,
        _ = n.Z.getSystemVersion,
        y = n.Z.getSystemTokenList,
        w = n.Z.removeSystemToken,
        Z = n.Z.createSystemToken,
        T = n.Z.getSystemConfig,
        j = n.Z.setLangfuseConfig,
        S = {
          login: { url: i, method: 'post' },
          logout: { url: r, method: 'get' },
          register: { url: o, method: 'post' },
          setting: { url: u, method: 'post' },
          user_info: { url: l, method: 'get' },
          get_tenant_info: { url: g, method: 'get' },
          set_tenant_info: { url: m, method: 'post' },
          factories_list: { url: p, method: 'get' },
          llm_list: { url: v, method: 'get' },
          my_llm: { url: d, method: 'get' },
          set_api_key: { url: f, method: 'post' },
          add_llm: { url: x, method: 'post' },
          delete_llm: { url: h, method: 'post' },
          getSystemStatus: { url: k, method: 'get' },
          getSystemVersion: { url: _, method: 'get' },
          deleteFactory: { url: b, method: 'post' },
          listToken: { url: y, method: 'get' },
          createToken: { url: Z, method: 'post' },
          removeToken: { url: w, method: 'delete' },
          getSystemConfig: { url: T, method: 'get' },
          setLangfuseConfig: { url: j, method: 'put' },
          getLangfuseConfig: { url: j, method: 'get' },
          deleteLangfuseConfig: { url: j, method: 'delete' },
        },
        C = (0, c.Z)(S, a.ZP),
        P = function () {
          return a.ZP.get(n.Z.login_channels);
        },
        F = function (t) {
          return (window.location.href = n.Z.login_channel(t));
        },
        q = function (t) {
          return a.ZP.get(n.Z.listTenantUser(t));
        },
        D = function (t, e) {
          return (0, a.v_)(n.Z.addTenantUser(t), { email: e });
        },
        L = function (t) {
          var e = t.tenantId,
            s = t.userId;
          return a.ZP.delete(n.Z.deleteTenantUser(e, s));
        },
        K = function () {
          return a.ZP.get(n.Z.listTenant);
        },
        N = function (t) {
          return a.ZP.put(n.Z.agreeTenant(t));
        };
      e.ZP = C;
    },
    60806: function (t, e, s) {
      'use strict';
      s.d(e, {
        N: function () {
          return n;
        },
      });
      var n = '/v1';
      e.Z = {
        login: ''.concat(n, '/user/login'),
        logout: ''.concat(n, '/user/logout'),
        register: ''.concat(n, '/user/register'),
        setting: ''.concat(n, '/user/setting'),
        user_info: ''.concat(n, '/user/info'),
        tenant_info: ''.concat(n, '/user/tenant_info'),
        set_tenant_info: ''.concat(n, '/user/set_tenant_info'),
        login_channels: ''.concat(n, '/user/login/channels'),
        login_channel: function (t) {
          return ''.concat(n, '/user/login/').concat(t);
        },
        addTenantUser: function (t) {
          return ''.concat(n, '/tenant/').concat(t, '/user');
        },
        listTenantUser: function (t) {
          return ''.concat(n, '/tenant/').concat(t, '/user/list');
        },
        deleteTenantUser: function (t, e) {
          return ''.concat(n, '/tenant/').concat(t, '/user/').concat(e);
        },
        listTenant: ''.concat(n, '/tenant/list'),
        agreeTenant: function (t) {
          return ''.concat(n, '/tenant/agree/').concat(t);
        },
        factories_list: ''.concat(n, '/llm/factories'),
        llm_list: ''.concat(n, '/llm/list'),
        my_llm: ''.concat(n, '/llm/my_llms'),
        set_api_key: ''.concat(n, '/llm/set_api_key'),
        add_llm: ''.concat(n, '/llm/add_llm'),
        delete_llm: ''.concat(n, '/llm/delete_llm'),
        deleteFactory: ''.concat(n, '/llm/delete_factory'),
        llm_tools: ''.concat(n, '/plugin/llm_tools'),
        kb_list: ''.concat(n, '/kb/list'),
        create_kb: ''.concat(n, '/kb/create'),
        update_kb: ''.concat(n, '/kb/update'),
        rm_kb: ''.concat(n, '/kb/rm'),
        get_kb_detail: ''.concat(n, '/kb/detail'),
        getKnowledgeGraph: function (t) {
          return ''.concat(n, '/kb/').concat(t, '/knowledge_graph');
        },
        listTag: function (t) {
          return ''.concat(n, '/kb/').concat(t, '/tags');
        },
        listTagByKnowledgeIds: ''.concat(n, '/kb/tags'),
        removeTag: function (t) {
          return ''.concat(n, '/kb/').concat(t, '/rm_tags');
        },
        renameTag: function (t) {
          return ''.concat(n, '/kb/').concat(t, '/rename_tag');
        },
        chunk_list: ''.concat(n, '/chunk/list'),
        create_chunk: ''.concat(n, '/chunk/create'),
        set_chunk: ''.concat(n, '/chunk/set'),
        get_chunk: ''.concat(n, '/chunk/get'),
        switch_chunk: ''.concat(n, '/chunk/switch'),
        rm_chunk: ''.concat(n, '/chunk/rm'),
        retrieval_test: ''.concat(n, '/chunk/retrieval_test'),
        knowledge_graph: ''.concat(n, '/chunk/knowledge_graph'),
        get_document_list: ''.concat(n, '/document/list'),
        document_change_status: ''.concat(n, '/document/change_status'),
        document_rm: ''.concat(n, '/document/rm'),
        document_delete: ''.concat(n, '/api/document'),
        document_rename: ''.concat(n, '/document/rename'),
        document_create: ''.concat(n, '/document/create'),
        document_run: ''.concat(n, '/document/run'),
        document_change_parser: ''.concat(n, '/document/change_parser'),
        document_thumbnails: ''.concat(n, '/document/thumbnails'),
        get_document_file: ''.concat(n, '/document/get'),
        document_upload: ''.concat(n, '/document/upload'),
        web_crawl: ''.concat(n, '/document/web_crawl'),
        document_infos: ''.concat(n, '/document/infos'),
        upload_and_parse: ''.concat(n, '/document/upload_and_parse'),
        parse: ''.concat(n, '/document/parse'),
        setMeta: ''.concat(n, '/document/set_meta'),
        setDialog: ''.concat(n, '/dialog/set'),
        getDialog: ''.concat(n, '/dialog/get'),
        removeDialog: ''.concat(n, '/dialog/rm'),
        listDialog: ''.concat(n, '/dialog/list'),
        setConversation: ''.concat(n, '/conversation/set'),
        getConversation: ''.concat(n, '/conversation/get'),
        getConversationSSE: ''.concat(n, '/conversation/getsse'),
        listConversation: ''.concat(n, '/conversation/list'),
        removeConversation: ''.concat(n, '/conversation/rm'),
        completeConversation: ''.concat(n, '/conversation/completion'),
        deleteMessage: ''.concat(n, '/conversation/delete_msg'),
        thumbup: ''.concat(n, '/conversation/thumbup'),
        tts: ''.concat(n, '/conversation/tts'),
        ask: ''.concat(n, '/conversation/ask'),
        mindmap: ''.concat(n, '/conversation/mindmap'),
        getRelatedQuestions: ''.concat(n, '/conversation/related_questions'),
        createToken: ''.concat(n, '/api/new_token'),
        listToken: ''.concat(n, '/api/token_list'),
        removeToken: ''.concat(n, '/api/rm'),
        getStats: ''.concat(n, '/api/stats'),
        createExternalConversation: ''.concat(n, '/api/new_conversation'),
        getExternalConversation: ''.concat(n, '/api/conversation'),
        completeExternalConversation: ''.concat(n, '/api/completion'),
        uploadAndParseExternal: ''.concat(n, '/api/document/upload_and_parse'),
        listFile: ''.concat(n, '/file/list'),
        uploadFile: ''.concat(n, '/file/upload'),
        removeFile: ''.concat(n, '/file/rm'),
        renameFile: ''.concat(n, '/file/rename'),
        getAllParentFolder: ''.concat(n, '/file/all_parent_folder'),
        createFolder: ''.concat(n, '/file/create'),
        connectFileToKnowledge: ''.concat(n, '/file2document/convert'),
        getFile: ''.concat(n, '/file/get'),
        moveFile: ''.concat(n, '/file/mv'),
        getSystemVersion: ''.concat(n, '/system/version'),
        getSystemStatus: ''.concat(n, '/system/status'),
        getSystemTokenList: ''.concat(n, '/system/token_list'),
        createSystemToken: ''.concat(n, '/system/new_token'),
        listSystemToken: ''.concat(n, '/system/token_list'),
        removeSystemToken: ''.concat(n, '/system/token'),
        getSystemConfig: ''.concat(n, '/system/config'),
        setLangfuseConfig: ''.concat(n, '/langfuse/api_key'),
        listTemplates: ''.concat(n, '/canvas/templates'),
        listCanvas: ''.concat(n, '/canvas/list'),
        listCanvasTeam: ''.concat(n, '/canvas/listteam'),
        getCanvas: ''.concat(n, '/canvas/get'),
        getCanvasSSE: ''.concat(n, '/canvas/getsse'),
        removeCanvas: ''.concat(n, '/canvas/rm'),
        setCanvas: ''.concat(n, '/canvas/set'),
        settingCanvas: ''.concat(n, '/canvas/setting'),
        getListVersion: ''.concat(n, '/canvas/getlistversion'),
        getVersion: ''.concat(n, '/canvas/getversion'),
        resetCanvas: ''.concat(n, '/canvas/reset'),
        runCanvas: ''.concat(n, '/canvas/completion'),
        testDbConnect: ''.concat(n, '/canvas/test_db_connect'),
        getInputElements: ''.concat(n, '/canvas/input_elements'),
        debug: ''.concat(n, '/canvas/debug'),
        getMcpServerList: ''.concat(n, '/mcp_server/list'),
        getMultipleMcpServers: ''.concat(n, '/mcp_server/get_multiple'),
        getMcpServer: function (t) {
          return ''.concat(n, '/mcp_server/get/').concat(t);
        },
        createMcpServer: ''.concat(n, '/mcp_server/create'),
        updateMcpServer: ''.concat(n, '/mcp_server/update'),
        deleteMcpServer: ''.concat(n, '/mcp_server/rm'),
      };
    },
    28382: function (t, e, s) {
      'use strict';
      s.d(e, {
        Qc: function () {
          return r;
        },
        mr: function () {
          return i;
        },
        p6: function () {
          return a;
        },
      });
      var n = s(27484),
        c = s.n(n);
      function a(t) {
        return t ? c()(t).format('DD/MM/YYYY HH:mm:ss') : '';
      }
      function i(t) {
        return t ? c()(t).format('HH:mm:ss') : '';
      }
      function r(t) {
        return t ? c()(t).format('DD/MM/YYYY') : '';
      }
    },
    66582: function (t, e, s) {
      'use strict';
      var n = s(97857),
        c = s.n(n),
        a = s(57557),
        i = s.n(a),
        r = ['post', 'delete', 'put'];
      e.Z = function (t, e) {
        var s = {},
          n = function (n) {
            s[n] = function (s, a) {
              var o = t[n].url,
                u = t[n];
              return (
                a && (o = o + '/' + a),
                r.some(function (e) {
                  return e === t[n].method.toLowerCase();
                })
                  ? e(o, { method: t[n].method, data: s })
                  : 'get' === t[n].method || 'GET' === t[n].method
                    ? e.get(
                        o,
                        c()(
                          c()({}, i()(u, ['method', 'url'])),
                          {},
                          { params: s },
                        ),
                      )
                    : void 0
              );
            };
          };
        for (var a in t) n(a);
        return s;
      };
    },
    78158: function (t, e, s) {
      'use strict';
      s.d(e, {
        v_: function () {
          return k;
        },
      });
      var n = s(15009),
        c = s.n(n),
        a = s(99289),
        i = s.n(a),
        r = s(9783),
        o = s.n(r),
        u = s(97857),
        l = s.n(u),
        g = s(39918),
        p = s(54707),
        v = s(61921),
        d = s(26855),
        f = s(45360),
        m = s(11238),
        x = s(31098),
        h = {
          200: p.Z.t('message.200'),
          201: p.Z.t('message.201'),
          202: p.Z.t('message.202'),
          204: p.Z.t('message.204'),
          400: p.Z.t('message.400'),
          401: p.Z.t('message.401'),
          403: p.Z.t('message.403'),
          404: p.Z.t('message.404'),
          406: p.Z.t('message.406'),
          410: p.Z.t('message.410'),
          413: p.Z.t('message.413'),
          422: p.Z.t('message.422'),
          500: p.Z.t('message.500'),
          502: p.Z.t('message.502'),
          503: p.Z.t('message.503'),
          504: p.Z.t('message.504'),
        },
        b = (0, m.l7)({
          errorHandler: function (t) {
            var e = t.response;
            if ('Failed to fetch' === t.message)
              d.Z.error({
                description: p.Z.t('message.networkAnomalyDescription'),
                message: p.Z.t('message.networkAnomaly'),
              });
            else if (e && e.status) {
              var s = h[e.status] || e.statusText,
                n = e.status,
                c = e.url;
              d.Z.error({
                message: ''
                  .concat(p.Z.t('message.requestError'), ' ')
                  .concat(n, ': ')
                  .concat(c),
                description: s,
              });
            }
            return null != e ? e : { data: { code: 1999 } };
          },
          timeout: 3e5,
          getResponse: !0,
        });
      b.interceptors.request.use(function (t, e) {
        var s = (0, x._y)(e.data),
          n = (0, x._y)(e.params);
        return {
          url: t,
          options: l()(
            l()({}, e),
            {},
            {
              data: s,
              params: n,
              headers: l()(
                l()({}, e.skipToken ? void 0 : o()({}, g._n, (0, v.cD)())),
                e.headers,
              ),
              interceptors: !0,
            },
          ),
        };
      }),
        b.interceptors.response.use(
          (function () {
            var t = i()(
              c()().mark(function t(e, s) {
                var n, a;
                return c()().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((413 !== (null == e ? void 0 : e.status) &&
                            504 !== (null == e ? void 0 : e.status)) ||
                            f.ZP.error(h[null == e ? void 0 : e.status]),
                          'blob' !== s.responseType)
                        ) {
                          t.next = 3;
                          break;
                        }
                        return t.abrupt('return', e);
                      case 3:
                        return (
                          (t.next = 5),
                          null == e || null === (n = e.clone()) || void 0 === n
                            ? void 0
                            : n.json()
                        );
                      case 5:
                        return (
                          100 === (null == (a = t.sent) ? void 0 : a.code)
                            ? f.ZP.error(null == a ? void 0 : a.message)
                            : 401 === (null == a ? void 0 : a.code)
                              ? (d.Z.error({
                                  message: null == a ? void 0 : a.message,
                                  description: null == a ? void 0 : a.message,
                                  duration: 3,
                                }),
                                v.ZP.removeAll(),
                                (0, v.rf)())
                              : 0 !== (null == a ? void 0 : a.code) &&
                                d.Z.error({
                                  message: ''
                                    .concat(p.Z.t('message.hint'), ' : ')
                                    .concat(null == a ? void 0 : a.code),
                                  description: null == a ? void 0 : a.message,
                                  duration: 3,
                                }),
                          t.abrupt('return', e)
                        );
                      case 8:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            );
            return function (e, s) {
              return t.apply(this, arguments);
            };
          })(),
        ),
        (e.ZP = b);
      var k = function (t, e) {
        return b.post(t, { data: e });
      };
    },
    78131: function (t, e, s) {
      var n = {
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
      function c(t) {
        var e = a(t);
        return s(e);
      }
      function a(t) {
        if (!s.o(n, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return n[t];
      }
      (c.keys = function () {
        return Object.keys(n);
      }),
        (c.resolve = a),
        (t.exports = c),
        (c.id = 78131);
    },
    26032: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/akshare.ef2caf5a.svg';
    },
    30747: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/api.683cd994.svg';
    },
    90854: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/arxiv.bce2900b.svg';
    },
    4159: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/assistant.072e25ce.svg';
    },
    83544: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/baidu-fanyi.ab76b9e5.svg';
    },
    92892: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/baidu.75b1998a.svg';
    },
    69779: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/begin.1a91ddf7.svg';
    },
    55914: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/bing.dce94add.svg';
    },
    8156: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/cancel.4450bdfb.svg';
    },
    34339: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/chat-app-cube.0d35727d.svg';
    },
    57950: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/chat-configuration-atom.94c02c7a.svg';
    },
    49570: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/chat-star.7acfee68.svg';
    },
    38726: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/book-01.6e2a8a37.svg';
    },
    21357: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/book-02.4dd45490.svg';
    },
    88093: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/book-03.bd76b691.svg';
    },
    58355: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/book-04.594d0d1a.svg';
    },
    16035: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/chunk-empty.2b83673a.svg';
    },
    42576: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/knowledge-graph-01.597a96f3.svg';
    },
    46853: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/knowledge-graph-02.f36b7fab.svg';
    },
    54530: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/law-01.7070b7b3.svg';
    },
    75787: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/law-02.cae944e5.svg';
    },
    64179: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/manual-01.e3bb11d2.svg';
    },
    40547: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/manual-02.1a214f22.svg';
    },
    1437: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/manual-03.530928ca.svg';
    },
    81486: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/manual-04.63d43265.svg';
    },
    33952: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/media-01.086483b6.svg';
    },
    93802: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/media-02.d4c36e3e.svg';
    },
    88488: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/naive-01.f57569b7.svg';
    },
    74795: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/naive-02.3fe3610b.svg';
    },
    88533: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/one-01.5a1d6960.svg';
    },
    99199: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/one-02.0adb16f8.svg';
    },
    23192: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/one-03.466dec02.svg';
    },
    72906: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/one-04.3b10ee6d.svg';
    },
    64018: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/paper-01.e0019dcd.svg';
    },
    77250: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/paper-02.cf73a211.svg';
    },
    87162: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/presentation-01.06115027.svg';
    },
    59640: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/presentation-02.14d98352.svg';
    },
    39420: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/qa-01.ce8702ee.svg';
    },
    55086: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/qa-02.c181fcd6.svg';
    },
    76604: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/resume-01.75f1c93f.svg';
    },
    96131: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/resume-02.9c115ed1.svg';
    },
    42743: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/table-01.ec5d8a4d.svg';
    },
    84817: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/table-02.e4d2487c.svg';
    },
    96953: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/tag-01.ff996302.svg';
    },
    82472: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/tag-02.079b2b47.svg';
    },
    86933: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/concentrator.1353af83.svg';
    },
    71090: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/crawler.646367e0.svg';
    },
    38575: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/database.ef8eb5c8.svg';
    },
    98301: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/deepl.dc5ab23b.svg';
    },
    71483: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/delete.028228ac.svg';
    },
    84377: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/disable.55c8b50f.svg';
    },
    24287: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/duck.3285e948.svg';
    },
    10808: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/email.ac0507af.svg';
    },
    8207: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/enable.1b0d90c7.svg';
    },
    96492: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/es.d9969bbd.svg';
    },
    43004: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/exesql.696e27b1.svg';
    },
    83889: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/aep.90be9439.svg';
    },
    28897: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/ai.10138190.svg';
    },
    27635: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/avi.02b94047.svg';
    },
    52229: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/css.8f0ad31d.svg';
    },
    50747: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/csv.9a256b45.svg';
    },
    71691: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/dmg.57f9c02c.svg';
    },
    35354: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/doc.d8918cc4.svg';
    },
    69139: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/docx.38d543b1.svg';
    },
    43279: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/eps.3f104d7d.svg';
    },
    46462: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/exe.7c93a166.svg';
    },
    33179: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/fig.38a31555.svg';
    },
    54168: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/folder.84bcc794.svg';
    },
    73845: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/gif.06cc115a.svg';
    },
    53682: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/html.240ba9a0.svg';
    },
    26763: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/indd.22c71a5d.svg';
    },
    13916: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/java.bc10ed5b.svg';
    },
    19525: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/jpeg.b4ff21a3.svg';
    },
    24674: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/jpg.166b6e5d.svg';
    },
    38470: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/js.acbe367d.svg';
    },
    56373: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/json.79aa2433.svg';
    },
    77357: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/md.41082c13.svg';
    },
    49197: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/mkv.ed2674b7.svg';
    },
    44538: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/mp3.773e22e6.svg';
    },
    52038: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/mp4.4b08cc18.svg';
    },
    77747: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/mpeg.ca6e2469.svg';
    },
    82938: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/pdf.44344347.svg';
    },
    71915: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/png.b6606e2b.svg';
    },
    85173: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/ppt.1cb25ad9.svg';
    },
    62133: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/pptx.b108e970.svg';
    },
    30182: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/psd.1d66388a.svg';
    },
    38428: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/rss.f27341d3.svg';
    },
    78501: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/sql.f90e0e1d.svg';
    },
    72515: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/svg.a95ef072.svg';
    },
    4502: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/tiff.4719932c.svg';
    },
    55773: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/txt.ef59d3d8.svg';
    },
    63645: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/wav.fa097b95.svg';
    },
    87260: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/webp.ef46db37.svg';
    },
    5343: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/xls.2ba7600c.svg';
    },
    41475: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/xlsx.746a1908.svg';
    },
    38476: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/xml.b90e705e.svg';
    },
    39121: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/file-management.b76487d8.svg';
    },
    69696: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/github.0aef0d01.svg';
    },
    99466: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/google-scholar.44e74dbb.svg';
    },
    18176: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/google.be71d0f8.svg';
    },
    57355: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/graph.aed14f6e.svg';
    },
    82888: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/invoke-ai.f20c65b6.svg';
    },
    31801: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/jin10.878bef8b.svg';
    },
    30552: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/keyword.2d1a0d69.svg';
    },
    87055: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/knowledge-base.1c6120ee.svg';
    },
    96450: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/knowledge-configration.852175c9.svg';
    },
    9385: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/knowledge-dataset.722b6fe7.svg';
    },
    65376: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/knowledge-testing.bde5e258.svg';
    },
    6514: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/langfuse.78704466.svg';
    },
    74768: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/anthropic.65954479.svg';
    },
    99817: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/azure.c56d7584.svg';
    },
    93594: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/baai.c8138ebe.svg';
    },
    6507: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/baichuan.e3f694dc.svg';
    },
    30818: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/bedrock.3a8ac5ed.svg';
    },
    69534: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/chat-minimax.9b4384d0.svg';
    },
    86198: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/cohere.6ea354af.svg';
    },
    23476: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/deepseek.f974cd8d.svg';
    },
    97300: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/fish-audio.fc05a3e6.svg';
    },
    69156: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/gemini.87ab9858.svg';
    },
    29034: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/github.6dbd4f80.svg';
    },
    75383: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/google-cloud.d0802654.svg';
    },
    93926: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/google.36013c77.svg';
    },
    41538: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/gpustack.e4d6956b.svg';
    },
    43719: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/groq-next.8c75e144.svg';
    },
    20566: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/huggingface.fcf354fa.svg';
    },
    10266: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/hunyuan.3b1d640a.svg';
    },
    19765: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/jina.bfc92c30.svg';
    },
    68341: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/lepton-ai.0e3dff35.svg';
    },
    77894: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/lm-studio.7129f824.svg';
    },
    97354: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/local-ai.7a303131.svg';
    },
    58247: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/mistral.dfb07556.svg';
    },
    21248: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/modelscope.b21a1489.svg';
    },
    98184: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/moonshot.192bc590.svg';
    },
    14860: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/nomic-ai.ecf954c1.svg';
    },
    72584: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/novita-ai.f8cc289c.svg';
    },
    33325: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/nvidia.3031fca1.svg';
    },
    59488: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/ollama.2677a93a.svg';
    },
    23258: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/open-router.7226a5e8.svg';
    },
    63715: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/openai-api.42d3bdf6.svg';
    },
    81459: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/openai.6242ead4.svg';
    },
    39886: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/perfx-cloud.9668e908.svg';
    },
    89957: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/ppio.ce974b8e.svg';
    },
    13492: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/replicate.b558c271.svg';
    },
    85448: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/sentence-transformers.80312660.svg';
    },
    65762: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/siliconflow.6bafc788.svg';
    },
    4216: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/spark.54d37193.svg';
    },
    53618: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/stepfun.38dd7ff5.svg';
    },
    96734: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/tencent-cloud.637fb842.svg';
    },
    65167: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/together-ai.0777a553.svg';
    },
    74296: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/tongyi.8c1b0f0d.svg';
    },
    30464: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/upstage.bff6c9f0.svg';
    },
    91333: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/vllm.4895bd3a.svg';
    },
    25210: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/volc_engine.c93921c9.svg';
    },
    6385: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/voyage.ec478775.svg';
    },
    34981: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/wenxin.c029f1ef.svg';
    },
    76577: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/xinference.4bf1c9ad.svg';
    },
    20447: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/yi.56b2684e.svg';
    },
    55103: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/yiyan.c029f1ef.svg';
    },
    81010: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/youdao.dc5f6515.svg';
    },
    19568: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/zhipu.53c4367a.svg';
    },
    68683: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/login-avatars.2cd59ec8.svg';
    },
    89624: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/login-background.53821b0f.svg';
    },
    31130: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/login-star.a1de9742.svg';
    },
    49313: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/logo-with-text-white.22c9d002.svg';
    },
    67487: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/logout.acbe92a8.svg';
    },
    32382: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/minio.2aa38883.svg';
    },
    70410: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/model-providers.43583ddb.svg';
    },
    22350: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/moon.15e7f056.svg';
    },
    88458: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/more-model.7a1d39d8.svg';
    },
    1333: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/more.4f8a95a4.svg';
    },
    90076: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/move.0b544311.svg';
    },
    37124: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/mysql.cb3593ae.svg';
    },
    1979: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/navigation-pointer.a22fd9df.svg';
    },
    33391: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/next-login-bg.2b21817d.svg';
    },
    28687: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/note.7480c088.svg';
    },
    47138: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/nothing.ab562a79.svg';
    },
    2306: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/paper-clip.dd171c2f.svg';
    },
    33530: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/password.668a7506.svg';
    },
    3804: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/plus-circle-fill.5b401d20.svg';
    },
    75350: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/plus.4df8c2ae.svg';
    },
    1769: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/profile.67855e30.svg';
    },
    49261: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/prompt.37be0fb8.svg';
    },
    78566: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/pubmed.77561d8d.svg';
    },
    56077: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/qweather.af060254.svg';
    },
    43867: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/redis.c34741f7.svg';
    },
    96198: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/refresh.8782839f.svg';
    },
    80415: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/resize.dac0f2bf.svg';
    },
    91449: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/run.23b47028.svg';
    },
    14387: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/select-files-end.c089e39f.svg';
    },
    16734: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/select-files-start.fc6d0609.svg';
    },
    40975: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/selected-files-collapse.9b76e30e.svg';
    },
    51653: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/sso.9e8a3ae3.svg';
    },
    99021: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/storage.c77a9838.svg';
    },
    1311: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/switch.8b45face.svg';
    },
    52381: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/team.40ab5e28.svg';
    },
    63993: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/template.d3713e5e.svg';
    },
    40724: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/translation.1d6d8a4a.svg';
    },
    16521: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/tushare.dce7f503.svg';
    },
    72835: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/wencai.664373a4.svg';
    },
    18684: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/wikipedia.ed88485f.svg';
    },
    7957: function (t, e, s) {
      'use strict';
      t.exports = s.p + 'static/yahoo-finance.9deb3b1e.svg';
    },
    24654: function () {},
  },
]);
//# sourceMappingURL=p__user-setting__setting-system__index.6ac198ec.async.js.map
