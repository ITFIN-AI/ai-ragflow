'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [2938],
  {
    96330: function (n, e, t) {
      t.d(e, {
        K1: function () {
          return d;
        },
        Rx: function () {
          return a;
        },
        S8: function () {
          return c;
        },
        Vr: function () {
          return s;
        },
        cG: function () {
          return o;
        },
        ld: function () {
          return l;
        },
        n_: function () {
          return f;
        },
        oQ: function () {
          return i;
        },
      });
      var r = t(9783),
        u = t.n(r),
        a = (function (n) {
          return (
            (n.Dataset = 'dataset'),
            (n.Testing = 'testing'),
            (n.Configuration = 'configuration'),
            (n.KnowledgeGraph = 'knowledgeGraph'),
            n
          );
        })({}),
        o = (function (n) {
          return (
            (n.UNSTART = '0'),
            (n.RUNNING = '1'),
            (n.CANCEL = '2'),
            (n.DONE = '3'),
            (n.FAIL = '4'),
            n
          );
        })({}),
        i = (function (n) {
          return (
            (n.Improvise = 'Improvise'),
            (n.Precise = 'Precise'),
            (n.Balance = 'Balance'),
            n
          );
        })({}),
        c = u()(
          u()(
            u()({}, i.Improvise, {
              temperature: 0.8,
              top_p: 0.9,
              frequency_penalty: 0.1,
              presence_penalty: 0.1,
              max_tokens: 4096,
            }),
            i.Precise,
            {
              temperature: 0.2,
              top_p: 0.75,
              frequency_penalty: 0.5,
              presence_penalty: 0.5,
              max_tokens: 4096,
            },
          ),
          i.Balance,
          {
            temperature: 0.5,
            top_p: 0.85,
            frequency_penalty: 0.3,
            presence_penalty: 0.2,
            max_tokens: 4096,
          },
        ),
        s = (function (n) {
          return (
            (n.Embedding = 'embedding'),
            (n.Chat = 'chat'),
            (n.Image2text = 'image2text'),
            (n.Speech2text = 'speech2text'),
            (n.Rerank = 'rerank'),
            (n.TTS = 'tts'),
            n
          );
        })({}),
        l = (function (n) {
          return (n.DocumentId = 'doc_id'), (n.KnowledgeId = 'id'), n;
        })({}),
        f = (function (n) {
          return (n.Virtual = 'virtual'), (n.Visual = 'visual'), n;
        })({}),
        d = (function (n) {
          return (
            (n.Naive = 'naive'),
            (n.Qa = 'qa'),
            (n.Resume = 'resume'),
            (n.Manual = 'manual'),
            (n.Table = 'table'),
            (n.Paper = 'paper'),
            (n.Book = 'book'),
            (n.Laws = 'laws'),
            (n.Presentation = 'presentation'),
            (n.Picture = 'picture'),
            (n.One = 'one'),
            (n.Audio = 'audio'),
            (n.Email = 'email'),
            (n.Tag = 'tag'),
            (n.KnowledgeGraph = 'knowledge_graph'),
            n
          );
        })({});
    },
    2938: function (n, e, t) {
      t.d(e, {
        H0: function () {
          return R;
        },
        IV: function () {
          return O;
        },
        NT: function () {
          return D;
        },
        Qe: function () {
          return j;
        },
        UL: function () {
          return E;
        },
        Y2: function () {
          return L;
        },
        c5: function () {
          return z;
        },
        cE: function () {
          return P;
        },
        ox: function () {
          return q;
        },
        sO: function () {
          return G;
        },
        vv: function () {
          return $;
        },
        vy: function () {
          return Z;
        },
        y7: function () {
          return V;
        },
        ye: function () {
          return K;
        },
      });
      var r = t(19632),
        u = t.n(r),
        a = t(97857),
        o = t.n(a),
        i = t(9783),
        c = t.n(i),
        s = t(15009),
        l = t.n(s),
        f = t(99289),
        d = t.n(f),
        p = t(5574),
        v = t.n(p),
        g = t(39918),
        m = t(1079),
        h = t(40169),
        k = t(60806),
        b = t(61921),
        C = t(71250),
        w = t(45360),
        S = t(87066),
        y = t(24809),
        x = t(96486),
        _ = t(62435),
        I = t(67421),
        T = t(57632),
        A = t(86968),
        N = t(96100),
        M = t(39259),
        P = function () {
          var n = (0, _.useState)({}),
            e = v()(n, 2),
            t = e[0],
            r = e[1];
          return {
            currentRecord: t,
            setRecord: function (n) {
              r(n);
            },
          };
        },
        j = function () {
          var n = (0, _.useState)(''),
            e = v()(n, 2),
            t = e[0],
            r = e[1];
          return {
            handleInputChange: (0, _.useCallback)(function (n) {
              var e = n.target.value;
              r(e);
            }, []),
            searchString: t,
          };
        },
        E = function () {
          var n = (0, I.$G)().i18n,
            e = (0, M.WH)().saveSetting;
          return function (t) {
            n.changeLanguage(h.Kj[t]), e({ language: t });
          };
        },
        K = function () {
          var n = (0, A.qM)('common').t,
            e = (0, N.fz)(),
            t = e.setPaginationParams,
            r = e.page,
            u = e.size,
            a = (0, _.useCallback)(
              function (n, e) {
                t(n, e);
              },
              [t],
            ),
            o = (0, _.useCallback)(
              function (n) {
                t(n.page, n.pageSize);
              },
              [t],
            );
          return {
            pagination: (0, _.useMemo)(
              function () {
                return {
                  showQuickJumper: !0,
                  total: 0,
                  showSizeChanger: !0,
                  current: r,
                  pageSize: u,
                  pageSizeOptions: [1, 2, 10, 20, 50, 100],
                  onChange: a,
                  showTotal: function (e) {
                    return ''.concat(n('total'), ' ').concat(e);
                  },
                };
              },
              [n, a, r, u],
            ),
            setPagination: o,
          };
        },
        O = function () {
          var n = (0, _.useState)({}),
            e = v()(n, 2),
            t = e[0],
            r = e[1],
            u = (0, _.useCallback)(
              d()(
                l()().mark(function n() {
                  var e;
                  return l()().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), S.Z.get('/conf.json');
                        case 2:
                          (e = n.sent), r(e.data);
                        case 4:
                        case 'end':
                          return n.stop();
                      }
                  }, n);
                }),
              ),
              [],
            );
          return (
            (0, _.useEffect)(
              function () {
                u();
              },
              [u],
            ),
            t
          );
        },
        R = function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : k.Z.completeConversation,
            e = (0, _.useState)({}),
            t = v()(e, 2),
            r = t[0],
            u = t[1],
            a = (0, _.useState)(!0),
            i = v()(a, 2),
            s = i[0],
            f = i[1],
            p = (0, _.useRef)(),
            m = (0, _.useRef)(),
            h = (0, _.useCallback)(function () {
              m.current = new AbortController();
            }, []),
            C = (0, _.useCallback)(function () {
              p.current && clearTimeout(p.current),
                (p.current = setTimeout(function () {
                  u({}), clearTimeout(p.current);
                }, 1e3));
            }, []),
            w = (0, _.useCallback)(
              (function () {
                var e = d()(
                  l()().mark(function e(t, r) {
                    var a, i, s, d, p, v, k, w, S, x;
                    return l()().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                h(),
                                (e.prev = 1),
                                f(!1),
                                (e.next = 5),
                                fetch(n, {
                                  method: 'POST',
                                  headers: c()(
                                    c()({}, g._n, (0, b.cD)()),
                                    'Content-Type',
                                    'application/json',
                                  ),
                                  body: JSON.stringify(t),
                                  signal:
                                    (null == r ? void 0 : r.signal) ||
                                    (null === (a = m.current) || void 0 === a
                                      ? void 0
                                      : a.signal),
                                })
                              );
                            case 5:
                              (s = e.sent),
                                (d = s.clone().json()),
                                (p =
                                  null == s ||
                                  null === (i = s.body) ||
                                  void 0 === i
                                    ? void 0
                                    : i
                                        .pipeThrough(new TextDecoderStream())
                                        .pipeThrough(new y.m())
                                        .getReader());
                            case 8:
                              return (
                                (e.next = 11), null == p ? void 0 : p.read()
                              );
                            case 11:
                              if (!(v = e.sent)) {
                                e.next = 19;
                                break;
                              }
                              if (((k = v.done), (w = v.value), !k)) {
                                e.next = 18;
                                break;
                              }
                              return (
                                console.info('done'), C(), e.abrupt('break', 21)
                              );
                            case 18:
                              try {
                                (S = JSON.parse(
                                  (null == w ? void 0 : w.data) || '',
                                )),
                                  'boolean' !=
                                    typeof (x = null == S ? void 0 : S.data) &&
                                    (console.info('data:', x),
                                    u(
                                      o()(
                                        o()({}, x),
                                        {},
                                        {
                                          conversationId:
                                            null == t
                                              ? void 0
                                              : t.conversation_id,
                                        },
                                      ),
                                    ));
                              } catch (n) {
                                console.warn(n);
                              }
                            case 19:
                              e.next = 8;
                              break;
                            case 21:
                              return (
                                console.info('done?'),
                                f(!0),
                                C(),
                                (e.next = 26),
                                d
                              );
                            case 26:
                              return (
                                (e.t0 = e.sent),
                                (e.t1 = s),
                                e.abrupt('return', {
                                  data: e.t0,
                                  response: e.t1,
                                })
                              );
                            case 31:
                              (e.prev = 31),
                                (e.t2 = e.catch(1)),
                                f(!0),
                                C(),
                                console.warn(e.t2);
                            case 36:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 31]],
                    );
                  }),
                );
                return function (n, t) {
                  return e.apply(this, arguments);
                };
              })(),
              [h, n, C],
            ),
            S = (0, _.useCallback)(function () {
              var n;
              null === (n = m.current) || void 0 === n || n.abort();
            }, []);
          return {
            send: w,
            answer: r,
            done: s,
            setDone: f,
            resetAnswer: C,
            stopOutputMessage: S,
          };
        },
        z = function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : k.Z.tts,
            e = (0, _.useCallback)(
              (function () {
                var e = d()(
                  l()().mark(function e(t) {
                    var r, u;
                    return l()().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                fetch(n, {
                                  method: 'POST',
                                  headers: c()(
                                    c()({}, g._n, (0, b.cD)()),
                                    'Content-Type',
                                    'application/json',
                                  ),
                                  body: JSON.stringify(t),
                                })
                              );
                            case 2:
                              return (
                                (r = e.sent),
                                (e.prev = 3),
                                (e.next = 6),
                                r.clone().json()
                              );
                            case 6:
                              0 !== (null == (u = e.sent) ? void 0 : u.code) &&
                                w.ZP.error(null == u ? void 0 : u.message),
                                (e.next = 13);
                              break;
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(3)),
                                console.warn('🚀 ~ error:', e.t0);
                            case 13:
                              return e.abrupt('return', r);
                            case 14:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 10]],
                    );
                  }),
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [n],
            );
          return { read: e };
        },
        D = function () {
          var n = (0, _.useState)(''),
            e = v()(n, 2),
            t = e[0],
            r = e[1];
          return {
            handleInputChange: function (n) {
              var e = n.target.value
                .replaceAll('\\n', '\n')
                .replaceAll('\\t', '\t');
              r(e);
            },
            value: t,
            setValue: r,
          };
        },
        V = function () {
          var n = (0, _.useState)([]),
            e = v()(n, 2),
            t = e[0],
            r = e[1],
            a = (function (n) {
              var e = (0, _.useRef)(null),
                t = (0, _.useCallback)(
                  function () {
                    var t;
                    n &&
                      (null === (t = e.current) ||
                        void 0 === t ||
                        t.scrollIntoView({ behavior: 'instant' }));
                  },
                  [n],
                );
              return (
                (0, _.useEffect)(
                  function () {
                    t();
                  },
                  [t],
                ),
                e
              );
            })(t),
            i = (0, _.useCallback)(function (n) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : '';
              r(function (t) {
                return [].concat(u()(t), [
                  o()(o()({}, n), {}, { id: (0, C.Kj)(n) }),
                  {
                    role: m.Cs.Assistant,
                    content: e,
                    id: (0, C.Kj)(
                      o()(o()({}, n), {}, { role: m.Cs.Assistant }),
                    ),
                  },
                ]);
              });
            }, []),
            c = (0, _.useCallback)(function (n) {
              r(function (e) {
                return [].concat(u()(e), [
                  o()(o()({}, n), {}, { id: (0, C.Kj)(n) }),
                ]);
              });
            }, []),
            s = (0, _.useCallback)(function (n) {
              r(function (e) {
                var t;
                return [].concat(
                  u()(
                    null !== (t = null == e ? void 0 : e.slice(0, -1)) &&
                      void 0 !== t
                      ? t
                      : [],
                  ),
                  [
                    o()(
                      {
                        role: m.Cs.Assistant,
                        content: n.answer,
                        reference: n.reference,
                        id: (0, C.Kj)({ id: n.id, role: m.Cs.Assistant }),
                        prompt: n.prompt,
                        audio_binary: n.audio_binary,
                      },
                      (0, x.omit)(n, 'reference'),
                    ),
                  ],
                );
              });
            }, []),
            l = (0, _.useCallback)(function (n) {
              r(function (e) {
                return -1 !==
                  e.findIndex(function (e) {
                    return e.id === n.id;
                  })
                  ? e.map(function (e) {
                      return e.id === n.id
                        ? o()(o()({}, e), {}, { content: n.answer })
                        : e;
                    })
                  : [].concat(u()(null != e ? e : []), [
                      o()(
                        {
                          role: m.Cs.Assistant,
                          content: n.answer,
                          reference: n.reference,
                          id: (0, C.Kj)({ id: n.id, role: m.Cs.Assistant }),
                          prompt: n.prompt,
                          audio_binary: n.audio_binary,
                        },
                        (0, x.omit)(n, 'reference'),
                      ),
                    ]);
              });
            }, []),
            f = (0, _.useCallback)(function () {
              r(function (n) {
                var e;
                return null !== (e = null == n ? void 0 : n.slice(0, -2)) &&
                  void 0 !== e
                  ? e
                  : [];
              });
            }, []),
            d = (0, _.useCallback)(
              function (n) {
                r(function (e) {
                  var t;
                  return null !==
                    (t =
                      null == e
                        ? void 0
                        : e.filter(function (e) {
                            return e.id !== n;
                          })) && void 0 !== t
                    ? t
                    : [];
                });
              },
              [r],
            ),
            p = (0, _.useCallback)(
              function (n) {
                r(function (e) {
                  var t = e.findIndex(function (e) {
                    return e.id === n;
                  });
                  if (-1 !== t) {
                    var r,
                      a =
                        null !== (r = e.slice(0, t + 2)) && void 0 !== r
                          ? r
                          : [],
                      i = a.at(-1);
                    return (a = i
                      ? [].concat(u()(a.slice(0, -1)), [
                          o()(
                            o()({}, i),
                            {},
                            { content: '', reference: void 0, prompt: void 0 },
                          ),
                        ])
                      : a);
                  }
                  return e;
                });
              },
              [r],
            );
          return {
            ref: a,
            derivedMessages: t,
            setDerivedMessages: r,
            addNewestQuestion: i,
            addNewestAnswer: s,
            removeLatestMessage: f,
            removeMessageById: d,
            addNewestOneQuestion: c,
            addNewestOneAnswer: l,
            removeMessagesAfterCurrentMessage: p,
          };
        },
        $ = function (n) {
          var e = n.removeMessagesAfterCurrentMessage,
            t = n.sendMessage,
            r = n.messages,
            u = (0, _.useCallback)(
              (function () {
                var n = d()(
                  l()().mark(function n(u) {
                    var a, i;
                    return l()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            u.id &&
                              (e(u.id),
                              -1 !==
                                (a = r.findIndex(function (n) {
                                  return n.id === u.id;
                                })) && (i = r.slice(0, a)),
                              t({
                                message: o()(
                                  o()({}, u),
                                  {},
                                  { id: (0, T.Z)() },
                                ),
                                messages: i,
                              }));
                          case 1:
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
              [e, t, r],
            );
          return { regenerateMessage: u };
        },
        Z = function (n) {
          var e = (0, _.useState)(''),
            t = v()(e, 2),
            r = t[0],
            u = t[1],
            a = (0, _.useCallback)(function (n) {
              return function () {
                u(n);
              };
            }, []);
          return (
            (0, _.useEffect)(
              function () {
                n && u(n);
              },
              [n],
            ),
            { selectedId: r, handleItemClick: a }
          );
        },
        q = function () {
          var n,
            e = (0, M.fS)(!0).data;
          return null !== (n = null == e ? void 0 : e.llm_id) && void 0 !== n
            ? n
            : '';
        },
        B = { naive: 128, knowledge_graph: 8192 },
        G = function (n) {
          return (0, _.useCallback)(
            function (e) {
              e in B &&
                n.setFieldValue(['parser_config', 'chunk_token_num'], B[e]);
            },
            [n],
          );
        },
        L = function (n) {
          var e = n.form,
            t = n.visible,
            r = (0, _.useRef)();
          (0, _.useEffect)(
            function () {
              r.current = t;
            },
            [t],
          );
          var u = r.current;
          (0, _.useEffect)(
            function () {
              !t && u && e.resetFields();
            },
            [e, u, t],
          );
        };
    },
    96100: function (n, e, t) {
      t.d(e, {
        HK: function () {
          return f;
        },
        Uu: function () {
          return l;
        },
        fz: function () {
          return g;
        },
        nT: function () {
          return v;
        },
        pE: function () {
          return d;
        },
        wy: function () {
          return p;
        },
      });
      var r = t(5574),
        u = t.n(r),
        a = t(96330),
        o = t(62435),
        i = t(42028),
        c = (function (n) {
          return (n.Second = '2'), (n.Third = '3'), n;
        })({}),
        s = function (n) {
          return (0, i.TH)().pathname.split('/')[n] || '';
        },
        l = function () {
          return s(c.Second);
        },
        f = function () {
          return s(c.Third);
        },
        d = function () {
          var n = (0, i.lr)(),
            e = u()(n, 1)[0];
          return {
            documentId: e.get(a.ld.DocumentId) || '',
            knowledgeId: e.get(a.ld.KnowledgeId) || '',
          };
        },
        p = function () {
          var n = (0, i.s0)();
          return (0, o.useCallback)(
            function (e) {
              n(e, { state: { from: e } });
            },
            [n],
          );
        },
        v = function () {
          var n = (0, i.s0)(),
            e = d().knowledgeId;
          return (0, o.useCallback)(
            function () {
              n('/knowledge/'.concat(a.Rx.Dataset, '?id=').concat(e));
            },
            [e, n],
          );
        },
        g = function () {
          var n = (0, i.lr)(),
            e = u()(n, 2),
            t = e[0],
            r = e[1],
            a = (0, o.useCallback)(
              function () {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1,
                  e = arguments.length > 1 ? arguments[1] : void 0;
                t.set('page', n.toString()),
                  e && t.set('size', e.toString()),
                  r(t);
              },
              [r, t],
            );
          return {
            setPaginationParams: a,
            page: Number(t.get('page')) || 1,
            size: Number(t.get('size')) || 10,
          };
        };
    },
    71250: function (n, e, t) {
      t.d(e, {
        Bl: function () {
          return l;
        },
        CE: function () {
          return p;
        },
        IC: function () {
          return c;
        },
        Kj: function () {
          return s;
        },
        hH: function () {
          return v;
        },
        mN: function () {
          return d;
        },
        mV: function () {
          return g;
        },
        o_: function () {
          return f;
        },
        od: function () {
          return h;
        },
        uq: function () {
          return k;
        },
      });
      var r = t(97857),
        u = t.n(r),
        a = t(1079),
        o = t(96486),
        i = t(57632),
        c = function (n) {
          return n !== a.Pc && '' !== n;
        },
        s = function (n) {
          return 'id' in n && n.id ? n.id : (0, i.Z)();
        },
        l = function (n) {
          var e;
          return null !==
            (e =
              null == n
                ? void 0
                : n.map(function (n) {
                    return u()(
                      u()({}, (0, o.omit)(n, 'reference')),
                      {},
                      { id: s(n) },
                    );
                  })) && void 0 !== e
            ? e
            : [];
        },
        f = function () {
          return (0, i.Z)().replace(/-/g, '');
        },
        d = function (n) {
          return ''.concat(n.role, '_').concat(n.id);
        },
        p = function (n) {
          return n
            .replace(/\\\[([\s\S]*?)\\\]/g, function (n, e) {
              return '$$'.concat(e, '$$');
            })
            .replace(/\\\(([\s\S]*?)\\\)/g, function (n, e) {
              return '$'.concat(e, '$');
            });
        };
      function v() {
        return (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''
        ).replace(
          /<think>([\s\S]*?)<\/think>/g,
          '<section class="think">$1</section>',
        );
      }
      function g(n) {
        return !1;
      }
      var m = ['image', 'table'];
      function h(n) {
        return m.some(function (e) {
          return e === n;
        });
      }
      function k() {
        return Object.values(a.uY).reduce(function (n, e) {
          return (n[e] = e !== a.uY.MaxTokensEnabled), n;
        }, {});
      }
    },
  },
]);
//# sourceMappingURL=2938.0e1790e7.async.js.map
