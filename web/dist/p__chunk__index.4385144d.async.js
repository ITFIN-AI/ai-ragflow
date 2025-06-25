/*! For license information please see p__chunk__index.4385144d.async.js.LICENSE.txt */
'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [9084],
  {
    36646: function (e, t, a) {
      a.d(t, {
        m: function () {
          return o;
        },
      });
      var n = a(53219),
        c = a(57636),
        s = a(86074);
      function o(e) {
        var t = e.back,
          a = e.title,
          o = e.children;
        return (0, s.jsxs)('header', {
          className: 'flex justify-between items-center border-b pr-9',
          children: [
            (0, s.jsxs)('div', {
              className: 'flex items-center ',
              children: [
                (0, s.jsx)('div', {
                  className: 'flex items-center border-r p-1.5',
                  children: (0, s.jsx)(c.zx, {
                    variant: 'ghost',
                    size: 'icon',
                    onClick: t,
                    children: (0, s.jsx)(n.Z, { className: 'w-5 h-5' }),
                  }),
                }),
                (0, s.jsx)('div', {
                  className: 'p-4',
                  children: (0, s.jsx)('h1', {
                    className: 'text-2xl font-semibold tracking-tight',
                    children: a,
                  }),
                }),
              ],
            }),
            o,
          ],
        });
      }
    },
    41225: function (e, t, a) {
      a.d(t, {
        r: function () {
          return i;
        },
      });
      var n = a(52677),
        c = a.n(n),
        s = a(27080),
        o = (a(62435), a(86074));
      function i(e) {
        var t = e.options,
          a = e.value,
          n = e.onChange,
          i = e.className;
        return (0, o.jsx)('div', {
          className: (0, s.cn)(
            'flex items-center rounded-3xl p-1 gap-2 bg-background-header-bar px-5 py-2.5',
            i,
          ),
          children: t.map(function (e) {
            var t = 'object' === c()(e),
              i = t ? e.value : e;
            return (0, o.jsx)(
              'div',
              {
                className: (0, s.cn)(
                  'inline-flex items-center px-6 py-2 text-base font-normal rounded-3xl cursor-pointer text-text-badge',
                  {
                    'bg-text-title': a === i,
                    'text-text-title-invert': a === i,
                  },
                ),
                onClick: function () {
                  return null == n ? void 0 : n(i);
                },
                children: t ? e.label : e,
              },
              i,
            );
          }),
        });
      }
    },
    704: function (e, t, a) {
      a.d(t, {
        $: function () {
          return g;
        },
        t: function () {
          return u;
        },
      });
      var n = a(9783),
        c = a.n(n),
        s = a(5574),
        o = a.n(s),
        i = a(23454),
        l = a(62435),
        r = a(42028),
        u = (function (e) {
          return (e.KnowledgeId = 'knowledgeId'), e;
        })({}),
        g = function () {
          var e = (0, r.s0)(),
            t = (0, r.lr)(),
            a = o()(t, 1)[0],
            n = (0, r.UO)().id,
            s = (0, l.useCallback)(
              function () {
                e(i.Z.Datasets);
              },
              [e],
            ),
            g = (0, l.useCallback)(
              function (t) {
                return function () {
                  e(''.concat(i.Z.Dataset, '/').concat(t));
                };
              },
              [e],
            ),
            d = (0, l.useCallback)(
              function () {
                e(i.Z.Home);
              },
              [e],
            ),
            h = (0, l.useCallback)(
              function () {
                e(i.Z.ProfileSetting);
              },
              [e],
            ),
            f = (0, l.useCallback)(
              function () {
                e(i.Z.Chats);
              },
              [e],
            ),
            p = (0, l.useCallback)(
              function () {
                e(i.Z.Chat);
              },
              [e],
            ),
            k = (0, l.useCallback)(
              function () {
                e(i.Z.Agents);
              },
              [e],
            ),
            v = (0, l.useCallback)(
              function (t) {
                return function () {
                  e(''.concat(i.Z.Agent, '/').concat(t));
                };
              },
              [e],
            ),
            x = (0, l.useCallback)(
              function () {
                e(i.Z.AgentTemplates);
              },
              [e],
            ),
            m = (0, l.useCallback)(
              function () {
                e(i.Z.Searches);
              },
              [e],
            ),
            C = (0, l.useCallback)(
              function () {
                e(i.Z.Search);
              },
              [e],
            ),
            b = (0, l.useCallback)(
              function (t, a) {
                return function () {
                  e(
                    ''
                      .concat(i.Z.ParsedResult, '/chunks?id=')
                      .concat(a, '&doc_id=')
                      .concat(t),
                  );
                };
              },
              [e],
            ),
            S = (0, l.useCallback)(
              function (e) {
                var t = c()({}, u.KnowledgeId, a.get(u.KnowledgeId));
                return e ? t[e] : t;
              },
              [a],
            ),
            D = (0, l.useCallback)(
              function (t) {
                e(
                  ''
                    .concat(t, '/')
                    .concat(n, '?')
                    .concat(u.KnowledgeId, '=')
                    .concat(S(u.KnowledgeId)),
                );
              },
              [S, n, e],
            ),
            T = (0, l.useCallback)(
              function (t) {
                e(''.concat(i.Z.Files, '?folderId=').concat(t));
              },
              [e],
            );
          return {
            navigateToDatasetList: s,
            navigateToDataset: g,
            navigateToHome: d,
            navigateToProfile: h,
            navigateToChatList: f,
            navigateToChat: p,
            navigateToChunkParsedResult: b,
            getQueryString: S,
            navigateToChunk: D,
            navigateToAgentList: k,
            navigateToAgent: v,
            navigateToAgentTemplates: x,
            navigateToSearchList: m,
            navigateToSearch: C,
            navigateToFiles: T,
          };
        };
    },
    2482: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return h;
          },
        });
      var n = a(36646),
        c = a(57636),
        s = a(41225),
        o = a(704),
        i = a(23454),
        l = a(95999);
      const r = (0, a(91373).Z)('save', [
        [
          'path',
          {
            d: 'M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z',
            key: '1c8476',
          },
        ],
        [
          'path',
          { d: 'M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7', key: '1ydtos' },
        ],
        ['path', { d: 'M7 3v4a1 1 0 0 0 1 1h7', key: 't51u73' }],
      ]);
      var u = a(62435),
        g = a(42028),
        d = a(86074);
      function h() {
        var e = (0, o.$)(),
          t = e.navigateToDataset,
          a = e.getQueryString,
          h = e.navigateToChunk,
          f = (0, g.TH)(),
          p = (0, u.useMemo)(function () {
            return [
              { label: 'Parsed results', value: i.Z.ParsedResult },
              { label: 'Chunk result', value: i.Z.ChunkResult },
              { label: 'Result view', value: i.Z.ResultView },
            ];
          }, []),
          k = (0, u.useMemo)(
            function () {
              return f.pathname.split('/').slice(0, 3).join('/');
            },
            [f.pathname],
          );
        return (0, d.jsxs)('section', {
          children: [
            (0, d.jsxs)(n.m, {
              title: 'Editing block',
              back: t(a(o.t.KnowledgeId)),
              children: [
                (0, d.jsx)('div', {
                  children: (0, d.jsx)(s.r, {
                    options: p,
                    value: k,
                    onChange: h,
                    className:
                      'bg-colors-background-inverse-standard text-colors-text-neutral-standard',
                  }),
                }),
                (0, d.jsxs)('div', {
                  className: 'flex items-center gap-2',
                  children: [
                    (0, d.jsx)(c.zx, {
                      variant: 'icon',
                      size: 'icon',
                      children: (0, d.jsx)(l.Z, {}),
                    }),
                    (0, d.jsxs)(c.zx, {
                      variant: 'tertiary',
                      size: 'sm',
                      children: [(0, d.jsx)(r, {}), 'Save'],
                    }),
                  ],
                }),
              ],
            }),
            (0, d.jsx)(g.j3, {}),
          ],
        });
      }
    },
    23454: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = (function (e) {
        return (
          (e.Login = '/login'),
          (e.Home = '/home'),
          (e.Datasets = '/datasets'),
          (e.DatasetBase = '/dataset'),
          (e[(e.Dataset = ''.concat(e.DatasetBase).concat(e.DatasetBase))] =
            'Dataset'),
          (e.Agent = '/agent'),
          (e.AgentTemplates = '/agent-templates'),
          (e.Agents = '/agents'),
          (e.Searches = '/next-searches'),
          (e.Search = '/next-search'),
          (e.Chats = '/next-chats'),
          (e.Chat = '/next-chat'),
          (e.Files = '/files'),
          (e.ProfileSetting = '/profile-setting'),
          (e.DatasetTesting = '/testing'),
          (e.DatasetSetting = '/setting'),
          (e.Chunk = '/chunk'),
          (e.ChunkResult = '/chunk/chunk'),
          (e.Parsed = '/parsed'),
          (e.ParsedResult = '/chunk/parsed'),
          (e.Result = '/result'),
          (e.ResultView = '/chunk/result'),
          e
        );
      })({});
      n.Home,
        n.Home,
        '@/pages'.concat(n.Home),
        n.Datasets,
        n.Datasets,
        '@/pages'.concat(n.Datasets),
        n.Chats,
        n.Chats,
        '@/pages'.concat(n.Chats),
        n.Chat,
        '@/pages'.concat(n.Chats, '/chat'),
        n.Searches,
        n.Searches,
        '@/pages'.concat(n.Searches),
        n.Search,
        '@/pages'.concat(n.Search),
        n.Agents,
        n.Agents,
        '@/pages'.concat(n.Agents),
        ''.concat(n.Agent, '/:id'),
        '@/pages'.concat(n.Agent),
        n.AgentTemplates,
        '@/pages'.concat(n.Agents).concat(n.AgentTemplates),
        n.Files,
        n.Files,
        '@/pages'.concat(n.Files),
        n.DatasetBase,
        n.DatasetBase,
        n.Dataset,
        n.DatasetBase,
        '@/pages'.concat(n.DatasetBase),
        ''.concat(n.Dataset, '/:id'),
        '@/pages'.concat(n.Dataset),
        ''.concat(n.DatasetBase).concat(n.DatasetSetting, '/:id'),
        '@/pages'.concat(n.DatasetBase).concat(n.DatasetSetting),
        ''.concat(n.DatasetBase).concat(n.DatasetTesting, '/:id'),
        '@/pages'.concat(n.DatasetBase).concat(n.DatasetTesting),
        ''.concat(n.ParsedResult, '/chunks'),
        '@/pages'.concat(
          n.Chunk,
          '/parsed-result/add-knowledge/components/knowledge-chunk',
        ),
        n.Chunk,
        n.Chunk,
        '@/pages'.concat(n.Chunk),
        ''.concat(n.ChunkResult, '/:id'),
        '@/pages'.concat(n.Chunk, '/chunk-result'),
        ''.concat(n.ResultView, '/:id'),
        '@/pages'.concat(n.Chunk, '/result-view'),
        n.Chunk,
        '@/pages'.concat(n.Chunk),
        n.ProfileSetting,
        '@/pages'.concat(n.ProfileSetting),
        n.ProfileSetting,
        ''.concat(n.ProfileSetting, '/profile'),
        ''.concat(n.ProfileSetting, '/profile'),
        '@/pages'.concat(n.ProfileSetting, '/profile'),
        ''.concat(n.ProfileSetting, '/team'),
        '@/pages'.concat(n.ProfileSetting, '/team'),
        ''.concat(n.ProfileSetting, '/plan'),
        '@/pages'.concat(n.ProfileSetting, '/plan'),
        ''.concat(n.ProfileSetting, '/model'),
        '@/pages'.concat(n.ProfileSetting, '/model'),
        ''.concat(n.ProfileSetting, '/prompt'),
        '@/pages'.concat(n.ProfileSetting, '/prompt');
    },
    53219: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      const n = (0, a(91373).Z)('arrow-left', [
        ['path', { d: 'm12 19-7-7 7-7', key: '1l729n' }],
        ['path', { d: 'M19 12H5', key: 'x3x0zl' }],
      ]);
    },
    95999: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      const n = (0, a(91373).Z)('ellipsis-vertical', [
        ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
        ['circle', { cx: '12', cy: '5', r: '1', key: 'gxeob9' }],
        ['circle', { cx: '12', cy: '19', r: '1', key: 'lyex9k' }],
      ]);
    },
  },
]);
//# sourceMappingURL=p__chunk__index.4385144d.async.js.map
