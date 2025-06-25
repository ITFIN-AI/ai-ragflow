'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [7079],
  {
    16772: function (e, n, s) {
      s.d(n, {
        I: function () {
          return o;
        },
      });
      var r = s(80499),
        t = s(2834),
        i = s(27080),
        a = s(87536),
        l = s(86074);
      function o(e) {
        var n = e.label,
          s = e.name,
          o = e.vertical,
          c = void 0 === o || o,
          x = e.tooltip,
          u = (0, a.Gc)();
        return (0, l.jsx)(r.Wi, {
          control: u.control,
          name: s,
          render: function (e) {
            var s = e.field;
            return (0, l.jsxs)(r.xJ, {
              className: (0, i.cn)('flex', {
                'gap-2': c,
                'flex-col': c,
                'justify-between': !c,
              }),
              children: [
                (0, l.jsx)(r.lX, { tooltip: x, children: n }),
                (0, l.jsx)(r.NI, {
                  children: (0, l.jsx)(t.r, {
                    checked: s.value,
                    onCheckedChange: s.onChange,
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
    70125: function (e, n, s) {
      s.d(n, {
        C: function () {
          return o;
        },
        H: function () {
          return c;
        },
      });
      var r = s(22150),
        t = s(72269),
        i = s(67421),
        a = s(16772),
        l = s(86074);
      function o(e) {
        var n = e.filedName,
          s = (0, i.$G)().t;
        return (0, l.jsx)(r.Z.Item, {
          label: s('chat.useKnowledgeGraph'),
          tooltip: s('chat.useKnowledgeGraphTip'),
          name: n,
          initialValue: !1,
          children: (0, l.jsx)(t.Z, {}),
        });
      }
      function c(e) {
        var n = e.name,
          s = (0, i.$G)().t;
        return (0, l.jsx)(a.I, {
          name: n,
          label: s('chat.useKnowledgeGraph'),
          tooltip: s('chat.useKnowledgeGraphTip'),
        });
      }
    },
    92823: function (e, n, s) {
      s.d(n, {
        Xd: function () {
          return l;
        },
        Xn: function () {
          return i;
        },
        mm: function () {
          return a;
        },
      });
      var r = s(9783),
        t = s.n(r),
        i = (function (e) {
          return (e.Python = 'python'), (e.Javascript = 'javascript'), e;
        })({}),
        a = t()(
          t()(
            {},
            i.Python,
            'def main(arg1: str, arg2: str) -> str:\n    return f"result: {arg1 + arg2}"\n',
          ),
          i.Javascript,
          "const axios = require('axios');\nasync function main(args) {\n  try {\n    const response = await axios.get('https://github.com/infiniflow/ragflow');\n    console.log('Body:', response.data);\n  } catch (error) {\n    console.error('Error:', error.message);\n  }\n}\n\nmodule.exports = { main };\n",
        ),
        l = (function (e) {
          return (
            (e.SysQuery = 'sys.query'),
            (e.SysUserId = 'sys.user_id'),
            (e.SysConversationTurns = 'sys.conversation_turns'),
            (e.SysFiles = 'sys.files'),
            e
          );
        })({});
    },
    60051: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return U;
          },
        });
      var r = s(36646),
        t = s(57636),
        i = s(704),
        a = s(95999),
        l = s(97857),
        o = s.n(l),
        c = s(56312),
        x = s(87536),
        u = s(84445),
        d = s(91929),
        m = s(16772),
        j = s(80499),
        h = s(27591),
        f = s(86968),
        p = s(86074);
      function g(e) {
        var n = e.children;
        return (0, p.jsx)('div', {
          className: 'text-xl font-bold mb-4 text-colors-text-neutral-strong',
          children: n,
        });
      }
      function v() {
        var e = (0, f.qM)('chat').t,
          n = (0, x.Gc)();
        return (0, p.jsxs)('section', {
          children: [
            (0, p.jsx)(g, { children: 'Basic settings' }),
            (0, p.jsxs)('div', {
              className: 'space-y-8',
              children: [
                (0, p.jsx)(j.Wi, {
                  control: n.control,
                  name: 'icon',
                  render: function (n) {
                    var s = n.field;
                    return (0, p.jsx)('div', {
                      className: 'space-y-6',
                      children: (0, p.jsxs)(j.xJ, {
                        className: 'w-full',
                        children: [
                          (0, p.jsx)(j.lX, { children: e('assistantAvatar') }),
                          (0, p.jsx)(j.NI, {
                            children: (0, p.jsx)(u.b, {
                              value: s.value,
                              onValueChange: s.onChange,
                              maxFileCount: 1,
                              maxSize: 4194304,
                            }),
                          }),
                          (0, p.jsx)(j.zG, {}),
                        ],
                      }),
                    });
                  },
                }),
                (0, p.jsx)(j.Wi, {
                  control: n.control,
                  name: 'name',
                  render: function (n) {
                    var s = n.field;
                    return (0, p.jsxs)(j.xJ, {
                      children: [
                        (0, p.jsx)(j.lX, { children: e('assistantName') }),
                        (0, p.jsx)(j.NI, {
                          children: (0, p.jsx)(h.II, o()({}, s)),
                        }),
                        (0, p.jsx)(j.zG, {}),
                      ],
                    });
                  },
                }),
                (0, p.jsx)(j.Wi, {
                  control: n.control,
                  name: 'description',
                  render: function (n) {
                    var s = n.field;
                    return (0, p.jsxs)(j.xJ, {
                      children: [
                        (0, p.jsx)(j.lX, { children: e('description') }),
                        (0, p.jsx)(j.NI, {
                          children: (0, p.jsx)(h.II, o()({}, s)),
                        }),
                        (0, p.jsx)(j.zG, {}),
                      ],
                    });
                  },
                }),
                (0, p.jsx)(j.Wi, {
                  control: n.control,
                  name: 'prompt_config.empty_response',
                  render: function (n) {
                    var s = n.field;
                    return (0, p.jsxs)(j.xJ, {
                      children: [
                        (0, p.jsx)(j.lX, { children: e('emptyResponse') }),
                        (0, p.jsx)(j.NI, {
                          children: (0, p.jsx)(h.II, o()({}, s)),
                        }),
                        (0, p.jsx)(j.zG, {}),
                      ],
                    });
                  },
                }),
                (0, p.jsx)(j.Wi, {
                  control: n.control,
                  name: 'prompt_config.prologue',
                  render: function (n) {
                    var s = n.field;
                    return (0, p.jsxs)(j.xJ, {
                      children: [
                        (0, p.jsx)(j.lX, { children: e('setAnOpener') }),
                        (0, p.jsx)(j.NI, {
                          children: (0, p.jsx)(h.II, o()({}, s)),
                        }),
                        (0, p.jsx)(j.zG, {}),
                      ],
                    });
                  },
                }),
                (0, p.jsx)(m.I, {
                  name: 'prompt_config.quote',
                  label: e('quote'),
                }),
                (0, p.jsx)(m.I, {
                  name: 'prompt_config.keyword',
                  label: e('keyword'),
                }),
                (0, p.jsx)(m.I, { name: 'prompt_config.tts', label: e('tts') }),
                (0, p.jsx)(d.p, {}),
              ],
            }),
          ],
        });
      }
      var y = s(10097),
        b = s(79720);
      function z() {
        var e = (0, f.qM)('chat').t,
          n = (0, x.Gc)();
        return (0, p.jsxs)('section', {
          children: [
            (0, p.jsx)(g, { children: 'Model Setting' }),
            (0, p.jsxs)('div', {
              className: 'space-y-8',
              children: [
                (0, p.jsx)(j.Wi, {
                  control: n.control,
                  name: 'prompt_config.system',
                  render: function (n) {
                    var s = n.field;
                    return (0, p.jsxs)(j.xJ, {
                      children: [
                        (0, p.jsx)(j.lX, { children: e('system') }),
                        (0, p.jsx)(j.NI, {
                          children: (0, p.jsx)(
                            b.g,
                            o()(
                              {
                                placeholder:
                                  'Tell us a little bit about yourself',
                                className: 'resize-none',
                              },
                              s,
                            ),
                          ),
                        }),
                        (0, p.jsx)(j.zG, {}),
                      ],
                    });
                  },
                }),
                (0, p.jsx)(y.n, {}),
              ],
            }),
          ],
        });
      }
      var N = s(77567),
        _ = s(32739),
        w = s(84676),
        I = s(70125);
      function k() {
        var e = (0, f.qM)('chat').t,
          n = (0, x.Gc)();
        return (0, p.jsxs)('section', {
          children: [
            (0, p.jsx)(g, { children: 'Prompt engine' }),
            (0, p.jsxs)('div', {
              className: 'space-y-8',
              children: [
                (0, p.jsx)(j.Wi, {
                  control: n.control,
                  name: 'prompt_config.system',
                  render: function (n) {
                    var s = n.field;
                    return (0, p.jsxs)(j.xJ, {
                      children: [
                        (0, p.jsx)(j.lX, { children: e('system') }),
                        (0, p.jsx)(j.NI, {
                          children: (0, p.jsx)(
                            b.g,
                            o()(
                              {
                                placeholder:
                                  'Tell us a little bit about yourself',
                                className: 'resize-none',
                              },
                              s,
                            ),
                          ),
                        }),
                        (0, p.jsx)(j.zG, {}),
                      ],
                    });
                  },
                }),
                (0, p.jsx)(_.FG, {}),
                (0, p.jsx)(w._, {}),
                (0, p.jsx)(m.I, {
                  name: 'prompt_config.refine_multiturn',
                  label: e('multiTurn'),
                }),
                (0, p.jsx)(I.H, { name: 'prompt_config.use_kg' }),
                (0, p.jsx)(N.eT, {}),
              ],
            }),
          ],
        });
      }
      var G = s(1604);
      function C() {
        var e,
          n,
          s =
            ((e = (0, f.qM)('chat').t),
            (n = G.z.object({
              quote: G.z.boolean(),
              keyword: G.z.boolean(),
              tts: G.z.boolean(),
              empty_response: G.z
                .string()
                .min(1, { message: e('emptyResponse') }),
              prologue: G.z.string().min(1, {}),
              system: G.z.string().min(1, { message: e('systemMessage') }),
              refine_multiturn: G.z.boolean(),
              use_kg: G.z.boolean(),
            })),
            G.z.object({
              name: G.z.string().min(1, { message: e('assistantNameMessage') }),
              icon: G.z.array(G.z.instanceof(File)),
              language: G.z
                .string()
                .min(1, { message: 'Username must be at least 2 characters.' }),
              description: G.z.string(),
              kb_ids: G.z
                .array(G.z.string())
                .min(0, { message: 'Username must be at least 1 characters.' }),
              prompt_config: n,
              top_n: G.z.number(),
              vector_similarity_weight: G.z.number(),
              top_k: G.z.number(),
            })),
          r = (0, x.cI)({
            resolver: (0, c.F)(s),
            defaultValues: {
              name: '',
              language: 'English',
              prompt_config: {
                quote: !0,
                keyword: !1,
                tts: !1,
                use_kg: !1,
                refine_multiturn: !0,
              },
              top_n: 8,
              vector_similarity_weight: 0.2,
              top_k: 1024,
            },
          });
        return (0, p.jsxs)('section', {
          className: 'py-6 w-[500px] max-w-[25%] ',
          children: [
            (0, p.jsx)('div', {
              className:
                'text-2xl font-bold mb-4 text-colors-text-neutral-strong px-6',
              children: 'App settings',
            }),
            (0, p.jsx)('div', {
              className: 'overflow-auto max-h-[81vh] px-6 ',
              children: (0, p.jsx)(
                x.RV,
                o()(
                  o()({}, r),
                  {},
                  {
                    children: (0, p.jsxs)('form', {
                      onSubmit: r.handleSubmit(function (e) {
                        console.log(e);
                      }),
                      className: 'space-y-6',
                      children: [
                        (0, p.jsx)(v, {}),
                        (0, p.jsx)(k, {}),
                        (0, p.jsx)(z, {}),
                      ],
                    }),
                  },
                ),
              ),
            }),
            (0, p.jsxs)('div', {
              className: 'p-6 text-center',
              children: [
                (0, p.jsx)('p', {
                  className: 'text-colors-text-neutral-weak mb-1',
                  children: 'There are unsaved changes',
                }),
                (0, p.jsx)(t.zx, {
                  variant: 'tertiary',
                  className: 'w-full',
                  children: 'Update',
                }),
              ],
            }),
          ],
        });
      }
      var q = s(5574),
        J = s.n(q),
        S = s(5681),
        T = s(97861),
        X = s(84617),
        Z = s(42841),
        W = s(62435);
      function M() {
        var e = (0, W.useRef)(null),
          n = (0, W.useState)(40),
          s = J()(n, 2),
          r = s[0],
          i = s[1];
        return (
          (0, S.Z)(
            'keydown',
            function (e) {
              e.shiftKey &&
                'Enter' === e.code &&
                i(function (e) {
                  return e + 10;
                });
            },
            { target: e },
          ),
          (0, p.jsxs)('section', {
            className:
              'flex items-end bg-colors-background-neutral-strong px-4 py-3 rounded-xl m-8',
            children: [
              (0, p.jsx)(t.zx, {
                variant: 'icon',
                className: 'w-10 h-10',
                children: (0, p.jsx)(T.Z, {}),
              }),
              (0, p.jsx)(b.g, {
                ref: e,
                placeholder: 'Tell us a little bit about yourself ',
                className:
                  'resize-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent border-none min-h-0 max-h-20',
                style: { height: r },
              }),
              (0, p.jsxs)('div', {
                className: 'flex gap-2',
                children: [
                  (0, p.jsx)(t.zx, {
                    variant: 'icon',
                    size: 'icon',
                    children: (0, p.jsx)(X.Z, {}),
                  }),
                  (0, p.jsx)(t.zx, {
                    variant: 'tertiary',
                    size: 'icon',
                    children: (0, p.jsx)(Z.Z, {}),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function F() {
        return (0, p.jsx)('section', {
          className: 'border-x flex-1',
          children: (0, p.jsx)(M, {}),
        });
      }
      var K = s(87030),
        A = s(31012);
      function P() {
        return (0, p.jsx)(K.Zb, {
          className:
            'bg-colors-background-inverse-weak border-colors-outline-neutral-standard',
          children: (0, p.jsxs)(K.aY, {
            className: 'px-3 py-2 flex justify-between items-center',
            children: [
              'xxx',
              (0, p.jsx)(t.zx, {
                variant: 'icon',
                size: 'icon',
                children: (0, p.jsx)(a.Z, {}),
              }),
            ],
          }),
        });
      }
      function R() {
        var e = new Array(10).fill(1);
        return (0, p.jsxs)('section', {
          className: 'p-6 w-[400px] max-w-[20%]',
          children: [
            (0, p.jsxs)('div', {
              className: 'flex justify-between items-center mb-4',
              children: [
                (0, p.jsx)('span', {
                  className:
                    'text-colors-text-neutral-strong text-2xl font-bold',
                  children: 'Sessions',
                }),
                (0, p.jsx)(t.zx, {
                  variant: 'icon',
                  size: 'icon',
                  children: (0, p.jsx)(A.Z, {}),
                }),
              ],
            }),
            (0, p.jsx)('div', {
              className: 'space-y-4',
              children: e.map(function (e) {
                return (0, p.jsx)(P, {}, e.id);
              }),
            }),
          ],
        });
      }
      function U() {
        var e = (0, i.$)().navigateToChatList;
        return (0, p.jsxs)('section', {
          className: 'h-full flex flex-col',
          children: [
            (0, p.jsx)(r.m, {
              back: e,
              title: 'Chat app 01',
              children: (0, p.jsxs)('div', {
                className: 'flex items-center gap-2',
                children: [
                  (0, p.jsx)(t.zx, {
                    variant: 'icon',
                    size: 'icon',
                    children: (0, p.jsx)(a.Z, {}),
                  }),
                  (0, p.jsx)(t.zx, {
                    variant: 'tertiary',
                    size: 'sm',
                    children: 'Publish',
                  }),
                ],
              }),
            }),
            (0, p.jsxs)('div', {
              className: 'flex flex-1',
              children: [
                (0, p.jsx)(R, {}),
                (0, p.jsx)(F, {}),
                (0, p.jsx)(C, {}),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=p__next-chats__chat__index.1719bde6.async.js.map
