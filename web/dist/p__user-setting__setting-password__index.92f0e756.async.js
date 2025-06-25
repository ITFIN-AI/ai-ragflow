(self.webpackChunk = self.webpackChunk || []).push([
  [9321],
  {
    63606: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = n(87462),
        r = n(62435),
        o = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z',
                },
              },
            ],
          },
          name: 'check',
          theme: 'outlined',
        },
        c = n(84089),
        s = function (e, t) {
          return r.createElement(c.Z, (0, a.Z)({}, e, { ref: t, icon: o }));
        };
      var i = r.forwardRef(s);
    },
    68795: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = n(87462),
        r = n(62435),
        o = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
                },
              },
            ],
          },
          name: 'search',
          theme: 'outlined',
        },
        c = n(84089),
        s = function (e, t) {
          return r.createElement(c.Z, (0, a.Z)({}, e, { ref: t, icon: o }));
        };
      var i = r.forwardRef(s);
    },
    86968: function (e, t, n) {
      'use strict';
      n.d(t, {
        I3: function () {
          return p;
        },
        pG: function () {
          return g;
        },
        qM: function () {
          return v;
        },
      });
      var a = n(15009),
        r = n.n(a),
        o = n(99289),
        c = n.n(o),
        s = n(5574),
        i = n.n(s),
        u = n(21640),
        l = n(3321),
        d = (n(18446), n(62435)),
        m = n(67421),
        f = n(86074),
        g = function () {
          var e = (0, d.useState)(!1),
            t = i()(e, 2),
            n = t[0],
            a = t[1],
            r = (0, d.useCallback)(function () {
              a(!0);
            }, []),
            o = (0, d.useCallback)(function () {
              a(!1);
            }, []),
            c = (0, d.useCallback)(
              function () {
                a(!n);
              },
              [n],
            );
          return { visible: n, showModal: r, hideModal: o, switchVisible: c };
        };
      var p = function () {
          var e = l.Z.useApp().modal,
            t = (0, m.$G)().t;
          return (0, d.useCallback)(
            function (n) {
              var a = n.title,
                o = n.content,
                s = n.onOk,
                i = n.onCancel;
              return new Promise(function (n, l) {
                e.confirm({
                  title: null != a ? a : t('common.deleteModalTitle'),
                  icon: (0, f.jsx)(u.Z, {}),
                  content: o,
                  okText: t('common.ok'),
                  okType: 'danger',
                  cancelText: t('common.cancel'),
                  onOk: function () {
                    return c()(
                      r()().mark(function e() {
                        var t;
                        return r()().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    null == s ? void 0 : s()
                                  );
                                case 3:
                                  (t = e.sent),
                                    n(t),
                                    console.info(t),
                                    (e.next = 11);
                                  break;
                                case 8:
                                  (e.prev = 8), (e.t0 = e.catch(0)), l(e.t0);
                                case 11:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 8]],
                        );
                      }),
                    )();
                  },
                  onCancel: function () {
                    null == i || i();
                  },
                });
              });
            },
            [t, e],
          );
        },
        v = function (e) {
          return (0, m.$G)('translation', { keyPrefix: e });
        };
    },
    39259: function (e, t, n) {
      'use strict';
      n.d(t, {
        CV: function () {
          return q;
        },
        F1: function () {
          return L;
        },
        Jf: function () {
          return S;
        },
        Jv: function () {
          return M;
        },
        PI: function () {
          return E;
        },
        WH: function () {
          return C;
        },
        XH: function () {
          return T;
        },
        d1: function () {
          return K;
        },
        ef: function () {
          return A;
        },
        er: function () {
          return U;
        },
        fS: function () {
          return b;
        },
        hZ: function () {
          return j;
        },
        jd: function () {
          return x;
        },
        m_: function () {
          return D;
        },
        nv: function () {
          return P;
        },
        oH: function () {
          return I;
        },
        v: function () {
          return F;
        },
        x_: function () {
          return N;
        },
      });
      var a = n(5574),
        r = n.n(a),
        o = n(15009),
        c = n.n(o),
        s = n(99289),
        i = n.n(s),
        u = n(40169),
        l = n(72668),
        d = n(78551),
        m = n(30202),
        f = n(4527),
        g = n(85576),
        p = n(45360),
        v = n(27856),
        h = n.n(v),
        _ = n(96486),
        y = n(62435),
        k = n(67421),
        w = n(42028),
        Z = n(86074),
        x = function () {
          var e,
            t = (0, k.$G)().i18n,
            n = (0, d.a)({
              queryKey: ['userInfo'],
              initialData: {},
              gcTime: 0,
              queryFn:
                ((e = i()(
                  c()().mark(function e() {
                    var n, a, r;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.user_info();
                          case 2:
                            return (
                              (a = e.sent),
                              0 === (r = a.data).code &&
                                t.changeLanguage(u.Kj[r.data.language]),
                              e.abrupt(
                                'return',
                                null !== (n = null == r ? void 0 : r.data) &&
                                  void 0 !== n
                                  ? n
                                  : {},
                              )
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
          return { data: n.data, loading: n.isFetching };
        },
        b = function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = (0, k.$G)().t,
            a = (0, d.a)({
              queryKey: ['tenantInfo'],
              initialData: {},
              gcTime: 0,
              queryFn:
                ((e = i()(
                  c()().mark(function e() {
                    var a, r, o;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.get_tenant_info();
                          case 2:
                            if (((a = e.sent), 0 !== (r = a.data).code)) {
                              e.next = 10;
                              break;
                            }
                            return (
                              (o = r.data),
                              t &&
                                ((0, _.isEmpty)(o.embd_id) ||
                                  (0, _.isEmpty)(o.llm_id)) &&
                                g.Z.warning({
                                  title: n('common.warn'),
                                  content: (0, Z.jsx)('div', {
                                    dangerouslySetInnerHTML: {
                                      __html: h().sanitize(
                                        n('setting.modelProvidersWarn'),
                                      ),
                                    },
                                  }),
                                  onOk: function () {
                                    w.m8.push('/user-setting/model');
                                  },
                                }),
                              (o.chat_id = o.llm_id),
                              (o.speech2text_id = o.asr_id),
                              e.abrupt('return', o)
                            );
                          case 10:
                            return e.abrupt('return', r);
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
          return { data: a.data, loading: a.isFetching };
        },
        T = function () {
          var e = b(!0).data;
          return (0, y.useMemo)(
            function () {
              var t, n;
              return (
                null !==
                  (t =
                    null == e || null === (n = e.parser_ids) || void 0 === n
                      ? void 0
                      : n.split(',')) && void 0 !== t
                  ? t
                  : []
              ).map(function (e) {
                var t = e.split(':');
                return { value: t[0], label: t[1] };
              });
            },
            [e],
          );
        },
        C = function () {
          var e,
            t = (0, m.NL)(),
            n = (0, k.$G)().t,
            a = (0, f.D)({
              mutationKey: ['saveSetting'],
              mutationFn:
                ((e = i()(
                  c()().mark(function e(a) {
                    var r, o;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.setting(a);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (o = r.data).code &&
                                (p.ZP.success(n('message.modified')),
                                t.invalidateQueries({
                                  queryKey: ['userInfo'],
                                })),
                              e.abrupt('return', null == o ? void 0 : o.code)
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
            data: a.data,
            loading: a.isPending,
            saveSetting: a.mutateAsync,
          };
        },
        P = function () {
          var e = (0, y.useState)(''),
            t = r()(e, 2),
            n = t[0],
            a = t[1],
            o = (0, y.useState)(!1),
            s = r()(o, 2),
            u = s[0],
            d = s[1];
          return {
            fetchSystemVersion: (0, y.useCallback)(
              i()(
                c()().mark(function e() {
                  var t, n;
                  return c()().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              d(!0),
                              (e.next = 4),
                              l.ZP.getSystemVersion()
                            );
                          case 4:
                            (t = e.sent),
                              0 === (n = t.data).code && (a(n.data), d(!1)),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9), (e.t0 = e.catch(0)), d(!1);
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]],
                  );
                }),
              ),
              [],
            ),
            version: n,
            loading: u,
          };
        },
        S = function () {
          var e = (0, y.useState)({}),
            t = r()(e, 2),
            n = t[0],
            a = t[1],
            o = (0, y.useState)(!1),
            s = r()(o, 2),
            u = s[0],
            d = s[1];
          return {
            systemStatus: n,
            fetchSystemStatus: (0, y.useCallback)(
              i()(
                c()().mark(function e() {
                  var t, n;
                  return c()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return d(!0), (e.next = 3), l.ZP.getSystemStatus();
                        case 3:
                          (t = e.sent),
                            0 === (n = t.data).code && (a(n.data), d(!1));
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [],
            ),
            loading: u,
          };
        },
        F = function () {
          var e,
            t = (0, f.D)({
              mutationKey: ['fetchManualSystemTokenList'],
              mutationFn:
                ((e = i()(
                  c()().mark(function e() {
                    var t, n, a;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.listToken();
                          case 2:
                            return (
                              (n = e.sent),
                              (a = n.data),
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
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: t.data,
            loading: t.isPending,
            fetchSystemTokenList: t.mutateAsync,
          };
        },
        L = function () {
          var e,
            t = (0, d.a)({
              queryKey: ['fetchSystemTokenList'],
              initialData: [],
              gcTime: 0,
              queryFn:
                ((e = i()(
                  c()().mark(function e() {
                    var t, n, a;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.listToken();
                          case 2:
                            return (
                              (n = e.sent),
                              (a = n.data),
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
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return { data: t.data, loading: t.isFetching, refetch: t.refetch };
        },
        A = function () {
          var e,
            t = (0, m.NL)(),
            n = (0, k.$G)().t,
            a = (0, f.D)({
              mutationKey: ['removeSystemToken'],
              mutationFn:
                ((e = i()(
                  c()().mark(function e(a) {
                    var r, o, s;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.removeToken({}, a);
                          case 2:
                            return (
                              (o = e.sent),
                              0 === (s = o.data).code &&
                                (p.ZP.success(n('message.deleted')),
                                t.invalidateQueries({
                                  queryKey: ['fetchSystemTokenList'],
                                })),
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
            data: a.data,
            loading: a.isPending,
            removeToken: a.mutateAsync,
          };
        },
        E = function () {
          var e,
            t = (0, m.NL)(),
            n = (0, f.D)({
              mutationKey: ['createSystemToken'],
              mutationFn:
                ((e = i()(
                  c()().mark(function e(n) {
                    var a, r, o;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.createToken(n);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (o = r.data).code &&
                                t.invalidateQueries({
                                  queryKey: ['fetchSystemTokenList'],
                                }),
                              e.abrupt(
                                'return',
                                null !== (a = null == o ? void 0 : o.data) &&
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
            createToken: n.mutateAsync,
          };
        },
        j = function () {
          var e,
            t = b().data.tenant_id,
            n = (0, d.a)({
              queryKey: ['listTenantUser', t],
              initialData: [],
              gcTime: 0,
              enabled: !!t,
              queryFn:
                ((e = i()(
                  c()().mark(function e() {
                    var n, a, r;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, l.WX)(t);
                          case 2:
                            return (
                              (a = e.sent),
                              (r = a.data),
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
        D = function () {
          var e,
            t = b().data,
            n = (0, m.NL)(),
            a = (0, f.D)({
              mutationKey: ['addTenantUser'],
              mutationFn:
                ((e = i()(
                  c()().mark(function e(a) {
                    var r, o;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, l.AH)(t.tenant_id, a);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (o = r.data).code &&
                                n.invalidateQueries({
                                  queryKey: ['listTenantUser'],
                                }),
                              e.abrupt('return', null == o ? void 0 : o.code)
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
            data: a.data,
            loading: a.isPending,
            addTenantUser: a.mutateAsync,
          };
        },
        q = function () {
          var e,
            t = b().data,
            n = (0, m.NL)(),
            a = (0, k.$G)().t,
            r = (0, f.D)({
              mutationKey: ['deleteTenantUser'],
              mutationFn:
                ((e = i()(
                  c()().mark(function e(r) {
                    var o, s, i, u, d;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = r.userId),
                              (i = r.tenantId),
                              (e.next = 3),
                              (0, l.EE)({
                                tenantId: null != i ? i : t.tenant_id,
                                userId: s,
                              })
                            );
                          case 3:
                            return (
                              (u = e.sent),
                              0 === (d = u.data).code &&
                                (p.ZP.success(a('message.deleted')),
                                n.invalidateQueries({
                                  queryKey: ['listTenantUser'],
                                }),
                                n.invalidateQueries({
                                  queryKey: ['listTenant'],
                                })),
                              e.abrupt(
                                'return',
                                null !== (o = null == d ? void 0 : d.data) &&
                                  void 0 !== o
                                  ? o
                                  : [],
                              )
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
            data: r.data,
            loading: r.isPending,
            deleteTenantUser: r.mutateAsync,
          };
        },
        K = function () {
          var e,
            t = b().data.tenant_id,
            n = (0, d.a)({
              queryKey: ['listTenant', t],
              initialData: [],
              gcTime: 0,
              enabled: !!t,
              queryFn:
                ((e = i()(
                  c()().mark(function e() {
                    var t, n, a;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, l.vh)();
                          case 2:
                            return (
                              (n = e.sent),
                              (a = n.data),
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
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return { data: n.data, loading: n.isFetching, refetch: n.refetch };
        },
        I = function () {
          var e,
            t = (0, m.NL)(),
            n = (0, k.$G)().t,
            a = (0, f.D)({
              mutationKey: ['agreeTenant'],
              mutationFn:
                ((e = i()(
                  c()().mark(function e(a) {
                    var r, o, s;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, l.FG)(a);
                          case 2:
                            return (
                              (o = e.sent),
                              0 === (s = o.data).code &&
                                (p.ZP.success(n('message.operated')),
                                t.invalidateQueries({
                                  queryKey: ['listTenant'],
                                })),
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
            data: a.data,
            loading: a.isPending,
            agreeTenant: a.mutateAsync,
          };
        },
        M = function () {
          var e,
            t = (0, k.$G)().t,
            n = (0, f.D)({
              mutationKey: ['setLangfuseConfig'],
              mutationFn:
                ((e = i()(
                  c()().mark(function e(n) {
                    var a, r;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.setLangfuseConfig(n);
                          case 2:
                            return (
                              (a = e.sent),
                              0 === (r = a.data).code &&
                                p.ZP.success(t('message.operated')),
                              e.abrupt('return', null == r ? void 0 : r.code)
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
            setLangfuseConfig: n.mutateAsync,
          };
        },
        N = function () {
          var e,
            t = (0, k.$G)().t,
            n = (0, f.D)({
              mutationKey: ['deleteLangfuseConfig'],
              mutationFn:
                ((e = i()(
                  c()().mark(function e() {
                    var n, a;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.deleteLangfuseConfig();
                          case 2:
                            return (
                              (n = e.sent),
                              0 === (a = n.data).code &&
                                p.ZP.success(t('message.deleted')),
                              e.abrupt('return', null == a ? void 0 : a.code)
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
          return {
            data: n.data,
            loading: n.isPending,
            deleteLangfuseConfig: n.mutateAsync,
          };
        },
        U = function () {
          var e,
            t = (0, d.a)({
              queryKey: ['fetchLangfuseConfig'],
              gcTime: 0,
              queryFn:
                ((e = i()(
                  c()().mark(function e() {
                    var t, n;
                    return c()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.getLangfuseConfig();
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
            });
          return { data: t.data, loading: t.isFetching };
        };
    },
    15112: function (e, t, n) {
      'use strict';
      var a = n(86968),
        r = n(42952),
        o = n(22850),
        c = n(86250),
        s = n(15867),
        i = n(86074),
        u = o.Z.Title,
        l = o.Z.Paragraph;
      t.Z = function (e) {
        var t = e.title,
          n = e.description,
          o = e.clickButton,
          d = e.showRightButton,
          m = void 0 !== d && d,
          f = (0, a.qM)('setting').t;
        return (0, i.jsxs)(c.Z, {
          align: 'center',
          justify: 'space-between',
          children: [
            (0, i.jsxs)('div', {
              children: [
                (0, i.jsx)(u, { level: 5, children: t }),
                (0, i.jsx)(l, { children: n }),
              ],
            }),
            m &&
              (0, i.jsx)(s.ZP, {
                type: 'primary',
                onClick: o,
                children: (0, i.jsxs)(c.Z, {
                  align: 'center',
                  gap: 4,
                  children: [(0, i.jsx)(r.Z, {}), f('systemModelSettings')],
                }),
              }),
          ],
        });
      };
    },
    35880: function (e, t, n) {
      'use strict';
      n.d(t, {
        A: function () {
          return s;
        },
      });
      var a = n(5574),
        r = n.n(a),
        o = n(22150),
        c = n(62435),
        s = function () {
          var e = o.Z.useForm(),
            t = r()(e, 1)[0],
            n = (0, c.useState)(!1),
            a = r()(n, 2),
            s = a[0],
            i = a[1],
            u = o.Z.useWatch([], t);
          return (
            (0, c.useEffect)(
              function () {
                t.validateFields({ validateOnly: !0 })
                  .then(function () {
                    return i(!0);
                  })
                  .catch(function () {
                    return i(!1);
                  });
              },
              [t, u],
            ),
            { submittable: s, form: t }
          );
        };
    },
    22271: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n(97857),
        r = n.n(a),
        o = n(39259),
        c = n(19515),
        s = n(96074),
        i = n(22150),
        u = n(79531),
        l = n(42075),
        d = n(15867),
        m = n(15112),
        f = n(35880),
        g = n(86968),
        p = 'passwordWrapper___MQyE0',
        v = n(86074),
        h = { wrapperCol: { offset: 20, span: 4 } },
        _ = function () {
          var e = (0, f.A)(),
            t = e.form,
            n = e.submittable,
            a = (0, o.WH)(),
            _ = a.saveSetting,
            y = a.loading,
            k = (0, g.qM)('setting').t;
          return (0, v.jsxs)('section', {
            className: p,
            children: [
              (0, v.jsx)(m.Z, {
                title: k('password'),
                description: k('passwordDescription'),
              }),
              (0, v.jsx)(s.Z, {}),
              (0, v.jsxs)(i.Z, {
                colon: !1,
                name: 'basic',
                labelAlign: 'left',
                labelCol: { span: 8 },
                wrapperCol: { span: 16 },
                style: { width: '100%' },
                initialValues: { remember: !0 },
                onFinish: function (e) {
                  var t = (0, c.n$)(e.password),
                    n = (0, c.n$)(e.new_password);
                  _({ password: t, new_password: n });
                },
                onFinishFailed: function (e) {
                  console.log('Failed:', e);
                },
                form: t,
                autoComplete: 'off',
                children: [
                  (0, v.jsx)(i.Z.Item, {
                    label: k('currentPassword'),
                    name: 'password',
                    rules: [
                      {
                        required: !0,
                        message: k('currentPasswordMessage'),
                        whitespace: !0,
                      },
                    ],
                    children: (0, v.jsx)(u.Z.Password, {}),
                  }),
                  (0, v.jsx)(s.Z, {}),
                  (0, v.jsx)(i.Z.Item, {
                    label: k('newPassword'),
                    required: !0,
                    children: (0, v.jsx)(i.Z.Item, {
                      noStyle: !0,
                      name: 'new_password',
                      rules: [
                        {
                          required: !0,
                          message: k('newPasswordMessage'),
                          whitespace: !0,
                        },
                        {
                          type: 'string',
                          min: 8,
                          message: k('newPasswordDescription'),
                        },
                      ],
                      children: (0, v.jsx)(u.Z.Password, {}),
                    }),
                  }),
                  (0, v.jsx)(s.Z, {}),
                  (0, v.jsx)(i.Z.Item, {
                    label: k('confirmPassword'),
                    name: 'confirm_password',
                    dependencies: ['new_password'],
                    rules: [
                      {
                        required: !0,
                        message: k('confirmPasswordMessage'),
                        whitespace: !0,
                      },
                      {
                        type: 'string',
                        min: 8,
                        message: k('newPasswordDescription'),
                      },
                      function (e) {
                        var t = e.getFieldValue;
                        return {
                          validator: function (e, n) {
                            return n && t('new_password') !== n
                              ? Promise.reject(
                                  new Error(
                                    k('confirmPasswordNonMatchMessage'),
                                  ),
                                )
                              : Promise.resolve();
                          },
                        };
                      },
                    ],
                    children: (0, v.jsx)(u.Z.Password, {}),
                  }),
                  (0, v.jsx)(s.Z, {}),
                  (0, v.jsx)(
                    i.Z.Item,
                    r()(
                      r()({}, h),
                      {},
                      {
                        shouldUpdate: function (e, t) {
                          return e.additional !== t.additional;
                        },
                        children: (0, v.jsxs)(l.Z, {
                          children: [
                            (0, v.jsx)(d.ZP, {
                              htmlType: 'button',
                              children: k('cancel'),
                            }),
                            (0, v.jsx)(d.ZP, {
                              type: 'primary',
                              htmlType: 'submit',
                              disabled: !n,
                              loading: y,
                              children: k('save', { keyPrefix: 'common' }),
                            }),
                          ],
                        }),
                      },
                    ),
                  ),
                ],
              }),
            ],
          });
        };
    },
    72668: function (e, t, n) {
      'use strict';
      n.d(t, {
        AH: function () {
          return E;
        },
        EE: function () {
          return j;
        },
        FG: function () {
          return q;
        },
        WX: function () {
          return A;
        },
        nO: function () {
          return L;
        },
        vh: function () {
          return D;
        },
        vi: function () {
          return F;
        },
      });
      var a = n(60806),
        r = n(66582),
        o = n(78158),
        c = a.Z.login,
        s = a.Z.logout,
        i = a.Z.register,
        u = a.Z.setting,
        l = a.Z.user_info,
        d = a.Z.tenant_info,
        m = a.Z.factories_list,
        f = a.Z.llm_list,
        g = a.Z.my_llm,
        p = a.Z.set_api_key,
        v = a.Z.set_tenant_info,
        h = a.Z.add_llm,
        _ = a.Z.delete_llm,
        y = a.Z.deleteFactory,
        k = a.Z.getSystemStatus,
        w = a.Z.getSystemVersion,
        Z = a.Z.getSystemTokenList,
        x = a.Z.removeSystemToken,
        b = a.Z.createSystemToken,
        T = a.Z.getSystemConfig,
        C = a.Z.setLangfuseConfig,
        P = {
          login: { url: c, method: 'post' },
          logout: { url: s, method: 'get' },
          register: { url: i, method: 'post' },
          setting: { url: u, method: 'post' },
          user_info: { url: l, method: 'get' },
          get_tenant_info: { url: d, method: 'get' },
          set_tenant_info: { url: v, method: 'post' },
          factories_list: { url: m, method: 'get' },
          llm_list: { url: f, method: 'get' },
          my_llm: { url: g, method: 'get' },
          set_api_key: { url: p, method: 'post' },
          add_llm: { url: h, method: 'post' },
          delete_llm: { url: _, method: 'post' },
          getSystemStatus: { url: k, method: 'get' },
          getSystemVersion: { url: w, method: 'get' },
          deleteFactory: { url: y, method: 'post' },
          listToken: { url: Z, method: 'get' },
          createToken: { url: b, method: 'post' },
          removeToken: { url: x, method: 'delete' },
          getSystemConfig: { url: T, method: 'get' },
          setLangfuseConfig: { url: C, method: 'put' },
          getLangfuseConfig: { url: C, method: 'get' },
          deleteLangfuseConfig: { url: C, method: 'delete' },
        },
        S = (0, r.Z)(P, o.ZP),
        F = function () {
          return o.ZP.get(a.Z.login_channels);
        },
        L = function (e) {
          return (window.location.href = a.Z.login_channel(e));
        },
        A = function (e) {
          return o.ZP.get(a.Z.listTenantUser(e));
        },
        E = function (e, t) {
          return (0, o.v_)(a.Z.addTenantUser(e), { email: t });
        },
        j = function (e) {
          var t = e.tenantId,
            n = e.userId;
          return o.ZP.delete(a.Z.deleteTenantUser(t, n));
        },
        D = function () {
          return o.ZP.get(a.Z.listTenant);
        },
        q = function (e) {
          return o.ZP.put(a.Z.agreeTenant(e));
        };
      t.ZP = S;
    },
    60806: function (e, t, n) {
      'use strict';
      n.d(t, {
        N: function () {
          return a;
        },
      });
      var a = '/v1';
      t.Z = {
        login: ''.concat(a, '/user/login'),
        logout: ''.concat(a, '/user/logout'),
        register: ''.concat(a, '/user/register'),
        setting: ''.concat(a, '/user/setting'),
        user_info: ''.concat(a, '/user/info'),
        tenant_info: ''.concat(a, '/user/tenant_info'),
        set_tenant_info: ''.concat(a, '/user/set_tenant_info'),
        login_channels: ''.concat(a, '/user/login/channels'),
        login_channel: function (e) {
          return ''.concat(a, '/user/login/').concat(e);
        },
        addTenantUser: function (e) {
          return ''.concat(a, '/tenant/').concat(e, '/user');
        },
        listTenantUser: function (e) {
          return ''.concat(a, '/tenant/').concat(e, '/user/list');
        },
        deleteTenantUser: function (e, t) {
          return ''.concat(a, '/tenant/').concat(e, '/user/').concat(t);
        },
        listTenant: ''.concat(a, '/tenant/list'),
        agreeTenant: function (e) {
          return ''.concat(a, '/tenant/agree/').concat(e);
        },
        factories_list: ''.concat(a, '/llm/factories'),
        llm_list: ''.concat(a, '/llm/list'),
        my_llm: ''.concat(a, '/llm/my_llms'),
        set_api_key: ''.concat(a, '/llm/set_api_key'),
        add_llm: ''.concat(a, '/llm/add_llm'),
        delete_llm: ''.concat(a, '/llm/delete_llm'),
        deleteFactory: ''.concat(a, '/llm/delete_factory'),
        llm_tools: ''.concat(a, '/plugin/llm_tools'),
        kb_list: ''.concat(a, '/kb/list'),
        create_kb: ''.concat(a, '/kb/create'),
        update_kb: ''.concat(a, '/kb/update'),
        rm_kb: ''.concat(a, '/kb/rm'),
        get_kb_detail: ''.concat(a, '/kb/detail'),
        getKnowledgeGraph: function (e) {
          return ''.concat(a, '/kb/').concat(e, '/knowledge_graph');
        },
        listTag: function (e) {
          return ''.concat(a, '/kb/').concat(e, '/tags');
        },
        listTagByKnowledgeIds: ''.concat(a, '/kb/tags'),
        removeTag: function (e) {
          return ''.concat(a, '/kb/').concat(e, '/rm_tags');
        },
        renameTag: function (e) {
          return ''.concat(a, '/kb/').concat(e, '/rename_tag');
        },
        chunk_list: ''.concat(a, '/chunk/list'),
        create_chunk: ''.concat(a, '/chunk/create'),
        set_chunk: ''.concat(a, '/chunk/set'),
        get_chunk: ''.concat(a, '/chunk/get'),
        switch_chunk: ''.concat(a, '/chunk/switch'),
        rm_chunk: ''.concat(a, '/chunk/rm'),
        retrieval_test: ''.concat(a, '/chunk/retrieval_test'),
        knowledge_graph: ''.concat(a, '/chunk/knowledge_graph'),
        get_document_list: ''.concat(a, '/document/list'),
        document_change_status: ''.concat(a, '/document/change_status'),
        document_rm: ''.concat(a, '/document/rm'),
        document_delete: ''.concat(a, '/api/document'),
        document_rename: ''.concat(a, '/document/rename'),
        document_create: ''.concat(a, '/document/create'),
        document_run: ''.concat(a, '/document/run'),
        document_change_parser: ''.concat(a, '/document/change_parser'),
        document_thumbnails: ''.concat(a, '/document/thumbnails'),
        get_document_file: ''.concat(a, '/document/get'),
        document_upload: ''.concat(a, '/document/upload'),
        web_crawl: ''.concat(a, '/document/web_crawl'),
        document_infos: ''.concat(a, '/document/infos'),
        upload_and_parse: ''.concat(a, '/document/upload_and_parse'),
        parse: ''.concat(a, '/document/parse'),
        setMeta: ''.concat(a, '/document/set_meta'),
        setDialog: ''.concat(a, '/dialog/set'),
        getDialog: ''.concat(a, '/dialog/get'),
        removeDialog: ''.concat(a, '/dialog/rm'),
        listDialog: ''.concat(a, '/dialog/list'),
        setConversation: ''.concat(a, '/conversation/set'),
        getConversation: ''.concat(a, '/conversation/get'),
        getConversationSSE: ''.concat(a, '/conversation/getsse'),
        listConversation: ''.concat(a, '/conversation/list'),
        removeConversation: ''.concat(a, '/conversation/rm'),
        completeConversation: ''.concat(a, '/conversation/completion'),
        deleteMessage: ''.concat(a, '/conversation/delete_msg'),
        thumbup: ''.concat(a, '/conversation/thumbup'),
        tts: ''.concat(a, '/conversation/tts'),
        ask: ''.concat(a, '/conversation/ask'),
        mindmap: ''.concat(a, '/conversation/mindmap'),
        getRelatedQuestions: ''.concat(a, '/conversation/related_questions'),
        createToken: ''.concat(a, '/api/new_token'),
        listToken: ''.concat(a, '/api/token_list'),
        removeToken: ''.concat(a, '/api/rm'),
        getStats: ''.concat(a, '/api/stats'),
        createExternalConversation: ''.concat(a, '/api/new_conversation'),
        getExternalConversation: ''.concat(a, '/api/conversation'),
        completeExternalConversation: ''.concat(a, '/api/completion'),
        uploadAndParseExternal: ''.concat(a, '/api/document/upload_and_parse'),
        listFile: ''.concat(a, '/file/list'),
        uploadFile: ''.concat(a, '/file/upload'),
        removeFile: ''.concat(a, '/file/rm'),
        renameFile: ''.concat(a, '/file/rename'),
        getAllParentFolder: ''.concat(a, '/file/all_parent_folder'),
        createFolder: ''.concat(a, '/file/create'),
        connectFileToKnowledge: ''.concat(a, '/file2document/convert'),
        getFile: ''.concat(a, '/file/get'),
        moveFile: ''.concat(a, '/file/mv'),
        getSystemVersion: ''.concat(a, '/system/version'),
        getSystemStatus: ''.concat(a, '/system/status'),
        getSystemTokenList: ''.concat(a, '/system/token_list'),
        createSystemToken: ''.concat(a, '/system/new_token'),
        listSystemToken: ''.concat(a, '/system/token_list'),
        removeSystemToken: ''.concat(a, '/system/token'),
        getSystemConfig: ''.concat(a, '/system/config'),
        setLangfuseConfig: ''.concat(a, '/langfuse/api_key'),
        listTemplates: ''.concat(a, '/canvas/templates'),
        listCanvas: ''.concat(a, '/canvas/list'),
        listCanvasTeam: ''.concat(a, '/canvas/listteam'),
        getCanvas: ''.concat(a, '/canvas/get'),
        getCanvasSSE: ''.concat(a, '/canvas/getsse'),
        removeCanvas: ''.concat(a, '/canvas/rm'),
        setCanvas: ''.concat(a, '/canvas/set'),
        settingCanvas: ''.concat(a, '/canvas/setting'),
        getListVersion: ''.concat(a, '/canvas/getlistversion'),
        getVersion: ''.concat(a, '/canvas/getversion'),
        resetCanvas: ''.concat(a, '/canvas/reset'),
        runCanvas: ''.concat(a, '/canvas/completion'),
        testDbConnect: ''.concat(a, '/canvas/test_db_connect'),
        getInputElements: ''.concat(a, '/canvas/input_elements'),
        debug: ''.concat(a, '/canvas/debug'),
        getMcpServerList: ''.concat(a, '/mcp_server/list'),
        getMultipleMcpServers: ''.concat(a, '/mcp_server/get_multiple'),
        getMcpServer: function (e) {
          return ''.concat(a, '/mcp_server/get/').concat(e);
        },
        createMcpServer: ''.concat(a, '/mcp_server/create'),
        updateMcpServer: ''.concat(a, '/mcp_server/update'),
        deleteMcpServer: ''.concat(a, '/mcp_server/rm'),
      };
    },
    19515: function (e, t, n) {
      'use strict';
      n.d(t, {
        dz: function () {
          return o;
        },
        mD: function () {
          return s;
        },
        n$: function () {
          return c;
        },
      });
      var a = n(52300),
        r = n(98361),
        o = function () {
          return { width: window.innerWidth };
        },
        c = function (e) {
          var t = new r.Z();
          return (
            t.setPublicKey(
              '-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArq9XTUSeYr2+N1h3Afl/z8Dse/2yD0ZGrKwx+EEEcdsBLca9Ynmx3nIB5obmLlSfmskLpBo0UACBmB5rEjBp2Q2f3AG3Hjd4B+gNCG6BDaawuDlgANIhGnaTLrIqWrrcm4EMzJOnAOI1fgzJRsOOUEfaS318Eq9OVO3apEyCCt0lOQK6PuksduOjVxtltDav+guVAA068NrPYmRNabVKRNLJpL8w4D44sfth5RvZ3q9t+6RTArpEtc5sh5ChzvqPOzKGMXW83C95TxmXqpbK6olN4RevSfVjEAgCydH6HN6OhtOQEcnrU97r9H0iZOWwbw3pVrZiUkuRD1R56Wzs2wIDAQAB-----END PUBLIC KEY-----',
            ),
            t.encrypt(a.DS.encode(e))
          );
        },
        s = function (e) {
          return e.slice(e.lastIndexOf('.') + 1).toLowerCase();
        };
    },
    66582: function (e, t, n) {
      'use strict';
      var a = n(97857),
        r = n.n(a),
        o = n(57557),
        c = n.n(o),
        s = ['post', 'delete', 'put'];
      t.Z = function (e, t) {
        var n = {},
          a = function (a) {
            n[a] = function (n, o) {
              var i = e[a].url,
                u = e[a];
              return (
                o && (i = i + '/' + o),
                s.some(function (t) {
                  return t === e[a].method.toLowerCase();
                })
                  ? t(i, { method: e[a].method, data: n })
                  : 'get' === e[a].method || 'GET' === e[a].method
                    ? t.get(
                        i,
                        r()(
                          r()({}, c()(u, ['method', 'url'])),
                          {},
                          { params: n },
                        ),
                      )
                    : void 0
              );
            };
          };
        for (var o in e) a(o);
        return n;
      };
    },
    78158: function (e, t, n) {
      'use strict';
      n.d(t, {
        v_: function () {
          return k;
        },
      });
      var a = n(15009),
        r = n.n(a),
        o = n(99289),
        c = n.n(o),
        s = n(9783),
        i = n.n(s),
        u = n(97857),
        l = n.n(u),
        d = n(39918),
        m = n(54707),
        f = n(61921),
        g = n(26855),
        p = n(45360),
        v = n(11238),
        h = n(31098),
        _ = {
          200: m.Z.t('message.200'),
          201: m.Z.t('message.201'),
          202: m.Z.t('message.202'),
          204: m.Z.t('message.204'),
          400: m.Z.t('message.400'),
          401: m.Z.t('message.401'),
          403: m.Z.t('message.403'),
          404: m.Z.t('message.404'),
          406: m.Z.t('message.406'),
          410: m.Z.t('message.410'),
          413: m.Z.t('message.413'),
          422: m.Z.t('message.422'),
          500: m.Z.t('message.500'),
          502: m.Z.t('message.502'),
          503: m.Z.t('message.503'),
          504: m.Z.t('message.504'),
        },
        y = (0, v.l7)({
          errorHandler: function (e) {
            var t = e.response;
            if ('Failed to fetch' === e.message)
              g.Z.error({
                description: m.Z.t('message.networkAnomalyDescription'),
                message: m.Z.t('message.networkAnomaly'),
              });
            else if (t && t.status) {
              var n = _[t.status] || t.statusText,
                a = t.status,
                r = t.url;
              g.Z.error({
                message: ''
                  .concat(m.Z.t('message.requestError'), ' ')
                  .concat(a, ': ')
                  .concat(r),
                description: n,
              });
            }
            return null != t ? t : { data: { code: 1999 } };
          },
          timeout: 3e5,
          getResponse: !0,
        });
      y.interceptors.request.use(function (e, t) {
        var n = (0, h._y)(t.data),
          a = (0, h._y)(t.params);
        return {
          url: e,
          options: l()(
            l()({}, t),
            {},
            {
              data: n,
              params: a,
              headers: l()(
                l()({}, t.skipToken ? void 0 : i()({}, d._n, (0, f.cD)())),
                t.headers,
              ),
              interceptors: !0,
            },
          ),
        };
      }),
        y.interceptors.response.use(
          (function () {
            var e = c()(
              r()().mark(function e(t, n) {
                var a, o;
                return r()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((413 !== (null == t ? void 0 : t.status) &&
                            504 !== (null == t ? void 0 : t.status)) ||
                            p.ZP.error(_[null == t ? void 0 : t.status]),
                          'blob' !== n.responseType)
                        ) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt('return', t);
                      case 3:
                        return (
                          (e.next = 5),
                          null == t || null === (a = t.clone()) || void 0 === a
                            ? void 0
                            : a.json()
                        );
                      case 5:
                        return (
                          100 === (null == (o = e.sent) ? void 0 : o.code)
                            ? p.ZP.error(null == o ? void 0 : o.message)
                            : 401 === (null == o ? void 0 : o.code)
                              ? (g.Z.error({
                                  message: null == o ? void 0 : o.message,
                                  description: null == o ? void 0 : o.message,
                                  duration: 3,
                                }),
                                f.ZP.removeAll(),
                                (0, f.rf)())
                              : 0 !== (null == o ? void 0 : o.code) &&
                                g.Z.error({
                                  message: ''
                                    .concat(m.Z.t('message.hint'), ' : ')
                                    .concat(null == o ? void 0 : o.code),
                                  description: null == o ? void 0 : o.message,
                                  duration: 3,
                                }),
                          e.abrupt('return', t)
                        );
                      case 8:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        (t.ZP = y);
      var k = function (e, t) {
        return y.post(e, { data: t });
      };
    },
    98065: function (e, t, n) {
      'use strict';
      function a(e) {
        return ['small', 'middle', 'large'].includes(e);
      }
      function r(e) {
        return !!e && 'number' == typeof e && !Number.isNaN(e);
      }
      n.d(t, {
        T: function () {
          return r;
        },
        n: function () {
          return a;
        },
      });
    },
    86635: function (e) {
      function t(e) {
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        });
      }
      (t.keys = function () {
        return [];
      }),
        (t.resolve = t),
        (t.id = 86635),
        (e.exports = t);
    },
    24654: function () {},
  },
]);
//# sourceMappingURL=p__user-setting__setting-password__index.92f0e756.async.js.map
