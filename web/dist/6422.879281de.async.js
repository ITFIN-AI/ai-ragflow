'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [6422],
  {
    62378: function (e, n, t) {
      t.d(n, {
        G: function () {
          return i;
        },
        e: function () {
          return o;
        },
      });
      var r = t(86968),
        a = t(15309),
        s = t(86074);
      function i() {
        var e = (0, r.qM)('knowledgeDetails').t;
        return (0, s.jsx)(a.W, {
          name: 'parser_config.auto_keywords',
          label: e('autoKeywords'),
          max: 30,
          min: 0,
          tooltip: e('autoKeywordsTip'),
        });
      }
      function o() {
        var e = (0, r.qM)('knowledgeDetails').t;
        return (0, s.jsx)(a.W, {
          name: 'parser_config.auto_questions',
          label: e('autoQuestions'),
          max: 10,
          min: 0,
          tooltip: e('autoQuestionsTip'),
        });
      }
    },
    43669: function (e, n, t) {
      t.d(n, {
        M: function () {
          return f;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(62435),
        i = t(87536),
        o = t(67421),
        l = t(80499),
        c = t(27591),
        u = t(86074),
        d = (0, s.forwardRef)(function (e, n) {
          var t = e.value,
            r = e.onChange,
            a = e.maxLength,
            s = e.defaultValue,
            i = null == t ? void 0 : t.replaceAll('\n', '\\n');
          return (0, u.jsx)(c.II, {
            value: i,
            onChange: function (e) {
              var n = e.target.value.replaceAll('\\n', '\n');
              null == r || r(n);
            },
            maxLength: a,
            defaultValue: s,
            ref: n,
          });
        });
      function f() {
        var e = (0, o.$G)().t,
          n = (0, i.Gc)();
        return (0, u.jsx)(l.Wi, {
          control: n.control,
          name: 'parser_config.delimiter',
          render: function (t) {
            var r = t.field;
            return (
              void 0 === r.value && n.setValue('parser_config.delimiter', '\n'),
              (0, u.jsxs)(l.xJ, {
                className: ' items-center space-y-0 ',
                children: [
                  (0, u.jsxs)('div', {
                    className: 'flex items-center',
                    children: [
                      (0, u.jsx)(l.lX, {
                        tooltip: e('knowledgeDetails.delimiterTip'),
                        className:
                          'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                        children: e('knowledgeDetails.delimiter'),
                      }),
                      (0, u.jsx)('div', {
                        className: 'w-3/4',
                        children: (0, u.jsx)(l.NI, {
                          children: (0, u.jsx)(d, a()({}, r)),
                        }),
                      }),
                    ],
                  }),
                  (0, u.jsxs)('div', {
                    className: 'flex pt-1',
                    children: [
                      (0, u.jsx)('div', { className: 'w-1/4' }),
                      (0, u.jsx)(l.zG, {}),
                    ],
                  }),
                ],
              })
            );
          },
        });
      }
    },
    26572: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
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
        f = t(52376),
        m = t(62435),
        p = 'tweenGroup___HgfIF',
        x = 'tag___EPGvm',
        h = t(86074),
        v = function (e) {
          var n = e.value,
            t = void 0 === n ? [] : n,
            r = e.onChange,
            s = l.Z.useToken().token,
            v = (0, m.useState)(!1),
            g = i()(v, 2),
            j = g[0],
            N = g[1],
            w = (0, m.useState)(''),
            b = i()(w, 2),
            y = b[0],
            k = b[1],
            C = (0, m.useRef)(null);
          (0, m.useEffect)(
            function () {
              var e;
              j && (null === (e = C.current) || void 0 === e || e.focus());
            },
            [j],
          );
          var _ = function () {
              if (y && t) {
                var e = y
                  .split(';')
                  .map(function (e) {
                    return e.trim();
                  })
                  .filter(function (e) {
                    return e && !t.includes(e);
                  });
                null == r || r([].concat(a()(t), a()(e)));
              }
              N(!1), k('');
            },
            K =
              null == t
                ? void 0
                : t.map(function (e) {
                    return (0, h.jsx)(c.Z, {
                      title: e,
                      children: (0, h.jsx)(
                        u.Z,
                        {
                          className: x,
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
              Array.isArray(K) &&
                K.length > 0 &&
                (0, h.jsx)(f.Z, {
                  className: p,
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
                  children: K,
                }),
              j
                ? (0, h.jsx)(d.Z, {
                    ref: C,
                    type: 'text',
                    size: 'small',
                    value: y,
                    onChange: function (e) {
                      k(e.target.value);
                    },
                    onBlur: _,
                    onPressEnter: _,
                  })
                : (0, h.jsx)(u.Z, {
                    onClick: function () {
                      N(!0);
                    },
                    style: T,
                    children: (0, h.jsx)(o.Z, {}),
                  }),
            ],
          });
        };
    },
    72687: function (e, n, t) {
      t.d(n, {
        i: function () {
          return u;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(86968),
        i = t(87536),
        o = t(26572),
        l = t(80499),
        c = t(86074);
      function u(e) {
        var n = e.name,
          t = void 0 === n ? 'parser_config.entity_types' : n,
          r = (0, s.qM)('knowledgeConfiguration').t,
          u = (0, i.Gc)();
        return (0, c.jsx)(l.Wi, {
          control: u.control,
          name: t,
          render: function (e) {
            var n = e.field;
            return (0, c.jsxs)(l.xJ, {
              className: ' items-center space-y-0 ',
              children: [
                (0, c.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, c.jsxs)(l.lX, {
                      className:
                        'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                      children: [
                        (0, c.jsx)('span', {
                          className: 'text-red-600',
                          children: '*',
                        }),
                        ' ',
                        r('entityTypes'),
                      ],
                    }),
                    (0, c.jsx)('div', {
                      className: 'w-3/4',
                      children: (0, c.jsx)(l.NI, {
                        children: (0, c.jsx)(o.Z, a()({}, n)),
                      }),
                    }),
                  ],
                }),
                (0, c.jsxs)('div', {
                  className: 'flex pt-1',
                  children: [
                    (0, c.jsx)('div', { className: 'w-1/4' }),
                    (0, c.jsx)(l.zG, {}),
                  ],
                }),
              ],
            });
          },
        });
      }
    },
    45841: function (e, n, t) {
      t.d(n, {
        s: function () {
          return l;
        },
      });
      var r = t(86968),
        a = t(87536),
        s = t(80499),
        i = t(2834),
        o = t(86074);
      function l() {
        var e = (0, a.Gc)(),
          n = (0, r.qM)('knowledgeDetails').t;
        return (0, o.jsx)(s.Wi, {
          control: e.control,
          name: 'parser_config.html4excel',
          render: function (t) {
            var r = t.field;
            return (
              void 0 === r.value && e.setValue('parser_config.html4excel', !1),
              (0, o.jsxs)(s.xJ, {
                defaultChecked: !1,
                className: ' items-center space-y-0 ',
                children: [
                  (0, o.jsxs)('div', {
                    className: 'flex items-center',
                    children: [
                      (0, o.jsx)(s.lX, {
                        tooltip: n('html4excelTip'),
                        className:
                          'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                        children: n('html4excel'),
                      }),
                      (0, o.jsx)('div', {
                        className: 'w-3/4',
                        children: (0, o.jsx)(s.NI, {
                          children: (0, o.jsx)(i.r, {
                            checked: r.value,
                            onCheckedChange: r.onChange,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, o.jsxs)('div', {
                    className: 'flex pt-1',
                    children: [
                      (0, o.jsx)('div', { className: 'w-1/4' }),
                      (0, o.jsx)(s.zG, {}),
                    ],
                  }),
                ],
              })
            );
          },
        });
      }
    },
    51811: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return s;
        },
      });
      var r = t(27080),
        a = t(86074);
      function s(e) {
        var n = e.children,
          t = e.show,
          s = void 0 === t || t,
          i = e.className;
        return s
          ? (0, a.jsx)('section', {
              className: (0, r.cn)('border rounded-lg p-5 space-y-5', i),
              children: n,
            })
          : n;
      }
    },
    36758: function (e, n, t) {
      t.d(n, {
        E: function () {
          return v;
        },
        n: function () {
          return h;
        },
      });
      var r = t(19632),
        a = t.n(r),
        s = t(97857),
        i = t.n(s),
        o = t(96330),
        l = t(86968),
        c = t(38392),
        u = t(96486),
        d = t(62435),
        f = t(87536),
        m = t(80499),
        p = t(84586),
        x = t(86074),
        h = { DeepDOC: 'DeepDOC', PlainText: 'Plain Text' };
      function v() {
        var e = (0, f.Gc)(),
          n = (0, l.qM)('knowledgeDetails').t,
          t = (0, c.hl)(),
          r = (0, d.useMemo)(
            function () {
              var e = [h.DeepDOC, h.PlainText].map(function (e) {
                  return {
                    label:
                      e === h.PlainText ? n((0, u.camelCase)(e)) : 'DeepDoc',
                    value: e,
                  };
                }),
                r = t[o.Vr.Image2text].map(function (e) {
                  return i()(
                    i()({}, e),
                    {},
                    {
                      options: e.options.map(function (e) {
                        return i()(
                          i()({}, e),
                          {},
                          {
                            label: (0, x.jsxs)('div', {
                              className:
                                'flex justify-between items-center gap-2',
                              children: [
                                e.label,
                                (0, x.jsx)('span', {
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
              return [].concat(a()(e), a()(r));
            },
            [t, n],
          );
        return (0, x.jsx)(m.Wi, {
          control: e.control,
          name: 'parser_config.layout_recognize',
          render: function (t) {
            var a,
              s,
              o = t.field;
            void 0 === o.value &&
              e.setValue(
                'parser_config.layout_recognize',
                null !==
                  (a =
                    null === (s = e.formState.defaultValues) ||
                    void 0 === s ||
                    null === (s = s.parser_config) ||
                    void 0 === s
                      ? void 0
                      : s.layout_recognize) && void 0 !== a
                  ? a
                  : 'DeepDOC',
              );
            return (0, x.jsxs)(m.xJ, {
              className: ' items-center space-y-0 ',
              children: [
                (0, x.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, x.jsx)(m.lX, {
                      tooltip: n('layoutRecognizeTip'),
                      className:
                        'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                      children: n('layoutRecognize'),
                    }),
                    (0, x.jsx)('div', {
                      className: 'w-3/4',
                      children: (0, x.jsx)(m.NI, {
                        children: (0, x.jsx)(
                          p.vM,
                          i()(i()({}, o), {}, { options: r }),
                        ),
                      }),
                    }),
                  ],
                }),
                (0, x.jsxs)('div', {
                  className: 'flex pt-1',
                  children: [
                    (0, x.jsx)('div', { className: 'w-1/4' }),
                    (0, x.jsx)(m.zG, {}),
                  ],
                }),
              ],
            });
          },
        });
      }
    },
    87181: function (e, n, t) {
      t.d(n, {
        Q: function () {
          return i;
        },
      });
      var r = t(5574),
        a = t.n(r),
        s = t(62435);
      function i() {
        var e = (0, s.useState)({}),
          n = a()(e, 2),
          t = n[0],
          r = n[1],
          i = (0, s.useCallback)(function (e) {
            r(e);
          }, []);
        return { filterValue: t, setFilterValue: r, handleFilterSubmit: i };
      }
    },
    76973: function (e, n, t) {
      t.d(n, {
        M: function () {
          return i;
        },
      });
      var r = t(86968),
        a = t(15309),
        s = t(86074);
      function i(e) {
        var n = e.max,
          t = void 0 === n ? 2048 : n,
          i = (0, r.qM)('knowledgeConfiguration').t;
        return (0, s.jsx)(a.W, {
          name: 'parser_config.chunk_token_num',
          label: i('chunkTokenNumber'),
          max: t,
        });
      }
    },
    60739: function (e, n, t) {
      t.d(n, {
        Gg: function () {
          return j;
        },
        hc: function () {
          return g;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(96330),
        i = t(86968),
        o = t(27080),
        l = t(96486),
        c = t(62435),
        u = t(87536),
        d = t(72687),
        f = t(51811),
        m = t(80499),
        p = t(84586),
        x = t(2834),
        h = t(86074),
        v =
          (s.K1.Table,
          s.K1.KnowledgeGraph,
          s.K1.Tag,
          [
            s.K1.Table,
            s.K1.Resume,
            s.K1.Picture,
            s.K1.KnowledgeGraph,
            s.K1.Qa,
            s.K1.Tag,
          ]),
        g = function (e) {
          return !v.some(function (n) {
            return n === e;
          });
        };
      function j() {
        var e = (0, u.Gc)(),
          n = (0, i.qM)('knowledgeConfiguration').t;
        return (0, h.jsx)(m.Wi, {
          control: e.control,
          name: 'parser_config.graphrag.use_graphrag',
          render: function (e) {
            var t = e.field;
            return (0, h.jsxs)(m.xJ, {
              defaultChecked: !1,
              className: ' items-center space-y-0 ',
              children: [
                (0, h.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, h.jsx)(m.lX, {
                      tooltip: n('useGraphRagTip'),
                      className:
                        'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                      children: n('useGraphRag'),
                    }),
                    (0, h.jsx)('div', {
                      className: 'w-3/4',
                      children: (0, h.jsx)(m.NI, {
                        children: (0, h.jsx)(x.r, {
                          checked: t.value,
                          onCheckedChange: t.onChange,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, h.jsxs)('div', {
                  className: 'flex pt-1',
                  children: [
                    (0, h.jsx)('div', { className: 'w-1/4' }),
                    (0, h.jsx)(m.zG, {}),
                  ],
                }),
              ],
            });
          },
        });
      }
      n.ZP = function (e) {
        var n = e.marginBottom,
          t = void 0 !== n && n,
          r = e.className,
          s = void 0 === r ? 'p-10' : r,
          v = (0, i.qM)('knowledgeConfiguration').t,
          g = (0, u.Gc)(),
          N = (0, u.qo)({
            control: g.control,
            name: 'parser_config.graphrag.use_graphrag',
          }),
          w = (0, c.useMemo)(function () {
            return ['light', 'general'].map(function (e) {
              return { value: e, label: (0, l.upperFirst)(e) };
            });
          }, []),
          b = (0, c.useCallback)(
            function (e) {
              return 'string' == typeof e ? v(e) : e;
            },
            [v],
          );
        return (0, h.jsxs)(f.Y, {
          className: (0, o.cn)({ 'mb-4': t }, s),
          children: [
            (0, h.jsx)(j, {}),
            N &&
              (0, h.jsxs)(h.Fragment, {
                children: [
                  (0, h.jsx)(d.i, {
                    name: 'parser_config.graphrag.entity_types',
                  }),
                  (0, h.jsx)(m.Wi, {
                    control: g.control,
                    name: 'parser_config.graphrag.method',
                    render: function (e) {
                      var n = e.field;
                      return (0, h.jsxs)(m.xJ, {
                        className: ' items-center space-y-0 ',
                        children: [
                          (0, h.jsxs)('div', {
                            className: 'flex items-center',
                            children: [
                              (0, h.jsx)(m.lX, {
                                className:
                                  'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                                tooltip: b(
                                  (0, h.jsx)('div', {
                                    dangerouslySetInnerHTML: {
                                      __html: v('graphRagMethodTip'),
                                    },
                                  }),
                                ),
                                children: v('graphRagMethod'),
                              }),
                              (0, h.jsx)('div', {
                                className: 'w-3/4',
                                children: (0, h.jsx)(m.NI, {
                                  children: (0, h.jsx)(
                                    p.vM,
                                    a()(a()({}, n), {}, { options: w }),
                                  ),
                                }),
                              }),
                            ],
                          }),
                          (0, h.jsxs)('div', {
                            className: 'flex pt-1',
                            children: [
                              (0, h.jsx)('div', { className: 'w-1/4' }),
                              (0, h.jsx)(m.zG, {}),
                            ],
                          }),
                        ],
                      });
                    },
                  }),
                  (0, h.jsx)(m.Wi, {
                    control: g.control,
                    name: 'parser_config.graphrag.resolution',
                    render: function (e) {
                      var n = e.field;
                      return (0, h.jsxs)(m.xJ, {
                        className: ' items-center space-y-0 ',
                        children: [
                          (0, h.jsxs)('div', {
                            className: 'flex items-center',
                            children: [
                              (0, h.jsx)(m.lX, {
                                tooltip: b('resolutionTip'),
                                className:
                                  'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                                children: v('resolution'),
                              }),
                              (0, h.jsx)('div', {
                                className: 'w-3/4',
                                children: (0, h.jsx)(m.NI, {
                                  children: (0, h.jsx)(x.r, {
                                    checked: n.value,
                                    onCheckedChange: n.onChange,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, h.jsxs)('div', {
                            className: 'flex pt-1',
                            children: [
                              (0, h.jsx)('div', { className: 'w-1/4' }),
                              (0, h.jsx)(m.zG, {}),
                            ],
                          }),
                        ],
                      });
                    },
                  }),
                  (0, h.jsx)(m.Wi, {
                    control: g.control,
                    name: 'parser_config.graphrag.community',
                    render: function (e) {
                      var n = e.field;
                      return (0, h.jsxs)(m.xJ, {
                        className: ' items-center space-y-0 ',
                        children: [
                          (0, h.jsxs)('div', {
                            className: 'flex items-center',
                            children: [
                              (0, h.jsx)(m.lX, {
                                tooltip: b('communityTip'),
                                className:
                                  'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                                children: v('community'),
                              }),
                              (0, h.jsx)('div', {
                                className: 'w-3/4',
                                children: (0, h.jsx)(m.NI, {
                                  children: (0, h.jsx)(x.r, {
                                    checked: n.value,
                                    onCheckedChange: n.onChange,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, h.jsxs)('div', {
                            className: 'flex pt-1',
                            children: [
                              (0, h.jsx)('div', { className: 'w-1/4' }),
                              (0, h.jsx)(m.zG, {}),
                            ],
                          }),
                        ],
                      });
                    },
                  }),
                ],
              }),
          ],
        });
      };
    },
    59909: function (e, n, t) {
      t.d(n, {
        J3: function () {
          return N;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(96330),
        i = t(86968),
        o = t(83608),
        l = t.n(o),
        c = t(31012),
        u = t(62435),
        d = t(87536),
        f = t(15309),
        m = t(57636),
        p = t(80499),
        x = t(27591),
        h = t(2834),
        v = t(79720),
        g = t(86074),
        j = [
          s.K1.Table,
          s.K1.Resume,
          s.K1.One,
          s.K1.Picture,
          s.K1.KnowledgeGraph,
          s.K1.Qa,
          s.K1.Tag,
        ],
        N = function (e) {
          return !j.some(function (n) {
            return n === e;
          });
        },
        w =
          (s.K1.Table,
          s.K1.KnowledgeGraph,
          s.K1.Tag,
          'parser_config.raptor.use_raptor');
      n.ZP = function () {
        var e = (0, d.Gc)(),
          n = (0, i.qM)('knowledgeConfiguration').t,
          t = (0, d.qo)({ name: w }),
          r = (0, u.useCallback)(
            function () {
              e.setValue('parser_config.raptor.random_seed', l()(1e4));
            },
            [e],
          );
        return (0, g.jsxs)(g.Fragment, {
          children: [
            (0, g.jsx)(p.Wi, {
              control: e.control,
              name: w,
              render: function (t) {
                var r = t.field;
                return (
                  void 0 === r.value &&
                    e.setValue('parser_config.raptor.use_raptor', !1),
                  (0, g.jsxs)(p.xJ, {
                    defaultChecked: !1,
                    className: 'items-center space-y-0 ',
                    children: [
                      (0, g.jsxs)('div', {
                        className: 'flex items-center',
                        children: [
                          (0, g.jsx)(p.lX, {
                            tooltip: n('useRaptorTip'),
                            className:
                              'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                            children: n('useRaptor'),
                          }),
                          (0, g.jsx)('div', {
                            className: 'w-3/4',
                            children: (0, g.jsx)(p.NI, {
                              children: (0, g.jsx)(h.r, {
                                checked: r.value,
                                onCheckedChange: r.onChange,
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, g.jsxs)('div', {
                        className: 'flex pt-1',
                        children: [
                          (0, g.jsx)('div', { className: 'w-1/4' }),
                          (0, g.jsx)(p.zG, {}),
                        ],
                      }),
                    ],
                  })
                );
              },
            }),
            t &&
              (0, g.jsxs)('div', {
                className: 'space-y-3',
                children: [
                  (0, g.jsx)(p.Wi, {
                    control: e.control,
                    name: 'parser_config.raptor.prompt',
                    render: function (e) {
                      var t = e.field;
                      return (0, g.jsxs)(p.xJ, {
                        className: ' items-center space-y-0 ',
                        children: [
                          (0, g.jsxs)('div', {
                            className: 'flex items-start',
                            children: [
                              (0, g.jsx)(p.lX, {
                                tooltip: n('promptTip'),
                                className:
                                  'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                                children: n('prompt'),
                              }),
                              (0, g.jsx)('div', {
                                className: 'w-3/4',
                                children: (0, g.jsx)(p.NI, {
                                  children: (0, g.jsx)(
                                    v.g,
                                    a()(a()({}, t), {}, { rows: 8 }),
                                  ),
                                }),
                              }),
                            ],
                          }),
                          (0, g.jsxs)('div', {
                            className: 'flex pt-1',
                            children: [
                              (0, g.jsx)('div', { className: 'w-1/4' }),
                              (0, g.jsx)(p.zG, {}),
                            ],
                          }),
                        ],
                      });
                    },
                  }),
                  (0, g.jsx)(f.W, {
                    name: 'parser_config.raptor.max_token',
                    label: n('maxToken'),
                    tooltip: n('maxTokenTip'),
                    defaultValue: 256,
                    max: 2048,
                    min: 0,
                  }),
                  (0, g.jsx)(f.W, {
                    name: 'parser_config.raptor.threshold',
                    label: n('threshold'),
                    tooltip: n('thresholdTip'),
                    defaultValue: 0.1,
                    step: 0.01,
                    max: 1,
                    min: 0,
                  }),
                  (0, g.jsx)(f.W, {
                    name: 'parser_config.raptor.max_cluster',
                    label: n('maxCluster'),
                    tooltip: n('maxClusterTip'),
                    defaultValue: 64,
                    max: 1024,
                    min: 1,
                  }),
                  (0, g.jsx)(p.Wi, {
                    control: e.control,
                    name: 'parser_config.raptor.random_seed',
                    render: function (e) {
                      var t = e.field;
                      return (0, g.jsxs)(p.xJ, {
                        className: ' items-center space-y-0 ',
                        children: [
                          (0, g.jsxs)('div', {
                            className: 'flex items-center',
                            children: [
                              (0, g.jsx)(p.lX, {
                                className:
                                  'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                                children: n('randomSeed'),
                              }),
                              (0, g.jsx)('div', {
                                className: 'w-3/4',
                                children: (0, g.jsx)(p.NI, {
                                  defaultValue: 0,
                                  children: (0, g.jsxs)('div', {
                                    className: 'flex gap-4',
                                    children: [
                                      (0, g.jsx)(x.II, a()({}, t)),
                                      (0, g.jsx)(m.zx, {
                                        size: 'sm',
                                        onClick: r,
                                        type: 'button',
                                        children: (0, g.jsx)(c.Z, {}),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, g.jsxs)('div', {
                            className: 'flex pt-1',
                            children: [
                              (0, g.jsx)('div', { className: 'w-1/4' }),
                              (0, g.jsx)(p.zG, {}),
                            ],
                          }),
                        ],
                      });
                    },
                  }),
                ],
              }),
          ],
        });
      };
    },
    15309: function (e, n, t) {
      t.d(n, {
        W: function () {
          return d;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(27080),
        i = t(87536),
        o = t(4533),
        l = t(80499),
        c = t(27591),
        u = t(86074);
      function d(e) {
        var n = e.max,
          t = e.min,
          r = e.step,
          d = e.label,
          f = e.name,
          m = e.tooltip,
          p = e.defaultValue,
          x = e.className,
          h = (0, i.Gc)();
        return (0, u.jsx)(l.Wi, {
          control: h.control,
          name: f,
          defaultValue: p || 0,
          render: function (e) {
            var i = e.field;
            return (0, u.jsxs)(l.xJ, {
              className: ' items-center space-y-0 ',
              children: [
                (0, u.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, u.jsx)(l.lX, {
                      tooltip: m,
                      className:
                        'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                      children: d,
                    }),
                    (0, u.jsxs)('div', {
                      className: (0, s.cn)(
                        'flex items-center gap-14 justify-between',
                        'w-3/4',
                        x,
                      ),
                      children: [
                        (0, u.jsx)(l.NI, {
                          children: (0, u.jsx)(
                            o.b,
                            a()(a()({}, i), {}, { max: n, min: t, step: r }),
                          ),
                        }),
                        (0, u.jsx)(l.NI, {
                          children: (0, u.jsx)(
                            c.II,
                            a()(
                              a()(
                                {
                                  type: 'number',
                                  className: 'h-7 w-20',
                                  max: n,
                                  min: t,
                                  step: r,
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
                (0, u.jsx)(l.zG, {}),
              ],
            });
          },
        });
      }
    },
    28993: function (e, n, t) {
      t.d(n, {
        $N: function () {
          return C;
        },
        Vq: function () {
          return g;
        },
        cN: function () {
          return k;
        },
        cZ: function () {
          return b;
        },
        fK: function () {
          return y;
        },
        hg: function () {
          return j;
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
        f = ['className'],
        m = ['className', 'children'],
        p = ['className'],
        x = ['className'],
        h = ['className'],
        v = ['className'],
        g = o.fC,
        j = o.xz,
        N = o.h_,
        w =
          (o.x8,
          c.forwardRef(function (e, n) {
            var t = e.className,
              r = i()(e, f);
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
      w.displayName = o.aV.displayName;
      var b = c.forwardRef(function (e, n) {
        var t = e.className,
          r = e.children,
          s = i()(e, m);
        return (0, d.jsxs)(N, {
          children: [
            (0, d.jsx)(w, {}),
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
      b.displayName = o.VY.displayName;
      var y = function (e) {
        var n = e.className,
          t = i()(e, p);
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
      y.displayName = 'DialogHeader';
      var k = function (e) {
        var n = e.className,
          t = i()(e, x);
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
      k.displayName = 'DialogFooter';
      var C = c.forwardRef(function (e, n) {
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
      (C.displayName = o.Dx.displayName),
        (c.forwardRef(function (e, n) {
          var t = e.className,
            r = i()(e, v);
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
    4533: function (e, n, t) {
      t.d(n, {
        b: function () {
          return p;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(13769),
        i = t.n(s),
        o = t(68482),
        l = t(62435),
        c = t(27080),
        u = t(86074),
        d = ['className', 'label', 'labelPosition'],
        f = ['value', 'onChange'],
        m = l.forwardRef(function (e, n) {
          var t = e.className,
            r = e.label,
            s = e.labelPosition,
            f = void 0 === s ? 'top' : s,
            m = i()(e, d),
            p = Array.isArray(m.value) ? m.value : [m.min, m.max];
          return (0, u.jsxs)(
            o.fC,
            a()(
              a()(
                {
                  ref: n,
                  className: (0, c.cn)(
                    'relative flex w-full touch-none select-none items-center',
                    t,
                  ),
                },
                m,
              ),
              {},
              {
                children: [
                  (0, u.jsx)(o.fQ, {
                    className:
                      'relative h-2 w-full grow overflow-hidden rounded-full bg-secondary',
                    children: (0, u.jsx)(o.e6, {
                      className: 'absolute h-full bg-background-checked',
                    }),
                  }),
                  p.map(function (e, n) {
                    return (0, u.jsx)(
                      l.Fragment,
                      {
                        children: (0, u.jsx)(o.bU, {
                          className:
                            'relative block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
                          children:
                            r &&
                            (0, u.jsx)('span', {
                              className: (0, c.cn)(
                                'absolute flex w-full justify-center',
                                'top' === f && '-top-7',
                                'bottom' === f && 'top-4',
                              ),
                              children: r(e),
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
      m.displayName = 'DualRangeSlider';
      var p = l.forwardRef(function (e, n) {
        var t = e.value,
          r = e.onChange,
          s = i()(e, f);
        return (0, u.jsx)(
          m,
          a()(
            {
              ref: n,
              value: [t],
              onValueChange: function (e) {
                r(e[0]);
              },
            },
            s,
          ),
        );
      });
    },
    2834: function (e, n, t) {
      t.d(n, {
        r: function () {
          return f;
        },
      });
      var r = t(97857),
        a = t.n(r),
        s = t(13769),
        i = t.n(s),
        o = t(60761),
        l = t(62435),
        c = t(27080),
        u = t(86074),
        d = ['className'],
        f = l.forwardRef(function (e, n) {
          var t = e.className,
            r = i()(e, d);
          return (0, u.jsx)(
            o.fC,
            a()(
              a()(
                {
                  className: (0, c.cn)(
                    'peer inline-flex h-3.5 w-6 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-background-checked data-[state=unchecked]:bg-text-sub-title',
                    t,
                  ),
                },
                r,
              ),
              {},
              {
                ref: n,
                children: (0, u.jsx)(o.bU, {
                  className: (0, c.cn)(
                    'pointer-events-none block size-3 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-2 data-[state=unchecked]:translate-x-0',
                  ),
                }),
              },
            ),
          );
        });
      f.displayName = o.fC.displayName;
    },
    75269: function (e, n, t) {
      t.d(n, {
        RM: function () {
          return N;
        },
        SC: function () {
          return w;
        },
        iA: function () {
          return g;
        },
        pj: function () {
          return y;
        },
        ss: function () {
          return b;
        },
        xD: function () {
          return j;
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
        f = ['className'],
        m = ['className'],
        p = ['className'],
        x = ['className'],
        h = ['className'],
        v = ['className'],
        g = o.forwardRef(function (e, n) {
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
      g.displayName = 'Table';
      var j = o.forwardRef(function (e, n) {
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
      j.displayName = 'TableHeader';
      var N = o.forwardRef(function (e, n) {
        var t = e.className,
          r = i()(e, f);
        return (0, c.jsx)(
          'tbody',
          a()(
            { ref: n, className: (0, l.cn)('[&_tr:last-child]:border-0', t) },
            r,
          ),
        );
      });
      (N.displayName = 'TableBody'),
        (o.forwardRef(function (e, n) {
          var t = e.className,
            r = i()(e, m);
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
      var w = o.forwardRef(function (e, n) {
        var t = e.className,
          r = i()(e, p);
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
      w.displayName = 'TableRow';
      var b = o.forwardRef(function (e, n) {
        var t = e.className,
          r = i()(e, x);
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
      b.displayName = 'TableHead';
      var y = o.forwardRef(function (e, n) {
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
      (y.displayName = 'TableCell'),
        (o.forwardRef(function (e, n) {
          var t = e.className,
            r = i()(e, v);
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
    79720: function (e, n, t) {
      t.d(n, {
        A: function () {
          return x;
        },
        g: function () {
          return p;
        },
      });
      var r = t(5574),
        a = t.n(r),
        s = t(97857),
        i = t.n(s),
        o = t(13769),
        l = t.n(o),
        c = t(62435),
        u = t(27080),
        d = t(86074),
        f = ['className'],
        m = ['value', 'onChange'],
        p = c.forwardRef(function (e, n) {
          var t = e.className,
            r = l()(e, f);
          return (0, d.jsx)(
            'textarea',
            i()(
              {
                className: (0, u.cn)(
                  'flex min-h-[80px] w-full rounded-md border border-input bg-colors-background-inverse-weak px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm overflow-hidden',
                  t,
                ),
                ref: n,
              },
              r,
            ),
          );
        });
      p.displayName = 'Textarea';
      var x = c.forwardRef(function (e, n) {
        var t = e.value,
          r = e.onChange,
          s = l()(e, m),
          o = c.useState(),
          u = a()(o, 2),
          f = u[0],
          x = u[1],
          h = c.useCallback(function (e) {
            x(e.target.value);
          }, []),
          v = c.useCallback(
            function (e) {
              null == r || r(e.target.value);
            },
            [r],
          );
        return (
          c.useEffect(
            function () {
              x(t);
            },
            [t],
          ),
          (0, d.jsx)(
            p,
            i()(i()({}, s), {}, { value: f, onBlur: v, onChange: h, ref: n }),
          )
        );
      });
    },
    8002: function (e, n, t) {
      t.d(n, {
        C4: function () {
          return F;
        },
        E2: function () {
          return D;
        },
        MA: function () {
          return P;
        },
        ME: function () {
          return Z;
        },
        PX: function () {
          return G;
        },
        Yi: function () {
          return R;
        },
      });
      var r = t(15009),
        a = t.n(r),
        s = t(99289),
        i = t.n(s),
        o = t(97857),
        l = t.n(o),
        c = t(5574),
        u = t.n(c),
        d = t(87181),
        f = t(54707),
        m = t(73955),
        p = t(78551),
        x = t(30202),
        h = t(4527),
        v = t(58580),
        g = t(45360),
        j = t(62435),
        N = t(42028),
        w = t(2938),
        b = 'testRetrieval',
        y = 'fetchKnowledgeListByPage',
        k = 'createKnowledge',
        C = 'deleteKnowledge',
        _ = 'saveKnowledge',
        K = 'fetchKnowledgeDetail',
        T = function () {
          return (0, N.UO)().id;
        },
        F = function () {
          var e,
            n = T(),
            t = (0, j.useState)(),
            r = u()(t, 2),
            s = r[0],
            o = r[1],
            c = (0, j.useRef)(!1),
            f = (0, d.Q)(),
            x = f.filterValue,
            h = f.handleFilterSubmit,
            v = (0, j.useState)(1),
            g = u()(v, 2),
            N = g[0],
            w = g[1],
            y = (0, j.useState)(10),
            k = u()(y, 2),
            C = k[0],
            _ = k[1],
            K = (0, j.useCallback)(function (e, n) {
              w(e), _(n);
            }, []),
            F = (0, j.useMemo)(
              function () {
                return l()(
                  l()({}, s),
                  {},
                  {
                    kb_id: (null == s ? void 0 : s.kb_id) || n,
                    page: N,
                    size: C,
                    doc_ids: x.doc_ids,
                  },
                );
              },
              [x, n, N, C, s],
            ),
            R = (0, p.a)({
              queryKey: [b, F, N, C],
              initialData: { chunks: [], doc_aggs: [], total: 0 },
              enabled: !1,
              gcTime: 0,
              queryFn:
                ((e = i()(
                  a()().mark(function e() {
                    var n, t, r;
                    return a()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), m.ZP.retrieval_test(F);
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
            }),
            Z = R.data,
            D = R.isFetching,
            P = R.refetch;
          return (
            (0, j.useEffect)(
              function () {
                c.current && P(), (c.current = !0);
              },
              [N, C, P, x],
            ),
            {
              data: Z,
              loading: D,
              setValues: o,
              refetch: P,
              onPaginationChange: K,
              page: N,
              pageSize: C,
              handleFilterSubmit: h,
              filterValue: x,
            }
          );
        },
        R = function () {
          var e,
            n = (0, w.Qe)(),
            t = n.searchString,
            r = n.handleInputChange,
            s = (0, w.ye)(),
            o = s.pagination,
            c = s.setPagination,
            u = (0, v.Z)(t, { wait: 500 }),
            f = (0, d.Q)(),
            x = f.filterValue,
            h = f.handleFilterSubmit,
            g = (0, p.a)({
              queryKey: [
                y,
                l()(
                  l()({ debouncedSearchString: u }, o),
                  {},
                  { filterValue: x },
                ),
              ],
              initialData: { kbs: [], total: 0 },
              gcTime: 0,
              queryFn:
                ((e = i()(
                  a()().mark(function e() {
                    var n, t;
                    return a()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              (0, m.Fb)(
                                {
                                  keywords: u,
                                  page_size: o.pageSize,
                                  page: o.current,
                                },
                                { owner_ids: x.owner },
                              )
                            );
                          case 2:
                            return (
                              (n = e.sent),
                              (t = n.data),
                              e.abrupt('return', null == t ? void 0 : t.data)
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
            N = g.data,
            b = g.isFetching,
            k = (0, j.useCallback)(
              function (e) {
                r(e);
              },
              [r],
            );
          return l()(
            l()({}, N),
            {},
            {
              searchString: t,
              handleInputChange: k,
              pagination: l()(
                l()({}, o),
                {},
                { total: null == N ? void 0 : N.total },
              ),
              setPagination: c,
              loading: b,
              filterValue: x,
              handleFilterSubmit: h,
            },
          );
        },
        Z = function () {
          var e,
            n = (0, x.NL)(),
            t = (0, h.D)({
              mutationKey: [k],
              mutationFn:
                ((e = i()(
                  a()().mark(function e(t) {
                    var r, s, i;
                    return a()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), m.ZP.createKb(t);
                          case 2:
                            return (
                              (r = e.sent),
                              (s = r.data),
                              0 === (i = void 0 === s ? {} : s).code &&
                                (g.ZP.success(
                                  f.Z.t(
                                    'message.'.concat(
                                      null != t && t.id
                                        ? 'modified'
                                        : 'created',
                                    ),
                                  ),
                                ),
                                n.invalidateQueries({
                                  queryKey: ['fetchKnowledgeList'],
                                })),
                              e.abrupt('return', i)
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
            createKnowledge: t.mutateAsync,
          };
        },
        D = function () {
          var e,
            n = (0, x.NL)(),
            t = (0, h.D)({
              mutationKey: [C],
              mutationFn:
                ((e = i()(
                  a()().mark(function e(t) {
                    var r, s, i;
                    return a()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), m.ZP.rmKb({ kb_id: t });
                          case 2:
                            return (
                              (s = e.sent),
                              0 === (i = s.data).code &&
                                (g.ZP.success(f.Z.t('message.deleted')),
                                n.invalidateQueries({ queryKey: [y] })),
                              e.abrupt(
                                'return',
                                null !== (r = null == i ? void 0 : i.data) &&
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
            deleteKnowledge: t.mutateAsync,
          };
        },
        P = function () {
          var e,
            n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = T(),
            r = (0, x.NL)(),
            s = (0, h.D)({
              mutationKey: [_],
              mutationFn:
                ((e = i()(
                  a()().mark(function e(s) {
                    var i, o, c;
                    return a()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              m.ZP.updateKb(
                                l()(
                                  {
                                    kb_id:
                                      null != s && s.kb_id
                                        ? null == s
                                          ? void 0
                                          : s.kb_id
                                        : t,
                                  },
                                  s,
                                ),
                              )
                            );
                          case 2:
                            return (
                              (i = e.sent),
                              (o = i.data),
                              0 === (c = void 0 === o ? {} : o).code &&
                                (g.ZP.success(f.Z.t('message.updated')),
                                n
                                  ? r.invalidateQueries({ queryKey: [y] })
                                  : r.invalidateQueries({
                                      queryKey: ['fetchKnowledgeDetail'],
                                    })),
                              e.abrupt('return', c)
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
            data: s.data,
            loading: s.isPending,
            saveKnowledgeConfiguration: s.mutateAsync,
          };
        },
        G = function (e) {
          var n = (0, N.UO)().id,
            t = [K];
          'number' == typeof e && (t = [K, e]);
          var r,
            s = (0, p.a)({
              queryKey: t,
              initialData: {},
              gcTime: 0,
              queryFn:
                ((r = i()(
                  a()().mark(function e() {
                    var t, r, s;
                    return a()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), m.ZP.get_kb_detail({ kb_id: n })
                            );
                          case 2:
                            return (
                              (r = e.sent),
                              (s = r.data),
                              e.abrupt(
                                'return',
                                null !== (t = null == s ? void 0 : s.data) &&
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
                  return r.apply(this, arguments);
                }),
            });
          return { data: s.data, loading: s.isFetching };
        };
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
        f = r.Z.connectFileToKnowledge,
        m = r.Z.get_document_file,
        p = {
          listFile: { url: i, method: 'get' },
          removeFile: { url: o, method: 'post' },
          uploadFile: { url: l, method: 'post' },
          renameFile: { url: c, method: 'post' },
          getAllParentFolder: { url: u, method: 'get' },
          createFolder: { url: d, method: 'post' },
          connectFileToKnowledge: { url: f, method: 'post' },
          getFile: { url: r.Z.getFile, method: 'get', responseType: 'blob' },
          getDocumentFile: { url: m, method: 'get', responseType: 'blob' },
          moveFile: { url: r.Z.moveFile, method: 'post' },
        },
        x = (0, a.Z)(p, s.ZP);
      n.Z = x;
    },
    51331: function (e, n, t) {
      t.d(n, {
        AG: function () {
          return g;
        },
        De: function () {
          return w;
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
          return x;
        },
        td: function () {
          return N;
        },
        uA: function () {
          return v;
        },
        vn: function () {
          return f;
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
        f = (function () {
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
      function m(e, n) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = i()(
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
      function x(e) {
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
                    return (e.next = 2), m(n, o.nK.Html);
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
      var v = function (e, n) {
          var t = window.URL.createObjectURL(e),
            r = document.createElement('a');
          (r.href = t),
            n && (r.download = n),
            r.click(),
            window.URL.revokeObjectURL(t);
        },
        g = (function () {
          var e = i()(
            a()().mark(function e(n) {
              var t, r, s;
              return a()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (t = n.id), (r = n.filename), (e.next = 3), m(t);
                    case 3:
                      (s = e.sent), v(s, r);
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
        j = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        N = function (e) {
          for (
            var n = 0, t = ('string' == typeof e ? parseInt(e, 10) : e) || 0;
            t >= 1024 && ++n;

          )
            t /= 1024;
          return t.toFixed(t < 10 && n > 0 ? 1 : 0) + ' ' + j[n];
        },
        w = (function () {
          var e = i()(
            a()().mark(function e(n, t) {
              var r;
              return a()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (r = new Blob([JSON.stringify(n)], { type: o.nK.Json })),
                        v(r, t);
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
//# sourceMappingURL=6422.879281de.async.js.map
