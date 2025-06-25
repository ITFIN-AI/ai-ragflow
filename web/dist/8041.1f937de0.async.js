'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [8041],
  {
    84445: function (e, n, t) {
      t.d(n, {
        b: function () {
          return _;
        },
      });
      var r = t(97857),
        o = t.n(r),
        a = t(19632),
        i = t.n(a),
        u = t(5574),
        l = t.n(u),
        d = t(13769),
        c = t.n(d),
        s = t(13766),
        f = t(41352),
        m = t(28142),
        v = t(62435),
        p = t(44524),
        g = t(64712),
        x = t(57636),
        h = t(77631),
        N = t(68635),
        b = t(27080),
        j = t(86074),
        y = ['className', 'orientation'],
        E = ['className', 'children'],
        C = v.forwardRef(function (e, n) {
          var t = e.className,
            r = e.orientation,
            a = void 0 === r ? 'vertical' : r,
            i = c()(e, y);
          return (0, j.jsx)(
            N.gb,
            o()(
              o()(
                {
                  ref: n,
                  orientation: a,
                  className: (0, b.cn)(
                    'flex touch-none select-none transition-colors',
                    'vertical' === a &&
                      'h-full w-2.5 border-l border-l-transparent p-[1px]',
                    'horizontal' === a &&
                      'h-2.5 flex-col border-t border-t-transparent p-[1px]',
                    t,
                  ),
                },
                i,
              ),
              {},
              {
                children: (0, j.jsx)(N.q4, {
                  className: 'relative flex-1 rounded-full bg-border',
                }),
              },
            ),
          );
        });
      C.displayName = N.gb.displayName;
      var w = v.forwardRef(function (e, n) {
        var t = e.className,
          r = e.children,
          a = c()(e, E);
        return (0, j.jsxs)(
          N.fC,
          o()(
            o()(
              { ref: n, className: (0, b.cn)('relative overflow-hidden', t) },
              a,
            ),
            {},
            {
              children: [
                (0, j.jsx)(N.l_, {
                  className: 'h-full w-full rounded-[inherit]',
                  children: r,
                }),
                (0, j.jsx)(C, {}),
                (0, j.jsx)(N.Ns, {}),
              ],
            },
          ),
        );
      });
      function I(e) {
        var n = v.useRef(e);
        return (
          v.useEffect(function () {
            n.current = e;
          }),
          v.useMemo(function () {
            return function () {
              for (
                var e, t = arguments.length, r = new Array(t), o = 0;
                o < t;
                o++
              )
                r[o] = arguments[o];
              return null === (e = n.current) || void 0 === e
                ? void 0
                : e.call.apply(e, [n].concat(r));
            };
          }, [])
        );
      }
      function k(e) {
        var n = e.prop,
          t = e.defaultProp,
          r = e.onChange,
          o = void 0 === r ? function () {} : r,
          a = (function (e) {
            var n = e.defaultProp,
              t = e.onChange,
              r = v.useState(n),
              o = l()(r, 1)[0],
              a = v.useRef(o),
              i = I(t);
            return (
              v.useEffect(
                function () {
                  a.current !== o && (i(o), (a.current = o));
                },
                [o, a, i],
              ),
              r
            );
          })({ defaultProp: t, onChange: o }),
          i = l()(a, 2),
          u = i[0],
          d = i[1],
          c = void 0 !== n,
          s = c ? n : u,
          f = I(o);
        return [
          s,
          v.useCallback(
            function (e) {
              if (c) {
                var t = 'function' == typeof e ? e(n) : e;
                t !== n && f(t);
              } else d(e);
            },
            [c, n, d, f],
          ),
        ];
      }
      w.displayName = N.fC.displayName;
      var F = [
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
      function z(e) {
        return 'preview' in e && 'string' == typeof e.preview;
      }
      function P(e) {
        var n = e.file;
        return n.type.startsWith('image/')
          ? (0, j.jsx)('img', {
              src: n.preview,
              alt: n.name,
              width: 48,
              height: 48,
              loading: 'lazy',
              className: 'aspect-square shrink-0 rounded-md object-cover',
            })
          : (0, j.jsx)(s.Z, {
              className: 'size-10 text-muted-foreground',
              'aria-hidden': 'true',
            });
      }
      function A(e) {
        var n = e.file,
          t = e.progress,
          r = e.onRemove;
        return (0, j.jsxs)('div', {
          className: 'relative flex items-center gap-2.5',
          children: [
            (0, j.jsxs)('div', {
              className: 'flex flex-1 gap-2.5',
              children: [
                z(n) ? (0, j.jsx)(P, { file: n }) : null,
                (0, j.jsxs)('div', {
                  className: 'flex w-full flex-col gap-2',
                  children: [
                    (0, j.jsxs)('div', {
                      className: 'flex flex-col gap-px',
                      children: [
                        (0, j.jsx)('p', {
                          className:
                            'line-clamp-1 text-sm font-medium text-foreground/80',
                          children: n.name,
                        }),
                        (0, j.jsx)('p', {
                          className: 'text-xs text-muted-foreground',
                          children: (0, b.t)(n.size),
                        }),
                      ],
                    }),
                    t ? (0, j.jsx)(h.E, { value: t }) : null,
                  ],
                }),
              ],
            }),
            (0, j.jsx)('div', {
              className: 'flex items-center gap-2',
              children: (0, j.jsxs)(x.zx, {
                type: 'button',
                variant: 'outline',
                size: 'icon',
                className: 'size-7',
                onClick: r,
                children: [
                  (0, j.jsx)(f.Z, {
                    className: 'size-4',
                    'aria-hidden': 'true',
                  }),
                  (0, j.jsx)('span', {
                    className: 'sr-only',
                    children: 'Remove file',
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function _(e) {
        var n,
          t = e.value,
          r = e.onValueChange,
          a = e.onUpload,
          u = e.progresses,
          d = e.accept,
          s = void 0 === d ? { 'image/*': [] } : d,
          f = e.maxSize,
          x = void 0 === f ? 2097152 : f,
          h = e.maxFileCount,
          N = void 0 === h ? 1 : h,
          y = e.multiple,
          E = void 0 !== y && y,
          C = e.disabled,
          I = void 0 !== C && C,
          P = e.className,
          _ = c()(e, F),
          T = k({ prop: t, onChange: r }),
          O = l()(T, 2),
          R = O[0],
          H = O[1],
          B = v.useCallback(
            function (e, n) {
              var t;
              if (!E && 1 === N && e.length > 1)
                g.Am.error('Cannot upload more than 1 file at a time');
              else if (
                (null !== (t = null == R ? void 0 : R.length) && void 0 !== t
                  ? t
                  : 0) +
                  e.length >
                N
              )
                g.Am.error('Cannot upload more than '.concat(N, ' files'));
              else {
                var r = e.map(function (e) {
                    return Object.assign(e, {
                      preview: URL.createObjectURL(e),
                    });
                  }),
                  o = R ? [].concat(i()(R), i()(r)) : r;
                if (
                  (H(o),
                  n.length > 0 &&
                    n.forEach(function (e) {
                      var n = e.file;
                      g.Am.error('File '.concat(n.name, ' was rejected'));
                    }),
                  a && o.length > 0 && o.length <= N)
                ) {
                  var u = o.length > 0 ? ''.concat(o.length, ' files') : 'file';
                  g.Am.promise(a(o), {
                    loading: 'Uploading '.concat(u, '...'),
                    success: function () {
                      return H([]), ''.concat(u, ' uploaded');
                    },
                    error: 'Failed to upload '.concat(u),
                  });
                }
              }
            },
            [R, N, E, a, H],
          );
        v.useEffect(function () {
          return function () {
            R &&
              R.forEach(function (e) {
                z(e) && URL.revokeObjectURL(e.preview);
              });
          };
        }, []);
        var S =
          I ||
          (null !== (n = null == R ? void 0 : R.length) && void 0 !== n
            ? n
            : 0) >= N;
        return (0, j.jsxs)('div', {
          className: 'relative flex flex-col gap-6 overflow-hidden',
          children: [
            (0, j.jsx)(p.ZP, {
              onDrop: B,
              accept: s,
              maxSize: x,
              maxFiles: N,
              multiple: N > 1 || E,
              disabled: S,
              children: function (e) {
                var n = e.getRootProps,
                  t = e.getInputProps,
                  r = e.isDragActive;
                return (0, j.jsxs)(
                  'div',
                  o()(
                    o()(
                      o()({}, n()),
                      {},
                      {
                        className: (0, b.cn)(
                          'group relative grid h-52 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-5 py-2.5 text-center transition hover:bg-muted/25',
                          'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                          r && 'border-muted-foreground/50',
                          S && 'pointer-events-none opacity-60',
                          P,
                        ),
                      },
                      _,
                    ),
                    {},
                    {
                      children: [
                        (0, j.jsx)('input', o()({}, t())),
                        r
                          ? (0, j.jsxs)('div', {
                              className:
                                'flex flex-col items-center justify-center gap-4 sm:px-5',
                              children: [
                                (0, j.jsx)('div', {
                                  className:
                                    'rounded-full border border-dashed p-3',
                                  children: (0, j.jsx)(m.Z, {
                                    className: 'size-7 text-muted-foreground',
                                    'aria-hidden': 'true',
                                  }),
                                }),
                                (0, j.jsx)('p', {
                                  className:
                                    'font-medium text-muted-foreground',
                                  children: 'Drop the files here',
                                }),
                              ],
                            })
                          : (0, j.jsxs)('div', {
                              className:
                                'flex flex-col items-center justify-center gap-4 sm:px-5',
                              children: [
                                (0, j.jsx)('div', {
                                  className:
                                    'rounded-full border border-dashed p-3',
                                  children: (0, j.jsx)(m.Z, {
                                    className: 'size-7 text-muted-foreground',
                                    'aria-hidden': 'true',
                                  }),
                                }),
                                (0, j.jsxs)('div', {
                                  className: 'flex flex-col gap-px',
                                  children: [
                                    (0, j.jsxs)('p', {
                                      className:
                                        'font-medium text-muted-foreground',
                                      children: [
                                        'Drag ',
                                        "'n'",
                                        ' drop files here, or click to select files',
                                      ],
                                    }),
                                    (0, j.jsxs)('p', {
                                      className:
                                        'text-sm text-muted-foreground/70',
                                      children: [
                                        'You can upload',
                                        N > 1
                                          ? ' '
                                              .concat(
                                                N === 1 / 0 ? 'multiple' : N,
                                                '\n                      files (up to ',
                                              )
                                              .concat((0, b.t)(x), ' each)')
                                          : ' a file with '.concat((0, b.t)(x)),
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
            null != R && R.length
              ? (0, j.jsx)(w, {
                  className: 'h-fit w-full px-3',
                  children: (0, j.jsx)('div', {
                    className: 'flex max-h-48 flex-col gap-4',
                    children:
                      null == R
                        ? void 0
                        : R.map(function (e, n) {
                            return (0, j.jsx)(
                              A,
                              {
                                file: e,
                                onRemove: function () {
                                  return (function (e) {
                                    if (R) {
                                      var n = R.filter(function (n, t) {
                                        return t !== e;
                                      });
                                      H(n), null == r || r(n);
                                    }
                                  })(n);
                                },
                                progress: null == u ? void 0 : u[e.name],
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
    10097: function (e, n, t) {
      t.d(n, {
        n: function () {
          return E;
        },
        s: function () {
          return y;
        },
      });
      var r = t(97857),
        o = t.n(r),
        a = t(96330),
        i = t(86968),
        u = t(38392),
        l = t(96486),
        d = t(62435),
        c = t(87536),
        s = t(1604),
        f = t(80499),
        m = t(84586),
        v = t(27080),
        p = t(4533),
        g = t(27591),
        x = t(2834),
        h = t(86074);
      function N(e) {
        var n = e.max,
          t = e.min,
          r = e.step,
          a = e.label,
          u = e.name,
          l = e.defaultValue,
          d = e.className,
          s = e.checkName,
          m = (0, c.Gc)(),
          N = !m.watch(s),
          b = (0, i.qM)('chat').t;
        return (0, h.jsx)(f.Wi, {
          control: m.control,
          name: u,
          defaultValue: l,
          render: function (e) {
            var i = e.field;
            return (0, h.jsxs)(f.xJ, {
              children: [
                (0, h.jsx)(f.lX, {
                  tooltip: b(''.concat(a, 'Tip')),
                  children: b(a),
                }),
                (0, h.jsxs)('div', {
                  className: (0, v.cn)(
                    'flex items-center gap-4 justify-between',
                    d,
                  ),
                  children: [
                    (0, h.jsx)(f.Wi, {
                      control: m.control,
                      name: s,
                      render: function (e) {
                        var n = e.field;
                        return (0, h.jsxs)(f.xJ, {
                          children: [
                            (0, h.jsx)(f.NI, {
                              children: (0, h.jsx)(x.r, {
                                checked: n.value,
                                onCheckedChange: n.onChange,
                              }),
                            }),
                            (0, h.jsx)(f.zG, {}),
                          ],
                        });
                      },
                    }),
                    (0, h.jsx)(f.NI, {
                      children: (0, h.jsx)(
                        p.b,
                        o()(
                          o()({}, i),
                          {},
                          { max: n, min: t, step: r, disabled: N },
                        ),
                      ),
                    }),
                    (0, h.jsx)(f.NI, {
                      children: (0, h.jsx)(
                        g.II,
                        o()(
                          {
                            disabled: N,
                            type: 'number',
                            className: 'h-7 w-20',
                            max: n,
                            min: t,
                            step: r,
                          },
                          i,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, h.jsx)(f.zG, {}),
              ],
            });
          },
        });
      }
      var b = t(66434),
        j = t(88279);
      var y = {
        llm_id: s.z.string(),
        temperature: s.z.coerce.number(),
        top_p: s.z.string(),
        presence_penalty: s.z.coerce.number(),
        frequency_penalty: s.z.coerce.number(),
        temperatureEnabled: s.z.boolean(),
        topPEnabled: s.z.boolean(),
        presencePenaltyEnabled: s.z.boolean(),
        frequencyPenaltyEnabled: s.z.boolean(),
        maxTokensEnabled: s.z.boolean(),
      };
      function E(e) {
        var n = e.prefix,
          t = (0, c.Gc)(),
          r = (0, i.qM)('chat').t,
          s = (0, u.T)([a.Vr.Chat, a.Vr.Image2text]),
          v = (function () {
            var e = (0, c.Gc)(),
              n = (0, d.useContext)(b.p7),
              t = (0, j.Z)(function (e) {
                return e.updateNodeForm;
              });
            return (0, d.useCallback)(
              function (r) {
                var i = o()({}, e.getValues()),
                  u = a.S8[r],
                  l = o()(o()({}, i), u);
                for (var d in (null != n &&
                  n.id &&
                  t(null == n ? void 0 : n.id, l),
                u))
                  if (Object.prototype.hasOwnProperty.call(u, d)) {
                    var c = u[d];
                    e.setValue(d, c);
                  }
              },
              [e, n, t],
            );
          })(),
          p = Object.values(a.oQ).map(function (e) {
            return { label: r((0, l.camelCase)(e)), value: e };
          }),
          g = (0, d.useCallback)(
            function (e) {
              return n ? ''.concat(n, '.').concat(e) : e;
            },
            [n],
          );
        return (0, h.jsxs)('div', {
          className: 'space-y-5',
          children: [
            (0, h.jsx)(f.Wi, {
              control: t.control,
              name: 'llm_id',
              render: function (e) {
                var n = e.field;
                return (0, h.jsxs)(f.xJ, {
                  children: [
                    (0, h.jsx)(f.lX, { children: r('model') }),
                    (0, h.jsx)(f.NI, {
                      children: (0, h.jsxs)(
                        m.Ph,
                        o()(
                          o()({ onValueChange: n.onChange }, n),
                          {},
                          {
                            children: [
                              (0, h.jsx)(m.i4, {
                                value: n.value,
                                children: (0, h.jsx)(m.ki, {}),
                              }),
                              (0, h.jsx)(m.Bw, {
                                children: s.map(function (e) {
                                  return (0, h.jsxs)(
                                    m.DI,
                                    {
                                      children: [
                                        (0, h.jsx)(m.n5, { children: e.label }),
                                        e.options.map(function (e) {
                                          return (0, h.jsx)(
                                            m.Ql,
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
                                    e.value,
                                  );
                                }),
                              }),
                            ],
                          },
                        ),
                      ),
                    }),
                    (0, h.jsx)(f.zG, {}),
                  ],
                });
              },
            }),
            (0, h.jsx)(f.Wi, {
              control: t.control,
              name: 'parameter',
              render: function (e) {
                var n = e.field;
                return (0, h.jsxs)(f.xJ, {
                  children: [
                    (0, h.jsx)(f.lX, { children: r('freedom') }),
                    (0, h.jsx)(f.NI, {
                      children: (0, h.jsxs)(
                        m.Ph,
                        o()(
                          o()({}, n),
                          {},
                          {
                            onValueChange: function (e) {
                              v(e), n.onChange(e);
                            },
                            children: [
                              (0, h.jsx)(m.i4, {
                                children: (0, h.jsx)(m.ki, {}),
                              }),
                              (0, h.jsx)(m.Bw, {
                                children: p.map(function (e) {
                                  return (0, h.jsx)(
                                    m.Ql,
                                    { value: e.value, children: e.label },
                                    e.value,
                                  );
                                }),
                              }),
                            ],
                          },
                        ),
                      ),
                    }),
                    (0, h.jsx)(f.zG, {}),
                  ],
                });
              },
            }),
            (0, h.jsx)(N, {
              name: g('temperature'),
              checkName: 'temperatureEnabled',
              label: 'temperature',
              max: 1,
              step: 0.01,
            }),
            (0, h.jsx)(N, {
              name: g('top_p'),
              checkName: 'topPEnabled',
              label: 'topP',
              max: 1,
              step: 0.01,
            }),
            (0, h.jsx)(N, {
              name: g('presence_penalty'),
              checkName: 'presencePenaltyEnabled',
              label: 'presencePenalty',
              max: 1,
              step: 0.01,
            }),
            (0, h.jsx)(N, {
              name: g('frequency_penalty'),
              checkName: 'frequencyPenaltyEnabled',
              label: 'frequencyPenalty',
              max: 1,
              step: 0.01,
            }),
            (0, h.jsx)(N, {
              name: g('max_tokens'),
              checkName: 'maxTokensEnabled',
              label: 'maxTokens',
              max: 128e3,
            }),
          ],
        });
      }
    },
    36646: function (e, n, t) {
      t.d(n, {
        m: function () {
          return i;
        },
      });
      var r = t(53219),
        o = t(57636),
        a = t(86074);
      function i(e) {
        var n = e.back,
          t = e.title,
          i = e.children;
        return (0, a.jsxs)('header', {
          className: 'flex justify-between items-center border-b pr-9',
          children: [
            (0, a.jsxs)('div', {
              className: 'flex items-center ',
              children: [
                (0, a.jsx)('div', {
                  className: 'flex items-center border-r p-1.5',
                  children: (0, a.jsx)(o.zx, {
                    variant: 'ghost',
                    size: 'icon',
                    onClick: n,
                    children: (0, a.jsx)(r.Z, { className: 'w-5 h-5' }),
                  }),
                }),
                (0, a.jsx)('div', {
                  className: 'p-4',
                  children: (0, a.jsx)('h1', {
                    className: 'text-2xl font-semibold tracking-tight',
                    children: t,
                  }),
                }),
              ],
            }),
            i,
          ],
        });
      }
    },
    77631: function (e, n, t) {
      t.d(n, {
        E: function () {
          return f;
        },
      });
      var r = t(97857),
        o = t.n(r),
        a = t(13769),
        i = t.n(a),
        u = t(44920),
        l = t(62435),
        d = t(27080),
        c = t(86074),
        s = ['className', 'value'],
        f = l.forwardRef(function (e, n) {
          var t = e.className,
            r = e.value,
            a = i()(e, s);
          return (0, c.jsx)(
            u.fC,
            o()(
              o()(
                {
                  ref: n,
                  className: (0, d.cn)(
                    'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
                    t,
                  ),
                },
                a,
              ),
              {},
              {
                children: (0, c.jsx)(u.z$, {
                  className: 'h-full w-full flex-1 bg-primary transition-all',
                  style: {
                    transform: 'translateX(-'.concat(100 - (r || 0), '%)'),
                  },
                }),
              },
            ),
          );
        });
      f.displayName = u.fC.displayName;
    },
    79720: function (e, n, t) {
      t.d(n, {
        A: function () {
          return p;
        },
        g: function () {
          return v;
        },
      });
      var r = t(5574),
        o = t.n(r),
        a = t(97857),
        i = t.n(a),
        u = t(13769),
        l = t.n(u),
        d = t(62435),
        c = t(27080),
        s = t(86074),
        f = ['className'],
        m = ['value', 'onChange'],
        v = d.forwardRef(function (e, n) {
          var t = e.className,
            r = l()(e, f);
          return (0, s.jsx)(
            'textarea',
            i()(
              {
                className: (0, c.cn)(
                  'flex min-h-[80px] w-full rounded-md border border-input bg-colors-background-inverse-weak px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm overflow-hidden',
                  t,
                ),
                ref: n,
              },
              r,
            ),
          );
        });
      v.displayName = 'Textarea';
      var p = d.forwardRef(function (e, n) {
        var t = e.value,
          r = e.onChange,
          a = l()(e, m),
          u = d.useState(),
          c = o()(u, 2),
          f = c[0],
          p = c[1],
          g = d.useCallback(function (e) {
            p(e.target.value);
          }, []),
          x = d.useCallback(
            function (e) {
              null == r || r(e.target.value);
            },
            [r],
          );
        return (
          d.useEffect(
            function () {
              p(t);
            },
            [t],
          ),
          (0, s.jsx)(
            v,
            i()(i()({}, a), {}, { value: f, onBlur: x, onChange: g, ref: n }),
          )
        );
      });
    },
    66434: function (e, n, t) {
      t.d(n, {
        O0: function () {
          return u;
        },
        Tp: function () {
          return a;
        },
        Zh: function () {
          return i;
        },
        mV: function () {
          return l;
        },
        p7: function () {
          return o;
        },
      });
      var r = t(62435),
        o = (0, r.createContext)(void 0),
        a = (0, r.createContext)({}),
        i = (0, r.createContext)({}),
        u = (0, r.createContext)({}),
        l = (0, r.createContext)({});
    },
    88279: function (e, n, t) {
      var r = t(97857),
        o = t.n(r),
        a = t(9783),
        i = t.n(a),
        u = t(19632),
        l = t.n(u),
        d = t(86983),
        c = t(83859),
        s = t(96486),
        f = t(29521),
        m = t.n(f),
        v = t(33856),
        p = t.n(v),
        g = t(36968),
        x = t.n(g),
        h = t(73445),
        N = t(782),
        b = t(91559),
        j = t(48230),
        y = t(8342),
        E = t(18914),
        C = (0, h.Ue)()(
          (0, N.mW)(
            (0, b.n)(function (e, n) {
              return {
                nodes: [],
                edges: [],
                selectedNodeIds: [],
                selectedEdgeIds: [],
                clickedNodeId: '',
                clickedToolId: '',
                onNodesChange: function (t) {
                  e({ nodes: (0, d.Fb)(t, n().nodes) });
                },
                onEdgesChange: function (t) {
                  e({ edges: (0, d.yn)(t, n().edges) });
                },
                onEdgeMouseEnter: function (e, t) {
                  var r = n(),
                    o = r.edges,
                    a = r.setEdges,
                    i = t.id;
                  a((0, y.pi)(o, i, !0));
                },
                onEdgeMouseLeave: function (e, t) {
                  var r = n(),
                    o = r.edges,
                    a = r.setEdges,
                    i = t.id;
                  a((0, y.pi)(o, i, !1));
                },
                onConnect: function (t) {
                  var r = n(),
                    o = r.deletePreviousEdgeOfClassificationNode,
                    a = r.updateFormDataOnConnect;
                  e({ edges: (0, c.Z_)(t, n().edges) }), o(t), a(t);
                },
                onSelectionChange: function (n) {
                  var t = n.nodes,
                    r = n.edges;
                  e({
                    selectedEdgeIds: r.map(function (e) {
                      return e.id;
                    }),
                    selectedNodeIds: t.map(function (e) {
                      return e.id;
                    }),
                  });
                },
                setNodes: function (n) {
                  e({ nodes: n });
                },
                setEdges: function (n) {
                  e({ edges: n });
                },
                setEdgesByNodeId: function (e, t) {
                  var r = n(),
                    o = r.edges,
                    a = r.setEdges,
                    i = o.filter(function (n) {
                      return n.source === e;
                    }),
                    u =
                      i.length !== t.length ||
                      !i.every(function (e) {
                        return t.some(function (n) {
                          return (
                            n.source === e.source &&
                            n.target === e.target &&
                            n.sourceHandle === e.sourceHandle
                          );
                        });
                      }) ||
                      !t.every(function (e) {
                        return i.some(function (n) {
                          return (
                            n.source === e.source &&
                            n.target === e.target &&
                            n.sourceHandle === e.sourceHandle
                          );
                        });
                      }),
                    d = p()(i, t, y.Pc);
                  if (u) {
                    var c = o.filter(function (n) {
                        return n.source !== e;
                      }),
                      s = m()(t, d, y.Pc);
                    a([].concat(l()(c), l()(d), l()(s)));
                  }
                },
                addNode: function (t) {
                  e({ nodes: n().nodes.concat(t) });
                },
                getNode: function (e) {
                  return n().nodes.find(function (n) {
                    return n.id === e;
                  });
                },
                getOperatorTypeFromId: function (e) {
                  var t;
                  return null === (t = n().getNode(e)) ||
                    void 0 === t ||
                    null === (t = t.data) ||
                    void 0 === t
                    ? void 0
                    : t.label;
                },
                getParentIdById: function (e) {
                  var t;
                  return null === (t = n().getNode(e)) || void 0 === t
                    ? void 0
                    : t.parentId;
                },
                addEdge: function (t) {
                  e({ edges: (0, c.Z_)(t, n().edges) }),
                    n().deletePreviousEdgeOfClassificationNode(t),
                    n().updateFormDataOnConnect(t);
                },
                getEdge: function (e) {
                  return n().edges.find(function (n) {
                    return n.id === e;
                  });
                },
                updateFormDataOnConnect: function (e) {
                  var t = n(),
                    r = t.getOperatorTypeFromId,
                    o = t.updateNodeForm,
                    a = t.updateSwitchFormData,
                    u = e.source,
                    l = e.target,
                    d = e.sourceHandle,
                    c = r(u);
                  if (u)
                    switch (c) {
                      case j.EF.Relevant:
                        o(u, i()({}, d, l));
                        break;
                      case j.EF.Categorize:
                        d && o(u, l, ['category_description', d, 'to']);
                        break;
                      case j.EF.Switch:
                        a(u, d, l, !0);
                    }
                },
                deletePreviousEdgeOfClassificationNode: function (e) {
                  var t = n(),
                    r = t.edges,
                    o = t.getOperatorTypeFromId,
                    a = t.deleteEdgeById;
                  if (
                    [j.EF.Categorize, j.EF.Relevant].some(function (n) {
                      return n === o(e.source);
                    })
                  ) {
                    var i = r.find(function (n) {
                      return (
                        n.source === e.source &&
                        n.sourceHandle === e.sourceHandle &&
                        n.target !== e.target
                      );
                    });
                    i && a(i.id);
                  }
                },
                duplicateNode: function (e, t) {
                  var r,
                    a = n(),
                    i = a.getNode,
                    u = a.addNode,
                    l = a.generateNodeName,
                    d = a.duplicateIterationNode,
                    c = i(e);
                  (null == c ? void 0 : c.data.label) !== j.EF.Iteration
                    ? u(
                        o()(
                          o()({}, c || {}),
                          {},
                          {
                            data: o()(
                              o()({}, (0, y.dK)(null == c ? void 0 : c.data)),
                              {},
                              { name: l(t) },
                            ),
                          },
                          (0, y.fP)(
                            null == c ? void 0 : c.position,
                            null == c || null === (r = c.data) || void 0 === r
                              ? void 0
                              : r.label,
                          ),
                        ),
                      )
                    : d(e, t);
                },
                duplicateIterationNode: function (t, r) {
                  var a,
                    i = n(),
                    u = i.getNode,
                    d = i.generateNodeName,
                    c = i.nodes,
                    f = u(t),
                    m = o()(
                      o()({}, f || {}),
                      {},
                      {
                        data: o()(
                          o()(
                            {},
                            (null == f ? void 0 : f.data) || {
                              label: j.EF.Iteration,
                              form: {},
                            },
                          ),
                          {},
                          { name: d(r) },
                        ),
                      },
                      (0, y.fP)(
                        null == f ? void 0 : f.position,
                        null == f || null === (a = f.data) || void 0 === a
                          ? void 0
                          : a.label,
                      ),
                    ),
                    v = c
                      .filter(function (e) {
                        return e.parentId === (null == f ? void 0 : f.id);
                      })
                      .map(function (e) {
                        var n;
                        return o()(
                          o()(
                            o()({}, e || {}),
                            {},
                            {
                              data: o()(
                                o()({}, (0, y.dK)(null == e ? void 0 : e.data)),
                                {},
                                { name: d(e.data.name) },
                              ),
                            },
                            (0, s.omit)(
                              (0, y.fP)(
                                null == e ? void 0 : e.position,
                                null == e ||
                                  null === (n = e.data) ||
                                  void 0 === n
                                  ? void 0
                                  : n.label,
                              ),
                              ['position'],
                            ),
                          ),
                          {},
                          { parentId: m.id },
                        );
                      });
                  e({ nodes: c.concat.apply(c, [m].concat(l()(v))) });
                },
                deleteEdge: function () {
                  var t = n(),
                    r = t.edges,
                    o = t.selectedEdgeIds;
                  e({
                    edges: r.filter(function (e) {
                      return o.every(function (n) {
                        return n !== e.id;
                      });
                    }),
                  });
                },
                deleteEdgeById: function (t) {
                  var r = n(),
                    o = r.edges,
                    a = r.updateNodeForm,
                    u = r.getOperatorTypeFromId,
                    l = r.updateSwitchFormData,
                    d = o.find(function (e) {
                      return e.id === t;
                    });
                  if (d) {
                    var c = d.source,
                      s = d.sourceHandle,
                      f = d.target;
                    switch (u(c)) {
                      case j.EF.Relevant:
                        a(c, i()({}, s, void 0));
                        break;
                      case j.EF.Categorize:
                        s && a(c, void 0, ['category_description', s, 'to']);
                        break;
                      case j.EF.Switch:
                        l(c, s, f, !1);
                    }
                  }
                  e({
                    edges: o.filter(function (e) {
                      return e.id !== t;
                    }),
                  });
                },
                deleteEdgeBySourceAndSourceHandle: function (t) {
                  var r = t.source,
                    o = t.sourceHandle,
                    a = n().edges.filter(function (e) {
                      return e.source !== r || e.sourceHandle !== o;
                    });
                  e({ edges: a });
                },
                deleteNodeById: function (t) {
                  var r = n(),
                    o = r.nodes,
                    a = r.edges,
                    i = r.getOperatorTypeFromId,
                    u = r.deleteAgentDownstreamNodesById;
                  i(t) !== j.EF.Agent
                    ? e({
                        nodes: o.filter(function (e) {
                          return e.id !== t;
                        }),
                        edges: a
                          .filter(function (e) {
                            return e.source !== t;
                          })
                          .filter(function (e) {
                            return e.target !== t;
                          }),
                      })
                    : u(t);
                },
                deleteAgentDownstreamNodesById: function (t) {
                  var r = n(),
                    o = r.edges,
                    a = r.nodes,
                    i = (0, E.N)(t, o),
                    u = i.downstreamAgentAndToolNodeIds,
                    l = i.downstreamAgentAndToolEdges;
                  e({
                    nodes: a.filter(function (e) {
                      return (
                        !u.some(function (n) {
                          return n === e.id;
                        }) && e.id !== t
                      );
                    }),
                    edges: o.filter(function (e) {
                      return (
                        e.source !== t &&
                        e.target !== t &&
                        !l.some(function (n) {
                          return n.id === e.id;
                        })
                      );
                    }),
                  });
                },
                deleteAgentToolNodeById: function (e) {
                  var t = n(),
                    r = t.edges,
                    o = t.deleteEdgeById,
                    a = t.deleteNodeById,
                    i = r.find(function (n) {
                      return n.source === e && n.sourceHandle === j.y_.Tool;
                    });
                  i && (o(i.id), a(i.target));
                },
                deleteIterationNodeById: function (t) {
                  var r = n(),
                    o = r.nodes,
                    a = r.edges,
                    i = o.filter(function (e) {
                      return e.parentId === t;
                    });
                  e({
                    nodes: o.filter(function (e) {
                      return e.id !== t && e.parentId !== t;
                    }),
                    edges: a.filter(function (e) {
                      return (
                        e.source !== t &&
                        e.target !== t &&
                        !i.some(function (n) {
                          return e.source === n.id && e.target === n.id;
                        })
                      );
                    }),
                  });
                },
                findNodeByName: function (e) {
                  return n().nodes.find(function (n) {
                    return n.data.label === e;
                  });
                },
                updateNodeForm: function (t, r) {
                  var a =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [],
                    i = n().nodes.map(function (e) {
                      if (e.id === t) {
                        var n = o()({}, e.data.form);
                        return (
                          0 === a.length
                            ? (n = Object.assign(n, r))
                            : x()(n, a, r),
                          o()(
                            o()({}, e),
                            {},
                            { data: o()(o()({}, e.data), {}, { form: n }) },
                          )
                        );
                      }
                      return e;
                    });
                  return e({ nodes: i }), i;
                },
                updateSwitchFormData: function (e, t, r, o) {
                  var a = n(),
                    i = a.updateNodeForm,
                    u = a.edges;
                  if (t) {
                    var l = u
                        .filter(function (n) {
                          return (
                            n.source === e &&
                            n.sourceHandle === t &&
                            'string' == typeof n.target
                          );
                        })
                        .map(function (e) {
                          return e.target;
                        }),
                      d = l;
                    if (
                      (r &&
                        (o ||
                          (d = l.filter(function (e) {
                            return e !== r;
                          }))),
                      t === j.ky)
                    )
                      i(e, d, [j.ky]);
                    else {
                      var c = (0, y.MY)(t);
                      c && i(e, d, ['conditions', Number(c) - 1, 'to']);
                    }
                  }
                },
                updateMutableNodeFormItem: function (e, t, r) {
                  var o = n().nodes,
                    a = o.findIndex(function (n) {
                      return n.id === e;
                    });
                  a && x()(o, [a, 'data', 'form', t], r);
                },
                updateNodeName: function (t, r) {
                  t &&
                    e({
                      nodes: n().nodes.map(function (e) {
                        return e.id === t && (e.data.name = r), e;
                      }),
                    });
                },
                setClickedNodeId: function (n) {
                  e({ clickedNodeId: n });
                },
                generateNodeName: function (e) {
                  var t = n().nodes;
                  return (0, y.oN)(e, t);
                },
                setClickedToolId: function (n) {
                  e({ clickedToolId: n });
                },
                findUpstreamNodeById: function (e) {
                  var t = n(),
                    r = t.edges,
                    o = t.getNode,
                    a = r.find(function (n) {
                      return n.target === e;
                    });
                  return o(null == a ? void 0 : a.source);
                },
              };
            }),
            { name: 'graph', trace: !0 },
          ),
        );
      n.Z = C;
    },
    8342: function (e, n, t) {
      t.d(n, {
        Hl: function () {
          return T;
        },
        JO: function () {
          return A;
        },
        LK: function () {
          return I;
        },
        ML: function () {
          return j;
        },
        MY: function () {
          return b;
        },
        Nm: function () {
          return P;
        },
        Pc: function () {
          return N;
        },
        RV: function () {
          return y;
        },
        UE: function () {
          return x;
        },
        Ym: function () {
          return k;
        },
        dK: function () {
          return w;
        },
        dw: function () {
          return _;
        },
        fP: function () {
          return z;
        },
        ge: function () {
          return h;
        },
        gw: function () {
          return O;
        },
        jW: function () {
          return F;
        },
        oN: function () {
          return C;
        },
        pi: function () {
          return R;
        },
      });
      var r = t(64599),
        o = t.n(r),
        a = t(97857),
        i = t.n(a),
        u = (t(19632), t(5574), t(51418)),
        l = t(99363),
        d = t(96486),
        c = t(46898),
        s = t.n(c),
        f = (t(13218), t(48230)),
        m = function (e, n) {
          var t =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0;
          return e
            .filter(function (e) {
              var o = r.find(function (e) {
                  return e.id === n;
                }),
                a = !0;
              return (
                t &&
                  (null == o ? void 0 : o.data.label) === f.EF.Agent &&
                  (a = !e.target.startsWith(f.EF.Tool)),
                e[t ? 'source' : 'target'] === n && a
              );
            })
            .map(function (e) {
              return e[t ? 'target' : 'source'];
            });
        },
        v = (0, d.curry)(function (e, n) {
          return e === f.EF.Generate || e === f.EF.Categorize
            ? (0, u.R5)(n, '')
            : n;
        }),
        p = function (e) {
          return s()(v(e));
        },
        g = [f.EF.Note, f.EF.Tool],
        x = function (e, n, t) {
          var r = {};
          return (
            null == e ||
              e
                .filter(function (e) {
                  return !g.some(function (n) {
                    return n === e.data.label;
                  });
                })
                .forEach(function (o) {
                  var a,
                    u,
                    l,
                    d = o.id,
                    c = o.data.label;
                  r[d] = {
                    obj: i()(
                      i()(
                        {},
                        null !==
                          (a =
                            null === (u = t[d]) || void 0 === u
                              ? void 0
                              : u.obj) && void 0 !== a
                          ? a
                          : {},
                      ),
                      {},
                      {
                        component_name: c,
                        params:
                          null !== (l = p(c)(o.data.form)) && void 0 !== l
                            ? l
                            : {},
                      },
                    ),
                    downstream: m(n, d, !0, e),
                    upstream: m(n, d, !1, e),
                    parent_id: null == o ? void 0 : o.parentId,
                  };
                }),
            r
          );
        },
        h = function (e) {
          var n;
          return (
            e &&
            (200 !== (null == e ? void 0 : e.response.status) ||
              0 !==
                (null == e || null === (n = e.data) || void 0 === n
                  ? void 0
                  : n.code))
          );
        },
        N = function (e, n) {
          return (
            e.source === n.source &&
            e.target === n.target &&
            e.sourceHandle === n.sourceHandle
          );
        },
        b = function (e) {
          return e.split(' ').at(-1);
        },
        j = function (e) {
          return 'Case '.concat(e + 1);
        },
        y = function (e) {
          return e === f.EF.Note ? '.note-drag-handle' : void 0;
        },
        E = function (e) {
          var n = e.split('_');
          return { type: n.at(0), index: Number(n.at(-1)) };
        },
        C = function (e, n) {
          for (
            var t = n
                .filter(function (n) {
                  var t,
                    r = n.data.name,
                    o = E(r),
                    a = o.type,
                    i = o.index;
                  return (
                    1 ===
                      (null === (t = r.match(/_/g)) || void 0 === t
                        ? void 0
                        : t.length) &&
                    a === e &&
                    !isNaN(i)
                  );
                })
                .map(function (e) {
                  var n = e.data.name;
                  return { idx: E(n).index, name: n };
                })
                .sort(function (e, n) {
                  return e.idx - n.idx;
                }),
              r = 0,
              o = 0;
            o < t.length;
            o++
          ) {
            var a,
              i,
              u = null === (a = t[o]) || void 0 === a ? void 0 : a.idx;
            if (
              u + 1 !==
              (null === (i = t[o + 1]) || void 0 === i ? void 0 : i.idx)
            ) {
              r = u + 1;
              break;
            }
          }
          return ''.concat(e, '_').concat(r);
        },
        w = function (e) {
          var n,
            t = i()(
              {},
              null !== (n = null == e ? void 0 : e.form) && void 0 !== n
                ? n
                : {},
            );
          return (
            (null == e ? void 0 : e.label) === f.EF.Categorize &&
              (t.category_description = Object.keys(
                t.category_description,
              ).reduce(function (e, n) {
                return (
                  (e[n] = i()(
                    i()({}, t.category_description[n]),
                    {},
                    { to: void 0 },
                  )),
                  e
                );
              }, {})),
            (null == e ? void 0 : e.label) === f.EF.Relevant &&
              ((t.yes = void 0), (t.no = void 0)),
            i()(i()({}, null != e ? e : { label: '' }), {}, { form: t })
          );
        },
        I = function () {
          return window.innerWidth > 1278 ? '40%' : 470;
        },
        k = function (e) {
          return !f.zJ.some(function (n) {
            return e === n;
          });
        };
      function F(e, n) {
        if (n) {
          var t,
            r = e.filter(function (e) {
              return e.data.label === f.EF.Iteration;
            }),
            a = o()(r);
          try {
            for (a.s(); !(t = a.n()).done; ) {
              var i = t.value,
                u = i.position,
                l = u.x,
                d = u.y,
                c = i.width,
                s = i.height,
                m = (c || 0) / 2;
              if (
                n.x >= l - m &&
                n.x <= l + m &&
                n.y >= d &&
                n.y <= d + (s || 0)
              )
                return {
                  parentId: i.id,
                  position: { x: n.x - l + m, y: n.y - d },
                };
            }
          } catch (e) {
            a.e(e);
          } finally {
            a.f();
          }
        }
      }
      var z = function (e, n) {
        var t = {
          x: ((null == e ? void 0 : e.x) || 0) + 50,
          y: ((null == e ? void 0 : e.y) || 0) + 50,
        };
        return {
          selected: !1,
          dragging: !1,
          id: ''.concat(n, ':').concat((0, l.humanId)()),
          position: t,
          dragHandle: y(n),
        };
      };
      function P(e) {
        return Array.isArray(e)
          ? e.map(function (e) {
              return e.value;
            })
          : [];
      }
      function A(e) {
        return Array.isArray(e)
          ? e.map(function (e) {
              return { value: e };
            })
          : [];
      }
      var _ = function (e) {
          return Object.keys(e)
            .reduce(function (n, t) {
              return (
                n.push(
                  i()(
                    i()({ name: t }, e[t]),
                    {},
                    { examples: A(e[t].examples) },
                  ),
                ),
                n
              );
            }, [])
            .sort(function (e, n) {
              return e.index - n.index;
            });
        },
        T = function (e) {
          return e.reduce(function (e, n) {
            return (
              null != n &&
                n.name &&
                (e[n.name] = i()(
                  i()({}, (0, d.omit)(n, 'name', 'examples')),
                  {},
                  { examples: P(n.examples) },
                )),
              e
            );
          }, {});
        };
      function O(e) {
        return (0, d.get)(e, 'data.form.tools', []);
      }
      function R(e, n, t) {
        return e.map(function (e) {
          return e.id === n
            ? i()(
                i()({}, e),
                {},
                { data: i()(i()({}, e.data), {}, { isHovered: t }) },
              )
            : e;
        });
      }
    },
    18914: function (e, n, t) {
      t.d(n, {
        N: function () {
          return a;
        },
      });
      var r = t(48230);
      function o(e, n) {
        return n.reduce(function (n, t) {
          var a = e
            .filter(function (e) {
              return (
                e.source === t &&
                (e.sourceHandle === r.y_.AgentBottom ||
                  e.sourceHandle === r.y_.Tool)
              );
            })
            .map(function (e) {
              return e.target;
            });
          return (
            a.concat(o(e, a)).forEach(function (e) {
              n.every(function (n) {
                return n !== e;
              }) && n.push(e);
            }),
            n
          );
        }, []);
      }
      function a(e, n) {
        var t = o(n, [e]),
          r = t.reduce(function (e, t) {
            return (
              n
                .filter(function (e) {
                  return e.source === t || e.target === t;
                })
                .forEach(function (n) {
                  e.some(function (e) {
                    return e.id !== n.id;
                  }) || e.push(n);
                }),
              e
            );
          }, []);
        return {
          downstreamAgentAndToolNodeIds: t,
          downstreamAgentAndToolEdges: r,
        };
      }
    },
  },
]);
//# sourceMappingURL=8041.1f937de0.async.js.map
