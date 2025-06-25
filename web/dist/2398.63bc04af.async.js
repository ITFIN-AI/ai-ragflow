'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [2398],
  {
    24969: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(87462),
        o = n(62435),
        r = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z',
                },
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z',
                },
              },
            ],
          },
          name: 'plus',
          theme: 'outlined',
        },
        i = n(84089),
        l = function (e, t) {
          return o.createElement(i.Z, (0, a.Z)({}, e, { ref: t, icon: r }));
        };
      var c = o.forwardRef(l);
    },
    92398: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Ee;
        },
      });
      var a = n(62435),
        o = n(97937),
        r = n(89705),
        i = n(24969),
        l = n(93967),
        c = n.n(l),
        s = n(87462),
        d = n(4942),
        u = n(1413),
        f = n(97685),
        v = n(71002),
        p = n(45987),
        b = n(21770),
        m = n(31131);
      n(80334);
      var h = (0, a.createContext)(null),
        g = n(74902),
        $ = n(9220),
        y = n(66680),
        k = n(42550),
        w = n(75164),
        x = function (e) {
          var t = e.activeTabOffset,
            n = e.horizontal,
            o = e.rtl,
            r = e.indicatorSize,
            i = (0, a.useState)(),
            l = (0, f.Z)(i, 2),
            c = l[0],
            s = l[1],
            d = (0, a.useRef)(),
            u = function (e) {
              return 'function' == typeof r
                ? r(e)
                : 'number' == typeof r
                  ? r
                  : e;
            };
          function v() {
            w.Z.cancel(d.current);
          }
          return (
            (0, a.useEffect)(
              function () {
                var e = {};
                return (
                  t &&
                    (n
                      ? (o
                          ? ((e.right = t.right + t.width / 2),
                            (e.transform = 'translateX(50%)'))
                          : ((e.left = t.left + t.width / 2),
                            (e.transform = 'translateX(-50%)')),
                        (e.width = u(t.width)))
                      : ((e.top = t.top + t.height / 2),
                        (e.transform = 'translateY(-50%)'),
                        (e.height = u(t.height)))),
                  v(),
                  (d.current = (0, w.Z)(function () {
                    s(e);
                  })),
                  v
                );
              },
              [t, n, o, r],
            ),
            { style: c }
          );
        },
        S = { width: 0, height: 0, left: 0, top: 0 };
      function C(e, t) {
        var n = a.useRef(e),
          o = a.useState({}),
          r = (0, f.Z)(o, 2)[1];
        return [
          n.current,
          function (e) {
            var a = 'function' == typeof e ? e(n.current) : e;
            a !== n.current && t(a, n.current), (n.current = a), r({});
          },
        ];
      }
      var _ = Math.pow(0.995, 20);
      var E = n(8410);
      function Z(e) {
        var t = (0, a.useState)(0),
          n = (0, f.Z)(t, 2),
          o = n[0],
          r = n[1],
          i = (0, a.useRef)(0),
          l = (0, a.useRef)();
        return (
          (l.current = e),
          (0, E.o)(
            function () {
              var e;
              null === (e = l.current) || void 0 === e || e.call(l);
            },
            [o],
          ),
          function () {
            i.current === o && ((i.current += 1), r(i.current));
          }
        );
      }
      var R = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function P(e) {
        var t;
        return (
          e instanceof Map
            ? ((t = {}),
              e.forEach(function (e, n) {
                t[n] = e;
              }))
            : (t = e),
          JSON.stringify(t)
        );
      }
      function T(e) {
        return String(e).replace(/"/g, 'TABS_DQ');
      }
      function I(e, t, n, a) {
        return !(
          !n ||
          a ||
          !1 === e ||
          (void 0 === e && (!1 === t || null === t))
        );
      }
      var N = a.forwardRef(function (e, t) {
          var n = e.prefixCls,
            o = e.editable,
            r = e.locale,
            i = e.style;
          return o && !1 !== o.showAdd
            ? a.createElement(
                'button',
                {
                  ref: t,
                  type: 'button',
                  className: ''.concat(n, '-nav-add'),
                  style: i,
                  'aria-label':
                    (null == r ? void 0 : r.addAriaLabel) || 'Add tab',
                  onClick: function (e) {
                    o.onEdit('add', { event: e });
                  },
                },
                o.addIcon || '+',
              )
            : null;
        }),
        L = N;
      var M = a.forwardRef(function (e, t) {
          var n,
            o = e.position,
            r = e.prefixCls,
            i = e.extra;
          if (!i) return null;
          var l = {};
          return (
            'object' !== (0, v.Z)(i) || a.isValidElement(i)
              ? (l.right = i)
              : (l = i),
            'right' === o && (n = l.right),
            'left' === o && (n = l.left),
            n
              ? a.createElement(
                  'div',
                  { className: ''.concat(r, '-extra-content'), ref: t },
                  n,
                )
              : null
          );
        }),
        z = n(29171),
        O = n(72512),
        B = n(15105),
        D = a.forwardRef(function (e, t) {
          var n = e.prefixCls,
            o = e.id,
            r = e.tabs,
            i = e.locale,
            l = e.mobile,
            s = e.moreIcon,
            u = void 0 === s ? 'More' : s,
            v = e.moreTransitionName,
            p = e.style,
            b = e.className,
            m = e.editable,
            h = e.tabBarGutter,
            g = e.rtl,
            $ = e.removeAriaLabel,
            y = e.onTabClick,
            k = e.getPopupContainer,
            w = e.popupClassName,
            x = (0, a.useState)(!1),
            S = (0, f.Z)(x, 2),
            C = S[0],
            _ = S[1],
            E = (0, a.useState)(null),
            Z = (0, f.Z)(E, 2),
            R = Z[0],
            P = Z[1],
            T = ''.concat(o, '-more-popup'),
            N = ''.concat(n, '-dropdown'),
            M = null !== R ? ''.concat(T, '-').concat(R) : null,
            D = null == i ? void 0 : i.dropdownAriaLabel;
          var A = a.createElement(
            O.ZP,
            {
              onClick: function (e) {
                var t = e.key,
                  n = e.domEvent;
                y(t, n), _(!1);
              },
              prefixCls: ''.concat(N, '-menu'),
              id: T,
              tabIndex: -1,
              role: 'listbox',
              'aria-activedescendant': M,
              selectedKeys: [R],
              'aria-label': void 0 !== D ? D : 'expanded dropdown',
            },
            r.map(function (e) {
              var t = e.closable,
                n = e.disabled,
                r = e.closeIcon,
                i = e.key,
                l = e.label,
                c = I(t, r, m, n);
              return a.createElement(
                O.sN,
                {
                  key: i,
                  id: ''.concat(T, '-').concat(i),
                  role: 'option',
                  'aria-controls': o && ''.concat(o, '-panel-').concat(i),
                  disabled: n,
                },
                a.createElement('span', null, l),
                c &&
                  a.createElement(
                    'button',
                    {
                      type: 'button',
                      'aria-label': $ || 'remove',
                      tabIndex: 0,
                      className: ''.concat(N, '-menu-item-remove'),
                      onClick: function (e) {
                        e.stopPropagation(),
                          (function (e, t) {
                            e.preventDefault(),
                              e.stopPropagation(),
                              m.onEdit('remove', { key: t, event: e });
                          })(e, i);
                      },
                    },
                    r || m.removeIcon || '×',
                  ),
              );
            }),
          );
          function j(e) {
            for (
              var t = r.filter(function (e) {
                  return !e.disabled;
                }),
                n =
                  t.findIndex(function (e) {
                    return e.key === R;
                  }) || 0,
                a = t.length,
                o = 0;
              o < a;
              o += 1
            ) {
              var i = t[(n = (n + e + a) % a)];
              if (!i.disabled) return void P(i.key);
            }
          }
          (0, a.useEffect)(
            function () {
              var e = document.getElementById(M);
              e && e.scrollIntoView && e.scrollIntoView(!1);
            },
            [R],
          ),
            (0, a.useEffect)(
              function () {
                C || P(null);
              },
              [C],
            );
          var G = (0, d.Z)({}, g ? 'marginRight' : 'marginLeft', h);
          r.length || ((G.visibility = 'hidden'), (G.order = 1));
          var W = c()((0, d.Z)({}, ''.concat(N, '-rtl'), g)),
            H = l
              ? null
              : a.createElement(
                  z.Z,
                  {
                    prefixCls: N,
                    overlay: A,
                    trigger: ['hover'],
                    visible: !!r.length && C,
                    transitionName: v,
                    onVisibleChange: _,
                    overlayClassName: c()(W, w),
                    mouseEnterDelay: 0.1,
                    mouseLeaveDelay: 0.1,
                    getPopupContainer: k,
                  },
                  a.createElement(
                    'button',
                    {
                      type: 'button',
                      className: ''.concat(n, '-nav-more'),
                      style: G,
                      tabIndex: -1,
                      'aria-hidden': 'true',
                      'aria-haspopup': 'listbox',
                      'aria-controls': T,
                      id: ''.concat(o, '-more'),
                      'aria-expanded': C,
                      onKeyDown: function (e) {
                        var t = e.which;
                        if (C)
                          switch (t) {
                            case B.Z.UP:
                              j(-1), e.preventDefault();
                              break;
                            case B.Z.DOWN:
                              j(1), e.preventDefault();
                              break;
                            case B.Z.ESC:
                              _(!1);
                              break;
                            case B.Z.SPACE:
                            case B.Z.ENTER:
                              null !== R && y(R, e);
                          }
                        else
                          [B.Z.DOWN, B.Z.SPACE, B.Z.ENTER].includes(t) &&
                            (_(!0), e.preventDefault());
                      },
                    },
                    u,
                  ),
                );
          return a.createElement(
            'div',
            {
              className: c()(''.concat(n, '-nav-operations'), b),
              style: p,
              ref: t,
            },
            H,
            a.createElement(L, { prefixCls: n, locale: i, editable: m }),
          );
        }),
        A = a.memo(D, function (e, t) {
          return t.tabMoving;
        }),
        j = function (e) {
          var t,
            n = e.prefixCls,
            o = e.id,
            r = e.active,
            i = e.tab,
            l = i.key,
            s = i.label,
            u = i.disabled,
            f = i.closeIcon,
            v = i.icon,
            p = e.closable,
            b = e.renderWrapper,
            m = e.removeAriaLabel,
            h = e.editable,
            g = e.onClick,
            $ = e.onFocus,
            y = e.style,
            k = ''.concat(n, '-tab'),
            w = I(p, f, h, u);
          function x(e) {
            u || g(e);
          }
          var S = a.useMemo(
              function () {
                return v && 'string' == typeof s
                  ? a.createElement('span', null, s)
                  : s;
              },
              [s, v],
            ),
            C = a.createElement(
              'div',
              {
                key: l,
                'data-node-key': T(l),
                className: c()(
                  k,
                  ((t = {}),
                  (0, d.Z)(t, ''.concat(k, '-with-remove'), w),
                  (0, d.Z)(t, ''.concat(k, '-active'), r),
                  (0, d.Z)(t, ''.concat(k, '-disabled'), u),
                  t),
                ),
                style: y,
                onClick: x,
              },
              a.createElement(
                'div',
                {
                  role: 'tab',
                  'aria-selected': r,
                  id: o && ''.concat(o, '-tab-').concat(l),
                  className: ''.concat(k, '-btn'),
                  'aria-controls': o && ''.concat(o, '-panel-').concat(l),
                  'aria-disabled': u,
                  tabIndex: u ? null : 0,
                  onClick: function (e) {
                    e.stopPropagation(), x(e);
                  },
                  onKeyDown: function (e) {
                    [B.Z.SPACE, B.Z.ENTER].includes(e.which) &&
                      (e.preventDefault(), x(e));
                  },
                  onFocus: $,
                },
                v &&
                  a.createElement(
                    'span',
                    { className: ''.concat(k, '-icon') },
                    v,
                  ),
                s && S,
              ),
              w &&
                a.createElement(
                  'button',
                  {
                    type: 'button',
                    'aria-label': m || 'remove',
                    tabIndex: 0,
                    className: ''.concat(k, '-remove'),
                    onClick: function (e) {
                      var t;
                      e.stopPropagation(),
                        (t = e).preventDefault(),
                        t.stopPropagation(),
                        h.onEdit('remove', { key: l, event: t });
                    },
                  },
                  f || h.removeIcon || '×',
                ),
            );
          return b ? b(C) : C;
        },
        G = function (e) {
          var t = e.current || {},
            n = t.offsetWidth,
            a = void 0 === n ? 0 : n,
            o = t.offsetHeight,
            r = void 0 === o ? 0 : o;
          if (e.current) {
            var i = e.current.getBoundingClientRect(),
              l = i.width,
              c = i.height;
            if (Math.abs(l - a) < 1) return [l, c];
          }
          return [a, r];
        },
        W = function (e, t) {
          return e[t ? 0 : 1];
        },
        H = a.forwardRef(function (e, t) {
          var n,
            o = e.className,
            r = e.style,
            i = e.id,
            l = e.animated,
            v = e.activeKey,
            p = e.rtl,
            b = e.extra,
            m = e.editable,
            w = e.locale,
            E = e.tabPosition,
            I = e.tabBarGutter,
            N = e.children,
            z = e.onTabClick,
            O = e.onTabScroll,
            B = e.indicatorSize,
            D = a.useContext(h),
            H = D.prefixCls,
            X = D.tabs,
            q = (0, a.useRef)(null),
            F = (0, a.useRef)(null),
            V = (0, a.useRef)(null),
            K = (0, a.useRef)(null),
            Y = (0, a.useRef)(null),
            Q = (0, a.useRef)(null),
            J = (0, a.useRef)(null),
            U = 'top' === E || 'bottom' === E,
            ee = C(0, function (e, t) {
              U && O && O({ direction: e > t ? 'left' : 'right' });
            }),
            te = (0, f.Z)(ee, 2),
            ne = te[0],
            ae = te[1],
            oe = C(0, function (e, t) {
              !U && O && O({ direction: e > t ? 'top' : 'bottom' });
            }),
            re = (0, f.Z)(oe, 2),
            ie = re[0],
            le = re[1],
            ce = (0, a.useState)([0, 0]),
            se = (0, f.Z)(ce, 2),
            de = se[0],
            ue = se[1],
            fe = (0, a.useState)([0, 0]),
            ve = (0, f.Z)(fe, 2),
            pe = ve[0],
            be = ve[1],
            me = (0, a.useState)([0, 0]),
            he = (0, f.Z)(me, 2),
            ge = he[0],
            $e = he[1],
            ye = (0, a.useState)([0, 0]),
            ke = (0, f.Z)(ye, 2),
            we = ke[0],
            xe = ke[1],
            Se = (function (e) {
              var t = (0, a.useRef)([]),
                n = (0, a.useState)({}),
                o = (0, f.Z)(n, 2)[1],
                r = (0, a.useRef)('function' == typeof e ? e() : e),
                i = Z(function () {
                  var e = r.current;
                  t.current.forEach(function (t) {
                    e = t(e);
                  }),
                    (t.current = []),
                    (r.current = e),
                    o({});
                });
              return [
                r.current,
                function (e) {
                  t.current.push(e), i();
                },
              ];
            })(new Map()),
            Ce = (0, f.Z)(Se, 2),
            _e = Ce[0],
            Ee = Ce[1],
            Ze = (function (e, t, n) {
              return (0, a.useMemo)(
                function () {
                  for (
                    var n,
                      a = new Map(),
                      o =
                        t.get(
                          null === (n = e[0]) || void 0 === n ? void 0 : n.key,
                        ) || S,
                      r = o.left + o.width,
                      i = 0;
                    i < e.length;
                    i += 1
                  ) {
                    var l,
                      c = e[i].key,
                      s = t.get(c);
                    s ||
                      (s =
                        t.get(
                          null === (l = e[i - 1]) || void 0 === l
                            ? void 0
                            : l.key,
                        ) || S);
                    var d = a.get(c) || (0, u.Z)({}, s);
                    (d.right = r - d.left - d.width), a.set(c, d);
                  }
                  return a;
                },
                [
                  e
                    .map(function (e) {
                      return e.key;
                    })
                    .join('_'),
                  t,
                  n,
                ],
              );
            })(X, _e, pe[0]),
            Re = W(de, U),
            Pe = W(pe, U),
            Te = W(ge, U),
            Ie = W(we, U),
            Ne = Re < Pe + Te,
            Le = Ne ? Re - Ie : Re - Te,
            Me = ''.concat(H, '-nav-operations-hidden'),
            ze = 0,
            Oe = 0;
          function Be(e) {
            return e < ze ? ze : e > Oe ? Oe : e;
          }
          U && p
            ? ((ze = 0), (Oe = Math.max(0, Pe - Le)))
            : ((ze = Math.min(0, Le - Pe)), (Oe = 0));
          var De = (0, a.useRef)(null),
            Ae = (0, a.useState)(),
            je = (0, f.Z)(Ae, 2),
            Ge = je[0],
            We = je[1];
          function He() {
            We(Date.now());
          }
          function Xe() {
            De.current && clearTimeout(De.current);
          }
          !(function (e, t) {
            var n = (0, a.useState)(),
              o = (0, f.Z)(n, 2),
              r = o[0],
              i = o[1],
              l = (0, a.useState)(0),
              c = (0, f.Z)(l, 2),
              s = c[0],
              d = c[1],
              u = (0, a.useState)(0),
              v = (0, f.Z)(u, 2),
              p = v[0],
              b = v[1],
              m = (0, a.useState)(),
              h = (0, f.Z)(m, 2),
              g = h[0],
              $ = h[1],
              y = (0, a.useRef)(),
              k = (0, a.useRef)(),
              w = (0, a.useRef)(null);
            (w.current = {
              onTouchStart: function (e) {
                var t = e.touches[0],
                  n = t.screenX,
                  a = t.screenY;
                i({ x: n, y: a }), window.clearInterval(y.current);
              },
              onTouchMove: function (e) {
                if (r) {
                  e.preventDefault();
                  var n = e.touches[0],
                    a = n.screenX,
                    o = n.screenY;
                  i({ x: a, y: o });
                  var l = a - r.x,
                    c = o - r.y;
                  t(l, c);
                  var u = Date.now();
                  d(u), b(u - s), $({ x: l, y: c });
                }
              },
              onTouchEnd: function () {
                if (r && (i(null), $(null), g)) {
                  var e = g.x / p,
                    n = g.y / p,
                    a = Math.abs(e),
                    o = Math.abs(n);
                  if (Math.max(a, o) < 0.1) return;
                  var l = e,
                    c = n;
                  y.current = window.setInterval(function () {
                    Math.abs(l) < 0.01 && Math.abs(c) < 0.01
                      ? window.clearInterval(y.current)
                      : t(20 * (l *= _), 20 * (c *= _));
                  }, 20);
                }
              },
              onWheel: function (e) {
                var n = e.deltaX,
                  a = e.deltaY,
                  o = 0,
                  r = Math.abs(n),
                  i = Math.abs(a);
                r === i
                  ? (o = 'x' === k.current ? n : a)
                  : r > i
                    ? ((o = n), (k.current = 'x'))
                    : ((o = a), (k.current = 'y')),
                  t(-o, -o) && e.preventDefault();
              },
            }),
              a.useEffect(function () {
                function t(e) {
                  w.current.onTouchMove(e);
                }
                function n(e) {
                  w.current.onTouchEnd(e);
                }
                return (
                  document.addEventListener('touchmove', t, { passive: !1 }),
                  document.addEventListener('touchend', n, { passive: !1 }),
                  e.current.addEventListener(
                    'touchstart',
                    function (e) {
                      w.current.onTouchStart(e);
                    },
                    { passive: !1 },
                  ),
                  e.current.addEventListener('wheel', function (e) {
                    w.current.onWheel(e);
                  }),
                  function () {
                    document.removeEventListener('touchmove', t),
                      document.removeEventListener('touchend', n);
                  }
                );
              }, []);
          })(K, function (e, t) {
            function n(e, t) {
              e(function (e) {
                return Be(e + t);
              });
            }
            return !!Ne && (U ? n(ae, e) : n(le, t), Xe(), He(), !0);
          }),
            (0, a.useEffect)(
              function () {
                return (
                  Xe(),
                  Ge &&
                    (De.current = setTimeout(function () {
                      We(0);
                    }, 100)),
                  Xe
                );
              },
              [Ge],
            );
          var qe = (function (e, t, n, o, r, i, l) {
              var c,
                s,
                d,
                u = l.tabs,
                f = l.tabPosition,
                v = l.rtl;
              return (
                ['top', 'bottom'].includes(f)
                  ? ((c = 'width'),
                    (s = v ? 'right' : 'left'),
                    (d = Math.abs(n)))
                  : ((c = 'height'), (s = 'top'), (d = -n)),
                (0, a.useMemo)(
                  function () {
                    if (!u.length) return [0, 0];
                    for (var n = u.length, a = n, o = 0; o < n; o += 1) {
                      var r = e.get(u[o].key) || R;
                      if (r[s] + r[c] > d + t) {
                        a = o - 1;
                        break;
                      }
                    }
                    for (var i = 0, l = n - 1; l >= 0; l -= 1)
                      if ((e.get(u[l].key) || R)[s] < d) {
                        i = l + 1;
                        break;
                      }
                    return i >= a ? [0, 0] : [i, a];
                  },
                  [
                    e,
                    t,
                    o,
                    r,
                    i,
                    d,
                    f,
                    u
                      .map(function (e) {
                        return e.key;
                      })
                      .join('_'),
                    v,
                  ],
                )
              );
            })(
              Ze,
              Le,
              U ? ne : ie,
              Pe,
              Te,
              Ie,
              (0, u.Z)((0, u.Z)({}, e), {}, { tabs: X }),
            ),
            Fe = (0, f.Z)(qe, 2),
            Ve = Fe[0],
            Ke = Fe[1],
            Ye = (0, y.Z)(function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : v,
                t = Ze.get(e) || {
                  width: 0,
                  height: 0,
                  left: 0,
                  right: 0,
                  top: 0,
                };
              if (U) {
                var n = ne;
                p
                  ? t.right < ne
                    ? (n = t.right)
                    : t.right + t.width > ne + Le &&
                      (n = t.right + t.width - Le)
                  : t.left < -ne
                    ? (n = -t.left)
                    : t.left + t.width > -ne + Le &&
                      (n = -(t.left + t.width - Le)),
                  le(0),
                  ae(Be(n));
              } else {
                var a = ie;
                t.top < -ie
                  ? (a = -t.top)
                  : t.top + t.height > -ie + Le &&
                    (a = -(t.top + t.height - Le)),
                  ae(0),
                  le(Be(a));
              }
            }),
            Qe = {};
          'top' === E || 'bottom' === E
            ? (Qe[p ? 'marginRight' : 'marginLeft'] = I)
            : (Qe.marginTop = I);
          var Je = X.map(function (e, t) {
              var n = e.key;
              return a.createElement(j, {
                id: i,
                prefixCls: H,
                key: n,
                tab: e,
                style: 0 === t ? void 0 : Qe,
                closable: e.closable,
                editable: m,
                active: n === v,
                renderWrapper: N,
                removeAriaLabel: null == w ? void 0 : w.removeAriaLabel,
                onClick: function (e) {
                  z(n, e);
                },
                onFocus: function () {
                  Ye(n),
                    He(),
                    K.current &&
                      (p || (K.current.scrollLeft = 0),
                      (K.current.scrollTop = 0));
                },
              });
            }),
            Ue = function () {
              return Ee(function () {
                var e,
                  t = new Map(),
                  n =
                    null === (e = Y.current) || void 0 === e
                      ? void 0
                      : e.getBoundingClientRect();
                return (
                  X.forEach(function (e) {
                    var a,
                      o = e.key,
                      r =
                        null === (a = Y.current) || void 0 === a
                          ? void 0
                          : a.querySelector(
                              '[data-node-key="'.concat(T(o), '"]'),
                            );
                    if (r) {
                      var i = (function (e, t) {
                          var n = e.offsetWidth,
                            a = e.offsetHeight,
                            o = e.offsetTop,
                            r = e.offsetLeft,
                            i = e.getBoundingClientRect(),
                            l = i.width,
                            c = i.height,
                            s = i.x,
                            d = i.y;
                          return Math.abs(l - n) < 1
                            ? [l, c, s - t.x, d - t.y]
                            : [n, a, r, o];
                        })(r, n),
                        l = (0, f.Z)(i, 4),
                        c = l[0],
                        s = l[1],
                        d = l[2],
                        u = l[3];
                      t.set(o, { width: c, height: s, left: d, top: u });
                    }
                  }),
                  t
                );
              });
            };
          (0, a.useEffect)(
            function () {
              Ue();
            },
            [
              X.map(function (e) {
                return e.key;
              }).join('_'),
            ],
          );
          var et = Z(function () {
              var e = G(q),
                t = G(F),
                n = G(V);
              ue([e[0] - t[0] - n[0], e[1] - t[1] - n[1]]);
              var a = G(J);
              $e(a);
              var o = G(Q);
              xe(o);
              var r = G(Y);
              be([r[0] - a[0], r[1] - a[1]]), Ue();
            }),
            tt = X.slice(0, Ve),
            nt = X.slice(Ke + 1),
            at = [].concat((0, g.Z)(tt), (0, g.Z)(nt)),
            ot = Ze.get(v),
            rt = x({
              activeTabOffset: ot,
              horizontal: U,
              rtl: p,
              indicatorSize: B,
            }).style;
          (0, a.useEffect)(
            function () {
              Ye();
            },
            [v, ze, Oe, P(ot), P(Ze), U],
          ),
            (0, a.useEffect)(
              function () {
                et();
              },
              [p],
            );
          var it,
            lt,
            ct,
            st,
            dt = !!at.length,
            ut = ''.concat(H, '-nav-wrap');
          return (
            U
              ? p
                ? ((lt = ne > 0), (it = ne !== Oe))
                : ((it = ne < 0), (lt = ne !== ze))
              : ((ct = ie < 0), (st = ie !== ze)),
            a.createElement(
              $.Z,
              { onResize: et },
              a.createElement(
                'div',
                {
                  ref: (0, k.x1)(t, q),
                  role: 'tablist',
                  className: c()(''.concat(H, '-nav'), o),
                  style: r,
                  onKeyDown: function () {
                    He();
                  },
                },
                a.createElement(M, {
                  ref: F,
                  position: 'left',
                  extra: b,
                  prefixCls: H,
                }),
                a.createElement(
                  $.Z,
                  { onResize: et },
                  a.createElement(
                    'div',
                    {
                      className: c()(
                        ut,
                        ((n = {}),
                        (0, d.Z)(n, ''.concat(ut, '-ping-left'), it),
                        (0, d.Z)(n, ''.concat(ut, '-ping-right'), lt),
                        (0, d.Z)(n, ''.concat(ut, '-ping-top'), ct),
                        (0, d.Z)(n, ''.concat(ut, '-ping-bottom'), st),
                        n),
                      ),
                      ref: K,
                    },
                    a.createElement(
                      $.Z,
                      { onResize: et },
                      a.createElement(
                        'div',
                        {
                          ref: Y,
                          className: ''.concat(H, '-nav-list'),
                          style: {
                            transform: 'translate('
                              .concat(ne, 'px, ')
                              .concat(ie, 'px)'),
                            transition: Ge ? 'none' : void 0,
                          },
                        },
                        Je,
                        a.createElement(L, {
                          ref: J,
                          prefixCls: H,
                          locale: w,
                          editable: m,
                          style: (0, u.Z)(
                            (0, u.Z)({}, 0 === Je.length ? void 0 : Qe),
                            {},
                            { visibility: dt ? 'hidden' : null },
                          ),
                        }),
                        a.createElement('div', {
                          className: c()(
                            ''.concat(H, '-ink-bar'),
                            (0, d.Z)(
                              {},
                              ''.concat(H, '-ink-bar-animated'),
                              l.inkBar,
                            ),
                          ),
                          style: rt,
                        }),
                      ),
                    ),
                  ),
                ),
                a.createElement(
                  A,
                  (0, s.Z)({}, e, {
                    removeAriaLabel: null == w ? void 0 : w.removeAriaLabel,
                    ref: Q,
                    prefixCls: H,
                    tabs: at,
                    className: !dt && Me,
                    tabMoving: !!Ge,
                  }),
                ),
                a.createElement(M, {
                  ref: V,
                  position: 'right',
                  extra: b,
                  prefixCls: H,
                }),
              ),
            )
          );
        }),
        X = H,
        q = a.forwardRef(function (e, t) {
          var n = e.prefixCls,
            o = e.className,
            r = e.style,
            i = e.id,
            l = e.active,
            s = e.tabKey,
            d = e.children;
          return a.createElement(
            'div',
            {
              id: i && ''.concat(i, '-panel-').concat(s),
              role: 'tabpanel',
              tabIndex: l ? 0 : -1,
              'aria-labelledby': i && ''.concat(i, '-tab-').concat(s),
              'aria-hidden': !l,
              style: r,
              className: c()(n, l && ''.concat(n, '-active'), o),
              ref: t,
            },
            d,
          );
        });
      var F = q,
        V = ['renderTabBar'],
        K = ['label', 'key'];
      var Y = function (e) {
          var t = e.renderTabBar,
            n = (0, p.Z)(e, V),
            o = a.useContext(h).tabs;
          return t
            ? t(
                (0, u.Z)(
                  (0, u.Z)({}, n),
                  {},
                  {
                    panes: o.map(function (e) {
                      var t = e.label,
                        n = e.key,
                        o = (0, p.Z)(e, K);
                      return a.createElement(
                        F,
                        (0, s.Z)({ tab: t, key: n, tabKey: n }, o),
                      );
                    }),
                  },
                ),
                X,
              )
            : a.createElement(X, n);
        },
        Q = n(82225),
        J = [
          'key',
          'forceRender',
          'style',
          'className',
          'destroyInactiveTabPane',
        ],
        U = function (e) {
          var t = e.id,
            n = e.activeKey,
            o = e.animated,
            r = e.tabPosition,
            i = e.destroyInactiveTabPane,
            l = a.useContext(h),
            f = l.prefixCls,
            v = l.tabs,
            b = o.tabPane,
            m = ''.concat(f, '-tabpane');
          return a.createElement(
            'div',
            { className: c()(''.concat(f, '-content-holder')) },
            a.createElement(
              'div',
              {
                className: c()(
                  ''.concat(f, '-content'),
                  ''.concat(f, '-content-').concat(r),
                  (0, d.Z)({}, ''.concat(f, '-content-animated'), b),
                ),
              },
              v.map(function (e) {
                var r = e.key,
                  l = e.forceRender,
                  d = e.style,
                  f = e.className,
                  v = e.destroyInactiveTabPane,
                  h = (0, p.Z)(e, J),
                  g = r === n;
                return a.createElement(
                  Q.ZP,
                  (0, s.Z)(
                    {
                      key: r,
                      visible: g,
                      forceRender: l,
                      removeOnLeave: !(!i && !v),
                      leavedClassName: ''.concat(m, '-hidden'),
                    },
                    o.tabPaneMotion,
                  ),
                  function (e, n) {
                    var o = e.style,
                      i = e.className;
                    return a.createElement(
                      F,
                      (0, s.Z)({}, h, {
                        prefixCls: m,
                        id: t,
                        tabKey: r,
                        animated: b,
                        active: g,
                        style: (0, u.Z)((0, u.Z)({}, d), o),
                        className: c()(f, i),
                        ref: n,
                      }),
                    );
                  },
                );
              }),
            ),
          );
        },
        ee = [
          'id',
          'prefixCls',
          'className',
          'items',
          'direction',
          'activeKey',
          'defaultActiveKey',
          'editable',
          'animated',
          'tabPosition',
          'tabBarGutter',
          'tabBarStyle',
          'tabBarExtraContent',
          'locale',
          'moreIcon',
          'moreTransitionName',
          'destroyInactiveTabPane',
          'renderTabBar',
          'onChange',
          'onTabClick',
          'onTabScroll',
          'getPopupContainer',
          'popupClassName',
          'indicatorSize',
        ],
        te = 0,
        ne = a.forwardRef(function (e, t) {
          var n,
            o = e.id,
            r = e.prefixCls,
            i = void 0 === r ? 'rc-tabs' : r,
            l = e.className,
            g = e.items,
            $ = e.direction,
            y = e.activeKey,
            k = e.defaultActiveKey,
            w = e.editable,
            x = e.animated,
            S = e.tabPosition,
            C = void 0 === S ? 'top' : S,
            _ = e.tabBarGutter,
            E = e.tabBarStyle,
            Z = e.tabBarExtraContent,
            R = e.locale,
            P = e.moreIcon,
            T = e.moreTransitionName,
            I = e.destroyInactiveTabPane,
            N = e.renderTabBar,
            L = e.onChange,
            M = e.onTabClick,
            z = e.onTabScroll,
            O = e.getPopupContainer,
            B = e.popupClassName,
            D = e.indicatorSize,
            A = (0, p.Z)(e, ee),
            j = a.useMemo(
              function () {
                return (g || []).filter(function (e) {
                  return e && 'object' === (0, v.Z)(e) && 'key' in e;
                });
              },
              [g],
            ),
            G = 'rtl' === $,
            W = (function () {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : { inkBar: !0, tabPane: !1 };
              return (
                (e =
                  !1 === t
                    ? { inkBar: !1, tabPane: !1 }
                    : !0 === t
                      ? { inkBar: !0, tabPane: !1 }
                      : (0, u.Z)(
                          { inkBar: !0 },
                          'object' === (0, v.Z)(t) ? t : {},
                        )).tabPaneMotion &&
                  void 0 === e.tabPane &&
                  (e.tabPane = !0),
                !e.tabPaneMotion && e.tabPane && (e.tabPane = !1),
                e
              );
            })(x),
            H = (0, a.useState)(!1),
            X = (0, f.Z)(H, 2),
            q = X[0],
            F = X[1];
          (0, a.useEffect)(function () {
            F((0, m.Z)());
          }, []);
          var V = (0, b.Z)(
              function () {
                var e;
                return null === (e = j[0]) || void 0 === e ? void 0 : e.key;
              },
              { value: y, defaultValue: k },
            ),
            K = (0, f.Z)(V, 2),
            Q = K[0],
            J = K[1],
            ne = (0, a.useState)(function () {
              return j.findIndex(function (e) {
                return e.key === Q;
              });
            }),
            ae = (0, f.Z)(ne, 2),
            oe = ae[0],
            re = ae[1];
          (0, a.useEffect)(
            function () {
              var e,
                t = j.findIndex(function (e) {
                  return e.key === Q;
                });
              -1 === t &&
                ((t = Math.max(0, Math.min(oe, j.length - 1))),
                J(null === (e = j[t]) || void 0 === e ? void 0 : e.key));
              re(t);
            },
            [
              j
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
              Q,
              oe,
            ],
          );
          var ie = (0, b.Z)(null, { value: o }),
            le = (0, f.Z)(ie, 2),
            ce = le[0],
            se = le[1];
          (0, a.useEffect)(function () {
            o || (se('rc-tabs-'.concat(te)), (te += 1));
          }, []);
          var de = {
              id: ce,
              activeKey: Q,
              animated: W,
              tabPosition: C,
              rtl: G,
              mobile: q,
            },
            ue = (0, u.Z)(
              (0, u.Z)({}, de),
              {},
              {
                editable: w,
                locale: R,
                moreIcon: P,
                moreTransitionName: T,
                tabBarGutter: _,
                onTabClick: function (e, t) {
                  null == M || M(e, t);
                  var n = e !== Q;
                  J(e), n && (null == L || L(e));
                },
                onTabScroll: z,
                extra: Z,
                style: E,
                panes: null,
                getPopupContainer: O,
                popupClassName: B,
                indicatorSize: D,
              },
            );
          return a.createElement(
            h.Provider,
            { value: { tabs: j, prefixCls: i } },
            a.createElement(
              'div',
              (0, s.Z)(
                {
                  ref: t,
                  id: o,
                  className: c()(
                    i,
                    ''.concat(i, '-').concat(C),
                    ((n = {}),
                    (0, d.Z)(n, ''.concat(i, '-mobile'), q),
                    (0, d.Z)(n, ''.concat(i, '-editable'), w),
                    (0, d.Z)(n, ''.concat(i, '-rtl'), G),
                    n),
                    l,
                  ),
                },
                A,
              ),
              a.createElement(Y, (0, s.Z)({}, ue, { renderTabBar: N })),
              a.createElement(
                U,
                (0, s.Z)({ destroyInactiveTabPane: I }, de, { animated: W }),
              ),
            ),
          );
        });
      var ae = ne,
        oe = n(53124),
        re = n(98675),
        ie = n(33603);
      const le = { motionAppear: !1, motionEnter: !0, motionLeave: !0 };
      var ce = n(50344),
        se = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (a = Object.getOwnPropertySymbols(e); o < a.length; o++)
              t.indexOf(a[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[o]) &&
                (n[a[o]] = e[a[o]]);
          }
          return n;
        };
      var de = n(54548),
        ue = n(14747),
        fe = n(91945),
        ve = n(45503),
        pe = n(48611);
      var be = (e) => {
        const { componentCls: t, motionDurationSlow: n } = e;
        return [
          {
            [t]: {
              [`${t}-switch`]: {
                '&-appear, &-enter': {
                  transition: 'none',
                  '&-start': { opacity: 0 },
                  '&-active': { opacity: 1, transition: `opacity ${n}` },
                },
                '&-leave': {
                  position: 'absolute',
                  transition: 'none',
                  inset: 0,
                  '&-start': { opacity: 1 },
                  '&-active': { opacity: 0, transition: `opacity ${n}` },
                },
              },
            },
          },
          [(0, pe.oN)(e, 'slide-up'), (0, pe.oN)(e, 'slide-down')],
        ];
      };
      const me = (e) => {
          const {
            componentCls: t,
            tabsCardPadding: n,
            cardBg: a,
            cardGutter: o,
            colorBorderSecondary: r,
            itemSelectedColor: i,
          } = e;
          return {
            [`${t}-card`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                [`${t}-tab`]: {
                  margin: 0,
                  padding: n,
                  background: a,
                  border: `${(0, de.bf)(e.lineWidth)} ${e.lineType} ${r}`,
                  transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                },
                [`${t}-tab-active`]: {
                  color: i,
                  background: e.colorBgContainer,
                },
                [`${t}-ink-bar`]: { visibility: 'hidden' },
              },
              [`&${t}-top, &${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab + ${t}-tab`]: {
                    marginLeft: { _skip_check_: !0, value: (0, de.bf)(o) },
                  },
                },
              },
              [`&${t}-top`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: {
                    borderRadius: `${(0, de.bf)(e.borderRadiusLG)} ${(0, de.bf)(e.borderRadiusLG)} 0 0`,
                  },
                  [`${t}-tab-active`]: {
                    borderBottomColor: e.colorBgContainer,
                  },
                },
              },
              [`&${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: {
                    borderRadius: `0 0 ${(0, de.bf)(e.borderRadiusLG)} ${(0, de.bf)(e.borderRadiusLG)}`,
                  },
                  [`${t}-tab-active`]: { borderTopColor: e.colorBgContainer },
                },
              },
              [`&${t}-left, &${t}-right`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab + ${t}-tab`]: { marginTop: (0, de.bf)(o) },
                },
              },
              [`&${t}-left`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `${(0, de.bf)(e.borderRadiusLG)} 0 0 ${(0, de.bf)(e.borderRadiusLG)}`,
                    },
                  },
                  [`${t}-tab-active`]: {
                    borderRightColor: {
                      _skip_check_: !0,
                      value: e.colorBgContainer,
                    },
                  },
                },
              },
              [`&${t}-right`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `0 ${(0, de.bf)(e.borderRadiusLG)} ${(0, de.bf)(e.borderRadiusLG)} 0`,
                    },
                  },
                  [`${t}-tab-active`]: {
                    borderLeftColor: {
                      _skip_check_: !0,
                      value: e.colorBgContainer,
                    },
                  },
                },
              },
            },
          };
        },
        he = (e) => {
          const {
            componentCls: t,
            itemHoverColor: n,
            dropdownEdgeChildVerticalPadding: a,
          } = e;
          return {
            [`${t}-dropdown`]: Object.assign(Object.assign({}, (0, ue.Wf)(e)), {
              position: 'absolute',
              top: -9999,
              left: { _skip_check_: !0, value: -9999 },
              zIndex: e.zIndexPopup,
              display: 'block',
              '&-hidden': { display: 'none' },
              [`${t}-dropdown-menu`]: {
                maxHeight: e.tabsDropdownHeight,
                margin: 0,
                padding: `${(0, de.bf)(a)} 0`,
                overflowX: 'hidden',
                overflowY: 'auto',
                textAlign: { _skip_check_: !0, value: 'left' },
                listStyleType: 'none',
                backgroundColor: e.colorBgContainer,
                backgroundClip: 'padding-box',
                borderRadius: e.borderRadiusLG,
                outline: 'none',
                boxShadow: e.boxShadowSecondary,
                '&-item': Object.assign(Object.assign({}, ue.vS), {
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: e.tabsDropdownWidth,
                  margin: 0,
                  padding: `${(0, de.bf)(e.paddingXXS)} ${(0, de.bf)(e.paddingSM)}`,
                  color: e.colorText,
                  fontWeight: 'normal',
                  fontSize: e.fontSize,
                  lineHeight: e.lineHeight,
                  cursor: 'pointer',
                  transition: `all ${e.motionDurationSlow}`,
                  '> span': { flex: 1, whiteSpace: 'nowrap' },
                  '&-remove': {
                    flex: 'none',
                    marginLeft: { _skip_check_: !0, value: e.marginSM },
                    color: e.colorTextDescription,
                    fontSize: e.fontSizeSM,
                    background: 'transparent',
                    border: 0,
                    cursor: 'pointer',
                    '&:hover': { color: n },
                  },
                  '&:hover': { background: e.controlItemBgHover },
                  '&-disabled': {
                    '&, &:hover': {
                      color: e.colorTextDisabled,
                      background: 'transparent',
                      cursor: 'not-allowed',
                    },
                  },
                }),
              },
            }),
          };
        },
        ge = (e) => {
          const {
            componentCls: t,
            margin: n,
            colorBorderSecondary: a,
            horizontalMargin: o,
            verticalItemPadding: r,
            verticalItemMargin: i,
            calc: l,
          } = e;
          return {
            [`${t}-top, ${t}-bottom`]: {
              flexDirection: 'column',
              [`> ${t}-nav, > div > ${t}-nav`]: {
                margin: o,
                '&::before': {
                  position: 'absolute',
                  right: { _skip_check_: !0, value: 0 },
                  left: { _skip_check_: !0, value: 0 },
                  borderBottom: `${(0, de.bf)(e.lineWidth)} ${e.lineType} ${a}`,
                  content: "''",
                },
                [`${t}-ink-bar`]: {
                  height: e.lineWidthBold,
                  '&-animated': {
                    transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},\n            right ${e.motionDurationSlow}`,
                  },
                },
                [`${t}-nav-wrap`]: {
                  '&::before, &::after': {
                    top: 0,
                    bottom: 0,
                    width: e.controlHeight,
                  },
                  '&::before': {
                    left: { _skip_check_: !0, value: 0 },
                    boxShadow: e.boxShadowTabsOverflowLeft,
                  },
                  '&::after': {
                    right: { _skip_check_: !0, value: 0 },
                    boxShadow: e.boxShadowTabsOverflowRight,
                  },
                  [`&${t}-nav-wrap-ping-left::before`]: { opacity: 1 },
                  [`&${t}-nav-wrap-ping-right::after`]: { opacity: 1 },
                },
              },
            },
            [`${t}-top`]: {
              [`> ${t}-nav,\n        > div > ${t}-nav`]: {
                '&::before': { bottom: 0 },
                [`${t}-ink-bar`]: { bottom: 0 },
              },
            },
            [`${t}-bottom`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                order: 1,
                marginTop: n,
                marginBottom: 0,
                '&::before': { top: 0 },
                [`${t}-ink-bar`]: { top: 0 },
              },
              [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
                order: 0,
              },
            },
            [`${t}-left, ${t}-right`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                flexDirection: 'column',
                minWidth: l(e.controlHeight).mul(1.25).equal(),
                [`${t}-tab`]: { padding: r, textAlign: 'center' },
                [`${t}-tab + ${t}-tab`]: { margin: i },
                [`${t}-nav-wrap`]: {
                  flexDirection: 'column',
                  '&::before, &::after': {
                    right: { _skip_check_: !0, value: 0 },
                    left: { _skip_check_: !0, value: 0 },
                    height: e.controlHeight,
                  },
                  '&::before': {
                    top: 0,
                    boxShadow: e.boxShadowTabsOverflowTop,
                  },
                  '&::after': {
                    bottom: 0,
                    boxShadow: e.boxShadowTabsOverflowBottom,
                  },
                  [`&${t}-nav-wrap-ping-top::before`]: { opacity: 1 },
                  [`&${t}-nav-wrap-ping-bottom::after`]: { opacity: 1 },
                },
                [`${t}-ink-bar`]: {
                  width: e.lineWidthBold,
                  '&-animated': {
                    transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`,
                  },
                },
                [`${t}-nav-list, ${t}-nav-operations`]: {
                  flex: '1 0 auto',
                  flexDirection: 'column',
                },
              },
            },
            [`${t}-left`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                [`${t}-ink-bar`]: { right: { _skip_check_: !0, value: 0 } },
              },
              [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
                marginLeft: {
                  _skip_check_: !0,
                  value: (0, de.bf)(l(e.lineWidth).mul(-1).equal()),
                },
                borderLeft: {
                  _skip_check_: !0,
                  value: `${(0, de.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                },
                [`> ${t}-content > ${t}-tabpane`]: {
                  paddingLeft: { _skip_check_: !0, value: e.paddingLG },
                },
              },
            },
            [`${t}-right`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                order: 1,
                [`${t}-ink-bar`]: { left: { _skip_check_: !0, value: 0 } },
              },
              [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
                order: 0,
                marginRight: {
                  _skip_check_: !0,
                  value: l(e.lineWidth).mul(-1).equal(),
                },
                borderRight: {
                  _skip_check_: !0,
                  value: `${(0, de.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                },
                [`> ${t}-content > ${t}-tabpane`]: {
                  paddingRight: { _skip_check_: !0, value: e.paddingLG },
                },
              },
            },
          };
        },
        $e = (e) => {
          const {
            componentCls: t,
            cardPaddingSM: n,
            cardPaddingLG: a,
            horizontalItemPaddingSM: o,
            horizontalItemPaddingLG: r,
          } = e;
          return {
            [t]: {
              '&-small': {
                [`> ${t}-nav`]: {
                  [`${t}-tab`]: { padding: o, fontSize: e.titleFontSizeSM },
                },
              },
              '&-large': {
                [`> ${t}-nav`]: {
                  [`${t}-tab`]: { padding: r, fontSize: e.titleFontSizeLG },
                },
              },
            },
            [`${t}-card`]: {
              [`&${t}-small`]: {
                [`> ${t}-nav`]: { [`${t}-tab`]: { padding: n } },
                [`&${t}-bottom`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: `0 0 ${(0, de.bf)(e.borderRadius)} ${(0, de.bf)(e.borderRadius)}`,
                  },
                },
                [`&${t}-top`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: `${(0, de.bf)(e.borderRadius)} ${(0, de.bf)(e.borderRadius)} 0 0`,
                  },
                },
                [`&${t}-right`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `0 ${(0, de.bf)(e.borderRadius)} ${(0, de.bf)(e.borderRadius)} 0`,
                    },
                  },
                },
                [`&${t}-left`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `${(0, de.bf)(e.borderRadius)} 0 0 ${(0, de.bf)(e.borderRadius)}`,
                    },
                  },
                },
              },
              [`&${t}-large`]: {
                [`> ${t}-nav`]: { [`${t}-tab`]: { padding: a } },
              },
            },
          };
        },
        ye = (e) => {
          const {
              componentCls: t,
              itemActiveColor: n,
              itemHoverColor: a,
              iconCls: o,
              tabsHorizontalItemMargin: r,
              horizontalItemPadding: i,
              itemSelectedColor: l,
              itemColor: c,
            } = e,
            s = `${t}-tab`;
          return {
            [s]: {
              position: 'relative',
              WebkitTouchCallout: 'none',
              WebkitTapHighlightColor: 'transparent',
              display: 'inline-flex',
              alignItems: 'center',
              padding: i,
              fontSize: e.titleFontSize,
              background: 'transparent',
              border: 0,
              outline: 'none',
              cursor: 'pointer',
              color: c,
              '&-btn, &-remove': Object.assign(
                { '&:focus:not(:focus-visible), &:active': { color: n } },
                (0, ue.Qy)(e),
              ),
              '&-btn': {
                outline: 'none',
                transition: 'all 0.3s',
                [`${s}-icon:not(:last-child)`]: { marginInlineEnd: e.marginSM },
              },
              '&-remove': {
                flex: 'none',
                marginRight: {
                  _skip_check_: !0,
                  value: e.calc(e.marginXXS).mul(-1).equal(),
                },
                marginLeft: { _skip_check_: !0, value: e.marginXS },
                color: e.colorTextDescription,
                fontSize: e.fontSizeSM,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                transition: `all ${e.motionDurationSlow}`,
                '&:hover': { color: e.colorTextHeading },
              },
              '&:hover': { color: a },
              [`&${s}-active ${s}-btn`]: {
                color: l,
                textShadow: e.tabsActiveTextShadow,
              },
              [`&${s}-disabled`]: {
                color: e.colorTextDisabled,
                cursor: 'not-allowed',
              },
              [`&${s}-disabled ${s}-btn, &${s}-disabled ${t}-remove`]: {
                '&:focus, &:active': { color: e.colorTextDisabled },
              },
              [`& ${s}-remove ${o}`]: { margin: 0 },
              [`${o}:not(:last-child)`]: {
                marginRight: { _skip_check_: !0, value: e.marginSM },
              },
            },
            [`${s} + ${s}`]: { margin: { _skip_check_: !0, value: r } },
          };
        },
        ke = (e) => {
          const {
              componentCls: t,
              tabsHorizontalItemMarginRTL: n,
              iconCls: a,
              cardGutter: o,
              calc: r,
            } = e,
            i = `${t}-rtl`;
          return {
            [i]: {
              direction: 'rtl',
              [`${t}-nav`]: {
                [`${t}-tab`]: {
                  margin: { _skip_check_: !0, value: n },
                  [`${t}-tab:last-of-type`]: {
                    marginLeft: { _skip_check_: !0, value: 0 },
                  },
                  [a]: {
                    marginRight: { _skip_check_: !0, value: 0 },
                    marginLeft: {
                      _skip_check_: !0,
                      value: (0, de.bf)(e.marginSM),
                    },
                  },
                  [`${t}-tab-remove`]: {
                    marginRight: {
                      _skip_check_: !0,
                      value: (0, de.bf)(e.marginXS),
                    },
                    marginLeft: {
                      _skip_check_: !0,
                      value: (0, de.bf)(r(e.marginXXS).mul(-1).equal()),
                    },
                    [a]: { margin: 0 },
                  },
                },
              },
              [`&${t}-left`]: {
                [`> ${t}-nav`]: { order: 1 },
                [`> ${t}-content-holder`]: { order: 0 },
              },
              [`&${t}-right`]: {
                [`> ${t}-nav`]: { order: 0 },
                [`> ${t}-content-holder`]: { order: 1 },
              },
              [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab + ${t}-tab`]: {
                    marginRight: { _skip_check_: !0, value: o },
                    marginLeft: { _skip_check_: !0, value: 0 },
                  },
                },
              },
            },
            [`${t}-dropdown-rtl`]: { direction: 'rtl' },
            [`${t}-menu-item`]: {
              [`${t}-dropdown-rtl`]: {
                textAlign: { _skip_check_: !0, value: 'right' },
              },
            },
          };
        },
        we = (e) => {
          const {
            componentCls: t,
            tabsCardPadding: n,
            cardHeight: a,
            cardGutter: o,
            itemHoverColor: r,
            itemActiveColor: i,
            colorBorderSecondary: l,
          } = e;
          return {
            [t]: Object.assign(
              Object.assign(
                Object.assign(Object.assign({}, (0, ue.Wf)(e)), {
                  display: 'flex',
                  [`> ${t}-nav, > div > ${t}-nav`]: {
                    position: 'relative',
                    display: 'flex',
                    flex: 'none',
                    alignItems: 'center',
                    [`${t}-nav-wrap`]: {
                      position: 'relative',
                      display: 'flex',
                      flex: 'auto',
                      alignSelf: 'stretch',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      transform: 'translate(0)',
                      '&::before, &::after': {
                        position: 'absolute',
                        zIndex: 1,
                        opacity: 0,
                        transition: `opacity ${e.motionDurationSlow}`,
                        content: "''",
                        pointerEvents: 'none',
                      },
                    },
                    [`${t}-nav-list`]: {
                      position: 'relative',
                      display: 'flex',
                      transition: `opacity ${e.motionDurationSlow}`,
                    },
                    [`${t}-nav-operations`]: {
                      display: 'flex',
                      alignSelf: 'stretch',
                    },
                    [`${t}-nav-operations-hidden`]: {
                      position: 'absolute',
                      visibility: 'hidden',
                      pointerEvents: 'none',
                    },
                    [`${t}-nav-more`]: {
                      position: 'relative',
                      padding: n,
                      background: 'transparent',
                      border: 0,
                      color: e.colorText,
                      '&::after': {
                        position: 'absolute',
                        right: { _skip_check_: !0, value: 0 },
                        bottom: 0,
                        left: { _skip_check_: !0, value: 0 },
                        height: e.calc(e.controlHeightLG).div(8).equal(),
                        transform: 'translateY(100%)',
                        content: "''",
                      },
                    },
                    [`${t}-nav-add`]: Object.assign(
                      {
                        minWidth: a,
                        minHeight: a,
                        marginLeft: { _skip_check_: !0, value: o },
                        padding: `0 ${(0, de.bf)(e.paddingXS)}`,
                        background: 'transparent',
                        border: `${(0, de.bf)(e.lineWidth)} ${e.lineType} ${l}`,
                        borderRadius: `${(0, de.bf)(e.borderRadiusLG)} ${(0, de.bf)(e.borderRadiusLG)} 0 0`,
                        outline: 'none',
                        cursor: 'pointer',
                        color: e.colorText,
                        transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                        '&:hover': { color: r },
                        '&:active, &:focus:not(:focus-visible)': { color: i },
                      },
                      (0, ue.Qy)(e),
                    ),
                  },
                  [`${t}-extra-content`]: { flex: 'none' },
                  [`${t}-ink-bar`]: {
                    position: 'absolute',
                    background: e.inkBarColor,
                    pointerEvents: 'none',
                  },
                }),
                ye(e),
              ),
              {
                [`${t}-content`]: { position: 'relative', width: '100%' },
                [`${t}-content-holder`]: {
                  flex: 'auto',
                  minWidth: 0,
                  minHeight: 0,
                },
                [`${t}-tabpane`]: {
                  outline: 'none',
                  '&-hidden': { display: 'none' },
                },
              },
            ),
            [`${t}-centered`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                [`${t}-nav-wrap`]: {
                  [`&:not([class*='${t}-nav-wrap-ping'])`]: {
                    justifyContent: 'center',
                  },
                },
              },
            },
          };
        };
      var xe = (0, fe.I$)(
          'Tabs',
          (e) => {
            const t = (0, ve.TS)(e, {
              tabsCardPadding: e.cardPadding,
              dropdownEdgeChildVerticalPadding: e.paddingXXS,
              tabsActiveTextShadow: '0 0 0.25px currentcolor',
              tabsDropdownHeight: 200,
              tabsDropdownWidth: 120,
              tabsHorizontalItemMargin: `0 0 0 ${(0, de.bf)(e.horizontalItemGutter)}`,
              tabsHorizontalItemMarginRTL: `0 0 0 ${(0, de.bf)(e.horizontalItemGutter)}`,
            });
            return [$e(t), ke(t), ge(t), he(t), me(t), we(t), be(t)];
          },
          (e) => {
            const t = e.controlHeightLG;
            return {
              zIndexPopup: e.zIndexPopupBase + 50,
              cardBg: e.colorFillAlter,
              cardHeight: t,
              cardPadding: `${(t - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth}px ${e.padding}px`,
              cardPaddingSM: `${1.5 * e.paddingXXS}px ${e.padding}px`,
              cardPaddingLG: `${e.paddingXS}px ${e.padding}px ${1.5 * e.paddingXXS}px`,
              titleFontSize: e.fontSize,
              titleFontSizeLG: e.fontSizeLG,
              titleFontSizeSM: e.fontSize,
              inkBarColor: e.colorPrimary,
              horizontalMargin: `0 0 ${e.margin}px 0`,
              horizontalItemGutter: 32,
              horizontalItemMargin: '',
              horizontalItemMarginRTL: '',
              horizontalItemPadding: `${e.paddingSM}px 0`,
              horizontalItemPaddingSM: `${e.paddingXS}px 0`,
              horizontalItemPaddingLG: `${e.padding}px 0`,
              verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
              verticalItemMargin: `${e.margin}px 0 0 0`,
              itemColor: e.colorText,
              itemSelectedColor: e.colorPrimary,
              itemHoverColor: e.colorPrimaryHover,
              itemActiveColor: e.colorPrimaryActive,
              cardGutter: e.marginXXS / 2,
            };
          },
        ),
        Se = n(35792);
      var Ce = function (e, t) {
        var n = {};
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) &&
            t.indexOf(a) < 0 &&
            (n[a] = e[a]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (a = Object.getOwnPropertySymbols(e); o < a.length; o++)
            t.indexOf(a[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, a[o]) &&
              (n[a[o]] = e[a[o]]);
        }
        return n;
      };
      const _e = (e) => {
        const {
            type: t,
            className: n,
            rootClassName: l,
            size: s,
            onEdit: d,
            hideAdd: u,
            centered: f,
            addIcon: v,
            popupClassName: p,
            children: b,
            items: m,
            animated: h,
            style: g,
            indicatorSize: $,
          } = e,
          y = Ce(e, [
            'type',
            'className',
            'rootClassName',
            'size',
            'onEdit',
            'hideAdd',
            'centered',
            'addIcon',
            'popupClassName',
            'children',
            'items',
            'animated',
            'style',
            'indicatorSize',
          ]),
          { prefixCls: k, moreIcon: w = a.createElement(r.Z, null) } = y,
          {
            direction: x,
            tabs: S,
            getPrefixCls: C,
            getPopupContainer: _,
          } = a.useContext(oe.E_),
          E = C('tabs', k),
          Z = (0, Se.Z)(E),
          [R, P, T] = xe(E, Z);
        let I;
        'editable-card' === t &&
          (I = {
            onEdit: (e, t) => {
              let { key: n, event: a } = t;
              null == d || d('add' === e ? a : n, e);
            },
            removeIcon: a.createElement(o.Z, null),
            addIcon: v || a.createElement(i.Z, null),
            showAdd: !0 !== u,
          });
        const N = C();
        const L = (function (e, t) {
            return (
              e ||
              (function (e) {
                return e.filter((e) => e);
              })(
                (0, ce.Z)(t).map((e) => {
                  if (a.isValidElement(e)) {
                    const { key: t, props: n } = e,
                      a = n || {},
                      { tab: o } = a,
                      r = se(a, ['tab']);
                    return Object.assign(Object.assign({ key: String(t) }, r), {
                      label: o,
                    });
                  }
                  return null;
                }),
              )
            );
          })(m, b),
          M = (function (e) {
            let t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { inkBar: !0, tabPane: !1 };
            return (
              (t =
                !1 === n
                  ? { inkBar: !1, tabPane: !1 }
                  : !0 === n
                    ? { inkBar: !0, tabPane: !0 }
                    : Object.assign(
                        { inkBar: !0 },
                        'object' == typeof n ? n : {},
                      )),
              t.tabPane &&
                (t.tabPaneMotion = Object.assign(Object.assign({}, le), {
                  motionName: (0, ie.m)(e, 'switch'),
                })),
              t
            );
          })(E, h),
          z = (0, re.Z)(s),
          O = Object.assign(Object.assign({}, null == S ? void 0 : S.style), g);
        return R(
          a.createElement(
            ae,
            Object.assign(
              {
                direction: x,
                getPopupContainer: _,
                moreTransitionName: `${N}-slide-up`,
              },
              y,
              {
                items: L,
                className: c()(
                  {
                    [`${E}-${z}`]: z,
                    [`${E}-card`]: ['card', 'editable-card'].includes(t),
                    [`${E}-editable-card`]: 'editable-card' === t,
                    [`${E}-centered`]: f,
                  },
                  null == S ? void 0 : S.className,
                  n,
                  l,
                  P,
                  T,
                  Z,
                ),
                popupClassName: c()(p, P, T, Z),
                style: O,
                editable: I,
                moreIcon: w,
                prefixCls: E,
                animated: M,
                indicatorSize:
                  null != $ ? $ : null == S ? void 0 : S.indicatorSize,
              },
            ),
          ),
        );
      };
      _e.TabPane = () => null;
      var Ee = _e;
    },
    29171: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      });
      var a = n(87462),
        o = n(4942),
        r = n(97685),
        i = n(45987),
        l = n(40228),
        c = n(93967),
        s = n.n(c),
        d = n(42550),
        u = n(62435),
        f = n(15105),
        v = n(75164),
        p = f.Z.ESC,
        b = f.Z.TAB;
      var m = (0, u.forwardRef)(function (e, t) {
          var n = e.overlay,
            a = e.arrow,
            o = e.prefixCls,
            r = (0, u.useMemo)(
              function () {
                return 'function' == typeof n ? n() : n;
              },
              [n],
            ),
            i = (0, d.sQ)(t, null == r ? void 0 : r.ref);
          return u.createElement(
            u.Fragment,
            null,
            a && u.createElement('div', { className: ''.concat(o, '-arrow') }),
            u.cloneElement(r, { ref: (0, d.Yr)(r) ? i : void 0 }),
          );
        }),
        h = { adjustX: 1, adjustY: 1 },
        g = [0, 0],
        $ = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: h,
            offset: [0, -4],
            targetOffset: g,
          },
          top: {
            points: ['bc', 'tc'],
            overflow: h,
            offset: [0, -4],
            targetOffset: g,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: h,
            offset: [0, -4],
            targetOffset: g,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: h,
            offset: [0, 4],
            targetOffset: g,
          },
          bottom: {
            points: ['tc', 'bc'],
            overflow: h,
            offset: [0, 4],
            targetOffset: g,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: h,
            offset: [0, 4],
            targetOffset: g,
          },
        },
        y = [
          'arrow',
          'prefixCls',
          'transitionName',
          'animation',
          'align',
          'placement',
          'placements',
          'getPopupContainer',
          'showAction',
          'hideAction',
          'overlayClassName',
          'overlayStyle',
          'visible',
          'trigger',
          'autoFocus',
          'overlay',
          'children',
          'onVisibleChange',
        ];
      function k(e, t) {
        var n,
          c = e.arrow,
          f = void 0 !== c && c,
          h = e.prefixCls,
          g = void 0 === h ? 'rc-dropdown' : h,
          k = e.transitionName,
          w = e.animation,
          x = e.align,
          S = e.placement,
          C = void 0 === S ? 'bottomLeft' : S,
          _ = e.placements,
          E = void 0 === _ ? $ : _,
          Z = e.getPopupContainer,
          R = e.showAction,
          P = e.hideAction,
          T = e.overlayClassName,
          I = e.overlayStyle,
          N = e.visible,
          L = e.trigger,
          M = void 0 === L ? ['hover'] : L,
          z = e.autoFocus,
          O = e.overlay,
          B = e.children,
          D = e.onVisibleChange,
          A = (0, i.Z)(e, y),
          j = u.useState(),
          G = (0, r.Z)(j, 2),
          W = G[0],
          H = G[1],
          X = 'visible' in e ? N : W,
          q = u.useRef(null),
          F = u.useRef(null),
          V = u.useRef(null);
        u.useImperativeHandle(t, function () {
          return q.current;
        });
        var K = function (e) {
          H(e), null == D || D(e);
        };
        !(function (e) {
          var t = e.visible,
            n = e.triggerRef,
            a = e.onVisibleChange,
            o = e.autoFocus,
            r = e.overlayRef,
            i = u.useRef(!1),
            l = function () {
              var e, o;
              t &&
                (null === (e = n.current) ||
                  void 0 === e ||
                  null === (o = e.focus) ||
                  void 0 === o ||
                  o.call(e),
                null == a || a(!1));
            },
            c = function () {
              var e;
              return !(
                null === (e = r.current) ||
                void 0 === e ||
                !e.focus ||
                (r.current.focus(), (i.current = !0), 0)
              );
            },
            s = function (e) {
              switch (e.keyCode) {
                case p:
                  l();
                  break;
                case b:
                  var t = !1;
                  i.current || (t = c()), t ? e.preventDefault() : l();
              }
            };
          u.useEffect(
            function () {
              return t
                ? (window.addEventListener('keydown', s),
                  o && (0, v.Z)(c, 3),
                  function () {
                    window.removeEventListener('keydown', s), (i.current = !1);
                  })
                : function () {
                    i.current = !1;
                  };
            },
            [t],
          );
        })({
          visible: X,
          triggerRef: V,
          onVisibleChange: K,
          autoFocus: z,
          overlayRef: F,
        });
        var Y,
          Q,
          J,
          U = function () {
            return u.createElement(m, {
              ref: F,
              overlay: O,
              prefixCls: g,
              arrow: f,
            });
          },
          ee = u.cloneElement(B, {
            className: s()(
              null === (n = B.props) || void 0 === n ? void 0 : n.className,
              X &&
                ((Y = e.openClassName),
                void 0 !== Y ? Y : ''.concat(g, '-open')),
            ),
            ref: (0, d.Yr)(B) ? (0, d.sQ)(V, B.ref) : void 0,
          }),
          te = P;
        return (
          te || -1 === M.indexOf('contextMenu') || (te = ['click']),
          u.createElement(
            l.Z,
            (0, a.Z)({ builtinPlacements: E }, A, {
              prefixCls: g,
              ref: q,
              popupClassName: s()(
                T,
                (0, o.Z)({}, ''.concat(g, '-show-arrow'), f),
              ),
              popupStyle: I,
              action: M,
              showAction: R,
              hideAction: te,
              popupPlacement: C,
              popupAlign: x,
              popupTransitionName: k,
              popupAnimation: w,
              popupVisible: X,
              stretch:
                ((Q = e.minOverlayWidthMatchTrigger),
                (J = e.alignPoint),
                ('minOverlayWidthMatchTrigger' in e ? Q : !J)
                  ? 'minWidth'
                  : ''),
              popup: 'function' == typeof O ? U : U(),
              onPopupVisibleChange: K,
              onPopupClick: function (t) {
                var n = e.onOverlayClick;
                H(!1), n && n(t);
              },
              getPopupContainer: Z,
            }),
            ee,
          )
        );
      }
      var w = u.forwardRef(k);
    },
  },
]);
//# sourceMappingURL=2398.63bc04af.async.js.map
