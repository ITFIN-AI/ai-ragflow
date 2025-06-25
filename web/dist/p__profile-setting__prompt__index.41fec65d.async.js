/*! For license information please see p__profile-setting__prompt__index.41fec65d.async.js.LICENSE.txt */
'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [2764],
  {
    87030: function (e, a, s) {
      s.d(a, {
        Ol: function () {
          return v;
        },
        SZ: function () {
          return g;
        },
        Zb: function () {
          return N;
        },
        aY: function () {
          return j;
        },
        ll: function () {
          return p;
        },
      });
      var n = s(97857),
        r = s.n(n),
        t = s(13769),
        l = s.n(t),
        i = s(62435),
        c = s(27080),
        d = s(86074),
        o = ['className'],
        u = ['className'],
        m = ['className'],
        f = ['className'],
        x = ['className'],
        h = ['className'],
        N = i.forwardRef(function (e, a) {
          var s = e.className,
            n = l()(e, o);
          return (0, d.jsx)(
            'div',
            r()(
              {
                ref: a,
                className: (0, c.cn)(
                  'rounded-lg  bg-background-card  text-card-foreground shadow-sm',
                  s,
                ),
              },
              n,
            ),
          );
        });
      N.displayName = 'Card';
      var v = i.forwardRef(function (e, a) {
        var s = e.className,
          n = l()(e, u);
        return (0, d.jsx)(
          'div',
          r()(
            {
              ref: a,
              className: (0, c.cn)('flex flex-col space-y-1.5 p-6', s),
            },
            n,
          ),
        );
      });
      v.displayName = 'CardHeader';
      var p = i.forwardRef(function (e, a) {
        var s = e.className,
          n = l()(e, m);
        return (0, d.jsx)(
          'div',
          r()(
            {
              ref: a,
              className: (0, c.cn)(
                'text-2xl font-semibold leading-none tracking-tight',
                s,
              ),
            },
            n,
          ),
        );
      });
      p.displayName = 'CardTitle';
      var g = i.forwardRef(function (e, a) {
        var s = e.className,
          n = l()(e, f);
        return (0, d.jsx)(
          'div',
          r()(
            {
              ref: a,
              className: (0, c.cn)('text-sm text-muted-foreground', s),
            },
            n,
          ),
        );
      });
      g.displayName = 'CardDescription';
      var j = i.forwardRef(function (e, a) {
        var s = e.className,
          n = l()(e, x);
        return (0, d.jsx)(
          'div',
          r()({ ref: a, className: (0, c.cn)('p-6 pt-0', s) }, n),
        );
      });
      (j.displayName = 'CardContent'),
        (i.forwardRef(function (e, a) {
          var s = e.className,
            n = l()(e, h);
          return (0, d.jsx)(
            'div',
            r()(
              { ref: a, className: (0, c.cn)('flex items-center p-6 pt-0', s) },
              n,
            ),
          );
        }).displayName = 'CardFooter');
    },
    70324: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return d;
          },
        });
      var n = s(57636),
        r = s(87030),
        t = s(31012),
        l = s(13718),
        i = s(86074);
      function c(e) {
        var a = e.children;
        return (0, i.jsx)('span', {
          className: 'font-bold text-xl',
          children: a,
        });
      }
      var d = function () {
        var e = new Array(8).fill(1);
        return (0, i.jsxs)('div', {
          className: 'p-8 ',
          children: [
            (0, i.jsx)('div', {
              className: 'mx-auto',
              children: (0, i.jsxs)('div', {
                className: 'flex justify-between items-center mb-8',
                children: [
                  (0, i.jsx)('h1', {
                    className: 'text-4xl font-bold',
                    children: 'Prompt templates',
                  }),
                  (0, i.jsxs)(n.zx, {
                    variant: 'tertiary',
                    size: 'sm',
                    children: [
                      (0, i.jsx)(t.Z, { className: 'mr-2 h-4 w-4' }),
                      'Create template',
                    ],
                  }),
                ],
              }),
            }),
            (0, i.jsx)('div', {
              className:
                'grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4',
              children: e.map(function (e, a) {
                return (0, i.jsx)(
                  r.Zb,
                  {
                    className: 'p-0',
                    children: (0, i.jsxs)(r.aY, {
                      className: 'space-y-4 p-4',
                      children: [
                        (0, i.jsx)(c, { children: 'Prompt name' }),
                        (0, i.jsx)('p', {
                          className: 'line-clamp-3',
                          children:
                            'You are an intelligent assistant. Please summarize the content of the knowledge base to answer the question. Please list the data in the knowledge base and answer in detail. When all knowledge base content is irrelevant to the question, your answer must include the sentence "The answer you are looking for is not found in the knowledge base!" Answers need to consider chat history.\n      Here is the knowledge base:\n      {knowledge}\n      The above is the knowledge base.',
                        }),
                        (0, i.jsxs)('div', {
                          className: 'flex justify-end gap-2',
                          children: [
                            (0, i.jsx)(n.zx, {
                              size: 'sm',
                              variant: 'secondary',
                              children: (0, i.jsx)(l.Z, {}),
                            }),
                            (0, i.jsx)(n.zx, {
                              variant: 'outline',
                              size: 'sm',
                              children: 'Edit',
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  a,
                );
              }),
            }),
          ],
        });
      };
    },
    13718: function (e, a, s) {
      s.d(a, {
        Z: function () {
          return n;
        },
      });
      const n = (0, s(91373).Z)('trash-2', [
        ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
        ['path', { d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6', key: '4alrt4' }],
        ['path', { d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', key: 'v07s0e' }],
        ['line', { x1: '10', x2: '10', y1: '11', y2: '17', key: '1uufr5' }],
        ['line', { x1: '14', x2: '14', y1: '11', y2: '17', key: 'xtxkd' }],
      ]);
    },
  },
]);
//# sourceMappingURL=p__profile-setting__prompt__index.41fec65d.async.js.map
