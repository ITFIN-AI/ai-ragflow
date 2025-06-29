'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [6061],
  {
    34385: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var o = n(54707),
        r = n(19632),
        i = n.n(r),
        a = n(43106),
        u = (n(62435), n(86074)),
        s = function (e) {
          var t = e.data,
            n = e.languages,
            o = [
              {
                title: 'Key',
                dataIndex: 'key',
                key: 'key',
                fixed: 'left',
                width: 200,
                sorter: function (e, t) {
                  return e.key.localeCompare(t.key);
                },
              },
            ].concat(
              i()(
                n.map(function (e) {
                  return {
                    title: e,
                    dataIndex: e,
                    key: e,
                    sorter: function (t, n) {
                      return t[e].localeCompare(n[e]);
                    },
                    filters: [
                      { text: 'Show Empty', value: 'show_empty' },
                      { text: 'Show Non-Empty', value: 'show_non_empty' },
                    ],
                    onFilter: function (t, n) {
                      return 'show_empty' === t
                        ? !n[e]
                        : 'show_non_empty' !== t || (n[e] && n[e].length > 0);
                    },
                  };
                }),
              ),
            );
          return (0, u.jsx)(a.Z, {
            columns: o,
            dataSource: t,
            rowKey: 'key',
            pagination: { pageSize: 10 },
            scroll: { x: !0 },
          });
        };
      var c = function () {
        return (0, u.jsx)(s, {
          data: o.Y,
          languages: [
            'English',
            'Vietnamese',
            'Spanish',
            'zh',
            'zh-TRADITIONAL',
            'ja',
            'pt-br',
            'German',
          ],
        });
      };
    },
    8745: function (e, t, n) {
      n.d(t, {
        i: function () {
          return u;
        },
      });
      var o = n(62435),
        r = n(21770),
        i = n(28459),
        a = n(53124);
      function u(e) {
        return (t) =>
          o.createElement(
            i.ZP,
            { theme: { token: { motion: !1, zIndexPopupBase: 0 } } },
            o.createElement(e, Object.assign({}, t)),
          );
      }
      t.Z = (e, t, n, i) =>
        u((u) => {
          const { prefixCls: s, style: c } = u,
            l = o.useRef(null),
            [f, p] = o.useState(0),
            [v, d] = o.useState(0),
            [m, g] = (0, r.Z)(!1, { value: u.open }),
            { getPrefixCls: y } = o.useContext(a.E_),
            h = y(t || 'select', s);
          o.useEffect(() => {
            if ((g(!0), 'undefined' != typeof ResizeObserver)) {
              const e = new ResizeObserver((e) => {
                  const t = e[0].target;
                  p(t.offsetHeight + 8), d(t.offsetWidth);
                }),
                t = setInterval(() => {
                  var o;
                  const r = n ? `.${n(h)}` : `.${h}-dropdown`,
                    i =
                      null === (o = l.current) || void 0 === o
                        ? void 0
                        : o.querySelector(r);
                  i && (clearInterval(t), e.observe(i));
                }, 10);
              return () => {
                clearInterval(t), e.disconnect();
              };
            }
          }, []);
          let w = Object.assign(Object.assign({}, u), {
            style: Object.assign(Object.assign({}, c), { margin: 0 }),
            open: m,
            visible: m,
            getPopupContainer: () => l.current,
          });
          i && (w = i(w));
          const b = { paddingBottom: f, position: 'relative', minWidth: v };
          return o.createElement(
            'div',
            { ref: l, style: b },
            o.createElement(e, Object.assign({}, w)),
          );
        });
    },
    57838: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var o = n(62435);
      function r() {
        const [, e] = o.useReducer((e) => e + 1, 0);
        return e;
      }
    },
    25378: function (e, t, n) {
      var o = n(62435),
        r = n(8410),
        i = n(57838),
        a = n(74443);
      t.Z = function () {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const t = (0, o.useRef)({}),
          n = (0, i.Z)(),
          u = (0, a.ZP)();
        return (
          (0, r.Z)(() => {
            const o = u.subscribe((o) => {
              (t.current = o), e && n();
            });
            return () => u.unsubscribe(o);
          }, []),
          t.current
        );
      };
    },
    33507: function (e, t) {
      t.Z = (e) => ({
        [e.componentCls]: {
          [`${e.antCls}-motion-collapse-legacy`]: {
            overflow: 'hidden',
            '&-active': {
              transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},\n        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
            },
          },
          [`${e.antCls}-motion-collapse`]: {
            overflow: 'hidden',
            transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},\n        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
          },
        },
      });
    },
    49867: function (e, t, n) {
      n.d(t, {
        N: function () {
          return o;
        },
      });
      const o = (e) => ({
        color: e.colorLink,
        textDecoration: 'none',
        outline: 'none',
        cursor: 'pointer',
        transition: `color ${e.motionDurationSlow}`,
        '&:focus, &:hover': { color: e.colorLinkHover },
        '&:active': { color: e.colorLinkActive },
      });
    },
    29171: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var o = n(87462),
        r = n(4942),
        i = n(97685),
        a = n(45987),
        u = n(40228),
        s = n(93967),
        c = n.n(s),
        l = n(42550),
        f = n(62435),
        p = n(15105),
        v = n(75164),
        d = p.Z.ESC,
        m = p.Z.TAB;
      var g = (0, f.forwardRef)(function (e, t) {
          var n = e.overlay,
            o = e.arrow,
            r = e.prefixCls,
            i = (0, f.useMemo)(
              function () {
                return 'function' == typeof n ? n() : n;
              },
              [n],
            ),
            a = (0, l.sQ)(t, null == i ? void 0 : i.ref);
          return f.createElement(
            f.Fragment,
            null,
            o && f.createElement('div', { className: ''.concat(r, '-arrow') }),
            f.cloneElement(i, { ref: (0, l.Yr)(i) ? a : void 0 }),
          );
        }),
        y = { adjustX: 1, adjustY: 1 },
        h = [0, 0],
        w = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: y,
            offset: [0, -4],
            targetOffset: h,
          },
          top: {
            points: ['bc', 'tc'],
            overflow: y,
            offset: [0, -4],
            targetOffset: h,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: y,
            offset: [0, -4],
            targetOffset: h,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: y,
            offset: [0, 4],
            targetOffset: h,
          },
          bottom: {
            points: ['tc', 'bc'],
            overflow: y,
            offset: [0, 4],
            targetOffset: h,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: y,
            offset: [0, 4],
            targetOffset: h,
          },
        },
        b = [
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
      function C(e, t) {
        var n,
          s = e.arrow,
          p = void 0 !== s && s,
          y = e.prefixCls,
          h = void 0 === y ? 'rc-dropdown' : y,
          C = e.transitionName,
          E = e.animation,
          O = e.align,
          k = e.placement,
          x = void 0 === k ? 'bottomLeft' : k,
          Z = e.placements,
          R = void 0 === Z ? w : Z,
          A = e.getPopupContainer,
          S = e.showAction,
          I = e.hideAction,
          N = e.overlayClassName,
          P = e.overlayStyle,
          $ = e.visible,
          j = e.trigger,
          L = void 0 === j ? ['hover'] : j,
          D = e.autoFocus,
          M = e.overlay,
          V = e.children,
          _ = e.onVisibleChange,
          z = (0, a.Z)(e, b),
          F = f.useState(),
          T = (0, i.Z)(F, 2),
          W = T[0],
          Y = T[1],
          B = 'visible' in e ? $ : W,
          H = f.useRef(null),
          G = f.useRef(null),
          K = f.useRef(null);
        f.useImperativeHandle(t, function () {
          return H.current;
        });
        var Q = function (e) {
          Y(e), null == _ || _(e);
        };
        !(function (e) {
          var t = e.visible,
            n = e.triggerRef,
            o = e.onVisibleChange,
            r = e.autoFocus,
            i = e.overlayRef,
            a = f.useRef(!1),
            u = function () {
              var e, r;
              t &&
                (null === (e = n.current) ||
                  void 0 === e ||
                  null === (r = e.focus) ||
                  void 0 === r ||
                  r.call(e),
                null == o || o(!1));
            },
            s = function () {
              var e;
              return !(
                null === (e = i.current) ||
                void 0 === e ||
                !e.focus ||
                (i.current.focus(), (a.current = !0), 0)
              );
            },
            c = function (e) {
              switch (e.keyCode) {
                case d:
                  u();
                  break;
                case m:
                  var t = !1;
                  a.current || (t = s()), t ? e.preventDefault() : u();
              }
            };
          f.useEffect(
            function () {
              return t
                ? (window.addEventListener('keydown', c),
                  r && (0, v.Z)(s, 3),
                  function () {
                    window.removeEventListener('keydown', c), (a.current = !1);
                  })
                : function () {
                    a.current = !1;
                  };
            },
            [t],
          );
        })({
          visible: B,
          triggerRef: K,
          onVisibleChange: Q,
          autoFocus: D,
          overlayRef: G,
        });
        var q,
          X,
          J,
          U = function () {
            return f.createElement(g, {
              ref: G,
              overlay: M,
              prefixCls: h,
              arrow: p,
            });
          },
          ee = f.cloneElement(V, {
            className: c()(
              null === (n = V.props) || void 0 === n ? void 0 : n.className,
              B &&
                ((q = e.openClassName),
                void 0 !== q ? q : ''.concat(h, '-open')),
            ),
            ref: (0, l.Yr)(V) ? (0, l.sQ)(K, V.ref) : void 0,
          }),
          te = I;
        return (
          te || -1 === L.indexOf('contextMenu') || (te = ['click']),
          f.createElement(
            u.Z,
            (0, o.Z)({ builtinPlacements: R }, z, {
              prefixCls: h,
              ref: H,
              popupClassName: c()(
                N,
                (0, r.Z)({}, ''.concat(h, '-show-arrow'), p),
              ),
              popupStyle: P,
              action: L,
              showAction: S,
              hideAction: te,
              popupPlacement: x,
              popupAlign: O,
              popupTransitionName: C,
              popupAnimation: E,
              popupVisible: B,
              stretch:
                ((X = e.minOverlayWidthMatchTrigger),
                (J = e.alignPoint),
                ('minOverlayWidthMatchTrigger' in e ? X : !J)
                  ? 'minWidth'
                  : ''),
              popup: 'function' == typeof M ? U : U(),
              onPopupVisibleChange: Q,
              onPopupClick: function (t) {
                var n = e.onOverlayClick;
                Y(!1), n && n(t);
              },
              getPopupContainer: A,
            }),
            ee,
          )
        );
      }
      var E = f.forwardRef(C);
    },
    79370: function (e, t, n) {
      n.d(t, {
        G: function () {
          return a;
        },
      });
      var o = n(98924),
        r = function (e) {
          if ((0, o.Z)() && window.document.documentElement) {
            var t = Array.isArray(e) ? e : [e],
              n = window.document.documentElement;
            return t.some(function (e) {
              return e in n.style;
            });
          }
          return !1;
        },
        i = function (e, t) {
          if (!r(e)) return !1;
          var n = document.createElement('div'),
            o = n.style[e];
          return (n.style[e] = t), n.style[e] !== o;
        };
      function a(e, t) {
        return Array.isArray(e) || void 0 === t ? r(e) : i(e, t);
      }
    },
  },
]);
//# sourceMappingURL=p__user-setting__setting-locale__index.77aac491.async.js.map
