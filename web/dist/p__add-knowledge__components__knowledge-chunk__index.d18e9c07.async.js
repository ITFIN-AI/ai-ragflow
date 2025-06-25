'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [4336],
  {
    82826: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var a = t(87462),
        c = t(62435),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'arrow-left',
          theme: 'outlined',
        },
        l = t(84089),
        r = function (e, n) {
          return c.createElement(l.Z, (0, a.Z)({}, e, { ref: n, icon: i }));
        };
      var s = c.forwardRef(r);
    },
    18429: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var a = t(87462),
        c = t(62435),
        i = {
          icon: {
            tag: 'svg',
            attrs: {
              'fill-rule': 'evenodd',
              viewBox: '64 64 896 896',
              focusable: 'false',
            },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z',
                },
              },
            ],
          },
          name: 'close-circle',
          theme: 'outlined',
        },
        l = t(84089),
        r = function (e, n) {
          return c.createElement(l.Z, (0, a.Z)({}, e, { ref: n, icon: i }));
        };
      var s = c.forwardRef(r);
    },
    93873: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return en;
          },
        });
      var a = t(97857),
        c = t.n(a),
        i = t(9783),
        l = t.n(i),
        r = t(15009),
        s = t.n(r),
        u = t(99289),
        o = t.n(u),
        d = t(19632),
        h = t.n(d),
        f = t(5574),
        k = t.n(f),
        g = t(3735),
        m = t(45360),
        x = t(96074),
        p = t(86250),
        v = t(75081),
        j = t(42075),
        C = t(11980),
        _ = t(93967),
        b = t.n(_),
        Z = t(62435),
        w = t(67421),
        M = t(43714),
        I = t(4393),
        S = t(84567),
        y = t(55241),
        z = t(72269),
        N = t(27856),
        F = t.n(N),
        P = t(98236),
        T = (function (e) {
          return (e.Full = 'full'), (e.Ellipse = 'ellipse'), e;
        })({}),
        E = 'image___fDGTe',
        L = 'imagePreview___N6faK',
        O = 'content___dvAD4',
        A = 'contentEllipsis___ku_hG',
        H = 'contentText___FFy2D',
        U = 'chunkCard___FJadg',
        q = 'cardSelected___xZpKQ',
        D = 'cardSelectedDark___mfM8g',
        R = t(86074),
        V = function (e) {
          var n = e.item,
            t = e.checked,
            a = e.handleCheckboxClick,
            c = e.editChunk,
            i = e.switchChunk,
            r = e.selected,
            s = e.clickChunkCard,
            u = e.textMode,
            o = Number(n.available_int),
            d = (0, Z.useState)(!1),
            h = k()(d, 2),
            f = h[0],
            g = h[1],
            m = (0, P.Fg)().theme;
          return (
            (0, Z.useEffect)(
              function () {
                g(1 === o);
              },
              [o],
            ),
            (0, R.jsx)(I.Z, {
              className: b()(U, l()({}, ''.concat('dark' === m ? D : q), r)),
              children: (0, R.jsxs)(p.Z, {
                gap: 'middle',
                justify: 'space-between',
                children: [
                  (0, R.jsx)(S.Z, {
                    onChange: function (e) {
                      a(n.chunk_id, e.target.checked);
                    },
                    checked: t,
                  }),
                  n.image_id &&
                    (0, R.jsx)(y.Z, {
                      placement: 'right',
                      content: (0, R.jsx)(M.Z, {
                        id: n.image_id,
                        className: L,
                      }),
                      children: (0, R.jsx)(M.Z, {
                        id: n.image_id,
                        className: E,
                      }),
                    }),
                  (0, R.jsx)('section', {
                    onDoubleClick: function () {
                      c(n.chunk_id);
                    },
                    onClick: function () {
                      s(n.chunk_id);
                    },
                    className: O,
                    children: (0, R.jsx)('div', {
                      dangerouslySetInnerHTML: {
                        __html: F().sanitize(n.content_with_weight),
                      },
                      className: b()(H, l()({}, A, u === T.Ellipse)),
                    }),
                  }),
                  (0, R.jsx)('div', {
                    children: (0, R.jsx)(z.Z, {
                      checked: f,
                      onChange: function (e) {
                        g(e), i(0 === o ? 1 : 0, [n.chunk_id]);
                      },
                    }),
                  }),
                ],
              }),
            })
          );
        },
        G = t(26572),
        B = t(48689),
        K = t(22150),
        W = t(85576),
        $ = t(79531),
        J = t(86968),
        X = t(96100),
        Q = t(5089),
        Y = function (e) {
          var n = (0, Z.useState)({ width: 849, height: 1200 }),
            t = k()(n, 2),
            a = t[0],
            c = t[1],
            i = (function (e) {
              var n,
                t,
                a = (0, g.D9)();
              return null !==
                (n =
                  null == a || null === (t = a.data) || void 0 === t
                    ? void 0
                    : t.find(function (n) {
                        return n.chunk_id === e;
                      })) && void 0 !== n
                ? n
                : {};
            })(e);
          return {
            highlights: (0, Z.useMemo)(
              function () {
                return (0, Q.q1)(i, a);
              },
              [i, a],
            ),
            setWidthAndHeight: (0, Z.useCallback)(function (e, n) {
              c(function (t) {
                return t.height !== n || t.width !== e
                  ? { height: n, width: e }
                  : t;
              });
            }, []),
          };
        },
        ee = function () {
          var e = (0, g.zt)().deleteChunk,
            n = (0, J.I3)(),
            t = (0, Z.useCallback)(
              function (n, t) {
                return function () {
                  return e({ chunkIds: n, doc_id: t });
                };
              },
              [e],
            );
          return {
            removeChunk: (0, Z.useCallback)(
              function (e, a) {
                return n({ onOk: t(e, a) });
              },
              [t, n],
            ),
          };
        };
      function ne() {
        return (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
        ).reduce(function (e, n) {
          return (e[n.tag] = n.frequency), e;
        }, {});
      }
      function te() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object.keys(e).reduce(function (n, t) {
          return n.push({ frequency: e[t], tag: t }), n;
        }, []);
      }
      var ae = t(13769),
        ce = t.n(ae),
        ie = t(10541),
        le = t(3089),
        re = t(24969),
        se = t(34041),
        ue = t(48928),
        oe = t(15867),
        de = ['key', 'name'],
        he = 'tag_feas',
        fe = function () {
          var e,
            n = K.Z.useFormInstance(),
            t = (0, w.$G)().t,
            a = (0, ie.PX)().data,
            i = (0, ie.rd)(),
            l = i.setKnowledgeIds,
            r = i.list,
            s = (0, Z.useMemo)(
              function () {
                var e, n;
                return null !==
                  (e =
                    null == a || null === (n = a.parser_config) || void 0 === n
                      ? void 0
                      : n.tag_kb_ids) && void 0 !== e
                  ? e
                  : [];
              },
              [
                null == a || null === (e = a.parser_config) || void 0 === e
                  ? void 0
                  : e.tag_kb_ids,
              ],
            ),
            u = (0, Z.useMemo)(
              function () {
                return r.map(function (e) {
                  return { value: e[0], label: e[0] };
                });
              },
              [r],
            ),
            o = (0, Z.useCallback)(
              function (e) {
                var t,
                  a = (
                    null !== (t = n.getFieldValue(he)) && void 0 !== t ? t : []
                  )
                    .filter(function (n, t) {
                      return n && e !== t;
                    })
                    .map(function (e) {
                      return e.tag;
                    });
                return u.filter(function (e) {
                  return !a.some(function (n) {
                    return e.value === n;
                  });
                });
              },
              [n, u],
            );
          return (
            (0, Z.useEffect)(
              function () {
                l(s);
              },
              [l, s],
            ),
            (0, R.jsx)(K.Z.Item, {
              label: t('knowledgeConfiguration.tags'),
              children: (0, R.jsx)(K.Z.List, {
                name: he,
                initialValue: [],
                children: function (e, n) {
                  var a = n.add,
                    i = n.remove;
                  return (0, R.jsxs)(R.Fragment, {
                    children: [
                      e.map(function (e) {
                        var n = e.key,
                          a = e.name,
                          l = ce()(e, de);
                        return (0, R.jsxs)(
                          'div',
                          {
                            className: 'flex gap-3 items-center',
                            children: [
                              (0, R.jsxs)('div', {
                                className: 'flex flex-1  gap-8',
                                children: [
                                  (0, R.jsx)(
                                    K.Z.Item,
                                    c()(
                                      c()({}, l),
                                      {},
                                      {
                                        name: [a, 'tag'],
                                        rules: [
                                          {
                                            required: !0,
                                            message: t('common.pleaseSelect'),
                                          },
                                        ],
                                        className: 'w-2/3',
                                        children: (0, R.jsx)(se.Z, {
                                          showSearch: !0,
                                          placeholder: t(
                                            'knowledgeConfiguration.tagName',
                                          ),
                                          options: o(a),
                                        }),
                                      },
                                    ),
                                  ),
                                  (0, R.jsx)(
                                    K.Z.Item,
                                    c()(
                                      c()({}, l),
                                      {},
                                      {
                                        name: [a, 'frequency'],
                                        rules: [
                                          {
                                            required: !0,
                                            message: t('common.pleaseInput'),
                                          },
                                        ],
                                        children: (0, R.jsx)(ue.Z, {
                                          placeholder: t(
                                            'knowledgeConfiguration.frequency',
                                          ),
                                          max: 10,
                                          min: 0,
                                        }),
                                      },
                                    ),
                                  ),
                                ],
                              }),
                              (0, R.jsx)(le.Z, {
                                onClick: function () {
                                  return i(a);
                                },
                                className: 'mb-6',
                              }),
                            ],
                          },
                          n,
                        );
                      }),
                      (0, R.jsx)(K.Z.Item, {
                        children: (0, R.jsx)(oe.ZP, {
                          type: 'dashed',
                          onClick: function () {
                            return a();
                          },
                          block: !0,
                          icon: (0, R.jsx)(re.Z, {}),
                          children: t('knowledgeConfiguration.addTag'),
                        }),
                      }),
                    ],
                  });
                },
              }),
            })
          );
        },
        ke = function (e) {
          var n = e.doc_id,
            t = e.chunkId,
            a = e.hideModal,
            i = e.onOk,
            l = e.loading,
            r = e.parserId,
            u = K.Z.useForm(),
            d = k()(u, 1)[0],
            h = (0, Z.useState)(!1),
            f = k()(h, 2),
            m = f[0],
            p = f[1],
            v = ee().removeChunk,
            C = (0, g.gX)(t).data,
            _ = (0, w.$G)().t,
            b = 'tag' === r,
            M = (0, Z.useCallback)(
              o()(
                s()().mark(function e() {
                  var n;
                  return s()().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), d.validateFields()
                            );
                          case 3:
                            (n = e.sent),
                              console.log('🚀 ~ handleOk ~ values:', n),
                              null == i ||
                                i(
                                  c()(
                                    c()({}, n),
                                    {},
                                    {
                                      tag_feas: ne(n.tag_feas),
                                      available_int: m ? 1 : 0,
                                    },
                                  ),
                                ),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.log('Failed:', e.t0);
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
              ),
              [m, d, i],
            ),
            I = (0, Z.useCallback)(
              function () {
                if (t) return v([t], n);
              },
              [t, n, v],
            ),
            S = (0, Z.useCallback)(
              function () {
                p(!m);
              },
              [m],
            );
          return (
            (0, Z.useEffect)(
              function () {
                if (0 === (null == C ? void 0 : C.code)) {
                  var e = C.data,
                    n = e.available_int,
                    t = e.tag_feas;
                  d.setFieldsValue(
                    c()(c()({}, C.data || {}), {}, { tag_feas: te(t) }),
                  ),
                    p(0 !== n);
                }
              },
              [C, d, t],
            ),
            (0, R.jsxs)(W.Z, {
              title: ''
                .concat(_(t ? 'common.edit' : 'common.create'), ' ')
                .concat(_('chunk.chunk')),
              open: !0,
              onOk: M,
              onCancel: a,
              okButtonProps: { loading: l },
              destroyOnClose: !0,
              children: [
                (0, R.jsxs)(K.Z, {
                  form: d,
                  autoComplete: 'off',
                  layout: 'vertical',
                  children: [
                    (0, R.jsx)(K.Z.Item, {
                      label: _('chunk.chunk'),
                      name: 'content_with_weight',
                      rules: [
                        { required: !0, message: _('chunk.chunkMessage') },
                      ],
                      children: (0, R.jsx)($.Z.TextArea, {
                        autoSize: { minRows: 4, maxRows: 10 },
                      }),
                    }),
                    (0, R.jsx)(K.Z.Item, {
                      label: _('chunk.keyword'),
                      name: 'important_kwd',
                      children: (0, R.jsx)(G.Z, {}),
                    }),
                    (0, R.jsx)(K.Z.Item, {
                      label: _('chunk.question'),
                      name: 'question_kwd',
                      tooltip: _('chunk.questionTip'),
                      children: (0, R.jsx)(G.Z, {}),
                    }),
                    b &&
                      (0, R.jsx)(K.Z.Item, {
                        label: _('knowledgeConfiguration.tagName'),
                        name: 'tag_kwd',
                        children: (0, R.jsx)(G.Z, {}),
                      }),
                    !b && (0, R.jsx)(fe, {}),
                  ],
                }),
                t &&
                  (0, R.jsxs)('section', {
                    children: [
                      (0, R.jsx)(x.Z, {}),
                      (0, R.jsxs)(j.Z, {
                        size: 'large',
                        children: [
                          (0, R.jsx)(z.Z, {
                            checkedChildren: _('chunk.enabled'),
                            unCheckedChildren: _('chunk.disabled'),
                            onChange: S,
                            checked: m,
                          }),
                          (0, R.jsxs)('span', {
                            onClick: I,
                            children: [
                              (0, R.jsx)(B.Z, {}),
                              ' ',
                              _('common.delete'),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        ge = t(93835),
        me = t(96330),
        xe = t(87462),
        pe = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z',
                },
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
                },
              },
            ],
          },
          name: 'check-circle',
          theme: 'outlined',
        },
        ve = t(84089),
        je = function (e, n) {
          return Z.createElement(ve.Z, (0, xe.Z)({}, e, { ref: n, icon: pe }));
        };
      var Ce = Z.forwardRef(je),
        _e = t(18429),
        be = t(82826),
        Ze = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M531.3 574.4l.3-1.4c5.8-23.9 13.1-53.7 7.4-80.7-3.8-21.3-19.5-29.6-32.9-30.2-15.8-.7-29.9 8.3-33.4 21.4-6.6 24-.7 56.8 10.1 98.6-13.6 32.4-35.3 79.5-51.2 107.5-29.6 15.3-69.3 38.9-75.2 68.7-1.2 5.5.2 12.5 3.5 18.8 3.7 7 9.6 12.4 16.5 15 3 1.1 6.6 2 10.8 2 17.6 0 46.1-14.2 84.1-79.4 5.8-1.9 11.8-3.9 17.6-5.9 27.2-9.2 55.4-18.8 80.9-23.1 28.2 15.1 60.3 24.8 82.1 24.8 21.6 0 30.1-12.8 33.3-20.5 5.6-13.5 2.9-30.5-6.2-39.6-13.2-13-45.3-16.4-95.3-10.2-24.6-15-40.7-35.4-52.4-65.8zM421.6 726.3c-13.9 20.2-24.4 30.3-30.1 34.7 6.7-12.3 19.8-25.3 30.1-34.7zm87.6-235.5c5.2 8.9 4.5 35.8.5 49.4-4.9-19.9-5.6-48.1-2.7-51.4.8.1 1.5.7 2.2 2zm-1.6 120.5c10.7 18.5 24.2 34.4 39.1 46.2-21.6 4.9-41.3 13-58.9 20.2-4.2 1.7-8.3 3.4-12.3 5 13.3-24.1 24.4-51.4 32.1-71.4zm155.6 65.5c.1.2.2.5-.4.9h-.2l-.2.3c-.8.5-9 5.3-44.3-8.6 40.6-1.9 45 7.3 45.1 7.4zm191.4-388.2L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z',
                },
              },
            ],
          },
          name: 'file-pdf',
          theme: 'outlined',
        },
        we = function (e, n) {
          return Z.createElement(ve.Z, (0, xe.Z)({}, e, { ref: n, icon: Ze }));
        };
      var Me = Z.forwardRef(we),
        Ie = t(80882),
        Se = t(68795),
        ye = t(22850),
        ze = t(68508),
        Ne = t(78045),
        Fe = t(92783),
        Pe = t(42028),
        Te = ye.Z.Text,
        Ee = function (e) {
          var n = e.selectAllChunk,
            t = e.checked,
            a = e.createChunk,
            c = e.removeChunk,
            i = e.switchChunk,
            l = e.changeChunkTextMode,
            r = e.available,
            s = e.handleSetAvailable,
            u = e.searchString,
            o = e.handleInputChange,
            d = (0, g.D9)(),
            h = null == d ? void 0 : d.documentInfo,
            f = (0, ie.w9)(),
            m = (0, Z.useState)(!1),
            x = k()(m, 2),
            v = x[0],
            C = x[1],
            _ = (0, J.qM)('chunk').t,
            b = (0, Z.useCallback)(
              function (e) {
                n(e.target.checked);
              },
              [n],
            ),
            w = (0, Z.useCallback)(
              function () {
                c();
              },
              [c],
            ),
            M = (0, Z.useCallback)(
              function () {
                i(1);
              },
              [i],
            ),
            I = (0, Z.useCallback)(
              function () {
                i(0);
              },
              [i],
            ),
            z = (0, Z.useMemo)(
              function () {
                return [
                  {
                    key: '1',
                    label: (0, R.jsx)(R.Fragment, {
                      children: (0, R.jsx)(S.Z, {
                        onChange: b,
                        checked: t,
                        children: (0, R.jsx)('b', { children: _('selectAll') }),
                      }),
                    }),
                  },
                  { type: 'divider' },
                  {
                    key: '2',
                    label: (0, R.jsxs)(j.Z, {
                      onClick: M,
                      children: [
                        (0, R.jsx)(Ce, {}),
                        (0, R.jsx)('b', { children: _('enabledSelected') }),
                      ],
                    }),
                  },
                  {
                    key: '3',
                    label: (0, R.jsxs)(j.Z, {
                      onClick: I,
                      children: [
                        (0, R.jsx)(_e.Z, {}),
                        (0, R.jsx)('b', { children: _('disabledSelected') }),
                      ],
                    }),
                  },
                  { type: 'divider' },
                  {
                    key: '4',
                    label: (0, R.jsxs)(j.Z, {
                      onClick: w,
                      children: [
                        (0, R.jsx)(B.Z, {}),
                        (0, R.jsx)('b', { children: _('deleteSelected') }),
                      ],
                    }),
                  },
                ];
              },
              [t, b, w, M, I, _],
            ),
            N = (0, R.jsx)(ze.Z, {
              style: { width: 200 },
              items: z,
              selectable: !1,
            }),
            F = (0, R.jsx)(Ne.ZP.Group, {
              onChange: function (e) {
                n(!1), s(e.target.value);
              },
              value: r,
              children: (0, R.jsxs)(j.Z, {
                direction: 'vertical',
                children: [
                  (0, R.jsx)(Ne.ZP, { value: void 0, children: _('all') }),
                  (0, R.jsx)(Ne.ZP, { value: 1, children: _('enabled') }),
                  (0, R.jsx)(Ne.ZP, { value: 0, children: _('disabled') }),
                ],
              }),
            });
          return (0, R.jsxs)(p.Z, {
            justify: 'space-between',
            align: 'center',
            children: [
              (0, R.jsxs)(j.Z, {
                size: 'middle',
                children: [
                  (0, R.jsx)(Pe.rU, {
                    to: '/knowledge/'.concat(me.Rx.Dataset, '?id=').concat(f),
                    children: (0, R.jsx)(be.Z, {}),
                  }),
                  (0, R.jsx)(Me, {}),
                  (0, R.jsx)(Te, {
                    ellipsis: { tooltip: null == h ? void 0 : h.name },
                    style: { width: 150 },
                    children: null == h ? void 0 : h.name,
                  }),
                ],
              }),
              (0, R.jsxs)(j.Z, {
                children: [
                  (0, R.jsx)(Fe.Z, {
                    options: [
                      { label: _(T.Full), value: T.Full },
                      { label: _(T.Ellipse), value: T.Ellipse },
                    ],
                    onChange: l,
                  }),
                  (0, R.jsx)(y.Z, {
                    content: N,
                    placement: 'bottom',
                    arrow: !1,
                    children: (0, R.jsxs)(oe.ZP, {
                      children: [_('bulk'), (0, R.jsx)(Ie.Z, {})],
                    }),
                  }),
                  v
                    ? (0, R.jsx)($.Z, {
                        size: 'middle',
                        placeholder: _('search'),
                        prefix: (0, R.jsx)(Se.Z, {}),
                        allowClear: !0,
                        onChange: o,
                        onBlur: function () {
                          (null != u && u.trim()) || C(!1);
                        },
                        value: u,
                      })
                    : (0, R.jsx)(oe.ZP, {
                        icon: (0, R.jsx)(Se.Z, {}),
                        onClick: function () {
                          C(!0);
                        },
                      }),
                  (0, R.jsx)(y.Z, {
                    content: F,
                    placement: 'bottom',
                    arrow: !1,
                    children: (0, R.jsx)(oe.ZP, { icon: (0, R.jsx)(ge.r, {}) }),
                  }),
                  (0, R.jsx)(oe.ZP, {
                    icon: (0, R.jsx)(re.Z, {}),
                    type: 'primary',
                    onClick: function () {
                      return a();
                    },
                  }),
                ],
              }),
            ],
          });
        },
        Le = t(21687),
        Oe = t(49723),
        Ae = t(60806);
      var He = t(96449),
        Ue = t(4772),
        qe = 'documentContainer___TU9k2',
        De = function (e) {
          var n = e.comment;
          return n.text
            ? (0, R.jsxs)('div', {
                className: 'Highlight__popup',
                children: [n.emoji, ' ', n.text],
              })
            : null;
        },
        Re = function (e) {
          var n,
            t = e.highlights,
            a = e.setWidthAndHeight,
            i =
              ((n = (0, X.pE)().documentId),
              (0, Z.useMemo)(
                function () {
                  return ''.concat(Ae.N, '/document/get/').concat(n);
                },
                [n],
              )),
            l = (0, Z.useRef)(function () {}),
            r = (0, He.s)(i),
            s = function () {};
          return (
            (0, Z.useEffect)(
              function () {
                t.length > 0 && (null == l || l.current(t[0]));
              },
              [t],
            ),
            (0, R.jsx)('div', {
              className: qe,
              children: (0, R.jsx)(Oe.Hz, {
                url: i,
                beforeLoad: (0, R.jsx)(Le.Z, { active: !0 }),
                workerSrc: '/pdfjs-dist/pdf.worker.min.js',
                errorMessage: (0, R.jsx)(Ue.Z, { children: r }),
                children: function (e) {
                  return (
                    e.getPage(1).then(function (e) {
                      var n = e.getViewport({ scale: 1 }),
                        t = n.width,
                        c = n.height;
                      a(t, c);
                    }),
                    (0, R.jsx)(Oe.Nb, {
                      pdfDocument: e,
                      enableAreaSelection: function (e) {
                        return e.altKey;
                      },
                      onScrollChange: s,
                      scrollRef: function (e) {
                        l.current = e;
                      },
                      onSelectionFinished: function () {
                        return null;
                      },
                      highlightTransform: function (e, n, t, a, i, l, r) {
                        var s = !Boolean(e.content && e.content.image)
                          ? (0, R.jsx)(Oe.y$, {
                              isScrolledTo: r,
                              position: e.position,
                              comment: e.comment,
                            })
                          : (0, R.jsx)(Oe.PD, {
                              isScrolledTo: r,
                              highlight: e,
                              onChange: function () {},
                            });
                        return (0, R.jsx)(
                          Oe.GI,
                          {
                            popupContent: (0, R.jsx)(De, c()({}, e)),
                            onMouseOver: function (n) {
                              return t(e, function () {
                                return n;
                              });
                            },
                            onMouseOut: a,
                            children: s,
                          },
                          n,
                        );
                      },
                      highlights: t,
                    })
                  );
                },
              }),
            })
          );
        },
        Ve = (0, Z.memo)(Re),
        Ge = 'chunkPage___Mlm1d',
        Be = 'pagePdfWrapper___NxUun',
        Ke = 'pageWrapper___wkiwd',
        We = 'pageContent___fubpP',
        $e = 'spin___OiDil',
        Je = 'documentPreview___tbu9J',
        Xe = 'chunkContainer___m_m6K',
        Qe = 'chunkOtherContainer___bj5TE',
        Ye = 'pageFooter___O05bO',
        en = function () {
          var e = (0, Z.useState)([]),
            n = k()(e, 2),
            t = n[0],
            a = n[1],
            i = ee().removeChunk,
            r = (0, g.Kn)(),
            u = r.data,
            d = u.documentInfo,
            f = u.data,
            _ = void 0 === f ? [] : f,
            M = u.total,
            I = r.pagination,
            S = r.loading,
            y = r.searchString,
            z = r.handleInputChange,
            N = r.available,
            F = r.handleSetAvailable,
            P = (function () {
              var e = (0, Z.useState)(''),
                n = k()(e, 2),
                t = n[0],
                a = n[1];
              return {
                handleChunkCardClick: (0, Z.useCallback)(function (e) {
                  a(e);
                }, []),
                selectedChunkId: t,
              };
            })(),
            E = P.handleChunkCardClick,
            L = P.selectedChunkId,
            O = 'pdf' === (null == d ? void 0 : d.type),
            A = (0, w.$G)().t,
            H = (function () {
              var e = (0, Z.useState)(T.Full),
                n = k()(e, 2),
                t = n[0],
                a = n[1];
              return {
                textMode: t,
                changeChunkTextMode: (0, Z.useCallback)(function (e) {
                  a(e);
                }, []),
              };
            })(),
            U = H.changeChunkTextMode,
            q = H.textMode,
            D = (0, g.T7)().switchChunk,
            G = (function () {
              var e = (0, Z.useState)(''),
                n = k()(e, 2),
                t = n[0],
                a = n[1],
                i = (0, J.pG)(),
                l = i.visible,
                r = i.hideModal,
                u = i.showModal,
                d = (0, g.$0)(),
                h = d.createChunk,
                f = d.loading,
                m = (0, X.pE)().documentId,
                x = (0, Z.useCallback)(
                  (function () {
                    var e = o()(
                      s()().mark(function e(n) {
                        return s()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  h(
                                    c()(
                                      c()({}, n),
                                      {},
                                      { doc_id: m, chunk_id: t },
                                    ),
                                  )
                                );
                              case 2:
                                0 === e.sent && r();
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
                  [h, r, t, m],
                ),
                p = (0, Z.useCallback)(
                  (function () {
                    var e = o()(
                      s()().mark(function e(n) {
                        return s()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                a(n), u();
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
                  [u],
                );
              return {
                chunkUpdatingLoading: f,
                onChunkUpdatingOk: x,
                chunkUpdatingVisible: l,
                hideChunkUpdatingModal: r,
                showChunkUpdatingModal: p,
                chunkId: t,
                documentId: m,
              };
            })(),
            B = G.chunkUpdatingLoading,
            K = G.onChunkUpdatingOk,
            W = G.showChunkUpdatingModal,
            $ = G.hideChunkUpdatingModal,
            Q = G.chunkId,
            ne = G.chunkUpdatingVisible,
            te = G.documentId,
            ae = (0, Z.useCallback)(
              function (e) {
                a(
                  e
                    ? _.map(function (e) {
                        return e.chunk_id;
                      })
                    : [],
                );
              },
              [_],
            ),
            ce = (0, Z.useCallback)(function (e, n) {
              a(function (t) {
                var a = t.findIndex(function (n) {
                    return n === e;
                  }),
                  c = h()(t);
                return (
                  n && -1 === a ? c.push(e) : n || -1 === a || c.splice(a, 1), c
                );
              });
            }, []),
            ie = (0, Z.useCallback)(
              function () {
                m.ZP.warning(A('message.pleaseSelectChunk'));
              },
              [A],
            ),
            le = (0, Z.useCallback)(
              o()(
                s()().mark(function e() {
                  return s()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(t.length > 0)) {
                            e.next = 7;
                            break;
                          }
                          return (e.next = 3), i(t, te);
                        case 3:
                          0 === e.sent && a([]), (e.next = 8);
                          break;
                        case 7:
                          ie();
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [t, te, i, ie],
            ),
            re = (0, Z.useCallback)(
              (function () {
                var e = o()(
                  s()().mark(function e(n, a) {
                    var c;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((c = a), a)) {
                              e.next = 6;
                              break;
                            }
                            if (((c = t), 0 !== t.length)) {
                              e.next = 6;
                              break;
                            }
                            return ie(), e.abrupt('return');
                          case 6:
                            return (
                              (e.next = 8),
                              D({ chunk_ids: c, available_int: n, doc_id: te })
                            );
                          case 8:
                            e.sent;
                          case 10:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (n, t) {
                  return e.apply(this, arguments);
                };
              })(),
              [D, te, t, ie],
            ),
            se = Y(L),
            ue = se.highlights,
            oe = se.setWidthAndHeight;
          return (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsxs)('div', {
                className: Ge,
                children: [
                  (0, R.jsx)(Ee, {
                    selectAllChunk: ae,
                    createChunk: W,
                    removeChunk: le,
                    checked: t.length === _.length,
                    switchChunk: re,
                    changeChunkTextMode: U,
                    searchString: y,
                    handleInputChange: z,
                    available: N,
                    handleSetAvailable: F,
                  }),
                  (0, R.jsx)(x.Z, {}),
                  (0, R.jsxs)(p.Z, {
                    flex: 1,
                    gap: 'middle',
                    children: [
                      (0, R.jsxs)(p.Z, {
                        vertical: !0,
                        className: O ? Be : Ke,
                        children: [
                          (0, R.jsx)(v.Z, {
                            spinning: S,
                            className: $e,
                            size: 'large',
                            children: (0, R.jsx)('div', {
                              className: We,
                              children: (0, R.jsx)(j.Z, {
                                direction: 'vertical',
                                size: 'middle',
                                className: b()(Xe, l()({}, Qe, !O)),
                                children: _.map(function (e) {
                                  return (0, R.jsx)(
                                    V,
                                    {
                                      item: e,
                                      editChunk: W,
                                      checked: t.some(function (n) {
                                        return n === e.chunk_id;
                                      }),
                                      handleCheckboxClick: ce,
                                      switchChunk: re,
                                      clickChunkCard: E,
                                      selected: e.chunk_id === L,
                                      textMode: q,
                                    },
                                    e.chunk_id,
                                  );
                                }),
                              }),
                            }),
                          }),
                          (0, R.jsx)('div', {
                            className: Ye,
                            children: (0, R.jsx)(
                              C.Z,
                              c()(
                                c()({}, I),
                                {},
                                {
                                  total: M,
                                  size: 'small',
                                  onChange: function (e, n) {
                                    var t;
                                    a([]),
                                      null === (t = I.onChange) ||
                                        void 0 === t ||
                                        t.call(I, e, n);
                                  },
                                },
                              ),
                            ),
                          }),
                        ],
                      }),
                      O &&
                        (0, R.jsx)('section', {
                          className: Je,
                          children: (0, R.jsx)(Ve, {
                            highlights: ue,
                            setWidthAndHeight: oe,
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              ne &&
                (0, R.jsx)(ke, {
                  doc_id: te,
                  chunkId: Q,
                  hideModal: $,
                  visible: ne,
                  loading: B,
                  onOk: K,
                  parserId: d.parser_id,
                }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=p__add-knowledge__components__knowledge-chunk__index.d18e9c07.async.js.map
