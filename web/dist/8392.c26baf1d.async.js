(self.webpackChunk = self.webpackChunk || []).push([
  [8392],
  {
    46693: function (t, s, e) {
      'use strict';
      e.d(s, {
        $: function () {
          return x;
        },
      });
      var i,
        n = e(97857),
        c = e.n(n),
        o = e(13769),
        r = e.n(o),
        a = e(39386),
        u = e(27080),
        p = e(16165),
        g = e(87547),
        v = e(7134),
        f = e(86074),
        l = ['name', 'width', 'height', 'imgClass'],
        d = [];
      try {
        (i = e(78131)),
          (d = i.keys().map(function (t) {
            return { name: t.replace(/\.\/(.*)\.\w+$/, '$1'), value: i(t) };
          }));
      } catch (t) {
        console.warn(t), (d = []);
      }
      var m = function (t) {
          var s = t.name,
            e = t.width,
            i = t.height,
            n = t.imgClass,
            o = r()(t, l),
            a = d.find(function (t) {
              return t.name === s;
            });
          return (0, f.jsx)(
            p.Z,
            c()(
              {
                component: function () {
                  return (0, f.jsx)('img', {
                    src: null == a ? void 0 : a.value,
                    alt: '',
                    width: e,
                    height: i,
                    className: (0, u.cn)(n, 'max-w-full'),
                  });
                },
              },
              o,
            ),
          );
        },
        x = function (t) {
          var s = t.name,
            e = t.height,
            i = void 0 === e ? 48 : e,
            n = t.width,
            c = void 0 === n ? 48 : n,
            o = t.size,
            r = void 0 === o ? 'large' : o,
            u = t.imgClass,
            p = a.s[s];
          return p
            ? (0, f.jsx)(m, {
                name: 'llm/'.concat(p),
                width: c,
                height: i,
                imgClass: u,
              })
            : (0, f.jsx)(v.C, {
                shape: 'square',
                size: r,
                icon: (0, f.jsx)(g.Z, {}),
              });
        };
      s.Z = m;
    },
    38392: function (t, s, e) {
      'use strict';
      e.d(s, {
        DC: function () {
          return V;
        },
        Ju: function () {
          return z;
        },
        OR: function () {
          return O;
        },
        T: function () {
          return C;
        },
        X7: function () {
          return $;
        },
        hl: function () {
          return F;
        },
        uZ: function () {
          return T;
        },
        ux: function () {
          return D;
        },
      });
      var i = e(97857),
        n = e.n(i),
        c = e(19632),
        o = e.n(c),
        r = e(9783),
        a = e.n(r),
        u = e(5574),
        p = e.n(u),
        g = e(15009),
        v = e.n(g),
        f = e(99289),
        l = e.n(f),
        d = e(46693),
        m = e(96330),
        x = e(72668),
        h = e(31098),
        b = e(33092),
        k = e(78551),
        y = e(30202),
        w = e(4527),
        q = e(86250),
        L = e(45360),
        j = e(62435),
        _ = e(67421),
        K = e(86074),
        P = function (t) {
          var s,
            e = (0, k.a)({
              queryKey: ['llmList'],
              initialData: {},
              queryFn:
                ((s = l()(
                  v()().mark(function s() {
                    var e, i, n;
                    return v()().wrap(function (s) {
                      for (;;)
                        switch ((s.prev = s.next)) {
                          case 0:
                            return (
                              (s.next = 2), x.ZP.llm_list({ model_type: t })
                            );
                          case 2:
                            return (
                              (i = s.sent),
                              (n = i.data),
                              s.abrupt(
                                'return',
                                null !== (e = null == n ? void 0 : n.data) &&
                                  void 0 !== e
                                  ? e
                                  : {},
                              )
                            );
                          case 5:
                          case 'end':
                            return s.stop();
                        }
                    }, s);
                  }),
                )),
                function () {
                  return s.apply(this, arguments);
                }),
            });
          return e.data;
        };
      function Z(t) {
        return {
          label: (0, K.jsxs)(q.Z, {
            align: 'center',
            gap: 6,
            children: [
              (0, K.jsx)(d.$, {
                name: (0, b.Os)(t.fid, t.llm_name),
                width: 26,
                height: 26,
                size: 'small',
              }),
              (0, K.jsx)('span', { children: (0, b.KE)(t.llm_name) }),
            ],
          }),
          value: ''.concat(t.llm_name, '@').concat(t.fid),
          disabled: !t.available,
          is_tools: t.is_tools,
        };
      }
      var F = function () {
          var t = P(),
            s = (0, j.useCallback)(
              function () {
                var s = m.Vr.Image2text,
                  e = s.toUpperCase();
                return Object.entries(t)
                  .map(function (t) {
                    var i = p()(t, 2);
                    return {
                      label: i[0],
                      options: i[1]
                        .filter(function (t) {
                          return (
                            (t.model_type.includes(s) ||
                              (t.tags && t.tags.includes(e))) &&
                            t.available
                          );
                        })
                        .map(Z),
                    };
                  })
                  .filter(function (t) {
                    return t.options.length > 0;
                  });
              },
              [t],
            ),
            e = (0, j.useCallback)(
              function (s) {
                return Object.entries(t)
                  .filter(function (t) {
                    var e = p()(t, 2)[1];
                    return (
                      !s ||
                      e.some(function (t) {
                        return t.model_type.includes(s);
                      })
                    );
                  })
                  .map(function (t) {
                    var e = p()(t, 2);
                    return {
                      label: e[0],
                      options: e[1]
                        .filter(function (t) {
                          return (
                            (!s || t.model_type.includes(s)) && t.available
                          );
                        })
                        .map(Z),
                    };
                  })
                  .filter(function (t) {
                    return t.options.length > 0;
                  });
              },
              [t],
            );
          return a()(
            a()(
              a()(
                a()(
                  a()(
                    a()({}, m.Vr.Chat, e(m.Vr.Chat)),
                    m.Vr.Embedding,
                    e(m.Vr.Embedding),
                  ),
                  m.Vr.Image2text,
                  s(),
                ),
                m.Vr.Speech2text,
                e(m.Vr.Speech2text),
              ),
              m.Vr.Rerank,
              e(m.Vr.Rerank),
            ),
            m.Vr.TTS,
            e(m.Vr.TTS),
          );
        },
        C = function (t) {
          var s = F();
          return t.reduce(function (t, e) {
            return (
              s[e].forEach(function (s) {
                var e,
                  i = t.find(function (t) {
                    return t.label === s.label;
                  });
                i ? (e = i.options).push.apply(e, o()(s.options)) : t.push(s);
              }),
              t
            );
          }, []);
        },
        V = function () {
          var t,
            s,
            e,
            i,
            c =
              ((s = (0, k.a)({
                queryKey: ['myLlmList'],
                initialData: {},
                gcTime: 0,
                queryFn:
                  ((t = l()(
                    v()().mark(function t() {
                      var s, e, i;
                      return v()().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), x.ZP.my_llm();
                            case 2:
                              return (
                                (e = t.sent),
                                (i = e.data),
                                t.abrupt(
                                  'return',
                                  null !== (s = null == i ? void 0 : i.data) &&
                                    void 0 !== s
                                    ? s
                                    : {},
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
              })),
              { data: s.data, loading: s.isFetching }),
            o = c.data,
            r = c.loading,
            a =
              ((i = (0, k.a)({
                queryKey: ['factoryList'],
                initialData: [],
                gcTime: 0,
                queryFn:
                  ((e = l()(
                    v()().mark(function t() {
                      var s, e, i;
                      return v()().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), x.ZP.factories_list();
                            case 2:
                              return (
                                (e = t.sent),
                                (i = e.data),
                                t.abrupt(
                                  'return',
                                  null !== (s = null == i ? void 0 : i.data) &&
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
                    return e.apply(this, arguments);
                  }),
              })),
              { data: i.data, loading: i.isFetching }),
            u = a.data,
            g = a.loading;
          return {
            myLlmList: (0, j.useMemo)(
              function () {
                return Object.entries(o).map(function (t) {
                  var s,
                    e,
                    i = p()(t, 2),
                    c = i[0],
                    o = i[1];
                  return n()(
                    n()(
                      {
                        name: c,
                        logo:
                          null !==
                            (s =
                              null ===
                                (e = u.find(function (t) {
                                  return t.name === c;
                                })) || void 0 === e
                                ? void 0
                                : e.logo) && void 0 !== s
                            ? s
                            : '',
                      },
                      o,
                    ),
                    {},
                    {
                      llm: o.llm.map(function (t) {
                        return n()(n()({}, t), {}, { name: t.name });
                      }),
                    },
                  );
                });
              },
              [o, u],
            ),
            factoryList: (0, j.useMemo)(
              function () {
                var t = u.filter(function (t) {
                  return Object.keys(o).every(function (s) {
                    return s !== t.name;
                  });
                });
                return (0, h.tJ)(t);
              },
              [u, o],
            ),
            loading: r || g,
          };
        },
        D = function () {
          var t,
            s = (0, y.NL)(),
            e = (0, _.$G)().t,
            i = (0, w.D)({
              mutationKey: ['saveApiKey'],
              mutationFn:
                ((t = l()(
                  v()().mark(function t(i) {
                    var n, c;
                    return v()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), x.ZP.set_api_key(i);
                          case 2:
                            return (
                              (n = t.sent),
                              0 === (c = n.data).code &&
                                (L.ZP.success(e('message.modified')),
                                s.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                s.invalidateQueries({
                                  queryKey: ['factoryList'],
                                })),
                              t.abrupt('return', c.code)
                            );
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (s) {
                  return t.apply(this, arguments);
                }),
            });
          return {
            data: i.data,
            loading: i.isPending,
            saveApiKey: i.mutateAsync,
          };
        },
        O = function () {
          var t,
            s = (0, _.$G)().t,
            e = (0, w.D)({
              mutationKey: ['saveTenantInfo'],
              mutationFn:
                ((t = l()(
                  v()().mark(function t(e) {
                    var i, n;
                    return v()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), x.ZP.set_tenant_info(e);
                          case 2:
                            return (
                              (i = t.sent),
                              0 === (n = i.data).code &&
                                L.ZP.success(s('message.modified')),
                              t.abrupt('return', n.code)
                            );
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (s) {
                  return t.apply(this, arguments);
                }),
            });
          return {
            data: e.data,
            loading: e.isPending,
            saveTenantInfo: e.mutateAsync,
          };
        },
        T = function () {
          var t,
            s = (0, y.NL)(),
            e = (0, _.$G)().t,
            i = (0, w.D)({
              mutationKey: ['addLlm'],
              mutationFn:
                ((t = l()(
                  v()().mark(function t(i) {
                    var n, c;
                    return v()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), x.ZP.add_llm(i);
                          case 2:
                            return (
                              (n = t.sent),
                              0 === (c = n.data).code &&
                                (s.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                s.invalidateQueries({
                                  queryKey: ['factoryList'],
                                }),
                                L.ZP.success(e('message.modified'))),
                              t.abrupt('return', c.code)
                            );
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (s) {
                  return t.apply(this, arguments);
                }),
            });
          return { data: i.data, loading: i.isPending, addLlm: i.mutateAsync };
        },
        z = function () {
          var t,
            s = (0, y.NL)(),
            e = (0, _.$G)().t,
            i = (0, w.D)({
              mutationKey: ['deleteLlm'],
              mutationFn:
                ((t = l()(
                  v()().mark(function t(i) {
                    var n, c;
                    return v()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), x.ZP.delete_llm(i);
                          case 2:
                            return (
                              (n = t.sent),
                              0 === (c = n.data).code &&
                                (s.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                s.invalidateQueries({
                                  queryKey: ['factoryList'],
                                }),
                                L.ZP.success(e('message.deleted'))),
                              t.abrupt('return', c.code)
                            );
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (s) {
                  return t.apply(this, arguments);
                }),
            });
          return {
            data: i.data,
            loading: i.isPending,
            deleteLlm: i.mutateAsync,
          };
        },
        $ = function () {
          var t,
            s = (0, y.NL)(),
            e = (0, _.$G)().t,
            i = (0, w.D)({
              mutationKey: ['deleteFactory'],
              mutationFn:
                ((t = l()(
                  v()().mark(function t(i) {
                    var n, c;
                    return v()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), x.ZP.deleteFactory(i);
                          case 2:
                            return (
                              (n = t.sent),
                              0 === (c = n.data).code &&
                                (s.invalidateQueries({
                                  queryKey: ['myLlmList'],
                                }),
                                s.invalidateQueries({
                                  queryKey: ['factoryList'],
                                }),
                                L.ZP.success(e('message.deleted'))),
                              t.abrupt('return', c.code)
                            );
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (s) {
                  return t.apply(this, arguments);
                }),
            });
          return {
            data: i.data,
            loading: i.isPending,
            deleteFactory: i.mutateAsync,
          };
        };
    },
    33092: function (t, s, e) {
      'use strict';
      e.d(s, {
        KE: function () {
          return r;
        },
        Os: function () {
          return c;
        },
        Xy: function () {
          return o;
        },
      });
      var i = e(5574),
        n = e.n(i),
        c = function (t, s) {
          var e;
          return 'FastEmbed' === t
            ? null !== (e = s.split('/').at(0)) && void 0 !== e
              ? e
              : ''
            : t;
        },
        o = function (t) {
          var s = (null == t ? void 0 : t.split('@')) || [],
            e = n()(s, 2),
            i = e[0];
          return { fId: e[1], llmName: i };
        };
      function r(t) {
        var s;
        return null !== (s = t.split('__').at(0)) && void 0 !== s ? s : '';
      }
    },
    78131: function (t, s, e) {
      var i = {
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
      function n(t) {
        var s = c(t);
        return e(s);
      }
      function c(t) {
        if (!e.o(i, t)) {
          var s = new Error("Cannot find module '" + t + "'");
          throw ((s.code = 'MODULE_NOT_FOUND'), s);
        }
        return i[t];
      }
      (n.keys = function () {
        return Object.keys(i);
      }),
        (n.resolve = c),
        (t.exports = n),
        (n.id = 78131);
    },
    26032: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/akshare.ef2caf5a.svg';
    },
    30747: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/api.683cd994.svg';
    },
    90854: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/arxiv.bce2900b.svg';
    },
    4159: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/assistant.072e25ce.svg';
    },
    83544: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/baidu-fanyi.ab76b9e5.svg';
    },
    92892: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/baidu.75b1998a.svg';
    },
    69779: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/begin.1a91ddf7.svg';
    },
    55914: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/bing.dce94add.svg';
    },
    8156: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/cancel.4450bdfb.svg';
    },
    34339: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/chat-app-cube.0d35727d.svg';
    },
    57950: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/chat-configuration-atom.94c02c7a.svg';
    },
    49570: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/chat-star.7acfee68.svg';
    },
    38726: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/book-01.6e2a8a37.svg';
    },
    21357: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/book-02.4dd45490.svg';
    },
    88093: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/book-03.bd76b691.svg';
    },
    58355: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/book-04.594d0d1a.svg';
    },
    16035: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/chunk-empty.2b83673a.svg';
    },
    42576: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/knowledge-graph-01.597a96f3.svg';
    },
    46853: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/knowledge-graph-02.f36b7fab.svg';
    },
    54530: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/law-01.7070b7b3.svg';
    },
    75787: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/law-02.cae944e5.svg';
    },
    64179: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/manual-01.e3bb11d2.svg';
    },
    40547: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/manual-02.1a214f22.svg';
    },
    1437: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/manual-03.530928ca.svg';
    },
    81486: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/manual-04.63d43265.svg';
    },
    33952: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/media-01.086483b6.svg';
    },
    93802: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/media-02.d4c36e3e.svg';
    },
    88488: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/naive-01.f57569b7.svg';
    },
    74795: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/naive-02.3fe3610b.svg';
    },
    88533: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/one-01.5a1d6960.svg';
    },
    99199: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/one-02.0adb16f8.svg';
    },
    23192: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/one-03.466dec02.svg';
    },
    72906: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/one-04.3b10ee6d.svg';
    },
    64018: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/paper-01.e0019dcd.svg';
    },
    77250: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/paper-02.cf73a211.svg';
    },
    87162: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/presentation-01.06115027.svg';
    },
    59640: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/presentation-02.14d98352.svg';
    },
    39420: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/qa-01.ce8702ee.svg';
    },
    55086: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/qa-02.c181fcd6.svg';
    },
    76604: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/resume-01.75f1c93f.svg';
    },
    96131: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/resume-02.9c115ed1.svg';
    },
    42743: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/table-01.ec5d8a4d.svg';
    },
    84817: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/table-02.e4d2487c.svg';
    },
    96953: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/tag-01.ff996302.svg';
    },
    82472: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/tag-02.079b2b47.svg';
    },
    86933: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/concentrator.1353af83.svg';
    },
    71090: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/crawler.646367e0.svg';
    },
    38575: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/database.ef8eb5c8.svg';
    },
    98301: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/deepl.dc5ab23b.svg';
    },
    71483: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/delete.028228ac.svg';
    },
    84377: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/disable.55c8b50f.svg';
    },
    24287: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/duck.3285e948.svg';
    },
    10808: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/email.ac0507af.svg';
    },
    8207: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/enable.1b0d90c7.svg';
    },
    96492: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/es.d9969bbd.svg';
    },
    43004: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/exesql.696e27b1.svg';
    },
    83889: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/aep.90be9439.svg';
    },
    28897: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/ai.10138190.svg';
    },
    27635: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/avi.02b94047.svg';
    },
    52229: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/css.8f0ad31d.svg';
    },
    50747: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/csv.9a256b45.svg';
    },
    71691: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/dmg.57f9c02c.svg';
    },
    35354: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/doc.d8918cc4.svg';
    },
    69139: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/docx.38d543b1.svg';
    },
    43279: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/eps.3f104d7d.svg';
    },
    46462: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/exe.7c93a166.svg';
    },
    33179: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/fig.38a31555.svg';
    },
    54168: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/folder.84bcc794.svg';
    },
    73845: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/gif.06cc115a.svg';
    },
    53682: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/html.240ba9a0.svg';
    },
    26763: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/indd.22c71a5d.svg';
    },
    13916: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/java.bc10ed5b.svg';
    },
    19525: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/jpeg.b4ff21a3.svg';
    },
    24674: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/jpg.166b6e5d.svg';
    },
    38470: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/js.acbe367d.svg';
    },
    56373: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/json.79aa2433.svg';
    },
    77357: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/md.41082c13.svg';
    },
    49197: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/mkv.ed2674b7.svg';
    },
    44538: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/mp3.773e22e6.svg';
    },
    52038: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/mp4.4b08cc18.svg';
    },
    77747: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/mpeg.ca6e2469.svg';
    },
    82938: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/pdf.44344347.svg';
    },
    71915: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/png.b6606e2b.svg';
    },
    85173: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/ppt.1cb25ad9.svg';
    },
    62133: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/pptx.b108e970.svg';
    },
    30182: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/psd.1d66388a.svg';
    },
    38428: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/rss.f27341d3.svg';
    },
    78501: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/sql.f90e0e1d.svg';
    },
    72515: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/svg.a95ef072.svg';
    },
    4502: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/tiff.4719932c.svg';
    },
    55773: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/txt.ef59d3d8.svg';
    },
    63645: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/wav.fa097b95.svg';
    },
    87260: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/webp.ef46db37.svg';
    },
    5343: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/xls.2ba7600c.svg';
    },
    41475: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/xlsx.746a1908.svg';
    },
    38476: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/xml.b90e705e.svg';
    },
    39121: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/file-management.b76487d8.svg';
    },
    69696: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/github.0aef0d01.svg';
    },
    99466: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/google-scholar.44e74dbb.svg';
    },
    18176: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/google.be71d0f8.svg';
    },
    57355: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/graph.aed14f6e.svg';
    },
    82888: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/invoke-ai.f20c65b6.svg';
    },
    31801: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/jin10.878bef8b.svg';
    },
    30552: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/keyword.2d1a0d69.svg';
    },
    87055: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/knowledge-base.1c6120ee.svg';
    },
    96450: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/knowledge-configration.852175c9.svg';
    },
    9385: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/knowledge-dataset.722b6fe7.svg';
    },
    65376: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/knowledge-testing.bde5e258.svg';
    },
    6514: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/langfuse.78704466.svg';
    },
    74768: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/anthropic.65954479.svg';
    },
    99817: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/azure.c56d7584.svg';
    },
    93594: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/baai.c8138ebe.svg';
    },
    6507: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/baichuan.e3f694dc.svg';
    },
    30818: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/bedrock.3a8ac5ed.svg';
    },
    69534: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/chat-minimax.9b4384d0.svg';
    },
    86198: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/cohere.6ea354af.svg';
    },
    23476: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/deepseek.f974cd8d.svg';
    },
    97300: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/fish-audio.fc05a3e6.svg';
    },
    69156: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/gemini.87ab9858.svg';
    },
    29034: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/github.6dbd4f80.svg';
    },
    75383: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/google-cloud.d0802654.svg';
    },
    93926: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/google.36013c77.svg';
    },
    41538: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/gpustack.e4d6956b.svg';
    },
    43719: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/groq-next.8c75e144.svg';
    },
    20566: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/huggingface.fcf354fa.svg';
    },
    10266: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/hunyuan.3b1d640a.svg';
    },
    19765: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/jina.bfc92c30.svg';
    },
    68341: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/lepton-ai.0e3dff35.svg';
    },
    77894: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/lm-studio.7129f824.svg';
    },
    97354: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/local-ai.7a303131.svg';
    },
    58247: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/mistral.dfb07556.svg';
    },
    21248: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/modelscope.b21a1489.svg';
    },
    98184: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/moonshot.192bc590.svg';
    },
    14860: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/nomic-ai.ecf954c1.svg';
    },
    72584: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/novita-ai.f8cc289c.svg';
    },
    33325: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/nvidia.3031fca1.svg';
    },
    59488: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/ollama.2677a93a.svg';
    },
    23258: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/open-router.7226a5e8.svg';
    },
    63715: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/openai-api.42d3bdf6.svg';
    },
    81459: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/openai.6242ead4.svg';
    },
    39886: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/perfx-cloud.9668e908.svg';
    },
    89957: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/ppio.ce974b8e.svg';
    },
    13492: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/replicate.b558c271.svg';
    },
    85448: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/sentence-transformers.80312660.svg';
    },
    65762: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/siliconflow.6bafc788.svg';
    },
    4216: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/spark.54d37193.svg';
    },
    53618: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/stepfun.38dd7ff5.svg';
    },
    96734: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/tencent-cloud.637fb842.svg';
    },
    65167: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/together-ai.0777a553.svg';
    },
    74296: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/tongyi.8c1b0f0d.svg';
    },
    30464: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/upstage.bff6c9f0.svg';
    },
    91333: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/vllm.4895bd3a.svg';
    },
    25210: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/volc_engine.c93921c9.svg';
    },
    6385: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/voyage.ec478775.svg';
    },
    34981: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/wenxin.c029f1ef.svg';
    },
    76577: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/xinference.4bf1c9ad.svg';
    },
    20447: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/yi.56b2684e.svg';
    },
    55103: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/yiyan.c029f1ef.svg';
    },
    81010: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/youdao.dc5f6515.svg';
    },
    19568: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/zhipu.53c4367a.svg';
    },
    68683: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/login-avatars.2cd59ec8.svg';
    },
    89624: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/login-background.53821b0f.svg';
    },
    31130: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/login-star.a1de9742.svg';
    },
    49313: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/logo-with-text-white.22c9d002.svg';
    },
    67487: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/logout.acbe92a8.svg';
    },
    32382: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/minio.2aa38883.svg';
    },
    70410: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/model-providers.43583ddb.svg';
    },
    22350: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/moon.15e7f056.svg';
    },
    88458: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/more-model.7a1d39d8.svg';
    },
    1333: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/more.4f8a95a4.svg';
    },
    90076: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/move.0b544311.svg';
    },
    37124: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/mysql.cb3593ae.svg';
    },
    1979: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/navigation-pointer.a22fd9df.svg';
    },
    33391: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/next-login-bg.2b21817d.svg';
    },
    28687: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/note.7480c088.svg';
    },
    47138: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/nothing.ab562a79.svg';
    },
    2306: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/paper-clip.dd171c2f.svg';
    },
    33530: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/password.668a7506.svg';
    },
    3804: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/plus-circle-fill.5b401d20.svg';
    },
    75350: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/plus.4df8c2ae.svg';
    },
    1769: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/profile.67855e30.svg';
    },
    49261: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/prompt.37be0fb8.svg';
    },
    78566: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/pubmed.77561d8d.svg';
    },
    56077: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/qweather.af060254.svg';
    },
    43867: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/redis.c34741f7.svg';
    },
    96198: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/refresh.8782839f.svg';
    },
    80415: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/resize.dac0f2bf.svg';
    },
    91449: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/run.23b47028.svg';
    },
    14387: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/select-files-end.c089e39f.svg';
    },
    16734: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/select-files-start.fc6d0609.svg';
    },
    40975: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/selected-files-collapse.9b76e30e.svg';
    },
    51653: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/sso.9e8a3ae3.svg';
    },
    99021: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/storage.c77a9838.svg';
    },
    1311: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/switch.8b45face.svg';
    },
    52381: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/team.40ab5e28.svg';
    },
    63993: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/template.d3713e5e.svg';
    },
    40724: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/translation.1d6d8a4a.svg';
    },
    16521: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/tushare.dce7f503.svg';
    },
    72835: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/wencai.664373a4.svg';
    },
    18684: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/wikipedia.ed88485f.svg';
    },
    7957: function (t, s, e) {
      'use strict';
      t.exports = e.p + 'static/yahoo-finance.9deb3b1e.svg';
    },
  },
]);
//# sourceMappingURL=8392.c26baf1d.async.js.map
