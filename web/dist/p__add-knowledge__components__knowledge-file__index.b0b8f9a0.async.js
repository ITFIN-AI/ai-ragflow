'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [1505],
  {
    25170: function (e, n, t) {
      t.d(n, {
        r: function () {
          return u;
        },
        w: function () {
          return c;
        },
      });
      var r = t(86968),
        a = t(22150),
        o = t(86250),
        i = t(71338),
        l = t(48928),
        s = t(86074),
        u = function () {
          var e = (0, r.qM)('knowledgeDetails').t;
          return (0, s.jsx)(a.Z.Item, {
            label: e('autoKeywords'),
            tooltip: e('autoKeywordsTip'),
            children: (0, s.jsxs)(o.Z, {
              gap: 20,
              align: 'center',
              children: [
                (0, s.jsx)(o.Z, {
                  flex: 1,
                  children: (0, s.jsx)(a.Z.Item, {
                    name: ['parser_config', 'auto_keywords'],
                    noStyle: !0,
                    initialValue: 0,
                    children: (0, s.jsx)(i.Z, {
                      max: 30,
                      style: { width: '100%' },
                    }),
                  }),
                }),
                (0, s.jsx)(a.Z.Item, {
                  name: ['parser_config', 'auto_keywords'],
                  noStyle: !0,
                  children: (0, s.jsx)(l.Z, { max: 30, min: 0 }),
                }),
              ],
            }),
          });
        },
        c = function () {
          var e = (0, r.qM)('knowledgeDetails').t;
          return (0, s.jsx)(a.Z.Item, {
            label: e('autoQuestions'),
            tooltip: e('autoQuestionsTip'),
            children: (0, s.jsxs)(o.Z, {
              gap: 20,
              align: 'center',
              children: [
                (0, s.jsx)(o.Z, {
                  flex: 1,
                  children: (0, s.jsx)(a.Z.Item, {
                    name: ['parser_config', 'auto_questions'],
                    noStyle: !0,
                    initialValue: 0,
                    children: (0, s.jsx)(i.Z, {
                      max: 10,
                      style: { width: '100%' },
                    }),
                  }),
                }),
                (0, s.jsx)(a.Z.Item, {
                  name: ['parser_config', 'auto_questions'],
                  noStyle: !0,
                  children: (0, s.jsx)(l.Z, { max: 10, min: 0 }),
                }),
              ],
            }),
          });
        };
    },
    38218: function (e, n, t) {
      t.d(n, {
        d: function () {
          return o;
        },
      });
      var r = t(27080),
        a = t(86074);
      function o(e) {
        var n = e.children,
          t = e.className,
          o = e.show;
        return void 0 === o || o
          ? (0, a.jsx)('div', {
              className: (0, r.cn)(
                'border p-2 rounded-lg bg-slate-50 dark:bg-gray-600',
                t,
              ),
              children: n,
            })
          : n;
      }
    },
    84782: function (e, n, t) {
      var r = t(79531),
        a = t(22150),
        o = t(67421),
        i = t(86074),
        l = function (e) {
          var n = e.value,
            t = e.onChange,
            a = e.maxLength,
            o = null == n ? void 0 : n.replaceAll('\n', '\\n');
          return (0, i.jsx)(r.Z, {
            value: o,
            onChange: function (e) {
              var n = e.target.value.replaceAll('\\n', '\n');
              null == t || t(n);
            },
            maxLength: a,
          });
        };
      n.Z = function () {
        var e = (0, o.$G)().t;
        return (0, i.jsx)(a.Z.Item, {
          name: ['parser_config', 'delimiter'],
          label: e('knowledgeDetails.delimiter'),
          initialValue: '\n',
          rules: [{ required: !0 }],
          tooltip: e('knowledgeDetails.delimiterTip'),
          children: (0, i.jsx)(l, {}),
        });
      };
    },
    26572: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var r = t(19632),
        a = t.n(r),
        o = t(5574),
        i = t.n(o),
        l = t(24969),
        s = t(9361),
        u = t(83062),
        c = t(66309),
        d = t(79531),
        p = t(52376),
        m = t(62435),
        f = 'tweenGroup___HgfIF',
        h = 'tag___EPGvm',
        g = t(86074),
        x = function (e) {
          var n = e.value,
            t = void 0 === n ? [] : n,
            r = e.onChange,
            o = s.Z.useToken().token,
            x = (0, m.useState)(!1),
            v = i()(x, 2),
            b = v[0],
            j = v[1],
            y = (0, m.useState)(''),
            k = i()(y, 2),
            w = k[0],
            Z = k[1],
            _ = (0, m.useRef)(null);
          (0, m.useEffect)(
            function () {
              var e;
              b && (null === (e = _.current) || void 0 === e || e.focus());
            },
            [b],
          );
          var C = function () {
              if (w && t) {
                var e = w
                  .split(';')
                  .map(function (e) {
                    return e.trim();
                  })
                  .filter(function (e) {
                    return e && !t.includes(e);
                  });
                null == r || r([].concat(a()(t), a()(e)));
              }
              j(!1), Z('');
            },
            M =
              null == t
                ? void 0
                : t.map(function (e) {
                    return (0, g.jsx)(u.Z, {
                      title: e,
                      children: (0, g.jsx)(
                        c.Z,
                        {
                          className: h,
                          closable: !0,
                          onClose: function (n) {
                            var a, o;
                            n.preventDefault(),
                              (a = e),
                              (o =
                                null == t
                                  ? void 0
                                  : t.filter(function (e) {
                                      return e !== a;
                                    })),
                              null == r || r(null != o ? o : []);
                          },
                          children: e,
                        },
                        e,
                      ),
                    });
                  }),
            K = { background: o.colorBgContainer, borderStyle: 'dashed' };
          return (0, g.jsxs)('div', {
            children: [
              Array.isArray(M) &&
                M.length > 0 &&
                (0, g.jsx)(p.Z, {
                  className: f,
                  enter: {
                    scale: 0.8,
                    opacity: 0,
                    type: 'from',
                    duration: 100,
                  },
                  onEnd: function (e) {
                    ('appear' !== e.type && 'enter' !== e.type) ||
                      (e.target.style = 'display: inline-block');
                  },
                  leave: { opacity: 0, width: 0, scale: 0, duration: 200 },
                  appear: !1,
                  children: M,
                }),
              b
                ? (0, g.jsx)(d.Z, {
                    ref: _,
                    type: 'text',
                    size: 'small',
                    value: w,
                    onChange: function (e) {
                      Z(e.target.value);
                    },
                    onBlur: C,
                    onPressEnter: C,
                  })
                : (0, g.jsx)(c.Z, {
                    onClick: function () {
                      j(!0);
                    },
                    style: K,
                    children: (0, g.jsx)(l.Z, {}),
                  }),
            ],
          });
        };
    },
    50960: function (e, n, t) {
      var r = t(86968),
        a = t(22150),
        o = t(26572),
        i = t(86074),
        l = ['organization', 'person', 'geo', 'event', 'category'];
      n.Z = function (e) {
        var n = e.field,
          t = void 0 === n ? ['parser_config', 'entity_types'] : n,
          s = (0, r.qM)('knowledgeConfiguration').t;
        return (0, i.jsx)(a.Z.Item, {
          name: t,
          label: s('entityTypes'),
          rules: [{ required: !0 }],
          initialValue: l,
          children: (0, i.jsx)(o.Z, {}),
        });
      };
    },
    54140: function (e, n, t) {
      var r = t(86968),
        a = t(22150),
        o = t(72269),
        i = t(86074);
      n.Z = function () {
        var e = (0, r.qM)('knowledgeDetails').t;
        return (0, i.jsx)(a.Z.Item, {
          name: ['parser_config', 'html4excel'],
          label: e('html4excel'),
          initialValue: !1,
          valuePropName: 'checked',
          tooltip: e('html4excelTip'),
          children: (0, i.jsx)(o.Z, {}),
        });
      };
    },
    11218: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var r = t(15009),
        a = t.n(r),
        o = t(99289),
        i = t.n(o),
        l = t(5574),
        s = t.n(l),
        u = t(97857),
        c = t.n(u),
        d = t(19632),
        p = t.n(d),
        m = t(86968),
        f = t(64082),
        h = t(31365),
        g = t(38703),
        x = t(85576),
        v = t(86250),
        b = t(92783),
        j = t(84567),
        y = t(92398),
        k = t(62435),
        w = 'uploader___ezBcw',
        Z = t(86074),
        _ = h.Z.Dragger,
        C = function (e) {
          var n = e.directory,
            t = e.fileList,
            r = e.setFileList,
            a = e.uploadProgress,
            o = (0, m.qM)('fileManager').t,
            i = {
              multiple: !0,
              onRemove: function (e) {
                var n = t.indexOf(e),
                  a = t.slice();
                a.splice(n, 1), r(a);
              },
              beforeUpload: function (e) {
                return (
                  r(function (n) {
                    return [].concat(p()(n), [e]);
                  }),
                  !1
                );
              },
              directory: n,
              fileList: t,
              progress: { strokeWidth: 2 },
            };
          return (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)(g.Z, { percent: a, showInfo: !1 }),
              (0, Z.jsxs)(
                _,
                c()(
                  c()({}, i),
                  {},
                  {
                    className: w,
                    children: [
                      (0, Z.jsx)('p', {
                        className: 'ant-upload-drag-icon',
                        children: (0, Z.jsx)(f.Z, {}),
                      }),
                      (0, Z.jsx)('p', {
                        className: 'ant-upload-text',
                        children: o('uploadTitle'),
                      }),
                      (0, Z.jsx)('p', {
                        className: 'ant-upload-hint',
                        children: o('uploadDescription'),
                      }),
                      !1,
                    ],
                  },
                ),
              ),
            ],
          });
        },
        M = function (e) {
          var n = e.visible,
            t = e.hideModal,
            r = e.loading,
            o = e.onOk,
            l = e.uploadFileList,
            u = e.setUploadFileList,
            c = e.uploadProgress,
            d = e.setUploadProgress,
            f = (0, m.qM)('fileManager').t,
            h = (0, k.useState)('local'),
            g = s()(h, 2),
            w = g[0],
            _ = g[1],
            M = (0, k.useState)(!1),
            K = s()(M, 2),
            P = K[0],
            I = K[1],
            F = (0, k.useState)([]),
            O = s()(F, 2),
            L = O[0],
            N = O[1],
            T = (0, k.useState)([]),
            D = s()(T, 2),
            S = D[0],
            E = D[1],
            R = (function () {
              var e = i()(
                a()().mark(function e() {
                  var n;
                  return a()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (100 !== c) {
                            e.next = 3;
                            break;
                          }
                          return null == t || t(), e.abrupt('return');
                        case 3:
                          return (
                            (e.next = 5),
                            null == o
                              ? void 0
                              : o(
                                  l
                                    ? {
                                        parseOnCreation: P,
                                        directoryFileList: S,
                                      }
                                    : [].concat(p()(L), p()(S)),
                                )
                          );
                        case 5:
                          return (n = e.sent), e.abrupt('return', n);
                        case 7:
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
            G = [
              {
                key: '1',
                label: f('file'),
                children: (0, Z.jsx)(C, {
                  directory: !1,
                  fileList: l || L,
                  setFileList: u || N,
                  uploadProgress: c,
                }),
              },
              {
                key: '2',
                label: f('directory'),
                children: (0, Z.jsx)(C, {
                  directory: !0,
                  fileList: S,
                  setFileList: E,
                  uploadProgress: c,
                }),
              },
            ];
          return (0, Z.jsx)(Z.Fragment, {
            children: (0, Z.jsx)(x.Z, {
              title: f('uploadFile'),
              open: n,
              onOk: R,
              onCancel: t,
              confirmLoading: r,
              afterClose: function () {
                u ? (u([]), null == d || d(0)) : N([]), E([]);
              },
              children: (0, Z.jsxs)(v.Z, {
                gap: 'large',
                vertical: !0,
                children: [
                  (0, Z.jsx)(b.Z, {
                    options: [
                      { label: f('local'), value: 'local' },
                      { label: f('s3'), value: 's3' },
                    ],
                    block: !0,
                    value: w,
                    onChange: _,
                  }),
                  'local' === w
                    ? (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(j.Z, {
                            checked: P,
                            onChange: function (e) {
                              return I(e.target.checked);
                            },
                            children: f('parseOnCreation'),
                          }),
                          (0, Z.jsx)(y.Z, { defaultActiveKey: '1', items: G }),
                        ],
                      })
                    : f('comingSoon', { keyPrefix: 'common' }),
                ],
              }),
            }),
          });
        };
    },
    78656: function (e, n, t) {
      var r = t(19632),
        a = t.n(r),
        o = t(97857),
        i = t.n(o),
        l = t(96330),
        s = t(86968),
        u = t(38392),
        c = t(22150),
        d = t(34041),
        p = t(96486),
        m = t(62435),
        f = t(86074);
      n.Z = function () {
        var e = (0, s.qM)('knowledgeDetails').t,
          n = (0, u.hl)(),
          t = (0, m.useMemo)(
            function () {
              var t = ['DeepDOC', 'Plain Text'].map(function (n) {
                  return {
                    label:
                      'Plain Text' === n ? e((0, p.camelCase)(n)) : 'DeepDoc',
                    value: n,
                  };
                }),
                r = n[l.Vr.Image2text].map(function (e) {
                  return i()(
                    i()({}, e),
                    {},
                    {
                      options: e.options.map(function (e) {
                        return i()(
                          i()({}, e),
                          {},
                          {
                            label: (0, f.jsxs)('div', {
                              className:
                                'flex justify-between items-center gap-2',
                              children: [
                                e.label,
                                (0, f.jsx)('span', {
                                  className: 'text-red-500 text-sm',
                                  children: 'Experimental',
                                }),
                              ],
                            }),
                          },
                        );
                      }),
                    },
                  );
                });
              return [].concat(a()(t), a()(r));
            },
            [n, e],
          );
        return (0, f.jsx)(c.Z.Item, {
          name: ['parser_config', 'layout_recognize'],
          label: e('layoutRecognize'),
          initialValue: 'DeepDOC',
          tooltip: e('layoutRecognizeTip'),
          children: (0, f.jsx)(d.Z, { options: t, popupMatchSelectWidth: !1 }),
        });
      };
    },
    77680: function (e, n, t) {
      var r = t(86968),
        a = t(22150),
        o = t(86250),
        i = t(71338),
        l = t(48928),
        s = t(86074);
      n.Z = function (e) {
        var n = e.initialValue,
          t = void 0 === n ? 512 : n,
          u = e.max,
          c = void 0 === u ? 2048 : u,
          d = (0, r.qM)('knowledgeConfiguration').t;
        return (0, s.jsx)(a.Z.Item, {
          label: d('chunkTokenNumber'),
          tooltip: d('chunkTokenNumberTip'),
          children: (0, s.jsxs)(o.Z, {
            gap: 20,
            align: 'center',
            children: [
              (0, s.jsx)(o.Z, {
                flex: 1,
                children: (0, s.jsx)(a.Z.Item, {
                  name: ['parser_config', 'chunk_token_num'],
                  noStyle: !0,
                  initialValue: t,
                  rules: [
                    { required: !0, message: d('chunkTokenNumberMessage') },
                  ],
                  children: (0, s.jsx)(i.Z, {
                    max: c,
                    style: { width: '100%' },
                  }),
                }),
              }),
              (0, s.jsx)(a.Z.Item, {
                name: ['parser_config', 'chunk_token_num'],
                noStyle: !0,
                rules: [
                  { required: !0, message: d('chunkTokenNumberMessage') },
                ],
                children: (0, s.jsx)(l.Z, { max: c, min: 0 }),
              }),
            ],
          }),
        });
      };
    },
    72103: function (e, n, t) {
      t.d(n, {
        _G: function () {
          return g;
        },
        hc: function () {
          return h;
        },
      });
      var r = t(96330),
        a = t(86968),
        o = t(27080),
        i = t(22150),
        l = t(72269),
        s = t(34041),
        u = t(96486),
        c = t(62435),
        d = t(38218),
        p = t(50960),
        m = t(86074),
        f =
          (r.K1.Table,
          r.K1.KnowledgeGraph,
          r.K1.Tag,
          [
            r.K1.Table,
            r.K1.Resume,
            r.K1.Picture,
            r.K1.KnowledgeGraph,
            r.K1.Qa,
            r.K1.Tag,
          ]),
        h = function (e) {
          return !f.some(function (n) {
            return n === e;
          });
        };
      function g() {
        var e = (0, a.qM)('knowledgeConfiguration').t;
        return (0, m.jsx)(i.Z.Item, {
          name: ['parser_config', 'graphrag', 'use_graphrag'],
          label: e('useGraphRag'),
          initialValue: !1,
          valuePropName: 'checked',
          tooltip: e('useGraphRagTip'),
          children: (0, m.jsx)(l.Z, {}),
        });
      }
      n.ZP = function (e) {
        var n = e.marginBottom,
          t = void 0 !== n && n,
          r = (0, a.qM)('knowledgeConfiguration').t,
          f = (0, c.useMemo)(function () {
            return ['light', 'general'].map(function (e) {
              return { value: e, label: (0, u.upperFirst)(e) };
            });
          }, []),
          h = (0, c.useCallback)(
            function (e) {
              return {
                title: 'string' == typeof e ? r(e) : e,
                overlayInnerStyle: { width: '32vw' },
              };
            },
            [r],
          );
        return (0, m.jsxs)(d.d, {
          className: (0, o.cn)({ 'mb-4': t }),
          children: [
            (0, m.jsx)(g, {}),
            (0, m.jsx)(i.Z.Item, {
              shouldUpdate: function (e, n) {
                return (
                  e.parser_config.graphrag.use_graphrag !==
                  n.parser_config.graphrag.use_graphrag
                );
              },
              children: function (e) {
                return (
                  (0, e.getFieldValue)([
                    'parser_config',
                    'graphrag',
                    'use_graphrag',
                  ]) &&
                  (0, m.jsxs)(m.Fragment, {
                    children: [
                      (0, m.jsx)(p.Z, {
                        field: ['parser_config', 'graphrag', 'entity_types'],
                      }),
                      (0, m.jsx)(i.Z.Item, {
                        name: ['parser_config', 'graphrag', 'method'],
                        label: r('graphRagMethod'),
                        tooltip: h(
                          (0, m.jsx)('div', {
                            dangerouslySetInnerHTML: {
                              __html: r('graphRagMethodTip'),
                            },
                          }),
                        ),
                        initialValue: 'light',
                        children: (0, m.jsx)(s.Z, { options: f }),
                      }),
                      (0, m.jsx)(i.Z.Item, {
                        name: ['parser_config', 'graphrag', 'resolution'],
                        label: r('resolution'),
                        tooltip: h('resolutionTip'),
                        children: (0, m.jsx)(l.Z, {}),
                      }),
                      (0, m.jsx)(i.Z.Item, {
                        name: ['parser_config', 'graphrag', 'community'],
                        label: r('community'),
                        tooltip: h('communityTip'),
                        children: (0, m.jsx)(l.Z, {}),
                      }),
                    ],
                  })
                );
              },
            }),
          ],
        });
      };
    },
    85885: function (e, n, t) {
      t.d(n, {
        J3: function () {
          return x;
        },
      });
      var r = t(96330),
        a = t(86968),
        o = t(24969),
        i = t(22150),
        l = t(72269),
        s = t(79531),
        u = t(86250),
        c = t(71338),
        d = t(48928),
        p = t(15867),
        m = t(83608),
        f = t.n(m),
        h = t(86074),
        g = [
          r.K1.Table,
          r.K1.Resume,
          r.K1.One,
          r.K1.Picture,
          r.K1.KnowledgeGraph,
          r.K1.Qa,
          r.K1.Tag,
        ],
        x = function (e) {
          return !g.some(function (n) {
            return n === e;
          });
        };
      r.K1.Table, r.K1.KnowledgeGraph, r.K1.Tag;
      n.ZP = function () {
        var e = i.Z.useFormInstance(),
          n = (0, a.qM)('knowledgeConfiguration').t,
          t = function () {
            e.setFieldValue(
              ['parser_config', 'raptor', 'random_seed'],
              f()(1e4),
            );
          };
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsx)(i.Z.Item, {
              name: ['parser_config', 'raptor', 'use_raptor'],
              label: n('useRaptor'),
              initialValue: !1,
              valuePropName: 'checked',
              tooltip: n('useRaptorTip'),
              children: (0, h.jsx)(l.Z, {}),
            }),
            (0, h.jsx)(i.Z.Item, {
              shouldUpdate: function (e, n) {
                return (
                  e.parser_config.raptor.use_raptor !==
                  n.parser_config.raptor.use_raptor
                );
              },
              children: function (e) {
                return (
                  (0, e.getFieldValue)([
                    'parser_config',
                    'raptor',
                    'use_raptor',
                  ]) &&
                  (0, h.jsxs)(h.Fragment, {
                    children: [
                      (0, h.jsx)(i.Z.Item, {
                        name: ['parser_config', 'raptor', 'prompt'],
                        label: n('prompt'),
                        initialValue: n('promptText'),
                        tooltip: n('promptTip'),
                        rules: [{ required: !0, message: n('promptMessage') }],
                        children: (0, h.jsx)(s.Z.TextArea, { rows: 8 }),
                      }),
                      (0, h.jsx)(i.Z.Item, {
                        label: n('maxToken'),
                        tooltip: n('maxTokenTip'),
                        children: (0, h.jsxs)(u.Z, {
                          gap: 20,
                          align: 'center',
                          children: [
                            (0, h.jsx)(u.Z, {
                              flex: 1,
                              children: (0, h.jsx)(i.Z.Item, {
                                name: ['parser_config', 'raptor', 'max_token'],
                                noStyle: !0,
                                initialValue: 256,
                                rules: [
                                  {
                                    required: !0,
                                    message: n('maxTokenMessage'),
                                  },
                                ],
                                children: (0, h.jsx)(c.Z, {
                                  max: 2048,
                                  style: { width: '100%' },
                                }),
                              }),
                            }),
                            (0, h.jsx)(i.Z.Item, {
                              name: ['parser_config', 'raptor', 'max_token'],
                              noStyle: !0,
                              rules: [
                                { required: !0, message: n('maxTokenMessage') },
                              ],
                              children: (0, h.jsx)(d.Z, { max: 2048, min: 0 }),
                            }),
                          ],
                        }),
                      }),
                      (0, h.jsx)(i.Z.Item, {
                        label: n('threshold'),
                        tooltip: n('thresholdTip'),
                        children: (0, h.jsxs)(u.Z, {
                          gap: 20,
                          align: 'center',
                          children: [
                            (0, h.jsx)(u.Z, {
                              flex: 1,
                              children: (0, h.jsx)(i.Z.Item, {
                                name: ['parser_config', 'raptor', 'threshold'],
                                noStyle: !0,
                                initialValue: 0.1,
                                rules: [
                                  {
                                    required: !0,
                                    message: n('thresholdMessage'),
                                  },
                                ],
                                children: (0, h.jsx)(c.Z, {
                                  min: 0,
                                  max: 1,
                                  style: { width: '100%' },
                                  step: 0.01,
                                }),
                              }),
                            }),
                            (0, h.jsx)(i.Z.Item, {
                              name: ['parser_config', 'raptor', 'threshold'],
                              noStyle: !0,
                              rules: [
                                {
                                  required: !0,
                                  message: n('thresholdMessage'),
                                },
                              ],
                              children: (0, h.jsx)(d.Z, {
                                max: 1,
                                min: 0,
                                step: 0.01,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, h.jsx)(i.Z.Item, {
                        label: n('maxCluster'),
                        tooltip: n('maxClusterTip'),
                        children: (0, h.jsxs)(u.Z, {
                          gap: 20,
                          align: 'center',
                          children: [
                            (0, h.jsx)(u.Z, {
                              flex: 1,
                              children: (0, h.jsx)(i.Z.Item, {
                                name: [
                                  'parser_config',
                                  'raptor',
                                  'max_cluster',
                                ],
                                noStyle: !0,
                                initialValue: 64,
                                rules: [
                                  {
                                    required: !0,
                                    message: n('maxClusterMessage'),
                                  },
                                ],
                                children: (0, h.jsx)(c.Z, {
                                  min: 1,
                                  max: 1024,
                                  style: { width: '100%' },
                                }),
                              }),
                            }),
                            (0, h.jsx)(i.Z.Item, {
                              name: ['parser_config', 'raptor', 'max_cluster'],
                              noStyle: !0,
                              rules: [
                                {
                                  required: !0,
                                  message: n('maxClusterMessage'),
                                },
                              ],
                              children: (0, h.jsx)(d.Z, { max: 1024, min: 1 }),
                            }),
                          ],
                        }),
                      }),
                      (0, h.jsx)(i.Z.Item, {
                        label: n('randomSeed'),
                        children: (0, h.jsxs)(u.Z, {
                          gap: 20,
                          align: 'center',
                          children: [
                            (0, h.jsx)(u.Z, {
                              flex: 1,
                              children: (0, h.jsx)(i.Z.Item, {
                                name: [
                                  'parser_config',
                                  'raptor',
                                  'random_seed',
                                ],
                                noStyle: !0,
                                initialValue: 0,
                                rules: [
                                  {
                                    required: !0,
                                    message: n('randomSeedMessage'),
                                  },
                                ],
                                children: (0, h.jsx)(d.Z, {
                                  style: { width: '100%' },
                                }),
                              }),
                            }),
                            (0, h.jsx)(i.Z.Item, {
                              noStyle: !0,
                              children: (0, h.jsx)(p.ZP, {
                                type: 'primary',
                                onClick: t,
                                children: (0, h.jsx)(o.Z, {}),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                );
              },
            }),
          ],
        });
      };
    },
    38392: function (e, n, t) {
      t.d(n, {
        DC: function () {
          return O;
        },
        Ju: function () {
          return D;
        },
        OR: function () {
          return N;
        },
        T: function () {
          return F;
        },
        X7: function () {
          return S;
        },
        hl: function () {
          return I;
        },
        uZ: function () {
          return T;
        },
        ux: function () {
          return L;
        },
      });
      var r = t(97857),
        a = t.n(r),
        o = t(19632),
        i = t.n(o),
        l = t(9783),
        s = t.n(l),
        u = t(5574),
        c = t.n(u),
        d = t(15009),
        p = t.n(d),
        m = t(99289),
        f = t.n(m),
        h = t(46693),
        g = t(96330),
        x = t(72668),
        v = t(31098),
        b = t(33092),
        j = t(78551),
        y = t(30202),
        k = t(4527),
        w = t(86250),
        Z = t(45360),
        _ = t(62435),
        C = t(67421),
        M = t(86074),
        K = function (e) {
          var n,
            t = (0, j.a)({
              queryKey: ['llmList'],
              initialData: {},
              queryFn:
                ((n = f()(
                  p()().mark(function n() {
                    var t, r, a;
                    return p()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2), x.ZP.llm_list({ model_type: e })
                            );
                          case 2:
                            return (
                              (r = n.sent),
                              (a = r.data),
                              n.abrupt(
                                'return',
                                null !== (t = null == a ? void 0 : a.data) &&
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
          label: (0, M.jsxs)(w.Z, {
            align: 'center',
            gap: 6,
            children: [
              (0, M.jsx)(h.$, {
                name: (0, b.Os)(e.fid, e.llm_name),
                width: 26,
                height: 26,
                size: 'small',
              }),
              (0, M.jsx)('span', { children: (0, b.KE)(e.llm_name) }),
            ],
          }),
          value: ''.concat(e.llm_name, '@').concat(e.fid),
          disabled: !e.available,
          is_tools: e.is_tools,
        };
      }
      var I = function () {
          var e = K(),
            n = (0, _.useCallback)(
              function () {
                var n = g.Vr.Image2text,
                  t = n.toUpperCase();
                return Object.entries(e)
                  .map(function (e) {
                    var r = c()(e, 2);
                    return {
                      label: r[0],
                      options: r[1]
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
                    var t = c()(e, 2)[1];
                    return (
                      !n ||
                      t.some(function (e) {
                        return e.model_type.includes(n);
                      })
                    );
                  })
                  .map(function (e) {
                    var t = c()(e, 2);
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
          return s()(
            s()(
              s()(
                s()(
                  s()(
                    s()({}, g.Vr.Chat, t(g.Vr.Chat)),
                    g.Vr.Embedding,
                    t(g.Vr.Embedding),
                  ),
                  g.Vr.Image2text,
                  n(),
                ),
                g.Vr.Speech2text,
                t(g.Vr.Speech2text),
              ),
              g.Vr.Rerank,
              t(g.Vr.Rerank),
            ),
            g.Vr.TTS,
            t(g.Vr.TTS),
          );
        },
        F = function (e) {
          var n = I();
          return e.reduce(function (e, t) {
            return (
              n[t].forEach(function (n) {
                var t,
                  r = e.find(function (e) {
                    return e.label === n.label;
                  });
                r ? (t = r.options).push.apply(t, i()(n.options)) : e.push(n);
              }),
              e
            );
          }, []);
        },
        O = function () {
          var e,
            n,
            t,
            r,
            o =
              ((n = (0, j.a)({
                queryKey: ['myLlmList'],
                initialData: {},
                gcTime: 0,
                queryFn:
                  ((e = f()(
                    p()().mark(function e() {
                      var n, t, r;
                      return p()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), x.ZP.my_llm();
                            case 2:
                              return (
                                (t = e.sent),
                                (r = t.data),
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
              })),
              { data: n.data, loading: n.isFetching }),
            i = o.data,
            l = o.loading,
            s =
              ((r = (0, j.a)({
                queryKey: ['factoryList'],
                initialData: [],
                gcTime: 0,
                queryFn:
                  ((t = f()(
                    p()().mark(function e() {
                      var n, t, r;
                      return p()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), x.ZP.factories_list();
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
                    return t.apply(this, arguments);
                  }),
              })),
              { data: r.data, loading: r.isFetching }),
            u = s.data,
            d = s.loading;
          return {
            myLlmList: (0, _.useMemo)(
              function () {
                return Object.entries(i).map(function (e) {
                  var n,
                    t,
                    r = c()(e, 2),
                    o = r[0],
                    i = r[1];
                  return a()(
                    a()(
                      {
                        name: o,
                        logo:
                          null !==
                            (n =
                              null ===
                                (t = u.find(function (e) {
                                  return e.name === o;
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
                        return a()(a()({}, e), {}, { name: e.name });
                      }),
                    },
                  );
                });
              },
              [i, u],
            ),
            factoryList: (0, _.useMemo)(
              function () {
                var e = u.filter(function (e) {
                  return Object.keys(i).every(function (n) {
                    return n !== e.name;
                  });
                });
                return (0, v.tJ)(e);
              },
              [u, i],
            ),
            loading: l || d,
          };
        },
        L = function () {
          var e,
            n = (0, y.NL)(),
            t = (0, C.$G)().t,
            r = (0, k.D)({
              mutationKey: ['saveApiKey'],
              mutationFn:
                ((e = f()(
                  p()().mark(function e(r) {
                    var a, o;
                    return p()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), x.ZP.set_api_key(r);
                          case 2:
                            return (
                              (a = e.sent),
                              0 === (o = a.data).code &&
                                (Z.ZP.success(t('message.modified')),
                                n.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                n.invalidateQueries({
                                  queryKey: ['factoryList'],
                                })),
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
            saveApiKey: r.mutateAsync,
          };
        },
        N = function () {
          var e,
            n = (0, C.$G)().t,
            t = (0, k.D)({
              mutationKey: ['saveTenantInfo'],
              mutationFn:
                ((e = f()(
                  p()().mark(function e(t) {
                    var r, a;
                    return p()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), x.ZP.set_tenant_info(t);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (a = r.data).code &&
                                Z.ZP.success(n('message.modified')),
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
            saveTenantInfo: t.mutateAsync,
          };
        },
        T = function () {
          var e,
            n = (0, y.NL)(),
            t = (0, C.$G)().t,
            r = (0, k.D)({
              mutationKey: ['addLlm'],
              mutationFn:
                ((e = f()(
                  p()().mark(function e(r) {
                    var a, o;
                    return p()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), x.ZP.add_llm(r);
                          case 2:
                            return (
                              (a = e.sent),
                              0 === (o = a.data).code &&
                                (n.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                n.invalidateQueries({
                                  queryKey: ['factoryList'],
                                }),
                                Z.ZP.success(t('message.modified'))),
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
          return { data: r.data, loading: r.isPending, addLlm: r.mutateAsync };
        },
        D = function () {
          var e,
            n = (0, y.NL)(),
            t = (0, C.$G)().t,
            r = (0, k.D)({
              mutationKey: ['deleteLlm'],
              mutationFn:
                ((e = f()(
                  p()().mark(function e(r) {
                    var a, o;
                    return p()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), x.ZP.delete_llm(r);
                          case 2:
                            return (
                              (a = e.sent),
                              0 === (o = a.data).code &&
                                (n.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                n.invalidateQueries({
                                  queryKey: ['factoryList'],
                                }),
                                Z.ZP.success(t('message.deleted'))),
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
            deleteLlm: r.mutateAsync,
          };
        },
        S = function () {
          var e,
            n = (0, y.NL)(),
            t = (0, C.$G)().t,
            r = (0, k.D)({
              mutationKey: ['deleteFactory'],
              mutationFn:
                ((e = f()(
                  p()().mark(function e(r) {
                    var a, o;
                    return p()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), x.ZP.deleteFactory(r);
                          case 2:
                            return (
                              (a = e.sent),
                              0 === (o = a.data).code &&
                                (n.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                n.invalidateQueries({
                                  queryKey: ['factoryList'],
                                }),
                                Z.ZP.success(t('message.deleted'))),
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
            deleteFactory: r.mutateAsync,
          };
        };
    },
    64910: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return Gn;
          },
        });
      var r = t(97857),
        a = t.n(r),
        o = t(5574),
        i = t.n(o),
        l = t(13769),
        s = t.n(l),
        u = t(15009),
        c = t.n(u),
        d = t(99289),
        p = t.n(d),
        m = t(77680),
        f = t(25035),
        h = t(3089),
        g = t(24969),
        x = t(22150),
        v = t(85576),
        b = t(42075),
        j = t(34041),
        y = t(96074),
        k = t(83062),
        w = t(48928),
        Z = t(15867),
        _ = t(57557),
        C = t.n(_),
        M = t(62435),
        K = t(19632),
        P = t.n(K),
        I = t(96330),
        F = t(2938),
        O = t(39259),
        L = new Map([
          [
            ['pdf'],
            [
              I.K1.Naive,
              I.K1.Resume,
              I.K1.Manual,
              I.K1.Paper,
              I.K1.Book,
              I.K1.Laws,
              I.K1.Presentation,
              I.K1.One,
              I.K1.Qa,
              I.K1.KnowledgeGraph,
            ],
          ],
          [
            ['doc', 'docx'],
            [
              I.K1.Naive,
              I.K1.Resume,
              I.K1.Book,
              I.K1.Laws,
              I.K1.One,
              I.K1.Qa,
              I.K1.Manual,
              I.K1.KnowledgeGraph,
            ],
          ],
          [
            ['xlsx', 'xls'],
            [I.K1.Naive, I.K1.Qa, I.K1.Table, I.K1.One, I.K1.KnowledgeGraph],
          ],
          [['ppt', 'pptx'], [I.K1.Presentation]],
          [
            [
              'jpg',
              'jpeg',
              'png',
              'gif',
              'bmp',
              'tif',
              'tiff',
              'webp',
              'svg',
              'ico',
            ],
            [I.K1.Picture],
          ],
          [
            ['txt'],
            [
              I.K1.Naive,
              I.K1.Resume,
              I.K1.Book,
              I.K1.Laws,
              I.K1.One,
              I.K1.Qa,
              I.K1.Table,
              I.K1.KnowledgeGraph,
            ],
          ],
          [
            ['csv'],
            [
              I.K1.Naive,
              I.K1.Resume,
              I.K1.Book,
              I.K1.Laws,
              I.K1.One,
              I.K1.Qa,
              I.K1.Table,
              I.K1.KnowledgeGraph,
            ],
          ],
          [['md'], [I.K1.Naive, I.K1.Qa, I.K1.KnowledgeGraph]],
          [['json'], [I.K1.Naive, I.K1.KnowledgeGraph]],
          [['eml'], [I.K1.Email]],
        ]),
        N = function (e, n) {
          return n.filter(function (n) {
            return null == e
              ? void 0
              : e.some(function (e) {
                  return e === n.value;
                });
          });
        },
        T = [I.K1.Qa, I.K1.Table, I.K1.Resume, I.K1.KnowledgeGraph, I.K1.Tag],
        D = t(86968),
        S = t(10541),
        E = t(96486),
        R = t(25170),
        G = t(38218),
        q = t(84782),
        U = t(50960),
        V = t(54140),
        A = t(78656),
        B = t(85885),
        z = t(72103),
        Q = 'pageInputNumber___qm78X',
        W = 'questionIcon___d34w8',
        H = 'chunkMethod___tcugG',
        J = t(86074),
        Y = ['key', 'name'],
        $ = [
          I.K1.Qa,
          I.K1.Table,
          I.K1.Picture,
          I.K1.Resume,
          I.K1.One,
          I.K1.KnowledgeGraph,
        ],
        X = function (e) {
          var n,
            t = e.documentId,
            r = e.parserId,
            o = e.onOk,
            l = e.hideModal,
            u = e.visible,
            d = e.documentExtension,
            _ = e.parserConfig,
            K = e.loading,
            X = x.Z.useForm(),
            ee = i()(X, 1)[0],
            ne = (function (e, n, t, r) {
              var a = (0, M.useState)(),
                o = i()(a, 2),
                l = o[0],
                s = o[1],
                u = (0, O.XH)(),
                c = (0, F.sO)(r),
                d = (0, M.useMemo)(
                  function () {
                    var e = P()(L.keys()).find(function (e) {
                      return e.some(function (e) {
                        return e === t;
                      });
                    });
                    if (e) {
                      var n = L.get(e);
                      return N(null != n ? n : [], u);
                    }
                    return N(
                      [
                        I.K1.Naive,
                        I.K1.Resume,
                        I.K1.Book,
                        I.K1.Laws,
                        I.K1.One,
                        I.K1.Qa,
                        I.K1.Table,
                      ],
                      u,
                    );
                  },
                  [u, t],
                );
              return (
                (0, M.useEffect)(
                  function () {
                    s(n);
                  },
                  [n, e],
                ),
                {
                  parserList: d,
                  handleChange: function (e) {
                    c(e), s(e);
                  },
                  selectedTag: l,
                }
              );
            })(t, r, d, ee),
            te = ne.parserList,
            re = ne.handleChange,
            ae = ne.selectedTag,
            oe = (0, D.qM)('knowledgeDetails').t,
            ie = (0, S.PX)().data,
            le = (0, M.useMemo)(
              function () {
                var e;
                return null === (e = ie.parser_config) ||
                  void 0 === e ||
                  null === (e = e.graphrag) ||
                  void 0 === e
                  ? void 0
                  : e.use_graphrag;
              },
              [
                null === (n = ie.parser_config) ||
                void 0 === n ||
                null === (n = n.graphrag) ||
                void 0 === n
                  ? void 0
                  : n.use_graphrag,
              ],
            ),
            se = (function () {
              var e = p()(
                c()().mark(function e() {
                  var n, t, r, i;
                  return c()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), ee.validateFields();
                        case 2:
                          (r = e.sent),
                            (i = a()(
                              a()({}, r.parser_config),
                              {},
                              {
                                pages:
                                  null !==
                                    (n =
                                      null === (t = r.pages) || void 0 === t
                                        ? void 0
                                        : t.map(function (e) {
                                            return [e.from, e.to];
                                          })) && void 0 !== n
                                    ? n
                                    : [],
                              },
                            )),
                            o(ae, i);
                        case 5:
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
            ue = 'pdf' === d,
            ce = (0, M.useMemo)(
              function () {
                return (
                  ue &&
                  $.every(function (e) {
                    return e !== ae;
                  })
                );
              },
              [ae, ue],
            ),
            de = (0, M.useMemo)(
              function () {
                return (
                  ue &&
                  $.filter(function (e) {
                    return e !== I.K1.One;
                  }).every(function (e) {
                    return e !== ae;
                  })
                );
              },
              [ae, ue],
            ),
            pe = ae === I.K1.Naive || ae === I.K1.KnowledgeGraph,
            me = ae === I.K1.KnowledgeGraph,
            fe = ae === I.K1.Naive && 'xlsx' === d,
            he = (0, M.useCallback)(function (e) {
              return T.every(function (n) {
                return e !== n;
              });
            }, []);
          return (
            (0, M.useEffect)(
              function () {
                if (u) {
                  var e,
                    n,
                    t =
                      null !==
                        (e =
                          null == _ || null === (n = _.pages) || void 0 === n
                            ? void 0
                            : n.map(function (e) {
                                return { from: e[0], to: e[1] };
                              })) && void 0 !== e
                        ? e
                        : [];
                  ee.setFieldsValue({
                    pages: t.length > 0 ? t : [{ from: 1, to: 1024 }],
                    parser_config: a()(
                      a()({}, C()(_, 'pages')),
                      {},
                      {
                        graphrag: {
                          use_graphrag: (0, E.get)(
                            _,
                            'graphrag.use_graphrag',
                            le,
                          ),
                        },
                      },
                    ),
                  });
                }
              },
              [ee, ie.parser_config, _, le, u],
            ),
            (0, J.jsxs)(v.Z, {
              title: oe('chunkMethod'),
              open: u,
              onOk: se,
              onCancel: l,
              afterClose: function () {
                ee.resetFields();
              },
              confirmLoading: K,
              width: 700,
              children: [
                (0, J.jsx)(b.Z, {
                  size: [0, 8],
                  wrap: !0,
                  children: (0, J.jsx)(x.Z.Item, {
                    label: oe('chunkMethod'),
                    className: H,
                    children: (0, J.jsx)(j.Z, {
                      style: { width: 160 },
                      onChange: re,
                      value: ae,
                      options: te,
                    }),
                  }),
                }),
                (0, J.jsx)(y.Z, {}),
                (0, J.jsxs)(x.Z, {
                  name: 'dynamic_form_nest_item',
                  autoComplete: 'off',
                  form: ee,
                  className: 'space-y-4',
                  children: [
                    ce &&
                      (0, J.jsxs)(J.Fragment, {
                        children: [
                          (0, J.jsxs)(b.Z, {
                            children: [
                              (0, J.jsxs)('p', {
                                children: [oe('pageRanges'), ':'],
                              }),
                              (0, J.jsx)(k.Z, {
                                title: oe('pageRangesTip'),
                                children: (0, J.jsx)(f.Z, { className: W }),
                              }),
                            ],
                          }),
                          (0, J.jsx)(x.Z.List, {
                            name: 'pages',
                            children: function (e, n) {
                              var t = n.add,
                                r = n.remove;
                              return (0, J.jsxs)(J.Fragment, {
                                children: [
                                  e.map(function (e) {
                                    var n = e.key,
                                      t = e.name,
                                      o = s()(e, Y);
                                    return (0, J.jsxs)(
                                      b.Z,
                                      {
                                        style: { display: 'flex' },
                                        align: 'baseline',
                                        children: [
                                          (0, J.jsx)(
                                            x.Z.Item,
                                            a()(
                                              a()({}, o),
                                              {},
                                              {
                                                name: [t, 'from'],
                                                dependencies:
                                                  t > 0 ? [t - 1, 'to'] : [],
                                                rules: [
                                                  {
                                                    required: !0,
                                                    message: oe('fromMessage'),
                                                  },
                                                  function (e) {
                                                    var n = e.getFieldValue;
                                                    return {
                                                      validator: function (
                                                        e,
                                                        r,
                                                      ) {
                                                        return 0 === t ||
                                                          !r ||
                                                          n([
                                                            'pages',
                                                            t - 1,
                                                            'to',
                                                          ]) < r
                                                          ? Promise.resolve()
                                                          : Promise.reject(
                                                              new Error(
                                                                oe(
                                                                  'greaterThanPrevious',
                                                                ),
                                                              ),
                                                            );
                                                      },
                                                    };
                                                  },
                                                ],
                                                children: (0, J.jsx)(w.Z, {
                                                  placeholder:
                                                    oe('fromPlaceholder'),
                                                  min: 0,
                                                  precision: 0,
                                                  className: Q,
                                                }),
                                              },
                                            ),
                                          ),
                                          (0, J.jsx)(
                                            x.Z.Item,
                                            a()(
                                              a()({}, o),
                                              {},
                                              {
                                                name: [t, 'to'],
                                                dependencies: [t, 'from'],
                                                rules: [
                                                  {
                                                    required: !0,
                                                    message: oe('toMessage'),
                                                  },
                                                  function (e) {
                                                    var n = e.getFieldValue;
                                                    return {
                                                      validator: function (
                                                        e,
                                                        r,
                                                      ) {
                                                        return !r ||
                                                          n([
                                                            'pages',
                                                            t,
                                                            'from',
                                                          ]) < r
                                                          ? Promise.resolve()
                                                          : Promise.reject(
                                                              new Error(
                                                                oe(
                                                                  'greaterThan',
                                                                ),
                                                              ),
                                                            );
                                                      },
                                                    };
                                                  },
                                                ],
                                                children: (0, J.jsx)(w.Z, {
                                                  placeholder:
                                                    oe('toPlaceholder'),
                                                  min: 0,
                                                  precision: 0,
                                                  className: Q,
                                                }),
                                              },
                                            ),
                                          ),
                                          t > 0 &&
                                            (0, J.jsx)(h.Z, {
                                              onClick: function () {
                                                return r(t);
                                              },
                                            }),
                                        ],
                                      },
                                      n,
                                    );
                                  }),
                                  (0, J.jsx)(x.Z.Item, {
                                    children: (0, J.jsx)(Z.ZP, {
                                      type: 'dashed',
                                      onClick: function () {
                                        return t();
                                      },
                                      block: !0,
                                      icon: (0, J.jsx)(g.Z, {}),
                                      children: oe('addPage'),
                                    }),
                                  }),
                                ],
                              });
                            },
                          }),
                        ],
                      }),
                    ce &&
                      (0, J.jsx)(x.Z.Item, {
                        noStyle: !0,
                        dependencies: [['parser_config', 'layout_recognize']],
                        children: function (e) {
                          return (
                            (0, e.getFieldValue)([
                              'parser_config',
                              'layout_recognize',
                            ]) &&
                            (0, J.jsx)(x.Z.Item, {
                              name: ['parser_config', 'task_page_size'],
                              label: oe('taskPageSize'),
                              tooltip: oe('taskPageSizeTip'),
                              initialValue: 12,
                              rules: [
                                {
                                  required: !0,
                                  message: oe('taskPageSizeMessage'),
                                },
                              ],
                              children: (0, J.jsx)(w.Z, { min: 1, max: 128 }),
                            })
                          );
                        },
                      }),
                    (0, J.jsxs)(G.d, {
                      show: de || pe,
                      children: [
                        de && (0, J.jsx)(A.Z, {}),
                        pe &&
                          (0, J.jsxs)(J.Fragment, {
                            children: [
                              (0, J.jsx)(m.Z, {
                                max: ae === I.K1.KnowledgeGraph ? 16384 : 2048,
                              }),
                              (0, J.jsx)(q.Z, {}),
                            ],
                          }),
                      ],
                    }),
                    (0, J.jsxs)(G.d, {
                      show: he(ae) || fe,
                      children: [
                        he(ae) &&
                          (0, J.jsxs)(J.Fragment, {
                            children: [
                              (0, J.jsx)(R.r, {}),
                              (0, J.jsx)(R.w, {}),
                            ],
                          }),
                        fe && (0, J.jsx)(V.Z, {}),
                      ],
                    }),
                    (0, B.J3)(ae) &&
                      (0, J.jsx)(G.d, { children: (0, J.jsx)(B.ZP, {}) }),
                    (0, z.hc)(ae) && le && (0, J.jsx)(z._G, {}),
                    me && (0, J.jsx)(U.Z, {}),
                  ],
                }),
              ],
            })
          );
        },
        ee = t(46693),
        ne = t(93352),
        te = t(5089),
        re = t(22850),
        ae = t(86250),
        oe = t(72269),
        ie = t(43106),
        le = t(67421),
        se = t(79531),
        ue = function (e) {
          var n = e.visible,
            t = e.hideModal,
            r = e.onOk,
            a = x.Z.useForm(),
            o = i()(a, 1)[0],
            l = (function () {
              var e = p()(
                c()().mark(function e() {
                  var n;
                  return c()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), o.validateFields();
                        case 2:
                          (n = e.sent), r(n.name);
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
          return (0, J.jsx)(v.Z, {
            title: 'File Name',
            open: n,
            onOk: l,
            onCancel: t,
            children: (0, J.jsx)(x.Z, {
              form: o,
              name: 'validateOnly',
              labelCol: { span: 4 },
              wrapperCol: { span: 20 },
              style: { maxWidth: 600 },
              autoComplete: 'off',
              children: (0, J.jsx)(x.Z.Item, {
                label: 'File Name',
                name: 'name',
                rules: [{ required: !0, message: 'Please input name!' }],
                children: (0, J.jsx)(se.Z, {}),
              }),
            }),
          });
        },
        ce = Object.defineProperty,
        de = Object.getOwnPropertySymbols,
        pe = Object.prototype.hasOwnProperty,
        me = Object.prototype.propertyIsEnumerable,
        fe = (e, n, t) =>
          n in e
            ? ce(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[n] = t);
      const he = (e) =>
        M.createElement(
          'svg',
          ((e, n) => {
            for (var t in n || (n = {})) pe.call(n, t) && fe(e, t, n[t]);
            if (de) for (var t of de(n)) me.call(n, t) && fe(e, t, n[t]);
            return e;
          })(
            {
              width: 22,
              height: 22,
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            e,
          ),
          M.createElement('path', {
            d: 'M.5 11C.5 5.201 5.201.5 11 .5S21.5 5.201 21.5 11 16.799 21.5 11 21.5.5 16.799.5 11Z',
            fill: '#FEF3F2',
          }),
          M.createElement('path', {
            d: 'M.5 11C.5 5.201 5.201.5 11 .5S21.5 5.201 21.5 11 16.799 21.5 11 21.5.5 16.799.5 11Z',
            stroke: '#FECDCA',
          }),
          M.createElement('path', {
            d: 'm14 8-6 6m0-6 6 6',
            stroke: '#F04438',
            strokeWidth: 1.5,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        );
      var ge = Object.defineProperty,
        xe = Object.getOwnPropertySymbols,
        ve = Object.prototype.hasOwnProperty,
        be = Object.prototype.propertyIsEnumerable,
        je = (e, n, t) =>
          n in e
            ? ge(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[n] = t);
      const ye = (e) =>
        M.createElement(
          'svg',
          ((e, n) => {
            for (var t in n || (n = {})) ve.call(n, t) && je(e, t, n[t]);
            if (xe) for (var t of xe(n)) be.call(n, t) && je(e, t, n[t]);
            return e;
          })(
            {
              width: 20,
              height: 20,
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            e,
          ),
          M.createElement('path', {
            d: 'M13.333 5v-.667c0-.933 0-1.4-.181-1.756a1.667 1.667 0 0 0-.729-.729c-.356-.181-.823-.181-1.756-.181H9.333c-.933 0-1.4 0-1.756.181-.314.16-.569.415-.729.729-.181.356-.181.823-.181 1.756V5m1.666 4.583v4.167m3.334-4.167v4.167M2.5 5h15m-1.667 0v9.333c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093c-.534.272-1.235.272-2.635.272H8.167c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093c-.272-.534-.272-1.235-.272-2.635V5',
            stroke: '#667085',
            strokeWidth: 1.667,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        );
      var ke = Object.defineProperty,
        we = Object.getOwnPropertySymbols,
        Ze = Object.prototype.hasOwnProperty,
        _e = Object.prototype.propertyIsEnumerable,
        Ce = (e, n, t) =>
          n in e
            ? ke(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[n] = t);
      const Me = (e) =>
        M.createElement(
          'svg',
          ((e, n) => {
            for (var t in n || (n = {})) Ze.call(n, t) && Ce(e, t, n[t]);
            if (we) for (var t of we(n)) _e.call(n, t) && Ce(e, t, n[t]);
            return e;
          })(
            {
              className: 'disable_svg__icon',
              viewBox: '0 0 1024 1024',
              xmlns: 'http://www.w3.org/2000/svg',
              width: 22,
              height: 22,
            },
            e,
          ),
          M.createElement('path', {
            d: 'M222.635 272.299A382.4 382.4 0 0 0 138.667 512c0 212.117 171.904 384 384 384 90.666 0 174.016-31.424 239.701-83.968L222.635 272.299zm60.33-60.331L822.7 751.701A382.4 382.4 0 0 0 906.667 512c0-212.117-171.904-384-384-384-90.667 0-174.016 31.424-239.702 83.968zM53.333 512c0-259.221 210.091-469.333 469.334-469.333C781.888 42.667 992 252.757 992 512c0 259.221-210.09 469.333-469.333 469.333-259.222 0-469.334-210.09-469.334-469.333z',
            fill: '#F04438',
          }),
        );
      var Ke = Object.defineProperty,
        Pe = Object.getOwnPropertySymbols,
        Ie = Object.prototype.hasOwnProperty,
        Fe = Object.prototype.propertyIsEnumerable,
        Oe = (e, n, t) =>
          n in e
            ? Ke(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[n] = t);
      const Le = (e) =>
        M.createElement(
          'svg',
          ((e, n) => {
            for (var t in n || (n = {})) Ie.call(n, t) && Oe(e, t, n[t]);
            if (Pe) for (var t of Pe(n)) Fe.call(n, t) && Oe(e, t, n[t]);
            return e;
          })(
            {
              className: 'enable_svg__icon',
              viewBox: '0 0 1024 1024',
              xmlns: 'http://www.w3.org/2000/svg',
              width: 22,
              height: 22,
            },
            e,
          ),
          M.createElement('path', {
            d: 'M512 0a512 512 0 1 0 0 1024A512 512 0 0 0 512 0zm0 990.2a438.2 438.2 0 1 1 0-956.4 438.2 438.2 0 0 1 0 956.4z',
            fill: '#abefc6',
          }),
          M.createElement('path', {
            d: 'M448.1 584.3 322.4 458.6l-78.9 78.9L449.1 743h.1l.5.5 325.9-325.9-80.4-80.4z',
            fill: '#17b26a',
          }),
        );
      var Ne = Object.defineProperty,
        Te = Object.getOwnPropertySymbols,
        De = Object.prototype.hasOwnProperty,
        Se = Object.prototype.propertyIsEnumerable,
        Ee = (e, n, t) =>
          n in e
            ? Ne(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[n] = t);
      const Re = (e) =>
        M.createElement(
          'svg',
          ((e, n) => {
            for (var t in n || (n = {})) De.call(n, t) && Ee(e, t, n[t]);
            if (Te) for (var t of Te(n)) Se.call(n, t) && Ee(e, t, n[t]);
            return e;
          })(
            {
              width: 22,
              height: 22,
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            e,
          ),
          M.createElement('path', {
            d: 'M11 21.5C5.201 21.5.5 16.799.5 11S5.201.5 11 .5 21.5 5.201 21.5 11 16.799 21.5 11 21.5Z',
            fill: '#ECFDF3',
          }),
          M.createElement('path', {
            d: 'M11 21.5C5.201 21.5.5 16.799.5 11S5.201.5 11 .5 21.5 5.201 21.5 11 16.799 21.5 11 21.5Z',
            stroke: '#ABEFC6',
          }),
          M.createElement('path', {
            d: 'M7.5 7.495c0-.486 0-.729.101-.862a.5.5 0 0 1 .37-.198c.167-.01.369.125.773.394l5.258 3.505c.333.223.5.334.558.475a.5.5 0 0 1 0 .383c-.058.14-.225.251-.559.474L8.745 15.17c-.404.27-.606.404-.774.394a.5.5 0 0 1-.369-.198c-.101-.133-.101-.376-.101-.862v-7.01Z',
            stroke: '#17B26A',
            strokeWidth: 1.5,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        );
      var Ge = t(15360),
        qe = t(26911),
        Ue = t(80882),
        Ve = t(68795),
        Ae = t(85418),
        Be = t(64712),
        ze = t(9783),
        Qe = t.n(ze),
        We = Qe()(
          Qe()(
            Qe()(
              Qe()(
                Qe()({}, I.cG.UNSTART, { label: 'UNSTART', color: 'cyan' }),
                I.cG.RUNNING,
                { label: 'Parsing', color: 'blue' },
              ),
              I.cG.CANCEL,
              { label: 'CANCEL', color: 'orange' },
            ),
            I.cG.DONE,
            { label: 'SUCCESS', color: 'geekblue' },
          ),
          I.cG.FAIL,
          { label: 'FAIL', color: 'red' },
        ),
        He = {
          datasetWrapper: 'datasetWrapper___q27L3',
          filter: 'filter___ETTRo',
          deleteIconWrapper: 'deleteIconWrapper___DKg5C',
          img: 'img___JlbZB',
          column: 'column___fvjI4',
          toChunks: 'toChunks___LX_Ow',
          pageInputNumber: 'pageInputNumber___hsRez',
          questionIcon: 'questionIcon___JX1Gh',
          nameText: 'nameText___Fvf8C',
        },
        Je = function (e) {
          var n = e.searchString,
            t = e.selectedRowKeys,
            r = e.showCreateModal,
            a = e.showDocumentUploadModal,
            o = e.handleInputChange,
            i = e.documents,
            l = (0, D.qM)('knowledgeDetails').t,
            s = (0, ne.an)().removeDocument,
            u = (0, D.I3)(),
            c = (0, ne.QG)().runDocumentByIds,
            d = (0, ne.jz)().setDocumentStatus,
            p = (0, M.useMemo)(
              function () {
                return [
                  {
                    key: '1',
                    onClick: a,
                    label: (0, J.jsx)('div', {
                      children: (0, J.jsx)(Z.ZP, {
                        type: 'link',
                        children: (0, J.jsxs)(b.Z, {
                          children: [(0, J.jsx)(Ge.Z, {}), l('localFiles')],
                        }),
                      }),
                    }),
                  },
                  { type: 'divider' },
                  {
                    key: '3',
                    onClick: r,
                    label: (0, J.jsx)('div', {
                      children: (0, J.jsxs)(Z.ZP, {
                        type: 'link',
                        children: [(0, J.jsx)(qe.Z, {}), l('emptyFiles')],
                      }),
                    }),
                  },
                ];
              },
              [a, r, l],
            ),
            m = (0, M.useCallback)(
              function () {
                var e = t.filter(function (e) {
                  return !i
                    .filter(function (e) {
                      return e.run === I.cG.RUNNING;
                    })
                    .some(function (n) {
                      return n.id === e;
                    });
                });
                0 !== e.length
                  ? u({
                      onOk: function () {
                        s(e);
                      },
                    })
                  : Be.Am.error(l('theDocumentBeingParsedCannotBeDeleted'));
              },
              [t, u, i, l, s],
            ),
            f = (0, M.useCallback)(
              function (e) {
                c({ documentIds: t, run: e, shouldDelete: !1 });
              },
              [c, t],
            ),
            h = (0, M.useCallback)(
              function () {
                f(1);
              },
              [f],
            ),
            x = (0, M.useCallback)(
              function () {
                f(2);
              },
              [f],
            ),
            v = (0, M.useCallback)(
              function (e) {
                t.forEach(function (n) {
                  d({ status: e, documentId: n });
                });
              },
              [t, d],
            ),
            j = (0, M.useCallback)(
              function () {
                v(!0);
              },
              [v],
            ),
            y = (0, M.useCallback)(
              function () {
                v(!1);
              },
              [v],
            ),
            k = 0 === t.length,
            w = (0, M.useMemo)(
              function () {
                return [
                  {
                    key: '0',
                    onClick: j,
                    label: (0, J.jsxs)(ae.Z, {
                      gap: 10,
                      children: [
                        (0, J.jsx)(Le, {}),
                        (0, J.jsx)('b', { children: l('enabled') }),
                      ],
                    }),
                  },
                  {
                    key: '1',
                    onClick: y,
                    label: (0, J.jsxs)(ae.Z, {
                      gap: 10,
                      children: [
                        (0, J.jsx)(Me, {}),
                        (0, J.jsx)('b', { children: l('disabled') }),
                      ],
                    }),
                  },
                  { type: 'divider' },
                  {
                    key: '2',
                    onClick: h,
                    label: (0, J.jsxs)(ae.Z, {
                      gap: 10,
                      children: [
                        (0, J.jsx)(Re, {}),
                        (0, J.jsx)('b', { children: l('run') }),
                      ],
                    }),
                  },
                  {
                    key: '3',
                    onClick: x,
                    label: (0, J.jsxs)(ae.Z, {
                      gap: 10,
                      children: [
                        (0, J.jsx)(he, {}),
                        (0, J.jsx)('b', { children: l('cancel') }),
                      ],
                    }),
                  },
                  { type: 'divider' },
                  {
                    key: '4',
                    onClick: m,
                    label: (0, J.jsxs)(ae.Z, {
                      gap: 10,
                      children: [
                        (0, J.jsx)('span', {
                          className: He.deleteIconWrapper,
                          children: (0, J.jsx)(ye, { width: 18 }),
                        }),
                        (0, J.jsx)('b', {
                          children: l('delete', { keyPrefix: 'common' }),
                        }),
                      ],
                    }),
                  },
                ];
              },
              [m, h, x, l, y, j],
            );
          return (0, J.jsxs)('div', {
            className: He.filter,
            children: [
              (0, J.jsx)(Ae.Z, {
                menu: { items: w },
                placement: 'bottom',
                arrow: !1,
                disabled: k,
                children: (0, J.jsx)(Z.ZP, {
                  children: (0, J.jsxs)(b.Z, {
                    children: [
                      (0, J.jsxs)('b', { children: [' ', l('bulk')] }),
                      (0, J.jsx)(Ue.Z, {}),
                    ],
                  }),
                }),
              }),
              (0, J.jsxs)(b.Z, {
                children: [
                  (0, J.jsx)(se.Z, {
                    placeholder: l('searchFiles'),
                    value: n,
                    style: { width: 220 },
                    allowClear: !0,
                    onChange: o,
                    prefix: (0, J.jsx)(Ve.Z, {}),
                  }),
                  (0, J.jsx)(Ae.Z, {
                    menu: { items: p },
                    trigger: ['click'],
                    children: (0, J.jsx)(Z.ZP, {
                      type: 'primary',
                      icon: (0, J.jsx)(g.Z, {}),
                      children: l('addFile'),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Ye = t(96100),
        $e = t(42028),
        Xe = t(51331),
        en = t(2830),
        nn = t(86548),
        tn = t(48689),
        rn = t(23430),
        an = function (e) {
          return e === I.cG.RUNNING;
        },
        on = 'iconButton___btHnB',
        ln = function (e) {
          var n = e.record,
            t = e.setCurrentRecord,
            r = e.showRenameModal,
            a = e.showChangeParserModal,
            o = e.showSetMetaModal,
            i = n.id,
            l = an(n.run),
            s = (0, D.qM)('knowledgeDetails').t,
            u = (0, ne.an)().removeDocument,
            c = (0, D.I3)(),
            d = n.type === I.n_.Virtual,
            p = (0, M.useCallback)(
              function () {
                t(n);
              },
              [n, t],
            ),
            m = (0, M.useCallback)(
              function () {
                p(), o();
              },
              [p, o],
            ),
            f = [
              {
                key: '1',
                label: (0, J.jsx)('div', {
                  className: 'flex flex-col',
                  children: (0, J.jsx)(Z.ZP, {
                    type: 'link',
                    onClick: function () {
                      p(), a();
                    },
                    children: s('chunkMethod'),
                  }),
                }),
              },
              { type: 'divider' },
              {
                key: '2',
                label: (0, J.jsx)('div', {
                  className: 'flex flex-col',
                  children: (0, J.jsx)(Z.ZP, {
                    type: 'link',
                    onClick: m,
                    children: s('setMetaData'),
                  }),
                }),
              },
            ];
          return (0, J.jsxs)(b.Z, {
            size: 0,
            children: [
              d ||
                (0, J.jsx)(Ae.Z, {
                  menu: { items: f },
                  trigger: ['click'],
                  disabled: l || 'tag' === n.parser_id,
                  children: (0, J.jsx)(Z.ZP, {
                    type: 'text',
                    className: on,
                    children: (0, J.jsx)(en.Z, { size: 20 }),
                  }),
                }),
              (0, J.jsx)(k.Z, {
                title: s('rename', { keyPrefix: 'common' }),
                children: (0, J.jsx)(Z.ZP, {
                  type: 'text',
                  disabled: l,
                  onClick: function () {
                    p(), r();
                  },
                  className: on,
                  children: (0, J.jsx)(nn.Z, { size: 20 }),
                }),
              }),
              (0, J.jsx)(k.Z, {
                title: s('delete', { keyPrefix: 'common' }),
                children: (0, J.jsx)(Z.ZP, {
                  type: 'text',
                  disabled: l,
                  onClick: function () {
                    var e;
                    l ||
                      c({
                        onOk: function () {
                          return u([i]);
                        },
                        content:
                          null != n &&
                          null !== (e = n.parser_config) &&
                          void 0 !== e &&
                          null !== (e = e.graphrag) &&
                          void 0 !== e &&
                          e.use_graphrag
                            ? s('deleteDocumentConfirmContent')
                            : '',
                      });
                  },
                  className: on,
                  children: (0, J.jsx)(tn.Z, { size: 20 }),
                }),
              }),
              d ||
                (0, J.jsx)(k.Z, {
                  title: s('download', { keyPrefix: 'common' }),
                  children: (0, J.jsx)(Z.ZP, {
                    type: 'text',
                    disabled: l,
                    onClick: function () {
                      (0, Xe.AG)({ id: i, filename: n.name });
                    },
                    className: on,
                    children: (0, J.jsx)(rn.Z, { size: 20 }),
                  }),
                }),
            ],
          });
        },
        sn = Object.defineProperty,
        un = Object.getOwnPropertySymbols,
        cn = Object.prototype.hasOwnProperty,
        dn = Object.prototype.propertyIsEnumerable,
        pn = (e, n, t) =>
          n in e
            ? sn(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[n] = t);
      const mn = (e) =>
        M.createElement(
          'svg',
          ((e, n) => {
            for (var t in n || (n = {})) cn.call(n, t) && pn(e, t, n[t]);
            if (un) for (var t of un(n)) dn.call(n, t) && pn(e, t, n[t]);
            return e;
          })(
            {
              width: 20,
              height: 20,
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            e,
          ),
          M.createElement('path', {
            d: 'M14.167 4.271A7.083 7.083 0 0 1 10 17.083h-.417m-3.75-1.354A7.083 7.083 0 0 1 10 2.917h.417m.416 15.75L9.167 17l1.666-1.667M9.167 4.667 10.833 3 9.167 1.333',
            stroke: '#17B26A',
            strokeWidth: 1.667,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        );
      var fn = t(55241),
        hn = t(66309),
        gn = t(40411),
        xn = t(86738),
        vn = t(93967),
        bn = t.n(vn),
        jn = t(59632),
        yn = t.n(jn),
        kn = 'popoverContent___Y8ZAO',
        wn = 'popoverContentItem___Q3slq',
        Zn = 'popoverContentText___nUr7b',
        _n = 'popoverContentErrorLabel___vthqR',
        Cn = 'operationIcon___PnxaJ',
        Mn = Qe()(
          Qe()(
            Qe()(
              Qe()(Qe()({}, I.cG.UNSTART, Re), I.cG.RUNNING, he),
              I.cG.CANCEL,
              mn,
            ),
            I.cG.DONE,
            mn,
          ),
          I.cG.FAIL,
          mn,
        ),
        Kn = function (e) {
          var n,
            t,
            r = e.record,
            a = (0, D.qM)('knowledgeDetails').t,
            o = [
              {
                key: 'process_begin_at',
                label: a('processBeginAt'),
                children: r.process_begin_at,
              },
              {
                key: 'process_duation',
                label: a('processDuration'),
                children: ''.concat(r.process_duation.toFixed(2), ' s'),
              },
              {
                key: 'progress_msg',
                label: a('progressMsg'),
                children:
                  ((n = r.progress_msg.trim()),
                  (t = n.replace(/(\n)\1+/g, '$1')),
                  yn()(t, /(\[ERROR\].+\s)/g, function (e, n) {
                    return (0, J.jsx)(
                      'span',
                      { className: _n, children: e },
                      n,
                    );
                  })),
              },
            ];
          return (0, J.jsx)(ae.Z, {
            vertical: !0,
            className: kn,
            children: o.map(function (e, n) {
              return (0, J.jsxs)(
                'div',
                {
                  className: n < 2 ? wn : '',
                  children: [
                    (0, J.jsxs)('b', { children: [e.label, ':'] }),
                    (0, J.jsx)('div', { className: Zn, children: e.children }),
                  ],
                },
                e.key,
              );
            }),
          });
        },
        Pn = function (e) {
          var n = e.record,
            t = n.run,
            r = We[t],
            a = (0, le.$G)().t,
            o = (function (e) {
              var n = (0, ne.QG)(),
                t = n.runDocumentByIds,
                r = n.loading,
                a = (0, M.useState)(''),
                o = i()(a, 2),
                l = o[0],
                s = o[1],
                u = r && '' !== l && l === e,
                d = (function () {
                  var e = p()(
                    c()().mark(function e(n, r) {
                      var a,
                        o = arguments;
                      return c()().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((a =
                                    o.length > 2 && void 0 !== o[2] && o[2]),
                                  !u)
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt('return');
                              case 3:
                                return (
                                  s(n),
                                  (e.prev = 4),
                                  (e.next = 7),
                                  t({
                                    documentIds: [n],
                                    run: r ? 2 : 1,
                                    shouldDelete: a,
                                  })
                                );
                              case 7:
                                s(''), (e.next = 13);
                                break;
                              case 10:
                                (e.prev = 10), (e.t0 = e.catch(4)), s('');
                              case 13:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[4, 10]],
                      );
                    }),
                  );
                  return function (n, t) {
                    return e.apply(this, arguments);
                  };
                })();
              return { handleRunDocumentByIds: d, loading: u };
            })(n.id),
            l = o.handleRunDocumentByIds,
            s = an(t),
            u = Mn[t],
            d = a('knowledgeDetails.runningStatus'.concat(t)),
            m = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return function () {
                l(n.id, s, e);
              };
            };
          return n.type === I.n_.Virtual
            ? null
            : (0, J.jsxs)(ae.Z, {
                justify: 'space-between',
                align: 'center',
                children: [
                  (0, J.jsx)(fn.Z, {
                    content: (0, J.jsx)(Kn, { record: n }),
                    children: (0, J.jsx)(hn.Z, {
                      color: r.color,
                      children: s
                        ? (0, J.jsxs)(b.Z, {
                            children: [
                              (0, J.jsx)(gn.Z, { color: r.color }),
                              d,
                              (0, J.jsxs)('span', {
                                children: [(100 * n.progress).toFixed(2), '%'],
                              }),
                            ],
                          })
                        : d,
                    }),
                  }),
                  (0, J.jsx)(xn.Z, {
                    title: a('knowledgeDetails.redo', {
                      chunkNum: n.chunk_num,
                    }),
                    onConfirm: m(!0),
                    onCancel: m(!1),
                    disabled: 0 === n.chunk_num,
                    okText: a('common.ok'),
                    cancelText: a('common.cancel'),
                    children: (0, J.jsx)('div', {
                      className: bn()(Cn),
                      onClick: 0 === n.chunk_num ? m(!1) : function () {},
                      children: (0, J.jsx)(u, {}),
                    }),
                  }),
                ],
              });
        },
        In = function (e) {
          var n = e.visible,
            t = e.onOk,
            r = e.loading,
            a = e.initialName,
            o = e.hideModal,
            l = x.Z.useForm(),
            s = i()(l, 1)[0],
            u = (0, D.qM)('common').t,
            d = (function () {
              var e = p()(
                c()().mark(function e() {
                  var n;
                  return c()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), s.validateFields();
                        case 2:
                          (n = e.sent), t(n.name);
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
            (0, M.useEffect)(
              function () {
                n && s.setFieldValue('name', a);
              },
              [a, s, n],
            ),
            (0, J.jsx)(v.Z, {
              title: u('rename'),
              open: n,
              onOk: d,
              onCancel: o,
              okButtonProps: { loading: r },
              children: (0, J.jsx)(x.Z, {
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
                form: s,
                children: (0, J.jsx)(x.Z.Item, {
                  label: u('name'),
                  name: 'name',
                  rules: [{ required: !0, message: u('namePlaceholder') }],
                  children: (0, J.jsx)(se.Z, {}),
                }),
              }),
            })
          );
        },
        Fn = function (e) {
          var n = e.visible,
            t = e.hideModal,
            r = e.onOk,
            a = x.Z.useForm(),
            o = i()(a, 1)[0],
            l = (0, D.qM)('knowledgeDetails').t,
            s = (function () {
              var e = p()(
                c()().mark(function e() {
                  var n;
                  return c()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), o.validateFields();
                        case 2:
                          (n = e.sent), r(n.name, n.url);
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
          return (0, J.jsx)(v.Z, {
            title: l('webCrawl'),
            open: n,
            onOk: s,
            onCancel: t,
            children: (0, J.jsxs)(x.Z, {
              form: o,
              name: 'validateOnly',
              labelCol: { span: 4 },
              wrapperCol: { span: 20 },
              style: { maxWidth: 600 },
              autoComplete: 'off',
              children: [
                (0, J.jsx)(x.Z.Item, {
                  label: 'Name',
                  name: 'name',
                  rules: [
                    { required: !0, message: 'Please input name!' },
                    {
                      max: 10,
                      message: 'The maximum length of name is 128 characters',
                    },
                  ],
                  children: (0, J.jsx)(se.Z, { placeholder: 'Document name' }),
                }),
                (0, J.jsx)(x.Z.Item, {
                  label: 'URL',
                  name: 'url',
                  rules: [
                    { required: !0, message: 'Please input url!' },
                    {
                      pattern: new RegExp(
                        '(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]',
                      ),
                      message: 'Please enter a valid URL!',
                    },
                  ],
                  children: (0, J.jsx)(se.Z, {
                    placeholder: 'https://www.baidu.com',
                  }),
                }),
              ],
            }),
          });
        },
        On = t(11218),
        Ln = t(28382),
        Nn = t(1211),
        Tn = t(63764),
        Dn = t(27856),
        Sn = t.n(Dn);
      function En(e) {
        var n = e.visible,
          t = e.hideModal,
          r = e.onOk,
          a = e.initialMetaData,
          o = (0, le.$G)().t,
          l = x.Z.useForm(),
          s = i()(l, 1)[0],
          u = (0, M.useCallback)(
            p()(
              c()().mark(function e() {
                var n;
                return c()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), s.validateFields();
                      case 2:
                        (n = e.sent), null == r || r(n.meta);
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
            [s, r],
          );
        return (
          (0, M.useEffect)(
            function () {
              s.setFieldValue('meta', JSON.stringify(a, null, 4));
            },
            [s, a],
          ),
          (0, J.jsx)(v.Z, {
            title: o('knowledgeDetails.setMetaData'),
            open: n,
            onOk: u,
            onCancel: t,
            children: (0, J.jsx)(x.Z, {
              name: 'basic',
              initialValues: { remember: !0 },
              autoComplete: 'off',
              layout: 'vertical',
              form: s,
              children: (0, J.jsx)(x.Z.Item, {
                label: o('knowledgeDetails.metaData'),
                name: 'meta',
                rules: [
                  {
                    required: !0,
                    validator: function (e, n) {
                      try {
                        return JSON.parse(n), Promise.resolve();
                      } catch (e) {
                        return Promise.reject(
                          new Error(o('knowledgeDetails.pleaseInputJson')),
                        );
                      }
                    },
                  },
                ],
                tooltip: (0, J.jsx)('div', {
                  dangerouslySetInnerHTML: {
                    __html: Sn().sanitize(
                      o('knowledgeDetails.documentMetaTips'),
                    ),
                  },
                }),
                children: (0, J.jsx)(Tn.ZP, {
                  height: 200,
                  defaultLanguage: 'json',
                  theme: 'vs-dark',
                }),
              }),
            }),
          })
        );
      }
      Tn._m.config({ paths: { vs: '/vs' } });
      var Rn = re.Z.Text,
        Gn = function () {
          var e,
            n,
            t,
            r,
            o,
            l,
            s = (0, ne.v3)(),
            u = s.searchString,
            d = s.documents,
            m = s.pagination,
            f = s.handleInputChange,
            h = (0, O.XH)(),
            g = (0, ne.jz)().setDocumentStatus,
            x = ((e = (0, $e.s0)()),
            (n = (0, Ye.pE)().knowledgeId),
            {
              linkToUploadPage: (0, M.useCallback)(
                function () {
                  e('/knowledge/dataset/upload?id='.concat(n));
                },
                [e, n],
              ),
              toChunk: (0, M.useCallback)(
                function (t) {
                  e(
                    '/knowledge/'
                      .concat(I.Rx.Dataset, '/chunk?id=')
                      .concat(n, '&doc_id=')
                      .concat(t),
                  );
                },
                [e, n],
              ),
            }).toChunk,
            v = (0, F.cE)(),
            b = v.currentRecord,
            j = v.setRecord,
            w = (function (e) {
              var n = (0, ne.A3)(),
                t = n.saveName,
                r = n.loading,
                a = (0, D.pG)(),
                o = a.visible,
                i = a.hideModal,
                l = a.showModal,
                s = (0, M.useCallback)(
                  (function () {
                    var n = p()(
                      c()().mark(function n(r) {
                        return c()().wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.next = 2), t({ documentId: e, name: r })
                                );
                              case 2:
                                0 === n.sent && i();
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
                  [i, t, e],
                );
              return {
                renameLoading: r,
                onRenameOk: s,
                renameVisible: o,
                hideRenameModal: i,
                showRenameModal: l,
              };
            })(b.id),
            Z = w.renameLoading,
            _ = w.onRenameOk,
            C = w.renameVisible,
            K = w.hideRenameModal,
            P = w.showRenameModal,
            L = (function () {
              var e = (0, ne.GH)(),
                n = e.createDocument,
                t = e.loading,
                r = (0, D.pG)(),
                a = r.visible,
                o = r.hideModal,
                i = r.showModal,
                l = (0, M.useCallback)(
                  (function () {
                    var e = p()(
                      c()().mark(function e(t) {
                        return c()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), n(t);
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
                  [o, n],
                );
              return {
                createLoading: t,
                onCreateOk: l,
                createVisible: a,
                hideCreateModal: o,
                showCreateModal: i,
              };
            })(),
            N = L.createLoading,
            T = L.onCreateOk,
            S = L.createVisible,
            E = L.hideCreateModal,
            R = L.showCreateModal,
            G = (function (e) {
              var n = (0, ne.wk)(),
                t = n.setDocumentParser,
                r = n.loading,
                a = (0, D.pG)(),
                o = a.visible,
                i = a.hideModal,
                l = a.showModal,
                s = (0, M.useCallback)(
                  (function () {
                    var n = p()(
                      c()().mark(function n(r, a) {
                        return c()().wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.next = 2),
                                  t({
                                    parserId: r,
                                    documentId: e,
                                    parserConfig: a,
                                  })
                                );
                              case 2:
                                0 === n.sent && i();
                              case 4:
                              case 'end':
                                return n.stop();
                            }
                        }, n);
                      }),
                    );
                    return function (e, t) {
                      return n.apply(this, arguments);
                    };
                  })(),
                  [i, t, e],
                );
              return {
                changeParserLoading: r,
                onChangeParserOk: s,
                changeParserVisible: o,
                hideChangeParserModal: i,
                showChangeParserModal: l,
              };
            })(b.id),
            q = G.changeParserLoading,
            U = G.onChangeParserOk,
            V = G.changeParserVisible,
            A = G.hideChangeParserModal,
            B = G.showChangeParserModal,
            z = (function () {
              var e = (0, D.pG)(),
                n = e.visible,
                t = e.hideModal,
                r = e.showModal,
                a = (0, M.useState)([]),
                o = i()(a, 2),
                l = o[0],
                s = o[1],
                u = (0, M.useState)(0),
                d = i()(u, 2),
                m = d[0],
                f = d[1],
                h = (0, ne.ui)(),
                g = h.uploadDocument,
                x = h.loading,
                v = (0, ne.QG)(),
                b = v.runDocumentByIds,
                j =
                  (v.loading,
                  (0, M.useCallback)(
                    (function () {
                      var e = p()(
                        c()().mark(function e(n) {
                          var r, a, o, i, u, d, m, h, x, v, j, y, k, w, Z, _, C;
                          return c()().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((r = n.parseOnCreation),
                                    (a = n.directoryFileList),
                                    (o = (function () {
                                      var e = p()(
                                        c()().mark(function e(n) {
                                          var t, r, a;
                                          return c()().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    s(
                                                      l.map(function (e) {
                                                        if (!n.includes(e))
                                                          return e;
                                                        var t = e;
                                                        return (
                                                          (t.status =
                                                            'uploading'),
                                                          (t.percent = 1),
                                                          t
                                                        );
                                                      }),
                                                    ),
                                                    (e.next = 3),
                                                    g(n)
                                                  );
                                                case 3:
                                                  return (
                                                    (t = e.sent),
                                                    (r =
                                                      (null == t
                                                        ? void 0
                                                        : t.data) || []),
                                                    (a = r.map(function (e) {
                                                      return e.name;
                                                    })),
                                                    s(
                                                      l.map(function (e) {
                                                        if (!n.includes(e))
                                                          return e;
                                                        var r = e;
                                                        return (
                                                          (r.status =
                                                            a.includes(e.name)
                                                              ? 'done'
                                                              : 'error'),
                                                          (r.percent = 100),
                                                          (r.response =
                                                            t.message),
                                                          r
                                                        );
                                                      }),
                                                    ),
                                                    e.abrupt('return', {
                                                      code:
                                                        null == t
                                                          ? void 0
                                                          : t.code,
                                                      fileIds: r.map(
                                                        function (e) {
                                                          return e.id;
                                                        },
                                                      ),
                                                      totalSuccess: a.length,
                                                    })
                                                  );
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
                                    })()),
                                    (i = l.length),
                                    !(a.length > 0))
                                  ) {
                                    e.next = 10;
                                    break;
                                  }
                                  return (e.next = 6), g(a);
                                case 6:
                                  if (
                                    (0 ===
                                      (null == (u = e.sent)
                                        ? void 0
                                        : u.code) && t(),
                                    0 !== i)
                                  ) {
                                    e.next = 10;
                                    break;
                                  }
                                  return e.abrupt('return', 0);
                                case 10:
                                  if (0 !== i) {
                                    e.next = 14;
                                    break;
                                  }
                                  return (
                                    console.log('No files to upload'),
                                    t(),
                                    e.abrupt('return', 0)
                                  );
                                case 14:
                                  (d = 0), (m = []), (h = []), (x = 0);
                                case 18:
                                  if (!(x < i)) {
                                    e.next = 33;
                                    break;
                                  }
                                  return (
                                    f(Math.floor((x / i) * 100)),
                                    (v = l.slice(x, x + 10)),
                                    (e.next = 23),
                                    o(v)
                                  );
                                case 23:
                                  (j = e.sent),
                                    (y = j.code),
                                    (k = j.totalSuccess),
                                    (w = j.fileIds),
                                    m.push(y),
                                    (d += k),
                                    (h = h.concat(w));
                                case 30:
                                  (x += 10), (e.next = 18);
                                  break;
                                case 33:
                                  if (
                                    ((Z = m.every(function (e) {
                                      return 0 === e;
                                    })),
                                    (_ = m.some(function (e) {
                                      return 500 === e;
                                    })),
                                    (C = 500),
                                    (Z || (_ && d === i)) && ((C = 0), t()),
                                    !r)
                                  ) {
                                    e.next = 40;
                                    break;
                                  }
                                  return (
                                    (e.next = 40),
                                    b({
                                      documentIds: h,
                                      run: 1,
                                      shouldDelete: !1,
                                    })
                                  );
                                case 40:
                                  return f(100), e.abrupt('return', C);
                                case 42:
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
                    [l, g, t, b],
                  ));
              return {
                documentUploadLoading: x,
                onDocumentUploadOk: j,
                documentUploadVisible: n,
                hideDocumentUploadModal: t,
                showDocumentUploadModal: r,
                uploadFileList: l,
                setUploadFileList: s,
                uploadProgress: m,
                setUploadProgress: f,
              };
            })(),
            Q = z.documentUploadVisible,
            W = z.hideDocumentUploadModal,
            H = z.showDocumentUploadModal,
            Y = z.onDocumentUploadOk,
            $ = z.documentUploadLoading,
            re = z.uploadFileList,
            se = z.setUploadFileList,
            ce = z.uploadProgress,
            de = z.setUploadProgress,
            pe = (function () {
              var e = (0, D.pG)(),
                n = e.visible,
                t = e.hideModal,
                r = e.showModal,
                a = (0, ne.Yb)(),
                o = a.webCrawl,
                i = a.loading,
                l = (0, M.useCallback)(
                  (function () {
                    var e = p()(
                      c()().mark(function e(n, r) {
                        return c()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), o({ name: n, url: r });
                              case 2:
                                if (0 !== e.sent) {
                                  e.next = 6;
                                  break;
                                }
                                return t(), e.abrupt('return', 0);
                              case 6:
                                return e.abrupt('return', -1);
                              case 7:
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
                  [o, t],
                );
              return {
                webCrawlUploadLoading: i,
                onWebCrawlUploadOk: l,
                webCrawlUploadVisible: n,
                hideWebCrawlUploadModal: t,
                showWebCrawlUploadModal: r,
              };
            })(),
            me = pe.webCrawlUploadVisible,
            fe = pe.hideWebCrawlUploadModal,
            he = pe.showWebCrawlUploadModal,
            ge = pe.onWebCrawlUploadOk,
            xe = pe.webCrawlUploadLoading,
            ve = (0, le.$G)('translation', { keyPrefix: 'knowledgeDetails' }).t,
            be = (function (e) {
              var n = (0, ne.Hy)(),
                t = n.setDocumentMeta,
                r = n.loading,
                a = (0, D.pG)(),
                o = a.visible,
                i = a.hideModal,
                l = a.showModal,
                s = (0, M.useCallback)(
                  (function () {
                    var n = p()(
                      c()().mark(function n(r) {
                        return c()().wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.next = 2), t({ documentId: e, meta: r })
                                );
                              case 2:
                                0 === n.sent && i();
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
                  [t, e, i],
                );
              return {
                setMetaLoading: r,
                onSetMetaModalOk: s,
                setMetaVisible: o,
                hideSetMetaModal: i,
                showSetMetaModal: l,
              };
            })(b.id),
            je = be.showSetMetaModal,
            ye = be.hideSetMetaModal,
            ke = be.setMetaVisible,
            we = be.setMetaLoading,
            Ze = be.onSetMetaModalOk,
            _e =
              ((t = (0, M.useState)([])),
              (r = i()(t, 2)),
              (o = r[0]),
              (l = r[1]),
              {
                selectedRowKeys: o,
                onChange: function (e) {
                  l(e);
                },
              }),
            Ce = [
              {
                title: ve('name'),
                dataIndex: 'name',
                key: 'name',
                fixed: 'left',
                render: function (e, n) {
                  var t = n.id,
                    r = n.thumbnail,
                    a = n.name;
                  return (0, J.jsx)('div', {
                    className: He.toChunks,
                    onClick: function () {
                      return x(t);
                    },
                    children: (0, J.jsxs)(ae.Z, {
                      gap: 10,
                      align: 'center',
                      children: [
                        r
                          ? (0, J.jsx)('img', {
                              className: He.img,
                              src: r,
                              alt: '',
                            })
                          : (0, J.jsx)(ee.Z, {
                              name: 'file-icon/'.concat((0, te.RT)(a)),
                              width: 24,
                            }),
                        (0, J.jsx)(Rn, {
                          ellipsis: { tooltip: e },
                          className: He.nameText,
                          children: e,
                        }),
                      ],
                    }),
                  });
                },
              },
              {
                title: ve('chunkNumber'),
                dataIndex: 'chunk_num',
                key: 'chunk_num',
              },
              {
                title: ve('uploadDate'),
                dataIndex: 'create_time',
                key: 'create_time',
                render: function (e) {
                  return (0, Ln.p6)(e);
                },
              },
              {
                title: ve('chunkMethod'),
                dataIndex: 'parser_id',
                key: 'parser_id',
                render: function (e) {
                  var n;
                  return null ===
                    (n = h.find(function (n) {
                      return n.value === e;
                    })) || void 0 === n
                    ? void 0
                    : n.label;
                },
              },
              {
                title: ve('enabled'),
                key: 'status',
                dataIndex: 'status',
                render: function (e, n) {
                  var t = n.status,
                    r = n.id;
                  return (0, J.jsx)(J.Fragment, {
                    children: (0, J.jsx)(oe.Z, {
                      checked: '1' === t,
                      onChange: function (e) {
                        g({ status: e, documentId: r });
                      },
                    }),
                  });
                },
              },
              {
                title: (0, J.jsxs)('span', {
                  className: 'flex items-center gap-2',
                  children: [
                    ve('parsingStatus'),
                    (0, J.jsx)(k.Z, {
                      title: ve('parsingStatusTip'),
                      children: (0, J.jsx)(Nn.Z, { className: 'size-3' }),
                    }),
                  ],
                }),
                dataIndex: 'run',
                key: 'run',
                filters: Object.entries(I.cG).map(function (e) {
                  var n = i()(e, 2),
                    t = (n[0], n[1]);
                  return { text: ve('runningStatus'.concat(t)), value: t };
                }),
                onFilter: function (e, n) {
                  return n.run === e;
                },
                render: function (e, n) {
                  return (0, J.jsx)(Pn, { record: n });
                },
              },
              {
                title: ve('action'),
                key: 'action',
                render: function (e, n) {
                  return (0, J.jsx)(ln, {
                    setCurrentRecord: j,
                    showRenameModal: P,
                    showChangeParserModal: B,
                    showSetMetaModal: je,
                    record: n,
                  });
                },
              },
            ].map(function (e) {
              return a()(a()({}, e), {}, { className: ''.concat(He.column) });
            });
          return (0, J.jsxs)('div', {
            className: He.datasetWrapper,
            children: [
              (0, J.jsx)('h3', { children: ve('dataset') }),
              (0, J.jsx)('p', { children: ve('datasetDescription') }),
              (0, J.jsx)(y.Z, {}),
              (0, J.jsx)(Je, {
                selectedRowKeys: _e.selectedRowKeys,
                showCreateModal: R,
                showWebCrawlModal: he,
                showDocumentUploadModal: H,
                searchString: u,
                handleInputChange: f,
                documents: d,
              }),
              (0, J.jsx)(ie.Z, {
                rowKey: 'id',
                columns: Ce,
                dataSource: d,
                pagination: m,
                rowSelection: _e,
                className: He.documentTable,
                scroll: { scrollToFirstRowOnChange: !0, x: 1300 },
              }),
              (0, J.jsx)(ue, { visible: S, hideModal: E, loading: N, onOk: T }),
              (0, J.jsx)(X, {
                documentId: b.id,
                parserId: b.parser_id,
                parserConfig: b.parser_config,
                documentExtension: (0, te.RT)(b.name),
                onOk: U,
                visible: V,
                hideModal: A,
                loading: q,
              }),
              (0, J.jsx)(In, {
                visible: C,
                onOk: _,
                loading: Z,
                hideModal: K,
                initialName: b.name,
              }),
              (0, J.jsx)(On.Z, {
                visible: Q,
                hideModal: W,
                loading: $,
                onOk: Y,
                uploadFileList: re,
                setUploadFileList: se,
                uploadProgress: ce,
                setUploadProgress: de,
              }),
              (0, J.jsx)(Fn, {
                visible: me,
                hideModal: fe,
                loading: xe,
                onOk: ge,
              }),
              ke &&
                (0, J.jsx)(En, {
                  visible: ke,
                  hideModal: ye,
                  onOk: Ze,
                  loading: we,
                  initialMetaData: b.meta_fields,
                }),
            ],
          });
        };
    },
    53506: function (e, n, t) {
      var r = t(60806),
        a = t(66582),
        o = t(78158),
        i = r.Z.getDialog,
        l = r.Z.setDialog,
        s = r.Z.listDialog,
        u = r.Z.removeDialog,
        c = r.Z.getConversation,
        d = r.Z.getConversationSSE,
        p = r.Z.setConversation,
        m = r.Z.completeConversation,
        f = {
          getDialog: { url: i, method: 'get' },
          setDialog: { url: l, method: 'post' },
          removeDialog: { url: u, method: 'post' },
          listDialog: { url: s, method: 'get' },
          listConversation: { url: r.Z.listConversation, method: 'get' },
          getConversation: { url: c, method: 'get' },
          getConversationSSE: { url: d, method: 'get' },
          setConversation: { url: p, method: 'post' },
          completeConversation: { url: m, method: 'post' },
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
        h = (0, a.Z)(f, o.ZP);
      n.Z = h;
    },
    62386: function (e, n, t) {
      var r = t(60806),
        a = t(66582),
        o = t(78158),
        i = r.Z.listFile,
        l = r.Z.removeFile,
        s = r.Z.uploadFile,
        u = r.Z.renameFile,
        c = r.Z.getAllParentFolder,
        d = r.Z.createFolder,
        p = r.Z.connectFileToKnowledge,
        m = r.Z.get_document_file,
        f = {
          listFile: { url: i, method: 'get' },
          removeFile: { url: l, method: 'post' },
          uploadFile: { url: s, method: 'post' },
          renameFile: { url: u, method: 'post' },
          getAllParentFolder: { url: c, method: 'get' },
          createFolder: { url: d, method: 'post' },
          connectFileToKnowledge: { url: p, method: 'post' },
          getFile: { url: r.Z.getFile, method: 'get', responseType: 'blob' },
          getDocumentFile: { url: m, method: 'get', responseType: 'blob' },
          moveFile: { url: r.Z.moveFile, method: 'post' },
        },
        h = (0, a.Z)(f, o.ZP);
      n.Z = h;
    },
    28382: function (e, n, t) {
      t.d(n, {
        Qc: function () {
          return l;
        },
        mr: function () {
          return i;
        },
        p6: function () {
          return o;
        },
      });
      var r = t(27484),
        a = t.n(r);
      function o(e) {
        return e ? a()(e).format('DD/MM/YYYY HH:mm:ss') : '';
      }
      function i(e) {
        return e ? a()(e).format('HH:mm:ss') : '';
      }
      function l(e) {
        return e ? a()(e).format('DD/MM/YYYY') : '';
      }
    },
    51331: function (e, n, t) {
      t.d(n, {
        AG: function () {
          return v;
        },
        De: function () {
          return y;
        },
        P2: function () {
          return d;
        },
        Ph: function () {
          return c;
        },
        _V: function () {
          return u;
        },
        qh: function () {
          return h;
        },
        td: function () {
          return j;
        },
        uA: function () {
          return x;
        },
        vn: function () {
          return p;
        },
      });
      var r = t(15009),
        a = t.n(r),
        o = t(99289),
        i = t.n(o),
        l = t(40169),
        s = t(62386),
        u = function (e) {
          return new Promise(function (n, t) {
            var r = new FileReader();
            r.readAsDataURL(e),
              (r.onload = function () {
                var e = new Image();
                (e.src = r.result),
                  (e.onload = function () {
                    var t = document.createElement('canvas'),
                      r = t.getContext('2d'),
                      a = e.width,
                      o = e.height,
                      i = 100;
                    a > o && a > i
                      ? ((o = (o * i) / a), (a = i))
                      : o > i && ((a = (a * i) / o), (o = i)),
                      (t.width = a),
                      (t.height = o),
                      null == r || r.drawImage(e, 0, 0, a, o);
                    var l = t.toDataURL('image/png');
                    n(l);
                  }),
                  (e.onerror = t);
              }),
              (r.onerror = t);
          });
        },
        c = function (e) {
          return Array.isArray(e) ? e : null == e ? void 0 : e.fileList;
        },
        d = function (e) {
          var n = [];
          return (
            e &&
              (n = [{ uid: '1', name: 'file', thumbUrl: e, status: 'done' }]),
            n
          );
        },
        p = (function () {
          var e = i()(
            a()().mark(function e(n) {
              var t, r, o;
              return a()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(Array.isArray(n) && n.length > 0)) {
                        e.next = 11;
                        break;
                      }
                      if (((t = n[0]), !(r = t.originFileObj))) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 6), u(r);
                    case 6:
                      return (o = e.sent), e.abrupt('return', o);
                    case 10:
                      return e.abrupt('return', t.thumbUrl);
                    case 11:
                      return e.abrupt('return', '');
                    case 12:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
      function m(e, n) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = i()(
          a()().mark(function e(n, t) {
            var r, o;
            return a()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), s.Z.getDocumentFile({}, n);
                  case 2:
                    return (
                      (r = e.sent),
                      (o = new Blob([r.data], { type: t || r.data.type })),
                      e.abrupt('return', o)
                    );
                  case 5:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function h(e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = i()(
          a()().mark(function e(n) {
            var t, r, o;
            return a()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), m(n, l.nK.Html);
                  case 2:
                    (t = e.sent),
                      (r = URL.createObjectURL(t)),
                      ((o = document.createElement('a')).href = r),
                      o.click(),
                      URL.revokeObjectURL(r);
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var x = function (e, n) {
          var t = window.URL.createObjectURL(e),
            r = document.createElement('a');
          (r.href = t),
            n && (r.download = n),
            r.click(),
            window.URL.revokeObjectURL(t);
        },
        v = (function () {
          var e = i()(
            a()().mark(function e(n) {
              var t, r, o;
              return a()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (t = n.id), (r = n.filename), (e.next = 3), m(t);
                    case 3:
                      (o = e.sent), x(o, r);
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
        b = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        j = function (e) {
          for (
            var n = 0, t = ('string' == typeof e ? parseInt(e, 10) : e) || 0;
            t >= 1024 && ++n;

          )
            t /= 1024;
          return t.toFixed(t < 10 && n > 0 ? 1 : 0) + ' ' + b[n];
        },
        y = (function () {
          var e = i()(
            a()().mark(function e(n, t) {
              var r;
              return a()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (r = new Blob([JSON.stringify(n)], { type: l.nK.Json })),
                        x(r, t);
                    case 2:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (n, t) {
            return e.apply(this, arguments);
          };
        })();
    },
    33092: function (e, n, t) {
      t.d(n, {
        KE: function () {
          return l;
        },
        Os: function () {
          return o;
        },
        Xy: function () {
          return i;
        },
      });
      var r = t(5574),
        a = t.n(r),
        o = function (e, n) {
          var t;
          return 'FastEmbed' === e
            ? null !== (t = n.split('/').at(0)) && void 0 !== t
              ? t
              : ''
            : e;
        },
        i = function (e) {
          var n = (null == e ? void 0 : e.split('@')) || [],
            t = a()(n, 2),
            r = t[0];
          return { fId: t[1], llmName: r };
        };
      function l(e) {
        var n;
        return null !== (n = e.split('__').at(0)) && void 0 !== n ? n : '';
      }
    },
  },
]);
//# sourceMappingURL=p__add-knowledge__components__knowledge-file__index.b0b8f9a0.async.js.map
