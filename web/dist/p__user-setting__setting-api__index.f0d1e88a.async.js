(self.webpackChunk = self.webpackChunk || []).push([
  [3453],
  {
    5600: function (e, n, t) {
      'use strict';
      t.d(n, {
        Xm: function () {
          return v;
        },
        iV: function () {
          return f;
        },
        r6: function () {
          return m;
        },
      });
      var s = t(15009),
        a = t.n(s),
        i = t(99289),
        o = t.n(i),
        r = t(9783),
        c = t.n(r),
        d = t(1079),
        l = t(86968),
        u = t(39259),
        p = t(45360),
        h = t(62435),
        m = function (e, n) {
          var t = (0, u.ef)().removeToken,
            s = (0, u.PI)(),
            a = s.createToken,
            i = s.loading,
            o = (0, u.F1)(),
            r = o.data,
            d = o.loading,
            p = (0, l.I3)();
          return {
            removeToken: function (e) {
              p({
                onOk: function () {
                  return t(e);
                },
              });
            },
            createToken: (0, h.useCallback)(
              function () {
                a(c()({}, e, n));
              },
              [a, e, n],
            ),
            tokenList: r,
            creatingLoading: i,
            listLoading: d,
          };
        },
        g = function () {
          var e,
            n = ((e = (0, l.qM)('chat').t),
            {
              showTokenEmptyError: (0, h.useCallback)(
                function () {
                  p.ZP.error(e('tokenError'));
                },
                [e],
              ),
            }).showTokenEmptyError,
            t = (function () {
              var e = (0, l.qM)('chat').t;
              return {
                showBetaEmptyError: (0, h.useCallback)(
                  function () {
                    p.ZP.error(e('betaError'));
                  },
                  [e],
                ),
              };
            })(),
            s = t.showBetaEmptyError,
            i = (0, u.v)(),
            r = i.data,
            c = i.fetchSystemTokenList,
            d = '';
          return (
            Array.isArray(r) && r.length > 0 && (r[0].token, (d = r[0].beta)),
            {
              token: Array.isArray(r) && r.length > 0 ? r[0].token : '',
              beta: d,
              handleOperate: (0, h.useCallback)(
                o()(
                  a()().mark(function e() {
                    var t, i, o;
                    return a()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), c();
                          case 2:
                            if (
                              ((t = e.sent),
                              (i = t),
                              !(Array.isArray(i) && i.length > 0))
                            ) {
                              e.next = 11;
                              break;
                            }
                            if (i[0].beta) {
                              e.next = 8;
                              break;
                            }
                            return s(), e.abrupt('return', !1);
                          case 8:
                            return e.abrupt(
                              'return',
                              null === (o = i[0]) || void 0 === o
                                ? void 0
                                : o.token,
                            );
                          case 11:
                            return n(), e.abrupt('return', !1);
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                ),
                [c, s, n],
              ),
            }
          );
        },
        f = function () {
          var e = (0, l.pG)(),
            n = e.visible,
            t = e.hideModal,
            s = e.showModal,
            i = g(),
            r = i.handleOperate,
            c = i.token,
            d = i.beta;
          return {
            showEmbedModal: (0, h.useCallback)(
              o()(
                a()().mark(function e() {
                  return a()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), r();
                        case 2:
                          e.sent && s();
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [r, s],
            ),
            hideEmbedModal: t,
            embedVisible: n,
            embedToken: c,
            beta: d,
          };
        },
        v = function (e) {
          var n = g().handleOperate,
            t = (0, h.useCallback)(
              function (n) {
                window.open(
                  (function (e) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 'chat',
                      t = window.location,
                      s = t.protocol,
                      a = t.host;
                    return ''
                      .concat(s, '//')
                      .concat(a, '/chat/share?shared_id=')
                      .concat(e, '&from=')
                      .concat(n);
                  })(n, 'canvasId' === e ? d.qH.Agent : d.qH.Chat),
                  '_blank',
                );
              },
              [e],
            );
          return {
            handlePreview: (0, h.useCallback)(
              o()(
                a()().mark(function e() {
                  var s;
                  return a()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n();
                        case 2:
                          (s = e.sent) && t(s);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [n, t],
            ),
          };
        };
    },
    26625: function (e, n, t) {
      'use strict';
      t.d(n, {
        h: function () {
          return E;
        },
      });
      var s = t(97857),
        a = t.n(s),
        i = t(13769),
        o = t.n(i),
        r = t(67007),
        c = t(62435),
        d = t(57636),
        l = t(27080),
        u = t(86074),
        p = ['className'],
        h = ['className'],
        m = ['className'],
        g = ['className'],
        f = ['className'],
        v = ['className'],
        _ = ['className'],
        b = ['className'],
        y = r.fC,
        x = r.xz,
        w = r.h_,
        k = c.forwardRef(function (e, n) {
          var t = e.className,
            s = o()(e, p);
          return (0, u.jsx)(
            r.aV,
            a()(
              a()(
                {
                  className: (0, l.cn)(
                    'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    t,
                  ),
                },
                s,
              ),
              {},
              { ref: n },
            ),
          );
        });
      k.displayName = r.aV.displayName;
      var T = c.forwardRef(function (e, n) {
        var t = e.className,
          s = o()(e, h);
        return (0, u.jsxs)(w, {
          children: [
            (0, u.jsx)(k, {}),
            (0, u.jsx)(
              r.VY,
              a()(
                {
                  ref: n,
                  className: (0, l.cn)(
                    'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-colors-background-neutral-standard p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                    t,
                  ),
                },
                s,
              ),
            ),
          ],
        });
      });
      T.displayName = r.VY.displayName;
      var j = function (e) {
        var n = e.className,
          t = o()(e, m);
        return (0, u.jsx)(
          'div',
          a()(
            {
              className: (0, l.cn)(
                'flex flex-col space-y-2 text-center sm:text-left',
                n,
              ),
            },
            t,
          ),
        );
      };
      j.displayName = 'AlertDialogHeader';
      var I = function (e) {
        var n = e.className,
          t = o()(e, g);
        return (0, u.jsx)(
          'div',
          a()(
            {
              className: (0, l.cn)(
                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                n,
              ),
            },
            t,
          ),
        );
      };
      I.displayName = 'AlertDialogFooter';
      var R = c.forwardRef(function (e, n) {
        var t = e.className,
          s = o()(e, f);
        return (0, u.jsx)(
          r.Dx,
          a()({ ref: n, className: (0, l.cn)('text-lg font-semibold', t) }, s),
        );
      });
      (R.displayName = r.Dx.displayName),
        (c.forwardRef(function (e, n) {
          var t = e.className,
            s = o()(e, v);
          return (0, u.jsx)(
            r.dk,
            a()(
              {
                ref: n,
                className: (0, l.cn)('text-sm text-muted-foreground', t),
              },
              s,
            ),
          );
        }).displayName = r.dk.displayName);
      var A = c.forwardRef(function (e, n) {
        var t = e.className,
          s = o()(e, _);
        return (0, u.jsx)(
          r.aU,
          a()({ ref: n, className: (0, l.cn)((0, d.dc)(), t) }, s),
        );
      });
      A.displayName = r.aU.displayName;
      var q = c.forwardRef(function (e, n) {
        var t = e.className,
          s = o()(e, b);
        return (0, u.jsx)(
          r.$j,
          a()(
            {
              ref: n,
              className: (0, l.cn)(
                (0, d.dc)({ variant: 'outline' }),
                'mt-2 sm:mt-0',
                t,
              ),
            },
            s,
          ),
        );
      });
      q.displayName = r.$j.displayName;
      var P = t(67421);
      function E(e) {
        var n = e.children,
          t = e.title,
          s = e.onOk,
          a = e.onCancel,
          i = e.hidden,
          o = void 0 !== i && i,
          r = (0, P.$G)().t;
        return o
          ? n
          : (0, u.jsxs)(y, {
              children: [
                (0, u.jsx)(x, { asChild: !0, children: n }),
                (0, u.jsxs)(T, {
                  onSelect: function (e) {
                    return e.preventDefault();
                  },
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                  children: [
                    (0, u.jsx)(j, {
                      children: (0, u.jsx)(R, {
                        children: null != t ? t : r('common.deleteModalTitle'),
                      }),
                    }),
                    (0, u.jsxs)(I, {
                      children: [
                        (0, u.jsx)(q, {
                          onClick: a,
                          children: r('common.cancel'),
                        }),
                        (0, u.jsx)(A, {
                          className: 'bg-text-delete-red text-text-title',
                          onClick: s,
                          children: r('common.ok'),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
    },
    33623: function (e, n, t) {
      'use strict';
      var s = t(5574),
        a = t.n(s),
        i = t(86968),
        o = t(63606),
        r = t(57132),
        c = t(83062),
        d = t(62435),
        l = t(74855),
        u = t(86074);
      n.Z = function (e) {
        var n = e.text,
          t = (0, d.useState)(!1),
          s = a()(t, 2),
          p = s[0],
          h = s[1],
          m = (0, i.qM)('common').t;
        return (0, u.jsx)(c.Z, {
          title: m(p ? 'copied' : 'copy'),
          children: (0, u.jsx)(l.CopyToClipboard, {
            text: n,
            onCopy: function () {
              h(!0),
                setTimeout(function () {
                  h(!1);
                }, 2e3);
            },
            children: p ? (0, u.jsx)(o.Z, {}) : (0, u.jsx)(r.Z, {}),
          }),
        });
      };
    },
    46693: function (e, n, t) {
      'use strict';
      t.d(n, {
        $: function () {
          return v;
        },
      });
      var s,
        a = t(97857),
        i = t.n(a),
        o = t(13769),
        r = t.n(o),
        c = t(39386),
        d = t(27080),
        l = t(16165),
        u = t(87547),
        p = t(7134),
        h = t(86074),
        m = ['name', 'width', 'height', 'imgClass'],
        g = [];
      try {
        (s = t(78131)),
          (g = s.keys().map(function (e) {
            return { name: e.replace(/\.\/(.*)\.\w+$/, '$1'), value: s(e) };
          }));
      } catch (e) {
        console.warn(e), (g = []);
      }
      var f = function (e) {
          var n = e.name,
            t = e.width,
            s = e.height,
            a = e.imgClass,
            o = r()(e, m),
            c = g.find(function (e) {
              return e.name === n;
            });
          return (0, h.jsx)(
            l.Z,
            i()(
              {
                component: function () {
                  return (0, h.jsx)('img', {
                    src: null == c ? void 0 : c.value,
                    alt: '',
                    width: t,
                    height: s,
                    className: (0, d.cn)(a, 'max-w-full'),
                  });
                },
              },
              o,
            ),
          );
        },
        v = function (e) {
          var n = e.name,
            t = e.height,
            s = void 0 === t ? 48 : t,
            a = e.width,
            i = void 0 === a ? 48 : a,
            o = e.size,
            r = void 0 === o ? 'large' : o,
            d = e.imgClass,
            l = c.s[n];
          return l
            ? (0, h.jsx)(f, {
                name: 'llm/'.concat(l),
                width: i,
                height: s,
                imgClass: d,
              })
            : (0, h.jsx)(p.C, {
                shape: 'square',
                size: r,
                icon: (0, h.jsx)(u.Z, {}),
              });
        };
      n.Z = f;
    },
    87030: function (e, n, t) {
      'use strict';
      t.d(n, {
        Ol: function () {
          return v;
        },
        SZ: function () {
          return b;
        },
        Zb: function () {
          return f;
        },
        aY: function () {
          return y;
        },
        ll: function () {
          return _;
        },
      });
      var s = t(97857),
        a = t.n(s),
        i = t(13769),
        o = t.n(i),
        r = t(62435),
        c = t(27080),
        d = t(86074),
        l = ['className'],
        u = ['className'],
        p = ['className'],
        h = ['className'],
        m = ['className'],
        g = ['className'],
        f = r.forwardRef(function (e, n) {
          var t = e.className,
            s = o()(e, l);
          return (0, d.jsx)(
            'div',
            a()(
              {
                ref: n,
                className: (0, c.cn)(
                  'rounded-lg  bg-background-card  text-card-foreground shadow-sm',
                  t,
                ),
              },
              s,
            ),
          );
        });
      f.displayName = 'Card';
      var v = r.forwardRef(function (e, n) {
        var t = e.className,
          s = o()(e, u);
        return (0, d.jsx)(
          'div',
          a()(
            {
              ref: n,
              className: (0, c.cn)('flex flex-col space-y-1.5 p-6', t),
            },
            s,
          ),
        );
      });
      v.displayName = 'CardHeader';
      var _ = r.forwardRef(function (e, n) {
        var t = e.className,
          s = o()(e, p);
        return (0, d.jsx)(
          'div',
          a()(
            {
              ref: n,
              className: (0, c.cn)(
                'text-2xl font-semibold leading-none tracking-tight',
                t,
              ),
            },
            s,
          ),
        );
      });
      _.displayName = 'CardTitle';
      var b = r.forwardRef(function (e, n) {
        var t = e.className,
          s = o()(e, h);
        return (0, d.jsx)(
          'div',
          a()(
            {
              ref: n,
              className: (0, c.cn)('text-sm text-muted-foreground', t),
            },
            s,
          ),
        );
      });
      b.displayName = 'CardDescription';
      var y = r.forwardRef(function (e, n) {
        var t = e.className,
          s = o()(e, m);
        return (0, d.jsx)(
          'div',
          a()({ ref: n, className: (0, c.cn)('p-6 pt-0', t) }, s),
        );
      });
      (y.displayName = 'CardContent'),
        (r.forwardRef(function (e, n) {
          var t = e.className,
            s = o()(e, g);
          return (0, d.jsx)(
            'div',
            a()(
              { ref: n, className: (0, c.cn)('flex items-center p-6 pt-0', t) },
              s,
            ),
          );
        }).displayName = 'CardFooter');
    },
    28993: function (e, n, t) {
      'use strict';
      t.d(n, {
        $N: function () {
          return j;
        },
        Vq: function () {
          return _;
        },
        cN: function () {
          return T;
        },
        cZ: function () {
          return w;
        },
        fK: function () {
          return k;
        },
        hg: function () {
          return b;
        },
      });
      var s = t(97857),
        a = t.n(s),
        i = t(13769),
        o = t.n(i),
        r = t(28828),
        c = t(41352),
        d = t(62435),
        l = t(27080),
        u = t(86074),
        p = ['className'],
        h = ['className', 'children'],
        m = ['className'],
        g = ['className'],
        f = ['className'],
        v = ['className'],
        _ = r.fC,
        b = r.xz,
        y = r.h_,
        x =
          (r.x8,
          d.forwardRef(function (e, n) {
            var t = e.className,
              s = o()(e, p);
            return (0, u.jsx)(
              r.aV,
              a()(
                {
                  ref: n,
                  className: (0, l.cn)(
                    'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    t,
                  ),
                },
                s,
              ),
            );
          }));
      x.displayName = r.aV.displayName;
      var w = d.forwardRef(function (e, n) {
        var t = e.className,
          s = e.children,
          i = o()(e, h);
        return (0, u.jsxs)(y, {
          children: [
            (0, u.jsx)(x, {}),
            (0, u.jsxs)(
              r.VY,
              a()(
                a()(
                  {
                    ref: n,
                    className: (0, l.cn)(
                      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-colors-background-neutral-standard p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                      t,
                    ),
                  },
                  i,
                ),
                {},
                {
                  children: [
                    s,
                    (0, u.jsxs)(r.x8, {
                      className:
                        'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                      children: [
                        (0, u.jsx)(c.Z, { className: 'h-4 w-4' }),
                        (0, u.jsx)('span', {
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
      w.displayName = r.VY.displayName;
      var k = function (e) {
        var n = e.className,
          t = o()(e, m);
        return (0, u.jsx)(
          'div',
          a()(
            {
              className: (0, l.cn)(
                'flex flex-col space-y-1.5 text-center sm:text-left',
                n,
              ),
            },
            t,
          ),
        );
      };
      k.displayName = 'DialogHeader';
      var T = function (e) {
        var n = e.className,
          t = o()(e, g);
        return (0, u.jsx)(
          'div',
          a()(
            {
              className: (0, l.cn)(
                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                n,
              ),
            },
            t,
          ),
        );
      };
      T.displayName = 'DialogFooter';
      var j = d.forwardRef(function (e, n) {
        var t = e.className,
          s = o()(e, f);
        return (0, u.jsx)(
          r.Dx,
          a()(
            {
              ref: n,
              className: (0, l.cn)(
                'text-lg font-semibold leading-none tracking-tight',
                t,
              ),
            },
            s,
          ),
        );
      });
      (j.displayName = r.Dx.displayName),
        (d.forwardRef(function (e, n) {
          var t = e.className,
            s = o()(e, v);
          return (0, u.jsx)(
            r.dk,
            a()(
              {
                ref: n,
                className: (0, l.cn)('text-sm text-muted-foreground', t),
              },
              s,
            ),
          );
        }).displayName = r.dk.displayName);
    },
    80499: function (e, n, t) {
      'use strict';
      t.d(n, {
        NI: function () {
          return A;
        },
        Wi: function () {
          return k;
        },
        l0: function () {
          return y;
        },
        lX: function () {
          return R;
        },
        pf: function () {
          return q;
        },
        xJ: function () {
          return I;
        },
        zG: function () {
          return P;
        },
      });
      var s = t(13769),
        a = t.n(s),
        i = t(97857),
        o = t.n(i),
        r = t(49677),
        c = t.n(r),
        d = t(88426),
        l = t(62435),
        u = t(87536),
        p = t(65038),
        h = t(27080),
        m = t(84146),
        g = t(86074),
        f = ['className'],
        v = ['className', 'tooltip'],
        _ = ['className'],
        b = ['className', 'children'],
        y = u.RV,
        x = l.createContext({}),
        w = l.createContext({}),
        k = function (e) {
          var n = Object.assign({}, (c()(e), e));
          return (0, g.jsx)(w.Provider, {
            value: { name: n.name },
            children: (0, g.jsx)(u.Qr, o()({}, n)),
          });
        },
        T = function () {
          var e = l.useContext(w),
            n = l.useContext(x),
            t = (0, u.Gc)(),
            s = t.getFieldState,
            a = t.formState,
            i = s(e.name, a);
          if (!e)
            throw new Error('useFormField should be used within <FormField>');
          var r = n.id;
          return o()(
            {
              id: r,
              name: e.name,
              formItemId: ''.concat(r, '-form-item'),
              formDescriptionId: ''.concat(r, '-form-item-description'),
              formMessageId: ''.concat(r, '-form-item-message'),
            },
            i,
          );
        },
        j = l.forwardRef(function (e, n) {
          var t = e.className,
            s = a()(e, f),
            i = l.useId();
          return (0, g.jsx)(x.Provider, {
            value: { id: i },
            children: (0, g.jsx)(
              'div',
              o()({ ref: n, className: (0, h.cn)('space-y-2', t) }, s),
            ),
          });
        });
      j.displayName = 'FormItem';
      var I = l.memo(j),
        R = l.forwardRef(function (e, n) {
          var t = e.className,
            s = e.tooltip,
            i = a()(e, v),
            r = T(),
            c = r.error,
            d = r.formItemId;
          return (0, g.jsxs)(
            p._,
            o()(
              o()(
                {
                  ref: n,
                  className: (0, h.cn)(
                    c && 'text-destructive',
                    t,
                    'flex pb-0.5',
                  ),
                  htmlFor: d,
                },
                i,
              ),
              {},
              { children: [i.children, s && (0, g.jsx)(m.Z4, { tooltip: s })] },
            ),
          );
        });
      R.displayName = 'FormLabel';
      var A = l.forwardRef(function (e, n) {
        var t = Object.assign({}, (c()(e), e)),
          s = T(),
          a = s.error,
          i = s.formItemId,
          r = s.formDescriptionId,
          l = s.formMessageId;
        return (0, g.jsx)(
          d.g7,
          o()(
            {
              ref: n,
              id: i,
              'aria-describedby': a
                ? ''.concat(r, ' ').concat(l)
                : ''.concat(r),
              'aria-invalid': !!a,
            },
            t,
          ),
        );
      });
      A.displayName = 'FormControl';
      var q = l.forwardRef(function (e, n) {
        var t = e.className,
          s = a()(e, _),
          i = T().formDescriptionId;
        return (0, g.jsx)(
          'p',
          o()(
            {
              ref: n,
              id: i,
              className: (0, h.cn)('text-sm text-muted-foreground', t),
            },
            s,
          ),
        );
      });
      q.displayName = 'FormDescription';
      var P = l.forwardRef(function (e, n) {
        var t = e.className,
          s = e.children,
          i = a()(e, b),
          r = T(),
          c = r.error,
          d = r.formMessageId,
          l = c ? String(null == c ? void 0 : c.message) : s;
        return l
          ? (0, g.jsx)(
              'p',
              o()(
                o()(
                  {
                    ref: n,
                    id: d,
                    className: (0, h.cn)(
                      'text-sm font-medium text-destructive',
                      t,
                    ),
                  },
                  i,
                ),
                {},
                { children: l },
              ),
            )
          : null;
      });
      P.displayName = 'FormMessage';
    },
    65038: function (e, n, t) {
      'use strict';
      t.d(n, {
        _: function () {
          return m;
        },
      });
      var s = t(97857),
        a = t.n(s),
        i = t(13769),
        o = t.n(i),
        r = t(49102),
        c = t(45139),
        d = t(62435),
        l = t(27080),
        u = t(86074),
        p = ['className'],
        h = (0, c.j)(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        ),
        m = d.forwardRef(function (e, n) {
          var t = e.className,
            s = o()(e, p);
          return (0, u.jsx)(
            r.f,
            a()({ ref: n, className: (0, l.cn)(h(), t) }, s),
          );
        });
      m.displayName = r.f.displayName;
    },
    11524: function (e, n, t) {
      'use strict';
      t.d(n, {
        f: function () {
          return g;
        },
      });
      var s = t(97857),
        a = t.n(s),
        i = t(13769),
        o = t.n(i),
        r = t(27080),
        c = t(88426),
        d = t(45139),
        l = t(36316),
        u = t(62435),
        p = t(86074),
        h = [
          'className',
          'loading',
          'children',
          'disabled',
          'variant',
          'size',
          'asChild',
        ],
        m = (0, d.j)(
          'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            variants: {
              variant: {
                default:
                  'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                  'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                  'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary:
                  'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
                tertiary:
                  'bg-colors-background-sentiment-solid-primary text-colors-text-persist-light hover:bg-colors-background-sentiment-solid-primary/80',
              },
              size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
              },
            },
            defaultVariants: { variant: 'default', size: 'default' },
          },
        ),
        g = u.forwardRef(function (e, n) {
          var t = e.className,
            s = e.loading,
            i = void 0 !== s && s,
            d = e.children,
            u = e.disabled,
            g = e.variant,
            f = e.size,
            v = e.asChild,
            _ = void 0 !== v && v,
            b = o()(e, h),
            y = _ ? c.g7 : 'button';
          return (0, p.jsxs)(
            y,
            a()(
              a()(
                {
                  className: (0, r.cn)(
                    m({ variant: g, size: f, className: t }),
                  ),
                  ref: n,
                  disabled: i || u,
                },
                b,
              ),
              {},
              {
                children: [
                  i &&
                    (0, p.jsx)(l.Z, { className: 'mr-2 h-5 w-5 animate-spin' }),
                  (0, p.jsx)(c.A4, { children: d }),
                ],
              },
            ),
          );
        });
      g.displayName = 'LoadingButton';
    },
    34595: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return te;
          },
        });
      var s = t(86968),
        a = t(46693),
        i = t(57636),
        o = t(87030),
        r = t(39259),
        c = t(34464),
        d = t(42695),
        l = t(62435),
        u = t(67421),
        p = t(15009),
        h = t.n(p),
        m = t(99289),
        g = t.n(m),
        f = t(26625),
        v = t(28993),
        _ = t(11524),
        b = t(18814),
        y = t(13718),
        x = t(97857),
        w = t.n(x),
        k = t(56312),
        T = t(87536),
        j = t(1604),
        I = t(80499),
        R = t(27591),
        A = t(86074),
        q = 'LangfuseConfigurationForm';
      function P(e) {
        var n = e.onOk,
          t = (0, u.$G)().t,
          s = (0, r.er)().data,
          a = j.z.object({
            secret_key: j.z
              .string()
              .min(1, { message: t('setting.secretKeyMessage') })
              .trim(),
            public_key: j.z
              .string()
              .min(1, { message: t('setting.publicKeyMessage') })
              .trim(),
            host: j.z
              .string()
              .min(0, { message: t('setting.hostMessage') })
              .trim(),
          }),
          i = (0, T.cI)({ resolver: (0, k.F)(a), defaultValues: {} });
        function o() {
          return (
            (o = g()(
              h()().mark(function e(t) {
                return h()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        null == n || n(t);
                      case 1:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )),
            o.apply(this, arguments)
          );
        }
        return (
          (0, l.useEffect)(
            function () {
              s && i.reset(s);
            },
            [s, i],
          ),
          (0, A.jsx)(
            I.l0,
            w()(
              w()({}, i),
              {},
              {
                children: (0, A.jsxs)('form', {
                  onSubmit: i.handleSubmit(function (e) {
                    return o.apply(this, arguments);
                  }),
                  className: 'space-y-6',
                  id: q,
                  children: [
                    (0, A.jsx)(I.Wi, {
                      control: i.control,
                      name: 'secret_key',
                      render: function (e) {
                        var n = e.field;
                        return (0, A.jsxs)(I.xJ, {
                          children: [
                            (0, A.jsx)(I.lX, {
                              children: t('setting.secretKey'),
                            }),
                            (0, A.jsx)(I.NI, {
                              children: (0, A.jsx)(
                                R.II,
                                w()(
                                  w()(
                                    {
                                      type: 'password',
                                      placeholder: t(
                                        'setting.secretKeyMessage',
                                      ),
                                    },
                                    n,
                                  ),
                                  {},
                                  { autoComplete: 'off' },
                                ),
                              ),
                            }),
                            (0, A.jsx)(I.zG, {}),
                          ],
                        });
                      },
                    }),
                    (0, A.jsx)(I.Wi, {
                      control: i.control,
                      name: 'public_key',
                      render: function (e) {
                        var n = e.field;
                        return (0, A.jsxs)(I.xJ, {
                          children: [
                            (0, A.jsx)(I.lX, {
                              children: t('setting.publicKey'),
                            }),
                            (0, A.jsx)(I.NI, {
                              children: (0, A.jsx)(
                                R.II,
                                w()(
                                  w()(
                                    {
                                      type: 'password',
                                      placeholder: t(
                                        'setting.publicKeyMessage',
                                      ),
                                    },
                                    n,
                                  ),
                                  {},
                                  { autoComplete: 'off' },
                                ),
                              ),
                            }),
                            (0, A.jsx)(I.zG, {}),
                          ],
                        });
                      },
                    }),
                    (0, A.jsx)(I.Wi, {
                      control: i.control,
                      name: 'host',
                      render: function (e) {
                        var n = e.field;
                        return (0, A.jsxs)(I.xJ, {
                          children: [
                            (0, A.jsx)(I.lX, { children: 'Host' }),
                            (0, A.jsx)(I.NI, {
                              children: (0, A.jsx)(
                                R.II,
                                w()(
                                  w()(
                                    {
                                      placeholder: 'https://cloud.langfuse.com',
                                    },
                                    n,
                                  ),
                                  {},
                                  { autoComplete: 'off' },
                                ),
                              ),
                            }),
                            (0, A.jsx)(I.zG, {}),
                          ],
                        });
                      },
                    }),
                  ],
                }),
              },
            ),
          )
        );
      }
      function E(e) {
        var n = e.hideModal,
          t = e.loading,
          s = e.onOk,
          a = (0, u.$G)().t,
          o = (0, r.x_)().deleteLangfuseConfig,
          c = (0, l.useCallback)(
            g()(
              h()().mark(function e() {
                return h()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), o();
                      case 2:
                        0 === e.sent && (null == n || n());
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
            [o, n],
          );
        return (0, A.jsxs)(v.Vq, {
          open: !0,
          onOpenChange: n,
          children: [
            (0, A.jsx)(v.hg, {
              asChild: !0,
              children: (0, A.jsx)(i.zx, { variant: 'outline' }),
            }),
            (0, A.jsxs)(v.cZ, {
              children: [
                (0, A.jsx)(v.fK, {
                  children: (0, A.jsxs)(v.$N, {
                    children: [a('setting.configuration'), ' Langfuse'],
                  }),
                }),
                (0, A.jsx)(P, { onOk: s }),
                (0, A.jsxs)(v.cN, {
                  className: '!justify-between',
                  children: [
                    (0, A.jsxs)('a', {
                      href: 'https://langfuse.com/docs',
                      className:
                        'flex items-center gap-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600',
                      target: '_blank',
                      rel: 'noreferrer',
                      children: [
                        a('setting.viewLangfuseSDocumentation'),
                        (0, A.jsx)(b.Z, { className: 'size-4' }),
                      ],
                    }),
                    (0, A.jsxs)('div', {
                      className: 'flex items-center gap-4',
                      children: [
                        (0, A.jsx)(f.h, {
                          onOk: c,
                          children: (0, A.jsxs)(i.zx, {
                            variant: 'outline',
                            children: [
                              (0, A.jsx)(y.Z, { className: 'text-red-500' }),
                              ' ',
                              a('common.delete'),
                            ],
                          }),
                        }),
                        (0, A.jsx)(_.f, {
                          type: 'submit',
                          form: q,
                          loading: t,
                          children: a('common.save'),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function D() {
        var e = (function () {
            var e = (0, s.pG)(),
              n = e.visible,
              t = e.hideModal,
              a = e.showModal,
              i = (0, r.Jv)(),
              o = i.setLangfuseConfig,
              c = i.loading,
              d = (0, l.useCallback)(
                (function () {
                  var e = g()(
                    h()().mark(function e(n) {
                      var s;
                      return h()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), o(n);
                            case 2:
                              return (
                                0 === (s = e.sent) && t(), e.abrupt('return', s)
                              );
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
                [t],
              );
            return {
              loading: c,
              saveLangfuseConfigurationOk: d,
              saveLangfuseConfigurationVisible: n,
              hideSaveLangfuseConfigurationModal: t,
              showSaveLangfuseConfigurationModal: a,
            };
          })(),
          n = e.saveLangfuseConfigurationOk,
          t = e.showSaveLangfuseConfigurationModal,
          p = e.hideSaveLangfuseConfigurationModal,
          m = e.saveLangfuseConfigurationVisible,
          f = e.loading,
          v = (0, u.$G)().t,
          _ = (0, r.er)().data,
          b = (0, l.useCallback)(
            function () {
              window.open(
                'https://cloud.langfuse.com/project/'.concat(
                  null == _ ? void 0 : _.project_id,
                ),
                '_blank',
              );
            },
            [null == _ ? void 0 : _.project_id],
          );
        return (0, A.jsxs)(o.Zb, {
          children: [
            (0, A.jsxs)(o.Ol, {
              children: [
                (0, A.jsxs)(o.ll, {
                  className: 'flex justify-between',
                  children: [
                    (0, A.jsxs)('div', {
                      className: 'flex items-center gap-4',
                      children: [
                        (0, A.jsx)(a.Z, {
                          name: 'langfuse',
                          width: 24,
                          height: 24,
                        }),
                        'Langfuse',
                      ],
                    }),
                    (0, A.jsxs)('div', {
                      className: 'flex gap-4 items-center',
                      children: [
                        _ &&
                          (0, A.jsxs)(i.zx, {
                            variant: 'outline',
                            size: 'sm',
                            onClick: b,
                            children: [
                              (0, A.jsx)(c.Z, {}),
                              ' ',
                              v('setting.view'),
                            ],
                          }),
                        (0, A.jsxs)(i.zx, {
                          size: 'sm',
                          onClick: t,
                          className: 'bg-blue-500 hover:bg-blue-400',
                          children: [
                            (0, A.jsx)(d.Z, {}),
                            v('setting.configuration'),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, A.jsx)(o.SZ, {
                  children: v('setting.langfuseDescription'),
                }),
              ],
            }),
            m && (0, A.jsx)(E, { hideModal: p, onOk: n, loading: f }),
          ],
        });
      }
      var B =
          '---\nsidebar_position: 4\nslug: /http_api_reference\n---\n\n# HTTP API\n\nA complete reference for RAGFlow\'s RESTful API. Before proceeding, please ensure you [have your RAGFlow API key ready for authentication](../guides/models/llm_api_key_setup.md).\n\n---\n\n## ERROR CODES\n\n---\n\n| Code | Message               | Description                |\n| ---- | --------------------- | -------------------------- |\n| 400  | Bad Request           | Invalid request parameters |\n| 401  | Unauthorized          | Unauthorized access        |\n| 403  | Forbidden             | Access denied              |\n| 404  | Not Found             | Resource not found         |\n| 500  | Internal Server Error | Server internal error      |\n| 1001 | Invalid Chunk ID      | Invalid Chunk ID           |\n| 1002 | Chunk Update Failed   | Chunk update failed        |\n\n---\n\n## OpenAI-Compatible API\n\n---\n\n### Create chat completion\n\n**POST** `/api/v1/chats_openai/{chat_id}/chat/completions`\n\nCreates a model response for a given chat conversation.\n\nThis API follows the same request and response format as OpenAI\'s API. It allows you to interact with the model in a manner similar to how you would with [OpenAI\'s API](https://platform.openai.com/docs/api-reference/chat/create).\n\n#### Request\n\n- Method: POST\n- URL: `/api/v1/chats_openai/{chat_id}/chat/completions`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"model"`: `string`\n  - `"messages"`: `object list`\n  - `"stream"`: `boolean`\n\n##### Request example\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/chats_openai/{chat_id}/chat/completions \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'{\n        "model": "model",\n        "messages": [{"role": "user", "content": "Say this is a test!"}],\n        "stream": true\n      }\'\n```\n\n##### Request Parameters\n\n- `model` (*Body parameter*) `string`, *Required*  \n  The model used to generate the response. The server will parse this automatically, so you can set it to any value for now.\n\n- `messages` (*Body parameter*) `list[object]`, *Required*  \n  A list of historical chat messages used to generate the response. This must contain at least one message with the `user` role.\n\n- `stream` (*Body parameter*) `boolean`  \n  Whether to receive the response as a stream. Set this to `false` explicitly if you prefer to receive the entire response in one go instead of as a stream.\n\n#### Response\n\nStream:\n\n```json\n{\n    "id": "chatcmpl-3a9c3572f29311efa69751e139332ced",\n    "choices": [\n        {\n            "delta": {\n                "content": "This is a test. If you have any specific questions or need information, feel",\n                "role": "assistant",\n                "function_call": null,\n                "tool_calls": null\n            },\n            "finish_reason": null,\n            "index": 0,\n            "logprobs": null\n        }\n    ],\n    "created": 1740543996,\n    "model": "model",\n    "object": "chat.completion.chunk",\n    "system_fingerprint": "",\n    "usage": null\n}\n// omit duplicated information\n{"choices":[{"delta":{"content":" free to ask, and I will do my best to provide an answer based on","role":"assistant"}}]}\n{"choices":[{"delta":{"content":" the knowledge I have. If your question is unrelated to the provided knowledge base,","role":"assistant"}}]}\n{"choices":[{"delta":{"content":" I will let you know.","role":"assistant"}}]}\n// the last chunk\n{\n    "id": "chatcmpl-3a9c3572f29311efa69751e139332ced",\n    "choices": [\n        {\n            "delta": {\n                "content": null,\n                "role": "assistant",\n                "function_call": null,\n                "tool_calls": null\n            },\n            "finish_reason": "stop",\n            "index": 0,\n            "logprobs": null\n        }\n    ],\n    "created": 1740543996,\n    "model": "model",\n    "object": "chat.completion.chunk",\n    "system_fingerprint": "",\n    "usage": {\n        "prompt_tokens": 18,\n        "completion_tokens": 225,\n        "total_tokens": 243\n    }\n}\n```\n\nNon-stream:\n\n```json\n{\n    "choices":[\n        {\n            "finish_reason":"stop",\n            "index":0,\n            "logprobs":null,\n            "message":{\n                "content":"This is a test. If you have any specific questions or need information, feel free to ask, and I will do my best to provide an answer based on the knowledge I have. If your question is unrelated to the provided knowledge base, I will let you know.",\n                "role":"assistant"\n            }\n        }\n    ],\n    "created":1740543499,\n    "id":"chatcmpl-3a9c3572f29311efa69751e139332ced",\n    "model":"model",\n    "object":"chat.completion",\n    "usage":{\n        "completion_tokens":246,\n        "completion_tokens_details":{\n            "accepted_prediction_tokens":246,\n            "reasoning_tokens":18,\n            "rejected_prediction_tokens":0\n        },\n        "prompt_tokens":18,\n        "total_tokens":264\n    }\n}\n```\n\nFailure:\n\n```json\n{\n  "code": 102,\n  "message": "The last content of this conversation is not from user."\n}\n```\n\n---\n\n### Create agent completion\n\n**POST** `/api/v1/agents_openai/{agent_id}/chat/completions`\n\nCreates a model response for a given chat conversation.\n\nThis API follows the same request and response format as OpenAI\'s API. It allows you to interact with the model in a manner similar to how you would with [OpenAI\'s API](https://platform.openai.com/docs/api-reference/chat/create).\n\n#### Request\n\n- Method: POST\n- URL: `/api/v1/agents_openai/{agent_id}/chat/completions`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"model"`: `string`\n  - `"messages"`: `object list`\n  - `"stream"`: `boolean`\n\n##### Request example\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/agents_openai/{agent_id}/chat/completions \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'{\n        "model": "model",\n        "messages": [{"role": "user", "content": "Say this is a test!"}],\n        "stream": true\n      }\'\n```\n\n##### Request Parameters\n\n- `model` (*Body parameter*) `string`, *Required*\n  The model used to generate the response. The server will parse this automatically, so you can set it to any value for now.\n\n- `messages` (*Body parameter*) `list[object]`, *Required*\n  A list of historical chat messages used to generate the response. This must contain at least one message with the `user` role.\n\n- `stream` (*Body parameter*) `boolean`\n  Whether to receive the response as a stream. Set this to `false` explicitly if you prefer to receive the entire response in one go instead of as a stream.\n\n#### Response\n\nStream:\n\n```json\n{\n    "id": "chatcmpl-3a9c3572f29311efa69751e139332ced",\n    "choices": [\n        {\n            "delta": {\n                "content": "This is a test. If you have any specific questions or need information, feel",\n                "role": "assistant",\n                "function_call": null,\n                "tool_calls": null\n            },\n            "finish_reason": null,\n            "index": 0,\n            "logprobs": null\n        }\n    ],\n    "created": 1740543996,\n    "model": "model",\n    "object": "chat.completion.chunk",\n    "system_fingerprint": "",\n    "usage": null\n}\n// omit duplicated information\n{"choices":[{"delta":{"content":" free to ask, and I will do my best to provide an answer based on","role":"assistant"}}]}\n{"choices":[{"delta":{"content":" the knowledge I have. If your question is unrelated to the provided knowledge base,","role":"assistant"}}]}\n{"choices":[{"delta":{"content":" I will let you know.","role":"assistant"}}]}\n// the last chunk\n{\n    "id": "chatcmpl-3a9c3572f29311efa69751e139332ced",\n    "choices": [\n        {\n            "delta": {\n                "content": null,\n                "role": "assistant",\n                "function_call": null,\n                "tool_calls": null\n            },\n            "finish_reason": "stop",\n            "index": 0,\n            "logprobs": null\n        }\n    ],\n    "created": 1740543996,\n    "model": "model",\n    "object": "chat.completion.chunk",\n    "system_fingerprint": "",\n    "usage": {\n        "prompt_tokens": 18,\n        "completion_tokens": 225,\n        "total_tokens": 243\n    }\n}\n```\n\nNon-stream:\n\n```json\n{\n    "choices":[\n        {\n            "finish_reason":"stop",\n            "index":0,\n            "logprobs":null,\n            "message":{\n                "content":"This is a test. If you have any specific questions or need information, feel free to ask, and I will do my best to provide an answer based on the knowledge I have. If your question is unrelated to the provided knowledge base, I will let you know.",\n                "role":"assistant"\n            }\n        }\n    ],\n    "created":1740543499,\n    "id":"chatcmpl-3a9c3572f29311efa69751e139332ced",\n    "model":"model",\n    "object":"chat.completion",\n    "usage":{\n        "completion_tokens":246,\n        "completion_tokens_details":{\n            "accepted_prediction_tokens":246,\n            "reasoning_tokens":18,\n            "rejected_prediction_tokens":0\n        },\n        "prompt_tokens":18,\n        "total_tokens":264\n    }\n}\n```\n\nFailure:\n\n```json\n{\n  "code": 102,\n  "message": "The last content of this conversation is not from user."\n}\n```\n\n## DATASET MANAGEMENT\n\n---\n\n### Create dataset\n\n**POST** `/api/v1/datasets`\n\nCreates a dataset.\n\n#### Request\n\n- Method: POST\n- URL: `/api/v1/datasets`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"name"`: `string`\n  - `"avatar"`: `string`\n  - `"description"`: `string`\n  - `"embedding_model"`: `string`\n  - `"permission"`: `string`\n  - `"chunk_method"`: `string`\n  - `"parser_config"`: `object`\n\n##### Request example\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/datasets \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'{\n      "name": "test_1"\n      }\'\n```\n\n##### Request parameters\n\n- `"name"`: (*Body parameter*), `string`, *Required*  \n  The unique name of the dataset to create. It must adhere to the following requirements:  \n  - Basic Multilingual Plane (BMP) only\n  - Maximum 128 characters\n  - Case-insensitive\n\n- `"avatar"`: (*Body parameter*), `string`  \n  Base64 encoding of the avatar.\n  - Maximum 65535 characters\n\n- `"description"`: (*Body parameter*), `string`  \n  A brief description of the dataset to create.\n  - Maximum 65535 characters\n\n- `"embedding_model"`: (*Body parameter*), `string`  \n  The name of the embedding model to use. For example: `"BAAI/bge-large-zh-v1.5@BAAI"`\n  - Maximum 255 characters\n  - Must follow `model_name@model_factory` format\n\n- `"permission"`: (*Body parameter*), `string`  \n  Specifies who can access the dataset to create. Available options:  \n  - `"me"`: (Default) Only you can manage the dataset.\n  - `"team"`: All team members can manage the dataset.\n\n- `"chunk_method"`: (*Body parameter*), `enum<string>`  \n  The chunking method of the dataset to create. Available options:  \n  - `"naive"`: General (default)\n  - `"book"`: Book\n  - `"email"`: Email\n  - `"laws"`: Laws\n  - `"manual"`: Manual\n  - `"one"`: One\n  - `"paper"`: Paper\n  - `"picture"`: Picture\n  - `"presentation"`: Presentation\n  - `"qa"`: Q&A\n  - `"table"`: Table\n  - `"tag"`: Tag\n\n- `"parser_config"`: (*Body parameter*), `object`  \n  The configuration settings for the dataset parser. The attributes in this JSON object vary with the selected `"chunk_method"`:  \n  - If `"chunk_method"` is `"naive"`, the `"parser_config"` object contains the following attributes:\n    - `"auto_keywords"`: `int`\n      - Defaults to `0`\n      - Minimum: `0`\n      - Maximum: `32`\n    - `"auto_questions"`: `int`\n      - Defaults to `0`\n      - Minimum: `0`\n      - Maximum: `10`\n    - `"chunk_token_num"`: `int`\n      - Defaults to `128`\n      - Minimum: `1`\n      - Maximum: `2048`\n    - `"delimiter"`: `string`\n      - Defaults to `"\\n"`.\n    - `"html4excel"`: `bool` Indicates whether to convert Excel documents into HTML format.\n      - Defaults to `false`\n    - `"layout_recognize"`: `string`\n      - Defaults to `DeepDOC`\n    - `"tag_kb_ids"`: `array<string>` refer to [Use tag set](https://ragflow.io/docs/dev/use_tag_sets)\n      - Must include a list of dataset IDs, where each dataset is parsed using the ​​Tag Chunk Method\n    - `"task_page_size"`: `int` For PDF only.\n      - Defaults to `12`\n      - Minimum: `1`\n    - `"raptor"`: `object` RAPTOR-specific settings.\n      - Defaults to: `{"use_raptor": false}`\n    - `"graphrag"`: `object` GRAPHRAG-specific settings.\n      - Defaults to: `{"use_graphrag": false}`\n  - If `"chunk_method"` is `"qa"`, `"manuel"`, `"paper"`, `"book"`, `"laws"`, or `"presentation"`, the `"parser_config"` object contains the following attribute:  \n    - `"raptor"`: `object` RAPTOR-specific settings.\n      - Defaults to: `{"use_raptor": false}`.\n  - If `"chunk_method"` is `"table"`, `"picture"`, `"one"`, or `"email"`, `"parser_config"` is an empty JSON object.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": {\n        "avatar": null,\n        "chunk_count": 0,\n        "chunk_method": "naive",\n        "create_date": "Mon, 28 Apr 2025 18:40:41 GMT",\n        "create_time": 1745836841611,\n        "created_by": "3af81804241d11f0a6a79f24fc270c7f",\n        "description": null,\n        "document_count": 0,\n        "embedding_model": "BAAI/bge-large-zh-v1.5@BAAI",\n        "id": "3b4de7d4241d11f0a6a79f24fc270c7f",\n        "language": "English",\n        "name": "RAGFlow example",\n        "pagerank": 0,\n        "parser_config": {\n            "chunk_token_num": 128, \n            "delimiter": "\\\\n!?;。；！？", \n            "html4excel": false, \n            "layout_recognize": "DeepDOC", \n            "raptor": {\n                "use_raptor": false\n                }\n            },\n        "permission": "me",\n        "similarity_threshold": 0.2,\n        "status": "1",\n        "tenant_id": "3af81804241d11f0a6a79f24fc270c7f",\n        "token_num": 0,\n        "update_date": "Mon, 28 Apr 2025 18:40:41 GMT",\n        "update_time": 1745836841611,\n        "vector_similarity_weight": 0.3,\n    },\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 101,\n    "message": "Dataset name \'RAGFlow example\' already exists"\n}\n```\n\n---\n\n### Delete datasets\n\n**DELETE** `/api/v1/datasets`\n\nDeletes datasets by ID.\n\n#### Request\n\n- Method: DELETE\n- URL: `/api/v1/datasets`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n  - Body:\n    - `"ids"`: `list[string]` or `null`\n\n##### Request example\n\n```bash\ncurl --request DELETE \\\n     --url http://{address}/api/v1/datasets \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'{\n     "ids": ["d94a8dc02c9711f0930f7fbc369eab6d", "e94a8dc02c9711f0930f7fbc369eab6e"]\n     }\'\n```\n\n##### Request parameters\n\n- `"ids"`: (*Body parameter*), `list[string]` or `null`,   *Required*  \n  Specifies the datasets to delete:\n  - If `null`, all datasets will be deleted.\n  - If an array of IDs, only the specified datasets will be deleted.\n  - If an empty array, no datasets will be deleted.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0 \n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "You don\'t own the dataset."\n}\n```\n\n---\n\n### Update dataset\n\n**PUT** `/api/v1/datasets/{dataset_id}`\n\nUpdates configurations for a specified dataset.\n\n#### Request\n\n- Method: PUT\n- URL: `/api/v1/datasets/{dataset_id}`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"name"`: `string`\n  - `"avatar"`: `string`\n  - `"description"`: `string`\n  - `"embedding_model"`: `string`\n  - `"permission"`: `string`\n  - `"chunk_method"`: `string`\n  - `"pagerank"`: `int`\n  - `"parser_config"`: `object`\n\n##### Request example\n\n```bash\ncurl --request PUT \\\n     --url http://{address}/api/v1/datasets/{dataset_id} \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'\n     {\n          "name": "updated_dataset"\n     }\'\n```\n\n##### Request parameters\n\n- `dataset_id`: (*Path parameter*)  \n  The ID of the dataset to update.\n- `"name"`: (*Body parameter*), `string`  \n  The revised name of the dataset.\n  - Basic Multilingual Plane (BMP) only\n  - Maximum 128 characters\n  - Case-insensitive\n- `"avatar"`: (*Body parameter*), `string`  \n  The updated base64 encoding of the avatar.\n  - Maximum 65535 characters\n- `"embedding_model"`: (*Body parameter*), `string`  \n  The updated embedding model name.  \n  - Ensure that `"chunk_count"` is `0` before updating `"embedding_model"`.\n  - Maximum 255 characters\n  - Must follow `model_name@model_factory` format\n- `"permission"`: (*Body parameter*), `string`  \n  The updated dataset permission. Available options:  \n  - `"me"`: (Default) Only you can manage the dataset.\n  - `"team"`: All team members can manage the dataset.\n- `"pagerank"`: (*Body parameter*), `int`  \n  refer to [Set page rank](https://ragflow.io/docs/dev/set_page_rank)\n  - Default: `0`\n  - Minimum: `0`\n  - Maximum: `100`\n- `"chunk_method"`: (*Body parameter*), `enum<string>`  \n  The chunking method for the dataset. Available options:  \n  - `"naive"`: General (default)\n  - `"book"`: Book\n  - `"email"`: Email\n  - `"laws"`: Laws\n  - `"manual"`: Manual\n  - `"one"`: One\n  - `"paper"`: Paper\n  - `"picture"`: Picture\n  - `"presentation"`: Presentation\n  - `"qa"`: Q&A\n  - `"table"`: Table\n  - `"tag"`: Tag\n- `"parser_config"`: (*Body parameter*), `object`  \n  The configuration settings for the dataset parser. The attributes in this JSON object vary with the selected `"chunk_method"`:  \n  - If `"chunk_method"` is `"naive"`, the `"parser_config"` object contains the following attributes:\n    - `"auto_keywords"`: `int`\n      - Defaults to `0`\n      - Minimum: `0`\n      - Maximum: `32`\n    - `"auto_questions"`: `int`\n      - Defaults to `0`\n      - Minimum: `0`\n      - Maximum: `10`\n    - `"chunk_token_num"`: `int`\n      - Defaults to `128`\n      - Minimum: `1`\n      - Maximum: `2048`\n    - `"delimiter"`: `string`\n      - Defaults to `"\\n"`.\n    - `"html4excel"`: `bool` Indicates whether to convert Excel documents into HTML format.\n      - Defaults to `false`\n    - `"layout_recognize"`: `string`\n      - Defaults to `DeepDOC`\n    - `"tag_kb_ids"`: `array<string>` refer to [Use tag set](https://ragflow.io/docs/dev/use_tag_sets)\n      - Must include a list of dataset IDs, where each dataset is parsed using the ​​Tag Chunk Method\n    - `"task_page_size"`: `int` For PDF only.\n      - Defaults to `12`\n      - Minimum: `1`\n    - `"raptor"`: `object` RAPTOR-specific settings.\n      - Defaults to: `{"use_raptor": false}`\n    - `"graphrag"`: `object` GRAPHRAG-specific settings.\n      - Defaults to: `{"use_graphrag": false}`\n  - If `"chunk_method"` is `"qa"`, `"manuel"`, `"paper"`, `"book"`, `"laws"`, or `"presentation"`, the `"parser_config"` object contains the following attribute:  \n    - `"raptor"`: `object` RAPTOR-specific settings.\n      - Defaults to: `{"use_raptor": false}`.\n  - If `"chunk_method"` is `"table"`, `"picture"`, `"one"`, or `"email"`, `"parser_config"` is an empty JSON object.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0 \n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "Can\'t change tenant_id."\n}\n```\n\n---\n\n### List datasets\n\n**GET** `/api/v1/datasets?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&name={dataset_name}&id={dataset_id}`\n\nLists datasets.\n\n#### Request\n\n- Method: GET\n- URL: `/api/v1/datasets?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&name={dataset_name}&id={dataset_id}`\n- Headers:\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n\n##### Request example\n\n```bash\ncurl --request GET \\\n     --url http://{address}/api/v1/datasets?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&name={dataset_name}&id={dataset_id} \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\'\n```\n\n##### Request parameters\n\n- `page`: (*Filter parameter*)  \n  Specifies the page on which the datasets will be displayed. Defaults to `1`.\n- `page_size`: (*Filter parameter*)  \n  The number of datasets on each page. Defaults to `30`.\n- `orderby`: (*Filter parameter*)  \n  The field by which datasets should be sorted. Available options:\n  - `create_time` (default)\n  - `update_time`\n- `desc`: (*Filter parameter*)  \n  Indicates whether the retrieved datasets should be sorted in descending order. Defaults to `true`.\n- `name`: (*Filter parameter*)  \n  The name of the dataset to retrieve.\n- `id`: (*Filter parameter*)  \n  The ID of the dataset to retrieve.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": [\n        {\n            "avatar": "",\n            "chunk_count": 59,\n            "create_date": "Sat, 14 Sep 2024 01:12:37 GMT",\n            "create_time": 1726276357324,\n            "created_by": "69736c5e723611efb51b0242ac120007",\n            "description": null,\n            "document_count": 1,\n            "embedding_model": "BAAI/bge-large-zh-v1.5",\n            "id": "6e211ee0723611efa10a0242ac120007",\n            "language": "English",\n            "name": "mysql",\n            "chunk_method": "naive",\n            "parser_config": {\n                "chunk_token_num": 8192,\n                "delimiter": "\\\\n",\n                "entity_types": [\n                    "organization",\n                    "person",\n                    "location",\n                    "event",\n                    "time"\n                ]\n            },\n            "permission": "me",\n            "similarity_threshold": 0.2,\n            "status": "1",\n            "tenant_id": "69736c5e723611efb51b0242ac120007",\n            "token_num": 12744,\n            "update_date": "Thu, 10 Oct 2024 04:07:23 GMT",\n            "update_time": 1728533243536,\n            "vector_similarity_weight": 0.3\n        }\n    ]\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "The dataset doesn\'t exist"\n}\n```\n\n---\n\n## FILE MANAGEMENT WITHIN DATASET\n\n---\n\n### Upload documents\n\n**POST** `/api/v1/datasets/{dataset_id}/documents`\n\nUploads documents to a specified dataset.\n\n#### Request\n\n- Method: POST\n- URL: `/api/v1/datasets/{dataset_id}/documents`\n- Headers:\n  - `\'Content-Type: multipart/form-data\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Form:\n  - `\'file=@{FILE_PATH}\'`\n\n##### Request example\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/datasets/{dataset_id}/documents \\\n     --header \'Content-Type: multipart/form-data\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --form \'file=@./test1.txt\' \\\n     --form \'file=@./test2.pdf\'\n```\n\n##### Request parameters\n\n- `dataset_id`: (*Path parameter*)  \n  The ID of the dataset to which the documents will be uploaded.\n- `\'file\'`: (*Body parameter*)  \n  A document to upload.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": [\n        {\n            "chunk_method": "naive",\n            "created_by": "69736c5e723611efb51b0242ac120007",\n            "dataset_id": "527fa74891e811ef9c650242ac120006",\n            "id": "b330ec2e91ec11efbc510242ac120004",\n            "location": "1.txt",\n            "name": "1.txt",\n            "parser_config": {\n                "chunk_token_num": 128,\n                "delimiter": "\\\\n",\n                "html4excel": false,\n                "layout_recognize": true,\n                "raptor": {\n                    "use_raptor": false\n                }\n            },\n            "run": "UNSTART",\n            "size": 17966,\n            "thumbnail": "",\n            "type": "doc"\n        }\n    ]\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 101,\n    "message": "No file part!"\n}\n```\n\n---\n\n### Update document\n\n**PUT** `/api/v1/datasets/{dataset_id}/documents/{document_id}`\n\nUpdates configurations for a specified document.\n\n#### Request\n\n- Method: PUT\n- URL: `/api/v1/datasets/{dataset_id}/documents/{document_id}`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"name"`:`string`\n  - `"meta_fields"`:`object`\n  - `"chunk_method"`:`string`\n  - `"parser_config"`:`object`\n\n##### Request example\n\n```bash\ncurl --request PUT \\\n     --url http://{address}/api/v1/datasets/{dataset_id}/info/{document_id} \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --header \'Content-Type: application/json\' \\\n     --data \'\n     {\n          "name": "manual.txt", \n          "chunk_method": "manual", \n          "parser_config": {"chunk_token_count": 128}\n     }\'\n\n```\n\n##### Request parameters\n\n- `dataset_id`: (*Path parameter*)  \n  The ID of the associated dataset.\n- `document_id`: (*Path parameter*)  \n  The ID of the document to update.\n- `"name"`: (*Body parameter*), `string`\n- `"meta_fields"`: (*Body parameter*), `dict[str, Any]` The meta fields of the document.\n- `"chunk_method"`: (*Body parameter*), `string`  \n  The parsing method to apply to the document:  \n  - `"naive"`: General\n  - `"manual`: Manual\n  - `"qa"`: Q&A\n  - `"table"`: Table\n  - `"paper"`: Paper\n  - `"book"`: Book\n  - `"laws"`: Laws\n  - `"presentation"`: Presentation\n  - `"picture"`: Picture\n  - `"one"`: One\n  - `"email"`: Email\n- `"parser_config"`: (*Body parameter*), `object`  \n  The configuration settings for the dataset parser. The attributes in this JSON object vary with the selected `"chunk_method"`:  \n  - If `"chunk_method"` is `"naive"`, the `"parser_config"` object contains the following attributes:\n    - `"chunk_token_count"`: Defaults to `256`.\n    - `"layout_recognize"`: Defaults to `true`.\n    - `"html4excel"`: Indicates whether to convert Excel documents into HTML format. Defaults to `false`.\n    - `"delimiter"`: Defaults to `"\\n"`.\n    - `"task_page_size"`: Defaults to `12`. For PDF only.\n    - `"raptor"`: RAPTOR-specific settings. Defaults to: `{"use_raptor": false}`.\n  - If `"chunk_method"` is `"qa"`, `"manuel"`, `"paper"`, `"book"`, `"laws"`, or `"presentation"`, the `"parser_config"` object contains the following attribute:\n    - `"raptor"`: RAPTOR-specific settings. Defaults to: `{"use_raptor": false}`.\n  - If `"chunk_method"` is `"table"`, `"picture"`, `"one"`, or `"email"`, `"parser_config"` is an empty JSON object.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "The dataset does not have the document."\n}\n```\n\n---\n\n### Download document\n\n**GET** `/api/v1/datasets/{dataset_id}/documents/{document_id}`\n\nDownloads a document from a specified dataset.\n\n#### Request\n\n- Method: GET\n- URL: `/api/v1/datasets/{dataset_id}/documents/{document_id}`\n- Headers:\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Output:\n  - `\'{PATH_TO_THE_FILE}\'`\n\n##### Request example\n\n```bash\ncurl --request GET \\\n     --url http://{address}/api/v1/datasets/{dataset_id}/documents/{document_id} \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --output ./ragflow.txt\n```\n\n##### Request parameters\n\n- `dataset_id`: (*Path parameter*)  \n  The associated dataset ID.\n- `documents_id`: (*Path parameter*)  \n  The ID of the document to download.\n\n#### Response\n\nSuccess:\n\n```json\nThis is a test to verify the file download feature.\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "You do not own the dataset 7898da028a0511efbf750242ac1220005."\n}\n```\n\n---\n\n### List documents\n\n**GET** `/api/v1/datasets/{dataset_id}/documents?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&keywords={keywords}&id={document_id}&name={document_name}`\n\nLists documents in a specified dataset.\n\n#### Request\n\n- Method: GET\n- URL: `/api/v1/datasets/{dataset_id}/documents?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&keywords={keywords}&id={document_id}&name={document_name}`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n\n##### Request example\n\n```bash\ncurl --request GET \\\n     --url http://{address}/api/v1/datasets/{dataset_id}/documents?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&keywords={keywords}&id={document_id}&name={document_name} \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\'\n```\n\n##### Request parameters\n\n- `dataset_id`: (*Path parameter*)  \n  The associated dataset ID.\n- `keywords`: (*Filter parameter*), `string`  \n  The keywords used to match document titles.\n- `page`: (*Filter parameter*), `integer`\n  Specifies the page on which the documents will be displayed. Defaults to `1`.\n- `page_size`: (*Filter parameter*), `integer`  \n  The maximum number of documents on each page. Defaults to `30`.\n- `orderby`: (*Filter parameter*), `string`  \n  The field by which documents should be sorted. Available options:\n  - `create_time` (default)\n  - `update_time`\n- `desc`: (*Filter parameter*), `boolean`  \n  Indicates whether the retrieved documents should be sorted in descending order. Defaults to `true`.\n- `id`: (*Filter parameter*), `string`  \n  The ID of the document to retrieve.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": {\n        "docs": [\n            {\n                "chunk_count": 0,\n                "create_date": "Mon, 14 Oct 2024 09:11:01 GMT",\n                "create_time": 1728897061948,\n                "created_by": "69736c5e723611efb51b0242ac120007",\n                "id": "3bcfbf8a8a0c11ef8aba0242ac120006",\n                "knowledgebase_id": "7898da028a0511efbf750242ac120005",\n                "location": "Test_2.txt",\n                "name": "Test_2.txt",\n                "parser_config": {\n                    "chunk_token_count": 128,\n                    "delimiter": "\\n",\n                    "layout_recognize": true,\n                    "task_page_size": 12\n                },\n                "chunk_method": "naive",\n                "process_begin_at": null,\n                "process_duation": 0.0,\n                "progress": 0.0,\n                "progress_msg": "",\n                "run": "0",\n                "size": 7,\n                "source_type": "local",\n                "status": "1",\n                "thumbnail": null,\n                "token_count": 0,\n                "type": "doc",\n                "update_date": "Mon, 14 Oct 2024 09:11:01 GMT",\n                "update_time": 1728897061948\n            }\n        ],\n        "total": 1\n    }\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "You don\'t own the dataset 7898da028a0511efbf750242ac1220005. "\n}\n```\n\n---\n\n### Delete documents\n\n**DELETE** `/api/v1/datasets/{dataset_id}/documents`\n\nDeletes documents by ID.\n\n#### Request\n\n- Method: DELETE\n- URL: `/api/v1/datasets/{dataset_id}/documents`\n- Headers:\n  - `\'Content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"ids"`: `list[string]`\n\n##### Request example\n\n```bash\ncurl --request DELETE \\\n     --url http://{address}/api/v1/datasets/{dataset_id}/documents \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'\n     {\n          "ids": ["id_1","id_2"]\n     }\'\n```\n\n##### Request parameters\n\n- `dataset_id`: (*Path parameter*)  \n  The associated dataset ID.\n- `"ids"`: (*Body parameter*), `list[string]`  \n  The IDs of the documents to delete. If it is not specified, all documents in the specified dataset will be deleted.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0\n}.\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "You do not own the dataset 7898da028a0511efbf750242ac1220005."\n}\n```\n\n---\n\n### Parse documents\n\n**POST** `/api/v1/datasets/{dataset_id}/chunks`\n\nParses documents in a specified dataset.\n\n#### Request\n\n- Method: POST\n- URL: `/api/v1/datasets/{dataset_id}/chunks`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"document_ids"`: `list[string]`\n\n##### Request example\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/datasets/{dataset_id}/chunks \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'\n     {\n          "document_ids": ["97a5f1c2759811efaa500242ac120004","97ad64b6759811ef9fc30242ac120004"]\n     }\'\n```\n\n##### Request parameters\n\n- `dataset_id`: (*Path parameter*)  \n  The dataset ID.\n- `"document_ids"`: (*Body parameter*), `list[string]`, *Required*  \n  The IDs of the documents to parse.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "`document_ids` is required"\n}\n```\n\n---\n\n### Stop parsing documents\n\n**DELETE** `/api/v1/datasets/{dataset_id}/chunks`\n\nStops parsing specified documents.\n\n#### Request\n\n- Method: DELETE\n- URL: `/api/v1/datasets/{dataset_id}/chunks`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"document_ids"`: `list[string]`\n\n##### Request example\n\n```bash\ncurl --request DELETE \\\n     --url http://{address}/api/v1/datasets/{dataset_id}/chunks \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'\n     {\n          "document_ids": ["97a5f1c2759811efaa500242ac120004","97ad64b6759811ef9fc30242ac120004"]\n     }\'\n```\n\n##### Request parameters\n\n- `dataset_id`: (*Path parameter*)  \n  The associated dataset ID.\n- `"document_ids"`: (*Body parameter*), `list[string]`, *Required*  \n  The IDs of the documents for which the parsing should be stopped.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "`document_ids` is required"\n}\n```\n\n---\n\n## CHUNK MANAGEMENT WITHIN DATASET\n\n---\n\n### Add chunk\n\n**POST** `/api/v1/datasets/{dataset_id}/documents/{document_id}/chunks`\n\nAdds a chunk to a specified document in a specified dataset.\n\n#### Request\n\n- Method: POST\n- URL: `/api/v1/datasets/{dataset_id}/documents/{document_id}/chunks`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"content"`: `string`\n  - `"important_keywords"`: `list[string]`\n\n##### Request example\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/datasets/{dataset_id}/documents/{document_id}/chunks \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'\n     {\n          "content": "<CHUNK_CONTENT_HERE>"\n     }\'\n```\n\n##### Request parameters\n\n- `dataset_id`: (*Path parameter*)  \n  The associated dataset ID.\n- `document_ids`: (*Path parameter*)  \n  The associated document ID.\n- `"content"`: (*Body parameter*), `string`, *Required*  \n  The text content of the chunk.\n- `"important_keywords`(*Body parameter*), `list[string]`  \n  The key terms or phrases to tag with the chunk.\n- `"questions"`(*Body parameter*), `list[string]`\n  If there is a given question, the embedded chunks will be based on them\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": {\n        "chunk": {\n            "content": "who are you",\n            "create_time": "2024-12-30 16:59:55",\n            "create_timestamp": 1735549195.969164,\n            "dataset_id": "72f36e1ebdf411efb7250242ac120006",\n            "document_id": "61d68474be0111ef98dd0242ac120006",\n            "id": "12ccdc56e59837e5",\n            "important_keywords": [],\n            "questions": []\n        }\n    }\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "`content` is required"\n}\n```\n\n---\n\n### List chunks\n\n**GET** `/api/v1/datasets/{dataset_id}/documents/{document_id}/chunks?keywords={keywords}&page={page}&page_size={page_size}&id={id}`\n\nLists chunks in a specified document.\n\n#### Request\n\n- Method: GET\n- URL: `/api/v1/datasets/{dataset_id}/documents/{document_id}/chunks?keywords={keywords}&page={page}&page_size={page_size}&id={chunk_id}`\n- Headers:\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n\n##### Request example\n\n```bash\ncurl --request GET \\\n     --url http://{address}/api/v1/datasets/{dataset_id}/documents/{document_id}/chunks?keywords={keywords}&page={page}&page_size={page_size}&id={chunk_id} \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \n```\n\n##### Request parameters\n\n- `dataset_id`: (*Path parameter*)  \n  The associated dataset ID.\n- `document_id`: (*Path parameter*)  \n  The associated document ID.\n- `keywords`(*Filter parameter*), `string`  \n  The keywords used to match chunk content.\n- `page`(*Filter parameter*), `integer`  \n  Specifies the page on which the chunks will be displayed. Defaults to `1`.\n- `page_size`(*Filter parameter*), `integer`  \n  The maximum number of chunks on each page. Defaults to `1024`.\n- `id`(*Filter parameter*), `string`  \n  The ID of the chunk to retrieve.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": {\n        "chunks": [\n            {\n                "available": true,\n                "content": "This is a test content.",\n                "docnm_kwd": "1.txt",\n                "document_id": "b330ec2e91ec11efbc510242ac120004",\n                "id": "b48c170e90f70af998485c1065490726",\n                "image_id": "",\n                "important_keywords": "",\n                "positions": [\n                    ""\n                ]\n            }\n        ],\n        "doc": {\n            "chunk_count": 1,\n            "chunk_method": "naive",\n            "create_date": "Thu, 24 Oct 2024 09:45:27 GMT",\n            "create_time": 1729763127646,\n            "created_by": "69736c5e723611efb51b0242ac120007",\n            "dataset_id": "527fa74891e811ef9c650242ac120006",\n            "id": "b330ec2e91ec11efbc510242ac120004",\n            "location": "1.txt",\n            "name": "1.txt",\n            "parser_config": {\n                "chunk_token_num": 128,\n                "delimiter": "\\\\n",\n                "html4excel": false,\n                "layout_recognize": true,\n                "raptor": {\n                    "use_raptor": false\n                }\n            },\n            "process_begin_at": "Thu, 24 Oct 2024 09:56:44 GMT",\n            "process_duation": 0.54213,\n            "progress": 0.0,\n            "progress_msg": "Task dispatched...",\n            "run": "2",\n            "size": 17966,\n            "source_type": "local",\n            "status": "1",\n            "thumbnail": "",\n            "token_count": 8,\n            "type": "doc",\n            "update_date": "Thu, 24 Oct 2024 11:03:15 GMT",\n            "update_time": 1729767795721\n        },\n        "total": 1\n    }\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "You don\'t own the document 5c5999ec7be811ef9cab0242ac12000e5."\n}\n```\n\n---\n\n### Delete chunks\n\n**DELETE** `/api/v1/datasets/{dataset_id}/documents/{document_id}/chunks`\n\nDeletes chunks by ID.\n\n#### Request\n\n- Method: DELETE\n- URL: `/api/v1/datasets/{dataset_id}/documents/{document_id}/chunks`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"chunk_ids"`: `list[string]`\n\n##### Request example\n\n```bash\ncurl --request DELETE \\\n     --url http://{address}/api/v1/datasets/{dataset_id}/documents/{document_id}/chunks \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'\n     {\n          "chunk_ids": ["test_1", "test_2"]\n     }\'\n```\n\n##### Request parameters\n\n- `dataset_id`: (*Path parameter*)  \n  The associated dataset ID.\n- `document_ids`: (*Path parameter*)  \n  The associated document ID.\n- `"chunk_ids"`: (*Body parameter*), `list[string]`  \n  The IDs of the chunks to delete. If it is not specified, all chunks of the specified document will be deleted.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "`chunk_ids` is required"\n}\n```\n\n---\n\n### Update chunk\n\n**PUT** `/api/v1/datasets/{dataset_id}/documents/{document_id}/chunks/{chunk_id}`\n\nUpdates content or configurations for a specified chunk.\n\n#### Request\n\n- Method: PUT\n- URL: `/api/v1/datasets/{dataset_id}/documents/{document_id}/chunks/{chunk_id}`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"content"`: `string`\n  - `"important_keywords"`: `list[string]`\n  - `"available"`: `boolean`\n\n##### Request example\n\n```bash\ncurl --request PUT \\\n     --url http://{address}/api/v1/datasets/{dataset_id}/documents/{document_id}/chunks/{chunk_id} \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'\n     {   \n          "content": "ragflow123",  \n          "important_keywords": []  \n     }\'\n```\n\n##### Request parameters\n\n- `dataset_id`: (*Path parameter*)  \n  The associated dataset ID.\n- `document_ids`: (*Path parameter*)  \n  The associated document ID.\n- `chunk_id`: (*Path parameter*)  \n  The ID of the chunk to update.\n- `"content"`: (*Body parameter*), `string`  \n  The text content of the chunk.\n- `"important_keywords"`: (*Body parameter*), `list[string]`  \n  A list of key terms or phrases to tag with the chunk.\n- `"available"`: (*Body parameter*) `boolean`  \n  The chunk\'s availability status in the dataset. Value options:  \n  - `true`: Available (default)\n  - `false`: Unavailable\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "Can\'t find this chunk 29a2d9987e16ba331fb4d7d30d99b71d2"\n}\n```\n\n---\n\n### Retrieve chunks\n\n**POST** `/api/v1/retrieval`\n\nRetrieves chunks from specified datasets.\n\n#### Request\n\n- Method: POST\n- URL: `/api/v1/retrieval`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"question"`: `string`  \n  - `"dataset_ids"`: `list[string]`  \n  - `"document_ids"`: `list[string]`\n  - `"page"`: `integer`  \n  - `"page_size"`: `integer`  \n  - `"similarity_threshold"`: `float`  \n  - `"vector_similarity_weight"`: `float`  \n  - `"top_k"`: `integer`  \n  - `"rerank_id"`: `string`  \n  - `"keyword"`: `boolean`  \n  - `"highlight"`: `boolean`\n\n##### Request example\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/retrieval \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'\n     {\n          "question": "What is advantage of ragflow?",\n          "dataset_ids": ["b2a62730759d11ef987d0242ac120004"],\n          "document_ids": ["77df9ef4759a11ef8bdd0242ac120004"]\n     }\'\n```\n\n##### Request parameter\n\n- `"question"`: (*Body parameter*), `string`, *Required*  \n  The user query or query keywords.\n- `"dataset_ids"`: (*Body parameter*) `list[string]`  \n  The IDs of the datasets to search. If you do not set this argument, ensure that you set `"document_ids"`.\n- `"document_ids"`: (*Body parameter*), `list[string]`  \n  The IDs of the documents to search. Ensure that all selected documents use the same embedding model. Otherwise, an error will occur. If you do not set this argument, ensure that you set `"dataset_ids"`.\n- `"page"`: (*Body parameter*), `integer`  \n  Specifies the page on which the chunks will be displayed. Defaults to `1`.\n- `"page_size"`: (*Body parameter*)  \n  The maximum number of chunks on each page. Defaults to `30`.\n- `"similarity_threshold"`: (*Body parameter*)  \n  The minimum similarity score. Defaults to `0.2`.\n- `"vector_similarity_weight"`: (*Body parameter*), `float`  \n  The weight of vector cosine similarity. Defaults to `0.3`. If x represents the weight of vector cosine similarity, then (1 - x) is the term similarity weight.\n- `"top_k"`: (*Body parameter*), `integer`  \n  The number of chunks engaged in vector cosine computation. Defaults to `1024`.\n- `"rerank_id"`: (*Body parameter*), `integer`  \n  The ID of the rerank model.\n- `"keyword"`: (*Body parameter*), `boolean`  \n  Indicates whether to enable keyword-based matching:  \n  - `true`: Enable keyword-based matching.\n  - `false`: Disable keyword-based matching (default).\n- `"highlight"`: (*Body parameter*), `boolean`  \n  Specifies whether to enable highlighting of matched terms in the results:  \n  - `true`: Enable highlighting of matched terms.\n  - `false`: Disable highlighting of matched terms (default).\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": {\n        "chunks": [\n            {\n                "content": "ragflow content",\n                "content_ltks": "ragflow content",\n                "document_id": "5c5999ec7be811ef9cab0242ac120005",\n                "document_keyword": "1.txt",\n                "highlight": "<em>ragflow</em> content",\n                "id": "d78435d142bd5cf6704da62c778795c5",\n                "image_id": "",\n                "important_keywords": [\n                    ""\n                ],\n                "kb_id": "c7ee74067a2c11efb21c0242ac120006",\n                "positions": [\n                    ""\n                ],\n                "similarity": 0.9669436601210759,\n                "term_similarity": 1.0,\n                "vector_similarity": 0.8898122004035864\n            }\n        ],\n        "doc_aggs": [\n            {\n                "count": 1,\n                "doc_id": "5c5999ec7be811ef9cab0242ac120005",\n                "doc_name": "1.txt"\n            }\n        ],\n        "total": 1\n    }\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "`datasets` is required."\n}\n```\n\n---\n\n## CHAT ASSISTANT MANAGEMENT\n\n---\n\n### Create chat assistant\n\n**POST** `/api/v1/chats`\n\nCreates a chat assistant.\n\n#### Request\n\n- Method: POST\n- URL: `/api/v1/chats`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"name"`: `string`\n  - `"avatar"`: `string`\n  - `"dataset_ids"`: `list[string]`\n  - `"llm"`: `object`\n  - `"prompt"`: `object`\n\n##### Request example\n\n```shell\ncurl --request POST \\\n     --url http://{address}/api/v1/chats \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'{\n    "dataset_ids": ["0b2cbc8c877f11ef89070242ac120005"],\n    "name":"new_chat_1"\n}\'\n```\n\n##### Request parameters\n\n- `"name"`: (*Body parameter*), `string`, *Required*  \n  The name of the chat assistant.\n- `"avatar"`: (*Body parameter*), `string`  \n  Base64 encoding of the avatar.\n- `"dataset_ids"`: (*Body parameter*), `list[string]`  \n  The IDs of the associated datasets.\n- `"llm"`: (*Body parameter*), `object`  \n  The LLM settings for the chat assistant to create. If it is not explicitly set, a JSON object with the following values will be generated as the default. An `llm` JSON object contains the following attributes:  \n  - `"model_name"`, `string`  \n    The chat model name. If not set, the user\'s default chat model will be used.  \n  - `"temperature"`: `float`  \n    Controls the randomness of the model\'s predictions. A lower temperature results in more conservative responses, while a higher temperature yields more creative and diverse responses. Defaults to `0.1`.  \n  - `"top_p"`: `float`  \n    Also known as “nucleus sampling”, this parameter sets a threshold to select a smaller set of words to sample from. It focuses on the most likely words, cutting off the less probable ones. Defaults to `0.3`  \n  - `"presence_penalty"`: `float`  \n    This discourages the model from repeating the same information by penalizing words that have already appeared in the conversation. Defaults to `0.4`.\n  - `"frequency penalty"`: `float`  \n    Similar to the presence penalty, this reduces the model’s tendency to repeat the same words frequently. Defaults to `0.7`.\n- `"prompt"`: (*Body parameter*), `object`  \n  Instructions for the LLM to follow. If it is not explicitly set, a JSON object with the following values will be generated as the default. A `prompt` JSON object contains the following attributes:  \n  - `"similarity_threshold"`: `float` RAGFlow employs either a combination of weighted keyword similarity and weighted vector cosine similarity, or a combination of weighted keyword similarity and weighted reranking score during retrieval. This argument sets the threshold for similarities between the user query and chunks. If a similarity score falls below this threshold, the corresponding chunk will be excluded from the results. The default value is `0.2`.\n  - `"keywords_similarity_weight"`: `float` This argument sets the weight of keyword similarity in the hybrid similarity score with vector cosine similarity or reranking model similarity. By adjusting this weight, you can control the influence of keyword similarity in relation to other similarity measures. The default value is `0.7`.\n  - `"top_n"`: `int` This argument specifies the number of top chunks with similarity scores above the `similarity_threshold` that are fed to the LLM. The LLM will *only* access these \'top N\' chunks.  The default value is `6`.\n  - `"variables"`: `object[]` This argument lists the variables to use in the \'System\' field of **Chat Configurations**. Note that:  \n    - `"knowledge"` is a reserved variable, which represents the retrieved chunks.\n    - All the variables in \'System\' should be curly bracketed.\n    - The default value is `[{"key": "knowledge", "optional": true}]`.\n  - `"rerank_model"`: `string` If it is not specified, vector cosine similarity will be used; otherwise, reranking score will be used.\n  - `top_k`: `int` Refers to the process of reordering or selecting the top-k items from a list or set based on a specific ranking criterion. Default to 1024.\n  - `"empty_response"`: `string` If nothing is retrieved in the dataset for the user\'s question, this will be used as the response. To allow the LLM to improvise when nothing is found, leave this blank.\n  - `"opener"`: `string` The opening greeting for the user. Defaults to `"Hi! I am your assistant, can I help you?"`.\n  - `"show_quote`: `boolean` Indicates whether the source of text should be displayed. Defaults to `true`.\n  - `"prompt"`: `string` The prompt content.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": {\n        "avatar": "",\n        "create_date": "Thu, 24 Oct 2024 11:18:29 GMT",\n        "create_time": 1729768709023,\n        "dataset_ids": [\n            "527fa74891e811ef9c650242ac120006"\n        ],\n        "description": "A helpful Assistant",\n        "do_refer": "1",\n        "id": "b1f2f15691f911ef81180242ac120003",\n        "language": "English",\n        "llm": {\n            "frequency_penalty": 0.7,\n            "model_name": "qwen-plus@Tongyi-Qianwen",\n            "presence_penalty": 0.4,\n            "temperature": 0.1,\n            "top_p": 0.3\n        },\n        "name": "12234",\n        "prompt": {\n            "empty_response": "Sorry! No relevant content was found in the knowledge base!",\n            "keywords_similarity_weight": 0.3,\n            "opener": "Hi! I\'m your assistant, what can I do for you?",\n            "prompt": "You are an intelligent assistant. Please summarize the content of the knowledge base to answer the question. Please list the data in the knowledge base and answer in detail. When all knowledge base content is irrelevant to the question, your answer must include the sentence \\"The answer you are looking for is not found in the knowledge base!\\" Answers need to consider chat history.\\n ",\n            "rerank_model": "",\n            "similarity_threshold": 0.2,\n            "top_n": 6,\n            "variables": [\n                {\n                    "key": "knowledge",\n                    "optional": false\n                }\n            ]\n        },\n        "prompt_type": "simple",\n        "status": "1",\n        "tenant_id": "69736c5e723611efb51b0242ac120007",\n        "top_k": 1024,\n        "update_date": "Thu, 24 Oct 2024 11:18:29 GMT",\n        "update_time": 1729768709023\n    }\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "Duplicated chat name in creating dataset."\n}\n```\n\n---\n\n### Update chat assistant\n\n**PUT** `/api/v1/chats/{chat_id}`\n\nUpdates configurations for a specified chat assistant.\n\n#### Request\n\n- Method: PUT\n- URL: `/api/v1/chats/{chat_id}`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"name"`: `string`\n  - `"avatar"`: `string`\n  - `"dataset_ids"`: `list[string]`\n  - `"llm"`: `object`\n  - `"prompt"`: `object`\n\n##### Request example\n\n```bash\ncurl --request PUT \\\n     --url http://{address}/api/v1/chats/{chat_id} \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'\n     {\n          "name":"Test"\n     }\'\n```\n\n#### Parameters\n\n- `chat_id`: (*Path parameter*)  \n  The ID of the chat assistant to update.\n- `"name"`: (*Body parameter*), `string`, *Required*  \n  The revised name of the chat assistant.\n- `"avatar"`: (*Body parameter*), `string`  \n  Base64 encoding of the avatar.\n- `"dataset_ids"`: (*Body parameter*), `list[string]`  \n  The IDs of the associated datasets.\n- `"llm"`: (*Body parameter*), `object`  \n  The LLM settings for the chat assistant to create. If it is not explicitly set, a dictionary with the following values will be generated as the default. An `llm` object contains the following attributes:  \n  - `"model_name"`, `string`  \n    The chat model name. If not set, the user\'s default chat model will be used.  \n  - `"temperature"`: `float`  \n    Controls the randomness of the model\'s predictions. A lower temperature results in more conservative responses, while a higher temperature yields more creative and diverse responses. Defaults to `0.1`.  \n  - `"top_p"`: `float`  \n    Also known as “nucleus sampling”, this parameter sets a threshold to select a smaller set of words to sample from. It focuses on the most likely words, cutting off the less probable ones. Defaults to `0.3`  \n  - `"presence_penalty"`: `float`  \n    This discourages the model from repeating the same information by penalizing words that have already appeared in the conversation. Defaults to `0.2`.\n  - `"frequency penalty"`: `float`  \n    Similar to the presence penalty, this reduces the model’s tendency to repeat the same words frequently. Defaults to `0.7`.\n- `"prompt"`: (*Body parameter*), `object`  \n  Instructions for the LLM to follow.  A `prompt` object contains the following attributes:  \n  - `"similarity_threshold"`: `float` RAGFlow employs either a combination of weighted keyword similarity and weighted vector cosine similarity, or a combination of weighted keyword similarity and weighted rerank score during retrieval. This argument sets the threshold for similarities between the user query and chunks. If a similarity score falls below this threshold, the corresponding chunk will be excluded from the results. The default value is `0.2`.\n  - `"keywords_similarity_weight"`: `float` This argument sets the weight of keyword similarity in the hybrid similarity score with vector cosine similarity or reranking model similarity. By adjusting this weight, you can control the influence of keyword similarity in relation to other similarity measures. The default value is `0.7`.\n  - `"top_n"`: `int` This argument specifies the number of top chunks with similarity scores above the `similarity_threshold` that are fed to the LLM. The LLM will *only* access these \'top N\' chunks.  The default value is `8`.\n  - `"variables"`: `object[]` This argument lists the variables to use in the \'System\' field of **Chat Configurations**. Note that:  \n    - `"knowledge"` is a reserved variable, which represents the retrieved chunks.\n    - All the variables in \'System\' should be curly bracketed.\n    - The default value is `[{"key": "knowledge", "optional": true}]`\n  - `"rerank_model"`: `string` If it is not specified, vector cosine similarity will be used; otherwise, reranking score will be used.\n  - `"empty_response"`: `string` If nothing is retrieved in the dataset for the user\'s question, this will be used as the response. To allow the LLM to improvise when nothing is found, leave this blank.\n  - `"opener"`: `string` The opening greeting for the user. Defaults to `"Hi! I am your assistant, can I help you?"`.\n  - `"show_quote`: `boolean` Indicates whether the source of text should be displayed. Defaults to `true`.\n  - `"prompt"`: `string` The prompt content.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "Duplicated chat name in updating dataset."\n}\n```\n\n---\n\n### Delete chat assistants\n\n**DELETE** `/api/v1/chats`\n\nDeletes chat assistants by ID.\n\n#### Request\n\n- Method: DELETE\n- URL: `/api/v1/chats`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"ids"`: `list[string]`\n\n##### Request example\n\n```bash\ncurl --request DELETE \\\n     --url http://{address}/api/v1/chats \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'\n     {\n          "ids": ["test_1", "test_2"]\n     }\'\n```\n\n##### Request parameters\n\n- `"ids"`: (*Body parameter*), `list[string]`  \n  The IDs of the chat assistants to delete. If it is not specified, all chat assistants in the system will be deleted.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "ids are required"\n}\n```\n\n---\n\n### List chat assistants\n\n**GET** `/api/v1/chats?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&name={chat_name}&id={chat_id}`\n\nLists chat assistants.\n\n#### Request\n\n- Method: GET\n- URL: `/api/v1/chats?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&name={chat_name}&id={chat_id}`\n- Headers:\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n\n##### Request example\n\n```bash\ncurl --request GET \\\n     --url http://{address}/api/v1/chats?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&name={chat_name}&id={chat_id} \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\'\n```\n\n##### Request parameters\n\n- `page`: (*Filter parameter*), `integer`  \n  Specifies the page on which the chat assistants will be displayed. Defaults to `1`.\n- `page_size`: (*Filter parameter*), `integer`  \n  The number of chat assistants on each page. Defaults to `30`.\n- `orderby`: (*Filter parameter*), `string`  \n  The attribute by which the results are sorted. Available options:\n  - `create_time` (default)\n  - `update_time`\n- `desc`: (*Filter parameter*), `boolean`  \n  Indicates whether the retrieved chat assistants should be sorted in descending order. Defaults to `true`.\n- `id`: (*Filter parameter*), `string`  \n  The ID of the chat assistant to retrieve.\n- `name`: (*Filter parameter*), `string`  \n  The name of the chat assistant to retrieve.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": [\n        {\n            "avatar": "",\n            "create_date": "Fri, 18 Oct 2024 06:20:06 GMT",\n            "create_time": 1729232406637,\n            "description": "A helpful Assistant",\n            "do_refer": "1",\n            "id": "04d0d8e28d1911efa3630242ac120006",\n            "dataset_ids": ["527fa74891e811ef9c650242ac120006"],\n            "language": "English",\n            "llm": {\n                "frequency_penalty": 0.7,\n                "model_name": "qwen-plus@Tongyi-Qianwen",\n                "presence_penalty": 0.4,\n                "temperature": 0.1,\n                "top_p": 0.3\n            },\n            "name": "13243",\n            "prompt": {\n                "empty_response": "Sorry! No relevant content was found in the knowledge base!",\n                "keywords_similarity_weight": 0.3,\n                "opener": "Hi! I\'m your assistant, what can I do for you?",\n                "prompt": "You are an intelligent assistant. Please summarize the content of the knowledge base to answer the question. Please list the data in the knowledge base and answer in detail. When all knowledge base content is irrelevant to the question, your answer must include the sentence \\"The answer you are looking for is not found in the knowledge base!\\" Answers need to consider chat history.\\n",\n                "rerank_model": "",\n                "similarity_threshold": 0.2,\n                "top_n": 6,\n                "variables": [\n                    {\n                        "key": "knowledge",\n                        "optional": false\n                    }\n                ]\n            },\n            "prompt_type": "simple",\n            "status": "1",\n            "tenant_id": "69736c5e723611efb51b0242ac120007",\n            "top_k": 1024,\n            "update_date": "Fri, 18 Oct 2024 06:20:06 GMT",\n            "update_time": 1729232406638\n        }\n    ]\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "The chat doesn\'t exist"\n}\n```\n\n---\n\n## SESSION MANAGEMENT\n\n---\n\n### Create session with chat assistant\n\n**POST** `/api/v1/chats/{chat_id}/sessions`\n\nCreates a session with a chat assistant.\n\n#### Request\n\n- Method: POST\n- URL: `/api/v1/chats/{chat_id}/sessions`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"name"`: `string`\n  - `"user_id"`: `string` (optional)\n\n##### Request example\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/chats/{chat_id}/sessions \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'\n     {\n          "name": "new session"\n     }\'\n```\n\n##### Request parameters\n\n- `chat_id`: (*Path parameter*)  \n  The ID of the associated chat assistant.\n- `"name"`: (*Body parameter*), `string`  \n  The name of the chat session to create.\n- `"user_id"`: (*Body parameter*), `string`  \n  Optional user-defined ID.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": {\n        "chat_id": "2ca4b22e878011ef88fe0242ac120005",\n        "create_date": "Fri, 11 Oct 2024 08:46:14 GMT",\n        "create_time": 1728636374571,\n        "id": "4606b4ec87ad11efbc4f0242ac120006",\n        "messages": [\n            {\n                "content": "Hi! I am your assistant, can I help you?",\n                "role": "assistant"\n            }\n        ],\n        "name": "new session",\n        "update_date": "Fri, 11 Oct 2024 08:46:14 GMT",\n        "update_time": 1728636374571\n    }\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "Name cannot be empty."\n}\n```\n\n---\n\n### Update chat assistant\'s session\n\n**PUT** `/api/v1/chats/{chat_id}/sessions/{session_id}`\n\nUpdates a session of a specified chat assistant.\n\n#### Request\n\n- Method: PUT\n- URL: `/api/v1/chats/{chat_id}/sessions/{session_id}`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"name`: `string`\n  - `"user_id`: `string` (optional)\n\n##### Request example\n\n```bash\ncurl --request PUT \\\n     --url http://{address}/api/v1/chats/{chat_id}/sessions/{session_id} \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'\n     {\n          "name": "<REVISED_SESSION_NAME_HERE>"\n     }\'\n```\n\n##### Request Parameter\n\n- `chat_id`: (*Path parameter*)  \n  The ID of the associated chat assistant.\n- `session_id`: (*Path parameter*)  \n  The ID of the session to update.\n- `"name"`: (*Body Parameter*), `string`  \n  The revised name of the session.\n- `"user_id"`: (*Body parameter*), `string`  \n  Optional user-defined ID.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "Name cannot be empty."\n}\n```\n\n---\n\n### List chat assistant\'s sessions\n\n**GET** `/api/v1/chats/{chat_id}/sessions?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&name={session_name}&id={session_id}`\n\nLists sessions associated with a specified chat assistant.\n\n#### Request\n\n- Method: GET\n- URL: `/api/v1/chats/{chat_id}/sessions?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&name={session_name}&id={session_id}&user_id={user_id}`\n- Headers:\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n\n##### Request example\n\n```bash\ncurl --request GET \\\n     --url http://{address}/api/v1/chats/{chat_id}/sessions?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&name={session_name}&id={session_id} \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\'\n```\n\n##### Request Parameters\n\n- `chat_id`: (*Path parameter*)  \n  The ID of the associated chat assistant.\n- `page`: (*Filter parameter*), `integer`  \n  Specifies the page on which the sessions will be displayed. Defaults to `1`.\n- `page_size`: (*Filter parameter*), `integer`  \n  The number of sessions on each page. Defaults to `30`.\n- `orderby`: (*Filter parameter*), `string`  \n  The field by which sessions should be sorted. Available options:  \n  - `create_time` (default)\n  - `update_time`\n- `desc`: (*Filter parameter*), `boolean`  \n  Indicates whether the retrieved sessions should be sorted in descending order. Defaults to `true`.\n- `name`: (*Filter parameter*) `string`  \n  The name of the chat session to retrieve.\n- `id`: (*Filter parameter*), `string`  \n  The ID of the chat session to retrieve.\n- `user_id`: (*Filter parameter*), `string`  \n  The optional user-defined ID passed in when creating session.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": [\n        {\n            "chat": "2ca4b22e878011ef88fe0242ac120005",\n            "create_date": "Fri, 11 Oct 2024 08:46:43 GMT",\n            "create_time": 1728636403974,\n            "id": "578d541e87ad11ef96b90242ac120006",\n            "messages": [\n                {\n                    "content": "Hi! I am your assistant, can I help you?",\n                    "role": "assistant"\n                }\n            ],\n            "name": "new session",\n            "update_date": "Fri, 11 Oct 2024 08:46:43 GMT",\n            "update_time": 1728636403974\n        }\n    ]\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "The session doesn\'t exist"\n}\n```\n\n---\n\n### Delete chat assistant\'s sessions\n\n**DELETE** `/api/v1/chats/{chat_id}/sessions`\n\nDeletes sessions of a chat assistant by ID.\n\n#### Request\n\n- Method: DELETE\n- URL: `/api/v1/chats/{chat_id}/sessions`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"ids"`: `list[string]`\n\n##### Request example\n\n```bash\ncurl --request DELETE \\\n     --url http://{address}/api/v1/chats/{chat_id}/sessions \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'\n     {\n          "ids": ["test_1", "test_2"]\n     }\'\n```\n\n##### Request Parameters\n\n- `chat_id`: (*Path parameter*)  \n  The ID of the associated chat assistant.\n- `"ids"`: (*Body Parameter*), `list[string]`  \n  The IDs of the sessions to delete. If it is not specified, all sessions associated with the specified chat assistant will be deleted.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "The chat doesn\'t own the session"\n}\n```\n\n---\n\n### Converse with chat assistant\n\n**POST** `/api/v1/chats/{chat_id}/completions`\n\nAsks a specified chat assistant a question to start an AI-powered conversation.\n\n:::tip NOTE\n\n- In streaming mode, not all responses include a reference, as this depends on the system\'s judgement.\n- In streaming mode, the last message is an empty message:\n\n  ```json\n  data:\n  {\n    "code": 0,\n    "data": true\n  }\n  ```\n\n:::\n\n#### Request\n\n- Method: POST\n- URL: `/api/v1/chats/{chat_id}/completions`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"question"`: `string`\n  - `"stream"`: `boolean`\n  - `"session_id"`: `string` (optional)\n  - `"user_id`: `string` (optional)\n\n##### Request example\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/chats/{chat_id}/completions \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data-binary \'\n     {\n     }\'\n```\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/chats/{chat_id}/completions \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data-binary \'\n     {\n          "question": "Who are you",\n          "stream": true,\n          "session_id":"9fa7691cb85c11ef9c5f0242ac120005"\n     }\'\n```\n\n##### Request Parameters\n\n- `chat_id`: (*Path parameter*)  \n  The ID of the associated chat assistant.\n- `"question"`: (*Body Parameter*), `string`, *Required*  \n  The question to start an AI-powered conversation.\n- `"stream"`: (*Body Parameter*), `boolean`  \n  Indicates whether to output responses in a streaming way:\n  - `true`: Enable streaming (default).\n  - `false`: Disable streaming.\n- `"session_id"`: (*Body Parameter*)  \n  The ID of session. If it is not provided, a new session will be generated.\n- `"user_id"`: (*Body parameter*), `string`  \n  The optional user-defined ID. Valid *only* when no `session_id` is provided.\n\n#### Response\n\nSuccess without `session_id`:\n\n```json\ndata:{\n    "code": 0,\n    "message": "",\n    "data": {\n        "answer": "Hi! I\'m your assistant, what can I do for you?",\n        "reference": {},\n        "audio_binary": null,\n        "id": null,\n        "session_id": "b01eed84b85611efa0e90242ac120005"\n    }\n}\ndata:{\n    "code": 0,\n    "message": "",\n    "data": true\n}\n```\n\nSuccess with `session_id`:\n\n```json\ndata:{\n    "code": 0,\n    "data": {\n        "answer": "I am an intelligent assistant designed to help answer questions by summarizing content from a",\n        "reference": {},\n        "audio_binary": null,\n        "id": "a84c5dd4-97b4-4624-8c3b-974012c8000d",\n        "session_id": "82b0ab2a9c1911ef9d870242ac120006"\n    }\n}\ndata:{\n    "code": 0,\n    "data": {\n        "answer": "I am an intelligent assistant designed to help answer questions by summarizing content from a knowledge base. My responses are based on the information available in the knowledge base and",\n        "reference": {},\n        "audio_binary": null,\n        "id": "a84c5dd4-97b4-4624-8c3b-974012c8000d",\n        "session_id": "82b0ab2a9c1911ef9d870242ac120006"\n    }\n}\ndata:{\n    "code": 0,\n    "data": {\n        "answer": "I am an intelligent assistant designed to help answer questions by summarizing content from a knowledge base. My responses are based on the information available in the knowledge base and any relevant chat history.",\n        "reference": {},\n        "audio_binary": null,\n        "id": "a84c5dd4-97b4-4624-8c3b-974012c8000d",\n        "session_id": "82b0ab2a9c1911ef9d870242ac120006"\n    }\n}\ndata:{\n    "code": 0,\n    "data": {\n        "answer": "I am an intelligent assistant designed to help answer questions by summarizing content from a knowledge base ##0$$. My responses are based on the information available in the knowledge base and any relevant chat history.",\n        "reference": {\n            "total": 1,\n            "chunks": [\n                {\n                    "id": "faf26c791128f2d5e821f822671063bd",\n                    "content": "xxxxxxxx",\n                    "document_id": "dd58f58e888511ef89c90242ac120006",\n                    "document_name": "1.txt",\n                    "dataset_id": "8e83e57a884611ef9d760242ac120006",\n                    "image_id": "",\n                    "similarity": 0.7,\n                    "vector_similarity": 0.0,\n                    "term_similarity": 1.0,\n                    "positions": [\n                        ""\n                    ]\n                }\n            ],\n            "doc_aggs": [\n                {\n                    "doc_name": "1.txt",\n                    "doc_id": "dd58f58e888511ef89c90242ac120006",\n                    "count": 1\n                }\n            ]\n        },\n        "prompt": "xxxxxxxxxxx",\n        "id": "a84c5dd4-97b4-4624-8c3b-974012c8000d",\n        "session_id": "82b0ab2a9c1911ef9d870242ac120006"\n    }\n}\ndata:{\n    "code": 0,\n    "data": true\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "Please input your question."\n}\n```\n\n---\n\n### Create session with agent\n\n**POST** `/api/v1/agents/{agent_id}/sessions`\n\nCreates a session with an agent.\n\n#### Request\n\n- Method: POST\n- URL: `/api/v1/agents/{agent_id}/sessions?user_id={user_id}`\n- Headers:\n  - `\'content-Type: application/json\' or \'multipart/form-data\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - the required parameters:`str`\n  - other parameters:\n    The parameters specified in the **Begin** component.\n\n##### Request example\n\nIf the **Begin** component in your agent does not take required parameters:\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/agents/{agent_id}/sessions \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'{\n     }\'\n```\n\nIf the **Begin** component in your agent takes required parameters:\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/agents/{agent_id}/sessions \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'{\n            "lang":"Japanese",\n            "file":"Who are you"\n     }\'\n```\n\nIf the **Begin** component in your agent takes required file parameters:\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/agents/{agent_id}/sessions?user_id={user_id} \\\n     --header \'Content-Type: multipart/form-data\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --form \'<FILE_KEY>=@./test1.png\'    \n```\n\n##### Request parameters\n\n- `agent_id`: (*Path parameter*)  \n  The ID of the associated agent.\n- `user_id`: (*Filter parameter*)\n  The optional user-defined ID for parsing docs (especially images) when creating a session while uploading files.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": {\n        "agent_id": "b4a39922b76611efaa1a0242ac120006",\n        "dsl": {\n            "answer": [],\n            "components": {\n                "Answer:GreenReadersDrum": {\n                    "downstream": [],\n                    "obj": {\n                        "component_name": "Answer",\n                        "inputs": [],\n                        "output": null,\n                        "params": {}\n                    },\n                    "upstream": []\n                },\n                "begin": {\n                    "downstream": [],\n                    "obj": {\n                        "component_name": "Begin",\n                        "inputs": [],\n                        "output": {},\n                        "params": {}\n                    },\n                    "upstream": []\n                }\n            },\n            "embed_id": "",\n            "graph": {\n                "edges": [],\n                "nodes": [\n                    {\n                        "data": {\n                            "label": "Begin",\n                            "name": "begin"\n                        },\n                        "dragging": false,\n                        "height": 44,\n                        "id": "begin",\n                        "position": {\n                            "x": 53.25688640427177,\n                            "y": 198.37155679786412\n                        },\n                        "positionAbsolute": {\n                            "x": 53.25688640427177,\n                            "y": 198.37155679786412\n                        },\n                        "selected": false,\n                        "sourcePosition": "left",\n                        "targetPosition": "right",\n                        "type": "beginNode",\n                        "width": 200\n                    },\n                    {\n                        "data": {\n                            "form": {},\n                            "label": "Answer",\n                            "name": "dialog_0"\n                        },\n                        "dragging": false,\n                        "height": 44,\n                        "id": "Answer:GreenReadersDrum",\n                        "position": {\n                            "x": 360.43473114516974,\n                            "y": 207.29298425089348\n                        },\n                        "positionAbsolute": {\n                            "x": 360.43473114516974,\n                            "y": 207.29298425089348\n                        },\n                        "selected": false,\n                        "sourcePosition": "right",\n                        "targetPosition": "left",\n                        "type": "logicNode",\n                        "width": 200\n                    }\n                ]\n            },\n            "history": [],\n            "messages": [],\n            "path": [\n                [\n                    "begin"\n                ],\n                []\n            ],\n            "reference": []\n        },\n        "id": "2581031eb7a311efb5200242ac120005",\n        "message": [\n            {\n                "content": "Hi! I\'m your smart assistant. What can I do for you?",\n                "role": "assistant"\n            }\n        ],\n        "source": "agent",\n        "user_id": "69736c5e723611efb51b0242ac120007"\n    }\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "Agent not found."\n}\n```\n\n---\n\n### Converse with agent\n\n**POST** `/api/v1/agents/{agent_id}/completions`  \n\nAsks a specified agent a question to start an AI-powered conversation.\n\n:::tip NOTE\n\n- In streaming mode, not all responses include a reference, as this depends on the system\'s judgement.\n- In streaming mode, the last message is an empty message:\n\n  ```json\n  data:\n  {\n    "code": 0,\n    "data": true\n  }\n  ```\n\n:::\n\n#### Request\n\n- Method: POST\n- URL: `/api/v1/agents/{agent_id}/completions`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"question"`: `string`\n  - `"stream"`: `boolean`\n  - `"session_id"`: `string`\n  - `"user_id"`: `string`(optional)\n  - `"sync_dsl"`: `boolean` (optional)\n  - other parameters: `string`\n\n:::info IMPORTANT\nYou can include custom parameters in the request body, but first ensure they are defined in the [Begin](../guides/agent/agent_component_reference/begin.mdx) agent component.\n:::\n\n##### Request example\n\n- If the **Begin** component does not take parameters, the following code will create a session.\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/agents/{agent_id}/completions \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data-binary \'\n     {\n     }\'\n```\n\n- If the **Begin** component takes parameters, the following code will create a session.  \n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/agents/{agent_id}/completions \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data-binary \'\n     {\n          "lang":"English",\n          "file":"How is the weather tomorrow?"\n     }\'\n```\n\nThe following code will execute the completion process\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/agents/{agent_id}/completions \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data-binary \'\n     {\n          "question": "Hello",\n          "stream": true,\n          "session_id": "cb2f385cb86211efa36e0242ac120005"\n     }\'\n```\n\n##### Request Parameters\n\n- `agent_id`: (*Path parameter*), `string`  \n  The ID of the associated agent.\n- `"question"`: (*Body Parameter*), `string`, *Required*  \n  The question to start an AI-powered conversation.\n- `"stream"`: (*Body Parameter*), `boolean`  \n  Indicates whether to output responses in a streaming way:  \n  - `true`: Enable streaming (default).\n  - `false`: Disable streaming.\n- `"session_id"`: (*Body Parameter*)  \n  The ID of the session. If it is not provided, a new session will be generated.\n- `"user_id"`: (*Body parameter*), `string`  \n  The optional user-defined ID. Valid *only* when no `session_id` is provided.\n- `"sync_dsl"`: (*Body parameter*), `boolean`\n  Whether to synchronize the changes to existing sessions when an agent is modified, defaults to `false`.\n- Other parameters: (*Body Parameter*)  \n  Parameters specified in the **Begin** component.\n\n#### Response\n\nsuccess without `session_id` provided and with no parameters specified in the **Begin** component:\n\n```json\ndata:{\n    "code": 0,\n    "message": "",\n    "data": {\n        "answer": "Hi! I\'m your smart assistant. What can I do for you?",\n        "reference": {},\n        "id": "31e6091d-88d4-441b-ac65-eae1c055be7b",\n        "session_id": "2987ad3eb85f11efb2a70242ac120005"\n    }\n}\ndata:{\n    "code": 0,\n    "message": "",\n    "data": true\n}\n```\n\nSuccess without `session_id` provided and with parameters specified in the **Begin** component:\n\n```json\ndata:{\n    "code": 0,\n    "message": "",\n    "data": {\n        "session_id": "eacb36a0bdff11ef97120242ac120006",\n        "answer": "",\n        "reference": [],\n        "param": [\n            {\n                "key": "lang",\n                "name": "Target Language",\n                "optional": false,\n                "type": "line",\n                "value": "English"\n            },\n            {\n                "key": "file",\n                "name": "Files",\n                "optional": false,\n                "type": "file",\n                "value": "How is the weather tomorrow?"\n            },\n            {\n                "key": "hhyt",\n                "name": "hhty",\n                "optional": true,\n                "type": "line"\n            }\n        ]\n    }\n}\ndata:\n```\n\nSuccess with parameters specified in the **Begin** component:\n\n```json\ndata:{\n    "code": 0,\n    "message": "",\n    "data": {\n        "answer": "How",\n        "reference": {},\n        "id": "0379ac4c-b26b-4a44-8b77-99cebf313fdf",\n        "session_id": "4399c7d0b86311efac5b0242ac120005"\n    }\n}\ndata:{\n    "code": 0,\n    "message": "",\n    "data": {\n        "answer": "How is",\n        "reference": {},\n        "id": "0379ac4c-b26b-4a44-8b77-99cebf313fdf",\n        "session_id": "4399c7d0b86311efac5b0242ac120005"\n    }\n}\ndata:{\n    "code": 0,\n    "message": "",\n    "data": {\n        "answer": "How is the",\n        "reference": {},\n        "id": "0379ac4c-b26b-4a44-8b77-99cebf313fdf",\n        "session_id": "4399c7d0b86311efac5b0242ac120005"\n    }\n}\ndata:{\n    "code": 0,\n    "message": "",\n    "data": {\n        "answer": "How is the weather",\n        "reference": {},\n        "id": "0379ac4c-b26b-4a44-8b77-99cebf313fdf",\n        "session_id": "4399c7d0b86311efac5b0242ac120005"\n    }\n}\ndata:{\n    "code": 0,\n    "message": "",\n    "data": {\n        "answer": "How is the weather tomorrow",\n        "reference": {},\n        "id": "0379ac4c-b26b-4a44-8b77-99cebf313fdf",\n        "session_id": "4399c7d0b86311efac5b0242ac120005"\n    }\n}\ndata:{\n    "code": 0,\n    "message": "",\n    "data": {\n        "answer": "How is the weather tomorrow?",\n        "reference": {},\n        "id": "0379ac4c-b26b-4a44-8b77-99cebf313fdf",\n        "session_id": "4399c7d0b86311efac5b0242ac120005"\n    }\n}\ndata:{\n    "code": 0,\n    "message": "",\n    "data": {\n        "answer": "How is the weather tomorrow?",\n        "reference": {},\n        "id": "0379ac4c-b26b-4a44-8b77-99cebf313fdf",\n        "session_id": "4399c7d0b86311efac5b0242ac120005"\n    }\n}\ndata:{\n    "code": 0,\n    "message": "",\n    "data": true\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "`question` is required."\n}\n```\n\n---\n\n### List agent sessions\n\n**GET** `/api/v1/agents/{agent_id}/sessions?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&id={session_id}&user_id={user_id}&dsl={dsl}`\n\nLists sessions associated with a specified agent.\n\n#### Request\n\n- Method: GET\n- URL: `/api/v1/agents/{agent_id}/sessions?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&id={session_id}`\n- Headers:\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n\n##### Request example\n\n```bash\ncurl --request GET \\\n     --url http://{address}/api/v1/agents/{agent_id}/sessions?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&id={session_id}&user_id={user_id} \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\'\n```\n\n##### Request Parameters\n\n- `agent_id`: (*Path parameter*)  \n  The ID of the associated agent.\n- `page`: (*Filter parameter*), `integer`  \n  Specifies the page on which the sessions will be displayed. Defaults to `1`.\n- `page_size`: (*Filter parameter*), `integer`  \n  The number of sessions on each page. Defaults to `30`.\n- `orderby`: (*Filter parameter*), `string`  \n  The field by which sessions should be sorted. Available options:  \n  - `create_time` (default)\n  - `update_time`\n- `desc`: (*Filter parameter*), `boolean`  \n  Indicates whether the retrieved sessions should be sorted in descending order. Defaults to `true`.\n- `id`: (*Filter parameter*), `string`  \n  The ID of the agent session to retrieve.\n- `user_id`: (*Filter parameter*), `string`  \n  The optional user-defined ID passed in when creating session.\n- `dsl`: (*Filter parameter*), `boolean`  \n  Indicates whether to include the dsl field of the sessions in the response. Defaults to `true`.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": [{\n        "agent_id": "e9e2b9c2b2f911ef801d0242ac120006",\n        "dsl": {\n            "answer": [],\n            "components": {\n                "Answer:OrangeTermsBurn": {\n                    "downstream": [],\n                    "obj": {\n                        "component_name": "Answer",\n                        "params": {}\n                    },\n                    "upstream": []\n                },\n                "Generate:SocialYearsRemain": {\n                    "downstream": [],\n                    "obj": {\n                        "component_name": "Generate",\n                        "params": {\n                            "cite": true,\n                            "frequency_penalty": 0.7,\n                            "llm_id": "gpt-4o___OpenAI-API@OpenAI-API-Compatible",\n                            "message_history_window_size": 12,\n                            "parameters": [],\n                            "presence_penalty": 0.4,\n                            "prompt": "Please summarize the following paragraph. Pay attention to the numbers and do not make things up. The paragraph is as follows:\\n{input}\\nThis is what you need to summarize.",\n                            "temperature": 0.1,\n                            "top_p": 0.3\n                        }\n                    },\n                    "upstream": []\n                },\n                "begin": {\n                    "downstream": [],\n                    "obj": {\n                        "component_name": "Begin",\n                        "params": {}\n                    },\n                    "upstream": []\n                }\n            },\n            "graph": {\n                "edges": [],\n                "nodes": [\n                    {\n                        "data": {\n                            "label": "Begin",\n                            "name": "begin"\n                        },\n                        "height": 44,\n                        "id": "begin",\n                        "position": {\n                            "x": 50,\n                            "y": 200\n                        },\n                        "sourcePosition": "left",\n                        "targetPosition": "right",\n                        "type": "beginNode",\n                        "width": 200\n                    },\n                    {\n                        "data": {\n                            "form": {\n                                "cite": true,\n                                "frequencyPenaltyEnabled": true,\n                                "frequency_penalty": 0.7,\n                                "llm_id": "gpt-4o___OpenAI-API@OpenAI-API-Compatible",\n                                "maxTokensEnabled": true,\n                                "message_history_window_size": 12,\n                                "parameters": [],\n                                "presencePenaltyEnabled": true,\n                                "presence_penalty": 0.4,\n                                "prompt": "Please summarize the following paragraph. Pay attention to the numbers and do not make things up. The paragraph is as follows:\\n{input}\\nThis is what you need to summarize.",\n                                "temperature": 0.1,\n                                "temperatureEnabled": true,\n                                "topPEnabled": true,\n                                "top_p": 0.3\n                            },\n                            "label": "Generate",\n                            "name": "Generate Answer_0"\n                        },\n                        "dragging": false,\n                        "height": 105,\n                        "id": "Generate:SocialYearsRemain",\n                        "position": {\n                            "x": 561.3457829707513,\n                            "y": 178.7211182312641\n                        },\n                        "positionAbsolute": {\n                            "x": 561.3457829707513,\n                            "y": 178.7211182312641\n                        },\n                        "selected": true,\n                        "sourcePosition": "right",\n                        "targetPosition": "left",\n                        "type": "generateNode",\n                        "width": 200\n                    },\n                    {\n                        "data": {\n                            "form": {},\n                            "label": "Answer",\n                            "name": "Dialogue_0"\n                        },\n                        "height": 44,\n                        "id": "Answer:OrangeTermsBurn",\n                        "position": {\n                            "x": 317.2368194777658,\n                            "y": 218.30635555445093\n                        },\n                        "sourcePosition": "right",\n                        "targetPosition": "left",\n                        "type": "logicNode",\n                        "width": 200\n                    }\n                ]\n            },\n            "history": [],\n            "messages": [],\n            "path": [],\n            "reference": []\n        },\n        "id": "792dde22b2fa11ef97550242ac120006",\n        "message": [\n            {\n                "content": "Hi! I\'m your smart assistant. What can I do for you?",\n                "role": "assistant"\n            }\n        ],\n        "source": "agent",\n        "user_id": ""\n    }]\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "You don\'t own the agent ccd2f856b12311ef94ca0242ac1200052."\n}\n```\n\n---\n\n### Delete agent\'s sessions\n\n**DELETE** `/api/v1/agents/{agent_id}/sessions`\n\nDeletes sessions of a agent by ID.\n\n#### Request\n\n- Method: DELETE\n- URL: `/api/v1/agents/{agent_id}/sessions`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"ids"`: `list[string]`\n\n##### Request example\n\n```bash\ncurl --request DELETE \\\n     --url http://{address}/api/v1/agents/{agent_id}/sessions \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'\n     {\n          "ids": ["test_1", "test_2"]\n     }\'\n```\n\n##### Request Parameters\n\n- `agent_id`: (*Path parameter*)  \n  The ID of the associated agent.\n- `"ids"`: (*Body Parameter*), `list[string]`  \n  The IDs of the sessions to delete. If it is not specified, all sessions associated with the specified agent will be deleted.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "The agent doesn\'t own the session cbd31e52f73911ef93b232903b842af6"\n}\n```\n\n---\n\n### Generate related questions\n\n**POST** `/v1/sessions/related_questions`\n\nGenerates five to ten alternative question strings from the user\'s original query to retrieve more relevant search results.\n\nThis operation requires a `Bearer Login Token`, which typically expires with in 24 hours. You can find the it in the Request Headers in your browser easily.\n\n:::tip NOTE\nThe chat model autonomously determines the number of questions to generate based on the instruction, typically between five and ten.\n:::\n\n#### Request\n\n- Method: POST\n- URL: `/v1/sessions/related_questions`\n- Headers:\n  - `\'content-Type: application/json\'`\n  - `\'Authorization: Bearer <YOUR_LOGIN_TOKEN>\'`\n- Body:\n  - `"question"`: `string`\n\n##### Request example\n\n```bash\ncurl --request POST \\\n     --url http://{address}/v1/sessions/related_questions \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_LOGIN_TOKEN>\' \\\n     --data \'\n     {\n          "question": "What are the key advantages of Neovim over Vim?"\n     }\'\n```\n\n##### Request Parameters\n\n- `"question"`: (*Body Parameter*), `string`\n  The original user question.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": [\n        "What makes Neovim superior to Vim in terms of features?",\n        "How do the benefits of Neovim compare to those of Vim?",\n        "What advantages does Neovim offer that are not present in Vim?",\n        "In what ways does Neovim outperform Vim in functionality?",\n        "What are the most significant improvements in Neovim compared to Vim?",\n        "What unique advantages does Neovim bring to the table over Vim?",\n        "How does the user experience in Neovim differ from Vim in terms of benefits?",\n        "What are the top reasons to switch from Vim to Neovim?",\n        "What features of Neovim are considered more advanced than those in Vim?"\n    ],\n    "message": "success"\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 401,\n    "data": null,\n    "message": "<Unauthorized \'401: Unauthorized\'>"\n}\n```\n\n---\n\n## AGENT MANAGEMENT\n\n---\n\n### List agents\n\n**GET** `/api/v1/agents?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&name={agent_name}&id={agent_id}`\n\nLists agents.\n\n#### Request\n\n- Method: GET\n- URL: `/api/v1/agents?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&name={agent_name}&id={agent_id}`\n- Headers:\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n\n##### Request example\n\n```bash\ncurl --request GET \\\n     --url http://{address}/api/v1/agents?page={page}&page_size={page_size}&orderby={orderby}&desc={desc}&name={agent_name}&id={agent_id} \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\'\n```\n\n##### Request parameters\n\n- `page`: (*Filter parameter*), `integer`  \n  Specifies the page on which the agents will be displayed. Defaults to `1`.\n- `page_size`: (*Filter parameter*), `integer`  \n  The number of agents on each page. Defaults to `30`.\n- `orderby`: (*Filter parameter*), `string`  \n  The attribute by which the results are sorted. Available options:\n  - `create_time` (default)\n  - `update_time`\n- `desc`: (*Filter parameter*), `boolean`  \n  Indicates whether the retrieved agents should be sorted in descending order. Defaults to `true`.\n- `id`: (*Filter parameter*), `string`  \n  The ID of the agent to retrieve.\n- `name`: (*Filter parameter*), `string`  \n  The name of the agent to retrieve.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": [\n        {\n            "avatar": null,\n            "canvas_type": null,\n            "create_date": "Thu, 05 Dec 2024 19:10:36 GMT",\n            "create_time": 1733397036424,\n            "description": null,\n            "dsl": {\n                "answer": [],\n                "components": {\n                    "begin": {\n                        "downstream": [],\n                        "obj": {\n                            "component_name": "Begin",\n                            "params": {}\n                        },\n                        "upstream": []\n                    }\n                },\n                "graph": {\n                    "edges": [],\n                    "nodes": [\n                        {\n                            "data": {\n                                "label": "Begin",\n                                "name": "begin"\n                            },\n                            "height": 44,\n                            "id": "begin",\n                            "position": {\n                                "x": 50,\n                                "y": 200\n                            },\n                            "sourcePosition": "left",\n                            "targetPosition": "right",\n                            "type": "beginNode",\n                            "width": 200\n                        }\n                    ]\n                },\n                "history": [],\n                "messages": [],\n                "path": [],\n                "reference": []\n            },\n            "id": "8d9ca0e2b2f911ef9ca20242ac120006",\n            "title": "123465",\n            "update_date": "Thu, 05 Dec 2024 19:10:56 GMT",\n            "update_time": 1733397056801,\n            "user_id": "69736c5e723611efb51b0242ac120007"\n        }\n    ]\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "The agent doesn\'t exist."\n}\n```\n\n---\n\n### Create agent\n\n**POST** `/api/v1/agents`\n\nCreate an agent.\n\n#### Request\n\n- Method: POST\n- URL: `/api/v1/agents`\n- Headers:\n  - `\'Content-Type: application/json`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"title"`: `string`\n  - `"description"`: `string`\n  - `"dsl"`: `object`\n\n##### Request example\n\n```bash\ncurl --request POST \\\n     --url http://{address}/api/v1/agents \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'{\n         "title": "Test Agent",\n         "description": "A test agent",\n         "dsl": {\n           // ... Canvas DSL here ...\n         }\n     }\'\n```\n\n##### Request parameters\n\n- `title`: (*Body parameter*), `string`, *Required*  \n  The title of the agent.\n- `description`: (*Body parameter*), `string`  \n  The description of the agent. Defaults to `None`.\n- `dsl`: (*Body parameter*), `object`, *Required*  \n  The canvas DSL object of the agent.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": true,\n    "message": "success"\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 102,\n    "message": "Agent with title test already exists."\n}\n```\n\n---\n\n### Update agent\n\n**PUT** `/api/v1/agents/{agent_id}`\n\nUpdate an agent by id.\n\n#### Request\n\n- Method: PUT\n- URL: `/api/v1/agents/{agent_id}`\n- Headers:\n  - `\'Content-Type: application/json`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n- Body:\n  - `"title"`: `string`\n  - `"description"`: `string`\n  - `"dsl"`: `object`\n\n##### Request example\n\n```bash\ncurl --request PUT \\\n     --url http://{address}/api/v1/agents/58af890a2a8911f0a71a11b922ed82d6 \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'{\n         "title": "Test Agent",\n         "description": "A test agent",\n         "dsl": {\n           // ... Canvas DSL here ...\n         }\n     }\'\n```\n\n##### Request parameters\n\n- `agent_id`: (*Path parameter*), `string`  \n  The id of the agent to be updated.\n- `title`: (*Body parameter*), `string`  \n  The title of the agent.\n- `description`: (*Body parameter*), `string`  \n  The description of the agent.\n- `dsl`: (*Body parameter*), `object`  \n  The canvas DSL object of the agent.\n\nOnly specify the parameter you want to change in the request body. If a parameter does not exist or is `None`, it won\'t be updated.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": true,\n    "message": "success"\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 103,\n    "message": "Only owner of canvas authorized for this operation."\n}\n```\n\n---\n\n### Delete agent\n\n**DELETE** `/api/v1/agents/{agent_id}`\n\nDelete an agent by id.\n\n#### Request\n\n- Method: DELETE\n- URL: `/api/v1/agents/{agent_id}`\n- Headers:\n  - `\'Content-Type: application/json`\n  - `\'Authorization: Bearer <YOUR_API_KEY>\'`\n\n##### Request example\n\n```bash\ncurl --request DELETE \\\n     --url http://{address}/api/v1/agents/58af890a2a8911f0a71a11b922ed82d6 \\\n     --header \'Content-Type: application/json\' \\\n     --header \'Authorization: Bearer <YOUR_API_KEY>\' \\\n     --data \'{}\'\n```\n\n##### Request parameters\n\n- `agent_id`: (*Path parameter*), `string`  \n  The id of the agent to be deleted.\n\n#### Response\n\nSuccess:\n\n```json\n{\n    "code": 0,\n    "data": true,\n    "message": "success"\n}\n```\n\nFailure:\n\n```json\n{\n    "code": 103,\n    "message": "Only owner of canvas authorized for this operation."\n}\n```\n\n---\n',
        N = t(58739),
        O = t(86250),
        z = t(4393),
        Y = t(42075),
        S = t(15867),
        M = t(33623),
        U = t(28382),
        C = t(48689),
        L = t(85576),
        F = t(43106),
        K = t(5600),
        G = function (e) {
          var n = e.dialogId,
            t = e.hideModal,
            a = e.idKey,
            i = (0, K.r6)(a, n),
            o = i.createToken,
            r = i.removeToken,
            c = i.tokenList,
            d = i.listLoading,
            l = i.creatingLoading,
            u = (0, s.qM)('chat').t,
            p = [
              {
                title: 'Token',
                dataIndex: 'token',
                key: 'token',
                render: function (e) {
                  return (0, A.jsx)('a', { children: e });
                },
              },
              {
                title: u('created'),
                dataIndex: 'create_date',
                key: 'create_date',
                render: function (e) {
                  return (0, U.p6)(e);
                },
              },
              {
                title: u('action'),
                key: 'action',
                render: function (e, n) {
                  return (0, A.jsxs)(Y.Z, {
                    size: 'middle',
                    children: [
                      (0, A.jsx)(M.Z, { text: n.token }),
                      (0, A.jsx)(C.Z, {
                        onClick: function () {
                          return r(n.token);
                        },
                      }),
                    ],
                  });
                },
              },
            ];
          return (0, A.jsx)(A.Fragment, {
            children: (0, A.jsxs)(L.Z, {
              title: u('apiKey'),
              open: !0,
              onCancel: t,
              cancelButtonProps: { style: { display: 'none' } },
              style: { top: 300 },
              onOk: t,
              width: '50vw',
              children: [
                (0, A.jsx)(F.Z, {
                  columns: p,
                  dataSource: c,
                  rowKey: 'token',
                  loading: d,
                  pagination: !1,
                }),
                (0, A.jsx)(S.ZP, {
                  onClick: o,
                  loading: l,
                  disabled: (null == c ? void 0 : c.length) > 0,
                  children: u('createNewKey'),
                }),
              ],
            }),
          });
        },
        H = t(22850),
        Z = 'apiLinkText___AxElg',
        V = H.Z.Paragraph,
        W = function (e) {
          var n = e.show,
            t = (0, s.qM)('chat').t;
          return (0, A.jsx)(z.Z, {
            title: (0, A.jsxs)(Y.Z, {
              size: 'large',
              children: [
                (0, A.jsx)('span', { children: 'RAGFlow API' }),
                (0, A.jsx)(S.ZP, {
                  onClick: n,
                  type: 'primary',
                  children: t('apiKey'),
                }),
              ],
            }),
            children: (0, A.jsxs)(O.Z, {
              gap: 8,
              align: 'center',
              children: [
                (0, A.jsx)('b', { children: t('backendServiceApi') }),
                (0, A.jsx)(V, {
                  copyable: { text: ''.concat(location.origin) },
                  className: Z,
                  children: location.origin,
                }),
              ],
            }),
          });
        },
        J = t(5574),
        $ = t.n(J),
        Q = t(29321),
        X = function (e) {
          var n = e.content,
            t = (0, l.useState)([]),
            s = $()(t, 2),
            a = s[0],
            i = s[1];
          return (
            (0, l.useEffect)(
              function () {
                setTimeout(function () {
                  var e = document.querySelectorAll(
                      '.wmde-markdown h2, .wmde-markdown h3',
                    ),
                    n = [],
                    t = null;
                  e.forEach(function (e) {
                    var s = e.textContent || '',
                      a = e.id,
                      i = 'h2' === e.tagName.toLowerCase();
                    if (a && s) {
                      var o = { key: a, href: '#'.concat(a), title: s };
                      i
                        ? ((t = o), n.push(o))
                        : t
                          ? (t.children || (t.children = []),
                            t.children.push(o))
                          : n.push(o);
                    }
                  }),
                    i(n.slice(1));
                }, 100);
              },
              [n],
            ),
            (0, A.jsx)('div', {
              className: 'markdown-toc',
              style: {
                position: 'fixed',
                right: 20,
                top: 100,
                bottom: 150,
                width: 200,
                background: '#fff',
                padding: '10px',
                maxHeight: 'calc(100vh - 170px)',
                overflowY: 'auto',
                zIndex: 1e3,
              },
              children: (0, A.jsx)(Q.Z, { items: a, affix: !1 }),
            })
          );
        },
        ee = function (e) {
          var n = e.id,
            t = e.idKey,
            a = e.hideChatPreviewCard,
            i = void 0 !== a && a,
            o = (0, s.qM)('chat').t,
            r = (0, s.pG)(),
            c = r.visible,
            d = r.hideModal,
            l = r.showModal,
            u = (0, K.Xm)(t).handlePreview;
          return (0, A.jsxs)('div', {
            className: 'pb-2',
            children: [
              (0, A.jsxs)(O.Z, {
                vertical: !0,
                gap: 'middle',
                children: [
                  (0, A.jsx)(W, { show: l }),
                  !i &&
                    (0, A.jsx)(z.Z, {
                      title: ''.concat(name, ' Web App'),
                      children: (0, A.jsx)(O.Z, {
                        gap: 8,
                        vertical: !0,
                        children: (0, A.jsx)(Y.Z, {
                          size: 'middle',
                          children: (0, A.jsx)(S.ZP, {
                            onClick: u,
                            children: o('preview'),
                          }),
                        }),
                      }),
                    }),
                  (0, A.jsx)('div', {
                    style: { position: 'relative' },
                    children: (0, A.jsx)(X, { content: B }),
                  }),
                  (0, A.jsx)(N.Z, { source: B }),
                ],
              }),
              c && (0, A.jsx)(G, { hideModal: d, dialogId: n, idKey: t }),
              (0, A.jsx)(D, {}),
            ],
          });
        },
        ne = 'apiWrapper___Bulry',
        te = function () {
          return (0, A.jsx)('div', {
            className: ne,
            children: (0, A.jsx)(ee, {
              idKey: 'dialogId',
              hideChatPreviewCard: !0,
            }),
          });
        };
    },
    28382: function (e, n, t) {
      'use strict';
      t.d(n, {
        Qc: function () {
          return r;
        },
        mr: function () {
          return o;
        },
        p6: function () {
          return i;
        },
      });
      var s = t(27484),
        a = t.n(s);
      function i(e) {
        return e ? a()(e).format('DD/MM/YYYY HH:mm:ss') : '';
      }
      function o(e) {
        return e ? a()(e).format('HH:mm:ss') : '';
      }
      function r(e) {
        return e ? a()(e).format('DD/MM/YYYY') : '';
      }
    },
    78131: function (e, n, t) {
      var s = {
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
      function a(e) {
        var n = i(e);
        return t(n);
      }
      function i(e) {
        if (!t.o(s, e)) {
          var n = new Error("Cannot find module '" + e + "'");
          throw ((n.code = 'MODULE_NOT_FOUND'), n);
        }
        return s[e];
      }
      (a.keys = function () {
        return Object.keys(s);
      }),
        (a.resolve = i),
        (e.exports = a),
        (a.id = 78131);
    },
    26032: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/akshare.ef2caf5a.svg';
    },
    30747: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/api.683cd994.svg';
    },
    90854: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/arxiv.bce2900b.svg';
    },
    4159: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/assistant.072e25ce.svg';
    },
    83544: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/baidu-fanyi.ab76b9e5.svg';
    },
    92892: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/baidu.75b1998a.svg';
    },
    69779: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/begin.1a91ddf7.svg';
    },
    55914: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/bing.dce94add.svg';
    },
    8156: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/cancel.4450bdfb.svg';
    },
    34339: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/chat-app-cube.0d35727d.svg';
    },
    57950: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/chat-configuration-atom.94c02c7a.svg';
    },
    49570: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/chat-star.7acfee68.svg';
    },
    38726: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/book-01.6e2a8a37.svg';
    },
    21357: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/book-02.4dd45490.svg';
    },
    88093: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/book-03.bd76b691.svg';
    },
    58355: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/book-04.594d0d1a.svg';
    },
    16035: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/chunk-empty.2b83673a.svg';
    },
    42576: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/knowledge-graph-01.597a96f3.svg';
    },
    46853: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/knowledge-graph-02.f36b7fab.svg';
    },
    54530: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/law-01.7070b7b3.svg';
    },
    75787: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/law-02.cae944e5.svg';
    },
    64179: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/manual-01.e3bb11d2.svg';
    },
    40547: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/manual-02.1a214f22.svg';
    },
    1437: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/manual-03.530928ca.svg';
    },
    81486: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/manual-04.63d43265.svg';
    },
    33952: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/media-01.086483b6.svg';
    },
    93802: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/media-02.d4c36e3e.svg';
    },
    88488: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/naive-01.f57569b7.svg';
    },
    74795: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/naive-02.3fe3610b.svg';
    },
    88533: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/one-01.5a1d6960.svg';
    },
    99199: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/one-02.0adb16f8.svg';
    },
    23192: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/one-03.466dec02.svg';
    },
    72906: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/one-04.3b10ee6d.svg';
    },
    64018: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/paper-01.e0019dcd.svg';
    },
    77250: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/paper-02.cf73a211.svg';
    },
    87162: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/presentation-01.06115027.svg';
    },
    59640: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/presentation-02.14d98352.svg';
    },
    39420: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/qa-01.ce8702ee.svg';
    },
    55086: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/qa-02.c181fcd6.svg';
    },
    76604: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/resume-01.75f1c93f.svg';
    },
    96131: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/resume-02.9c115ed1.svg';
    },
    42743: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/table-01.ec5d8a4d.svg';
    },
    84817: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/table-02.e4d2487c.svg';
    },
    96953: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/tag-01.ff996302.svg';
    },
    82472: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/tag-02.079b2b47.svg';
    },
    86933: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/concentrator.1353af83.svg';
    },
    71090: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/crawler.646367e0.svg';
    },
    38575: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/database.ef8eb5c8.svg';
    },
    98301: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/deepl.dc5ab23b.svg';
    },
    71483: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/delete.028228ac.svg';
    },
    84377: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/disable.55c8b50f.svg';
    },
    24287: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/duck.3285e948.svg';
    },
    10808: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/email.ac0507af.svg';
    },
    8207: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/enable.1b0d90c7.svg';
    },
    96492: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/es.d9969bbd.svg';
    },
    43004: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/exesql.696e27b1.svg';
    },
    83889: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/aep.90be9439.svg';
    },
    28897: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/ai.10138190.svg';
    },
    27635: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/avi.02b94047.svg';
    },
    52229: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/css.8f0ad31d.svg';
    },
    50747: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/csv.9a256b45.svg';
    },
    71691: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/dmg.57f9c02c.svg';
    },
    35354: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/doc.d8918cc4.svg';
    },
    69139: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/docx.38d543b1.svg';
    },
    43279: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/eps.3f104d7d.svg';
    },
    46462: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/exe.7c93a166.svg';
    },
    33179: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/fig.38a31555.svg';
    },
    54168: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/folder.84bcc794.svg';
    },
    73845: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/gif.06cc115a.svg';
    },
    53682: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/html.240ba9a0.svg';
    },
    26763: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/indd.22c71a5d.svg';
    },
    13916: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/java.bc10ed5b.svg';
    },
    19525: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/jpeg.b4ff21a3.svg';
    },
    24674: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/jpg.166b6e5d.svg';
    },
    38470: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/js.acbe367d.svg';
    },
    56373: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/json.79aa2433.svg';
    },
    77357: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/md.41082c13.svg';
    },
    49197: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/mkv.ed2674b7.svg';
    },
    44538: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/mp3.773e22e6.svg';
    },
    52038: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/mp4.4b08cc18.svg';
    },
    77747: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/mpeg.ca6e2469.svg';
    },
    82938: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/pdf.44344347.svg';
    },
    71915: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/png.b6606e2b.svg';
    },
    85173: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/ppt.1cb25ad9.svg';
    },
    62133: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/pptx.b108e970.svg';
    },
    30182: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/psd.1d66388a.svg';
    },
    38428: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/rss.f27341d3.svg';
    },
    78501: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/sql.f90e0e1d.svg';
    },
    72515: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/svg.a95ef072.svg';
    },
    4502: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/tiff.4719932c.svg';
    },
    55773: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/txt.ef59d3d8.svg';
    },
    63645: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/wav.fa097b95.svg';
    },
    87260: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/webp.ef46db37.svg';
    },
    5343: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/xls.2ba7600c.svg';
    },
    41475: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/xlsx.746a1908.svg';
    },
    38476: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/xml.b90e705e.svg';
    },
    39121: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/file-management.b76487d8.svg';
    },
    69696: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/github.0aef0d01.svg';
    },
    99466: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/google-scholar.44e74dbb.svg';
    },
    18176: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/google.be71d0f8.svg';
    },
    57355: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/graph.aed14f6e.svg';
    },
    82888: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/invoke-ai.f20c65b6.svg';
    },
    31801: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/jin10.878bef8b.svg';
    },
    30552: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/keyword.2d1a0d69.svg';
    },
    87055: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/knowledge-base.1c6120ee.svg';
    },
    96450: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/knowledge-configration.852175c9.svg';
    },
    9385: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/knowledge-dataset.722b6fe7.svg';
    },
    65376: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/knowledge-testing.bde5e258.svg';
    },
    6514: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/langfuse.78704466.svg';
    },
    74768: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/anthropic.65954479.svg';
    },
    99817: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/azure.c56d7584.svg';
    },
    93594: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/baai.c8138ebe.svg';
    },
    6507: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/baichuan.e3f694dc.svg';
    },
    30818: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/bedrock.3a8ac5ed.svg';
    },
    69534: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/chat-minimax.9b4384d0.svg';
    },
    86198: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/cohere.6ea354af.svg';
    },
    23476: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/deepseek.f974cd8d.svg';
    },
    97300: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/fish-audio.fc05a3e6.svg';
    },
    69156: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/gemini.87ab9858.svg';
    },
    29034: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/github.6dbd4f80.svg';
    },
    75383: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/google-cloud.d0802654.svg';
    },
    93926: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/google.36013c77.svg';
    },
    41538: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/gpustack.e4d6956b.svg';
    },
    43719: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/groq-next.8c75e144.svg';
    },
    20566: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/huggingface.fcf354fa.svg';
    },
    10266: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/hunyuan.3b1d640a.svg';
    },
    19765: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/jina.bfc92c30.svg';
    },
    68341: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/lepton-ai.0e3dff35.svg';
    },
    77894: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/lm-studio.7129f824.svg';
    },
    97354: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/local-ai.7a303131.svg';
    },
    58247: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/mistral.dfb07556.svg';
    },
    21248: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/modelscope.b21a1489.svg';
    },
    98184: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/moonshot.192bc590.svg';
    },
    14860: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/nomic-ai.ecf954c1.svg';
    },
    72584: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/novita-ai.f8cc289c.svg';
    },
    33325: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/nvidia.3031fca1.svg';
    },
    59488: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/ollama.2677a93a.svg';
    },
    23258: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/open-router.7226a5e8.svg';
    },
    63715: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/openai-api.42d3bdf6.svg';
    },
    81459: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/openai.6242ead4.svg';
    },
    39886: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/perfx-cloud.9668e908.svg';
    },
    89957: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/ppio.ce974b8e.svg';
    },
    13492: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/replicate.b558c271.svg';
    },
    85448: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/sentence-transformers.80312660.svg';
    },
    65762: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/siliconflow.6bafc788.svg';
    },
    4216: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/spark.54d37193.svg';
    },
    53618: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/stepfun.38dd7ff5.svg';
    },
    96734: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/tencent-cloud.637fb842.svg';
    },
    65167: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/together-ai.0777a553.svg';
    },
    74296: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/tongyi.8c1b0f0d.svg';
    },
    30464: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/upstage.bff6c9f0.svg';
    },
    91333: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/vllm.4895bd3a.svg';
    },
    25210: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/volc_engine.c93921c9.svg';
    },
    6385: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/voyage.ec478775.svg';
    },
    34981: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/wenxin.c029f1ef.svg';
    },
    76577: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/xinference.4bf1c9ad.svg';
    },
    20447: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/yi.56b2684e.svg';
    },
    55103: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/yiyan.c029f1ef.svg';
    },
    81010: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/youdao.dc5f6515.svg';
    },
    19568: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/zhipu.53c4367a.svg';
    },
    68683: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/login-avatars.2cd59ec8.svg';
    },
    89624: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/login-background.53821b0f.svg';
    },
    31130: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/login-star.a1de9742.svg';
    },
    49313: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/logo-with-text-white.22c9d002.svg';
    },
    67487: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/logout.acbe92a8.svg';
    },
    32382: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/minio.2aa38883.svg';
    },
    70410: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/model-providers.43583ddb.svg';
    },
    22350: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/moon.15e7f056.svg';
    },
    88458: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/more-model.7a1d39d8.svg';
    },
    1333: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/more.4f8a95a4.svg';
    },
    90076: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/move.0b544311.svg';
    },
    37124: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/mysql.cb3593ae.svg';
    },
    1979: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/navigation-pointer.a22fd9df.svg';
    },
    33391: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/next-login-bg.2b21817d.svg';
    },
    28687: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/note.7480c088.svg';
    },
    47138: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/nothing.ab562a79.svg';
    },
    2306: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/paper-clip.dd171c2f.svg';
    },
    33530: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/password.668a7506.svg';
    },
    3804: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/plus-circle-fill.5b401d20.svg';
    },
    75350: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/plus.4df8c2ae.svg';
    },
    1769: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/profile.67855e30.svg';
    },
    49261: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/prompt.37be0fb8.svg';
    },
    78566: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/pubmed.77561d8d.svg';
    },
    56077: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/qweather.af060254.svg';
    },
    43867: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/redis.c34741f7.svg';
    },
    96198: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/refresh.8782839f.svg';
    },
    80415: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/resize.dac0f2bf.svg';
    },
    91449: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/run.23b47028.svg';
    },
    14387: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/select-files-end.c089e39f.svg';
    },
    16734: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/select-files-start.fc6d0609.svg';
    },
    40975: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/selected-files-collapse.9b76e30e.svg';
    },
    51653: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/sso.9e8a3ae3.svg';
    },
    99021: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/storage.c77a9838.svg';
    },
    1311: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/switch.8b45face.svg';
    },
    52381: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/team.40ab5e28.svg';
    },
    63993: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/template.d3713e5e.svg';
    },
    40724: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/translation.1d6d8a4a.svg';
    },
    16521: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/tushare.dce7f503.svg';
    },
    72835: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/wencai.664373a4.svg';
    },
    18684: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/wikipedia.ed88485f.svg';
    },
    7957: function (e, n, t) {
      'use strict';
      e.exports = t.p + 'static/yahoo-finance.9deb3b1e.svg';
    },
  },
]);
//# sourceMappingURL=p__user-setting__setting-api__index.f0d1e88a.async.js.map
