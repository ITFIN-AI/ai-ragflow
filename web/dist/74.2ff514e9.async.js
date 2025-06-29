/*! For license information please see 74.2ff514e9.async.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [74],
  {
    38622: function (t, e, n) {
      'use strict';
      n.d(e, {
        Ct: function () {
          return $e;
        },
        Zt: function () {
          return Q;
        },
        Hd: function () {
          return Xe;
        },
        C9: function () {
          return w;
        },
        MD: function () {
          return R;
        },
        kJ: function () {
          return ga;
        },
        bG: function () {
          return A;
        },
        aH: function () {
          return Gn;
        },
        z2: function () {
          return Oa;
        },
        zs: function () {
          return ce;
        },
        RN: function () {
          return fa;
        },
      });
      var i = {};
      n.r(i),
        n.d(i, {
          circle: function () {
            return In;
          },
          diamond: function () {
            return Bn;
          },
          rect: function () {
            return Fn;
          },
          simple: function () {
            return jn;
          },
          triangle: function () {
            return Ln;
          },
          triangleRect: function () {
            return zn;
          },
          vee: function () {
            return _n;
          },
        });
      var s = n(1242);
      function o(t) {
        return `[G6 v5.0.10] ${t}`;
      }
      const r = {
        mute: !1,
        debug: (t) => {
          !r.mute && console.debug(o(t));
        },
        info: (t) => {
          !r.mute && console.info(o(t));
        },
        warn: (t) => {
          !r.mute && console.warn(o(t));
        },
        error: (t) => {
          !r.mute && console.error(o(t));
        },
      };
      var a = n(95147),
        c = function (t) {
          return (0, a.Z)(t) ? '' : t.toString();
        },
        h = function (t) {
          var e = c(t);
          return e.charAt(0).toUpperCase() + e.substring(1);
        },
        l = n(6241),
        d = n(82844),
        u = n(76714),
        p = function (t, e) {
          if (t === e) return !0;
          if (!t || !e) return !1;
          if ((0, u.Z)(t) || (0, u.Z)(e)) return !1;
          if ((0, d.Z)(t) || (0, d.Z)(e)) {
            if (t.length !== e.length) return !1;
            for (var n = !0, i = 0; i < t.length && (n = p(t[i], e[i])); i++);
            return n;
          }
          if ((0, l.Z)(t) || (0, l.Z)(e)) {
            var s = Object.keys(t),
              o = Object.keys(e);
            if (s.length !== o.length) return !1;
            for (n = !0, i = 0; i < s.length && (n = p(t[s[i]], e[s[i]])); i++);
            return n;
          }
          return !1;
        },
        g = p,
        f = n(4637);
      const m = { duration: 500 },
        y = {
          duration: 1e3,
          easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
          iterations: 1,
          fill: 'both',
        };
      var b, E, x, v, w, S, C, O, T, A;
      !(function (t) {
        (t.NodeAdded = 'NodeAdded'),
          (t.NodeUpdated = 'NodeUpdated'),
          (t.NodeRemoved = 'NodeRemoved'),
          (t.EdgeAdded = 'EdgeAdded'),
          (t.EdgeUpdated = 'EdgeUpdated'),
          (t.EdgeRemoved = 'EdgeRemoved'),
          (t.ComboAdded = 'ComboAdded'),
          (t.ComboUpdated = 'ComboUpdated'),
          (t.ComboRemoved = 'ComboRemoved');
      })(b || (b = {})),
        (function (t) {
          (t.DRAW = 'draw'),
            (t.COLLAPSE = 'collapse'),
            (t.EXPAND = 'expand'),
            (t.TRANSFORM = 'transform');
        })(E || (E = {})),
        (function (t) {
          (t.CLICK = 'canvas:click'),
            (t.DBLCLICK = 'canvas:dblclick'),
            (t.POINTER_OVER = 'canvas:canvas:pointerover'),
            (t.POINTER_LEAVE = 'canvas:pointerleave'),
            (t.POINTER_ENTER = 'canvas:pointerenter'),
            (t.POINTER_MOVE = 'canvas:pointermove'),
            (t.POINTER_OUT = 'canvas:pointerout'),
            (t.POINTER_DOWN = 'canvas:pointerdown'),
            (t.POINTER_UP = 'canvas:pointerup'),
            (t.CONTEXT_MENU = 'canvas:contextmenu'),
            (t.DRAG_START = 'canvas:dragstart'),
            (t.DRAG = 'canvas:drag'),
            (t.DRAG_END = 'canvas:dragend'),
            (t.DRAG_ENTER = 'canvas:dragenter'),
            (t.DRAG_OVER = 'canvas:dragover'),
            (t.DRAG_LEAVE = 'canvas:dragleave'),
            (t.DROP = 'canvas:drop'),
            (t.WHEEL = 'canvas:wheel');
        })(x || (x = {})),
        (function (t) {
          (t.CLICK = 'combo:click'),
            (t.DBLCLICK = 'combo:dblclick'),
            (t.POINTER_OVER = 'combo:pointerover'),
            (t.POINTER_LEAVE = 'combo:pointerleave'),
            (t.POINTER_ENTER = 'combo:pointerenter'),
            (t.POINTER_MOVE = 'combo:pointermove'),
            (t.POINTER_OUT = 'combo:pointerout'),
            (t.POINTER_DOWN = 'combo:pointerdown'),
            (t.POINTER_UP = 'combo:pointerup'),
            (t.CONTEXT_MENU = 'combo:contextmenu'),
            (t.DRAG_START = 'combo:dragstart'),
            (t.DRAG = 'combo:drag'),
            (t.DRAG_END = 'combo:dragend'),
            (t.DRAG_ENTER = 'combo:dragenter'),
            (t.DRAG_OVER = 'combo:dragover'),
            (t.DRAG_LEAVE = 'combo:dragleave'),
            (t.DROP = 'combo:drop');
        })(v || (v = {})),
        (function (t) {
          (t.CLICK = 'click'),
            (t.DBLCLICK = 'dblclick'),
            (t.POINTER_OVER = 'pointerover'),
            (t.POINTER_LEAVE = 'pointerleave'),
            (t.POINTER_ENTER = 'pointerenter'),
            (t.POINTER_MOVE = 'pointermove'),
            (t.POINTER_OUT = 'pointerout'),
            (t.POINTER_DOWN = 'pointerdown'),
            (t.POINTER_UP = 'pointerup'),
            (t.CONTEXT_MENU = 'contextmenu'),
            (t.DRAG_START = 'dragstart'),
            (t.DRAG = 'drag'),
            (t.DRAG_END = 'dragend'),
            (t.DRAG_ENTER = 'dragenter'),
            (t.DRAG_OVER = 'dragover'),
            (t.DRAG_LEAVE = 'dragleave'),
            (t.DROP = 'drop'),
            (t.KEY_DOWN = 'keydown'),
            (t.KEY_UP = 'keyup'),
            (t.WHEEL = 'wheel');
        })(w || (w = {})),
        (function (t) {
          (t.KEY_DOWN = 'keydown'), (t.KEY_UP = 'keyup');
        })(S || (S = {})),
        (function (t) {
          (t.CLICK = 'edge:click'),
            (t.DBLCLICK = 'edge:dblclick'),
            (t.POINTER_OVER = 'edge:pointerover'),
            (t.POINTER_LEAVE = 'edge:pointerleave'),
            (t.POINTER_ENTER = 'edge:pointerenter'),
            (t.POINTER_MOVE = 'edge:pointermove'),
            (t.POINTER_OUT = 'edge:pointerout'),
            (t.POINTER_DOWN = 'edge:pointerdown'),
            (t.POINTER_UP = 'edge:pointerup'),
            (t.CONTEXT_MENU = 'edge:contextmenu'),
            (t.DRAG_ENTER = 'edge:dragenter'),
            (t.DRAG_OVER = 'edge:dragover'),
            (t.DRAG_LEAVE = 'edge:dragleave'),
            (t.DROP = 'edge:drop');
        })(C || (C = {})),
        (function (t) {
          (t.BEFORE_CANVAS_INIT = 'beforecanvasinit'),
            (t.AFTER_CANVAS_INIT = 'aftercanvasinit'),
            (t.BEFORE_SIZE_CHANGE = 'beforesizechange'),
            (t.AFTER_SIZE_CHANGE = 'aftersizechange'),
            (t.BEFORE_ELEMENT_CREATE = 'beforeelementcreate'),
            (t.AFTER_ELEMENT_CREATE = 'afterelementcreate'),
            (t.BEFORE_ELEMENT_UPDATE = 'beforeelementupdate'),
            (t.AFTER_ELEMENT_UPDATE = 'afterelementupdate'),
            (t.BEFORE_ELEMENT_DESTROY = 'beforeelementdestroy'),
            (t.AFTER_ELEMENT_DESTROY = 'afterelementdestroy'),
            (t.BEFORE_ELEMENT_TRANSLATE = 'beforeelementtranslate'),
            (t.AFTER_ELEMENT_TRANSLATE = 'afterelementtranslate'),
            (t.BEFORE_DRAW = 'beforedraw'),
            (t.AFTER_DRAW = 'afterdraw'),
            (t.BEFORE_RENDER = 'beforerender'),
            (t.AFTER_RENDER = 'afterrender'),
            (t.BEFORE_ANIMATE = 'beforeanimate'),
            (t.AFTER_ANIMATE = 'afteranimate'),
            (t.BEFORE_LAYOUT = 'beforelayout'),
            (t.AFTER_LAYOUT = 'afterlayout'),
            (t.BEFORE_STAGE_LAYOUT = 'beforestagelayout'),
            (t.AFTER_STAGE_LAYOUT = 'afterstagelayout'),
            (t.BEFORE_TRANSFORM = 'beforetransform'),
            (t.AFTER_TRANSFORM = 'aftertransform'),
            (t.BATCH_START = 'batchstart'),
            (t.BATCH_END = 'batchend'),
            (t.BEFORE_DESTROY = 'beforedestroy'),
            (t.AFTER_DESTROY = 'afterdestroy'),
            (t.BEFORE_RENDERER_CHANGE = 'beforerendererchange'),
            (t.AFTER_RENDERER_CHANGE = 'afterrendererchange');
        })(O || (O = {})),
        (function (t) {
          (t.UNDO = 'undo'),
            (t.REDO = 'redo'),
            (t.CANCEL = 'cancel'),
            (t.ADD = 'add'),
            (t.CLEAR = 'clear'),
            (t.CHANGE = 'change');
        })(T || (T = {})),
        (function (t) {
          (t.CLICK = 'node:click'),
            (t.DBLCLICK = 'node:dblclick'),
            (t.POINTER_OVER = 'node:pointerover'),
            (t.POINTER_LEAVE = 'node:pointerleave'),
            (t.POINTER_ENTER = 'node:pointerenter'),
            (t.POINTER_MOVE = 'node:pointermove'),
            (t.POINTER_OUT = 'node:pointerout'),
            (t.POINTER_DOWN = 'node:pointerdown'),
            (t.POINTER_UP = 'node:pointerup'),
            (t.CONTEXT_MENU = 'node:contextmenu'),
            (t.DRAG_START = 'node:dragstart'),
            (t.DRAG = 'node:drag'),
            (t.DRAG_END = 'node:dragend'),
            (t.DRAG_ENTER = 'node:dragenter'),
            (t.DRAG_OVER = 'node:dragover'),
            (t.DRAG_LEAVE = 'node:dragleave'),
            (t.DROP = 'node:drop');
        })(A || (A = {}));
      const D = 'combo',
        M = 'tree';
      var R;
      function P(t) {
        const { theme: e } = t;
        if (!e) return {};
        const n = Ta(R.THEME, e);
        return n || (r.warn(`The theme of ${e} is not registered.`), {});
      }
      function k(t, e) {
        if (Array.isArray(t) && 0 === t.length) return null;
        const n = Array.isArray(t) ? t[0] : t,
          i = Array.isArray(t) ? t.slice(1) : e || [];
        return new Proxy(n, {
          get(t, e) {
            return 'function' != typeof t[e] ||
              ['onframe', 'onfinish'].includes(e)
              ? 'finished' === e
                ? Promise.all([n.finished, ...i.map((t) => t.finished)])
                : Reflect.get(t, e)
              : (...n) => {
                  t[e](...n), i.forEach((t) => t[e]?.(...n));
                };
          },
          set(t, e, n) {
            return (
              ['onframe', 'onfinish'].includes(e) ||
                i.forEach((t) => {
                  t[e] = n;
                }),
              Reflect.set(t, e, n)
            );
          },
        });
      }
      function N(t) {
        const e = t.reduce(
          (t, e) => (
            Object.entries(e).forEach(([e, n]) => {
              void 0 === t[e] ? (t[e] = [n]) : t[e].push(n);
            }),
            t
          ),
          {},
        );
        Object.entries(e).forEach(([n, i]) => {
          (i.length !== t.length ||
            i.some((t) => (0, a.Z)(t)) ||
            i.every(
              (t) =>
                !['sourceNode', 'targetNode', 'childrenNode'].includes(n) &&
                g(t, i[0]),
            )) &&
            delete e[n];
        });
        const n = Object.entries(e).reduce(
          (t, [e, n]) => (
            n.forEach((n, i) => {
              t[i] ? (t[i][e] = n) : (t[i] = { [e]: n });
            }),
            t
          ),
          [],
        );
        return (
          0 !== t.length && 0 === n.length && n.push({ _: 0 }, { _: 0 }), n
        );
      }
      function I(t) {
        switch (t) {
          case 'opacity':
            return 1;
          case 'x':
          case 'y':
          case 'z':
          case 'zIndex':
            return 0;
          case 'visibility':
            return 'visible';
          case 'collapsed':
            return !1;
          case 'states':
            return [];
          default:
            return;
        }
      }
      function L(t, e) {
        const { animation: n } = t;
        if (!1 === n || !1 === e) return !1;
        const i = { ...m };
        return (
          (0, f.Z)(n) && Object.assign(i, n),
          (0, f.Z)(e) && Object.assign(i, e),
          i
        );
      }
      function B(t, e, n, i) {
        const { animation: s } = t,
          o = t?.[e]?.animation;
        if (!1 === o) return [];
        const a = o?.[n];
        if (!1 === a) return [];
        if (!1 === s || !1 === i) return [];
        const c = P(t)[e]?.animation,
          h = (t = []) =>
            (function (t) {
              if ('string' == typeof t) {
                return (
                  Ta(R.ANIMATION, t) ||
                  (r.warn(`The animation of ${t} is not registered.`), [])
                );
              }
              return t;
            })(t).map((t) => ({
              ...y,
              ...((0, f.Z)(s) && s),
              ...t,
              ...((0, f.Z)(i) && i),
            }));
        if (a) return h(a);
        if (!c) return [];
        const l = c[n];
        return !1 === l ? [] : h(l);
      }
      !(function (t) {
        (t.NODE = 'node'),
          (t.EDGE = 'edge'),
          (t.COMBO = 'combo'),
          (t.THEME = 'theme'),
          (t.PALETTE = 'palette'),
          (t.LAYOUT = 'layout'),
          (t.BEHAVIOR = 'behavior'),
          (t.PLUGIN = 'plugin'),
          (t.ANIMATION = 'animation'),
          (t.TRANSFORM = 'transform');
      })(R || (R = {}));
      var _ = n(83787);
      function F(t) {
        if (void 0 !== t.id) return t.id;
        if (void 0 !== t.source && void 0 !== t.target)
          return `${t.source}-${t.target}`;
        throw new Error(o('The datum does not have available id.'));
      }
      function z(t) {
        return t.combo;
      }
      function j(t, e) {
        const n = {
          nodes: (t.nodes || []).map(F),
          edges: (t.edges || []).map(F),
          combos: (t.combos || []).map(F),
        };
        return e ? Object.values(n).flat() : n;
      }
      function $(t, e, n, i) {
        const s = i ? i.replace(/translate(3d)?\([^)]*\)/g, '') : '';
        return 0 === n
          ? `translate(${t}, ${e})${s}`
          : `translate3d(${t}, ${e}, ${n})${s}`;
      }
      const Z = (t, e, n, i, s = !1) => {
          const o = F(i),
            r = `${n}s`,
            a =
              t.add[r].get(o) || t.update[r].get(o) || t.remove[r].get(o) || i;
          Object.entries(t).forEach(([t, n]) => {
            e === t ? n[r].set(o, s ? (0, _.Z)(a, i) : a) : n[r].delete(o);
          });
        },
        H = (t, e, n) => {
          if (!n.length) return null;
          const [i, s] = e;
          let o;
          const r = n
              .map(({ fields: e, shape: n, states: r, ...a }) => {
                const c = ((e) => {
                  if (e) {
                    const n = t.getShape(e);
                    if (!n) return null;
                    const o = `get${h(e)}Style`,
                      r = t?.[o]?.bind(t) || ((t) => t);
                    return {
                      shape: n,
                      fromStyle: r?.(i) || {},
                      toStyle: r?.(s) || {},
                    };
                  }
                  return { shape: t, fromStyle: i, toStyle: s };
                })(n);
                if (!c) return null;
                const { shape: l, fromStyle: d, toStyle: u } = c,
                  p = [{}, {}];
                if (
                  (e.forEach((t) => {
                    Object.assign(p[0], { [t]: d[t] ?? I(t) }),
                      Object.assign(p[1], { [t]: u[t] ?? I(t) });
                  }),
                  p.some((t) =>
                    Object.keys(t).some((t) => ['x', 'y', 'z'].includes(t)),
                  ))
                ) {
                  const {
                    x: t = 0,
                    y: e = 0,
                    z: n = 0,
                    transform: i = '',
                  } = l.attributes || {};
                  p.forEach((s) => {
                    s.transform = $(s.x || t, s.y || e, s.z || n, i);
                  });
                }
                const g = l.animate(N(p), a);
                return void 0 === n && (o = g), g;
              })
              .filter(Boolean),
            a = o || r?.[0];
          return a
            ? k(
                a,
                r.filter((t) => t != t),
              )
            : null;
        },
        W = [{ fields: ['x', 'y'] }],
        V = W,
        Y = [{ fields: ['sourceNode', 'targetNode'] }],
        G = Y,
        U = [{ fields: ['childrenNode', 'x', 'y'] }],
        K = U;
      function X(t, e, n) {
        const i = new Map(t.map((t) => [n(t), t])),
          s = new Map(e.map((t) => [n(t), t])),
          o = new Set(i.keys()),
          r = new Set(s.keys()),
          a = [],
          c = [],
          h = [],
          l = [];
        return (
          r.forEach((t) => {
            o.has(t)
              ? g(i.get(t), s.get(t))
                ? l.push(s.get(t))
                : c.push(s.get(t))
              : a.push(s.get(t));
          }),
          o.forEach((t) => {
            r.has(t) || h.push(i.get(t));
          }),
          { enter: a, exit: h, keep: l, update: c }
        );
      }
      class q {
        context;
        extensions = [];
        extensionMap = {};
        constructor(t) {
          this.context = t;
        }
        setExtensions(t) {
          const e = (function (t, e, n) {
              const i = {},
                s = (t) => (t in i || (i[t] = 0), `${e}-${t}-${i[t]++}`);
              return n.map((e) =>
                'string' == typeof e
                  ? { type: e, key: s(e) }
                  : 'function' == typeof e
                    ? e.call(t)
                    : e.key
                      ? e
                      : { ...e, key: s(e.type) },
              );
            })(this.context.graph, this.category, t),
            {
              enter: n,
              update: i,
              exit: s,
              keep: o,
            } = X(this.extensions, e, (t) => t.key);
          this.createExtensions(n),
            this.updateExtensions([...i, ...o]),
            this.destroyExtensions(s),
            (this.extensions = e);
        }
        createExtension(t) {
          const { category: e } = this,
            { key: n, type: i } = t,
            s = Ta(e, i);
          if (!s)
            return r.warn(`The extension ${i} of ${e} is not registered.`);
          const o = new s(this.context, t);
          this.extensionMap[n] = o;
        }
        createExtensions(t) {
          t.forEach((t) => this.createExtension(t));
        }
        updateExtension(t) {
          const { key: e } = t,
            n = this.extensionMap[e];
          n && n.update(t);
        }
        updateExtensions(t) {
          t.forEach((t) => this.updateExtension(t));
        }
        destroyExtension(t) {
          const e = this.extensionMap[t];
          e && (e.destroy(), delete this.extensionMap[t]);
        }
        destroyExtensions(t) {
          t.forEach(({ key: t }) => this.destroyExtension(t));
        }
        destroy() {
          Object.values(this.extensionMap).forEach((t) => t.destroy()),
            (this.context = {}),
            (this.extensions = []),
            (this.extensionMap = {});
        }
      }
      class J {
        context;
        options;
        events = [];
        destroyed = !1;
        constructor(t, e) {
          (this.context = t), (this.options = e);
        }
        update(t) {
          this.options = Object.assign(this.options, t);
        }
        destroy() {
          (this.context = {}), (this.options = {}), (this.destroyed = !0);
        }
      }
      class Q extends J {}
      var tt = n(45607),
        et = n(83207);
      function nt(t) {
        return (
          t instanceof Float32Array ||
          (!(!Array.isArray(t) || (2 !== t.length && 3 !== t.length)) &&
            t.every((t) => 'number' == typeof t))
        );
      }
      function it(t, e, n) {
        return t >= e && t <= n;
      }
      function st(t = 0) {
        if (Array.isArray(t)) {
          const [e = 0, n = e, i = e, s = n] = t;
          return [e, n, i, s];
        }
        return [t, t, t, t];
      }
      function ot(t) {
        return t.max[0] - t.min[0];
      }
      function rt(t) {
        return t.max[1] - t.min[1];
      }
      function at(t) {
        return [ot(t), rt(t)];
      }
      function ct(t, e) {
        const n = nt(t)
          ? (function (t) {
              const [e, n, i = 0] = t,
                o = new s.mN();
              return o.setMinMax([e, n, i], [e, n, i]), o;
            })(t)
          : t.getShape('key').getBounds();
        return e ? ht(n, e) : n;
      }
      function ht(t, e) {
        const [n, i, o, r] = st(e),
          [a, c, h] = t.min,
          [l, d, u] = t.max,
          p = new s.mN();
        return p.setMinMax([a - r, c - n, h], [l + i, d + o, u]), p;
      }
      function lt(t) {
        if (0 === t.length) return new s.mN();
        if (1 === t.length) return t[0];
        const e = new s.mN();
        e.setMinMax(t[0].min, t[0].max);
        for (let n = 1; n < t.length; n++) {
          const i = t[n];
          e.setMinMax(
            [
              Math.min(e.min[0], i.min[0]),
              Math.min(e.min[1], i.min[1]),
              Math.min(e.min[2], i.min[2]),
            ],
            [
              Math.max(e.max[0], i.max[0]),
              Math.max(e.max[1], i.max[1]),
              Math.max(e.max[2], i.max[2]),
            ],
          );
        }
        return e;
      }
      function dt(t, e) {
        return it(t[0], e.min[0], e.max[0]) && it(t[1], e.min[1], e.max[1]);
      }
      function ut(t, e) {
        const [n, i] = e,
          [s, o] = t.min,
          [r, a] = t.max,
          c = n - s,
          h = r - n,
          l = i - o,
          d = a - i,
          u = Math.min(c, h, l, d);
        return u === c
          ? 'left'
          : u === h
            ? 'right'
            : u === l
              ? 'top'
              : u === d
                ? 'bottom'
                : 'left';
      }
      function pt(t, e) {
        const n = (0, et.Z)(e);
        if (dt(e, t)) {
          switch (ut(t, e)) {
            case 'left':
              n[0] = t.min[0];
              break;
            case 'right':
              n[0] = t.max[0];
              break;
            case 'top':
              n[1] = t.min[1];
              break;
            case 'bottom':
              n[1] = t.max[1];
          }
        } else {
          const [i, s] = e,
            [o, r] = t.min,
            [a, c] = t.max;
          (n[0] = it(i, o, a) ? i : i < o ? o : a),
            (n[1] = it(s, r, c) ? s : s < r ? r : c);
        }
        return n;
      }
      const gt = [0, 0, 0];
      function ft(t, e) {
        return t.map((t, n) => t + e[n]);
      }
      function mt(t, e) {
        return t.map((t, n) => t - e[n]);
      }
      function yt(t, e) {
        return 'number' == typeof e
          ? t.map((t) => t * e)
          : t.map((t, n) => t * e[n]);
      }
      function bt(t, e) {
        return 'number' == typeof e
          ? t.map((t) => t / e)
          : t.map((t, n) => t / e[n]);
      }
      function Et(t, e) {
        return t.map((t) => t * e);
      }
      function xt(t, e) {
        return Math.sqrt(t.reduce((t, n, i) => t + (n - e[i] || 0) ** 2, 0));
      }
      function vt(t, e) {
        return t.reduce((t, n, i) => t + Math.abs(n - e[i]), 0);
      }
      function wt(t) {
        const e = t.reduce((t, e) => t + e ** 2, 0);
        return t.map((t) => t / Math.sqrt(e));
      }
      function St(t, e, n = !1) {
        const i = t[0] * e[1] - t[1] * e[0];
        let s = Math.acos(
          yt(t, e).reduce((t, e) => t + e, 0) / (xt(t, gt) * xt(e, gt)),
        );
        return n && i < 0 && (s = 2 * Math.PI - s), s;
      }
      function Ct(t, e = !0) {
        return e ? [-t[1], t[0]] : [t[1], -t[0]];
      }
      function Ot(t) {
        return [t[0], t[1]];
      }
      function Tt(t) {
        return 2 === t.length ? [t[0], t[1], 0] : t;
      }
      function At(t, e) {
        const [n, i] = t,
          [s, o] = e;
        return (function (t, e) {
          const n = Tt(t),
            i = Tt(e);
          return [
            n[1] * i[2] - n[2] * i[1],
            n[2] * i[0] - n[0] * i[2],
            n[0] * i[1] - n[1] * i[0],
          ];
        })(mt(n, i), mt(s, o)).every((t) => 0 === t);
      }
      function Dt(t, e, n = !1) {
        if (At(t, e)) return;
        const [i, s] = t,
          [o, r] = e,
          a =
            ((i[0] - o[0]) * (o[1] - r[1]) - (i[1] - o[1]) * (o[0] - r[0])) /
            ((i[0] - s[0]) * (o[1] - r[1]) - (i[1] - s[1]) * (o[0] - r[0])),
          c =
            r[0] - o[0]
              ? (i[0] - o[0] + a * (s[0] - i[0])) / (r[0] - o[0])
              : (i[1] - o[1] + a * (s[1] - i[1])) / (r[1] - o[1]);
        return n || (it(a, 0, 1) && it(c, 0, 1))
          ? [i[0] + a * (s[0] - i[0]), i[1] + a * (s[1] - i[1])]
          : void 0;
      }
      function Mt(t) {
        const { x: e = 0, y: n = 0, z: i = 0 } = t.style || {};
        return [+e, +n, +i];
      }
      function Rt(t, e) {
        const [n, i] = e,
          { min: s, max: o } = t;
        return [s[0] + n * (o[0] - s[0]), s[1] + i * (o[1] - s[1])];
      }
      function Pt(t, e = 'center') {
        const n = (function (t) {
          if (Array.isArray(t))
            return it(t[0], 0, 1) && it(t[1], 0, 1) ? t : [0.5, 0.5];
          const e = t.split('-');
          return [
            e.includes('left') ? 0 : e.includes('right') ? 1 : 0.5,
            e.includes('top') ? 0 : e.includes('bottom') ? 1 : 0.5,
          ];
        })(e);
        return Rt(t, n);
      }
      function kt(t) {
        return [t.x, t.y, t.z ?? 0];
      }
      function Nt(t) {
        return { x: t[0], y: t[1], z: t[2] ?? 0 };
      }
      function It(t, e = 0) {
        return t.map((t) => parseFloat(t.toFixed(e)));
      }
      function Lt(t, e, n, i = !1) {
        const s = wt(i ? mt(t, e) : mt(e, t)),
          o = [s[0] * n, s[1] * n];
        return ft(Ot(t), o);
      }
      function Bt(t, e) {
        return t[1] === e[1];
      }
      function _t(t, e, n, i = !0) {
        for (let s = 0; s < n.length; s++) {
          let o = n[s],
            r = n[(s + 1) % n.length];
          i && ((o = ft(e, o)), (r = ft(e, r)));
          const a = Dt([e, t], [o, r]);
          if (a) return { point: a, line: [o, r] };
        }
        return { point: e, line: void 0 };
      }
      function Ft(t, e) {
        const n = e.center,
          i = mt(t, e.center),
          s = Math.atan2(i[1], i[0]);
        if (isNaN(s)) return n;
        const o = ot(e) / 2,
          r = rt(e) / 2;
        return [n[0] + o * Math.cos(s), n[1] + r * Math.sin(s)];
      }
      function zt(t, e) {
        return xt(t, jt(t, e));
      }
      function jt(t, e) {
        const [n, i] = e[0],
          [s, o] = e[1],
          [r, a] = t,
          c = s - n,
          h = o - i;
        if (0 === c && 0 === h) return [n, i];
        let l = ((r - n) * c + (a - i) * h) / (c * c + h * h);
        l > 1 ? (l = 1) : l < 0 && (l = 0);
        return [n + l * c, i + l * h];
      }
      function $t(t, e = !0) {
        const n = (function (t) {
          return bt(
            t.reduce((t, e) => ft(t, e), [0, 0]),
            t.length,
          );
        })(t);
        return t.sort(([t, i], [s, o]) => {
          const r = Math.atan2(i - n[1], t - n[0]),
            a = Math.atan2(o - n[1], s - n[0]);
          return e ? a - r : r - a;
        });
      }
      function Zt(t, e) {
        return [t, [t[0], e[1]], e, [e[0], t[1]]];
      }
      const Ht = (t) => t.map((t) => ((0, u.Z)(t) ? t.toLocaleLowerCase() : t));
      class Wt {
        map = new Map();
        emitter;
        recordKey = new Set();
        constructor(t) {
          (this.emitter = t), this.bindEvents();
        }
        bind(t, e) {
          0 !== t.length && this.map.set(t, e);
        }
        unbind(t, e) {
          this.map.forEach((n, i) => {
            g(i, t) && ((e && e !== n) || this.map.delete(i));
          });
        }
        unbindAll() {
          this.map.clear();
        }
        match(t) {
          const e = Ht(Array.from(this.recordKey)).sort(),
            n = Ht(t).sort();
          return g(e, n);
        }
        bindEvents() {
          const { emitter: t } = this;
          t.on(w.KEY_DOWN, this.onKeyDown),
            t.on(w.KEY_UP, this.onKeyUp),
            t.on(w.WHEEL, this.onWheel),
            t.on(w.DRAG, this.onDrag),
            window.addEventListener('focus', this.onFocus);
        }
        onKeyDown = (t) => {
          t?.key && (this.recordKey.add(t.key), this.trigger(t));
        };
        onKeyUp = (t) => {
          t?.key && this.recordKey.delete(t.key);
        };
        trigger(t) {
          this.map.forEach((e, n) => {
            this.match(n) && e(t);
          });
        }
        triggerExtendKey(t, e) {
          this.map.forEach((n, i) => {
            i.includes(t) &&
              g(
                Array.from(this.recordKey),
                i.filter((e) => e !== t),
              ) &&
              n(e);
          });
        }
        onWheel = (t) => {
          this.triggerExtendKey(w.WHEEL, t);
        };
        onDrag = (t) => {
          this.triggerExtendKey(w.DRAG, t);
        };
        onFocus = () => {
          this.recordKey.clear();
        };
        destroy() {
          this.unbindAll(),
            this.emitter.off(w.KEY_DOWN, this.onKeyDown),
            this.emitter.off(w.KEY_UP, this.onKeyUp),
            this.emitter.off(w.WHEEL, this.onWheel),
            this.emitter.off(w.DRAG, this.onDrag),
            window.removeEventListener('blur', this.onFocus);
        }
      }
      class Vt extends Q {
        static defaultOptions = {
          animation: !1,
          enable: !0,
          enableElements: ['node', 'combo', 'edge'],
          immediately: !1,
          mode: 'default',
          state: 'selected',
          trigger: ['shift'],
          style: {
            width: 0,
            height: 0,
            lineWidth: 1,
            fill: '#1677FF',
            stroke: '#1677FF',
            fillOpacity: 0.1,
            zIndex: 2,
            pointerEvents: 'none',
          },
        };
        startPoint;
        endPoint;
        rectShape;
        shortcut;
        constructor(t, e) {
          super(t, (0, _.Z)({}, Vt.defaultOptions, e)),
            (this.shortcut = new Wt(t.graph)),
            (this.onPointerDown = this.onPointerDown.bind(this)),
            (this.onPointerMove = this.onPointerMove.bind(this)),
            (this.onPointerUp = this.onPointerUp.bind(this)),
            (this.clearStates = this.clearStates.bind(this)),
            this.bindEvents();
        }
        onPointerDown(t) {
          if (!this.validate(t) || !this.isKeydown() || this.startPoint) return;
          const { canvas: e } = this.context;
          (this.rectShape = new s.UL({
            id: 'g6-brush-select',
            style: this.options.style,
          })),
            e.appendChild(this.rectShape),
            (this.startPoint = [t.canvas.x, t.canvas.y]);
        }
        onPointerMove(t) {
          if (!this.startPoint) return;
          const { immediately: e, mode: n } = this.options;
          (this.endPoint = Yt(t)),
            this.rectShape?.attr({
              x: Math.min(this.endPoint[0], this.startPoint[0]),
              y: Math.min(this.endPoint[1], this.startPoint[1]),
              width: Math.abs(this.endPoint[0] - this.startPoint[0]),
              height: Math.abs(this.endPoint[1] - this.startPoint[1]),
            }),
            e &&
              'default' === n &&
              this.updateElementsStates(Zt(this.startPoint, this.endPoint));
        }
        onPointerUp(t) {
          this.startPoint &&
            (this.endPoint
              ? ((this.endPoint = Yt(t)),
                this.updateElementsStates(Zt(this.startPoint, this.endPoint)),
                this.clearBrush())
              : this.clearBrush());
        }
        clearStates() {
          this.endPoint || this.clearElementsStates();
        }
        clearElementsStates() {
          const { graph: t } = this.context,
            e = Object.values(t.getData()).reduce(
              (t, e) =>
                Object.assign(
                  {},
                  t,
                  e.reduce((t, e) => ((t[F(e)] = []), t), {}),
                ),
              {},
            );
          t.setElementState(e, this.options.animation);
        }
        updateElementsStates(t) {
          const { graph: e } = this.context,
            {
              enableElements: n,
              state: i,
              mode: s,
              onSelect: o,
            } = this.options,
            r = this.selector(e, t, n);
          let a = {};
          switch (s) {
            case 'union':
              r.forEach((t) => {
                a[t] = [...e.getElementState(t), i];
              });
              break;
            case 'diff':
              r.forEach((t) => {
                const n = e.getElementState(t);
                a[t] = n.includes(i) ? n.filter((t) => t !== i) : [...n, i];
              });
              break;
            case 'intersect':
              r.forEach((t) => {
                const n = e.getElementState(t);
                a[t] = n.includes(i) ? [i] : [];
              });
              break;
            default:
              r.forEach((t) => {
                a[t] = [i];
              });
          }
          (0, tt.Z)(o) && (a = o(a)),
            e.setElementState(a, this.options.animation);
        }
        selector(t, e, n) {
          if (!n || 0 === n.length) return [];
          const i = [],
            s = t.getData();
          if (
            (n.forEach((n) => {
              s[`${n}s`].forEach((n) => {
                const s = F(n);
                'hidden' !== t.getElementVisibility(s) &&
                  (function (t, e, n, i) {
                    const s = t[0],
                      o = t[1];
                    let r = !1;
                    void 0 === n && (n = 0), void 0 === i && (i = e.length);
                    const a = i - n;
                    for (let t = 0, i = a - 1; t < a; i = t++) {
                      const a = e[t + n][0],
                        c = e[t + n][1],
                        h = e[i + n][0],
                        l = e[i + n][1];
                      c > o != l > o &&
                        s < ((h - a) * (o - c)) / (l - c) + a &&
                        (r = !r);
                    }
                    return r;
                  })(t.getElementPosition(s), e) &&
                  i.push(s);
              });
            }),
            n.includes('edge'))
          ) {
            const t = s.edges;
            t?.forEach((t) => {
              const { source: e, target: n } = t;
              i.includes(e) && i.includes(n) && i.push(F(t));
            });
          }
          return i;
        }
        clearBrush() {
          this.rectShape?.remove(),
            (this.rectShape = void 0),
            (this.startPoint = void 0),
            (this.endPoint = void 0);
        }
        isKeydown() {
          const { trigger: t } = this.options,
            e = Array.isArray(t) ? t : [t];
          return !(t && !e.includes('drag')) || this.shortcut.match(e);
        }
        validate(t) {
          if (this.destroyed) return !1;
          const { enable: e } = this.options;
          return (0, tt.Z)(e) ? e(t) : !!e;
        }
        bindEvents() {
          const { graph: t } = this.context;
          this.unbindEvents(),
            t.on(w.POINTER_DOWN, this.onPointerDown),
            t.on(w.POINTER_MOVE, this.onPointerMove),
            t.on(w.POINTER_UP, this.onPointerUp),
            t.on(x.CLICK, this.clearStates);
        }
        unbindEvents() {
          const { graph: t } = this.context;
          t.off(w.POINTER_DOWN, this.onPointerDown),
            t.off(w.POINTER_MOVE, this.onPointerMove),
            t.off(w.POINTER_UP, this.onPointerUp),
            t.off(x.CLICK, this.clearStates);
        }
        update(t) {
          this.options = (0, _.Z)(this.options, t);
        }
        destroy() {
          this.unbindEvents(), super.destroy();
        }
      }
      const Yt = (t) => [t.canvas.x, t.canvas.y],
        Gt = 0.8,
        Ut = ['node', 'edge', 'combo'];
      function Kt(t, e, n, i, s = 0) {
        'TB' === i && e(t, s);
        const o = n(t);
        if (o) for (const t of o) Kt(t, e, n, i, s + 1);
        'BT' === i && e(t, s);
      }
      function Xt(t, e, n, i) {
        if ('combo' === e || 'node' === e) return qt(t, n, i);
        const s = t.getEdgeData(n);
        if (!s) return [];
        const o = qt(t, s.source, i - 1),
          r = qt(t, s.target, i - 1);
        return Array.from(new Set([...o, ...r, n]));
      }
      function qt(t, e, n) {
        const i = new Set(),
          s = new Set(),
          o = new Set();
        return (
          (function (t, e, n) {
            const i = [[t, 0]];
            for (; i.length; ) {
              const [t, s] = i.shift();
              e(t, s);
              const o = n(t);
              if (o) for (const t of o) i.push([t, s + 1]);
            }
          })(
            e,
            (e, i) => {
              i > n ||
                (o.add(e),
                t.getRelatedEdgesData(e).forEach((t) => {
                  const e = F(t);
                  !s.has(e) && i < n && (o.add(e), s.add(e));
                }));
            },
            (e) =>
              t
                .getRelatedEdgesData(e)
                .map((t) => (t.source === e ? t.target : t.source))
                .filter((t) => !i.has(t) && (i.add(t), !0)),
          ),
          Array.from(o)
        );
      }
      function Jt(t) {
        return t.states || [];
      }
      class Qt extends Q {
        shortcut;
        static defaultOptions = {
          animation: !0,
          enable: !0,
          multiple: !1,
          trigger: ['shift'],
          state: 'selected',
          neighborState: 'selected',
          unselectedState: void 0,
          degree: 0,
        };
        constructor(t, e) {
          super(t, Object.assign({}, Qt.defaultOptions, e)),
            (this.shortcut = new Wt(t.graph)),
            this.bindEvents();
        }
        bindEvents() {
          const { graph: t } = this.context;
          this.unbindEvents(),
            Ut.forEach((e) => {
              t.on(`${e}:${w.CLICK}`, this.onClickSelect);
            }),
            t.on(x.CLICK, this.onClickCanvas);
        }
        onClickSelect = async (t) => {
          this.validate(t) &&
            (await this.updateState(t), this.options.onClick?.(t));
        };
        onClickCanvas = async (t) => {
          this.validate(t) &&
            (await this.clearState(), this.options.onClick?.(t));
        };
        get isMultipleSelect() {
          const { multiple: t, trigger: e } = this.options;
          return t && this.shortcut.match(e);
        }
        getNeighborIds(t) {
          const { target: e, targetType: n } = t,
            { graph: i } = this.context,
            { degree: s } = this.options;
          return Xt(i, n, e.id, 'function' == typeof s ? s(t) : s).filter(
            (t) => t !== e.id,
          );
        }
        async updateState(t) {
          const {
            state: e,
            unselectedState: n,
            neighborState: i,
            animation: s,
          } = this.options;
          if (!e && !i && !n) return;
          const { target: o } = t,
            { graph: r } = this.context,
            a = Jt(r.getElementData(o.id)).includes(e) ? 'unselect' : 'select',
            c = {},
            h = this.isMultipleSelect,
            l = [o.id],
            d = this.getNeighborIds(t);
          if (h)
            if ((Object.assign(c, this.getDataStates()), 'select' === a)) {
              const t = (t, e) => {
                t.forEach((t) => {
                  const i = r.getElementData(t),
                    s = new Set(Jt(i));
                  s.add(e), s.delete(n), (c[t] = Array.from(s));
                });
              };
              t(l, e),
                t(d, i),
                n &&
                  Object.keys(c).forEach((t) => {
                    const s = c[t];
                    s.includes(e) ||
                      s.includes(i) ||
                      s.includes(n) ||
                      c[t].push(n);
                  });
            } else {
              const t = c[o.id];
              (c[o.id] = t.filter((t) => t !== e && t !== i)),
                t.includes(n) || c[o.id].push(n),
                d.forEach((t) => {
                  (c[t] = c[t].filter((t) => t !== i)),
                    c[t].includes(e) || c[t].push(n);
                });
            }
          else if ('select' === a) {
            Object.assign(c, this.getClearStates(!!n));
            const t = (t, e) => {
              t.forEach((t) => {
                c[t] || (c[t] = []), c[t].push(e);
              });
            };
            t(l, e),
              t(d, i),
              n &&
                Object.keys(c).forEach((t) => {
                  l.includes(t) || d.includes(t) || c[t].push(n);
                });
          } else Object.assign(c, this.getClearStates());
          await r.setElementState(c, s);
        }
        getDataStates() {
          const { graph: t } = this.context,
            { nodes: e, edges: n, combos: i } = t.getData(),
            s = {};
          return (
            [...e, ...n, ...i].forEach((t) => {
              s[F(t)] = Jt(t);
            }),
            s
          );
        }
        getClearStates(t = !1) {
          const { graph: e } = this.context,
            { state: n, unselectedState: i, neighborState: s } = this.options,
            o = new Set([n, i, s]),
            { nodes: r, edges: a, combos: c } = e.getData(),
            h = {};
          return (
            [...r, ...a, ...c].forEach((e) => {
              const n = Jt(e),
                i = n.filter((t) => !o.has(t));
              (t || i.length !== n.length) && (h[F(e)] = i);
            }),
            h
          );
        }
        async clearState() {
          const { graph: t } = this.context;
          await t.setElementState(
            this.getClearStates(),
            this.options.animation,
          );
        }
        validate(t) {
          if (this.destroyed) return !1;
          const { enable: e } = this.options;
          return (0, tt.Z)(e) ? e(t) : !!e;
        }
        unbindEvents() {
          const { graph: t } = this.context;
          Ut.forEach((e) => {
            t.off(`${e}:${w.CLICK}`, this.onClickSelect);
          }),
            t.off(x.CLICK, this.onClickCanvas);
        }
        destroy() {
          this.unbindEvents(), super.destroy();
        }
      }
      function te(t) {
        return !!t.style?.collapsed;
      }
      var ee = function (t, e, n) {
          for (
            var i = 0, s = (0, u.Z)(e) ? e.split('.') : e;
            t && i < s.length;

          )
            t = t[s[i++]];
          return void 0 === t || i < s.length ? n : t;
        },
        ne = n(25897),
        ie = function (t, e, n) {
          var i = t,
            s = (0, u.Z)(e) ? e.split('.') : e;
          return (
            s.forEach(function (t, e) {
              e < s.length - 1
                ? ((0, f.Z)(i[t]) || (i[t] = (0, ne.Z)(s[e + 1]) ? [] : {}),
                  (i = i[t]))
                : (i[t] = n);
            }),
            t
          );
        },
        se = function (t) {
          var e = c(t);
          return e.charAt(0).toLowerCase() + e.substring(1);
        };
      function oe(t, e) {
        if (!t.startsWith(e)) return !1;
        const n = t[e.length];
        return n >= 'A' && n <= 'Z';
      }
      function re(t, e) {
        return `${e}${h(t)}`;
      }
      function ae(t, e, n = !0) {
        if (!e) return t;
        if (!oe(t, e)) return t;
        const i = t.slice(e.length);
        return n ? se(i) : i;
      }
      function ce(t, e) {
        const n = Object.entries(t).reduce(
          (t, [n, i]) => (
            'className' === n ||
              'class' === n ||
              (oe(n, e) && Object.assign(t, { [ae(n, e)]: i })),
            t
          ),
          {},
        );
        if ('opacity' in t) {
          const i = re('opacity', e),
            s = t.opacity;
          if (i in t) {
            const e = t[i];
            Object.assign(n, { opacity: s * e });
          } else Object.assign(n, { opacity: s });
        }
        return n;
      }
      function he(t, e) {
        const n = e.length;
        return Object.keys(t).reduce((i, s) => {
          if (s.startsWith(e)) {
            i[s.slice(n)] = t[s];
          }
          return i;
        }, {});
      }
      function le(t, e) {
        const n = 'string' == typeof e ? [e] : e,
          i = {};
        return (
          Object.keys(t).forEach((e) => {
            n.find((t) => e.startsWith(t)) || (i[e] = t[e]);
          }),
          i
        );
      }
      function de(t = 0) {
        if ('number' == typeof t) return [t, t, t];
        const [e, n = e, i = e] = t;
        return [e, n, i];
      }
      function ue(t, e) {
        const { datum: n, graph: i } = e;
        return 'function' == typeof t
          ? t.call(i, n)
          : Object.fromEntries(
              Object.entries(t).map(([t, e]) =>
                'function' == typeof e ? [t, e.call(i, n)] : [t, e],
              ),
            );
      }
      function pe(t, e) {
        const n = t?.style || {},
          i = e?.style || {};
        return Object.assign({}, t, e, { style: Object.assign({}, n, i) });
      }
      const ge = 'cachedStyle',
        fe = (t) => `__${t}__`;
      function me(t, e) {
        const n = Array.isArray(e) ? e : [e];
        ee(t, ge) || ie(t, ge, {}),
          n.forEach((e) => {
            ie(ee(t, ge), fe(e), t.attributes[e]);
          });
      }
      function ye(t, e) {
        return ee(t, [ge, fe(e)]);
      }
      function be(t, e) {
        return fe(e) in (ee(t, ge) || {});
      }
      function Ee(t, e, n) {
        ie(t, [ge, fe(e)], n);
      }
      function xe(t) {
        return function (e, n, i) {
          const s = i.value;
          return (
            (i.value = function (e, ...i) {
              const o = `${n}_invoke`;
              if (!ye(this, o)) return Ee(this, o, !0), s.call(this, e, ...i);
              const r = `${n}_style`,
                a = ye(this, r),
                c = t(this, e);
              return Ee(this, r, c), ve(a, c) ? null : s.call(this, e, ...i);
            }),
            i
          );
        };
      }
      const ve = (t, e, n = 2) => {
        if ('object' != typeof t || 'object' != typeof e) return t === e;
        const i = Object.keys(t),
          s = Object.keys(e);
        if (i.length !== s.length) return !1;
        for (const s of i) {
          const i = t[s],
            o = e[s];
          if (n > 1 && 'object' == typeof i && 'object' == typeof o) {
            if (!ve(i, o, n - 1)) return !1;
          } else if (i !== o) return !1;
        }
        return !0;
      };
      var we = n(5199),
        Se = Object.prototype.hasOwnProperty;
      var Ce = function (t, e) {
        if (!e || !(0, we.Z)(t)) return {};
        for (
          var n,
            i = {},
            s = (0, tt.Z)(e)
              ? e
              : function (t) {
                  return t[e];
                },
            o = 0;
          o < t.length;
          o++
        ) {
          var r = t[o];
          (n = s(r)), Se.call(i, n) ? i[n].push(r) : (i[n] = [r]);
        }
        return i;
      };
      function Oe(t) {
        if (t)
          return 'string' == typeof t ||
            'function' == typeof t ||
            Array.isArray(t)
            ? { type: 'group', field: (t) => t.id, color: t, invert: !1 }
            : t;
      }
      function Te(t) {
        const e = 'string' == typeof t ? Ta('palette', t) : t;
        if ('function' != typeof e) return e;
      }
      function Ae(t, e) {
        let n = 2 * t;
        return (
          'string' == typeof e
            ? (n = (t * Number(e.replace('%', ''))) / 100)
            : 'number' == typeof e && (n = e),
          isNaN(n) && (n = 2 * t),
          n
        );
      }
      function De(t, e, n = 1, i = !1) {
        const s = i ? n : 1;
        return Ae((t.max[0] - t.min[0]) * s, e);
      }
      var Me = {}.toString,
        Re = function (t) {
          return Me.call(t)
            .replace(/^\[object /, '')
            .replace(/]$/, '');
        },
        Pe = Object.prototype,
        ke = function (t) {
          var e = t && t.constructor;
          return t === (('function' == typeof e && e.prototype) || Pe);
        },
        Ne = Object.prototype.hasOwnProperty;
      var Ie = function (t) {
        if ((0, a.Z)(t)) return !0;
        if ((0, d.Z)(t)) return !t.length;
        var e = Re(t);
        if ('Map' === e || 'Set' === e) return !t.size;
        if (ke(t)) return !Object.keys(t).length;
        for (var n in t) if (Ne.call(t, n)) return !1;
        return !0;
      };
      function Le(t) {
        const e = [],
          n = (t) => {
            t?.children.length &&
              t.children.forEach((t) => {
                e.push(t), n(t);
              });
          };
        return n(t), e;
      }
      const Be = 'visibility';
      function _e(t, e, n) {
        let i = [t, ...Le(t)];
        n && (i = n?.(i)),
          i.forEach((n) => {
            be(n, Be) || me(n, Be);
            const i = ye(n, Be);
            (t !== n && 'hidden' === i) || (n.style.visibility = e);
          });
      }
      class Fe extends s.b_ {
        constructor(t) {
          super(t),
            this.transformPosition(this.attributes),
            this.render(this.attributes, this),
            this.setVisibility(),
            this.bindEvents();
        }
        get parsedAttributes() {
          return this.attributes;
        }
        shapeMap = {};
        animateMap = {};
        upsert(t, e, n, i) {
          const s = this.shapeMap[t];
          if (!1 !== n) {
            if (!s || s.destroyed) {
              const s = new e({ className: t, style: n });
              return i.appendChild(s), (this.shapeMap[t] = s), s;
            }
            return hi(s, n), s;
          }
          s && (i.removeChild(s), delete this.shapeMap[t]);
        }
        transformPosition(t) {
          const { x: e = 0, y: n = 0, z: i = 0, transform: s } = t;
          (0 === e && 0 === n && 0 === i) ||
            (this.style.transform = $(+e, +n, +i, s));
        }
        update(t = {}) {
          const e = Object.assign({}, this.attributes, t);
          this.attr(e),
            this.render(e, this),
            this.transformPosition(e),
            this.setVisibility();
        }
        bindEvents() {}
        getGraphicStyle(t) {
          return (function (t) {
            const {
              x: e,
              y: n,
              z: i,
              class: s,
              className: o,
              transform: r,
              transformOrigin: a,
              context: c,
              zIndex: h,
              ...l
            } = t;
            return l;
          })(t);
        }
        get compositeShapes() {
          return [
            ['badges', 'badge-'],
            ['ports', 'port-'],
          ];
        }
        animate(t, e) {
          if (0 === t.length) return null;
          const n = [];
          if (void 0 !== t[0].x || void 0 !== t[0].y || void 0 !== t[0].z) {
            const { x: e = 0, y: n = 0, z: i = 0 } = this.attributes;
            t.forEach((t) => {
              const { x: s = e, y: o = n, z: r = i } = t;
              Object.assign(t, { transform: $(+s, +o, +r) });
            });
          }
          const i = super.animate(t, e);
          if (
            (i && (ze(this, i), n.push(i)), Array.isArray(t) && t.length > 0)
          ) {
            const i = ['transform', 'transformOrigin', 'x', 'y', 'z', 'zIndex'];
            if (Object.keys(t[0]).some((t) => !i.includes(t))) {
              Object.entries(this.shapeMap).forEach(([i, s]) => {
                const o = this[`get${h(i)}Style`];
                if ((0, tt.Z)(o)) {
                  const i = t.map((t) =>
                      o.call(this, { ...this.attributes, ...t }),
                    ),
                    r = s.animate(N(i), e);
                  r && (ze(s, r), n.push(r));
                }
              });
              const i = (i, s) => {
                if (!Ie(i)) {
                  const o = this[`get${h(s)}Style`];
                  if ((0, tt.Z)(o)) {
                    const s = t.map((t) =>
                      o.call(this, { ...this.attributes, ...t }),
                    );
                    Object.entries(s[0]).map(([t]) => {
                      const o = s.map((e) => e[t]),
                        r = i[t];
                      if (r) {
                        const t = r.animate(N(o), e);
                        t && (ze(r, t), n.push(t));
                      }
                    });
                  }
                }
              };
              this.compositeShapes.forEach(([t, e]) => {
                const n = he(this.shapeMap, e);
                i(n, t);
              });
            }
          }
          return k(n);
        }
        getShape(t) {
          return this.shapeMap[t];
        }
        setVisibility() {
          const { visibility: t } = this.attributes;
          _e(this, t);
        }
        destroy() {
          (this.shapeMap = {}), (this.animateMap = {}), super.destroy();
        }
      }
      function ze(t, e) {
        (e.oncancel = () => console.log('cancel')),
          e?.finished.then(() => {
            const n = t.activeAnimations.findIndex((t) => t === e);
            n > -1 && t.activeAnimations.splice(n, 1);
          });
      }
      class je extends Fe {
        static defaultStyleProps = {
          padding: 0,
          fontSize: 12,
          fontFamily: 'system-ui, sans-serif',
          wordWrap: !0,
          maxLines: 1,
          wordWrapWidth: 128,
          textOverflow: '...',
          textBaseline: 'middle',
          backgroundOpacity: 0.75,
          backgroundZIndex: -1,
          backgroundLineWidth: 0,
        };
        constructor(t) {
          super(pe({ style: je.defaultStyleProps }, t));
        }
        isTextStyle(t) {
          return oe(t, 'label');
        }
        isBackgroundStyle(t) {
          return oe(t, 'background');
        }
        getTextStyle(t) {
          const { padding: e, ...n } = this.getGraphicStyle(t);
          return le(n, 'background');
        }
        getBackgroundStyle(t) {
          if (!1 === t.background) return !1;
          const e = this.getGraphicStyle(t),
            { wordWrap: n, wordWrapWidth: i, padding: s } = e,
            o = ce(e, 'background'),
            {
              min: [r, a],
              center: [c, h],
              halfExtents: [l, d],
            } = this.shapeMap.text.getGeometryBounds(),
            [u, p, g, f] = st(s),
            m = 2 * l + f + p,
            { width: y, height: b } = o;
          y && b
            ? Object.assign(o, { x: c - Number(y) / 2, y: h - Number(b) / 2 })
            : Object.assign(o, {
                x: r - f,
                y: a - u,
                width: n ? Math.min(m, i + f + p) : m,
                height: 2 * d + u + g,
              });
          const { radius: E } = o;
          if ('string' == typeof E && E.endsWith('%')) {
            const t = Number(E.replace('%', '')) / 100;
            o.radius = Math.min(+o.width, +o.height) * t;
          }
          return o;
        }
        render(t = this.parsedAttributes, e = this) {
          this.upsert('text', s.xv, this.getTextStyle(t), e),
            this.upsert('background', s.UL, this.getBackgroundStyle(t), e);
        }
        getGeometryBounds() {
          return (
            this.getShape('background') || this.getShape('text')
          ).getGeometryBounds();
        }
      }
      class $e extends Fe {
        static defaultStyleProps = {
          padding: [2, 4, 2, 4],
          fontSize: 10,
          wordWrap: !1,
          backgroundRadius: '50%',
          backgroundOpacity: 1,
        };
        constructor(t) {
          super(pe({ style: $e.defaultStyleProps }, t));
        }
        getBadgeStyle(t) {
          return this.getGraphicStyle(t);
        }
        render(t = this.parsedAttributes, e = this) {
          this.upsert('label', je, this.getBadgeStyle(t), e);
        }
        getGeometryBounds() {
          const t = this.getShape('label');
          return (
            t.getShape('background') || t.getShape('text')
          ).getGeometryBounds();
        }
      }
      const Ze = {
        M: ['x', 'y'],
        m: ['dx', 'dy'],
        H: ['x'],
        h: ['dx'],
        V: ['y'],
        v: ['dy'],
        L: ['x', 'y'],
        l: ['dx', 'dy'],
        Z: [],
        z: [],
        C: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
        c: ['dx1', 'dy1', 'dx2', 'dy2', 'dx', 'dy'],
        S: ['x2', 'y2', 'x', 'y'],
        s: ['dx2', 'dy2', 'dx', 'dy'],
        Q: ['x1', 'y1', 'x', 'y'],
        q: ['dx1', 'dy1', 'dx', 'dy'],
        T: ['x', 'y'],
        t: ['dx', 'dy'],
        A: ['rx', 'ry', 'rotation', 'large-arc', 'sweep', 'x', 'y'],
        a: ['rx', 'ry', 'rotation', 'large-arc', 'sweep', 'dx', 'dy'],
      };
      function He(t) {
        const e = [],
          n =
            'string' == typeof t
              ? (function (t) {
                  const e = t
                      .replace(/[\n\r]/g, '')
                      .replace(/-/g, ' -')
                      .replace(/(\d*\.)(\d+)(?=\.)/g, '$1$2 ')
                      .trim()
                      .split(/\s*,|\s+/),
                    n = [];
                  let i = '',
                    s = {};
                  for (; e.length > 0; ) {
                    let t = e.shift();
                    t in Ze ? (i = t) : e.unshift(t),
                      (s = { type: i }),
                      Ze[i].forEach((n) => {
                        (t = e.shift()), (s[n] = t);
                      }),
                      'M' === i ? (i = 'L') : 'm' === i && (i = 'l');
                    const [o, ...r] = Object.values(s);
                    n.push([o, ...r.map(Number)]);
                  }
                  return n;
                })(t)
              : t;
        return (
          n.forEach((t) => {
            const n = t[0];
            if ('Z' !== n)
              if ('A' !== n)
                for (let n = 1; n < t.length; n += 2)
                  e.push([t[n], t[n + 1], 0]);
              else {
                const n = t.length;
                e.push([t[n - 2], t[n - 1], 0]);
              }
            else e.push(e[0]);
          }),
          e
        );
      }
      const We = (t) => {
        if (t.length < 2)
          return [
            ['M', 0, 0],
            ['L', 0, 0],
          ];
        const e = t[0],
          n = t[1],
          i = t[t.length - 1],
          s = t[t.length - 2];
        t.unshift(s, i), t.push(e, n);
        const o = [['M', i[0], i[1]]];
        for (let e = 1; e < t.length - 2; e += 1) {
          const [n, i] = t[e - 1],
            [s, r] = t[e],
            [a, c] = t[e + 1],
            [h, l] = e !== t.length - 2 ? t[e + 2] : [a, c],
            d = s + (a - n) / 6,
            u = r + (c - i) / 6,
            p = a - (h - s) / 6,
            g = c - (l - r) / 6;
          o.push(['C', d, u, p, g, a, c]);
        }
        return o;
      };
      function Ve(t, e, n, i, s, o, r) {
        const [a, c] = Pt(t, e),
          h = {
            textAlign:
              'left' === e ? 'right' : 'right' === e ? 'left' : 'center',
            textBaseline:
              'top' === e ? 'bottom' : 'bottom' === e ? 'top' : 'middle',
            transform: `translate(${a + n}, ${c + i})`,
          };
        if ('center' === e || !s) return h;
        const l = He(o);
        if (!l || l.length <= 3) return h;
        const d = l
            .map((t, e) => {
              const n = t,
                i = l[(e + 1) % l.length];
              return g(n, i) ? null : [n, i];
            })
            .filter(Boolean),
          u = (function (t, e) {
            let n = 1 / 0,
              i = [
                [0, 0],
                [0, 0],
              ];
            return (
              e.forEach((e) => {
                const s = zt(t, e);
                s < n && ((n = s), (i = e));
              }),
              i
            );
          })([a, c], d),
          p = jt([a, c], u);
        if (
          p &&
          u &&
          ((h.transform = `translate(${p[0] + n}, ${p[1] + i})`), r)
        ) {
          const t = Math.atan((u[0][1] - u[1][1]) / (u[0][0] - u[1][0]));
          (h.transform += `rotate(${(t / Math.PI) * 180}deg)`),
            (h.textAlign = 'center'),
            ('right' !== e && 'left' !== e) ||
              (h.textBaseline =
                t > 0
                  ? 'right' === e
                    ? 'bottom'
                    : 'top'
                  : 'right' === e
                    ? 'top'
                    : 'bottom');
        }
        return h;
      }
      class Ye extends Fe {
        static defaultStyleProps = {
          label: !0,
          labelPlacement: 'bottom',
          labelCloseToPath: !0,
          labelAutoRotate: !0,
          labelOffsetX: 0,
          labelOffsetY: 0,
        };
        constructor(t) {
          super(pe({ style: Ye.defaultStyleProps }, t));
        }
        getLabelStyle(t) {
          if (!t.label || !t.d || 0 === t.d.length) return !1;
          const {
              maxWidth: e,
              offsetX: n,
              offsetY: i,
              autoRotate: s,
              placement: o,
              closeToPath: r,
              ...a
            } = ce(this.getGraphicStyle(t), 'label'),
            c = this.shapeMap.key,
            h = c?.getRenderBounds();
          return Object.assign(
            Ve(h, o, n, i, r, t.d, s),
            { wordWrapWidth: De(h, e) },
            a,
          );
        }
        getKeyStyle(t) {
          return this.getGraphicStyle(t);
        }
        render(t, e) {
          this.upsert('key', s.y$, this.getKeyStyle(t), e),
            this.upsert('label', je, this.getLabelStyle(t), e);
        }
      }
      class Ge extends Fe {
        constructor(t) {
          super(t);
        }
        isGImage() {
          return !!this.getAttribute('src');
        }
        getIconStyle(t = this.attributes) {
          const { width: e = 0, height: n = 0 } = t,
            i = this.getGraphicStyle(t);
          return this.isGImage()
            ? { x: -e / 2, y: -n / 2, ...i }
            : { textBaseline: 'middle', textAlign: 'center', ...i };
        }
        render(t = this.attributes, e = this) {
          this.upsert(
            'icon',
            this.isGImage() ? s.Ee : s.xv,
            this.getIconStyle(t),
            e,
          );
        }
      }
      class Ue extends Fe {
        get context() {
          return this.attributes.context;
        }
        get parsedAttributes() {
          return this.attributes;
        }
        onframe() {}
        animate(t, e) {
          const n = super.animate(t, e);
          return (
            n &&
              ((n.onframe = () => this.onframe()),
              n.finished.then(() => this.onframe())),
            n
          );
        }
      }
      var Ke = function (t, e, n, i) {
        var s,
          o = arguments.length,
          r =
            o < 3
              ? e
              : null === i
                ? (i = Object.getOwnPropertyDescriptor(e, n))
                : i;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          r = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (s = t[a]) &&
              (r = (o < 3 ? s(r) : o > 3 ? s(e, n, r) : s(e, n)) || r);
        return o > 3 && r && Object.defineProperty(e, n, r), r;
      };
      class Xe extends Ue {
        type = 'node';
        static defaultStyleProps = {
          x: 0,
          y: 0,
          size: 32,
          droppable: !0,
          draggable: !0,
          port: !0,
          ports: [],
          portZIndex: 2,
          portLinkToCenter: !1,
          badge: !0,
          badges: [],
          badgeZIndex: 3,
          halo: !1,
          haloDroppable: !1,
          haloLineDash: 0,
          haloLineWidth: 12,
          haloStrokeOpacity: 0.25,
          haloPointerEvents: 'none',
          haloZIndex: -1,
          icon: !0,
          iconZIndex: 1,
          label: !0,
          labelIsBillboard: !0,
          labelMaxWidth: '200%',
          labelPlacement: 'bottom',
          labelWordWrap: !1,
          labelZIndex: 0,
        };
        constructor(t) {
          super(pe({ style: Xe.defaultStyleProps }, t));
        }
        getSize(t = this.attributes) {
          const { size: e } = t;
          return de(e);
        }
        getKeyStyle(t) {
          const e = this.getGraphicStyle(t);
          return Object.assign(
            le(e, ['label', 'halo', 'icon', 'badge', 'port']),
          );
        }
        getLabelStyle(t) {
          if (!1 === t.label || !t.labelText) return !1;
          const {
              placement: e,
              maxWidth: n,
              offsetX: i,
              offsetY: s,
              ...o
            } = ce(this.getGraphicStyle(t), 'label'),
            r = this.getShape('key').getLocalBounds();
          return Object.assign(ci(r, e, i, s), { wordWrapWidth: De(r, n) }, o);
        }
        getHaloStyle(t) {
          if (!1 === t.halo) return !1;
          const { fill: e, ...n } = this.getKeyStyle(t);
          return { ...n, stroke: e, ...ce(this.getGraphicStyle(t), 'halo') };
        }
        getIconStyle(t) {
          if (!1 === t.icon || (!t.iconText && !t.iconSrc)) return !1;
          const e = ce(this.getGraphicStyle(t), 'icon');
          return Object.assign(
            (function (t, e) {
              const n = de(t);
              let i = {};
              return (
                e.text &&
                  !e.fontSize &&
                  (i = { fontSize: 0.5 * Math.min(...n) }),
                !e.src ||
                  (e.width && e.height) ||
                  (i = { width: 0.5 * n[0], height: 0.5 * n[1] }),
                i
              );
            })(t.size, e),
            e,
          );
        }
        getBadgesStyle(t) {
          const e = he(this.shapeMap, 'badge-'),
            n = {};
          if (
            (Object.keys(e).forEach((t) => {
              n[t] = !1;
            }),
            !1 === t.badge || !t.badges?.length)
          )
            return n;
          const { badges: i = [], badgePalette: s, opacity: o = 1, ...r } = t,
            a = Te(s),
            c = ce(this.getGraphicStyle(r), 'badge');
          return (
            i.forEach((t, e) => {
              n[e] = {
                backgroundFill: a ? a[e % a?.length] : void 0,
                opacity: o,
                ...c,
                ...this.getBadgeStyle(t),
              };
            }),
            n
          );
        }
        getBadgeStyle(t) {
          const e = this.getShape('key'),
            { placement: n = 'top', offsetX: i, offsetY: s, ...o } = t;
          return { ...ci(e.getLocalBounds(), n, i, s, !0), ...o };
        }
        getPortsStyle(t) {
          const e = this.getPorts(),
            n = {};
          if (
            (Object.keys(e).forEach((t) => {
              n[t] = !1;
            }),
            !1 === t.port || !t.ports?.length)
          )
            return n;
          const i = ce(this.getGraphicStyle(t), 'port'),
            { ports: s = [] } = t;
          return (
            s.forEach((e, s) => {
              const o = e.key || s,
                r = { ...i, ...e };
              if (ei(r)) n[o] = !1;
              else {
                const [i, s] = this.getPortXY(t, e);
                n[o] = { transform: `translate(${i}, ${s})`, ...r };
              }
            }),
            n
          );
        }
        getPortXY(t, e) {
          const { placement: n = 'left' } = e;
          return Qn(this.getShape('key').getLocalBounds(), n);
        }
        getPorts() {
          return he(this.shapeMap, 'port-');
        }
        getCenter() {
          return this.getShape('key').getBounds().center;
        }
        getIntersectPoint(t) {
          return (function (t, e) {
            return _t(
              t,
              Pt(e, 'center'),
              [
                Pt(e, 'left-top'),
                Pt(e, 'right-top'),
                Pt(e, 'right-bottom'),
                Pt(e, 'left-bottom'),
              ],
              !1,
            ).point;
          })(t, this.getShape('key').getBounds());
        }
        drawHaloShape(t, e) {
          const n = this.getShape('key');
          this.upsert('halo', n.constructor, this.getHaloStyle(t), e);
        }
        drawIconShape(t, e) {
          this.upsert('icon', Ge, this.getIconStyle(t), e);
        }
        drawBadgeShapes(t, e) {
          const n = this.getBadgesStyle(t);
          Object.keys(n).forEach((t) => {
            this.upsert(`badge-${t}`, $e, n[t], e);
          });
        }
        drawPortShapes(t, e) {
          const n = this.getPortsStyle(t);
          Object.keys(n).forEach((t) => {
            this.upsert(`port-${t}`, s.Cd, n[t], e);
          });
        }
        drawLabelShape(t, e) {
          this.upsert('label', je, this.getLabelStyle(t), e);
        }
        _drawKeyShape(t, e) {
          return this.drawKeyShape(t, e);
        }
        render(t = this.parsedAttributes, e = this) {
          this._drawKeyShape(t, e),
            this.getShape('key') &&
              (this.drawHaloShape(t, e),
              this.drawIconShape(t, e),
              this.drawBadgeShapes(t, e),
              this.drawLabelShape(t, e),
              this.drawPortShapes(t, e));
        }
        onframe() {
          this.drawBadgeShapes(this.parsedAttributes, this),
            this.drawLabelShape(this.parsedAttributes, this);
        }
      }
      Ke(
        [xe((t, e) => t.getHaloStyle(e))],
        Xe.prototype,
        'drawHaloShape',
        null,
      ),
        Ke(
          [xe((t, e) => t.getIconStyle(e))],
          Xe.prototype,
          'drawIconShape',
          null,
        ),
        Ke(
          [xe((t, e) => t.getBadgesStyle(e))],
          Xe.prototype,
          'drawBadgeShapes',
          null,
        ),
        Ke(
          [xe((t, e) => t.getPortsStyle(e))],
          Xe.prototype,
          'drawPortShapes',
          null,
        ),
        Ke(
          [xe((t, e) => t.getLabelStyle(e))],
          Xe.prototype,
          'drawLabelShape',
          null,
        ),
        Ke(
          [xe((t, e) => t.getKeyStyle(e))],
          Xe.prototype,
          '_drawKeyShape',
          null,
        );
      class qe extends Xe {
        static defaultStyleProps = { size: 32 };
        constructor(t) {
          super(pe({ style: qe.defaultStyleProps }, t));
        }
        drawKeyShape(t, e) {
          return this.upsert('key', s.Cd, this.getKeyStyle(t), e);
        }
        getKeyStyle(t) {
          return {
            ...super.getKeyStyle(t),
            r: Math.min(...this.getSize(t)) / 2,
          };
        }
        getIconStyle(t) {
          const e = super.getIconStyle(t),
            { r: n } = this.getShape('key').attributes,
            i = 2 * n * Gt;
          return !!e && { width: i, height: i, ...e };
        }
        getIntersectPoint(t) {
          return Ft(t, this.getShape('key').getBounds());
        }
      }
      class Je extends Xe {
        constructor(t) {
          super(t);
        }
        get parsedAttributes() {
          return this.attributes;
        }
        drawKeyShape(t, e) {
          return this.upsert('key', s.mg, this.getKeyStyle(t), e);
        }
        getKeyStyle(t) {
          return { ...super.getKeyStyle(t), points: this.getPoints(t) };
        }
        getIntersectPoint(t) {
          const { points: e } = this.getShape('key').attributes;
          return _t(
            t,
            [+(this.attributes?.x || 0), +(this.attributes?.y || 0)],
            e,
          ).point;
        }
      }
      class Qe extends qe {
        static defaultStyleProps = {
          innerR: '50%',
          donuts: [],
          donutPalette: 'tableau',
        };
        constructor(t) {
          super(pe({ style: Qe.defaultStyleProps }, t));
        }
        parseOuterR() {
          const { size: t } = this.parsedAttributes;
          return Math.min(...de(t)) / 2;
        }
        parseInnerR() {
          const { innerR: t } = this.parsedAttributes;
          return (0, u.Z)(t) ? (parseInt(t) / 100) * this.parseOuterR() : t;
        }
        drawDonutShape(t, e) {
          const { donuts: n } = t;
          if (!n?.length) return;
          const i = n.map((t) => ((0, ne.Z)(t) ? { value: t } : t)),
            o = ce(this.getGraphicStyle(t), 'donut'),
            r = Te(t.donutPalette);
          if (!r) return;
          const a = i.reduce((t, e) => t + (e.value ?? 0), 0),
            c = this.parseOuterR(),
            h = this.parseInnerR();
          let l = 0;
          i.forEach((t, n) => {
            const { value: d = 0, color: u = r[n % r.length], ...p } = t,
              g = 360 * (0 === a ? 1 / i.length : d / a);
            this.upsert(
              `round${n}`,
              s.y$,
              { ...o, d: en(c, h, l, l + g), fill: u, ...p },
              e,
            ),
              (l += g);
          });
        }
        render(t, e = this) {
          super.render(t, e), this.drawDonutShape(t, e);
        }
      }
      const tn = (t, e, n, i) => [t + Math.sin(i) * n, e - Math.cos(i) * n],
        en = (t = 0, e = 0, n, i) => {
          const [s, o] = [0, 0];
          return Math.abs(n - i) % 360 < 1e-6
            ? ((t, e, n, i) =>
                i <= 0 || n <= i
                  ? [
                      ['M', t - n, e],
                      ['A', n, n, 0, 1, 1, t + n, e],
                      ['A', n, n, 0, 1, 1, t - n, e],
                      ['Z'],
                    ]
                  : [
                      ['M', t - n, e],
                      ['A', n, n, 0, 1, 1, t + n, e],
                      ['A', n, n, 0, 1, 1, t - n, e],
                      ['Z'],
                      ['M', t + i, e],
                      ['A', i, i, 0, 1, 0, t - i, e],
                      ['A', i, i, 0, 1, 0, t + i, e],
                      ['Z'],
                    ])(s, o, t, e)
            : ((t, e, n, i, s, o) => {
                const [r, a] = [
                    (s / 360) * 2 * Math.PI,
                    (o / 360) * 2 * Math.PI,
                  ],
                  c = [
                    tn(t, e, i, r),
                    tn(t, e, n, r),
                    tn(t, e, n, a),
                    tn(t, e, i, a),
                  ],
                  h = a - r > Math.PI ? 1 : 0;
                return [
                  ['M', c[0][0], c[0][1]],
                  ['L', c[1][0], c[1][1]],
                  ['A', n, n, 0, h, 1, c[2][0], c[2][1]],
                  ['L', c[3][0], c[3][1]],
                  ['A', i, i, 0, h, 0, c[0][0], c[0][1]],
                  ['Z'],
                ];
              })(s, o, t, e, n, i);
        };
      class nn extends Xe {
        static defaultStyleProps = { size: [45, 35] };
        constructor(t) {
          super(pe({ style: nn.defaultStyleProps }, t));
        }
        drawKeyShape(t, e) {
          return this.upsert('key', s.Pj, this.getKeyStyle(t), e);
        }
        getKeyStyle(t) {
          const e = super.getKeyStyle(t),
            [n, i] = this.getSize(t);
          return { ...e, rx: n / 2, ry: i / 2 };
        }
        getIconStyle(t) {
          const e = super.getIconStyle(t),
            { rx: n, ry: i } = this.getShape('key').attributes,
            s = 2 * Math.min(+n, +i) * Gt;
          return !!e && { width: s, height: s, ...e };
        }
        getIntersectPoint(t) {
          return Ft(t, this.getShape('key').getBounds());
        }
      }
      var sn = n(23413),
        on = n(71154);
      class rn extends Xe {
        static defaultStyleProps = {
          size: [160, 80],
          halo: !1,
          icon: !1,
          label: !1,
          pointerEvents: 'auto',
        };
        constructor(t) {
          super({
            ...t,
            style: Object.assign({}, rn.defaultStyleProps, t.style),
          });
        }
        rootPointerEvent = new s.nR(null);
        get eventService() {
          return this.context.canvas.context.eventService;
        }
        get events() {
          return [
            w.CLICK,
            w.POINTER_DOWN,
            w.POINTER_MOVE,
            w.POINTER_UP,
            w.POINTER_OVER,
            w.POINTER_LEAVE,
          ];
        }
        getDomElement() {
          return this.getShape('key').getDomElement();
        }
        getKeyStyle(t) {
          const e = (0, sn.Z)(t, ['innerHTML', 'pointerEvents', 'cursor']),
            [n, i] = this.getSize(t);
          return { ...e, width: n, height: i };
        }
        drawKeyShape(t, e) {
          const n = this.getKeyStyle(t),
            { width: i = 0, height: o = 0 } = n,
            r = this.upsert(
              'key-container',
              s.UL,
              { width: i, height: o, opacity: 0 },
              e,
            );
          return this.upsert('key', s.k9, n, r);
        }
        connectedCallback() {
          const t = this.getDomElement();
          this.events.forEach((e) => {
            t.addEventListener(e, this.forwardEvents);
          });
        }
        attributeChangedCallback(t, e, n) {
          'zIndex' === t && e !== n && (this.getDomElement().style.zIndex = n);
        }
        destroy() {
          const t = this.getDomElement();
          this.events.forEach((e) => {
            t.removeEventListener(e, this.forwardEvents);
          }),
            super.destroy();
        }
        forwardEvents = (t) => {
          const e = this.context.canvas,
            n = e.context.renderingContext.root.ownerDocument.defaultView;
          this.normalizeToPointerEvent(t, n).forEach((i) => {
            const s = this.bootstrapEvent(this.rootPointerEvent, i, n, t);
            e.context.eventService.mapEvent(s);
          });
        };
        normalizeToPointerEvent(t, e) {
          const n = [];
          if (e.isTouchEvent(t))
            for (let e = 0; e < t.changedTouches.length; e++) {
              const i = t.changedTouches[e];
              (0, on.Z)(i.button) && (i.button = 0),
                (0, on.Z)(i.buttons) && (i.buttons = 1),
                (0, on.Z)(i.isPrimary) &&
                  (i.isPrimary =
                    1 === t.touches.length && 'touchstart' === t.type),
                (0, on.Z)(i.width) && (i.width = i.radiusX || 1),
                (0, on.Z)(i.height) && (i.height = i.radiusY || 1),
                (0, on.Z)(i.tiltX) && (i.tiltX = 0),
                (0, on.Z)(i.tiltY) && (i.tiltY = 0),
                (0, on.Z)(i.pointerType) && (i.pointerType = 'touch'),
                (0, on.Z)(i.pointerId) && (i.pointerId = i.identifier || 0),
                (0, on.Z)(i.pressure) && (i.pressure = i.force || 0.5),
                (0, on.Z)(i.twist) && (i.twist = 0),
                (0, on.Z)(i.tangentialPressure) && (i.tangentialPressure = 0),
                (i.isNormalized = !0),
                (i.type = t.type),
                n.push(i);
            }
          else if (e.isMouseEvent(t)) {
            const e = t;
            (0, on.Z)(e.isPrimary) && (e.isPrimary = !0),
              (0, on.Z)(e.width) && (e.width = 1),
              (0, on.Z)(e.height) && (e.height = 1),
              (0, on.Z)(e.tiltX) && (e.tiltX = 0),
              (0, on.Z)(e.tiltY) && (e.tiltY = 0),
              (0, on.Z)(e.pointerType) && (e.pointerType = 'mouse'),
              (0, on.Z)(e.pointerId) && (e.pointerId = 1),
              (0, on.Z)(e.pressure) && (e.pressure = 0.5),
              (0, on.Z)(e.twist) && (e.twist = 0),
              (0, on.Z)(e.tangentialPressure) && (e.tangentialPressure = 0),
              (e.isNormalized = !0),
              n.push(e);
          } else n.push(t);
          return n;
        }
        transferMouseData(t, e) {
          (t.isTrusted = e.isTrusted),
            (t.srcElement = e.srcElement),
            (t.timeStamp = performance.now()),
            (t.type = e.type),
            (t.altKey = e.altKey),
            (t.metaKey = e.metaKey),
            (t.shiftKey = e.shiftKey),
            (t.ctrlKey = e.ctrlKey),
            (t.button = e.button),
            (t.buttons = e.buttons),
            (t.client.x = e.clientX),
            (t.client.y = e.clientY),
            (t.movement.x = e.movementX),
            (t.movement.y = e.movementY),
            (t.page.x = e.pageX),
            (t.page.y = e.pageY),
            (t.screen.x = e.screenX),
            (t.screen.y = e.screenY),
            (t.relatedTarget = null);
        }
        bootstrapEvent(t, e, n, i) {
          (t.view = n),
            (t.originalEvent = null),
            (t.nativeEvent = i),
            (t.pointerId = e.pointerId),
            (t.width = e.width),
            (t.height = e.height),
            (t.isPrimary = e.isPrimary),
            (t.pointerType = e.pointerType),
            (t.pressure = e.pressure),
            (t.tangentialPressure = e.tangentialPressure),
            (t.tiltX = e.tiltX),
            (t.tiltY = e.tiltY),
            (t.twist = e.twist),
            this.transferMouseData(t, e);
          const { x: s, y: o } = this.getViewportXY(e);
          (t.viewport.x = s), (t.viewport.y = o);
          const [r, a] = this.context.canvas.getCanvasByViewport([s, o]);
          return (
            (t.canvas.x = r),
            (t.canvas.y = a),
            t.global.copyFrom(t.canvas),
            t.offset.copyFrom(t.canvas),
            (t.isTrusted = i.isTrusted),
            'pointerleave' === t.type && (t.type = 'pointerout'),
            t
          );
        }
        getViewportXY(t) {
          let e, n;
          const { offsetX: i, offsetY: s, clientX: o, clientY: r } = t;
          if (
            !this.context.canvas.context.config.supportsCSSTransform ||
            (0, a.Z)(i) ||
            (0, a.Z)(s)
          ) {
            const t = this.eventService.client2Viewport({ x: o, y: r });
            (e = t.x), (n = t.y);
          } else (e = i), (n = s);
          return { x: e, y: n };
        }
        onframe() {
          super.onframe();
          const { opacity: t } = this.attributes;
          this.getDomElement().style.opacity = `${t}`;
        }
      }
      class an extends Xe {
        static defaultStyleProps = { size: 32 };
        constructor(t) {
          super(pe({ style: an.defaultStyleProps }, t));
        }
        getKeyStyle(t) {
          const [e, n] = this.getSize(t),
            { fillOpacity: i, opacity: s = i, ...o } = super.getKeyStyle(t);
          return {
            opacity: s,
            ...o,
            width: e,
            height: n,
            x: -e / 2,
            y: -n / 2,
          };
        }
        getHaloStyle(t) {
          if (!1 === t.halo) return !1;
          const { fill: e, stroke: n, ...i } = this.getShape('key').attributes,
            s = ce(this.getGraphicStyle(t), 'halo'),
            o = Number(s.lineWidth),
            [r, a] = ft(this.getSize(t), [o, o]);
          return {
            ...s,
            width: r,
            height: a,
            fill: 'transparent',
            x: -r / 2,
            y: -a / 2,
          };
        }
        getIconStyle(t) {
          const e = super.getIconStyle(t),
            [n, i] = this.getSize(t);
          return !!e && { width: n * Gt, height: i * Gt, ...e };
        }
        drawKeyShape(t, e) {
          return this.upsert('key', s.Ee, this.getKeyStyle(t), e);
        }
        drawHaloShape(t, e) {
          this.upsert('halo', s.UL, this.getHaloStyle(t), e);
        }
      }
      class cn extends Je {
        static defaultStyleProps = { size: 40, direction: 'up' };
        constructor(t) {
          super(pe({ style: cn.defaultStyleProps }, t));
        }
        getPoints(t) {
          const { direction: e } = t,
            [n, i] = this.getSize(t);
          return (function (t, e, n) {
            const i = e / 2,
              s = t / 2,
              o = {
                up: [
                  [-s, i],
                  [s, i],
                  [0, -i],
                ],
                left: [
                  [-s, 0],
                  [s, i],
                  [s, -i],
                ],
                right: [
                  [-s, i],
                  [-s, -i],
                  [s, 0],
                ],
                down: [
                  [-s, -i],
                  [s, -i],
                  [0, i],
                ],
              };
            return o[n] || o.up;
          })(n, i, e);
        }
        getPortXY(t, e) {
          const { direction: n } = t,
            { placement: i = 'top' } = e,
            s = this.getShape('key').getLocalBounds(),
            [o, r] = this.getSize(t),
            a = (function (t, e, n) {
              const i = e / 2,
                s = t / 2,
                o = {};
              'down' === n
                ? ((o.bottom = o.default = [0, i]),
                  (o.right = [s, -i]),
                  (o.left = [-s, -i]))
                : 'left' === n
                  ? ((o.top = [s, -i]),
                    (o.bottom = [s, i]),
                    (o.left = o.default = [-s, 0]))
                  : 'right' === n
                    ? ((o.top = [-s, -i]),
                      (o.bottom = [-s, i]),
                      (o.right = o.default = [s, 0]))
                    : ((o.left = [-s, i]),
                      (o.top = o.default = [0, -i]),
                      (o.right = [s, i]));
              return o;
            })(o, r, n);
          return Qn(s, i, a, !1);
        }
        getIconStyle(t) {
          const { icon: e, iconText: n, iconSrc: i, direction: s } = t;
          if (!1 === e || Ie(n || i)) return !1;
          const o = ce(this.getGraphicStyle(t), 'icon'),
            r = this.getShape('key').getLocalBounds(),
            [a, c] = (function (t, e) {
              const { center: n } = t,
                [i, s] = at(t);
              return [
                'up' === e || 'down' === e
                  ? n[0]
                  : 'right' === e
                    ? n[0] - i / 6
                    : n[0] + i / 6,
                'left' === e || 'right' === e
                  ? n[1]
                  : 'down' === e
                    ? n[1] - s / 6
                    : n[1] + s / 6,
              ];
            })(r, s),
            h =
              2 *
              (function (t, e) {
                let [n, i] = at(t);
                return (
                  ([n, i] = 'up' === e || 'down' === e ? [n, i] : [i, n]),
                  (i ** 2 - (Math.sqrt((n / 2) ** 2 + i ** 2) - n / 2) ** 2) /
                    (2 * i)
                );
              })(r, s) *
              Gt;
          return { x: a, y: c, width: h, height: h, ...o };
        }
      }
      var hn = function (t, e, n, i) {
        var s,
          o = arguments.length,
          r =
            o < 3
              ? e
              : null === i
                ? (i = Object.getOwnPropertyDescriptor(e, n))
                : i;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          r = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (s = t[a]) &&
              (r = (o < 3 ? s(r) : o > 3 ? s(e, n, r) : s(e, n)) || r);
        return o > 3 && r && Object.defineProperty(e, n, r), r;
      };
      class ln extends Xe {
        type = 'combo';
        static defaultStyleProps = {
          childrenNode: [],
          droppable: !0,
          draggable: !0,
          collapsed: !1,
          collapsedSize: 32,
          collapsedMarker: !0,
          collapsedMarkerZIndex: 1,
          collapsedMarkerFontSize: 12,
          collapsedMarkerTextAlign: 'center',
          collapsedMarkerTextBaseline: 'middle',
          collapsedMarkerType: 'child-count',
        };
        constructor(t) {
          super(pe({ style: ln.defaultStyleProps }, t)),
            this.updateComboPosition(this.parsedAttributes);
        }
        getKeySize(t) {
          const { collapsed: e, childrenNode: n = [] } = t;
          return 0 === n.length
            ? this.getEmptyKeySize(t)
            : e
              ? this.getCollapsedKeySize(t)
              : this.getExpandedKeySize(t);
        }
        getEmptyKeySize(t) {
          const { padding: e, collapsedSize: n } = t,
            [i, s, o, r] = st(e);
          return ft(de(n), [r + s, i + o, 0]);
        }
        getCollapsedKeySize(t) {
          return de(t.collapsedSize);
        }
        getExpandedKeySize(t) {
          const e = this.getContentBBox(t);
          return [ot(e), rt(e), 0];
        }
        getContentBBox(t) {
          const { context: e, childrenNode: n = [], padding: i } = t,
            o = n.map((t) => e.element.getElement(t)).filter(Boolean);
          if (0 === o.length) {
            const e = new s.mN(),
              { x: n = 0, y: i = 0, size: o } = t,
              [r, a] = de(o);
            return (
              e.setMinMax([n - r / 2, i - a / 2, 0], [n + r / 2, i + a / 2, 0]),
              e
            );
          }
          const r = lt(o.map((t) => t.getBounds()));
          return i ? ht(r, i) : r;
        }
        drawCollapsedMarkerShape(t, e) {
          this.upsert(
            'collapsed-marker',
            Ge,
            this.getCollapsedMarkerStyle(t),
            e,
          );
        }
        getCollapsedMarkerStyle(t) {
          if (!t.collapsed || !t.collapsedMarker) return !1;
          const { type: e, ...n } = ce(
              this.getGraphicStyle(t),
              'collapsedMarker',
            ),
            i = this.getShape('key'),
            [s, o] = Pt(i.getLocalBounds(), 'center'),
            r = { ...n, x: s, y: o };
          if (e) {
            const n = this.getCollapsedMarkerText(e, t);
            Object.assign(r, { text: n });
          }
          return r;
        }
        getCollapsedMarkerText(t, e) {
          const { context: n, childrenData: i = [] } = e,
            { model: s } = n;
          return 'descendant-count' === t
            ? s.getDescendantsData(this.id).length.toString()
            : 'child-count' === t
              ? i.length.toString()
              : 'node-count' === t
                ? s
                    .getDescendantsData(this.id)
                    .filter((t) => 'node' === s.getElementType(F(t)))
                    .length.toString()
                : (0, tt.Z)(t)
                  ? t(i)
                  : '';
        }
        getComboZIndex(t) {
          return (this.context.model.getAncestorsData(this.id, D) || []).length;
        }
        getComboPosition(t) {
          const {
            x: e = 0,
            y: n = 0,
            collapsed: i,
            context: s,
            childrenData: o = [],
          } = t;
          if (0 === o.length) return [+e, +n, 0];
          if (i) {
            const { model: t } = s,
              i = t.getDescendantsData(this.id).filter((e) => !t.isCombo(F(e)));
            if (i.length > 0) {
              return bt(
                i.reduce((t, e) => ft(t, Mt(e)), [0, 0, 0]),
                i.length,
              );
            }
            return [+e, +n, 0];
          }
          return this.getContentBBox(t).center;
        }
        getComboStyle(t) {
          const { zIndex: e = this.getComboZIndex(t) } = t,
            [n, i] = this.getComboPosition(t);
          return { x: n, y: i, transform: `translate(${n}, ${i})`, zIndex: e };
        }
        updateComboPosition(t) {
          const e = this.getComboStyle(t);
          Object.assign(this.style, e);
          const { x: n, y: i } = e;
          this.context.model.syncComboDatum({
            id: this.id,
            style: { x: n, y: i },
          });
        }
        render(t, e = this) {
          super.render(t, e), this.drawCollapsedMarkerShape(t, e);
        }
        update(t = {}) {
          super.update(t), this.updateComboPosition(this.parsedAttributes);
        }
        onframe() {
          super.onframe(),
            this.attributes.collapsed ||
              this.updateComboPosition(this.parsedAttributes),
            this.drawKeyShape(this.parsedAttributes, this);
        }
        animate(t, e) {
          const n = super.animate(
            this.attributes.collapsed
              ? t
              : t.map(({ x: t, y: e, z: n, transform: i, ...s }) => s),
            e,
          );
          return n
            ? new Proxy(n, {
                set: (t, e, n) => (
                  'currentTime' === e &&
                    Promise.resolve().then(() => this.onframe()),
                  Reflect.set(t, e, n)
                ),
              })
            : n;
        }
      }
      hn(
        [xe((t, e) => t.getCollapsedMarkerStyle(e))],
        ln.prototype,
        'drawCollapsedMarkerShape',
        null,
      );
      var dn = function (t, e) {
          if (!(0, d.Z)(t)) return t;
          for (var n = [], i = 0; i < t.length; i++) {
            var s = t[i];
            e(s, i) && n.push(s);
          }
          return n;
        },
        un = function (t, e) {
          return !!(0, d.Z)(t) && t.indexOf(e) > -1;
        },
        pn = function (t, e) {
          return (
            void 0 === e && (e = []),
            dn(t, function (t) {
              return !un(e, t);
            })
          );
        };
      const gn = { N: 'S', S: 'N', W: 'E', E: 'W' },
        fn = { N: -Math.PI / 2, S: Math.PI / 2, E: 0, W: Math.PI };
      function mn(t, e) {
        const [n, i] = t,
          [s, o] = e;
        return n === s
          ? i > o
            ? 'N'
            : 'S'
          : i === o
            ? n > s
              ? 'W'
              : 'E'
            : null;
      }
      function yn(t, e) {
        return 'N' === e || 'S' === e ? rt(t) : ot(t);
      }
      function bn(t, e, n) {
        const i = [t[0], e[1]],
          s = [e[0], t[1]],
          o = mn(t, i),
          r = mn(t, s),
          a = n ? gn[n] : null,
          c = o === n || (o !== a && r !== n) ? i : s;
        return { points: [c], direction: mn(c, e) };
      }
      function En(t, e, n) {
        const i = Sn(t, e, n);
        return { points: [i], direction: mn(i, e) };
      }
      function xn(t, e, n, i) {
        const s = [
            [e[0], t[1]],
            [t[0], e[1]],
          ],
          o = s.filter(
            (t) =>
              (function (t, e) {
                return !dt(t, e);
              })(t, n) &&
              !(function (t, e, n = !1) {
                const {
                    min: [i, s],
                    max: [o, r],
                  } = e,
                  a = (t[1] === s || t[1] === r) && (n || it(t[0], i, o)),
                  c = (t[0] === i || t[0] === o) && (n || it(t[1], s, r));
                return a || c;
              })(t, n, !0),
          ),
          r = o.filter((e) => mn(e, t) !== i);
        if (r.length > 0) {
          const n = r.find((e) => mn(t, e) === i) || r[0];
          return { points: [n], direction: mn(n, e) };
        }
        {
          const r = Lt(e, pn(s, o)[0], yn(n, i) / 2);
          return { points: [Sn(r, t, n), r], direction: mn(r, e) };
        }
      }
      function vn(t, e, n, i) {
        let s = En(t, e, n);
        const o = Tt(s.points[0]);
        if (dt(o, i)) {
          s = En(e, t, i);
          const r = Tt(s.points[0]);
          if (dt(r, n)) {
            const a = Lt(t, o, yn(n, mn(t, o)) / 2),
              c = Lt(e, r, yn(i, mn(e, r)) / 2),
              h = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2],
              l = En(t, h, n),
              d = xn(h, e, i, l.direction);
            (s.points = [l.points[0], d.points[0]]),
              (s.direction = d.direction);
          }
        }
        return s;
      }
      function wn(t, e, n, i, s) {
        const o = 0.01,
          r = lt([n, i]),
          a = xt(e, r.center) > xt(t, r.center),
          [c, h] = a ? [e, t] : [t, e],
          l = rt(r) + ot(r);
        let d;
        if (s) {
          const t = [c[0] + l * Math.cos(fn[s]), c[1] + l * Math.sin(fn[s])];
          d = Lt(pt(r, t), t, o);
        } else d = Lt(pt(r, c), c, -0.01);
        let u = Sn(d, h, r),
          p = [It(d, 2), It(u, 2)];
        if (g(It(d), It(u))) {
          const t = St(mt(d, c), [1, 0, 0]) + Math.PI / 2;
          (u = [h[0] + l * Math.cos(t), h[1] + l * Math.sin(t), 0]),
            (u = It(Lt(pt(r, u), h, -0.01), 2));
          p = [d, Sn(d, u, r), u];
        }
        return { points: a ? p.reverse() : p, direction: mn(a ? d : u, e) };
      }
      function Sn(t, e, n) {
        let i = [t[0], e[1]];
        return dt(i, n) && (i = [e[0], t[1]]), i;
      }
      function Cn(t, e, n, i, s) {
        let o = 'number' == typeof e ? e : 0.5;
        'start' === e && (o = 0), 'end' === e && (o = 0.99);
        const r = kt(t.getPoint(o)),
          a = kt(t.getPoint(o + 0.01));
        let c = 'start' === e ? 'left' : 'end' === e ? 'right' : 'center';
        if (Bt(r, a) || !n) {
          const [e, n] = On(t, o, i, s);
          return { transform: `translate(${e}, ${n})`, textAlign: c };
        }
        let h = Math.atan2(a[1] - r[1], a[0] - r[0]);
        a[0] < r[0] &&
          ((c = 'center' === c ? c : 'left' === c ? 'right' : 'left'),
          (i *= -1),
          (h += Math.PI));
        const [l, d] = On(t, o, i, s, h);
        return {
          textAlign: c,
          transform: `translate(${l}, ${d}) rotate(${(h / Math.PI) * 180}deg)`,
        };
      }
      function On(t, e, n, i, s) {
        const [o, r] = kt(t.getPoint(e));
        let a = n,
          c = i;
        return (
          s &&
            ((a = n * Math.cos(s) - i * Math.sin(s)),
            (c = n * Math.sin(s) + i * Math.cos(s))),
          [o + a, r + c]
        );
      }
      function Tn(t, e, n, i) {
        if (g(t, e)) return t;
        const s = mt(e, t),
          o = [t[0] + n * s[0], t[1] + n * s[1]],
          r = wt(Ct(s, !1));
        return (o[0] += i * r[0]), (o[1] += i * r[1]), o;
      }
      function An(t, e, n) {
        return [
          ['M', t[0], t[1]],
          ['C', n[0][0], n[0][1], n[1][0], n[1][1], e[0], e[1]],
        ];
      }
      function Dn(t, e = 0, n = !1) {
        const i = t[0],
          s = t[t.length - 1],
          o = t.slice(1, t.length - 1),
          r = [['M', i[0], i[1]]];
        return (
          o.forEach((t, n) => {
            const a = o[n - 1] || i,
              c = o[n + 1] || s;
            if (!At([a, (h = t)], [h, c]) && e) {
              const [n, i] = (function (t, e, n, i) {
                const s = vt(t, e),
                  o = vt(n, e),
                  r = Math.min(i, Math.min(s, o) / 2),
                  a = [
                    e[0] - (r / s) * (e[0] - t[0]),
                    e[1] - (r / s) * (e[1] - t[1]),
                  ],
                  c = [
                    e[0] - (r / o) * (e[0] - n[0]),
                    e[1] - (r / o) * (e[1] - n[1]),
                  ];
                return [a, c];
              })(a, t, c, e);
              r.push(
                ['L', n[0], n[1]],
                ['Q', t[0], t[1], i[0], i[1]],
                ['L', i[0], i[1]],
              );
            } else r.push(['L', t[0], t[1]]);
            var h;
          }),
          r.push(['L', s[0], s[1]]),
          n && r.push(['Z']),
          r
        );
      }
      function Mn(t, e, n, i, s) {
        const o = ct(t),
          r = t.getCenter();
        let a = i && ni(i),
          c = s && ni(s);
        if (!a || !c) {
          const i = ((t) => {
              const e = Math.PI / 2,
                n = rt(t) / 2,
                i = ot(t) / 2,
                s = Math.atan2(n, i) / 2,
                o = Math.atan2(i, n) / 2;
              return {
                top: [-e - o, -e + o],
                'top-right': [-e + o, -s],
                'right-top': [-e + o, -s],
                right: [-s, s],
                'bottom-right': [s, e - o],
                'right-bottom': [s, e - o],
                bottom: [e - o, e + o],
                'bottom-left': [e + o, Math.PI - s],
                'left-bottom': [e + o, Math.PI - s],
                left: [Math.PI - s, Math.PI + s],
                'top-left': [Math.PI + s, -e - o],
                'left-top': [Math.PI + s, -e - o],
              };
            })(o),
            s = i[e][0],
            h = i[e][1],
            [l, d] = at(o),
            u = Math.max(l, d),
            p = ft(r, [u * Math.cos(s), u * Math.sin(s), 0]),
            g = ft(r, [u * Math.cos(h), u * Math.sin(h), 0]);
          (a = ai(t, p)), (c = ai(t, g)), n || ([a, c] = [c, a]);
        }
        return [a, c];
      }
      function Rn(t, e, n, i, s, o) {
        const r = t.getPorts()[s || o],
          a = t.getPorts()[o || s];
        let [c, h] = Mn(t, e, n, r, a);
        const l = (function (t, e, n, i) {
          const s = t.getCenter();
          if (g(e, n)) {
            const t = mt(e, s),
              o = [
                i * Math.sign(t[0]) || i / 2,
                i * Math.sign(t[1]) || -i / 2,
                0,
              ];
            return [ft(e, o), ft(n, yt(o, [1, -1, 1]))];
          }
          return [Lt(s, e, xt(s, e) + i), Lt(s, n, xt(s, n) + i)];
        })(t, c, h, i);
        return (
          r && (c = ri(r, l[0])), a && (h = ri(a, l[l.length - 1])), An(c, h, l)
        );
      }
      function Pn(t, e, n, i, s, o, r) {
        const a = ti(t),
          c = a[o || r],
          h = a[r || o];
        let [l, d] = Mn(t, n, i, c, h);
        const u = (function (t, e, n, i) {
          const s = [],
            o = ct(t);
          if (g(e, n)) {
            switch (ut(o, e)) {
              case 'left':
                s.push([e[0] - i, e[1]]),
                  s.push([e[0] - i, e[1] + i]),
                  s.push([e[0], e[1] + i]);
                break;
              case 'right':
                s.push([e[0] + i, e[1]]),
                  s.push([e[0] + i, e[1] + i]),
                  s.push([e[0], e[1] + i]);
                break;
              case 'top':
                s.push([e[0], e[1] - i]),
                  s.push([e[0] + i, e[1] - i]),
                  s.push([e[0] + i, e[1]]);
                break;
              case 'bottom':
                s.push([e[0], e[1] + i]),
                  s.push([e[0] + i, e[1] + i]),
                  s.push([e[0] + i, e[1]]);
            }
          } else {
            const t = ut(o, e),
              r = ut(o, n);
            if (t === r) {
              let o, r;
              switch (t) {
                case 'left':
                  (o = Math.min(e[0], n[0]) - i),
                    s.push([o, e[1]]),
                    s.push([o, n[1]]);
                  break;
                case 'right':
                  (o = Math.max(e[0], n[0]) + i),
                    s.push([o, e[1]]),
                    s.push([o, n[1]]);
                  break;
                case 'top':
                  (r = Math.min(e[1], n[1]) - i),
                    s.push([e[0], r]),
                    s.push([n[0], r]);
                  break;
                case 'bottom':
                  (r = Math.max(e[1], n[1]) + i),
                    s.push([e[0], r]),
                    s.push([n[0], r]);
              }
            } else {
              const a = (t, e) =>
                  ({
                    left: [e[0] - i, e[1]],
                    right: [e[0] + i, e[1]],
                    top: [e[0], e[1] - i],
                    bottom: [e[0], e[1] + i],
                  })[t],
                c = a(t, e),
                h = a(r, n),
                l = Sn(c, h, o);
              s.push(c, l, h);
            }
          }
          return s;
        })(t, l, d, s);
        return (
          c && (l = ri(c, u[0])),
          h && (d = ri(h, u[u.length - 1])),
          Dn([l, ...u, d], e)
        );
      }
      function kn(t, e) {
        const n = new Set(),
          i = new Set(),
          s = new Set();
        return (
          t.forEach((o) => {
            e(o).forEach((e) => {
              n.add(e),
                t.includes(e.source) && t.includes(e.target)
                  ? i.add(e)
                  : s.add(e);
            });
          }),
          {
            edges: Array.from(n),
            internal: Array.from(i),
            external: Array.from(s),
          }
        );
      }
      function Nn(t, e) {
        const n = [];
        let i = t;
        for (; i; ) {
          n.push(i);
          const t = e(F(i));
          if (!t) break;
          i = t;
        }
        if (n.some((t) => t.style?.collapsed)) {
          const t = n.reverse().findIndex(te);
          return n[t] || n.at(-1);
        }
        return t;
      }
      const In = (t, e) => {
          const n = Math.max(t, e) / 2;
          return [
            ['M', -t / 2, 0],
            ['A', n, n, 0, 1, 0, 2 * n - t / 2, 0],
            ['A', n, n, 0, 1, 0, -t / 2, 0],
            ['Z'],
          ];
        },
        Ln = (t, e) => [
          ['M', -t / 2, 0],
          ['L', t / 2, -e / 2],
          ['L', t / 2, e / 2],
          ['Z'],
        ],
        Bn = (t, e) => [
          ['M', -t / 2, 0],
          ['L', 0, -e / 2],
          ['L', t / 2, 0],
          ['L', 0, e / 2],
          ['Z'],
        ],
        _n = (t, e) => [
          ['M', -t / 2, 0],
          ['L', t / 2, -e / 2],
          ['L', (4 * t) / 5 - t / 2, 0],
          ['L', t / 2, e / 2],
          ['Z'],
        ],
        Fn = (t, e) => [
          ['M', -t / 2, -e / 2],
          ['L', t / 2, -e / 2],
          ['L', t / 2, e / 2],
          ['L', -t / 2, e / 2],
          ['Z'],
        ],
        zn = (t, e) => {
          const n = t / 2,
            i = t / 7,
            s = t - i;
          return [
            ['M', -n, 0],
            ['L', 0, -e / 2],
            ['L', 0, e / 2],
            ['Z'],
            ['M', s - n, -e / 2],
            ['L', s + i - n, -e / 2],
            ['L', s + i - n, e / 2],
            ['L', s - n, e / 2],
            ['Z'],
          ];
        },
        jn = (t, e) => [
          ['M', t / 2, -e / 2],
          ['L', -t / 2, 0],
          ['L', t / 2, 0],
          ['L', -t / 2, 0],
          ['L', t / 2, e / 2],
        ];
      var $n = function (t, e, n, i) {
        var s,
          o = arguments.length,
          r =
            o < 3
              ? e
              : null === i
                ? (i = Object.getOwnPropertyDescriptor(e, n))
                : i;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          r = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (s = t[a]) &&
              (r = (o < 3 ? s(r) : o > 3 ? s(e, n, r) : s(e, n)) || r);
        return o > 3 && r && Object.defineProperty(e, n, r), r;
      };
      class Zn extends Ue {
        type = 'edge';
        static defaultStyleProps = {
          badge: !0,
          badgeOffsetX: 0,
          badgeOffsetY: 0,
          badgePlacement: 'suffix',
          isBillboard: !0,
          label: !0,
          labelAutoRotate: !0,
          labelIsBillboard: !0,
          labelMaxWidth: '80%',
          labelOffsetX: 4,
          labelOffsetY: 0,
          labelPlacement: 'center',
          labelTextBaseline: 'middle',
          labelWordWrap: !1,
          halo: !1,
          haloDroppable: !1,
          haloLineDash: 0,
          haloLineWidth: 12,
          haloPointerEvents: 'none',
          haloStrokeOpacity: 0.25,
          haloZIndex: -1,
          loop: !0,
          startArrow: !1,
          startArrowLineDash: 0,
          startArrowLineJoin: 'round',
          startArrowLineWidth: 1,
          startArrowTransformOrigin: 'center',
          startArrowType: 'vee',
          endArrow: !1,
          endArrowLineDash: 0,
          endArrowLineJoin: 'round',
          endArrowLineWidth: 1,
          endArrowTransformOrigin: 'center',
          endArrowType: 'vee',
          loopPlacement: 'top',
          loopClockwise: !0,
        };
        constructor(t) {
          super(pe({ style: Zn.defaultStyleProps }, t));
        }
        get sourceNode() {
          const { context: t, sourceNode: e } = this.parsedAttributes;
          return t.element.getElement(e);
        }
        get targetNode() {
          const { context: t, targetNode: e } = this.parsedAttributes;
          return t.element.getElement(e);
        }
        getKeyStyle(t) {
          const { loop: e, ...n } = this.getGraphicStyle(t),
            { sourceNode: i, targetNode: s } = this;
          var o, r;
          return {
            d:
              e && ((r = s), (o = i) && r && o === r)
                ? this.getLoopPath(t)
                : this.getKeyPath(t),
            ...le(n, ['halo', 'label', 'startArrow', 'endArrow']),
          };
        }
        getLoopPath(t) {
          const { sourcePort: e, targetPort: n } = t,
            i = this.sourceNode,
            s = ct(i),
            o = Math.max(ot(s), rt(s)),
            {
              placement: r,
              clockwise: a,
              dist: c = o,
            } = ce(this.getGraphicStyle(t), 'loop');
          return Rn(i, r, a, c, e, n);
        }
        getEndpoints(t) {
          const { sourcePort: e, targetPort: n } = t,
            { sourceNode: i, targetNode: s } = this,
            [o, r] = ii(i, s, e, n);
          return [oi(o || i, r || s), oi(r || s, o || i)];
        }
        getHaloStyle(t) {
          if (!1 === t.halo) return !1;
          return {
            ...this.getKeyStyle(t),
            ...ce(this.getGraphicStyle(t), 'halo'),
          };
        }
        getLabelStyle(t) {
          if (!1 === t.label || !t.labelText) return !1;
          const e = ce(this.getGraphicStyle(t), 'label'),
            {
              placement: n,
              offsetX: i,
              offsetY: s,
              autoRotate: o,
              maxWidth: r,
              ...a
            } = e,
            c = Cn(this.shapeMap.key, n, o, i, s),
            h = this.shapeMap.key.getLocalBounds(),
            l = (function (t, e, n = 1) {
              return Ae(xt(t[0], t[1]) * n, e);
            })([h.min, h.max], r);
          return Object.assign({ wordWrapWidth: l }, c, a);
        }
        getBadgeStyle(t) {
          if (!1 === t.badge || !t.badgeText) return !1;
          const { offsetX: e, offsetY: n, placement: i, ...s } = ce(t, 'badge');
          return Object.assign(
            s,
            (function (t, e, n, i, s) {
              const o = 2 * t.badge?.getGeometryBounds().halfExtents[0] || 0,
                r = 2 * t.label?.getGeometryBounds().halfExtents[0] || 0;
              return Cn(
                t.key,
                n,
                !0,
                (r ? (r / 2 + o / 2) * ('suffix' === e ? 1 : -1) : 0) + i,
                s,
              );
            })(this.shapeMap, i, t.labelPlacement, e, n),
          );
        }
        drawArrow(t, e) {
          const n = 'start' === e,
            i = t['start' === e ? 'startArrow' : 'endArrow'],
            o = this.shapeMap.key;
          if (i) {
            const e = this.getArrowStyle(t, n),
              [i, r, a] = n
                ? ['markerStart', 'markerStartOffset', 'startArrowOffset']
                : ['markerEnd', 'markerEndOffset', 'endArrowOffset'],
              c = o.parsedStyle[i];
            if (c) c.attr(e);
            else {
              const t = new (e.src ? s.Ee : s.y$)({ style: e });
              o.style[i] = t;
            }
            o.style[r] = t[a] || e.width / 2 + +e.lineWidth;
          } else {
            const t = n ? 'markerStart' : 'markerEnd';
            o.style[t]?.destroy(), (o.style[t] = null);
          }
        }
        getArrowStyle(t, e) {
          const n = this.getShape('key').attributes,
            s = e ? 'startArrow' : 'endArrow',
            { size: o, type: r, ...a } = ce(this.getGraphicStyle(t), s),
            [c, h] = de(
              (function (t, e) {
                return e || (t < 4 ? 10 : 4 === t ? 12 : 2.5 * t);
              })(n.lineWidth, o),
            ),
            l = ((0, tt.Z)(r) ? r : i[r] || Ln)(c, h);
          return Object.assign(
            (0, sn.Z)(n, ['stroke', 'strokeOpacity', 'fillOpacity']),
            { width: c, height: h },
            { ...(l && { d: l, fill: 'simple' === r ? '' : n.stroke }) },
            a,
          );
        }
        drawLabelShape(t, e) {
          this.upsert('label', je, this.getLabelStyle(t), e);
        }
        drawHaloShape(t, e) {
          this.upsert('halo', s.y$, this.getHaloStyle(t), e);
        }
        drawBadgeShape(t, e) {
          this.upsert('badge', $e, this.getBadgeStyle(t), e);
        }
        drawSourceArrow(t) {
          this.drawArrow(t, 'start');
        }
        drawTargetArrow(t) {
          this.drawArrow(t, 'end');
        }
        drawKeyShape(t, e) {
          return this.upsert('key', s.y$, this.getKeyStyle(t), e);
        }
        render(t = this.parsedAttributes, e = this) {
          this.drawKeyShape(t, e),
            this.getShape('key') &&
              (this.drawSourceArrow(t),
              this.drawTargetArrow(t),
              this.drawLabelShape(t, e),
              this.drawHaloShape(t, e),
              this.drawBadgeShape(t, e));
        }
        onframe() {
          this.drawKeyShape(this.parsedAttributes, this),
            this.drawSourceArrow(this.parsedAttributes),
            this.drawTargetArrow(this.parsedAttributes),
            this.drawHaloShape(this.parsedAttributes, this),
            this.drawLabelShape(this.parsedAttributes, this),
            this.drawBadgeShape(this.parsedAttributes, this);
        }
        animate(t, e) {
          const n = super.animate(t, e);
          return n
            ? new Proxy(n, {
                set: (t, e, n) => (
                  'currentTime' === e &&
                    Promise.resolve().then(() => this.onframe()),
                  Reflect.set(t, e, n)
                ),
              })
            : n;
        }
      }
      $n(
        [xe((t, e) => t.getLabelStyle(e))],
        Zn.prototype,
        'drawLabelShape',
        null,
      ),
        $n(
          [xe((t, e) => t.getHaloStyle(e))],
          Zn.prototype,
          'drawHaloShape',
          null,
        ),
        $n(
          [xe((t, e) => t.getBadgeStyle(e))],
          Zn.prototype,
          'drawBadgeShape',
          null,
        ),
        $n(
          [xe((t, e) => t.getArrowStyle(e, 'start'))],
          Zn.prototype,
          'drawSourceArrow',
          null,
        ),
        $n(
          [xe((t, e) => t.getArrowStyle(e, 'end'))],
          Zn.prototype,
          'drawTargetArrow',
          null,
        ),
        $n(
          [xe((t, e) => t.getKeyStyle(e))],
          Zn.prototype,
          'drawKeyShape',
          null,
        );
      class Hn extends Zn {
        static defaultStyleProps = { curvePosition: 0.5, curveOffset: 20 };
        constructor(t) {
          super(pe({ style: Hn.defaultStyleProps }, t));
        }
        getKeyPath(t) {
          const [e, n] = this.getEndpoints(t),
            { controlPoints: i, curvePosition: s, curveOffset: o } = t,
            r = this.getControlPoints(
              e,
              n,
              (function (t) {
                return (0, ne.Z)(t) ? [t, 1 - t] : t;
              })(s),
              (function (t) {
                return (0, ne.Z)(t) ? [t, -t] : t;
              })(o),
              i,
            );
          return An(e, n, r);
        }
        getControlPoints(t, e, n, i, s) {
          return 2 === s?.length
            ? s
            : [Tn(t, e, n[0], i[0]), Tn(t, e, n[1], i[1])];
        }
      }
      class Wn extends Hn {
        static defaultStyleProps = {
          curvePosition: [0.5, 0.5],
          curveOffset: [0, 0],
        };
        constructor(t) {
          super(pe({ style: Wn.defaultStyleProps }, t));
        }
        getControlPoints(t, e, n, i) {
          const s = e[0] - t[0];
          return [
            [t[0] + s * n[0] + i[0], t[1]],
            [e[0] - s * n[1] + i[1], e[1]],
          ];
        }
      }
      class Vn extends Hn {
        static defaultStyleProps = {
          curvePosition: [0.5, 0.5],
          curveOffset: [0, 0],
        };
        constructor(t) {
          super(pe({ style: Vn.defaultStyleProps }, t));
        }
        getControlPoints(t, e, n, i) {
          const s = e[1] - t[1];
          return [
            [t[0], t[1] + s * n[0] + i[0]],
            [e[0], e[1] - s * n[1] + i[1]],
          ];
        }
      }
      class Yn extends Zn {
        static defaultStyleProps = {};
        constructor(t) {
          super(pe({ style: Yn.defaultStyleProps }, t));
        }
        getKeyPath(t) {
          const [e, n] = this.getEndpoints(t);
          return [
            ['M', e[0], e[1]],
            ['L', n[0], n[1]],
          ];
        }
      }
      class Gn extends Zn {
        static defaultStyleProps = {
          radius: 0,
          controlPoints: [],
          router: !1,
          routerName: 'orth',
          routerPadding: 10,
        };
        constructor(t) {
          super(pe({ style: Gn.defaultStyleProps }, t));
        }
        getKeyPath(t) {
          const { radius: e } = t,
            { sourceNode: n, targetNode: i } = this,
            {
              sourcePoint: s,
              targetPoint: o,
              sourcePort: r,
              targetPort: a,
            } = this.getEndpointsAndPorts(t),
            c = this.getControlPoints(t, s, o),
            h = oi(r || n, c[0] || a || i),
            l = oi(a || i, c[c.length - 1] || r || n);
          return Dn([h, ...c, l], e);
        }
        getEndpointsAndPorts(t) {
          const { sourcePort: e, targetPort: n } = t,
            { sourceNode: i, targetNode: s } = this,
            [o, r] = ii(i, s, e, n);
          return {
            sourcePoint: o ? ni(o) : i.getCenter(),
            targetPoint: r ? ni(r) : s.getCenter(),
            sourcePort: o,
            targetPort: r,
          };
        }
        getControlPoints(t, e, n) {
          const { controlPoints: i, router: s, routerPadding: o } = t,
            { sourceNode: r, targetNode: a } = this;
          if (!s) return [...i];
          return (function (t, e, n, i, s, o) {
            const r = [t, ...s, e];
            let a = null;
            const c = [];
            for (let t = 0, e = r.length; t < e - 1; t++) {
              const s = t + 1,
                d = r[t],
                u = r[s],
                p =
                  Bt((h = d), (l = u)) ||
                  (function (t, e) {
                    return t[0] === e[0];
                  })(h, l);
              let g = null;
              0 === t
                ? s === e - 1
                  ? n.intersects(i)
                    ? (g = wn(d, u, n, i))
                    : p || (g = vn(d, u, n, i))
                  : dt(u, n)
                    ? (g = wn(d, u, n, ct(u, o), a))
                    : p || (g = En(d, u, n))
                : s === e - 1
                  ? dt(d, i)
                    ? (g = wn(d, u, ct(d, o), i, a))
                    : p || (g = xn(d, u, i, a))
                  : p || (g = bn(d, u, a)),
                g ? (c.push(...g.points), (a = g.direction)) : (a = mn(d, u)),
                s < e - 1 && c.push(u);
            }
            var h, l;
            return c;
          })(e, n, ct(r, o), ct(a, o), i, o);
        }
        getLoopPath(t) {
          const { sourcePort: e, targetPort: n, radius: i } = t,
            s = this.sourceNode,
            o = ct(s),
            r = Math.max(ot(o), rt(o)) / 4,
            {
              placement: a,
              clockwise: c,
              dist: h = r,
            } = ce(this.getGraphicStyle(t), 'loop');
          return Pn(s, i, a, c, h, e, n);
        }
      }
      class Un extends Zn {
        static defaultStyleProps = { curvePosition: 0.5, curveOffset: 30 };
        constructor(t) {
          super(pe({ style: Un.defaultStyleProps }, t));
        }
        getKeyPath(t) {
          const { curvePosition: e, curveOffset: n } = t,
            [i, s] = this.getEndpoints(t);
          return (function (t, e, n) {
            return [
              ['M', t[0], t[1]],
              ['Q', n[0], n[1], e[0], e[1]],
            ];
          })(i, s, t.controlPoint || Tn(i, s, e, n));
        }
      }
      function Kn(t) {
        return t instanceof Xe && 'node' === t.type;
      }
      function Xn(t) {
        return t instanceof Zn;
      }
      function qn(t) {
        return t instanceof ln;
      }
      const Jn = {
        top: [0.5, 0],
        right: [1, 0.5],
        bottom: [0.5, 1],
        left: [0, 0.5],
        default: [0.5, 0.5],
      };
      function Qn(t, e, n = Jn, i = !0) {
        const s = [0.5, 0.5],
          o = (0, u.Z)(e) ? ee(n, e.toLocaleLowerCase(), s) : e;
        if (!i && (0, u.Z)(e)) return o;
        const [r, a] = o || s;
        return [t.min[0] + ot(t) * r, t.min[1] + rt(t) * a];
      }
      function ti(t) {
        if (!t) return {};
        const e = t.getPorts();
        return (
          (t.attributes.ports || []).forEach((n, i) => {
            const { key: s, placement: o } = n;
            ei(n) && (e[s || i] ||= Pt(t.getShape('key').getBounds(), o));
          }),
          e
        );
      }
      function ei(t) {
        const { r: e } = t;
        return !e || 0 === Number(e);
      }
      function ni(t) {
        return nt(t) ? t : t.getPosition();
      }
      function ii(t, e, n, i) {
        return [si(t, e, n, i), si(e, t, i, n)];
      }
      function si(t, e, n, i) {
        const s = ti(t);
        if (n) return s[n];
        const o = Object.values(s);
        if (0 === o.length) return;
        const r = o.map((t) => ni(t)),
          a = (function (t, e) {
            const n = ti(t);
            if (e) return [ni(n[e])];
            const i = Object.values(n);
            return i.length > 0 ? i.map((t) => ni(t)) : [t.getCenter()];
          })(e, i),
          [c] = (function (t, e) {
            let n = 1 / 0,
              i = [t[0], e[0]];
            return (
              t.forEach((t) => {
                e.forEach((e) => {
                  const s = xt(t, e);
                  s < n && ((n = s), (i = [t, e]));
                });
              }),
              i
            );
          })(r, a);
        return o.find((t) => ni(t) === c);
      }
      function oi(t, e) {
        return qn(t) || Kn(t) ? ai(t, e) : ri(t, e);
      }
      function ri(t, e) {
        if (!t || !e) return [0, 0, 0];
        if (nt(t)) return t;
        if (t.attributes.linkToCenter) return t.getPosition();
        return Ft(
          nt(e) ? e : Kn(e) ? e.getCenter() : e.getPosition(),
          t.getBounds(),
        );
      }
      function ai(t, e) {
        if (!t || !e) return [0, 0, 0];
        const n = nt(e) ? e : Kn(e) ? e.getCenter() : e.getPosition();
        return t.getIntersectPoint(n) || t.getCenter();
      }
      function ci(t, e = 'bottom', n = 0, i = 0, s = !1) {
        const o = e.split('-'),
          [r, a] = Pt(t, e),
          c = o.includes('left')
            ? 'right'
            : o.includes('right')
              ? 'left'
              : 'center';
        let h = o.includes('top')
          ? 'bottom'
          : o.includes('bottom')
            ? 'top'
            : 'middle';
        return (
          s && (h = 'top' === h ? 'bottom' : 'bottom' === h ? 'top' : h),
          {
            transform: `translate(${r + n}, ${a + i})`,
            textBaseline: h,
            textAlign: c,
          }
        );
      }
      function hi(t, e) {
        'update' in t ? t.update(e) : t.attr(e);
      }
      function li(t) {
        return ee(t, '__to_be_destroyed__', !1);
      }
      class di extends Q {
        static defaultOptions = {
          enable: !0,
          animation: !0,
          trigger: w.DBLCLICK,
        };
        constructor(t, e) {
          super(t, Object.assign({}, di.defaultOptions, e)), this.bindEvents();
        }
        update(t) {
          this.unbindEvents(), super.update(t), this.bindEvents();
        }
        bindEvents() {
          const { graph: t } = this.context,
            { trigger: e } = this.options;
          t.on(`node:${e}`, this.onCollapseExpand),
            t.on(`combo:${e}`, this.onCollapseExpand);
        }
        unbindEvents() {
          const { graph: t } = this.context,
            { trigger: e } = this.options;
          t.off(`node:${e}`, this.onCollapseExpand),
            t.off(`combo:${e}`, this.onCollapseExpand);
        }
        onCollapseExpand = async (t) => {
          if (!this.validate(t)) return;
          const { target: e } = t;
          if (!(Kn((n = e)) || Xn(n) || qn(n))) return;
          var n;
          const i = e.id,
            { model: s, graph: o } = this.context,
            r = s.getElementDataById(i);
          if (!r) return !1;
          const { onCollapse: a, onExpand: c, animation: h } = this.options;
          te(r)
            ? (await o.expandElement(i, h), c?.(i))
            : (await o.collapseElement(i, h), a?.(i));
        };
        validate(t) {
          if (this.destroyed) return !1;
          const { enable: e } = this.options;
          return (0, tt.Z)(e) ? e(t) : !!e;
        }
        destroy() {
          this.unbindEvents(), super.destroy();
        }
      }
      var ui = {};
      const pi = 'g6-create-edge-assist-node-id';
      class gi extends Q {
        static defaultOptions = {
          animation: !0,
          enable: !0,
          style: {},
          trigger: 'drag',
          onCreate: (t) => t,
          onFinish: () => {},
        };
        source;
        constructor(t, e) {
          super(t, Object.assign({}, gi.defaultOptions, e)), this.bindEvents();
        }
        update(t) {
          super.update(t), this.bindEvents();
        }
        bindEvents() {
          const { graph: t } = this.context,
            { trigger: e } = this.options;
          this.unbindEvents(),
            'click' === e
              ? (t.on(A.CLICK, this.handleCreateEdge),
                t.on(v.CLICK, this.handleCreateEdge),
                t.on(x.CLICK, this.cancelEdge),
                t.on(C.CLICK, this.cancelEdge))
              : (t.on(A.DRAG_START, this.handleCreateEdge),
                t.on(v.DRAG_START, this.handleCreateEdge),
                t.on(w.POINTER_UP, this.drop)),
            t.on(w.POINTER_MOVE, this.updateAssistEdge);
        }
        drop = async (t) => {
          const { targetType: e } = t;
          ['combo', 'node'].includes(e) && this.source
            ? await this.handleCreateEdge(t)
            : await this.cancelEdge();
        };
        handleCreateEdge = async (t) => {
          if (!this.validate(t)) return;
          const { graph: e, canvas: n, batch: i, element: s } = this.context,
            { style: o } = this.options;
          if (this.source)
            return this.createEdge(t), void (await this.cancelEdge());
          i.startBatch(),
            n.setCursor('crosshair'),
            (this.source = this.getSelectedNodeIDs([t.target.id])[0]),
            e.addNodeData([
              {
                id: pi,
                style: {
                  visibility: 'hidden',
                  ports: [{ key: 'port-1', placement: [0.5, 0.5] }],
                },
              },
            ]),
            e.addEdgeData([
              {
                id: 'g6-create-edge-assist-edge-id',
                source: this.source,
                target: pi,
                style: { pointerEvents: 'none', ...o },
              },
            ]),
            await s.draw({ animation: !1 })?.finished;
        };
        updateAssistEdge = async (t) => {
          if (!this.source) return;
          const { model: e, element: n } = this.context;
          e.translateNodeTo(pi, [t.canvas.x, t.canvas.y]),
            await n.draw({ animation: !1, silence: !0 })?.finished;
        };
        createEdge = (t) => {
          const { graph: e } = this.context,
            { style: n, onFinish: i, onCreate: s } = this.options,
            o = t.target?.id;
          if (void 0 === o || void 0 === this.source) return;
          const r = this.getSelectedNodeIDs([t.target.id])?.[0];
          var a;
          const c = s({
            id: `${this.source}-${r}-${(ui[(a = a || 'g')] ? (ui[a] += 1) : (ui[a] = 1), a + ui[a])}`,
            source: this.source,
            target: r,
            style: n,
          });
          e.addEdgeData([c]), i(c);
        };
        cancelEdge = async () => {
          if (!this.source) return;
          const { graph: t, element: e, batch: n } = this.context;
          t.removeNodeData([pi]),
            (this.source = void 0),
            await e.draw({ animation: !1 })?.finished,
            n.endBatch();
        };
        getSelectedNodeIDs(t) {
          return Array.from(
            new Set(
              this.context.graph
                .getElementDataByState('node', this.options.state)
                .map((t) => t.id)
                .concat(t),
            ),
          );
        }
        validate(t) {
          if (this.destroyed) return !1;
          const { enable: e } = this.options;
          return (0, tt.Z)(e) ? e(t) : !!e;
        }
        unbindEvents() {
          const { graph: t } = this.context;
          t.off(A.CLICK, this.handleCreateEdge),
            t.off(v.CLICK, this.handleCreateEdge),
            t.off(x.CLICK, this.cancelEdge),
            t.off(C.CLICK, this.cancelEdge),
            t.off(A.DRAG_START, this.handleCreateEdge),
            t.off(v.DRAG_START, this.handleCreateEdge),
            t.off(w.POINTER_UP, this.drop),
            t.off(w.POINTER_MOVE, this.updateAssistEdge);
        }
        destroy() {
          this.unbindEvents(), super.destroy();
        }
      }
      var fi = function (t, e, n) {
        var i;
        return function () {
          var s = this,
            o = arguments,
            r = n && !i;
          clearTimeout(i),
            (i = setTimeout(function () {
              (i = null), n || t.apply(s, o);
            }, e)),
            r && t.apply(s, o);
        };
      };
      class mi extends Q {
        static defaultOptions = { enable: !0, sensitivity: 10 };
        shortcut;
        defaultCursor;
        constructor(t, e) {
          super(t, Object.assign({}, mi.defaultOptions, e)),
            (this.shortcut = new Wt(t.graph)),
            this.bindEvents(),
            (this.defaultCursor =
              this.context.canvas.getConfig().cursor || 'default');
        }
        update(t) {
          this.unbindEvents(), super.update(t), this.bindEvents();
        }
        bindEvents() {
          const { trigger: t } = this.options,
            { graph: e } = this.context;
          if ((0, f.Z)(t)) {
            const { up: e = [], down: n = [], left: i = [], right: s = [] } = t;
            this.shortcut.bind(e, (t) => this.onTranslate([0, 1], t)),
              this.shortcut.bind(n, (t) => this.onTranslate([0, -1], t)),
              this.shortcut.bind(i, (t) => this.onTranslate([1, 0], t)),
              this.shortcut.bind(s, (t) => this.onTranslate([-1, 0], t));
          } else
            e.on(x.DRAG_START, this.onDragStart),
              e.on(x.DRAG, this.onDrag),
              e.on(x.DRAG_END, this.onDragEnd);
        }
        isDragging = !1;
        onDragStart = (t) => {
          this.validate(t) &&
            'canvas' === t.targetType &&
            ((this.isDragging = !0), this.context.canvas.setCursor('grabbing'));
        };
        onDrag = (t) => {
          if (!this.isDragging) return;
          const { x: e, y: n } = t.movement;
          e | n && this.translate([e, n], !1);
        };
        onDragEnd = () => {
          (this.isDragging = !1),
            this.context.canvas.setCursor(this.defaultCursor),
            this.options.onFinish?.();
        };
        invokeOnFinish = fi(() => {
          this.options.onFinish?.();
        }, 300);
        async onTranslate(t, e) {
          if (!this.validate(e)) return;
          const { sensitivity: n } = this.options,
            i = -1 * n;
          await this.translate(yt(t, i), this.options.animation),
            this.invokeOnFinish();
        }
        async translate(t, e) {
          await this.context.graph.translateBy(t, e);
        }
        validate(t) {
          if (this.destroyed) return !1;
          const { enable: e } = this.options;
          return (0, tt.Z)(e) ? e(t) : !!e;
        }
        unbindEvents() {
          this.shortcut.unbindAll();
          const { graph: t } = this.context;
          t.off(x.DRAG_START, this.onDragStart),
            t.off(x.DRAG, this.onDrag),
            t.off(x.DRAG_END, this.onDragEnd);
        }
        destroy() {
          this.shortcut.destroy(),
            this.context.canvas.setCursor(this.defaultCursor),
            super.destroy();
        }
      }
      class yi extends Q {
        static defaultOptions = {
          animation: !0,
          enable: (t) => ['node', 'combo'].includes(t.targetType),
          dropEffect: 'move',
          state: 'selected',
          hideEdge: 'none',
          shadow: !1,
          shadowZIndex: 100,
          shadowFill: '#F3F9FF',
          shadowFillOpacity: 0.5,
          shadowStroke: '#1890FF',
          shadowStrokeOpacity: 0.9,
          shadowLineDash: [5, 5],
          cursor: { default: 'default', grab: 'grab', grabbing: 'grabbing' },
        };
        enable = !1;
        enableElements = ['node', 'combo'];
        target = [];
        shadow;
        shadowOrigin = [0, 0];
        hiddenEdges = [];
        isDragging = !1;
        get animation() {
          return !!this.options.shadow && this.options.animation;
        }
        constructor(t, e) {
          super(t, Object.assign({}, yi.defaultOptions, e)),
            (this.onDragStart = this.onDragStart.bind(this)),
            (this.onDrag = this.onDrag.bind(this)),
            (this.onDragEnd = this.onDragEnd.bind(this)),
            (this.onDrop = this.onDrop.bind(this)),
            this.bindEvents();
        }
        update(t) {
          this.unbindEvents(), super.update(t), this.bindEvents();
        }
        bindEvents() {
          const { graph: t } = this.context;
          this.enableElements.forEach((e) => {
            t.on(`${e}:${w.DRAG_START}`, this.onDragStart),
              t.on(`${e}:${w.DRAG}`, this.onDrag),
              t.on(`${e}:${w.DRAG_END}`, this.onDragEnd),
              t.on(`${e}:${w.POINTER_ENTER}`, this.setCursor),
              t.on(`${e}:${w.POINTER_LEAVE}`, this.setCursor);
          }),
            ['link'].includes(this.options.dropEffect) &&
              (t.on(v.DROP, this.onDrop), t.on(x.DROP, this.onDrop));
        }
        getSelectedNodeIDs(t) {
          return Array.from(
            new Set(
              this.context.graph
                .getElementDataByState('node', this.options.state)
                .map((t) => t.id)
                .concat(t),
            ),
          );
        }
        getDelta(t) {
          const e = this.context.graph.getZoom();
          return bt([t.dx, t.dy], e);
        }
        onDragStart(t) {
          if (((this.enable = this.validate(t)), !this.enable)) return;
          const { batch: e, canvas: n } = this.context;
          n.setCursor(this.options.cursor?.grabbing || 'grabbing'),
            (this.isDragging = !0),
            e.startBatch(),
            (this.target = this.getSelectedNodeIDs([t.target.id])),
            this.hideEdge(),
            this.context.graph.frontElement(this.target),
            this.options.shadow && this.createShadow(this.target);
        }
        onDrag(t) {
          if (!this.enable) return;
          const e = this.getDelta(t);
          this.options.shadow
            ? this.moveShadow(e)
            : this.moveElement(this.target, e);
        }
        onDragEnd() {
          if (((this.enable = !1), this.options.shadow)) {
            if (!this.shadow) return;
            this.shadow.style.visibility = 'hidden';
            const { x: t = 0, y: e = 0 } = this.shadow.attributes,
              [n, i] = mt([+t, +e], this.shadowOrigin);
            this.moveElement(this.target, [n, i]);
          }
          this.showEdges(), this.options.onFinish?.(this.target);
          const { batch: t, canvas: e } = this.context;
          t.endBatch(),
            e.setCursor(this.options.cursor?.grab || 'grab'),
            (this.isDragging = !1),
            (this.target = []);
        }
        onDrop = async (t) => {
          if ('link' !== this.options.dropEffect) return;
          const { model: e, element: n } = this.context,
            i = t.target.id;
          this.target.forEach((t) => {
            const n = e.getParentData(t, D);
            n && F(n) === i && e.refreshComboData(i), e.setParent(t, i, D);
          }),
            await n?.draw({ animation: !0 })?.finished;
        };
        setCursor = (t) => {
          if (this.isDragging) return;
          const { type: e } = t,
            { canvas: n } = this.context,
            { cursor: i } = this.options;
          e === w.POINTER_ENTER
            ? n.setCursor(i?.grab || 'grab')
            : n.setCursor(i?.default || 'default');
        };
        validate(t) {
          if (this.destroyed) return !1;
          const { enable: e } = this.options;
          return (0, tt.Z)(e) ? e(t) : !!e;
        }
        async moveElement(t, e) {
          const { graph: n, model: i } = this.context,
            { dropEffect: s } = this.options;
          'move' === s && t.forEach((t) => i.refreshComboData(t)),
            n.translateElementBy(Object.fromEntries(t.map((t) => [t, e])), !1);
        }
        moveShadow(t) {
          if (!this.shadow) return;
          const { x: e = 0, y: n = 0 } = this.shadow.attributes,
            [i, s] = t;
          this.shadow.attr({ x: +e + i, y: +n + s });
        }
        createShadow(t) {
          const e = ce(this.options, 'shadow'),
            n = lt(
              t.map((t) => this.context.element.getElement(t).getBounds()),
            ),
            [i, o] = n.min;
          this.shadowOrigin = [i, o];
          const [r, a] = at(n),
            c = { width: r, height: a, x: i, y: o };
          this.shadow
            ? this.shadow.attr({ ...e, ...c, visibility: 'visible' })
            : ((this.shadow = new s.UL({
                style: {
                  $layer: 'transient',
                  ...e,
                  ...c,
                  pointerEvents: 'none',
                },
              })),
              this.context.canvas.appendChild(this.shadow));
        }
        showEdges() {
          this.options.shadow ||
            0 === this.hiddenEdges.length ||
            (this.context.graph.showElement(this.hiddenEdges),
            (this.hiddenEdges = []));
        }
        hideEdge() {
          const { hideEdge: t, shadow: e } = this.options;
          if ('none' === t || e) return;
          const { graph: n } = this.context;
          (this.hiddenEdges =
            'all' === t
              ? n.getEdgeData().map(F)
              : Array.from(
                  new Set(
                    this.target
                      .map((e) => n.getRelatedEdgesData(e, t).map(F))
                      .flat(),
                  ),
                )),
            n.hideElement(this.hiddenEdges);
        }
        unbindEvents() {
          const { graph: t } = this.context;
          this.enableElements.forEach((e) => {
            t.off(`${e}:${w.DRAG_START}`, this.onDragStart),
              t.off(`${e}:${w.DRAG}`, this.onDrag),
              t.off(`${e}:${w.DRAG_END}`, this.onDragEnd),
              t.off(`${e}:${w.POINTER_ENTER}`, this.setCursor),
              t.off(`${e}:${w.POINTER_LEAVE}`, this.setCursor);
          }),
            t.off(`combo:${w.DROP}`, this.onDrop),
            t.off(`canvas:${w.DROP}`, this.onDrop);
        }
        destroy() {
          this.unbindEvents(), this.shadow?.destroy(), super.destroy();
        }
      }
      var bi = n(72137);
      class Ei {
        options;
        context;
        constructor(t, e) {
          (this.context = t), (this.options = e || {});
        }
        stop;
        tick;
      }
      function xi(t) {
        const { nodes: e, edges: n } = t,
          i = { nodes: [], edges: [], combos: [] };
        return (
          e.forEach((t) => {
            const e = t.data._isCombo ? i.combos : i.nodes,
              { x: n, y: s, z: o = 0 } = t.data;
            e?.push({ id: t.id, style: { x: n, y: s, z: o } });
          }),
          n.forEach((t) => {
            const {
              id: e,
              source: n,
              target: s,
              data: {
                points: o = [],
                controlPoints: r = o.slice(1, o.length - 1),
              },
            } = t;
            i.edges.push({
              id: e,
              source: n,
              target: s,
              style: { ...(r?.length ? { controlPoints: r.map(kt) } : {}) },
            });
          }),
          i
        );
      }
      function vi(t, e, ...n) {
        if (e in t) return t[e](...n);
        if ('instance' in t) {
          const i = t.instance;
          if (e in i) return i[e](...n);
        }
        return null;
      }
      function wi(t, e) {
        if (e in t) return t[e];
        if ('instance' in t) {
          const n = t.instance;
          if (e in n) return n[e];
        }
        return null;
      }
      class Si extends Q {
        static defaultOptions = {
          enable: (t) => t.data.scale < 1,
          state: 'selected',
          edge: [
            {
              shape: (t) => t.find((t) => 'key' === t.className),
              fields: ['lineWidth'],
            },
            {
              shape: (t) =>
                t.find(
                  (t) =>
                    'label' === t.parentElement?.className &&
                    'text' === t.className,
                ),
              fields: ['fontSize'],
            },
          ],
        };
        elementCache = new Map();
        constructor(t, e) {
          super(t, Object.assign({}, Si.defaultOptions, e)), this.bindEvents();
        }
        isZoomEvent = (t) => 'scale' in t.data;
        fixElementSize = async (t) => {
          if (!this.isZoomEvent(t) || !this.validate(t)) return;
          const { graph: e, element: n } = this.context,
            { node: i, edge: s, state: o } = this.options,
            r = [
              ...e.getElementDataByState('node', o),
              ...e.getElementDataByState('edge', o),
            ];
          if (!r.length) return;
          const a = t.data.scale || e.getZoom();
          r.forEach((t) => {
            const o = F(t),
              r = n?.getElement(o),
              c = e.getElementType(o),
              h = 'edge' === c ? s : i;
            if (!h)
              return (
                this.elementCache.set(o, r),
                'edge' === c && (r.style.transformOrigin = 'center'),
                void r.setLocalScale(1 / a)
              );
            const l = Le(r);
            (Array.isArray(h) ? h : [h]).forEach((t) => {
              const { shape: e, fields: n } = t,
                i = e(l);
              n.forEach((t) => {
                be(i, t) || me(i, t);
                const e = ye(i, t);
                (0, ne.Z)(e) && (i.style[t] = e / a);
              });
            });
          });
        };
        resetTransform = async () => {
          this.elementCache &&
            (this.elementCache.forEach((t) => t.setLocalScale(1)),
            this.elementCache.clear());
        };
        bindEvents() {
          const { graph: t } = this.context;
          t.on(O.AFTER_TRANSFORM, this.fixElementSize),
            t.on(O.BEFORE_DRAW, this.resetTransform);
        }
        unbindEvents() {
          const { graph: t } = this.context;
          t.off(O.AFTER_TRANSFORM, this.fixElementSize),
            t.off(O.BEFORE_DRAW, this.resetTransform);
        }
        validate(t) {
          if (this.destroyed) return !1;
          const { enable: e } = this.options;
          return (0, tt.Z)(e) ? e(t) : !!e;
        }
        destroy() {
          this.unbindEvents(), super.destroy();
        }
      }
      class Ci extends Q {
        static defaultOptions = {
          animation: { easing: 'ease-in', duration: 500 },
          enable: !0,
        };
        constructor(t, e) {
          super(t, Object.assign({}, Ci.defaultOptions, e)), this.bindEvents();
        }
        bindEvents() {
          const { graph: t } = this.context;
          this.unbindEvents(),
            Ut.forEach((e) => {
              t.on(`${e}:${w.CLICK}`, this.focus);
            });
        }
        focus = async (t) => {
          if (!this.validate(t)) return;
          const { graph: e } = this.context;
          await e.focusElement(t.target.id, this.options.animation);
        };
        validate(t) {
          if (this.destroyed) return !1;
          const { enable: e } = this.options;
          return (0, tt.Z)(e) ? e(t) : !!e;
        }
        unbindEvents() {
          const { graph: t } = this.context;
          Ut.forEach((e) => {
            t.off(`${e}:${w.CLICK}`, this.focus);
          });
        }
        destroy() {
          this.unbindEvents(), super.destroy();
        }
      }
      class Oi extends Q {
        static defaultOptions = {
          animation: !1,
          enable: !0,
          degree: 0,
          state: 'active',
          inactiveState: void 0,
        };
        isFrozen = !1;
        constructor(t, e) {
          super(t, Object.assign({}, Oi.defaultOptions, e)), this.bindEvents();
        }
        toggleFrozen = (t) => {
          this.isFrozen = 'dragstart' === t.type;
        };
        bindEvents() {
          const { graph: t } = this.context;
          this.unbindEvents(),
            Ut.forEach((e) => {
              t.on(`${e}:${w.POINTER_OVER}`, this.hoverElement),
                t.on(`${e}:${w.POINTER_OUT}`, this.hoverElement);
            });
          const e = this.context.canvas.document;
          e.addEventListener(`${w.DRAG_START}`, this.toggleFrozen),
            e.addEventListener(`${w.DRAG_END}`, this.toggleFrozen);
        }
        hoverElement = (t) => {
          if (!this.validate(t)) return;
          const e = t.type === w.POINTER_OVER;
          this.updateElementsState(t, e);
          const { onHover: n, onHoverEnd: i } = this.options;
          e ? n?.(t) : i?.(t);
        };
        updateElementsState = (t, e) => {
          if (!this.options.state && !this.options.inactiveState) return;
          const { graph: n } = this.context,
            {
              state: i,
              degree: s,
              animation: o,
              inactiveState: r,
            } = this.options,
            { targetType: a, target: c } = t,
            h = s ? Xt(n, a, c.id, s) : [c.id],
            l = {};
          if ((i && Object.assign(l, this.getElementsState(h, i, e)), r)) {
            const t = j(n.getData(), !0).filter((t) => !h.includes(t));
            Object.assign(l, this.getElementsState(t, r, e));
          }
          n.setElementState(l, o);
        };
        getElementsState = (t, e, n) => {
          const { graph: i } = this.context,
            s = {};
          return (
            t.forEach((t) => {
              const o = i.getElementState(t),
                r = n ? [...o, e] : o.filter((t) => t !== e);
              s[t] = r;
            }),
            s
          );
        };
        validate(t) {
          if (this.destroyed || this.isFrozen) return !1;
          const { enable: e } = this.options;
          return (0, tt.Z)(e) ? e(t) : !!e;
        }
        unbindEvents() {
          const { graph: t } = this.context;
          Ut.forEach((e) => {
            t.off(`${e}:${w.POINTER_OVER}`, this.hoverElement),
              t.off(`${e}:${w.POINTER_OUT}`, this.hoverElement);
          });
          const e = this.context.canvas.document;
          e.removeEventListener(`${w.DRAG_START}`, this.toggleFrozen),
            e.removeEventListener(`${w.DRAG_END}`, this.toggleFrozen);
        }
        destroy() {
          this.unbindEvents(), super.destroy();
        }
      }
      class Ti extends Q {
        static defaultOptions = {
          enable: !0,
          debounce: 200,
          shapes: { node: ['key'] },
        };
        isVisible = !0;
        constructor(t, e) {
          super(t, Object.assign({}, Ti.defaultOptions, e)), this.bindEvents();
        }
        filterShapes = (t, e) =>
          t.filter((t) => t.className && !e?.includes(t.className));
        setElementsVisibility = (t, e, n) => {
          t.forEach((t) => {
            _e(t, e, n && ((t) => this.filterShapes(t, n)));
          });
        };
        hideShapes = (t) => {
          if (!this.validate(t) || !this.isVisible) return;
          const { element: e } = this.context,
            { shapes: n = {} } = this.options;
          this.setElementsVisibility(e.getNodes(), 'hidden', n.node),
            this.setElementsVisibility(e.getEdges(), 'hidden', n.edge),
            this.setElementsVisibility(e.getCombos(), 'hidden', n.combo),
            (this.isVisible = !1);
        };
        showShapes = fi((t) => {
          if (!this.validate(t) || this.isVisible) return;
          const { element: e } = this.context;
          this.setElementsVisibility(e.getNodes(), 'visible'),
            this.setElementsVisibility(e.getEdges(), 'visible'),
            this.setElementsVisibility(e.getCombos(), 'visible'),
            (this.isVisible = !0);
        }, this.options.debounce);
        bindEvents() {
          const { graph: t } = this.context;
          t.on(O.BEFORE_TRANSFORM, this.hideShapes),
            t.on(O.AFTER_TRANSFORM, this.showShapes);
        }
        unbindEvents() {
          const { graph: t } = this.context;
          t.off(O.BEFORE_TRANSFORM, this.hideShapes),
            t.off(O.AFTER_TRANSFORM, this.showShapes);
        }
        validate(t) {
          if (this.destroyed) return !1;
          const { enable: e } = this.options;
          return (0, tt.Z)(e) ? e(t) : !!e;
        }
        destroy() {
          this.unbindEvents(), super.destroy();
        }
      }
      class Ai extends Q {
        static defaultOptions = { enable: !0, sensitivity: 1 };
        shortcut;
        constructor(t, e) {
          super(t, Object.assign({}, Ai.defaultOptions, e)),
            (this.shortcut = new Wt(t.graph)),
            this.bindEvents();
        }
        update(t) {
          super.update(t), this.bindEvents();
        }
        bindEvents() {
          const { trigger: t } = this.options;
          if ((this.shortcut.unbindAll(), (0, f.Z)(t))) {
            this.graphDom?.removeEventListener(w.WHEEL, this.onWheel);
            const { up: e = [], down: n = [], left: i = [], right: s = [] } = t;
            this.shortcut.bind(e, (t) => this.scroll([0, -10], t)),
              this.shortcut.bind(n, (t) => this.scroll([0, 10], t)),
              this.shortcut.bind(i, (t) => this.scroll([-10, 0], t)),
              this.shortcut.bind(s, (t) => this.scroll([10, 0], t));
          } else
            this.graphDom?.addEventListener(w.WHEEL, this.onWheel, {
              passive: !1,
            });
        }
        get graphDom() {
          return this.context.graph
            .getCanvas()
            .getContextService()
            .getDomElement();
        }
        onWheel = async (t) => {
          t.preventDefault();
          const e = t.deltaX,
            n = t.deltaY;
          await this.scroll([-e, -n], t);
        };
        formatDisplacement([t, e]) {
          const { direction: n, sensitivity: i } = this.options;
          return (
            (t *= i),
            (e *= i),
            'x' === n ? (e = 0) : 'y' === n && (t = 0),
            [t, e]
          );
        }
        async scroll(t, e) {
          if (!this.validate(e)) return;
          const { onFinish: n } = this.options,
            i = this.context.graph,
            s = this.formatDisplacement(t);
          await i.translateBy(s, !1), n?.();
        }
        validate(t) {
          if (this.destroyed) return !1;
          const { enable: e } = this.options;
          return (0, tt.Z)(e) ? e(t) : !!e;
        }
        destroy() {
          this.shortcut.destroy(),
            this.graphDom?.removeEventListener(w.WHEEL, this.onWheel),
            super.destroy();
        }
      }
      var Di = n(81957);
      class Mi extends Q {
        static defaultOptions = {
          animation: { duration: 200 },
          enable: !0,
          sensitivity: 1,
          trigger: [],
        };
        shortcut;
        constructor(t, e) {
          super(t, Object.assign({}, Mi.defaultOptions, e)),
            (this.shortcut = new Wt(t.graph)),
            this.bindEvents();
        }
        update(t) {
          super.update(t), this.bindEvents();
        }
        bindEvents() {
          const { trigger: t } = this.options;
          if (
            (this.shortcut.unbindAll(),
            (0, we.Z)(t) &&
              (this.preventDefault(w.WHEEL),
              this.shortcut.bind([...t, w.WHEEL], (t) => {
                const { deltaX: e, deltaY: n } = t;
                this.zoom(-(n ?? e), t, !1);
              })),
            (0, f.Z)(t))
          ) {
            const { zoomIn: e = [], zoomOut: n = [], reset: i = [] } = t;
            this.shortcut.bind(e, (t) =>
              this.zoom(10, t, this.options.animation),
            ),
              this.shortcut.bind(n, (t) =>
                this.zoom(-10, t, this.options.animation),
              ),
              this.shortcut.bind(i, this.onReset);
          }
        }
        zoom = async (t, e, n) => {
          if (!this.validate(e)) return;
          const { graph: i } = this.context;
          let s;
          'viewport' in e && (s = kt(e.viewport));
          const { sensitivity: o, onFinish: r } = this.options,
            a = 1 + ((0, Di.Z)(t, -50, 50) * o) / 100,
            c = i.getZoom();
          await i.zoomTo(c * a, n, s), r?.();
        };
        onReset = async () => {
          await this.context.graph.zoomTo(1, this.options.animation);
        };
        validate(t) {
          if (this.destroyed) return !1;
          const { enable: e } = this.options;
          return (0, tt.Z)(e) ? e(t) : !!e;
        }
        preventDefault(t) {
          const e = this.context.canvas.getContainer();
          e && e.addEventListener(t, (t) => t.preventDefault());
        }
        destroy() {
          this.shortcut.destroy(), super.destroy();
        }
      }
      var Ri = n(81746),
        Pi = n(45978),
        ki = n(63795),
        Ni = n(39233),
        Ii = n(5192),
        Li = n(55982),
        Bi = n(51712),
        _i = n(67753),
        Fi = n(12368),
        zi = n(89469),
        ji = n(41733),
        $i = n(64912),
        Zi = n(29257),
        Hi = n(26629);
      var Wi = n(15255),
        Vi = n(83845),
        Yi = function (t, e, n) {
          if (!(0, we.Z)(t) && !(0, Vi.Z)(t)) return t;
          var i = n;
          return (
            (0, Wi.Z)(t, function (t, n) {
              i = e(i, t, n);
            }),
            i
          );
        },
        Gi = function (t, e) {
          return Yi(
            t,
            function (t, n, i) {
              return e.includes(i) || (t[i] = n), t;
            },
            {},
          );
        };
      const Ui = (t) => (t ? parseInt(t) : 0);
      function Ki(t) {
        let e = 640,
          n = 480;
        const [i, s] = (function (t) {
          const e = getComputedStyle(t),
            n = t.clientWidth || Ui(e.width),
            i = t.clientHeight || Ui(e.height);
          return [
            n - (Ui(e.paddingLeft) + Ui(e.paddingRight)),
            i - (Ui(e.paddingTop) + Ui(e.paddingBottom)),
          ];
        })(t);
        (e = i || e), (n = s || n);
        return [
          Math.max((0, ne.Z)(e) ? e : 1, 1),
          Math.max((0, ne.Z)(n) ? n : 1, 1),
        ];
      }
      function Xi(t, e = !0) {
        const n = document.createElement('div');
        return (
          n.setAttribute('class', `g6-${t}`),
          (n.style.position = 'absolute'),
          (n.style.display = 'block'),
          e &&
            ((n.style.inset = '0px'),
            (n.style.height = '100%'),
            (n.style.width = '100%'),
            (n.style.overflow = 'hidden'),
            (n.style.pointerEvents = 'none')),
          n
        );
      }
      function qi(t, e = 'div', n = {}, i = '', s = document.body) {
        const o = document.getElementById(t);
        o && o.remove();
        const r = document.createElement(e);
        return (
          (r.innerHTML = i),
          (r.id = t),
          Object.assign(r.style, n),
          s.appendChild(r),
          r
        );
      }
      class Ji extends J {}
      class Qi extends Ji {
        static defaultOptions = {
          transition: 'background 0.5s',
          backgroundSize: 'cover',
        };
        $element = Xi('background');
        constructor(t, e) {
          super(t, Object.assign({}, Qi.defaultOptions, e));
          this.context.canvas.getContainer().prepend(this.$element),
            this.update(e);
        }
        async update(t) {
          super.update(t),
            Object.assign(
              this.$element.style,
              Gi(this.options, ['key', 'type']),
            );
        }
        destroy() {
          super.destroy(), this.$element.remove();
        }
      }
      function ts(t, e, n, i, s, o) {
        const r = n - t,
          a = i - e;
        let c = s - t,
          h = o - e,
          l = c * r + h * a,
          d = 0;
        l <= 0
          ? (d = 0)
          : ((c = r - c),
            (h = a - h),
            (l = c * r + h * a),
            (d = l <= 0 ? 0 : (l * l) / (r * r + a * a)));
        const u = c * c + h * h - d;
        return u < 0 ? 0 : u;
      }
      function es(t, e, n, i) {
        return (t - n) * (t - n) + (e - i) * (e - i);
      }
      function ns(t, e, n, i, s) {
        return es(t, e, n, i) < s * s;
      }
      function is(t) {
        const e = Math.min(t.x1, t.x2),
          n = Math.max(t.x1, t.x2),
          i = Math.min(t.y1, t.y2),
          s = Math.max(t.y1, t.y2);
        return { x: e, y: i, x2: n, y2: s, width: n - e, height: s - i };
      }
      class ss {
        constructor(t, e, n, i) {
          (this.x1 = t), (this.y1 = e), (this.x2 = n), (this.y2 = i);
        }
        equals(t) {
          return (
            this.x1 === t.x1 &&
            this.y1 === t.y1 &&
            this.x2 === t.x2 &&
            this.y2 === t.y2
          );
        }
        draw(t) {
          t.moveTo(this.x1, this.y1), t.lineTo(this.x2, this.y2);
        }
        toString() {
          return `Line(from=(${this.x1},${this.y1}),to=(${this.x2},${this.y2}))`;
        }
        static from(t) {
          return new ss(t.x1, t.y1, t.x2, t.y2);
        }
        cuts(t, e) {
          if (this.y1 === this.y2) return !1;
          if ((e < this.y1 && e <= this.y2) || (e > this.y1 && e >= this.y2))
            return !1;
          if (t > this.x1 && t >= this.x2) return !1;
          if (t < this.x1 && t <= this.x2) return !0;
          return (
            t <=
            this.x1 +
              ((e - this.y1) * (this.x2 - this.x1)) / (this.y2 - this.y1)
          );
        }
        distSquare(t, e) {
          return ts(this.x1, this.y1, this.x2, this.y2, t, e);
        }
        ptClose(t, e, n) {
          if (this.x1 < this.x2) {
            if (t < this.x1 - n || t > this.x2 + n) return !1;
          } else if (t < this.x2 - n || t > this.x1 + n) return !1;
          if (this.y1 < this.y2) {
            if (e < this.y1 - n || e > this.y2 + n) return !1;
          } else if (e < this.y2 - n || e > this.y1 + n) return !1;
          return !0;
        }
      }
      var os, rs;
      !(function (t) {
        (t[(t.POINT = 1)] = 'POINT'),
          (t[(t.PARALLEL = 2)] = 'PARALLEL'),
          (t[(t.COINCIDENT = 3)] = 'COINCIDENT'),
          (t[(t.NONE = 4)] = 'NONE');
      })(os || (os = {}));
      class as {
        constructor(t, e = 0, n = 0) {
          (this.state = t), (this.x = e), (this.y = n);
        }
      }
      function cs(t, e) {
        const n = (e.x2 - e.x1) * (t.y1 - e.y1) - (e.y2 - e.y1) * (t.x1 - e.x1),
          i = (t.x2 - t.x1) * (t.y1 - e.y1) - (t.y2 - t.y1) * (t.x1 - e.x1),
          s = (e.y2 - e.y1) * (t.x2 - t.x1) - (e.x2 - e.x1) * (t.y2 - t.y1);
        if (s) {
          const e = n / s,
            o = i / s;
          return 0 <= e && e <= 1 && 0 <= o && o <= 1
            ? new as(
                os.POINT,
                t.x1 + e * (t.x2 - t.x1),
                t.y1 + e * (t.y2 - t.y1),
              )
            : new as(os.NONE);
        }
        return new as(0 === n || 0 === i ? os.COINCIDENT : os.PARALLEL);
      }
      function hs(t, e) {
        const n = (e.x2 - e.x1) * (t.y1 - e.y1) - (e.y2 - e.y1) * (t.x1 - e.x1),
          i = (t.x2 - t.x1) * (t.y1 - e.y1) - (t.y2 - t.y1) * (t.x1 - e.x1),
          s = (e.y2 - e.y1) * (t.x2 - t.x1) - (e.x2 - e.x1) * (t.y2 - t.y1);
        if (s) {
          const t = n / s,
            e = i / s;
          if (0 <= t && t <= 1 && 0 <= e && e <= 1) return t;
        }
        return Number.POSITIVE_INFINITY;
      }
      function ls(t, e, n) {
        const i = new Set();
        return (
          t.width <= 0
            ? (i.add(rs.LEFT), i.add(rs.RIGHT))
            : e < t.x
              ? i.add(rs.LEFT)
              : e > t.x + t.width && i.add(rs.RIGHT),
          t.height <= 0
            ? (i.add(rs.TOP), i.add(rs.BOTTOM))
            : n < t.y
              ? i.add(rs.TOP)
              : n > t.y + t.height && i.add(rs.BOTTOM),
          i
        );
      }
      function ds(t, e) {
        let n = e.x1,
          i = e.y1;
        const s = e.x2,
          o = e.y2,
          r = Array.from(ls(t, s, o));
        if (0 === r.length) return !0;
        let a = ls(t, n, i);
        for (; 0 !== a.size; ) {
          for (const t of r) if (a.has(t)) return !1;
          if (a.has(rs.RIGHT) || a.has(rs.LEFT)) {
            let e = t.x;
            a.has(rs.RIGHT) && (e += t.width),
              (i += ((e - n) * (o - i)) / (s - n)),
              (n = e);
          } else {
            let e = t.y;
            a.has(rs.BOTTOM) && (e += t.height),
              (n += ((e - i) * (s - n)) / (o - i)),
              (i = e);
          }
          a = ls(t, n, i);
        }
        return !0;
      }
      function us(t, e) {
        let n = Number.POSITIVE_INFINITY,
          i = 0;
        function s(t, s, o, r) {
          let a = hs(e, new ss(t, s, o, r));
          (a = Math.abs(a - 0.5)), a >= 0 && a <= 1 && (i++, a < n && (n = a));
        }
        return (
          s(t.x, t.y, t.x2, t.y),
          s(t.x, t.y, t.x, t.y2),
          i > 1
            ? n
            : (s(t.x, t.y2, t.x2, t.y2),
              i > 1 ? n : (s(t.x2, t.y, t.x2, t.y2), 0 === i ? -1 : n))
        );
      }
      function ps(t, e) {
        let n = 0;
        const i = cs(t, new ss(e.x, e.y, e.x2, e.y));
        n += i.state === os.POINT ? 1 : 0;
        const s = cs(t, new ss(e.x, e.y, e.x, e.y2));
        n += s.state === os.POINT ? 1 : 0;
        const o = cs(t, new ss(e.x, e.y2, e.x2, e.y2));
        n += o.state === os.POINT ? 1 : 0;
        const r = cs(t, new ss(e.x2, e.y, e.x2, e.y2));
        return (
          (n += r.state === os.POINT ? 1 : 0),
          { top: i, left: s, bottom: o, right: r, count: n }
        );
      }
      !(function (t) {
        (t[(t.LEFT = 0)] = 'LEFT'),
          (t[(t.TOP = 1)] = 'TOP'),
          (t[(t.RIGHT = 2)] = 'RIGHT'),
          (t[(t.BOTTOM = 3)] = 'BOTTOM');
      })(rs || (rs = {}));
      class gs {
        constructor(t, e, n, i) {
          (this.x = t), (this.y = e), (this.width = n), (this.height = i);
        }
        get x2() {
          return this.x + this.width;
        }
        get y2() {
          return this.y + this.height;
        }
        get cx() {
          return this.x + this.width / 2;
        }
        get cy() {
          return this.y + this.height / 2;
        }
        get radius() {
          return Math.max(this.width, this.height) / 2;
        }
        static from(t) {
          return new gs(t.x, t.y, t.width, t.height);
        }
        equals(t) {
          return (
            this.x === t.x &&
            this.y === t.y &&
            this.width === t.width &&
            this.height === t.height
          );
        }
        clone() {
          return new gs(this.x, this.y, this.width, this.height);
        }
        add(t) {
          const e = Math.min(this.x, t.x),
            n = Math.min(this.y, t.y),
            i = Math.max(this.x2, t.x + t.width),
            s = Math.max(this.y2, t.y + t.height);
          (this.x = e),
            (this.y = n),
            (this.width = i - e),
            (this.height = s - n);
        }
        addPoint(t) {
          const e = Math.min(this.x, t.x),
            n = Math.min(this.y, t.y),
            i = Math.max(this.x2, t.x),
            s = Math.max(this.y2, t.y);
          (this.x = e),
            (this.y = n),
            (this.width = i - e),
            (this.height = s - n);
        }
        toString() {
          return `Rectangle[x=${this.x}, y=${this.y}, w=${this.width}, h=${this.height}]`;
        }
        draw(t) {
          t.rect(this.x, this.y, this.width, this.height);
        }
        containsPt(t, e) {
          return t >= this.x && t <= this.x2 && e >= this.y && e <= this.y2;
        }
        get area() {
          return this.width * this.height;
        }
        intersects(t) {
          return (
            !(this.area <= 0 || t.width <= 0 || t.height <= 0) &&
            t.x + t.width > this.x &&
            t.y + t.height > this.y &&
            t.x < this.x2 &&
            t.y < this.y2
          );
        }
        distSquare(t, e) {
          if (this.containsPt(t, e)) return 0;
          const n = ls(this, t, e);
          return n.has(rs.TOP)
            ? n.has(rs.LEFT)
              ? es(t, e, this.x, this.y)
              : n.has(rs.RIGHT)
                ? es(t, e, this.x2, this.y)
                : (this.y - e) * (this.y - e)
            : n.has(rs.BOTTOM)
              ? n.has(rs.LEFT)
                ? es(t, e, this.x, this.y2)
                : n.has(rs.RIGHT)
                  ? es(t, e, this.x2, this.y2)
                  : (e - this.y2) * (e - this.y2)
              : n.has(rs.LEFT)
                ? (this.x - t) * (this.x - t)
                : n.has(rs.RIGHT)
                  ? (t - this.x2) * (t - this.x2)
                  : 0;
        }
      }
      class fs {
        constructor(t, e, n) {
          (this.cx = t), (this.cy = e), (this.radius = n);
        }
        get x() {
          return this.cx - this.radius;
        }
        get x2() {
          return this.cx + this.radius;
        }
        get width() {
          return 2 * this.radius;
        }
        get y() {
          return this.cy - this.radius;
        }
        get y2() {
          return this.cy + this.radius;
        }
        get height() {
          return 2 * this.radius;
        }
        static from(t) {
          return new fs(t.cx, t.cy, t.radius);
        }
        containsPt(t, e) {
          return es(this.cx, this.cy, t, e) < this.radius * this.radius;
        }
        distSquare(t, e) {
          const n = es(this.cx, this.cy, t, e);
          if (n < this.radius * this.radius) return 0;
          const i = Math.sqrt(n) - this.radius;
          return i * i;
        }
        draw(t) {
          t.ellipse(
            this.cx,
            this.cy,
            this.radius,
            this.radius,
            0,
            0,
            2 * Math.PI,
          );
        }
      }
      class ms {
        constructor(
          t,
          e = 0,
          n = 0,
          i = 0,
          s = 0,
          o = 10,
          r = 10,
          a = new Float32Array(Math.max(0, o * r)).fill(0),
        ) {
          (this.pixelGroup = t),
            (this.i = e),
            (this.j = n),
            (this.pixelX = i),
            (this.pixelY = s),
            (this.width = o),
            (this.height = r),
            (this.area = a);
        }
        createSub(t, e) {
          return new ms(this.pixelGroup, t.x, t.y, e.x, e.y, t.width, t.height);
        }
        static fromPixelRegion(t, e) {
          return new ms(
            e,
            0,
            0,
            t.x,
            t.y,
            Math.ceil(t.width / e),
            Math.ceil(t.height / e),
          );
        }
        copy(t, e) {
          return new ms(
            this.pixelGroup,
            this.scaleX(e.x),
            this.scaleY(e.y),
            e.x,
            e.y,
            t.width,
            t.height,
            t.area,
          );
        }
        boundX(t) {
          return t < this.i ? this.i : t >= this.width ? this.width - 1 : t;
        }
        boundY(t) {
          return t < this.j ? this.j : t >= this.height ? this.height - 1 : t;
        }
        scaleX(t) {
          return this.boundX(Math.floor((t - this.pixelX) / this.pixelGroup));
        }
        scaleY(t) {
          return this.boundY(Math.floor((t - this.pixelY) / this.pixelGroup));
        }
        scale(t) {
          const e = this.scaleX(t.x),
            n = this.scaleY(t.y),
            i = this.boundX(
              Math.ceil((t.x + t.width - this.pixelX) / this.pixelGroup),
            ),
            s = this.boundY(
              Math.ceil((t.y + t.height - this.pixelY) / this.pixelGroup),
            );
          return new gs(e, n, i - e, s - n);
        }
        invertScaleX(t) {
          return Math.round(t * this.pixelGroup + this.pixelX);
        }
        invertScaleY(t) {
          return Math.round(t * this.pixelGroup + this.pixelY);
        }
        addPadding(t, e) {
          const n = Math.ceil(e / this.pixelGroup),
            i = this.boundX(t.x - n),
            s = this.boundY(t.y - n),
            o = this.boundX(t.x2 + n),
            r = this.boundY(t.y2 + n);
          return new gs(i, s, o - i, r - s);
        }
        get(t, e) {
          return t < 0 || e < 0 || t >= this.width || e >= this.height
            ? Number.NaN
            : this.area[t + e * this.width];
        }
        inc(t, e, n) {
          t < 0 ||
            e < 0 ||
            t >= this.width ||
            e >= this.height ||
            (this.area[t + e * this.width] += n);
        }
        set(t, e, n) {
          t < 0 ||
            e < 0 ||
            t >= this.width ||
            e >= this.height ||
            (this.area[t + e * this.width] = n);
        }
        incArea(t, e) {
          if (t.width <= 0 || t.height <= 0 || 0 === e) return;
          const n = this.width,
            i = t.width,
            s = Math.max(0, t.i),
            o = Math.max(0, t.j),
            r = Math.min(t.i + t.width, n),
            a = Math.min(t.j + t.height, this.height);
          if (!(a <= 0 || r <= 0 || s >= n || a >= this.height))
            for (let c = o; c < a; c++) {
              const o = (c - t.j) * i,
                a = c * n;
              for (let n = s; n < r; n++) {
                const i = t.area[n - t.i + o];
                0 !== i && (this.area[n + a] += e * i);
              }
            }
        }
        fill(t) {
          this.area.fill(t);
        }
        fillArea(t, e) {
          const n = t.x + t.y * this.width;
          for (let i = 0; i < t.height; i++) {
            const s = n + i * this.width;
            this.area.fill(e, s, s + t.width);
          }
        }
        fillHorizontalLine(t, e, n, i) {
          const s = t + e * this.width;
          this.area.fill(i, s, s + n);
        }
        fillVerticalLine(t, e, n, i) {
          const s = t + e * this.width;
          for (let t = 0; t < n; t++) this.area[s + t * this.width] = i;
        }
        clear() {
          this.area.fill(0);
        }
        toString() {
          let t = '';
          for (let e = 0; e < this.height; e++) {
            const n = e * this.width;
            for (let e = 0; e < this.width; e++) {
              (t += this.area[n + e].toFixed(1).padStart(6)), (t += ' ');
            }
            t += '\n';
          }
          return t;
        }
        draw(t, e = !0) {
          if (this.width <= 0 || this.height <= 0) return;
          t.save(), e && t.translate(this.pixelX, this.pixelY);
          const n = this.area.reduce(
              (t, e) => Math.min(t, e),
              Number.POSITIVE_INFINITY,
            ),
            i = this.area.reduce(
              (t, e) => Math.max(t, e),
              Number.NEGATIVE_INFINITY,
            ),
            s = (t) => (t - n) / (i - n);
          t.scale(this.pixelGroup, this.pixelGroup);
          for (let e = 0; e < this.width; e++)
            for (let n = 0; n < this.height; n++) {
              const i = this.area[e + n * this.width];
              (t.fillStyle = `rgba(0, 0, 0, ${s(i)})`), t.fillRect(e, n, 1, 1);
            }
          t.restore();
        }
        drawThreshold(t, e, n = !0) {
          if (!(this.width <= 0 || this.height <= 0)) {
            t.save(),
              n && t.translate(this.pixelX, this.pixelY),
              t.scale(this.pixelGroup, this.pixelGroup);
            for (let n = 0; n < this.width; n++)
              for (let i = 0; i < this.height; i++) {
                const s = this.area[n + i * this.width];
                (t.fillStyle = s > e ? 'black' : 'white'),
                  t.fillRect(n, i, 1, 1);
              }
            t.restore();
          }
        }
      }
      function ys(t, e) {
        const n = (t) => ({
          x: t.x - e,
          y: t.y - e,
          width: t.width + 2 * e,
          height: t.height + 2 * e,
        });
        return Array.isArray(t) ? t.map(n) : n(t);
      }
      function bs(t, e, n) {
        return Es(
          Object.assign(is(t), {
            distSquare: (e, n) => ts(t.x1, t.y1, t.x2, t.y2, e, n),
          }),
          e,
          n,
        );
      }
      function Es(t, e, n) {
        const i = ys(t, n),
          s = e.scale(i),
          o = e.createSub(s, i);
        return (
          (function (t, e, n, i) {
            const s = n * n;
            for (let o = 0; o < t.height; o++)
              for (let r = 0; r < t.width; r++) {
                const a = i(e.invertScaleX(t.i + r), e.invertScaleY(t.j + o));
                if (0 !== a) {
                  if (a < s) {
                    const e = n - Math.sqrt(a);
                    t.set(r, o, e * e);
                  }
                } else t.set(r, o, s);
              }
          })(o, e, n, (e, n) => t.distSquare(e, n)),
          o
        );
      }
      function xs(t, e) {
        return { x: t, y: e };
      }
      function vs(t, e, n, i) {
        if (0 === t.length) return [];
        const s = (function (t) {
          if (t.length < 2) return t;
          let e = 0,
            n = 0;
          return (
            t.forEach((t) => {
              (e += t.cx), (n += t.cy);
            }),
            (e /= t.length),
            (n /= t.length),
            t
              .map((t) => {
                const i = e - t.cx,
                  s = n - t.cy;
                return [t, i * i + s * s];
              })
              .sort((t, e) => t[1] - e[1])
              .map((t) => t[0])
          );
        })(t);
        return s
          .map((t, o) => {
            const r = s.slice(0, o);
            return (function (t, e, n, i, s) {
              const o = xs(e.cx, e.cy),
                r = (function (t, e, n) {
                  let i = Number.POSITIVE_INFINITY;
                  return e.reduce((e, s) => {
                    const o = es(t.x, t.y, s.cx, s.cy);
                    if (o > i) return e;
                    const r = new ss(t.x, t.y, s.cx, s.cy),
                      a = (function (t, e) {
                        return t.reduce(
                          (t, n) =>
                            ds(n, e) &&
                            (function (t, e) {
                              function n(t, n, i, s) {
                                let o = hs(e, new ss(t, n, i, s));
                                return (
                                  (o = Math.abs(o - 0.5)),
                                  o >= 0 && o <= 1 ? 1 : 0
                                );
                              }
                              let i = n(t.x, t.y, t.x2, t.y);
                              return (
                                (i += n(t.x, t.y, t.x, t.y2)),
                                i > 1 ||
                                  ((i += n(t.x, t.y2, t.x2, t.y2)),
                                  i > 1 ||
                                    ((i += n(t.x2, t.y, t.x2, t.y2)), i > 0))
                              );
                            })(n, e)
                              ? t + 1
                              : t,
                          0,
                        );
                      })(n, r);
                    return (
                      o * (a + 1) * (a + 1) < i &&
                        ((e = s), (i = o * (a + 1) * (a + 1))),
                      e
                    );
                  }, null);
                })(o, n, t);
              if (null == r) return [];
              const a = (function (t, e, n, i) {
                const s = [],
                  o = [];
                o.push(t);
                let r = !0;
                for (let t = 0; t < n && r; t++)
                  for (r = !1; !r && o.length > 0; ) {
                    const t = o.pop(),
                      n = Cs(e, t),
                      a = n ? ps(t, n) : null;
                    if (!n || !a || 2 !== a.count) {
                      r || s.push(t);
                      continue;
                    }
                    let c = i,
                      h = Os(n, c, a, !0),
                      l = Ss(h, o) || Ss(h, s),
                      d = ws(h, e);
                    for (; !l && d && c >= 1; )
                      (c /= 1.5),
                        (h = Os(n, c, a, !0)),
                        (l = Ss(h, o) || Ss(h, s)),
                        (d = ws(h, e));
                    if (
                      (!h ||
                        l ||
                        d ||
                        (o.push(new ss(t.x1, t.y1, h.x, h.y)),
                        o.push(new ss(h.x, h.y, t.x2, t.y2)),
                        (r = !0)),
                      r)
                    )
                      continue;
                    (c = i), (h = Os(n, c, a, !1));
                    let u = Ss(h, o) || Ss(h, s);
                    for (d = ws(h, e); !u && d && c >= 1; )
                      (c /= 1.5),
                        (h = Os(n, c, a, !1)),
                        (u = Ss(h, o) || Ss(h, s)),
                        (d = ws(h, e));
                    h &&
                      !u &&
                      (o.push(new ss(t.x1, t.y1, h.x, h.y)),
                      o.push(new ss(h.x, h.y, t.x2, t.y2)),
                      (r = !0)),
                      r || s.push(t);
                  }
                for (; o.length > 0; ) s.push(o.pop());
                return s;
              })(new ss(o.x, o.y, r.cx, r.cy), t, i, s);
              return (function (t, e) {
                const n = [];
                for (; t.length > 0; ) {
                  const i = t.pop();
                  if (0 === t.length) {
                    n.push(i);
                    break;
                  }
                  const s = t.pop(),
                    o = new ss(i.x1, i.y1, s.x2, s.y2);
                  Cs(e, o) ? (n.push(i), t.push(s)) : t.push(o);
                }
                return n;
              })(a, t);
            })(e, t, r, n, i);
          })
          .flat();
      }
      function ws(t, e) {
        return e.some((e) => e.containsPt(t.x, t.y));
      }
      function Ss(t, e) {
        return e.some(
          (e) =>
            !!ns(e.x1, e.y1, t.x, t.y, 0.001) ||
            !!ns(e.x2, e.y2, t.x, t.y, 0.001),
        );
      }
      function Cs(t, e) {
        let n = Number.POSITIVE_INFINITY,
          i = null;
        for (const s of t) {
          if (!ds(s, e)) continue;
          const t = us(s, e);
          t >= 0 && t < n && ((i = s), (n = t));
        }
        return i;
      }
      function Os(t, e, n, i) {
        const s = n.top,
          o = n.left,
          r = n.bottom,
          a = n.right;
        if (i) {
          if (o.state === os.POINT) {
            if (s.state === os.POINT) return xs(t.x - e, t.y - e);
            if (r.state === os.POINT) return xs(t.x - e, t.y2 + e);
            const n = t.width * t.height;
            return t.width * (0.5 * (o.y - t.y + (a.y - t.y))) < 0.5 * n
              ? o.y > a.y
                ? xs(t.x - e, t.y - e)
                : xs(t.x2 + e, t.y - e)
              : o.y < a.y
                ? xs(t.x - e, t.y2 + e)
                : xs(t.x2 + e, t.y2 + e);
          }
          if (a.state === os.POINT) {
            if (s.state === os.POINT) return xs(t.x2 + e, t.y - e);
            if (r.state === os.POINT) return xs(t.x2 + e, t.y2 + e);
          }
          const n = t.height * t.width;
          return t.height * (0.5 * (s.x - t.x + (a.x - t.x))) < 0.5 * n
            ? s.x > r.x
              ? xs(t.x - e, t.y - e)
              : xs(t.x - e, t.y2 + e)
            : s.x < r.x
              ? xs(t.x2 + e, t.y - e)
              : xs(t.x2 + e, t.y2 + e);
        }
        if (o.state === os.POINT) {
          if (s.state === os.POINT) return xs(t.x2 + e, t.y2 + e);
          if (r.state === os.POINT) return xs(t.x2 + e, t.y - e);
          const n = t.height * t.width;
          return t.width * (0.5 * (o.y - t.y + (a.y - t.y))) < 0.5 * n
            ? o.y > a.y
              ? xs(t.x2 + e, t.y2 + e)
              : xs(t.x - e, t.y2 + e)
            : o.y < a.y
              ? xs(t.x2 + e, t.y - e)
              : xs(t.x - e, t.y - e);
        }
        if (a.state === os.POINT) {
          if (s.state === os.POINT) return xs(t.x - e, t.y2 + e);
          if (r.state === os.POINT) return xs(t.x - e, t.y - e);
        }
        const c = t.height * t.width;
        return t.height * (0.5 * (s.x - t.x + (a.x - t.x))) < 0.5 * c
          ? s.x > r.x
            ? xs(t.x2 + e, t.y2 + e)
            : xs(t.x2 + e, t.y - e)
          : s.x < r.x
            ? xs(t.x - e, t.y2 + e)
            : xs(t.x - e, t.y - e);
      }
      function Ts(t, e, n, i) {
        if (!(t.closed ? n < t.length : n < t.length - 1)) return !1;
        const s = t.get(e),
          o = t.get(n + 1);
        for (let r = e + 1; r <= n; r++) {
          const e = t.get(r);
          if (ts(s.x, s.y, o.x, o.y, e.x, e.y) > i) return !1;
        }
        return !0;
      }
      function As(t, e) {
        switch (t) {
          case -2:
            return (((3 - e) * e - 3) * e + 1) / 6;
          case -1:
            return ((3 * e - 6) * e * e + 4) / 6;
          case 0:
            return (((-3 * e + 3) * e + 3) * e + 1) / 6;
          case 1:
            return (e * e * e) / 6;
          default:
            throw new Error('unknown error');
        }
      }
      class Ds {
        constructor(t = [], e = !0) {
          (this.points = t), (this.closed = e);
        }
        get(t) {
          const e = t,
            n = this.points.length;
          return t < 0
            ? this.closed
              ? this.get(t + n)
              : this.points[0]
            : t >= n
              ? this.closed
                ? this.get(t - n)
                : this.points[n - 1]
              : this.points[e];
        }
        get length() {
          return this.points.length;
        }
        toString(t = 1 / 0) {
          const e = this.points;
          if (0 === e.length) return '';
          const n =
            'function' == typeof t
              ? t
              : (function (t) {
                  if (!Number.isFinite(t)) return (t) => t;
                  if (0 === t) return Math.round;
                  const e = Math.pow(10, t);
                  return (t) => Math.round(t * e) / e;
                })(t);
          let i = 'M';
          for (const t of e) i += `${n(t.x)},${n(t.y)} L`;
          return (i = i.slice(0, -1)), this.closed && (i += ' Z'), i;
        }
        draw(t) {
          const e = this.points;
          if (0 !== e.length) {
            t.beginPath(), t.moveTo(e[0].x, e[0].y);
            for (const n of e) t.lineTo(n.x, n.y);
            this.closed && t.closePath();
          }
        }
        sample(t) {
          return (function (t = 8) {
            return (e) => {
              let n = t,
                i = e.length;
              if (n > 1)
                for (i = Math.floor(e.length / n); i < 3 && n > 1; )
                  (n -= 1), (i = Math.floor(e.length / n));
              const s = [];
              for (let t = 0, o = 0; o < i; o++, t += n) s.push(e.get(t));
              return new Ds(s);
            };
          })(t)(this);
        }
        simplify(t) {
          return (function (t = 0) {
            return (e) => {
              if (t < 0 || e.length < 3) return e;
              const n = [];
              let i = 0;
              const s = t * t;
              for (; i < e.length; ) {
                let t = i + 1;
                for (; Ts(e, i, t, s); ) t++;
                n.push(e.get(i)), (i = t);
              }
              return new Ds(n);
            };
          })(t)(this);
        }
        bSplines(t) {
          return (function (t = 6) {
            function e(t, e, n) {
              let i = 0,
                s = 0;
              for (let o = -2; o <= 1; o++) {
                const r = t.get(e + o),
                  a = As(o, n);
                (i += a * r.x), (s += a * r.y);
              }
              return { x: i, y: s };
            }
            return (n) => {
              if (n.length < 3) return n;
              const i = [],
                s = n.closed,
                o = n.length + 3 - 1 + (s ? 0 : 2);
              i.push(e(n, 2 - (s ? 0 : 2), 0));
              for (let r = 2 - (s ? 0 : 2); r < o; r++)
                for (let s = 1; s <= t; s++) i.push(e(n, r, s / t));
              return new Ds(i);
            };
          })(t)(this);
        }
        apply(t) {
          return t(this);
        }
        containsElements(t) {
          const e = (function (t) {
            if (0 === t.length) return null;
            const e = t[0],
              n = new gs(e.x, e.y, 0, 0);
            for (const e of t) n.addPoint(e);
            return n;
          })(this.points);
          return (
            !!e &&
            t.every(
              (t) => e.containsPt(t.cx, t.cy) && this.withinArea(t.cx, t.cy),
            )
          );
        }
        withinArea(t, e) {
          if (0 === this.length) return !1;
          let n = 0;
          const i = this.points[0],
            s = new ss(i.x, i.y, i.x, i.y);
          for (let i = 1; i < this.points.length; i++) {
            const o = this.points[i];
            (s.x1 = s.x2),
              (s.y1 = s.y2),
              (s.x2 = o.x),
              (s.y2 = o.y),
              s.cuts(t, e) && n++;
          }
          return (
            (s.x1 = s.x2),
            (s.y1 = s.y2),
            (s.x2 = i.x),
            (s.y2 = i.y),
            s.cuts(t, e) && n++,
            n % 2 == 1
          );
        }
      }
      class Ms {
        constructor(t = 0) {
          (this.count = 0),
            (this.arr = []),
            (this.set = new Set()),
            (this.arr.length = t);
        }
        add(t) {
          this.set.add(`${t.x}x${t.y}`), (this.arr[this.count++] = t);
        }
        contains(t) {
          return this.set.has(`${t.x}x${t.y}`);
        }
        isFirst(t) {
          if (0 === this.count) return !1;
          const e = this.arr[0];
          return null != e && e.x === t.x && e.y === t.y;
        }
        path() {
          return new Ds(this.arr.slice(0, this.count));
        }
        clear() {
          this.set.clear(), (this.count = 0);
        }
        get(t) {
          return this.arr[t];
        }
        get length() {
          return this.count;
        }
      }
      function Rs(t, e) {
        const n = 2 * (Math.floor(t.width) + Math.floor(t.height)),
          i = new Ms(n);
        function s(n, i, s, o) {
          const r = t.get(n, i);
          return Number.isNaN(r) ? Number.NaN : r > e ? s + o : s;
        }
        function o(t, e) {
          let n = 0;
          return (
            (n = s(t, e, n, 1)),
            (n = s(t + 1, e, n, 2)),
            (n = s(t, e + 1, n, 4)),
            (n = s(t + 1, e + 1, n, 8)),
            Number.isNaN(n) ? -1 : n
          );
        }
        let r = 1;
        function a(e, n) {
          let s = e,
            a = n,
            c = t.invertScaleX(s),
            h = t.invertScaleY(a);
          for (let e = 0; e < t.width * t.height; e++) {
            const e = { x: c, y: h };
            if (i.contains(e)) {
              if (i.isFirst(e)) return !0;
            } else i.add(e);
            const n = o(s, a);
            switch (n) {
              case -1:
                return !0;
              case 0:
              case 3:
              case 2:
              case 7:
                r = 2;
                break;
              case 12:
              case 14:
              case 4:
                r = 3;
                break;
              case 6:
                r = 0 === r ? 3 : 2;
                break;
              case 1:
              case 13:
              case 5:
                r = 0;
                break;
              case 9:
                r = 2 === r ? 0 : 1;
                break;
              case 10:
              case 8:
              case 11:
                r = 1;
                break;
              default:
                return console.warn('Marching squares invalid state: ' + n), !0;
            }
            switch (r) {
              case 0:
                a--, (h -= t.pixelGroup);
                break;
              case 1:
                a++, (h += t.pixelGroup);
                break;
              case 3:
                s--, (c -= t.pixelGroup);
                break;
              case 2:
                s++, (c += t.pixelGroup);
                break;
              default:
                return console.warn('Marching squares invalid state: ' + n), !0;
            }
          }
          return !0;
        }
        for (let n = 0; n < t.width; n++)
          for (let s = 0; s < t.height; s++) {
            if (t.get(n, s) <= e) continue;
            const r = o(n, s);
            if (!(r < 0 || 15 === r) && a(n, s)) return i.path();
          }
        return null;
      }
      const Ps = {
        maxRoutingIterations: 100,
        maxMarchingIterations: 20,
        pixelGroup: 4,
        edgeR0: 10,
        edgeR1: 20,
        nodeR0: 15,
        nodeR1: 50,
        morphBuffer: 10,
        threshold: 1,
        memberInfluenceFactor: 1,
        edgeInfluenceFactor: 1,
        nonMemberInfluenceFactor: -0.8,
        virtualEdges: !0,
      };
      function ks(t) {
        return null != t && 'number' == typeof t.radius;
      }
      function Ns(t, e) {
        if (ks(t) !== ks(e)) return !1;
        if (ks(t)) {
          const n = e;
          return t.cx === n.cx && t.cy === n.cy && t.radius === n.radius;
        }
        const n = e;
        return (
          t.x === n.x &&
          t.y === n.y &&
          t.width === n.width &&
          t.height === n.height
        );
      }
      var Is;
      !(function (t) {
        (t[(t.MEMBERS = 0)] = 'MEMBERS'),
          (t[(t.NON_MEMBERS = 1)] = 'NON_MEMBERS'),
          (t[(t.EDGES = 2)] = 'EDGES');
      })(Is || (Is = {}));
      class Ls {
        constructor(t = {}) {
          (this.dirty = new Set()),
            (this.members = []),
            (this.nonMembers = []),
            (this.virtualEdges = []),
            (this.edges = []),
            (this.activeRegion = new gs(0, 0, 0, 0)),
            (this.potentialArea = new ms(1, 0, 0, 0, 0, 0, 0)),
            (this.o = Object.assign({}, Ps, t));
        }
        pushMember(...t) {
          if (0 !== t.length) {
            this.dirty.add(Is.MEMBERS);
            for (const e of t)
              this.members.push({
                raw: e,
                obj: ks(e) ? fs.from(e) : gs.from(e),
                area: null,
              });
          }
        }
        removeMember(t) {
          const e = this.members.findIndex((e) => Ns(e.raw, t));
          return (
            !(e < 0) &&
            (this.members.splice(e, 1), this.dirty.add(Is.MEMBERS), !0)
          );
        }
        removeNonMember(t) {
          const e = this.nonMembers.findIndex((e) => Ns(e.raw, t));
          return (
            !(e < 0) &&
            (this.nonMembers.splice(e, 1), this.dirty.add(Is.NON_MEMBERS), !0)
          );
        }
        removeEdge(t) {
          const e = this.edges.findIndex((e) => e.obj.equals(t));
          return (
            !(e < 0) &&
            (this.edges.splice(e, 1), this.dirty.add(Is.NON_MEMBERS), !0)
          );
        }
        pushNonMember(...t) {
          if (0 !== t.length) {
            this.dirty.add(Is.NON_MEMBERS);
            for (const e of t)
              this.nonMembers.push({
                raw: e,
                obj: ks(e) ? fs.from(e) : gs.from(e),
                area: null,
              });
          }
        }
        pushEdge(...t) {
          if (0 !== t.length) {
            this.dirty.add(Is.EDGES);
            for (const e of t)
              this.edges.push({ raw: e, obj: ss.from(e), area: null });
          }
        }
        update() {
          const t = this.dirty.has(Is.MEMBERS),
            e = this.dirty.has(Is.NON_MEMBERS);
          let n = this.dirty.has(Is.EDGES);
          this.dirty.clear();
          const i = this.members.map((t) => t.obj);
          if (this.o.virtualEdges && (t || e)) {
            const t = vs(
                i,
                this.nonMembers.map((t) => t.obj),
                this.o.maxRoutingIterations,
                this.o.morphBuffer,
              ),
              e = new Map(
                this.virtualEdges.map((t) => [t.obj.toString(), t.area]),
              );
            (this.virtualEdges = t.map((t) => {
              var n;
              return {
                raw: t,
                obj: t,
                area:
                  null !== (n = e.get(t.toString())) && void 0 !== n ? n : null,
              };
            })),
              (n = !0);
          }
          let s = !1;
          if (t || n) {
            const t = (function (t, e) {
                if (0 === t.length) return new gs(0, 0, 0, 0);
                const n = gs.from(t[0]);
                for (const e of t) n.add(e);
                for (const t of e) n.add(is(t));
                return n;
              })(
                i,
                this.virtualEdges.concat(this.edges).map((t) => t.obj),
              ),
              e = Math.max(this.o.edgeR1, this.o.nodeR1) + this.o.morphBuffer,
              n = gs.from(ys(t, e));
            n.equals(this.activeRegion) || ((s = !0), (this.activeRegion = n));
          }
          if (s) {
            const t = Math.ceil(this.activeRegion.width / this.o.pixelGroup),
              e = Math.ceil(this.activeRegion.height / this.o.pixelGroup);
            this.activeRegion.x !== this.potentialArea.pixelX ||
            this.activeRegion.y !== this.potentialArea.pixelY
              ? ((this.potentialArea = ms.fromPixelRegion(
                  this.activeRegion,
                  this.o.pixelGroup,
                )),
                this.members.forEach((t) => (t.area = null)),
                this.nonMembers.forEach((t) => (t.area = null)),
                this.edges.forEach((t) => (t.area = null)),
                this.virtualEdges.forEach((t) => (t.area = null)))
              : (t === this.potentialArea.width &&
                  e === this.potentialArea.height) ||
                (this.potentialArea = ms.fromPixelRegion(
                  this.activeRegion,
                  this.o.pixelGroup,
                ));
          }
          const o = new Map(),
            r = (t) => {
              if (t.area) {
                const e = `${t.obj.width}x${t.obj.height}x${t.obj instanceof gs ? 'R' : 'C'}`;
                o.set(e, t.area);
              }
            },
            a = (t) => {
              if (t.area) return;
              const e = `${t.obj.width}x${t.obj.height}x${t.obj instanceof gs ? 'R' : 'C'}`;
              if (o.has(e)) {
                const n = o.get(e);
                return void (t.area = this.potentialArea.copy(n, {
                  x: t.obj.x - this.o.nodeR1,
                  y: t.obj.y - this.o.nodeR1,
                }));
              }
              const n =
                t.obj instanceof gs
                  ? (function (t, e, n) {
                      const i = e.scale(t),
                        s = e.addPadding(i, n),
                        o = e.createSub(s, { x: t.x - n, y: t.y - n }),
                        r = i.x - s.x,
                        a = i.y - s.y,
                        c = s.x2 - i.x2,
                        h = s.y2 - i.y2,
                        l = s.width - r - c,
                        d = s.height - a - h,
                        u = n * n;
                      o.fillArea(
                        { x: r, y: a, width: l + 1, height: d + 1 },
                        u,
                      );
                      const p = [0],
                        g = Math.max(a, r, c, h);
                      {
                        const s = e.invertScaleX(i.x + i.width / 2);
                        for (let o = 1; o < g; o++) {
                          const r = e.invertScaleY(i.y - o),
                            a = t.distSquare(s, r);
                          if (!(a < u)) break;
                          {
                            const t = n - Math.sqrt(a);
                            p.push(t * t);
                          }
                        }
                      }
                      const f = [],
                        m = Math.max(r, c),
                        y = Math.max(a, c);
                      for (let s = 1; s < m; s++) {
                        const o = e.invertScaleX(i.x - s),
                          r = [];
                        for (let s = 1; s < y; s++) {
                          const a = e.invertScaleY(i.y - s),
                            c = t.distSquare(o, a);
                          if (c < u) {
                            const t = n - Math.sqrt(c);
                            r.push(t * t);
                          } else r.push(0);
                        }
                        f.push(r);
                      }
                      for (let t = 1; t < Math.min(a, p.length); t++) {
                        const e = p[t];
                        o.fillHorizontalLine(r, a - t, l + 1, e);
                      }
                      for (let t = 1; t < Math.min(h, p.length); t++) {
                        const e = p[t];
                        o.fillHorizontalLine(r, a + d + t, l + 1, e);
                      }
                      for (let t = 1; t < Math.min(r, p.length); t++) {
                        const e = p[t];
                        o.fillVerticalLine(r - t, a, d + 1, e);
                      }
                      for (let t = 1; t < Math.min(h, p.length); t++) {
                        const e = p[t];
                        o.fillVerticalLine(r + l + t, a, d + 1, e);
                      }
                      for (let t = 1; t < r; t++) {
                        const e = f[t - 1],
                          n = r - t;
                        for (let t = 1; t < a; t++) o.set(n, a - t, e[t - 1]);
                        for (let t = 1; t < h; t++)
                          o.set(n, a + d + t, e[t - 1]);
                      }
                      for (let t = 1; t < c; t++) {
                        const e = f[t - 1],
                          n = r + l + t;
                        for (let t = 1; t < a; t++) o.set(n, a - t, e[t - 1]);
                        for (let t = 1; t < h; t++)
                          o.set(n, a + d + t, e[t - 1]);
                      }
                      return o;
                    })(t.obj, this.potentialArea, this.o.nodeR1)
                  : Es(t.obj, this.potentialArea, this.o.nodeR1);
              (t.area = n), o.set(e, n);
            };
          this.members.forEach(r),
            this.nonMembers.forEach(r),
            this.members.forEach(a),
            this.nonMembers.forEach((t) => {
              this.activeRegion.intersects(t.obj) ? a(t) : (t.area = null);
            }),
            this.edges.forEach((t) => {
              t.area || (t.area = bs(t.obj, this.potentialArea, this.o.edgeR1));
            }),
            this.virtualEdges.forEach((t) => {
              t.area || (t.area = bs(t.obj, this.potentialArea, this.o.edgeR1));
            });
        }
        drawMembers(t) {
          for (const e of this.members) e.obj.draw(t);
        }
        drawNonMembers(t) {
          for (const e of this.nonMembers) e.obj.draw(t);
        }
        drawEdges(t) {
          for (const e of this.edges) e.obj.draw(t);
        }
        drawPotentialArea(t, e = !0) {
          this.potentialArea.draw(t, e);
        }
        compute() {
          if (0 === this.members.length) return new Ds([]);
          this.dirty.size > 0 && this.update();
          const { o: t, potentialArea: e } = this,
            n = this.members.map((t) => t.area),
            i = this.virtualEdges.concat(this.edges).map((t) => t.area),
            s = this.nonMembers
              .filter((t) => null != t.area)
              .map((t) => t.area),
            o = this.members.map((t) => t.obj);
          return (function (t, e, n, i, s, o = {}) {
            const r = Object.assign({}, Ps, o);
            let a = r.threshold,
              c = r.memberInfluenceFactor,
              h = r.edgeInfluenceFactor,
              l = r.nonMemberInfluenceFactor;
            const d = (r.nodeR0 - r.nodeR1) * (r.nodeR0 - r.nodeR1),
              u = (r.edgeR0 - r.edgeR1) * (r.edgeR0 - r.edgeR1);
            for (let o = 0; o < r.maxMarchingIterations; o++) {
              if ((t.clear(), 0 !== c)) {
                const n = c / d;
                for (const i of e) t.incArea(i, n);
              }
              if (0 !== h) {
                const e = h / u;
                for (const i of n) t.incArea(i, e);
              }
              if (0 !== l) {
                const e = l / d;
                for (const n of i) t.incArea(n, e);
              }
              const p = Rs(t, a);
              if (p && s(p)) return p;
              if (((a *= 0.95), o <= 0.5 * r.maxMarchingIterations))
                (c *= 1.2), (h *= 1.2);
              else {
                if (!(0 !== l && i.length > 0)) break;
                l *= 0.8;
              }
            }
            return new Ds([]);
          })(e, n, i, s, (t) => t.containsElements(o), t);
        }
      }
      class Bs extends Ji {
        shape;
        bubbleSets;
        path;
        members = new Map();
        avoidMembers = new Map();
        bubbleSetOptions = {};
        static defaultOptions = {
          members: [],
          avoidMembers: [],
          fill: 'lightblue',
          fillOpacity: 0.2,
          stroke: 'blue',
          strokeOpacity: 0.2,
          ...Ps,
        };
        constructor(t, e) {
          super(t, (0, _.Z)({}, Bs.defaultOptions, e)),
            this.bindEvents(),
            (this.bubbleSets = new Ls(this.options));
        }
        bindEvents() {
          this.context.graph.on(O.AFTER_RENDER, this.drawBubbleSets),
            this.context.graph.on(
              O.AFTER_ELEMENT_UPDATE,
              this.updateBubbleSetsPath,
            );
        }
        init() {
          (this.bubbleSets = new Ls(this.options)),
            (this.members = new Map()),
            (this.avoidMembers = new Map());
        }
        parseOptions() {
          const {
              type: t,
              key: e,
              members: n,
              avoidMembers: i,
              ...s
            } = this.options,
            o = Object.keys(s).reduce(
              (t, e) => (
                e in Ps ? (t.bubbleSetOptions[e] = s[e]) : (t.style[e] = s[e]),
                t
              ),
              { style: {}, bubbleSetOptions: {} },
            );
          return { type: t, key: e, members: n, avoidMembers: i, ...o };
        }
        drawBubbleSets = () => {
          const { style: t, bubbleSetOptions: e } = this.parseOptions();
          g(this.bubbleSetOptions, e) || this.init(),
            (this.bubbleSetOptions = { ...e });
          const n = { ...t, d: this.getPath() };
          this.shape
            ? this.shape.update(n)
            : ((this.shape = new Ye({ style: n })),
              this.context.canvas.appendChild(this.shape));
        };
        updateBubbleSetsPath = (t) => {
          if (!this.shape) return;
          const e = F(t.data);
          [...this.options.members, ...this.options.avoidMembers].includes(e) &&
            this.shape.update({
              ...this.parseOptions().style,
              d: this.getPath(e),
            });
        };
        getPath = (t) => {
          const { graph: e } = this.context,
            n = this.options.members,
            i = [...this.members.keys()],
            s = this.options.avoidMembers,
            o = [...this.avoidMembers.keys()];
          if (!t && g(n, i) && g(s, o)) return this.path;
          const { enter: r = [], exit: a = [] } = X(i, n, (t) => t),
            { enter: c = [], exit: h = [] } = X(o, s, (t) => t);
          t && (a.push(t), r.push(t));
          const l = (t, n, i) => {
            t.forEach((t) => {
              const s = i ? this.members : this.avoidMembers,
                o = i ? 'pushMember' : 'pushNonMember',
                r = i ? 'removeMember' : 'removeNonMember';
              if (n) {
                let n;
                'edge' === e.getElementType(t)
                  ? (([n] = Fs(e, t)), this.bubbleSets.pushEdge(n))
                  : (([n] = _s(e, t)), this.bubbleSets[o](n)),
                  s.set(t, n);
              } else {
                const n = s.get(t);
                n &&
                  ('edge' === e.getElementType(t)
                    ? this.bubbleSets.removeEdge(n)
                    : this.bubbleSets[r](n),
                  s.delete(t));
              }
            });
          };
          l(a, !1, !0), l(r, !0, !0), l(h, !1, !1), l(c, !0, !1);
          const d = this.bubbleSets
            .compute()
            .sample(8)
            .simplify(0)
            .bSplines()
            .simplify(0);
          return (this.path = We(d.points.map(kt))), this.path;
        };
        addMember(t) {
          const e = Array.isArray(t) ? t : [t];
          e.some((t) => this.options.avoidMembers.includes(t)) &&
            (this.options.avoidMembers = this.options.avoidMembers.filter(
              (t) => !e.includes(t),
            )),
            (this.options.members = [
              ...new Set([...this.options.members, ...e]),
            ]),
            this.drawBubbleSets();
        }
        removeMember(t) {
          const e = Array.isArray(t) ? t : [t];
          (this.options.members = this.options.members.filter(
            (t) => !e.includes(t),
          )),
            this.drawBubbleSets();
        }
        updateMember(t) {
          (this.options.members = (0, tt.Z)(t) ? t(this.options.members) : t),
            this.drawBubbleSets();
        }
        getMember() {
          return this.options.members;
        }
        addAvoidMember(t) {
          const e = Array.isArray(t) ? t : [t];
          e.some((t) => this.options.members.includes(t)) &&
            (this.options.members = this.options.members.filter(
              (t) => !e.includes(t),
            )),
            (this.options.avoidMembers = [
              ...new Set([...this.options.avoidMembers, ...e]),
            ]),
            this.drawBubbleSets();
        }
        removeAvoidMember(t) {
          const e = Array.isArray(t) ? t : [t];
          this.options.avoidMembers.some((t) => e.includes(t)) &&
            ((this.options.avoidMembers = this.options.avoidMembers.filter(
              (t) => !e.includes(t),
            )),
            this.drawBubbleSets());
        }
        updateAvoidMember(t) {
          (this.options.avoidMembers = Array.isArray(t) ? t : [t]),
            this.drawBubbleSets();
        }
        getAvoidMember() {
          return this.options.avoidMembers;
        }
        destroy() {
          this.context.graph.off(O.AFTER_RENDER, this.drawBubbleSets),
            this.context.graph.off(
              O.AFTER_ELEMENT_UPDATE,
              this.updateBubbleSetsPath,
            ),
            this.shape.destroy(),
            super.destroy();
        }
      }
      const _s = (t, e) =>
          (Array.isArray(e) ? e : [e]).map((e) => {
            const n = t.getElementRenderBounds(e);
            return new gs(n.min[0], n.min[1], ot(n), rt(n));
          }),
        Fs = (t, e) =>
          (Array.isArray(e) ? e : [e]).map((e) => {
            const n = t.getEdgeData(e),
              i = t.getElementPosition(n.source),
              s = t.getElementPosition(n.target);
            return ss.from({ x1: i[0], y1: i[1], x2: s[0], y2: s[1] });
          });
      class zs extends Ji {
        static defaultOptions = {
          trigger: 'contextmenu',
          offset: [4, 4],
          loadingContent:
            '<div class="g6-contextmenu-loading">Loading...</div>',
          getContent: () => 'It is a empty context menu.',
          enable: () => !0,
        };
        $element;
        constructor(t, e) {
          super(t, Object.assign({}, zs.defaultOptions, e)),
            this.initElement(),
            this.update(e);
        }
        initElement() {
          this.$element = Xi('contextmenu', !1);
          const { className: t } = this.options;
          t && this.$element.classList.add(t);
          this.context.canvas.getContainer().appendChild(this.$element),
            qi(
              'g6-contextmenu-css',
              'style',
              {},
              '\n  .g6-contextmenu {\n    font-size: 12px;\n    background-color: rgba(255, 255, 255, 0.96);\n    border-radius: 4px;\n    overflow: hidden;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 12px 0px;\n    transition: visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;\n  }\n\n  .g6-contextmenu-ul {\n    max-width: 256px;\n    min-width: 96px;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .g6-contextmenu-li {\n    padding: 8px 12px;\n    cursor: pointer;\n    user-select: none;\n  }\n\n  .g6-contextmenu-li:hover {\n    background-color: #f5f5f5;\n    cursor: pointer;\n  }\n',
              document.head,
            );
        }
        async show(t) {
          const { enable: e, offset: n } = this.options;
          if (('function' == typeof e && !e(t)) || !e) return void this.hide();
          const i = await this.getDOMContent(t);
          i instanceof HTMLElement
            ? ((this.$element.innerHTML = ''), this.$element.appendChild(i))
            : (this.$element.innerHTML = i);
          const s = this.context.graph
            .getCanvas()
            .getContainer()
            .getBoundingClientRect();
          (this.$element.style.left = `${t.client.x - s.left + n[0]}px`),
            (this.$element.style.top = `${t.client.y - s.top + n[1]}px`),
            (this.$element.style.display = 'block');
        }
        hide() {
          this.$element.style.display = 'none';
        }
        update(t) {
          this.unbindEvents(), super.update(t), this.bindEvents();
        }
        destroy() {
          this.unbindEvents(), super.destroy(), this.$element.remove();
        }
        async getDOMContent(t) {
          const { getContent: e, getItems: n } = this.options;
          return n
            ? `\n    <ul class="g6-contextmenu-ul">\n      ${(await n(t)).map((t) => `<li  class="g6-contextmenu-li" value="${t.value}">${t.name}</li>`).join('')}\n    </ul>\n  `
            : await e(t);
        }
        bindEvents() {
          const { graph: t } = this.context,
            { trigger: e } = this.options;
          t.on(`canvas:${e}`, this.onTriggerEvent),
            t.on(`node:${e}`, this.onTriggerEvent),
            t.on(`edge:${e}`, this.onTriggerEvent),
            t.on(`combo:${e}`, this.onTriggerEvent),
            document.addEventListener('click', this.onMenuItemClick);
        }
        unbindEvents() {
          const { graph: t } = this.context,
            { trigger: e } = this.options;
          t.off(`canvas:${e}`, this.onTriggerEvent),
            t.off(`node:${e}`, this.onTriggerEvent),
            t.off(`edge:${e}`, this.onTriggerEvent),
            t.off(`combo:${e}`, this.onTriggerEvent),
            document.removeEventListener('click', this.onMenuItemClick);
        }
        onTriggerEvent = (t) => {
          t.preventDefault?.(), this.show(t);
        };
        onMenuItemClick = (t) => {
          const { onClick: e, trigger: n } = this.options;
          if (
            t.target instanceof HTMLElement &&
            t.target.className.includes('g6-contextmenu-li')
          ) {
            const n = t.target.getAttribute('value');
            e?.(n, t.target), this.hide();
          }
          'click' !== n && this.hide();
        };
      }
      class js extends Ji {
        static defaultOptions = { trigger: {}, autoFit: !0 };
        shortcut;
        style;
        $el = this.context.canvas.getContainer();
        graphSize = [0, 0];
        constructor(t, e) {
          super(t, Object.assign({}, js.defaultOptions, e)),
            (this.shortcut = new Wt(t.graph)),
            this.bindEvents(),
            (this.style = document.createElement('style')),
            document.head.appendChild(this.style),
            (this.style.innerHTML =
              '\n      :not(:root):fullscreen::backdrop {\n        background: transparent;\n      }\n    ');
        }
        bindEvents() {
          this.unbindEvents(), this.shortcut.unbindAll();
          const { request: t = [], exit: e = [] } = this.options.trigger;
          this.shortcut.bind(t, this.request), this.shortcut.bind(e, this.exit);
          [
            'webkitfullscreenchange',
            'mozfullscreenchange',
            'fullscreenchange',
            'MSFullscreenChange',
          ].forEach((t) => {
            document.addEventListener(t, this.onFullscreenChange, !1);
          });
        }
        unbindEvents() {
          this.shortcut.unbindAll();
          [
            'webkitfullscreenchange',
            'mozfullscreenchange',
            'fullscreenchange',
            'MSFullscreenChange',
          ].forEach((t) => {
            document.removeEventListener(t, this.onFullscreenChange, !1);
          });
        }
        setGraphSize(t = !0) {
          let e, n;
          t
            ? ((e = window.screen.width),
              (n = window.screen.height),
              (this.graphSize = this.context.graph.getSize()))
            : ([e, n] = this.graphSize),
            this.context.graph.setSize(e, n),
            this.context.graph.render();
        }
        onFullscreenChange = () => {
          const t = !!document.fullscreenElement;
          this.options.autoFit && this.setGraphSize(t),
            t ? this.options.onEnter?.() : this.options.onExit?.();
        };
        request() {
          !document.fullscreenElement &&
            (document.fullscreenEnabled ||
              Reflect.get(document, 'webkitFullscreenEnabled') ||
              Reflect.get(document, 'mozFullscreenEnabled') ||
              Reflect.get(document, 'msFullscreenEnabled')) &&
            this.$el.requestFullscreen().catch((t) => {
              r.warn(
                `Error attempting to enable full-screen: ${t.message} (${t.name})`,
              );
            });
        }
        exit() {
          document.fullscreenElement && document.exitFullscreen();
        }
        update(t) {
          this.unbindEvents(), super.update(t), this.bindEvents();
        }
        destroy() {
          this.exit(), this.style.remove(), super.destroy();
        }
      }
      class $s extends Ji {
        static defaultOptions = {
          border: !0,
          borderLineWidth: 1,
          borderStroke: '#eee',
          borderStyle: 'solid',
          lineWidth: 1,
          size: 20,
          stroke: '#eee',
        };
        $element = Xi('grid-line');
        offset = [0, 0];
        constructor(t, e) {
          super(t, Object.assign({}, $s.defaultOptions, e));
          !(function (t, e) {
            const n = t.firstChild;
            n ? t.insertBefore(e, n) : t.appendChild(e);
          })(this.context.canvas.getContainer(), this.$element),
            this.updateStyle(),
            this.bindEvents();
        }
        update(t) {
          super.update(t), this.updateStyle();
        }
        bindEvents() {
          const { graph: t } = this.context;
          t.on(O.AFTER_TRANSFORM, this.onTransform);
        }
        updateStyle() {
          const {
            size: t,
            stroke: e,
            lineWidth: n,
            border: i,
            borderLineWidth: s,
            borderStroke: o,
            borderStyle: r,
          } = this.options;
          Object.assign(this.$element.style, {
            border: i ? `${s}px ${r} ${o}` : 'none',
            backgroundImage: `linear-gradient(${e} ${n}px, transparent ${n}px), linear-gradient(90deg, ${e} ${n}px, transparent ${n}px)`,
            backgroundSize: `${t}px ${t}px`,
          });
        }
        updateOffset(t) {
          var e, n;
          (this.offset =
            ((e = ft(this.offset, t)),
            (n = this.options.size),
            e.map((t) => t % n))),
            (this.$element.style.backgroundPosition = `${this.offset[0]}px ${this.offset[1]}px`);
        }
        onTransform = (t) => {
          if (!this.options.follow) return;
          const {
            data: { translate: e },
          } = t;
          e && this.updateOffset(e);
        };
        destroy() {
          this.context.graph.off(O.AFTER_TRANSFORM, this.onTransform),
            this.$element.remove(),
            super.destroy();
        }
      }
      var Zs = n(90494);
      function Hs(t) {
        const e = { Added: new Map(), Updated: new Map(), Removed: new Map() };
        return (
          t.forEach((t) => {
            const { type: n, value: i } = t,
              s = F(i);
            if ('NodeAdded' === n || 'EdgeAdded' === n || 'ComboAdded' === n)
              e.Added.set(s, t);
            else if (
              'NodeUpdated' === n ||
              'EdgeUpdated' === n ||
              'ComboUpdated' === n
            )
              if (e.Added.has(s))
                e.Added.set(s, {
                  type: n.replace('Updated', 'Added'),
                  value: i,
                });
              else if (e.Updated.has(s)) {
                const { original: t } = e.Updated.get(s);
                e.Updated.set(s, { type: n, value: i, original: t });
              } else e.Removed.has(s) || e.Updated.set(s, t);
            else
              ('NodeRemoved' !== n &&
                'EdgeRemoved' !== n &&
                'ComboRemoved' !== n) ||
                (e.Added.has(s)
                  ? e.Added.delete(s)
                  : e.Updated.has(s)
                    ? (e.Updated.delete(s), e.Removed.set(s, t))
                    : e.Removed.set(s, t));
          }),
          [
            ...Array.from(e.Added.values()),
            ...Array.from(e.Updated.values()),
            ...Array.from(e.Removed.values()),
          ]
        );
      }
      function Ws(t) {
        const {
          NodeAdded: e = [],
          NodeUpdated: n = [],
          NodeRemoved: i = [],
          EdgeAdded: s = [],
          EdgeUpdated: o = [],
          EdgeRemoved: r = [],
          ComboAdded: a = [],
          ComboUpdated: c = [],
          ComboRemoved: h = [],
        } = Ce(t, (t) => t.type);
        return {
          add: { nodes: e, edges: s, combos: a },
          update: { nodes: n, edges: o, combos: c },
          remove: { nodes: i, edges: r, combos: h },
        };
      }
      function Vs(t, e) {
        for (const n in t)
          (0, f.Z)(t[n]) && !Array.isArray(t[n]) && null !== t[n]
            ? (e[n] || (e[n] = {}), Vs(t[n], e[n]))
            : e[n] || (e[n] = I(n));
      }
      function Ys(t, e = !1, n) {
        const i = {
            animation: e,
            current: { add: {}, update: {}, remove: {} },
            original: { add: {}, update: {}, remove: {} },
          },
          { add: s, update: o, remove: r } = Ws(Hs(t));
        return (
          ['nodes', 'edges', 'combos'].forEach((t) => {
            o[t] &&
              o[t].forEach((e) => {
                const s = { ...e.value };
                let o = { ...e.original };
                if (n) {
                  const t = n.graph.getElementType(F(e.original)),
                    i = 'edge' === t ? 'stroke' : 'fill',
                    s = n.element.getElementComputedStyle(t, e.original);
                  o = {
                    ...e.original,
                    style: { [i]: s[i], ...e.original.style },
                  };
                }
                Vs(s, o),
                  (i.current.update[t] ||= []),
                  i.current.update[t].push(s),
                  (i.original.update[t] ||= []),
                  i.original.update[t].push(o);
              }),
              s[t] &&
                s[t].forEach((e) => {
                  const n = { ...e.value };
                  (i.current.add[t] ||= []),
                    i.current.add[t].push(n),
                    (i.original.remove[t] ||= []),
                    i.original.remove[t].push(n);
                }),
              r[t] &&
                r[t].forEach((e) => {
                  const n = { ...e.value };
                  (i.current.remove[t] ||= []),
                    i.current.remove[t].push(n),
                    (i.original.add[t] ||= []),
                    i.original.add[t].push(n);
                });
          }),
          i
        );
      }
      class Gs extends Ji {
        static defaultOptions = { stackSize: 0 };
        emitter;
        batchChanges = null;
        batchAnimation = !1;
        undoStack = [];
        redoStack = [];
        freezed = !1;
        constructor(t, e) {
          super(t, Object.assign({}, Gs.defaultOptions, e)),
            (this.emitter = new Zs.Z());
          const { graph: n } = this.context;
          n.on(O.AFTER_DRAW, this.addCommand),
            n.on(O.BATCH_START, this.initBatchCommand),
            n.on(O.BATCH_END, this.addCommand);
        }
        canUndo() {
          return this.undoStack.length > 0;
        }
        canRedo() {
          return this.redoStack.length > 0;
        }
        undo() {
          const t = this.undoStack.pop();
          if (t) {
            this.executeCommand(t);
            const e = this.options.beforeAddCommand?.(t, !1);
            if (!1 === e) return;
            this.redoStack.push(t),
              this.options.afterAddCommand?.(t, !1),
              this.notify(T.UNDO, t);
          }
          return this;
        }
        redo() {
          const t = this.redoStack.pop();
          return (
            t &&
              (this.executeCommand(t, !1),
              this.undoStackPush(t),
              this.notify(T.REDO, t)),
            this
          );
        }
        undoAndCancel() {
          const t = this.undoStack.pop();
          return (
            t &&
              (this.executeCommand(t, !1),
              (this.redoStack = []),
              this.notify(T.CANCEL, t)),
            this
          );
        }
        executeCommand = (t, e = !0) => {
          (this.freezed = !0), this.options.executeCommand?.(t);
          const n = e ? t.original : t.current;
          this.context.graph.addData(n.add),
            this.context.graph.updateData(n.update),
            this.context.graph.removeData(j(n.remove, !1)),
            this.context.element?.draw({ silence: !0, animation: t.animation }),
            (this.freezed = !1);
        };
        addCommand = (t) => {
          if (!this.freezed) {
            if (t.type === O.AFTER_DRAW) {
              const { dataChanges: e = [], animation: n = !0 } = t.data;
              if (this.context.batch?.isBatching) {
                if (!this.batchChanges) return;
                return (
                  this.batchChanges.push(e), void (this.batchAnimation &&= n)
                );
              }
              (this.batchChanges = [e]), (this.batchAnimation = n);
            }
            this.undoStackPush(
              Ys(this.batchChanges.flat(), this.batchAnimation, this.context),
            ),
              this.notify(T.ADD, this.undoStack[this.undoStack.length - 1]);
          }
        };
        initBatchCommand = (t) => {
          const { initiate: e } = t.data;
          if (((this.batchAnimation = !1), e)) this.batchChanges = [];
          else {
            this.undoStack.pop() || (this.batchChanges = null);
          }
        };
        undoStackPush(t) {
          const { stackSize: e } = this.options;
          0 !== e && this.undoStack.length >= e && this.undoStack.shift();
          const n = this.options.beforeAddCommand?.(t, !0);
          !1 !== n &&
            (this.undoStack.push(t), this.options.afterAddCommand?.(t, !0));
        }
        clear() {
          (this.undoStack = []),
            (this.redoStack = []),
            (this.batchChanges = null),
            (this.batchAnimation = !1),
            this.notify(T.CLEAR, null);
        }
        notify(t, e) {
          this.emitter.emit(t, { cmd: e }),
            this.emitter.emit(T.CHANGE, { cmd: e });
        }
        on(t, e) {
          this.emitter.on(t, e);
        }
        destroy() {
          const { graph: t } = this.context;
          t.off(O.AFTER_DRAW, this.addCommand),
            t.off(O.BATCH_START, this.initBatchCommand),
            t.off(O.BATCH_END, this.addCommand),
            this.emitter.off(),
            super.destroy(),
            (this.undoStack = []),
            (this.redoStack = []);
        }
      }
      var Us = n(1344),
        Ks = n.n(Us);
      const Xs = (t, e, n) => {
          if ('sharp' === n)
            return [
              ['M', t[0] - e, t[1] - e],
              ['L', t[0] + e, t[1] - e],
              ['L', t[0] + e, t[1] + e],
              ['L', t[0] - e, t[1] + e],
              ['Z'],
            ];
          const i = [e, e, 0, 0, 0];
          return [
            ['M', t[0], t[1] - e],
            ['A', ...i, t[0], t[1] + e],
            ['A', ...i, t[0], t[1] - e],
          ];
        },
        qs = (t, e, n) => {
          const i = [e, e, 0, 0, 0],
            s = 'sharp' === n ? ft(t[0], Et(wt(mt(t[0], t[1])), e)) : t[0],
            o = 'sharp' === n ? ft(t[1], Et(wt(mt(t[1], t[0])), e)) : t[1],
            r = Et(wt(Ct(mt(s, o), !1)), e),
            a = Et(r, -1),
            c = ft(s, r),
            h = ft(o, r),
            l = ft(o, a),
            d = ft(s, a);
          return 'sharp' === n
            ? [
                ['M', c[0], c[1]],
                ['L', h[0], h[1]],
                ['L', l[0], l[1]],
                ['L', d[0], d[1]],
                ['Z'],
              ]
            : [
                ['M', c[0], c[1]],
                ['L', h[0], h[1]],
                ['A', ...i, l[0], l[1]],
                ['L', d[0], d[1]],
                ['A', ...i, c[0], c[1]],
              ];
        },
        Js = (t, e) => {
          const n = $t(t).map((n, i) => {
              const s = (i - 2 + t.length) % t.length,
                o = (i - 1 + t.length) % t.length,
                r = (i + 1) % t.length,
                a = t[s],
                c = t[o],
                h = t[r],
                l = mt(a, c),
                d = mt(c, n),
                u = mt(n, h),
                p = (t, e) => St(t, e, !0) < Math.PI,
                g = p(l, d),
                f = p(d, u),
                m = (t) => Et(wt(Ct(t, !1)), e),
                y = m(d);
              return [
                { p: Ot(ft(c, g ? m(l) : y)), concave: g && c },
                { p: Ot(ft(n, f ? m(u) : y)), concave: f && n },
              ];
            }),
            i = [e, e, 0, 0, 0],
            s = n.findIndex(
              (t, e) =>
                !(
                  n[(e - 1 + n.length) % n.length][0].concave ||
                  n[(e - 1 + n.length) % n.length][1].concave ||
                  t[0].concave ||
                  t[0].concave ||
                  t[1].concave
                ),
            ),
            o = n.slice(s).concat(n.slice(0, s));
          let r = [];
          return o.flatMap((t, e) => {
            const s = [],
              a = o[n.length - 1];
            return (
              0 === e && s.push(['M', ...a[1].p]),
              t[0].concave
                ? r.push(t[0].p, t[1].p)
                : s.push(['A', ...i, ...t[0].p]),
              t[1].concave ? r.unshift(t[1].p) : s.push(['L', ...t[1].p]),
              3 === r.length && (s.pop(), s.push(['C', ...r.flat()]), (r = [])),
              s
            );
          });
        },
        Qs = (t, e) => {
          const n = $t(t).map((e, n) => ({
            p: e,
            v: wt(mt(t[(n + 1) % t.length], e)),
          }));
          return (
            n.forEach((i, s) => {
              const o = s > 0 ? s - 1 : t.length - 1,
                r = n[o].v,
                a = wt(ft(r, Et(i.v, St(r, i.v, !0) < Math.PI ? 1 : -1)));
              i.p = ft(i.p, Et(a, e));
            }),
            We(n.map((t) => t.p))
          );
        },
        to = (t, e) => {
          const n = t
            .map((n, i) => {
              const s = t[0 === i ? t.length - 1 : i - 1],
                o = Tt(Et(wt(Ct(mt(s, n), !1)), e));
              return [ft(s, o), ft(n, o)];
            })
            .flat();
          return n
            .map((t, e) => {
              if (e % 2 == 0) return null;
              return Dt(
                [n[(e - 1) % n.length], n[e % n.length]],
                [n[(e + 1) % n.length], n[(e + 2) % n.length]],
                !0,
              );
            })
            .filter(Boolean)
            .map((t, e) => [0 === e ? 'M' : 'L', t[0], t[1]])
            .concat([['Z']]);
        };
      class eo extends Ji {
        shape;
        hullMemberIds = [];
        path;
        optionsCache;
        static defaultOptions = {
          members: [],
          padding: 10,
          corner: 'rounded',
          concavity: 1 / 0,
          fill: 'lightblue',
          fillOpacity: 0.2,
          labelOpacity: 1,
          stroke: 'blue',
          strokeOpacity: 0.2,
        };
        constructor(t, e) {
          super(t, Object.assign({}, eo.defaultOptions, e)), this.bindEvents();
        }
        bindEvents() {
          this.context.graph.on(O.AFTER_RENDER, this.drawHull),
            this.context.graph.on(O.AFTER_ELEMENT_UPDATE, this.updateHullPath);
        }
        getHullStyle(t) {
          const { members: e, padding: n, corner: i, ...s } = this.options;
          return { ...s, d: this.getHullPath(t) };
        }
        drawHull = () => {
          if (this.shape) {
            const t = !g(this.optionsCache, this.options);
            this.shape.update(this.getHullStyle(t));
          } else
            (this.shape = new Ye({ style: this.getHullStyle() })),
              this.context.canvas.appendChild(this.shape);
          this.optionsCache = { ...this.options };
        };
        updateHullPath = (t) => {
          this.shape &&
            this.options.members.includes(F(t.data)) &&
            this.shape.update({ d: this.getHullPath(!0) });
        };
        getHullPath = (t = !1) => {
          const { graph: e } = this.context,
            n = this.getMember();
          if (0 === n.length) return '';
          const i = n.map((t) => e.getNodeData(t)),
            s = Ks()(i.map(Mt), this.options.concavity).slice(1).reverse(),
            o = s.flatMap((t) => i.filter((e) => g(Mt(e), t)).map(F));
          return (
            (g(o, this.hullMemberIds) && !t) ||
              ((this.hullMemberIds = o),
              (this.path = (function (t, e, n) {
                if (1 === t.length) return Xs(t[0], e, n);
                if (2 === t.length) return qs(t, e, n);
                switch (n) {
                  case 'smooth':
                    return Qs(t, e);
                  case 'sharp':
                    return to(t, e);
                  default:
                    return Js(t, e);
                }
              })(s, this.getPadding(), this.options.corner))),
            this.path
          );
        };
        getPadding() {
          const { graph: t } = this.context;
          return (
            this.hullMemberIds.reduce((e, n) => {
              const { halfExtents: i } = t.getElementRenderBounds(n),
                s = Math.max(i[0], i[1]);
              return Math.max(e, s);
            }, 0) + this.options.padding
          );
        }
        addMember(t) {
          const e = Array.isArray(t) ? t : [t];
          (this.options.members = [
            ...new Set([...this.options.members, ...e]),
          ]),
            this.shape.update({ d: this.getHullPath() });
        }
        removeMember(t) {
          const e = Array.isArray(t) ? t : [t];
          (this.options.members = this.options.members.filter(
            (t) => !e.includes(t),
          )),
            e.some((t) => this.hullMemberIds.includes(t)) &&
              this.shape.update({ d: this.getHullPath() });
        }
        updateMember(t) {
          (this.options.members = (0, tt.Z)(t) ? t(this.options.members) : t),
            this.shape.update(this.getHullStyle(!0));
        }
        getMember() {
          return this.options.members;
        }
        destroy() {
          this.context.graph.off(O.AFTER_DRAW, this.drawHull),
            this.shape.destroy(),
            (this.hullMemberIds = []),
            super.destroy();
        }
      }
      var no = n(64493),
        io = n(29392);
      class so extends Ji {
        static defaultOptions = {
          position: 'bottom',
          trigger: 'hover',
          orientation: 'horizontal',
          layout: 'flex',
          itemSpacing: 4,
          rowPadding: 10,
          colPadding: 10,
          itemMarkerSize: 16,
          itemLabelFontSize: 16,
        };
        typePrefix = '__data__';
        element = null;
        draw = !1;
        fieldMap = { node: new Map(), edge: new Map(), combo: new Map() };
        selectedItems = [];
        constructor(t, e) {
          super(t, Object.assign({}, so.defaultOptions, e)), this.bindEvents();
        }
        update(t) {
          super.update(t), this.clear(), this.createElement();
        }
        clear() {
          this.element?.destroy(), (this.element = null), (this.draw = !1);
        }
        bindEvents = () => {
          const { graph: t } = this.context;
          t.on(O.AFTER_DRAW, this.createElement);
        };
        changeState = (t, e) => {
          const { graph: n } = this.context,
            { typePrefix: i } = this,
            s = ee(t, [i, 'id']),
            o = ee(t, [i, 'style', 'labelText']),
            [r] = s.split('__'),
            a = this.fieldMap[r].get(o) || [];
          n.setElementState(Object.fromEntries(a?.map((t) => [t, e])));
        };
        click = (t) => {
          if ('hover' === this.options.trigger) return;
          const e = ee(t, [this.typePrefix, 'id']);
          this.selectedItems.includes(e)
            ? ((this.selectedItems = this.selectedItems.filter((t) => t !== e)),
              this.changeState(t, []))
            : (this.selectedItems.push(e), this.changeState(t, 'selected'));
        };
        mouseleave = (t) => {
          'click' !== this.options.trigger &&
            ((this.selectedItems = []), this.changeState(t, []));
        };
        mouseenter = (t) => {
          if ('click' === this.options.trigger) return;
          const e = ee(t, [this.typePrefix, 'id']);
          this.selectedItems.includes(e)
            ? (this.selectedItems = this.selectedItems.filter((t) => t !== e))
            : (this.selectedItems.push(e), this.changeState(t, 'active'));
        };
        updateElement() {
          if (!this.element) return;
          this.element
            .getChildByIndex(0)
            .update({
              itemMarkerOpacity: ({ id: t }) =>
                !this.selectedItems.length || this.selectedItems.includes(t)
                  ? 1
                  : 0.5,
              itemLabelOpacity: ({ id: t }) =>
                !this.selectedItems.length || this.selectedItems.includes(t)
                  ? 1
                  : 0.5,
            });
        }
        setFieldMap = (t, e, n) => {
          if (!t) return;
          const i = this.fieldMap[n];
          if (i)
            if (i.has(t)) {
              const n = i.get(t);
              n && (n.push(e), i.set(t, n));
            } else i.set(t, [e]);
        };
        getEvents = () => ({
          mouseenter: this.mouseenter,
          mouseleave: this.mouseleave,
          click: this.click,
        });
        getMarkerData = (t, e) => {
          if (!t) return [];
          const { model: n, element: i, graph: s } = this.context,
            { nodes: o, edges: r, combos: a } = n.getData(),
            c = {},
            h = (e) => ((0, tt.Z)(t) ? t(e) : t),
            l = { node: 'circle', edge: 'line', combo: 'rect' },
            d = {
              circle: 'circle',
              ellipse: 'circle',
              image: 'bowtie',
              rect: 'square',
              star: 'cross',
              triangle: 'triangle',
              diamond: 'diamond',
              cubic: 'dot',
              line: 'hyphen',
              polyline: 'hyphen',
              quadratic: 'hv',
              'cubic-horizontal': 'hyphen',
              'cubic-vertical': 'line',
            },
            u = (t, e) => {
              t.forEach((t) => {
                const { id: n } = t,
                  s = ee(t, ['data', h(t)]),
                  o = i?.getElementType(e, t) || 'circle',
                  r = ((t, e) => {
                    const n = i?.getElementComputedStyle(t, e);
                    return n;
                  })(e, t),
                  a = ('edge' === e ? r?.stroke : r?.fill) || '#1783ff';
                n &&
                  s &&
                  s.replace(/\s+/g, '') &&
                  (this.setFieldMap(s, n, e),
                  c[s] ||
                    (c[s] = {
                      id: `${e}__${n}`,
                      label: s,
                      marker: d[o] || l[e],
                      elementType: e,
                      lineWidth: 1,
                      stroke: a,
                      fill: a,
                    }));
              });
            };
          switch (e) {
            case 'node':
              u(o, 'node');
              break;
            case 'edge':
              u(r, 'edge');
              break;
            case 'combo':
              u(a, 'combo');
              break;
            default:
              return [];
          }
          return Object.values(c);
        };
        layout = (t) => {
          let {
            flexDirection: e,
            alignItems: n,
            justifyContent: i,
          } = {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
          };
          const s = {
            top: ['row', 'flex-start', 'center'],
            bottom: ['row', 'flex-end', 'center'],
            left: ['column', 'flex-start', 'center'],
            right: ['column', 'flex-end', 'center'],
          };
          return (
            t in s && ([e, n, i] = s[t]),
            {
              display: 'flex',
              flexDirection: e,
              justifyContent: i,
              alignItems: n,
            }
          );
        };
        createElement = () => {
          if (this.draw) return void this.updateElement();
          const { canvas: t } = this.context,
            [e, n] = t.getSize(),
            {
              width: i = e,
              height: s = n,
              nodeField: o,
              edgeField: r,
              comboField: a,
              trigger: c,
              position: h,
              ...l
            } = this.options,
            d = this.getMarkerData(o, 'node'),
            u = this.getMarkerData(r, 'edge'),
            p = this.getMarkerData(a, 'combo'),
            g = [...d, ...p, ...u],
            f = this.layout(h),
            m = new no.A({ style: { width: i, height: s, ...f } }),
            y = Object.assign(
              {
                width: i,
                height: s,
                data: g,
                itemMarkerLineWidth: ({ lineWidth: t }) => t,
                itemMarker: ({ marker: t }) => t,
                itemMarkerStroke: ({ stroke: t }) => t,
                itemMarkerFill: ({ fill: t }) => t,
                gridCol: d.length,
              },
              l,
              this.getEvents(),
            ),
            b = new io.W({ className: 'legend', style: y });
          m.appendChild(b),
            t.appendChild(m),
            (this.element = m),
            (this.draw = !0);
        };
        destroy() {
          this.clear(),
            this.context.graph.off(O.AFTER_DRAW, this.createElement),
            super.destroy();
        }
      }
      var oo = n(97582),
        ro = n(12267),
        ao = n(5951),
        co = n(8126),
        ho = n(43629),
        lo = n(33016);
      function uo(t, e) {
        var n = {
            YYYY: t.getFullYear(),
            MM: t.getMonth() + 1,
            DD: t.getDate(),
            HH: t.getHours(),
            mm: t.getMinutes(),
            ss: t.getSeconds(),
          },
          i = e;
        return (
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            i = i.replace(
              t,
              'YYYY' === t ? ''.concat(e) : ''.concat(e).padStart(2, '0'),
            );
          }),
          i
        );
      }
      var po = n(73321),
        go = n(92896),
        fo = n(62191),
        mo = n(24886),
        yo = n(27840);
      var bo = function (t, e) {
          if (t)
            if ((0, mo.Z)(t))
              for (var n = 0, i = t.length; n < i && !1 !== e(t[n], n); n++);
            else if ((0, yo.Z)(t))
              for (var s in t)
                if (t.hasOwnProperty(s) && !1 === e(t[s], s)) break;
        },
        Eo = n(101),
        xo = function (t, e, n) {
          if (!(0, mo.Z)(t) && !(0, Eo.Z)(t)) return t;
          var i = n;
          return (
            bo(t, function (t, n) {
              i = e(i, t, n);
            }),
            i
          );
        },
        vo = n(54015),
        wo = n(34819),
        So = n(75494),
        Co = n(62059),
        Oo = (function (t) {
          function e(n) {
            var i = t.call(this, (0, co.n)({}, e.defaultOptions, n)) || this;
            return (
              (i.hoverColor = '#f5f5f5'),
              (i.selectedColor = '#e6f7ff'),
              (i.background = i.appendChild(new s.UL({}))),
              (i.label = i.background.appendChild(new s.ZA({}))),
              i
            );
          }
          return (
            (0, oo.ZT)(e, t),
            Object.defineProperty(e.prototype, 'padding', {
              get: function () {
                return (0, fo.j)(this.style.padding);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.renderLabel = function () {
              var t = this.style,
                e = t.label,
                n = t.value,
                i = (0, lo.zs)(this.attributes, 'label');
              (0, vo.Ys)(this.label)
                .maybeAppend('.label', function () {
                  return (0, So.S)(e);
                })
                .attr('className', 'label')
                .styles(i),
                this.label.attr('__data__', n);
            }),
            (e.prototype.renderBackground = function () {
              var t = this.label.getBBox(),
                e = (0, oo.CR)(this.padding, 4),
                n = e[0],
                i = e[1],
                s = e[2],
                o = e[3],
                r = t.width,
                a = t.height,
                c = r + o + i,
                h = a + n + s,
                l = (0, lo.zs)(this.attributes, 'background'),
                d = this.style,
                u = d.width,
                p = void 0 === u ? 0 : u,
                g = d.height,
                f = void 0 === g ? 0 : g,
                m = d.selected;
              this.background.attr(
                (0, oo.pi)((0, oo.pi)({}, l), {
                  width: Math.max(c, p),
                  height: Math.max(h, f),
                  fill: m ? this.selectedColor : '#fff',
                }),
              ),
                this.label.attr({
                  transform: 'translate('
                    .concat(o, ', ')
                    .concat((h - a) / 2, ')'),
                });
            }),
            (e.prototype.render = function () {
              this.renderLabel(), this.renderBackground();
            }),
            (e.prototype.bindEvents = function () {
              var t = this;
              this.addEventListener('pointerenter', function () {
                t.style.selected || t.background.attr('fill', t.hoverColor);
              }),
                this.addEventListener('pointerleave', function () {
                  t.style.selected ||
                    t.background.attr('fill', t.style.backgroundFill);
                });
              var e = this;
              this.addEventListener('click', function () {
                var n = t.style,
                  i = n.label,
                  s = n.value,
                  o = n.onClick;
                null == o || o(s, { label: i, value: s }, e);
              });
            }),
            (e.defaultOptions = {
              style: { value: '', label: '', cursor: 'pointer' },
            }),
            e
          );
        })(ao.w),
        To = (function (t) {
          function e(n) {
            var i,
              o,
              r = t.call(this, (0, co.n)({}, e.defaultOptions, n)) || this;
            (r.currentValue =
              null === (i = e.defaultOptions.style) || void 0 === i
                ? void 0
                : i.defaultValue),
              (r.isPointerInSelect = !1),
              (r.select = r.appendChild(
                new s.UL({
                  className: 'select',
                  style: { cursor: 'pointer', width: 0, height: 0 },
                }),
              )),
              (r.dropdown = r.appendChild(new s.UL({ className: 'dropdown' })));
            var a = r.style.defaultValue;
            return (
              a &&
                (null === (o = r.style.options) || void 0 === o
                  ? void 0
                  : o.some(function (t) {
                      return t.value === a;
                    })) &&
                (r.currentValue = a),
              r
            );
          }
          return (
            (0, oo.ZT)(e, t),
            (e.prototype.setValue = function (t) {
              (this.currentValue = t), this.render();
            }),
            (e.prototype.getValue = function () {
              return this.currentValue;
            }),
            Object.defineProperty(e.prototype, 'dropdownPadding', {
              get: function () {
                return (0, fo.j)(this.style.dropdownPadding);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.renderSelect = function () {
              var t,
                e = this,
                n = this.style,
                i = n.x,
                s = n.y,
                o = n.width,
                r = n.height,
                a = n.bordered,
                c = n.showDropdownIcon,
                h = (0, lo.zs)(this.attributes, 'select'),
                l = (0, lo.zs)(this.attributes, 'placeholder');
              this.select.attr(
                (0, oo.pi)((0, oo.pi)({ x: i, y: s, width: o, height: r }, h), {
                  fill: '#fff',
                  strokeWidth: a ? 1 : 0,
                }),
              );
              var d = this.dropdownPadding;
              c &&
                (0, vo.Ys)(this.select)
                  .maybeAppend('.dropdown-icon', 'path')
                  .style('d', 'M-5,-3.5 L0,3.5 L5,-3.5')
                  .style(
                    'transform',
                    'translate('
                      .concat(i + o - 10 - d[1] - d[3], ', ')
                      .concat(s + r / 2, ')'),
                  )
                  .style('lineWidth', 1)
                  .style('stroke', this.select.style.stroke);
              var u =
                  null === (t = this.style.options) || void 0 === t
                    ? void 0
                    : t.find(function (t) {
                        return t.value === e.currentValue;
                      }),
                p = (0, oo.pi)({ x: i + d[3] }, l);
              (0, vo.Ys)(this.select)
                .selectAll('.placeholder')
                .data(u ? [] : [1])
                .join(
                  function (t) {
                    return t
                      .append('text')
                      .attr('className', 'placeholder')
                      .styles(p)
                      .style('y', function () {
                        var t = this.getBBox();
                        return s + (r - t.height) / 2;
                      });
                  },
                  function (t) {
                    return t.styles(p);
                  },
                  function (t) {
                    return t.remove();
                  },
                );
              var g = (0, lo.zs)(this.attributes, 'optionLabel'),
                f = (0, oo.pi)({ x: i + d[3] }, g);
              (0, vo.Ys)(this.select)
                .selectAll('.value')
                .data(u ? [u] : [])
                .join(
                  function (t) {
                    return t
                      .append(function (t) {
                        return (0, So.S)(t.label);
                      })
                      .attr('className', 'value')
                      .styles(f)
                      .style('y', function () {
                        var t = this.getBBox();
                        return s + (r - t.height) / 2;
                      });
                  },
                  function (t) {
                    return t.styles(f);
                  },
                  function (t) {
                    return t.remove();
                  },
                );
            }),
            (e.prototype.renderDropdown = function () {
              var t,
                e,
                n = this,
                i = this.style,
                o = i.x,
                r = i.y,
                a = i.width,
                c = i.height,
                h = i.options,
                l = i.onSelect,
                d = i.open,
                u = (0, lo.zs)(this.attributes, 'dropdown'),
                p = (0, lo.zs)(this.attributes, 'option'),
                g = this.dropdownPadding;
              (0, vo.Ys)(this.dropdown)
                .maybeAppend('.dropdown-container', 'g')
                .attr('className', 'dropdown-container')
                .selectAll('.dropdown-item')
                .data(h, function (t) {
                  return t.value;
                })
                .join(
                  function (t) {
                    return t
                      .append(function (t) {
                        return new Oo({
                          className: 'dropdown-item',
                          style: (0, oo.pi)((0, oo.pi)((0, oo.pi)({}, t), p), {
                            width: a - g[1] - g[3],
                            selected: t.value === n.currentValue,
                            onClick: function (t, e, i) {
                              n.setValue(t),
                                null == l || l(t, e, i),
                                n.dispatchEvent(
                                  new s.Aw('change', {
                                    detail: { value: t, option: e, item: i },
                                  }),
                                ),
                                (0, Co.Cp)(n.dropdown);
                            },
                          }),
                        });
                      })
                      .each(function (t, e) {
                        var n,
                          i = (
                            null === (n = this.parentNode) || void 0 === n
                              ? void 0
                              : n.children
                          ).reduce(function (t, n, i) {
                            return i < e && (t += n.getBBox().height), t;
                          }, 0);
                        this.attr(
                          'transform',
                          'translate('.concat(g[3], ', ').concat(g[0] + i, ')'),
                        );
                      });
                  },
                  function (t) {
                    return t.update(function (t) {
                      return { selected: t.value === n.currentValue };
                    });
                  },
                  function (t) {
                    return t.remove();
                  },
                );
              var f =
                  null ===
                    (e =
                      null ===
                        (t =
                          this.dropdown.getElementsByClassName(
                            'dropdown-container',
                          )) || void 0 === t
                        ? void 0
                        : t[0]) || void 0 === e
                    ? void 0
                    : e.getBBox(),
                m = u.spacing;
              this.dropdown.attr(
                (0, oo.pi)(
                  {
                    transform: 'translate('
                      .concat(o, ', ')
                      .concat(r + c + m, ')'),
                    width: f.width + g[1] + g[3],
                    height: f.height + g[0] + g[2],
                  },
                  u,
                ),
              ),
                !d && (0, Co.Cp)(this.dropdown);
            }),
            (e.prototype.render = function () {
              this.renderSelect(), this.renderDropdown();
            }),
            (e.prototype.bindEvents = function () {
              var t = this;
              this.addEventListener('click', function (t) {
                t.stopPropagation();
              }),
                this.select.addEventListener('click', function () {
                  'visible' === t.dropdown.style.visibility
                    ? (0, Co.Cp)(t.dropdown)
                    : (0, Co.$Z)(t.dropdown);
                }),
                this.addEventListener('pointerenter', function () {
                  t.isPointerInSelect = !0;
                }),
                this.addEventListener('pointerleave', function () {
                  t.isPointerInSelect = !1;
                }),
                null === document ||
                  void 0 === document ||
                  document.addEventListener('click', function () {
                    t.isPointerInSelect || (0, Co.Cp)(t.dropdown);
                  });
            }),
            (e.defaultOptions = {
              style: {
                x: 0,
                y: 0,
                width: 140,
                height: 32,
                options: [],
                bordered: !0,
                defaultValue: '',
                selectRadius: 8,
                selectStroke: '#d9d9d9',
                showDropdownIcon: !0,
                placeholderText: '请选择',
                placeholderFontSize: 12,
                placeholderTextBaseline: 'top',
                placeholderFill: '#c2c2c2',
                dropdownFill: '#fff',
                dropdownStroke: '#d9d9d9',
                dropdownRadius: 8,
                dropdownShadowBlur: 4,
                dropdownShadowColor: 'rgba(0, 0, 0, 0.08)',
                dropdownPadding: 8,
                dropdownSpacing: 10,
                optionPadding: [8, 12],
                optionFontSize: 12,
                optionTextBaseline: 'top',
                optionBackgroundFill: '#fff',
                optionBackgroundRadius: 4,
                optionLabelFontSize: 12,
                optionLabelTextBaseline: 'top',
              },
            }),
            e
          );
        })(ao.w),
        Ao = (function (t) {
          function e(n) {
            var i =
              t.call(
                this,
                (0, co.n)(
                  {},
                  {
                    style: { backgroundOpacity: e.backgroundOpacities.default },
                  },
                  e.defaultOptions,
                  n,
                ),
              ) || this;
            return (
              (i.showBackground = !0),
              (i.background = i.appendChild(new s.UL({}))),
              (i.icon = i.appendChild(new s.ZA({}))),
              i
            );
          }
          return (
            (0, oo.ZT)(e, t),
            Object.defineProperty(e.prototype, 'label', {
              get: function () {
                return 'BaseIcon';
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'lineWidth', {
              get: function () {
                return Math.log10(this.attributes.size);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'padding', {
              get: function () {
                return (0, fo.j)(this.attributes.size / 5);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'iconSize', {
              get: function () {
                var t = this.attributes.size,
                  e = (0, oo.CR)(this.padding, 4),
                  n = e[0],
                  i = e[1],
                  s = e[2],
                  o = e[3];
                return Math.max(
                  t - Math.max(o + i, n + s),
                  2 * this.lineWidth + 1,
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.renderBackground = function () {
              var t = this.attributes,
                e = t.x,
                n = t.y,
                i = t.size,
                s = i / 2,
                o = (0, lo.zs)(this.attributes, 'background');
              this.background.attr(
                (0, oo.pi)({ x: e - s, y: n - s, width: i, height: i }, o),
              );
            }),
            (e.prototype.showIndicator = function () {
              if (this.label) {
                var t = this.attributes.size,
                  e = this.background.getBBox(),
                  n = e.x,
                  i = e.y;
                this.indicator.update({
                  x: n + t / 2,
                  y: i - 5,
                  labelText: this.label,
                  visibility: 'visible',
                });
              }
            }),
            (e.prototype.hideIndicator = function () {
              this.indicator.update({ visibility: 'hidden' });
            }),
            (e.prototype.connectedCallback = function () {
              var e;
              t.prototype.connectedCallback.call(this);
              var n = this.attributes.size,
                i = this.background.getBBox(),
                s = i.x,
                o = i.y,
                r =
                  null === (e = this.ownerDocument) || void 0 === e
                    ? void 0
                    : e.defaultView;
              r &&
                (this.indicator = r.appendChild(
                  new wo.z({
                    style: {
                      x: s + n / 2,
                      y: o - n / 2,
                      visibility: 'hidden',
                      position: 'top',
                      radius: 3,
                      zIndex: 100,
                    },
                  }),
                ));
            }),
            (e.prototype.disconnectedCallback = function () {
              this.indicator.destroy();
            }),
            (e.prototype.render = function () {
              this.renderIcon(), this.showBackground && this.renderBackground();
            }),
            (e.prototype.bindEvents = function () {
              var t = this,
                n = this.attributes.onClick;
              if (
                (this.addEventListener('click', function () {
                  null == n || n(t);
                }),
                this.showBackground)
              ) {
                var i = function () {
                  return t.background.attr({
                    opacity: e.backgroundOpacities.default,
                  });
                };
                this.addEventListener('pointerenter', function () {
                  t.background.attr({ opacity: e.backgroundOpacities.hover }),
                    t.showIndicator();
                }),
                  this.addEventListener('pointerleave', function () {
                    i(), t.hideIndicator();
                  }),
                  this.addEventListener('pointerdown', function () {
                    t.background.attr({
                      opacity: e.backgroundOpacities.active,
                    });
                  }),
                  this.addEventListener('pointerup', function () {
                    i();
                  });
              }
            }),
            (e.tag = 'IconBase'),
            (e.defaultOptions = {
              style: {
                x: 0,
                y: 0,
                size: 10,
                color: '#565758',
                backgroundRadius: 4,
                backgroundFill: '#e2e2e2',
              },
            }),
            (e.backgroundOpacities = { default: 0, hover: 0.8, active: 1 }),
            e
          );
        })(ao.w),
        Do = function (t, e) {
          return (
            void 0 === e && (e = '#565758'),
            new s.y$({
              style: {
                fill: e,
                d: 'M '
                  .concat(t, ',')
                  .concat(t, ' L -')
                  .concat(t, ',0 L ')
                  .concat(t, ',-')
                  .concat(t, ' Z'),
                transformOrigin: 'center',
              },
            })
          );
        },
        Mo = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, oo.ZT)(e, t),
            (e.prototype.arcPath = function (t, e, n) {
              var i = (0, oo.CR)([n, n], 2),
                s = i[0],
                o = i[1],
                r = function (i) {
                  return [t + n * Math.cos(i), e + n * Math.sin(i)];
                },
                a = (0, oo.CR)(r((-5 / 4) * Math.PI), 2),
                c = a[0],
                h = a[1],
                l = (0, oo.CR)(r((1 / 4) * Math.PI), 2),
                d = l[0],
                u = l[1];
              return 'M'
                .concat(c, ',')
                .concat(h, ',A')
                .concat(s, ',')
                .concat(o, ',0,1,1,')
                .concat(d, ',')
                .concat(u);
            }),
            Object.defineProperty(e.prototype, 'label', {
              get: function () {
                return '重置';
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.renderIcon = function () {
              var t = this.attributes,
                e = t.x,
                n = t.y,
                i = t.color,
                s = this.iconSize,
                o = this.lineWidth,
                r = o + 0.5;
              (0, vo.Ys)(this.icon)
                .maybeAppend('.reset', 'path')
                .styles({
                  stroke: i,
                  lineWidth: o,
                  d: this.arcPath(e, n, s / 2 - o),
                  markerStart: Do(r, i),
                });
            }),
            e
          );
        })(Ao),
        Ro = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, oo.ZT)(e, t),
            Object.defineProperty(e.prototype, 'label', {
              get: function () {
                return '快退';
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.renderIcon = function () {
              var t = this.attributes,
                e = t.x,
                n = t.y,
                i = t.color,
                s = this.iconSize,
                o = s / 2,
                r = s / 2 / Math.pow(3, 0.5),
                a = [
                  [e, n],
                  [e, n - r],
                  [e - o, n],
                  [e, n + r],
                  [e, n],
                  [e + o, n - r],
                  [e + o, n + r],
                  [e, n],
                ];
              (0, vo.Ys)(this.icon)
                .maybeAppend('.backward', 'polygon')
                .styles({ points: a, fill: i });
            }),
            e
          );
        })(Ao),
        Po = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, oo.ZT)(e, t),
            Object.defineProperty(e.prototype, 'label', {
              get: function () {
                return '快进';
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.renderIcon = function () {
              var t = this.attributes,
                e = t.x,
                n = t.y,
                i = t.color,
                s = this.iconSize,
                o = s / 2,
                r = s / 2 / Math.pow(3, 0.5),
                a = [
                  [e, n],
                  [e, n - r],
                  [e + o, n],
                  [e, n + r],
                  [e, n],
                  [e - o, n - r],
                  [e - o, n + r],
                  [e, n],
                ];
              (0, vo.Ys)(this.icon)
                .maybeAppend('.forward', 'polygon')
                .styles({ points: a, fill: i });
            }),
            e
          );
        })(Ao),
        ko = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, oo.ZT)(e, t),
            Object.defineProperty(e.prototype, 'label', {
              get: function () {
                return '播放';
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.renderIcon = function () {
              var t = this.attributes,
                e = t.x,
                n = t.y,
                i = t.color,
                s = this.iconSize,
                o = (s / 3) * Math.pow(3, 0.5) * 0.8,
                r = [
                  [e + o, n],
                  [e - o / 2, n - (s / 2) * 0.8],
                  [e - o / 2, n + (s / 2) * 0.8],
                  [e + o, n],
                ];
              (0, vo.Ys)(this.icon)
                .maybeAppend('.play', 'polygon')
                .styles({ points: r, fill: i });
            }),
            e
          );
        })(Ao),
        No = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, oo.ZT)(e, t),
            Object.defineProperty(e.prototype, 'label', {
              get: function () {
                return '暂停';
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.renderIcon = function () {
              var t = this.attributes,
                e = t.x,
                n = t.y,
                i = t.color,
                s = this.iconSize,
                o = s / 3,
                r = [
                  [e - o, n - s / 2],
                  [e - o, n + s / 2],
                  [e - o / 2, n + s / 2],
                  [e - o / 2, n - s / 2],
                  [e - o, n - s / 2],
                  [e + o / 2, n - s / 2],
                  [e + o / 2, n + s / 2],
                  [e + o, n + s / 2],
                  [e + o, n - s / 2],
                ];
              (0, vo.Ys)(this.icon)
                .maybeAppend('.pause', 'polygon')
                .styles({ points: r, fill: i });
            }),
            e
          );
        })(Ao),
        Io = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, oo.ZT)(e, t),
            Object.defineProperty(e.prototype, 'label', {
              get: function () {
                return '范围时间';
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.renderIcon = function () {
              var t = this.attributes,
                e = t.x,
                n = t.y,
                i = t.color,
                s = this.iconSize,
                o = this.lineWidth,
                r = o;
              (0, vo.Ys)(this.icon)
                .maybeAppend('.left-line', 'line')
                .styles({
                  x1: e - s / 2,
                  y1: n - s / 2,
                  x2: e - s / 2,
                  y2: n + s / 2,
                  stroke: i,
                  lineWidth: o,
                }),
                (0, vo.Ys)(this.icon)
                  .maybeAppend('.right-line', 'line')
                  .styles({
                    x1: e + s / 2,
                    y1: n - s / 2,
                    x2: e + s / 2,
                    y2: n + s / 2,
                    stroke: i,
                    lineWidth: o,
                  }),
                (0, vo.Ys)(this.icon)
                  .maybeAppend('.left-arrow', 'line')
                  .styles({
                    x1: e,
                    y1: n,
                    x2: e - s / 2 + 2 * r,
                    y2: n,
                    stroke: i,
                    lineWidth: o,
                    markerEnd: Do(2 * o, i),
                  }),
                (0, vo.Ys)(this.icon)
                  .maybeAppend('.right-arrow', 'line')
                  .styles({
                    x1: e,
                    y1: n,
                    x2: e + s / 2 - 2 * r,
                    y2: n,
                    stroke: i,
                    lineWidth: o,
                    markerEnd: Do(2 * o, i),
                  });
            }),
            e
          );
        })(Ao),
        Lo = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, oo.ZT)(e, t),
            Object.defineProperty(e.prototype, 'label', {
              get: function () {
                return '单一时间';
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.renderIcon = function () {
              var t = this.attributes,
                e = t.x,
                n = t.y,
                i = t.color,
                s = this.iconSize,
                o = this.lineWidth;
              (0, vo.Ys)(this.icon)
                .maybeAppend('.line', 'line')
                .styles({
                  x1: e,
                  y1: n - s / 2,
                  x2: e,
                  y2: n + s / 2,
                  stroke: i,
                  lineWidth: o,
                });
              var r = o;
              (0, vo.Ys)(this.icon)
                .maybeAppend('.left-arrow', 'line')
                .styles({
                  x1: e - s / 2 - 2 * r,
                  y1: n,
                  x2: e - 2 * r,
                  y2: n,
                  stroke: i,
                  lineWidth: o,
                  markerEnd: Do(2 * o, i),
                }),
                (0, vo.Ys)(this.icon)
                  .maybeAppend('.right-arrow', 'line')
                  .styles({
                    x1: e + s / 2 + 2 * r,
                    y1: n,
                    x2: e + 2 * r,
                    y2: n,
                    stroke: i,
                    lineWidth: o,
                    markerEnd: Do(2 * o, i),
                  });
            }),
            e
          );
        })(Ao),
        Bo = function (t) {
          return [
            [-t / 2, -t / 2],
            [-t / 2, t / 2],
            [t / 2, t / 2],
          ];
        },
        _o = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, oo.ZT)(e, t),
            Object.defineProperty(e.prototype, 'label', {
              get: function () {
                return '折线图';
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.renderIcon = function () {
              var t = this.attributes,
                e = t.x,
                n = t.y,
                i = t.color,
                s = this.iconSize,
                o = this.lineWidth,
                r = o,
                a = (s - 2 * r - o) / 4,
                c = (s - 2 * r - o) / 2,
                h = (0, oo.CR)([e - s / 2 + r, n + s / 2 - 2 * r], 2),
                l = h[0],
                d = h[1];
              (0, vo.Ys)(this.icon)
                .maybeAppend('.coordinate', 'polyline')
                .styles({
                  points: Bo(s).map(function (t) {
                    var i = (0, oo.CR)(t, 2),
                      s = i[0],
                      o = i[1];
                    return [s + e, o + n];
                  }),
                  stroke: i,
                  lineWidth: o,
                }),
                (0, vo.Ys)(this.icon)
                  .maybeAppend('.line', 'polyline')
                  .styles({
                    points: [
                      [l, d],
                      [l + a, d - c],
                      [l + 2 * a, d],
                      [l + 4 * a, d - 2 * c],
                    ],
                    stroke: i,
                    lineWidth: o,
                  });
            }),
            e
          );
        })(Ao),
        Fo = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, oo.ZT)(e, t),
            Object.defineProperty(e.prototype, 'label', {
              get: function () {
                return '条形图';
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'data', {
              get: function () {
                return [1, 4, 2, 4, 3];
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.renderIcon = function () {
              var t = this.data,
                e = this.attributes,
                n = e.x,
                i = e.y,
                s = e.color,
                o = this.iconSize,
                r = this.lineWidth,
                a = r,
                c = (o - a) / t.length,
                h = (o - 2 * a) / 4,
                l = (0, oo.CR)([n - o / 2 + 2 * a, i + o / 2 - a], 2),
                d = l[0],
                u = l[1];
              (0, vo.Ys)(this.icon)
                .maybeAppend('.coordinate', 'polyline')
                .styles({
                  points: Bo(o).map(function (t) {
                    var e = (0, oo.CR)(t, 2),
                      s = e[0],
                      o = e[1];
                    return [s + n, o + i];
                  }),
                  stroke: s,
                  lineWidth: r,
                }),
                (0, vo.Ys)(this.icon)
                  .maybeAppend('.bars', 'g')
                  .selectAll('.column')
                  .data(
                    this.data.map(function (t, e) {
                      return { value: t, index: e };
                    }),
                  )
                  .join(function (t) {
                    return t
                      .append('line')
                      .attr('className', 'column')
                      .style('x1', function (t) {
                        var e = t.index;
                        return d + c * e;
                      })
                      .style('y1', u)
                      .style('x2', function (t) {
                        var e = t.index;
                        return d + c * e;
                      })
                      .style('y2', function (t) {
                        var e = t.value;
                        return u - h * e;
                      })
                      .styles({ y1: u, stroke: s, lineWidth: r });
                  });
            }),
            e
          );
        })(Ao),
        zo = (function (t) {
          function e(e) {
            var n =
              t.call(this, (0, co.n)({}, { style: { color: '#d8d9d9' } }, e)) ||
              this;
            return (n.showBackground = !1), n;
          }
          return (
            (0, oo.ZT)(e, t),
            (e.prototype.renderIcon = function () {
              var t = this.attributes,
                e = t.x,
                n = t.y,
                i = t.color,
                s = this.iconSize,
                o = this.lineWidth;
              (0, vo.Ys)(this.icon)
                .maybeAppend('.split', 'line')
                .styles({
                  x1: e,
                  y1: n - s / 2,
                  x2: e,
                  y2: n + s / 2,
                  stroke: i,
                  lineWidth: o,
                });
            }),
            e
          );
        })(Ao),
        jo = (function (t) {
          function e() {
            var e =
              t.apply(this, (0, oo.ev)([], (0, oo.CR)(arguments), !1)) || this;
            return (e.showBackground = !1), e;
          }
          return (
            (0, oo.ZT)(e, t),
            Object.defineProperty(e.prototype, 'padding', {
              get: function () {
                return (0, fo.j)(0);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.renderIcon = function () {
              var t,
                e,
                n = this.iconSize,
                i = this.attributes,
                s = i.x,
                o = i.y,
                r = i.speed,
                a = void 0 === r ? 1 : r,
                c =
                  ((t = this.attributes),
                  (e = [
                    'x',
                    'y',
                    'transform',
                    'transformOrigin',
                    'width',
                    'height',
                    'size',
                    'color',
                    'speed',
                  ]),
                  xo(
                    t,
                    function (t, n, i) {
                      return e.includes(i) || (t[i] = n), t;
                    },
                    {},
                  )),
                h = (0, ro.Z)(n, 20, 1 / 0),
                l = (0, oo.pi)((0, oo.pi)({}, c), {
                  x: s - h / 2,
                  y: o - 10,
                  width: h,
                  height: 20,
                  defaultValue: a,
                  bordered: !1,
                  showDropdownIcon: !1,
                  selectRadius: 2,
                  dropdownPadding: this.padding,
                  dropdownRadius: 2,
                  dropdownSpacing: n / 5,
                  placeholderFontSize: n / 2,
                  optionPadding: 0,
                  optionLabelFontSize: n / 2,
                  optionBackgroundRadius: 1,
                  options: [
                    { label: '1x', value: 1 },
                    { label: '1.5x', value: 1.5 },
                    { label: '2x', value: 2 },
                  ],
                });
              (0, vo.Ys)(this.icon)
                .maybeAppend('.speed', function () {
                  return new To({ style: l });
                })
                .attr('className', 'speed')
                .each(function () {
                  this.update(l);
                });
            }),
            (e.tag = 'SpeedSelect'),
            e
          );
        })(Ao),
        $o = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.icon = n.appendChild(new s.ZA({}))),
              (n.currentType = n.attributes.type),
              n
            );
          }
          return (
            (0, oo.ZT)(e, t),
            (e.prototype.getType = function () {
              return this.currentType;
            }),
            (e.prototype.render = function () {
              var t = this,
                e = this.attributes,
                n = (e.onChange, (0, oo._T)(e, ['onChange']));
              (0, vo.Ys)(this.icon)
                .selectAll('.icon')
                .data([this.currentType])
                .join(
                  function (e) {
                    return e
                      .append(function (e) {
                        var n,
                          i =
                            null ===
                              (n = t.toggles.find(function (t) {
                                return (0, oo.CR)(t, 1)[0] === e;
                              })) || void 0 === n
                              ? void 0
                              : n[1];
                        if (!i) throw new Error('Invalid type: '.concat(e));
                        return new i({});
                      })
                      .attr('className', 'icon')
                      .styles(n, !1)
                      .update({});
                  },
                  function (t) {
                    return t.styles({ restStyles: n }).update({});
                  },
                  function (t) {
                    return t.remove();
                  },
                );
            }),
            (e.prototype.bindEvents = function () {
              var t = this,
                e = this.attributes.onChange;
              this.addEventListener('click', function (n) {
                n.preventDefault(), n.stopPropagation();
                var i =
                    (t.toggles.findIndex(function (e) {
                      return (0, oo.CR)(e, 1)[0] === t.currentType;
                    }) +
                      1) %
                    t.toggles.length,
                  s = t.toggles[i][0];
                null == e || e(t.currentType), (t.currentType = s), t.render();
              });
            }),
            (e.tag = 'ToggleIcon'),
            e
          );
        })(ao.w),
        Zo = (function (t) {
          function e(e) {
            var n =
              t.call(this, (0, co.n)({}, { style: { type: 'play' } }, e)) ||
              this;
            return (
              (n.toggles = [
                ['play', ko],
                ['pause', No],
              ]),
              n
            );
          }
          return (0, oo.ZT)(e, t), e;
        })($o),
        Ho = (function (t) {
          function e(e) {
            var n =
              t.call(this, (0, co.n)({}, { style: { type: 'range' } }, e)) ||
              this;
            return (
              (n.toggles = [
                ['range', Io],
                ['value', Lo],
              ]),
              n
            );
          }
          return (0, oo.ZT)(e, t), e;
        })($o),
        Wo = (function (t) {
          function e(e) {
            var n =
              t.call(this, (0, co.n)({}, { style: { type: 'column' } }, e)) ||
              this;
            return (
              (n.toggles = [
                ['line', _o],
                ['column', Fo],
              ]),
              n
            );
          }
          return (0, oo.ZT)(e, t), e;
        })($o),
        Vo = {
          reset: Mo,
          speed: jo,
          backward: Ro,
          playPause: Zo,
          forward: Po,
          selectionType: Ho,
          chartType: Wo,
          split: zo,
        },
        Yo = (function (t) {
          function e(n) {
            var i = t.call(this, (0, co.n)({}, e.defaultOptions, n)) || this;
            return (
              (i.background = i.appendChild(new s.UL({}))),
              (i.functions = i.appendChild(new s.ZA({}))),
              i
            );
          }
          return (
            (0, oo.ZT)(e, t),
            Object.defineProperty(e.prototype, 'padding', {
              get: function () {
                return (0, fo.j)(this.attributes.padding);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.renderBackground = function () {
              var t = this.style,
                e = t.x,
                n = t.y,
                i = t.width,
                s = t.height,
                o = (0, lo.zs)(this.attributes, 'background');
              this.background.attr(
                (0, oo.pi)({ x: e, y: n, width: i, height: s }, o),
              );
            }),
            (e.prototype.renderFunctions = function () {
              var t,
                e = this,
                n = this.attributes,
                i = n.functions,
                s = n.iconSize,
                o = n.iconSpacing,
                r = n.x,
                a = n.y,
                c = n.width,
                h = n.height,
                l = n.align,
                d = (0, oo.CR)(this.padding, 4),
                u = d[1],
                p = d[3],
                g = i.reduce(function (t, e) {
                  return t.length && e.length
                    ? t.concat.apply(
                        t,
                        (0, oo.ev)(['split'], (0, oo.CR)(e), !1),
                      )
                    : t.concat.apply(t, (0, oo.ev)([], (0, oo.CR)(e), !1));
                }, []),
                f = g.length * (s + o) - o,
                m =
                  {
                    left: p + s / 2,
                    center: (c - f) / 2 + s / 2,
                    right: c - f - p - u + s / 2,
                  }[l] || 0;
              null === (t = this.speedSelect) || void 0 === t || t.destroy(),
                this.functions.removeChildren(),
                g.forEach(function (t, n) {
                  var i,
                    c = Vo[t],
                    l = { x: r + n * (s + o) + m, y: a + h / 2, size: s };
                  if (
                    (c === jo
                      ? ((l.speed = e.attributes.speed),
                        (l.onSelect = function (n) {
                          return e.handleFunctionChange(t, { value: n });
                        }))
                      : [Zo, Ho, Wo].includes(c)
                        ? ((l.onChange = function (n) {
                            return e.handleFunctionChange(t, { value: n });
                          }),
                          c === Zo &&
                            (l.type =
                              'play' === e.attributes.state ? 'pause' : 'play'),
                          c === Ho &&
                            (l.type =
                              'range' === e.attributes.selectionType
                                ? 'value'
                                : 'range'),
                          c === Wo &&
                            (l.type =
                              'line' === e.attributes.chartType
                                ? 'column'
                                : 'line'))
                        : (l.onClick = function () {
                            return e.handleFunctionChange(t, { value: t });
                          }),
                    c === jo)
                  ) {
                    var d =
                      null === (i = e.ownerDocument) || void 0 === i
                        ? void 0
                        : i.defaultView;
                    d &&
                      ((e.speedSelect = new c({
                        style: (0, oo.pi)((0, oo.pi)({}, l), { zIndex: 100 }),
                      })),
                      d.appendChild(e.speedSelect));
                  } else e.functions.appendChild(new c({ style: l }));
                });
            }),
            (e.prototype.disconnectedCallback = function () {
              var e;
              t.prototype.disconnectedCallback.call(this),
                null === (e = this.speedSelect) || void 0 === e || e.destroy();
            }),
            (e.prototype.render = function () {
              this.renderBackground(), this.renderFunctions();
            }),
            (e.prototype.handleFunctionChange = function (t, e) {
              var n = this.attributes.onChange;
              null == n || n(t, e);
            }),
            (e.defaultOptions = {
              style: {
                x: 0,
                y: 0,
                width: 300,
                height: 40,
                padding: 0,
                align: 'center',
                iconSize: 25,
                iconSpacing: 0,
                speed: 1,
                state: 'pause',
                chartType: 'line',
                selectionType: 'range',
                backgroundFill: '#fbfdff',
                backgroundStroke: '#ebedf0',
                functions: [
                  ['reset', 'speed'],
                  ['backward', 'playPause', 'forward'],
                  ['selectionType', 'chartType'],
                ],
              },
            }),
            e
          );
        })(ao.w),
        Go = (function (t) {
          function e(n) {
            var i = t.call(this, (0, co.n)({}, e.defaultOptions, n)) || this;
            return i.bindEvents(), i;
          }
          return (
            (0, oo.ZT)(e, t),
            (e.prototype.bindEvents = function () {
              var t = this;
              this.addEventListener('mouseenter', function () {
                t.attr('lineWidth', Math.ceil(+(t.style.r || 0) / 2));
              }),
                this.addEventListener('mouseleave', function () {
                  t.attr('lineWidth', 0);
                });
            }),
            (e.defaultOptions = {
              style: {
                r: 5,
                fill: '#3f7cf7',
                lineWidth: 0,
                stroke: '#3f7cf7',
                strokeOpacity: 0.5,
                cursor: 'pointer',
              },
            }),
            e
          );
        })(s.Cd),
        Uo = (function (t) {
          function e(n) {
            return t.call(this, (0, co.n)({}, e.defaultOptions, n)) || this;
          }
          return (
            (0, oo.ZT)(e, t),
            (e.prototype.renderBackground = function () {
              var t = this.attributes,
                e = t.x,
                n = t.y,
                i = t.width,
                s = t.height,
                o = (0, lo.zs)(this.attributes, 'background');
              (0, vo.Ys)(this)
                .maybeAppend('background', 'rect')
                .attr('className', 'background')
                .styles(
                  (0, oo.pi)(
                    { x: e - i / 2, y: n - s / 2, width: i, height: s },
                    o,
                  ),
                );
            }),
            (e.prototype.renderIcon = function () {
              var t = this.attributes,
                e = t.x,
                n = t.y,
                i = t.iconSize,
                s = (0, lo.zs)(this.attributes, 'icon'),
                o = i / 2;
              (0, vo.Ys)(this)
                .maybeAppend('icon-left-line', 'line')
                .attr('className', 'icon-left-line')
                .styles(
                  (0, oo.pi)({ x1: e - 1, y1: n - o, x2: e - 1, y2: n + o }, s),
                ),
                (0, vo.Ys)(this)
                  .maybeAppend('icon-right-line', 'line')
                  .attr('className', 'icon-right-line')
                  .styles(
                    (0, oo.pi)(
                      { x1: e + 1, y1: n - o, x2: e + 1, y2: n + o },
                      s,
                    ),
                  );
            }),
            (e.prototype.renderBorder = function () {
              var t = this.attributes,
                e = t.x,
                n = t.y,
                i = t.width,
                s = t.height,
                o = t.type,
                r = (0, lo.zs)(this.attributes, 'border'),
                a = 'start' === o ? +i / 2 : -i / 2;
              (0, vo.Ys)(this)
                .maybeAppend('border', 'line')
                .attr('className', 'border')
                .styles(
                  (0, oo.pi)(
                    { x1: a + e, y1: n - s / 2, x2: a + e, y2: n + s / 2 },
                    r,
                  ),
                );
            }),
            (e.prototype.render = function () {
              this.renderBackground(), this.renderIcon(), this.renderBorder();
            }),
            (e.defaultOptions = {
              style: {
                x: 0,
                y: 0,
                width: 10,
                height: 50,
                iconSize: 10,
                type: 'start',
                backgroundFill: '#fff',
                backgroundFillOpacity: 0.5,
                iconStroke: '#9a9a9a',
                iconLineWidth: 1,
                borderStroke: '#e8e8e8',
                borderLineWidth: 1,
              },
            }),
            e
          );
        })(ao.w);
      function Ko(t, e) {
        return 'number' == typeof t
          ? Xo(t)
          : (function (t, e) {
              var n = new Date(t);
              switch (e) {
                case 'half-hour':
                case 'hour':
                case 'four-hour':
                  return [0, 6, 12, 18].includes(n.getHours()) &&
                    0 === n.getMinutes()
                    ? uo(n, 'HH:mm\nYYYY-MM-DD')
                    : uo(n, 'HH:mm');
                case 'half-day':
                  return n.getHours() < 12
                    ? 'AM\n'.concat(uo(n, 'YYYY-MM-DD'))
                    : 'PM';
                case 'day':
                  return [1, 10, 20].includes(n.getDate())
                    ? uo(n, 'DD\nYYYY-MM')
                    : uo(n, 'DD');
                case 'week':
                  return n.getDate() <= 7 ? uo(n, 'DD\nYYYY-MM') : uo(n, 'DD');
                case 'month':
                  return [0, 6].includes(n.getMonth())
                    ? uo(n, 'MM月\nYYYY')
                    : uo(n, 'MM月');
                case 'season':
                  return [0].includes(n.getMonth())
                    ? uo(n, 'MM月\nYYYY')
                    : uo(n, 'MM月');
                case 'year':
                  return uo(n, 'YYYY');
                default:
                  return uo(n, 'YYYY-MM-DD HH:mm');
              }
            })(t, e);
      }
      function Xo(t) {
        var e = String(Math.floor(t / 3600)).padStart(2, '0'),
          n = String(Math.floor((t % 3600) / 60)).padStart(2, '0'),
          i = String(Math.floor(t % 60)).padStart(2, '0');
        return t < 3600
          ? ''.concat(n, ':').concat(i)
          : ''.concat(e, ':').concat(n, ':').concat(i);
      }
      var qo = (function (t) {
          function e(n) {
            var i = t.call(this, (0, co.n)({}, e.defaultOptions, n)) || this;
            (i.axis = i.appendChild(
              new po.R({
                style: {
                  type: 'linear',
                  startPos: [0, 0],
                  endPos: [0, 0],
                  data: [],
                  showArrow: !1,
                  animate: !1,
                },
              }),
            )),
              (i.timeline = i.appendChild(
                new go.i({
                  style: {
                    onChange: function (t) {
                      i.handleSliderChange(t);
                    },
                  },
                }),
              )),
              (i.controller = i.appendChild(new Yo({}))),
              (i.states = {}),
              (i.handleSliderChange = function (t) {
                var e,
                  n =
                    ((e = i.states.values),
                    Array.isArray(e) ? (0, oo.ev)([], (0, oo.CR)(e), !1) : e);
                i.setBySliderValues(t), i.dispatchOnChange(n);
              });
            var s = i.attributes,
              o = s.selectionType,
              r = s.chartType,
              a = s.speed,
              c = s.state,
              h = s.playMode,
              l = s.values;
            return (
              (i.states = {
                chartType: r,
                playMode: h,
                selectionType: o,
                speed: a,
                state: c,
              }),
              i.setByTimebarValues(l),
              i
            );
          }
          return (
            (0, oo.ZT)(e, t),
            Object.defineProperty(e.prototype, 'data', {
              get: function () {
                return this.attributes.data.sort(function (t, e) {
                  return t.time < e.time ? -1 : t.time > e.time ? 1 : 0;
                });
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'space', {
              get: function () {
                var t,
                  e = this.attributes,
                  n = e.x,
                  i = e.y,
                  s = e.width,
                  o = e.height,
                  r = e.type,
                  a = e.controllerHeight,
                  c = (0, ro.Z)(+o - a, 0, +o),
                  h = new ho.b(n, i + +o - a, +s, a),
                  l = 0;
                'chart' === r
                  ? ((l = 35), (t = new ho.b(n, i + c - l, +s, l)))
                  : (t = new ho.b());
                var d = 'time' === r ? 10 : c;
                return {
                  axisBBox: t,
                  controllerBBox: h,
                  timelineBBox: new ho.b(
                    n,
                    i + ('time' === r ? c : c - d),
                    +s,
                    d - l,
                  ),
                };
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.setBySliderValues = function (t) {
              var e,
                n,
                i = this.data,
                s = (0, oo.CR)(Array.isArray(t) ? t : [0, t], 2),
                o = s[0],
                r = s[1],
                a = i.length,
                c = i[Math.floor(o * a)],
                h = i[Math.ceil(r * a) - (Array.isArray(t) ? 0 : 1)];
              this.states.values = [
                null !== (e = null == c ? void 0 : c.time) && void 0 !== e
                  ? e
                  : i[0].time,
                null !== (n = null == h ? void 0 : h.time) && void 0 !== n
                  ? n
                  : 1 / 0,
              ];
            }),
            (e.prototype.setByTimebarValues = function (t) {
              var e,
                n,
                i,
                s = this.data,
                o = (0, oo.CR)(Array.isArray(t) ? t : [void 0, t], 2),
                r = o[0],
                a = o[1],
                c = s.find(function (t) {
                  return t.time === r;
                }),
                h = s.find(function (t) {
                  return t.time === a;
                });
              this.states.values = [
                null !== (e = null == c ? void 0 : c.time) && void 0 !== e
                  ? e
                  : null === (n = s[0]) || void 0 === n
                    ? void 0
                    : n.time,
                null !== (i = null == h ? void 0 : h.time) && void 0 !== i
                  ? i
                  : 1 / 0,
              ];
            }),
            (e.prototype.setByIndex = function (t) {
              var e,
                n,
                i,
                s,
                o = this.data,
                r = (0, oo.CR)(t, 2),
                a = r[0],
                c = r[1];
              this.states.values = [
                null !==
                  (n = null === (e = o[a]) || void 0 === e ? void 0 : e.time) &&
                void 0 !== n
                  ? n
                  : o[0].time,
                null !==
                  (s =
                    null === (i = this.data[c]) || void 0 === i
                      ? void 0
                      : i.time) && void 0 !== s
                  ? s
                  : 1 / 0,
              ];
            }),
            Object.defineProperty(e.prototype, 'sliderValues', {
              get: function () {
                var t,
                  e = this.states,
                  n = e.values,
                  i = e.selectionType,
                  s = (0, oo.CR)(Array.isArray(n) ? n : [void 0, n], 2),
                  o = s[0],
                  r = s[1],
                  a = this.data,
                  c = a.length,
                  h = 'value' === i;
                return [
                  ((t = a.findIndex(function (t) {
                    return t.time === o;
                  })),
                  h ? 0 : t > -1 ? t / c : 0),
                  (function () {
                    if (r === 1 / 0) return 1;
                    var t = a.findIndex(function (t) {
                      return t.time === r;
                    });
                    return t > -1 ? t / c : h ? 0.5 : 1;
                  })(),
                ];
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'values', {
              get: function () {
                var t = this.states,
                  e = t.values,
                  n = t.selectionType,
                  i = (0, oo.CR)(
                    Array.isArray(e) ? e : [this.data[0].time, e],
                    2,
                  ),
                  s = i[0],
                  o = i[1];
                return 'value' === n ? o : [s, o];
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.getDatumByRatio = function (t) {
              var e = this.data,
                n = e.length;
              return e[Math.floor(t * (n - 1))];
            }),
            Object.defineProperty(e.prototype, 'chartHandleIconShape', {
              get: function () {
                var t = this.states.selectionType,
                  e = this.space.timelineBBox.height;
                return 'range' === t
                  ? function (t) {
                      return new Uo({
                        style: { type: t, height: e, iconSize: e / 6 },
                      });
                    }
                  : function () {
                      return new s.x1({
                        style: {
                          x1: 0,
                          y1: -e / 2,
                          x2: 0,
                          y2: e / 2,
                          lineWidth: 2,
                          stroke: '#c8c8c8',
                        },
                      });
                    };
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.getChartStyle = function (t) {
              var e = this,
                n = t.x,
                i = t.y,
                s = t.width,
                o = t.height,
                r = this.states,
                a = r.selectionType,
                c = r.chartType,
                h = this.data,
                l = this.attributes,
                d = l.type,
                u = l.labelFormatter,
                p = (0, lo.zs)(this.attributes, 'chart'),
                g = (p.type, (0, oo._T)(p, ['type'])),
                f = 'range' === a;
              if ('time' === d)
                return (0, oo.pi)(
                  {
                    handleIconShape: function () {
                      return new Go({});
                    },
                    selectionFill: '#2e7ff8',
                    selectionFillOpacity: 1,
                    showLabelOnInteraction: !0,
                    handleLabelDy: f ? -15 : 0,
                    autoFitLabel: f,
                    handleSpacing: f ? -15 : 0,
                    trackFill: '#edeeef',
                    trackLength: s,
                    trackOpacity: 0.5,
                    trackRadius: o / 2,
                    trackSize: o / 2,
                    type: a,
                    values: this.sliderValues,
                    formatter: function (t) {
                      if (u) return u(t);
                      var n = e.getDatumByRatio(t).time;
                      return 'number' == typeof n
                        ? Xo(n)
                        : uo(n, 'YYYY-MM-DD HH:mm:ss');
                    },
                    transform: 'translate('.concat(n, ', ').concat(i, ')'),
                    zIndex: 1,
                  },
                  g,
                );
              var m = 'range' === a ? 5 : 0,
                y = h.map(function (t) {
                  return t.value;
                });
              return (0, oo.pi)(
                {
                  handleIconOffset: m,
                  handleIconShape: this.chartHandleIconShape,
                  selectionFill: '#fff',
                  selectionFillOpacity: 0.5,
                  selectionType: 'invert',
                  sparklineSpacing: 0.1,
                  sparklineColumnLineWidth: 0,
                  sparklineColor: '#d4e5fd',
                  sparklineAreaOpacity: 1,
                  sparklineAreaLineWidth: 0,
                  sparklineData: y,
                  sparklineType: c,
                  sparklineScale: 0.8,
                  trackLength: s,
                  trackSize: o,
                  type: a,
                  values: this.sliderValues,
                  transform: 'translate('.concat(n, ', ').concat(i, ')'),
                  zIndex: 1,
                },
                g,
              );
            }),
            (e.prototype.renderChart = function (t) {
              void 0 === t && (t = this.space.timelineBBox),
                this.timeline.update(this.getChartStyle(t));
            }),
            (e.prototype.updateSelection = function () {
              this.timeline.setValues(this.sliderValues, !0),
                this.handleSliderChange(this.sliderValues);
            }),
            (e.prototype.getAxisStyle = function (t) {
              var e = this.data,
                n = this.attributes,
                i = n.interval,
                s = n.labelFormatter,
                o = (0, lo.zs)(this.attributes, 'axis'),
                r = t.x,
                a = t.y,
                c = t.width,
                h = (0, oo.ev)(
                  (0, oo.ev)([], (0, oo.CR)(e), !1),
                  [{ time: 0 }],
                  !1,
                ).map(function (t, e, n) {
                  var i = t.time;
                  return {
                    label: ''.concat(i),
                    value: e / (n.length - 1),
                    time: i,
                  };
                }),
                l = (0, oo.pi)(
                  {
                    startPos: [r, a],
                    endPos: [r + c, a],
                    data: h,
                    labelFilter: function (t, e) {
                      return e < h.length - 1;
                    },
                    labelFormatter: function (t) {
                      var e = t.time;
                      return s ? s(e) : Ko(e, i);
                    },
                  },
                  o,
                );
              return l;
            }),
            (e.prototype.renderAxis = function (t) {
              void 0 === t && (t = this.space.axisBBox),
                'chart' === this.attributes.type &&
                  this.axis.update(this.getAxisStyle(t));
            }),
            (e.prototype.renderController = function (t) {
              void 0 === t && (t = this.space.controllerBBox);
              var e = this.attributes.type,
                n = this.states,
                i = n.state,
                s = n.speed,
                o = n.selectionType,
                r = n.chartType,
                a = (0, lo.zs)(this.attributes, 'controller'),
                c = this,
                h = (0, oo.pi)(
                  (0, oo.pi)((0, oo.pi)({}, t), {
                    iconSize: 20,
                    speed: s,
                    state: i,
                    selectionType: o,
                    chartType: r,
                    onChange: function (t, e) {
                      var n = e.value;
                      switch (t) {
                        case 'reset':
                          c.internalReset();
                          break;
                        case 'speed':
                          c.handleSpeedChange(n);
                          break;
                        case 'backward':
                          c.internalBackward();
                          break;
                        case 'playPause':
                          'play' === n ? c.internalPlay() : c.internalPause();
                          break;
                        case 'forward':
                          c.internalForward();
                          break;
                        case 'selectionType':
                          c.handleSelectionTypeChange(n);
                          break;
                        case 'chartType':
                          c.handleChartTypeChange(n);
                      }
                    },
                  }),
                  a,
                );
              'time' === e &&
                (h.functions = [
                  ['reset', 'speed'],
                  ['backward', 'playPause', 'forward'],
                  ['selectionType'],
                ]),
                this.controller.update(h);
            }),
            (e.prototype.dispatchOnChange = function (t) {
              var e = this.data,
                n = this.attributes.onChange,
                i = this.states,
                s = i.values,
                o = i.selectionType,
                r = (0, oo.CR)(s, 2),
                a = r[0],
                c = r[1],
                h = c === 1 / 0 ? e.at(-1).time : c;
              (t &&
                (function (t, e) {
                  if (Array.isArray(t)) {
                    if (!Array.isArray(e)) return !1;
                    if (t[0] === e[0]) {
                      if (t[1] === e[1]) return !0;
                      if (t[1] === 1 / 0 || e[1] === 1 / 0) return !0;
                    }
                    return !1;
                  }
                  return !Array.isArray(e) && t === e;
                })(t, 'range' === o ? [a, h] : h)) ||
                null == n ||
                n('range' === o ? [a, h] : h);
            }),
            (e.prototype.internalReset = function (t) {
              var e,
                n,
                i = this.states.selectionType;
              this.internalPause(),
                this.setBySliderValues('range' === i ? [0, 1] : [0, 0]),
                this.renderController(),
                this.updateSelection(),
                t ||
                  (null ===
                    (n =
                      null === (e = this.attributes) || void 0 === e
                        ? void 0
                        : e.onReset) ||
                    void 0 === n ||
                    n.call(e),
                  this.dispatchOnChange());
            }),
            (e.prototype.reset = function () {
              this.internalReset();
            }),
            (e.prototype.moveSelection = function (t, e) {
              var n = this.data,
                i = n.length,
                s = this.states,
                o = s.values,
                r = s.selectionType,
                a = s.playMode,
                c = (0, oo.CR)(o, 2),
                h = c[0],
                l = c[1],
                d = n.findIndex(function (t) {
                  return t.time === h;
                }),
                u = n.findIndex(function (t) {
                  return t.time === l;
                });
              -1 === u && (u = i);
              var p,
                g = 'backward' === t ? -1 : 1;
              'range' === r
                ? 'acc' === a
                  ? ((p = [d, u + g]), -1 === g && d === u && (p = [d, i]))
                  : (p = [d + g, u + g])
                : (p = [d, u + g]);
              var f = (function (t) {
                var e = (0, oo.CR)(
                    t.sort(function (t, e) {
                      return t - e;
                    }),
                    2,
                  ),
                  n = e[0],
                  s = e[1],
                  o = function (t) {
                    return (0, ro.Z)(t, 0, i);
                  };
                return s > i
                  ? 'value' === r
                    ? [0, 0]
                    : 'acc' === a
                      ? [o(n), o(n)]
                      : [0, o(s - n)]
                  : n < 0
                    ? 'acc' === a
                      ? [0, o(s)]
                      : [o(n + i - s), i]
                    : [o(n), o(s)];
              })(p);
              return this.setByIndex(f), this.updateSelection(), f;
            }),
            (e.prototype.internalBackward = function (t) {
              var e,
                n,
                i = this.moveSelection('backward', t);
              return (
                t ||
                  (null ===
                    (n =
                      null === (e = this.attributes) || void 0 === e
                        ? void 0
                        : e.onBackward) ||
                    void 0 === n ||
                    n.call(e),
                  this.dispatchOnChange()),
                i
              );
            }),
            (e.prototype.backward = function () {
              this.internalBackward();
            }),
            (e.prototype.internalPlay = function (t) {
              var e,
                n,
                i = this,
                s = this.data,
                o = this.attributes.loop,
                r = this.states.speed,
                a = void 0 === r ? 1 : r;
              (this.playInterval = window.setInterval(function () {
                i.internalForward()[1] !== s.length ||
                  o ||
                  (i.internalPause(), i.renderController());
              }, 1e3 / a)),
                (this.states.state = 'play'),
                !t &&
                  (null ===
                    (n =
                      null === (e = this.attributes) || void 0 === e
                        ? void 0
                        : e.onPlay) ||
                    void 0 === n ||
                    n.call(e));
            }),
            (e.prototype.play = function () {
              this.internalPlay();
            }),
            (e.prototype.internalPause = function (t) {
              var e, n;
              clearInterval(this.playInterval),
                (this.states.state = 'pause'),
                !t &&
                  (null ===
                    (n =
                      null === (e = this.attributes) || void 0 === e
                        ? void 0
                        : e.onPause) ||
                    void 0 === n ||
                    n.call(e));
            }),
            (e.prototype.pause = function () {
              this.internalPause();
            }),
            (e.prototype.internalForward = function (t) {
              var e,
                n,
                i = this.moveSelection('forward', t);
              return (
                t ||
                  (null ===
                    (n =
                      null === (e = this.attributes) || void 0 === e
                        ? void 0
                        : e.onForward) ||
                    void 0 === n ||
                    n.call(e),
                  this.dispatchOnChange()),
                i
              );
            }),
            (e.prototype.forward = function () {
              this.internalForward();
            }),
            (e.prototype.handleSpeedChange = function (t) {
              var e, n;
              (this.states.speed = t),
                'play' === this.states.state &&
                  (this.internalPause(!0), this.internalPlay(!0)),
                null ===
                  (n =
                    null === (e = this.attributes) || void 0 === e
                      ? void 0
                      : e.onSpeedChange) ||
                  void 0 === n ||
                  n.call(e, t);
            }),
            (e.prototype.handleSelectionTypeChange = function (t) {
              var e, n;
              (this.states.selectionType = t),
                this.renderChart(),
                null ===
                  (n =
                    null === (e = this.attributes) || void 0 === e
                      ? void 0
                      : e.onSelectionTypeChange) ||
                  void 0 === n ||
                  n.call(e, t);
            }),
            (e.prototype.handleChartTypeChange = function (t) {
              var e, n;
              (this.states.chartType = t),
                this.renderChart(),
                null ===
                  (n =
                    null === (e = this.attributes) || void 0 === e
                      ? void 0
                      : e.onChartTypeChange) ||
                  void 0 === n ||
                  n.call(e, t);
            }),
            (e.prototype.render = function () {
              var t = this.space,
                e = t.axisBBox,
                n = t.controllerBBox,
                i = t.timelineBBox;
              this.renderController(n),
                this.renderAxis(e),
                this.renderChart(i),
                'play' === this.states.state && this.internalPlay();
            }),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this), this.internalPause(!0);
            }),
            (e.defaultOptions = {
              style: {
                x: 0,
                y: 0,
                axisLabelFill: '#6e6e6e',
                axisLabelTextAlign: 'left',
                axisLabelTextBaseline: 'top',
                axisLabelTransform: 'translate(5, -12)',
                axisLineLineWidth: 1,
                axisLineStroke: '#cacdd1',
                axisTickLength: 15,
                axisTickLineWidth: 1,
                axisTickStroke: '#cacdd1',
                chartShowLabel: !1,
                chartType: 'line',
                controllerAlign: 'center',
                controllerHeight: 40,
                data: [],
                interval: 'day',
                loop: !1,
                playMode: 'acc',
                selectionType: 'range',
                type: 'time',
              },
            }),
            e
          );
        })(ao.w),
        Jo = n(66056),
        Qo = n(95456),
        tr = function (t) {
          return (0, Qo.Z)(t, 'Date');
        };
      const er = ['timestamp', 'time', 'date', 'datetime'];
      class nr extends Ji {
        static defaultOptions = {
          position: 'bottom',
          enable: !0,
          timebarType: 'time',
          className: 'g6-timebar',
          width: 450,
          height: 60,
          zIndex: 3,
          elementTypes: ['node'],
          padding: 10,
          mode: 'modify',
          getTime: (t) => or(t, er, void 0),
          loop: !1,
        };
        timebar;
        canvas;
        wrapper;
        originalData;
        get padding() {
          return st(this.options.padding);
        }
        constructor(t, e) {
          super(t, Object.assign({}, nr.defaultOptions, e)),
            this.backup(),
            this.upsertTimebar();
        }
        play() {
          this.timebar?.play();
        }
        pause() {
          this.timebar?.pause();
        }
        forward() {
          this.timebar?.forward();
        }
        backward() {
          this.timebar?.backward();
        }
        reset() {
          this.timebar?.reset();
        }
        update(t) {
          super.update(t),
            this.backup(),
            Object.keys(t).forEach((t) => {
              if ('position' === t) this.upsertWrapper();
              else this.upsertTimebar();
            });
        }
        backup() {
          this.originalData = ir(this.context.graph.getData());
        }
        upsertTimebar() {
          const { canvas: t } = this.context,
            {
              onChange: e,
              timebarType: n,
              data: i,
              x: s,
              y: o,
              width: r,
              height: a,
              mode: c,
              ...h
            } = this.options,
            l = t.getSize(),
            [d] = this.padding;
          this.upsertCanvas().ready.then(() => {
            const t = {
              x: l[0] / 2 - r / 2,
              y: d,
              onChange: (t) => {
                const n = ((0, we.Z)(t) ? t : [t, t]).map((t) =>
                  tr(t) ? t.getTime() : t,
                );
                'modify' === this.options.mode
                  ? this.filterElements(n)
                  : this.hiddenElements(n),
                  e?.(n);
              },
              ...h,
              data: i.map((t) => ((0, ne.Z)(t) ? { time: t, value: 0 } : t)),
              width: r,
              height: a,
              type: n,
            };
            this.timebar
              ? this.timebar.update(t)
              : ((this.timebar = new qo({ style: t })),
                this.canvas?.appendChild(this.timebar));
          });
        }
        upsertWrapper() {
          if (!this.wrapper) {
            const t = document.createElement('div');
            (t.style.position = 'absolute'), (this.wrapper = t);
          }
          const { x: t, y: e, className: n, position: i } = this.options;
          return (
            n && (this.wrapper.className = n),
            (0, ne.Z)(t) || (0, ne.Z)(e)
              ? Object.assign(this.wrapper.style, {
                  left: `${t ?? 0}px`,
                  top: `${e ?? 0}px`,
                })
              : Object.assign(this.wrapper.style, {
                  ['top' === i ? 'bottom' : 'top']: 'unset',
                  ['top' === i ? 'top' : 'bottom']: '0px',
                }),
            this.context.canvas.getContainer()?.appendChild(this.wrapper),
            this.wrapper
          );
        }
        upsertCanvas() {
          const t = this.upsertWrapper();
          if (this.canvas) return this.canvas;
          const { height: e } = this.options,
            [n] = this.context.canvas.getSize(),
            [i, , o] = this.padding;
          return (
            (this.canvas = new s.Xz({
              container: t,
              width: n,
              height: e + i + o,
              renderer: this.context.options.renderer?.('main') || new Jo.Th(),
              supportsMutipleCanvasesInOneContainer: !0,
            })),
            this.canvas
          );
        }
        async filterElements(t) {
          if (!this.originalData) return;
          const { elementTypes: e, getTime: n } = this.options,
            { graph: i, element: s } = this.context,
            o = ir(this.originalData);
          e.forEach((e) => {
            const i = `${e}s`;
            o[i] = (this.originalData[i] || []).filter((e) => {
              const i = n(e);
              return !!sr(i, t);
            });
          });
          const r = [...o.nodes, ...o.combos].map((t) => F(t));
          (o.edges = o.edges.filter((t) => {
            const e = t.source,
              n = t.target;
            return r.includes(e) && r.includes(n);
          })),
            i.setData(o),
            await s.draw({ animation: !1, silence: !0 })?.finished;
        }
        hiddenElements(t) {
          const { graph: e } = this.context,
            { elementTypes: n, getTime: i } = this.options,
            s = [],
            o = [];
          n.forEach((e) => {
            const n = `${e}s`;
            (this.originalData?.[n] || []).forEach((e) => {
              const n = F(e),
                r = i(e);
              sr(r, t) ? o.push(n) : s.push(n);
            });
          }),
            e.hideElement(s, !1),
            e.showElement(o, !1);
        }
        destroy() {
          const { graph: t } = this.context;
          this.originalData && t.setData({ ...this.originalData }),
            this.timebar?.destroy(),
            this.canvas?.destroy(),
            this.wrapper?.remove(),
            (this.originalData = void 0),
            (this.wrapper = void 0),
            (this.timebar = void 0),
            (this.canvas = void 0),
            super.destroy();
        }
      }
      const ir = (t) => {
          const { nodes: e = [], edges: n = [], combos: i = [] } = t;
          return { nodes: [...e], edges: [...n], combos: [...i] };
        },
        sr = (t, e) => {
          if ((0, ne.Z)(e)) return t === e;
          const [n, i] = e;
          return t >= n && t <= i;
        },
        or = (t, e, n) => {
          for (let n = 0; n < e.length; n++) {
            const i = e[n],
              s = t.data?.[i];
            if (s) return s;
          }
          return n;
        };
      class rr extends Ji {
        static defaultOptions = { position: 'top-left' };
        $element = Xi('toolbar', !1);
        constructor(t, e) {
          super(t, Object.assign({}, rr.defaultOptions, e));
          const n = this.context.canvas.getContainer();
          (this.$element.style.display = 'flex'),
            n.appendChild(this.$element),
            qi(
              'g6-toolbar-css',
              'style',
              {},
              '\n  .g6-toolbar {\n    position: absolute;\n    z-index: 100;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    border-radius: 4px;\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);\n    opacity: 0.65;\n  }\n  .g6-toolbar .g6-toolbar-item {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    padding: 4px;\n    cursor: pointer;\n    box-sizing: content-box;\n  }\n\n  .g6-toolbar .g6-toolbar-item:hover {\n    background-color: #f0f0f0;\n  }\n\n  .g6-toolbar .g6-toolbar-item svg {\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n  }\n',
              document.head,
            ),
            qi(
              'g6-toolbar-svgicon',
              'div',
              { display: 'none' },
              '\n  <svg>\n    <symbol id="zoom-in" viewBox="64 64 896 896">\n      <path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"></path>\n    </symbol>\n    <symbol id="zoom-out" viewBox="64 64 896 896">\n      <path d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"></path>\n    </symbol>\n    <symbol id="edit" viewBox="64 64 896 896">\n      <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>\n    </symbol>\n    <symbol id="delete" viewBox="64 64 896 896">\n      <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>\n    </symbol>\n    <symbol id="redo" viewBox="64 64 896 896">\n      <path d="M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"></path>\n    </symbol>\n    <symbol id="undo" viewBox="64 64 896 896">\n      <path d="M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"></path>\n    </symbol>\n    <symbol id="export" viewBox="64 64 896 896">\n      <path d="M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"></path>\n    </symbol>\n    <symbol id="auto-fit" viewBox="64 64 896 896">\n      <path d="M952 474H829.8C812.5 327.6 696.4 211.5 550 194.2V72c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v122.2C327.6 211.5 211.5 327.6 194.2 474H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h122.2C211.5 696.4 327.6 812.5 474 829.8V952c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V829.8C696.4 812.5 812.5 696.4 829.8 550H952c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM512 756c-134.8 0-244-109.2-244-244s109.2-244 244-244 244 109.2 244 244-109.2 244-244 244z"></path>\n      <path d="M512 392c-32.1 0-62.1 12.4-84.8 35.2-22.7 22.7-35.2 52.7-35.2 84.8s12.5 62.1 35.2 84.8C449.9 619.4 480 632 512 632s62.1-12.5 84.8-35.2C619.4 574.1 632 544 632 512s-12.5-62.1-35.2-84.8A118.57 118.57 0 00512 392z"></path>\n    </symbol>\n    <symbol id="reset" viewBox="64 64 896 896">\n      <path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"></path>\n    </symbol>\n    <symbol id="exit-fullscreen" viewBox="0 0 1024 1024">\n      <path d="M418.13333333 361.43786666c0 0.2048-0.13653333 0.4096-0.13653334 0.68266667C417.99679999 362.32533333 418.13333333 362.53013333 418.13333333 362.73493333 418.13333333 371.54133333 414.44693333 379.392 408.78079999 385.39946666 408.43946666 385.7408 408.30293333 386.21866666 408.02986666 386.49173333c-1.09226667 1.09226667-2.59413333 1.77493333-3.82293333 2.73066667C398.40426666 393.65973333 391.64586666 396.8 383.93173333 396.8 383.72693333 396.8 383.59039999 396.73173333 383.38559999 396.73173333S382.97599999 396.8 382.77119999 396.8L112.29866666 396.8C92.50133333 396.8 76.79999999 381.50826666 76.79999999 362.66666666 76.66346666 343.89333333 92.63786666 328.53333333 112.16213333 328.53333333l189.44 0L87.44959999 114.51733333C73.59146666 100.59093333 73.25013333 78.5408 86.63039999 65.29706666c13.17546667-13.44853333 35.36213333-12.97066667 49.152 0.88746667l214.08426667 214.08426667L349.86666666 90.89706666C349.79839999 71.23626666 365.22666666 55.46666666 383.99999999 55.46666666 402.77333333 55.33013333 418.13333333 71.30453333 418.13333333 90.8288L418.13333333 361.43786666zM928.90453333 328.53333333l-189.44 0 214.15253333-214.08426667c13.85813333-13.9264 14.19946667-35.90826667 0.88746667-49.22026666-13.17546667-13.44853333-35.36213333-12.97066667-49.152 0.88746666l-214.08426667 214.08426667L691.26826666 90.89706666C691.26826666 71.23626666 675.83999999 55.46666666 657.06666666 55.46666666 638.29333333 55.33013333 622.93333333 71.30453333 622.93333333 90.8288l0 270.60906666c0 0.2048 0.13653333 0.4096 0.13653333 0.68266667C623.06986666 362.32533333 622.93333333 362.53013333 622.93333333 362.73493333 622.93333333 371.54133333 626.61973333 379.392 632.28586666 385.39946666c0.34133333 0.34133333 0.47786667 0.8192 0.8192 1.09226667 1.09226667 1.09226667 2.59413333 1.77493333 3.8912 2.73066667C642.66239999 393.65973333 649.42079999 396.8 657.13493333 396.8c0.2048 0 0.34133333-0.06826667 0.54613333-0.06826667S658.09066666 396.8 658.29546666 396.8l270.5408 0C948.56533333 396.8 964.26666666 381.50826666 964.26666666 362.66666666 964.40319999 343.89333333 948.42879999 328.53333333 928.90453333 328.53333333zM418.13333333 635.73333333c0-8.8064-3.6864-16.5888-9.35253334-22.66453333C408.43946666 612.72746666 408.30293333 612.2496 408.02986666 611.90826666 406.86933333 610.88426666 405.43573333 610.2016 404.20693333 609.24586666 398.47253333 604.80853333 391.64586666 601.6 383.93173333 601.6 383.72693333 601.6 383.59039999 601.73653333 383.38559999 601.73653333S382.97599999 601.6 382.77119999 601.6L112.29866666 601.6C92.50133333 601.6 76.79999999 616.96 76.79999999 635.73333333 76.66346666 654.50666666 92.63786666 669.86666666 112.16213333 669.86666666l189.44 0-214.15253334 214.15253334c-13.85813333 13.85813333-14.19946667 35.84-0.88746666 49.22026666 13.17546667 13.44853333 35.36213333 12.9024 49.152-0.95573333l214.08426666-214.08426667 0 189.37173334c0 19.59253333 15.42826667 35.49866667 34.2016 35.36213333C402.77333333 943.2064 418.13333333 927.232 418.13333333 907.5712L418.13333333 637.09866666c0-0.27306667-0.13653333-0.47786667-0.13653334-0.68266666C417.99679999 636.14293333 418.13333333 635.93813333 418.13333333 635.73333333zM739.46453333 669.86666666l189.44 0c19.456 0 35.49866667-15.36 35.36213333-34.13333333C964.26666666 616.96 948.56533333 601.6 928.76799999 601.6L658.29546666 601.6C658.09066666 601.6 657.88586666 601.73653333 657.68106666 601.73653333S657.33973333 601.6 657.13493333 601.6C649.42079999 601.6 642.59413333 604.80853333 636.85973333 609.24586666 635.63093333 610.2016 634.19733333 610.88426666 633.03679999 611.90826666 632.76373333 612.2496 632.62719999 612.72746666 632.28586666 613.0688 626.61973333 619.14453333 622.93333333 626.92693333 622.93333333 635.73333333c0 0.2048 0.13653333 0.4096 0.13653333 0.68266667C623.06986666 636.6208 622.93333333 636.8256 622.93333333 637.09866666l0 270.5408C622.93333333 927.232 638.29333333 943.2064 657.06666666 942.93333333c18.77333333 0.13653333 34.2016-15.70133333 34.2016-35.36213333l0-189.37173334 214.08426667 214.08426667c13.78986667 13.85813333 35.90826667 14.40426667 49.152 0.95573333 13.312-13.312 12.97066667-35.36213333-0.88746667-49.22026666L739.46453333 669.86666666z"  ></path></symbol>\n    <symbol id="request-fullscreen" viewBox="0 0 1024 1024">\n      <path d="M69.818182 87.598545v273.128728a34.909091 34.909091 0 0 0 69.818182 0V163.653818l221.928727 222.021818a33.512727 33.512727 0 0 0 47.383273-47.383272L186.926545 116.363636h197.073455a34.909091 34.909091 0 0 0 0-69.818181H110.871273C85.364364 46.545455 69.818182 59.671273 69.818182 87.598545zM938.542545 46.545455H665.413818a34.909091 34.909091 0 0 0 0 69.818181h197.073455L640.465455 338.292364a33.512727 33.512727 0 0 0 47.383272 47.383272l221.928728-222.021818v197.073455a34.909091 34.909091 0 0 0 69.818181 0V87.598545c0-27.927273-15.453091-41.053091-40.96-41.05309z m-827.671272 907.636363h273.128727a34.909091 34.909091 0 0 0 0-69.818182H186.926545l222.021819-221.928727a33.512727 33.512727 0 0 0-47.383273-47.383273L139.636364 837.073455V640a34.909091 34.909091 0 0 0-69.818182 0v273.128727c0 27.927273 15.546182 41.053091 41.053091 41.053091z m868.724363-41.053091V640a34.909091 34.909091 0 0 0-69.818181 0v197.073455L687.941818 615.051636a33.512727 33.512727 0 0 0-47.383273 47.383273L862.487273 884.363636H665.413818a34.909091 34.909091 0 0 0 0 69.818182h273.128727c25.6 0 41.053091-13.125818 41.053091-41.053091z"  ></path></symbol>\n  </svg>\n',
            ),
            this.$element.addEventListener('click', this.onToolbarItemClick),
            this.update(e);
        }
        async update(t) {
          super.update(t);
          const { className: e, position: n, style: i } = this.options;
          (this.$element.className = `g6-toolbar ${e || ''}`),
            Object.assign(
              this.$element.style,
              i,
              (function (t) {
                const e = {
                  top: 'unset',
                  right: 'unset',
                  bottom: 'unset',
                  left: 'unset',
                };
                return (
                  t.split('-').forEach((t) => {
                    e[t] = '8px';
                  }),
                  (e.flexDirection =
                    t.startsWith('top') || t.startsWith('bottom')
                      ? 'row'
                      : 'column'),
                  e
                );
              })(n),
            ),
            (this.$element.innerHTML = await this.getDOMContent());
        }
        destroy() {
          this.$element.removeEventListener('click', this.onToolbarItemClick),
            this.$element.remove(),
            super.destroy();
        }
        async getDOMContent() {
          return (await this.options.getItems())
            .map(
              (t) =>
                `\n          <div class="g6-toolbar-item" value="${t.value}">\n            <svg aria-hidden="true" focusable="false">\n              <use xlink:href="#${t.id}"></use>\n            </svg>\n          </div>`,
            )
            .join('');
        }
        onToolbarItemClick = (t) => {
          const { onClick: e } = this.options;
          if (
            t.target instanceof Element &&
            t.target.className.includes('g6-toolbar-item')
          ) {
            const n = t.target.getAttribute('value');
            e?.(n, t.target);
          }
        };
      }
      var ar = n(68787);
      class cr extends Ji {
        static defaultOptions = {
          trigger: 'hover',
          position: 'top-right',
          enterable: !1,
          enable: !0,
          offset: [10, 10],
          style: { '.tooltip': { visibility: 'hidden' } },
        };
        currentTarget = null;
        tooltipElement = null;
        container = null;
        constructor(t, e) {
          super(t, Object.assign({}, cr.defaultOptions, e)),
            this.render(),
            this.bindEvents();
        }
        getEvents() {
          return 'click' === this.options.trigger
            ? {
                'node:click': this.onClick,
                'edge:click': this.onClick,
                'combo:click': this.onClick,
                'canvas:click': this.onPointerLeave,
                contextmenu: this.onPointerLeave,
                drag: this.onPointerLeave,
              }
            : {
                'node:pointerenter': this.onPointerEnter,
                'node:pointermove': this.onPointerMove,
                'canvas:pointermove': this.onCanvasMove,
                'edge:pointerenter': this.onPointerEnter,
                'edge:pointermove': this.onPointerMove,
                'combo:pointerenter': this.onPointerEnter,
                'combo:pointermove': this.onPointerMove,
                contextmenu: this.onPointerLeave,
                'node:drag': this.onPointerLeave,
              };
        }
        update(t) {
          this.unbindEvents(),
            super.update(t),
            this.tooltipElement &&
              this.container?.removeChild(
                this.tooltipElement.HTMLTooltipElement,
              ),
            (this.tooltipElement = this.initTooltip()),
            this.bindEvents();
        }
        render() {
          const { canvas: t } = this.context,
            e = t.getContainer();
          e &&
            ((this.container = e), (this.tooltipElement = this.initTooltip()));
        }
        unbindEvents() {
          const { graph: t } = this.context,
            e = this.getEvents();
          Object.keys(e).forEach((n) => {
            t.off(n, e[n]);
          });
        }
        bindEvents() {
          const { graph: t } = this.context,
            e = this.getEvents();
          Object.keys(e).forEach((n) => {
            t.on(n, e[n]);
          });
        }
        isEnable = (t) => {
          const { enable: e } = this.options;
          return 'function' == typeof e ? e(t) : e;
        };
        onClick = (t) => {
          const {
            target: { id: e },
          } = t;
          this.currentTarget === e
            ? ((this.currentTarget = null), this.hide(t))
            : ((this.currentTarget = e), this.show(t));
        };
        onPointerMove = (t) => {
          const { target: e } = t;
          this.currentTarget && e.id !== this.currentTarget && this.show(t);
        };
        onPointerLeave = (t) => {
          this.hide(t), (this.currentTarget = null);
        };
        onCanvasMove = (t) => {
          this.hide(t), (this.currentTarget = null);
        };
        onPointerEnter = (t) => {
          this.show(t);
        };
        showById = (t) => {
          const e = { target: { id: t } };
          this.show(e);
        };
        getElementData = (t, e) => {
          const { model: n } = this.context;
          switch (e) {
            case 'node':
              return n.getNodeData([t]);
            case 'edge':
              return n.getEdgeData([t]);
            case 'combo':
              return n.getComboData([t]);
            default:
              return [];
          }
        };
        show = (t) => {
          const {
              client: e,
              target: { id: n },
            } = t,
            i = this.context.graph.getElementType(n);
          if (!this.tooltipElement || !this.isEnable(t)) return;
          const { getContent: s, title: o } = this.options;
          this.currentTarget = n;
          const r = this.getElementData(n, i);
          let a, c;
          if (e) (a = e.x), (c = e.y);
          else {
            const t = ee(r, '0.style', { x: 0, y: 0 });
            (a = t.x), (c = t.y);
          }
          let h = {};
          if (s) h.content = s(t, r);
          else {
            const t = this.context.graph.getElementRenderStyle(n),
              e = 'node' === i ? t.fill : t.stroke;
            h = {
              title: o || i,
              data: r.map((t) => ({
                name: 'ID',
                value: t.id || `${t.source} -> ${t.target}`,
                color: e,
              })),
            };
          }
          this.tooltipElement.update({
            x: a,
            y: c,
            style: { '.tooltip': { visibility: 'visible' } },
            ...h,
          });
        };
        hide = (t) => {
          if (!t) return void this.tooltipElement?.hide();
          if (!this.tooltipElement || !this.isEnable(t)) return;
          const {
            client: { x: e, y: n },
          } = t;
          this.tooltipElement.hide(e, n);
        };
        initTooltip = () => {
          const { canvas: t } = this.context,
            { center: e } = t.getBounds(),
            n = t.getContainer(),
            { top: i, left: s } = n.getBoundingClientRect(),
            {
              style: o,
              position: r,
              enterable: a,
              container: c = { x: -s, y: -i },
              title: h,
              offset: l,
            } = this.options,
            [d, u] = e,
            [p, g] = t.getSize(),
            f = new ar.u({
              className: 'tooltip',
              style: {
                x: d,
                y: u,
                container: c,
                title: h,
                bounding: { x: 0, y: 0, width: p, height: g },
                position: r,
                enterable: a,
                offset: l,
                style: o,
              },
            });
          return this.container?.appendChild(f.HTMLTooltipElement), f;
        };
        destroy() {
          this.unbindEvents(),
            this.tooltipElement &&
              this.container?.removeChild(
                this.tooltipElement.HTMLTooltipElement,
              ),
            super.destroy();
        }
      }
      let hr;
      function lr(t, e) {
        hr || (hr = document.createElement('canvas')),
          (hr.width = t),
          (hr.height = e);
        return hr.getContext('2d').clearRect(0, 0, t, e), hr;
      }
      class dr extends Ji {
        static defaultOptions = {
          width: 200,
          height: 100,
          opacity: 0.2,
          rotate: Math.PI / 12,
          text: '',
          textFill: '#000',
          textFontSize: 16,
          textAlign: 'center',
          textBaseline: 'middle',
          backgroundRepeat: 'repeat',
        };
        $element = Xi('watermark');
        constructor(t, e) {
          super(t, Object.assign({}, dr.defaultOptions, e));
          this.context.canvas.getContainer().appendChild(this.$element),
            this.update(e);
        }
        async update(t) {
          super.update(t);
          const {
            width: e,
            height: n,
            text: i,
            imageURL: s,
            ...o
          } = this.options;
          Object.keys(o).forEach((e) => {
            e.startsWith('background') && (this.$element.style[e] = t[e]);
          });
          const r = s
            ? await (async function (t, e, n, i) {
                const s = lr(t, e),
                  o = s.getContext('2d'),
                  { rotate: r, opacity: a } = i;
                r && o.rotate(r), a && (o.globalAlpha = a);
                const c = new Image();
                return (
                  (c.crossOrigin = 'anonymous'),
                  (c.src = n),
                  new Promise((n) => {
                    c.onload = function () {
                      const i = t > c.width ? (t - c.width) / 2 : 0,
                        r = e > c.height ? (e - c.height) / 2 : 0;
                      o.drawImage(
                        c,
                        0,
                        0,
                        c.width,
                        c.height,
                        i,
                        r,
                        t - 2 * i,
                        e - 2 * r,
                      ),
                        n(s.toDataURL());
                    };
                  })
                );
              })(e, n, s, o)
            : await (async function (t, e, n, i) {
                const s = lr(t, e),
                  o = s.getContext('2d'),
                  {
                    rotate: r,
                    opacity: a,
                    textFill: c,
                    textFontSize: h,
                    textFontFamily: l,
                    textFontVariant: d,
                    textFontWeight: u,
                    textAlign: p,
                    textBaseline: g,
                  } = i;
                return (
                  (o.textAlign = p),
                  (o.textBaseline = g),
                  o.translate(t / 2, e / 2),
                  (o.font = `${h}px ${l} ${d} ${u}`),
                  r && o.rotate(r),
                  a && (o.globalAlpha = a),
                  c && ((o.fillStyle = c), o.fillText(`${n}`, 0, 0)),
                  s.toDataURL()
                );
              })(e, n, i, o);
          this.$element.style.backgroundImage = `url(${r})`;
        }
        destroy() {
          super.destroy(), this.$element.remove();
        }
      }
      const ur = ['#7E92B5', '#F4664A', '#FFBE3A'],
        pr = {
          type: 'group',
          color: [
            '#1783FF',
            '#00C9C9',
            '#F08F56',
            '#D580FF',
            '#7863FF',
            '#DB9D0D',
            '#60C42D',
            '#FF80CA',
            '#2491B3',
            '#17C76F',
          ],
        },
        gr = {
          type: 'group',
          color: [
            '#99ADD1',
            '#1783FF',
            '#00C9C9',
            '#F08F56',
            '#D580FF',
            '#7863FF',
            '#DB9D0D',
            '#60C42D',
            '#FF80CA',
            '#2491B3',
            '#17C76F',
          ],
        };
      function fr(t) {
        const {
          bgColor: e,
          textColor: n,
          nodeColor: i,
          nodeColorDisabled: s,
          nodeStroke: o,
          nodeHaloStrokeOpacityActive: r = 0.15,
          nodeHaloStrokeOpacitySelected: a = 0.25,
          nodeOpacityDisabled: c = 0.06,
          nodeIconOpacityInactive: h = 0.85,
          nodeOpacityInactive: l = 0.25,
          nodeBadgePalette: d = ur,
          nodePaletteOptions: u = pr,
          edgeColor: p,
          edgeColorDisabled: g,
          edgePaletteOptions: f = gr,
          comboColor: m,
          comboColorDisabled: y,
          comboStroke: b,
          comboStrokeDisabled: E,
          edgeColorInactive: x,
        } = t;
        return {
          background: e,
          node: {
            palette: u,
            style: {
              badgeFill: '#fff',
              badgeFontSize: 8,
              badgePadding: [0, 4],
              badgePalette: d,
              fill: i,
              fillOpacity: 1,
              halo: !1,
              iconFill: '#fff',
              iconOpacity: 1,
              labelBackground: !1,
              labelBackgroundFill: e,
              labelBackgroundLineWidth: 0,
              labelBackgroundOpacity: 0.75,
              labelFill: n,
              labelFillOpacity: 0.85,
              labelLineHeight: 16,
              labelPadding: [0, 2],
              labelFontSize: 12,
              labelFontWeight: 400,
              labelOpacity: 1,
              labelOffsetY: 2,
              lineWidth: 0,
              portFill: i,
              portLineWidth: 1,
              portStroke: o,
              portStrokeOpacity: 0.65,
              size: 32,
              stroke: o,
              strokeOpacity: 1,
              zIndex: 2,
            },
            state: {
              selected: {
                halo: !0,
                haloLineWidth: 24,
                haloStrokeOpacity: a,
                labelFontSize: 12,
                labelFontWeight: 'bold',
                lineWidth: 4,
                stroke: o,
              },
              active: { halo: !0, haloLineWidth: 12, haloStrokeOpacity: r },
              highlight: {
                labelFontWeight: 'bold',
                lineWidth: 4,
                stroke: o,
                strokeOpacity: 0.85,
              },
              inactive: {
                badgeBackgroundOpacity: l,
                donutOpacity: l,
                fillOpacity: l,
                iconOpacity: h,
                labelFill: n,
                labelFillOpacity: l,
                strokeOpacity: l,
              },
              disabled: {
                badgeBackgroundOpacity: 0.25,
                donutOpacity: c,
                fill: s,
                fillOpacity: c,
                iconFill: s,
                iconOpacity: 0.25,
                labelFill: n,
                labelFillOpacity: 0.25,
                strokeOpacity: c,
              },
            },
            animation: {
              enter: 'fade',
              exit: 'fade',
              show: 'fade',
              hide: 'fade',
              expand: 'node-expand',
              collapse: 'node-collapse',
              update: [{ fields: ['x', 'y', 'fill', 'stroke'] }],
              translate: [{ fields: ['x', 'y'] }],
            },
          },
          edge: {
            palette: f,
            style: {
              badgeBackgroundFill: p,
              badgeFill: '#fff',
              badgeFontSize: 8,
              badgeOffsetX: 10,
              fillOpacity: 1,
              halo: !1,
              haloLineWidth: 12,
              haloStrokeOpacity: 1,
              increasedLineWidthForHitTesting: 2,
              labelBackground: !1,
              labelBackgroundFill: e,
              labelBackgroundLineWidth: 0,
              labelBackgroundOpacity: 0.75,
              labelBackgroundPadding: [4, 4, 4, 4],
              labelFill: n,
              labelFontSize: 12,
              labelFontWeight: 400,
              labelOpacity: 1,
              labelPlacement: 'center',
              labelTextBaseline: 'middle',
              lineWidth: 1,
              stroke: p,
              strokeOpacity: 1,
              zIndex: 1,
            },
            state: {
              selected: {
                halo: !0,
                haloStrokeOpacity: 0.25,
                labelFontSize: 14,
                labelFontWeight: 'bold',
                lineWidth: 3,
              },
              active: { halo: !0, haloStrokeOpacity: 0.15 },
              highlight: { labelFontWeight: 'bold', lineWidth: 3 },
              inactive: {
                stroke: x,
                fillOpacity: 0.08,
                labelOpacity: 0.25,
                strokeOpacity: 0.08,
                badgeBackgroundOpacity: 0.25,
              },
              disabled: {
                stroke: g,
                fillOpacity: 0.45,
                strokeOpacity: 0.45,
                labelOpacity: 0.25,
                badgeBackgroundOpacity: 0.45,
              },
            },
            animation: {
              enter: 'fade',
              exit: 'fade',
              expand: 'path-in',
              collapse: 'path-out',
              show: 'fade',
              hide: 'fade',
              update: [
                { fields: ['sourceNode', 'targetNode'] },
                { fields: ['stroke'], shape: 'key' },
              ],
              translate: [{ fields: ['sourceNode', 'targetNode'] }],
            },
          },
          combo: {
            style: {
              collapsedMarkerFill: e,
              collapsedMarkerFontSize: 12,
              collapsedMarkerFillOpacity: 1,
              collapsedSize: 32,
              collapsedFillOpacity: 1,
              fill: m,
              halo: !1,
              haloLineWidth: 12,
              haloStroke: b,
              haloStrokeOpacity: 0.25,
              labelBackground: !1,
              labelBackgroundFill: e,
              labelBackgroundLineWidth: 0,
              labelBackgroundOpacity: 0.75,
              labelBackgroundPadding: [2, 4, 2, 4],
              labelFill: n,
              labelFontSize: 12,
              labelFontWeight: 400,
              labelOpacity: 1,
              lineDash: 0,
              lineWidth: 1,
              fillOpacity: 0.04,
              strokeOpacity: 1,
              padding: 10,
              stroke: b,
            },
            state: {
              selected: {
                halo: !0,
                labelFontSize: 14,
                labelFontWeight: 700,
                lineWidth: 4,
              },
              active: { halo: !0 },
              highlight: { labelFontWeight: 700, lineWidth: 4 },
              inactive: {
                fillOpacity: 0.65,
                labelOpacity: 0.25,
                strokeOpacity: 0.65,
              },
              disabled: {
                fill: y,
                fillOpacity: 0.25,
                labelOpacity: 0.25,
                stroke: E,
                strokeOpacity: 0.25,
              },
            },
            animation: {
              enter: 'fade',
              exit: 'fade',
              show: 'fade',
              hide: 'fade',
              expand: 'combo-expand',
              collapse: 'combo-collapse',
              update: [
                { fields: ['x', 'y'] },
                { fields: ['fill', 'stroke', 'lineWidth'], shape: 'key' },
              ],
              translate: [{ fields: ['x', 'y'] }],
            },
          },
        };
      }
      const mr = fr({
          bgColor: '#000000',
          comboColor: '#fdfdfd',
          comboColorDisabled: '#d0e4ff',
          comboStroke: '#99add1',
          comboStrokeDisabled: '#969696',
          edgeColor: '#637088',
          edgeColorDisabled: '#637088',
          edgeColorInactive: '#D0E4FF',
          edgePaletteOptions: {
            type: 'group',
            color: [
              '#637088',
              '#0F55A6',
              '#008383',
              '#9C5D38',
              '#8B53A6',
              '#4E40A6',
              '#8F6608',
              '#3E801D',
              '#A65383',
              '#175E75',
              '#0F8248',
            ],
          },
          nodeColor: '#1783ff',
          nodeColorDisabled: '#D0E4FF',
          nodeHaloStrokeOpacityActive: 0.25,
          nodeHaloStrokeOpacitySelected: 0.45,
          nodeIconOpacityInactive: 0.45,
          nodeOpacityDisabled: 0.25,
          nodeOpacityInactive: 0.45,
          nodeStroke: '#d0e4ff',
          textColor: '#ffffff',
        }),
        yr = fr({
          bgColor: '#ffffff',
          comboColor: '#99ADD1',
          comboColorDisabled: '#f0f0f0',
          comboStroke: '#99add1',
          comboStrokeDisabled: '#d9d9d9',
          edgeColor: '#99add1',
          edgeColorDisabled: '#d9d9d9',
          edgeColorInactive: '#1B324F',
          nodeColor: '#1783ff',
          nodeColorDisabled: '#1B324F',
          nodeHaloStrokeOpacityActive: 0.15,
          nodeHaloStrokeOpacitySelected: 0.25,
          nodeIconOpacityInactive: 0.85,
          nodeOpacityDisabled: 0.06,
          nodeOpacityInactive: 0.25,
          nodeStroke: '#000000',
          textColor: '#000000',
        });
      class br extends J {
        beforeDraw(t, e) {
          return t;
        }
      }
      function Er(t, e, n, i, s) {
        const o = F(i),
          r = `${n}s`,
          a = s
            ? i
            : t.add[r].get(o) || t.update[r].get(o) || t.remove[r].get(o) || i;
        Object.entries(t).forEach(([t, n]) => {
          e === t ? n[r].set(o, a) : n[r].delete(o);
        });
      }
      const xr = (t, e, n, i) => {
        const s = `${n}s`,
          o = F(i);
        t.add[s].has(o) || t.update[s].has(o) || t[e][s].set(F(i), i);
      };
      class vr {
        type;
        constructor(t) {
          this.type = t;
        }
      }
      class wr extends vr {
        data;
        constructor(t, e) {
          super(t), (this.data = e);
        }
      }
      class Sr extends vr {
        animationType;
        animation;
        data;
        constructor(t, e, n, i) {
          super(t),
            (this.animationType = e),
            (this.animation = n),
            (this.data = i);
        }
      }
      class Cr extends vr {
        elementType;
        data;
        constructor(t, e, n) {
          super(t), (this.elementType = e), (this.data = n);
        }
      }
      class Or extends vr {
        data;
        constructor(t, e) {
          super(t), (this.data = e);
        }
      }
      function Tr(t, e) {
        t.emit(e.type, e);
      }
      class Ar {
        context;
        constructor(t) {
          this.context = t;
        }
        tasks = [];
        animations = new Set();
        getTasks() {
          const t = [...this.tasks];
          return (this.tasks = []), t;
        }
        add(t, e) {
          this.tasks.push([t, e]);
        }
        animate(t, e, n) {
          e?.before?.();
          const i = this.getTasks()
            .map(([e, i]) => {
              const { element: s, elementType: o, stage: r } = e,
                a = B(this.context.options, o, r, t);
              i?.before?.();
              const c = H(s, this.inferStyle(e, n), a);
              return (
                c
                  ? (i?.beforeAnimate?.(c),
                    c.finished.then(() => {
                      i?.afterAnimate?.(c),
                        i?.after?.(),
                        this.animations.delete(c);
                    }))
                  : i?.after?.(),
                c
              );
            })
            .filter(Boolean);
          i.forEach((t) => this.animations.add(t));
          const s = k(i);
          return (
            s
              ? (e?.beforeAnimate?.(s),
                s.finished.then(() => {
                  e?.afterAnimate?.(s), e?.after?.(), this.release();
                }))
              : e?.after?.(),
            s
          );
        }
        inferStyle(t, e) {
          const {
              element: n,
              elementType: i,
              stage: s,
              originalStyle: o,
              modifiedStyle: r,
            } = t,
            a = { ...o },
            c = { ...r },
            h = () => ye(n, 'opacity') ?? I('opacity');
          if ('enter' === s) Object.assign(a, { opacity: 0 });
          else if ('exit' === s) Object.assign(c, { opacity: 0 });
          else if ('show' === s)
            Object.assign(a, { opacity: 0 }),
              Object.assign(c, { opacity: h() });
          else if ('hide' === s)
            Object.assign(a, { opacity: h() }),
              Object.assign(c, { opacity: 0 });
          else if ('collapse' === s) {
            const { collapse: t } = e || {},
              { target: s, descendants: o, position: r } = t;
            if ('node' === i) {
              if (o.includes(n.id)) {
                const [t, e, n] = r;
                Object.assign(c, { x: t, y: e, z: n });
              }
            } else if ('combo' === i) {
              if (n.id === s || o.includes(n.id)) {
                const [t, e] = r;
                Object.assign(c, { x: t, y: e, childrenNode: a.childrenNode });
              }
            } else
              'edge' === i &&
                Object.assign(c, {
                  sourceNode: a.sourceNode,
                  targetNode: a.targetNode,
                });
          } else if ('expand' === s) {
            const { expand: t } = e || {},
              { target: s, descendants: o, position: r } = t;
            if ('node' === i) {
              if (n.id === s || o.includes(n.id)) {
                const [t, e, n] = r;
                Object.assign(a, { x: t, y: e, z: n });
              }
            } else if ('combo' === i) {
              if (n.id === s || o.includes(n.id)) {
                const [t, e, n] = r;
                Object.assign(a, {
                  x: t,
                  y: e,
                  z: n,
                  childrenNode: c.childrenNode,
                });
              }
            } else
              'edge' === i &&
                Object.assign(a, {
                  sourceNode: c.sourceNode,
                  targetNode: c.targetNode,
                });
          }
          return [a, c];
        }
        stop() {
          this.animations.forEach((t) => t.cancel());
        }
        clear() {
          this.tasks = [];
        }
        release() {
          const { canvas: t } = this.context,
            e = t.document?.timeline?.animationsWithPromises;
          e &&
            (t.document.timeline.animationsWithPromises = e.filter(
              (t) => 'finished' !== t.playState,
            ));
        }
        destroy() {
          this.stop(), this.animations.clear(), (this.tasks = []);
        }
      }
      class Dr {
        context;
        batchCount = 0;
        constructor(t) {
          this.context = t;
        }
        emit(t) {
          const { graph: e } = this.context;
          e.emit(t.type, t);
        }
        startBatch(t = !0) {
          this.batchCount++,
            1 === this.batchCount &&
              this.emit(new wr(O.BATCH_START, { initiate: t }));
        }
        endBatch() {
          this.batchCount--,
            0 === this.batchCount && this.emit(new wr(O.BATCH_END));
        }
        get isBatching() {
          return this.batchCount > 0;
        }
        destroy() {
          this.context = null;
        }
      }
      class Mr extends q {
        currentTarget = null;
        currentTargetType = null;
        category = 'behavior';
        constructor(t) {
          super(t),
            this.forwardEvents(),
            this.setBehaviors(this.context.options.behaviors || []);
        }
        setBehaviors(t) {
          this.setExtensions(t);
        }
        forwardEvents() {
          const t = this.context.canvas.getContainer();
          t &&
            [S.KEY_DOWN, S.KEY_UP].forEach((e) => {
              t.addEventListener(e, this.forwardContainerEvents);
            });
          const e = this.context.canvas.document;
          e &&
            [
              w.CLICK,
              w.DBLCLICK,
              w.POINTER_OVER,
              w.POINTER_LEAVE,
              w.POINTER_ENTER,
              w.POINTER_MOVE,
              w.POINTER_OUT,
              w.POINTER_DOWN,
              w.POINTER_UP,
              w.CONTEXT_MENU,
              w.DRAG_START,
              w.DRAG,
              w.DRAG_END,
              w.DRAG_ENTER,
              w.DRAG_OVER,
              w.DRAG_LEAVE,
              w.DROP,
              w.WHEEL,
            ].forEach((t) => {
              e.addEventListener(t, this.forwardCanvasEvents);
            });
        }
        forwardCanvasEvents = (t) => {
          const { target: e } = t,
            n = (function (t) {
              if (!t) return null;
              if (t instanceof s.BB) return { type: 'canvas', element: t };
              let e = t;
              for (; e; ) {
                if (Kn(e)) return { type: 'node', element: e };
                if (Xn(e)) return { type: 'edge', element: e };
                if (qn(e)) return { type: 'combo', element: e };
                e = e.parentElement;
              }
              return null;
            })(e);
          if (!n) return;
          const { graph: i, canvas: o } = this.context,
            { type: r, element: a } = n;
          if ('destroyed' in a && (li(a) || a.destroyed)) return;
          const { type: c, detail: h, button: l } = t,
            d = { ...t, target: a, targetType: r, originalTarget: e };
          c === w.POINTER_MOVE &&
            (this.currentTarget !== a &&
              (this.currentTarget &&
                i.emit(`${this.currentTargetType}:${w.POINTER_LEAVE}`, {
                  ...d,
                  type: w.POINTER_LEAVE,
                  target: this.currentTarget,
                }),
              a &&
                (Object.assign(d, { type: w.POINTER_ENTER }),
                i.emit(`${r}:${w.POINTER_ENTER}`, d))),
            (this.currentTarget = a),
            (this.currentTargetType = r)),
            (c === w.CLICK && 2 === l) ||
              (i.emit(`${r}:${c}`, d), i.emit(c, d)),
            c === w.CLICK &&
              2 === h &&
              (Object.assign(d, { type: w.DBLCLICK }),
              i.emit(`${r}:${w.DBLCLICK}`, d),
              i.emit(w.DBLCLICK, d)),
            c === w.POINTER_DOWN &&
              2 === l &&
              (Object.assign(d, {
                type: w.CONTEXT_MENU,
                preventDefault: () => {
                  o.getContainer()?.addEventListener(
                    w.CONTEXT_MENU,
                    (t) => t.preventDefault(),
                    { once: !0 },
                  );
                },
              }),
              i.emit(`${r}:${w.CONTEXT_MENU}`, d),
              i.emit(w.CONTEXT_MENU, d));
        };
        forwardContainerEvents = (t) => {
          this.context.graph.emit(t.type, t);
        };
        destroy() {
          const t = this.context.canvas.getContainer();
          t &&
            [S.KEY_DOWN, S.KEY_UP].forEach((e) => {
              t.removeEventListener(e, this.forwardContainerEvents);
            }),
            this.context.canvas.document.removeAllEventListeners(),
            super.destroy();
        }
      }
      var Rr = n(98875);
      const Pr = ['background', 'main', 'label', 'transient'];
      class kr {
        extends;
        config;
        getConfig() {
          return this.config;
        }
        getLayer(t = 'main') {
          return this.extends.layers[t];
        }
        getLayers() {
          return this.extends.layers;
        }
        getRenderer(t) {
          return this.extends.renderers[t];
        }
        getCamera(t = 'main') {
          return this.getLayer(t).getCamera();
        }
        getRoot(t = 'main') {
          return this.getLayer(t).getRoot();
        }
        getContextService(t = 'main') {
          return this.getLayer(t).getContextService();
        }
        setCursor(t) {
          (this.config.cursor = t), this.getLayer().setCursor(t);
        }
        get document() {
          return this.getLayer().document;
        }
        get context() {
          return this.getLayer().context;
        }
        constructor(t) {
          this.config = t;
          const { renderer: e, background: n, cursor: i, ...o } = t,
            r = Nr(e),
            a = Object.fromEntries(
              Pr.map((t) => [
                t,
                new s.Xz({
                  ...o,
                  supportsMutipleCanvasesInOneContainer: !0,
                  renderer: r[t],
                  background: 'background' === t ? n : void 0,
                }),
              ]),
            );
          Ir(a),
            (this.extends = {
              config: t,
              renderer: e,
              renderers: r,
              layers: a,
            });
        }
        get ready() {
          return Promise.all(
            Object.entries(this.getLayers()).map(([, t]) => t.ready),
          );
        }
        resize(t, e) {
          Object.assign(this.extends.config, { width: t, height: e }),
            Object.values(this.getLayers()).forEach((n) => n.resize(t, e));
        }
        getBounds() {
          return lt(
            Object.values(this.getLayers())
              .map((t) => t.document.documentElement)
              .filter((t) => t.childNodes.length > 0)
              .map((t) => t.getBounds()),
          );
        }
        getContainer() {
          const t = this.extends.config.container;
          return 'string' == typeof t ? document.getElementById(t) : t;
        }
        getSize() {
          return [
            this.extends.config.width || 0,
            this.extends.config.height || 0,
          ];
        }
        appendChild(t, e) {
          const n = t.style?.$layer || 'main';
          return this.getLayer(n).appendChild(t, e);
        }
        setRenderer(t) {
          if (t === this.extends.renderer) return;
          const e = Nr(t);
          (this.extends.renderers = e),
            Object.entries(e).forEach(([t, e]) =>
              this.getLayer(t).setRenderer(e),
            ),
            Ir(this.getLayers());
        }
        getCanvasByViewport(t) {
          return kt(this.getLayer().viewport2Canvas(Nt(t)));
        }
        getViewportByCanvas(t) {
          return kt(this.getLayer().canvas2Viewport(Nt(t)));
        }
        getViewportByClient(t) {
          return kt(this.getLayer().client2Viewport(Nt(t)));
        }
        getClientByViewport(t) {
          return kt(this.getLayer().viewport2Client(Nt(t)));
        }
        getClientByCanvas(t) {
          return this.getClientByViewport(this.getViewportByCanvas(t));
        }
        getCanvasByClient(t) {
          const e = this.getLayer(),
            n = e.client2Viewport(Nt(t));
          return kt(e.viewport2Canvas(n));
        }
        async toDataURL(t = {}) {
          const e = window.devicePixelRatio || 1,
            { mode: n = 'viewport', ...i } = t;
          let [o, r, a, c] = [0, 0, 0, 0];
          if ('viewport' === n) [a, c] = this.getSize();
          else if ('overall' === n) {
            const t = this.getBounds(),
              e = at(t);
            ([o, r] = t.min), ([a, c] = e);
          }
          const h = (function (t) {
              var e = document.createElement('div');
              e.innerHTML = t;
              var n = e.childNodes[0];
              return n && e.contains(n) && e.removeChild(n), n;
            })('<div id="virtual-image"></div>'),
            l = new s.Xz({
              width: a,
              height: c,
              renderer: new Jo.Th(),
              devicePixelRatio: e,
              container: h,
              background: this.extends.config.background,
            });
          await l.ready,
            l.appendChild(this.getLayer('background').getRoot().cloneNode(!0)),
            l.appendChild(this.getRoot().cloneNode(!0));
          const d = this.getLayer('label').getRoot().cloneNode(!0),
            u = l.viewport2Canvas({ x: 0, y: 0 }),
            p = this.getCanvasByViewport([0, 0]);
          d.translate([p[0] - u.x, p[1] - u.y]),
            d.scale(1 / this.getCamera().getZoom()),
            l.appendChild(d),
            l.appendChild(this.getLayer('transient').getRoot().cloneNode(!0));
          const g = this.getCamera(),
            f = l.getCamera();
          if ('viewport' === n)
            f.setZoom(g.getZoom()),
              f.setPosition(g.getPosition()),
              f.setFocalPoint(g.getFocalPoint());
          else if ('overall' === n) {
            const [t, e, n] = f.getPosition(),
              [i, s, a] = f.getFocalPoint();
            f.setPosition([t + o, e + r, n]),
              f.setFocalPoint([i + o, s + r, a]);
          }
          const m = l.getContextService();
          return new Promise((t) => {
            l.addEventListener(s.$6.RERENDER, async () => {
              await new Promise((t) => setTimeout(t, 300));
              const e = await m.toDataURL(i);
              t(e);
            });
          });
        }
        destroy() {
          Object.values(this.getLayers()).forEach((t) => {
            t.getCamera().cancelLandmarkAnimation(), t.destroy();
          });
        }
      }
      function Nr(t) {
        return Object.fromEntries(
          Pr.map((e) => {
            const n = t?.(e) || new Jo.Th();
            return (
              'main' === e
                ? n.registerPlugin(
                    new Rr.S({
                      isDocumentDraggable: !0,
                      isDocumentDroppable: !0,
                      dragstartDistanceThreshold: 10,
                      dragstartTimeThreshold: 100,
                    }),
                  )
                : n.unregisterPlugin(n.getPlugin('dom-interaction')),
              [e, n]
            );
          }),
        );
      }
      function Ir(t) {
        Object.entries(t).forEach(([t, e]) => {
          const n = e.getContextService().getDomElement();
          (n.style.position = 'absolute'),
            (n.style.outline = 'none'),
            (n.tabIndex = 1),
            'main' !== t && (n.style.pointerEvents = 'none');
        });
      }
      function Lr(t, e) {
        const { data: n, style: i, ...s } = t,
          { data: o, style: r, ...a } = e,
          c = { ...s, ...a };
        return (
          (n || o) && Object.assign(c, { data: { ...n, ...o } }),
          (i || r) && Object.assign(c, { style: { ...i, ...r } }),
          c
        );
      }
      function Br(t) {
        const { data: e, style: n, ...i } = t,
          s = i;
        return e && (s.data = { ...e }), n && (s.style = { ...n }), s;
      }
      function _r(t) {
        const { id: e = F(t), style: n, data: i, ...s } = t,
          o = { ...t, style: { ...n }, data: { ...i } };
        return (function (t) {
          return 'source' in t && 'target' in t;
        })(t)
          ? { id: e, data: o, ...s }
          : { id: e, data: o };
      }
      function Fr(t) {
        return t.data;
      }
      class zr {
        model;
        latestRemovedComboIds = new Set();
        comboIds = new Set();
        changes = [];
        batchCount = 0;
        isTraceless = !1;
        constructor() {
          this.model = new bi.k();
        }
        pushChange(t) {
          if (this.isTraceless) return;
          const { type: e } = t;
          if (
            e === b.NodeUpdated ||
            e === b.EdgeUpdated ||
            e === b.ComboUpdated
          ) {
            const { value: n, original: i } = t;
            this.changes.push({ value: Br(n), original: Br(i), type: e });
          } else this.changes.push({ value: Br(t.value), type: e });
        }
        getChanges() {
          return this.changes;
        }
        clearChanges() {
          this.changes = [];
        }
        batch(t) {
          this.batchCount++, this.model.batch(t), this.batchCount--;
        }
        silence(t) {
          (this.isTraceless = !0), t(), (this.isTraceless = !1);
        }
        isCombo(t) {
          return this.comboIds.has(t) || this.latestRemovedComboIds.has(t);
        }
        getData() {
          return {
            nodes: this.getNodeData(),
            edges: this.getEdgeData(),
            combos: this.getComboData(),
          };
        }
        getNodeData(t) {
          return this.model.getAllNodes().reduce((e, n) => {
            const i = Fr(n);
            return (
              this.isCombo(F(i)) ||
                ((void 0 === t || t.includes(F(i))) && e.push(i)),
              e
            );
          }, []);
        }
        getEdgeDatum(t) {
          return Fr(this.model.getEdge(t));
        }
        getEdgeData(t) {
          return this.model.getAllEdges().reduce((e, n) => {
            const i = Fr(n);
            return (void 0 === t || t.includes(F(i))) && e.push(i), e;
          }, []);
        }
        getComboData(t) {
          return this.model.getAllNodes().reduce((e, n) => {
            const i = Fr(n);
            return this.isCombo(F(i))
              ? ((void 0 === t || t.includes(F(i))) && e.push(i), e)
              : e;
          }, []);
        }
        getAncestorsData(t, e) {
          const { model: n } = this;
          return n.hasNode(t) && n.hasTreeStructure(e)
            ? n.getAncestors(t, e).map(Fr)
            : [];
        }
        getDescendantsData(t) {
          const e = this.getElementDataById(t),
            n = [];
          return (
            Kt(
              e,
              (t) => {
                t !== e && n.push(t);
              },
              (t) => this.getChildrenData(F(t)),
              'TB',
            ),
            n
          );
        }
        getParentData(t, e) {
          const { model: n } = this;
          if (!e)
            return void r.warn('The hierarchy structure key is not specified');
          if (!n.hasNode(t) || !n.hasTreeStructure(e)) return;
          const i = n.getParent(t, e);
          return i ? Fr(i) : void 0;
        }
        getChildrenData(t) {
          const e = 'node' === this.getElementType(t) ? M : D,
            { model: n } = this;
          return n.hasNode(t) && n.hasTreeStructure(e)
            ? n.getChildren(t, e).map(Fr)
            : [];
        }
        getElementsDataByType(t) {
          return 'node' === t
            ? this.getNodeData()
            : 'edge' === t
              ? this.getEdgeData()
              : 'combo' === t
                ? this.getComboData()
                : [];
        }
        getElementDataById(t) {
          return 'edge' === this.getElementType(t)
            ? this.getEdgeDatum(t)
            : this.getNodeLikeDatum(t);
        }
        getNodeLikeDatum(t) {
          return Fr(this.model.getNode(t));
        }
        getNodeLikeData(t) {
          return this.model.getAllNodes().reduce((e, n) => {
            const i = Fr(n);
            return t ? t.includes(F(i)) && e.push(i) : e.push(i), e;
          }, []);
        }
        getElementDataByState(t, e) {
          return this.getElementsDataByType(t).filter((t) =>
            t.states?.includes(e),
          );
        }
        getElementState(t) {
          return this.getElementDataById(t)?.states || [];
        }
        hasNode(t) {
          return this.model.hasNode(t) && !this.isCombo(t);
        }
        hasEdge(t) {
          return this.model.hasEdge(t);
        }
        hasCombo(t) {
          return this.model.hasNode(t) && this.isCombo(t);
        }
        getRelatedEdgesData(t, e = 'both') {
          return this.model.getRelatedEdges(t, e).map(Fr);
        }
        getNeighborNodesData(t) {
          return this.model.getNeighbors(t).map(Fr);
        }
        setData(t) {
          const { nodes: e = [], edges: n = [], combos: i = [] } = t,
            { nodes: s, edges: o, combos: r } = this.getData(),
            a = X(s, e, (t) => F(t)),
            c = X(o, n, (t) => F(t)),
            h = X(r, i, (t) => F(t));
          this.batch(() => {
            this.addData({ nodes: a.enter, edges: c.enter, combos: h.enter }),
              this.updateData({
                nodes: a.update,
                edges: c.update,
                combos: h.update,
              }),
              this.removeData({
                nodes: a.exit.map(F),
                edges: c.exit.map(F),
                combos: h.exit.map(F),
              });
          });
        }
        addData(t) {
          const { nodes: e, edges: n, combos: i } = t;
          this.batch(() => {
            this.addComboData(i), this.addNodeData(e), this.addEdgeData(n);
          });
        }
        addNodeData(t = []) {
          t.length &&
            (this.model.addNodes(
              t.map(
                (t) => (
                  this.pushChange({ value: t, type: b.NodeAdded }), _r(t)
                ),
              ),
            ),
            this.updateNodeLikeHierarchy(t));
        }
        addEdgeData(t = []) {
          t.length &&
            this.model.addEdges(
              t.map(
                (t) => (
                  this.pushChange({ value: t, type: b.EdgeAdded }), _r(t)
                ),
              ),
            );
        }
        addComboData(t = []) {
          if (!t.length) return;
          const { model: e } = this;
          e.hasTreeStructure(D) || e.attachTreeStructure(D),
            e.addNodes(
              t.map(
                (t) => (
                  this.comboIds.add(F(t)),
                  this.pushChange({ value: t, type: b.ComboAdded }),
                  _r(t)
                ),
              ),
            ),
            this.updateNodeLikeHierarchy(t);
        }
        addChildrenData(t, e) {
          const n = this.getNodeLikeDatum(t),
            i = e.map(F);
          this.addNodeData(e),
            this.updateNodeData([
              { id: t, children: [...(n.children || []), ...i] },
            ]),
            this.addEdgeData(i.map((e) => ({ source: t, target: e })));
        }
        updateNodeLikeHierarchy(t) {
          if (!this.enableUpdateNodeLikeHierarchy) return;
          const { model: e } = this;
          t.forEach((t) => {
            const n = F(t);
            e.attachTreeStructure(D), this.setParent(n, z(t), D);
            const i = t.children;
            if (void 0 !== i) {
              e.attachTreeStructure(M);
              const t = i.filter((t) => e.hasNode(t));
              t.forEach((t) => this.setParent(t, n, M)),
                t.length !== i.length &&
                  this.updateNodeData([{ id: n, children: t }]);
            }
          });
        }
        enableUpdateNodeLikeHierarchy = !0;
        preventUpdateNodeLikeHierarchy(t) {
          (this.enableUpdateNodeLikeHierarchy = !1),
            t(),
            (this.enableUpdateNodeLikeHierarchy = !0);
        }
        updateData(t) {
          const { nodes: e, edges: n, combos: i } = t;
          this.batch(() => {
            this.updateNodeData(e),
              this.updateComboData(i),
              this.updateEdgeData(n);
          });
        }
        updateNodeData(t = []) {
          if (!t.length) return;
          const { model: e } = this;
          this.batch(() => {
            const n = [];
            t.forEach((t) => {
              const i = F(t),
                s = Fr(e.getNode(i));
              if (g(s, t)) return;
              const o = Lr(s, t);
              this.pushChange({ value: o, original: s, type: b.NodeUpdated }),
                e.mergeNodeData(i, o),
                n.push(o);
            }),
              this.updateNodeLikeHierarchy(n);
          });
        }
        refreshData() {
          const { nodes: t, edges: e, combos: n } = this.getData();
          t.forEach((t) => {
            this.pushChange({ value: t, original: t, type: b.NodeUpdated });
          }),
            e.forEach((t) => {
              this.pushChange({ value: t, original: t, type: b.EdgeUpdated });
            }),
            n.forEach((t) => {
              this.pushChange({ value: t, original: t, type: b.ComboUpdated });
            });
        }
        syncNodeDatum(t) {
          const { model: e } = this,
            n = F(t),
            i = Lr(Fr(e.getNode(n)), t);
          e.mergeNodeData(n, i);
        }
        updateEdgeData(t = []) {
          if (!t.length) return;
          const { model: e } = this;
          this.batch(() => {
            t.forEach((t) => {
              const n = F(t),
                i = Fr(e.getEdge(n));
              if (g(i, t)) return;
              t.source &&
                i.source !== t.source &&
                e.updateEdgeSource(n, t.source),
                t.target &&
                  i.target !== t.target &&
                  e.updateEdgeTarget(n, t.target);
              const s = Lr(i, t);
              this.pushChange({ value: s, original: i, type: b.EdgeUpdated }),
                e.mergeEdgeData(n, s);
            });
          });
        }
        updateComboData(t = []) {
          if (!t.length) return;
          const { model: e } = this;
          e.batch(() => {
            const n = [];
            t.forEach((t) => {
              const i = F(t),
                s = Fr(e.getNode(i));
              if (g(s, t)) return;
              const o = Lr(s, t);
              this.pushChange({ value: o, original: s, type: b.ComboUpdated }),
                e.mergeNodeData(i, o),
                n.push(o);
            }),
              this.updateNodeLikeHierarchy(n);
          });
        }
        setParent(t, e, n, i = !0) {
          if (t === e) return;
          const s = z(this.getNodeLikeDatum(t));
          if (s !== e && n === D) {
            const n = { id: t, combo: e };
            this.isCombo(t) ? this.syncComboDatum(n) : this.syncNodeDatum(n);
          }
          this.model.setParent(t, e, n),
            i &&
              n === D &&
              (function (t, e) {
                void 0 === e && (e = new Map());
                var n = [];
                if (Array.isArray(t))
                  for (var i = 0, s = t.length; i < s; i++) {
                    var o = t[i];
                    e.has(o) || (n.push(o), e.set(o, !0));
                  }
                return n;
              })([s, e]).forEach((t) => {
                void 0 !== t && this.refreshComboData(t);
              });
        }
        refreshComboData(t) {
          const e = this.getComboData([t])[0],
            n = this.getAncestorsData(t, D);
          e && this.pushChange({ value: e, original: e, type: b.ComboUpdated }),
            n.forEach((t) => {
              this.pushChange({ value: t, original: t, type: b.ComboUpdated });
            });
        }
        syncComboDatum(t) {
          const { model: e } = this,
            n = F(t);
          if (!e.hasNode(n)) return;
          const i = Lr(Fr(e.getNode(n)), t);
          e.mergeNodeData(n, i);
        }
        getElementPosition(t) {
          return Mt(this.getElementDataById(t));
        }
        translateNodeLikeBy(t, e) {
          this.isCombo(t)
            ? this.translateComboBy(t, e)
            : this.translateNodeBy(t, e);
        }
        translateNodeLikeTo(t, e) {
          this.isCombo(t)
            ? this.translateComboTo(t, e)
            : this.translateNodeTo(t, e);
        }
        translateNodeBy(t, e) {
          const n = ft(this.getElementPosition(t), [...e, 0].slice(0, 3));
          this.translateNodeTo(t, n);
        }
        translateNodeTo(t, e) {
          const [n = 0, i = 0, s = 0] = e;
          this.preventUpdateNodeLikeHierarchy(() => {
            this.updateNodeData([{ id: t, style: { x: n, y: i, z: s } }]);
          });
        }
        translateComboBy(t, e) {
          const [n = 0, i = 0, s = 0] = e;
          if ([n, i, s].some(isNaN) || [n, i, s].every((t) => 0 === t)) return;
          const o = this.getComboData([t])[0];
          o &&
            Kt(
              o,
              (t) => {
                const e = F(t),
                  [o, r, a] = Mt(t),
                  c = Lr(t, { style: { x: o + n, y: r + i, z: a + s } });
                this.pushChange({
                  value: c,
                  original: t,
                  type: this.isCombo(e) ? b.ComboUpdated : b.NodeUpdated,
                }),
                  this.model.mergeNodeData(e, c);
              },
              (t) => this.getChildrenData(F(t)),
              'BT',
            );
        }
        translateComboTo(t, e) {
          if (e.some(isNaN)) return;
          const [n = 0, i = 0, s = 0] = e,
            o = this.getComboData([t])?.[0];
          if (!o) return;
          const [r, a, c] = Mt(o),
            h = n - r,
            l = i - a,
            d = s - c;
          Kt(
            o,
            (t) => {
              const e = F(t),
                [n, i, s] = Mt(t),
                o = Lr(t, { style: { x: n + h, y: i + l, z: s + d } });
              this.pushChange({
                value: o,
                original: t,
                type: this.isCombo(e) ? b.ComboUpdated : b.NodeUpdated,
              }),
                this.model.mergeNodeData(e, o);
            },
            (t) => this.getChildrenData(F(t)),
            'BT',
          );
        }
        removeData(t) {
          const { nodes: e, edges: n, combos: i } = t;
          this.batch(() => {
            this.removeEdgeData(n),
              this.removeNodeData(e),
              this.removeComboData(i),
              (this.latestRemovedComboIds = new Set(i));
          });
        }
        removeNodeData(t = []) {
          t.length &&
            this.batch(() => {
              t.forEach((t) => {
                this.removeEdgeData(this.getRelatedEdgesData(t).map(F)),
                  this.pushChange({
                    value: this.getNodeData([t])[0],
                    type: b.NodeRemoved,
                  }),
                  this.removeNodeLikeHierarchy(t);
              }),
                this.model.removeNodes(t);
            });
        }
        removeEdgeData(t = []) {
          t.length &&
            (t.forEach((t) =>
              this.pushChange({
                value: this.getEdgeData([t])[0],
                type: b.EdgeRemoved,
              }),
            ),
            this.model.removeEdges(t));
        }
        removeComboData(t = []) {
          t.length &&
            this.batch(() => {
              t.forEach((t) => {
                this.pushChange({
                  value: this.getComboData([t])[0],
                  type: b.ComboRemoved,
                }),
                  this.removeNodeLikeHierarchy(t),
                  this.comboIds.delete(t);
              }),
                this.model.removeNodes(t);
            });
        }
        removeNodeLikeHierarchy(t) {
          if (this.model.hasTreeStructure(D)) {
            const e = z(this.getNodeLikeDatum(t));
            this.setParent(t, void 0, D, !1),
              this.model.getChildren(t, D).forEach((t) => {
                const n = Fr(t),
                  i = F(n);
                this.setParent(F(n), e, D, !1);
                const s = Lr(n, { id: F(n), combo: e });
                this.pushChange({
                  value: s,
                  original: n,
                  type: this.isCombo(i) ? b.ComboUpdated : b.NodeUpdated,
                }),
                  this.model.mergeNodeData(F(n), s);
              }),
              (0, on.Z)(e) || this.refreshComboData(e);
          }
        }
        getElementType(t) {
          if (this.model.hasNode(t)) return this.isCombo(t) ? 'combo' : 'node';
          if (this.model.hasEdge(t)) return 'edge';
          throw new Error(o(`Unknown element type of id: ${t}`));
        }
        destroy() {
          const { model: t } = this,
            e = t.getAllNodes(),
            n = t.getAllEdges();
          t.removeEdges(n.map((t) => t.id)),
            t.removeNodes(e.map((t) => t.id)),
            (this.context = {});
        }
      }
      class jr {
        context;
        container;
        elementMap = {};
        shapeTypeMap = {};
        constructor(t) {
          this.context = t;
        }
        init() {
          if (!this.container) {
            const { canvas: t } = this.context;
            this.container = t.appendChild(new s.ZA());
          }
        }
        emit(t, e) {
          e.silence || Tr(this.context.graph, t);
        }
        forEachElementData(t) {
          Ut.forEach((e) => {
            const n = this.context.model.getElementsDataByType(e);
            t(e, n);
          });
        }
        getElementType(t, e) {
          const { options: n, graph: i } = this.context,
            s = n[t]?.type || e.type;
          return s
            ? 'string' == typeof s
              ? s
              : s.call(i, e)
            : 'edge' === t
              ? 'line'
              : 'circle';
        }
        getTheme(t) {
          return P(this.context.options)[t] || {};
        }
        getThemeStyle(t) {
          return this.getTheme(t).style || {};
        }
        getThemeStateStyle(t, e) {
          const { state: n = {} } = this.getTheme(t);
          return Object.assign({}, ...e.map((t) => n[t] || {}));
        }
        paletteStyle = {};
        computePaletteStyle() {
          const { options: t } = this.context;
          (this.paletteStyle = {}),
            this.forEachElementData((e, n) => {
              const i = Object.assign(
                {},
                Oe(this.getTheme(e)?.palette),
                Oe(t[e]?.palette),
              );
              i?.field &&
                Object.assign(
                  this.paletteStyle,
                  (function (t, e) {
                    if (!e) return {};
                    const { type: n, color: i, field: s, invert: r } = e,
                      a = (t) => {
                        const e = 'string' == typeof i ? Ta('palette', i) : i;
                        if ('function' == typeof e) {
                          const n = {};
                          return (
                            t.forEach(([t, i]) => {
                              n[t] = e(r ? 1 - i : i);
                            }),
                            n
                          );
                        }
                        if (Array.isArray(e)) {
                          const n = r ? [...e].reverse() : e,
                            i = {};
                          return (
                            t.forEach(([t, s]) => {
                              i[t] = n[s % e.length];
                            }),
                            i
                          );
                        }
                        return {};
                      },
                      c = (t, e) =>
                        'string' == typeof t ? e.data?.[t] : t?.(e);
                    if ('group' === n) {
                      const e = Ce(t, (t) => {
                          if (!s) return 'default';
                          const e = c(s, t);
                          return e ? String(e) : 'default';
                        }),
                        n = a(Object.keys(e).map((t, e) => [t, e])),
                        i = {};
                      return (
                        Object.entries(e).forEach(([t, e]) => {
                          e.forEach((e) => {
                            i[F(e)] = n[t];
                          });
                        }),
                        i
                      );
                    }
                    if ('value' === n) {
                      const [e, n] = t.reduce(
                          ([t, e], n) => {
                            const i = c(s, n);
                            if ('number' != typeof i)
                              throw new Error(
                                o(`Palette field ${s} is not a number`),
                              );
                            return [Math.min(t, i), Math.max(e, i)];
                          },
                          [1 / 0, -1 / 0],
                        ),
                        i = n - e;
                      return a(t.map((t) => [t.id, (c(s, t) - e) / i]));
                    }
                  })(n, i),
                );
            });
        }
        getPaletteStyle(t, e) {
          const n = this.paletteStyle[e];
          return n ? ('edge' === t ? { stroke: n } : { fill: n }) : {};
        }
        defaultStyle = {};
        computeElementDefaultStyle(t, e) {
          const { options: n } = this.context,
            i = n[t]?.style || {};
          this.defaultStyle[F(e.datum)] = ue(i, e);
        }
        computeElementsDefaultStyle(t) {
          const { graph: e } = this.context;
          this.forEachElementData((n, i) => {
            const s = i.length;
            for (let o = 0; o < s; o++) {
              const s = i[o];
              (void 0 === t || t.includes(F(s))) &&
                this.computeElementDefaultStyle(n, { datum: s, graph: e });
            }
          });
        }
        getDefaultStyle(t) {
          return this.defaultStyle[t] || {};
        }
        getElementState(t) {
          try {
            const { model: e } = this.context;
            return e.getElementState(t);
          } catch {
            return [];
          }
        }
        stateStyle = {};
        getElementStateStyle(t, e, n) {
          const { options: i } = this.context;
          return ue(i[t]?.state?.[e] || {}, n);
        }
        computeElementStatesStyle(t, e, n) {
          this.stateStyle[F(n.datum)] = Object.assign(
            {},
            ...e.map((e) => this.getElementStateStyle(t, e, n)),
          );
        }
        computeElementsStatesStyle(t) {
          const { graph: e } = this.context;
          this.forEachElementData((n, i) => {
            const s = i.length;
            for (let o = 0; o < s; o++) {
              const s = i[o];
              if (void 0 === t || t.includes(F(s))) {
                const t = this.getElementState(F(s));
                this.computeElementStatesStyle(n, t, { datum: s, graph: e });
              }
            }
          });
        }
        getStateStyle(t) {
          return this.stateStyle[t] || {};
        }
        computeStyle(t, e) {
          (t && ['translate', 'zIndex'].includes(t)) ||
            (this.computePaletteStyle(),
            this.computeElementsDefaultStyle(e),
            this.computeElementsStatesStyle(e));
        }
        getElement(t) {
          return this.elementMap[t];
        }
        getElementZIndex(t) {
          const e = this.getElement(t);
          return e ? e.style.zIndex ?? 0 : 0;
        }
        getNodes() {
          return this.context.model
            .getNodeData()
            .map(({ id: t }) => this.elementMap[t]);
        }
        getEdges() {
          return this.context.model
            .getEdgeData()
            .map((t) => this.elementMap[F(t)]);
        }
        getCombos() {
          return this.context.model
            .getComboData()
            .map(({ id: t }) => this.elementMap[t]);
        }
        getElementComputedStyle(t, e) {
          const n = F(e),
            i = this.getThemeStyle(t),
            s = this.getPaletteStyle(t, n),
            o = e.style || {},
            r = this.getDefaultStyle(n),
            a = this.getThemeStateStyle(t, this.getElementState(n)),
            c = this.getStateStyle(n),
            h = Object.assign({}, i, s, o, r, a, c);
          if ('combo' === t) {
            const t = this.context.model.getChildrenData(n),
              e = !!h.collapsed
                ? []
                : t.map(F).filter((t) => this.getElement(t));
            Object.assign(h, { childrenNode: e, childrenData: t });
          }
          return h;
        }
        draw(t = { animation: !0 }) {
          this.init();
          const e = this.computeChangesAndDrawData(t);
          if (!e) return null;
          const { dataChanges: n, drawData: i } = e;
          this.markDestroyElement(i), this.computeStyle(t.stage);
          const { add: s, update: o, remove: r } = i;
          this.destroyElements(r, t),
            this.createElements(s, t),
            this.updateElements(o, t);
          const { animation: a, silence: c } = t;
          return this.context.animation.animate(
            a,
            c
              ? {}
              : {
                  before: () =>
                    this.emit(
                      new wr(O.BEFORE_DRAW, { dataChanges: n, animation: a }),
                      t,
                    ),
                  beforeAnimate: (e) =>
                    this.emit(new Sr(O.BEFORE_ANIMATE, E.DRAW, e, i), t),
                  afterAnimate: (e) =>
                    this.emit(new Sr(O.AFTER_ANIMATE, E.DRAW, e, i), t),
                  after: () =>
                    this.emit(
                      new wr(O.AFTER_DRAW, { dataChanges: n, animation: a }),
                      t,
                    ),
                },
          );
        }
        computeChangesAndDrawData(t) {
          const { model: e } = this.context,
            n = e.getChanges(),
            i = Hs(n);
          if (0 === i.length) return null;
          const {
              NodeAdded: s = [],
              NodeUpdated: o = [],
              NodeRemoved: r = [],
              EdgeAdded: a = [],
              EdgeUpdated: c = [],
              EdgeRemoved: h = [],
              ComboAdded: l = [],
              ComboUpdated: d = [],
              ComboRemoved: u = [],
            } = Ce(i, (t) => t.type),
            p = (t) =>
              new Map(
                t.map((t) => {
                  const e = t.value;
                  return [F(e), e];
                }),
              ),
            g = {
              add: { nodes: p(s), edges: p(a), combos: p(l) },
              update: { nodes: p(o), edges: p(c), combos: p(d) },
              remove: { nodes: p(r), edges: p(h), combos: p(u) },
            },
            f = this.transformData(g, t);
          return e.clearChanges(), { dataChanges: n, drawData: f };
        }
        transformData(t, e) {
          const n = this.context.transform.getTransformInstance();
          return Object.values(n).reduce((t, n) => n.beforeDraw(t, e), t);
        }
        createElement(t, e, n) {
          const i = F(e);
          if (this.getElement(i)) return;
          const s = this.getElementType(t, e),
            o = this.getElementComputedStyle(t, e),
            a = Ta(t, s);
          if (!a) return r.warn(`The element ${s} of ${t} is not registered.`);
          this.emit(new Cr(O.BEFORE_ELEMENT_CREATE, t, e), n);
          const c = this.container.appendChild(
            new a({ id: i, style: { context: this.context, ...o } }),
          );
          (this.shapeTypeMap[i] = s), (this.elementMap[i] = c);
          const { stage: h = 'enter' } = n;
          this.context.animation?.add(
            {
              element: c,
              elementType: t,
              stage: h,
              originalStyle: { ...c.attributes },
              modifiedStyle: { ...c.attributes, ...o },
            },
            {
              after: () => {
                this.emit(new Cr(O.AFTER_ELEMENT_CREATE, t, e), n),
                  c.onCreate?.();
              },
            },
          );
        }
        createElements(t, e) {
          const { nodes: n, edges: i, combos: s } = t;
          [
            ['node', n],
            ['combo', s],
            ['edge', i],
          ].forEach(([t, n]) => {
            n.forEach((n) => this.createElement(t, n, e));
          });
        }
        updateElement(t, e, n) {
          const i = F(e),
            s = this.getElement(i);
          if (!s) return () => null;
          this.emit(new Cr(O.BEFORE_ELEMENT_UPDATE, t, e), n);
          const o = this.getElementType(t, e),
            r = this.getElementComputedStyle(t, e);
          this.shapeTypeMap[i] !== o &&
            (s.destroy(),
            delete this.shapeTypeMap[i],
            delete this.elementMap[i],
            this.createElement(t, e, { animation: !1, silence: !0 }));
          const { stage: a = 'update' } = n,
            c =
              'visibility' !== a
                ? a
                : 'hidden' === r.visibility
                  ? 'hide'
                  : 'show';
          this.context.animation?.add(
            {
              element: s,
              elementType: t,
              stage: c,
              originalStyle: { ...s.attributes },
              modifiedStyle: { ...s.attributes, ...r },
            },
            {
              before: () => {
                const t = this.elementMap[i];
                'collapse' !== a && hi(t, r),
                  'visibility' === a &&
                    (be(t, 'opacity') || me(t, 'opacity'),
                    Ee(t, 'visibility', 'show' === c ? 'visible' : 'hidden'),
                    'show' === c && hi(t, { visibility: 'visible' }));
              },
              after: () => {
                const s = this.elementMap[i];
                'collapse' === a && hi(s, r),
                  'hide' === c && hi(s, { visibility: ye(s, 'visibility') }),
                  this.emit(new Cr(O.AFTER_ELEMENT_UPDATE, t, e), n),
                  s.onUpdate?.();
              },
            },
          );
        }
        updateElements(t, e) {
          const { nodes: n, edges: i, combos: s } = t;
          [
            ['node', n],
            ['combo', s],
            ['edge', i],
          ].forEach(([t, n]) => {
            n.forEach((n) => this.updateElement(t, n, e));
          });
        }
        markDestroyElement(t) {
          Object.values(t.remove).forEach((t) => {
            t.forEach((t) => {
              const e = F(t),
                n = this.getElement(e);
              n &&
                (function (t) {
                  ie(t, '__to_be_destroyed__', !0);
                })(n);
            });
          });
        }
        destroyElement(t, e, n) {
          const { stage: i = 'exit' } = n,
            s = F(e),
            o = this.elementMap[s];
          if (!o) return () => null;
          this.emit(new Cr(O.BEFORE_ELEMENT_DESTROY, t, e), n),
            this.context.animation?.add(
              {
                element: o,
                elementType: t,
                stage: i,
                originalStyle: { ...o.attributes },
                modifiedStyle: { ...o.attributes },
              },
              {
                after: () => {
                  this.clearElement(s),
                    o.destroy(),
                    o.onDestroy?.(),
                    this.emit(new Cr(O.AFTER_ELEMENT_DESTROY, t, e), n);
                },
              },
            );
        }
        destroyElements(t, e) {
          const { nodes: n, edges: i, combos: s } = t;
          [
            ['combo', s],
            ['edge', i],
            ['node', n],
          ].forEach(([t, n]) => {
            n.forEach((n) => this.destroyElement(t, n, e));
          });
        }
        clearElement(t) {
          delete this.paletteStyle[t],
            delete this.defaultStyle[t],
            delete this.stateStyle[t],
            delete this.elementMap[t],
            delete this.shapeTypeMap[t];
        }
        async collapseNode(t, e) {
          const { model: n, layout: i } = this.context,
            s = this.computeChangesAndDrawData({
              stage: 'collapse',
              animation: e,
            });
          this.markDestroyElement(s.drawData);
          const o = await i.simulate();
          n.updateData(o);
          const { drawData: r } = this.computeChangesAndDrawData({
              stage: 'collapse',
              animation: e,
            }),
            { add: a, remove: c, update: h } = r;
          this.markDestroyElement(r);
          const l = { animation: e, stage: 'collapse', data: r };
          this.destroyElements(c, l),
            this.createElements(a, l),
            this.updateElements(h, l),
            await this.context.animation.animate(
              e,
              {
                beforeAnimate: (t) =>
                  this.emit(new Sr(O.BEFORE_ANIMATE, E.COLLAPSE, t, r), l),
                afterAnimate: (t) =>
                  this.emit(new Sr(O.AFTER_ANIMATE, E.COLLAPSE, t, r), l),
              },
              {
                collapse: {
                  target: t,
                  descendants: Array.from(c.nodes).map(([, t]) => F(t)),
                  position: Mt(h.nodes.get(t)),
                },
              },
            )?.finished;
        }
        async expandNode(t, e) {
          const { model: n, layout: i } = this.context;
          if (!n.getAncestorsData(t, D).every((t) => te(t))) return;
          const s = Mt(n.getNodeData([t])[0]),
            {
              drawData: { add: o },
            } = this.computeChangesAndDrawData({
              stage: 'collapse',
              animation: e,
            });
          this.createElements(o, { animation: !1, stage: 'expand' }),
            this.context.animation.clear();
          const r = await i.simulate();
          n.updateData(r), this.computeStyle('expand');
          const { drawData: a } = this.computeChangesAndDrawData({
              stage: 'collapse',
              animation: e,
            }),
            { update: c } = a,
            h = { animation: e, stage: 'expand', data: a };
          o.edges.forEach((t) => {
            const e = F(t);
            c.edges.has(e) || c.edges.set(e, t);
          }),
            this.updateElements(c, h),
            await this.context.animation.animate(
              e,
              {
                beforeAnimate: (t) =>
                  this.emit(new Sr(O.BEFORE_ANIMATE, E.EXPAND, t, a), h),
                afterAnimate: (t) =>
                  this.emit(new Sr(O.AFTER_ANIMATE, E.EXPAND, t, a), h),
              },
              {
                expand: {
                  target: t,
                  descendants: Array.from(o.nodes).map(([, t]) => F(t)),
                  position: s,
                },
              },
            )?.finished;
        }
        async collapseCombo(t, e) {
          const { model: n, element: i } = this.context;
          if (n.getAncestorsData(t, D).some((t) => te(t))) return;
          const s = i.getElement(t),
            o = s.getComboPosition({ ...s.attributes, collapsed: !0 }),
            { dataChanges: r, drawData: a } = this.computeChangesAndDrawData({
              stage: 'collapse',
              animation: e,
            });
          this.markDestroyElement(a);
          const { update: c, remove: h } = a,
            l = { animation: e, stage: 'collapse', data: a };
          this.destroyElements(h, l), this.updateElements(c, l);
          const d = (t) => Array.from(t).map(([, t]) => F(t));
          await this.context.animation.animate(
            e,
            {
              before: () =>
                this.emit(
                  new wr(O.BEFORE_DRAW, { dataChanges: r, animation: e }),
                  l,
                ),
              beforeAnimate: (t) =>
                this.emit(new Sr(O.BEFORE_ANIMATE, E.COLLAPSE, t, a), l),
              afterAnimate: (t) =>
                this.emit(new Sr(O.AFTER_ANIMATE, E.COLLAPSE, t, a), l),
              after: () =>
                this.emit(
                  new wr(O.AFTER_DRAW, { dataChanges: r, animation: e }),
                  l,
                ),
            },
            {
              collapse: {
                target: t,
                descendants: [...d(h.nodes), ...d(h.combos)],
                position: o,
              },
            },
          )?.finished;
        }
        async expandCombo(t, e) {
          const { model: n } = this.context,
            i = Mt(n.getComboData([t])[0]);
          this.computeStyle('expand');
          const { dataChanges: s, drawData: o } =
              this.computeChangesAndDrawData({ stage: 'expand', animation: e }),
            { add: r, update: a } = o,
            c = { animation: e, stage: 'expand', data: o };
          this.createElements(r, c), this.updateElements(a, c);
          const h = (t) => Array.from(t).map(([, t]) => F(t));
          await this.context.animation.animate(
            e,
            {
              before: () =>
                this.emit(
                  new wr(O.BEFORE_DRAW, { dataChanges: s, animation: e }),
                  c,
                ),
              beforeAnimate: (t) =>
                this.emit(new Sr(O.BEFORE_ANIMATE, E.EXPAND, t, o), c),
              afterAnimate: (t) =>
                this.emit(new Sr(O.AFTER_ANIMATE, E.EXPAND, t, o), c),
              after: () =>
                this.emit(
                  new wr(O.AFTER_DRAW, { dataChanges: s, animation: e }),
                  c,
                ),
            },
            {
              expand: {
                target: t,
                descendants: [...h(r.nodes), ...h(r.combos)],
                position: i,
              },
            },
          )?.finished;
        }
        getFrontZIndex(t) {
          const { model: e } = this.context,
            n = e.getElementType(t),
            i = e.getElementDataById(t),
            s = e.getData();
          if (
            (Object.assign(s, {
              [`${n}s`]: s[`${n}s`].filter((e) => F(e) !== t),
            }),
            'combo' === n && !te(i))
          ) {
            const n = e.getAncestorsData(t, D).map(F);
            (s.nodes = s.nodes.filter((t) => !n.includes(F(t)))),
              (s.combos = s.combos.filter((t) => !n.includes(F(t)))),
              (s.edges = s.edges.filter(
                ({ source: t, target: e }) => n.includes(t) && n.includes(e),
              ));
          }
          return (
            Math.max(
              0,
              ...Object.values(s)
                .flat()
                .map((t) => {
                  const e = F(t);
                  return this.getElementZIndex(e);
                }),
            ) + 1
          );
        }
        destroy() {
          this.container.destroy(),
            (this.elementMap = {}),
            (this.shapeTypeMap = {}),
            (this.defaultStyle = {}),
            (this.stateStyle = {}),
            (this.paletteStyle = {}),
            (this.context = {});
        }
      }
      const $r = Symbol('Comlink.proxy'),
        Zr = Symbol('Comlink.endpoint'),
        Hr = Symbol('Comlink.releaseProxy'),
        Wr = Symbol('Comlink.finalizer'),
        Vr = Symbol('Comlink.thrown'),
        Yr = (t) =>
          ('object' == typeof t && null !== t) || 'function' == typeof t,
        Gr = new Map([
          [
            'proxy',
            {
              canHandle: (t) => Yr(t) && t[$r],
              serialize(t) {
                const { port1: e, port2: n } = new MessageChannel();
                return Ur(t, e), [n, [n]];
              },
              deserialize(t) {
                return t.start(), Xr(t);
              },
            },
          ],
          [
            'throw',
            {
              canHandle: (t) => Yr(t) && Vr in t,
              serialize({ value: t }) {
                let e;
                return (
                  (e =
                    t instanceof Error
                      ? {
                          isError: !0,
                          value: {
                            message: t.message,
                            name: t.name,
                            stack: t.stack,
                          },
                        }
                      : { isError: !1, value: t }),
                  [e, []]
                );
              },
              deserialize(t) {
                if (t.isError)
                  throw Object.assign(new Error(t.value.message), t.value);
                throw t.value;
              },
            },
          ],
        ]);
      function Ur(t, e = globalThis, n = ['*']) {
        e.addEventListener('message', function i(s) {
          if (!s || !s.data) return;
          if (
            !(function (t, e) {
              for (const n of t) {
                if (e === n || '*' === n) return !0;
                if (n instanceof RegExp && n.test(e)) return !0;
              }
              return !1;
            })(n, s.origin)
          )
            return void console.warn(
              `Invalid origin '${s.origin}' for comlink proxy`,
            );
          const {
              id: o,
              type: r,
              path: a,
            } = Object.assign({ path: [] }, s.data),
            c = (s.data.argumentList || []).map(oa);
          let h;
          try {
            const e = a.slice(0, -1).reduce((t, e) => t[e], t),
              n = a.reduce((t, e) => t[e], t);
            switch (r) {
              case 'GET':
                h = n;
                break;
              case 'SET':
                (e[a.slice(-1)[0]] = oa(s.data.value)), (h = !0);
                break;
              case 'APPLY':
                h = n.apply(e, c);
                break;
              case 'CONSTRUCT':
                h = (function (t) {
                  return Object.assign(t, { [$r]: !0 });
                })(new n(...c));
                break;
              case 'ENDPOINT':
                {
                  const { port1: e, port2: n } = new MessageChannel();
                  Ur(t, n),
                    (h = (function (t, e) {
                      return ia.set(t, e), t;
                    })(e, [e]));
                }
                break;
              case 'RELEASE':
                h = void 0;
                break;
              default:
                return;
            }
          } catch (t) {
            h = { value: t, [Vr]: 0 };
          }
          Promise.resolve(h)
            .catch((t) => ({ value: t, [Vr]: 0 }))
            .then((n) => {
              const [s, a] = sa(n);
              e.postMessage(Object.assign(Object.assign({}, s), { id: o }), a),
                'RELEASE' === r &&
                  (e.removeEventListener('message', i),
                  Kr(e),
                  Wr in t && 'function' == typeof t[Wr] && t[Wr]());
            })
            .catch((t) => {
              const [n, i] = sa({
                value: new TypeError('Unserializable return value'),
                [Vr]: 0,
              });
              e.postMessage(Object.assign(Object.assign({}, n), { id: o }), i);
            });
        }),
          e.start && e.start();
      }
      function Kr(t) {
        (function (t) {
          return 'MessagePort' === t.constructor.name;
        })(t) && t.close();
      }
      function Xr(t, e) {
        return ea(t, [], e);
      }
      function qr(t) {
        if (t) throw new Error('Proxy has been released and is not useable');
      }
      function Jr(t) {
        return ra(t, { type: 'RELEASE' }).then(() => {
          Kr(t);
        });
      }
      const Qr = new WeakMap(),
        ta =
          'FinalizationRegistry' in globalThis &&
          new FinalizationRegistry((t) => {
            const e = (Qr.get(t) || 0) - 1;
            Qr.set(t, e), 0 === e && Jr(t);
          });
      function ea(t, e = [], n = function () {}) {
        let i = !1;
        const s = new Proxy(n, {
          get(n, o) {
            if ((qr(i), o === Hr))
              return () => {
                !(function (t) {
                  ta && ta.unregister(t);
                })(s),
                  Jr(t),
                  (i = !0);
              };
            if ('then' === o) {
              if (0 === e.length) return { then: () => s };
              const n = ra(t, {
                type: 'GET',
                path: e.map((t) => t.toString()),
              }).then(oa);
              return n.then.bind(n);
            }
            return ea(t, [...e, o]);
          },
          set(n, s, o) {
            qr(i);
            const [r, a] = sa(o);
            return ra(
              t,
              {
                type: 'SET',
                path: [...e, s].map((t) => t.toString()),
                value: r,
              },
              a,
            ).then(oa);
          },
          apply(n, s, o) {
            qr(i);
            const r = e[e.length - 1];
            if (r === Zr) return ra(t, { type: 'ENDPOINT' }).then(oa);
            if ('bind' === r) return ea(t, e.slice(0, -1));
            const [a, c] = na(o);
            return ra(
              t,
              {
                type: 'APPLY',
                path: e.map((t) => t.toString()),
                argumentList: a,
              },
              c,
            ).then(oa);
          },
          construct(n, s) {
            qr(i);
            const [o, r] = na(s);
            return ra(
              t,
              {
                type: 'CONSTRUCT',
                path: e.map((t) => t.toString()),
                argumentList: o,
              },
              r,
            ).then(oa);
          },
        });
        return (
          (function (t, e) {
            const n = (Qr.get(e) || 0) + 1;
            Qr.set(e, n), ta && ta.register(t, e, t);
          })(s, t),
          s
        );
      }
      function na(t) {
        const e = t.map(sa);
        return [
          e.map((t) => t[0]),
          ((n = e.map((t) => t[1])), Array.prototype.concat.apply([], n)),
        ];
        var n;
      }
      const ia = new WeakMap();
      function sa(t) {
        for (const [e, n] of Gr)
          if (n.canHandle(t)) {
            const [i, s] = n.serialize(t);
            return [{ type: 'HANDLER', name: e, value: i }, s];
          }
        return [{ type: 'RAW', value: t }, ia.get(t) || []];
      }
      function oa(t) {
        switch (t.type) {
          case 'HANDLER':
            return Gr.get(t.name).deserialize(t.value);
          case 'RAW':
            return t.value;
        }
      }
      function ra(t, e, n) {
        return new Promise((i) => {
          const s = new Array(4)
            .fill(0)
            .map(() =>
              Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16),
            )
            .join('-');
          t.addEventListener('message', function e(n) {
            n.data &&
              n.data.id &&
              n.data.id === s &&
              (t.removeEventListener('message', e), i(n.data));
          }),
            t.start && t.start(),
            t.postMessage(Object.assign({ id: s }, e), n);
        });
      }
      class aa extends Zs.Z {
        constructor(t, e, n) {
          super(),
            (this.graph = t),
            (this.layout = e),
            (this.options = n),
            this.spawnWorker();
        }
        spawnWorker() {
          (this.proxy = Xr(
            new Worker(new URL(n.p + n.u(6839), n.b), { type: void 0 }),
          )),
            this.running && ((this.running = !1), this.execute());
        }
        execute() {
          var t;
          return (0, oo.mG)(this, void 0, void 0, function* () {
            if (this.running) return this;
            this.running = !0;
            const e = this.layout.options,
              { onTick: n } = e,
              i = (0, oo._T)(e, ['onTick']),
              s = {};
            Object.keys(i).forEach((t) => {
              (0, tt.Z)(i[t]) || (s[t] = i[t]);
            });
            const o = {
                layout: {
                  id: this.layout.id,
                  options: s,
                  iterations:
                    null === (t = this.options) || void 0 === t
                      ? void 0
                      : t.iterations,
                },
                nodes: this.graph.getAllNodes(),
                edges: this.graph.getAllEdges(),
              },
              r = new Float32Array([0]),
              [a] = yield this.proxy.calculateLayout(o, [r]);
            return a;
          });
        }
        stop() {
          return (this.running = !1), this.proxy.stopLayout(), this;
        }
        kill() {
          this.proxy[Hr]();
        }
        isRunning() {
          return this.running;
        }
      }
      var ca = n(10779);
      class ha {
        context;
        supervisor;
        instance;
        instances = [];
        animationResult;
        get presetOptions() {
          return { animation: !!L(this.context.options, !0) };
        }
        get options() {
          const { options: t } = this.context;
          return t.layout;
        }
        constructor(t) {
          this.context = t;
        }
        getLayoutInstance() {
          return this.instances;
        }
        async layout() {
          if (!this.options) return;
          const t = Array.isArray(this.options) ? this.options : [this.options],
            { graph: e } = this.context;
          Tr(e, new wr(O.BEFORE_LAYOUT));
          for (const n of t) {
            const i = t.indexOf(n),
              s = this.getLayoutData(n),
              o = { ...this.presetOptions, ...n };
            Tr(e, new wr(O.BEFORE_STAGE_LAYOUT, { options: o, index: i }));
            const r = await this.stepLayout(s, o, i);
            Tr(e, new wr(O.AFTER_STAGE_LAYOUT, { options: o, index: i })),
              n.animation || this.updateElementPosition(r, !1);
          }
          Tr(e, new wr(O.AFTER_LAYOUT));
        }
        async simulate() {
          if (!this.options) return {};
          const t = Array.isArray(this.options) ? this.options : [this.options];
          let e = {};
          for (const n of t) {
            const i = t.indexOf(n),
              s = this.getLayoutData(n);
            e = await this.stepLayout(
              s,
              { ...this.presetOptions, ...n, animation: !1 },
              i,
            );
          }
          return e;
        }
        async stepLayout(t, e, n) {
          return (function (t) {
            const { type: e } = t;
            return [
              'compact-box',
              'mindmap',
              'dendrogram',
              'indented',
            ].includes(e);
          })(e)
            ? await this.treeLayout(t, e, n)
            : await this.graphLayout(t, e, n);
        }
        async graphLayout(t, e, n) {
          const { animation: i, enableWorker: s, iterations: o = 300 } = e,
            r = this.initGraphLayout(e);
          if (!r) return {};
          if (((this.instances[n] = r), (this.instance = r), s)) {
            const e = r;
            return (
              (this.supervisor = new aa(
                e.graphData2LayoutModel(t),
                e.instance,
                { iterations: o },
              )),
              xi(await this.supervisor.execute())
            );
          }
          if ((0, ca.h)(r))
            return i
              ? await r.execute(t, {
                  onTick: (t) => {
                    this.updateElementPosition(t, !1);
                  },
                })
              : (r.execute(t), r.stop(), r.tick(o));
          const a = await r.execute(t);
          return i && this.updateElementPosition(a, i), a;
        }
        async treeLayout(t, e, n) {
          const { type: i, animation: s } = e,
            o = Ta('layout', i);
          if (!o) return {};
          const { nodes: r = [], edges: a = [] } = t,
            c = new bi.k({
              nodes: r.map((t) => ({ id: F(t), data: t.data || {} })),
              edges: a.map((t) => ({
                id: F(t),
                source: t.source,
                target: t.target,
                data: t.data || {},
              })),
            });
          !(function (t) {
            if (t.hasTreeStructure(M)) return;
            t.attachTreeStructure(M);
            const e = t.getAllEdges();
            for (const n of e) {
              const { source: e, target: i } = n;
              t.setParent(i, e, M);
            }
          })(c);
          const h = { nodes: [], edges: [] };
          return (
            c.getRoots(M).forEach((t) => {
              Kt(
                t,
                (t) => {
                  t.children = c.getSuccessors(t.id);
                },
                (t) => c.getSuccessors(t.id),
                'TB',
              );
              Kt(
                o(t, e),
                (t) => {
                  const { id: e, x: n, y: i, z: s = 0 } = t;
                  h.nodes.push({ id: e, style: { x: n, y: i, z: s } });
                },
                (t) => t.children,
                'TB',
              );
            }),
            s && this.updateElementPosition(h, s),
            h
          );
        }
        stopLayout() {
          this.instance &&
            (0, ca.h)(this.instance) &&
            (this.instance.stop(), (this.instance = void 0)),
            this.supervisor &&
              (this.supervisor.stop(), (this.supervisor = void 0)),
            this.animationResult &&
              (this.animationResult.finish(), (this.animationResult = void 0));
        }
        getLayoutData(t) {
          const { nodeFilter: e = () => !0 } = t,
            { nodes: n, edges: i, combos: s } = this.context.model.getData(),
            o = (t) => this.context.element.getElement(t),
            r = n.filter((t) => {
              const n = F(t),
                i = o(n);
              return !!i && !li(i) && e(t);
            }),
            a = new Map(r.map((t) => [F(t), t]));
          return {
            nodes: r,
            edges: i.filter((t) => {
              const { source: e, target: n } = t;
              return !(!a.has(e) || !a.has(n));
            }),
            combos: s,
          };
        }
        initGraphLayout(t) {
          const { element: e, viewport: n } = this.context,
            { type: i, enableWorker: s, animation: o, iterations: a, ...c } = t,
            [h, l] = n.getCanvasSize(),
            d = [h / 2, l / 2],
            u =
              t?.nodeSize ??
              ((t) => {
                const n = e?.getElement(t.id),
                  { size: i } = n?.attributes || {};
                return Math.max(...de(i));
              }),
            p = Ta('layout', i);
          if (!p) return r.warn(`The layout of ${i} is not registered.`);
          const g =
              Object.getPrototypeOf(p.prototype) === Ei.prototype
                ? p
                : (function (t, e) {
                    return class extends Ei {
                      instance;
                      id;
                      constructor(e, n) {
                        if (
                          (super(e, n),
                          (this.instance = new t({})),
                          (this.id = this.instance.id),
                          'stop' in this.instance && 'tick' in this.instance)
                        ) {
                          const t = this.instance;
                          (this.stop = t.stop.bind(t)),
                            (this.tick = (e) => xi(t.tick(e)));
                        }
                      }
                      async execute(t, e) {
                        return xi(
                          await this.instance.execute(
                            this.graphData2LayoutModel(t),
                            this.transformOptions(
                              (0, _.Z)({}, this.options, e),
                            ),
                          ),
                        );
                      }
                      transformOptions(t) {
                        const { onTick: e } = t;
                        return e ? ((t.onTick = (t) => e(xi(t))), t) : t;
                      }
                      graphData2LayoutModel(t) {
                        const {
                            nodes: n = [],
                            edges: i = [],
                            combos: s = [],
                          } = t,
                          o = n.map((t) => {
                            const e = F(t),
                              { data: n, style: i, combo: s } = t,
                              o = {
                                id: e,
                                data: { ...n, ...(s ? { parentId: s } : {}) },
                                style: { ...i },
                              };
                            return (
                              i?.x && Object.assign(o.data, { x: i.x }),
                              i?.y && Object.assign(o.data, { y: i.y }),
                              i?.z && Object.assign(o.data, { z: i.z }),
                              o
                            );
                          }),
                          r = new Map(o.map((t) => [t.id, t])),
                          a = i
                            .filter((t) => {
                              const { source: e, target: n } = t;
                              return r.has(e) && r.has(n);
                            })
                            .map((t) => {
                              const {
                                source: e,
                                target: n,
                                data: i,
                                style: s,
                              } = t;
                              return {
                                id: F(t),
                                source: e,
                                target: n,
                                data: { ...i },
                                style: { ...s },
                              };
                            }),
                          c = s.map((t) => ({
                            id: F(t),
                            data: { _isCombo: !0, ...t.data },
                            style: { ...t.style },
                          })),
                          h = new bi.k({ nodes: [...o, ...c], edges: a });
                        return (
                          e.model.model.hasTreeStructure(D) &&
                            (h.attachTreeStructure(D),
                            o.forEach((t) => {
                              const n = e.model.model.getParent(t.id, D);
                              n &&
                                h.hasNode(n.id) &&
                                h.setParent(t.id, n.id, D);
                            })),
                          h
                        );
                      }
                    };
                  })(p, this.context),
            f = new g(this.context),
            m = { nodeSize: u, width: h, height: l, center: d };
          switch (f.id) {
            case 'd3-force':
            case 'd3-force-3d':
              Object.assign(m, { center: { x: h / 2, y: l / 2, z: 0 } });
          }
          return (0, _.Z)(f.options, m, c), f;
        }
        updateElementPosition(t, e) {
          const { model: n, element: i } = this.context;
          return i
            ? (n.updateData(t), i.draw({ animation: e, silence: !0 }))
            : null;
        }
        destroy() {
          this.stopLayout(),
            (this.context = {}),
            this.supervisor?.kill(),
            (this.supervisor = void 0),
            (this.instance = void 0),
            (this.instances = []),
            (this.animationResult = void 0);
        }
      }
      class la extends q {
        category = 'plugin';
        constructor(t) {
          super(t), this.setPlugins(this.context.options.plugins || []);
        }
        setPlugins(t) {
          this.setExtensions(t);
        }
        getPluginInstance(t) {
          return this.extensionMap[t];
        }
      }
      const da = [
        'update-related-edges',
        'collapse-expand-node',
        'collapse-expand-combo',
        'get-edge-actual-ends',
        'arrange-draw-order',
      ];
      class ua extends q {
        category = 'transform';
        constructor(t) {
          super(t), this.setTransforms(this.context.options.transforms || []);
        }
        getTransforms() {}
        setTransforms(t) {
          this.setExtensions([
            ...da.slice(0, da.length - 1),
            ...t,
            da[da.length - 1],
          ]);
        }
        getTransformInstance(t) {
          return t ? this.extensionMap[t] : this.extensionMap;
        }
      }
      class pa {
        context;
        get padding() {
          return st(this.context.options.padding);
        }
        get paddingOffset() {
          const [t, e, n, i] = this.padding,
            [s, o, r] = [(i - e) / 2, (t - n) / 2, 0];
          return [s, o, r];
        }
        constructor(t) {
          this.context = t;
          const [e, n] = this.paddingOffset,
            { zoom: i, rotation: s, x: o = e, y: r = n } = t.options;
          this.transform(
            { mode: 'absolute', scale: i, translate: [o, r], rotate: s },
            !1,
          );
        }
        get camera() {
          return this.context.canvas.getCamera();
        }
        landmarkCounter = 0;
        createLandmark(t) {
          return this.camera.createLandmark(
            'landmark-' + this.landmarkCounter++,
            t,
          );
        }
        getAnimation(t) {
          const e = L(this.context.options, t);
          return !!e && (0, sn.Z)({ ...e }, ['easing', 'duration']);
        }
        getCanvasSize() {
          const { canvas: t } = this.context,
            { width: e = 0, height: n = 0 } = t.getConfig();
          return [e, n];
        }
        getCanvasCenter() {
          const { canvas: t } = this.context,
            { width: e = 0, height: n = 0 } = t.getConfig();
          return [e / 2, n / 2, 0];
        }
        getViewportCenter() {
          const [t, e] = this.camera.getPosition();
          return [t, e, 0];
        }
        getGraphCenter() {
          return this.context.graph.getViewportByCanvas(this.getCanvasCenter());
        }
        getZoom() {
          return this.camera.getZoom();
        }
        getRotation() {
          return this.camera.getRoll();
        }
        getTranslateOptions(t) {
          const { camera: e } = this,
            { mode: n, translate: i = [] } = t,
            s = this.getZoom(),
            o = e.getPosition(),
            r = e.getFocalPoint(),
            [a, c] = this.getCanvasCenter(),
            [h = 0, l = 0, d = 0] = i,
            u = bt([-h, -l, -d], s);
          return 'relative' === n
            ? { position: ft(o, u), focalPoint: ft(r, u) }
            : {
                position: ft([a, c, o[2]], u),
                focalPoint: ft([a, c, r[2]], u),
              };
        }
        getRotateOptions(t) {
          const { mode: e, rotate: n = 0 } = t;
          return { roll: 'relative' === e ? this.camera.getRoll() + n : n };
        }
        getZoomOptions(t) {
          const { zoomRange: e } = this.context.options,
            n = this.camera.getZoom(),
            { mode: i, scale: s = 1 } = t;
          return (0, Di.Z)('relative' === i ? n * s : s, ...e);
        }
        transformResolver;
        async transform(t, e) {
          const { graph: n } = this.context,
            { translate: i, rotate: s, scale: o, origin: r } = t;
          this.cancelAnimation();
          const a = this.getAnimation(e);
          if ((Tr(n, new Or(O.BEFORE_TRANSFORM, t)), !s && o && !i && r && !a))
            return (
              this.camera.setZoomByViewportPoint(this.getZoomOptions(t), r),
              void Tr(n, new Or(O.AFTER_TRANSFORM, t))
            );
          const c = {};
          if (
            (i && Object.assign(c, this.getTranslateOptions(t)),
            (0, ne.Z)(s) && Object.assign(c, this.getRotateOptions(t)),
            (0, ne.Z)(o) && Object.assign(c, { zoom: this.getZoomOptions(t) }),
            a)
          )
            return (
              Tr(n, new Sr(O.BEFORE_ANIMATE, E.TRANSFORM, null, t)),
              new Promise((e) => {
                (this.transformResolver = e),
                  this.camera.gotoLandmark(this.createLandmark(c), {
                    ...a,
                    onfinish: () => {
                      Tr(n, new Sr(O.AFTER_ANIMATE, E.TRANSFORM, null, t)),
                        Tr(n, new Or(O.AFTER_TRANSFORM, t)),
                        (this.transformResolver = void 0),
                        e();
                    },
                  });
              })
            );
          this.camera.gotoLandmark(this.createLandmark(c), { duration: 0 }),
            Tr(n, new Or(O.AFTER_TRANSFORM, t));
        }
        async fitView(t, e) {
          const [n, i, s, o] = this.padding,
            { when: r = 'always', direction: a = 'both' } = t || {},
            [c, h] = this.context.canvas.getSize(),
            l = c - o - i,
            d = h - n - s,
            u = this.context.canvas.getBounds(),
            p = this.getBBoxInViewport(u),
            [g, f] = at(p);
          if (
            'overflow' === r &&
            !(
              ('x' === a && g >= l) ||
              ('y' === a && f >= d) ||
              ('both' === a && g >= l && f >= d)
            )
          )
            return await this.fitCenter(e);
          const m = l / g,
            y = d / f,
            b = 'x' === a ? m : 'y' === a ? y : Math.min(m, y),
            E = this.getAnimation(e);
          await this.transform(
            {
              mode: 'relative',
              scale: b,
              translate: ft(
                mt(this.getCanvasCenter(), this.getBBoxInViewport(u).center),
                bt(this.paddingOffset, b),
              ),
            },
            E,
          );
        }
        async fitCenter(t) {
          const e = this.context.canvas.getBounds();
          await this.focus(e, t);
        }
        async focusElements(t, e) {
          const { element: n } = this.context;
          if (!n) return;
          const i = lt(t.map((t) => n.getElement(t).getRenderBounds()));
          await this.focus(i, e);
        }
        async focus(t, e) {
          const n = this.context.graph.getViewportByCanvas(t.center),
            i = mt(this.getCanvasCenter(), n);
          await this.transform(
            { mode: 'relative', translate: ft(i, this.paddingOffset) },
            e,
          );
        }
        getBBoxInViewport(t) {
          const { min: e, max: n } = t,
            { graph: i } = this.context,
            [o, r] = i.getViewportByCanvas(e),
            [a, c] = i.getViewportByCanvas(n),
            h = new s.mN();
          return h.setMinMax([o, r, 0], [a, c, 0]), h;
        }
        cancelAnimation() {
          this.camera.landmarks?.length &&
            this.camera.cancelLandmarkAnimation(),
            this.transformResolver?.();
        }
      }
      class ga extends Zs.Z {
        options;
        static defaultOptions = {
          autoResize: !1,
          theme: 'light',
          rotation: 0,
          zoom: 1,
          zoomRange: [0.01, 10],
        };
        destroyed = !1;
        context = { model: new zr() };
        constructor(t) {
          super(),
            (this.options = Object.assign({}, ga.defaultOptions, t)),
            this.setOptions(this.options),
            (this.context.graph = this),
            this.options.autoResize &&
              window.addEventListener('resize', this.onResize);
        }
        getOptions() {
          return this.options;
        }
        setOptions(t) {
          const {
            behaviors: e,
            combo: n,
            data: i,
            edge: s,
            height: o,
            layout: r,
            node: a,
            plugins: c,
            theme: h,
            transforms: l,
            width: d,
            renderer: u,
          } = t;
          if (u) {
            const t = this.context.canvas;
            t &&
              (this.emit(O.BEFORE_RENDERER_CHANGE, {
                renderer: this.options.renderer,
              }),
              t.setRenderer(u),
              this.emit(O.AFTER_RENDERER_CHANGE, { renderer: u }));
          }
          Object.assign(this.options, t),
            e && this.setBehaviors(e),
            n && this.setCombo(n),
            i && this.setData(i),
            s && this.setEdge(s),
            r && this.setLayout(r),
            a && this.setNode(a),
            h && this.setTheme(h),
            c && this.setPlugins(c),
            l && this.setTransforms(l),
            ((0, ne.Z)(d) || (0, ne.Z)(o)) &&
              this.setSize(
                d ?? this.options.width ?? 0,
                o ?? this.options.height ?? 0,
              );
        }
        getSize() {
          return this.context.canvas
            ? this.context.canvas.getSize()
            : [this.options.width || 0, this.options.height || 0];
        }
        setSize(t, e) {
          Object.assign(this.options, { width: t, height: e }),
            this.context.canvas?.resize(t, e);
        }
        setZoomRange(t) {
          this.options.zoomRange = t;
        }
        getZoomRange() {
          return this.options.zoomRange;
        }
        setNode(t) {
          (this.options.node = t), this.context.model.refreshData();
        }
        setEdge(t) {
          (this.options.edge = t), this.context.model.refreshData();
        }
        setCombo(t) {
          (this.options.combo = t), this.context.model.refreshData();
        }
        getTheme() {
          return this.options.theme;
        }
        setTheme(t) {
          this.options.theme = (0, tt.Z)(t) ? t(this.getTheme()) : t;
        }
        setLayout(t) {
          this.options.layout = (0, tt.Z)(t) ? t(this.getLayout()) : t;
        }
        getLayout() {
          return this.options.layout;
        }
        setBehaviors(t) {
          (this.options.behaviors = (0, tt.Z)(t) ? t(this.getBehaviors()) : t),
            this.context.behavior?.setBehaviors(this.options.behaviors);
        }
        updateBehavior(t) {
          this.setBehaviors((e) =>
            e.map((e) =>
              'object' == typeof e && e.key === t.key ? { ...e, ...t } : e,
            ),
          );
        }
        getBehaviors() {
          return this.options.behaviors || [];
        }
        setPlugins(t) {
          (this.options.plugins = (0, tt.Z)(t) ? t(this.getPlugins()) : t),
            this.context.plugin?.setPlugins(this.options.plugins);
        }
        updatePlugin(t) {
          this.setPlugins((e) =>
            e.map((e) =>
              'object' == typeof e && e.key === t.key ? { ...e, ...t } : e,
            ),
          );
        }
        getPlugins() {
          return this.options.plugins || [];
        }
        getPluginInstance(t) {
          return this.context.plugin.getPluginInstance(t);
        }
        setTransforms(t) {
          (this.options.transforms = (0, tt.Z)(t)
            ? t(this.getTransforms())
            : t),
            this.context.transform?.setTransforms(this.options.transforms);
        }
        updateTransform(t) {
          this.setTransforms((e) =>
            e.map((e) =>
              'object' == typeof e && e.key === t.key ? { ...e, ...t } : e,
            ),
          ),
            this.context.model.refreshData();
        }
        getTransforms() {
          return this.options.transforms || [];
        }
        getData() {
          return this.context.model.getData();
        }
        getElementData(t) {
          return Array.isArray(t)
            ? t.map((t) => this.context.model.getElementDataById(t))
            : this.context.model.getElementDataById(t);
        }
        getNodeData(t) {
          return void 0 === t
            ? this.context.model.getNodeData()
            : Array.isArray(t)
              ? this.context.model.getNodeData(t)
              : this.context.model.getNodeData([t])?.[0];
        }
        getEdgeData(t) {
          return void 0 === t
            ? this.context.model.getEdgeData()
            : Array.isArray(t)
              ? this.context.model.getEdgeData(t)
              : this.context.model.getEdgeData([t])?.[0];
        }
        getComboData(t) {
          return void 0 === t
            ? this.context.model.getComboData()
            : Array.isArray(t)
              ? this.context.model.getComboData(t)
              : this.context.model.getComboData([t])?.[0];
        }
        setData(t) {
          this.context.model.setData((0, tt.Z)(t) ? t(this.getData()) : t);
        }
        addData(t) {
          this.context.model.addData((0, tt.Z)(t) ? t(this.getData()) : t);
        }
        addNodeData(t) {
          this.context.model.addNodeData(
            (0, tt.Z)(t) ? t(this.getNodeData()) : t,
          );
        }
        addEdgeData(t) {
          this.context.model.addEdgeData(
            (0, tt.Z)(t) ? t(this.getEdgeData()) : t,
          );
        }
        addComboData(t) {
          this.context.model.addComboData(
            (0, tt.Z)(t) ? t(this.getComboData()) : t,
          );
        }
        addChildrenData(t, e) {
          this.context.model.addChildrenData(t, e);
        }
        updateData(t) {
          this.context.model.updateData((0, tt.Z)(t) ? t(this.getData()) : t);
        }
        updateNodeData(t) {
          this.context.model.updateNodeData(
            (0, tt.Z)(t) ? t(this.getNodeData()) : t,
          );
        }
        updateEdgeData(t) {
          this.context.model.updateEdgeData(
            (0, tt.Z)(t) ? t(this.getEdgeData()) : t,
          );
        }
        updateComboData(t) {
          this.context.model.updateComboData(
            (0, tt.Z)(t) ? t(this.getComboData()) : t,
          );
        }
        removeData(t) {
          this.context.model.removeData((0, tt.Z)(t) ? t(this.getData()) : t);
        }
        removeNodeData(t) {
          this.context.model.removeNodeData(
            (0, tt.Z)(t) ? t(this.getNodeData()) : t,
          );
        }
        removeEdgeData(t) {
          this.context.model.removeEdgeData(
            (0, tt.Z)(t) ? t(this.getEdgeData()) : t,
          );
        }
        removeComboData(t) {
          this.context.model.removeComboData(
            (0, tt.Z)(t) ? t(this.getComboData()) : t,
          );
        }
        getElementType(t) {
          return this.context.model.getElementType(t);
        }
        getRelatedEdgesData(t, e = 'both') {
          return this.context.model.getRelatedEdgesData(t, e);
        }
        getNeighborNodesData(t) {
          return this.context.model.getNeighborNodesData(t);
        }
        getAncestorsData(t, e) {
          return this.context.model.getAncestorsData(t, e);
        }
        getParentData(t, e) {
          return this.context.model.getParentData(t, e);
        }
        getChildrenData(t) {
          return this.context.model.getChildrenData(t);
        }
        getElementDataByState(t, e) {
          return this.context.model.getElementDataByState(t, e);
        }
        async initCanvas() {
          if (this.context.canvas) return await this.context.canvas.ready;
          const {
            container: t = 'container',
            width: e,
            height: n,
            renderer: i,
            background: s,
          } = this.options;
          if (t instanceof kr) (this.context.canvas = t), await t.ready;
          else {
            const o = (0, u.Z)(t) ? document.getElementById(t) : t,
              r = Ki(o);
            this.emit(O.BEFORE_CANVAS_INIT, {
              container: o,
              width: e,
              height: n,
            });
            const a = new kr({
              container: o,
              width: e || r[0],
              height: n || r[1],
              background: s,
              renderer: i,
            });
            (this.context.canvas = a),
              await a.ready,
              this.emit(O.AFTER_CANVAS_INIT, { canvas: a });
          }
        }
        initRuntime() {
          (this.context.options = this.options),
            this.context.batch || (this.context.batch = new Dr(this.context)),
            this.context.plugin || (this.context.plugin = new la(this.context)),
            this.context.viewport ||
              (this.context.viewport = new pa(this.context)),
            this.context.transform ||
              (this.context.transform = new ua(this.context)),
            this.context.element ||
              (this.context.element = new jr(this.context)),
            this.context.animation ||
              (this.context.animation = new Ar(this.context)),
            this.context.layout || (this.context.layout = new ha(this.context)),
            this.context.behavior ||
              (this.context.behavior = new Mr(this.context));
        }
        async prepare() {
          if ((await Promise.resolve(), this.destroyed))
            throw new Error(o('The graph instance has been destroyed'));
          await this.initCanvas(), this.initRuntime();
        }
        async render() {
          await this.prepare(), Tr(this, new wr(O.BEFORE_RENDER));
          const t = this.context.element.draw();
          await Promise.all([t?.finished, this.context.layout.layout()]),
            await this.autoFit(),
            Tr(this, new wr(O.AFTER_RENDER));
        }
        async draw() {
          await this.prepare(), await this.context.element.draw()?.finished;
        }
        async layout() {
          await this.context.layout.layout();
        }
        stopLayout() {
          this.context.layout.stopLayout();
        }
        async clear() {
          this.context.model.setData({}), await this.draw();
        }
        destroy() {
          Tr(this, new wr(O.BEFORE_DESTROY));
          const {
            layout: t,
            animation: e,
            element: n,
            model: i,
            canvas: s,
            behavior: o,
            plugin: r,
          } = this.context;
          r?.destroy(),
            o?.destroy(),
            t?.destroy(),
            e?.destroy(),
            n?.destroy(),
            i.destroy(),
            s?.destroy(),
            (this.options = {}),
            (this.context = {}),
            this.off(),
            window.removeEventListener('resize', this.onResize),
            (this.destroyed = !0),
            Tr(this, new wr(O.AFTER_DESTROY));
        }
        getCanvas() {
          return this.context.canvas;
        }
        resize(t, e) {
          const n = t && e ? [t, e] : Ki(this.context.canvas.getContainer());
          g(n, this.getSize()) ||
            (Tr(this, new wr(O.BEFORE_SIZE_CHANGE, { size: n })),
            this.context.canvas.resize(...n),
            Tr(this, new wr(O.AFTER_SIZE_CHANGE, { size: n })));
        }
        async fitView(t, e) {
          await this.context.viewport?.fitView(t, e);
        }
        async fitCenter(t) {
          await this.context.viewport?.fitCenter(t);
        }
        async autoFit() {
          const { autoFit: t } = this.context.options;
          if (t)
            if ((0, u.Z)(t))
              'view' === t
                ? await this.fitView()
                : 'center' === t && (await this.fitCenter());
            else {
              const { type: e, animation: n } = t;
              'view' === e
                ? await this.fitView(t.options, n)
                : 'center' === e && (await this.fitCenter(n));
            }
        }
        async focusElement(t, e) {
          await this.context.viewport?.focusElements(
            Array.isArray(t) ? t : [t],
            e,
          );
        }
        async zoomBy(t, e, n) {
          await this.context.viewport.transform(
            { mode: 'relative', scale: t, origin: n },
            e,
          );
        }
        async zoomTo(t, e, n) {
          this.context.viewport.transform(
            { mode: 'absolute', scale: t, origin: n },
            e,
          );
        }
        getZoom() {
          return this.context.viewport.getZoom();
        }
        async rotateBy(t, e, n) {
          await this.context.viewport.transform(
            { mode: 'relative', rotate: t, origin: n },
            e,
          );
        }
        async rotateTo(t, e, n) {
          await this.context.viewport.transform(
            { mode: 'absolute', rotate: t, origin: n },
            e,
          );
        }
        getRotation() {
          return this.context.viewport.getRotation();
        }
        async translateBy(t, e) {
          await this.context.viewport.transform(
            { mode: 'relative', translate: t },
            e,
          );
        }
        async translateTo(t, e) {
          await this.context.viewport.transform(
            { mode: 'absolute', translate: t },
            e,
          );
        }
        getPosition() {
          return mt([0, 0], this.getCanvasByViewport([0, 0]));
        }
        async translateElementBy(t, e, n = !0) {
          const [i, s] = (0, f.Z)(t) ? [t, e ?? !0] : [{ [t]: e }, n];
          Object.entries(i).forEach(([t, e]) =>
            this.context.model.translateNodeLikeBy(t, e),
          ),
            await this.context.element.draw({
              animation: s,
              stage: 'translate',
            })?.finished;
        }
        async translateElementTo(t, e, n = !0) {
          const [i, s] = (0, f.Z)(t) ? [t, e ?? !0] : [{ [t]: e }, n];
          Object.entries(i).forEach(([t, e]) =>
            this.context.model.translateNodeLikeTo(t, e),
          ),
            await this.context.element.draw({
              animation: s,
              stage: 'translate',
            })?.finished;
        }
        getElementPosition(t) {
          return this.context.model.getElementPosition(t);
        }
        getElementRenderStyle(t) {
          return Gi(this.context.element.getElement(t).attributes, ['context']);
        }
        async setElementVisibility(t, e, n = !0) {
          const [i, s] = (0, f.Z)(t) ? [t, e ?? !0] : [{ [t]: e }, n],
            o = { nodes: [], edges: [], combos: [] };
          Object.entries(i).forEach(([t, e]) => {
            const n = this.getElementType(t);
            o[`${n}s`].push({ id: t, style: { visibility: e } });
          });
          const { model: r, element: a } = this.context;
          r.preventUpdateNodeLikeHierarchy(() => {
            r.updateData(o);
          }),
            await a.draw({ animation: s, stage: 'visibility' })?.finished;
        }
        async showElement(t, e) {
          const n = Array.isArray(t) ? t : [t];
          await this.setElementVisibility(
            Object.fromEntries(n.map((t) => [t, 'visible'])),
            e,
          );
        }
        async hideElement(t, e) {
          const n = Array.isArray(t) ? t : [t];
          await this.setElementVisibility(
            Object.fromEntries(n.map((t) => [t, 'hidden'])),
            e,
          );
        }
        getElementVisibility(t) {
          const e = this.context.element.getElement(t);
          return e?.style?.visibility ?? 'visible';
        }
        async setElementZIndex(t, e) {
          const n = { nodes: [], edges: [], combos: [] },
            i = (0, f.Z)(t) ? t : { [t]: e };
          Object.entries(i).forEach(([t, e]) => {
            const i = this.getElementType(t);
            n[`${i}s`].push({ id: t, style: { zIndex: e } });
          });
          const { model: s, element: o } = this.context;
          s.preventUpdateNodeLikeHierarchy(() => s.updateData(n)),
            await o.draw({ animation: !1, stage: 'zIndex' })?.finished;
        }
        async frontElement(t) {
          const e = Array.isArray(t) ? t : [t],
            { model: n, element: i } = this.context,
            s = {};
          e.map((t) => {
            const e = i.getFrontZIndex(t);
            if ('combo' === n.getElementType(t)) {
              const o = n.getAncestorsData(t, D).at(-1) || this.getComboData(t),
                r = [o, ...n.getDescendantsData(F(o))],
                a = e - i.getElementZIndex(t);
              r.forEach((t) => {
                s[F(t)] = this.getElementZIndex(F(t)) + a;
              });
            } else s[t] = e;
          }),
            await this.setElementZIndex(s);
        }
        getElementZIndex(t) {
          const { model: e, element: n } = this.context;
          return (
            e.getElementDataById(t)?.style?.zIndex ?? n.getElementZIndex(t)
          );
        }
        async setElementState(t, e, n = !0) {
          const [i, s] = (0, f.Z)(t) ? [t, e ?? !0] : [{ [t]: e }, n],
            o = { nodes: [], edges: [], combos: [] };
          Object.entries(i).forEach(([t, e]) => {
            const n = this.getElementType(t);
            var i;
            o[`${n}s`].push({
              id: t,
              states: ((i = e), i ? (Array.isArray(i) ? i : [i]) : []),
            });
          }),
            this.updateData(o),
            await this.context.element.draw({ animation: s })?.finished;
        }
        getElementState(t) {
          return this.context.model.getElementState(t);
        }
        getElementRenderBounds(t) {
          return this.context.element.getElement(t).getRenderBounds();
        }
        isCollapsingExpanding = !1;
        async collapseElement(t, e = !0) {
          const { model: n, element: i } = this.context;
          if (te(n.getNodeLikeData([t])[0])) return;
          if (this.isCollapsingExpanding) return;
          const s = n.getElementType(t);
          (this.isCollapsingExpanding = !0),
            this.setElementCollapsibility(t, !0),
            'node' === s
              ? await i.collapseNode(t, e)
              : 'combo' === s && (await i.collapseCombo(t, e)),
            (this.isCollapsingExpanding = !1);
        }
        async expandElement(t, e = !0) {
          const { model: n, element: i } = this.context;
          if (!te(n.getNodeLikeData([t])[0])) return;
          if (this.isCollapsingExpanding) return;
          const s = n.getElementType(t);
          (this.isCollapsingExpanding = !0),
            this.setElementCollapsibility(t, !1),
            'node' === s
              ? await i.expandNode(t, e)
              : 'combo' === s && (await i.expandCombo(t, e)),
            (this.isCollapsingExpanding = !1);
        }
        setElementCollapsibility(t, e) {
          const n = this.getElementType(t);
          'node' === n
            ? this.updateNodeData([{ id: t, style: { collapsed: e } }])
            : 'combo' === n &&
              this.updateComboData([{ id: t, style: { collapsed: e } }]);
        }
        async toDataURL(t = {}) {
          return this.context.canvas.toDataURL(t);
        }
        getCanvasByViewport(t) {
          return this.context.canvas.getCanvasByViewport(t);
        }
        getViewportByCanvas(t) {
          return this.context.canvas.getViewportByCanvas(t);
        }
        getClientByCanvas(t) {
          return this.context.canvas.getClientByCanvas(t);
        }
        getCanvasByClient(t) {
          return this.context.canvas.getCanvasByClient(t);
        }
        getViewportCenter() {
          return this.context.viewport.getViewportCenter();
        }
        getCanvasCenter() {
          return this.context.viewport.getCanvasCenter();
        }
        onResize = fi(() => {
          this.resize();
        }, 300);
        on(t, e, n) {
          return super.on(t, e, n);
        }
        once(t, e) {
          return super.once(t, e);
        }
        off(t, e) {
          return super.off(t, e);
        }
      }
      function fa(t, e) {
        const {
            getNodeData: n = (t) => {
              if (!t.children) return t;
              const { children: e, ...n } = t;
              return { ...n, children: e.map((t) => t.id) };
            },
            getEdgeData: i = (t, e) => ({ source: t.id, target: e.id }),
            getChildren: s = (t) => t.children || [],
          } = e || {},
          o = [],
          r = [];
        return (
          Kt(
            t,
            (t) => {
              o.push(n(t));
              const e = s(t);
              for (const n of e) r.push(i(t, n));
            },
            (t) => s(t),
            'TB',
          ),
          { nodes: o, edges: r }
        );
      }
      const ma = (t, e) => {
        const { source: n, target: i } = e,
          s = t.getElementDataById(n),
          o = t.getElementDataById(i),
          r = Nn(s, (e) => t.getParentData(e, D)),
          a = Nn(o, (e) => t.getParentData(e, D)),
          c = { sourceNode: F(r), targetNode: F(a) };
        return e.style ? Object.assign(e.style, c) : (e.style = c), e;
      };
      var ya = n(90134);
      const ba = [
        'top',
        'top-right',
        'right',
        'right-bottom',
        'bottom',
        'bottom-left',
        'left',
        'left-top',
      ];
      class Ea extends br {
        static defaultOptions = { mode: 'bundle', edges: void 0, distance: 15 };
        cacheMergeStyle = new Map();
        constructor(t, e) {
          super(t, Object.assign({}, Ea.defaultOptions, e));
        }
        beforeDraw(t) {
          const e = this.getAffectedParallelEdges(t);
          return (
            0 === e.size ||
              ('bundle' === this.options.mode
                ? this.applyBundlingStyle(t, e, this.options.distance)
                : this.applyMergingStyle(t, e)),
            t
          );
        }
        getAffectedParallelEdges = (t) => {
          const {
              add: { edges: e },
              update: { nodes: n, edges: i, combos: s },
              remove: { edges: o },
            } = t,
            { model: r } = this.context,
            a = new Map(),
            c = (t, e) => {
              r.getRelatedEdgesData(e).forEach(
                (t) => !a.has(F(t)) && a.set(F(t), t),
              );
            };
          n.forEach(c), s.forEach(c);
          const h = (t) => {
            const e = r.getEdgeData().map((t) => ma(r, t));
            va(t, e, !0).forEach((t) => !a.has(F(t)) && a.set(F(t), t));
          };
          if ((o.size && o.forEach(h), e.size && e.forEach(h), i.size)) {
            const t = Ws(Hs(r.getChanges())).update.edges;
            i.forEach((e) => {
              h(e);
              const n = t.find((t) => F(t.value) === F(e))?.original;
              n && !wa(e, n) && h(n);
            });
          }
          Ie(this.options.edges) ||
            a.forEach((t, e) => !this.options.edges.includes(e) && a.delete(e));
          const l = r.getEdgeData().map(F);
          return new Map(
            [...a].sort((t, e) => l.indexOf(t[0]) - l.indexOf(e[0])),
          );
        };
        applyBundlingStyle = (t, e, n) => {
          const { edgeMap: i, reverses: s } = xa(e);
          i.forEach((e) => {
            e.forEach((e, i, o) => {
              const r = Object.assign(e, {
                  type: 'quadratic',
                  style: (() => {
                    const t = o.length,
                      r = {};
                    if (e.source === e.target) {
                      const t = ba.length;
                      (r.loopPlacement = ba[i % t]),
                        (r.loopDist = Math.floor(i / t) * n + 50);
                    } else if (1 === t) r.curveOffset = 0;
                    else {
                      const o =
                        (i % 2 == 0 ? 1 : -1) *
                        (s[`${e.source}|${e.target}|${i}`] ? -1 : 1);
                      r.curveOffset =
                        t % 2 == 1
                          ? o * Math.ceil(i / 2) * n * 2
                          : o * (Math.floor(i / 2) * n * 2 + n);
                    }
                    return Object.assign({}, e.style, r);
                  })(),
                }),
                a = this.context.element?.getElement(F(e));
              Z(t, a ? 'update' : 'add', 'edge', r, !0);
            });
          });
        };
        resetEdgeStyle = (t) => {
          const e = t.style || {},
            n = this.cacheMergeStyle.get(F(t)) || {};
          return (
            Object.keys(n).forEach((i) => {
              g(e[i], n[i]) && (t[i] ? (e[i] = t[i]) : delete e[i]);
            }),
            Object.assign(t, { style: e })
          );
        };
        applyMergingStyle = (t, e) => {
          const { edgeMap: n, reverses: i } = xa(e);
          n.forEach((e) => {
            if (1 === e.length) {
              const n = e[0],
                i = this.context.element?.getElement(F(n));
              return void Z(
                t,
                i ? 'update' : 'add',
                'edge',
                this.resetEdgeStyle(n),
                !0,
              );
            }
            const n = e
              .map(({ source: t, target: e, style: n = {} }, s) => {
                const { startArrow: o, endArrow: r } = n,
                  a = {},
                  [c, h] = i[`${t}|${e}|${s}`]
                    ? ['endArrow', 'startArrow']
                    : ['startArrow', 'endArrow'];
                return (
                  (0, ya.Z)(o) && (a[c] = o), (0, ya.Z)(r) && (a[h] = r), a
                );
              })
              .reduce((t, e) => ({ ...t, ...e }), {});
            e.forEach((e, i, s) => {
              if (0 === i) {
                const i = Object.assign(
                  {},
                  (0, tt.Z)(this.options.style)
                    ? this.options.style(s)
                    : this.options.style,
                  { childrenData: s },
                );
                this.cacheMergeStyle.set(F(e), i);
                const o = { ...e, type: 'line', style: { ...n, ...i } },
                  r = this.context.element?.getElement(F(e));
                Z(t, r ? 'update' : 'add', 'edge', o, !0);
              } else Z(t, 'remove', 'edge', e);
            });
          });
        };
      }
      const xa = (t) => {
          const e = new Map(),
            n = new Set(),
            i = {};
          for (const [s, o] of t) {
            if (n.has(s)) continue;
            const { source: r, target: a } = o,
              c = `${r}-${a}`;
            e.has(c) || e.set(c, []), e.get(c).push(o), n.add(s);
            for (const [s, h] of t)
              n.has(s) ||
                (wa(o, h) &&
                  (e.get(c).push(h),
                  n.add(s),
                  r === h.target &&
                    a === h.source &&
                    (i[`${h.source}|${h.target}|${e.get(c).length - 1}`] =
                      !0)));
          }
          return { edgeMap: e, reverses: i };
        },
        va = (t, e, n) => e.filter((e) => (n || F(e) !== F(t)) && wa(e, t)),
        wa = (t, e) => {
          const { sourceNode: n, targetNode: i } = t.style || {},
            { sourceNode: s, targetNode: o } = e.style || {};
          return (n === s && i === o) || (n === o && i === s);
        };
      const Sa = {
          animation: {
            'combo-collapse': U,
            'combo-expand': K,
            'node-collapse': W,
            'node-expand': V,
            'path-in': Y,
            'path-out': G,
            fade: [{ fields: ['opacity'] }],
            translate: [{ fields: ['x', 'y'] }],
          },
          behavior: {
            'brush-select': Vt,
            'click-select': Qt,
            'collapse-expand': di,
            'create-edge': gi,
            'drag-canvas': mi,
            'drag-element-force': class extends yi {
              get forceLayoutInstance() {
                return this.context.layout
                  .getLayoutInstance()
                  .find((t) => ['d3-force', 'd3-force-3d'].includes(t?.id));
              }
              validate(t) {
                return (
                  !!this.context.layout &&
                  (this.forceLayoutInstance
                    ? super.validate(t)
                    : (r.warn(
                        'DragElementForce only works with d3-force or d3-force-3d layout',
                      ),
                      !1))
                );
              }
              async moveElement(t, e) {
                const n = this.forceLayoutInstance;
                this.context.graph.getNodeData(t).forEach((i, s) => {
                  const { x: o = 0, y: r = 0 } = i.style || {};
                  n && vi(n, 'setFixedPosition', t[s], [...ft([+o, +r], e)]);
                });
              }
              onDragStart(t) {
                if (((this.enable = this.validate(t)), !this.enable)) return;
                (this.target = this.getSelectedNodeIDs([t.target.id])),
                  this.hideEdge(),
                  this.context.graph.frontElement(this.target);
                const e = this.forceLayoutInstance;
                e && wi(e, 'simulation').alphaTarget(0.3).restart(),
                  this.context.graph.getNodeData(this.target).forEach((t) => {
                    const { x: n = 0, y: i = 0 } = t.style || {};
                    e && vi(e, 'setFixedPosition', F(t), [+n, +i]);
                  });
              }
              onDrag(t) {
                if (!this.enable) return;
                const e = this.getDelta(t);
                this.moveElement(this.target, e);
              }
              onDragEnd() {
                const t = this.forceLayoutInstance;
                t && wi(t, 'simulation').alphaTarget(0),
                  this.context.graph.getNodeData(this.target).forEach((e) => {
                    t && vi(t, 'setFixedPosition', F(e), [null, null, null]);
                  });
              }
            },
            'drag-element': yi,
            'fix-element-size': Si,
            'focus-element': Ci,
            'hover-activate': Oi,
            'lasso-select': class extends Vt {
              points;
              pathShape;
              onPointerDown(t) {
                if (!super.validate(t) || !super.isKeydown() || this.points)
                  return;
                const { canvas: e } = this.context;
                (this.pathShape = new s.y$({
                  id: 'g6-lasso-select',
                  style: this.options.style,
                })),
                  e.appendChild(this.pathShape),
                  (this.points = [Yt(t)]);
              }
              onPointerMove(t) {
                if (!this.points) return;
                const { immediately: e, mode: n } = this.options;
                this.points.push(Yt(t)),
                  this.pathShape?.setAttribute(
                    'd',
                    (function (t, e = !0) {
                      const n = [];
                      return (
                        t.forEach((t, e) => {
                          n.push([0 === e ? 'M' : 'L', ...t]);
                        }),
                        e && n.push(['Z']),
                        n
                      );
                    })(this.points),
                  ),
                  e &&
                    'default' === n &&
                    this.points.length > 2 &&
                    super.updateElementsStates(this.points);
              }
              onPointerUp() {
                this.points &&
                  (this.points.length < 2 ||
                    super.updateElementsStates(this.points),
                  this.clearLasso());
              }
              clearLasso() {
                this.pathShape?.remove(),
                  (this.pathShape = void 0),
                  (this.points = void 0);
              }
            },
            'optimize-viewport-transform': Ti,
            'scroll-canvas': Ai,
            'zoom-canvas': Mi,
          },
          combo: {
            circle: class extends ln {
              constructor(t) {
                super(t);
              }
              drawKeyShape(t, e) {
                return this.upsert('key', s.Cd, this.getKeyStyle(t), e);
              }
              getKeyStyle(t) {
                const { collapsed: e } = t,
                  n = super.getKeyStyle(t),
                  [i] = this.getKeySize(t);
                return { ...n, ...(e && ce(n, 'collapsed')), r: i / 2 };
              }
              getCollapsedKeySize(t) {
                const [e, n] = de(t.collapsedSize),
                  i = Math.max(e, n) / 2;
                return [2 * i, 2 * i, 0];
              }
              getExpandedKeySize(t) {
                const e = this.getContentBBox(t),
                  [n, i] = at(e),
                  s = Math.sqrt(n ** 2 + i ** 2) / 2;
                return [2 * s, 2 * s, 0];
              }
              getIntersectPoint(t) {
                return Ft(t, this.getShape('key').getBounds());
              }
            },
            rect: class extends ln {
              constructor(t) {
                super(t);
              }
              drawKeyShape(t, e) {
                return this.upsert('key', s.UL, this.getKeyStyle(t), e);
              }
              getKeyStyle(t) {
                const e = super.getKeyStyle(t),
                  [n, i] = this.getKeySize(t);
                return {
                  ...e,
                  ...(t.collapsed && ce(e, 'collapsed')),
                  width: n,
                  height: i,
                  x: -n / 2,
                  y: -i / 2,
                };
              }
            },
          },
          edge: {
            cubic: Hn,
            line: Yn,
            polyline: Gn,
            quadratic: Un,
            'cubic-horizontal': Wn,
            'cubic-vertical': Vn,
          },
          layout: {
            'antv-dagre': Pi.b,
            'combo-combined': Ni.u,
            'compact-box': Ri.compactBox,
            'force-atlas2': _i.E,
            circular: ki.S,
            concentric: Ii.W,
            'd3-force': Li.j,
            dagre: Bi.V,
            dendrogram: Ri.dendrogram,
            force: Fi.y,
            fruchterman: zi.O,
            grid: ji.M,
            indented: Ri.indented,
            mds: $i.A,
            mindmap: Ri.mindmap,
            radial: Zi.D,
            random: Hi._,
          },
          node: {
            circle: qe,
            diamond: class extends Je {
              constructor(t) {
                super(t);
              }
              getPoints(t) {
                const [e, n] = this.getSize(t);
                return (function (t, e) {
                  return [
                    [0, -e / 2],
                    [t / 2, 0],
                    [0, e / 2],
                    [-t / 2, 0],
                  ];
                })(e, n);
              }
            },
            ellipse: nn,
            hexagon: class extends Je {
              constructor(t) {
                super(t);
              }
              getOuterR(t) {
                return t.outerR || Math.min(...this.getSize(t)) / 2;
              }
              getPoints(t) {
                return [
                  [0, (e = this.getOuterR(t))],
                  [(e * Math.sqrt(3)) / 2, e / 2],
                  [(e * Math.sqrt(3)) / 2, -e / 2],
                  [0, -e],
                  [(-e * Math.sqrt(3)) / 2, -e / 2],
                  [(-e * Math.sqrt(3)) / 2, e / 2],
                ];
                var e;
              }
              getIconStyle(t) {
                const e = super.getIconStyle(t),
                  n = this.getOuterR(t) * Gt;
                return !!e && { width: n, height: n, ...e };
              }
            },
            html: rn,
            image: an,
            rect: class extends Xe {
              constructor(t) {
                super(t);
              }
              getKeyStyle(t) {
                const [e, n] = this.getSize(t);
                return {
                  ...super.getKeyStyle(t),
                  width: e,
                  height: n,
                  x: -e / 2,
                  y: -n / 2,
                };
              }
              getIconStyle(t) {
                const e = super.getIconStyle(t),
                  { width: n, height: i } = this.getShape('key').attributes;
                return !!e && { width: n * Gt, height: i * Gt, ...e };
              }
              drawKeyShape(t, e) {
                return this.upsert('key', s.UL, this.getKeyStyle(t), e);
              }
            },
            star: class extends Je {
              constructor(t) {
                super(t);
              }
              getInnerR(t) {
                return t.innerR || (3 * this.getOuterR(t)) / 8;
              }
              getOuterR(t) {
                return Math.min(...this.getSize(t)) / 2;
              }
              getPoints(t) {
                return (
                  (e = this.getOuterR(t)),
                  (n = this.getInnerR(t)),
                  [
                    [0, -e],
                    [
                      n * Math.cos((3 * Math.PI) / 10),
                      -n * Math.sin((3 * Math.PI) / 10),
                    ],
                    [e * Math.cos(Math.PI / 10), -e * Math.sin(Math.PI / 10)],
                    [n * Math.cos(Math.PI / 10), n * Math.sin(Math.PI / 10)],
                    [
                      e * Math.cos((3 * Math.PI) / 10),
                      e * Math.sin((3 * Math.PI) / 10),
                    ],
                    [0, n],
                    [
                      -e * Math.cos((3 * Math.PI) / 10),
                      e * Math.sin((3 * Math.PI) / 10),
                    ],
                    [-n * Math.cos(Math.PI / 10), n * Math.sin(Math.PI / 10)],
                    [-e * Math.cos(Math.PI / 10), -e * Math.sin(Math.PI / 10)],
                    [
                      -n * Math.cos((3 * Math.PI) / 10),
                      -n * Math.sin((3 * Math.PI) / 10),
                    ],
                  ]
                );
                var e, n;
              }
              getIconStyle(t) {
                const e = super.getIconStyle(t),
                  n = 2 * this.getInnerR(t) * Gt;
                return !!e && { width: n, height: n, ...e };
              }
              getPortXY(t, e) {
                const { placement: n = 'top' } = e;
                return Qn(
                  this.getShape('key').getLocalBounds(),
                  n,
                  (function (t, e) {
                    const n = {};
                    return (
                      (n.top = [0, -t]),
                      (n.left = [
                        -t * Math.cos(Math.PI / 10),
                        -t * Math.sin(Math.PI / 10),
                      ]),
                      (n['left-bottom'] = [
                        -t * Math.cos((3 * Math.PI) / 10),
                        t * Math.sin((3 * Math.PI) / 10),
                      ]),
                      (n.bottom = [0, e]),
                      (n['right-bottom'] = [
                        t * Math.cos((3 * Math.PI) / 10),
                        t * Math.sin((3 * Math.PI) / 10),
                      ]),
                      (n.right = n.default =
                        [
                          t * Math.cos(Math.PI / 10),
                          -t * Math.sin(Math.PI / 10),
                        ]),
                      n
                    );
                  })(this.getOuterR(t), this.getInnerR(t)),
                  !1,
                );
              }
            },
            donut: Qe,
            triangle: cn,
          },
          palette: {
            spectral: [
              'rgb(158, 1, 66)',
              'rgb(213, 62, 79)',
              'rgb(244, 109, 67)',
              'rgb(253, 174, 97)',
              'rgb(254, 224, 139)',
              'rgb(255, 255, 191)',
              'rgb(230, 245, 152)',
              'rgb(171, 221, 164)',
              'rgb(102, 194, 165)',
              'rgb(50, 136, 189)',
              'rgb(94, 79, 162)',
            ],
            tableau: [
              'rgb(78, 121, 167)',
              'rgb(242, 142, 44)',
              'rgb(225, 87, 89)',
              'rgb(118, 183, 178)',
              'rgb(89, 161, 79)',
              'rgb(237, 201, 73)',
              'rgb(175, 122, 161)',
              'rgb(255, 157, 167)',
              'rgb(156, 117, 95)',
              'rgb(186, 176, 171)',
            ],
            oranges: [
              'rgb(255, 245, 235)',
              'rgb(254, 230, 206)',
              'rgb(253, 208, 162)',
              'rgb(253, 174, 107)',
              'rgb(253, 141, 60)',
              'rgb(241, 105, 19)',
              'rgb(217, 72, 1)',
              'rgb(166, 54, 3)',
              'rgb(127, 39, 4)',
            ],
            greens: [
              'rgb(247, 252, 245)',
              'rgb(229, 245, 224)',
              'rgb(199, 233, 192)',
              'rgb(161, 217, 155)',
              'rgb(116, 196, 118)',
              'rgb(65, 171, 93)',
              'rgb(35, 139, 69)',
              'rgb(0, 109, 44)',
              'rgb(0, 68, 27)',
            ],
            blues: [
              'rgb(247, 251, 255)',
              'rgb(222, 235, 247)',
              'rgb(198, 219, 239)',
              'rgb(158, 202, 225)',
              'rgb(107, 174, 214)',
              'rgb(66, 146, 198)',
              'rgb(33, 113, 181)',
              'rgb(8, 81, 156)',
              'rgb(8, 48, 107)',
            ],
          },
          theme: { dark: mr, light: yr },
          plugin: {
            'bubble-sets': Bs,
            'grid-line': $s,
            background: Qi,
            contextmenu: zs,
            fullscreen: js,
            history: Gs,
            hull: eo,
            legend: so,
            timebar: nr,
            toolbar: rr,
            tooltip: cr,
            watermark: dr,
          },
          transform: {
            'update-related-edges': class extends br {
              beforeDraw(t, e) {
                const { stage: n } = e;
                if ('visibility' === n) return t;
                const { model: i } = this.context,
                  {
                    update: { nodes: s, edges: o, combos: r },
                  } = t,
                  a = (t, e) => {
                    i.getRelatedEdgesData(e).forEach(
                      (t) => !o.has(F(t)) && o.set(F(t), t),
                    );
                  };
                return s.forEach(a), r.forEach(a), t;
              }
            },
            'arrange-draw-order': class extends br {
              beforeDraw(t) {
                const { model: e } = this.context,
                  n = t.add.combos,
                  i = (t) => {
                    const n = [];
                    return (
                      t.forEach((t, i) => {
                        const s = e
                          .getAncestorsData(i, 'combo')
                          .map((t) => F(t))
                          .reverse();
                        n.push([i, t, s.length]);
                      }),
                      new Map(
                        n
                          .sort(([, , t], [, , e]) => e - t)
                          .map(([t, e]) => [t, e]),
                      )
                    );
                  };
                return (
                  (t.add.combos = i(n)),
                  (t.update.combos = i(t.update.combos)),
                  t
                );
              }
            },
            'collapse-expand-combo': class extends br {
              beforeDraw(t, e) {
                if ('visibility' === e.stage) return t;
                const { model: n } = this.context,
                  { add: i, update: s } = t,
                  o = [...t.update.combos.entries(), ...t.add.combos.entries()];
                for (; o.length; ) {
                  const [e, r] = o.pop();
                  if (te(r)) {
                    const r = n.getDescendantsData(e),
                      a = r.map(F),
                      { internal: c, external: h } = kn(a, (t) =>
                        n.getRelatedEdgesData(t),
                      );
                    r.forEach((e) => {
                      const i = F(e),
                        s = o.findIndex(([t]) => t === i);
                      -1 !== s && o.splice(s, 1);
                      const r = n.getElementType(i);
                      Er(t, 'remove', r, e);
                    }),
                      c.forEach((e) => Er(t, 'remove', 'edge', e)),
                      h.forEach((t) => {
                        const e = F(t),
                          n = this.context.element?.getElement(e);
                        n ? s.edges.set(e, t) : i.edges.set(e, t);
                      });
                  } else {
                    const i = n.getChildrenData(e),
                      s = i.map(F),
                      { edges: r } = kn(s, (t) => n.getRelatedEdgesData(t));
                    [...i, ...r].forEach((e) => {
                      const i = F(e),
                        s = n.getElementType(i),
                        r = this.context.element?.getElement(i);
                      Er(t, r ? 'update' : 'add', s, e),
                        'combo' === s && o.push([i, e]);
                    });
                  }
                }
                return t;
              }
            },
            'collapse-expand-node': class extends br {
              getElement(t) {
                return this.context.element.getElement(t);
              }
              handleExpand(t, e) {
                if ((xr(e, 'add', 'node', t), te(t))) return;
                const n = F(t);
                xr(e, 'add', 'node', t);
                this.context.model
                  .getRelatedEdgesData(n, 'out')
                  .forEach((t) => {
                    Er(e, 'add', 'edge', t);
                  });
                this.context.model.getChildrenData(n).forEach((t) => {
                  this.handleExpand(t, e);
                });
              }
              beforeDraw(t) {
                const { graph: e, model: n } = this.context,
                  {
                    add: { nodes: i, edges: s },
                    update: { nodes: o },
                  } = t,
                  r = new Map(),
                  a = new Map();
                i.forEach((t, e) => {
                  te(t) && r.set(e, t);
                }),
                  s.forEach((t) => {
                    if ('node' !== e.getElementType(t.source)) return;
                    const n = e.getNodeData(t.source);
                    te(n) && r.set(t.source, n);
                  }),
                  o.forEach((t, e) => {
                    const n = this.getElement(e);
                    if (!n) return;
                    const i = n.attributes.collapsed;
                    te(t) ? i || r.set(e, t) : i && a.set(e, t);
                  });
                const c = new Set();
                return (
                  r.forEach((e, i) => {
                    n.getDescendantsData(i).forEach((e) => {
                      const i = F(e);
                      if (c.has(i)) return;
                      Er(t, 'remove', 'node', e);
                      n.getRelatedEdgesData(i).forEach((e) => {
                        Er(t, 'remove', 'edge', e);
                      }),
                        c.add(i);
                    });
                  }),
                  a.forEach((e, i) => {
                    n.getAncestorsData(i, M).some(te)
                      ? Er(t, 'remove', 'node', e)
                      : this.handleExpand(e, t);
                  }),
                  t
                );
              }
            },
            'process-parallel-edges': Ea,
            'get-edge-actual-ends': class extends br {
              beforeDraw(t) {
                const { add: e, update: n } = t,
                  { model: i } = this.context;
                return (
                  [...e.edges.entries(), ...n.edges.entries()].forEach(
                    ([, t]) => {
                      ma(i, t);
                    },
                  ),
                  t
                );
              }
            },
          },
        },
        Ca = {
          animation: {},
          behavior: {},
          combo: {},
          edge: {},
          layout: {},
          node: {},
          palette: {},
          theme: {},
          plugin: {},
          transform: {},
        };
      function Oa(t, e, n, i = !1) {
        const s = Ca[t][e];
        !i && s
          ? s !== n &&
            r.warn(`The extension ${e} of ${t} has been registered before.`)
          : Object.assign(Ca[t], { [e]: n });
      }
      function Ta(t, e) {
        const n = Ca[t]?.[e];
        if (n) return n;
      }
      (s.GZ.enableCSSParsing = !1),
        Object.entries(Sa).forEach(([t, e]) => {
          Object.entries(e).forEach(([e, n]) => {
            Oa(t, e, n);
          });
        });
    },
    81746: function (t) {
      var e;
      'undefined' != typeof self && self,
        (e = function () {
          return (function (t) {
            var e = {};
            function n(i) {
              if (e[i]) return e[i].exports;
              var s = (e[i] = { i: i, l: !1, exports: {} });
              return (
                t[i].call(s.exports, s, s.exports, n), (s.l = !0), s.exports
              );
            }
            return (
              (n.m = t),
              (n.c = e),
              (n.d = function (t, e, i) {
                n.o(t, e) ||
                  Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: i,
                  });
              }),
              (n.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return n.d(e, 'a', e), e;
              }),
              (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (n.p = ''),
              n((n.s = 5))
            );
          })([
            function (t, e) {
              t.exports = {
                assign: Object.assign,
                getHeight: function (t, e, n, i) {
                  return (
                    void 0 === i && (i = 'height'),
                    'center' === n ? (t[i] + e[i]) / 2 : t.height
                  );
                },
              };
            },
            function (t, e, n) {
              var i = n(3),
                s = (function () {
                  function t(t, e) {
                    void 0 === e && (e = {}),
                      (this.options = e),
                      (this.rootNode = i(t, e));
                  }
                  return (
                    (t.prototype.execute = function () {
                      throw new Error('please override this method');
                    }),
                    t
                  );
                })();
              t.exports = s;
            },
            function (t, e, n) {
              var i = n(4),
                s = ['LR', 'RL', 'TB', 'BT', 'H', 'V'],
                o = ['LR', 'RL', 'H'],
                r = s[0];
              t.exports = function (t, e, n) {
                var a = e.direction || r;
                if (
                  ((e.isHorizontal = (function (t) {
                    return o.indexOf(t) > -1;
                  })(a)),
                  a && -1 === s.indexOf(a))
                )
                  throw new TypeError('Invalid direction: ' + a);
                if (a === s[0]) n(t, e);
                else if (a === s[1]) n(t, e), t.right2left();
                else if (a === s[2]) n(t, e);
                else if (a === s[3]) n(t, e), t.bottom2top();
                else if (a === s[4] || a === s[5]) {
                  var c = i(t, e),
                    h = c.left,
                    l = c.right;
                  n(h, e),
                    n(l, e),
                    e.isHorizontal ? h.right2left() : h.bottom2top(),
                    l.translate(h.x - l.x, h.y - l.y),
                    (t.x = h.x),
                    (t.y = l.y);
                  var d = t.getBoundingBox();
                  e.isHorizontal
                    ? d.top < 0 && t.translate(0, -d.top)
                    : d.left < 0 && t.translate(-d.left, 0);
                }
                var u = e.fixedRoot;
                return (
                  void 0 === u && (u = !0),
                  u &&
                    t.translate(
                      -(t.x + t.width / 2 + t.hgap),
                      -(t.y + t.height / 2 + t.vgap),
                    ),
                  t
                );
              };
            },
            function (t, e, n) {
              var i = n(0),
                s = {
                  getId: function (t) {
                    return t.id || t.name;
                  },
                  getPreH: function (t) {
                    return t.preH || 0;
                  },
                  getPreV: function (t) {
                    return t.preV || 0;
                  },
                  getHGap: function (t) {
                    return t.hgap || 18;
                  },
                  getVGap: function (t) {
                    return t.vgap || 18;
                  },
                  getChildren: function (t) {
                    return t.children;
                  },
                  getHeight: function (t) {
                    return t.height || 36;
                  },
                  getWidth: function (t) {
                    var e = t.label || ' ';
                    return t.width || 18 * e.split('').length;
                  },
                };
              function o(t, e) {
                var n = this;
                if (((n.vgap = n.hgap = 0), t instanceof o)) return t;
                n.data = t;
                var i = e.getHGap(t),
                  s = e.getVGap(t);
                return (
                  (n.preH = e.getPreH(t)),
                  (n.preV = e.getPreV(t)),
                  (n.width = e.getWidth(t)),
                  (n.height = e.getHeight(t)),
                  (n.width += n.preH),
                  (n.height += n.preV),
                  (n.id = e.getId(t)),
                  (n.x = n.y = 0),
                  (n.depth = 0),
                  n.children || (n.children = []),
                  n.addGap(i, s),
                  n
                );
              }
              i.assign(o.prototype, {
                isRoot: function () {
                  return 0 === this.depth;
                },
                isLeaf: function () {
                  return 0 === this.children.length;
                },
                addGap: function (t, e) {
                  var n = this;
                  (n.hgap += t),
                    (n.vgap += e),
                    (n.width += 2 * t),
                    (n.height += 2 * e);
                },
                eachNode: function (t) {
                  for (var e, n = [this]; (e = n.shift()); )
                    t(e), (n = e.children.concat(n));
                },
                DFTraverse: function (t) {
                  this.eachNode(t);
                },
                BFTraverse: function (t) {
                  for (var e, n = [this]; (e = n.shift()); )
                    t(e), (n = n.concat(e.children));
                },
                getBoundingBox: function () {
                  var t = {
                    left: Number.MAX_VALUE,
                    top: Number.MAX_VALUE,
                    width: 0,
                    height: 0,
                  };
                  return (
                    this.eachNode(function (e) {
                      (t.left = Math.min(t.left, e.x)),
                        (t.top = Math.min(t.top, e.y)),
                        (t.width = Math.max(t.width, e.x + e.width)),
                        (t.height = Math.max(t.height, e.y + e.height));
                    }),
                    t
                  );
                },
                translate: function (t, e) {
                  void 0 === t && (t = 0),
                    void 0 === e && (e = 0),
                    this.eachNode(function (n) {
                      (n.x += t), (n.y += e), (n.x += n.preH), (n.y += n.preV);
                    });
                },
                right2left: function () {
                  var t = this,
                    e = t.getBoundingBox();
                  t.eachNode(function (t) {
                    t.x = t.x - 2 * (t.x - e.left) - t.width;
                  }),
                    t.translate(e.width, 0);
                },
                bottom2top: function () {
                  var t = this,
                    e = t.getBoundingBox();
                  t.eachNode(function (t) {
                    t.y = t.y - 2 * (t.y - e.top) - t.height;
                  }),
                    t.translate(0, e.height);
                },
              }),
                (t.exports = function (t, e, n) {
                  void 0 === e && (e = {});
                  var r,
                    a = new o(t, (e = i.assign({}, s, e))),
                    c = [a];
                  if (!n && !t.collapsed)
                    for (; (r = c.shift()); )
                      if (!r.data.collapsed) {
                        var h = e.getChildren(r.data),
                          l = h ? h.length : 0;
                        if (((r.children = new Array(l)), h && l))
                          for (var d = 0; d < l; d++) {
                            var u = new o(h[d], e);
                            (r.children[d] = u),
                              c.push(u),
                              (u.parent = r),
                              (u.depth = r.depth + 1);
                          }
                      }
                  return a;
                });
            },
            function (t, e, n) {
              var i = n(3);
              t.exports = function (t, e) {
                for (
                  var n = i(t.data, e, !0),
                    s = i(t.data, e, !0),
                    o = t.children.length,
                    r = Math.round(o / 2),
                    a =
                      e.getSide ||
                      function (t, e) {
                        return e < r ? 'right' : 'left';
                      },
                    c = 0;
                  c < o;
                  c++
                ) {
                  var h = t.children[c];
                  'right' === a(h, c) ? s.children.push(h) : n.children.push(h);
                }
                return (
                  n.eachNode(function (t) {
                    t.isRoot() || (t.side = 'left');
                  }),
                  s.eachNode(function (t) {
                    t.isRoot() || (t.side = 'right');
                  }),
                  { left: n, right: s }
                );
              };
            },
            function (t, e, n) {
              var i = {
                compactBox: n(6),
                dendrogram: n(8),
                indented: n(10),
                mindmap: n(12),
              };
              t.exports = i;
            },
            function (t, e, n) {
              function i(t, e) {
                return (
                  (i = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (t, e) {
                        return (t.__proto__ = e), t;
                      }),
                  i(t, e)
                );
              }
              var s = n(1),
                o = n(7),
                r = n(2),
                a = n(0),
                c = (function (t) {
                  function e() {
                    return t.apply(this, arguments) || this;
                  }
                  var n, s;
                  return (
                    (s = t),
                    ((n = e).prototype = Object.create(s.prototype)),
                    (n.prototype.constructor = n),
                    i(n, s),
                    (e.prototype.execute = function () {
                      return r(this.rootNode, this.options, o);
                    }),
                    e
                  );
                })(s),
                h = {};
              t.exports = function (t, e) {
                return (e = a.assign({}, h, e)), new c(t, e).execute();
              };
            },
            function (t, e) {
              function n(t, e, n, i) {
                void 0 === i && (i = []);
                var s = this;
                (s.w = t || 0),
                  (s.h = e || 0),
                  (s.y = n || 0),
                  (s.x = 0),
                  (s.c = i || []),
                  (s.cs = i.length),
                  (s.prelim = 0),
                  (s.mod = 0),
                  (s.shift = 0),
                  (s.change = 0),
                  (s.tl = null),
                  (s.tr = null),
                  (s.el = null),
                  (s.er = null),
                  (s.msel = 0),
                  (s.mser = 0);
              }
              function i(t, e, n) {
                n ? (t.y += e) : (t.x += e),
                  t.children.forEach(function (t) {
                    i(t, e, n);
                  });
              }
              function s(t, e) {
                var n = e ? t.y : t.x;
                return (
                  t.children.forEach(function (t) {
                    n = Math.min(s(t, e), n);
                  }),
                  n
                );
              }
              function o(t, e) {
                i(t, -s(t, e), e);
              }
              function r(t, e, n) {
                n ? (e.y = t.x) : (e.x = t.x),
                  t.c.forEach(function (t, i) {
                    r(t, e.children[i], n);
                  });
              }
              function a(t, e, n) {
                void 0 === n && (n = 0),
                  e
                    ? ((t.x = n), (n += t.width))
                    : ((t.y = n), (n += t.height)),
                  t.children.forEach(function (t) {
                    a(t, e, n);
                  });
              }
              (n.fromNode = function (t, e) {
                if (!t) return null;
                var i = [];
                return (
                  t.children.forEach(function (t) {
                    i.push(n.fromNode(t, e));
                  }),
                  e
                    ? new n(t.height, t.width, t.x, i)
                    : new n(t.width, t.height, t.y, i)
                );
              }),
                (t.exports = function (t, e) {
                  void 0 === e && (e = {});
                  var i = e.isHorizontal;
                  function s(t) {
                    0 === t.cs
                      ? ((t.el = t), (t.er = t), (t.msel = t.mser = 0))
                      : ((t.el = t.c[0].el),
                        (t.msel = t.c[0].msel),
                        (t.er = t.c[t.cs - 1].er),
                        (t.mser = t.c[t.cs - 1].mser));
                  }
                  function c(t, e, n) {
                    for (
                      var i = t.c[e - 1], s = i.mod, o = t.c[e], r = o.mod;
                      null !== i && null !== o;

                    ) {
                      u(i) > n.low && (n = n.nxt);
                      var a = s + i.prelim + i.w - (r + o.prelim);
                      a > 0 && ((r += a), h(t, e, n.index, a));
                      var c = u(i),
                        p = u(o);
                      c <= p && null !== (i = d(i)) && (s += i.mod),
                        c >= p && null !== (o = l(o)) && (r += o.mod);
                    }
                    !i && o
                      ? (function (t, e, n, i) {
                          var s = t.c[0].el;
                          s.tl = n;
                          var o = i - n.mod - t.c[0].msel;
                          (s.mod += o),
                            (s.prelim -= o),
                            (t.c[0].el = t.c[e].el),
                            (t.c[0].msel = t.c[e].msel);
                        })(t, e, o, r)
                      : i &&
                        !o &&
                        (function (t, e, n, i) {
                          var s = t.c[e].er;
                          s.tr = n;
                          var o = i - n.mod - t.c[e].mser;
                          (s.mod += o),
                            (s.prelim -= o),
                            (t.c[e].er = t.c[e - 1].er),
                            (t.c[e].mser = t.c[e - 1].mser);
                        })(t, e, i, s);
                  }
                  function h(t, e, n, i) {
                    (t.c[e].mod += i),
                      (t.c[e].msel += i),
                      (t.c[e].mser += i),
                      (function (t, e, n, i) {
                        if (n !== e - 1) {
                          var s = e - n;
                          (t.c[n + 1].shift += i / s),
                            (t.c[e].shift -= i / s),
                            (t.c[e].change -= i - i / s);
                        }
                      })(t, e, n, i);
                  }
                  function l(t) {
                    return 0 === t.cs ? t.tl : t.c[0];
                  }
                  function d(t) {
                    return 0 === t.cs ? t.tr : t.c[t.cs - 1];
                  }
                  function u(t) {
                    return t.y + t.h;
                  }
                  function p(t, e, n) {
                    for (; null !== n && t >= n.low; ) n = n.nxt;
                    return { low: t, index: e, nxt: n };
                  }
                  a(t, i);
                  var g = n.fromNode(t, i);
                  return (
                    (function t(e) {
                      if (0 !== e.cs) {
                        t(e.c[0]);
                        for (
                          var n = p(u(e.c[0].el), 0, null), i = 1;
                          i < e.cs;
                          ++i
                        ) {
                          t(e.c[i]);
                          var o = u(e.c[i].er);
                          c(e, i, n), (n = p(o, i, n));
                        }
                        !(function (t) {
                          t.prelim =
                            (t.c[0].prelim +
                              t.c[0].mod +
                              t.c[t.cs - 1].mod +
                              t.c[t.cs - 1].prelim +
                              t.c[t.cs - 1].w) /
                              2 -
                            t.w / 2;
                        })(e),
                          s(e);
                      } else s(e);
                    })(g),
                    (function t(e, n) {
                      (n += e.mod),
                        (e.x = e.prelim + n),
                        (function (t) {
                          for (var e = 0, n = 0, i = 0; i < t.cs; i++)
                            (n += (e += t.c[i].shift) + t.c[i].change),
                              (t.c[i].mod += n);
                        })(e);
                      for (var i = 0; i < e.cs; i++) t(e.c[i], n);
                    })(g, 0),
                    r(g, t, i),
                    o(t, i),
                    t
                  );
                });
            },
            function (t, e, n) {
              function i(t, e) {
                return (
                  (i = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (t, e) {
                        return (t.__proto__ = e), t;
                      }),
                  i(t, e)
                );
              }
              var s = n(1),
                o = n(9),
                r = n(2),
                a = n(0),
                c = (function (t) {
                  function e() {
                    return t.apply(this, arguments) || this;
                  }
                  var n, s;
                  return (
                    (s = t),
                    ((n = e).prototype = Object.create(s.prototype)),
                    (n.prototype.constructor = n),
                    i(n, s),
                    (e.prototype.execute = function () {
                      var t = this;
                      return (
                        (t.rootNode.width = 0), r(t.rootNode, t.options, o)
                      );
                    }),
                    e
                  );
                })(s),
                h = {};
              t.exports = function (t, e) {
                return (e = a.assign({}, h, e)), new c(t, e).execute();
              };
            },
            function (t, e, n) {
              var i = n(0);
              function s(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = []);
                var n = this;
                (n.x = n.y = 0),
                  (n.leftChild = n.rightChild = null),
                  (n.height = 0),
                  (n.children = e);
              }
              var o = {
                isHorizontal: !0,
                nodeSep: 20,
                nodeSize: 20,
                rankSep: 200,
                subTreeSep: 10,
              };
              function r(t, e, n) {
                n ? ((e.x = t.x), (e.y = t.y)) : ((e.x = t.y), (e.y = t.x)),
                  t.children.forEach(function (t, i) {
                    r(t, e.children[i], n);
                  });
              }
              t.exports = function (t, e) {
                void 0 === e && (e = {}), (e = i.assign({}, o, e));
                var n,
                  a = 0,
                  c = (function t(e) {
                    if (!e) return null;
                    (e.width = 0), e.depth && e.depth > a && (a = e.depth);
                    var n = e.children,
                      i = n.length,
                      o = new s(e.height, []);
                    return (
                      n.forEach(function (e, n) {
                        var s = t(e);
                        o.children.push(s),
                          0 === n && (o.leftChild = s),
                          n === i - 1 && (o.rightChild = s);
                      }),
                      (o.originNode = e),
                      (o.isLeaf = e.isLeaf()),
                      o
                    );
                  })(t);
                return (
                  (function t(e) {
                    if (e.isLeaf || 0 === e.children.length) e.drawingDepth = a;
                    else {
                      var n = e.children.map(function (e) {
                          return t(e);
                        }),
                        i = Math.min.apply(null, n);
                      e.drawingDepth = i - 1;
                    }
                    return e.drawingDepth;
                  })(c),
                  (function t(i) {
                    (i.x = i.drawingDepth * e.rankSep),
                      i.isLeaf
                        ? ((i.y = 0),
                          n &&
                            ((i.y = n.y + n.height + e.nodeSep),
                            i.originNode.parent !== n.originNode.parent &&
                              (i.y += e.subTreeSep)),
                          (n = i))
                        : (i.children.forEach(function (e) {
                            t(e);
                          }),
                          (i.y = (i.leftChild.y + i.rightChild.y) / 2));
                  })(c),
                  r(c, t, e.isHorizontal),
                  t
                );
              };
            },
            function (t, e, n) {
              function i(t, e) {
                return (
                  (i = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (t, e) {
                        return (t.__proto__ = e), t;
                      }),
                  i(t, e)
                );
              }
              var s = n(1),
                o = n(11),
                r = n(4),
                a = n(0),
                c = ['LR', 'RL', 'H'],
                h = c[0],
                l = (function (t) {
                  function e() {
                    return t.apply(this, arguments) || this;
                  }
                  var n, s;
                  return (
                    (s = t),
                    ((n = e).prototype = Object.create(s.prototype)),
                    (n.prototype.constructor = n),
                    i(n, s),
                    (e.prototype.execute = function () {
                      var t = this.options,
                        e = this.rootNode;
                      t.isHorizontal = !0;
                      var n = t.indent,
                        i = void 0 === n ? 20 : n,
                        s = t.dropCap,
                        a = void 0 === s || s,
                        l = t.direction,
                        d = void 0 === l ? h : l,
                        u = t.align;
                      if (d && -1 === c.indexOf(d))
                        throw new TypeError('Invalid direction: ' + d);
                      if (d === c[0]) o(e, i, a, u);
                      else if (d === c[1]) o(e, i, a, u), e.right2left();
                      else if (d === c[2]) {
                        var p = r(e, t),
                          g = p.left,
                          f = p.right;
                        o(g, i, a, u), g.right2left(), o(f, i, a, u);
                        var m = g.getBoundingBox();
                        f.translate(m.width, 0), (e.x = f.x - e.width / 2);
                      }
                      return e;
                    }),
                    e
                  );
                })(s),
                d = {};
              t.exports = function (t, e) {
                return (e = a.assign({}, d, e)), new l(t, e).execute();
              };
            },
            function (t, e, n) {
              var i = n(0);
              t.exports = function (t, e, n, s) {
                var o = null;
                t.eachNode(function (t) {
                  !(function (t, e, n, s, o) {
                    var r = 'function' == typeof n ? n(t) : n * t.depth;
                    if (!s)
                      try {
                        if (t.id === t.parent.children[0].id)
                          return (t.x += r), void (t.y = e ? e.y : 0);
                      } catch (t) {}
                    if (((t.x += r), e)) {
                      if (
                        ((t.y = e.y + i.getHeight(e, t, o)),
                        e.parent && t.parent.id !== e.parent.id)
                      ) {
                        var a = e.parent,
                          c = a.y + i.getHeight(a, t, o);
                        t.y = c > t.y ? c : t.y;
                      }
                    } else t.y = 0;
                  })(t, o, e, n, s),
                    (o = t);
                });
              };
            },
            function (t, e, n) {
              function i(t, e) {
                return (
                  (i = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (t, e) {
                        return (t.__proto__ = e), t;
                      }),
                  i(t, e)
                );
              }
              var s = n(1),
                o = n(13),
                r = n(2),
                a = n(0),
                c = (function (t) {
                  function e() {
                    return t.apply(this, arguments) || this;
                  }
                  var n, s;
                  return (
                    (s = t),
                    ((n = e).prototype = Object.create(s.prototype)),
                    (n.prototype.constructor = n),
                    i(n, s),
                    (e.prototype.execute = function () {
                      return r(this.rootNode, this.options, o);
                    }),
                    e
                  );
                })(s),
                h = {};
              t.exports = function (t, e) {
                return (e = a.assign({}, h, e)), new c(t, e).execute();
              };
            },
            function (t, e, n) {
              var i = n(0);
              function s(t, e) {
                var n = 0;
                return (
                  t.children.length
                    ? t.children.forEach(function (t) {
                        n += s(t, e);
                      })
                    : (n = t.height),
                  (t._subTreeSep = e.getSubTreeSep(t.data)),
                  (t.totalHeight = Math.max(t.height, n) + 2 * t._subTreeSep),
                  t.totalHeight
                );
              }
              function o(t) {
                var e = t.children,
                  n = e.length;
                if (n) {
                  e.forEach(function (t) {
                    o(t);
                  });
                  var i = e[0],
                    s = e[n - 1],
                    r = s.y - i.y + s.height,
                    a = 0;
                  if (
                    (e.forEach(function (t) {
                      a += t.totalHeight;
                    }),
                    r > t.height)
                  )
                    t.y = i.y + r / 2 - t.height / 2;
                  else if (1 !== e.length || t.height > a) {
                    var c = t.y + (t.height - r) / 2 - i.y;
                    e.forEach(function (t) {
                      t.translate(0, c);
                    });
                  } else
                    t.y =
                      (i.y + i.height / 2 + s.y + s.height / 2) / 2 -
                      t.height / 2;
                }
              }
              var r = {
                getSubTreeSep: function () {
                  return 0;
                },
              };
              t.exports = function (t, e) {
                void 0 === e && (e = {}),
                  (e = i.assign({}, r, e)),
                  (t.parent = { x: 0, width: 0, height: 0, y: 0 }),
                  t.BFTraverse(function (t) {
                    t.x = t.parent.x + t.parent.width;
                  }),
                  (t.parent = null),
                  s(t, e),
                  (t.startY = 0),
                  (t.y = t.totalHeight / 2 - t.height / 2),
                  t.eachNode(function (t) {
                    var e = t.children,
                      n = e.length;
                    if (n) {
                      var i = e[0];
                      if (((i.startY = t.startY + t._subTreeSep), 1 === n))
                        i.y = t.y + t.height / 2 - i.height / 2;
                      else {
                        i.y = i.startY + i.totalHeight / 2 - i.height / 2;
                        for (var s = 1; s < n; s++) {
                          var o = e[s];
                          (o.startY = e[s - 1].startY + e[s - 1].totalHeight),
                            (o.y = o.startY + o.totalHeight / 2 - o.height / 2);
                        }
                      }
                    }
                  }),
                  o(t);
              };
            },
          ]);
        }),
        (t.exports = e());
    },
    80817: function (t) {
      function e(t, e, n) {
        return (e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0]);
      }
      t.exports = function (t) {
        const n = (function (t) {
            const n = [];
            for (let i = 0; i < t.length; i++) {
              for (
                ;
                n.length >= 2 && e(n[n.length - 2], n[n.length - 1], t[i]) <= 0;

              )
                n.pop();
              n.push(t[i]);
            }
            return n.pop(), n;
          })(t),
          i = (function (t) {
            const n = t.reverse(),
              i = [];
            for (let t = 0; t < n.length; t++) {
              for (
                ;
                i.length >= 2 && e(i[i.length - 2], i[i.length - 1], n[t]) <= 0;

              )
                i.pop();
              i.push(n[t]);
            }
            return i.pop(), i;
          })(t).concat(n);
        return i.push(t[0]), i;
      };
    },
    63652: function (t) {
      t.exports = {
        toXy: function (t, e) {
          return void 0 === e
            ? t.slice()
            : t.map(function (t) {
                return new Function(
                  'pt',
                  'return [pt' + e[0] + ',pt' + e[1] + '];',
                )(t);
              });
        },
        fromXy: function (t, e) {
          return void 0 === e
            ? t.slice()
            : t.map(function (t) {
                return new Function(
                  'pt',
                  'const o = {}; o' +
                    e[0] +
                    '= pt[0]; o' +
                    e[1] +
                    '= pt[1]; return o;',
                )(t);
              });
        },
      };
    },
    58867: function (t) {
      function e(t, e) {
        (this._cells = []),
          (this._cellSize = e),
          (this._reverseCellSize = 1 / e);
        for (let e = 0; e < t.length; e++) {
          const n = t[e],
            i = this.coordToCellNum(n[0]),
            s = this.coordToCellNum(n[1]);
          if (this._cells[i])
            this._cells[i][s]
              ? this._cells[i][s].push(n)
              : (this._cells[i][s] = [n]);
          else {
            const t = [];
            (t[s] = [n]), (this._cells[i] = t);
          }
        }
      }
      (e.prototype = {
        cellPoints: function (t, e) {
          return void 0 !== this._cells[t] && void 0 !== this._cells[t][e]
            ? this._cells[t][e]
            : [];
        },
        rangePoints: function (t) {
          const e = this.coordToCellNum(t[0]),
            n = this.coordToCellNum(t[1]),
            i = this.coordToCellNum(t[2]),
            s = this.coordToCellNum(t[3]),
            o = [];
          for (let t = e; t <= i; t++)
            for (let e = n; e <= s; e++)
              for (let n = 0; n < this.cellPoints(t, e).length; n++)
                o.push(this.cellPoints(t, e)[n]);
          return o;
        },
        removePoint: function (t) {
          const e = this.coordToCellNum(t[0]),
            n = this.coordToCellNum(t[1]),
            i = this._cells[e][n];
          let s;
          for (let e = 0; e < i.length; e++)
            if (i[e][0] === t[0] && i[e][1] === t[1]) {
              s = e;
              break;
            }
          return i.splice(s, 1), i;
        },
        trunc:
          Math.trunc ||
          function (t) {
            return t - (t % 1);
          },
        coordToCellNum: function (t) {
          return this.trunc(t * this._reverseCellSize);
        },
        extendBbox: function (t, e) {
          return [
            t[0] - e * this._cellSize,
            t[1] - e * this._cellSize,
            t[2] + e * this._cellSize,
            t[3] + e * this._cellSize,
          ];
        },
      }),
        (t.exports = function (t, n) {
          return new e(t, n);
        });
    },
    1344: function (t, e, n) {
      'use strict';
      const i = n(77444),
        s = n(58867),
        o = n(63652),
        r = n(80817);
      function a(t, e) {
        return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
      }
      function c(t, e, n) {
        const i = [e[0] - t[0], e[1] - t[1]],
          s = [n[0] - t[0], n[1] - t[1]],
          o = a(t, e),
          r = a(t, n);
        return (i[0] * s[0] + i[1] * s[1]) / Math.sqrt(o * r);
      }
      function h(t, e) {
        for (let n = 0; n < e.length - 1; n++) {
          const s = [e[n], e[n + 1]];
          if (
            !(
              (t[0][0] === s[0][0] && t[0][1] === s[0][1]) ||
              (t[0][0] === s[1][0] && t[0][1] === s[1][1])
            ) &&
            i(t, s)
          )
            return !0;
        }
        return !1;
      }
      function l(t) {
        return [
          Math.min(t[0][0], t[1][0]),
          Math.min(t[0][1], t[1][1]),
          Math.max(t[0][0], t[1][0]),
          Math.max(t[0][1], t[1][1]),
        ];
      }
      function d(t, e, n) {
        let i,
          s,
          o = null,
          r = p,
          a = p;
        for (let l = 0; l < e.length; l++)
          (i = c(t[0], t[1], e[l])),
            (s = c(t[1], t[0], e[l])),
            i > r &&
              s > a &&
              !h([t[0], e[l]], n) &&
              !h([t[1], e[l]], n) &&
              ((r = i), (a = s), (o = e[l]));
        return o;
      }
      function u(t, e, n, i, s) {
        let o = !1;
        for (let r = 0; r < t.length - 1; r++) {
          const c = [t[r], t[r + 1]],
            h = c[0][0] + ',' + c[0][1] + ',' + c[1][0] + ',' + c[1][1];
          if (a(c[0], c[1]) < e || s.has(h)) continue;
          let u,
            p,
            g,
            f = 0,
            m = l(c);
          do {
            (m = i.extendBbox(m, f)),
              (u = m[2] - m[0]),
              (p = m[3] - m[1]),
              (g = d(c, i.rangePoints(m), t)),
              f++;
          } while (null === g && (n[0] > u || n[1] > p));
          u >= n[0] && p >= n[1] && s.add(h),
            null !== g && (t.splice(r + 1, 0, g), i.removePoint(g), (o = !0));
        }
        return o ? u(t, e, n, i, s) : t;
      }
      const p = Math.cos(90 / (180 / Math.PI)),
        g = 0.6;
      t.exports = function (t, e, n) {
        let i = e || 20;
        const a = (function (t) {
          const e = [t[0]];
          let n = t[0];
          for (let i = 1; i < t.length; i++) {
            const s = t[i];
            (n[0] === s[0] && n[1] === s[1]) || e.push(s), (n = s);
          }
          return e;
        })(
          (function (t) {
            return t.sort(function (t, e) {
              return t[0] - e[0] || t[1] - e[1];
            });
          })(o.toXy(t, n)),
        );
        if (a.length < 4) {
          const t = a.concat([a[0]]);
          return n ? o.fromXy(t, n) : t;
        }
        const c = (function (t) {
            let e = 1 / 0,
              n = 1 / 0,
              i = -1 / 0,
              s = -1 / 0;
            for (let o = t.length - 1; o >= 0; o--)
              t[o][0] < e && (e = t[o][0]),
                t[o][1] < n && (n = t[o][1]),
                t[o][0] > i && (i = t[o][0]),
                t[o][1] > s && (s = t[o][1]);
            return [i - e, s - n];
          })(a),
          h = [c[0] * g, c[1] * g],
          l = r(a),
          d = a.filter(function (t) {
            return l.indexOf(t) < 0;
          }),
          p = Math.ceil(1 / (a.length / (c[0] * c[1]))),
          f = u(l, Math.pow(i, 2), h, s(d, p), new Set());
        return n ? o.fromXy(f, n) : f;
      };
    },
    77444: function (t) {
      function e(t, e, n, i, s, o) {
        const r = (o - e) * (n - t) - (i - e) * (s - t);
        return r > 0 || !(r < 0);
      }
      t.exports = function (t, n) {
        const i = t[0][0],
          s = t[0][1],
          o = t[1][0],
          r = t[1][1],
          a = n[0][0],
          c = n[0][1],
          h = n[1][0],
          l = n[1][1];
        return (
          e(i, s, a, c, h, l) !== e(o, r, a, c, h, l) &&
          e(i, s, o, r, a, c) !== e(i, s, o, r, h, l)
        );
      };
    },
    27361: function (t, e, n) {
      var i = n(97786);
      t.exports = function (t, e, n) {
        var s = null == t ? void 0 : i(t, e);
        return void 0 === s ? n : s;
      };
    },
    47037: function (t, e, n) {
      var i = n(44239),
        s = n(1469),
        o = n(37005);
      t.exports = function (t) {
        return (
          'string' == typeof t || (!s(t) && o(t) && '[object String]' == i(t))
        );
      };
    },
    66604: function (t, e, n) {
      var i = n(89465),
        s = n(47816),
        o = n(67206);
      t.exports = function (t, e) {
        var n = {};
        return (
          (e = o(e, 3)),
          s(t, function (t, s, o) {
            i(n, s, e(t, s, o));
          }),
          n
        );
      };
    },
    12444: function (t) {
      (t.exports = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    72004: function (t, e, n) {
      var i = n(51883);
      function s(t, e) {
        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(t, i(s.key), s);
        }
      }
      (t.exports = function (t, e, n) {
        return (
          e && s(t.prototype, e),
          n && s(t, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          t
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  },
]);
//# sourceMappingURL=74.2ff514e9.async.js.map
