(self.webpackChunk = self.webpackChunk || []).push([
  [948],
  {
    86968: function (e, t, n) {
      'use strict';
      n.d(t, {
        I3: function () {
          return v;
        },
        pG: function () {
          return p;
        },
        qM: function () {
          return g;
        },
      });
      var r = n(15009),
        c = n.n(r),
        a = n(99289),
        o = n.n(a),
        s = n(5574),
        u = n.n(s),
        i = n(21640),
        l = n(3321),
        d = (n(18446), n(62435)),
        f = n(67421),
        m = n(86074),
        p = function () {
          var e = (0, d.useState)(!1),
            t = u()(e, 2),
            n = t[0],
            r = t[1],
            c = (0, d.useCallback)(function () {
              r(!0);
            }, []),
            a = (0, d.useCallback)(function () {
              r(!1);
            }, []),
            o = (0, d.useCallback)(
              function () {
                r(!n);
              },
              [n],
            );
          return { visible: n, showModal: c, hideModal: a, switchVisible: o };
        };
      var v = function () {
          var e = l.Z.useApp().modal,
            t = (0, f.$G)().t;
          return (0, d.useCallback)(
            function (n) {
              var r = n.title,
                a = n.content,
                s = n.onOk,
                u = n.onCancel;
              return new Promise(function (n, l) {
                e.confirm({
                  title: null != r ? r : t('common.deleteModalTitle'),
                  icon: (0, m.jsx)(i.Z, {}),
                  content: a,
                  okText: t('common.ok'),
                  okType: 'danger',
                  cancelText: t('common.cancel'),
                  onOk: function () {
                    return o()(
                      c()().mark(function e() {
                        var t;
                        return c()().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    null == s ? void 0 : s()
                                  );
                                case 3:
                                  (t = e.sent),
                                    n(t),
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
                    null == u || u();
                  },
                });
              });
            },
            [t, e],
          );
        },
        g = function (e) {
          return (0, f.$G)('translation', { keyPrefix: e });
        };
    },
    4772: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(86250),
        c = n(38925),
        a = n(86968),
        o = (n(62435), 'errorWrapper___QfVXQ'),
        s = n(86074),
        u = function (e) {
          var t = e.children,
            n = (0, a.qM)('fileManager').t;
          return (0, s.jsx)(r.Z, {
            align: 'center',
            justify: 'center',
            className: o,
            children: (0, s.jsx)(c.Z, {
              type: 'error',
              message: (0, s.jsx)('h2', { children: t || n('fileError') }),
            }),
          });
        };
    },
    73041: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return B;
          },
        });
      var r = n(5574),
        c = n.n(r),
        a = n(40169),
        o = n(60806),
        s = n(86250),
        u = n(42028),
        i = n(75081),
        l = n(4772),
        d = n(9783),
        f = n.n(d),
        m = n(15009),
        p = n.n(m),
        v = n(99289),
        g = n.n(v),
        h = n(39918),
        _ = n(61921),
        k = n(40903),
        b = n(87066),
        w = n(59255),
        x = n(62435),
        y = function (e) {
          var t = (0, x.useState)(''),
            n = c()(t, 2),
            r = n[0],
            a = n[1],
            o = (0, x.useCallback)(
              g()(
                p()().mark(function t() {
                  var n, r;
                  return p()().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), b.Z.get(e);
                        case 2:
                          return (
                            (n = t.sent),
                            (r = n.data) instanceof ArrayBuffer ||
                              0 === r.code ||
                              a(r.message),
                            t.abrupt('return', n)
                          );
                        case 6:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              ),
              [e],
            );
          return (
            (0, x.useEffect)(
              function () {
                o();
              },
              [o],
            ),
            { fetchDocument: o, error: r }
          );
        },
        Z = function () {
          var e = (0, x.useCallback)(
            (function () {
              var e = g()(
                p()().mark(function e(t) {
                  var n;
                  return p()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            b.Z.get(t, {
                              headers: f()({}, h._n, (0, _.cD)()),
                              responseType: 'arraybuffer',
                            })
                          );
                        case 2:
                          return (n = e.sent), e.abrupt('return', n);
                        case 4:
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
            [],
          );
          return { fetchDocument: e };
        },
        F = 'docxViewerWrapper___bSxaq',
        T = 'box___sXFPE',
        C = n(86074),
        j = function (e) {
          var t = (function (e) {
              var t = (0, x.useState)(!0),
                n = c()(t, 2),
                r = n[0],
                a = n[1],
                o = (0, x.useState)(),
                s = c()(o, 2),
                u = s[0],
                i = s[1],
                l = Z().fetchDocument,
                d = (0, x.useRef)(null),
                f = (0, x.useCallback)(
                  g()(
                    p()().mark(function t() {
                      var n;
                      return p()().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.prev = 0), (t.next = 3), l(e);
                              case 3:
                                (n = t.sent),
                                  w
                                    .convertToHtml(
                                      { arrayBuffer: n.data },
                                      { includeDefaultStyleMap: !0 },
                                    )
                                    .then(function (e) {
                                      a(!0);
                                      var t = document.createElement('div');
                                      (t.className = 'document-container'),
                                        (t.innerHTML = e.value);
                                      var n = d.current;
                                      n && (n.innerHTML = t.outerHTML);
                                    })
                                    .catch(function () {
                                      a(!1);
                                    }),
                                  (t.next = 10);
                                break;
                              case 7:
                                (t.prev = 7),
                                  (t.t0 = t.catch(0)),
                                  i(t.t0.toString());
                              case 10:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 7]],
                      );
                    }),
                  ),
                  [e, l],
                );
              return (
                (0, x.useEffect)(
                  function () {
                    f();
                  },
                  [f],
                ),
                { succeed: r, containerRef: d, error: u }
              );
            })(e.filePath),
            n = t.succeed,
            r = t.containerRef,
            a = t.error;
          return (0, C.jsx)(C.Fragment, {
            children: n
              ? (0, C.jsx)('section', {
                  className: F,
                  children: (0, C.jsx)('div', {
                    id: 'docx',
                    ref: r,
                    className: T,
                    children: (0, C.jsx)(i.Z, {}),
                  }),
                })
              : (0, C.jsx)(l.Z, { children: a }),
          });
        },
        S =
          (n(21992),
          function (e) {
            var t = (function (e) {
                var t = (0, x.useState)(!0),
                  n = c()(t, 2),
                  r = n[0],
                  a = n[1],
                  o = Z().fetchDocument,
                  s = (0, x.useRef)(null),
                  u = y(e).error,
                  i = (0, x.useCallback)(
                    g()(
                      p()().mark(function t() {
                        var n, r, c;
                        return p()().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  s.current && (r = k.Z.init(s.current)),
                                  (t.next = 3),
                                  o(e)
                                );
                              case 3:
                                (c = t.sent),
                                  null === (n = r) ||
                                    void 0 === n ||
                                    n
                                      .preview(c.data)
                                      .then(function () {
                                        console.log('succeed'), a(!0);
                                      })
                                      .catch(function (e) {
                                        console.warn('failed', e),
                                          r.destroy(),
                                          a(!1);
                                      });
                              case 5:
                              case 'end':
                                return t.stop();
                            }
                        }, t);
                      }),
                    ),
                    [e, o],
                  );
                return (
                  (0, x.useEffect)(
                    function () {
                      i();
                    },
                    [i],
                  ),
                  { status: r, containerRef: s, error: u }
                );
              })(e.filePath),
              n = t.status,
              r = t.containerRef,
              a = t.error;
            return (0, C.jsx)('div', {
              id: 'excel',
              ref: r,
              style: { height: '100%', width: '100%' },
              children: n || (0, C.jsx)(l.Z, { children: a }),
            });
          }),
        L = n(98163),
        R = function (e) {
          var t = e.src,
            n = e.preview,
            r = void 0 !== n && n,
            a = (0, x.useState)(''),
            o = c()(a, 2),
            s = o[0],
            u = o[1];
          return (
            (0, x.useEffect)(
              function () {
                var e = (function () {
                  var e = g()(
                    p()().mark(function e() {
                      var n, r, c;
                      return p()().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  fetch(t, {
                                    headers: f()({}, h._n, (0, _.cD)()),
                                  })
                                );
                              case 3:
                                return (n = e.sent), (e.next = 6), n.blob();
                              case 6:
                                (r = e.sent),
                                  (c = URL.createObjectURL(r)),
                                  u(c),
                                  (e.next = 14);
                                break;
                              case 11:
                                (e.prev = 11),
                                  (e.t0 = e.catch(0)),
                                  console.error('Failed to load image:', e.t0);
                              case 14:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 11]],
                      );
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                return (
                  e(),
                  function () {
                    s && URL.revokeObjectURL(s);
                  }
                );
              },
              [t],
            ),
            s ? (0, C.jsx)(L.Z, { src: s, preview: r }) : null
          );
        },
        D = n(21687),
        E = n(49723),
        U = E.Hz,
        M = function (e) {
          var t = e.url,
            n = y(t).error,
            r = function () {},
            c = f()({}, h._n, (0, _.cD)());
          return (0, C.jsx)('div', {
            style: { width: '100%', height: '100%' },
            children: (0, C.jsx)(U, {
              url: t,
              httpHeaders: c,
              beforeLoad: (0, C.jsx)(D.Z, { active: !0 }),
              workerSrc: '/pdfjs-dist/pdf.worker.min.js',
              errorMessage: (0, C.jsx)(l.Z, { children: n }),
              onError: function (e) {
                console.warn(e);
              },
              children: function (e) {
                return (0, C.jsx)(E.Nb, {
                  pdfDocument: e,
                  enableAreaSelection: function (e) {
                    return e.altKey;
                  },
                  onScrollChange: r,
                  scrollRef: function () {},
                  onSelectionFinished: function () {
                    return null;
                  },
                  highlightTransform: function () {
                    return (0, C.jsx)('div', {});
                  },
                  highlights: [],
                });
              },
            }),
          });
        },
        P = n(51331),
        A = 'viewerWrapper___Hh0uK',
        O = 'image___OwcS1',
        B = function () {
          var e = (0, u.UO)().id,
            t = (0, u.lr)(),
            n = c()(t, 1)[0],
            r = n.get('ext'),
            i = n.get('prefix'),
            l = ''
              .concat(o.N, '/')
              .concat(i || 'file', '/get/')
              .concat(e);
          if ('html' !== r || !e)
            return (0, C.jsxs)('section', {
              className: A,
              children: [
                a.rU.includes(r) &&
                  (0, C.jsx)(s.Z, {
                    className: O,
                    align: 'center',
                    justify: 'center',
                    children: (0, C.jsx)(R, { src: l, preview: !1 }),
                  }),
                'pdf' === r && (0, C.jsx)(M, { url: l }),
                ('xlsx' === r || 'xls' === r) && (0, C.jsx)(S, { filePath: l }),
                'docx' === r && (0, C.jsx)(j, { filePath: l }),
              ],
            });
          (0, P.qh)(e);
        };
    },
    62386: function (e, t, n) {
      'use strict';
      var r = n(60806),
        c = n(66582),
        a = n(78158),
        o = r.Z.listFile,
        s = r.Z.removeFile,
        u = r.Z.uploadFile,
        i = r.Z.renameFile,
        l = r.Z.getAllParentFolder,
        d = r.Z.createFolder,
        f = r.Z.connectFileToKnowledge,
        m = r.Z.get_document_file,
        p = {
          listFile: { url: o, method: 'get' },
          removeFile: { url: s, method: 'post' },
          uploadFile: { url: u, method: 'post' },
          renameFile: { url: i, method: 'post' },
          getAllParentFolder: { url: l, method: 'get' },
          createFolder: { url: d, method: 'post' },
          connectFileToKnowledge: { url: f, method: 'post' },
          getFile: { url: r.Z.getFile, method: 'get', responseType: 'blob' },
          getDocumentFile: { url: m, method: 'get', responseType: 'blob' },
          moveFile: { url: r.Z.moveFile, method: 'post' },
        },
        v = (0, c.Z)(p, a.ZP);
      t.Z = v;
    },
    60806: function (e, t, n) {
      'use strict';
      n.d(t, {
        N: function () {
          return r;
        },
      });
      var r = '/v1';
      t.Z = {
        login: ''.concat(r, '/user/login'),
        logout: ''.concat(r, '/user/logout'),
        register: ''.concat(r, '/user/register'),
        setting: ''.concat(r, '/user/setting'),
        user_info: ''.concat(r, '/user/info'),
        tenant_info: ''.concat(r, '/user/tenant_info'),
        set_tenant_info: ''.concat(r, '/user/set_tenant_info'),
        login_channels: ''.concat(r, '/user/login/channels'),
        login_channel: function (e) {
          return ''.concat(r, '/user/login/').concat(e);
        },
        addTenantUser: function (e) {
          return ''.concat(r, '/tenant/').concat(e, '/user');
        },
        listTenantUser: function (e) {
          return ''.concat(r, '/tenant/').concat(e, '/user/list');
        },
        deleteTenantUser: function (e, t) {
          return ''.concat(r, '/tenant/').concat(e, '/user/').concat(t);
        },
        listTenant: ''.concat(r, '/tenant/list'),
        agreeTenant: function (e) {
          return ''.concat(r, '/tenant/agree/').concat(e);
        },
        factories_list: ''.concat(r, '/llm/factories'),
        llm_list: ''.concat(r, '/llm/list'),
        my_llm: ''.concat(r, '/llm/my_llms'),
        set_api_key: ''.concat(r, '/llm/set_api_key'),
        add_llm: ''.concat(r, '/llm/add_llm'),
        delete_llm: ''.concat(r, '/llm/delete_llm'),
        deleteFactory: ''.concat(r, '/llm/delete_factory'),
        llm_tools: ''.concat(r, '/plugin/llm_tools'),
        kb_list: ''.concat(r, '/kb/list'),
        create_kb: ''.concat(r, '/kb/create'),
        update_kb: ''.concat(r, '/kb/update'),
        rm_kb: ''.concat(r, '/kb/rm'),
        get_kb_detail: ''.concat(r, '/kb/detail'),
        getKnowledgeGraph: function (e) {
          return ''.concat(r, '/kb/').concat(e, '/knowledge_graph');
        },
        listTag: function (e) {
          return ''.concat(r, '/kb/').concat(e, '/tags');
        },
        listTagByKnowledgeIds: ''.concat(r, '/kb/tags'),
        removeTag: function (e) {
          return ''.concat(r, '/kb/').concat(e, '/rm_tags');
        },
        renameTag: function (e) {
          return ''.concat(r, '/kb/').concat(e, '/rename_tag');
        },
        chunk_list: ''.concat(r, '/chunk/list'),
        create_chunk: ''.concat(r, '/chunk/create'),
        set_chunk: ''.concat(r, '/chunk/set'),
        get_chunk: ''.concat(r, '/chunk/get'),
        switch_chunk: ''.concat(r, '/chunk/switch'),
        rm_chunk: ''.concat(r, '/chunk/rm'),
        retrieval_test: ''.concat(r, '/chunk/retrieval_test'),
        knowledge_graph: ''.concat(r, '/chunk/knowledge_graph'),
        get_document_list: ''.concat(r, '/document/list'),
        document_change_status: ''.concat(r, '/document/change_status'),
        document_rm: ''.concat(r, '/document/rm'),
        document_delete: ''.concat(r, '/api/document'),
        document_rename: ''.concat(r, '/document/rename'),
        document_create: ''.concat(r, '/document/create'),
        document_run: ''.concat(r, '/document/run'),
        document_change_parser: ''.concat(r, '/document/change_parser'),
        document_thumbnails: ''.concat(r, '/document/thumbnails'),
        get_document_file: ''.concat(r, '/document/get'),
        document_upload: ''.concat(r, '/document/upload'),
        web_crawl: ''.concat(r, '/document/web_crawl'),
        document_infos: ''.concat(r, '/document/infos'),
        upload_and_parse: ''.concat(r, '/document/upload_and_parse'),
        parse: ''.concat(r, '/document/parse'),
        setMeta: ''.concat(r, '/document/set_meta'),
        setDialog: ''.concat(r, '/dialog/set'),
        getDialog: ''.concat(r, '/dialog/get'),
        removeDialog: ''.concat(r, '/dialog/rm'),
        listDialog: ''.concat(r, '/dialog/list'),
        setConversation: ''.concat(r, '/conversation/set'),
        getConversation: ''.concat(r, '/conversation/get'),
        getConversationSSE: ''.concat(r, '/conversation/getsse'),
        listConversation: ''.concat(r, '/conversation/list'),
        removeConversation: ''.concat(r, '/conversation/rm'),
        completeConversation: ''.concat(r, '/conversation/completion'),
        deleteMessage: ''.concat(r, '/conversation/delete_msg'),
        thumbup: ''.concat(r, '/conversation/thumbup'),
        tts: ''.concat(r, '/conversation/tts'),
        ask: ''.concat(r, '/conversation/ask'),
        mindmap: ''.concat(r, '/conversation/mindmap'),
        getRelatedQuestions: ''.concat(r, '/conversation/related_questions'),
        createToken: ''.concat(r, '/api/new_token'),
        listToken: ''.concat(r, '/api/token_list'),
        removeToken: ''.concat(r, '/api/rm'),
        getStats: ''.concat(r, '/api/stats'),
        createExternalConversation: ''.concat(r, '/api/new_conversation'),
        getExternalConversation: ''.concat(r, '/api/conversation'),
        completeExternalConversation: ''.concat(r, '/api/completion'),
        uploadAndParseExternal: ''.concat(r, '/api/document/upload_and_parse'),
        listFile: ''.concat(r, '/file/list'),
        uploadFile: ''.concat(r, '/file/upload'),
        removeFile: ''.concat(r, '/file/rm'),
        renameFile: ''.concat(r, '/file/rename'),
        getAllParentFolder: ''.concat(r, '/file/all_parent_folder'),
        createFolder: ''.concat(r, '/file/create'),
        connectFileToKnowledge: ''.concat(r, '/file2document/convert'),
        getFile: ''.concat(r, '/file/get'),
        moveFile: ''.concat(r, '/file/mv'),
        getSystemVersion: ''.concat(r, '/system/version'),
        getSystemStatus: ''.concat(r, '/system/status'),
        getSystemTokenList: ''.concat(r, '/system/token_list'),
        createSystemToken: ''.concat(r, '/system/new_token'),
        listSystemToken: ''.concat(r, '/system/token_list'),
        removeSystemToken: ''.concat(r, '/system/token'),
        getSystemConfig: ''.concat(r, '/system/config'),
        setLangfuseConfig: ''.concat(r, '/langfuse/api_key'),
        listTemplates: ''.concat(r, '/canvas/templates'),
        listCanvas: ''.concat(r, '/canvas/list'),
        listCanvasTeam: ''.concat(r, '/canvas/listteam'),
        getCanvas: ''.concat(r, '/canvas/get'),
        getCanvasSSE: ''.concat(r, '/canvas/getsse'),
        removeCanvas: ''.concat(r, '/canvas/rm'),
        setCanvas: ''.concat(r, '/canvas/set'),
        settingCanvas: ''.concat(r, '/canvas/setting'),
        getListVersion: ''.concat(r, '/canvas/getlistversion'),
        getVersion: ''.concat(r, '/canvas/getversion'),
        resetCanvas: ''.concat(r, '/canvas/reset'),
        runCanvas: ''.concat(r, '/canvas/completion'),
        testDbConnect: ''.concat(r, '/canvas/test_db_connect'),
        getInputElements: ''.concat(r, '/canvas/input_elements'),
        debug: ''.concat(r, '/canvas/debug'),
        getMcpServerList: ''.concat(r, '/mcp_server/list'),
        getMultipleMcpServers: ''.concat(r, '/mcp_server/get_multiple'),
        getMcpServer: function (e) {
          return ''.concat(r, '/mcp_server/get/').concat(e);
        },
        createMcpServer: ''.concat(r, '/mcp_server/create'),
        updateMcpServer: ''.concat(r, '/mcp_server/update'),
        deleteMcpServer: ''.concat(r, '/mcp_server/rm'),
      };
    },
    51331: function (e, t, n) {
      'use strict';
      n.d(t, {
        AG: function () {
          return _;
        },
        De: function () {
          return w;
        },
        P2: function () {
          return d;
        },
        Ph: function () {
          return l;
        },
        _V: function () {
          return i;
        },
        qh: function () {
          return v;
        },
        td: function () {
          return b;
        },
        uA: function () {
          return h;
        },
        vn: function () {
          return f;
        },
      });
      var r = n(15009),
        c = n.n(r),
        a = n(99289),
        o = n.n(a),
        s = n(40169),
        u = n(62386),
        i = function (e) {
          return new Promise(function (t, n) {
            var r = new FileReader();
            r.readAsDataURL(e),
              (r.onload = function () {
                var e = new Image();
                (e.src = r.result),
                  (e.onload = function () {
                    var n = document.createElement('canvas'),
                      r = n.getContext('2d'),
                      c = e.width,
                      a = e.height,
                      o = 100;
                    c > a && c > o
                      ? ((a = (a * o) / c), (c = o))
                      : a > o && ((c = (c * o) / a), (a = o)),
                      (n.width = c),
                      (n.height = a),
                      null == r || r.drawImage(e, 0, 0, c, a);
                    var s = n.toDataURL('image/png');
                    t(s);
                  }),
                  (e.onerror = n);
              }),
              (r.onerror = n);
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
        f = (function () {
          var e = o()(
            c()().mark(function e(t) {
              var n, r, a;
              return c()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(Array.isArray(t) && t.length > 0)) {
                        e.next = 11;
                        break;
                      }
                      if (((n = t[0]), !(r = n.originFileObj))) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 6), i(r);
                    case 6:
                      return (a = e.sent), e.abrupt('return', a);
                    case 10:
                      return e.abrupt('return', n.thumbUrl);
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
      function m(e, t) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = o()(
          c()().mark(function e(t, n) {
            var r, a;
            return c()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), u.Z.getDocumentFile({}, t);
                  case 2:
                    return (
                      (r = e.sent),
                      (a = new Blob([r.data], { type: n || r.data.type })),
                      e.abrupt('return', a)
                    );
                  case 5:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function v(e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = o()(
          c()().mark(function e(t) {
            var n, r, a;
            return c()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), m(t, s.nK.Html);
                  case 2:
                    (n = e.sent),
                      (r = URL.createObjectURL(n)),
                      ((a = document.createElement('a')).href = r),
                      a.click(),
                      URL.revokeObjectURL(r);
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var h = function (e, t) {
          var n = window.URL.createObjectURL(e),
            r = document.createElement('a');
          (r.href = n),
            t && (r.download = t),
            r.click(),
            window.URL.revokeObjectURL(n);
        },
        _ = (function () {
          var e = o()(
            c()().mark(function e(t) {
              var n, r, a;
              return c()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (n = t.id), (r = t.filename), (e.next = 3), m(n);
                    case 3:
                      (a = e.sent), h(a, r);
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
        k = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        b = function (e) {
          for (
            var t = 0, n = ('string' == typeof e ? parseInt(e, 10) : e) || 0;
            n >= 1024 && ++t;

          )
            n /= 1024;
          return n.toFixed(n < 10 && t > 0 ? 1 : 0) + ' ' + k[t];
        },
        w = (function () {
          var e = o()(
            c()().mark(function e(t, n) {
              var r;
              return c()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (r = new Blob([JSON.stringify(t)], { type: s.nK.Json })),
                        h(r, n);
                    case 2:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })();
    },
    66582: function (e, t, n) {
      'use strict';
      var r = n(97857),
        c = n.n(r),
        a = n(57557),
        o = n.n(a),
        s = ['post', 'delete', 'put'];
      t.Z = function (e, t) {
        var n = {},
          r = function (r) {
            n[r] = function (n, a) {
              var u = e[r].url,
                i = e[r];
              return (
                a && (u = u + '/' + a),
                s.some(function (t) {
                  return t === e[r].method.toLowerCase();
                })
                  ? t(u, { method: e[r].method, data: n })
                  : 'get' === e[r].method || 'GET' === e[r].method
                    ? t.get(
                        u,
                        c()(
                          c()({}, o()(i, ['method', 'url'])),
                          {},
                          { params: n },
                        ),
                      )
                    : void 0
              );
            };
          };
        for (var a in e) r(a);
        return n;
      };
    },
    78158: function (e, t, n) {
      'use strict';
      n.d(t, {
        v_: function () {
          return b;
        },
      });
      var r = n(15009),
        c = n.n(r),
        a = n(99289),
        o = n.n(a),
        s = n(9783),
        u = n.n(s),
        i = n(97857),
        l = n.n(i),
        d = n(39918),
        f = n(54707),
        m = n(61921),
        p = n(26855),
        v = n(45360),
        g = n(11238),
        h = n(31098),
        _ = {
          200: f.Z.t('message.200'),
          201: f.Z.t('message.201'),
          202: f.Z.t('message.202'),
          204: f.Z.t('message.204'),
          400: f.Z.t('message.400'),
          401: f.Z.t('message.401'),
          403: f.Z.t('message.403'),
          404: f.Z.t('message.404'),
          406: f.Z.t('message.406'),
          410: f.Z.t('message.410'),
          413: f.Z.t('message.413'),
          422: f.Z.t('message.422'),
          500: f.Z.t('message.500'),
          502: f.Z.t('message.502'),
          503: f.Z.t('message.503'),
          504: f.Z.t('message.504'),
        },
        k = (0, g.l7)({
          errorHandler: function (e) {
            var t = e.response;
            if ('Failed to fetch' === e.message)
              p.Z.error({
                description: f.Z.t('message.networkAnomalyDescription'),
                message: f.Z.t('message.networkAnomaly'),
              });
            else if (t && t.status) {
              var n = _[t.status] || t.statusText,
                r = t.status,
                c = t.url;
              p.Z.error({
                message: ''
                  .concat(f.Z.t('message.requestError'), ' ')
                  .concat(r, ': ')
                  .concat(c),
                description: n,
              });
            }
            return null != t ? t : { data: { code: 1999 } };
          },
          timeout: 3e5,
          getResponse: !0,
        });
      k.interceptors.request.use(function (e, t) {
        var n = (0, h._y)(t.data),
          r = (0, h._y)(t.params);
        return {
          url: e,
          options: l()(
            l()({}, t),
            {},
            {
              data: n,
              params: r,
              headers: l()(
                l()({}, t.skipToken ? void 0 : u()({}, d._n, (0, m.cD)())),
                t.headers,
              ),
              interceptors: !0,
            },
          ),
        };
      }),
        k.interceptors.response.use(
          (function () {
            var e = o()(
              c()().mark(function e(t, n) {
                var r, a;
                return c()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((413 !== (null == t ? void 0 : t.status) &&
                            504 !== (null == t ? void 0 : t.status)) ||
                            v.ZP.error(_[null == t ? void 0 : t.status]),
                          'blob' !== n.responseType)
                        ) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt('return', t);
                      case 3:
                        return (
                          (e.next = 5),
                          null == t || null === (r = t.clone()) || void 0 === r
                            ? void 0
                            : r.json()
                        );
                      case 5:
                        return (
                          100 === (null == (a = e.sent) ? void 0 : a.code)
                            ? v.ZP.error(null == a ? void 0 : a.message)
                            : 401 === (null == a ? void 0 : a.code)
                              ? (p.Z.error({
                                  message: null == a ? void 0 : a.message,
                                  description: null == a ? void 0 : a.message,
                                  duration: 3,
                                }),
                                m.ZP.removeAll(),
                                (0, m.rf)())
                              : 0 !== (null == a ? void 0 : a.code) &&
                                p.Z.error({
                                  message: ''
                                    .concat(f.Z.t('message.hint'), ' : ')
                                    .concat(null == a ? void 0 : a.code),
                                  description: null == a ? void 0 : a.message,
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
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        (t.ZP = k);
      var b = function (e, t) {
        return k.post(e, { data: t });
      };
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
    64838: function () {},
    27922: function () {},
    15212: function () {},
    85777: function () {},
    76929: function () {},
    45036: function () {},
  },
]);
//# sourceMappingURL=p__document-viewer__index.a8db4156.async.js.map
