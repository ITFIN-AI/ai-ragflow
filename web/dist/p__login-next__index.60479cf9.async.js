(self.webpackChunk = self.webpackChunk || []).push([
  [5621],
  {
    87030: function (e, r, n) {
      'use strict';
      n.d(r, {
        Ol: function () {
          return j;
        },
        SZ: function () {
          return v;
        },
        Zb: function () {
          return h;
        },
        aY: function () {
          return g;
        },
        ll: function () {
          return N;
        },
      });
      var s = n(97857),
        a = n.n(s),
        t = n(13769),
        i = n.n(t),
        l = n(62435),
        c = n(27080),
        o = n(86074),
        d = ['className'],
        u = ['className'],
        m = ['className'],
        f = ['className'],
        x = ['className'],
        p = ['className'],
        h = l.forwardRef(function (e, r) {
          var n = e.className,
            s = i()(e, d);
          return (0, o.jsx)(
            'div',
            a()(
              {
                ref: r,
                className: (0, c.cn)(
                  'rounded-lg  bg-background-card  text-card-foreground shadow-sm',
                  n,
                ),
              },
              s,
            ),
          );
        });
      h.displayName = 'Card';
      var j = l.forwardRef(function (e, r) {
        var n = e.className,
          s = i()(e, u);
        return (0, o.jsx)(
          'div',
          a()(
            {
              ref: r,
              className: (0, c.cn)('flex flex-col space-y-1.5 p-6', n),
            },
            s,
          ),
        );
      });
      j.displayName = 'CardHeader';
      var N = l.forwardRef(function (e, r) {
        var n = e.className,
          s = i()(e, m);
        return (0, o.jsx)(
          'div',
          a()(
            {
              ref: r,
              className: (0, c.cn)(
                'text-2xl font-semibold leading-none tracking-tight',
                n,
              ),
            },
            s,
          ),
        );
      });
      N.displayName = 'CardTitle';
      var v = l.forwardRef(function (e, r) {
        var n = e.className,
          s = i()(e, f);
        return (0, o.jsx)(
          'div',
          a()(
            {
              ref: r,
              className: (0, c.cn)('text-sm text-muted-foreground', n),
            },
            s,
          ),
        );
      });
      v.displayName = 'CardDescription';
      var g = l.forwardRef(function (e, r) {
        var n = e.className,
          s = i()(e, x);
        return (0, o.jsx)(
          'div',
          a()({ ref: r, className: (0, c.cn)('p-6 pt-0', n) }, s),
        );
      });
      (g.displayName = 'CardContent'),
        (l.forwardRef(function (e, r) {
          var n = e.className,
            s = i()(e, p);
          return (0, o.jsx)(
            'div',
            a()(
              { ref: r, className: (0, c.cn)('flex items-center p-6 pt-0', n) },
              s,
            ),
          );
        }).displayName = 'CardFooter');
    },
    23309: function (e, r, n) {
      'use strict';
      n.d(r, {
        X: function () {
          return f;
        },
      });
      var s = n(97857),
        a = n.n(s),
        t = n(13769),
        i = n.n(t),
        l = n(46069),
        c = n(13742),
        o = n(62435),
        d = n(27080),
        u = n(86074),
        m = ['className'],
        f = o.forwardRef(function (e, r) {
          var n = e.className,
            s = i()(e, m);
          return (0, u.jsx)(
            l.fC,
            a()(
              a()(
                {
                  ref: r,
                  className: (0, d.cn)(
                    'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                    n,
                  ),
                },
                s,
              ),
              {},
              {
                children: (0, u.jsx)(l.z$, {
                  className: (0, d.cn)(
                    'flex items-center justify-center text-current',
                  ),
                  children: (0, u.jsx)(c.Z, { className: 'h-4 w-4' }),
                }),
              },
            ),
          );
        });
      f.displayName = l.fC.displayName;
    },
    80499: function (e, r, n) {
      'use strict';
      n.d(r, {
        NI: function () {
          return P;
        },
        Wi: function () {
          return y;
        },
        l0: function () {
          return g;
        },
        lX: function () {
          return S;
        },
        pf: function () {
          return z;
        },
        xJ: function () {
          return C;
        },
        zG: function () {
          return R;
        },
      });
      var s = n(13769),
        a = n.n(s),
        t = n(97857),
        i = n.n(t),
        l = n(49677),
        c = n.n(l),
        o = n(88426),
        d = n(62435),
        u = n(87536),
        m = n(65038),
        f = n(27080),
        x = n(84146),
        p = n(86074),
        h = ['className'],
        j = ['className', 'tooltip'],
        N = ['className'],
        v = ['className', 'children'],
        g = u.RV,
        b = d.createContext({}),
        w = d.createContext({}),
        y = function (e) {
          var r = Object.assign({}, (c()(e), e));
          return (0, p.jsx)(w.Provider, {
            value: { name: r.name },
            children: (0, p.jsx)(u.Qr, i()({}, r)),
          });
        },
        I = function () {
          var e = d.useContext(w),
            r = d.useContext(b),
            n = (0, u.Gc)(),
            s = n.getFieldState,
            a = n.formState,
            t = s(e.name, a);
          if (!e)
            throw new Error('useFormField should be used within <FormField>');
          var l = r.id;
          return i()(
            {
              id: l,
              name: e.name,
              formItemId: ''.concat(l, '-form-item'),
              formDescriptionId: ''.concat(l, '-form-item-description'),
              formMessageId: ''.concat(l, '-form-item-message'),
            },
            t,
          );
        },
        k = d.forwardRef(function (e, r) {
          var n = e.className,
            s = a()(e, h),
            t = d.useId();
          return (0, p.jsx)(b.Provider, {
            value: { id: t },
            children: (0, p.jsx)(
              'div',
              i()({ ref: r, className: (0, f.cn)('space-y-2', n) }, s),
            ),
          });
        });
      k.displayName = 'FormItem';
      var C = d.memo(k),
        S = d.forwardRef(function (e, r) {
          var n = e.className,
            s = e.tooltip,
            t = a()(e, j),
            l = I(),
            c = l.error,
            o = l.formItemId;
          return (0, p.jsxs)(
            m._,
            i()(
              i()(
                {
                  ref: r,
                  className: (0, f.cn)(
                    c && 'text-destructive',
                    n,
                    'flex pb-0.5',
                  ),
                  htmlFor: o,
                },
                t,
              ),
              {},
              { children: [t.children, s && (0, p.jsx)(x.Z4, { tooltip: s })] },
            ),
          );
        });
      S.displayName = 'FormLabel';
      var P = d.forwardRef(function (e, r) {
        var n = Object.assign({}, (c()(e), e)),
          s = I(),
          a = s.error,
          t = s.formItemId,
          l = s.formDescriptionId,
          d = s.formMessageId;
        return (0, p.jsx)(
          o.g7,
          i()(
            {
              ref: r,
              id: t,
              'aria-describedby': a
                ? ''.concat(l, ' ').concat(d)
                : ''.concat(l),
              'aria-invalid': !!a,
            },
            n,
          ),
        );
      });
      P.displayName = 'FormControl';
      var z = d.forwardRef(function (e, r) {
        var n = e.className,
          s = a()(e, N),
          t = I().formDescriptionId;
        return (0, p.jsx)(
          'p',
          i()(
            {
              ref: r,
              id: t,
              className: (0, f.cn)('text-sm text-muted-foreground', n),
            },
            s,
          ),
        );
      });
      z.displayName = 'FormDescription';
      var R = d.forwardRef(function (e, r) {
        var n = e.className,
          s = e.children,
          t = a()(e, v),
          l = I(),
          c = l.error,
          o = l.formMessageId,
          d = c ? String(null == c ? void 0 : c.message) : s;
        return d
          ? (0, p.jsx)(
              'p',
              i()(
                i()(
                  {
                    ref: r,
                    id: o,
                    className: (0, f.cn)(
                      'text-sm font-medium text-destructive',
                      n,
                    ),
                  },
                  t,
                ),
                {},
                { children: d },
              ),
            )
          : null;
      });
      R.displayName = 'FormMessage';
    },
    65038: function (e, r, n) {
      'use strict';
      n.d(r, {
        _: function () {
          return x;
        },
      });
      var s = n(97857),
        a = n.n(s),
        t = n(13769),
        i = n.n(t),
        l = n(49102),
        c = n(45139),
        o = n(62435),
        d = n(27080),
        u = n(86074),
        m = ['className'],
        f = (0, c.j)(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        ),
        x = o.forwardRef(function (e, r) {
          var n = e.className,
            s = i()(e, m);
          return (0, u.jsx)(
            l.f,
            a()({ ref: r, className: (0, d.cn)(f(), n) }, s),
          );
        });
      x.displayName = l.f.displayName;
    },
    86968: function (e, r, n) {
      'use strict';
      n.d(r, {
        I3: function () {
          return p;
        },
        pG: function () {
          return x;
        },
        qM: function () {
          return h;
        },
      });
      var s = n(15009),
        a = n.n(s),
        t = n(99289),
        i = n.n(t),
        l = n(5574),
        c = n.n(l),
        o = n(21640),
        d = n(3321),
        u = (n(18446), n(62435)),
        m = n(67421),
        f = n(86074),
        x = function () {
          var e = (0, u.useState)(!1),
            r = c()(e, 2),
            n = r[0],
            s = r[1],
            a = (0, u.useCallback)(function () {
              s(!0);
            }, []),
            t = (0, u.useCallback)(function () {
              s(!1);
            }, []),
            i = (0, u.useCallback)(
              function () {
                s(!n);
              },
              [n],
            );
          return { visible: n, showModal: a, hideModal: t, switchVisible: i };
        };
      var p = function () {
          var e = d.Z.useApp().modal,
            r = (0, m.$G)().t;
          return (0, u.useCallback)(
            function (n) {
              var s = n.title,
                t = n.content,
                l = n.onOk,
                c = n.onCancel;
              return new Promise(function (n, d) {
                e.confirm({
                  title: null != s ? s : r('common.deleteModalTitle'),
                  icon: (0, f.jsx)(o.Z, {}),
                  content: t,
                  okText: r('common.ok'),
                  okType: 'danger',
                  cancelText: r('common.cancel'),
                  onOk: function () {
                    return i()(
                      a()().mark(function e() {
                        var r;
                        return a()().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    null == l ? void 0 : l()
                                  );
                                case 3:
                                  (r = e.sent),
                                    n(r),
                                    console.info(r),
                                    (e.next = 11);
                                  break;
                                case 8:
                                  (e.prev = 8), (e.t0 = e.catch(0)), d(e.t0);
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
            [r, e],
          );
        },
        h = function (e) {
          return (0, m.$G)('translation', { keyPrefix: e });
        };
    },
    11237: function (e, r, n) {
      'use strict';
      n.r(r),
        n.d(r, {
          SignInCard: function () {
            return q;
          },
          SignUpCard: function () {
            return L;
          },
          VerifyEmailCard: function () {
            return W;
          },
          default: function () {
            return Y;
          },
        });
      var s = n(5574),
        a = n.n(s),
        t = n(57636),
        i = n(87030),
        l = n(81136),
        c = n(86968),
        o = n(62469),
        d = n(42028),
        u = n(97857),
        m = n.n(u),
        f = n(80316),
        x = n(23309),
        p = n(80499),
        h = n(27591),
        j = n(49677),
        N = n.n(j),
        v = n(13769),
        g = n.n(v),
        b = n(28058),
        w = n(55780),
        y = n(62435),
        I = n(27080),
        k = n(86074),
        C = ['className', 'containerClassName'],
        S = ['className'],
        P = ['index', 'className'],
        z = y.forwardRef(function (e, r) {
          var n = e.className,
            s = e.containerClassName,
            a = g()(e, C);
          return (0, k.jsx)(
            b.uZ,
            m()(
              {
                ref: r,
                containerClassName: (0, I.cn)(
                  'flex items-center gap-2 has-[:disabled]:opacity-50',
                  s,
                ),
                className: (0, I.cn)('disabled:cursor-not-allowed', n),
              },
              a,
            ),
          );
        });
      z.displayName = 'InputOTP';
      var R = y.forwardRef(function (e, r) {
        var n = e.className,
          s = g()(e, S);
        return (0, k.jsx)(
          'div',
          m()({ ref: r, className: (0, I.cn)('flex items-center', n) }, s),
        );
      });
      R.displayName = 'InputOTPGroup';
      var O = y.forwardRef(function (e, r) {
        var n = e.index,
          s = e.className,
          a = g()(e, P),
          t = y.useContext(b.VM).slots[n],
          i = t.char,
          l = t.hasFakeCaret,
          c = t.isActive;
        return (0, k.jsxs)(
          'div',
          m()(
            m()(
              {
                ref: r,
                className: (0, I.cn)(
                  'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
                  c && 'z-10 ring-2 ring-ring ring-offset-background',
                  s,
                ),
              },
              a,
            ),
            {},
            {
              children: [
                i,
                l &&
                  (0, k.jsx)('div', {
                    className:
                      'pointer-events-none absolute inset-0 flex items-center justify-center',
                    children: (0, k.jsx)('div', {
                      className:
                        'h-4 w-px animate-caret-blink bg-foreground duration-1000',
                    }),
                  }),
              ],
            },
          ),
        );
      });
      (O.displayName = 'InputOTPSlot'),
        (y.forwardRef(function (e, r) {
          var n = Object.assign({}, (N()(e), e));
          return (0, k.jsx)(
            'div',
            m()(
              m()({ ref: r, role: 'separator' }, n),
              {},
              { children: (0, k.jsx)(w.Z, {}) },
            ),
          );
        }).displayName = 'InputOTPSeparator');
      var F = n(56312),
        M = n(87536),
        G = n(1604);
      function T() {
        var e = (0, c.qM)('login').t,
          r = G.z.object({
            email: G.z.string().email({ message: e('emailPlaceholder') }),
            nickname: G.z.string({ required_error: e('nicknamePlaceholder') }),
            password: G.z.string({ required_error: e('passwordPlaceholder') }),
            agree: G.z.boolean({ required_error: e('passwordPlaceholder') }),
          }),
          n = (0, M.cI)({
            resolver: (0, F.F)(r),
            defaultValues: { email: '' },
          });
        return (0, k.jsx)(
          p.l0,
          m()(
            m()({}, n),
            {},
            {
              children: (0, k.jsxs)('form', {
                onSubmit: n.handleSubmit(function (e) {
                  console.log('🚀 ~ onSubmit ~ data:', e),
                    (0, f.Am)({
                      title: 'You submitted the following values:',
                      description: (0, k.jsx)('pre', {
                        className: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4',
                        children: (0, k.jsx)('code', {
                          className: 'text-white',
                          children: JSON.stringify(e, null, 2),
                        }),
                      }),
                    });
                }),
                className: 'space-y-6',
                children: [
                  (0, k.jsx)(p.Wi, {
                    control: n.control,
                    name: 'email',
                    render: function (r) {
                      var n = r.field;
                      return (0, k.jsxs)(p.xJ, {
                        children: [
                          (0, k.jsx)(p.lX, { children: e('emailLabel') }),
                          (0, k.jsx)(p.NI, {
                            children: (0, k.jsx)(
                              h.II,
                              m()({ placeholder: e('emailPlaceholder') }, n),
                            ),
                          }),
                          (0, k.jsx)(p.zG, {}),
                        ],
                      });
                    },
                  }),
                  (0, k.jsx)(p.Wi, {
                    control: n.control,
                    name: 'nickname',
                    render: function (r) {
                      var n = r.field;
                      return (0, k.jsxs)(p.xJ, {
                        children: [
                          (0, k.jsx)(p.lX, { children: e('nicknameLabel') }),
                          (0, k.jsx)(p.NI, {
                            children: (0, k.jsx)(
                              h.II,
                              m()({ placeholder: e('nicknamePlaceholder') }, n),
                            ),
                          }),
                          (0, k.jsx)(p.zG, {}),
                        ],
                      });
                    },
                  }),
                  (0, k.jsx)(p.Wi, {
                    control: n.control,
                    name: 'password',
                    render: function (r) {
                      var n = r.field;
                      return (0, k.jsxs)(p.xJ, {
                        children: [
                          (0, k.jsx)(p.lX, { children: e('passwordLabel') }),
                          (0, k.jsx)(p.NI, {
                            children: (0, k.jsx)(
                              h.II,
                              m()(
                                {
                                  type: 'password',
                                  placeholder: e('passwordPlaceholder'),
                                },
                                n,
                              ),
                            ),
                          }),
                          (0, k.jsx)(p.zG, {}),
                        ],
                      });
                    },
                  }),
                  (0, k.jsx)(p.Wi, {
                    control: n.control,
                    name: 'agree',
                    render: function (e) {
                      var r = e.field;
                      return (0, k.jsxs)(p.xJ, {
                        className:
                          'flex flex-row items-start space-x-3 space-y-0 rounded-md',
                        children: [
                          (0, k.jsx)(p.NI, {
                            children: (0, k.jsx)(x.X, {
                              checked: r.value,
                              onCheckedChange: r.onChange,
                            }),
                          }),
                          (0, k.jsx)('div', {
                            className: 'space-y-1 leading-none',
                            children: (0, k.jsx)(p.lX, {
                              children:
                                'I understand and agree to the Terms of Service and Privacy Policy.',
                            }),
                          }),
                        ],
                      });
                    },
                  }),
                  (0, k.jsx)(t.zx, {
                    type: 'submit',
                    className: 'w-full',
                    children: e('signUp'),
                  }),
                ],
              }),
            },
          ),
        );
      }
      function V() {
        var e = (0, c.qM)('login').t,
          r = G.z.object({
            email: G.z.string().email({ message: e('emailPlaceholder') }),
            password: G.z.string({ required_error: e('passwordPlaceholder') }),
          }),
          n = (0, M.cI)({
            resolver: (0, F.F)(r),
            defaultValues: { email: '' },
          });
        return (0, k.jsx)(
          p.l0,
          m()(
            m()({}, n),
            {},
            {
              children: (0, k.jsxs)('form', {
                onSubmit: n.handleSubmit(function (e) {
                  console.log('🚀 ~ onSubmit ~ data:', e),
                    (0, f.Am)({
                      title: 'You submitted the following values:',
                      description: (0, k.jsx)('pre', {
                        className: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4',
                        children: (0, k.jsx)('code', {
                          className: 'text-white',
                          children: JSON.stringify(e, null, 2),
                        }),
                      }),
                    });
                }),
                className: 'space-y-6',
                children: [
                  (0, k.jsx)(p.Wi, {
                    control: n.control,
                    name: 'email',
                    render: function (r) {
                      var n = r.field;
                      return (0, k.jsxs)(p.xJ, {
                        children: [
                          (0, k.jsx)(p.lX, { children: e('emailLabel') }),
                          (0, k.jsx)(p.NI, {
                            children: (0, k.jsx)(
                              h.II,
                              m()({ placeholder: e('emailPlaceholder') }, n),
                            ),
                          }),
                          (0, k.jsx)(p.zG, {}),
                        ],
                      });
                    },
                  }),
                  (0, k.jsx)(p.Wi, {
                    control: n.control,
                    name: 'password',
                    render: function (r) {
                      var n = r.field;
                      return (0, k.jsxs)(p.xJ, {
                        children: [
                          (0, k.jsx)(p.lX, { children: e('passwordLabel') }),
                          (0, k.jsx)(p.NI, {
                            children: (0, k.jsx)(
                              h.II,
                              m()(
                                {
                                  type: 'password',
                                  placeholder: e('passwordPlaceholder'),
                                },
                                n,
                              ),
                            ),
                          }),
                          (0, k.jsx)(p.zG, {}),
                        ],
                      });
                    },
                  }),
                  (0, k.jsxs)('div', {
                    className: 'flex items-center space-x-2',
                    children: [
                      (0, k.jsx)(x.X, { id: 'terms' }),
                      (0, k.jsx)('label', {
                        htmlFor: 'terms',
                        className:
                          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                        children: e('rememberMe'),
                      }),
                    ],
                  }),
                  (0, k.jsx)(t.zx, {
                    type: 'submit',
                    className: 'w-full',
                    children: e('login'),
                  }),
                ],
              }),
            },
          ),
        );
      }
      function Z() {
        var e = G.z.object({
            pin: G.z
              .string()
              .min(6, {
                message: 'Your one-time password must be 6 characters.',
              }),
          }),
          r = (0, M.cI)({ resolver: (0, F.F)(e), defaultValues: { pin: '' } });
        return (0, k.jsx)(
          p.l0,
          m()(
            m()({}, r),
            {},
            {
              children: (0, k.jsxs)('form', {
                onSubmit: r.handleSubmit(function (e) {
                  console.log('🚀 ~ onSubmit ~ data:', e),
                    (0, f.Am)({
                      title: 'You submitted the following values:',
                      description: (0, k.jsx)('pre', {
                        className: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4',
                        children: (0, k.jsx)('code', {
                          className: 'text-white',
                          children: JSON.stringify(e, null, 2),
                        }),
                      }),
                    });
                }),
                className: 'space-y-6',
                children: [
                  (0, k.jsx)(p.Wi, {
                    control: r.control,
                    name: 'pin',
                    render: function (e) {
                      var r = e.field;
                      return (0, k.jsxs)(p.xJ, {
                        children: [
                          (0, k.jsx)(p.lX, { children: 'One-Time Password' }),
                          (0, k.jsx)(p.NI, {
                            children: (0, k.jsx)(
                              z,
                              m()(
                                m()({ maxLength: 6 }, r),
                                {},
                                {
                                  children: (0, k.jsxs)(R, {
                                    children: [
                                      (0, k.jsx)(O, { index: 0 }),
                                      (0, k.jsx)(O, { index: 1 }),
                                      (0, k.jsx)(O, { index: 2 }),
                                      (0, k.jsx)(O, { index: 3 }),
                                      (0, k.jsx)(O, { index: 4 }),
                                      (0, k.jsx)(O, { index: 5 }),
                                    ],
                                  }),
                                },
                              ),
                            ),
                          }),
                          (0, k.jsx)(p.zG, {}),
                        ],
                      });
                    },
                  }),
                  (0, k.jsx)(t.zx, {
                    type: 'submit',
                    className: 'w-full',
                    children: 'Verify',
                  }),
                ],
              }),
            },
          ),
        );
      }
      var J = (function (e) {
          return (
            (e[(e.SignIn = 0)] = 'SignIn'),
            (e[(e.SignUp = 1)] = 'SignUp'),
            (e[(e.ForgotPassword = 2)] = 'ForgotPassword'),
            (e[(e.ResetPassword = 3)] = 'ResetPassword'),
            (e[(e.VerifyEmail = 4)] = 'VerifyEmail'),
            e
          );
        })({}),
        U = function (e) {
          var r = (0, d.lr)(),
            n = a()(r, 2),
            s = (n[0], n[1]);
          return {
            switchStep: (0, y.useCallback)(
              function () {
                s(new URLSearchParams({ step: e.toString() }));
              },
              [s, e],
            ),
          };
        };
      function X() {
        return (0, k.jsxs)('section', {
          className: 'pt-4',
          children: [
            (0, k.jsx)(l.Z, {}),
            (0, k.jsx)('p', {
              className: 'text-center pt-4',
              children: 'or continue with',
            }),
            (0, k.jsxs)('div', {
              className: 'flex gap-4 justify-center pt-[20px]',
              children: [
                (0, k.jsx)(o.wGg, { className: 'w-8 h-8' }),
                (0, k.jsx)(o.dsO, { className: 'w-8 h-8' }),
              ],
            }),
          ],
        });
      }
      function L() {
        var e = (0, c.qM)('login').t,
          r = U(J.SignIn).switchStep;
        return (0, k.jsxs)(i.Zb, {
          className: 'w-[400px]',
          children: [
            (0, k.jsx)(i.Ol, {
              children: (0, k.jsx)(i.ll, { children: e('signUp') }),
            }),
            (0, k.jsxs)(i.aY, {
              children: [
                (0, k.jsx)(T, {}),
                (0, k.jsx)('div', {
                  className: 'text-center',
                  children: (0, k.jsx)(t.zx, {
                    variant: 'link',
                    className: 'pt-6',
                    onClick: r,
                    children: 'Already have an account? Log In',
                  }),
                }),
                (0, k.jsx)(X, {}),
              ],
            }),
          ],
        });
      }
      function q() {
        var e = (0, c.qM)('login').t,
          r = U(J.SignUp).switchStep;
        return (0, k.jsxs)(i.Zb, {
          className: 'w-[400px]',
          children: [
            (0, k.jsx)(i.Ol, {
              children: (0, k.jsx)(i.ll, { children: e('login') }),
            }),
            (0, k.jsxs)(i.aY, {
              children: [
                (0, k.jsx)(V, {}),
                (0, k.jsx)(t.zx, {
                  className: 'w-full mt-2',
                  onClick: r,
                  variant: 'secondary',
                  children: e('signUp'),
                }),
              ],
            }),
          ],
        });
      }
      function W() {
        return (0, k.jsxs)(i.Zb, {
          className: 'w-[400px]',
          children: [
            (0, k.jsx)(i.Ol, {
              children: (0, k.jsx)(i.ll, { children: 'Verify email' }),
            }),
            (0, k.jsx)(i.aY, {
              children: (0, k.jsxs)('section', {
                className: 'flex gap-y-6 flex-col',
                children: [
                  (0, k.jsxs)('div', {
                    className: 'flex items-center space-x-4',
                    children: [
                      (0, k.jsxs)('div', {
                        className: 'flex-1 space-y-1',
                        children: [
                          (0, k.jsx)('p', {
                            className: 'text-sm font-medium leading-none',
                            children: 'We’ve sent a 6-digit code to',
                          }),
                          (0, k.jsx)('p', {
                            className: 'text-sm text-blue-500',
                            children: 'yifanwu92@gmail.com.',
                          }),
                        ],
                      }),
                      (0, k.jsx)(t.zx, { children: 'Resend' }),
                    ],
                  }),
                  (0, k.jsx)(Z, {}),
                ],
              }),
            }),
          ],
        });
      }
      var Y = function () {
        var e,
          r = (0, d.lr)(),
          n = a()(r, 1)[0],
          s = Number(
            null !== (e = n.get('step')) && void 0 !== e ? e : J.SignIn,
          );
        return (0, k.jsx)('div', {
          className:
            "w-full h-full flex items-center pl-[15%] bg-[url('@/assets/svg/next-login-bg.svg')] bg-cover bg-center",
          children: (0, k.jsxs)('div', {
            className:
              'inline-block bg-colors-background-neutral-standard rounded-lg',
            children: [
              s === J.SignIn && (0, k.jsx)(q, {}),
              s === J.SignUp && (0, k.jsx)(L, {}),
              s === J.VerifyEmail && (0, k.jsx)(W, {}),
            ],
          }),
        });
      };
    },
    86635: function (e) {
      function r(e) {
        return Promise.resolve().then(function () {
          var r = new Error("Cannot find module '" + e + "'");
          throw ((r.code = 'MODULE_NOT_FOUND'), r);
        });
      }
      (r.keys = function () {
        return [];
      }),
        (r.resolve = r),
        (r.id = 86635),
        (e.exports = r);
    },
  },
]);
//# sourceMappingURL=p__login-next__index.60479cf9.async.js.map
