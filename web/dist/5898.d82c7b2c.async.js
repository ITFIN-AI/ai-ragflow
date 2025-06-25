/*! For license information please see 5898.d82c7b2c.async.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [5898],
  {
    58580: function (e, t, n) {
      'use strict';
      var r = n(97582),
        o = n(62435),
        i = n(85980);
      t.Z = function (e, t) {
        var n = (0, r.CR)((0, o.useState)(e), 2),
          u = n[0],
          c = n[1],
          a = (0, i.Z)(function () {
            c(e);
          }, t).run;
        return (
          (0, o.useEffect)(
            function () {
              a();
            },
            [e],
          ),
          u
        );
      };
    },
    85980: function (e, t, n) {
      'use strict';
      var r = n(97582),
        o = n(23279),
        i = n.n(o),
        u = n(62435),
        c = n(3930),
        a = n(45210),
        s = n(92770),
        f = n(31663);
      t.Z = function (e, t) {
        var n;
        f.Z &&
          ((0, s.mf)(e) ||
            console.error(
              'useDebounceFn expected parameter is a function, got '.concat(
                typeof e,
              ),
            ));
        var o = (0, c.Z)(e),
          l =
            null !== (n = null == t ? void 0 : t.wait) && void 0 !== n
              ? n
              : 1e3,
          d = (0, u.useMemo)(function () {
            return i()(
              function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                return o.current.apply(o, (0, r.ev)([], (0, r.CR)(e), !1));
              },
              l,
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
        u = n(31663);
      t.Z = function (e) {
        u.Z &&
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
    44286: function (e) {
      e.exports = function (e) {
        return e.split('');
      };
    },
    41848: function (e) {
      e.exports = function (e, t, n, r) {
        for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (t(e[i], i, e)) return i;
        return -1;
      };
    },
    42118: function (e, t, n) {
      var r = n(41848),
        o = n(62722),
        i = n(39375);
      e.exports = function (e, t, n) {
        return t == t ? i(e, t, n) : r(e, o, n);
      };
    },
    62722: function (e) {
      e.exports = function (e) {
        return e != e;
      };
    },
    27561: function (e, t, n) {
      var r = n(67990),
        o = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, r(e) + 1).replace(o, '') : e;
      };
    },
    40180: function (e, t, n) {
      var r = n(14259);
      e.exports = function (e, t, n) {
        var o = e.length;
        return (n = void 0 === n ? o : n), !t && n >= o ? e : r(e, t, n);
      };
    },
    5512: function (e, t, n) {
      var r = n(42118);
      e.exports = function (e, t) {
        for (var n = e.length; n-- && r(t, e[n], 0) > -1; );
        return n;
      };
    },
    89817: function (e, t, n) {
      var r = n(42118);
      e.exports = function (e, t) {
        for (var n = -1, o = e.length; ++n < o && r(t, e[n], 0) > -1; );
        return n;
      };
    },
    98805: function (e, t, n) {
      var r = n(40180),
        o = n(62689),
        i = n(83140),
        u = n(79833);
      e.exports = function (e) {
        return function (t) {
          t = u(t);
          var n = o(t) ? i(t) : void 0,
            c = n ? n[0] : t.charAt(0),
            a = n ? r(n, 1).join('') : t.slice(1);
          return c[e]() + a;
        };
      };
    },
    62689: function (e) {
      var t = RegExp(
        '[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]',
      );
      e.exports = function (e) {
        return t.test(e);
      };
    },
    39375: function (e) {
      e.exports = function (e, t, n) {
        for (var r = n - 1, o = e.length; ++r < o; ) if (e[r] === t) return r;
        return -1;
      };
    },
    83140: function (e, t, n) {
      var r = n(44286),
        o = n(62689),
        i = n(676);
      e.exports = function (e) {
        return o(e) ? i(e) : r(e);
      };
    },
    67990: function (e) {
      var t = /\s/;
      e.exports = function (e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)); );
        return n;
      };
    },
    676: function (e) {
      var t = '\\ud800-\\udfff',
        n = '[' + t + ']',
        r = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
        o = '\\ud83c[\\udffb-\\udfff]',
        i = '[^' + t + ']',
        u = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        c = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        a = '(?:' + r + '|' + o + ')' + '?',
        s = '[\\ufe0e\\ufe0f]?',
        f =
          s + a + ('(?:\\u200d(?:' + [i, u, c].join('|') + ')' + s + a + ')*'),
        l = '(?:' + [i + r + '?', r, u, c, n].join('|') + ')',
        d = RegExp(o + '(?=' + o + ')|' + l + f, 'g');
      e.exports = function (e) {
        return e.match(d) || [];
      };
    },
    23279: function (e, t, n) {
      var r = n(13218),
        o = n(7771),
        i = n(14841),
        u = Math.max,
        c = Math.min;
      e.exports = function (e, t, n) {
        var a,
          s,
          f,
          l,
          d,
          p,
          v = 0,
          h = !1,
          y = !1,
          m = !0;
        if ('function' != typeof e) throw new TypeError('Expected a function');
        function g(t) {
          var n = a,
            r = s;
          return (a = s = void 0), (v = t), (l = e.apply(r, n));
        }
        function x(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || (y && e - v >= f);
        }
        function k() {
          var e = o();
          if (x(e)) return b(e);
          d = setTimeout(
            k,
            (function (e) {
              var n = t - (e - p);
              return y ? c(n, f - (e - v)) : n;
            })(e),
          );
        }
        function b(e) {
          return (d = void 0), m && a ? g(e) : ((a = s = void 0), l);
        }
        function w() {
          var e = o(),
            n = x(e);
          if (((a = arguments), (s = this), (p = e), n)) {
            if (void 0 === d)
              return (function (e) {
                return (v = e), (d = setTimeout(k, t)), h ? g(e) : l;
              })(p);
            if (y) return clearTimeout(d), (d = setTimeout(k, t)), g(p);
          }
          return void 0 === d && (d = setTimeout(k, t)), l;
        }
        return (
          (t = i(t) || 0),
          r(n) &&
            ((h = !!n.leading),
            (f = (y = 'maxWait' in n) ? u(i(n.maxWait) || 0, t) : f),
            (m = 'trailing' in n ? !!n.trailing : m)),
          (w.cancel = function () {
            void 0 !== d && clearTimeout(d), (v = 0), (a = p = s = d = void 0);
          }),
          (w.flush = function () {
            return void 0 === d ? l : b(o());
          }),
          w
        );
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
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        a = /^0o[0-7]+$/i,
        s = parseInt;
      e.exports = function (e) {
        if ('number' == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + '' : t;
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = c.test(e);
        return n || a.test(e) ? s(e.slice(2), n ? 2 : 8) : u.test(e) ? NaN : +e;
      };
    },
    92742: function (e, t, n) {
      var r = n(80531),
        o = n(27561),
        i = n(40180),
        u = n(5512),
        c = n(89817),
        a = n(83140),
        s = n(79833);
      e.exports = function (e, t, n) {
        if ((e = s(e)) && (n || void 0 === t)) return o(e);
        if (!e || !(t = r(t))) return e;
        var f = a(e),
          l = a(t),
          d = c(f, l),
          p = u(f, l) + 1;
        return i(f, d, p).join('');
      };
    },
    11700: function (e, t, n) {
      var r = n(98805)('toUpperCase');
      e.exports = r;
    },
    98814: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('chevron-left', [
        ['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }],
      ]);
    },
    87756: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('cloud-upload', [
        ['path', { d: 'M12 13v8', key: '1l5pq0' }],
        [
          'path',
          {
            d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242',
            key: '1pljnt',
          },
        ],
        ['path', { d: 'm8 17 4-4 4 4', key: '1quai1' }],
      ]);
    },
    9404: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('ellipsis', [
        ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
        ['circle', { cx: '19', cy: '12', r: '1', key: '1wjl8i' }],
        ['circle', { cx: '5', cy: '12', r: '1', key: '1pcz8c' }],
      ]);
    },
    84031: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('list-ordered', [
        ['path', { d: 'M10 12h11', key: '6m4ad9' }],
        ['path', { d: 'M10 18h11', key: '11hvi2' }],
        ['path', { d: 'M10 6h11', key: 'c7qv1k' }],
        ['path', { d: 'M4 10h2', key: '16xx2s' }],
        ['path', { d: 'M4 6h1v4', key: 'cnovpq' }],
        ['path', { d: 'M6 18H4c0-1 2-2 2-3s-1-1.5-2-1', key: 'm9a95d' }],
      ]);
    },
    77325: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('option', [
        ['path', { d: 'M3 3h6l6 18h6', key: 'ph9rgk' }],
        ['path', { d: 'M14 3h7', key: '16f0ms' }],
      ]);
    },
    25169: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('pen-line', [
        ['path', { d: 'M12 20h9', key: 't2du7b' }],
        [
          'path',
          {
            d: 'M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z',
            key: '1ykcvy',
          },
        ],
      ]);
    },
    57498: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('text-cursor-input', [
        [
          'path',
          { d: 'M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6', key: '1528k5' },
        ],
        [
          'path',
          { d: 'M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7', key: '13ksps' },
        ],
        [
          'path',
          { d: 'M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1', key: '1n9rhb' },
        ],
        ['path', { d: 'M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1', key: '1mj8rg' }],
        ['path', { d: 'M9 6v12', key: 'velyjx' }],
      ]);
    },
    13318: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('toggle-left', [
        ['circle', { cx: '9', cy: '12', r: '3', key: 'u3jwor' }],
        [
          'rect',
          { width: '20', height: '14', x: '2', y: '5', rx: '7', key: 'g7kal2' },
        ],
      ]);
    },
    13718: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('trash-2', [
        ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
        ['path', { d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6', key: '4alrt4' }],
        ['path', { d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', key: 'v07s0e' }],
        ['line', { x1: '10', x2: '10', y1: '11', y2: '17', key: '1uufr5' }],
        ['line', { x1: '14', x2: '14', y1: '11', y2: '17', key: 'xtxkd' }],
      ]);
    },
    96749: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('wrap-text', [
        ['line', { x1: '3', x2: '21', y1: '6', y2: '6', key: '4m8b97' }],
        ['path', { d: 'M3 12h15a3 3 0 1 1 0 6h-4', key: '1cl7v7' }],
        ['polyline', { points: '16 16 14 18 16 20', key: '1jznyi' }],
        ['line', { x1: '3', x2: '10', y1: '18', y2: '18', key: '1h33wv' }],
      ]);
    },
    57632: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return s;
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
      function u() {
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
      const c = [];
      for (let e = 0; e < 256; ++e) c.push((e + 256).toString(16).slice(1));
      function a(e, t = 0) {
        return (
          c[e[t + 0]] +
          c[e[t + 1]] +
          c[e[t + 2]] +
          c[e[t + 3]] +
          '-' +
          c[e[t + 4]] +
          c[e[t + 5]] +
          '-' +
          c[e[t + 6]] +
          c[e[t + 7]] +
          '-' +
          c[e[t + 8]] +
          c[e[t + 9]] +
          '-' +
          c[e[t + 10]] +
          c[e[t + 11]] +
          c[e[t + 12]] +
          c[e[t + 13]] +
          c[e[t + 14]] +
          c[e[t + 15]]
        );
      }
      var s = function (e, t, n) {
        if (r.randomUUID && !t && !e) return r.randomUUID();
        const o = (e = e || {}).random || (e.rng || u)();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = o[e];
          return t;
        }
        return a(o);
      };
    },
    56312: function (e, t, n) {
      'use strict';
      n.d(t, {
        F: function () {
          return s;
        },
      });
      var r = n(87536);
      const o = (e, t, n) => {
          if (e && 'reportValidity' in e) {
            const o = (0, r.U2)(n, t);
            e.setCustomValidity((o && o.message) || ''), e.reportValidity();
          }
        },
        i = (e, t) => {
          for (const n in t.fields) {
            const r = t.fields[n];
            r && r.ref && 'reportValidity' in r.ref
              ? o(r.ref, n, e)
              : r.refs && r.refs.forEach((t) => o(t, n, e));
          }
        },
        u = (e, t) => {
          t.shouldUseNativeValidation && i(e, t);
          const n = {};
          for (const o in e) {
            const i = (0, r.U2)(t.fields, o),
              u = Object.assign(e[o] || {}, { ref: i && i.ref });
            if (c(t.names || Object.keys(e), o)) {
              const e = Object.assign({}, (0, r.U2)(n, o));
              (0, r.t8)(e, 'root', u), (0, r.t8)(n, o, e);
            } else (0, r.t8)(n, o, u);
          }
          return n;
        },
        c = (e, t) => e.some((e) => e.startsWith(t + '.'));
      var a = function (e, t) {
          for (var n = {}; e.length; ) {
            var o = e[0],
              i = o.code,
              u = o.message,
              c = o.path.join('.');
            if (!n[c])
              if ('unionErrors' in o) {
                var a = o.unionErrors[0].errors[0];
                n[c] = { message: a.message, type: a.code };
              } else n[c] = { message: u, type: i };
            if (
              ('unionErrors' in o &&
                o.unionErrors.forEach(function (t) {
                  return t.errors.forEach(function (t) {
                    return e.push(t);
                  });
                }),
              t)
            ) {
              var s = n[c].types,
                f = s && s[o.code];
              n[c] = (0, r.KN)(
                c,
                t,
                n,
                i,
                f ? [].concat(f, o.message) : o.message,
              );
            }
            e.shift();
          }
          return n;
        },
        s = function (e, t, n) {
          return (
            void 0 === n && (n = {}),
            function (r, o, c) {
              try {
                return Promise.resolve(
                  (function (o, u) {
                    try {
                      var a = Promise.resolve(
                        e['sync' === n.mode ? 'parse' : 'parseAsync'](r, t),
                      ).then(function (e) {
                        return (
                          c.shouldUseNativeValidation && i({}, c),
                          { errors: {}, values: n.raw ? r : e }
                        );
                      });
                    } catch (e) {
                      return u(e);
                    }
                    return a && a.then ? a.then(void 0, u) : a;
                  })(0, function (e) {
                    if (
                      (function (e) {
                        return Array.isArray(null == e ? void 0 : e.errors);
                      })(e)
                    )
                      return {
                        values: {},
                        errors: u(
                          a(
                            e.errors,
                            !c.shouldUseNativeValidation &&
                              'all' === c.criteriaMode,
                          ),
                          c,
                        ),
                      };
                    throw e;
                  }),
                );
              } catch (e) {
                return Promise.reject(e);
              }
            }
          );
        };
    },
    67007: function (e, t, n) {
      'use strict';
      n.d(t, {
        aU: function () {
          return q;
        },
        $j: function () {
          return L;
        },
        VY: function () {
          return W;
        },
        dk: function () {
          return F;
        },
        aV: function () {
          return T;
        },
        h_: function () {
          return P;
        },
        fC: function () {
          return I;
        },
        Dx: function () {
          return $;
        },
        xz: function () {
          return O;
        },
      });
      var r = n(62435),
        o = n(25360);
      function i(e, t) {
        if ('function' == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function u(...e) {
        return (t) => {
          let n = !1;
          const r = e.map((e) => {
            const r = i(e, t);
            return n || 'function' != typeof r || (n = !0), r;
          });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                const n = r[t];
                'function' == typeof n ? n() : i(e[t], null);
              }
            };
        };
      }
      function c(...e) {
        return r.useCallback(u(...e), e);
      }
      var a = n(28828);
      function s(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      var f = n(86074),
        l = r.forwardRef((e, t) => {
          const { children: n, ...o } = e,
            i = r.Children.toArray(n),
            u = i.find(v);
          if (u) {
            const e = u.props.children,
              n = i.map((t) =>
                t === u
                  ? r.Children.count(e) > 1
                    ? r.Children.only(null)
                    : r.isValidElement(e)
                      ? e.props.children
                      : null
                  : t,
              );
            return (0, f.jsx)(d, {
              ...o,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, f.jsx)(d, { ...o, ref: t, children: n });
        });
      l.displayName = 'Slot';
      var d = r.forwardRef((e, t) => {
        const { children: n, ...o } = e;
        if (r.isValidElement(n)) {
          const e = (function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
              n = t && 'isReactWarning' in t && t.isReactWarning;
            if (n) return e.ref;
            if (
              ((t = Object.getOwnPropertyDescriptor(e, 'ref')?.get),
              (n = t && 'isReactWarning' in t && t.isReactWarning),
              n)
            )
              return e.props.ref;
            return e.props.ref || e.ref;
          })(n);
          return r.cloneElement(n, { ...h(o, n.props), ref: t ? u(t, e) : e });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      d.displayName = 'SlotClone';
      var p = ({ children: e }) => (0, f.jsx)(f.Fragment, { children: e });
      function v(e) {
        return r.isValidElement(e) && e.type === p;
      }
      function h(e, t) {
        const n = { ...t };
        for (const r in t) {
          const o = e[r],
            i = t[r];
          /^on[A-Z]/.test(r)
            ? o && i
              ? (n[r] = (...e) => {
                  i(...e), o(...e);
                })
              : o && (n[r] = o)
            : 'style' === r
              ? (n[r] = { ...o, ...i })
              : 'className' === r && (n[r] = [o, i].filter(Boolean).join(' '));
        }
        return { ...e, ...n };
      }
      var y = 'AlertDialog',
        [m, g] = (0, o.b)(y, [a.p8]),
        x = (0, a.p8)(),
        k = (e) => {
          const { __scopeAlertDialog: t, ...n } = e,
            r = x(t);
          return (0, f.jsx)(a.fC, { ...r, ...n, modal: !0 });
        };
      k.displayName = y;
      var b = r.forwardRef((e, t) => {
        const { __scopeAlertDialog: n, ...r } = e,
          o = x(n);
        return (0, f.jsx)(a.xz, { ...o, ...r, ref: t });
      });
      b.displayName = 'AlertDialogTrigger';
      var w = (e) => {
        const { __scopeAlertDialog: t, ...n } = e,
          r = x(t);
        return (0, f.jsx)(a.h_, { ...r, ...n });
      };
      w.displayName = 'AlertDialogPortal';
      var j = r.forwardRef((e, t) => {
        const { __scopeAlertDialog: n, ...r } = e,
          o = x(n);
        return (0, f.jsx)(a.aV, { ...o, ...r, ref: t });
      });
      j.displayName = 'AlertDialogOverlay';
      var D = 'AlertDialogContent',
        [A, C] = m(D),
        R = r.forwardRef((e, t) => {
          const { __scopeAlertDialog: n, children: o, ...i } = e,
            u = x(n),
            l = r.useRef(null),
            d = c(t, l),
            v = r.useRef(null);
          return (0, f.jsx)(a.jm, {
            contentName: D,
            titleName: E,
            docsSlug: 'alert-dialog',
            children: (0, f.jsx)(A, {
              scope: n,
              cancelRef: v,
              children: (0, f.jsxs)(a.VY, {
                role: 'alertdialog',
                ...u,
                ...i,
                ref: d,
                onOpenAutoFocus: s(i.onOpenAutoFocus, (e) => {
                  e.preventDefault(), v.current?.focus({ preventScroll: !0 });
                }),
                onPointerDownOutside: (e) => e.preventDefault(),
                onInteractOutside: (e) => e.preventDefault(),
                children: [
                  (0, f.jsx)(p, { children: o }),
                  (0, f.jsx)(S, { contentRef: l }),
                ],
              }),
            }),
          });
        });
      R.displayName = D;
      var E = 'AlertDialogTitle',
        Z = r.forwardRef((e, t) => {
          const { __scopeAlertDialog: n, ...r } = e,
            o = x(n);
          return (0, f.jsx)(a.Dx, { ...o, ...r, ref: t });
        });
      Z.displayName = E;
      var N = 'AlertDialogDescription',
        M = r.forwardRef((e, t) => {
          const { __scopeAlertDialog: n, ...r } = e,
            o = x(n);
          return (0, f.jsx)(a.dk, { ...o, ...r, ref: t });
        });
      M.displayName = N;
      var _ = r.forwardRef((e, t) => {
        const { __scopeAlertDialog: n, ...r } = e,
          o = x(n);
        return (0, f.jsx)(a.x8, { ...o, ...r, ref: t });
      });
      _.displayName = 'AlertDialogAction';
      var V = 'AlertDialogCancel',
        U = r.forwardRef((e, t) => {
          const { __scopeAlertDialog: n, ...r } = e,
            { cancelRef: o } = C(V, n),
            i = x(n),
            u = c(t, o);
          return (0, f.jsx)(a.x8, { ...i, ...r, ref: u });
        });
      U.displayName = V;
      var S = ({ contentRef: e }) => {
          const t = `\`${D}\` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the \`${D}\` by passing a \`${N}\` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${D}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
          return (
            r.useEffect(() => {
              document.getElementById(
                e.current?.getAttribute('aria-describedby'),
              ) || console.warn(t);
            }, [t, e]),
            null
          );
        },
        I = k,
        O = b,
        P = w,
        T = j,
        W = R,
        q = _,
        L = U,
        $ = Z,
        F = M;
    },
    10952: function (e, t, n) {
      'use strict';
      n.d(t, {
        Ee: function () {
          return k;
        },
        NY: function () {
          return b;
        },
        fC: function () {
          return x;
        },
      });
      var r = n(62435),
        o = n(25360),
        i = n(79698),
        u = n(9981),
        c = n(75320),
        a = n(86074),
        s = 'Avatar',
        [f, l] = (0, o.b)(s),
        [d, p] = f(s),
        v = r.forwardRef((e, t) => {
          const { __scopeAvatar: n, ...o } = e,
            [i, u] = r.useState('idle');
          return (0, a.jsx)(d, {
            scope: n,
            imageLoadingStatus: i,
            onImageLoadingStatusChange: u,
            children: (0, a.jsx)(c.WV.span, { ...o, ref: t }),
          });
        });
      v.displayName = s;
      var h = 'AvatarImage',
        y = r.forwardRef((e, t) => {
          const {
              __scopeAvatar: n,
              src: o,
              onLoadingStatusChange: s = () => {},
              ...f
            } = e,
            l = p(h, n),
            d = (function (e, t) {
              const [n, o] = r.useState('idle');
              return (
                (0, u.b)(() => {
                  if (!e) return void o('error');
                  let n = !0;
                  const r = new window.Image(),
                    i = (e) => () => {
                      n && o(e);
                    };
                  return (
                    o('loading'),
                    (r.onload = i('loaded')),
                    (r.onerror = i('error')),
                    (r.src = e),
                    t && (r.referrerPolicy = t),
                    () => {
                      n = !1;
                    }
                  );
                }, [e, t]),
                n
              );
            })(o, f.referrerPolicy),
            v = (0, i.W)((e) => {
              s(e), l.onImageLoadingStatusChange(e);
            });
          return (
            (0, u.b)(() => {
              'idle' !== d && v(d);
            }, [d, v]),
            'loaded' === d
              ? (0, a.jsx)(c.WV.img, { ...f, ref: t, src: o })
              : null
          );
        });
      y.displayName = h;
      var m = 'AvatarFallback',
        g = r.forwardRef((e, t) => {
          const { __scopeAvatar: n, delayMs: o, ...i } = e,
            u = p(m, n),
            [s, f] = r.useState(void 0 === o);
          return (
            r.useEffect(() => {
              if (void 0 !== o) {
                const e = window.setTimeout(() => f(!0), o);
                return () => window.clearTimeout(e);
              }
            }, [o]),
            s && 'loaded' !== u.imageLoadingStatus
              ? (0, a.jsx)(c.WV.span, { ...i, ref: t })
              : null
          );
        });
      g.displayName = m;
      var x = v,
        k = y,
        b = g;
    },
    46069: function (e, t, n) {
      'use strict';
      n.d(t, {
        fC: function () {
          return D;
        },
        z$: function () {
          return A;
        },
      });
      var r = n(62435),
        o = n(28771),
        i = n(25360),
        u = n(36206),
        c = n(77342),
        a = n(57898),
        s = n(7546),
        f = n(29115),
        l = n(75320),
        d = n(86074),
        p = 'Checkbox',
        [v, h] = (0, i.b)(p),
        [y, m] = v(p),
        g = r.forwardRef((e, t) => {
          const {
              __scopeCheckbox: n,
              name: i,
              checked: a,
              defaultChecked: s,
              required: f,
              disabled: p,
              value: v = 'on',
              onCheckedChange: h,
              form: m,
              ...g
            } = e,
            [x, k] = r.useState(null),
            D = (0, o.e)(t, (e) => k(e)),
            A = r.useRef(!1),
            C = !x || m || !!x.closest('form'),
            [R = !1, E] = (0, c.T)({ prop: a, defaultProp: s, onChange: h }),
            Z = r.useRef(R);
          return (
            r.useEffect(() => {
              const e = x?.form;
              if (e) {
                const t = () => E(Z.current);
                return (
                  e.addEventListener('reset', t),
                  () => e.removeEventListener('reset', t)
                );
              }
            }, [x, E]),
            (0, d.jsxs)(y, {
              scope: n,
              state: R,
              disabled: p,
              children: [
                (0, d.jsx)(l.WV.button, {
                  type: 'button',
                  role: 'checkbox',
                  'aria-checked': w(R) ? 'mixed' : R,
                  'aria-required': f,
                  'data-state': j(R),
                  'data-disabled': p ? '' : void 0,
                  disabled: p,
                  value: v,
                  ...g,
                  ref: D,
                  onKeyDown: (0, u.M)(e.onKeyDown, (e) => {
                    'Enter' === e.key && e.preventDefault();
                  }),
                  onClick: (0, u.M)(e.onClick, (e) => {
                    E((e) => !!w(e) || !e),
                      C &&
                        ((A.current = e.isPropagationStopped()),
                        A.current || e.stopPropagation());
                  }),
                }),
                C &&
                  (0, d.jsx)(b, {
                    control: x,
                    bubbles: !A.current,
                    name: i,
                    value: v,
                    checked: R,
                    required: f,
                    disabled: p,
                    form: m,
                    style: { transform: 'translateX(-100%)' },
                    defaultChecked: !w(s) && s,
                  }),
              ],
            })
          );
        });
      g.displayName = p;
      var x = 'CheckboxIndicator',
        k = r.forwardRef((e, t) => {
          const { __scopeCheckbox: n, forceMount: r, ...o } = e,
            i = m(x, n);
          return (0, d.jsx)(f.z, {
            present: r || w(i.state) || !0 === i.state,
            children: (0, d.jsx)(l.WV.span, {
              'data-state': j(i.state),
              'data-disabled': i.disabled ? '' : void 0,
              ...o,
              ref: t,
              style: { pointerEvents: 'none', ...e.style },
            }),
          });
        });
      k.displayName = x;
      var b = (e) => {
        const {
            control: t,
            checked: n,
            bubbles: o = !0,
            defaultChecked: i,
            ...u
          } = e,
          c = r.useRef(null),
          f = (0, a.D)(n),
          l = (0, s.t)(t);
        r.useEffect(() => {
          const e = c.current,
            t = window.HTMLInputElement.prototype,
            r = Object.getOwnPropertyDescriptor(t, 'checked').set;
          if (f !== n && r) {
            const t = new Event('click', { bubbles: o });
            (e.indeterminate = w(n)), r.call(e, !w(n) && n), e.dispatchEvent(t);
          }
        }, [f, n, o]);
        const p = r.useRef(!w(n) && n);
        return (0, d.jsx)('input', {
          type: 'checkbox',
          'aria-hidden': !0,
          defaultChecked: i ?? p.current,
          ...u,
          tabIndex: -1,
          ref: c,
          style: {
            ...e.style,
            ...l,
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0,
            margin: 0,
          },
        });
      };
      function w(e) {
        return 'indeterminate' === e;
      }
      function j(e) {
        return w(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
      }
      var D = g,
        A = k;
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
                let t, n, o, i, u, c, a;
                return (
                  s(),
                  {
                    feed: function (e) {
                      (n = n ? n + e : e),
                        t &&
                          (function (e) {
                            return r.every((t, n) => e.charCodeAt(n) === t);
                          })(n) &&
                          (n = n.slice(r.length)),
                        (t = !1);
                      const u = n.length;
                      let c = 0,
                        a = !1;
                      for (; c < u; ) {
                        a && ('\n' === n[c] && ++c, (a = !1));
                        let e,
                          t = -1,
                          r = i;
                        for (let i = o; t < 0 && i < u; ++i)
                          (e = n[i]),
                            ':' === e && r < 0
                              ? (r = i - c)
                              : '\r' === e
                                ? ((a = !0), (t = i - c))
                                : '\n' === e && (t = i - c);
                        if (t < 0) {
                          (o = u - c), (i = r);
                          break;
                        }
                        (o = 0), (i = -1), f(n, c, r, t), (c += t + 1);
                      }
                      c === u ? (n = '') : c > 0 && (n = n.slice(c));
                    },
                    reset: s,
                  }
                );
                function s() {
                  (t = !0),
                    (n = ''),
                    (o = 0),
                    (i = -1),
                    (u = void 0),
                    (c = void 0),
                    (a = '');
                }
                function f(t, n, r, o) {
                  if (0 === o)
                    return (
                      a.length > 0 &&
                        (e({
                          type: 'event',
                          id: u,
                          event: c || void 0,
                          data: a.slice(0, -1),
                        }),
                        (a = ''),
                        (u = void 0)),
                      void (c = void 0)
                    );
                  const i = r < 0,
                    s = t.slice(n, n + (i ? o : r));
                  let f = 0;
                  f = i ? o : ' ' === t[n + r + 1] ? r + 2 : r + 1;
                  const l = n + f,
                    d = o - f,
                    p = t.slice(l, l + d).toString();
                  if ('data' === s) a += p ? ''.concat(p, '\n') : '\n';
                  else if ('event' === s) c = p;
                  else if ('id' !== s || p.includes('\0')) {
                    if ('retry' === s) {
                      const t = parseInt(p, 10);
                      Number.isNaN(t) ||
                        e({ type: 'reconnect-interval', value: t });
                    }
                  } else u = p;
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
//# sourceMappingURL=5898.d82c7b2c.async.js.map
