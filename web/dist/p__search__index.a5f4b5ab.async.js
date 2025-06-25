(self.webpackChunk = self.webpackChunk || []).push([
  [4677],
  {
    3234: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(5089),
        r = t(46693),
        a = t(93352),
        c = t(62435),
        l = 'thumbnailImg___cbGoI',
        o = t(86074),
        s = function (e) {
          var n = e.name,
            t = e.id,
            s = (0, i.RT)(n),
            u = (0, a.x2)(),
            d = u.data,
            h = u.setDocumentIds,
            f = d[t];
          return (
            (0, c.useEffect)(
              function () {
                t && h([t]);
              },
              [t, h],
            ),
            f
              ? (0, o.jsx)('img', { src: f, className: l })
              : (0, o.jsx)(r.Z, { name: 'file-icon/'.concat(s), width: 24 })
          );
        };
    },
    7306: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return k;
        },
      });
      var i = t(97857),
        r = t.n(i),
        a = t(13769),
        c = t.n(a),
        l = t(93967),
        o = t.n(l),
        s = t(95246),
        u = t(21373),
        d = t(30402),
        h = t(7657),
        f = t(78600),
        p = t(77437),
        g = (t(81897), t(71250)),
        m = 'text___QzeTq',
        v = 'code___dMLXp',
        x = t(86074),
        _ = ['children', 'className', 'node'],
        k = function (e) {
          var n = e.children;
          return (0, x.jsx)(s.U, {
            remarkPlugins: [f.Z, p.Z],
            rehypePlugins: [h.Z, d.Z],
            className: o()(m),
            components: {
              code: function (e) {
                var n = e.children,
                  t = e.className,
                  i = (e.node, c()(e, _)),
                  a = /language-(\w+)/.exec(t || '');
                return a
                  ? (0, x.jsx)(
                      u.Z,
                      r()(
                        r()({}, i),
                        {},
                        {
                          PreTag: 'div',
                          language: a[1],
                          children: String(n).replace(/\n$/, ''),
                        },
                      ),
                    )
                  : (0, x.jsx)(
                      'code',
                      r()(
                        r()({}, i),
                        {},
                        { className: ''.concat(t, ' ').concat(v), children: n },
                      ),
                    );
              },
            },
            children: n ? (0, g.CE)(n) : n,
          });
        };
    },
    43714: function (e, n, t) {
      'use strict';
      t.d(n, {
        s: function () {
          return x;
        },
        Z: function () {
          return v;
        },
      });
      var i = t(97857),
        r = t.n(i),
        a = t(13769),
        c = t.n(a),
        l = t(60806),
        o = t(55241),
        s = t(93967),
        u = t.n(s),
        d = 'primitiveImg___VkCiH',
        h = 'image___BCkCB',
        f = 'imagePreview___qFyP3',
        p = t(86074),
        g = ['id', 'className'],
        m = function (e) {
          var n = e.id,
            t = e.className,
            i = c()(e, g);
          return (0, p.jsx)(
            'img',
            r()(
              r()({}, i),
              {},
              {
                src: ''.concat(l.N, '/document/image/').concat(n),
                alt: '',
                className: u()(d, t),
              },
            ),
          );
        },
        v = m,
        x = function (e) {
          var n = e.id;
          return (0, p.jsx)(o.Z, {
            placement: 'left',
            content: (0, p.jsx)(m, { id: n, className: f }),
            children: (0, p.jsx)(m, { id: n, className: h }),
          });
        };
    },
    373: function (e, n, t) {
      'use strict';
      var i = t(15009),
        r = t.n(i),
        a = t(99289),
        c = t.n(a),
        l = t(25098),
        o = t.n(l),
        s = t(97857),
        u = t.n(s),
        d = t(5574),
        h = t.n(d),
        f = t(12444),
        p = t.n(f),
        g = t(72004),
        m = t.n(g),
        v = t(28785),
        x = t.n(v),
        _ = t(48374),
        k = t.n(_),
        y = t(31996),
        b = t.n(y),
        j = t(26037),
        w = t.n(j),
        C = t(9783),
        Z = t.n(C),
        I = t(1242),
        S = t(38622),
        N = t(41609),
        E = t.n(N),
        M = t(62435),
        D = t(4511),
        F = t(86074),
        P = 'root',
        T = [
          '#5B8FF9',
          '#F6BD16',
          '#5AD8A6',
          '#945FB9',
          '#E86452',
          '#6DC8EC',
          '#FF99C3',
          '#1E9493',
          '#FF9845',
          '#5D7092',
        ],
        R = 'collapse-expand',
        L = (function (e) {
          b()(t, e);
          var n = w()(t);
          function t(e) {
            return (
              p()(this, t),
              Object.assign(e.style, t.defaultStyleProps),
              n.call(this, e)
            );
          }
          return (
            m()(t, [
              {
                key: 'childrenData',
                get: function () {
                  var e;
                  return null === (e = this.attributes.context) || void 0 === e
                    ? void 0
                    : e.model.getChildrenData(this.id);
                },
              },
              {
                key: 'getKeyStyle',
                value: function (e) {
                  var n = this.getSize(e),
                    i = h()(n, 2),
                    r = i[0],
                    a = i[1],
                    c = x()(k()(t.prototype), 'getKeyStyle', this).call(
                      this,
                      e,
                    );
                  return u()(
                    u()({ width: r, height: a }, c),
                    {},
                    { fill: 'transparent' },
                  );
                },
              },
              {
                key: 'drawKeyShape',
                value: function (e, n) {
                  var t = this.getKeyStyle(e);
                  return this.upsert('key', I.UL, t, n);
                },
              },
              {
                key: 'getLabelStyle',
                value: function (e) {
                  return (
                    !(!1 === e.label || !e.labelText) &&
                    (0, S.zs)(this.getGraphicStyle(e), 'label')
                  );
                },
              },
              {
                key: 'drawIconArea',
                value: function (e, n) {
                  var t = this.getSize(e),
                    i = {
                      fill: 'transparent',
                      height: 30,
                      width: 12,
                      x: -6,
                      y: h()(t, 2)[1],
                      zIndex: -1,
                    };
                  this.upsert('icon-area', I.UL, i, n);
                },
              },
              {
                key: 'forwardEvent',
                value: function (e, n, t) {
                  e &&
                    !Reflect.has(e, '__bind__') &&
                    (Reflect.set(e, '__bind__', !0), e.addEventListener(n, t));
                },
              },
              {
                key: 'getCountStyle',
                value: function (e) {
                  var n = e.collapsed,
                    t = e.color;
                  if (n) {
                    var i,
                      r = this.getSize(e),
                      a = h()(r, 2)[1];
                    return {
                      backgroundFill: t,
                      cursor: 'pointer',
                      fill: '#fff',
                      fontSize: 8,
                      padding: [0, 10],
                      text: ''.concat(
                        null === (i = this.childrenData) || void 0 === i
                          ? void 0
                          : i.length,
                      ),
                      textAlign: 'center',
                      y: a + 8,
                    };
                  }
                  return !1;
                },
              },
              {
                key: 'drawCountShape',
                value: function (e, n) {
                  var t = this,
                    i = this.getCountStyle(e),
                    r = this.upsert('count', S.Ct, i, n);
                  this.forwardEvent(r, S.C9.CLICK, function (n) {
                    n.stopPropagation(),
                      e.context.graph.emit(R, { id: t.id, collapsed: !1 });
                  });
                },
              },
              {
                key: 'isShowCollapse',
                value: function (e) {
                  var n;
                  return (
                    !e.collapsed &&
                    Array.isArray(this.childrenData) &&
                    (null === (n = this.childrenData) || void 0 === n
                      ? void 0
                      : n.length) > 0
                  );
                },
              },
              {
                key: 'getCollapseStyle',
                value: function (e) {
                  var n = e.showIcon,
                    t = e.color;
                  if (!this.isShowCollapse(e)) return !1;
                  var i = this.getSize(e);
                  return {
                    visibility: n ? 'visible' : 'hidden',
                    backgroundFill: t,
                    backgroundHeight: 12,
                    backgroundWidth: 12,
                    cursor: 'pointer',
                    fill: '#fff',
                    fontFamily: 'iconfont',
                    fontSize: 8,
                    text: '',
                    textAlign: 'center',
                    x: -1,
                    y: h()(i, 2)[1] + 8,
                  };
                },
              },
              {
                key: 'drawCollapseShape',
                value: function (e, n) {
                  var t = this,
                    i = this.getCollapseStyle(e),
                    r = this.upsert('collapse-expand', S.Ct, i, n);
                  this.forwardEvent(r, S.C9.CLICK, function (n) {
                    n.stopPropagation(),
                      e.context.graph.emit(R, {
                        id: t.id,
                        collapsed: !e.collapsed,
                      });
                  });
                },
              },
              {
                key: 'getAddStyle',
                value: function (e) {
                  var n = e.collapsed,
                    t = e.showIcon;
                  if (n) return !1;
                  var i = this.getSize(e),
                    r = '#ddd';
                  return {
                    visibility: t ? 'visible' : 'hidden',
                    backgroundFill: '#fff',
                    backgroundHeight: 12,
                    backgroundLineWidth: 1,
                    backgroundStroke: r,
                    backgroundWidth: 12,
                    cursor: 'pointer',
                    fill: r,
                    fontFamily: 'iconfont',
                    text: '',
                    textAlign: 'center',
                    x: -1,
                    y: h()(i, 2)[1] + (this.isShowCollapse(e) ? 22 : 8),
                  };
                },
              },
              {
                key: 'render',
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.parsedAttributes,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this;
                  x()(k()(t.prototype), 'render', this).call(this, e, n),
                    this.drawCountShape(e, n),
                    this.drawIconArea(e, n),
                    this.drawCollapseShape(e, n);
                },
              },
            ]),
            t
          );
        })(S.Hd);
      Z()(L, 'defaultStyleProps', {
        ports: [
          { key: 'in', placement: 'right-bottom' },
          { key: 'out', placement: 'left-bottom' },
        ],
      });
      var z = (function (e) {
          b()(t, e);
          var n = w()(t);
          function t() {
            return p()(this, t), n.apply(this, arguments);
          }
          return (
            m()(t, [
              {
                key: 'getControlPoints',
                value: function (e, n, t) {
                  return [[h()(n, 1)[0], h()(t, 2)[1]]];
                },
              },
            ]),
            t
          );
        })(S.aH),
        B = (function (e) {
          b()(t, e);
          var n = w()(t);
          function t(e, i) {
            var a;
            return (
              p()(this, t),
              (a = n.call(this, e, i)),
              Z()(o()(a), 'status', 'idle'),
              Z()(o()(a), 'showIcon', function (e) {
                a.setIcon(e, !0);
              }),
              Z()(o()(a), 'hideIcon', function (e) {
                a.setIcon(e, !1);
              }),
              Z()(o()(a), 'setIcon', function (e, n) {
                if ('idle' === a.status) {
                  var t = e.target.id,
                    i = a.context,
                    r = i.graph,
                    c = i.element;
                  r.updateNodeData([{ id: t, style: { showIcon: n } }]),
                    null == c || c.draw({ animation: !1, silence: !0 });
                }
              }),
              Z()(
                o()(a),
                'onCollapseExpand',
                (function () {
                  var e = c()(
                    r()().mark(function e(n) {
                      var t, i, c;
                      return r()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((a.status = 'busy'),
                                (t = n.id),
                                (i = n.collapsed),
                                (c = a.context.graph),
                                !i)
                              ) {
                                e.next = 8;
                                break;
                              }
                              return (e.next = 6), c.collapseElement(t);
                            case 6:
                              e.next = 10;
                              break;
                            case 8:
                              return (e.next = 10), c.expandElement(t);
                            case 10:
                              a.status = 'idle';
                            case 11:
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
              ),
              a.bindEvents(),
              a
            );
          }
          return (
            m()(t, [
              {
                key: 'update',
                value: function (e) {
                  this.unbindEvents(),
                    x()(k()(t.prototype), 'update', this).call(this, e),
                    this.bindEvents();
                },
              },
              {
                key: 'bindEvents',
                value: function () {
                  var e = this.context.graph;
                  e.on(S.bG.POINTER_ENTER, this.showIcon),
                    e.on(S.bG.POINTER_LEAVE, this.hideIcon),
                    e.on(R, this.onCollapseExpand);
                },
              },
              {
                key: 'unbindEvents',
                value: function () {
                  var e = this.context.graph;
                  e.off(S.bG.POINTER_ENTER, this.showIcon),
                    e.off(S.bG.POINTER_LEAVE, this.hideIcon),
                    e.off(R, this.onCollapseExpand);
                },
              },
            ]),
            t
          );
        })(S.Zt);
      function A(e) {
        var n = e.error;
        return (0, F.jsxs)('div', {
          role: 'alert',
          children: [
            (0, F.jsx)('p', { children: 'Something went wrong:' }),
            (0, F.jsx)('pre', { style: { color: 'red' }, children: n.message }),
          ],
        });
      }
      (0, S.z2)(S.MD.NODE, 'indented', L),
        (0, S.z2)(S.MD.EDGE, 'indented', z),
        (0, S.z2)(S.MD.BEHAVIOR, 'collapse-expand-tree', B);
      n.Z = function (e) {
        var n = e.data,
          t = e.show,
          i = e.style,
          a = void 0 === i ? {} : i,
          l = (0, M.useRef)(null),
          o = (0, M.useRef)(null),
          s = M.useCallback(function e(n) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : '',
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0;
            n.id || (n.id = t ? ''.concat(t, '-').concat(i) : 'root'),
              n.children &&
                n.children.forEach(function (t, i) {
                  return e(t, n.id, i);
                });
          }, []),
          d = (0, M.useCallback)(
            (function () {
              var e = c()(
                r()().mark(function e(n) {
                  var t;
                  return r()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = new S.kJ({
                            container: l.current,
                            x: 60,
                            node: {
                              type: 'indented',
                              style: {
                                size: function (e) {
                                  return [6 * e.id.length + 10, 20];
                                },
                                labelBackground: function (e) {
                                  return e.id === P;
                                },
                                labelBackgroundRadius: 0,
                                labelBackgroundFill: '#576286',
                                labelFill: function (e) {
                                  return e.id === P ? '#fff' : '#666';
                                },
                                labelText: function (e) {
                                  var n;
                                  return (
                                    (null === (n = e.style) || void 0 === n
                                      ? void 0
                                      : n.labelText) || e.id
                                  );
                                },
                                labelTextAlign: function (e) {
                                  return e.id === P ? 'center' : 'left';
                                },
                                labelTextBaseline: 'top',
                                color: function (e) {
                                  var n =
                                    t.getAncestorsData(e.id, 'tree').length - 1;
                                  return T[n % T.length] || '#576286';
                                },
                              },
                              state: {
                                selected: {
                                  lineWidth: 0,
                                  labelFill: '#40A8FF',
                                  labelBackground: !0,
                                  labelFontWeight: 'normal',
                                  labelBackgroundFill: '#e8f7ff',
                                  labelBackgroundRadius: 10,
                                },
                              },
                            },
                            edge: {
                              type: 'indented',
                              style: {
                                radius: 16,
                                lineWidth: 2,
                                sourcePort: 'out',
                                targetPort: 'in',
                                stroke: function (e) {
                                  var n = t.getAncestorsData(
                                    e.source,
                                    'tree',
                                  ).length;
                                  return T[n % T.length] || 'black';
                                },
                              },
                            },
                            layout: {
                              type: 'indented',
                              direction: 'LR',
                              isHorizontal: !0,
                              indent: 40,
                              getHeight: function () {
                                return 20;
                              },
                              getVGap: function () {
                                return 10;
                              },
                            },
                            behaviors: [
                              'scroll-canvas',
                              'collapse-expand-tree',
                              {
                                type: 'click-select',
                                enable: function (e) {
                                  return (
                                    'node' === e.targetType && e.target.id !== P
                                  );
                                },
                              },
                            ],
                          })),
                            o.current && o.current.destroy(),
                            (o.current = t),
                            s(n),
                            null == t || t.setData((0, S.RN)(n)),
                            null == t || t.render();
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
            [s],
          );
        return (
          (0, M.useEffect)(
            function () {
              E()(n) || d(n);
            },
            [d, n],
          ),
          (0, F.jsx)(D.SV, {
            fallbackRender: A,
            children: (0, F.jsx)('div', {
              id: 'tree',
              ref: l,
              style: u()(
                {
                  width: '90vw',
                  height: '80vh',
                  display: t ? 'block' : 'none',
                },
                a,
              ),
            }),
          })
        );
      };
    },
    18334: function (e, n, t) {
      'use strict';
      var i = t(5089),
        r = (t(62435), t(86074));
      n.Z = function (e) {
        var n = e.children,
          t = e.link,
          a = e.preventDefault,
          c = void 0 !== a && a,
          l = e.color,
          o = void 0 === l ? 'rgb(15, 79, 170)' : l,
          s = e.documentId,
          u = e.documentName,
          d = e.prefix,
          h = void 0 === d ? 'file' : d,
          f = e.className,
          p = t,
          g = (0, i.RT)(u);
        return (
          t ||
            (p = '/document/'
              .concat(s, '?ext=')
              .concat(g, '&prefix=')
              .concat(h)),
          (0, r.jsx)('a', {
            target: '_blank',
            onClick:
              !c || (0, i.Ep)(g)
                ? void 0
                : function (e) {
                    return e.preventDefault();
                  },
            href: p,
            rel: 'noreferrer',
            style: { color: f ? '' : o, wordBreak: 'break-all' },
            className: f,
            children: n,
          })
        );
      };
    },
    71580: function (e, n, t) {
      'use strict';
      t.d(n, {
        B: function () {
          return l;
        },
      });
      var i = t(5574),
        r = t.n(i),
        a = t(86968),
        c = t(62435),
        l = function () {
          var e = (0, a.pG)(),
            n = e.visible,
            t = e.showModal,
            i = e.hideModal,
            l = (0, c.useState)({}),
            o = r()(l, 2),
            s = o[0],
            u = o[1],
            d = (0, c.useState)(''),
            h = r()(d, 2),
            f = h[0],
            p = h[1],
            g = (0, c.useCallback)(
              function (e, n) {
                t(), u(n), p(e);
              },
              [t],
            );
          return {
            clickDocumentButton: g,
            visible: n,
            showModal: t,
            hideModal: i,
            selectedChunk: s,
            documentId: f,
          };
        };
    },
    61110: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var i = t(85265),
        r = t(97857),
        a = t.n(r),
        c = t(5574),
        l = t.n(c),
        o = t(93352),
        s = t(4772),
        u = t(21687),
        d = t(62435),
        h = t(49723),
        f = t(96449),
        p = 'documentContainer___kWzt7',
        g = t(86074),
        m = function (e) {
          var n = e.comment;
          return n.text
            ? (0, g.jsxs)('div', {
                className: 'Highlight__popup',
                children: [n.emoji, ' ', n.text],
              })
            : null;
        },
        v = function (e) {
          var n = e.chunk,
            t = e.documentId,
            i = e.visible,
            r = (0, o.pC)(t),
            c = (0, o.tl)(n),
            v = c.highlights,
            x = c.setWidthAndHeight,
            _ = (0, d.useRef)(function () {}),
            k = (0, d.useState)(!1),
            y = l()(k, 2),
            b = y[0],
            j = y[1],
            w = r(),
            C = (0, f.s)(w),
            Z = function () {};
          return (
            (0, d.useEffect)(
              function () {
                j(i);
              },
              [i],
            ),
            (0, d.useEffect)(
              function () {
                v.length > 0 && b && (j(!1), _.current(v[0]));
              },
              [v, b],
            ),
            (0, g.jsx)('div', {
              className: p,
              children: (0, g.jsx)(h.Hz, {
                url: w,
                beforeLoad: (0, g.jsx)(u.Z, { active: !0 }),
                workerSrc: '/pdfjs-dist/pdf.worker.min.js',
                errorMessage: (0, g.jsx)(s.Z, { children: C }),
                children: function (e) {
                  return (
                    e.getPage(1).then(function (e) {
                      var n = e.getViewport({ scale: 1 }),
                        t = n.width,
                        i = n.height;
                      x(t, i);
                    }),
                    (0, g.jsx)(h.Nb, {
                      pdfDocument: e,
                      enableAreaSelection: function (e) {
                        return e.altKey;
                      },
                      onScrollChange: Z,
                      scrollRef: function (e) {
                        (_.current = e), j(!0);
                      },
                      onSelectionFinished: function () {
                        return null;
                      },
                      highlightTransform: function (e, n, t, i, r, c, l) {
                        var o = !Boolean(e.content && e.content.image)
                          ? (0, g.jsx)(h.y$, {
                              isScrolledTo: l,
                              position: e.position,
                              comment: e.comment,
                            })
                          : (0, g.jsx)(h.PD, {
                              isScrolledTo: l,
                              highlight: e,
                              onChange: function () {},
                            });
                        return (0, g.jsx)(
                          h.GI,
                          {
                            popupContent: (0, g.jsx)(m, a()({}, e)),
                            onMouseOver: function (n) {
                              return t(e, function () {
                                return n;
                              });
                            },
                            onMouseOut: i,
                            children: o,
                          },
                          n,
                        );
                      },
                      highlights: v,
                    })
                  );
                },
              }),
            })
          );
        },
        x = function (e) {
          var n = e.visible,
            t = void 0 !== n && n,
            r = e.hideModal,
            a = e.documentId,
            c = e.chunk;
          return (0, g.jsx)(i.Z, {
            title: 'Document Previewer',
            onClose: r,
            open: t,
            width: '50vw',
            children: (0, g.jsx)(v, { documentId: a, chunk: c, visible: t }),
          });
        };
    },
    96449: function (e, n, t) {
      'use strict';
      t.d(n, {
        s: function () {
          return d;
        },
      });
      var i = t(15009),
        r = t.n(i),
        a = t(99289),
        c = t.n(a),
        l = t(5574),
        o = t.n(l),
        s = t(87066),
        u = t(62435),
        d = function (e) {
          var n = (0, u.useState)(''),
            t = o()(n, 2),
            i = t[0],
            a = t[1],
            l = (0, u.useCallback)(
              c()(
                r()().mark(function n() {
                  var t, i;
                  return r()().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), s.Z.get(e);
                        case 2:
                          (t = n.sent),
                            0 !== (i = t.data).code &&
                              a(null == i ? void 0 : i.message);
                        case 5:
                        case 'end':
                          return n.stop();
                      }
                  }, n);
                }),
              ),
              [e],
            );
          return (
            (0, u.useEffect)(
              function () {
                l();
              },
              [l],
            ),
            i
          );
        };
    },
    46008: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return H;
        },
      });
      var i = t(97857),
        r = t.n(i),
        a = t(13769),
        c = t.n(a),
        l = t(43714),
        o = t(46693),
        s = t(5089),
        u = t(45605),
        d = t(55241),
        h = t(86250),
        f = t(15867),
        p = t(27856),
        g = t.n(p),
        m = t(62435),
        v = t(95246),
        x = t(59632),
        _ = t.n(x),
        k = t(86592),
        y = t(30402),
        b = t(7657),
        j = t(78600),
        w = t(77437),
        C = t(88718),
        Z = t(93352),
        I = t(67421),
        S = (t(81897), t(71250)),
        N = t(35293),
        E = t(93967),
        M = t.n(E),
        D = t(78230),
        F = 'markdownContentWrapper___geQCE',
        P = 'referenceChunkImage___LoR67',
        T = 'referenceInnerChunkImage___WGd3z',
        R = 'referenceImagePreview___kcQgd',
        L = 'chunkContentText___vcP0P',
        z = 'documentLink___USud0',
        B = 'referenceIcon___g5Mgk',
        A = 'fileThumbnail___BzBir',
        G = t(86074),
        O = ['children', 'className', 'node'],
        H = function (e) {
          var n = e.reference,
            t = e.clickDocumentButton,
            i = e.content,
            a = (0, I.$G)().t,
            p = (0, Z.x2)(),
            x = p.setDocumentIds,
            E = p.data,
            H = (0, m.useMemo)(
              function () {
                var e = i;
                '' === e && (e = a('chat.searching'));
                var n = (0, N.fL)(e);
                return (0, D.pipe)(S.hH, S.CE)(n);
              },
              [i, a],
            );
          (0, m.useEffect)(
            function () {
              var e = null == n ? void 0 : n.doc_aggs;
              x(
                Array.isArray(e)
                  ? e.map(function (e) {
                      return e.doc_id;
                    })
                  : [],
              );
            },
            [n, x],
          );
          var W = (0, m.useCallback)(
              function (e, n, i, r) {
                return function () {
                  if (i) null == t || t(e, n);
                  else {
                    if (!r) return;
                    window.open(r, '_blank');
                  }
                };
              },
              [t],
            ),
            Q = (0, m.useCallback)(
              function (e) {
                var t,
                  i,
                  r = (
                    null !== (t = null == n ? void 0 : n.chunks) && void 0 !== t
                      ? t
                      : []
                  )[e],
                  a =
                    null == n || null === (i = n.doc_aggs) || void 0 === i
                      ? void 0
                      : i.find(function (e) {
                          return (
                            (null == e ? void 0 : e.doc_id) ===
                            (null == r ? void 0 : r.document_id)
                          );
                        }),
                  c = null == a ? void 0 : a.doc_id;
                return {
                  documentUrl: null == a ? void 0 : a.url,
                  fileThumbnail: c ? E[c] : '',
                  fileExtension: c
                    ? (0, s.RT)(null == a ? void 0 : a.doc_name)
                    : '',
                  imageId: null == r ? void 0 : r.image_id,
                  chunkItem: r,
                  documentId: c,
                  document: a,
                };
              },
              [
                E,
                null == n ? void 0 : n.chunks,
                null == n ? void 0 : n.doc_aggs,
              ],
            ),
            V = (0, m.useCallback)(
              function (e) {
                var n,
                  t = Q(e),
                  i = t.documentUrl,
                  r = t.fileThumbnail,
                  a = t.fileExtension,
                  c = t.imageId,
                  s = t.chunkItem,
                  u = t.documentId,
                  p = t.document;
                return (0, G.jsxs)(
                  'div',
                  {
                    className: 'flex gap-2',
                    children: [
                      c &&
                        (0, G.jsx)(d.Z, {
                          placement: 'left',
                          content: (0, G.jsx)(l.Z, { id: c, className: R }),
                          children: (0, G.jsx)(l.Z, { id: c, className: P }),
                        }),
                      (0, G.jsxs)('div', {
                        className: 'space-y-2 max-w-[40vw]',
                        children: [
                          (0, G.jsx)('div', {
                            dangerouslySetInnerHTML: {
                              __html: g().sanitize(
                                null !== (n = null == s ? void 0 : s.content) &&
                                  void 0 !== n
                                  ? n
                                  : '',
                              ),
                            },
                            className: M()(L),
                          }),
                          u &&
                            (0, G.jsxs)(h.Z, {
                              gap: 'small',
                              children: [
                                r
                                  ? (0, G.jsx)('img', {
                                      src: r,
                                      alt: '',
                                      className: A,
                                    })
                                  : (0, G.jsx)(o.Z, {
                                      name: 'file-icon/'.concat(a),
                                      width: 24,
                                    }),
                                (0, G.jsx)(f.ZP, {
                                  type: 'link',
                                  className: M()(z, 'text-wrap'),
                                  onClick: W(u, s, 'pdf' === a, i),
                                  children: null == p ? void 0 : p.doc_name,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  },
                  null == s ? void 0 : s.id,
                );
              },
              [Q, W],
            ),
            q = (0, m.useCallback)(
              function (e) {
                return _()(e, N.If, function (e, n) {
                  var t = (function (e) {
                      return Number(e.slice(2, -2));
                    })(e),
                    i = Q(t),
                    r = i.documentUrl,
                    a = i.fileExtension,
                    c = i.imageId,
                    o = i.chunkItem,
                    s = i.documentId,
                    h = null == o ? void 0 : o.doc_type;
                  return (0, S.od)(h)
                    ? (0, G.jsx)(l.Z, {
                        id: c,
                        className: T,
                        onClick: s ? W(s, o, 'pdf' === a, r) : function () {},
                      })
                    : (0, G.jsx)(
                        d.Z,
                        {
                          content: V(t),
                          children: (0, G.jsx)(u.Z, { className: B }),
                        },
                        n,
                      );
                });
              },
              [V, Q, W],
            );
          return (0, G.jsx)(v.U, {
            rehypePlugins: [
              function () {
                return function (e) {
                  (0, C.S4)(e, 'text', function (e, n) {
                    var t = n.at(-1);
                    'custom-typography' !== t.tagName &&
                      'code' !== t.tagName &&
                      ((e.type = 'element'),
                      (e.tagName = 'custom-typography'),
                      (e.properties = {}),
                      (e.children = [{ type: 'text', value: e.value }]));
                  });
                };
              },
              y.Z,
              b.Z,
            ],
            remarkPlugins: [j.Z, w.Z],
            className: F,
            components: {
              'custom-typography': function (e) {
                var n = e.children;
                return q(n);
              },
              code: function (e) {
                var n = e.children,
                  t = e.className,
                  i = (e.node, c()(e, O)),
                  a = /language-(\w+)/.exec(t || '');
                return a
                  ? (0, G.jsx)(
                      k.Z,
                      r()(
                        r()({}, i),
                        {},
                        {
                          PreTag: 'div',
                          language: a[1],
                          wrapLongLines: !0,
                          children: String(n).replace(/\n$/, ''),
                        },
                      ),
                    )
                  : (0, G.jsx)(
                      'code',
                      r()(
                        r()({}, i),
                        {},
                        { className: M()(t, 'text-wrap'), children: n },
                      ),
                    );
              },
            },
            children: H,
          });
        };
    },
    35293: function (e, n, t) {
      'use strict';
      t.d(n, {
        If: function () {
          return l;
        },
        fL: function () {
          return o;
        },
        oI: function () {
          return a;
        },
      });
      var i = t(1079),
        r = t(96486),
        a = function (e, n) {
          var t,
            a,
            c = (
              null === (t = e.message) || void 0 === t
                ? void 0
                : t.filter(function (e) {
                    return e.role === i.Cs.Assistant;
                  })
            ).findIndex(function (e) {
              return e.id === n.id;
            }),
            l = (0, r.isEmpty)(null == n ? void 0 : n.reference)
              ? (null !== (a = null == e ? void 0 : e.reference) && void 0 !== a
                  ? a
                  : [])[c]
              : null == n
                ? void 0
                : n.reference;
          return null != l ? l : { doc_aggs: [], chunks: [], total: 0 };
        },
        c = /(#{2}\d+\${2})/g,
        l = /\[ID:(\d+)\]/g,
        o = function (e) {
          return e.replace(c, function (e) {
            return '[ID:'.concat(e.slice(2, -2), ']');
          });
        };
    },
    4772: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(86250),
        r = t(38925),
        a = t(86968),
        c = (t(62435), 'errorWrapper___QfVXQ'),
        l = t(86074),
        o = function (e) {
          var n = e.children,
            t = (0, a.qM)('fileManager').t;
          return (0, l.jsx)(i.Z, {
            align: 'center',
            justify: 'center',
            className: c,
            children: (0, l.jsx)(r.Z, {
              type: 'error',
              message: (0, l.jsx)('h2', { children: n || t('fileError') }),
            }),
          });
        };
    },
    85821: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return me;
          },
        });
      var i = t(97857),
        r = t.n(i),
        a = t(5574),
        c = t.n(a),
        l = t(3234),
        o = t(7306),
        s = t(43714),
        u = t(61110),
        d = t(71580),
        h = t(74815),
        f = t(47221),
        p = t(86250),
        g = t(42075),
        m = t(18334),
        v = t(86968),
        x = t(10541),
        _ = t(99611),
        k = t(83062),
        y = t(15867),
        b = t(43106),
        j = t(86074),
        w = function (e) {
          var n = e.setSelectedDocumentIds,
            t = e.handleTesting,
            i = (0, x.aD)().documents,
            r = (0, x.wq)().documents,
            a =
              (null == r ? void 0 : r.length) > (null == i ? void 0 : i.length)
                ? r
                : i,
            c = (0, v.qM)('fileManager').t,
            l = [
              {
                title: 'Name',
                dataIndex: 'doc_name',
                key: 'doc_name',
                render: function (e) {
                  return (0, j.jsx)('p', { children: e });
                },
              },
              { title: 'Hits', dataIndex: 'count', key: 'count', width: 80 },
              {
                title: 'View',
                key: 'view',
                width: 50,
                render: function (e, n) {
                  var t = n.doc_id,
                    i = n.doc_name;
                  return (0, j.jsx)(m.Z, {
                    documentName: i,
                    documentId: t,
                    prefix: 'document',
                    children: (0, j.jsx)(k.Z, {
                      title: c('preview'),
                      children: (0, j.jsx)(y.ZP, {
                        type: 'text',
                        children: (0, j.jsx)(_.Z, { size: 20 }),
                      }),
                    }),
                  });
                },
              },
            ],
            o = {
              onChange: function (e) {
                t(e), n(e);
              },
              getCheckboxProps: function (e) {
                return {
                  disabled: 'Disabled User' === e.doc_name,
                  name: e.doc_name,
                };
              },
            };
          return (0, j.jsx)(b.Z, {
            columns: l,
            dataSource: a,
            showHeader: !1,
            rowSelection: o,
            rowKey: 'doc_id',
          });
        },
        C = t(67421),
        Z = 'selectFilesCollapse___tHbPt',
        I = 'selectFilesTitle___OKrhv',
        S = function (e) {
          var n,
            t,
            i = e.onTesting,
            r = e.selectedDocumentIds,
            a = e.setSelectedDocumentIds,
            c = (0, C.$G)().t,
            l = (0, x.wq)().documents,
            o = (0, x.aD)().documents,
            s = {
              documents:
                (null == l ? void 0 : l.length) >
                (null == o ? void 0 : o.length)
                  ? l
                  : o,
            }.documents;
          return (0, j.jsx)(f.Z, {
            expandIcon: function () {
              return (0, j.jsx)(h.r, {});
            },
            className: Z,
            items: [
              {
                key: '1',
                label: (0, j.jsx)(p.Z, {
                  justify: 'space-between',
                  align: 'center',
                  className: I,
                  children: (0, j.jsxs)(g.Z, {
                    children: [
                      (0, j.jsxs)('span', {
                        children: [
                          null !== (n = null == r ? void 0 : r.length) &&
                          void 0 !== n
                            ? n
                            : 0,
                          '/',
                          null !== (t = null == s ? void 0 : s.length) &&
                          void 0 !== t
                            ? t
                            : 0,
                        ],
                      }),
                      c('knowledgeDetails.filesSelected'),
                    ],
                  }),
                }),
                children: (0, j.jsx)('div', {
                  children: (0, j.jsx)(w, {
                    setSelectedDocumentIds: a,
                    handleTesting: i,
                  }),
                }),
              },
            ],
          });
        },
        N = t(46693),
        E = t(2938),
        M = t(21612),
        D = t(79531),
        F = t(4393),
        P = t(21687),
        T = t(96074),
        R = t(75081),
        L = t(2487),
        z = t(55241),
        B = t(66309),
        A = t(11980),
        G = t(66540),
        O = t(93967),
        H = t.n(O),
        W = t(27856),
        Q = t.n(W),
        V = t(96486),
        q = t(89888),
        K = t(52305),
        U = t(62435),
        J = t(46008),
        $ = (t(15009), t(99289), t(91028)),
        X = t(60806),
        Y = {
          searchPage: 'searchPage___TO5ok',
          card: 'card___scTJ7',
          tag: 'tag___F3dia',
          searchSide: 'searchSide___Ur4mG',
          modelForm: 'modelForm___v4GJN',
          checkGroup: 'checkGroup___YVVws',
          list: 'list___FBGDW',
          checkbox: 'checkbox___CWAZR',
          knowledgeName: 'knowledgeName___pQK8r',
          embeddingId: 'embeddingId___yxVE4',
          firstRenderContent: 'firstRenderContent___kYeDC',
          content: 'content___FJSce',
          hide: 'hide___d1U6O',
          main: 'main___G4gQT',
          highlightContent: 'highlightContent___GkhyP',
          documentReference: 'documentReference___Bj5k4',
          pagination: 'pagination___EGLXC',
          answerWrapper: 'answerWrapper___EIJcg',
          globalInput: 'globalInput___jG4B8',
          partialInput: 'partialInput___kQwzQ',
          searchInput: 'searchInput___ryNkF',
          appIcon: 'appIcon____OfF0',
          appName: 'appName___JGWuY',
          textclip: 'textclip___AoVgw',
          popupMarkdown: 'popupMarkdown___Zggfc',
          mindMapFloatButton: 'mindMapFloatButton___GL1ZJ',
        },
        ee = t(373),
        ne = t(85265),
        te = t(38703),
        ie = function (e) {
          var n,
            t,
            i,
            r,
            a,
            l,
            o = e.data,
            s = e.hideModal,
            u = e.visible,
            d = e.loading,
            h = (0, C.$G)().t,
            f =
              ((n = (0, U.useState)(0)),
              (t = c()(n, 2)),
              (i = t[0]),
              (r = t[1]),
              (a = (0, U.useRef)()),
              (l = (0, U.useCallback)(function () {
                a.current = setInterval(function () {
                  r(function (e) {
                    return (
                      e > 40 && clearInterval(null == a ? void 0 : a.current),
                      e + 1
                    );
                  });
                }, 1e3);
              }, [])),
              (0, U.useEffect)(
                function () {
                  return (
                    l(),
                    function () {
                      clearInterval(null == a ? void 0 : a.current);
                    }
                  );
                },
                [l],
              ),
              Number(((i / 43) * 100).toFixed(0)));
          return (0, j.jsx)(ne.Z, {
            title: h('chunk.mind'),
            onClose: s,
            open: u,
            width: '40vw',
            children: d
              ? (0, j.jsx)(p.Z, {
                  justify: 'center',
                  children: (0, j.jsx)(te.Z, {
                    type: 'circle',
                    percent: f,
                    size: 200,
                  }),
                })
              : (0, j.jsx)(ee.Z, {
                  data: o,
                  show: !0,
                  style: { width: '100%', height: '100%' },
                }),
          });
        },
        re = t(9783),
        ae = t.n(re),
        ce = t(19632),
        le = t.n(ce),
        oe = t(87547),
        se = t(7134),
        ue = t(22850),
        de = t(36582),
        he = M.Z.Sider,
        fe = function (e) {
          var n = e.isFirstRender,
            t = e.checkedList,
            i = e.setCheckedList,
            r = (0, x.VJ)(),
            a = r.list,
            l = r.loading,
            o = (0, U.useMemo)(
              function () {
                return a.reduce(function (e, n) {
                  var t,
                    i = e.find(function (e) {
                      return e.key === n.embd_id;
                    }),
                    r = { title: n.name, key: n.id, isLeaf: !0 };
                  i
                    ? null === (t = i.children) || void 0 === t || t.push(r)
                    : e.push({
                        title: n.embd_id,
                        key: n.embd_id,
                        isLeaf: !1,
                        children: [r],
                      });
                  return e;
                }, []);
              },
              [a],
            ),
            s = (0, U.useState)([]),
            u = c()(s, 2),
            d = u[0],
            h = u[1],
            f = (0, U.useState)([]),
            p = c()(f, 2),
            m = p[0],
            v = p[1],
            _ = (0, U.useState)(!0),
            k = c()(_, 2),
            y = k[0],
            b = k[1],
            w = (0, U.useCallback)(
              function (e) {
                var n = a.find(function (n) {
                  return n.id === e.key;
                });
                return (0, j.jsxs)(g.Z, {
                  children: [
                    e.isLeaf &&
                      (0, j.jsx)(se.C, {
                        size: 24,
                        icon: (0, j.jsx)(oe.Z, {}),
                        src: null == n ? void 0 : n.avatar,
                      }),
                    (0, j.jsx)(ue.Z.Text, {
                      ellipsis: { tooltip: e.title },
                      className: e.isLeaf ? Y.knowledgeName : Y.embeddingId,
                      children: e.title,
                    }),
                  ],
                });
              },
              [a],
            );
          return (
            (0, U.useEffect)(
              function () {
                var e,
                  n =
                    null === (e = o[0]) ||
                    void 0 === e ||
                    null === (e = e.children) ||
                    void 0 === e
                      ? void 0
                      : e.map(function (e) {
                          return e.key;
                        });
                n && i(n),
                  h(
                    o.map(function (e) {
                      return e.key;
                    }),
                  );
              },
              [o, h, i],
            ),
            (0, j.jsx)(he, {
              className: H()(
                Y.searchSide,
                ae()({}, Y.transparentSearchSide, n),
              ),
              theme: 'light',
              width: '20%',
              children: (0, j.jsx)(R.Z, {
                spinning: l,
                children: (0, j.jsx)(de.Z, {
                  className: Y.list,
                  checkable: !0,
                  onExpand: function (e) {
                    h(e), b(!1);
                  },
                  expandedKeys: d,
                  autoExpandParent: y,
                  onCheck: function (e, n) {
                    console.log('onCheck', e, n);
                    var t = e,
                      r = [],
                      c = n.node,
                      l = c.isLeaf,
                      o = c.checked,
                      s = c.key,
                      u = c.children;
                    if (l) {
                      var d = a.find(function (e) {
                        return e.id === s;
                      });
                      if (o) r = t;
                      else
                        r = t
                          .filter(function (e) {
                            return a.some(function (n) {
                              return n.id === e;
                            });
                          })
                          .map(function (e) {
                            var n;
                            return null ===
                              (n = a.find(function (n) {
                                return n.id === e;
                              })) || void 0 === n
                              ? void 0
                              : n.embd_id;
                          })
                          .some(function (e) {
                            return e !== (null == d ? void 0 : d.embd_id);
                          })
                          ? [s]
                          : t;
                    } else {
                      var h;
                      if (o) r = [];
                      else
                        r = [s].concat(
                          le()(
                            null !==
                              (h =
                                null == u
                                  ? void 0
                                  : u.map(function (e) {
                                      return e.key;
                                    })) && void 0 !== h
                              ? h
                              : [],
                          ),
                        );
                    }
                    i(r);
                  },
                  checkedKeys: t,
                  onSelect: function (e, n) {
                    console.log('onSelect', n), v(e);
                  },
                  selectedKeys: m,
                  treeData: o,
                  titleRender: w,
                }),
              }),
            })
          );
        },
        pe = M.Z.Content,
        ge = D.Z.Search,
        me = function () {
          var e,
            n = (0, C.$G)().t,
            t = (0, U.useState)([]),
            i = c()(t, 2),
            a = i[0],
            h = i[1],
            f = (0, x.aD)(),
            m = f.chunks,
            _ = f.total,
            b = (0, x.VJ)().list,
            w = (0, U.useMemo)(
              function () {
                return a.filter(function (e) {
                  return b.some(function (n) {
                    return n.id === e;
                  });
                });
              },
              [a, b],
            ),
            Z = (function (e) {
              var n,
                t = (0, E.H0)(X.Z.ask),
                i = t.send,
                r = t.answer,
                a = t.done,
                l = t.stopOutputMessage,
                o = (0, x.aX)(),
                s = o.testChunk,
                u = o.loading,
                d = (0, x.dT)(),
                h = d.testChunkAll,
                f = (d.loading, (0, U.useState)(!1)),
                p = c()(f, 2),
                g = p[0],
                m = p[1],
                v = (0, U.useState)({}),
                _ = c()(v, 2),
                k = _[0],
                y = _[1],
                b = (0, $.bP)(),
                j = b.fetchRelatedQuestions,
                w = b.data,
                C = (0, U.useState)(''),
                Z = c()(C, 2),
                I = Z[0],
                S = Z[1],
                N = (0, U.useState)(!0),
                M = c()(N, 2),
                D = M[0],
                F = M[1],
                P = (0, U.useState)([]),
                T = c()(P, 2),
                R = T[0],
                L = T[1],
                z = (0, E.ye)(),
                B = z.pagination,
                A = z.setPagination,
                G = (0, U.useCallback)(
                  function (n) {
                    var t = (0, V.trim)(n);
                    (0, V.isEmpty)(t) ||
                      (A({ page: 1 }),
                      F(!1),
                      y({}),
                      m(!0),
                      i({ kb_ids: e, question: t }),
                      s({
                        kb_id: e,
                        highlight: !0,
                        question: t,
                        page: 1,
                        size: B.pageSize,
                      }),
                      j(t));
                  },
                  [i, s, e, j, A, B.pageSize],
                ),
                O = (0, U.useCallback)(function (e) {
                  S(e.target.value);
                }, []),
                H = (0, U.useCallback)(
                  function (e) {
                    return function () {
                      g || (S(e), G(e));
                    };
                  },
                  [G, g],
                ),
                W = (0, U.useCallback)(
                  function (n) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1,
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 10,
                      r = (0, V.trim)(I);
                    g ||
                      (0, V.isEmpty)(r) ||
                      (s({
                        kb_id: e,
                        highlight: !0,
                        question: r,
                        doc_ids: null != n ? n : R,
                        page: t,
                        size: i,
                      }),
                      h({
                        kb_id: e,
                        highlight: !0,
                        question: r,
                        doc_ids: [],
                        page: t,
                        size: i,
                      }));
                  },
                  [g, I, e, s, R],
                );
              return (
                (0, U.useEffect)(
                  function () {
                    (0, V.isEmpty)(r) || y(r);
                  },
                  [r],
                ),
                (0, U.useEffect)(
                  function () {
                    a && m(!1);
                  },
                  [a],
                ),
                {
                  sendQuestion: G,
                  handleSearchStrChange: O,
                  handleClickRelatedQuestion: H,
                  handleTestChunk: W,
                  setSelectedDocumentIds: L,
                  loading: u,
                  sendingLoading: g,
                  answer: k,
                  relatedQuestions:
                    null !== (n = null == w ? void 0 : w.slice(0, 5)) &&
                    void 0 !== n
                      ? n
                      : [],
                  searchStr: I,
                  isFirstRender: D,
                  selectedDocumentIds: R,
                  isSearchStrEmpty: (0, V.isEmpty)((0, V.trim)(I)),
                  stopOutputMessage: l,
                }
              );
            })(w),
            I = Z.sendQuestion,
            D = Z.handleClickRelatedQuestion,
            O = Z.handleSearchStrChange,
            W = Z.handleTestChunk,
            ee = Z.setSelectedDocumentIds,
            ne = Z.answer,
            te = Z.sendingLoading,
            re = Z.relatedQuestions,
            ae = Z.searchStr,
            ce = Z.loading,
            le = Z.isFirstRender,
            oe = Z.selectedDocumentIds,
            se = Z.isSearchStrEmpty,
            ue = Z.stopOutputMessage,
            de = (0, d.B)(),
            he = de.visible,
            me = de.hideModal,
            ve = de.documentId,
            xe = de.selectedChunk,
            _e = de.clickDocumentButton,
            ke = (0, E.ye)().pagination,
            ye = (function (e, n) {
              var t = (0, v.pG)(),
                i = t.visible,
                r = t.showModal,
                a = t.hideModal,
                c = (0, U.useRef)(),
                l = (0, $.Ys)(),
                o = l.fetchMindMap;
              return {
                mindMap: l.data,
                mindMapVisible: i,
                mindMapLoading: l.loading,
                showMindMapModal: (0, U.useCallback)(
                  function () {
                    var t = { question: (0, V.trim)(n), kb_ids: e };
                    (0, V.isEmpty)(t.question) ||
                      (0, V.isEqual)(t, c.current) ||
                      ((c.current = t), o(t)),
                      r();
                  },
                  [o, r, n, e],
                ),
                hideMindMapModal: a,
              };
            })(w, ae),
            be = ye.mindMapVisible,
            je = ye.hideMindMapModal,
            we = ye.showMindMapModal,
            Ce = ye.mindMapLoading,
            Ze = ye.mindMap,
            Ie = (0, U.useCallback)(
              function () {
                I(ae);
              },
              [ae, I],
            ),
            Se = (0, j.jsx)(ge, {
              value: ae,
              onChange: O,
              placeholder: n('header.search'),
              allowClear: !0,
              addonAfter: te
                ? (0, j.jsx)(y.ZP, {
                    onClick: ue,
                    children: (0, j.jsx)(q.Z, {}),
                  })
                : (0, j.jsx)(y.ZP, {
                    onClick: Ie,
                    children: (0, j.jsx)(K.Z, {
                      className: 'size-5 text-blue-500',
                    }),
                  }),
              onSearch: I,
              size: 'large',
              loading: te,
              disabled: 0 === w.length,
              className: H()(
                Y.searchInput,
                le ? Y.globalInput : Y.partialInput,
              ),
            });
          return (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsxs)(M.Z, {
                className: Y.searchPage,
                children: [
                  (0, j.jsx)(fe, {
                    isFirstRender: le,
                    checkedList: w,
                    setCheckedList: h,
                  }),
                  (0, j.jsx)(M.Z, {
                    className: le ? Y.mainLayout : '',
                    children: (0, j.jsx)(pe, {
                      children: le
                        ? (0, j.jsx)(p.Z, {
                            justify: 'center',
                            className: Y.firstRenderContent,
                            children: (0, j.jsx)(p.Z, {
                              vertical: !0,
                              align: 'center',
                              gap: 'large',
                              children: Se,
                            }),
                          })
                        : (0, j.jsx)(p.Z, {
                            className: Y.content,
                            children: (0, j.jsxs)('section', {
                              className: Y.main,
                              children: [
                                Se,
                                (0, j.jsx)(F.Z, {
                                  title: (0, j.jsxs)(p.Z, {
                                    gap: 10,
                                    children: [
                                      (0, j.jsx)('img', {
                                        src: '/logo.svg',
                                        alt: '',
                                        width: 20,
                                      }),
                                      n('chat.answerTitle'),
                                    ],
                                  }),
                                  className: Y.answerWrapper,
                                  children:
                                    (0, V.isEmpty)(ne) && te
                                      ? (0, j.jsx)(P.Z, { active: !0 })
                                      : ne.answer &&
                                        (0, j.jsx)(J.Z, {
                                          loading: te,
                                          content: ne.answer,
                                          reference:
                                            null !== (e = ne.reference) &&
                                            void 0 !== e
                                              ? e
                                              : {},
                                          clickDocumentButton: _e,
                                        }),
                                }),
                                (0, j.jsx)(T.Z, {}),
                                (0, j.jsx)(S, {
                                  selectedDocumentIds: oe,
                                  setSelectedDocumentIds: ee,
                                  onTesting: W,
                                }),
                                (0, j.jsx)(T.Z, {}),
                                (0, j.jsx)(R.Z, {
                                  spinning: ce,
                                  children:
                                    (null == m ? void 0 : m.length) > 0 &&
                                    (0, j.jsx)(L.Z, {
                                      dataSource: m || [],
                                      className: Y.chunks,
                                      renderItem: function (e) {
                                        return (0, j.jsx)(L.Z.Item, {
                                          children: (0, j.jsx)(F.Z, {
                                            className: Y.card,
                                            children: (0, j.jsxs)(g.Z, {
                                              children: [
                                                (0, j.jsx)(s.s, {
                                                  id: e.img_id,
                                                }),
                                                (0, j.jsxs)(p.Z, {
                                                  vertical: !0,
                                                  gap: 10,
                                                  children: [
                                                    (0, j.jsx)(z.Z, {
                                                      content: (0, j.jsx)(
                                                        'div',
                                                        {
                                                          className:
                                                            Y.popupMarkdown,
                                                          children: (0, j.jsx)(
                                                            o.Z,
                                                            {
                                                              children:
                                                                e.content_with_weight,
                                                            },
                                                          ),
                                                        },
                                                      ),
                                                      children: (0, j.jsx)(
                                                        'div',
                                                        {
                                                          dangerouslySetInnerHTML:
                                                            {
                                                              __html:
                                                                Q().sanitize(
                                                                  ''.concat(
                                                                    e.highlight,
                                                                    '...',
                                                                  ),
                                                                ),
                                                            },
                                                          className:
                                                            Y.highlightContent,
                                                        },
                                                      ),
                                                    }),
                                                    (0, j.jsxs)(g.Z, {
                                                      className:
                                                        Y.documentReference,
                                                      onClick: function () {
                                                        return _e(e.doc_id, e);
                                                      },
                                                      children: [
                                                        (0, j.jsx)(l.Z, {
                                                          id: e.image_id,
                                                          name: e.docnm_kwd,
                                                        }),
                                                        e.docnm_kwd,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        });
                                      },
                                    }),
                                }),
                                (null == re ? void 0 : re.length) > 0 &&
                                  (0, j.jsx)(F.Z, {
                                    title: n('chat.relatedQuestion'),
                                    children: (0, j.jsx)(p.Z, {
                                      wrap: 'wrap',
                                      gap: '10px 0',
                                      children:
                                        null == re
                                          ? void 0
                                          : re.map(function (e, n) {
                                              return (0, j.jsx)(
                                                B.Z,
                                                {
                                                  className: Y.tag,
                                                  onClick: D(e),
                                                  children: e,
                                                },
                                                n,
                                              );
                                            }),
                                    }),
                                  }),
                                (0, j.jsx)(T.Z, {}),
                                (0, j.jsx)(
                                  A.Z,
                                  r()(
                                    r()({}, ke),
                                    {},
                                    {
                                      total: _,
                                      onChange: function (e, n) {
                                        var t;
                                        null === (t = ke.onChange) ||
                                          void 0 === t ||
                                          t.call(ke, e, n),
                                          W(oe, e, n);
                                      },
                                      className: Y.pagination,
                                    },
                                  ),
                                ),
                              ],
                            }),
                          }),
                    }),
                  }),
                ],
              }),
              !le &&
                !se &&
                !(0, V.isEmpty)(w) &&
                (0, j.jsx)(k.Z, {
                  title: n('chunk.mind'),
                  zIndex: 1,
                  children: (0, j.jsx)(G.Z, {
                    className: Y.mindMapFloatButton,
                    onClick: we,
                    icon: (0, j.jsx)(N.Z, {
                      name: 'paper-clip',
                      width: 24,
                      height: 30,
                    }),
                  }),
                }),
              he &&
                (0, j.jsx)(u.Z, {
                  visible: he,
                  hideModal: me,
                  documentId: ve,
                  chunk: xe,
                }),
              be &&
                (0, j.jsx)(ie, {
                  visible: be,
                  hideModal: je,
                  data: Ze,
                  loading: Ce,
                }),
            ],
          });
        };
    },
    74815: function (e, n, t) {
      'use strict';
      t.d(n, {
        r: function () {
          return s;
        },
      });
      var i = t(62435),
        r = Object.defineProperty,
        a = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty,
        l = Object.prototype.propertyIsEnumerable,
        o = (e, n, t) =>
          n in e
            ? r(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[n] = t);
      const s = (e) =>
        i.createElement(
          'svg',
          ((e, n) => {
            for (var t in n || (n = {})) c.call(n, t) && o(e, t, n[t]);
            if (a) for (var t of a(n)) l.call(n, t) && o(e, t, n[t]);
            return e;
          })(
            {
              width: 20,
              height: 20,
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            e,
          ),
          i.createElement('path', {
            d: 'M6.667 10h6.666M6.5 17.5h7c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092c.273-.535.273-1.235.273-2.635v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C15.6 2.5 14.9 2.5 13.5 2.5h-7c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2.5 4.4 2.5 5.1 2.5 6.5v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.4 17.5 5.1 17.5 6.5 17.5Z',
            stroke: '#7F56D9',
            strokeWidth: 2,
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
//# sourceMappingURL=p__search__index.a5f4b5ab.async.js.map
