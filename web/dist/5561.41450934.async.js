'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [5561],
  {
    86250: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      });
      var o = n(62435),
        r = n(93967),
        a = n.n(r),
        i = n(98423),
        c = n(98065),
        l = n(53124),
        s = n(91945),
        u = n(45503);
      const f = ['wrap', 'nowrap', 'wrap-reverse'],
        m = [
          'flex-start',
          'flex-end',
          'start',
          'end',
          'center',
          'space-between',
          'space-around',
          'space-evenly',
          'stretch',
          'normal',
          'left',
          'right',
        ],
        p = [
          'center',
          'start',
          'end',
          'flex-start',
          'flex-end',
          'self-start',
          'self-end',
          'baseline',
          'normal',
          'stretch',
        ];
      var d = function (e, t) {
        return a()(
          Object.assign(
            Object.assign(
              Object.assign(
                {},
                ((e, t) => {
                  const n = {};
                  return (
                    f.forEach((o) => {
                      n[`${e}-wrap-${o}`] = t.wrap === o;
                    }),
                    n
                  );
                })(e, t),
              ),
              ((e, t) => {
                const n = {};
                return (
                  p.forEach((o) => {
                    n[`${e}-align-${o}`] = t.align === o;
                  }),
                  (n[`${e}-align-stretch`] = !t.align && !!t.vertical),
                  n
                );
              })(e, t),
            ),
            ((e, t) => {
              const n = {};
              return (
                m.forEach((o) => {
                  n[`${e}-justify-${o}`] = t.justify === o;
                }),
                n
              );
            })(e, t),
          ),
        );
      };
      const g = (e) => {
          const { componentCls: t } = e;
          return {
            [t]: {
              display: 'flex',
              '&-vertical': { flexDirection: 'column' },
              '&-rtl': { direction: 'rtl' },
              '&:empty': { display: 'none' },
            },
          };
        },
        v = (e) => {
          const { componentCls: t } = e;
          return {
            [t]: {
              '&-gap-small': { gap: e.flexGapSM },
              '&-gap-middle': { gap: e.flexGap },
              '&-gap-large': { gap: e.flexGapLG },
            },
          };
        },
        h = (e) => {
          const { componentCls: t } = e,
            n = {};
          return (
            f.forEach((e) => {
              n[`${t}-wrap-${e}`] = { flexWrap: e };
            }),
            n
          );
        },
        w = (e) => {
          const { componentCls: t } = e,
            n = {};
          return (
            p.forEach((e) => {
              n[`${t}-align-${e}`] = { alignItems: e };
            }),
            n
          );
        },
        C = (e) => {
          const { componentCls: t } = e,
            n = {};
          return (
            m.forEach((e) => {
              n[`${t}-justify-${e}`] = { justifyContent: e };
            }),
            n
          );
        };
      var b = (0, s.I$)(
          'Flex',
          (e) => {
            const { paddingXS: t, padding: n, paddingLG: o } = e,
              r = (0, u.TS)(e, { flexGapSM: t, flexGap: n, flexGapLG: o });
            return [g(r), v(r), h(r), w(r), C(r)];
          },
          () => ({}),
          { resetStyle: !1 },
        ),
        x = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        };
      const y = o.forwardRef((e, t) => {
        const {
            prefixCls: n,
            rootClassName: r,
            className: s,
            style: u,
            flex: f,
            gap: m,
            children: p,
            vertical: g = !1,
            component: v = 'div',
          } = e,
          h = x(e, [
            'prefixCls',
            'rootClassName',
            'className',
            'style',
            'flex',
            'gap',
            'children',
            'vertical',
            'component',
          ]),
          { flex: w, direction: C, getPrefixCls: y } = o.useContext(l.E_),
          S = y('flex', n),
          [Z, E, I] = b(S),
          N = null != g ? g : null == w ? void 0 : w.vertical,
          k = a()(s, r, null == w ? void 0 : w.className, S, E, I, d(S, e), {
            [`${S}-rtl`]: 'rtl' === C,
            [`${S}-gap-${m}`]: (0, c.n)(m),
            [`${S}-vertical`]: N,
          }),
          M = Object.assign(Object.assign({}, null == w ? void 0 : w.style), u);
        return (
          f && (M.flex = f),
          m && !(0, c.n)(m) && (M.gap = m),
          Z(
            o.createElement(
              v,
              Object.assign(
                { ref: t, className: k, style: M },
                (0, i.Z)(h, ['justify', 'wrap', 'align']),
              ),
              p,
            ),
          )
        );
      });
      var S = y;
    },
    98163: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return $e;
        },
      });
      var o = n(62435),
        r = n(99611),
        a = n(93967),
        i = n.n(a),
        c = n(87462),
        l = n(1413),
        s = n(4942),
        u = n(97685),
        f = n(71002),
        m = n(45987),
        p = n(27678),
        d = n(21770),
        g = [
          'crossOrigin',
          'decoding',
          'draggable',
          'loading',
          'referrerPolicy',
          'sizes',
          'srcSet',
          'useMap',
          'alt',
        ],
        v = o.createContext(null),
        h = 0;
      function w(e) {
        var t = e.src,
          n = e.isCustomPlaceholder,
          r = e.fallback,
          a = (0, o.useState)(n ? 'loading' : 'normal'),
          i = (0, u.Z)(a, 2),
          c = i[0],
          l = i[1],
          s = (0, o.useRef)(!1),
          f = 'error' === c;
        (0, o.useEffect)(
          function () {
            var e = !0;
            return (
              (function (e) {
                return new Promise(function (t) {
                  var n = document.createElement('img');
                  (n.onerror = function () {
                    return t(!1);
                  }),
                    (n.onload = function () {
                      return t(!0);
                    }),
                    (n.src = e);
                });
              })(t).then(function (t) {
                !t && e && l('error');
              }),
              function () {
                e = !1;
              }
            );
          },
          [t],
        ),
          (0, o.useEffect)(
            function () {
              n && !s.current ? l('loading') : f && l('normal');
            },
            [t],
          );
        var m = function () {
          l('normal');
        };
        return [
          function (e) {
            (s.current = !1),
              'loading' === c &&
                null != e &&
                e.complete &&
                (e.naturalWidth || e.naturalHeight) &&
                ((s.current = !0), m());
          },
          f && r ? { src: r } : { onLoad: m, src: t },
          c,
        ];
      }
      var C = n(40974),
        b = n(64019),
        x = n(15105),
        y = n(91881),
        S = n(75164),
        Z = { x: 0, y: 0, rotate: 0, scale: 1, flipX: !1, flipY: !1 };
      var E = n(80334);
      function I(e, t, n, o) {
        var r = t + n,
          a = (n - o) / 2;
        if (n > o) {
          if (t > 0) return (0, s.Z)({}, e, a);
          if (t < 0 && r < o) return (0, s.Z)({}, e, -a);
        } else if (t < 0 || r > o) return (0, s.Z)({}, e, t < 0 ? a : -a);
        return {};
      }
      function N(e, t, n, o) {
        var r = (0, p.g1)(),
          a = r.width,
          i = r.height,
          c = null;
        return (
          e <= a && t <= i
            ? (c = { x: 0, y: 0 })
            : (e > a || t > i) &&
              (c = (0, l.Z)((0, l.Z)({}, I('x', n, e, a)), I('y', o, t, i))),
          c
        );
      }
      function k(e, t) {
        var n = e.x - t.x,
          o = e.y - t.y;
        return Math.hypot(n, o);
      }
      function M(e, t, n, r, a, i, c) {
        var s = a.rotate,
          f = a.scale,
          m = a.x,
          p = a.y,
          d = (0, o.useState)(!1),
          g = (0, u.Z)(d, 2),
          v = g[0],
          h = g[1],
          w = (0, o.useRef)({
            point1: { x: 0, y: 0 },
            point2: { x: 0, y: 0 },
            eventType: 'none',
          }),
          C = function (e) {
            w.current = (0, l.Z)((0, l.Z)({}, w.current), e);
          };
        return (
          (0, o.useEffect)(
            function () {
              var e;
              return (
                n &&
                  t &&
                  (e = (0, b.Z)(
                    window,
                    'touchmove',
                    function (e) {
                      return e.preventDefault();
                    },
                    { passive: !1 },
                  )),
                function () {
                  var t;
                  null === (t = e) || void 0 === t || t.remove();
                }
              );
            },
            [n, t],
          ),
          {
            isTouching: v,
            onTouchStart: function (e) {
              if (t) {
                e.stopPropagation(), h(!0);
                var n = e.touches,
                  o = void 0 === n ? [] : n;
                o.length > 1
                  ? C({
                      point1: { x: o[0].clientX, y: o[0].clientY },
                      point2: { x: o[1].clientX, y: o[1].clientY },
                      eventType: 'touchZoom',
                    })
                  : C({
                      point1: { x: o[0].clientX - m, y: o[0].clientY - p },
                      eventType: 'move',
                    });
              }
            },
            onTouchMove: function (e) {
              var t = e.touches,
                n = void 0 === t ? [] : t,
                o = w.current,
                r = o.point1,
                a = o.point2,
                l = o.eventType;
              if (n.length > 1 && 'touchZoom' === l) {
                var s = { x: n[0].clientX, y: n[0].clientY },
                  f = { x: n[1].clientX, y: n[1].clientY },
                  m = (function (e, t, n, o) {
                    var r = k(e, n),
                      a = k(t, o);
                    if (0 === r && 0 === a) return [e.x, e.y];
                    var i = r / (r + a);
                    return [e.x + i * (t.x - e.x), e.y + i * (t.y - e.y)];
                  })(r, a, s, f),
                  p = (0, u.Z)(m, 2),
                  d = p[0],
                  g = p[1],
                  v = k(s, f) / k(r, a);
                c(v, 'touchZoom', d, g, !0),
                  C({ point1: s, point2: f, eventType: 'touchZoom' });
              } else
                'move' === l &&
                  (i({ x: n[0].clientX - r.x, y: n[0].clientY - r.y }, 'move'),
                  C({ eventType: 'move' }));
            },
            onTouchEnd: function () {
              if (n) {
                if ((v && h(!1), C({ eventType: 'none' }), r > f))
                  return i({ x: 0, y: 0, scale: r }, 'touchZoom');
                var t = e.current.offsetWidth * f,
                  o = e.current.offsetHeight * f,
                  a = e.current.getBoundingClientRect(),
                  c = a.left,
                  u = a.top,
                  m = s % 180 != 0,
                  p = N(m ? o : t, m ? t : o, c, u);
                p && i((0, l.Z)({}, p), 'dragRebound');
              }
            },
          }
        );
      }
      var O = n(2788),
        R = n(82225),
        j = function (e) {
          var t = e.visible,
            n = e.maskTransitionName,
            r = e.getContainer,
            a = e.prefixCls,
            c = e.rootClassName,
            u = e.icons,
            f = e.countRender,
            m = e.showSwitch,
            p = e.showProgress,
            d = e.current,
            g = e.transform,
            h = e.count,
            w = e.scale,
            C = e.minScale,
            b = e.maxScale,
            y = e.closeIcon,
            S = e.onSwitchLeft,
            Z = e.onSwitchRight,
            E = e.onClose,
            I = e.onZoomIn,
            N = e.onZoomOut,
            k = e.onRotateRight,
            M = e.onRotateLeft,
            j = e.onFlipX,
            z = e.onFlipY,
            T = e.toolbarRender,
            $ = e.zIndex,
            P = (0, o.useContext)(v),
            L = u.rotateLeft,
            A = u.rotateRight,
            D = u.zoomIn,
            Y = u.zoomOut,
            X = u.close,
            H = u.left,
            G = u.right,
            B = u.flipX,
            W = u.flipY,
            V = ''.concat(a, '-operations-operation');
          o.useEffect(
            function () {
              var e = function (e) {
                e.keyCode === x.Z.ESC && E();
              };
              return (
                t && window.addEventListener('keydown', e),
                function () {
                  window.removeEventListener('keydown', e);
                }
              );
            },
            [t],
          );
          var F = [
              { icon: W, onClick: z, type: 'flipY' },
              { icon: B, onClick: j, type: 'flipX' },
              { icon: L, onClick: M, type: 'rotateLeft' },
              { icon: A, onClick: k, type: 'rotateRight' },
              { icon: Y, onClick: N, type: 'zoomOut', disabled: w <= C },
              { icon: D, onClick: I, type: 'zoomIn', disabled: w === b },
            ].map(function (e) {
              var t,
                n = e.icon,
                r = e.onClick,
                c = e.type,
                l = e.disabled;
              return o.createElement(
                'div',
                {
                  className: i()(
                    V,
                    ((t = {}),
                    (0, s.Z)(
                      t,
                      ''.concat(a, '-operations-operation-').concat(c),
                      !0,
                    ),
                    (0, s.Z)(
                      t,
                      ''.concat(a, '-operations-operation-disabled'),
                      !!l,
                    ),
                    t),
                  ),
                  onClick: r,
                  key: c,
                },
                n,
              );
            }),
            _ = o.createElement(
              'div',
              { className: ''.concat(a, '-operations') },
              F,
            );
          return o.createElement(
            R.ZP,
            { visible: t, motionName: n },
            function (e) {
              var t = e.className,
                n = e.style;
              return o.createElement(
                O.Z,
                { open: !0, getContainer: null != r ? r : document.body },
                o.createElement(
                  'div',
                  {
                    className: i()(''.concat(a, '-operations-wrapper'), t, c),
                    style: (0, l.Z)((0, l.Z)({}, n), {}, { zIndex: $ }),
                  },
                  null === y
                    ? null
                    : o.createElement(
                        'button',
                        { className: ''.concat(a, '-close'), onClick: E },
                        y || X,
                      ),
                  m &&
                    o.createElement(
                      o.Fragment,
                      null,
                      o.createElement(
                        'div',
                        {
                          className: i()(
                            ''.concat(a, '-switch-left'),
                            (0, s.Z)(
                              {},
                              ''.concat(a, '-switch-left-disabled'),
                              0 === d,
                            ),
                          ),
                          onClick: S,
                        },
                        H,
                      ),
                      o.createElement(
                        'div',
                        {
                          className: i()(
                            ''.concat(a, '-switch-right'),
                            (0, s.Z)(
                              {},
                              ''.concat(a, '-switch-right-disabled'),
                              d === h - 1,
                            ),
                          ),
                          onClick: Z,
                        },
                        G,
                      ),
                    ),
                  o.createElement(
                    'div',
                    { className: ''.concat(a, '-footer') },
                    p &&
                      o.createElement(
                        'div',
                        { className: ''.concat(a, '-progress') },
                        f ? f(d + 1, h) : ''.concat(d + 1, ' / ').concat(h),
                      ),
                    T
                      ? T(
                          _,
                          (0, l.Z)(
                            {
                              icons: {
                                flipYIcon: F[0],
                                flipXIcon: F[1],
                                rotateLeftIcon: F[2],
                                rotateRightIcon: F[3],
                                zoomOutIcon: F[4],
                                zoomInIcon: F[5],
                              },
                              actions: {
                                onFlipY: z,
                                onFlipX: j,
                                onRotateLeft: M,
                                onRotateRight: k,
                                onZoomOut: N,
                                onZoomIn: I,
                              },
                              transform: g,
                            },
                            P ? { current: d, total: h } : {},
                          ),
                        )
                      : _,
                  ),
                ),
              );
            },
          );
        },
        z = ['fallback', 'src', 'imgRef'],
        T = [
          'prefixCls',
          'src',
          'alt',
          'fallback',
          'movable',
          'onClose',
          'visible',
          'icons',
          'rootClassName',
          'closeIcon',
          'getContainer',
          'current',
          'count',
          'countRender',
          'scaleStep',
          'minScale',
          'maxScale',
          'transitionName',
          'maskTransitionName',
          'imageRender',
          'imgCommonProps',
          'toolbarRender',
          'onTransform',
          'onChange',
        ],
        $ = function (e) {
          var t = e.fallback,
            n = e.src,
            r = e.imgRef,
            a = (0, m.Z)(e, z),
            i = w({ src: n, fallback: t }),
            l = (0, u.Z)(i, 2),
            s = l[0],
            f = l[1];
          return o.createElement(
            'img',
            (0, c.Z)(
              {
                ref: function (e) {
                  (r.current = e), s(e);
                },
              },
              a,
              f,
            ),
          );
        },
        P = function (e) {
          var t = e.prefixCls,
            n = e.src,
            r = e.alt,
            a = e.fallback,
            f = e.movable,
            d = void 0 === f || f,
            g = e.onClose,
            h = e.visible,
            w = e.icons,
            I = void 0 === w ? {} : w,
            k = e.rootClassName,
            O = e.closeIcon,
            R = e.getContainer,
            z = e.current,
            P = void 0 === z ? 0 : z,
            L = e.count,
            A = void 0 === L ? 1 : L,
            D = e.countRender,
            Y = e.scaleStep,
            X = void 0 === Y ? 0.5 : Y,
            H = e.minScale,
            G = void 0 === H ? 1 : H,
            B = e.maxScale,
            W = void 0 === B ? 50 : B,
            V = e.transitionName,
            F = void 0 === V ? 'zoom' : V,
            _ = e.maskTransitionName,
            U = void 0 === _ ? 'fade' : _,
            Q = e.imageRender,
            J = e.imgCommonProps,
            q = e.toolbarRender,
            K = e.onTransform,
            ee = e.onChange,
            te = (0, m.Z)(e, T),
            ne = (0, o.useRef)(),
            oe = (0, o.useContext)(v),
            re = oe && A > 1,
            ae = oe && A >= 1,
            ie = (0, o.useState)(!0),
            ce = (0, u.Z)(ie, 2),
            le = ce[0],
            se = ce[1],
            ue = (function (e, t, n, r) {
              var a = (0, o.useRef)(null),
                i = (0, o.useRef)([]),
                c = (0, o.useState)(Z),
                s = (0, u.Z)(c, 2),
                f = s[0],
                m = s[1],
                d = function (e, t) {
                  null === a.current &&
                    ((i.current = []),
                    (a.current = (0, S.Z)(function () {
                      m(function (e) {
                        var n = e;
                        return (
                          i.current.forEach(function (e) {
                            n = (0, l.Z)((0, l.Z)({}, n), e);
                          }),
                          (a.current = null),
                          null == r || r({ transform: n, action: t }),
                          n
                        );
                      });
                    }))),
                    i.current.push((0, l.Z)((0, l.Z)({}, f), e));
                };
              return {
                transform: f,
                resetTransform: function (e) {
                  m(Z), r && !(0, y.Z)(Z, f) && r({ transform: Z, action: e });
                },
                updateTransform: d,
                dispatchZoomChange: function (o, r, a, i, c) {
                  var l = e.current,
                    s = l.width,
                    u = l.height,
                    m = l.offsetWidth,
                    g = l.offsetHeight,
                    v = l.offsetLeft,
                    h = l.offsetTop,
                    w = o,
                    C = f.scale * o;
                  C > n
                    ? ((C = n), (w = n / f.scale))
                    : C < t && (w = (C = c ? C : t) / f.scale);
                  var b = null != a ? a : innerWidth / 2,
                    x = null != i ? i : innerHeight / 2,
                    y = w - 1,
                    S = y * s * 0.5,
                    Z = y * u * 0.5,
                    E = y * (b - f.x - v),
                    I = y * (x - f.y - h),
                    N = f.x - (E - S),
                    k = f.y - (I - Z);
                  if (o < 1 && 1 === C) {
                    var M = m * C,
                      O = g * C,
                      R = (0, p.g1)(),
                      j = R.width,
                      z = R.height;
                    M <= j && O <= z && ((N = 0), (k = 0));
                  }
                  d({ x: N, y: k, scale: C }, r);
                },
              };
            })(ne, G, W, K),
            fe = ue.transform,
            me = ue.resetTransform,
            pe = ue.updateTransform,
            de = ue.dispatchZoomChange,
            ge = (function (e, t, n, r, a, i, c) {
              var s = a.rotate,
                f = a.scale,
                m = a.x,
                p = a.y,
                d = (0, o.useState)(!1),
                g = (0, u.Z)(d, 2),
                v = g[0],
                h = g[1],
                w = (0, o.useRef)({
                  diffX: 0,
                  diffY: 0,
                  transformX: 0,
                  transformY: 0,
                }),
                C = function (e) {
                  n &&
                    v &&
                    i(
                      {
                        x: e.pageX - w.current.diffX,
                        y: e.pageY - w.current.diffY,
                      },
                      'move',
                    );
                },
                x = function () {
                  if (n && v) {
                    h(!1);
                    var t = w.current,
                      o = t.transformX,
                      r = t.transformY;
                    if (m === o || p === r) return;
                    var a = e.current.offsetWidth * f,
                      c = e.current.offsetHeight * f,
                      u = e.current.getBoundingClientRect(),
                      d = u.left,
                      g = u.top,
                      C = s % 180 != 0,
                      b = N(C ? c : a, C ? a : c, d, g);
                    b && i((0, l.Z)({}, b), 'dragRebound');
                  }
                };
              return (
                (0, o.useEffect)(
                  function () {
                    var e, n, o, r;
                    if (t) {
                      (o = (0, b.Z)(window, 'mouseup', x, !1)),
                        (r = (0, b.Z)(window, 'mousemove', C, !1));
                      try {
                        window.top !== window.self &&
                          ((e = (0, b.Z)(window.top, 'mouseup', x, !1)),
                          (n = (0, b.Z)(window.top, 'mousemove', C, !1)));
                      } catch (e) {
                        (0, E.Kp)(!1, '[rc-image] '.concat(e));
                      }
                    }
                    return function () {
                      var t, a, i, c;
                      null === (t = o) || void 0 === t || t.remove(),
                        null === (a = r) || void 0 === a || a.remove(),
                        null === (i = e) || void 0 === i || i.remove(),
                        null === (c = n) || void 0 === c || c.remove();
                    };
                  },
                  [n, v, m, p, s, t],
                ),
                {
                  isMoving: v,
                  onMouseDown: function (e) {
                    t &&
                      0 === e.button &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      (w.current = {
                        diffX: e.pageX - m,
                        diffY: e.pageY - p,
                        transformX: m,
                        transformY: p,
                      }),
                      h(!0));
                  },
                  onMouseMove: C,
                  onMouseUp: x,
                  onWheel: function (e) {
                    if (n && 0 != e.deltaY) {
                      var t = Math.abs(e.deltaY / 100),
                        o = 1 + Math.min(t, 1) * r;
                      e.deltaY > 0 && (o = 1 / o),
                        c(o, 'wheel', e.clientX, e.clientY);
                    }
                  },
                }
              );
            })(ne, d, h, X, fe, pe, de),
            ve = ge.isMoving,
            he = ge.onMouseDown,
            we = ge.onWheel,
            Ce = M(ne, d, h, G, fe, pe, de),
            be = Ce.isTouching,
            xe = Ce.onTouchStart,
            ye = Ce.onTouchMove,
            Se = Ce.onTouchEnd,
            Ze = fe.rotate,
            Ee = fe.scale,
            Ie = i()((0, s.Z)({}, ''.concat(t, '-moving'), ve));
          (0, o.useEffect)(
            function () {
              le || se(!0);
            },
            [le],
          );
          var Ne = function (e) {
              null == e || e.preventDefault(),
                null == e || e.stopPropagation(),
                P > 0 && (se(!1), me('prev'), null == ee || ee(P - 1, P));
            },
            ke = function (e) {
              null == e || e.preventDefault(),
                null == e || e.stopPropagation(),
                P < A - 1 && (se(!1), me('next'), null == ee || ee(P + 1, P));
            },
            Me = function (e) {
              h &&
                re &&
                (e.keyCode === x.Z.LEFT
                  ? Ne()
                  : e.keyCode === x.Z.RIGHT && ke());
            };
          (0, o.useEffect)(
            function () {
              var e = (0, b.Z)(window, 'keydown', Me, !1);
              return function () {
                e.remove();
              };
            },
            [h, re, P],
          );
          var Oe = o.createElement(
            $,
            (0, c.Z)({}, J, {
              width: e.width,
              height: e.height,
              imgRef: ne,
              className: ''.concat(t, '-img'),
              alt: r,
              style: {
                transform: 'translate3d('
                  .concat(fe.x, 'px, ')
                  .concat(fe.y, 'px, 0) scale3d(')
                  .concat(fe.flipX ? '-' : '')
                  .concat(Ee, ', ')
                  .concat(fe.flipY ? '-' : '')
                  .concat(Ee, ', 1) rotate(')
                  .concat(Ze, 'deg)'),
                transitionDuration: (!le || be) && '0s',
              },
              fallback: a,
              src: n,
              onWheel: we,
              onMouseDown: he,
              onDoubleClick: function (e) {
                h &&
                  (1 !== Ee
                    ? pe({ x: 0, y: 0, scale: 1 }, 'doubleClick')
                    : de(1 + X, 'doubleClick', e.clientX, e.clientY));
              },
              onTouchStart: xe,
              onTouchMove: ye,
              onTouchEnd: Se,
              onTouchCancel: Se,
            }),
          );
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              C.Z,
              (0, c.Z)(
                {
                  transitionName: F,
                  maskTransitionName: U,
                  closable: !1,
                  keyboard: !0,
                  prefixCls: t,
                  onClose: g,
                  visible: h,
                  classNames: { wrapper: Ie },
                  rootClassName: k,
                  getContainer: R,
                },
                te,
                {
                  afterClose: function () {
                    me('close');
                  },
                },
              ),
              o.createElement(
                'div',
                { className: ''.concat(t, '-img-wrapper') },
                Q
                  ? Q(Oe, (0, l.Z)({ transform: fe }, oe ? { current: P } : {}))
                  : Oe,
              ),
            ),
            o.createElement(j, {
              visible: h,
              transform: fe,
              maskTransitionName: U,
              closeIcon: O,
              getContainer: R,
              prefixCls: t,
              rootClassName: k,
              icons: I,
              countRender: D,
              showSwitch: re,
              showProgress: ae,
              current: P,
              count: A,
              scale: Ee,
              minScale: G,
              maxScale: W,
              toolbarRender: q,
              onSwitchLeft: Ne,
              onSwitchRight: ke,
              onZoomIn: function () {
                de(1 + X, 'zoomIn');
              },
              onZoomOut: function () {
                de(1 / (1 + X), 'zoomOut');
              },
              onRotateRight: function () {
                pe({ rotate: Ze + 90 }, 'rotateRight');
              },
              onRotateLeft: function () {
                pe({ rotate: Ze - 90 }, 'rotateLeft');
              },
              onFlipX: function () {
                pe({ flipX: !fe.flipX }, 'flipX');
              },
              onFlipY: function () {
                pe({ flipY: !fe.flipY }, 'flipY');
              },
              onClose: g,
              zIndex: void 0 !== te.zIndex ? te.zIndex + 1 : void 0,
            }),
          );
        },
        L = n(74902);
      var A = [
          'visible',
          'onVisibleChange',
          'getContainer',
          'current',
          'movable',
          'minScale',
          'maxScale',
          'countRender',
          'closeIcon',
          'onChange',
          'onTransform',
          'toolbarRender',
          'imageRender',
        ],
        D = ['src'],
        Y = function (e) {
          var t,
            n = e.previewPrefixCls,
            r = void 0 === n ? 'rc-image-preview' : n,
            a = e.children,
            i = e.icons,
            p = void 0 === i ? {} : i,
            h = e.items,
            w = e.preview,
            C = e.fallback,
            b = 'object' === (0, f.Z)(w) ? w : {},
            x = b.visible,
            y = b.onVisibleChange,
            S = b.getContainer,
            Z = b.current,
            E = b.movable,
            I = b.minScale,
            N = b.maxScale,
            k = b.countRender,
            M = b.closeIcon,
            O = b.onChange,
            R = b.onTransform,
            j = b.toolbarRender,
            z = b.imageRender,
            T = (0, m.Z)(b, A),
            $ = (function (e) {
              var t = o.useState({}),
                n = (0, u.Z)(t, 2),
                r = n[0],
                a = n[1],
                i = o.useCallback(function (e, t) {
                  return (
                    a(function (n) {
                      return (0, l.Z)((0, l.Z)({}, n), {}, (0, s.Z)({}, e, t));
                    }),
                    function () {
                      a(function (t) {
                        var n = (0, l.Z)({}, t);
                        return delete n[e], n;
                      });
                    }
                  );
                }, []);
              return [
                o.useMemo(
                  function () {
                    return e
                      ? e.map(function (e) {
                          if ('string' == typeof e) return { data: { src: e } };
                          var t = {};
                          return (
                            Object.keys(e).forEach(function (n) {
                              ['src'].concat((0, L.Z)(g)).includes(n) &&
                                (t[n] = e[n]);
                            }),
                            { data: t }
                          );
                        })
                      : Object.keys(r).reduce(function (e, t) {
                          var n = r[t],
                            o = n.canPreview,
                            a = n.data;
                          return o && e.push({ data: a, id: t }), e;
                        }, []);
                  },
                  [e, r],
                ),
                i,
              ];
            })(h),
            Y = (0, u.Z)($, 2),
            X = Y[0],
            H = Y[1],
            G = (0, d.Z)(0, { value: Z }),
            B = (0, u.Z)(G, 2),
            W = B[0],
            V = B[1],
            F = (0, o.useState)(!1),
            _ = (0, u.Z)(F, 2),
            U = _[0],
            Q = _[1],
            J = (null === (t = X[W]) || void 0 === t ? void 0 : t.data) || {},
            q = J.src,
            K = (0, m.Z)(J, D),
            ee = (0, d.Z)(!!x, {
              value: x,
              onChange: function (e, t) {
                null == y || y(e, t, W);
              },
            }),
            te = (0, u.Z)(ee, 2),
            ne = te[0],
            oe = te[1],
            re = (0, o.useState)(null),
            ae = (0, u.Z)(re, 2),
            ie = ae[0],
            ce = ae[1],
            le = o.useCallback(
              function (e, t, n) {
                var o = X.findIndex(function (t) {
                  return t.id === e;
                });
                oe(!0), ce({ x: t, y: n }), V(o < 0 ? 0 : o), Q(!0);
              },
              [X],
            );
          o.useEffect(
            function () {
              ne ? U || V(0) : Q(!1);
            },
            [ne],
          );
          var se = o.useMemo(
            function () {
              return { register: H, onPreview: le };
            },
            [H, le],
          );
          return o.createElement(
            v.Provider,
            { value: se },
            a,
            o.createElement(
              P,
              (0, c.Z)(
                {
                  'aria-hidden': !ne,
                  movable: E,
                  visible: ne,
                  prefixCls: r,
                  closeIcon: M,
                  onClose: function () {
                    oe(!1), ce(null);
                  },
                  mousePosition: ie,
                  imgCommonProps: K,
                  src: q,
                  fallback: C,
                  icons: p,
                  minScale: I,
                  maxScale: N,
                  getContainer: S,
                  current: W,
                  count: X.length,
                  countRender: k,
                  onTransform: R,
                  toolbarRender: j,
                  imageRender: z,
                  onChange: function (e, t) {
                    V(e), null == O || O(e, t);
                  },
                },
                T,
              ),
            ),
          );
        },
        X = [
          'src',
          'alt',
          'onPreviewClose',
          'prefixCls',
          'previewPrefixCls',
          'placeholder',
          'fallback',
          'width',
          'height',
          'style',
          'preview',
          'className',
          'onClick',
          'onError',
          'wrapperClassName',
          'wrapperStyle',
          'rootClassName',
        ],
        H = [
          'src',
          'visible',
          'onVisibleChange',
          'getContainer',
          'mask',
          'maskClassName',
          'movable',
          'icons',
          'scaleStep',
          'minScale',
          'maxScale',
          'imageRender',
          'toolbarRender',
        ],
        G = function (e) {
          var t = e.src,
            n = e.alt,
            r = e.onPreviewClose,
            a = e.prefixCls,
            C = void 0 === a ? 'rc-image' : a,
            b = e.previewPrefixCls,
            x = void 0 === b ? ''.concat(C, '-preview') : b,
            y = e.placeholder,
            S = e.fallback,
            Z = e.width,
            E = e.height,
            I = e.style,
            N = e.preview,
            k = void 0 === N || N,
            M = e.className,
            O = e.onClick,
            R = e.onError,
            j = e.wrapperClassName,
            z = e.wrapperStyle,
            T = e.rootClassName,
            $ = (0, m.Z)(e, X),
            L = y && !0 !== y,
            A = 'object' === (0, f.Z)(k) ? k : {},
            D = A.src,
            Y = A.visible,
            G = void 0 === Y ? void 0 : Y,
            B = A.onVisibleChange,
            W = void 0 === B ? r : B,
            V = A.getContainer,
            F = void 0 === V ? void 0 : V,
            _ = A.mask,
            U = A.maskClassName,
            Q = A.movable,
            J = A.icons,
            q = A.scaleStep,
            K = A.minScale,
            ee = A.maxScale,
            te = A.imageRender,
            ne = A.toolbarRender,
            oe = (0, m.Z)(A, H),
            re = null != D ? D : t,
            ae = (0, d.Z)(!!G, { value: G, onChange: W }),
            ie = (0, u.Z)(ae, 2),
            ce = ie[0],
            le = ie[1],
            se = w({ src: t, isCustomPlaceholder: L, fallback: S }),
            ue = (0, u.Z)(se, 3),
            fe = ue[0],
            me = ue[1],
            pe = ue[2],
            de = (0, o.useState)(null),
            ge = (0, u.Z)(de, 2),
            ve = ge[0],
            he = ge[1],
            we = (0, o.useContext)(v),
            Ce = !!k,
            be = i()(
              C,
              j,
              T,
              (0, s.Z)({}, ''.concat(C, '-error'), 'error' === pe),
            ),
            xe = (0, o.useMemo)(
              function () {
                var t = {};
                return (
                  g.forEach(function (n) {
                    void 0 !== e[n] && (t[n] = e[n]);
                  }),
                  t
                );
              },
              g.map(function (t) {
                return e[t];
              }),
            ),
            ye = (function (e, t) {
              var n = o.useState(function () {
                  return String((h += 1));
                }),
                r = (0, u.Z)(n, 1)[0],
                a = o.useContext(v),
                i = { data: t, canPreview: e };
              return (
                o.useEffect(function () {
                  if (a) return a.register(r, i);
                }, []),
                o.useEffect(
                  function () {
                    a && a.register(r, i);
                  },
                  [e, t],
                ),
                r
              );
            })(
              Ce,
              (0, o.useMemo)(
                function () {
                  return (0, l.Z)((0, l.Z)({}, xe), {}, { src: re });
                },
                [re, xe],
              ),
            );
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              'div',
              (0, c.Z)({}, $, {
                className: be,
                onClick: Ce
                  ? function (e) {
                      var t = (0, p.os)(e.target),
                        n = t.left,
                        o = t.top;
                      we
                        ? we.onPreview(ye, n, o)
                        : (he({ x: n, y: o }), le(!0)),
                        null == O || O(e);
                    }
                  : O,
                style: (0, l.Z)({ width: Z, height: E }, z),
              }),
              o.createElement(
                'img',
                (0, c.Z)(
                  {},
                  xe,
                  {
                    className: i()(
                      ''.concat(C, '-img'),
                      (0, s.Z)({}, ''.concat(C, '-img-placeholder'), !0 === y),
                      M,
                    ),
                    style: (0, l.Z)({ height: E }, I),
                    ref: fe,
                  },
                  me,
                  { width: Z, height: E, onError: R },
                ),
              ),
              'loading' === pe &&
                o.createElement(
                  'div',
                  {
                    'aria-hidden': 'true',
                    className: ''.concat(C, '-placeholder'),
                  },
                  y,
                ),
              _ &&
                Ce &&
                o.createElement(
                  'div',
                  {
                    className: i()(''.concat(C, '-mask'), U),
                    style: {
                      display:
                        'none' === (null == I ? void 0 : I.display)
                          ? 'none'
                          : void 0,
                    },
                  },
                  _,
                ),
            ),
            !we &&
              Ce &&
              o.createElement(
                P,
                (0, c.Z)(
                  {
                    'aria-hidden': !ce,
                    visible: ce,
                    prefixCls: x,
                    onClose: function () {
                      le(!1), he(null);
                    },
                    mousePosition: ve,
                    src: re,
                    alt: n,
                    fallback: S,
                    getContainer: F,
                    icons: J,
                    movable: Q,
                    scaleStep: q,
                    minScale: K,
                    maxScale: ee,
                    rootClassName: T,
                    imageRender: te,
                    imgCommonProps: xe,
                    toolbarRender: ne,
                  },
                  oe,
                ),
              ),
          );
        };
      (G.PreviewGroup = Y), (G.displayName = 'Image');
      var B = G,
        W = n(87263),
        V = n(33603),
        F = n(53124),
        _ = n(24457),
        U = n(97937),
        Q = n(6171),
        J = n(90814),
        q = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'defs',
                attrs: {},
                children: [{ tag: 'style', attrs: {} }],
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z',
                },
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z',
                },
              },
            ],
          },
          name: 'rotate-left',
          theme: 'outlined',
        },
        K = n(84089),
        ee = function (e, t) {
          return o.createElement(K.Z, (0, c.Z)({}, e, { ref: t, icon: q }));
        };
      var te = o.forwardRef(ee),
        ne = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'defs',
                attrs: {},
                children: [{ tag: 'style', attrs: {} }],
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z',
                },
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z',
                },
              },
            ],
          },
          name: 'rotate-right',
          theme: 'outlined',
        },
        oe = function (e, t) {
          return o.createElement(K.Z, (0, c.Z)({}, e, { ref: t, icon: ne }));
        };
      var re = o.forwardRef(oe),
        ae = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'swap',
          theme: 'outlined',
        },
        ie = function (e, t) {
          return o.createElement(K.Z, (0, c.Z)({}, e, { ref: t, icon: ae }));
        };
      var ce = o.forwardRef(ie),
        le = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z',
                },
              },
            ],
          },
          name: 'zoom-in',
          theme: 'outlined',
        },
        se = function (e, t) {
          return o.createElement(K.Z, (0, c.Z)({}, e, { ref: t, icon: le }));
        };
      var ue = o.forwardRef(se),
        fe = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z',
                },
              },
            ],
          },
          name: 'zoom-out',
          theme: 'outlined',
        },
        me = function (e, t) {
          return o.createElement(K.Z, (0, c.Z)({}, e, { ref: t, icon: fe }));
        };
      var pe = o.forwardRef(me),
        de = n(35792),
        ge = n(54548),
        ve = n(10274),
        he = n(71194),
        we = n(14747),
        Ce = n(50438),
        be = n(16932),
        xe = n(91945),
        ye = n(45503);
      const Se = (e) => ({ position: e || 'absolute', inset: 0 }),
        Ze = (e) => {
          const {
            iconCls: t,
            motionDurationSlow: n,
            paddingXXS: o,
            marginXXS: r,
            prefixCls: a,
            colorTextLightSolid: i,
          } = e;
          return {
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: i,
            background: new ve.C('#000').setAlpha(0.5).toRgbString(),
            cursor: 'pointer',
            opacity: 0,
            transition: `opacity ${n}`,
            [`.${a}-mask-info`]: Object.assign(Object.assign({}, we.vS), {
              padding: `0 ${(0, ge.bf)(o)}`,
              [t]: { marginInlineEnd: r, svg: { verticalAlign: 'baseline' } },
            }),
          };
        },
        Ee = (e) => {
          const {
              previewCls: t,
              modalMaskBg: n,
              paddingSM: o,
              marginXL: r,
              margin: a,
              paddingLG: i,
              previewOperationColorDisabled: c,
              previewOperationHoverColor: l,
              motionDurationSlow: s,
              iconCls: u,
              colorTextLightSolid: f,
            } = e,
            m = new ve.C(n).setAlpha(0.1),
            p = m.clone().setAlpha(0.2);
          return {
            [`${t}-footer`]: {
              position: 'fixed',
              bottom: r,
              left: { _skip_check_: !0, value: 0 },
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: e.previewOperationColor,
            },
            [`${t}-progress`]: { marginBottom: a },
            [`${t}-close`]: {
              position: 'fixed',
              top: r,
              right: { _skip_check_: !0, value: r },
              display: 'flex',
              color: f,
              backgroundColor: m.toRgbString(),
              borderRadius: '50%',
              padding: o,
              outline: 0,
              border: 0,
              cursor: 'pointer',
              transition: `all ${s}`,
              '&:hover': { backgroundColor: p.toRgbString() },
              [`& > ${u}`]: { fontSize: e.previewOperationSize },
            },
            [`${t}-operations`]: {
              display: 'flex',
              alignItems: 'center',
              padding: `0 ${(0, ge.bf)(i)}`,
              backgroundColor: m.toRgbString(),
              borderRadius: 100,
              '&-operation': {
                marginInlineStart: o,
                padding: o,
                cursor: 'pointer',
                transition: `all ${s}`,
                userSelect: 'none',
                [`&:not(${t}-operations-operation-disabled):hover > ${u}`]: {
                  color: l,
                },
                '&-disabled': { color: c, cursor: 'not-allowed' },
                '&:first-of-type': { marginInlineStart: 0 },
                [`& > ${u}`]: { fontSize: e.previewOperationSize },
              },
            },
          };
        },
        Ie = (e) => {
          const {
              modalMaskBg: t,
              iconCls: n,
              previewOperationColorDisabled: o,
              previewCls: r,
              zIndexPopup: a,
              motionDurationSlow: i,
            } = e,
            c = new ve.C(t).setAlpha(0.1),
            l = c.clone().setAlpha(0.2);
          return {
            [`${r}-switch-left, ${r}-switch-right`]: {
              position: 'fixed',
              insetBlockStart: '50%',
              zIndex: e.calc(a).add(1).equal({ unit: !1 }),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: e.imagePreviewSwitchSize,
              height: e.imagePreviewSwitchSize,
              marginTop: e
                .calc(e.imagePreviewSwitchSize)
                .mul(-1)
                .div(2)
                .equal(),
              color: e.previewOperationColor,
              background: c.toRgbString(),
              borderRadius: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              transition: `all ${i}`,
              userSelect: 'none',
              '&:hover': { background: l.toRgbString() },
              '&-disabled': {
                '&, &:hover': {
                  color: o,
                  background: 'transparent',
                  cursor: 'not-allowed',
                  [`> ${n}`]: { cursor: 'not-allowed' },
                },
              },
              [`> ${n}`]: { fontSize: e.previewOperationSize },
            },
            [`${r}-switch-left`]: { insetInlineStart: e.marginSM },
            [`${r}-switch-right`]: { insetInlineEnd: e.marginSM },
          };
        },
        Ne = (e) => {
          const {
            motionEaseOut: t,
            previewCls: n,
            motionDurationSlow: o,
            componentCls: r,
          } = e;
          return [
            {
              [`${r}-preview-root`]: {
                [n]: {
                  height: '100%',
                  textAlign: 'center',
                  pointerEvents: 'none',
                },
                [`${n}-body`]: Object.assign(Object.assign({}, Se()), {
                  overflow: 'hidden',
                }),
                [`${n}-img`]: {
                  maxWidth: '100%',
                  maxHeight: '70%',
                  verticalAlign: 'middle',
                  transform: 'scale3d(1, 1, 1)',
                  cursor: 'grab',
                  transition: `transform ${o} ${t} 0s`,
                  userSelect: 'none',
                  '&-wrapper': Object.assign(Object.assign({}, Se()), {
                    transition: `transform ${o} ${t} 0s`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '& > *': { pointerEvents: 'auto' },
                    '&::before': {
                      display: 'inline-block',
                      width: 1,
                      height: '50%',
                      marginInlineEnd: -1,
                      content: '""',
                    },
                  }),
                },
                [`${n}-moving`]: {
                  [`${n}-preview-img`]: {
                    cursor: 'grabbing',
                    '&-wrapper': { transitionDuration: '0s' },
                  },
                },
              },
            },
            {
              [`${r}-preview-root`]: {
                [`${n}-wrap`]: { zIndex: e.zIndexPopup },
              },
            },
            {
              [`${r}-preview-operations-wrapper`]: {
                position: 'fixed',
                zIndex: e.calc(e.zIndexPopup).add(1).equal({ unit: !1 }),
              },
              '&': [Ee(e), Ie(e)],
            },
          ];
        },
        ke = (e) => {
          const { componentCls: t } = e;
          return {
            [t]: {
              position: 'relative',
              display: 'inline-block',
              [`${t}-img`]: {
                width: '100%',
                height: 'auto',
                verticalAlign: 'middle',
              },
              [`${t}-img-placeholder`]: {
                backgroundColor: e.colorBgContainerDisabled,
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: '30%',
              },
              [`${t}-mask`]: Object.assign({}, Ze(e)),
              [`${t}-mask:hover`]: { opacity: 1 },
              [`${t}-placeholder`]: Object.assign({}, Se()),
            },
          };
        },
        Me = (e) => {
          const { previewCls: t } = e;
          return {
            [`${t}-root`]: (0, Ce._y)(e, 'zoom'),
            '&': (0, be.J$)(e, !0),
          };
        };
      var Oe = (0, xe.I$)(
          'Image',
          (e) => {
            const t = `${e.componentCls}-preview`,
              n = (0, ye.TS)(e, {
                previewCls: t,
                modalMaskBg: new ve.C('#000').setAlpha(0.45).toRgbString(),
                imagePreviewSwitchSize: e.controlHeightLG,
              });
            return [
              ke(n),
              Ne(n),
              (0, he.QA)((0, ye.TS)(n, { componentCls: t })),
              Me(n),
            ];
          },
          (e) => ({
            zIndexPopup: e.zIndexPopupBase + 80,
            previewOperationColor: new ve.C(e.colorTextLightSolid)
              .setAlpha(0.65)
              .toRgbString(),
            previewOperationHoverColor: new ve.C(e.colorTextLightSolid)
              .setAlpha(0.85)
              .toRgbString(),
            previewOperationColorDisabled: new ve.C(e.colorTextLightSolid)
              .setAlpha(0.25)
              .toRgbString(),
            previewOperationSize: 1.5 * e.fontSizeIcon,
          }),
        ),
        Re = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        };
      const je = {
        rotateLeft: o.createElement(te, null),
        rotateRight: o.createElement(re, null),
        zoomIn: o.createElement(ue, null),
        zoomOut: o.createElement(pe, null),
        close: o.createElement(U.Z, null),
        left: o.createElement(Q.Z, null),
        right: o.createElement(J.Z, null),
        flipX: o.createElement(ce, null),
        flipY: o.createElement(ce, { rotate: 90 }),
      };
      var ze = function (e, t) {
        var n = {};
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) &&
            t.indexOf(o) < 0 &&
            (n[o] = e[o]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
            t.indexOf(o[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
              (n[o[r]] = e[o[r]]);
        }
        return n;
      };
      const Te = (e) => {
        const {
            prefixCls: t,
            preview: n,
            className: a,
            rootClassName: c,
            style: l,
          } = e,
          s = ze(e, [
            'prefixCls',
            'preview',
            'className',
            'rootClassName',
            'style',
          ]),
          {
            getPrefixCls: u,
            locale: f = _.Z,
            getPopupContainer: m,
            image: p,
          } = o.useContext(F.E_),
          d = u('image', t),
          g = u(),
          v = f.Image || _.Z.Image,
          h = (0, de.Z)(d),
          [w, C, b] = Oe(d, h),
          x = i()(c, C, b, h),
          y = i()(a, C, null == p ? void 0 : p.className),
          [S] = (0, W.Cn)(
            'ImagePreview',
            'object' == typeof n ? n.zIndex : void 0,
          ),
          Z = o.useMemo(() => {
            if (!1 === n) return n;
            const e = 'object' == typeof n ? n : {},
              { getContainer: t } = e,
              a = ze(e, ['getContainer']);
            return Object.assign(
              Object.assign(
                {
                  mask: o.createElement(
                    'div',
                    { className: `${d}-mask-info` },
                    o.createElement(r.Z, null),
                    null == v ? void 0 : v.preview,
                  ),
                  icons: je,
                },
                a,
              ),
              {
                getContainer: t || m,
                transitionName: (0, V.m)(g, 'zoom', e.transitionName),
                maskTransitionName: (0, V.m)(g, 'fade', e.maskTransitionName),
                zIndex: S,
              },
            );
          }, [n, v]),
          E = Object.assign(Object.assign({}, null == p ? void 0 : p.style), l);
        return w(
          o.createElement(
            B,
            Object.assign(
              {
                prefixCls: d,
                preview: Z,
                rootClassName: x,
                className: y,
                style: E,
              },
              s,
            ),
          ),
        );
      };
      Te.PreviewGroup = (e) => {
        var { previewPrefixCls: t, preview: n } = e,
          r = Re(e, ['previewPrefixCls', 'preview']);
        const { getPrefixCls: a } = o.useContext(F.E_),
          c = a('image', t),
          l = `${c}-preview`,
          s = a(),
          u = (0, de.Z)(c),
          [f, m, p] = Oe(c, u),
          [d] = (0, W.Cn)(
            'ImagePreview',
            'object' == typeof n ? n.zIndex : void 0,
          ),
          g = o.useMemo(() => {
            var e;
            if (!1 === n) return n;
            const t = 'object' == typeof n ? n : {},
              o = i()(
                m,
                p,
                u,
                null !== (e = t.rootClassName) && void 0 !== e ? e : '',
              );
            return Object.assign(Object.assign({}, t), {
              transitionName: (0, V.m)(s, 'zoom', t.transitionName),
              maskTransitionName: (0, V.m)(s, 'fade', t.maskTransitionName),
              rootClassName: o,
              zIndex: d,
            });
          }, [n]);
        return f(
          o.createElement(
            B.PreviewGroup,
            Object.assign({ preview: g, previewPrefixCls: l, icons: je }, r),
          ),
        );
      };
      var $e = Te;
    },
  },
]);
//# sourceMappingURL=5561.41450934.async.js.map
