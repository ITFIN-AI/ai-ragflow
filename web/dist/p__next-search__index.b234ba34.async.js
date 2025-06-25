/*! For license information please see p__next-search__index.b234ba34.async.js.LICENSE.txt */
'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [7193],
  {
    36646: function (e, t, a) {
      a.d(t, {
        m: function () {
          return i;
        },
      });
      var n = a(53219),
        c = a(57636),
        s = a(86074);
      function i(e) {
        var t = e.back,
          a = e.title,
          i = e.children;
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
            i,
          ],
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
        i = a.n(s),
        o = a(23454),
        l = a(62435),
        r = a(42028),
        u = (function (e) {
          return (e.KnowledgeId = 'knowledgeId'), e;
        })({}),
        g = function () {
          var e = (0, r.s0)(),
            t = (0, r.lr)(),
            a = i()(t, 1)[0],
            n = (0, r.UO)().id,
            s = (0, l.useCallback)(
              function () {
                e(o.Z.Datasets);
              },
              [e],
            ),
            g = (0, l.useCallback)(
              function (t) {
                return function () {
                  e(''.concat(o.Z.Dataset, '/').concat(t));
                };
              },
              [e],
            ),
            h = (0, l.useCallback)(
              function () {
                e(o.Z.Home);
              },
              [e],
            ),
            f = (0, l.useCallback)(
              function () {
                e(o.Z.ProfileSetting);
              },
              [e],
            ),
            d = (0, l.useCallback)(
              function () {
                e(o.Z.Chats);
              },
              [e],
            ),
            p = (0, l.useCallback)(
              function () {
                e(o.Z.Chat);
              },
              [e],
            ),
            k = (0, l.useCallback)(
              function () {
                e(o.Z.Agents);
              },
              [e],
            ),
            C = (0, l.useCallback)(
              function (t) {
                return function () {
                  e(''.concat(o.Z.Agent, '/').concat(t));
                };
              },
              [e],
            ),
            m = (0, l.useCallback)(
              function () {
                e(o.Z.AgentTemplates);
              },
              [e],
            ),
            x = (0, l.useCallback)(
              function () {
                e(o.Z.Searches);
              },
              [e],
            ),
            S = (0, l.useCallback)(
              function () {
                e(o.Z.Search);
              },
              [e],
            ),
            v = (0, l.useCallback)(
              function (t, a) {
                return function () {
                  e(
                    ''
                      .concat(o.Z.ParsedResult, '/chunks?id=')
                      .concat(a, '&doc_id=')
                      .concat(t),
                  );
                };
              },
              [e],
            ),
            D = (0, l.useCallback)(
              function (e) {
                var t = c()({}, u.KnowledgeId, a.get(u.KnowledgeId));
                return e ? t[e] : t;
              },
              [a],
            ),
            b = (0, l.useCallback)(
              function (t) {
                e(
                  ''
                    .concat(t, '/')
                    .concat(n, '?')
                    .concat(u.KnowledgeId, '=')
                    .concat(D(u.KnowledgeId)),
                );
              },
              [D, n, e],
            ),
            P = (0, l.useCallback)(
              function (t) {
                e(''.concat(o.Z.Files, '?folderId=').concat(t));
              },
              [e],
            );
          return {
            navigateToDatasetList: s,
            navigateToDataset: g,
            navigateToHome: h,
            navigateToProfile: f,
            navigateToChatList: d,
            navigateToChat: p,
            navigateToChunkParsedResult: v,
            getQueryString: D,
            navigateToChunk: b,
            navigateToAgentList: k,
            navigateToAgent: C,
            navigateToAgentTemplates: m,
            navigateToSearchList: x,
            navigateToSearch: S,
            navigateToFiles: P,
          };
        };
    },
    89922: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var n = a(36646),
        c = a(57636),
        s = a(704),
        i = a(95999),
        o = a(86074);
      function l() {
        var e = (0, s.$)().navigateToSearchList;
        return (0, o.jsx)('section', {
          children: (0, o.jsx)(n.m, {
            back: e,
            title: 'Search app 01',
            children: (0, o.jsxs)('div', {
              className: 'flex items-center gap-2',
              children: [
                (0, o.jsx)(c.zx, {
                  variant: 'icon',
                  size: 'icon',
                  children: (0, o.jsx)(i.Z, {}),
                }),
                (0, o.jsx)(c.zx, {
                  variant: 'tertiary',
                  size: 'sm',
                  children: 'Publish',
                }),
              ],
            }),
          }),
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
//# sourceMappingURL=p__next-search__index.b234ba34.async.js.map
