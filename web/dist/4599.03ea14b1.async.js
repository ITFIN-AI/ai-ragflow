'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [4599],
  {
    7502: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var a = t(9783),
        r = t.n(a),
        s = t(5574),
        i = t.n(s),
        l = t(33623),
        o = t(7306),
        c = t(86968),
        u = t(22850),
        d = t(4393),
        m = t(22150),
        f = t(84567),
        p = t(34041),
        h = t(85576),
        x = t(92398),
        v = t(62435),
        g = t(98236),
        y = t(40169),
        b = t(27080),
        j = 'codeCard___TMIpT',
        Z = 'id___EtPCm',
        k = 'darkId___ASEvo',
        w = t(86074),
        _ = u.Z.Paragraph,
        N = u.Z.Link,
        I = function (e) {
          var n,
            t = e.visible,
            a = e.hideModal,
            s = e.token,
            u = void 0 === s ? '' : s,
            I = e.form,
            C = e.beta,
            P = void 0 === C ? '' : C,
            T = e.isAgent,
            S = (0, c.qM)('chat').t,
            L = (0, g.e5)(),
            M = (0, v.useState)(!1),
            E = i()(M, 2),
            F = E[0],
            q = E[1],
            V = (0, v.useState)(''),
            K = i()(V, 2),
            A = K[0],
            D = K[1],
            R = (0, v.useMemo)(function () {
              return Object.values(y.O2).map(function (e) {
                return { label: y.Tt[e], value: e };
              });
            }, []),
            G =
              ((n = ''
                .concat(location.origin, '/chat/share?shared_id=')
                .concat(u, '&from=')
                .concat(I, '&auth=')
                .concat(P)),
              F && (n += '&visible_avatar=1'),
              A && (n += '&locale='.concat(A)),
              n),
            O = '\n  ~~~ html\n  <iframe\n  src="'.concat(
              G,
              '"\n  style="width: 100%; height: 100%; min-height: 600px"\n  frameborder="0"\n>\n</iframe>\n~~~\n  ',
            ),
            B = [
              {
                key: '1',
                label: S('fullScreenTitle'),
                children: (0, w.jsxs)(d.Z, {
                  title: S('fullScreenDescription'),
                  extra: (0, w.jsx)(l.Z, { text: O }),
                  className: j,
                  children: [
                    (0, w.jsxs)('div', {
                      className: 'p-2',
                      children: [
                        (0, w.jsx)('h2', {
                          className: 'mb-3',
                          children: 'Option:',
                        }),
                        (0, w.jsx)(m.Z.Item, {
                          label: S('avatarHidden'),
                          labelCol: { span: 6 },
                          wrapperCol: { span: 18 },
                          children: (0, w.jsx)(f.Z, {
                            checked: F,
                            onChange: function (e) {
                              return q(e.target.checked);
                            },
                          }),
                        }),
                        (0, w.jsx)(m.Z.Item, {
                          label: S('locale'),
                          labelCol: { span: 6 },
                          wrapperCol: { span: 18 },
                          children: (0, w.jsx)(p.Z, {
                            placeholder: 'Select a locale',
                            onChange: function (e) {
                              return D(e);
                            },
                            options: R,
                            style: { width: '100%' },
                          }),
                        }),
                      ],
                    }),
                    (0, w.jsx)(o.Z, { children: O }),
                  ],
                }),
              },
              { key: '2', label: S('partialTitle'), children: S('comingSoon') },
              {
                key: '3',
                label: S('extensionTitle'),
                children: S('comingSoon'),
              },
            ];
          return (0, w.jsxs)(h.Z, {
            title: S('embedIntoSite', { keyPrefix: 'common' }),
            open: t,
            style: { top: 300 },
            width: '50vw',
            onOk: a,
            onCancel: a,
            children: [
              (0, w.jsx)(x.Z, {
                defaultActiveKey: '1',
                items: B,
                onChange: function (e) {
                  console.log(e);
                },
              }),
              (0, w.jsxs)('div', {
                className: 'text-base font-medium mt-4 mb-1',
                children: [
                  S(T ? 'flow' : 'chat', { keyPrefix: 'header' }),
                  (0, w.jsx)('span', {
                    className: 'ml-1 inline-block',
                    children: 'ID',
                  }),
                ],
              }),
              (0, w.jsx)(_, {
                copyable: { text: u },
                className: (0, b.cn)(Z, r()({}, k, L)),
                children: u,
              }),
              (0, w.jsx)(N, {
                href: T
                  ? 'https://ragflow.io/docs/dev/http_api_reference#create-session-with-agent'
                  : 'https://ragflow.io/docs/dev/http_api_reference#create-session-with-chat-assistant',
                target: '_blank',
                children: S('howUseId', { keyPrefix: T ? 'flow' : 'chat' }),
              }),
            ],
          });
        };
    },
    5600: function (e, n, t) {
      t.d(n, {
        Xm: function () {
          return v;
        },
        iV: function () {
          return x;
        },
        r6: function () {
          return p;
        },
      });
      var a = t(15009),
        r = t.n(a),
        s = t(99289),
        i = t.n(s),
        l = t(9783),
        o = t.n(l),
        c = t(1079),
        u = t(86968),
        d = t(39259),
        m = t(45360),
        f = t(62435),
        p = function (e, n) {
          var t = (0, d.ef)().removeToken,
            a = (0, d.PI)(),
            r = a.createToken,
            s = a.loading,
            i = (0, d.F1)(),
            l = i.data,
            c = i.loading,
            m = (0, u.I3)();
          return {
            removeToken: function (e) {
              m({
                onOk: function () {
                  return t(e);
                },
              });
            },
            createToken: (0, f.useCallback)(
              function () {
                r(o()({}, e, n));
              },
              [r, e, n],
            ),
            tokenList: l,
            creatingLoading: s,
            listLoading: c,
          };
        },
        h = function () {
          var e,
            n = ((e = (0, u.qM)('chat').t),
            {
              showTokenEmptyError: (0, f.useCallback)(
                function () {
                  m.ZP.error(e('tokenError'));
                },
                [e],
              ),
            }).showTokenEmptyError,
            t = (function () {
              var e = (0, u.qM)('chat').t;
              return {
                showBetaEmptyError: (0, f.useCallback)(
                  function () {
                    m.ZP.error(e('betaError'));
                  },
                  [e],
                ),
              };
            })(),
            a = t.showBetaEmptyError,
            s = (0, d.v)(),
            l = s.data,
            o = s.fetchSystemTokenList,
            c = '';
          return (
            Array.isArray(l) && l.length > 0 && (l[0].token, (c = l[0].beta)),
            {
              token: Array.isArray(l) && l.length > 0 ? l[0].token : '',
              beta: c,
              handleOperate: (0, f.useCallback)(
                i()(
                  r()().mark(function e() {
                    var t, s, i;
                    return r()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), o();
                          case 2:
                            if (
                              ((t = e.sent),
                              (s = t),
                              !(Array.isArray(s) && s.length > 0))
                            ) {
                              e.next = 11;
                              break;
                            }
                            if (s[0].beta) {
                              e.next = 8;
                              break;
                            }
                            return a(), e.abrupt('return', !1);
                          case 8:
                            return e.abrupt(
                              'return',
                              null === (i = s[0]) || void 0 === i
                                ? void 0
                                : i.token,
                            );
                          case 11:
                            return n(), e.abrupt('return', !1);
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                ),
                [o, a, n],
              ),
            }
          );
        },
        x = function () {
          var e = (0, u.pG)(),
            n = e.visible,
            t = e.hideModal,
            a = e.showModal,
            s = h(),
            l = s.handleOperate,
            o = s.token,
            c = s.beta;
          return {
            showEmbedModal: (0, f.useCallback)(
              i()(
                r()().mark(function e() {
                  return r()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), l();
                        case 2:
                          e.sent && a();
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [l, a],
            ),
            hideEmbedModal: t,
            embedVisible: n,
            embedToken: o,
            beta: c,
          };
        },
        v = function (e) {
          var n = h().handleOperate,
            t = (0, f.useCallback)(
              function (n) {
                window.open(
                  (function (e) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 'chat',
                      t = window.location,
                      a = t.protocol,
                      r = t.host;
                    return ''
                      .concat(a, '//')
                      .concat(r, '/chat/share?shared_id=')
                      .concat(e, '&from=')
                      .concat(n);
                  })(n, 'canvasId' === e ? c.qH.Agent : c.qH.Chat),
                  '_blank',
                );
              },
              [e],
            );
          return {
            handlePreview: (0, f.useCallback)(
              i()(
                r()().mark(function e() {
                  var a;
                  return r()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n();
                        case 2:
                          (a = e.sent) && t(a);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [n, t],
            ),
          };
        };
    },
    58057: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var a = t(19632),
        r = t.n(a),
        s = t(97857),
        i = t.n(s),
        l = t(9783),
        o = t.n(l),
        c = t(96330),
        u = t(22150),
        d = t(34041),
        m = t(83062),
        f = t(86250),
        p = t(72269),
        h = t(71338),
        x = t(48928),
        v = t(68929),
        g = t.n(v),
        y = t(86968),
        b = t(38392),
        j = t(71250),
        Z = t(25035),
        k = t(62435),
        w = 'sliderInputNumber___ZMqQO',
        _ = 'variableSlider___MglII',
        N = t(86074),
        I = function (e) {
          var n = e.prefix,
            t = e.formItemLayout,
            a = void 0 === t ? {} : t,
            s = e.onChange,
            l = u.Z.useFormInstance(),
            v = (0, y.qM)('chat').t,
            I = Object.values(c.oQ).map(function (e) {
              return { label: v(g()(e)), value: e };
            }),
            C = (0, k.useCallback)(
              function (e) {
                var t = c.S8[e],
                  a = t;
                n && (a = o()({}, n, t));
                var r = (0, j.uq)();
                l.setFieldsValue(i()(i()({}, a), r));
              },
              [l, n],
            ),
            P = (0, k.useMemo)(
              function () {
                return n ? [n] : [];
              },
              [n],
            ),
            T = (0, b.T)([c.Vr.Chat, c.Vr.Image2text]);
          return (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsx)(
                u.Z.Item,
                i()(
                  i()(
                    {
                      label: v('model'),
                      name: 'llm_id',
                      tooltip: v('modelTip'),
                    },
                    a,
                  ),
                  {},
                  {
                    rules: [{ required: !0, message: v('modelMessage') }],
                    children: (0, N.jsx)(d.Z, {
                      options: T,
                      showSearch: !0,
                      popupMatchSelectWidth: !1,
                      onChange: s,
                    }),
                  },
                ),
              ),
              (0, N.jsxs)('div', {
                className: 'border rounded-md',
                children: [
                  (0, N.jsxs)('div', {
                    className: 'flex justify-between bg-slate-100 p-2 mb-2',
                    children: [
                      (0, N.jsxs)('div', {
                        className: 'space-x-1 items-center',
                        children: [
                          (0, N.jsx)('span', {
                            className: 'text-lg font-semibold',
                            children: v('freedom'),
                          }),
                          (0, N.jsx)(m.Z, {
                            title: v('freedomTip'),
                            children: (0, N.jsx)(Z.Z, {}),
                          }),
                        ],
                      }),
                      (0, N.jsx)('div', {
                        className: 'w-1/4 min-w-32',
                        children: (0, N.jsx)(u.Z.Item, {
                          label: v('freedom'),
                          name: 'parameter',
                          tooltip: v('freedomTip'),
                          initialValue: c.oQ.Precise,
                          labelCol: { span: 0 },
                          wrapperCol: { span: 24 },
                          className: 'm-0',
                          children: (0, N.jsx)(d.Z, {
                            options: I,
                            onChange: C,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, N.jsxs)('div', {
                    className: 'pr-2',
                    children: [
                      (0, N.jsx)(
                        u.Z.Item,
                        i()(
                          i()(
                            {
                              label: v('temperature'),
                              tooltip: v('temperatureTip'),
                            },
                            a,
                          ),
                          {},
                          {
                            children: (0, N.jsxs)(f.Z, {
                              gap: 20,
                              align: 'center',
                              children: [
                                (0, N.jsx)(u.Z.Item, {
                                  name: 'temperatureEnabled',
                                  valuePropName: 'checked',
                                  noStyle: !0,
                                  children: (0, N.jsx)(p.Z, { size: 'small' }),
                                }),
                                (0, N.jsx)(u.Z.Item, {
                                  noStyle: !0,
                                  dependencies: ['temperatureEnabled'],
                                  shouldUpdate: !0,
                                  children: function (e) {
                                    var n = !(0, e.getFieldValue)(
                                      'temperatureEnabled',
                                    );
                                    return (0, N.jsxs)(N.Fragment, {
                                      children: [
                                        (0, N.jsx)(f.Z, {
                                          flex: 1,
                                          children: (0, N.jsx)(u.Z.Item, {
                                            name: [].concat(r()(P), [
                                              'temperature',
                                            ]),
                                            noStyle: !0,
                                            children: (0, N.jsx)(h.Z, {
                                              className: _,
                                              max: 1,
                                              step: 0.01,
                                              disabled: n,
                                            }),
                                          }),
                                        }),
                                        (0, N.jsx)(u.Z.Item, {
                                          name: [].concat(r()(P), [
                                            'temperature',
                                          ]),
                                          noStyle: !0,
                                          children: (0, N.jsx)(x.Z, {
                                            className: w,
                                            max: 1,
                                            min: 0,
                                            step: 0.01,
                                            disabled: n,
                                          }),
                                        }),
                                      ],
                                    });
                                  },
                                }),
                              ],
                            }),
                          },
                        ),
                      ),
                      (0, N.jsx)(
                        u.Z.Item,
                        i()(
                          i()({ label: v('topP'), tooltip: v('topPTip') }, a),
                          {},
                          {
                            children: (0, N.jsxs)(f.Z, {
                              gap: 20,
                              align: 'center',
                              children: [
                                (0, N.jsx)(u.Z.Item, {
                                  name: 'topPEnabled',
                                  valuePropName: 'checked',
                                  noStyle: !0,
                                  children: (0, N.jsx)(p.Z, { size: 'small' }),
                                }),
                                (0, N.jsx)(u.Z.Item, {
                                  noStyle: !0,
                                  dependencies: ['topPEnabled'],
                                  shouldUpdate: !0,
                                  children: function (e) {
                                    var n = !(0, e.getFieldValue)(
                                      'topPEnabled',
                                    );
                                    return (0, N.jsxs)(N.Fragment, {
                                      children: [
                                        (0, N.jsx)(f.Z, {
                                          flex: 1,
                                          children: (0, N.jsx)(u.Z.Item, {
                                            name: [].concat(r()(P), ['top_p']),
                                            noStyle: !0,
                                            children: (0, N.jsx)(h.Z, {
                                              className: _,
                                              max: 1,
                                              step: 0.01,
                                              disabled: n,
                                            }),
                                          }),
                                        }),
                                        (0, N.jsx)(u.Z.Item, {
                                          name: [].concat(r()(P), ['top_p']),
                                          noStyle: !0,
                                          children: (0, N.jsx)(x.Z, {
                                            className: w,
                                            max: 1,
                                            min: 0,
                                            step: 0.01,
                                            disabled: n,
                                          }),
                                        }),
                                      ],
                                    });
                                  },
                                }),
                              ],
                            }),
                          },
                        ),
                      ),
                      (0, N.jsx)(
                        u.Z.Item,
                        i()(
                          i()(
                            {
                              label: v('presencePenalty'),
                              tooltip: v('presencePenaltyTip'),
                            },
                            a,
                          ),
                          {},
                          {
                            children: (0, N.jsxs)(f.Z, {
                              gap: 20,
                              align: 'center',
                              children: [
                                (0, N.jsx)(u.Z.Item, {
                                  name: 'presencePenaltyEnabled',
                                  valuePropName: 'checked',
                                  noStyle: !0,
                                  children: (0, N.jsx)(p.Z, { size: 'small' }),
                                }),
                                (0, N.jsx)(u.Z.Item, {
                                  noStyle: !0,
                                  dependencies: ['presencePenaltyEnabled'],
                                  shouldUpdate: !0,
                                  children: function (e) {
                                    var n = !(0, e.getFieldValue)(
                                      'presencePenaltyEnabled',
                                    );
                                    return (0, N.jsxs)(N.Fragment, {
                                      children: [
                                        (0, N.jsx)(f.Z, {
                                          flex: 1,
                                          children: (0, N.jsx)(u.Z.Item, {
                                            name: [].concat(r()(P), [
                                              'presence_penalty',
                                            ]),
                                            noStyle: !0,
                                            children: (0, N.jsx)(h.Z, {
                                              className: _,
                                              max: 1,
                                              step: 0.01,
                                              disabled: n,
                                            }),
                                          }),
                                        }),
                                        (0, N.jsx)(u.Z.Item, {
                                          name: [].concat(r()(P), [
                                            'presence_penalty',
                                          ]),
                                          noStyle: !0,
                                          children: (0, N.jsx)(x.Z, {
                                            className: w,
                                            max: 1,
                                            min: 0,
                                            step: 0.01,
                                            disabled: n,
                                          }),
                                        }),
                                      ],
                                    });
                                  },
                                }),
                              ],
                            }),
                          },
                        ),
                      ),
                      (0, N.jsx)(
                        u.Z.Item,
                        i()(
                          i()(
                            {
                              label: v('frequencyPenalty'),
                              tooltip: v('frequencyPenaltyTip'),
                            },
                            a,
                          ),
                          {},
                          {
                            children: (0, N.jsxs)(f.Z, {
                              gap: 20,
                              align: 'center',
                              children: [
                                (0, N.jsx)(u.Z.Item, {
                                  name: 'frequencyPenaltyEnabled',
                                  valuePropName: 'checked',
                                  noStyle: !0,
                                  children: (0, N.jsx)(p.Z, { size: 'small' }),
                                }),
                                (0, N.jsx)(u.Z.Item, {
                                  noStyle: !0,
                                  dependencies: ['frequencyPenaltyEnabled'],
                                  shouldUpdate: !0,
                                  children: function (e) {
                                    var n = !(0, e.getFieldValue)(
                                      'frequencyPenaltyEnabled',
                                    );
                                    return (0, N.jsxs)(N.Fragment, {
                                      children: [
                                        (0, N.jsx)(f.Z, {
                                          flex: 1,
                                          children: (0, N.jsx)(u.Z.Item, {
                                            name: [].concat(r()(P), [
                                              'frequency_penalty',
                                            ]),
                                            noStyle: !0,
                                            children: (0, N.jsx)(h.Z, {
                                              className: _,
                                              max: 1,
                                              step: 0.01,
                                              disabled: n,
                                            }),
                                          }),
                                        }),
                                        (0, N.jsx)(u.Z.Item, {
                                          name: [].concat(r()(P), [
                                            'frequency_penalty',
                                          ]),
                                          noStyle: !0,
                                          children: (0, N.jsx)(x.Z, {
                                            className: w,
                                            max: 1,
                                            min: 0,
                                            step: 0.01,
                                            disabled: n,
                                          }),
                                        }),
                                      ],
                                    });
                                  },
                                }),
                              ],
                            }),
                          },
                        ),
                      ),
                      (0, N.jsx)(
                        u.Z.Item,
                        i()(
                          i()(
                            {
                              label: v('maxTokens'),
                              tooltip: v('maxTokensTip'),
                            },
                            a,
                          ),
                          {},
                          {
                            children: (0, N.jsxs)(f.Z, {
                              gap: 20,
                              align: 'center',
                              children: [
                                (0, N.jsx)(u.Z.Item, {
                                  name: 'maxTokensEnabled',
                                  valuePropName: 'checked',
                                  noStyle: !0,
                                  children: (0, N.jsx)(p.Z, { size: 'small' }),
                                }),
                                (0, N.jsx)(u.Z.Item, {
                                  noStyle: !0,
                                  dependencies: ['maxTokensEnabled'],
                                  shouldUpdate: !0,
                                  children: function (e) {
                                    var n = !(0, e.getFieldValue)(
                                      'maxTokensEnabled',
                                    );
                                    return (0, N.jsxs)(N.Fragment, {
                                      children: [
                                        (0, N.jsx)(f.Z, {
                                          flex: 1,
                                          children: (0, N.jsx)(u.Z.Item, {
                                            name: [].concat(r()(P), [
                                              'max_tokens',
                                            ]),
                                            noStyle: !0,
                                            children: (0, N.jsx)(h.Z, {
                                              className: _,
                                              max: 128e3,
                                              disabled: n,
                                            }),
                                          }),
                                        }),
                                        (0, N.jsx)(u.Z.Item, {
                                          name: [].concat(r()(P), [
                                            'max_tokens',
                                          ]),
                                          noStyle: !0,
                                          children: (0, N.jsx)(x.Z, {
                                            disabled: n,
                                            className: w,
                                            max: 128e3,
                                            min: 0,
                                          }),
                                        }),
                                      ],
                                    });
                                  },
                                }),
                              ],
                            }),
                          },
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    37219: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return ie;
        },
      });
      var a = t(9783),
        r = t.n(a),
        s = t(5574),
        i = t.n(s),
        l = t(88964),
        o = t(1079),
        c = t(86968),
        u = t(93967),
        d = t.n(u),
        m = t(62435),
        f = t(93352),
        p = t(46008),
        h = t(5089),
        x = t(22850),
        v = t(7134),
        g = t(86250),
        y = t(42075),
        b = t(2487),
        j = t(15867),
        Z = t(3234),
        k = t(59418),
        w = t(18334),
        _ = t(98236),
        N = t(38520),
        I = t(33623),
        C = t(30159),
        P = t(63437),
        T = t(65429),
        S = t(15381),
        L = t(98165),
        M = t(48689),
        E = t(78045),
        F = t(83062),
        q = t(67421),
        V = t(15009),
        K = t.n(V),
        A = t(99289),
        D = t.n(A),
        R = t(22150),
        G = t(85576),
        O = t(79531),
        B = t(86074),
        z = function (e) {
          var n = e.visible,
            t = e.hideModal,
            a = e.onOk,
            r = e.loading,
            s = R.Z.useForm(),
            l = i()(s, 1)[0],
            o = (0, m.useCallback)(
              D()(
                K()().mark(function e() {
                  var n;
                  return K()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), l.validateFields();
                        case 2:
                          return (
                            (n = e.sent),
                            e.abrupt(
                              'return',
                              null == a
                                ? void 0
                                : a({ thumbup: !1, feedback: n.feedback }),
                            )
                          );
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [a, l],
            );
          return (0, B.jsx)(G.Z, {
            title: 'Feedback',
            open: n,
            onOk: o,
            onCancel: t,
            confirmLoading: r,
            children: (0, B.jsx)(R.Z, {
              name: 'basic',
              labelCol: { span: 0 },
              wrapperCol: { span: 24 },
              style: { maxWidth: 600 },
              autoComplete: 'off',
              form: l,
              children: (0, B.jsx)(R.Z.Item, {
                name: 'feedback',
                rules: [
                  { required: !0, message: 'Please input your feedback!' },
                ],
                children: (0, B.jsx)(O.Z.TextArea, {
                  rows: 8,
                  placeholder: 'Please input your feedback!',
                }),
              }),
            }),
          });
        },
        U = t(97857),
        W = t.n(U),
        Q = t(91028),
        $ = t(2938),
        Y = t(31098),
        H = t(87080),
        J = t(7306),
        X = t(46693),
        ee = function (e) {
          var n = e.visible,
            t = e.hideModal,
            a = e.prompt;
          return (0, B.jsx)(G.Z, {
            title: (0, B.jsxs)(y.Z, {
              children: [
                (0, B.jsx)(X.Z, { name: 'prompt', width: 18 }),
                'Prompt',
              ],
            }),
            width: '80%',
            open: n,
            onCancel: t,
            footer: null,
            children: (0, B.jsx)(J.Z, { children: a }),
          });
        },
        ne = function (e) {
          var n = e.messageId,
            t = e.content,
            a = e.prompt,
            r = e.audioBinary,
            s = e.showLikeButton,
            l = e.showLoudspeaker,
            o = void 0 === l || l,
            u = (function (e) {
              var n = (0, c.pG)(),
                t = n.visible,
                a = n.hideModal,
                r = n.showModal,
                s = (0, Q.Zo)(),
                i = s.feedback,
                l = s.loading,
                o = (0, m.useCallback)(
                  (function () {
                    var n = D()(
                      K()().mark(function n(t) {
                        return K()().wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.next = 2),
                                  i(W()(W()({}, t), {}, { messageId: e }))
                                );
                              case 2:
                                0 === n.sent && a();
                              case 4:
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
                  [i, a, e],
                );
              return {
                loading: l,
                onFeedbackOk: o,
                visible: t,
                hideModal: a,
                showModal: r,
              };
            })(n),
            d = u.visible,
            f = u.hideModal,
            p = u.showModal,
            h = u.onFeedbackOk,
            x = u.loading,
            v = (0, c.pG)(),
            g = v.visible,
            y = v.hideModal,
            b = v.showModal,
            j = (0, q.$G)().t,
            Z = (function (e, n) {
              var t = (0, m.useRef)(null),
                a = (0, $.c5)().read,
                r = (0, m.useRef)(),
                s = (0, m.useState)(!1),
                l = i()(s, 2),
                o = l[0],
                c = l[1],
                u = (0, m.useCallback)(
                  D()(
                    K()().mark(function e() {
                      return K()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r.current = new H.i({
                                  audio: t.current,
                                  onPlaying: function () {
                                    c(!0);
                                  },
                                  onPause: function () {
                                    c(!1);
                                  },
                                  onChunkEnd: function () {},
                                  mimeType: MediaSource.isTypeSupported(
                                    'audio/mpeg',
                                  )
                                    ? 'audio/mpeg'
                                    : 'audio/mp4; codecs="mp4a.40.2"',
                                })),
                                (e.next = 3),
                                r.current.init()
                              );
                            case 3:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  ),
                  [],
                ),
                d = (0, m.useCallback)(function () {
                  var e;
                  null === (e = r.current) || void 0 === e || e.pause();
                }, []),
                f = (0, m.useCallback)(
                  D()(
                    K()().mark(function n() {
                      var t, s;
                      return K()().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.next = 2), a({ text: e });
                            case 2:
                              (t = n.sent) &&
                                (null == r ||
                                  null === (s = r.current) ||
                                  void 0 === s ||
                                  s.feedWithResponse(t));
                            case 4:
                            case 'end':
                              return n.stop();
                          }
                      }, n);
                    }),
                  ),
                  [a, e],
                ),
                p = (0, m.useCallback)(
                  D()(
                    K()().mark(function e() {
                      return K()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              o ? (c(!1), d()) : (c(!0), f());
                            case 1:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  ),
                  [c, f, o, d],
                );
              return (
                (0, m.useEffect)(
                  function () {
                    if (n) {
                      var e = (0, Y.BF)(n);
                      if (e)
                        try {
                          var t;
                          null === (t = r.current) || void 0 === t || t.feed(e);
                        } catch (e) {
                          console.warn(e);
                        }
                    }
                  },
                  [n],
                ),
                (0, m.useEffect)(
                  function () {
                    u();
                  },
                  [u],
                ),
                { ref: t, handleRead: p, isPlaying: o }
              );
            })(t, r),
            k = Z.handleRead,
            w = Z.ref,
            _ = Z.isPlaying,
            L = (0, m.useCallback)(
              function () {
                h({ thumbup: !0 });
              },
              [h],
            );
          return (0, B.jsxs)(B.Fragment, {
            children: [
              (0, B.jsxs)(E.ZP.Group, {
                size: 'small',
                children: [
                  (0, B.jsx)(E.ZP.Button, {
                    value: 'a',
                    children: (0, B.jsx)(I.Z, { text: t }),
                  }),
                  o &&
                    (0, B.jsxs)(E.ZP.Button, {
                      value: 'b',
                      onClick: k,
                      children: [
                        (0, B.jsx)(F.Z, {
                          title: j('chat.read'),
                          children: _
                            ? (0, B.jsx)(C.Z, {})
                            : (0, B.jsx)(P.Z, {}),
                        }),
                        (0, B.jsx)('audio', { src: '', ref: w }),
                      ],
                    }),
                  s &&
                    (0, B.jsxs)(B.Fragment, {
                      children: [
                        (0, B.jsx)(E.ZP.Button, {
                          value: 'c',
                          onClick: L,
                          children: (0, B.jsx)(T.Z, {}),
                        }),
                        (0, B.jsx)(E.ZP.Button, {
                          value: 'd',
                          onClick: p,
                          children: (0, B.jsx)(S.Z, {}),
                        }),
                      ],
                    }),
                  a &&
                    (0, B.jsx)(E.ZP.Button, {
                      value: 'e',
                      onClick: b,
                      children: (0, B.jsx)(N.UI, {
                        style: { fontSize: '16px' },
                      }),
                    }),
                ],
              }),
              d &&
                (0, B.jsx)(z, {
                  visible: d,
                  hideModal: f,
                  onOk: h,
                  loading: x,
                }),
              g && (0, B.jsx)(ee, { visible: g, hideModal: y, prompt: a }),
            ],
          });
        },
        te = function (e) {
          var n = e.content,
            t = e.messageId,
            a = e.sendLoading,
            r = e.removeMessageById,
            s = e.regenerateMessage,
            i = (function (e, n) {
              var t = (0, Q.RQ)(),
                a = t.deleteMessage,
                r = t.loading;
              return {
                onRemoveMessage: (0, m.useCallback)(
                  D()(
                    K()().mark(function t() {
                      return K()().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!e) {
                                t.next = 5;
                                break;
                              }
                              return (t.next = 3), a(e);
                            case 3:
                              0 === t.sent && (null == n || n(e));
                            case 5:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    }),
                  ),
                  [a, e, n],
                ),
                loading: r,
              };
            })(t, r),
            l = i.onRemoveMessage,
            o = i.loading,
            c = (0, q.$G)().t;
          return (0, B.jsxs)(E.ZP.Group, {
            size: 'small',
            children: [
              (0, B.jsx)(E.ZP.Button, {
                value: 'a',
                children: (0, B.jsx)(I.Z, { text: n }),
              }),
              s &&
                (0, B.jsx)(E.ZP.Button, {
                  value: 'b',
                  onClick: s,
                  disabled: a,
                  children: (0, B.jsx)(F.Z, {
                    title: c('chat.regenerate'),
                    children: (0, B.jsx)(L.Z, { spin: a }),
                  }),
                }),
              r &&
                (0, B.jsx)(E.ZP.Button, {
                  value: 'c',
                  onClick: l,
                  disabled: o,
                  children: (0, B.jsx)(F.Z, {
                    title: c('common.delete'),
                    children: (0, B.jsx)(M.Z, { spin: o }),
                  }),
                }),
            ],
          });
        },
        ae = {
          messageItem: 'messageItem___OK1Zd',
          messageItemSection: 'messageItemSection___a_W_M',
          messageItemSectionLeft: 'messageItemSectionLeft___nCfnq',
          messageItemContent: 'messageItemContent___j99sG',
          messageItemContentReverse: 'messageItemContentReverse___EgYgc',
          messageText: 'messageText___vuU2B',
          messageTextDark: 'messageTextDark___mYdLd',
          messageUserText: 'messageUserText___yCJ20',
          messageEmpty: 'messageEmpty___oF9mg',
          thumbnailImg: 'thumbnailImg___ObcCZ',
          messageItemLeft: 'messageItemLeft___L270A',
          messageItemRight: 'messageItemRight___icDzT',
        },
        re = x.Z.Text,
        se = function (e) {
          var n = e.item,
            t = e.reference,
            a = e.loading,
            s = void 0 !== a && a,
            u = e.avatar,
            x = e.avatarDialog,
            N = e.sendLoading,
            I = void 0 !== N && N,
            C = e.clickDocumentButton,
            P = e.index,
            T = e.removeMessageById,
            S = e.regenerateMessage,
            L = e.showLikeButton,
            M = void 0 === L || L,
            E = e.showLoudspeaker,
            F = void 0 === E || E,
            q = e.visibleAvatar,
            V = void 0 === q || q,
            K = (0, _.Fg)().theme,
            A = n.role === o.Cs.Assistant,
            D = n.role === o.Cs.User,
            R = (0, f.hf)(),
            G = R.data,
            O = R.setDocumentIds,
            z = (0, f.x2)(),
            U = z.data,
            W = z.setDocumentIds,
            Q = (0, c.pG)(),
            $ = Q.visible,
            Y = Q.hideModal,
            H = Q.showModal,
            J = (0, m.useState)(''),
            X = i()(J, 2),
            ee = X[0],
            se = X[1],
            ie = (0, m.useMemo)(
              function () {
                var e;
                return null !== (e = null == t ? void 0 : t.doc_aggs) &&
                  void 0 !== e
                  ? e
                  : [];
              },
              [null == t ? void 0 : t.doc_aggs],
            ),
            le = (0, m.useCallback)(
              function (e) {
                return function () {
                  se(e), H();
                };
              },
              [H],
            ),
            oe = (0, m.useCallback)(
              function () {
                null == S || S(n);
              },
              [S, n],
            );
          return (
            (0, m.useEffect)(
              function () {
                var e,
                  t =
                    null !== (e = null == n ? void 0 : n.doc_ids) &&
                    void 0 !== e
                      ? e
                      : [];
                if (t.length) {
                  O(t);
                  var a = t.filter(function (e) {
                    return !(e in U);
                  });
                  a.length && W(a);
                }
              },
              [n.doc_ids, O, W, U],
            ),
            (0, B.jsxs)('div', {
              className: d()(
                ae.messageItem,
                r()(
                  r()({}, ae.messageItemLeft, n.role === o.Cs.Assistant),
                  ae.messageItemRight,
                  n.role === o.Cs.User,
                ),
              ),
              children: [
                (0, B.jsx)('section', {
                  className: d()(
                    ae.messageItemSection,
                    r()(
                      r()(
                        {},
                        ae.messageItemSectionLeft,
                        n.role === o.Cs.Assistant,
                      ),
                      ae.messageItemSectionRight,
                      n.role === o.Cs.User,
                    ),
                  ),
                  children: (0, B.jsxs)('div', {
                    className: d()(
                      ae.messageItemContent,
                      r()(
                        {},
                        ae.messageItemContentReverse,
                        n.role === o.Cs.User,
                      ),
                    ),
                    children: [
                      V &&
                        (n.role === o.Cs.User
                          ? (0, B.jsx)(v.C, {
                              size: 40,
                              src: null != u ? u : '/logo.svg',
                            })
                          : x
                            ? (0, B.jsx)(v.C, { size: 40, src: x })
                            : (0, B.jsx)(l.r, {})),
                      (0, B.jsxs)(g.Z, {
                        vertical: !0,
                        gap: 8,
                        flex: 1,
                        children: [
                          (0, B.jsx)(y.Z, {
                            children: A
                              ? 0 !== P &&
                                (0, B.jsx)(ne, {
                                  messageId: n.id,
                                  content: n.content,
                                  prompt: n.prompt,
                                  showLikeButton: M,
                                  audioBinary: n.audio_binary,
                                  showLoudspeaker: F,
                                })
                              : (0, B.jsx)(te, {
                                  content: n.content,
                                  messageId: n.id,
                                  removeMessageById: T,
                                  regenerateMessage: S && oe,
                                  sendLoading: I,
                                }),
                          }),
                          (0, B.jsx)('div', {
                            className: A
                              ? 'dark' === K
                                ? ae.messageTextDark
                                : ae.messageText
                              : ae.messageUserText,
                            children: (0, B.jsx)(p.Z, {
                              loading: s,
                              content: n.content,
                              reference: t,
                              clickDocumentButton: C,
                            }),
                          }),
                          A &&
                            ie.length > 0 &&
                            (0, B.jsx)(b.Z, {
                              bordered: !0,
                              dataSource: ie,
                              renderItem: function (e) {
                                return (0, B.jsx)(b.Z.Item, {
                                  children: (0, B.jsxs)(g.Z, {
                                    gap: 'small',
                                    align: 'center',
                                    children: [
                                      (0, B.jsx)(Z.Z, {
                                        id: e.doc_id,
                                        name: e.doc_name,
                                      }),
                                      (0, B.jsx)(w.Z, {
                                        documentId: e.doc_id,
                                        documentName: e.doc_name,
                                        prefix: 'document',
                                        link: e.url,
                                        children: e.doc_name,
                                      }),
                                    ],
                                  }),
                                });
                              },
                            }),
                          D &&
                            G.length > 0 &&
                            (0, B.jsx)(b.Z, {
                              bordered: !0,
                              dataSource: G,
                              renderItem: function (e) {
                                var n = (0, h.RT)(e.name);
                                return (0, B.jsx)(b.Z.Item, {
                                  children: (0, B.jsxs)(g.Z, {
                                    gap: 'small',
                                    align: 'center',
                                    children: [
                                      (0, B.jsx)(Z.Z, {
                                        id: e.id,
                                        name: e.name,
                                      }),
                                      (0, h.Or)(n)
                                        ? (0, B.jsx)(w.Z, {
                                            documentId: e.id,
                                            documentName: e.name,
                                            prefix: 'document',
                                            children: e.name,
                                          })
                                        : (0, B.jsx)(j.ZP, {
                                            type: 'text',
                                            onClick: le(e.id),
                                            children: (0, B.jsx)(re, {
                                              style: { maxWidth: '40vw' },
                                              ellipsis: { tooltip: e.name },
                                              children: e.name,
                                            }),
                                          }),
                                    ],
                                  }),
                                });
                              },
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
                $ &&
                  (0, B.jsx)(k.Z, { visible: $, hideModal: Y, documentId: ee }),
              ],
            })
          );
        },
        ie = (0, m.memo)(se);
    },
    32739: function (e, n, t) {
      t.d(n, {
        FG: function () {
          return f;
        },
        Gs: function () {
          return u;
        },
        YC: function () {
          return m;
        },
        oD: function () {
          return c;
        },
        uo: function () {
          return d;
        },
      });
      var a = t(86968),
        r = t(22150),
        s = t(71338),
        i = t(1604),
        l = t(15309),
        o = t(86074);
      n.ZP = function (e) {
        var n = e.isTooltipShown,
          t = void 0 !== n && n,
          i = e.vectorSimilarityWeightName,
          l = void 0 === i ? 'vector_similarity_weight' : i,
          c = (0, a.qM)('knowledgeDetails').t;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(r.Z.Item, {
              label: c('similarityThreshold'),
              name: 'similarity_threshold',
              tooltip: t && c('similarityThresholdTip'),
              initialValue: 0.2,
              children: (0, o.jsx)(s.Z, { max: 1, step: 0.01 }),
            }),
            (0, o.jsx)(r.Z.Item, {
              label: c('vectorSimilarityWeight'),
              name: l,
              initialValue: 0.7,
              tooltip: t && c('vectorSimilarityWeightTip'),
              children: (0, o.jsx)(s.Z, { max: 1, step: 0.01 }),
            }),
          ],
        });
      };
      var c = { similarity_threshold: 0.2 },
        u = { keywords_similarity_weight: 0.7 },
        d = { similarity_threshold: i.z.number() },
        m = { keywords_similarity_weight: i.z.number() };
      function f(e) {
        var n = e.vectorSimilarityWeightName,
          t = void 0 === n ? 'vector_similarity_weight' : n,
          r = e.isTooltipShown,
          s = (0, a.qM)('knowledgeDetails').t;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(l.W, {
              name: 'similarity_threshold',
              label: s('similarityThreshold'),
              max: 1,
              step: 0.01,
              tooltip: r && s('similarityThresholdTip'),
            }),
            (0, o.jsx)(l.W, {
              name: t,
              label: s('vectorSimilarityWeight'),
              max: 1,
              step: 0.01,
              tooltip: r && s('vectorSimilarityWeightTip'),
            }),
          ],
        });
      }
    },
    15309: function (e, n, t) {
      t.d(n, {
        W: function () {
          return d;
        },
      });
      var a = t(97857),
        r = t.n(a),
        s = t(27080),
        i = t(87536),
        l = t(4533),
        o = t(80499),
        c = t(27591),
        u = t(86074);
      function d(e) {
        var n = e.max,
          t = e.min,
          a = e.step,
          d = e.label,
          m = e.name,
          f = e.tooltip,
          p = e.defaultValue,
          h = e.className,
          x = (0, i.Gc)();
        return (0, u.jsx)(o.Wi, {
          control: x.control,
          name: m,
          defaultValue: p || 0,
          render: function (e) {
            var i = e.field;
            return (0, u.jsxs)(o.xJ, {
              className: ' items-center space-y-0 ',
              children: [
                (0, u.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, u.jsx)(o.lX, {
                      tooltip: f,
                      className:
                        'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                      children: d,
                    }),
                    (0, u.jsxs)('div', {
                      className: (0, s.cn)(
                        'flex items-center gap-14 justify-between',
                        'w-3/4',
                        h,
                      ),
                      children: [
                        (0, u.jsx)(o.NI, {
                          children: (0, u.jsx)(
                            l.b,
                            r()(r()({}, i), {}, { max: n, min: t, step: a }),
                          ),
                        }),
                        (0, u.jsx)(o.NI, {
                          children: (0, u.jsx)(
                            c.II,
                            r()(
                              r()(
                                {
                                  type: 'number',
                                  className: 'h-7 w-20',
                                  max: n,
                                  min: t,
                                  step: a,
                                },
                                i,
                              ),
                              {},
                              {
                                onChange: function (e) {
                                  var n = e.target.value;
                                  i.onChange('' === n ? 0 : Number(n));
                                },
                              },
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, u.jsx)(o.zG, {}),
              ],
            });
          },
        });
      }
    },
    16772: function (e, n, t) {
      t.d(n, {
        I: function () {
          return o;
        },
      });
      var a = t(80499),
        r = t(2834),
        s = t(27080),
        i = t(87536),
        l = t(86074);
      function o(e) {
        var n = e.label,
          t = e.name,
          o = e.vertical,
          c = void 0 === o || o,
          u = e.tooltip,
          d = (0, i.Gc)();
        return (0, l.jsx)(a.Wi, {
          control: d.control,
          name: t,
          render: function (e) {
            var t = e.field;
            return (0, l.jsxs)(a.xJ, {
              className: (0, s.cn)('flex', {
                'gap-2': c,
                'flex-col': c,
                'justify-between': !c,
              }),
              children: [
                (0, l.jsx)(a.lX, { tooltip: u, children: n }),
                (0, l.jsx)(a.NI, {
                  children: (0, l.jsx)(r.r, {
                    checked: t.value,
                    onCheckedChange: t.onChange,
                    'aria-readonly': !0,
                    className: '!m-0',
                  }),
                }),
              ],
            });
          },
        });
      }
    },
    51535: function (e, n, t) {
      t.d(n, {
        D: function () {
          return o;
        },
      });
      var a = t(86968),
        r = t(22150),
        s = t(79531),
        i = t(22850),
        l = t(86074);
      function o(e) {
        var n = e.name,
          t = void 0 === n ? ['prompt_config', 'tavily_api_key'] : n,
          o = (0, a.qM)('chat').t;
        return (0, l.jsx)(r.Z.Item, {
          label: 'Tavily API Key',
          tooltip: o('tavilyApiKeyTip'),
          children: (0, l.jsxs)('div', {
            className: 'flex flex-col gap-1',
            children: [
              (0, l.jsx)(r.Z.Item, {
                name: t,
                noStyle: !0,
                children: (0, l.jsx)(s.Z.Password, {
                  placeholder: o('tavilyApiKeyMessage'),
                  autoComplete: 'new-password',
                }),
              }),
              (0, l.jsx)(i.Z.Link, {
                href: 'https://app.tavily.com/home',
                target: '_blank',
                children: o('tavilyApiKeyHelp'),
              }),
            ],
          }),
        });
      }
    },
    5715: function (e, n, t) {
      t.d(n, {
        F$: function () {
          return h;
        },
        Q5: function () {
          return x;
        },
        qE: function () {
          return p;
        },
      });
      var a = t(97857),
        r = t.n(a),
        s = t(13769),
        i = t.n(s),
        l = t(10952),
        o = t(62435),
        c = t(27080),
        u = t(86074),
        d = ['className'],
        m = ['className'],
        f = ['className'],
        p = o.forwardRef(function (e, n) {
          var t = e.className,
            a = i()(e, d);
          return (0, u.jsx)(
            l.fC,
            r()(
              {
                ref: n,
                className: (0, c.cn)(
                  'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
                  t,
                ),
              },
              a,
            ),
          );
        });
      p.displayName = l.fC.displayName;
      var h = o.forwardRef(function (e, n) {
        var t = e.className,
          a = i()(e, m);
        return (0, u.jsx)(
          l.Ee,
          r()(
            { ref: n, className: (0, c.cn)('aspect-square h-full w-full', t) },
            a,
          ),
        );
      });
      h.displayName = l.Ee.displayName;
      var x = o.forwardRef(function (e, n) {
        var t = e.className,
          a = i()(e, f);
        return (0, u.jsx)(
          l.NY,
          r()(
            {
              ref: n,
              className: (0, c.cn)(
                'flex h-full w-full items-center justify-center rounded-full bg-muted',
                t,
              ),
            },
            a,
          ),
        );
      });
      x.displayName = l.NY.displayName;
    },
    28993: function (e, n, t) {
      t.d(n, {
        $N: function () {
          return _;
        },
        Vq: function () {
          return g;
        },
        cN: function () {
          return w;
        },
        cZ: function () {
          return Z;
        },
        fK: function () {
          return k;
        },
        hg: function () {
          return y;
        },
      });
      var a = t(97857),
        r = t.n(a),
        s = t(13769),
        i = t.n(s),
        l = t(28828),
        o = t(41352),
        c = t(62435),
        u = t(27080),
        d = t(86074),
        m = ['className'],
        f = ['className', 'children'],
        p = ['className'],
        h = ['className'],
        x = ['className'],
        v = ['className'],
        g = l.fC,
        y = l.xz,
        b = l.h_,
        j =
          (l.x8,
          c.forwardRef(function (e, n) {
            var t = e.className,
              a = i()(e, m);
            return (0, d.jsx)(
              l.aV,
              r()(
                {
                  ref: n,
                  className: (0, u.cn)(
                    'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    t,
                  ),
                },
                a,
              ),
            );
          }));
      j.displayName = l.aV.displayName;
      var Z = c.forwardRef(function (e, n) {
        var t = e.className,
          a = e.children,
          s = i()(e, f);
        return (0, d.jsxs)(b, {
          children: [
            (0, d.jsx)(j, {}),
            (0, d.jsxs)(
              l.VY,
              r()(
                r()(
                  {
                    ref: n,
                    className: (0, u.cn)(
                      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-colors-background-neutral-standard p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                      t,
                    ),
                  },
                  s,
                ),
                {},
                {
                  children: [
                    a,
                    (0, d.jsxs)(l.x8, {
                      className:
                        'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                      children: [
                        (0, d.jsx)(o.Z, { className: 'h-4 w-4' }),
                        (0, d.jsx)('span', {
                          className: 'sr-only',
                          children: 'Close',
                        }),
                      ],
                    }),
                  ],
                },
              ),
            ),
          ],
        });
      });
      Z.displayName = l.VY.displayName;
      var k = function (e) {
        var n = e.className,
          t = i()(e, p);
        return (0, d.jsx)(
          'div',
          r()(
            {
              className: (0, u.cn)(
                'flex flex-col space-y-1.5 text-center sm:text-left',
                n,
              ),
            },
            t,
          ),
        );
      };
      k.displayName = 'DialogHeader';
      var w = function (e) {
        var n = e.className,
          t = i()(e, h);
        return (0, d.jsx)(
          'div',
          r()(
            {
              className: (0, u.cn)(
                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                n,
              ),
            },
            t,
          ),
        );
      };
      w.displayName = 'DialogFooter';
      var _ = c.forwardRef(function (e, n) {
        var t = e.className,
          a = i()(e, x);
        return (0, d.jsx)(
          l.Dx,
          r()(
            {
              ref: n,
              className: (0, u.cn)(
                'text-lg font-semibold leading-none tracking-tight',
                t,
              ),
            },
            a,
          ),
        );
      });
      (_.displayName = l.Dx.displayName),
        (c.forwardRef(function (e, n) {
          var t = e.className,
            a = i()(e, v);
          return (0, d.jsx)(
            l.dk,
            r()(
              {
                ref: n,
                className: (0, u.cn)('text-sm text-muted-foreground', t),
              },
              a,
            ),
          );
        }).displayName = l.dk.displayName);
    },
    4533: function (e, n, t) {
      t.d(n, {
        b: function () {
          return p;
        },
      });
      var a = t(97857),
        r = t.n(a),
        s = t(13769),
        i = t.n(s),
        l = t(68482),
        o = t(62435),
        c = t(27080),
        u = t(86074),
        d = ['className', 'label', 'labelPosition'],
        m = ['value', 'onChange'],
        f = o.forwardRef(function (e, n) {
          var t = e.className,
            a = e.label,
            s = e.labelPosition,
            m = void 0 === s ? 'top' : s,
            f = i()(e, d),
            p = Array.isArray(f.value) ? f.value : [f.min, f.max];
          return (0, u.jsxs)(
            l.fC,
            r()(
              r()(
                {
                  ref: n,
                  className: (0, c.cn)(
                    'relative flex w-full touch-none select-none items-center',
                    t,
                  ),
                },
                f,
              ),
              {},
              {
                children: [
                  (0, u.jsx)(l.fQ, {
                    className:
                      'relative h-2 w-full grow overflow-hidden rounded-full bg-secondary',
                    children: (0, u.jsx)(l.e6, {
                      className: 'absolute h-full bg-background-checked',
                    }),
                  }),
                  p.map(function (e, n) {
                    return (0, u.jsx)(
                      o.Fragment,
                      {
                        children: (0, u.jsx)(l.bU, {
                          className:
                            'relative block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
                          children:
                            a &&
                            (0, u.jsx)('span', {
                              className: (0, c.cn)(
                                'absolute flex w-full justify-center',
                                'top' === m && '-top-7',
                                'bottom' === m && 'top-4',
                              ),
                              children: a(e),
                            }),
                        }),
                      },
                      n,
                    );
                  }),
                ],
              },
            ),
          );
        });
      f.displayName = 'DualRangeSlider';
      var p = o.forwardRef(function (e, n) {
        var t = e.value,
          a = e.onChange,
          s = i()(e, m);
        return (0, u.jsx)(
          f,
          r()(
            {
              ref: n,
              value: [t],
              onValueChange: function (e) {
                a(e[0]);
              },
            },
            s,
          ),
        );
      });
    },
    70125: function (e, n, t) {
      t.d(n, {
        C: function () {
          return o;
        },
        H: function () {
          return c;
        },
      });
      var a = t(22150),
        r = t(72269),
        s = t(67421),
        i = t(16772),
        l = t(86074);
      function o(e) {
        var n = e.filedName,
          t = (0, s.$G)().t;
        return (0, l.jsx)(a.Z.Item, {
          label: t('chat.useKnowledgeGraph'),
          tooltip: t('chat.useKnowledgeGraphTip'),
          name: n,
          initialValue: !1,
          children: (0, l.jsx)(r.Z, {}),
        });
      }
      function c(e) {
        var n = e.name,
          t = (0, s.$G)().t;
        return (0, l.jsx)(i.I, {
          name: n,
          label: t('chat.useKnowledgeGraph'),
          tooltip: t('chat.useKnowledgeGraphTip'),
        });
      }
    },
    38392: function (e, n, t) {
      t.d(n, {
        DC: function () {
          return L;
        },
        Ju: function () {
          return q;
        },
        OR: function () {
          return E;
        },
        T: function () {
          return S;
        },
        X7: function () {
          return V;
        },
        hl: function () {
          return T;
        },
        uZ: function () {
          return F;
        },
        ux: function () {
          return M;
        },
      });
      var a = t(97857),
        r = t.n(a),
        s = t(19632),
        i = t.n(s),
        l = t(9783),
        o = t.n(l),
        c = t(5574),
        u = t.n(c),
        d = t(15009),
        m = t.n(d),
        f = t(99289),
        p = t.n(f),
        h = t(46693),
        x = t(96330),
        v = t(72668),
        g = t(31098),
        y = t(33092),
        b = t(78551),
        j = t(30202),
        Z = t(4527),
        k = t(86250),
        w = t(45360),
        _ = t(62435),
        N = t(67421),
        I = t(86074),
        C = function (e) {
          var n,
            t = (0, b.a)({
              queryKey: ['llmList'],
              initialData: {},
              queryFn:
                ((n = p()(
                  m()().mark(function n() {
                    var t, a, r;
                    return m()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2), v.ZP.llm_list({ model_type: e })
                            );
                          case 2:
                            return (
                              (a = n.sent),
                              (r = a.data),
                              n.abrupt(
                                'return',
                                null !== (t = null == r ? void 0 : r.data) &&
                                  void 0 !== t
                                  ? t
                                  : {},
                              )
                            );
                          case 5:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            });
          return t.data;
        };
      function P(e) {
        return {
          label: (0, I.jsxs)(k.Z, {
            align: 'center',
            gap: 6,
            children: [
              (0, I.jsx)(h.$, {
                name: (0, y.Os)(e.fid, e.llm_name),
                width: 26,
                height: 26,
                size: 'small',
              }),
              (0, I.jsx)('span', { children: (0, y.KE)(e.llm_name) }),
            ],
          }),
          value: ''.concat(e.llm_name, '@').concat(e.fid),
          disabled: !e.available,
          is_tools: e.is_tools,
        };
      }
      var T = function () {
          var e = C(),
            n = (0, _.useCallback)(
              function () {
                var n = x.Vr.Image2text,
                  t = n.toUpperCase();
                return Object.entries(e)
                  .map(function (e) {
                    var a = u()(e, 2);
                    return {
                      label: a[0],
                      options: a[1]
                        .filter(function (e) {
                          return (
                            (e.model_type.includes(n) ||
                              (e.tags && e.tags.includes(t))) &&
                            e.available
                          );
                        })
                        .map(P),
                    };
                  })
                  .filter(function (e) {
                    return e.options.length > 0;
                  });
              },
              [e],
            ),
            t = (0, _.useCallback)(
              function (n) {
                return Object.entries(e)
                  .filter(function (e) {
                    var t = u()(e, 2)[1];
                    return (
                      !n ||
                      t.some(function (e) {
                        return e.model_type.includes(n);
                      })
                    );
                  })
                  .map(function (e) {
                    var t = u()(e, 2);
                    return {
                      label: t[0],
                      options: t[1]
                        .filter(function (e) {
                          return (
                            (!n || e.model_type.includes(n)) && e.available
                          );
                        })
                        .map(P),
                    };
                  })
                  .filter(function (e) {
                    return e.options.length > 0;
                  });
              },
              [e],
            );
          return o()(
            o()(
              o()(
                o()(
                  o()(
                    o()({}, x.Vr.Chat, t(x.Vr.Chat)),
                    x.Vr.Embedding,
                    t(x.Vr.Embedding),
                  ),
                  x.Vr.Image2text,
                  n(),
                ),
                x.Vr.Speech2text,
                t(x.Vr.Speech2text),
              ),
              x.Vr.Rerank,
              t(x.Vr.Rerank),
            ),
            x.Vr.TTS,
            t(x.Vr.TTS),
          );
        },
        S = function (e) {
          var n = T();
          return e.reduce(function (e, t) {
            return (
              n[t].forEach(function (n) {
                var t,
                  a = e.find(function (e) {
                    return e.label === n.label;
                  });
                a ? (t = a.options).push.apply(t, i()(n.options)) : e.push(n);
              }),
              e
            );
          }, []);
        },
        L = function () {
          var e,
            n,
            t,
            a,
            s =
              ((n = (0, b.a)({
                queryKey: ['myLlmList'],
                initialData: {},
                gcTime: 0,
                queryFn:
                  ((e = p()(
                    m()().mark(function e() {
                      var n, t, a;
                      return m()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), v.ZP.my_llm();
                            case 2:
                              return (
                                (t = e.sent),
                                (a = t.data),
                                e.abrupt(
                                  'return',
                                  null !== (n = null == a ? void 0 : a.data) &&
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
              })),
              { data: n.data, loading: n.isFetching }),
            i = s.data,
            l = s.loading,
            o =
              ((a = (0, b.a)({
                queryKey: ['factoryList'],
                initialData: [],
                gcTime: 0,
                queryFn:
                  ((t = p()(
                    m()().mark(function e() {
                      var n, t, a;
                      return m()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), v.ZP.factories_list();
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
                    return t.apply(this, arguments);
                  }),
              })),
              { data: a.data, loading: a.isFetching }),
            c = o.data,
            d = o.loading;
          return {
            myLlmList: (0, _.useMemo)(
              function () {
                return Object.entries(i).map(function (e) {
                  var n,
                    t,
                    a = u()(e, 2),
                    s = a[0],
                    i = a[1];
                  return r()(
                    r()(
                      {
                        name: s,
                        logo:
                          null !==
                            (n =
                              null ===
                                (t = c.find(function (e) {
                                  return e.name === s;
                                })) || void 0 === t
                                ? void 0
                                : t.logo) && void 0 !== n
                            ? n
                            : '',
                      },
                      i,
                    ),
                    {},
                    {
                      llm: i.llm.map(function (e) {
                        return r()(r()({}, e), {}, { name: e.name });
                      }),
                    },
                  );
                });
              },
              [i, c],
            ),
            factoryList: (0, _.useMemo)(
              function () {
                var e = c.filter(function (e) {
                  return Object.keys(i).every(function (n) {
                    return n !== e.name;
                  });
                });
                return (0, g.tJ)(e);
              },
              [c, i],
            ),
            loading: l || d,
          };
        },
        M = function () {
          var e,
            n = (0, j.NL)(),
            t = (0, N.$G)().t,
            a = (0, Z.D)({
              mutationKey: ['saveApiKey'],
              mutationFn:
                ((e = p()(
                  m()().mark(function e(a) {
                    var r, s;
                    return m()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), v.ZP.set_api_key(a);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (s = r.data).code &&
                                (w.ZP.success(t('message.modified')),
                                n.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                n.invalidateQueries({
                                  queryKey: ['factoryList'],
                                })),
                              e.abrupt('return', s.code)
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
            data: a.data,
            loading: a.isPending,
            saveApiKey: a.mutateAsync,
          };
        },
        E = function () {
          var e,
            n = (0, N.$G)().t,
            t = (0, Z.D)({
              mutationKey: ['saveTenantInfo'],
              mutationFn:
                ((e = p()(
                  m()().mark(function e(t) {
                    var a, r;
                    return m()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), v.ZP.set_tenant_info(t);
                          case 2:
                            return (
                              (a = e.sent),
                              0 === (r = a.data).code &&
                                w.ZP.success(n('message.modified')),
                              e.abrupt('return', r.code)
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
            saveTenantInfo: t.mutateAsync,
          };
        },
        F = function () {
          var e,
            n = (0, j.NL)(),
            t = (0, N.$G)().t,
            a = (0, Z.D)({
              mutationKey: ['addLlm'],
              mutationFn:
                ((e = p()(
                  m()().mark(function e(a) {
                    var r, s;
                    return m()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), v.ZP.add_llm(a);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (s = r.data).code &&
                                (n.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                n.invalidateQueries({
                                  queryKey: ['factoryList'],
                                }),
                                w.ZP.success(t('message.modified'))),
                              e.abrupt('return', s.code)
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
          return { data: a.data, loading: a.isPending, addLlm: a.mutateAsync };
        },
        q = function () {
          var e,
            n = (0, j.NL)(),
            t = (0, N.$G)().t,
            a = (0, Z.D)({
              mutationKey: ['deleteLlm'],
              mutationFn:
                ((e = p()(
                  m()().mark(function e(a) {
                    var r, s;
                    return m()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), v.ZP.delete_llm(a);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (s = r.data).code &&
                                (n.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                n.invalidateQueries({
                                  queryKey: ['factoryList'],
                                }),
                                w.ZP.success(t('message.deleted'))),
                              e.abrupt('return', s.code)
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
            data: a.data,
            loading: a.isPending,
            deleteLlm: a.mutateAsync,
          };
        },
        V = function () {
          var e,
            n = (0, j.NL)(),
            t = (0, N.$G)().t,
            a = (0, Z.D)({
              mutationKey: ['deleteFactory'],
              mutationFn:
                ((e = p()(
                  m()().mark(function e(a) {
                    var r, s;
                    return m()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), v.ZP.deleteFactory(a);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (s = r.data).code &&
                                (n.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                n.invalidateQueries({
                                  queryKey: ['factoryList'],
                                }),
                                w.ZP.success(t('message.deleted'))),
                              e.abrupt('return', s.code)
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
            data: a.data,
            loading: a.isPending,
            deleteFactory: a.mutateAsync,
          };
        };
    },
    33092: function (e, n, t) {
      t.d(n, {
        KE: function () {
          return l;
        },
        Os: function () {
          return s;
        },
        Xy: function () {
          return i;
        },
      });
      var a = t(5574),
        r = t.n(a),
        s = function (e, n) {
          var t;
          return 'FastEmbed' === e
            ? null !== (t = n.split('/').at(0)) && void 0 !== t
              ? t
              : ''
            : e;
        },
        i = function (e) {
          var n = (null == e ? void 0 : e.split('@')) || [],
            t = r()(n, 2),
            a = t[0];
          return { fId: t[1], llmName: a };
        };
      function l(e) {
        var n;
        return null !== (n = e.split('__').at(0)) && void 0 !== n ? n : '';
      }
    },
  },
]);
//# sourceMappingURL=4599.03ea14b1.async.js.map
