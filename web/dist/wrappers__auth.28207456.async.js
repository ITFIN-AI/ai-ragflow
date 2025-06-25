'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [5899],
  {
    93300: function (e, n, t) {
      t.d(n, {
        a: function () {
          return a;
        },
      });
      var r = t(5574),
        s = t.n(r),
        o = t(61921),
        c = t(45360),
        i = t(62435),
        u = t(42028),
        a = function () {
          var e,
            n,
            t,
            r,
            a,
            l,
            f,
            g =
              ((e = (0, u.lr)()),
              (n = s()(e, 2)),
              (t = n[0]),
              (r = n[1]),
              (a = t.get('error')),
              (l = (0, i.useMemo)(
                function () {
                  return new URLSearchParams(t.toString());
                },
                [t],
              )),
              (f = (0, u.s0)()),
              (0, i.useEffect)(
                function () {
                  if (a)
                    return (
                      c.ZP.error(a),
                      void setTimeout(function () {
                        f('/login'), l.delete('error'), r(l);
                      }, 1e3)
                    );
                  var e = t.get('auth');
                  e &&
                    (o.ZP.setAuthorization(e),
                    l.delete('auth'),
                    r(l),
                    f('/knowledge'));
                },
                [a, t, l, f, r],
              ),
              console.debug(t.get('auth')),
              t.get('auth')),
            p = (0, i.useState)(null),
            d = s()(p, 2),
            h = d[0],
            v = d[1];
          return (
            (0, i.useEffect)(
              function () {
                v(!!o.ZP.getAuthorization() || !!g);
              },
              [g],
            ),
            { isLogin: h }
          );
        };
    },
    3026: function (e, n, t) {
      t.r(n);
      var r = t(93300),
        s = t(61921),
        o = t(42028),
        c = t(86074);
      n.default = function () {
        var e = (0, r.a)().isLogin;
        return !0 === e
          ? (0, c.jsx)(o.j3, {})
          : (!1 === e && (0, s.rf)(), (0, c.jsx)(c.Fragment, {}));
      };
    },
    45360: function (e, n, t) {
      var r = t(74902),
        s = t(62435),
        o = t(38135),
        c = t(28459),
        i = t(66277),
        u = t(16474),
        a = t(84926);
      let l = null,
        f = (e) => e(),
        g = [],
        p = {};
      function d() {
        const {
            prefixCls: e,
            getContainer: n,
            duration: t,
            rtl: r,
            maxCount: s,
            top: o,
          } = p,
          i = null != e ? e : (0, c.w6)().getPrefixCls('message'),
          u = (null == n ? void 0 : n()) || document.body;
        return {
          prefixCls: i,
          getContainer: () => u,
          duration: t,
          rtl: r,
          maxCount: s,
          top: o,
        };
      }
      const h = s.forwardRef((e, n) => {
        const [t, r] = s.useState(d),
          [o, i] = (0, u.K)(t),
          a = (0, c.w6)(),
          l = a.getRootPrefixCls(),
          f = a.getIconPrefixCls(),
          g = a.getTheme(),
          p = () => {
            r(d);
          };
        return (
          s.useEffect(p, []),
          s.useImperativeHandle(n, () => {
            const e = Object.assign({}, o);
            return (
              Object.keys(e).forEach((n) => {
                e[n] = function () {
                  return p(), o[n].apply(o, arguments);
                };
              }),
              { instance: e, sync: p }
            );
          }),
          s.createElement(c.ZP, { prefixCls: l, iconPrefixCls: f, theme: g }, i)
        );
      });
      function v() {
        if (!l) {
          const e = document.createDocumentFragment(),
            n = { fragment: e };
          return (
            (l = n),
            void f(() => {
              (0, o.s)(
                s.createElement(h, {
                  ref: (e) => {
                    const { instance: t, sync: r } = e || {};
                    Promise.resolve().then(() => {
                      !n.instance && t && ((n.instance = t), (n.sync = r), v());
                    });
                  },
                }),
                e,
              );
            })
          );
        }
        l.instance &&
          (g.forEach((e) => {
            const { type: n, skipped: t } = e;
            if (!t)
              switch (n) {
                case 'open':
                  f(() => {
                    const n = l.instance.open(
                      Object.assign(Object.assign({}, p), e.config),
                    );
                    null == n || n.then(e.resolve), e.setCloseFn(n);
                  });
                  break;
                case 'destroy':
                  f(() => {
                    null == l || l.instance.destroy(e.key);
                  });
                  break;
                default:
                  f(() => {
                    var t;
                    const s = (t = l.instance)[n].apply(t, (0, r.Z)(e.args));
                    null == s || s.then(e.resolve), e.setCloseFn(s);
                  });
              }
          }),
          (g = []));
      }
      const y = {
        open: function (e) {
          const n = (0, a.J)((n) => {
            let t;
            const r = {
              type: 'open',
              config: e,
              resolve: n,
              setCloseFn: (e) => {
                t = e;
              },
            };
            return (
              g.push(r),
              () => {
                t
                  ? f(() => {
                      t();
                    })
                  : (r.skipped = !0);
              }
            );
          });
          return v(), n;
        },
        destroy: function (e) {
          g.push({ type: 'destroy', key: e }), v();
        },
        config: function (e) {
          (p = Object.assign(Object.assign({}, p), e)),
            f(() => {
              var e;
              null === (e = null == l ? void 0 : l.sync) ||
                void 0 === e ||
                e.call(l);
            });
        },
        useMessage: u.Z,
        _InternalPanelDoNotUseOrYouWillBeFired: i.ZP,
      };
      ['success', 'info', 'warning', 'error', 'loading'].forEach((e) => {
        y[e] = function () {
          for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
            t[r] = arguments[r];
          return (function (e, n) {
            const t = (0, a.J)((t) => {
              let r;
              const s = {
                type: e,
                args: n,
                resolve: t,
                setCloseFn: (e) => {
                  r = e;
                },
              };
              return (
                g.push(s),
                () => {
                  r
                    ? f(() => {
                        r();
                      })
                    : (s.skipped = !0);
                }
              );
            });
            return v(), t;
          })(e, t);
        };
      });
      n.ZP = y;
    },
  },
]);
//# sourceMappingURL=wrappers__auth.28207456.async.js.map
