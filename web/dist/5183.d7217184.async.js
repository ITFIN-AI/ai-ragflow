'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [5183],
  {
    32739: function (e, a, n) {
      n.d(a, {
        FG: function () {
          return _;
        },
        Gs: function () {
          return g;
        },
        YC: function () {
          return d;
        },
        oD: function () {
          return i;
        },
        uo: function () {
          return s;
        },
      });
      var o = n(86968),
        t = n(22150),
        l = n(71338),
        r = n(1604),
        u = n(15309),
        c = n(86074);
      a.ZP = function (e) {
        var a = e.isTooltipShown,
          n = void 0 !== a && a,
          r = e.vectorSimilarityWeightName,
          u = void 0 === r ? 'vector_similarity_weight' : r,
          i = (0, o.qM)('knowledgeDetails').t;
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(t.Z.Item, {
              label: i('similarityThreshold'),
              name: 'similarity_threshold',
              tooltip: n && i('similarityThresholdTip'),
              initialValue: 0.2,
              children: (0, c.jsx)(l.Z, { max: 1, step: 0.01 }),
            }),
            (0, c.jsx)(t.Z.Item, {
              label: i('vectorSimilarityWeight'),
              name: u,
              initialValue: 0.7,
              tooltip: n && i('vectorSimilarityWeightTip'),
              children: (0, c.jsx)(l.Z, { max: 1, step: 0.01 }),
            }),
          ],
        });
      };
      var i = { similarity_threshold: 0.2 },
        g = { keywords_similarity_weight: 0.7 },
        s = { similarity_threshold: r.z.number() },
        d = { keywords_similarity_weight: r.z.number() };
      function _(e) {
        var a = e.vectorSimilarityWeightName,
          n = void 0 === a ? 'vector_similarity_weight' : a,
          t = e.isTooltipShown,
          l = (0, o.qM)('knowledgeDetails').t;
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(u.W, {
              name: 'similarity_threshold',
              label: l('similarityThreshold'),
              max: 1,
              step: 0.01,
              tooltip: t && l('similarityThresholdTip'),
            }),
            (0, c.jsx)(u.W, {
              name: n,
              label: l('vectorSimilarityWeight'),
              max: 1,
              step: 0.01,
              tooltip: t && l('vectorSimilarityWeightTip'),
            }),
          ],
        });
      }
    },
    15309: function (e, a, n) {
      n.d(a, {
        W: function () {
          return s;
        },
      });
      var o = n(97857),
        t = n.n(o),
        l = n(27080),
        r = n(87536),
        u = n(4533),
        c = n(80499),
        i = n(27591),
        g = n(86074);
      function s(e) {
        var a = e.max,
          n = e.min,
          o = e.step,
          s = e.label,
          d = e.name,
          _ = e.tooltip,
          m = e.defaultValue,
          y = e.className,
          b = (0, r.Gc)();
        return (0, g.jsx)(c.Wi, {
          control: b.control,
          name: d,
          defaultValue: m || 0,
          render: function (e) {
            var r = e.field;
            return (0, g.jsxs)(c.xJ, {
              className: ' items-center space-y-0 ',
              children: [
                (0, g.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, g.jsx)(c.lX, {
                      tooltip: _,
                      className:
                        'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                      children: s,
                    }),
                    (0, g.jsxs)('div', {
                      className: (0, l.cn)(
                        'flex items-center gap-14 justify-between',
                        'w-3/4',
                        y,
                      ),
                      children: [
                        (0, g.jsx)(c.NI, {
                          children: (0, g.jsx)(
                            u.b,
                            t()(t()({}, r), {}, { max: a, min: n, step: o }),
                          ),
                        }),
                        (0, g.jsx)(c.NI, {
                          children: (0, g.jsx)(
                            i.II,
                            t()(
                              t()(
                                {
                                  type: 'number',
                                  className: 'h-7 w-20',
                                  max: a,
                                  min: n,
                                  step: o,
                                },
                                r,
                              ),
                              {},
                              {
                                onChange: function (e) {
                                  var a = e.target.value;
                                  r.onChange('' === a ? 0 : Number(a));
                                },
                              },
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(c.zG, {}),
              ],
            });
          },
        });
      }
    },
    5715: function (e, a, n) {
      n.d(a, {
        F$: function () {
          return y;
        },
        Q5: function () {
          return b;
        },
        qE: function () {
          return m;
        },
      });
      var o = n(97857),
        t = n.n(o),
        l = n(13769),
        r = n.n(l),
        u = n(10952),
        c = n(62435),
        i = n(27080),
        g = n(86074),
        s = ['className'],
        d = ['className'],
        _ = ['className'],
        m = c.forwardRef(function (e, a) {
          var n = e.className,
            o = r()(e, s);
          return (0, g.jsx)(
            u.fC,
            t()(
              {
                ref: a,
                className: (0, i.cn)(
                  'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
                  n,
                ),
              },
              o,
            ),
          );
        });
      m.displayName = u.fC.displayName;
      var y = c.forwardRef(function (e, a) {
        var n = e.className,
          o = r()(e, d);
        return (0, g.jsx)(
          u.Ee,
          t()(
            { ref: a, className: (0, i.cn)('aspect-square h-full w-full', n) },
            o,
          ),
        );
      });
      y.displayName = u.Ee.displayName;
      var b = c.forwardRef(function (e, a) {
        var n = e.className,
          o = r()(e, _);
        return (0, g.jsx)(
          u.NY,
          t()(
            {
              ref: a,
              className: (0, i.cn)(
                'flex h-full w-full items-center justify-center rounded-full bg-muted',
                n,
              ),
            },
            o,
          ),
        );
      });
      b.displayName = u.NY.displayName;
    },
    87030: function (e, a, n) {
      n.d(a, {
        Ol: function () {
          return v;
        },
        SZ: function () {
          return h;
        },
        Zb: function () {
          return b;
        },
        aY: function () {
          return p;
        },
        ll: function () {
          return f;
        },
      });
      var o = n(97857),
        t = n.n(o),
        l = n(13769),
        r = n.n(l),
        u = n(62435),
        c = n(27080),
        i = n(86074),
        g = ['className'],
        s = ['className'],
        d = ['className'],
        _ = ['className'],
        m = ['className'],
        y = ['className'],
        b = u.forwardRef(function (e, a) {
          var n = e.className,
            o = r()(e, g);
          return (0, i.jsx)(
            'div',
            t()(
              {
                ref: a,
                className: (0, c.cn)(
                  'rounded-lg  bg-background-card  text-card-foreground shadow-sm',
                  n,
                ),
              },
              o,
            ),
          );
        });
      b.displayName = 'Card';
      var v = u.forwardRef(function (e, a) {
        var n = e.className,
          o = r()(e, s);
        return (0, i.jsx)(
          'div',
          t()(
            {
              ref: a,
              className: (0, c.cn)('flex flex-col space-y-1.5 p-6', n),
            },
            o,
          ),
        );
      });
      v.displayName = 'CardHeader';
      var f = u.forwardRef(function (e, a) {
        var n = e.className,
          o = r()(e, d);
        return (0, i.jsx)(
          'div',
          t()(
            {
              ref: a,
              className: (0, c.cn)(
                'text-2xl font-semibold leading-none tracking-tight',
                n,
              ),
            },
            o,
          ),
        );
      });
      f.displayName = 'CardTitle';
      var h = u.forwardRef(function (e, a) {
        var n = e.className,
          o = r()(e, _);
        return (0, i.jsx)(
          'div',
          t()(
            {
              ref: a,
              className: (0, c.cn)('text-sm text-muted-foreground', n),
            },
            o,
          ),
        );
      });
      h.displayName = 'CardDescription';
      var p = u.forwardRef(function (e, a) {
        var n = e.className,
          o = r()(e, m);
        return (0, i.jsx)(
          'div',
          t()({ ref: a, className: (0, c.cn)('p-6 pt-0', n) }, o),
        );
      });
      (p.displayName = 'CardContent'),
        (u.forwardRef(function (e, a) {
          var n = e.className,
            o = r()(e, y);
          return (0, i.jsx)(
            'div',
            t()(
              { ref: a, className: (0, c.cn)('flex items-center p-6 pt-0', n) },
              o,
            ),
          );
        }).displayName = 'CardFooter');
    },
    28993: function (e, a, n) {
      n.d(a, {
        $N: function () {
          return N;
        },
        Vq: function () {
          return f;
        },
        cN: function () {
          return C;
        },
        cZ: function () {
          return w;
        },
        fK: function () {
          return S;
        },
        hg: function () {
          return h;
        },
      });
      var o = n(97857),
        t = n.n(o),
        l = n(13769),
        r = n.n(l),
        u = n(28828),
        c = n(41352),
        i = n(62435),
        g = n(27080),
        s = n(86074),
        d = ['className'],
        _ = ['className', 'children'],
        m = ['className'],
        y = ['className'],
        b = ['className'],
        v = ['className'],
        f = u.fC,
        h = u.xz,
        p = u.h_,
        k =
          (u.x8,
          i.forwardRef(function (e, a) {
            var n = e.className,
              o = r()(e, d);
            return (0, s.jsx)(
              u.aV,
              t()(
                {
                  ref: a,
                  className: (0, g.cn)(
                    'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    n,
                  ),
                },
                o,
              ),
            );
          }));
      k.displayName = u.aV.displayName;
      var w = i.forwardRef(function (e, a) {
        var n = e.className,
          o = e.children,
          l = r()(e, _);
        return (0, s.jsxs)(p, {
          children: [
            (0, s.jsx)(k, {}),
            (0, s.jsxs)(
              u.VY,
              t()(
                t()(
                  {
                    ref: a,
                    className: (0, g.cn)(
                      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-colors-background-neutral-standard p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                      n,
                    ),
                  },
                  l,
                ),
                {},
                {
                  children: [
                    o,
                    (0, s.jsxs)(u.x8, {
                      className:
                        'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                      children: [
                        (0, s.jsx)(c.Z, { className: 'h-4 w-4' }),
                        (0, s.jsx)('span', {
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
      w.displayName = u.VY.displayName;
      var S = function (e) {
        var a = e.className,
          n = r()(e, m);
        return (0, s.jsx)(
          'div',
          t()(
            {
              className: (0, g.cn)(
                'flex flex-col space-y-1.5 text-center sm:text-left',
                a,
              ),
            },
            n,
          ),
        );
      };
      S.displayName = 'DialogHeader';
      var C = function (e) {
        var a = e.className,
          n = r()(e, y);
        return (0, s.jsx)(
          'div',
          t()(
            {
              className: (0, g.cn)(
                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                a,
              ),
            },
            n,
          ),
        );
      };
      C.displayName = 'DialogFooter';
      var N = i.forwardRef(function (e, a) {
        var n = e.className,
          o = r()(e, b);
        return (0, s.jsx)(
          u.Dx,
          t()(
            {
              ref: a,
              className: (0, g.cn)(
                'text-lg font-semibold leading-none tracking-tight',
                n,
              ),
            },
            o,
          ),
        );
      });
      (N.displayName = u.Dx.displayName),
        (i.forwardRef(function (e, a) {
          var n = e.className,
            o = r()(e, v);
          return (0, s.jsx)(
            u.dk,
            t()(
              {
                ref: a,
                className: (0, g.cn)('text-sm text-muted-foreground', n),
              },
              o,
            ),
          );
        }).displayName = u.dk.displayName);
    },
    4533: function (e, a, n) {
      n.d(a, {
        b: function () {
          return m;
        },
      });
      var o = n(97857),
        t = n.n(o),
        l = n(13769),
        r = n.n(l),
        u = n(68482),
        c = n(62435),
        i = n(27080),
        g = n(86074),
        s = ['className', 'label', 'labelPosition'],
        d = ['value', 'onChange'],
        _ = c.forwardRef(function (e, a) {
          var n = e.className,
            o = e.label,
            l = e.labelPosition,
            d = void 0 === l ? 'top' : l,
            _ = r()(e, s),
            m = Array.isArray(_.value) ? _.value : [_.min, _.max];
          return (0, g.jsxs)(
            u.fC,
            t()(
              t()(
                {
                  ref: a,
                  className: (0, i.cn)(
                    'relative flex w-full touch-none select-none items-center',
                    n,
                  ),
                },
                _,
              ),
              {},
              {
                children: [
                  (0, g.jsx)(u.fQ, {
                    className:
                      'relative h-2 w-full grow overflow-hidden rounded-full bg-secondary',
                    children: (0, g.jsx)(u.e6, {
                      className: 'absolute h-full bg-background-checked',
                    }),
                  }),
                  m.map(function (e, a) {
                    return (0, g.jsx)(
                      c.Fragment,
                      {
                        children: (0, g.jsx)(u.bU, {
                          className:
                            'relative block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
                          children:
                            o &&
                            (0, g.jsx)('span', {
                              className: (0, i.cn)(
                                'absolute flex w-full justify-center',
                                'top' === d && '-top-7',
                                'bottom' === d && 'top-4',
                              ),
                              children: o(e),
                            }),
                        }),
                      },
                      a,
                    );
                  }),
                ],
              },
            ),
          );
        });
      _.displayName = 'DualRangeSlider';
      var m = c.forwardRef(function (e, a) {
        var n = e.value,
          o = e.onChange,
          l = r()(e, d);
        return (0, g.jsx)(
          _,
          t()(
            {
              ref: a,
              value: [n],
              onValueChange: function (e) {
                o(e[0]);
              },
            },
            l,
          ),
        );
      });
    },
    704: function (e, a, n) {
      n.d(a, {
        $: function () {
          return s;
        },
        t: function () {
          return g;
        },
      });
      var o = n(9783),
        t = n.n(o),
        l = n(5574),
        r = n.n(l),
        u = n(23454),
        c = n(62435),
        i = n(42028),
        g = (function (e) {
          return (e.KnowledgeId = 'knowledgeId'), e;
        })({}),
        s = function () {
          var e = (0, i.s0)(),
            a = (0, i.lr)(),
            n = r()(a, 1)[0],
            o = (0, i.UO)().id,
            l = (0, c.useCallback)(
              function () {
                e(u.Z.Datasets);
              },
              [e],
            ),
            s = (0, c.useCallback)(
              function (a) {
                return function () {
                  e(''.concat(u.Z.Dataset, '/').concat(a));
                };
              },
              [e],
            ),
            d = (0, c.useCallback)(
              function () {
                e(u.Z.Home);
              },
              [e],
            ),
            _ = (0, c.useCallback)(
              function () {
                e(u.Z.ProfileSetting);
              },
              [e],
            ),
            m = (0, c.useCallback)(
              function () {
                e(u.Z.Chats);
              },
              [e],
            ),
            y = (0, c.useCallback)(
              function () {
                e(u.Z.Chat);
              },
              [e],
            ),
            b = (0, c.useCallback)(
              function () {
                e(u.Z.Agents);
              },
              [e],
            ),
            v = (0, c.useCallback)(
              function (a) {
                return function () {
                  e(''.concat(u.Z.Agent, '/').concat(a));
                };
              },
              [e],
            ),
            f = (0, c.useCallback)(
              function () {
                e(u.Z.AgentTemplates);
              },
              [e],
            ),
            h = (0, c.useCallback)(
              function () {
                e(u.Z.Searches);
              },
              [e],
            ),
            p = (0, c.useCallback)(
              function () {
                e(u.Z.Search);
              },
              [e],
            ),
            k = (0, c.useCallback)(
              function (a, n) {
                return function () {
                  e(
                    ''
                      .concat(u.Z.ParsedResult, '/chunks?id=')
                      .concat(n, '&doc_id=')
                      .concat(a),
                  );
                };
              },
              [e],
            ),
            w = (0, c.useCallback)(
              function (e) {
                var a = t()({}, g.KnowledgeId, n.get(g.KnowledgeId));
                return e ? a[e] : a;
              },
              [n],
            ),
            S = (0, c.useCallback)(
              function (a) {
                e(
                  ''
                    .concat(a, '/')
                    .concat(o, '?')
                    .concat(g.KnowledgeId, '=')
                    .concat(w(g.KnowledgeId)),
                );
              },
              [w, o, e],
            ),
            C = (0, c.useCallback)(
              function (a) {
                e(''.concat(u.Z.Files, '?folderId=').concat(a));
              },
              [e],
            );
          return {
            navigateToDatasetList: l,
            navigateToDataset: s,
            navigateToHome: d,
            navigateToProfile: _,
            navigateToChatList: m,
            navigateToChat: y,
            navigateToChunkParsedResult: k,
            getQueryString: w,
            navigateToChunk: S,
            navigateToAgentList: b,
            navigateToAgent: v,
            navigateToAgentTemplates: f,
            navigateToSearchList: h,
            navigateToSearch: p,
            navigateToFiles: C,
          };
        };
    },
    48230: function (e, a, n) {
      n.d(a, {
        $N: function () {
          return H;
        },
        $W: function () {
          return N;
        },
        Bc: function () {
          return q;
        },
        CG: function () {
          return Be;
        },
        Cv: function () {
          return ee;
        },
        D5: function () {
          return be;
        },
        Dx: function () {
          return ue;
        },
        EF: function () {
          return T;
        },
        FM: function () {
          return Pe;
        },
        Fc: function () {
          return Fe;
        },
        G1: function () {
          return I;
        },
        IO: function () {
          return O;
        },
        JV: function () {
          return W;
        },
        Jy: function () {
          return te;
        },
        K8: function () {
          return Se;
        },
        Kk: function () {
          return he;
        },
        Kr: function () {
          return le;
        },
        Mj: function () {
          return Re;
        },
        Mu: function () {
          return Ke;
        },
        Ng: function () {
          return je;
        },
        Nt: function () {
          return qe;
        },
        P7: function () {
          return xe;
        },
        P8: function () {
          return Ve;
        },
        P9: function () {
          return ye;
        },
        Pv: function () {
          return X;
        },
        Q_: function () {
          return Ue;
        },
        Qs: function () {
          return G;
        },
        S8: function () {
          return Le;
        },
        SX: function () {
          return J;
        },
        To: function () {
          return A;
        },
        Ts: function () {
          return ke;
        },
        UP: function () {
          return Z;
        },
        Uo: function () {
          return P;
        },
        WC: function () {
          return L;
        },
        WR: function () {
          return V;
        },
        aP: function () {
          return ge;
        },
        an: function () {
          return Ee;
        },
        cH: function () {
          return ie;
        },
        dB: function () {
          return oe;
        },
        ei: function () {
          return me;
        },
        em: function () {
          return Ae;
        },
        f3: function () {
          return se;
        },
        gU: function () {
          return C;
        },
        gc: function () {
          return ne;
        },
        hf: function () {
          return re;
        },
        ho: function () {
          return ze;
        },
        j4: function () {
          return Te;
        },
        jQ: function () {
          return ce;
        },
        k: function () {
          return Y;
        },
        kf: function () {
          return ve;
        },
        kl: function () {
          return we;
        },
        ky: function () {
          return z;
        },
        l6: function () {
          return K;
        },
        lF: function () {
          return He;
        },
        mF: function () {
          return Ne;
        },
        mZ: function () {
          return Me;
        },
        nH: function () {
          return Ze;
        },
        nS: function () {
          return U;
        },
        oN: function () {
          return ae;
        },
        oU: function () {
          return Ce;
        },
        oX: function () {
          return x;
        },
        oi: function () {
          return fe;
        },
        pI: function () {
          return Ge;
        },
        pj: function () {
          return B;
        },
        q6: function () {
          return pe;
        },
        qL: function () {
          return Je;
        },
        rB: function () {
          return Ie;
        },
        rt: function () {
          return D;
        },
        te: function () {
          return Qe;
        },
        tz: function () {
          return Oe;
        },
        u6: function () {
          return De;
        },
        vI: function () {
          return de;
        },
        vg: function () {
          return Q;
        },
        ws: function () {
          return E;
        },
        xg: function () {
          return We;
        },
        y_: function () {
          return Xe;
        },
        yu: function () {
          return $;
        },
        zD: function () {
          return R;
        },
        zJ: function () {
          return Ye;
        },
        zh: function () {
          return _e;
        },
      });
      var o,
        t,
        l,
        r = n(97857),
        u = n.n(r),
        c = n(9783),
        i = n.n(c),
        g = n(32739),
        s = n(92823),
        d = n(1079),
        _ = n(96330),
        m = n(54707),
        y = n(71250),
        b = n(11700),
        v = n.n(b),
        f = n(57498),
        h = n(96749),
        p = n(77325),
        k = n(87756),
        w = n(84031),
        S = n(13318),
        C = (function (e) {
          return (e.Conversational = 'conversational'), (e.Task = 'task'), e;
        })({}),
        N = (function (e) {
          return (e.Text = 'text'), (e.News = 'news'), e;
        })({}),
        x = (function (e) {
          return (e.User = 'user'), (e.Assistant = 'assistant'), e;
        })({}),
        B = 'begin',
        T = (function (e) {
          return (
            (e.Begin = 'Begin'),
            (e.Retrieval = 'Retrieval'),
            (e.Generate = 'Generate'),
            (e.Answer = 'Answer'),
            (e.Categorize = 'Categorize'),
            (e.Message = 'Message'),
            (e.Relevant = 'Relevant'),
            (e.RewriteQuestion = 'RewriteQuestion'),
            (e.KeywordExtract = 'KeywordExtract'),
            (e.Baidu = 'Baidu'),
            (e.DuckDuckGo = 'DuckDuckGo'),
            (e.Wikipedia = 'Wikipedia'),
            (e.PubMed = 'PubMed'),
            (e.ArXiv = 'ArXiv'),
            (e.Google = 'Google'),
            (e.Bing = 'Bing'),
            (e.GoogleScholar = 'GoogleScholar'),
            (e.DeepL = 'DeepL'),
            (e.GitHub = 'GitHub'),
            (e.BaiduFanyi = 'BaiduFanyi'),
            (e.QWeather = 'QWeather'),
            (e.ExeSQL = 'ExeSQL'),
            (e.Switch = 'Switch'),
            (e.WenCai = 'WenCai'),
            (e.AkShare = 'AkShare'),
            (e.YahooFinance = 'YahooFinance'),
            (e.Jin10 = 'Jin10'),
            (e.Concentrator = 'Concentrator'),
            (e.TuShare = 'TuShare'),
            (e.Note = 'Note'),
            (e.Crawler = 'Crawler'),
            (e.Invoke = 'Invoke'),
            (e.Template = 'Template'),
            (e.Email = 'Email'),
            (e.Iteration = 'Iteration'),
            (e.IterationStart = 'IterationItem'),
            (e.Code = 'Code'),
            (e.WaitingDialogue = 'WaitingDialogue'),
            (e.Agent = 'Agent'),
            (e.Tool = 'Tool'),
            (e.TavilySearch = 'TavilySearch'),
            e
          );
        })({}),
        R = ['and', 'or'],
        A =
          (Object.values(T).filter(function (e) {
            return e !== T.Note;
          }),
          [
            T.Retrieval,
            T.Generate,
            T.Answer,
            T.Categorize,
            T.Message,
            T.RewriteQuestion,
            T.KeywordExtract,
            T.Switch,
            T.Concentrator,
            T.Template,
            T.Iteration,
            T.WaitingDialogue,
            T.Note,
            T.Agent,
          ]),
        P =
          ((o = {}),
          i()(
            i()(
              i()(
                i()(
                  i()(
                    i()(
                      i()(
                        i()(
                          i()(
                            i()(o, T.Retrieval, {
                              backgroundColor: '#cad6e0',
                              color: '#385974',
                            }),
                            T.Generate,
                            {
                              backgroundColor: '#ebd6d6',
                              width: 150,
                              height: 150,
                              fontSize: 20,
                              iconFontSize: 30,
                              color: '#996464',
                            },
                          ),
                          T.Answer,
                          { backgroundColor: '#f4816d', color: '#f4816d' },
                        ),
                        T.Begin,
                        { backgroundColor: '#4f51d6' },
                      ),
                      T.Categorize,
                      { backgroundColor: '#ffebcd', color: '#cc8a26' },
                    ),
                    T.Message,
                    { backgroundColor: '#c5ddc7', color: 'green' },
                  ),
                  T.Relevant,
                  {
                    backgroundColor: '#9fd94d',
                    color: '#8ef005',
                    width: 70,
                    height: 70,
                    fontSize: 12,
                    iconFontSize: 16,
                  },
                ),
                T.RewriteQuestion,
                {
                  backgroundColor: '#f8c7f8',
                  color: '#f32bf3',
                  width: 70,
                  height: 70,
                  fontSize: 12,
                  iconFontSize: 16,
                },
              ),
              T.KeywordExtract,
              {
                width: 70,
                height: 70,
                backgroundColor: '#6E5494',
                color: '#6E5494',
                fontSize: 12,
                iconWidth: 16,
              },
            ),
            T.DuckDuckGo,
            { backgroundColor: '#e7e389', color: '#aea00c' },
          ),
          i()(
            i()(
              i()(
                i()(
                  i()(
                    i()(
                      i()(
                        i()(
                          i()(
                            i()(o, T.Baidu, { backgroundColor: '#d9e0f8' }),
                            T.Wikipedia,
                            { backgroundColor: '#dee0e2' },
                          ),
                          T.PubMed,
                          { backgroundColor: '#a2ccf0' },
                        ),
                        T.ArXiv,
                        {
                          width: 70,
                          height: 70,
                          fontSize: 12,
                          iconWidth: 16,
                          iconFontSize: 16,
                          moreIconColor: 'white',
                          backgroundColor: '#b31b1b',
                          color: 'white',
                        },
                      ),
                      T.Google,
                      { backgroundColor: 'pink' },
                    ),
                    T.Bing,
                    { backgroundColor: '#c0dcc4' },
                  ),
                  T.GoogleScholar,
                  { backgroundColor: '#b4e4f6' },
                ),
                T.DeepL,
                { backgroundColor: '#f5e8e6' },
              ),
              T.GitHub,
              { backgroundColor: 'purple', color: 'purple' },
            ),
            T.BaiduFanyi,
            { backgroundColor: '#e5f2d3' },
          ),
          i()(
            i()(
              i()(
                i()(
                  i()(
                    i()(
                      i()(
                        i()(
                          i()(
                            i()(o, T.QWeather, {
                              backgroundColor: '#a4bbf3',
                              color: '#a4bbf3',
                            }),
                            T.ExeSQL,
                            { backgroundColor: '#b9efe8' },
                          ),
                          T.Switch,
                          { backgroundColor: '#dbaff6', color: '#dbaff6' },
                        ),
                        T.WenCai,
                        { backgroundColor: '#faac5b' },
                      ),
                      T.AkShare,
                      { backgroundColor: '#8085f5' },
                    ),
                    T.YahooFinance,
                    { backgroundColor: '#b474ff' },
                  ),
                  T.Jin10,
                  { backgroundColor: '#a0b9f8' },
                ),
                T.Concentrator,
                {
                  backgroundColor: '#32d2a3',
                  color: '#32d2a3',
                  width: 70,
                  height: 70,
                  fontSize: 10,
                  iconFontSize: 16,
                },
              ),
              T.TuShare,
              { backgroundColor: '#f8cfa0' },
            ),
            T.Note,
            { backgroundColor: '#f8cfa0' },
          ),
          i()(
            i()(
              i()(
                i()(
                  i()(
                    i()(
                      i()(
                        i()(
                          i()(
                            i()(o, T.Crawler, { backgroundColor: '#dee0e2' }),
                            T.Invoke,
                            { backgroundColor: '#dee0e2' },
                          ),
                          T.Template,
                          { backgroundColor: '#dee0e2' },
                        ),
                        T.Email,
                        { backgroundColor: '#e6f7ff' },
                      ),
                      T.Iteration,
                      { backgroundColor: '#e6f7ff' },
                    ),
                    T.IterationStart,
                    { backgroundColor: '#e6f7ff' },
                  ),
                  T.Code,
                  { backgroundColor: '#4c5458' },
                ),
                T.WaitingDialogue,
                { backgroundColor: '#a5d65c' },
              ),
              T.Agent,
              { backgroundColor: '#a5d65c' },
            ),
            T.TavilySearch,
            { backgroundColor: '#a5d65c' },
          )),
        I = [
          { name: T.Retrieval },
          { name: T.Generate },
          { name: T.Answer },
          { name: T.Categorize },
          { name: T.Message },
          { name: T.RewriteQuestion },
          { name: T.KeywordExtract },
          { name: T.Switch },
          { name: T.Concentrator },
          { name: T.Template },
          { name: T.Iteration },
          { name: T.Code },
          { name: T.WaitingDialogue },
          { name: T.Agent },
          { name: T.Note },
          { name: T.DuckDuckGo },
          { name: T.Baidu },
          { name: T.Wikipedia },
          { name: T.PubMed },
          { name: T.ArXiv },
          { name: T.Google },
          { name: T.Bing },
          { name: T.GoogleScholar },
          { name: T.DeepL },
          { name: T.GitHub },
          { name: T.BaiduFanyi },
          { name: T.QWeather },
          { name: T.ExeSQL },
          { name: T.WenCai },
          { name: T.AkShare },
          { name: T.YahooFinance },
          { name: T.Jin10 },
          { name: T.TuShare },
          { name: T.Crawler },
          { name: T.Invoke },
          { name: T.Email },
        ],
        D = [
          { value: '=', label: 'equal', icon: 'equal' },
          { value: '≠', label: 'notEqual', icon: 'not-equals' },
          { value: '>', label: 'gt', icon: 'Less' },
          { value: '≥', label: 'ge', icon: 'Greater-or-equal' },
          { value: '<', label: 'lt', icon: 'Less' },
          { value: '≤', label: 'le', icon: 'less-or-equal' },
          { value: 'contains', label: 'contains', icon: 'Contains' },
          { value: 'not contains', label: 'notContains', icon: 'not-contains' },
          { value: 'start with', label: 'startWith', icon: 'list-start' },
          { value: 'end with', label: 'endWith', icon: 'list-end' },
          { value: 'empty', label: 'empty', icon: 'circle' },
          { value: 'not empty', label: 'notEmpty', icon: 'circle-slash-2' },
        ],
        z = 'end_cpn_ids',
        j = { query: [] },
        G = u()(
          u()(
            u()(
              {
                query: s.Xd.SysQuery,
                top_n: 8,
                top_k: 1024,
                kb_ids: [],
                rerank_id: '',
                empty_response: '',
              },
              g.oD,
            ),
            g.Gs,
          ),
          {},
          { outputs: { formalized_content: { type: 'string', value: '' } } },
        ),
        E = {
          mode: C.Conversational,
          prologue: "Hi! I'm your assistant, what can I do for you?",
        },
        M = Object.keys(d.vv).reduce(function (e, a) {
          return (e[a] = (0, y.mV)(a)), e;
        }, {}),
        F = u()(
          u()({}, M),
          {},
          {
            temperature: 0.1,
            top_p: 0.3,
            frequency_penalty: 0.7,
            presence_penalty: 0.4,
            max_tokens: 256,
          },
        ),
        L = u()(
          u()({}, F),
          {},
          {
            prompt: m.Z.t('flow.promptText'),
            cite: !0,
            message_history_window_size: 12,
            parameters: [],
          },
        ),
        K = u()(
          u()({}, F),
          {},
          { language: '', message_history_window_size: 6 },
        ),
        H = u()({}, F),
        W = u()(
          u()({}, F),
          {},
          {
            parameter: _.oQ.Precise,
            message_history_window_size: 1,
            category_description: {},
          },
          j,
        ),
        U = { messages: [] },
        Z = u()(u()({}, F), {}, { top_n: 3 }, j),
        q = u()({ top_n: 10, channel: N.Text }, j),
        Q = u()({ top_n: 10 }, j),
        V = u()({ top_n: 10, language: 'en' }, j),
        O = u()({ top_n: 10, email: '' }, j),
        J = u()({ top_n: 10, sort_by: 'relevance' }, j),
        Y = u()(
          {
            top_n: 10,
            api_key:
              'YOUR_API_KEY (obtained from https://serpapi.com/manage-api-key)',
            country: 'cn',
            language: 'en',
          },
          j,
        ),
        X = u()(
          {
            top_n: 10,
            channel: 'Webpages',
            api_key:
              'YOUR_API_KEY (obtained from https://www.microsoft.com/en-us/bing/apis/bing-web-search-api)',
            country: 'CH',
            language: 'en',
          },
          j,
        ),
        $ = u()({ top_n: 5, sort_by: 'relevance', patents: !0 }, j),
        ee = { top_n: 5, auth_key: 'relevance' },
        ae = u()({ top_n: 5 }, j),
        ne = u()(
          { appid: 'xxx', secret_key: 'xxx', trans_type: 'translate' },
          j,
        ),
        oe = u()(
          {
            web_apikey: 'xxx',
            type: 'weather',
            user_type: 'free',
            time_period: 'now',
          },
          j,
        ),
        te = u()(
          u()({}, F),
          {},
          {
            db_type: 'mysql',
            database: '',
            username: '',
            host: '',
            port: 3306,
            password: '',
            loop: 3,
            top_n: 30,
          },
          j,
        ),
        le = i()(
          {
            conditions: [
              {
                logical_operator: R[0],
                items: [{ operator: D[0].value }],
                to: [],
              },
            ],
          },
          z,
          [],
        ),
        re = u()({ top_n: 20, query_type: 'stock' }, j),
        ue = u()({ top_n: 10 }, j),
        ce = u()(
          {
            info: !0,
            history: !1,
            financials: !1,
            balance_sheet: !1,
            cash_flow_statement: !1,
            news: !0,
          },
          j,
        ),
        ie = u()(
          {
            type: 'flash',
            secret_key: 'xxx',
            flash_type: '1',
            contain: '',
            filter: '',
          },
          j,
        ),
        ge = {},
        se = u()(
          { token: 'xxx', src: 'eastmoney', start_date: '2024-01-01 09:00:00' },
          j,
        ),
        de = { text: '' },
        _e = u()({ extract_type: 'markdown' }, j),
        me = {
          url: 'http://',
          method: 'GET',
          timeout: 60,
          headers:
            '{\n  "Accept": "*/*",\n  "Cache-Control": "no-cache",\n  "Connection": "keep-alive"\n}',
          proxy: 'http://',
          clean_html: !1,
        },
        ye = { content: '', parameters: [] },
        be = {
          smtp_server: '',
          smtp_port: 587,
          email: '',
          password: '',
          sender_name: '',
          to_email: '',
          cc_email: '',
          subject: '',
          content: '',
        },
        ve = { items_ref: '' },
        fe = {
          lang: 'python',
          script: s.mm[s.Xn.Python],
          arguments: [{ name: 'arg1' }, { name: 'arg2' }],
        },
        he = {},
        pe = u()(
          u()({}, F),
          {},
          {
            description: '',
            sys_prompt: '',
            prompts: [
              { role: x.User, content: '{'.concat(s.Xd.SysQuery, '}') },
            ],
            message_history_window_size: 12,
            tools: [],
            outputs: {
              structured_output: {},
              content: { type: 'string', value: '' },
            },
          },
        ),
        ke = (function (e) {
          return (e.Basic = 'basic'), (e.Advanced = 'advanced'), e;
        })({}),
        we = (function (e) {
          return (e.News = 'news'), (e.General = 'general'), e;
        })({}),
        Se = {
          api_key: '',
          query: s.Xd.SysQuery,
          search_depth: ke.Basic,
          topic: we.General,
          max_results: 5,
          days: 7,
          include_answer: !1,
          include_raw_content: !0,
          include_images: !1,
          include_image_descriptions: !1,
          include_domains: [],
          exclude_domains: [],
          outputs: {
            formalized_content: { value: '', type: 'string' },
            json: { value: {}, type: 'Object' },
          },
        },
        Ce =
          ((t = {}),
          i()(
            i()(
              i()(
                i()(
                  i()(
                    i()(
                      i()(
                        i()(
                          i()(i()(t, T.Begin, [T.Relevant]), T.Categorize, [
                            T.Begin,
                            T.Categorize,
                            T.Answer,
                            T.Relevant,
                          ]),
                          T.Answer,
                          [T.Begin, T.Answer, T.Message, T.Relevant],
                        ),
                        T.Retrieval,
                        [T.Begin, T.Retrieval],
                      ),
                      T.Generate,
                      [T.Begin, T.Relevant],
                    ),
                    T.Message,
                    [
                      T.Begin,
                      T.Message,
                      T.Generate,
                      T.Retrieval,
                      T.RewriteQuestion,
                      T.Categorize,
                      T.Relevant,
                    ],
                  ),
                  T.Relevant,
                  [T.Begin, T.Answer, T.Relevant],
                ),
                T.RewriteQuestion,
                [T.Begin, T.Message, T.RewriteQuestion, T.Relevant],
              ),
              T.KeywordExtract,
              [T.Begin, T.Message, T.Relevant],
            ),
            T.Baidu,
            [T.Begin, T.Retrieval],
          ),
          i()(
            i()(
              i()(
                i()(
                  i()(
                    i()(
                      i()(
                        i()(
                          i()(
                            i()(t, T.DuckDuckGo, [T.Begin, T.Retrieval]),
                            T.Wikipedia,
                            [T.Begin, T.Retrieval],
                          ),
                          T.PubMed,
                          [T.Begin, T.Retrieval],
                        ),
                        T.ArXiv,
                        [T.Begin, T.Retrieval],
                      ),
                      T.Google,
                      [T.Begin, T.Retrieval],
                    ),
                    T.Bing,
                    [T.Begin, T.Retrieval],
                  ),
                  T.GoogleScholar,
                  [T.Begin, T.Retrieval],
                ),
                T.DeepL,
                [T.Begin, T.Retrieval],
              ),
              T.GitHub,
              [T.Begin, T.Retrieval],
            ),
            T.BaiduFanyi,
            [T.Begin, T.Retrieval],
          ),
          i()(
            i()(
              i()(
                i()(
                  i()(
                    i()(
                      i()(
                        i()(
                          i()(
                            i()(t, T.QWeather, [T.Begin, T.Retrieval]),
                            T.ExeSQL,
                            [T.Begin],
                          ),
                          T.Switch,
                          [T.Begin],
                        ),
                        T.WenCai,
                        [T.Begin],
                      ),
                      T.AkShare,
                      [T.Begin],
                    ),
                    T.YahooFinance,
                    [T.Begin],
                  ),
                  T.Jin10,
                  [T.Begin],
                ),
                T.Concentrator,
                [T.Begin],
              ),
              T.TuShare,
              [T.Begin],
            ),
            T.Crawler,
            [T.Begin],
          ),
          i()(
            i()(
              i()(
                i()(
                  i()(
                    i()(
                      i()(
                        i()(
                          i()(i()(t, T.Note, []), T.Invoke, [T.Begin]),
                          T.Template,
                          [T.Begin, T.Relevant],
                        ),
                        T.Email,
                        [T.Begin],
                      ),
                      T.Iteration,
                      [T.Begin],
                    ),
                    T.IterationStart,
                    [T.Begin],
                  ),
                  T.Code,
                  [T.Begin],
                ),
                T.WaitingDialogue,
                [T.Begin],
              ),
              T.Agent,
              [T.Begin],
            ),
            T.TavilySearch,
            [T.Begin],
          )),
        Ne =
          ((l = {}),
          i()(
            i()(
              i()(
                i()(
                  i()(
                    i()(
                      i()(
                        i()(
                          i()(
                            i()(l, T.Begin, 'beginNode'),
                            T.Categorize,
                            'categorizeNode',
                          ),
                          T.Retrieval,
                          'retrievalNode',
                        ),
                        T.Generate,
                        'generateNode',
                      ),
                      T.Answer,
                      'logicNode',
                    ),
                    T.Message,
                    'messageNode',
                  ),
                  T.Relevant,
                  'relevantNode',
                ),
                T.RewriteQuestion,
                'rewriteNode',
              ),
              T.KeywordExtract,
              'keywordNode',
            ),
            T.DuckDuckGo,
            'ragNode',
          ),
          i()(
            i()(
              i()(
                i()(
                  i()(
                    i()(
                      i()(
                        i()(
                          i()(
                            i()(l, T.Baidu, 'ragNode'),
                            T.Wikipedia,
                            'ragNode',
                          ),
                          T.PubMed,
                          'ragNode',
                        ),
                        T.ArXiv,
                        'ragNode',
                      ),
                      T.Google,
                      'ragNode',
                    ),
                    T.Bing,
                    'ragNode',
                  ),
                  T.GoogleScholar,
                  'ragNode',
                ),
                T.DeepL,
                'ragNode',
              ),
              T.GitHub,
              'ragNode',
            ),
            T.BaiduFanyi,
            'ragNode',
          ),
          i()(
            i()(
              i()(
                i()(
                  i()(
                    i()(
                      i()(
                        i()(
                          i()(
                            i()(l, T.QWeather, 'ragNode'),
                            T.ExeSQL,
                            'ragNode',
                          ),
                          T.Switch,
                          'switchNode',
                        ),
                        T.Concentrator,
                        'logicNode',
                      ),
                      T.WenCai,
                      'ragNode',
                    ),
                    T.AkShare,
                    'ragNode',
                  ),
                  T.YahooFinance,
                  'ragNode',
                ),
                T.Jin10,
                'ragNode',
              ),
              T.TuShare,
              'ragNode',
            ),
            T.Note,
            'noteNode',
          ),
          i()(
            i()(
              i()(
                i()(
                  i()(
                    i()(
                      i()(
                        i()(
                          i()(
                            i()(l, T.Crawler, 'ragNode'),
                            T.Invoke,
                            'invokeNode',
                          ),
                          T.Template,
                          'templateNode',
                        ),
                        T.Email,
                        'emailNode',
                      ),
                      T.Iteration,
                      'group',
                    ),
                    T.IterationStart,
                    'iterationStartNode',
                  ),
                  T.Code,
                  'ragNode',
                ),
                T.WaitingDialogue,
                'ragNode',
              ),
              T.Agent,
              'agentNode',
            ),
            T.Tool,
            'toolNode',
          ),
          i()(l, T.TavilySearch, 'ragNode')),
        xe = [
          { value: 'af', label: 'Afrikaans' },
          { value: 'pl', label: 'Polski' },
          { value: 'ar', label: 'العربية' },
          { value: 'ast', label: 'Asturianu' },
          { value: 'az', label: 'Azərbaycanca' },
          { value: 'bg', label: 'Български' },
          { value: 'nan', label: '閩南語 / Bân-lâm-gú' },
          { value: 'bn', label: 'বাংলা' },
          { value: 'be', label: 'Беларуская' },
          { value: 'ca', label: 'Català' },
          { value: 'cs', label: 'Čeština' },
          { value: 'cy', label: 'Cymraeg' },
          { value: 'da', label: 'Dansk' },
          { value: 'de', label: 'Deutsch' },
          { value: 'et', label: 'Eesti' },
          { value: 'el', label: 'Ελληνικά' },
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Español' },
          { value: 'eo', label: 'Esperanto' },
          { value: 'eu', label: 'Euskara' },
          { value: 'fa', label: 'فارسی' },
          { value: 'fr', label: 'Français' },
          { value: 'gl', label: 'Galego' },
          { value: 'ko', label: '한국어' },
          { value: 'hy', label: 'Հայերեն' },
          { value: 'hi', label: 'हिन्दी' },
          { value: 'hr', label: 'Hrvatski' },
          { value: 'id', label: 'Bahasa Indonesia' },
          { value: 'it', label: 'Italiano' },
          { value: 'he', label: 'עברית' },
          { value: 'ka', label: 'ქართული' },
          { value: 'lld', label: 'Ladin' },
          { value: 'la', label: 'Latina' },
          { value: 'lv', label: 'Latviešu' },
          { value: 'lt', label: 'Lietuvių' },
          { value: 'hu', label: 'Magyar' },
          { value: 'mk', label: 'Македонски' },
          { value: 'arz', label: 'مصرى' },
          { value: 'ms', label: 'Bahasa Melayu' },
          { value: 'min', label: 'Bahaso Minangkabau' },
          { value: 'my', label: 'မြန်မာဘာသာ' },
          { value: 'nl', label: 'Nederlands' },
          { value: 'ja', label: '日本語' },
          { value: 'no', label: 'Norsk (bokmål)' },
          { value: 'nn', label: 'Norsk (nynorsk)' },
          { value: 'ce', label: 'Нохчийн' },
          { value: 'uz', label: 'Oʻzbekcha / Ўзбекча' },
          { value: 'pt', label: 'Português' },
          { value: 'kk', label: 'Қазақша / Qazaqşa / قازاقشا' },
          { value: 'ro', label: 'Română' },
          { value: 'ru', label: 'Русский' },
          { value: 'ceb', label: 'Sinugboanong Binisaya' },
          { value: 'sk', label: 'Slovenčina' },
          { value: 'sl', label: 'Slovenščina' },
          { value: 'sr', label: 'Српски / Srpski' },
          { value: 'sh', label: 'Srpskohrvatski / Српскохрватски' },
          { value: 'fi', label: 'Suomi' },
          { value: 'sv', label: 'Svenska' },
          { value: 'ta', label: 'தமிழ்' },
          { value: 'tt', label: 'Татарча / Tatarça' },
          { value: 'th', label: 'ภาษาไทย' },
          { value: 'tg', label: 'Тоҷикӣ' },
          { value: 'azb', label: 'تۆرکجه' },
          { value: 'tr', label: 'Türkçe' },
          { value: 'uk', label: 'Українська' },
          { value: 'ur', label: 'اردو' },
          { value: 'vi', label: 'Tiếng Việt' },
          { value: 'war', label: 'Winaray' },
          { value: 'zh', label: '中文' },
          { value: 'yue', label: '粵語' },
        ],
        Be = [
          { language_code: 'af', language_name: 'Afrikaans' },
          { language_code: 'ak', language_name: 'Akan' },
          { language_code: 'sq', language_name: 'Albanian' },
          { language_code: 'ws', language_name: 'Samoa' },
          { language_code: 'am', language_name: 'Amharic' },
          { language_code: 'ar', language_name: 'Arabic' },
          { language_code: 'hy', language_name: 'Armenian' },
          { language_code: 'az', language_name: 'Azerbaijani' },
          { language_code: 'eu', language_name: 'Basque' },
          { language_code: 'be', language_name: 'Belarusian' },
          { language_code: 'bem', language_name: 'Bemba' },
          { language_code: 'bn', language_name: 'Bengali' },
          { language_code: 'bh', language_name: 'Bihari' },
          { language_code: 'xx-bork', language_name: 'Bork, bork, bork!' },
          { language_code: 'bs', language_name: 'Bosnian' },
          { language_code: 'br', language_name: 'Breton' },
          { language_code: 'bg', language_name: 'Bulgarian' },
          { language_code: 'bt', language_name: 'Bhutanese' },
          { language_code: 'km', language_name: 'Cambodian' },
          { language_code: 'ca', language_name: 'Catalan' },
          { language_code: 'chr', language_name: 'Cherokee' },
          { language_code: 'ny', language_name: 'Chichewa' },
          { language_code: 'zh-cn', language_name: 'Chinese (Simplified)' },
          { language_code: 'zh-tw', language_name: 'Chinese (Traditional)' },
          { language_code: 'co', language_name: 'Corsican' },
          { language_code: 'hr', language_name: 'Croatian' },
          { language_code: 'cs', language_name: 'Czech' },
          { language_code: 'da', language_name: 'Danish' },
          { language_code: 'nl', language_name: 'Dutch' },
          { language_code: 'xx-elmer', language_name: 'Elmer Fudd' },
          { language_code: 'en', language_name: 'English' },
          { language_code: 'eo', language_name: 'Esperanto' },
          { language_code: 'et', language_name: 'Estonian' },
          { language_code: 'ee', language_name: 'Ewe' },
          { language_code: 'fo', language_name: 'Faroese' },
          { language_code: 'tl', language_name: 'Filipino' },
          { language_code: 'fi', language_name: 'Finnish' },
          { language_code: 'fr', language_name: 'French' },
          { language_code: 'fy', language_name: 'Frisian' },
          { language_code: 'gaa', language_name: 'Ga' },
          { language_code: 'gl', language_name: 'Galician' },
          { language_code: 'ka', language_name: 'Georgian' },
          { language_code: 'de', language_name: 'German' },
          { language_code: 'el', language_name: 'Greek' },
          { language_code: 'kl', language_name: 'Greenlandic' },
          { language_code: 'gn', language_name: 'Guarani' },
          { language_code: 'gu', language_name: 'Gujarati' },
          { language_code: 'xx-hacker', language_name: 'Hacker' },
          { language_code: 'ht', language_name: 'Haitian Creole' },
          { language_code: 'ha', language_name: 'Hausa' },
          { language_code: 'haw', language_name: 'Hawaiian' },
          { language_code: 'iw', language_name: 'Hebrew' },
          { language_code: 'hi', language_name: 'Hindi' },
          { language_code: 'hu', language_name: 'Hungarian' },
          { language_code: 'is', language_name: 'Icelandic' },
          { language_code: 'ig', language_name: 'Igbo' },
          { language_code: 'id', language_name: 'Indonesian' },
          { language_code: 'ia', language_name: 'Interlingua' },
          { language_code: 'ga', language_name: 'Irish' },
          { language_code: 'it', language_name: 'Italian' },
          { language_code: 'ja', language_name: 'Japanese' },
          { language_code: 'jw', language_name: 'Javanese' },
          { language_code: 'kn', language_name: 'Kannada' },
          { language_code: 'kk', language_name: 'Kazakh' },
          { language_code: 'rw', language_name: 'Kinyarwanda' },
          { language_code: 'rn', language_name: 'Kirundi' },
          { language_code: 'xx-klingon', language_name: 'Klingon' },
          { language_code: 'kg', language_name: 'Kongo' },
          { language_code: 'ko', language_name: 'Korean' },
          { language_code: 'kri', language_name: 'Krio (Sierra Leone)' },
          { language_code: 'ku', language_name: 'Kurdish' },
          { language_code: 'ckb', language_name: 'Kurdish (Soranî)' },
          { language_code: 'ky', language_name: 'Kyrgyz' },
          { language_code: 'lo', language_name: 'Laothian' },
          { language_code: 'la', language_name: 'Latin' },
          { language_code: 'lv', language_name: 'Latvian' },
          { language_code: 'ln', language_name: 'Lingala' },
          { language_code: 'lt', language_name: 'Lithuanian' },
          { language_code: 'loz', language_name: 'Lozi' },
          { language_code: 'lg', language_name: 'Luganda' },
          { language_code: 'ach', language_name: 'Luo' },
          { language_code: 'mk', language_name: 'Macedonian' },
          { language_code: 'mg', language_name: 'Malagasy' },
          { language_code: 'ms', language_name: 'Malay' },
          { language_code: 'ml', language_name: 'Malayalam' },
          { language_code: 'mt', language_name: 'Maltese' },
          { language_code: 'mv', language_name: 'Maldives' },
          { language_code: 'mi', language_name: 'Maori' },
          { language_code: 'mr', language_name: 'Marathi' },
          { language_code: 'mfe', language_name: 'Mauritian Creole' },
          { language_code: 'mo', language_name: 'Moldavian' },
          { language_code: 'mn', language_name: 'Mongolian' },
          { language_code: 'sr-me', language_name: 'Montenegrin' },
          { language_code: 'my', language_name: 'Myanmar' },
          { language_code: 'ne', language_name: 'Nepali' },
          { language_code: 'pcm', language_name: 'Nigerian Pidgin' },
          { language_code: 'nso', language_name: 'Northern Sotho' },
          { language_code: 'no', language_name: 'Norwegian' },
          { language_code: 'nn', language_name: 'Norwegian (Nynorsk)' },
          { language_code: 'oc', language_name: 'Occitan' },
          { language_code: 'or', language_name: 'Oriya' },
          { language_code: 'om', language_name: 'Oromo' },
          { language_code: 'ps', language_name: 'Pashto' },
          { language_code: 'fa', language_name: 'Persian' },
          { language_code: 'xx-pirate', language_name: 'Pirate' },
          { language_code: 'pl', language_name: 'Polish' },
          { language_code: 'pt', language_name: 'Portuguese' },
          { language_code: 'pt-br', language_name: 'Portuguese (Brazil)' },
          { language_code: 'pt-pt', language_name: 'Portuguese (Portugal)' },
          { language_code: 'pa', language_name: 'Punjabi' },
          { language_code: 'qu', language_name: 'Quechua' },
          { language_code: 'ro', language_name: 'Romanian' },
          { language_code: 'rm', language_name: 'Romansh' },
          { language_code: 'nyn', language_name: 'Runyakitara' },
          { language_code: 'ru', language_name: 'Russian' },
          { language_code: 'gd', language_name: 'Scots Gaelic' },
          { language_code: 'sr', language_name: 'Serbian' },
          { language_code: 'sh', language_name: 'Serbo-Croatian' },
          { language_code: 'st', language_name: 'Sesotho' },
          { language_code: 'tn', language_name: 'Setswana' },
          { language_code: 'crs', language_name: 'Seychellois Creole' },
          { language_code: 'sn', language_name: 'Shona' },
          { language_code: 'sd', language_name: 'Sindhi' },
          { language_code: 'si', language_name: 'Sinhalese' },
          { language_code: 'sk', language_name: 'Slovak' },
          { language_code: 'sl', language_name: 'Slovenian' },
          { language_code: 'so', language_name: 'Somali' },
          { language_code: 'es', language_name: 'Spanish' },
          {
            language_code: 'es-419',
            language_name: 'Spanish (Latin American)',
          },
          { language_code: 'su', language_name: 'Sundanese' },
          { language_code: 'sw', language_name: 'Swahili' },
          { language_code: 'sv', language_name: 'Swedish' },
          { language_code: 'tg', language_name: 'Tajik' },
          { language_code: 'ta', language_name: 'Tamil' },
          { language_code: 'tt', language_name: 'Tatar' },
          { language_code: 'te', language_name: 'Telugu' },
          { language_code: 'th', language_name: 'Thai' },
          { language_code: 'ti', language_name: 'Tigrinya' },
          { language_code: 'to', language_name: 'Tonga' },
          { language_code: 'lua', language_name: 'Tshiluba' },
          { language_code: 'tum', language_name: 'Tumbuka' },
          { language_code: 'tr', language_name: 'Turkish' },
          { language_code: 'tk', language_name: 'Turkmen' },
          { language_code: 'tw', language_name: 'Twi' },
          { language_code: 'ug', language_name: 'Uighur' },
          { language_code: 'uk', language_name: 'Ukrainian' },
          { language_code: 'ur', language_name: 'Urdu' },
          { language_code: 'uz', language_name: 'Uzbek' },
          { language_code: 'vu', language_name: 'Vanuatu' },
          { language_code: 'vi', language_name: 'Vietnamese' },
          { language_code: 'cy', language_name: 'Welsh' },
          { language_code: 'wo', language_name: 'Wolof' },
          { language_code: 'xh', language_name: 'Xhosa' },
          { language_code: 'yi', language_name: 'Yiddish' },
          { language_code: 'yo', language_name: 'Yoruba' },
          { language_code: 'zu', language_name: 'Zulu' },
        ].map(function (e) {
          return { label: e.language_name, value: e.language_code };
        }),
        Te = [
          { country_code: 'af', country_name: 'Afghanistan' },
          { country_code: 'al', country_name: 'Albania' },
          { country_code: 'dz', country_name: 'Algeria' },
          { country_code: 'as', country_name: 'American Samoa' },
          { country_code: 'ad', country_name: 'Andorra' },
          { country_code: 'ao', country_name: 'Angola' },
          { country_code: 'ai', country_name: 'Anguilla' },
          { country_code: 'aq', country_name: 'Antarctica' },
          { country_code: 'ag', country_name: 'Antigua and Barbuda' },
          { country_code: 'ar', country_name: 'Argentina' },
          { country_code: 'am', country_name: 'Armenia' },
          { country_code: 'aw', country_name: 'Aruba' },
          { country_code: 'au', country_name: 'Australia' },
          { country_code: 'at', country_name: 'Austria' },
          { country_code: 'az', country_name: 'Azerbaijan' },
          { country_code: 'bs', country_name: 'Bahamas' },
          { country_code: 'bh', country_name: 'Bahrain' },
          { country_code: 'bd', country_name: 'Bangladesh' },
          { country_code: 'bb', country_name: 'Barbados' },
          { country_code: 'by', country_name: 'Belarus' },
          { country_code: 'be', country_name: 'Belgium' },
          { country_code: 'bz', country_name: 'Belize' },
          { country_code: 'bj', country_name: 'Benin' },
          { country_code: 'bm', country_name: 'Bermuda' },
          { country_code: 'bt', country_name: 'Bhutan' },
          { country_code: 'bo', country_name: 'Bolivia' },
          { country_code: 'ba', country_name: 'Bosnia and Herzegovina' },
          { country_code: 'bw', country_name: 'Botswana' },
          { country_code: 'bv', country_name: 'Bouvet Island' },
          { country_code: 'br', country_name: 'Brazil' },
          {
            country_code: 'io',
            country_name: 'British Indian Ocean Territory',
          },
          { country_code: 'bn', country_name: 'Brunei Darussalam' },
          { country_code: 'bg', country_name: 'Bulgaria' },
          { country_code: 'bf', country_name: 'Burkina Faso' },
          { country_code: 'bi', country_name: 'Burundi' },
          { country_code: 'kh', country_name: 'Cambodia' },
          { country_code: 'cm', country_name: 'Cameroon' },
          { country_code: 'ca', country_name: 'Canada' },
          { country_code: 'cv', country_name: 'Cape Verde' },
          { country_code: 'ky', country_name: 'Cayman Islands' },
          { country_code: 'cf', country_name: 'Central African Republic' },
          { country_code: 'td', country_name: 'Chad' },
          { country_code: 'cl', country_name: 'Chile' },
          { country_code: 'cn', country_name: 'China' },
          { country_code: 'cx', country_name: 'Christmas Island' },
          { country_code: 'cc', country_name: 'Cocos (Keeling) Islands' },
          { country_code: 'co', country_name: 'Colombia' },
          { country_code: 'km', country_name: 'Comoros' },
          { country_code: 'cg', country_name: 'Congo' },
          {
            country_code: 'cd',
            country_name: 'Congo, the Democratic Republic of the',
          },
          { country_code: 'ck', country_name: 'Cook Islands' },
          { country_code: 'cr', country_name: 'Costa Rica' },
          { country_code: 'ci', country_name: "Cote D'ivoire" },
          { country_code: 'hr', country_name: 'Croatia' },
          { country_code: 'cu', country_name: 'Cuba' },
          { country_code: 'cy', country_name: 'Cyprus' },
          { country_code: 'cz', country_name: 'Czech Republic' },
          { country_code: 'dk', country_name: 'Denmark' },
          { country_code: 'dj', country_name: 'Djibouti' },
          { country_code: 'dm', country_name: 'Dominica' },
          { country_code: 'do', country_name: 'Dominican Republic' },
          { country_code: 'ec', country_name: 'Ecuador' },
          { country_code: 'eg', country_name: 'Egypt' },
          { country_code: 'sv', country_name: 'El Salvador' },
          { country_code: 'gq', country_name: 'Equatorial Guinea' },
          { country_code: 'er', country_name: 'Eritrea' },
          { country_code: 'ee', country_name: 'Estonia' },
          { country_code: 'et', country_name: 'Ethiopia' },
          { country_code: 'fk', country_name: 'Falkland Islands (Malvinas)' },
          { country_code: 'fo', country_name: 'Faroe Islands' },
          { country_code: 'fj', country_name: 'Fiji' },
          { country_code: 'fi', country_name: 'Finland' },
          { country_code: 'fr', country_name: 'France' },
          { country_code: 'gf', country_name: 'French Guiana' },
          { country_code: 'pf', country_name: 'French Polynesia' },
          { country_code: 'tf', country_name: 'French Southern Territories' },
          { country_code: 'ga', country_name: 'Gabon' },
          { country_code: 'gm', country_name: 'Gambia' },
          { country_code: 'ge', country_name: 'Georgia' },
          { country_code: 'de', country_name: 'Germany' },
          { country_code: 'gh', country_name: 'Ghana' },
          { country_code: 'gi', country_name: 'Gibraltar' },
          { country_code: 'gr', country_name: 'Greece' },
          { country_code: 'gl', country_name: 'Greenland' },
          { country_code: 'gd', country_name: 'Grenada' },
          { country_code: 'gp', country_name: 'Guadeloupe' },
          { country_code: 'gu', country_name: 'Guam' },
          { country_code: 'gt', country_name: 'Guatemala' },
          { country_code: 'gn', country_name: 'Guinea' },
          { country_code: 'gw', country_name: 'Guinea-Bissau' },
          { country_code: 'gy', country_name: 'Guyana' },
          { country_code: 'ht', country_name: 'Haiti' },
          {
            country_code: 'hm',
            country_name: 'Heard Island and Mcdonald Islands',
          },
          { country_code: 'va', country_name: 'Holy See (Vatican City State)' },
          { country_code: 'hn', country_name: 'Honduras' },
          { country_code: 'hk', country_name: 'Hong Kong' },
          { country_code: 'hu', country_name: 'Hungary' },
          { country_code: 'is', country_name: 'Iceland' },
          { country_code: 'in', country_name: 'India' },
          { country_code: 'id', country_name: 'Indonesia' },
          { country_code: 'ir', country_name: 'Iran, Islamic Republic of' },
          { country_code: 'iq', country_name: 'Iraq' },
          { country_code: 'ie', country_name: 'Ireland' },
          { country_code: 'il', country_name: 'Israel' },
          { country_code: 'it', country_name: 'Italy' },
          { country_code: 'jm', country_name: 'Jamaica' },
          { country_code: 'jp', country_name: 'Japan' },
          { country_code: 'jo', country_name: 'Jordan' },
          { country_code: 'kz', country_name: 'Kazakhstan' },
          { country_code: 'ke', country_name: 'Kenya' },
          { country_code: 'ki', country_name: 'Kiribati' },
          {
            country_code: 'kp',
            country_name: "Korea, Democratic People's Republic of",
          },
          { country_code: 'kr', country_name: 'Korea, Republic of' },
          { country_code: 'kw', country_name: 'Kuwait' },
          { country_code: 'kg', country_name: 'Kyrgyzstan' },
          {
            country_code: 'la',
            country_name: "Lao People's Democratic Republic",
          },
          { country_code: 'lv', country_name: 'Latvia' },
          { country_code: 'lb', country_name: 'Lebanon' },
          { country_code: 'ls', country_name: 'Lesotho' },
          { country_code: 'lr', country_name: 'Liberia' },
          { country_code: 'ly', country_name: 'Libyan Arab Jamahiriya' },
          { country_code: 'li', country_name: 'Liechtenstein' },
          { country_code: 'lt', country_name: 'Lithuania' },
          { country_code: 'lu', country_name: 'Luxembourg' },
          { country_code: 'mo', country_name: 'Macao' },
          {
            country_code: 'mk',
            country_name: 'Macedonia, the Former Yugosalv Republic of',
          },
          { country_code: 'mg', country_name: 'Madagascar' },
          { country_code: 'mw', country_name: 'Malawi' },
          { country_code: 'my', country_name: 'Malaysia' },
          { country_code: 'mv', country_name: 'Maldives' },
          { country_code: 'ml', country_name: 'Mali' },
          { country_code: 'mt', country_name: 'Malta' },
          { country_code: 'mh', country_name: 'Marshall Islands' },
          { country_code: 'mq', country_name: 'Martinique' },
          { country_code: 'mr', country_name: 'Mauritania' },
          { country_code: 'mu', country_name: 'Mauritius' },
          { country_code: 'yt', country_name: 'Mayotte' },
          { country_code: 'mx', country_name: 'Mexico' },
          {
            country_code: 'fm',
            country_name: 'Micronesia, Federated States of',
          },
          { country_code: 'md', country_name: 'Moldova, Republic of' },
          { country_code: 'mc', country_name: 'Monaco' },
          { country_code: 'mn', country_name: 'Mongolia' },
          { country_code: 'ms', country_name: 'Montserrat' },
          { country_code: 'ma', country_name: 'Morocco' },
          { country_code: 'mz', country_name: 'Mozambique' },
          { country_code: 'mm', country_name: 'Myanmar' },
          { country_code: 'na', country_name: 'Namibia' },
          { country_code: 'nr', country_name: 'Nauru' },
          { country_code: 'np', country_name: 'Nepal' },
          { country_code: 'nl', country_name: 'Netherlands' },
          { country_code: 'an', country_name: 'Netherlands Antilles' },
          { country_code: 'nc', country_name: 'New Caledonia' },
          { country_code: 'nz', country_name: 'New Zealand' },
          { country_code: 'ni', country_name: 'Nicaragua' },
          { country_code: 'ne', country_name: 'Niger' },
          { country_code: 'ng', country_name: 'Nigeria' },
          { country_code: 'nu', country_name: 'Niue' },
          { country_code: 'nf', country_name: 'Norfolk Island' },
          { country_code: 'mp', country_name: 'Northern Mariana Islands' },
          { country_code: 'no', country_name: 'Norway' },
          { country_code: 'om', country_name: 'Oman' },
          { country_code: 'pk', country_name: 'Pakistan' },
          { country_code: 'pw', country_name: 'Palau' },
          {
            country_code: 'ps',
            country_name: 'Palestinian Territory, Occupied',
          },
          { country_code: 'pa', country_name: 'Panama' },
          { country_code: 'pg', country_name: 'Papua New Guinea' },
          { country_code: 'py', country_name: 'Paraguay' },
          { country_code: 'pe', country_name: 'Peru' },
          { country_code: 'ph', country_name: 'Philippines' },
          { country_code: 'pn', country_name: 'Pitcairn' },
          { country_code: 'pl', country_name: 'Poland' },
          { country_code: 'pt', country_name: 'Portugal' },
          { country_code: 'pr', country_name: 'Puerto Rico' },
          { country_code: 'qa', country_name: 'Qatar' },
          { country_code: 're', country_name: 'Reunion' },
          { country_code: 'ro', country_name: 'Romania' },
          { country_code: 'ru', country_name: 'Russian Federation' },
          { country_code: 'rw', country_name: 'Rwanda' },
          { country_code: 'sh', country_name: 'Saint Helena' },
          { country_code: 'kn', country_name: 'Saint Kitts and Nevis' },
          { country_code: 'lc', country_name: 'Saint Lucia' },
          { country_code: 'pm', country_name: 'Saint Pierre and Miquelon' },
          {
            country_code: 'vc',
            country_name: 'Saint Vincent and the Grenadines',
          },
          { country_code: 'ws', country_name: 'Samoa' },
          { country_code: 'sm', country_name: 'San Marino' },
          { country_code: 'st', country_name: 'Sao Tome and Principe' },
          { country_code: 'sa', country_name: 'Saudi Arabia' },
          { country_code: 'sn', country_name: 'Senegal' },
          { country_code: 'rs', country_name: 'Serbia and Montenegro' },
          { country_code: 'sc', country_name: 'Seychelles' },
          { country_code: 'sl', country_name: 'Sierra Leone' },
          { country_code: 'sg', country_name: 'Singapore' },
          { country_code: 'sk', country_name: 'Slovakia' },
          { country_code: 'si', country_name: 'Slovenia' },
          { country_code: 'sb', country_name: 'Solomon Islands' },
          { country_code: 'so', country_name: 'Somalia' },
          { country_code: 'za', country_name: 'South Africa' },
          {
            country_code: 'gs',
            country_name: 'South Georgia and the South Sandwich Islands',
          },
          { country_code: 'es', country_name: 'Spain' },
          { country_code: 'lk', country_name: 'Sri Lanka' },
          { country_code: 'sd', country_name: 'Sudan' },
          { country_code: 'sr', country_name: 'Suriname' },
          { country_code: 'sj', country_name: 'Svalbard and Jan Mayen' },
          { country_code: 'sz', country_name: 'Swaziland' },
          { country_code: 'se', country_name: 'Sweden' },
          { country_code: 'ch', country_name: 'Switzerland' },
          { country_code: 'sy', country_name: 'Syrian Arab Republic' },
          { country_code: 'tw', country_name: 'Taiwan, Province of China' },
          { country_code: 'tj', country_name: 'Tajikistan' },
          { country_code: 'tz', country_name: 'Tanzania, United Republic of' },
          { country_code: 'th', country_name: 'Thailand' },
          { country_code: 'tl', country_name: 'Timor-Leste' },
          { country_code: 'tg', country_name: 'Togo' },
          { country_code: 'tk', country_name: 'Tokelau' },
          { country_code: 'to', country_name: 'Tonga' },
          { country_code: 'tt', country_name: 'Trinidad and Tobago' },
          { country_code: 'tn', country_name: 'Tunisia' },
          { country_code: 'tr', country_name: 'Turkiye' },
          { country_code: 'tm', country_name: 'Turkmenistan' },
          { country_code: 'tc', country_name: 'Turks and Caicos Islands' },
          { country_code: 'tv', country_name: 'Tuvalu' },
          { country_code: 'ug', country_name: 'Uganda' },
          { country_code: 'ua', country_name: 'Ukraine' },
          { country_code: 'ae', country_name: 'United Arab Emirates' },
          { country_code: 'uk', country_name: 'United Kingdom' },
          { country_code: 'gb', country_name: 'United Kingdom' },
          { country_code: 'us', country_name: 'United States' },
          {
            country_code: 'um',
            country_name: 'United States Minor Outlying Islands',
          },
          { country_code: 'uy', country_name: 'Uruguay' },
          { country_code: 'uz', country_name: 'Uzbekistan' },
          { country_code: 'vu', country_name: 'Vanuatu' },
          { country_code: 've', country_name: 'Venezuela' },
          { country_code: 'vn', country_name: 'Viet Nam' },
          { country_code: 'vg', country_name: 'Virgin Islands, British' },
          { country_code: 'vi', country_name: 'Virgin Islands, U.S.' },
          { country_code: 'wf', country_name: 'Wallis and Futuna' },
          { country_code: 'eh', country_name: 'Western Sahara' },
          { country_code: 'ye', country_name: 'Yemen' },
          { country_code: 'zm', country_name: 'Zambia' },
          { country_code: 'zw', country_name: 'Zimbabwe' },
        ].map(function (e) {
          return { label: e.country_name, value: e.country_code };
        }),
        Re = [
          { label: 'Argentina AR', value: 'AR' },
          { label: 'Australia AU', value: 'AU' },
          { label: 'Austria AT', value: 'AT' },
          { label: 'Belgium BE', value: 'BE' },
          { label: 'Brazil BR', value: 'BR' },
          { label: 'Canada CA', value: 'CA' },
          { label: 'Chile CL', value: 'CL' },
          { label: 'Denmark DK', value: 'DK' },
          { label: 'Finland FI', value: 'FI' },
          { label: 'France FR', value: 'FR' },
          { label: 'Germany DE', value: 'DE' },
          { label: 'Hong Kong SAR HK', value: 'HK' },
          { label: 'India IN', value: 'IN' },
          { label: 'Indonesia ID', value: 'ID' },
          { label: 'Italy IT', value: 'IT' },
          { label: 'Japan JP', value: 'JP' },
          { label: 'Korea KR', value: 'KR' },
          { label: 'Malaysia MY', value: 'MY' },
          { label: 'Mexico MX', value: 'MX' },
          { label: 'Netherlands NL', value: 'NL' },
          { label: 'New Zealand NZ', value: 'NZ' },
          { label: 'Norway NO', value: 'NO' },
          { label: "People's Republic of China CN", value: 'CN' },
          { label: 'Poland PL', value: 'PL' },
          { label: 'Portugal PT', value: 'PT' },
          { label: 'Republic of the Philippines PH', value: 'PH' },
          { label: 'Russia RU', value: 'RU' },
          { label: 'Saudi Arabia SA', value: 'SA' },
          { label: 'South Africa ZA', value: 'ZA' },
          { label: 'Spain ES', value: 'ES' },
          { label: 'Sweden SE', value: 'SE' },
          { label: 'Switzerland CH', value: 'CH' },
          { label: 'Taiwan TW', value: 'TW' },
          { label: 'Türkiye TR', value: 'TR' },
          { label: 'United Kingdom GB', value: 'GB' },
          { label: 'United States US', value: 'US' },
        ],
        Ae = [
          { label: 'Arabic ar', value: 'ar' },
          { label: 'Basque eu', value: 'eu' },
          { label: 'Bengali bn', value: 'bn' },
          { label: 'Bulgarian bg', value: 'bg' },
          { label: 'Catalan ca', value: 'ca' },
          { label: 'Chinese (Simplified) zh-hans', value: 'ns' },
          { label: 'Chinese (Traditional) zh-hant', value: 'nt' },
          { label: 'Croatian hr', value: 'hr' },
          { label: 'Czech cs', value: 'cs' },
          { label: 'Danish da', value: 'da' },
          { label: 'Dutch nl', value: 'nl' },
          { label: 'English en', value: 'en' },
          { label: 'English-United Kingdom en-gb', value: 'gb' },
          { label: 'Estonian et', value: 'et' },
          { label: 'Finnish fi', value: 'fi' },
          { label: 'French fr', value: 'fr' },
          { label: 'Galician gl', value: 'gl' },
          { label: 'German de', value: 'de' },
          { label: 'Gujarati gu', value: 'gu' },
          { label: 'Hebrew he', value: 'he' },
          { label: 'Hindi hi', value: 'hi' },
          { label: 'Hungarian hu', value: 'hu' },
          { label: 'Icelandic is', value: 'is' },
          { label: 'Italian it', value: 'it' },
          { label: 'Japanese jp', value: 'jp' },
          { label: 'Kannada kn', value: 'kn' },
          { label: 'Korean ko', value: 'ko' },
          { label: 'Latvian lv', value: 'lv' },
          { label: 'Lithuanian lt', value: 'lt' },
          { label: 'Malay ms', value: 'ms' },
          { label: 'Malayalam ml', value: 'ml' },
          { label: 'Marathi mr', value: 'mr' },
          { label: 'Norwegian (Bokmål) nb', value: 'nb' },
          { label: 'Polish pl', value: 'pl' },
          { label: 'Portuguese (Brazil) pt-br', value: 'br' },
          { label: 'Portuguese (Portugal) pt-pt', value: 'pt' },
          { label: 'Punjabi pa', value: 'pa' },
          { label: 'Romanian ro', value: 'ro' },
          { label: 'Russian ru', value: 'ru' },
          { label: 'Serbian (Cyrylic) sr', value: 'sr' },
          { label: 'Slovak sk', value: 'sk' },
          { label: 'Slovenian sl', value: 'sl' },
          { label: 'Spanish es', value: 'es' },
          { label: 'Swedish sv', value: 'sv' },
          { label: 'Tamil ta', value: 'ta' },
          { label: 'Telugu te', value: 'te' },
          { label: 'Thai th', value: 'th' },
          { label: 'Turkish tr', value: 'tr' },
          { label: 'Ukrainian uk', value: 'uk' },
          { label: 'Vietnamese vi', value: 'vi' },
        ],
        Pe = [
          { label: 'Arabic [1]', value: 'AR' },
          { label: 'Bulgarian', value: 'BG' },
          { label: 'Czech', value: 'CS' },
          { label: 'Danish', value: 'DA' },
          { label: 'German', value: 'DE' },
          { label: 'Greek', value: 'EL' },
          { label: 'English', value: 'EN' },
          { label: 'Spanish', value: 'ES' },
          { label: 'Estonian', value: 'ET' },
          { label: 'Finnish', value: 'FI' },
          { label: 'French', value: 'FR' },
          { label: 'Hungarian', value: 'HU' },
          { label: 'Indonesian', value: 'ID' },
          { label: 'Italian', value: 'IT' },
          { label: 'Japanese', value: 'JA' },
          { label: 'Korean', value: 'KO' },
          { label: 'Lithuanian', value: 'LT' },
          { label: 'Latvian', value: 'LV' },
          { label: 'Norwegian Bokmål', value: 'NB' },
          { label: 'Dutch', value: 'NL' },
          { label: 'Polish', value: 'PL' },
          { label: 'Portuguese (all Portuguese varieties mixed)', value: 'PT' },
          { label: 'Romanian', value: 'RO' },
          { label: 'Russian', value: 'RU' },
          { label: 'Slovak', value: 'SK' },
          { label: 'Slovenian', value: 'SL' },
          { label: 'Swedish', value: 'SV' },
          { label: 'Turkish', value: 'TR' },
          { label: 'Ukrainian', value: 'UK' },
          { label: 'Chinese', value: 'ZH' },
        ],
        Ie = [
          { label: 'Arabic [1]', value: 'AR' },
          { label: 'Bulgarian', value: 'BG' },
          { label: 'Czech', value: 'CS' },
          { label: 'Danish', value: 'DA' },
          { label: 'German', value: 'DE' },
          { label: 'Greek', value: 'EL' },
          { label: 'English (British)', value: 'EN-GB' },
          { label: 'English (American)', value: 'EN-US' },
          { label: 'Spanish', value: 'ES' },
          { label: 'Estonian', value: 'ET' },
          { label: 'Finnish', value: 'FI' },
          { label: 'French', value: 'FR' },
          { label: 'Hungarian', value: 'HU' },
          { label: 'Indonesian', value: 'ID' },
          { label: 'Italian', value: 'IT' },
          { label: 'Japanese', value: 'JA' },
          { label: 'Korean', value: 'KO' },
          { label: 'Lithuanian', value: 'LT' },
          { label: 'Latvian', value: 'LV' },
          { label: 'Norwegian Bokmål', value: 'NB' },
          { label: 'Dutch', value: 'NL' },
          { label: 'Polish', value: 'PL' },
          { label: 'Portuguese (Brazilian)', value: 'PT-BR' },
          {
            label:
              'Portuguese (all Portuguese varieties excluding Brazilian Portuguese)',
            value: 'PT-PT',
          },
          { label: 'Romanian', value: 'RO' },
          { label: 'Russian', value: 'RU' },
          { label: 'Slovak', value: 'SK' },
          { label: 'Slovenian', value: 'SL' },
          { label: 'Swedish', value: 'SV' },
          { label: 'Turkish', value: 'TR' },
          { label: 'Ukrainian', value: 'UK' },
          { label: 'Chinese (simplified)', value: 'ZH' },
        ],
        De = [
          'it',
          'finance',
          'machinery',
          'senimed',
          'novel',
          'academic',
          'aerospace',
          'wiki',
          'news',
          'law',
          'contract',
        ],
        ze = [
          'auto',
          'zh',
          'en',
          'yue',
          'wyw',
          'jp',
          'kor',
          'fra',
          'spa',
          'th',
          'ara',
          'ru',
          'pt',
          'de',
          'it',
          'el',
          'nl',
          'pl',
          'bul',
          'est',
          'dan',
          'fin',
          'cs',
          'rom',
          'slo',
          'swe',
          'hu',
          'cht',
          'vie',
        ],
        je = [
          'zh',
          'zh-hant',
          'en',
          'de',
          'es',
          'fr',
          'it',
          'ja',
          'ko',
          'ru',
          'hi',
          'th',
          'ar',
          'pt',
          'bn',
          'ms',
          'nl',
          'el',
          'la',
          'sv',
          'id',
          'pl',
          'tr',
          'cs',
          'et',
          'vi',
          'fil',
          'fi',
          'he',
          'is',
          'nb',
        ],
        Ge = ['weather', 'indices', 'airquality'],
        Ee = ['free', 'paid'],
        Me = ['now', '3d', '7d', '10d', '15d', '30d'],
        Fe = ['mysql', 'postgresql', 'mariadb', 'mssql'].map(function (e) {
          return { label: v()(e), value: e };
        }),
        Le = [
          'stock',
          'zhishu',
          'fund',
          'hkstock',
          'usstock',
          'threeboard',
          'conbond',
          'insurance',
          'futures',
          'lccp',
          'foreign_exchange',
        ],
        Ke = ['flash', 'calendar', 'symbols', 'news'],
        He = new Array(5).fill(1).map(function (e, a) {
          return (a + 1).toString();
        }),
        We = ['cj', 'qh', 'hk', 'us'],
        Ue = ['data', 'event', 'holiday'],
        Ze = ['GOODS', 'FOREX', 'FUTURE', 'CRYPTO'],
        qe = ['symbols', 'quotes'],
        Qe = [
          'sina',
          'wallstreetcn',
          '10jqka',
          'eastmoney',
          'yuncaijing',
          'fenghuang',
          'jinrongjie',
        ],
        Ve = ['markdown', 'html', 'content'],
        Oe = (function (e) {
          return (
            (e.Line = 'line'),
            (e.Paragraph = 'paragraph'),
            (e.Options = 'options'),
            (e.File = 'file'),
            (e.Integer = 'integer'),
            (e.Boolean = 'boolean'),
            e
          );
        })({}),
        Je = i()(
          i()(
            i()(
              i()(
                i()(i()({}, Oe.Line, f.Z), Oe.Paragraph, h.Z),
                Oe.Options,
                p.Z,
              ),
              Oe.File,
              k.Z,
            ),
            Oe.Integer,
            w.Z,
          ),
          Oe.Boolean,
          S.Z,
        ),
        Ye = [
          T.Begin,
          T.Answer,
          T.Concentrator,
          T.Template,
          T.Message,
          T.RewriteQuestion,
          T.Switch,
          T.Iteration,
        ],
        Xe = (function (e) {
          return (
            (e.Start = 'start'),
            (e.End = 'end'),
            (e.Tool = 'tool'),
            (e.AgentTop = 'agentTop'),
            (e.AgentBottom = 'agentBottom'),
            e
          );
        })({});
    },
    23454: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return o;
        },
      });
      var o = (function (e) {
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
      o.Home,
        o.Home,
        '@/pages'.concat(o.Home),
        o.Datasets,
        o.Datasets,
        '@/pages'.concat(o.Datasets),
        o.Chats,
        o.Chats,
        '@/pages'.concat(o.Chats),
        o.Chat,
        '@/pages'.concat(o.Chats, '/chat'),
        o.Searches,
        o.Searches,
        '@/pages'.concat(o.Searches),
        o.Search,
        '@/pages'.concat(o.Search),
        o.Agents,
        o.Agents,
        '@/pages'.concat(o.Agents),
        ''.concat(o.Agent, '/:id'),
        '@/pages'.concat(o.Agent),
        o.AgentTemplates,
        '@/pages'.concat(o.Agents).concat(o.AgentTemplates),
        o.Files,
        o.Files,
        '@/pages'.concat(o.Files),
        o.DatasetBase,
        o.DatasetBase,
        o.Dataset,
        o.DatasetBase,
        '@/pages'.concat(o.DatasetBase),
        ''.concat(o.Dataset, '/:id'),
        '@/pages'.concat(o.Dataset),
        ''.concat(o.DatasetBase).concat(o.DatasetSetting, '/:id'),
        '@/pages'.concat(o.DatasetBase).concat(o.DatasetSetting),
        ''.concat(o.DatasetBase).concat(o.DatasetTesting, '/:id'),
        '@/pages'.concat(o.DatasetBase).concat(o.DatasetTesting),
        ''.concat(o.ParsedResult, '/chunks'),
        '@/pages'.concat(
          o.Chunk,
          '/parsed-result/add-knowledge/components/knowledge-chunk',
        ),
        o.Chunk,
        o.Chunk,
        '@/pages'.concat(o.Chunk),
        ''.concat(o.ChunkResult, '/:id'),
        '@/pages'.concat(o.Chunk, '/chunk-result'),
        ''.concat(o.ResultView, '/:id'),
        '@/pages'.concat(o.Chunk, '/result-view'),
        o.Chunk,
        '@/pages'.concat(o.Chunk),
        o.ProfileSetting,
        '@/pages'.concat(o.ProfileSetting),
        o.ProfileSetting,
        ''.concat(o.ProfileSetting, '/profile'),
        ''.concat(o.ProfileSetting, '/profile'),
        '@/pages'.concat(o.ProfileSetting, '/profile'),
        ''.concat(o.ProfileSetting, '/team'),
        '@/pages'.concat(o.ProfileSetting, '/team'),
        ''.concat(o.ProfileSetting, '/plan'),
        '@/pages'.concat(o.ProfileSetting, '/plan'),
        ''.concat(o.ProfileSetting, '/model'),
        '@/pages'.concat(o.ProfileSetting, '/model'),
        ''.concat(o.ProfileSetting, '/prompt'),
        '@/pages'.concat(o.ProfileSetting, '/prompt');
    },
  },
]);
//# sourceMappingURL=5183.d7217184.async.js.map
