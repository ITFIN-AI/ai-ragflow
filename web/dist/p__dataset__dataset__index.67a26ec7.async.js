(self.webpackChunk = self.webpackChunk || []).push([
  [5915],
  {
    41332: function (e, n, t) {
      'use strict';
      t.d(n, {
        z: function () {
          return f;
        },
      });
      var a = t(9783),
        r = t.n(a),
        s = t(57636),
        o = t(87030),
        i = t(27080),
        c = t(28250),
        l = t(62435),
        u = t(26625),
        d = t(81136),
        m = t(86074);
      function f(e) {
        var n = e.list,
          t = e.count,
          a = (0, l.useCallback)(function (e) {
            return 'delete' === e;
          }, []);
        return (0, m.jsx)(o.Zb, {
          className: 'mb-4',
          children: (0, m.jsxs)(o.aY, {
            className: 'p-1 pl-5 flex items-center gap-6',
            children: [
              (0, m.jsxs)('section', {
                className: 'text-text-sub-title-invert flex items-center gap-2',
                children: [
                  (0, m.jsxs)('span', {
                    children: ['Selected: ', t, ' Files'],
                  }),
                  (0, m.jsx)(c.Z, { className: 'size-3' }),
                ],
              }),
              (0, m.jsx)(d.Z, { orientation: 'vertical', className: 'h-3' }),
              (0, m.jsx)('ul', {
                className: 'flex gap-2',
                children: n.map(function (e) {
                  return (0, m.jsx)(
                    'li',
                    {
                      className: (0, i.cn)(
                        r()({}, 'text-text-delete-red', a(e.id)),
                      ),
                      children: (0, m.jsx)(u.h, {
                        hidden: !a(e.id),
                        onOk: e.onClick,
                        children: (0, m.jsxs)(s.zx, {
                          variant: 'ghost',
                          onClick: a(e.id) ? function () {} : e.onClick,
                          children: [e.icon, ' ', e.label],
                        }),
                      }),
                    },
                    e.id,
                  );
                }),
              }),
            ],
          }),
        });
      }
    },
    5848: function (e, n, t) {
      'use strict';
      t.d(n, {
        j: function () {
          return _;
        },
      });
      var a = t(5574),
        r = t.n(a),
        s = t(57636),
        o = t(28993),
        i = t(97857),
        c = t.n(i),
        l = t(13769),
        u = t.n(l),
        d = t(50981),
        m = t(62435),
        f = t(27080),
        p = t(86074),
        g = ['className'],
        h = ['className'],
        x = ['className'],
        v = d.fC,
        b = m.forwardRef(function (e, n) {
          var t = e.className,
            a = u()(e, g);
          return (0, p.jsx)(
            d.aV,
            c()(
              {
                ref: n,
                className: (0, f.cn)(
                  'inline-flex h-10 items-center justify-center rounded-md bg-colors-background-inverse-standard p-1 text-colors-text-neutral-standard',
                  t,
                ),
              },
              a,
            ),
          );
        });
      b.displayName = d.aV.displayName;
      var j = m.forwardRef(function (e, n) {
        var t = e.className,
          a = u()(e, h);
        return (0, p.jsx)(
          d.xz,
          c()(
            {
              ref: n,
              className: (0, f.cn)(
                'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-colors-background-inverse-strong data-[state=active]:text-colors-text-inverse-strong data-[state=active]:shadow-sm',
                t,
              ),
            },
            a,
          ),
        );
      });
      j.displayName = d.xz.displayName;
      var k = m.forwardRef(function (e, n) {
        var t = e.className,
          a = u()(e, x);
        return (0, p.jsx)(
          d.VY,
          c()(
            {
              ref: n,
              className: (0, f.cn)(
                'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                t,
              ),
            },
            a,
          ),
        );
      });
      k.displayName = d.VY.displayName;
      var w = t(67421),
        N = t(84445);
      function C(e) {
        var n = e.setFiles,
          t = (0, w.$G)().t;
        return (0, p.jsxs)(v, {
          defaultValue: 'account',
          children: [
            (0, p.jsxs)(b, {
              className: 'grid w-full grid-cols-2 mb-4',
              children: [
                (0, p.jsx)(j, {
                  value: 'account',
                  children: t('fileManager.local'),
                }),
                (0, p.jsx)(j, {
                  value: 'password',
                  children: t('fileManager.s3'),
                }),
              ],
            }),
            (0, p.jsx)(k, {
              value: 'account',
              children: (0, p.jsx)(N.b, {
                maxFileCount: 8,
                maxSize: 8388608,
                onValueChange: n,
                accept: { '*': [] },
              }),
            }),
            (0, p.jsx)(k, {
              value: 'password',
              children: t('common.comingSoon'),
            }),
          ],
        });
      }
      function _(e) {
        var n = e.hideModal,
          t = e.onOk,
          a = e.loading,
          i = (0, w.$G)().t,
          c = (0, m.useState)([]),
          l = r()(c, 2),
          u = l[0],
          d = l[1],
          f = (0, m.useCallback)(
            function () {
              null == t || t(u);
            },
            [u, t],
          );
        return (0, p.jsx)(o.Vq, {
          open: !0,
          onOpenChange: n,
          children: (0, p.jsxs)(o.cZ, {
            className: 'sm:max-w-[425px]',
            children: [
              (0, p.jsx)(o.fK, {
                children: (0, p.jsx)(o.$N, {
                  children: i('fileManager.uploadFile'),
                }),
              }),
              (0, p.jsx)(C, { setFiles: d }),
              (0, p.jsx)(o.cN, {
                children: (0, p.jsx)(s.dw, {
                  type: 'submit',
                  onClick: f,
                  loading: a,
                  children: i('common.save'),
                }),
              }),
            ],
          }),
        });
      }
    },
    84445: function (e, n, t) {
      'use strict';
      t.d(n, {
        b: function () {
          return z;
        },
      });
      var a = t(97857),
        r = t.n(a),
        s = t(19632),
        o = t.n(s),
        i = t(5574),
        c = t.n(i),
        l = t(13769),
        u = t.n(l),
        d = t(13766),
        m = t(41352),
        f = t(28142),
        p = t(62435),
        g = t(44524),
        h = t(64712),
        x = t(57636),
        v = t(77631),
        b = t(68635),
        j = t(27080),
        k = t(86074),
        w = ['className', 'orientation'],
        N = ['className', 'children'],
        C = p.forwardRef(function (e, n) {
          var t = e.className,
            a = e.orientation,
            s = void 0 === a ? 'vertical' : a,
            o = u()(e, w);
          return (0, k.jsx)(
            b.gb,
            r()(
              r()(
                {
                  ref: n,
                  orientation: s,
                  className: (0, j.cn)(
                    'flex touch-none select-none transition-colors',
                    'vertical' === s &&
                      'h-full w-2.5 border-l border-l-transparent p-[1px]',
                    'horizontal' === s &&
                      'h-2.5 flex-col border-t border-t-transparent p-[1px]',
                    t,
                  ),
                },
                o,
              ),
              {},
              {
                children: (0, k.jsx)(b.q4, {
                  className: 'relative flex-1 rounded-full bg-border',
                }),
              },
            ),
          );
        });
      C.displayName = b.gb.displayName;
      var _ = p.forwardRef(function (e, n) {
        var t = e.className,
          a = e.children,
          s = u()(e, N);
        return (0, k.jsxs)(
          b.fC,
          r()(
            r()(
              { ref: n, className: (0, j.cn)('relative overflow-hidden', t) },
              s,
            ),
            {},
            {
              children: [
                (0, k.jsx)(b.l_, {
                  className: 'h-full w-full rounded-[inherit]',
                  children: a,
                }),
                (0, k.jsx)(C, {}),
                (0, k.jsx)(b.Ns, {}),
              ],
            },
          ),
        );
      });
      function y(e) {
        var n = p.useRef(e);
        return (
          p.useEffect(function () {
            n.current = e;
          }),
          p.useMemo(function () {
            return function () {
              for (
                var e, t = arguments.length, a = new Array(t), r = 0;
                r < t;
                r++
              )
                a[r] = arguments[r];
              return null === (e = n.current) || void 0 === e
                ? void 0
                : e.call.apply(e, [n].concat(a));
            };
          }, [])
        );
      }
      function D(e) {
        var n = e.prop,
          t = e.defaultProp,
          a = e.onChange,
          r = void 0 === a ? function () {} : a,
          s = (function (e) {
            var n = e.defaultProp,
              t = e.onChange,
              a = p.useState(n),
              r = c()(a, 1)[0],
              s = p.useRef(r),
              o = y(t);
            return (
              p.useEffect(
                function () {
                  s.current !== r && (o(r), (s.current = r));
                },
                [r, s, o],
              ),
              a
            );
          })({ defaultProp: t, onChange: r }),
          o = c()(s, 2),
          i = o[0],
          l = o[1],
          u = void 0 !== n,
          d = u ? n : i,
          m = y(r);
        return [
          d,
          p.useCallback(
            function (e) {
              if (u) {
                var t = 'function' == typeof e ? e(n) : e;
                t !== n && m(t);
              } else l(e);
            },
            [u, n, l, m],
          ),
        ];
      }
      _.displayName = b.fC.displayName;
      var S = [
        'value',
        'onValueChange',
        'onUpload',
        'progresses',
        'accept',
        'maxSize',
        'maxFileCount',
        'multiple',
        'disabled',
        'className',
      ];
      function Z(e) {
        return 'preview' in e && 'string' == typeof e.preview;
      }
      function M(e) {
        var n = e.file;
        return n.type.startsWith('image/')
          ? (0, k.jsx)('img', {
              src: n.preview,
              alt: n.name,
              width: 48,
              height: 48,
              loading: 'lazy',
              className: 'aspect-square shrink-0 rounded-md object-cover',
            })
          : (0, k.jsx)(d.Z, {
              className: 'size-10 text-muted-foreground',
              'aria-hidden': 'true',
            });
      }
      function P(e) {
        var n = e.file,
          t = e.progress,
          a = e.onRemove;
        return (0, k.jsxs)('div', {
          className: 'relative flex items-center gap-2.5',
          children: [
            (0, k.jsxs)('div', {
              className: 'flex flex-1 gap-2.5',
              children: [
                Z(n) ? (0, k.jsx)(M, { file: n }) : null,
                (0, k.jsxs)('div', {
                  className: 'flex w-full flex-col gap-2',
                  children: [
                    (0, k.jsxs)('div', {
                      className: 'flex flex-col gap-px',
                      children: [
                        (0, k.jsx)('p', {
                          className:
                            'line-clamp-1 text-sm font-medium text-foreground/80',
                          children: n.name,
                        }),
                        (0, k.jsx)('p', {
                          className: 'text-xs text-muted-foreground',
                          children: (0, j.t)(n.size),
                        }),
                      ],
                    }),
                    t ? (0, k.jsx)(v.E, { value: t }) : null,
                  ],
                }),
              ],
            }),
            (0, k.jsx)('div', {
              className: 'flex items-center gap-2',
              children: (0, k.jsxs)(x.zx, {
                type: 'button',
                variant: 'outline',
                size: 'icon',
                className: 'size-7',
                onClick: a,
                children: [
                  (0, k.jsx)(m.Z, {
                    className: 'size-4',
                    'aria-hidden': 'true',
                  }),
                  (0, k.jsx)('span', {
                    className: 'sr-only',
                    children: 'Remove file',
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function z(e) {
        var n,
          t = e.value,
          a = e.onValueChange,
          s = e.onUpload,
          i = e.progresses,
          l = e.accept,
          d = void 0 === l ? { 'image/*': [] } : l,
          m = e.maxSize,
          x = void 0 === m ? 2097152 : m,
          v = e.maxFileCount,
          b = void 0 === v ? 1 : v,
          w = e.multiple,
          N = void 0 !== w && w,
          C = e.disabled,
          y = void 0 !== C && C,
          M = e.className,
          z = u()(e, S),
          R = D({ prop: t, onChange: a }),
          I = c()(R, 2),
          F = I[0],
          L = I[1],
          K = p.useCallback(
            function (e, n) {
              var t;
              if (!N && 1 === b && e.length > 1)
                h.Am.error('Cannot upload more than 1 file at a time');
              else if (
                (null !== (t = null == F ? void 0 : F.length) && void 0 !== t
                  ? t
                  : 0) +
                  e.length >
                b
              )
                h.Am.error('Cannot upload more than '.concat(b, ' files'));
              else {
                var a = e.map(function (e) {
                    return Object.assign(e, {
                      preview: URL.createObjectURL(e),
                    });
                  }),
                  r = F ? [].concat(o()(F), o()(a)) : a;
                if (
                  (L(r),
                  n.length > 0 &&
                    n.forEach(function (e) {
                      var n = e.file;
                      h.Am.error('File '.concat(n.name, ' was rejected'));
                    }),
                  s && r.length > 0 && r.length <= b)
                ) {
                  var i = r.length > 0 ? ''.concat(r.length, ' files') : 'file';
                  h.Am.promise(s(r), {
                    loading: 'Uploading '.concat(i, '...'),
                    success: function () {
                      return L([]), ''.concat(i, ' uploaded');
                    },
                    error: 'Failed to upload '.concat(i),
                  });
                }
              }
            },
            [F, b, N, s, L],
          );
        p.useEffect(function () {
          return function () {
            F &&
              F.forEach(function (e) {
                Z(e) && URL.revokeObjectURL(e.preview);
              });
          };
        }, []);
        var A =
          y ||
          (null !== (n = null == F ? void 0 : F.length) && void 0 !== n
            ? n
            : 0) >= b;
        return (0, k.jsxs)('div', {
          className: 'relative flex flex-col gap-6 overflow-hidden',
          children: [
            (0, k.jsx)(g.ZP, {
              onDrop: K,
              accept: d,
              maxSize: x,
              maxFiles: b,
              multiple: b > 1 || N,
              disabled: A,
              children: function (e) {
                var n = e.getRootProps,
                  t = e.getInputProps,
                  a = e.isDragActive;
                return (0, k.jsxs)(
                  'div',
                  r()(
                    r()(
                      r()({}, n()),
                      {},
                      {
                        className: (0, j.cn)(
                          'group relative grid h-52 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-5 py-2.5 text-center transition hover:bg-muted/25',
                          'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                          a && 'border-muted-foreground/50',
                          A && 'pointer-events-none opacity-60',
                          M,
                        ),
                      },
                      z,
                    ),
                    {},
                    {
                      children: [
                        (0, k.jsx)('input', r()({}, t())),
                        a
                          ? (0, k.jsxs)('div', {
                              className:
                                'flex flex-col items-center justify-center gap-4 sm:px-5',
                              children: [
                                (0, k.jsx)('div', {
                                  className:
                                    'rounded-full border border-dashed p-3',
                                  children: (0, k.jsx)(f.Z, {
                                    className: 'size-7 text-muted-foreground',
                                    'aria-hidden': 'true',
                                  }),
                                }),
                                (0, k.jsx)('p', {
                                  className:
                                    'font-medium text-muted-foreground',
                                  children: 'Drop the files here',
                                }),
                              ],
                            })
                          : (0, k.jsxs)('div', {
                              className:
                                'flex flex-col items-center justify-center gap-4 sm:px-5',
                              children: [
                                (0, k.jsx)('div', {
                                  className:
                                    'rounded-full border border-dashed p-3',
                                  children: (0, k.jsx)(f.Z, {
                                    className: 'size-7 text-muted-foreground',
                                    'aria-hidden': 'true',
                                  }),
                                }),
                                (0, k.jsxs)('div', {
                                  className: 'flex flex-col gap-px',
                                  children: [
                                    (0, k.jsxs)('p', {
                                      className:
                                        'font-medium text-muted-foreground',
                                      children: [
                                        'Drag ',
                                        "'n'",
                                        ' drop files here, or click to select files',
                                      ],
                                    }),
                                    (0, k.jsxs)('p', {
                                      className:
                                        'text-sm text-muted-foreground/70',
                                      children: [
                                        'You can upload',
                                        b > 1
                                          ? ' '
                                              .concat(
                                                b === 1 / 0 ? 'multiple' : b,
                                                '\n                      files (up to ',
                                              )
                                              .concat((0, j.t)(x), ' each)')
                                          : ' a file with '.concat((0, j.t)(x)),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                      ],
                    },
                  ),
                );
              },
            }),
            null != F && F.length
              ? (0, k.jsx)(_, {
                  className: 'h-fit w-full px-3',
                  children: (0, k.jsx)('div', {
                    className: 'flex max-h-48 flex-col gap-4',
                    children:
                      null == F
                        ? void 0
                        : F.map(function (e, n) {
                            return (0, k.jsx)(
                              P,
                              {
                                file: e,
                                onRemove: function () {
                                  return (function (e) {
                                    if (F) {
                                      var n = F.filter(function (n, t) {
                                        return t !== e;
                                      });
                                      L(n), null == a || a(n);
                                    }
                                  })(n);
                                },
                                progress: null == i ? void 0 : i[e.name],
                              },
                              n,
                            );
                          }),
                  }),
                })
              : null,
          ],
        });
      }
    },
    87030: function (e, n, t) {
      'use strict';
      t.d(n, {
        Ol: function () {
          return x;
        },
        SZ: function () {
          return b;
        },
        Zb: function () {
          return h;
        },
        aY: function () {
          return j;
        },
        ll: function () {
          return v;
        },
      });
      var a = t(97857),
        r = t.n(a),
        s = t(13769),
        o = t.n(s),
        i = t(62435),
        c = t(27080),
        l = t(86074),
        u = ['className'],
        d = ['className'],
        m = ['className'],
        f = ['className'],
        p = ['className'],
        g = ['className'],
        h = i.forwardRef(function (e, n) {
          var t = e.className,
            a = o()(e, u);
          return (0, l.jsx)(
            'div',
            r()(
              {
                ref: n,
                className: (0, c.cn)(
                  'rounded-lg  bg-background-card  text-card-foreground shadow-sm',
                  t,
                ),
              },
              a,
            ),
          );
        });
      h.displayName = 'Card';
      var x = i.forwardRef(function (e, n) {
        var t = e.className,
          a = o()(e, d);
        return (0, l.jsx)(
          'div',
          r()(
            {
              ref: n,
              className: (0, c.cn)('flex flex-col space-y-1.5 p-6', t),
            },
            a,
          ),
        );
      });
      x.displayName = 'CardHeader';
      var v = i.forwardRef(function (e, n) {
        var t = e.className,
          a = o()(e, m);
        return (0, l.jsx)(
          'div',
          r()(
            {
              ref: n,
              className: (0, c.cn)(
                'text-2xl font-semibold leading-none tracking-tight',
                t,
              ),
            },
            a,
          ),
        );
      });
      v.displayName = 'CardTitle';
      var b = i.forwardRef(function (e, n) {
        var t = e.className,
          a = o()(e, f);
        return (0, l.jsx)(
          'div',
          r()(
            {
              ref: n,
              className: (0, c.cn)('text-sm text-muted-foreground', t),
            },
            a,
          ),
        );
      });
      b.displayName = 'CardDescription';
      var j = i.forwardRef(function (e, n) {
        var t = e.className,
          a = o()(e, p);
        return (0, l.jsx)(
          'div',
          r()({ ref: n, className: (0, c.cn)('p-6 pt-0', t) }, a),
        );
      });
      (j.displayName = 'CardContent'),
        (i.forwardRef(function (e, n) {
          var t = e.className,
            a = o()(e, g);
          return (0, l.jsx)(
            'div',
            r()(
              { ref: n, className: (0, c.cn)('flex items-center p-6 pt-0', t) },
              a,
            ),
          );
        }).displayName = 'CardFooter');
    },
    50561: function (e, n, t) {
      'use strict';
      t.d(n, {
        Yi: function () {
          return f;
        },
        bZ: function () {
          return p;
        },
        zs: function () {
          return m;
        },
      });
      var a = t(97857),
        r = t.n(a),
        s = t(13769),
        o = t.n(s),
        i = t(38573),
        c = t(62435),
        l = t(27080),
        u = t(86074),
        d = ['className', 'align', 'sideOffset'],
        m = i.fC,
        f = i.xz,
        p = c.forwardRef(function (e, n) {
          var t = e.className,
            a = e.align,
            s = void 0 === a ? 'center' : a,
            c = e.sideOffset,
            m = void 0 === c ? 4 : c,
            f = o()(e, d);
          return (0, u.jsx)(
            i.VY,
            r()(
              {
                ref: n,
                align: s,
                sideOffset: m,
                className: (0, l.cn)(
                  'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-hover-card-content-transform-origin]',
                  t,
                ),
              },
              f,
            ),
          );
        });
      p.displayName = i.VY.displayName;
    },
    77631: function (e, n, t) {
      'use strict';
      t.d(n, {
        E: function () {
          return m;
        },
      });
      var a = t(97857),
        r = t.n(a),
        s = t(13769),
        o = t.n(s),
        i = t(44920),
        c = t(62435),
        l = t(27080),
        u = t(86074),
        d = ['className', 'value'],
        m = c.forwardRef(function (e, n) {
          var t = e.className,
            a = e.value,
            s = o()(e, d);
          return (0, u.jsx)(
            i.fC,
            r()(
              r()(
                {
                  ref: n,
                  className: (0, l.cn)(
                    'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
                    t,
                  ),
                },
                s,
              ),
              {},
              {
                children: (0, u.jsx)(i.z$, {
                  className: 'h-full w-full flex-1 bg-primary transition-all',
                  style: {
                    transform: 'translateX(-'.concat(100 - (a || 0), '%)'),
                  },
                }),
              },
            ),
          );
        });
      m.displayName = i.fC.displayName;
    },
    704: function (e, n, t) {
      'use strict';
      t.d(n, {
        $: function () {
          return d;
        },
        t: function () {
          return u;
        },
      });
      var a = t(9783),
        r = t.n(a),
        s = t(5574),
        o = t.n(s),
        i = t(23454),
        c = t(62435),
        l = t(42028),
        u = (function (e) {
          return (e.KnowledgeId = 'knowledgeId'), e;
        })({}),
        d = function () {
          var e = (0, l.s0)(),
            n = (0, l.lr)(),
            t = o()(n, 1)[0],
            a = (0, l.UO)().id,
            s = (0, c.useCallback)(
              function () {
                e(i.Z.Datasets);
              },
              [e],
            ),
            d = (0, c.useCallback)(
              function (n) {
                return function () {
                  e(''.concat(i.Z.Dataset, '/').concat(n));
                };
              },
              [e],
            ),
            m = (0, c.useCallback)(
              function () {
                e(i.Z.Home);
              },
              [e],
            ),
            f = (0, c.useCallback)(
              function () {
                e(i.Z.ProfileSetting);
              },
              [e],
            ),
            p = (0, c.useCallback)(
              function () {
                e(i.Z.Chats);
              },
              [e],
            ),
            g = (0, c.useCallback)(
              function () {
                e(i.Z.Chat);
              },
              [e],
            ),
            h = (0, c.useCallback)(
              function () {
                e(i.Z.Agents);
              },
              [e],
            ),
            x = (0, c.useCallback)(
              function (n) {
                return function () {
                  e(''.concat(i.Z.Agent, '/').concat(n));
                };
              },
              [e],
            ),
            v = (0, c.useCallback)(
              function () {
                e(i.Z.AgentTemplates);
              },
              [e],
            ),
            b = (0, c.useCallback)(
              function () {
                e(i.Z.Searches);
              },
              [e],
            ),
            j = (0, c.useCallback)(
              function () {
                e(i.Z.Search);
              },
              [e],
            ),
            k = (0, c.useCallback)(
              function (n, t) {
                return function () {
                  e(
                    ''
                      .concat(i.Z.ParsedResult, '/chunks?id=')
                      .concat(t, '&doc_id=')
                      .concat(n),
                  );
                };
              },
              [e],
            ),
            w = (0, c.useCallback)(
              function (e) {
                var n = r()({}, u.KnowledgeId, t.get(u.KnowledgeId));
                return e ? n[e] : n;
              },
              [t],
            ),
            N = (0, c.useCallback)(
              function (n) {
                e(
                  ''
                    .concat(n, '/')
                    .concat(a, '?')
                    .concat(u.KnowledgeId, '=')
                    .concat(w(u.KnowledgeId)),
                );
              },
              [w, a, e],
            ),
            C = (0, c.useCallback)(
              function (n) {
                e(''.concat(i.Z.Files, '?folderId=').concat(n));
              },
              [e],
            );
          return {
            navigateToDatasetList: s,
            navigateToDataset: d,
            navigateToHome: m,
            navigateToProfile: f,
            navigateToChatList: p,
            navigateToChat: g,
            navigateToChunkParsedResult: k,
            getQueryString: w,
            navigateToChunk: N,
            navigateToAgentList: h,
            navigateToAgent: x,
            navigateToAgentTemplates: v,
            navigateToSearchList: b,
            navigateToSearch: j,
            navigateToFiles: C,
          };
        };
    },
    3563: function (e, n, t) {
      'use strict';
      t.d(n, {
        G: function () {
          return i;
        },
        S: function () {
          return c;
        },
      });
      var a = t(5574),
        r = t.n(a),
        s = t(96486),
        o = t(62435);
      function i() {
        var e = (0, o.useState)({}),
          n = r()(e, 2),
          t = n[0],
          a = n[1],
          i = (0, o.useCallback)(function () {
            a({});
          }, []),
          c = (0, o.useMemo)(
            function () {
              return Object.keys(t).length;
            },
            [t],
          );
        return {
          rowSelection: t,
          setRowSelection: a,
          rowSelectionIsEmpty: (0, s.isEmpty)(t),
          clearRowSelection: i,
          selectedCount: c,
        };
      }
      function c(e, n) {
        return {
          selectedIds: (0, o.useMemo)(
            function () {
              var t = Object.keys(e);
              return n
                .filter(function (e, n) {
                  return t.some(function (e) {
                    return Number(e) === n;
                  });
                })
                .map(function (e) {
                  return e.id;
                });
            },
            [n, e],
          ),
        };
      }
    },
    20162: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return Dn;
          },
        });
      var a = t(41332),
        r = t(5848),
        s = t(87926),
        o = t(61363),
        i = t(57636),
        c = t(25910),
        l = t(3563),
        u = t(97857),
        d = t.n(u),
        m = t(15009),
        f = t.n(m),
        p = t(99289),
        g = t.n(p),
        h = t(87181),
        x = t(54707),
        v = t(73955),
        b = t(30202),
        j = t(4527),
        k = t(78551),
        w = t(58580),
        N = t(45360),
        C = t(96486),
        _ = t(62435),
        y = t(42028),
        D = t(2938),
        S = t(96100),
        Z = {
          UploadDocument: 'uploadDocument',
          FetchDocumentList: 'fetchDocumentList',
          UpdateDocumentStatus: 'updateDocumentStatus',
          RunDocumentByIds: 'runDocumentByIds',
          RemoveDocument: 'removeDocument',
          SaveDocumentName: 'saveDocumentName',
          SetDocumentParser: 'setDocumentParser',
          SetDocumentMeta: 'setDocumentMeta',
          FetchAllDocumentList: 'fetchAllDocumentList',
          CreateDocument: 'createDocument',
        },
        M = function () {
          var e,
            n = (0, S.pE)().knowledgeId,
            t = (0, D.Qe)(),
            a = t.searchString,
            r = t.handleInputChange,
            s = (0, D.ye)(),
            o = s.pagination,
            i = s.setPagination,
            c = (0, y.UO)().id,
            l = (0, w.Z)(a, { wait: 500 }),
            u = (0, h.Q)(),
            m = u.filterValue,
            p = u.handleFilterSubmit,
            x = (0, k.a)({
              queryKey: [Z.FetchDocumentList, l, o, m],
              initialData: { docs: [], total: 0 },
              enabled: !!n || !!c,
              queryFn:
                ((e = g()(
                  f()().mark(function e() {
                    var t;
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              (0, v.Qh)(
                                {
                                  kb_id: n || c,
                                  keywords: l,
                                  page_size: o.pageSize,
                                  page: o.current,
                                },
                                { types: m.type, run_status: m.run },
                              )
                            );
                          case 2:
                            if (0 !== (t = e.sent).data.code) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt('return', t.data.data);
                          case 5:
                            return e.abrupt('return', { docs: [], total: 0 });
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
            }),
            b = x.data,
            j = x.isFetching,
            N = (0, _.useCallback)(
              function (e) {
                i({ page: 1 }), r(e);
              },
              [r, i],
            );
          return {
            loading: j,
            searchString: a,
            documents: b.docs,
            pagination: d()(
              d()({}, o),
              {},
              { total: null == b ? void 0 : b.total },
            ),
            handleInputChange: N,
            setPagination: i,
            filterValue: m,
            handleFilterSubmit: p,
          };
        };
      var P = function () {
          var e,
            n = (0, b.NL)(),
            t = (0, j.D)({
              mutationKey: [Z.UpdateDocumentStatus],
              mutationFn:
                ((e = g()(
                  f()().mark(function e(t) {
                    var a, r, s, o;
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.status),
                              (r = t.documentId),
                              (e.next = 3),
                              v.ZP.document_change_status({
                                doc_id: r,
                                status: Number(a),
                              })
                            );
                          case 3:
                            return (
                              (s = e.sent),
                              0 === (o = s.data).code &&
                                (N.ZP.success(x.Z.t('message.modified')),
                                n.invalidateQueries({
                                  queryKey: [Z.FetchDocumentList],
                                })),
                              e.abrupt('return', o)
                            );
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (n) {
                  return e.apply(this, arguments);
                }),
            }),
            a = t.data,
            r = t.isPending;
          return { setDocumentStatus: t.mutateAsync, data: a, loading: r };
        },
        z = function () {
          var e,
            n = (0, b.NL)(),
            t = (0, j.D)({
              mutationKey: [Z.RunDocumentByIds],
              mutationFn:
                ((e = g()(
                  f()().mark(function e(t) {
                    var a, r, s, o, i;
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.documentIds),
                              (r = t.run),
                              (s = t.shouldDelete),
                              n.invalidateQueries({
                                queryKey: [Z.FetchDocumentList],
                              }),
                              (e.next = 4),
                              v.ZP.document_run({
                                doc_ids: a,
                                run: r,
                                delete: s,
                              })
                            );
                          case 4:
                            return (
                              (o = e.sent),
                              0 === (i = (0, C.get)(o, 'data.code')) &&
                                (n.invalidateQueries({
                                  queryKey: [Z.FetchDocumentList],
                                }),
                                N.ZP.success(x.Z.t('message.operated'))),
                              e.abrupt('return', i)
                            );
                          case 8:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (n) {
                  return e.apply(this, arguments);
                }),
            }),
            a = t.data,
            r = t.isPending;
          return { runDocumentByIds: t.mutateAsync, loading: r, data: a };
        },
        R = function () {
          var e,
            n = (0, b.NL)(),
            t = (0, j.D)({
              mutationKey: [Z.RemoveDocument],
              mutationFn:
                ((e = g()(
                  f()().mark(function e(t) {
                    var a, r;
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), v.ZP.document_rm({ doc_id: t })
                            );
                          case 2:
                            return (
                              (a = e.sent),
                              0 === (r = a.data).code &&
                                (N.ZP.success(x.Z.t('message.deleted')),
                                n.invalidateQueries({
                                  queryKey: [Z.FetchDocumentList],
                                })),
                              e.abrupt('return', r.code)
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: t.data,
            loading: t.isPending,
            removeDocument: t.mutateAsync,
          };
        },
        I = t(28142),
        F = t(67421),
        L = t(5574),
        K = t.n(L),
        A = t(74094),
        G = t(27060),
        O = t(28993),
        T = t(80499),
        V = t(96330),
        U = t(8002),
        q = t(56312),
        E = t(27361),
        B = t.n(E),
        $ = t(57557),
        Q = t.n($),
        Y = (t(65777), t(87536)),
        X = t(1604),
        H = t(62378),
        J = t(43669),
        W = t(72687),
        ee = t(45841),
        ne = t(51811),
        te = t(36758),
        ae = t(76973),
        re = t(60739),
        se = t(59909),
        oe = t(27591),
        ie = t(84586),
        ce = t(41352),
        le = t(31012),
        ue = t(81136),
        de = t(86074);
      function me() {
        var e = (0, F.$G)().t,
          n = (0, Y.Gc)(),
          t = (0, Y.Dq)({ name: 'parser_config.pages', control: n.control }),
          a = t.fields,
          r = t.remove,
          s = t.append;
        return (0, de.jsxs)('div', {
          children: [
            (0, de.jsx)(T.lX, {
              tooltip: e('knowledgeDetails.pageRangesTip'),
              children: e('knowledgeDetails.pageRanges'),
            }),
            a.map(function (t, a) {
              var s = 'parser_config.pages.'.concat(a, '.from');
              return (0, de.jsxs)(
                'div',
                {
                  className: 'flex items-center gap-2 pt-2',
                  children: [
                    (0, de.jsx)(T.Wi, {
                      control: n.control,
                      name: s,
                      render: function (n) {
                        var t = n.field;
                        return (0, de.jsxs)(T.xJ, {
                          className: 'w-2/5',
                          children: [
                            (0, de.jsx)(T.pf, {}),
                            (0, de.jsx)(T.NI, {
                              children: (0, de.jsx)(
                                oe.II,
                                d()(
                                  {
                                    type: 'number',
                                    placeholder: e('common.pleaseInput'),
                                    className: '!m-0',
                                  },
                                  t,
                                ),
                              ),
                            }),
                            (0, de.jsx)(T.zG, {}),
                          ],
                        });
                      },
                    }),
                    (0, de.jsx)(ue.Z, { className: 'w-3 ' }),
                    (0, de.jsx)(T.Wi, {
                      control: n.control,
                      name: 'parser_config.pages.'.concat(a, '.to'),
                      render: function (n) {
                        var t = n.field;
                        return (0, de.jsxs)(T.xJ, {
                          className: 'flex-1',
                          children: [
                            (0, de.jsx)(T.pf, {}),
                            (0, de.jsx)(T.NI, {
                              children: (0, de.jsx)(
                                oe.II,
                                d()(
                                  {
                                    type: 'number',
                                    placeholder: e('common.pleaseInput'),
                                    className: '!m-0',
                                  },
                                  t,
                                ),
                              ),
                            }),
                            (0, de.jsx)(T.zG, {}),
                          ],
                        });
                      },
                    }),
                    (0, de.jsx)(i.zx, {
                      variant: 'ghost',
                      onClick: function () {
                        return r(a);
                      },
                      children: (0, de.jsx)(ce.Z, {}),
                    }),
                  ],
                },
                t.id,
              );
            }),
            (0, de.jsxs)(i.zx, {
              onClick: function () {
                return s({ from: 1, to: 100 });
              },
              className: 'mt-4 border-dashed w-full',
              variant: 'outline',
              type: 'button',
              children: [(0, de.jsx)(le.Z, {}), e('knowledgeDetails.addPage')],
            }),
          ],
        });
      }
      var fe = t(19632),
        pe = t.n(fe),
        ge = t(39259),
        he = new Map([
          [
            ['pdf'],
            [
              'naive',
              'resume',
              'manual',
              'paper',
              'book',
              'laws',
              'presentation',
              'one',
              'qa',
              'knowledge_graph',
            ],
          ],
          [
            ['doc', 'docx'],
            [
              'naive',
              'resume',
              'book',
              'laws',
              'one',
              'qa',
              'manual',
              'knowledge_graph',
            ],
          ],
          [
            ['xlsx', 'xls'],
            ['naive', 'qa', 'table', 'one', 'knowledge_graph'],
          ],
          [['ppt', 'pptx'], ['presentation']],
          [
            [
              'jpg',
              'jpeg',
              'png',
              'gif',
              'bmp',
              'tif',
              'tiff',
              'webp',
              'svg',
              'ico',
            ],
            ['picture'],
          ],
          [
            ['txt'],
            [
              'naive',
              'resume',
              'book',
              'laws',
              'one',
              'qa',
              'table',
              'knowledge_graph',
            ],
          ],
          [
            ['csv'],
            [
              'naive',
              'resume',
              'book',
              'laws',
              'one',
              'qa',
              'table',
              'knowledge_graph',
            ],
          ],
          [['md'], ['naive', 'qa', 'knowledge_graph']],
          [['json'], ['naive', 'knowledge_graph']],
          [['eml'], ['email']],
        ]),
        xe = function (e, n) {
          return n.filter(function (n) {
            return null == e
              ? void 0
              : e.some(function (e) {
                  return e === n.value;
                });
          });
        },
        ve = function (e) {
          var n = (0, ge.XH)(),
            t = (0, _.useMemo)(
              function () {
                var t = pe()(he.keys()).find(function (n) {
                  return n.some(function (n) {
                    return n === e;
                  });
                });
                if (t) {
                  var a = he.get(t);
                  return xe(null != a ? a : [], n);
                }
                return xe(
                  ['naive', 'resume', 'book', 'laws', 'one', 'qa', 'table'],
                  n,
                );
              },
              [n, e],
            );
          return { parserList: t };
        },
        be = ['qa', 'table', 'resume', 'knowledge_graph', 'tag'],
        je = function () {
          var e = (0, _.useCallback)(function (e) {
            return be.every(function (n) {
              return e !== n;
            });
          }, []);
          return e;
        };
      function ke() {
        var e = (0, F.$G)().t;
        return (0, _.useMemo)(
          function () {
            return {
              task_page_size: 12,
              layout_recognize: te.n.DeepDOC,
              chunk_token_num: 512,
              delimiter: '\n',
              auto_keywords: 0,
              auto_questions: 0,
              html4excel: !1,
              raptor: {
                use_raptor: !1,
                prompt: e('knowledgeConfiguration.promptText'),
                max_token: 256,
                threshold: 0.1,
                max_cluster: 64,
                random_seed: 0,
              },
              graphrag: { use_graphrag: !1 },
              entity_types: [],
              pages: [],
            };
          },
          [e],
        );
      }
      var we = 'ChunkMethodDialogForm',
        Ne = [
          V.K1.Qa,
          V.K1.Table,
          V.K1.Picture,
          V.K1.Resume,
          V.K1.One,
          V.K1.KnowledgeGraph,
        ];
      function Ce(e) {
        var n,
          t = e.hideModal,
          a = e.onOk,
          r = e.parserId,
          s = (e.documentId, e.documentExtension),
          o = e.visible,
          c = e.parserConfig,
          l = e.loading,
          u = (0, F.$G)().t,
          m = ve(s).parserList,
          p = (0, U.PX)().data,
          h = (0, _.useMemo)(
            function () {
              var e;
              return null === (e = p.parser_config) ||
                void 0 === e ||
                null === (e = e.graphrag) ||
                void 0 === e
                ? void 0
                : e.use_graphrag;
            },
            [
              null === (n = p.parser_config) ||
              void 0 === n ||
              null === (n = n.graphrag) ||
              void 0 === n
                ? void 0
                : n.use_graphrag,
            ],
          ),
          x = ke(),
          v = (function () {
            var e = ke();
            return (0, _.useCallback)(
              function (n) {
                return Object.entries(e).reduce(function (e, t) {
                  var a = K()(t, 2),
                    r = a[0],
                    s = a[1];
                  return (e[r] = r in n ? n[r] : s), e;
                }, {});
              },
              [e],
            );
          })(),
          b = X.z.object({
            parser_id: X.z
              .string()
              .min(1, { message: u('common.pleaseSelect') })
              .trim(),
            parser_config: X.z.object({
              task_page_size: X.z.coerce.number().optional(),
              layout_recognize: X.z.string().optional(),
              chunk_token_num: X.z.coerce.number().optional(),
              delimiter: X.z.string().optional(),
              auto_keywords: X.z.coerce.number().optional(),
              auto_questions: X.z.coerce.number().optional(),
              html4excel: X.z.boolean().optional(),
              raptor: X.z
                .object({
                  use_raptor: X.z.boolean().optional(),
                  prompt: X.z.string().optional().optional(),
                  max_token: X.z.coerce.number().optional(),
                  threshold: X.z.coerce.number().optional(),
                  max_cluster: X.z.coerce.number().optional(),
                  random_seed: X.z.coerce.number().optional(),
                })
                .optional(),
              graphrag: X.z.object({ use_graphrag: X.z.boolean().optional() }),
              entity_types: X.z.array(X.z.string()).optional(),
              pages: X.z
                .array(
                  X.z.object({
                    from: X.z.coerce.number(),
                    to: X.z.coerce.number(),
                  }),
                )
                .optional(),
            }),
          }),
          j = (0, Y.cI)({
            resolver: (0, q.F)(b),
            defaultValues: { parser_id: r, parser_config: x },
          }),
          k = (0, Y.qo)({
            name: 'parser_config.layout_recognize',
            control: j.control,
          }),
          w = (0, Y.qo)({ name: 'parser_id', control: j.control }),
          N = 'pdf' === s,
          C = (0, _.useMemo)(
            function () {
              return (
                N &&
                Ne.every(function (e) {
                  return e !== w;
                })
              );
            },
            [w, N],
          ),
          y = (0, _.useMemo)(
            function () {
              return (
                N &&
                Ne.filter(function (e) {
                  return e !== V.K1.One;
                }).every(function (e) {
                  return e !== w;
                })
              );
            },
            [w, N],
          ),
          D = w === V.K1.Naive || w === V.K1.KnowledgeGraph,
          S = w === V.K1.KnowledgeGraph,
          Z = w === V.K1.Naive && 'xlsx' === s,
          M = je();
        function P() {
          return (
            (P = g()(
              f()().mark(function e(n) {
                var r, s, o;
                return f()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          console.log('🚀 ~ onSubmit ~ data:', n),
                          (o = d()(
                            d()({}, n),
                            {},
                            {
                              parser_config: d()(
                                d()({}, n.parser_config),
                                {},
                                {
                                  pages:
                                    null !==
                                      (r =
                                        null === (s = n.parser_config) ||
                                        void 0 === s ||
                                        null === (s = s.pages) ||
                                        void 0 === s
                                          ? void 0
                                          : s.map(function (e) {
                                              return [e.from, e.to];
                                            })) && void 0 !== r
                                      ? r
                                      : [],
                                },
                              ),
                            },
                          )),
                          console.log('🚀 ~ onSubmit ~ nextData:', o),
                          (e.next = 5),
                          null == a ? void 0 : a(o)
                        );
                      case 5:
                        e.sent && (null == t || t());
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )),
            P.apply(this, arguments)
          );
        }
        return (
          (0, _.useEffect)(
            function () {
              if (o) {
                var e,
                  n,
                  t =
                    null !==
                      (e =
                        null == c || null === (n = c.pages) || void 0 === n
                          ? void 0
                          : n.map(function (e) {
                              return { from: e[0], to: e[1] };
                            })) && void 0 !== e
                      ? e
                      : [];
                j.reset({
                  parser_id: r,
                  parser_config: v(
                    d()(
                      d()(
                        { pages: t.length > 0 ? t : [{ from: 1, to: 1024 }] },
                        Q()(c, 'pages'),
                      ),
                      {},
                      {
                        graphrag: {
                          use_graphrag: B()(c, 'graphrag.use_graphrag', h),
                        },
                      },
                    ),
                  ),
                });
              }
            },
            [v, j, p.parser_config, c, r, h, o],
          ),
          (0, de.jsx)(O.Vq, {
            open: !0,
            onOpenChange: t,
            children: (0, de.jsxs)(O.cZ, {
              className: 'max-w-[50vw]',
              children: [
                (0, de.jsx)(O.fK, {
                  children: (0, de.jsx)(O.$N, {
                    children: u('knowledgeDetails.chunkMethod'),
                  }),
                }),
                (0, de.jsx)(
                  T.l0,
                  d()(
                    d()({}, j),
                    {},
                    {
                      children: (0, de.jsxs)('form', {
                        onSubmit: j.handleSubmit(function (e) {
                          return P.apply(this, arguments);
                        }),
                        className: 'space-y-6 max-h-[70vh] overflow-auto',
                        id: we,
                        children: [
                          (0, de.jsxs)(ne.Y, {
                            children: [
                              (0, de.jsx)(T.Wi, {
                                control: j.control,
                                name: 'parser_id',
                                render: function (e) {
                                  var n = e.field;
                                  return (0, de.jsxs)(T.xJ, {
                                    children: [
                                      (0, de.jsx)(T.lX, {
                                        children: u(
                                          'knowledgeDetails.chunkMethod',
                                        ),
                                      }),
                                      (0, de.jsx)(T.NI, {
                                        children: (0, de.jsx)(
                                          ie.vM,
                                          d()(d()({}, n), {}, { options: m }),
                                        ),
                                      }),
                                      (0, de.jsx)(T.zG, {}),
                                    ],
                                  });
                                },
                              }),
                              C && (0, de.jsx)(me, {}),
                              C &&
                                k &&
                                (0, de.jsx)(T.Wi, {
                                  control: j.control,
                                  name: 'parser_config.task_page_size',
                                  render: function (e) {
                                    var n = e.field;
                                    return (0, de.jsxs)(T.xJ, {
                                      children: [
                                        (0, de.jsx)(T.lX, {
                                          tooltip: u(
                                            'knowledgeDetails.taskPageSizeTip',
                                          ),
                                          children: u(
                                            'knowledgeDetails.taskPageSize',
                                          ),
                                        }),
                                        (0, de.jsx)(T.NI, {
                                          children: (0, de.jsx)(
                                            oe.II,
                                            d()(
                                              d()({}, n),
                                              {},
                                              {
                                                type: 'number',
                                                min: 1,
                                                max: 128,
                                              },
                                            ),
                                          ),
                                        }),
                                        (0, de.jsx)(T.zG, {}),
                                      ],
                                    });
                                  },
                                }),
                            ],
                          }),
                          (0, de.jsxs)(ne.Y, {
                            show: y || D,
                            className: 'space-y-3',
                            children: [
                              y && (0, de.jsx)(te.E, {}),
                              D &&
                                (0, de.jsxs)(de.Fragment, {
                                  children: [
                                    (0, de.jsx)(ae.M, {
                                      max:
                                        w === V.K1.KnowledgeGraph
                                          ? 16384
                                          : 2048,
                                    }),
                                    (0, de.jsx)(J.M, {}),
                                  ],
                                }),
                            ],
                          }),
                          (0, de.jsxs)(ne.Y, {
                            show: M(w) || Z,
                            className: 'space-y-3',
                            children: [
                              M(w) &&
                                (0, de.jsxs)(de.Fragment, {
                                  children: [
                                    (0, de.jsx)(H.G, {}),
                                    (0, de.jsx)(H.e, {}),
                                  ],
                                }),
                              Z && (0, de.jsx)(ee.s, {}),
                            ],
                          }),
                          (0, se.J3)(w) &&
                            (0, de.jsx)(ne.Y, {
                              children: (0, de.jsx)(se.ZP, {}),
                            }),
                          (0, re.hc)(w) && h && (0, de.jsx)(re.Gg, {}),
                          S && (0, de.jsx)(W.i, {}),
                        ],
                      }),
                    },
                  ),
                ),
                (0, de.jsx)(O.cN, {
                  children: (0, de.jsx)(i.dw, {
                    type: 'submit',
                    form: we,
                    loading: l,
                    children: u('common.save'),
                  }),
                }),
              ],
            }),
          })
        );
      }
      var _e = t(57509),
        ye = t(75269),
        De = t(5089),
        Se = t(8074),
        Ze = t(63764),
        Me = t(27856),
        Pe = t.n(Me);
      function ze(e) {
        var n = e.hideModal,
          t = e.onOk,
          a = e.loading,
          r = e.initialMetaData,
          s = (0, F.$G)().t,
          o = X.z.object({
            meta: X.z
              .string()
              .min(1, { message: s('knowledgeDetails.pleaseInputJson') })
              .trim()
              .refine(
                function (e) {
                  try {
                    return JSON.parse(e), !0;
                  } catch (e) {
                    return !1;
                  }
                },
                { message: s('knowledgeDetails.pleaseInputJson') },
              ),
          }),
          c = (0, Y.cI)({ resolver: (0, q.F)(o), defaultValues: {} });
        function l() {
          return (l = g()(
            f()().mark(function e(a) {
              return f()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), null == t ? void 0 : t(a.meta);
                    case 2:
                      e.sent && (null == n || n());
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        return (
          (0, _.useEffect)(
            function () {
              c.setValue('meta', JSON.stringify(r, null, 4));
            },
            [c, r],
          ),
          (0, de.jsx)(O.Vq, {
            open: !0,
            onOpenChange: n,
            children: (0, de.jsxs)(O.cZ, {
              children: [
                (0, de.jsx)(O.fK, {
                  children: (0, de.jsx)(O.$N, {
                    children: s('knowledgeDetails.setMetaData'),
                  }),
                }),
                (0, de.jsx)(
                  T.l0,
                  d()(
                    d()({}, c),
                    {},
                    {
                      children: (0, de.jsx)('form', {
                        onSubmit: c.handleSubmit(function (e) {
                          return l.apply(this, arguments);
                        }),
                        className: 'space-y-6',
                        id: Se.j$,
                        children: (0, de.jsx)(T.Wi, {
                          control: c.control,
                          name: 'meta',
                          render: function (e) {
                            var n = e.field;
                            return (0, de.jsxs)(T.xJ, {
                              children: [
                                (0, de.jsx)(T.lX, {
                                  tooltip: (0, de.jsx)('div', {
                                    dangerouslySetInnerHTML: {
                                      __html: Pe().sanitize(
                                        s('knowledgeDetails.documentMetaTips'),
                                      ),
                                    },
                                  }),
                                  children: s('knowledgeDetails.metaData'),
                                }),
                                (0, de.jsx)(T.NI, {
                                  children: (0, de.jsx)(
                                    Ze.ZP,
                                    d()(
                                      {
                                        height: 200,
                                        defaultLanguage: 'json',
                                        theme: 'vs-dark',
                                      },
                                      n,
                                    ),
                                  ),
                                }),
                                (0, de.jsx)(T.zG, {}),
                              ],
                            });
                          },
                        }),
                      }),
                    },
                  ),
                ),
                (0, de.jsx)(O.cN, {
                  children: (0, de.jsx)(i.dw, {
                    type: 'submit',
                    form: Se.j$,
                    loading: a,
                    children: s('common.save'),
                  }),
                }),
              ],
            }),
          })
        );
      }
      Ze._m.config({ paths: { vs: '/vs' } });
      var Re = t(86968),
        Ie = function () {
          var e = (function () {
              var e,
                n = (0, b.NL)(),
                t = (0, j.D)({
                  mutationKey: [Z.SetDocumentParser],
                  mutationFn:
                    ((e = g()(
                      f()().mark(function e(t) {
                        var a, r, s, o, i;
                        return f()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a = t.parserId),
                                  (r = t.documentId),
                                  (s = t.parserConfig),
                                  (e.next = 3),
                                  v.ZP.document_change_parser({
                                    parser_id: a,
                                    doc_id: r,
                                    parser_config: s,
                                  })
                                );
                              case 3:
                                return (
                                  (o = e.sent),
                                  0 === (i = o.data).code &&
                                    (n.invalidateQueries({
                                      queryKey: [Z.FetchDocumentList],
                                    }),
                                    N.ZP.success(x.Z.t('message.modified'))),
                                  e.abrupt('return', i.code)
                                );
                              case 7:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    )),
                    function (n) {
                      return e.apply(this, arguments);
                    }),
                }),
                a = t.data,
                r = t.isPending;
              return { setDocumentParser: t.mutateAsync, data: a, loading: r };
            })(),
            n = e.setDocumentParser,
            t = e.loading,
            a = (0, _.useState)({}),
            r = K()(a, 2),
            s = r[0],
            o = r[1],
            i = (0, Re.pG)(),
            c = i.visible,
            l = i.hideModal,
            u = i.showModal,
            d = (0, _.useCallback)(
              (function () {
                var e = g()(
                  f()().mark(function e(t) {
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null == s || !s.id) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (e.next = 3),
                              n({
                                parserId: t.parser_id,
                                documentId: null == s ? void 0 : s.id,
                                parserConfig: t.parser_config,
                              })
                            );
                          case 3:
                            0 === e.sent && l();
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [null == s ? void 0 : s.id, n, l],
            ),
            m = (0, _.useCallback)(
              function (e) {
                o(e), u();
              },
              [u],
            );
          return {
            changeParserLoading: t,
            onChangeParserOk: d,
            changeParserVisible: c,
            hideChangeParserModal: l,
            showChangeParserModal: m,
            changeParserRecord: s,
          };
        },
        Fe = t(96635),
        Le = t(23309),
        Ke = t(2834),
        Ae = t(84146),
        Ge = t(704),
        Oe = t(27080),
        Te = t(28382),
        Ve = t(61932),
        Ue = t(26625),
        qe = t(50561),
        Ee = t(31098),
        Be = t(51331),
        $e = t(9141),
        Qe = t(74632),
        Ye = t(50780),
        Xe = t(13718),
        He = t(9783),
        Je = t.n(He),
        We = Je()(
          Je()(
            Je()(
              Je()(
                Je()({}, V.cG.UNSTART, { label: 'UNSTART', color: 'cyan' }),
                V.cG.RUNNING,
                { label: 'Parsing', color: 'blue' },
              ),
              V.cG.CANCEL,
              { label: 'CANCEL', color: 'orange' },
            ),
            V.cG.DONE,
            { label: 'SUCCESS', color: 'blue' },
          ),
          V.cG.FAIL,
          { label: 'FAIL', color: 'red' },
        ),
        en = function (e) {
          return e === V.cG.RUNNING;
        },
        nn = ['name', 'size', 'type', 'create_time', 'update_time'],
        tn = { size: Ee.sS, create_time: Te.p6, update_time: Te.p6 };
      function an(e) {
        var n = e.record,
          t = e.showRenameModal,
          a = n.id,
          r = n.run,
          s = n.type,
          o = en(r),
          c = s === V.n_.Virtual,
          l = R().removeDocument,
          u = (0, _.useCallback)(
            function () {
              (0, Be.AG)({ id: a, filename: n.name });
            },
            [a, n.name],
          ),
          d = (0, _.useCallback)(
            function () {
              l(a);
            },
            [a, l],
          ),
          m = (0, _.useCallback)(
            function () {
              t(n);
            },
            [n, t],
          );
        return (0, de.jsxs)('section', {
          className: 'flex gap-4 items-center text-text-sub-title-invert',
          children: [
            (0, de.jsx)(i.zx, {
              variant: 'ghost',
              size: 'sm',
              disabled: o,
              onClick: m,
              children: (0, de.jsx)($e.Z, {}),
            }),
            (0, de.jsxs)(qe.zs, {
              children: [
                (0, de.jsx)(qe.Yi, {
                  children: (0, de.jsx)(i.zx, {
                    variant: 'ghost',
                    disabled: o,
                    size: 'sm',
                    children: (0, de.jsx)(Qe.Z, {}),
                  }),
                }),
                (0, de.jsx)(qe.bZ, {
                  className: 'w-[40vw] max-h-[40vh] overflow-auto',
                  children: (0, de.jsx)('ul', {
                    className: 'space-y-2',
                    children: Object.entries(n)
                      .filter(function (e) {
                        var n = K()(e, 1)[0];
                        return nn.some(function (e) {
                          return e === n;
                        });
                      })
                      .map(function (e, n) {
                        var t = K()(e, 2),
                          a = t[0],
                          r = t[1];
                        return (0, de.jsxs)(
                          'li',
                          {
                            className: 'flex gap-2',
                            children: [
                              a,
                              ':',
                              (0, de.jsx)('div', {
                                children: a in tn ? tn[a](r) : r,
                              }),
                            ],
                          },
                          n,
                        );
                      }),
                  }),
                }),
              ],
            }),
            c ||
              (0, de.jsx)(i.zx, {
                variant: 'ghost',
                onClick: u,
                disabled: o,
                size: 'sm',
                children: (0, de.jsx)(Ye.Z, {}),
              }),
            (0, de.jsx)(Ue.h, {
              onOk: d,
              children: (0, de.jsx)(i.zx, {
                variant: 'ghost',
                size: 'sm',
                disabled: o,
                children: (0, de.jsx)(Xe.Z, {}),
              }),
            }),
          ],
        });
      }
      var rn = t(77631),
        sn = t(49482),
        on = t(61108),
        cn = t(42297),
        ln = t(59632),
        un = t.n(ln);
      function dn(e) {
        var n = e.run,
          t = We[n];
        return (0, de.jsx)('span', {
          className: 'size-2 inline-block rounded',
          style: { backgroundColor: t.color },
        });
      }
      var mn = function (e) {
        var n,
          t,
          a = e.record,
          r = (0, F.$G)().t,
          s = r('knowledgeDetails.runningStatus'.concat(a.run)),
          o = [
            {
              key: 'process_begin_at',
              label: r('knowledgeDetails.processBeginAt'),
              children: a.process_begin_at,
            },
            {
              key: 'knowledgeDetails.process_duation',
              label: r('processDuration'),
              children: ''.concat(a.process_duation.toFixed(2), ' s'),
            },
            {
              key: 'progress_msg',
              label: r('knowledgeDetails.progressMsg'),
              children:
                ((n = a.progress_msg.trim()),
                (t = n.replace(/(\n)\1+/g, '$1')),
                un()(t, /(\[ERROR\].+\s)/g, function (e, n) {
                  return (0, de.jsx)(
                    'span',
                    { className: 'text-red-600', children: e },
                    n,
                  );
                })),
            },
          ];
        return (0, de.jsxs)('section', {
          children: [
            (0, de.jsxs)('div', {
              className: 'flex gap-2 items-center pb-2',
              children: [(0, de.jsx)(dn, { run: a.run }), ' ', s],
            }),
            (0, de.jsx)('div', {
              className: 'flex flex-col max-h-[50vh] overflow-auto',
              children: o.map(function (e, n) {
                return (0, de.jsxs)(
                  'div',
                  {
                    className: n < 2 ? 'flex gap-2' : '',
                    children: [
                      (0, de.jsxs)('b', { children: [e.label, ':'] }),
                      (0, de.jsx)('div', {
                        className: 'w-full  whitespace-pre-line text-wrap ',
                        children: e.children,
                      }),
                    ],
                  },
                  e.key,
                );
              }),
            }),
          ],
        });
      };
      function fn(e) {
        var n = e.record;
        return (0, de.jsxs)(qe.zs, {
          children: [
            (0, de.jsx)(qe.Yi, {
              asChild: !0,
              children: (0, de.jsx)(i.zx, {
                variant: 'ghost',
                size: 'sm',
                children: (0, de.jsx)(dn, { run: n.run }),
              }),
            }),
            (0, de.jsx)(qe.bZ, {
              className: 'w-[40vw]',
              children: (0, de.jsx)(mn, { record: n }),
            }),
          ],
        });
      }
      var pn = function (e) {
          var n = z(),
            t = n.runDocumentByIds,
            a = n.loading,
            r = (0, _.useState)(''),
            s = K()(r, 2),
            o = s[0],
            i = s[1],
            c = a && '' !== o && o === e,
            l = (function () {
              var e = g()(
                f()().mark(function e(n, a) {
                  var r,
                    s = arguments;
                  return f()().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((r = s.length > 2 && void 0 !== s[2] && s[2]),
                              !c)
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt('return');
                          case 3:
                            return (
                              i(n),
                              (e.prev = 4),
                              (e.next = 7),
                              t({
                                documentIds: [n],
                                run: a ? 2 : 1,
                                shouldDelete: r,
                              })
                            );
                          case 7:
                            i(''), (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10), (e.t0 = e.catch(4)), i('');
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 10]],
                  );
                }),
              );
              return function (n, t) {
                return e.apply(this, arguments);
              };
            })();
          return { handleRunDocumentByIds: l, loading: c };
        },
        gn = Je()(
          Je()(
            Je()(
              Je()(
                Je()({}, V.cG.UNSTART, (0, de.jsx)(sn.Z, {})),
                V.cG.RUNNING,
                (0, de.jsx)(on.Z, {}),
              ),
              V.cG.CANCEL,
              (0, de.jsx)(cn.Z, {}),
            ),
            V.cG.DONE,
            (0, de.jsx)(cn.Z, {}),
          ),
          V.cG.FAIL,
          (0, de.jsx)(cn.Z, {}),
        );
      function hn(e) {
        var n = e.record,
          t = e.showChangeParserModal,
          a = e.showSetMetaModal,
          r = (0, F.$G)().t,
          s = n.run,
          o = n.parser_id,
          l = n.progress,
          u = n.chunk_num,
          d = n.id,
          m = gn[s],
          f = Number((100 * l).toFixed(2)),
          p = pn(d).handleRunDocumentByIds,
          g = en(s),
          h = 0 === u,
          x = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return function () {
              p(n.id, g, e);
            };
          },
          v = (0, _.useCallback)(
            function () {
              t(n);
            },
            [n, t],
          ),
          b = (0, _.useCallback)(
            function () {
              a(n);
            },
            [n, a],
          );
        return (0, de.jsxs)('section', {
          className: 'flex gap-2 items-center',
          children: [
            (0, de.jsxs)('div', {
              className: 'w-28 flex items-center justify-between',
              children: [
                (0, de.jsxs)(c.h_, {
                  children: [
                    (0, de.jsx)(c.$F, {
                      asChild: !0,
                      children: (0, de.jsx)(i.zx, {
                        variant: 'ghost',
                        size: 'sm',
                        children: o,
                      }),
                    }),
                    (0, de.jsxs)(c.AW, {
                      children: [
                        (0, de.jsx)(c.Xi, {
                          onClick: v,
                          children: r('knowledgeDetails.chunkMethod'),
                        }),
                        (0, de.jsx)(c.Xi, {
                          onClick: b,
                          children: r('knowledgeDetails.setMetaData'),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, de.jsx)(ue.Z, {
                  orientation: 'vertical',
                  className: 'h-2.5',
                }),
              ],
            }),
            (0, de.jsx)(Ue.h, {
              title: r('knowledgeDetails.redo', { chunkNum: u }),
              hidden: h || g,
              onOk: x(!0),
              onCancel: x(!1),
              children: (0, de.jsx)(i.zx, {
                variant: 'ghost',
                size: 'sm',
                onClick: h || g ? x(!1) : function () {},
                children: m,
              }),
            }),
            en(s)
              ? (0, de.jsxs)('div', {
                  className: 'flex items-center gap-1',
                  children: [
                    (0, de.jsx)(rn.E, {
                      value: f,
                      className: 'h-1 flex-1 min-w-10',
                    }),
                    f,
                    '%',
                  ],
                })
              : (0, de.jsx)(fn, { record: n }),
          ],
        });
      }
      var xn = function () {
          var e,
            n,
            t,
            a,
            r =
              ((n = (0, b.NL)()),
              (t = (0, j.D)({
                mutationKey: [Z.SaveDocumentName],
                mutationFn:
                  ((e = g()(
                    f()().mark(function e(t) {
                      var a, r, s, o;
                      return f()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = t.name),
                                (r = t.documentId),
                                (e.next = 3),
                                v.ZP.document_rename({ doc_id: r, name: a })
                              );
                            case 3:
                              return (
                                (s = e.sent),
                                0 === (o = s.data).code &&
                                  (N.ZP.success(x.Z.t('message.renamed')),
                                  n.invalidateQueries({
                                    queryKey: [Z.FetchDocumentList],
                                  })),
                                e.abrupt('return', o.code)
                              );
                            case 7:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  )),
                  function (n) {
                    return e.apply(this, arguments);
                  }),
              })),
              (a = t.data),
              { loading: t.isPending, saveName: t.mutateAsync, data: a }),
            s = r.saveName,
            o = r.loading,
            i = (0, _.useState)(),
            c = K()(i, 2),
            l = c[0],
            u = c[1],
            d = (0, Re.pG)(),
            m = d.visible,
            p = d.hideModal,
            h = d.showModal,
            k = (0, _.useCallback)(
              (function () {
                var e = g()(
                  f()().mark(function e(n) {
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null == l || !l.id) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (e.next = 3), s({ documentId: l.id, name: n })
                            );
                          case 3:
                            0 === e.sent && p();
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [null == l ? void 0 : l.id, s, p],
            ),
            w = (0, _.useCallback)(
              function (e) {
                u(e), h();
              },
              [h],
            );
          return {
            renameLoading: o,
            onRenameOk: k,
            renameVisible: m,
            hideRenameModal: p,
            showRenameModal: w,
            initialName: null == l ? void 0 : l.name,
          };
        },
        vn = function () {
          var e = (function () {
              var e,
                n = (0, b.NL)(),
                t = (0, j.D)({
                  mutationKey: [Z.SetDocumentMeta],
                  mutationFn:
                    ((e = g()(
                      f()().mark(function e(t) {
                        var a, r;
                        return f()().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    v.ZP.setMeta({
                                      meta: t.meta,
                                      doc_id: t.documentId,
                                    })
                                  );
                                case 3:
                                  return (
                                    (a = e.sent),
                                    0 ===
                                      (null == (r = a.data)
                                        ? void 0
                                        : r.code) &&
                                      (n.invalidateQueries({
                                        queryKey: [Z.FetchDocumentList],
                                      }),
                                      N.ZP.success(x.Z.t('message.modified'))),
                                    e.abrupt(
                                      'return',
                                      null == r ? void 0 : r.code,
                                    )
                                  );
                                case 9:
                                  (e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    N.ZP.error('error');
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
                    )),
                    function (n) {
                      return e.apply(this, arguments);
                    }),
                }),
                a = t.data,
                r = t.isPending;
              return { setDocumentMeta: t.mutateAsync, data: a, loading: r };
            })(),
            n = e.setDocumentMeta,
            t = e.loading,
            a = (0, _.useState)({}),
            r = K()(a, 2),
            s = r[0],
            o = r[1],
            i = (0, Re.pG)(),
            c = i.visible,
            l = i.hideModal,
            u = i.showModal,
            d = (0, _.useCallback)(
              (function () {
                var e = g()(
                  f()().mark(function e(t) {
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              n({
                                documentId: null == s ? void 0 : s.id,
                                meta: t,
                              })
                            );
                          case 2:
                            0 === e.sent && l();
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [n, null == s ? void 0 : s.id, l],
            ),
            m = (0, _.useCallback)(
              function (e) {
                o(e), u();
              },
              [u],
            );
          return {
            setMetaLoading: t,
            onSetMetaModalOk: d,
            setMetaVisible: c,
            hideSetMetaModal: l,
            showSetMetaModal: m,
            metaRecord: s,
          };
        };
      function bn(e) {
        var n,
          t,
          a = e.documents,
          r = e.pagination,
          s = e.setPagination,
          c = e.rowSelection,
          l = e.setRowSelection,
          u = _.useState([]),
          m = K()(u, 2),
          f = m[0],
          p = m[1],
          g = _.useState([]),
          h = K()(g, 2),
          x = h[0],
          v = h[1],
          b = _.useState({}),
          j = K()(b, 2),
          k = j[0],
          w = j[1],
          N = Ie(),
          y = N.changeParserLoading,
          D = N.onChangeParserOk,
          S = N.changeParserVisible,
          Z = N.hideChangeParserModal,
          M = N.showChangeParserModal,
          z = N.changeParserRecord,
          R = xn(),
          I = R.renameLoading,
          L = R.onRenameOk,
          O = R.renameVisible,
          T = R.hideRenameModal,
          V = R.showRenameModal,
          U = R.initialName,
          q = vn(),
          E = q.showSetMetaModal,
          B = q.hideSetMetaModal,
          $ = q.setMetaVisible,
          Q = q.setMetaLoading,
          Y = q.onSetMetaModalOk,
          X = q.metaRecord,
          H = (function (e) {
            var n = e.showChangeParserModal,
              t = e.showRenameModal,
              a = e.showSetMetaModal,
              r = (0, F.$G)('translation', { keyPrefix: 'knowledgeDetails' }).t,
              s = (0, Ge.$)().navigateToChunkParsedResult,
              o = P().setDocumentStatus;
            return [
              {
                id: 'select',
                header: function (e) {
                  var n = e.table;
                  return (0, de.jsx)(Le.X, {
                    checked:
                      n.getIsAllPageRowsSelected() ||
                      (n.getIsSomePageRowsSelected() && 'indeterminate'),
                    onCheckedChange: function (e) {
                      return n.toggleAllPageRowsSelected(!!e);
                    },
                    'aria-label': 'Select all',
                  });
                },
                cell: function (e) {
                  var n = e.row;
                  return (0, de.jsx)(Le.X, {
                    checked: n.getIsSelected(),
                    onCheckedChange: function (e) {
                      return n.toggleSelected(!!e);
                    },
                    'aria-label': 'Select row',
                  });
                },
                enableSorting: !1,
                enableHiding: !1,
              },
              {
                accessorKey: 'name',
                header: function (e) {
                  var n = e.column;
                  return (0, de.jsxs)(i.zx, {
                    variant: 'ghost',
                    onClick: function () {
                      return n.toggleSorting('asc' === n.getIsSorted());
                    },
                    children: [r('name'), (0, de.jsx)(Ve.Z, {})],
                  });
                },
                meta: { cellClassName: 'max-w-[20vw]' },
                cell: function (e) {
                  var n = e.row,
                    t = n.getValue('name');
                  return (0, de.jsxs)(Ae.u, {
                    children: [
                      (0, de.jsx)(Ae.aJ, {
                        asChild: !0,
                        children: (0, de.jsxs)('div', {
                          className: 'flex gap-2 cursor-pointer',
                          onClick: s(n.original.id, n.original.kb_id),
                          children: [
                            (0, de.jsx)(Fe.a, { name: t }),
                            (0, de.jsx)('span', {
                              className: (0, Oe.cn)('truncate'),
                              children: t,
                            }),
                          ],
                        }),
                      }),
                      (0, de.jsx)(Ae._v, {
                        children: (0, de.jsx)('p', { children: t }),
                      }),
                    ],
                  });
                },
              },
              {
                accessorKey: 'create_time',
                header: function (e) {
                  var n = e.column;
                  return (0, de.jsxs)(i.zx, {
                    variant: 'ghost',
                    onClick: function () {
                      return n.toggleSorting('asc' === n.getIsSorted());
                    },
                    children: [r('uploadDate'), (0, de.jsx)(Ve.Z, {})],
                  });
                },
                cell: function (e) {
                  var n = e.row;
                  return (0, de.jsx)('div', {
                    className: 'lowercase',
                    children: (0, Te.p6)(n.getValue('create_time')),
                  });
                },
              },
              {
                accessorKey: 'status',
                header: r('enabled'),
                cell: function (e) {
                  var n = e.row,
                    t = n.original.id;
                  return (0, de.jsx)(Ke.r, {
                    checked: '1' === n.getValue('status'),
                    onCheckedChange: function (e) {
                      o({ status: e, documentId: t });
                    },
                  });
                },
              },
              {
                accessorKey: 'chunk_num',
                header: r('chunkNumber'),
                cell: function (e) {
                  var n = e.row;
                  return (0, de.jsx)('div', {
                    className: 'capitalize',
                    children: n.getValue('chunk_num'),
                  });
                },
              },
              {
                accessorKey: 'run',
                header: r('parsingStatus'),
                cell: function (e) {
                  var t = e.row;
                  return (0, de.jsx)(hn, {
                    record: t.original,
                    showChangeParserModal: n,
                    showSetMetaModal: a,
                  });
                },
              },
              {
                id: 'actions',
                header: r('action'),
                enableHiding: !1,
                cell: function (e) {
                  var n = e.row.original;
                  return (0, de.jsx)(an, { record: n, showRenameModal: t });
                },
              },
            ];
          })({
            showChangeParserModal: M,
            showRenameModal: V,
            showSetMetaModal: E,
          }),
          J = (0, _.useMemo)(
            function () {
              return {
                pageIndex: (r.current || 1) - 1,
                pageSize: r.pageSize || 10,
              };
            },
            [r],
          ),
          W = (0, A.b7)({
            data: a,
            columns: H,
            onSortingChange: p,
            onColumnFiltersChange: v,
            getCoreRowModel: (0, G.sC)(),
            getPaginationRowModel: (0, G.G_)(),
            getSortedRowModel: (0, G.tj)(),
            getFilteredRowModel: (0, G.vL)(),
            onColumnVisibilityChange: w,
            onRowSelectionChange: l,
            manualPagination: !0,
            state: {
              sorting: f,
              columnFilters: x,
              columnVisibility: k,
              rowSelection: c,
              pagination: J,
            },
            rowCount: null !== (n = r.total) && void 0 !== n ? n : 0,
          });
        return (0, de.jsxs)('div', {
          className: 'w-full',
          children: [
            (0, de.jsxs)(ye.iA, {
              rootClassName: 'max-h-[82vh]',
              children: [
                (0, de.jsx)(ye.xD, {
                  children: W.getHeaderGroups().map(function (e) {
                    return (0, de.jsx)(
                      ye.SC,
                      {
                        children: e.headers.map(function (e) {
                          return (0, de.jsx)(
                            ye.ss,
                            {
                              children: e.isPlaceholder
                                ? null
                                : (0, A.ie)(
                                    e.column.columnDef.header,
                                    e.getContext(),
                                  ),
                            },
                            e.id,
                          );
                        }),
                      },
                      e.id,
                    );
                  }),
                }),
                (0, de.jsx)(ye.RM, {
                  className: 'relative',
                  children:
                    null !== (t = W.getRowModel().rows) &&
                    void 0 !== t &&
                    t.length
                      ? W.getRowModel().rows.map(function (e) {
                          return (0, de.jsx)(
                            ye.SC,
                            {
                              'data-state': e.getIsSelected() && 'selected',
                              children: e.getVisibleCells().map(function (e) {
                                var n;
                                return (0, de.jsx)(
                                  ye.pj,
                                  {
                                    className:
                                      null === (n = e.column.columnDef.meta) ||
                                      void 0 === n
                                        ? void 0
                                        : n.cellClassName,
                                    children: (0, A.ie)(
                                      e.column.columnDef.cell,
                                      e.getContext(),
                                    ),
                                  },
                                  e.id,
                                );
                              }),
                            },
                            e.id,
                          );
                        })
                      : (0, de.jsx)(ye.SC, {
                          children: (0, de.jsx)(ye.pj, {
                            colSpan: H.length,
                            className: 'h-24 text-center',
                            children: 'No results.',
                          }),
                        }),
                }),
              ],
            }),
            (0, de.jsx)('div', {
              className: 'flex items-center justify-end  py-4',
              children: (0, de.jsx)('div', {
                className: 'space-x-2',
                children: (0, de.jsx)(
                  _e.g,
                  d()(
                    d()({}, (0, C.pick)(r, 'current', 'pageSize')),
                    {},
                    {
                      total: r.total,
                      onChange: function (e, n) {
                        s({ page: e, pageSize: n });
                      },
                    },
                  ),
                ),
              }),
            }),
            S &&
              (0, de.jsx)(Ce, {
                documentId: z.id,
                parserId: z.parser_id,
                parserConfig: z.parser_config,
                documentExtension: (0, De.RT)(z.name),
                onOk: D,
                visible: S,
                hideModal: Z,
                loading: y,
              }),
            O &&
              (0, de.jsx)(o.L, {
                visible: O,
                onOk: L,
                loading: I,
                hideModal: T,
                initialName: U,
              }),
            $ &&
              (0, de.jsx)(ze, {
                hideModal: B,
                loading: Q,
                onOk: Y,
                initialMetaData: X.meta_fields,
              }),
          ],
        });
      }
      var jn = t(85594),
        kn = t(37921),
        wn = t(64712);
      var Nn = function () {
          var e = (function () {
              var e,
                n = (0, y.UO)().id,
                t = (0, S.fz)(),
                a = t.setPaginationParams,
                r = t.page,
                s = (0, b.NL)(),
                o = (0, j.D)({
                  mutationKey: [Z.CreateDocument],
                  mutationFn:
                    ((e = g()(
                      f()().mark(function e(t) {
                        var o, i;
                        return f()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  v.ZP.document_create({ name: t, kb_id: n })
                                );
                              case 2:
                                return (
                                  (o = e.sent),
                                  0 === (i = o.data).code &&
                                    (1 === r
                                      ? s.invalidateQueries({
                                          queryKey: [Z.FetchDocumentList],
                                        })
                                      : a(),
                                    N.ZP.success(x.Z.t('message.created'))),
                                  e.abrupt('return', i.code)
                                );
                              case 6:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    )),
                    function (n) {
                      return e.apply(this, arguments);
                    }),
                }),
                i = o.data,
                c = o.isPending;
              return { createDocument: o.mutateAsync, loading: c, data: i };
            })(),
            n = e.createDocument,
            t = e.loading,
            a = (0, Re.pG)(),
            r = a.visible,
            s = a.hideModal,
            o = a.showModal,
            i = (0, _.useCallback)(
              (function () {
                var e = g()(
                  f()().mark(function e(t) {
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), n(t);
                          case 2:
                            0 === e.sent && s();
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [s, n],
            );
          return {
            createLoading: t,
            onCreateOk: i,
            createVisible: r,
            hideCreateModal: s,
            showCreateModal: o,
          };
        },
        Cn = t(83933);
      function _n() {
        var e,
          n,
          t,
          a =
            ((n = (0, y.UO)().id),
            (t = (0, k.a)({
              queryKey: [Z.FetchAllDocumentList],
              initialData: { docs: [], total: 0 },
              refetchInterval: 15e3,
              enabled: !!n,
              queryFn:
                ((e = g()(
                  f()().mark(function e() {
                    var t;
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, v.Qh)({ kb_id: n });
                          case 2:
                            if (0 !== (t = e.sent).data.code) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt('return', t.data.data);
                          case 5:
                            return e.abrupt('return', { docs: [], total: 0 });
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
            })),
            { data: t.data, loading: t.isFetching }),
          r = a.data.docs,
          s = (0, F.$G)().t,
          o = (0, _.useMemo)(
            function () {
              return (0, Cn.n7)(r, 'type', 'type');
            },
            [r],
          ),
          i = (0, _.useMemo)(
            function () {
              return (0, Cn.n7)(r, 'run', 'run').map(function (e) {
                return d()(
                  d()({}, e),
                  {},
                  {
                    label: s('knowledgeDetails.runningStatus'.concat(e.label)),
                  },
                );
              });
            },
            [r, s],
          ),
          c = (0, _.useMemo)(
            function () {
              return [
                { field: 'type', label: 'File Type', list: o },
                { field: 'run', label: 'Status', list: i },
              ];
            },
            [i, o],
          );
        return { fileTypes: o, fileStatus: i, filters: c };
      }
      var yn = function () {
        var e = (0, Re.pG)(),
          n = e.visible,
          t = e.hideModal,
          a = e.showModal,
          r = (function () {
            var e,
              n = (0, b.NL)(),
              t = (0, y.UO)().id,
              a = (0, j.D)({
                mutationKey: [Z.UploadDocument],
                mutationFn:
                  ((e = g()(
                    f()().mark(function e(a) {
                      var r, s, o;
                      return f()().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = new FormData()).append('kb_id', t),
                                  a.forEach(function (e) {
                                    r.append('file', e);
                                  }),
                                  (e.prev = 3),
                                  (e.next = 6),
                                  v.ZP.document_upload(r)
                                );
                              case 6:
                                return (
                                  (s = e.sent),
                                  (0 !== (o = (0, C.get)(s, 'data.code')) &&
                                    500 !== o) ||
                                    n.invalidateQueries({
                                      queryKey: [Z.FetchDocumentList],
                                    }),
                                  e.abrupt(
                                    'return',
                                    null == s ? void 0 : s.data,
                                  )
                                );
                              case 12:
                                return (
                                  (e.prev = 12),
                                  (e.t0 = e.catch(3)),
                                  console.warn(e.t0),
                                  e.abrupt('return', {
                                    code: 500,
                                    message: e.t0 + '',
                                  })
                                );
                              case 16:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[3, 12]],
                      );
                    }),
                  )),
                  function (n) {
                    return e.apply(this, arguments);
                  }),
              }),
              r = a.data,
              s = a.isPending;
            return { uploadDocument: a.mutateAsync, loading: s, data: r };
          })(),
          s = r.uploadDocument,
          o = r.loading,
          i = (0, _.useCallback)(
            (function () {
              var e = g()(
                f()().mark(function e(n) {
                  var a, r, o;
                  return f()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(n.length > 0)) {
                            e.next = 10;
                            break;
                          }
                          return (e.next = 3), s(n);
                        case 3:
                          if (
                            'string' ==
                            typeof (null == (a = e.sent) ? void 0 : a.message)
                          ) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt('return');
                        case 6:
                          return (
                            (r = (0, De.YC)(null == a ? void 0 : a.message)),
                            (o = null == a ? void 0 : a.code),
                            (0 === (null == a ? void 0 : a.code) ||
                              (500 === (null == a ? void 0 : a.code) &&
                                r !== n.length)) &&
                              ((o = 0), t()),
                            e.abrupt('return', o)
                          );
                        case 10:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            [s, t],
          );
        return {
          documentUploadLoading: o,
          onDocumentUploadOk: i,
          documentUploadVisible: n,
          hideDocumentUploadModal: t,
          showDocumentUploadModal: a,
        };
      };
      function Dn() {
        var e = (0, F.$G)().t,
          n = yn(),
          t = n.documentUploadVisible,
          u = n.hideDocumentUploadModal,
          d = n.showDocumentUploadModal,
          m = n.onDocumentUploadOk,
          p = n.documentUploadLoading,
          h = M(),
          x = h.searchString,
          v = h.documents,
          b = h.pagination,
          j = h.handleInputChange,
          k = h.setPagination,
          w = h.filterValue,
          N = h.handleFilterSubmit,
          C = h.loading,
          y = _n().filters,
          D = Nn(),
          S = D.createLoading,
          Z = D.onCreateOk,
          L = D.createVisible,
          K = D.hideCreateModal,
          A = D.showCreateModal,
          G = (0, l.G)(),
          O = G.rowSelection,
          T = G.rowSelectionIsEmpty,
          U = G.setRowSelection,
          q = G.selectedCount,
          E = (function (e) {
            var n,
              t = e.rowSelection,
              a = e.setRowSelection,
              r = e.documents,
              s = (0, F.$G)().t,
              o = (0, l.S)(t, r).selectedIds,
              i = z().runDocumentByIds,
              c = P().setDocumentStatus,
              u = R().removeDocument,
              d = (0, _.useCallback)(
                function (e) {
                  var n = o.filter(function (e) {
                    return !r.some(function (n) {
                      return e === n.id && n.type === V.n_.Virtual;
                    });
                  });
                  0 !== n.length
                    ? i({ documentIds: n, run: e, shouldDelete: !1 })
                    : wn.Am.error(s('Please select a non-empty file list'));
                },
                [r, i, o, s],
              ),
              m = (0, _.useCallback)(
                function () {
                  d(1);
                },
                [d],
              ),
              p = (0, _.useCallback)(
                function () {
                  d(2);
                },
                [d],
              ),
              h = (0, _.useCallback)(
                function (e) {
                  o.forEach(function (n) {
                    c({ status: e, documentId: n });
                  });
                },
                [o, c],
              ),
              x = (0, _.useCallback)(
                function () {
                  h(!0);
                },
                [h],
              ),
              v = (0, _.useCallback)(
                function () {
                  h(!1);
                },
                [h],
              ),
              b = (0, _.useCallback)(
                function () {
                  var e = o.filter(function (e) {
                    return !r
                      .filter(function (e) {
                        return e.run === V.cG.RUNNING;
                      })
                      .some(function (n) {
                        return n.id === e;
                      });
                  });
                  if (0 !== e.length) return u(e);
                  wn.Am.error(s('theDocumentBeingParsedCannotBeDeleted'));
                },
                [o, u, r, s],
              ),
              j = [
                {
                  id: 'enabled',
                  label: s('knowledgeDetails.enabled'),
                  icon: (0, de.jsx)(jn.Z, {}),
                  onClick: x,
                },
                {
                  id: 'disabled',
                  label: s('knowledgeDetails.disabled'),
                  icon: (0, de.jsx)(kn.Z, {}),
                  onClick: v,
                },
                {
                  id: 'run',
                  label: s('knowledgeDetails.run'),
                  icon: (0, de.jsx)(sn.Z, {}),
                  onClick: m,
                },
                {
                  id: 'cancel',
                  label: s('knowledgeDetails.cancel'),
                  icon: (0, de.jsx)(on.Z, {}),
                  onClick: p,
                },
                {
                  id: 'delete',
                  label: s('common.delete'),
                  icon: (0, de.jsx)(Xe.Z, {}),
                  onClick:
                    ((n = g()(
                      f()().mark(function e() {
                        return f()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), b();
                              case 2:
                                0 === e.sent && a({});
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    )),
                    function () {
                      return n.apply(this, arguments);
                    }),
                },
              ];
            return { list: j };
          })({ documents: v, rowSelection: O, setRowSelection: U }),
          B = E.list;
        return (0, de.jsxs)('section', {
          className: 'p-5',
          children: [
            (0, de.jsx)(s.Z, {
              title: 'Dataset',
              onSearchChange: j,
              searchString: x,
              value: w,
              onChange: N,
              filters: y,
              leftPanel: (0, de.jsxs)('div', {
                className: 'items-start',
                children: [
                  (0, de.jsx)('div', {
                    className: 'pb-1',
                    children: 'Dataset',
                  }),
                  (0, de.jsx)('div', {
                    className: 'text-text-sub-title-invert text-sm',
                    children:
                      'Please wait for your files to finish parsing before starting an AI-powered chat.',
                  }),
                ],
              }),
              children: (0, de.jsxs)(c.h_, {
                children: [
                  (0, de.jsx)(c.$F, {
                    asChild: !0,
                    children: (0, de.jsxs)(i.zx, {
                      size: 'sm',
                      children: [
                        (0, de.jsx)(I.Z, {}),
                        e('knowledgeDetails.addFile'),
                      ],
                    }),
                  }),
                  (0, de.jsxs)(c.AW, {
                    className: 'w-56',
                    children: [
                      (0, de.jsx)(c.Xi, {
                        onClick: d,
                        children: e('fileManager.uploadFile'),
                      }),
                      (0, de.jsx)(c.VD, {}),
                      (0, de.jsx)(c.Xi, {
                        onClick: A,
                        children: e('fileManager.newFolder'),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            T || (0, de.jsx)(a.z, { list: B, count: q }),
            (0, de.jsx)(bn, {
              documents: v,
              pagination: b,
              setPagination: k,
              rowSelection: O,
              setRowSelection: U,
              loading: C,
            }),
            t && (0, de.jsx)(r.j, { hideModal: u, onOk: m, loading: p }),
            L &&
              (0, de.jsx)(o.L, {
                hideModal: K,
                onOk: Z,
                loading: S,
                title: 'File Name',
              }),
          ],
        });
      }
    },
    23454: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var a = (function (e) {
        return (
          (e.Login = '/login'),
          (e.Home = '/home'),
          (e.Datasets = '/datasets'),
          (e.DatasetBase = '/dataset'),
          (e[(e.Dataset = ''.concat(e.DatasetBase).concat(e.DatasetBase))] =
            'Dataset'),
          (e.Agent = '/agent'),
          (e.AgentTemplates = '/agent-templates'),
          (e.Agents = '/agents'),
          (e.Searches = '/next-searches'),
          (e.Search = '/next-search'),
          (e.Chats = '/next-chats'),
          (e.Chat = '/next-chat'),
          (e.Files = '/files'),
          (e.ProfileSetting = '/profile-setting'),
          (e.DatasetTesting = '/testing'),
          (e.DatasetSetting = '/setting'),
          (e.Chunk = '/chunk'),
          (e.ChunkResult = '/chunk/chunk'),
          (e.Parsed = '/parsed'),
          (e.ParsedResult = '/chunk/parsed'),
          (e.Result = '/result'),
          (e.ResultView = '/chunk/result'),
          e
        );
      })({});
      a.Home,
        a.Home,
        '@/pages'.concat(a.Home),
        a.Datasets,
        a.Datasets,
        '@/pages'.concat(a.Datasets),
        a.Chats,
        a.Chats,
        '@/pages'.concat(a.Chats),
        a.Chat,
        '@/pages'.concat(a.Chats, '/chat'),
        a.Searches,
        a.Searches,
        '@/pages'.concat(a.Searches),
        a.Search,
        '@/pages'.concat(a.Search),
        a.Agents,
        a.Agents,
        '@/pages'.concat(a.Agents),
        ''.concat(a.Agent, '/:id'),
        '@/pages'.concat(a.Agent),
        a.AgentTemplates,
        '@/pages'.concat(a.Agents).concat(a.AgentTemplates),
        a.Files,
        a.Files,
        '@/pages'.concat(a.Files),
        a.DatasetBase,
        a.DatasetBase,
        a.Dataset,
        a.DatasetBase,
        '@/pages'.concat(a.DatasetBase),
        ''.concat(a.Dataset, '/:id'),
        '@/pages'.concat(a.Dataset),
        ''.concat(a.DatasetBase).concat(a.DatasetSetting, '/:id'),
        '@/pages'.concat(a.DatasetBase).concat(a.DatasetSetting),
        ''.concat(a.DatasetBase).concat(a.DatasetTesting, '/:id'),
        '@/pages'.concat(a.DatasetBase).concat(a.DatasetTesting),
        ''.concat(a.ParsedResult, '/chunks'),
        '@/pages'.concat(
          a.Chunk,
          '/parsed-result/add-knowledge/components/knowledge-chunk',
        ),
        a.Chunk,
        a.Chunk,
        '@/pages'.concat(a.Chunk),
        ''.concat(a.ChunkResult, '/:id'),
        '@/pages'.concat(a.Chunk, '/chunk-result'),
        ''.concat(a.ResultView, '/:id'),
        '@/pages'.concat(a.Chunk, '/result-view'),
        a.Chunk,
        '@/pages'.concat(a.Chunk),
        a.ProfileSetting,
        '@/pages'.concat(a.ProfileSetting),
        a.ProfileSetting,
        ''.concat(a.ProfileSetting, '/profile'),
        ''.concat(a.ProfileSetting, '/profile'),
        '@/pages'.concat(a.ProfileSetting, '/profile'),
        ''.concat(a.ProfileSetting, '/team'),
        '@/pages'.concat(a.ProfileSetting, '/team'),
        ''.concat(a.ProfileSetting, '/plan'),
        '@/pages'.concat(a.ProfileSetting, '/plan'),
        ''.concat(a.ProfileSetting, '/model'),
        '@/pages'.concat(a.ProfileSetting, '/model'),
        ''.concat(a.ProfileSetting, '/prompt'),
        '@/pages'.concat(a.ProfileSetting, '/prompt');
    },
    73955: function (e, n, t) {
      'use strict';
      t.d(n, {
        $V: function () {
          return A;
        },
        Fb: function () {
          return O;
        },
        QL: function () {
          return F;
        },
        Qh: function () {
          return T;
        },
        Re: function () {
          return K;
        },
        sX: function () {
          return G;
        },
        tc: function () {
          return L;
        },
      });
      var a = t(60806),
        r = t(66582),
        s = t(78158),
        o = a.Z.create_kb,
        i = a.Z.update_kb,
        c = a.Z.rm_kb,
        l = a.Z.get_kb_detail,
        u = a.Z.kb_list,
        d = a.Z.get_document_list,
        m = a.Z.document_change_status,
        f = a.Z.document_rm,
        p = a.Z.document_delete,
        g = a.Z.document_create,
        h = a.Z.document_change_parser,
        x = a.Z.document_thumbnails,
        v = a.Z.chunk_list,
        b = a.Z.create_chunk,
        j = a.Z.set_chunk,
        k = a.Z.get_chunk,
        w = a.Z.switch_chunk,
        N = a.Z.rm_chunk,
        C = a.Z.retrieval_test,
        _ = a.Z.document_rename,
        y = a.Z.document_run,
        D = a.Z.document_upload,
        S = a.Z.web_crawl,
        Z = a.Z.knowledge_graph,
        M = a.Z.document_infos,
        P = a.Z.upload_and_parse,
        z = a.Z.listTagByKnowledgeIds,
        R = {
          createKb: { url: o, method: 'post' },
          updateKb: { url: i, method: 'post' },
          rmKb: { url: c, method: 'post' },
          get_kb_detail: { url: l, method: 'get' },
          getList: { url: u, method: 'post' },
          get_document_list: { url: d, method: 'get' },
          document_change_status: { url: m, method: 'post' },
          document_rm: { url: f, method: 'post' },
          document_rename: { url: _, method: 'post' },
          document_create: { url: g, method: 'post' },
          document_run: { url: y, method: 'post' },
          document_change_parser: { url: h, method: 'post' },
          document_thumbnails: { url: x, method: 'get' },
          document_upload: { url: D, method: 'post' },
          web_crawl: { url: S, method: 'post' },
          document_infos: { url: M, method: 'post' },
          setMeta: { url: a.Z.setMeta, method: 'post' },
          chunk_list: { url: v, method: 'post' },
          create_chunk: { url: b, method: 'post' },
          set_chunk: { url: j, method: 'post' },
          get_chunk: { url: k, method: 'get' },
          switch_chunk: { url: w, method: 'post' },
          rm_chunk: { url: N, method: 'post' },
          retrieval_test: { url: C, method: 'post' },
          knowledge_graph: { url: Z, method: 'get' },
          document_delete: { url: p, method: 'delete' },
          upload_and_parse: { url: P, method: 'post' },
          listTagByKnowledgeIds: { url: z, method: 'get' },
        },
        I = (0, r.Z)(R, s.ZP),
        F = function (e) {
          return s.ZP.get(a.Z.listTag(e));
        },
        L = function (e, n) {
          return (0, s.v_)(a.Z.removeTag(e), { tags: n });
        },
        K = function (e, n) {
          var t = n.fromTag,
            r = n.toTag;
          return (0, s.v_)(a.Z.renameTag(e), { fromTag: t, toTag: r });
        };
      function A(e) {
        return s.ZP.get(a.Z.getKnowledgeGraph(e));
      }
      function G(e) {
        return s.ZP.delete(a.Z.getKnowledgeGraph(e));
      }
      var O = function (e, n) {
          return s.ZP.post(a.Z.kb_list, { data: n || {}, params: e });
        },
        T = function (e, n) {
          return s.ZP.post(a.Z.get_document_list, { data: n || {}, params: e });
        };
      n.ZP = I;
    },
    83933: function (e, n, t) {
      'use strict';
      t.d(n, {
        n7: function () {
          return a;
        },
      });
      t(96330);
      function a(e, n, t) {
        var a = [];
        return (
          e.forEach(function (e) {
            var r = a.find(function (t) {
              return t.id === e[n];
            });
            r ? (r.count += 1) : a.push({ id: e[n], label: e[t], count: 1 });
          }),
          a
        );
      }
    },
    65777: function () {},
  },
]);
//# sourceMappingURL=p__dataset__dataset__index.67a26ec7.async.js.map
