/*! For license information please see 1761.cade9fff.async.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [1761],
  {
    68795: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(87462),
        o = n(62435),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
                },
              },
            ],
          },
          name: 'search',
          theme: 'outlined',
        },
        c = n(84089),
        u = function (e, t) {
          return o.createElement(c.Z, (0, r.Z)({}, e, { ref: t, icon: i }));
        };
      var a = o.forwardRef(u);
    },
    87547: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(87462),
        o = n(62435),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z',
                },
              },
            ],
          },
          name: 'user',
          theme: 'outlined',
        },
        c = n(84089),
        u = function (e, t) {
          return o.createElement(c.Z, (0, r.Z)({}, e, { ref: t, icon: i }));
        };
      var a = o.forwardRef(u);
    },
    58580: function (e, t, n) {
      'use strict';
      var r = n(97582),
        o = n(62435),
        i = n(85980);
      t.Z = function (e, t) {
        var n = (0, r.CR)((0, o.useState)(e), 2),
          c = n[0],
          u = n[1],
          a = (0, i.Z)(function () {
            u(e);
          }, t).run;
        return (
          (0, o.useEffect)(
            function () {
              a();
            },
            [e],
          ),
          c
        );
      };
    },
    85980: function (e, t, n) {
      'use strict';
      var r = n(97582),
        o = n(23279),
        i = n.n(o),
        c = n(62435),
        u = n(3930),
        a = n(45210),
        l = n(92770),
        s = n(31663);
      t.Z = function (e, t) {
        var n;
        s.Z &&
          ((0, l.mf)(e) ||
            console.error(
              'useDebounceFn expected parameter is a function, got '.concat(
                typeof e,
              ),
            ));
        var o = (0, u.Z)(e),
          f =
            null !== (n = null == t ? void 0 : t.wait) && void 0 !== n
              ? n
              : 1e3,
          d = (0, c.useMemo)(function () {
            return i()(
              function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                return o.current.apply(o, (0, r.ev)([], (0, r.CR)(e), !1));
              },
              f,
              t,
            );
          }, []);
        return (
          (0, a.Z)(function () {
            d.cancel();
          }),
          { run: d, cancel: d.cancel, flush: d.flush }
        );
      };
    },
    3930: function (e, t, n) {
      'use strict';
      var r = n(62435);
      t.Z = function (e) {
        var t = (0, r.useRef)(e);
        return (t.current = e), t;
      };
    },
    45210: function (e, t, n) {
      'use strict';
      var r = n(62435),
        o = n(3930),
        i = n(92770),
        c = n(31663);
      t.Z = function (e) {
        c.Z &&
          ((0, i.mf)(e) ||
            console.error(
              'useUnmount expected parameter is a function, got '.concat(
                typeof e,
              ),
            ));
        var t = (0, o.Z)(e);
        (0, r.useEffect)(function () {
          return function () {
            t.current();
          };
        }, []);
      };
    },
    92770: function (e, t, n) {
      'use strict';
      n.d(t, {
        mf: function () {
          return r;
        },
      });
      var r = function (e) {
        return 'function' == typeof e;
      };
    },
    31663: function (e, t) {
      'use strict';
      t.Z = !1;
    },
    98065: function (e, t, n) {
      'use strict';
      function r(e) {
        return ['small', 'middle', 'large'].includes(e);
      }
      function o(e) {
        return !!e && 'number' == typeof e && !Number.isNaN(e);
      }
      n.d(t, {
        T: function () {
          return o;
        },
        n: function () {
          return r;
        },
      });
    },
    86250: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var r = n(62435),
        o = n(93967),
        i = n.n(o),
        c = n(98423),
        u = n(98065),
        a = n(53124),
        l = n(91945),
        s = n(45503);
      const f = ['wrap', 'nowrap', 'wrap-reverse'],
        d = [
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
      var g = function (e, t) {
        return i()(
          Object.assign(
            Object.assign(
              Object.assign(
                {},
                ((e, t) => {
                  const n = {};
                  return (
                    f.forEach((r) => {
                      n[`${e}-wrap-${r}`] = t.wrap === r;
                    }),
                    n
                  );
                })(e, t),
              ),
              ((e, t) => {
                const n = {};
                return (
                  p.forEach((r) => {
                    n[`${e}-align-${r}`] = t.align === r;
                  }),
                  (n[`${e}-align-stretch`] = !t.align && !!t.vertical),
                  n
                );
              })(e, t),
            ),
            ((e, t) => {
              const n = {};
              return (
                d.forEach((r) => {
                  n[`${e}-justify-${r}`] = t.justify === r;
                }),
                n
              );
            })(e, t),
          ),
        );
      };
      const h = (e) => {
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
        y = (e) => {
          const { componentCls: t } = e,
            n = {};
          return (
            f.forEach((e) => {
              n[`${t}-wrap-${e}`] = { flexWrap: e };
            }),
            n
          );
        },
        m = (e) => {
          const { componentCls: t } = e,
            n = {};
          return (
            p.forEach((e) => {
              n[`${t}-align-${e}`] = { alignItems: e };
            }),
            n
          );
        },
        b = (e) => {
          const { componentCls: t } = e,
            n = {};
          return (
            d.forEach((e) => {
              n[`${t}-justify-${e}`] = { justifyContent: e };
            }),
            n
          );
        };
      var w = (0, l.I$)(
          'Flex',
          (e) => {
            const { paddingXS: t, padding: n, paddingLG: r } = e,
              o = (0, s.TS)(e, { flexGapSM: t, flexGap: n, flexGapLG: r });
            return [h(o), v(o), y(o), m(o), b(o)];
          },
          () => ({}),
          { resetStyle: !1 },
        ),
        O = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        };
      const j = r.forwardRef((e, t) => {
        const {
            prefixCls: n,
            rootClassName: o,
            className: l,
            style: s,
            flex: f,
            gap: d,
            children: p,
            vertical: h = !1,
            component: v = 'div',
          } = e,
          y = O(e, [
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
          { flex: m, direction: b, getPrefixCls: j } = r.useContext(a.E_),
          x = j('flex', n),
          [M, E, S] = w(x),
          k = null != h ? h : null == m ? void 0 : m.vertical,
          R = i()(l, o, null == m ? void 0 : m.className, x, E, S, g(x, e), {
            [`${x}-rtl`]: 'rtl' === b,
            [`${x}-gap-${d}`]: (0, u.n)(d),
            [`${x}-vertical`]: k,
          }),
          C = Object.assign(Object.assign({}, null == m ? void 0 : m.style), s);
        return (
          f && (C.flex = f),
          d && !(0, u.n)(d) && (C.gap = d),
          M(
            r.createElement(
              v,
              Object.assign(
                { ref: t, className: R, style: C },
                (0, c.Z)(y, ['justify', 'wrap', 'align']),
              ),
              p,
            ),
          )
        );
      });
      var x = j;
    },
    27561: function (e, t, n) {
      var r = n(67990),
        o = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, r(e) + 1).replace(o, '') : e;
      };
    },
    67990: function (e) {
      var t = /\s/;
      e.exports = function (e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)); );
        return n;
      };
    },
    23279: function (e, t, n) {
      var r = n(13218),
        o = n(7771),
        i = n(14841),
        c = Math.max,
        u = Math.min;
      e.exports = function (e, t, n) {
        var a,
          l,
          s,
          f,
          d,
          p,
          g = 0,
          h = !1,
          v = !1,
          y = !0;
        if ('function' != typeof e) throw new TypeError('Expected a function');
        function m(t) {
          var n = a,
            r = l;
          return (a = l = void 0), (g = t), (f = e.apply(r, n));
        }
        function b(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || (v && e - g >= s);
        }
        function w() {
          var e = o();
          if (b(e)) return O(e);
          d = setTimeout(
            w,
            (function (e) {
              var n = t - (e - p);
              return v ? u(n, s - (e - g)) : n;
            })(e),
          );
        }
        function O(e) {
          return (d = void 0), y && a ? m(e) : ((a = l = void 0), f);
        }
        function j() {
          var e = o(),
            n = b(e);
          if (((a = arguments), (l = this), (p = e), n)) {
            if (void 0 === d)
              return (function (e) {
                return (g = e), (d = setTimeout(w, t)), h ? m(e) : f;
              })(p);
            if (v) return clearTimeout(d), (d = setTimeout(w, t)), m(p);
          }
          return void 0 === d && (d = setTimeout(w, t)), f;
        }
        return (
          (t = i(t) || 0),
          r(n) &&
            ((h = !!n.leading),
            (s = (v = 'maxWait' in n) ? c(i(n.maxWait) || 0, t) : s),
            (y = 'trailing' in n ? !!n.trailing : y)),
          (j.cancel = function () {
            void 0 !== d && clearTimeout(d), (g = 0), (a = p = l = d = void 0);
          }),
          (j.flush = function () {
            return void 0 === d ? f : O(o());
          }),
          j
        );
      };
    },
    27361: function (e, t, n) {
      var r = n(97786);
      e.exports = function (e, t, n) {
        var o = null == e ? void 0 : r(e, t);
        return void 0 === o ? n : o;
      };
    },
    7771: function (e, t, n) {
      var r = n(55639);
      e.exports = function () {
        return r.Date.now();
      };
    },
    14841: function (e, t, n) {
      var r = n(27561),
        o = n(13218),
        i = n(33448),
        c = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        a = /^0o[0-7]+$/i,
        l = parseInt;
      e.exports = function (e) {
        if ('number' == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + '' : t;
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = u.test(e);
        return n || a.test(e) ? l(e.slice(2), n ? 2 : 8) : c.test(e) ? NaN : +e;
      };
    },
    37921: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('ban', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['path', { d: 'm4.9 4.9 14.2 14.2', key: '1m5liu' }],
      ]);
    },
    85594: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('circle-check', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
      ]);
    },
    49482: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('play', [
        ['polygon', { points: '6 3 20 12 6 21 6 3', key: '1oa8hb' }],
      ]);
    },
    42297: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('refresh-cw', [
        [
          'path',
          {
            d: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8',
            key: 'v9h5vc',
          },
        ],
        ['path', { d: 'M21 3v5h-5', key: '1q7to0' }],
        [
          'path',
          {
            d: 'M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16',
            key: '3uifl3',
          },
        ],
        ['path', { d: 'M8 16H3v5', key: '1cv678' }],
      ]);
    },
    74632: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('scroll-text', [
        ['path', { d: 'M15 12h-5', key: 'r7krc0' }],
        ['path', { d: 'M15 8h-5', key: '1khuty' }],
        ['path', { d: 'M19 17V5a2 2 0 0 0-2-2H4', key: 'zz82l3' }],
        [
          'path',
          {
            d: 'M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3',
            key: '1ph1d7',
          },
        ],
      ]);
    },
    59632: function (e) {
      var t = function (e) {
        return 'string' == typeof e;
      };
      function n(e, n, r) {
        var o = 0,
          i = 0;
        if ('' === e) return e;
        if (!e || !t(e))
          throw new TypeError(
            'First argument to react-string-replace#replaceString must be a string',
          );
        var c,
          u,
          a,
          l = n;
        (function (e) {
          return e instanceof RegExp;
        })(l) ||
          (l = new RegExp(
            '(' +
              ((c = l),
              (u = /[\\^$.*+?()[\]{}|]/g),
              (a = RegExp(u.source)),
              (c && a.test(c) ? c.replace(u, '\\$&') : c) + ')'),
            'gi',
          ));
        for (var s = e.split(l), f = 1, d = s.length; f < d; f += 2)
          void 0 !== s[f] && void 0 !== s[f - 1]
            ? ((i = s[f].length),
              (o += s[f - 1].length),
              (s[f] = r(s[f], f, o)),
              (o += i))
            : console.warn(
                'reactStringReplace: Encountered undefined value during string replacement. Your RegExp may not be working the way you expect.',
              );
        return s;
      }
      e.exports = function (e, r, o) {
        return (
          Array.isArray(e) || (e = [e]),
          (i = e.map(function (e) {
            return t(e) ? n(e, r, o) : e;
          })),
          (c = []),
          i.forEach(function (e) {
            Array.isArray(e) ? (c = c.concat(e)) : c.push(e);
          }),
          c
        );
        var i, c;
      };
    },
    57632: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = {
        randomUUID:
          'undefined' != typeof crypto &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto),
      };
      let o;
      const i = new Uint8Array(16);
      function c() {
        if (
          !o &&
          ((o =
            'undefined' != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)),
          !o)
        )
          throw new Error(
            'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
          );
        return o(i);
      }
      const u = [];
      for (let e = 0; e < 256; ++e) u.push((e + 256).toString(16).slice(1));
      function a(e, t = 0) {
        return (
          u[e[t + 0]] +
          u[e[t + 1]] +
          u[e[t + 2]] +
          u[e[t + 3]] +
          '-' +
          u[e[t + 4]] +
          u[e[t + 5]] +
          '-' +
          u[e[t + 6]] +
          u[e[t + 7]] +
          '-' +
          u[e[t + 8]] +
          u[e[t + 9]] +
          '-' +
          u[e[t + 10]] +
          u[e[t + 11]] +
          u[e[t + 12]] +
          u[e[t + 13]] +
          u[e[t + 14]] +
          u[e[t + 15]]
        );
      }
      var l = function (e, t, n) {
        if (r.randomUUID && !t && !e) return r.randomUUID();
        const o = (e = e || {}).random || (e.rng || c)();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = o[e];
          return t;
        }
        return a(o);
      };
    },
    63764: function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function f(e) {
        return function t() {
          for (
            var n = this, r = arguments.length, o = new Array(r), i = 0;
            i < r;
            i++
          )
            o[i] = arguments[i];
          return o.length >= e.length
            ? e.apply(this, o)
            : function () {
                for (
                  var e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                return t.apply(n, [].concat(o, r));
              };
        };
      }
      function d(e) {
        return {}.toString.call(e).includes('Object');
      }
      function p(e) {
        return 'function' == typeof e;
      }
      n.d(t, {
        ZP: function () {
          return ce;
        },
        _m: function () {
          return F;
        },
      });
      var g = f(function (e, t) {
          throw new Error(e[t] || e.default);
        })({
          initialIsRequired: 'initial state is required',
          initialType: 'initial state should be an object',
          initialContent: "initial state shouldn't be an empty object",
          handlerType: 'handler should be an object or a function',
          handlersType: 'all handlers should be a functions',
          selectorType: 'selector should be a function',
          changeType: 'provided value of changes should be an object',
          changeField:
            'it seams you want to change a field in the state which is not specified in the "initial" state',
          default: 'an unknown error accured in `state-local` package',
        }),
        h = {
          changes: function (e, t) {
            return (
              d(t) || g('changeType'),
              Object.keys(t).some(function (t) {
                return (
                  (n = e), (r = t), !Object.prototype.hasOwnProperty.call(n, r)
                );
                var n, r;
              }) && g('changeField'),
              t
            );
          },
          selector: function (e) {
            p(e) || g('selectorType');
          },
          handler: function (e) {
            p(e) || d(e) || g('handlerType'),
              d(e) &&
                Object.values(e).some(function (e) {
                  return !p(e);
                }) &&
                g('handlersType');
          },
          initial: function (e) {
            var t;
            e || g('initialIsRequired'),
              d(e) || g('initialType'),
              (t = e),
              Object.keys(t).length || g('initialContent');
          },
        };
      function v(e, t) {
        return p(t) ? t(e.current) : t;
      }
      function y(e, t) {
        return (e.current = s(s({}, e.current), t)), t;
      }
      function m(e, t, n) {
        return (
          p(t)
            ? t(e.current)
            : Object.keys(n).forEach(function (n) {
                var r;
                return null === (r = t[n]) || void 0 === r
                  ? void 0
                  : r.call(t, e.current[n]);
              }),
          n
        );
      }
      var b = {
          create: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            h.initial(e), h.handler(t);
            var n = { current: e },
              r = f(m)(n, t),
              o = f(y)(n),
              i = f(h.changes)(e),
              c = f(v)(n);
            return [
              function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : function (e) {
                        return e;
                      };
                return h.selector(e), e(n.current);
              },
              function (e) {
                !(function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return function (e) {
                    return t.reduceRight(function (e, t) {
                      return t(e);
                    }, e);
                  };
                })(
                  r,
                  o,
                  i,
                  c,
                )(e);
              },
            ];
          },
        },
        w = b,
        O = {
          paths: {
            vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs',
          },
        };
      var j = function (e) {
        return function t() {
          for (
            var n = this, r = arguments.length, o = new Array(r), i = 0;
            i < r;
            i++
          )
            o[i] = arguments[i];
          return o.length >= e.length
            ? e.apply(this, o)
            : function () {
                for (
                  var e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                return t.apply(n, [].concat(o, r));
              };
        };
      };
      var x = function (e) {
        return {}.toString.call(e).includes('Object');
      };
      var M = {
          configIsRequired: 'the configuration object is required',
          configType: 'the configuration object should be an object',
          default:
            'an unknown error accured in `@monaco-editor/loader` package',
          deprecation:
            "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  ",
        },
        E = j(function (e, t) {
          throw new Error(e[t] || e.default);
        })(M),
        S = {
          config: function (e) {
            return (
              e || E('configIsRequired'),
              x(e) || E('configType'),
              e.urls
                ? (console.warn(M.deprecation),
                  { paths: { vs: e.urls.monacoBase } })
                : e
            );
          },
        },
        k = S,
        R = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function (e) {
            return t.reduceRight(function (e, t) {
              return t(e);
            }, e);
          };
        };
      var C = function e(t, n) {
          return (
            Object.keys(n).forEach(function (r) {
              n[r] instanceof Object &&
                t[r] &&
                Object.assign(n[r], e(t[r], n[r]));
            }),
            i(i({}, t), n)
          );
        },
        P = { type: 'cancelation', msg: 'operation is manually canceled' };
      var Z,
        T,
        I = function (e) {
          var t = !1,
            n = new Promise(function (n, r) {
              e.then(function (e) {
                return t ? r(P) : n(e);
              }),
                e.catch(r);
            });
          return (
            (n.cancel = function () {
              return (t = !0);
            }),
            n
          );
        },
        $ = w.create({
          config: O,
          isInitialized: !1,
          resolve: null,
          reject: null,
          monaco: null,
        }),
        N =
          ((T = 2),
          (function (e) {
            if (Array.isArray(e)) return e;
          })((Z = $)) ||
            (function (e, t) {
              if (
                'undefined' != typeof Symbol &&
                Symbol.iterator in Object(e)
              ) {
                var n = [],
                  r = !0,
                  o = !1,
                  i = void 0;
                try {
                  for (
                    var c, u = e[Symbol.iterator]();
                    !(r = (c = u.next()).done) &&
                    (n.push(c.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  (o = !0), (i = e);
                } finally {
                  try {
                    r || null == u.return || u.return();
                  } finally {
                    if (o) throw i;
                  }
                }
                return n;
              }
            })(Z, T) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? u(e, t)
                      : void 0
                );
              }
            })(Z, T) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            })()),
        A = N[0],
        D = N[1];
      function L(e) {
        return document.body.appendChild(e);
      }
      function V(e) {
        var t,
          n,
          r = A(function (e) {
            return { config: e.config, reject: e.reject };
          }),
          o =
            ((t = ''.concat(r.config.paths.vs, '/loader.js')),
            (n = document.createElement('script')),
            t && (n.src = t),
            n);
        return (
          (o.onload = function () {
            return e();
          }),
          (o.onerror = r.reject),
          o
        );
      }
      function U() {
        var e = A(function (e) {
            return { config: e.config, resolve: e.resolve, reject: e.reject };
          }),
          t = window.require;
        t.config(e.config),
          t(
            ['vs/editor/editor.main'],
            function (t) {
              z(t), e.resolve(t);
            },
            function (t) {
              e.reject(t);
            },
          );
      }
      function z(e) {
        A().monaco || D({ monaco: e });
      }
      var q = new Promise(function (e, t) {
          return D({ resolve: e, reject: t });
        }),
        G = {
          config: function (e) {
            var t = k.config(e),
              n = t.monaco,
              r = c(t, ['monaco']);
            D(function (e) {
              return { config: C(e.config, r), monaco: n };
            });
          },
          init: function () {
            var e = A(function (e) {
              return {
                monaco: e.monaco,
                isInitialized: e.isInitialized,
                resolve: e.resolve,
              };
            });
            if (!e.isInitialized) {
              if ((D({ isInitialized: !0 }), e.monaco))
                return e.resolve(e.monaco), I(q);
              if (window.monaco && window.monaco.editor)
                return z(window.monaco), e.resolve(window.monaco), I(q);
              R(L, V)(U);
            }
            return I(q);
          },
          __getMonacoInstance: function () {
            return A(function (e) {
              return e.monaco;
            });
          },
        },
        F = G,
        _ = n(62435),
        W = {
          wrapper: {
            display: 'flex',
            position: 'relative',
            textAlign: 'initial',
          },
          fullWidth: { width: '100%' },
          hide: { display: 'none' },
        },
        B = {
          container: {
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          },
        };
      var H = function ({ children: e }) {
        return _.createElement('div', { style: B.container }, e);
      };
      var Y = function ({
          width: e,
          height: t,
          isEditorReady: n,
          loading: r,
          _ref: o,
          className: i,
          wrapperProps: c,
        }) {
          return _.createElement(
            'section',
            { style: { ...W.wrapper, width: e, height: t }, ...c },
            !n && _.createElement(H, null, r),
            _.createElement('div', {
              ref: o,
              style: { ...W.fullWidth, ...(!n && W.hide) },
              className: i,
            }),
          );
        },
        X = (0, _.memo)(Y);
      var J = function (e) {
        (0, _.useEffect)(e, []);
      };
      var K = function (e, t, n = !0) {
        let r = (0, _.useRef)(!0);
        (0, _.useEffect)(
          r.current || !n
            ? () => {
                r.current = !1;
              }
            : e,
          t,
        );
      };
      function Q() {}
      function ee(e, t, n, r) {
        return (
          (function (e, t) {
            return e.editor.getModel(te(e, t));
          })(e, r) ||
          (function (e, t, n, r) {
            return e.editor.createModel(t, n, r ? te(e, r) : void 0);
          })(e, t, n, r)
        );
      }
      function te(e, t) {
        return e.Uri.parse(t);
      }
      var ne = function ({
        original: e,
        modified: t,
        language: n,
        originalLanguage: r,
        modifiedLanguage: o,
        originalModelPath: i,
        modifiedModelPath: c,
        keepCurrentOriginalModel: u = !1,
        keepCurrentModifiedModel: a = !1,
        theme: l = 'light',
        loading: s = 'Loading...',
        options: f = {},
        height: d = '100%',
        width: p = '100%',
        className: g,
        wrapperProps: h = {},
        beforeMount: v = Q,
        onMount: y = Q,
      }) {
        let [m, b] = (0, _.useState)(!1),
          [w, O] = (0, _.useState)(!0),
          j = (0, _.useRef)(null),
          x = (0, _.useRef)(null),
          M = (0, _.useRef)(null),
          E = (0, _.useRef)(y),
          S = (0, _.useRef)(v),
          k = (0, _.useRef)(!1);
        J(() => {
          let e = F.init();
          return (
            e
              .then((e) => (x.current = e) && O(!1))
              .catch(
                (e) =>
                  'cancelation' !== e?.type &&
                  console.error('Monaco initialization: error:', e),
              ),
            () =>
              j.current
                ? (function () {
                    let e = j.current?.getModel();
                    u || e?.original?.dispose(),
                      a || e?.modified?.dispose(),
                      j.current?.dispose();
                  })()
                : e.cancel()
          );
        }),
          K(
            () => {
              if (j.current && x.current) {
                let t = j.current.getOriginalEditor(),
                  o = ee(x.current, e || '', r || n || 'text', i || '');
                o !== t.getModel() && t.setModel(o);
              }
            },
            [i],
            m,
          ),
          K(
            () => {
              if (j.current && x.current) {
                let e = j.current.getModifiedEditor(),
                  r = ee(x.current, t || '', o || n || 'text', c || '');
                r !== e.getModel() && e.setModel(r);
              }
            },
            [c],
            m,
          ),
          K(
            () => {
              let e = j.current.getModifiedEditor();
              e.getOption(x.current.editor.EditorOption.readOnly)
                ? e.setValue(t || '')
                : t !== e.getValue() &&
                  (e.executeEdits('', [
                    {
                      range: e.getModel().getFullModelRange(),
                      text: t || '',
                      forceMoveMarkers: !0,
                    },
                  ]),
                  e.pushUndoStop());
            },
            [t],
            m,
          ),
          K(
            () => {
              j.current?.getModel()?.original.setValue(e || '');
            },
            [e],
            m,
          ),
          K(
            () => {
              let { original: e, modified: t } = j.current.getModel();
              x.current.editor.setModelLanguage(e, r || n || 'text'),
                x.current.editor.setModelLanguage(t, o || n || 'text');
            },
            [n, r, o],
            m,
          ),
          K(
            () => {
              x.current?.editor.setTheme(l);
            },
            [l],
            m,
          ),
          K(
            () => {
              j.current?.updateOptions(f);
            },
            [f],
            m,
          );
        let R = (0, _.useCallback)(() => {
            if (!x.current) return;
            S.current(x.current);
            let u = ee(x.current, e || '', r || n || 'text', i || ''),
              a = ee(x.current, t || '', o || n || 'text', c || '');
            j.current?.setModel({ original: u, modified: a });
          }, [n, t, o, e, r, i, c]),
          C = (0, _.useCallback)(() => {
            !k.current &&
              M.current &&
              ((j.current = x.current.editor.createDiffEditor(M.current, {
                automaticLayout: !0,
                ...f,
              })),
              R(),
              x.current?.editor.setTheme(l),
              b(!0),
              (k.current = !0));
          }, [f, l, R]);
        return (
          (0, _.useEffect)(() => {
            m && E.current(j.current, x.current);
          }, [m]),
          (0, _.useEffect)(() => {
            !w && !m && C();
          }, [w, m, C]),
          _.createElement(X, {
            width: p,
            height: d,
            isEditorReady: m,
            loading: s,
            _ref: M,
            className: g,
            wrapperProps: h,
          })
        );
      };
      (0, _.memo)(ne);
      var re = function (e) {
          let t = (0, _.useRef)();
          return (
            (0, _.useEffect)(() => {
              t.current = e;
            }, [e]),
            t.current
          );
        },
        oe = new Map();
      var ie = function ({
          defaultValue: e,
          defaultLanguage: t,
          defaultPath: n,
          value: r,
          language: o,
          path: i,
          theme: c = 'light',
          line: u,
          loading: a = 'Loading...',
          options: l = {},
          overrideServices: s = {},
          saveViewState: f = !0,
          keepCurrentModel: d = !1,
          width: p = '100%',
          height: g = '100%',
          className: h,
          wrapperProps: v = {},
          beforeMount: y = Q,
          onMount: m = Q,
          onChange: b,
          onValidate: w = Q,
        }) {
          let [O, j] = (0, _.useState)(!1),
            [x, M] = (0, _.useState)(!0),
            E = (0, _.useRef)(null),
            S = (0, _.useRef)(null),
            k = (0, _.useRef)(null),
            R = (0, _.useRef)(m),
            C = (0, _.useRef)(y),
            P = (0, _.useRef)(),
            Z = (0, _.useRef)(r),
            T = re(i),
            I = (0, _.useRef)(!1),
            $ = (0, _.useRef)(!1);
          J(() => {
            let e = F.init();
            return (
              e
                .then((e) => (E.current = e) && M(!1))
                .catch(
                  (e) =>
                    'cancelation' !== e?.type &&
                    console.error('Monaco initialization: error:', e),
                ),
              () =>
                S.current
                  ? (P.current?.dispose(),
                    d
                      ? f && oe.set(i, S.current.saveViewState())
                      : S.current.getModel()?.dispose(),
                    void S.current.dispose())
                  : e.cancel()
            );
          }),
            K(
              () => {
                let c = ee(E.current, e || r || '', t || o || '', i || n || '');
                c !== S.current?.getModel() &&
                  (f && oe.set(T, S.current?.saveViewState()),
                  S.current?.setModel(c),
                  f && S.current?.restoreViewState(oe.get(i)));
              },
              [i],
              O,
            ),
            K(
              () => {
                S.current?.updateOptions(l);
              },
              [l],
              O,
            ),
            K(
              () => {
                !S.current ||
                  void 0 === r ||
                  (S.current.getOption(E.current.editor.EditorOption.readOnly)
                    ? S.current.setValue(r)
                    : r !== S.current.getValue() &&
                      (($.current = !0),
                      S.current.executeEdits('', [
                        {
                          range: S.current.getModel().getFullModelRange(),
                          text: r,
                          forceMoveMarkers: !0,
                        },
                      ]),
                      S.current.pushUndoStop(),
                      ($.current = !1)));
              },
              [r],
              O,
            ),
            K(
              () => {
                let e = S.current?.getModel();
                e && o && E.current?.editor.setModelLanguage(e, o);
              },
              [o],
              O,
            ),
            K(
              () => {
                void 0 !== u && S.current?.revealLine(u);
              },
              [u],
              O,
            ),
            K(
              () => {
                E.current?.editor.setTheme(c);
              },
              [c],
              O,
            );
          let N = (0, _.useCallback)(() => {
            if (k.current && E.current && !I.current) {
              C.current(E.current);
              let a = i || n,
                d = ee(E.current, r || e || '', t || o || '', a || '');
              (S.current = E.current?.editor.create(
                k.current,
                { model: d, automaticLayout: !0, ...l },
                s,
              )),
                f && S.current.restoreViewState(oe.get(a)),
                E.current.editor.setTheme(c),
                void 0 !== u && S.current.revealLine(u),
                j(!0),
                (I.current = !0);
            }
          }, [e, t, n, r, o, i, l, s, f, c, u]);
          return (
            (0, _.useEffect)(() => {
              O && R.current(S.current, E.current);
            }, [O]),
            (0, _.useEffect)(() => {
              !x && !O && N();
            }, [x, O, N]),
            (Z.current = r),
            (0, _.useEffect)(() => {
              O &&
                b &&
                (P.current?.dispose(),
                (P.current = S.current?.onDidChangeModelContent((e) => {
                  $.current || b(S.current.getValue(), e);
                })));
            }, [O, b]),
            (0, _.useEffect)(() => {
              if (O) {
                let e = E.current.editor.onDidChangeMarkers((e) => {
                  let t = S.current.getModel()?.uri;
                  if (t && e.find((e) => e.path === t.path)) {
                    let e = E.current.editor.getModelMarkers({ resource: t });
                    w?.(e);
                  }
                });
                return () => {
                  e?.dispose();
                };
              }
              return () => {};
            }, [O, w]),
            _.createElement(X, {
              width: p,
              height: g,
              isEditorReady: O,
              loading: a,
              _ref: k,
              className: h,
              wrapperProps: v,
            })
          );
        },
        ce = (0, _.memo)(ie);
    },
    24809: function (e, t, n) {
      'use strict';
      n.d(t, {
        m: function () {
          return o;
        },
      });
      const r = [239, 187, 191];
      class o extends TransformStream {
        constructor() {
          let e;
          super({
            start(t) {
              e = (function (e) {
                let t, n, o, i, c, u, a;
                return (
                  l(),
                  {
                    feed: function (e) {
                      (n = n ? n + e : e),
                        t &&
                          (function (e) {
                            return r.every((t, n) => e.charCodeAt(n) === t);
                          })(n) &&
                          (n = n.slice(r.length)),
                        (t = !1);
                      const c = n.length;
                      let u = 0,
                        a = !1;
                      for (; u < c; ) {
                        a && ('\n' === n[u] && ++u, (a = !1));
                        let e,
                          t = -1,
                          r = i;
                        for (let i = o; t < 0 && i < c; ++i)
                          (e = n[i]),
                            ':' === e && r < 0
                              ? (r = i - u)
                              : '\r' === e
                                ? ((a = !0), (t = i - u))
                                : '\n' === e && (t = i - u);
                        if (t < 0) {
                          (o = c - u), (i = r);
                          break;
                        }
                        (o = 0), (i = -1), s(n, u, r, t), (u += t + 1);
                      }
                      u === c ? (n = '') : u > 0 && (n = n.slice(u));
                    },
                    reset: l,
                  }
                );
                function l() {
                  (t = !0),
                    (n = ''),
                    (o = 0),
                    (i = -1),
                    (c = void 0),
                    (u = void 0),
                    (a = '');
                }
                function s(t, n, r, o) {
                  if (0 === o)
                    return (
                      a.length > 0 &&
                        (e({
                          type: 'event',
                          id: c,
                          event: u || void 0,
                          data: a.slice(0, -1),
                        }),
                        (a = ''),
                        (c = void 0)),
                      void (u = void 0)
                    );
                  const i = r < 0,
                    l = t.slice(n, n + (i ? o : r));
                  let s = 0;
                  s = i ? o : ' ' === t[n + r + 1] ? r + 2 : r + 1;
                  const f = n + s,
                    d = o - s,
                    p = t.slice(f, f + d).toString();
                  if ('data' === l) a += p ? ''.concat(p, '\n') : '\n';
                  else if ('event' === l) u = p;
                  else if ('id' !== l || p.includes('\0')) {
                    if ('retry' === l) {
                      const t = parseInt(p, 10);
                      Number.isNaN(t) ||
                        e({ type: 'reconnect-interval', value: t });
                    }
                  } else c = p;
                }
              })((e) => {
                'event' === e.type && t.enqueue(e);
              });
            },
            transform(t) {
              e.feed(t);
            },
          });
        }
      }
    },
  },
]);
//# sourceMappingURL=1761.cade9fff.async.js.map
