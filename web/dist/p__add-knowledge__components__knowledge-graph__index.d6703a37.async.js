/*! For license information please see p__add-knowledge__components__knowledge-graph__index.d6703a37.async.js.LICENSE.txt */
'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [7081],
  {
    26625: function (e, t, n) {
      n.d(t, {
        h: function () {
          return O;
        },
      });
      var r = n(97857),
        a = n.n(r),
        o = n(13769),
        l = n.n(o),
        i = n(67007),
        s = n(62435),
        c = n(57636),
        d = n(27080),
        u = n(86074),
        f = ['className'],
        p = ['className'],
        m = ['className'],
        v = ['className'],
        h = ['className'],
        g = ['className'],
        y = ['className'],
        x = ['className'],
        N = i.fC,
        b = i.xz,
        j = i.h_,
        w = s.forwardRef(function (e, t) {
          var n = e.className,
            r = l()(e, f);
          return (0, u.jsx)(
            i.aV,
            a()(
              a()(
                {
                  className: (0, d.cn)(
                    'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    n,
                  ),
                },
                r,
              ),
              {},
              { ref: t },
            ),
          );
        });
      w.displayName = i.aV.displayName;
      var D = s.forwardRef(function (e, t) {
        var n = e.className,
          r = l()(e, p);
        return (0, u.jsxs)(j, {
          children: [
            (0, u.jsx)(w, {}),
            (0, u.jsx)(
              i.VY,
              a()(
                {
                  ref: t,
                  className: (0, d.cn)(
                    'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-colors-background-neutral-standard p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                    n,
                  ),
                },
                r,
              ),
            ),
          ],
        });
      });
      D.displayName = i.VY.displayName;
      var k = function (e) {
        var t = e.className,
          n = l()(e, m);
        return (0, u.jsx)(
          'div',
          a()(
            {
              className: (0, d.cn)(
                'flex flex-col space-y-2 text-center sm:text-left',
                t,
              ),
            },
            n,
          ),
        );
      };
      k.displayName = 'AlertDialogHeader';
      var A = function (e) {
        var t = e.className,
          n = l()(e, v);
        return (0, u.jsx)(
          'div',
          a()(
            {
              className: (0, d.cn)(
                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                t,
              ),
            },
            n,
          ),
        );
      };
      A.displayName = 'AlertDialogFooter';
      var R = s.forwardRef(function (e, t) {
        var n = e.className,
          r = l()(e, h);
        return (0, u.jsx)(
          i.Dx,
          a()({ ref: t, className: (0, d.cn)('text-lg font-semibold', n) }, r),
        );
      });
      (R.displayName = i.Dx.displayName),
        (s.forwardRef(function (e, t) {
          var n = e.className,
            r = l()(e, g);
          return (0, u.jsx)(
            i.dk,
            a()(
              {
                ref: t,
                className: (0, d.cn)('text-sm text-muted-foreground', n),
              },
              r,
            ),
          );
        }).displayName = i.dk.displayName);
      var _ = s.forwardRef(function (e, t) {
        var n = e.className,
          r = l()(e, y);
        return (0, u.jsx)(
          i.aU,
          a()({ ref: t, className: (0, d.cn)((0, c.dc)(), n) }, r),
        );
      });
      _.displayName = i.aU.displayName;
      var C = s.forwardRef(function (e, t) {
        var n = e.className,
          r = l()(e, x);
        return (0, u.jsx)(
          i.$j,
          a()(
            {
              ref: t,
              className: (0, d.cn)(
                (0, c.dc)({ variant: 'outline' }),
                'mt-2 sm:mt-0',
                n,
              ),
            },
            r,
          ),
        );
      });
      C.displayName = i.$j.displayName;
      var z = n(67421);
      function O(e) {
        var t = e.children,
          n = e.title,
          r = e.onOk,
          a = e.onCancel,
          o = e.hidden,
          l = void 0 !== o && o,
          i = (0, z.$G)().t;
        return l
          ? t
          : (0, u.jsxs)(N, {
              children: [
                (0, u.jsx)(b, { asChild: !0, children: t }),
                (0, u.jsxs)(D, {
                  onSelect: function (e) {
                    return e.preventDefault();
                  },
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                  children: [
                    (0, u.jsx)(k, {
                      children: (0, u.jsx)(R, {
                        children: null != n ? n : i('common.deleteModalTitle'),
                      }),
                    }),
                    (0, u.jsxs)(A, {
                      children: [
                        (0, u.jsx)(C, {
                          onClick: a,
                          children: i('common.cancel'),
                        }),
                        (0, u.jsx)(_, {
                          className: 'bg-text-delete-red text-text-title',
                          onClick: r,
                          children: i('common.ok'),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
    },
    21896: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        });
      var r = n(26625),
        a = n(57636),
        o = n(10541),
        l = n(13718),
        i = n(62435),
        s = n(67421),
        c = n(97857),
        d = n.n(c),
        u = n(38622),
        f = n(41609),
        p = n.n(f),
        m = (n(12444), n(72004), n(9783), n(96486), n(57632)),
        v = function (e) {
          return Array.isArray(e) ? e[0] : void 0;
        },
        h = 'forceContainer___PdykR',
        g = n(86074),
        y = { combo: 'red', node: 'black', edge: 'blue' },
        x = function (e) {
          var t = e.data,
            n = e.show,
            r = (0, i.useRef)(null),
            a = (0, i.useRef)(null),
            o = (0, i.useMemo)(
              function () {
                if (!p()(t)) {
                  var e = t,
                    n =
                      ((r = e.nodes),
                      (a = []),
                      r.forEach(function (e) {
                        var t = v(null == e ? void 0 : e.communities);
                        t &&
                          a.every(function (e) {
                            return e.data.label !== t;
                          }) &&
                          a.push({
                            isCombo: !0,
                            id: (0, m.Z)(),
                            data: { label: t },
                          });
                      }),
                      {
                        nodes: r.map(function (e) {
                          var t;
                          return d()(
                            d()({}, e),
                            {},
                            {
                              combo:
                                null ===
                                  (t = a.find(function (t) {
                                    return (
                                      t.data.label ===
                                      v(null == e ? void 0 : e.communities)
                                    );
                                  })) || void 0 === t
                                  ? void 0
                                  : t.id,
                            },
                          );
                        }),
                        combos: a,
                      });
                  return d()({ edges: e.edges }, n);
                }
                var r, a;
                return { nodes: [], edges: [] };
              },
              [t],
            ),
            l = (0, i.useCallback)(
              function () {
                var e = new u.kJ({
                  container: r.current,
                  autoFit: 'view',
                  autoResize: !0,
                  behaviors: [
                    'drag-element',
                    'drag-canvas',
                    'zoom-canvas',
                    'collapse-expand',
                    { type: 'hover-activate', degree: 1 },
                  ],
                  plugins: [
                    {
                      type: 'tooltip',
                      enterable: !0,
                      getContent: function (e, t) {
                        if (Array.isArray(t)) {
                          var n;
                          if (
                            t.some(function (e) {
                              return null == e ? void 0 : e.isCombo;
                            })
                          )
                            return '<p style="font-weight:600;color:red">'.concat(
                              null == t ||
                                null === (n = t[0]) ||
                                void 0 === n ||
                                null === (n = n.data) ||
                                void 0 === n
                                ? void 0
                                : n.label,
                              '</p>',
                            );
                          var r = '';
                          return (
                            t.forEach(function (t) {
                              (r += '<section style="color:'
                                .concat(y[e.targetType], ';"><h3>')
                                .concat(null == t ? void 0 : t.id, '</h3>')),
                                null != t &&
                                  t.entity_type &&
                                  (r +=
                                    '<div style="padding-bottom: 6px;"><b>Entity type: </b>'.concat(
                                      null == t ? void 0 : t.entity_type,
                                      '</div>',
                                    )),
                                null != t &&
                                  t.weight &&
                                  (r += '<div><b>Weight: </b>'.concat(
                                    null == t ? void 0 : t.weight,
                                    '</div>',
                                  )),
                                null != t &&
                                  t.description &&
                                  (r += '<p>'.concat(
                                    null == t ? void 0 : t.description,
                                    '</p>',
                                  ));
                            }),
                            r + '</section>'
                          );
                        }
                      },
                    },
                  ],
                  layout: {
                    type: 'combo-combined',
                    preventOverlap: !0,
                    comboPadding: 1,
                    spacing: 100,
                  },
                  node: {
                    style: {
                      size: 150,
                      labelText: function (e) {
                        return e.id;
                      },
                      labelFontSize: 40,
                      labelOffsetY: 20,
                      labelPlacement: 'center',
                      labelWordWrap: !0,
                    },
                    palette: {
                      type: 'group',
                      field: function (e) {
                        return null == e ? void 0 : e.entity_type;
                      },
                    },
                  },
                  edge: {
                    style: function (e) {
                      var t = 4 * (Number(null == e ? void 0 : e.weight) || 2);
                      return { stroke: '#99ADD1', lineWidth: t > 10 ? 10 : t };
                    },
                  },
                });
                a.current && a.current.destroy(),
                  (a.current = e),
                  e.setData(o),
                  e.render();
              },
              [o],
            );
          return (
            (0, i.useEffect)(
              function () {
                p()(t) || l();
              },
              [t, l],
            ),
            (0, g.jsx)('div', {
              ref: r,
              className: h,
              style: {
                width: '100%',
                height: '100%',
                display: n ? 'block' : 'none',
              },
            })
          );
        },
        N = n(15009),
        b = n.n(N),
        j = n(99289),
        w = n.n(j),
        D = n(42028);
      var k = function () {
        var e,
          t,
          n,
          c,
          d,
          u = (0, o.$F)().data,
          f = (0, s.$G)().t,
          p = ((e = (0, o.Og)()),
          (t = e.removeKnowledgeGraph),
          (n = e.loading),
          (c = (0, D.s0)()),
          (d = (0, o.w9)()),
          {
            handleDeleteKnowledgeGraph: (0, i.useCallback)(
              w()(
                b()().mark(function e() {
                  return b()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t();
                        case 2:
                          0 === e.sent && c('/knowledge/dataset?id='.concat(d));
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [d, c, t],
            ),
            loading: n,
          }).handleDeleteKnowledgeGraph;
        return (0, g.jsxs)('section', {
          className: 'w-full h-full relative',
          children: [
            (0, g.jsx)(r.h, {
              onOk: p,
              children: (0, g.jsxs)(a.zx, {
                variant: 'outline',
                size: 'sm',
                className: 'absolute right-0 top-0 z-50',
                children: [(0, g.jsx)(l.Z, {}), ' ', f('common.delete')],
              }),
            }),
            (0, g.jsx)(x, { data: null == u ? void 0 : u.graph, show: !0 }),
          ],
        });
      };
    },
    13718: function (e, t, n) {
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
    67007: function (e, t, n) {
      n.d(t, {
        aU: function () {
          return M;
        },
        $j: function () {
          return T;
        },
        VY: function () {
          return G;
        },
        dk: function () {
          return I;
        },
        aV: function () {
          return Y;
        },
        h_: function () {
          return S;
        },
        fC: function () {
          return F;
        },
        Dx: function () {
          return Z;
        },
        xz: function () {
          return W;
        },
      });
      var r = n(62435),
        a = n(25360);
      function o(e, t) {
        if ('function' == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function l(...e) {
        return (t) => {
          let n = !1;
          const r = e.map((e) => {
            const r = o(e, t);
            return n || 'function' != typeof r || (n = !0), r;
          });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                const n = r[t];
                'function' == typeof n ? n() : o(e[t], null);
              }
            };
        };
      }
      function i(...e) {
        return r.useCallback(l(...e), e);
      }
      var s = n(28828);
      function c(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      var d = n(86074),
        u = r.forwardRef((e, t) => {
          const { children: n, ...a } = e,
            o = r.Children.toArray(n),
            l = o.find(m);
          if (l) {
            const e = l.props.children,
              n = o.map((t) =>
                t === l
                  ? r.Children.count(e) > 1
                    ? r.Children.only(null)
                    : r.isValidElement(e)
                      ? e.props.children
                      : null
                  : t,
              );
            return (0, d.jsx)(f, {
              ...a,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, d.jsx)(f, { ...a, ref: t, children: n });
        });
      u.displayName = 'Slot';
      var f = r.forwardRef((e, t) => {
        const { children: n, ...a } = e;
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
          return r.cloneElement(n, { ...v(a, n.props), ref: t ? l(t, e) : e });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      f.displayName = 'SlotClone';
      var p = ({ children: e }) => (0, d.jsx)(d.Fragment, { children: e });
      function m(e) {
        return r.isValidElement(e) && e.type === p;
      }
      function v(e, t) {
        const n = { ...t };
        for (const r in t) {
          const a = e[r],
            o = t[r];
          /^on[A-Z]/.test(r)
            ? a && o
              ? (n[r] = (...e) => {
                  o(...e), a(...e);
                })
              : a && (n[r] = a)
            : 'style' === r
              ? (n[r] = { ...a, ...o })
              : 'className' === r && (n[r] = [a, o].filter(Boolean).join(' '));
        }
        return { ...e, ...n };
      }
      var h = 'AlertDialog',
        [g, y] = (0, a.b)(h, [s.p8]),
        x = (0, s.p8)(),
        N = (e) => {
          const { __scopeAlertDialog: t, ...n } = e,
            r = x(t);
          return (0, d.jsx)(s.fC, { ...r, ...n, modal: !0 });
        };
      N.displayName = h;
      var b = r.forwardRef((e, t) => {
        const { __scopeAlertDialog: n, ...r } = e,
          a = x(n);
        return (0, d.jsx)(s.xz, { ...a, ...r, ref: t });
      });
      b.displayName = 'AlertDialogTrigger';
      var j = (e) => {
        const { __scopeAlertDialog: t, ...n } = e,
          r = x(t);
        return (0, d.jsx)(s.h_, { ...r, ...n });
      };
      j.displayName = 'AlertDialogPortal';
      var w = r.forwardRef((e, t) => {
        const { __scopeAlertDialog: n, ...r } = e,
          a = x(n);
        return (0, d.jsx)(s.aV, { ...a, ...r, ref: t });
      });
      w.displayName = 'AlertDialogOverlay';
      var D = 'AlertDialogContent',
        [k, A] = g(D),
        R = r.forwardRef((e, t) => {
          const { __scopeAlertDialog: n, children: a, ...o } = e,
            l = x(n),
            u = r.useRef(null),
            f = i(t, u),
            m = r.useRef(null);
          return (0, d.jsx)(s.jm, {
            contentName: D,
            titleName: _,
            docsSlug: 'alert-dialog',
            children: (0, d.jsx)(k, {
              scope: n,
              cancelRef: m,
              children: (0, d.jsxs)(s.VY, {
                role: 'alertdialog',
                ...l,
                ...o,
                ref: f,
                onOpenAutoFocus: c(o.onOpenAutoFocus, (e) => {
                  e.preventDefault(), m.current?.focus({ preventScroll: !0 });
                }),
                onPointerDownOutside: (e) => e.preventDefault(),
                onInteractOutside: (e) => e.preventDefault(),
                children: [
                  (0, d.jsx)(p, { children: a }),
                  (0, d.jsx)($, { contentRef: u }),
                ],
              }),
            }),
          });
        });
      R.displayName = D;
      var _ = 'AlertDialogTitle',
        C = r.forwardRef((e, t) => {
          const { __scopeAlertDialog: n, ...r } = e,
            a = x(n);
          return (0, d.jsx)(s.Dx, { ...a, ...r, ref: t });
        });
      C.displayName = _;
      var z = 'AlertDialogDescription',
        O = r.forwardRef((e, t) => {
          const { __scopeAlertDialog: n, ...r } = e,
            a = x(n);
          return (0, d.jsx)(s.dk, { ...a, ...r, ref: t });
        });
      O.displayName = z;
      var V = r.forwardRef((e, t) => {
        const { __scopeAlertDialog: n, ...r } = e,
          a = x(n);
        return (0, d.jsx)(s.x8, { ...a, ...r, ref: t });
      });
      V.displayName = 'AlertDialogAction';
      var E = 'AlertDialogCancel',
        P = r.forwardRef((e, t) => {
          const { __scopeAlertDialog: n, ...r } = e,
            { cancelRef: a } = A(E, n),
            o = x(n),
            l = i(t, a);
          return (0, d.jsx)(s.x8, { ...o, ...r, ref: l });
        });
      P.displayName = E;
      var $ = ({ contentRef: e }) => {
          const t = `\`${D}\` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the \`${D}\` by passing a \`${z}\` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${D}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
          return (
            r.useEffect(() => {
              document.getElementById(
                e.current?.getAttribute('aria-describedby'),
              ) || console.warn(t);
            }, [t, e]),
            null
          );
        },
        F = N,
        W = b,
        S = j,
        Y = w,
        G = R,
        M = V,
        T = P,
        Z = C,
        I = O;
    },
  },
]);
//# sourceMappingURL=p__add-knowledge__components__knowledge-graph__index.d6703a37.async.js.map
