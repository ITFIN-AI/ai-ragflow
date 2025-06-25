'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [9615],
  {
    41332: function (e, n, t) {
      t.d(n, {
        z: function () {
          return m;
        },
      });
      var a = t(9783),
        r = t.n(a),
        i = t(57636),
        s = t(87030),
        o = t(27080),
        l = t(28250),
        c = t(62435),
        u = t(26625),
        d = t(81136),
        f = t(86074);
      function m(e) {
        var n = e.list,
          t = e.count,
          a = (0, c.useCallback)(function (e) {
            return 'delete' === e;
          }, []);
        return (0, f.jsx)(s.Zb, {
          className: 'mb-4',
          children: (0, f.jsxs)(s.aY, {
            className: 'p-1 pl-5 flex items-center gap-6',
            children: [
              (0, f.jsxs)('section', {
                className: 'text-text-sub-title-invert flex items-center gap-2',
                children: [
                  (0, f.jsxs)('span', {
                    children: ['Selected: ', t, ' Files'],
                  }),
                  (0, f.jsx)(l.Z, { className: 'size-3' }),
                ],
              }),
              (0, f.jsx)(d.Z, { orientation: 'vertical', className: 'h-3' }),
              (0, f.jsx)('ul', {
                className: 'flex gap-2',
                children: n.map(function (e) {
                  return (0, f.jsx)(
                    'li',
                    {
                      className: (0, o.cn)(
                        r()({}, 'text-text-delete-red', a(e.id)),
                      ),
                      children: (0, f.jsx)(u.h, {
                        hidden: !a(e.id),
                        onOk: e.onClick,
                        children: (0, f.jsxs)(i.zx, {
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
      t.d(n, {
        j: function () {
          return C;
        },
      });
      var a = t(5574),
        r = t.n(a),
        i = t(57636),
        s = t(28993),
        o = t(97857),
        l = t.n(o),
        c = t(13769),
        u = t.n(c),
        d = t(50981),
        f = t(62435),
        m = t(27080),
        p = t(86074),
        h = ['className'],
        g = ['className'],
        v = ['className'],
        x = d.fC,
        b = f.forwardRef(function (e, n) {
          var t = e.className,
            a = u()(e, h);
          return (0, p.jsx)(
            d.aV,
            l()(
              {
                ref: n,
                className: (0, m.cn)(
                  'inline-flex h-10 items-center justify-center rounded-md bg-colors-background-inverse-standard p-1 text-colors-text-neutral-standard',
                  t,
                ),
              },
              a,
            ),
          );
        });
      b.displayName = d.aV.displayName;
      var j = f.forwardRef(function (e, n) {
        var t = e.className,
          a = u()(e, g);
        return (0, p.jsx)(
          d.xz,
          l()(
            {
              ref: n,
              className: (0, m.cn)(
                'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-colors-background-inverse-strong data-[state=active]:text-colors-text-inverse-strong data-[state=active]:shadow-sm',
                t,
              ),
            },
            a,
          ),
        );
      });
      j.displayName = d.xz.displayName;
      var N = f.forwardRef(function (e, n) {
        var t = e.className,
          a = u()(e, v);
        return (0, p.jsx)(
          d.VY,
          l()(
            {
              ref: n,
              className: (0, m.cn)(
                'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                t,
              ),
            },
            a,
          ),
        );
      });
      N.displayName = d.VY.displayName;
      var w = t(67421),
        y = t(84445);
      function k(e) {
        var n = e.setFiles,
          t = (0, w.$G)().t;
        return (0, p.jsxs)(x, {
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
            (0, p.jsx)(N, {
              value: 'account',
              children: (0, p.jsx)(y.b, {
                maxFileCount: 8,
                maxSize: 8388608,
                onValueChange: n,
                accept: { '*': [] },
              }),
            }),
            (0, p.jsx)(N, {
              value: 'password',
              children: t('common.comingSoon'),
            }),
          ],
        });
      }
      function C(e) {
        var n = e.hideModal,
          t = e.onOk,
          a = e.loading,
          o = (0, w.$G)().t,
          l = (0, f.useState)([]),
          c = r()(l, 2),
          u = c[0],
          d = c[1],
          m = (0, f.useCallback)(
            function () {
              null == t || t(u);
            },
            [u, t],
          );
        return (0, p.jsx)(s.Vq, {
          open: !0,
          onOpenChange: n,
          children: (0, p.jsxs)(s.cZ, {
            className: 'sm:max-w-[425px]',
            children: [
              (0, p.jsx)(s.fK, {
                children: (0, p.jsx)(s.$N, {
                  children: o('fileManager.uploadFile'),
                }),
              }),
              (0, p.jsx)(k, { setFiles: d }),
              (0, p.jsx)(s.cN, {
                children: (0, p.jsx)(i.dw, {
                  type: 'submit',
                  onClick: m,
                  loading: a,
                  children: o('common.save'),
                }),
              }),
            ],
          }),
        });
      }
    },
    84445: function (e, n, t) {
      t.d(n, {
        b: function () {
          return M;
        },
      });
      var a = t(97857),
        r = t.n(a),
        i = t(19632),
        s = t.n(i),
        o = t(5574),
        l = t.n(o),
        c = t(13769),
        u = t.n(c),
        d = t(13766),
        f = t(41352),
        m = t(28142),
        p = t(62435),
        h = t(44524),
        g = t(64712),
        v = t(57636),
        x = t(77631),
        b = t(68635),
        j = t(27080),
        N = t(86074),
        w = ['className', 'orientation'],
        y = ['className', 'children'],
        k = p.forwardRef(function (e, n) {
          var t = e.className,
            a = e.orientation,
            i = void 0 === a ? 'vertical' : a,
            s = u()(e, w);
          return (0, N.jsx)(
            b.gb,
            r()(
              r()(
                {
                  ref: n,
                  orientation: i,
                  className: (0, j.cn)(
                    'flex touch-none select-none transition-colors',
                    'vertical' === i &&
                      'h-full w-2.5 border-l border-l-transparent p-[1px]',
                    'horizontal' === i &&
                      'h-2.5 flex-col border-t border-t-transparent p-[1px]',
                    t,
                  ),
                },
                s,
              ),
              {},
              {
                children: (0, N.jsx)(b.q4, {
                  className: 'relative flex-1 rounded-full bg-border',
                }),
              },
            ),
          );
        });
      k.displayName = b.gb.displayName;
      var C = p.forwardRef(function (e, n) {
        var t = e.className,
          a = e.children,
          i = u()(e, y);
        return (0, N.jsxs)(
          b.fC,
          r()(
            r()(
              { ref: n, className: (0, j.cn)('relative overflow-hidden', t) },
              i,
            ),
            {},
            {
              children: [
                (0, N.jsx)(b.l_, {
                  className: 'h-full w-full rounded-[inherit]',
                  children: a,
                }),
                (0, N.jsx)(k, {}),
                (0, N.jsx)(b.Ns, {}),
              ],
            },
          ),
        );
      });
      function F(e) {
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
      function S(e) {
        var n = e.prop,
          t = e.defaultProp,
          a = e.onChange,
          r = void 0 === a ? function () {} : a,
          i = (function (e) {
            var n = e.defaultProp,
              t = e.onChange,
              a = p.useState(n),
              r = l()(a, 1)[0],
              i = p.useRef(r),
              s = F(t);
            return (
              p.useEffect(
                function () {
                  i.current !== r && (s(r), (i.current = r));
                },
                [r, i, s],
              ),
              a
            );
          })({ defaultProp: t, onChange: r }),
          s = l()(i, 2),
          o = s[0],
          c = s[1],
          u = void 0 !== n,
          d = u ? n : o,
          f = F(r);
        return [
          d,
          p.useCallback(
            function (e) {
              if (u) {
                var t = 'function' == typeof e ? e(n) : e;
                t !== n && f(t);
              } else c(e);
            },
            [u, n, c, f],
          ),
        ];
      }
      C.displayName = b.fC.displayName;
      var R = [
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
      function P(e) {
        var n = e.file;
        return n.type.startsWith('image/')
          ? (0, N.jsx)('img', {
              src: n.preview,
              alt: n.name,
              width: 48,
              height: 48,
              loading: 'lazy',
              className: 'aspect-square shrink-0 rounded-md object-cover',
            })
          : (0, N.jsx)(d.Z, {
              className: 'size-10 text-muted-foreground',
              'aria-hidden': 'true',
            });
      }
      function z(e) {
        var n = e.file,
          t = e.progress,
          a = e.onRemove;
        return (0, N.jsxs)('div', {
          className: 'relative flex items-center gap-2.5',
          children: [
            (0, N.jsxs)('div', {
              className: 'flex flex-1 gap-2.5',
              children: [
                Z(n) ? (0, N.jsx)(P, { file: n }) : null,
                (0, N.jsxs)('div', {
                  className: 'flex w-full flex-col gap-2',
                  children: [
                    (0, N.jsxs)('div', {
                      className: 'flex flex-col gap-px',
                      children: [
                        (0, N.jsx)('p', {
                          className:
                            'line-clamp-1 text-sm font-medium text-foreground/80',
                          children: n.name,
                        }),
                        (0, N.jsx)('p', {
                          className: 'text-xs text-muted-foreground',
                          children: (0, j.t)(n.size),
                        }),
                      ],
                    }),
                    t ? (0, N.jsx)(x.E, { value: t }) : null,
                  ],
                }),
              ],
            }),
            (0, N.jsx)('div', {
              className: 'flex items-center gap-2',
              children: (0, N.jsxs)(v.zx, {
                type: 'button',
                variant: 'outline',
                size: 'icon',
                className: 'size-7',
                onClick: a,
                children: [
                  (0, N.jsx)(f.Z, {
                    className: 'size-4',
                    'aria-hidden': 'true',
                  }),
                  (0, N.jsx)('span', {
                    className: 'sr-only',
                    children: 'Remove file',
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function M(e) {
        var n,
          t = e.value,
          a = e.onValueChange,
          i = e.onUpload,
          o = e.progresses,
          c = e.accept,
          d = void 0 === c ? { 'image/*': [] } : c,
          f = e.maxSize,
          v = void 0 === f ? 2097152 : f,
          x = e.maxFileCount,
          b = void 0 === x ? 1 : x,
          w = e.multiple,
          y = void 0 !== w && w,
          k = e.disabled,
          F = void 0 !== k && k,
          P = e.className,
          M = u()(e, R),
          D = S({ prop: t, onChange: a }),
          L = l()(D, 2),
          I = L[0],
          K = L[1],
          T = p.useCallback(
            function (e, n) {
              var t;
              if (!y && 1 === b && e.length > 1)
                g.Am.error('Cannot upload more than 1 file at a time');
              else if (
                (null !== (t = null == I ? void 0 : I.length) && void 0 !== t
                  ? t
                  : 0) +
                  e.length >
                b
              )
                g.Am.error('Cannot upload more than '.concat(b, ' files'));
              else {
                var a = e.map(function (e) {
                    return Object.assign(e, {
                      preview: URL.createObjectURL(e),
                    });
                  }),
                  r = I ? [].concat(s()(I), s()(a)) : a;
                if (
                  (K(r),
                  n.length > 0 &&
                    n.forEach(function (e) {
                      var n = e.file;
                      g.Am.error('File '.concat(n.name, ' was rejected'));
                    }),
                  i && r.length > 0 && r.length <= b)
                ) {
                  var o = r.length > 0 ? ''.concat(r.length, ' files') : 'file';
                  g.Am.promise(i(r), {
                    loading: 'Uploading '.concat(o, '...'),
                    success: function () {
                      return K([]), ''.concat(o, ' uploaded');
                    },
                    error: 'Failed to upload '.concat(o),
                  });
                }
              }
            },
            [I, b, y, i, K],
          );
        p.useEffect(function () {
          return function () {
            I &&
              I.forEach(function (e) {
                Z(e) && URL.revokeObjectURL(e.preview);
              });
          };
        }, []);
        var A =
          F ||
          (null !== (n = null == I ? void 0 : I.length) && void 0 !== n
            ? n
            : 0) >= b;
        return (0, N.jsxs)('div', {
          className: 'relative flex flex-col gap-6 overflow-hidden',
          children: [
            (0, N.jsx)(h.ZP, {
              onDrop: T,
              accept: d,
              maxSize: v,
              maxFiles: b,
              multiple: b > 1 || y,
              disabled: A,
              children: function (e) {
                var n = e.getRootProps,
                  t = e.getInputProps,
                  a = e.isDragActive;
                return (0, N.jsxs)(
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
                          P,
                        ),
                      },
                      M,
                    ),
                    {},
                    {
                      children: [
                        (0, N.jsx)('input', r()({}, t())),
                        a
                          ? (0, N.jsxs)('div', {
                              className:
                                'flex flex-col items-center justify-center gap-4 sm:px-5',
                              children: [
                                (0, N.jsx)('div', {
                                  className:
                                    'rounded-full border border-dashed p-3',
                                  children: (0, N.jsx)(m.Z, {
                                    className: 'size-7 text-muted-foreground',
                                    'aria-hidden': 'true',
                                  }),
                                }),
                                (0, N.jsx)('p', {
                                  className:
                                    'font-medium text-muted-foreground',
                                  children: 'Drop the files here',
                                }),
                              ],
                            })
                          : (0, N.jsxs)('div', {
                              className:
                                'flex flex-col items-center justify-center gap-4 sm:px-5',
                              children: [
                                (0, N.jsx)('div', {
                                  className:
                                    'rounded-full border border-dashed p-3',
                                  children: (0, N.jsx)(m.Z, {
                                    className: 'size-7 text-muted-foreground',
                                    'aria-hidden': 'true',
                                  }),
                                }),
                                (0, N.jsxs)('div', {
                                  className: 'flex flex-col gap-px',
                                  children: [
                                    (0, N.jsxs)('p', {
                                      className:
                                        'font-medium text-muted-foreground',
                                      children: [
                                        'Drag ',
                                        "'n'",
                                        ' drop files here, or click to select files',
                                      ],
                                    }),
                                    (0, N.jsxs)('p', {
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
                                              .concat((0, j.t)(v), ' each)')
                                          : ' a file with '.concat((0, j.t)(v)),
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
            null != I && I.length
              ? (0, N.jsx)(C, {
                  className: 'h-fit w-full px-3',
                  children: (0, N.jsx)('div', {
                    className: 'flex max-h-48 flex-col gap-4',
                    children:
                      null == I
                        ? void 0
                        : I.map(function (e, n) {
                            return (0, N.jsx)(
                              z,
                              {
                                file: e,
                                onRemove: function () {
                                  return (function (e) {
                                    if (I) {
                                      var n = I.filter(function (n, t) {
                                        return t !== e;
                                      });
                                      K(n), null == a || a(n);
                                    }
                                  })(n);
                                },
                                progress: null == o ? void 0 : o[e.name],
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
    18334: function (e, n, t) {
      var a = t(5089),
        r = (t(62435), t(86074));
      n.Z = function (e) {
        var n = e.children,
          t = e.link,
          i = e.preventDefault,
          s = void 0 !== i && i,
          o = e.color,
          l = void 0 === o ? 'rgb(15, 79, 170)' : o,
          c = e.documentId,
          u = e.documentName,
          d = e.prefix,
          f = void 0 === d ? 'file' : d,
          m = e.className,
          p = t,
          h = (0, a.RT)(u);
        return (
          t ||
            (p = '/document/'
              .concat(c, '?ext=')
              .concat(h, '&prefix=')
              .concat(f)),
          (0, r.jsx)('a', {
            target: '_blank',
            onClick:
              !s || (0, a.Ep)(h)
                ? void 0
                : function (e) {
                    return e.preventDefault();
                  },
            href: p,
            rel: 'noreferrer',
            style: { color: m ? '' : l, wordBreak: 'break-all' },
            className: m,
            children: n,
          })
        );
      };
    },
    72869: function (e, n, t) {
      t.d(n, {
        f: function () {
          return l;
        },
        h: function () {
          return o;
        },
      });
      var a = t(36316),
        r = t(75269),
        i = t(86074);
      function s(e) {
        var n = e.children,
          t = e.columnsLength;
        return (0, i.jsx)(r.SC, {
          children: (0, i.jsx)(r.pj, {
            colSpan: t,
            className: 'h-24 text-center',
            children: n,
          }),
        });
      }
      function o(e) {
        var n = e.columnsLength,
          t = e.children;
        return (0, i.jsx)(s, {
          columnsLength: n,
          children:
            t ||
            (0, i.jsx)(a.Z, {
              className: 'animate-spin size-16 inline-block text-gray-400',
            }),
        });
      }
      function l(e) {
        var n = e.columnsLength;
        return (0, i.jsx)(s, { columnsLength: n, children: 'No results.' });
      }
    },
    19252: function (e, n, t) {
      t.d(n, {
        C: function () {
          return f;
        },
      });
      var a = t(97857),
        r = t.n(a),
        i = t(13769),
        s = t.n(i),
        o = t(45139),
        l = (t(62435), t(27080)),
        c = t(86074),
        u = ['className', 'variant'],
        d = (0, o.j)(
          'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          {
            variants: {
              variant: {
                default:
                  'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
                secondary:
                  'border-transparent bg-background-card text-text-sub-title-invert hover:bg-secondary/80 rounded-md',
                destructive:
                  'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
                outline: 'text-foreground',
                tertiary:
                  'border-transparent bg-colors-background-core-strong text-colors-text-persist-light hover:bg-colors-background-core-strong/80',
              },
            },
            defaultVariants: { variant: 'default' },
          },
        );
      function f(e) {
        var n = e.className,
          t = e.variant,
          a = s()(e, u);
        return (0, c.jsx)(
          'div',
          r()({ className: (0, l.cn)(d({ variant: t }), n) }, a),
        );
      }
    },
    87030: function (e, n, t) {
      t.d(n, {
        Ol: function () {
          return v;
        },
        SZ: function () {
          return b;
        },
        Zb: function () {
          return g;
        },
        aY: function () {
          return j;
        },
        ll: function () {
          return x;
        },
      });
      var a = t(97857),
        r = t.n(a),
        i = t(13769),
        s = t.n(i),
        o = t(62435),
        l = t(27080),
        c = t(86074),
        u = ['className'],
        d = ['className'],
        f = ['className'],
        m = ['className'],
        p = ['className'],
        h = ['className'],
        g = o.forwardRef(function (e, n) {
          var t = e.className,
            a = s()(e, u);
          return (0, c.jsx)(
            'div',
            r()(
              {
                ref: n,
                className: (0, l.cn)(
                  'rounded-lg  bg-background-card  text-card-foreground shadow-sm',
                  t,
                ),
              },
              a,
            ),
          );
        });
      g.displayName = 'Card';
      var v = o.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, d);
        return (0, c.jsx)(
          'div',
          r()(
            {
              ref: n,
              className: (0, l.cn)('flex flex-col space-y-1.5 p-6', t),
            },
            a,
          ),
        );
      });
      v.displayName = 'CardHeader';
      var x = o.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, f);
        return (0, c.jsx)(
          'div',
          r()(
            {
              ref: n,
              className: (0, l.cn)(
                'text-2xl font-semibold leading-none tracking-tight',
                t,
              ),
            },
            a,
          ),
        );
      });
      x.displayName = 'CardTitle';
      var b = o.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, m);
        return (0, c.jsx)(
          'div',
          r()(
            {
              ref: n,
              className: (0, l.cn)('text-sm text-muted-foreground', t),
            },
            a,
          ),
        );
      });
      b.displayName = 'CardDescription';
      var j = o.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, p);
        return (0, c.jsx)(
          'div',
          r()({ ref: n, className: (0, l.cn)('p-6 pt-0', t) }, a),
        );
      });
      (j.displayName = 'CardContent'),
        (o.forwardRef(function (e, n) {
          var t = e.className,
            a = s()(e, h);
          return (0, c.jsx)(
            'div',
            r()(
              { ref: n, className: (0, l.cn)('flex items-center p-6 pt-0', t) },
              a,
            ),
          );
        }).displayName = 'CardFooter');
    },
    52118: function (e, n, t) {
      t.d(n, {
        di: function () {
          return k;
        },
        e8: function () {
          return j;
        },
        fu: function () {
          return w;
        },
        mY: function () {
          return x;
        },
        rb: function () {
          return N;
        },
        sZ: function () {
          return b;
        },
        zz: function () {
          return y;
        },
      });
      var a = t(97857),
        r = t.n(a),
        i = t(13769),
        s = t.n(i),
        o = t(13879),
        l = t(87764),
        c = t(62435),
        u = (t(28993), t(27080)),
        d = t(86074),
        f = ['className'],
        m = ['className'],
        p = ['className'],
        h = ['className'],
        g = ['className'],
        v = ['className'],
        x = c.forwardRef(function (e, n) {
          var t = e.className,
            a = s()(e, f);
          return (0, d.jsx)(
            o.mY,
            r()(
              {
                ref: n,
                className: (0, u.cn)(
                  'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
                  t,
                ),
              },
              a,
            ),
          );
        });
      x.displayName = o.mY.displayName;
      var b = c.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, m);
        return (0, d.jsxs)('div', {
          className: 'flex items-center border-b px-3',
          'cmdk-input-wrapper': '',
          children: [
            (0, d.jsx)(l.Z, { className: 'mr-2 h-4 w-4 shrink-0 opacity-50' }),
            (0, d.jsx)(
              o.mY.Input,
              r()(
                {
                  ref: n,
                  className: (0, u.cn)(
                    'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
                    t,
                  ),
                },
                a,
              ),
            ),
          ],
        });
      });
      b.displayName = o.mY.Input.displayName;
      var j = c.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, p);
        return (0, d.jsx)(
          o.mY.List,
          r()(
            {
              ref: n,
              className: (0, u.cn)(
                'max-h-[300px] overflow-y-auto overflow-x-hidden',
                t,
              ),
            },
            a,
          ),
        );
      });
      j.displayName = o.mY.List.displayName;
      var N = c.forwardRef(function (e, n) {
        return (0, d.jsx)(
          o.mY.Empty,
          r()({ ref: n, className: 'py-6 text-center text-sm' }, e),
        );
      });
      N.displayName = o.mY.Empty.displayName;
      var w = c.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, h);
        return (0, d.jsx)(
          o.mY.Group,
          r()(
            {
              ref: n,
              className: (0, u.cn)(
                'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
                t,
              ),
            },
            a,
          ),
        );
      });
      w.displayName = o.mY.Group.displayName;
      var y = c.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, g);
        return (0, d.jsx)(
          o.mY.Separator,
          r()({ ref: n, className: (0, u.cn)('-mx-1 h-px bg-border', t) }, a),
        );
      });
      y.displayName = o.mY.Separator.displayName;
      var k = c.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, v);
        return (0, d.jsx)(
          o.mY.Item,
          r()(
            {
              ref: n,
              className: (0, u.cn)(
                "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
                t,
              ),
            },
            a,
          ),
        );
      });
      k.displayName = o.mY.Item.displayName;
    },
    28993: function (e, n, t) {
      t.d(n, {
        $N: function () {
          return C;
        },
        Vq: function () {
          return x;
        },
        cN: function () {
          return k;
        },
        cZ: function () {
          return w;
        },
        fK: function () {
          return y;
        },
        hg: function () {
          return b;
        },
      });
      var a = t(97857),
        r = t.n(a),
        i = t(13769),
        s = t.n(i),
        o = t(28828),
        l = t(41352),
        c = t(62435),
        u = t(27080),
        d = t(86074),
        f = ['className'],
        m = ['className', 'children'],
        p = ['className'],
        h = ['className'],
        g = ['className'],
        v = ['className'],
        x = o.fC,
        b = o.xz,
        j = o.h_,
        N =
          (o.x8,
          c.forwardRef(function (e, n) {
            var t = e.className,
              a = s()(e, f);
            return (0, d.jsx)(
              o.aV,
              r()(
                {
                  ref: n,
                  className: (0, u.cn)(
                    'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    t,
                  ),
                },
                a,
              ),
            );
          }));
      N.displayName = o.aV.displayName;
      var w = c.forwardRef(function (e, n) {
        var t = e.className,
          a = e.children,
          i = s()(e, m);
        return (0, d.jsxs)(j, {
          children: [
            (0, d.jsx)(N, {}),
            (0, d.jsxs)(
              o.VY,
              r()(
                r()(
                  {
                    ref: n,
                    className: (0, u.cn)(
                      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-colors-background-neutral-standard p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                      t,
                    ),
                  },
                  i,
                ),
                {},
                {
                  children: [
                    a,
                    (0, d.jsxs)(o.x8, {
                      className:
                        'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                      children: [
                        (0, d.jsx)(l.Z, { className: 'h-4 w-4' }),
                        (0, d.jsx)('span', {
                          className: 'sr-only',
                          children: 'Close',
                        }),
                      ],
                    }),
                  ],
                },
              ),
            ),
          ],
        });
      });
      w.displayName = o.VY.displayName;
      var y = function (e) {
        var n = e.className,
          t = s()(e, p);
        return (0, d.jsx)(
          'div',
          r()(
            {
              className: (0, u.cn)(
                'flex flex-col space-y-1.5 text-center sm:text-left',
                n,
              ),
            },
            t,
          ),
        );
      };
      y.displayName = 'DialogHeader';
      var k = function (e) {
        var n = e.className,
          t = s()(e, h);
        return (0, d.jsx)(
          'div',
          r()(
            {
              className: (0, u.cn)(
                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                n,
              ),
            },
            t,
          ),
        );
      };
      k.displayName = 'DialogFooter';
      var C = c.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, g);
        return (0, d.jsx)(
          o.Dx,
          r()(
            {
              ref: n,
              className: (0, u.cn)(
                'text-lg font-semibold leading-none tracking-tight',
                t,
              ),
            },
            a,
          ),
        );
      });
      (C.displayName = o.Dx.displayName),
        (c.forwardRef(function (e, n) {
          var t = e.className,
            a = s()(e, v);
          return (0, d.jsx)(
            o.dk,
            r()(
              {
                ref: n,
                className: (0, u.cn)('text-sm text-muted-foreground', t),
              },
              a,
            ),
          );
        }).displayName = o.dk.displayName);
    },
    50561: function (e, n, t) {
      t.d(n, {
        Yi: function () {
          return m;
        },
        bZ: function () {
          return p;
        },
        zs: function () {
          return f;
        },
      });
      var a = t(97857),
        r = t.n(a),
        i = t(13769),
        s = t.n(i),
        o = t(38573),
        l = t(62435),
        c = t(27080),
        u = t(86074),
        d = ['className', 'align', 'sideOffset'],
        f = o.fC,
        m = o.xz,
        p = l.forwardRef(function (e, n) {
          var t = e.className,
            a = e.align,
            i = void 0 === a ? 'center' : a,
            l = e.sideOffset,
            f = void 0 === l ? 4 : l,
            m = s()(e, d);
          return (0, u.jsx)(
            o.VY,
            r()(
              {
                ref: n,
                align: i,
                sideOffset: f,
                className: (0, c.cn)(
                  'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-hover-card-content-transform-origin]',
                  t,
                ),
              },
              m,
            ),
          );
        });
      p.displayName = o.VY.displayName;
    },
    11524: function (e, n, t) {
      t.d(n, {
        f: function () {
          return h;
        },
      });
      var a = t(97857),
        r = t.n(a),
        i = t(13769),
        s = t.n(i),
        o = t(27080),
        l = t(88426),
        c = t(45139),
        u = t(36316),
        d = t(62435),
        f = t(86074),
        m = [
          'className',
          'loading',
          'children',
          'disabled',
          'variant',
          'size',
          'asChild',
        ],
        p = (0, c.j)(
          'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            variants: {
              variant: {
                default:
                  'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                  'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                  'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary:
                  'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
                tertiary:
                  'bg-colors-background-sentiment-solid-primary text-colors-text-persist-light hover:bg-colors-background-sentiment-solid-primary/80',
              },
              size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
              },
            },
            defaultVariants: { variant: 'default', size: 'default' },
          },
        ),
        h = d.forwardRef(function (e, n) {
          var t = e.className,
            a = e.loading,
            i = void 0 !== a && a,
            c = e.children,
            d = e.disabled,
            h = e.variant,
            g = e.size,
            v = e.asChild,
            x = void 0 !== v && v,
            b = s()(e, m),
            j = x ? l.g7 : 'button';
          return (0, f.jsxs)(
            j,
            r()(
              r()(
                {
                  className: (0, o.cn)(
                    p({ variant: h, size: g, className: t }),
                  ),
                  ref: n,
                  disabled: i || d,
                },
                b,
              ),
              {},
              {
                children: [
                  i &&
                    (0, f.jsx)(u.Z, { className: 'mr-2 h-5 w-5 animate-spin' }),
                  (0, f.jsx)(l.A4, { children: c }),
                ],
              },
            ),
          );
        });
      h.displayName = 'LoadingButton';
    },
    73352: function (e, n, t) {
      t.d(n, {
        N: function () {
          return S;
        },
      });
      var a = t(97857),
        r = t.n(a),
        i = t(19632),
        s = t.n(i),
        o = t(5574),
        l = t.n(o),
        c = t(13769),
        u = t.n(c),
        d = t(45139),
        f = t(61108),
        m = t(41352),
        p = t(8971),
        h = t(13742),
        g = t(6571),
        v = t(62435),
        x = t(19252),
        b = t(57636),
        j = t(52118),
        N = t(23499),
        w = t(81136),
        y = t(27080),
        k = t(86074),
        C = [
          'options',
          'onValueChange',
          'variant',
          'defaultValue',
          'placeholder',
          'animation',
          'maxCount',
          'modalPopover',
          'asChild',
          'className',
        ],
        F = (0, d.j)(
          'm-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300',
          {
            variants: {
              variant: {
                default:
                  'border-foreground/10 text-foreground bg-card hover:bg-card/80',
                secondary:
                  'border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80',
                destructive:
                  'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
                inverted: 'inverted',
              },
            },
            defaultVariants: { variant: 'default' },
          },
        ),
        S = v.forwardRef(function (e, n) {
          var t = e.options,
            a = e.onValueChange,
            i = e.variant,
            o = e.defaultValue,
            c = void 0 === o ? [] : o,
            d = e.placeholder,
            S = void 0 === d ? 'Select options' : d,
            R = e.animation,
            Z = void 0 === R ? 0 : R,
            P = e.maxCount,
            z = void 0 === P ? 3 : P,
            M = e.modalPopover,
            D = void 0 !== M && M,
            L = (e.asChild, e.className),
            I = u()(e, C),
            K = v.useState(c),
            T = l()(K, 2),
            A = T[0],
            V = T[1],
            _ = v.useState(!1),
            O = l()(_, 2),
            B = O[0],
            G = O[1],
            U = v.useState(!1),
            $ = l()(U, 2),
            Y = $[0],
            q = $[1],
            E = function (e) {
              var n = A.includes(e)
                ? A.filter(function (n) {
                    return n !== e;
                  })
                : [].concat(s()(A), [e]);
              V(n), a(n);
            },
            H = function () {
              V([]), a([]);
            };
          return (0, k.jsxs)(N.J2, {
            open: B,
            onOpenChange: G,
            modal: D,
            children: [
              (0, k.jsx)(N.xo, {
                asChild: !0,
                children: (0, k.jsx)(
                  b.zx,
                  r()(
                    r()({ ref: n }, I),
                    {},
                    {
                      onClick: function () {
                        G(function (e) {
                          return !e;
                        });
                      },
                      className: (0, y.cn)(
                        'flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between bg-inherit hover:bg-inherit [&_svg]:pointer-events-auto',
                        L,
                      ),
                      children:
                        A.length > 0
                          ? (0, k.jsxs)('div', {
                              className:
                                'flex justify-between items-center w-full',
                              children: [
                                (0, k.jsxs)('div', {
                                  className: 'flex flex-wrap items-center',
                                  children: [
                                    A.slice(0, z).map(function (e) {
                                      var n = t.find(function (n) {
                                          return n.value === e;
                                        }),
                                        a = null == n ? void 0 : n.icon;
                                      return (0, k.jsxs)(
                                        x.C,
                                        {
                                          className: (0, y.cn)(
                                            Y ? 'animate-bounce' : '',
                                            F({ variant: i }),
                                          ),
                                          style: {
                                            animationDuration: ''.concat(
                                              Z,
                                              's',
                                            ),
                                          },
                                          children: [
                                            a &&
                                              (0, k.jsx)(a, {
                                                className: 'h-4 w-4 mr-2',
                                              }),
                                            null == n ? void 0 : n.label,
                                            (0, k.jsx)(f.Z, {
                                              className:
                                                'ml-2 h-4 w-4 cursor-pointer',
                                              onClick: function (n) {
                                                n.stopPropagation(), E(e);
                                              },
                                            }),
                                          ],
                                        },
                                        e,
                                      );
                                    }),
                                    A.length > z &&
                                      (0, k.jsxs)(x.C, {
                                        className: (0, y.cn)(
                                          'bg-transparent text-foreground border-foreground/1 hover:bg-transparent',
                                          Y ? 'animate-bounce' : '',
                                          F({ variant: i }),
                                        ),
                                        style: {
                                          animationDuration: ''.concat(Z, 's'),
                                        },
                                        children: [
                                          '+ '.concat(A.length - z, ' more'),
                                          (0, k.jsx)(f.Z, {
                                            className:
                                              'ml-2 h-4 w-4 cursor-pointer',
                                            onClick: function (e) {
                                              var n;
                                              e.stopPropagation(),
                                                (n = A.slice(0, z)),
                                                V(n),
                                                a(n);
                                            },
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, k.jsxs)('div', {
                                  className:
                                    'flex items-center justify-between',
                                  children: [
                                    (0, k.jsx)(m.Z, {
                                      className:
                                        'h-4 mx-2 cursor-pointer text-muted-foreground',
                                      onClick: function (e) {
                                        e.stopPropagation(), H();
                                      },
                                    }),
                                    (0, k.jsx)(w.Z, {
                                      orientation: 'vertical',
                                      className: 'flex min-h-6 h-full',
                                    }),
                                    (0, k.jsx)(p.Z, {
                                      className:
                                        'h-4 mx-2 cursor-pointer text-muted-foreground',
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, k.jsxs)('div', {
                              className:
                                'flex items-center justify-between w-full mx-auto',
                              children: [
                                (0, k.jsx)('span', {
                                  className:
                                    'text-sm text-muted-foreground mx-3',
                                  children: S,
                                }),
                                (0, k.jsx)(p.Z, {
                                  className:
                                    'h-4 cursor-pointer text-muted-foreground mx-2',
                                }),
                              ],
                            }),
                    },
                  ),
                ),
              }),
              (0, k.jsx)(N.yk, {
                className: 'w-auto p-0',
                align: 'start',
                onEscapeKeyDown: function () {
                  return G(!1);
                },
                children: (0, k.jsxs)(j.mY, {
                  children: [
                    (0, k.jsx)(j.sZ, {
                      placeholder: 'Search...',
                      onKeyDown: function (e) {
                        if ('Enter' === e.key) G(!0);
                        else if (
                          'Backspace' === e.key &&
                          !e.currentTarget.value
                        ) {
                          var n = s()(A);
                          n.pop(), V(n), a(n);
                        }
                      },
                    }),
                    (0, k.jsxs)(j.e8, {
                      children: [
                        (0, k.jsx)(j.rb, { children: 'No results found.' }),
                        (0, k.jsxs)(j.fu, {
                          children: [
                            (0, k.jsxs)(
                              j.di,
                              {
                                onSelect: function () {
                                  if (A.length === t.length) H();
                                  else {
                                    var e = t.map(function (e) {
                                      return e.value;
                                    });
                                    V(e), a(e);
                                  }
                                },
                                className: 'cursor-pointer',
                                children: [
                                  (0, k.jsx)('div', {
                                    className: (0, y.cn)(
                                      'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                      A.length === t.length
                                        ? 'bg-primary text-primary-foreground'
                                        : 'opacity-50 [&_svg]:invisible',
                                    ),
                                    children: (0, k.jsx)(h.Z, {
                                      className: 'h-4 w-4',
                                    }),
                                  }),
                                  (0, k.jsx)('span', {
                                    children: '(Select All)',
                                  }),
                                ],
                              },
                              'all',
                            ),
                            t.map(function (e) {
                              var n = A.includes(e.value);
                              return (0, k.jsxs)(
                                j.di,
                                {
                                  onSelect: function () {
                                    return E(e.value);
                                  },
                                  className: 'cursor-pointer',
                                  children: [
                                    (0, k.jsx)('div', {
                                      className: (0, y.cn)(
                                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                        n
                                          ? 'bg-primary text-primary-foreground'
                                          : 'opacity-50 [&_svg]:invisible',
                                      ),
                                      children: (0, k.jsx)(h.Z, {
                                        className: 'h-4 w-4',
                                      }),
                                    }),
                                    e.icon &&
                                      (0, k.jsx)(e.icon, {
                                        className:
                                          'mr-2 h-4 w-4 text-muted-foreground',
                                      }),
                                    (0, k.jsx)('span', { children: e.label }),
                                  ],
                                },
                                e.value,
                              );
                            }),
                          ],
                        }),
                        (0, k.jsx)(j.zz, {}),
                        (0, k.jsx)(j.fu, {
                          children: (0, k.jsxs)('div', {
                            className: 'flex items-center justify-between',
                            children: [
                              A.length > 0 &&
                                (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    (0, k.jsx)(j.di, {
                                      onSelect: H,
                                      className:
                                        'flex-1 justify-center cursor-pointer',
                                      children: 'Clear',
                                    }),
                                    (0, k.jsx)(w.Z, {
                                      orientation: 'vertical',
                                      className: 'flex min-h-6 h-full',
                                    }),
                                  ],
                                }),
                              (0, k.jsx)(j.di, {
                                onSelect: function () {
                                  return G(!1);
                                },
                                className:
                                  'flex-1 justify-center cursor-pointer max-w-full',
                                children: 'Close',
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              Z > 0 &&
                A.length > 0 &&
                (0, k.jsx)(g.Z, {
                  className: (0, y.cn)(
                    'cursor-pointer my-2 text-foreground bg-background w-3 h-3',
                    Y ? '' : 'text-muted-foreground',
                  ),
                  onClick: function () {
                    return q(!Y);
                  },
                }),
            ],
          });
        });
      S.displayName = 'MultiSelect';
    },
    77631: function (e, n, t) {
      t.d(n, {
        E: function () {
          return f;
        },
      });
      var a = t(97857),
        r = t.n(a),
        i = t(13769),
        s = t.n(i),
        o = t(44920),
        l = t(62435),
        c = t(27080),
        u = t(86074),
        d = ['className', 'value'],
        f = l.forwardRef(function (e, n) {
          var t = e.className,
            a = e.value,
            i = s()(e, d);
          return (0, u.jsx)(
            o.fC,
            r()(
              r()(
                {
                  ref: n,
                  className: (0, c.cn)(
                    'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
                    t,
                  ),
                },
                i,
              ),
              {},
              {
                children: (0, u.jsx)(o.z$, {
                  className: 'h-full w-full flex-1 bg-primary transition-all',
                  style: {
                    transform: 'translateX(-'.concat(100 - (a || 0), '%)'),
                  },
                }),
              },
            ),
          );
        });
      f.displayName = o.fC.displayName;
    },
    75269: function (e, n, t) {
      t.d(n, {
        RM: function () {
          return j;
        },
        SC: function () {
          return N;
        },
        iA: function () {
          return x;
        },
        pj: function () {
          return y;
        },
        ss: function () {
          return w;
        },
        xD: function () {
          return b;
        },
      });
      var a = t(97857),
        r = t.n(a),
        i = t(13769),
        s = t.n(i),
        o = t(62435),
        l = t(27080),
        c = t(86074),
        u = ['className', 'rootClassName'],
        d = ['className'],
        f = ['className'],
        m = ['className'],
        p = ['className'],
        h = ['className'],
        g = ['className'],
        v = ['className'],
        x = o.forwardRef(function (e, n) {
          var t = e.className,
            a = e.rootClassName,
            i = s()(e, u);
          return (0, c.jsx)('div', {
            className: (0, l.cn)(
              'relative w-full overflow-auto rounded-2xl bg-background-card',
              a,
            ),
            children: (0, c.jsx)(
              'table',
              r()(
                {
                  ref: n,
                  className: (0, l.cn)('w-full caption-bottom text-sm ', t),
                },
                i,
              ),
            ),
          });
        });
      x.displayName = 'Table';
      var b = o.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, d);
        return (0, c.jsx)(
          'thead',
          r()(
            { ref: n, className: (0, l.cn)('[&_tr]:border-b top-0 sticky', t) },
            a,
          ),
        );
      });
      b.displayName = 'TableHeader';
      var j = o.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, f);
        return (0, c.jsx)(
          'tbody',
          r()(
            { ref: n, className: (0, l.cn)('[&_tr:last-child]:border-0', t) },
            a,
          ),
        );
      });
      (j.displayName = 'TableBody'),
        (o.forwardRef(function (e, n) {
          var t = e.className,
            a = s()(e, m);
          return (0, c.jsx)(
            'tfoot',
            r()(
              {
                ref: n,
                className: (0, l.cn)(
                  'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
                  t,
                ),
              },
              a,
            ),
          );
        }).displayName = 'TableFooter');
      var N = o.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, p);
        return (0, c.jsx)(
          'tr',
          r()(
            {
              ref: n,
              className: (0, l.cn)(
                'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
                t,
              ),
            },
            a,
          ),
        );
      });
      N.displayName = 'TableRow';
      var w = o.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, h);
        return (0, c.jsx)(
          'th',
          r()(
            {
              ref: n,
              className: (0, l.cn)(
                'h-12 px-4 text-left align-middle font-normal text-text-sub-title [&:has([role=checkbox])]:pr-0',
                t,
              ),
            },
            a,
          ),
        );
      });
      w.displayName = 'TableHead';
      var y = o.forwardRef(function (e, n) {
        var t = e.className,
          a = s()(e, g);
        return (0, c.jsx)(
          'td',
          r()(
            {
              ref: n,
              className: (0, l.cn)(
                'p-4 align-middle [&:has([role=checkbox])]:pr-0 text-text-title font-normal',
                t,
              ),
            },
            a,
          ),
        );
      });
      (y.displayName = 'TableCell'),
        (o.forwardRef(function (e, n) {
          var t = e.className,
            a = s()(e, v);
          return (0, c.jsx)(
            'caption',
            r()(
              {
                ref: n,
                className: (0, l.cn)('mt-4 text-sm text-muted-foreground', t),
              },
              a,
            ),
          );
        }).displayName = 'TableCaption');
    },
    89645: function (e, n, t) {
      t.d(n, {
        BU: function () {
          return C;
        },
        O6: function () {
          return F;
        },
        VK: function () {
          return R;
        },
        YA: function () {
          return M;
        },
        d: function () {
          return y;
        },
        kR: function () {
          return P;
        },
        n_: function () {
          return z;
        },
        t: function () {
          return k;
        },
        tI: function () {
          return Z;
        },
        vF: function () {
          return S;
        },
      });
      var a = t(97857),
        r = t.n(a),
        i = t(15009),
        s = t.n(i),
        o = t(99289),
        l = t.n(o),
        c = t(5574),
        u = t.n(c),
        d = t(62386),
        f = t(51331),
        m = t(4527),
        p = t(78551),
        h = t(30202),
        g = t(45360),
        v = t(62435),
        x = t(67421),
        b = t(42028),
        j = t(2938),
        N = t(96100),
        w = function () {
          var e = (0, b.lr)(),
            n = u()(e, 1)[0].get('folderId');
          return null != n ? n : '';
        },
        y = function () {
          var e,
            n = (0, m.D)({
              mutationKey: ['fetchPureFileList'],
              gcTime: 0,
              mutationFn:
                ((e = l()(
                  s()().mark(function e(n) {
                    var t, a;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), d.Z.listFile({ parent_id: n });
                          case 2:
                            return (
                              (t = e.sent), (a = t.data), e.abrupt('return', a)
                            );
                          case 5:
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
            t = n.mutateAsync;
          return { loading: n.isPending, fetchList: t };
        },
        k = function () {
          var e,
            n,
            t = (0, j.Qe)(),
            a = t.searchString,
            i = t.handleInputChange,
            o = (0, j.ye)(),
            c = o.pagination,
            u = o.setPagination,
            f = w(),
            m = (0, p.a)({
              queryKey: ['fetchFileList', r()({ id: f, searchString: a }, c)],
              initialData: {},
              gcTime: 0,
              queryFn:
                ((n = l()(
                  s()().mark(function e() {
                    var n, t;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              d.Z.listFile({
                                parent_id: f,
                                keywords: a,
                                page_size: c.pageSize,
                                page: c.current,
                              })
                            );
                          case 2:
                            return (
                              (n = e.sent), (t = n.data), e.abrupt('return', t)
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            }),
            h = m.data,
            g = m.isFetching,
            x = (0, v.useCallback)(
              function (e) {
                u({ page: 1 }), i(e);
              },
              [i, u],
            );
          return r()(
            r()({}, h),
            {},
            {
              searchString: a,
              handleInputChange: x,
              pagination: r()(
                r()({}, c),
                {},
                {
                  total:
                    null == h || null === (e = h.data) || void 0 === e
                      ? void 0
                      : e.total,
                },
              ),
              setPagination: u,
              loading: g,
            },
          );
        },
        C = function () {
          var e,
            n = (0, N.fz)().setPaginationParams,
            t = (0, h.NL)(),
            a = (0, m.D)({
              mutationKey: ['deleteFile'],
              mutationFn:
                ((e = l()(
                  s()().mark(function e(a) {
                    var r, i;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), d.Z.removeFile(a);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (i = r.data).code &&
                                (n(1),
                                t.invalidateQueries({
                                  queryKey: ['fetchFileList'],
                                })),
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
            });
          return {
            data: a.data,
            loading: a.isPending,
            deleteFile: a.mutateAsync,
          };
        },
        F = function () {
          var e,
            n = (0, m.D)({
              mutationKey: ['downloadFile'],
              mutationFn:
                ((e = l()(
                  s()().mark(function e(n) {
                    var t, a;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), d.Z.getFile({}, n.id);
                          case 2:
                            (t = e.sent),
                              (a = new Blob([t.data], { type: t.data.type })),
                              (0, f.uA)(a, n.filename);
                          case 5:
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
            data: n.data,
            loading: n.isPending,
            downloadFile: n.mutateAsync,
          };
        },
        S = function () {
          var e,
            n = (0, h.NL)(),
            t = (0, x.$G)().t,
            a = (0, m.D)({
              mutationKey: ['renameFile'],
              mutationFn:
                ((e = l()(
                  s()().mark(function e(a) {
                    var r, i;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), d.Z.renameFile(a);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (i = r.data).code &&
                                (g.ZP.success(t('message.renamed')),
                                n.invalidateQueries({
                                  queryKey: ['fetchFileList'],
                                })),
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
            });
          return {
            data: a.data,
            loading: a.isPending,
            renameFile: a.mutateAsync,
          };
        },
        R = function () {
          var e,
            n = w(),
            t = (0, p.a)({
              queryKey: ['fetchParentFolderList', n],
              initialData: [],
              enabled: !!n,
              queryFn:
                ((e = l()(
                  s()().mark(function e() {
                    var t, a, r, i;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              d.Z.getAllParentFolder({ fileId: n })
                            );
                          case 2:
                            return (
                              (r = e.sent),
                              (i = r.data),
                              e.abrupt(
                                'return',
                                null !==
                                  (t =
                                    null == i ||
                                    null === (a = i.data) ||
                                    void 0 === a ||
                                    null === (a = a.parent_folders) ||
                                    void 0 === a
                                      ? void 0
                                      : a.toReversed()) && void 0 !== t
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
          return t.data;
        },
        Z = function () {
          var e,
            n = (0, N.fz)().setPaginationParams,
            t = (0, h.NL)(),
            a = (0, x.$G)().t,
            i = (0, m.D)({
              mutationKey: ['createFolder'],
              mutationFn:
                ((e = l()(
                  s()().mark(function e(i) {
                    var o, l;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              d.Z.createFolder(
                                r()(r()({}, i), {}, { type: 'folder' }),
                              )
                            );
                          case 2:
                            return (
                              (o = e.sent),
                              0 === (l = o.data).code &&
                                (g.ZP.success(a('message.created')),
                                n(1),
                                t.invalidateQueries({
                                  queryKey: ['fetchFileList'],
                                })),
                              e.abrupt('return', l.code)
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
            data: i.data,
            loading: i.isPending,
            createFolder: i.mutateAsync,
          };
        },
        P = function () {
          var e,
            n = (0, N.fz)().setPaginationParams,
            t = (0, x.$G)().t,
            a = (0, h.NL)(),
            r = (0, m.D)({
              mutationKey: ['uploadFile'],
              mutationFn:
                ((e = l()(
                  s()().mark(function e(r) {
                    var i, o, l, c, u;
                    return s()().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.fileList),
                                (o = r.fileList.map(function (e) {
                                  return e.webkitRelativePath;
                                })),
                                (l = new FormData()).append(
                                  'parent_id',
                                  r.parentId,
                                ),
                                i.forEach(function (e, n) {
                                  l.append('file', e), l.append('path', o[n]);
                                }),
                                (e.prev = 5),
                                (e.next = 8),
                                d.Z.uploadFile(l)
                              );
                            case 8:
                              return (
                                0 ===
                                  (null == (u = e.sent)
                                    ? void 0
                                    : u.data.code) &&
                                  (g.ZP.success(t('message.uploaded')),
                                  n(1),
                                  a.invalidateQueries({
                                    queryKey: ['fetchFileList'],
                                  })),
                                e.abrupt(
                                  'return',
                                  null == u ||
                                    null === (c = u.data) ||
                                    void 0 === c
                                    ? void 0
                                    : c.code,
                                )
                              );
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(5)),
                                console.log(
                                  '🚀 ~ useUploadFile ~ error:',
                                  e.t0,
                                );
                            case 16:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[5, 13]],
                    );
                  }),
                )),
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: r.data,
            loading: r.isPending,
            uploadFile: r.mutateAsync,
          };
        },
        z = function () {
          var e,
            n = (0, h.NL)(),
            t = (0, x.$G)().t,
            a = (0, m.D)({
              mutationKey: ['connectFileToKnowledge'],
              mutationFn:
                ((e = l()(
                  s()().mark(function e(a) {
                    var r, i;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), d.Z.connectFileToKnowledge(a);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (i = r.data).code &&
                                (g.ZP.success(t('message.operated')),
                                n.invalidateQueries({
                                  queryKey: ['fetchFileList'],
                                })),
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
            });
          return {
            data: a.data,
            loading: a.isPending,
            connectFileToKnowledge: a.mutateAsync,
          };
        },
        M = function () {
          var e,
            n = (0, h.NL)(),
            t = (0, x.$G)().t,
            a = (0, m.D)({
              mutationKey: ['moveFile'],
              mutationFn:
                ((e = l()(
                  s()().mark(function e(a) {
                    var r, i;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), d.Z.moveFile(a);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (i = r.data).code &&
                                (g.ZP.success(t('message.operated')),
                                n.invalidateQueries({
                                  queryKey: ['fetchFileList'],
                                })),
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
            });
          return {
            data: a.data,
            loading: a.isPending,
            moveFile: a.mutateAsync,
          };
        };
    },
    704: function (e, n, t) {
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
        i = t(5574),
        s = t.n(i),
        o = t(23454),
        l = t(62435),
        c = t(42028),
        u = (function (e) {
          return (e.KnowledgeId = 'knowledgeId'), e;
        })({}),
        d = function () {
          var e = (0, c.s0)(),
            n = (0, c.lr)(),
            t = s()(n, 1)[0],
            a = (0, c.UO)().id,
            i = (0, l.useCallback)(
              function () {
                e(o.Z.Datasets);
              },
              [e],
            ),
            d = (0, l.useCallback)(
              function (n) {
                return function () {
                  e(''.concat(o.Z.Dataset, '/').concat(n));
                };
              },
              [e],
            ),
            f = (0, l.useCallback)(
              function () {
                e(o.Z.Home);
              },
              [e],
            ),
            m = (0, l.useCallback)(
              function () {
                e(o.Z.ProfileSetting);
              },
              [e],
            ),
            p = (0, l.useCallback)(
              function () {
                e(o.Z.Chats);
              },
              [e],
            ),
            h = (0, l.useCallback)(
              function () {
                e(o.Z.Chat);
              },
              [e],
            ),
            g = (0, l.useCallback)(
              function () {
                e(o.Z.Agents);
              },
              [e],
            ),
            v = (0, l.useCallback)(
              function (n) {
                return function () {
                  e(''.concat(o.Z.Agent, '/').concat(n));
                };
              },
              [e],
            ),
            x = (0, l.useCallback)(
              function () {
                e(o.Z.AgentTemplates);
              },
              [e],
            ),
            b = (0, l.useCallback)(
              function () {
                e(o.Z.Searches);
              },
              [e],
            ),
            j = (0, l.useCallback)(
              function () {
                e(o.Z.Search);
              },
              [e],
            ),
            N = (0, l.useCallback)(
              function (n, t) {
                return function () {
                  e(
                    ''
                      .concat(o.Z.ParsedResult, '/chunks?id=')
                      .concat(t, '&doc_id=')
                      .concat(n),
                  );
                };
              },
              [e],
            ),
            w = (0, l.useCallback)(
              function (e) {
                var n = r()({}, u.KnowledgeId, t.get(u.KnowledgeId));
                return e ? n[e] : n;
              },
              [t],
            ),
            y = (0, l.useCallback)(
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
            k = (0, l.useCallback)(
              function (n) {
                e(''.concat(o.Z.Files, '?folderId=').concat(n));
              },
              [e],
            );
          return {
            navigateToDatasetList: i,
            navigateToDataset: d,
            navigateToHome: f,
            navigateToProfile: m,
            navigateToChatList: p,
            navigateToChat: h,
            navigateToChunkParsedResult: N,
            getQueryString: w,
            navigateToChunk: y,
            navigateToAgentList: g,
            navigateToAgent: v,
            navigateToAgentTemplates: x,
            navigateToSearchList: b,
            navigateToSearch: j,
            navigateToFiles: k,
          };
        };
    },
    3563: function (e, n, t) {
      t.d(n, {
        G: function () {
          return o;
        },
        S: function () {
          return l;
        },
      });
      var a = t(5574),
        r = t.n(a),
        i = t(96486),
        s = t(62435);
      function o() {
        var e = (0, s.useState)({}),
          n = r()(e, 2),
          t = n[0],
          a = n[1],
          o = (0, s.useCallback)(function () {
            a({});
          }, []),
          l = (0, s.useMemo)(
            function () {
              return Object.keys(t).length;
            },
            [t],
          );
        return {
          rowSelection: t,
          setRowSelection: a,
          rowSelectionIsEmpty: (0, i.isEmpty)(t),
          clearRowSelection: o,
          selectedCount: l,
        };
      }
      function l(e, n) {
        return {
          selectedIds: (0, s.useMemo)(
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
    12297: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return gn;
          },
        });
      var a = t(41332),
        r = t(5848),
        i = t(87926),
        s = t(57636),
        o = t(25910),
        l = t(3563),
        c = t(97857),
        u = t.n(c),
        d = t(15009),
        f = t.n(d),
        m = t(99289),
        p = t.n(m),
        h = t(5574),
        g = t.n(h),
        v = t(62386),
        x = t(30202),
        b = t(4527),
        j = t(78551),
        N = t(58580),
        w = t(45360),
        y = t(62435),
        k = t(67421),
        C = t(42028),
        F = t(2938),
        S = t(96100),
        R = 'uploadFile',
        Z = 'fetchFileList',
        P = 'moveFile',
        z = 'createFolder',
        M = 'fetchParentFolderList',
        D = 'deleteFile',
        L = function () {
          var e = (0, C.lr)(),
            n = g()(e, 1)[0].get('folderId');
          return null != n ? n : '';
        },
        I = function () {
          var e,
            n = (0, F.Qe)(),
            t = n.searchString,
            a = n.handleInputChange,
            r = (0, F.ye)(),
            i = r.pagination,
            s = r.setPagination,
            o = L(),
            l = (0, N.Z)(t, { wait: 500 }),
            c = (0, j.a)({
              queryKey: [Z, u()({ id: o, debouncedSearchString: l }, i)],
              initialData: { files: [], parent_folder: {}, total: 0 },
              gcTime: 0,
              queryFn:
                ((e = p()(
                  f()().mark(function e() {
                    var n, t;
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              v.Z.listFile({
                                parent_id: o,
                                keywords: l,
                                page_size: i.pageSize,
                                page: i.current,
                              })
                            );
                          case 2:
                            return (
                              (n = e.sent),
                              (t = n.data),
                              e.abrupt('return', null == t ? void 0 : t.data)
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
            }),
            d = c.data,
            m = c.isFetching,
            h = (0, y.useCallback)(
              function (e) {
                s({ page: 1 }), a(e);
              },
              [a, s],
            );
          return u()(
            u()({}, d),
            {},
            {
              searchString: t,
              handleInputChange: h,
              pagination: u()(
                u()({}, i),
                {},
                { total: null == d ? void 0 : d.total },
              ),
              setPagination: s,
              loading: m,
            },
          );
        },
        K = t(28142),
        T = t(28993),
        A = t(11524),
        V = t(8074),
        _ = t(56312),
        O = t(87536),
        B = t(1604),
        G = t(80499),
        U = t(27591),
        $ = t(86074);
      function Y(e) {
        var n = e.hideModal,
          t = e.onOk,
          a = (0, k.$G)().t,
          r = B.z.object({
            name: B.z
              .string()
              .min(1, { message: a('common.namePlaceholder') })
              .trim(),
          }),
          i = (0, O.cI)({ resolver: (0, _.F)(r), defaultValues: { name: '' } });
        function s() {
          return (s = p()(
            f()().mark(function e(a) {
              return f()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), null == t ? void 0 : t(a.name);
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
        return (0, $.jsx)(
          G.l0,
          u()(
            u()({}, i),
            {},
            {
              children: (0, $.jsx)('form', {
                onSubmit: i.handleSubmit(function (e) {
                  return s.apply(this, arguments);
                }),
                className: 'space-y-6',
                id: V.j$,
                children: (0, $.jsx)(G.Wi, {
                  control: i.control,
                  name: 'name',
                  render: function (e) {
                    var n = e.field;
                    return (0, $.jsxs)(G.xJ, {
                      children: [
                        (0, $.jsx)(G.lX, { children: a('common.name') }),
                        (0, $.jsx)(G.NI, {
                          children: (0, $.jsx)(
                            U.II,
                            u()(
                              u()(
                                { placeholder: a('common.namePlaceholder') },
                                n,
                              ),
                              {},
                              { autoComplete: 'off' },
                            ),
                          ),
                        }),
                        (0, $.jsx)(G.zG, {}),
                      ],
                    });
                  },
                }),
              }),
            },
          ),
        );
      }
      function q(e) {
        var n = e.hideModal,
          t = e.onOk,
          a = e.loading,
          r = (0, k.$G)().t;
        return (0, $.jsx)(T.Vq, {
          open: !0,
          onOpenChange: n,
          children: (0, $.jsxs)(T.cZ, {
            className: 'sm:max-w-[425px]',
            children: [
              (0, $.jsx)(T.fK, {
                children: (0, $.jsx)(T.$N, {
                  children: r('fileManager.newFolder'),
                }),
              }),
              (0, $.jsx)(Y, { hideModal: n, onOk: t }),
              (0, $.jsx)(T.cN, {
                children: (0, $.jsx)(A.f, {
                  type: 'submit',
                  form: V.j$,
                  loading: a,
                  children: r('common.save'),
                }),
              }),
            ],
          }),
        });
      }
      var E = t(13769),
        H = t.n(E),
        Q = t(49677),
        J = t.n(Q),
        X = t(88426),
        W = t(64998),
        ee = t(9404),
        ne = t(27080),
        te = ['className'],
        ae = ['className'],
        re = ['asChild', 'className'],
        ie = ['className'],
        se = ['children', 'className'],
        oe = y.forwardRef(function (e, n) {
          var t = Object.assign({}, (J()(e), e));
          return (0, $.jsx)(
            'nav',
            u()({ ref: n, 'aria-label': 'breadcrumb' }, t),
          );
        });
      oe.displayName = 'Breadcrumb';
      var le = y.forwardRef(function (e, n) {
        var t = e.className,
          a = H()(e, te);
        return (0, $.jsx)(
          'ol',
          u()(
            {
              ref: n,
              className: (0, ne.cn)(
                'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
                t,
              ),
            },
            a,
          ),
        );
      });
      le.displayName = 'BreadcrumbList';
      var ce = y.forwardRef(function (e, n) {
        var t = e.className,
          a = H()(e, ae);
        return (0, $.jsx)(
          'li',
          u()(
            {
              ref: n,
              className: (0, ne.cn)('inline-flex items-center gap-1.5', t),
            },
            a,
          ),
        );
      });
      (ce.displayName = 'BreadcrumbItem'),
        (y.forwardRef(function (e, n) {
          var t = e.asChild,
            a = e.className,
            r = H()(e, re),
            i = t ? X.g7 : 'a';
          return (0, $.jsx)(
            i,
            u()(
              {
                ref: n,
                className: (0, ne.cn)(
                  'transition-colors hover:text-foreground',
                  a,
                ),
              },
              r,
            ),
          );
        }).displayName = 'BreadcrumbLink');
      var ue = y.forwardRef(function (e, n) {
        var t = e.className,
          a = H()(e, ie);
        return (0, $.jsx)(
          'span',
          u()(
            {
              ref: n,
              role: 'link',
              'aria-disabled': 'true',
              'aria-current': 'page',
              className: (0, ne.cn)('font-normal text-foreground', t),
            },
            a,
          ),
        );
      });
      ue.displayName = 'BreadcrumbPage';
      var de = function (e) {
        var n = e.children,
          t = e.className,
          a = H()(e, se);
        return (0, $.jsx)(
          'li',
          u()(
            u()(
              {
                role: 'presentation',
                'aria-hidden': 'true',
                className: (0, ne.cn)('[&>svg]:w-3.5 [&>svg]:h-3.5', t),
              },
              a,
            ),
            {},
            { children: null != n ? n : (0, $.jsx)(W.Z, {}) },
          ),
        );
      };
      de.displayName = 'BreadcrumbSeparator';
      var fe = t(704),
        me = t(23454),
        pe = function () {
          var e = (0, fe.$)().navigateToFiles;
          return (0, y.useCallback)(
            function (n) {
              e(n);
            },
            [e],
          );
        },
        he = function () {
          var e,
            n,
            t,
            a =
              ((n = L()),
              (t = (0, j.a)({
                queryKey: [M, n],
                initialData: [],
                enabled: !!n,
                queryFn:
                  ((e = p()(
                    f()().mark(function e() {
                      var t, a, r, i;
                      return f()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                v.Z.getAllParentFolder({ fileId: n })
                              );
                            case 2:
                              return (
                                (r = e.sent),
                                (i = r.data),
                                e.abrupt(
                                  'return',
                                  null !==
                                    (t =
                                      null == i ||
                                      null === (a = i.data) ||
                                      void 0 === a ||
                                      null === (a = a.parent_folders) ||
                                      void 0 === a
                                        ? void 0
                                        : a.toReversed()) && void 0 !== t
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
              })),
              t.data);
          return 1 === a.length
            ? []
            : a.map(function (e) {
                return {
                  title: '/' === e.name ? 'root' : e.name,
                  path: ''.concat(me.Z.Files, '?folderId=').concat(e.id),
                };
              });
        };
      function ge() {
        var e = he(),
          n = (0, C.s0)();
        return (0, $.jsx)(oe, {
          children: (0, $.jsx)(le, {
            children: e.map(function (t, a) {
              return (0, $.jsxs)(
                'div',
                {
                  className: 'flex items-center gap-2',
                  children: [
                    0 !== a && (0, $.jsx)(de, {}),
                    (0, $.jsx)(
                      ce,
                      {
                        onClick: function () {
                          return n(t.path);
                        },
                        className: 'cursor-pointer',
                        children:
                          a === e.length - 1
                            ? (0, $.jsx)(ue, { children: t.title })
                            : t.title,
                      },
                      t.path,
                    ),
                  ],
                },
                t.path,
              );
            }),
          }),
        });
      }
      var ve = t(9783),
        xe = t.n(ve),
        be = t(74094),
        je = t(27060),
        Ne = t(61932),
        we = t(96635),
        ye = t(61363),
        ke = t(72869),
        Ce = t(23309),
        Fe = t(57509),
        Se = t(75269),
        Re = t(84146),
        Ze = t(31098),
        Pe = t(28382),
        ze = t(96486),
        Me = t(26625),
        De = t(18334),
        Le = t(89645),
        Ie = t(5089),
        Ke = t(57235),
        Te = t(34839),
        Ae = t(9141),
        Ve = t(50780),
        _e = t(34464),
        Oe = t(13718);
      function Be(e) {
        return 'folder' === e;
      }
      function Ge(e) {
        var n = e.row,
          t = e.showConnectToKnowledgeModal,
          a = e.showFileRenameModal,
          r = e.showMoveFileModal,
          i = n.original,
          o = i.id,
          l = (0, Le.O6)().downloadFile,
          c = Be(i.type),
          u = (0, Ie.RT)(i.name),
          d = (0, y.useCallback)(
            function () {
              t(i);
            },
            [i, t],
          ),
          f = (0, y.useCallback)(
            function () {
              l({ id: o, filename: i.name });
            },
            [o, l, i.name],
          ),
          m = (0, y.useCallback)(
            function () {
              a(i);
            },
            [i, a],
          ),
          p = (0, y.useCallback)(
            function () {
              r([i.id]);
            },
            [i, r],
          );
        return (0, $.jsxs)('section', {
          className: 'flex gap-4 items-center text-text-sub-title-invert',
          children: [
            (0, $.jsx)(s.zx, {
              variant: 'ghost',
              size: 'sm',
              onClick: d,
              children: (0, $.jsx)(Ke.Z, {}),
            }),
            (0, $.jsx)(s.zx, {
              variant: 'ghost',
              size: 'sm',
              onClick: p,
              children: (0, $.jsx)(Te.Z, {}),
            }),
            (0, $.jsx)(s.zx, {
              variant: 'ghost',
              size: 'sm',
              onClick: m,
              children: (0, $.jsx)(Ae.Z, {}),
            }),
            c ||
              (0, $.jsx)(s.zx, {
                variant: 'ghost',
                size: 'sm',
                onClick: f,
                children: (0, $.jsx)(Ve.Z, {}),
              }),
            (0, Ie.Ep)(u) &&
              (0, $.jsx)(De.Z, {
                documentId: o,
                documentName: i.name,
                className: 'text-text-sub-title-invert',
                children: (0, $.jsx)(s.zx, {
                  variant: 'ghost',
                  size: 'sm',
                  children: (0, $.jsx)(_e.Z, {}),
                }),
              }),
            (0, $.jsx)(Me.h, {
              children: (0, $.jsx)(s.zx, {
                variant: 'ghost',
                size: 'sm',
                children: (0, $.jsx)(Oe.Z, {}),
              }),
            }),
          ],
        });
      }
      var Ue = t(86968),
        $e = function () {
          var e = (0, C.lr)(),
            n = g()(e, 1)[0].get('folderId');
          return null != n ? n : '';
        },
        Ye = function () {
          var e = (0, y.useState)({}),
            n = g()(e, 2),
            t = n[0],
            a = n[1],
            r = (0, Ue.pG)(),
            i = r.visible,
            s = r.hideModal,
            o = r.showModal,
            l = (0, Le.vF)(),
            c = l.renameFile,
            u = l.loading,
            d = (0, y.useCallback)(
              (function () {
                var e = p()(
                  f()().mark(function e(n) {
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), c({ fileId: t.id, name: n });
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
              [c, t, s],
            ),
            m = (0, y.useCallback)(
              (function () {
                var e = p()(
                  f()().mark(function e(n) {
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            a(n), o();
                          case 2:
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
              [o],
            );
          return {
            fileRenameLoading: u,
            initialFileName: t.name,
            onFileRenameOk: d,
            fileRenameVisible: i,
            hideFileRenameModal: s,
            showFileRenameModal: m,
          };
        },
        qe = function () {
          var e = (0, Ue.pG)(),
            n = e.visible,
            t = e.hideModal,
            a = e.showModal,
            r = (0, Le.n_)(),
            i = r.connectFileToKnowledge,
            s = r.loading,
            o = (0, y.useState)({}),
            l = g()(o, 2),
            c = l[0],
            u = l[1],
            d = (0, y.useMemo)(
              function () {
                var e;
                return Array.isArray(null == c ? void 0 : c.kbs_info)
                  ? null == c || null === (e = c.kbs_info) || void 0 === e
                    ? void 0
                    : e.map(function (e) {
                        return e.kb_id;
                      })
                  : [];
              },
              [null == c ? void 0 : c.kbs_info],
            ),
            m = (0, y.useCallback)(
              (function () {
                var e = p()(
                  f()().mark(function e(n) {
                    var a;
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), i({ fileIds: [c.id], kbIds: n })
                            );
                          case 2:
                            return (
                              0 === (a = e.sent) && t(), e.abrupt('return', a)
                            );
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
              [i, t, c.id],
            ),
            h = (0, y.useCallback)(
              function (e) {
                u(e), a();
              },
              [a],
            );
          return {
            initialConnectedIds: d,
            connectToKnowledgeLoading: s,
            onConnectToKnowledgeOk: m,
            connectToKnowledgeVisible: n,
            hideConnectToKnowledgeModal: t,
            showConnectToKnowledgeModal: h,
          };
        },
        Ee = t(19252),
        He = t(50561);
      function Qe(e) {
        var n = e.value,
          t = (0, y.useCallback)(function () {
            return (
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : []
            ).map(function (e) {
              return (0, $.jsx)(
                Ee.C,
                { variant: 'secondary', children: e.kb_name },
                e.kb_id,
              );
            });
          }, []);
        return Array.isArray(n)
          ? (0, $.jsxs)('section', {
              className: 'flex gap-2 items-center',
              children: [
                t(null == n ? void 0 : n.slice(0, 2)),
                n.length > 2 &&
                  (0, $.jsxs)(He.zs, {
                    children: [
                      (0, $.jsx)(He.Yi, {
                        children: (0, $.jsx)(s.zx, {
                          variant: 'ghost',
                          size: 'sm',
                          children: (0, $.jsx)(ee.Z, {}),
                        }),
                      }),
                      (0, $.jsx)(He.bZ, {
                        className: 'flex gap-2 flex-wrap',
                        children: t(n),
                      }),
                    ],
                  }),
              ],
            })
          : '';
      }
      var Je = t(73352),
        Xe = t(10541),
        We = 'LinkToDatasetForm',
        en = B.z.object({
          knowledgeIds: B.z
            .array(B.z.string())
            .min(0, { message: 'Username must be at least 1 characters.' }),
        });
      function nn(e) {
        var n = e.initialConnectedIds,
          t = e.onConnectToKnowledgeOk,
          a = (0, k.$G)().t,
          r = (0, O.cI)({
            resolver: (0, _.F)(en),
            defaultValues: { knowledgeIds: n },
          }),
          i = (0, Xe.pY)();
        return (0, $.jsx)(
          G.l0,
          u()(
            u()({}, r),
            {},
            {
              children: (0, $.jsx)('form', {
                onSubmit: r.handleSubmit(function (e) {
                  t(e.knowledgeIds);
                }),
                className: 'space-y-6',
                id: We,
                children: (0, $.jsx)(G.Wi, {
                  control: r.control,
                  name: 'knowledgeIds',
                  render: function (e) {
                    var n = e.field;
                    return (0, $.jsxs)(G.xJ, {
                      children: [
                        (0, $.jsx)(G.lX, { children: a('common.name') }),
                        (0, $.jsx)(G.NI, {
                          children: (0, $.jsx)(Je.N, {
                            options: i,
                            onValueChange: n.onChange,
                            defaultValue: n.value,
                            placeholder: a('fileManager.pleaseSelect'),
                            maxCount: 100,
                            modalPopover: !0,
                          }),
                        }),
                        (0, $.jsx)(G.zG, {}),
                      ],
                    });
                  },
                }),
              }),
            },
          ),
        );
      }
      function tn(e) {
        var n = e.hideModal,
          t = e.initialConnectedIds,
          a = e.onConnectToKnowledgeOk,
          r = e.loading,
          i = (0, k.$G)().t;
        return (0, $.jsx)(T.Vq, {
          open: !0,
          onOpenChange: n,
          children: (0, $.jsxs)(T.cZ, {
            className: 'sm:max-w-[425px]',
            children: [
              (0, $.jsx)(T.fK, {
                children: (0, $.jsx)(T.$N, {
                  children: i('fileManager.addToKnowledge'),
                }),
              }),
              (0, $.jsx)(nn, {
                initialConnectedIds: t,
                onConnectToKnowledgeOk: a,
              }),
              (0, $.jsx)(T.cN, {
                children: (0, $.jsx)(s.dw, {
                  type: 'submit',
                  form: We,
                  loading: r,
                  children: (0, $.jsxs)('div', {
                    className: 'flex gap-2 items-center',
                    children: [(0, $.jsx)(Ke.Z, {}), ' Save'],
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function an(e) {
        var n,
          t = e.files,
          a = e.total,
          r = e.pagination,
          i = e.setPagination,
          o = e.loading,
          l = e.rowSelection,
          c = e.setRowSelection,
          d = e.showMoveFileModal,
          f = y.useState([]),
          m = g()(f, 2),
          p = m[0],
          h = m[1],
          v = y.useState([]),
          x = g()(v, 2),
          b = x[0],
          j = x[1],
          N = y.useState({}),
          w = g()(N, 2),
          C = w[0],
          F = w[1],
          S = (0, k.$G)('translation', { keyPrefix: 'fileManager' }).t,
          R = pe(),
          Z = qe(),
          P = Z.connectToKnowledgeVisible,
          z = Z.hideConnectToKnowledgeModal,
          M = Z.showConnectToKnowledgeModal,
          D = Z.initialConnectedIds,
          L = Z.onConnectToKnowledgeOk,
          I = Z.connectToKnowledgeLoading,
          K = Ye(),
          T = K.fileRenameVisible,
          A = K.showFileRenameModal,
          V = K.hideFileRenameModal,
          _ = K.onFileRenameOk,
          O = K.initialFileName,
          B = K.fileRenameLoading,
          G = [
            {
              id: 'select',
              header: function (e) {
                var n = e.table;
                return (0, $.jsx)(Ce.X, {
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
                return (0, $.jsx)(Ce.X, {
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
                return (0, $.jsxs)(s.zx, {
                  variant: 'ghost',
                  onClick: function () {
                    return n.toggleSorting('asc' === n.getIsSorted());
                  },
                  children: [S('name'), (0, $.jsx)(Ne.Z, {})],
                });
              },
              meta: { cellClassName: 'max-w-[20vw]' },
              cell: function (e) {
                var n = e.row,
                  t = n.getValue('name'),
                  a = n.original.type,
                  r = n.original.id,
                  i = Be(a);
                return (0, $.jsxs)(Re.u, {
                  children: [
                    (0, $.jsx)(Re.aJ, {
                      asChild: !0,
                      children: (0, $.jsxs)('div', {
                        className: 'flex gap-2',
                        children: [
                          (0, $.jsx)('span', {
                            className: 'size-4',
                            children: (0, $.jsx)(we.a, { name: t, type: a }),
                          }),
                          (0, $.jsx)('span', {
                            className: (0, ne.cn)(
                              'truncate',
                              xe()({}, 'cursor-pointer', i),
                            ),
                            onClick: function () {
                              i && R(r);
                            },
                            children: t,
                          }),
                        ],
                      }),
                    }),
                    (0, $.jsx)(Re._v, {
                      children: (0, $.jsx)('p', { children: t }),
                    }),
                  ],
                });
              },
            },
            {
              accessorKey: 'create_time',
              header: function (e) {
                var n = e.column;
                return (0, $.jsxs)(s.zx, {
                  variant: 'ghost',
                  onClick: function () {
                    return n.toggleSorting('asc' === n.getIsSorted());
                  },
                  children: [S('uploadDate'), (0, $.jsx)(Ne.Z, {})],
                });
              },
              cell: function (e) {
                var n = e.row;
                return (0, $.jsx)('div', {
                  className: 'lowercase',
                  children: (0, Pe.p6)(n.getValue('create_time')),
                });
              },
            },
            {
              accessorKey: 'size',
              header: function (e) {
                var n = e.column;
                return (0, $.jsxs)(s.zx, {
                  variant: 'ghost',
                  onClick: function () {
                    return n.toggleSorting('asc' === n.getIsSorted());
                  },
                  children: [S('size'), (0, $.jsx)(Ne.Z, {})],
                });
              },
              cell: function (e) {
                var n = e.row;
                return (0, $.jsx)('div', {
                  className: 'capitalize',
                  children: (0, Ze.sS)(n.getValue('size')),
                });
              },
            },
            {
              accessorKey: 'kbs_info',
              header: S('knowledgeBase'),
              cell: function (e) {
                var n = e.row.getValue('kbs_info');
                return (0, $.jsx)(Qe, { value: n });
              },
            },
            {
              id: 'actions',
              header: S('action'),
              enableHiding: !1,
              cell: function (e) {
                var n = e.row;
                return (0, $.jsx)(Ge, {
                  row: n,
                  showConnectToKnowledgeModal: M,
                  showFileRenameModal: A,
                  showMoveFileModal: d,
                });
              },
            },
          ],
          U = (0, y.useMemo)(
            function () {
              return {
                pageIndex: (r.current || 1) - 1,
                pageSize: r.pageSize || 10,
              };
            },
            [r],
          ),
          Y = (0, be.b7)({
            data: t || [],
            columns: G,
            onSortingChange: h,
            onColumnFiltersChange: j,
            getCoreRowModel: (0, je.sC)(),
            getSortedRowModel: (0, je.tj)(),
            getFilteredRowModel: (0, je.vL)(),
            onColumnVisibilityChange: F,
            onRowSelectionChange: c,
            manualPagination: !0,
            state: {
              sorting: p,
              columnFilters: b,
              columnVisibility: C,
              rowSelection: l,
              pagination: U,
            },
            rowCount: null != a ? a : 0,
            debugTable: !0,
          });
        return (0, $.jsxs)('div', {
          className: 'w-full',
          children: [
            (0, $.jsxs)(Se.iA, {
              children: [
                (0, $.jsx)(Se.xD, {
                  children: Y.getHeaderGroups().map(function (e) {
                    return (0, $.jsx)(
                      Se.SC,
                      {
                        children: e.headers.map(function (e) {
                          return (0, $.jsx)(
                            Se.ss,
                            {
                              children: e.isPlaceholder
                                ? null
                                : (0, be.ie)(
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
                (0, $.jsx)(Se.RM, {
                  children: o
                    ? (0, $.jsx)(ke.h, { columnsLength: G.length })
                    : null !== (n = Y.getRowModel().rows) &&
                        void 0 !== n &&
                        n.length
                      ? Y.getRowModel().rows.map(function (e) {
                          return (0, $.jsx)(
                            Se.SC,
                            {
                              'data-state': e.getIsSelected() && 'selected',
                              children: e.getVisibleCells().map(function (e) {
                                var n;
                                return (0, $.jsx)(
                                  Se.pj,
                                  {
                                    className:
                                      null === (n = e.column.columnDef.meta) ||
                                      void 0 === n
                                        ? void 0
                                        : n.cellClassName,
                                    children: (0, be.ie)(
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
                      : (0, $.jsx)(ke.f, { columnsLength: G.length }),
                }),
              ],
            }),
            (0, $.jsx)('div', {
              className: 'flex items-center justify-end py-4',
              children: (0, $.jsx)('div', {
                className: 'space-x-2',
                children: (0, $.jsx)(
                  Fe.g,
                  u()(
                    u()({}, (0, ze.pick)(r, 'current', 'pageSize')),
                    {},
                    {
                      total: a,
                      onChange: function (e, n) {
                        i({ page: e, pageSize: n });
                      },
                    },
                  ),
                ),
              }),
            }),
            P &&
              (0, $.jsx)(tn, {
                hideModal: z,
                initialConnectedIds: D,
                onConnectToKnowledgeOk: L,
                loading: I,
              }),
            T &&
              (0, $.jsx)(ye.L, {
                hideModal: V,
                onOk: _,
                initialName: O,
                loading: B,
              }),
          ],
        });
      }
      var rn = t(19632),
        sn = t.n(rn),
        on = t(23499),
        ln = t(36316),
        cn = t(8971);
      function un(e) {
        var n = e.treeData,
          t = e.value,
          a = e.loadData,
          r = e.onChange,
          i = (0, y.useState)(!1),
          o = g()(i, 2),
          l = o[0],
          c = o[1],
          u = (0, k.$G)().t,
          d = (0, y.useState)([]),
          m = g()(d, 2),
          h = m[0],
          v = m[1],
          x = (0, y.useState)(''),
          b = g()(x, 2),
          j = b[0],
          N = b[1],
          w = (0, y.useMemo)(
            function () {
              var e;
              return null ===
                (e = n.find(function (e) {
                  return e.id === t;
                })) || void 0 === e
                ? void 0
                : e.title;
            },
            [n, t],
          ),
          C = (0, y.useCallback)(
            function (e) {
              return void 0 === e || -1 !== h.indexOf(e);
            },
            [h],
          ),
          F = (0, y.useCallback)(
            function (e) {
              return function (n) {
                n.stopPropagation(), null == r || r(e), c(!1);
              };
            },
            [r],
          ),
          S = (0, y.useCallback)(
            function (e) {
              return (function () {
                var t = p()(
                  f()().mark(function t(r) {
                    var i, s;
                    return f()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ((r.stopPropagation(), (i = e.id), !C(i))) {
                              t.next = 6;
                              break;
                            }
                            v(function (e) {
                              return e.filter(function (e) {
                                return e !== i;
                              });
                            }),
                              (t.next = 13);
                            break;
                          case 6:
                            if (
                              ((s = n.some(function (e) {
                                return e.parentId === i;
                              })),
                              v(function (e) {
                                return [].concat(sn()(e), [i]);
                              }),
                              s)
                            ) {
                              t.next = 13;
                              break;
                            }
                            return (
                              N(i), (t.next = 12), null == a ? void 0 : a(e)
                            );
                          case 12:
                            N('');
                          case 13:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            },
            [C, a, n],
          ),
          R = (0, y.useCallback)(
            function (e) {
              var a = e
                ? n.filter(function (n) {
                    return n.parentId === e;
                  })
                : n.filter(function (e) {
                    return n.every(function (n) {
                      return e.parentId !== n.id;
                    });
                  });
              return 0 === a.length
                ? null
                : (0, $.jsx)('ul', {
                    className: (0, ne.cn)('pl-2', { hidden: !C(e) }),
                    children: a.map(function (e) {
                      return (0, $.jsxs)(
                        'li',
                        {
                          onClick: F(e.id),
                          className: 'cursor-pointer  ',
                          children: [
                            (0, $.jsxs)('div', {
                              className: (0, ne.cn)(
                                'flex justify-between items-center hover:bg-accent py-0.5 px-1 rounded-md ',
                                { 'bg-cyan-50': t === e.id },
                              ),
                              children: [
                                (0, $.jsx)('span', {
                                  className: (0, ne.cn)('flex-1 '),
                                  children: e.title,
                                }),
                                e.isLeaf ||
                                  (0, $.jsx)(s.zx, {
                                    variant: 'ghost',
                                    className: 'size-7',
                                    onClick: S(e),
                                    disabled: j === e.id,
                                    children:
                                      j === e.id
                                        ? (0, $.jsx)(ln.Z, {
                                            className: 'animate-spin',
                                          })
                                        : C(e.id)
                                          ? (0, $.jsx)(cn.Z, {})
                                          : (0, $.jsx)(W.Z, {}),
                                  }),
                              ],
                            }),
                            R(e.id),
                          ],
                        },
                        e.id,
                      );
                    }),
                  });
            },
            [S, F, C, j, n, t],
          );
        return (
          (0, y.useEffect)(
            function () {
              (0, ze.isEmpty)(n) &&
                (null == a || a({ id: '', parentId: '', title: '' }));
            },
            [a, n],
          ),
          (0, $.jsxs)(on.J2, {
            open: l,
            onOpenChange: c,
            children: [
              (0, $.jsx)(on.xo, {
                asChild: !0,
                children: (0, $.jsxs)('div', {
                  className:
                    'flex justify-between border px-2 py-1.5 rounded-md gap-2 items-center w-full',
                  children: [
                    w ||
                      (0, $.jsx)('span', {
                        className: 'text-slate-400',
                        children: u('common.pleaseSelect'),
                      }),
                    (0, $.jsx)(cn.Z, { className: 'size-5 ' }),
                  ],
                }),
              }),
              (0, $.jsx)(on.yk, {
                className: 'p-1 min-w-[var(--radix-popover-trigger-width)]',
                children: (0, $.jsx)('ul', { children: R() }),
              }),
            ],
          })
        );
      }
      function dn(e) {
        var n = e.hideModal,
          t = e.onOk,
          a = e.loading,
          r = (0, k.$G)().t,
          i = (0, Le.d)().fetchList,
          o = (0, y.useState)(''),
          l = g()(o, 2),
          c = l[0],
          u = l[1],
          d = (0, y.useState)([]),
          m = g()(d, 2),
          h = m[0],
          v = m[1],
          x = (0, y.useCallback)(
            (function () {
              var e = p()(
                f()().mark(function e(n) {
                  var t, a;
                  return f()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (t = n.id), (e.next = 3), i(t);
                        case 3:
                          0 === (a = e.sent).code &&
                            v(function (e) {
                              return e.concat(
                                a.data.files
                                  .filter(function (e) {
                                    return 'folder' === e.type;
                                  })
                                  .map(function (e) {
                                    return {
                                      id: e.id,
                                      parentId: e.parent_id,
                                      title: e.name,
                                      isLeaf:
                                        'boolean' ==
                                          typeof e.has_child_folder &&
                                        !e.has_child_folder,
                                    };
                                  }),
                              );
                            });
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
            [i],
          ),
          b = (0, y.useCallback)(
            function () {
              null == t || t(c);
            },
            [t, c],
          );
        return (0, $.jsx)(T.Vq, {
          open: !0,
          onOpenChange: n,
          children: (0, $.jsxs)(T.cZ, {
            children: [
              (0, $.jsx)(T.fK, {
                children: (0, $.jsx)(T.$N, { children: r('common.move') }),
              }),
              (0, $.jsx)('div', {
                children: (0, $.jsx)(un, {
                  treeData: h,
                  value: c,
                  onChange: u,
                  loadData: x,
                }),
              }),
              (0, $.jsx)(T.cN, {
                children: (0, $.jsx)(s.dw, {
                  type: 'submit',
                  onClick: b,
                  disabled: (0, ze.isEmpty)(c),
                  loading: a,
                  children: r('common.save'),
                }),
              }),
            ],
          }),
        });
      }
      var fn = function () {
        var e,
          n,
          t,
          a,
          r,
          i =
            ((n = (0, S.fz)().setPaginationParams),
            (t = (0, x.NL)()),
            (a = (0, k.$G)().t),
            (r = (0, b.D)({
              mutationKey: [D],
              mutationFn:
                ((e = p()(
                  f()().mark(function e(r) {
                    var i, s;
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), v.Z.removeFile(r);
                          case 2:
                            return (
                              (i = e.sent),
                              0 === (s = i.data).code &&
                                (w.ZP.success(a('message.deleted')),
                                n(1),
                                t.invalidateQueries({ queryKey: [Z] })),
                              e.abrupt('return', s.code)
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
            })),
            { data: r.data, loading: r.isPending, deleteFile: r.mutateAsync }),
          s = i.deleteFile,
          o = $e(),
          l = (0, y.useCallback)(
            (function () {
              var e = p()(
                f()().mark(function e(n) {
                  var t;
                  return f()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), s({ fileIds: n, parentId: o });
                        case 2:
                          return (t = e.sent), e.abrupt('return', t);
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
            [o, s],
          );
        return { handleRemoveFile: l };
      };
      var mn = function () {
          var e,
            n,
            t,
            a,
            r,
            i = (0, Ue.pG)(),
            s = i.visible,
            o = i.hideModal,
            l = i.showModal,
            c =
              ((n = (0, S.fz)().setPaginationParams),
              (t = (0, x.NL)()),
              (a = (0, k.$G)().t),
              (r = (0, b.D)({
                mutationKey: [z],
                mutationFn:
                  ((e = p()(
                    f()().mark(function e(r) {
                      var i, s;
                      return f()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                v.Z.createFolder(
                                  u()(u()({}, r), {}, { type: 'folder' }),
                                )
                              );
                            case 2:
                              return (
                                (i = e.sent),
                                0 === (s = i.data).code &&
                                  (w.ZP.success(a('message.created')),
                                  n(1),
                                  t.invalidateQueries({ queryKey: [Z] })),
                                e.abrupt('return', s.code)
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
              })),
              {
                data: r.data,
                loading: r.isPending,
                createFolder: r.mutateAsync,
              }),
            d = c.createFolder,
            m = c.loading,
            h = $e(),
            g = (0, y.useCallback)(
              (function () {
                var e = p()(
                  f()().mark(function e(n) {
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), d({ parentId: h, name: n });
                          case 2:
                            0 === e.sent && o();
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
              [d, o, h],
            );
          return {
            folderCreateLoading: m,
            onFolderCreateOk: g,
            folderCreateModalVisible: s,
            hideFolderCreateModal: o,
            showFolderCreateModal: l,
          };
        },
        pn = function (e) {
          var n,
            t,
            a,
            r,
            i = e.clearRowSelection,
            s = (0, Ue.pG)(),
            o = s.visible,
            l = s.hideModal,
            c = s.showModal,
            u =
              ((t = (0, x.NL)()),
              (a = (0, k.$G)().t),
              (r = (0, b.D)({
                mutationKey: [P],
                mutationFn:
                  ((n = p()(
                    f()().mark(function e(n) {
                      var r, i;
                      return f()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), v.Z.moveFile(n);
                            case 2:
                              return (
                                (r = e.sent),
                                0 === (i = r.data).code &&
                                  (w.ZP.success(a('message.operated')),
                                  t.invalidateQueries({ queryKey: [Z] })),
                                e.abrupt('return', i.code)
                              );
                            case 6:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  )),
                  function (e) {
                    return n.apply(this, arguments);
                  }),
              })),
              { data: r.data, loading: r.isPending, moveFile: r.mutateAsync }),
            d = u.moveFile,
            m = u.loading,
            h = (0, y.useState)([]),
            j = g()(h, 2),
            N = j[0],
            C = j[1],
            F = (0, y.useRef)(!1),
            S = (0, y.useCallback)(
              (function () {
                var e = p()(
                  f()().mark(function e(n) {
                    var t;
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              d({ src_file_ids: N, dest_file_id: n })
                            );
                          case 2:
                            return (
                              0 === (t = e.sent) && (F.current && i(), l()),
                              e.abrupt('return', t)
                            );
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
              [d, N, l, i],
            ),
            R = (0, y.useCallback)(
              function (e) {
                var n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                (F.current = n), C(e), c();
              },
              [c],
            );
          return {
            initialValue: '',
            moveFileLoading: m,
            onMoveFileOk: S,
            moveFileVisible: o,
            hideMoveFileModal: l,
            showMoveFileModal: R,
          };
        },
        hn = function () {
          var e,
            n,
            t,
            a,
            r,
            i = (0, Ue.pG)(),
            s = i.visible,
            o = i.hideModal,
            l = i.showModal,
            c =
              ((n = (0, S.fz)().setPaginationParams),
              (t = (0, k.$G)().t),
              (a = (0, x.NL)()),
              (r = (0, b.D)({
                mutationKey: [R],
                mutationFn:
                  ((e = p()(
                    f()().mark(function e(r) {
                      var i, s, o, l, c;
                      return f()().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (i = r.fileList),
                                  (s = r.fileList.map(function (e) {
                                    return e.webkitRelativePath;
                                  })),
                                  (o = new FormData()).append(
                                    'parent_id',
                                    r.parentId,
                                  ),
                                  i.forEach(function (e, n) {
                                    o.append('file', e), o.append('path', s[n]);
                                  }),
                                  (e.prev = 5),
                                  (e.next = 8),
                                  v.Z.uploadFile(o)
                                );
                              case 8:
                                return (
                                  0 ===
                                    (null == (c = e.sent)
                                      ? void 0
                                      : c.data.code) &&
                                    (w.ZP.success(t('message.uploaded')),
                                    n(1),
                                    a.invalidateQueries({ queryKey: [Z] })),
                                  e.abrupt(
                                    'return',
                                    null == c ||
                                      null === (l = c.data) ||
                                      void 0 === l
                                      ? void 0
                                      : l.code,
                                  )
                                );
                              case 13:
                                (e.prev = 13), (e.t0 = e.catch(5));
                              case 15:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[5, 13]],
                      );
                    }),
                  )),
                  function (n) {
                    return e.apply(this, arguments);
                  }),
              })),
              {
                data: r.data,
                loading: r.isPending,
                uploadFile: r.mutateAsync,
              }),
            u = c.uploadFile,
            d = c.loading,
            m = $e(),
            h = (0, y.useCallback)(
              (function () {
                var e = p()(
                  f()().mark(function e(n) {
                    var t;
                    return f()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!(n.length > 0)) {
                              e.next = 6;
                              break;
                            }
                            return (
                              (e.next = 3), u({ fileList: n, parentId: m })
                            );
                          case 3:
                            return (
                              0 === (t = e.sent) && o(), e.abrupt('return', t)
                            );
                          case 6:
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
              [u, o, m],
            );
          return {
            fileUploadLoading: d,
            onFileUploadOk: h,
            fileUploadVisible: s,
            hideFileUploadModal: o,
            showFileUploadModal: l,
          };
        };
      function gn() {
        var e = (0, k.$G)().t,
          n = hn(),
          t = n.fileUploadVisible,
          c = n.hideFileUploadModal,
          u = n.showFileUploadModal,
          d = n.fileUploadLoading,
          m = n.onFileUploadOk,
          h = mn(),
          g = h.folderCreateModalVisible,
          v = h.showFolderCreateModal,
          x = h.hideFolderCreateModal,
          b = h.folderCreateLoading,
          j = h.onFolderCreateOk,
          N = I(),
          w = N.pagination,
          y = N.files,
          C = N.total,
          F = N.loading,
          S = N.setPagination,
          R = N.searchString,
          Z = N.handleInputChange,
          P = (0, l.G)(),
          z = P.rowSelection,
          M = P.setRowSelection,
          D = P.rowSelectionIsEmpty,
          L = P.clearRowSelection,
          T = P.selectedCount,
          A = pn({ clearRowSelection: L }),
          V = A.showMoveFileModal,
          _ = A.moveFileVisible,
          O = A.onMoveFileOk,
          B = A.hideMoveFileModal,
          G = A.moveFileLoading,
          U = (function (e) {
            var n,
              t = e.files,
              a = e.rowSelection,
              r = e.showMoveFileModal,
              i = e.setRowSelection,
              s = (0, k.$G)().t,
              o = (0, l.S)(a, t).selectedIds,
              c = fn().handleRemoveFile,
              u = [
                {
                  id: 'move',
                  label: s('common.move'),
                  icon: (0, $.jsx)(Te.Z, {}),
                  onClick: function () {
                    r(o, !0);
                  },
                },
                {
                  id: 'delete',
                  label: s('common.delete'),
                  icon: (0, $.jsx)(Oe.Z, {}),
                  onClick:
                    ((n = p()(
                      f()().mark(function e() {
                        return f()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), c(o);
                              case 2:
                                0 === e.sent && i({});
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
            return { list: u };
          })({
            files: y,
            rowSelection: z,
            showMoveFileModal: V,
            setRowSelection: M,
          }),
          Y = U.list,
          E = he(),
          H = (0, $.jsx)('div', {
            children: E.length > 0 ? (0, $.jsx)(ge, {}) : 'File',
          });
        return (0, $.jsxs)('section', {
          className: 'p-8',
          children: [
            (0, $.jsx)(i.Z, {
              leftPanel: H,
              searchString: R,
              onSearchChange: Z,
              showFilter: !1,
              icon: 'file',
              children: (0, $.jsxs)(o.h_, {
                children: [
                  (0, $.jsx)(o.$F, {
                    asChild: !0,
                    children: (0, $.jsxs)(s.zx, {
                      children: [
                        (0, $.jsx)(K.Z, {}),
                        e('knowledgeDetails.addFile'),
                      ],
                    }),
                  }),
                  (0, $.jsxs)(o.AW, {
                    className: 'w-56',
                    children: [
                      (0, $.jsx)(o.Xi, {
                        onClick: u,
                        children: e('fileManager.uploadFile'),
                      }),
                      (0, $.jsx)(o.VD, {}),
                      (0, $.jsx)(o.Xi, {
                        onClick: v,
                        children: e('fileManager.newFolder'),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            !D && (0, $.jsx)(a.z, { list: Y, count: T }),
            (0, $.jsx)(an, {
              files: y,
              total: C,
              pagination: w,
              setPagination: S,
              loading: F,
              rowSelection: z,
              setRowSelection: M,
              showMoveFileModal: V,
            }),
            t && (0, $.jsx)(r.j, { hideModal: c, onOk: m, loading: d }),
            g &&
              (0, $.jsx)(q, { loading: b, visible: g, hideModal: x, onOk: j }),
            _ && (0, $.jsx)(dn, { hideModal: B, onOk: O, loading: G }),
          ],
        });
      }
    },
    23454: function (e, n, t) {
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
    62386: function (e, n, t) {
      var a = t(60806),
        r = t(66582),
        i = t(78158),
        s = a.Z.listFile,
        o = a.Z.removeFile,
        l = a.Z.uploadFile,
        c = a.Z.renameFile,
        u = a.Z.getAllParentFolder,
        d = a.Z.createFolder,
        f = a.Z.connectFileToKnowledge,
        m = a.Z.get_document_file,
        p = {
          listFile: { url: s, method: 'get' },
          removeFile: { url: o, method: 'post' },
          uploadFile: { url: l, method: 'post' },
          renameFile: { url: c, method: 'post' },
          getAllParentFolder: { url: u, method: 'get' },
          createFolder: { url: d, method: 'post' },
          connectFileToKnowledge: { url: f, method: 'post' },
          getFile: { url: a.Z.getFile, method: 'get', responseType: 'blob' },
          getDocumentFile: { url: m, method: 'get', responseType: 'blob' },
          moveFile: { url: a.Z.moveFile, method: 'post' },
        },
        h = (0, r.Z)(p, i.ZP);
      n.Z = h;
    },
    51331: function (e, n, t) {
      t.d(n, {
        AG: function () {
          return x;
        },
        De: function () {
          return N;
        },
        P2: function () {
          return d;
        },
        Ph: function () {
          return u;
        },
        _V: function () {
          return c;
        },
        qh: function () {
          return h;
        },
        td: function () {
          return j;
        },
        uA: function () {
          return v;
        },
        vn: function () {
          return f;
        },
      });
      var a = t(15009),
        r = t.n(a),
        i = t(99289),
        s = t.n(i),
        o = t(40169),
        l = t(62386),
        c = function (e) {
          return new Promise(function (n, t) {
            var a = new FileReader();
            a.readAsDataURL(e),
              (a.onload = function () {
                var e = new Image();
                (e.src = a.result),
                  (e.onload = function () {
                    var t = document.createElement('canvas'),
                      a = t.getContext('2d'),
                      r = e.width,
                      i = e.height,
                      s = 100;
                    r > i && r > s
                      ? ((i = (i * s) / r), (r = s))
                      : i > s && ((r = (r * s) / i), (i = s)),
                      (t.width = r),
                      (t.height = i),
                      null == a || a.drawImage(e, 0, 0, r, i);
                    var o = t.toDataURL('image/png');
                    n(o);
                  }),
                  (e.onerror = t);
              }),
              (a.onerror = t);
          });
        },
        u = function (e) {
          return Array.isArray(e) ? e : null == e ? void 0 : e.fileList;
        },
        d = function (e) {
          var n = [];
          return (
            e &&
              (n = [{ uid: '1', name: 'file', thumbUrl: e, status: 'done' }]),
            n
          );
        },
        f = (function () {
          var e = s()(
            r()().mark(function e(n) {
              var t, a, i;
              return r()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(Array.isArray(n) && n.length > 0)) {
                        e.next = 11;
                        break;
                      }
                      if (((t = n[0]), !(a = t.originFileObj))) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 6), c(a);
                    case 6:
                      return (i = e.sent), e.abrupt('return', i);
                    case 10:
                      return e.abrupt('return', t.thumbUrl);
                    case 11:
                      return e.abrupt('return', '');
                    case 12:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
      function m(e, n) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = s()(
          r()().mark(function e(n, t) {
            var a, i;
            return r()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), l.Z.getDocumentFile({}, n);
                  case 2:
                    return (
                      (a = e.sent),
                      (i = new Blob([a.data], { type: t || a.data.type })),
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
      function h(e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = s()(
          r()().mark(function e(n) {
            var t, a, i;
            return r()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), m(n, o.nK.Html);
                  case 2:
                    (t = e.sent),
                      (a = URL.createObjectURL(t)),
                      ((i = document.createElement('a')).href = a),
                      i.click(),
                      URL.revokeObjectURL(a);
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var v = function (e, n) {
          var t = window.URL.createObjectURL(e),
            a = document.createElement('a');
          (a.href = t),
            n && (a.download = n),
            a.click(),
            window.URL.revokeObjectURL(t);
        },
        x = (function () {
          var e = s()(
            r()().mark(function e(n) {
              var t, a, i;
              return r()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (t = n.id), (a = n.filename), (e.next = 3), m(t);
                    case 3:
                      (i = e.sent), v(i, a);
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
        b = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        j = function (e) {
          for (
            var n = 0, t = ('string' == typeof e ? parseInt(e, 10) : e) || 0;
            t >= 1024 && ++n;

          )
            t /= 1024;
          return t.toFixed(t < 10 && n > 0 ? 1 : 0) + ' ' + b[n];
        },
        N = (function () {
          var e = s()(
            r()().mark(function e(n, t) {
              var a;
              return r()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = new Blob([JSON.stringify(n)], { type: o.nK.Json })),
                        v(a, t);
                    case 2:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (n, t) {
            return e.apply(this, arguments);
          };
        })();
    },
  },
]);
//# sourceMappingURL=p__files__index.adb0303d.async.js.map
