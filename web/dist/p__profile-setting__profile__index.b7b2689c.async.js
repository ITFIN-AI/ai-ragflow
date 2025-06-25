/*! For license information please see p__profile-setting__profile__index.b7b2689c.async.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [5937],
  {
    16165: function (e, t, a) {
      'use strict';
      var n = a(87462),
        r = a(1413),
        i = a(4942),
        s = a(45987),
        o = a(62435),
        c = a(93967),
        u = a.n(c),
        l = a(42550),
        d = a(63017),
        m = a(41755),
        f = [
          'className',
          'component',
          'viewBox',
          'spin',
          'rotate',
          'tabIndex',
          'onClick',
          'children',
        ],
        p = o.forwardRef(function (e, t) {
          var a = e.className,
            c = e.component,
            p = e.viewBox,
            C = e.spin,
            v = e.rotate,
            T = e.tabIndex,
            g = e.onClick,
            h = e.children,
            U = (0, s.Z)(e, f),
            A = o.useRef(),
            x = (0, l.x1)(A, t);
          (0, m.Kp)(
            Boolean(c || h),
            'Should have `component` prop or `children`.',
          ),
            (0, m.C3)(A);
          var w = o.useContext(d.Z),
            y = w.prefixCls,
            b = void 0 === y ? 'anticon' : y,
            k = w.rootClassName,
            N = u()(k, b, a),
            _ = u()((0, i.Z)({}, ''.concat(b, '-spin'), !!C)),
            j = v
              ? {
                  msTransform: 'rotate('.concat(v, 'deg)'),
                  transform: 'rotate('.concat(v, 'deg)'),
                }
              : void 0,
            P = (0, r.Z)(
              (0, r.Z)({}, m.vD),
              {},
              { className: _, style: j, viewBox: p },
            );
          p || delete P.viewBox;
          var Z = T;
          return (
            void 0 === Z && g && (Z = -1),
            o.createElement(
              'span',
              (0, n.Z)({ role: 'img' }, U, {
                ref: x,
                tabIndex: Z,
                onClick: g,
                className: N,
              }),
              c
                ? o.createElement(c, P, h)
                : h
                  ? ((0, m.Kp)(
                      Boolean(p) ||
                        (1 === o.Children.count(h) &&
                          o.isValidElement(h) &&
                          'use' === o.Children.only(h).type),
                      'Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon.',
                    ),
                    o.createElement('svg', (0, n.Z)({}, P, { viewBox: p }), h))
                  : null,
            )
          );
        });
      (p.displayName = 'AntdIcon'), (t.Z = p);
    },
    70101: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = a(87462),
        r = a(62435),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M692.8 412.7l.2-.2-34.6-44.3a7.97 7.97 0 00-11.2-1.4l-50.4 39.3-70.5-90.1a7.97 7.97 0 00-11.2-1.4l-37.9 29.7a7.97 7.97 0 00-1.4 11.2l70.5 90.2-.2.1 34.6 44.3c2.7 3.5 7.7 4.1 11.2 1.4l50.4-39.3 64.1 82c2.7 3.5 7.7 4.1 11.2 1.4l37.9-29.6c3.5-2.7 4.1-7.7 1.4-11.2l-64.1-82.1zM608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5L114.3 856.1a8.03 8.03 0 000 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6C473 696.1 537.7 720 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644s-118.2-23.7-161.2-66.8C403.7 534.2 380 476.9 380 416s23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8s118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2s-23.7 118.2-66.8 161.2z',
                },
              },
            ],
          },
          name: 'monitor',
          theme: 'outlined',
        },
        s = a(84089),
        o = function (e, t) {
          return r.createElement(s.Z, (0, n.Z)({}, e, { ref: t, icon: i }));
        };
      var c = r.forwardRef(o);
    },
    5715: function (e, t, a) {
      'use strict';
      a.d(t, {
        F$: function () {
          return C;
        },
        Q5: function () {
          return v;
        },
        qE: function () {
          return p;
        },
      });
      var n = a(97857),
        r = a.n(n),
        i = a(13769),
        s = a.n(i),
        o = a(10952),
        c = a(62435),
        u = a(27080),
        l = a(86074),
        d = ['className'],
        m = ['className'],
        f = ['className'],
        p = c.forwardRef(function (e, t) {
          var a = e.className,
            n = s()(e, d);
          return (0, l.jsx)(
            o.fC,
            r()(
              {
                ref: t,
                className: (0, u.cn)(
                  'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
                  a,
                ),
              },
              n,
            ),
          );
        });
      p.displayName = o.fC.displayName;
      var C = c.forwardRef(function (e, t) {
        var a = e.className,
          n = s()(e, m);
        return (0, l.jsx)(
          o.Ee,
          r()(
            { ref: t, className: (0, u.cn)('aspect-square h-full w-full', a) },
            n,
          ),
        );
      });
      C.displayName = o.Ee.displayName;
      var v = c.forwardRef(function (e, t) {
        var a = e.className,
          n = s()(e, f);
        return (0, l.jsx)(
          o.NY,
          r()(
            {
              ref: t,
              className: (0, u.cn)(
                'flex h-full w-full items-center justify-center rounded-full bg-muted',
                a,
              ),
            },
            n,
          ),
        );
      });
      v.displayName = o.NY.displayName;
    },
    80499: function (e, t, a) {
      'use strict';
      a.d(t, {
        NI: function () {
          return _;
        },
        Wi: function () {
          return w;
        },
        l0: function () {
          return U;
        },
        lX: function () {
          return N;
        },
        pf: function () {
          return j;
        },
        xJ: function () {
          return k;
        },
        zG: function () {
          return P;
        },
      });
      var n = a(13769),
        r = a.n(n),
        i = a(97857),
        s = a.n(i),
        o = a(49677),
        c = a.n(o),
        u = a(88426),
        l = a(62435),
        d = a(87536),
        m = a(65038),
        f = a(27080),
        p = a(84146),
        C = a(86074),
        v = ['className'],
        T = ['className', 'tooltip'],
        g = ['className'],
        h = ['className', 'children'],
        U = d.RV,
        A = l.createContext({}),
        x = l.createContext({}),
        w = function (e) {
          var t = Object.assign({}, (c()(e), e));
          return (0, C.jsx)(x.Provider, {
            value: { name: t.name },
            children: (0, C.jsx)(d.Qr, s()({}, t)),
          });
        },
        y = function () {
          var e = l.useContext(x),
            t = l.useContext(A),
            a = (0, d.Gc)(),
            n = a.getFieldState,
            r = a.formState,
            i = n(e.name, r);
          if (!e)
            throw new Error('useFormField should be used within <FormField>');
          var o = t.id;
          return s()(
            {
              id: o,
              name: e.name,
              formItemId: ''.concat(o, '-form-item'),
              formDescriptionId: ''.concat(o, '-form-item-description'),
              formMessageId: ''.concat(o, '-form-item-message'),
            },
            i,
          );
        },
        b = l.forwardRef(function (e, t) {
          var a = e.className,
            n = r()(e, v),
            i = l.useId();
          return (0, C.jsx)(A.Provider, {
            value: { id: i },
            children: (0, C.jsx)(
              'div',
              s()({ ref: t, className: (0, f.cn)('space-y-2', a) }, n),
            ),
          });
        });
      b.displayName = 'FormItem';
      var k = l.memo(b),
        N = l.forwardRef(function (e, t) {
          var a = e.className,
            n = e.tooltip,
            i = r()(e, T),
            o = y(),
            c = o.error,
            u = o.formItemId;
          return (0, C.jsxs)(
            m._,
            s()(
              s()(
                {
                  ref: t,
                  className: (0, f.cn)(
                    c && 'text-destructive',
                    a,
                    'flex pb-0.5',
                  ),
                  htmlFor: u,
                },
                i,
              ),
              {},
              { children: [i.children, n && (0, C.jsx)(p.Z4, { tooltip: n })] },
            ),
          );
        });
      N.displayName = 'FormLabel';
      var _ = l.forwardRef(function (e, t) {
        var a = Object.assign({}, (c()(e), e)),
          n = y(),
          r = n.error,
          i = n.formItemId,
          o = n.formDescriptionId,
          l = n.formMessageId;
        return (0, C.jsx)(
          u.g7,
          s()(
            {
              ref: t,
              id: i,
              'aria-describedby': r
                ? ''.concat(o, ' ').concat(l)
                : ''.concat(o),
              'aria-invalid': !!r,
            },
            a,
          ),
        );
      });
      _.displayName = 'FormControl';
      var j = l.forwardRef(function (e, t) {
        var a = e.className,
          n = r()(e, g),
          i = y().formDescriptionId;
        return (0, C.jsx)(
          'p',
          s()(
            {
              ref: t,
              id: i,
              className: (0, f.cn)('text-sm text-muted-foreground', a),
            },
            n,
          ),
        );
      });
      j.displayName = 'FormDescription';
      var P = l.forwardRef(function (e, t) {
        var a = e.className,
          n = e.children,
          i = r()(e, h),
          o = y(),
          c = o.error,
          u = o.formMessageId,
          l = c ? String(null == c ? void 0 : c.message) : n;
        return l
          ? (0, C.jsx)(
              'p',
              s()(
                s()(
                  {
                    ref: t,
                    id: u,
                    className: (0, f.cn)(
                      'text-sm font-medium text-destructive',
                      a,
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
    65038: function (e, t, a) {
      'use strict';
      a.d(t, {
        _: function () {
          return p;
        },
      });
      var n = a(97857),
        r = a.n(n),
        i = a(13769),
        s = a.n(i),
        o = a(49102),
        c = a(45139),
        u = a(62435),
        l = a(27080),
        d = a(86074),
        m = ['className'],
        f = (0, c.j)(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        ),
        p = u.forwardRef(function (e, t) {
          var a = e.className,
            n = s()(e, m);
          return (0, d.jsx)(
            o.f,
            r()({ ref: t, className: (0, l.cn)(f(), a) }, n),
          );
        });
      p.displayName = o.f.displayName;
    },
    84586: function (e, t, a) {
      'use strict';
      a.d(t, {
        Bw: function () {
          return P;
        },
        DI: function () {
          return b;
        },
        Ph: function () {
          return y;
        },
        Ql: function () {
          return S;
        },
        i4: function () {
          return N;
        },
        ki: function () {
          return k;
        },
        n5: function () {
          return Z;
        },
        vM: function () {
          return E;
        },
      });
      var n = a(5574),
        r = a.n(n),
        i = a(97857),
        s = a.n(i),
        o = a(13769),
        c = a.n(o),
        u = a(12291),
        l = a(41352),
        d = a(8971),
        m = a(84979),
        f = a(13742),
        p = a(62435),
        C = a(27080),
        v = a(86074),
        T = ['className', 'children', 'value', 'onReset', 'allowClear'],
        g = ['className'],
        h = ['className'],
        U = ['className', 'children', 'position'],
        A = ['className'],
        x = ['className', 'children'],
        w = ['className'],
        y = u.fC,
        b = u.ZA,
        k = u.B4,
        N = p.forwardRef(function (e, t) {
          var a = e.className,
            n = e.children,
            r = e.value,
            i = e.onReset,
            o = e.allowClear,
            m = c()(e, T);
          return (0, v.jsxs)(
            u.xz,
            s()(
              s()(
                {
                  ref: t,
                  className: (0, C.cn)(
                    'flex h-8 w-full items-center justify-between rounded-md border border-input bg-colors-background-inverse-weak px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
                    a,
                  ),
                },
                m,
              ),
              {},
              {
                children: [
                  n,
                  (0, v.jsx)(u.JO, {
                    asChild: !0,
                    onPointerDown: function (e) {
                      e.stopPropagation();
                    },
                    children:
                      r && o
                        ? (0, v.jsx)(l.Z, {
                            className: 'h-4 w-4 opacity-50 cursor-pointer',
                            onClick: i,
                          })
                        : (0, v.jsx)(d.Z, { className: 'h-4 w-4 opacity-50' }),
                  }),
                ],
              },
            ),
          );
        });
      N.displayName = u.xz.displayName;
      var _ = p.forwardRef(function (e, t) {
        var a = e.className,
          n = c()(e, g);
        return (0, v.jsx)(
          u.u_,
          s()(
            s()(
              {
                ref: t,
                className: (0, C.cn)(
                  'flex cursor-default items-center justify-center py-1',
                  a,
                ),
              },
              n,
            ),
            {},
            { children: (0, v.jsx)(m.Z, { className: 'h-4 w-4' }) },
          ),
        );
      });
      _.displayName = u.u_.displayName;
      var j = p.forwardRef(function (e, t) {
        var a = e.className,
          n = c()(e, h);
        return (0, v.jsx)(
          u.$G,
          s()(
            s()(
              {
                ref: t,
                className: (0, C.cn)(
                  'flex cursor-default items-center justify-center py-1',
                  a,
                ),
              },
              n,
            ),
            {},
            { children: (0, v.jsx)(d.Z, { className: 'h-4 w-4' }) },
          ),
        );
      });
      j.displayName = u.$G.displayName;
      var P = p.forwardRef(function (e, t) {
        var a = e.className,
          n = e.children,
          r = e.position,
          i = void 0 === r ? 'popper' : r,
          o = c()(e, U);
        return (0, v.jsx)(u.h_, {
          children: (0, v.jsxs)(
            u.VY,
            s()(
              s()(
                {
                  ref: t,
                  className: (0, C.cn)(
                    'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    'popper' === i &&
                      'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
                    a,
                  ),
                  position: i,
                },
                o,
              ),
              {},
              {
                children: [
                  (0, v.jsx)(_, {}),
                  (0, v.jsx)(u.l_, {
                    className: (0, C.cn)(
                      'p-1',
                      'popper' === i &&
                        'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
                    ),
                    children: n,
                  }),
                  (0, v.jsx)(j, {}),
                ],
              },
            ),
          ),
        });
      });
      P.displayName = u.VY.displayName;
      var Z = p.forwardRef(function (e, t) {
        var a = e.className,
          n = c()(e, A);
        return (0, v.jsx)(
          u.__,
          s()(
            {
              ref: t,
              className: (0, C.cn)('py-1.5 pl-8 pr-2 text-sm font-semibold', a),
            },
            n,
          ),
        );
      });
      Z.displayName = u.__.displayName;
      var S = p.forwardRef(function (e, t) {
        var a = e.className,
          n = e.children,
          r = c()(e, x);
        return (0, v.jsxs)(
          u.ck,
          s()(
            s()(
              {
                ref: t,
                className: (0, C.cn)(
                  'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  a,
                ),
              },
              r,
            ),
            {},
            {
              children: [
                (0, v.jsx)('span', {
                  className:
                    'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
                  children: (0, v.jsx)(u.wU, {
                    children: (0, v.jsx)(f.Z, { className: 'h-4 w-4' }),
                  }),
                }),
                (0, v.jsx)(u.eT, { children: n }),
              ],
            },
          ),
        );
      });
      (S.displayName = u.ck.displayName),
        (p.forwardRef(function (e, t) {
          var a = e.className,
            n = c()(e, w);
          return (0, v.jsx)(
            u.Z0,
            s()(
              { ref: t, className: (0, C.cn)('-mx-1 my-1 h-px bg-muted', a) },
              n,
            ),
          );
        }).displayName = u.Z0.displayName);
      var E = (0, p.forwardRef)(function (e, t) {
        var a = e.value,
          n = e.onChange,
          i = e.FormControlComponent,
          o = e.options,
          c = void 0 === o ? [] : o,
          u = e.allowClear,
          l = e.placeholder,
          d = e.contentProps,
          m = void 0 === d ? {} : d,
          f = e.triggerClassName,
          C = e.onlyShowSelectedIcon,
          T = void 0 !== C && C,
          g = p.useState(+new Date()),
          h = r()(g, 2),
          U = h[0],
          A = h[1],
          x = p.useState(a),
          w = r()(x, 2),
          _ = w[0],
          j = w[1],
          E =
            i ||
            function (e) {
              var t = e.children;
              return (0, v.jsx)('div', { children: t });
            },
          M = (0, p.useCallback)(
            function (e) {
              j(e), null == n || n(e);
            },
            [n],
          ),
          I = (0, p.useCallback)(
            function () {
              M(void 0), A(+new Date());
            },
            [M],
          );
        (0, p.useEffect)(
          function () {
            j(function (e) {
              return e !== a ? a : e;
            });
          },
          [a],
        );
        var F = p.useMemo(
          function () {
            var e = c;
            c.some(function (e) {
              return !('value' in e);
            }) &&
              (e = c.reduce(function (e, t) {
                var a;
                return e.concat(
                  null !== (a = null == t ? void 0 : t.options) && void 0 !== a
                    ? a
                    : [],
                );
              }, []));
            var t = e.find(function (e) {
              return e.value === _;
            });
            return T
              ? null == t
                ? void 0
                : t.icon
              : null == t
                ? void 0
                : t.label;
          },
          [T, c, _],
        );
        return (0, v.jsxs)(
          y,
          {
            onValueChange: M,
            value: _,
            children: [
              (0, v.jsx)(E, {
                children: (0, v.jsx)(N, {
                  value: _,
                  onReset: I,
                  allowClear: u,
                  ref: t,
                  className: f,
                  children: (0, v.jsx)(k, { placeholder: l, children: F }),
                }),
              }),
              (0, v.jsx)(
                P,
                s()(
                  s()({}, m),
                  {},
                  {
                    children: c.map(function (e, t) {
                      return 'value' in e
                        ? (0, v.jsx)(
                            S,
                            {
                              value: e.value,
                              disabled: e.disabled,
                              children: (0, v.jsxs)('div', {
                                className: 'flex items-center gap-1',
                                children: [e.icon, e.label],
                              }),
                            },
                            e.value,
                          )
                        : (0, v.jsxs)(
                            b,
                            {
                              children: [
                                (0, v.jsx)(Z, {
                                  className: 'pl-2',
                                  children: e.label,
                                }),
                                e.options.map(function (e) {
                                  return (0, v.jsx)(
                                    S,
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
                            t,
                          );
                    }),
                  },
                ),
              ),
            ],
          },
          U,
        );
      });
      E.displayName = 'RAGFlowSelect';
    },
    9450: function (e, t, a) {
      'use strict';
      a.d(t, {
        A4: function () {
          return s;
        },
        H7: function () {
          return n;
        },
        WS: function () {
          return i;
        },
        qh: function () {
          return r;
        },
        rQ: function () {
          return o;
        },
      });
      var n = 'user-setting',
        r = (function (e) {
          return (
            (e.Profile = 'profile'),
            (e.Password = 'password'),
            (e.Model = 'model'),
            (e.System = 'system'),
            (e.Api = 'api'),
            (e.Team = 'team'),
            (e.Logout = 'logout'),
            e
          );
        })({}),
        i = 'profile-setting',
        s = (function (e) {
          return (
            (e.Profile = 'profile'),
            (e.Plan = 'plan'),
            (e.Model = 'model'),
            (e.System = 'system'),
            (e.Api = 'api'),
            (e.Team = 'team'),
            (e.Prompt = 'prompt'),
            (e.Chunk = 'chunk'),
            (e.Logout = 'logout'),
            e
          );
        })({}),
        o = [
          'UTC-11\tPacific/Midway',
          'UTC-11\tPacific/Niue',
          'UTC-11\tPacific/Pago_Pago',
          'UTC-10\tAmerica/Adak',
          'UTC-10\tPacific/Honolulu',
          'UTC-10\tPacific/Rarotonga',
          'UTC-10\tPacific/Tahiti',
          'UTC-9:30\tPacific/Marquesas',
          'UTC-9\tAmerica/Anchorage',
          'UTC-9\tAmerica/Juneau',
          'UTC-9\tAmerica/Metlakatla',
          'UTC-9\tAmerica/Nome',
          'UTC-9\tAmerica/Sitka',
          'UTC-9\tAmerica/Yakutat',
          'UTC-9\tPacific/Gambier',
          'UTC-8\tAmerica/Los_Angeles',
          'UTC-8\tAmerica/Tijuana',
          'UTC-8\tAmerica/Vancouver',
          'UTC-8\tPacific/Pitcairn',
          'UTC-7\tAmerica/Boise',
          'UTC-7\tAmerica/Cambridge_Bay',
          'UTC-7\tAmerica/Ciudad_Juarez',
          'UTC-7\tAmerica/Creston',
          'UTC-7\tAmerica/Dawson',
          'UTC-7\tAmerica/Dawson_Creek',
          'UTC-7\tAmerica/Denver',
          'UTC-7\tAmerica/Edmonton',
          'UTC-7\tAmerica/Fort_Nelson',
          'UTC-7\tAmerica/Hermosillo',
          'UTC-7\tAmerica/Inuvik',
          'UTC-7\tAmerica/Mazatlan',
          'UTC-7\tAmerica/Phoenix',
          'UTC-7\tAmerica/Whitehorse',
          'UTC-7\tAmerica/Yellowknife',
          'UTC-6\tAmerica/Bahia_Banderas',
          'UTC-6\tAmerica/Belize',
          'UTC-6\tAmerica/Chicago',
          'UTC-6\tAmerica/Chihuahua',
          'UTC-6\tAmerica/Costa_Rica',
          'UTC-6\tAmerica/El_Salvador',
          'UTC-6\tAmerica/Guatemala',
          'UTC-6\tAmerica/Indiana/Knox',
          'UTC-6\tAmerica/Indiana/Tell_City',
          'UTC-6\tAmerica/Managua',
          'UTC-6\tAmerica/Matamoros',
          'UTC-6\tAmerica/Menominee',
          'UTC-6\tAmerica/Merida',
          'UTC-6\tAmerica/Mexico_City',
          'UTC-6\tAmerica/Monterrey',
          'UTC-6\tAmerica/North_Dakota/Beulah',
          'UTC-6\tAmerica/North_Dakota/Center',
          'UTC-6\tAmerica/North_Dakota/New_Salem',
          'UTC-6\tAmerica/Ojinaga',
          'UTC-6\tAmerica/Rankin_Inlet',
          'UTC-6\tAmerica/Regina',
          'UTC-6\tAmerica/Resolute',
          'UTC-6\tAmerica/Swift_Current',
          'UTC-6\tAmerica/Tegucigalpa',
          'UTC-6\tAmerica/Winnipeg',
          'UTC-6\tPacific/Easter',
          'UTC-6\tPacific/Galapagos',
          'UTC-5\tAmerica/Atikokan',
          'UTC-5\tAmerica/Bogota',
          'UTC-5\tAmerica/Cancun',
          'UTC-5\tAmerica/Cayman',
          'UTC-5\tAmerica/Detroit',
          'UTC-5\tAmerica/Eirunepe',
          'UTC-5\tAmerica/Grand_Turk',
          'UTC-5\tAmerica/Guayaquil',
          'UTC-5\tAmerica/Havana',
          'UTC-5\tAmerica/Indiana/Indianapolis',
          'UTC-5\tAmerica/Indiana/Marengo',
          'UTC-5\tAmerica/Indiana/Petersburg',
          'UTC-5\tAmerica/Indiana/Vevay',
          'UTC-5\tAmerica/Indiana/Vincennes',
          'UTC-5\tAmerica/Indiana/Winamac',
          'UTC-5\tAmerica/Iqaluit',
          'UTC-5\tAmerica/Jamaica',
          'UTC-5\tAmerica/Kentucky/Louisville',
          'UTC-5\tAmerica/Kentucky/Monticello',
          'UTC-5\tAmerica/Lima',
          'UTC-5\tAmerica/Nassau',
          'UTC-5\tAmerica/New_York',
          'UTC-5\tAmerica/Panama',
          'UTC-5\tAmerica/Port-au-Prince',
          'UTC-5\tAmerica/Rio_Branco',
          'UTC-5\tAmerica/Toronto',
          'UTC-4\tAmerica/Anguilla',
          'UTC-4\tAmerica/Antigua',
          'UTC-4\tAmerica/Aruba',
          'UTC-4\tAmerica/Asuncion',
          'UTC-4\tAmerica/Barbados',
          'UTC-4\tAmerica/Blanc-Sablon',
          'UTC-4\tAmerica/Boa_Vista',
          'UTC-4\tAmerica/Campo_Grande',
          'UTC-4\tAmerica/Caracas',
          'UTC-4\tAmerica/Cuiaba',
          'UTC-4\tAmerica/Curacao',
          'UTC-4\tAmerica/Dominica',
          'UTC-4\tAmerica/Glace_Bay',
          'UTC-4\tAmerica/Goose_Bay',
          'UTC-4\tAmerica/Grenada',
          'UTC-4\tAmerica/Guadeloupe',
          'UTC-4\tAmerica/Guyana',
          'UTC-4\tAmerica/Halifax',
          'UTC-4\tAmerica/Kralendijk',
          'UTC-4\tAmerica/La_Paz',
          'UTC-4\tAmerica/Lower_Princes',
          'UTC-4\tAmerica/Manaus',
          'UTC-4\tAmerica/Marigot',
          'UTC-4\tAmerica/Martinique',
          'UTC-4\tAmerica/Moncton',
          'UTC-4\tAmerica/Montserrat',
          'UTC-4\tAmerica/Porto_Velho',
          'UTC-4\tAmerica/Port_of_Spain',
          'UTC-4\tAmerica/Puerto_Rico',
          'UTC-4\tAmerica/Santiago',
          'UTC-4\tAmerica/Santo_Domingo',
          'UTC-4\tAmerica/St_Barthelemy',
          'UTC-4\tAmerica/St_Kitts',
          'UTC-4\tAmerica/St_Lucia',
          'UTC-4\tAmerica/St_Thomas',
          'UTC-4\tAmerica/St_Vincent',
          'UTC-4\tAmerica/Thule',
          'UTC-4\tAmerica/Tortola',
          'UTC-4\tAtlantic/Bermuda',
          'UTC-3:30\tAmerica/St_Johns',
          'UTC-3\tAmerica/Araguaina',
          'UTC-3\tAmerica/Argentina/Buenos_Aires',
          'UTC-3\tAmerica/Argentina/Catamarca',
          'UTC-3\tAmerica/Argentina/Cordoba',
          'UTC-3\tAmerica/Argentina/Jujuy',
          'UTC-3\tAmerica/Argentina/La_Rioja',
          'UTC-3\tAmerica/Argentina/Mendoza',
          'UTC-3\tAmerica/Argentina/Rio_Gallegos',
          'UTC-3\tAmerica/Argentina/Salta',
          'UTC-3\tAmerica/Argentina/San_Juan',
          'UTC-3\tAmerica/Argentina/San_Luis',
          'UTC-3\tAmerica/Argentina/Tucuman',
          'UTC-3\tAmerica/Argentina/Ushuaia',
          'UTC-3\tAmerica/Bahia',
          'UTC-3\tAmerica/Belem',
          'UTC-3\tAmerica/Cayenne',
          'UTC-3\tAmerica/Fortaleza',
          'UTC-3\tAmerica/Maceio',
          'UTC-3\tAmerica/Miquelon',
          'UTC-3\tAmerica/Montevideo',
          'UTC-3\tAmerica/Paramaribo',
          'UTC-3\tAmerica/Punta_Arenas',
          'UTC-3\tAmerica/Recife',
          'UTC-3\tAmerica/Santarem',
          'UTC-3\tAmerica/Sao_Paulo',
          'UTC-3\tAntarctica/Palmer',
          'UTC-3\tAntarctica/Rothera',
          'UTC-3\tAtlantic/Stanley',
          'UTC-2\tAmerica/Noronha',
          'UTC-2\tAmerica/Nuuk',
          'UTC-2\tAtlantic/South_Georgia',
          'UTC-1\tAmerica/Scoresbysund',
          'UTC-1\tAtlantic/Azores',
          'UTC-1\tAtlantic/Cape_Verde',
          'UTC+0\tAfrica/Abidjan',
          'UTC+0\tAfrica/Accra',
          'UTC+0\tAfrica/Bamako',
          'UTC+0\tAfrica/Banjul',
          'UTC+0\tAfrica/Bissau',
          'UTC+0\tAfrica/Casablanca',
          'UTC+0\tAfrica/Conakry',
          'UTC+0\tAfrica/Dakar',
          'UTC+0\tAfrica/El_Aaiun',
          'UTC+0\tAfrica/Freetown',
          'UTC+0\tAfrica/Lome',
          'UTC+0\tAfrica/Monrovia',
          'UTC+0\tAfrica/Nouakchott',
          'UTC+0\tAfrica/Ouagadougou',
          'UTC+0\tAfrica/Sao_Tome',
          'UTC+0\tAmerica/Danmarkshavn',
          'UTC+0\tAntarctica/Troll',
          'UTC+0\tAtlantic/Canary',
          'UTC+0\tAtlantic/Faroe',
          'UTC+0\tAtlantic/Madeira',
          'UTC+0\tAtlantic/Reykjavik',
          'UTC+0\tAtlantic/St_Helena',
          'UTC+0\tEurope/Dublin',
          'UTC+0\tEurope/Guernsey',
          'UTC+0\tEurope/Isle_of_Man',
          'UTC+0\tEurope/Jersey',
          'UTC+0\tEurope/Lisbon',
          'UTC+0\tEurope/London',
          'UTC+1\tAfrica/Algiers',
          'UTC+1\tAfrica/Bangui',
          'UTC+1\tAfrica/Brazzaville',
          'UTC+1\tAfrica/Ceuta',
          'UTC+1\tAfrica/Douala',
          'UTC+1\tAfrica/Kinshasa',
          'UTC+1\tAfrica/Lagos',
          'UTC+1\tAfrica/Libreville',
          'UTC+1\tAfrica/Luanda',
          'UTC+1\tAfrica/Malabo',
          'UTC+1\tAfrica/Ndjamena',
          'UTC+1\tAfrica/Niamey',
          'UTC+1\tAfrica/Porto-Novo',
          'UTC+1\tAfrica/Tunis',
          'UTC+1\tAfrica/Windhoek',
          'UTC+1\tArctic/Longyearbyen',
          'UTC+1\tEurope/Amsterdam',
          'UTC+1\tEurope/Andorra',
          'UTC+1\tEurope/Belgrade',
          'UTC+1\tEurope/Berlin',
          'UTC+1\tEurope/Bratislava',
          'UTC+1\tEurope/Brussels',
          'UTC+1\tEurope/Budapest',
          'UTC+1\tEurope/Copenhagen',
          'UTC+1\tEurope/Gibraltar',
          'UTC+1\tEurope/Ljubljana',
          'UTC+1\tEurope/Luxembourg',
          'UTC+1\tEurope/Madrid',
          'UTC+1\tEurope/Malta',
          'UTC+1\tEurope/Monaco',
          'UTC+1\tEurope/Oslo',
          'UTC+1\tEurope/Paris',
          'UTC+1\tEurope/Podgorica',
          'UTC+1\tEurope/Prague',
          'UTC+1\tEurope/Rome',
          'UTC+1\tEurope/San_Marino',
          'UTC+1\tEurope/Sarajevo',
          'UTC+1\tEurope/Skopje',
          'UTC+1\tEurope/Stockholm',
          'UTC+1\tEurope/Tirane',
          'UTC+1\tEurope/Vaduz',
          'UTC+1\tEurope/Vatican',
          'UTC+1\tEurope/Vienna',
          'UTC+1\tEurope/Warsaw',
          'UTC+1\tEurope/Zagreb',
          'UTC+1\tEurope/Zurich',
          'UTC+2\tAfrica/Blantyre',
          'UTC+2\tAfrica/Bujumbura',
          'UTC+2\tAfrica/Cairo',
          'UTC+2\tAfrica/Gaborone',
          'UTC+2\tAfrica/Harare',
          'UTC+2\tAfrica/Johannesburg',
          'UTC+2\tAfrica/Juba',
          'UTC+2\tAfrica/Khartoum',
          'UTC+2\tAfrica/Kigali',
          'UTC+2\tAfrica/Lubumbashi',
          'UTC+2\tAfrica/Lusaka',
          'UTC+2\tAfrica/Maputo',
          'UTC+2\tAfrica/Maseru',
          'UTC+2\tAfrica/Mbabane',
          'UTC+2\tAfrica/Tripoli',
          'UTC+2\tAsia/Beirut',
          'UTC+2\tAsia/Famagusta',
          'UTC+2\tAsia/Gaza',
          'UTC+2\tAsia/Hebron',
          'UTC+2\tAsia/Jerusalem',
          'UTC+2\tAsia/Nicosia',
          'UTC+2\tEurope/Athens',
          'UTC+2\tEurope/Bucharest',
          'UTC+2\tEurope/Chisinau',
          'UTC+2\tEurope/Helsinki',
          'UTC+2\tEurope/Kaliningrad',
          'UTC+2\tEurope/Kyiv',
          'UTC+2\tEurope/Mariehamn',
          'UTC+2\tEurope/Riga',
          'UTC+2\tEurope/Sofia',
          'UTC+2\tEurope/Tallinn',
          'UTC+2\tEurope/Vilnius',
          'UTC+3\tAfrica/Addis_Ababa',
          'UTC+3\tAfrica/Asmara',
          'UTC+3\tAfrica/Dar_es_Salaam',
          'UTC+3\tAfrica/Djibouti',
          'UTC+3\tAfrica/Kampala',
          'UTC+3\tAfrica/Mogadishu',
          'UTC+3\tAfrica/Nairobi',
          'UTC+3\tAntarctica/Syowa',
          'UTC+3\tAsia/Aden',
          'UTC+3\tAsia/Amman',
          'UTC+3\tAsia/Baghdad',
          'UTC+3\tAsia/Bahrain',
          'UTC+3\tAsia/Damascus',
          'UTC+3\tAsia/Kuwait',
          'UTC+3\tAsia/Qatar',
          'UTC+3\tAsia/Riyadh',
          'UTC+3\tEurope/Istanbul',
          'UTC+3\tEurope/Kirov',
          'UTC+3\tEurope/Minsk',
          'UTC+3\tEurope/Moscow',
          'UTC+3\tEurope/Simferopol',
          'UTC+3\tEurope/Volgograd',
          'UTC+3\tIndian/Antananarivo',
          'UTC+3\tIndian/Comoro',
          'UTC+3\tIndian/Mayotte',
          'UTC+3:30\tAsia/Tehran',
          'UTC+4\tAsia/Baku',
          'UTC+4\tAsia/Dubai',
          'UTC+4\tAsia/Muscat',
          'UTC+4\tAsia/Tbilisi',
          'UTC+4\tAsia/Yerevan',
          'UTC+4\tEurope/Astrakhan',
          'UTC+4\tEurope/Samara',
          'UTC+4\tEurope/Saratov',
          'UTC+4\tEurope/Ulyanovsk',
          'UTC+4\tIndian/Mahe',
          'UTC+4\tIndian/Mauritius',
          'UTC+4\tIndian/Reunion',
          'UTC+4:30\tAsia/Kabul',
          'UTC+5\tAntarctica/Mawson',
          'UTC+5\tAsia/Aqtau',
          'UTC+5\tAsia/Aqtobe',
          'UTC+5\tAsia/Ashgabat',
          'UTC+5\tAsia/Atyrau',
          'UTC+5\tAsia/Dushanbe',
          'UTC+5\tAsia/Karachi',
          'UTC+5\tAsia/Oral',
          'UTC+5\tAsia/Qyzylorda',
          'UTC+5\tAsia/Samarkand',
          'UTC+5\tAsia/Tashkent',
          'UTC+5\tAsia/Yekaterinburg',
          'UTC+5\tIndian/Kerguelen',
          'UTC+5\tIndian/Maldives',
          'UTC+5:30\tAsia/Colombo',
          'UTC+5:30\tAsia/Kolkata',
          'UTC+5:45\tAsia/Kathmandu',
          'UTC+6\tAntarctica/Vostok',
          'UTC+6\tAsia/Almaty',
          'UTC+6\tAsia/Bishkek',
          'UTC+6\tAsia/Dhaka',
          'UTC+6\tAsia/Omsk',
          'UTC+6\tAsia/Qostanay',
          'UTC+6\tAsia/Thimphu',
          'UTC+6\tAsia/Urumqi',
          'UTC+6\tIndian/Chagos',
          'UTC+6:30\tAsia/Yangon',
          'UTC+6:30\tIndian/Cocos',
          'UTC+7\tAntarctica/Davis',
          'UTC+7\tAsia/Bangkok',
          'UTC+7\tAsia/Barnaul',
          'UTC+7\tAsia/Hovd',
          'UTC+7\tAsia/Ho_Chi_Minh',
          'UTC+7\tAsia/Jakarta',
          'UTC+7\tAsia/Krasnoyarsk',
          'UTC+7\tAsia/Novokuznetsk',
          'UTC+7\tAsia/Novosibirsk',
          'UTC+7\tAsia/Phnom_Penh',
          'UTC+7\tAsia/Pontianak',
          'UTC+7\tAsia/Tomsk',
          'UTC+7\tAsia/Vientiane',
          'UTC+7\tIndian/Christmas',
          'UTC+8\tAsia/Brunei',
          'UTC+8\tAsia/Choibalsan',
          'UTC+8\tAsia/Hong_Kong',
          'UTC+8\tAsia/Irkutsk',
          'UTC+8\tAsia/Kuala_Lumpur',
          'UTC+8\tAsia/Kuching',
          'UTC+8\tAsia/Macau',
          'UTC+8\tAsia/Makassar',
          'UTC+8\tAsia/Manila',
          'UTC+8\tAsia/Shanghai',
          'UTC+8\tAsia/Singapore',
          'UTC+8\tAsia/Taipei',
          'UTC+8\tAsia/Ulaanbaatar',
          'UTC+8\tAustralia/Perth',
          'UTC+8:45\tAustralia/Eucla',
          'UTC+9\tAsia/Chita',
          'UTC+9\tAsia/Dili',
          'UTC+9\tAsia/Jayapura',
          'UTC+9\tAsia/Khandyga',
          'UTC+9\tAsia/Pyongyang',
          'UTC+9\tAsia/Seoul',
          'UTC+9\tAsia/Tokyo',
          'UTC+9\tAsia/Yakutsk',
          'UTC+9\tPacific/Palau',
          'UTC+9:30\tAustralia/Adelaide',
          'UTC+9:30\tAustralia/Broken_Hill',
          'UTC+9:30\tAustralia/Darwin',
          'UTC+10\tAntarctica/DumontDUrville',
          'UTC+10\tAntarctica/Macquarie',
          'UTC+10\tAsia/Ust-Nera',
          'UTC+10\tAsia/Vladivostok',
          'UTC+10\tAustralia/Brisbane',
          'UTC+10\tAustralia/Hobart',
          'UTC+10\tAustralia/Lindeman',
          'UTC+10\tAustralia/Melbourne',
          'UTC+10\tAustralia/Sydney',
          'UTC+10\tPacific/Chuuk',
          'UTC+10\tPacific/Guam',
          'UTC+10\tPacific/Port_Moresby',
          'UTC+10\tPacific/Saipan',
          'UTC+10:30\tAustralia/Lord_Howe',
          'UTC+11\tAntarctica/Casey',
          'UTC+11\tAsia/Magadan',
          'UTC+11\tAsia/Sakhalin',
          'UTC+11\tAsia/Srednekolymsk',
          'UTC+11\tPacific/Bougainville',
          'UTC+11\tPacific/Efate',
          'UTC+11\tPacific/Guadalcanal',
          'UTC+11\tPacific/Kosrae',
          'UTC+11\tPacific/Norfolk',
          'UTC+11\tPacific/Noumea',
          'UTC+11\tPacific/Pohnpei',
          'UTC+12\tAntarctica/McMurdo',
          'UTC+12\tAsia/Anadyr',
          'UTC+12\tAsia/Kamchatka',
          'UTC+12\tPacific/Auckland',
          'UTC+12\tPacific/Fiji',
          'UTC+12\tPacific/Funafuti',
          'UTC+12\tPacific/Kwajalein',
          'UTC+12\tPacific/Majuro',
          'UTC+12\tPacific/Nauru',
          'UTC+12\tPacific/Tarawa',
          'UTC+12\tPacific/Wake',
          'UTC+12\tPacific/Wallis',
          'UTC+12:45\tPacific/Chatham',
          'UTC+13\tPacific/Apia',
          'UTC+13\tPacific/Fakaofo',
          'UTC+13\tPacific/Kanton',
          'UTC+13\tPacific/Tongatapu',
          'UTC+14\tPacific/Kiritimati',
        ];
    },
    86968: function (e, t, a) {
      'use strict';
      a.d(t, {
        I3: function () {
          return C;
        },
        pG: function () {
          return p;
        },
        qM: function () {
          return v;
        },
      });
      var n = a(15009),
        r = a.n(n),
        i = a(99289),
        s = a.n(i),
        o = a(5574),
        c = a.n(o),
        u = a(21640),
        l = a(3321),
        d = (a(18446), a(62435)),
        m = a(67421),
        f = a(86074),
        p = function () {
          var e = (0, d.useState)(!1),
            t = c()(e, 2),
            a = t[0],
            n = t[1],
            r = (0, d.useCallback)(function () {
              n(!0);
            }, []),
            i = (0, d.useCallback)(function () {
              n(!1);
            }, []),
            s = (0, d.useCallback)(
              function () {
                n(!a);
              },
              [a],
            );
          return { visible: a, showModal: r, hideModal: i, switchVisible: s };
        };
      var C = function () {
          var e = l.Z.useApp().modal,
            t = (0, m.$G)().t;
          return (0, d.useCallback)(
            function (a) {
              var n = a.title,
                i = a.content,
                o = a.onOk,
                c = a.onCancel;
              return new Promise(function (a, l) {
                e.confirm({
                  title: null != n ? n : t('common.deleteModalTitle'),
                  icon: (0, f.jsx)(u.Z, {}),
                  content: i,
                  okText: t('common.ok'),
                  okType: 'danger',
                  cancelText: t('common.cancel'),
                  onOk: function () {
                    return s()(
                      r()().mark(function e() {
                        var t;
                        return r()().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    null == o ? void 0 : o()
                                  );
                                case 3:
                                  (t = e.sent),
                                    a(t),
                                    console.info(t),
                                    (e.next = 11);
                                  break;
                                case 8:
                                  (e.prev = 8), (e.t0 = e.catch(0)), l(e.t0);
                                case 11:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 8]],
                        );
                      }),
                    )();
                  },
                  onCancel: function () {
                    null == c || c();
                  },
                });
              });
            },
            [t, e],
          );
        },
        v = function (e) {
          return (0, m.$G)('translation', { keyPrefix: e });
        };
    },
    39259: function (e, t, a) {
      'use strict';
      a.d(t, {
        CV: function () {
          return I;
        },
        F1: function () {
          return P;
        },
        Jf: function () {
          return _;
        },
        Jv: function () {
          return B;
        },
        PI: function () {
          return S;
        },
        WH: function () {
          return k;
        },
        XH: function () {
          return b;
        },
        d1: function () {
          return F;
        },
        ef: function () {
          return Z;
        },
        er: function () {
          return K;
        },
        fS: function () {
          return y;
        },
        hZ: function () {
          return E;
        },
        jd: function () {
          return w;
        },
        m_: function () {
          return M;
        },
        nv: function () {
          return N;
        },
        oH: function () {
          return L;
        },
        v: function () {
          return j;
        },
        x_: function () {
          return D;
        },
      });
      var n = a(5574),
        r = a.n(n),
        i = a(15009),
        s = a.n(i),
        o = a(99289),
        c = a.n(o),
        u = a(40169),
        l = a(72668),
        d = a(78551),
        m = a(30202),
        f = a(4527),
        p = a(85576),
        C = a(45360),
        v = a(27856),
        T = a.n(v),
        g = a(96486),
        h = a(62435),
        U = a(67421),
        A = a(42028),
        x = a(86074),
        w = function () {
          var e,
            t = (0, U.$G)().i18n,
            a = (0, d.a)({
              queryKey: ['userInfo'],
              initialData: {},
              gcTime: 0,
              queryFn:
                ((e = c()(
                  s()().mark(function e() {
                    var a, n, r;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.user_info();
                          case 2:
                            return (
                              (n = e.sent),
                              0 === (r = n.data).code &&
                                t.changeLanguage(u.Kj[r.data.language]),
                              e.abrupt(
                                'return',
                                null !== (a = null == r ? void 0 : r.data) &&
                                  void 0 !== a
                                  ? a
                                  : {},
                              )
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return { data: a.data, loading: a.isFetching };
        },
        y = function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            a = (0, U.$G)().t,
            n = (0, d.a)({
              queryKey: ['tenantInfo'],
              initialData: {},
              gcTime: 0,
              queryFn:
                ((e = c()(
                  s()().mark(function e() {
                    var n, r, i;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.get_tenant_info();
                          case 2:
                            if (((n = e.sent), 0 !== (r = n.data).code)) {
                              e.next = 10;
                              break;
                            }
                            return (
                              (i = r.data),
                              t &&
                                ((0, g.isEmpty)(i.embd_id) ||
                                  (0, g.isEmpty)(i.llm_id)) &&
                                p.Z.warning({
                                  title: a('common.warn'),
                                  content: (0, x.jsx)('div', {
                                    dangerouslySetInnerHTML: {
                                      __html: T().sanitize(
                                        a('setting.modelProvidersWarn'),
                                      ),
                                    },
                                  }),
                                  onOk: function () {
                                    A.m8.push('/user-setting/model');
                                  },
                                }),
                              (i.chat_id = i.llm_id),
                              (i.speech2text_id = i.asr_id),
                              e.abrupt('return', i)
                            );
                          case 10:
                            return e.abrupt('return', r);
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return { data: n.data, loading: n.isFetching };
        },
        b = function () {
          var e = y(!0).data;
          return (0, h.useMemo)(
            function () {
              var t, a;
              return (
                null !==
                  (t =
                    null == e || null === (a = e.parser_ids) || void 0 === a
                      ? void 0
                      : a.split(',')) && void 0 !== t
                  ? t
                  : []
              ).map(function (e) {
                var t = e.split(':');
                return { value: t[0], label: t[1] };
              });
            },
            [e],
          );
        },
        k = function () {
          var e,
            t = (0, m.NL)(),
            a = (0, U.$G)().t,
            n = (0, f.D)({
              mutationKey: ['saveSetting'],
              mutationFn:
                ((e = c()(
                  s()().mark(function e(n) {
                    var r, i;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.setting(n);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (i = r.data).code &&
                                (C.ZP.success(a('message.modified')),
                                t.invalidateQueries({
                                  queryKey: ['userInfo'],
                                })),
                              e.abrupt('return', null == i ? void 0 : i.code)
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            saveSetting: n.mutateAsync,
          };
        },
        N = function () {
          var e = (0, h.useState)(''),
            t = r()(e, 2),
            a = t[0],
            n = t[1],
            i = (0, h.useState)(!1),
            o = r()(i, 2),
            u = o[0],
            d = o[1];
          return {
            fetchSystemVersion: (0, h.useCallback)(
              c()(
                s()().mark(function e() {
                  var t, a;
                  return s()().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              d(!0),
                              (e.next = 4),
                              l.ZP.getSystemVersion()
                            );
                          case 4:
                            (t = e.sent),
                              0 === (a = t.data).code && (n(a.data), d(!1)),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9), (e.t0 = e.catch(0)), d(!1);
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]],
                  );
                }),
              ),
              [],
            ),
            version: a,
            loading: u,
          };
        },
        _ = function () {
          var e = (0, h.useState)({}),
            t = r()(e, 2),
            a = t[0],
            n = t[1],
            i = (0, h.useState)(!1),
            o = r()(i, 2),
            u = o[0],
            d = o[1];
          return {
            systemStatus: a,
            fetchSystemStatus: (0, h.useCallback)(
              c()(
                s()().mark(function e() {
                  var t, a;
                  return s()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return d(!0), (e.next = 3), l.ZP.getSystemStatus();
                        case 3:
                          (t = e.sent),
                            0 === (a = t.data).code && (n(a.data), d(!1));
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [],
            ),
            loading: u,
          };
        },
        j = function () {
          var e,
            t = (0, f.D)({
              mutationKey: ['fetchManualSystemTokenList'],
              mutationFn:
                ((e = c()(
                  s()().mark(function e() {
                    var t, a, n;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.listToken();
                          case 2:
                            return (
                              (a = e.sent),
                              (n = a.data),
                              e.abrupt(
                                'return',
                                null !== (t = null == n ? void 0 : n.data) &&
                                  void 0 !== t
                                  ? t
                                  : [],
                              )
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: t.data,
            loading: t.isPending,
            fetchSystemTokenList: t.mutateAsync,
          };
        },
        P = function () {
          var e,
            t = (0, d.a)({
              queryKey: ['fetchSystemTokenList'],
              initialData: [],
              gcTime: 0,
              queryFn:
                ((e = c()(
                  s()().mark(function e() {
                    var t, a, n;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.listToken();
                          case 2:
                            return (
                              (a = e.sent),
                              (n = a.data),
                              e.abrupt(
                                'return',
                                null !== (t = null == n ? void 0 : n.data) &&
                                  void 0 !== t
                                  ? t
                                  : [],
                              )
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return { data: t.data, loading: t.isFetching, refetch: t.refetch };
        },
        Z = function () {
          var e,
            t = (0, m.NL)(),
            a = (0, U.$G)().t,
            n = (0, f.D)({
              mutationKey: ['removeSystemToken'],
              mutationFn:
                ((e = c()(
                  s()().mark(function e(n) {
                    var r, i, o;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.removeToken({}, n);
                          case 2:
                            return (
                              (i = e.sent),
                              0 === (o = i.data).code &&
                                (C.ZP.success(a('message.deleted')),
                                t.invalidateQueries({
                                  queryKey: ['fetchSystemTokenList'],
                                })),
                              e.abrupt(
                                'return',
                                null !== (r = null == o ? void 0 : o.data) &&
                                  void 0 !== r
                                  ? r
                                  : [],
                              )
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            removeToken: n.mutateAsync,
          };
        },
        S = function () {
          var e,
            t = (0, m.NL)(),
            a = (0, f.D)({
              mutationKey: ['createSystemToken'],
              mutationFn:
                ((e = c()(
                  s()().mark(function e(a) {
                    var n, r, i;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.createToken(a);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (i = r.data).code &&
                                t.invalidateQueries({
                                  queryKey: ['fetchSystemTokenList'],
                                }),
                              e.abrupt(
                                'return',
                                null !== (n = null == i ? void 0 : i.data) &&
                                  void 0 !== n
                                  ? n
                                  : [],
                              )
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: a.data,
            loading: a.isPending,
            createToken: a.mutateAsync,
          };
        },
        E = function () {
          var e,
            t = y().data.tenant_id,
            a = (0, d.a)({
              queryKey: ['listTenantUser', t],
              initialData: [],
              gcTime: 0,
              enabled: !!t,
              queryFn:
                ((e = c()(
                  s()().mark(function e() {
                    var a, n, r;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, l.WX)(t);
                          case 2:
                            return (
                              (n = e.sent),
                              (r = n.data),
                              e.abrupt(
                                'return',
                                null !== (a = null == r ? void 0 : r.data) &&
                                  void 0 !== a
                                  ? a
                                  : [],
                              )
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return { data: a.data, loading: a.isFetching, refetch: a.refetch };
        },
        M = function () {
          var e,
            t = y().data,
            a = (0, m.NL)(),
            n = (0, f.D)({
              mutationKey: ['addTenantUser'],
              mutationFn:
                ((e = c()(
                  s()().mark(function e(n) {
                    var r, i;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, l.AH)(t.tenant_id, n);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (i = r.data).code &&
                                a.invalidateQueries({
                                  queryKey: ['listTenantUser'],
                                }),
                              e.abrupt('return', null == i ? void 0 : i.code)
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            addTenantUser: n.mutateAsync,
          };
        },
        I = function () {
          var e,
            t = y().data,
            a = (0, m.NL)(),
            n = (0, U.$G)().t,
            r = (0, f.D)({
              mutationKey: ['deleteTenantUser'],
              mutationFn:
                ((e = c()(
                  s()().mark(function e(r) {
                    var i, o, c, u, d;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (o = r.userId),
                              (c = r.tenantId),
                              (e.next = 3),
                              (0, l.EE)({
                                tenantId: null != c ? c : t.tenant_id,
                                userId: o,
                              })
                            );
                          case 3:
                            return (
                              (u = e.sent),
                              0 === (d = u.data).code &&
                                (C.ZP.success(n('message.deleted')),
                                a.invalidateQueries({
                                  queryKey: ['listTenantUser'],
                                }),
                                a.invalidateQueries({
                                  queryKey: ['listTenant'],
                                })),
                              e.abrupt(
                                'return',
                                null !== (i = null == d ? void 0 : d.data) &&
                                  void 0 !== i
                                  ? i
                                  : [],
                              )
                            );
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: r.data,
            loading: r.isPending,
            deleteTenantUser: r.mutateAsync,
          };
        },
        F = function () {
          var e,
            t = y().data.tenant_id,
            a = (0, d.a)({
              queryKey: ['listTenant', t],
              initialData: [],
              gcTime: 0,
              enabled: !!t,
              queryFn:
                ((e = c()(
                  s()().mark(function e() {
                    var t, a, n;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, l.vh)();
                          case 2:
                            return (
                              (a = e.sent),
                              (n = a.data),
                              e.abrupt(
                                'return',
                                null !== (t = null == n ? void 0 : n.data) &&
                                  void 0 !== t
                                  ? t
                                  : [],
                              )
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return { data: a.data, loading: a.isFetching, refetch: a.refetch };
        },
        L = function () {
          var e,
            t = (0, m.NL)(),
            a = (0, U.$G)().t,
            n = (0, f.D)({
              mutationKey: ['agreeTenant'],
              mutationFn:
                ((e = c()(
                  s()().mark(function e(n) {
                    var r, i, o;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, l.FG)(n);
                          case 2:
                            return (
                              (i = e.sent),
                              0 === (o = i.data).code &&
                                (C.ZP.success(a('message.operated')),
                                t.invalidateQueries({
                                  queryKey: ['listTenant'],
                                })),
                              e.abrupt(
                                'return',
                                null !== (r = null == o ? void 0 : o.data) &&
                                  void 0 !== r
                                  ? r
                                  : [],
                              )
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            agreeTenant: n.mutateAsync,
          };
        },
        B = function () {
          var e,
            t = (0, U.$G)().t,
            a = (0, f.D)({
              mutationKey: ['setLangfuseConfig'],
              mutationFn:
                ((e = c()(
                  s()().mark(function e(a) {
                    var n, r;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.setLangfuseConfig(a);
                          case 2:
                            return (
                              (n = e.sent),
                              0 === (r = n.data).code &&
                                C.ZP.success(t('message.operated')),
                              e.abrupt('return', null == r ? void 0 : r.code)
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: a.data,
            loading: a.isPending,
            setLangfuseConfig: a.mutateAsync,
          };
        },
        D = function () {
          var e,
            t = (0, U.$G)().t,
            a = (0, f.D)({
              mutationKey: ['deleteLangfuseConfig'],
              mutationFn:
                ((e = c()(
                  s()().mark(function e() {
                    var a, n;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.deleteLangfuseConfig();
                          case 2:
                            return (
                              (a = e.sent),
                              0 === (n = a.data).code &&
                                C.ZP.success(t('message.deleted')),
                              e.abrupt('return', null == n ? void 0 : n.code)
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: a.data,
            loading: a.isPending,
            deleteLangfuseConfig: a.mutateAsync,
          };
        },
        K = function () {
          var e,
            t = (0, d.a)({
              queryKey: ['fetchLangfuseConfig'],
              gcTime: 0,
              queryFn:
                ((e = c()(
                  s()().mark(function e() {
                    var t, a;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), l.ZP.getLangfuseConfig();
                          case 2:
                            return (
                              (t = e.sent),
                              (a = t.data),
                              e.abrupt('return', null == a ? void 0 : a.data)
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return { data: t.data, loading: t.isFetching };
        };
    },
    29723: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return B;
          },
        });
      var n = a(97857),
        r = a.n(n),
        i = a(15009),
        s = a.n(i),
        o = a(99289),
        c = a.n(o),
        u = a(5574),
        l = a.n(u),
        d = a(13769),
        m = a.n(d),
        f = a(62435),
        p = a(27080),
        C = a(86074),
        v = ['className', 'type'];
      function T(e) {
        var t = e.className,
          a = e.type,
          n = m()(e, v);
        return (0, C.jsx)(
          'input',
          r()(
            {
              type: a,
              'data-slot': 'input',
              className: (0, p.cn)(
                'border-input file:text-foreground placeholder:text-muted-foreground/70 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
                'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                'search' === a &&
                  '[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none',
                'file' === a &&
                  'text-muted-foreground/70 file:border-input file:text-foreground p-0 pr-3 italic file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic',
                t,
              ),
            },
            n,
          ),
        );
      }
      var g = a(86968);
      const h = (0, a(91373).Z)('eye-off', [
        [
          'path',
          {
            d: 'M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49',
            key: 'ct8e1f',
          },
        ],
        ['path', { d: 'M14.084 14.158a3 3 0 0 1-4.242-4.242', key: '151rxh' }],
        [
          'path',
          {
            d: 'M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143',
            key: '13bj9a',
          },
        ],
        ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
      ]);
      var U = a(34464);
      function A(e, t) {
        var a = (0, f.useId)(),
          n = (0, f.useState)(!1),
          r = l()(n, 2),
          i = r[0],
          s = r[1];
        (0, g.qM)('setting').t;
        return (0, C.jsx)('div', {
          className: '*:not-first:mt-2 w-full',
          children: (0, C.jsxs)('div', {
            className: 'relative',
            children: [
              (0, C.jsx)(T, {
                autoComplete: 'off',
                inputMode: 'numeric',
                id: a,
                className: 'pe-9',
                placeholder: '',
                type: i ? 'text' : 'password',
                value: e.value,
                onBlur: e.onBlur,
                onChange: function (t) {
                  return e.onChange(t);
                },
              }),
              (0, C.jsx)('button', {
                className:
                  'text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
                type: 'button',
                onClick: function () {
                  return s(function (e) {
                    return !e;
                  });
                },
                'aria-label': i ? 'Hide password' : 'Show password',
                'aria-pressed': i,
                'aria-controls': 'password',
                children: i
                  ? (0, C.jsx)(h, { size: 16, 'aria-hidden': 'true' })
                  : (0, C.jsx)(U.Z, { size: 16, 'aria-hidden': 'true' }),
              }),
            ],
          }),
        });
      }
      var x = (0, f.forwardRef)(A),
        w = a(5715),
        y = a(57636),
        b = a(80499),
        k = a(27591),
        N = a(84586),
        _ = a(39259),
        j = a(73828),
        P = a(19515),
        Z = a(51331),
        S = a(56312),
        E = a(28142),
        M = a(90470),
        I = a(36316),
        F = a(87536),
        L = a(1604);
      function B() {
        var e = (0, f.useState)(null),
          t = l()(e, 2),
          a = t[0],
          n = t[1],
          i = (0, f.useState)(''),
          o = l()(i, 2),
          u = o[0],
          d = o[1],
          m = (0, _.jd)().data,
          p = (0, _.WH)(),
          v = p.saveSetting,
          T = p.loading,
          h = (0, g.qM)('setting').t,
          U = (function (e) {
            return L.z
              .object({
                userName: L.z
                  .string()
                  .min(1, { message: e('usernameMessage') })
                  .trim(),
                avatarUrl: L.z.string().trim(),
                timeZone: L.z
                  .string()
                  .trim()
                  .min(1, { message: e('timezonePlaceholder') }),
                email: L.z
                  .string({
                    required_error: 'Please select an email to display.',
                  })
                  .trim()
                  .regex(
                    /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                    { message: 'Enter a valid email address.' },
                  ),
                currPasswd: L.z
                  .string()
                  .trim()
                  .min(1, { message: e('currentPasswordMessage') }),
                newPasswd: L.z
                  .string()
                  .trim()
                  .min(8, { message: e('confirmPasswordMessage') }),
                confirmPasswd: L.z
                  .string()
                  .trim()
                  .min(8, { message: e('newPasswordDescription') }),
              })
              .refine(
                function (e) {
                  return e.newPasswd === e.confirmPasswd;
                },
                {
                  message: e('confirmPasswordNonMatchMessage'),
                  path: ['confirmPasswd'],
                },
              );
          })(h),
          A = (0, F.cI)({
            resolver: (0, S.F)(U),
            defaultValues: {
              userName: '',
              avatarUrl: '',
              timeZone: '',
              email: '',
              currPasswd: '',
              newPasswd: '',
              confirmPasswd: '',
            },
          });
        return (
          (0, f.useEffect)(
            function () {
              var e;
              A.setValue('email', null == m ? void 0 : m.email),
                A.setValue('userName', null == m ? void 0 : m.nickname),
                A.setValue('timeZone', null == m ? void 0 : m.timezone),
                A.setValue('currPasswd', ''),
                d(
                  null !== (e = null == m ? void 0 : m.avatar) && void 0 !== e
                    ? e
                    : '',
                );
            },
            [m],
          ),
          (0, f.useEffect)(
            function () {
              a &&
                c()(
                  s()().mark(function e() {
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.t0 = d), (e.next = 3), (0, Z._V)(a);
                          case 3:
                            (e.t1 = e.sent), (0, e.t0)(e.t1);
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )();
            },
            [a],
          ),
          (0, C.jsxs)('section', {
            className: 'p-8',
            children: [
              (0, C.jsx)('h1', {
                className: 'text-3xl font-bold',
                children: h('profile'),
              }),
              (0, C.jsx)('div', {
                className: 'text-sm text-muted-foreground mb-6',
                children: h('profileDescription'),
              }),
              (0, C.jsx)('div', {
                children: (0, C.jsx)(
                  b.l0,
                  r()(
                    r()({}, A),
                    {},
                    {
                      children: (0, C.jsxs)('form', {
                        onSubmit: A.handleSubmit(function (e) {
                          v({
                            nickname: e.userName,
                            password: (0, P.n$)(e.currPasswd),
                            new_password: (0, P.n$)(e.newPasswd),
                            avatar: u,
                            timezone: e.timeZone,
                          });
                        }),
                        className: 'block space-y-6',
                        children: [
                          (0, C.jsx)(b.Wi, {
                            control: A.control,
                            name: 'userName',
                            render: function (e) {
                              var t = e.field;
                              return (0, C.jsxs)(b.xJ, {
                                className: ' items-center space-y-0 ',
                                children: [
                                  (0, C.jsxs)('div', {
                                    className: 'flex w-[600px]',
                                    children: [
                                      (0, C.jsxs)(b.lX, {
                                        className:
                                          'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                                        children: [
                                          (0, C.jsx)('span', {
                                            className: 'text-red-600',
                                            children: '*',
                                          }),
                                          h('username'),
                                        ],
                                      }),
                                      (0, C.jsx)(b.NI, {
                                        className: 'w-3/4',
                                        children: (0, C.jsx)(
                                          k.II,
                                          r()(
                                            r()({ placeholder: '' }, t),
                                            {},
                                            {
                                              className:
                                                'bg-colors-background-inverse-weak',
                                            },
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, C.jsxs)('div', {
                                    className: 'flex w-[600px] pt-1',
                                    children: [
                                      (0, C.jsx)('div', { className: 'w-1/4' }),
                                      (0, C.jsx)(b.zG, {}),
                                    ],
                                  }),
                                ],
                              });
                            },
                          }),
                          (0, C.jsx)(b.Wi, {
                            control: A.control,
                            name: 'avatarUrl',
                            render: function (e) {
                              var t = e.field;
                              return (0, C.jsxs)(b.xJ, {
                                className: 'flex items-center space-y-0',
                                children: [
                                  (0, C.jsxs)('div', {
                                    className: 'flex w-[600px]',
                                    children: [
                                      (0, C.jsx)(b.lX, {
                                        className:
                                          'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                                        children: 'Avatar',
                                      }),
                                      (0, C.jsx)(b.NI, {
                                        className: 'w-3/4',
                                        children: (0, C.jsx)(C.Fragment, {
                                          children: (0, C.jsxs)('div', {
                                            className: 'relative group',
                                            children: [
                                              u
                                                ? (0, C.jsxs)('div', {
                                                    className:
                                                      'w-[64px] h-[64px] relative grid place-content-center',
                                                    children: [
                                                      (0, C.jsxs)(w.qE, {
                                                        className:
                                                          'w-[64px] h-[64px]',
                                                        children: [
                                                          (0, C.jsx)(w.F$, {
                                                            className: ' block',
                                                            src: u,
                                                            alt: '',
                                                          }),
                                                          (0, C.jsx)(w.Q5, {}),
                                                        ],
                                                      }),
                                                      (0, C.jsx)('div', {
                                                        className:
                                                          'absolute inset-0 bg-[#000]/20 group-hover:bg-[#000]/60',
                                                        children: (0, C.jsx)(
                                                          M.Z,
                                                          {
                                                            size: 20,
                                                            className:
                                                              'absolute right-2 bottom-0 opacity-50 hidden group-hover:block',
                                                          },
                                                        ),
                                                      }),
                                                    ],
                                                  })
                                                : (0, C.jsx)('div', {
                                                    className:
                                                      'w-[64px] h-[64px] grid place-content-center',
                                                    children: (0, C.jsxs)(
                                                      'div',
                                                      {
                                                        className:
                                                          'flex flex-col items-center',
                                                        children: [
                                                          (0, C.jsx)(E.Z, {}),
                                                          (0, C.jsx)('p', {
                                                            children: 'Upload',
                                                          }),
                                                        ],
                                                      },
                                                    ),
                                                  }),
                                              (0, C.jsx)(
                                                k.II,
                                                r()(
                                                  r()({ placeholder: '' }, t),
                                                  {},
                                                  {
                                                    type: 'file',
                                                    title: '',
                                                    accept: 'image/*',
                                                    className:
                                                      'absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer',
                                                    onChange: function (e) {
                                                      var t,
                                                        a,
                                                        r =
                                                          null ===
                                                            (t = e.target) ||
                                                          void 0 === t ||
                                                          null ===
                                                            (t = t.files) ||
                                                          void 0 === t
                                                            ? void 0
                                                            : t[0];
                                                      /\.(jpg|jpeg|png|webp|bmp)$/i.test(
                                                        null !==
                                                          (a =
                                                            null == r
                                                              ? void 0
                                                              : r.name) &&
                                                          void 0 !== a
                                                          ? a
                                                          : '',
                                                      ) && n(r),
                                                        (e.target.value = '');
                                                    },
                                                  },
                                                ),
                                              ),
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, C.jsxs)('div', {
                                    className: 'flex w-[600px] pt-1',
                                    children: [
                                      (0, C.jsx)('div', { className: 'w-1/4' }),
                                      (0, C.jsx)(b.zG, {}),
                                    ],
                                  }),
                                ],
                              });
                            },
                          }),
                          (0, C.jsx)(b.Wi, {
                            control: A.control,
                            name: 'timeZone',
                            render: function (e) {
                              var t = e.field;
                              return (0, C.jsxs)(b.xJ, {
                                className: 'items-center space-y-0',
                                children: [
                                  (0, C.jsxs)('div', {
                                    className: 'flex w-[600px]',
                                    children: [
                                      (0, C.jsxs)(b.lX, {
                                        className:
                                          'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                                        children: [
                                          (0, C.jsx)('span', {
                                            className: 'text-red-600',
                                            children: '*',
                                          }),
                                          h('timezone'),
                                        ],
                                      }),
                                      (0, C.jsxs)(N.Ph, {
                                        onValueChange: t.onChange,
                                        value: t.value,
                                        children: [
                                          (0, C.jsx)(b.NI, {
                                            className: 'w-3/4',
                                            children: (0, C.jsx)(N.i4, {
                                              children: (0, C.jsx)(N.ki, {
                                                placeholder:
                                                  'Select a timeZone',
                                              }),
                                            }),
                                          }),
                                          (0, C.jsx)(N.Bw, {
                                            children: j.rQ.map(function (e) {
                                              return (0, C.jsx)(
                                                N.Ql,
                                                { value: e, children: e },
                                                e,
                                              );
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, C.jsxs)('div', {
                                    className: 'flex w-[600px] pt-1',
                                    children: [
                                      (0, C.jsx)('div', { className: 'w-1/4' }),
                                      (0, C.jsx)(b.zG, {}),
                                    ],
                                  }),
                                ],
                              });
                            },
                          }),
                          (0, C.jsx)(b.Wi, {
                            control: A.control,
                            name: 'email',
                            render: function (e) {
                              var t = e.field;
                              return (0, C.jsxs)('div', {
                                children: [
                                  (0, C.jsxs)(b.xJ, {
                                    className: 'items-center space-y-0',
                                    children: [
                                      (0, C.jsxs)('div', {
                                        className: 'flex w-[600px]',
                                        children: [
                                          (0, C.jsx)(b.lX, {
                                            className:
                                              'text-sm text-muted-foreground whitespace-nowrap w-1/4',
                                            children: h('email'),
                                          }),
                                          (0, C.jsx)(b.NI, {
                                            className: 'w-3/4',
                                            children: (0, C.jsx)(
                                              k.II,
                                              r()(
                                                {
                                                  placeholder: 'Alex@gmail.com',
                                                  disabled: !0,
                                                },
                                                t,
                                              ),
                                            ),
                                          }),
                                        ],
                                      }),
                                      (0, C.jsxs)('div', {
                                        className: 'flex w-[600px] pt-1',
                                        children: [
                                          (0, C.jsx)('div', {
                                            className: 'w-1/4',
                                          }),
                                          (0, C.jsx)(b.zG, {}),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, C.jsxs)('div', {
                                    className: 'flex w-[600px] pt-1',
                                    children: [
                                      (0, C.jsx)('p', {
                                        className: 'w-1/4',
                                        children: ' ',
                                      }),
                                      (0, C.jsx)('p', {
                                        className:
                                          'text-sm text-muted-foreground whitespace-nowrap w-3/4',
                                        children: h('emailDescription'),
                                      }),
                                    ],
                                  }),
                                ],
                              });
                            },
                          }),
                          (0, C.jsx)('div', { className: 'h-[10px]' }),
                          (0, C.jsxs)('div', {
                            className: 'pb-6',
                            children: [
                              (0, C.jsx)('h1', {
                                className: 'text-3xl font-bold',
                                children: h('password'),
                              }),
                              (0, C.jsx)('div', {
                                className: 'text-sm text-muted-foreground',
                                children: h('passwordDescription'),
                              }),
                            ],
                          }),
                          (0, C.jsx)('div', {
                            className: 'h-0 overflow-hidden absolute',
                            children: (0, C.jsx)('input', {
                              type: 'password',
                              className: ' w-0 height-0 opacity-0',
                            }),
                          }),
                          (0, C.jsx)(b.Wi, {
                            control: A.control,
                            name: 'currPasswd',
                            render: function (e) {
                              var t = e.field;
                              return (0, C.jsxs)(b.xJ, {
                                className: ' items-center space-y-0',
                                children: [
                                  (0, C.jsxs)('div', {
                                    className: 'flex w-[600px]',
                                    children: [
                                      (0, C.jsxs)(b.lX, {
                                        className:
                                          'text-sm text-muted-foreground whitespace-nowrap w-2/5',
                                        children: [
                                          (0, C.jsx)('span', {
                                            className: 'text-red-600',
                                            children: '*',
                                          }),
                                          h('currentPassword'),
                                        ],
                                      }),
                                      (0, C.jsx)(b.NI, {
                                        className: 'w-3/5',
                                        children: (0, C.jsx)(x, r()({}, t)),
                                      }),
                                    ],
                                  }),
                                  (0, C.jsxs)('div', {
                                    className: 'flex w-[600px] pt-1',
                                    children: [
                                      (0, C.jsx)('div', {
                                        className:
                                          'min-w-[170px] max-w-[170px]',
                                      }),
                                      (0, C.jsx)(b.zG, {}),
                                    ],
                                  }),
                                ],
                              });
                            },
                          }),
                          (0, C.jsx)(b.Wi, {
                            control: A.control,
                            name: 'newPasswd',
                            render: function (e) {
                              var t = e.field;
                              return (0, C.jsxs)(b.xJ, {
                                className: ' items-center space-y-0',
                                children: [
                                  (0, C.jsxs)('div', {
                                    className: 'flex w-[600px]',
                                    children: [
                                      (0, C.jsxs)(b.lX, {
                                        className:
                                          'text-sm text-muted-foreground whitespace-nowrap w-2/5',
                                        children: [
                                          (0, C.jsx)('span', {
                                            className: 'text-red-600',
                                            children: '*',
                                          }),
                                          h('newPassword'),
                                        ],
                                      }),
                                      (0, C.jsx)(b.NI, {
                                        className: 'w-3/5',
                                        children: (0, C.jsx)(x, r()({}, t)),
                                      }),
                                    ],
                                  }),
                                  (0, C.jsxs)('div', {
                                    className: 'flex w-[600px] pt-1',
                                    children: [
                                      (0, C.jsx)('div', {
                                        className:
                                          'min-w-[170px] max-w-[170px]',
                                      }),
                                      (0, C.jsx)(b.zG, {}),
                                    ],
                                  }),
                                ],
                              });
                            },
                          }),
                          (0, C.jsx)(b.Wi, {
                            control: A.control,
                            name: 'confirmPasswd',
                            render: function (e) {
                              var t = e.field;
                              return (0, C.jsxs)(b.xJ, {
                                className: ' items-center space-y-0',
                                children: [
                                  (0, C.jsxs)('div', {
                                    className: 'flex w-[600px]',
                                    children: [
                                      (0, C.jsxs)(b.lX, {
                                        className:
                                          'text-sm text-muted-foreground whitespace-nowrap w-2/5',
                                        children: [
                                          (0, C.jsx)('span', {
                                            className: 'text-red-600',
                                            children: '*',
                                          }),
                                          h('confirmPassword'),
                                        ],
                                      }),
                                      (0, C.jsx)(b.NI, {
                                        className: 'w-3/5',
                                        children: (0, C.jsx)(
                                          x,
                                          r()(
                                            r()({}, t),
                                            {},
                                            {
                                              onBlur: function () {
                                                A.trigger('confirmPasswd');
                                              },
                                              onChange: function (e) {
                                                A.setValue(
                                                  'confirmPasswd',
                                                  e.target.value.trim(),
                                                );
                                              },
                                            },
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, C.jsxs)('div', {
                                    className: 'flex w-[600px] pt-1',
                                    children: [
                                      (0, C.jsx)('div', {
                                        className:
                                          'min-w-[170px] max-w-[170px]',
                                        children: ' ',
                                      }),
                                      (0, C.jsx)(b.zG, {}),
                                    ],
                                  }),
                                ],
                              });
                            },
                          }),
                          (0, C.jsxs)('div', {
                            className: 'w-[600px] text-right space-x-4',
                            children: [
                              (0, C.jsx)(y.zx, {
                                variant: 'secondary',
                                children: h('cancel'),
                              }),
                              (0, C.jsxs)(y.zx, {
                                type: 'submit',
                                disabled: T,
                                children: [
                                  T &&
                                    (0, C.jsx)(I.Z, {
                                      className: 'animate-spin',
                                    }),
                                  h('save', { keyPrefix: 'common' }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                  ),
                ),
              }),
            ],
          })
        );
      }
    },
    73828: function (e, t, a) {
      'use strict';
      a.d(t, {
        Dr: function () {
          return l;
        },
        H7: function () {
          return o.H7;
        },
        at: function () {
          return d;
        },
        qh: function () {
          return o.qh;
        },
        rQ: function () {
          return o.rQ;
        },
        z7: function () {
          return m;
        },
      });
      var n = a(9783),
        r = a.n(n),
        i = a(38520),
        s = a(39386),
        o = a(9450),
        c = a(70101),
        u = a(86074),
        l = r()(
          r()(
            r()(
              r()(
                r()(
                  r()(
                    r()({}, o.qh.Profile, (0, u.jsx)(i.m2, {})),
                    o.qh.Password,
                    (0, u.jsx)(i.CW, {}),
                  ),
                  o.qh.Model,
                  (0, u.jsx)(i.eS, {}),
                ),
                o.qh.System,
                (0, u.jsx)(c.Z, { style: { fontSize: 24 } }),
              ),
              o.qh.Team,
              (0, u.jsx)(i.Ww, {}),
            ),
            o.qh.Logout,
            (0, u.jsx)(i.Hl, {}),
          ),
          o.qh.Api,
          (0, u.jsx)(i.Fg, {}),
        ),
        d = [
          s.Q.Ollama,
          s.Q.Xinference,
          s.Q.LocalAI,
          s.Q.LMStudio,
          s.Q.OpenAiAPICompatible,
          s.Q.TogetherAI,
          s.Q.Replicate,
          s.Q.OpenRouter,
          s.Q.HuggingFace,
          s.Q.GPUStack,
          s.Q.ModelScope,
          s.Q.VLLM,
        ],
        m = (function (e) {
          return (
            (e.Owner = 'owner'), (e.Invite = 'invite'), (e.Normal = 'normal'), e
          );
        })({});
    },
    62386: function (e, t, a) {
      'use strict';
      var n = a(60806),
        r = a(66582),
        i = a(78158),
        s = n.Z.listFile,
        o = n.Z.removeFile,
        c = n.Z.uploadFile,
        u = n.Z.renameFile,
        l = n.Z.getAllParentFolder,
        d = n.Z.createFolder,
        m = n.Z.connectFileToKnowledge,
        f = n.Z.get_document_file,
        p = {
          listFile: { url: s, method: 'get' },
          removeFile: { url: o, method: 'post' },
          uploadFile: { url: c, method: 'post' },
          renameFile: { url: u, method: 'post' },
          getAllParentFolder: { url: l, method: 'get' },
          createFolder: { url: d, method: 'post' },
          connectFileToKnowledge: { url: m, method: 'post' },
          getFile: { url: n.Z.getFile, method: 'get', responseType: 'blob' },
          getDocumentFile: { url: f, method: 'get', responseType: 'blob' },
          moveFile: { url: n.Z.moveFile, method: 'post' },
        },
        C = (0, r.Z)(p, i.ZP);
      t.Z = C;
    },
    72668: function (e, t, a) {
      'use strict';
      a.d(t, {
        AH: function () {
          return S;
        },
        EE: function () {
          return E;
        },
        FG: function () {
          return I;
        },
        WX: function () {
          return Z;
        },
        nO: function () {
          return P;
        },
        vh: function () {
          return M;
        },
        vi: function () {
          return j;
        },
      });
      var n = a(60806),
        r = a(66582),
        i = a(78158),
        s = n.Z.login,
        o = n.Z.logout,
        c = n.Z.register,
        u = n.Z.setting,
        l = n.Z.user_info,
        d = n.Z.tenant_info,
        m = n.Z.factories_list,
        f = n.Z.llm_list,
        p = n.Z.my_llm,
        C = n.Z.set_api_key,
        v = n.Z.set_tenant_info,
        T = n.Z.add_llm,
        g = n.Z.delete_llm,
        h = n.Z.deleteFactory,
        U = n.Z.getSystemStatus,
        A = n.Z.getSystemVersion,
        x = n.Z.getSystemTokenList,
        w = n.Z.removeSystemToken,
        y = n.Z.createSystemToken,
        b = n.Z.getSystemConfig,
        k = n.Z.setLangfuseConfig,
        N = {
          login: { url: s, method: 'post' },
          logout: { url: o, method: 'get' },
          register: { url: c, method: 'post' },
          setting: { url: u, method: 'post' },
          user_info: { url: l, method: 'get' },
          get_tenant_info: { url: d, method: 'get' },
          set_tenant_info: { url: v, method: 'post' },
          factories_list: { url: m, method: 'get' },
          llm_list: { url: f, method: 'get' },
          my_llm: { url: p, method: 'get' },
          set_api_key: { url: C, method: 'post' },
          add_llm: { url: T, method: 'post' },
          delete_llm: { url: g, method: 'post' },
          getSystemStatus: { url: U, method: 'get' },
          getSystemVersion: { url: A, method: 'get' },
          deleteFactory: { url: h, method: 'post' },
          listToken: { url: x, method: 'get' },
          createToken: { url: y, method: 'post' },
          removeToken: { url: w, method: 'delete' },
          getSystemConfig: { url: b, method: 'get' },
          setLangfuseConfig: { url: k, method: 'put' },
          getLangfuseConfig: { url: k, method: 'get' },
          deleteLangfuseConfig: { url: k, method: 'delete' },
        },
        _ = (0, r.Z)(N, i.ZP),
        j = function () {
          return i.ZP.get(n.Z.login_channels);
        },
        P = function (e) {
          return (window.location.href = n.Z.login_channel(e));
        },
        Z = function (e) {
          return i.ZP.get(n.Z.listTenantUser(e));
        },
        S = function (e, t) {
          return (0, i.v_)(n.Z.addTenantUser(e), { email: t });
        },
        E = function (e) {
          var t = e.tenantId,
            a = e.userId;
          return i.ZP.delete(n.Z.deleteTenantUser(t, a));
        },
        M = function () {
          return i.ZP.get(n.Z.listTenant);
        },
        I = function (e) {
          return i.ZP.put(n.Z.agreeTenant(e));
        };
      t.ZP = _;
    },
    60806: function (e, t, a) {
      'use strict';
      a.d(t, {
        N: function () {
          return n;
        },
      });
      var n = '/v1';
      t.Z = {
        login: ''.concat(n, '/user/login'),
        logout: ''.concat(n, '/user/logout'),
        register: ''.concat(n, '/user/register'),
        setting: ''.concat(n, '/user/setting'),
        user_info: ''.concat(n, '/user/info'),
        tenant_info: ''.concat(n, '/user/tenant_info'),
        set_tenant_info: ''.concat(n, '/user/set_tenant_info'),
        login_channels: ''.concat(n, '/user/login/channels'),
        login_channel: function (e) {
          return ''.concat(n, '/user/login/').concat(e);
        },
        addTenantUser: function (e) {
          return ''.concat(n, '/tenant/').concat(e, '/user');
        },
        listTenantUser: function (e) {
          return ''.concat(n, '/tenant/').concat(e, '/user/list');
        },
        deleteTenantUser: function (e, t) {
          return ''.concat(n, '/tenant/').concat(e, '/user/').concat(t);
        },
        listTenant: ''.concat(n, '/tenant/list'),
        agreeTenant: function (e) {
          return ''.concat(n, '/tenant/agree/').concat(e);
        },
        factories_list: ''.concat(n, '/llm/factories'),
        llm_list: ''.concat(n, '/llm/list'),
        my_llm: ''.concat(n, '/llm/my_llms'),
        set_api_key: ''.concat(n, '/llm/set_api_key'),
        add_llm: ''.concat(n, '/llm/add_llm'),
        delete_llm: ''.concat(n, '/llm/delete_llm'),
        deleteFactory: ''.concat(n, '/llm/delete_factory'),
        llm_tools: ''.concat(n, '/plugin/llm_tools'),
        kb_list: ''.concat(n, '/kb/list'),
        create_kb: ''.concat(n, '/kb/create'),
        update_kb: ''.concat(n, '/kb/update'),
        rm_kb: ''.concat(n, '/kb/rm'),
        get_kb_detail: ''.concat(n, '/kb/detail'),
        getKnowledgeGraph: function (e) {
          return ''.concat(n, '/kb/').concat(e, '/knowledge_graph');
        },
        listTag: function (e) {
          return ''.concat(n, '/kb/').concat(e, '/tags');
        },
        listTagByKnowledgeIds: ''.concat(n, '/kb/tags'),
        removeTag: function (e) {
          return ''.concat(n, '/kb/').concat(e, '/rm_tags');
        },
        renameTag: function (e) {
          return ''.concat(n, '/kb/').concat(e, '/rename_tag');
        },
        chunk_list: ''.concat(n, '/chunk/list'),
        create_chunk: ''.concat(n, '/chunk/create'),
        set_chunk: ''.concat(n, '/chunk/set'),
        get_chunk: ''.concat(n, '/chunk/get'),
        switch_chunk: ''.concat(n, '/chunk/switch'),
        rm_chunk: ''.concat(n, '/chunk/rm'),
        retrieval_test: ''.concat(n, '/chunk/retrieval_test'),
        knowledge_graph: ''.concat(n, '/chunk/knowledge_graph'),
        get_document_list: ''.concat(n, '/document/list'),
        document_change_status: ''.concat(n, '/document/change_status'),
        document_rm: ''.concat(n, '/document/rm'),
        document_delete: ''.concat(n, '/api/document'),
        document_rename: ''.concat(n, '/document/rename'),
        document_create: ''.concat(n, '/document/create'),
        document_run: ''.concat(n, '/document/run'),
        document_change_parser: ''.concat(n, '/document/change_parser'),
        document_thumbnails: ''.concat(n, '/document/thumbnails'),
        get_document_file: ''.concat(n, '/document/get'),
        document_upload: ''.concat(n, '/document/upload'),
        web_crawl: ''.concat(n, '/document/web_crawl'),
        document_infos: ''.concat(n, '/document/infos'),
        upload_and_parse: ''.concat(n, '/document/upload_and_parse'),
        parse: ''.concat(n, '/document/parse'),
        setMeta: ''.concat(n, '/document/set_meta'),
        setDialog: ''.concat(n, '/dialog/set'),
        getDialog: ''.concat(n, '/dialog/get'),
        removeDialog: ''.concat(n, '/dialog/rm'),
        listDialog: ''.concat(n, '/dialog/list'),
        setConversation: ''.concat(n, '/conversation/set'),
        getConversation: ''.concat(n, '/conversation/get'),
        getConversationSSE: ''.concat(n, '/conversation/getsse'),
        listConversation: ''.concat(n, '/conversation/list'),
        removeConversation: ''.concat(n, '/conversation/rm'),
        completeConversation: ''.concat(n, '/conversation/completion'),
        deleteMessage: ''.concat(n, '/conversation/delete_msg'),
        thumbup: ''.concat(n, '/conversation/thumbup'),
        tts: ''.concat(n, '/conversation/tts'),
        ask: ''.concat(n, '/conversation/ask'),
        mindmap: ''.concat(n, '/conversation/mindmap'),
        getRelatedQuestions: ''.concat(n, '/conversation/related_questions'),
        createToken: ''.concat(n, '/api/new_token'),
        listToken: ''.concat(n, '/api/token_list'),
        removeToken: ''.concat(n, '/api/rm'),
        getStats: ''.concat(n, '/api/stats'),
        createExternalConversation: ''.concat(n, '/api/new_conversation'),
        getExternalConversation: ''.concat(n, '/api/conversation'),
        completeExternalConversation: ''.concat(n, '/api/completion'),
        uploadAndParseExternal: ''.concat(n, '/api/document/upload_and_parse'),
        listFile: ''.concat(n, '/file/list'),
        uploadFile: ''.concat(n, '/file/upload'),
        removeFile: ''.concat(n, '/file/rm'),
        renameFile: ''.concat(n, '/file/rename'),
        getAllParentFolder: ''.concat(n, '/file/all_parent_folder'),
        createFolder: ''.concat(n, '/file/create'),
        connectFileToKnowledge: ''.concat(n, '/file2document/convert'),
        getFile: ''.concat(n, '/file/get'),
        moveFile: ''.concat(n, '/file/mv'),
        getSystemVersion: ''.concat(n, '/system/version'),
        getSystemStatus: ''.concat(n, '/system/status'),
        getSystemTokenList: ''.concat(n, '/system/token_list'),
        createSystemToken: ''.concat(n, '/system/new_token'),
        listSystemToken: ''.concat(n, '/system/token_list'),
        removeSystemToken: ''.concat(n, '/system/token'),
        getSystemConfig: ''.concat(n, '/system/config'),
        setLangfuseConfig: ''.concat(n, '/langfuse/api_key'),
        listTemplates: ''.concat(n, '/canvas/templates'),
        listCanvas: ''.concat(n, '/canvas/list'),
        listCanvasTeam: ''.concat(n, '/canvas/listteam'),
        getCanvas: ''.concat(n, '/canvas/get'),
        getCanvasSSE: ''.concat(n, '/canvas/getsse'),
        removeCanvas: ''.concat(n, '/canvas/rm'),
        setCanvas: ''.concat(n, '/canvas/set'),
        settingCanvas: ''.concat(n, '/canvas/setting'),
        getListVersion: ''.concat(n, '/canvas/getlistversion'),
        getVersion: ''.concat(n, '/canvas/getversion'),
        resetCanvas: ''.concat(n, '/canvas/reset'),
        runCanvas: ''.concat(n, '/canvas/completion'),
        testDbConnect: ''.concat(n, '/canvas/test_db_connect'),
        getInputElements: ''.concat(n, '/canvas/input_elements'),
        debug: ''.concat(n, '/canvas/debug'),
        getMcpServerList: ''.concat(n, '/mcp_server/list'),
        getMultipleMcpServers: ''.concat(n, '/mcp_server/get_multiple'),
        getMcpServer: function (e) {
          return ''.concat(n, '/mcp_server/get/').concat(e);
        },
        createMcpServer: ''.concat(n, '/mcp_server/create'),
        updateMcpServer: ''.concat(n, '/mcp_server/update'),
        deleteMcpServer: ''.concat(n, '/mcp_server/rm'),
      };
    },
    51331: function (e, t, a) {
      'use strict';
      a.d(t, {
        AG: function () {
          return g;
        },
        De: function () {
          return A;
        },
        P2: function () {
          return d;
        },
        Ph: function () {
          return l;
        },
        _V: function () {
          return u;
        },
        qh: function () {
          return C;
        },
        td: function () {
          return U;
        },
        uA: function () {
          return T;
        },
        vn: function () {
          return m;
        },
      });
      var n = a(15009),
        r = a.n(n),
        i = a(99289),
        s = a.n(i),
        o = a(40169),
        c = a(62386),
        u = function (e) {
          return new Promise(function (t, a) {
            var n = new FileReader();
            n.readAsDataURL(e),
              (n.onload = function () {
                var e = new Image();
                (e.src = n.result),
                  (e.onload = function () {
                    var a = document.createElement('canvas'),
                      n = a.getContext('2d'),
                      r = e.width,
                      i = e.height,
                      s = 100;
                    r > i && r > s
                      ? ((i = (i * s) / r), (r = s))
                      : i > s && ((r = (r * s) / i), (i = s)),
                      (a.width = r),
                      (a.height = i),
                      null == n || n.drawImage(e, 0, 0, r, i);
                    var o = a.toDataURL('image/png');
                    t(o);
                  }),
                  (e.onerror = a);
              }),
              (n.onerror = a);
          });
        },
        l = function (e) {
          return Array.isArray(e) ? e : null == e ? void 0 : e.fileList;
        },
        d = function (e) {
          var t = [];
          return (
            e &&
              (t = [{ uid: '1', name: 'file', thumbUrl: e, status: 'done' }]),
            t
          );
        },
        m = (function () {
          var e = s()(
            r()().mark(function e(t) {
              var a, n, i;
              return r()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(Array.isArray(t) && t.length > 0)) {
                        e.next = 11;
                        break;
                      }
                      if (((a = t[0]), !(n = a.originFileObj))) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 6), u(n);
                    case 6:
                      return (i = e.sent), e.abrupt('return', i);
                    case 10:
                      return e.abrupt('return', a.thumbUrl);
                    case 11:
                      return e.abrupt('return', '');
                    case 12:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      function f(e, t) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = s()(
          r()().mark(function e(t, a) {
            var n, i;
            return r()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), c.Z.getDocumentFile({}, t);
                  case 2:
                    return (
                      (n = e.sent),
                      (i = new Blob([n.data], { type: a || n.data.type })),
                      e.abrupt('return', i)
                    );
                  case 5:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function C(e) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = s()(
          r()().mark(function e(t) {
            var a, n, i;
            return r()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), f(t, o.nK.Html);
                  case 2:
                    (a = e.sent),
                      (n = URL.createObjectURL(a)),
                      ((i = document.createElement('a')).href = n),
                      i.click(),
                      URL.revokeObjectURL(n);
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var T = function (e, t) {
          var a = window.URL.createObjectURL(e),
            n = document.createElement('a');
          (n.href = a),
            t && (n.download = t),
            n.click(),
            window.URL.revokeObjectURL(a);
        },
        g = (function () {
          var e = s()(
            r()().mark(function e(t) {
              var a, n, i;
              return r()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (a = t.id), (n = t.filename), (e.next = 3), f(a);
                    case 3:
                      (i = e.sent), T(i, n);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        h = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        U = function (e) {
          for (
            var t = 0, a = ('string' == typeof e ? parseInt(e, 10) : e) || 0;
            a >= 1024 && ++t;

          )
            a /= 1024;
          return a.toFixed(a < 10 && t > 0 ? 1 : 0) + ' ' + h[t];
        },
        A = (function () {
          var e = s()(
            r()().mark(function e(t, a) {
              var n;
              return r()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = new Blob([JSON.stringify(t)], { type: o.nK.Json })),
                        T(n, a);
                    case 2:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })();
    },
    19515: function (e, t, a) {
      'use strict';
      a.d(t, {
        dz: function () {
          return i;
        },
        mD: function () {
          return o;
        },
        n$: function () {
          return s;
        },
      });
      var n = a(52300),
        r = a(98361),
        i = function () {
          return { width: window.innerWidth };
        },
        s = function (e) {
          var t = new r.Z();
          return (
            t.setPublicKey(
              '-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArq9XTUSeYr2+N1h3Afl/z8Dse/2yD0ZGrKwx+EEEcdsBLca9Ynmx3nIB5obmLlSfmskLpBo0UACBmB5rEjBp2Q2f3AG3Hjd4B+gNCG6BDaawuDlgANIhGnaTLrIqWrrcm4EMzJOnAOI1fgzJRsOOUEfaS318Eq9OVO3apEyCCt0lOQK6PuksduOjVxtltDav+guVAA068NrPYmRNabVKRNLJpL8w4D44sfth5RvZ3q9t+6RTArpEtc5sh5ChzvqPOzKGMXW83C95TxmXqpbK6olN4RevSfVjEAgCydH6HN6OhtOQEcnrU97r9H0iZOWwbw3pVrZiUkuRD1R56Wzs2wIDAQAB-----END PUBLIC KEY-----',
            ),
            t.encrypt(n.DS.encode(e))
          );
        },
        o = function (e) {
          return e.slice(e.lastIndexOf('.') + 1).toLowerCase();
        };
    },
    66582: function (e, t, a) {
      'use strict';
      var n = a(97857),
        r = a.n(n),
        i = a(57557),
        s = a.n(i),
        o = ['post', 'delete', 'put'];
      t.Z = function (e, t) {
        var a = {},
          n = function (n) {
            a[n] = function (a, i) {
              var c = e[n].url,
                u = e[n];
              return (
                i && (c = c + '/' + i),
                o.some(function (t) {
                  return t === e[n].method.toLowerCase();
                })
                  ? t(c, { method: e[n].method, data: a })
                  : 'get' === e[n].method || 'GET' === e[n].method
                    ? t.get(
                        c,
                        r()(
                          r()({}, s()(u, ['method', 'url'])),
                          {},
                          { params: a },
                        ),
                      )
                    : void 0
              );
            };
          };
        for (var i in e) n(i);
        return a;
      };
    },
    78158: function (e, t, a) {
      'use strict';
      a.d(t, {
        v_: function () {
          return U;
        },
      });
      var n = a(15009),
        r = a.n(n),
        i = a(99289),
        s = a.n(i),
        o = a(9783),
        c = a.n(o),
        u = a(97857),
        l = a.n(u),
        d = a(39918),
        m = a(54707),
        f = a(61921),
        p = a(26855),
        C = a(45360),
        v = a(11238),
        T = a(31098),
        g = {
          200: m.Z.t('message.200'),
          201: m.Z.t('message.201'),
          202: m.Z.t('message.202'),
          204: m.Z.t('message.204'),
          400: m.Z.t('message.400'),
          401: m.Z.t('message.401'),
          403: m.Z.t('message.403'),
          404: m.Z.t('message.404'),
          406: m.Z.t('message.406'),
          410: m.Z.t('message.410'),
          413: m.Z.t('message.413'),
          422: m.Z.t('message.422'),
          500: m.Z.t('message.500'),
          502: m.Z.t('message.502'),
          503: m.Z.t('message.503'),
          504: m.Z.t('message.504'),
        },
        h = (0, v.l7)({
          errorHandler: function (e) {
            var t = e.response;
            if ('Failed to fetch' === e.message)
              p.Z.error({
                description: m.Z.t('message.networkAnomalyDescription'),
                message: m.Z.t('message.networkAnomaly'),
              });
            else if (t && t.status) {
              var a = g[t.status] || t.statusText,
                n = t.status,
                r = t.url;
              p.Z.error({
                message: ''
                  .concat(m.Z.t('message.requestError'), ' ')
                  .concat(n, ': ')
                  .concat(r),
                description: a,
              });
            }
            return null != t ? t : { data: { code: 1999 } };
          },
          timeout: 3e5,
          getResponse: !0,
        });
      h.interceptors.request.use(function (e, t) {
        var a = (0, T._y)(t.data),
          n = (0, T._y)(t.params);
        return {
          url: e,
          options: l()(
            l()({}, t),
            {},
            {
              data: a,
              params: n,
              headers: l()(
                l()({}, t.skipToken ? void 0 : c()({}, d._n, (0, f.cD)())),
                t.headers,
              ),
              interceptors: !0,
            },
          ),
        };
      }),
        h.interceptors.response.use(
          (function () {
            var e = s()(
              r()().mark(function e(t, a) {
                var n, i;
                return r()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((413 !== (null == t ? void 0 : t.status) &&
                            504 !== (null == t ? void 0 : t.status)) ||
                            C.ZP.error(g[null == t ? void 0 : t.status]),
                          'blob' !== a.responseType)
                        ) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt('return', t);
                      case 3:
                        return (
                          (e.next = 5),
                          null == t || null === (n = t.clone()) || void 0 === n
                            ? void 0
                            : n.json()
                        );
                      case 5:
                        return (
                          100 === (null == (i = e.sent) ? void 0 : i.code)
                            ? C.ZP.error(null == i ? void 0 : i.message)
                            : 401 === (null == i ? void 0 : i.code)
                              ? (p.Z.error({
                                  message: null == i ? void 0 : i.message,
                                  description: null == i ? void 0 : i.message,
                                  duration: 3,
                                }),
                                f.ZP.removeAll(),
                                (0, f.rf)())
                              : 0 !== (null == i ? void 0 : i.code) &&
                                p.Z.error({
                                  message: ''
                                    .concat(m.Z.t('message.hint'), ' : ')
                                    .concat(null == i ? void 0 : i.code),
                                  description: null == i ? void 0 : i.message,
                                  duration: 3,
                                }),
                          e.abrupt('return', t)
                        );
                      case 8:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t, a) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        (t.ZP = h);
      var U = function (e, t) {
        return h.post(e, { data: t });
      };
    },
    34464: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      const n = (0, a(91373).Z)('eye', [
        [
          'path',
          {
            d: 'M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0',
            key: '1nclc0',
          },
        ],
        ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
      ]);
    },
    90470: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      const n = (0, a(91373).Z)('pencil', [
        [
          'path',
          {
            d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z',
            key: '1a8usu',
          },
        ],
        ['path', { d: 'm15 5 4 4', key: '1mk7zo' }],
      ]);
    },
    28142: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      const n = (0, a(91373).Z)('upload', [
        [
          'path',
          { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' },
        ],
        ['polyline', { points: '17 8 12 3 7 8', key: 't8dd8p' }],
        ['line', { x1: '12', x2: '12', y1: '3', y2: '15', key: 'widbto' }],
      ]);
    },
    86635: function (e) {
      function t(e) {
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        });
      }
      (t.keys = function () {
        return [];
      }),
        (t.resolve = t),
        (t.id = 86635),
        (e.exports = t);
    },
    24654: function () {},
    56312: function (e, t, a) {
      'use strict';
      a.d(t, {
        F: function () {
          return u;
        },
      });
      var n = a(87536);
      const r = (e, t, a) => {
          if (e && 'reportValidity' in e) {
            const r = (0, n.U2)(a, t);
            e.setCustomValidity((r && r.message) || ''), e.reportValidity();
          }
        },
        i = (e, t) => {
          for (const a in t.fields) {
            const n = t.fields[a];
            n && n.ref && 'reportValidity' in n.ref
              ? r(n.ref, a, e)
              : n.refs && n.refs.forEach((t) => r(t, a, e));
          }
        },
        s = (e, t) => {
          t.shouldUseNativeValidation && i(e, t);
          const a = {};
          for (const r in e) {
            const i = (0, n.U2)(t.fields, r),
              s = Object.assign(e[r] || {}, { ref: i && i.ref });
            if (o(t.names || Object.keys(e), r)) {
              const e = Object.assign({}, (0, n.U2)(a, r));
              (0, n.t8)(e, 'root', s), (0, n.t8)(a, r, e);
            } else (0, n.t8)(a, r, s);
          }
          return a;
        },
        o = (e, t) => e.some((e) => e.startsWith(t + '.'));
      var c = function (e, t) {
          for (var a = {}; e.length; ) {
            var r = e[0],
              i = r.code,
              s = r.message,
              o = r.path.join('.');
            if (!a[o])
              if ('unionErrors' in r) {
                var c = r.unionErrors[0].errors[0];
                a[o] = { message: c.message, type: c.code };
              } else a[o] = { message: s, type: i };
            if (
              ('unionErrors' in r &&
                r.unionErrors.forEach(function (t) {
                  return t.errors.forEach(function (t) {
                    return e.push(t);
                  });
                }),
              t)
            ) {
              var u = a[o].types,
                l = u && u[r.code];
              a[o] = (0, n.KN)(
                o,
                t,
                a,
                i,
                l ? [].concat(l, r.message) : r.message,
              );
            }
            e.shift();
          }
          return a;
        },
        u = function (e, t, a) {
          return (
            void 0 === a && (a = {}),
            function (n, r, o) {
              try {
                return Promise.resolve(
                  (function (r, s) {
                    try {
                      var c = Promise.resolve(
                        e['sync' === a.mode ? 'parse' : 'parseAsync'](n, t),
                      ).then(function (e) {
                        return (
                          o.shouldUseNativeValidation && i({}, o),
                          { errors: {}, values: a.raw ? n : e }
                        );
                      });
                    } catch (e) {
                      return s(e);
                    }
                    return c && c.then ? c.then(void 0, s) : c;
                  })(0, function (e) {
                    if (
                      (function (e) {
                        return Array.isArray(null == e ? void 0 : e.errors);
                      })(e)
                    )
                      return {
                        values: {},
                        errors: s(
                          c(
                            e.errors,
                            !o.shouldUseNativeValidation &&
                              'all' === o.criteriaMode,
                          ),
                          o,
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
    10952: function (e, t, a) {
      'use strict';
      a.d(t, {
        Ee: function () {
          return U;
        },
        NY: function () {
          return A;
        },
        fC: function () {
          return h;
        },
      });
      var n = a(62435),
        r = a(25360),
        i = a(79698),
        s = a(9981),
        o = a(75320),
        c = a(86074),
        u = 'Avatar',
        [l, d] = (0, r.b)(u),
        [m, f] = l(u),
        p = n.forwardRef((e, t) => {
          const { __scopeAvatar: a, ...r } = e,
            [i, s] = n.useState('idle');
          return (0, c.jsx)(m, {
            scope: a,
            imageLoadingStatus: i,
            onImageLoadingStatusChange: s,
            children: (0, c.jsx)(o.WV.span, { ...r, ref: t }),
          });
        });
      p.displayName = u;
      var C = 'AvatarImage',
        v = n.forwardRef((e, t) => {
          const {
              __scopeAvatar: a,
              src: r,
              onLoadingStatusChange: u = () => {},
              ...l
            } = e,
            d = f(C, a),
            m = (function (e, t) {
              const [a, r] = n.useState('idle');
              return (
                (0, s.b)(() => {
                  if (!e) return void r('error');
                  let a = !0;
                  const n = new window.Image(),
                    i = (e) => () => {
                      a && r(e);
                    };
                  return (
                    r('loading'),
                    (n.onload = i('loaded')),
                    (n.onerror = i('error')),
                    (n.src = e),
                    t && (n.referrerPolicy = t),
                    () => {
                      a = !1;
                    }
                  );
                }, [e, t]),
                a
              );
            })(r, l.referrerPolicy),
            p = (0, i.W)((e) => {
              u(e), d.onImageLoadingStatusChange(e);
            });
          return (
            (0, s.b)(() => {
              'idle' !== m && p(m);
            }, [m, p]),
            'loaded' === m
              ? (0, c.jsx)(o.WV.img, { ...l, ref: t, src: r })
              : null
          );
        });
      v.displayName = C;
      var T = 'AvatarFallback',
        g = n.forwardRef((e, t) => {
          const { __scopeAvatar: a, delayMs: r, ...i } = e,
            s = f(T, a),
            [u, l] = n.useState(void 0 === r);
          return (
            n.useEffect(() => {
              if (void 0 !== r) {
                const e = window.setTimeout(() => l(!0), r);
                return () => window.clearTimeout(e);
              }
            }, [r]),
            u && 'loaded' !== s.imageLoadingStatus
              ? (0, c.jsx)(o.WV.span, { ...i, ref: t })
              : null
          );
        });
      g.displayName = T;
      var h = p,
        U = v,
        A = g;
    },
  },
]);
//# sourceMappingURL=p__profile-setting__profile__index.b7b2689c.async.js.map
