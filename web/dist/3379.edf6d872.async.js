/*! For license information please see 3379.edf6d872.async.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [3379],
  {
    86983: function (e, t, n) {
      'use strict';
      n.d(t, {
        Aq: function () {
          return Ut;
        },
        u5: function () {
          return qe;
        },
        Bw: function () {
          return on;
        },
        ZX: function () {
          return sn;
        },
        XQ: function () {
          return Ht;
        },
        HH: function () {
          return Ne;
        },
        KP: function () {
          return gn;
        },
        Mw: function () {
          return bn;
        },
        x$: function () {
          return Vt;
        },
        tV: function () {
          return Lt;
        },
        yn: function () {
          return U;
        },
        Fb: function () {
          return G;
        },
        Bn: function () {
          return Xt;
        },
      });
      var o = n(86074);
      function r(e) {
        if ('string' == typeof e || 'number' == typeof e) return '' + e;
        let t = '';
        if (Array.isArray(e))
          for (let n, o = 0; o < e.length; o++)
            '' !== (n = r(e[o])) && (t += (t && ' ') + n);
        else for (let n in e) e[n] && (t += (t && ' ') + n);
        return t;
      }
      var i = n(83859),
        a = n(62435),
        s = n(52798),
        c = n(43973);
      const { useDebugValue: l } = a,
        { useSyncExternalStoreWithSelector: u } = s,
        d = (e) => e;
      function f(e, t = d, n) {
        const o = u(
          e.subscribe,
          e.getState,
          e.getServerState || e.getInitialState,
          t,
          n,
        );
        return l(o), o;
      }
      const h = (e, t) => {
        const n = (0, c.M)(e),
          o = (e, o = t) => f(n, e, o);
        return Object.assign(o, n), o;
      };
      function p(e, t) {
        if (Object.is(e, t)) return !0;
        if (
          'object' != typeof e ||
          null === e ||
          'object' != typeof t ||
          null === t
        )
          return !1;
        if (e instanceof Map && t instanceof Map) {
          if (e.size !== t.size) return !1;
          for (const [n, o] of e) if (!Object.is(o, t.get(n))) return !1;
          return !0;
        }
        if (e instanceof Set && t instanceof Set) {
          if (e.size !== t.size) return !1;
          for (const n of e) if (!t.has(n)) return !1;
          return !0;
        }
        const n = Object.keys(e);
        if (n.length !== Object.keys(t).length) return !1;
        for (const o of n)
          if (
            !Object.prototype.hasOwnProperty.call(t, o) ||
            !Object.is(e[o], t[o])
          )
            return !1;
        return !0;
      }
      var g = n(61254);
      const m = (0, a.createContext)(null),
        y = m.Provider,
        v = i.Qj.error001();
      function w(e, t) {
        const n = (0, a.useContext)(m);
        if (null === n) throw new Error(v);
        return f(n, e, t);
      }
      function x() {
        const e = (0, a.useContext)(m);
        if (null === e) throw new Error(v);
        return (0, a.useMemo)(
          () => ({
            getState: e.getState,
            setState: e.setState,
            subscribe: e.subscribe,
          }),
          [e],
        );
      }
      const b = { display: 'none' },
        S = {
          position: 'absolute',
          width: 1,
          height: 1,
          margin: -1,
          border: 0,
          padding: 0,
          overflow: 'hidden',
          clip: 'rect(0px, 0px, 0px, 0px)',
          clipPath: 'inset(100%)',
        },
        _ = 'react-flow__node-desc',
        k = 'react-flow__edge-desc',
        E = (e) => e.ariaLiveMessage;
      function C({ rfId: e }) {
        const t = w(E);
        return (0, o.jsx)('div', {
          id: `react-flow__aria-live-${e}`,
          'aria-live': 'assertive',
          'aria-atomic': 'true',
          style: S,
          children: t,
        });
      }
      function M({ rfId: e, disableKeyboardA11y: t }) {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)('div', {
              id: `${_}-${e}`,
              style: b,
              children: [
                'Press enter or space to select a node.',
                !t &&
                  'You can then use the arrow keys to move the node around.',
                ' Press delete to remove it and escape to cancel.',
                ' ',
              ],
            }),
            (0, o.jsx)('div', {
              id: `${k}-${e}`,
              style: b,
              children:
                'Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.',
            }),
            !t && (0, o.jsx)(C, { rfId: e }),
          ],
        });
      }
      const N = (e) => (e.userSelectionActive ? 'none' : 'all'),
        P = (0, a.forwardRef)(
          (
            {
              position: e = 'top-left',
              children: t,
              className: n,
              style: i,
              ...a
            },
            s,
          ) => {
            const c = w(N),
              l = `${e}`.split('-');
            return (0, o.jsx)('div', {
              className: r(['react-flow__panel', n, ...l]),
              style: { ...i, pointerEvents: c },
              ref: s,
              ...a,
              children: t,
            });
          },
        );
      function I({ proOptions: e, position: t = 'bottom-right' }) {
        return e?.hideAttribution
          ? null
          : (0, o.jsx)(P, {
              position: t,
              className: 'react-flow__attribution',
              'data-message':
                'Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev',
              children: (0, o.jsx)('a', {
                href: 'https://reactflow.dev',
                target: '_blank',
                rel: 'noopener noreferrer',
                'aria-label': 'React Flow attribution',
                children: 'React Flow',
              }),
            });
      }
      const O = (e) => {
          const t = [],
            n = [];
          for (const [, n] of e.nodeLookup)
            n.selected && t.push(n.internals.userNode);
          for (const [, t] of e.edgeLookup) t.selected && n.push(t);
          return { selectedNodes: t, selectedEdges: n };
        },
        z = (e) => e.id;
      function A(e, t) {
        return (
          p(e.selectedNodes.map(z), t.selectedNodes.map(z)) &&
          p(e.selectedEdges.map(z), t.selectedEdges.map(z))
        );
      }
      function D({ onSelectionChange: e }) {
        const t = x(),
          { selectedNodes: n, selectedEdges: o } = w(O, A);
        return (
          (0, a.useEffect)(() => {
            const r = { nodes: n, edges: o };
            e?.(r), t.getState().onSelectionChangeHandlers.forEach((e) => e(r));
          }, [n, o, e]),
          null
        );
      }
      const R = (e) => !!e.onSelectionChangeHandlers;
      function j({ onSelectionChange: e }) {
        const t = w(R);
        return e || t ? (0, o.jsx)(D, { onSelectionChange: e }) : null;
      }
      const $ = [0, 0],
        L = { x: 0, y: 0, zoom: 1 },
        T = [
          'nodes',
          'edges',
          'defaultNodes',
          'defaultEdges',
          'onConnect',
          'onConnectStart',
          'onConnectEnd',
          'onClickConnectStart',
          'onClickConnectEnd',
          'nodesDraggable',
          'nodesConnectable',
          'nodesFocusable',
          'edgesFocusable',
          'edgesReconnectable',
          'elevateNodesOnSelect',
          'elevateEdgesOnSelect',
          'minZoom',
          'maxZoom',
          'nodeExtent',
          'onNodesChange',
          'onEdgesChange',
          'elementsSelectable',
          'connectionMode',
          'snapGrid',
          'snapToGrid',
          'translateExtent',
          'connectOnClick',
          'defaultEdgeOptions',
          'fitView',
          'fitViewOptions',
          'onNodesDelete',
          'onEdgesDelete',
          'onDelete',
          'onNodeDrag',
          'onNodeDragStart',
          'onNodeDragStop',
          'onSelectionDrag',
          'onSelectionDragStart',
          'onSelectionDragStop',
          'onMoveStart',
          'onMove',
          'onMoveEnd',
          'noPanClassName',
          'nodeOrigin',
          'autoPanOnConnect',
          'autoPanOnNodeDrag',
          'onError',
          'connectionRadius',
          'isValidConnection',
          'selectNodesOnDrag',
          'nodeDragThreshold',
          'onBeforeDelete',
          'debug',
          'autoPanSpeed',
          'paneClickDistance',
          'rfId',
        ],
        B = (e) => ({
          setNodes: e.setNodes,
          setEdges: e.setEdges,
          setMinZoom: e.setMinZoom,
          setMaxZoom: e.setMaxZoom,
          setTranslateExtent: e.setTranslateExtent,
          setNodeExtent: e.setNodeExtent,
          reset: e.reset,
          setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
          setPaneClickDistance: e.setPaneClickDistance,
        }),
        V = {
          translateExtent: i.k5,
          nodeOrigin: $,
          minZoom: 0.5,
          maxZoom: 2,
          elementsSelectable: !0,
          noPanClassName: 'nopan',
          rfId: '1',
          paneClickDistance: 0,
        };
      function Z(e) {
        const {
            setNodes: t,
            setEdges: n,
            setMinZoom: o,
            setMaxZoom: r,
            setTranslateExtent: i,
            setNodeExtent: s,
            reset: c,
            setDefaultNodesAndEdges: l,
            setPaneClickDistance: u,
          } = w(B, p),
          d = x();
        (0, a.useEffect)(
          () => (
            l(e.defaultNodes, e.defaultEdges),
            () => {
              (f.current = V), c();
            }
          ),
          [],
        );
        const f = (0, a.useRef)(V);
        return (
          (0, a.useEffect)(
            () => {
              for (const a of T) {
                const c = e[a];
                c !== f.current[a] &&
                  void 0 !== e[a] &&
                  ('nodes' === a
                    ? t(c)
                    : 'edges' === a
                      ? n(c)
                      : 'minZoom' === a
                        ? o(c)
                        : 'maxZoom' === a
                          ? r(c)
                          : 'translateExtent' === a
                            ? i(c)
                            : 'nodeExtent' === a
                              ? s(c)
                              : 'paneClickDistance' === a
                                ? u(c)
                                : 'fitView' === a
                                  ? d.setState({ fitViewOnInit: c })
                                  : 'fitViewOptions' === a
                                    ? d.setState({ fitViewOnInitOptions: c })
                                    : d.setState({ [a]: c }));
              }
              f.current = e;
            },
            T.map((t) => e[t]),
          ),
          null
        );
      }
      function H() {
        return 'undefined' != typeof window && window.matchMedia
          ? window.matchMedia('(prefers-color-scheme: dark)')
          : null;
      }
      const X = 'undefined' != typeof document ? document : null;
      function W(e = null, t = { target: X, actInsideInputWithModifier: !0 }) {
        const [n, o] = (0, a.useState)(!1),
          r = (0, a.useRef)(!1),
          s = (0, a.useRef)(new Set([])),
          [c, l] = (0, a.useMemo)(() => {
            if (null !== e) {
              const t = (Array.isArray(e) ? e : [e])
                  .filter((e) => 'string' == typeof e)
                  .map((e) =>
                    e.replace('+', '\n').replace('\n\n', '\n+').split('\n'),
                  ),
                n = t.reduce((e, t) => e.concat(...t), []);
              return [t, n];
            }
            return [[], []];
          }, [e]);
        return (
          (0, a.useEffect)(() => {
            const n = t?.target || X;
            if (null !== e) {
              const e = (e) => {
                  r.current = e.ctrlKey || e.metaKey || e.shiftKey;
                  if (
                    (!r.current ||
                      (r.current && !t.actInsideInputWithModifier)) &&
                    (0, i.s$)(e)
                  )
                    return !1;
                  const n = F(e.code, l);
                  s.current.add(e[n]),
                    Y(c, s.current, !1) && (e.preventDefault(), o(!0));
                },
                a = (e) => {
                  if (
                    (!r.current ||
                      (r.current && !t.actInsideInputWithModifier)) &&
                    (0, i.s$)(e)
                  )
                    return !1;
                  const n = F(e.code, l);
                  Y(c, s.current, !0)
                    ? (o(!1), s.current.clear())
                    : s.current.delete(e[n]),
                    'Meta' === e.key && s.current.clear(),
                    (r.current = !1);
                },
                u = () => {
                  s.current.clear(), o(!1);
                };
              return (
                n?.addEventListener('keydown', e),
                n?.addEventListener('keyup', a),
                window.addEventListener('blur', u),
                window.addEventListener('contextmenu', u),
                () => {
                  n?.removeEventListener('keydown', e),
                    n?.removeEventListener('keyup', a),
                    window.removeEventListener('blur', u),
                    window.removeEventListener('contextmenu', u);
                }
              );
            }
          }, [e, o]),
          n
        );
      }
      function Y(e, t, n) {
        return e
          .filter((e) => n || e.length === t.size)
          .some((e) => e.every((e) => t.has(e)));
      }
      function F(e, t) {
        return t.includes(e) ? 'code' : 'key';
      }
      function K(e, t) {
        const n = [],
          o = new Map(),
          r = [];
        for (const t of e)
          if ('add' !== t.type)
            if ('remove' === t.type || 'replace' === t.type) o.set(t.id, [t]);
            else {
              const e = o.get(t.id);
              e ? e.push(t) : o.set(t.id, [t]);
            }
          else r.push(t);
        for (const e of t) {
          const t = o.get(e.id);
          if (!t) {
            n.push(e);
            continue;
          }
          if ('remove' === t[0].type) continue;
          if ('replace' === t[0].type) {
            n.push({ ...t[0].item });
            continue;
          }
          const r = { ...e };
          for (const e of t) q(e, r);
          n.push(r);
        }
        return (
          r.length &&
            r.forEach((e) => {
              void 0 !== e.index
                ? n.splice(e.index, 0, { ...e.item })
                : n.push({ ...e.item });
            }),
          n
        );
      }
      function q(e, t) {
        switch (e.type) {
          case 'select':
            t.selected = e.selected;
            break;
          case 'position':
            void 0 !== e.position && (t.position = e.position),
              void 0 !== e.dragging && (t.dragging = e.dragging);
            break;
          case 'dimensions':
            void 0 !== e.dimensions &&
              ((t.measured ??= {}),
              (t.measured.width = e.dimensions.width),
              (t.measured.height = e.dimensions.height),
              e.setAttributes &&
                ((t.width = e.dimensions.width),
                (t.height = e.dimensions.height))),
              'boolean' == typeof e.resizing && (t.resizing = e.resizing);
        }
      }
      function G(e, t) {
        return K(e, t);
      }
      function U(e, t) {
        return K(e, t);
      }
      function Q(e, t) {
        return { id: e, type: 'select', selected: t };
      }
      function J(e, t = new Set(), n = !1) {
        const o = [];
        for (const [r, i] of e) {
          const e = t.has(r);
          (void 0 === i.selected && !e) ||
            i.selected === e ||
            (n && (i.selected = e), o.push(Q(i.id, e)));
        }
        return o;
      }
      function ee({ items: e = [], lookup: t }) {
        const n = [],
          o = new Map(e.map((e) => [e.id, e]));
        for (const [o, r] of e.entries()) {
          const e = t.get(r.id),
            i = e?.internals?.userNode ?? e;
          void 0 !== i &&
            i !== r &&
            n.push({ id: r.id, item: r, type: 'replace' }),
            void 0 === i && n.push({ item: r, type: 'add', index: o });
        }
        for (const [e] of t) {
          void 0 === o.get(e) && n.push({ id: e, type: 'remove' });
        }
        return n;
      }
      function te(e) {
        return { id: e.id, type: 'remove' };
      }
      const ne = (e) => (0, i.Vt)(e);
      function oe(e) {
        return (0, a.forwardRef)(e);
      }
      const re = 'undefined' != typeof window ? a.useLayoutEffect : a.useEffect;
      function ie(e) {
        const [t, n] = (0, a.useState)(BigInt(0)),
          [o] = (0, a.useState)(() =>
            (function (e) {
              let t = [];
              return {
                get: () => t,
                reset: () => {
                  t = [];
                },
                push: (n) => {
                  t.push(n), e();
                },
              };
            })(() => n((e) => e + BigInt(1))),
          );
        return (
          re(() => {
            const t = o.get();
            t.length && (e(t), o.reset());
          }, [t]),
          o
        );
      }
      const ae = (0, a.createContext)(null);
      function se({ children: e }) {
        const t = x(),
          n = ie(
            (0, a.useCallback)((e) => {
              const {
                nodes: n = [],
                setNodes: o,
                hasDefaultNodes: r,
                onNodesChange: i,
                nodeLookup: a,
              } = t.getState();
              let s = n;
              for (const t of e) s = 'function' == typeof t ? t(s) : t;
              r ? o(s) : i && i(ee({ items: s, lookup: a }));
            }, []),
          ),
          r = ie(
            (0, a.useCallback)((e) => {
              const {
                edges: n = [],
                setEdges: o,
                hasDefaultEdges: r,
                onEdgesChange: i,
                edgeLookup: a,
              } = t.getState();
              let s = n;
              for (const t of e) s = 'function' == typeof t ? t(s) : t;
              r ? o(s) : i && i(ee({ items: s, lookup: a }));
            }, []),
          ),
          i = (0, a.useMemo)(() => ({ nodeQueue: n, edgeQueue: r }), []);
        return (0, o.jsx)(ae.Provider, { value: i, children: e });
      }
      const ce = (e) => !!e.panZoom;
      function le() {
        const e = (() => {
            const e = x();
            return (0, a.useMemo)(
              () => ({
                zoomIn: (t) => {
                  const { panZoom: n } = e.getState();
                  return n
                    ? n.scaleBy(1.2, { duration: t?.duration })
                    : Promise.resolve(!1);
                },
                zoomOut: (t) => {
                  const { panZoom: n } = e.getState();
                  return n
                    ? n.scaleBy(1 / 1.2, { duration: t?.duration })
                    : Promise.resolve(!1);
                },
                zoomTo: (t, n) => {
                  const { panZoom: o } = e.getState();
                  return o
                    ? o.scaleTo(t, { duration: n?.duration })
                    : Promise.resolve(!1);
                },
                getZoom: () => e.getState().transform[2],
                setViewport: async (t, n) => {
                  const {
                    transform: [o, r, i],
                    panZoom: a,
                  } = e.getState();
                  return a
                    ? (await a.setViewport(
                        { x: t.x ?? o, y: t.y ?? r, zoom: t.zoom ?? i },
                        { duration: n?.duration },
                      ),
                      Promise.resolve(!0))
                    : Promise.resolve(!1);
                },
                getViewport: () => {
                  const [t, n, o] = e.getState().transform;
                  return { x: t, y: n, zoom: o };
                },
                fitView: (t) => {
                  const {
                    nodeLookup: n,
                    minZoom: o,
                    maxZoom: r,
                    panZoom: a,
                    domNode: s,
                  } = e.getState();
                  if (!a || !s) return Promise.resolve(!1);
                  const c = (0, i.J6)(n, t),
                    { width: l, height: u } = (0, i.t_)(s);
                  return (0, i.Qu)(
                    {
                      nodes: c,
                      width: l,
                      height: u,
                      minZoom: o,
                      maxZoom: r,
                      panZoom: a,
                    },
                    t,
                  );
                },
                setCenter: async (t, n, o) => {
                  const {
                      width: r,
                      height: i,
                      maxZoom: a,
                      panZoom: s,
                    } = e.getState(),
                    c = void 0 !== o?.zoom ? o.zoom : a,
                    l = r / 2 - t * c,
                    u = i / 2 - n * c;
                  return s
                    ? (await s.setViewport(
                        { x: l, y: u, zoom: c },
                        { duration: o?.duration },
                      ),
                      Promise.resolve(!0))
                    : Promise.resolve(!1);
                },
                fitBounds: async (t, n) => {
                  const {
                      width: o,
                      height: r,
                      minZoom: a,
                      maxZoom: s,
                      panZoom: c,
                    } = e.getState(),
                    l = (0, i.$i)(t, o, r, a, s, n?.padding ?? 0.1);
                  return c
                    ? (await c.setViewport(l, { duration: n?.duration }),
                      Promise.resolve(!0))
                    : Promise.resolve(!1);
                },
                screenToFlowPosition: (t, n = { snapToGrid: !0 }) => {
                  const {
                    transform: o,
                    snapGrid: r,
                    domNode: a,
                  } = e.getState();
                  if (!a) return t;
                  const { x: s, y: c } = a.getBoundingClientRect(),
                    l = { x: t.x - s, y: t.y - c };
                  return (0, i.m)(l, o, n.snapToGrid, r);
                },
                flowToScreenPosition: (t) => {
                  const { transform: n, domNode: o } = e.getState();
                  if (!o) return t;
                  const { x: r, y: a } = o.getBoundingClientRect(),
                    s = (0, i.oj)(t, n);
                  return { x: s.x + r, y: s.y + a };
                },
              }),
              [],
            );
          })(),
          t = x(),
          n = (function () {
            const e = (0, a.useContext)(ae);
            if (!e)
              throw new Error(
                'useBatchContext must be used within a BatchProvider',
              );
            return e;
          })(),
          o = w(ce),
          r = (0, a.useMemo)(() => {
            const e = (e) => t.getState().nodeLookup.get(e),
              o = (e) => {
                n.nodeQueue.push(e);
              },
              r = (e) => {
                n.edgeQueue.push(e);
              },
              a = (e) => {
                const { nodeLookup: n, nodeOrigin: o } = t.getState(),
                  r = ne(e) ? e : n.get(e.id),
                  a = r.parentId
                    ? (0, i.ZB)(r.position, r.measured, r.parentId, n, o)
                    : r.position,
                  s = {
                    ...r,
                    position: a,
                    width: r.measured?.width ?? r.width,
                    height: r.measured?.height ?? r.height,
                  };
                return (0, i.PS)(s);
              },
              s = (e, t, n = { replace: !1 }) => {
                o((o) =>
                  o.map((o) => {
                    if (o.id === e) {
                      const e = 'function' == typeof t ? t(o) : t;
                      return n.replace && ne(e) ? e : { ...o, ...e };
                    }
                    return o;
                  }),
                );
              },
              c = (e, t, n = { replace: !1 }) => {
                r((o) =>
                  o.map((o) => {
                    if (o.id === e) {
                      const e = 'function' == typeof t ? t(o) : t;
                      return n.replace && ((r = e), (0, i.J3)(r))
                        ? e
                        : { ...o, ...e };
                    }
                    var r;
                    return o;
                  }),
                );
              };
            return {
              getNodes: () => t.getState().nodes.map((e) => ({ ...e })),
              getNode: (t) => e(t)?.internals.userNode,
              getInternalNode: e,
              getEdges: () => {
                const { edges: e = [] } = t.getState();
                return e.map((e) => ({ ...e }));
              },
              getEdge: (e) => t.getState().edgeLookup.get(e),
              setNodes: o,
              setEdges: r,
              addNodes: (e) => {
                const t = Array.isArray(e) ? e : [e];
                n.nodeQueue.push((e) => [...e, ...t]);
              },
              addEdges: (e) => {
                const t = Array.isArray(e) ? e : [e];
                n.edgeQueue.push((e) => [...e, ...t]);
              },
              toObject: () => {
                const {
                    nodes: e = [],
                    edges: n = [],
                    transform: o,
                  } = t.getState(),
                  [r, i, a] = o;
                return {
                  nodes: e.map((e) => ({ ...e })),
                  edges: n.map((e) => ({ ...e })),
                  viewport: { x: r, y: i, zoom: a },
                };
              },
              deleteElements: async ({ nodes: e = [], edges: n = [] }) => {
                const {
                    nodes: o,
                    edges: r,
                    onNodesDelete: a,
                    onEdgesDelete: s,
                    triggerNodeChanges: c,
                    triggerEdgeChanges: l,
                    onDelete: u,
                    onBeforeDelete: d,
                  } = t.getState(),
                  { nodes: f, edges: h } = await (0, i.WD)({
                    nodesToRemove: e,
                    edgesToRemove: n,
                    nodes: o,
                    edges: r,
                    onBeforeDelete: d,
                  }),
                  p = h.length > 0,
                  g = f.length > 0;
                if (p) {
                  const e = h.map(te);
                  s?.(h), l(e);
                }
                if (g) {
                  const e = f.map(te);
                  a?.(f), c(e);
                }
                return (
                  (g || p) && u?.({ nodes: f, edges: h }),
                  { deletedNodes: f, deletedEdges: h }
                );
              },
              getIntersectingNodes: (e, n = !0, o) => {
                const r = (0, i.J$)(e),
                  s = r ? e : a(e),
                  c = void 0 !== o;
                return s
                  ? (o || t.getState().nodes).filter((o) => {
                      const a = t.getState().nodeLookup.get(o.id);
                      if (
                        a &&
                        !r &&
                        (o.id === e.id || !a.internals.positionAbsolute)
                      )
                        return !1;
                      const l = (0, i.PS)(c ? o : a),
                        u = (0, i.lp)(l, s);
                      return (n && u > 0) || u >= s.width * s.height;
                    })
                  : [];
              },
              isNodeIntersecting: (e, t, n = !0) => {
                const o = (0, i.J$)(e) ? e : a(e);
                if (!o) return !1;
                const r = (0, i.lp)(o, t);
                return (n && r > 0) || r >= o.width * o.height;
              },
              updateNode: s,
              updateNodeData: (e, t, n = { replace: !1 }) => {
                s(
                  e,
                  (e) => {
                    const o = 'function' == typeof t ? t(e) : t;
                    return n.replace
                      ? { ...e, data: o }
                      : { ...e, data: { ...e.data, ...o } };
                  },
                  n,
                );
              },
              updateEdge: c,
              updateEdgeData: (e, t, n = { replace: !1 }) => {
                c(
                  e,
                  (e) => {
                    const o = 'function' == typeof t ? t(e) : t;
                    return n.replace
                      ? { ...e, data: o }
                      : { ...e, data: { ...e.data, ...o } };
                  },
                  n,
                );
              },
              getNodesBounds: (e) => {
                const { nodeLookup: n, nodeOrigin: o } = t.getState();
                return (0, i.RX)(e, { nodeLookup: n, nodeOrigin: o });
              },
              getHandleConnections: ({ type: e, id: n, nodeId: o }) =>
                Array.from(
                  t
                    .getState()
                    .connectionLookup.get(`${o}-${e}-${n ?? null}`)
                    ?.values() ?? [],
                ),
            };
          }, []);
        return (0, a.useMemo)(
          () => ({ ...r, ...e, viewportInitialized: o }),
          [o],
        );
      }
      const ue = (e) => e.selected,
        de = { actInsideInputWithModifier: !1 },
        fe = 'undefined' != typeof window ? window : void 0;
      const he = {
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        },
        pe = (e) => ({
          userSelectionActive: e.userSelectionActive,
          lib: e.lib,
        });
      function ge({
        onPaneContextMenu: e,
        zoomOnScroll: t = !0,
        zoomOnPinch: n = !0,
        panOnScroll: r = !1,
        panOnScrollSpeed: s = 0.5,
        panOnScrollMode: c = i.IY.Free,
        zoomOnDoubleClick: l = !0,
        panOnDrag: u = !0,
        defaultViewport: d,
        translateExtent: f,
        minZoom: h,
        maxZoom: g,
        zoomActivationKeyCode: m,
        preventScrolling: y = !0,
        children: v,
        noWheelClassName: b,
        noPanClassName: S,
        onViewportChange: _,
        isControlledViewport: k,
        paneClickDistance: E,
      }) {
        const C = x(),
          M = (0, a.useRef)(null),
          { userSelectionActive: N, lib: P } = w(pe, p),
          I = W(m),
          O = (0, a.useRef)();
        !(function (e) {
          const t = x();
          (0, a.useEffect)(() => {
            const n = () => {
              if (!e.current) return !1;
              const n = (0, i.t_)(e.current);
              (0 !== n.height && 0 !== n.width) ||
                t.getState().onError?.('004', i.Qj.error004()),
                t.setState({ width: n.width || 500, height: n.height || 500 });
            };
            if (e.current) {
              n(), window.addEventListener('resize', n);
              const t = new ResizeObserver(() => n());
              return (
                t.observe(e.current),
                () => {
                  window.removeEventListener('resize', n),
                    t && e.current && t.unobserve(e.current);
                }
              );
            }
          }, []);
        })(M);
        const z = (0, a.useCallback)(
          (e) => {
            _?.({ x: e[0], y: e[1], zoom: e[2] }),
              k || C.setState({ transform: e });
          },
          [_, k],
        );
        return (
          (0, a.useEffect)(() => {
            if (M.current) {
              O.current = (0, i.X6)({
                domNode: M.current,
                minZoom: h,
                maxZoom: g,
                translateExtent: f,
                viewport: d,
                paneClickDistance: E,
                onDraggingChange: (e) => C.setState({ paneDragging: e }),
                onPanZoomStart: (e, t) => {
                  const { onViewportChangeStart: n, onMoveStart: o } =
                    C.getState();
                  o?.(e, t), n?.(t);
                },
                onPanZoom: (e, t) => {
                  const { onViewportChange: n, onMove: o } = C.getState();
                  o?.(e, t), n?.(t);
                },
                onPanZoomEnd: (e, t) => {
                  const { onViewportChangeEnd: n, onMoveEnd: o } = C.getState();
                  o?.(e, t), n?.(t);
                },
              });
              const { x: e, y: t, zoom: n } = O.current.getViewport();
              return (
                C.setState({
                  panZoom: O.current,
                  transform: [e, t, n],
                  domNode: M.current.closest('.react-flow'),
                }),
                () => {
                  O.current?.destroy();
                }
              );
            }
          }, []),
          (0, a.useEffect)(() => {
            O.current?.update({
              onPaneContextMenu: e,
              zoomOnScroll: t,
              zoomOnPinch: n,
              panOnScroll: r,
              panOnScrollSpeed: s,
              panOnScrollMode: c,
              zoomOnDoubleClick: l,
              panOnDrag: u,
              zoomActivationKeyPressed: I,
              preventScrolling: y,
              noPanClassName: S,
              userSelectionActive: N,
              noWheelClassName: b,
              lib: P,
              onTransformChange: z,
            });
          }, [e, t, n, r, s, c, l, u, I, y, S, N, b, P, z]),
          (0, o.jsx)('div', {
            className: 'react-flow__renderer',
            ref: M,
            style: he,
            children: v,
          })
        );
      }
      const me = (e) => ({
        userSelectionActive: e.userSelectionActive,
        userSelectionRect: e.userSelectionRect,
      });
      function ye() {
        const { userSelectionActive: e, userSelectionRect: t } = w(me, p);
        return e && t
          ? (0, o.jsx)('div', {
              className: 'react-flow__selection react-flow__container',
              style: {
                width: t.width,
                height: t.height,
                transform: `translate(${t.x}px, ${t.y}px)`,
              },
            })
          : null;
      }
      const ve = (e, t) => (n) => {
          n.target === t.current && e?.(n);
        },
        we = (e) => ({
          userSelectionActive: e.userSelectionActive,
          elementsSelectable: e.elementsSelectable,
          dragging: e.paneDragging,
        });
      function xe({
        isSelecting: e,
        selectionKeyPressed: t,
        selectionMode: n = i.oW.Full,
        panOnDrag: s,
        selectionOnDrag: c,
        onSelectionStart: l,
        onSelectionEnd: u,
        onPaneClick: d,
        onPaneContextMenu: f,
        onPaneScroll: h,
        onPaneMouseEnter: g,
        onPaneMouseMove: m,
        onPaneMouseLeave: y,
        children: v,
      }) {
        const b = (0, a.useRef)(null),
          S = x(),
          _ = (0, a.useRef)(0),
          k = (0, a.useRef)(0),
          E = (0, a.useRef)(),
          C = (0, a.useRef)(new Map()),
          {
            userSelectionActive: M,
            elementsSelectable: N,
            dragging: P,
          } = w(we, p),
          I = N && (e || M),
          O = (0, a.useRef)(!1),
          z = (0, a.useRef)(!1),
          A = (e) => {
            O.current
              ? (O.current = !1)
              : (d?.(e),
                S.getState().resetSelectedElements(),
                S.setState({ nodesSelectionActive: !1 }));
          },
          D = h ? (e) => h(e) : void 0,
          R = !0 === s || (Array.isArray(s) && s.includes(0));
        return (0, o.jsxs)('div', {
          className: r([
            'react-flow__pane',
            { draggable: R, dragging: P, selection: e },
          ]),
          onClick: I ? void 0 : ve(A, b),
          onContextMenu: ve((e) => {
            Array.isArray(s) && s?.includes(2) ? e.preventDefault() : f?.(e);
          }, b),
          onWheel: ve(D, b),
          onPointerEnter: I ? void 0 : g,
          onPointerDown: I
            ? (t) => {
                const {
                  resetSelectedElements: n,
                  domNode: o,
                  edgeLookup: r,
                } = S.getState();
                if (
                  ((E.current = o?.getBoundingClientRect()),
                  !N ||
                    !e ||
                    0 !== t.button ||
                    t.target !== b.current ||
                    !E.current)
                )
                  return;
                t.target?.setPointerCapture?.(t.pointerId),
                  (z.current = !0),
                  (O.current = !1),
                  (C.current = new Map());
                for (const [e, t] of r)
                  C.current.set(
                    t.source,
                    C.current.get(t.source)?.add(e) || new Set([e]),
                  ),
                    C.current.set(
                      t.target,
                      C.current.get(t.target)?.add(e) || new Set([e]),
                    );
                const { x: a, y: s } = (0, i.wv)(t.nativeEvent, E.current);
                n(),
                  S.setState({
                    userSelectionRect: {
                      width: 0,
                      height: 0,
                      startX: a,
                      startY: s,
                      x: a,
                      y: s,
                    },
                  }),
                  l?.(t);
              }
            : m,
          onPointerMove: I
            ? (e) => {
                const {
                  userSelectionRect: t,
                  edgeLookup: o,
                  transform: r,
                  nodeLookup: a,
                  triggerNodeChanges: s,
                  triggerEdgeChanges: c,
                } = S.getState();
                if (!E.current || !t) return;
                O.current = !0;
                const { x: l, y: u } = (0, i.wv)(e.nativeEvent, E.current),
                  { startX: d, startY: f } = t,
                  h = {
                    startX: d,
                    startY: f,
                    x: l < d ? l : d,
                    y: u < f ? u : f,
                    width: Math.abs(l - d),
                    height: Math.abs(u - f),
                  },
                  p = (0, i.f5)(a, h, r, n === i.oW.Partial, !0),
                  g = new Set(),
                  m = new Set();
                for (const e of p) {
                  m.add(e.id);
                  const t = C.current.get(e.id);
                  if (t) for (const e of t) g.add(e);
                }
                if (_.current !== m.size) {
                  _.current = m.size;
                  s(J(a, m, !0));
                }
                if (k.current !== g.size) {
                  k.current = g.size;
                  c(J(o, g));
                }
                S.setState({
                  userSelectionRect: h,
                  userSelectionActive: !0,
                  nodesSelectionActive: !1,
                });
              }
            : m,
          onPointerUp: I
            ? (e) => {
                if (0 !== e.button || !z.current) return;
                e.target?.releasePointerCapture?.(e.pointerId);
                const { userSelectionRect: n } = S.getState();
                !M && n && e.target === b.current && A?.(e),
                  _.current > 0 && S.setState({ nodesSelectionActive: !0 }),
                  S.setState({
                    userSelectionActive: !1,
                    userSelectionRect: null,
                  }),
                  (_.current = 0),
                  (k.current = 0),
                  u?.(e),
                  (t || c) && (O.current = !1),
                  (z.current = !1);
              }
            : void 0,
          onPointerLeave: y,
          ref: b,
          style: he,
          children: [v, (0, o.jsx)(ye, {})],
        });
      }
      function be({ id: e, store: t, unselect: n = !1, nodeRef: o }) {
        const {
            addSelectedNodes: r,
            unselectNodesAndEdges: a,
            multiSelectionActive: s,
            nodeLookup: c,
            onError: l,
          } = t.getState(),
          u = c.get(e);
        u
          ? (t.setState({ nodesSelectionActive: !1 }),
            u.selected
              ? (n || (u.selected && s)) &&
                (a({ nodes: [u], edges: [] }),
                requestAnimationFrame(() => o?.current?.blur()))
              : r([e]))
          : l?.('012', i.Qj.error012(e));
      }
      function Se({
        nodeRef: e,
        disabled: t = !1,
        noDragClassName: n,
        handleSelector: o,
        nodeId: r,
        isSelectable: s,
        nodeClickDistance: c,
      }) {
        const l = x(),
          [u, d] = (0, a.useState)(!1),
          f = (0, a.useRef)();
        return (
          (0, a.useEffect)(() => {
            f.current = (0, i.oC)({
              getStoreItems: () => l.getState(),
              onNodeMouseDown: (t) => {
                be({ id: t, store: l, nodeRef: e });
              },
              onDragStart: () => {
                d(!0);
              },
              onDragStop: () => {
                d(!1);
              },
            });
          }, []),
          (0, a.useEffect)(() => {
            if (t) f.current?.destroy();
            else if (e.current)
              return (
                f.current?.update({
                  noDragClassName: n,
                  handleSelector: o,
                  domNode: e.current,
                  isSelectable: s,
                  nodeId: r,
                  nodeClickDistance: c,
                }),
                () => {
                  f.current?.destroy();
                }
              );
          }, [n, o, t, s, e, r]),
          u
        );
      }
      function _e() {
        const e = x();
        return (0, a.useCallback)((t) => {
          const {
              nodeExtent: n,
              snapToGrid: o,
              snapGrid: r,
              nodesDraggable: a,
              onError: s,
              updateNodePositions: c,
              nodeLookup: l,
              nodeOrigin: u,
            } = e.getState(),
            d = new Map(),
            f = (
              (e) => (t) =>
                t.selected && (t.draggable || (e && void 0 === t.draggable))
            )(a),
            h = o ? r[0] : 5,
            p = o ? r[1] : 5,
            g = t.direction.x * h * t.factor,
            m = t.direction.y * p * t.factor;
          for (const [, e] of l) {
            if (!f(e)) continue;
            let t = {
              x: e.internals.positionAbsolute.x + g,
              y: e.internals.positionAbsolute.y + m,
            };
            o && (t = (0, i._2)(t, r));
            const { position: a, positionAbsolute: c } = (0, i.q7)({
              nodeId: e.id,
              nextPosition: t,
              nodeLookup: l,
              nodeExtent: n,
              nodeOrigin: u,
              onError: s,
            });
            (e.position = a),
              (e.internals.positionAbsolute = c),
              d.set(e.id, e);
          }
          c(d);
        }, []);
      }
      const ke = (0, a.createContext)(null),
        Ee = ke.Provider;
      ke.Consumer;
      const Ce = () => (0, a.useContext)(ke),
        Me = (e) => ({
          connectOnClick: e.connectOnClick,
          noPanClassName: e.noPanClassName,
          rfId: e.rfId,
        });
      const Ne = (0, a.memo)(
        oe(function (
          {
            type: e = 'source',
            position: t = i.Ly.Top,
            isValidConnection: n,
            isConnectable: a = !0,
            isConnectableStart: s = !0,
            isConnectableEnd: c = !0,
            id: l,
            onConnect: u,
            children: d,
            className: f,
            onMouseDown: h,
            onTouchStart: g,
            ...m
          },
          y,
        ) {
          const v = l || null,
            b = 'target' === e,
            S = x(),
            _ = Ce(),
            { connectOnClick: k, noPanClassName: E, rfId: C } = w(Me, p),
            {
              connectingFrom: M,
              connectingTo: N,
              clickConnecting: P,
              isPossibleEndHandle: I,
              connectionInProcess: O,
              valid: z,
            } = w(
              ((e, t, n) => (o) => {
                const {
                    connectionClickStartHandle: r,
                    connectionMode: a,
                    connection: s,
                  } = o,
                  { fromHandle: c, toHandle: l, isValid: u } = s,
                  d = l?.nodeId === e && l?.id === t && l?.type === n;
                return {
                  connectingFrom:
                    c?.nodeId === e && c?.id === t && c?.type === n,
                  connectingTo: d,
                  clickConnecting:
                    r?.nodeId === e && r?.id === t && r?.type === n,
                  isPossibleEndHandle:
                    a === i.jD.Strict
                      ? c?.type !== n
                      : e !== c?.nodeId || t !== c?.id,
                  connectionInProcess: !!c,
                  valid: d && u,
                };
              })(_, v, e),
              p,
            );
          _ || S.getState().onError?.('010', i.Qj.error010());
          const A = (e) => {
              const {
                  defaultEdgeOptions: t,
                  onConnect: n,
                  hasDefaultEdges: o,
                } = S.getState(),
                r = { ...t, ...e };
              if (o) {
                const { edges: e, setEdges: t } = S.getState();
                t((0, i.Z_)(r, e));
              }
              n?.(r), u?.(r);
            },
            D = (e) => {
              if (!_) return;
              const t = (0, i.N5)(e.nativeEvent);
              if (s && ((t && 0 === e.button) || !t)) {
                const t = S.getState();
                i.Ql.onPointerDown(e.nativeEvent, {
                  autoPanOnConnect: t.autoPanOnConnect,
                  connectionMode: t.connectionMode,
                  connectionRadius: t.connectionRadius,
                  domNode: t.domNode,
                  nodeLookup: t.nodeLookup,
                  lib: t.lib,
                  isTarget: b,
                  handleId: v,
                  nodeId: _,
                  flowId: t.rfId,
                  panBy: t.panBy,
                  cancelConnection: t.cancelConnection,
                  onConnectStart: t.onConnectStart,
                  onConnectEnd: t.onConnectEnd,
                  updateConnection: t.updateConnection,
                  onConnect: A,
                  isValidConnection: n || t.isValidConnection,
                  getTransform: () => S.getState().transform,
                  getFromHandle: () => S.getState().connection.fromHandle,
                  autoPanSpeed: t.autoPanSpeed,
                });
              }
              t ? h?.(e) : g?.(e);
            };
          return (0, o.jsx)('div', {
            'data-handleid': v,
            'data-nodeid': _,
            'data-handlepos': t,
            'data-id': `${C}-${_}-${v}-${e}`,
            className: r([
              'react-flow__handle',
              `react-flow__handle-${t}`,
              'nodrag',
              E,
              f,
              {
                source: !b,
                target: b,
                connectable: a,
                connectablestart: s,
                connectableend: c,
                clickconnecting: P,
                connectingfrom: M,
                connectingto: N,
                valid: z,
                connectionindicator: a && (!O || I) && (O ? c : s),
              },
            ]),
            onMouseDown: D,
            onTouchStart: D,
            onClick: k
              ? (t) => {
                  const {
                    onClickConnectStart: o,
                    onClickConnectEnd: r,
                    connectionClickStartHandle: a,
                    connectionMode: c,
                    isValidConnection: l,
                    lib: u,
                    rfId: d,
                    nodeLookup: f,
                    connection: h,
                  } = S.getState();
                  if (!_ || (!a && !s)) return;
                  if (!a)
                    return (
                      o?.(t.nativeEvent, {
                        nodeId: _,
                        handleId: v,
                        handleType: e,
                      }),
                      void S.setState({
                        connectionClickStartHandle: {
                          nodeId: _,
                          type: e,
                          id: v,
                        },
                      })
                    );
                  const p = (0, i.S2)(t.target),
                    g = n || l,
                    { connection: m, isValid: y } = i.Ql.isValid(
                      t.nativeEvent,
                      {
                        handle: { nodeId: _, id: v, type: e },
                        connectionMode: c,
                        fromNodeId: a.nodeId,
                        fromHandleId: a.id || null,
                        fromType: a.type,
                        isValidConnection: g,
                        flowId: d,
                        doc: p,
                        lib: u,
                        nodeLookup: f,
                      },
                    );
                  y && m && A(m);
                  const w = structuredClone(h);
                  delete w.inProgress,
                    (w.toPosition = w.toHandle ? w.toHandle.position : null),
                    r?.(t, w),
                    S.setState({ connectionClickStartHandle: null });
                }
              : void 0,
            ref: y,
            ...m,
            children: d,
          });
        }),
      );
      const Pe = {
          ArrowUp: { x: 0, y: -1 },
          ArrowDown: { x: 0, y: 1 },
          ArrowLeft: { x: -1, y: 0 },
          ArrowRight: { x: 1, y: 0 },
        },
        Ie = {
          input: function ({
            data: e,
            isConnectable: t,
            sourcePosition: n = i.Ly.Bottom,
          }) {
            return (0, o.jsxs)(o.Fragment, {
              children: [
                e?.label,
                (0, o.jsx)(Ne, {
                  type: 'source',
                  position: n,
                  isConnectable: t,
                }),
              ],
            });
          },
          default: function ({
            data: e,
            isConnectable: t,
            targetPosition: n = i.Ly.Top,
            sourcePosition: r = i.Ly.Bottom,
          }) {
            return (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(Ne, {
                  type: 'target',
                  position: n,
                  isConnectable: t,
                }),
                e?.label,
                (0, o.jsx)(Ne, {
                  type: 'source',
                  position: r,
                  isConnectable: t,
                }),
              ],
            });
          },
          output: function ({
            data: e,
            isConnectable: t,
            targetPosition: n = i.Ly.Top,
          }) {
            return (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(Ne, {
                  type: 'target',
                  position: n,
                  isConnectable: t,
                }),
                e?.label,
              ],
            });
          },
          group: function () {
            return null;
          },
        };
      const Oe = (e) => {
        const {
          width: t,
          height: n,
          x: o,
          y: r,
        } = (0, i.W0)(e.nodeLookup, { filter: (e) => !!e.selected });
        return {
          width: (0, i.kE)(t) ? t : null,
          height: (0, i.kE)(n) ? n : null,
          userSelectionActive: e.userSelectionActive,
          transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`,
        };
      };
      function ze({
        onSelectionContextMenu: e,
        noPanClassName: t,
        disableKeyboardA11y: n,
      }) {
        const i = x(),
          {
            width: s,
            height: c,
            transformString: l,
            userSelectionActive: u,
          } = w(Oe, p),
          d = _e(),
          f = (0, a.useRef)(null);
        if (
          ((0, a.useEffect)(() => {
            n || f.current?.focus({ preventScroll: !0 });
          }, [n]),
          Se({ nodeRef: f }),
          u || !s || !c)
        )
          return null;
        const h = e
          ? (t) => {
              const n = i.getState().nodes.filter((e) => e.selected);
              e(t, n);
            }
          : void 0;
        return (0, o.jsx)('div', {
          className: r([
            'react-flow__nodesselection',
            'react-flow__container',
            t,
          ]),
          style: { transform: l },
          children: (0, o.jsx)('div', {
            ref: f,
            className: 'react-flow__nodesselection-rect',
            onContextMenu: h,
            tabIndex: n ? void 0 : -1,
            onKeyDown: n
              ? void 0
              : (e) => {
                  Object.prototype.hasOwnProperty.call(Pe, e.key) &&
                    (e.preventDefault(),
                    d({ direction: Pe[e.key], factor: e.shiftKey ? 4 : 1 }));
                },
            style: { width: s, height: c },
          }),
        });
      }
      const Ae = 'undefined' != typeof window ? window : void 0,
        De = (e) => ({
          nodesSelectionActive: e.nodesSelectionActive,
          userSelectionActive: e.userSelectionActive,
        });
      function Re({
        children: e,
        onPaneClick: t,
        onPaneMouseEnter: n,
        onPaneMouseMove: r,
        onPaneMouseLeave: i,
        onPaneContextMenu: s,
        onPaneScroll: c,
        paneClickDistance: l,
        deleteKeyCode: u,
        selectionKeyCode: d,
        selectionOnDrag: f,
        selectionMode: h,
        onSelectionStart: p,
        onSelectionEnd: g,
        multiSelectionKeyCode: m,
        panActivationKeyCode: y,
        zoomActivationKeyCode: v,
        elementsSelectable: b,
        zoomOnScroll: S,
        zoomOnPinch: _,
        panOnScroll: k,
        panOnScrollSpeed: E,
        panOnScrollMode: C,
        zoomOnDoubleClick: M,
        panOnDrag: N,
        defaultViewport: P,
        translateExtent: I,
        minZoom: O,
        maxZoom: z,
        preventScrolling: A,
        onSelectionContextMenu: D,
        noWheelClassName: R,
        noPanClassName: j,
        disableKeyboardA11y: $,
        onViewportChange: L,
        isControlledViewport: T,
      }) {
        const { nodesSelectionActive: B, userSelectionActive: V } = w(De),
          Z = W(d, { target: Ae }),
          H = W(y, { target: Ae }),
          X = H || N,
          Y = H || k,
          F = f && !0 !== X,
          K = Z || V || F;
        return (
          (function ({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
            const n = x(),
              { deleteElements: o } = le(),
              r = W(e, de),
              i = W(t, { target: fe });
            (0, a.useEffect)(() => {
              if (r) {
                const { edges: e, nodes: t } = n.getState();
                o({ nodes: t.filter(ue), edges: e.filter(ue) }),
                  n.setState({ nodesSelectionActive: !1 });
              }
            }, [r]),
              (0, a.useEffect)(() => {
                n.setState({ multiSelectionActive: i });
              }, [i]);
          })({ deleteKeyCode: u, multiSelectionKeyCode: m }),
          (0, o.jsx)(ge, {
            onPaneContextMenu: s,
            elementsSelectable: b,
            zoomOnScroll: S,
            zoomOnPinch: _,
            panOnScroll: Y,
            panOnScrollSpeed: E,
            panOnScrollMode: C,
            zoomOnDoubleClick: M,
            panOnDrag: !Z && X,
            defaultViewport: P,
            translateExtent: I,
            minZoom: O,
            maxZoom: z,
            zoomActivationKeyCode: v,
            preventScrolling: A,
            noWheelClassName: R,
            noPanClassName: j,
            onViewportChange: L,
            isControlledViewport: T,
            paneClickDistance: l,
            children: (0, o.jsxs)(xe, {
              onSelectionStart: p,
              onSelectionEnd: g,
              onPaneClick: t,
              onPaneMouseEnter: n,
              onPaneMouseMove: r,
              onPaneMouseLeave: i,
              onPaneContextMenu: s,
              onPaneScroll: c,
              panOnDrag: X,
              isSelecting: !!K,
              selectionMode: h,
              selectionKeyPressed: Z,
              selectionOnDrag: F,
              children: [
                e,
                B &&
                  (0, o.jsx)(ze, {
                    onSelectionContextMenu: D,
                    noPanClassName: j,
                    disableKeyboardA11y: $,
                  }),
              ],
            }),
          })
        );
      }
      Re.displayName = 'FlowRenderer';
      const je = (0, a.memo)(Re);
      function $e(e) {
        return w(
          (0, a.useCallback)(
            ((e) => (t) =>
              e
                ? (0, i.f5)(
                    t.nodeLookup,
                    { x: 0, y: 0, width: t.width, height: t.height },
                    t.transform,
                    !0,
                  ).map((e) => e.id)
                : Array.from(t.nodeLookup.keys()))(e),
            [e],
          ),
          p,
        );
      }
      const Le = (e) => e.updateNodeInternals;
      function Te({
        id: e,
        onClick: t,
        onMouseEnter: n,
        onMouseMove: s,
        onMouseLeave: c,
        onContextMenu: l,
        onDoubleClick: u,
        nodesDraggable: d,
        elementsSelectable: f,
        nodesConnectable: h,
        nodesFocusable: g,
        resizeObserver: m,
        noDragClassName: y,
        noPanClassName: v,
        disableKeyboardA11y: b,
        rfId: S,
        nodeTypes: k,
        nodeExtent: E,
        nodeClickDistance: C,
        onError: M,
      }) {
        const {
          node: N,
          internals: P,
          isParent: I,
        } = w((t) => {
          const n = t.nodeLookup.get(e),
            o = t.parentLookup.has(e);
          return { node: n, internals: n.internals, isParent: o };
        }, p);
        let O = N.type || 'default',
          z = k?.[O] || Ie[O];
        void 0 === z &&
          (M?.('003', i.Qj.error003(O)), (O = 'default'), (z = Ie.default));
        const A = !!(N.draggable || (d && void 0 === N.draggable)),
          D = !!(N.selectable || (f && void 0 === N.selectable)),
          R = !!(N.connectable || (h && void 0 === N.connectable)),
          j = !!(N.focusable || (g && void 0 === N.focusable)),
          $ = x(),
          L = (0, i.nb)(N),
          T = (function ({
            node: e,
            nodeType: t,
            hasDimensions: n,
            resizeObserver: o,
          }) {
            const r = x(),
              i = (0, a.useRef)(null),
              s = (0, a.useRef)(null),
              c = (0, a.useRef)(e.sourcePosition),
              l = (0, a.useRef)(e.targetPosition),
              u = (0, a.useRef)(t),
              d = n && !!e.internals.handleBounds;
            return (
              (0, a.useEffect)(() => {
                !i.current ||
                  e.hidden ||
                  (d && s.current === i.current) ||
                  (s.current && o?.unobserve(s.current),
                  o?.observe(i.current),
                  (s.current = i.current));
              }, [d, e.hidden]),
              (0, a.useEffect)(
                () => () => {
                  s.current && (o?.unobserve(s.current), (s.current = null));
                },
                [],
              ),
              (0, a.useEffect)(() => {
                if (i.current) {
                  const n = u.current !== t,
                    o = c.current !== e.sourcePosition,
                    a = l.current !== e.targetPosition;
                  (n || o || a) &&
                    ((u.current = t),
                    (c.current = e.sourcePosition),
                    (l.current = e.targetPosition),
                    r
                      .getState()
                      .updateNodeInternals(
                        new Map([
                          [
                            e.id,
                            { id: e.id, nodeElement: i.current, force: !0 },
                          ],
                        ]),
                      ));
                }
              }, [e.id, t, e.sourcePosition, e.targetPosition]),
              i
            );
          })({ node: N, nodeType: O, hasDimensions: L, resizeObserver: m }),
          B = Se({
            nodeRef: T,
            disabled: N.hidden || !A,
            noDragClassName: y,
            handleSelector: N.dragHandle,
            nodeId: e,
            isSelectable: D,
            nodeClickDistance: C,
          }),
          V = _e();
        if (N.hidden) return null;
        const Z = (0, i.Rf)(N),
          H = (function (e) {
            return void 0 === e.internals.handleBounds
              ? {
                  width: e.width ?? e.initialWidth ?? e.style?.width,
                  height: e.height ?? e.initialHeight ?? e.style?.height,
                }
              : {
                  width: e.width ?? e.style?.width,
                  height: e.height ?? e.style?.height,
                };
          })(N),
          X = D || A || t || n || s || c,
          W = n ? (e) => n(e, { ...P.userNode }) : void 0,
          Y = s ? (e) => s(e, { ...P.userNode }) : void 0,
          F = c ? (e) => c(e, { ...P.userNode }) : void 0,
          K = l ? (e) => l(e, { ...P.userNode }) : void 0,
          q = u ? (e) => u(e, { ...P.userNode }) : void 0;
        return (0, o.jsx)('div', {
          className: r([
            'react-flow__node',
            `react-flow__node-${O}`,
            { [v]: A },
            N.className,
            {
              selected: N.selected,
              selectable: D,
              parent: I,
              draggable: A,
              dragging: B,
            },
          ]),
          ref: T,
          style: {
            zIndex: P.z,
            transform: `translate(${P.positionAbsolute.x}px,${P.positionAbsolute.y}px)`,
            pointerEvents: X ? 'all' : 'none',
            visibility: L ? 'visible' : 'hidden',
            ...N.style,
            ...H,
          },
          'data-id': e,
          'data-testid': `rf__node-${e}`,
          onMouseEnter: W,
          onMouseMove: Y,
          onMouseLeave: F,
          onContextMenu: K,
          onClick: (n) => {
            const { selectNodesOnDrag: o, nodeDragThreshold: r } = $.getState();
            D && (!o || !A || r > 0) && be({ id: e, store: $, nodeRef: T }),
              t && t(n, { ...P.userNode });
          },
          onDoubleClick: q,
          onKeyDown: j
            ? (t) => {
                if (!(0, i.s$)(t.nativeEvent) && !b)
                  if (i.wQ.includes(t.key) && D) {
                    const n = 'Escape' === t.key;
                    be({ id: e, store: $, unselect: n, nodeRef: T });
                  } else
                    A &&
                      N.selected &&
                      Object.prototype.hasOwnProperty.call(Pe, t.key) &&
                      (t.preventDefault(),
                      $.setState({
                        ariaLiveMessage: `Moved selected node ${t.key.replace('Arrow', '').toLowerCase()}. New position, x: ${~~P.positionAbsolute.x}, y: ${~~P.positionAbsolute.y}`,
                      }),
                      V({ direction: Pe[t.key], factor: t.shiftKey ? 4 : 1 }));
              }
            : void 0,
          tabIndex: j ? 0 : void 0,
          role: j ? 'button' : void 0,
          'aria-describedby': b ? void 0 : `${_}-${S}`,
          'aria-label': N.ariaLabel,
          children: (0, o.jsx)(Ee, {
            value: e,
            children: (0, o.jsx)(z, {
              id: e,
              data: N.data,
              type: O,
              positionAbsoluteX: P.positionAbsolute.x,
              positionAbsoluteY: P.positionAbsolute.y,
              selected: N.selected,
              selectable: D,
              draggable: A,
              deletable: N.deletable ?? !0,
              isConnectable: R,
              sourcePosition: N.sourcePosition,
              targetPosition: N.targetPosition,
              dragging: B,
              dragHandle: N.dragHandle,
              zIndex: P.z,
              parentId: N.parentId,
              ...Z,
            }),
          }),
        });
      }
      const Be = (e) => ({
        nodesDraggable: e.nodesDraggable,
        nodesConnectable: e.nodesConnectable,
        nodesFocusable: e.nodesFocusable,
        elementsSelectable: e.elementsSelectable,
        onError: e.onError,
      });
      function Ve(e) {
        const {
            nodesDraggable: t,
            nodesConnectable: n,
            nodesFocusable: r,
            elementsSelectable: i,
            onError: s,
          } = w(Be, p),
          c = $e(e.onlyRenderVisibleElements),
          l = (function () {
            const e = w(Le),
              [t] = (0, a.useState)(() =>
                'undefined' == typeof ResizeObserver
                  ? null
                  : new ResizeObserver((t) => {
                      const n = new Map();
                      t.forEach((e) => {
                        const t = e.target.getAttribute('data-id');
                        n.set(t, { id: t, nodeElement: e.target, force: !0 });
                      }),
                        e(n);
                    }),
              );
            return (
              (0, a.useEffect)(
                () => () => {
                  t?.disconnect();
                },
                [t],
              ),
              t
            );
          })();
        return (0, o.jsx)('div', {
          className: 'react-flow__nodes',
          style: he,
          children: c.map((a) =>
            (0, o.jsx)(
              Te,
              {
                id: a,
                nodeTypes: e.nodeTypes,
                nodeExtent: e.nodeExtent,
                onClick: e.onNodeClick,
                onMouseEnter: e.onNodeMouseEnter,
                onMouseMove: e.onNodeMouseMove,
                onMouseLeave: e.onNodeMouseLeave,
                onContextMenu: e.onNodeContextMenu,
                onDoubleClick: e.onNodeDoubleClick,
                noDragClassName: e.noDragClassName,
                noPanClassName: e.noPanClassName,
                rfId: e.rfId,
                disableKeyboardA11y: e.disableKeyboardA11y,
                resizeObserver: l,
                nodesDraggable: t,
                nodesConnectable: n,
                nodesFocusable: r,
                elementsSelectable: i,
                nodeClickDistance: e.nodeClickDistance,
                onError: s,
              },
              a,
            ),
          ),
        });
      }
      Ve.displayName = 'NodeRenderer';
      const Ze = (0, a.memo)(Ve);
      const He = {
        [i.QZ.Arrow]: ({ color: e = 'none', strokeWidth: t = 1 }) =>
          (0, o.jsx)('polyline', {
            style: { stroke: e, strokeWidth: t },
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            fill: 'none',
            points: '-5,-4 0,0 -5,4',
          }),
        [i.QZ.ArrowClosed]: ({ color: e = 'none', strokeWidth: t = 1 }) =>
          (0, o.jsx)('polyline', {
            style: { stroke: e, fill: e, strokeWidth: t },
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            points: '-5,-4 0,0 -5,4 -5,-4',
          }),
      };
      const Xe = ({
          id: e,
          type: t,
          color: n,
          width: r = 12.5,
          height: s = 12.5,
          markerUnits: c = 'strokeWidth',
          strokeWidth: l,
          orient: u = 'auto-start-reverse',
        }) => {
          const d = (function (e) {
            const t = x();
            return (0, a.useMemo)(
              () =>
                Object.prototype.hasOwnProperty.call(He, e)
                  ? He[e]
                  : (t.getState().onError?.('009', i.Qj.error009(e)), null),
              [e],
            );
          })(t);
          return d
            ? (0, o.jsx)('marker', {
                className: 'react-flow__arrowhead',
                id: e,
                markerWidth: `${r}`,
                markerHeight: `${s}`,
                viewBox: '-10 -10 20 20',
                markerUnits: c,
                orient: u,
                refX: '0',
                refY: '0',
                children: (0, o.jsx)(d, { color: n, strokeWidth: l }),
              })
            : null;
        },
        We = ({ defaultColor: e, rfId: t }) => {
          const n = w((e) => e.edges),
            r = w((e) => e.defaultEdgeOptions),
            s = (0, a.useMemo)(
              () =>
                (0, i.n3)(n, {
                  id: t,
                  defaultColor: e,
                  defaultMarkerStart: r?.markerStart,
                  defaultMarkerEnd: r?.markerEnd,
                }),
              [n, r, t, e],
            );
          return s.length
            ? (0, o.jsx)('svg', {
                className: 'react-flow__marker',
                children: (0, o.jsx)('defs', {
                  children: s.map((e) =>
                    (0, o.jsx)(
                      Xe,
                      {
                        id: e.id,
                        type: e.type,
                        color: e.color,
                        width: e.width,
                        height: e.height,
                        markerUnits: e.markerUnits,
                        strokeWidth: e.strokeWidth,
                        orient: e.orient,
                      },
                      e.id,
                    ),
                  ),
                }),
              })
            : null;
        };
      We.displayName = 'MarkerDefinitions';
      var Ye = (0, a.memo)(We);
      function Fe({
        x: e,
        y: t,
        label: n,
        labelStyle: i = {},
        labelShowBg: s = !0,
        labelBgStyle: c = {},
        labelBgPadding: l = [2, 4],
        labelBgBorderRadius: u = 2,
        children: d,
        className: f,
        ...h
      }) {
        const [p, g] = (0, a.useState)({ x: 1, y: 0, width: 0, height: 0 }),
          m = r(['react-flow__edge-textwrapper', f]),
          y = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            if (y.current) {
              const e = y.current.getBBox();
              g({ x: e.x, y: e.y, width: e.width, height: e.height });
            }
          }, [n]),
          void 0 !== n && n
            ? (0, o.jsxs)('g', {
                transform: `translate(${e - p.width / 2} ${t - p.height / 2})`,
                className: m,
                visibility: p.width ? 'visible' : 'hidden',
                ...h,
                children: [
                  s &&
                    (0, o.jsx)('rect', {
                      width: p.width + 2 * l[0],
                      x: -l[0],
                      y: -l[1],
                      height: p.height + 2 * l[1],
                      className: 'react-flow__edge-textbg',
                      style: c,
                      rx: u,
                      ry: u,
                    }),
                  (0, o.jsx)('text', {
                    className: 'react-flow__edge-text',
                    y: p.height / 2,
                    dy: '0.3em',
                    ref: y,
                    style: i,
                    children: n,
                  }),
                  d,
                ],
              })
            : null
        );
      }
      Fe.displayName = 'EdgeText';
      const Ke = (0, a.memo)(Fe);
      function qe({
        path: e,
        labelX: t,
        labelY: n,
        label: a,
        labelStyle: s,
        labelShowBg: c,
        labelBgStyle: l,
        labelBgPadding: u,
        labelBgBorderRadius: d,
        interactionWidth: f = 20,
        ...h
      }) {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)('path', {
              ...h,
              d: e,
              fill: 'none',
              className: r(['react-flow__edge-path', h.className]),
            }),
            f &&
              (0, o.jsx)('path', {
                d: e,
                fill: 'none',
                strokeOpacity: 0,
                strokeWidth: f,
                className: 'react-flow__edge-interaction',
              }),
            a && (0, i.kE)(t) && (0, i.kE)(n)
              ? (0, o.jsx)(Ke, {
                  x: t,
                  y: n,
                  label: a,
                  labelStyle: s,
                  labelShowBg: c,
                  labelBgStyle: l,
                  labelBgPadding: u,
                  labelBgBorderRadius: d,
                })
              : null,
          ],
        });
      }
      function Ge({ pos: e, x1: t, y1: n, x2: o, y2: r }) {
        return e === i.Ly.Left || e === i.Ly.Right
          ? [0.5 * (t + o), n]
          : [t, 0.5 * (n + r)];
      }
      function Ue({
        sourceX: e,
        sourceY: t,
        sourcePosition: n = i.Ly.Bottom,
        targetX: o,
        targetY: r,
        targetPosition: a = i.Ly.Top,
      }) {
        const [s, c] = Ge({ pos: n, x1: e, y1: t, x2: o, y2: r }),
          [l, u] = Ge({ pos: a, x1: o, y1: r, x2: e, y2: t }),
          [d, f, h, p] = (0, i.lM)({
            sourceX: e,
            sourceY: t,
            targetX: o,
            targetY: r,
            sourceControlX: s,
            sourceControlY: c,
            targetControlX: l,
            targetControlY: u,
          });
        return [`M${e},${t} C${s},${c} ${l},${u} ${o},${r}`, d, f, h, p];
      }
      function Qe(e) {
        return (0, a.memo)(
          ({
            id: t,
            sourceX: n,
            sourceY: r,
            targetX: a,
            targetY: s,
            sourcePosition: c = i.Ly.Bottom,
            targetPosition: l = i.Ly.Top,
            label: u,
            labelStyle: d,
            labelShowBg: f,
            labelBgStyle: h,
            labelBgPadding: p,
            labelBgBorderRadius: g,
            style: m,
            markerEnd: y,
            markerStart: v,
            interactionWidth: w,
          }) => {
            const [x, b, S] = Ue({
                sourceX: n,
                sourceY: r,
                sourcePosition: c,
                targetX: a,
                targetY: s,
                targetPosition: l,
              }),
              _ = e.isInternal ? void 0 : t;
            return (0, o.jsx)(qe, {
              id: _,
              path: x,
              labelX: b,
              labelY: S,
              label: u,
              labelStyle: d,
              labelShowBg: f,
              labelBgStyle: h,
              labelBgPadding: p,
              labelBgBorderRadius: g,
              style: m,
              markerEnd: y,
              markerStart: v,
              interactionWidth: w,
            });
          },
        );
      }
      const Je = Qe({ isInternal: !1 }),
        et = Qe({ isInternal: !0 });
      function tt(e) {
        return (0, a.memo)(
          ({
            id: t,
            sourceX: n,
            sourceY: r,
            targetX: a,
            targetY: s,
            label: c,
            labelStyle: l,
            labelShowBg: u,
            labelBgStyle: d,
            labelBgPadding: f,
            labelBgBorderRadius: h,
            style: p,
            sourcePosition: g = i.Ly.Bottom,
            targetPosition: m = i.Ly.Top,
            markerEnd: y,
            markerStart: v,
            pathOptions: w,
            interactionWidth: x,
          }) => {
            const [b, S, _] = (0, i.OW)({
                sourceX: n,
                sourceY: r,
                sourcePosition: g,
                targetX: a,
                targetY: s,
                targetPosition: m,
                borderRadius: w?.borderRadius,
                offset: w?.offset,
              }),
              k = e.isInternal ? void 0 : t;
            return (0, o.jsx)(qe, {
              id: k,
              path: b,
              labelX: S,
              labelY: _,
              label: c,
              labelStyle: l,
              labelShowBg: u,
              labelBgStyle: d,
              labelBgPadding: f,
              labelBgBorderRadius: h,
              style: p,
              markerEnd: y,
              markerStart: v,
              interactionWidth: x,
            });
          },
        );
      }
      (Je.displayName = 'SimpleBezierEdge'),
        (et.displayName = 'SimpleBezierEdgeInternal');
      const nt = tt({ isInternal: !1 }),
        ot = tt({ isInternal: !0 });
      function rt(e) {
        return (0, a.memo)(({ id: t, ...n }) => {
          const r = e.isInternal ? void 0 : t;
          return (0, o.jsx)(nt, {
            ...n,
            id: r,
            pathOptions: (0, a.useMemo)(
              () => ({ borderRadius: 0, offset: n.pathOptions?.offset }),
              [n.pathOptions?.offset],
            ),
          });
        });
      }
      (nt.displayName = 'SmoothStepEdge'),
        (ot.displayName = 'SmoothStepEdgeInternal');
      const it = rt({ isInternal: !1 }),
        at = rt({ isInternal: !0 });
      function st(e) {
        return (0, a.memo)(
          ({
            id: t,
            sourceX: n,
            sourceY: r,
            targetX: a,
            targetY: s,
            label: c,
            labelStyle: l,
            labelShowBg: u,
            labelBgStyle: d,
            labelBgPadding: f,
            labelBgBorderRadius: h,
            style: p,
            markerEnd: g,
            markerStart: m,
            interactionWidth: y,
          }) => {
            const [v, w, x] = (0, i.Hm)({
                sourceX: n,
                sourceY: r,
                targetX: a,
                targetY: s,
              }),
              b = e.isInternal ? void 0 : t;
            return (0, o.jsx)(qe, {
              id: b,
              path: v,
              labelX: w,
              labelY: x,
              label: c,
              labelStyle: l,
              labelShowBg: u,
              labelBgStyle: d,
              labelBgPadding: f,
              labelBgBorderRadius: h,
              style: p,
              markerEnd: g,
              markerStart: m,
              interactionWidth: y,
            });
          },
        );
      }
      (it.displayName = 'StepEdge'), (at.displayName = 'StepEdgeInternal');
      const ct = st({ isInternal: !1 }),
        lt = st({ isInternal: !0 });
      function ut(e) {
        return (0, a.memo)(
          ({
            id: t,
            sourceX: n,
            sourceY: r,
            targetX: a,
            targetY: s,
            sourcePosition: c = i.Ly.Bottom,
            targetPosition: l = i.Ly.Top,
            label: u,
            labelStyle: d,
            labelShowBg: f,
            labelBgStyle: h,
            labelBgPadding: p,
            labelBgBorderRadius: g,
            style: m,
            markerEnd: y,
            markerStart: v,
            pathOptions: w,
            interactionWidth: x,
          }) => {
            const [b, S, _] = (0, i.OQ)({
                sourceX: n,
                sourceY: r,
                sourcePosition: c,
                targetX: a,
                targetY: s,
                targetPosition: l,
                curvature: w?.curvature,
              }),
              k = e.isInternal ? void 0 : t;
            return (0, o.jsx)(qe, {
              id: k,
              path: b,
              labelX: S,
              labelY: _,
              label: u,
              labelStyle: d,
              labelShowBg: f,
              labelBgStyle: h,
              labelBgPadding: p,
              labelBgBorderRadius: g,
              style: m,
              markerEnd: y,
              markerStart: v,
              interactionWidth: x,
            });
          },
        );
      }
      (ct.displayName = 'StraightEdge'),
        (lt.displayName = 'StraightEdgeInternal');
      const dt = ut({ isInternal: !1 }),
        ft = ut({ isInternal: !0 });
      (dt.displayName = 'BezierEdge'), (ft.displayName = 'BezierEdgeInternal');
      const ht = {
          default: ft,
          straight: lt,
          step: at,
          smoothstep: ot,
          simplebezier: et,
        },
        pt = {
          sourceX: null,
          sourceY: null,
          targetX: null,
          targetY: null,
          sourcePosition: null,
          targetPosition: null,
        },
        gt = (e, t, n) =>
          n === i.Ly.Left ? e - t : n === i.Ly.Right ? e + t : e,
        mt = (e, t, n) =>
          n === i.Ly.Top ? e - t : n === i.Ly.Bottom ? e + t : e,
        yt = 'react-flow__edgeupdater';
      function vt({
        position: e,
        centerX: t,
        centerY: n,
        radius: i = 10,
        onMouseDown: a,
        onMouseEnter: s,
        onMouseOut: c,
        type: l,
      }) {
        return (0, o.jsx)('circle', {
          onMouseDown: a,
          onMouseEnter: s,
          onMouseOut: c,
          className: r([yt, `${yt}-${l}`]),
          cx: gt(t, i, e),
          cy: mt(n, i, e),
          r: i,
          stroke: 'transparent',
          fill: 'transparent',
        });
      }
      function wt({
        isReconnectable: e,
        reconnectRadius: t,
        edge: n,
        sourceX: r,
        sourceY: a,
        targetX: s,
        targetY: c,
        sourcePosition: l,
        targetPosition: u,
        onReconnect: d,
        onReconnectStart: f,
        onReconnectEnd: h,
        setReconnecting: p,
        setUpdateHover: g,
      }) {
        const m = x(),
          y = (e, t) => {
            if (0 !== e.button) return;
            const {
                autoPanOnConnect: o,
                domNode: r,
                isValidConnection: a,
                connectionMode: s,
                connectionRadius: c,
                lib: l,
                onConnectStart: u,
                onConnectEnd: g,
                cancelConnection: y,
                nodeLookup: v,
                rfId: w,
                panBy: x,
                updateConnection: b,
              } = m.getState(),
              S = 'target' === t.type;
            p(!0), f?.(e, n, t.type);
            i.Ql.onPointerDown(e.nativeEvent, {
              autoPanOnConnect: o,
              connectionMode: s,
              connectionRadius: c,
              domNode: r,
              handleId: t.id,
              nodeId: t.nodeId,
              nodeLookup: v,
              isTarget: S,
              edgeUpdaterType: t.type,
              lib: l,
              flowId: w,
              cancelConnection: y,
              panBy: x,
              isValidConnection: a,
              onConnect: (e) => d?.(n, e),
              onConnectStart: u,
              onConnectEnd: g,
              onReconnectEnd: (e, o) => {
                p(!1), h?.(e, n, t.type, o);
              },
              updateConnection: b,
              getTransform: () => m.getState().transform,
              getFromHandle: () => m.getState().connection.fromHandle,
            });
          },
          v = () => g(!0),
          w = () => g(!1);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (!0 === e || 'source' === e) &&
              (0, o.jsx)(vt, {
                position: l,
                centerX: r,
                centerY: a,
                radius: t,
                onMouseDown: (e) =>
                  y(e, {
                    nodeId: n.target,
                    id: n.targetHandle ?? null,
                    type: 'target',
                  }),
                onMouseEnter: v,
                onMouseOut: w,
                type: 'source',
              }),
            (!0 === e || 'target' === e) &&
              (0, o.jsx)(vt, {
                position: u,
                centerX: s,
                centerY: c,
                radius: t,
                onMouseDown: (e) =>
                  y(e, {
                    nodeId: n.source,
                    id: n.sourceHandle ?? null,
                    type: 'source',
                  }),
                onMouseEnter: v,
                onMouseOut: w,
                type: 'target',
              }),
          ],
        });
      }
      function xt({
        id: e,
        edgesFocusable: t,
        edgesReconnectable: n,
        elementsSelectable: s,
        onClick: c,
        onDoubleClick: l,
        onContextMenu: u,
        onMouseEnter: d,
        onMouseMove: f,
        onMouseLeave: h,
        reconnectRadius: g,
        onReconnect: m,
        onReconnectStart: y,
        onReconnectEnd: v,
        rfId: b,
        edgeTypes: S,
        noPanClassName: _,
        onError: E,
        disableKeyboardA11y: C,
      }) {
        let M = w((t) => t.edgeLookup.get(e));
        const N = w((e) => e.defaultEdgeOptions);
        M = N ? { ...N, ...M } : M;
        let P = M.type || 'default',
          I = S?.[P] || ht[P];
        void 0 === I &&
          (E?.('011', i.Qj.error011(P)), (P = 'default'), (I = ht.default));
        const O = !!(M.focusable || (t && void 0 === M.focusable)),
          z =
            void 0 !== m &&
            (M.reconnectable || (n && void 0 === M.reconnectable)),
          A = !!(M.selectable || (s && void 0 === M.selectable)),
          D = (0, a.useRef)(null),
          [R, j] = (0, a.useState)(!1),
          [$, L] = (0, a.useState)(!1),
          T = x(),
          {
            zIndex: B,
            sourceX: V,
            sourceY: Z,
            targetX: H,
            targetY: X,
            sourcePosition: W,
            targetPosition: Y,
          } = w(
            (0, a.useCallback)(
              (t) => {
                const n = t.nodeLookup.get(M.source),
                  o = t.nodeLookup.get(M.target);
                if (!n || !o) return { zIndex: M.zIndex, ...pt };
                const r = (0, i.JU)({
                  id: e,
                  sourceNode: n,
                  targetNode: o,
                  sourceHandle: M.sourceHandle || null,
                  targetHandle: M.targetHandle || null,
                  connectionMode: t.connectionMode,
                  onError: E,
                });
                return {
                  zIndex: (0, i.xx)({
                    selected: M.selected,
                    zIndex: M.zIndex,
                    sourceNode: n,
                    targetNode: o,
                    elevateOnSelect: t.elevateEdgesOnSelect,
                  }),
                  ...(r || pt),
                };
              },
              [
                M.source,
                M.target,
                M.sourceHandle,
                M.targetHandle,
                M.selected,
                M.zIndex,
              ],
            ),
            p,
          ),
          F = (0, a.useMemo)(
            () =>
              M.markerStart ? `url('#${(0, i.dW)(M.markerStart, b)}')` : void 0,
            [M.markerStart, b],
          ),
          K = (0, a.useMemo)(
            () =>
              M.markerEnd ? `url('#${(0, i.dW)(M.markerEnd, b)}')` : void 0,
            [M.markerEnd, b],
          );
        if (M.hidden || null === V || null === Z || null === H || null === X)
          return null;
        const q = l
            ? (e) => {
                l(e, { ...M });
              }
            : void 0,
          G = u
            ? (e) => {
                u(e, { ...M });
              }
            : void 0,
          U = d
            ? (e) => {
                d(e, { ...M });
              }
            : void 0,
          Q = f
            ? (e) => {
                f(e, { ...M });
              }
            : void 0,
          J = h
            ? (e) => {
                h(e, { ...M });
              }
            : void 0;
        return (0, o.jsx)('svg', {
          style: { zIndex: B },
          children: (0, o.jsxs)('g', {
            className: r([
              'react-flow__edge',
              `react-flow__edge-${P}`,
              M.className,
              _,
              {
                selected: M.selected,
                animated: M.animated,
                inactive: !A && !c,
                updating: R,
                selectable: A,
              },
            ]),
            onClick: (t) => {
              const {
                addSelectedEdges: n,
                unselectNodesAndEdges: o,
                multiSelectionActive: r,
              } = T.getState();
              A &&
                (T.setState({ nodesSelectionActive: !1 }),
                M.selected && r
                  ? (o({ nodes: [], edges: [M] }), D.current?.blur())
                  : n([e])),
                c && c(t, M);
            },
            onDoubleClick: q,
            onContextMenu: G,
            onMouseEnter: U,
            onMouseMove: Q,
            onMouseLeave: J,
            onKeyDown: O
              ? (t) => {
                  if (!C && i.wQ.includes(t.key) && A) {
                    const { unselectNodesAndEdges: n, addSelectedEdges: o } =
                      T.getState();
                    'Escape' === t.key
                      ? (D.current?.blur(), n({ edges: [M] }))
                      : o([e]);
                  }
                }
              : void 0,
            tabIndex: O ? 0 : void 0,
            role: O ? 'button' : 'img',
            'data-id': e,
            'data-testid': `rf__edge-${e}`,
            'aria-label':
              null === M.ariaLabel
                ? void 0
                : M.ariaLabel || `Edge from ${M.source} to ${M.target}`,
            'aria-describedby': O ? `${k}-${b}` : void 0,
            ref: D,
            children: [
              !$ &&
                (0, o.jsx)(I, {
                  id: e,
                  source: M.source,
                  target: M.target,
                  type: M.type,
                  selected: M.selected,
                  animated: M.animated,
                  selectable: A,
                  deletable: M.deletable ?? !0,
                  label: M.label,
                  labelStyle: M.labelStyle,
                  labelShowBg: M.labelShowBg,
                  labelBgStyle: M.labelBgStyle,
                  labelBgPadding: M.labelBgPadding,
                  labelBgBorderRadius: M.labelBgBorderRadius,
                  sourceX: V,
                  sourceY: Z,
                  targetX: H,
                  targetY: X,
                  sourcePosition: W,
                  targetPosition: Y,
                  data: M.data,
                  style: M.style,
                  sourceHandleId: M.sourceHandle,
                  targetHandleId: M.targetHandle,
                  markerStart: F,
                  markerEnd: K,
                  pathOptions: 'pathOptions' in M ? M.pathOptions : void 0,
                  interactionWidth: M.interactionWidth,
                }),
              z &&
                (0, o.jsx)(wt, {
                  edge: M,
                  isReconnectable: z,
                  reconnectRadius: g,
                  onReconnect: m,
                  onReconnectStart: y,
                  onReconnectEnd: v,
                  sourceX: V,
                  sourceY: Z,
                  targetX: H,
                  targetY: X,
                  sourcePosition: W,
                  targetPosition: Y,
                  setUpdateHover: j,
                  setReconnecting: L,
                }),
            ],
          }),
        });
      }
      const bt = (e) => ({
        edgesFocusable: e.edgesFocusable,
        edgesReconnectable: e.edgesReconnectable,
        elementsSelectable: e.elementsSelectable,
        connectionMode: e.connectionMode,
        onError: e.onError,
      });
      function St({
        defaultMarkerColor: e,
        onlyRenderVisibleElements: t,
        rfId: n,
        edgeTypes: r,
        noPanClassName: s,
        onReconnect: c,
        onEdgeContextMenu: l,
        onEdgeMouseEnter: u,
        onEdgeMouseMove: d,
        onEdgeMouseLeave: f,
        onEdgeClick: h,
        reconnectRadius: g,
        onEdgeDoubleClick: m,
        onReconnectStart: y,
        onReconnectEnd: v,
        disableKeyboardA11y: x,
      }) {
        const {
            edgesFocusable: b,
            edgesReconnectable: S,
            elementsSelectable: _,
            onError: k,
          } = w(bt, p),
          E =
            ((C = t),
            w(
              (0, a.useCallback)(
                (e) => {
                  if (!C) return e.edges.map((e) => e.id);
                  const t = [];
                  if (e.width && e.height)
                    for (const n of e.edges) {
                      const o = e.nodeLookup.get(n.source),
                        r = e.nodeLookup.get(n.target);
                      o &&
                        r &&
                        (0, i.RY)({
                          sourceNode: o,
                          targetNode: r,
                          width: e.width,
                          height: e.height,
                          transform: e.transform,
                        }) &&
                        t.push(n.id);
                    }
                  return t;
                },
                [C],
              ),
              p,
            ));
        var C;
        return (0, o.jsxs)('div', {
          className: 'react-flow__edges',
          children: [
            (0, o.jsx)(Ye, { defaultColor: e, rfId: n }),
            E.map((e) =>
              (0, o.jsx)(
                xt,
                {
                  id: e,
                  edgesFocusable: b,
                  edgesReconnectable: S,
                  elementsSelectable: _,
                  noPanClassName: s,
                  onReconnect: c,
                  onContextMenu: l,
                  onMouseEnter: u,
                  onMouseMove: d,
                  onMouseLeave: f,
                  onClick: h,
                  reconnectRadius: g,
                  onDoubleClick: m,
                  onReconnectStart: y,
                  onReconnectEnd: v,
                  rfId: n,
                  onError: k,
                  edgeTypes: r,
                  disableKeyboardA11y: x,
                },
                e,
              ),
            ),
          ],
        });
      }
      St.displayName = 'EdgeRenderer';
      const _t = (0, a.memo)(St),
        kt = (e) =>
          `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
      function Et({ children: e }) {
        const t = w(kt);
        return (0, o.jsx)('div', {
          className:
            'react-flow__viewport xyflow__viewport react-flow__container',
          style: { transform: t },
          children: e,
        });
      }
      const Ct = (e) => e.panZoom?.syncViewport;
      function Mt(e) {
        return e.connection.inProgress
          ? { ...e.connection, to: (0, i.m)(e.connection.to, e.transform) }
          : { ...e.connection };
      }
      function Nt(e) {
        const t = (function (e) {
          if (e)
            return (t) => {
              const n = Mt(t);
              return e(n);
            };
          return Mt;
        })(e);
        return w(t, p);
      }
      const Pt = (e) => ({
        nodesConnectable: e.nodesConnectable,
        isValid: e.connection.isValid,
        inProgress: e.connection.inProgress,
        width: e.width,
        height: e.height,
      });
      function It({ containerStyle: e, style: t, type: n, component: a }) {
        const {
          nodesConnectable: s,
          width: c,
          height: l,
          isValid: u,
          inProgress: d,
        } = w(Pt, p);
        return !!(c && s && d)
          ? (0, o.jsx)('svg', {
              style: e,
              width: c,
              height: l,
              className: 'react-flow__connectionline react-flow__container',
              children: (0, o.jsx)('g', {
                className: r(['react-flow__connection', (0, i.Zp)(u)]),
                children: (0, o.jsx)(Ot, {
                  style: t,
                  type: n,
                  CustomComponent: a,
                  isValid: u,
                }),
              }),
            })
          : null;
      }
      const Ot = ({
        style: e,
        type: t = i.t8.Bezier,
        CustomComponent: n,
        isValid: r,
      }) => {
        const {
          inProgress: a,
          from: s,
          fromNode: c,
          fromHandle: l,
          fromPosition: u,
          to: d,
          toNode: f,
          toHandle: h,
          toPosition: p,
        } = Nt();
        if (!a) return;
        if (n)
          return (0, o.jsx)(n, {
            connectionLineType: t,
            connectionLineStyle: e,
            fromNode: c,
            fromHandle: l,
            fromX: s.x,
            fromY: s.y,
            toX: d.x,
            toY: d.y,
            fromPosition: u,
            toPosition: p,
            connectionStatus: (0, i.Zp)(r),
            toNode: f,
            toHandle: h,
          });
        let g = '';
        const m = {
          sourceX: s.x,
          sourceY: s.y,
          sourcePosition: u,
          targetX: d.x,
          targetY: d.y,
          targetPosition: p,
        };
        switch (t) {
          case i.t8.Bezier:
            [g] = (0, i.OQ)(m);
            break;
          case i.t8.SimpleBezier:
            [g] = Ue(m);
            break;
          case i.t8.Step:
            [g] = (0, i.OW)({ ...m, borderRadius: 0 });
            break;
          case i.t8.SmoothStep:
            [g] = (0, i.OW)(m);
            break;
          default:
            [g] = (0, i.Hm)(m);
        }
        return (0, o.jsx)('path', {
          d: g,
          fill: 'none',
          className: 'react-flow__connection-path',
          style: e,
        });
      };
      Ot.displayName = 'ConnectionLine';
      const zt = {};
      function At(e = zt) {
        (0, a.useRef)(e), x();
        (0, a.useEffect)(() => {
          0;
        }, [e]);
      }
      function Dt({
        nodeTypes: e,
        edgeTypes: t,
        onInit: n,
        onNodeClick: r,
        onEdgeClick: i,
        onNodeDoubleClick: s,
        onEdgeDoubleClick: c,
        onNodeMouseEnter: l,
        onNodeMouseMove: u,
        onNodeMouseLeave: d,
        onNodeContextMenu: f,
        onSelectionContextMenu: h,
        onSelectionStart: p,
        onSelectionEnd: g,
        connectionLineType: m,
        connectionLineStyle: y,
        connectionLineComponent: v,
        connectionLineContainerStyle: b,
        selectionKeyCode: S,
        selectionOnDrag: _,
        selectionMode: k,
        multiSelectionKeyCode: E,
        panActivationKeyCode: C,
        zoomActivationKeyCode: M,
        deleteKeyCode: N,
        onlyRenderVisibleElements: P,
        elementsSelectable: I,
        defaultViewport: O,
        translateExtent: z,
        minZoom: A,
        maxZoom: D,
        preventScrolling: R,
        defaultMarkerColor: j,
        zoomOnScroll: $,
        zoomOnPinch: L,
        panOnScroll: T,
        panOnScrollSpeed: B,
        panOnScrollMode: V,
        zoomOnDoubleClick: Z,
        panOnDrag: H,
        onPaneClick: X,
        onPaneMouseEnter: W,
        onPaneMouseMove: Y,
        onPaneMouseLeave: F,
        onPaneScroll: K,
        onPaneContextMenu: q,
        paneClickDistance: G,
        nodeClickDistance: U,
        onEdgeContextMenu: Q,
        onEdgeMouseEnter: J,
        onEdgeMouseMove: ee,
        onEdgeMouseLeave: te,
        reconnectRadius: ne,
        onReconnect: oe,
        onReconnectStart: re,
        onReconnectEnd: ie,
        noDragClassName: ae,
        noWheelClassName: se,
        noPanClassName: ce,
        disableKeyboardA11y: ue,
        nodeExtent: de,
        rfId: fe,
        viewport: he,
        onViewportChange: pe,
      }) {
        return (
          At(e),
          At(t),
          x(),
          (0, a.useRef)(!1),
          (0, a.useEffect)(() => {}, []),
          (function (e) {
            const t = le(),
              n = (0, a.useRef)(!1);
            (0, a.useEffect)(() => {
              !n.current &&
                t.viewportInitialized &&
                e &&
                (setTimeout(() => e(t), 1), (n.current = !0));
            }, [e, t.viewportInitialized]);
          })(n),
          (function (e) {
            const t = w(Ct),
              n = x();
            (0, a.useEffect)(() => {
              e && (t?.(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
            }, [e, t]);
          })(he),
          (0, o.jsx)(je, {
            onPaneClick: X,
            onPaneMouseEnter: W,
            onPaneMouseMove: Y,
            onPaneMouseLeave: F,
            onPaneContextMenu: q,
            onPaneScroll: K,
            paneClickDistance: G,
            deleteKeyCode: N,
            selectionKeyCode: S,
            selectionOnDrag: _,
            selectionMode: k,
            onSelectionStart: p,
            onSelectionEnd: g,
            multiSelectionKeyCode: E,
            panActivationKeyCode: C,
            zoomActivationKeyCode: M,
            elementsSelectable: I,
            zoomOnScroll: $,
            zoomOnPinch: L,
            zoomOnDoubleClick: Z,
            panOnScroll: T,
            panOnScrollSpeed: B,
            panOnScrollMode: V,
            panOnDrag: H,
            defaultViewport: O,
            translateExtent: z,
            minZoom: A,
            maxZoom: D,
            onSelectionContextMenu: h,
            preventScrolling: R,
            noDragClassName: ae,
            noWheelClassName: se,
            noPanClassName: ce,
            disableKeyboardA11y: ue,
            onViewportChange: pe,
            isControlledViewport: !!he,
            children: (0, o.jsxs)(Et, {
              children: [
                (0, o.jsx)(_t, {
                  edgeTypes: t,
                  onEdgeClick: i,
                  onEdgeDoubleClick: c,
                  onReconnect: oe,
                  onReconnectStart: re,
                  onReconnectEnd: ie,
                  onlyRenderVisibleElements: P,
                  onEdgeContextMenu: Q,
                  onEdgeMouseEnter: J,
                  onEdgeMouseMove: ee,
                  onEdgeMouseLeave: te,
                  reconnectRadius: ne,
                  defaultMarkerColor: j,
                  noPanClassName: ce,
                  disableKeyboardA11y: ue,
                  rfId: fe,
                }),
                (0, o.jsx)(It, {
                  style: y,
                  type: m,
                  component: v,
                  containerStyle: b,
                }),
                (0, o.jsx)('div', {
                  className: 'react-flow__edgelabel-renderer',
                }),
                (0, o.jsx)(Ze, {
                  nodeTypes: e,
                  onNodeClick: r,
                  onNodeDoubleClick: s,
                  onNodeMouseEnter: l,
                  onNodeMouseMove: u,
                  onNodeMouseLeave: d,
                  onNodeContextMenu: f,
                  nodeClickDistance: U,
                  onlyRenderVisibleElements: P,
                  noPanClassName: ce,
                  noDragClassName: ae,
                  disableKeyboardA11y: ue,
                  nodeExtent: de,
                  rfId: fe,
                }),
                (0, o.jsx)('div', { className: 'react-flow__viewport-portal' }),
              ],
            }),
          })
        );
      }
      Dt.displayName = 'GraphView';
      const Rt = (0, a.memo)(Dt),
        jt = ({
          nodes: e,
          edges: t,
          defaultNodes: n,
          defaultEdges: o,
          width: r,
          height: a,
          fitView: s,
          nodeOrigin: c,
          nodeExtent: l,
        } = {}) => {
          const u = new Map(),
            d = new Map(),
            f = new Map(),
            h = new Map(),
            p = o ?? t ?? [],
            g = n ?? e ?? [],
            m = c ?? [0, 0],
            y = l ?? i.k5;
          (0, i.be)(f, h, p),
            (0, i.yF)(g, u, d, {
              nodeOrigin: m,
              nodeExtent: y,
              elevateNodesOnSelect: !1,
            });
          let v = [0, 0, 1];
          if (s && r && a) {
            const e = (0, i.W0)(u, {
                filter: (e) =>
                  !(
                    (!e.width && !e.initialWidth) ||
                    (!e.height && !e.initialHeight)
                  ),
              }),
              { x: t, y: n, zoom: o } = (0, i.$i)(e, r, a, 0.5, 2, 0.1);
            v = [t, n, o];
          }
          return {
            rfId: '1',
            width: 0,
            height: 0,
            transform: v,
            nodes: g,
            nodeLookup: u,
            parentLookup: d,
            edges: p,
            edgeLookup: h,
            connectionLookup: f,
            onNodesChange: null,
            onEdgesChange: null,
            hasDefaultNodes: void 0 !== n,
            hasDefaultEdges: void 0 !== o,
            panZoom: null,
            minZoom: 0.5,
            maxZoom: 2,
            translateExtent: i.k5,
            nodeExtent: y,
            nodesSelectionActive: !1,
            userSelectionActive: !1,
            userSelectionRect: null,
            connectionMode: i.jD.Strict,
            domNode: null,
            paneDragging: !1,
            noPanClassName: 'nopan',
            nodeOrigin: m,
            nodeDragThreshold: 1,
            snapGrid: [15, 15],
            snapToGrid: !1,
            nodesDraggable: !0,
            nodesConnectable: !0,
            nodesFocusable: !0,
            edgesFocusable: !0,
            edgesReconnectable: !0,
            elementsSelectable: !0,
            elevateNodesOnSelect: !0,
            elevateEdgesOnSelect: !1,
            fitViewOnInit: !1,
            fitViewDone: !1,
            fitViewOnInitOptions: void 0,
            selectNodesOnDrag: !0,
            multiSelectionActive: !1,
            connection: { ...i.Ky },
            connectionClickStartHandle: null,
            connectOnClick: !0,
            ariaLiveMessage: '',
            autoPanOnConnect: !0,
            autoPanOnNodeDrag: !0,
            autoPanSpeed: 15,
            connectionRadius: 20,
            onError: i.Ki,
            isValidConnection: void 0,
            onSelectionChangeHandlers: [],
            lib: 'react',
            debug: !1,
          };
        },
        $t = ({
          nodes: e,
          edges: t,
          defaultNodes: n,
          defaultEdges: o,
          width: r,
          height: a,
          fitView: s,
          nodeOrigin: c,
          nodeExtent: l,
        }) => {
          return (
            (u = (u, d) => ({
              ...jt({
                nodes: e,
                edges: t,
                width: r,
                height: a,
                fitView: s,
                nodeOrigin: c,
                nodeExtent: l,
                defaultNodes: n,
                defaultEdges: o,
              }),
              setNodes: (e) => {
                const {
                  nodeLookup: t,
                  parentLookup: n,
                  nodeOrigin: o,
                  elevateNodesOnSelect: r,
                } = d();
                (0, i.yF)(e, t, n, {
                  nodeOrigin: o,
                  nodeExtent: l,
                  elevateNodesOnSelect: r,
                  checkEquality: !0,
                }),
                  u({ nodes: e });
              },
              setEdges: (e) => {
                const { connectionLookup: t, edgeLookup: n } = d();
                (0, i.be)(t, n, e), u({ edges: e });
              },
              setDefaultNodesAndEdges: (e, t) => {
                if (e) {
                  const { setNodes: t } = d();
                  t(e), u({ hasDefaultNodes: !0 });
                }
                if (t) {
                  const { setEdges: e } = d();
                  e(t), u({ hasDefaultEdges: !0 });
                }
              },
              updateNodeInternals: (e, t = { triggerFitView: !0 }) => {
                const {
                    triggerNodeChanges: n,
                    nodeLookup: o,
                    parentLookup: r,
                    fitViewOnInit: a,
                    fitViewDone: s,
                    fitViewOnInitOptions: c,
                    domNode: l,
                    nodeOrigin: f,
                    nodeExtent: h,
                    debug: p,
                    fitViewSync: g,
                  } = d(),
                  { changes: m, updatedInternals: y } = (0, i.B1)(
                    e,
                    o,
                    r,
                    l,
                    f,
                    h,
                  );
                if (y) {
                  if (
                    ((0, i.VV)(o, r, { nodeOrigin: f, nodeExtent: h }),
                    t.triggerFitView)
                  ) {
                    let e = s;
                    !s && a && (e = g({ ...c, nodes: c?.nodes })),
                      u({ fitViewDone: e });
                  } else u({});
                  m?.length > 0 &&
                    (p && console.log('React Flow: trigger node changes', m),
                    n?.(m));
                }
              },
              updateNodePositions: (e, t = !1) => {
                const n = [],
                  o = [];
                for (const [r, i] of e) {
                  const e = !!(i?.expandParent && i?.parentId && i?.position),
                    a = {
                      id: r,
                      type: 'position',
                      position: e
                        ? {
                            x: Math.max(0, i.position.x),
                            y: Math.max(0, i.position.y),
                          }
                        : i.position,
                      dragging: t,
                    };
                  e &&
                    n.push({
                      id: r,
                      parentId: i.parentId,
                      rect: {
                        ...i.internals.positionAbsolute,
                        width: i.measured.width,
                        height: i.measured.height,
                      },
                    }),
                    o.push(a);
                }
                if (n.length > 0) {
                  const { nodeLookup: e, parentLookup: t, nodeOrigin: r } = d(),
                    a = (0, i.so)(n, e, t, r);
                  o.push(...a);
                }
                d().triggerNodeChanges(o);
              },
              triggerNodeChanges: (e) => {
                const {
                  onNodesChange: t,
                  setNodes: n,
                  nodes: o,
                  hasDefaultNodes: r,
                  debug: i,
                } = d();
                e?.length &&
                  (r && n(G(e, o)),
                  i && console.log('React Flow: trigger node changes', e),
                  t?.(e));
              },
              triggerEdgeChanges: (e) => {
                const {
                  onEdgesChange: t,
                  setEdges: n,
                  edges: o,
                  hasDefaultEdges: r,
                  debug: i,
                } = d();
                e?.length &&
                  (r && n(U(e, o)),
                  i && console.log('React Flow: trigger edge changes', e),
                  t?.(e));
              },
              addSelectedNodes: (e) => {
                const {
                  multiSelectionActive: t,
                  edgeLookup: n,
                  nodeLookup: o,
                  triggerNodeChanges: r,
                  triggerEdgeChanges: i,
                } = d();
                t
                  ? r(e.map((e) => Q(e, !0)))
                  : (r(J(o, new Set([...e]), !0)), i(J(n)));
              },
              addSelectedEdges: (e) => {
                const {
                  multiSelectionActive: t,
                  edgeLookup: n,
                  nodeLookup: o,
                  triggerNodeChanges: r,
                  triggerEdgeChanges: i,
                } = d();
                t
                  ? i(e.map((e) => Q(e, !0)))
                  : (i(J(n, new Set([...e]))), r(J(o, new Set(), !0)));
              },
              unselectNodesAndEdges: ({ nodes: e, edges: t } = {}) => {
                const {
                    edges: n,
                    nodes: o,
                    nodeLookup: r,
                    triggerNodeChanges: i,
                    triggerEdgeChanges: a,
                  } = d(),
                  s = t || n,
                  c = (e || o).map((e) => {
                    const t = r.get(e.id);
                    return t && (t.selected = !1), Q(e.id, !1);
                  }),
                  l = s.map((e) => Q(e.id, !1));
                i(c), a(l);
              },
              setMinZoom: (e) => {
                const { panZoom: t, maxZoom: n } = d();
                t?.setScaleExtent([e, n]), u({ minZoom: e });
              },
              setMaxZoom: (e) => {
                const { panZoom: t, minZoom: n } = d();
                t?.setScaleExtent([n, e]), u({ maxZoom: e });
              },
              setTranslateExtent: (e) => {
                d().panZoom?.setTranslateExtent(e), u({ translateExtent: e });
              },
              setPaneClickDistance: (e) => {
                d().panZoom?.setClickDistance(e);
              },
              resetSelectedElements: () => {
                const {
                    edges: e,
                    nodes: t,
                    triggerNodeChanges: n,
                    triggerEdgeChanges: o,
                  } = d(),
                  r = t.reduce(
                    (e, t) => (t.selected ? [...e, Q(t.id, !1)] : e),
                    [],
                  ),
                  i = e.reduce(
                    (e, t) => (t.selected ? [...e, Q(t.id, !1)] : e),
                    [],
                  );
                n(r), o(i);
              },
              setNodeExtent: (e) => {
                const {
                  nodes: t,
                  nodeLookup: n,
                  parentLookup: o,
                  nodeOrigin: r,
                  elevateNodesOnSelect: a,
                  nodeExtent: s,
                } = d();
                (e[0][0] === s[0][0] &&
                  e[0][1] === s[0][1] &&
                  e[1][0] === s[1][0] &&
                  e[1][1] === s[1][1]) ||
                  ((0, i.yF)(t, n, o, {
                    nodeOrigin: r,
                    nodeExtent: e,
                    elevateNodesOnSelect: a,
                    checkEquality: !1,
                  }),
                  u({ nodeExtent: e }));
              },
              panBy: (e) => {
                const {
                  transform: t,
                  width: n,
                  height: o,
                  panZoom: r,
                  translateExtent: a,
                } = d();
                return (0, i.hO)({
                  delta: e,
                  panZoom: r,
                  transform: t,
                  translateExtent: a,
                  width: n,
                  height: o,
                });
              },
              fitView: (e) => {
                const {
                  panZoom: t,
                  width: n,
                  height: o,
                  minZoom: r,
                  maxZoom: a,
                  nodeLookup: s,
                } = d();
                if (!t) return Promise.resolve(!1);
                const c = (0, i.J6)(s, e);
                return (0, i.Qu)(
                  {
                    nodes: c,
                    width: n,
                    height: o,
                    panZoom: t,
                    minZoom: r,
                    maxZoom: a,
                  },
                  e,
                );
              },
              fitViewSync: (e) => {
                const {
                  panZoom: t,
                  width: n,
                  height: o,
                  minZoom: r,
                  maxZoom: a,
                  nodeLookup: s,
                } = d();
                if (!t) return !1;
                const c = (0, i.J6)(s, e);
                return (
                  (0, i.Qu)(
                    {
                      nodes: c,
                      width: n,
                      height: o,
                      panZoom: t,
                      minZoom: r,
                      maxZoom: a,
                    },
                    e,
                  ),
                  c.size > 0
                );
              },
              cancelConnection: () => {
                u({ connection: { ...i.Ky } });
              },
              updateConnection: (e) => {
                u({ connection: e });
              },
              reset: () => u({ ...jt() }),
            })),
            (d = Object.is),
            u ? h(u, d) : h
          );
          var u, d;
        };
      function Lt({
        initialNodes: e,
        initialEdges: t,
        defaultNodes: n,
        defaultEdges: r,
        initialWidth: i,
        initialHeight: s,
        fitView: c,
        nodeOrigin: l,
        nodeExtent: u,
        children: d,
      }) {
        const [f] = (0, a.useState)(() =>
          $t({
            nodes: e,
            edges: t,
            defaultNodes: n,
            defaultEdges: r,
            width: i,
            height: s,
            fitView: c,
            nodeOrigin: l,
            nodeExtent: u,
          }),
        );
        return (0, o.jsx)(y, {
          value: f,
          children: (0, o.jsx)(se, { children: d }),
        });
      }
      function Tt({
        children: e,
        nodes: t,
        edges: n,
        defaultNodes: r,
        defaultEdges: i,
        width: s,
        height: c,
        fitView: l,
        nodeOrigin: u,
        nodeExtent: d,
      }) {
        return (0, a.useContext)(m)
          ? (0, o.jsx)(o.Fragment, { children: e })
          : (0, o.jsx)(Lt, {
              initialNodes: t,
              initialEdges: n,
              defaultNodes: r,
              defaultEdges: i,
              initialWidth: s,
              initialHeight: c,
              fitView: l,
              nodeOrigin: u,
              nodeExtent: d,
              children: e,
            });
      }
      const Bt = {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 0,
      };
      var Vt = oe(function (
        {
          nodes: e,
          edges: t,
          defaultNodes: n,
          defaultEdges: s,
          className: c,
          nodeTypes: l,
          edgeTypes: u,
          onNodeClick: d,
          onEdgeClick: f,
          onInit: h,
          onMove: p,
          onMoveStart: g,
          onMoveEnd: m,
          onConnect: y,
          onConnectStart: v,
          onConnectEnd: w,
          onClickConnectStart: x,
          onClickConnectEnd: b,
          onNodeMouseEnter: S,
          onNodeMouseMove: _,
          onNodeMouseLeave: k,
          onNodeContextMenu: E,
          onNodeDoubleClick: C,
          onNodeDragStart: N,
          onNodeDrag: P,
          onNodeDragStop: O,
          onNodesDelete: z,
          onEdgesDelete: A,
          onDelete: D,
          onSelectionChange: R,
          onSelectionDragStart: T,
          onSelectionDrag: B,
          onSelectionDragStop: V,
          onSelectionContextMenu: X,
          onSelectionStart: W,
          onSelectionEnd: Y,
          onBeforeDelete: F,
          connectionMode: K,
          connectionLineType: q = i.t8.Bezier,
          connectionLineStyle: G,
          connectionLineComponent: U,
          connectionLineContainerStyle: Q,
          deleteKeyCode: J = 'Backspace',
          selectionKeyCode: ee = 'Shift',
          selectionOnDrag: te = !1,
          selectionMode: ne = i.oW.Full,
          panActivationKeyCode: oe = 'Space',
          multiSelectionKeyCode: re = (0, i.Q5)() ? 'Meta' : 'Control',
          zoomActivationKeyCode: ie = (0, i.Q5)() ? 'Meta' : 'Control',
          snapToGrid: ae,
          snapGrid: se,
          onlyRenderVisibleElements: ce = !1,
          selectNodesOnDrag: le,
          nodesDraggable: ue,
          nodesConnectable: de,
          nodesFocusable: fe,
          nodeOrigin: he = $,
          edgesFocusable: pe,
          edgesReconnectable: ge,
          elementsSelectable: me = !0,
          defaultViewport: ye = L,
          minZoom: ve = 0.5,
          maxZoom: we = 2,
          translateExtent: xe = i.k5,
          preventScrolling: be = !0,
          nodeExtent: Se,
          defaultMarkerColor: _e = '#b1b1b7',
          zoomOnScroll: ke = !0,
          zoomOnPinch: Ee = !0,
          panOnScroll: Ce = !1,
          panOnScrollSpeed: Me = 0.5,
          panOnScrollMode: Ne = i.IY.Free,
          zoomOnDoubleClick: Pe = !0,
          panOnDrag: Ie = !0,
          onPaneClick: Oe,
          onPaneMouseEnter: ze,
          onPaneMouseMove: Ae,
          onPaneMouseLeave: De,
          onPaneScroll: Re,
          onPaneContextMenu: je,
          paneClickDistance: $e = 0,
          nodeClickDistance: Le = 0,
          children: Te,
          onReconnect: Be,
          onReconnectStart: Ve,
          onReconnectEnd: Ze,
          onEdgeContextMenu: He,
          onEdgeDoubleClick: Xe,
          onEdgeMouseEnter: We,
          onEdgeMouseMove: Ye,
          onEdgeMouseLeave: Fe,
          reconnectRadius: Ke = 10,
          onNodesChange: qe,
          onEdgesChange: Ge,
          noDragClassName: Ue = 'nodrag',
          noWheelClassName: Qe = 'nowheel',
          noPanClassName: Je = 'nopan',
          fitView: et,
          fitViewOptions: tt,
          connectOnClick: nt,
          attributionPosition: ot,
          proOptions: rt,
          defaultEdgeOptions: it,
          elevateNodesOnSelect: at,
          elevateEdgesOnSelect: st,
          disableKeyboardA11y: ct = !1,
          autoPanOnConnect: lt,
          autoPanOnNodeDrag: ut,
          autoPanSpeed: dt,
          connectionRadius: ft,
          isValidConnection: ht,
          onError: pt,
          style: gt,
          id: mt,
          nodeDragThreshold: yt,
          viewport: vt,
          onViewportChange: wt,
          width: xt,
          height: bt,
          colorMode: St = 'light',
          debug: _t,
          ...kt
        },
        Et,
      ) {
        const Ct = mt || '1',
          Mt = (function (e) {
            const [t, n] = (0, a.useState)('system' === e ? null : e);
            return (
              (0, a.useEffect)(() => {
                if ('system' !== e) return void n(e);
                const t = H(),
                  o = () => n(t?.matches ? 'dark' : 'light');
                return (
                  o(),
                  t?.addEventListener('change', o),
                  () => {
                    t?.removeEventListener('change', o);
                  }
                );
              }, [e]),
              null !== t ? t : H()?.matches ? 'dark' : 'light'
            );
          })(St);
        return (0, o.jsx)('div', {
          'data-testid': 'rf__wrapper',
          ...kt,
          style: { ...gt, ...Bt },
          ref: Et,
          className: r(['react-flow', c, Mt]),
          id: mt,
          children: (0, o.jsxs)(Tt, {
            nodes: e,
            edges: t,
            width: xt,
            height: bt,
            fitView: et,
            nodeOrigin: he,
            nodeExtent: Se,
            children: [
              (0, o.jsx)(Rt, {
                onInit: h,
                onNodeClick: d,
                onEdgeClick: f,
                onNodeMouseEnter: S,
                onNodeMouseMove: _,
                onNodeMouseLeave: k,
                onNodeContextMenu: E,
                onNodeDoubleClick: C,
                nodeTypes: l,
                edgeTypes: u,
                connectionLineType: q,
                connectionLineStyle: G,
                connectionLineComponent: U,
                connectionLineContainerStyle: Q,
                selectionKeyCode: ee,
                selectionOnDrag: te,
                selectionMode: ne,
                deleteKeyCode: J,
                multiSelectionKeyCode: re,
                panActivationKeyCode: oe,
                zoomActivationKeyCode: ie,
                onlyRenderVisibleElements: ce,
                defaultViewport: ye,
                translateExtent: xe,
                minZoom: ve,
                maxZoom: we,
                preventScrolling: be,
                zoomOnScroll: ke,
                zoomOnPinch: Ee,
                zoomOnDoubleClick: Pe,
                panOnScroll: Ce,
                panOnScrollSpeed: Me,
                panOnScrollMode: Ne,
                panOnDrag: Ie,
                onPaneClick: Oe,
                onPaneMouseEnter: ze,
                onPaneMouseMove: Ae,
                onPaneMouseLeave: De,
                onPaneScroll: Re,
                onPaneContextMenu: je,
                paneClickDistance: $e,
                nodeClickDistance: Le,
                onSelectionContextMenu: X,
                onSelectionStart: W,
                onSelectionEnd: Y,
                onReconnect: Be,
                onReconnectStart: Ve,
                onReconnectEnd: Ze,
                onEdgeContextMenu: He,
                onEdgeDoubleClick: Xe,
                onEdgeMouseEnter: We,
                onEdgeMouseMove: Ye,
                onEdgeMouseLeave: Fe,
                reconnectRadius: Ke,
                defaultMarkerColor: _e,
                noDragClassName: Ue,
                noWheelClassName: Qe,
                noPanClassName: Je,
                rfId: Ct,
                disableKeyboardA11y: ct,
                nodeExtent: Se,
                viewport: vt,
                onViewportChange: wt,
              }),
              (0, o.jsx)(Z, {
                nodes: e,
                edges: t,
                defaultNodes: n,
                defaultEdges: s,
                onConnect: y,
                onConnectStart: v,
                onConnectEnd: w,
                onClickConnectStart: x,
                onClickConnectEnd: b,
                nodesDraggable: ue,
                nodesConnectable: de,
                nodesFocusable: fe,
                edgesFocusable: pe,
                edgesReconnectable: ge,
                elementsSelectable: me,
                elevateNodesOnSelect: at,
                elevateEdgesOnSelect: st,
                minZoom: ve,
                maxZoom: we,
                nodeExtent: Se,
                onNodesChange: qe,
                onEdgesChange: Ge,
                snapToGrid: ae,
                snapGrid: se,
                connectionMode: K,
                translateExtent: xe,
                connectOnClick: nt,
                defaultEdgeOptions: it,
                fitView: et,
                fitViewOptions: tt,
                onNodesDelete: z,
                onEdgesDelete: A,
                onDelete: D,
                onNodeDragStart: N,
                onNodeDrag: P,
                onNodeDragStop: O,
                onSelectionDrag: B,
                onSelectionDragStart: T,
                onSelectionDragStop: V,
                onMove: p,
                onMoveStart: g,
                onMoveEnd: m,
                noPanClassName: Je,
                nodeOrigin: he,
                rfId: Ct,
                autoPanOnConnect: lt,
                autoPanOnNodeDrag: ut,
                autoPanSpeed: dt,
                onError: pt,
                connectionRadius: ft,
                isValidConnection: ht,
                selectNodesOnDrag: le,
                nodeDragThreshold: yt,
                onBeforeDelete: F,
                paneClickDistance: $e,
                debug: _t,
              }),
              (0, o.jsx)(j, { onSelectionChange: R }),
              Te,
              (0, o.jsx)(I, { proOptions: rt, position: ot }),
              (0, o.jsx)(M, { rfId: Ct, disableKeyboardA11y: ct }),
            ],
          }),
        });
      });
      const Zt = (e) =>
        e.domNode?.querySelector('.react-flow__edgelabel-renderer');
      function Ht({ children: e }) {
        const t = w(Zt);
        return t ? (0, g.createPortal)(e, t) : null;
      }
      function Xt() {
        const e = x();
        return (0, a.useCallback)((t) => {
          const { domNode: n, updateNodeInternals: o } = e.getState(),
            r = Array.isArray(t) ? t : [t],
            i = new Map();
          r.forEach((e) => {
            const t = n?.querySelector(`.react-flow__node[data-id="${e}"]`);
            t && i.set(e, { id: e, nodeElement: t, force: !0 });
          }),
            requestAnimationFrame(() => o(i, { triggerFitView: !1 }));
        }, []);
      }
      function Wt({ dimensions: e, lineWidth: t, variant: n, className: i }) {
        return (0, o.jsx)('path', {
          strokeWidth: t,
          d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`,
          className: r(['react-flow__background-pattern', n, i]),
        });
      }
      function Yt({ radius: e, className: t }) {
        return (0, o.jsx)('circle', {
          cx: e,
          cy: e,
          r: e,
          className: r(['react-flow__background-pattern', 'dots', t]),
        });
      }
      var Ft;
      !(function (e) {
        (e.Lines = 'lines'), (e.Dots = 'dots'), (e.Cross = 'cross');
      })(Ft || (Ft = {}));
      const Kt = { [Ft.Dots]: 1, [Ft.Lines]: 1, [Ft.Cross]: 6 },
        qt = (e) => ({
          transform: e.transform,
          patternId: `pattern-${e.rfId}`,
        });
      function Gt({
        id: e,
        variant: t = Ft.Dots,
        gap: n = 20,
        size: i,
        lineWidth: s = 1,
        offset: c = 0,
        color: l,
        bgColor: u,
        style: d,
        className: f,
        patternClassName: h,
      }) {
        const g = (0, a.useRef)(null),
          { transform: m, patternId: y } = w(qt, p),
          v = i || Kt[t],
          x = t === Ft.Dots,
          b = t === Ft.Cross,
          S = Array.isArray(n) ? n : [n, n],
          _ = [S[0] * m[2] || 1, S[1] * m[2] || 1],
          k = v * m[2],
          E = Array.isArray(c) ? c : [c, c],
          C = b ? [k, k] : _,
          M = [E[0] * m[2] || 1 + C[0] / 2, E[1] * m[2] || 1 + C[1] / 2],
          N = `${y}${e || ''}`;
        return (0, o.jsxs)('svg', {
          className: r(['react-flow__background', f]),
          style: {
            ...d,
            ...he,
            '--xy-background-color-props': u,
            '--xy-background-pattern-color-props': l,
          },
          ref: g,
          'data-testid': 'rf__background',
          children: [
            (0, o.jsx)('pattern', {
              id: N,
              x: m[0] % _[0],
              y: m[1] % _[1],
              width: _[0],
              height: _[1],
              patternUnits: 'userSpaceOnUse',
              patternTransform: `translate(-${M[0]},-${M[1]})`,
              children: x
                ? (0, o.jsx)(Yt, { radius: k / 2, className: h })
                : (0, o.jsx)(Wt, {
                    dimensions: C,
                    lineWidth: s,
                    variant: t,
                    className: h,
                  }),
            }),
            (0, o.jsx)('rect', {
              x: '0',
              y: '0',
              width: '100%',
              height: '100%',
              fill: `url(#${N})`,
            }),
          ],
        });
      }
      Gt.displayName = 'Background';
      const Ut = (0, a.memo)(Gt);
      function Qt() {
        return (0, o.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 32 32',
          children: (0, o.jsx)('path', {
            d: 'M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z',
          }),
        });
      }
      function Jt() {
        return (0, o.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 32 5',
          children: (0, o.jsx)('path', { d: 'M0 0h32v4.2H0z' }),
        });
      }
      function en() {
        return (0, o.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 32 30',
          children: (0, o.jsx)('path', {
            d: 'M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z',
          }),
        });
      }
      function tn() {
        return (0, o.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 25 32',
          children: (0, o.jsx)('path', {
            d: 'M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z',
          }),
        });
      }
      function nn() {
        return (0, o.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 25 32',
          children: (0, o.jsx)('path', {
            d: 'M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z',
          }),
        });
      }
      function on({ children: e, className: t, ...n }) {
        return (0, o.jsx)('button', {
          type: 'button',
          className: r(['react-flow__controls-button', t]),
          ...n,
          children: e,
        });
      }
      const rn = (e) => ({
        isInteractive:
          e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
        minZoomReached: e.transform[2] <= e.minZoom,
        maxZoomReached: e.transform[2] >= e.maxZoom,
      });
      function an({
        style: e,
        showZoom: t = !0,
        showFitView: n = !0,
        showInteractive: i = !0,
        fitViewOptions: a,
        onZoomIn: s,
        onZoomOut: c,
        onFitView: l,
        onInteractiveChange: u,
        className: d,
        children: f,
        position: h = 'bottom-left',
        orientation: g = 'vertical',
        'aria-label': m = 'React Flow controls',
      }) {
        const y = x(),
          { isInteractive: v, minZoomReached: b, maxZoomReached: S } = w(rn, p),
          { zoomIn: _, zoomOut: k, fitView: E } = le(),
          C = 'horizontal' === g ? 'horizontal' : 'vertical';
        return (0, o.jsxs)(P, {
          className: r(['react-flow__controls', C, d]),
          position: h,
          style: e,
          'data-testid': 'rf__controls',
          'aria-label': m,
          children: [
            t &&
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(on, {
                    onClick: () => {
                      _(), s?.();
                    },
                    className: 'react-flow__controls-zoomin',
                    title: 'zoom in',
                    'aria-label': 'zoom in',
                    disabled: S,
                    children: (0, o.jsx)(Qt, {}),
                  }),
                  (0, o.jsx)(on, {
                    onClick: () => {
                      k(), c?.();
                    },
                    className: 'react-flow__controls-zoomout',
                    title: 'zoom out',
                    'aria-label': 'zoom out',
                    disabled: b,
                    children: (0, o.jsx)(Jt, {}),
                  }),
                ],
              }),
            n &&
              (0, o.jsx)(on, {
                className: 'react-flow__controls-fitview',
                onClick: () => {
                  E(a), l?.();
                },
                title: 'fit view',
                'aria-label': 'fit view',
                children: (0, o.jsx)(en, {}),
              }),
            i &&
              (0, o.jsx)(on, {
                className: 'react-flow__controls-interactive',
                onClick: () => {
                  y.setState({
                    nodesDraggable: !v,
                    nodesConnectable: !v,
                    elementsSelectable: !v,
                  }),
                    u?.(!v);
                },
                title: 'toggle interactivity',
                'aria-label': 'toggle interactivity',
                children: v ? (0, o.jsx)(nn, {}) : (0, o.jsx)(tn, {}),
              }),
            f,
          ],
        });
      }
      an.displayName = 'Controls';
      const sn = (0, a.memo)(an);
      const cn = (0, a.memo)(function ({
          id: e,
          x: t,
          y: n,
          width: i,
          height: a,
          style: s,
          color: c,
          strokeColor: l,
          strokeWidth: u,
          className: d,
          borderRadius: f,
          shapeRendering: h,
          selected: p,
          onClick: g,
        }) {
          const { background: m, backgroundColor: y } = s || {},
            v = c || m || y;
          return (0, o.jsx)('rect', {
            className: r(['react-flow__minimap-node', { selected: p }, d]),
            x: t,
            y: n,
            rx: f,
            ry: f,
            width: i,
            height: a,
            style: { fill: v, stroke: l, strokeWidth: u },
            shapeRendering: h,
            onClick: g ? (t) => g(t, e) : void 0,
          });
        }),
        ln = (e) => e.nodes.map((e) => e.id),
        un = (e) => (e instanceof Function ? e : () => e);
      const dn = (0, a.memo)(function ({
        id: e,
        nodeColorFunc: t,
        nodeStrokeColorFunc: n,
        nodeClassNameFunc: r,
        nodeBorderRadius: a,
        nodeStrokeWidth: s,
        shapeRendering: c,
        NodeComponent: l,
        onClick: u,
      }) {
        const {
          node: d,
          x: f,
          y: h,
          width: g,
          height: m,
        } = w((t) => {
          const n = t.nodeLookup.get(e),
            { x: o, y: r } = n.internals.positionAbsolute,
            { width: a, height: s } = (0, i.Rf)(n);
          return { node: n, x: o, y: r, width: a, height: s };
        }, p);
        return d && !d.hidden && (0, i.nb)(d)
          ? (0, o.jsx)(l, {
              x: f,
              y: h,
              width: g,
              height: m,
              style: d.style,
              selected: !!d.selected,
              className: r(d),
              color: t(d),
              borderRadius: a,
              strokeColor: n(d),
              strokeWidth: s,
              shapeRendering: c,
              onClick: u,
              id: d.id,
            })
          : null;
      });
      var fn = (0, a.memo)(function ({
        nodeStrokeColor: e,
        nodeColor: t,
        nodeClassName: n = '',
        nodeBorderRadius: r = 5,
        nodeStrokeWidth: i,
        nodeComponent: a = cn,
        onClick: s,
      }) {
        const c = w(ln, p),
          l = un(t),
          u = un(e),
          d = un(n),
          f =
            'undefined' == typeof window || window.chrome
              ? 'crispEdges'
              : 'geometricPrecision';
        return (0, o.jsx)(o.Fragment, {
          children: c.map((e) =>
            (0, o.jsx)(
              dn,
              {
                id: e,
                nodeColorFunc: l,
                nodeStrokeColorFunc: u,
                nodeClassNameFunc: d,
                nodeBorderRadius: r,
                nodeStrokeWidth: i,
                NodeComponent: a,
                onClick: s,
                shapeRendering: f,
              },
              e,
            ),
          ),
        });
      });
      const hn = (e) => {
        const t = {
          x: -e.transform[0] / e.transform[2],
          y: -e.transform[1] / e.transform[2],
          width: e.width / e.transform[2],
          height: e.height / e.transform[2],
        };
        return {
          viewBB: t,
          boundingRect:
            e.nodeLookup.size > 0 ? (0, i.oI)((0, i.W0)(e.nodeLookup), t) : t,
          rfId: e.rfId,
          panZoom: e.panZoom,
          translateExtent: e.translateExtent,
          flowWidth: e.width,
          flowHeight: e.height,
        };
      };
      function pn({
        style: e,
        className: t,
        nodeStrokeColor: n,
        nodeColor: s,
        nodeClassName: c = '',
        nodeBorderRadius: l = 5,
        nodeStrokeWidth: u,
        nodeComponent: d,
        bgColor: f,
        maskColor: h,
        maskStrokeColor: g,
        maskStrokeWidth: m,
        position: y = 'bottom-right',
        onClick: v,
        onNodeClick: b,
        pannable: S = !1,
        zoomable: _ = !1,
        ariaLabel: k = 'React Flow mini map',
        inversePan: E,
        zoomStep: C = 10,
        offsetScale: M = 5,
      }) {
        const N = x(),
          I = (0, a.useRef)(null),
          {
            boundingRect: O,
            viewBB: z,
            rfId: A,
            panZoom: D,
            translateExtent: R,
            flowWidth: j,
            flowHeight: $,
          } = w(hn, p),
          L = e?.width ?? 200,
          T = e?.height ?? 150,
          B = O.width / L,
          V = O.height / T,
          Z = Math.max(B, V),
          H = Z * L,
          X = Z * T,
          W = M * Z,
          Y = O.x - (H - O.width) / 2 - W,
          F = O.y - (X - O.height) / 2 - W,
          K = H + 2 * W,
          q = X + 2 * W,
          G = `react-flow__minimap-desc-${A}`,
          U = (0, a.useRef)(0),
          Q = (0, a.useRef)();
        (U.current = Z),
          (0, a.useEffect)(() => {
            if (I.current && D)
              return (
                (Q.current = (0, i.FD)({
                  domNode: I.current,
                  panZoom: D,
                  getTransform: () => N.getState().transform,
                  getViewScale: () => U.current,
                })),
                () => {
                  Q.current?.destroy();
                }
              );
          }, [D]),
          (0, a.useEffect)(() => {
            Q.current?.update({
              translateExtent: R,
              width: j,
              height: $,
              inversePan: E,
              pannable: S,
              zoomStep: C,
              zoomable: _,
            });
          }, [S, _, E, C, R, j, $]);
        const J = v
            ? (e) => {
                const [t, n] = Q.current?.pointer(e) || [0, 0];
                v(e, { x: t, y: n });
              }
            : void 0,
          ee = b
            ? (0, a.useCallback)((e, t) => {
                const n = N.getState().nodeLookup.get(t);
                b(e, n);
              }, [])
            : void 0;
        return (0, o.jsx)(P, {
          position: y,
          style: {
            ...e,
            '--xy-minimap-background-color-props':
              'string' == typeof f ? f : void 0,
            '--xy-minimap-mask-background-color-props':
              'string' == typeof h ? h : void 0,
            '--xy-minimap-mask-stroke-color-props':
              'string' == typeof g ? g : void 0,
            '--xy-minimap-mask-stroke-width-props':
              'number' == typeof m ? m * Z : void 0,
            '--xy-minimap-node-background-color-props':
              'string' == typeof s ? s : void 0,
            '--xy-minimap-node-stroke-color-props':
              'string' == typeof n ? n : void 0,
            '--xy-minimap-node-stroke-width-props':
              'string' == typeof u ? u : void 0,
          },
          className: r(['react-flow__minimap', t]),
          'data-testid': 'rf__minimap',
          children: (0, o.jsxs)('svg', {
            width: L,
            height: T,
            viewBox: `${Y} ${F} ${K} ${q}`,
            className: 'react-flow__minimap-svg',
            role: 'img',
            'aria-labelledby': G,
            ref: I,
            onClick: J,
            children: [
              k && (0, o.jsx)('title', { id: G, children: k }),
              (0, o.jsx)(fn, {
                onClick: ee,
                nodeColor: s,
                nodeStrokeColor: n,
                nodeBorderRadius: l,
                nodeClassName: c,
                nodeStrokeWidth: u,
                nodeComponent: d,
              }),
              (0, o.jsx)('path', {
                className: 'react-flow__minimap-mask',
                d: `M${Y - W},${F - W}h${K + 2 * W}v${q + 2 * W}h${-K - 2 * W}z\n        M${z.x},${z.y}h${z.width}v${z.height}h${-z.width}z`,
                fillRule: 'evenodd',
                pointerEvents: 'none',
              }),
            ],
          }),
        });
      }
      pn.displayName = 'MiniMap';
      (0, a.memo)(pn);
      const gn = (0, a.memo)(function ({
        nodeId: e,
        position: t,
        variant: n = i.pB.Handle,
        className: s,
        style: c = {},
        children: l,
        color: u,
        minWidth: d = 10,
        minHeight: f = 10,
        maxWidth: h = Number.MAX_VALUE,
        maxHeight: p = Number.MAX_VALUE,
        keepAspectRatio: g = !1,
        shouldResize: m,
        onResizeStart: y,
        onResize: v,
        onResizeEnd: w,
      }) {
        const b = Ce(),
          S = 'string' == typeof e ? e : b,
          _ = x(),
          k = (0, a.useRef)(null),
          E = n === i.pB.Line ? 'right' : 'bottom-right',
          C = t ?? E,
          M = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
          if (k.current && S)
            return (
              M.current ||
                (M.current = (0, i.Cz)({
                  domNode: k.current,
                  nodeId: S,
                  getStoreItems: () => {
                    const {
                      nodeLookup: e,
                      transform: t,
                      snapGrid: n,
                      snapToGrid: o,
                      nodeOrigin: r,
                      domNode: i,
                    } = _.getState();
                    return {
                      nodeLookup: e,
                      transform: t,
                      snapGrid: n,
                      snapToGrid: o,
                      nodeOrigin: r,
                      paneDomNode: i,
                    };
                  },
                  onChange: (e, t) => {
                    const {
                        triggerNodeChanges: n,
                        nodeLookup: o,
                        parentLookup: r,
                        nodeOrigin: a,
                      } = _.getState(),
                      s = [],
                      c = { x: e.x, y: e.y },
                      l = o.get(S);
                    if (l && l.expandParent && l.parentId) {
                      const t = l.origin ?? a,
                        n = e.width ?? l.measured.width,
                        u = e.height ?? l.measured.height,
                        d = {
                          id: l.id,
                          parentId: l.parentId,
                          rect: {
                            width: n,
                            height: u,
                            ...(0, i.ZB)(
                              {
                                x: e.x ?? l.position.x,
                                y: e.y ?? l.position.y,
                              },
                              { width: n, height: u },
                              l.parentId,
                              o,
                              t,
                            ),
                          },
                        },
                        f = (0, i.so)([d], o, r, a);
                      s.push(...f),
                        (c.x = e.x ? Math.max(t[0] * n, e.x) : void 0),
                        (c.y = e.y ? Math.max(t[1] * u, e.y) : void 0);
                    }
                    if (void 0 !== c.x && void 0 !== c.y) {
                      const e = { id: S, type: 'position', position: { ...c } };
                      s.push(e);
                    }
                    if (void 0 !== e.width && void 0 !== e.height) {
                      const t = {
                        id: S,
                        type: 'dimensions',
                        resizing: !0,
                        setAttributes: !0,
                        dimensions: { width: e.width, height: e.height },
                      };
                      s.push(t);
                    }
                    for (const e of t) {
                      const t = { ...e, type: 'position' };
                      s.push(t);
                    }
                    n(s);
                  },
                  onEnd: () => {
                    const e = { id: S, type: 'dimensions', resizing: !1 };
                    _.getState().triggerNodeChanges([e]);
                  },
                })),
              M.current.update({
                controlPosition: C,
                boundaries: {
                  minWidth: d,
                  minHeight: f,
                  maxWidth: h,
                  maxHeight: p,
                },
                keepAspectRatio: g,
                onResizeStart: y,
                onResize: v,
                onResizeEnd: w,
                shouldResize: m,
              }),
              () => {
                M.current?.destroy();
              }
            );
        }, [C, d, f, h, p, g, y, v, w, m]);
        const N = C.split('-'),
          P = n === i.pB.Line ? 'borderColor' : 'backgroundColor',
          I = u ? { ...c, [P]: u } : c;
        return (0, o.jsx)('div', {
          className: r(['react-flow__resize-control', 'nodrag', ...N, n, s]),
          ref: k,
          style: I,
          children: l,
        });
      });
      const mn = (e) => e.domNode?.querySelector('.react-flow__renderer');
      function yn({ children: e }) {
        const t = w(mn);
        return t ? (0, g.createPortal)(e, t) : null;
      }
      const vn = (e, t) =>
          e?.internals.positionAbsolute.x !== t?.internals.positionAbsolute.x ||
          e?.internals.positionAbsolute.y !== t?.internals.positionAbsolute.y ||
          e?.measured.width !== t?.measured.width ||
          e?.measured.height !== t?.measured.height ||
          e?.selected !== t?.selected ||
          e?.internals.z !== t?.internals.z,
        wn = (e, t) => {
          if (e.size !== t.size) return !1;
          for (const [n, o] of e) if (vn(o, t.get(n))) return !1;
          return !0;
        },
        xn = (e) => ({
          x: e.transform[0],
          y: e.transform[1],
          zoom: e.transform[2],
          selectedNodesCount: e.nodes.filter((e) => e.selected).length,
        });
      function bn({
        nodeId: e,
        children: t,
        className: n,
        style: s,
        isVisible: c,
        position: l = i.Ly.Top,
        offset: u = 10,
        align: d = 'center',
        ...f
      }) {
        const h = Ce(),
          g = w(
            (0, a.useCallback)(
              (t) =>
                (Array.isArray(e) ? e : [e || h || '']).reduce((e, n) => {
                  const o = t.nodeLookup.get(n);
                  return o && e.set(o.id, o), e;
                }, new Map()),
              [e, h],
            ),
            wn,
          ),
          { x: m, y: y, zoom: v, selectedNodesCount: x } = w(xn, p);
        if (
          !('boolean' == typeof c
            ? c
            : 1 === g.size && g.values().next().value.selected && 1 === x) ||
          !g.size
        )
          return null;
        const b = (0, i.W0)(g),
          S = Array.from(g.values()),
          _ = Math.max(...S.map((e) => e.internals.z + 1)),
          k = {
            position: 'absolute',
            transform: (0, i.ZJ)(b, { x: m, y: y, zoom: v }, l, u, d),
            zIndex: _,
            ...s,
          };
        return (0, o.jsx)(yn, {
          children: (0, o.jsx)('div', {
            style: k,
            className: r(['react-flow__node-toolbar', n]),
            ...f,
            'data-id': S.reduce((e, t) => `${e}${t.id} `, '').trim(),
            children: t,
          }),
        });
      }
    },
    83859: function (e, t, n) {
      'use strict';
      n.d(t, {
        t8: function () {
          return Kt;
        },
        jD: function () {
          return Xt;
        },
        QZ: function () {
          return qt;
        },
        IY: function () {
          return Wt;
        },
        Ly: function () {
          return Gt;
        },
        pB: function () {
          return Ho;
        },
        oW: function () {
          return Yt;
        },
        oC: function () {
          return Mo;
        },
        Ql: function () {
          return Ao;
        },
        FD: function () {
          return Do;
        },
        X6: function () {
          return Zo;
        },
        Cz: function () {
          return Uo;
        },
        Z_: function () {
          return Qn;
        },
        yF: function () {
          return yo;
        },
        q7: function () {
          return un;
        },
        n3: function () {
          return uo;
        },
        Ki: function () {
          return Cn;
        },
        wQ: function () {
          return Ht;
        },
        Qj: function () {
          return Vt;
        },
        ZB: function () {
          return Rn;
        },
        Qu: function () {
          return ln;
        },
        lM: function () {
          return Xn;
        },
        OQ: function () {
          return Fn;
        },
        oI: function () {
          return Sn;
        },
        Zp: function () {
          return Qt;
        },
        t_: function () {
          return $n;
        },
        JU: function () {
          return io;
        },
        WD: function () {
          return dn;
        },
        xx: function () {
          return qn;
        },
        wv: function () {
          return Zn;
        },
        J6: function () {
          return cn;
        },
        S2: function () {
          return Ln;
        },
        W0: function () {
          return rn;
        },
        dW: function () {
          return lo;
        },
        Rf: function () {
          return An;
        },
        ZJ: function () {
          return fo;
        },
        RX: function () {
          return on;
        },
        f5: function () {
          return an;
        },
        lp: function () {
          return _n;
        },
        OW: function () {
          return oo;
        },
        Hm: function () {
          return Jn;
        },
        $i: function () {
          return In;
        },
        so: function () {
          return xo;
        },
        k5: function () {
          return Zt;
        },
        Ky: function () {
          return Ft;
        },
        J3: function () {
          return Jt;
        },
        RY: function () {
          return Gn;
        },
        s$: function () {
          return Bn;
        },
        Q5: function () {
          return On;
        },
        N5: function () {
          return Vn;
        },
        Vt: function () {
          return en;
        },
        kE: function () {
          return En;
        },
        J$: function () {
          return kn;
        },
        nb: function () {
          return Dn;
        },
        PS: function () {
          return xn;
        },
        hO: function () {
          return So;
        },
        m: function () {
          return Nn;
        },
        oj: function () {
          return Pn;
        },
        _2: function () {
          return Mn;
        },
        VV: function () {
          return mo;
        },
        be: function () {
          return _o;
        },
        B1: function () {
          return bo;
        },
      });
      var o = n(17049);
      function r() {}
      function i(e) {
        return null == e
          ? r
          : function () {
              return this.querySelector(e);
            };
      }
      function a() {
        return [];
      }
      function s(e) {
        return null == e
          ? a
          : function () {
              return this.querySelectorAll(e);
            };
      }
      function c(e) {
        return function () {
          return null == (t = e.apply(this, arguments))
            ? []
            : Array.isArray(t)
              ? t
              : Array.from(t);
          var t;
        };
      }
      function l(e) {
        return function () {
          return this.matches(e);
        };
      }
      function u(e) {
        return function (t) {
          return t.matches(e);
        };
      }
      var d = Array.prototype.find;
      function f() {
        return this.firstElementChild;
      }
      var h = Array.prototype.filter;
      function p() {
        return Array.from(this.children);
      }
      function g(e) {
        return new Array(e.length);
      }
      function m(e, t) {
        (this.ownerDocument = e.ownerDocument),
          (this.namespaceURI = e.namespaceURI),
          (this._next = null),
          (this._parent = e),
          (this.__data__ = t);
      }
      function y(e, t, n, o, r, i) {
        for (var a, s = 0, c = t.length, l = i.length; s < l; ++s)
          (a = t[s])
            ? ((a.__data__ = i[s]), (o[s] = a))
            : (n[s] = new m(e, i[s]));
        for (; s < c; ++s) (a = t[s]) && (r[s] = a);
      }
      function v(e, t, n, o, r, i, a) {
        var s,
          c,
          l,
          u = new Map(),
          d = t.length,
          f = i.length,
          h = new Array(d);
        for (s = 0; s < d; ++s)
          (c = t[s]) &&
            ((h[s] = l = a.call(c, c.__data__, s, t) + ''),
            u.has(l) ? (r[s] = c) : u.set(l, c));
        for (s = 0; s < f; ++s)
          (l = a.call(e, i[s], s, i) + ''),
            (c = u.get(l))
              ? ((o[s] = c), (c.__data__ = i[s]), u.delete(l))
              : (n[s] = new m(e, i[s]));
        for (s = 0; s < d; ++s) (c = t[s]) && u.get(h[s]) === c && (r[s] = c);
      }
      function w(e) {
        return e.__data__;
      }
      function x(e) {
        return 'object' == typeof e && 'length' in e ? e : Array.from(e);
      }
      function b(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      }
      m.prototype = {
        constructor: m,
        appendChild: function (e) {
          return this._parent.insertBefore(e, this._next);
        },
        insertBefore: function (e, t) {
          return this._parent.insertBefore(e, t);
        },
        querySelector: function (e) {
          return this._parent.querySelector(e);
        },
        querySelectorAll: function (e) {
          return this._parent.querySelectorAll(e);
        },
      };
      var S = 'http://www.w3.org/1999/xhtml',
        _ = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: S,
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        };
      function k(e) {
        var t = (e += ''),
          n = t.indexOf(':');
        return (
          n >= 0 && 'xmlns' !== (t = e.slice(0, n)) && (e = e.slice(n + 1)),
          _.hasOwnProperty(t) ? { space: _[t], local: e } : e
        );
      }
      function E(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function C(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function M(e, t) {
        return function () {
          this.setAttribute(e, t);
        };
      }
      function N(e, t) {
        return function () {
          this.setAttributeNS(e.space, e.local, t);
        };
      }
      function P(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n ? this.removeAttribute(e) : this.setAttribute(e, n);
        };
      }
      function I(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n
            ? this.removeAttributeNS(e.space, e.local)
            : this.setAttributeNS(e.space, e.local, n);
        };
      }
      function O(e) {
        return (
          (e.ownerDocument && e.ownerDocument.defaultView) ||
          (e.document && e) ||
          e.defaultView
        );
      }
      function z(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      function A(e, t, n) {
        return function () {
          this.style.setProperty(e, t, n);
        };
      }
      function D(e, t, n) {
        return function () {
          var o = t.apply(this, arguments);
          null == o
            ? this.style.removeProperty(e)
            : this.style.setProperty(e, o, n);
        };
      }
      function R(e, t) {
        return (
          e.style.getPropertyValue(t) ||
          O(e).getComputedStyle(e, null).getPropertyValue(t)
        );
      }
      function j(e) {
        return function () {
          delete this[e];
        };
      }
      function $(e, t) {
        return function () {
          this[e] = t;
        };
      }
      function L(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n ? delete this[e] : (this[e] = n);
        };
      }
      function T(e) {
        return e.trim().split(/^|\s+/);
      }
      function B(e) {
        return e.classList || new V(e);
      }
      function V(e) {
        (this._node = e), (this._names = T(e.getAttribute('class') || ''));
      }
      function Z(e, t) {
        for (var n = B(e), o = -1, r = t.length; ++o < r; ) n.add(t[o]);
      }
      function H(e, t) {
        for (var n = B(e), o = -1, r = t.length; ++o < r; ) n.remove(t[o]);
      }
      function X(e) {
        return function () {
          Z(this, e);
        };
      }
      function W(e) {
        return function () {
          H(this, e);
        };
      }
      function Y(e, t) {
        return function () {
          (t.apply(this, arguments) ? Z : H)(this, e);
        };
      }
      function F() {
        this.textContent = '';
      }
      function K(e) {
        return function () {
          this.textContent = e;
        };
      }
      function q(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.textContent = null == t ? '' : t;
        };
      }
      function G() {
        this.innerHTML = '';
      }
      function U(e) {
        return function () {
          this.innerHTML = e;
        };
      }
      function Q(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.innerHTML = null == t ? '' : t;
        };
      }
      function J() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function ee() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function te(e) {
        return function () {
          var t = this.ownerDocument,
            n = this.namespaceURI;
          return n === S && t.documentElement.namespaceURI === S
            ? t.createElement(e)
            : t.createElementNS(n, e);
        };
      }
      function ne(e) {
        return function () {
          return this.ownerDocument.createElementNS(e.space, e.local);
        };
      }
      function oe(e) {
        var t = k(e);
        return (t.local ? ne : te)(t);
      }
      function re() {
        return null;
      }
      function ie() {
        var e = this.parentNode;
        e && e.removeChild(this);
      }
      function ae() {
        var e = this.cloneNode(!1),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function se() {
        var e = this.cloneNode(!0),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function ce(e) {
        return function () {
          var t = this.__on;
          if (t) {
            for (var n, o = 0, r = -1, i = t.length; o < i; ++o)
              (n = t[o]),
                (e.type && n.type !== e.type) || n.name !== e.name
                  ? (t[++r] = n)
                  : this.removeEventListener(n.type, n.listener, n.options);
            ++r ? (t.length = r) : delete this.__on;
          }
        };
      }
      function le(e, t, n) {
        return function () {
          var o,
            r = this.__on,
            i = (function (e) {
              return function (t) {
                e.call(this, t, this.__data__);
              };
            })(t);
          if (r)
            for (var a = 0, s = r.length; a < s; ++a)
              if ((o = r[a]).type === e.type && o.name === e.name)
                return (
                  this.removeEventListener(o.type, o.listener, o.options),
                  this.addEventListener(
                    o.type,
                    (o.listener = i),
                    (o.options = n),
                  ),
                  void (o.value = t)
                );
          this.addEventListener(e.type, i, n),
            (o = {
              type: e.type,
              name: e.name,
              value: t,
              listener: i,
              options: n,
            }),
            r ? r.push(o) : (this.__on = [o]);
        };
      }
      function ue(e, t, n) {
        var o = O(e),
          r = o.CustomEvent;
        'function' == typeof r
          ? (r = new r(t, n))
          : ((r = o.document.createEvent('Event')),
            n
              ? (r.initEvent(t, n.bubbles, n.cancelable), (r.detail = n.detail))
              : r.initEvent(t, !1, !1)),
          e.dispatchEvent(r);
      }
      function de(e, t) {
        return function () {
          return ue(this, e, t);
        };
      }
      function fe(e, t) {
        return function () {
          return ue(this, e, t.apply(this, arguments));
        };
      }
      V.prototype = {
        add: function (e) {
          this._names.indexOf(e) < 0 &&
            (this._names.push(e),
            this._node.setAttribute('class', this._names.join(' ')));
        },
        remove: function (e) {
          var t = this._names.indexOf(e);
          t >= 0 &&
            (this._names.splice(t, 1),
            this._node.setAttribute('class', this._names.join(' ')));
        },
        contains: function (e) {
          return this._names.indexOf(e) >= 0;
        },
      };
      var he = [null];
      function pe(e, t) {
        (this._groups = e), (this._parents = t);
      }
      function ge() {
        return new pe([[document.documentElement]], he);
      }
      pe.prototype = ge.prototype = {
        constructor: pe,
        select: function (e) {
          'function' != typeof e && (e = i(e));
          for (
            var t = this._groups, n = t.length, o = new Array(n), r = 0;
            r < n;
            ++r
          )
            for (
              var a,
                s,
                c = t[r],
                l = c.length,
                u = (o[r] = new Array(l)),
                d = 0;
              d < l;
              ++d
            )
              (a = c[d]) &&
                (s = e.call(a, a.__data__, d, c)) &&
                ('__data__' in a && (s.__data__ = a.__data__), (u[d] = s));
          return new pe(o, this._parents);
        },
        selectAll: function (e) {
          e = 'function' == typeof e ? c(e) : s(e);
          for (
            var t = this._groups, n = t.length, o = [], r = [], i = 0;
            i < n;
            ++i
          )
            for (var a, l = t[i], u = l.length, d = 0; d < u; ++d)
              (a = l[d]) && (o.push(e.call(a, a.__data__, d, l)), r.push(a));
          return new pe(o, r);
        },
        selectChild: function (e) {
          return this.select(
            null == e
              ? f
              : (function (e) {
                  return function () {
                    return d.call(this.children, e);
                  };
                })('function' == typeof e ? e : u(e)),
          );
        },
        selectChildren: function (e) {
          return this.selectAll(
            null == e
              ? p
              : (function (e) {
                  return function () {
                    return h.call(this.children, e);
                  };
                })('function' == typeof e ? e : u(e)),
          );
        },
        filter: function (e) {
          'function' != typeof e && (e = l(e));
          for (
            var t = this._groups, n = t.length, o = new Array(n), r = 0;
            r < n;
            ++r
          )
            for (
              var i, a = t[r], s = a.length, c = (o[r] = []), u = 0;
              u < s;
              ++u
            )
              (i = a[u]) && e.call(i, i.__data__, u, a) && c.push(i);
          return new pe(o, this._parents);
        },
        data: function (e, t) {
          if (!arguments.length) return Array.from(this, w);
          var n,
            o = t ? v : y,
            r = this._parents,
            i = this._groups;
          'function' != typeof e &&
            ((n = e),
            (e = function () {
              return n;
            }));
          for (
            var a = i.length,
              s = new Array(a),
              c = new Array(a),
              l = new Array(a),
              u = 0;
            u < a;
            ++u
          ) {
            var d = r[u],
              f = i[u],
              h = f.length,
              p = x(e.call(d, d && d.__data__, u, r)),
              g = p.length,
              m = (c[u] = new Array(g)),
              b = (s[u] = new Array(g));
            o(d, f, m, b, (l[u] = new Array(h)), p, t);
            for (var S, _, k = 0, E = 0; k < g; ++k)
              if ((S = m[k])) {
                for (k >= E && (E = k + 1); !(_ = b[E]) && ++E < g; );
                S._next = _ || null;
              }
          }
          return ((s = new pe(s, r))._enter = c), (s._exit = l), s;
        },
        enter: function () {
          return new pe(this._enter || this._groups.map(g), this._parents);
        },
        exit: function () {
          return new pe(this._exit || this._groups.map(g), this._parents);
        },
        join: function (e, t, n) {
          var o = this.enter(),
            r = this,
            i = this.exit();
          return (
            'function' == typeof e
              ? (o = e(o)) && (o = o.selection())
              : (o = o.append(e + '')),
            null != t && (r = t(r)) && (r = r.selection()),
            null == n ? i.remove() : n(i),
            o && r ? o.merge(r).order() : r
          );
        },
        merge: function (e) {
          for (
            var t = e.selection ? e.selection() : e,
              n = this._groups,
              o = t._groups,
              r = n.length,
              i = o.length,
              a = Math.min(r, i),
              s = new Array(r),
              c = 0;
            c < a;
            ++c
          )
            for (
              var l,
                u = n[c],
                d = o[c],
                f = u.length,
                h = (s[c] = new Array(f)),
                p = 0;
              p < f;
              ++p
            )
              (l = u[p] || d[p]) && (h[p] = l);
          for (; c < r; ++c) s[c] = n[c];
          return new pe(s, this._parents);
        },
        selection: function () {
          return this;
        },
        order: function () {
          for (var e = this._groups, t = -1, n = e.length; ++t < n; )
            for (var o, r = e[t], i = r.length - 1, a = r[i]; --i >= 0; )
              (o = r[i]) &&
                (a &&
                  4 ^ o.compareDocumentPosition(a) &&
                  a.parentNode.insertBefore(o, a),
                (a = o));
          return this;
        },
        sort: function (e) {
          function t(t, n) {
            return t && n ? e(t.__data__, n.__data__) : !t - !n;
          }
          e || (e = b);
          for (
            var n = this._groups, o = n.length, r = new Array(o), i = 0;
            i < o;
            ++i
          ) {
            for (
              var a, s = n[i], c = s.length, l = (r[i] = new Array(c)), u = 0;
              u < c;
              ++u
            )
              (a = s[u]) && (l[u] = a);
            l.sort(t);
          }
          return new pe(r, this._parents).order();
        },
        call: function () {
          var e = arguments[0];
          return (arguments[0] = this), e.apply(null, arguments), this;
        },
        nodes: function () {
          return Array.from(this);
        },
        node: function () {
          for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
            for (var o = e[t], r = 0, i = o.length; r < i; ++r) {
              var a = o[r];
              if (a) return a;
            }
          return null;
        },
        size: function () {
          let e = 0;
          for (const t of this) ++e;
          return e;
        },
        empty: function () {
          return !this.node();
        },
        each: function (e) {
          for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
            for (var r, i = t[n], a = 0, s = i.length; a < s; ++a)
              (r = i[a]) && e.call(r, r.__data__, a, i);
          return this;
        },
        attr: function (e, t) {
          var n = k(e);
          if (arguments.length < 2) {
            var o = this.node();
            return n.local
              ? o.getAttributeNS(n.space, n.local)
              : o.getAttribute(n);
          }
          return this.each(
            (null == t
              ? n.local
                ? C
                : E
              : 'function' == typeof t
                ? n.local
                  ? I
                  : P
                : n.local
                  ? N
                  : M)(n, t),
          );
        },
        style: function (e, t, n) {
          return arguments.length > 1
            ? this.each(
                (null == t ? z : 'function' == typeof t ? D : A)(
                  e,
                  t,
                  null == n ? '' : n,
                ),
              )
            : R(this.node(), e);
        },
        property: function (e, t) {
          return arguments.length > 1
            ? this.each((null == t ? j : 'function' == typeof t ? L : $)(e, t))
            : this.node()[e];
        },
        classed: function (e, t) {
          var n = T(e + '');
          if (arguments.length < 2) {
            for (var o = B(this.node()), r = -1, i = n.length; ++r < i; )
              if (!o.contains(n[r])) return !1;
            return !0;
          }
          return this.each(('function' == typeof t ? Y : t ? X : W)(n, t));
        },
        text: function (e) {
          return arguments.length
            ? this.each(null == e ? F : ('function' == typeof e ? q : K)(e))
            : this.node().textContent;
        },
        html: function (e) {
          return arguments.length
            ? this.each(null == e ? G : ('function' == typeof e ? Q : U)(e))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(J);
        },
        lower: function () {
          return this.each(ee);
        },
        append: function (e) {
          var t = 'function' == typeof e ? e : oe(e);
          return this.select(function () {
            return this.appendChild(t.apply(this, arguments));
          });
        },
        insert: function (e, t) {
          var n = 'function' == typeof e ? e : oe(e),
            o = null == t ? re : 'function' == typeof t ? t : i(t);
          return this.select(function () {
            return this.insertBefore(
              n.apply(this, arguments),
              o.apply(this, arguments) || null,
            );
          });
        },
        remove: function () {
          return this.each(ie);
        },
        clone: function (e) {
          return this.select(e ? se : ae);
        },
        datum: function (e) {
          return arguments.length
            ? this.property('__data__', e)
            : this.node().__data__;
        },
        on: function (e, t, n) {
          var o,
            r,
            i = (function (e) {
              return e
                .trim()
                .split(/^|\s+/)
                .map(function (e) {
                  var t = '',
                    n = e.indexOf('.');
                  return (
                    n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))),
                    { type: e, name: t }
                  );
                });
            })(e + ''),
            a = i.length;
          if (!(arguments.length < 2)) {
            for (s = t ? le : ce, o = 0; o < a; ++o) this.each(s(i[o], t, n));
            return this;
          }
          var s = this.node().__on;
          if (s)
            for (var c, l = 0, u = s.length; l < u; ++l)
              for (o = 0, c = s[l]; o < a; ++o)
                if ((r = i[o]).type === c.type && r.name === c.name)
                  return c.value;
        },
        dispatch: function (e, t) {
          return this.each(('function' == typeof t ? fe : de)(e, t));
        },
        [Symbol.iterator]: function* () {
          for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
            for (var o, r = e[t], i = 0, a = r.length; i < a; ++i)
              (o = r[i]) && (yield o);
        },
      };
      var me = ge;
      function ye(e) {
        return 'string' == typeof e
          ? new pe([[document.querySelector(e)]], [document.documentElement])
          : new pe([[e]], he);
      }
      function ve(e, t) {
        if (
          ((e = (function (e) {
            let t;
            for (; (t = e.sourceEvent); ) e = t;
            return e;
          })(e)),
          void 0 === t && (t = e.currentTarget),
          t)
        ) {
          var n = t.ownerSVGElement || t;
          if (n.createSVGPoint) {
            var o = n.createSVGPoint();
            return (
              (o.x = e.clientX),
              (o.y = e.clientY),
              [(o = o.matrixTransform(t.getScreenCTM().inverse())).x, o.y]
            );
          }
          if (t.getBoundingClientRect) {
            var r = t.getBoundingClientRect();
            return [
              e.clientX - r.left - t.clientLeft,
              e.clientY - r.top - t.clientTop,
            ];
          }
        }
        return [e.pageX, e.pageY];
      }
      const we = { passive: !1 },
        xe = { capture: !0, passive: !1 };
      function be(e) {
        e.stopImmediatePropagation();
      }
      function Se(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
      function _e(e) {
        var t = e.document.documentElement,
          n = ye(e).on('dragstart.drag', Se, xe);
        'onselectstart' in t
          ? n.on('selectstart.drag', Se, xe)
          : ((t.__noselect = t.style.MozUserSelect),
            (t.style.MozUserSelect = 'none'));
      }
      function ke(e, t) {
        var n = e.document.documentElement,
          o = ye(e).on('dragstart.drag', null);
        t &&
          (o.on('click.drag', Se, xe),
          setTimeout(function () {
            o.on('click.drag', null);
          }, 0)),
          'onselectstart' in n
            ? o.on('selectstart.drag', null)
            : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
      }
      var Ee = (e) => () => e;
      function Ce(
        e,
        {
          sourceEvent: t,
          subject: n,
          target: o,
          identifier: r,
          active: i,
          x: a,
          y: s,
          dx: c,
          dy: l,
          dispatch: u,
        },
      ) {
        Object.defineProperties(this, {
          type: { value: e, enumerable: !0, configurable: !0 },
          sourceEvent: { value: t, enumerable: !0, configurable: !0 },
          subject: { value: n, enumerable: !0, configurable: !0 },
          target: { value: o, enumerable: !0, configurable: !0 },
          identifier: { value: r, enumerable: !0, configurable: !0 },
          active: { value: i, enumerable: !0, configurable: !0 },
          x: { value: a, enumerable: !0, configurable: !0 },
          y: { value: s, enumerable: !0, configurable: !0 },
          dx: { value: c, enumerable: !0, configurable: !0 },
          dy: { value: l, enumerable: !0, configurable: !0 },
          _: { value: u },
        });
      }
      function Me(e) {
        return !e.ctrlKey && !e.button;
      }
      function Ne() {
        return this.parentNode;
      }
      function Pe(e, t) {
        return null == t ? { x: e.x, y: e.y } : t;
      }
      function Ie() {
        return navigator.maxTouchPoints || 'ontouchstart' in this;
      }
      function Oe() {
        var e,
          t,
          n,
          r,
          i = Me,
          a = Ne,
          s = Pe,
          c = Ie,
          l = {},
          u = (0, o.Z)('start', 'drag', 'end'),
          d = 0,
          f = 0;
        function h(e) {
          e.on('mousedown.drag', p)
            .filter(c)
            .on('touchstart.drag', y)
            .on('touchmove.drag', v, we)
            .on('touchend.drag touchcancel.drag', w)
            .style('touch-action', 'none')
            .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
        }
        function p(o, s) {
          if (!r && i.call(this, o, s)) {
            var c = x(this, a.call(this, o, s), o, s, 'mouse');
            c &&
              (ye(o.view).on('mousemove.drag', g, xe).on('mouseup.drag', m, xe),
              _e(o.view),
              be(o),
              (n = !1),
              (e = o.clientX),
              (t = o.clientY),
              c('start', o));
          }
        }
        function g(o) {
          if ((Se(o), !n)) {
            var r = o.clientX - e,
              i = o.clientY - t;
            n = r * r + i * i > f;
          }
          l.mouse('drag', o);
        }
        function m(e) {
          ye(e.view).on('mousemove.drag mouseup.drag', null),
            ke(e.view, n),
            Se(e),
            l.mouse('end', e);
        }
        function y(e, t) {
          if (i.call(this, e, t)) {
            var n,
              o,
              r = e.changedTouches,
              s = a.call(this, e, t),
              c = r.length;
            for (n = 0; n < c; ++n)
              (o = x(this, s, e, t, r[n].identifier, r[n])) &&
                (be(e), o('start', e, r[n]));
          }
        }
        function v(e) {
          var t,
            n,
            o = e.changedTouches,
            r = o.length;
          for (t = 0; t < r; ++t)
            (n = l[o[t].identifier]) && (Se(e), n('drag', e, o[t]));
        }
        function w(e) {
          var t,
            n,
            o = e.changedTouches,
            i = o.length;
          for (
            r && clearTimeout(r),
              r = setTimeout(function () {
                r = null;
              }, 500),
              t = 0;
            t < i;
            ++t
          )
            (n = l[o[t].identifier]) && (be(e), n('end', e, o[t]));
        }
        function x(e, t, n, o, r, i) {
          var a,
            c,
            f,
            p = u.copy(),
            g = ve(i || n, t);
          if (
            null !=
            (f = s.call(
              e,
              new Ce('beforestart', {
                sourceEvent: n,
                target: h,
                identifier: r,
                active: d,
                x: g[0],
                y: g[1],
                dx: 0,
                dy: 0,
                dispatch: p,
              }),
              o,
            ))
          )
            return (
              (a = f.x - g[0] || 0),
              (c = f.y - g[1] || 0),
              function n(i, s, u) {
                var m,
                  y = g;
                switch (i) {
                  case 'start':
                    (l[r] = n), (m = d++);
                    break;
                  case 'end':
                    delete l[r], --d;
                  case 'drag':
                    (g = ve(u || s, t)), (m = d);
                }
                p.call(
                  i,
                  e,
                  new Ce(i, {
                    sourceEvent: s,
                    subject: f,
                    target: h,
                    identifier: r,
                    active: m,
                    x: g[0] + a,
                    y: g[1] + c,
                    dx: g[0] - y[0],
                    dy: g[1] - y[1],
                    dispatch: p,
                  }),
                  o,
                );
              }
            );
        }
        return (
          (h.filter = function (e) {
            return arguments.length
              ? ((i = 'function' == typeof e ? e : Ee(!!e)), h)
              : i;
          }),
          (h.container = function (e) {
            return arguments.length
              ? ((a = 'function' == typeof e ? e : Ee(e)), h)
              : a;
          }),
          (h.subject = function (e) {
            return arguments.length
              ? ((s = 'function' == typeof e ? e : Ee(e)), h)
              : s;
          }),
          (h.touchable = function (e) {
            return arguments.length
              ? ((c = 'function' == typeof e ? e : Ee(!!e)), h)
              : c;
          }),
          (h.on = function () {
            var e = u.on.apply(u, arguments);
            return e === u ? h : e;
          }),
          (h.clickDistance = function (e) {
            return arguments.length ? ((f = (e = +e) * e), h) : Math.sqrt(f);
          }),
          h
        );
      }
      Ce.prototype.on = function () {
        var e = this._.on.apply(this._, arguments);
        return e === this._ ? this : e;
      };
      function ze(e) {
        return ((e = Math.exp(e)) + 1 / e) / 2;
      }
      var Ae = (function e(t, n, o) {
          function r(e, r) {
            var i,
              a,
              s = e[0],
              c = e[1],
              l = e[2],
              u = r[0],
              d = r[1],
              f = r[2],
              h = u - s,
              p = d - c,
              g = h * h + p * p;
            if (g < 1e-12)
              (a = Math.log(f / l) / t),
                (i = function (e) {
                  return [s + e * h, c + e * p, l * Math.exp(t * e * a)];
                });
            else {
              var m = Math.sqrt(g),
                y = (f * f - l * l + o * g) / (2 * l * n * m),
                v = (f * f - l * l - o * g) / (2 * f * n * m),
                w = Math.log(Math.sqrt(y * y + 1) - y),
                x = Math.log(Math.sqrt(v * v + 1) - v);
              (a = (x - w) / t),
                (i = function (e) {
                  var o,
                    r = e * a,
                    i = ze(w),
                    u =
                      (l / (n * m)) *
                      (i *
                        ((o = t * r + w),
                        ((o = Math.exp(2 * o)) - 1) / (o + 1)) -
                        (function (e) {
                          return ((e = Math.exp(e)) - 1 / e) / 2;
                        })(w));
                  return [s + u * h, c + u * p, (l * i) / ze(t * r + w)];
                });
            }
            return (i.duration = (1e3 * a * t) / Math.SQRT2), i;
          }
          return (
            (r.rho = function (t) {
              var n = Math.max(0.001, +t),
                o = n * n;
              return e(n, o, o * o);
            }),
            r
          );
        })(Math.SQRT2, 2, 4),
        De = n(91739);
      function Re(e, t, n) {
        var o = new De.B7();
        return (
          (t = null == t ? 0 : +t),
          o.restart(
            (n) => {
              o.stop(), e(n + t);
            },
            t,
            n,
          ),
          o
        );
      }
      var je = (0, o.Z)('start', 'end', 'cancel', 'interrupt'),
        $e = [],
        Le = 2,
        Te = 5,
        Be = 6;
      function Ve(e, t, n, o, r, i) {
        var a = e.__transition;
        if (a) {
          if (n in a) return;
        } else e.__transition = {};
        !(function (e, t, n) {
          var o,
            r = e.__transition;
          function i(e) {
            (n.state = 1),
              n.timer.restart(a, n.delay, n.time),
              n.delay <= e && a(e - n.delay);
          }
          function a(i) {
            var l, u, d, f;
            if (1 !== n.state) return c();
            for (l in r)
              if ((f = r[l]).name === n.name) {
                if (3 === f.state) return Re(a);
                4 === f.state
                  ? ((f.state = Be),
                    f.timer.stop(),
                    f.on.call('interrupt', e, e.__data__, f.index, f.group),
                    delete r[l])
                  : +l < t &&
                    ((f.state = Be),
                    f.timer.stop(),
                    f.on.call('cancel', e, e.__data__, f.index, f.group),
                    delete r[l]);
              }
            if (
              (Re(function () {
                3 === n.state &&
                  ((n.state = 4), n.timer.restart(s, n.delay, n.time), s(i));
              }),
              (n.state = Le),
              n.on.call('start', e, e.__data__, n.index, n.group),
              n.state === Le)
            ) {
              for (
                n.state = 3, o = new Array((d = n.tween.length)), l = 0, u = -1;
                l < d;
                ++l
              )
                (f = n.tween[l].value.call(e, e.__data__, n.index, n.group)) &&
                  (o[++u] = f);
              o.length = u + 1;
            }
          }
          function s(t) {
            for (
              var r =
                  t < n.duration
                    ? n.ease.call(null, t / n.duration)
                    : (n.timer.restart(c), (n.state = Te), 1),
                i = -1,
                a = o.length;
              ++i < a;

            )
              o[i].call(e, r);
            n.state === Te &&
              (n.on.call('end', e, e.__data__, n.index, n.group), c());
          }
          function c() {
            for (var o in ((n.state = Be), n.timer.stop(), delete r[t], r))
              return;
            delete e.__transition;
          }
          (r[t] = n), (n.timer = (0, De.HT)(i, 0, n.time));
        })(e, n, {
          name: t,
          index: o,
          group: r,
          on: je,
          tween: $e,
          time: i.time,
          delay: i.delay,
          duration: i.duration,
          ease: i.ease,
          timer: null,
          state: 0,
        });
      }
      function Ze(e, t) {
        var n = Xe(e, t);
        if (n.state > 0) throw new Error('too late; already scheduled');
        return n;
      }
      function He(e, t) {
        var n = Xe(e, t);
        if (n.state > 3) throw new Error('too late; already running');
        return n;
      }
      function Xe(e, t) {
        var n = e.__transition;
        if (!n || !(n = n[t])) throw new Error('transition not found');
        return n;
      }
      function We(e, t) {
        var n,
          o,
          r,
          i = e.__transition,
          a = !0;
        if (i) {
          for (r in ((t = null == t ? null : t + ''), i))
            (n = i[r]).name === t
              ? ((o = n.state > Le && n.state < Te),
                (n.state = Be),
                n.timer.stop(),
                n.on.call(
                  o ? 'interrupt' : 'cancel',
                  e,
                  e.__data__,
                  n.index,
                  n.group,
                ),
                delete i[r])
              : (a = !1);
          a && delete e.__transition;
        }
      }
      var Ye,
        Fe = n(79848),
        Ke = 180 / Math.PI,
        qe = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        };
      function Ge(e, t, n, o, r, i) {
        var a, s, c;
        return (
          (a = Math.sqrt(e * e + t * t)) && ((e /= a), (t /= a)),
          (c = e * n + t * o) && ((n -= e * c), (o -= t * c)),
          (s = Math.sqrt(n * n + o * o)) && ((n /= s), (o /= s), (c /= s)),
          e * o < t * n && ((e = -e), (t = -t), (c = -c), (a = -a)),
          {
            translateX: r,
            translateY: i,
            rotate: Math.atan2(t, e) * Ke,
            skewX: Math.atan(c) * Ke,
            scaleX: a,
            scaleY: s,
          }
        );
      }
      function Ue(e, t, n, o) {
        function r(e) {
          return e.length ? e.pop() + ' ' : '';
        }
        return function (i, a) {
          var s = [],
            c = [];
          return (
            (i = e(i)),
            (a = e(a)),
            (function (e, o, r, i, a, s) {
              if (e !== r || o !== i) {
                var c = a.push('translate(', null, t, null, n);
                s.push(
                  { i: c - 4, x: (0, Fe.Z)(e, r) },
                  { i: c - 2, x: (0, Fe.Z)(o, i) },
                );
              } else (r || i) && a.push('translate(' + r + t + i + n);
            })(i.translateX, i.translateY, a.translateX, a.translateY, s, c),
            (function (e, t, n, i) {
              e !== t
                ? (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
                  i.push({
                    i: n.push(r(n) + 'rotate(', null, o) - 2,
                    x: (0, Fe.Z)(e, t),
                  }))
                : t && n.push(r(n) + 'rotate(' + t + o);
            })(i.rotate, a.rotate, s, c),
            (function (e, t, n, i) {
              e !== t
                ? i.push({
                    i: n.push(r(n) + 'skewX(', null, o) - 2,
                    x: (0, Fe.Z)(e, t),
                  })
                : t && n.push(r(n) + 'skewX(' + t + o);
            })(i.skewX, a.skewX, s, c),
            (function (e, t, n, o, i, a) {
              if (e !== n || t !== o) {
                var s = i.push(r(i) + 'scale(', null, ',', null, ')');
                a.push(
                  { i: s - 4, x: (0, Fe.Z)(e, n) },
                  { i: s - 2, x: (0, Fe.Z)(t, o) },
                );
              } else
                (1 === n && 1 === o) ||
                  i.push(r(i) + 'scale(' + n + ',' + o + ')');
            })(i.scaleX, i.scaleY, a.scaleX, a.scaleY, s, c),
            (i = a = null),
            function (e) {
              for (var t, n = -1, o = c.length; ++n < o; )
                s[(t = c[n]).i] = t.x(e);
              return s.join('');
            }
          );
        };
      }
      var Qe = Ue(
          function (e) {
            var t = new (
              'function' == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
            )(e + '');
            return t.isIdentity ? qe : Ge(t.a, t.b, t.c, t.d, t.e, t.f);
          },
          'px, ',
          'px)',
          'deg)',
        ),
        Je = Ue(
          function (e) {
            return null == e
              ? qe
              : (Ye ||
                  (Ye = document.createElementNS(
                    'http://www.w3.org/2000/svg',
                    'g',
                  )),
                Ye.setAttribute('transform', e),
                (e = Ye.transform.baseVal.consolidate())
                  ? Ge((e = e.matrix).a, e.b, e.c, e.d, e.e, e.f)
                  : qe);
          },
          ', ',
          ')',
          ')',
        );
      function et(e, t) {
        var n, o;
        return function () {
          var r = He(this, e),
            i = r.tween;
          if (i !== n)
            for (var a = 0, s = (o = n = i).length; a < s; ++a)
              if (o[a].name === t) {
                (o = o.slice()).splice(a, 1);
                break;
              }
          r.tween = o;
        };
      }
      function tt(e, t, n) {
        var o, r;
        if ('function' != typeof n) throw new Error();
        return function () {
          var i = He(this, e),
            a = i.tween;
          if (a !== o) {
            r = (o = a).slice();
            for (var s = { name: t, value: n }, c = 0, l = r.length; c < l; ++c)
              if (r[c].name === t) {
                r[c] = s;
                break;
              }
            c === l && r.push(s);
          }
          i.tween = r;
        };
      }
      function nt(e, t, n) {
        var o = e._id;
        return (
          e.each(function () {
            var e = He(this, o);
            (e.value || (e.value = {}))[t] = n.apply(this, arguments);
          }),
          function (e) {
            return Xe(e, o).value[t];
          }
        );
      }
      var ot = n(96683),
        rt = n(47844),
        it = n(20823);
      function at(e, t) {
        var n;
        return (
          'number' == typeof t
            ? Fe.Z
            : t instanceof ot.ZP
              ? rt.ZP
              : (n = (0, ot.ZP)(t))
                ? ((t = n), rt.ZP)
                : it.Z
        )(e, t);
      }
      function st(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function ct(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function lt(e, t, n) {
        var o,
          r,
          i = n + '';
        return function () {
          var a = this.getAttribute(e);
          return a === i ? null : a === o ? r : (r = t((o = a), n));
        };
      }
      function ut(e, t, n) {
        var o,
          r,
          i = n + '';
        return function () {
          var a = this.getAttributeNS(e.space, e.local);
          return a === i ? null : a === o ? r : (r = t((o = a), n));
        };
      }
      function dt(e, t, n) {
        var o, r, i;
        return function () {
          var a,
            s,
            c = n(this);
          if (null != c)
            return (a = this.getAttribute(e)) === (s = c + '')
              ? null
              : a === o && s === r
                ? i
                : ((r = s), (i = t((o = a), c)));
          this.removeAttribute(e);
        };
      }
      function ft(e, t, n) {
        var o, r, i;
        return function () {
          var a,
            s,
            c = n(this);
          if (null != c)
            return (a = this.getAttributeNS(e.space, e.local)) === (s = c + '')
              ? null
              : a === o && s === r
                ? i
                : ((r = s), (i = t((o = a), c)));
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function ht(e, t) {
        var n, o;
        function r() {
          var r = t.apply(this, arguments);
          return (
            r !== o &&
              (n =
                (o = r) &&
                (function (e, t) {
                  return function (n) {
                    this.setAttributeNS(e.space, e.local, t.call(this, n));
                  };
                })(e, r)),
            n
          );
        }
        return (r._value = t), r;
      }
      function pt(e, t) {
        var n, o;
        function r() {
          var r = t.apply(this, arguments);
          return (
            r !== o &&
              (n =
                (o = r) &&
                (function (e, t) {
                  return function (n) {
                    this.setAttribute(e, t.call(this, n));
                  };
                })(e, r)),
            n
          );
        }
        return (r._value = t), r;
      }
      function gt(e, t) {
        return function () {
          Ze(this, e).delay = +t.apply(this, arguments);
        };
      }
      function mt(e, t) {
        return (
          (t = +t),
          function () {
            Ze(this, e).delay = t;
          }
        );
      }
      function yt(e, t) {
        return function () {
          He(this, e).duration = +t.apply(this, arguments);
        };
      }
      function vt(e, t) {
        return (
          (t = +t),
          function () {
            He(this, e).duration = t;
          }
        );
      }
      var wt = me.prototype.constructor;
      function xt(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      var bt = 0;
      function St(e, t, n, o) {
        (this._groups = e),
          (this._parents = t),
          (this._name = n),
          (this._id = o);
      }
      function _t() {
        return ++bt;
      }
      var kt = me.prototype;
      St.prototype = function (e) {
        return me().transition(e);
      }.prototype = {
        constructor: St,
        select: function (e) {
          var t = this._name,
            n = this._id;
          'function' != typeof e && (e = i(e));
          for (
            var o = this._groups, r = o.length, a = new Array(r), s = 0;
            s < r;
            ++s
          )
            for (
              var c,
                l,
                u = o[s],
                d = u.length,
                f = (a[s] = new Array(d)),
                h = 0;
              h < d;
              ++h
            )
              (c = u[h]) &&
                (l = e.call(c, c.__data__, h, u)) &&
                ('__data__' in c && (l.__data__ = c.__data__),
                (f[h] = l),
                Ve(f[h], t, n, h, f, Xe(c, n)));
          return new St(a, this._parents, t, n);
        },
        selectAll: function (e) {
          var t = this._name,
            n = this._id;
          'function' != typeof e && (e = s(e));
          for (
            var o = this._groups, r = o.length, i = [], a = [], c = 0;
            c < r;
            ++c
          )
            for (var l, u = o[c], d = u.length, f = 0; f < d; ++f)
              if ((l = u[f])) {
                for (
                  var h,
                    p = e.call(l, l.__data__, f, u),
                    g = Xe(l, n),
                    m = 0,
                    y = p.length;
                  m < y;
                  ++m
                )
                  (h = p[m]) && Ve(h, t, n, m, p, g);
                i.push(p), a.push(l);
              }
          return new St(i, a, t, n);
        },
        selectChild: kt.selectChild,
        selectChildren: kt.selectChildren,
        filter: function (e) {
          'function' != typeof e && (e = l(e));
          for (
            var t = this._groups, n = t.length, o = new Array(n), r = 0;
            r < n;
            ++r
          )
            for (
              var i, a = t[r], s = a.length, c = (o[r] = []), u = 0;
              u < s;
              ++u
            )
              (i = a[u]) && e.call(i, i.__data__, u, a) && c.push(i);
          return new St(o, this._parents, this._name, this._id);
        },
        merge: function (e) {
          if (e._id !== this._id) throw new Error();
          for (
            var t = this._groups,
              n = e._groups,
              o = t.length,
              r = n.length,
              i = Math.min(o, r),
              a = new Array(o),
              s = 0;
            s < i;
            ++s
          )
            for (
              var c,
                l = t[s],
                u = n[s],
                d = l.length,
                f = (a[s] = new Array(d)),
                h = 0;
              h < d;
              ++h
            )
              (c = l[h] || u[h]) && (f[h] = c);
          for (; s < o; ++s) a[s] = t[s];
          return new St(a, this._parents, this._name, this._id);
        },
        selection: function () {
          return new wt(this._groups, this._parents);
        },
        transition: function () {
          for (
            var e = this._name,
              t = this._id,
              n = _t(),
              o = this._groups,
              r = o.length,
              i = 0;
            i < r;
            ++i
          )
            for (var a, s = o[i], c = s.length, l = 0; l < c; ++l)
              if ((a = s[l])) {
                var u = Xe(a, t);
                Ve(a, e, n, l, s, {
                  time: u.time + u.delay + u.duration,
                  delay: 0,
                  duration: u.duration,
                  ease: u.ease,
                });
              }
          return new St(o, this._parents, e, n);
        },
        call: kt.call,
        nodes: kt.nodes,
        node: kt.node,
        size: kt.size,
        empty: kt.empty,
        each: kt.each,
        on: function (e, t) {
          var n = this._id;
          return arguments.length < 2
            ? Xe(this.node(), n).on.on(e)
            : this.each(
                (function (e, t, n) {
                  var o,
                    r,
                    i = (function (e) {
                      return (e + '')
                        .trim()
                        .split(/^|\s+/)
                        .every(function (e) {
                          var t = e.indexOf('.');
                          return (
                            t >= 0 && (e = e.slice(0, t)), !e || 'start' === e
                          );
                        });
                    })(t)
                      ? Ze
                      : He;
                  return function () {
                    var a = i(this, e),
                      s = a.on;
                    s !== o && (r = (o = s).copy()).on(t, n), (a.on = r);
                  };
                })(n, e, t),
              );
        },
        attr: function (e, t) {
          var n = k(e),
            o = 'transform' === n ? Je : at;
          return this.attrTween(
            e,
            'function' == typeof t
              ? (n.local ? ft : dt)(n, o, nt(this, 'attr.' + e, t))
              : null == t
                ? (n.local ? ct : st)(n)
                : (n.local ? ut : lt)(n, o, t),
          );
        },
        attrTween: function (e, t) {
          var n = 'attr.' + e;
          if (arguments.length < 2) return (n = this.tween(n)) && n._value;
          if (null == t) return this.tween(n, null);
          if ('function' != typeof t) throw new Error();
          var o = k(e);
          return this.tween(n, (o.local ? ht : pt)(o, t));
        },
        style: function (e, t, n) {
          var o = 'transform' == (e += '') ? Qe : at;
          return null == t
            ? this.styleTween(
                e,
                (function (e, t) {
                  var n, o, r;
                  return function () {
                    var i = R(this, e),
                      a = (this.style.removeProperty(e), R(this, e));
                    return i === a
                      ? null
                      : i === n && a === o
                        ? r
                        : (r = t((n = i), (o = a)));
                  };
                })(e, o),
              ).on('end.style.' + e, xt(e))
            : 'function' == typeof t
              ? this.styleTween(
                  e,
                  (function (e, t, n) {
                    var o, r, i;
                    return function () {
                      var a = R(this, e),
                        s = n(this),
                        c = s + '';
                      return (
                        null == s &&
                          (this.style.removeProperty(e), (c = s = R(this, e))),
                        a === c
                          ? null
                          : a === o && c === r
                            ? i
                            : ((r = c), (i = t((o = a), s)))
                      );
                    };
                  })(e, o, nt(this, 'style.' + e, t)),
                ).each(
                  (function (e, t) {
                    var n,
                      o,
                      r,
                      i,
                      a = 'style.' + t,
                      s = 'end.' + a;
                    return function () {
                      var c = He(this, e),
                        l = c.on,
                        u = null == c.value[a] ? i || (i = xt(t)) : void 0;
                      (l === n && r === u) ||
                        (o = (n = l).copy()).on(s, (r = u)),
                        (c.on = o);
                    };
                  })(this._id, e),
                )
              : this.styleTween(
                  e,
                  (function (e, t, n) {
                    var o,
                      r,
                      i = n + '';
                    return function () {
                      var a = R(this, e);
                      return a === i ? null : a === o ? r : (r = t((o = a), n));
                    };
                  })(e, o, t),
                  n,
                ).on('end.style.' + e, null);
        },
        styleTween: function (e, t, n) {
          var o = 'style.' + (e += '');
          if (arguments.length < 2) return (o = this.tween(o)) && o._value;
          if (null == t) return this.tween(o, null);
          if ('function' != typeof t) throw new Error();
          return this.tween(
            o,
            (function (e, t, n) {
              var o, r;
              function i() {
                var i = t.apply(this, arguments);
                return (
                  i !== r &&
                    (o =
                      (r = i) &&
                      (function (e, t, n) {
                        return function (o) {
                          this.style.setProperty(e, t.call(this, o), n);
                        };
                      })(e, i, n)),
                  o
                );
              }
              return (i._value = t), i;
            })(e, t, null == n ? '' : n),
          );
        },
        text: function (e) {
          return this.tween(
            'text',
            'function' == typeof e
              ? (function (e) {
                  return function () {
                    var t = e(this);
                    this.textContent = null == t ? '' : t;
                  };
                })(nt(this, 'text', e))
              : (function (e) {
                  return function () {
                    this.textContent = e;
                  };
                })(null == e ? '' : e + ''),
          );
        },
        textTween: function (e) {
          var t = 'text';
          if (arguments.length < 1) return (t = this.tween(t)) && t._value;
          if (null == e) return this.tween(t, null);
          if ('function' != typeof e) throw new Error();
          return this.tween(
            t,
            (function (e) {
              var t, n;
              function o() {
                var o = e.apply(this, arguments);
                return (
                  o !== n &&
                    (t =
                      (n = o) &&
                      (function (e) {
                        return function (t) {
                          this.textContent = e.call(this, t);
                        };
                      })(o)),
                  t
                );
              }
              return (o._value = e), o;
            })(e),
          );
        },
        remove: function () {
          return this.on(
            'end.remove',
            (function (e) {
              return function () {
                var t = this.parentNode;
                for (var n in this.__transition) if (+n !== e) return;
                t && t.removeChild(this);
              };
            })(this._id),
          );
        },
        tween: function (e, t) {
          var n = this._id;
          if (((e += ''), arguments.length < 2)) {
            for (
              var o, r = Xe(this.node(), n).tween, i = 0, a = r.length;
              i < a;
              ++i
            )
              if ((o = r[i]).name === e) return o.value;
            return null;
          }
          return this.each((null == t ? et : tt)(n, e, t));
        },
        delay: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(('function' == typeof e ? gt : mt)(t, e))
            : Xe(this.node(), t).delay;
        },
        duration: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(('function' == typeof e ? yt : vt)(t, e))
            : Xe(this.node(), t).duration;
        },
        ease: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(
                (function (e, t) {
                  if ('function' != typeof t) throw new Error();
                  return function () {
                    He(this, e).ease = t;
                  };
                })(t, e),
              )
            : Xe(this.node(), t).ease;
        },
        easeVarying: function (e) {
          if ('function' != typeof e) throw new Error();
          return this.each(
            (function (e, t) {
              return function () {
                var n = t.apply(this, arguments);
                if ('function' != typeof n) throw new Error();
                He(this, e).ease = n;
              };
            })(this._id, e),
          );
        },
        end: function () {
          var e,
            t,
            n = this,
            o = n._id,
            r = n.size();
          return new Promise(function (i, a) {
            var s = { value: a },
              c = {
                value: function () {
                  0 == --r && i();
                },
              };
            n.each(function () {
              var n = He(this, o),
                r = n.on;
              r !== e &&
                ((t = (e = r).copy())._.cancel.push(s),
                t._.interrupt.push(s),
                t._.end.push(c)),
                (n.on = t);
            }),
              0 === r && i();
          });
        },
        [Symbol.iterator]: kt[Symbol.iterator],
      };
      var Et = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (e) {
          return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
        },
      };
      function Ct(e, t) {
        for (var n; !(n = e.__transition) || !(n = n[t]); )
          if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
        return n;
      }
      (me.prototype.interrupt = function (e) {
        return this.each(function () {
          We(this, e);
        });
      }),
        (me.prototype.transition = function (e) {
          var t, n;
          e instanceof St
            ? ((t = e._id), (e = e._name))
            : ((t = _t()),
              ((n = Et).time = (0, De.zO)()),
              (e = null == e ? null : e + ''));
          for (var o = this._groups, r = o.length, i = 0; i < r; ++i)
            for (var a, s = o[i], c = s.length, l = 0; l < c; ++l)
              (a = s[l]) && Ve(a, e, t, l, s, n || Ct(a, t));
          return new St(o, this._parents, e, t);
        });
      var Mt = (e) => () => e;
      function Nt(e, { sourceEvent: t, target: n, transform: o, dispatch: r }) {
        Object.defineProperties(this, {
          type: { value: e, enumerable: !0, configurable: !0 },
          sourceEvent: { value: t, enumerable: !0, configurable: !0 },
          target: { value: n, enumerable: !0, configurable: !0 },
          transform: { value: o, enumerable: !0, configurable: !0 },
          _: { value: r },
        });
      }
      function Pt(e, t, n) {
        (this.k = e), (this.x = t), (this.y = n);
      }
      Pt.prototype = {
        constructor: Pt,
        scale: function (e) {
          return 1 === e ? this : new Pt(this.k * e, this.x, this.y);
        },
        translate: function (e, t) {
          return (0 === e) & (0 === t)
            ? this
            : new Pt(this.k, this.x + this.k * e, this.y + this.k * t);
        },
        apply: function (e) {
          return [e[0] * this.k + this.x, e[1] * this.k + this.y];
        },
        applyX: function (e) {
          return e * this.k + this.x;
        },
        applyY: function (e) {
          return e * this.k + this.y;
        },
        invert: function (e) {
          return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
        },
        invertX: function (e) {
          return (e - this.x) / this.k;
        },
        invertY: function (e) {
          return (e - this.y) / this.k;
        },
        rescaleX: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertX, this).map(e.invert, e));
        },
        rescaleY: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertY, this).map(e.invert, e));
        },
        toString: function () {
          return (
            'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')'
          );
        },
      };
      var It = new Pt(1, 0, 0);
      function Ot(e) {
        for (; !e.__zoom; ) if (!(e = e.parentNode)) return It;
        return e.__zoom;
      }
      function zt(e) {
        e.stopImmediatePropagation();
      }
      function At(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
      function Dt(e) {
        return !((e.ctrlKey && 'wheel' !== e.type) || e.button);
      }
      function Rt() {
        var e = this;
        return e instanceof SVGElement
          ? (e = e.ownerSVGElement || e).hasAttribute('viewBox')
            ? [
                [(e = e.viewBox.baseVal).x, e.y],
                [e.x + e.width, e.y + e.height],
              ]
            : [
                [0, 0],
                [e.width.baseVal.value, e.height.baseVal.value],
              ]
          : [
              [0, 0],
              [e.clientWidth, e.clientHeight],
            ];
      }
      function jt() {
        return this.__zoom || It;
      }
      function $t(e) {
        return (
          -e.deltaY *
          (1 === e.deltaMode ? 0.05 : e.deltaMode ? 1 : 0.002) *
          (e.ctrlKey ? 10 : 1)
        );
      }
      function Lt() {
        return navigator.maxTouchPoints || 'ontouchstart' in this;
      }
      function Tt(e, t, n) {
        var o = e.invertX(t[0][0]) - n[0][0],
          r = e.invertX(t[1][0]) - n[1][0],
          i = e.invertY(t[0][1]) - n[0][1],
          a = e.invertY(t[1][1]) - n[1][1];
        return e.translate(
          r > o ? (o + r) / 2 : Math.min(0, o) || Math.max(0, r),
          a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a),
        );
      }
      function Bt() {
        var e,
          t,
          n,
          r = Dt,
          i = Rt,
          a = Tt,
          s = $t,
          c = Lt,
          l = [0, 1 / 0],
          u = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          d = 250,
          f = Ae,
          h = (0, o.Z)('start', 'zoom', 'end'),
          p = 0,
          g = 10;
        function m(e) {
          e.property('__zoom', jt)
            .on('wheel.zoom', _, { passive: !1 })
            .on('mousedown.zoom', k)
            .on('dblclick.zoom', E)
            .filter(c)
            .on('touchstart.zoom', C)
            .on('touchmove.zoom', M)
            .on('touchend.zoom touchcancel.zoom', N)
            .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
        }
        function y(e, t) {
          return (t = Math.max(l[0], Math.min(l[1], t))) === e.k
            ? e
            : new Pt(t, e.x, e.y);
        }
        function v(e, t, n) {
          var o = t[0] - n[0] * e.k,
            r = t[1] - n[1] * e.k;
          return o === e.x && r === e.y ? e : new Pt(e.k, o, r);
        }
        function w(e) {
          return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
        }
        function x(e, t, n, o) {
          e.on('start.zoom', function () {
            b(this, arguments).event(o).start();
          })
            .on('interrupt.zoom end.zoom', function () {
              b(this, arguments).event(o).end();
            })
            .tween('zoom', function () {
              var e = this,
                r = arguments,
                a = b(e, r).event(o),
                s = i.apply(e, r),
                c =
                  null == n ? w(s) : 'function' == typeof n ? n.apply(e, r) : n,
                l = Math.max(s[1][0] - s[0][0], s[1][1] - s[0][1]),
                u = e.__zoom,
                d = 'function' == typeof t ? t.apply(e, r) : t,
                h = f(u.invert(c).concat(l / u.k), d.invert(c).concat(l / d.k));
              return function (e) {
                if (1 === e) e = d;
                else {
                  var t = h(e),
                    n = l / t[2];
                  e = new Pt(n, c[0] - t[0] * n, c[1] - t[1] * n);
                }
                a.zoom(null, e);
              };
            });
        }
        function b(e, t, n) {
          return (!n && e.__zooming) || new S(e, t);
        }
        function S(e, t) {
          (this.that = e),
            (this.args = t),
            (this.active = 0),
            (this.sourceEvent = null),
            (this.extent = i.apply(e, t)),
            (this.taps = 0);
        }
        function _(e, ...t) {
          if (r.apply(this, arguments)) {
            var n = b(this, t).event(e),
              o = this.__zoom,
              i = Math.max(
                l[0],
                Math.min(l[1], o.k * Math.pow(2, s.apply(this, arguments))),
              ),
              c = ve(e);
            if (n.wheel)
              (n.mouse[0][0] === c[0] && n.mouse[0][1] === c[1]) ||
                (n.mouse[1] = o.invert((n.mouse[0] = c))),
                clearTimeout(n.wheel);
            else {
              if (o.k === i) return;
              (n.mouse = [c, o.invert(c)]), We(this), n.start();
            }
            At(e),
              (n.wheel = setTimeout(function () {
                (n.wheel = null), n.end();
              }, 150)),
              n.zoom(
                'mouse',
                a(v(y(o, i), n.mouse[0], n.mouse[1]), n.extent, u),
              );
          }
        }
        function k(e, ...t) {
          if (!n && r.apply(this, arguments)) {
            var o = e.currentTarget,
              i = b(this, t, !0).event(e),
              s = ye(e.view)
                .on(
                  'mousemove.zoom',
                  function (e) {
                    if ((At(e), !i.moved)) {
                      var t = e.clientX - l,
                        n = e.clientY - d;
                      i.moved = t * t + n * n > p;
                    }
                    i.event(e).zoom(
                      'mouse',
                      a(
                        v(i.that.__zoom, (i.mouse[0] = ve(e, o)), i.mouse[1]),
                        i.extent,
                        u,
                      ),
                    );
                  },
                  !0,
                )
                .on(
                  'mouseup.zoom',
                  function (e) {
                    s.on('mousemove.zoom mouseup.zoom', null),
                      ke(e.view, i.moved),
                      At(e),
                      i.event(e).end();
                  },
                  !0,
                ),
              c = ve(e, o),
              l = e.clientX,
              d = e.clientY;
            _e(e.view),
              zt(e),
              (i.mouse = [c, this.__zoom.invert(c)]),
              We(this),
              i.start();
          }
        }
        function E(e, ...t) {
          if (r.apply(this, arguments)) {
            var n = this.__zoom,
              o = ve(e.changedTouches ? e.changedTouches[0] : e, this),
              s = n.invert(o),
              c = n.k * (e.shiftKey ? 0.5 : 2),
              l = a(v(y(n, c), o, s), i.apply(this, t), u);
            At(e),
              d > 0
                ? ye(this).transition().duration(d).call(x, l, o, e)
                : ye(this).call(m.transform, l, o, e);
          }
        }
        function C(n, ...o) {
          if (r.apply(this, arguments)) {
            var i,
              a,
              s,
              c,
              l = n.touches,
              u = l.length,
              d = b(this, o, n.changedTouches.length === u).event(n);
            for (zt(n), a = 0; a < u; ++a)
              (c = [
                (c = ve((s = l[a]), this)),
                this.__zoom.invert(c),
                s.identifier,
              ]),
                d.touch0
                  ? d.touch1 ||
                    d.touch0[2] === c[2] ||
                    ((d.touch1 = c), (d.taps = 0))
                  : ((d.touch0 = c), (i = !0), (d.taps = 1 + !!e));
            e && (e = clearTimeout(e)),
              i &&
                (d.taps < 2 &&
                  ((t = c[0]),
                  (e = setTimeout(function () {
                    e = null;
                  }, 500))),
                We(this),
                d.start());
          }
        }
        function M(e, ...t) {
          if (this.__zooming) {
            var n,
              o,
              r,
              i,
              s = b(this, t).event(e),
              c = e.changedTouches,
              l = c.length;
            for (At(e), n = 0; n < l; ++n)
              (r = ve((o = c[n]), this)),
                s.touch0 && s.touch0[2] === o.identifier
                  ? (s.touch0[0] = r)
                  : s.touch1 &&
                    s.touch1[2] === o.identifier &&
                    (s.touch1[0] = r);
            if (((o = s.that.__zoom), s.touch1)) {
              var d = s.touch0[0],
                f = s.touch0[1],
                h = s.touch1[0],
                p = s.touch1[1],
                g = (g = h[0] - d[0]) * g + (g = h[1] - d[1]) * g,
                m = (m = p[0] - f[0]) * m + (m = p[1] - f[1]) * m;
              (o = y(o, Math.sqrt(g / m))),
                (r = [(d[0] + h[0]) / 2, (d[1] + h[1]) / 2]),
                (i = [(f[0] + p[0]) / 2, (f[1] + p[1]) / 2]);
            } else {
              if (!s.touch0) return;
              (r = s.touch0[0]), (i = s.touch0[1]);
            }
            s.zoom('touch', a(v(o, r, i), s.extent, u));
          }
        }
        function N(e, ...o) {
          if (this.__zooming) {
            var r,
              i,
              a = b(this, o).event(e),
              s = e.changedTouches,
              c = s.length;
            for (
              zt(e),
                n && clearTimeout(n),
                n = setTimeout(function () {
                  n = null;
                }, 500),
                r = 0;
              r < c;
              ++r
            )
              (i = s[r]),
                a.touch0 && a.touch0[2] === i.identifier
                  ? delete a.touch0
                  : a.touch1 && a.touch1[2] === i.identifier && delete a.touch1;
            if (
              (a.touch1 &&
                !a.touch0 &&
                ((a.touch0 = a.touch1), delete a.touch1),
              a.touch0)
            )
              a.touch0[1] = this.__zoom.invert(a.touch0[0]);
            else if (
              (a.end(),
              2 === a.taps &&
                ((i = ve(i, this)), Math.hypot(t[0] - i[0], t[1] - i[1]) < g))
            ) {
              var l = ye(this).on('dblclick.zoom');
              l && l.apply(this, arguments);
            }
          }
        }
        return (
          (m.transform = function (e, t, n, o) {
            var r = e.selection ? e.selection() : e;
            r.property('__zoom', jt),
              e !== r
                ? x(e, t, n, o)
                : r.interrupt().each(function () {
                    b(this, arguments)
                      .event(o)
                      .start()
                      .zoom(
                        null,
                        'function' == typeof t ? t.apply(this, arguments) : t,
                      )
                      .end();
                  });
          }),
          (m.scaleBy = function (e, t, n, o) {
            m.scaleTo(
              e,
              function () {
                return (
                  this.__zoom.k *
                  ('function' == typeof t ? t.apply(this, arguments) : t)
                );
              },
              n,
              o,
            );
          }),
          (m.scaleTo = function (e, t, n, o) {
            m.transform(
              e,
              function () {
                var e = i.apply(this, arguments),
                  o = this.__zoom,
                  r =
                    null == n
                      ? w(e)
                      : 'function' == typeof n
                        ? n.apply(this, arguments)
                        : n,
                  s = o.invert(r),
                  c = 'function' == typeof t ? t.apply(this, arguments) : t;
                return a(v(y(o, c), r, s), e, u);
              },
              n,
              o,
            );
          }),
          (m.translateBy = function (e, t, n, o) {
            m.transform(
              e,
              function () {
                return a(
                  this.__zoom.translate(
                    'function' == typeof t ? t.apply(this, arguments) : t,
                    'function' == typeof n ? n.apply(this, arguments) : n,
                  ),
                  i.apply(this, arguments),
                  u,
                );
              },
              null,
              o,
            );
          }),
          (m.translateTo = function (e, t, n, o, r) {
            m.transform(
              e,
              function () {
                var e = i.apply(this, arguments),
                  r = this.__zoom,
                  s =
                    null == o
                      ? w(e)
                      : 'function' == typeof o
                        ? o.apply(this, arguments)
                        : o;
                return a(
                  It.translate(s[0], s[1])
                    .scale(r.k)
                    .translate(
                      'function' == typeof t ? -t.apply(this, arguments) : -t,
                      'function' == typeof n ? -n.apply(this, arguments) : -n,
                    ),
                  e,
                  u,
                );
              },
              o,
              r,
            );
          }),
          (S.prototype = {
            event: function (e) {
              return e && (this.sourceEvent = e), this;
            },
            start: function () {
              return (
                1 == ++this.active &&
                  ((this.that.__zooming = this), this.emit('start')),
                this
              );
            },
            zoom: function (e, t) {
              return (
                this.mouse &&
                  'mouse' !== e &&
                  (this.mouse[1] = t.invert(this.mouse[0])),
                this.touch0 &&
                  'touch' !== e &&
                  (this.touch0[1] = t.invert(this.touch0[0])),
                this.touch1 &&
                  'touch' !== e &&
                  (this.touch1[1] = t.invert(this.touch1[0])),
                (this.that.__zoom = t),
                this.emit('zoom'),
                this
              );
            },
            end: function () {
              return (
                0 == --this.active &&
                  (delete this.that.__zooming, this.emit('end')),
                this
              );
            },
            emit: function (e) {
              var t = ye(this.that).datum();
              h.call(
                e,
                this.that,
                new Nt(e, {
                  sourceEvent: this.sourceEvent,
                  target: m,
                  type: e,
                  transform: this.that.__zoom,
                  dispatch: h,
                }),
                t,
              );
            },
          }),
          (m.wheelDelta = function (e) {
            return arguments.length
              ? ((s = 'function' == typeof e ? e : Mt(+e)), m)
              : s;
          }),
          (m.filter = function (e) {
            return arguments.length
              ? ((r = 'function' == typeof e ? e : Mt(!!e)), m)
              : r;
          }),
          (m.touchable = function (e) {
            return arguments.length
              ? ((c = 'function' == typeof e ? e : Mt(!!e)), m)
              : c;
          }),
          (m.extent = function (e) {
            return arguments.length
              ? ((i =
                  'function' == typeof e
                    ? e
                    : Mt([
                        [+e[0][0], +e[0][1]],
                        [+e[1][0], +e[1][1]],
                      ])),
                m)
              : i;
          }),
          (m.scaleExtent = function (e) {
            return arguments.length
              ? ((l[0] = +e[0]), (l[1] = +e[1]), m)
              : [l[0], l[1]];
          }),
          (m.translateExtent = function (e) {
            return arguments.length
              ? ((u[0][0] = +e[0][0]),
                (u[1][0] = +e[1][0]),
                (u[0][1] = +e[0][1]),
                (u[1][1] = +e[1][1]),
                m)
              : [
                  [u[0][0], u[0][1]],
                  [u[1][0], u[1][1]],
                ];
          }),
          (m.constrain = function (e) {
            return arguments.length ? ((a = e), m) : a;
          }),
          (m.duration = function (e) {
            return arguments.length ? ((d = +e), m) : d;
          }),
          (m.interpolate = function (e) {
            return arguments.length ? ((f = e), m) : f;
          }),
          (m.on = function () {
            var e = h.on.apply(h, arguments);
            return e === h ? m : e;
          }),
          (m.clickDistance = function (e) {
            return arguments.length ? ((p = (e = +e) * e), m) : Math.sqrt(p);
          }),
          (m.tapDistance = function (e) {
            return arguments.length ? ((g = +e), m) : g;
          }),
          m
        );
      }
      Ot.prototype = Pt.prototype;
      const Vt = {
          error001: () =>
            '[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001',
          error002: () =>
            "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
          error003: (e) =>
            `Node type "${e}" not found. Using fallback type "default".`,
          error004: () =>
            'The React Flow parent container needs a width and a height to render the graph.',
          error005: () => 'Only child nodes can use a parent extent.',
          error006: () =>
            "Can't create edge. An edge needs a source and a target.",
          error007: (e) => `The old edge with id=${e} does not exist.`,
          error009: (e) => `Marker type "${e}" doesn't exist.`,
          error008: (e, { id: t, sourceHandle: n, targetHandle: o }) =>
            `Couldn't create edge for ${e} handle id: "${'source' === e ? n : o}", edge id: ${t}.`,
          error010: () =>
            'Handle: No node id found. Make sure to only use a Handle inside a custom Node.',
          error011: (e) =>
            `Edge type "${e}" not found. Using fallback type "default".`,
          error012: (e) =>
            `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
          error013: (e = 'react') =>
            `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
        },
        Zt = [
          [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
          [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
        ],
        Ht = ['Enter', ' ', 'Escape'];
      var Xt, Wt, Yt;
      !(function (e) {
        (e.Strict = 'strict'), (e.Loose = 'loose');
      })(Xt || (Xt = {})),
        (function (e) {
          (e.Free = 'free'),
            (e.Vertical = 'vertical'),
            (e.Horizontal = 'horizontal');
        })(Wt || (Wt = {})),
        (function (e) {
          (e.Partial = 'partial'), (e.Full = 'full');
        })(Yt || (Yt = {}));
      const Ft = {
        inProgress: !1,
        isValid: null,
        from: null,
        fromHandle: null,
        fromPosition: null,
        fromNode: null,
        to: null,
        toHandle: null,
        toPosition: null,
        toNode: null,
      };
      var Kt, qt, Gt;
      !(function (e) {
        (e.Bezier = 'default'),
          (e.Straight = 'straight'),
          (e.Step = 'step'),
          (e.SmoothStep = 'smoothstep'),
          (e.SimpleBezier = 'simplebezier');
      })(Kt || (Kt = {})),
        (function (e) {
          (e.Arrow = 'arrow'), (e.ArrowClosed = 'arrowclosed');
        })(qt || (qt = {})),
        (function (e) {
          (e.Left = 'left'),
            (e.Top = 'top'),
            (e.Right = 'right'),
            (e.Bottom = 'bottom');
        })(Gt || (Gt = {}));
      const Ut = {
        [Gt.Left]: Gt.Right,
        [Gt.Right]: Gt.Left,
        [Gt.Top]: Gt.Bottom,
        [Gt.Bottom]: Gt.Top,
      };
      function Qt(e) {
        return null === e ? null : e ? 'valid' : 'invalid';
      }
      const Jt = (e) => 'id' in e && 'source' in e && 'target' in e,
        en = (e) =>
          'id' in e && 'position' in e && !('source' in e) && !('target' in e),
        tn = (e) =>
          'id' in e && 'internals' in e && !('source' in e) && !('target' in e),
        nn = (e, t = [0, 0]) => {
          const { width: n, height: o } = An(e),
            r = e.origin ?? t,
            i = n * r[0],
            a = o * r[1];
          return { x: e.position.x - i, y: e.position.y - a };
        },
        on = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
          if (0 === e.length) return { x: 0, y: 0, width: 0, height: 0 };
          const n = e.reduce(
            (e, n) => {
              const o = 'string' == typeof n;
              let r = t.nodeLookup || o ? void 0 : n;
              t.nodeLookup &&
                (r = o
                  ? t.nodeLookup.get(n)
                  : tn(n)
                    ? n
                    : t.nodeLookup.get(n.id));
              const i = r ? bn(r, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
              return yn(e, i);
            },
            { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
          );
          return wn(n);
        },
        rn = (e, t = {}) => {
          if (0 === e.size) return { x: 0, y: 0, width: 0, height: 0 };
          let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
          return (
            e.forEach((e) => {
              if (void 0 === t.filter || t.filter(e)) {
                const t = bn(e);
                n = yn(n, t);
              }
            }),
            wn(n)
          );
        },
        an = (e, t, [n, o, r] = [0, 0, 1], i = !1, a = !1) => {
          const s = {
              ...Nn(t, [n, o, r]),
              width: t.width / r,
              height: t.height / r,
            },
            c = [];
          for (const t of e.values()) {
            const { measured: e, selectable: n = !0, hidden: o = !1 } = t;
            if ((a && !n) || o) continue;
            const r = e.width ?? t.width ?? t.initialWidth ?? null,
              l = e.height ?? t.height ?? t.initialHeight ?? null,
              u = _n(s, xn(t)),
              d = (r ?? 0) * (l ?? 0),
              f = i && u > 0;
            (!t.internals.handleBounds || f || u >= d || t.dragging) &&
              c.push(t);
          }
          return c;
        },
        sn = (e, t) => {
          const n = new Set();
          return (
            e.forEach((e) => {
              n.add(e.id);
            }),
            t.filter((e) => n.has(e.source) || n.has(e.target))
          );
        };
      function cn(e, t) {
        const n = new Map(),
          o = t?.nodes ? new Set(t.nodes.map((e) => e.id)) : null;
        return (
          e.forEach((e) => {
            !(
              e.measured.width &&
              e.measured.height &&
              (t?.includeHiddenNodes || !e.hidden)
            ) ||
              (o && !o.has(e.id)) ||
              n.set(e.id, e);
          }),
          n
        );
      }
      async function ln(
        { nodes: e, width: t, height: n, panZoom: o, minZoom: r, maxZoom: i },
        a,
      ) {
        if (0 === e.size) return Promise.resolve(!1);
        const s = rn(e),
          c = In(s, t, n, a?.minZoom ?? r, a?.maxZoom ?? i, a?.padding ?? 0.1);
        return (
          await o.setViewport(c, { duration: a?.duration }), Promise.resolve(!0)
        );
      }
      function un({
        nodeId: e,
        nextPosition: t,
        nodeLookup: n,
        nodeOrigin: o = [0, 0],
        nodeExtent: r,
        onError: i,
      }) {
        const a = n.get(e),
          s = a.parentId ? n.get(a.parentId) : void 0,
          { x: c, y: l } = s ? s.internals.positionAbsolute : { x: 0, y: 0 },
          u = a.origin ?? o;
        let d = r;
        if ('parent' !== a.extent || a.expandParent)
          s &&
            zn(a.extent) &&
            (d = [
              [a.extent[0][0] + c, a.extent[0][1] + l],
              [a.extent[1][0] + c, a.extent[1][1] + l],
            ]);
        else if (s) {
          const e = s.measured.width,
            t = s.measured.height;
          e &&
            t &&
            (d = [
              [c, l],
              [c + e, l + t],
            ]);
        } else i?.('005', Vt.error005());
        const f = zn(d) ? hn(t, d, a.measured) : t;
        return {
          position: {
            x: f.x - c + a.measured.width * u[0],
            y: f.y - l + a.measured.height * u[1],
          },
          positionAbsolute: f,
        };
      }
      async function dn({
        nodesToRemove: e = [],
        edgesToRemove: t = [],
        nodes: n,
        edges: o,
        onBeforeDelete: r,
      }) {
        const i = new Set(e.map((e) => e.id)),
          a = [];
        for (const e of n) {
          if (!1 === e.deletable) continue;
          const t = i.has(e.id),
            n = !t && e.parentId && a.find((t) => t.id === e.parentId);
          (t || n) && a.push(e);
        }
        const s = new Set(t.map((e) => e.id)),
          c = o.filter((e) => !1 !== e.deletable),
          l = sn(a, c);
        for (const e of c) {
          s.has(e.id) && !l.find((t) => t.id === e.id) && l.push(e);
        }
        if (!r) return { edges: l, nodes: a };
        const u = await r({ nodes: a, edges: l });
        return 'boolean' == typeof u
          ? u
            ? { edges: l, nodes: a }
            : { edges: [], nodes: [] }
          : u;
      }
      const fn = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
        hn = (e = { x: 0, y: 0 }, t, n) => ({
          x: fn(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
          y: fn(e.y, t[0][1], t[1][1] - (n?.height ?? 0)),
        });
      function pn(e, t, n) {
        const { width: o, height: r } = An(n),
          { x: i, y: a } = n.internals.positionAbsolute;
        return hn(
          e,
          [
            [i, a],
            [i + o, a + r],
          ],
          t,
        );
      }
      const gn = (e, t, n) =>
          e < t
            ? fn(Math.abs(e - t), 1, t) / t
            : e > n
              ? -fn(Math.abs(e - n), 1, t) / t
              : 0,
        mn = (e, t, n = 15, o = 40) => [
          gn(e.x, o, t.width - o) * n,
          gn(e.y, o, t.height - o) * n,
        ],
        yn = (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          x2: Math.max(e.x2, t.x2),
          y2: Math.max(e.y2, t.y2),
        }),
        vn = ({ x: e, y: t, width: n, height: o }) => ({
          x: e,
          y: t,
          x2: e + n,
          y2: t + o,
        }),
        wn = ({ x: e, y: t, x2: n, y2: o }) => ({
          x: e,
          y: t,
          width: n - e,
          height: o - t,
        }),
        xn = (e, t = [0, 0]) => {
          const { x: n, y: o } = tn(e)
            ? e.internals.positionAbsolute
            : nn(e, t);
          return {
            x: n,
            y: o,
            width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
            height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0,
          };
        },
        bn = (e, t = [0, 0]) => {
          const { x: n, y: o } = tn(e)
            ? e.internals.positionAbsolute
            : nn(e, t);
          return {
            x: n,
            y: o,
            x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
            y2: o + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0),
          };
        },
        Sn = (e, t) => wn(yn(vn(e), vn(t))),
        _n = (e, t) => {
          const n = Math.max(
              0,
              Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x),
            ),
            o = Math.max(
              0,
              Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y),
            );
          return Math.ceil(n * o);
        },
        kn = (e) => En(e.width) && En(e.height) && En(e.x) && En(e.y),
        En = (e) => !isNaN(e) && isFinite(e),
        Cn = (e, t) => {
          0;
        },
        Mn = (e, t = [1, 1]) => ({
          x: t[0] * Math.round(e.x / t[0]),
          y: t[1] * Math.round(e.y / t[1]),
        }),
        Nn = ({ x: e, y: t }, [n, o, r], i = !1, a = [1, 1]) => {
          const s = { x: (e - n) / r, y: (t - o) / r };
          return i ? Mn(s, a) : s;
        },
        Pn = ({ x: e, y: t }, [n, o, r]) => ({ x: e * r + n, y: t * r + o }),
        In = (e, t, n, o, r, i) => {
          const a = t / (e.width * (1 + i)),
            s = n / (e.height * (1 + i)),
            c = Math.min(a, s),
            l = fn(c, o, r);
          return {
            x: t / 2 - (e.x + e.width / 2) * l,
            y: n / 2 - (e.y + e.height / 2) * l,
            zoom: l,
          };
        },
        On = () =>
          'undefined' != typeof navigator &&
          navigator?.userAgent?.indexOf('Mac') >= 0;
      function zn(e) {
        return void 0 !== e && 'parent' !== e;
      }
      function An(e) {
        return {
          width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
          height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0,
        };
      }
      function Dn(e) {
        return (
          void 0 !== (e.measured?.width ?? e.width ?? e.initialWidth) &&
          void 0 !== (e.measured?.height ?? e.height ?? e.initialHeight)
        );
      }
      function Rn(e, t = { width: 0, height: 0 }, n, o, r) {
        const i = { ...e },
          a = o.get(n);
        if (a) {
          const e = a.origin || r;
          (i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * e[0]),
            (i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * e[1]);
        }
        return i;
      }
      function jn(
        e,
        {
          snapGrid: t = [0, 0],
          snapToGrid: n = !1,
          transform: o,
          containerBounds: r,
        },
      ) {
        const { x: i, y: a } = Zn(e),
          s = Nn({ x: i - (r?.left ?? 0), y: a - (r?.top ?? 0) }, o),
          { x: c, y: l } = n ? Mn(s, t) : s;
        return { xSnapped: c, ySnapped: l, ...s };
      }
      const $n = (e) => ({ width: e.offsetWidth, height: e.offsetHeight }),
        Ln = (e) => e.getRootNode?.() || window?.document,
        Tn = ['INPUT', 'SELECT', 'TEXTAREA'];
      function Bn(e) {
        const t = e.composedPath?.()?.[0] || e.target;
        return (
          Tn.includes(t?.nodeName) ||
          t?.hasAttribute?.('contenteditable') ||
          !!t?.closest('.nokey')
        );
      }
      const Vn = (e) => 'clientX' in e,
        Zn = (e, t) => {
          const n = Vn(e),
            o = n ? e.clientX : e.touches?.[0].clientX,
            r = n ? e.clientY : e.touches?.[0].clientY;
          return { x: o - (t?.left ?? 0), y: r - (t?.top ?? 0) };
        },
        Hn = (e, t, n, o, r) => {
          const i = t.querySelectorAll(`.${e}`);
          return i && i.length
            ? Array.from(i).map((t) => {
                const i = t.getBoundingClientRect();
                return {
                  id: t.getAttribute('data-handleid'),
                  type: e,
                  nodeId: r,
                  position: t.getAttribute('data-handlepos'),
                  x: (i.left - n.left) / o,
                  y: (i.top - n.top) / o,
                  ...$n(t),
                };
              })
            : null;
        };
      function Xn({
        sourceX: e,
        sourceY: t,
        targetX: n,
        targetY: o,
        sourceControlX: r,
        sourceControlY: i,
        targetControlX: a,
        targetControlY: s,
      }) {
        const c = 0.125 * e + 0.375 * r + 0.375 * a + 0.125 * n,
          l = 0.125 * t + 0.375 * i + 0.375 * s + 0.125 * o;
        return [c, l, Math.abs(c - e), Math.abs(l - t)];
      }
      function Wn(e, t) {
        return e >= 0 ? 0.5 * e : 25 * t * Math.sqrt(-e);
      }
      function Yn({ pos: e, x1: t, y1: n, x2: o, y2: r, c: i }) {
        switch (e) {
          case Gt.Left:
            return [t - Wn(t - o, i), n];
          case Gt.Right:
            return [t + Wn(o - t, i), n];
          case Gt.Top:
            return [t, n - Wn(n - r, i)];
          case Gt.Bottom:
            return [t, n + Wn(r - n, i)];
        }
      }
      function Fn({
        sourceX: e,
        sourceY: t,
        sourcePosition: n = Gt.Bottom,
        targetX: o,
        targetY: r,
        targetPosition: i = Gt.Top,
        curvature: a = 0.25,
      }) {
        const [s, c] = Yn({ pos: n, x1: e, y1: t, x2: o, y2: r, c: a }),
          [l, u] = Yn({ pos: i, x1: o, y1: r, x2: e, y2: t, c: a }),
          [d, f, h, p] = Xn({
            sourceX: e,
            sourceY: t,
            targetX: o,
            targetY: r,
            sourceControlX: s,
            sourceControlY: c,
            targetControlX: l,
            targetControlY: u,
          });
        return [`M${e},${t} C${s},${c} ${l},${u} ${o},${r}`, d, f, h, p];
      }
      function Kn({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
        const r = Math.abs(n - e) / 2,
          i = n < e ? n + r : n - r,
          a = Math.abs(o - t) / 2;
        return [i, o < t ? o + a : o - a, r, a];
      }
      function qn({
        sourceNode: e,
        targetNode: t,
        selected: n = !1,
        zIndex: o = 0,
        elevateOnSelect: r = !1,
      }) {
        if (!r) return o;
        const i = n || t.selected || e.selected,
          a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
        return o + (i ? a : 0);
      }
      function Gn({
        sourceNode: e,
        targetNode: t,
        width: n,
        height: o,
        transform: r,
      }) {
        const i = yn(bn(e), bn(t));
        i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
        const a = {
          x: -r[0] / r[2],
          y: -r[1] / r[2],
          width: n / r[2],
          height: o / r[2],
        };
        return _n(a, wn(i)) > 0;
      }
      const Un = ({ source: e, sourceHandle: t, target: n, targetHandle: o }) =>
          `xy-edge__${e}${t || ''}-${n}${o || ''}`,
        Qn = (e, t) => {
          if (!e.source || !e.target) return Cn('006', Vt.error006()), t;
          let n;
          return (
            (n = Jt(e) ? { ...e } : { ...e, id: Un(e) }),
            ((e, t) =>
              t.some(
                (t) =>
                  !(
                    t.source !== e.source ||
                    t.target !== e.target ||
                    (t.sourceHandle !== e.sourceHandle &&
                      (t.sourceHandle || e.sourceHandle)) ||
                    (t.targetHandle !== e.targetHandle &&
                      (t.targetHandle || e.targetHandle))
                  ),
              ))(n, t)
              ? t
              : (null === n.sourceHandle && delete n.sourceHandle,
                null === n.targetHandle && delete n.targetHandle,
                t.concat(n))
          );
        };
      function Jn({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
        const [r, i, a, s] = Kn({
          sourceX: e,
          sourceY: t,
          targetX: n,
          targetY: o,
        });
        return [`M ${e},${t}L ${n},${o}`, r, i, a, s];
      }
      const eo = {
          [Gt.Left]: { x: -1, y: 0 },
          [Gt.Right]: { x: 1, y: 0 },
          [Gt.Top]: { x: 0, y: -1 },
          [Gt.Bottom]: { x: 0, y: 1 },
        },
        to = ({ source: e, sourcePosition: t = Gt.Bottom, target: n }) =>
          t === Gt.Left || t === Gt.Right
            ? e.x < n.x
              ? { x: 1, y: 0 }
              : { x: -1, y: 0 }
            : e.y < n.y
              ? { x: 0, y: 1 }
              : { x: 0, y: -1 },
        no = (e, t) =>
          Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      function oo({
        sourceX: e,
        sourceY: t,
        sourcePosition: n = Gt.Bottom,
        targetX: o,
        targetY: r,
        targetPosition: i = Gt.Top,
        borderRadius: a = 5,
        centerX: s,
        centerY: c,
        offset: l = 20,
      }) {
        const [u, d, f, h, p] = (function ({
            source: e,
            sourcePosition: t = Gt.Bottom,
            target: n,
            targetPosition: o = Gt.Top,
            center: r,
            offset: i,
          }) {
            const a = eo[t],
              s = eo[o],
              c = { x: e.x + a.x * i, y: e.y + a.y * i },
              l = { x: n.x + s.x * i, y: n.y + s.y * i },
              u = to({ source: c, sourcePosition: t, target: l }),
              d = 0 !== u.x ? 'x' : 'y',
              f = u[d];
            let h,
              p,
              g = [];
            const m = { x: 0, y: 0 },
              y = { x: 0, y: 0 },
              [v, w, x, b] = Kn({
                sourceX: e.x,
                sourceY: e.y,
                targetX: n.x,
                targetY: n.y,
              });
            if (a[d] * s[d] == -1) {
              (h = r.x ?? v), (p = r.y ?? w);
              const e = [
                  { x: h, y: c.y },
                  { x: h, y: l.y },
                ],
                t = [
                  { x: c.x, y: p },
                  { x: l.x, y: p },
                ];
              g = a[d] === f ? ('x' === d ? e : t) : 'x' === d ? t : e;
            } else {
              const r = [{ x: c.x, y: l.y }],
                u = [{ x: l.x, y: c.y }];
              if (
                ((g = 'x' === d ? (a.x === f ? u : r) : a.y === f ? r : u),
                t === o)
              ) {
                const t = Math.abs(e[d] - n[d]);
                if (t <= i) {
                  const o = Math.min(i - 1, i - t);
                  a[d] === f
                    ? (m[d] = (c[d] > e[d] ? -1 : 1) * o)
                    : (y[d] = (l[d] > n[d] ? -1 : 1) * o);
                }
              }
              if (t !== o) {
                const e = 'x' === d ? 'y' : 'x',
                  t = a[d] === s[e],
                  n = c[e] > l[e],
                  o = c[e] < l[e];
                ((1 === a[d] && ((!t && n) || (t && o))) ||
                  (1 !== a[d] && ((!t && o) || (t && n)))) &&
                  (g = 'x' === d ? r : u);
              }
              const v = { x: c.x + m.x, y: c.y + m.y },
                w = { x: l.x + y.x, y: l.y + y.y };
              Math.max(Math.abs(v.x - g[0].x), Math.abs(w.x - g[0].x)) >=
              Math.max(Math.abs(v.y - g[0].y), Math.abs(w.y - g[0].y))
                ? ((h = (v.x + w.x) / 2), (p = g[0].y))
                : ((h = g[0].x), (p = (v.y + w.y) / 2));
            }
            return [
              [
                e,
                { x: c.x + m.x, y: c.y + m.y },
                ...g,
                { x: l.x + y.x, y: l.y + y.y },
                n,
              ],
              h,
              p,
              x,
              b,
            ];
          })({
            source: { x: e, y: t },
            sourcePosition: n,
            target: { x: o, y: r },
            targetPosition: i,
            center: { x: s, y: c },
            offset: l,
          }),
          g = u.reduce((e, t, n) => {
            let o = '';
            return (
              (o =
                n > 0 && n < u.length - 1
                  ? (function (e, t, n, o) {
                      const r = Math.min(no(e, t) / 2, no(t, n) / 2, o),
                        { x: i, y: a } = t;
                      if ((e.x === i && i === n.x) || (e.y === a && a === n.y))
                        return `L${i} ${a}`;
                      if (e.y === a)
                        return `L ${i + r * (e.x < n.x ? -1 : 1)},${a}Q ${i},${a} ${i},${a + r * (e.y < n.y ? 1 : -1)}`;
                      const s = e.x < n.x ? 1 : -1;
                      return `L ${i},${a + r * (e.y < n.y ? -1 : 1)}Q ${i},${a} ${i + r * s},${a}`;
                    })(u[n - 1], t, u[n + 1], a)
                  : `${0 === n ? 'M' : 'L'}${t.x} ${t.y}`),
              (e += o)
            );
          }, '');
        return [g, d, f, h, p];
      }
      function ro(e) {
        return (
          e &&
          !(!e.internals.handleBounds && !e.handles?.length) &&
          !!(e.measured.width || e.width || e.initialWidth)
        );
      }
      function io(e) {
        const { sourceNode: t, targetNode: n } = e;
        if (!ro(t) || !ro(n)) return null;
        const o = t.internals.handleBounds || ao(t.handles),
          r = n.internals.handleBounds || ao(n.handles),
          i = co(o?.source ?? [], e.sourceHandle),
          a = co(
            e.connectionMode === Xt.Strict
              ? r?.target ?? []
              : (r?.target ?? []).concat(r?.source ?? []),
            e.targetHandle,
          );
        if (!i || !a)
          return (
            e.onError?.(
              '008',
              Vt.error008(i ? 'target' : 'source', {
                id: e.id,
                sourceHandle: e.sourceHandle,
                targetHandle: e.targetHandle,
              }),
            ),
            null
          );
        const s = i?.position || Gt.Bottom,
          c = a?.position || Gt.Top,
          l = so(t, i, s),
          u = so(n, a, c);
        return {
          sourceX: l.x,
          sourceY: l.y,
          targetX: u.x,
          targetY: u.y,
          sourcePosition: s,
          targetPosition: c,
        };
      }
      function ao(e) {
        if (!e) return null;
        const t = [],
          n = [];
        for (const o of e)
          (o.width = o.width ?? 1),
            (o.height = o.height ?? 1),
            'source' === o.type ? t.push(o) : 'target' === o.type && n.push(o);
        return { source: t, target: n };
      }
      function so(e, t, n = Gt.Left, o = !1) {
        const r = (t?.x ?? 0) + e.internals.positionAbsolute.x,
          i = (t?.y ?? 0) + e.internals.positionAbsolute.y,
          { width: a, height: s } = t ?? An(e);
        if (o) return { x: r + a / 2, y: i + s / 2 };
        switch (t?.position ?? n) {
          case Gt.Top:
            return { x: r + a / 2, y: i };
          case Gt.Right:
            return { x: r + a, y: i + s / 2 };
          case Gt.Bottom:
            return { x: r + a / 2, y: i + s };
          case Gt.Left:
            return { x: r, y: i + s / 2 };
        }
      }
      function co(e, t) {
        return (e && (t ? e.find((e) => e.id === t) : e[0])) || null;
      }
      function lo(e, t) {
        if (!e) return '';
        if ('string' == typeof e) return e;
        return `${t ? `${t}__` : ''}${Object.keys(e)
          .sort()
          .map((t) => `${t}=${e[t]}`)
          .join('&')}`;
      }
      function uo(
        e,
        { id: t, defaultColor: n, defaultMarkerStart: o, defaultMarkerEnd: r },
      ) {
        const i = new Set();
        return e
          .reduce(
            (e, a) => (
              [a.markerStart || o, a.markerEnd || r].forEach((o) => {
                if (o && 'object' == typeof o) {
                  const r = lo(o, t);
                  i.has(r) ||
                    (e.push({ id: r, color: o.color || n, ...o }), i.add(r));
                }
              }),
              e
            ),
            [],
          )
          .sort((e, t) => e.id.localeCompare(t.id));
      }
      function fo(e, t, n, o, r) {
        let i = 0.5;
        'start' === r ? (i = 0) : 'end' === r && (i = 1);
        let a = [(e.x + e.width * i) * t.zoom + t.x, e.y * t.zoom + t.y - o],
          s = [-100 * i, -100];
        switch (n) {
          case Gt.Right:
            (a = [
              (e.x + e.width) * t.zoom + t.x + o,
              (e.y + e.height * i) * t.zoom + t.y,
            ]),
              (s = [0, -100 * i]);
            break;
          case Gt.Bottom:
            (a[1] = (e.y + e.height) * t.zoom + t.y + o), (s[1] = 0);
            break;
          case Gt.Left:
            (a = [e.x * t.zoom + t.x - o, (e.y + e.height * i) * t.zoom + t.y]),
              (s = [-100, -100 * i]);
        }
        return `translate(${a[0]}px, ${a[1]}px) translate(${s[0]}%, ${s[1]}%)`;
      }
      const ho = {
          nodeOrigin: [0, 0],
          nodeExtent: Zt,
          elevateNodesOnSelect: !0,
          defaults: {},
        },
        po = { ...ho, checkEquality: !0 };
      function go(e, t) {
        const n = { ...e };
        for (const e in t) void 0 !== t[e] && (n[e] = t[e]);
        return n;
      }
      function mo(e, t, n) {
        const o = go(ho, n);
        for (const n of e.values())
          if (n.parentId) vo(n, e, t, o);
          else {
            const e = nn(n, o.nodeOrigin),
              t = zn(n.extent) ? n.extent : o.nodeExtent,
              r = hn(e, t, An(n));
            n.internals.positionAbsolute = r;
          }
      }
      function yo(e, t, n, o) {
        const r = go(po, o),
          i = new Map(t),
          a = r?.elevateNodesOnSelect ? 1e3 : 0;
        t.clear(), n.clear();
        for (const s of e) {
          let e = i.get(s.id);
          if (r.checkEquality && s === e?.internals.userNode) t.set(s.id, e);
          else {
            const n = nn(s, r.nodeOrigin),
              o = zn(s.extent) ? s.extent : r.nodeExtent,
              i = hn(n, o, An(s));
            (e = {
              ...r.defaults,
              ...s,
              measured: {
                width: s.measured?.width,
                height: s.measured?.height,
              },
              internals: {
                positionAbsolute: i,
                handleBounds: s.measured ? e?.internals.handleBounds : void 0,
                z: wo(s, a),
                userNode: s,
              },
            }),
              t.set(s.id, e);
          }
          s.parentId && vo(e, t, n, o);
        }
      }
      function vo(e, t, n, o) {
        const {
            elevateNodesOnSelect: r,
            nodeOrigin: i,
            nodeExtent: a,
          } = go(ho, o),
          s = e.parentId,
          c = t.get(s);
        if (!c)
          return void console.warn(
            `Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`,
          );
        !(function (e, t) {
          if (!e.parentId) return;
          const n = t.get(e.parentId);
          n ? n.set(e.id, e) : t.set(e.parentId, new Map([[e.id, e]]));
        })(e, n);
        const l = r ? 1e3 : 0,
          {
            x: u,
            y: d,
            z: f,
          } = (function (e, t, n, o, r) {
            const { x: i, y: a } = t.internals.positionAbsolute,
              s = An(e),
              c = nn(e, n),
              l = zn(e.extent) ? hn(c, e.extent, s) : c;
            let u = hn({ x: i + l.x, y: a + l.y }, o, s);
            'parent' === e.extent && (u = pn(u, s, t));
            const d = wo(e, r),
              f = t.internals.z ?? 0;
            return { x: u.x, y: u.y, z: f > d ? f : d };
          })(e, c, i, a, l),
          { positionAbsolute: h } = e.internals,
          p = u !== h.x || d !== h.y;
        (p || f !== e.internals.z) &&
          (e.internals = {
            ...e.internals,
            positionAbsolute: p ? { x: u, y: d } : h,
            z: f,
          });
      }
      function wo(e, t) {
        return (En(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
      }
      function xo(e, t, n, o = [0, 0]) {
        const r = [],
          i = new Map();
        for (const n of e) {
          const e = t.get(n.parentId);
          if (!e) continue;
          const o = i.get(n.parentId)?.expandedRect ?? xn(e),
            r = Sn(o, n.rect);
          i.set(n.parentId, { expandedRect: r, parent: e });
        }
        return (
          i.size > 0 &&
            i.forEach(({ expandedRect: t, parent: i }, a) => {
              const s = i.internals.positionAbsolute,
                c = An(i),
                l = i.origin ?? o,
                u = t.x < s.x ? Math.round(Math.abs(s.x - t.x)) : 0,
                d = t.y < s.y ? Math.round(Math.abs(s.y - t.y)) : 0,
                f = Math.max(c.width, Math.round(t.width)),
                h = Math.max(c.height, Math.round(t.height)),
                p = (f - c.width) * l[0],
                g = (h - c.height) * l[1];
              (u > 0 || d > 0 || p || g) &&
                (r.push({
                  id: a,
                  type: 'position',
                  position: {
                    x: i.position.x - u + p,
                    y: i.position.y - d + g,
                  },
                }),
                n.get(a)?.forEach((t) => {
                  e.some((e) => e.id === t.id) ||
                    r.push({
                      id: t.id,
                      type: 'position',
                      position: { x: t.position.x + u, y: t.position.y + d },
                    });
                })),
                (c.width < t.width || c.height < t.height || u || d) &&
                  r.push({
                    id: a,
                    type: 'dimensions',
                    setAttributes: !0,
                    dimensions: {
                      width: f + (u ? l[0] * u - p : 0),
                      height: h + (d ? l[1] * d - g : 0),
                    },
                  });
            }),
          r
        );
      }
      function bo(e, t, n, o, r, i) {
        const a = o?.querySelector('.xyflow__viewport');
        let s = !1;
        if (!a) return { changes: [], updatedInternals: s };
        const c = [],
          l = window.getComputedStyle(a),
          { m22: u } = new window.DOMMatrixReadOnly(l.transform),
          d = [];
        for (const o of e.values()) {
          const e = t.get(o.id);
          if (e)
            if (e.hidden)
              (e.internals = { ...e.internals, handleBounds: void 0 }),
                (s = !0);
            else {
              const a = $n(o.nodeElement),
                l =
                  e.measured.width !== a.width ||
                  e.measured.height !== a.height;
              if (
                !(
                  !a.width ||
                  !a.height ||
                  (!l && e.internals.handleBounds && !o.force)
                )
              ) {
                const f = o.nodeElement.getBoundingClientRect(),
                  h = zn(e.extent) ? e.extent : i;
                let { positionAbsolute: p } = e.internals;
                e.parentId && 'parent' === e.extent
                  ? (p = pn(p, a, t.get(e.parentId)))
                  : h && (p = hn(p, h, a)),
                  (e.measured = a),
                  (e.internals = {
                    ...e.internals,
                    positionAbsolute: p,
                    handleBounds: {
                      source: Hn('source', o.nodeElement, f, u, e.id),
                      target: Hn('target', o.nodeElement, f, u, e.id),
                    },
                  }),
                  e.parentId && vo(e, t, n, { nodeOrigin: r }),
                  (s = !0),
                  l &&
                    (c.push({ id: e.id, type: 'dimensions', dimensions: a }),
                    e.expandParent &&
                      e.parentId &&
                      d.push({
                        id: e.id,
                        parentId: e.parentId,
                        rect: xn(e, r),
                      }));
              }
            }
        }
        if (d.length > 0) {
          const e = xo(d, t, n, r);
          c.push(...e);
        }
        return { changes: c, updatedInternals: s };
      }
      async function So({
        delta: e,
        panZoom: t,
        transform: n,
        translateExtent: o,
        width: r,
        height: i,
      }) {
        if (!t || (!e.x && !e.y)) return Promise.resolve(!1);
        const a = await t.setViewportConstrained(
            { x: n[0] + e.x, y: n[1] + e.y, zoom: n[2] },
            [
              [0, 0],
              [r, i],
            ],
            o,
          ),
          s = !!a && (a.x !== n[0] || a.y !== n[1] || a.k !== n[2]);
        return Promise.resolve(s);
      }
      function _o(e, t, n) {
        e.clear(), t.clear();
        for (const o of n) {
          const {
              source: n,
              target: r,
              sourceHandle: i = null,
              targetHandle: a = null,
            } = o,
            s = `${n}-source-${i}`,
            c = `${r}-target-${a}`,
            l = e.get(s) || new Map(),
            u = e.get(c) || new Map(),
            d = {
              edgeId: o.id,
              source: n,
              target: r,
              sourceHandle: i,
              targetHandle: a,
            };
          t.set(o.id, o),
            e.set(s, l.set(`${r}-${a}`, d)),
            e.set(c, u.set(`${n}-${i}`, d));
        }
      }
      function ko(e, t) {
        if (!e.parentId) return !1;
        const n = t.get(e.parentId);
        return !!n && (!!n.selected || ko(n, t));
      }
      function Eo(e, t, n) {
        let o = e;
        do {
          if (o?.matches(t)) return !0;
          if (o === n) return !1;
          o = o.parentElement;
        } while (o);
        return !1;
      }
      function Co({
        nodeId: e,
        dragItems: t,
        nodeLookup: n,
        dragging: o = !0,
      }) {
        const r = [];
        for (const [e, i] of t) {
          const t = n.get(e)?.internals.userNode;
          t && r.push({ ...t, position: i.position, dragging: o });
        }
        if (!e) return [r[0], r];
        const i = n.get(e)?.internals.userNode;
        return [
          i
            ? { ...i, position: t.get(e)?.position || i.position, dragging: o }
            : r[0],
          r,
        ];
      }
      function Mo({
        onNodeMouseDown: e,
        getStoreItems: t,
        onDragStart: n,
        onDrag: o,
        onDragStop: r,
      }) {
        let i = { x: null, y: null },
          a = 0,
          s = new Map(),
          c = !1,
          l = { x: 0, y: 0 },
          u = null,
          d = !1,
          f = null,
          h = !1;
        return {
          update: function ({
            noDragClassName: p,
            handleSelector: g,
            domNode: m,
            isSelectable: y,
            nodeId: v,
            nodeClickDistance: w = 0,
          }) {
            function x({ x: e, y: n }, r) {
              const {
                nodeLookup: a,
                nodeExtent: c,
                snapGrid: l,
                snapToGrid: u,
                nodeOrigin: d,
                onNodeDrag: f,
                onSelectionDrag: h,
                onError: p,
                updateNodePositions: g,
              } = t();
              i = { x: e, y: n };
              let m = !1,
                y = { x: 0, y: 0, x2: 0, y2: 0 };
              if (s.size > 1 && c) {
                const e = rn(s);
                y = vn(e);
              }
              for (const [t, o] of s) {
                if (!a.has(t)) continue;
                let r = { x: e - o.distance.x, y: n - o.distance.y };
                u && (r = Mn(r, l));
                let i = [
                  [c[0][0], c[0][1]],
                  [c[1][0], c[1][1]],
                ];
                if (s.size > 1 && c && !o.extent) {
                  const { positionAbsolute: e } = o.internals,
                    t = e.x - y.x + c[0][0],
                    n = e.x + o.measured.width - y.x2 + c[1][0];
                  i = [
                    [t, e.y - y.y + c[0][1]],
                    [n, e.y + o.measured.height - y.y2 + c[1][1]],
                  ];
                }
                const { position: f, positionAbsolute: h } = un({
                  nodeId: t,
                  nextPosition: r,
                  nodeLookup: a,
                  nodeExtent: i,
                  nodeOrigin: d,
                  onError: p,
                });
                (m = m || o.position.x !== f.x || o.position.y !== f.y),
                  (o.position = f),
                  (o.internals.positionAbsolute = h);
              }
              if (m && (g(s, !0), r && (o || f || (!v && h)))) {
                const [e, t] = Co({ nodeId: v, dragItems: s, nodeLookup: a });
                o?.(r, s, e, t), f?.(r, e, t), v || h?.(r, t);
              }
            }
            async function b() {
              if (!u) return;
              const { transform: e, panBy: n, autoPanSpeed: o } = t(),
                [r, s] = mn(l, u, o);
              (0 === r && 0 === s) ||
                ((i.x = (i.x ?? 0) - r / e[2]),
                (i.y = (i.y ?? 0) - s / e[2]),
                (await n({ x: r, y: s })) && x(i, null)),
                (a = requestAnimationFrame(b));
            }
            function S(o) {
              const {
                nodeLookup: r,
                multiSelectionActive: a,
                nodesDraggable: c,
                transform: l,
                snapGrid: f,
                snapToGrid: h,
                selectNodesOnDrag: p,
                onNodeDragStart: g,
                onSelectionDragStart: m,
                unselectNodesAndEdges: w,
              } = t();
              (d = !0),
                (p && y) || a || !v || r.get(v)?.selected || w(),
                y && p && v && e?.(v);
              const x = jn(o.sourceEvent, {
                transform: l,
                snapGrid: f,
                snapToGrid: h,
                containerBounds: u,
              });
              if (
                ((i = x),
                (s = (function (e, t, n, o) {
                  const r = new Map();
                  for (const [i, a] of e)
                    if (
                      (a.selected || a.id === o) &&
                      (!a.parentId || !ko(a, e)) &&
                      (a.draggable || (t && void 0 === a.draggable))
                    ) {
                      const t = e.get(i);
                      t &&
                        r.set(i, {
                          id: i,
                          position: t.position || { x: 0, y: 0 },
                          distance: {
                            x: n.x - t.internals.positionAbsolute.x,
                            y: n.y - t.internals.positionAbsolute.y,
                          },
                          extent: t.extent,
                          parentId: t.parentId,
                          origin: t.origin,
                          expandParent: t.expandParent,
                          internals: {
                            positionAbsolute: t.internals.positionAbsolute || {
                              x: 0,
                              y: 0,
                            },
                          },
                          measured: {
                            width: t.measured.width ?? 0,
                            height: t.measured.height ?? 0,
                          },
                        });
                    }
                  return r;
                })(r, c, x, v)),
                s.size > 0 && (n || g || (!v && m)))
              ) {
                const [e, t] = Co({ nodeId: v, dragItems: s, nodeLookup: r });
                n?.(o.sourceEvent, s, e, t),
                  g?.(o.sourceEvent, e, t),
                  v || m?.(o.sourceEvent, t);
              }
            }
            f = ye(m);
            const _ = Oe()
              .clickDistance(w)
              .on('start', (e) => {
                const {
                  domNode: n,
                  nodeDragThreshold: o,
                  transform: r,
                  snapGrid: a,
                  snapToGrid: s,
                } = t();
                (u = n?.getBoundingClientRect() || null),
                  (h = !1),
                  0 === o && S(e);
                const c = jn(e.sourceEvent, {
                  transform: r,
                  snapGrid: a,
                  snapToGrid: s,
                  containerBounds: u,
                });
                (i = c), (l = Zn(e.sourceEvent, u));
              })
              .on('drag', (e) => {
                const {
                    autoPanOnNodeDrag: n,
                    transform: o,
                    snapGrid: r,
                    snapToGrid: a,
                    nodeDragThreshold: f,
                    nodeLookup: p,
                  } = t(),
                  g = jn(e.sourceEvent, {
                    transform: o,
                    snapGrid: r,
                    snapToGrid: a,
                    containerBounds: u,
                  });
                if (
                  ((('touchmove' === e.sourceEvent.type &&
                    e.sourceEvent.touches.length > 1) ||
                    (v && !p.has(v))) &&
                    (h = !0),
                  !h)
                ) {
                  if ((!c && n && d && ((c = !0), b()), !d)) {
                    const t = g.xSnapped - (i.x ?? 0),
                      n = g.ySnapped - (i.y ?? 0);
                    Math.sqrt(t * t + n * n) > f && S(e);
                  }
                  (i.x !== g.xSnapped || i.y !== g.ySnapped) &&
                    s &&
                    d &&
                    ((l = Zn(e.sourceEvent, u)), x(g, e.sourceEvent));
                }
              })
              .on('end', (e) => {
                if (
                  d &&
                  !h &&
                  ((c = !1), (d = !1), cancelAnimationFrame(a), s.size > 0)
                ) {
                  const {
                    nodeLookup: n,
                    updateNodePositions: o,
                    onNodeDragStop: i,
                    onSelectionDragStop: a,
                  } = t();
                  if ((o(s, !1), r || i || (!v && a))) {
                    const [t, o] = Co({
                      nodeId: v,
                      dragItems: s,
                      nodeLookup: n,
                      dragging: !1,
                    });
                    r?.(e.sourceEvent, s, t, o),
                      i?.(e.sourceEvent, t, o),
                      v || a?.(e.sourceEvent, o);
                  }
                }
              })
              .filter((e) => {
                const t = e.target;
                return (
                  !e.button && (!p || !Eo(t, `.${p}`, m)) && (!g || Eo(t, g, m))
                );
              });
            f.call(_);
          },
          destroy: function () {
            f?.on('.drag', null);
          },
        };
      }
      function No(e, t, n, o) {
        let r = [],
          i = 1 / 0;
        const a = (function (e, t, n) {
          const o = [],
            r = { x: e.x - n, y: e.y - n, width: 2 * n, height: 2 * n };
          for (const e of t.values()) _n(r, xn(e)) > 0 && o.push(e);
          return o;
        })(e, n, t + 250);
        for (const n of a) {
          const a = [
            ...(n.internals.handleBounds?.source ?? []),
            ...(n.internals.handleBounds?.target ?? []),
          ];
          for (const s of a) {
            if (o.nodeId === s.nodeId && o.type === s.type && o.id === s.id)
              continue;
            const { x: a, y: c } = so(n, s, s.position, !0),
              l = Math.sqrt(Math.pow(a - e.x, 2) + Math.pow(c - e.y, 2));
            l > t ||
              (l < i
                ? ((r = [{ ...s, x: a, y: c }]), (i = l))
                : l === i && r.push({ ...s, x: a, y: c }));
          }
        }
        if (!r.length) return null;
        if (r.length > 1) {
          const e = 'source' === o.type ? 'target' : 'source';
          return r.find((t) => t.type === e) ?? r[0];
        }
        return r[0];
      }
      function Po(e, t, n, o, r, i = !1) {
        const a = o.get(e);
        if (!a) return null;
        const s =
            'strict' === r
              ? a.internals.handleBounds?.[t]
              : [
                  ...(a.internals.handleBounds?.source ?? []),
                  ...(a.internals.handleBounds?.target ?? []),
                ],
          c = (n ? s?.find((e) => e.id === n) : s?.[0]) ?? null;
        return c && i ? { ...c, ...so(a, c, c.position, !0) } : c;
      }
      function Io(e, t) {
        return (
          e ||
          (t?.classList.contains('target')
            ? 'target'
            : t?.classList.contains('source')
              ? 'source'
              : null)
        );
      }
      const Oo = () => !0;
      function zo(
        e,
        {
          handle: t,
          connectionMode: n,
          fromNodeId: o,
          fromHandleId: r,
          fromType: i,
          doc: a,
          lib: s,
          flowId: c,
          isValidConnection: l = Oo,
          nodeLookup: u,
        },
      ) {
        const d = 'target' === i,
          f = t
            ? a.querySelector(
                `.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`,
              )
            : null,
          { x: h, y: p } = Zn(e),
          g = a.elementFromPoint(h, p),
          m = g?.classList.contains(`${s}-flow__handle`) ? g : f,
          y = {
            handleDomNode: m,
            isValid: !1,
            connection: null,
            toHandle: null,
          };
        if (m) {
          const e = Io(void 0, m),
            t = m.getAttribute('data-nodeid'),
            i = m.getAttribute('data-handleid'),
            a = m.classList.contains('connectable'),
            s = m.classList.contains('connectableend');
          if (!t || !e) return y;
          const c = {
            source: d ? t : o,
            sourceHandle: d ? i : r,
            target: d ? o : t,
            targetHandle: d ? r : i,
          };
          y.connection = c;
          const f =
            a &&
            s &&
            (n === Xt.Strict
              ? (d && 'source' === e) || (!d && 'target' === e)
              : t !== o || i !== r);
          (y.isValid = f && l(c)), (y.toHandle = Po(t, e, i, u, n, !1));
        }
        return y;
      }
      const Ao = {
        onPointerDown: function (
          e,
          {
            connectionMode: t,
            connectionRadius: n,
            handleId: o,
            nodeId: r,
            edgeUpdaterType: i,
            isTarget: a,
            domNode: s,
            nodeLookup: c,
            lib: l,
            autoPanOnConnect: u,
            flowId: d,
            panBy: f,
            cancelConnection: h,
            onConnectStart: p,
            onConnect: g,
            onConnectEnd: m,
            isValidConnection: y = Oo,
            onReconnectEnd: v,
            updateConnection: w,
            getTransform: x,
            getFromHandle: b,
            autoPanSpeed: S,
          },
        ) {
          const _ = Ln(e.target);
          let k,
            E = 0;
          const { x: C, y: M } = Zn(e),
            N = _?.elementFromPoint(C, M),
            P = Io(i, N),
            I = s?.getBoundingClientRect();
          if (!I || !P) return;
          const O = Po(r, P, o, c, t);
          if (!O) return;
          let z = Zn(e, I),
            A = !1,
            D = null,
            R = !1,
            j = null;
          function $() {
            if (!u || !I) return;
            const [e, t] = mn(z, I, S);
            f({ x: e, y: t }), (E = requestAnimationFrame($));
          }
          const L = { ...O, nodeId: r, type: P, position: O.position },
            T = c.get(r),
            B = {
              inProgress: !0,
              isValid: null,
              from: so(T, L, Gt.Left, !0),
              fromHandle: L,
              fromPosition: L.position,
              fromNode: T,
              to: z,
              toHandle: null,
              toPosition: Ut[L.position],
              toNode: null,
            };
          w(B);
          let V = B;
          function Z(e) {
            if (!b() || !L) return void H(e);
            const i = x();
            (z = Zn(e, I)),
              (k = No(Nn(z, i, !1, [1, 1]), n, c, L)),
              A || ($(), (A = !0));
            const s = zo(e, {
              handle: k,
              connectionMode: t,
              fromNodeId: r,
              fromHandleId: o,
              fromType: a ? 'target' : 'source',
              isValidConnection: y,
              doc: _,
              lib: l,
              flowId: d,
              nodeLookup: c,
            });
            (j = s.handleDomNode),
              (D = s.connection),
              (R = (function (e, t) {
                let n = null;
                return t ? (n = !0) : e && !t && (n = !1), n;
              })(!!k, s.isValid));
            const u = {
              ...V,
              isValid: R,
              to: k && R ? Pn({ x: k.x, y: k.y }, i) : z,
              toHandle: s.toHandle,
              toPosition:
                R && s.toHandle ? s.toHandle.position : Ut[L.position],
              toNode: s.toHandle ? c.get(s.toHandle.nodeId) : null,
            };
            (R &&
              k &&
              V.toHandle &&
              u.toHandle &&
              V.toHandle.type === u.toHandle.type &&
              V.toHandle.nodeId === u.toHandle.nodeId &&
              V.toHandle.id === u.toHandle.id &&
              V.to.x === u.to.x &&
              V.to.y === u.to.y) ||
              (w(u), (V = u));
          }
          function H(e) {
            (k || j) && D && R && g?.(D);
            const { inProgress: t, ...n } = V,
              o = { ...n, toPosition: V.toHandle ? V.toPosition : null };
            m?.(e, o),
              i && v?.(e, o),
              h(),
              cancelAnimationFrame(E),
              (A = !1),
              (R = !1),
              (D = null),
              (j = null),
              _.removeEventListener('mousemove', Z),
              _.removeEventListener('mouseup', H),
              _.removeEventListener('touchmove', Z),
              _.removeEventListener('touchend', H);
          }
          p?.(e, { nodeId: r, handleId: o, handleType: P }),
            _.addEventListener('mousemove', Z),
            _.addEventListener('mouseup', H),
            _.addEventListener('touchmove', Z),
            _.addEventListener('touchend', H);
        },
        isValid: zo,
      };
      function Do({
        domNode: e,
        panZoom: t,
        getTransform: n,
        getViewScale: o,
      }) {
        const r = ye(e);
        return {
          update: function ({
            translateExtent: e,
            width: i,
            height: a,
            zoomStep: s = 10,
            pannable: c = !0,
            zoomable: l = !0,
            inversePan: u = !1,
          }) {
            let d = [0, 0];
            const f = Bt()
              .on('start', (e) => {
                ('mousedown' !== e.sourceEvent.type &&
                  'touchstart' !== e.sourceEvent.type) ||
                  (d = [
                    e.sourceEvent.clientX ?? e.sourceEvent.touches[0].clientX,
                    e.sourceEvent.clientY ?? e.sourceEvent.touches[0].clientY,
                  ]);
              })
              .on(
                'zoom',
                c
                  ? (r) => {
                      const s = n();
                      if (
                        ('mousemove' !== r.sourceEvent.type &&
                          'touchmove' !== r.sourceEvent.type) ||
                        !t
                      )
                        return;
                      const c = [
                          r.sourceEvent.clientX ??
                            r.sourceEvent.touches[0].clientX,
                          r.sourceEvent.clientY ??
                            r.sourceEvent.touches[0].clientY,
                        ],
                        l = [c[0] - d[0], c[1] - d[1]];
                      d = c;
                      const f =
                          o() * Math.max(s[2], Math.log(s[2])) * (u ? -1 : 1),
                        h = { x: s[0] - l[0] * f, y: s[1] - l[1] * f },
                        p = [
                          [0, 0],
                          [i, a],
                        ];
                      t.setViewportConstrained(
                        { x: h.x, y: h.y, zoom: s[2] },
                        p,
                        e,
                      );
                    }
                  : null,
              )
              .on(
                'zoom.wheel',
                l
                  ? (e) => {
                      const o = n();
                      if ('wheel' !== e.sourceEvent.type || !t) return;
                      const r =
                          -e.sourceEvent.deltaY *
                          (1 === e.sourceEvent.deltaMode
                            ? 0.05
                            : e.sourceEvent.deltaMode
                              ? 1
                              : 0.002) *
                          s,
                        i = o[2] * Math.pow(2, r);
                      t.scaleTo(i);
                    }
                  : null,
              );
            r.call(f, {});
          },
          destroy: function () {
            r.on('zoom', null);
          },
          pointer: ve,
        };
      }
      const Ro = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k,
        jo = (e) => ({ x: e.x, y: e.y, zoom: e.k }),
        $o = ({ x: e, y: t, zoom: n }) => It.translate(e, t).scale(n),
        Lo = (e, t) => e.target.closest(`.${t}`),
        To = (e, t) => 2 === t && Array.isArray(e) && e.includes(2),
        Bo = (e, t = 0, n = () => {}) => {
          const o = 'number' == typeof t && t > 0;
          return o || n(), o ? e.transition().duration(t).on('end', n) : e;
        },
        Vo = (e) => {
          const t = e.ctrlKey && On() ? 10 : 1;
          return (
            -e.deltaY * (1 === e.deltaMode ? 0.05 : e.deltaMode ? 1 : 0.002) * t
          );
        };
      function Zo({
        domNode: e,
        minZoom: t,
        maxZoom: n,
        paneClickDistance: o,
        translateExtent: r,
        viewport: i,
        onPanZoom: a,
        onPanZoomStart: s,
        onPanZoomEnd: c,
        onDraggingChange: l,
      }) {
        const u = {
            isZoomingOrPanning: !1,
            usedRightMouseButton: !1,
            prevViewport: { x: 0, y: 0, zoom: 0 },
            mouseButton: 0,
            timerId: void 0,
            panScrollTimeout: void 0,
            isPanScrolling: !1,
          },
          d = e.getBoundingClientRect(),
          f = Bt()
            .clickDistance(!En(o) || o < 0 ? 0 : o)
            .scaleExtent([t, n])
            .translateExtent(r),
          h = ye(e).call(f);
        v(
          { x: i.x, y: i.y, zoom: fn(i.zoom, t, n) },
          [
            [0, 0],
            [d.width, d.height],
          ],
          r,
        );
        const p = h.on('wheel.zoom'),
          g = h.on('dblclick.zoom');
        function m(e, t) {
          return h
            ? new Promise((n) => {
                f?.transform(
                  Bo(h, t?.duration, () => n(!0)),
                  e,
                );
              })
            : Promise.resolve(!1);
        }
        function y() {
          f.on('zoom', null);
        }
        async function v(e, t, n) {
          const o = $o(e),
            r = f?.constrain()(o, t, n);
          return r && (await m(r)), new Promise((e) => e(r));
        }
        return (
          f.wheelDelta(Vo),
          {
            update: function ({
              noWheelClassName: e,
              noPanClassName: t,
              onPaneContextMenu: n,
              userSelectionActive: o,
              panOnScroll: r,
              panOnDrag: i,
              panOnScrollMode: d,
              panOnScrollSpeed: m,
              preventScrolling: v,
              zoomOnPinch: w,
              zoomOnScroll: x,
              zoomOnDoubleClick: b,
              zoomActivationKeyPressed: S,
              lib: _,
              onTransformChange: k,
            }) {
              o && !u.isZoomingOrPanning && y();
              const E =
                r && !S && !o
                  ? (function ({
                      zoomPanValues: e,
                      noWheelClassName: t,
                      d3Selection: n,
                      d3Zoom: o,
                      panOnScrollMode: r,
                      panOnScrollSpeed: i,
                      zoomOnPinch: a,
                      onPanZoomStart: s,
                      onPanZoom: c,
                      onPanZoomEnd: l,
                    }) {
                      return (u) => {
                        if (Lo(u, t)) return !1;
                        u.preventDefault(), u.stopImmediatePropagation();
                        const d = n.property('__zoom').k || 1;
                        if (u.ctrlKey && a) {
                          const e = ve(u),
                            t = Vo(u),
                            r = d * Math.pow(2, t);
                          return void o.scaleTo(n, r, e, u);
                        }
                        const f = 1 === u.deltaMode ? 20 : 1;
                        let h = r === Wt.Vertical ? 0 : u.deltaX * f,
                          p = r === Wt.Horizontal ? 0 : u.deltaY * f;
                        !On() &&
                          u.shiftKey &&
                          r !== Wt.Vertical &&
                          ((h = u.deltaY * f), (p = 0)),
                          o.translateBy(n, (-h / d) * i, (-p / d) * i, {
                            internal: !0,
                          });
                        const g = jo(n.property('__zoom'));
                        clearTimeout(e.panScrollTimeout),
                          e.isPanScrolling ||
                            ((e.isPanScrolling = !0), s?.(u, g)),
                          e.isPanScrolling &&
                            (c?.(u, g),
                            (e.panScrollTimeout = setTimeout(() => {
                              l?.(u, g), (e.isPanScrolling = !1);
                            }, 150)));
                      };
                    })({
                      zoomPanValues: u,
                      noWheelClassName: e,
                      d3Selection: h,
                      d3Zoom: f,
                      panOnScrollMode: d,
                      panOnScrollSpeed: m,
                      zoomOnPinch: w,
                      onPanZoomStart: s,
                      onPanZoom: a,
                      onPanZoomEnd: c,
                    })
                  : (function ({
                      noWheelClassName: e,
                      preventScrolling: t,
                      d3ZoomHandler: n,
                    }) {
                      return function (o, r) {
                        if (
                          (!t && 'wheel' === o.type && !o.ctrlKey) ||
                          Lo(o, e)
                        )
                          return null;
                        o.preventDefault(), n.call(this, o, r);
                      };
                    })({
                      noWheelClassName: e,
                      preventScrolling: v,
                      d3ZoomHandler: p,
                    });
              if ((h.on('wheel.zoom', E, { passive: !1 }), !o)) {
                const e = (function ({
                  zoomPanValues: e,
                  onDraggingChange: t,
                  onPanZoomStart: n,
                }) {
                  return (o) => {
                    if (o.sourceEvent?.internal) return;
                    const r = jo(o.transform);
                    (e.mouseButton = o.sourceEvent?.button || 0),
                      (e.isZoomingOrPanning = !0),
                      (e.prevViewport = r),
                      'mousedown' === o.sourceEvent?.type && t(!0),
                      n && n?.(o.sourceEvent, r);
                  };
                })({
                  zoomPanValues: u,
                  onDraggingChange: l,
                  onPanZoomStart: s,
                });
                f.on('start', e);
                const t = (function ({
                  zoomPanValues: e,
                  panOnDrag: t,
                  onPaneContextMenu: n,
                  onTransformChange: o,
                  onPanZoom: r,
                }) {
                  return (i) => {
                    (e.usedRightMouseButton = !(
                      !n || !To(t, e.mouseButton ?? 0)
                    )),
                      i.sourceEvent?.sync ||
                        o([i.transform.x, i.transform.y, i.transform.k]),
                      r &&
                        !i.sourceEvent?.internal &&
                        r?.(i.sourceEvent, jo(i.transform));
                  };
                })({
                  zoomPanValues: u,
                  panOnDrag: i,
                  onPaneContextMenu: !!n,
                  onPanZoom: a,
                  onTransformChange: k,
                });
                f.on('zoom', t);
                const o = (function ({
                  zoomPanValues: e,
                  panOnDrag: t,
                  panOnScroll: n,
                  onDraggingChange: o,
                  onPanZoomEnd: r,
                  onPaneContextMenu: i,
                }) {
                  return (a) => {
                    if (
                      !a.sourceEvent?.internal &&
                      ((e.isZoomingOrPanning = !1),
                      i &&
                        To(t, e.mouseButton ?? 0) &&
                        !e.usedRightMouseButton &&
                        a.sourceEvent &&
                        i(a.sourceEvent),
                      (e.usedRightMouseButton = !1),
                      o(!1),
                      r && Ro(e.prevViewport, a.transform))
                    ) {
                      const t = jo(a.transform);
                      (e.prevViewport = t),
                        clearTimeout(e.timerId),
                        (e.timerId = setTimeout(
                          () => {
                            r?.(a.sourceEvent, t);
                          },
                          n ? 150 : 0,
                        ));
                    }
                  };
                })({
                  zoomPanValues: u,
                  panOnDrag: i,
                  panOnScroll: r,
                  onPaneContextMenu: n,
                  onPanZoomEnd: c,
                  onDraggingChange: l,
                });
                f.on('end', o);
              }
              const C = (function ({
                zoomActivationKeyPressed: e,
                zoomOnScroll: t,
                zoomOnPinch: n,
                panOnDrag: o,
                panOnScroll: r,
                zoomOnDoubleClick: i,
                userSelectionActive: a,
                noWheelClassName: s,
                noPanClassName: c,
                lib: l,
              }) {
                return (u) => {
                  const d = e || t,
                    f = n && u.ctrlKey;
                  if (
                    1 === u.button &&
                    'mousedown' === u.type &&
                    (Lo(u, `${l}-flow__node`) || Lo(u, `${l}-flow__edge`))
                  )
                    return !0;
                  if (!(o || d || r || i || n)) return !1;
                  if (a) return !1;
                  if (Lo(u, s) && 'wheel' === u.type) return !1;
                  if (
                    Lo(u, c) &&
                    ('wheel' !== u.type || (r && 'wheel' === u.type && !e))
                  )
                    return !1;
                  if (!n && u.ctrlKey && 'wheel' === u.type) return !1;
                  if (!n && 'touchstart' === u.type && u.touches?.length > 1)
                    return u.preventDefault(), !1;
                  if (!d && !r && !f && 'wheel' === u.type) return !1;
                  if (!o && ('mousedown' === u.type || 'touchstart' === u.type))
                    return !1;
                  if (
                    Array.isArray(o) &&
                    !o.includes(u.button) &&
                    'mousedown' === u.type
                  )
                    return !1;
                  const h =
                    (Array.isArray(o) && o.includes(u.button)) ||
                    !u.button ||
                    u.button <= 1;
                  return (!u.ctrlKey || 'wheel' === u.type) && h;
                };
              })({
                zoomActivationKeyPressed: S,
                panOnDrag: i,
                zoomOnScroll: x,
                panOnScroll: r,
                zoomOnDoubleClick: b,
                zoomOnPinch: w,
                userSelectionActive: o,
                noPanClassName: t,
                noWheelClassName: e,
                lib: _,
              });
              f.filter(C),
                b ? h.on('dblclick.zoom', g) : h.on('dblclick.zoom', null);
            },
            destroy: y,
            setViewport: async function (e, t) {
              const n = $o(e);
              return await m(n, t), new Promise((e) => e(n));
            },
            setViewportConstrained: v,
            getViewport: function () {
              const e = h ? Ot(h.node()) : { x: 0, y: 0, k: 1 };
              return { x: e.x, y: e.y, zoom: e.k };
            },
            scaleTo: function (e, t) {
              return h
                ? new Promise((n) => {
                    f?.scaleTo(
                      Bo(h, t?.duration, () => n(!0)),
                      e,
                    );
                  })
                : Promise.resolve(!1);
            },
            scaleBy: function (e, t) {
              return h
                ? new Promise((n) => {
                    f?.scaleBy(
                      Bo(h, t?.duration, () => n(!0)),
                      e,
                    );
                  })
                : Promise.resolve(!1);
            },
            setScaleExtent: function (e) {
              f?.scaleExtent(e);
            },
            setTranslateExtent: function (e) {
              f?.translateExtent(e);
            },
            syncViewport: function (e) {
              if (h) {
                const t = $o(e),
                  n = h.property('__zoom');
                (n.k === e.zoom && n.x === e.x && n.y === e.y) ||
                  f?.transform(h, t, null, { sync: !0 });
              }
            },
            setClickDistance: function (e) {
              const t = !En(e) || e < 0 ? 0 : e;
              f?.clickDistance(t);
            },
          }
        );
      }
      var Ho;
      !(function (e) {
        (e.Line = 'line'), (e.Handle = 'handle');
      })(Ho || (Ho = {}));
      function Xo(e, t) {
        return Math.max(0, t - e);
      }
      function Wo(e, t) {
        return Math.max(0, e - t);
      }
      function Yo(e, t, n) {
        return Math.max(0, t - e, e - n);
      }
      function Fo(e, t) {
        return e ? !t : t;
      }
      const Ko = { width: 0, height: 0, x: 0, y: 0 },
        qo = { ...Ko, pointerX: 0, pointerY: 0, aspectRatio: 1 };
      function Go(e, t, n) {
        const o = t.position.x + e.position.x,
          r = t.position.y + e.position.y,
          i = e.measured.width ?? 0,
          a = e.measured.height ?? 0,
          s = n[0] * i,
          c = n[1] * a;
        return [
          [o - s, r - c],
          [o + i - s, r + a - c],
        ];
      }
      function Uo({
        domNode: e,
        nodeId: t,
        getStoreItems: n,
        onChange: o,
        onEnd: r,
      }) {
        const i = ye(e);
        return {
          update: function ({
            controlPosition: e,
            boundaries: a,
            keepAspectRatio: s,
            onResizeStart: c,
            onResize: l,
            onResizeEnd: u,
            shouldResize: d,
          }) {
            let f = { ...Ko },
              h = { ...qo };
            const p = (function (e) {
              return {
                isHorizontal: e.includes('right') || e.includes('left'),
                isVertical: e.includes('bottom') || e.includes('top'),
                affectsX: e.includes('left'),
                affectsY: e.includes('top'),
              };
            })(e);
            let g,
              m,
              y,
              v,
              w = null,
              x = [];
            const b = Oe()
              .on('start', (e) => {
                const {
                  nodeLookup: o,
                  transform: r,
                  snapGrid: i,
                  snapToGrid: a,
                  nodeOrigin: s,
                  paneDomNode: l,
                } = n();
                if (((g = o.get(t)), !g)) return;
                w = l?.getBoundingClientRect() ?? null;
                const { xSnapped: u, ySnapped: d } = jn(e.sourceEvent, {
                  transform: r,
                  snapGrid: i,
                  snapToGrid: a,
                  containerBounds: w,
                });
                (f = {
                  width: g.measured.width ?? 0,
                  height: g.measured.height ?? 0,
                  x: g.position.x ?? 0,
                  y: g.position.y ?? 0,
                }),
                  (h = {
                    ...f,
                    pointerX: u,
                    pointerY: d,
                    aspectRatio: f.width / f.height,
                  }),
                  (m = void 0),
                  g.parentId &&
                    ('parent' === g.extent || g.expandParent) &&
                    ((m = o.get(g.parentId)),
                    (y =
                      m && 'parent' === g.extent
                        ? (function (e) {
                            return [
                              [0, 0],
                              [e.measured.width, e.measured.height],
                            ];
                          })(m)
                        : void 0)),
                  (x = []),
                  (v = void 0);
                for (const [e, n] of o)
                  if (
                    n.parentId === t &&
                    (x.push({
                      id: e,
                      position: { ...n.position },
                      extent: n.extent,
                    }),
                    'parent' === n.extent || n.expandParent)
                  ) {
                    const e = Go(n, g, n.origin ?? s);
                    v = v
                      ? [
                          [
                            Math.min(e[0][0], v[0][0]),
                            Math.min(e[0][1], v[0][1]),
                          ],
                          [
                            Math.max(e[1][0], v[1][0]),
                            Math.max(e[1][1], v[1][1]),
                          ],
                        ]
                      : e;
                  }
                c?.(e, { ...f });
              })
              .on('drag', (e) => {
                const {
                    transform: t,
                    snapGrid: r,
                    snapToGrid: i,
                    nodeOrigin: c,
                  } = n(),
                  u = jn(e.sourceEvent, {
                    transform: t,
                    snapGrid: r,
                    snapToGrid: i,
                    containerBounds: w,
                  }),
                  b = [];
                if (!g) return;
                const { x: S, y: _, width: k, height: E } = f,
                  C = {},
                  M = g.origin ?? c,
                  {
                    width: N,
                    height: P,
                    x: I,
                    y: O,
                  } = (function (e, t, n, o, r, i, a, s) {
                    let { affectsX: c, affectsY: l } = t;
                    const { isHorizontal: u, isVertical: d } = t,
                      f = u && d,
                      { xSnapped: h, ySnapped: p } = n,
                      {
                        minWidth: g,
                        maxWidth: m,
                        minHeight: y,
                        maxHeight: v,
                      } = o,
                      { x: w, y: x, width: b, height: S, aspectRatio: _ } = e;
                    let k = Math.floor(u ? h - e.pointerX : 0),
                      E = Math.floor(d ? p - e.pointerY : 0);
                    const C = b + (c ? -k : k),
                      M = S + (l ? -E : E),
                      N = -i[0] * b,
                      P = -i[1] * S;
                    let I = Yo(C, g, m),
                      O = Yo(M, y, v);
                    if (a) {
                      let e = 0,
                        t = 0;
                      c && k < 0
                        ? (e = Xo(w + k + N, a[0][0]))
                        : !c && k > 0 && (e = Wo(w + C + N, a[1][0])),
                        l && E < 0
                          ? (t = Xo(x + E + P, a[0][1]))
                          : !l && E > 0 && (t = Wo(x + M + P, a[1][1])),
                        (I = Math.max(I, e)),
                        (O = Math.max(O, t));
                    }
                    if (s) {
                      let e = 0,
                        t = 0;
                      c && k > 0
                        ? (e = Wo(w + k, s[0][0]))
                        : !c && k < 0 && (e = Xo(w + C, s[1][0])),
                        l && E > 0
                          ? (t = Wo(x + E, s[0][1]))
                          : !l && E < 0 && (t = Xo(x + M, s[1][1])),
                        (I = Math.max(I, e)),
                        (O = Math.max(O, t));
                    }
                    if (r) {
                      if (u) {
                        const e = Yo(C / _, y, v) * _;
                        if (((I = Math.max(I, e)), a)) {
                          let e = 0;
                          (e =
                            (!c && !l) || (c && !l && f)
                              ? Wo(x + P + C / _, a[1][1]) * _
                              : Xo(x + P + (c ? k : -k) / _, a[0][1]) * _),
                            (I = Math.max(I, e));
                        }
                        if (s) {
                          let e = 0;
                          (e =
                            (!c && !l) || (c && !l && f)
                              ? Xo(x + C / _, s[1][1]) * _
                              : Wo(x + (c ? k : -k) / _, s[0][1]) * _),
                            (I = Math.max(I, e));
                        }
                      }
                      if (d) {
                        const e = Yo(M * _, g, m) / _;
                        if (((O = Math.max(O, e)), a)) {
                          let e = 0;
                          (e =
                            (!c && !l) || (l && !c && f)
                              ? Wo(w + M * _ + N, a[1][0]) / _
                              : Xo(w + (l ? E : -E) * _ + N, a[0][0]) / _),
                            (O = Math.max(O, e));
                        }
                        if (s) {
                          let e = 0;
                          (e =
                            (!c && !l) || (l && !c && f)
                              ? Xo(w + M * _, s[1][0]) / _
                              : Wo(w + (l ? E : -E) * _, s[0][0]) / _),
                            (O = Math.max(O, e));
                        }
                      }
                    }
                    (E += E < 0 ? O : -O),
                      (k += k < 0 ? I : -I),
                      r &&
                        (f
                          ? C > M * _
                            ? (E = (Fo(c, l) ? -k : k) / _)
                            : (k = (Fo(c, l) ? -E : E) * _)
                          : u
                            ? ((E = k / _), (l = c))
                            : ((k = E * _), (c = l)));
                    const z = c ? w + k : w,
                      A = l ? x + E : x;
                    return {
                      width: b + (c ? -k : k),
                      height: S + (l ? -E : E),
                      x: i[0] * k * (c ? -1 : 1) + z,
                      y: i[1] * E * (l ? -1 : 1) + A,
                    };
                  })(h, p, u, a, s, M, y, v),
                  z = N !== k,
                  A = P !== E,
                  D = I !== S && z,
                  R = O !== _ && A;
                if (!(D || R || z || A)) return;
                if (
                  (D || R || 1 === M[0] || 1 === M[1]) &&
                  ((C.x = D ? I : f.x),
                  (C.y = R ? O : f.y),
                  (f.x = C.x),
                  (f.y = C.y),
                  x.length > 0)
                ) {
                  const e = I - S,
                    t = O - _;
                  for (const n of x)
                    (n.position = {
                      x: n.position.x - e + M[0] * (N - k),
                      y: n.position.y - t + M[1] * (P - E),
                    }),
                      b.push(n);
                }
                if (
                  ((z || A) &&
                    ((C.width = z ? N : f.width),
                    (C.height = A ? P : f.height),
                    (f.width = C.width),
                    (f.height = C.height)),
                  m && g.expandParent)
                ) {
                  const e = M[0] * (C.width ?? 0);
                  C.x && C.x < e && ((f.x = e), (h.x = h.x - (C.x - e)));
                  const t = M[1] * (C.height ?? 0);
                  C.y && C.y < t && ((f.y = t), (h.y = h.y - (C.y - t)));
                }
                const j = (function ({
                    width: e,
                    prevWidth: t,
                    height: n,
                    prevHeight: o,
                    affectsX: r,
                    affectsY: i,
                  }) {
                    const a = e - t,
                      s = n - o,
                      c = [
                        a > 0 ? 1 : a < 0 ? -1 : 0,
                        s > 0 ? 1 : s < 0 ? -1 : 0,
                      ];
                    return (
                      a && r && (c[0] = -1 * c[0]),
                      s && i && (c[1] = -1 * c[1]),
                      c
                    );
                  })({
                    width: f.width,
                    prevWidth: k,
                    height: f.height,
                    prevHeight: E,
                    affectsX: p.affectsX,
                    affectsY: p.affectsY,
                  }),
                  $ = { ...f, direction: j },
                  L = d?.(e, $);
                !1 !== L && (l?.(e, $), o(C, b));
              })
              .on('end', (e) => {
                u?.(e, { ...f }), r?.();
              });
            i.call(b);
          },
          destroy: function () {
            i.on('.drag', null);
          },
        };
      }
    },
    72269: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return A;
        },
      });
      var o = n(62435),
        r = n(50888),
        i = n(93967),
        a = n.n(i),
        s = n(87462),
        c = n(4942),
        l = n(97685),
        u = n(45987),
        d = n(21770),
        f = n(15105),
        h = [
          'prefixCls',
          'className',
          'checked',
          'defaultChecked',
          'disabled',
          'loadingIcon',
          'checkedChildren',
          'unCheckedChildren',
          'onClick',
          'onChange',
          'onKeyDown',
        ],
        p = o.forwardRef(function (e, t) {
          var n,
            r = e.prefixCls,
            i = void 0 === r ? 'rc-switch' : r,
            p = e.className,
            g = e.checked,
            m = e.defaultChecked,
            y = e.disabled,
            v = e.loadingIcon,
            w = e.checkedChildren,
            x = e.unCheckedChildren,
            b = e.onClick,
            S = e.onChange,
            _ = e.onKeyDown,
            k = (0, u.Z)(e, h),
            E = (0, d.Z)(!1, { value: g, defaultValue: m }),
            C = (0, l.Z)(E, 2),
            M = C[0],
            N = C[1];
          function P(e, t) {
            var n = M;
            return y || (N((n = e)), null == S || S(n, t)), n;
          }
          var I = a()(
            i,
            p,
            ((n = {}),
            (0, c.Z)(n, ''.concat(i, '-checked'), M),
            (0, c.Z)(n, ''.concat(i, '-disabled'), y),
            n),
          );
          return o.createElement(
            'button',
            (0, s.Z)({}, k, {
              type: 'button',
              role: 'switch',
              'aria-checked': M,
              disabled: y,
              className: I,
              ref: t,
              onKeyDown: function (e) {
                e.which === f.Z.LEFT
                  ? P(!1, e)
                  : e.which === f.Z.RIGHT && P(!0, e),
                  null == _ || _(e);
              },
              onClick: function (e) {
                var t = P(!M, e);
                null == b || b(t, e);
              },
            }),
            v,
            o.createElement(
              'span',
              { className: ''.concat(i, '-inner') },
              o.createElement(
                'span',
                { className: ''.concat(i, '-inner-checked') },
                w,
              ),
              o.createElement(
                'span',
                { className: ''.concat(i, '-inner-unchecked') },
                x,
              ),
            ),
          );
        });
      p.displayName = 'Switch';
      var g = p,
        m = n(45353),
        y = n(53124),
        v = n(98866),
        w = n(98675),
        x = n(54548),
        b = n(10274),
        S = n(14747),
        _ = n(91945),
        k = n(45503);
      const E = (e) => {
          const {
              componentCls: t,
              trackHeightSM: n,
              trackPadding: o,
              trackMinWidthSM: r,
              innerMinMarginSM: i,
              innerMaxMarginSM: a,
              handleSizeSM: s,
              calc: c,
            } = e,
            l = `${t}-inner`,
            u = (0, x.bf)(c(s).add(c(o).mul(2)).equal()),
            d = (0, x.bf)(c(a).mul(2).equal());
          return {
            [t]: {
              [`&${t}-small`]: {
                minWidth: r,
                height: n,
                lineHeight: (0, x.bf)(n),
                [`${t}-inner`]: {
                  paddingInlineStart: a,
                  paddingInlineEnd: i,
                  [`${l}-checked`]: {
                    marginInlineStart: `calc(-100% + ${u} - ${d})`,
                    marginInlineEnd: `calc(100% - ${u} + ${d})`,
                  },
                  [`${l}-unchecked`]: {
                    marginTop: c(n).mul(-1).equal(),
                    marginInlineStart: 0,
                    marginInlineEnd: 0,
                  },
                },
                [`${t}-handle`]: { width: s, height: s },
                [`${t}-loading-icon`]: {
                  top: c(c(s).sub(e.switchLoadingIconSize)).div(2).equal(),
                  fontSize: e.switchLoadingIconSize,
                },
                [`&${t}-checked`]: {
                  [`${t}-inner`]: {
                    paddingInlineStart: i,
                    paddingInlineEnd: a,
                    [`${l}-checked`]: {
                      marginInlineStart: 0,
                      marginInlineEnd: 0,
                    },
                    [`${l}-unchecked`]: {
                      marginInlineStart: `calc(100% - ${u} + ${d})`,
                      marginInlineEnd: `calc(-100% + ${u} - ${d})`,
                    },
                  },
                  [`${t}-handle`]: {
                    insetInlineStart: `calc(100% - ${(0, x.bf)(c(s).add(o).equal())})`,
                  },
                },
                [`&:not(${t}-disabled):active`]: {
                  [`&:not(${t}-checked) ${l}`]: {
                    [`${l}-unchecked`]: {
                      marginInlineStart: c(e.marginXXS).div(2).equal(),
                      marginInlineEnd: c(e.marginXXS).mul(-1).div(2).equal(),
                    },
                  },
                  [`&${t}-checked ${l}`]: {
                    [`${l}-checked`]: {
                      marginInlineStart: c(e.marginXXS).mul(-1).div(2).equal(),
                      marginInlineEnd: c(e.marginXXS).div(2).equal(),
                    },
                  },
                },
              },
            },
          };
        },
        C = (e) => {
          const { componentCls: t, handleSize: n, calc: o } = e;
          return {
            [t]: {
              [`${t}-loading-icon${e.iconCls}`]: {
                position: 'relative',
                top: o(o(n).sub(e.fontSize)).div(2).equal(),
                color: e.switchLoadingIconColor,
                verticalAlign: 'top',
              },
              [`&${t}-checked ${t}-loading-icon`]: { color: e.switchColor },
            },
          };
        },
        M = (e) => {
          const {
              componentCls: t,
              trackPadding: n,
              handleBg: o,
              handleShadow: r,
              handleSize: i,
              calc: a,
            } = e,
            s = `${t}-handle`;
          return {
            [t]: {
              [s]: {
                position: 'absolute',
                top: n,
                insetInlineStart: n,
                width: i,
                height: i,
                transition: `all ${e.switchDuration} ease-in-out`,
                '&::before': {
                  position: 'absolute',
                  top: 0,
                  insetInlineEnd: 0,
                  bottom: 0,
                  insetInlineStart: 0,
                  backgroundColor: o,
                  borderRadius: a(i).div(2).equal(),
                  boxShadow: r,
                  transition: `all ${e.switchDuration} ease-in-out`,
                  content: '""',
                },
              },
              [`&${t}-checked ${s}`]: {
                insetInlineStart: `calc(100% - ${(0, x.bf)(a(i).add(n).equal())})`,
              },
              [`&:not(${t}-disabled):active`]: {
                [`${s}::before`]: {
                  insetInlineEnd: e.switchHandleActiveInset,
                  insetInlineStart: 0,
                },
                [`&${t}-checked ${s}::before`]: {
                  insetInlineEnd: 0,
                  insetInlineStart: e.switchHandleActiveInset,
                },
              },
            },
          };
        },
        N = (e) => {
          const {
              componentCls: t,
              trackHeight: n,
              trackPadding: o,
              innerMinMargin: r,
              innerMaxMargin: i,
              handleSize: a,
              calc: s,
            } = e,
            c = `${t}-inner`,
            l = (0, x.bf)(s(a).add(s(o).mul(2)).equal()),
            u = (0, x.bf)(s(i).mul(2).equal());
          return {
            [t]: {
              [c]: {
                display: 'block',
                overflow: 'hidden',
                borderRadius: 100,
                height: '100%',
                paddingInlineStart: i,
                paddingInlineEnd: r,
                transition: `padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,
                [`${c}-checked, ${c}-unchecked`]: {
                  display: 'block',
                  color: e.colorTextLightSolid,
                  fontSize: e.fontSizeSM,
                  transition: `margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,
                  pointerEvents: 'none',
                },
                [`${c}-checked`]: {
                  marginInlineStart: `calc(-100% + ${l} - ${u})`,
                  marginInlineEnd: `calc(100% - ${l} + ${u})`,
                },
                [`${c}-unchecked`]: {
                  marginTop: s(n).mul(-1).equal(),
                  marginInlineStart: 0,
                  marginInlineEnd: 0,
                },
              },
              [`&${t}-checked ${c}`]: {
                paddingInlineStart: r,
                paddingInlineEnd: i,
                [`${c}-checked`]: { marginInlineStart: 0, marginInlineEnd: 0 },
                [`${c}-unchecked`]: {
                  marginInlineStart: `calc(100% - ${l} + ${u})`,
                  marginInlineEnd: `calc(-100% + ${l} - ${u})`,
                },
              },
              [`&:not(${t}-disabled):active`]: {
                [`&:not(${t}-checked) ${c}`]: {
                  [`${c}-unchecked`]: {
                    marginInlineStart: s(o).mul(2).equal(),
                    marginInlineEnd: s(o).mul(-1).mul(2).equal(),
                  },
                },
                [`&${t}-checked ${c}`]: {
                  [`${c}-checked`]: {
                    marginInlineStart: s(o).mul(-1).mul(2).equal(),
                    marginInlineEnd: s(o).mul(2).equal(),
                  },
                },
              },
            },
          };
        },
        P = (e) => {
          const { componentCls: t, trackHeight: n, trackMinWidth: o } = e;
          return {
            [t]: Object.assign(
              Object.assign(
                Object.assign(Object.assign({}, (0, S.Wf)(e)), {
                  position: 'relative',
                  display: 'inline-block',
                  boxSizing: 'border-box',
                  minWidth: o,
                  height: n,
                  lineHeight: `${(0, x.bf)(n)}`,
                  verticalAlign: 'middle',
                  background: e.colorTextQuaternary,
                  border: '0',
                  borderRadius: 100,
                  cursor: 'pointer',
                  transition: `all ${e.motionDurationMid}`,
                  userSelect: 'none',
                  [`&:hover:not(${t}-disabled)`]: {
                    background: e.colorTextTertiary,
                  },
                }),
                (0, S.Qy)(e),
              ),
              {
                [`&${t}-checked`]: {
                  background: e.switchColor,
                  [`&:hover:not(${t}-disabled)`]: {
                    background: e.colorPrimaryHover,
                  },
                },
                [`&${t}-loading, &${t}-disabled`]: {
                  cursor: 'not-allowed',
                  opacity: e.switchDisabledOpacity,
                  '*': { boxShadow: 'none', cursor: 'not-allowed' },
                },
                [`&${t}-rtl`]: { direction: 'rtl' },
              },
            ),
          };
        };
      var I = (0, _.I$)(
          'Switch',
          (e) => {
            const t = (0, k.TS)(e, {
              switchDuration: e.motionDurationMid,
              switchColor: e.colorPrimary,
              switchDisabledOpacity: e.opacityLoading,
              switchLoadingIconSize: e.calc(e.fontSizeIcon).mul(0.75).equal(),
              switchLoadingIconColor: `rgba(0, 0, 0, ${e.opacityLoading})`,
              switchHandleActiveInset: '-30%',
            });
            return [P(t), N(t), M(t), C(t), E(t)];
          },
          (e) => {
            const {
                fontSize: t,
                lineHeight: n,
                controlHeight: o,
                colorWhite: r,
              } = e,
              i = t * n,
              a = o / 2,
              s = i - 4,
              c = a - 4;
            return {
              trackHeight: i,
              trackHeightSM: a,
              trackMinWidth: 2 * s + 8,
              trackMinWidthSM: 2 * c + 4,
              trackPadding: 2,
              handleBg: r,
              handleSize: s,
              handleSizeSM: c,
              handleShadow: `0 2px 4px 0 ${new b.C('#00230b').setAlpha(0.2).toRgbString()}`,
              innerMinMargin: s / 2,
              innerMaxMargin: s + 2 + 4,
              innerMinMarginSM: c / 2,
              innerMaxMarginSM: c + 2 + 4,
            };
          },
        ),
        O = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        };
      const z = o.forwardRef((e, t) => {
        const {
            prefixCls: n,
            size: i,
            disabled: s,
            loading: c,
            className: l,
            rootClassName: u,
            style: f,
            checked: h,
            value: p,
            defaultChecked: x,
            defaultValue: b,
            onChange: S,
          } = e,
          _ = O(e, [
            'prefixCls',
            'size',
            'disabled',
            'loading',
            'className',
            'rootClassName',
            'style',
            'checked',
            'value',
            'defaultChecked',
            'defaultValue',
            'onChange',
          ]),
          [k, E] = (0, d.Z)(!1, {
            value: null != h ? h : p,
            defaultValue: null != x ? x : b,
          }),
          { getPrefixCls: C, direction: M, switch: N } = o.useContext(y.E_),
          P = o.useContext(v.Z),
          z = (null != s ? s : P) || c,
          A = C('switch', n),
          D = o.createElement(
            'div',
            { className: `${A}-handle` },
            c && o.createElement(r.Z, { className: `${A}-loading-icon` }),
          ),
          [R, j, $] = I(A),
          L = (0, w.Z)(i),
          T = a()(
            null == N ? void 0 : N.className,
            {
              [`${A}-small`]: 'small' === L,
              [`${A}-loading`]: c,
              [`${A}-rtl`]: 'rtl' === M,
            },
            l,
            u,
            j,
            $,
          ),
          B = Object.assign(Object.assign({}, null == N ? void 0 : N.style), f);
        return R(
          o.createElement(
            m.Z,
            { component: 'Switch' },
            o.createElement(
              g,
              Object.assign({}, _, {
                checked: k,
                onChange: function () {
                  E(arguments.length <= 0 ? void 0 : arguments[0]),
                    null == S || S.apply(void 0, arguments);
                },
                prefixCls: A,
                className: T,
                style: B,
                disabled: z,
                ref: t,
                loadingIcon: D,
              }),
            ),
          ),
        );
      });
      z.__ANT_SWITCH = !0;
      var A = z;
    },
    87077: function (e, t, n) {
      'use strict';
      var o = n(62435);
      var r =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        i = o.useState,
        a = o.useEffect,
        s = o.useLayoutEffect,
        c = o.useDebugValue;
      function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !r(e, n);
        } catch (e) {
          return !0;
        }
      }
      var u =
        'undefined' == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                o = i({ inst: { value: n, getSnapshot: t } }),
                r = o[0].inst,
                u = o[1];
              return (
                s(
                  function () {
                    (r.value = n), (r.getSnapshot = t), l(r) && u({ inst: r });
                  },
                  [e, n, t],
                ),
                a(
                  function () {
                    return (
                      l(r) && u({ inst: r }),
                      e(function () {
                        l(r) && u({ inst: r });
                      })
                    );
                  },
                  [e],
                ),
                c(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== o.useSyncExternalStore ? o.useSyncExternalStore : u;
    },
    1816: function (e, t, n) {
      'use strict';
      e.exports = n(87077);
    },
    99363: function (e, t) {
      'use strict';
      var n =
        (this && this.__spreadArray) ||
        function (e, t, n) {
          if (n || 2 === arguments.length)
            for (var o, r = 0, i = t.length; r < i; r++)
              (!o && r in t) ||
                (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
          return e.concat(o || Array.prototype.slice.call(t));
        };
      function o(e) {
        return e[Math.floor(Math.random() * e.length)];
      }
      function r(e) {
        return e.reduce(function (e, t) {
          return e.length > t.length ? e : t;
        });
      }
      function i(e) {
        return e.reduce(function (e, t) {
          return e.length < t.length ? e : t;
        });
      }
      function a(e) {
        void 0 === e && (e = {}),
          'string' == typeof e && (e = { separator: e }),
          'boolean' == typeof e && (e = { capitalize: e });
        var r = e.separator,
          i = void 0 === r ? '' : r,
          a = e.capitalize,
          s = void 0 === a || a,
          c = e.adjectiveCount,
          l = void 0 === c ? 1 : c,
          u = e.addAdverb,
          d = void 0 !== u && u,
          f = n(
            n(
              n(
                [],
                n([], Array(l), !0).map(function (e) {
                  return o(t.adjectives);
                }),
                !0,
              ),
              [o(t.nouns), o(t.verbs)],
              !1,
            ),
            d ? [o(t.adverbs)] : [],
            !0,
          );
        return (
          s &&
            (f = f.map(function (e) {
              return e.charAt(0).toUpperCase() + e.substr(1);
            })),
          f.join(i)
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.minLength =
          t.maxLength =
          t.poolSize =
          t.humanId =
          t.adverbs =
          t.verbs =
          t.nouns =
          t.adjectives =
            void 0),
        (t.adjectives = [
          'afraid',
          'all',
          'angry',
          'beige',
          'big',
          'better',
          'bitter',
          'blue',
          'brave',
          'breezy',
          'bright',
          'brown',
          'bumpy',
          'busy',
          'calm',
          'chatty',
          'chilly',
          'chubby',
          'clean',
          'clear',
          'clever',
          'cold',
          'crazy',
          'cruel',
          'cuddly',
          'curly',
          'curvy',
          'cute',
          'common',
          'cold',
          'cool',
          'cyan',
          'dark',
          'deep',
          'dirty',
          'dry',
          'dull',
          'eager',
          'early',
          'easy',
          'eight',
          'eighty',
          'eleven',
          'empty',
          'every',
          'evil',
          'fair',
          'famous',
          'fast',
          'fancy',
          'few',
          'fine',
          'fifty',
          'five',
          'flat',
          'fluffy',
          'floppy',
          'forty',
          'four',
          'free',
          'fresh',
          'fruity',
          'full',
          'funny',
          'fuzzy',
          'gentle',
          'giant',
          'gold',
          'good',
          'great',
          'green',
          'grumpy',
          'happy',
          'heavy',
          'hip',
          'honest',
          'hot',
          'huge',
          'hungry',
          'icy',
          'itchy',
          'khaki',
          'kind',
          'large',
          'late',
          'lazy',
          'lemon',
          'legal',
          'light',
          'little',
          'long',
          'loose',
          'loud',
          'lovely',
          'lucky',
          'major',
          'many',
          'mean',
          'metal',
          'mighty',
          'modern',
          'moody',
          'nasty',
          'neat',
          'new',
          'nice',
          'nine',
          'ninety',
          'odd',
          'old',
          'olive',
          'open',
          'orange',
          'pink',
          'plain',
          'plenty',
          'polite',
          'poor',
          'pretty',
          'proud',
          'public',
          'puny',
          'petite',
          'purple',
          'quick',
          'quiet',
          'rare',
          'real',
          'ready',
          'red',
          'rich',
          'ripe',
          'rotten',
          'rude',
          'sad',
          'salty',
          'seven',
          'shaggy',
          'shaky',
          'sharp',
          'shiny',
          'short',
          'shy',
          'silent',
          'silly',
          'silver',
          'six',
          'sixty',
          'slick',
          'slimy',
          'slow',
          'small',
          'smart',
          'smooth',
          'social',
          'soft',
          'solid',
          'some',
          'sour',
          'spicy',
          'spotty',
          'stale',
          'strong',
          'stupid',
          'sweet',
          'swift',
          'tall',
          'tame',
          'tangy',
          'tasty',
          'ten',
          'tender',
          'thick',
          'thin',
          'thirty',
          'three',
          'tidy',
          'tiny',
          'tired',
          'tough',
          'tricky',
          'true',
          'twelve',
          'twenty',
          'two',
          'upset',
          'vast',
          'violet',
          'warm',
          'weak',
          'wet',
          'whole',
          'wicked',
          'wide',
          'wild',
          'wise',
          'witty',
          'yellow',
          'young',
          'yummy',
        ]),
        (t.nouns = [
          'apes',
          'animals',
          'areas',
          'bars',
          'banks',
          'baths',
          'breads',
          'bushes',
          'cloths',
          'clowns',
          'clubs',
          'hoops',
          'loops',
          'memes',
          'papers',
          'parks',
          'paths',
          'showers',
          'sides',
          'signs',
          'sites',
          'streets',
          'teeth',
          'tires',
          'webs',
          'actors',
          'ads',
          'adults',
          'aliens',
          'ants',
          'apples',
          'baboons',
          'badgers',
          'bags',
          'bananas',
          'bats',
          'beans',
          'bears',
          'beds',
          'beers',
          'bees',
          'berries',
          'bikes',
          'birds',
          'boats',
          'bobcats',
          'books',
          'bottles',
          'boxes',
          'brooms',
          'buckets',
          'bugs',
          'buses',
          'buttons',
          'camels',
          'cases',
          'cameras',
          'candies',
          'candles',
          'carpets',
          'carrots',
          'carrots',
          'cars',
          'cats',
          'chairs',
          'chefs',
          'chicken',
          'clocks',
          'clouds',
          'coats',
          'cobras',
          'coins',
          'corners',
          'colts',
          'comics',
          'cooks',
          'cougars',
          'regions',
          'results',
          'cows',
          'crabs',
          'crabs',
          'crews',
          'cups',
          'cities',
          'cycles',
          'dancers',
          'days',
          'deer',
          'dingos',
          'dodos',
          'dogs',
          'dolls',
          'donkeys',
          'donuts',
          'doodles',
          'doors',
          'dots',
          'dragons',
          'drinks',
          'dryers',
          'ducks',
          'ducks',
          'eagles',
          'ears',
          'eels',
          'eggs',
          'ends',
          'mammals',
          'emus',
          'experts',
          'eyes',
          'facts',
          'falcons',
          'fans',
          'feet',
          'files',
          'flies',
          'flowers',
          'forks',
          'foxes',
          'friends',
          'frogs',
          'games',
          'garlics',
          'geckos',
          'geese',
          'ghosts',
          'ghosts',
          'gifts',
          'glasses',
          'goats',
          'grapes',
          'groups',
          'guests',
          'hairs',
          'hands',
          'hats',
          'heads',
          'hornets',
          'horses',
          'hotels',
          'hounds',
          'houses',
          'humans',
          'icons',
          'ideas',
          'impalas',
          'insects',
          'islands',
          'items',
          'jars',
          'jeans',
          'jobs',
          'jokes',
          'keys',
          'kids',
          'kings',
          'kiwis',
          'knives',
          'lamps',
          'lands',
          'laws',
          'lemons',
          'lies',
          'lights',
          'lines',
          'lions',
          'lizards',
          'llamas',
          'mails',
          'mangos',
          'maps',
          'masks',
          'meals',
          'melons',
          'mice',
          'mirrors',
          'moments',
          'moles',
          'monkeys',
          'months',
          'moons',
          'moose',
          'mugs',
          'nails',
          'needles',
          'news',
          'nights',
          'numbers',
          'olives',
          'onions',
          'oranges',
          'otters',
          'owls',
          'pandas',
          'pans',
          'pants',
          'papayas',
          'parents',
          'parts',
          'parrots',
          'paws',
          'peaches',
          'pears',
          'peas',
          'pens',
          'pets',
          'phones',
          'pianos',
          'pigs',
          'pillows',
          'places',
          'planes',
          'planets',
          'plants',
          'plums',
          'poems',
          'poets',
          'points',
          'pots',
          'pugs',
          'pumas',
          'queens',
          'rabbits',
          'radios',
          'rats',
          'ravens',
          'readers',
          'rice',
          'rings',
          'rivers',
          'rockets',
          'rocks',
          'rooms',
          'roses',
          'rules',
          'schools',
          'bats',
          'seals',
          'seas',
          'sheep',
          'shirts',
          'shoes',
          'shrimps',
          'singers',
          'sloths',
          'snails',
          'snakes',
          'socks',
          'spiders',
          'spies',
          'spoons',
          'squids',
          'stars',
          'states',
          'steaks',
          'wings',
          'suits',
          'suns',
          'swans',
          'symbols',
          'tables',
          'taxes',
          'taxis',
          'teams',
          'terms',
          'things',
          'ties',
          'tigers',
          'times',
          'tips',
          'toes',
          'towns',
          'tools',
          'toys',
          'trains',
          'trams',
          'trees',
          'turkeys',
          'turtles',
          'vans',
          'views',
          'walls',
          'walls',
          'wasps',
          'waves',
          'ways',
          'weeks',
          'windows',
          'wolves',
          'women',
          'wombats',
          'words',
          'worlds',
          'worms',
          'yaks',
          'years',
          'zebras',
          'zoos',
        ]),
        (t.verbs = [
          'accept',
          'act',
          'add',
          'admire',
          'agree',
          'allow',
          'appear',
          'argue',
          'arrive',
          'ask',
          'attack',
          'attend',
          'bake',
          'bathe',
          'battle',
          'beam',
          'beg',
          'begin',
          'behave',
          'bet',
          'boil',
          'bow',
          'brake',
          'brush',
          'build',
          'burn',
          'buy',
          'call',
          'camp',
          'care',
          'carry',
          'change',
          'cheat',
          'check',
          'cheer',
          'chew',
          'clap',
          'clean',
          'cough',
          'count',
          'cover',
          'crash',
          'create',
          'cross',
          'cry',
          'cut',
          'dance',
          'decide',
          'deny',
          'design',
          'dig',
          'divide',
          'do',
          'double',
          'doubt',
          'draw',
          'dream',
          'dress',
          'drive',
          'drop',
          'drum',
          'eat',
          'end',
          'enter',
          'enjoy',
          'exist',
          'fail',
          'fall',
          'feel',
          'fetch',
          'film',
          'find',
          'fix',
          'flash',
          'float',
          'flow',
          'fly',
          'fold',
          'follow',
          'fry',
          'give',
          'glow',
          'go',
          'grab',
          'greet',
          'grin',
          'grow',
          'guess',
          'hammer',
          'hang',
          'happen',
          'heal',
          'hear',
          'help',
          'hide',
          'hope',
          'hug',
          'hunt',
          'invent',
          'invite',
          'itch',
          'jam',
          'jog',
          'join',
          'joke',
          'judge',
          'juggle',
          'jump',
          'kick',
          'kiss',
          'kneel',
          'knock',
          'know',
          'laugh',
          'lay',
          'lead',
          'learn',
          'leave',
          'lick',
          'like',
          'lie',
          'listen',
          'live',
          'look',
          'lose',
          'love',
          'make',
          'march',
          'marry',
          'mate',
          'matter',
          'melt',
          'mix',
          'move',
          'nail',
          'notice',
          'obey',
          'occur',
          'open',
          'own',
          'pay',
          'peel',
          'play',
          'poke',
          'post',
          'press',
          'prove',
          'pull',
          'pump',
          'pick',
          'punch',
          'push',
          'raise',
          'read',
          'refuse',
          'relate',
          'relax',
          'remain',
          'repair',
          'repeat',
          'reply',
          'report',
          'rescue',
          'rest',
          'retire',
          'return',
          'rhyme',
          'ring',
          'roll',
          'rule',
          'run',
          'rush',
          'say',
          'scream',
          'see',
          'search',
          'sell',
          'send',
          'serve',
          'shake',
          'share',
          'shave',
          'shine',
          'show',
          'shop',
          'shout',
          'sin',
          'sink',
          'sing',
          'sip',
          'sit',
          'sleep',
          'slide',
          'smash',
          'smell',
          'smile',
          'smoke',
          'sneeze',
          'sniff',
          'sort',
          'speak',
          'spend',
          'stand',
          'start',
          'stay',
          'stick',
          'stop',
          'stare',
          'study',
          'strive',
          'swim',
          'switch',
          'take',
          'talk',
          'tan',
          'tap',
          'taste',
          'teach',
          'tease',
          'tell',
          'thank',
          'think',
          'throw',
          'tickle',
          'tie',
          'trade',
          'train',
          'travel',
          'try',
          'turn',
          'type',
          'unite',
          'vanish',
          'visit',
          'wait',
          'walk',
          'warn',
          'wash',
          'watch',
          'wave',
          'wear',
          'win',
          'wink',
          'wish',
          'wonder',
          'work',
          'worry',
          'write',
          'yawn',
          'yell',
        ]),
        (t.adverbs = [
          'bravely',
          'brightly',
          'busily',
          'daily',
          'freely',
          'hungrily',
          'joyously',
          'knowlingly',
          'lazily',
          'oddly',
          'mysteriously',
          'noisily',
          'politely',
          'quickly',
          'quietly',
          'rapidly',
          'safely',
          'sleepily',
          'slowly',
          'truly',
          'yearly',
        ]),
        (t.humanId = a),
        (t.poolSize = function (e) {
          void 0 === e && (e = {});
          var n = e.adjectiveCount,
            o = void 0 === n ? 1 : n,
            r = e.addAdverb,
            i = void 0 !== r && r;
          return (
            t.adjectives.length *
            o *
            t.nouns.length *
            t.verbs.length *
            (i ? t.adverbs.length : 1)
          );
        }),
        (t.maxLength = function (e) {
          void 0 === e && (e = {});
          var n = e.adjectiveCount,
            o = void 0 === n ? 1 : n,
            i = e.addAdverb,
            a = void 0 !== i && i,
            s = e.separator,
            c = void 0 === s ? '' : s;
          return (
            r(t.adjectives).length * o +
            o * c.length +
            r(t.nouns).length +
            c.length +
            r(t.verbs).length +
            (a ? r(t.adverbs).length + c.length : 0)
          );
        }),
        (t.minLength = function (e) {
          void 0 === e && (e = {});
          var n = e.adjectiveCount,
            o = void 0 === n ? 1 : n,
            r = e.addAdverb,
            a = void 0 !== r && r,
            s = e.separator,
            c = void 0 === s ? '' : s;
          return (
            i(t.adjectives).length * o +
            o * c.length +
            i(t.nouns).length +
            c.length +
            i(t.verbs).length +
            (a ? i(t.adverbs).length + c.length : 0)
          );
        }),
        (t.default = a);
    },
    96425: function (e, t, n) {
      var o = n(3118),
        r = n(9435);
      function i(e) {
        (this.__wrapped__ = e),
          (this.__actions__ = []),
          (this.__dir__ = 1),
          (this.__filtered__ = !1),
          (this.__iteratees__ = []),
          (this.__takeCount__ = 4294967295),
          (this.__views__ = []);
      }
      (i.prototype = o(r.prototype)),
        (i.prototype.constructor = i),
        (e.exports = i);
    },
    7548: function (e, t, n) {
      var o = n(3118),
        r = n(9435);
      function i(e, t) {
        (this.__wrapped__ = e),
          (this.__actions__ = []),
          (this.__chain__ = !!t),
          (this.__index__ = 0),
          (this.__values__ = void 0);
      }
      (i.prototype = o(r.prototype)),
        (i.prototype.constructor = i),
        (e.exports = i);
    },
    20731: function (e, t, n) {
      var o = n(88668),
        r = n(47443),
        i = n(1196),
        a = n(29932),
        s = n(51717),
        c = n(74757);
      e.exports = function (e, t, n, l) {
        var u = -1,
          d = r,
          f = !0,
          h = e.length,
          p = [],
          g = t.length;
        if (!h) return p;
        n && (t = a(t, s(n))),
          l
            ? ((d = i), (f = !1))
            : t.length >= 200 && ((d = c), (f = !1), (t = new o(t)));
        e: for (; ++u < h; ) {
          var m = e[u],
            y = null == n ? m : n(m);
          if (((m = l || 0 !== m ? m : 0), f && y == y)) {
            for (var v = g; v--; ) if (t[v] === y) continue e;
            p.push(m);
          } else d(t, y, l) || p.push(m);
        }
        return p;
      };
    },
    47556: function (e, t, n) {
      var o = n(88668),
        r = n(47443),
        i = n(1196),
        a = n(29932),
        s = n(51717),
        c = n(74757),
        l = Math.min;
      e.exports = function (e, t, n) {
        for (
          var u = n ? i : r,
            d = e[0].length,
            f = e.length,
            h = f,
            p = Array(f),
            g = 1 / 0,
            m = [];
          h--;

        ) {
          var y = e[h];
          h && t && (y = a(y, s(t))),
            (g = l(y.length, g)),
            (p[h] =
              !n && (t || (d >= 120 && y.length >= 120))
                ? new o(h && y)
                : void 0);
        }
        y = e[0];
        var v = -1,
          w = p[0];
        e: for (; ++v < d && m.length < g; ) {
          var x = y[v],
            b = t ? t(x) : x;
          if (((x = n || 0 !== x ? x : 0), !(w ? c(w, b) : u(m, b, n)))) {
            for (h = f; --h; ) {
              var S = p[h];
              if (!(S ? c(S, b) : u(e[h], b, n))) continue e;
            }
            w && w.push(b), m.push(x);
          }
        }
        return m;
      };
    },
    9435: function (e) {
      e.exports = function () {};
    },
    28045: function (e, t, n) {
      var o = n(6557),
        r = n(89250),
        i = r
          ? function (e, t) {
              return r.set(e, t), e;
            }
          : o;
      e.exports = i;
    },
    24387: function (e, t, n) {
      var o = n(29246);
      e.exports = function (e) {
        return o(e) ? e : [];
      };
    },
    52157: function (e) {
      var t = Math.max;
      e.exports = function (e, n, o, r) {
        for (
          var i = -1,
            a = e.length,
            s = o.length,
            c = -1,
            l = n.length,
            u = t(a - s, 0),
            d = Array(l + u),
            f = !r;
          ++c < l;

        )
          d[c] = n[c];
        for (; ++i < s; ) (f || i < a) && (d[o[i]] = e[i]);
        for (; u--; ) d[c++] = e[i++];
        return d;
      };
    },
    14054: function (e) {
      var t = Math.max;
      e.exports = function (e, n, o, r) {
        for (
          var i = -1,
            a = e.length,
            s = -1,
            c = o.length,
            l = -1,
            u = n.length,
            d = t(a - c, 0),
            f = Array(d + u),
            h = !r;
          ++i < d;

        )
          f[i] = e[i];
        for (var p = i; ++l < u; ) f[p + l] = n[l];
        for (; ++s < c; ) (h || i < a) && (f[p + o[s]] = e[i++]);
        return f;
      };
    },
    97991: function (e) {
      e.exports = function (e, t) {
        for (var n = e.length, o = 0; n--; ) e[n] === t && ++o;
        return o;
      };
    },
    22402: function (e, t, n) {
      var o = n(71774),
        r = n(55639);
      e.exports = function (e, t, n) {
        var i = 1 & t,
          a = o(e);
        return function t() {
          return (this && this !== r && this instanceof t ? a : e).apply(
            i ? n : this,
            arguments,
          );
        };
      };
    },
    98805: function (e, t, n) {
      var o = n(40180),
        r = n(62689),
        i = n(83140),
        a = n(79833);
      e.exports = function (e) {
        return function (t) {
          t = a(t);
          var n = r(t) ? i(t) : void 0,
            s = n ? n[0] : t.charAt(0),
            c = n ? o(n, 1).join('') : t.slice(1);
          return s[e]() + c;
        };
      };
    },
    71774: function (e, t, n) {
      var o = n(3118),
        r = n(13218);
      e.exports = function (e) {
        return function () {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var n = o(e.prototype),
            i = e.apply(n, t);
          return r(i) ? i : n;
        };
      };
    },
    46347: function (e, t, n) {
      var o = n(96874),
        r = n(71774),
        i = n(86935),
        a = n(94487),
        s = n(20893),
        c = n(46460),
        l = n(55639);
      e.exports = function (e, t, n) {
        var u = r(e);
        return function r() {
          for (var d = arguments.length, f = Array(d), h = d, p = s(r); h--; )
            f[h] = arguments[h];
          var g = d < 3 && f[0] !== p && f[d - 1] !== p ? [] : c(f, p);
          return (d -= g.length) < n
            ? a(e, t, i, r.placeholder, void 0, f, g, void 0, void 0, n - d)
            : o(this && this !== l && this instanceof r ? u : e, this, f);
        };
      };
    },
    23468: function (e, t, n) {
      var o = n(7548),
        r = n(92129),
        i = n(66833),
        a = n(97658),
        s = n(1469),
        c = n(86528);
      e.exports = function (e) {
        return r(function (t) {
          var n = t.length,
            r = n,
            l = o.prototype.thru;
          for (e && t.reverse(); r--; ) {
            var u = t[r];
            if ('function' != typeof u)
              throw new TypeError('Expected a function');
            if (l && !d && 'wrapper' == a(u)) var d = new o([], !0);
          }
          for (r = d ? r : n; ++r < n; ) {
            u = t[r];
            var f = a(u),
              h = 'wrapper' == f ? i(u) : void 0;
            d =
              h && c(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9]
                ? d[a(h[0])].apply(d, h[3])
                : 1 == u.length && c(u)
                  ? d[f]()
                  : d.thru(u);
          }
          return function () {
            var e = arguments,
              o = e[0];
            if (d && 1 == e.length && s(o)) return d.plant(o).value();
            for (var r = 0, i = n ? t[r].apply(this, e) : o; ++r < n; )
              i = t[r].call(this, i);
            return i;
          };
        });
      };
    },
    86935: function (e, t, n) {
      var o = n(52157),
        r = n(14054),
        i = n(97991),
        a = n(71774),
        s = n(94487),
        c = n(20893),
        l = n(90451),
        u = n(46460),
        d = n(55639);
      e.exports = function e(t, n, f, h, p, g, m, y, v, w) {
        var x = 128 & n,
          b = 1 & n,
          S = 2 & n,
          _ = 24 & n,
          k = 512 & n,
          E = S ? void 0 : a(t);
        return function C() {
          for (var M = arguments.length, N = Array(M), P = M; P--; )
            N[P] = arguments[P];
          if (_)
            var I = c(C),
              O = i(N, I);
          if (
            (h && (N = o(N, h, p, _)),
            g && (N = r(N, g, m, _)),
            (M -= O),
            _ && M < w)
          ) {
            var z = u(N, I);
            return s(t, n, e, C.placeholder, f, N, z, y, v, w - M);
          }
          var A = b ? f : this,
            D = S ? A[t] : t;
          return (
            (M = N.length),
            y ? (N = l(N, y)) : k && M > 1 && N.reverse(),
            x && v < M && (N.length = v),
            this && this !== d && this instanceof C && (D = E || a(D)),
            D.apply(A, N)
          );
        };
      };
    },
    84375: function (e, t, n) {
      var o = n(96874),
        r = n(71774),
        i = n(55639);
      e.exports = function (e, t, n, a) {
        var s = 1 & t,
          c = r(e);
        return function t() {
          for (
            var r = -1,
              l = arguments.length,
              u = -1,
              d = a.length,
              f = Array(d + l),
              h = this && this !== i && this instanceof t ? c : e;
            ++u < d;

          )
            f[u] = a[u];
          for (; l--; ) f[u++] = arguments[++r];
          return o(h, s ? n : this, f);
        };
      };
    },
    94487: function (e, t, n) {
      var o = n(86528),
        r = n(258),
        i = n(69255);
      e.exports = function (e, t, n, a, s, c, l, u, d, f) {
        var h = 8 & t;
        (t |= h ? 32 : 64), 4 & (t &= ~(h ? 64 : 32)) || (t &= -4);
        var p = [
            e,
            t,
            s,
            h ? c : void 0,
            h ? l : void 0,
            h ? void 0 : c,
            h ? void 0 : l,
            u,
            d,
            f,
          ],
          g = n.apply(void 0, p);
        return o(e) && r(g, p), (g.placeholder = a), i(g, e, t);
      };
    },
    97727: function (e, t, n) {
      var o = n(28045),
        r = n(22402),
        i = n(46347),
        a = n(86935),
        s = n(84375),
        c = n(66833),
        l = n(63833),
        u = n(258),
        d = n(69255),
        f = n(40554),
        h = Math.max;
      e.exports = function (e, t, n, p, g, m, y, v) {
        var w = 2 & t;
        if (!w && 'function' != typeof e)
          throw new TypeError('Expected a function');
        var x = p ? p.length : 0;
        if (
          (x || ((t &= -97), (p = g = void 0)),
          (y = void 0 === y ? y : h(f(y), 0)),
          (v = void 0 === v ? v : f(v)),
          (x -= g ? g.length : 0),
          64 & t)
        ) {
          var b = p,
            S = g;
          p = g = void 0;
        }
        var _ = w ? void 0 : c(e),
          k = [e, t, n, p, g, b, S, m, y, v];
        if (
          (_ && l(k, _),
          (e = k[0]),
          (t = k[1]),
          (n = k[2]),
          (p = k[3]),
          (g = k[4]),
          !(v = k[9] = void 0 === k[9] ? (w ? 0 : e.length) : h(k[9] - x, 0)) &&
            24 & t &&
            (t &= -25),
          t && 1 != t)
        )
          E =
            8 == t || 16 == t
              ? i(e, t, v)
              : (32 != t && 33 != t) || g.length
                ? a.apply(void 0, k)
                : s(e, t, n, p);
        else var E = r(e, t, n);
        return d((_ ? o : u)(E, k), e, t);
      };
    },
    66833: function (e, t, n) {
      var o = n(89250),
        r = n(28117),
        i = o
          ? function (e) {
              return o.get(e);
            }
          : r;
      e.exports = i;
    },
    97658: function (e, t, n) {
      var o = n(52060),
        r = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        for (
          var t = e.name + '', n = o[t], i = r.call(o, t) ? n.length : 0;
          i--;

        ) {
          var a = n[i],
            s = a.func;
          if (null == s || s == e) return a.name;
        }
        return t;
      };
    },
    20893: function (e) {
      e.exports = function (e) {
        return e.placeholder;
      };
    },
    58775: function (e) {
      var t = /\{\n\/\* \[wrapped with (.+)\] \*/,
        n = /,? & /;
      e.exports = function (e) {
        var o = e.match(t);
        return o ? o[1].split(n) : [];
      };
    },
    83112: function (e) {
      var t = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
      e.exports = function (e, n) {
        var o = n.length;
        if (!o) return e;
        var r = o - 1;
        return (
          (n[r] = (o > 1 ? '& ' : '') + n[r]),
          (n = n.join(o > 2 ? ', ' : ' ')),
          e.replace(t, '{\n/* [wrapped with ' + n + '] */\n')
        );
      };
    },
    86528: function (e, t, n) {
      var o = n(96425),
        r = n(66833),
        i = n(97658),
        a = n(8111);
      e.exports = function (e) {
        var t = i(e),
          n = a[t];
        if ('function' != typeof n || !(t in o.prototype)) return !1;
        if (e === n) return !0;
        var s = r(n);
        return !!s && e === s[0];
      };
    },
    63833: function (e, t, n) {
      var o = n(52157),
        r = n(14054),
        i = n(46460),
        a = '__lodash_placeholder__',
        s = 128,
        c = Math.min;
      e.exports = function (e, t) {
        var n = e[1],
          l = t[1],
          u = n | l,
          d = u < 131,
          f =
            (l == s && 8 == n) ||
            (l == s && 256 == n && e[7].length <= t[8]) ||
            (384 == l && t[7].length <= t[8] && 8 == n);
        if (!d && !f) return e;
        1 & l && ((e[2] = t[2]), (u |= 1 & n ? 0 : 4));
        var h = t[3];
        if (h) {
          var p = e[3];
          (e[3] = p ? o(p, h, t[4]) : h), (e[4] = p ? i(e[3], a) : t[4]);
        }
        return (
          (h = t[5]) &&
            ((p = e[5]),
            (e[5] = p ? r(p, h, t[6]) : h),
            (e[6] = p ? i(e[5], a) : t[6])),
          (h = t[7]) && (e[7] = h),
          l & s && (e[8] = null == e[8] ? t[8] : c(e[8], t[8])),
          null == e[9] && (e[9] = t[9]),
          (e[0] = t[0]),
          (e[1] = u),
          e
        );
      };
    },
    89250: function (e, t, n) {
      var o = n(70577),
        r = o && new o();
      e.exports = r;
    },
    52060: function (e) {
      e.exports = {};
    },
    90451: function (e, t, n) {
      var o = n(6450),
        r = n(65776),
        i = Math.min;
      e.exports = function (e, t) {
        for (var n = e.length, a = i(t.length, n), s = o(e); a--; ) {
          var c = t[a];
          e[a] = r(c, n) ? s[c] : void 0;
        }
        return e;
      };
    },
    46460: function (e) {
      var t = '__lodash_placeholder__';
      e.exports = function (e, n) {
        for (var o = -1, r = e.length, i = 0, a = []; ++o < r; ) {
          var s = e[o];
          (s !== n && s !== t) || ((e[o] = t), (a[i++] = o));
        }
        return a;
      };
    },
    258: function (e, t, n) {
      var o = n(28045),
        r = n(21275)(o);
      e.exports = r;
    },
    69255: function (e, t, n) {
      var o = n(58775),
        r = n(83112),
        i = n(30061),
        a = n(87241);
      e.exports = function (e, t, n) {
        var s = t + '';
        return i(e, r(s, a(o(s), n)));
      };
    },
    87241: function (e, t, n) {
      var o = n(77412),
        r = n(47443),
        i = [
          ['ary', 128],
          ['bind', 1],
          ['bindKey', 2],
          ['curry', 8],
          ['curryRight', 16],
          ['flip', 512],
          ['partial', 32],
          ['partialRight', 64],
          ['rearg', 256],
        ];
      e.exports = function (e, t) {
        return (
          o(i, function (n) {
            var o = '_.' + n[0];
            t & n[1] && !r(e, o) && e.push(o);
          }),
          e.sort()
        );
      };
    },
    21913: function (e, t, n) {
      var o = n(96425),
        r = n(7548),
        i = n(6450);
      e.exports = function (e) {
        if (e instanceof o) return e.clone();
        var t = new r(e.__wrapped__, e.__chain__);
        return (
          (t.__actions__ = i(e.__actions__)),
          (t.__index__ = e.__index__),
          (t.__values__ = e.__values__),
          t
        );
      };
    },
    39514: function (e, t, n) {
      var o = n(97727);
      e.exports = function (e, t, n) {
        return (
          (t = n ? void 0 : t),
          (t = e && null == t ? e.length : t),
          o(e, 128, void 0, void 0, void 0, void 0, t)
        );
      };
    },
    40087: function (e, t, n) {
      var o = n(97727);
      function r(e, t, n) {
        var i = o(
          e,
          8,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          (t = n ? void 0 : t),
        );
        return (i.placeholder = r.placeholder), i;
      }
      (r.placeholder = {}), (e.exports = r);
    },
    29521: function (e, t, n) {
      var o = n(20731),
        r = n(21078),
        i = n(5976),
        a = n(29246),
        s = n(10928),
        c = i(function (e, t) {
          var n = s(t);
          return (
            a(n) && (n = void 0), a(e) ? o(e, r(t, 1, a, !0), void 0, n) : []
          );
        });
      e.exports = c;
    },
    59242: function (e, t, n) {
      var o = n(23468)();
      e.exports = o;
    },
    4269: function (e, t, n) {
      e.exports = {
        ary: n(39514),
        assign: n(44037),
        clone: n(66678),
        curry: n(40087),
        forEach: n(77412),
        isArray: n(1469),
        isError: n(64647),
        isFunction: n(23560),
        isWeakMap: n(81018),
        iteratee: n(72594),
        keys: n(280),
        rearg: n(4963),
        toInteger: n(40554),
        toPath: n(30084),
      };
    },
    92822: function (e, t, n) {
      var o = n(84599),
        r = n(4269);
      e.exports = function (e, t, n) {
        return o(r, e, t, n);
      };
    },
    8816: function (e, t, n) {
      var o = n(92822)('flow', n(59242));
      (o.placeholder = n(69306)), (e.exports = o);
    },
    46898: function (e, t, n) {
      e.exports = n(8816);
    },
    33856: function (e, t, n) {
      var o = n(29932),
        r = n(47556),
        i = n(5976),
        a = n(24387),
        s = n(10928),
        c = i(function (e) {
          var t = s(e),
            n = o(e, a);
          return (
            (t = 'function' == typeof t ? t : void 0) && n.pop(),
            n.length && n[0] === e[0] ? r(n, void 0, t) : []
          );
        });
      e.exports = c;
    },
    64647: function (e, t, n) {
      var o = n(44239),
        r = n(37005),
        i = n(68630);
      e.exports = function (e) {
        if (!r(e)) return !1;
        var t = o(e);
        return (
          '[object Error]' == t ||
          '[object DOMException]' == t ||
          ('string' == typeof e.message && 'string' == typeof e.name && !i(e))
        );
      };
    },
    81018: function (e, t, n) {
      var o = n(64160),
        r = n(37005);
      e.exports = function (e) {
        return r(e) && '[object WeakMap]' == o(e);
      };
    },
    72594: function (e, t, n) {
      var o = n(85990),
        r = n(67206);
      e.exports = function (e) {
        return r('function' == typeof e ? e : o(e, 1));
      };
    },
    4963: function (e, t, n) {
      var o = n(97727),
        r = n(92129),
        i = r(function (e, t) {
          return o(e, 256, void 0, void 0, void 0, t);
        });
      e.exports = i;
    },
    36968: function (e, t, n) {
      var o = n(10611);
      e.exports = function (e, t, n) {
        return null == e ? e : o(e, t, n);
      };
    },
    30084: function (e, t, n) {
      var o = n(29932),
        r = n(6450),
        i = n(1469),
        a = n(33448),
        s = n(55514),
        c = n(40327),
        l = n(79833);
      e.exports = function (e) {
        return i(e) ? o(e, c) : a(e) ? [e] : r(s(l(e)));
      };
    },
    11700: function (e, t, n) {
      var o = n(98805)('toUpperCase');
      e.exports = o;
    },
    8111: function (e, t, n) {
      var o = n(96425),
        r = n(7548),
        i = n(9435),
        a = n(1469),
        s = n(37005),
        c = n(21913),
        l = Object.prototype.hasOwnProperty;
      function u(e) {
        if (s(e) && !a(e) && !(e instanceof o)) {
          if (e instanceof r) return e;
          if (l.call(e, '__wrapped__')) return c(e);
        }
        return new r(e);
      }
      (u.prototype = i.prototype),
        (u.prototype.constructor = u),
        (e.exports = u);
    },
    39612: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const o = (0, n(91373).Z)('book', [
        [
          'path',
          {
            d: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20',
            key: 'k3hazp',
          },
        ],
      ]);
    },
    87756: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const o = (0, n(91373).Z)('cloud-upload', [
        ['path', { d: 'M12 13v8', key: '1l5pq0' }],
        [
          'path',
          {
            d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242',
            key: '1pljnt',
          },
        ],
        ['path', { d: 'm8 17 4-4 4 4', key: '1quai1' }],
      ]);
    },
    84031: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const o = (0, n(91373).Z)('list-ordered', [
        ['path', { d: 'M10 12h11', key: '6m4ad9' }],
        ['path', { d: 'M10 18h11', key: '11hvi2' }],
        ['path', { d: 'M10 6h11', key: 'c7qv1k' }],
        ['path', { d: 'M4 10h2', key: '16xx2s' }],
        ['path', { d: 'M4 6h1v4', key: 'cnovpq' }],
        ['path', { d: 'M6 18H4c0-1 2-2 2-3s-1-1.5-2-1', key: 'm9a95d' }],
      ]);
    },
    77325: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const o = (0, n(91373).Z)('option', [
        ['path', { d: 'M3 3h6l6 18h6', key: 'ph9rgk' }],
        ['path', { d: 'M14 3h7', key: '16f0ms' }],
      ]);
    },
    84617: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const o = (0, n(91373).Z)('paperclip', [
        ['path', { d: 'M13.234 20.252 21 12.3', key: '1cbrk9' }],
        [
          'path',
          {
            d: 'm16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486',
            key: '1pkts6',
          },
        ],
      ]);
    },
    57498: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const o = (0, n(91373).Z)('text-cursor-input', [
        [
          'path',
          { d: 'M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6', key: '1528k5' },
        ],
        [
          'path',
          { d: 'M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7', key: '13ksps' },
        ],
        [
          'path',
          { d: 'M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1', key: '1n9rhb' },
        ],
        ['path', { d: 'M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1', key: '1mj8rg' }],
        ['path', { d: 'M9 6v12', key: 'velyjx' }],
      ]);
    },
    13318: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const o = (0, n(91373).Z)('toggle-left', [
        ['circle', { cx: '9', cy: '12', r: '3', key: 'u3jwor' }],
        [
          'rect',
          { width: '20', height: '14', x: '2', y: '5', rx: '7', key: 'g7kal2' },
        ],
      ]);
    },
    6571: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const o = (0, n(91373).Z)('wand-sparkles', [
        [
          'path',
          {
            d: 'm21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72',
            key: 'ul74o6',
          },
        ],
        ['path', { d: 'm14 7 3 3', key: '1r5n42' }],
        ['path', { d: 'M5 6v4', key: 'ilb8ba' }],
        ['path', { d: 'M19 14v4', key: 'blhpug' }],
        ['path', { d: 'M10 2v2', key: '7u0qdc' }],
        ['path', { d: 'M7 8H3', key: 'zfb6yr' }],
        ['path', { d: 'M21 16h-4', key: '1cnmox' }],
        ['path', { d: 'M11 3H9', key: '1obp7u' }],
      ]);
    },
    96749: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const o = (0, n(91373).Z)('wrap-text', [
        ['line', { x1: '3', x2: '21', y1: '6', y2: '6', key: '4m8b97' }],
        ['path', { d: 'M3 12h15a3 3 0 1 1 0 6h-4', key: '1cl7v7' }],
        ['polyline', { points: '16 16 14 18 16 20', key: '1jznyi' }],
        ['line', { x1: '3', x2: '10', y1: '18', y2: '18', key: '1h33wv' }],
      ]);
    },
    53250: function (e, t, n) {
      'use strict';
      var o = n(62435);
      var r =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        i = o.useState,
        a = o.useEffect,
        s = o.useLayoutEffect,
        c = o.useDebugValue;
      function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !r(e, n);
        } catch (e) {
          return !0;
        }
      }
      var u =
        'undefined' == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                o = i({ inst: { value: n, getSnapshot: t } }),
                r = o[0].inst,
                u = o[1];
              return (
                s(
                  function () {
                    (r.value = n), (r.getSnapshot = t), l(r) && u({ inst: r });
                  },
                  [e, n, t],
                ),
                a(
                  function () {
                    return (
                      l(r) && u({ inst: r }),
                      e(function () {
                        l(r) && u({ inst: r });
                      })
                    );
                  },
                  [e],
                ),
                c(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== o.useSyncExternalStore ? o.useSyncExternalStore : u;
    },
    50139: function (e, t, n) {
      'use strict';
      var o = n(62435),
        r = n(61688);
      var i =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = r.useSyncExternalStore,
        s = o.useRef,
        c = o.useEffect,
        l = o.useMemo,
        u = o.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, o, r) {
        var d = s(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        d = l(
          function () {
            function e(e) {
              if (!c) {
                if (
                  ((c = !0), (a = e), (e = o(e)), void 0 !== r && f.hasValue)
                ) {
                  var t = f.value;
                  if (r(t, e)) return (s = t);
                }
                return (s = e);
              }
              if (((t = s), i(a, e))) return t;
              var n = o(e);
              return void 0 !== r && r(t, n) ? t : ((a = e), (s = n));
            }
            var a,
              s,
              c = !1,
              l = void 0 === n ? null : n;
            return [
              function () {
                return e(t());
              },
              null === l
                ? void 0
                : function () {
                    return e(l());
                  },
            ];
          },
          [t, n, o, r],
        );
        var h = a(e, d[0], d[1]);
        return (
          c(
            function () {
              (f.hasValue = !0), (f.value = h);
            },
            [h],
          ),
          u(h),
          h
        );
      };
    },
    61688: function (e, t, n) {
      'use strict';
      e.exports = n(53250);
    },
    52798: function (e, t, n) {
      'use strict';
      e.exports = n(50139);
    },
    10952: function (e, t, n) {
      'use strict';
      n.d(t, {
        Ee: function () {
          return x;
        },
        NY: function () {
          return b;
        },
        fC: function () {
          return w;
        },
      });
      var o = n(62435),
        r = n(25360),
        i = n(79698),
        a = n(9981),
        s = n(75320),
        c = n(86074),
        l = 'Avatar',
        [u, d] = (0, r.b)(l),
        [f, h] = u(l),
        p = o.forwardRef((e, t) => {
          const { __scopeAvatar: n, ...r } = e,
            [i, a] = o.useState('idle');
          return (0, c.jsx)(f, {
            scope: n,
            imageLoadingStatus: i,
            onImageLoadingStatusChange: a,
            children: (0, c.jsx)(s.WV.span, { ...r, ref: t }),
          });
        });
      p.displayName = l;
      var g = 'AvatarImage',
        m = o.forwardRef((e, t) => {
          const {
              __scopeAvatar: n,
              src: r,
              onLoadingStatusChange: l = () => {},
              ...u
            } = e,
            d = h(g, n),
            f = (function (e, t) {
              const [n, r] = o.useState('idle');
              return (
                (0, a.b)(() => {
                  if (!e) return void r('error');
                  let n = !0;
                  const o = new window.Image(),
                    i = (e) => () => {
                      n && r(e);
                    };
                  return (
                    r('loading'),
                    (o.onload = i('loaded')),
                    (o.onerror = i('error')),
                    (o.src = e),
                    t && (o.referrerPolicy = t),
                    () => {
                      n = !1;
                    }
                  );
                }, [e, t]),
                n
              );
            })(r, u.referrerPolicy),
            p = (0, i.W)((e) => {
              l(e), d.onImageLoadingStatusChange(e);
            });
          return (
            (0, a.b)(() => {
              'idle' !== f && p(f);
            }, [f, p]),
            'loaded' === f
              ? (0, c.jsx)(s.WV.img, { ...u, ref: t, src: r })
              : null
          );
        });
      m.displayName = g;
      var y = 'AvatarFallback',
        v = o.forwardRef((e, t) => {
          const { __scopeAvatar: n, delayMs: r, ...i } = e,
            a = h(y, n),
            [l, u] = o.useState(void 0 === r);
          return (
            o.useEffect(() => {
              if (void 0 !== r) {
                const e = window.setTimeout(() => u(!0), r);
                return () => window.clearTimeout(e);
              }
            }, [r]),
            l && 'loaded' !== a.imageLoadingStatus
              ? (0, c.jsx)(s.WV.span, { ...i, ref: t })
              : null
          );
        });
      v.displayName = y;
      var w = p,
        x = m,
        b = v;
    },
    60761: function (e, t, n) {
      'use strict';
      n.d(t, {
        bU: function () {
          return _;
        },
        fC: function () {
          return S;
        },
      });
      var o = n(62435),
        r = n(36206),
        i = n(28771),
        a = n(25360),
        s = n(77342),
        c = n(57898),
        l = n(7546),
        u = n(75320),
        d = n(86074),
        f = 'Switch',
        [h, p] = (0, a.b)(f),
        [g, m] = h(f),
        y = o.forwardRef((e, t) => {
          const {
              __scopeSwitch: n,
              name: a,
              checked: c,
              defaultChecked: l,
              required: f,
              disabled: h,
              value: p = 'on',
              onCheckedChange: m,
              form: y,
              ...v
            } = e,
            [w, S] = o.useState(null),
            _ = (0, i.e)(t, (e) => S(e)),
            k = o.useRef(!1),
            E = !w || y || !!w.closest('form'),
            [C = !1, M] = (0, s.T)({ prop: c, defaultProp: l, onChange: m });
          return (0, d.jsxs)(g, {
            scope: n,
            checked: C,
            disabled: h,
            children: [
              (0, d.jsx)(u.WV.button, {
                type: 'button',
                role: 'switch',
                'aria-checked': C,
                'aria-required': f,
                'data-state': b(C),
                'data-disabled': h ? '' : void 0,
                disabled: h,
                value: p,
                ...v,
                ref: _,
                onClick: (0, r.M)(e.onClick, (e) => {
                  M((e) => !e),
                    E &&
                      ((k.current = e.isPropagationStopped()),
                      k.current || e.stopPropagation());
                }),
              }),
              E &&
                (0, d.jsx)(x, {
                  control: w,
                  bubbles: !k.current,
                  name: a,
                  value: p,
                  checked: C,
                  required: f,
                  disabled: h,
                  form: y,
                  style: { transform: 'translateX(-100%)' },
                }),
            ],
          });
        });
      y.displayName = f;
      var v = 'SwitchThumb',
        w = o.forwardRef((e, t) => {
          const { __scopeSwitch: n, ...o } = e,
            r = m(v, n);
          return (0, d.jsx)(u.WV.span, {
            'data-state': b(r.checked),
            'data-disabled': r.disabled ? '' : void 0,
            ...o,
            ref: t,
          });
        });
      w.displayName = v;
      var x = (e) => {
        const { control: t, checked: n, bubbles: r = !0, ...i } = e,
          a = o.useRef(null),
          s = (0, c.D)(n),
          u = (0, l.t)(t);
        return (
          o.useEffect(() => {
            const e = a.current,
              t = window.HTMLInputElement.prototype,
              o = Object.getOwnPropertyDescriptor(t, 'checked').set;
            if (s !== n && o) {
              const t = new Event('click', { bubbles: r });
              o.call(e, n), e.dispatchEvent(t);
            }
          }, [s, n, r]),
          (0, d.jsx)('input', {
            type: 'checkbox',
            'aria-hidden': !0,
            defaultChecked: n,
            ...i,
            tabIndex: -1,
            ref: a,
            style: {
              ...e.style,
              ...u,
              position: 'absolute',
              pointerEvents: 'none',
              opacity: 0,
              margin: 0,
            },
          })
        );
      };
      function b(e) {
        return e ? 'checked' : 'unchecked';
      }
      var S = y,
        _ = w;
    },
    5312: function (e, t, n) {
      'use strict';
      n.d(t, {
        ZP: function () {
          return s;
        },
        wx: function () {
          return i;
        },
        yi: function () {
          return a;
        },
      });
      var o = n(93816);
      function r(e, t) {
        return function (n) {
          return e + n * t;
        };
      }
      function i(e, t) {
        var n = t - e;
        return n
          ? r(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
          : (0, o.Z)(isNaN(e) ? t : e);
      }
      function a(e) {
        return 1 == (e = +e)
          ? s
          : function (t, n) {
              return n - t
                ? (function (e, t, n) {
                    return (
                      (e = Math.pow(e, n)),
                      (t = Math.pow(t, n) - e),
                      (n = 1 / n),
                      function (o) {
                        return Math.pow(e + o * t, n);
                      }
                    );
                  })(t, n, e)
                : (0, o.Z)(isNaN(t) ? n : t);
            };
      }
      function s(e, t) {
        var n = t - e;
        return n ? r(e, n) : (0, o.Z)(isNaN(e) ? t : e);
      }
    },
    93816: function (e, t) {
      'use strict';
      t.Z = function (e) {
        return function () {
          return e;
        };
      };
    },
    79848: function (e, t, n) {
      'use strict';
      function o(e, t) {
        return (
          (e = +e),
          (t = +t),
          function (n) {
            return e * (1 - n) + t * n;
          }
        );
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    47844: function (e, t, n) {
      'use strict';
      n.d(t, {
        ZP: function () {
          return a;
        },
        hD: function () {
          return c;
        },
      });
      var o = n(96683);
      function r(e, t, n, o, r) {
        var i = e * e,
          a = i * e;
        return (
          ((1 - 3 * e + 3 * i - a) * t +
            (4 - 6 * i + 3 * a) * n +
            (1 + 3 * e + 3 * i - 3 * a) * o +
            a * r) /
          6
        );
      }
      var i = n(5312),
        a = (function e(t) {
          var n = (0, i.yi)(t);
          function r(e, t) {
            var r = n((e = (0, o.B8)(e)).r, (t = (0, o.B8)(t)).r),
              a = n(e.g, t.g),
              s = n(e.b, t.b),
              c = (0, i.ZP)(e.opacity, t.opacity);
            return function (t) {
              return (
                (e.r = r(t)),
                (e.g = a(t)),
                (e.b = s(t)),
                (e.opacity = c(t)),
                e + ''
              );
            };
          }
          return (r.gamma = e), r;
        })(1);
      function s(e) {
        return function (t) {
          var n,
            r,
            i = t.length,
            a = new Array(i),
            s = new Array(i),
            c = new Array(i);
          for (n = 0; n < i; ++n)
            (r = (0, o.B8)(t[n])),
              (a[n] = r.r || 0),
              (s[n] = r.g || 0),
              (c[n] = r.b || 0);
          return (
            (a = e(a)),
            (s = e(s)),
            (c = e(c)),
            (r.opacity = 1),
            function (e) {
              return (r.r = a(e)), (r.g = s(e)), (r.b = c(e)), r + '';
            }
          );
        };
      }
      var c = s(function (e) {
        var t = e.length - 1;
        return function (n) {
          var o =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), t - 1) : Math.floor(n * t),
            i = e[o],
            a = e[o + 1],
            s = o > 0 ? e[o - 1] : 2 * i - a,
            c = o < t - 1 ? e[o + 2] : 2 * a - i;
          return r((n - o / t) * t, s, i, a, c);
        };
      });
      s(function (e) {
        var t = e.length;
        return function (n) {
          var o = Math.floor(((n %= 1) < 0 ? ++n : n) * t),
            i = e[(o + t - 1) % t],
            a = e[o % t],
            s = e[(o + 1) % t],
            c = e[(o + 2) % t];
          return r((n - o / t) * t, i, a, s, c);
        };
      });
    },
    20823: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = n(79848),
        r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        i = new RegExp(r.source, 'g');
      function a(e, t) {
        var n,
          a,
          s,
          c = (r.lastIndex = i.lastIndex = 0),
          l = -1,
          u = [],
          d = [];
        for (e += '', t += ''; (n = r.exec(e)) && (a = i.exec(t)); )
          (s = a.index) > c &&
            ((s = t.slice(c, s)), u[l] ? (u[l] += s) : (u[++l] = s)),
            (n = n[0]) === (a = a[0])
              ? u[l]
                ? (u[l] += a)
                : (u[++l] = a)
              : ((u[++l] = null), d.push({ i: l, x: (0, o.Z)(n, a) })),
            (c = i.lastIndex);
        return (
          c < t.length && ((s = t.slice(c)), u[l] ? (u[l] += s) : (u[++l] = s)),
          u.length < 2
            ? d[0]
              ? (function (e) {
                  return function (t) {
                    return e(t) + '';
                  };
                })(d[0].x)
              : (function (e) {
                  return function () {
                    return e;
                  };
                })(t)
            : ((t = d.length),
              function (e) {
                for (var n, o = 0; o < t; ++o) u[(n = d[o]).i] = n.x(e);
                return u.join('');
              })
        );
      }
    },
    13879: function (e, t, n) {
      'use strict';
      n.d(t, {
        mY: function () {
          return $;
        },
      });
      var o = 0.999,
        r = /[\\\/_+.#"@\[\(\{&]/,
        i = /[\\\/_+.#"@\[\(\{&]/g,
        a = /[\s-]/,
        s = /[\s-]/g;
      function c(e, t, n, l, u, d, f) {
        if (d === t.length) return u === e.length ? 1 : 0.99;
        var h = `${u},${d}`;
        if (void 0 !== f[h]) return f[h];
        for (
          var p, g, m, y, v = l.charAt(d), w = n.indexOf(v, u), x = 0;
          w >= 0;

        )
          (p = c(e, t, n, l, w + 1, d + 1, f)) > x &&
            (w === u
              ? (p *= 1)
              : r.test(e.charAt(w - 1))
                ? ((p *= 0.8),
                  (m = e.slice(u, w - 1).match(i)) &&
                    u > 0 &&
                    (p *= Math.pow(o, m.length)))
                : a.test(e.charAt(w - 1))
                  ? ((p *= 0.9),
                    (y = e.slice(u, w - 1).match(s)) &&
                      u > 0 &&
                      (p *= Math.pow(o, y.length)))
                  : ((p *= 0.17), u > 0 && (p *= Math.pow(o, w - u))),
            e.charAt(w) !== t.charAt(d) && (p *= 0.9999)),
            ((p < 0.1 && n.charAt(w - 1) === l.charAt(d + 1)) ||
              (l.charAt(d + 1) === l.charAt(d) &&
                n.charAt(w - 1) !== l.charAt(d))) &&
              0.1 * (g = c(e, t, n, l, w + 1, d + 2, f)) > p &&
              (p = 0.1 * g),
            p > x && (x = p),
            (w = n.indexOf(v, w + 1));
        return (f[h] = x), x;
      }
      function l(e) {
        return e.toLowerCase().replace(s, ' ');
      }
      function u(e, t, n) {
        return c(
          (e = n && n.length > 0 ? '' + (e + ' ' + n.join(' ')) : e),
          t,
          l(e),
          l(t),
          0,
          0,
          {},
        );
      }
      var d = n(28828),
        f = n(62435),
        h = n(75320),
        p = n(91276),
        g = n(1816),
        m = '[cmdk-group=""]',
        y = '[cmdk-group-items=""]',
        v = '[cmdk-item=""]',
        w = `${v}:not([aria-disabled="true"])`,
        x = 'cmdk-item-select',
        b = 'data-value',
        S = (e, t, n) => u(e, t, n),
        _ = f.createContext(void 0),
        k = () => f.useContext(_),
        E = f.createContext(void 0),
        C = () => f.useContext(E),
        M = f.createContext(void 0),
        N = f.forwardRef((e, t) => {
          let n = Z(() => {
              var t, n;
              return {
                search: '',
                value:
                  null != (n = null != (t = e.value) ? t : e.defaultValue)
                    ? n
                    : '',
                filtered: { count: 0, items: new Map(), groups: new Set() },
              };
            }),
            o = Z(() => new Set()),
            r = Z(() => new Map()),
            i = Z(() => new Map()),
            a = Z(() => new Set()),
            s = B(e),
            {
              label: c,
              children: l,
              value: u,
              onValueChange: d,
              filter: g,
              shouldFilter: k,
              loop: C,
              disablePointerSelection: M = !1,
              vimBindings: N = !0,
              ...P
            } = e,
            I = (0, p.M)(),
            O = (0, p.M)(),
            z = (0, p.M)(),
            A = f.useRef(null),
            D = Y();
          V(() => {
            if (void 0 !== u) {
              let e = u.trim();
              (n.current.value = e), R.emit();
            }
          }, [u]),
            V(() => {
              D(6, q);
            }, []);
          let R = f.useMemo(
              () => ({
                subscribe: (e) => (a.current.add(e), () => a.current.delete(e)),
                snapshot: () => n.current,
                setState: (e, t, o) => {
                  var r, i, a;
                  if (!Object.is(n.current[e], t)) {
                    if (((n.current[e] = t), 'search' === e)) W(), H(), D(1, X);
                    else if (
                      'value' === e &&
                      (o || D(5, q),
                      void 0 !== (null == (r = s.current) ? void 0 : r.value))
                    ) {
                      let e = null != t ? t : '';
                      return void (
                        null == (a = (i = s.current).onValueChange) ||
                        a.call(i, e)
                      );
                    }
                    R.emit();
                  }
                },
                emit: () => {
                  a.current.forEach((e) => e());
                },
              }),
              [],
            ),
            j = f.useMemo(
              () => ({
                value: (e, t, o) => {
                  var r;
                  t !== (null == (r = i.current.get(e)) ? void 0 : r.value) &&
                    (i.current.set(e, { value: t, keywords: o }),
                    n.current.filtered.items.set(e, $(t, o)),
                    D(2, () => {
                      H(), R.emit();
                    }));
                },
                item: (e, t) => (
                  o.current.add(e),
                  t &&
                    (r.current.has(t)
                      ? r.current.get(t).add(e)
                      : r.current.set(t, new Set([e]))),
                  D(3, () => {
                    W(), H(), n.current.value || X(), R.emit();
                  }),
                  () => {
                    i.current.delete(e),
                      o.current.delete(e),
                      n.current.filtered.items.delete(e);
                    let t = G();
                    D(4, () => {
                      W(),
                        (null == t ? void 0 : t.getAttribute('id')) === e &&
                          X(),
                        R.emit();
                    });
                  }
                ),
                group: (e) => (
                  r.current.has(e) || r.current.set(e, new Set()),
                  () => {
                    i.current.delete(e), r.current.delete(e);
                  }
                ),
                filter: () => s.current.shouldFilter,
                label: c || e['aria-label'],
                getDisablePointerSelection: () =>
                  s.current.disablePointerSelection,
                listId: I,
                inputId: z,
                labelId: O,
                listInnerRef: A,
              }),
              [],
            );
          function $(e, t) {
            var o, r;
            let i =
              null != (r = null == (o = s.current) ? void 0 : o.filter) ? r : S;
            return e ? i(e, n.current.search, t) : 0;
          }
          function H() {
            if (!n.current.search || !1 === s.current.shouldFilter) return;
            let e = n.current.filtered.items,
              t = [];
            n.current.filtered.groups.forEach((n) => {
              let o = r.current.get(n),
                i = 0;
              o.forEach((t) => {
                let n = e.get(t);
                i = Math.max(n, i);
              }),
                t.push([n, i]);
            });
            let o = A.current;
            U()
              .sort((t, n) => {
                var o, r;
                let i = t.getAttribute('id'),
                  a = n.getAttribute('id');
                return (
                  (null != (o = e.get(a)) ? o : 0) -
                  (null != (r = e.get(i)) ? r : 0)
                );
              })
              .forEach((e) => {
                let t = e.closest(y);
                t
                  ? t.appendChild(
                      e.parentElement === t ? e : e.closest(`${y} > *`),
                    )
                  : o.appendChild(
                      e.parentElement === o ? e : e.closest(`${y} > *`),
                    );
              }),
              t
                .sort((e, t) => t[1] - e[1])
                .forEach((e) => {
                  var t;
                  let n =
                    null == (t = A.current)
                      ? void 0
                      : t.querySelector(
                          `${m}[${b}="${encodeURIComponent(e[0])}"]`,
                        );
                  null == n || n.parentElement.appendChild(n);
                });
          }
          function X() {
            let e = U().find((e) => 'true' !== e.getAttribute('aria-disabled')),
              t = null == e ? void 0 : e.getAttribute(b);
            R.setState('value', t || void 0);
          }
          function W() {
            var e, t, a, c;
            if (!n.current.search || !1 === s.current.shouldFilter)
              return void (n.current.filtered.count = o.current.size);
            n.current.filtered.groups = new Set();
            let l = 0;
            for (let r of o.current) {
              let o = $(
                null != (t = null == (e = i.current.get(r)) ? void 0 : e.value)
                  ? t
                  : '',
                null !=
                  (c = null == (a = i.current.get(r)) ? void 0 : a.keywords)
                  ? c
                  : [],
              );
              n.current.filtered.items.set(r, o), o > 0 && l++;
            }
            for (let [e, t] of r.current)
              for (let o of t)
                if (n.current.filtered.items.get(o) > 0) {
                  n.current.filtered.groups.add(e);
                  break;
                }
            n.current.filtered.count = l;
          }
          function q() {
            var e, t, n;
            let o = G();
            o &&
              ((null == (e = o.parentElement) ? void 0 : e.firstChild) === o &&
                (null ==
                  (n =
                    null == (t = o.closest(m))
                      ? void 0
                      : t.querySelector('[cmdk-group-heading=""]')) ||
                  n.scrollIntoView({ block: 'nearest' })),
              o.scrollIntoView({ block: 'nearest' }));
          }
          function G() {
            var e;
            return null == (e = A.current)
              ? void 0
              : e.querySelector(`${v}[aria-selected="true"]`);
          }
          function U() {
            var e;
            return Array.from(
              (null == (e = A.current) ? void 0 : e.querySelectorAll(w)) || [],
            );
          }
          function Q(e) {
            let t = U()[e];
            t && R.setState('value', t.getAttribute(b));
          }
          function J(e) {
            var t;
            let n = G(),
              o = U(),
              r = o.findIndex((e) => e === n),
              i = o[r + e];
            null != (t = s.current) &&
              t.loop &&
              (i =
                r + e < 0
                  ? o[o.length - 1]
                  : r + e === o.length
                    ? o[0]
                    : o[r + e]),
              i && R.setState('value', i.getAttribute(b));
          }
          function ee(e) {
            let t,
              n = G(),
              o = null == n ? void 0 : n.closest(m);
            for (; o && !t; )
              (o = e > 0 ? L(o, m) : T(o, m)),
                (t = null == o ? void 0 : o.querySelector(w));
            t ? R.setState('value', t.getAttribute(b)) : J(e);
          }
          let te = () => Q(U().length - 1),
            ne = (e) => {
              e.preventDefault(), e.metaKey ? te() : e.altKey ? ee(1) : J(1);
            },
            oe = (e) => {
              e.preventDefault(), e.metaKey ? Q(0) : e.altKey ? ee(-1) : J(-1);
            };
          return f.createElement(
            h.WV.div,
            {
              ref: t,
              tabIndex: -1,
              ...P,
              'cmdk-root': '',
              onKeyDown: (e) => {
                var t;
                if (
                  (null == (t = P.onKeyDown) || t.call(P, e),
                  !e.defaultPrevented)
                )
                  switch (e.key) {
                    case 'n':
                    case 'j':
                      N && e.ctrlKey && ne(e);
                      break;
                    case 'ArrowDown':
                      ne(e);
                      break;
                    case 'p':
                    case 'k':
                      N && e.ctrlKey && oe(e);
                      break;
                    case 'ArrowUp':
                      oe(e);
                      break;
                    case 'Home':
                      e.preventDefault(), Q(0);
                      break;
                    case 'End':
                      e.preventDefault(), te();
                      break;
                    case 'Enter':
                      if (!e.nativeEvent.isComposing && 229 !== e.keyCode) {
                        e.preventDefault();
                        let t = G();
                        if (t) {
                          let e = new Event(x);
                          t.dispatchEvent(e);
                        }
                      }
                  }
              },
            },
            f.createElement(
              'label',
              { 'cmdk-label': '', htmlFor: j.inputId, id: j.labelId, style: K },
              c,
            ),
            F(e, (e) =>
              f.createElement(
                E.Provider,
                { value: R },
                f.createElement(_.Provider, { value: j }, e),
              ),
            ),
          );
        }),
        P = f.forwardRef((e, t) => {
          var n, o;
          let r = (0, p.M)(),
            i = f.useRef(null),
            a = f.useContext(M),
            s = k(),
            c = B(e),
            l =
              null != (o = null == (n = c.current) ? void 0 : n.forceMount)
                ? o
                : null == a
                  ? void 0
                  : a.forceMount;
          V(() => {
            if (!l) return s.item(r, null == a ? void 0 : a.id);
          }, [l]);
          let u = W(r, i, [e.value, e.children, i], e.keywords),
            d = C(),
            g = X((e) => e.value && e.value === u.current),
            m = X(
              (e) =>
                !(!l && !1 !== s.filter()) ||
                !e.search ||
                e.filtered.items.get(r) > 0,
            );
          function y() {
            var e, t;
            v(), null == (t = (e = c.current).onSelect) || t.call(e, u.current);
          }
          function v() {
            d.setState('value', u.current, !0);
          }
          if (
            (f.useEffect(() => {
              let t = i.current;
              if (t && !e.disabled)
                return (
                  t.addEventListener(x, y), () => t.removeEventListener(x, y)
                );
            }, [m, e.onSelect, e.disabled]),
            !m)
          )
            return null;
          let {
            disabled: w,
            value: b,
            onSelect: S,
            forceMount: _,
            keywords: E,
            ...N
          } = e;
          return f.createElement(
            h.WV.div,
            {
              ref: H([i, t]),
              ...N,
              id: r,
              'cmdk-item': '',
              role: 'option',
              'aria-disabled': !!w,
              'aria-selected': !!g,
              'data-disabled': !!w,
              'data-selected': !!g,
              onPointerMove: w || s.getDisablePointerSelection() ? void 0 : v,
              onClick: w ? void 0 : y,
            },
            e.children,
          );
        }),
        I = f.forwardRef((e, t) => {
          let { heading: n, children: o, forceMount: r, ...i } = e,
            a = (0, p.M)(),
            s = f.useRef(null),
            c = f.useRef(null),
            l = (0, p.M)(),
            u = k(),
            d = X(
              (e) =>
                !(!r && !1 !== u.filter()) ||
                !e.search ||
                e.filtered.groups.has(a),
            );
          V(() => u.group(a), []), W(a, s, [e.value, e.heading, c]);
          let g = f.useMemo(() => ({ id: a, forceMount: r }), [r]);
          return f.createElement(
            h.WV.div,
            {
              ref: H([s, t]),
              ...i,
              'cmdk-group': '',
              role: 'presentation',
              hidden: !d || void 0,
            },
            n &&
              f.createElement(
                'div',
                { ref: c, 'cmdk-group-heading': '', 'aria-hidden': !0, id: l },
                n,
              ),
            F(e, (e) =>
              f.createElement(
                'div',
                {
                  'cmdk-group-items': '',
                  role: 'group',
                  'aria-labelledby': n ? l : void 0,
                },
                f.createElement(M.Provider, { value: g }, e),
              ),
            ),
          );
        }),
        O = f.forwardRef((e, t) => {
          let { alwaysRender: n, ...o } = e,
            r = f.useRef(null),
            i = X((e) => !e.search);
          return n || i
            ? f.createElement(h.WV.div, {
                ref: H([r, t]),
                ...o,
                'cmdk-separator': '',
                role: 'separator',
              })
            : null;
        }),
        z = f.forwardRef((e, t) => {
          let { onValueChange: n, ...o } = e,
            r = null != e.value,
            i = C(),
            a = X((e) => e.search),
            s = X((e) => e.value),
            c = k(),
            l = f.useMemo(() => {
              var e;
              let t =
                null == (e = c.listInnerRef.current)
                  ? void 0
                  : e.querySelector(`${v}[${b}="${encodeURIComponent(s)}"]`);
              return null == t ? void 0 : t.getAttribute('id');
            }, []);
          return (
            f.useEffect(() => {
              null != e.value && i.setState('search', e.value);
            }, [e.value]),
            f.createElement(h.WV.input, {
              ref: t,
              ...o,
              'cmdk-input': '',
              autoComplete: 'off',
              autoCorrect: 'off',
              spellCheck: !1,
              'aria-autocomplete': 'list',
              role: 'combobox',
              'aria-expanded': !0,
              'aria-controls': c.listId,
              'aria-labelledby': c.labelId,
              'aria-activedescendant': l,
              id: c.inputId,
              type: 'text',
              value: r ? e.value : a,
              onChange: (e) => {
                r || i.setState('search', e.target.value),
                  null == n || n(e.target.value);
              },
            })
          );
        }),
        A = f.forwardRef((e, t) => {
          let { children: n, label: o = 'Suggestions', ...r } = e,
            i = f.useRef(null),
            a = f.useRef(null),
            s = k();
          return (
            f.useEffect(() => {
              if (a.current && i.current) {
                let e,
                  t = a.current,
                  n = i.current,
                  o = new ResizeObserver(() => {
                    e = requestAnimationFrame(() => {
                      let e = t.offsetHeight;
                      n.style.setProperty(
                        '--cmdk-list-height',
                        e.toFixed(1) + 'px',
                      );
                    });
                  });
                return (
                  o.observe(t),
                  () => {
                    cancelAnimationFrame(e), o.unobserve(t);
                  }
                );
              }
            }, []),
            f.createElement(
              h.WV.div,
              {
                ref: H([i, t]),
                ...r,
                'cmdk-list': '',
                role: 'listbox',
                'aria-label': o,
                id: s.listId,
              },
              F(e, (e) =>
                f.createElement(
                  'div',
                  { ref: H([a, s.listInnerRef]), 'cmdk-list-sizer': '' },
                  e,
                ),
              ),
            )
          );
        }),
        D = f.forwardRef((e, t) => {
          let {
            open: n,
            onOpenChange: o,
            overlayClassName: r,
            contentClassName: i,
            container: a,
            ...s
          } = e;
          return f.createElement(
            d.fC,
            { open: n, onOpenChange: o },
            f.createElement(
              d.h_,
              { container: a },
              f.createElement(d.aV, { 'cmdk-overlay': '', className: r }),
              f.createElement(
                d.VY,
                { 'aria-label': e.label, 'cmdk-dialog': '', className: i },
                f.createElement(N, { ref: t, ...s }),
              ),
            ),
          );
        }),
        R = f.forwardRef((e, t) =>
          X((e) => 0 === e.filtered.count)
            ? f.createElement(h.WV.div, {
                ref: t,
                ...e,
                'cmdk-empty': '',
                role: 'presentation',
              })
            : null,
        ),
        j = f.forwardRef((e, t) => {
          let { progress: n, children: o, label: r = 'Loading...', ...i } = e;
          return f.createElement(
            h.WV.div,
            {
              ref: t,
              ...i,
              'cmdk-loading': '',
              role: 'progressbar',
              'aria-valuenow': n,
              'aria-valuemin': 0,
              'aria-valuemax': 100,
              'aria-label': r,
            },
            F(e, (e) => f.createElement('div', { 'aria-hidden': !0 }, e)),
          );
        }),
        $ = Object.assign(N, {
          List: A,
          Item: P,
          Input: z,
          Group: I,
          Separator: O,
          Dialog: D,
          Empty: R,
          Loading: j,
        });
      function L(e, t) {
        let n = e.nextElementSibling;
        for (; n; ) {
          if (n.matches(t)) return n;
          n = n.nextElementSibling;
        }
      }
      function T(e, t) {
        let n = e.previousElementSibling;
        for (; n; ) {
          if (n.matches(t)) return n;
          n = n.previousElementSibling;
        }
      }
      function B(e) {
        let t = f.useRef(e);
        return (
          V(() => {
            t.current = e;
          }),
          t
        );
      }
      var V = 'undefined' == typeof window ? f.useEffect : f.useLayoutEffect;
      function Z(e) {
        let t = f.useRef();
        return void 0 === t.current && (t.current = e()), t;
      }
      function H(e) {
        return (t) => {
          e.forEach((e) => {
            'function' == typeof e ? e(t) : null != e && (e.current = t);
          });
        };
      }
      function X(e) {
        let t = C(),
          n = () => e(t.snapshot());
        return (0, g.useSyncExternalStore)(t.subscribe, n, n);
      }
      function W(e, t, n, o = []) {
        let r = f.useRef(),
          i = k();
        return (
          V(() => {
            var a;
            let s = (() => {
                var e;
                for (let t of n) {
                  if ('string' == typeof t) return t.trim();
                  if ('object' == typeof t && 'current' in t)
                    return t.current
                      ? null == (e = t.current.textContent)
                        ? void 0
                        : e.trim()
                      : r.current;
                }
              })(),
              c = o.map((e) => e.trim());
            i.value(e, s, c),
              null == (a = t.current) || a.setAttribute(b, s),
              (r.current = s);
          }),
          r
        );
      }
      var Y = () => {
        let [e, t] = f.useState(),
          n = Z(() => new Map());
        return (
          V(() => {
            n.current.forEach((e) => e()), (n.current = new Map());
          }, [e]),
          (e, o) => {
            n.current.set(e, o), t({});
          }
        );
      };
      function F({ asChild: e, children: t }, n) {
        return e && f.isValidElement(t)
          ? f.cloneElement(
              (function (e) {
                let t = e.type;
                return 'function' == typeof t
                  ? t(e.props)
                  : 'render' in t
                    ? t.render(e.props)
                    : e;
              })(t),
              { ref: t.ref },
              n(t.props.children),
            )
          : n(t);
      }
      var K = {
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: '0',
      };
    },
    73445: function (e, t, n) {
      'use strict';
      n.d(t, {
        Ue: function () {
          return d;
        },
      });
      var o = n(43973),
        r = n(62435),
        i = n(52798);
      const { useDebugValue: a } = r,
        { useSyncExternalStoreWithSelector: s } = i;
      let c = !1;
      const l = (e) => e;
      const u = (e) => {
          'function' != typeof e &&
            console.warn(
              "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.",
            );
          const t = 'function' == typeof e ? (0, o.M)(e) : e,
            n = (e, n) =>
              (function (e, t = l, n) {
                n &&
                  !c &&
                  (console.warn(
                    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937",
                  ),
                  (c = !0));
                const o = s(
                  e.subscribe,
                  e.getState,
                  e.getServerState || e.getInitialState,
                  t,
                  n,
                );
                return a(o), o;
              })(t, e, n);
          return Object.assign(n, t), n;
        },
        d = (e) => (e ? u(e) : u);
    },
    782: function (e, t, n) {
      'use strict';
      n.d(t, {
        mW: function () {
          return i;
        },
      });
      const o = new Map(),
        r = (e) => {
          const t = o.get(e);
          return t
            ? Object.fromEntries(
                Object.entries(t.stores).map(([e, t]) => [e, t.getState()]),
              )
            : {};
        },
        i =
          (e, t = {}) =>
          (n, i, s) => {
            const { enabled: c, anonymousActionType: l, store: u, ...d } = t;
            let f;
            try {
              f = (null == c || c) && window.__REDUX_DEVTOOLS_EXTENSION__;
            } catch (e) {}
            if (!f)
              return (
                c &&
                  console.warn(
                    '[zustand devtools middleware] Please install/enable Redux devtools extension',
                  ),
                e(n, i, s)
              );
            const { connection: h, ...p } = ((e, t, n) => {
              if (void 0 === e)
                return { type: 'untracked', connection: t.connect(n) };
              const r = o.get(n.name);
              if (r) return { type: 'tracked', store: e, ...r };
              const i = { connection: t.connect(n), stores: {} };
              return o.set(n.name, i), { type: 'tracked', store: e, ...i };
            })(u, f, d);
            let g = !0;
            s.setState = (e, t, o) => {
              const a = n(e, t);
              if (!g) return a;
              const c =
                void 0 === o
                  ? { type: l || 'anonymous' }
                  : 'string' == typeof o
                    ? { type: o }
                    : o;
              return void 0 === u
                ? (null == h || h.send(c, i()), a)
                : (null == h ||
                    h.send(
                      { ...c, type: `${u}/${c.type}` },
                      { ...r(d.name), [u]: s.getState() },
                    ),
                  a);
            };
            const m = (...e) => {
                const t = g;
                (g = !1), n(...e), (g = t);
              },
              y = e(s.setState, i, s);
            if (
              ('untracked' === p.type
                ? null == h || h.init(y)
                : ((p.stores[p.store] = s),
                  null == h ||
                    h.init(
                      Object.fromEntries(
                        Object.entries(p.stores).map(([e, t]) => [
                          e,
                          e === p.store ? y : t.getState(),
                        ]),
                      ),
                    )),
              s.dispatchFromDevtools && 'function' == typeof s.dispatch)
            ) {
              let e = !1;
              const t = s.dispatch;
              s.dispatch = (...n) => {
                '__setState' !== n[0].type ||
                  e ||
                  (console.warn(
                    '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.',
                  ),
                  (e = !0)),
                  t(...n);
              };
            }
            return (
              h.subscribe((e) => {
                var t;
                switch (e.type) {
                  case 'ACTION':
                    return 'string' != typeof e.payload
                      ? void console.error(
                          '[zustand devtools middleware] Unsupported action format',
                        )
                      : a(e.payload, (e) => {
                          if ('__setState' !== e.type)
                            s.dispatchFromDevtools &&
                              'function' == typeof s.dispatch &&
                              s.dispatch(e);
                          else {
                            if (void 0 === u) return void m(e.state);
                            1 !== Object.keys(e.state).length &&
                              console.error(
                                '\n                    [zustand devtools middleware] Unsupported __setState action format. \n                    When using \'store\' option in devtools(), the \'state\' should have only one key, which is a value of \'store\' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }\n                    ',
                              );
                            const t = e.state[u];
                            if (null == t) return;
                            JSON.stringify(s.getState()) !==
                              JSON.stringify(t) && m(t);
                          }
                        });
                  case 'DISPATCH':
                    switch (e.payload.type) {
                      case 'RESET':
                        return (
                          m(y),
                          void 0 === u
                            ? null == h
                              ? void 0
                              : h.init(s.getState())
                            : null == h
                              ? void 0
                              : h.init(r(d.name))
                        );
                      case 'COMMIT':
                        return void 0 === u
                          ? void (null == h || h.init(s.getState()))
                          : null == h
                            ? void 0
                            : h.init(r(d.name));
                      case 'ROLLBACK':
                        return a(e.state, (e) => {
                          if (void 0 === u)
                            return (
                              m(e), void (null == h || h.init(s.getState()))
                            );
                          m(e[u]), null == h || h.init(r(d.name));
                        });
                      case 'JUMP_TO_STATE':
                      case 'JUMP_TO_ACTION':
                        return a(e.state, (e) => {
                          void 0 !== u
                            ? JSON.stringify(s.getState()) !==
                                JSON.stringify(e[u]) && m(e[u])
                            : m(e);
                        });
                      case 'IMPORT_STATE': {
                        const { nextLiftedState: n } = e.payload,
                          o =
                            null == (t = n.computedStates.slice(-1)[0])
                              ? void 0
                              : t.state;
                        if (!o) return;
                        return (
                          m(void 0 === u ? o : o[u]),
                          void (null == h || h.send(null, n))
                        );
                      }
                      case 'PAUSE_RECORDING':
                        return (g = !g);
                    }
                    return;
                }
              }),
              y
            );
          },
        a = (e, t) => {
          let n;
          try {
            n = JSON.parse(e);
          } catch (e) {
            console.error(
              '[zustand devtools middleware] Could not parse the received json',
              e,
            );
          }
          void 0 !== n && t(n);
        };
    },
    91559: function (e, t, n) {
      'use strict';
      n.d(t, {
        n: function () {
          return Y;
        },
      });
      var o = Symbol.for('immer-nothing'),
        r = Symbol.for('immer-draftable'),
        i = Symbol.for('immer-state');
      function a(e, ...t) {
        throw new Error(
          `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
        );
      }
      var s = Object.getPrototypeOf;
      function c(e) {
        return !!e && !!e[i];
      }
      function l(e) {
        return (
          !!e &&
          (d(e) ||
            Array.isArray(e) ||
            !!e[r] ||
            !!e.constructor?.[r] ||
            m(e) ||
            y(e))
        );
      }
      var u = Object.prototype.constructor.toString();
      function d(e) {
        if (!e || 'object' != typeof e) return !1;
        const t = s(e);
        if (null === t) return !0;
        const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
        return (
          n === Object ||
          ('function' == typeof n && Function.toString.call(n) === u)
        );
      }
      function f(e, t) {
        0 === h(e)
          ? Reflect.ownKeys(e).forEach((n) => {
              t(n, e[n], e);
            })
          : e.forEach((n, o) => t(o, n, e));
      }
      function h(e) {
        const t = e[i];
        return t ? t.type_ : Array.isArray(e) ? 1 : m(e) ? 2 : y(e) ? 3 : 0;
      }
      function p(e, t) {
        return 2 === h(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function g(e, t, n) {
        const o = h(e);
        2 === o ? e.set(t, n) : 3 === o ? e.add(n) : (e[t] = n);
      }
      function m(e) {
        return e instanceof Map;
      }
      function y(e) {
        return e instanceof Set;
      }
      function v(e) {
        return e.copy_ || e.base_;
      }
      function w(e, t) {
        if (m(e)) return new Map(e);
        if (y(e)) return new Set(e);
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        const n = d(e);
        if (!0 === t || ('class_only' === t && !n)) {
          const t = Object.getOwnPropertyDescriptors(e);
          delete t[i];
          let n = Reflect.ownKeys(t);
          for (let o = 0; o < n.length; o++) {
            const r = n[o],
              i = t[r];
            !1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
              (i.get || i.set) &&
                (t[r] = {
                  configurable: !0,
                  writable: !0,
                  enumerable: i.enumerable,
                  value: e[r],
                });
          }
          return Object.create(s(e), t);
        }
        {
          const t = s(e);
          if (null !== t && n) return { ...e };
          const o = Object.create(t);
          return Object.assign(o, e);
        }
      }
      function x(e, t = !1) {
        return (
          S(e) ||
            c(e) ||
            !l(e) ||
            (h(e) > 1 && (e.set = e.add = e.clear = e.delete = b),
            Object.freeze(e),
            t && Object.entries(e).forEach(([e, t]) => x(t, !0))),
          e
        );
      }
      function b() {
        a(2);
      }
      function S(e) {
        return Object.isFrozen(e);
      }
      var _,
        k = {};
      function E(e) {
        const t = k[e];
        return t || a(0), t;
      }
      function C() {
        return _;
      }
      function M(e, t) {
        t &&
          (E('Patches'),
          (e.patches_ = []),
          (e.inversePatches_ = []),
          (e.patchListener_ = t));
      }
      function N(e) {
        P(e), e.drafts_.forEach(O), (e.drafts_ = null);
      }
      function P(e) {
        e === _ && (_ = e.parent_);
      }
      function I(e) {
        return (_ = {
          drafts_: [],
          parent_: _,
          immer_: e,
          canAutoFreeze_: !0,
          unfinalizedDrafts_: 0,
        });
      }
      function O(e) {
        const t = e[i];
        0 === t.type_ || 1 === t.type_ ? t.revoke_() : (t.revoked_ = !0);
      }
      function z(e, t) {
        t.unfinalizedDrafts_ = t.drafts_.length;
        const n = t.drafts_[0];
        return (
          void 0 !== e && e !== n
            ? (n[i].modified_ && (N(t), a(4)),
              l(e) && ((e = A(t, e)), t.parent_ || R(t, e)),
              t.patches_ &&
                E('Patches').generateReplacementPatches_(
                  n[i].base_,
                  e,
                  t.patches_,
                  t.inversePatches_,
                ))
            : (e = A(t, n, [])),
          N(t),
          t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
          e !== o ? e : void 0
        );
      }
      function A(e, t, n) {
        if (S(t)) return t;
        const o = t[i];
        if (!o) return f(t, (r, i) => D(e, o, t, r, i, n)), t;
        if (o.scope_ !== e) return t;
        if (!o.modified_) return R(e, o.base_, !0), o.base_;
        if (!o.finalized_) {
          (o.finalized_ = !0), o.scope_.unfinalizedDrafts_--;
          const t = o.copy_;
          let r = t,
            i = !1;
          3 === o.type_ && ((r = new Set(t)), t.clear(), (i = !0)),
            f(r, (r, a) => D(e, o, t, r, a, n, i)),
            R(e, t, !1),
            n &&
              e.patches_ &&
              E('Patches').generatePatches_(
                o,
                n,
                e.patches_,
                e.inversePatches_,
              );
        }
        return o.copy_;
      }
      function D(e, t, n, o, r, i, a) {
        if (c(r)) {
          const a = A(
            e,
            r,
            i && t && 3 !== t.type_ && !p(t.assigned_, o)
              ? i.concat(o)
              : void 0,
          );
          if ((g(n, o, a), !c(a))) return;
          e.canAutoFreeze_ = !1;
        } else a && n.add(r);
        if (l(r) && !S(r)) {
          if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
          A(e, r),
            (t && t.scope_.parent_) ||
              'symbol' == typeof o ||
              !Object.prototype.propertyIsEnumerable.call(n, o) ||
              R(e, r);
        }
      }
      function R(e, t, n = !1) {
        !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && x(t, n);
      }
      var j = {
          get(e, t) {
            if (t === i) return e;
            const n = v(e);
            if (!p(n, t))
              return (function (e, t, n) {
                const o = T(t, n);
                return o
                  ? 'value' in o
                    ? o.value
                    : o.get?.call(e.draft_)
                  : void 0;
              })(e, n, t);
            const o = n[t];
            return e.finalized_ || !l(o)
              ? o
              : o === L(e.base_, t)
                ? (V(e), (e.copy_[t] = Z(o, e)))
                : o;
          },
          has(e, t) {
            return t in v(e);
          },
          ownKeys(e) {
            return Reflect.ownKeys(v(e));
          },
          set(e, t, n) {
            const o = T(v(e), t);
            if (o?.set) return o.set.call(e.draft_, n), !0;
            if (!e.modified_) {
              const o = L(v(e), t),
                s = o?.[i];
              if (s && s.base_ === n)
                return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
              if (
                ((r = n) === (a = o)
                  ? 0 !== r || 1 / r == 1 / a
                  : r != r && a != a) &&
                (void 0 !== n || p(e.base_, t))
              )
                return !0;
              V(e), B(e);
            }
            var r, a;
            return (
              (e.copy_[t] === n && (void 0 !== n || t in e.copy_)) ||
                (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
                ((e.copy_[t] = n), (e.assigned_[t] = !0)),
              !0
            );
          },
          deleteProperty(e, t) {
            return (
              void 0 !== L(e.base_, t) || t in e.base_
                ? ((e.assigned_[t] = !1), V(e), B(e))
                : delete e.assigned_[t],
              e.copy_ && delete e.copy_[t],
              !0
            );
          },
          getOwnPropertyDescriptor(e, t) {
            const n = v(e),
              o = Reflect.getOwnPropertyDescriptor(n, t);
            return o
              ? {
                  writable: !0,
                  configurable: 1 !== e.type_ || 'length' !== t,
                  enumerable: o.enumerable,
                  value: n[t],
                }
              : o;
          },
          defineProperty() {
            a(11);
          },
          getPrototypeOf(e) {
            return s(e.base_);
          },
          setPrototypeOf() {
            a(12);
          },
        },
        $ = {};
      function L(e, t) {
        const n = e[i];
        return (n ? v(n) : e)[t];
      }
      function T(e, t) {
        if (!(t in e)) return;
        let n = s(e);
        for (; n; ) {
          const e = Object.getOwnPropertyDescriptor(n, t);
          if (e) return e;
          n = s(n);
        }
      }
      function B(e) {
        e.modified_ || ((e.modified_ = !0), e.parent_ && B(e.parent_));
      }
      function V(e) {
        e.copy_ ||
          (e.copy_ = w(e.base_, e.scope_.immer_.useStrictShallowCopy_));
      }
      f(j, (e, t) => {
        $[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        ($.deleteProperty = function (e, t) {
          return $.set.call(this, e, t, void 0);
        }),
        ($.set = function (e, t, n) {
          return j.set.call(this, e[0], t, n, e[0]);
        });
      function Z(e, t) {
        const n = m(e)
          ? E('MapSet').proxyMap_(e, t)
          : y(e)
            ? E('MapSet').proxySet_(e, t)
            : (function (e, t) {
                const n = Array.isArray(e),
                  o = {
                    type_: n ? 1 : 0,
                    scope_: t ? t.scope_ : C(),
                    modified_: !1,
                    finalized_: !1,
                    assigned_: {},
                    parent_: t,
                    base_: e,
                    draft_: null,
                    copy_: null,
                    revoke_: null,
                    isManual_: !1,
                  };
                let r = o,
                  i = j;
                n && ((r = [o]), (i = $));
                const { revoke: a, proxy: s } = Proxy.revocable(r, i);
                return (o.draft_ = s), (o.revoke_ = a), s;
              })(e, t);
        return (t ? t.scope_ : C()).drafts_.push(n), n;
      }
      function H(e) {
        if (!l(e) || S(e)) return e;
        const t = e[i];
        let n;
        if (t) {
          if (!t.modified_) return t.base_;
          (t.finalized_ = !0),
            (n = w(e, t.scope_.immer_.useStrictShallowCopy_));
        } else n = w(e, !0);
        return (
          f(n, (e, t) => {
            g(n, e, H(t));
          }),
          t && (t.finalized_ = !1),
          n
        );
      }
      var X = new (class {
          constructor(e) {
            (this.autoFreeze_ = !0),
              (this.useStrictShallowCopy_ = !1),
              (this.produce = (e, t, n) => {
                if ('function' == typeof e && 'function' != typeof t) {
                  const n = t;
                  t = e;
                  const o = this;
                  return function (e = n, ...r) {
                    return o.produce(e, (e) => t.call(this, e, ...r));
                  };
                }
                let r;
                if (
                  ('function' != typeof t && a(6),
                  void 0 !== n && 'function' != typeof n && a(7),
                  l(e))
                ) {
                  const o = I(this),
                    i = Z(e, void 0);
                  let a = !0;
                  try {
                    (r = t(i)), (a = !1);
                  } finally {
                    a ? N(o) : P(o);
                  }
                  return M(o, n), z(r, o);
                }
                if (!e || 'object' != typeof e) {
                  if (
                    ((r = t(e)),
                    void 0 === r && (r = e),
                    r === o && (r = void 0),
                    this.autoFreeze_ && x(r, !0),
                    n)
                  ) {
                    const t = [],
                      o = [];
                    E('Patches').generateReplacementPatches_(e, r, t, o),
                      n(t, o);
                  }
                  return r;
                }
                a(1);
              }),
              (this.produceWithPatches = (e, t) => {
                if ('function' == typeof e)
                  return (t, ...n) =>
                    this.produceWithPatches(t, (t) => e(t, ...n));
                let n, o;
                return [
                  this.produce(e, t, (e, t) => {
                    (n = e), (o = t);
                  }),
                  n,
                  o,
                ];
              }),
              'boolean' == typeof e?.autoFreeze &&
                this.setAutoFreeze(e.autoFreeze),
              'boolean' == typeof e?.useStrictShallowCopy &&
                this.setUseStrictShallowCopy(e.useStrictShallowCopy);
          }
          createDraft(e) {
            l(e) || a(8),
              c(e) &&
                (e = (function (e) {
                  c(e) || a(10);
                  return H(e);
                })(e));
            const t = I(this),
              n = Z(e, void 0);
            return (n[i].isManual_ = !0), P(t), n;
          }
          finishDraft(e, t) {
            const n = e && e[i];
            (n && n.isManual_) || a(9);
            const { scope_: o } = n;
            return M(o, t), z(void 0, o);
          }
          setAutoFreeze(e) {
            this.autoFreeze_ = e;
          }
          setUseStrictShallowCopy(e) {
            this.useStrictShallowCopy_ = e;
          }
          applyPatches(e, t) {
            let n;
            for (n = t.length - 1; n >= 0; n--) {
              const o = t[n];
              if (0 === o.path.length && 'replace' === o.op) {
                e = o.value;
                break;
              }
            }
            n > -1 && (t = t.slice(n + 1));
            const o = E('Patches').applyPatches_;
            return c(e) ? o(e, t) : this.produce(e, (e) => o(e, t));
          }
        })(),
        W = X.produce;
      X.produceWithPatches.bind(X),
        X.setAutoFreeze.bind(X),
        X.setUseStrictShallowCopy.bind(X),
        X.applyPatches.bind(X),
        X.createDraft.bind(X),
        X.finishDraft.bind(X);
      const Y = (e) => (t, n, o) => (
        (o.setState = (e, n, ...o) => {
          const r = 'function' == typeof e ? W(e) : e;
          return t(r, n, ...o);
        }),
        e(o.setState, n, o)
      );
    },
    43973: function (e, t, n) {
      'use strict';
      n.d(t, {
        M: function () {
          return r;
        },
      });
      const o = (e) => {
          let t;
          const n = new Set(),
            o = (e, o) => {
              const r = 'function' == typeof e ? e(t) : e;
              if (!Object.is(r, t)) {
                const e = t;
                (t = (null != o ? o : 'object' != typeof r || null === r)
                  ? r
                  : Object.assign({}, t, r)),
                  n.forEach((n) => n(t, e));
              }
            },
            r = () => t,
            i = {
              setState: o,
              getState: r,
              getInitialState: () => a,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
              destroy: () => {
                console.warn(
                  '[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.',
                ),
                  n.clear();
              },
            },
            a = (t = e(o, r, i));
          return i;
        },
        r = (e) => (e ? o(e) : o);
    },
  },
]);
//# sourceMappingURL=3379.edf6d872.async.js.map
