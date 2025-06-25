(self.webpackChunk = self.webpackChunk || []).push([
  [1306],
  {
    26572: function (n, t, e) {
      'use strict';
      e.d(t, {
        Z: function () {
          return m;
        },
      });
      var r = e(19632),
        a = e.n(r),
        u = e(5574),
        i = e.n(u),
        c = e(24969),
        o = e(9361),
        s = e(83062),
        l = e(66309),
        d = e(79531),
        f = e(52376),
        p = e(62435),
        h = 'tweenGroup___HgfIF',
        v = 'tag___EPGvm',
        g = e(86074),
        m = function (n) {
          var t = n.value,
            e = void 0 === t ? [] : t,
            r = n.onChange,
            u = o.Z.useToken().token,
            m = (0, p.useState)(!1),
            y = i()(m, 2),
            k = y[0],
            w = y[1],
            x = (0, p.useState)(''),
            b = i()(x, 2),
            _ = b[0],
            C = b[1],
            Z = (0, p.useRef)(null);
          (0, p.useEffect)(
            function () {
              var n;
              k && (null === (n = Z.current) || void 0 === n || n.focus());
            },
            [k],
          );
          var P = function () {
              if (_ && e) {
                var n = _.split(';')
                  .map(function (n) {
                    return n.trim();
                  })
                  .filter(function (n) {
                    return n && !e.includes(n);
                  });
                null == r || r([].concat(a()(e), a()(n)));
              }
              w(!1), C('');
            },
            j =
              null == e
                ? void 0
                : e.map(function (n) {
                    return (0, g.jsx)(s.Z, {
                      title: n,
                      children: (0, g.jsx)(
                        l.Z,
                        {
                          className: v,
                          closable: !0,
                          onClose: function (t) {
                            var a, u;
                            t.preventDefault(),
                              (a = n),
                              (u =
                                null == e
                                  ? void 0
                                  : e.filter(function (n) {
                                      return n !== a;
                                    })),
                              null == r || r(null != u ? u : []);
                          },
                          children: n,
                        },
                        n,
                      ),
                    });
                  }),
            N = { background: u.colorBgContainer, borderStyle: 'dashed' };
          return (0, g.jsxs)('div', {
            children: [
              Array.isArray(j) &&
                j.length > 0 &&
                (0, g.jsx)(f.Z, {
                  className: h,
                  enter: {
                    scale: 0.8,
                    opacity: 0,
                    type: 'from',
                    duration: 100,
                  },
                  onEnd: function (n) {
                    ('appear' !== n.type && 'enter' !== n.type) ||
                      (n.target.style = 'display: inline-block');
                  },
                  leave: { opacity: 0, width: 0, scale: 0, duration: 200 },
                  appear: !1,
                  children: j,
                }),
              k
                ? (0, g.jsx)(d.Z, {
                    ref: Z,
                    type: 'text',
                    size: 'small',
                    value: _,
                    onChange: function (n) {
                      C(n.target.value);
                    },
                    onBlur: P,
                    onPressEnter: P,
                  })
                : (0, g.jsx)(l.Z, {
                    onClick: function () {
                      w(!0);
                    },
                    style: N,
                    children: (0, g.jsx)(c.Z, {}),
                  }),
            ],
          });
        };
    },
    43714: function (n, t, e) {
      'use strict';
      e.d(t, {
        s: function () {
          return y;
        },
        Z: function () {
          return m;
        },
      });
      var r = e(97857),
        a = e.n(r),
        u = e(13769),
        i = e.n(u),
        c = e(60806),
        o = e(55241),
        s = e(93967),
        l = e.n(s),
        d = 'primitiveImg___VkCiH',
        f = 'image___BCkCB',
        p = 'imagePreview___qFyP3',
        h = e(86074),
        v = ['id', 'className'],
        g = function (n) {
          var t = n.id,
            e = n.className,
            r = i()(n, v);
          return (0, h.jsx)(
            'img',
            a()(
              a()({}, r),
              {},
              {
                src: ''.concat(c.N, '/document/image/').concat(t),
                alt: '',
                className: l()(d, e),
              },
            ),
          );
        },
        m = g,
        y = function (n) {
          var t = n.id;
          return (0, h.jsx)(o.Z, {
            placement: 'left',
            content: (0, h.jsx)(g, { id: t, className: p }),
            children: (0, h.jsx)(g, { id: t, className: f }),
          });
        };
    },
    96449: function (n, t, e) {
      'use strict';
      e.d(t, {
        s: function () {
          return d;
        },
      });
      var r = e(15009),
        a = e.n(r),
        u = e(99289),
        i = e.n(u),
        c = e(5574),
        o = e.n(c),
        s = e(87066),
        l = e(62435),
        d = function (n) {
          var t = (0, l.useState)(''),
            e = o()(t, 2),
            r = e[0],
            u = e[1],
            c = (0, l.useCallback)(
              i()(
                a()().mark(function t() {
                  var e, r;
                  return a()().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), s.Z.get(n);
                        case 2:
                          (e = t.sent),
                            0 !== (r = e.data).code &&
                              u(null == r ? void 0 : r.message);
                        case 5:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              ),
              [n],
            );
          return (
            (0, l.useEffect)(
              function () {
                c();
              },
              [c],
            ),
            r
          );
        };
    },
    3735: function (n, t, e) {
      'use strict';
      e.d(t, {
        $0: function () {
          return _;
        },
        D9: function () {
          return w;
        },
        Kn: function () {
          return k;
        },
        T7: function () {
          return b;
        },
        gX: function () {
          return C;
        },
        zt: function () {
          return x;
        },
      });
      var r = e(15009),
        a = e.n(r),
        u = e(99289),
        i = e.n(u),
        c = e(5574),
        o = e.n(c),
        s = e(73955),
        l = e(78551),
        d = e(30202),
        f = e(4527),
        p = e(58580),
        h = e(45360),
        v = e(62435),
        g = e(67421),
        m = e(2938),
        y = e(96100),
        k = function () {
          var n,
            t = (0, m.ye)(),
            e = t.pagination,
            r = t.setPagination,
            u = (0, y.pE)().documentId,
            c = (0, m.Qe)(),
            d = c.searchString,
            f = c.handleInputChange,
            h = (0, v.useState)(),
            g = o()(h, 2),
            k = g[0],
            w = g[1],
            x = (0, p.Z)(d, { wait: 500 }),
            b = (0, l.a)({
              queryKey: ['fetchChunkList', u, e.current, e.pageSize, x, k],
              placeholderData: function (n) {
                return null != n ? n : { data: [], total: 0, documentInfo: {} };
              },
              gcTime: 0,
              queryFn:
                ((n = i()(
                  a()().mark(function n() {
                    var t, r, i, c;
                    return a()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              s.ZP.chunk_list({
                                doc_id: u,
                                page: e.current,
                                size: e.pageSize,
                                available_int: k,
                                keywords: d,
                              })
                            );
                          case 2:
                            if (((r = n.sent), 0 !== (i = r.data).code)) {
                              n.next = 7;
                              break;
                            }
                            return (
                              (c = i.data),
                              n.abrupt('return', {
                                data: c.chunks,
                                total: c.total,
                                documentInfo: c.doc,
                              })
                            );
                          case 7:
                            return n.abrupt(
                              'return',
                              null !== (t = null == i ? void 0 : i.data) &&
                                void 0 !== t
                                ? t
                                : { data: [], total: 0, documentInfo: {} },
                            );
                          case 8:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            }),
            _ = b.data,
            C = b.isFetching,
            Z = (0, v.useCallback)(
              function (n) {
                r({ page: 1 }), f(n);
              },
              [f, r],
            ),
            P = (0, v.useCallback)(
              function (n) {
                r({ page: 1 }), w(n);
              },
              [w, r],
            );
          return {
            data: _,
            loading: C,
            pagination: e,
            setPagination: r,
            searchString: d,
            handleInputChange: Z,
            available: k,
            handleSetAvailable: P,
          };
        },
        w = function () {
          var n,
            t = (0, d.NL)().getQueriesData({ queryKey: ['fetchChunkList'] });
          return null == t || null === (n = t.at(-1)) || void 0 === n
            ? void 0
            : n[1];
        },
        x = function () {
          var n,
            t = (0, d.NL)(),
            e = (0, y.fz)().setPaginationParams,
            r = (0, f.D)({
              mutationKey: ['deleteChunk'],
              mutationFn:
                ((n = i()(
                  a()().mark(function n(r) {
                    var u, i;
                    return a()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (n.next = 2), s.ZP.rm_chunk(r);
                          case 2:
                            return (
                              (u = n.sent),
                              0 === (i = u.data).code &&
                                (e(1),
                                t.invalidateQueries({
                                  queryKey: ['fetchChunkList'],
                                })),
                              n.abrupt('return', null == i ? void 0 : i.code)
                            );
                          case 6:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                )),
                function (t) {
                  return n.apply(this, arguments);
                }),
            });
          return {
            data: r.data,
            loading: r.isPending,
            deleteChunk: r.mutateAsync,
          };
        },
        b = function () {
          var n,
            t = (0, g.$G)().t,
            e = (0, d.NL)(),
            r = (0, f.D)({
              mutationKey: ['switchChunk'],
              mutationFn:
                ((n = i()(
                  a()().mark(function n(r) {
                    var u, i;
                    return a()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (n.next = 2), s.ZP.switch_chunk(r);
                          case 2:
                            return (
                              (u = n.sent),
                              0 === (i = u.data).code &&
                                (h.ZP.success(t('message.modified')),
                                e.invalidateQueries({
                                  queryKey: ['fetchChunkList'],
                                })),
                              n.abrupt('return', null == i ? void 0 : i.code)
                            );
                          case 6:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                )),
                function (t) {
                  return n.apply(this, arguments);
                }),
            });
          return {
            data: r.data,
            loading: r.isPending,
            switchChunk: r.mutateAsync,
          };
        },
        _ = function () {
          var n,
            t = (0, g.$G)().t,
            e = (0, d.NL)(),
            r = (0, f.D)({
              mutationKey: ['createChunk'],
              mutationFn:
                ((n = i()(
                  a()().mark(function n(r) {
                    var u, i, c;
                    return a()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (u = s.ZP.create_chunk),
                              r.chunk_id && (u = s.ZP.set_chunk),
                              (n.next = 4),
                              u(r)
                            );
                          case 4:
                            return (
                              (i = n.sent),
                              0 === (c = i.data).code &&
                                (h.ZP.success(t('message.created')),
                                e.invalidateQueries({
                                  queryKey: ['fetchChunkList'],
                                })),
                              n.abrupt('return', null == c ? void 0 : c.code)
                            );
                          case 8:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                )),
                function (t) {
                  return n.apply(this, arguments);
                }),
            });
          return {
            data: r.data,
            loading: r.isPending,
            createChunk: r.mutateAsync,
          };
        },
        C = function (n) {
          var t,
            e = (0, l.a)({
              queryKey: ['fetchChunk'],
              enabled: !!n,
              initialData: {},
              gcTime: 0,
              queryFn:
                ((t = i()(
                  a()().mark(function t() {
                    var e;
                    return a()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), s.ZP.get_chunk({ chunk_id: n })
                            );
                          case 2:
                            return (e = t.sent), t.abrupt('return', e);
                          case 4:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            });
          return e.data;
        };
    },
    4772: function (n, t, e) {
      'use strict';
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = e(86250),
        a = e(38925),
        u = e(86968),
        i = (e(62435), 'errorWrapper___QfVXQ'),
        c = e(86074),
        o = function (n) {
          var t = n.children,
            e = (0, u.qM)('fileManager').t;
          return (0, c.jsx)(r.Z, {
            align: 'center',
            justify: 'center',
            className: i,
            children: (0, c.jsx)(a.Z, {
              type: 'error',
              message: (0, c.jsx)('h2', { children: t || e('fileError') }),
            }),
          });
        };
    },
    5089: function (n, t, e) {
      'use strict';
      e.d(t, {
        Ep: function () {
          return d;
        },
        Or: function () {
          return f;
        },
        RT: function () {
          return s;
        },
        YC: function () {
          return l;
        },
        q1: function () {
          return o;
        },
      });
      var r = e(19632),
        a = e.n(r),
        u = e(40169),
        i = e(96486),
        c = e(57632),
        o = function (n, t) {
          var e;
          return Array.isArray(null == n ? void 0 : n.positions) &&
            n.positions.every(function (n) {
              return Array.isArray(n);
            })
            ? null == n || null === (e = n.positions) || void 0 === e
              ? void 0
              : e.map(function (e) {
                  var r = {
                    width: t.width,
                    height: t.height,
                    x1: e[1],
                    x2: e[2],
                    y1: e[3],
                    y2: e[4],
                  };
                  return {
                    id: (0, c.Z)(),
                    comment: { text: '', emoji: '' },
                    content: {
                      text:
                        (0, i.get)(n, 'content_with_weight') ||
                        (0, i.get)(n, 'content', ''),
                    },
                    position: { boundingRect: r, rects: [r], pageNumber: e[0] },
                  };
                })
            : [];
        },
        s = function (n) {
          var t;
          return null !==
            (t =
              null == n
                ? void 0
                : n.slice(n.lastIndexOf('.') + 1).toLowerCase()) && void 0 !== t
            ? t
            : '';
        },
        l = function (n) {
          return n.split('\n').length;
        },
        d = function (n) {
          return u.ru.includes(n);
        },
        f = function (n) {
          return [].concat(a()(u.rU), ['svg']).some(function (t) {
            return t === n;
          });
        };
    },
    93835: function (n, t, e) {
      'use strict';
      e.d(t, {
        r: function () {
          return s;
        },
      });
      var r = e(62435),
        a = Object.defineProperty,
        u = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable,
        o = (n, t, e) =>
          t in n
            ? a(n, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              })
            : (n[t] = e);
      const s = (n) =>
        r.createElement(
          'svg',
          ((n, t) => {
            for (var e in t || (t = {})) i.call(t, e) && o(n, e, t[e]);
            if (u) for (var e of u(t)) c.call(t, e) && o(n, e, t[e]);
            return n;
          })(
            {
              width: 20,
              height: 20,
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            n,
          ),
          r.createElement('path', {
            d: 'M5 10h10M2.5 5h15m-10 10h5',
            stroke: '#344054',
            strokeWidth: 1.667,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        );
    },
    64838: function () {},
    27922: function () {},
    15212: function () {},
    85777: function () {},
    76929: function () {},
    45036: function () {},
  },
]);
//# sourceMappingURL=1306.448da428.async.js.map
