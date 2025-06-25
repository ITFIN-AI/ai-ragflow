/*! For license information please see 2797.f3d0df10.async.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [2797],
  {
    62469: function (e, t, n) {
      'use strict';
      n.d(t, {
        dsO: function () {
          return i;
        },
        wGg: function () {
          return u;
        },
      });
      var r = n(62435);
      function o(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      var a = ['color'],
        i = (0, r.forwardRef)(function (e, t) {
          var n = e.color,
            i = void 0 === n ? 'currentColor' : n,
            l = o(e, a);
          return (0, r.createElement)(
            'svg',
            Object.assign(
              {
                width: '15',
                height: '15',
                viewBox: '0 0 15 15',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              l,
              { ref: t },
            ),
            (0, r.createElement)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z',
              fill: i,
            }),
          );
        }),
        l = ['color'],
        u = (0, r.forwardRef)(function (e, t) {
          var n = e.color,
            a = void 0 === n ? 'currentColor' : n,
            i = o(e, l);
          return (0, r.createElement)(
            'svg',
            Object.assign(
              {
                width: '15',
                height: '15',
                viewBox: '0 0 15 15',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              i,
              { ref: t },
            ),
            (0, r.createElement)('path', {
              d: 'M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z',
              fill: a,
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          );
        });
    },
    88668: function (e, t, n) {
      var r = n(83369),
        o = n(90619),
        a = n(72385);
      function i(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
      }
      (i.prototype.add = i.prototype.push = o),
        (i.prototype.has = a),
        (e.exports = i);
    },
    82908: function (e) {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e)) return !0;
        return !1;
      };
    },
    90939: function (e, t, n) {
      var r = n(2492),
        o = n(37005);
      e.exports = function e(t, n, a, i, l) {
        return (
          t === n ||
          (null == t || null == n || (!o(t) && !o(n))
            ? t != t && n != n
            : r(t, n, a, i, e, l))
        );
      };
    },
    2492: function (e, t, n) {
      var r = n(46384),
        o = n(67114),
        a = n(18351),
        i = n(16096),
        l = n(64160),
        u = n(1469),
        c = n(44144),
        s = n(36719),
        f = '[object Arguments]',
        d = '[object Array]',
        p = '[object Object]',
        v = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, h, C, m) {
        var g = u(e),
          b = u(t),
          y = g ? d : l(e),
          w = b ? d : l(t),
          E = (y = y == f ? p : y) == p,
          x = (w = w == f ? p : w) == p,
          k = y == w;
        if (k && c(e)) {
          if (!c(t)) return !1;
          (g = !0), (E = !1);
        }
        if (k && !E)
          return (
            m || (m = new r()),
            g || s(e) ? o(e, t, n, h, C, m) : a(e, t, y, n, h, C, m)
          );
        if (!(1 & n)) {
          var j = E && v.call(e, '__wrapped__'),
            S = x && v.call(t, '__wrapped__');
          if (j || S) {
            var M = j ? e.value() : e,
              _ = S ? t.value() : t;
            return m || (m = new r()), C(M, _, n, h, m);
          }
        }
        return !!k && (m || (m = new r()), i(e, t, n, h, C, m));
      };
    },
    74757: function (e) {
      e.exports = function (e, t) {
        return e.has(t);
      };
    },
    67114: function (e, t, n) {
      var r = n(88668),
        o = n(82908),
        a = n(74757);
      e.exports = function (e, t, n, i, l, u) {
        var c = 1 & n,
          s = e.length,
          f = t.length;
        if (s != f && !(c && f > s)) return !1;
        var d = u.get(e),
          p = u.get(t);
        if (d && p) return d == t && p == e;
        var v = -1,
          h = !0,
          C = 2 & n ? new r() : void 0;
        for (u.set(e, t), u.set(t, e); ++v < s; ) {
          var m = e[v],
            g = t[v];
          if (i) var b = c ? i(g, m, v, t, e, u) : i(m, g, v, e, t, u);
          if (void 0 !== b) {
            if (b) continue;
            h = !1;
            break;
          }
          if (C) {
            if (
              !o(t, function (e, t) {
                if (!a(C, t) && (m === e || l(m, e, n, i, u))) return C.push(t);
              })
            ) {
              h = !1;
              break;
            }
          } else if (m !== g && !l(m, g, n, i, u)) {
            h = !1;
            break;
          }
        }
        return u.delete(e), u.delete(t), h;
      };
    },
    18351: function (e, t, n) {
      var r = n(62705),
        o = n(11149),
        a = n(77813),
        i = n(67114),
        l = n(68776),
        u = n(21814),
        c = r ? r.prototype : void 0,
        s = c ? c.valueOf : void 0;
      e.exports = function (e, t, n, r, c, f, d) {
        switch (n) {
          case '[object DataView]':
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case '[object ArrayBuffer]':
            return !(e.byteLength != t.byteLength || !f(new o(e), new o(t)));
          case '[object Boolean]':
          case '[object Date]':
          case '[object Number]':
            return a(+e, +t);
          case '[object Error]':
            return e.name == t.name && e.message == t.message;
          case '[object RegExp]':
          case '[object String]':
            return e == t + '';
          case '[object Map]':
            var p = l;
          case '[object Set]':
            var v = 1 & r;
            if ((p || (p = u), e.size != t.size && !v)) return !1;
            var h = d.get(e);
            if (h) return h == t;
            (r |= 2), d.set(e, t);
            var C = i(p(e), p(t), r, c, f, d);
            return d.delete(e), C;
          case '[object Symbol]':
            if (s) return s.call(e) == s.call(t);
        }
        return !1;
      };
    },
    16096: function (e, t, n) {
      var r = n(58234),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, a, i, l) {
        var u = 1 & n,
          c = r(e),
          s = c.length;
        if (s != r(t).length && !u) return !1;
        for (var f = s; f--; ) {
          var d = c[f];
          if (!(u ? d in t : o.call(t, d))) return !1;
        }
        var p = l.get(e),
          v = l.get(t);
        if (p && v) return p == t && v == e;
        var h = !0;
        l.set(e, t), l.set(t, e);
        for (var C = u; ++f < s; ) {
          var m = e[(d = c[f])],
            g = t[d];
          if (a) var b = u ? a(g, m, d, t, e, l) : a(m, g, d, e, t, l);
          if (!(void 0 === b ? m === g || i(m, g, n, a, l) : b)) {
            h = !1;
            break;
          }
          C || (C = 'constructor' == d);
        }
        if (h && !C) {
          var y = e.constructor,
            w = t.constructor;
          y == w ||
            !('constructor' in e) ||
            !('constructor' in t) ||
            ('function' == typeof y &&
              y instanceof y &&
              'function' == typeof w &&
              w instanceof w) ||
            (h = !1);
        }
        return l.delete(e), l.delete(t), h;
      };
    },
    68776: function (e) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      };
    },
    90619: function (e) {
      e.exports = function (e) {
        return this.__data__.set(e, '__lodash_hash_undefined__'), this;
      };
    },
    72385: function (e) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    21814: function (e) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      };
    },
    18446: function (e, t, n) {
      var r = n(90939);
      e.exports = function (e, t) {
        return r(e, t);
      };
    },
    23560: function (e, t, n) {
      var r = n(44239),
        o = n(13218);
      e.exports = function (e) {
        if (!o(e)) return !1;
        var t = r(e);
        return (
          '[object Function]' == t ||
          '[object GeneratorFunction]' == t ||
          '[object AsyncFunction]' == t ||
          '[object Proxy]' == t
        );
      };
    },
    13742: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('check', [
        ['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }],
      ]);
    },
    55780: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      const r = (0, n(91373).Z)('dot', [
        ['circle', { cx: '12.1', cy: '12.1', r: '1', key: '18d7e5' }],
      ]);
    },
    56312: function (e, t, n) {
      'use strict';
      n.d(t, {
        F: function () {
          return c;
        },
      });
      var r = n(87536);
      const o = (e, t, n) => {
          if (e && 'reportValidity' in e) {
            const o = (0, r.U2)(n, t);
            e.setCustomValidity((o && o.message) || ''), e.reportValidity();
          }
        },
        a = (e, t) => {
          for (const n in t.fields) {
            const r = t.fields[n];
            r && r.ref && 'reportValidity' in r.ref
              ? o(r.ref, n, e)
              : r.refs && r.refs.forEach((t) => o(t, n, e));
          }
        },
        i = (e, t) => {
          t.shouldUseNativeValidation && a(e, t);
          const n = {};
          for (const o in e) {
            const a = (0, r.U2)(t.fields, o),
              i = Object.assign(e[o] || {}, { ref: a && a.ref });
            if (l(t.names || Object.keys(e), o)) {
              const e = Object.assign({}, (0, r.U2)(n, o));
              (0, r.t8)(e, 'root', i), (0, r.t8)(n, o, e);
            } else (0, r.t8)(n, o, i);
          }
          return n;
        },
        l = (e, t) => e.some((e) => e.startsWith(t + '.'));
      var u = function (e, t) {
          for (var n = {}; e.length; ) {
            var o = e[0],
              a = o.code,
              i = o.message,
              l = o.path.join('.');
            if (!n[l])
              if ('unionErrors' in o) {
                var u = o.unionErrors[0].errors[0];
                n[l] = { message: u.message, type: u.code };
              } else n[l] = { message: i, type: a };
            if (
              ('unionErrors' in o &&
                o.unionErrors.forEach(function (t) {
                  return t.errors.forEach(function (t) {
                    return e.push(t);
                  });
                }),
              t)
            ) {
              var c = n[l].types,
                s = c && c[o.code];
              n[l] = (0, r.KN)(
                l,
                t,
                n,
                a,
                s ? [].concat(s, o.message) : o.message,
              );
            }
            e.shift();
          }
          return n;
        },
        c = function (e, t, n) {
          return (
            void 0 === n && (n = {}),
            function (r, o, l) {
              try {
                return Promise.resolve(
                  (function (o, i) {
                    try {
                      var u = Promise.resolve(
                        e['sync' === n.mode ? 'parse' : 'parseAsync'](r, t),
                      ).then(function (e) {
                        return (
                          l.shouldUseNativeValidation && a({}, l),
                          { errors: {}, values: n.raw ? r : e }
                        );
                      });
                    } catch (e) {
                      return i(e);
                    }
                    return u && u.then ? u.then(void 0, i) : u;
                  })(0, function (e) {
                    if (
                      (function (e) {
                        return Array.isArray(null == e ? void 0 : e.errors);
                      })(e)
                    )
                      return {
                        values: {},
                        errors: i(
                          u(
                            e.errors,
                            !l.shouldUseNativeValidation &&
                              'all' === l.criteriaMode,
                          ),
                          l,
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
    46069: function (e, t, n) {
      'use strict';
      n.d(t, {
        fC: function () {
          return k;
        },
        z$: function () {
          return j;
        },
      });
      var r = n(62435),
        o = n(28771),
        a = n(25360),
        i = n(36206),
        l = n(77342),
        u = n(57898),
        c = n(7546),
        s = n(29115),
        f = n(75320),
        d = n(86074),
        p = 'Checkbox',
        [v, h] = (0, a.b)(p),
        [C, m] = v(p),
        g = r.forwardRef((e, t) => {
          const {
              __scopeCheckbox: n,
              name: a,
              checked: u,
              defaultChecked: c,
              required: s,
              disabled: p,
              value: v = 'on',
              onCheckedChange: h,
              form: m,
              ...g
            } = e,
            [b, y] = r.useState(null),
            k = (0, o.e)(t, (e) => y(e)),
            j = r.useRef(!1),
            S = !b || m || !!b.closest('form'),
            [M = !1, _] = (0, l.T)({ prop: u, defaultProp: c, onChange: h }),
            P = r.useRef(M);
          return (
            r.useEffect(() => {
              const e = b?.form;
              if (e) {
                const t = () => _(P.current);
                return (
                  e.addEventListener('reset', t),
                  () => e.removeEventListener('reset', t)
                );
              }
            }, [b, _]),
            (0, d.jsxs)(C, {
              scope: n,
              state: M,
              disabled: p,
              children: [
                (0, d.jsx)(f.WV.button, {
                  type: 'button',
                  role: 'checkbox',
                  'aria-checked': E(M) ? 'mixed' : M,
                  'aria-required': s,
                  'data-state': x(M),
                  'data-disabled': p ? '' : void 0,
                  disabled: p,
                  value: v,
                  ...g,
                  ref: k,
                  onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                    'Enter' === e.key && e.preventDefault();
                  }),
                  onClick: (0, i.M)(e.onClick, (e) => {
                    _((e) => !!E(e) || !e),
                      S &&
                        ((j.current = e.isPropagationStopped()),
                        j.current || e.stopPropagation());
                  }),
                }),
                S &&
                  (0, d.jsx)(w, {
                    control: b,
                    bubbles: !j.current,
                    name: a,
                    value: v,
                    checked: M,
                    required: s,
                    disabled: p,
                    form: m,
                    style: { transform: 'translateX(-100%)' },
                    defaultChecked: !E(c) && c,
                  }),
              ],
            })
          );
        });
      g.displayName = p;
      var b = 'CheckboxIndicator',
        y = r.forwardRef((e, t) => {
          const { __scopeCheckbox: n, forceMount: r, ...o } = e,
            a = m(b, n);
          return (0, d.jsx)(s.z, {
            present: r || E(a.state) || !0 === a.state,
            children: (0, d.jsx)(f.WV.span, {
              'data-state': x(a.state),
              'data-disabled': a.disabled ? '' : void 0,
              ...o,
              ref: t,
              style: { pointerEvents: 'none', ...e.style },
            }),
          });
        });
      y.displayName = b;
      var w = (e) => {
        const {
            control: t,
            checked: n,
            bubbles: o = !0,
            defaultChecked: a,
            ...i
          } = e,
          l = r.useRef(null),
          s = (0, u.D)(n),
          f = (0, c.t)(t);
        r.useEffect(() => {
          const e = l.current,
            t = window.HTMLInputElement.prototype,
            r = Object.getOwnPropertyDescriptor(t, 'checked').set;
          if (s !== n && r) {
            const t = new Event('click', { bubbles: o });
            (e.indeterminate = E(n)), r.call(e, !E(n) && n), e.dispatchEvent(t);
          }
        }, [s, n, o]);
        const p = r.useRef(!E(n) && n);
        return (0, d.jsx)('input', {
          type: 'checkbox',
          'aria-hidden': !0,
          defaultChecked: a ?? p.current,
          ...i,
          tabIndex: -1,
          ref: l,
          style: {
            ...e.style,
            ...f,
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0,
            margin: 0,
          },
        });
      };
      function E(e) {
        return 'indeterminate' === e;
      }
      function x(e) {
        return E(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
      }
      var k = g,
        j = y;
    },
    57898: function (e, t, n) {
      'use strict';
      n.d(t, {
        D: function () {
          return o;
        },
      });
      var r = n(62435);
      function o(e) {
        const t = r.useRef({ value: e, previous: e });
        return r.useMemo(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e],
        );
      }
    },
    28058: function (e, t, n) {
      'use strict';
      n.d(t, {
        VM: function () {
          return d;
        },
        uZ: function () {
          return p;
        },
      });
      var r = n(62435),
        o = Object.defineProperty,
        a = Object.defineProperties,
        i = Object.getOwnPropertyDescriptors,
        l = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable,
        s = (e, t, n) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      var f = [
        '[data-lastpass-icon-root]',
        'com-1password-button',
        '[data-dashlanecreated]',
        '[style$="2147483647 !important;"]',
      ].join(',');
      var d = r.createContext({}),
        p = r.forwardRef((e, t) => {
          var n,
            o,
            p,
            C,
            m,
            g = e,
            {
              value: b,
              onChange: y,
              maxLength: w,
              textAlign: E = 'left',
              pattern: x,
              placeholder: k,
              inputMode: j = 'numeric',
              onComplete: S,
              pushPasswordManagerStrategy: M = 'increase-width',
              pasteTransformer: _,
              containerClassName: P,
              noScriptCSSFallback: O = h,
              render: R,
              children: D,
            } = g,
            A = ((e, t) => {
              var n = {};
              for (var r in e)
                u.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
              if (null != e && l)
                for (var r of l(e))
                  t.indexOf(r) < 0 && c.call(e, r) && (n[r] = e[r]);
              return n;
            })(g, [
              'value',
              'onChange',
              'maxLength',
              'textAlign',
              'pattern',
              'placeholder',
              'inputMode',
              'onComplete',
              'pushPasswordManagerStrategy',
              'pasteTransformer',
              'containerClassName',
              'noScriptCSSFallback',
              'render',
              'children',
            ]);
          let [T, B] = r.useState(
              'string' == typeof A.defaultValue ? A.defaultValue : '',
            ),
            W = null != b ? b : T,
            F = (function (e) {
              let t = r.useRef();
              return (
                r.useEffect(() => {
                  t.current = e;
                }),
                t.current
              );
            })(W),
            I = r.useCallback(
              (e) => {
                null == y || y(e), B(e);
              },
              [y],
            ),
            L = r.useMemo(
              () => (x ? ('string' == typeof x ? new RegExp(x) : x) : null),
              [x],
            ),
            V = r.useRef(null),
            N = r.useRef(null),
            H = r.useRef({
              value: W,
              onChange: I,
              isIOS:
                'undefined' != typeof window &&
                (null ==
                (o =
                  null == (n = null == window ? void 0 : window.CSS)
                    ? void 0
                    : n.supports)
                  ? void 0
                  : o.call(n, '-webkit-touch-callout', 'none')),
            }),
            Z = r.useRef({
              prev: [
                null == (p = V.current) ? void 0 : p.selectionStart,
                null == (C = V.current) ? void 0 : C.selectionEnd,
                null == (m = V.current) ? void 0 : m.selectionDirection,
              ],
            });
          r.useImperativeHandle(t, () => V.current, []),
            r.useEffect(() => {
              let e = V.current,
                t = N.current;
              if (!e || !t) return;
              function n() {
                if (document.activeElement !== e) return K(null), void J(null);
                let t,
                  n = e.selectionStart,
                  r = e.selectionEnd,
                  o = e.selectionDirection,
                  a = e.maxLength,
                  i = e.value,
                  l = Z.current.prev,
                  u = -1,
                  c = -1;
                if (0 !== i.length && null !== n && null !== r) {
                  let e = n === r,
                    o = n === i.length && i.length < a;
                  if (e && !o) {
                    let e = n;
                    if (0 === e) (u = 0), (c = 1), (t = 'forward');
                    else if (e === a) (u = e - 1), (c = e), (t = 'backward');
                    else if (a > 1 && i.length > 1) {
                      let n = 0;
                      if (null !== l[0] && null !== l[1]) {
                        t = e < l[1] ? 'backward' : 'forward';
                        let r = l[0] === l[1] && l[0] < a;
                        'backward' === t && !r && (n = -1);
                      }
                      (u = n + e), (c = n + e + 1);
                    }
                  }
                  -1 !== u &&
                    -1 !== c &&
                    u !== c &&
                    V.current.setSelectionRange(u, c, t);
                }
                let s = -1 !== u ? u : n,
                  f = -1 !== c ? c : r,
                  d = null != t ? t : o;
                K(s), J(f), (Z.current.prev = [s, f, d]);
              }
              if (
                (H.current.value !== e.value && H.current.onChange(e.value),
                (Z.current.prev = [
                  e.selectionStart,
                  e.selectionEnd,
                  e.selectionDirection,
                ]),
                document.addEventListener('selectionchange', n, {
                  capture: !0,
                }),
                n(),
                document.activeElement === e && G(!0),
                !document.getElementById('input-otp-style'))
              ) {
                let e = document.createElement('style');
                if (
                  ((e.id = 'input-otp-style'),
                  document.head.appendChild(e),
                  e.sheet)
                ) {
                  let t =
                    'background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;';
                  v(
                    e.sheet,
                    '[data-input-otp]::selection { background: transparent !important; color: transparent !important; }',
                  ),
                    v(e.sheet, `[data-input-otp]:autofill { ${t} }`),
                    v(e.sheet, `[data-input-otp]:-webkit-autofill { ${t} }`),
                    v(
                      e.sheet,
                      '@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }',
                    ),
                    v(
                      e.sheet,
                      '[data-input-otp] + * { pointer-events: all !important; }',
                    );
                }
              }
              let r = () => {
                t &&
                  t.style.setProperty('--root-height', `${e.clientHeight}px`);
              };
              r();
              let o = new ResizeObserver(r);
              return (
                o.observe(e),
                () => {
                  document.removeEventListener('selectionchange', n, {
                    capture: !0,
                  }),
                    o.disconnect();
                }
              );
            }, []);
          let [z, U] = r.useState(!1),
            [$, G] = r.useState(!1),
            [q, K] = r.useState(null),
            [X, J] = r.useState(null);
          r.useEffect(() => {
            !(function (e) {
              setTimeout(e, 0), setTimeout(e, 10), setTimeout(e, 50);
            })(() => {
              var e, t, n, r;
              null == (e = V.current) || e.dispatchEvent(new Event('input'));
              let o = null == (t = V.current) ? void 0 : t.selectionStart,
                a = null == (n = V.current) ? void 0 : n.selectionEnd,
                i = null == (r = V.current) ? void 0 : r.selectionDirection;
              null !== o &&
                null !== a &&
                (K(o), J(a), (Z.current.prev = [o, a, i]));
            });
          }, [W, $]),
            r.useEffect(() => {
              void 0 !== F &&
                W !== F &&
                F.length < w &&
                W.length === w &&
                (null == S || S(W));
            }, [w, S, F, W]);
          let Q = (function ({
              containerRef: e,
              inputRef: t,
              pushPasswordManagerStrategy: n,
              isFocused: o,
            }) {
              let [a, i] = r.useState(!1),
                [l, u] = r.useState(!1),
                [c, s] = r.useState(!1),
                d = r.useMemo(
                  () =>
                    'none' !== n &&
                    ('increase-width' === n ||
                      'experimental-no-flickering' === n) &&
                    a &&
                    l,
                  [a, l, n],
                ),
                p = r.useCallback(() => {
                  let r = e.current,
                    o = t.current;
                  if (!r || !o || c || 'none' === n) return;
                  let a = r,
                    l = a.getBoundingClientRect().left + a.offsetWidth - 18,
                    u = a.getBoundingClientRect().top + a.offsetHeight / 2;
                  (0 === document.querySelectorAll(f).length &&
                    document.elementFromPoint(l, u) === r) ||
                    (i(!0), s(!0));
                }, [e, t, c, n]);
              return (
                r.useEffect(() => {
                  let t = e.current;
                  if (!t || 'none' === n) return;
                  function r() {
                    let e = window.innerWidth - t.getBoundingClientRect().right;
                    u(e >= 40);
                  }
                  r();
                  let o = setInterval(r, 1e3);
                  return () => {
                    clearInterval(o);
                  };
                }, [e, n]),
                r.useEffect(() => {
                  let e = o || document.activeElement === t.current;
                  if ('none' === n || !e) return;
                  let r = setTimeout(p, 0),
                    a = setTimeout(p, 2e3),
                    i = setTimeout(p, 5e3),
                    l = setTimeout(() => {
                      s(!0);
                    }, 6e3);
                  return () => {
                    clearTimeout(r),
                      clearTimeout(a),
                      clearTimeout(i),
                      clearTimeout(l);
                  };
                }, [t, o, n, p]),
                {
                  hasPWMBadge: a,
                  willPushPWMBadge: d,
                  PWM_BADGE_SPACE_WIDTH: '40px',
                }
              );
            })({
              containerRef: N,
              inputRef: V,
              pushPasswordManagerStrategy: M,
              isFocused: $,
            }),
            Y = r.useCallback(
              (e) => {
                let t = e.currentTarget.value.slice(0, w);
                t.length > 0 && L && !L.test(t)
                  ? e.preventDefault()
                  : ('string' == typeof F &&
                      t.length < F.length &&
                      document.dispatchEvent(new Event('selectionchange')),
                    I(t));
              },
              [w, I, F, L],
            ),
            ee = r.useCallback(() => {
              var e;
              if (V.current) {
                let t = Math.min(V.current.value.length, w - 1),
                  n = V.current.value.length;
                null == (e = V.current) || e.setSelectionRange(t, n),
                  K(t),
                  J(n);
              }
              G(!0);
            }, [w]),
            te = r.useCallback(
              (e) => {
                var t, n;
                let r = V.current;
                if (!(_ || (H.current.isIOS && e.clipboardData && r))) return;
                let o = e.clipboardData.getData('text/plain'),
                  a = _ ? _(o) : o;
                console.log({ _content: o, content: a }), e.preventDefault();
                let i = null == (t = V.current) ? void 0 : t.selectionStart,
                  l = null == (n = V.current) ? void 0 : n.selectionEnd,
                  u = (
                    i !== l
                      ? W.slice(0, i) + a + W.slice(l)
                      : W.slice(0, i) + a + W.slice(i)
                  ).slice(0, w);
                if (u.length > 0 && L && !L.test(u)) return;
                (r.value = u), I(u);
                let c = Math.min(u.length, w - 1),
                  s = u.length;
                r.setSelectionRange(c, s), K(c), J(s);
              },
              [w, I, L, W],
            ),
            ne = r.useMemo(
              () => ({
                position: 'relative',
                cursor: A.disabled ? 'default' : 'text',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                pointerEvents: 'none',
              }),
              [A.disabled],
            ),
            re = r.useMemo(
              () => ({
                position: 'absolute',
                inset: 0,
                width: Q.willPushPWMBadge
                  ? `calc(100% + ${Q.PWM_BADGE_SPACE_WIDTH})`
                  : '100%',
                clipPath: Q.willPushPWMBadge
                  ? `inset(0 ${Q.PWM_BADGE_SPACE_WIDTH} 0 0)`
                  : void 0,
                height: '100%',
                display: 'flex',
                textAlign: E,
                opacity: '1',
                color: 'transparent',
                pointerEvents: 'all',
                background: 'transparent',
                caretColor: 'transparent',
                border: '0 solid transparent',
                outline: '0 solid transparent',
                boxShadow: 'none',
                lineHeight: '1',
                letterSpacing: '-.5em',
                fontSize: 'var(--root-height)',
                fontFamily: 'monospace',
                fontVariantNumeric: 'tabular-nums',
              }),
              [Q.PWM_BADGE_SPACE_WIDTH, Q.willPushPWMBadge, E],
            ),
            oe = r.useMemo(
              () =>
                r.createElement(
                  'input',
                  ((e, t) => a(e, i(t)))(
                    ((e, t) => {
                      for (var n in t || (t = {}))
                        u.call(t, n) && s(e, n, t[n]);
                      if (l) for (var n of l(t)) c.call(t, n) && s(e, n, t[n]);
                      return e;
                    })({ autoComplete: A.autoComplete || 'one-time-code' }, A),
                    {
                      'data-input-otp': !0,
                      'data-input-otp-placeholder-shown':
                        0 === W.length || void 0,
                      'data-input-otp-mss': q,
                      'data-input-otp-mse': X,
                      inputMode: j,
                      pattern: null == L ? void 0 : L.source,
                      'aria-placeholder': k,
                      style: re,
                      maxLength: w,
                      value: W,
                      ref: V,
                      onPaste: (e) => {
                        var t;
                        te(e), null == (t = A.onPaste) || t.call(A, e);
                      },
                      onChange: Y,
                      onMouseOver: (e) => {
                        var t;
                        U(!0), null == (t = A.onMouseOver) || t.call(A, e);
                      },
                      onMouseLeave: (e) => {
                        var t;
                        U(!1), null == (t = A.onMouseLeave) || t.call(A, e);
                      },
                      onFocus: (e) => {
                        var t;
                        ee(), null == (t = A.onFocus) || t.call(A, e);
                      },
                      onBlur: (e) => {
                        var t;
                        G(!1), null == (t = A.onBlur) || t.call(A, e);
                      },
                    },
                  ),
                ),
              [Y, ee, te, j, re, w, X, q, A, null == L ? void 0 : L.source, W],
            ),
            ae = r.useMemo(
              () => ({
                slots: Array.from({ length: w }).map((e, t) => {
                  var n;
                  let r =
                      $ &&
                      null !== q &&
                      null !== X &&
                      ((q === X && t === q) || (t >= q && t < X)),
                    o = void 0 !== W[t] ? W[t] : null;
                  return {
                    char: o,
                    placeholderChar:
                      void 0 !== W[0]
                        ? null
                        : null != (n = null == k ? void 0 : k[t])
                          ? n
                          : null,
                    isActive: r,
                    hasFakeCaret: r && null === o,
                  };
                }),
                isFocused: $,
                isHovering: !A.disabled && z,
              }),
              [$, z, w, X, q, A.disabled, W],
            ),
            ie = r.useMemo(
              () => (R ? R(ae) : r.createElement(d.Provider, { value: ae }, D)),
              [D, ae, R],
            );
          return r.createElement(
            r.Fragment,
            null,
            null !== O &&
              r.createElement(
                'noscript',
                null,
                r.createElement('style', null, O),
              ),
            r.createElement(
              'div',
              {
                ref: N,
                'data-input-otp-container': !0,
                style: ne,
                className: P,
              },
              ie,
              r.createElement(
                'div',
                {
                  style: {
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                  },
                },
                oe,
              ),
            ),
          );
        });
      function v(e, t) {
        try {
          e.insertRule(t);
        } catch (e) {
          console.error('input-otp could not insert CSS rule:', t);
        }
      }
      p.displayName = 'Input';
      var h =
        '\n[data-input-otp] {\n  --nojs-bg: white !important;\n  --nojs-fg: black !important;\n\n  background-color: var(--nojs-bg) !important;\n  color: var(--nojs-fg) !important;\n  caret-color: var(--nojs-fg) !important;\n  letter-spacing: .25em !important;\n  text-align: center !important;\n  border: 1px solid var(--nojs-fg) !important;\n  border-radius: 4px !important;\n  width: 100% !important;\n}\n@media (prefers-color-scheme: dark) {\n  [data-input-otp] {\n    --nojs-bg: black !important;\n    --nojs-fg: white !important;\n  }\n}';
    },
  },
]);
//# sourceMappingURL=2797.f3d0df10.async.js.map
