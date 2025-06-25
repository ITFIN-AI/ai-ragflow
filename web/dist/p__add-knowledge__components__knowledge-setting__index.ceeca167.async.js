'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [53],
  {
    25170: function (e, n, t) {
      t.d(n, {
        r: function () {
          return c;
        },
        w: function () {
          return u;
        },
      });
      var r = t(86968),
        a = t(22150),
        s = t(86250),
        i = t(71338),
        o = t(48928),
        l = t(86074),
        c = function () {
          var e = (0, r.qM)('knowledgeDetails').t;
          return (0, l.jsx)(a.Z.Item, {
            label: e('autoKeywords'),
            tooltip: e('autoKeywordsTip'),
            children: (0, l.jsxs)(s.Z, {
              gap: 20,
              align: 'center',
              children: [
                (0, l.jsx)(s.Z, {
                  flex: 1,
                  children: (0, l.jsx)(a.Z.Item, {
                    name: ['parser_config', 'auto_keywords'],
                    noStyle: !0,
                    initialValue: 0,
                    children: (0, l.jsx)(i.Z, {
                      max: 30,
                      style: { width: '100%' },
                    }),
                  }),
                }),
                (0, l.jsx)(a.Z.Item, {
                  name: ['parser_config', 'auto_keywords'],
                  noStyle: !0,
                  children: (0, l.jsx)(o.Z, { max: 30, min: 0 }),
                }),
              ],
            }),
          });
        },
        u = function () {
          var e = (0, r.qM)('knowledgeDetails').t;
          return (0, l.jsx)(a.Z.Item, {
            label: e('autoQuestions'),
            tooltip: e('autoQuestionsTip'),
            children: (0, l.jsxs)(s.Z, {
              gap: 20,
              align: 'center',
              children: [
                (0, l.jsx)(s.Z, {
                  flex: 1,
                  children: (0, l.jsx)(a.Z.Item, {
                    name: ['parser_config', 'auto_questions'],
                    noStyle: !0,
                    initialValue: 0,
                    children: (0, l.jsx)(i.Z, {
                      max: 10,
                      style: { width: '100%' },
                    }),
                  }),
                }),
                (0, l.jsx)(a.Z.Item, {
                  name: ['parser_config', 'auto_questions'],
                  noStyle: !0,
                  children: (0, l.jsx)(o.Z, { max: 10, min: 0 }),
                }),
              ],
            }),
          });
        };
    },
    26625: function (e, n, t) {
      t.d(n, {
        h: function () {
          return I;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(13769),
        i = t.n(s),
        o = t(67007),
        l = t(62435),
        c = t(57636),
        u = t(27080),
        d = t(86074),
        m = ['className'],
        x = ['className'],
        f = ['className'],
        g = ['className'],
        h = ['className'],
        p = ['className'],
        j = ['className'],
        v = ['className'],
        b = o.fC,
        Z = o.xz,
        y = o.h_,
        w = l.forwardRef(function (e, n) {
          var t = e.className,
            r = i()(e, m);
          return (0, d.jsx)(
            o.aV,
            a()(
              a()(
                {
                  className: (0, u.cn)(
                    'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    t,
                  ),
                },
                r,
              ),
              {},
              { ref: n },
            ),
          );
        });
      w.displayName = o.aV.displayName;
      var N = l.forwardRef(function (e, n) {
        var t = e.className,
          r = i()(e, x);
        return (0, d.jsxs)(y, {
          children: [
            (0, d.jsx)(w, {}),
            (0, d.jsx)(
              o.VY,
              a()(
                {
                  ref: n,
                  className: (0, u.cn)(
                    'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-colors-background-neutral-standard p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                    t,
                  ),
                },
                r,
              ),
            ),
          ],
        });
      });
      N.displayName = o.VY.displayName;
      var k = function (e) {
        var n = e.className,
          t = i()(e, f);
        return (0, d.jsx)(
          'div',
          a()(
            {
              className: (0, u.cn)(
                'flex flex-col space-y-2 text-center sm:text-left',
                n,
              ),
            },
            t,
          ),
        );
      };
      k.displayName = 'AlertDialogHeader';
      var _ = function (e) {
        var n = e.className,
          t = i()(e, g);
        return (0, d.jsx)(
          'div',
          a()(
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
      _.displayName = 'AlertDialogFooter';
      var C = l.forwardRef(function (e, n) {
        var t = e.className,
          r = i()(e, h);
        return (0, d.jsx)(
          o.Dx,
          a()({ ref: n, className: (0, u.cn)('text-lg font-semibold', t) }, r),
        );
      });
      (C.displayName = o.Dx.displayName),
        (l.forwardRef(function (e, n) {
          var t = e.className,
            r = i()(e, p);
          return (0, d.jsx)(
            o.dk,
            a()(
              {
                ref: n,
                className: (0, u.cn)('text-sm text-muted-foreground', t),
              },
              r,
            ),
          );
        }).displayName = o.dk.displayName);
      var T = l.forwardRef(function (e, n) {
        var t = e.className,
          r = i()(e, j);
        return (0, d.jsx)(
          o.aU,
          a()({ ref: n, className: (0, u.cn)((0, c.dc)(), t) }, r),
        );
      });
      T.displayName = o.aU.displayName;
      var F = l.forwardRef(function (e, n) {
        var t = e.className,
          r = i()(e, v);
        return (0, d.jsx)(
          o.$j,
          a()(
            {
              ref: n,
              className: (0, u.cn)(
                (0, c.dc)({ variant: 'outline' }),
                'mt-2 sm:mt-0',
                t,
              ),
            },
            r,
          ),
        );
      });
      F.displayName = o.$j.displayName;
      var R = t(67421);
      function I(e) {
        var n = e.children,
          t = e.title,
          r = e.onOk,
          a = e.onCancel,
          s = e.hidden,
          i = void 0 !== s && s,
          o = (0, R.$G)().t;
        return i
          ? n
          : (0, d.jsxs)(b, {
              children: [
                (0, d.jsx)(Z, { asChild: !0, children: n }),
                (0, d.jsxs)(N, {
                  onSelect: function (e) {
                    return e.preventDefault();
                  },
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                  children: [
                    (0, d.jsx)(k, {
                      children: (0, d.jsx)(C, {
                        children: null != t ? t : o('common.deleteModalTitle'),
                      }),
                    }),
                    (0, d.jsxs)(_, {
                      children: [
                        (0, d.jsx)(F, {
                          onClick: a,
                          children: o('common.cancel'),
                        }),
                        (0, d.jsx)(T, {
                          className: 'bg-text-delete-red text-text-title',
                          onClick: r,
                          children: o('common.ok'),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
    },
    38218: function (e, n, t) {
      t.d(n, {
        d: function () {
          return s;
        },
      });
      var r = t(27080),
        a = t(86074);
      function s(e) {
        var n = e.children,
          t = e.className,
          s = e.show;
        return void 0 === s || s
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
        s = t(67421),
        i = t(86074),
        o = function (e) {
          var n = e.value,
            t = e.onChange,
            a = e.maxLength,
            s = null == n ? void 0 : n.replaceAll('\n', '\\n');
          return (0, i.jsx)(r.Z, {
            value: s,
            onChange: function (e) {
              var n = e.target.value.replaceAll('\\n', '\n');
              null == t || t(n);
            },
            maxLength: a,
          });
        };
      n.Z = function () {
        var e = (0, s.$G)().t;
        return (0, i.jsx)(a.Z.Item, {
          name: ['parser_config', 'delimiter'],
          label: e('knowledgeDetails.delimiter'),
          initialValue: '\n',
          rules: [{ required: !0 }],
          tooltip: e('knowledgeDetails.delimiterTip'),
          children: (0, i.jsx)(o, {}),
        });
      };
    },
    26572: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var r = t(19632),
        a = t.n(r),
        s = t(5574),
        i = t.n(s),
        o = t(24969),
        l = t(9361),
        c = t(83062),
        u = t(66309),
        d = t(79531),
        m = t(52376),
        x = t(62435),
        f = 'tweenGroup___HgfIF',
        g = 'tag___EPGvm',
        h = t(86074),
        p = function (e) {
          var n = e.value,
            t = void 0 === n ? [] : n,
            r = e.onChange,
            s = l.Z.useToken().token,
            p = (0, x.useState)(!1),
            j = i()(p, 2),
            v = j[0],
            b = j[1],
            Z = (0, x.useState)(''),
            y = i()(Z, 2),
            w = y[0],
            N = y[1],
            k = (0, x.useRef)(null);
          (0, x.useEffect)(
            function () {
              var e;
              v && (null === (e = k.current) || void 0 === e || e.focus());
            },
            [v],
          );
          var _ = function () {
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
              b(!1), N('');
            },
            C =
              null == t
                ? void 0
                : t.map(function (e) {
                    return (0, h.jsx)(c.Z, {
                      title: e,
                      children: (0, h.jsx)(
                        u.Z,
                        {
                          className: g,
                          closable: !0,
                          onClose: function (n) {
                            var a, s;
                            n.preventDefault(),
                              (a = e),
                              (s =
                                null == t
                                  ? void 0
                                  : t.filter(function (e) {
                                      return e !== a;
                                    })),
                              null == r || r(null != s ? s : []);
                          },
                          children: e,
                        },
                        e,
                      ),
                    });
                  }),
            T = { background: s.colorBgContainer, borderStyle: 'dashed' };
          return (0, h.jsxs)('div', {
            children: [
              Array.isArray(C) &&
                C.length > 0 &&
                (0, h.jsx)(m.Z, {
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
                  children: C,
                }),
              v
                ? (0, h.jsx)(d.Z, {
                    ref: k,
                    type: 'text',
                    size: 'small',
                    value: w,
                    onChange: function (e) {
                      N(e.target.value);
                    },
                    onBlur: _,
                    onPressEnter: _,
                  })
                : (0, h.jsx)(u.Z, {
                    onClick: function () {
                      b(!0);
                    },
                    style: T,
                    children: (0, h.jsx)(o.Z, {}),
                  }),
            ],
          });
        };
    },
    50960: function (e, n, t) {
      var r = t(86968),
        a = t(22150),
        s = t(26572),
        i = t(86074),
        o = ['organization', 'person', 'geo', 'event', 'category'];
      n.Z = function (e) {
        var n = e.field,
          t = void 0 === n ? ['parser_config', 'entity_types'] : n,
          l = (0, r.qM)('knowledgeConfiguration').t;
        return (0, i.jsx)(a.Z.Item, {
          name: t,
          label: l('entityTypes'),
          rules: [{ required: !0 }],
          initialValue: o,
          children: (0, i.jsx)(s.Z, {}),
        });
      };
    },
    54140: function (e, n, t) {
      var r = t(86968),
        a = t(22150),
        s = t(72269),
        i = t(86074);
      n.Z = function () {
        var e = (0, r.qM)('knowledgeDetails').t;
        return (0, i.jsx)(a.Z.Item, {
          name: ['parser_config', 'html4excel'],
          label: e('html4excel'),
          initialValue: !1,
          valuePropName: 'checked',
          tooltip: e('html4excelTip'),
          children: (0, i.jsx)(s.Z, {}),
        });
      };
    },
    78656: function (e, n, t) {
      var r = t(19632),
        a = t.n(r),
        s = t(97857),
        i = t.n(s),
        o = t(96330),
        l = t(86968),
        c = t(38392),
        u = t(22150),
        d = t(34041),
        m = t(96486),
        x = t(62435),
        f = t(86074);
      n.Z = function () {
        var e = (0, l.qM)('knowledgeDetails').t,
          n = (0, c.hl)(),
          t = (0, x.useMemo)(
            function () {
              var t = ['DeepDOC', 'Plain Text'].map(function (n) {
                  return {
                    label:
                      'Plain Text' === n ? e((0, m.camelCase)(n)) : 'DeepDoc',
                    value: n,
                  };
                }),
                r = n[o.Vr.Image2text].map(function (e) {
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
        return (0, f.jsx)(u.Z.Item, {
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
        s = t(86250),
        i = t(71338),
        o = t(48928),
        l = t(86074);
      n.Z = function (e) {
        var n = e.initialValue,
          t = void 0 === n ? 512 : n,
          c = e.max,
          u = void 0 === c ? 2048 : c,
          d = (0, r.qM)('knowledgeConfiguration').t;
        return (0, l.jsx)(a.Z.Item, {
          label: d('chunkTokenNumber'),
          tooltip: d('chunkTokenNumberTip'),
          children: (0, l.jsxs)(s.Z, {
            gap: 20,
            align: 'center',
            children: [
              (0, l.jsx)(s.Z, {
                flex: 1,
                children: (0, l.jsx)(a.Z.Item, {
                  name: ['parser_config', 'chunk_token_num'],
                  noStyle: !0,
                  initialValue: t,
                  rules: [
                    { required: !0, message: d('chunkTokenNumberMessage') },
                  ],
                  children: (0, l.jsx)(i.Z, {
                    max: u,
                    style: { width: '100%' },
                  }),
                }),
              }),
              (0, l.jsx)(a.Z.Item, {
                name: ['parser_config', 'chunk_token_num'],
                noStyle: !0,
                rules: [
                  { required: !0, message: d('chunkTokenNumberMessage') },
                ],
                children: (0, l.jsx)(o.Z, { max: u, min: 0 }),
              }),
            ],
          }),
        });
      };
    },
    72103: function (e, n, t) {
      t.d(n, {
        _G: function () {
          return h;
        },
        hc: function () {
          return g;
        },
      });
      var r = t(96330),
        a = t(86968),
        s = t(27080),
        i = t(22150),
        o = t(72269),
        l = t(34041),
        c = t(96486),
        u = t(62435),
        d = t(38218),
        m = t(50960),
        x = t(86074),
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
        g = function (e) {
          return !f.some(function (n) {
            return n === e;
          });
        };
      function h() {
        var e = (0, a.qM)('knowledgeConfiguration').t;
        return (0, x.jsx)(i.Z.Item, {
          name: ['parser_config', 'graphrag', 'use_graphrag'],
          label: e('useGraphRag'),
          initialValue: !1,
          valuePropName: 'checked',
          tooltip: e('useGraphRagTip'),
          children: (0, x.jsx)(o.Z, {}),
        });
      }
      n.ZP = function (e) {
        var n = e.marginBottom,
          t = void 0 !== n && n,
          r = (0, a.qM)('knowledgeConfiguration').t,
          f = (0, u.useMemo)(function () {
            return ['light', 'general'].map(function (e) {
              return { value: e, label: (0, c.upperFirst)(e) };
            });
          }, []),
          g = (0, u.useCallback)(
            function (e) {
              return {
                title: 'string' == typeof e ? r(e) : e,
                overlayInnerStyle: { width: '32vw' },
              };
            },
            [r],
          );
        return (0, x.jsxs)(d.d, {
          className: (0, s.cn)({ 'mb-4': t }),
          children: [
            (0, x.jsx)(h, {}),
            (0, x.jsx)(i.Z.Item, {
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
                  (0, x.jsxs)(x.Fragment, {
                    children: [
                      (0, x.jsx)(m.Z, {
                        field: ['parser_config', 'graphrag', 'entity_types'],
                      }),
                      (0, x.jsx)(i.Z.Item, {
                        name: ['parser_config', 'graphrag', 'method'],
                        label: r('graphRagMethod'),
                        tooltip: g(
                          (0, x.jsx)('div', {
                            dangerouslySetInnerHTML: {
                              __html: r('graphRagMethodTip'),
                            },
                          }),
                        ),
                        initialValue: 'light',
                        children: (0, x.jsx)(l.Z, { options: f }),
                      }),
                      (0, x.jsx)(i.Z.Item, {
                        name: ['parser_config', 'graphrag', 'resolution'],
                        label: r('resolution'),
                        tooltip: g('resolutionTip'),
                        children: (0, x.jsx)(o.Z, {}),
                      }),
                      (0, x.jsx)(i.Z.Item, {
                        name: ['parser_config', 'graphrag', 'community'],
                        label: r('community'),
                        tooltip: g('communityTip'),
                        children: (0, x.jsx)(o.Z, {}),
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
          return p;
        },
      });
      var r = t(96330),
        a = t(86968),
        s = t(24969),
        i = t(22150),
        o = t(72269),
        l = t(79531),
        c = t(86250),
        u = t(71338),
        d = t(48928),
        m = t(15867),
        x = t(83608),
        f = t.n(x),
        g = t(86074),
        h = [
          r.K1.Table,
          r.K1.Resume,
          r.K1.One,
          r.K1.Picture,
          r.K1.KnowledgeGraph,
          r.K1.Qa,
          r.K1.Tag,
        ],
        p = function (e) {
          return !h.some(function (n) {
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
        return (0, g.jsxs)(g.Fragment, {
          children: [
            (0, g.jsx)(i.Z.Item, {
              name: ['parser_config', 'raptor', 'use_raptor'],
              label: n('useRaptor'),
              initialValue: !1,
              valuePropName: 'checked',
              tooltip: n('useRaptorTip'),
              children: (0, g.jsx)(o.Z, {}),
            }),
            (0, g.jsx)(i.Z.Item, {
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
                  (0, g.jsxs)(g.Fragment, {
                    children: [
                      (0, g.jsx)(i.Z.Item, {
                        name: ['parser_config', 'raptor', 'prompt'],
                        label: n('prompt'),
                        initialValue: n('promptText'),
                        tooltip: n('promptTip'),
                        rules: [{ required: !0, message: n('promptMessage') }],
                        children: (0, g.jsx)(l.Z.TextArea, { rows: 8 }),
                      }),
                      (0, g.jsx)(i.Z.Item, {
                        label: n('maxToken'),
                        tooltip: n('maxTokenTip'),
                        children: (0, g.jsxs)(c.Z, {
                          gap: 20,
                          align: 'center',
                          children: [
                            (0, g.jsx)(c.Z, {
                              flex: 1,
                              children: (0, g.jsx)(i.Z.Item, {
                                name: ['parser_config', 'raptor', 'max_token'],
                                noStyle: !0,
                                initialValue: 256,
                                rules: [
                                  {
                                    required: !0,
                                    message: n('maxTokenMessage'),
                                  },
                                ],
                                children: (0, g.jsx)(u.Z, {
                                  max: 2048,
                                  style: { width: '100%' },
                                }),
                              }),
                            }),
                            (0, g.jsx)(i.Z.Item, {
                              name: ['parser_config', 'raptor', 'max_token'],
                              noStyle: !0,
                              rules: [
                                { required: !0, message: n('maxTokenMessage') },
                              ],
                              children: (0, g.jsx)(d.Z, { max: 2048, min: 0 }),
                            }),
                          ],
                        }),
                      }),
                      (0, g.jsx)(i.Z.Item, {
                        label: n('threshold'),
                        tooltip: n('thresholdTip'),
                        children: (0, g.jsxs)(c.Z, {
                          gap: 20,
                          align: 'center',
                          children: [
                            (0, g.jsx)(c.Z, {
                              flex: 1,
                              children: (0, g.jsx)(i.Z.Item, {
                                name: ['parser_config', 'raptor', 'threshold'],
                                noStyle: !0,
                                initialValue: 0.1,
                                rules: [
                                  {
                                    required: !0,
                                    message: n('thresholdMessage'),
                                  },
                                ],
                                children: (0, g.jsx)(u.Z, {
                                  min: 0,
                                  max: 1,
                                  style: { width: '100%' },
                                  step: 0.01,
                                }),
                              }),
                            }),
                            (0, g.jsx)(i.Z.Item, {
                              name: ['parser_config', 'raptor', 'threshold'],
                              noStyle: !0,
                              rules: [
                                {
                                  required: !0,
                                  message: n('thresholdMessage'),
                                },
                              ],
                              children: (0, g.jsx)(d.Z, {
                                max: 1,
                                min: 0,
                                step: 0.01,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, g.jsx)(i.Z.Item, {
                        label: n('maxCluster'),
                        tooltip: n('maxClusterTip'),
                        children: (0, g.jsxs)(c.Z, {
                          gap: 20,
                          align: 'center',
                          children: [
                            (0, g.jsx)(c.Z, {
                              flex: 1,
                              children: (0, g.jsx)(i.Z.Item, {
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
                                children: (0, g.jsx)(u.Z, {
                                  min: 1,
                                  max: 1024,
                                  style: { width: '100%' },
                                }),
                              }),
                            }),
                            (0, g.jsx)(i.Z.Item, {
                              name: ['parser_config', 'raptor', 'max_cluster'],
                              noStyle: !0,
                              rules: [
                                {
                                  required: !0,
                                  message: n('maxClusterMessage'),
                                },
                              ],
                              children: (0, g.jsx)(d.Z, { max: 1024, min: 1 }),
                            }),
                          ],
                        }),
                      }),
                      (0, g.jsx)(i.Z.Item, {
                        label: n('randomSeed'),
                        children: (0, g.jsxs)(c.Z, {
                          gap: 20,
                          align: 'center',
                          children: [
                            (0, g.jsx)(c.Z, {
                              flex: 1,
                              children: (0, g.jsx)(i.Z.Item, {
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
                                children: (0, g.jsx)(d.Z, {
                                  style: { width: '100%' },
                                }),
                              }),
                            }),
                            (0, g.jsx)(i.Z.Item, {
                              noStyle: !0,
                              children: (0, g.jsx)(m.ZP, {
                                type: 'primary',
                                onClick: t,
                                children: (0, g.jsx)(s.Z, {}),
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
    23309: function (e, n, t) {
      t.d(n, {
        X: function () {
          return x;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(13769),
        i = t.n(s),
        o = t(46069),
        l = t(13742),
        c = t(62435),
        u = t(27080),
        d = t(86074),
        m = ['className'],
        x = c.forwardRef(function (e, n) {
          var t = e.className,
            r = i()(e, m);
          return (0, d.jsx)(
            o.fC,
            a()(
              a()(
                {
                  ref: n,
                  className: (0, u.cn)(
                    'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                    t,
                  ),
                },
                r,
              ),
              {},
              {
                children: (0, d.jsx)(o.z$, {
                  className: (0, u.cn)(
                    'flex items-center justify-center text-current',
                  ),
                  children: (0, d.jsx)(l.Z, { className: 'h-4 w-4' }),
                }),
              },
            ),
          );
        });
      x.displayName = o.fC.displayName;
    },
    28993: function (e, n, t) {
      t.d(n, {
        $N: function () {
          return k;
        },
        Vq: function () {
          return j;
        },
        cN: function () {
          return N;
        },
        cZ: function () {
          return y;
        },
        fK: function () {
          return w;
        },
        hg: function () {
          return v;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(13769),
        i = t.n(s),
        o = t(28828),
        l = t(41352),
        c = t(62435),
        u = t(27080),
        d = t(86074),
        m = ['className'],
        x = ['className', 'children'],
        f = ['className'],
        g = ['className'],
        h = ['className'],
        p = ['className'],
        j = o.fC,
        v = o.xz,
        b = o.h_,
        Z =
          (o.x8,
          c.forwardRef(function (e, n) {
            var t = e.className,
              r = i()(e, m);
            return (0, d.jsx)(
              o.aV,
              a()(
                {
                  ref: n,
                  className: (0, u.cn)(
                    'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    t,
                  ),
                },
                r,
              ),
            );
          }));
      Z.displayName = o.aV.displayName;
      var y = c.forwardRef(function (e, n) {
        var t = e.className,
          r = e.children,
          s = i()(e, x);
        return (0, d.jsxs)(b, {
          children: [
            (0, d.jsx)(Z, {}),
            (0, d.jsxs)(
              o.VY,
              a()(
                a()(
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
                    r,
                    (0, d.jsxs)(o.x8, {
                      className:
                        'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                      children: [
                        (0, d.jsx)(l.Z, { className: 'h-4 w-4' }),
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
      y.displayName = o.VY.displayName;
      var w = function (e) {
        var n = e.className,
          t = i()(e, f);
        return (0, d.jsx)(
          'div',
          a()(
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
      w.displayName = 'DialogHeader';
      var N = function (e) {
        var n = e.className,
          t = i()(e, g);
        return (0, d.jsx)(
          'div',
          a()(
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
      N.displayName = 'DialogFooter';
      var k = c.forwardRef(function (e, n) {
        var t = e.className,
          r = i()(e, h);
        return (0, d.jsx)(
          o.Dx,
          a()(
            {
              ref: n,
              className: (0, u.cn)(
                'text-lg font-semibold leading-none tracking-tight',
                t,
              ),
            },
            r,
          ),
        );
      });
      (k.displayName = o.Dx.displayName),
        (c.forwardRef(function (e, n) {
          var t = e.className,
            r = i()(e, p);
          return (0, d.jsx)(
            o.dk,
            a()(
              {
                ref: n,
                className: (0, u.cn)('text-sm text-muted-foreground', t),
              },
              r,
            ),
          );
        }).displayName = o.dk.displayName);
    },
    11524: function (e, n, t) {
      t.d(n, {
        f: function () {
          return g;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(13769),
        i = t.n(s),
        o = t(27080),
        l = t(88426),
        c = t(45139),
        u = t(36316),
        d = t(62435),
        m = t(86074),
        x = [
          'className',
          'loading',
          'children',
          'disabled',
          'variant',
          'size',
          'asChild',
        ],
        f = (0, c.j)(
          'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            variants: {
              variant: {
                default:
                  'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                  'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                  'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary:
                  'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
                tertiary:
                  'bg-colors-background-sentiment-solid-primary text-colors-text-persist-light hover:bg-colors-background-sentiment-solid-primary/80',
              },
              size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
              },
            },
            defaultVariants: { variant: 'default', size: 'default' },
          },
        ),
        g = d.forwardRef(function (e, n) {
          var t = e.className,
            r = e.loading,
            s = void 0 !== r && r,
            c = e.children,
            d = e.disabled,
            g = e.variant,
            h = e.size,
            p = e.asChild,
            j = void 0 !== p && p,
            v = i()(e, x),
            b = j ? l.g7 : 'button';
          return (0, m.jsxs)(
            b,
            a()(
              a()(
                {
                  className: (0, o.cn)(
                    f({ variant: g, size: h, className: t }),
                  ),
                  ref: n,
                  disabled: s || d,
                },
                v,
              ),
              {},
              {
                children: [
                  s &&
                    (0, m.jsx)(u.Z, { className: 'mr-2 h-5 w-5 animate-spin' }),
                  (0, m.jsx)(l.A4, { children: c }),
                ],
              },
            ),
          );
        });
      g.displayName = 'LoadingButton';
    },
    75269: function (e, n, t) {
      t.d(n, {
        RM: function () {
          return b;
        },
        SC: function () {
          return Z;
        },
        iA: function () {
          return j;
        },
        pj: function () {
          return w;
        },
        ss: function () {
          return y;
        },
        xD: function () {
          return v;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(13769),
        i = t.n(s),
        o = t(62435),
        l = t(27080),
        c = t(86074),
        u = ['className', 'rootClassName'],
        d = ['className'],
        m = ['className'],
        x = ['className'],
        f = ['className'],
        g = ['className'],
        h = ['className'],
        p = ['className'],
        j = o.forwardRef(function (e, n) {
          var t = e.className,
            r = e.rootClassName,
            s = i()(e, u);
          return (0, c.jsx)('div', {
            className: (0, l.cn)(
              'relative w-full overflow-auto rounded-2xl bg-background-card',
              r,
            ),
            children: (0, c.jsx)(
              'table',
              a()(
                {
                  ref: n,
                  className: (0, l.cn)('w-full caption-bottom text-sm ', t),
                },
                s,
              ),
            ),
          });
        });
      j.displayName = 'Table';
      var v = o.forwardRef(function (e, n) {
        var t = e.className,
          r = i()(e, d);
        return (0, c.jsx)(
          'thead',
          a()(
            { ref: n, className: (0, l.cn)('[&_tr]:border-b top-0 sticky', t) },
            r,
          ),
        );
      });
      v.displayName = 'TableHeader';
      var b = o.forwardRef(function (e, n) {
        var t = e.className,
          r = i()(e, m);
        return (0, c.jsx)(
          'tbody',
          a()(
            { ref: n, className: (0, l.cn)('[&_tr:last-child]:border-0', t) },
            r,
          ),
        );
      });
      (b.displayName = 'TableBody'),
        (o.forwardRef(function (e, n) {
          var t = e.className,
            r = i()(e, x);
          return (0, c.jsx)(
            'tfoot',
            a()(
              {
                ref: n,
                className: (0, l.cn)(
                  'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
                  t,
                ),
              },
              r,
            ),
          );
        }).displayName = 'TableFooter');
      var Z = o.forwardRef(function (e, n) {
        var t = e.className,
          r = i()(e, f);
        return (0, c.jsx)(
          'tr',
          a()(
            {
              ref: n,
              className: (0, l.cn)(
                'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
                t,
              ),
            },
            r,
          ),
        );
      });
      Z.displayName = 'TableRow';
      var y = o.forwardRef(function (e, n) {
        var t = e.className,
          r = i()(e, g);
        return (0, c.jsx)(
          'th',
          a()(
            {
              ref: n,
              className: (0, l.cn)(
                'h-12 px-4 text-left align-middle font-normal text-text-sub-title [&:has([role=checkbox])]:pr-0',
                t,
              ),
            },
            r,
          ),
        );
      });
      y.displayName = 'TableHead';
      var w = o.forwardRef(function (e, n) {
        var t = e.className,
          r = i()(e, h);
        return (0, c.jsx)(
          'td',
          a()(
            {
              ref: n,
              className: (0, l.cn)(
                'p-4 align-middle [&:has([role=checkbox])]:pr-0 text-text-title font-normal',
                t,
              ),
            },
            r,
          ),
        );
      });
      (w.displayName = 'TableCell'),
        (o.forwardRef(function (e, n) {
          var t = e.className,
            r = i()(e, p);
          return (0, c.jsx)(
            'caption',
            a()(
              {
                ref: n,
                className: (0, l.cn)('mt-4 text-sm text-muted-foreground', t),
              },
              r,
            ),
          );
        }).displayName = 'TableCaption');
    },
    69329: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return nn;
          },
        });
      var r = t(22850),
        a = t(96074),
        s = t(75081),
        i = t(71230),
        o = t(15746),
        l = t(46693),
        c = t(86968),
        u = t(39259),
        d = t(32983),
        m = t(27856),
        x = t.n(m),
        f = t(68929),
        g = t.n(f),
        h = t(62435),
        p = 'configurationWrapper___I5Kdy',
        j = 'buttonWrapper___k6eVW',
        v = 'categoryPanelWrapper___yI4rY',
        b = 'imageRow___C3Xpb',
        Z = 'image___D0j7I',
        y = t(5574),
        w = t.n(y),
        N = t(9783),
        k = t.n(N),
        _ = t(92783),
        C = t(96486),
        T = t(67421),
        F = t(74094),
        R = t(27060),
        I = t(61932),
        M = t(13718),
        S = t(90470),
        P = t(26625),
        K = t(57636),
        V = t(23309),
        q = t(27591),
        z = t(75269),
        D = t(84146),
        B = t(10541),
        A = t(15009),
        G = t.n(A),
        L = t(97857),
        E = t.n(L),
        U = t(99289),
        O = t.n(U),
        $ = t(96330),
        H = t(38392),
        X = t(96100),
        W = t(51331),
        J = t(72141),
        Y = t(22150),
        Q = t(78718),
        ee = t.n(Q),
        ne = ['email', 'picture', 'audio'];
      var te = t(28993),
        re = t(11524),
        ae = t(8074),
        se = t(56312),
        ie = t(87536),
        oe = t(1604),
        le = t(80499),
        ce = t(86074);
      function ue(e) {
        var n = e.initialName,
          t = e.hideModal,
          r = (0, T.$G)().t,
          a = oe.z.object({
            name: oe.z
              .string()
              .min(1, { message: r('common.namePlaceholder') })
              .trim(),
          }),
          s = (0, ie.cI)({
            resolver: (0, se.F)(a),
            defaultValues: { name: '' },
          }),
          i = (0, B.Sq)().renameTag;
        function o() {
          return (o = O()(
            G()().mark(function e(r) {
              return G()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), i({ fromTag: n, toTag: r.name });
                    case 2:
                      e.sent && (null == t || t());
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        return (
          (0, h.useEffect)(
            function () {
              s.setValue('name', n);
            },
            [s, n],
          ),
          (0, ce.jsx)(
            le.l0,
            E()(
              E()({}, s),
              {},
              {
                children: (0, ce.jsx)('form', {
                  onSubmit: s.handleSubmit(function (e) {
                    return o.apply(this, arguments);
                  }),
                  className: 'space-y-6',
                  id: ae.j$,
                  children: (0, ce.jsx)(le.Wi, {
                    control: s.control,
                    name: 'name',
                    render: function (e) {
                      var n = e.field;
                      return (0, ce.jsxs)(le.xJ, {
                        children: [
                          (0, ce.jsx)(le.lX, { children: r('common.name') }),
                          (0, ce.jsx)(le.NI, {
                            children: (0, ce.jsx)(
                              q.II,
                              E()(
                                E()(
                                  { placeholder: r('common.namePlaceholder') },
                                  n,
                                ),
                                {},
                                { autoComplete: 'off' },
                              ),
                            ),
                          }),
                          (0, ce.jsx)(le.zG, {}),
                        ],
                      });
                    },
                  }),
                }),
              },
            ),
          )
        );
      }
      function de(e) {
        var n = e.hideModal,
          t = e.initialName,
          r = (0, T.$G)().t,
          a = (0, B.z5)();
        return (0, ce.jsx)(te.Vq, {
          open: !0,
          onOpenChange: n,
          children: (0, ce.jsxs)(te.cZ, {
            className: 'sm:max-w-[425px]',
            children: [
              (0, ce.jsx)(te.fK, {
                children: (0, ce.jsx)(te.$N, { children: r('common.rename') }),
              }),
              (0, ce.jsx)(ue, { initialName: t, hideModal: n }),
              (0, ce.jsx)(te.cN, {
                children: (0, ce.jsx)(re.f, {
                  type: 'submit',
                  form: ae.j$,
                  loading: a,
                  children: r('common.save'),
                }),
              }),
            ],
          }),
        });
      }
      function me() {
        var e,
          n,
          t,
          r = (0, T.$G)().t,
          a = (0, B.lX)().list,
          s = (0, h.useState)([]),
          i = w()(s, 2),
          o = i[0],
          l = i[1],
          u = h.useState([]),
          d = w()(u, 2),
          m = d[0],
          x = d[1],
          f = h.useState([]),
          g = w()(f, 2),
          p = g[0],
          j = g[1],
          v = h.useState({}),
          b = w()(v, 2),
          Z = b[0],
          y = b[1],
          N = (0, h.useState)({}),
          k = w()(N, 2),
          _ = k[0],
          C = k[1],
          A = (0, B.uG)().deleteTag;
        (0, h.useEffect)(
          function () {
            l(
              a.map(function (e) {
                return { tag: e[0], frequency: e[1] };
              }),
            );
          },
          [a],
        );
        var G = (0, h.useCallback)(
            function (e) {
              return function () {
                A(e);
              };
            },
            [A],
          ),
          L = (function () {
            var e = (0, h.useState)(''),
              n = w()(e, 2),
              t = n[0],
              r = n[1],
              a = (0, c.pG)(),
              s = a.visible,
              i = a.hideModal,
              o = a.showModal;
            return {
              initialName: t,
              tagRenameVisible: s,
              hideTagRenameModal: i,
              showTagRenameModal: (0, h.useCallback)(
                function (e) {
                  r(e), o();
                },
                [o],
              ),
            };
          })(),
          E = L.showTagRenameModal,
          U = L.hideTagRenameModal,
          O = L.tagRenameVisible,
          $ = L.initialName,
          H = [
            {
              id: 'select',
              header: function (e) {
                var n = e.table;
                return (0, ce.jsx)(V.X, {
                  checked:
                    n.getIsAllPageRowsSelected() ||
                    (n.getIsSomePageRowsSelected() && 'indeterminate'),
                  onCheckedChange: function (e) {
                    return n.toggleAllPageRowsSelected(!!e);
                  },
                  'aria-label': 'Select all',
                });
              },
              cell: function (e) {
                var n = e.row;
                return (0, ce.jsx)(V.X, {
                  checked: n.getIsSelected(),
                  onCheckedChange: function (e) {
                    return n.toggleSelected(!!e);
                  },
                  'aria-label': 'Select row',
                });
              },
              enableSorting: !1,
              enableHiding: !1,
            },
            {
              accessorKey: 'tag',
              header: function (e) {
                var n = e.column;
                return (0, ce.jsxs)(K.zx, {
                  variant: 'ghost',
                  onClick: function () {
                    return n.toggleSorting('asc' === n.getIsSorted());
                  },
                  children: [
                    r('knowledgeConfiguration.tagName'),
                    (0, ce.jsx)(I.Z, {}),
                  ],
                });
              },
              cell: function (e) {
                var n = e.row.getValue('tag');
                return (0, ce.jsx)('div', { children: n });
              },
            },
            {
              accessorKey: 'frequency',
              header: function (e) {
                var n = e.column;
                return (0, ce.jsxs)(K.zx, {
                  variant: 'ghost',
                  onClick: function () {
                    return n.toggleSorting('asc' === n.getIsSorted());
                  },
                  children: [
                    r('knowledgeConfiguration.frequency'),
                    (0, ce.jsx)(I.Z, {}),
                  ],
                });
              },
              cell: function (e) {
                var n = e.row;
                return (0, ce.jsx)('div', {
                  className: 'capitalize ',
                  children: n.getValue('frequency'),
                });
              },
            },
            {
              id: 'actions',
              enableHiding: !1,
              header: r('common.action'),
              cell: function (e) {
                var n = e.row;
                return (0, ce.jsxs)('div', {
                  className: 'flex gap-1',
                  children: [
                    (0, ce.jsxs)(D.u, {
                      children: [
                        (0, ce.jsx)(P.h, {
                          onOk: G([n.original.tag]),
                          children: (0, ce.jsx)(D.aJ, {
                            asChild: !0,
                            children: (0, ce.jsx)(K.zx, {
                              variant: 'ghost',
                              size: 'icon',
                              children: (0, ce.jsx)(M.Z, {}),
                            }),
                          }),
                        }),
                        (0, ce.jsx)(D._v, {
                          children: (0, ce.jsx)('p', {
                            children: r('common.delete'),
                          }),
                        }),
                      ],
                    }),
                    (0, ce.jsxs)(D.u, {
                      children: [
                        (0, ce.jsx)(D.aJ, {
                          asChild: !0,
                          children: (0, ce.jsx)(K.zx, {
                            variant: 'ghost',
                            size: 'icon',
                            onClick: function () {
                              return E(n.original.tag);
                            },
                            children: (0, ce.jsx)(S.Z, {}),
                          }),
                        }),
                        (0, ce.jsx)(D._v, {
                          children: (0, ce.jsx)('p', {
                            children: r('common.rename'),
                          }),
                        }),
                      ],
                    }),
                  ],
                });
              },
            },
          ],
          X = (0, F.b7)({
            data: o,
            columns: H,
            onSortingChange: x,
            onColumnFiltersChange: j,
            getCoreRowModel: (0, R.sC)(),
            getPaginationRowModel: (0, R.G_)(),
            getSortedRowModel: (0, R.tj)(),
            getFilteredRowModel: (0, R.vL)(),
            onColumnVisibilityChange: y,
            onRowSelectionChange: C,
            state: {
              sorting: m,
              columnFilters: p,
              columnVisibility: Z,
              rowSelection: _,
            },
          }),
          W = X.getFilteredSelectedRowModel().rows.length;
        return (0, ce.jsxs)(D.pn, {
          children: [
            (0, ce.jsxs)('div', {
              className: 'w-full',
              children: [
                (0, ce.jsxs)('div', {
                  className: 'flex items-center justify-between py-4 ',
                  children: [
                    (0, ce.jsx)(q.II, {
                      placeholder: r('knowledgeConfiguration.searchTags'),
                      value:
                        null !==
                          (e =
                            null === (n = X.getColumn('tag')) || void 0 === n
                              ? void 0
                              : n.getFilterValue()) && void 0 !== e
                          ? e
                          : '',
                      onChange: function (e) {
                        var n;
                        return null === (n = X.getColumn('tag')) || void 0 === n
                          ? void 0
                          : n.setFilterValue(e.target.value);
                      },
                      className: 'w-1/2',
                    }),
                    W > 0 &&
                      (0, ce.jsx)(P.h, {
                        onOk: G(
                          X.getFilteredSelectedRowModel().rows.map(
                            function (e) {
                              return e.original.tag;
                            },
                          ),
                        ),
                        children: (0, ce.jsx)(K.zx, {
                          variant: 'outline',
                          size: 'icon',
                          children: (0, ce.jsx)(M.Z, {}),
                        }),
                      }),
                  ],
                }),
                (0, ce.jsx)('div', {
                  className: 'rounded-md border',
                  children: (0, ce.jsxs)(z.iA, {
                    children: [
                      (0, ce.jsx)(z.xD, {
                        children: X.getHeaderGroups().map(function (e) {
                          return (0, ce.jsx)(
                            z.SC,
                            {
                              children: e.headers.map(function (e) {
                                return (0, ce.jsx)(
                                  z.ss,
                                  {
                                    children: e.isPlaceholder
                                      ? null
                                      : (0, F.ie)(
                                          e.column.columnDef.header,
                                          e.getContext(),
                                        ),
                                  },
                                  e.id,
                                );
                              }),
                            },
                            e.id,
                          );
                        }),
                      }),
                      (0, ce.jsx)(z.RM, {
                        children:
                          null !== (t = X.getRowModel().rows) &&
                          void 0 !== t &&
                          t.length
                            ? X.getRowModel().rows.map(function (e) {
                                return (0, ce.jsx)(
                                  z.SC,
                                  {
                                    'data-state':
                                      e.getIsSelected() && 'selected',
                                    children: e
                                      .getVisibleCells()
                                      .map(function (e) {
                                        return (0, ce.jsx)(
                                          z.pj,
                                          {
                                            children: (0, F.ie)(
                                              e.column.columnDef.cell,
                                              e.getContext(),
                                            ),
                                          },
                                          e.id,
                                        );
                                      }),
                                  },
                                  e.id,
                                );
                              })
                            : (0, ce.jsx)(z.SC, {
                                children: (0, ce.jsx)(z.pj, {
                                  colSpan: H.length,
                                  className: 'h-24 text-center',
                                  children: 'No results.',
                                }),
                              }),
                      }),
                    ],
                  }),
                }),
                (0, ce.jsxs)('div', {
                  className: 'flex items-center justify-end space-x-2 py-4',
                  children: [
                    (0, ce.jsxs)('div', {
                      className: 'flex-1 text-sm text-muted-foreground',
                      children: [
                        W,
                        ' of ',
                        X.getFilteredRowModel().rows.length,
                        ' ',
                        'row(s) selected.',
                      ],
                    }),
                    (0, ce.jsxs)('div', {
                      className: 'space-x-2',
                      children: [
                        (0, ce.jsx)(K.zx, {
                          variant: 'outline',
                          size: 'sm',
                          onClick: function () {
                            return X.previousPage();
                          },
                          disabled: !X.getCanPreviousPage(),
                          children: r('common.previousPage'),
                        }),
                        (0, ce.jsx)(K.zx, {
                          variant: 'outline',
                          size: 'sm',
                          onClick: function () {
                            return X.nextPage();
                          },
                          disabled: !X.getCanNextPage(),
                          children: r('common.nextPage'),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            O && (0, ce.jsx)(de, { hideModal: U, initialName: $ }),
          ],
        });
      }
      var xe = t(38332);
      function fe() {
        var e = (0, h.useRef)(null),
          n = (0, h.useRef)(),
          t = (0, B.lX)().list,
          r = (0, h.useMemo)(
            function () {
              var e = t
                .sort(function (e, n) {
                  return n[1] - e[1];
                })
                .slice(0, 256);
              return {
                list: e.map(function (e) {
                  return { text: e[0], value: e[1], name: e[0] };
                }),
                sumValue: (0, C.sumBy)(e, function (e) {
                  return e[1];
                }),
                length: e.length,
              };
            },
            [t],
          ).list,
          a = (0, h.useCallback)(
            function () {
              e.current &&
                ((n.current = new xe.kL({ container: e.current })),
                n.current.options({
                  type: 'wordCloud',
                  autoFit: !0,
                  layout: { fontSize: [10, 50] },
                  data: { type: 'inline', value: r },
                  encode: { color: 'text' },
                  legend: !1,
                  tooltip: { title: 'name', items: ['value'] },
                }),
                n.current.render());
            },
            [r],
          );
        return (
          (0, h.useEffect)(
            function () {
              return (
                a(),
                function () {
                  var e;
                  null === (e = n.current) || void 0 === e || e.destroy();
                }
              );
            },
            [a],
          ),
          (0, ce.jsx)('div', { ref: e, className: 'w-full h-[38vh]' })
        );
      }
      var ge = (function (e) {
          return (e.Cloud = 'cloud'), (e.Table = 'table'), e;
        })(ge || {}),
        he = k()(
          k()({}, ge.Cloud, (0, ce.jsx)(fe, {})),
          ge.Table,
          (0, ce.jsx)(me, {}),
        );
      function pe() {
        var e = (0, h.useState)(ge.Cloud),
          n = w()(e, 2),
          t = n[0],
          r = n[1],
          a = (0, T.$G)().t,
          s = [ge.Cloud, ge.Table].map(function (e) {
            return {
              label: a(
                'knowledgeConfiguration.tag'.concat((0, C.upperFirst)(e)),
              ),
              value: e,
            };
          });
        return (0, ce.jsxs)('section', {
          className: 'mt-4',
          children: [
            (0, ce.jsx)(_.Z, {
              value: t,
              options: s,
              onChange: function (e) {
                return r(e);
              },
            }),
            he[t],
          ],
        });
      }
      var je = function (e, n) {
          return new Array(n).fill(0).map(function (n, t) {
            return 'chunk-method/'.concat(e, '-0').concat(t + 1);
          });
        },
        ve = {
          book: je('book', 4),
          laws: je('law', 2),
          manual: je('manual', 4),
          picture: je('media', 2),
          naive: je('naive', 2),
          paper: je('paper', 2),
          presentation: je('presentation', 2),
          qa: je('qa', 2),
          resume: je('resume', 2),
          table: je('table', 2),
          one: je('one', 2),
          knowledge_graph: je('knowledge-graph', 2),
          tag: je('tag', 2),
        },
        be = r.Z.Text,
        Ze = function (e) {
          var n = e.chunkMethod,
            t = (0, u.XH)(),
            r = (0, c.qM)('knowledgeConfiguration').t,
            s = (0, h.useMemo)(
              function () {
                var e = t.find(function (e) {
                  return e.value === n;
                });
                return e
                  ? { title: e.label, description: r(g()(e.value)) }
                  : { title: '', description: '' };
              },
              [t, n, r],
            ),
            m = (0, h.useMemo)(
              function () {
                return n in ve ? ve[n] : [];
              },
              [n],
            );
          return (0, ce.jsxs)('section', {
            className: v,
            children: [
              m.length > 0
                ? (0, ce.jsxs)(ce.Fragment, {
                    children: [
                      (0, ce.jsx)('h5', {
                        className: 'font-semibold text-base mt-0 mb-1',
                        children: '"'
                          .concat(s.title, '" ')
                          .concat(r('methodTitle')),
                      }),
                      (0, ce.jsx)('p', {
                        dangerouslySetInnerHTML: {
                          __html: x().sanitize(s.description),
                        },
                      }),
                      (0, ce.jsx)('h5', {
                        className: 'font-semibold text-base mt-4 mb-1',
                        children: '"'
                          .concat(s.title, '" ')
                          .concat(r('methodExamples')),
                      }),
                      (0, ce.jsx)(be, {
                        children: r('methodExamplesDescription'),
                      }),
                      (0, ce.jsx)(i.Z, {
                        gutter: [10, 10],
                        className: b,
                        children: m.map(function (e) {
                          return (0, ce.jsx)(
                            o.Z,
                            {
                              span: 12,
                              children: (0, ce.jsx)(l.Z, {
                                name: e,
                                width: '100%',
                                className: Z,
                              }),
                            },
                            e,
                          );
                        }),
                      }),
                      (0, ce.jsxs)('h5', {
                        className: 'font-semibold text-base mt-4 mb-1',
                        children: [s.title, ' ', r('dialogueExamplesTitle')],
                      }),
                      (0, ce.jsx)(a.Z, {}),
                    ],
                  })
                : (0, ce.jsxs)(d.Z, {
                    description: '',
                    image: null,
                    children: [
                      (0, ce.jsx)('p', { children: r('methodEmpty') }),
                      (0, ce.jsx)(l.Z, {
                        name: 'chunk-method/chunk-empty',
                        width: '100%',
                      }),
                    ],
                  }),
              'tag' === n && (0, ce.jsx)(pe, {}),
            ],
          });
        },
        ye = t(24969),
        we = t(79531),
        Ne = t(31365),
        ke = t(78045),
        _e = t(42075),
        Ce = t(15867),
        Te = t(25170),
        Fe = t(86250),
        Re = t(71338),
        Ie = t(48928),
        Me = function () {
          var e = (0, c.qM)('knowledgeConfiguration').t;
          return (0, ce.jsx)(Y.Z.Item, {
            label: e('pageRank'),
            tooltip: e('pageRankTip'),
            children: (0, ce.jsxs)(Fe.Z, {
              gap: 20,
              align: 'center',
              children: [
                (0, ce.jsx)(Fe.Z, {
                  flex: 1,
                  children: (0, ce.jsx)(Y.Z.Item, {
                    name: ['pagerank'],
                    noStyle: !0,
                    initialValue: 0,
                    rules: [{ required: !0 }],
                    children: (0, ce.jsx)(Re.Z, {
                      max: 100,
                      style: { width: '100%' },
                    }),
                  }),
                }),
                (0, ce.jsx)(Y.Z.Item, {
                  name: ['pagerank'],
                  noStyle: !0,
                  rules: [{ required: !0 }],
                  children: (0, ce.jsx)(Ie.Z, { max: 100, min: 0 }),
                }),
              ],
            }),
          });
        },
        Se = t(85885),
        Pe = t(72103),
        Ke = t(87547),
        Ve = t(7134),
        qe = t(34041),
        ze = function () {
          var e = (0, T.$G)().t,
            n = (0, B.VJ)(!0)
              .list.filter(function (e) {
                return 'tag' === e.parser_id;
              })
              .map(function (e) {
                return {
                  label: (0, ce.jsxs)(_e.Z, {
                    children: [
                      (0, ce.jsx)(Ve.C, {
                        size: 20,
                        icon: (0, ce.jsx)(Ke.Z, {}),
                        src: e.avatar,
                      }),
                      e.name,
                    ],
                  }),
                  value: e.id,
                };
              });
          return (0, ce.jsx)(Y.Z.Item, {
            label: e('knowledgeConfiguration.tagSet'),
            name: ['parser_config', 'tag_kb_ids'],
            tooltip: (0, ce.jsx)('div', {
              dangerouslySetInnerHTML: {
                __html: x().sanitize(e('knowledgeConfiguration.tagSetTip')),
              },
            }),
            rules: [
              { message: e('chat.knowledgeBasesMessage'), type: 'array' },
            ],
            children: (0, ce.jsx)(qe.Z, {
              mode: 'multiple',
              options: n,
              placeholder: e('chat.knowledgeBasesMessage'),
            }),
          });
        },
        De = function () {
          var e = (0, T.$G)().t;
          return (0, ce.jsx)(Y.Z.Item, {
            label: e('knowledgeConfiguration.topnTags'),
            children: (0, ce.jsxs)(Fe.Z, {
              gap: 20,
              align: 'center',
              children: [
                (0, ce.jsx)(Fe.Z, {
                  flex: 1,
                  children: (0, ce.jsx)(Y.Z.Item, {
                    name: ['parser_config', 'topn_tags'],
                    noStyle: !0,
                    initialValue: 3,
                    children: (0, ce.jsx)(Re.Z, {
                      max: 10,
                      min: 1,
                      style: { width: '100%' },
                    }),
                  }),
                }),
                (0, ce.jsx)(Y.Z.Item, {
                  name: ['parser_config', 'topn_tags'],
                  noStyle: !0,
                  children: (0, ce.jsx)(Ie.Z, { max: 10, min: 1 }),
                }),
              ],
            }),
          });
        };
      function Be() {
        return (0, ce.jsxs)(ce.Fragment, {
          children: [
            (0, ce.jsx)(ze, {}),
            (0, ce.jsx)(Y.Z.Item, {
              noStyle: !0,
              dependencies: [['parser_config', 'tag_kb_ids']],
              children: function (e) {
                var n = (0, e.getFieldValue)(['parser_config', 'tag_kb_ids']);
                return Array.isArray(n) && n.length > 0 && (0, ce.jsx)(De, {});
              },
            }),
          ],
        });
      }
      var Ae = t(2938),
        Ge = (0, h.memo)(function () {
          var e = (0, c.qM)('knowledgeConfiguration').t,
            n = (0, H.hl)()[$.Vr.Embedding],
            t = (0, B.PX)().data.chunk_num > 0;
          return (0, ce.jsx)(Y.Z.Item, {
            name: 'embd_id',
            label: e('embeddingModel'),
            rules: [{ required: !0 }],
            tooltip: e('embeddingModelTip'),
            children: (0, ce.jsx)(qe.Z, {
              placeholder: e('embeddingModelPlaceholder'),
              options: n,
              disabled: t,
            }),
          });
        }),
        Le = (0, h.memo)(function () {
          var e = (0, c.qM)('knowledgeConfiguration').t,
            n = Y.Z.useFormInstance(),
            t = (0, Ae.sO)(n),
            r = (0, u.XH)().filter(function (e) {
              return !ne.some(function (n) {
                return n === e.value;
              });
            });
          return (0, ce.jsx)(Y.Z.Item, {
            name: 'parser_id',
            label: e('chunkMethod'),
            tooltip: e('chunkMethodTip'),
            rules: [{ required: !0 }],
            children: (0, ce.jsx)(qe.Z, {
              placeholder: e('chunkMethodPlaceholder'),
              onChange: t,
              options: r,
            }),
          });
        });
      var Ee = t(78656);
      var Ue = t(84782),
        Oe = t(50960),
        $e = t(77680);
      var He,
        Xe = t(38218),
        We = t(54140);
      var Je =
        ((He = {}),
        k()(
          k()(
            k()(
              k()(
                k()(
                  k()(
                    k()(
                      k()(
                        k()(
                          k()(He, $.K1.Naive, function () {
                            return (0, ce.jsxs)('section', {
                              className: 'space-y-4 mb-4',
                              children: [
                                (0, ce.jsxs)(Xe.d, {
                                  children: [
                                    (0, ce.jsx)(Ee.Z, {}),
                                    (0, ce.jsx)(Ge, {}),
                                    (0, ce.jsx)(Le, {}),
                                    (0, ce.jsx)($e.Z, {}),
                                    (0, ce.jsx)(Ue.Z, {}),
                                  ],
                                }),
                                (0, ce.jsx)(a.Z, {}),
                                (0, ce.jsxs)(Xe.d, {
                                  children: [
                                    (0, ce.jsx)(Me, {}),
                                    (0, ce.jsx)(Te.r, {}),
                                    (0, ce.jsx)(Te.w, {}),
                                    (0, ce.jsx)(We.Z, {}),
                                    (0, ce.jsx)(Be, {}),
                                  ],
                                }),
                                (0, ce.jsx)(a.Z, {}),
                                (0, ce.jsx)(Xe.d, {
                                  children: (0, ce.jsx)(Se.ZP, {}),
                                }),
                                (0, ce.jsx)(a.Z, {}),
                                (0, ce.jsx)(Pe.ZP, {}),
                              ],
                            });
                          }),
                          $.K1.Qa,
                          function () {
                            return (0, ce.jsxs)(ce.Fragment, {
                              children: [
                                (0, ce.jsx)(Ge, {}),
                                (0, ce.jsx)(Le, {}),
                                (0, ce.jsx)(Me, {}),
                                (0, ce.jsx)(Be, {}),
                              ],
                            });
                          },
                        ),
                        $.K1.Resume,
                        function () {
                          return (0, ce.jsxs)(ce.Fragment, {
                            children: [
                              (0, ce.jsx)(Ge, {}),
                              (0, ce.jsx)(Le, {}),
                              (0, ce.jsx)(Me, {}),
                              (0, ce.jsx)(Be, {}),
                            ],
                          });
                        },
                      ),
                      $.K1.Manual,
                      function () {
                        return (0, ce.jsxs)(ce.Fragment, {
                          children: [
                            (0, ce.jsx)(Ee.Z, {}),
                            (0, ce.jsx)(Ge, {}),
                            (0, ce.jsx)(Le, {}),
                            (0, ce.jsx)(Me, {}),
                            (0, ce.jsxs)(ce.Fragment, {
                              children: [
                                (0, ce.jsx)(Te.r, {}),
                                (0, ce.jsx)(Te.w, {}),
                              ],
                            }),
                            (0, ce.jsx)(Se.ZP, {}),
                            (0, ce.jsx)(Pe.ZP, { marginBottom: !0 }),
                            (0, ce.jsx)(Be, {}),
                          ],
                        });
                      },
                    ),
                    $.K1.Table,
                    function () {
                      return (0, ce.jsxs)(ce.Fragment, {
                        children: [
                          (0, ce.jsx)(Ge, {}),
                          (0, ce.jsx)(Le, {}),
                          (0, ce.jsx)(Me, {}),
                        ],
                      });
                    },
                  ),
                  $.K1.Paper,
                  function () {
                    return (0, ce.jsxs)(ce.Fragment, {
                      children: [
                        (0, ce.jsx)(Ee.Z, {}),
                        (0, ce.jsx)(Ge, {}),
                        (0, ce.jsx)(Le, {}),
                        (0, ce.jsx)(Me, {}),
                        (0, ce.jsxs)(ce.Fragment, {
                          children: [
                            (0, ce.jsx)(Te.r, {}),
                            (0, ce.jsx)(Te.w, {}),
                          ],
                        }),
                        (0, ce.jsx)(Se.ZP, {}),
                        (0, ce.jsx)(Pe.ZP, { marginBottom: !0 }),
                        (0, ce.jsx)(Be, {}),
                      ],
                    });
                  },
                ),
                $.K1.Book,
                function () {
                  return (0, ce.jsxs)(ce.Fragment, {
                    children: [
                      (0, ce.jsx)(Ee.Z, {}),
                      (0, ce.jsx)(Ge, {}),
                      (0, ce.jsx)(Le, {}),
                      (0, ce.jsx)(Me, {}),
                      (0, ce.jsxs)(ce.Fragment, {
                        children: [
                          (0, ce.jsx)(Te.r, {}),
                          (0, ce.jsx)(Te.w, {}),
                        ],
                      }),
                      (0, ce.jsx)(Se.ZP, {}),
                      (0, ce.jsx)(Pe.ZP, { marginBottom: !0 }),
                      (0, ce.jsx)(Be, {}),
                    ],
                  });
                },
              ),
              $.K1.Laws,
              function () {
                return (0, ce.jsxs)(ce.Fragment, {
                  children: [
                    (0, ce.jsx)(Ee.Z, {}),
                    (0, ce.jsx)(Ge, {}),
                    (0, ce.jsx)(Le, {}),
                    (0, ce.jsx)(Me, {}),
                    (0, ce.jsxs)(ce.Fragment, {
                      children: [(0, ce.jsx)(Te.r, {}), (0, ce.jsx)(Te.w, {})],
                    }),
                    (0, ce.jsx)(Se.ZP, {}),
                    (0, ce.jsx)(Pe.ZP, { marginBottom: !0 }),
                    (0, ce.jsx)(Be, {}),
                  ],
                });
              },
            ),
            $.K1.Presentation,
            function () {
              return (0, ce.jsxs)(ce.Fragment, {
                children: [
                  (0, ce.jsx)(Ee.Z, {}),
                  (0, ce.jsx)(Ge, {}),
                  (0, ce.jsx)(Le, {}),
                  (0, ce.jsx)(Me, {}),
                  (0, ce.jsxs)(ce.Fragment, {
                    children: [(0, ce.jsx)(Te.r, {}), (0, ce.jsx)(Te.w, {})],
                  }),
                  (0, ce.jsx)(Se.ZP, {}),
                  (0, ce.jsx)(Pe.ZP, { marginBottom: !0 }),
                  (0, ce.jsx)(Be, {}),
                ],
              });
            },
          ),
          $.K1.Picture,
          function () {
            return (0, ce.jsxs)(ce.Fragment, {
              children: [
                (0, ce.jsx)(Ge, {}),
                (0, ce.jsx)(Le, {}),
                (0, ce.jsx)(Me, {}),
                (0, ce.jsxs)(ce.Fragment, {
                  children: [(0, ce.jsx)(Te.r, {}), (0, ce.jsx)(Te.w, {})],
                }),
                (0, ce.jsx)(Be, {}),
              ],
            });
          },
        ),
        k()(
          k()(
            k()(
              k()(
                k()(He, $.K1.One, function () {
                  return (0, ce.jsxs)(ce.Fragment, {
                    children: [
                      (0, ce.jsx)(Ee.Z, {}),
                      (0, ce.jsx)(Ge, {}),
                      (0, ce.jsx)(Le, {}),
                      (0, ce.jsx)(Me, {}),
                      (0, ce.jsxs)(ce.Fragment, {
                        children: [
                          (0, ce.jsx)(Te.r, {}),
                          (0, ce.jsx)(Te.w, {}),
                        ],
                      }),
                      (0, ce.jsx)(Pe.ZP, { marginBottom: !0 }),
                      (0, ce.jsx)(Be, {}),
                    ],
                  });
                }),
                $.K1.Audio,
                function () {
                  return (0, ce.jsxs)(ce.Fragment, {
                    children: [
                      (0, ce.jsx)(Ge, {}),
                      (0, ce.jsx)(Le, {}),
                      (0, ce.jsx)(Me, {}),
                      (0, ce.jsxs)(ce.Fragment, {
                        children: [
                          (0, ce.jsx)(Te.r, {}),
                          (0, ce.jsx)(Te.w, {}),
                        ],
                      }),
                      (0, ce.jsx)(Se.ZP, {}),
                      (0, ce.jsx)(Pe.ZP, { marginBottom: !0 }),
                      (0, ce.jsx)(Be, {}),
                    ],
                  });
                },
              ),
              $.K1.Email,
              function () {
                return (0, ce.jsxs)(ce.Fragment, {
                  children: [
                    (0, ce.jsx)(Ge, {}),
                    (0, ce.jsx)(Le, {}),
                    (0, ce.jsx)(Me, {}),
                    (0, ce.jsxs)(ce.Fragment, {
                      children: [(0, ce.jsx)(Te.r, {}), (0, ce.jsx)(Te.w, {})],
                    }),
                    (0, ce.jsx)(Se.ZP, {}),
                    (0, ce.jsx)(Pe.ZP, { marginBottom: !0 }),
                    (0, ce.jsx)(Be, {}),
                  ],
                });
              },
            ),
            $.K1.Tag,
            function () {
              return (0, ce.jsxs)(ce.Fragment, {
                children: [
                  (0, ce.jsx)(Ge, {}),
                  (0, ce.jsx)(Le, {}),
                  (0, ce.jsx)(Me, {}),
                ],
              });
            },
          ),
          $.K1.KnowledgeGraph,
          function () {
            return (0, ce.jsxs)(ce.Fragment, {
              children: [
                (0, ce.jsx)(Ge, {}),
                (0, ce.jsx)(Le, {}),
                (0, ce.jsx)(Me, {}),
                (0, ce.jsxs)(ce.Fragment, {
                  children: [
                    (0, ce.jsx)(Oe.Z, {}),
                    (0, ce.jsx)($e.Z, { max: 16384 }),
                    (0, ce.jsx)(Ue.Z, {}),
                  ],
                }),
              ],
            });
          },
        ));
      function Ye() {
        return (0, ce.jsx)('div', {});
      }
      var Qe = function (e) {
          var n = e.form,
            t = (function (e) {
              var n = (0, B.MA)(),
                t = n.saveKnowledgeConfiguration,
                r = n.loading,
                a = (0, X.nT)(),
                s = (0, h.useCallback)(
                  O()(
                    G()().mark(function n() {
                      var r, s;
                      return G()().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.next = 2), e.validateFields();
                            case 2:
                              return (
                                (r = n.sent), (n.next = 5), (0, W.vn)(r.avatar)
                              );
                            case 5:
                              (s = n.sent),
                                t(E()(E()({}, r), {}, { avatar: s })),
                                a();
                            case 8:
                            case 'end':
                              return n.stop();
                          }
                      }, n);
                    }),
                  ),
                  [t, e, a],
                );
              return {
                submitKnowledgeConfiguration: s,
                submitLoading: r,
                navigateToDataset: a,
              };
            })(n),
            r = t.submitKnowledgeConfiguration,
            a = t.submitLoading,
            s = t.navigateToDataset,
            i = (0, c.qM)('knowledgeConfiguration').t,
            o = (0, h.useState)(),
            l = w()(o, 2),
            u = l[0],
            d = l[1],
            m = (function (e) {
              var n = (0, B.PX)().data;
              return (
                (0, h.useEffect)(
                  function () {
                    var t = (0, W.P2)(n.avatar);
                    e.setFieldsValue(
                      E()(
                        E()(
                          {},
                          ee()(n, [
                            'description',
                            'name',
                            'permission',
                            'embd_id',
                            'parser_id',
                            'language',
                            'parser_config',
                            'pagerank',
                          ]),
                        ),
                        {},
                        { avatar: t },
                      ),
                    );
                  },
                  [e, n],
                ),
                n
              );
            })(n),
            x = Y.Z.useWatch('parser_id', n),
            f = (0, h.useMemo)(
              function () {
                return u ? Je[u] : Ye;
              },
              [u],
            );
          return (
            (0, h.useEffect)(
              function () {
                d(x);
              },
              [x],
            ),
            (0, h.useEffect)(
              function () {
                d(m.parser_id);
              },
              [m.parser_id],
            ),
            (0, ce.jsxs)(Y.Z, {
              form: n,
              name: 'validateOnly',
              layout: 'vertical',
              autoComplete: 'off',
              children: [
                (0, ce.jsx)(Y.Z.Item, {
                  name: 'name',
                  label: i('name'),
                  rules: [{ required: !0 }],
                  children: (0, ce.jsx)(we.Z, {}),
                }),
                (0, ce.jsx)(Y.Z.Item, {
                  name: 'avatar',
                  label: i('photo'),
                  valuePropName: 'fileList',
                  getValueFromEvent: W.Ph,
                  children: (0, ce.jsx)(Ne.Z, {
                    listType: 'picture-card',
                    maxCount: 1,
                    beforeUpload: function () {
                      return !1;
                    },
                    showUploadList: { showPreviewIcon: !1, showRemoveIcon: !1 },
                    children: (0, ce.jsxs)('button', {
                      style: { border: 0, background: 'none' },
                      type: 'button',
                      children: [
                        (0, ce.jsx)(ye.Z, {}),
                        (0, ce.jsx)('div', {
                          style: { marginTop: 8 },
                          children: i('upload'),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, ce.jsx)(Y.Z.Item, {
                  name: 'description',
                  label: i('description'),
                  children: (0, ce.jsx)(we.Z, {}),
                }),
                (0, ce.jsx)(Y.Z.Item, {
                  name: 'permission',
                  label: i('permissions'),
                  tooltip: i('permissionsTip'),
                  rules: [{ required: !0 }],
                  children: (0, ce.jsxs)(ke.ZP.Group, {
                    children: [
                      (0, ce.jsx)(ke.ZP, { value: 'me', children: i('me') }),
                      (0, ce.jsx)(ke.ZP, {
                        value: 'team',
                        children: i('team'),
                      }),
                    ],
                  }),
                }),
                (0, ce.jsx)(f, {}),
                (0, ce.jsx)(Y.Z.Item, {
                  children: (0, ce.jsx)('div', {
                    className: j,
                    children: (0, ce.jsxs)(_e.Z, {
                      children: [
                        (0, ce.jsx)(Ce.ZP, {
                          size: 'middle',
                          onClick: s,
                          children: i('cancel'),
                        }),
                        (0, ce.jsx)(Ce.ZP, {
                          type: 'primary',
                          size: 'middle',
                          loading: a,
                          onClick: r,
                          children: i('save'),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        },
        en = r.Z.Title,
        nn = function () {
          var e = (0, J.y)({ queryKey: ['fetchKnowledgeDetail'] }) > 0,
            n = (function () {
              var e = Y.Z.useForm(),
                n = w()(e, 1)[0],
                t = Y.Z.useWatch('parser_id', n);
              return (
                (0, h.useEffect)(
                  function () {
                    console.log(
                      '🚀 ~ useHandleChunkMethodChange ~ chunkMethod:',
                      t,
                    );
                  },
                  [t],
                ),
                { form: n, chunkMethod: t }
              );
            })(),
            t = n.form,
            r = n.chunkMethod,
            l = (0, c.qM)('knowledgeConfiguration').t;
          return (0, ce.jsxs)('div', {
            className: p,
            children: [
              (0, ce.jsx)(en, {
                level: 5,
                children: l('configuration', { keyPrefix: 'knowledgeDetails' }),
              }),
              (0, ce.jsx)('p', { children: l('titleDescription') }),
              (0, ce.jsx)(a.Z, {}),
              (0, ce.jsx)(s.Z, {
                spinning: e,
                children: (0, ce.jsxs)(i.Z, {
                  gutter: 32,
                  children: [
                    (0, ce.jsx)(o.Z, {
                      span: 8,
                      children: (0, ce.jsx)(Qe, { form: t }),
                    }),
                    (0, ce.jsx)(o.Z, {
                      span: 16,
                      children: (0, ce.jsx)(Ze, { chunkMethod: r }),
                    }),
                  ],
                }),
              }),
            ],
          });
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
    62386: function (e, n, t) {
      var r = t(60806),
        a = t(66582),
        s = t(78158),
        i = r.Z.listFile,
        o = r.Z.removeFile,
        l = r.Z.uploadFile,
        c = r.Z.renameFile,
        u = r.Z.getAllParentFolder,
        d = r.Z.createFolder,
        m = r.Z.connectFileToKnowledge,
        x = r.Z.get_document_file,
        f = {
          listFile: { url: i, method: 'get' },
          removeFile: { url: o, method: 'post' },
          uploadFile: { url: l, method: 'post' },
          renameFile: { url: c, method: 'post' },
          getAllParentFolder: { url: u, method: 'get' },
          createFolder: { url: d, method: 'post' },
          connectFileToKnowledge: { url: m, method: 'post' },
          getFile: { url: r.Z.getFile, method: 'get', responseType: 'blob' },
          getDocumentFile: { url: x, method: 'get', responseType: 'blob' },
          moveFile: { url: r.Z.moveFile, method: 'post' },
        },
        g = (0, a.Z)(f, s.ZP);
      n.Z = g;
    },
    51331: function (e, n, t) {
      t.d(n, {
        AG: function () {
          return j;
        },
        De: function () {
          return Z;
        },
        P2: function () {
          return d;
        },
        Ph: function () {
          return u;
        },
        _V: function () {
          return c;
        },
        qh: function () {
          return g;
        },
        td: function () {
          return b;
        },
        uA: function () {
          return p;
        },
        vn: function () {
          return m;
        },
      });
      var r = t(15009),
        a = t.n(r),
        s = t(99289),
        i = t.n(s),
        o = t(40169),
        l = t(62386),
        c = function (e) {
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
                      s = e.height,
                      i = 100;
                    a > s && a > i
                      ? ((s = (s * i) / a), (a = i))
                      : s > i && ((a = (a * i) / s), (s = i)),
                      (t.width = a),
                      (t.height = s),
                      null == r || r.drawImage(e, 0, 0, a, s);
                    var o = t.toDataURL('image/png');
                    n(o);
                  }),
                  (e.onerror = t);
              }),
              (r.onerror = t);
          });
        },
        u = function (e) {
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
        m = (function () {
          var e = i()(
            a()().mark(function e(n) {
              var t, r, s;
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
                      return (e.next = 6), c(r);
                    case 6:
                      return (s = e.sent), e.abrupt('return', s);
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
      function x(e, n) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = i()(
          a()().mark(function e(n, t) {
            var r, s;
            return a()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), l.Z.getDocumentFile({}, n);
                  case 2:
                    return (
                      (r = e.sent),
                      (s = new Blob([r.data], { type: t || r.data.type })),
                      e.abrupt('return', s)
                    );
                  case 5:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function g(e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = i()(
          a()().mark(function e(n) {
            var t, r, s;
            return a()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), x(n, o.nK.Html);
                  case 2:
                    (t = e.sent),
                      (r = URL.createObjectURL(t)),
                      ((s = document.createElement('a')).href = r),
                      s.click(),
                      URL.revokeObjectURL(r);
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var p = function (e, n) {
          var t = window.URL.createObjectURL(e),
            r = document.createElement('a');
          (r.href = t),
            n && (r.download = n),
            r.click(),
            window.URL.revokeObjectURL(t);
        },
        j = (function () {
          var e = i()(
            a()().mark(function e(n) {
              var t, r, s;
              return a()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (t = n.id), (r = n.filename), (e.next = 3), x(t);
                    case 3:
                      (s = e.sent), p(s, r);
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
        v = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        b = function (e) {
          for (
            var n = 0, t = ('string' == typeof e ? parseInt(e, 10) : e) || 0;
            t >= 1024 && ++n;

          )
            t /= 1024;
          return t.toFixed(t < 10 && n > 0 ? 1 : 0) + ' ' + v[n];
        },
        Z = (function () {
          var e = i()(
            a()().mark(function e(n, t) {
              var r;
              return a()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (r = new Blob([JSON.stringify(n)], { type: o.nK.Json })),
                        p(r, t);
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
  },
]);
//# sourceMappingURL=p__add-knowledge__components__knowledge-setting__index.ceeca167.async.js.map
