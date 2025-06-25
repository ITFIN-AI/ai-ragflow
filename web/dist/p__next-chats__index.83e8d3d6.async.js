'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [7022],
  {
    5715: function (e, a, t) {
      t.d(a, {
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
        m = i.forwardRef(function (e, a) {
          var t = e.className,
            n = r()(e, d);
          return (0, u.jsx)(
            o.fC,
            s()(
              {
                ref: a,
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
      var p = i.forwardRef(function (e, a) {
        var t = e.className,
          n = r()(e, f);
        return (0, u.jsx)(
          o.Ee,
          s()(
            { ref: a, className: (0, l.cn)('aspect-square h-full w-full', t) },
            n,
          ),
        );
      });
      p.displayName = o.Ee.displayName;
      var h = i.forwardRef(function (e, a) {
        var t = e.className,
          n = r()(e, g);
        return (0, u.jsx)(
          o.NY,
          s()(
            {
              ref: a,
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
    87030: function (e, a, t) {
      t.d(a, {
        Ol: function () {
          return x;
        },
        SZ: function () {
          return C;
        },
        Zb: function () {
          return h;
        },
        aY: function () {
          return N;
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
        h = o.forwardRef(function (e, a) {
          var t = e.className,
            n = r()(e, u);
          return (0, l.jsx)(
            'div',
            s()(
              {
                ref: a,
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
      var x = o.forwardRef(function (e, a) {
        var t = e.className,
          n = r()(e, d);
        return (0, l.jsx)(
          'div',
          s()(
            {
              ref: a,
              className: (0, i.cn)('flex flex-col space-y-1.5 p-6', t),
            },
            n,
          ),
        );
      });
      x.displayName = 'CardHeader';
      var v = o.forwardRef(function (e, a) {
        var t = e.className,
          n = r()(e, f);
        return (0, l.jsx)(
          'div',
          s()(
            {
              ref: a,
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
      var C = o.forwardRef(function (e, a) {
        var t = e.className,
          n = r()(e, g);
        return (0, l.jsx)(
          'div',
          s()(
            {
              ref: a,
              className: (0, i.cn)('text-sm text-muted-foreground', t),
            },
            n,
          ),
        );
      });
      C.displayName = 'CardDescription';
      var N = o.forwardRef(function (e, a) {
        var t = e.className,
          n = r()(e, m);
        return (0, l.jsx)(
          'div',
          s()({ ref: a, className: (0, i.cn)('p-6 pt-0', t) }, n),
        );
      });
      (N.displayName = 'CardContent'),
        (o.forwardRef(function (e, a) {
          var t = e.className,
            n = r()(e, p);
          return (0, l.jsx)(
            'div',
            s()(
              { ref: a, className: (0, i.cn)('flex items-center p-6 pt-0', t) },
              n,
            ),
          );
        }).displayName = 'CardFooter');
    },
    704: function (e, a, t) {
      t.d(a, {
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
        u = (function (e) {
          return (e.KnowledgeId = 'knowledgeId'), e;
        })({}),
        d = function () {
          var e = (0, l.s0)(),
            a = (0, l.lr)(),
            t = r()(a, 1)[0],
            n = (0, l.UO)().id,
            c = (0, i.useCallback)(
              function () {
                e(o.Z.Datasets);
              },
              [e],
            ),
            d = (0, i.useCallback)(
              function (a) {
                return function () {
                  e(''.concat(o.Z.Dataset, '/').concat(a));
                };
              },
              [e],
            ),
            f = (0, i.useCallback)(
              function () {
                e(o.Z.Home);
              },
              [e],
            ),
            g = (0, i.useCallback)(
              function () {
                e(o.Z.ProfileSetting);
              },
              [e],
            ),
            m = (0, i.useCallback)(
              function () {
                e(o.Z.Chats);
              },
              [e],
            ),
            p = (0, i.useCallback)(
              function () {
                e(o.Z.Chat);
              },
              [e],
            ),
            h = (0, i.useCallback)(
              function () {
                e(o.Z.Agents);
              },
              [e],
            ),
            x = (0, i.useCallback)(
              function (a) {
                return function () {
                  e(''.concat(o.Z.Agent, '/').concat(a));
                };
              },
              [e],
            ),
            v = (0, i.useCallback)(
              function () {
                e(o.Z.AgentTemplates);
              },
              [e],
            ),
            C = (0, i.useCallback)(
              function () {
                e(o.Z.Searches);
              },
              [e],
            ),
            N = (0, i.useCallback)(
              function () {
                e(o.Z.Search);
              },
              [e],
            ),
            k = (0, i.useCallback)(
              function (a, t) {
                return function () {
                  e(
                    ''
                      .concat(o.Z.ParsedResult, '/chunks?id=')
                      .concat(t, '&doc_id=')
                      .concat(a),
                  );
                };
              },
              [e],
            ),
            j = (0, i.useCallback)(
              function (e) {
                var a = s()({}, u.KnowledgeId, t.get(u.KnowledgeId));
                return e ? a[e] : a;
              },
              [t],
            ),
            D = (0, i.useCallback)(
              function (a) {
                e(
                  ''
                    .concat(a, '/')
                    .concat(n, '?')
                    .concat(u.KnowledgeId, '=')
                    .concat(j(u.KnowledgeId)),
                );
              },
              [j, n, e],
            ),
            b = (0, i.useCallback)(
              function (a) {
                e(''.concat(o.Z.Files, '?folderId=').concat(a));
              },
              [e],
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
            navigateToChunk: D,
            navigateToAgentList: h,
            navigateToAgent: x,
            navigateToAgentTemplates: v,
            navigateToSearchList: C,
            navigateToSearch: N,
            navigateToFiles: b,
          };
        };
    },
    15333: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return p;
          },
        });
      var n = t(87926),
        s = t(57636),
        c = t(91028),
        r = t(31012),
        o = t(5715),
        i = t(87030),
        l = t(704),
        u = t(28382),
        d = t(64998),
        f = t(13718),
        g = t(86074);
      function m(e) {
        var a = e.data,
          t = (0, l.$)().navigateToChat;
        return (0, g.jsx)(i.Zb, {
          className:
            'bg-colors-background-inverse-weak  border-colors-outline-neutral-standard',
          children: (0, g.jsxs)(i.aY, {
            className: 'p-4',
            children: [
              (0, g.jsx)('div', {
                className: 'flex justify-between mb-4',
                children: a.icon
                  ? (0, g.jsx)('div', {
                      className: 'w-[70px] h-[70px] rounded-xl bg-cover',
                      style: { backgroundImage: 'url('.concat(a.icon, ')') },
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
                children: a.name,
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
                        children: (0, u.Qc)(a.update_time),
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
        var e = (0, c.xr)().data;
        return (0, g.jsxs)('section', {
          className: 'p-8',
          children: [
            (0, g.jsx)(n.Z, {
              title: 'Chat apps',
              children: (0, g.jsxs)(s.zx, {
                variant: 'tertiary',
                size: 'sm',
                children: [
                  (0, g.jsx)(r.Z, { className: 'mr-2 h-4 w-4' }),
                  'Create app',
                ],
              }),
            }),
            (0, g.jsx)('div', {
              className:
                'grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8',
              children: e.map(function (e) {
                return (0, g.jsx)(m, { data: e }, e.id);
              }),
            }),
          ],
        });
      }
    },
    23454: function (e, a, t) {
      t.d(a, {
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
    28382: function (e, a, t) {
      t.d(a, {
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
      function c(e) {
        return e ? s()(e).format('DD/MM/YYYY HH:mm:ss') : '';
      }
      function r(e) {
        return e ? s()(e).format('HH:mm:ss') : '';
      }
      function o(e) {
        return e ? s()(e).format('DD/MM/YYYY') : '';
      }
    },
  },
]);
//# sourceMappingURL=p__next-chats__index.83e8d3d6.async.js.map
