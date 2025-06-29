(self.webpackChunk = self.webpackChunk || []).push([
  [4659],
  {
    11218: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var s = n(15009),
        i = n.n(s),
        r = n(99289),
        o = n.n(r),
        c = n(5574),
        a = n.n(c),
        u = n(97857),
        l = n.n(u),
        p = n(19632),
        d = n.n(p),
        f = n(86968),
        g = n(64082),
        v = n(31365),
        m = n(38703),
        x = n(85576),
        h = n(86250),
        b = n(92783),
        k = n(84567),
        w = n(92398),
        y = n(62435),
        F = 'uploader___ezBcw',
        j = n(86074),
        Z = v.Z.Dragger,
        M = function (e) {
          var t = e.directory,
            n = e.fileList,
            s = e.setFileList,
            i = e.uploadProgress,
            r = (0, f.qM)('fileManager').t,
            o = {
              multiple: !0,
              onRemove: function (e) {
                var t = n.indexOf(e),
                  i = n.slice();
                i.splice(t, 1), s(i);
              },
              beforeUpload: function (e) {
                return (
                  s(function (t) {
                    return [].concat(d()(t), [e]);
                  }),
                  !1
                );
              },
              directory: t,
              fileList: n,
              progress: { strokeWidth: 2 },
            };
          return (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsx)(m.Z, { percent: i, showInfo: !1 }),
              (0, j.jsxs)(
                Z,
                l()(
                  l()({}, o),
                  {},
                  {
                    className: F,
                    children: [
                      (0, j.jsx)('p', {
                        className: 'ant-upload-drag-icon',
                        children: (0, j.jsx)(g.Z, {}),
                      }),
                      (0, j.jsx)('p', {
                        className: 'ant-upload-text',
                        children: r('uploadTitle'),
                      }),
                      (0, j.jsx)('p', {
                        className: 'ant-upload-hint',
                        children: r('uploadDescription'),
                      }),
                      !1,
                    ],
                  },
                ),
              ),
            ],
          });
        },
        C = function (e) {
          var t = e.visible,
            n = e.hideModal,
            s = e.loading,
            r = e.onOk,
            c = e.uploadFileList,
            u = e.setUploadFileList,
            l = e.uploadProgress,
            p = e.setUploadProgress,
            g = (0, f.qM)('fileManager').t,
            v = (0, y.useState)('local'),
            m = a()(v, 2),
            F = m[0],
            Z = m[1],
            C = (0, y.useState)(!1),
            P = a()(C, 2),
            L = P[0],
            K = P[1],
            _ = (0, y.useState)([]),
            R = a()(_, 2),
            O = R[0],
            I = R[1],
            q = (0, y.useState)([]),
            S = a()(q, 2),
            N = S[0],
            U = S[1],
            T = (function () {
              var e = o()(
                i()().mark(function e() {
                  var t;
                  return i()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (100 !== l) {
                            e.next = 3;
                            break;
                          }
                          return null == n || n(), e.abrupt('return');
                        case 3:
                          return (
                            (e.next = 5),
                            null == r
                              ? void 0
                              : r(
                                  c
                                    ? {
                                        parseOnCreation: L,
                                        directoryFileList: N,
                                      }
                                    : [].concat(d()(O), d()(N)),
                                )
                          );
                        case 5:
                          return (t = e.sent), e.abrupt('return', t);
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            D = [
              {
                key: '1',
                label: g('file'),
                children: (0, j.jsx)(M, {
                  directory: !1,
                  fileList: c || O,
                  setFileList: u || I,
                  uploadProgress: l,
                }),
              },
              {
                key: '2',
                label: g('directory'),
                children: (0, j.jsx)(M, {
                  directory: !0,
                  fileList: N,
                  setFileList: U,
                  uploadProgress: l,
                }),
              },
            ];
          return (0, j.jsx)(j.Fragment, {
            children: (0, j.jsx)(x.Z, {
              title: g('uploadFile'),
              open: t,
              onOk: T,
              onCancel: n,
              confirmLoading: s,
              afterClose: function () {
                u ? (u([]), null == p || p(0)) : I([]), U([]);
              },
              children: (0, j.jsxs)(h.Z, {
                gap: 'large',
                vertical: !0,
                children: [
                  (0, j.jsx)(b.Z, {
                    options: [
                      { label: g('local'), value: 'local' },
                      { label: g('s3'), value: 's3' },
                    ],
                    block: !0,
                    value: F,
                    onChange: Z,
                  }),
                  'local' === F
                    ? (0, j.jsxs)(j.Fragment, {
                        children: [
                          (0, j.jsx)(k.Z, {
                            checked: L,
                            onChange: function (e) {
                              return K(e.target.checked);
                            },
                            children: g('parseOnCreation'),
                          }),
                          (0, j.jsx)(w.Z, { defaultActiveKey: '1', items: D }),
                        ],
                      })
                    : g('comingSoon', { keyPrefix: 'common' }),
                ],
              }),
            }),
          });
        };
    },
    18334: function (e, t, n) {
      'use strict';
      var s = n(5089),
        i = (n(62435), n(86074));
      t.Z = function (e) {
        var t = e.children,
          n = e.link,
          r = e.preventDefault,
          o = void 0 !== r && r,
          c = e.color,
          a = void 0 === c ? 'rgb(15, 79, 170)' : c,
          u = e.documentId,
          l = e.documentName,
          p = e.prefix,
          d = void 0 === p ? 'file' : p,
          f = e.className,
          g = n,
          v = (0, s.RT)(l);
        return (
          n ||
            (g = '/document/'
              .concat(u, '?ext=')
              .concat(v, '&prefix=')
              .concat(d)),
          (0, i.jsx)('a', {
            target: '_blank',
            onClick:
              !o || (0, s.Ep)(v)
                ? void 0
                : function (e) {
                    return e.preventDefault();
                  },
            href: g,
            rel: 'noreferrer',
            style: { color: f ? '' : a, wordBreak: 'break-all' },
            className: f,
            children: t,
          })
        );
      };
    },
    89545: function (e, t, n) {
      'use strict';
      var s = n(15009),
        i = n.n(s),
        r = n(99289),
        o = n.n(r),
        c = n(5574),
        a = n.n(c),
        u = n(86968),
        l = n(22150),
        p = n(85576),
        d = n(79531),
        f = n(62435),
        g = n(86074);
      t.Z = function (e) {
        var t = e.visible,
          n = e.hideModal,
          s = e.loading,
          r = e.initialName,
          c = e.onOk,
          v = l.Z.useForm(),
          m = a()(v, 1)[0],
          x = (0, u.qM)('common').t,
          h = (function () {
            var e = o()(
              i()().mark(function e() {
                var t;
                return i()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), m.validateFields();
                      case 2:
                        return (t = e.sent), e.abrupt('return', c(t.name));
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (
          (0, f.useEffect)(
            function () {
              t && m.setFieldValue('name', r);
            },
            [r, m, t],
          ),
          (0, g.jsx)(p.Z, {
            title: x('rename'),
            open: t,
            onOk: h,
            onCancel: function () {
              n();
            },
            okButtonProps: { loading: s },
            confirmLoading: s,
            children: (0, g.jsx)(l.Z, {
              name: 'basic',
              labelCol: { span: 4 },
              wrapperCol: { span: 20 },
              style: { maxWidth: 600 },
              onFinish: function (e) {
                console.log('Success:', e);
              },
              onFinishFailed: function (e) {
                console.log('Failed:', e);
              },
              autoComplete: 'off',
              form: m,
              children: (0, g.jsx)(l.Z.Item, {
                label: x('name'),
                name: 'name',
                rules: [{ required: !0, message: x('namePlaceholder') }],
                children: (0, g.jsx)(d.Z, {}),
              }),
            }),
          })
        );
      };
    },
    46693: function (e, t, n) {
      'use strict';
      n.d(t, {
        $: function () {
          return x;
        },
      });
      var s,
        i = n(97857),
        r = n.n(i),
        o = n(13769),
        c = n.n(o),
        a = n(39386),
        u = n(27080),
        l = n(16165),
        p = n(87547),
        d = n(7134),
        f = n(86074),
        g = ['name', 'width', 'height', 'imgClass'],
        v = [];
      try {
        (s = n(78131)),
          (v = s.keys().map(function (e) {
            return { name: e.replace(/\.\/(.*)\.\w+$/, '$1'), value: s(e) };
          }));
      } catch (e) {
        console.warn(e), (v = []);
      }
      var m = function (e) {
          var t = e.name,
            n = e.width,
            s = e.height,
            i = e.imgClass,
            o = c()(e, g),
            a = v.find(function (e) {
              return e.name === t;
            });
          return (0, f.jsx)(
            l.Z,
            r()(
              {
                component: function () {
                  return (0, f.jsx)('img', {
                    src: null == a ? void 0 : a.value,
                    alt: '',
                    width: n,
                    height: s,
                    className: (0, u.cn)(i, 'max-w-full'),
                  });
                },
              },
              o,
            ),
          );
        },
        x = function (e) {
          var t = e.name,
            n = e.height,
            s = void 0 === n ? 48 : n,
            i = e.width,
            r = void 0 === i ? 48 : i,
            o = e.size,
            c = void 0 === o ? 'large' : o,
            u = e.imgClass,
            l = a.s[t];
          return l
            ? (0, f.jsx)(m, {
                name: 'llm/'.concat(l),
                width: r,
                height: s,
                imgClass: u,
              })
            : (0, f.jsx)(d.C, {
                shape: 'square',
                size: c,
                icon: (0, f.jsx)(p.Z, {}),
              });
        };
      t.Z = m;
    },
    89645: function (e, t, n) {
      'use strict';
      n.d(t, {
        BU: function () {
          return Z;
        },
        O6: function () {
          return M;
        },
        VK: function () {
          return P;
        },
        YA: function () {
          return R;
        },
        d: function () {
          return F;
        },
        kR: function () {
          return K;
        },
        n_: function () {
          return _;
        },
        t: function () {
          return j;
        },
        tI: function () {
          return L;
        },
        vF: function () {
          return C;
        },
      });
      var s = n(97857),
        i = n.n(s),
        r = n(15009),
        o = n.n(r),
        c = n(99289),
        a = n.n(c),
        u = n(5574),
        l = n.n(u),
        p = n(62386),
        d = n(51331),
        f = n(4527),
        g = n(78551),
        v = n(30202),
        m = n(45360),
        x = n(62435),
        h = n(67421),
        b = n(42028),
        k = n(2938),
        w = n(96100),
        y = function () {
          var e = (0, b.lr)(),
            t = l()(e, 1)[0].get('folderId');
          return null != t ? t : '';
        },
        F = function () {
          var e,
            t = (0, f.D)({
              mutationKey: ['fetchPureFileList'],
              gcTime: 0,
              mutationFn:
                ((e = a()(
                  o()().mark(function e(t) {
                    var n, s;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), p.Z.listFile({ parent_id: t });
                          case 2:
                            return (
                              (n = e.sent), (s = n.data), e.abrupt('return', s)
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (t) {
                  return e.apply(this, arguments);
                }),
            }),
            n = t.mutateAsync;
          return { loading: t.isPending, fetchList: n };
        },
        j = function () {
          var e,
            t,
            n = (0, k.Qe)(),
            s = n.searchString,
            r = n.handleInputChange,
            c = (0, k.ye)(),
            u = c.pagination,
            l = c.setPagination,
            d = y(),
            f = (0, g.a)({
              queryKey: ['fetchFileList', i()({ id: d, searchString: s }, u)],
              initialData: {},
              gcTime: 0,
              queryFn:
                ((t = a()(
                  o()().mark(function e() {
                    var t, n;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              p.Z.listFile({
                                parent_id: d,
                                keywords: s,
                                page_size: u.pageSize,
                                page: u.current,
                              })
                            );
                          case 2:
                            return (
                              (t = e.sent), (n = t.data), e.abrupt('return', n)
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            }),
            v = f.data,
            m = f.isFetching,
            h = (0, x.useCallback)(
              function (e) {
                l({ page: 1 }), r(e);
              },
              [r, l],
            );
          return i()(
            i()({}, v),
            {},
            {
              searchString: s,
              handleInputChange: h,
              pagination: i()(
                i()({}, u),
                {},
                {
                  total:
                    null == v || null === (e = v.data) || void 0 === e
                      ? void 0
                      : e.total,
                },
              ),
              setPagination: l,
              loading: m,
            },
          );
        },
        Z = function () {
          var e,
            t = (0, w.fz)().setPaginationParams,
            n = (0, v.NL)(),
            s = (0, f.D)({
              mutationKey: ['deleteFile'],
              mutationFn:
                ((e = a()(
                  o()().mark(function e(s) {
                    var i, r;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), p.Z.removeFile(s);
                          case 2:
                            return (
                              (i = e.sent),
                              0 === (r = i.data).code &&
                                (t(1),
                                n.invalidateQueries({
                                  queryKey: ['fetchFileList'],
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
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: s.data,
            loading: s.isPending,
            deleteFile: s.mutateAsync,
          };
        },
        M = function () {
          var e,
            t = (0, f.D)({
              mutationKey: ['downloadFile'],
              mutationFn:
                ((e = a()(
                  o()().mark(function e(t) {
                    var n, s;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), p.Z.getFile({}, t.id);
                          case 2:
                            (n = e.sent),
                              (s = new Blob([n.data], { type: n.data.type })),
                              (0, d.uA)(s, t.filename);
                          case 5:
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
            data: t.data,
            loading: t.isPending,
            downloadFile: t.mutateAsync,
          };
        },
        C = function () {
          var e,
            t = (0, v.NL)(),
            n = (0, h.$G)().t,
            s = (0, f.D)({
              mutationKey: ['renameFile'],
              mutationFn:
                ((e = a()(
                  o()().mark(function e(s) {
                    var i, r;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), p.Z.renameFile(s);
                          case 2:
                            return (
                              (i = e.sent),
                              0 === (r = i.data).code &&
                                (m.ZP.success(n('message.renamed')),
                                t.invalidateQueries({
                                  queryKey: ['fetchFileList'],
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
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: s.data,
            loading: s.isPending,
            renameFile: s.mutateAsync,
          };
        },
        P = function () {
          var e,
            t = y(),
            n = (0, g.a)({
              queryKey: ['fetchParentFolderList', t],
              initialData: [],
              enabled: !!t,
              queryFn:
                ((e = a()(
                  o()().mark(function e() {
                    var n, s, i, r;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              p.Z.getAllParentFolder({ fileId: t })
                            );
                          case 2:
                            return (
                              (i = e.sent),
                              (r = i.data),
                              e.abrupt(
                                'return',
                                null !==
                                  (n =
                                    null == r ||
                                    null === (s = r.data) ||
                                    void 0 === s ||
                                    null === (s = s.parent_folders) ||
                                    void 0 === s
                                      ? void 0
                                      : s.toReversed()) && void 0 !== n
                                  ? n
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
          return n.data;
        },
        L = function () {
          var e,
            t = (0, w.fz)().setPaginationParams,
            n = (0, v.NL)(),
            s = (0, h.$G)().t,
            r = (0, f.D)({
              mutationKey: ['createFolder'],
              mutationFn:
                ((e = a()(
                  o()().mark(function e(r) {
                    var c, a;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              p.Z.createFolder(
                                i()(i()({}, r), {}, { type: 'folder' }),
                              )
                            );
                          case 2:
                            return (
                              (c = e.sent),
                              0 === (a = c.data).code &&
                                (m.ZP.success(s('message.created')),
                                t(1),
                                n.invalidateQueries({
                                  queryKey: ['fetchFileList'],
                                })),
                              e.abrupt('return', a.code)
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
            data: r.data,
            loading: r.isPending,
            createFolder: r.mutateAsync,
          };
        },
        K = function () {
          var e,
            t = (0, w.fz)().setPaginationParams,
            n = (0, h.$G)().t,
            s = (0, v.NL)(),
            i = (0, f.D)({
              mutationKey: ['uploadFile'],
              mutationFn:
                ((e = a()(
                  o()().mark(function e(i) {
                    var r, c, a, u, l;
                    return o()().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = i.fileList),
                                (c = i.fileList.map(function (e) {
                                  return e.webkitRelativePath;
                                })),
                                (a = new FormData()).append(
                                  'parent_id',
                                  i.parentId,
                                ),
                                r.forEach(function (e, t) {
                                  a.append('file', e), a.append('path', c[t]);
                                }),
                                (e.prev = 5),
                                (e.next = 8),
                                p.Z.uploadFile(a)
                              );
                            case 8:
                              return (
                                0 ===
                                  (null == (l = e.sent)
                                    ? void 0
                                    : l.data.code) &&
                                  (m.ZP.success(n('message.uploaded')),
                                  t(1),
                                  s.invalidateQueries({
                                    queryKey: ['fetchFileList'],
                                  })),
                                e.abrupt(
                                  'return',
                                  null == l ||
                                    null === (u = l.data) ||
                                    void 0 === u
                                    ? void 0
                                    : u.code,
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
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: i.data,
            loading: i.isPending,
            uploadFile: i.mutateAsync,
          };
        },
        _ = function () {
          var e,
            t = (0, v.NL)(),
            n = (0, h.$G)().t,
            s = (0, f.D)({
              mutationKey: ['connectFileToKnowledge'],
              mutationFn:
                ((e = a()(
                  o()().mark(function e(s) {
                    var i, r;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), p.Z.connectFileToKnowledge(s);
                          case 2:
                            return (
                              (i = e.sent),
                              0 === (r = i.data).code &&
                                (m.ZP.success(n('message.operated')),
                                t.invalidateQueries({
                                  queryKey: ['fetchFileList'],
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
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: s.data,
            loading: s.isPending,
            connectFileToKnowledge: s.mutateAsync,
          };
        },
        R = function () {
          var e,
            t = (0, v.NL)(),
            n = (0, h.$G)().t,
            s = (0, f.D)({
              mutationKey: ['moveFile'],
              mutationFn:
                ((e = a()(
                  o()().mark(function e(s) {
                    var i, r;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), p.Z.moveFile(s);
                          case 2:
                            return (
                              (i = e.sent),
                              0 === (r = i.data).code &&
                                (m.ZP.success(n('message.operated')),
                                t.invalidateQueries({
                                  queryKey: ['fetchFileList'],
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
                function (t) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: s.data,
            loading: s.isPending,
            moveFile: s.mutateAsync,
          };
        };
    },
    79019: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return ce;
          },
        });
      var s = n(89645),
        i = n(28382),
        r = n(22850),
        o = n(86250),
        c = n(15867),
        a = n(42075),
        u = n(66309),
        l = n(43106),
        p = n(18334),
        d = n(86968),
        f = n(5089),
        g = n(29158),
        v = n(86548),
        m = n(23430),
        x = n(99611),
        h = n(83062),
        b = n(34839),
        k = n(13718),
        w = n(15009),
        y = n.n(w),
        F = n(99289),
        j = n.n(F),
        Z = n(5574),
        M = n.n(Z),
        C = n(62435),
        P = n(42028),
        L = function () {
          var e = (0, P.lr)(),
            t = M()(e, 1)[0].get('folderId');
          return null != t ? t : '';
        },
        K = function (e, t) {
          var n = (0, s.BU)().deleteFile,
            i = (0, d.I3)(),
            r = L();
          return {
            handleRemoveFile: function () {
              var s;
              i({
                onOk:
                  ((s = j()(
                    y()().mark(function s() {
                      return y()().wrap(function (s) {
                        for (;;)
                          switch ((s.prev = s.next)) {
                            case 0:
                              return (
                                (s.next = 2), n({ fileIds: e, parentId: r })
                              );
                            case 2:
                              return 0 === s.sent && t([]), s.abrupt('return');
                            case 5:
                            case 'end':
                              return s.stop();
                          }
                      }, s);
                    }),
                  )),
                  function () {
                    return s.apply(this, arguments);
                  }),
              });
            },
          };
        },
        _ = n(86074),
        R = function (e) {
          var t = e.record,
            n = e.setCurrentRecord,
            i = e.showRenameModal,
            r = e.showConnectToKnowledgeModal,
            o = e.setSelectedRowKeys,
            u = e.showMoveFileModal,
            l = t.id,
            w = !1,
            y = (0, d.qM)('fileManager').t,
            F = K([l], o).handleRemoveFile,
            j = (0, s.O6)(),
            Z = j.downloadFile,
            M = j.loading,
            C = (0, f.RT)(t.name),
            P = 'knowledgebase' === t.source_type;
          return (0, _.jsxs)(a.Z, {
            size: 0,
            children: [
              P ||
                (0, _.jsx)(h.Z, {
                  title: y('addToKnowledge'),
                  children: (0, _.jsx)(c.ZP, {
                    type: 'text',
                    onClick: function () {
                      r(t);
                    },
                    children: (0, _.jsx)(g.Z, { size: 20 }),
                  }),
                }),
              P ||
                (0, _.jsx)(h.Z, {
                  title: y('rename', { keyPrefix: 'common' }),
                  children: (0, _.jsx)(c.ZP, {
                    type: 'text',
                    disabled: w,
                    onClick: function () {
                      n(t), i(t);
                    },
                    children: (0, _.jsx)(v.Z, { size: 20 }),
                  }),
                }),
              P ||
                (0, _.jsx)(h.Z, {
                  title: y('move', { keyPrefix: 'common' }),
                  children: (0, _.jsx)(c.ZP, {
                    type: 'text',
                    disabled: w,
                    onClick: function () {
                      u([l]);
                    },
                    className: 'flex items-end',
                    children: (0, _.jsx)(b.Z, { className: 'size-4' }),
                  }),
                }),
              P ||
                (0, _.jsx)(h.Z, {
                  title: y('delete', { keyPrefix: 'common' }),
                  children: (0, _.jsx)(c.ZP, {
                    type: 'text',
                    disabled: w,
                    onClick: F,
                    className: 'flex items-end',
                    children: (0, _.jsx)(k.Z, { className: 'size-4' }),
                  }),
                }),
              'folder' !== t.type &&
                (0, _.jsx)(h.Z, {
                  title: y('download', { keyPrefix: 'common' }),
                  children: (0, _.jsx)(c.ZP, {
                    type: 'text',
                    disabled: w,
                    loading: M,
                    onClick: function () {
                      Z({ id: l, filename: t.name });
                    },
                    children: (0, _.jsx)(m.Z, { size: 20 }),
                  }),
                }),
              (0, f.Ep)(C) &&
                (0, _.jsx)(p.Z, {
                  documentId: l,
                  documentName: t.name,
                  color: 'black',
                  children: (0, _.jsx)(h.Z, {
                    title: y('preview'),
                    children: (0, _.jsx)(c.ZP, {
                      type: 'text',
                      children: (0, _.jsx)(x.Z, { size: 20 }),
                    }),
                  }),
                }),
            ],
          });
        },
        O = n(15360),
        I = n(95591),
        q = n(80882),
        S = n(68795),
        N = n(24969),
        U = n(85673),
        T = n(85418),
        D = n(79531),
        A = 'fileManagerWrapper___R9Ujv',
        z = 'filter___x1Xt2',
        B = 'linkButton___Dw8Oi',
        V = 'breadcrumbItemButton___qWlv3',
        E = function (e) {
          var t,
            n,
            i = e.selectedRowKeys,
            r = e.showFolderCreateModal,
            u = e.showFileUploadModal,
            l = e.setSelectedRowKeys,
            p = e.searchString,
            f = e.handleInputChange,
            g = e.showMoveFileModal,
            v = (0, d.qM)('knowledgeDetails').t,
            m = (function () {
              var e = (0, s.VK)();
              return 1 === e.length
                ? []
                : e.map(function (e) {
                    return {
                      title: '/' === e.name ? 'root' : e.name,
                      path: '/file?folderId='.concat(e.id),
                    };
                  });
            })(),
            x = ((n = (0, P.s0)()),
            {
              handleBreadcrumbClick: (0, C.useCallback)(
                function (e) {
                  e && n(e);
                },
                [n],
              ),
            }).handleBreadcrumbClick,
            h =
              'knowledgebase' ===
              (null === (t = (0, s.VK)().at(-1)) || void 0 === t
                ? void 0
                : t.source_type),
            w = (0, C.useMemo)(
              function () {
                return [
                  {
                    key: '1',
                    onClick: u,
                    label: (0, _.jsx)('div', {
                      children: (0, _.jsx)(c.ZP, {
                        type: 'link',
                        children: (0, _.jsxs)(a.Z, {
                          children: [
                            (0, _.jsx)(O.Z, {}),
                            v('uploadFile', { keyPrefix: 'fileManager' }),
                          ],
                        }),
                      }),
                    }),
                  },
                  { type: 'divider' },
                  {
                    key: '2',
                    onClick: r,
                    label: (0, _.jsx)('div', {
                      children: (0, _.jsx)(c.ZP, {
                        type: 'link',
                        children: (0, _.jsxs)(a.Z, {
                          children: [
                            (0, _.jsx)(I.Z, {}),
                            v('newFolder', { keyPrefix: 'fileManager' }),
                          ],
                        }),
                      }),
                    }),
                  },
                ];
              },
              [v, r, u],
            ),
            y = K(i, l).handleRemoveFile,
            F = (0, C.useCallback)(
              function () {
                g(i);
              },
              [i, g],
            ),
            j = 0 === i.length,
            Z = (0, C.useMemo)(
              function () {
                return [
                  {
                    key: '4',
                    onClick: y,
                    label: (0, _.jsxs)(o.Z, {
                      gap: 10,
                      children: [
                        (0, _.jsx)('span', {
                          className: 'flex items-center justify-center',
                          children: (0, _.jsx)(k.Z, { className: 'size-4' }),
                        }),
                        (0, _.jsx)('b', {
                          children: v('delete', { keyPrefix: 'common' }),
                        }),
                      ],
                    }),
                  },
                  {
                    key: '5',
                    onClick: F,
                    label: (0, _.jsxs)(o.Z, {
                      gap: 10,
                      children: [
                        (0, _.jsx)('span', {
                          className: 'flex items-center justify-center',
                          children: (0, _.jsx)(b.Z, { className: 'size-4' }),
                        }),
                        (0, _.jsx)('b', {
                          children: v('move', { keyPrefix: 'common' }),
                        }),
                      ],
                    }),
                  },
                ];
              },
              [F, v, y],
            );
          return (0, _.jsxs)('div', {
            className: z,
            children: [
              (0, _.jsx)(U.Z, {
                items: m,
                itemRender: function (e, t, n) {
                  var s;
                  return (null == e ? void 0 : e.path) ===
                    (null === (s = n[n.length - 1]) || void 0 === s
                      ? void 0
                      : s.path)
                    ? (0, _.jsx)('span', { children: e.title })
                    : (0, _.jsx)('span', {
                        className: V,
                        onClick: function () {
                          return x(e.path);
                        },
                        children: e.title,
                      });
                },
              }),
              (0, _.jsxs)(a.Z, {
                children: [
                  h ||
                    (0, _.jsx)(T.Z, {
                      menu: { items: Z },
                      placement: 'bottom',
                      arrow: !1,
                      disabled: j,
                      children: (0, _.jsx)(c.ZP, {
                        children: (0, _.jsxs)(a.Z, {
                          children: [
                            (0, _.jsxs)('b', { children: [' ', v('bulk')] }),
                            (0, _.jsx)(q.Z, {}),
                          ],
                        }),
                      }),
                    }),
                  (0, _.jsx)(D.Z, {
                    placeholder: v('searchFiles'),
                    value: p,
                    style: { width: 220 },
                    allowClear: !0,
                    onChange: f,
                    prefix: (0, _.jsx)(S.Z, {}),
                  }),
                  h ||
                    (0, _.jsx)(T.Z, {
                      menu: { items: w },
                      trigger: ['click'],
                      children: (0, _.jsx)(c.ZP, {
                        type: 'primary',
                        icon: (0, _.jsx)(N.Z, {}),
                        children: v('addFile'),
                      }),
                    }),
                ],
              }),
            ],
          });
        },
        G = n(11218),
        Y = n(89545),
        Q = n(46693),
        $ = n(31098),
        H = n(10541),
        W = n(22150),
        J = n(85576),
        X = n(34041),
        ee = function (e) {
          var t = e.visible,
            n = e.hideModal,
            s = e.onOk,
            i = e.initialValue,
            r = e.loading,
            o = W.Z.useForm(),
            c = M()(o, 1)[0],
            a = (0, H.VJ)().list,
            u = (0, d.qM)('fileManager').t,
            l =
              null == a
                ? void 0
                : a.map(function (e) {
                    return { label: e.name, value: e.id };
                  }),
            p = (function () {
              var e = j()(
                y()().mark(function e() {
                  var t, n, i;
                  return y()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), c.getFieldsValue();
                        case 2:
                          return (
                            (n = e.sent),
                            (i =
                              null !== (t = n.knowledgeIds) && void 0 !== t
                                ? t
                                : []),
                            e.abrupt('return', null == s ? void 0 : s(i))
                          );
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, C.useEffect)(
              function () {
                t && c.setFieldValue('knowledgeIds', i);
              },
              [t, i, c],
            ),
            (0, _.jsx)(J.Z, {
              title: u('addToKnowledge'),
              open: t,
              onOk: p,
              onCancel: n,
              confirmLoading: r,
              children: (0, _.jsx)(W.Z, {
                form: c,
                children: (0, _.jsx)(W.Z.Item, {
                  name: 'knowledgeIds',
                  noStyle: !0,
                  children: (0, _.jsx)(X.Z, {
                    mode: 'multiple',
                    allowClear: !0,
                    showSearch: !0,
                    style: { width: '100%' },
                    placeholder: u('pleaseSelect'),
                    options: l,
                    optionFilterProp: 'children',
                    filterOption: $.F8,
                  }),
                }),
              }),
            })
          );
        },
        te = function (e) {
          var t = e.visible,
            n = e.hideModal,
            s = e.loading,
            i = e.onOk,
            r = W.Z.useForm(),
            o = M()(r, 1)[0],
            c = (0, d.qM)('common').t,
            a = (function () {
              var e = j()(
                y()().mark(function e() {
                  var t;
                  return y()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), o.validateFields();
                        case 2:
                          return (t = e.sent), e.abrupt('return', i(t.name));
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, _.jsx)(J.Z, {
            title: c('newFolder', { keyPrefix: 'fileManager' }),
            open: t,
            onOk: a,
            onCancel: n,
            okButtonProps: { loading: s },
            confirmLoading: s,
            children: (0, _.jsx)(W.Z, {
              name: 'basic',
              labelCol: { span: 4 },
              wrapperCol: { span: 20 },
              style: { maxWidth: 600 },
              autoComplete: 'off',
              form: o,
              children: (0, _.jsx)(W.Z.Item, {
                label: c('name'),
                name: 'name',
                rules: [{ required: !0, message: c('namePlaceholder') }],
                children: (0, _.jsx)(D.Z, {}),
              }),
            }),
          });
        },
        ne = n(59847),
        se = n(67421),
        ie = function (e) {
          var t = e.value,
            n = e.onChange,
            i = (0, se.$G)().t,
            r = (0, s.d)().fetchList,
            o = (0, C.useState)([]),
            c = M()(o, 2),
            a = c[0],
            u = c[1],
            l = (0, C.useCallback)(
              (function () {
                var e = j()(
                  y()().mark(function e(t) {
                    var n, s;
                    return y()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (n = t.id), (e.next = 3), r(n);
                          case 3:
                            0 === (s = e.sent).code &&
                              u(function (e) {
                                return e.concat(
                                  s.data.files
                                    .filter(function (e) {
                                      return 'folder' === e.type;
                                    })
                                    .map(function (e) {
                                      return {
                                        id: e.id,
                                        pId: e.parent_id,
                                        value: e.id,
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
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [r],
            );
          return (
            (0, C.useEffect)(
              function () {
                null == l || l({ id: '', props: '' });
              },
              [l],
            ),
            (0, _.jsx)(ne.Z, {
              treeDataSimpleMode: !0,
              style: { width: '100%' },
              value: t,
              dropdownStyle: { maxHeight: 400, overflow: 'auto' },
              placeholder: i('fileManager.pleaseSelect'),
              onChange: function (e) {
                null == n || n(e);
              },
              loadData: l,
              treeData: a,
            })
          );
        },
        re = function (e) {
          var t = e.visible,
            n = e.hideModal,
            s = e.loading,
            i = e.onOk,
            r = W.Z.useForm(),
            o = M()(r, 1)[0],
            c = (0, d.qM)('fileManager').t,
            a = (function () {
              var e = j()(
                y()().mark(function e() {
                  var t;
                  return y()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), o.validateFields();
                        case 2:
                          return (t = e.sent), e.abrupt('return', i(t.name));
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, _.jsx)(J.Z, {
            title: c('move', { keyPrefix: 'common' }),
            open: t,
            onOk: a,
            onCancel: n,
            okButtonProps: { loading: s },
            confirmLoading: s,
            width: 600,
            children: (0, _.jsx)(W.Z, {
              name: 'basic',
              labelCol: { span: 6 },
              wrapperCol: { span: 18 },
              autoComplete: 'off',
              form: o,
              children: (0, _.jsx)(W.Z.Item, {
                label: c('destinationFolder'),
                name: 'name',
                rules: [{ required: !0, message: c('pleaseSelect') }],
                children: (0, _.jsx)(ie, {}),
              }),
            }),
          });
        },
        oe = r.Z.Text,
        ce = function () {
          var e,
            t = (0, d.qM)('fileManager').t,
            n = (function () {
              var e = (0, C.useState)([]),
                t = M()(e, 2),
                n = t[0],
                s = t[1];
              return {
                rowSelection: {
                  selectedRowKeys: n,
                  getCheckboxProps: function (e) {
                    return { disabled: 'knowledgebase' === e.source_type };
                  },
                  onChange: function (e) {
                    s(e);
                  },
                },
                setSelectedRowKeys: s,
              };
            })(),
            r = n.rowSelection,
            p = n.setSelectedRowKeys,
            g =
              ((e = (0, P.s0)()),
              (0, C.useCallback)(
                function (t) {
                  e('/file?folderId='.concat(t));
                },
                [e],
              )),
            v = (function () {
              var e = (0, C.useState)({}),
                t = M()(e, 2),
                n = t[0],
                i = t[1],
                r = (0, d.pG)(),
                o = r.visible,
                c = r.hideModal,
                a = r.showModal,
                u = (0, s.vF)(),
                l = u.renameFile,
                p = u.loading,
                f = (0, C.useCallback)(
                  (function () {
                    var e = j()(
                      y()().mark(function e(t) {
                        return y()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), l({ fileId: n.id, name: t })
                                );
                              case 2:
                                0 === e.sent && c();
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
                  [l, n, c],
                ),
                g = (0, C.useCallback)(
                  (function () {
                    var e = j()(
                      y()().mark(function e(t) {
                        return y()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                i(t), a();
                              case 2:
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
                  [a],
                );
              return {
                fileRenameLoading: p,
                initialFileName: n.name,
                onFileRenameOk: f,
                fileRenameVisible: o,
                hideFileRenameModal: c,
                showFileRenameModal: g,
              };
            })(),
            m = v.fileRenameVisible,
            x = v.fileRenameLoading,
            h = v.hideFileRenameModal,
            b = v.showFileRenameModal,
            k = v.initialFileName,
            w = v.onFileRenameOk,
            F = (function () {
              var e = (0, d.pG)(),
                t = e.visible,
                n = e.hideModal,
                i = e.showModal,
                r = (0, s.tI)(),
                o = r.createFolder,
                c = r.loading,
                a = L(),
                u = (0, C.useCallback)(
                  (function () {
                    var e = j()(
                      y()().mark(function e(t) {
                        return y()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), o({ parentId: a, name: t })
                                );
                              case 2:
                                0 === e.sent && n();
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
                  [o, n, a],
                );
              return {
                folderCreateLoading: c,
                onFolderCreateOk: u,
                folderCreateModalVisible: t,
                hideFolderCreateModal: n,
                showFolderCreateModal: i,
              };
            })(),
            Z = F.folderCreateModalVisible,
            K = F.showFolderCreateModal,
            O = F.hideFolderCreateModal,
            I = F.folderCreateLoading,
            q = F.onFolderCreateOk,
            S = (function () {
              var e = (0, d.pG)(),
                t = e.visible,
                n = e.hideModal,
                i = e.showModal,
                r = (0, s.kR)(),
                o = r.uploadFile,
                c = r.loading,
                a = L(),
                u = (0, C.useCallback)(
                  (function () {
                    var e = j()(
                      y()().mark(function e(t) {
                        var s;
                        return y()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!(t.length > 0)) {
                                  e.next = 6;
                                  break;
                                }
                                return (
                                  (e.next = 3), o({ fileList: t, parentId: a })
                                );
                              case 3:
                                return (
                                  0 === (s = e.sent) && n(),
                                  e.abrupt('return', s)
                                );
                              case 6:
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
                  [o, n, a],
                );
              return {
                fileUploadLoading: c,
                onFileUploadOk: u,
                fileUploadVisible: t,
                hideFileUploadModal: n,
                showFileUploadModal: i,
              };
            })(),
            N = S.fileUploadVisible,
            U = S.hideFileUploadModal,
            T = S.showFileUploadModal,
            D = S.fileUploadLoading,
            z = S.onFileUploadOk,
            V = (function () {
              var e = (0, d.pG)(),
                t = e.visible,
                n = e.hideModal,
                i = e.showModal,
                r = (0, s.n_)(),
                o = r.connectFileToKnowledge,
                c = r.loading,
                a = (0, C.useState)({}),
                u = M()(a, 2),
                l = u[0],
                p = u[1],
                f = (0, C.useMemo)(
                  function () {
                    var e;
                    return Array.isArray(null == l ? void 0 : l.kbs_info)
                      ? null == l || null === (e = l.kbs_info) || void 0 === e
                        ? void 0
                        : e.map(function (e) {
                            return e.kb_id;
                          })
                      : [];
                  },
                  [null == l ? void 0 : l.kbs_info],
                ),
                g = (0, C.useCallback)(
                  (function () {
                    var e = j()(
                      y()().mark(function e(t) {
                        var s;
                        return y()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), o({ fileIds: [l.id], kbIds: t })
                                );
                              case 2:
                                return (
                                  0 === (s = e.sent) && n(),
                                  e.abrupt('return', s)
                                );
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
                  [o, n, l.id],
                ),
                v = (0, C.useCallback)(
                  function (e) {
                    p(e), i();
                  },
                  [i],
                );
              return {
                initialValue: f,
                connectToKnowledgeLoading: c,
                onConnectToKnowledgeOk: g,
                connectToKnowledgeVisible: t,
                hideConnectToKnowledgeModal: n,
                showConnectToKnowledgeModal: v,
              };
            })(),
            H = V.connectToKnowledgeVisible,
            W = V.hideConnectToKnowledgeModal,
            J = V.showConnectToKnowledgeModal,
            X = V.onConnectToKnowledgeOk,
            ne = V.initialValue,
            se = V.connectToKnowledgeLoading,
            ie = (function (e) {
              var t = (0, d.pG)(),
                n = t.visible,
                i = t.hideModal,
                r = t.showModal,
                o = (0, s.YA)(),
                c = o.moveFile,
                a = o.loading,
                u = (0, C.useState)([]),
                l = M()(u, 2),
                p = l[0],
                f = l[1],
                g = (0, C.useCallback)(
                  (function () {
                    var t = j()(
                      y()().mark(function t(n) {
                        var s;
                        return y()().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  c({ src_file_ids: p, dest_file_id: n })
                                );
                              case 2:
                                return (
                                  0 === (s = t.sent) && (e([]), i()),
                                  t.abrupt('return', s)
                                );
                              case 5:
                              case 'end':
                                return t.stop();
                            }
                        }, t);
                      }),
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                  [c, i, p, e],
                ),
                v = (0, C.useCallback)(
                  function (e) {
                    f(e), r();
                  },
                  [r],
                );
              return {
                initialValue: '',
                moveFileLoading: a,
                onMoveFileOk: g,
                moveFileVisible: n,
                hideMoveFileModal: i,
                showMoveFileModal: v,
              };
            })(p),
            ce = ie.showMoveFileModal,
            ae = ie.moveFileVisible,
            ue = ie.onMoveFileOk,
            le = ie.hideMoveFileModal,
            pe = ie.moveFileLoading,
            de = (0, s.t)(),
            fe = de.pagination,
            ge = de.data,
            ve = de.searchString,
            me = de.handleInputChange,
            xe = de.loading,
            he = [
              {
                title: t('name'),
                dataIndex: 'name',
                key: 'name',
                fixed: 'left',
                render: function (e, t) {
                  return (0, _.jsxs)(o.Z, {
                    gap: 10,
                    align: 'center',
                    children: [
                      (0, _.jsx)(Q.Z, {
                        name: 'file-icon/'.concat(
                          'folder' === t.type ? 'folder' : (0, f.RT)(e),
                        ),
                        width: 24,
                      }),
                      'folder' === t.type
                        ? (0, _.jsx)(c.ZP, {
                            type: 'link',
                            className: B,
                            onClick: function () {
                              return g(t.id);
                            },
                            children: (0, _.jsx)(oe, {
                              ellipsis: { tooltip: e },
                              children: e,
                            }),
                          })
                        : (0, _.jsx)(oe, {
                            ellipsis: { tooltip: e },
                            children: e,
                          }),
                    ],
                  });
                },
              },
              {
                title: t('uploadDate'),
                dataIndex: 'create_time',
                key: 'create_time',
                render: function (e) {
                  return (0, i.p6)(e);
                },
              },
              {
                title: t('size'),
                dataIndex: 'size',
                key: 'size',
                render: function (e) {
                  return (0, $.EQ)((e / 1024).toFixed(2)) + ' KB';
                },
              },
              {
                title: t('knowledgeBase'),
                dataIndex: 'kbs_info',
                key: 'kbs_info',
                render: function (e) {
                  return Array.isArray(e)
                    ? (0, _.jsx)(a.Z, {
                        wrap: !0,
                        children:
                          null == e
                            ? void 0
                            : e.map(function (e) {
                                return (0, _.jsx)(
                                  u.Z,
                                  { color: 'blue', children: e.kb_name },
                                  e.kb_id,
                                );
                              }),
                      })
                    : '';
                },
              },
              {
                title: t('action'),
                dataIndex: 'action',
                key: 'action',
                render: function (e, t) {
                  return (0, _.jsx)(R, {
                    record: t,
                    setCurrentRecord: function (e) {
                      console.info(e);
                    },
                    showRenameModal: b,
                    showMoveFileModal: ce,
                    showConnectToKnowledgeModal: J,
                    setSelectedRowKeys: p,
                  });
                },
              },
            ];
          return (0, _.jsxs)('section', {
            className: A,
            children: [
              (0, _.jsx)(E, {
                searchString: ve,
                handleInputChange: me,
                selectedRowKeys: r.selectedRowKeys,
                showFolderCreateModal: K,
                showFileUploadModal: T,
                setSelectedRowKeys: p,
                showMoveFileModal: ce,
              }),
              (0, _.jsx)(l.Z, {
                dataSource: null == ge ? void 0 : ge.files,
                columns: he,
                rowKey: 'id',
                rowSelection: r,
                loading: xe,
                pagination: fe,
                scroll: { scrollToFirstRowOnChange: !0, x: '100%' },
              }),
              (0, _.jsx)(Y.Z, {
                visible: m,
                hideModal: h,
                onOk: w,
                initialName: k,
                loading: x,
              }),
              (0, _.jsx)(te, { loading: I, visible: Z, hideModal: O, onOk: q }),
              (0, _.jsx)(G.Z, {
                visible: N,
                hideModal: U,
                loading: D,
                onOk: z,
              }),
              (0, _.jsx)(ee, {
                initialValue: ne,
                visible: H,
                hideModal: W,
                onOk: X,
                loading: se,
              }),
              ae &&
                (0, _.jsx)(re, {
                  visible: ae,
                  hideModal: le,
                  onOk: ue,
                  loading: pe,
                }),
            ],
          });
        };
    },
    62386: function (e, t, n) {
      'use strict';
      var s = n(60806),
        i = n(66582),
        r = n(78158),
        o = s.Z.listFile,
        c = s.Z.removeFile,
        a = s.Z.uploadFile,
        u = s.Z.renameFile,
        l = s.Z.getAllParentFolder,
        p = s.Z.createFolder,
        d = s.Z.connectFileToKnowledge,
        f = s.Z.get_document_file,
        g = {
          listFile: { url: o, method: 'get' },
          removeFile: { url: c, method: 'post' },
          uploadFile: { url: a, method: 'post' },
          renameFile: { url: u, method: 'post' },
          getAllParentFolder: { url: l, method: 'get' },
          createFolder: { url: p, method: 'post' },
          connectFileToKnowledge: { url: d, method: 'post' },
          getFile: { url: s.Z.getFile, method: 'get', responseType: 'blob' },
          getDocumentFile: { url: f, method: 'get', responseType: 'blob' },
          moveFile: { url: s.Z.moveFile, method: 'post' },
        },
        v = (0, i.Z)(g, r.ZP);
      t.Z = v;
    },
    28382: function (e, t, n) {
      'use strict';
      n.d(t, {
        Qc: function () {
          return c;
        },
        mr: function () {
          return o;
        },
        p6: function () {
          return r;
        },
      });
      var s = n(27484),
        i = n.n(s);
      function r(e) {
        return e ? i()(e).format('DD/MM/YYYY HH:mm:ss') : '';
      }
      function o(e) {
        return e ? i()(e).format('HH:mm:ss') : '';
      }
      function c(e) {
        return e ? i()(e).format('DD/MM/YYYY') : '';
      }
    },
    5089: function (e, t, n) {
      'use strict';
      n.d(t, {
        Ep: function () {
          return p;
        },
        Or: function () {
          return d;
        },
        RT: function () {
          return u;
        },
        YC: function () {
          return l;
        },
        q1: function () {
          return a;
        },
      });
      var s = n(19632),
        i = n.n(s),
        r = n(40169),
        o = n(96486),
        c = n(57632),
        a = function (e, t) {
          var n;
          return Array.isArray(null == e ? void 0 : e.positions) &&
            e.positions.every(function (e) {
              return Array.isArray(e);
            })
            ? null == e || null === (n = e.positions) || void 0 === n
              ? void 0
              : n.map(function (n) {
                  var s = {
                    width: t.width,
                    height: t.height,
                    x1: n[1],
                    x2: n[2],
                    y1: n[3],
                    y2: n[4],
                  };
                  return {
                    id: (0, c.Z)(),
                    comment: { text: '', emoji: '' },
                    content: {
                      text:
                        (0, o.get)(e, 'content_with_weight') ||
                        (0, o.get)(e, 'content', ''),
                    },
                    position: { boundingRect: s, rects: [s], pageNumber: n[0] },
                  };
                })
            : [];
        },
        u = function (e) {
          var t;
          return null !==
            (t =
              null == e
                ? void 0
                : e.slice(e.lastIndexOf('.') + 1).toLowerCase()) && void 0 !== t
            ? t
            : '';
        },
        l = function (e) {
          return e.split('\n').length;
        },
        p = function (e) {
          return r.ru.includes(e);
        },
        d = function (e) {
          return [].concat(i()(r.rU), ['svg']).some(function (t) {
            return t === e;
          });
        };
    },
    51331: function (e, t, n) {
      'use strict';
      n.d(t, {
        AG: function () {
          return h;
        },
        De: function () {
          return w;
        },
        P2: function () {
          return p;
        },
        Ph: function () {
          return l;
        },
        _V: function () {
          return u;
        },
        qh: function () {
          return v;
        },
        td: function () {
          return k;
        },
        uA: function () {
          return x;
        },
        vn: function () {
          return d;
        },
      });
      var s = n(15009),
        i = n.n(s),
        r = n(99289),
        o = n.n(r),
        c = n(40169),
        a = n(62386),
        u = function (e) {
          return new Promise(function (t, n) {
            var s = new FileReader();
            s.readAsDataURL(e),
              (s.onload = function () {
                var e = new Image();
                (e.src = s.result),
                  (e.onload = function () {
                    var n = document.createElement('canvas'),
                      s = n.getContext('2d'),
                      i = e.width,
                      r = e.height,
                      o = 100;
                    i > r && i > o
                      ? ((r = (r * o) / i), (i = o))
                      : r > o && ((i = (i * o) / r), (r = o)),
                      (n.width = i),
                      (n.height = r),
                      null == s || s.drawImage(e, 0, 0, i, r);
                    var c = n.toDataURL('image/png');
                    t(c);
                  }),
                  (e.onerror = n);
              }),
              (s.onerror = n);
          });
        },
        l = function (e) {
          return Array.isArray(e) ? e : null == e ? void 0 : e.fileList;
        },
        p = function (e) {
          var t = [];
          return (
            e &&
              (t = [{ uid: '1', name: 'file', thumbUrl: e, status: 'done' }]),
            t
          );
        },
        d = (function () {
          var e = o()(
            i()().mark(function e(t) {
              var n, s, r;
              return i()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(Array.isArray(t) && t.length > 0)) {
                        e.next = 11;
                        break;
                      }
                      if (((n = t[0]), !(s = n.originFileObj))) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 6), u(s);
                    case 6:
                      return (r = e.sent), e.abrupt('return', r);
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
      function f(e, t) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = o()(
          i()().mark(function e(t, n) {
            var s, r;
            return i()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), a.Z.getDocumentFile({}, t);
                  case 2:
                    return (
                      (s = e.sent),
                      (r = new Blob([s.data], { type: n || s.data.type })),
                      e.abrupt('return', r)
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
        return m.apply(this, arguments);
      }
      function m() {
        return (m = o()(
          i()().mark(function e(t) {
            var n, s, r;
            return i()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), f(t, c.nK.Html);
                  case 2:
                    (n = e.sent),
                      (s = URL.createObjectURL(n)),
                      ((r = document.createElement('a')).href = s),
                      r.click(),
                      URL.revokeObjectURL(s);
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var x = function (e, t) {
          var n = window.URL.createObjectURL(e),
            s = document.createElement('a');
          (s.href = n),
            t && (s.download = t),
            s.click(),
            window.URL.revokeObjectURL(n);
        },
        h = (function () {
          var e = o()(
            i()().mark(function e(t) {
              var n, s, r;
              return i()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (n = t.id), (s = t.filename), (e.next = 3), f(n);
                    case 3:
                      (r = e.sent), x(r, s);
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
        b = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        k = function (e) {
          for (
            var t = 0, n = ('string' == typeof e ? parseInt(e, 10) : e) || 0;
            n >= 1024 && ++t;

          )
            n /= 1024;
          return n.toFixed(n < 10 && t > 0 ? 1 : 0) + ' ' + b[t];
        },
        w = (function () {
          var e = o()(
            i()().mark(function e(t, n) {
              var s;
              return i()().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (s = new Blob([JSON.stringify(t)], { type: c.nK.Json })),
                        x(s, n);
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
    78131: function (e, t, n) {
      var s = {
        './akshare.svg': 26032,
        './api.svg': 30747,
        './arxiv.svg': 90854,
        './assistant.svg': 4159,
        './baidu-fanyi.svg': 83544,
        './baidu.svg': 92892,
        './begin.svg': 69779,
        './bing.svg': 55914,
        './cancel.svg': 8156,
        './chat-app-cube.svg': 34339,
        './chat-configuration-atom.svg': 57950,
        './chat-star.svg': 49570,
        './chunk-method/book-01.svg': 38726,
        './chunk-method/book-02.svg': 21357,
        './chunk-method/book-03.svg': 88093,
        './chunk-method/book-04.svg': 58355,
        './chunk-method/chunk-empty.svg': 16035,
        './chunk-method/knowledge-graph-01.svg': 42576,
        './chunk-method/knowledge-graph-02.svg': 46853,
        './chunk-method/law-01.svg': 54530,
        './chunk-method/law-02.svg': 75787,
        './chunk-method/manual-01.svg': 64179,
        './chunk-method/manual-02.svg': 40547,
        './chunk-method/manual-03.svg': 1437,
        './chunk-method/manual-04.svg': 81486,
        './chunk-method/media-01.svg': 33952,
        './chunk-method/media-02.svg': 93802,
        './chunk-method/naive-01.svg': 88488,
        './chunk-method/naive-02.svg': 74795,
        './chunk-method/one-01.svg': 88533,
        './chunk-method/one-02.svg': 99199,
        './chunk-method/one-03.svg': 23192,
        './chunk-method/one-04.svg': 72906,
        './chunk-method/paper-01.svg': 64018,
        './chunk-method/paper-02.svg': 77250,
        './chunk-method/presentation-01.svg': 87162,
        './chunk-method/presentation-02.svg': 59640,
        './chunk-method/qa-01.svg': 39420,
        './chunk-method/qa-02.svg': 55086,
        './chunk-method/resume-01.svg': 76604,
        './chunk-method/resume-02.svg': 96131,
        './chunk-method/table-01.svg': 42743,
        './chunk-method/table-02.svg': 84817,
        './chunk-method/tag-01.svg': 96953,
        './chunk-method/tag-02.svg': 82472,
        './concentrator.svg': 86933,
        './crawler.svg': 71090,
        './database.svg': 38575,
        './deepl.svg': 98301,
        './delete.svg': 71483,
        './disable.svg': 84377,
        './duck.svg': 24287,
        './email.svg': 10808,
        './enable.svg': 8207,
        './es.svg': 96492,
        './exesql.svg': 43004,
        './file-icon/aep.svg': 83889,
        './file-icon/ai.svg': 28897,
        './file-icon/avi.svg': 27635,
        './file-icon/css.svg': 52229,
        './file-icon/csv.svg': 50747,
        './file-icon/dmg.svg': 71691,
        './file-icon/doc.svg': 35354,
        './file-icon/docx.svg': 69139,
        './file-icon/eps.svg': 43279,
        './file-icon/exe.svg': 46462,
        './file-icon/fig.svg': 33179,
        './file-icon/folder.svg': 54168,
        './file-icon/gif.svg': 73845,
        './file-icon/html.svg': 53682,
        './file-icon/indd.svg': 26763,
        './file-icon/java.svg': 13916,
        './file-icon/jpeg.svg': 19525,
        './file-icon/jpg.svg': 24674,
        './file-icon/js.svg': 38470,
        './file-icon/json.svg': 56373,
        './file-icon/md.svg': 77357,
        './file-icon/mkv.svg': 49197,
        './file-icon/mp3.svg': 44538,
        './file-icon/mp4.svg': 52038,
        './file-icon/mpeg.svg': 77747,
        './file-icon/pdf.svg': 82938,
        './file-icon/png.svg': 71915,
        './file-icon/ppt.svg': 85173,
        './file-icon/pptx.svg': 62133,
        './file-icon/psd.svg': 30182,
        './file-icon/rss.svg': 38428,
        './file-icon/sql.svg': 78501,
        './file-icon/svg.svg': 72515,
        './file-icon/tiff.svg': 4502,
        './file-icon/txt.svg': 55773,
        './file-icon/wav.svg': 63645,
        './file-icon/webp.svg': 87260,
        './file-icon/xls.svg': 5343,
        './file-icon/xlsx.svg': 41475,
        './file-icon/xml.svg': 38476,
        './file-management.svg': 39121,
        './github.svg': 69696,
        './google-scholar.svg': 99466,
        './google.svg': 18176,
        './graph.svg': 57355,
        './invoke-ai.svg': 82888,
        './jin10.svg': 31801,
        './keyword.svg': 30552,
        './knowledge-base.svg': 87055,
        './knowledge-configration.svg': 96450,
        './knowledge-dataset.svg': 9385,
        './knowledge-testing.svg': 65376,
        './langfuse.svg': 6514,
        './llm/anthropic.svg': 74768,
        './llm/azure.svg': 99817,
        './llm/baai.svg': 93594,
        './llm/baichuan.svg': 6507,
        './llm/bedrock.svg': 30818,
        './llm/chat-minimax.svg': 69534,
        './llm/cohere.svg': 86198,
        './llm/deepseek.svg': 23476,
        './llm/fish-audio.svg': 97300,
        './llm/gemini.svg': 69156,
        './llm/github.svg': 29034,
        './llm/google-cloud.svg': 75383,
        './llm/google.svg': 93926,
        './llm/gpustack.svg': 41538,
        './llm/groq-next.svg': 43719,
        './llm/huggingface.svg': 20566,
        './llm/hunyuan.svg': 10266,
        './llm/jina.svg': 19765,
        './llm/lepton-ai.svg': 68341,
        './llm/lm-studio.svg': 77894,
        './llm/local-ai.svg': 97354,
        './llm/mistral.svg': 58247,
        './llm/modelscope.svg': 21248,
        './llm/moonshot.svg': 98184,
        './llm/nomic-ai.svg': 14860,
        './llm/novita-ai.svg': 72584,
        './llm/nvidia.svg': 33325,
        './llm/ollama.svg': 59488,
        './llm/open-router.svg': 23258,
        './llm/openai-api.svg': 63715,
        './llm/openai.svg': 81459,
        './llm/perfx-cloud.svg': 39886,
        './llm/ppio.svg': 89957,
        './llm/replicate.svg': 13492,
        './llm/sentence-transformers.svg': 85448,
        './llm/siliconflow.svg': 65762,
        './llm/spark.svg': 4216,
        './llm/stepfun.svg': 53618,
        './llm/tencent-cloud.svg': 96734,
        './llm/together-ai.svg': 65167,
        './llm/tongyi.svg': 74296,
        './llm/upstage.svg': 30464,
        './llm/vllm.svg': 91333,
        './llm/volc_engine.svg': 25210,
        './llm/voyage.svg': 6385,
        './llm/wenxin.svg': 34981,
        './llm/xinference.svg': 76577,
        './llm/yi.svg': 20447,
        './llm/yiyan.svg': 55103,
        './llm/youdao.svg': 81010,
        './llm/zhipu.svg': 19568,
        './login-avatars.svg': 68683,
        './login-background.svg': 89624,
        './login-star.svg': 31130,
        './logo-with-text-white.svg': 49313,
        './logout.svg': 67487,
        './minio.svg': 32382,
        './model-providers.svg': 70410,
        './moon.svg': 22350,
        './more-model.svg': 88458,
        './more.svg': 1333,
        './move.svg': 90076,
        './mysql.svg': 37124,
        './navigation-pointer.svg': 1979,
        './next-login-bg.svg': 33391,
        './note.svg': 28687,
        './nothing.svg': 47138,
        './paper-clip.svg': 2306,
        './password.svg': 33530,
        './plus-circle-fill.svg': 3804,
        './plus.svg': 75350,
        './profile.svg': 1769,
        './prompt.svg': 49261,
        './pubmed.svg': 78566,
        './qweather.svg': 56077,
        './redis.svg': 43867,
        './refresh.svg': 96198,
        './resize.svg': 80415,
        './run.svg': 91449,
        './select-files-end.svg': 14387,
        './select-files-start.svg': 16734,
        './selected-files-collapse.svg': 40975,
        './sso.svg': 51653,
        './storage.svg': 99021,
        './switch.svg': 1311,
        './team.svg': 52381,
        './template.svg': 63993,
        './translation.svg': 40724,
        './tushare.svg': 16521,
        './wencai.svg': 72835,
        './wikipedia.svg': 18684,
        './yahoo-finance.svg': 7957,
      };
      function i(e) {
        var t = r(e);
        return n(t);
      }
      function r(e) {
        if (!n.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        }
        return s[e];
      }
      (i.keys = function () {
        return Object.keys(s);
      }),
        (i.resolve = r),
        (e.exports = i),
        (i.id = 78131);
    },
    26032: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/akshare.ef2caf5a.svg';
    },
    30747: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/api.683cd994.svg';
    },
    90854: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/arxiv.bce2900b.svg';
    },
    4159: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/assistant.072e25ce.svg';
    },
    83544: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/baidu-fanyi.ab76b9e5.svg';
    },
    92892: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/baidu.75b1998a.svg';
    },
    69779: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/begin.1a91ddf7.svg';
    },
    55914: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/bing.dce94add.svg';
    },
    8156: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/cancel.4450bdfb.svg';
    },
    34339: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/chat-app-cube.0d35727d.svg';
    },
    57950: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/chat-configuration-atom.94c02c7a.svg';
    },
    49570: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/chat-star.7acfee68.svg';
    },
    38726: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/book-01.6e2a8a37.svg';
    },
    21357: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/book-02.4dd45490.svg';
    },
    88093: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/book-03.bd76b691.svg';
    },
    58355: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/book-04.594d0d1a.svg';
    },
    16035: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/chunk-empty.2b83673a.svg';
    },
    42576: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/knowledge-graph-01.597a96f3.svg';
    },
    46853: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/knowledge-graph-02.f36b7fab.svg';
    },
    54530: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/law-01.7070b7b3.svg';
    },
    75787: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/law-02.cae944e5.svg';
    },
    64179: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/manual-01.e3bb11d2.svg';
    },
    40547: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/manual-02.1a214f22.svg';
    },
    1437: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/manual-03.530928ca.svg';
    },
    81486: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/manual-04.63d43265.svg';
    },
    33952: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/media-01.086483b6.svg';
    },
    93802: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/media-02.d4c36e3e.svg';
    },
    88488: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/naive-01.f57569b7.svg';
    },
    74795: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/naive-02.3fe3610b.svg';
    },
    88533: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/one-01.5a1d6960.svg';
    },
    99199: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/one-02.0adb16f8.svg';
    },
    23192: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/one-03.466dec02.svg';
    },
    72906: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/one-04.3b10ee6d.svg';
    },
    64018: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/paper-01.e0019dcd.svg';
    },
    77250: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/paper-02.cf73a211.svg';
    },
    87162: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/presentation-01.06115027.svg';
    },
    59640: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/presentation-02.14d98352.svg';
    },
    39420: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/qa-01.ce8702ee.svg';
    },
    55086: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/qa-02.c181fcd6.svg';
    },
    76604: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/resume-01.75f1c93f.svg';
    },
    96131: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/resume-02.9c115ed1.svg';
    },
    42743: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/table-01.ec5d8a4d.svg';
    },
    84817: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/table-02.e4d2487c.svg';
    },
    96953: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/tag-01.ff996302.svg';
    },
    82472: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/tag-02.079b2b47.svg';
    },
    86933: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/concentrator.1353af83.svg';
    },
    71090: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/crawler.646367e0.svg';
    },
    38575: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/database.ef8eb5c8.svg';
    },
    98301: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/deepl.dc5ab23b.svg';
    },
    71483: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/delete.028228ac.svg';
    },
    84377: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/disable.55c8b50f.svg';
    },
    24287: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/duck.3285e948.svg';
    },
    10808: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/email.ac0507af.svg';
    },
    8207: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/enable.1b0d90c7.svg';
    },
    96492: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/es.d9969bbd.svg';
    },
    43004: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/exesql.696e27b1.svg';
    },
    83889: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/aep.90be9439.svg';
    },
    28897: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/ai.10138190.svg';
    },
    27635: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/avi.02b94047.svg';
    },
    52229: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/css.8f0ad31d.svg';
    },
    50747: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/csv.9a256b45.svg';
    },
    71691: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/dmg.57f9c02c.svg';
    },
    35354: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/doc.d8918cc4.svg';
    },
    69139: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/docx.38d543b1.svg';
    },
    43279: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/eps.3f104d7d.svg';
    },
    46462: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/exe.7c93a166.svg';
    },
    33179: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/fig.38a31555.svg';
    },
    54168: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/folder.84bcc794.svg';
    },
    73845: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/gif.06cc115a.svg';
    },
    53682: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/html.240ba9a0.svg';
    },
    26763: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/indd.22c71a5d.svg';
    },
    13916: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/java.bc10ed5b.svg';
    },
    19525: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/jpeg.b4ff21a3.svg';
    },
    24674: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/jpg.166b6e5d.svg';
    },
    38470: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/js.acbe367d.svg';
    },
    56373: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/json.79aa2433.svg';
    },
    77357: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/md.41082c13.svg';
    },
    49197: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/mkv.ed2674b7.svg';
    },
    44538: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/mp3.773e22e6.svg';
    },
    52038: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/mp4.4b08cc18.svg';
    },
    77747: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/mpeg.ca6e2469.svg';
    },
    82938: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/pdf.44344347.svg';
    },
    71915: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/png.b6606e2b.svg';
    },
    85173: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/ppt.1cb25ad9.svg';
    },
    62133: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/pptx.b108e970.svg';
    },
    30182: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/psd.1d66388a.svg';
    },
    38428: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/rss.f27341d3.svg';
    },
    78501: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/sql.f90e0e1d.svg';
    },
    72515: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/svg.a95ef072.svg';
    },
    4502: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/tiff.4719932c.svg';
    },
    55773: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/txt.ef59d3d8.svg';
    },
    63645: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/wav.fa097b95.svg';
    },
    87260: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/webp.ef46db37.svg';
    },
    5343: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/xls.2ba7600c.svg';
    },
    41475: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/xlsx.746a1908.svg';
    },
    38476: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/xml.b90e705e.svg';
    },
    39121: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/file-management.b76487d8.svg';
    },
    69696: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/github.0aef0d01.svg';
    },
    99466: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/google-scholar.44e74dbb.svg';
    },
    18176: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/google.be71d0f8.svg';
    },
    57355: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/graph.aed14f6e.svg';
    },
    82888: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/invoke-ai.f20c65b6.svg';
    },
    31801: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/jin10.878bef8b.svg';
    },
    30552: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/keyword.2d1a0d69.svg';
    },
    87055: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/knowledge-base.1c6120ee.svg';
    },
    96450: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/knowledge-configration.852175c9.svg';
    },
    9385: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/knowledge-dataset.722b6fe7.svg';
    },
    65376: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/knowledge-testing.bde5e258.svg';
    },
    6514: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/langfuse.78704466.svg';
    },
    74768: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/anthropic.65954479.svg';
    },
    99817: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/azure.c56d7584.svg';
    },
    93594: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/baai.c8138ebe.svg';
    },
    6507: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/baichuan.e3f694dc.svg';
    },
    30818: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/bedrock.3a8ac5ed.svg';
    },
    69534: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/chat-minimax.9b4384d0.svg';
    },
    86198: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/cohere.6ea354af.svg';
    },
    23476: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/deepseek.f974cd8d.svg';
    },
    97300: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/fish-audio.fc05a3e6.svg';
    },
    69156: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/gemini.87ab9858.svg';
    },
    29034: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/github.6dbd4f80.svg';
    },
    75383: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/google-cloud.d0802654.svg';
    },
    93926: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/google.36013c77.svg';
    },
    41538: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/gpustack.e4d6956b.svg';
    },
    43719: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/groq-next.8c75e144.svg';
    },
    20566: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/huggingface.fcf354fa.svg';
    },
    10266: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/hunyuan.3b1d640a.svg';
    },
    19765: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/jina.bfc92c30.svg';
    },
    68341: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/lepton-ai.0e3dff35.svg';
    },
    77894: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/lm-studio.7129f824.svg';
    },
    97354: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/local-ai.7a303131.svg';
    },
    58247: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/mistral.dfb07556.svg';
    },
    21248: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/modelscope.b21a1489.svg';
    },
    98184: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/moonshot.192bc590.svg';
    },
    14860: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/nomic-ai.ecf954c1.svg';
    },
    72584: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/novita-ai.f8cc289c.svg';
    },
    33325: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/nvidia.3031fca1.svg';
    },
    59488: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/ollama.2677a93a.svg';
    },
    23258: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/open-router.7226a5e8.svg';
    },
    63715: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/openai-api.42d3bdf6.svg';
    },
    81459: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/openai.6242ead4.svg';
    },
    39886: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/perfx-cloud.9668e908.svg';
    },
    89957: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/ppio.ce974b8e.svg';
    },
    13492: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/replicate.b558c271.svg';
    },
    85448: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/sentence-transformers.80312660.svg';
    },
    65762: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/siliconflow.6bafc788.svg';
    },
    4216: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/spark.54d37193.svg';
    },
    53618: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/stepfun.38dd7ff5.svg';
    },
    96734: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/tencent-cloud.637fb842.svg';
    },
    65167: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/together-ai.0777a553.svg';
    },
    74296: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/tongyi.8c1b0f0d.svg';
    },
    30464: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/upstage.bff6c9f0.svg';
    },
    91333: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/vllm.4895bd3a.svg';
    },
    25210: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/volc_engine.c93921c9.svg';
    },
    6385: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/voyage.ec478775.svg';
    },
    34981: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/wenxin.c029f1ef.svg';
    },
    76577: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/xinference.4bf1c9ad.svg';
    },
    20447: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/yi.56b2684e.svg';
    },
    55103: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/yiyan.c029f1ef.svg';
    },
    81010: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/youdao.dc5f6515.svg';
    },
    19568: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/zhipu.53c4367a.svg';
    },
    68683: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/login-avatars.2cd59ec8.svg';
    },
    89624: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/login-background.53821b0f.svg';
    },
    31130: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/login-star.a1de9742.svg';
    },
    49313: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/logo-with-text-white.22c9d002.svg';
    },
    67487: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/logout.acbe92a8.svg';
    },
    32382: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/minio.2aa38883.svg';
    },
    70410: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/model-providers.43583ddb.svg';
    },
    22350: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/moon.15e7f056.svg';
    },
    88458: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/more-model.7a1d39d8.svg';
    },
    1333: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/more.4f8a95a4.svg';
    },
    90076: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/move.0b544311.svg';
    },
    37124: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/mysql.cb3593ae.svg';
    },
    1979: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/navigation-pointer.a22fd9df.svg';
    },
    33391: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/next-login-bg.2b21817d.svg';
    },
    28687: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/note.7480c088.svg';
    },
    47138: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/nothing.ab562a79.svg';
    },
    2306: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/paper-clip.dd171c2f.svg';
    },
    33530: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/password.668a7506.svg';
    },
    3804: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/plus-circle-fill.5b401d20.svg';
    },
    75350: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/plus.4df8c2ae.svg';
    },
    1769: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/profile.67855e30.svg';
    },
    49261: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/prompt.37be0fb8.svg';
    },
    78566: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/pubmed.77561d8d.svg';
    },
    56077: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/qweather.af060254.svg';
    },
    43867: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/redis.c34741f7.svg';
    },
    96198: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/refresh.8782839f.svg';
    },
    80415: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/resize.dac0f2bf.svg';
    },
    91449: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/run.23b47028.svg';
    },
    14387: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/select-files-end.c089e39f.svg';
    },
    16734: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/select-files-start.fc6d0609.svg';
    },
    40975: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/selected-files-collapse.9b76e30e.svg';
    },
    51653: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/sso.9e8a3ae3.svg';
    },
    99021: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/storage.c77a9838.svg';
    },
    1311: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/switch.8b45face.svg';
    },
    52381: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/team.40ab5e28.svg';
    },
    63993: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/template.d3713e5e.svg';
    },
    40724: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/translation.1d6d8a4a.svg';
    },
    16521: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/tushare.dce7f503.svg';
    },
    72835: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/wencai.664373a4.svg';
    },
    18684: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/wikipedia.ed88485f.svg';
    },
    7957: function (e, t, n) {
      'use strict';
      e.exports = n.p + 'static/yahoo-finance.9deb3b1e.svg';
    },
  },
]);
//# sourceMappingURL=p__file-manager__index.c81db080.async.js.map
