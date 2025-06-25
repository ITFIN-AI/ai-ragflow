'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [48],
  {
    5715: function (a, e, t) {
      t.d(e, {
        F$: function () {
          return p;
        },
        Q5: function () {
          return h;
        },
        qE: function () {
          return m;
        },
      });
      var n = t(97857),
        s = t.n(n),
        c = t(13769),
        r = t.n(c),
        o = t(10952),
        i = t(62435),
        l = t(27080),
        u = t(86074),
        d = ['className'],
        f = ['className'],
        g = ['className'],
        m = i.forwardRef(function (a, e) {
          var t = a.className,
            n = r()(a, d);
          return (0, u.jsx)(
            o.fC,
            s()(
              {
                ref: e,
                className: (0, l.cn)(
                  'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
                  t,
                ),
              },
              n,
            ),
          );
        });
      m.displayName = o.fC.displayName;
      var p = i.forwardRef(function (a, e) {
        var t = a.className,
          n = r()(a, f);
        return (0, u.jsx)(
          o.Ee,
          s()(
            { ref: e, className: (0, l.cn)('aspect-square h-full w-full', t) },
            n,
          ),
        );
      });
      p.displayName = o.Ee.displayName;
      var h = i.forwardRef(function (a, e) {
        var t = a.className,
          n = r()(a, g);
        return (0, u.jsx)(
          o.NY,
          s()(
            {
              ref: e,
              className: (0, l.cn)(
                'flex h-full w-full items-center justify-center rounded-full bg-muted',
                t,
              ),
            },
            n,
          ),
        );
      });
      h.displayName = o.NY.displayName;
    },
    87030: function (a, e, t) {
      t.d(e, {
        Ol: function () {
          return x;
        },
        SZ: function () {
          return N;
        },
        Zb: function () {
          return h;
        },
        aY: function () {
          return C;
        },
        ll: function () {
          return v;
        },
      });
      var n = t(97857),
        s = t.n(n),
        c = t(13769),
        r = t.n(c),
        o = t(62435),
        i = t(27080),
        l = t(86074),
        u = ['className'],
        d = ['className'],
        f = ['className'],
        g = ['className'],
        m = ['className'],
        p = ['className'],
        h = o.forwardRef(function (a, e) {
          var t = a.className,
            n = r()(a, u);
          return (0, l.jsx)(
            'div',
            s()(
              {
                ref: e,
                className: (0, i.cn)(
                  'rounded-lg  bg-background-card  text-card-foreground shadow-sm',
                  t,
                ),
              },
              n,
            ),
          );
        });
      h.displayName = 'Card';
      var x = o.forwardRef(function (a, e) {
        var t = a.className,
          n = r()(a, d);
        return (0, l.jsx)(
          'div',
          s()(
            {
              ref: e,
              className: (0, i.cn)('flex flex-col space-y-1.5 p-6', t),
            },
            n,
          ),
        );
      });
      x.displayName = 'CardHeader';
      var v = o.forwardRef(function (a, e) {
        var t = a.className,
          n = r()(a, f);
        return (0, l.jsx)(
          'div',
          s()(
            {
              ref: e,
              className: (0, i.cn)(
                'text-2xl font-semibold leading-none tracking-tight',
                t,
              ),
            },
            n,
          ),
        );
      });
      v.displayName = 'CardTitle';
      var N = o.forwardRef(function (a, e) {
        var t = a.className,
          n = r()(a, g);
        return (0, l.jsx)(
          'div',
          s()(
            {
              ref: e,
              className: (0, i.cn)('text-sm text-muted-foreground', t),
            },
            n,
          ),
        );
      });
      N.displayName = 'CardDescription';
      var C = o.forwardRef(function (a, e) {
        var t = a.className,
          n = r()(a, m);
        return (0, l.jsx)(
          'div',
          s()({ ref: e, className: (0, i.cn)('p-6 pt-0', t) }, n),
        );
      });
      (C.displayName = 'CardContent'),
        (o.forwardRef(function (a, e) {
          var t = a.className,
            n = r()(a, p);
          return (0, l.jsx)(
            'div',
            s()(
              { ref: e, className: (0, i.cn)('flex items-center p-6 pt-0', t) },
              n,
            ),
          );
        }).displayName = 'CardFooter');
    },
    704: function (a, e, t) {
      t.d(e, {
        $: function () {
          return d;
        },
        t: function () {
          return u;
        },
      });
      var n = t(9783),
        s = t.n(n),
        c = t(5574),
        r = t.n(c),
        o = t(23454),
        i = t(62435),
        l = t(42028),
        u = (function (a) {
          return (a.KnowledgeId = 'knowledgeId'), a;
        })({}),
        d = function () {
          var a = (0, l.s0)(),
            e = (0, l.lr)(),
            t = r()(e, 1)[0],
            n = (0, l.UO)().id,
            c = (0, i.useCallback)(
              function () {
                a(o.Z.Datasets);
              },
              [a],
            ),
            d = (0, i.useCallback)(
              function (e) {
                return function () {
                  a(''.concat(o.Z.Dataset, '/').concat(e));
                };
              },
              [a],
            ),
            f = (0, i.useCallback)(
              function () {
                a(o.Z.Home);
              },
              [a],
            ),
            g = (0, i.useCallback)(
              function () {
                a(o.Z.ProfileSetting);
              },
              [a],
            ),
            m = (0, i.useCallback)(
              function () {
                a(o.Z.Chats);
              },
              [a],
            ),
            p = (0, i.useCallback)(
              function () {
                a(o.Z.Chat);
              },
              [a],
            ),
            h = (0, i.useCallback)(
              function () {
                a(o.Z.Agents);
              },
              [a],
            ),
            x = (0, i.useCallback)(
              function (e) {
                return function () {
                  a(''.concat(o.Z.Agent, '/').concat(e));
                };
              },
              [a],
            ),
            v = (0, i.useCallback)(
              function () {
                a(o.Z.AgentTemplates);
              },
              [a],
            ),
            N = (0, i.useCallback)(
              function () {
                a(o.Z.Searches);
              },
              [a],
            ),
            C = (0, i.useCallback)(
              function () {
                a(o.Z.Search);
              },
              [a],
            ),
            k = (0, i.useCallback)(
              function (e, t) {
                return function () {
                  a(
                    ''
                      .concat(o.Z.ParsedResult, '/chunks?id=')
                      .concat(t, '&doc_id=')
                      .concat(e),
                  );
                };
              },
              [a],
            ),
            j = (0, i.useCallback)(
              function (a) {
                var e = s()({}, u.KnowledgeId, t.get(u.KnowledgeId));
                return a ? e[a] : e;
              },
              [t],
            ),
            b = (0, i.useCallback)(
              function (e) {
                a(
                  ''
                    .concat(e, '/')
                    .concat(n, '?')
                    .concat(u.KnowledgeId, '=')
                    .concat(j(u.KnowledgeId)),
                );
              },
              [j, n, a],
            ),
            w = (0, i.useCallback)(
              function (e) {
                a(''.concat(o.Z.Files, '?folderId=').concat(e));
              },
              [a],
            );
          return {
            navigateToDatasetList: c,
            navigateToDataset: d,
            navigateToHome: f,
            navigateToProfile: g,
            navigateToChatList: m,
            navigateToChat: p,
            navigateToChunkParsedResult: k,
            getQueryString: j,
            navigateToChunk: b,
            navigateToAgentList: h,
            navigateToAgent: x,
            navigateToAgentTemplates: v,
            navigateToSearchList: N,
            navigateToSearch: C,
            navigateToFiles: w,
          };
        };
    },
    24160: function (a, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return p;
          },
        });
      var n = t(87926),
        s = t(57636),
        c = t(20334),
        r = t(31012),
        o = t(5715),
        i = t(87030),
        l = t(704),
        u = t(28382),
        d = t(64998),
        f = t(13718),
        g = t(86074);
      function m(a) {
        var e = a.data,
          t = (0, l.$)().navigateToSearch;
        return (0, g.jsx)(i.Zb, {
          className:
            'bg-colors-background-inverse-weak  border-colors-outline-neutral-standard',
          children: (0, g.jsxs)(i.aY, {
            className: 'p-4',
            children: [
              (0, g.jsx)('div', {
                className: 'flex justify-between mb-4',
                children: e.avatar
                  ? (0, g.jsx)('div', {
                      className: 'w-[70px] h-[70px] rounded-xl bg-cover',
                      style: { backgroundImage: 'url('.concat(e.avatar, ')') },
                    })
                  : (0, g.jsxs)(o.qE, {
                      className: 'w-[70px] h-[70px]',
                      children: [
                        (0, g.jsx)(o.F$, {
                          src: 'https://github.com/shadcn.png',
                        }),
                        (0, g.jsx)(o.Q5, { children: 'CN' }),
                      ],
                    }),
              }),
              (0, g.jsx)('h3', {
                className: 'text-xl font-bold mb-2',
                children: e.title,
              }),
              (0, g.jsx)('p', {
                children: 'An app that does things An app that does things',
              }),
              (0, g.jsxs)('section', {
                className: 'flex justify-between pt-3',
                children: [
                  (0, g.jsxs)('div', {
                    children: [
                      'Search app',
                      (0, g.jsx)('p', {
                        className: 'text-sm opacity-80',
                        children: (0, u.Qc)(e.update_time),
                      }),
                    ],
                  }),
                  (0, g.jsxs)('div', {
                    className: 'space-x-2',
                    children: [
                      (0, g.jsx)(s.zx, {
                        variant: 'icon',
                        size: 'icon',
                        onClick: t,
                        children: (0, g.jsx)(d.Z, { className: 'h-6 w-6' }),
                      }),
                      (0, g.jsx)(s.zx, {
                        variant: 'icon',
                        size: 'icon',
                        children: (0, g.jsx)(f.Z, {}),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function p() {
        var a = (0, c.bf)().data;
        return (0, g.jsxs)('section', {
          children: [
            (0, g.jsx)('div', {
              className: 'px-8 pt-8',
              children: (0, g.jsx)(n.Z, {
                title: 'Search apps',
                children: (0, g.jsxs)(s.zx, {
                  variant: 'tertiary',
                  size: 'sm',
                  children: [
                    (0, g.jsx)(r.Z, { className: 'mr-2 h-4 w-4' }),
                    'Create app',
                  ],
                }),
              }),
            }),
            (0, g.jsx)('div', {
              className:
                'grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 max-h-[84vh] overflow-auto px-8',
              children: a.map(function (a) {
                return (0, g.jsx)(m, { data: a }, a.id);
              }),
            }),
          ],
        });
      }
    },
    23454: function (a, e, t) {
      t.d(e, {
        Z: function () {
          return n;
        },
      });
      var n = (function (a) {
        return (
          (a.Login = '/login'),
          (a.Home = '/home'),
          (a.Datasets = '/datasets'),
          (a.DatasetBase = '/dataset'),
          (a[(a.Dataset = ''.concat(a.DatasetBase).concat(a.DatasetBase))] =
            'Dataset'),
          (a.Agent = '/agent'),
          (a.AgentTemplates = '/agent-templates'),
          (a.Agents = '/agents'),
          (a.Searches = '/next-searches'),
          (a.Search = '/next-search'),
          (a.Chats = '/next-chats'),
          (a.Chat = '/next-chat'),
          (a.Files = '/files'),
          (a.ProfileSetting = '/profile-setting'),
          (a.DatasetTesting = '/testing'),
          (a.DatasetSetting = '/setting'),
          (a.Chunk = '/chunk'),
          (a.ChunkResult = '/chunk/chunk'),
          (a.Parsed = '/parsed'),
          (a.ParsedResult = '/chunk/parsed'),
          (a.Result = '/result'),
          (a.ResultView = '/chunk/result'),
          a
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
    28382: function (a, e, t) {
      t.d(e, {
        Qc: function () {
          return o;
        },
        mr: function () {
          return r;
        },
        p6: function () {
          return c;
        },
      });
      var n = t(27484),
        s = t.n(n);
      function c(a) {
        return a ? s()(a).format('DD/MM/YYYY HH:mm:ss') : '';
      }
      function r(a) {
        return a ? s()(a).format('HH:mm:ss') : '';
      }
      function o(a) {
        return a ? s()(a).format('DD/MM/YYYY') : '';
      }
    },
  },
]);
//# sourceMappingURL=p__next-searches__index.48098723.async.js.map
