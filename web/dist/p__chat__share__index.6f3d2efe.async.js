'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [5881],
  {
    37219: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return ie;
        },
      });
      var t = s(9783),
        a = s.n(t),
        r = s(5574),
        i = s.n(r),
        o = s(88964),
        l = s(1079),
        d = s(86968),
        c = s(93967),
        u = s.n(c),
        m = s(62435),
        g = s(93352),
        h = s(46008),
        x = s(5089),
        f = s(22850),
        v = s(7134),
        p = s(86250),
        j = s(42075),
        k = s(2487),
        _ = s(15867),
        Z = s(3234),
        b = s(59418),
        I = s(18334),
        C = s(98236),
        w = s(38520),
        M = s(33623),
        B = s(30159),
        y = s(63437),
        L = s(65429),
        P = s(15381),
        S = s(98165),
        R = s(48689),
        T = s(78045),
        D = s(83062),
        E = s(67421),
        F = s(15009),
        U = s.n(F),
        A = s(99289),
        N = s.n(A),
        O = s(22150),
        G = s(85576),
        z = s(79531),
        W = s(86074),
        q = function (e) {
          var n = e.visible,
            s = e.hideModal,
            t = e.onOk,
            a = e.loading,
            r = O.Z.useForm(),
            o = i()(r, 1)[0],
            l = (0, m.useCallback)(
              N()(
                U()().mark(function e() {
                  var n;
                  return U()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), o.validateFields();
                        case 2:
                          return (
                            (n = e.sent),
                            e.abrupt(
                              'return',
                              null == t
                                ? void 0
                                : t({ thumbup: !1, feedback: n.feedback }),
                            )
                          );
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [t, o],
            );
          return (0, W.jsx)(G.Z, {
            title: 'Feedback',
            open: n,
            onOk: l,
            onCancel: s,
            confirmLoading: a,
            children: (0, W.jsx)(O.Z, {
              name: 'basic',
              labelCol: { span: 0 },
              wrapperCol: { span: 24 },
              style: { maxWidth: 600 },
              autoComplete: 'off',
              form: o,
              children: (0, W.jsx)(O.Z.Item, {
                name: 'feedback',
                rules: [
                  { required: !0, message: 'Please input your feedback!' },
                ],
                children: (0, W.jsx)(z.Z.TextArea, {
                  rows: 8,
                  placeholder: 'Please input your feedback!',
                }),
              }),
            }),
          });
        },
        Y = s(97857),
        J = s.n(Y),
        $ = s(91028),
        H = s(2938),
        K = s(31098),
        Q = s(87080),
        V = s(7306),
        X = s(46693),
        ee = function (e) {
          var n = e.visible,
            s = e.hideModal,
            t = e.prompt;
          return (0, W.jsx)(G.Z, {
            title: (0, W.jsxs)(j.Z, {
              children: [
                (0, W.jsx)(X.Z, { name: 'prompt', width: 18 }),
                'Prompt',
              ],
            }),
            width: '80%',
            open: n,
            onCancel: s,
            footer: null,
            children: (0, W.jsx)(V.Z, { children: t }),
          });
        },
        ne = function (e) {
          var n = e.messageId,
            s = e.content,
            t = e.prompt,
            a = e.audioBinary,
            r = e.showLikeButton,
            o = e.showLoudspeaker,
            l = void 0 === o || o,
            c = (function (e) {
              var n = (0, d.pG)(),
                s = n.visible,
                t = n.hideModal,
                a = n.showModal,
                r = (0, $.Zo)(),
                i = r.feedback,
                o = r.loading,
                l = (0, m.useCallback)(
                  (function () {
                    var n = N()(
                      U()().mark(function n(s) {
                        return U()().wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.next = 2),
                                  i(J()(J()({}, s), {}, { messageId: e }))
                                );
                              case 2:
                                0 === n.sent && t();
                              case 4:
                              case 'end':
                                return n.stop();
                            }
                        }, n);
                      }),
                    );
                    return function (e) {
                      return n.apply(this, arguments);
                    };
                  })(),
                  [i, t, e],
                );
              return {
                loading: o,
                onFeedbackOk: l,
                visible: s,
                hideModal: t,
                showModal: a,
              };
            })(n),
            u = c.visible,
            g = c.hideModal,
            h = c.showModal,
            x = c.onFeedbackOk,
            f = c.loading,
            v = (0, d.pG)(),
            p = v.visible,
            j = v.hideModal,
            k = v.showModal,
            _ = (0, E.$G)().t,
            Z = (function (e, n) {
              var s = (0, m.useRef)(null),
                t = (0, H.c5)().read,
                a = (0, m.useRef)(),
                r = (0, m.useState)(!1),
                o = i()(r, 2),
                l = o[0],
                d = o[1],
                c = (0, m.useCallback)(
                  N()(
                    U()().mark(function e() {
                      return U()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a.current = new Q.i({
                                  audio: s.current,
                                  onPlaying: function () {
                                    d(!0);
                                  },
                                  onPause: function () {
                                    d(!1);
                                  },
                                  onChunkEnd: function () {},
                                  mimeType: MediaSource.isTypeSupported(
                                    'audio/mpeg',
                                  )
                                    ? 'audio/mpeg'
                                    : 'audio/mp4; codecs="mp4a.40.2"',
                                })),
                                (e.next = 3),
                                a.current.init()
                              );
                            case 3:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  ),
                  [],
                ),
                u = (0, m.useCallback)(function () {
                  var e;
                  null === (e = a.current) || void 0 === e || e.pause();
                }, []),
                g = (0, m.useCallback)(
                  N()(
                    U()().mark(function n() {
                      var s, r;
                      return U()().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.next = 2), t({ text: e });
                            case 2:
                              (s = n.sent) &&
                                (null == a ||
                                  null === (r = a.current) ||
                                  void 0 === r ||
                                  r.feedWithResponse(s));
                            case 4:
                            case 'end':
                              return n.stop();
                          }
                      }, n);
                    }),
                  ),
                  [t, e],
                ),
                h = (0, m.useCallback)(
                  N()(
                    U()().mark(function e() {
                      return U()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              l ? (d(!1), u()) : (d(!0), g());
                            case 1:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  ),
                  [d, g, l, u],
                );
              return (
                (0, m.useEffect)(
                  function () {
                    if (n) {
                      var e = (0, K.BF)(n);
                      if (e)
                        try {
                          var s;
                          null === (s = a.current) || void 0 === s || s.feed(e);
                        } catch (e) {
                          console.warn(e);
                        }
                    }
                  },
                  [n],
                ),
                (0, m.useEffect)(
                  function () {
                    c();
                  },
                  [c],
                ),
                { ref: s, handleRead: h, isPlaying: l }
              );
            })(s, a),
            b = Z.handleRead,
            I = Z.ref,
            C = Z.isPlaying,
            S = (0, m.useCallback)(
              function () {
                x({ thumbup: !0 });
              },
              [x],
            );
          return (0, W.jsxs)(W.Fragment, {
            children: [
              (0, W.jsxs)(T.ZP.Group, {
                size: 'small',
                children: [
                  (0, W.jsx)(T.ZP.Button, {
                    value: 'a',
                    children: (0, W.jsx)(M.Z, { text: s }),
                  }),
                  l &&
                    (0, W.jsxs)(T.ZP.Button, {
                      value: 'b',
                      onClick: b,
                      children: [
                        (0, W.jsx)(D.Z, {
                          title: _('chat.read'),
                          children: C
                            ? (0, W.jsx)(B.Z, {})
                            : (0, W.jsx)(y.Z, {}),
                        }),
                        (0, W.jsx)('audio', { src: '', ref: I }),
                      ],
                    }),
                  r &&
                    (0, W.jsxs)(W.Fragment, {
                      children: [
                        (0, W.jsx)(T.ZP.Button, {
                          value: 'c',
                          onClick: S,
                          children: (0, W.jsx)(L.Z, {}),
                        }),
                        (0, W.jsx)(T.ZP.Button, {
                          value: 'd',
                          onClick: h,
                          children: (0, W.jsx)(P.Z, {}),
                        }),
                      ],
                    }),
                  t &&
                    (0, W.jsx)(T.ZP.Button, {
                      value: 'e',
                      onClick: k,
                      children: (0, W.jsx)(w.UI, {
                        style: { fontSize: '16px' },
                      }),
                    }),
                ],
              }),
              u &&
                (0, W.jsx)(q, {
                  visible: u,
                  hideModal: g,
                  onOk: x,
                  loading: f,
                }),
              p && (0, W.jsx)(ee, { visible: p, hideModal: j, prompt: t }),
            ],
          });
        },
        se = function (e) {
          var n = e.content,
            s = e.messageId,
            t = e.sendLoading,
            a = e.removeMessageById,
            r = e.regenerateMessage,
            i = (function (e, n) {
              var s = (0, $.RQ)(),
                t = s.deleteMessage,
                a = s.loading;
              return {
                onRemoveMessage: (0, m.useCallback)(
                  N()(
                    U()().mark(function s() {
                      return U()().wrap(function (s) {
                        for (;;)
                          switch ((s.prev = s.next)) {
                            case 0:
                              if (!e) {
                                s.next = 5;
                                break;
                              }
                              return (s.next = 3), t(e);
                            case 3:
                              0 === s.sent && (null == n || n(e));
                            case 5:
                            case 'end':
                              return s.stop();
                          }
                      }, s);
                    }),
                  ),
                  [t, e, n],
                ),
                loading: a,
              };
            })(s, a),
            o = i.onRemoveMessage,
            l = i.loading,
            d = (0, E.$G)().t;
          return (0, W.jsxs)(T.ZP.Group, {
            size: 'small',
            children: [
              (0, W.jsx)(T.ZP.Button, {
                value: 'a',
                children: (0, W.jsx)(M.Z, { text: n }),
              }),
              r &&
                (0, W.jsx)(T.ZP.Button, {
                  value: 'b',
                  onClick: r,
                  disabled: t,
                  children: (0, W.jsx)(D.Z, {
                    title: d('chat.regenerate'),
                    children: (0, W.jsx)(S.Z, { spin: t }),
                  }),
                }),
              a &&
                (0, W.jsx)(T.ZP.Button, {
                  value: 'c',
                  onClick: o,
                  disabled: l,
                  children: (0, W.jsx)(D.Z, {
                    title: d('common.delete'),
                    children: (0, W.jsx)(R.Z, { spin: l }),
                  }),
                }),
            ],
          });
        },
        te = {
          messageItem: 'messageItem___OK1Zd',
          messageItemSection: 'messageItemSection___a_W_M',
          messageItemSectionLeft: 'messageItemSectionLeft___nCfnq',
          messageItemContent: 'messageItemContent___j99sG',
          messageItemContentReverse: 'messageItemContentReverse___EgYgc',
          messageText: 'messageText___vuU2B',
          messageTextDark: 'messageTextDark___mYdLd',
          messageUserText: 'messageUserText___yCJ20',
          messageEmpty: 'messageEmpty___oF9mg',
          thumbnailImg: 'thumbnailImg___ObcCZ',
          messageItemLeft: 'messageItemLeft___L270A',
          messageItemRight: 'messageItemRight___icDzT',
        },
        ae = f.Z.Text,
        re = function (e) {
          var n = e.item,
            s = e.reference,
            t = e.loading,
            r = void 0 !== t && t,
            c = e.avatar,
            f = e.avatarDialog,
            w = e.sendLoading,
            M = void 0 !== w && w,
            B = e.clickDocumentButton,
            y = e.index,
            L = e.removeMessageById,
            P = e.regenerateMessage,
            S = e.showLikeButton,
            R = void 0 === S || S,
            T = e.showLoudspeaker,
            D = void 0 === T || T,
            E = e.visibleAvatar,
            F = void 0 === E || E,
            U = (0, C.Fg)().theme,
            A = n.role === l.Cs.Assistant,
            N = n.role === l.Cs.User,
            O = (0, g.hf)(),
            G = O.data,
            z = O.setDocumentIds,
            q = (0, g.x2)(),
            Y = q.data,
            J = q.setDocumentIds,
            $ = (0, d.pG)(),
            H = $.visible,
            K = $.hideModal,
            Q = $.showModal,
            V = (0, m.useState)(''),
            X = i()(V, 2),
            ee = X[0],
            re = X[1],
            ie = (0, m.useMemo)(
              function () {
                var e;
                return null !== (e = null == s ? void 0 : s.doc_aggs) &&
                  void 0 !== e
                  ? e
                  : [];
              },
              [null == s ? void 0 : s.doc_aggs],
            ),
            oe = (0, m.useCallback)(
              function (e) {
                return function () {
                  re(e), Q();
                };
              },
              [Q],
            ),
            le = (0, m.useCallback)(
              function () {
                null == P || P(n);
              },
              [P, n],
            );
          return (
            (0, m.useEffect)(
              function () {
                var e,
                  s =
                    null !== (e = null == n ? void 0 : n.doc_ids) &&
                    void 0 !== e
                      ? e
                      : [];
                if (s.length) {
                  z(s);
                  var t = s.filter(function (e) {
                    return !(e in Y);
                  });
                  t.length && J(t);
                }
              },
              [n.doc_ids, z, J, Y],
            ),
            (0, W.jsxs)('div', {
              className: u()(
                te.messageItem,
                a()(
                  a()({}, te.messageItemLeft, n.role === l.Cs.Assistant),
                  te.messageItemRight,
                  n.role === l.Cs.User,
                ),
              ),
              children: [
                (0, W.jsx)('section', {
                  className: u()(
                    te.messageItemSection,
                    a()(
                      a()(
                        {},
                        te.messageItemSectionLeft,
                        n.role === l.Cs.Assistant,
                      ),
                      te.messageItemSectionRight,
                      n.role === l.Cs.User,
                    ),
                  ),
                  children: (0, W.jsxs)('div', {
                    className: u()(
                      te.messageItemContent,
                      a()(
                        {},
                        te.messageItemContentReverse,
                        n.role === l.Cs.User,
                      ),
                    ),
                    children: [
                      F &&
                        (n.role === l.Cs.User
                          ? (0, W.jsx)(v.C, {
                              size: 40,
                              src: null != c ? c : '/logo.svg',
                            })
                          : f
                            ? (0, W.jsx)(v.C, { size: 40, src: f })
                            : (0, W.jsx)(o.r, {})),
                      (0, W.jsxs)(p.Z, {
                        vertical: !0,
                        gap: 8,
                        flex: 1,
                        children: [
                          (0, W.jsx)(j.Z, {
                            children: A
                              ? 0 !== y &&
                                (0, W.jsx)(ne, {
                                  messageId: n.id,
                                  content: n.content,
                                  prompt: n.prompt,
                                  showLikeButton: R,
                                  audioBinary: n.audio_binary,
                                  showLoudspeaker: D,
                                })
                              : (0, W.jsx)(se, {
                                  content: n.content,
                                  messageId: n.id,
                                  removeMessageById: L,
                                  regenerateMessage: P && le,
                                  sendLoading: M,
                                }),
                          }),
                          (0, W.jsx)('div', {
                            className: A
                              ? 'dark' === U
                                ? te.messageTextDark
                                : te.messageText
                              : te.messageUserText,
                            children: (0, W.jsx)(h.Z, {
                              loading: r,
                              content: n.content,
                              reference: s,
                              clickDocumentButton: B,
                            }),
                          }),
                          A &&
                            ie.length > 0 &&
                            (0, W.jsx)(k.Z, {
                              bordered: !0,
                              dataSource: ie,
                              renderItem: function (e) {
                                return (0, W.jsx)(k.Z.Item, {
                                  children: (0, W.jsxs)(p.Z, {
                                    gap: 'small',
                                    align: 'center',
                                    children: [
                                      (0, W.jsx)(Z.Z, {
                                        id: e.doc_id,
                                        name: e.doc_name,
                                      }),
                                      (0, W.jsx)(I.Z, {
                                        documentId: e.doc_id,
                                        documentName: e.doc_name,
                                        prefix: 'document',
                                        link: e.url,
                                        children: e.doc_name,
                                      }),
                                    ],
                                  }),
                                });
                              },
                            }),
                          N &&
                            G.length > 0 &&
                            (0, W.jsx)(k.Z, {
                              bordered: !0,
                              dataSource: G,
                              renderItem: function (e) {
                                var n = (0, x.RT)(e.name);
                                return (0, W.jsx)(k.Z.Item, {
                                  children: (0, W.jsxs)(p.Z, {
                                    gap: 'small',
                                    align: 'center',
                                    children: [
                                      (0, W.jsx)(Z.Z, {
                                        id: e.id,
                                        name: e.name,
                                      }),
                                      (0, x.Or)(n)
                                        ? (0, W.jsx)(I.Z, {
                                            documentId: e.id,
                                            documentName: e.name,
                                            prefix: 'document',
                                            children: e.name,
                                          })
                                        : (0, W.jsx)(_.ZP, {
                                            type: 'text',
                                            onClick: oe(e.id),
                                            children: (0, W.jsx)(ae, {
                                              style: { maxWidth: '40vw' },
                                              ellipsis: { tooltip: e.name },
                                              children: e.name,
                                            }),
                                          }),
                                    ],
                                  }),
                                });
                              },
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
                H &&
                  (0, W.jsx)(b.Z, { visible: H, hideModal: K, documentId: ee }),
              ],
            })
          );
        },
        ie = (0, m.memo)(re);
    },
    49955: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return I;
          },
        });
      var t = s(3012),
        a = s(37219),
        r = s(71580),
        i = s(1079),
        o = s(41923),
        l = s(86250),
        d = s(75081),
        c = s(62435),
        u = s(36235),
        m = s(35293),
        g = s(61110),
        h = s(91028),
        x = s(20334),
        f = s(54707),
        v = s(71250),
        p = 'chatWrapper___V2STu',
        j = 'chatContainer___JkSeI',
        k = 'messageContainer___v6SB0',
        _ = s(86074),
        Z = function () {
          var e = (0, u.P7)(),
            n = e.sharedId,
            s = e.from,
            p = e.locale,
            Z = e.visibleAvatar,
            b = (0, r.B)(),
            I = b.visible,
            C = b.hideModal,
            w = b.documentId,
            M = b.selectedChunk,
            B = b.clickDocumentButton,
            y = (0, u.I8)(),
            L = y.handlePressEnter,
            P = y.handleInputChange,
            S = y.value,
            R = y.sendLoading,
            T = y.loading,
            D = y.ref,
            E = y.derivedMessages,
            F = y.hasError,
            U = y.stopOutputMessage,
            A = (0, o.q3)(S),
            N = (0, c.useMemo)(
              function () {
                return s === i.qH.Agent ? x.Sd : h.y8;
              },
              [s],
            );
          c.useEffect(
            function () {
              p && f.Z.language !== p && f.Z.changeLanguage(p);
            },
            [p, Z],
          );
          var O = N().data;
          return n
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsxs)(l.Z, {
                    flex: 1,
                    className: j,
                    vertical: !0,
                    children: [
                      (0, _.jsxs)(l.Z, {
                        flex: 1,
                        vertical: !0,
                        className: k,
                        children: [
                          (0, _.jsx)('div', {
                            children: (0, _.jsx)(d.Z, {
                              spinning: T,
                              children:
                                null == E
                                  ? void 0
                                  : E.map(function (e, n) {
                                      return (0, _.jsx)(
                                        a.Z,
                                        {
                                          visibleAvatar: Z,
                                          avatarDialog:
                                            null == O ? void 0 : O.avatar,
                                          item: e,
                                          nickname: 'You',
                                          reference: (0, m.oI)(
                                            { message: E, reference: [] },
                                            e,
                                          ),
                                          loading:
                                            e.role === i.Cs.Assistant &&
                                            R &&
                                            (null == E ? void 0 : E.length) -
                                              1 ===
                                              n,
                                          index: n,
                                          clickDocumentButton: B,
                                          showLikeButton: !1,
                                          showLoudspeaker: !1,
                                        },
                                        (0, v.mN)(e),
                                      );
                                    }),
                            }),
                          }),
                          (0, _.jsx)('div', { ref: D }),
                        ],
                      }),
                      (0, _.jsx)(t.Z, {
                        isShared: !0,
                        value: S,
                        disabled: F,
                        sendDisabled: A,
                        conversationId: n,
                        onInputChange: P,
                        onPressEnter: L,
                        sendLoading: R,
                        uploadMethod: 'external_upload_and_parse',
                        showUploadIcon: !1,
                        stopOutputMessage: U,
                      }),
                    ],
                  }),
                  I &&
                    (0, _.jsx)(g.Z, {
                      visible: I,
                      hideModal: C,
                      documentId: w,
                      chunk: M,
                    }),
                ],
              })
            : (0, _.jsx)('div', { children: 'empty' });
        },
        b = (0, c.forwardRef)(Z),
        I = function () {
          return (0, _.jsx)('div', {
            className: p,
            children: (0, _.jsx)(b, {}),
          });
        };
    },
  },
]);
//# sourceMappingURL=p__chat__share__index.6f3d2efe.async.js.map
