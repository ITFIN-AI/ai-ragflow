'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [7509],
  {
    57509: function (e, a, n) {
      n.d(a, {
        g: function () {
          return A;
        },
      });
      var s = n(9783),
        r = n.n(s),
        t = n(5574),
        l = n.n(t),
        i = n(97857),
        c = n.n(i),
        o = n(13769),
        u = n.n(o),
        d = n(98814),
        f = n(64998),
        m = n(9404),
        p = n(62435),
        v = n(57636),
        x = n(27080),
        h = n(86074),
        N = ['className'],
        j = ['className'],
        g = ['className'],
        b = ['className', 'isActive', 'size'],
        w = ['className'],
        y = ['className'],
        C = ['className'],
        k = function (e) {
          var a = e.className,
            n = u()(e, N);
          return (0, h.jsx)(
            'nav',
            c()(
              {
                role: 'navigation',
                'aria-label': 'pagination',
                className: (0, x.cn)('mx-auto flex w-full justify-center', a),
              },
              n,
            ),
          );
        };
      k.displayName = 'Pagination';
      var z = p.forwardRef(function (e, a) {
        var n = e.className,
          s = u()(e, j);
        return (0, h.jsx)(
          'ul',
          c()(
            {
              ref: a,
              className: (0, x.cn)('flex flex-row items-center gap-1', n),
            },
            s,
          ),
        );
      });
      z.displayName = 'PaginationContent';
      var R = p.forwardRef(function (e, a) {
        var n = e.className,
          s = u()(e, g);
        return (0, h.jsx)(
          'li',
          c()({ ref: a, className: (0, x.cn)('', n) }, s),
        );
      });
      R.displayName = 'PaginationItem';
      var P = function (e) {
        var a = e.className,
          n = e.isActive,
          s = e.size,
          r = void 0 === s ? 'icon' : s,
          t = u()(e, b);
        return (0, h.jsx)(
          'a',
          c()(
            {
              'aria-current': n ? 'page' : void 0,
              className: (0, x.cn)(
                'size-8',
                (0, v.dc)({ variant: n ? 'outline' : 'ghost', size: r }),
                a,
              ),
            },
            t,
          ),
        );
      };
      P.displayName = 'PaginationLink';
      var S = function (e) {
        var a = e.className,
          n = u()(e, w);
        return (0, h.jsx)(
          P,
          c()(
            c()(
              {
                'aria-label': 'Go to previous page',
                size: 'default',
                className: (0, x.cn)('gap-1 pl-2.5', a),
              },
              n,
            ),
            {},
            { children: (0, h.jsx)(d.Z, { className: 'h-4 w-4' }) },
          ),
        );
      };
      S.displayName = 'PaginationPrevious';
      var Z = function (e) {
        var a = e.className,
          n = u()(e, y);
        return (0, h.jsx)(
          P,
          c()(
            c()(
              {
                'aria-label': 'Go to next page',
                size: 'default',
                className: (0, x.cn)('gap-1 pr-2.5', a),
              },
              n,
            ),
            {},
            { children: (0, h.jsx)(f.Z, { className: 'h-4 w-4' }) },
          ),
        );
      };
      Z.displayName = 'PaginationNext';
      var _ = function (e) {
        var a = e.className,
          n = u()(e, C);
        return (0, h.jsxs)(
          'span',
          c()(
            c()(
              {
                'aria-hidden': !0,
                className: (0, x.cn)(
                  'flex h-9 w-9 items-center justify-center',
                  a,
                ),
              },
              n,
            ),
            {},
            {
              children: [
                (0, h.jsx)(m.Z, { className: 'h-4 w-4' }),
                (0, h.jsx)('span', {
                  className: 'sr-only',
                  children: 'More pages',
                }),
              ],
            },
          ),
        );
      };
      _.displayName = 'PaginationEllipsis';
      var M = n(84586);
      function A(e) {
        var a = e.current,
          n = void 0 === a ? 1 : a,
          s = e.pageSize,
          t = void 0 === s ? 10 : s,
          i = e.total,
          c = void 0 === i ? 0 : i,
          o = e.onChange,
          u = e.showSizeChanger,
          d = void 0 === u || u,
          f = (0, p.useState)(1),
          m = l()(f, 2),
          v = m[0],
          N = m[1],
          j = (0, p.useState)('10'),
          g = l()(j, 2),
          b = g[0],
          w = g[1],
          y = (0, p.useMemo)(function () {
            return [10, 20, 50, 100].map(function (e) {
              return {
                label: (0, h.jsxs)('span', { children: [e, ' / page'] }),
                value: e.toString(),
              };
            });
          }, []),
          C = (0, p.useMemo)(
            function () {
              var e = Math.ceil(c / t);
              return new Array(e).fill(0).map(function (e, a) {
                return a + 1;
              });
            },
            [t, c],
          ),
          A = (0, p.useCallback)(
            function (e) {
              null == o || o(e, Number(b));
            },
            [b, o],
          ),
          G = (0, p.useCallback)(
            function () {
              N(function (e) {
                var a = e - 1;
                return a > 0 ? (A(a), a) : (A(e), e);
              });
            },
            [A],
          ),
          D = (0, p.useCallback)(
            function (e) {
              return function () {
                A(e), N(e);
              };
            },
            [A],
          ),
          E = (0, p.useCallback)(
            function () {
              N(function (e) {
                var a = e + 1;
                return a <= C.length ? (A(a), a) : (A(e), e);
              });
            },
            [A, C.length],
          ),
          I = (0, p.useCallback)(
            function (e) {
              null == o || o(v, Number(e)), w(e);
            },
            [v, o],
          );
        return (
          (0, p.useEffect)(
            function () {
              N(n);
            },
            [n],
          ),
          (0, p.useEffect)(
            function () {
              w(t.toString());
            },
            [t],
          ),
          (0, h.jsxs)('section', {
            className:
              'flex items-center justify-end text-text-sub-title-invert ',
            children: [
              (0, h.jsxs)('span', {
                className: 'mr-4',
                children: ['Total ', c],
              }),
              (0, h.jsx)(k, {
                className: 'w-auto mx-0 mr-4',
                children: (0, h.jsxs)(z, {
                  children: [
                    (0, h.jsx)(R, { children: (0, h.jsx)(S, { onClick: G }) }),
                    C.map(function (e) {
                      return (0, h.jsx)(
                        R,
                        {
                          className: (0, x.cn)(
                            r()(
                              {},
                              'bg-background-header-bar rounded-md text-text-title',
                              v === e,
                            ),
                          ),
                          children: (0, h.jsx)(P, {
                            onClick: D(e),
                            className: 'size-8',
                            children: e,
                          }),
                        },
                        e,
                      );
                    }),
                    (0, h.jsx)(R, { children: (0, h.jsx)(_, {}) }),
                    (0, h.jsx)(R, { children: (0, h.jsx)(Z, { onClick: E }) }),
                  ],
                }),
              }),
              d &&
                (0, h.jsx)(M.vM, {
                  options: y,
                  value: b,
                  onChange: I,
                  triggerClassName: 'bg-background-header-bar',
                }),
            ],
          })
        );
      }
    },
    84586: function (e, a, n) {
      n.d(a, {
        Bw: function () {
          return Z;
        },
        DI: function () {
          return k;
        },
        Ph: function () {
          return C;
        },
        Ql: function () {
          return M;
        },
        i4: function () {
          return R;
        },
        ki: function () {
          return z;
        },
        n5: function () {
          return _;
        },
        vM: function () {
          return A;
        },
      });
      var s = n(5574),
        r = n.n(s),
        t = n(97857),
        l = n.n(t),
        i = n(13769),
        c = n.n(i),
        o = n(12291),
        u = n(41352),
        d = n(8971),
        f = n(84979),
        m = n(13742),
        p = n(62435),
        v = n(27080),
        x = n(86074),
        h = ['className', 'children', 'value', 'onReset', 'allowClear'],
        N = ['className'],
        j = ['className'],
        g = ['className', 'children', 'position'],
        b = ['className'],
        w = ['className', 'children'],
        y = ['className'],
        C = o.fC,
        k = o.ZA,
        z = o.B4,
        R = p.forwardRef(function (e, a) {
          var n = e.className,
            s = e.children,
            r = e.value,
            t = e.onReset,
            i = e.allowClear,
            f = c()(e, h);
          return (0, x.jsxs)(
            o.xz,
            l()(
              l()(
                {
                  ref: a,
                  className: (0, v.cn)(
                    'flex h-8 w-full items-center justify-between rounded-md border border-input bg-colors-background-inverse-weak px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
                    n,
                  ),
                },
                f,
              ),
              {},
              {
                children: [
                  s,
                  (0, x.jsx)(o.JO, {
                    asChild: !0,
                    onPointerDown: function (e) {
                      e.stopPropagation();
                    },
                    children:
                      r && i
                        ? (0, x.jsx)(u.Z, {
                            className: 'h-4 w-4 opacity-50 cursor-pointer',
                            onClick: t,
                          })
                        : (0, x.jsx)(d.Z, { className: 'h-4 w-4 opacity-50' }),
                  }),
                ],
              },
            ),
          );
        });
      R.displayName = o.xz.displayName;
      var P = p.forwardRef(function (e, a) {
        var n = e.className,
          s = c()(e, N);
        return (0, x.jsx)(
          o.u_,
          l()(
            l()(
              {
                ref: a,
                className: (0, v.cn)(
                  'flex cursor-default items-center justify-center py-1',
                  n,
                ),
              },
              s,
            ),
            {},
            { children: (0, x.jsx)(f.Z, { className: 'h-4 w-4' }) },
          ),
        );
      });
      P.displayName = o.u_.displayName;
      var S = p.forwardRef(function (e, a) {
        var n = e.className,
          s = c()(e, j);
        return (0, x.jsx)(
          o.$G,
          l()(
            l()(
              {
                ref: a,
                className: (0, v.cn)(
                  'flex cursor-default items-center justify-center py-1',
                  n,
                ),
              },
              s,
            ),
            {},
            { children: (0, x.jsx)(d.Z, { className: 'h-4 w-4' }) },
          ),
        );
      });
      S.displayName = o.$G.displayName;
      var Z = p.forwardRef(function (e, a) {
        var n = e.className,
          s = e.children,
          r = e.position,
          t = void 0 === r ? 'popper' : r,
          i = c()(e, g);
        return (0, x.jsx)(o.h_, {
          children: (0, x.jsxs)(
            o.VY,
            l()(
              l()(
                {
                  ref: a,
                  className: (0, v.cn)(
                    'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    'popper' === t &&
                      'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
                    n,
                  ),
                  position: t,
                },
                i,
              ),
              {},
              {
                children: [
                  (0, x.jsx)(P, {}),
                  (0, x.jsx)(o.l_, {
                    className: (0, v.cn)(
                      'p-1',
                      'popper' === t &&
                        'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
                    ),
                    children: s,
                  }),
                  (0, x.jsx)(S, {}),
                ],
              },
            ),
          ),
        });
      });
      Z.displayName = o.VY.displayName;
      var _ = p.forwardRef(function (e, a) {
        var n = e.className,
          s = c()(e, b);
        return (0, x.jsx)(
          o.__,
          l()(
            {
              ref: a,
              className: (0, v.cn)('py-1.5 pl-8 pr-2 text-sm font-semibold', n),
            },
            s,
          ),
        );
      });
      _.displayName = o.__.displayName;
      var M = p.forwardRef(function (e, a) {
        var n = e.className,
          s = e.children,
          r = c()(e, w);
        return (0, x.jsxs)(
          o.ck,
          l()(
            l()(
              {
                ref: a,
                className: (0, v.cn)(
                  'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  n,
                ),
              },
              r,
            ),
            {},
            {
              children: [
                (0, x.jsx)('span', {
                  className:
                    'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
                  children: (0, x.jsx)(o.wU, {
                    children: (0, x.jsx)(m.Z, { className: 'h-4 w-4' }),
                  }),
                }),
                (0, x.jsx)(o.eT, { children: s }),
              ],
            },
          ),
        );
      });
      (M.displayName = o.ck.displayName),
        (p.forwardRef(function (e, a) {
          var n = e.className,
            s = c()(e, y);
          return (0, x.jsx)(
            o.Z0,
            l()(
              { ref: a, className: (0, v.cn)('-mx-1 my-1 h-px bg-muted', n) },
              s,
            ),
          );
        }).displayName = o.Z0.displayName);
      var A = (0, p.forwardRef)(function (e, a) {
        var n = e.value,
          s = e.onChange,
          t = e.FormControlComponent,
          i = e.options,
          c = void 0 === i ? [] : i,
          o = e.allowClear,
          u = e.placeholder,
          d = e.contentProps,
          f = void 0 === d ? {} : d,
          m = e.triggerClassName,
          v = e.onlyShowSelectedIcon,
          h = void 0 !== v && v,
          N = p.useState(+new Date()),
          j = r()(N, 2),
          g = j[0],
          b = j[1],
          w = p.useState(n),
          y = r()(w, 2),
          P = y[0],
          S = y[1],
          A =
            t ||
            function (e) {
              var a = e.children;
              return (0, x.jsx)('div', { children: a });
            },
          G = (0, p.useCallback)(
            function (e) {
              S(e), null == s || s(e);
            },
            [s],
          ),
          D = (0, p.useCallback)(
            function () {
              G(void 0), b(+new Date());
            },
            [G],
          );
        (0, p.useEffect)(
          function () {
            S(function (e) {
              return e !== n ? n : e;
            });
          },
          [n],
        );
        var E = p.useMemo(
          function () {
            var e = c;
            c.some(function (e) {
              return !('value' in e);
            }) &&
              (e = c.reduce(function (e, a) {
                var n;
                return e.concat(
                  null !== (n = null == a ? void 0 : a.options) && void 0 !== n
                    ? n
                    : [],
                );
              }, []));
            var a = e.find(function (e) {
              return e.value === P;
            });
            return h
              ? null == a
                ? void 0
                : a.icon
              : null == a
                ? void 0
                : a.label;
          },
          [h, c, P],
        );
        return (0, x.jsxs)(
          C,
          {
            onValueChange: G,
            value: P,
            children: [
              (0, x.jsx)(A, {
                children: (0, x.jsx)(R, {
                  value: P,
                  onReset: D,
                  allowClear: o,
                  ref: a,
                  className: m,
                  children: (0, x.jsx)(z, { placeholder: u, children: E }),
                }),
              }),
              (0, x.jsx)(
                Z,
                l()(
                  l()({}, f),
                  {},
                  {
                    children: c.map(function (e, a) {
                      return 'value' in e
                        ? (0, x.jsx)(
                            M,
                            {
                              value: e.value,
                              disabled: e.disabled,
                              children: (0, x.jsxs)('div', {
                                className: 'flex items-center gap-1',
                                children: [e.icon, e.label],
                              }),
                            },
                            e.value,
                          )
                        : (0, x.jsxs)(
                            k,
                            {
                              children: [
                                (0, x.jsx)(_, {
                                  className: 'pl-2',
                                  children: e.label,
                                }),
                                e.options.map(function (e) {
                                  return (0, x.jsx)(
                                    M,
                                    {
                                      value: e.value,
                                      disabled: e.disabled,
                                      children: e.label,
                                    },
                                    e.value,
                                  );
                                }),
                              ],
                            },
                            a,
                          );
                    }),
                  },
                ),
              ),
            ],
          },
          g,
        );
      });
      A.displayName = 'RAGFlowSelect';
    },
  },
]);
//# sourceMappingURL=7509.6a66db84.async.js.map
