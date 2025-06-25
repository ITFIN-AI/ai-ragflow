'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [8301],
  {
    27012: function (e, n, t) {
      t.d(n, {
        X: function () {
          return s;
        },
      });
      var i = t(22150),
        a = t(34041),
        r = t(67421),
        l = t(86074),
        o = [
          'English',
          'Chinese',
          'Spanish',
          'French',
          'German',
          'Japanese',
          'Korean',
        ].map(function (e) {
          return { label: e, value: e };
        }),
        s = function (e) {
          var n = e.name,
            t = void 0 === n ? ['prompt_config', 'cross_languages'] : n,
            s = (0, r.$G)().t;
          return (0, l.jsx)(i.Z.Item, {
            label: s('chat.crossLanguage'),
            name: t,
            tooltip: s('chat.crossLanguageTip'),
            children: (0, l.jsx)(a.Z, {
              options: o,
              allowClear: !0,
              placeholder: s('common.languagePlaceholder'),
              mode: 'multiple',
            }),
          });
        };
    },
    89545: function (e, n, t) {
      var i = t(15009),
        a = t.n(i),
        r = t(99289),
        l = t.n(r),
        o = t(5574),
        s = t.n(o),
        c = t(86968),
        d = t(22150),
        u = t(85576),
        m = t(79531),
        p = t(62435),
        h = t(86074);
      n.Z = function (e) {
        var n = e.visible,
          t = e.hideModal,
          i = e.loading,
          r = e.initialName,
          o = e.onOk,
          f = d.Z.useForm(),
          v = s()(f, 1)[0],
          x = (0, c.qM)('common').t,
          g = (function () {
            var e = l()(
              a()().mark(function e() {
                var n;
                return a()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), v.validateFields();
                      case 2:
                        return (n = e.sent), e.abrupt('return', o(n.name));
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (
          (0, p.useEffect)(
            function () {
              n && v.setFieldValue('name', r);
            },
            [r, v, n],
          ),
          (0, h.jsx)(u.Z, {
            title: x('rename'),
            open: n,
            onOk: g,
            onCancel: function () {
              t();
            },
            okButtonProps: { loading: i },
            confirmLoading: i,
            children: (0, h.jsx)(d.Z, {
              name: 'basic',
              labelCol: { span: 4 },
              wrapperCol: { span: 20 },
              style: { maxWidth: 600 },
              onFinish: function (e) {
                console.log('Success:', e);
              },
              onFinishFailed: function (e) {
                console.log('Failed:', e);
              },
              autoComplete: 'off',
              form: v,
              children: (0, h.jsx)(d.Z.Item, {
                label: x('name'),
                name: 'name',
                rules: [{ required: !0, message: x('namePlaceholder') }],
                children: (0, h.jsx)(m.Z, {}),
              }),
            }),
          })
        );
      };
    },
    77778: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return En;
          },
        });
      var i = t(9783),
        a = t.n(i),
        r = t(5574),
        l = t.n(r),
        o = t(62435),
        s = Object.defineProperty,
        c = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        m = (e, n, t) =>
          n in e
            ? s(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[n] = t);
      const p = (e) =>
        o.createElement(
          'svg',
          ((e, n) => {
            for (var t in n || (n = {})) d.call(n, t) && m(e, t, n[t]);
            if (c) for (var t of c(n)) u.call(n, t) && m(e, t, n[t]);
            return e;
          })(
            {
              width: 15,
              height: 14,
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            e,
          ),
          o.createElement('path', {
            d: 'm6.188 12.104.859.478c.165.092.248.138.335.156a.581.581 0 0 0 .236 0c.087-.018.17-.064.335-.156l.86-.478m-5.25-1.458-.833-.462c-.175-.097-.262-.146-.326-.215a.583.583 0 0 1-.125-.212c-.029-.09-.029-.19-.029-.39V8.46m0-2.917v-.91c0-.199 0-.299.03-.388a.583.583 0 0 1 .124-.212c.064-.07.151-.118.326-.215l.833-.463m2.624-1.458.86-.477c.165-.092.248-.138.335-.156a.583.583 0 0 1 .236 0c.087.018.17.064.335.156l.86.477m2.624 1.458.833.463c.175.097.262.146.326.215a.584.584 0 0 1 .125.212c.029.089.029.189.029.389v.909m0 2.917v.909c0 .2 0 .3-.03.389a.584.584 0 0 1-.124.212c-.064.07-.151.118-.326.215l-.832.462m-5.25-4.375 1.312.73m0 0 1.313-.73m-1.313.73v1.458M2.25 4.084l1.313.729m7.874 0 1.313-.73M7.5 11.376v1.459',
            stroke: '#A5A3A9',
            strokeWidth: 1.5,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        );
      var h = t(89545),
        f = t(86548),
        v = t(48689),
        x = t(22850),
        g = t(42075),
        j = t(86250),
        b = t(15867),
        _ = t(96074),
        Z = t(75081),
        y = t(4393),
        k = t(7134),
        C = t(85418),
        w = t(66309),
        E = t(83062),
        I = t(93967),
        M = t.n(I),
        P = t(15009),
        S = t.n(P),
        N = t(97857),
        A = t.n(N),
        D = t(99289),
        O = t.n(D),
        F = Object.defineProperty,
        T = Object.getOwnPropertySymbols,
        L = Object.prototype.hasOwnProperty,
        R = Object.prototype.propertyIsEnumerable,
        V = (e, n, t) =>
          n in e
            ? F(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[n] = t);
      const q = (e) =>
        o.createElement(
          'svg',
          ((e, n) => {
            for (var t in n || (n = {})) L.call(n, t) && V(e, t, n[t]);
            if (T) for (var t of T(n)) R.call(n, t) && V(e, t, n[t]);
            return e;
          })(
            {
              width: 52,
              height: 52,
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            e,
          ),
          o.createElement(
            'g',
            { filter: 'url(#chat-configuration-atom_svg__a)' },
            o.createElement('path', {
              d: 'M2.5 11A9.5 9.5 0 0 1 12 1.5h28a9.5 9.5 0 0 1 9.5 9.5v28a9.5 9.5 0 0 1-9.5 9.5H12A9.5 9.5 0 0 1 2.5 39V11Z',
              stroke: '#EAECF0',
              shapeRendering: 'crispEdges',
            }),
            o.createElement('path', {
              d: 'M26 25h.01m3.525 3.535c-4.686 4.686-10.068 6.903-12.02 4.95-1.953-1.953.263-7.335 4.949-12.02 4.686-4.687 10.068-6.903 12.02-4.95 1.953 1.952-.263 7.334-4.949 12.02Zm0-7.071c4.686 4.686 6.902 10.068 4.95 12.02-1.953 1.953-7.335-.263-12.021-4.949-4.686-4.686-6.902-10.068-4.95-12.02 1.953-1.953 7.335.263 12.021 4.949ZM26.5 25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
              stroke: '#344054',
              strokeWidth: 2,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }),
          ),
          o.createElement(
            'defs',
            null,
            o.createElement(
              'filter',
              {
                id: 'chat-configuration-atom_svg__a',
                x: 0,
                y: 0,
                width: 52,
                height: 52,
                filterUnits: 'userSpaceOnUse',
                colorInterpolationFilters: 'sRGB',
              },
              o.createElement('feFlood', {
                floodOpacity: 0,
                result: 'BackgroundImageFix',
              }),
              o.createElement('feColorMatrix', {
                in: 'SourceAlpha',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                result: 'hardAlpha',
              }),
              o.createElement('feOffset', { dy: 1 }),
              o.createElement('feGaussianBlur', { stdDeviation: 1 }),
              o.createElement('feComposite', {
                in2: 'hardAlpha',
                operator: 'out',
              }),
              o.createElement('feColorMatrix', {
                values:
                  '0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0',
              }),
              o.createElement('feBlend', {
                in2: 'BackgroundImageFix',
                result: 'effect1_dropShadow_550_8026',
              }),
              o.createElement('feBlend', {
                in: 'SourceGraphic',
                in2: 'effect1_dropShadow_550_8026',
                result: 'shape',
              }),
            ),
          ),
        );
      var B = t(96330),
        U = t(86968),
        W = t(2938),
        H = t(51331),
        $ = t(51418),
        z = t(22150),
        X = t(85576),
        G = t(92783),
        K = t(68929),
        Y = t.n(K),
        J = t(91929),
        Q = t(51535),
        ee = t(39259),
        ne = t(24969),
        te = t(45360),
        ie = t(79531),
        ae = t(31365),
        re = t(34041),
        le = t(72269),
        oe = 'chatConfigurationDescription___Marto',
        se = 'variableContainer___Y8OCn',
        ce = 'variableAlign___V0wtR',
        de = 'variableLabel___lux8o',
        ue = 'variableIcon___aAfD2',
        me = 'variableTable___q3ddB',
        pe = 'editableRow____LyFZ',
        he = 'segmentedHidden___jWNN7',
        fe = t(86074),
        ve = ['prompt_config', 'empty_response'],
        xe = function (e) {
          var n = e.show,
            t = e.form,
            i = e.setHasError,
            r = (0, U.qM)('chat').t,
            l = (0, ee.fS)(!0).data,
            s = (0, o.useCallback)(
              function () {
                var e = t.getFieldValue('kb_ids'),
                  n =
                    t.getFieldValue(ve) &&
                    ((Array.isArray(e) && 0 === e.length) || !e);
                i(n),
                  t.setFields([
                    { name: ve, errors: n ? [r('emptyResponseMessage')] : [] },
                  ]);
              },
              [t, i, r],
            ),
            c = (0, o.useCallback)(
              function (e) {
                e &&
                  !l.tts_id &&
                  (te.ZP.error(
                    'Please set TTS model firstly. \n        Setting >> Model providers >> System model settings',
                  ),
                  t.setFieldValue(['prompt_config', 'tts'], !1));
              },
              [l, t],
            ),
            d = (0, fe.jsxs)('button', {
              style: { border: 0, background: 'none' },
              type: 'button',
              children: [
                (0, fe.jsx)(ne.Z, {}),
                (0, fe.jsx)('div', {
                  style: { marginTop: 8 },
                  children: r('upload', { keyPrefix: 'common' }),
                }),
              ],
            });
          return (0, fe.jsxs)('section', {
            className: M()(a()({}, he, !n)),
            children: [
              (0, fe.jsx)(z.Z.Item, {
                name: 'name',
                label: r('assistantName'),
                rules: [{ required: !0, message: r('assistantNameMessage') }],
                children: (0, fe.jsx)(ie.Z, {
                  placeholder: r('namePlaceholder'),
                }),
              }),
              (0, fe.jsx)(z.Z.Item, {
                name: 'description',
                label: r('description'),
                children: (0, fe.jsx)(ie.Z, {
                  placeholder: r('descriptionPlaceholder'),
                }),
              }),
              (0, fe.jsx)(z.Z.Item, {
                name: 'icon',
                label: r('assistantAvatar'),
                valuePropName: 'fileList',
                getValueFromEvent: function (e) {
                  return Array.isArray(e) ? e : null == e ? void 0 : e.fileList;
                },
                children: (0, fe.jsx)(ae.Z, {
                  listType: 'picture-card',
                  maxCount: 1,
                  beforeUpload: function () {
                    return !1;
                  },
                  showUploadList: { showPreviewIcon: !1, showRemoveIcon: !1 },
                  children: n ? d : null,
                }),
              }),
              (0, fe.jsx)(z.Z.Item, {
                name: 'language',
                label: r('language'),
                initialValue: 'English',
                tooltip: 'coming soon',
                style: { display: 'none' },
                children: (0, fe.jsx)(re.Z, {
                  options: [
                    {
                      value: 'Chinese',
                      label: r('chinese', { keyPrefix: 'common' }),
                    },
                    {
                      value: 'English',
                      label: r('english', { keyPrefix: 'common' }),
                    },
                  ],
                }),
              }),
              (0, fe.jsx)(z.Z.Item, {
                name: ve,
                label: r('emptyResponse'),
                tooltip: r('emptyResponseTip'),
                children: (0, fe.jsx)(ie.Z, { placeholder: '', onChange: s }),
              }),
              (0, fe.jsx)(z.Z.Item, {
                name: ['prompt_config', 'prologue'],
                label: r('setAnOpener'),
                tooltip: r('setAnOpenerTip'),
                initialValue: r('setAnOpenerInitial'),
                children: (0, fe.jsx)(ie.Z.TextArea, {
                  autoSize: { minRows: 5 },
                }),
              }),
              (0, fe.jsx)(z.Z.Item, {
                label: r('quote'),
                valuePropName: 'checked',
                name: ['prompt_config', 'quote'],
                tooltip: r('quoteTip'),
                initialValue: !0,
                children: (0, fe.jsx)(le.Z, {}),
              }),
              (0, fe.jsx)(z.Z.Item, {
                label: r('keyword'),
                valuePropName: 'checked',
                name: ['prompt_config', 'keyword'],
                tooltip: r('keywordTip'),
                initialValue: !1,
                children: (0, fe.jsx)(le.Z, {}),
              }),
              (0, fe.jsx)(z.Z.Item, {
                label: r('tts'),
                valuePropName: 'checked',
                name: ['prompt_config', 'tts'],
                tooltip: r('ttsTip'),
                initialValue: !1,
                children: (0, fe.jsx)(le.Z, { onChange: c }),
              }),
              (0, fe.jsx)(Q.D, {}),
              (0, fe.jsx)(J.Z, { required: !1, onChange: s }),
            ],
          });
        },
        ge = t(58057),
        je = t(1079),
        be = t(71250),
        _e = function (e) {
          var n = e.show,
            t = e.form,
            i = e.initialLlmSetting,
            r = e.visible;
          return (
            (0, o.useEffect)(
              function () {
                if (r) {
                  var e = Object.keys(je.vv).reduce(function (e, n) {
                    return (
                      (e[n] = void 0 === i ? (0, be.mV)(n) : !!i[je.vv[n]]), e
                    );
                  }, {});
                  t.setFieldsValue(e);
                }
              },
              [t, i, r],
            ),
            (0, fe.jsx)('section', {
              className: M()(a()({}, he, !n)),
              children: r && (0, fe.jsx)(ge.Z, { prefix: 'llm_setting' }),
            })
          );
        },
        Ze = t(19632),
        ye = t.n(Ze),
        ke = t(32739),
        Ce = t(25035),
        we = t(71230),
        Ee = t(15746),
        Ie = t(43106),
        Me = t(57632),
        Pe = t(13769),
        Se = t.n(Pe),
        Ne = ['index'],
        Ae = [
          'title',
          'editable',
          'children',
          'dataIndex',
          'record',
          'handleSave',
        ],
        De = o.createContext(null),
        Oe = function (e) {
          e.index;
          var n = Se()(e, Ne),
            t = z.Z.useForm(),
            i = l()(t, 1)[0];
          return (0, fe.jsx)(z.Z, {
            form: i,
            component: !1,
            children: (0, fe.jsx)(De.Provider, {
              value: i,
              children: (0, fe.jsx)('tr', A()({}, n)),
            }),
          });
        },
        Fe = function (e) {
          var n = e.title,
            t = e.editable,
            i = e.children,
            r = e.dataIndex,
            s = e.record,
            c = e.handleSave,
            d = Se()(e, Ae),
            u = (0, o.useState)(!1),
            m = l()(u, 2),
            p = m[0],
            h = m[1],
            f = (0, o.useRef)(null),
            v = (0, o.useContext)(De);
          (0, o.useEffect)(
            function () {
              p && f.current.focus();
            },
            [p],
          );
          var x = function () {
              h(!p), v.setFieldsValue(a()({}, r, s[r]));
            },
            g = (function () {
              var e = O()(
                S()().mark(function e() {
                  var n;
                  return S()().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), v.validateFields()
                            );
                          case 3:
                            (n = e.sent),
                              x(),
                              c(A()(A()({}, s), n)),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.log('Save failed:', e.t0);
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
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            j = i;
          return (
            t &&
              (j = p
                ? (0, fe.jsx)(z.Z.Item, {
                    style: { margin: 0 },
                    name: r,
                    rules: [
                      { required: !0, message: ''.concat(n, ' is required.') },
                    ],
                    children: (0, fe.jsx)(ie.Z, {
                      ref: f,
                      onPressEnter: g,
                      onBlur: g,
                    }),
                  })
                : (0, fe.jsx)('div', {
                    className: 'editable-cell-value-wrap',
                    style: { paddingRight: 24 },
                    onClick: x,
                    children: i,
                  })),
            (0, fe.jsx)('td', A()(A()({}, d), {}, { children: j }))
          );
        },
        Te = t(27012),
        Le = t(77567),
        Re = t(84676),
        Ve = t(70125),
        qe = t(41923),
        Be = function (e, n) {
          var t = e.show,
            i = (0, o.useState)([]),
            r = l()(i, 2),
            s = r[0],
            c = r[1],
            d = (0, qe.GI)(),
            u = (0, U.qM)('chat').t,
            m = { body: { row: Oe, cell: Fe } },
            p = function (e) {
              var n = ye()(s),
                t = n.findIndex(function (n) {
                  return e.key === n.key;
                }),
                i = n[t];
              n.splice(t, 1, A()(A()({}, i), e)), c(n);
            },
            h = function (e) {
              return function (n) {
                var t = ye()(s),
                  i = t.findIndex(function (n) {
                    return e.key === n.key;
                  }),
                  a = t[i];
                t.splice(i, 1, A()(A()({}, a), {}, { optional: n })), c(t);
              };
            };
          (0, o.useImperativeHandle)(
            n,
            function () {
              return s
                .filter(function (e) {
                  return '' !== e.variable.trim();
                })
                .map(function (e) {
                  return { key: e.variable, optional: e.optional };
                });
            },
            [s],
          );
          var f = [
            {
              title: u('key'),
              dataIndex: 'variable',
              key: 'variable',
              onCell: function (e) {
                return {
                  record: e,
                  editable: !0,
                  dataIndex: 'variable',
                  title: 'key',
                  handleSave: p,
                };
              },
            },
            {
              title: u('optional'),
              dataIndex: 'optional',
              key: 'optional',
              width: 40,
              align: 'center',
              render: function (e, n) {
                return (0, fe.jsx)(le.Z, {
                  size: 'small',
                  checked: e,
                  onChange: h(n),
                });
              },
            },
            {
              title: u('operation'),
              dataIndex: 'operation',
              width: 30,
              key: 'operation',
              align: 'center',
              render: function (e, n) {
                return (0, fe.jsx)(v.Z, {
                  onClick:
                    ((t = n.key),
                    function () {
                      var e = s.filter(function (e) {
                        return e.key !== t;
                      });
                      c(e);
                    }),
                });
                var t;
              },
            },
          ];
          return (
            (0, o.useEffect)(
              function () {
                c(d);
              },
              [d],
            ),
            (0, fe.jsxs)('section', {
              className: M()(a()({}, he, !t)),
              children: [
                (0, fe.jsx)(z.Z.Item, {
                  label: u('system'),
                  rules: [{ required: !0, message: u('systemMessage') }],
                  tooltip: u('systemTip'),
                  name: ['prompt_config', 'system'],
                  initialValue: u('systemInitialValue'),
                  children: (0, fe.jsx)(ie.Z.TextArea, {
                    autoSize: { maxRows: 8, minRows: 5 },
                  }),
                }),
                (0, fe.jsx)(_.Z, {}),
                (0, fe.jsx)(ke.ZP, { isTooltipShown: !0 }),
                (0, fe.jsx)(Re.Z, {}),
                (0, fe.jsx)(z.Z.Item, {
                  label: u('multiTurn'),
                  tooltip: u('multiTurnTip'),
                  name: ['prompt_config', 'refine_multiturn'],
                  initialValue: !1,
                  children: (0, fe.jsx)(le.Z, {}),
                }),
                (0, fe.jsx)(Ve.C, { filedName: ['prompt_config', 'use_kg'] }),
                (0, fe.jsx)(z.Z.Item, {
                  label: u('reasoning'),
                  tooltip: u('reasoningTip'),
                  name: ['prompt_config', 'reasoning'],
                  initialValue: !1,
                  children: (0, fe.jsx)(le.Z, {}),
                }),
                (0, fe.jsx)(Le.ZP, {}),
                (0, fe.jsx)(Te.X, {}),
                (0, fe.jsxs)('section', {
                  className: M()(se),
                  children: [
                    (0, fe.jsxs)(we.Z, {
                      align: 'middle',
                      justify: 'end',
                      children: [
                        (0, fe.jsx)(Ee.Z, {
                          span: 9,
                          className: ce,
                          children: (0, fe.jsxs)('label', {
                            className: de,
                            children: [
                              u('variable'),
                              (0, fe.jsx)(E.Z, {
                                title: u('variableTip'),
                                children: (0, fe.jsx)(Ce.Z, { className: ue }),
                              }),
                            ],
                          }),
                        }),
                        (0, fe.jsx)(Ee.Z, {
                          span: 15,
                          className: ce,
                          children: (0, fe.jsx)(b.ZP, {
                            size: 'small',
                            onClick: function () {
                              c(function (e) {
                                return [].concat(ye()(e), [
                                  {
                                    key: (0, Me.Z)(),
                                    variable: '',
                                    optional: !0,
                                  },
                                ]);
                              });
                            },
                            children: u('add'),
                          }),
                        }),
                      ],
                    }),
                    s.length > 0 &&
                      (0, fe.jsxs)(we.Z, {
                        children: [
                          (0, fe.jsx)(Ee.Z, { span: 7, children: ' ' }),
                          (0, fe.jsx)(Ee.Z, {
                            span: 17,
                            children: (0, fe.jsx)(Ie.Z, {
                              dataSource: s,
                              columns: f,
                              rowKey: 'key',
                              className: me,
                              components: m,
                              rowClassName: function () {
                                return pe;
                              },
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            })
          );
        },
        Ue = (0, o.forwardRef)(Be),
        We = { labelCol: { span: 9 }, wrapperCol: { span: 15 } },
        He = {
          required: '${label} is required!',
          types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
          },
          number: { range: '${label} must be between ${min} and ${max}' },
        },
        $e = (function (e) {
          return (
            (e.AssistantSetting = 'Assistant Setting'),
            (e.PromptEngine = 'Prompt Engine'),
            (e.ModelSetting = 'Model Setting'),
            e
          );
        })($e || {}),
        ze = a()(
          a()(a()({}, $e.AssistantSetting, xe), $e.ModelSetting, _e),
          $e.PromptEngine,
          Ue,
        ),
        Xe = function (e) {
          var n = e.visible,
            t = e.hideModal,
            i = e.initialDialog,
            a = e.loading,
            r = e.onOk,
            s = e.clearDialog,
            c = z.Z.useForm(),
            d = l()(c, 1)[0],
            u = (0, o.useState)(!1),
            m = l()(u, 2),
            p = m[0],
            h = m[1],
            f = (0, o.useState)($e.AssistantSetting),
            v = l()(f, 2),
            x = v[0],
            g = v[1],
            b = (0, o.useRef)([]),
            Z = (0, W.ox)(),
            y = (0, U.qM)('chat').t,
            k = (function () {
              var e = O()(
                S()().mark(function e() {
                  var n, t, a, l, o, s, c;
                  return S()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), d.validateFields();
                        case 2:
                          if (((a = e.sent), !p)) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt('return');
                        case 5:
                          return (
                            (l = (0, $.R5)(a, 'llm_setting.')),
                            (o =
                              null !==
                                (n =
                                  null === (t = l.prompt_config) || void 0 === t
                                    ? void 0
                                    : t.empty_response) && void 0 !== n
                                ? n
                                : ''),
                            (e.next = 9),
                            (0, H.vn)(a.icon)
                          );
                        case 9:
                          (s = e.sent),
                            (c = A()(
                              A()({ dialog_id: i.id }, l),
                              {},
                              {
                                vector_similarity_weight:
                                  1 - l.vector_similarity_weight,
                                prompt_config: A()(
                                  A()({}, l.prompt_config),
                                  {},
                                  { parameters: b.current, empty_response: o },
                                ),
                                icon: s,
                              },
                            )),
                            r(c);
                        case 12:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            C = (0, fe.jsxs)(j.Z, {
              gap: 16,
              children: [
                (0, fe.jsx)(q, {}),
                (0, fe.jsxs)('div', {
                  children: [
                    (0, fe.jsx)('b', { children: y('chatConfiguration') }),
                    (0, fe.jsx)('div', {
                      className: oe,
                      children: y('chatConfigurationDescription'),
                    }),
                  ],
                }),
              ],
            });
          (0, o.useEffect)(
            function () {
              if (n) {
                var e,
                  t,
                  a,
                  r = i.icon,
                  l = [];
                r &&
                  (l = [
                    { uid: '1', name: 'file', thumbUrl: r, status: 'done' },
                  ]),
                  d.setFieldsValue(
                    A()(
                      A()({}, i),
                      {},
                      {
                        llm_setting:
                          null !== (e = i.llm_setting) && void 0 !== e
                            ? e
                            : B.S8[B.oQ.Precise],
                        icon: l,
                        llm_id: null !== (t = i.llm_id) && void 0 !== t ? t : Z,
                        vector_similarity_weight:
                          1 -
                          (null !== (a = i.vector_similarity_weight) &&
                          void 0 !== a
                            ? a
                            : 0.3),
                      },
                    ),
                  );
              }
            },
            [i, d, n, Z],
          );
          return (0, fe.jsxs)(X.Z, {
            title: C,
            width: 688,
            open: n,
            onOk: k,
            onCancel: t,
            confirmLoading: a,
            destroyOnClose: !0,
            afterClose: function () {
              s(), d.resetFields();
            },
            children: [
              (0, fe.jsx)(G.Z, {
                size: 'large',
                value: x,
                onChange: function (e) {
                  g(e);
                },
                options: Object.values($e).map(function (e) {
                  return { label: y(Y()(e)), value: e };
                }),
                block: !0,
              }),
              (0, fe.jsx)(_.Z, {}),
              (0, fe.jsx)(
                z.Z,
                A()(
                  A()({}, We),
                  {},
                  {
                    name: 'nest-messages',
                    form: d,
                    style: { maxWidth: 600 },
                    validateMessages: He,
                    colon: !1,
                    onKeyDown: function (e) {
                      e.target instanceof HTMLTextAreaElement ||
                        'Enter' !== e.key ||
                        e.shiftKey ||
                        (e.preventDefault(), k());
                    },
                    children: Object.entries(ze).map(function (e) {
                      var t = l()(e, 2),
                        a = t[0],
                        r = t[1];
                      return (0, fe.jsx)(
                        r,
                        A()(
                          A()(
                            { show: a === x, form: d, setHasError: h },
                            a === $e.ModelSetting
                              ? { initialLlmSetting: i.llm_setting, visible: n }
                              : {},
                          ),
                          a === $e.PromptEngine ? { ref: b } : {},
                        ),
                        a,
                      );
                    }),
                  },
                ),
              ),
            ],
          });
        },
        Ge = t(37219),
        Ke = t(35293),
        Ye = t(3012),
        Je = t(61110),
        Qe = t(71580),
        en = t(91028),
        nn = 'chatContainer___KnZy3',
        tn = 'messageContainer___HpbDk',
        an = function (e) {
          var n = e.controller,
            t = (0, en.g6)().conversationId,
            i = (0, en.WP)().data,
            a = (0, en.cE)().data,
            r = (0, qe.s3)(n),
            l = r.value,
            o = r.ref,
            s = r.loading,
            c = r.sendLoading,
            d = r.derivedMessages,
            u = r.handleInputChange,
            m = r.handlePressEnter,
            p = r.regenerateMessage,
            h = r.removeMessageById,
            f = r.stopOutputMessage,
            v = (0, Qe.B)(),
            x = v.visible,
            g = v.hideModal,
            b = v.documentId,
            _ = v.selectedChunk,
            y = v.clickDocumentButton,
            k = (0, qe.lT)(),
            C = (0, qe.q3)(l);
          (0, qe.G8)();
          var w = (0, ee.jd)().data,
            E = (0, qe.sk)().createConversationBeforeUploadDocument;
          return (0, fe.jsxs)(fe.Fragment, {
            children: [
              (0, fe.jsxs)(j.Z, {
                flex: 1,
                className: nn,
                vertical: !0,
                children: [
                  (0, fe.jsxs)(j.Z, {
                    flex: 1,
                    vertical: !0,
                    className: tn,
                    children: [
                      (0, fe.jsx)('div', {
                        children: (0, fe.jsx)(Z.Z, {
                          spinning: s,
                          children:
                            null == d
                              ? void 0
                              : d.map(function (e, n) {
                                  return (0, fe.jsx)(
                                    Ge.Z,
                                    {
                                      loading:
                                        e.role === je.Cs.Assistant &&
                                        c &&
                                        d.length - 1 === n,
                                      item: e,
                                      nickname: w.nickname,
                                      avatar: w.avatar,
                                      avatarDialog: a.icon,
                                      reference: (0, Ke.oI)(
                                        { message: d, reference: i.reference },
                                        e,
                                      ),
                                      clickDocumentButton: y,
                                      index: n,
                                      removeMessageById: h,
                                      regenerateMessage: p,
                                      sendLoading: c,
                                    },
                                    (0, be.mN)(e),
                                  );
                                }),
                        }),
                      }),
                      (0, fe.jsx)('div', { ref: o }),
                    ],
                  }),
                  (0, fe.jsx)(Ye.Z, {
                    disabled: k,
                    sendDisabled: C,
                    sendLoading: c,
                    value: l,
                    onInputChange: u,
                    onPressEnter: m,
                    conversationId: t,
                    createConversationBeforeUploadDocument: E,
                    stopOutputMessage: f,
                  }),
                ],
              }),
              (0, fe.jsx)(Je.Z, {
                visible: x,
                hideModal: g,
                documentId: b,
                chunk: _,
              }),
            ],
          });
        },
        rn = (0, o.memo)(an),
        ln = t(7502),
        on = t(5600),
        sn = t(46693),
        cn = t(98236),
        dn = t(2072),
        un = 'chatWrapper___LQ6YY',
        mn = 'chatAppWrapper___hrF6r',
        pn = 'chatAppContent___Ri0fp',
        hn = 'chatAppCard___kPbxc',
        fn = 'cubeIcon___zAmbo',
        vn = 'chatAppCardSelected___h9j2W',
        xn = 'chatAppCardSelectedDark___K4uSc',
        gn = 'chatTitleWrapper___MXbZF',
        jn = 'chatTitle___cyXkX',
        bn = 'chatTitleContent___XsLt3',
        _n = 'chatSpin___J9mE8',
        Zn = 'chatTitleCard___Pnbv0',
        yn = 'chatTitleCardSelected___A8BIt',
        kn = 'chatTitleCardSelectedDark___isklU',
        Cn = 'divider___d5TdM',
        wn = x.Z.Text,
        En = function () {
          var e = (0, en.en)(),
            n = e.data,
            t = e.loading,
            i = (0, qe.dd)().onRemoveDialog,
            r = (0, qe.E$)().onRemoveConversation,
            s = (0, en.$D)().handleClickDialog,
            c = (0, en.vV)().handleClickConversation,
            d = (0, en.g6)(),
            u = d.dialogId,
            m = d.conversationId,
            x = (0, cn.Fg)().theme,
            I = (0, qe.ch)(),
            P = I.list,
            S = I.addTemporaryConversation,
            N = I.loading,
            A = (0, qe.XU)(),
            D = A.activated,
            O = A.handleItemEnter,
            F = A.handleItemLeave,
            T = (0, qe.XU)(),
            L = T.activated,
            R = T.handleItemEnter,
            V = T.handleItemLeave,
            q = (0, qe.hF)(),
            B = q.conversationRenameLoading,
            H = q.initialConversationName,
            $ = q.onConversationRenameOk,
            z = q.conversationRenameVisible,
            X = q.hideConversationRenameModal,
            G = q.showConversationRenameModal,
            K = (0, qe.HN)(),
            Y = K.dialogSettingLoading,
            J = K.initialDialog,
            Q = K.onDialogEditOk,
            ee = K.dialogEditVisible,
            ne = K.clearDialog,
            te = K.hideDialogEditModal,
            ie = K.showDialogEditModal,
            ae = (0, U.qM)('chat').t,
            re = (0, W.cE)(),
            le = re.currentRecord,
            oe = re.setRecord,
            se = (0, o.useState)(new AbortController()),
            ce = l()(se, 2),
            de = ce[0],
            ue = ce[1],
            me = (0, on.iV)(),
            pe = me.showEmbedModal,
            he = me.hideEmbedModal,
            ve = me.embedVisible,
            xe = me.beta,
            ge = function (e) {
              return function (n) {
                var t, i;
                null == n ||
                  null === (t = n.domEvent) ||
                  void 0 === t ||
                  t.preventDefault(),
                  null == n ||
                    null === (i = n.domEvent) ||
                    void 0 === i ||
                    i.stopPropagation(),
                  ie(e);
              };
            },
            be = function (e) {
              return function (n) {
                var t = n.domEvent;
                t.preventDefault(), t.stopPropagation(), i([e]);
              };
            },
            _e = function (e) {
              return function (n) {
                var t, i;
                null == n ||
                  null === (t = n.domEvent) ||
                  void 0 === t ||
                  t.preventDefault(),
                  null == n ||
                    null === (i = n.domEvent) ||
                    void 0 === i ||
                    i.stopPropagation(),
                  oe(e),
                  pe();
              };
            },
            Ze = function (e) {
              return function (n) {
                var t = n.domEvent;
                t.preventDefault(), t.stopPropagation(), r([e]);
              };
            },
            ye = function (e) {
              return function (n) {
                var t = n.domEvent;
                t.preventDefault(), t.stopPropagation(), G(e);
              };
            },
            ke = (0, o.useCallback)(
              function (e) {
                return function () {
                  s(e);
                };
              },
              [s],
            ),
            Ce = (0, o.useCallback)(
              function (e, n) {
                return function () {
                  c(e, n ? 'true' : ''),
                    ue(function (e) {
                      return e.abort(), new AbortController();
                    });
                };
              },
              [c],
            ),
            we = (0, o.useCallback)(
              function () {
                S();
              },
              [S],
            ),
            Ee = function (e) {
              var n = e.id;
              return [
                {
                  key: '1',
                  onClick: ge(n),
                  label: (0, fe.jsxs)(g.Z, {
                    children: [
                      (0, fe.jsx)(f.Z, {}),
                      ae('edit', { keyPrefix: 'common' }),
                    ],
                  }),
                },
                { type: 'divider' },
                {
                  key: '2',
                  onClick: be(n),
                  label: (0, fe.jsxs)(g.Z, {
                    children: [
                      (0, fe.jsx)(v.Z, {}),
                      ae('delete', { keyPrefix: 'common' }),
                    ],
                  }),
                },
                { type: 'divider' },
                {
                  key: '3',
                  onClick: _e(e),
                  label: (0, fe.jsxs)(g.Z, {
                    children: [
                      (0, fe.jsx)(dn.Z, { className: 'size-4' }),
                      ae('embedIntoSite', { keyPrefix: 'common' }),
                    ],
                  }),
                },
              ];
            },
            Ie = function (e) {
              return [
                {
                  key: '1',
                  onClick: ye(e),
                  label: (0, fe.jsxs)(g.Z, {
                    children: [
                      (0, fe.jsx)(f.Z, {}),
                      ae('rename', { keyPrefix: 'common' }),
                    ],
                  }),
                },
                { type: 'divider' },
                {
                  key: '2',
                  onClick: Ze(e),
                  label: (0, fe.jsxs)(g.Z, {
                    children: [
                      (0, fe.jsx)(v.Z, {}),
                      ae('delete', { keyPrefix: 'common' }),
                    ],
                  }),
                },
              ];
            };
          return (0, fe.jsxs)(j.Z, {
            className: un,
            children: [
              (0, fe.jsx)(j.Z, {
                className: mn,
                children: (0, fe.jsxs)(j.Z, {
                  flex: 1,
                  vertical: !0,
                  children: [
                    (0, fe.jsx)(b.ZP, {
                      type: 'primary',
                      onClick: ge(),
                      children: ae('createAssistant'),
                    }),
                    (0, fe.jsx)(_.Z, {}),
                    (0, fe.jsx)(j.Z, {
                      className: pn,
                      vertical: !0,
                      gap: 10,
                      children: (0, fe.jsx)(Z.Z, {
                        spinning: t,
                        wrapperClassName: _n,
                        children: n.map(function (e) {
                          return (0, fe.jsx)(
                            y.Z,
                            {
                              hoverable: !0,
                              className: M()(
                                hn,
                                a()({}, 'dark' === x ? xn : vn, u === e.id),
                              ),
                              onMouseEnter:
                                ((n = e.id),
                                function () {
                                  O(n);
                                }),
                              onMouseLeave: F,
                              onClick: ke(e.id),
                              children: (0, fe.jsxs)(j.Z, {
                                justify: 'space-between',
                                align: 'center',
                                children: [
                                  (0, fe.jsxs)(g.Z, {
                                    size: 15,
                                    children: [
                                      (0, fe.jsx)(k.C, {
                                        src: e.icon,
                                        shape: 'square',
                                      }),
                                      (0, fe.jsxs)('section', {
                                        children: [
                                          (0, fe.jsx)('b', {
                                            children: (0, fe.jsx)(wn, {
                                              ellipsis: { tooltip: e.name },
                                              style: { width: 130 },
                                              children: e.name,
                                            }),
                                          }),
                                          (0, fe.jsx)('div', {
                                            children: e.description,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  D === e.id &&
                                    (0, fe.jsx)('section', {
                                      children: (0, fe.jsx)(C.Z, {
                                        menu: { items: Ee(e) },
                                        children: (0, fe.jsx)(p, {
                                          className: fn,
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                            },
                            e.id,
                          );
                          var n;
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, fe.jsx)(_.Z, { type: 'vertical', className: Cn }),
              (0, fe.jsx)(j.Z, {
                className: gn,
                children: (0, fe.jsxs)(j.Z, {
                  flex: 1,
                  vertical: !0,
                  children: [
                    (0, fe.jsxs)(j.Z, {
                      justify: 'space-between',
                      align: 'center',
                      className: jn,
                      children: [
                        (0, fe.jsxs)(g.Z, {
                          children: [
                            (0, fe.jsx)('b', { children: ae('chat') }),
                            (0, fe.jsx)(w.Z, { children: P.length }),
                          ],
                        }),
                        (0, fe.jsx)(E.Z, {
                          title: ae('newChat'),
                          children: (0, fe.jsx)('div', {
                            children: (0, fe.jsx)(sn.Z, {
                              name: 'plus-circle-fill',
                              width: 20,
                              onClick: we,
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, fe.jsx)(_.Z, {}),
                    (0, fe.jsx)(j.Z, {
                      vertical: !0,
                      gap: 10,
                      className: bn,
                      children: (0, fe.jsx)(Z.Z, {
                        spinning: N,
                        wrapperClassName: _n,
                        children: P.map(function (e) {
                          return (0, fe.jsx)(
                            y.Z,
                            {
                              hoverable: !0,
                              onClick: Ce(e.id, e.is_new),
                              onMouseEnter:
                                ((n = e.id),
                                function () {
                                  R(n);
                                }),
                              onMouseLeave: V,
                              className: M()(
                                Zn,
                                a()({}, 'dark' === x ? kn : yn, e.id === m),
                              ),
                              children: (0, fe.jsxs)(j.Z, {
                                justify: 'space-between',
                                align: 'center',
                                children: [
                                  (0, fe.jsx)('div', {
                                    children: (0, fe.jsx)(wn, {
                                      ellipsis: { tooltip: e.name },
                                      style: { width: 150 },
                                      children: e.name,
                                    }),
                                  }),
                                  L === e.id &&
                                    '' !== e.id &&
                                    !e.is_new &&
                                    (0, fe.jsx)('section', {
                                      children: (0, fe.jsx)(C.Z, {
                                        menu: { items: Ie(e.id) },
                                        children: (0, fe.jsx)(p, {
                                          className: fn,
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                            },
                            e.id,
                          );
                          var n;
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, fe.jsx)(_.Z, { type: 'vertical', className: Cn }),
              (0, fe.jsx)(rn, { controller: de }),
              ee &&
                (0, fe.jsx)(Xe, {
                  visible: ee,
                  initialDialog: J,
                  showModal: ie,
                  hideModal: te,
                  loading: Y,
                  onOk: Q,
                  clearDialog: ne,
                }),
              (0, fe.jsx)(h.Z, {
                visible: z,
                hideModal: X,
                onOk: $,
                initialName: H,
                loading: B,
              }),
              ve &&
                (0, fe.jsx)(ln.Z, {
                  visible: ve,
                  hideModal: he,
                  token: le.id,
                  form: je.qH.Chat,
                  beta: xe,
                  isAgent: !1,
                }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=p__chat__index.4c23ec6a.async.js.map
