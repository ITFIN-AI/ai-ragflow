(self.webpackChunk = self.webpackChunk || []).push([
  [3478],
  {
    72137: function (t, e, r) {
      'use strict';
      r.d(e, {
        k: function () {
          return u;
        },
      });
      var n = r(90494);
      function o(t, e, r, n) {
        for (; t.length; ) {
          const o = t.shift();
          if (r(o)) return !0;
          e.add(o.id),
            n(o.id).forEach((r) => {
              e.has(r.id) || (e.add(r.id), t.push(r));
            });
        }
        return !1;
      }
      function i(t, e, r, n) {
        if (r(t)) return !0;
        e.add(t.id);
        for (const o of n(t.id)) if (!e.has(o.id) && i(o, e, r, n)) return !0;
        return !1;
      }
      const s = () => !0;
      class a {
        graph;
        nodeFilter;
        edgeFilter;
        cacheEnabled;
        inEdgesMap = new Map();
        outEdgesMap = new Map();
        bothEdgesMap = new Map();
        allNodesMap = new Map();
        allEdgesMap = new Map();
        constructor(t) {
          this.graph = t.graph;
          const e = t.nodeFilter || s,
            r = t.edgeFilter || s;
          (this.nodeFilter = e),
            (this.edgeFilter = (t) => {
              const { source: n, target: o } = this.graph.getEdgeDetail(t.id);
              return !(!e(n) || !e(o)) && r(t, n, o);
            }),
            'auto' === t.cache
              ? ((this.cacheEnabled = !0), this.startAutoCache())
              : 'manual' === t.cache
                ? (this.cacheEnabled = !0)
                : (this.cacheEnabled = !1);
        }
        clearCache = () => {
          this.inEdgesMap.clear(),
            this.outEdgesMap.clear(),
            this.bothEdgesMap.clear(),
            this.allNodesMap.clear(),
            this.allEdgesMap.clear();
        };
        refreshCache = () => {
          this.clearCache(),
            this.updateCache(this.graph.getAllNodes().map((t) => t.id));
        };
        updateCache = (t) => {
          const e = new Set();
          t.forEach((t) => {
            const r = this.bothEdgesMap.get(t);
            if ((r && r.forEach((t) => e.add(t.id)), this.hasNode(t))) {
              const r = this.graph
                  .getRelatedEdges(t, 'in')
                  .filter(this.edgeFilter),
                n = this.graph
                  .getRelatedEdges(t, 'out')
                  .filter(this.edgeFilter),
                o = Array.from(new Set([...r, ...n]));
              o.forEach((t) => e.add(t.id)),
                this.inEdgesMap.set(t, r),
                this.outEdgesMap.set(t, n),
                this.bothEdgesMap.set(t, o),
                this.allNodesMap.set(t, this.graph.getNode(t));
            } else
              this.inEdgesMap.delete(t),
                this.outEdgesMap.delete(t),
                this.bothEdgesMap.delete(t),
                this.allNodesMap.delete(t);
          }),
            e.forEach((t) => {
              this.hasEdge(t)
                ? this.allEdgesMap.set(t, this.graph.getEdge(t))
                : this.allEdgesMap.delete(t);
            });
        };
        startAutoCache() {
          this.refreshCache(),
            this.graph.on('changed', this.handleGraphChanged);
        }
        stopAutoCache() {
          this.graph.off('changed', this.handleGraphChanged);
        }
        handleGraphChanged = (t) => {
          const e = new Set();
          t.changes.forEach((r) => {
            switch (r.type) {
              case 'NodeAdded':
              case 'NodeRemoved':
                e.add(r.value.id);
                break;
              case 'NodeDataUpdated':
                e.add(r.id);
                break;
              case 'EdgeAdded':
              case 'EdgeRemoved':
                e.add(r.value.source), e.add(r.value.target);
                break;
              case 'EdgeUpdated':
                ('source' !== r.propertyName && 'target' !== r.propertyName) ||
                  (e.add(r.oldValue), e.add(r.newValue));
                break;
              case 'EdgeDataUpdated':
                if (t.graph.hasEdge(r.id)) {
                  const n = t.graph.getEdge(r.id);
                  e.add(n.source), e.add(n.target);
                }
            }
          }),
            this.updateCache(e);
        };
        checkNodeExistence(t) {
          this.getNode(t);
        }
        hasNode(t) {
          if (!this.graph.hasNode(t)) return !1;
          const e = this.graph.getNode(t);
          return this.nodeFilter(e);
        }
        areNeighbors(t, e) {
          return (
            this.checkNodeExistence(t),
            this.getNeighbors(e).some((e) => e.id === t)
          );
        }
        getNode(t) {
          const e = this.graph.getNode(t);
          if (!this.nodeFilter(e))
            throw new Error('Node not found for id: ' + t);
          return e;
        }
        getRelatedEdges(t, e) {
          if ((this.checkNodeExistence(t), this.cacheEnabled))
            return 'in' === e
              ? this.inEdgesMap.get(t)
              : 'out' === e
                ? this.outEdgesMap.get(t)
                : this.bothEdgesMap.get(t);
          return this.graph.getRelatedEdges(t, e).filter(this.edgeFilter);
        }
        getDegree(t, e) {
          return this.getRelatedEdges(t, e).length;
        }
        getSuccessors(t) {
          const e = this.getRelatedEdges(t, 'out').map((t) =>
            this.getNode(t.target),
          );
          return Array.from(new Set(e));
        }
        getPredecessors(t) {
          const e = this.getRelatedEdges(t, 'in').map((t) =>
            this.getNode(t.source),
          );
          return Array.from(new Set(e));
        }
        getNeighbors(t) {
          const e = this.getPredecessors(t),
            r = this.getSuccessors(t);
          return Array.from(new Set([...e, ...r]));
        }
        hasEdge(t) {
          if (!this.graph.hasEdge(t)) return !1;
          const e = this.graph.getEdge(t);
          return this.edgeFilter(e);
        }
        getEdge(t) {
          const e = this.graph.getEdge(t);
          if (!this.edgeFilter(e))
            throw new Error('Edge not found for id: ' + t);
          return e;
        }
        getEdgeDetail(t) {
          const e = this.getEdge(t);
          return {
            edge: e,
            source: this.getNode(e.source),
            target: this.getNode(e.target),
          };
        }
        hasTreeStructure(t) {
          return this.graph.hasTreeStructure(t);
        }
        getRoots(t) {
          return this.graph.getRoots(t).filter(this.nodeFilter);
        }
        getChildren(t, e) {
          return (
            this.checkNodeExistence(t),
            this.graph.getChildren(t, e).filter(this.nodeFilter)
          );
        }
        getParent(t, e) {
          this.checkNodeExistence(t);
          const r = this.graph.getParent(t, e);
          return r && this.nodeFilter(r) ? r : null;
        }
        getAllNodes() {
          return this.cacheEnabled
            ? Array.from(this.allNodesMap.values())
            : this.graph.getAllNodes().filter(this.nodeFilter);
        }
        getAllEdges() {
          return this.cacheEnabled
            ? Array.from(this.allEdgesMap.values())
            : this.graph.getAllEdges().filter(this.edgeFilter);
        }
        bfs(t, e, r = 'out') {
          const n = {
            in: this.getPredecessors.bind(this),
            out: this.getSuccessors.bind(this),
            both: this.getNeighbors.bind(this),
          }[r];
          o([this.getNode(t)], new Set(), e, n);
        }
        dfs(t, e, r = 'out') {
          const n = {
            in: this.getPredecessors.bind(this),
            out: this.getSuccessors.bind(this),
            both: this.getNeighbors.bind(this),
          }[r];
          i(this.getNode(t), new Set(), e, n);
        }
      }
      class u extends n.Z {
        nodeMap = new Map();
        edgeMap = new Map();
        inEdgesMap = new Map();
        outEdgesMap = new Map();
        bothEdgesMap = new Map();
        treeIndices = new Map();
        changes = [];
        batchCount = 0;
        onChanged = () => {};
        constructor(t) {
          super(),
            t &&
              (t.nodes && this.addNodes(t.nodes),
              t.edges && this.addEdges(t.edges),
              t.tree && this.addTree(t.tree),
              t.onChanged && (this.onChanged = t.onChanged));
        }
        batch = (t) => {
          (this.batchCount += 1),
            t(),
            (this.batchCount -= 1),
            this.batchCount || this.commit();
        };
        commit() {
          const t = this.changes;
          this.changes = [];
          const e = { graph: this, changes: t };
          this.emit('changed', e), this.onChanged(e);
        }
        reduceChanges(t) {
          let e = [];
          return (
            t.forEach((t) => {
              switch (t.type) {
                case 'NodeRemoved': {
                  let r = !1;
                  (e = e.filter((e) => {
                    if ('NodeAdded' === e.type) {
                      const n = e.value.id === t.value.id;
                      return n && (r = !0), !n;
                    }
                    return 'NodeDataUpdated' === e.type
                      ? e.id !== t.value.id
                      : 'TreeStructureChanged' !== e.type ||
                          e.nodeId !== t.value.id;
                  })),
                    r || e.push(t);
                  break;
                }
                case 'EdgeRemoved': {
                  let r = !1;
                  (e = e.filter((e) => {
                    if ('EdgeAdded' === e.type) {
                      const n = e.value.id === t.value.id;
                      return n && (r = !0), !n;
                    }
                    return (
                      ('EdgeDataUpdated' !== e.type &&
                        'EdgeUpdated' !== e.type) ||
                      e.id !== t.value.id
                    );
                  })),
                    r || e.push(t);
                  break;
                }
                case 'NodeDataUpdated':
                case 'EdgeDataUpdated':
                case 'EdgeUpdated': {
                  const r = e.findIndex(
                      (e) =>
                        e.type === t.type &&
                        e.id === t.id &&
                        (void 0 === t.propertyName ||
                          e.propertyName === t.propertyName),
                    ),
                    n = e[r];
                  n
                    ? void 0 !== t.propertyName
                      ? (n.newValue = t.newValue)
                      : (e.splice(r, 1), e.push(t))
                    : e.push(t);
                  break;
                }
                case 'TreeStructureDetached':
                  (e = e.filter((e) =>
                    'TreeStructureAttached' === e.type
                      ? e.treeKey !== t.treeKey
                      : 'TreeStructureChanged' !== e.type ||
                        e.treeKey !== t.treeKey,
                  )),
                    e.push(t);
                  break;
                case 'TreeStructureChanged': {
                  const r = e.find(
                    (e) =>
                      'TreeStructureChanged' === e.type &&
                      e.treeKey === t.treeKey &&
                      e.nodeId === t.nodeId,
                  );
                  r ? (r.newParentId = t.newParentId) : e.push(t);
                  break;
                }
                default:
                  e.push(t);
              }
            }),
            e
          );
        }
        checkNodeExistence(t) {
          this.getNode(t);
        }
        hasNode(t) {
          return this.nodeMap.has(t);
        }
        areNeighbors(t, e) {
          return this.getNeighbors(e).some((e) => e.id === t);
        }
        getNode(t) {
          const e = this.nodeMap.get(t);
          if (!e) throw new Error('Node not found for id: ' + t);
          return e;
        }
        getRelatedEdges(t, e) {
          if ((this.checkNodeExistence(t), 'in' === e)) {
            const e = this.inEdgesMap.get(t);
            return Array.from(e);
          }
          if ('out' === e) {
            const e = this.outEdgesMap.get(t);
            return Array.from(e);
          }
          {
            const e = this.bothEdgesMap.get(t);
            return Array.from(e);
          }
        }
        getDegree(t, e) {
          return this.getRelatedEdges(t, e).length;
        }
        getSuccessors(t) {
          const e = this.getRelatedEdges(t, 'out').map((t) =>
            this.getNode(t.target),
          );
          return Array.from(new Set(e));
        }
        getPredecessors(t) {
          const e = this.getRelatedEdges(t, 'in').map((t) =>
            this.getNode(t.source),
          );
          return Array.from(new Set(e));
        }
        getNeighbors(t) {
          const e = this.getPredecessors(t),
            r = this.getSuccessors(t);
          return Array.from(new Set([...e, ...r]));
        }
        doAddNode(t) {
          if (this.hasNode(t.id))
            throw new Error('Node already exists: ' + t.id);
          this.nodeMap.set(t.id, t),
            this.inEdgesMap.set(t.id, new Set()),
            this.outEdgesMap.set(t.id, new Set()),
            this.bothEdgesMap.set(t.id, new Set()),
            this.treeIndices.forEach((e) => {
              e.childrenMap.set(t.id, new Set());
            }),
            this.changes.push({ type: 'NodeAdded', value: t });
        }
        addNodes(t) {
          this.batch(() => {
            for (const e of t) this.doAddNode(e);
          });
        }
        addNode(t) {
          this.addNodes([t]);
        }
        doRemoveNode(t) {
          const e = this.getNode(t),
            r = this.bothEdgesMap.get(t);
          r?.forEach((t) => this.doRemoveEdge(t.id)),
            this.nodeMap.delete(t),
            this.treeIndices.forEach((r) => {
              r.childrenMap.get(t)?.forEach((t) => {
                r.parentMap.delete(t.id);
              });
              const n = r.parentMap.get(t);
              n && r.childrenMap.get(n.id)?.delete(e),
                r.parentMap.delete(t),
                r.childrenMap.delete(t);
            }),
            this.bothEdgesMap.delete(t),
            this.inEdgesMap.delete(t),
            this.outEdgesMap.delete(t),
            this.changes.push({ type: 'NodeRemoved', value: e });
        }
        removeNodes(t) {
          this.batch(() => {
            t.forEach((t) => this.doRemoveNode(t));
          });
        }
        removeNode(t) {
          this.removeNodes([t]);
        }
        updateNodeDataProperty(t, e, r) {
          const n = this.getNode(t);
          this.batch(() => {
            const o = n.data[e],
              i = r;
            (n.data[e] = i),
              this.changes.push({
                type: 'NodeDataUpdated',
                id: t,
                propertyName: e,
                oldValue: o,
                newValue: i,
              });
          });
        }
        mergeNodeData(t, e) {
          this.batch(() => {
            Object.entries(e).forEach(([e, r]) => {
              this.updateNodeDataProperty(t, e, r);
            });
          });
        }
        updateNodeData(...t) {
          const e = t[0],
            r = this.getNode(e);
          if ('string' == typeof t[1])
            return void this.updateNodeDataProperty(e, t[1], t[2]);
          let n;
          if ('function' == typeof t[1]) {
            const e = t[1];
            n = e(r.data);
          } else 'object' == typeof t[1] && (n = t[1]);
          this.batch(() => {
            const t = r.data,
              o = n;
            (r.data = n),
              this.changes.push({
                type: 'NodeDataUpdated',
                id: e,
                oldValue: t,
                newValue: o,
              });
          });
        }
        checkEdgeExistence(t) {
          if (!this.hasEdge(t)) throw new Error('Edge not found for id: ' + t);
        }
        hasEdge(t) {
          return this.edgeMap.has(t);
        }
        getEdge(t) {
          return this.checkEdgeExistence(t), this.edgeMap.get(t);
        }
        getEdgeDetail(t) {
          const e = this.getEdge(t);
          return {
            edge: e,
            source: this.getNode(e.source),
            target: this.getNode(e.target),
          };
        }
        doAddEdge(t) {
          if (this.hasEdge(t.id))
            throw new Error('Edge already exists: ' + t.id);
          this.checkNodeExistence(t.source),
            this.checkNodeExistence(t.target),
            this.edgeMap.set(t.id, t);
          const e = this.inEdgesMap.get(t.target),
            r = this.outEdgesMap.get(t.source),
            n = this.bothEdgesMap.get(t.source),
            o = this.bothEdgesMap.get(t.target);
          e.add(t),
            r.add(t),
            n.add(t),
            o.add(t),
            this.changes.push({ type: 'EdgeAdded', value: t });
        }
        addEdges(t) {
          this.batch(() => {
            for (const e of t) this.doAddEdge(e);
          });
        }
        addEdge(t) {
          this.addEdges([t]);
        }
        doRemoveEdge(t) {
          const e = this.getEdge(t),
            r = this.outEdgesMap.get(e.source),
            n = this.inEdgesMap.get(e.target),
            o = this.bothEdgesMap.get(e.source),
            i = this.bothEdgesMap.get(e.target);
          r.delete(e),
            n.delete(e),
            o.delete(e),
            i.delete(e),
            this.edgeMap.delete(t),
            this.changes.push({ type: 'EdgeRemoved', value: e });
        }
        removeEdges(t) {
          this.batch(() => {
            t.forEach((t) => this.doRemoveEdge(t));
          });
        }
        removeEdge(t) {
          this.removeEdges([t]);
        }
        updateEdgeSource(t, e) {
          const r = this.getEdge(t);
          this.checkNodeExistence(e);
          const n = r.source,
            o = e;
          this.outEdgesMap.get(n).delete(r),
            this.bothEdgesMap.get(n).delete(r),
            this.outEdgesMap.get(o).add(r),
            this.bothEdgesMap.get(o).add(r),
            (r.source = e),
            this.batch(() => {
              this.changes.push({
                type: 'EdgeUpdated',
                id: t,
                propertyName: 'source',
                oldValue: n,
                newValue: o,
              });
            });
        }
        updateEdgeTarget(t, e) {
          const r = this.getEdge(t);
          this.checkNodeExistence(e);
          const n = r.target,
            o = e;
          this.inEdgesMap.get(n).delete(r),
            this.bothEdgesMap.get(n).delete(r),
            this.inEdgesMap.get(o).add(r),
            this.bothEdgesMap.get(o).add(r),
            (r.target = e),
            this.batch(() => {
              this.changes.push({
                type: 'EdgeUpdated',
                id: t,
                propertyName: 'target',
                oldValue: n,
                newValue: o,
              });
            });
        }
        updateEdgeDataProperty(t, e, r) {
          const n = this.getEdge(t);
          this.batch(() => {
            const o = n.data[e],
              i = r;
            (n.data[e] = i),
              this.changes.push({
                type: 'EdgeDataUpdated',
                id: t,
                propertyName: e,
                oldValue: o,
                newValue: i,
              });
          });
        }
        updateEdgeData(...t) {
          const e = t[0],
            r = this.getEdge(e);
          if ('string' == typeof t[1])
            return void this.updateEdgeDataProperty(e, t[1], t[2]);
          let n;
          if ('function' == typeof t[1]) {
            const e = t[1];
            n = e(r.data);
          } else 'object' == typeof t[1] && (n = t[1]);
          this.batch(() => {
            const t = r.data,
              o = n;
            (r.data = n),
              this.changes.push({
                type: 'EdgeDataUpdated',
                id: e,
                oldValue: t,
                newValue: o,
              });
          });
        }
        mergeEdgeData(t, e) {
          this.batch(() => {
            Object.entries(e).forEach(([e, r]) => {
              this.updateEdgeDataProperty(t, e, r);
            });
          });
        }
        checkTreeExistence(t) {
          if (!this.hasTreeStructure(t))
            throw new Error('Tree structure not found for treeKey: ' + t);
        }
        hasTreeStructure(t) {
          return this.treeIndices.has(t);
        }
        attachTreeStructure(t) {
          this.treeIndices.has(t) ||
            (this.treeIndices.set(t, {
              parentMap: new Map(),
              childrenMap: new Map(),
            }),
            this.batch(() => {
              this.changes.push({ type: 'TreeStructureAttached', treeKey: t });
            }));
        }
        detachTreeStructure(t) {
          this.checkTreeExistence(t),
            this.treeIndices.delete(t),
            this.batch(() => {
              this.changes.push({ type: 'TreeStructureDetached', treeKey: t });
            });
        }
        addTree(t, e) {
          this.batch(() => {
            this.attachTreeStructure(e);
            const r = [],
              n = Array.isArray(t) ? t : [t];
            for (; n.length; ) {
              const t = n.shift();
              r.push(t), t.children && n.push(...t.children);
            }
            this.addNodes(r),
              r.forEach((t) => {
                t.children?.forEach((r) => {
                  this.setParent(r.id, t.id, e);
                });
              });
          });
        }
        getRoots(t) {
          return (
            this.checkTreeExistence(t),
            this.getAllNodes().filter((e) => !this.getParent(e.id, t))
          );
        }
        getChildren(t, e) {
          this.checkNodeExistence(t), this.checkTreeExistence(e);
          const r = this.treeIndices.get(e).childrenMap.get(t);
          return Array.from(r || []);
        }
        getParent(t, e) {
          this.checkNodeExistence(t), this.checkTreeExistence(e);
          return this.treeIndices.get(e).parentMap.get(t) || null;
        }
        getAncestors(t, e) {
          const r = [];
          let n,
            o = this.getNode(t);
          for (; (n = this.getParent(o.id, e)); ) r.push(n), (o = n);
          return r;
        }
        setParent(t, e, r) {
          this.checkTreeExistence(r);
          const n = this.treeIndices.get(r),
            o = this.getNode(t),
            i = n.parentMap.get(t);
          if (i?.id === e) return;
          if (void 0 === e)
            return (
              i && n.childrenMap.get(i.id)?.delete(o),
              void n.parentMap.delete(t)
            );
          const s = this.getNode(e);
          n.parentMap.set(t, s), i && n.childrenMap.get(i.id)?.delete(o);
          let a = n.childrenMap.get(s.id);
          a || ((a = new Set()), n.childrenMap.set(s.id, a)),
            a.add(o),
            this.batch(() => {
              this.changes.push({
                type: 'TreeStructureChanged',
                treeKey: r,
                nodeId: t,
                oldParentId: i?.id,
                newParentId: s.id,
              });
            });
        }
        dfsTree(t, e, r) {
          return i(this.getNode(t), new Set(), e, (t) =>
            this.getChildren(t, r),
          );
        }
        bfsTree(t, e, r) {
          return o([this.getNode(t)], new Set(), e, (t) =>
            this.getChildren(t, r),
          );
        }
        getAllNodes() {
          return Array.from(this.nodeMap.values());
        }
        getAllEdges() {
          return Array.from(this.edgeMap.values());
        }
        bfs(t, e, r = 'out') {
          const n = {
            in: this.getPredecessors.bind(this),
            out: this.getSuccessors.bind(this),
            both: this.getNeighbors.bind(this),
          }[r];
          return o([this.getNode(t)], new Set(), e, n);
        }
        dfs(t, e, r = 'out') {
          const n = {
            in: this.getPredecessors.bind(this),
            out: this.getSuccessors.bind(this),
            both: this.getNeighbors.bind(this),
          }[r];
          return i(this.getNode(t), new Set(), e, n);
        }
        clone() {
          const t = this.getAllNodes().map((t) => ({
              ...t,
              data: { ...t.data },
            })),
            e = this.getAllEdges().map((t) => ({ ...t, data: { ...t.data } })),
            r = new u({ nodes: t, edges: e });
          return (
            this.treeIndices.forEach(({ parentMap: t, childrenMap: e }, n) => {
              const o = new Map();
              t.forEach((t, e) => {
                o.set(e, r.getNode(t.id));
              });
              const i = new Map();
              e.forEach((t, e) => {
                i.set(e, new Set(Array.from(t).map((t) => r.getNode(t.id))));
              }),
                r.treeIndices.set(n, { parentMap: o, childrenMap: i });
            }),
            r
          );
        }
        toJSON() {
          return JSON.stringify({
            nodes: this.getAllNodes(),
            edges: this.getAllEdges(),
          });
        }
        createView(t) {
          return new a({ graph: this, ...t });
        }
      }
    },
    45978: function (t, e, r) {
      'use strict';
      r.d(e, {
        b: function () {
          return he;
        },
      });
      var n = r(97582),
        o = r(72137),
        i = r(25897),
        s = r(95147);
      const a = (t, e) => {
          if ('next' !== t && 'prev' !== t) return e;
        },
        u = (t) => {
          (t.prev.next = t.next),
            (t.next.prev = t.prev),
            delete t.next,
            delete t.prev;
        };
      class d {
        constructor() {
          const t = {};
          (t.prev = t), (t.next = t.prev), (this.shortcut = t);
        }
        dequeue() {
          const t = this.shortcut,
            e = t.prev;
          if (e && e !== t) return u(e), e;
        }
        enqueue(t) {
          const e = this.shortcut;
          t.prev && t.next && u(t),
            (t.next = e.next),
            (e.next.prev = t),
            (e.next = t),
            (t.prev = e);
        }
        toString() {
          const t = [],
            e = this.shortcut;
          let r = e.prev;
          for (; r !== e; )
            t.push(JSON.stringify(r, a)), (r = null == r ? void 0 : r.prev);
          return `[${t.join(', ')}]`;
        }
      }
      class h extends d {}
      const c = () => 1,
        l = (t, e, r) => {
          let n = [];
          const o = e[e.length - 1],
            i = e[0];
          let s;
          for (; t.getAllNodes().length; ) {
            for (; (s = i.dequeue()); ) f(t, e, r, s);
            for (; (s = o.dequeue()); ) f(t, e, r, s);
            if (t.getAllNodes().length)
              for (let o = e.length - 2; o > 0; --o)
                if (((s = e[o].dequeue()), s)) {
                  n = n.concat(f(t, e, r, s, !0));
                  break;
                }
          }
          return n;
        },
        f = (t, e, r, n, o) => {
          var i, s;
          const a = [];
          return (
            t.hasNode(n.v) &&
              (null === (i = t.getRelatedEdges(n.v, 'in')) ||
                void 0 === i ||
                i.forEach((n) => {
                  const i = n.data.weight,
                    s = t.getNode(n.source);
                  o && a.push({ v: n.source, w: n.target, in: 0, out: 0 }),
                    void 0 === s.data.out && (s.data.out = 0),
                    (s.data.out -= i),
                    v(e, r, Object.assign({ v: s.id }, s.data));
                }),
              null === (s = t.getRelatedEdges(n.v, 'out')) ||
                void 0 === s ||
                s.forEach((n) => {
                  const o = n.data.weight,
                    i = n.target,
                    s = t.getNode(i);
                  void 0 === s.data.in && (s.data.in = 0),
                    (s.data.in -= o),
                    v(e, r, Object.assign({ v: s.id }, s.data));
                }),
              t.removeNode(n.v)),
            o ? a : void 0
          );
        },
        g = (t, e) => {
          const r = new o.k();
          let n = 0,
            i = 0;
          t.getAllNodes().forEach((t) => {
            r.addNode({ id: t.id, data: { v: t.id, in: 0, out: 0 } });
          }),
            t.getAllEdges().forEach((t) => {
              const o = r
                  .getRelatedEdges(t.source, 'out')
                  .find((e) => e.target === t.target),
                s = (null == e ? void 0 : e(t)) || 1;
              o
                ? r.updateEdgeData(
                    null == o ? void 0 : o.id,
                    Object.assign(Object.assign({}, o.data), {
                      weight: o.data.weight + s,
                    }),
                  )
                : r.addEdge({
                    id: t.id,
                    source: t.source,
                    target: t.target,
                    data: { weight: s },
                  }),
                (i = Math.max(i, (r.getNode(t.source).data.out += s))),
                (n = Math.max(n, (r.getNode(t.target).data.in += s)));
            });
          const s = [],
            a = i + n + 3;
          for (let t = 0; t < a; t++) s.push(new h());
          const u = n + 1;
          return (
            r.getAllNodes().forEach((t) => {
              v(s, u, Object.assign({ v: t.id }, r.getNode(t.id).data));
            }),
            { buckets: s, zeroIdx: u, graph: r }
          );
        },
        v = (t, e, r) => {
          r.out
            ? r.in
              ? t[r.out - r.in + e].enqueue(r)
              : t[t.length - 1].enqueue(r)
            : t[0].enqueue(r);
        },
        p = (t, e) => {
          const r =
            'greedy' === e
              ? ((t, e) => {
                  var r;
                  if (t.getAllNodes().length <= 1) return [];
                  const n = g(t, e || c);
                  return null ===
                    (r = l(n.graph, n.buckets, n.zeroIdx).map((e) =>
                      t
                        .getRelatedEdges(e.v, 'out')
                        .filter(({ target: t }) => t === e.w),
                    )) || void 0 === r
                    ? void 0
                    : r.flat();
                })(t, (t) => t.data.weight || 1)
              : m(t);
          null == r ||
            r.forEach((e) => {
              const r = e.data;
              t.removeEdge(e.id),
                (r.forwardName = e.data.name),
                (r.reversed = !0),
                t.addEdge({
                  id: e.id,
                  source: e.target,
                  target: e.source,
                  data: Object.assign({}, r),
                });
            });
        },
        m = (t) => {
          const e = [],
            r = {},
            n = {},
            o = (i) => {
              n[i] ||
                ((n[i] = !0),
                (r[i] = !0),
                t.getRelatedEdges(i, 'out').forEach((t) => {
                  r[t.target] ? e.push(t) : o(t.target);
                }),
                delete r[i]);
            };
          return t.getAllNodes().forEach((t) => o(t.id)), e;
        },
        y = (t, e, r, n) => {
          let o;
          do {
            o = `${n}${Math.random()}`;
          } while (t.hasNode(o));
          return (r.dummy = e), t.addNode({ id: o, data: r }), o;
        },
        w = (t) => {
          const e = new o.k();
          return (
            t.getAllNodes().forEach((r) => {
              t.getChildren(r.id).length || e.addNode(Object.assign({}, r));
            }),
            t.getAllEdges().forEach((t) => {
              e.addEdge(t);
            }),
            e
          );
        },
        x = (t, e) =>
          null == t ? void 0 : t.reduce((t, r, n) => ((t[r] = e[n]), t), {}),
        b = (t, e) => {
          const r = Number(t.x),
            n = Number(t.y),
            o = Number(e.x) - r,
            i = Number(e.y) - n;
          let s,
            a,
            u = Number(t.width) / 2,
            d = Number(t.height) / 2;
          return o || i
            ? (Math.abs(i) * u > Math.abs(o) * d
                ? (i < 0 && (d = -d), (s = (d * o) / i), (a = d))
                : (o < 0 && (u = -u), (s = u), (a = (u * i) / o)),
              { x: r + s, y: n + a })
            : { x: 0, y: 0 };
        },
        E = (t) => {
          const e = [],
            r = M(t) + 1;
          for (let t = 0; t < r; t++) e.push([]);
          t.getAllNodes().forEach((t) => {
            const r = t.data.rank;
            void 0 !== r && e[r] && e[r].push(t.id);
          });
          for (let n = 0; n < r; n++)
            e[n] = e[n].sort((e, r) => {
              return (
                (n = t.getNode(e).data.order),
                (o = t.getNode(r).data.order),
                Number(n) - Number(o)
              );
              var n, o;
            });
          return e;
        },
        N = (t, e, r, n) => {
          const o = { width: 0, height: 0 };
          return (
            (0, i.Z)(r) && (0, i.Z)(n) && ((o.rank = r), (o.order = n)),
            y(t, 'border', o, e)
          );
        },
        M = (t) => {
          let e;
          return (
            t.getAllNodes().forEach((t) => {
              const r = t.data.rank;
              void 0 !== r && (void 0 === e || r > e) && (e = r);
            }),
            e || (e = 0),
            e
          );
        },
        k = (t, e) => t.reduce((t, r) => (e(t) > e(r) ? r : t)),
        _ = (t, e, r, n, o, i) => {
          n.includes(e.id) ||
            (n.push(e.id),
            r || i.push(e.id),
            o(e.id).forEach((e) => _(t, e, r, n, o, i)),
            r && i.push(e.id));
        },
        S = (t, e, r, n) => {
          const o = Array.isArray(e) ? e : [e],
            i = (e) => (n ? t.getSuccessors(e) : t.getNeighbors(e)),
            s = [],
            a = [];
          return (
            o.forEach((e) => {
              if (!t.hasNode(e.id))
                throw new Error(`Graph does not have node: ${e}`);
              _(t, e, 'post' === r, a, i, s);
            }),
            s
          );
        },
        A = (t, e, r, n, o, i) => {
          const s = { rank: i, borderType: e, width: 0, height: 0 },
            a = o.data[e][i - 1],
            u = y(t, 'border', s, r);
          (o.data[e][i] = u),
            t.setParent(u, n),
            a &&
              t.addEdge({
                id: `e${Math.random()}`,
                source: a,
                target: u,
                data: { weight: 1 },
              });
        },
        O = (t) => {
          t.getAllNodes().forEach((t) => {
            R(t);
          }),
            t.getAllEdges().forEach((t) => {
              R(t);
            });
        },
        R = (t) => {
          const e = t.data.width;
          (t.data.width = t.data.height), (t.data.height = e);
        },
        z = (t) => {
          t.getAllNodes().forEach((t) => {
            I(t.data);
          }),
            t.getAllEdges().forEach((t) => {
              var e;
              null === (e = t.data.points) ||
                void 0 === e ||
                e.forEach((t) => I(t)),
                t.data.hasOwnProperty('y') && I(t.data);
            });
        },
        I = (t) => {
          (null == t ? void 0 : t.y) && (t.y = -t.y);
        },
        j = (t) => {
          t.getAllNodes().forEach((t) => {
            C(t.data);
          }),
            t.getAllEdges().forEach((t) => {
              var e;
              null === (e = t.data.points) ||
                void 0 === e ||
                e.forEach((t) => C(t)),
                t.data.hasOwnProperty('x') && C(t.data);
            });
        },
        C = (t) => {
          const e = t.x;
          (t.x = t.y), (t.y = e);
        },
        D = (t, e, r, n, o, i, s) => {
          const a = t.getChildren(s);
          if (!(null == a ? void 0 : a.length))
            return void (
              s !== e &&
              t.addEdge({
                id: `e${Math.random()}`,
                source: e,
                target: s,
                data: { weight: 0, minlen: r },
              })
            );
          const u = N(t, '_bt'),
            d = N(t, '_bb'),
            h = t.getNode(s);
          t.setParent(u, s),
            (h.data.borderTop = u),
            t.setParent(d, s),
            (h.data.borderBottom = d),
            null == a ||
              a.forEach((a) => {
                D(t, e, r, n, o, i, a.id);
                const h = a.data.borderTop ? a.data.borderTop : a.id,
                  c = a.data.borderBottom ? a.data.borderBottom : a.id,
                  l = a.data.borderTop ? n : 2 * n,
                  f = h !== c ? 1 : o - i[s] + 1;
                t.addEdge({
                  id: `e${Math.random()}`,
                  source: u,
                  target: h,
                  data: { minlen: f, weight: l, nestingEdge: !0 },
                }),
                  t.addEdge({
                    id: `e${Math.random()}`,
                    source: c,
                    target: d,
                    data: { minlen: f, weight: l, nestingEdge: !0 },
                  });
              }),
            t.getParent(s) ||
              t.addEdge({
                id: `e${Math.random()}`,
                source: e,
                target: u,
                data: { weight: 0, minlen: o + i[s] },
              });
        },
        T = (t) => {
          const e = {},
            r = (n, o) => {
              const i = t.getChildren(n);
              null == i || i.forEach((t) => r(t.id, o + 1)), (e[n] = o);
            };
          return t.getRoots().forEach((t) => r(t.id, 1)), e;
        },
        P = (t) => {
          let e = 0;
          return (
            t.getAllEdges().forEach((t) => {
              e += t.data.weight;
            }),
            e
          );
        },
        L = 'edge-label',
        F = (t, e, r) => {
          let n = e.source,
            o = t.getNode(n).data.rank;
          const i = e.target,
            s = t.getNode(i).data.rank,
            a = e.data.labelRank;
          if (s === o + 1) return;
          let u, d, h;
          for (t.removeEdge(e.id), h = 0, ++o; o < s; ++h, ++o)
            (e.data.points = []),
              (d = { originalEdge: e, width: 0, height: 0, rank: o }),
              (u = y(t, 'edge', d, '_d')),
              o === a &&
                ((d.width = e.data.width),
                (d.height = e.data.height),
                (d.dummy = L),
                (d.labelpos = e.data.labelpos)),
              t.addEdge({
                id: `e${Math.random()}`,
                source: n,
                target: u,
                data: { weight: e.data.weight },
              }),
              0 === h && r.push(u),
              (n = u);
          t.addEdge({
            id: `e${Math.random()}`,
            source: n,
            target: i,
            data: { weight: e.data.weight },
          });
        };
      var q = r(83207);
      const Z = (t) => {
          let e;
          for (; t.hasNode((e = `_root${Math.random()}`)); );
          return e;
        },
        G = (t, e, r) => {
          const n = x(
              r,
              r.map((t, e) => e),
            ),
            o = e
              .map((e) => {
                const r = t
                  .getRelatedEdges(e, 'out')
                  .map((t) => ({
                    pos: n[t.target] || 0,
                    weight: t.data.weight,
                  }));
                return null == r ? void 0 : r.sort((t, e) => t.pos - e.pos);
              })
              .flat()
              .filter((t) => void 0 !== t);
          let i = 1;
          for (; i < r.length; ) i <<= 1;
          const s = 2 * i - 1;
          i -= 1;
          const a = Array(s).fill(0, 0, s);
          let u = 0;
          return (
            null == o ||
              o.forEach((t) => {
                if (t) {
                  let e = t.pos + i;
                  a[e] += t.weight;
                  let r = 0;
                  for (; e > 0; )
                    e % 2 && (r += a[e + 1]),
                      (e = (e - 1) >> 1),
                      (a[e] += t.weight);
                  u += t.weight * r;
                }
              }),
            u
          );
        },
        V = (t, e) => {
          let r = 0;
          for (let n = 1; n < (null == e ? void 0 : e.length); n += 1)
            r += G(t, e[n - 1], e[n]);
          return r;
        },
        B = (t) => {
          const e = {},
            r = t.getAllNodes(),
            n = r.map((t) => {
              var e;
              return null !== (e = t.data.rank) && void 0 !== e ? e : -1 / 0;
            }),
            o = Math.max(...n),
            i = [];
          for (let t = 0; t < o + 1; t++) i.push([]);
          const s = r.sort(
              (e, r) => t.getNode(e.id).data.rank - t.getNode(r.id).data.rank,
            ),
            a = s
              .filter((e) => void 0 !== t.getNode(e.id).data.fixorder)
              .sort(
                (e, r) =>
                  t.getNode(e.id).data.fixorder - t.getNode(r.id).data.fixorder,
              );
          return (
            null == a ||
              a.forEach((r) => {
                isNaN(t.getNode(r.id).data.rank) ||
                  i[t.getNode(r.id).data.rank].push(r.id),
                  (e[r.id] = !0);
              }),
            null == s ||
              s.forEach((r) =>
                t.dfsTree(r.id, (t) => {
                  if (e.hasOwnProperty(t.id)) return !0;
                  (e[t.id] = !0),
                    isNaN(t.data.rank) || i[t.data.rank].push(t.id);
                }),
              ),
            i
          );
        },
        U = (t) => {
          var e, r;
          const n = [];
          for (; null == t ? void 0 : t.length; ) {
            const o = t.pop();
            n.push(o),
              null === (e = o.in.reverse()) ||
                void 0 === e ||
                e.forEach((t) => {
                  return ((e = o),
                  (t) => {
                    t.merged ||
                      ((void 0 === t.barycenter ||
                        void 0 === e.barycenter ||
                        t.barycenter >= e.barycenter) &&
                        W(e, t));
                  })(t);
                  var e;
                }),
              null === (r = o.out) ||
                void 0 === r ||
                r.forEach((e) => {
                  return ((r = o),
                  (e) => {
                    e.in.push(r), 0 == --e.indegree && t.push(e);
                  })(e);
                  var r;
                });
          }
          const o = n.filter((t) => !t.merged),
            i = ['vs', 'i', 'barycenter', 'weight'];
          return o.map((t) => {
            const e = {};
            return (
              null == i ||
                i.forEach((r) => {
                  void 0 !== t[r] && (e[r] = t[r]);
                }),
              e
            );
          });
        },
        W = (t, e) => {
          var r;
          let n = 0,
            o = 0;
          t.weight && ((n += t.barycenter * t.weight), (o += t.weight)),
            e.weight && ((n += e.barycenter * e.weight), (o += e.weight)),
            (t.vs =
              null === (r = e.vs) || void 0 === r ? void 0 : r.concat(t.vs)),
            (t.barycenter = n / o),
            (t.weight = o),
            (t.i = Math.min(e.i, t.i)),
            (e.merged = !0);
        };
      var Y = (t, e) => {
        var r, n, o;
        const i = {};
        null == t ||
          t.forEach((t, e) => {
            i[t.v] = { i: e, indegree: 0, in: [], out: [], vs: [t.v] };
            const r = i[t.v];
            void 0 !== t.barycenter &&
              ((r.barycenter = t.barycenter), (r.weight = t.weight));
          }),
          null === (r = e.getAllEdges()) ||
            void 0 === r ||
            r.forEach((t) => {
              const e = i[t.source],
                r = i[t.target];
              void 0 !== e &&
                void 0 !== r &&
                (r.indegree++, e.out.push(i[t.target]));
            });
        const s =
          null === (o = (n = Object.values(i)).filter) || void 0 === o
            ? void 0
            : o.call(n, (t) => !t.indegree);
        return U(s);
      };
      const $ = (t, e, r) => {
          let n,
            o = r;
          for (; e.length && (n = e[e.length - 1]).i <= o; )
            e.pop(), null == t || t.push(n.vs), o++;
          return o;
        },
        H = (t, e) => (r, n) => {
          if (void 0 !== r.fixorder && void 0 !== n.fixorder)
            return r.fixorder - n.fixorder;
          if (r.barycenter < n.barycenter) return -1;
          if (r.barycenter > n.barycenter) return 1;
          if (e && void 0 !== r.order && void 0 !== n.order) {
            if (r.order < n.order) return -1;
            if (r.order > n.order) return 1;
          }
          return t ? n.i - r.i : r.i - n.i;
        },
        K = (t, e, r, n, o, i) => {
          var s, a, u, d;
          let h = t.getChildren(e).map((t) => t.id);
          const c = t.getNode(e),
            l = c ? c.data.borderLeft : void 0,
            f = c ? c.data.borderRight : void 0,
            g = {};
          l && (h = null == h ? void 0 : h.filter((t) => t !== l && t !== f));
          const v = ((t, e) =>
            e.map((e) => {
              const r = t.getRelatedEdges(e, 'in');
              if (!(null == r ? void 0 : r.length)) return { v: e };
              const n = { sum: 0, weight: 0 };
              return (
                null == r ||
                  r.forEach((e) => {
                    const r = t.getNode(e.source);
                    (n.sum += e.data.weight * r.data.order),
                      (n.weight += e.data.weight);
                  }),
                { v: e, barycenter: n.sum / n.weight, weight: n.weight }
              );
            }))(t, h || []);
          null == v ||
            v.forEach((e) => {
              var o;
              if (
                null === (o = t.getChildren(e.v)) || void 0 === o
                  ? void 0
                  : o.length
              ) {
                const o = K(t, e.v, r, n, i);
                (g[e.v] = o), o.hasOwnProperty('barycenter') && Q(e, o);
              }
            });
          const p = Y(v, r);
          J(p, g),
            null === (s = p.filter((t) => t.vs.length > 0)) ||
              void 0 === s ||
              s.forEach((e) => {
                const r = t.getNode(e.vs[0]);
                r && ((e.fixorder = r.data.fixorder), (e.order = r.data.order));
              });
          const m = ((t, e, r, n) => {
            const o = ((t, e) => {
                const r = { lhs: [], rhs: [] };
                return (
                  null == t ||
                    t.forEach((t) => {
                      e(t) ? r.lhs.push(t) : r.rhs.push(t);
                    }),
                  r
                );
              })(t, (t) => {
                const e = t.hasOwnProperty('fixorder') && !isNaN(t.fixorder);
                return n
                  ? !e && t.hasOwnProperty('barycenter')
                  : e || t.hasOwnProperty('barycenter');
              }),
              i = o.lhs,
              s = o.rhs.sort((t, e) => -t.i - -e.i),
              a = [];
            let u = 0,
              d = 0,
              h = 0;
            null == i || i.sort(H(!!e, !!r)),
              (h = $(a, s, h)),
              null == i ||
                i.forEach((t) => {
                  var e;
                  (h +=
                    null === (e = t.vs) || void 0 === e ? void 0 : e.length),
                    a.push(t.vs),
                    (u += t.barycenter * t.weight),
                    (d += t.weight),
                    (h = $(a, s, h));
                });
            const c = { vs: a.flat() };
            return d && ((c.barycenter = u / d), (c.weight = d)), c;
          })(p, n, o, i);
          if (
            l &&
            ((m.vs = [l, m.vs, f].flat()),
            null === (a = t.getPredecessors(l)) || void 0 === a
              ? void 0
              : a.length)
          ) {
            const e = t.getNode(
                (null === (u = t.getPredecessors(l)) || void 0 === u
                  ? void 0
                  : u[0].id) || '',
              ),
              r = t.getNode(
                (null === (d = t.getPredecessors(f)) || void 0 === d
                  ? void 0
                  : d[0].id) || '',
              );
            m.hasOwnProperty('barycenter') ||
              ((m.barycenter = 0), (m.weight = 0)),
              (m.barycenter =
                (m.barycenter * m.weight + e.data.order + r.data.order) /
                (m.weight + 2)),
              (m.weight += 2);
          }
          return m;
        },
        J = (t, e) => {
          null == t ||
            t.forEach((t) => {
              var r;
              const n =
                null === (r = t.vs) || void 0 === r
                  ? void 0
                  : r.map((t) => (e[t] ? e[t].vs : t));
              t.vs = n.flat();
            });
        },
        Q = (t, e) => {
          void 0 !== t.barycenter
            ? ((t.barycenter =
                (t.barycenter * t.weight + e.barycenter * e.weight) /
                (t.weight + e.weight)),
              (t.weight += e.weight))
            : ((t.barycenter = e.barycenter), (t.weight = e.weight));
        },
        X = (t, e, r) =>
          e.map((e) =>
            ((t, e, r) => {
              const n = Z(t),
                i = new o.k({ tree: [{ id: n, children: [], data: {} }] });
              return (
                t.getAllNodes().forEach((o) => {
                  const s = t.getParent(o.id);
                  (o.data.rank === e ||
                    (o.data.minRank <= e && e <= o.data.maxRank)) &&
                    (i.hasNode(o.id) || i.addNode(Object.assign({}, o)),
                    (null == s ? void 0 : s.id) &&
                      !i.hasNode(null == s ? void 0 : s.id) &&
                      i.addNode(Object.assign({}, s)),
                    i.setParent(o.id, (null == s ? void 0 : s.id) || n),
                    t.getRelatedEdges(o.id, r).forEach((e) => {
                      const r = e.source === o.id ? e.target : e.source;
                      i.hasNode(r) ||
                        i.addNode(Object.assign({}, t.getNode(r)));
                      const n = i
                          .getRelatedEdges(r, 'out')
                          .find(({ target: t }) => t === o.id),
                        s = void 0 !== n ? n.data.weight : 0;
                      n
                        ? i.updateEdgeData(
                            n.id,
                            Object.assign(Object.assign({}, n.data), {
                              weight: e.data.weight + s,
                            }),
                          )
                        : i.addEdge({
                            id: e.id,
                            source: r,
                            target: o.id,
                            data: { weight: e.data.weight + s },
                          });
                    }),
                    o.data.hasOwnProperty('minRank') &&
                      i.updateNodeData(
                        o.id,
                        Object.assign(Object.assign({}, o.data), {
                          borderLeft: o.data.borderLeft[e],
                          borderRight: o.data.borderRight[e],
                        }),
                      ));
                }),
                i
              );
            })(t, e, r),
          ),
        tt = (t, e, r, n) => {
          const i = new o.k();
          null == t ||
            t.forEach((t) => {
              var o;
              const s = t.getRoots()[0].id,
                a = K(t, s, i, e, r, n);
              for (
                let e = 0;
                e < (null === (o = a.vs) || void 0 === o ? void 0 : o.length);
                e++
              ) {
                const r = t.getNode(a.vs[e]);
                r && (r.data.order = e);
              }
              ((t, e, r) => {
                const n = {};
                let o;
                null == r ||
                  r.forEach((r) => {
                    let i,
                      s,
                      a = t.getParent(r);
                    for (; a; ) {
                      if (
                        ((i = t.getParent(a.id)),
                        i
                          ? ((s = n[i.id]), (n[i.id] = a.id))
                          : ((s = o), (o = a.id)),
                        s && s !== a.id)
                      )
                        return (
                          e.hasNode(s) || e.addNode({ id: s, data: {} }),
                          e.hasNode(a.id) || e.addNode({ id: a.id, data: {} }),
                          void (
                            e.hasEdge(`e${s}-${a.id}`) ||
                            e.addEdge({
                              id: `e${s}-${a.id}`,
                              source: s,
                              target: a.id,
                              data: {},
                            })
                          )
                        );
                      a = i;
                    }
                  });
              })(t, i, a.vs);
            });
        },
        et = (t, e) => {
          null == e ||
            e.forEach((e) => {
              null == e ||
                e.forEach((e, r) => {
                  t.getNode(e).data.order = r;
                });
            });
        },
        rt = (t, e) => {
          const r = ((t) => {
            const e = {};
            let r = 0;
            const n = (o) => {
              const i = r;
              t.getChildren(o).forEach((t) => n(t.id)),
                (e[o] = { low: i, lim: r++ });
            };
            return t.getRoots().forEach((t) => n(t.id)), e;
          })(t);
          e.forEach((e) => {
            var n, o;
            let i = e,
              s = t.getNode(i);
            const a = s.data.originalEdge;
            if (!a) return;
            const u = ((t, e, r, n) => {
                var o, i;
                const s = [],
                  a = [],
                  u = Math.min(e[r].low, e[n].low),
                  d = Math.max(e[r].lim, e[n].lim);
                let h, c;
                h = r;
                do {
                  (h =
                    null === (o = t.getParent(h)) || void 0 === o
                      ? void 0
                      : o.id),
                    s.push(h);
                } while (h && (e[h].low > u || d > e[h].lim));
                for (c = h, h = n; h && h !== c; )
                  a.push(h),
                    (h =
                      null === (i = t.getParent(h)) || void 0 === i
                        ? void 0
                        : i.id);
                return { lca: c, path: s.concat(a.reverse()) };
              })(t, r, a.source, a.target),
              d = u.path,
              h = u.lca;
            let c = 0,
              l = d[c],
              f = !0;
            for (; i !== a.target; ) {
              if (((s = t.getNode(i)), f)) {
                for (
                  ;
                  l !== h &&
                  (null === (n = t.getNode(l)) || void 0 === n
                    ? void 0
                    : n.data.maxRank) < s.data.rank;

                )
                  c++, (l = d[c]);
                l === h && (f = !1);
              }
              if (!f) {
                for (
                  ;
                  c < d.length - 1 &&
                  (null === (o = t.getNode(d[c + 1])) || void 0 === o
                    ? void 0
                    : o.data.minRank) <= s.data.rank;

                )
                  c++;
                l = d[c];
              }
              t.hasNode(l) && t.setParent(i, l), (i = t.getSuccessors(i)[0].id);
            }
          });
        },
        nt = (t, e) => {
          const r = {},
            n = (e, n) => {
              let o = 0,
                i = 0;
              const s = e.length,
                a = null == n ? void 0 : n[(null == n ? void 0 : n.length) - 1];
              return (
                null == n ||
                  n.forEach((e, u) => {
                    var d;
                    const h = it(t, e),
                      c = h ? t.getNode(h.id).data.order : s;
                    (h || e === a) &&
                      (null === (d = n.slice(i, u + 1)) ||
                        void 0 === d ||
                        d.forEach((e) => {
                          var n;
                          null === (n = t.getPredecessors(e)) ||
                            void 0 === n ||
                            n.forEach((n) => {
                              var i;
                              const s = t.getNode(n.id),
                                a = s.data.order;
                              !(a < o || c < a) ||
                                (s.data.dummy &&
                                  (null === (i = t.getNode(e)) || void 0 === i
                                    ? void 0
                                    : i.data.dummy)) ||
                                st(r, n.id, e);
                            });
                        }),
                      (i = u + 1),
                      (o = c));
                  }),
                n
              );
            };
          return (null == e ? void 0 : e.length) && e.reduce(n), r;
        },
        ot = (t, e) => {
          const r = {};
          function n(e, n) {
            const o = (function (t) {
              return JSON.stringify(t.slice(1));
            })(e);
            n.get(o) ||
              (!(function (e, n, o, i, s) {
                var a, u;
                let d;
                for (let h = n; h < o; h++)
                  (d = e[h]),
                    (null === (a = t.getNode(d)) || void 0 === a
                      ? void 0
                      : a.data.dummy) &&
                      (null === (u = t.getPredecessors(d)) ||
                        void 0 === u ||
                        u.forEach((e) => {
                          const n = t.getNode(e.id);
                          n.data.dummy &&
                            (n.data.order < i || n.data.order > s) &&
                            st(r, e.id, d);
                        }));
              })(...e),
              n.set(o, !0));
          }
          const o = (e, r) => {
            let o,
              i = -1,
              s = 0;
            const a = new Map();
            return (
              null == r ||
                r.forEach((u, d) => {
                  var h;
                  if (
                    'border' ===
                    (null === (h = t.getNode(u)) || void 0 === h
                      ? void 0
                      : h.data.dummy)
                  ) {
                    const e = t.getPredecessors(u) || [];
                    e.length &&
                      ((o = t.getNode(e[0].id).data.order),
                      n([r, s, d, i, o], a),
                      (s = d),
                      (i = o));
                  }
                  n([r, s, r.length, o, e.length], a);
                }),
              r
            );
          };
          return (null == e ? void 0 : e.length) && e.reduce(o), r;
        },
        it = (t, e) => {
          var r, n;
          if (
            null === (r = t.getNode(e)) || void 0 === r ? void 0 : r.data.dummy
          )
            return null === (n = t.getPredecessors(e)) || void 0 === n
              ? void 0
              : n.find((e) => t.getNode(e.id).data.dummy);
        },
        st = (t, e, r) => {
          let n = e,
            o = r;
          if (n > o) {
            const t = n;
            (n = o), (o = t);
          }
          let i = t[n];
          i || (t[n] = i = {}), (i[o] = !0);
        },
        at = (t, e, r) => {
          let n = e,
            o = r;
          if (n > r) {
            (n = r), (o = e);
          }
          return !!t[n];
        },
        ut = (t, e, r, n) => {
          const o = {},
            i = {},
            s = {};
          return (
            null == e ||
              e.forEach((t) => {
                null == t ||
                  t.forEach((t, e) => {
                    (o[t] = t), (i[t] = t), (s[t] = e);
                  });
              }),
            null == e ||
              e.forEach((t) => {
                let e = -1;
                null == t ||
                  t.forEach((t) => {
                    let a = n(t).map((t) => t.id);
                    if (a.length) {
                      a = a.sort((t, e) => s[t] - s[e]);
                      const n = (a.length - 1) / 2;
                      for (
                        let u = Math.floor(n), d = Math.ceil(n);
                        u <= d;
                        ++u
                      ) {
                        const n = a[u];
                        i[t] === t &&
                          e < s[n] &&
                          !at(r, t, n) &&
                          ((i[n] = t), (i[t] = o[t] = o[n]), (e = s[n]));
                      }
                    }
                  });
              }),
            { root: o, align: i }
          );
        },
        dt = (t, e, r, n, o, i, s) => {
          var a;
          const u = {},
            d = ht(t, e, r, o, i, s),
            h = s ? 'borderLeft' : 'borderRight',
            c = (t, e) => {
              let r = d.getAllNodes(),
                n = r.pop();
              const o = {};
              for (; n; )
                o[n.id]
                  ? t(n.id)
                  : ((o[n.id] = !0), r.push(n), (r = r.concat(e(n.id)))),
                  (n = r.pop());
            };
          return (
            c((t) => {
              u[t] = (d.getRelatedEdges(t, 'in') || []).reduce(
                (t, e) => Math.max(t, (u[e.source] || 0) + e.data.weight),
                0,
              );
            }, d.getPredecessors.bind(d)),
            c((e) => {
              const r = (d.getRelatedEdges(e, 'out') || []).reduce(
                  (t, e) => Math.min(t, (u[e.target] || 0) - e.data.weight),
                  Number.POSITIVE_INFINITY,
                ),
                n = t.getNode(e);
              r !== Number.POSITIVE_INFINITY &&
                n.data.borderType !== h &&
                (u[e] = Math.max(u[e], r));
            }, d.getSuccessors.bind(d)),
            null === (a = Object.values(n)) ||
              void 0 === a ||
              a.forEach((t) => {
                u[t] = u[r[t]];
              }),
            u
          );
        },
        ht = (t, e, r, n, i, s) => {
          const a = new o.k(),
            u = gt(n, i, s);
          return (
            null == e ||
              e.forEach((e) => {
                let n;
                null == e ||
                  e.forEach((e) => {
                    const o = r[e];
                    if ((a.hasNode(o) || a.addNode({ id: o, data: {} }), n)) {
                      const i = r[n],
                        s = a
                          .getRelatedEdges(i, 'out')
                          .find((t) => t.target === o);
                      s
                        ? a.updateEdgeData(
                            s.id,
                            Object.assign(Object.assign({}, s.data), {
                              weight: Math.max(u(t, e, n), s.data.weight || 0),
                            }),
                          )
                        : a.addEdge({
                            id: `e${Math.random()}`,
                            source: i,
                            target: o,
                            data: { weight: Math.max(u(t, e, n), 0) },
                          });
                    }
                    n = e;
                  });
              }),
            a
          );
        },
        ct = (t, e) =>
          k(Object.values(e), (e) => {
            var r;
            let n = Number.NEGATIVE_INFINITY,
              o = Number.POSITIVE_INFINITY;
            return (
              null === (r = Object.keys(e)) ||
                void 0 === r ||
                r.forEach((r) => {
                  const i = e[r],
                    s = vt(t, r) / 2;
                  (n = Math.max(i + s, n)), (o = Math.min(i - s, o));
                }),
              n - o
            );
          });
      function lt(t, e) {
        const r = Object.values(e),
          n = Math.min(...r),
          o = Math.max(...r);
        ['u', 'd'].forEach((r) => {
          ['l', 'r'].forEach((i) => {
            const s = r + i,
              a = t[s];
            let u;
            if (a === e) return;
            const d = Object.values(a);
            (u = 'l' === i ? n - Math.min(...d) : o - Math.max(...d)),
              u &&
                ((t[s] = {}),
                Object.keys(a).forEach((e) => {
                  t[s][e] = a[e] + u;
                }));
          });
        });
      }
      const ft = (t, e) => {
          const r = {};
          return (
            Object.keys(t.ul).forEach((n) => {
              if (e) r[n] = t[e.toLowerCase()][n];
              else {
                const e = Object.values(t).map((t) => t[n]);
                r[n] = (e[0] + e[1]) / 2;
              }
            }),
            r
          );
        },
        gt = (t, e, r) => (n, o, i) => {
          const s = n.getNode(o),
            a = n.getNode(i);
          let u = 0,
            d = 0;
          if (((u += s.data.width / 2), s.data.hasOwnProperty('labelpos')))
            switch ((s.data.labelpos || '').toLowerCase()) {
              case 'l':
                d = -s.data.width / 2;
                break;
              case 'r':
                d = s.data.width / 2;
            }
          if (
            (d && (u += r ? d : -d),
            (d = 0),
            (u += (s.data.dummy ? e : t) / 2),
            (u += (a.data.dummy ? e : t) / 2),
            (u += a.data.width / 2),
            a.data.labelpos)
          )
            switch ((a.data.labelpos || '').toLowerCase()) {
              case 'l':
                d = a.data.width / 2;
                break;
              case 'r':
                d = -a.data.width / 2;
            }
          return d && (u += r ? d : -d), (d = 0), u;
        },
        vt = (t, e) => t.getNode(e).data.width || 0,
        pt = (t, e) => {
          var r;
          const n = w(t);
          ((t, e) => {
            const { ranksep: r = 0 } = e || {},
              n = E(t);
            let o = 0;
            null == n ||
              n.forEach((e) => {
                const n = e.map((e) => t.getNode(e).data.height),
                  i = Math.max(...n, 0);
                null == e ||
                  e.forEach((e) => {
                    t.getNode(e).data.y = o + i / 2;
                  }),
                  (o += i + r);
              });
          })(n, e);
          const o = ((t, e) => {
            const { align: r, nodesep: n = 0, edgesep: o = 0 } = e || {},
              i = E(t),
              s = Object.assign(nt(t, i), ot(t, i)),
              a = {};
            let u = [];
            ['u', 'd'].forEach((e) => {
              (u = 'u' === e ? i : Object.values(i).reverse()),
                ['l', 'r'].forEach((r) => {
                  'r' === r && (u = u.map((t) => Object.values(t).reverse()));
                  const i = (
                      'u' === e ? t.getPredecessors : t.getSuccessors
                    ).bind(t),
                    d = ut(0, u, s, i),
                    h = dt(t, u, d.root, d.align, n, o, 'r' === r);
                  'r' === r && Object.keys(h).forEach((t) => (h[t] = -h[t])),
                    (a[e + r] = h);
                });
            });
            const d = ct(t, a);
            return d && lt(a, d), ft(a, r);
          })(n, e);
          null === (r = Object.keys(o)) ||
            void 0 === r ||
            r.forEach((t) => {
              n.getNode(t).data.x = o[t];
            });
        },
        mt = (t) => {
          const e = {},
            r = (n) => {
              var o;
              const i = t.getNode(n);
              if (!i) return 0;
              if (e[n]) return i.data.rank;
              let s;
              return (
                (e[n] = !0),
                null === (o = t.getRelatedEdges(n, 'out')) ||
                  void 0 === o ||
                  o.forEach((t) => {
                    const e = r(t.target) - t.data.minlen;
                    e && (void 0 === s || e < s) && (s = e);
                  }),
                s || (s = 0),
                (i.data.rank = s),
                s
              );
            };
          t.getAllNodes()
            .filter((e) => 0 === t.getRelatedEdges(e.id, 'in').length)
            .forEach((t) => r(t.id));
        },
        yt = (t, e) =>
          t.getNode(e.target).data.rank -
          t.getNode(e.source).data.rank -
          e.data.minlen,
        wt = (t, e) => {
          const r = (n) => {
            e.getRelatedEdges(n, 'both').forEach((o) => {
              const i = o.source,
                s = n === i ? o.target : i;
              t.hasNode(s) ||
                yt(e, o) ||
                (t.addNode({ id: s, data: {} }),
                t.addEdge({ id: o.id, source: n, target: s, data: {} }),
                r(s));
            });
          };
          return (
            t.getAllNodes().forEach((t) => r(t.id)), t.getAllNodes().length
          );
        },
        xt = (t, e) => {
          const r = (n) => {
            var o;
            null === (o = e.getRelatedEdges(n, 'both')) ||
              void 0 === o ||
              o.forEach((o) => {
                const i = o.source,
                  s = n === i ? o.target : i;
                t.hasNode(s) ||
                  (void 0 === e.getNode(s).data.layer && yt(e, o)) ||
                  (t.addNode({ id: s, data: {} }),
                  t.addEdge({ id: o.id, source: n, target: s, data: {} }),
                  r(s));
              });
          };
          return (
            t.getAllNodes().forEach((t) => r(t.id)), t.getAllNodes().length
          );
        },
        bt = (t, e) =>
          k(e.getAllEdges(), (r) =>
            t.hasNode(r.source) !== t.hasNode(r.target) ? yt(e, r) : 1 / 0,
          ),
        Et = (t, e, r) => {
          t.getAllNodes().forEach((t) => {
            const n = e.getNode(t.id);
            n.data.rank || (n.data.rank = 0), (n.data.rank += r);
          });
        },
        Nt = (t) => {
          const e = ((t) => {
            const e = new o.k();
            return (
              t.getAllNodes().forEach((t) => {
                e.addNode(Object.assign({}, t));
              }),
              t.getAllEdges().forEach((t) => {
                const r = e
                  .getRelatedEdges(t.source, 'out')
                  .find((e) => e.target === t.target);
                r
                  ? e.updateEdgeData(
                      null == r ? void 0 : r.id,
                      Object.assign(Object.assign({}, r.data), {
                        weight: r.data.weight + t.data.weight || 0,
                        minlen: Math.max(r.data.minlen, t.data.minlen || 1),
                      }),
                    )
                  : e.addEdge({
                      id: t.id,
                      source: t.source,
                      target: t.target,
                      data: {
                        weight: t.data.weight || 0,
                        minlen: t.data.minlen || 1,
                      },
                    });
              }),
              e
            );
          })(t);
          mt(e);
          const r = ((t) => {
            const e = new o.k({ tree: [] }),
              r = t.getAllNodes()[0],
              n = t.getAllNodes().length;
            let i, s;
            for (e.addNode(r); wt(e, t) < n; )
              (i = bt(e, t)),
                (s = e.hasNode(i.source) ? yt(t, i) : -yt(t, i)),
                Et(e, t, s);
            return e;
          })(e);
          let n, i;
          for (St(r), Mt(r, e); (n = Ot(r)); )
            (i = Rt(r, e, n)), zt(r, e, n, i);
        },
        Mt = (t, e) => {
          let r = S(t, t.getAllNodes(), 'post', !1);
          (r = r.slice(0, (null == r ? void 0 : r.length) - 1)),
            r.forEach((r) => {
              kt(t, e, r);
            });
        },
        kt = (t, e, r) => {
          const n = t.getNode(r).data.parent;
          t
            .getRelatedEdges(r, 'both')
            .find((t) => t.target === n || t.source === n).data.cutvalue = _t(
            t,
            e,
            r,
          );
        },
        _t = (t, e, r) => {
          const n = t.getNode(r).data.parent;
          let o = !0,
            i = e.getRelatedEdges(r, 'out').find((t) => t.target === n),
            s = 0;
          return (
            i ||
              ((o = !1),
              (i = e.getRelatedEdges(n, 'out').find((t) => t.target === r))),
            (s = i.data.weight),
            e.getRelatedEdges(r, 'both').forEach((e) => {
              const i = e.source === r,
                a = i ? e.target : e.source;
              if (a !== n) {
                const n = i === o,
                  u = e.data.weight;
                if (((s += n ? u : -u), jt(t, r, a))) {
                  const e = t
                    .getRelatedEdges(r, 'both')
                    .find((t) => t.source === a || t.target === a)
                    .data.cutvalue;
                  s += n ? -e : e;
                }
              }
            }),
            s
          );
        },
        St = (t, e = t.getAllNodes()[0].id) => {
          At(t, {}, 1, e);
        },
        At = (t, e, r, n, o) => {
          var i;
          const s = r;
          let a = r;
          const u = t.getNode(n);
          return (
            (e[n] = !0),
            null === (i = t.getNeighbors(n)) ||
              void 0 === i ||
              i.forEach((r) => {
                e[r.id] || (a = At(t, e, a, r.id, n));
              }),
            (u.data.low = s),
            (u.data.lim = a++),
            o ? (u.data.parent = o) : delete u.data.parent,
            a
          );
        },
        Ot = (t) => t.getAllEdges().find((t) => t.data.cutvalue < 0),
        Rt = (t, e, r) => {
          let n = r.source,
            o = r.target;
          e.getRelatedEdges(n, 'out').find((t) => t.target === o) ||
            ((n = r.target), (o = r.source));
          const i = t.getNode(n),
            s = t.getNode(o);
          let a = i,
            u = !1;
          i.data.lim > s.data.lim && ((a = s), (u = !0));
          const d = e
            .getAllEdges()
            .filter(
              (e) =>
                u === Ct(t.getNode(e.source), a) &&
                u !== Ct(t.getNode(e.target), a),
            );
          return k(d, (t) => yt(e, t));
        },
        zt = (t, e, r, n) => {
          const o = t
            .getRelatedEdges(r.source, 'both')
            .find((t) => t.source === r.target || t.target === r.target);
          o && t.removeEdge(o.id),
            t.addEdge({
              id: `e${Math.random()}`,
              source: n.source,
              target: n.target,
              data: {},
            }),
            St(t),
            Mt(t, e),
            It(t, e);
        },
        It = (t, e) => {
          const r = t.getAllNodes().find((t) => !t.data.parent);
          let n = S(t, r, 'pre', !1);
          (n = n.slice(1)),
            n.forEach((r) => {
              const n = t.getNode(r).data.parent;
              let o = e.getRelatedEdges(r, 'out').find((t) => t.target === n),
                i = !1;
              !o &&
                e.hasNode(n) &&
                ((o = e.getRelatedEdges(n, 'out').find((t) => t.target === r)),
                (i = !0)),
                (e.getNode(r).data.rank =
                  ((e.hasNode(n) && e.getNode(n).data.rank) || 0) +
                  (i
                    ? null == o
                      ? void 0
                      : o.data.minlen
                    : -(null == o ? void 0 : o.data.minlen)));
            });
        },
        jt = (t, e, r) =>
          t
            .getRelatedEdges(e, 'both')
            .find((t) => t.source === r || t.target === r),
        Ct = (t, e) => e.data.low <= t.data.lim && t.data.lim <= e.data.lim,
        Dt = mt,
        Tt = (t) => {
          ((t) => {
            const e = {};
            let r;
            const n = (o) => {
              var i;
              const s = t.getNode(o);
              if (!s) return 0;
              if (e[o]) return s.data.rank;
              let a;
              return (
                (e[o] = !0),
                null === (i = t.getRelatedEdges(o, 'out')) ||
                  void 0 === i ||
                  i.forEach((t) => {
                    const e = n(t.target) - t.data.minlen;
                    e && (void 0 === a || e < a) && (a = e);
                  }),
                a || (a = 0),
                (void 0 === r || a < r) && (r = a),
                (s.data.rank = a),
                a
              );
            };
            t
              .getAllNodes()
              .filter((e) => 0 === t.getRelatedEdges(e.id, 'in').length)
              .forEach((t) => {
                t && n(t.id);
              }),
              void 0 === r && (r = 0);
            const o = {},
              i = (e, r) => {
                var n;
                const s = t.getNode(e),
                  a = isNaN(s.data.layer) ? r : s.data.layer;
                (void 0 === s.data.rank || s.data.rank < a) &&
                  (s.data.rank = a),
                  o[e] ||
                    ((o[e] = !0),
                    null === (n = t.getRelatedEdges(e, 'out')) ||
                      void 0 === n ||
                      n.forEach((t) => {
                        i(t.target, a + t.data.minlen);
                      }));
              };
            t.getAllNodes().forEach((t) => {
              const e = t.data;
              e && (isNaN(e.layer) ? (e.rank -= r) : i(t.id, e.layer));
            });
          })(t),
            ((t) => {
              const e = new o.k({ tree: [] }),
                r = t.getAllNodes()[0],
                n = t.getAllNodes().length;
              let i, s;
              for (e.addNode(r); xt(e, t) < n; )
                (i = bt(e, t)),
                  (s = e.hasNode(i.source) ? yt(t, i) : -yt(t, i)),
                  Et(e, t, s);
            })(t);
        },
        Pt = (t) => {
          Nt(t);
        },
        Lt = (t, e) => {
          const {
            acyclicer: r,
            ranker: n,
            rankdir: o = 'tb',
            nodeOrder: i,
            keepNodeOrder: s,
            align: a,
            nodesep: u = 50,
            edgesep: d = 20,
            ranksep: h = 50,
          } = e;
          re(t), p(t, r);
          const { nestingRoot: c, nodeRankFactor: l } = ((t) => {
            const e = y(t, 'root', {}, '_root'),
              r = T(t);
            let n = Math.max(...Object.values(r));
            Math.abs(n) === 1 / 0 && (n = 1);
            const o = n - 1,
              i = 2 * o + 1;
            t.getAllEdges().forEach((t) => {
              t.data.minlen *= i;
            });
            const s = P(t) + 1;
            return (
              t.getRoots().forEach((n) => {
                D(t, e, i, s, o, r, n.id);
              }),
              { nestingRoot: e, nodeRankFactor: i }
            );
          })(t);
          ((t, e) => {
            switch (e) {
              case 'network-simplex':
                Pt(t);
                break;
              case 'tight-tree':
              default:
                Tt(t);
                break;
              case 'longest-path':
                Dt(t);
            }
          })(w(t), n),
            $t(t),
            ((t, e = 0) => {
              const r = t.getAllNodes(),
                n = r
                  .filter((t) => void 0 !== t.data.rank)
                  .map((t) => t.data.rank),
                o = Math.min(...n),
                i = [];
              r.forEach((t) => {
                const e = (t.data.rank || 0) - o;
                i[e] || (i[e] = []), i[e].push(t.id);
              });
              let s = 0;
              for (let r = 0; r < i.length; r++) {
                const n = i[r];
                void 0 === n
                  ? r % e != 0 && (s -= 1)
                  : s &&
                    (null == n ||
                      n.forEach((e) => {
                        const r = t.getNode(e);
                        r &&
                          ((r.data.rank = r.data.rank || 0),
                          (r.data.rank += s));
                      }));
              }
            })(t, l),
            ((t, e) => {
              e && t.removeNode(e),
                t.getAllEdges().forEach((e) => {
                  e.data.nestingEdge && t.removeEdge(e.id);
                });
            })(t, c),
            ((t) => {
              const e = t
                  .getAllNodes()
                  .filter((t) => void 0 !== t.data.rank)
                  .map((t) => t.data.rank),
                r = Math.min(...e);
              t.getAllNodes().forEach((t) => {
                t.data.hasOwnProperty('rank') &&
                  r !== 1 / 0 &&
                  (t.data.rank -= r);
              });
            })(t),
            Ht(t),
            Kt(t);
          const f = [];
          ((t, e) => {
            t.getAllEdges().forEach((r) => F(t, r, e));
          })(t, f),
            rt(t, f),
            ((t) => {
              const e = (r) => {
                const n = t.getChildren(r),
                  o = t.getNode(r);
                if (
                  ((null == n ? void 0 : n.length) && n.forEach((t) => e(t.id)),
                  o.data.hasOwnProperty('minRank'))
                ) {
                  (o.data.borderLeft = []), (o.data.borderRight = []);
                  for (
                    let e = o.data.minRank, n = o.data.maxRank + 1;
                    e < n;
                    e += 1
                  )
                    A(t, 'borderLeft', '_bl', r, o, e),
                      A(t, 'borderRight', '_br', r, o, e);
                }
              };
              t.getRoots().forEach((t) => e(t.id));
            })(t),
            s &&
              ((t, e) => {
                const r = t
                    .getAllNodes()
                    .filter((e) => {
                      var r;
                      return !(null === (r = t.getChildren(e.id)) ||
                      void 0 === r
                        ? void 0
                        : r.length);
                    })
                    .map((t) => t.data.rank),
                  n = Math.max(...r),
                  o = [];
                for (let t = 0; t < n + 1; t++) o[t] = [];
                null == e ||
                  e.forEach((e) => {
                    const r = t.getNode(e);
                    r &&
                      !r.data.dummy &&
                      (isNaN(r.data.rank) ||
                        ((r.data.fixorder = o[r.data.rank].length),
                        o[r.data.rank].push(e)));
                  });
              })(t, i),
            ((t, e) => {
              const r = M(t),
                n = [],
                o = [];
              for (let t = 1; t < r + 1; t++) n.push(t);
              for (let t = r - 1; t > -1; t--) o.push(t);
              const i = X(t, n, 'in'),
                s = X(t, o, 'out');
              let a = B(t);
              et(t, a);
              let u,
                d = Number.POSITIVE_INFINITY;
              for (let r = 0, n = 0; n < 4; ++r, ++n) {
                tt(r % 2 ? i : s, r % 4 >= 2, !1, e), (a = E(t));
                const o = V(t, a);
                o < d && ((n = 0), (u = (0, q.Z)(a)), (d = o));
              }
              (a = B(t)), et(t, a);
              for (let r = 0, n = 0; n < 4; ++r, ++n) {
                tt(r % 2 ? i : s, r % 4 >= 2, !0, e), (a = E(t));
                const o = V(t, a);
                o < d && ((n = 0), (u = (0, q.Z)(a)), (d = o));
              }
              et(t, u);
            })(t, s),
            ne(t),
            ((t, e) => {
              const r = e.toLowerCase();
              ('lr' !== r && 'rl' !== r) || O(t);
            })(t, o),
            pt(t, { align: a, nodesep: u, edgesep: d, ranksep: h }),
            oe(t),
            ee(t),
            ((t, e) => {
              e.forEach((e) => {
                let r = t.getNode(e);
                const { data: n } = r,
                  o = n.originalEdge;
                let i;
                o && t.addEdge(o);
                let s = e;
                for (; r.data.dummy; )
                  (i = t.getSuccessors(s)[0]),
                    t.removeNode(s),
                    o.data.points.push({ x: r.data.x, y: r.data.y }),
                    r.data.dummy === L &&
                      ((o.data.x = r.data.x),
                      (o.data.y = r.data.y),
                      (o.data.width = r.data.width),
                      (o.data.height = r.data.height)),
                    (s = i.id),
                    (r = t.getNode(s));
              });
            })(t, f),
            Xt(t),
            ((t, e) => {
              const r = e.toLowerCase();
              ('bt' !== r && 'rl' !== r) || z(t),
                ('lr' !== r && 'rl' !== r) || (j(t), O(t));
            })(t, o);
          const { width: g, height: v } = Jt(t);
          return (
            Qt(t),
            te(t),
            ((t) => {
              t.getAllEdges().forEach((e) => {
                const r = e.data;
                if (r.reversed) {
                  t.removeEdge(e.id);
                  const n = r.forwardName;
                  delete r.reversed,
                    delete r.forwardName,
                    t.addEdge({
                      id: e.id,
                      source: e.target,
                      target: e.source,
                      data: Object.assign(Object.assign({}, r), {
                        forwardName: n,
                      }),
                    });
                }
              });
            })(t),
            { width: g, height: v }
          );
        },
        Ft = (t, e) => {
          t.getAllNodes().forEach((r) => {
            const n = t.getNode(r.id);
            if (e.hasNode(r.id)) {
              const t = e.getNode(r.id);
              (n.data.fixorder = t.data._order), delete t.data._order;
            } else delete n.data.fixorder;
          });
        },
        qt = (t, e) => {
          t.getAllNodes().forEach((r) => {
            var n;
            const o = t.getNode(r.id);
            if (o) {
              const t = e.getNode(r.id);
              (o.data.x = t.data.x),
                (o.data.y = t.data.y),
                (o.data._order = t.data.order),
                (o.data._rank = t.data.rank),
                (null === (n = e.getChildren(r.id)) || void 0 === n
                  ? void 0
                  : n.length) &&
                  ((o.data.width = t.data.width),
                  (o.data.height = t.data.height));
            }
          }),
            t.getAllEdges().forEach((r) => {
              const n = t.getEdge(r.id),
                o = e.getEdge(r.id);
              (n.data.points = o ? o.data.points : []),
                o &&
                  o.data.hasOwnProperty('x') &&
                  ((n.data.x = o.data.x), (n.data.y = o.data.y));
            });
        },
        Zt = ['width', 'height', 'layer', 'fixorder'],
        Gt = { width: 0, height: 0 },
        Vt = ['minlen', 'weight', 'width', 'height', 'labeloffset'],
        Bt = {
          minlen: 1,
          weight: 1,
          width: 0,
          height: 0,
          labeloffset: 10,
          labelpos: 'r',
        },
        Ut = ['labelpos'],
        Wt = (t) => {
          const e = new o.k({ tree: [] });
          return (
            t.getAllNodes().forEach((r) => {
              const n = se(t.getNode(r.id).data),
                o = Object.assign(Object.assign({}, Gt), n),
                i = ie(o, Zt);
              e.hasNode(r.id) ||
                e.addNode({ id: r.id, data: Object.assign({}, i) });
              const a = t.hasTreeStructure('combo')
                ? t.getParent(r.id, 'combo')
                : t.getParent(r.id);
              (0, s.Z)(a) ||
                (e.hasNode(a.id) || e.addNode(Object.assign({}, a)),
                e.setParent(r.id, a.id));
            }),
            t.getAllEdges().forEach((r) => {
              const n = se(t.getEdge(r.id).data),
                o = {};
              null == Ut ||
                Ut.forEach((t) => {
                  void 0 !== n[t] && (o[t] = n[t]);
                }),
                e.addEdge({
                  id: r.id,
                  source: r.source,
                  target: r.target,
                  data: Object.assign({}, Bt, ie(n, Vt), o),
                });
            }),
            e
          );
        },
        Yt = (t, e) => {
          const { ranksep: r = 0, rankdir: n } = e;
          return (
            t.getAllNodes().forEach((t) => {
              isNaN(t.data.layer) || t.data.layer || (t.data.layer = 0);
            }),
            t.getAllEdges().forEach((t) => {
              var e;
              (t.data.minlen *= 2),
                'c' !==
                  (null === (e = t.data.labelpos) || void 0 === e
                    ? void 0
                    : e.toLowerCase()) &&
                  ('TB' === n || 'BT' === n
                    ? (t.data.width += t.data.labeloffset)
                    : (t.data.height += t.data.labeloffset));
            }),
            r / 2
          );
        },
        $t = (t) => {
          t.getAllEdges().forEach((e) => {
            if (e.data.width && e.data.height) {
              const r = t.getNode(e.source),
                n = {
                  e: e,
                  rank:
                    (t.getNode(e.target).data.rank - r.data.rank) / 2 +
                    r.data.rank,
                };
              y(t, 'edge-proxy', n, '_ep');
            }
          });
        },
        Ht = (t) => {
          let e = 0;
          return (
            t.getAllNodes().forEach((r) => {
              var n, o;
              r.data.borderTop &&
                ((r.data.minRank =
                  null === (n = t.getNode(r.data.borderTop)) || void 0 === n
                    ? void 0
                    : n.data.rank),
                (r.data.maxRank =
                  null === (o = t.getNode(r.data.borderBottom)) || void 0 === o
                    ? void 0
                    : o.data.rank),
                (e = Math.max(e, r.data.maxRank || -1 / 0)));
            }),
            e
          );
        },
        Kt = (t) => {
          t.getAllNodes().forEach((e) => {
            'edge-proxy' === e.data.dummy &&
              ((t.getEdge(e.data.e.id).data.labelRank = e.data.rank),
              t.removeNode(e.id));
          });
        },
        Jt = (t, e) => {
          let r,
            n,
            o = 0,
            i = 0;
          const { marginx: s = 0, marginy: a = 0 } = e || {},
            u = (t) => {
              if (!t.data) return;
              const e = t.data.x,
                s = t.data.y,
                a = t.data.width,
                u = t.data.height;
              isNaN(e) ||
                isNaN(a) ||
                (void 0 === r && (r = e - a / 2),
                (r = Math.min(r, e - a / 2)),
                (o = Math.max(o, e + a / 2))),
                isNaN(s) ||
                  isNaN(u) ||
                  (void 0 === n && (n = s - u / 2),
                  (n = Math.min(n, s - u / 2)),
                  (i = Math.max(i, s + u / 2)));
            };
          return (
            t.getAllNodes().forEach((t) => {
              u(t);
            }),
            t.getAllEdges().forEach((t) => {
              (null == t ? void 0 : t.data.hasOwnProperty('x')) && u(t);
            }),
            (r -= s),
            (n -= a),
            t.getAllNodes().forEach((t) => {
              (t.data.x -= r), (t.data.y -= n);
            }),
            t.getAllEdges().forEach((t) => {
              var e;
              null === (e = t.data.points) ||
                void 0 === e ||
                e.forEach((t) => {
                  (t.x -= r), (t.y -= n);
                }),
                t.data.hasOwnProperty('x') && (t.data.x -= r),
                t.data.hasOwnProperty('y') && (t.data.y -= n);
            }),
            { width: o - r + s, height: i - n + a }
          );
        },
        Qt = (t) => {
          t.getAllEdges().forEach((e) => {
            const r = t.getNode(e.source),
              n = t.getNode(e.target);
            let o, i;
            e.data.points
              ? ((o = e.data.points[0]),
                (i = e.data.points[e.data.points.length - 1]))
              : ((e.data.points = []),
                (o = { x: n.data.x, y: n.data.y }),
                (i = { x: r.data.x, y: r.data.y })),
              e.data.points.unshift(b(r.data, o)),
              e.data.points.push(b(n.data, i));
          });
        },
        Xt = (t) => {
          t.getAllEdges().forEach((t) => {
            if (t.data.hasOwnProperty('x'))
              switch (
                (('l' !== t.data.labelpos && 'r' !== t.data.labelpos) ||
                  (t.data.width -= t.data.labeloffset),
                t.data.labelpos)
              ) {
                case 'l':
                  t.data.x -= t.data.width / 2 + t.data.labeloffset;
                  break;
                case 'r':
                  t.data.x += t.data.width / 2 + t.data.labeloffset;
              }
          });
        },
        te = (t) => {
          t.getAllEdges().forEach((t) => {
            var e;
            t.data.reversed &&
              (null === (e = t.data.points) || void 0 === e || e.reverse());
          });
        },
        ee = (t) => {
          t.getAllNodes().forEach((e) => {
            var r, n, o;
            if (
              null === (r = t.getChildren(e.id)) || void 0 === r
                ? void 0
                : r.length
            ) {
              const r = t.getNode(e.id),
                i = t.getNode(r.data.borderTop),
                s = t.getNode(r.data.borderBottom),
                a = t.getNode(
                  r.data.borderLeft[
                    (null === (n = r.data.borderLeft) || void 0 === n
                      ? void 0
                      : n.length) - 1
                  ],
                ),
                u = t.getNode(
                  r.data.borderRight[
                    (null === (o = r.data.borderRight) || void 0 === o
                      ? void 0
                      : o.length) - 1
                  ],
                );
              (r.data.width =
                Math.abs(
                  (null == u ? void 0 : u.data.x) -
                    (null == a ? void 0 : a.data.x),
                ) || 10),
                (r.data.height =
                  Math.abs(
                    (null == s ? void 0 : s.data.y) -
                      (null == i ? void 0 : i.data.y),
                  ) || 10),
                (r.data.x =
                  ((null == a ? void 0 : a.data.x) || 0) + r.data.width / 2),
                (r.data.y =
                  ((null == i ? void 0 : i.data.y) || 0) + r.data.height / 2);
            }
          }),
            t.getAllNodes().forEach((e) => {
              'border' === e.data.dummy && t.removeNode(e.id);
            });
        },
        re = (t) => {
          t.getAllEdges().forEach((e) => {
            if (e.source === e.target) {
              const r = t.getNode(e.source);
              r.data.selfEdges || (r.data.selfEdges = []),
                r.data.selfEdges.push(e),
                t.removeEdge(e.id);
            }
          });
        },
        ne = (t) => {
          const e = E(t);
          null == e ||
            e.forEach((e) => {
              let r = 0;
              null == e ||
                e.forEach((e, n) => {
                  var o;
                  const i = t.getNode(e);
                  (i.data.order = n + r),
                    null === (o = i.data.selfEdges) ||
                      void 0 === o ||
                      o.forEach((e) => {
                        y(
                          t,
                          'selfedge',
                          {
                            width: e.data.width,
                            height: e.data.height,
                            rank: i.data.rank,
                            order: n + ++r,
                            e: e,
                          },
                          '_se',
                        );
                      }),
                    delete i.data.selfEdges;
                });
            });
        },
        oe = (t) => {
          t.getAllNodes().forEach((e) => {
            const r = t.getNode(e.id);
            if ('selfedge' === r.data.dummy) {
              const n = t.getNode(r.data.e.source),
                o = n.data.x + n.data.width / 2,
                i = n.data.y,
                s = r.data.x - o,
                a = n.data.height / 2;
              t.hasEdge(r.data.e.id)
                ? t.updateEdgeData(r.data.e.id, r.data.e.data)
                : t.addEdge({
                    id: r.data.e.id,
                    source: r.data.e.source,
                    target: r.data.e.target,
                    data: r.data.e.data,
                  }),
                t.removeNode(e.id),
                (r.data.e.data.points = [
                  { x: o + (2 * s) / 3, y: i - a },
                  { x: o + (5 * s) / 6, y: i - a },
                  { y: i, x: o + s },
                  { x: o + (5 * s) / 6, y: i + a },
                  { x: o + (2 * s) / 3, y: i + a },
                ]),
                (r.data.e.data.x = r.data.x),
                (r.data.e.data.y = r.data.y);
            }
          });
        },
        ie = (t, e) => {
          const r = {};
          return (
            null == e ||
              e.forEach((e) => {
                void 0 !== t[e] && (r[e] = +t[e]);
              }),
            r
          );
        },
        se = (t = {}) => {
          const e = {};
          return (
            Object.keys(t).forEach((r) => {
              e[r.toLowerCase()] = t[r];
            }),
            e
          );
        };
      var ae = r(78732),
        ue = r(98130);
      const de = {
        rankdir: 'TB',
        nodesep: 50,
        ranksep: 50,
        edgeLabelSpace: !0,
        ranker: 'tight-tree',
        controlPoints: !1,
        radial: !1,
        focusNode: null,
      };
      class he {
        constructor(t = {}) {
          (this.options = t),
            (this.id = 'antv-dagre'),
            (this.options = Object.assign(Object.assign({}, de), t));
        }
        execute(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.genericDagreLayout(!1, t, e);
          });
        }
        assign(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield this.genericDagreLayout(!0, t, e);
          });
        }
        genericDagreLayout(t, e, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = Object.assign(Object.assign({}, this.options), r),
              {
                nodeSize: s,
                align: a,
                rankdir: u = 'TB',
                ranksep: d,
                nodesep: h,
                ranksepFunc: c,
                nodesepFunc: l,
                edgeLabelSpace: f,
                ranker: g,
                nodeOrder: v,
                begin: p,
                controlPoints: m,
                radial: y,
                sortByCombo: w,
                preset: x,
              } = n,
              b = new o.k({ tree: [] }),
              E = (0, ae.jE)(d || 50, c),
              N = (0, ae.jE)(h || 50, l);
            let M = N,
              k = E;
            ('LR' !== u && 'RL' !== u) || ((M = E), (k = N));
            const _ = (0, ae.gl)(s, void 0),
              S = e.getAllNodes(),
              A = e.getAllEdges();
            let O;
            S.forEach((t) => {
              const e = _(t),
                r = k(t),
                n = e + 2 * M(t),
                o = e + 2 * r,
                s = t.data.layer;
              (0, i.Z)(s)
                ? b.addNode({
                    id: t.id,
                    data: { width: n, height: o, layer: s },
                  })
                : b.addNode({ id: t.id, data: { width: n, height: o } });
            }),
              w &&
                (b.attachTreeStructure('combo'),
                S.forEach((t) => {
                  const { parentId: e } = t.data;
                  void 0 !== e && b.hasNode(e) && b.setParent(t.id, e, 'combo');
                })),
              A.forEach((t) => {
                b.addEdge({
                  id: t.id,
                  source: t.source,
                  target: t.target,
                  data: { weight: t.data.weight || 1 },
                });
              }),
              (null == x ? void 0 : x.length) && (O = new o.k({ nodes: x })),
              ((t, e) => {
                const {
                  edgeLabelSpace: r,
                  keepNodeOrder: n,
                  prevGraph: o,
                  rankdir: i,
                  ranksep: s,
                } = e;
                !n && o && Ft(t, o);
                const a = Wt(t);
                let u;
                r && (e.ranksep = Yt(a, { rankdir: i, ranksep: s }));
                try {
                  u = Lt(a, e);
                } catch (t) {
                  if (
                    'Not possible to find intersection inside of the rectangle' ===
                    t.message
                  )
                    return void console.error(
                      "The following error may be caused by improper layer setting, please make sure your manual layer setting does not violate the graph's structure:\n",
                      t,
                    );
                  throw t;
                }
                qt(t, a);
              })(b, {
                prevGraph: O,
                edgeLabelSpace: f,
                keepNodeOrder: !!v,
                nodeOrder: v || [],
                acyclicer: 'greedy',
                ranker: g,
                rankdir: u,
                nodesep: h,
                align: a,
              });
            const R = [0, 0];
            if (p) {
              let t = 1 / 0,
                e = 1 / 0;
              b.getAllNodes().forEach((r) => {
                t > r.data.x && (t = r.data.x), e > r.data.y && (e = r.data.y);
              }),
                b.getAllEdges().forEach((r) => {
                  var n;
                  null === (n = r.data.points) ||
                    void 0 === n ||
                    n.forEach((r) => {
                      t > r.x && (t = r.x), e > r.y && (e = r.y);
                    });
                }),
                (R[0] = p[0] - t),
                (R[1] = p[1] - e);
            }
            const z = 'LR' === u || 'RL' === u;
            if (y);
            else {
              const t = new Set(),
                e =
                  'BT' === u || 'RL' === u ? (t, e) => e - t : (t, e) => t - e;
              b.getAllNodes().forEach((e) => {
                (e.data.x = e.data.x + R[0]),
                  (e.data.y = e.data.y + R[1]),
                  t.add(z ? e.data.x : e.data.y);
              });
              const r = Array.from(t).sort(e),
                n = z ? (t, e) => t.x !== e.x : (t, e) => t.y !== e.y,
                o = z
                  ? (t, e, r) => {
                      const n = Math.max(e.y, r.y),
                        o = Math.min(e.y, r.y);
                      return t.filter((t) => t.y <= n && t.y >= o);
                    }
                  : (t, e, r) => {
                      const n = Math.max(e.x, r.x),
                        o = Math.min(e.x, r.x);
                      return t.filter((t) => t.x <= n && t.x >= o);
                    };
              b.getAllEdges().forEach((t, e) => {
                var i;
                f &&
                  m &&
                  'loop' !== t.data.type &&
                  (t.data.controlPoints = ce(
                    null === (i = t.data.points) || void 0 === i
                      ? void 0
                      : i.map(({ x: t, y: e }) => ({
                          x: t + R[0],
                          y: e + R[1],
                        })),
                    b.getNode(t.source),
                    b.getNode(t.target),
                    r,
                    z,
                    n,
                    o,
                  ));
              });
            }
            let I = [];
            I = b.getAllNodes().map((t) => (0, ue.u)(t));
            const j = b.getAllEdges();
            t &&
              (I.forEach((t) => {
                e.mergeNodeData(t.id, { x: t.data.x, y: t.data.y });
              }),
              j.forEach((t) => {
                e.mergeEdgeData(t.id, { controlPoints: t.data.controlPoints });
              }));
            return { nodes: I, edges: j };
          });
        }
      }
      const ce = (t, e, r, n, o, i, s) => {
        let a = (null == t ? void 0 : t.slice(1, t.length - 1)) || [];
        if (e && r) {
          let { x: t, y: u } = e.data,
            { x: d, y: h } = r.data;
          if (
            (o &&
              ((t = e.data.y), (u = e.data.x), (d = r.data.y), (h = r.data.x)),
            h !== u && t !== d)
          ) {
            const c = n.indexOf(u),
              l = n[c + 1];
            if (l) {
              const t = a[0],
                e = o
                  ? { x: (u + l) / 2, y: (null == t ? void 0 : t.y) || d }
                  : { x: (null == t ? void 0 : t.x) || d, y: (u + l) / 2 };
              (t && !i(t, e)) || a.unshift(e);
            }
            const f = n.indexOf(h),
              g = Math.abs(f - c);
            if (1 === g)
              (a = s(a, e.data, r.data)),
                a.length ||
                  a.push(
                    o ? { x: (u + h) / 2, y: t } : { x: t, y: (u + h) / 2 },
                  );
            else if (g > 1) {
              const e = n[f - 1];
              if (e) {
                const r = a[a.length - 1],
                  n = o
                    ? { x: (h + e) / 2, y: (null == r ? void 0 : r.y) || d }
                    : { x: (null == r ? void 0 : r.x) || t, y: (h + e) / 2 };
                (r && !i(r, n)) || a.push(n);
              }
            }
          }
        }
        return a;
      };
    },
    63795: function (t, e, r) {
      'use strict';
      r.d(e, {
        S: function () {
          return u;
        },
      });
      var n = r(97582),
        o = r(78732),
        i = r(98130),
        s = r(20464);
      const a = {
        radius: null,
        startRadius: null,
        endRadius: null,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        clockwise: !0,
        divisions: 1,
        ordering: null,
        angleRatio: 1,
      };
      class u {
        constructor(t = {}) {
          (this.options = t),
            (this.id = 'circular'),
            (this.options = Object.assign(Object.assign({}, a), t));
        }
        execute(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.genericCircularLayout(!1, t, e);
          });
        }
        assign(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield this.genericCircularLayout(!0, t, e);
          });
        }
        genericCircularLayout(t, e, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = Object.assign(Object.assign({}, this.options), r),
              {
                width: a,
                height: u,
                center: c,
                divisions: l,
                startAngle: f = 0,
                endAngle: g = 2 * Math.PI,
                angleRatio: v,
                ordering: p,
                clockwise: m,
                nodeSpacing: y,
                nodeSize: w,
              } = n,
              x = e.getAllNodes(),
              b = e.getAllEdges(),
              [E, N, M] = h(a, u, c),
              k = null == x ? void 0 : x.length;
            if (!k || 1 === k) return (0, s.P)(e, t, M);
            const _ = (g - f) / k;
            let { radius: S, startRadius: A, endRadius: O } = n;
            if (y) {
              const t = (0, o.jE)(10, y),
                e = (0, o.tO)(10, w);
              let r = -1 / 0;
              x.forEach((t) => {
                const n = e(t);
                r < n && (r = n);
              });
              let n = 0;
              x.forEach((e, o) => {
                n += 0 === o ? r || 10 : (t(e) || 0) + (r || 10);
              }),
                (S = n / (2 * Math.PI));
            } else
              S || A || O
                ? !A && O
                  ? (A = O)
                  : A && !O && (O = A)
                : (S = Math.min(N, E) / 2);
            const R = _ * v;
            let z = [];
            z =
              'topology' === p
                ? d(e, x)
                : 'topology-directed' === p
                  ? d(e, x, !0)
                  : 'degree' === p
                    ? (function (t, e) {
                        const r = [];
                        return (
                          e.forEach((t, e) => {
                            r.push((0, i.u)(t));
                          }),
                          r.sort(
                            (e, r) =>
                              t.getDegree(e.id, 'both') -
                              t.getDegree(r.id, 'both'),
                          ),
                          r
                        );
                      })(e, x)
                    : x.map((t) => (0, i.u)(t));
            const I = Math.ceil(k / l);
            for (let t = 0; t < k; ++t) {
              let e = S;
              e ||
                null === A ||
                null === O ||
                (e = A + (t * (O - A)) / (k - 1)),
                e || (e = 10 + (100 * t) / (k - 1));
              let r = f + (t % I) * R + ((2 * Math.PI) / l) * Math.floor(t / I);
              m ||
                (r = g - (t % I) * R - ((2 * Math.PI) / l) * Math.floor(t / I)),
                (z[t].data.x = M[0] + Math.cos(r) * e),
                (z[t].data.y = M[1] + Math.sin(r) * e);
            }
            t &&
              z.forEach((t) => {
                e.mergeNodeData(t.id, { x: t.data.x, y: t.data.y });
              });
            return { nodes: z, edges: b };
          });
        }
      }
      const d = (t, e, r = !1) => {
        const n = [(0, i.u)(e[0])],
          o = {},
          s = e.length;
        o[e[0].id] = !0;
        let a = 0;
        return (
          e.forEach((u, d) => {
            if (0 !== d)
              if (
                (d !== s - 1 &&
                  t.getDegree(u.id, 'both') ===
                    t.getDegree(e[d + 1].id, 'both') &&
                  !t.areNeighbors(n[a].id, u.id)) ||
                o[u.id]
              ) {
                const d = r
                  ? t.getSuccessors(n[a].id)
                  : t.getNeighbors(n[a].id);
                let h = !1;
                for (let e = 0; e < d.length; e++) {
                  const r = d[e];
                  if (t.getDegree(r.id) === t.getDegree(u.id) && !o[r.id]) {
                    n.push((0, i.u)(r)), (o[r.id] = !0), (h = !0);
                    break;
                  }
                }
                let c = 0;
                for (
                  ;
                  !h &&
                  (o[e[c].id] ||
                    (n.push((0, i.u)(e[c])), (o[e[c].id] = !0), (h = !0)),
                  c++,
                  c !== s);

                );
              } else n.push((0, i.u)(u)), (o[u.id] = !0), a++;
          }),
          n
        );
      };
      const h = (t, e, r) => {
        let n = t,
          o = e,
          i = r;
        return (
          n || 'undefined' == typeof window || (n = window.innerWidth),
          o || 'undefined' == typeof window || (o = window.innerHeight),
          i || (i = [n / 2, o / 2]),
          [n, o, i]
        );
      };
    },
    39233: function (t, e, r) {
      'use strict';
      r.d(e, {
        u: function () {
          return p;
        },
      });
      var n = r(97582),
        o = r(72137),
        i = r(25897),
        s = r(45607),
        a = r(4637),
        u = r(5192),
        d = r(12368),
        h = r(64912),
        c = r(80628),
        l = r(85087),
        f = r(20464);
      const g = {
          gForce: !0,
          force2: !0,
          d3force: !0,
          fruchterman: !0,
          forceAtlas2: !0,
          force: !0,
          'graphin-force': !0,
        },
        v = { center: [0, 0], comboPadding: 10, treeKey: 'combo' };
      class p {
        constructor(t = {}) {
          (this.options = t),
            (this.id = 'comboCombined'),
            (this.options = Object.assign(Object.assign({}, v), t));
        }
        execute(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.genericComboCombinedLayout(!1, t, e);
          });
        }
        assign(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield this.genericComboCombinedLayout(!0, t, e);
          });
        }
        genericComboCombinedLayout(t, e, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = this.initVals(
                Object.assign(Object.assign({}, this.options), r),
              ),
              { center: i, treeKey: s, outerLayout: a } = n,
              l = e.getAllNodes().filter((t) => !t.data._isCombo),
              v = e.getAllNodes().filter((t) => t.data._isCombo),
              p = e.getAllEdges(),
              m = null == l ? void 0 : l.length;
            if (!m || 1 === m) return (0, f.P)(e, t, i);
            const y = [],
              w = new Map();
            l.forEach((t) => {
              w.set(t.id, t);
            });
            const x = new Map();
            v.forEach((t) => {
              x.set(t.id, t);
            });
            const b = new Map(),
              E = this.getInnerGraphs(e, s, w, x, p, n, b);
            yield Promise.all(E);
            const N = new Map(),
              M = [],
              k = new Map();
            let _ = !0;
            e.getRoots(s).forEach((t) => {
              const r = b.get(t.id),
                n = x.get(t.id) || w.get(t.id),
                o = {
                  id: t.id,
                  data: Object.assign(Object.assign({}, t.data), {
                    x: r.data.x || n.data.x,
                    y: r.data.y || n.data.y,
                    fx: r.data.fx || n.data.fx,
                    fy: r.data.fy || n.data.fy,
                    mass: r.data.mass || n.data.mass,
                    size: r.data.size,
                  }),
                };
              M.push(o),
                N.set(t.id, !0),
                isNaN(o.data.x) ||
                0 === o.data.x ||
                isNaN(o.data.y) ||
                0 === o.data.y
                  ? ((o.data.x = 100 * Math.random()),
                    (o.data.y = 100 * Math.random()))
                  : (_ = !1),
                (0, c._)(
                  e,
                  [t],
                  (e) => {
                    e.id !== t.id && k.set(e.id, t.id);
                  },
                  'TB',
                  s,
                );
            });
            const S = [];
            let A;
            if (
              (p.forEach((t) => {
                const e = k.get(t.source) || t.source,
                  r = k.get(t.target) || t.target;
                e !== r &&
                  N.has(e) &&
                  N.has(r) &&
                  S.push({ id: t.id, source: e, target: r, data: {} });
              }),
              null == M ? void 0 : M.length)
            ) {
              if (1 === M.length) (M[0].data.x = i[0]), (M[0].data.y = i[1]);
              else {
                const t = new o.k({ nodes: M, edges: S }),
                  e = a || new d.y();
                if (_ && g[e.id]) {
                  const e = M.length < 100 ? new h.A() : new u.W();
                  yield e.assign(t);
                }
                A = yield e.execute(
                  t,
                  Object.assign(
                    { center: i, kg: 5, preventOverlap: !0, animate: !1 },
                    'force' === e.id
                      ? {
                          gravity: 1,
                          factor: 4,
                          linkDistance: (t, e, r) =>
                            (Math.max(...e.data.size) || 32) / 2 +
                            (Math.max(...r.data.size) || 32) / 2 +
                            200,
                        }
                      : {},
                  ),
                );
              }
              b.forEach((t) => {
                var e;
                const r = A.nodes.find((e) => e.id === t.id);
                if (r) {
                  const { x: e, y: n } = r.data;
                  (t.data.visited = !0),
                    (t.data.x = e),
                    (t.data.y = n),
                    y.push({ id: t.id, data: { x: e, y: n } });
                }
                const { x: n, y: o } = t.data;
                null === (e = t.data.nodes) ||
                  void 0 === e ||
                  e.forEach((t) => {
                    y.push({
                      id: t.id,
                      data: { x: t.data.x + n, y: t.data.y + o },
                    });
                  });
              }),
                b.forEach(({ data: t }) => {
                  const { x: e, y: r, visited: n, nodes: o } = t;
                  null == o ||
                    o.forEach((t) => {
                      if (!n) {
                        const n = y.find((e) => e.id === t.id);
                        (n.data.x += e || 0), (n.data.y += r || 0);
                      }
                    });
                });
            }
            t &&
              y.forEach((t) => {
                e.mergeNodeData(t.id, { x: t.data.x, y: t.data.y });
              });
            return { nodes: y, edges: p };
          });
        }
        initVals(t) {
          const e = Object.assign({}, t),
            { nodeSize: r, spacing: n, comboPadding: o } = t;
          let u, d, h;
          if (
            ((d = (0, i.Z)(n) ? () => n : (0, s.Z)(n) ? n : () => 0),
            (e.spacing = d),
            r)
          )
            if ((0, s.Z)(r))
              u = (t) => {
                const e = r(t),
                  n = d(t);
                if ((0, l.k)(t.size)) {
                  return (
                    ((t.size[0] > t.size[1] ? t.size[0] : t.size[1]) + n) / 2
                  );
                }
                return ((e || 32) + n) / 2;
              };
            else if ((0, l.k)(r)) {
              const t = (r[0] > r[1] ? r[0] : r[1]) / 2;
              u = (e) => t + d(e) / 2;
            } else {
              const t = r / 2;
              u = (e) => t + d(e) / 2;
            }
          else
            u = (t) => {
              const e = d(t);
              if (t.size) {
                if ((0, l.k)(t.size)) {
                  return (
                    ((t.size[0] > t.size[1] ? t.size[0] : t.size[1]) + e) / 2
                  );
                }
                if ((0, a.Z)(t.size)) {
                  return (
                    ((t.size.width > t.size.height
                      ? t.size.width
                      : t.size.height) +
                      e) /
                    2
                  );
                }
                return (t.size + e) / 2;
              }
              return 32 + e / 2;
            };
          return (
            (e.nodeSize = u),
            (h = (0, i.Z)(o)
              ? () => o
              : (0, l.k)(o)
                ? () => Math.max.apply(null, o)
                : (0, s.Z)(o)
                  ? o
                  : () => 0),
            (e.comboPadding = h),
            e
          );
        }
        getInnerGraphs(t, e, r, s, a, d, h) {
          const {
              nodeSize: f,
              comboPadding: g,
              spacing: v,
              innerLayout: p,
            } = d,
            m = p || new u.W({}),
            y = { center: [0, 0], preventOverlap: !0, nodeSpacing: v },
            w = [],
            x = (t) => {
              let e = (null == g ? void 0 : g(t)) || 10;
              return (
                (0, l.k)(e) && (e = Math.max(...e)),
                { size: e ? [2 * e, 2 * e] : [30, 30], padding: e }
              );
            };
          return (
            t.getRoots(e).forEach((u) => {
              h.set(u.id, { id: u.id, data: { nodes: [], size: x(u).size } });
              let d = Promise.resolve();
              (0, c._)(
                t,
                [u],
                (u) => {
                  var l;
                  if (!u.data._isCombo) return;
                  const { size: g, padding: v } = x(u);
                  if (
                    null === (l = t.getChildren(u.id, e)) || void 0 === l
                      ? void 0
                      : l.length
                  ) {
                    const l = h.get(u.id);
                    h.set(u.id, {
                      id: u.id,
                      data: Object.assign(
                        { nodes: [] },
                        null == l ? void 0 : l.data,
                      ),
                    });
                    const g = new Map(),
                      p = t.getChildren(u.id, e).map((t) => {
                        if (t.data._isCombo)
                          return (
                            h.has(t.id) ||
                              h.set(t.id, {
                                id: t.id,
                                data: Object.assign({}, t.data),
                              }),
                            g.set(t.id, !0),
                            h.get(t.id)
                          );
                        const e = r.get(t.id) || s.get(t.id);
                        return (
                          g.set(t.id, !0),
                          {
                            id: t.id,
                            data: Object.assign(
                              Object.assign({}, e.data),
                              t.data,
                            ),
                          }
                        );
                      }),
                      w = {
                        nodes: p,
                        edges: a.filter(
                          (t) => g.has(t.source) && g.has(t.target),
                        ),
                      };
                    let x = 1 / 0;
                    p.forEach((t) => {
                      var e;
                      let { size: r } = t.data;
                      r ||
                        (r = (null === (e = h.get(t.id)) || void 0 === e
                          ? void 0
                          : e.data.size) ||
                          (null == f ? void 0 : f(t)) || [30, 30]),
                        (0, i.Z)(r) && (r = [r, r]);
                      const [n, o] = r;
                      x > n && (x = n), x > o && (x = o), (t.data.size = r);
                    }),
                      (d = d.then(() =>
                        (0, n.mG)(this, void 0, void 0, function* () {
                          const t = new o.k(w),
                            e = yield m.assign(t, y),
                            {
                              minX: r,
                              minY: n,
                              maxX: i,
                              maxY: s,
                            } = (0, c.H0)(p),
                            a = (i + r) / 2,
                            d = (s + n) / 2;
                          w.nodes.forEach((t) => {
                            (t.data.x -= a), (t.data.y -= d);
                          });
                          const l = [
                            Math.max(i - r, x) + 2 * v,
                            Math.max(s - n, x) + 2 * v,
                          ];
                          return (
                            (h.get(u.id).data.size = l),
                            (h.get(u.id).data.nodes = p),
                            e
                          );
                        }),
                      ));
                  } else
                    h.set(u.id, {
                      id: u.id,
                      data: Object.assign(Object.assign({}, u.data), {
                        size: g,
                      }),
                    });
                  return !0;
                },
                'BT',
                e,
              ),
                w.push(d);
            }),
            w
          );
        }
      }
    },
    5192: function (t, e, r) {
      'use strict';
      r.d(e, {
        W: function () {
          return l;
        },
      });
      var n = r(97582),
        o = r(45607),
        i = r(25897),
        s = r(4637),
        a = r(76714),
        u = r(85087),
        d = r(98130),
        h = r(20464);
      const c = {
        nodeSize: 30,
        nodeSpacing: 10,
        preventOverlap: !1,
        sweep: void 0,
        equidistant: !1,
        startAngle: 1.5 * Math.PI,
        clockwise: !0,
        maxLevelDiff: void 0,
        sortBy: 'degree',
      };
      class l {
        constructor(t = {}) {
          (this.options = t),
            (this.id = 'concentric'),
            (this.options = Object.assign(Object.assign({}, c), t));
        }
        execute(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.genericConcentricLayout(!1, t, e);
          });
        }
        assign(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield this.genericConcentricLayout(!0, t, e);
          });
        }
        genericConcentricLayout(t, e, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = Object.assign(Object.assign({}, this.options), r),
              {
                center: c,
                width: l,
                height: f,
                sortBy: g,
                maxLevelDiff: v,
                sweep: p,
                clockwise: m,
                equidistant: y,
                preventOverlap: w,
                startAngle: x = 1.5 * Math.PI,
                nodeSize: b,
                nodeSpacing: E,
              } = n,
              N = e.getAllNodes(),
              M = e.getAllEdges(),
              k = l || 'undefined' == typeof window ? l : window.innerWidth,
              _ = f || 'undefined' == typeof window ? f : window.innerHeight,
              S = c || [k / 2, _ / 2];
            if (!(null == N ? void 0 : N.length) || 1 === N.length)
              return (0, h.P)(e, t, S);
            const A = [];
            let O,
              R = 0;
            (0, u.k)(b)
              ? (O = Math.max(b[0], b[1]))
              : (0, o.Z)(b)
                ? ((O = -1 / 0),
                  N.forEach((t) => {
                    const e = b(t);
                    e > O && (O = e);
                  }))
                : (O = b),
              (0, u.k)(E) ? (R = Math.max(E[0], E[1])) : (0, i.Z)(E) && (R = E),
              N.forEach((t) => {
                const e = (0, d.u)(t);
                A.push(e);
                let r = O;
                const { data: n } = e;
                (0, u.k)(n.size)
                  ? (r = Math.max(n.size[0], n.size[1]))
                  : (0, i.Z)(n.size)
                    ? (r = n.size)
                    : (0, s.Z)(n.size) &&
                      (r = Math.max(n.size.width, n.size.height)),
                  (O = Math.max(O, r)),
                  (0, o.Z)(E) && (R = Math.max(E(t), R));
              });
            const z = {};
            A.forEach((t, e) => {
              z[t.id] = e;
            });
            let I = g;
            ((0, a.Z)(I) && void 0 !== A[0].data[I]) || (I = 'degree'),
              'degree' === I
                ? A.sort(
                    (t, r) =>
                      e.getDegree(r.id, 'both') - e.getDegree(t.id, 'both'),
                  )
                : A.sort((t, e) => e.data[I] - t.data[I]);
            const j = A[0],
              C =
                (v ||
                  ('degree' === I ? e.getDegree(j.id, 'both') : j.data[I])) / 4,
              D = [{ nodes: [] }];
            let T = D[0];
            A.forEach((t) => {
              if (T.nodes.length > 0) {
                const r =
                  'degree' === I
                    ? Math.abs(
                        e.getDegree(T.nodes[0].id, 'both') -
                          e.getDegree(t.id, 'both'),
                      )
                    : Math.abs(T.nodes[0].data[I] - t.data[I]);
                C && r >= C && ((T = { nodes: [] }), D.push(T));
              }
              T.nodes.push(t);
            });
            let P = O + R;
            if (!w) {
              const t = D.length > 0 && D[0].nodes.length > 1,
                e = (Math.min(k, _) / 2 - P) / (D.length + (t ? 1 : 0));
              P = Math.min(P, e);
            }
            let L = 0;
            if (
              (D.forEach((t) => {
                const e =
                  void 0 === p
                    ? 2 * Math.PI - (2 * Math.PI) / t.nodes.length
                    : p;
                if (
                  ((t.dTheta = e / Math.max(1, t.nodes.length - 1)),
                  t.nodes.length > 1 && w)
                ) {
                  const e = Math.cos(t.dTheta) - Math.cos(0),
                    r = Math.sin(t.dTheta) - Math.sin(0),
                    n = Math.sqrt((P * P) / (e * e + r * r));
                  L = Math.max(n, L);
                }
                (t.r = L), (L += P);
              }),
              y)
            ) {
              let t = 0,
                e = 0;
              for (let r = 0; r < D.length; r++) {
                const n = (D[r].r || 0) - e;
                t = Math.max(t, n);
              }
              (e = 0),
                D.forEach((r, n) => {
                  0 === n && (e = r.r || 0), (r.r = e), (e += t);
                });
            }
            D.forEach((t) => {
              const e = t.dTheta || 0,
                r = t.r || 0;
              t.nodes.forEach((t, n) => {
                const o = x + (m ? 1 : -1) * e * n;
                (t.data.x = S[0] + r * Math.cos(o)),
                  (t.data.y = S[1] + r * Math.sin(o));
              });
            }),
              t &&
                A.forEach((t) =>
                  e.mergeNodeData(t.id, { x: t.data.x, y: t.data.y }),
                );
            return { nodes: A, edges: M };
          });
        }
      }
    },
    55982: function (t, e, r) {
      'use strict';
      r.d(e, {
        j: function () {
          return w;
        },
      });
      var n = r(97582),
        o = r(83787),
        i = r(23413),
        s = r(56561),
        a = r(65475),
        u = r(68505),
        d = r(81269),
        h = r(13548),
        c = r(79778);
      function l(t) {
        return t.x + t.vx;
      }
      function f(t) {
        return t.y + t.vy;
      }
      function g(t) {
        var e,
          r,
          n,
          o = 1,
          i = 1;
        function s() {
          for (var t, s, u, h, g, v, p, m = e.length, y = 0; y < i; ++y)
            for (s = (0, d.Z)(e, l, f).visitAfter(a), t = 0; t < m; ++t)
              (u = e[t]),
                (v = r[u.index]),
                (p = v * v),
                (h = u.x + u.vx),
                (g = u.y + u.vy),
                s.visit(w);
          function w(t, e, r, i, s) {
            var a = t.data,
              d = t.r,
              l = v + d;
            if (!a) return e > h + l || i < h - l || r > g + l || s < g - l;
            if (a.index > u.index) {
              var f = h - a.x - a.vx,
                m = g - a.y - a.vy,
                y = f * f + m * m;
              y < l * l &&
                (0 === f && (y += (f = (0, c.Z)(n)) * f),
                0 === m && (y += (m = (0, c.Z)(n)) * m),
                (y = ((l - (y = Math.sqrt(y))) / y) * o),
                (u.vx += (f *= y) * (l = (d *= d) / (p + d))),
                (u.vy += (m *= y) * l),
                (a.vx -= f * (l = 1 - l)),
                (a.vy -= m * l));
            }
          }
        }
        function a(t) {
          if (t.data) return (t.r = r[t.data.index]);
          for (var e = (t.r = 0); e < 4; ++e)
            t[e] && t[e].r > t.r && (t.r = t[e].r);
        }
        function u() {
          if (e) {
            var n,
              o,
              i = e.length;
            for (r = new Array(i), n = 0; n < i; ++n)
              (o = e[n]), (r[o.index] = +t(o, n, e));
          }
        }
        return (
          'function' != typeof t && (t = (0, h.Z)(null == t ? 1 : +t)),
          (s.initialize = function (t, r) {
            (e = t), (n = r), u();
          }),
          (s.iterations = function (t) {
            return arguments.length ? ((i = +t), s) : i;
          }),
          (s.strength = function (t) {
            return arguments.length ? ((o = +t), s) : o;
          }),
          (s.radius = function (e) {
            return arguments.length
              ? ((t = 'function' == typeof e ? e : (0, h.Z)(+e)), u(), s)
              : t;
          }),
          s
        );
      }
      function v(t, e, r) {
        var n,
          o,
          i,
          s = (0, h.Z)(0.1);
        function a(t) {
          for (var s = 0, a = n.length; s < a; ++s) {
            var u = n[s],
              d = u.x - e || 1e-6,
              h = u.y - r || 1e-6,
              c = Math.sqrt(d * d + h * h),
              l = ((i[s] - c) * o[s] * t) / c;
            (u.vx += d * l), (u.vy += h * l);
          }
        }
        function u() {
          if (n) {
            var e,
              r = n.length;
            for (o = new Array(r), i = new Array(r), e = 0; e < r; ++e)
              (i[e] = +t(n[e], e, n)),
                (o[e] = isNaN(i[e]) ? 0 : +s(n[e], e, n));
          }
        }
        return (
          'function' != typeof t && (t = (0, h.Z)(+t)),
          null == e && (e = 0),
          null == r && (r = 0),
          (a.initialize = function (t) {
            (n = t), u();
          }),
          (a.strength = function (t) {
            return arguments.length
              ? ((s = 'function' == typeof t ? t : (0, h.Z)(+t)), u(), a)
              : s;
          }),
          (a.radius = function (e) {
            return arguments.length
              ? ((t = 'function' == typeof e ? e : (0, h.Z)(+e)), u(), a)
              : t;
          }),
          (a.x = function (t) {
            return arguments.length ? ((e = +t), a) : e;
          }),
          (a.y = function (t) {
            return arguments.length ? ((r = +t), a) : r;
          }),
          a
        );
      }
      var p = r(70341),
        m = r(12688),
        y = r(48917);
      class w {
        constructor(t) {
          (this.id = 'd3-force'),
            (this.config = {
              inputNodeAttrs: ['x', 'y', 'vx', 'vy', 'fx', 'fy'],
              outputNodeAttrs: ['x', 'y', 'vx', 'vy'],
              simulationAttrs: [
                'alpha',
                'alphaMin',
                'alphaDecay',
                'alphaTarget',
                'velocityDecay',
                'randomSource',
              ],
            }),
            (this.forceMap = {
              link: s.Z,
              manyBody: a.Z,
              center: u.Z,
              collide: g,
              radial: v,
              x: p.Z,
              y: m.Z,
            }),
            (this.options = {
              link: { id: (t) => t.id },
              manyBody: {},
              center: { x: 0, y: 0 },
            }),
            (this.context = { options: {}, assign: !1, nodes: [], edges: [] }),
            (0, o.Z)(this.options, t),
            this.options.forceSimulation &&
              (this.simulation = this.options.forceSimulation);
        }
        execute(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.genericLayout(!1, t, e);
          });
        }
        assign(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield this.genericLayout(!0, t, e);
          });
        }
        stop() {
          this.simulation.stop();
        }
        tick(t) {
          return this.simulation.tick(t), this.getResult();
        }
        restart() {
          this.simulation.restart();
        }
        setFixedPosition(t, e) {
          const r = this.context.nodes.find((e) => e.id === t);
          r &&
            e.forEach((t, e) => {
              if ('number' == typeof t || null === t) {
                r[['fx', 'fy', 'fz'][e]] = t;
              }
            });
        }
        getOptions(t) {
          var e, r;
          const n = (0, o.Z)({}, this.options, t);
          return (
            n.collide &&
              void 0 ===
                (null === (e = n.collide) || void 0 === e
                  ? void 0
                  : e.radius) &&
              ((n.collide = n.collide || {}),
              (n.collide.radius =
                null !== (r = n.nodeSize) && void 0 !== r ? r : 10)),
            void 0 === n.iterations &&
              (n.link &&
                void 0 === n.link.iterations &&
                (n.iterations = n.link.iterations),
              n.collide &&
                void 0 === n.collide.iterations &&
                (n.iterations = n.collide.iterations)),
            (this.context.options = n),
            n
          );
        }
        genericLayout(t, e, r) {
          var o;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = this.getOptions(r),
              s = e
                .getAllNodes()
                .map(({ id: t, data: e }) =>
                  Object.assign(
                    { id: t, data: e },
                    (0, i.Z)(e, this.config.inputNodeAttrs),
                  ),
                ),
              a = e.getAllEdges().map((t) => Object.assign({}, t));
            Object.assign(this.context, {
              assign: t,
              nodes: s,
              edges: a,
              graph: e,
            });
            const u = new Promise((t) => {
                this.resolver = t;
              }),
              d = this.setSimulation(n);
            return (
              d.nodes(s),
              null === (o = d.force('link')) || void 0 === o || o.links(a),
              u
            );
          });
        }
        getResult() {
          const { assign: t, nodes: e, edges: r, graph: n } = this.context,
            o = e.map((t) => ({
              id: t.id,
              data: Object.assign(
                Object.assign({}, t.data),
                (0, i.Z)(t, this.config.outputNodeAttrs),
              ),
            })),
            s = r.map(({ id: t, source: e, target: r, data: n }) => ({
              id: t,
              source: 'object' == typeof e ? e.id : e,
              target: 'object' == typeof r ? r.id : r,
              data: n,
            }));
          return (
            t && o.forEach((t) => n.mergeNodeData(t.id, t.data)),
            { nodes: o, edges: s }
          );
        }
        initSimulation() {
          return (0, y.Z)();
        }
        setSimulation(t) {
          const e =
            this.simulation ||
            this.options.forceSimulation ||
            this.initSimulation();
          return (
            this.simulation ||
              (this.simulation = e
                .on('tick', () => {
                  var e;
                  return null === (e = t.onTick) || void 0 === e
                    ? void 0
                    : e.call(t, this.getResult());
                })
                .on('end', () => {
                  var t;
                  return null === (t = this.resolver) || void 0 === t
                    ? void 0
                    : t.call(this, this.getResult());
                })),
            x(
              e,
              this.config.simulationAttrs.map((e) => [e, t[e]]),
            ),
            Object.entries(this.forceMap).forEach(([r, n]) => {
              const o = r;
              if (t[r]) {
                let r = e.force(o);
                r || ((r = n()), e.force(o, r)), x(r, Object.entries(t[o]));
              } else e.force(o, null);
            }),
            e
          );
        }
      }
      const x = (t, e) =>
        e.reduce(
          (e, [r, n]) => (e[r] && void 0 !== n ? e[r].call(t, n) : e),
          t,
        );
    },
    51712: function (t, e, r) {
      'use strict';
      r.d(e, {
        V: function () {
          return u;
        },
      });
      var n = r(97582),
        o = r(25897),
        i = r(45607),
        s = r(70681),
        a = r.n(s);
      class u {
        constructor(t) {
          (this.id = 'dagre'),
            (this.options = {}),
            Object.assign(this.options, u.defaultOptions, t);
        }
        execute(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.genericDagreLayout(
              !1,
              t,
              Object.assign(Object.assign({}, this.options), e),
            );
          });
        }
        assign(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield this.genericDagreLayout(
              !0,
              t,
              Object.assign(Object.assign({}, this.options), e),
            );
          });
        }
        genericDagreLayout(t, e, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const { nodeSize: u } = r,
              d = new s.graphlib.Graph();
            d.setGraph(r), d.setDefaultEdgeLabel(() => ({}));
            [...e.getAllNodes(), ...e.getAllEdges()].some(({ id: t }) =>
              (0, o.Z)(t),
            ) &&
              console.error(
                'Dagre layout only support string id, it will convert number to string.',
              ),
              e.getAllNodes().forEach((t) => {
                const { id: e } = t,
                  r = Object.assign({}, t.data);
                if (void 0 !== u) {
                  const [e, n] = (function (t) {
                    if (!t) return [0, 0, 0];
                    if ((0, o.Z)(t)) return [t, t, t];
                    if (0 === t.length) return [0, 0, 0];
                    const [e, r = e, n = e] = t;
                    return [e, r, n];
                  })((0, i.Z)(u) ? u(t) : u);
                  Object.assign(r, { width: e, height: n });
                }
                d.setNode(e.toString(), r);
              }),
              e.getAllEdges().forEach(({ id: t, source: e, target: r }) => {
                d.setEdge(e.toString(), r.toString(), { id: t });
              }),
              a().layout(d);
            const h = { nodes: [], edges: [] };
            return (
              d.nodes().forEach((r) => {
                const n = d.node(r);
                h.nodes.push({ id: r, data: n }), t && e.mergeNodeData(r, n);
              }),
              d.edges().forEach((r) => {
                const o = d.edge(r),
                  { id: i } = o,
                  s = (0, n._T)(o, ['id']),
                  { v: a, w: u } = r;
                h.edges.push({ id: i, source: a, target: u, data: s }),
                  t && e.mergeEdgeData(i, s);
              }),
              h
            );
          });
        }
      }
      u.defaultOptions = {};
    },
    12368: function (t, e, r) {
      'use strict';
      r.d(e, {
        y: function () {
          return p;
        },
      });
      var n = r(97582),
        o = r(72137),
        i = r(25897),
        s = r(4637),
        a = r(45607),
        u = r(78732),
        d = r(85087),
        h = r(81269),
        c = r(33953);
      function l(t, e, r, n, o = 2) {
        const i = e / r,
          s = t.getAllNodes(),
          a = s.map((t, e) => {
            const { nodeStrength: r, x: n, y: o, z: s, size: a } = t.data;
            return {
              x: n,
              y: o,
              z: s,
              size: a,
              index: e,
              id: t.id,
              vx: 0,
              vy: 0,
              vz: 0,
              weight: i * r,
            };
          }),
          u = (
            2 === o
              ? (0, h.Z)(
                  a,
                  (t) => t.x,
                  (t) => t.y,
                )
              : (0, c.Z)(
                  a,
                  (t) => t.x,
                  (t) => t.y,
                  (t) => t.z,
                )
          ).visitAfter(f),
          d = new Map();
        return (
          a.forEach((t) => {
            d.set(t.id, t),
              (function (t, e, r) {
                e.visit((e, n, o, i, s) => g(e, n, o, i, s, t, r));
              })(t, u, o);
          }),
          a.map((t, e) => {
            const { id: r, data: o } = s[e],
              { mass: i = 1 } = o;
            n[r] = { x: t.vx / i, y: t.vy / i, z: t.vz / i };
          }),
          n
        );
      }
      function f(t) {
        let e = 0,
          r = 0,
          n = 0,
          o = 0,
          i = 0;
        const s = t.length;
        if (s) {
          for (let a = 0; a < s; a++) {
            const s = t[a];
            s &&
              s.weight &&
              ((e += s.weight),
              (r += s.x * s.weight),
              (n += s.y * s.weight),
              (o += s.z * s.weight),
              (i += s.size * s.weight));
          }
          (t.x = r / e),
            (t.y = n / e),
            (t.z = o / e),
            (t.size = i / e),
            (t.weight = e);
        } else {
          const e = t;
          (t.x = e.data.x),
            (t.y = e.data.y),
            (t.z = e.data.z),
            (t.size = e.data.size),
            (t.weight = e.data.weight);
        }
      }
      const g = (t, e, r, n, o, i, s) => {
        var a;
        if ((null === (a = t.data) || void 0 === a ? void 0 : a.id) === i.id)
          return;
        const u = [r, n, o][s - 1],
          d = i.x - t.x || 0.1,
          h = i.y - t.y || 0.1,
          c = i.z - t.z || 0.1,
          l = [d, h, c],
          f = u - e;
        let g = 0;
        for (let t = 0; t < s; t++) g += l[t] * l[t];
        const v = Math.sqrt(g) * g;
        if (f * f * 0.81 < g) {
          const e = t.weight / v;
          return (i.vx += d * e), (i.vy += h * e), (i.vz += c * e), !0;
        }
        if (t.length) return !1;
        if (t.data !== i) {
          const e = t.data.weight / v;
          (i.vx += d * e), (i.vy += h * e), (i.vz += c * e);
        }
      };
      const v = {
        dimensions: 2,
        maxIteration: 500,
        gravity: 10,
        factor: 1,
        edgeStrength: 50,
        nodeStrength: 1e3,
        coulombDisScale: 0.005,
        damping: 0.9,
        maxSpeed: 200,
        minMovement: 0.4,
        interval: 0.02,
        linkDistance: 200,
        clusterNodeStrength: 20,
        preventOverlap: !0,
        distanceThresholdMode: 'mean',
      };
      class p {
        constructor(t = {}) {
          (this.options = t),
            (this.id = 'force'),
            (this.timeInterval = 0),
            (this.judgingDistance = 0),
            (this.running = !1),
            (this.options = Object.assign(Object.assign({}, v), t));
        }
        execute(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.genericForceLayout(!1, t, e);
          });
        }
        assign(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield this.genericForceLayout(!0, t, e);
          });
        }
        stop() {
          this.timeInterval &&
            'undefined' != typeof window &&
            window.clearInterval(this.timeInterval),
            (this.running = !1);
        }
        tick(t = this.options.maxIteration || 1) {
          if (this.lastResult) return this.lastResult;
          for (
            let e = 0;
            (this.judgingDistance > this.lastOptions.minMovement || e < 1) &&
            e < t;
            e++
          )
            this.runOneStep(
              this.lastCalcGraph,
              this.lastGraph,
              e,
              this.lastVelMap,
              this.lastOptions,
            ),
              this.updatePosition(
                this.lastGraph,
                this.lastCalcGraph,
                this.lastVelMap,
                this.lastOptions,
              );
          const e = {
            nodes: this.lastLayoutNodes,
            edges: this.lastLayoutEdges,
          };
          return (
            this.lastAssign &&
              e.nodes.forEach((t) =>
                this.lastGraph.mergeNodeData(t.id, {
                  x: t.data.x,
                  y: t.data.y,
                  z: 3 === this.options.dimensions ? t.data.z : void 0,
                }),
              ),
            e
          );
        }
        genericForceLayout(t, e, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = Object.assign(Object.assign({}, this.options), r),
              s = e.getAllNodes(),
              a = e.getAllEdges(),
              u = this.formatOptions(n, e),
              {
                dimensions: d,
                width: h,
                height: c,
                nodeSize: l,
                getMass: f,
                nodeStrength: g,
                edgeStrength: v,
                linkDistance: p,
              } = u,
              m = s.map((t, e) =>
                Object.assign(Object.assign({}, t), {
                  data: Object.assign(Object.assign({}, t.data), {
                    x: (0, i.Z)(t.data.x) ? t.data.x : Math.random() * h,
                    y: (0, i.Z)(t.data.y) ? t.data.y : Math.random() * c,
                    z: (0, i.Z)(t.data.z)
                      ? t.data.z
                      : Math.random() * Math.sqrt(h * c),
                    size: l(t) || 30,
                    mass: f(t),
                    nodeStrength: g(t),
                  }),
                }),
              ),
              y = a.map((t) =>
                Object.assign(Object.assign({}, t), {
                  data: Object.assign(Object.assign({}, t.data), {
                    edgeStrength: v(t),
                    linkDistance: p(
                      t,
                      e.getNode(t.source),
                      e.getNode(t.target),
                    ),
                  }),
                }),
              );
            if (!(null == s ? void 0 : s.length))
              return (
                (this.lastResult = { nodes: [], edges: a }),
                { nodes: [], edges: a }
              );
            const w = {};
            s.forEach((t, e) => {
              w[t.id] = { x: 0, y: 0, z: 0 };
            });
            const x = new o.k({ nodes: m, edges: y });
            this.formatCentripetal(u, x);
            const { maxIteration: E, minMovement: N, onTick: M } = u;
            if (
              ((this.lastLayoutNodes = m),
              (this.lastLayoutEdges = y),
              (this.lastAssign = t),
              (this.lastGraph = e),
              (this.lastCalcGraph = x),
              (this.lastOptions = u),
              (this.lastVelMap = w),
              'undefined' == typeof window)
            )
              return;
            let k = 0;
            return new Promise((r) => {
              (this.timeInterval = window.setInterval(() => {
                (s && this.running) || r({ nodes: b(e, m), edges: a }),
                  this.runOneStep(x, e, k, w, u),
                  this.updatePosition(e, x, w, u),
                  t &&
                    m.forEach((t) =>
                      e.mergeNodeData(t.id, {
                        x: t.data.x,
                        y: t.data.y,
                        z: 3 === d ? t.data.z : void 0,
                      }),
                    ),
                  null == M || M({ nodes: b(e, m), edges: a }),
                  k++,
                  (k >= E || this.judgingDistance < N) &&
                    (window.clearInterval(this.timeInterval),
                    r({ nodes: b(e, m), edges: a }));
              }, 0)),
                (this.running = !0);
            });
          });
        }
        formatOptions(t, e) {
          const r = Object.assign({}, t),
            { width: n, height: o, getMass: h, nodeSize: c } = t;
          (r.width = n || 'undefined' == typeof window ? n : window.innerWidth),
            (r.height =
              o || 'undefined' == typeof window ? o : window.innerHeight),
            t.center || (r.center = [r.width / 2, r.height / 2]),
            h ||
              (r.getMass = (t) => {
                let r = 1;
                (0, i.Z)(null == t ? void 0 : t.data.mass) &&
                  (r = null == t ? void 0 : t.data.mass);
                const n = e.getDegree(t.id, 'both');
                return !n || n < 5 ? r : 5 * n * r;
              });
          const l = (0, u.jE)(0, t.nodeSpacing);
          let f;
          (f = c
            ? (0, a.Z)(c)
              ? (t) => c(t) + l(t)
              : (0, d.k)(c)
                ? (t) => {
                    const e = c;
                    return Math.max(e[0], e[1]) + l(t);
                  }
                : (t) => c + l(t)
            : (t) => {
                const { size: e } = (null == t ? void 0 : t.data) || {};
                return e
                  ? (0, d.k)(e)
                    ? Math.max(e[0], e[1]) + l(t)
                    : (0, s.Z)(e)
                      ? Math.max(e.width, e.height) + l(t)
                      : e + l(t)
                  : 10 + l(t);
              }),
            (r.nodeSize = f);
          const g = t.linkDistance
            ? (0, u.jE)(1, t.linkDistance)
            : (t) =>
                1 +
                r.nodeSize(e.getNode(t.source)) +
                r.nodeSize(e.getNode(t.target));
          return (
            (r.linkDistance = g),
            (r.nodeStrength = (0, u.jE)(1, t.nodeStrength)),
            (r.edgeStrength = (0, u.jE)(1, t.edgeStrength)),
            r
          );
        }
        formatCentripetal(t, e) {
          const {
              dimensions: r,
              centripetalOptions: n,
              center: o,
              clusterNodeStrength: i,
              leafCluster: s,
              clustering: a,
              nodeClusterBy: u,
            } = t,
            d = e.getAllNodes(),
            h = n || {
              leaf: 2,
              single: 2,
              others: 1,
              center: (t) => ({ x: o[0], y: o[1], z: 3 === r ? o[2] : void 0 }),
            };
          let c, l;
          if (
            ('function' != typeof i && (t.clusterNodeStrength = (t) => i),
            s &&
              u &&
              ((c = m(e, u)),
              (l =
                Array.from(
                  new Set(null == d ? void 0 : d.map((t) => t.data[u])),
                ) || []),
              (t.centripetalOptions = Object.assign(h, {
                single: 100,
                leaf: (e) => {
                  const { siblingLeaves: r, sameTypeLeaves: n } = c[e.id] || {};
                  return (null == n ? void 0 : n.length) ===
                    (null == r ? void 0 : r.length) ||
                    1 === (null == l ? void 0 : l.length)
                    ? 1
                    : t.clusterNodeStrength(e);
                },
                others: 1,
                center: (t) => {
                  const r = e.getDegree(t.id, 'both');
                  if (!r) return { x: 100, y: 100, z: 0 };
                  let n;
                  if (1 === r) {
                    const { sameTypeLeaves: e = [] } = c[t.id] || {};
                    1 === e.length ? (n = void 0) : e.length > 1 && (n = x(e));
                  } else n = void 0;
                  return {
                    x: null == n ? void 0 : n.x,
                    y: null == n ? void 0 : n.y,
                    z: null == n ? void 0 : n.z,
                  };
                },
              }))),
            a && u)
          ) {
            c || (c = m(e, u)),
              l || (l = Array.from(new Set(d.map((t) => t.data[u])))),
              (l = l.filter((t) => void 0 !== t));
            const r = {};
            l.forEach((t) => {
              const n = d
                .filter((e) => e.data[u] === t)
                .map((t) => e.getNode(t.id));
              r[t] = x(n);
            }),
              (t.centripetalOptions = Object.assign(h, {
                single: (e) => t.clusterNodeStrength(e),
                leaf: (e) => t.clusterNodeStrength(e),
                others: (e) => t.clusterNodeStrength(e),
                center: (t) => {
                  const e = r[t.data[u]];
                  return {
                    x: null == e ? void 0 : e.x,
                    y: null == e ? void 0 : e.y,
                    z: null == e ? void 0 : e.z,
                  };
                },
              }));
          }
          const { leaf: f, single: g, others: v } = t.centripetalOptions || {};
          f && 'function' != typeof f && (t.centripetalOptions.leaf = () => f),
            g &&
              'function' != typeof g &&
              (t.centripetalOptions.single = () => g),
            v &&
              'function' != typeof v &&
              (t.centripetalOptions.others = () => v);
        }
        runOneStep(t, e, r, n, o) {
          const i = {},
            s = t.getAllNodes(),
            a = t.getAllEdges();
          if (!(null == s ? void 0 : s.length)) return;
          const { monitor: u } = o;
          if (
            (this.calRepulsive(t, i, o),
            a && this.calAttractive(t, i, o),
            this.calGravity(t, e, i, o),
            this.updateVelocity(t, i, n, o),
            u)
          ) {
            u({
              energy: this.calTotalEnergy(i, s),
              nodes: e.getAllNodes(),
              edges: e.getAllEdges(),
              iterations: r,
            });
          }
        }
        calTotalEnergy(t, e) {
          if (!(null == e ? void 0 : e.length)) return 0;
          let r = 0;
          return (
            e.forEach((e, n) => {
              const o = t[e.id].x,
                i = t[e.id].y,
                s = 3 === this.options.dimensions ? t[e.id].z : 0,
                a = o * o + i * i + s * s,
                { mass: u = 1 } = e.data;
              r += u * a * 0.5;
            }),
            r
          );
        }
        calRepulsive(t, e, r) {
          const { dimensions: n, factor: o, coulombDisScale: i } = r;
          l(t, o, i * i, e, n);
        }
        calAttractive(t, e, r) {
          const { dimensions: n, nodeSize: o } = r;
          t.getAllEdges().forEach((r, i) => {
            const { source: s, target: a } = r,
              u = t.getNode(s),
              d = t.getNode(a);
            if (!u || !d) return;
            let h = d.data.x - u.data.x,
              c = d.data.y - u.data.y,
              l = 3 === n ? d.data.z - u.data.z : 0;
            h ||
              c ||
              ((h = 0.01 * Math.random()),
              (c = 0.01 * Math.random()),
              3 !== n || l || (l = 0.01 * Math.random()));
            const f = Math.sqrt(h * h + c * c + l * l);
            if (f < o(u) + o(d)) return;
            const g = h / f,
              v = c / f,
              p = l / f,
              { linkDistance: m = 200, edgeStrength: y = 200 } = r.data || {},
              w = (m - f) * y,
              x = 1 / (u.data.mass || 1),
              b = 1 / (d.data.mass || 1),
              E = g * w,
              N = v * w,
              M = p * w;
            (e[s].x -= E * x),
              (e[s].y -= N * x),
              (e[s].z -= M * x),
              (e[a].x += E * b),
              (e[a].y += N * b),
              (e[a].z += M * b);
          });
        }
        calGravity(t, e, r, n) {
          const { getCenter: o } = n,
            s = t.getAllNodes(),
            a = e.getAllNodes(),
            u = e.getAllEdges(),
            {
              width: d,
              height: h,
              center: c,
              gravity: l,
              centripetalOptions: f,
            } = n;
          s &&
            s.forEach((n) => {
              const { id: s, data: g } = n,
                { mass: v, x: p, y: m, z: y } = g,
                w = e.getNode(s);
              let x = 0,
                b = 0,
                E = 0,
                N = l;
              const M = t.getDegree(s, 'in'),
                k = t.getDegree(s, 'out'),
                _ = t.getDegree(s, 'both'),
                S = null == o ? void 0 : o(w, _);
              if (S) {
                const [t, e, r] = S;
                (x = p - t), (b = m - e), (N = r);
              } else (x = p - c[0]), (b = m - c[1]), (E = y - c[2]);
              if (
                (N &&
                  ((r[s].x -= (N * x) / v),
                  (r[s].y -= (N * b) / v),
                  (r[s].z -= (N * E) / v)),
                f)
              ) {
                const { leaf: t, single: e, others: n, center: o } = f,
                  {
                    x: c,
                    y: l,
                    z: g,
                    centerStrength: x,
                  } = (null == o ? void 0 : o(w, a, u, d, h)) || {
                    x: 0,
                    y: 0,
                    z: 0,
                    centerStrength: 0,
                  };
                if (!(0, i.Z)(c) || !(0, i.Z)(l)) return;
                const b = (p - c) / v,
                  E = (m - l) / v,
                  N = (y - g) / v;
                if (
                  (x &&
                    ((r[s].x -= x * b), (r[s].y -= x * E), (r[s].z -= x * N)),
                  0 === _)
                ) {
                  const t = e(w);
                  if (!t) return;
                  return (
                    (r[s].x -= t * b), (r[s].y -= t * E), void (r[s].z -= t * N)
                  );
                }
                if (0 === M || 0 === k) {
                  const e = t(w, a, u);
                  if (!e) return;
                  return (
                    (r[s].x -= e * b), (r[s].y -= e * E), void (r[s].z -= e * N)
                  );
                }
                const S = n(w);
                if (!S) return;
                (r[s].x -= S * b), (r[s].y -= S * E), (r[s].z -= S * N);
              }
            });
        }
        updateVelocity(t, e, r, n) {
          const { damping: o, maxSpeed: i, interval: s, dimensions: a } = n,
            u = t.getAllNodes();
          (null == u ? void 0 : u.length) &&
            u.forEach((t) => {
              const { id: n } = t;
              let u = (r[n].x + e[n].x * s) * o || 0.01,
                d = (r[n].y + e[n].y * s) * o || 0.01,
                h = 3 === a ? (r[n].z + e[n].z * s) * o || 0.01 : 0;
              const c = Math.sqrt(u * u + d * d + h * h);
              if (c > i) {
                const t = i / c;
                (u *= t), (d *= t), (h *= t);
              }
              r[n] = { x: u, y: d, z: h };
            });
        }
        updatePosition(t, e, r, n) {
          const { distanceThresholdMode: o, interval: s, dimensions: a } = n,
            u = e.getAllNodes();
          if (!(null == u ? void 0 : u.length))
            return void (this.judgingDistance = 0);
          let d = 0;
          'max' === o
            ? (this.judgingDistance = -1 / 0)
            : 'min' === o && (this.judgingDistance = 1 / 0),
            u.forEach((n) => {
              const { id: u } = n,
                h = t.getNode(u);
              if ((0, i.Z)(h.data.fx) && (0, i.Z)(h.data.fy))
                return void e.mergeNodeData(u, {
                  x: h.data.fx,
                  y: h.data.fy,
                  z: 3 === a ? h.data.fz : void 0,
                });
              const c = r[u].x * s,
                l = r[u].y * s,
                f = 3 === a ? r[u].z * s : 0;
              e.mergeNodeData(u, {
                x: n.data.x + c,
                y: n.data.y + l,
                z: n.data.z + f,
              });
              const g = Math.sqrt(c * c + l * l + f * f);
              switch (o) {
                case 'max':
                  this.judgingDistance < g && (this.judgingDistance = g);
                  break;
                case 'min':
                  this.judgingDistance > g && (this.judgingDistance = g);
                  break;
                default:
                  d += g;
              }
            }),
            (o && 'mean' !== o) || (this.judgingDistance = d / u.length);
        }
      }
      const m = (t, e) => {
          const r = t.getAllNodes();
          if (!(null == r ? void 0 : r.length)) return {};
          const n = {};
          return (
            r.forEach((r, o) => {
              1 === t.getDegree(r.id, 'both') && (n[r.id] = y(t, 'leaf', r, e));
            }),
            n
          );
        },
        y = (t, e, r, n) => {
          const o = t.getDegree(r.id, 'in'),
            i = t.getDegree(r.id, 'out');
          let s = r,
            a = [];
          0 === o
            ? ((s = t.getSuccessors(r.id)[0]), (a = t.getNeighbors(s.id)))
            : 0 === i &&
              ((s = t.getPredecessors(r.id)[0]), (a = t.getNeighbors(s.id))),
            (a = a.filter(
              (e) =>
                0 === t.getDegree(e.id, 'in') || 0 === t.getDegree(e.id, 'out'),
            ));
          return {
            coreNode: s,
            siblingLeaves: a,
            sameTypeLeaves: w(t, e, n, r, a),
          };
        },
        w = (t, e, r, n, o) => {
          const i = n.data[r] || '';
          let s = (null == o ? void 0 : o.filter((t) => t.data[r] === i)) || [];
          return (
            'leaf' === e &&
              (s = s.filter(
                (e) =>
                  0 === t.getDegree(e.id, 'in') ||
                  0 === t.getDegree(e.id, 'out'),
              )),
            s
          );
        },
        x = (t) => {
          const e = { x: 0, y: 0 };
          t.forEach((t) => {
            const { x: r, y: n } = t.data;
            (e.x += r || 0), (e.y += n || 0);
          });
          const r = t.length || 1;
          return { x: e.x / r, y: e.y / r };
        },
        b = (t, e) =>
          e.map((e) => {
            const { id: r, data: n } = e,
              o = t.getNode(r);
            return Object.assign(Object.assign({}, o), {
              data: Object.assign(Object.assign({}, o.data), {
                x: n.x,
                y: n.y,
                z: n.z,
              }),
            });
          });
    },
    67753: function (t, e, r) {
      'use strict';
      r.d(e, {
        E: function () {
          return v;
        },
      });
      var n = r(97582),
        o = r(72137),
        i = r(25897),
        s = r(4637),
        a = r(45607),
        u = r(98130),
        d = r(85087),
        h = r(20464);
      class c {
        constructor(t) {
          (this.id = t.id || 0),
            (this.rx = t.rx),
            (this.ry = t.ry),
            (this.fx = 0),
            (this.fy = 0),
            (this.mass = t.mass),
            (this.degree = t.degree),
            (this.g = t.g || 0);
        }
        distanceTo(t) {
          const e = this.rx - t.rx,
            r = this.ry - t.ry;
          return Math.hypot(e, r);
        }
        setPos(t, e) {
          (this.rx = t), (this.ry = e);
        }
        resetForce() {
          (this.fx = 0), (this.fy = 0);
        }
        addForce(t) {
          const e = t.rx - this.rx,
            r = t.ry - this.ry;
          let n = Math.hypot(e, r);
          n = n < 1e-4 ? 1e-4 : n;
          const o = (this.g * (this.degree + 1) * (t.degree + 1)) / n;
          (this.fx += (o * e) / n), (this.fy += (o * r) / n);
        }
        in(t) {
          return t.contains(this.rx, this.ry);
        }
        add(t) {
          const e = this.mass + t.mass,
            r = (this.rx * this.mass + t.rx * t.mass) / e,
            n = (this.ry * this.mass + t.ry * t.mass) / e,
            o = this.degree + t.degree;
          return new c({ rx: r, ry: n, mass: e, degree: o });
        }
      }
      class l {
        constructor(t) {
          (this.xmid = t.xmid),
            (this.ymid = t.ymid),
            (this.length = t.length),
            (this.massCenter = t.massCenter || [0, 0]),
            (this.mass = t.mass || 1);
        }
        getLength() {
          return this.length;
        }
        contains(t, e) {
          const r = this.length / 2;
          return (
            t <= this.xmid + r &&
            t >= this.xmid - r &&
            e <= this.ymid + r &&
            e >= this.ymid - r
          );
        }
        NW() {
          const t = this.xmid - this.length / 4,
            e = this.ymid + this.length / 4,
            r = this.length / 2;
          return new l({ xmid: t, ymid: e, length: r });
        }
        NE() {
          const t = this.xmid + this.length / 4,
            e = this.ymid + this.length / 4,
            r = this.length / 2;
          return new l({ xmid: t, ymid: e, length: r });
        }
        SW() {
          const t = this.xmid - this.length / 4,
            e = this.ymid - this.length / 4,
            r = this.length / 2;
          return new l({ xmid: t, ymid: e, length: r });
        }
        SE() {
          const t = this.xmid + this.length / 4,
            e = this.ymid - this.length / 4,
            r = this.length / 2;
          return new l({ xmid: t, ymid: e, length: r });
        }
      }
      class f {
        constructor(t) {
          (this.body = null),
            (this.quad = null),
            (this.NW = null),
            (this.NE = null),
            (this.SW = null),
            (this.SE = null),
            (this.theta = 0.5),
            null != t && (this.quad = t);
        }
        insert(t) {
          null != this.body
            ? this._isExternal()
              ? (this.quad &&
                  ((this.NW = new f(this.quad.NW())),
                  (this.NE = new f(this.quad.NE())),
                  (this.SW = new f(this.quad.SW())),
                  (this.SE = new f(this.quad.SE()))),
                this._putBody(this.body),
                this._putBody(t),
                (this.body = this.body.add(t)))
              : ((this.body = this.body.add(t)), this._putBody(t))
            : (this.body = t);
        }
        _putBody(t) {
          this.quad &&
            (t.in(this.quad.NW()) && this.NW
              ? this.NW.insert(t)
              : t.in(this.quad.NE()) && this.NE
                ? this.NE.insert(t)
                : t.in(this.quad.SW()) && this.SW
                  ? this.SW.insert(t)
                  : t.in(this.quad.SE()) && this.SE && this.SE.insert(t));
        }
        _isExternal() {
          return (
            null == this.NW &&
            null == this.NE &&
            null == this.SW &&
            null == this.SE
          );
        }
        updateForce(t) {
          if (null != this.body && t !== this.body)
            if (this._isExternal()) t.addForce(this.body);
            else {
              (this.quad ? this.quad.getLength() : 0) /
                this.body.distanceTo(t) <
              this.theta
                ? t.addForce(this.body)
                : (this.NW && this.NW.updateForce(t),
                  this.NE && this.NE.updateForce(t),
                  this.SW && this.SW.updateForce(t),
                  this.SE && this.SE.updateForce(t));
            }
        }
      }
      const g = {
        center: [0, 0],
        width: 300,
        height: 300,
        kr: 5,
        kg: 1,
        mode: 'normal',
        preventOverlap: !1,
        dissuadeHubs: !1,
        maxIteration: 0,
        ks: 0.1,
        ksmax: 10,
        tao: 0.1,
      };
      class v {
        constructor(t = {}) {
          (this.options = t),
            (this.id = 'forceAtlas2'),
            (this.options = Object.assign(Object.assign({}, g), t));
        }
        execute(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.genericForceAtlas2Layout(!1, t, e);
          });
        }
        assign(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield this.genericForceAtlas2Layout(!0, t, e);
          });
        }
        genericForceAtlas2Layout(t, e, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = e.getAllEdges(),
              i = e.getAllNodes(),
              s = this.formatOptions(r, i.length),
              {
                width: a,
                height: d,
                prune: c,
                maxIteration: l,
                nodeSize: f,
                center: g,
              } = s;
            if (!(null == i ? void 0 : i.length) || 1 === i.length)
              return (0, h.P)(e, t, g);
            const v = i.map((t) => (0, u.u)(t, [a, d])),
              p = n.filter((t) => {
                const { source: e, target: r } = t;
                return e !== r;
              }),
              m = new o.k({ nodes: v, edges: p }),
              y = this.getSizes(m, e, f);
            if ((this.run(m, e, l, y, t, s), c)) {
              for (let t = 0; t < p.length; t += 1) {
                const { source: e, target: r } = p[t],
                  n = m.getDegree(e),
                  o = m.getDegree(e);
                if (n <= 1) {
                  const t = m.getNode(r);
                  m.mergeNodeData(e, { x: t.data.x, y: t.data.y });
                } else if (o <= 1) {
                  const t = m.getNode(e);
                  m.mergeNodeData(r, { x: t.data.x, y: t.data.y });
                }
              }
              const r = Object.assign(Object.assign({}, s), {
                prune: !1,
                barnesHut: !1,
              });
              this.run(m, e, 100, y, t, r);
            }
            return { nodes: v, edges: n };
          });
        }
        getSizes(t, e, r) {
          const n = t.getAllNodes(),
            o = {};
          for (let t = 0; t < n.length; t += 1) {
            const { id: u, data: h } = n[t];
            if (((o[u] = 10), (0, i.Z)(h.size))) o[u] = h.size;
            else if ((0, d.k)(h.size))
              isNaN(h.size[0]) || (o[u] = Math.max(h.size[0])),
                isNaN(h.size[1]) || (o[u] = Math.max(h.size[1]));
            else if ((0, s.Z)(h.size))
              o[u] = Math.max(h.size.width, h.size.height);
            else if ((0, a.Z)(r)) {
              const t = r(e.getNode(u));
              (0, d.k)(t) ? (o[u] = Math.max(...t)) : (o[u] = t);
            } else
              (0, d.k)(r) ? (o[u] = Math.max(...r)) : (0, i.Z)(r) && (o[u] = r);
          }
          return o;
        }
        formatOptions(t = {}, e) {
          const r = Object.assign(Object.assign({}, this.options), t),
            {
              center: n,
              width: o,
              height: i,
              barnesHut: s,
              prune: a,
              maxIteration: u,
              kr: d,
              kg: h,
            } = r;
          return (
            (r.width =
              o || 'undefined' == typeof window ? o : window.innerWidth),
            (r.height =
              i || 'undefined' == typeof window ? i : window.innerHeight),
            (r.center = n || [r.width / 2, r.height / 2]),
            void 0 === s && e > 250 && (r.barnesHut = !0),
            void 0 === a && e > 100 && (r.prune = !0),
            0 !== u || a
              ? 0 === u &&
                a &&
                ((r.maxIteration = 100),
                e <= 200 && e > 100
                  ? (r.maxIteration = 500)
                  : e > 200 && (r.maxIteration = 950))
              : ((r.maxIteration = 250),
                e <= 200 && e > 100
                  ? (r.maxIteration = 1e3)
                  : e > 200 && (r.maxIteration = 1200)),
            d ||
              ((r.kr = 50),
              e > 100 && e <= 500 ? (r.kr = 20) : e > 500 && (r.kr = 1)),
            h ||
              ((r.kg = 20),
              e > 100 && e <= 500 ? (r.kg = 10) : e > 500 && (r.kg = 1)),
            r
          );
        }
        run(t, e, r, n, o, i) {
          const { kr: s, barnesHut: a, onTick: u } = i,
            d = t.getAllNodes();
          let h = 0,
            l = r;
          const f = {},
            g = {},
            v = {};
          for (let e = 0; e < d.length; e += 1) {
            const { data: r, id: n } = d[e];
            if (((f[n] = [0, 0]), a)) {
              const o = {
                id: e,
                rx: r.x,
                ry: r.y,
                mass: 1,
                g: s,
                degree: t.getDegree(n),
              };
              v[n] = new c(o);
            }
          }
          for (; l > 0; )
            (h = this.oneStep(
              t,
              {
                iter: l,
                preventOverlapIters: 50,
                krPrime: 100,
                sg: h,
                forces: f,
                preForces: g,
                bodies: v,
                sizes: n,
              },
              i,
            )),
              l--,
              null == u || u({ nodes: d, edges: e.getAllEdges() });
          return t;
        }
        oneStep(t, e, r) {
          const {
            iter: n,
            preventOverlapIters: o,
            krPrime: i,
            sg: s,
            preForces: a,
            bodies: u,
            sizes: d,
          } = e;
          let { forces: h } = e;
          const { preventOverlap: c, barnesHut: l } = r,
            f = t.getAllNodes();
          for (let t = 0; t < f.length; t += 1) {
            const { id: e } = f[t];
            (a[e] = [...h[e]]), (h[e] = [0, 0]);
          }
          return (
            (h = this.getAttrForces(t, n, o, d, h, r)),
            (h =
              l && ((c && n > o) || !c)
                ? this.getOptRepGraForces(t, h, u, r)
                : this.getRepGraForces(t, n, o, h, i, d, r)),
            this.updatePos(t, h, a, s, r)
          );
        }
        getAttrForces(t, e, r, n, o, i) {
          const { preventOverlap: s, dissuadeHubs: a, mode: u, prune: d } = i,
            h = t.getAllEdges();
          for (let i = 0; i < h.length; i += 1) {
            const { source: c, target: l } = h[i],
              f = t.getNode(c),
              g = t.getNode(l),
              v = t.getDegree(c),
              p = t.getDegree(l);
            if (d && (v <= 1 || p <= 1)) continue;
            const m = [g.data.x - f.data.x, g.data.y - f.data.y];
            let y = Math.hypot(m[0], m[1]);
            (y = y < 1e-4 ? 1e-4 : y),
              (m[0] = m[0] / y),
              (m[1] = m[1] / y),
              s && e < r && (y = y - n[c] - n[l]);
            let w = y,
              x = w;
            'linlog' === u && ((w = Math.log(1 + y)), (x = w)),
              a && ((w = y / v), (x = y / p)),
              s && e < r && y <= 0
                ? ((w = 0), (x = 0))
                : s && e < r && y > 0 && ((w = y), (x = y)),
              (o[c][0] += w * m[0]),
              (o[l][0] -= x * m[0]),
              (o[c][1] += w * m[1]),
              (o[l][1] -= x * m[1]);
          }
          return o;
        }
        getOptRepGraForces(t, e, r, n) {
          const { kg: o, center: i, prune: s } = n,
            a = t.getAllNodes(),
            u = a.length;
          let d = 9e10,
            h = -9e10,
            c = 9e10,
            g = -9e10;
          for (let e = 0; e < u; e += 1) {
            const { id: n, data: o } = a[e];
            (s && t.getDegree(n) <= 1) ||
              (r[n].setPos(o.x, o.y),
              o.x >= h && (h = o.x),
              o.x <= d && (d = o.x),
              o.y >= g && (g = o.y),
              o.y <= c && (c = o.y));
          }
          const v = Math.max(h - d, g - c),
            p = new l({
              xmid: (h + d) / 2,
              ymid: (g + c) / 2,
              length: v,
              massCenter: i,
              mass: u,
            }),
            m = new f(p);
          for (let e = 0; e < u; e += 1) {
            const { id: n } = a[e];
            (s && t.getDegree(n) <= 1) || (r[n].in(p) && m.insert(r[n]));
          }
          for (let n = 0; n < u; n += 1) {
            const { id: u, data: d } = a[n],
              h = t.getDegree(u);
            if (s && h <= 1) continue;
            r[u].resetForce(),
              m.updateForce(r[u]),
              (e[u][0] -= r[u].fx),
              (e[u][1] -= r[u].fy);
            const c = [d.x - i[0], d.y - i[1]];
            let l = Math.hypot(c[0], c[1]);
            (l = l < 1e-4 ? 1e-4 : l), (c[0] = c[0] / l), (c[1] = c[1] / l);
            const f = o * (h + 1);
            (e[u][0] -= f * c[0]), (e[u][1] -= f * c[1]);
          }
          return e;
        }
        getRepGraForces(t, e, r, n, o, i, s) {
          const { preventOverlap: a, kr: u, kg: d, center: h, prune: c } = s,
            l = t.getAllNodes(),
            f = l.length;
          for (let s = 0; s < f; s += 1) {
            const g = l[s],
              v = t.getDegree(g.id);
            for (let d = s + 1; d < f; d += 1) {
              const s = l[d],
                h = t.getDegree(s.id);
              if (c && (v <= 1 || h <= 1)) continue;
              const f = [s.data.x - g.data.x, s.data.y - g.data.y];
              let p = Math.hypot(f[0], f[1]);
              (p = p < 1e-4 ? 1e-4 : p),
                (f[0] = f[0] / p),
                (f[1] = f[1] / p),
                a && e < r && (p = p - i[g.id] - i[s.id]);
              let m = (u * (v + 1) * (h + 1)) / p;
              a && e < r && p < 0
                ? (m = o * (v + 1) * (h + 1))
                : a && e < r && 0 === p
                  ? (m = 0)
                  : a && e < r && p > 0 && (m = (u * (v + 1) * (h + 1)) / p),
                (n[g.id][0] -= m * f[0]),
                (n[s.id][0] += m * f[0]),
                (n[g.id][1] -= m * f[1]),
                (n[s.id][1] += m * f[1]);
            }
            const p = [g.data.x - h[0], g.data.y - h[1]],
              m = Math.hypot(p[0], p[1]);
            (p[0] = p[0] / m), (p[1] = p[1] / m);
            const y = d * (v + 1);
            (n[g.id][0] -= y * p[0]), (n[g.id][1] -= y * p[1]);
          }
          return n;
        }
        updatePos(t, e, r, n, o) {
          const { ks: s, tao: a, prune: u, ksmax: d } = o,
            h = t.getAllNodes(),
            c = h.length,
            l = [],
            f = [];
          let g = 0,
            v = 0,
            p = n;
          for (let n = 0; n < c; n += 1) {
            const { id: o } = h[n],
              i = t.getDegree(o);
            if (u && i <= 1) continue;
            const s = [e[o][0] - r[o][0], e[o][1] - r[o][1]],
              a = Math.hypot(s[0], s[1]),
              d = [e[o][0] + r[o][0], e[o][1] + r[o][1]],
              c = Math.hypot(d[0], d[1]);
            (l[n] = a),
              (f[n] = c / 2),
              (g += (i + 1) * l[n]),
              (v += (i + 1) * f[n]);
          }
          const m = p;
          (p = (a * v) / g), 0 !== m && (p = p > 1.5 * m ? 1.5 * m : p);
          for (let r = 0; r < c; r += 1) {
            const { id: n, data: o } = h[r],
              a = t.getDegree(n);
            if (u && a <= 1) continue;
            if ((0, i.Z)(o.fx) && (0, i.Z)(o.fy)) continue;
            let c = (s * p) / (1 + p * Math.sqrt(l[r])),
              f = Math.hypot(e[n][0], e[n][1]);
            f = f < 1e-4 ? 1e-4 : f;
            const g = d / f;
            c = c > g ? g : c;
            const v = c * e[n][0],
              m = c * e[n][1];
            t.mergeNodeData(n, { x: o.x + v, y: o.y + m });
          }
          return p;
        }
      }
    },
    89469: function (t, e, r) {
      'use strict';
      r.d(e, {
        O: function () {
          return u;
        },
      });
      var n = r(97582),
        o = r(72137),
        i = r(25897),
        s = r(98130);
      const a = {
        maxIteration: 1e3,
        gravity: 10,
        speed: 5,
        clustering: !1,
        clusterGravity: 10,
        width: 300,
        height: 300,
        nodeClusterBy: 'cluster',
      };
      class u {
        constructor(t = {}) {
          (this.options = t),
            (this.id = 'fruchterman'),
            (this.timeInterval = 0),
            (this.running = !1),
            (this.options = Object.assign(Object.assign({}, a), t));
        }
        execute(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.genericFruchtermanLayout(!1, t, e);
          });
        }
        assign(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield this.genericFruchtermanLayout(!0, t, e);
          });
        }
        stop() {
          this.timeInterval &&
            'undefined' != typeof window &&
            window.clearInterval(this.timeInterval),
            (this.running = !1);
        }
        tick(t = this.options.maxIteration || 1) {
          if (this.lastResult) return this.lastResult;
          for (let e = 0; e < t; e++)
            this.runOneStep(
              this.lastGraph,
              this.lastClusterMap,
              this.lastOptions,
            );
          const e = {
            nodes: this.lastLayoutNodes,
            edges: this.lastLayoutEdges,
          };
          return (
            this.lastAssign &&
              e.nodes.forEach((t) =>
                this.lastGraph.mergeNodeData(t.id, {
                  x: t.data.x,
                  y: t.data.y,
                  z: 3 === this.options.dimensions ? t.data.z : void 0,
                }),
              ),
            e
          );
        }
        genericFruchtermanLayout(t, e, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.running) return;
            const n = this.formatOptions(r),
              {
                dimensions: i,
                width: a,
                height: u,
                center: d,
                clustering: h,
                nodeClusterBy: c,
                maxIteration: l,
                onTick: f,
              } = n,
              g = e.getAllNodes(),
              v = e.getAllEdges();
            if (!(null == g ? void 0 : g.length)) {
              const t = { nodes: [], edges: v };
              return (this.lastResult = t), t;
            }
            if (1 === g.length) {
              t &&
                e.mergeNodeData(g[0].id, {
                  x: d[0],
                  y: d[1],
                  z: 3 === i ? d[2] : void 0,
                });
              const r = {
                nodes: [
                  Object.assign(Object.assign({}, g[0]), {
                    data: Object.assign(Object.assign({}, g[0].data), {
                      x: d[0],
                      y: d[1],
                      z: 3 === i ? d[2] : void 0,
                    }),
                  }),
                ],
                edges: v,
              };
              return (this.lastResult = r), r;
            }
            const p = g.map((t) => (0, s.u)(t, [a, u])),
              m = new o.k({ nodes: p, edges: v }),
              y = {};
            if (
              (h &&
                p.forEach((t) => {
                  const e = t.data[c];
                  y[e] || (y[e] = { name: e, cx: 0, cy: 0, count: 0 });
                }),
              (this.lastLayoutNodes = p),
              (this.lastLayoutEdges = v),
              (this.lastAssign = t),
              (this.lastGraph = m),
              (this.lastOptions = n),
              (this.lastClusterMap = y),
              'undefined' == typeof window)
            )
              return;
            let w = 0;
            return new Promise((r) => {
              (this.timeInterval = window.setInterval(() => {
                this.running
                  ? (this.runOneStep(m, y, n),
                    t &&
                      p.forEach(({ id: t, data: r }) =>
                        e.mergeNodeData(t, {
                          x: r.x,
                          y: r.y,
                          z: 3 === i ? r.z : void 0,
                        }),
                      ),
                    null == f || f({ nodes: p, edges: v }),
                    w++,
                    w >= l &&
                      (window.clearInterval(this.timeInterval),
                      r({ nodes: p, edges: v })))
                  : r({ nodes: p, edges: v });
              }, 0)),
                (this.running = !0);
            });
          });
        }
        formatOptions(t = {}) {
          const e = Object.assign(Object.assign({}, this.options), t),
            { clustering: r, nodeClusterBy: n } = e,
            { center: o, width: i, height: s } = e;
          return (
            (e.width =
              i || 'undefined' == typeof window ? i : window.innerWidth),
            (e.height =
              s || 'undefined' == typeof window ? s : window.innerHeight),
            (e.center = o || [e.width / 2, e.height / 2]),
            (e.clustering = r && !!n),
            e
          );
        }
        runOneStep(t, e, r) {
          const {
              dimensions: n,
              height: o,
              width: s,
              gravity: a,
              center: u,
              speed: d,
              clustering: h,
              nodeClusterBy: c,
              clusterGravity: l,
            } = r,
            f = o * s,
            g = Math.sqrt(f) / 10,
            v = t.getAllNodes(),
            p = f / (v.length + 1),
            m = Math.sqrt(p),
            y = {};
          if ((this.applyCalculate(t, y, m, p), h)) {
            for (const t in e) (e[t].cx = 0), (e[t].cy = 0), (e[t].count = 0);
            v.forEach((t) => {
              const { data: r } = t,
                n = e[r[c]];
              (0, i.Z)(r.x) && (n.cx += r.x),
                (0, i.Z)(r.y) && (n.cy += r.y),
                n.count++;
            });
            for (const t in e) (e[t].cx /= e[t].count), (e[t].cy /= e[t].count);
            const t = l || a;
            v.forEach((r, n) => {
              const { id: o, data: s } = r;
              if (!(0, i.Z)(s.x) || !(0, i.Z)(s.y)) return;
              const a = e[s[c]],
                u = Math.sqrt(
                  (s.x - a.cx) * (s.x - a.cx) + (s.y - a.cy) * (s.y - a.cy),
                ),
                d = m * t;
              (y[o].x -= (d * (s.x - a.cx)) / u),
                (y[o].y -= (d * (s.y - a.cy)) / u);
            });
          }
          v.forEach((t, e) => {
            const { id: r, data: o } = t;
            if (!(0, i.Z)(o.x) || !(0, i.Z)(o.y)) return;
            const s = 0.01 * m * a;
            (y[r].x -= s * (o.x - u[0])),
              (y[r].y -= s * (o.y - u[1])),
              3 === n && (y[r].z -= s * (o.z - u[2]));
          }),
            v.forEach((e, r) => {
              const { id: o, data: s } = e;
              if ((0, i.Z)(s.fx) && (0, i.Z)(s.fy))
                return (
                  (s.x = s.fx), (s.y = s.fy), void (3 === n && (s.z = s.fz))
                );
              if (!(0, i.Z)(s.x) || !(0, i.Z)(s.y)) return;
              const a = Math.sqrt(
                y[o].x * y[o].x +
                  y[o].y * y[o].y +
                  (3 === n ? y[o].z * y[o].z : 0),
              );
              if (a > 0) {
                const e = Math.min(g * (d / 800), a);
                t.mergeNodeData(o, {
                  x: s.x + (y[o].x / a) * e,
                  y: s.y + (y[o].y / a) * e,
                  z: 3 === n ? s.z + (y[o].z / a) * e : void 0,
                });
              }
            });
        }
        applyCalculate(t, e, r, n) {
          this.calRepulsive(t, e, n), this.calAttractive(t, e, r);
        }
        calRepulsive(t, e, r) {
          const n = t.getAllNodes();
          n.forEach(({ data: t, id: o }, s) => {
            (e[o] = { x: 0, y: 0, z: 0 }),
              n.forEach(({ data: n, id: a }, u) => {
                if (
                  s <= u ||
                  !(0, i.Z)(t.x) ||
                  !(0, i.Z)(n.x) ||
                  !(0, i.Z)(t.y) ||
                  !(0, i.Z)(n.y)
                )
                  return;
                let d = t.x - n.x,
                  h = t.y - n.y,
                  c = 3 === this.options.dimensions ? t.z - n.z : 0,
                  l = d * d + h * h + c * c;
                0 === l && ((l = 1), (d = 0.01), (h = 0.01), (c = 0.01));
                const f = r / l,
                  g = d * f,
                  v = h * f,
                  p = c * f;
                (e[o].x += g),
                  (e[o].y += v),
                  (e[a].x -= g),
                  (e[a].y -= v),
                  3 === this.options.dimensions &&
                    ((e[o].z += p), (e[a].z -= p));
              });
          });
        }
        calAttractive(t, e, r) {
          t.getAllEdges().forEach((n) => {
            const { source: o, target: s } = n;
            if (!o || !s || o === s) return;
            const { data: a } = t.getNode(o),
              { data: u } = t.getNode(s);
            if (
              !(
                (0, i.Z)(u.x) &&
                (0, i.Z)(a.x) &&
                (0, i.Z)(u.y) &&
                (0, i.Z)(a.y)
              )
            )
              return;
            const d = u.x - a.x,
              h = u.y - a.y,
              c = 3 === this.options.dimensions ? u.z - a.z : 0,
              l = Math.sqrt(d * d + h * h + c * c) / r,
              f = d * l,
              g = h * l,
              v = c * l;
            (e[o].x += f),
              (e[o].y += g),
              (e[s].x -= f),
              (e[s].y -= g),
              3 === this.options.dimensions && ((e[o].z += v), (e[s].z -= v));
          });
        }
      }
    },
    41733: function (t, e, r) {
      'use strict';
      r.d(e, {
        M: function () {
          return c;
        },
      });
      var n = r(97582),
        o = r(76714),
        i = r(25897),
        s = r(98130),
        a = r(78732),
        u = r(85087),
        d = r(20464);
      const h = {
        begin: [0, 0],
        preventOverlap: !0,
        preventOverlapPadding: 10,
        condense: !1,
        rows: void 0,
        cols: void 0,
        position: void 0,
        sortBy: 'degree',
        nodeSize: 30,
        width: 300,
        height: 300,
      };
      class c {
        constructor(t = {}) {
          (this.options = t),
            (this.id = 'grid'),
            (this.options = Object.assign(Object.assign({}, h), t));
        }
        execute(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.genericGridLayout(!1, t, e);
          });
        }
        assign(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield this.genericGridLayout(!0, t, e);
          });
        }
        genericGridLayout(t, e, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = Object.assign(Object.assign({}, this.options), r),
              {
                begin: h = [0, 0],
                condense: c,
                preventOverlapPadding: p,
                preventOverlap: y,
                rows: w,
                cols: x,
                nodeSpacing: b,
                nodeSize: E,
                width: N,
                height: M,
                position: k,
              } = n;
            let { sortBy: _ } = n;
            const S = e.getAllNodes(),
              A = e.getAllEdges(),
              O = null == S ? void 0 : S.length;
            if (!O || 1 === O) return (0, d.P)(e, t, h);
            const R = S.map((t) => (0, s.u)(t));
            'id' === _ ||
              ((0, o.Z)(_) && void 0 !== R[0].data[_]) ||
              (_ = 'degree'),
              'degree' === _
                ? R.sort(
                    (t, r) =>
                      e.getDegree(r.id, 'both') - e.getDegree(t.id, 'both'),
                  )
                : 'id' === _
                  ? R.sort((t, e) =>
                      (0, i.Z)(e.id) && (0, i.Z)(t.id)
                        ? e.id - t.id
                        : `${t.id}`.localeCompare(`${e.id}`),
                    )
                  : R.sort((t, e) => e.data[_] - t.data[_]);
            const z = N || 'undefined' == typeof window ? N : window.innerWidth,
              I = M || 'undefined' == typeof window ? M : window.innerHeight,
              j = O,
              C = { rows: w, cols: x };
            if (null != w && null != x) (C.rows = w), (C.cols = x);
            else if (null != w && null == x)
              (C.rows = w), (C.cols = Math.ceil(j / C.rows));
            else if (null == w && null != x)
              (C.cols = x), (C.rows = Math.ceil(j / C.cols));
            else {
              const t = Math.sqrt((j * I) / z);
              (C.rows = Math.round(t)), (C.cols = Math.round((z / I) * t));
            }
            if (
              ((C.rows = Math.max(C.rows, 1)),
              (C.cols = Math.max(C.cols, 1)),
              C.cols * C.rows > j)
            ) {
              const t = l(C),
                e = f(C);
              (t - 1) * e >= j ? l(C, t - 1) : (e - 1) * t >= j && f(C, e - 1);
            } else
              for (; C.cols * C.rows < j; ) {
                const t = l(C),
                  e = f(C);
                (e + 1) * t >= j ? f(C, e + 1) : l(C, t + 1);
              }
            let D = c ? 0 : z / C.cols,
              T = c ? 0 : I / C.rows;
            if (y || b) {
              const t = (0, a.jE)(10, b),
                r = (0, a.tO)(30, E, !1);
              R.forEach((n) => {
                (n.data.x && n.data.y) || ((n.data.x = 0), (n.data.y = 0));
                const o = e.getNode(n.id),
                  i = r(o) || 30;
                let s, a;
                (0, u.k)(i) ? ((s = i[0]), (a = i[1])) : ((s = i), (a = i));
                const d = void 0 !== t ? t(n) : p,
                  h = s + d,
                  c = a + d;
                (D = Math.max(D, h)), (T = Math.max(T, c));
              });
            }
            const P = {},
              L = { row: 0, col: 0 },
              F = {};
            for (let t = 0; t < R.length; t++) {
              const r = R[t];
              let n;
              if (
                (k && (n = k(e.getNode(r.id))),
                n && (void 0 !== n.row || void 0 !== n.col))
              ) {
                const t = { row: n.row, col: n.col };
                if (void 0 === t.col) for (t.col = 0; g(P, t); ) t.col++;
                else if (void 0 === t.row) for (t.row = 0; g(P, t); ) t.row++;
                (F[r.id] = t), v(P, t);
              }
              m(r, h, D, T, F, C, L, P);
            }
            const q = { nodes: R, edges: A };
            return (
              t &&
                R.forEach((t) => {
                  e.mergeNodeData(t.id, { x: t.data.x, y: t.data.y });
                }),
              q
            );
          });
        }
      }
      const l = (t, e) => {
          let r;
          const n = t.rows || 5,
            o = t.cols || 5;
          if (null == e) r = Math.min(n, o);
          else {
            Math.min(n, o) === t.rows ? (t.rows = e) : (t.cols = e);
          }
          return r;
        },
        f = (t, e) => {
          let r;
          const n = t.rows || 5,
            o = t.cols || 5;
          if (null == e) r = Math.max(n, o);
          else {
            Math.max(n, o) === t.rows ? (t.rows = e) : (t.cols = e);
          }
          return r;
        },
        g = (t, e) => t[`c-${e.row}-${e.col}`] || !1,
        v = (t, e) => (t[`c-${e.row}-${e.col}`] = !0),
        p = (t, e) => {
          const r = t.cols || 5;
          e.col++, e.col >= r && ((e.col = 0), e.row++);
        },
        m = (t, e, r, n, o, i, s, a) => {
          let u, d;
          const h = o[t.id];
          if (h) (u = h.col * r + r / 2 + e[0]), (d = h.row * n + n / 2 + e[1]);
          else {
            for (; g(a, s); ) p(i, s);
            (u = s.col * r + r / 2 + e[0]),
              (d = s.row * n + n / 2 + e[1]),
              v(a, s),
              p(i, s);
          }
          (t.data.x = u), (t.data.y = d);
        };
    },
    64912: function (t, e, r) {
      'use strict';
      r.d(e, {
        A: function () {
          return d;
        },
      });
      var n = r(97582),
        o = r(32014),
        i = r(80628),
        s = r(98130),
        a = r(20464);
      const u = { center: [0, 0], linkDistance: 50 };
      class d {
        constructor(t = {}) {
          (this.options = t),
            (this.id = 'mds'),
            (this.options = Object.assign(Object.assign({}, u), t));
        }
        execute(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.genericMDSLayout(!1, t, e);
          });
        }
        assign(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield this.genericMDSLayout(!0, t, e);
          });
        }
        genericMDSLayout(t, e, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = Object.assign(Object.assign({}, this.options), r),
              { center: o = [0, 0], linkDistance: u = 50 } = n,
              d = e.getAllNodes(),
              l = e.getAllEdges();
            if (!(null == d ? void 0 : d.length) || 1 === d.length)
              return (0, a.P)(e, t, o);
            const f = (0, i.zJ)({ nodes: d, edges: l }, !1),
              g = (0, i.qs)(f);
            h(g);
            const v = (0, i.nu)(g, u),
              p = c(v),
              m = [];
            p.forEach((t, e) => {
              const r = (0, s.u)(d[e]);
              (r.data.x = t[0] + o[0]), (r.data.y = t[1] + o[1]), m.push(r);
            }),
              t &&
                m.forEach((t) =>
                  e.mergeNodeData(t.id, { x: t.data.x, y: t.data.y }),
                );
            return { nodes: m, edges: l };
          });
        }
      }
      const h = (t) => {
          let e = -999999;
          t.forEach((t) => {
            t.forEach((t) => {
              t !== 1 / 0 && e < t && (e = t);
            });
          }),
            t.forEach((r, n) => {
              r.forEach((r, o) => {
                r === 1 / 0 && (t[n][o] = e);
              });
            });
        },
        c = (t) => {
          const e = o.y3.mul(o.y3.pow(t, 2), -0.5),
            r = e.mean('row'),
            n = e.mean('column'),
            i = e.mean();
          e.add(i).subRowVector(r).subColumnVector(n);
          const s = new o.Sc(e),
            a = o.y3.sqrt(s.diagonalMatrix).diagonal();
          return s.leftSingularVectors
            .toJSON()
            .map((t) => o.y3.mul([t], [a]).toJSON()[0].splice(0, 2));
        };
    },
    29257: function (t, e, r) {
      'use strict';
      r.d(e, {
        D: function () {
          return g;
        },
      });
      var n = r(97582),
        o = r(76714),
        i = r(80628),
        s = r(78732),
        a = r(98130),
        u = r(20464),
        d = r(32014);
      const h = {
          iterations: 10,
          height: 10,
          width: 10,
          speed: 100,
          gravity: 10,
          k: 5,
        },
        c = (t, e, r, n, o, i) => {
          e.forEach((s, a) => {
            (r[a] = { x: 0, y: 0 }),
              e.forEach((e, u) => {
                if (a === u) return;
                if (o[a] !== o[u]) return;
                let d = s.x - e.x,
                  h = s.y - e.y,
                  c = Math.sqrt(d * d + h * h);
                if (0 === c) {
                  c = 1;
                  const t = a > u ? 1 : -1;
                  (d = 0.01 * t), (h = 0.01 * t);
                }
                if (c < i(t[a]) / 2 + i(t[u]) / 2) {
                  const t = (n * n) / c;
                  (r[a].x += (d / c) * t), (r[a].y += (h / c) * t);
                }
              });
          });
        },
        l = (t, e, r, n, o, i, s, a) => {
          const u = i || s / 10;
          return (
            n &&
              e.forEach((e, r) => {
                const n = t[r].x - t[o].x,
                  i = t[r].y - t[o].y,
                  s = Math.sqrt(n * n + i * i);
                let a = i / s,
                  u = -n / s;
                const d = Math.sqrt(e.x * e.x + e.y * e.y);
                let h = Math.acos((a * e.x + u * e.y) / d);
                h > Math.PI / 2 && ((h -= Math.PI / 2), (a *= -1), (u *= -1));
                const c = Math.cos(h) * d;
                (e.x = a * c), (e.y = u * c);
              }),
            t.forEach((i, s) => {
              if (s === o) return;
              const d = Math.sqrt(e[s].x * e[s].x + e[s].y * e[s].y);
              if (d > 0 && s !== o) {
                const h = Math.min(u * (r / 800), d);
                if (((i.x += (e[s].x / d) * h), (i.y += (e[s].y / d) * h), n)) {
                  let e = i.x - t[o].x,
                    r = i.y - t[o].y;
                  const n = Math.sqrt(e * e + r * r);
                  (e = (e / n) * a[s]),
                    (r = (r / n) * a[s]),
                    (i.x = t[o].x + e),
                    (i.y = t[o].y + r);
                }
              }
            }),
            t
          );
        },
        f = {
          maxIteration: 1e3,
          focusNode: null,
          unitRadius: null,
          linkDistance: 50,
          preventOverlap: !1,
          strictRadial: !0,
          maxPreventOverlapIteration: 200,
          sortStrength: 10,
        };
      class g {
        constructor(t = {}) {
          (this.options = t),
            (this.id = 'radial'),
            (this.options = Object.assign(Object.assign({}, f), t));
        }
        execute(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.genericRadialLayout(!1, t, e);
          });
        }
        assign(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield this.genericRadialLayout(!0, t, e);
          });
        }
        genericRadialLayout(t, e, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = Object.assign(Object.assign({}, this.options), r),
              {
                width: f,
                height: g,
                center: x,
                focusNode: b,
                unitRadius: E,
                nodeSize: N,
                nodeSpacing: M,
                strictRadial: k,
                preventOverlap: _,
                maxPreventOverlapIteration: S,
                sortBy: A,
                linkDistance: O = 50,
                sortStrength: R = 10,
                maxIteration: z = 1e3,
              } = n,
              I = e.getAllNodes(),
              j = e.getAllEdges(),
              C = f || 'undefined' == typeof window ? f : window.innerWidth,
              D = g || 'undefined' == typeof window ? g : window.innerHeight,
              T = x || [C / 2, D / 2];
            if (!(null == I ? void 0 : I.length) || 1 === I.length)
              return (0, u.P)(e, t, T);
            let P = I[0];
            if ((0, o.Z)(b)) {
              for (let t = 0; t < I.length; t++)
                if (I[t].id === b) {
                  P = I[t];
                  break;
                }
            } else P = b || I[0];
            const L = m(I, P.id),
              F = (0, i.zJ)({ nodes: I, edges: j }, !1),
              q = (0, i.qs)(F),
              Z = w(q, L);
            y(q, L, Z + 1);
            const G = q[L];
            let V = C - T[0] > T[0] ? T[0] : C - T[0],
              B = D - T[1] > T[1] ? T[1] : D - T[1];
            0 === V && (V = C / 2), 0 === B && (B = D / 2);
            const U = Math.min(V, B),
              W = Math.max(...G),
              Y = [],
              $ = E || U / W;
            G.forEach((t, e) => {
              Y[e] = t * $;
            });
            const H = v(I, q, O, Y, $, A, R),
              K = p(H),
              J = ((t, e, r) => {
                try {
                  const r = d.y3.mul(d.y3.pow(e, 2), -0.5),
                    n = r.mean('row'),
                    o = r.mean('column'),
                    i = r.mean();
                  r.add(i).subRowVector(n).subColumnVector(o);
                  const s = new d.Sc(r),
                    a = d.y3.sqrt(s.diagonalMatrix).diagonal();
                  return s.leftSingularVectors
                    .toJSON()
                    .map((e) => d.y3.mul([e], [a]).toJSON()[0].splice(0, t));
                } catch (t) {
                  const n = [];
                  for (let t = 0; t < e.length; t++) {
                    const t = Math.random() * r,
                      e = Math.random() * r;
                    n.push([t, e]);
                  }
                  return n;
                }
              })(O, H, O);
            let Q,
              X = J.map(([t, e]) => ({
                x: (isNaN(t) ? Math.random() * O : t) - J[L][0],
                y: (isNaN(e) ? Math.random() * O : e) - J[L][1],
              }));
            if ((this.run(z, X, K, H, Y, L), _)) {
              Q = (0, s.gl)(N, M);
              const t = {
                nodes: I,
                nodeSizeFunc: Q,
                positions: X,
                radii: Y,
                height: D,
                width: C,
                strictRadial: Boolean(k),
                focusIdx: L,
                iterations: S || 200,
                k: X.length / 4.5,
              };
              X = ((t, e) => {
                const r = Object.assign(Object.assign({}, h), e),
                  {
                    positions: n,
                    iterations: o,
                    width: i,
                    k: s,
                    speed: a = 100,
                    strictRadial: u,
                    focusIdx: d,
                    radii: f = [],
                    nodeSizeFunc: g,
                  } = r,
                  v = t.getAllNodes(),
                  p = [],
                  m = i / 10;
                for (let t = 0; t < o; t++)
                  n.forEach((t, e) => {
                    p[e] = { x: 0, y: 0 };
                  }),
                    c(v, n, p, s, f, g),
                    l(n, p, a, u, d, m, i, f);
                return n;
              })(e, t);
            }
            const tt = [];
            X.forEach((t, e) => {
              const r = (0, a.u)(I[e]);
              (r.data.x = t.x + T[0]), (r.data.y = t.y + T[1]), tt.push(r);
            }),
              t &&
                tt.forEach((t) =>
                  e.mergeNodeData(t.id, { x: t.data.x, y: t.data.y }),
                );
            return { nodes: tt, edges: j };
          });
        }
        run(t, e, r, n, o, i) {
          for (let s = 0; s <= t; s++) {
            const a = s / t;
            this.oneIteration(a, e, o, n, r, i);
          }
        }
        oneIteration(t, e, r, n, o, s) {
          const a = 1 - t;
          e.forEach((u, d) => {
            const h = (0, i.$y)(u, { x: 0, y: 0 }),
              c = 0 === h ? 0 : 1 / h;
            if (d === s) return;
            let l = 0,
              f = 0,
              g = 0;
            e.forEach((t, e) => {
              if (d === e) return;
              const r = (0, i.$y)(u, t),
                s = 0 === r ? 0 : 1 / r,
                a = n[e][d];
              (g += o[d][e]),
                (l += o[d][e] * (t.x + a * (u.x - t.x) * s)),
                (f += o[d][e] * (t.y + a * (u.y - t.y) * s));
            });
            const v = 0 === r[d] ? 0 : 1 / r[d];
            (g *= a),
              (g += t * v * v),
              (l *= a),
              (l += t * v * u.x * c),
              (u.x = l / g),
              (f *= a),
              (f += t * v * u.y * c),
              (u.y = f / g);
          });
        }
      }
      const v = (t, e, r, n, i, s, a) => {
          if (!t) return [];
          const u = [];
          if (e) {
            const d = {};
            e.forEach((e, h) => {
              const c = [];
              e.forEach((e, u) => {
                var l, f;
                if (h === u) c.push(0);
                else if (n[h] === n[u])
                  if ('data' === s)
                    c.push((e * (Math.abs(h - u) * a)) / (n[h] / i));
                  else if (s) {
                    let r, g;
                    if (d[t[h].id]) r = d[t[h].id];
                    else {
                      const e =
                        ('id' === s
                          ? t[h].id
                          : null === (l = t[h].data) || void 0 === l
                            ? void 0
                            : l[s]) || 0;
                      (r = (0, o.Z)(e) ? e.charCodeAt(0) : e), (d[t[h].id] = r);
                    }
                    if (d[t[u].id]) g = d[t[u].id];
                    else {
                      const e =
                        ('id' === s
                          ? t[u].id
                          : null === (f = t[u].data) || void 0 === f
                            ? void 0
                            : f[s]) || 0;
                      (g = (0, o.Z)(e) ? e.charCodeAt(0) : e), (d[t[u].id] = g);
                    }
                    c.push((e * (Math.abs(r - g) * a)) / (n[h] / i));
                  } else c.push((e * r) / (n[h] / i));
                else {
                  const t = (r + i) / 2;
                  c.push(e * t);
                }
              }),
                u.push(c);
            });
          }
          return u;
        },
        p = (t) => {
          const e = t.length,
            r = t[0].length,
            n = [];
          for (let o = 0; o < e; o++) {
            const e = [];
            for (let n = 0; n < r; n++)
              0 !== t[o][n] ? e.push(1 / (t[o][n] * t[o][n])) : e.push(0);
            n.push(e);
          }
          return n;
        },
        m = (t, e) => {
          let r = -1;
          return (
            t.forEach((t, n) => {
              t.id === e && (r = n);
            }),
            Math.max(r, 0)
          );
        },
        y = (t, e, r) => {
          const n = t.length;
          for (let o = 0; o < n; o++)
            if (t[e][o] === 1 / 0) {
              (t[e][o] = r), (t[o][e] = r);
              for (let i = 0; i < n; i++)
                t[o][i] !== 1 / 0 &&
                  t[e][i] === 1 / 0 &&
                  ((t[e][i] = r + t[o][i]), (t[i][e] = r + t[o][i]));
            }
          for (let r = 0; r < n; r++)
            if (r !== e)
              for (let o = 0; o < n; o++)
                if (t[r][o] === 1 / 0) {
                  let n = Math.abs(t[e][r] - t[e][o]);
                  (n = 0 === n ? 1 : n), (t[r][o] = n);
                }
        },
        w = (t, e) => {
          let r = 0;
          for (let n = 0; n < t[e].length; n++)
            t[e][n] !== 1 / 0 && (r = t[e][n] > r ? t[e][n] : r);
          return r;
        };
    },
    26629: function (t, e, r) {
      'use strict';
      r.d(e, {
        _: function () {
          return i;
        },
      });
      var n = r(97582);
      const o = { center: [0, 0], width: 300, height: 300 };
      class i {
        constructor(t = {}) {
          (this.options = t),
            (this.id = 'random'),
            (this.options = Object.assign(Object.assign({}, o), t));
        }
        execute(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.genericRandomLayout(!1, t, e);
          });
        }
        assign(t, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield this.genericRandomLayout(!0, t, e);
          });
        }
        genericRandomLayout(t, e, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = Object.assign(Object.assign({}, this.options), r),
              { center: o, width: i, height: s } = n,
              a = e.getAllNodes(),
              u = i || 'undefined' == typeof window ? i : window.innerWidth,
              d = s || 'undefined' == typeof window ? s : window.innerHeight,
              h = o || [u / 2, d / 2],
              c = [];
            a &&
              a.forEach((t) => {
                c.push({
                  id: t.id,
                  data: {
                    x: 0.9 * (Math.random() - 0.5) * u + h[0],
                    y: 0.9 * (Math.random() - 0.5) * d + h[1],
                  },
                });
              }),
              t &&
                c.forEach((t) =>
                  e.mergeNodeData(t.id, { x: t.data.x, y: t.data.y }),
                );
            return { nodes: c, edges: e.getAllEdges() };
          });
        }
      }
    },
    10779: function (t, e, r) {
      'use strict';
      function n(t) {
        return !!t.tick && !!t.stop;
      }
      r.d(e, {
        h: function () {
          return n;
        },
      });
    },
    85087: function (t, e, r) {
      'use strict';
      r.d(e, {
        k: function () {
          return n;
        },
      });
      const n = Array.isArray;
    },
    20464: function (t, e, r) {
      'use strict';
      r.d(e, {
        P: function () {
          return n;
        },
      });
      const n = (t, e, r) => {
        const n = t.getAllNodes(),
          o = t.getAllEdges();
        if (!(null == n ? void 0 : n.length)) {
          return { nodes: [], edges: o };
        }
        if (1 === n.length) {
          e && t.mergeNodeData(n[0].id, { x: r[0], y: r[1] });
          return {
            nodes: [
              Object.assign(Object.assign({}, n[0]), {
                data: Object.assign(Object.assign({}, n[0].data), {
                  x: r[0],
                  y: r[1],
                }),
              }),
            ],
            edges: o,
          };
        }
      };
    },
    78732: function (t, e, r) {
      'use strict';
      r.d(e, {
        gl: function () {
          return u;
        },
        jE: function () {
          return s;
        },
        tO: function () {
          return a;
        },
      });
      var n = r(45607),
        o = r(25897),
        i = r(4637);
      function s(t, e) {
        let r;
        return (r = (0, n.Z)(e) ? e : (0, o.Z)(e) ? () => e : () => t), r;
      }
      function a(t, e, r = !0) {
        return e || 0 === e
          ? (0, n.Z)(e)
            ? e
            : (0, o.Z)(e)
              ? () => e
              : Array.isArray(e)
                ? () => {
                    if (r) {
                      const r = Math.max(...e);
                      return isNaN(r) ? t : r;
                    }
                    return e;
                  }
                : (0, i.Z)(e)
                  ? () => {
                      if (r) {
                        const r = Math.max(e.width, e.height);
                        return isNaN(r) ? t : r;
                      }
                      return [e.width, e.height];
                    }
                  : () => t
          : (e) => {
              const { size: r } = e.data || {};
              return r
                ? Array.isArray(r)
                  ? r[0] > r[1]
                    ? r[0]
                    : r[1]
                  : (0, i.Z)(r)
                    ? r.width > r.height
                      ? r.width
                      : r.height
                    : r
                : t;
            };
      }
      const u = (t, e) => {
        let r, s;
        return (
          (s = (0, o.Z)(e) ? () => e : (0, n.Z)(e) ? e : () => 0),
          (r = t
            ? Array.isArray(t)
              ? (e) => (t[0] > t[1] ? t[0] : t[1]) + s(e)
              : (0, n.Z)(t)
                ? t
                : (e) => t + s(e)
            : (t) => {
                var e, r;
                if (null === (e = t.data) || void 0 === e ? void 0 : e.bboxSize)
                  return (
                    Math.max(t.data.bboxSize[0], t.data.bboxSize[1]) + s(t)
                  );
                if (null === (r = t.data) || void 0 === r ? void 0 : r.size) {
                  if (Array.isArray(t.data.size))
                    return Math.max(t.data.size[0], t.data.size[1]) + s(t);
                  const e = t.data.size;
                  if ((0, i.Z)(e)) {
                    return (e.width > e.height ? e.width : e.height) + s(t);
                  }
                  return e + s(t);
                }
                return 10 + s(t);
              }),
          r
        );
      };
    },
    80628: function (t, e, r) {
      'use strict';
      r.d(e, {
        $y: function () {
          return d;
        },
        H0: function () {
          return u;
        },
        _: function () {
          return h;
        },
        nu: function () {
          return a;
        },
        qs: function () {
          return i;
        },
        zJ: function () {
          return s;
        },
      });
      var n = r(25897),
        o = r(85087);
      const i = (t) => {
          const e = [],
            r = t.length;
          for (let n = 0; n < r; n += 1) {
            e[n] = [];
            for (let o = 0; o < r; o += 1)
              n === o
                ? (e[n][o] = 0)
                : 0 !== t[n][o] && t[n][o]
                  ? (e[n][o] = t[n][o])
                  : (e[n][o] = 1 / 0);
          }
          for (let t = 0; t < r; t += 1)
            for (let n = 0; n < r; n += 1)
              for (let o = 0; o < r; o += 1)
                e[n][o] > e[n][t] + e[t][o] && (e[n][o] = e[n][t] + e[t][o]);
          return e;
        },
        s = (t, e) => {
          const { nodes: r, edges: n } = t,
            o = [],
            i = {};
          if (!r) throw new Error('invalid nodes data!');
          return (
            r &&
              r.forEach((t, e) => {
                i[t.id] = e;
                o.push([]);
              }),
            null == n ||
              n.forEach((t) => {
                const { source: r, target: n } = t,
                  s = i[r],
                  a = i[n];
                void 0 !== s &&
                  void 0 !== a &&
                  ((o[s][a] = 1), e || (o[a][s] = 1));
              }),
            o
          );
        },
        a = (t, e) => {
          const r = [];
          return (
            t.forEach((t) => {
              const n = [];
              t.forEach((t) => {
                n.push(t * e);
              }),
                r.push(n);
            }),
            r
          );
        },
        u = (t) => {
          let e = 1 / 0,
            r = 1 / 0,
            i = -1 / 0,
            s = -1 / 0;
          return (
            t.forEach((t) => {
              let a = t.data.size;
              (0, o.k)(a)
                ? 1 === a.length && (a = [a[0], a[0]])
                : (0, n.Z)(a)
                  ? (a = [a, a])
                  : (void 0 === a || isNaN(a)) && (a = [30, 30]);
              const u = [a[0] / 2, a[1] / 2],
                d = t.data.x - u[0],
                h = t.data.x + u[0],
                c = t.data.y - u[1],
                l = t.data.y + u[1];
              e > d && (e = d),
                r > c && (r = c),
                i < h && (i = h),
                s < l && (s = l);
            }),
            { minX: e, minY: r, maxX: i, maxY: s }
          );
        },
        d = (t, e) =>
          Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y)),
        h = (t, e, r, n = 'TB', o, i = {}) => {
          if (!(null == e ? void 0 : e.length)) return;
          const { stopBranchFn: s, stopAllFn: a } = i;
          for (let u = 0; u < e.length; u++) {
            const d = e[u];
            if (t.hasNode(d.id) && !(null == s ? void 0 : s(d))) {
              if (null == a ? void 0 : a(d)) return;
              'TB' === n && r(d),
                h(t, t.getChildren(d.id, o), r, n, o, i),
                'TB' !== n && r(d);
            }
          }
        };
    },
    98130: function (t, e, r) {
      'use strict';
      r.d(e, {
        u: function () {
          return i;
        },
      });
      var n = r(25897);
      const o = (t) => {
          if (null === t) return t;
          if (t instanceof Date) return new Date(t.getTime());
          if (t instanceof Array) {
            const e = [];
            return (
              t.forEach((t) => {
                e.push(t);
              }),
              e.map((t) => o(t))
            );
          }
          if ('object' == typeof t) {
            const e = {};
            return (
              Object.keys(t).forEach((r) => {
                e[r] = o(t[r]);
              }),
              e
            );
          }
          return t;
        },
        i = (t, e) => {
          const r = o(t);
          return (
            (r.data = r.data || {}),
            e &&
              ((0, n.Z)(r.data.x) || (r.data.x = Math.random() * e[0]),
              (0, n.Z)(r.data.y) || (r.data.y = Math.random() * e[1])),
            r
          );
        };
    },
    83207: function (t, e, r) {
      'use strict';
      var n = r(5199),
        o = function (t) {
          if ('object' != typeof t || null === t) return t;
          var e;
          if ((0, n.Z)(t)) {
            e = [];
            for (var r = 0, i = t.length; r < i; r++)
              'object' == typeof t[r] && null != t[r]
                ? (e[r] = o(t[r]))
                : (e[r] = t[r]);
          } else
            for (var s in ((e = {}), t))
              'object' == typeof t[s] && null != t[s]
                ? (e[s] = o(t[s]))
                : (e[s] = t[s]);
          return e;
        };
      e.Z = o;
    },
    15255: function (t, e, r) {
      'use strict';
      var n = r(5199),
        o = r(4637);
      e.Z = function (t, e) {
        if (t)
          if ((0, n.Z)(t))
            for (var r = 0, i = t.length; r < i && !1 !== e(t[r], r); r++);
          else if ((0, o.Z)(t))
            for (var s in t)
              if (t.hasOwnProperty(s) && !1 === e(t[s], s)) break;
      };
    },
    23413: function (t, e, r) {
      'use strict';
      var n = r(15255),
        o = r(83845),
        i = Object.prototype.hasOwnProperty;
      e.Z = function (t, e) {
        if (null === t || !(0, o.Z)(t)) return {};
        var r = {};
        return (
          (0, n.Z)(e, function (e) {
            i.call(t, e) && (r[e] = t[e]);
          }),
          r
        );
      };
    },
    49612: function (t, e, r) {
      'use strict';
      var n = r(28785).default,
        o = r(48374).default,
        i = r(29777).default,
        s = r(25457).default,
        a = r(33862).default,
        u = r(25098).default,
        d = r(31996).default,
        h = r(26037).default,
        c = r(80363).default,
        l = r(9783).default,
        f = r(74978).default,
        g = r(5574).default,
        v = r(64599).default,
        p = r(15009).default,
        m = r(52677).default,
        y = r(12444).default,
        w = r(72004).default;
      var x = r(44091),
        b = r(75823),
        E = ' '.repeat(2),
        N = ' '.repeat(4);
      function M(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = e.maxRows,
          n = void 0 === r ? 15 : r,
          o = e.maxColumns,
          i = void 0 === o ? 10 : o,
          s = e.maxNumSize,
          a = void 0 === s ? 8 : s,
          u = e.padMinus,
          d = void 0 === u ? 'auto' : u;
        return ''
          .concat(t.constructor.name, ' {\n')
          .concat(E, '[\n')
          .concat(N)
          .concat(
            (function (t, e, r, n, o) {
              var i = t.rows,
                s = t.columns,
                a = Math.min(i, e),
                u = Math.min(s, r),
                d = [];
              if ('auto' === o) {
                o = !1;
                t: for (var h = 0; h < a; h++)
                  for (var c = 0; c < u; c++)
                    if (t.get(h, c) < 0) {
                      o = !0;
                      break t;
                    }
              }
              for (var l = 0; l < a; l++) {
                for (var f = [], g = 0; g < u; g++)
                  f.push(k(t.get(l, g), n, o));
                d.push(''.concat(f.join(' ')));
              }
              u !== s &&
                (d[d.length - 1] += ' ... '.concat(s - r, ' more columns'));
              a !== i && d.push('... '.concat(i - e, ' more rows'));
              return d.join('\n'.concat(N));
            })(t, n, i, a, d),
            '\n',
          )
          .concat(E, ']\n')
          .concat(E, 'rows: ')
          .concat(t.rows, '\n')
          .concat(E, 'columns: ')
          .concat(t.columns, '\n}');
      }
      function k(t, e, r) {
        return (t >= 0 && r ? ' '.concat(_(t, e - 1)) : _(t, e)).padEnd(e);
      }
      function _(t, e) {
        var r = t.toString();
        if (r.length <= e) return r;
        var n = t.toFixed(e);
        if (
          (n.length > e && (n = t.toFixed(Math.max(0, e - (n.length - e)))),
          n.length <= e && !n.startsWith('0.000') && !n.startsWith('-0.000'))
        )
          return n;
        var o = t.toExponential(e);
        return (
          o.length > e &&
            (o = t.toExponential(Math.max(0, e - (o.length - e)))),
          o.slice(0)
        );
      }
      function S(t, e, r) {
        var n = r ? t.rows : t.rows - 1;
        if (e < 0 || e > n) throw new RangeError('Row index out of range');
      }
      function A(t, e, r) {
        var n = r ? t.columns : t.columns - 1;
        if (e < 0 || e > n) throw new RangeError('Column index out of range');
      }
      function O(t, e) {
        if ((e.to1DArray && (e = e.to1DArray()), e.length !== t.columns))
          throw new RangeError(
            'vector size must be the same as the number of columns',
          );
        return e;
      }
      function R(t, e) {
        if ((e.to1DArray && (e = e.to1DArray()), e.length !== t.rows))
          throw new RangeError(
            'vector size must be the same as the number of rows',
          );
        return e;
      }
      function z(t, e) {
        if (!x.isAnyArray(e))
          throw new TypeError('row indices must be an array');
        for (var r = 0; r < e.length; r++)
          if (e[r] < 0 || e[r] >= t.rows)
            throw new RangeError('row indices are out of range');
      }
      function I(t, e) {
        if (!x.isAnyArray(e))
          throw new TypeError('column indices must be an array');
        for (var r = 0; r < e.length; r++)
          if (e[r] < 0 || e[r] >= t.columns)
            throw new RangeError('column indices are out of range');
      }
      function j(t, e, r, n, o) {
        if (5 !== arguments.length)
          throw new RangeError('expected 4 arguments');
        if (
          (D('startRow', e),
          D('endRow', r),
          D('startColumn', n),
          D('endColumn', o),
          e > r ||
            n > o ||
            e < 0 ||
            e >= t.rows ||
            r < 0 ||
            r >= t.rows ||
            n < 0 ||
            n >= t.columns ||
            o < 0 ||
            o >= t.columns)
        )
          throw new RangeError('Submatrix indices are out of range');
      }
      function C(t) {
        for (
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r = [],
            n = 0;
          n < t;
          n++
        )
          r.push(e);
        return r;
      }
      function D(t, e) {
        if ('number' != typeof e)
          throw new TypeError(''.concat(t, ' must be a number'));
      }
      function T(t) {
        if (t.isEmpty())
          throw new Error('Empty matrix has no elements to index');
      }
      var P = (function (t) {
        function e() {
          y(this, e);
        }
        return (
          w(
            e,
            [
              {
                key: 'size',
                get: function () {
                  return this.rows * this.columns;
                },
              },
              {
                key: 'apply',
                value: function (t) {
                  if ('function' != typeof t)
                    throw new TypeError('callback must be a function');
                  for (var e = 0; e < this.rows; e++)
                    for (var r = 0; r < this.columns; r++) t.call(this, e, r);
                  return this;
                },
              },
              {
                key: 'to1DArray',
                value: function () {
                  for (var t = [], e = 0; e < this.rows; e++)
                    for (var r = 0; r < this.columns; r++)
                      t.push(this.get(e, r));
                  return t;
                },
              },
              {
                key: 'to2DArray',
                value: function () {
                  for (var t = [], e = 0; e < this.rows; e++) {
                    t.push([]);
                    for (var r = 0; r < this.columns; r++)
                      t[e].push(this.get(e, r));
                  }
                  return t;
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return this.to2DArray();
                },
              },
              {
                key: 'isRowVector',
                value: function () {
                  return 1 === this.rows;
                },
              },
              {
                key: 'isColumnVector',
                value: function () {
                  return 1 === this.columns;
                },
              },
              {
                key: 'isVector',
                value: function () {
                  return 1 === this.rows || 1 === this.columns;
                },
              },
              {
                key: 'isSquare',
                value: function () {
                  return this.rows === this.columns;
                },
              },
              {
                key: 'isEmpty',
                value: function () {
                  return 0 === this.rows || 0 === this.columns;
                },
              },
              {
                key: 'isSymmetric',
                value: function () {
                  if (this.isSquare()) {
                    for (var t = 0; t < this.rows; t++)
                      for (var e = 0; e <= t; e++)
                        if (this.get(t, e) !== this.get(e, t)) return !1;
                    return !0;
                  }
                  return !1;
                },
              },
              {
                key: 'isDistance',
                value: function () {
                  if (!this.isSymmetric()) return !1;
                  for (var t = 0; t < this.rows; t++)
                    if (0 !== this.get(t, t)) return !1;
                  return !0;
                },
              },
              {
                key: 'isEchelonForm',
                value: function () {
                  for (
                    var t = 0, e = 0, r = -1, n = !0, o = !1;
                    t < this.rows && n;

                  ) {
                    for (e = 0, o = !1; e < this.columns && !1 === o; )
                      0 === this.get(t, e)
                        ? e++
                        : 1 === this.get(t, e) && e > r
                          ? ((o = !0), (r = e))
                          : ((n = !1), (o = !0));
                    t++;
                  }
                  return n;
                },
              },
              {
                key: 'isReducedEchelonForm',
                value: function () {
                  for (
                    var t = 0, e = 0, r = -1, n = !0, o = !1;
                    t < this.rows && n;

                  ) {
                    for (e = 0, o = !1; e < this.columns && !1 === o; )
                      0 === this.get(t, e)
                        ? e++
                        : 1 === this.get(t, e) && e > r
                          ? ((o = !0), (r = e))
                          : ((n = !1), (o = !0));
                    for (var i = e + 1; i < this.rows; i++)
                      0 !== this.get(t, i) && (n = !1);
                    t++;
                  }
                  return n;
                },
              },
              {
                key: 'echelonForm',
                value: function () {
                  for (
                    var t = this.clone(), e = 0, r = 0;
                    e < t.rows && r < t.columns;

                  ) {
                    for (var n = e, o = e; o < t.rows; o++)
                      t.get(o, r) > t.get(n, r) && (n = o);
                    if (0 === t.get(n, r)) r++;
                    else {
                      t.swapRows(e, n);
                      for (var i = t.get(e, r), s = r; s < t.columns; s++)
                        t.set(e, s, t.get(e, s) / i);
                      for (var a = e + 1; a < t.rows; a++) {
                        var u = t.get(a, r) / t.get(e, r);
                        t.set(a, r, 0);
                        for (var d = r + 1; d < t.columns; d++)
                          t.set(a, d, t.get(a, d) - t.get(e, d) * u);
                      }
                      e++, r++;
                    }
                  }
                  return t;
                },
              },
              {
                key: 'reducedEchelonForm',
                value: function () {
                  for (
                    var t = this.echelonForm(),
                      e = t.columns,
                      r = t.rows,
                      n = r - 1;
                    n >= 0;

                  )
                    if (0 === t.maxRow(n)) n--;
                    else {
                      for (var o = 0, i = !1; o < r && !1 === i; )
                        1 === t.get(n, o) ? (i = !0) : o++;
                      for (var s = 0; s < n; s++)
                        for (var a = t.get(s, o), u = o; u < e; u++) {
                          var d = t.get(s, u) - a * t.get(n, u);
                          t.set(s, u, d);
                        }
                      n--;
                    }
                  return t;
                },
              },
              {
                key: 'set',
                value: function () {
                  throw new Error('set method is unimplemented');
                },
              },
              {
                key: 'get',
                value: function () {
                  throw new Error('get method is unimplemented');
                },
              },
              {
                key: 'repeat',
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  if ('object' !== m(t))
                    throw new TypeError('options must be an object');
                  var e = t.rows,
                    r = void 0 === e ? 1 : e,
                    n = t.columns,
                    o = void 0 === n ? 1 : n;
                  if (!Number.isInteger(r) || r <= 0)
                    throw new TypeError('rows must be a positive integer');
                  if (!Number.isInteger(o) || o <= 0)
                    throw new TypeError('columns must be a positive integer');
                  for (
                    var i = new q(this.rows * r, this.columns * o), s = 0;
                    s < r;
                    s++
                  )
                    for (var a = 0; a < o; a++)
                      i.setSubMatrix(this, this.rows * s, this.columns * a);
                  return i;
                },
              },
              {
                key: 'fill',
                value: function (t) {
                  for (var e = 0; e < this.rows; e++)
                    for (var r = 0; r < this.columns; r++) this.set(e, r, t);
                  return this;
                },
              },
              {
                key: 'neg',
                value: function () {
                  return this.mulS(-1);
                },
              },
              {
                key: 'getRow',
                value: function (t) {
                  S(this, t);
                  for (var e = [], r = 0; r < this.columns; r++)
                    e.push(this.get(t, r));
                  return e;
                },
              },
              {
                key: 'getRowVector',
                value: function (t) {
                  return q.rowVector(this.getRow(t));
                },
              },
              {
                key: 'setRow',
                value: function (t, e) {
                  S(this, t), (e = O(this, e));
                  for (var r = 0; r < this.columns; r++) this.set(t, r, e[r]);
                  return this;
                },
              },
              {
                key: 'swapRows',
                value: function (t, e) {
                  S(this, t), S(this, e);
                  for (var r = 0; r < this.columns; r++) {
                    var n = this.get(t, r);
                    this.set(t, r, this.get(e, r)), this.set(e, r, n);
                  }
                  return this;
                },
              },
              {
                key: 'getColumn',
                value: function (t) {
                  A(this, t);
                  for (var e = [], r = 0; r < this.rows; r++)
                    e.push(this.get(r, t));
                  return e;
                },
              },
              {
                key: 'getColumnVector',
                value: function (t) {
                  return q.columnVector(this.getColumn(t));
                },
              },
              {
                key: 'setColumn',
                value: function (t, e) {
                  A(this, t), (e = R(this, e));
                  for (var r = 0; r < this.rows; r++) this.set(r, t, e[r]);
                  return this;
                },
              },
              {
                key: 'swapColumns',
                value: function (t, e) {
                  A(this, t), A(this, e);
                  for (var r = 0; r < this.rows; r++) {
                    var n = this.get(r, t);
                    this.set(r, t, this.get(r, e)), this.set(r, e, n);
                  }
                  return this;
                },
              },
              {
                key: 'addRowVector',
                value: function (t) {
                  t = O(this, t);
                  for (var e = 0; e < this.rows; e++)
                    for (var r = 0; r < this.columns; r++)
                      this.set(e, r, this.get(e, r) + t[r]);
                  return this;
                },
              },
              {
                key: 'subRowVector',
                value: function (t) {
                  t = O(this, t);
                  for (var e = 0; e < this.rows; e++)
                    for (var r = 0; r < this.columns; r++)
                      this.set(e, r, this.get(e, r) - t[r]);
                  return this;
                },
              },
              {
                key: 'mulRowVector',
                value: function (t) {
                  t = O(this, t);
                  for (var e = 0; e < this.rows; e++)
                    for (var r = 0; r < this.columns; r++)
                      this.set(e, r, this.get(e, r) * t[r]);
                  return this;
                },
              },
              {
                key: 'divRowVector',
                value: function (t) {
                  t = O(this, t);
                  for (var e = 0; e < this.rows; e++)
                    for (var r = 0; r < this.columns; r++)
                      this.set(e, r, this.get(e, r) / t[r]);
                  return this;
                },
              },
              {
                key: 'addColumnVector',
                value: function (t) {
                  t = R(this, t);
                  for (var e = 0; e < this.rows; e++)
                    for (var r = 0; r < this.columns; r++)
                      this.set(e, r, this.get(e, r) + t[e]);
                  return this;
                },
              },
              {
                key: 'subColumnVector',
                value: function (t) {
                  t = R(this, t);
                  for (var e = 0; e < this.rows; e++)
                    for (var r = 0; r < this.columns; r++)
                      this.set(e, r, this.get(e, r) - t[e]);
                  return this;
                },
              },
              {
                key: 'mulColumnVector',
                value: function (t) {
                  t = R(this, t);
                  for (var e = 0; e < this.rows; e++)
                    for (var r = 0; r < this.columns; r++)
                      this.set(e, r, this.get(e, r) * t[e]);
                  return this;
                },
              },
              {
                key: 'divColumnVector',
                value: function (t) {
                  t = R(this, t);
                  for (var e = 0; e < this.rows; e++)
                    for (var r = 0; r < this.columns; r++)
                      this.set(e, r, this.get(e, r) / t[e]);
                  return this;
                },
              },
              {
                key: 'mulRow',
                value: function (t, e) {
                  S(this, t);
                  for (var r = 0; r < this.columns; r++)
                    this.set(t, r, this.get(t, r) * e);
                  return this;
                },
              },
              {
                key: 'mulColumn',
                value: function (t, e) {
                  A(this, t);
                  for (var r = 0; r < this.rows; r++)
                    this.set(r, t, this.get(r, t) * e);
                  return this;
                },
              },
              {
                key: 'max',
                value: function (t) {
                  if (this.isEmpty()) return NaN;
                  switch (t) {
                    case 'row':
                      for (
                        var e = new Array(this.rows).fill(
                            Number.NEGATIVE_INFINITY,
                          ),
                          r = 0;
                        r < this.rows;
                        r++
                      )
                        for (var n = 0; n < this.columns; n++)
                          this.get(r, n) > e[r] && (e[r] = this.get(r, n));
                      return e;
                    case 'column':
                      for (
                        var o = new Array(this.columns).fill(
                            Number.NEGATIVE_INFINITY,
                          ),
                          i = 0;
                        i < this.rows;
                        i++
                      )
                        for (var s = 0; s < this.columns; s++)
                          this.get(i, s) > o[s] && (o[s] = this.get(i, s));
                      return o;
                    case void 0:
                      for (var a = this.get(0, 0), u = 0; u < this.rows; u++)
                        for (var d = 0; d < this.columns; d++)
                          this.get(u, d) > a && (a = this.get(u, d));
                      return a;
                    default:
                      throw new Error('invalid option: '.concat(t));
                  }
                },
              },
              {
                key: 'maxIndex',
                value: function () {
                  T(this);
                  for (
                    var t = this.get(0, 0), e = [0, 0], r = 0;
                    r < this.rows;
                    r++
                  )
                    for (var n = 0; n < this.columns; n++)
                      this.get(r, n) > t &&
                        ((t = this.get(r, n)), (e[0] = r), (e[1] = n));
                  return e;
                },
              },
              {
                key: 'min',
                value: function (t) {
                  if (this.isEmpty()) return NaN;
                  switch (t) {
                    case 'row':
                      for (
                        var e = new Array(this.rows).fill(
                            Number.POSITIVE_INFINITY,
                          ),
                          r = 0;
                        r < this.rows;
                        r++
                      )
                        for (var n = 0; n < this.columns; n++)
                          this.get(r, n) < e[r] && (e[r] = this.get(r, n));
                      return e;
                    case 'column':
                      for (
                        var o = new Array(this.columns).fill(
                            Number.POSITIVE_INFINITY,
                          ),
                          i = 0;
                        i < this.rows;
                        i++
                      )
                        for (var s = 0; s < this.columns; s++)
                          this.get(i, s) < o[s] && (o[s] = this.get(i, s));
                      return o;
                    case void 0:
                      for (var a = this.get(0, 0), u = 0; u < this.rows; u++)
                        for (var d = 0; d < this.columns; d++)
                          this.get(u, d) < a && (a = this.get(u, d));
                      return a;
                    default:
                      throw new Error('invalid option: '.concat(t));
                  }
                },
              },
              {
                key: 'minIndex',
                value: function () {
                  T(this);
                  for (
                    var t = this.get(0, 0), e = [0, 0], r = 0;
                    r < this.rows;
                    r++
                  )
                    for (var n = 0; n < this.columns; n++)
                      this.get(r, n) < t &&
                        ((t = this.get(r, n)), (e[0] = r), (e[1] = n));
                  return e;
                },
              },
              {
                key: 'maxRow',
                value: function (t) {
                  if ((S(this, t), this.isEmpty())) return NaN;
                  for (var e = this.get(t, 0), r = 1; r < this.columns; r++)
                    this.get(t, r) > e && (e = this.get(t, r));
                  return e;
                },
              },
              {
                key: 'maxRowIndex',
                value: function (t) {
                  S(this, t), T(this);
                  for (
                    var e = this.get(t, 0), r = [t, 0], n = 1;
                    n < this.columns;
                    n++
                  )
                    this.get(t, n) > e && ((e = this.get(t, n)), (r[1] = n));
                  return r;
                },
              },
              {
                key: 'minRow',
                value: function (t) {
                  if ((S(this, t), this.isEmpty())) return NaN;
                  for (var e = this.get(t, 0), r = 1; r < this.columns; r++)
                    this.get(t, r) < e && (e = this.get(t, r));
                  return e;
                },
              },
              {
                key: 'minRowIndex',
                value: function (t) {
                  S(this, t), T(this);
                  for (
                    var e = this.get(t, 0), r = [t, 0], n = 1;
                    n < this.columns;
                    n++
                  )
                    this.get(t, n) < e && ((e = this.get(t, n)), (r[1] = n));
                  return r;
                },
              },
              {
                key: 'maxColumn',
                value: function (t) {
                  if ((A(this, t), this.isEmpty())) return NaN;
                  for (var e = this.get(0, t), r = 1; r < this.rows; r++)
                    this.get(r, t) > e && (e = this.get(r, t));
                  return e;
                },
              },
              {
                key: 'maxColumnIndex',
                value: function (t) {
                  A(this, t), T(this);
                  for (
                    var e = this.get(0, t), r = [0, t], n = 1;
                    n < this.rows;
                    n++
                  )
                    this.get(n, t) > e && ((e = this.get(n, t)), (r[0] = n));
                  return r;
                },
              },
              {
                key: 'minColumn',
                value: function (t) {
                  if ((A(this, t), this.isEmpty())) return NaN;
                  for (var e = this.get(0, t), r = 1; r < this.rows; r++)
                    this.get(r, t) < e && (e = this.get(r, t));
                  return e;
                },
              },
              {
                key: 'minColumnIndex',
                value: function (t) {
                  A(this, t), T(this);
                  for (
                    var e = this.get(0, t), r = [0, t], n = 1;
                    n < this.rows;
                    n++
                  )
                    this.get(n, t) < e && ((e = this.get(n, t)), (r[0] = n));
                  return r;
                },
              },
              {
                key: 'diag',
                value: function () {
                  for (
                    var t = Math.min(this.rows, this.columns), e = [], r = 0;
                    r < t;
                    r++
                  )
                    e.push(this.get(r, r));
                  return e;
                },
              },
              {
                key: 'norm',
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 'frobenius';
                  switch (t) {
                    case 'max':
                      return this.max();
                    case 'frobenius':
                      return Math.sqrt(this.dot(this));
                    default:
                      throw new RangeError('unknown norm type: '.concat(t));
                  }
                },
              },
              {
                key: 'cumulativeSum',
                value: function () {
                  for (var t = 0, e = 0; e < this.rows; e++)
                    for (var r = 0; r < this.columns; r++)
                      (t += this.get(e, r)), this.set(e, r, t);
                  return this;
                },
              },
              {
                key: 'dot',
                value: function (t) {
                  e.isMatrix(t) && (t = t.to1DArray());
                  var r = this.to1DArray();
                  if (r.length !== t.length)
                    throw new RangeError('vectors do not have the same size');
                  for (var n = 0, o = 0; o < r.length; o++) n += r[o] * t[o];
                  return n;
                },
              },
              {
                key: 'mmul',
                value: function (t) {
                  t = q.checkMatrix(t);
                  for (
                    var e = this.rows,
                      r = this.columns,
                      n = t.columns,
                      o = new q(e, n),
                      i = new Float64Array(r),
                      s = 0;
                    s < n;
                    s++
                  ) {
                    for (var a = 0; a < r; a++) i[a] = t.get(a, s);
                    for (var u = 0; u < e; u++) {
                      for (var d = 0, h = 0; h < r; h++)
                        d += this.get(u, h) * i[h];
                      o.set(u, s, d);
                    }
                  }
                  return o;
                },
              },
              {
                key: 'strassen2x2',
                value: function (t) {
                  t = q.checkMatrix(t);
                  var e = new q(2, 2),
                    r = this.get(0, 0),
                    n = t.get(0, 0),
                    o = this.get(0, 1),
                    i = t.get(0, 1),
                    s = this.get(1, 0),
                    a = t.get(1, 0),
                    u = this.get(1, 1),
                    d = t.get(1, 1),
                    h = (r + u) * (n + d),
                    c = (s + u) * n,
                    l = r * (i - d),
                    f = u * (a - n),
                    g = (r + o) * d,
                    v = h + f - g + (o - u) * (a + d),
                    p = l + g,
                    m = c + f,
                    y = h - c + l + (s - r) * (n + i);
                  return (
                    e.set(0, 0, v),
                    e.set(0, 1, p),
                    e.set(1, 0, m),
                    e.set(1, 1, y),
                    e
                  );
                },
              },
              {
                key: 'strassen3x3',
                value: function (t) {
                  t = q.checkMatrix(t);
                  var e = new q(3, 3),
                    r = this.get(0, 0),
                    n = this.get(0, 1),
                    o = this.get(0, 2),
                    i = this.get(1, 0),
                    s = this.get(1, 1),
                    a = this.get(1, 2),
                    u = this.get(2, 0),
                    d = this.get(2, 1),
                    h = this.get(2, 2),
                    c = t.get(0, 0),
                    l = t.get(0, 1),
                    f = t.get(0, 2),
                    g = t.get(1, 0),
                    v = t.get(1, 1),
                    p = t.get(1, 2),
                    m = t.get(2, 0),
                    y = t.get(2, 1),
                    w = t.get(2, 2),
                    x = (r - i) * (-l + v),
                    b = (-r + i + s) * (c - l + v),
                    E = (i + s) * (-c + l),
                    N = r * c,
                    M = (-r + u + d) * (c - f + p),
                    k = (-r + u) * (f - p),
                    _ = (u + d) * (-c + f),
                    S = (-o + d + h) * (v + m - y),
                    A = (o - h) * (v - y),
                    O = o * m,
                    R = (d + h) * (-m + y),
                    z = (-o + s + a) * (p + m - w),
                    I = (o - a) * (p - w),
                    j = (s + a) * (-m + w),
                    C = N + O + n * g,
                    D = (r + n + o - i - s - d - h) * v + b + E + N + S + O + R,
                    T = N + M + _ + (r + n + o - s - a - u - d) * p + O + z + j,
                    P =
                      x + s * (-c + l + g - v - p - m + w) + b + N + O + z + I,
                    L = x + b + E + N + a * y,
                    F = O + z + I + j + i * f,
                    Z =
                      N + M + k + d * (-c + f + g - v - p - m + y) + S + A + O,
                    G = S + A + O + R + u * l,
                    V = N + M + k + _ + h * w;
                  return (
                    e.set(0, 0, C),
                    e.set(0, 1, D),
                    e.set(0, 2, T),
                    e.set(1, 0, P),
                    e.set(1, 1, L),
                    e.set(1, 2, F),
                    e.set(2, 0, Z),
                    e.set(2, 1, G),
                    e.set(2, 2, V),
                    e
                  );
                },
              },
              {
                key: 'mmulStrassen',
                value: function (t) {
                  t = q.checkMatrix(t);
                  var r = this.clone(),
                    n = r.rows,
                    o = r.columns,
                    i = t.rows,
                    s = t.columns;
                  function a(t, r, n) {
                    var o = t.rows,
                      i = t.columns;
                    if (o === r && i === n) return t;
                    var s = e.zeros(r, n);
                    return (s = s.setSubMatrix(t, 0, 0));
                  }
                  o !== i &&
                    console.warn(
                      'Multiplying '
                        .concat(n, ' x ')
                        .concat(o, ' and ')
                        .concat(i, ' x ')
                        .concat(s, ' matrix: dimensions do not match.'),
                    );
                  var u = Math.max(n, i),
                    d = Math.max(o, s);
                  return (function t(r, n, o, i) {
                    if (o <= 512 || i <= 512) return r.mmul(n);
                    o % 2 == 1 && i % 2 == 1
                      ? ((r = a(r, o + 1, i + 1)), (n = a(n, o + 1, i + 1)))
                      : o % 2 == 1
                        ? ((r = a(r, o + 1, i)), (n = a(n, o + 1, i)))
                        : i % 2 == 1 &&
                          ((r = a(r, o, i + 1)), (n = a(n, o, i + 1)));
                    var s = parseInt(r.rows / 2, 10),
                      u = parseInt(r.columns / 2, 10),
                      d = r.subMatrix(0, s - 1, 0, u - 1),
                      h = n.subMatrix(0, s - 1, 0, u - 1),
                      c = r.subMatrix(0, s - 1, u, r.columns - 1),
                      l = n.subMatrix(0, s - 1, u, n.columns - 1),
                      f = r.subMatrix(s, r.rows - 1, 0, u - 1),
                      g = n.subMatrix(s, n.rows - 1, 0, u - 1),
                      v = r.subMatrix(s, r.rows - 1, u, r.columns - 1),
                      p = n.subMatrix(s, n.rows - 1, u, n.columns - 1),
                      m = t(e.add(d, v), e.add(h, p), s, u),
                      y = t(e.add(f, v), h, s, u),
                      w = t(d, e.sub(l, p), s, u),
                      x = t(v, e.sub(g, h), s, u),
                      b = t(e.add(d, c), p, s, u),
                      E = t(e.sub(f, d), e.add(h, l), s, u),
                      N = t(e.sub(c, v), e.add(g, p), s, u),
                      M = e.add(m, x);
                    M.sub(b), M.add(N);
                    var k = e.add(w, b),
                      _ = e.add(y, x),
                      S = e.sub(m, y);
                    S.add(w), S.add(E);
                    var A = e.zeros(2 * M.rows, 2 * M.columns);
                    return (A = (A = (A = (A = A.setSubMatrix(
                      M,
                      0,
                      0,
                    )).setSubMatrix(k, M.rows, 0)).setSubMatrix(
                      _,
                      0,
                      M.columns,
                    )).setSubMatrix(S, M.rows, M.columns)).subMatrix(
                      0,
                      o - 1,
                      0,
                      i - 1,
                    );
                  })((r = a(r, u, d)), (t = a(t, u, d)), u, d);
                },
              },
              {
                key: 'scaleRows',
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  if ('object' !== m(t))
                    throw new TypeError('options must be an object');
                  var e = t.min,
                    r = void 0 === e ? 0 : e,
                    n = t.max,
                    o = void 0 === n ? 1 : n;
                  if (!Number.isFinite(r))
                    throw new TypeError('min must be a number');
                  if (!Number.isFinite(o))
                    throw new TypeError('max must be a number');
                  if (r >= o)
                    throw new RangeError('min must be smaller than max');
                  for (
                    var i = new q(this.rows, this.columns), s = 0;
                    s < this.rows;
                    s++
                  ) {
                    var a = this.getRow(s);
                    a.length > 0 && b(a, { min: r, max: o, output: a }),
                      i.setRow(s, a);
                  }
                  return i;
                },
              },
              {
                key: 'scaleColumns',
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  if ('object' !== m(t))
                    throw new TypeError('options must be an object');
                  var e = t.min,
                    r = void 0 === e ? 0 : e,
                    n = t.max,
                    o = void 0 === n ? 1 : n;
                  if (!Number.isFinite(r))
                    throw new TypeError('min must be a number');
                  if (!Number.isFinite(o))
                    throw new TypeError('max must be a number');
                  if (r >= o)
                    throw new RangeError('min must be smaller than max');
                  for (
                    var i = new q(this.rows, this.columns), s = 0;
                    s < this.columns;
                    s++
                  ) {
                    var a = this.getColumn(s);
                    a.length && b(a, { min: r, max: o, output: a }),
                      i.setColumn(s, a);
                  }
                  return i;
                },
              },
              {
                key: 'flipRows',
                value: function () {
                  for (
                    var t = Math.ceil(this.columns / 2), e = 0;
                    e < this.rows;
                    e++
                  )
                    for (var r = 0; r < t; r++) {
                      var n = this.get(e, r),
                        o = this.get(e, this.columns - 1 - r);
                      this.set(e, r, o), this.set(e, this.columns - 1 - r, n);
                    }
                  return this;
                },
              },
              {
                key: 'flipColumns',
                value: function () {
                  for (
                    var t = Math.ceil(this.rows / 2), e = 0;
                    e < this.columns;
                    e++
                  )
                    for (var r = 0; r < t; r++) {
                      var n = this.get(r, e),
                        o = this.get(this.rows - 1 - r, e);
                      this.set(r, e, o), this.set(this.rows - 1 - r, e, n);
                    }
                  return this;
                },
              },
              {
                key: 'kroneckerProduct',
                value: function (t) {
                  t = q.checkMatrix(t);
                  for (
                    var e = this.rows,
                      r = this.columns,
                      n = t.rows,
                      o = t.columns,
                      i = new q(e * n, r * o),
                      s = 0;
                    s < e;
                    s++
                  )
                    for (var a = 0; a < r; a++)
                      for (var u = 0; u < n; u++)
                        for (var d = 0; d < o; d++)
                          i.set(
                            n * s + u,
                            o * a + d,
                            this.get(s, a) * t.get(u, d),
                          );
                  return i;
                },
              },
              {
                key: 'kroneckerSum',
                value: function (t) {
                  if (
                    ((t = q.checkMatrix(t)), !this.isSquare() || !t.isSquare())
                  )
                    throw new Error('Kronecker Sum needs two Square Matrices');
                  var e = this.rows,
                    r = t.rows,
                    n = this.kroneckerProduct(q.eye(r, r)),
                    o = q.eye(e, e).kroneckerProduct(t);
                  return n.add(o);
                },
              },
              {
                key: 'transpose',
                value: function () {
                  for (
                    var t = new q(this.columns, this.rows), e = 0;
                    e < this.rows;
                    e++
                  )
                    for (var r = 0; r < this.columns; r++)
                      t.set(r, e, this.get(e, r));
                  return t;
                },
              },
              {
                key: 'sortRows',
                value: function () {
                  for (
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : L,
                      e = 0;
                    e < this.rows;
                    e++
                  )
                    this.setRow(e, this.getRow(e).sort(t));
                  return this;
                },
              },
              {
                key: 'sortColumns',
                value: function () {
                  for (
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : L,
                      e = 0;
                    e < this.columns;
                    e++
                  )
                    this.setColumn(e, this.getColumn(e).sort(t));
                  return this;
                },
              },
              {
                key: 'subMatrix',
                value: function (t, e, r, n) {
                  j(this, t, e, r, n);
                  for (var o = new q(e - t + 1, n - r + 1), i = t; i <= e; i++)
                    for (var s = r; s <= n; s++)
                      o.set(i - t, s - r, this.get(i, s));
                  return o;
                },
              },
              {
                key: 'subMatrixRow',
                value: function (t, e, r) {
                  if (
                    (void 0 === e && (e = 0),
                    void 0 === r && (r = this.columns - 1),
                    e > r ||
                      e < 0 ||
                      e >= this.columns ||
                      r < 0 ||
                      r >= this.columns)
                  )
                    throw new RangeError('Argument out of range');
                  for (
                    var n = new q(t.length, r - e + 1), o = 0;
                    o < t.length;
                    o++
                  )
                    for (var i = e; i <= r; i++) {
                      if (t[o] < 0 || t[o] >= this.rows)
                        throw new RangeError(
                          'Row index out of range: '.concat(t[o]),
                        );
                      n.set(o, i - e, this.get(t[o], i));
                    }
                  return n;
                },
              },
              {
                key: 'subMatrixColumn',
                value: function (t, e, r) {
                  if (
                    (void 0 === e && (e = 0),
                    void 0 === r && (r = this.rows - 1),
                    e > r || e < 0 || e >= this.rows || r < 0 || r >= this.rows)
                  )
                    throw new RangeError('Argument out of range');
                  for (
                    var n = new q(r - e + 1, t.length), o = 0;
                    o < t.length;
                    o++
                  )
                    for (var i = e; i <= r; i++) {
                      if (t[o] < 0 || t[o] >= this.columns)
                        throw new RangeError(
                          'Column index out of range: '.concat(t[o]),
                        );
                      n.set(i - e, o, this.get(i, t[o]));
                    }
                  return n;
                },
              },
              {
                key: 'setSubMatrix',
                value: function (t, e, r) {
                  if ((t = q.checkMatrix(t)).isEmpty()) return this;
                  j(this, e, e + t.rows - 1, r, r + t.columns - 1);
                  for (var n = 0; n < t.rows; n++)
                    for (var o = 0; o < t.columns; o++)
                      this.set(e + n, r + o, t.get(n, o));
                  return this;
                },
              },
              {
                key: 'selection',
                value: function (t, e) {
                  z(this, t), I(this, e);
                  for (
                    var r = new q(t.length, e.length), n = 0;
                    n < t.length;
                    n++
                  )
                    for (var o = t[n], i = 0; i < e.length; i++) {
                      var s = e[i];
                      r.set(n, i, this.get(o, s));
                    }
                  return r;
                },
              },
              {
                key: 'trace',
                value: function () {
                  for (
                    var t = Math.min(this.rows, this.columns), e = 0, r = 0;
                    r < t;
                    r++
                  )
                    e += this.get(r, r);
                  return e;
                },
              },
              {
                key: 'clone',
                value: function () {
                  return this.constructor.copy(
                    this,
                    new q(this.rows, this.columns),
                  );
                },
              },
              {
                key: 'sum',
                value: function (t) {
                  switch (t) {
                    case 'row':
                      return (function (t) {
                        for (var e = C(t.rows), r = 0; r < t.rows; ++r)
                          for (var n = 0; n < t.columns; ++n)
                            e[r] += t.get(r, n);
                        return e;
                      })(this);
                    case 'column':
                      return (function (t) {
                        for (var e = C(t.columns), r = 0; r < t.rows; ++r)
                          for (var n = 0; n < t.columns; ++n)
                            e[n] += t.get(r, n);
                        return e;
                      })(this);
                    case void 0:
                      return (function (t) {
                        for (var e = 0, r = 0; r < t.rows; r++)
                          for (var n = 0; n < t.columns; n++) e += t.get(r, n);
                        return e;
                      })(this);
                    default:
                      throw new Error('invalid option: '.concat(t));
                  }
                },
              },
              {
                key: 'product',
                value: function (t) {
                  switch (t) {
                    case 'row':
                      return (function (t) {
                        for (var e = C(t.rows, 1), r = 0; r < t.rows; ++r)
                          for (var n = 0; n < t.columns; ++n)
                            e[r] *= t.get(r, n);
                        return e;
                      })(this);
                    case 'column':
                      return (function (t) {
                        for (var e = C(t.columns, 1), r = 0; r < t.rows; ++r)
                          for (var n = 0; n < t.columns; ++n)
                            e[n] *= t.get(r, n);
                        return e;
                      })(this);
                    case void 0:
                      return (function (t) {
                        for (var e = 1, r = 0; r < t.rows; r++)
                          for (var n = 0; n < t.columns; n++) e *= t.get(r, n);
                        return e;
                      })(this);
                    default:
                      throw new Error('invalid option: '.concat(t));
                  }
                },
              },
              {
                key: 'mean',
                value: function (t) {
                  var e = this.sum(t);
                  switch (t) {
                    case 'row':
                      for (var r = 0; r < this.rows; r++) e[r] /= this.columns;
                      return e;
                    case 'column':
                      for (var n = 0; n < this.columns; n++) e[n] /= this.rows;
                      return e;
                    case void 0:
                      return e / this.size;
                    default:
                      throw new Error('invalid option: '.concat(t));
                  }
                },
              },
              {
                key: 'variance',
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (
                    ('object' === m(t) && ((e = t), (t = void 0)),
                    'object' !== m(e))
                  )
                    throw new TypeError('options must be an object');
                  var r = e,
                    n = r.unbiased,
                    o = void 0 === n || n,
                    i = r.mean,
                    s = void 0 === i ? this.mean(t) : i;
                  if ('boolean' != typeof o)
                    throw new TypeError('unbiased must be a boolean');
                  switch (t) {
                    case 'row':
                      if (!x.isAnyArray(s))
                        throw new TypeError('mean must be an array');
                      return (function (t, e, r) {
                        for (
                          var n = t.rows, o = t.columns, i = [], s = 0;
                          s < n;
                          s++
                        ) {
                          for (var a = 0, u = 0, d = 0, h = 0; h < o; h++)
                            (a += d = t.get(s, h) - r[s]), (u += d * d);
                          e
                            ? i.push((u - (a * a) / o) / (o - 1))
                            : i.push((u - (a * a) / o) / o);
                        }
                        return i;
                      })(this, o, s);
                    case 'column':
                      if (!x.isAnyArray(s))
                        throw new TypeError('mean must be an array');
                      return (function (t, e, r) {
                        for (
                          var n = t.rows, o = t.columns, i = [], s = 0;
                          s < o;
                          s++
                        ) {
                          for (var a = 0, u = 0, d = 0, h = 0; h < n; h++)
                            (a += d = t.get(h, s) - r[s]), (u += d * d);
                          e
                            ? i.push((u - (a * a) / n) / (n - 1))
                            : i.push((u - (a * a) / n) / n);
                        }
                        return i;
                      })(this, o, s);
                    case void 0:
                      if ('number' != typeof s)
                        throw new TypeError('mean must be a number');
                      return (function (t, e, r) {
                        for (
                          var n = t.rows,
                            o = t.columns,
                            i = n * o,
                            s = 0,
                            a = 0,
                            u = 0,
                            d = 0;
                          d < n;
                          d++
                        )
                          for (var h = 0; h < o; h++)
                            (s += u = t.get(d, h) - r), (a += u * u);
                        return e
                          ? (a - (s * s) / i) / (i - 1)
                          : (a - (s * s) / i) / i;
                      })(this, o, s);
                    default:
                      throw new Error('invalid option: '.concat(t));
                  }
                },
              },
              {
                key: 'standardDeviation',
                value: function (t, e) {
                  'object' === m(t) && ((e = t), (t = void 0));
                  var r = this.variance(t, e);
                  if (void 0 === t) return Math.sqrt(r);
                  for (var n = 0; n < r.length; n++) r[n] = Math.sqrt(r[n]);
                  return r;
                },
              },
              {
                key: 'center',
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (
                    ('object' === m(t) && ((e = t), (t = void 0)),
                    'object' !== m(e))
                  )
                    throw new TypeError('options must be an object');
                  var r = e.center,
                    n = void 0 === r ? this.mean(t) : r;
                  switch (t) {
                    case 'row':
                      if (!x.isAnyArray(n))
                        throw new TypeError('center must be an array');
                      return (
                        (function (t, e) {
                          for (var r = 0; r < t.rows; r++)
                            for (var n = 0; n < t.columns; n++)
                              t.set(r, n, t.get(r, n) - e[r]);
                        })(this, n),
                        this
                      );
                    case 'column':
                      if (!x.isAnyArray(n))
                        throw new TypeError('center must be an array');
                      return (
                        (function (t, e) {
                          for (var r = 0; r < t.rows; r++)
                            for (var n = 0; n < t.columns; n++)
                              t.set(r, n, t.get(r, n) - e[n]);
                        })(this, n),
                        this
                      );
                    case void 0:
                      if ('number' != typeof n)
                        throw new TypeError('center must be a number');
                      return (
                        (function (t, e) {
                          for (var r = 0; r < t.rows; r++)
                            for (var n = 0; n < t.columns; n++)
                              t.set(r, n, t.get(r, n) - e);
                        })(this, n),
                        this
                      );
                    default:
                      throw new Error('invalid option: '.concat(t));
                  }
                },
              },
              {
                key: 'scale',
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (
                    ('object' === m(t) && ((e = t), (t = void 0)),
                    'object' !== m(e))
                  )
                    throw new TypeError('options must be an object');
                  var r = e.scale;
                  switch (t) {
                    case 'row':
                      if (void 0 === r)
                        r = (function (t) {
                          for (var e = [], r = 0; r < t.rows; r++) {
                            for (var n = 0, o = 0; o < t.columns; o++)
                              n += Math.pow(t.get(r, o), 2) / (t.columns - 1);
                            e.push(Math.sqrt(n));
                          }
                          return e;
                        })(this);
                      else if (!x.isAnyArray(r))
                        throw new TypeError('scale must be an array');
                      return (
                        (function (t, e) {
                          for (var r = 0; r < t.rows; r++)
                            for (var n = 0; n < t.columns; n++)
                              t.set(r, n, t.get(r, n) / e[r]);
                        })(this, r),
                        this
                      );
                    case 'column':
                      if (void 0 === r)
                        r = (function (t) {
                          for (var e = [], r = 0; r < t.columns; r++) {
                            for (var n = 0, o = 0; o < t.rows; o++)
                              n += Math.pow(t.get(o, r), 2) / (t.rows - 1);
                            e.push(Math.sqrt(n));
                          }
                          return e;
                        })(this);
                      else if (!x.isAnyArray(r))
                        throw new TypeError('scale must be an array');
                      return (
                        (function (t, e) {
                          for (var r = 0; r < t.rows; r++)
                            for (var n = 0; n < t.columns; n++)
                              t.set(r, n, t.get(r, n) / e[n]);
                        })(this, r),
                        this
                      );
                    case void 0:
                      if (void 0 === r)
                        r = (function (t) {
                          for (
                            var e = t.size - 1, r = 0, n = 0;
                            n < t.columns;
                            n++
                          )
                            for (var o = 0; o < t.rows; o++)
                              r += Math.pow(t.get(o, n), 2) / e;
                          return Math.sqrt(r);
                        })(this);
                      else if ('number' != typeof r)
                        throw new TypeError('scale must be a number');
                      return (
                        (function (t, e) {
                          for (var r = 0; r < t.rows; r++)
                            for (var n = 0; n < t.columns; n++)
                              t.set(r, n, t.get(r, n) / e);
                        })(this, r),
                        this
                      );
                    default:
                      throw new Error('invalid option: '.concat(t));
                  }
                },
              },
              {
                key: 'toString',
                value: function (t) {
                  return M(this, t);
                },
              },
              {
                key: t,
                value: function () {
                  return this.entries();
                },
              },
              {
                key: 'entries',
                value: p().mark(function t() {
                  var e, r;
                  return p().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            e = 0;
                          case 1:
                            if (!(e < this.rows)) {
                              t.next = 12;
                              break;
                            }
                            r = 0;
                          case 3:
                            if (!(r < this.columns)) {
                              t.next = 9;
                              break;
                            }
                            return (t.next = 6), [e, r, this.get(e, r)];
                          case 6:
                            r++, (t.next = 3);
                            break;
                          case 9:
                            e++, (t.next = 1);
                            break;
                          case 12:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    this,
                  );
                }),
              },
              {
                key: 'values',
                value: p().mark(function t() {
                  var e, r;
                  return p().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            e = 0;
                          case 1:
                            if (!(e < this.rows)) {
                              t.next = 12;
                              break;
                            }
                            r = 0;
                          case 3:
                            if (!(r < this.columns)) {
                              t.next = 9;
                              break;
                            }
                            return (t.next = 6), this.get(e, r);
                          case 6:
                            r++, (t.next = 3);
                            break;
                          case 9:
                            e++, (t.next = 1);
                            break;
                          case 12:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    this,
                  );
                }),
              },
            ],
            [
              {
                key: 'from1DArray',
                value: function (t, e, r) {
                  if (t * e !== r.length)
                    throw new RangeError(
                      'data length does not match given dimensions',
                    );
                  for (var n = new q(t, e), o = 0; o < t; o++)
                    for (var i = 0; i < e; i++) n.set(o, i, r[o * e + i]);
                  return n;
                },
              },
              {
                key: 'rowVector',
                value: function (t) {
                  for (var e = new q(1, t.length), r = 0; r < t.length; r++)
                    e.set(0, r, t[r]);
                  return e;
                },
              },
              {
                key: 'columnVector',
                value: function (t) {
                  for (var e = new q(t.length, 1), r = 0; r < t.length; r++)
                    e.set(r, 0, t[r]);
                  return e;
                },
              },
              {
                key: 'zeros',
                value: function (t, e) {
                  return new q(t, e);
                },
              },
              {
                key: 'ones',
                value: function (t, e) {
                  return new q(t, e).fill(1);
                },
              },
              {
                key: 'rand',
                value: function (t, e) {
                  var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  if ('object' !== m(r))
                    throw new TypeError('options must be an object');
                  for (
                    var n = r.random,
                      o = void 0 === n ? Math.random : n,
                      i = new q(t, e),
                      s = 0;
                    s < t;
                    s++
                  )
                    for (var a = 0; a < e; a++) i.set(s, a, o());
                  return i;
                },
              },
              {
                key: 'randInt',
                value: function (t, e) {
                  var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  if ('object' !== m(r))
                    throw new TypeError('options must be an object');
                  var n = r.min,
                    o = void 0 === n ? 0 : n,
                    i = r.max,
                    s = void 0 === i ? 1e3 : i,
                    a = r.random,
                    u = void 0 === a ? Math.random : a;
                  if (!Number.isInteger(o))
                    throw new TypeError('min must be an integer');
                  if (!Number.isInteger(s))
                    throw new TypeError('max must be an integer');
                  if (o >= s)
                    throw new RangeError('min must be smaller than max');
                  for (var d = s - o, h = new q(t, e), c = 0; c < t; c++)
                    for (var l = 0; l < e; l++) {
                      var f = o + Math.round(u() * d);
                      h.set(c, l, f);
                    }
                  return h;
                },
              },
              {
                key: 'eye',
                value: function (t, e, r) {
                  void 0 === e && (e = t), void 0 === r && (r = 1);
                  for (
                    var n = Math.min(t, e), o = this.zeros(t, e), i = 0;
                    i < n;
                    i++
                  )
                    o.set(i, i, r);
                  return o;
                },
              },
              {
                key: 'diag',
                value: function (t, e, r) {
                  var n = t.length;
                  void 0 === e && (e = n), void 0 === r && (r = e);
                  for (
                    var o = Math.min(n, e, r), i = this.zeros(e, r), s = 0;
                    s < o;
                    s++
                  )
                    i.set(s, s, t[s]);
                  return i;
                },
              },
              {
                key: 'min',
                value: function (t, e) {
                  (t = this.checkMatrix(t)), (e = this.checkMatrix(e));
                  for (
                    var r = t.rows, n = t.columns, o = new q(r, n), i = 0;
                    i < r;
                    i++
                  )
                    for (var s = 0; s < n; s++)
                      o.set(i, s, Math.min(t.get(i, s), e.get(i, s)));
                  return o;
                },
              },
              {
                key: 'max',
                value: function (t, e) {
                  (t = this.checkMatrix(t)), (e = this.checkMatrix(e));
                  for (
                    var r = t.rows, n = t.columns, o = new this(r, n), i = 0;
                    i < r;
                    i++
                  )
                    for (var s = 0; s < n; s++)
                      o.set(i, s, Math.max(t.get(i, s), e.get(i, s)));
                  return o;
                },
              },
              {
                key: 'checkMatrix',
                value: function (t) {
                  return e.isMatrix(t) ? t : new q(t);
                },
              },
              {
                key: 'isMatrix',
                value: function (t) {
                  return null != t && 'Matrix' === t.klass;
                },
              },
              {
                key: 'copy',
                value: function (t, e) {
                  var r,
                    n = v(t.entries());
                  try {
                    for (n.s(); !(r = n.n()).done; ) {
                      var o = g(r.value, 3),
                        i = o[0],
                        s = o[1],
                        a = o[2];
                      e.set(i, s, a);
                    }
                  } catch (t) {
                    n.e(t);
                  } finally {
                    n.f();
                  }
                  return e;
                },
              },
            ],
          ),
          e
        );
      })(Symbol.iterator);
      function L(t, e) {
        return t - e;
      }
      (P.prototype.klass = 'Matrix'),
        'undefined' != typeof Symbol &&
          (P.prototype[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return M(this);
          }),
        (P.random = P.rand),
        (P.randomInt = P.randInt),
        (P.diagonal = P.diag),
        (P.prototype.diagonal = P.prototype.diag),
        (P.identity = P.eye),
        (P.prototype.negate = P.prototype.neg),
        (P.prototype.tensorProduct = P.prototype.kroneckerProduct);
      var F = new WeakSet(),
        q = (function (t) {
          d(r, t);
          var e = h(r);
          function r(t, n) {
            var o;
            if (
              (y(this, r),
              (o = e.call(this)),
              c(u(o), F),
              l(u(o), 'data', void 0),
              r.isMatrix(t))
            )
              f(u(o), F, Z).call(u(o), t.rows, t.columns), r.copy(t, u(o));
            else if (Number.isInteger(t) && t >= 0)
              f(u(o), F, Z).call(u(o), t, n);
            else {
              if (!x.isAnyArray(t))
                throw new TypeError(
                  'First argument must be a positive number or an array',
                );
              var i = t;
              if ('number' != typeof (n = (t = i.length) ? i[0].length : 0))
                throw new TypeError(
                  'Data must be a 2D array with at least one element',
                );
              o.data = [];
              for (var s = 0; s < t; s++) {
                if (i[s].length !== n)
                  throw new RangeError('Inconsistent array dimensions');
                if (
                  !i[s].every(function (t) {
                    return 'number' == typeof t;
                  })
                )
                  throw new TypeError('Input data contains non-numeric values');
                o.data.push(Float64Array.from(i[s]));
              }
              (o.rows = t), (o.columns = n);
            }
            return o;
          }
          return (
            w(r, [
              {
                key: 'set',
                value: function (t, e, r) {
                  return (this.data[t][e] = r), this;
                },
              },
              {
                key: 'get',
                value: function (t, e) {
                  return this.data[t][e];
                },
              },
              {
                key: 'removeRow',
                value: function (t) {
                  return (
                    S(this, t), this.data.splice(t, 1), (this.rows -= 1), this
                  );
                },
              },
              {
                key: 'addRow',
                value: function (t, e) {
                  return (
                    void 0 === e && ((e = t), (t = this.rows)),
                    S(this, t, !0),
                    (e = Float64Array.from(O(this, e))),
                    this.data.splice(t, 0, e),
                    (this.rows += 1),
                    this
                  );
                },
              },
              {
                key: 'removeColumn',
                value: function (t) {
                  A(this, t);
                  for (var e = 0; e < this.rows; e++) {
                    for (
                      var r = new Float64Array(this.columns - 1), n = 0;
                      n < t;
                      n++
                    )
                      r[n] = this.data[e][n];
                    for (var o = t + 1; o < this.columns; o++)
                      r[o - 1] = this.data[e][o];
                    this.data[e] = r;
                  }
                  return (this.columns -= 1), this;
                },
              },
              {
                key: 'addColumn',
                value: function (t, e) {
                  void 0 === e && ((e = t), (t = this.columns)),
                    A(this, t, !0),
                    (e = R(this, e));
                  for (var r = 0; r < this.rows; r++) {
                    for (
                      var n = new Float64Array(this.columns + 1), o = 0;
                      o < t;
                      o++
                    )
                      n[o] = this.data[r][o];
                    for (n[o++] = e[r]; o < this.columns + 1; o++)
                      n[o] = this.data[r][o - 1];
                    this.data[r] = n;
                  }
                  return (this.columns += 1), this;
                },
              },
            ]),
            r
          );
        })(P);
      function Z(t, e) {
        if (((this.data = []), !(Number.isInteger(e) && e >= 0)))
          throw new TypeError('nColumns must be a positive integer');
        for (var r = 0; r < t; r++) this.data.push(new Float64Array(e));
        (this.rows = t), (this.columns = e);
      }
      !(function (t, e) {
        (t.prototype.add = function (t) {
          return 'number' == typeof t ? this.addS(t) : this.addM(t);
        }),
          (t.prototype.addS = function (t) {
            for (var e = 0; e < this.rows; e++)
              for (var r = 0; r < this.columns; r++)
                this.set(e, r, this.get(e, r) + t);
            return this;
          }),
          (t.prototype.addM = function (t) {
            if (
              ((t = e.checkMatrix(t)),
              this.rows !== t.rows || this.columns !== t.columns)
            )
              throw new RangeError('Matrices dimensions must be equal');
            for (var r = 0; r < this.rows; r++)
              for (var n = 0; n < this.columns; n++)
                this.set(r, n, this.get(r, n) + t.get(r, n));
            return this;
          }),
          (t.add = function (t, r) {
            return new e(t).add(r);
          }),
          (t.prototype.sub = function (t) {
            return 'number' == typeof t ? this.subS(t) : this.subM(t);
          }),
          (t.prototype.subS = function (t) {
            for (var e = 0; e < this.rows; e++)
              for (var r = 0; r < this.columns; r++)
                this.set(e, r, this.get(e, r) - t);
            return this;
          }),
          (t.prototype.subM = function (t) {
            if (
              ((t = e.checkMatrix(t)),
              this.rows !== t.rows || this.columns !== t.columns)
            )
              throw new RangeError('Matrices dimensions must be equal');
            for (var r = 0; r < this.rows; r++)
              for (var n = 0; n < this.columns; n++)
                this.set(r, n, this.get(r, n) - t.get(r, n));
            return this;
          }),
          (t.sub = function (t, r) {
            return new e(t).sub(r);
          }),
          (t.prototype.subtract = t.prototype.sub),
          (t.prototype.subtractS = t.prototype.subS),
          (t.prototype.subtractM = t.prototype.subM),
          (t.subtract = t.sub),
          (t.prototype.mul = function (t) {
            return 'number' == typeof t ? this.mulS(t) : this.mulM(t);
          }),
          (t.prototype.mulS = function (t) {
            for (var e = 0; e < this.rows; e++)
              for (var r = 0; r < this.columns; r++)
                this.set(e, r, this.get(e, r) * t);
            return this;
          }),
          (t.prototype.mulM = function (t) {
            if (
              ((t = e.checkMatrix(t)),
              this.rows !== t.rows || this.columns !== t.columns)
            )
              throw new RangeError('Matrices dimensions must be equal');
            for (var r = 0; r < this.rows; r++)
              for (var n = 0; n < this.columns; n++)
                this.set(r, n, this.get(r, n) * t.get(r, n));
            return this;
          }),
          (t.mul = function (t, r) {
            return new e(t).mul(r);
          }),
          (t.prototype.multiply = t.prototype.mul),
          (t.prototype.multiplyS = t.prototype.mulS),
          (t.prototype.multiplyM = t.prototype.mulM),
          (t.multiply = t.mul),
          (t.prototype.div = function (t) {
            return 'number' == typeof t ? this.divS(t) : this.divM(t);
          }),
          (t.prototype.divS = function (t) {
            for (var e = 0; e < this.rows; e++)
              for (var r = 0; r < this.columns; r++)
                this.set(e, r, this.get(e, r) / t);
            return this;
          }),
          (t.prototype.divM = function (t) {
            if (
              ((t = e.checkMatrix(t)),
              this.rows !== t.rows || this.columns !== t.columns)
            )
              throw new RangeError('Matrices dimensions must be equal');
            for (var r = 0; r < this.rows; r++)
              for (var n = 0; n < this.columns; n++)
                this.set(r, n, this.get(r, n) / t.get(r, n));
            return this;
          }),
          (t.div = function (t, r) {
            return new e(t).div(r);
          }),
          (t.prototype.divide = t.prototype.div),
          (t.prototype.divideS = t.prototype.divS),
          (t.prototype.divideM = t.prototype.divM),
          (t.divide = t.div),
          (t.prototype.mod = function (t) {
            return 'number' == typeof t ? this.modS(t) : this.modM(t);
          }),
          (t.prototype.modS = function (t) {
            for (var e = 0; e < this.rows; e++)
              for (var r = 0; r < this.columns; r++)
                this.set(e, r, this.get(e, r) % t);
            return this;
          }),
          (t.prototype.modM = function (t) {
            if (
              ((t = e.checkMatrix(t)),
              this.rows !== t.rows || this.columns !== t.columns)
            )
              throw new RangeError('Matrices dimensions must be equal');
            for (var r = 0; r < this.rows; r++)
              for (var n = 0; n < this.columns; n++)
                this.set(r, n, this.get(r, n) % t.get(r, n));
            return this;
          }),
          (t.mod = function (t, r) {
            return new e(t).mod(r);
          }),
          (t.prototype.modulus = t.prototype.mod),
          (t.prototype.modulusS = t.prototype.modS),
          (t.prototype.modulusM = t.prototype.modM),
          (t.modulus = t.mod),
          (t.prototype.and = function (t) {
            return 'number' == typeof t ? this.andS(t) : this.andM(t);
          }),
          (t.prototype.andS = function (t) {
            for (var e = 0; e < this.rows; e++)
              for (var r = 0; r < this.columns; r++)
                this.set(e, r, this.get(e, r) & t);
            return this;
          }),
          (t.prototype.andM = function (t) {
            if (
              ((t = e.checkMatrix(t)),
              this.rows !== t.rows || this.columns !== t.columns)
            )
              throw new RangeError('Matrices dimensions must be equal');
            for (var r = 0; r < this.rows; r++)
              for (var n = 0; n < this.columns; n++)
                this.set(r, n, this.get(r, n) & t.get(r, n));
            return this;
          }),
          (t.and = function (t, r) {
            return new e(t).and(r);
          }),
          (t.prototype.or = function (t) {
            return 'number' == typeof t ? this.orS(t) : this.orM(t);
          }),
          (t.prototype.orS = function (t) {
            for (var e = 0; e < this.rows; e++)
              for (var r = 0; r < this.columns; r++)
                this.set(e, r, this.get(e, r) | t);
            return this;
          }),
          (t.prototype.orM = function (t) {
            if (
              ((t = e.checkMatrix(t)),
              this.rows !== t.rows || this.columns !== t.columns)
            )
              throw new RangeError('Matrices dimensions must be equal');
            for (var r = 0; r < this.rows; r++)
              for (var n = 0; n < this.columns; n++)
                this.set(r, n, this.get(r, n) | t.get(r, n));
            return this;
          }),
          (t.or = function (t, r) {
            return new e(t).or(r);
          }),
          (t.prototype.xor = function (t) {
            return 'number' == typeof t ? this.xorS(t) : this.xorM(t);
          }),
          (t.prototype.xorS = function (t) {
            for (var e = 0; e < this.rows; e++)
              for (var r = 0; r < this.columns; r++)
                this.set(e, r, this.get(e, r) ^ t);
            return this;
          }),
          (t.prototype.xorM = function (t) {
            if (
              ((t = e.checkMatrix(t)),
              this.rows !== t.rows || this.columns !== t.columns)
            )
              throw new RangeError('Matrices dimensions must be equal');
            for (var r = 0; r < this.rows; r++)
              for (var n = 0; n < this.columns; n++)
                this.set(r, n, this.get(r, n) ^ t.get(r, n));
            return this;
          }),
          (t.xor = function (t, r) {
            return new e(t).xor(r);
          }),
          (t.prototype.leftShift = function (t) {
            return 'number' == typeof t
              ? this.leftShiftS(t)
              : this.leftShiftM(t);
          }),
          (t.prototype.leftShiftS = function (t) {
            for (var e = 0; e < this.rows; e++)
              for (var r = 0; r < this.columns; r++)
                this.set(e, r, this.get(e, r) << t);
            return this;
          }),
          (t.prototype.leftShiftM = function (t) {
            if (
              ((t = e.checkMatrix(t)),
              this.rows !== t.rows || this.columns !== t.columns)
            )
              throw new RangeError('Matrices dimensions must be equal');
            for (var r = 0; r < this.rows; r++)
              for (var n = 0; n < this.columns; n++)
                this.set(r, n, this.get(r, n) << t.get(r, n));
            return this;
          }),
          (t.leftShift = function (t, r) {
            return new e(t).leftShift(r);
          }),
          (t.prototype.signPropagatingRightShift = function (t) {
            return 'number' == typeof t
              ? this.signPropagatingRightShiftS(t)
              : this.signPropagatingRightShiftM(t);
          }),
          (t.prototype.signPropagatingRightShiftS = function (t) {
            for (var e = 0; e < this.rows; e++)
              for (var r = 0; r < this.columns; r++)
                this.set(e, r, this.get(e, r) >> t);
            return this;
          }),
          (t.prototype.signPropagatingRightShiftM = function (t) {
            if (
              ((t = e.checkMatrix(t)),
              this.rows !== t.rows || this.columns !== t.columns)
            )
              throw new RangeError('Matrices dimensions must be equal');
            for (var r = 0; r < this.rows; r++)
              for (var n = 0; n < this.columns; n++)
                this.set(r, n, this.get(r, n) >> t.get(r, n));
            return this;
          }),
          (t.signPropagatingRightShift = function (t, r) {
            return new e(t).signPropagatingRightShift(r);
          }),
          (t.prototype.rightShift = function (t) {
            return 'number' == typeof t
              ? this.rightShiftS(t)
              : this.rightShiftM(t);
          }),
          (t.prototype.rightShiftS = function (t) {
            for (var e = 0; e < this.rows; e++)
              for (var r = 0; r < this.columns; r++)
                this.set(e, r, this.get(e, r) >>> t);
            return this;
          }),
          (t.prototype.rightShiftM = function (t) {
            if (
              ((t = e.checkMatrix(t)),
              this.rows !== t.rows || this.columns !== t.columns)
            )
              throw new RangeError('Matrices dimensions must be equal');
            for (var r = 0; r < this.rows; r++)
              for (var n = 0; n < this.columns; n++)
                this.set(r, n, this.get(r, n) >>> t.get(r, n));
            return this;
          }),
          (t.rightShift = function (t, r) {
            return new e(t).rightShift(r);
          }),
          (t.prototype.zeroFillRightShift = t.prototype.rightShift),
          (t.prototype.zeroFillRightShiftS = t.prototype.rightShiftS),
          (t.prototype.zeroFillRightShiftM = t.prototype.rightShiftM),
          (t.zeroFillRightShift = t.rightShift),
          (t.prototype.not = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, ~this.get(t, e));
            return this;
          }),
          (t.not = function (t) {
            return new e(t).not();
          }),
          (t.prototype.abs = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.abs(this.get(t, e)));
            return this;
          }),
          (t.abs = function (t) {
            return new e(t).abs();
          }),
          (t.prototype.acos = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.acos(this.get(t, e)));
            return this;
          }),
          (t.acos = function (t) {
            return new e(t).acos();
          }),
          (t.prototype.acosh = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.acosh(this.get(t, e)));
            return this;
          }),
          (t.acosh = function (t) {
            return new e(t).acosh();
          }),
          (t.prototype.asin = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.asin(this.get(t, e)));
            return this;
          }),
          (t.asin = function (t) {
            return new e(t).asin();
          }),
          (t.prototype.asinh = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.asinh(this.get(t, e)));
            return this;
          }),
          (t.asinh = function (t) {
            return new e(t).asinh();
          }),
          (t.prototype.atan = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.atan(this.get(t, e)));
            return this;
          }),
          (t.atan = function (t) {
            return new e(t).atan();
          }),
          (t.prototype.atanh = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.atanh(this.get(t, e)));
            return this;
          }),
          (t.atanh = function (t) {
            return new e(t).atanh();
          }),
          (t.prototype.cbrt = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.cbrt(this.get(t, e)));
            return this;
          }),
          (t.cbrt = function (t) {
            return new e(t).cbrt();
          }),
          (t.prototype.ceil = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.ceil(this.get(t, e)));
            return this;
          }),
          (t.ceil = function (t) {
            return new e(t).ceil();
          }),
          (t.prototype.clz32 = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.clz32(this.get(t, e)));
            return this;
          }),
          (t.clz32 = function (t) {
            return new e(t).clz32();
          }),
          (t.prototype.cos = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.cos(this.get(t, e)));
            return this;
          }),
          (t.cos = function (t) {
            return new e(t).cos();
          }),
          (t.prototype.cosh = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.cosh(this.get(t, e)));
            return this;
          }),
          (t.cosh = function (t) {
            return new e(t).cosh();
          }),
          (t.prototype.exp = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.exp(this.get(t, e)));
            return this;
          }),
          (t.exp = function (t) {
            return new e(t).exp();
          }),
          (t.prototype.expm1 = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.expm1(this.get(t, e)));
            return this;
          }),
          (t.expm1 = function (t) {
            return new e(t).expm1();
          }),
          (t.prototype.floor = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.floor(this.get(t, e)));
            return this;
          }),
          (t.floor = function (t) {
            return new e(t).floor();
          }),
          (t.prototype.fround = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.fround(this.get(t, e)));
            return this;
          }),
          (t.fround = function (t) {
            return new e(t).fround();
          }),
          (t.prototype.log = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.log(this.get(t, e)));
            return this;
          }),
          (t.log = function (t) {
            return new e(t).log();
          }),
          (t.prototype.log1p = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.log1p(this.get(t, e)));
            return this;
          }),
          (t.log1p = function (t) {
            return new e(t).log1p();
          }),
          (t.prototype.log10 = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.log10(this.get(t, e)));
            return this;
          }),
          (t.log10 = function (t) {
            return new e(t).log10();
          }),
          (t.prototype.log2 = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.log2(this.get(t, e)));
            return this;
          }),
          (t.log2 = function (t) {
            return new e(t).log2();
          }),
          (t.prototype.round = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.round(this.get(t, e)));
            return this;
          }),
          (t.round = function (t) {
            return new e(t).round();
          }),
          (t.prototype.sign = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.sign(this.get(t, e)));
            return this;
          }),
          (t.sign = function (t) {
            return new e(t).sign();
          }),
          (t.prototype.sin = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.sin(this.get(t, e)));
            return this;
          }),
          (t.sin = function (t) {
            return new e(t).sin();
          }),
          (t.prototype.sinh = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.sinh(this.get(t, e)));
            return this;
          }),
          (t.sinh = function (t) {
            return new e(t).sinh();
          }),
          (t.prototype.sqrt = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.sqrt(this.get(t, e)));
            return this;
          }),
          (t.sqrt = function (t) {
            return new e(t).sqrt();
          }),
          (t.prototype.tan = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.tan(this.get(t, e)));
            return this;
          }),
          (t.tan = function (t) {
            return new e(t).tan();
          }),
          (t.prototype.tanh = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.tanh(this.get(t, e)));
            return this;
          }),
          (t.tanh = function (t) {
            return new e(t).tanh();
          }),
          (t.prototype.trunc = function () {
            for (var t = 0; t < this.rows; t++)
              for (var e = 0; e < this.columns; e++)
                this.set(t, e, Math.trunc(this.get(t, e)));
            return this;
          }),
          (t.trunc = function (t) {
            return new e(t).trunc();
          }),
          (t.pow = function (t, r) {
            return new e(t).pow(r);
          }),
          (t.prototype.pow = function (t) {
            return 'number' == typeof t ? this.powS(t) : this.powM(t);
          }),
          (t.prototype.powS = function (t) {
            for (var e = 0; e < this.rows; e++)
              for (var r = 0; r < this.columns; r++)
                this.set(e, r, Math.pow(this.get(e, r), t));
            return this;
          }),
          (t.prototype.powM = function (t) {
            if (
              ((t = e.checkMatrix(t)),
              this.rows !== t.rows || this.columns !== t.columns)
            )
              throw new RangeError('Matrices dimensions must be equal');
            for (var r = 0; r < this.rows; r++)
              for (var n = 0; n < this.columns; n++)
                this.set(r, n, Math.pow(this.get(r, n), t.get(r, n)));
            return this;
          });
      })(P, q);
      var G = new WeakMap(),
        V = (function (t) {
          d(r, t);
          var e = h(r);
          function r(t) {
            var n;
            if (
              (y(this, r),
              (n = e.call(this)),
              i(u(n), G, { writable: !0, value: void 0 }),
              q.isMatrix(t))
            ) {
              if (!t.isSymmetric()) throw new TypeError('not symmetric data');
              s(u(n), G, q.copy(t, new q(t.rows, t.rows)));
            } else if (Number.isInteger(t) && t >= 0) s(u(n), G, new q(t, t));
            else if ((s(u(n), G, new q(t)), !n.isSymmetric()))
              throw new TypeError('not symmetric data');
            return n;
          }
          return (
            w(
              r,
              [
                {
                  key: 'size',
                  get: function () {
                    return a(this, G).size;
                  },
                },
                {
                  key: 'rows',
                  get: function () {
                    return a(this, G).rows;
                  },
                },
                {
                  key: 'columns',
                  get: function () {
                    return a(this, G).columns;
                  },
                },
                {
                  key: 'diagonalSize',
                  get: function () {
                    return this.rows;
                  },
                },
                {
                  key: 'clone',
                  value: function () {
                    var t,
                      e = new r(this.diagonalSize),
                      n = v(this.upperRightEntries());
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        var o = g(t.value, 3),
                          i = o[0],
                          s = o[1],
                          a = o[2];
                        e.set(i, s, a);
                      }
                    } catch (t) {
                      n.e(t);
                    } finally {
                      n.f();
                    }
                    return e;
                  },
                },
                {
                  key: 'toMatrix',
                  value: function () {
                    return new q(this);
                  },
                },
                {
                  key: 'get',
                  value: function (t, e) {
                    return a(this, G).get(t, e);
                  },
                },
                {
                  key: 'set',
                  value: function (t, e, r) {
                    return (
                      a(this, G).set(t, e, r), a(this, G).set(e, t, r), this
                    );
                  },
                },
                {
                  key: 'removeCross',
                  value: function (t) {
                    return (
                      a(this, G).removeRow(t), a(this, G).removeColumn(t), this
                    );
                  },
                },
                {
                  key: 'addCross',
                  value: function (t, e) {
                    void 0 === e && ((e = t), (t = this.diagonalSize));
                    var r = e.slice();
                    return (
                      r.splice(t, 1),
                      a(this, G).addRow(t, r),
                      a(this, G).addColumn(t, e),
                      this
                    );
                  },
                },
                {
                  key: 'applyMask',
                  value: function (t) {
                    if (t.length !== this.diagonalSize)
                      throw new RangeError(
                        'Mask size do not match with matrix size',
                      );
                    var e,
                      r = [],
                      n = v(t.entries());
                    try {
                      for (n.s(); !(e = n.n()).done; ) {
                        var o = g(e.value, 2),
                          i = o[0];
                        o[1] || r.push(i);
                      }
                    } catch (t) {
                      n.e(t);
                    } finally {
                      n.f();
                    }
                    r.reverse();
                    for (var s = 0, a = r; s < a.length; s++) {
                      var u = a[s];
                      this.removeCross(u);
                    }
                    return this;
                  },
                },
                {
                  key: 'toCompact',
                  value: function () {
                    for (
                      var t = this.diagonalSize,
                        e = new Array((t * (t + 1)) / 2),
                        r = 0,
                        n = 0,
                        o = 0;
                      o < e.length;
                      o++
                    )
                      (e[o] = this.get(n, r)), ++r >= t && (r = ++n);
                    return e;
                  },
                },
                {
                  key: 'upperRightEntries',
                  value: p().mark(function t() {
                    var e, r, n;
                    return p().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (e = 0), (r = 0);
                            case 1:
                              if (!(e < this.diagonalSize)) {
                                t.next = 9;
                                break;
                              }
                              return (
                                (n = this.get(e, r)), (t.next = 5), [e, r, n]
                              );
                            case 5:
                              ++r >= this.diagonalSize && (r = ++e);
                            case 6:
                              t.next = 1;
                              break;
                            case 9:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this,
                    );
                  }),
                },
                {
                  key: 'upperRightValues',
                  value: p().mark(function t() {
                    var e, r, n;
                    return p().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (e = 0), (r = 0);
                            case 1:
                              if (!(e < this.diagonalSize)) {
                                t.next = 9;
                                break;
                              }
                              return (n = this.get(e, r)), (t.next = 5), n;
                            case 5:
                              ++r >= this.diagonalSize && (r = ++e);
                            case 6:
                              t.next = 1;
                              break;
                            case 9:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this,
                    );
                  }),
                },
              ],
              [
                {
                  key: 'isSymmetricMatrix',
                  value: function (t) {
                    return q.isMatrix(t) && 'SymmetricMatrix' === t.klassType;
                  },
                },
                {
                  key: 'zeros',
                  value: function (t) {
                    return new this(t);
                  },
                },
                {
                  key: 'ones',
                  value: function (t) {
                    return new this(t).fill(1);
                  },
                },
                {
                  key: 'fromCompact',
                  value: function (t) {
                    var e = t.length,
                      n = (Math.sqrt(8 * e + 1) - 1) / 2;
                    if (!Number.isInteger(n))
                      throw new TypeError(
                        'This array is not a compact representation of a Symmetric Matrix, '.concat(
                          JSON.stringify(t),
                        ),
                      );
                    for (var o = new r(n), i = 0, s = 0, a = 0; a < e; a++)
                      o.set(i, s, t[a]), ++i >= n && (i = ++s);
                    return o;
                  },
                },
              ],
            ),
            r
          );
        })(P);
      V.prototype.klassType = 'SymmetricMatrix';
      var B = (function (t) {
        d(r, t);
        var e = h(r);
        function r(t) {
          var n;
          if ((y(this, r), !(n = e.call(this, t)).isDistance()))
            throw new TypeError(
              'Provided arguments do no produce a distance matrix',
            );
          return n;
        }
        return (
          w(
            r,
            [
              {
                key: 'set',
                value: function (t, e, i) {
                  return (
                    t === e && (i = 0),
                    n(o(r.prototype), 'set', this).call(this, t, e, i)
                  );
                },
              },
              {
                key: 'addCross',
                value: function (t, e) {
                  return (
                    void 0 === e && ((e = t), (t = this.diagonalSize)),
                    ((e = e.slice())[t] = 0),
                    n(o(r.prototype), 'addCross', this).call(this, t, e)
                  );
                },
              },
              {
                key: 'toSymmetricMatrix',
                value: function () {
                  return new V(this);
                },
              },
              {
                key: 'clone',
                value: function () {
                  var t,
                    e = new r(this.diagonalSize),
                    n = v(this.upperRightEntries());
                  try {
                    for (n.s(); !(t = n.n()).done; ) {
                      var o = g(t.value, 3),
                        i = o[0],
                        s = o[1],
                        a = o[2];
                      i !== s && e.set(i, s, a);
                    }
                  } catch (t) {
                    n.e(t);
                  } finally {
                    n.f();
                  }
                  return e;
                },
              },
              {
                key: 'toCompact',
                value: function () {
                  for (
                    var t = this.diagonalSize,
                      e = new Array(((t - 1) * t) / 2),
                      r = 1,
                      n = 0,
                      o = 0;
                    o < e.length;
                    o++
                  )
                    (e[o] = this.get(n, r)), ++r >= t && (r = 1 + ++n);
                  return e;
                },
              },
            ],
            [
              {
                key: 'isDistanceMatrix',
                value: function (t) {
                  return (
                    V.isSymmetricMatrix(t) &&
                    'DistanceMatrix' === t.klassSubType
                  );
                },
              },
              {
                key: 'fromCompact',
                value: function (t) {
                  var e = t.length;
                  if (0 === e) return new this(0);
                  var r = (Math.sqrt(8 * e + 1) + 1) / 2;
                  if (!Number.isInteger(r))
                    throw new TypeError(
                      'This array is not a compact representation of a DistanceMatrix, '.concat(
                        JSON.stringify(t),
                      ),
                    );
                  for (var n = new this(r), o = 1, i = 0, s = 0; s < e; s++)
                    n.set(o, i, t[s]), ++o >= r && (o = 1 + ++i);
                  return n;
                },
              },
            ],
          ),
          r
        );
      })(V);
      B.prototype.klassSubType = 'DistanceMatrix';
      var U = (function (t) {
          d(r, t);
          var e = h(r);
          function r(t, n, o) {
            var i;
            return (
              y(this, r),
              ((i = e.call(this)).matrix = t),
              (i.rows = n),
              (i.columns = o),
              i
            );
          }
          return w(r);
        })(P),
        W = (function (t) {
          d(r, t);
          var e = h(r);
          function r(t, n) {
            var o;
            return (
              y(this, r),
              A(t, n),
              ((o = e.call(this, t, t.rows, 1)).column = n),
              o
            );
          }
          return (
            w(r, [
              {
                key: 'set',
                value: function (t, e, r) {
                  return this.matrix.set(t, this.column, r), this;
                },
              },
              {
                key: 'get',
                value: function (t) {
                  return this.matrix.get(t, this.column);
                },
              },
            ]),
            r
          );
        })(U),
        Y = (function (t) {
          d(r, t);
          var e = h(r);
          function r(t, n) {
            var o;
            return (
              y(this, r),
              I(t, n),
              ((o = e.call(this, t, t.rows, n.length)).columnIndices = n),
              o
            );
          }
          return (
            w(r, [
              {
                key: 'set',
                value: function (t, e, r) {
                  return this.matrix.set(t, this.columnIndices[e], r), this;
                },
              },
              {
                key: 'get',
                value: function (t, e) {
                  return this.matrix.get(t, this.columnIndices[e]);
                },
              },
            ]),
            r
          );
        })(U),
        $ = (function (t) {
          d(r, t);
          var e = h(r);
          function r(t) {
            return y(this, r), e.call(this, t, t.rows, t.columns);
          }
          return (
            w(r, [
              {
                key: 'set',
                value: function (t, e, r) {
                  return this.matrix.set(t, this.columns - e - 1, r), this;
                },
              },
              {
                key: 'get',
                value: function (t, e) {
                  return this.matrix.get(t, this.columns - e - 1);
                },
              },
            ]),
            r
          );
        })(U),
        H = (function (t) {
          d(r, t);
          var e = h(r);
          function r(t) {
            return y(this, r), e.call(this, t, t.rows, t.columns);
          }
          return (
            w(r, [
              {
                key: 'set',
                value: function (t, e, r) {
                  return this.matrix.set(this.rows - t - 1, e, r), this;
                },
              },
              {
                key: 'get',
                value: function (t, e) {
                  return this.matrix.get(this.rows - t - 1, e);
                },
              },
            ]),
            r
          );
        })(U),
        K = (function (t) {
          d(r, t);
          var e = h(r);
          function r(t, n) {
            var o;
            return (
              y(this, r),
              S(t, n),
              ((o = e.call(this, t, 1, t.columns)).row = n),
              o
            );
          }
          return (
            w(r, [
              {
                key: 'set',
                value: function (t, e, r) {
                  return this.matrix.set(this.row, e, r), this;
                },
              },
              {
                key: 'get',
                value: function (t, e) {
                  return this.matrix.get(this.row, e);
                },
              },
            ]),
            r
          );
        })(U),
        J = (function (t) {
          d(r, t);
          var e = h(r);
          function r(t, n) {
            var o;
            return (
              y(this, r),
              z(t, n),
              ((o = e.call(this, t, n.length, t.columns)).rowIndices = n),
              o
            );
          }
          return (
            w(r, [
              {
                key: 'set',
                value: function (t, e, r) {
                  return this.matrix.set(this.rowIndices[t], e, r), this;
                },
              },
              {
                key: 'get',
                value: function (t, e) {
                  return this.matrix.get(this.rowIndices[t], e);
                },
              },
            ]),
            r
          );
        })(U),
        Q = (function (t) {
          d(r, t);
          var e = h(r);
          function r(t, n, o) {
            var i;
            return (
              y(this, r),
              z(t, n),
              I(t, o),
              ((i = e.call(this, t, n.length, o.length)).rowIndices = n),
              (i.columnIndices = o),
              i
            );
          }
          return (
            w(r, [
              {
                key: 'set',
                value: function (t, e, r) {
                  return (
                    this.matrix.set(
                      this.rowIndices[t],
                      this.columnIndices[e],
                      r,
                    ),
                    this
                  );
                },
              },
              {
                key: 'get',
                value: function (t, e) {
                  return this.matrix.get(
                    this.rowIndices[t],
                    this.columnIndices[e],
                  );
                },
              },
            ]),
            r
          );
        })(U),
        X = (function (t) {
          d(r, t);
          var e = h(r);
          function r(t, n, o, i, s) {
            var a;
            return (
              y(this, r),
              j(t, n, o, i, s),
              ((a = e.call(this, t, o - n + 1, s - i + 1)).startRow = n),
              (a.startColumn = i),
              a
            );
          }
          return (
            w(r, [
              {
                key: 'set',
                value: function (t, e, r) {
                  return (
                    this.matrix.set(this.startRow + t, this.startColumn + e, r),
                    this
                  );
                },
              },
              {
                key: 'get',
                value: function (t, e) {
                  return this.matrix.get(
                    this.startRow + t,
                    this.startColumn + e,
                  );
                },
              },
            ]),
            r
          );
        })(U),
        tt = (function (t) {
          d(r, t);
          var e = h(r);
          function r(t) {
            return y(this, r), e.call(this, t, t.columns, t.rows);
          }
          return (
            w(r, [
              {
                key: 'set',
                value: function (t, e, r) {
                  return this.matrix.set(e, t, r), this;
                },
              },
              {
                key: 'get',
                value: function (t, e) {
                  return this.matrix.get(e, t);
                },
              },
            ]),
            r
          );
        })(U),
        et = (function (t) {
          d(r, t);
          var e = h(r);
          function r(t) {
            var n,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            y(this, r);
            var i = o.rows,
              s = void 0 === i ? 1 : i;
            if (t.length % s != 0)
              throw new Error(
                'the data length is not divisible by the number of rows',
              );
            return (
              ((n = e.call(this)).rows = s),
              (n.columns = t.length / s),
              (n.data = t),
              n
            );
          }
          return (
            w(r, [
              {
                key: 'set',
                value: function (t, e, r) {
                  var n = this._calculateIndex(t, e);
                  return (this.data[n] = r), this;
                },
              },
              {
                key: 'get',
                value: function (t, e) {
                  var r = this._calculateIndex(t, e);
                  return this.data[r];
                },
              },
              {
                key: '_calculateIndex',
                value: function (t, e) {
                  return t * this.columns + e;
                },
              },
            ]),
            r
          );
        })(P),
        rt = (function (t) {
          d(r, t);
          var e = h(r);
          function r(t) {
            var n;
            return (
              y(this, r),
              ((n = e.call(this)).data = t),
              (n.rows = t.length),
              (n.columns = t[0].length),
              n
            );
          }
          return (
            w(r, [
              {
                key: 'set',
                value: function (t, e, r) {
                  return (this.data[t][e] = r), this;
                },
              },
              {
                key: 'get',
                value: function (t, e) {
                  return this.data[t][e];
                },
              },
            ]),
            r
          );
        })(P);
      var nt = (function () {
        function t(e) {
          y(this, t);
          var r,
            n,
            o,
            i,
            s,
            a,
            u,
            d,
            h,
            c = (e = rt.checkMatrix(e)).clone(),
            l = c.rows,
            f = c.columns,
            g = new Float64Array(l),
            v = 1;
          for (r = 0; r < l; r++) g[r] = r;
          for (d = new Float64Array(l), n = 0; n < f; n++) {
            for (r = 0; r < l; r++) d[r] = c.get(r, n);
            for (r = 0; r < l; r++) {
              for (h = Math.min(r, n), s = 0, o = 0; o < h; o++)
                s += c.get(r, o) * d[o];
              (d[r] -= s), c.set(r, n, d[r]);
            }
            for (i = n, r = n + 1; r < l; r++)
              Math.abs(d[r]) > Math.abs(d[i]) && (i = r);
            if (i !== n) {
              for (o = 0; o < f; o++)
                (a = c.get(i, o)), c.set(i, o, c.get(n, o)), c.set(n, o, a);
              (u = g[i]), (g[i] = g[n]), (g[n] = u), (v = -v);
            }
            if (n < l && 0 !== c.get(n, n))
              for (r = n + 1; r < l; r++)
                c.set(r, n, c.get(r, n) / c.get(n, n));
          }
          (this.LU = c), (this.pivotVector = g), (this.pivotSign = v);
        }
        return (
          w(t, [
            {
              key: 'isSingular',
              value: function () {
                for (var t = this.LU, e = t.columns, r = 0; r < e; r++)
                  if (0 === t.get(r, r)) return !0;
                return !1;
              },
            },
            {
              key: 'solve',
              value: function (t) {
                t = q.checkMatrix(t);
                var e = this.LU;
                if (e.rows !== t.rows)
                  throw new Error('Invalid matrix dimensions');
                if (this.isSingular()) throw new Error('LU matrix is singular');
                var r,
                  n,
                  o,
                  i = t.columns,
                  s = t.subMatrixRow(this.pivotVector, 0, i - 1),
                  a = e.columns;
                for (o = 0; o < a; o++)
                  for (r = o + 1; r < a; r++)
                    for (n = 0; n < i; n++)
                      s.set(r, n, s.get(r, n) - s.get(o, n) * e.get(r, o));
                for (o = a - 1; o >= 0; o--) {
                  for (n = 0; n < i; n++)
                    s.set(o, n, s.get(o, n) / e.get(o, o));
                  for (r = 0; r < o; r++)
                    for (n = 0; n < i; n++)
                      s.set(r, n, s.get(r, n) - s.get(o, n) * e.get(r, o));
                }
                return s;
              },
            },
            {
              key: 'determinant',
              get: function () {
                var t = this.LU;
                if (!t.isSquare()) throw new Error('Matrix must be square');
                for (var e = this.pivotSign, r = t.columns, n = 0; n < r; n++)
                  e *= t.get(n, n);
                return e;
              },
            },
            {
              key: 'lowerTriangularMatrix',
              get: function () {
                for (
                  var t = this.LU,
                    e = t.rows,
                    r = t.columns,
                    n = new q(e, r),
                    o = 0;
                  o < e;
                  o++
                )
                  for (var i = 0; i < r; i++)
                    o > i
                      ? n.set(o, i, t.get(o, i))
                      : o === i
                        ? n.set(o, i, 1)
                        : n.set(o, i, 0);
                return n;
              },
            },
            {
              key: 'upperTriangularMatrix',
              get: function () {
                for (
                  var t = this.LU,
                    e = t.rows,
                    r = t.columns,
                    n = new q(e, r),
                    o = 0;
                  o < e;
                  o++
                )
                  for (var i = 0; i < r; i++)
                    o <= i ? n.set(o, i, t.get(o, i)) : n.set(o, i, 0);
                return n;
              },
            },
            {
              key: 'pivotPermutationVector',
              get: function () {
                return Array.from(this.pivotVector);
              },
            },
          ]),
          t
        );
      })();
      function ot(t, e) {
        var r = 0;
        return Math.abs(t) > Math.abs(e)
          ? ((r = e / t), Math.abs(t) * Math.sqrt(1 + r * r))
          : 0 !== e
            ? ((r = t / e), Math.abs(e) * Math.sqrt(1 + r * r))
            : 0;
      }
      var it = (function () {
          function t(e) {
            y(this, t);
            var r,
              n,
              o,
              i,
              s = (e = rt.checkMatrix(e)).clone(),
              a = e.rows,
              u = e.columns,
              d = new Float64Array(u);
            for (o = 0; o < u; o++) {
              var h = 0;
              for (r = o; r < a; r++) h = ot(h, s.get(r, o));
              if (0 !== h) {
                for (s.get(o, o) < 0 && (h = -h), r = o; r < a; r++)
                  s.set(r, o, s.get(r, o) / h);
                for (s.set(o, o, s.get(o, o) + 1), n = o + 1; n < u; n++) {
                  for (i = 0, r = o; r < a; r++) i += s.get(r, o) * s.get(r, n);
                  for (i = -i / s.get(o, o), r = o; r < a; r++)
                    s.set(r, n, s.get(r, n) + i * s.get(r, o));
                }
              }
              d[o] = -h;
            }
            (this.QR = s), (this.Rdiag = d);
          }
          return (
            w(t, [
              {
                key: 'solve',
                value: function (t) {
                  t = q.checkMatrix(t);
                  var e = this.QR,
                    r = e.rows;
                  if (t.rows !== r)
                    throw new Error('Matrix row dimensions must agree');
                  if (!this.isFullRank())
                    throw new Error('Matrix is rank deficient');
                  var n,
                    o,
                    i,
                    s,
                    a = t.columns,
                    u = t.clone(),
                    d = e.columns;
                  for (i = 0; i < d; i++)
                    for (o = 0; o < a; o++) {
                      for (s = 0, n = i; n < r; n++)
                        s += e.get(n, i) * u.get(n, o);
                      for (s = -s / e.get(i, i), n = i; n < r; n++)
                        u.set(n, o, u.get(n, o) + s * e.get(n, i));
                    }
                  for (i = d - 1; i >= 0; i--) {
                    for (o = 0; o < a; o++)
                      u.set(i, o, u.get(i, o) / this.Rdiag[i]);
                    for (n = 0; n < i; n++)
                      for (o = 0; o < a; o++)
                        u.set(n, o, u.get(n, o) - u.get(i, o) * e.get(n, i));
                  }
                  return u.subMatrix(0, d - 1, 0, a - 1);
                },
              },
              {
                key: 'isFullRank',
                value: function () {
                  for (var t = this.QR.columns, e = 0; e < t; e++)
                    if (0 === this.Rdiag[e]) return !1;
                  return !0;
                },
              },
              {
                key: 'upperTriangularMatrix',
                get: function () {
                  var t,
                    e,
                    r = this.QR,
                    n = r.columns,
                    o = new q(n, n);
                  for (t = 0; t < n; t++)
                    for (e = 0; e < n; e++)
                      t < e
                        ? o.set(t, e, r.get(t, e))
                        : t === e
                          ? o.set(t, e, this.Rdiag[t])
                          : o.set(t, e, 0);
                  return o;
                },
              },
              {
                key: 'orthogonalMatrix',
                get: function () {
                  var t,
                    e,
                    r,
                    n,
                    o = this.QR,
                    i = o.rows,
                    s = o.columns,
                    a = new q(i, s);
                  for (r = s - 1; r >= 0; r--) {
                    for (t = 0; t < i; t++) a.set(t, r, 0);
                    for (a.set(r, r, 1), e = r; e < s; e++)
                      if (0 !== o.get(r, r)) {
                        for (n = 0, t = r; t < i; t++)
                          n += o.get(t, r) * a.get(t, e);
                        for (n = -n / o.get(r, r), t = r; t < i; t++)
                          a.set(t, e, a.get(t, e) + n * o.get(t, r));
                      }
                  }
                  return a;
                },
              },
            ]),
            t
          );
        })(),
        st = (function () {
          function t(e) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if ((y(this, t), (e = rt.checkMatrix(e)).isEmpty()))
              throw new Error('Matrix must be non-empty');
            var n,
              o = e.rows,
              i = e.columns,
              s = r.computeLeftSingularVectors,
              a = void 0 === s || s,
              u = r.computeRightSingularVectors,
              d = void 0 === u || u,
              h = r.autoTranspose,
              c = void 0 !== h && h,
              l = Boolean(a),
              f = Boolean(d),
              g = !1;
            if (o < i)
              if (c) {
                (o = (n = e.transpose()).rows), (i = n.columns), (g = !0);
                var v = l;
                (l = f), (f = v);
              } else
                (n = e.clone()),
                  console.warn(
                    'Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose',
                  );
            else n = e.clone();
            for (
              var p = Math.min(o, i),
                m = Math.min(o + 1, i),
                w = new Float64Array(m),
                x = new q(o, p),
                b = new q(i, i),
                E = new Float64Array(i),
                N = new Float64Array(o),
                M = new Float64Array(m),
                k = 0;
              k < m;
              k++
            )
              M[k] = k;
            for (
              var _ = Math.min(o - 1, i),
                S = Math.max(0, Math.min(i - 2, o)),
                A = Math.max(_, S),
                O = 0;
              O < A;
              O++
            ) {
              if (O < _) {
                w[O] = 0;
                for (var R = O; R < o; R++) w[O] = ot(w[O], n.get(R, O));
                if (0 !== w[O]) {
                  n.get(O, O) < 0 && (w[O] = -w[O]);
                  for (var z = O; z < o; z++) n.set(z, O, n.get(z, O) / w[O]);
                  n.set(O, O, n.get(O, O) + 1);
                }
                w[O] = -w[O];
              }
              for (var I = O + 1; I < i; I++) {
                if (O < _ && 0 !== w[O]) {
                  for (var j = 0, C = O; C < o; C++)
                    j += n.get(C, O) * n.get(C, I);
                  j = -j / n.get(O, O);
                  for (var D = O; D < o; D++)
                    n.set(D, I, n.get(D, I) + j * n.get(D, O));
                }
                E[I] = n.get(O, I);
              }
              if (l && O < _)
                for (var T = O; T < o; T++) x.set(T, O, n.get(T, O));
              if (O < S) {
                E[O] = 0;
                for (var P = O + 1; P < i; P++) E[O] = ot(E[O], E[P]);
                if (0 !== E[O]) {
                  E[O + 1] < 0 && (E[O] = 0 - E[O]);
                  for (var L = O + 1; L < i; L++) E[L] /= E[O];
                  E[O + 1] += 1;
                }
                if (((E[O] = -E[O]), O + 1 < o && 0 !== E[O])) {
                  for (var F = O + 1; F < o; F++) N[F] = 0;
                  for (var Z = O + 1; Z < o; Z++)
                    for (var G = O + 1; G < i; G++) N[Z] += E[G] * n.get(Z, G);
                  for (var V = O + 1; V < i; V++)
                    for (var B = -E[V] / E[O + 1], U = O + 1; U < o; U++)
                      n.set(U, V, n.get(U, V) + B * N[U]);
                }
                if (f) for (var W = O + 1; W < i; W++) b.set(W, O, E[W]);
              }
            }
            var Y = Math.min(i, o + 1);
            if (
              (_ < i && (w[_] = n.get(_, _)),
              o < Y && (w[Y - 1] = 0),
              S + 1 < Y && (E[S] = n.get(S, Y - 1)),
              (E[Y - 1] = 0),
              l)
            ) {
              for (var $ = _; $ < p; $++) {
                for (var H = 0; H < o; H++) x.set(H, $, 0);
                x.set($, $, 1);
              }
              for (var K = _ - 1; K >= 0; K--)
                if (0 !== w[K]) {
                  for (var J = K + 1; J < p; J++) {
                    for (var Q = 0, X = K; X < o; X++)
                      Q += x.get(X, K) * x.get(X, J);
                    Q = -Q / x.get(K, K);
                    for (var tt = K; tt < o; tt++)
                      x.set(tt, J, x.get(tt, J) + Q * x.get(tt, K));
                  }
                  for (var et = K; et < o; et++) x.set(et, K, -x.get(et, K));
                  x.set(K, K, 1 + x.get(K, K));
                  for (var nt = 0; nt < K - 1; nt++) x.set(nt, K, 0);
                } else {
                  for (var it = 0; it < o; it++) x.set(it, K, 0);
                  x.set(K, K, 1);
                }
            }
            if (f)
              for (var st = i - 1; st >= 0; st--) {
                if (st < S && 0 !== E[st])
                  for (var at = st + 1; at < i; at++) {
                    for (var ut = 0, dt = st + 1; dt < i; dt++)
                      ut += b.get(dt, st) * b.get(dt, at);
                    ut = -ut / b.get(st + 1, st);
                    for (var ht = st + 1; ht < i; ht++)
                      b.set(ht, at, b.get(ht, at) + ut * b.get(ht, st));
                  }
                for (var ct = 0; ct < i; ct++) b.set(ct, st, 0);
                b.set(st, st, 1);
              }
            for (var lt = Y - 1, ft = Number.EPSILON; Y > 0; ) {
              var gt = void 0,
                vt = void 0;
              for (gt = Y - 2; gt >= -1 && -1 !== gt; gt--) {
                var pt =
                  Number.MIN_VALUE + ft * Math.abs(w[gt] + Math.abs(w[gt + 1]));
                if (Math.abs(E[gt]) <= pt || Number.isNaN(E[gt])) {
                  E[gt] = 0;
                  break;
                }
              }
              if (gt === Y - 2) vt = 4;
              else {
                var mt = void 0;
                for (mt = Y - 1; mt >= gt && mt !== gt; mt--) {
                  var yt =
                    (mt !== Y ? Math.abs(E[mt]) : 0) +
                    (mt !== gt + 1 ? Math.abs(E[mt - 1]) : 0);
                  if (Math.abs(w[mt]) <= ft * yt) {
                    w[mt] = 0;
                    break;
                  }
                }
                mt === gt
                  ? (vt = 3)
                  : mt === Y - 1
                    ? (vt = 1)
                    : ((vt = 2), (gt = mt));
              }
              switch ((gt++, vt)) {
                case 1:
                  var wt = E[Y - 2];
                  E[Y - 2] = 0;
                  for (var xt = Y - 2; xt >= gt; xt--) {
                    var bt = ot(w[xt], wt),
                      Et = w[xt] / bt,
                      Nt = wt / bt;
                    if (
                      ((w[xt] = bt),
                      xt !== gt &&
                        ((wt = -Nt * E[xt - 1]), (E[xt - 1] = Et * E[xt - 1])),
                      f)
                    )
                      for (var Mt = 0; Mt < i; Mt++)
                        (bt = Et * b.get(Mt, xt) + Nt * b.get(Mt, Y - 1)),
                          b.set(
                            Mt,
                            Y - 1,
                            -Nt * b.get(Mt, xt) + Et * b.get(Mt, Y - 1),
                          ),
                          b.set(Mt, xt, bt);
                  }
                  break;
                case 2:
                  var kt = E[gt - 1];
                  E[gt - 1] = 0;
                  for (var _t = gt; _t < Y; _t++) {
                    var St = ot(w[_t], kt),
                      At = w[_t] / St,
                      Ot = kt / St;
                    if (
                      ((w[_t] = St),
                      (kt = -Ot * E[_t]),
                      (E[_t] = At * E[_t]),
                      l)
                    )
                      for (var Rt = 0; Rt < o; Rt++)
                        (St = At * x.get(Rt, _t) + Ot * x.get(Rt, gt - 1)),
                          x.set(
                            Rt,
                            gt - 1,
                            -Ot * x.get(Rt, _t) + At * x.get(Rt, gt - 1),
                          ),
                          x.set(Rt, _t, St);
                  }
                  break;
                case 3:
                  var zt = Math.max(
                      Math.abs(w[Y - 1]),
                      Math.abs(w[Y - 2]),
                      Math.abs(E[Y - 2]),
                      Math.abs(w[gt]),
                      Math.abs(E[gt]),
                    ),
                    It = w[Y - 1] / zt,
                    jt = w[Y - 2] / zt,
                    Ct = E[Y - 2] / zt,
                    Dt = w[gt] / zt,
                    Tt = E[gt] / zt,
                    Pt = ((jt + It) * (jt - It) + Ct * Ct) / 2,
                    Lt = It * Ct * (It * Ct),
                    Ft = 0;
                  (0 === Pt && 0 === Lt) ||
                    (Ft =
                      Lt /
                      (Pt +
                        (Ft =
                          Pt < 0
                            ? 0 - Math.sqrt(Pt * Pt + Lt)
                            : Math.sqrt(Pt * Pt + Lt))));
                  for (
                    var qt = (Dt + It) * (Dt - It) + Ft, Zt = Dt * Tt, Gt = gt;
                    Gt < Y - 1;
                    Gt++
                  ) {
                    var Vt = ot(qt, Zt);
                    0 === Vt && (Vt = Number.MIN_VALUE);
                    var Bt = qt / Vt,
                      Ut = Zt / Vt;
                    if (
                      (Gt !== gt && (E[Gt - 1] = Vt),
                      (qt = Bt * w[Gt] + Ut * E[Gt]),
                      (E[Gt] = Bt * E[Gt] - Ut * w[Gt]),
                      (Zt = Ut * w[Gt + 1]),
                      (w[Gt + 1] = Bt * w[Gt + 1]),
                      f)
                    )
                      for (var Wt = 0; Wt < i; Wt++)
                        (Vt = Bt * b.get(Wt, Gt) + Ut * b.get(Wt, Gt + 1)),
                          b.set(
                            Wt,
                            Gt + 1,
                            -Ut * b.get(Wt, Gt) + Bt * b.get(Wt, Gt + 1),
                          ),
                          b.set(Wt, Gt, Vt);
                    if (
                      (0 === (Vt = ot(qt, Zt)) && (Vt = Number.MIN_VALUE),
                      (Bt = qt / Vt),
                      (Ut = Zt / Vt),
                      (w[Gt] = Vt),
                      (qt = Bt * E[Gt] + Ut * w[Gt + 1]),
                      (w[Gt + 1] = -Ut * E[Gt] + Bt * w[Gt + 1]),
                      (Zt = Ut * E[Gt + 1]),
                      (E[Gt + 1] = Bt * E[Gt + 1]),
                      l && Gt < o - 1)
                    )
                      for (var Yt = 0; Yt < o; Yt++)
                        (Vt = Bt * x.get(Yt, Gt) + Ut * x.get(Yt, Gt + 1)),
                          x.set(
                            Yt,
                            Gt + 1,
                            -Ut * x.get(Yt, Gt) + Bt * x.get(Yt, Gt + 1),
                          ),
                          x.set(Yt, Gt, Vt);
                  }
                  E[Y - 2] = qt;
                  break;
                case 4:
                  if (w[gt] <= 0 && ((w[gt] = w[gt] < 0 ? -w[gt] : 0), f))
                    for (var $t = 0; $t <= lt; $t++)
                      b.set($t, gt, -b.get($t, gt));
                  for (; gt < lt && !(w[gt] >= w[gt + 1]); ) {
                    var Ht = w[gt];
                    if (
                      ((w[gt] = w[gt + 1]), (w[gt + 1] = Ht), f && gt < i - 1)
                    )
                      for (var Kt = 0; Kt < i; Kt++)
                        (Ht = b.get(Kt, gt + 1)),
                          b.set(Kt, gt + 1, b.get(Kt, gt)),
                          b.set(Kt, gt, Ht);
                    if (l && gt < o - 1)
                      for (var Jt = 0; Jt < o; Jt++)
                        (Ht = x.get(Jt, gt + 1)),
                          x.set(Jt, gt + 1, x.get(Jt, gt)),
                          x.set(Jt, gt, Ht);
                    gt++;
                  }
                  Y--;
              }
            }
            if (g) {
              var Qt = b;
              (b = x), (x = Qt);
            }
            (this.m = o),
              (this.n = i),
              (this.s = w),
              (this.U = x),
              (this.V = b);
          }
          return (
            w(t, [
              {
                key: 'solve',
                value: function (t) {
                  for (
                    var e = t,
                      r = this.threshold,
                      n = this.s.length,
                      o = q.zeros(n, n),
                      i = 0;
                    i < n;
                    i++
                  )
                    Math.abs(this.s[i]) <= r
                      ? o.set(i, i, 0)
                      : o.set(i, i, 1 / this.s[i]);
                  for (
                    var s = this.U,
                      a = this.rightSingularVectors,
                      u = a.mmul(o),
                      d = a.rows,
                      h = s.rows,
                      c = q.zeros(d, h),
                      l = 0;
                    l < d;
                    l++
                  )
                    for (var f = 0; f < h; f++) {
                      for (var g = 0, v = 0; v < n; v++)
                        g += u.get(l, v) * s.get(f, v);
                      c.set(l, f, g);
                    }
                  return c.mmul(e);
                },
              },
              {
                key: 'solveForDiagonal',
                value: function (t) {
                  return this.solve(q.diag(t));
                },
              },
              {
                key: 'inverse',
                value: function () {
                  for (
                    var t = this.V,
                      e = this.threshold,
                      r = t.rows,
                      n = t.columns,
                      o = new q(r, this.s.length),
                      i = 0;
                    i < r;
                    i++
                  )
                    for (var s = 0; s < n; s++)
                      Math.abs(this.s[s]) > e &&
                        o.set(i, s, t.get(i, s) / this.s[s]);
                  for (
                    var a = this.U,
                      u = a.rows,
                      d = a.columns,
                      h = new q(r, u),
                      c = 0;
                    c < r;
                    c++
                  )
                    for (var l = 0; l < u; l++) {
                      for (var f = 0, g = 0; g < d; g++)
                        f += o.get(c, g) * a.get(l, g);
                      h.set(c, l, f);
                    }
                  return h;
                },
              },
              {
                key: 'condition',
                get: function () {
                  return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
                },
              },
              {
                key: 'norm2',
                get: function () {
                  return this.s[0];
                },
              },
              {
                key: 'rank',
                get: function () {
                  for (
                    var t =
                        Math.max(this.m, this.n) * this.s[0] * Number.EPSILON,
                      e = 0,
                      r = this.s,
                      n = 0,
                      o = r.length;
                    n < o;
                    n++
                  )
                    r[n] > t && e++;
                  return e;
                },
              },
              {
                key: 'diagonal',
                get: function () {
                  return Array.from(this.s);
                },
              },
              {
                key: 'threshold',
                get: function () {
                  return (
                    (Number.EPSILON / 2) * Math.max(this.m, this.n) * this.s[0]
                  );
                },
              },
              {
                key: 'leftSingularVectors',
                get: function () {
                  return this.U;
                },
              },
              {
                key: 'rightSingularVectors',
                get: function () {
                  return this.V;
                },
              },
              {
                key: 'diagonalMatrix',
                get: function () {
                  return q.diag(this.s);
                },
              },
            ]),
            t
          );
        })();
      function at(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
          (t = rt.checkMatrix(t)),
          (e = rt.checkMatrix(e)),
          r
            ? new st(t).solve(e)
            : t.isSquare()
              ? new nt(t).solve(e)
              : new it(t).solve(e)
        );
      }
      function ut(t, e) {
        for (var r = [], n = 0; n < t; n++) n !== e && r.push(n);
        return r;
      }
      function dt(t, e, r) {
        var n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-9;
        if (
          t >
          (arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : 1e-9)
        )
          return new Array(e.rows + 1).fill(0);
        for (var o = e.addRow(r, [0]), i = 0; i < o.rows; i++)
          Math.abs(o.get(i, 0)) < n && o.set(i, 0, 0);
        return o.to1DArray();
      }
      var ht = (function () {
        function t(e) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          y(this, t);
          var n = r.assumeSymmetric,
            o = void 0 !== n && n;
          if (!(e = rt.checkMatrix(e)).isSquare())
            throw new Error('Matrix is not a square matrix');
          if (e.isEmpty()) throw new Error('Matrix must be non-empty');
          var i,
            s,
            a = e.columns,
            u = new q(a, a),
            d = new Float64Array(a),
            h = new Float64Array(a),
            c = e;
          if (!!o || e.isSymmetric()) {
            for (i = 0; i < a; i++)
              for (s = 0; s < a; s++) u.set(i, s, c.get(i, s));
            !(function (t, e, r, n) {
              var o, i, s, a, u, d, h, c;
              for (u = 0; u < t; u++) r[u] = n.get(t - 1, u);
              for (a = t - 1; a > 0; a--) {
                for (c = 0, s = 0, d = 0; d < a; d++) c += Math.abs(r[d]);
                if (0 === c)
                  for (e[a] = r[a - 1], u = 0; u < a; u++)
                    (r[u] = n.get(a - 1, u)), n.set(a, u, 0), n.set(u, a, 0);
                else {
                  for (d = 0; d < a; d++) (r[d] /= c), (s += r[d] * r[d]);
                  for (
                    o = r[a - 1],
                      i = Math.sqrt(s),
                      o > 0 && (i = -i),
                      e[a] = c * i,
                      s -= o * i,
                      r[a - 1] = o - i,
                      u = 0;
                    u < a;
                    u++
                  )
                    e[u] = 0;
                  for (u = 0; u < a; u++) {
                    for (
                      o = r[u],
                        n.set(u, a, o),
                        i = e[u] + n.get(u, u) * o,
                        d = u + 1;
                      d <= a - 1;
                      d++
                    )
                      (i += n.get(d, u) * r[d]), (e[d] += n.get(d, u) * o);
                    e[u] = i;
                  }
                  for (o = 0, u = 0; u < a; u++)
                    (e[u] /= s), (o += e[u] * r[u]);
                  for (h = o / (s + s), u = 0; u < a; u++) e[u] -= h * r[u];
                  for (u = 0; u < a; u++) {
                    for (o = r[u], i = e[u], d = u; d <= a - 1; d++)
                      n.set(d, u, n.get(d, u) - (o * e[d] + i * r[d]));
                    (r[u] = n.get(a - 1, u)), n.set(a, u, 0);
                  }
                }
                r[a] = s;
              }
              for (a = 0; a < t - 1; a++) {
                if (
                  (n.set(t - 1, a, n.get(a, a)),
                  n.set(a, a, 1),
                  0 !== (s = r[a + 1]))
                ) {
                  for (d = 0; d <= a; d++) r[d] = n.get(d, a + 1) / s;
                  for (u = 0; u <= a; u++) {
                    for (i = 0, d = 0; d <= a; d++)
                      i += n.get(d, a + 1) * n.get(d, u);
                    for (d = 0; d <= a; d++)
                      n.set(d, u, n.get(d, u) - i * r[d]);
                  }
                }
                for (d = 0; d <= a; d++) n.set(d, a + 1, 0);
              }
              for (u = 0; u < t; u++)
                (r[u] = n.get(t - 1, u)), n.set(t - 1, u, 0);
              n.set(t - 1, t - 1, 1), (e[0] = 0);
            })(a, h, d, u),
              (function (t, e, r, n) {
                var o, i, s, a, u, d, h, c, l, f, g, v, p, m, y, w;
                for (s = 1; s < t; s++) e[s - 1] = e[s];
                e[t - 1] = 0;
                var x = 0,
                  b = 0,
                  E = Number.EPSILON;
                for (d = 0; d < t; d++) {
                  for (
                    b = Math.max(b, Math.abs(r[d]) + Math.abs(e[d])), h = d;
                    h < t && !(Math.abs(e[h]) <= E * b);

                  )
                    h++;
                  if (h > d)
                    do {
                      for (
                        o = r[d],
                          l = ot((c = (r[d + 1] - o) / (2 * e[d])), 1),
                          c < 0 && (l = -l),
                          r[d] = e[d] / (c + l),
                          r[d + 1] = e[d] * (c + l),
                          f = r[d + 1],
                          i = o - r[d],
                          s = d + 2;
                        s < t;
                        s++
                      )
                        r[s] -= i;
                      for (
                        x += i,
                          c = r[h],
                          v = g = 1,
                          p = g,
                          m = e[d + 1],
                          y = 0,
                          w = 0,
                          s = h - 1;
                        s >= d;
                        s--
                      )
                        for (
                          p = v,
                            v = g,
                            w = y,
                            o = g * e[s],
                            i = g * c,
                            l = ot(c, e[s]),
                            e[s + 1] = y * l,
                            y = e[s] / l,
                            c = (g = c / l) * r[s] - y * o,
                            r[s + 1] = i + y * (g * o + y * r[s]),
                            u = 0;
                          u < t;
                          u++
                        )
                          (i = n.get(u, s + 1)),
                            n.set(u, s + 1, y * n.get(u, s) + g * i),
                            n.set(u, s, g * n.get(u, s) - y * i);
                      (c = (-y * w * p * m * e[d]) / f),
                        (e[d] = y * c),
                        (r[d] = g * c);
                    } while (Math.abs(e[d]) > E * b);
                  (r[d] = r[d] + x), (e[d] = 0);
                }
                for (s = 0; s < t - 1; s++) {
                  for (u = s, c = r[s], a = s + 1; a < t; a++)
                    r[a] < c && ((u = a), (c = r[a]));
                  if (u !== s)
                    for (r[u] = r[s], r[s] = c, a = 0; a < t; a++)
                      (c = n.get(a, s)),
                        n.set(a, s, n.get(a, u)),
                        n.set(a, u, c);
                }
              })(a, h, d, u);
          } else {
            var l = new q(a, a),
              f = new Float64Array(a);
            for (s = 0; s < a; s++)
              for (i = 0; i < a; i++) l.set(i, s, c.get(i, s));
            !(function (t, e, r, n) {
              var o,
                i,
                s,
                a,
                u,
                d,
                h,
                c = 0,
                l = t - 1;
              for (d = c + 1; d <= l - 1; d++) {
                for (h = 0, a = d; a <= l; a++) h += Math.abs(e.get(a, d - 1));
                if (0 !== h) {
                  for (s = 0, a = l; a >= d; a--)
                    (r[a] = e.get(a, d - 1) / h), (s += r[a] * r[a]);
                  for (
                    i = Math.sqrt(s),
                      r[d] > 0 && (i = -i),
                      s -= r[d] * i,
                      r[d] = r[d] - i,
                      u = d;
                    u < t;
                    u++
                  ) {
                    for (o = 0, a = l; a >= d; a--) o += r[a] * e.get(a, u);
                    for (o /= s, a = d; a <= l; a++)
                      e.set(a, u, e.get(a, u) - o * r[a]);
                  }
                  for (a = 0; a <= l; a++) {
                    for (o = 0, u = l; u >= d; u--) o += r[u] * e.get(a, u);
                    for (o /= s, u = d; u <= l; u++)
                      e.set(a, u, e.get(a, u) - o * r[u]);
                  }
                  (r[d] = h * r[d]), e.set(d, d - 1, h * i);
                }
              }
              for (a = 0; a < t; a++)
                for (u = 0; u < t; u++) n.set(a, u, a === u ? 1 : 0);
              for (d = l - 1; d >= c + 1; d--)
                if (0 !== e.get(d, d - 1)) {
                  for (a = d + 1; a <= l; a++) r[a] = e.get(a, d - 1);
                  for (u = d; u <= l; u++) {
                    for (i = 0, a = d; a <= l; a++) i += r[a] * n.get(a, u);
                    for (i = i / r[d] / e.get(d, d - 1), a = d; a <= l; a++)
                      n.set(a, u, n.get(a, u) + i * r[a]);
                  }
                }
            })(a, l, f, u),
              (function (t, e, r, n, o) {
                var i,
                  s,
                  a,
                  u,
                  d,
                  h,
                  c,
                  l,
                  f,
                  g,
                  v,
                  p,
                  m,
                  y,
                  w,
                  x = t - 1,
                  b = 0,
                  E = t - 1,
                  N = Number.EPSILON,
                  M = 0,
                  k = 0,
                  _ = 0,
                  S = 0,
                  A = 0,
                  O = 0,
                  R = 0,
                  z = 0;
                for (i = 0; i < t; i++)
                  for (
                    (i < b || i > E) && ((r[i] = o.get(i, i)), (e[i] = 0)),
                      s = Math.max(i - 1, 0);
                    s < t;
                    s++
                  )
                    k += Math.abs(o.get(i, s));
                for (; x >= b; ) {
                  for (
                    u = x;
                    u > b &&
                    (0 ===
                      (O =
                        Math.abs(o.get(u - 1, u - 1)) +
                        Math.abs(o.get(u, u))) && (O = k),
                    !(Math.abs(o.get(u, u - 1)) < N * O));

                  )
                    u--;
                  if (u === x)
                    o.set(x, x, o.get(x, x) + M),
                      (r[x] = o.get(x, x)),
                      (e[x] = 0),
                      x--,
                      (z = 0);
                  else if (u === x - 1) {
                    if (
                      ((c = o.get(x, x - 1) * o.get(x - 1, x)),
                      (S =
                        (_ = (o.get(x - 1, x - 1) - o.get(x, x)) / 2) * _ + c),
                      (R = Math.sqrt(Math.abs(S))),
                      o.set(x, x, o.get(x, x) + M),
                      o.set(x - 1, x - 1, o.get(x - 1, x - 1) + M),
                      (l = o.get(x, x)),
                      S >= 0)
                    ) {
                      for (
                        R = _ >= 0 ? _ + R : _ - R,
                          r[x - 1] = l + R,
                          r[x] = r[x - 1],
                          0 !== R && (r[x] = l - c / R),
                          e[x - 1] = 0,
                          e[x] = 0,
                          _ =
                            (l = o.get(x, x - 1)) /
                            (O = Math.abs(l) + Math.abs(R)),
                          S = R / O,
                          _ /= A = Math.sqrt(_ * _ + S * S),
                          S /= A,
                          s = x - 1;
                        s < t;
                        s++
                      )
                        (R = o.get(x - 1, s)),
                          o.set(x - 1, s, S * R + _ * o.get(x, s)),
                          o.set(x, s, S * o.get(x, s) - _ * R);
                      for (i = 0; i <= x; i++)
                        (R = o.get(i, x - 1)),
                          o.set(i, x - 1, S * R + _ * o.get(i, x)),
                          o.set(i, x, S * o.get(i, x) - _ * R);
                      for (i = b; i <= E; i++)
                        (R = n.get(i, x - 1)),
                          n.set(i, x - 1, S * R + _ * n.get(i, x)),
                          n.set(i, x, S * n.get(i, x) - _ * R);
                    } else
                      (r[x - 1] = l + _),
                        (r[x] = l + _),
                        (e[x - 1] = R),
                        (e[x] = -R);
                    (x -= 2), (z = 0);
                  } else {
                    if (
                      ((l = o.get(x, x)),
                      (f = 0),
                      (c = 0),
                      u < x &&
                        ((f = o.get(x - 1, x - 1)),
                        (c = o.get(x, x - 1) * o.get(x - 1, x))),
                      10 === z)
                    ) {
                      for (M += l, i = b; i <= x; i++)
                        o.set(i, i, o.get(i, i) - l);
                      (l = f =
                        0.75 *
                        (O =
                          Math.abs(o.get(x, x - 1)) +
                          Math.abs(o.get(x - 1, x - 2)))),
                        (c = -0.4375 * O * O);
                    }
                    if (30 === z && (O = (O = (f - l) / 2) * O + c) > 0) {
                      for (
                        O = Math.sqrt(O),
                          f < l && (O = -O),
                          O = l - c / ((f - l) / 2 + O),
                          i = b;
                        i <= x;
                        i++
                      )
                        o.set(i, i, o.get(i, i) - O);
                      (M += O), (l = f = c = 0.964);
                    }
                    for (
                      z += 1, d = x - 2;
                      d >= u &&
                      ((_ =
                        ((A = l - (R = o.get(d, d))) * (O = f - R) - c) /
                          o.get(d + 1, d) +
                        o.get(d, d + 1)),
                      (S = o.get(d + 1, d + 1) - R - A - O),
                      (A = o.get(d + 2, d + 1)),
                      (_ /= O = Math.abs(_) + Math.abs(S) + Math.abs(A)),
                      (S /= O),
                      (A /= O),
                      d !== u) &&
                      !(
                        Math.abs(o.get(d, d - 1)) *
                          (Math.abs(S) + Math.abs(A)) <
                        N *
                          (Math.abs(_) *
                            (Math.abs(o.get(d - 1, d - 1)) +
                              Math.abs(R) +
                              Math.abs(o.get(d + 1, d + 1))))
                      );

                    )
                      d--;
                    for (i = d + 2; i <= x; i++)
                      o.set(i, i - 2, 0), i > d + 2 && o.set(i, i - 3, 0);
                    for (
                      a = d;
                      a <= x - 1 &&
                      ((y = a !== x - 1),
                      a !== d &&
                        ((_ = o.get(a, a - 1)),
                        (S = o.get(a + 1, a - 1)),
                        (A = y ? o.get(a + 2, a - 1) : 0),
                        0 !== (l = Math.abs(_) + Math.abs(S) + Math.abs(A)) &&
                          ((_ /= l), (S /= l), (A /= l))),
                      0 !== l);
                      a++
                    )
                      if (
                        ((O = Math.sqrt(_ * _ + S * S + A * A)),
                        _ < 0 && (O = -O),
                        0 !== O)
                      ) {
                        for (
                          a !== d
                            ? o.set(a, a - 1, -O * l)
                            : u !== d && o.set(a, a - 1, -o.get(a, a - 1)),
                            l = (_ += O) / O,
                            f = S / O,
                            R = A / O,
                            S /= _,
                            A /= _,
                            s = a;
                          s < t;
                          s++
                        )
                          (_ = o.get(a, s) + S * o.get(a + 1, s)),
                            y &&
                              ((_ += A * o.get(a + 2, s)),
                              o.set(a + 2, s, o.get(a + 2, s) - _ * R)),
                            o.set(a, s, o.get(a, s) - _ * l),
                            o.set(a + 1, s, o.get(a + 1, s) - _ * f);
                        for (i = 0; i <= Math.min(x, a + 3); i++)
                          (_ = l * o.get(i, a) + f * o.get(i, a + 1)),
                            y &&
                              ((_ += R * o.get(i, a + 2)),
                              o.set(i, a + 2, o.get(i, a + 2) - _ * A)),
                            o.set(i, a, o.get(i, a) - _),
                            o.set(i, a + 1, o.get(i, a + 1) - _ * S);
                        for (i = b; i <= E; i++)
                          (_ = l * n.get(i, a) + f * n.get(i, a + 1)),
                            y &&
                              ((_ += R * n.get(i, a + 2)),
                              n.set(i, a + 2, n.get(i, a + 2) - _ * A)),
                            n.set(i, a, n.get(i, a) - _),
                            n.set(i, a + 1, n.get(i, a + 1) - _ * S);
                      }
                  }
                }
                if (0 === k) return;
                for (x = t - 1; x >= 0; x--)
                  if (((_ = r[x]), 0 === (S = e[x])))
                    for (u = x, o.set(x, x, 1), i = x - 1; i >= 0; i--) {
                      for (c = o.get(i, i) - _, A = 0, s = u; s <= x; s++)
                        A += o.get(i, s) * o.get(s, x);
                      if (e[i] < 0) (R = c), (O = A);
                      else if (
                        ((u = i),
                        0 === e[i]
                          ? o.set(i, x, 0 !== c ? -A / c : -A / (N * k))
                          : ((l = o.get(i, i + 1)),
                            (f = o.get(i + 1, i)),
                            (h =
                              (l * O - R * A) /
                              (S = (r[i] - _) * (r[i] - _) + e[i] * e[i])),
                            o.set(i, x, h),
                            o.set(
                              i + 1,
                              x,
                              Math.abs(l) > Math.abs(R)
                                ? (-A - c * h) / l
                                : (-O - f * h) / R,
                            )),
                        N * (h = Math.abs(o.get(i, x))) * h > 1)
                      )
                        for (s = i; s <= x; s++) o.set(s, x, o.get(s, x) / h);
                    }
                  else if (S < 0)
                    for (
                      u = x - 1,
                        Math.abs(o.get(x, x - 1)) > Math.abs(o.get(x - 1, x))
                          ? (o.set(x - 1, x - 1, S / o.get(x, x - 1)),
                            o.set(
                              x - 1,
                              x,
                              -(o.get(x, x) - _) / o.get(x, x - 1),
                            ))
                          : ((w = ct(
                              0,
                              -o.get(x - 1, x),
                              o.get(x - 1, x - 1) - _,
                              S,
                            )),
                            o.set(x - 1, x - 1, w[0]),
                            o.set(x - 1, x, w[1])),
                        o.set(x, x - 1, 0),
                        o.set(x, x, 1),
                        i = x - 2;
                      i >= 0;
                      i--
                    ) {
                      for (g = 0, v = 0, s = u; s <= x; s++)
                        (g += o.get(i, s) * o.get(s, x - 1)),
                          (v += o.get(i, s) * o.get(s, x));
                      if (((c = o.get(i, i) - _), e[i] < 0))
                        (R = c), (A = g), (O = v);
                      else if (
                        ((u = i),
                        0 === e[i]
                          ? ((w = ct(-g, -v, c, S)),
                            o.set(i, x - 1, w[0]),
                            o.set(i, x, w[1]))
                          : ((l = o.get(i, i + 1)),
                            (f = o.get(i + 1, i)),
                            (p = (r[i] - _) * (r[i] - _) + e[i] * e[i] - S * S),
                            (m = 2 * (r[i] - _) * S),
                            0 === p &&
                              0 === m &&
                              (p =
                                N *
                                k *
                                (Math.abs(c) +
                                  Math.abs(S) +
                                  Math.abs(l) +
                                  Math.abs(f) +
                                  Math.abs(R))),
                            (w = ct(
                              l * A - R * g + S * v,
                              l * O - R * v - S * g,
                              p,
                              m,
                            )),
                            o.set(i, x - 1, w[0]),
                            o.set(i, x, w[1]),
                            Math.abs(l) > Math.abs(R) + Math.abs(S)
                              ? (o.set(
                                  i + 1,
                                  x - 1,
                                  (-g - c * o.get(i, x - 1) + S * o.get(i, x)) /
                                    l,
                                ),
                                o.set(
                                  i + 1,
                                  x,
                                  (-v - c * o.get(i, x) - S * o.get(i, x - 1)) /
                                    l,
                                ))
                              : ((w = ct(
                                  -A - f * o.get(i, x - 1),
                                  -O - f * o.get(i, x),
                                  R,
                                  S,
                                )),
                                o.set(i + 1, x - 1, w[0]),
                                o.set(i + 1, x, w[1]))),
                        N *
                          (h = Math.max(
                            Math.abs(o.get(i, x - 1)),
                            Math.abs(o.get(i, x)),
                          )) *
                          h >
                          1)
                      )
                        for (s = i; s <= x; s++)
                          o.set(s, x - 1, o.get(s, x - 1) / h),
                            o.set(s, x, o.get(s, x) / h);
                    }
                for (i = 0; i < t; i++)
                  if (i < b || i > E)
                    for (s = i; s < t; s++) n.set(i, s, o.get(i, s));
                for (s = t - 1; s >= b; s--)
                  for (i = b; i <= E; i++) {
                    for (R = 0, a = b; a <= Math.min(s, E); a++)
                      R += n.get(i, a) * o.get(a, s);
                    n.set(i, s, R);
                  }
              })(a, h, d, u, l);
          }
          (this.n = a), (this.e = h), (this.d = d), (this.V = u);
        }
        return (
          w(t, [
            {
              key: 'realEigenvalues',
              get: function () {
                return Array.from(this.d);
              },
            },
            {
              key: 'imaginaryEigenvalues',
              get: function () {
                return Array.from(this.e);
              },
            },
            {
              key: 'eigenvectorMatrix',
              get: function () {
                return this.V;
              },
            },
            {
              key: 'diagonalMatrix',
              get: function () {
                var t,
                  e,
                  r = this.n,
                  n = this.e,
                  o = this.d,
                  i = new q(r, r);
                for (t = 0; t < r; t++) {
                  for (e = 0; e < r; e++) i.set(t, e, 0);
                  i.set(t, t, o[t]),
                    n[t] > 0
                      ? i.set(t, t + 1, n[t])
                      : n[t] < 0 && i.set(t, t - 1, n[t]);
                }
                return i;
              },
            },
          ]),
          t
        );
      })();
      function ct(t, e, r, n) {
        var o, i;
        return Math.abs(r) > Math.abs(n)
          ? [(t + (o = n / r) * e) / (i = r + o * n), (e - o * t) / i]
          : [((o = r / n) * t + e) / (i = n + o * r), (o * e - t) / i];
      }
      var lt = (function () {
          function t(e) {
            if ((y(this, t), !(e = rt.checkMatrix(e)).isSymmetric()))
              throw new Error('Matrix is not symmetric');
            var r,
              n,
              o,
              i = e,
              s = i.rows,
              a = new q(s, s),
              u = !0;
            for (n = 0; n < s; n++) {
              var d = 0;
              for (o = 0; o < n; o++) {
                var h = 0;
                for (r = 0; r < o; r++) h += a.get(o, r) * a.get(n, r);
                (h = (i.get(n, o) - h) / a.get(o, o)),
                  a.set(n, o, h),
                  (d += h * h);
              }
              for (
                u &= (d = i.get(n, n) - d) > 0,
                  a.set(n, n, Math.sqrt(Math.max(d, 0))),
                  o = n + 1;
                o < s;
                o++
              )
                a.set(n, o, 0);
            }
            (this.L = a), (this.positiveDefinite = Boolean(u));
          }
          return (
            w(t, [
              {
                key: 'isPositiveDefinite',
                value: function () {
                  return this.positiveDefinite;
                },
              },
              {
                key: 'solve',
                value: function (t) {
                  t = rt.checkMatrix(t);
                  var e = this.L,
                    r = e.rows;
                  if (t.rows !== r)
                    throw new Error('Matrix dimensions do not match');
                  if (!1 === this.isPositiveDefinite())
                    throw new Error('Matrix is not positive definite');
                  var n,
                    o,
                    i,
                    s = t.columns,
                    a = t.clone();
                  for (i = 0; i < r; i++)
                    for (o = 0; o < s; o++) {
                      for (n = 0; n < i; n++)
                        a.set(i, o, a.get(i, o) - a.get(n, o) * e.get(i, n));
                      a.set(i, o, a.get(i, o) / e.get(i, i));
                    }
                  for (i = r - 1; i >= 0; i--)
                    for (o = 0; o < s; o++) {
                      for (n = i + 1; n < r; n++)
                        a.set(i, o, a.get(i, o) - a.get(n, o) * e.get(n, i));
                      a.set(i, o, a.get(i, o) / e.get(i, i));
                    }
                  return a;
                },
              },
              {
                key: 'lowerTriangularMatrix',
                get: function () {
                  return this.L;
                },
              },
            ]),
            t
          );
        })(),
        ft = w(function t(e) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          y(this, t), (e = rt.checkMatrix(e));
          var n,
            o = r.Y,
            i = r.scaleScores,
            s = void 0 !== i && i,
            a = r.maxIterations,
            u = void 0 === a ? 1e3 : a,
            d = r.terminationCriteria,
            h = void 0 === d ? 1e-10 : d;
          if (o) {
            if (
              (o =
                x.isAnyArray(o) && 'number' == typeof o[0]
                  ? q.columnVector(o)
                  : rt.checkMatrix(o)).rows !== e.rows
            )
              throw new Error('Y should have the same number of rows as X');
            n = o.getColumnVector(0);
          } else n = e.getColumnVector(0);
          for (var c, l, f, g, v = 1, p = 0; p < u && v > h; p++)
            (f = (f = e
              .transpose()
              .mmul(n)
              .div(n.transpose().mmul(n).get(0, 0))).div(f.norm())),
              (c = e.mmul(f).div(f.transpose().mmul(f).get(0, 0))),
              p > 0 && (v = c.clone().sub(g).pow(2).sum()),
              (g = c.clone()),
              o
                ? ((l = (l = o
                    .transpose()
                    .mmul(c)
                    .div(c.transpose().mmul(c).get(0, 0))).div(l.norm())),
                  (n = o.mmul(l).div(l.transpose().mmul(l).get(0, 0))))
                : (n = c);
          if (o) {
            var m = e.transpose().mmul(c).div(c.transpose().mmul(c).get(0, 0));
            m = m.div(m.norm());
            var w = e.clone().sub(c.clone().mmul(m.transpose())),
              b = n.transpose().mmul(c).div(c.transpose().mmul(c).get(0, 0)),
              E = o
                .clone()
                .sub(c.clone().mulS(b.get(0, 0)).mmul(l.transpose()));
            (this.t = c),
              (this.p = m.transpose()),
              (this.w = f.transpose()),
              (this.q = l),
              (this.u = n),
              (this.s = c.transpose().mmul(c)),
              (this.xResidual = w),
              (this.yResidual = E),
              (this.betas = b);
          } else
            (this.w = f.transpose()),
              (this.s = c.transpose().mmul(c).sqrt()),
              (this.t = s ? c.clone().div(this.s.get(0, 0)) : c),
              (this.xResidual = e.sub(c.mmul(f.transpose())));
        });
      (e.XA = P),
        (e.a_ = lt),
        (e.yQ = lt),
        (e.Hs = B),
        (e.Ec = ht),
        (e.dx = ht),
        (e.LU = nt),
        (e.Rm = nt),
        (e.y3 = q),
        (e.qK = Y),
        (e.pb = W),
        (e.j = $),
        (e.sO = H),
        (e.BZ = J),
        (e.EK = K),
        (e.Db = Q),
        (e.Fx = X),
        (e.tU = tt),
        (e.Ym = ft),
        (e.rs = ft),
        (e.QR = it),
        (e.TB = it),
        (e.oH = st),
        (e.Sc = st),
        (e.BN = V),
        (e.it = et),
        (e.$r = rt),
        (e.QM = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : t,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          t = new q(t);
          var n = !1;
          if (
            ('object' !== m(e) || q.isMatrix(e) || x.isAnyArray(e)
              ? (e = new q(e))
              : ((r = e), (e = t), (n = !0)),
            t.rows !== e.rows)
          )
            throw new TypeError(
              'Both matrices must have the same number of rows',
            );
          var o = r,
            i = o.center,
            s = void 0 === i || i,
            a = o.scale,
            u = void 0 === a || a;
          s && (t.center('column'), n || e.center('column')),
            u && (t.scale('column'), n || e.scale('column'));
          for (
            var d = t.standardDeviation('column', { unbiased: !0 }),
              h = n ? d : e.standardDeviation('column', { unbiased: !0 }),
              c = t.transpose().mmul(e),
              l = 0;
            l < c.rows;
            l++
          )
            for (var f = 0; f < c.columns; f++)
              c.set(
                l,
                f,
                c.get(l, f) * (1 / (d[l] * h[f])) * (1 / (t.rows - 1)),
              );
          return c;
        }),
        (e.AV = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : t,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          t = new q(t);
          var n = !1;
          if (
            ('object' !== m(e) || q.isMatrix(e) || x.isAnyArray(e)
              ? (e = new q(e))
              : ((r = e), (e = t), (n = !0)),
            t.rows !== e.rows)
          )
            throw new TypeError(
              'Both matrices must have the same number of rows',
            );
          var o = r.center;
          (void 0 === o || o) &&
            ((t = t.center('column')), n || (e = e.center('column')));
          for (var i = t.transpose().mmul(e), s = 0; s < i.rows; s++)
            for (var a = 0; a < i.columns; a++)
              i.set(s, a, i.get(s, a) * (1 / (t.rows - 1)));
          return i;
        }),
        (e.GH = function t(e) {
          var r, n, o, i, s, a;
          if ((e = q.checkMatrix(e)).isSquare())
            return 0 === e.columns
              ? 1
              : 2 === e.columns
                ? ((r = e.get(0, 0)),
                  (n = e.get(0, 1)),
                  (o = e.get(1, 0)),
                  r * e.get(1, 1) - n * o)
                : 3 === e.columns
                  ? ((i = new Q(e, [1, 2], [1, 2])),
                    (s = new Q(e, [1, 2], [0, 2])),
                    (a = new Q(e, [1, 2], [0, 1])),
                    (r = e.get(0, 0)),
                    (n = e.get(0, 1)),
                    (o = e.get(0, 2)),
                    r * t(i) - n * t(s) + o * t(a))
                  : new nt(e).determinant;
          throw Error('determinant can only be calculated for a square matrix');
        }),
        (e.SO = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (
            (t = rt.checkMatrix(t)),
            e ? new st(t).inverse() : at(t, q.eye(t.rows))
          );
        }),
        (e.uZ = function (t) {
          for (
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = e.thresholdValue,
              n = void 0 === r ? 1e-9 : r,
              o = e.thresholdError,
              i = void 0 === o ? 1e-9 : o,
              s = (t = q.checkMatrix(t)).rows,
              a = new q(s, s),
              u = 0;
            u < s;
            u++
          ) {
            var d = q.columnVector(t.getRow(u)),
              h = t.subMatrixRow(ut(s, u)).transpose(),
              c = new st(h).solve(d),
              l = q.sub(d, h.mmul(c)).abs().max();
            a.setRow(u, dt(l, c, u, n, i));
          }
          return a;
        }),
        (e.yU = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Number.EPSILON;
          if ((t = q.checkMatrix(t)).isEmpty()) return t.transpose();
          for (
            var r = new st(t, { autoTranspose: !0 }),
              n = r.leftSingularVectors,
              o = r.rightSingularVectors,
              i = r.diagonal,
              s = 0;
            s < i.length;
            s++
          )
            Math.abs(i[s]) > e ? (i[s] = 1 / i[s]) : (i[s] = 0);
          return o.mmul(q.diag(i).mmul(n.transpose()));
        }),
        (e.F1 = at),
        (e.re = function (t, e) {
          if (x.isAnyArray(t))
            return t[0] && x.isAnyArray(t[0]) ? new rt(t) : new et(t, e);
          throw new Error('the argument is not an array');
        });
    },
    70681: function (t, e, r) {
      t.exports = {
        graphlib: r(70574),
        layout: r(98123),
        debug: r(27570),
        util: { time: r(11138).time, notime: r(11138).notime },
        version: r(88177),
      };
    },
    92188: function (t, e, r) {
      'use strict';
      var n = r(38436),
        o = r(74079);
      t.exports = {
        run: function (t) {
          var e =
            'greedy' === t.graph().acyclicer
              ? o(
                  t,
                  (function (t) {
                    return function (e) {
                      return t.edge(e).weight;
                    };
                  })(t),
                )
              : (function (t) {
                  var e = [],
                    r = {},
                    o = {};
                  function i(s) {
                    n.has(o, s) ||
                      ((o[s] = !0),
                      (r[s] = !0),
                      n.forEach(t.outEdges(s), function (t) {
                        n.has(r, t.w) ? e.push(t) : i(t.w);
                      }),
                      delete r[s]);
                  }
                  return n.forEach(t.nodes(), i), e;
                })(t);
          n.forEach(e, function (e) {
            var r = t.edge(e);
            t.removeEdge(e),
              (r.forwardName = e.name),
              (r.reversed = !0),
              t.setEdge(e.w, e.v, r, n.uniqueId('rev'));
          });
        },
        undo: function (t) {
          n.forEach(t.edges(), function (e) {
            var r = t.edge(e);
            if (r.reversed) {
              t.removeEdge(e);
              var n = r.forwardName;
              delete r.reversed,
                delete r.forwardName,
                t.setEdge(e.w, e.v, r, n);
            }
          });
        },
      };
    },
    61133: function (t, e, r) {
      var n = r(38436),
        o = r(11138);
      function i(t, e, r, n, i, s) {
        var a = { width: 0, height: 0, rank: s, borderType: e },
          u = i[e][s - 1],
          d = o.addDummyNode(t, 'border', a, r);
        (i[e][s] = d), t.setParent(d, n), u && t.setEdge(u, d, { weight: 1 });
      }
      t.exports = function (t) {
        n.forEach(t.children(), function e(r) {
          var o = t.children(r),
            s = t.node(r);
          if ((o.length && n.forEach(o, e), n.has(s, 'minRank'))) {
            (s.borderLeft = []), (s.borderRight = []);
            for (var a = s.minRank, u = s.maxRank + 1; a < u; ++a)
              i(t, 'borderLeft', '_bl', r, s, a),
                i(t, 'borderRight', '_br', r, s, a);
          }
        });
      };
    },
    53258: function (t, e, r) {
      'use strict';
      var n = r(38436);
      function o(t) {
        n.forEach(t.nodes(), function (e) {
          i(t.node(e));
        }),
          n.forEach(t.edges(), function (e) {
            i(t.edge(e));
          });
      }
      function i(t) {
        var e = t.width;
        (t.width = t.height), (t.height = e);
      }
      function s(t) {
        t.y = -t.y;
      }
      function a(t) {
        var e = t.x;
        (t.x = t.y), (t.y = e);
      }
      t.exports = {
        adjust: function (t) {
          var e = t.graph().rankdir.toLowerCase();
          ('lr' !== e && 'rl' !== e) || o(t);
        },
        undo: function (t) {
          var e = t.graph().rankdir.toLowerCase();
          ('bt' !== e && 'rl' !== e) ||
            (function (t) {
              n.forEach(t.nodes(), function (e) {
                s(t.node(e));
              }),
                n.forEach(t.edges(), function (e) {
                  var r = t.edge(e);
                  n.forEach(r.points, s), n.has(r, 'y') && s(r);
                });
            })(t);
          ('lr' !== e && 'rl' !== e) ||
            (!(function (t) {
              n.forEach(t.nodes(), function (e) {
                a(t.node(e));
              }),
                n.forEach(t.edges(), function (e) {
                  var r = t.edge(e);
                  n.forEach(r.points, a), n.has(r, 'x') && a(r);
                });
            })(t),
            o(t));
        },
      };
    },
    77822: function (t) {
      function e() {
        var t = {};
        (t._next = t._prev = t), (this._sentinel = t);
      }
      function r(t) {
        (t._prev._next = t._next),
          (t._next._prev = t._prev),
          delete t._next,
          delete t._prev;
      }
      function n(t, e) {
        if ('_next' !== t && '_prev' !== t) return e;
      }
      (t.exports = e),
        (e.prototype.dequeue = function () {
          var t = this._sentinel,
            e = t._prev;
          if (e !== t) return r(e), e;
        }),
        (e.prototype.enqueue = function (t) {
          var e = this._sentinel;
          t._prev && t._next && r(t),
            (t._next = e._next),
            (e._next._prev = t),
            (e._next = t),
            (t._prev = e);
        }),
        (e.prototype.toString = function () {
          for (var t = [], e = this._sentinel, r = e._prev; r !== e; )
            t.push(JSON.stringify(r, n)), (r = r._prev);
          return '[' + t.join(', ') + ']';
        });
    },
    27570: function (t, e, r) {
      var n = r(38436),
        o = r(11138),
        i = r(70574).Graph;
      t.exports = {
        debugOrdering: function (t) {
          var e = o.buildLayerMatrix(t),
            r = new i({ compound: !0, multigraph: !0 }).setGraph({});
          return (
            n.forEach(t.nodes(), function (e) {
              r.setNode(e, { label: e }),
                r.setParent(e, 'layer' + t.node(e).rank);
            }),
            n.forEach(t.edges(), function (t) {
              r.setEdge(t.v, t.w, {}, t.name);
            }),
            n.forEach(e, function (t, e) {
              var o = 'layer' + e;
              r.setNode(o, { rank: 'same' }),
                n.reduce(t, function (t, e) {
                  return r.setEdge(t, e, { style: 'invis' }), e;
                });
            }),
            r
          );
        },
      };
    },
    70574: function (t, e, r) {
      var n;
      try {
        n = r(28282);
      } catch (t) {}
      n || (n = window.graphlib), (t.exports = n);
    },
    74079: function (t, e, r) {
      var n = r(38436),
        o = r(70574).Graph,
        i = r(77822);
      t.exports = function (t, e) {
        if (t.nodeCount() <= 1) return [];
        var r = (function (t, e) {
            var r = new o(),
              s = 0,
              a = 0;
            n.forEach(t.nodes(), function (t) {
              r.setNode(t, { v: t, in: 0, out: 0 });
            }),
              n.forEach(t.edges(), function (t) {
                var n = r.edge(t.v, t.w) || 0,
                  o = e(t),
                  i = n + o;
                r.setEdge(t.v, t.w, i),
                  (a = Math.max(a, (r.node(t.v).out += o))),
                  (s = Math.max(s, (r.node(t.w).in += o)));
              });
            var d = n.range(a + s + 3).map(function () {
                return new i();
              }),
              h = s + 1;
            return (
              n.forEach(r.nodes(), function (t) {
                u(d, h, r.node(t));
              }),
              { graph: r, buckets: d, zeroIdx: h }
            );
          })(t, e || s),
          d = (function (t, e, r) {
            var n,
              o = [],
              i = e[e.length - 1],
              s = e[0];
            for (; t.nodeCount(); ) {
              for (; (n = s.dequeue()); ) a(t, e, r, n);
              for (; (n = i.dequeue()); ) a(t, e, r, n);
              if (t.nodeCount())
                for (var u = e.length - 2; u > 0; --u)
                  if ((n = e[u].dequeue())) {
                    o = o.concat(a(t, e, r, n, !0));
                    break;
                  }
            }
            return o;
          })(r.graph, r.buckets, r.zeroIdx);
        return n.flatten(
          n.map(d, function (e) {
            return t.outEdges(e.v, e.w);
          }),
          !0,
        );
      };
      var s = n.constant(1);
      function a(t, e, r, o, i) {
        var s = i ? [] : void 0;
        return (
          n.forEach(t.inEdges(o.v), function (n) {
            var o = t.edge(n),
              a = t.node(n.v);
            i && s.push({ v: n.v, w: n.w }), (a.out -= o), u(e, r, a);
          }),
          n.forEach(t.outEdges(o.v), function (n) {
            var o = t.edge(n),
              i = n.w,
              s = t.node(i);
            (s.in -= o), u(e, r, s);
          }),
          t.removeNode(o.v),
          s
        );
      }
      function u(t, e, r) {
        r.out
          ? r.in
            ? t[r.out - r.in + e].enqueue(r)
            : t[t.length - 1].enqueue(r)
          : t[0].enqueue(r);
      }
    },
    98123: function (t, e, r) {
      'use strict';
      var n = r(38436),
        o = r(92188),
        i = r(45995),
        s = r(78093),
        a = r(11138).normalizeRanks,
        u = r(24219),
        d = r(11138).removeEmptyRanks,
        h = r(72981),
        c = r(61133),
        l = r(53258),
        f = r(53408),
        g = r(17873),
        v = r(11138),
        p = r(70574).Graph;
      t.exports = function (t, e) {
        var r = e && e.debugTiming ? v.time : v.notime;
        r('layout', function () {
          var e = r('  buildLayoutGraph', function () {
            return (function (t) {
              var e = new p({ multigraph: !0, compound: !0 }),
                r = _(t.graph());
              return (
                e.setGraph(n.merge({}, y, k(r, m), n.pick(r, w))),
                n.forEach(t.nodes(), function (r) {
                  var o = _(t.node(r));
                  e.setNode(r, n.defaults(k(o, x), b)),
                    e.setParent(r, t.parent(r));
                }),
                n.forEach(t.edges(), function (r) {
                  var o = _(t.edge(r));
                  e.setEdge(r, n.merge({}, N, k(o, E), n.pick(o, M)));
                }),
                e
              );
            })(t);
          });
          r('  runLayout', function () {
            !(function (t, e) {
              e('    makeSpaceForEdgeLabels', function () {
                !(function (t) {
                  var e = t.graph();
                  (e.ranksep /= 2),
                    n.forEach(t.edges(), function (r) {
                      var n = t.edge(r);
                      (n.minlen *= 2),
                        'c' !== n.labelpos.toLowerCase() &&
                          ('TB' === e.rankdir || 'BT' === e.rankdir
                            ? (n.width += n.labeloffset)
                            : (n.height += n.labeloffset));
                    });
                })(t);
              }),
                e('    removeSelfEdges', function () {
                  !(function (t) {
                    n.forEach(t.edges(), function (e) {
                      if (e.v === e.w) {
                        var r = t.node(e.v);
                        r.selfEdges || (r.selfEdges = []),
                          r.selfEdges.push({ e: e, label: t.edge(e) }),
                          t.removeEdge(e);
                      }
                    });
                  })(t);
                }),
                e('    acyclic', function () {
                  o.run(t);
                }),
                e('    nestingGraph.run', function () {
                  h.run(t);
                }),
                e('    rank', function () {
                  s(v.asNonCompoundGraph(t));
                }),
                e('    injectEdgeLabelProxies', function () {
                  !(function (t) {
                    n.forEach(t.edges(), function (e) {
                      var r = t.edge(e);
                      if (r.width && r.height) {
                        var n = t.node(e.v),
                          o = {
                            rank: (t.node(e.w).rank - n.rank) / 2 + n.rank,
                            e: e,
                          };
                        v.addDummyNode(t, 'edge-proxy', o, '_ep');
                      }
                    });
                  })(t);
                }),
                e('    removeEmptyRanks', function () {
                  d(t);
                }),
                e('    nestingGraph.cleanup', function () {
                  h.cleanup(t);
                }),
                e('    normalizeRanks', function () {
                  a(t);
                }),
                e('    assignRankMinMax', function () {
                  !(function (t) {
                    var e = 0;
                    n.forEach(t.nodes(), function (r) {
                      var o = t.node(r);
                      o.borderTop &&
                        ((o.minRank = t.node(o.borderTop).rank),
                        (o.maxRank = t.node(o.borderBottom).rank),
                        (e = n.max(e, o.maxRank)));
                    }),
                      (t.graph().maxRank = e);
                  })(t);
                }),
                e('    removeEdgeLabelProxies', function () {
                  !(function (t) {
                    n.forEach(t.nodes(), function (e) {
                      var r = t.node(e);
                      'edge-proxy' === r.dummy &&
                        ((t.edge(r.e).labelRank = r.rank), t.removeNode(e));
                    });
                  })(t);
                }),
                e('    normalize.run', function () {
                  i.run(t);
                }),
                e('    parentDummyChains', function () {
                  u(t);
                }),
                e('    addBorderSegments', function () {
                  c(t);
                }),
                e('    order', function () {
                  f(t);
                }),
                e('    insertSelfEdges', function () {
                  !(function (t) {
                    var e = v.buildLayerMatrix(t);
                    n.forEach(e, function (e) {
                      var r = 0;
                      n.forEach(e, function (e, o) {
                        var i = t.node(e);
                        (i.order = o + r),
                          n.forEach(i.selfEdges, function (e) {
                            v.addDummyNode(
                              t,
                              'selfedge',
                              {
                                width: e.label.width,
                                height: e.label.height,
                                rank: i.rank,
                                order: o + ++r,
                                e: e.e,
                                label: e.label,
                              },
                              '_se',
                            );
                          }),
                          delete i.selfEdges;
                      });
                    });
                  })(t);
                }),
                e('    adjustCoordinateSystem', function () {
                  l.adjust(t);
                }),
                e('    position', function () {
                  g(t);
                }),
                e('    positionSelfEdges', function () {
                  !(function (t) {
                    n.forEach(t.nodes(), function (e) {
                      var r = t.node(e);
                      if ('selfedge' === r.dummy) {
                        var n = t.node(r.e.v),
                          o = n.x + n.width / 2,
                          i = n.y,
                          s = r.x - o,
                          a = n.height / 2;
                        t.setEdge(r.e, r.label),
                          t.removeNode(e),
                          (r.label.points = [
                            { x: o + (2 * s) / 3, y: i - a },
                            { x: o + (5 * s) / 6, y: i - a },
                            { x: o + s, y: i },
                            { x: o + (5 * s) / 6, y: i + a },
                            { x: o + (2 * s) / 3, y: i + a },
                          ]),
                          (r.label.x = r.x),
                          (r.label.y = r.y);
                      }
                    });
                  })(t);
                }),
                e('    removeBorderNodes', function () {
                  !(function (t) {
                    n.forEach(t.nodes(), function (e) {
                      if (t.children(e).length) {
                        var r = t.node(e),
                          o = t.node(r.borderTop),
                          i = t.node(r.borderBottom),
                          s = t.node(n.last(r.borderLeft)),
                          a = t.node(n.last(r.borderRight));
                        (r.width = Math.abs(a.x - s.x)),
                          (r.height = Math.abs(i.y - o.y)),
                          (r.x = s.x + r.width / 2),
                          (r.y = o.y + r.height / 2);
                      }
                    }),
                      n.forEach(t.nodes(), function (e) {
                        'border' === t.node(e).dummy && t.removeNode(e);
                      });
                  })(t);
                }),
                e('    normalize.undo', function () {
                  i.undo(t);
                }),
                e('    fixupEdgeLabelCoords', function () {
                  !(function (t) {
                    n.forEach(t.edges(), function (e) {
                      var r = t.edge(e);
                      if (n.has(r, 'x'))
                        switch (
                          (('l' !== r.labelpos && 'r' !== r.labelpos) ||
                            (r.width -= r.labeloffset),
                          r.labelpos)
                        ) {
                          case 'l':
                            r.x -= r.width / 2 + r.labeloffset;
                            break;
                          case 'r':
                            r.x += r.width / 2 + r.labeloffset;
                        }
                    });
                  })(t);
                }),
                e('    undoCoordinateSystem', function () {
                  l.undo(t);
                }),
                e('    translateGraph', function () {
                  !(function (t) {
                    var e = Number.POSITIVE_INFINITY,
                      r = 0,
                      o = Number.POSITIVE_INFINITY,
                      i = 0,
                      s = t.graph(),
                      a = s.marginx || 0,
                      u = s.marginy || 0;
                    function d(t) {
                      var n = t.x,
                        s = t.y,
                        a = t.width,
                        u = t.height;
                      (e = Math.min(e, n - a / 2)),
                        (r = Math.max(r, n + a / 2)),
                        (o = Math.min(o, s - u / 2)),
                        (i = Math.max(i, s + u / 2));
                    }
                    n.forEach(t.nodes(), function (e) {
                      d(t.node(e));
                    }),
                      n.forEach(t.edges(), function (e) {
                        var r = t.edge(e);
                        n.has(r, 'x') && d(r);
                      }),
                      (e -= a),
                      (o -= u),
                      n.forEach(t.nodes(), function (r) {
                        var n = t.node(r);
                        (n.x -= e), (n.y -= o);
                      }),
                      n.forEach(t.edges(), function (r) {
                        var i = t.edge(r);
                        n.forEach(i.points, function (t) {
                          (t.x -= e), (t.y -= o);
                        }),
                          n.has(i, 'x') && (i.x -= e),
                          n.has(i, 'y') && (i.y -= o);
                      }),
                      (s.width = r - e + a),
                      (s.height = i - o + u);
                  })(t);
                }),
                e('    assignNodeIntersects', function () {
                  !(function (t) {
                    n.forEach(t.edges(), function (e) {
                      var r,
                        n,
                        o = t.edge(e),
                        i = t.node(e.v),
                        s = t.node(e.w);
                      o.points
                        ? ((r = o.points[0]),
                          (n = o.points[o.points.length - 1]))
                        : ((o.points = []), (r = s), (n = i)),
                        o.points.unshift(v.intersectRect(i, r)),
                        o.points.push(v.intersectRect(s, n));
                    });
                  })(t);
                }),
                e('    reversePoints', function () {
                  !(function (t) {
                    n.forEach(t.edges(), function (e) {
                      var r = t.edge(e);
                      r.reversed && r.points.reverse();
                    });
                  })(t);
                }),
                e('    acyclic.undo', function () {
                  o.undo(t);
                });
            })(e, r);
          }),
            r('  updateInputGraph', function () {
              !(function (t, e) {
                n.forEach(t.nodes(), function (r) {
                  var n = t.node(r),
                    o = e.node(r);
                  n &&
                    ((n.x = o.x),
                    (n.y = o.y),
                    e.children(r).length &&
                      ((n.width = o.width), (n.height = o.height)));
                }),
                  n.forEach(t.edges(), function (r) {
                    var o = t.edge(r),
                      i = e.edge(r);
                    (o.points = i.points),
                      n.has(i, 'x') && ((o.x = i.x), (o.y = i.y));
                  }),
                  (t.graph().width = e.graph().width),
                  (t.graph().height = e.graph().height);
              })(t, e);
            });
        });
      };
      var m = ['nodesep', 'edgesep', 'ranksep', 'marginx', 'marginy'],
        y = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: 'tb' },
        w = ['acyclicer', 'ranker', 'rankdir', 'align'],
        x = ['width', 'height'],
        b = { width: 0, height: 0 },
        E = ['minlen', 'weight', 'width', 'height', 'labeloffset'],
        N = {
          minlen: 1,
          weight: 1,
          width: 0,
          height: 0,
          labeloffset: 10,
          labelpos: 'r',
        },
        M = ['labelpos'];
      function k(t, e) {
        return n.mapValues(n.pick(t, e), Number);
      }
      function _(t) {
        var e = {};
        return (
          n.forEach(t, function (t, r) {
            e[r.toLowerCase()] = t;
          }),
          e
        );
      }
    },
    38436: function (t, e, r) {
      var n;
      try {
        n = {
          cloneDeep: r(50361),
          constant: r(75703),
          defaults: r(91747),
          each: r(66073),
          filter: r(63105),
          find: r(13311),
          flatten: r(85564),
          forEach: r(84486),
          forIn: r(62620),
          has: r(18721),
          isUndefined: r(52353),
          last: r(10928),
          map: r(35161),
          mapValues: r(66604),
          max: r(6162),
          merge: r(82492),
          min: r(53632),
          minBy: r(22762),
          now: r(7771),
          pick: r(78718),
          range: r(96026),
          reduce: r(54061),
          sortBy: r(89734),
          uniqueId: r(60835),
          values: r(52628),
          zipObject: r(7287),
        };
      } catch (t) {}
      n || (n = window._), (t.exports = n);
    },
    72981: function (t, e, r) {
      var n = r(38436),
        o = r(11138);
      function i(t, e, r, s, a, u, d) {
        var h = t.children(d);
        if (h.length) {
          var c = o.addBorderNode(t, '_bt'),
            l = o.addBorderNode(t, '_bb'),
            f = t.node(d);
          t.setParent(c, d),
            (f.borderTop = c),
            t.setParent(l, d),
            (f.borderBottom = l),
            n.forEach(h, function (n) {
              i(t, e, r, s, a, u, n);
              var o = t.node(n),
                h = o.borderTop ? o.borderTop : n,
                f = o.borderBottom ? o.borderBottom : n,
                g = o.borderTop ? s : 2 * s,
                v = h !== f ? 1 : a - u[d] + 1;
              t.setEdge(c, h, { weight: g, minlen: v, nestingEdge: !0 }),
                t.setEdge(f, l, { weight: g, minlen: v, nestingEdge: !0 });
            }),
            t.parent(d) || t.setEdge(e, c, { weight: 0, minlen: a + u[d] });
        } else d !== e && t.setEdge(e, d, { weight: 0, minlen: r });
      }
      t.exports = {
        run: function (t) {
          var e = o.addDummyNode(t, 'root', {}, '_root'),
            r = (function (t) {
              var e = {};
              function r(o, i) {
                var s = t.children(o);
                s &&
                  s.length &&
                  n.forEach(s, function (t) {
                    r(t, i + 1);
                  }),
                  (e[o] = i);
              }
              return (
                n.forEach(t.children(), function (t) {
                  r(t, 1);
                }),
                e
              );
            })(t),
            s = n.max(n.values(r)) - 1,
            a = 2 * s + 1;
          (t.graph().nestingRoot = e),
            n.forEach(t.edges(), function (e) {
              t.edge(e).minlen *= a;
            });
          var u =
            (function (t) {
              return n.reduce(
                t.edges(),
                function (e, r) {
                  return e + t.edge(r).weight;
                },
                0,
              );
            })(t) + 1;
          n.forEach(t.children(), function (n) {
            i(t, e, a, u, s, r, n);
          }),
            (t.graph().nodeRankFactor = a);
        },
        cleanup: function (t) {
          var e = t.graph();
          t.removeNode(e.nestingRoot),
            delete e.nestingRoot,
            n.forEach(t.edges(), function (e) {
              t.edge(e).nestingEdge && t.removeEdge(e);
            });
        },
      };
    },
    45995: function (t, e, r) {
      'use strict';
      var n = r(38436),
        o = r(11138);
      t.exports = {
        run: function (t) {
          (t.graph().dummyChains = []),
            n.forEach(t.edges(), function (e) {
              !(function (t, e) {
                var r,
                  n,
                  i,
                  s = e.v,
                  a = t.node(s).rank,
                  u = e.w,
                  d = t.node(u).rank,
                  h = e.name,
                  c = t.edge(e),
                  l = c.labelRank;
                if (d === a + 1) return;
                for (t.removeEdge(e), i = 0, ++a; a < d; ++i, ++a)
                  (c.points = []),
                    (n = {
                      width: 0,
                      height: 0,
                      edgeLabel: c,
                      edgeObj: e,
                      rank: a,
                    }),
                    (r = o.addDummyNode(t, 'edge', n, '_d')),
                    a === l &&
                      ((n.width = c.width),
                      (n.height = c.height),
                      (n.dummy = 'edge-label'),
                      (n.labelpos = c.labelpos)),
                    t.setEdge(s, r, { weight: c.weight }, h),
                    0 === i && t.graph().dummyChains.push(r),
                    (s = r);
                t.setEdge(s, u, { weight: c.weight }, h);
              })(t, e);
            });
        },
        undo: function (t) {
          n.forEach(t.graph().dummyChains, function (e) {
            var r,
              n = t.node(e),
              o = n.edgeLabel;
            for (t.setEdge(n.edgeObj, o); n.dummy; )
              (r = t.successors(e)[0]),
                t.removeNode(e),
                o.points.push({ x: n.x, y: n.y }),
                'edge-label' === n.dummy &&
                  ((o.x = n.x),
                  (o.y = n.y),
                  (o.width = n.width),
                  (o.height = n.height)),
                (e = r),
                (n = t.node(e));
          });
        },
      };
    },
    55093: function (t, e, r) {
      var n = r(38436);
      t.exports = function (t, e, r) {
        var o,
          i = {};
        n.forEach(r, function (r) {
          for (var n, s, a = t.parent(r); a; ) {
            if (
              ((n = t.parent(a))
                ? ((s = i[n]), (i[n] = a))
                : ((s = o), (o = a)),
              s && s !== a)
            )
              return void e.setEdge(s, a);
            a = n;
          }
        });
      };
    },
    35439: function (t, e, r) {
      var n = r(38436);
      t.exports = function (t, e) {
        return n.map(e, function (e) {
          var r = t.inEdges(e);
          if (r.length) {
            var o = n.reduce(
              r,
              function (e, r) {
                var n = t.edge(r),
                  o = t.node(r.v);
                return {
                  sum: e.sum + n.weight * o.order,
                  weight: e.weight + n.weight,
                };
              },
              { sum: 0, weight: 0 },
            );
            return { v: e, barycenter: o.sum / o.weight, weight: o.weight };
          }
          return { v: e };
        });
      };
    },
    23128: function (t, e, r) {
      var n = r(38436),
        o = r(70574).Graph;
      t.exports = function (t, e, r) {
        var i = (function (t) {
            var e;
            for (; t.hasNode((e = n.uniqueId('_root'))); );
            return e;
          })(t),
          s = new o({ compound: !0 })
            .setGraph({ root: i })
            .setDefaultNodeLabel(function (e) {
              return t.node(e);
            });
        return (
          n.forEach(t.nodes(), function (o) {
            var a = t.node(o),
              u = t.parent(o);
            (a.rank === e || (a.minRank <= e && e <= a.maxRank)) &&
              (s.setNode(o),
              s.setParent(o, u || i),
              n.forEach(t[r](o), function (e) {
                var r = e.v === o ? e.w : e.v,
                  i = s.edge(r, o),
                  a = n.isUndefined(i) ? 0 : i.weight;
                s.setEdge(r, o, { weight: t.edge(e).weight + a });
              }),
              n.has(a, 'minRank') &&
                s.setNode(o, {
                  borderLeft: a.borderLeft[e],
                  borderRight: a.borderRight[e],
                }));
          }),
          s
        );
      };
    },
    56630: function (t, e, r) {
      'use strict';
      var n = r(38436);
      function o(t, e, r) {
        for (
          var o = n.zipObject(
              r,
              n.map(r, function (t, e) {
                return e;
              }),
            ),
            i = n.flatten(
              n.map(e, function (e) {
                return n.sortBy(
                  n.map(t.outEdges(e), function (e) {
                    return { pos: o[e.w], weight: t.edge(e).weight };
                  }),
                  'pos',
                );
              }),
              !0,
            ),
            s = 1;
          s < r.length;

        )
          s <<= 1;
        var a = 2 * s - 1;
        s -= 1;
        var u = n.map(new Array(a), function () {
            return 0;
          }),
          d = 0;
        return (
          n.forEach(
            i.forEach(function (t) {
              var e = t.pos + s;
              u[e] += t.weight;
              for (var r = 0; e > 0; )
                e % 2 && (r += u[e + 1]), (u[(e = (e - 1) >> 1)] += t.weight);
              d += t.weight * r;
            }),
          ),
          d
        );
      }
      t.exports = function (t, e) {
        for (var r = 0, n = 1; n < e.length; ++n) r += o(t, e[n - 1], e[n]);
        return r;
      };
    },
    53408: function (t, e, r) {
      'use strict';
      var n = r(38436),
        o = r(2588),
        i = r(56630),
        s = r(61026),
        a = r(23128),
        u = r(55093),
        d = r(70574).Graph,
        h = r(11138);
      function c(t, e, r) {
        return n.map(e, function (e) {
          return a(t, e, r);
        });
      }
      function l(t, e) {
        var r = new d();
        n.forEach(t, function (t) {
          var o = t.graph().root,
            i = s(t, o, r, e);
          n.forEach(i.vs, function (e, r) {
            t.node(e).order = r;
          }),
            u(t, r, i.vs);
        });
      }
      function f(t, e) {
        n.forEach(e, function (e) {
          n.forEach(e, function (e, r) {
            t.node(e).order = r;
          });
        });
      }
      t.exports = function (t) {
        var e = h.maxRank(t),
          r = c(t, n.range(1, e + 1), 'inEdges'),
          s = c(t, n.range(e - 1, -1, -1), 'outEdges'),
          a = o(t);
        f(t, a);
        for (
          var u, d = Number.POSITIVE_INFINITY, g = 0, v = 0;
          v < 4;
          ++g, ++v
        ) {
          l(g % 2 ? r : s, g % 4 >= 2), (a = h.buildLayerMatrix(t));
          var p = i(t, a);
          p < d && ((v = 0), (u = n.cloneDeep(a)), (d = p));
        }
        f(t, u);
      };
    },
    2588: function (t, e, r) {
      'use strict';
      var n = r(38436);
      t.exports = function (t) {
        var e = {},
          r = n.filter(t.nodes(), function (e) {
            return !t.children(e).length;
          }),
          o = n.max(
            n.map(r, function (e) {
              return t.node(e).rank;
            }),
          ),
          i = n.map(n.range(o + 1), function () {
            return [];
          });
        var s = n.sortBy(r, function (e) {
          return t.node(e).rank;
        });
        return (
          n.forEach(s, function r(o) {
            if (n.has(e, o)) return;
            e[o] = !0;
            var s = t.node(o);
            i[s.rank].push(o), n.forEach(t.successors(o), r);
          }),
          i
        );
      };
    },
    83678: function (t, e, r) {
      'use strict';
      var n = r(38436);
      t.exports = function (t, e) {
        var r = {};
        return (
          n.forEach(t, function (t, e) {
            var o = (r[t.v] = {
              indegree: 0,
              in: [],
              out: [],
              vs: [t.v],
              i: e,
            });
            n.isUndefined(t.barycenter) ||
              ((o.barycenter = t.barycenter), (o.weight = t.weight));
          }),
          n.forEach(e.edges(), function (t) {
            var e = r[t.v],
              o = r[t.w];
            n.isUndefined(e) ||
              n.isUndefined(o) ||
              (o.indegree++, e.out.push(r[t.w]));
          }),
          (function (t) {
            var e = [];
            function r(t) {
              return function (e) {
                e.merged ||
                  ((n.isUndefined(e.barycenter) ||
                    n.isUndefined(t.barycenter) ||
                    e.barycenter >= t.barycenter) &&
                    (function (t, e) {
                      var r = 0,
                        n = 0;
                      t.weight &&
                        ((r += t.barycenter * t.weight), (n += t.weight));
                      e.weight &&
                        ((r += e.barycenter * e.weight), (n += e.weight));
                      (t.vs = e.vs.concat(t.vs)),
                        (t.barycenter = r / n),
                        (t.weight = n),
                        (t.i = Math.min(e.i, t.i)),
                        (e.merged = !0);
                    })(t, e));
              };
            }
            function o(e) {
              return function (r) {
                r.in.push(e), 0 == --r.indegree && t.push(r);
              };
            }
            for (; t.length; ) {
              var i = t.pop();
              e.push(i),
                n.forEach(i.in.reverse(), r(i)),
                n.forEach(i.out, o(i));
            }
            return n.map(
              n.filter(e, function (t) {
                return !t.merged;
              }),
              function (t) {
                return n.pick(t, ['vs', 'i', 'barycenter', 'weight']);
              },
            );
          })(
            n.filter(r, function (t) {
              return !t.indegree;
            }),
          )
        );
      };
    },
    61026: function (t, e, r) {
      var n = r(38436),
        o = r(35439),
        i = r(83678),
        s = r(87304);
      t.exports = function t(e, r, a, u) {
        var d = e.children(r),
          h = e.node(r),
          c = h ? h.borderLeft : void 0,
          l = h ? h.borderRight : void 0,
          f = {};
        c &&
          (d = n.filter(d, function (t) {
            return t !== c && t !== l;
          }));
        var g = o(e, d);
        n.forEach(g, function (r) {
          if (e.children(r.v).length) {
            var o = t(e, r.v, a, u);
            (f[r.v] = o),
              n.has(o, 'barycenter') &&
                ((i = r),
                (s = o),
                n.isUndefined(i.barycenter)
                  ? ((i.barycenter = s.barycenter), (i.weight = s.weight))
                  : ((i.barycenter =
                      (i.barycenter * i.weight + s.barycenter * s.weight) /
                      (i.weight + s.weight)),
                    (i.weight += s.weight)));
          }
          var i, s;
        });
        var v = i(g, a);
        !(function (t, e) {
          n.forEach(t, function (t) {
            t.vs = n.flatten(
              t.vs.map(function (t) {
                return e[t] ? e[t].vs : t;
              }),
              !0,
            );
          });
        })(v, f);
        var p = s(v, u);
        if (
          c &&
          ((p.vs = n.flatten([c, p.vs, l], !0)), e.predecessors(c).length)
        ) {
          var m = e.node(e.predecessors(c)[0]),
            y = e.node(e.predecessors(l)[0]);
          n.has(p, 'barycenter') || ((p.barycenter = 0), (p.weight = 0)),
            (p.barycenter =
              (p.barycenter * p.weight + m.order + y.order) / (p.weight + 2)),
            (p.weight += 2);
        }
        return p;
      };
    },
    87304: function (t, e, r) {
      var n = r(38436),
        o = r(11138);
      function i(t, e, r) {
        for (var o; e.length && (o = n.last(e)).i <= r; )
          e.pop(), t.push(o.vs), r++;
        return r;
      }
      t.exports = function (t, e) {
        var r = o.partition(t, function (t) {
            return n.has(t, 'barycenter');
          }),
          s = r.lhs,
          a = n.sortBy(r.rhs, function (t) {
            return -t.i;
          }),
          u = [],
          d = 0,
          h = 0,
          c = 0;
        s.sort(
          ((l = !!e),
          function (t, e) {
            return t.barycenter < e.barycenter
              ? -1
              : t.barycenter > e.barycenter
                ? 1
                : l
                  ? e.i - t.i
                  : t.i - e.i;
          }),
        ),
          (c = i(u, a, c)),
          n.forEach(s, function (t) {
            (c += t.vs.length),
              u.push(t.vs),
              (d += t.barycenter * t.weight),
              (h += t.weight),
              (c = i(u, a, c));
          });
        var l;
        var f = { vs: n.flatten(u, !0) };
        h && ((f.barycenter = d / h), (f.weight = h));
        return f;
      };
    },
    24219: function (t, e, r) {
      var n = r(38436);
      t.exports = function (t) {
        var e = (function (t) {
          var e = {},
            r = 0;
          function o(i) {
            var s = r;
            n.forEach(t.children(i), o), (e[i] = { low: s, lim: r++ });
          }
          return n.forEach(t.children(), o), e;
        })(t);
        n.forEach(t.graph().dummyChains, function (r) {
          for (
            var n = t.node(r),
              o = n.edgeObj,
              i = (function (t, e, r, n) {
                var o,
                  i,
                  s = [],
                  a = [],
                  u = Math.min(e[r].low, e[n].low),
                  d = Math.max(e[r].lim, e[n].lim);
                o = r;
                do {
                  (o = t.parent(o)), s.push(o);
                } while (o && (e[o].low > u || d > e[o].lim));
                (i = o), (o = n);
                for (; (o = t.parent(o)) !== i; ) a.push(o);
                return { path: s.concat(a.reverse()), lca: i };
              })(t, e, o.v, o.w),
              s = i.path,
              a = i.lca,
              u = 0,
              d = s[u],
              h = !0;
            r !== o.w;

          ) {
            if (((n = t.node(r)), h)) {
              for (; (d = s[u]) !== a && t.node(d).maxRank < n.rank; ) u++;
              d === a && (h = !1);
            }
            if (!h) {
              for (
                ;
                u < s.length - 1 && t.node((d = s[u + 1])).minRank <= n.rank;

              )
                u++;
              d = s[u];
            }
            t.setParent(r, d), (r = t.successors(r)[0]);
          }
        });
      };
    },
    3573: function (t, e, r) {
      'use strict';
      var n = r(38436),
        o = r(70574).Graph,
        i = r(11138);
      function s(t, e) {
        var r = {};
        return (
          n.reduce(e, function (e, o) {
            var i = 0,
              s = 0,
              a = e.length,
              d = n.last(o);
            return (
              n.forEach(o, function (e, h) {
                var c = (function (t, e) {
                    if (t.node(e).dummy)
                      return n.find(t.predecessors(e), function (e) {
                        return t.node(e).dummy;
                      });
                  })(t, e),
                  l = c ? t.node(c).order : a;
                (c || e === d) &&
                  (n.forEach(o.slice(s, h + 1), function (e) {
                    n.forEach(t.predecessors(e), function (n) {
                      var o = t.node(n),
                        s = o.order;
                      !(s < i || l < s) ||
                        (o.dummy && t.node(e).dummy) ||
                        u(r, n, e);
                    });
                  }),
                  (s = h + 1),
                  (i = l));
              }),
              o
            );
          }),
          r
        );
      }
      function a(t, e) {
        var r = {};
        function o(e, o, i, s, a) {
          var d;
          n.forEach(n.range(o, i), function (o) {
            (d = e[o]),
              t.node(d).dummy &&
                n.forEach(t.predecessors(d), function (e) {
                  var n = t.node(e);
                  n.dummy && (n.order < s || n.order > a) && u(r, e, d);
                });
          });
        }
        return (
          n.reduce(e, function (e, r) {
            var i,
              s = -1,
              a = 0;
            return (
              n.forEach(r, function (n, u) {
                if ('border' === t.node(n).dummy) {
                  var d = t.predecessors(n);
                  d.length &&
                    ((i = t.node(d[0]).order),
                    o(r, a, u, s, i),
                    (a = u),
                    (s = i));
                }
                o(r, a, r.length, i, e.length);
              }),
              r
            );
          }),
          r
        );
      }
      function u(t, e, r) {
        if (e > r) {
          var n = e;
          (e = r), (r = n);
        }
        var o = t[e];
        o || (t[e] = o = {}), (o[r] = !0);
      }
      function d(t, e, r) {
        if (e > r) {
          var o = e;
          (e = r), (r = o);
        }
        return n.has(t[e], r);
      }
      function h(t, e, r, o) {
        var i = {},
          s = {},
          a = {};
        return (
          n.forEach(e, function (t) {
            n.forEach(t, function (t, e) {
              (i[t] = t), (s[t] = t), (a[t] = e);
            });
          }),
          n.forEach(e, function (t) {
            var e = -1;
            n.forEach(t, function (t) {
              var u = o(t);
              if (u.length) {
                u = n.sortBy(u, function (t) {
                  return a[t];
                });
                for (
                  var h = (u.length - 1) / 2,
                    c = Math.floor(h),
                    l = Math.ceil(h);
                  c <= l;
                  ++c
                ) {
                  var f = u[c];
                  s[t] === t &&
                    e < a[f] &&
                    !d(r, t, f) &&
                    ((s[f] = t), (s[t] = i[t] = i[f]), (e = a[f]));
                }
              }
            });
          }),
          { root: i, align: s }
        );
      }
      function c(t, e, r, i, s) {
        var a = {},
          u = (function (t, e, r, i) {
            var s = new o(),
              a = t.graph(),
              u = (function (t, e, r) {
                return function (o, i, s) {
                  var a,
                    u = o.node(i),
                    d = o.node(s),
                    h = 0;
                  if (((h += u.width / 2), n.has(u, 'labelpos')))
                    switch (u.labelpos.toLowerCase()) {
                      case 'l':
                        a = -u.width / 2;
                        break;
                      case 'r':
                        a = u.width / 2;
                    }
                  if (
                    (a && (h += r ? a : -a),
                    (a = 0),
                    (h += (u.dummy ? e : t) / 2),
                    (h += (d.dummy ? e : t) / 2),
                    (h += d.width / 2),
                    n.has(d, 'labelpos'))
                  )
                    switch (d.labelpos.toLowerCase()) {
                      case 'l':
                        a = d.width / 2;
                        break;
                      case 'r':
                        a = -d.width / 2;
                    }
                  return a && (h += r ? a : -a), (a = 0), h;
                };
              })(a.nodesep, a.edgesep, i);
            return (
              n.forEach(e, function (e) {
                var o;
                n.forEach(e, function (e) {
                  var n = r[e];
                  if ((s.setNode(n), o)) {
                    var i = r[o],
                      a = s.edge(i, n);
                    s.setEdge(i, n, Math.max(u(t, e, o), a || 0));
                  }
                  o = e;
                });
              }),
              s
            );
          })(t, e, r, s),
          d = s ? 'borderLeft' : 'borderRight';
        function h(t, e) {
          for (var r = u.nodes(), n = r.pop(), o = {}; n; )
            o[n] ? t(n) : ((o[n] = !0), r.push(n), (r = r.concat(e(n)))),
              (n = r.pop());
        }
        return (
          h(function (t) {
            a[t] = u.inEdges(t).reduce(function (t, e) {
              return Math.max(t, a[e.v] + u.edge(e));
            }, 0);
          }, u.predecessors.bind(u)),
          h(function (e) {
            var r = u.outEdges(e).reduce(function (t, e) {
                return Math.min(t, a[e.w] - u.edge(e));
              }, Number.POSITIVE_INFINITY),
              n = t.node(e);
            r !== Number.POSITIVE_INFINITY &&
              n.borderType !== d &&
              (a[e] = Math.max(a[e], r));
          }, u.successors.bind(u)),
          n.forEach(i, function (t) {
            a[t] = a[r[t]];
          }),
          a
        );
      }
      function l(t, e) {
        return n.minBy(n.values(e), function (e) {
          var r = Number.NEGATIVE_INFINITY,
            o = Number.POSITIVE_INFINITY;
          return (
            n.forIn(e, function (e, n) {
              var i =
                (function (t, e) {
                  return t.node(e).width;
                })(t, n) / 2;
              (r = Math.max(e + i, r)), (o = Math.min(e - i, o));
            }),
            r - o
          );
        });
      }
      function f(t, e) {
        var r = n.values(e),
          o = n.min(r),
          i = n.max(r);
        n.forEach(['u', 'd'], function (r) {
          n.forEach(['l', 'r'], function (s) {
            var a,
              u = r + s,
              d = t[u];
            if (d !== e) {
              var h = n.values(d);
              (a = 'l' === s ? o - n.min(h) : i - n.max(h)) &&
                (t[u] = n.mapValues(d, function (t) {
                  return t + a;
                }));
            }
          });
        });
      }
      function g(t, e) {
        return n.mapValues(t.ul, function (r, o) {
          if (e) return t[e.toLowerCase()][o];
          var i = n.sortBy(n.map(t, o));
          return (i[1] + i[2]) / 2;
        });
      }
      t.exports = {
        positionX: function (t) {
          var e,
            r = i.buildLayerMatrix(t),
            o = n.merge(s(t, r), a(t, r)),
            u = {};
          n.forEach(['u', 'd'], function (i) {
            (e = 'u' === i ? r : n.values(r).reverse()),
              n.forEach(['l', 'r'], function (r) {
                'r' === r &&
                  (e = n.map(e, function (t) {
                    return n.values(t).reverse();
                  }));
                var s = ('u' === i ? t.predecessors : t.successors).bind(t),
                  a = h(t, e, o, s),
                  d = c(t, e, a.root, a.align, 'r' === r);
                'r' === r &&
                  (d = n.mapValues(d, function (t) {
                    return -t;
                  })),
                  (u[i + r] = d);
              });
          });
          var d = l(t, u);
          return f(u, d), g(u, t.graph().align);
        },
        findType1Conflicts: s,
        findType2Conflicts: a,
        addConflict: u,
        hasConflict: d,
        verticalAlignment: h,
        horizontalCompaction: c,
        alignCoordinates: f,
        findSmallestWidthAlignment: l,
        balance: g,
      };
    },
    17873: function (t, e, r) {
      'use strict';
      var n = r(38436),
        o = r(11138),
        i = r(3573).positionX;
      t.exports = function (t) {
        (function (t) {
          var e = o.buildLayerMatrix(t),
            r = t.graph().ranksep,
            i = 0;
          n.forEach(e, function (e) {
            var o = n.max(
              n.map(e, function (e) {
                return t.node(e).height;
              }),
            );
            n.forEach(e, function (e) {
              t.node(e).y = i + o / 2;
            }),
              (i += o + r);
          });
        })((t = o.asNonCompoundGraph(t))),
          n.forEach(i(t), function (e, r) {
            t.node(r).x = e;
          });
      };
    },
    8457: function (t, e, r) {
      'use strict';
      var n = r(38436),
        o = r(70574).Graph,
        i = r(76681).slack;
      function s(t, e) {
        return (
          n.forEach(t.nodes(), function r(o) {
            n.forEach(e.nodeEdges(o), function (n) {
              var s = n.v,
                a = o === s ? n.w : s;
              t.hasNode(a) ||
                i(e, n) ||
                (t.setNode(a, {}), t.setEdge(o, a, {}), r(a));
            });
          }),
          t.nodeCount()
        );
      }
      function a(t, e) {
        return n.minBy(e.edges(), function (r) {
          if (t.hasNode(r.v) !== t.hasNode(r.w)) return i(e, r);
        });
      }
      function u(t, e, r) {
        n.forEach(t.nodes(), function (t) {
          e.node(t).rank += r;
        });
      }
      t.exports = function (t) {
        var e,
          r,
          n = new o({ directed: !1 }),
          d = t.nodes()[0],
          h = t.nodeCount();
        n.setNode(d, {});
        for (; s(n, t) < h; )
          (e = a(n, t)), (r = n.hasNode(e.v) ? i(t, e) : -i(t, e)), u(n, t, r);
        return n;
      };
    },
    78093: function (t, e, r) {
      'use strict';
      var n = r(76681).longestPath,
        o = r(8457),
        i = r(42472);
      t.exports = function (t) {
        switch (t.graph().ranker) {
          case 'network-simplex':
          default:
            a(t);
            break;
          case 'tight-tree':
            !(function (t) {
              n(t), o(t);
            })(t);
            break;
          case 'longest-path':
            s(t);
        }
      };
      var s = n;
      function a(t) {
        i(t);
      }
    },
    42472: function (t, e, r) {
      'use strict';
      var n = r(38436),
        o = r(8457),
        i = r(76681).slack,
        s = r(76681).longestPath,
        a = r(70574).alg.preorder,
        u = r(70574).alg.postorder,
        d = r(11138).simplify;
      function h(t) {
        (t = d(t)), s(t);
        var e,
          r = o(t);
        for (f(r), c(r, t); (e = v(r)); ) m(r, t, e, p(r, t, e));
      }
      function c(t, e) {
        var r = u(t, t.nodes());
        (r = r.slice(0, r.length - 1)),
          n.forEach(r, function (r) {
            !(function (t, e, r) {
              var n = t.node(r),
                o = n.parent;
              t.edge(r, o).cutvalue = l(t, e, r);
            })(t, e, r);
          });
      }
      function l(t, e, r) {
        var o = t.node(r).parent,
          i = !0,
          s = e.edge(r, o),
          a = 0;
        return (
          s || ((i = !1), (s = e.edge(o, r))),
          (a = s.weight),
          n.forEach(e.nodeEdges(r), function (n) {
            var s,
              u,
              d = n.v === r,
              h = d ? n.w : n.v;
            if (h !== o) {
              var c = d === i,
                l = e.edge(n).weight;
              if (((a += c ? l : -l), (s = r), (u = h), t.hasEdge(s, u))) {
                var f = t.edge(r, h).cutvalue;
                a += c ? -f : f;
              }
            }
          }),
          a
        );
      }
      function f(t, e) {
        arguments.length < 2 && (e = t.nodes()[0]), g(t, {}, 1, e);
      }
      function g(t, e, r, o, i) {
        var s = r,
          a = t.node(o);
        return (
          (e[o] = !0),
          n.forEach(t.neighbors(o), function (i) {
            n.has(e, i) || (r = g(t, e, r, i, o));
          }),
          (a.low = s),
          (a.lim = r++),
          i ? (a.parent = i) : delete a.parent,
          r
        );
      }
      function v(t) {
        return n.find(t.edges(), function (e) {
          return t.edge(e).cutvalue < 0;
        });
      }
      function p(t, e, r) {
        var o = r.v,
          s = r.w;
        e.hasEdge(o, s) || ((o = r.w), (s = r.v));
        var a = t.node(o),
          u = t.node(s),
          d = a,
          h = !1;
        a.lim > u.lim && ((d = u), (h = !0));
        var c = n.filter(e.edges(), function (e) {
          return h === y(t, t.node(e.v), d) && h !== y(t, t.node(e.w), d);
        });
        return n.minBy(c, function (t) {
          return i(e, t);
        });
      }
      function m(t, e, r, o) {
        var i = r.v,
          s = r.w;
        t.removeEdge(i, s),
          t.setEdge(o.v, o.w, {}),
          f(t),
          c(t, e),
          (function (t, e) {
            var r = n.find(t.nodes(), function (t) {
                return !e.node(t).parent;
              }),
              o = a(t, r);
            (o = o.slice(1)),
              n.forEach(o, function (r) {
                var n = t.node(r).parent,
                  o = e.edge(r, n),
                  i = !1;
                o || ((o = e.edge(n, r)), (i = !0)),
                  (e.node(r).rank =
                    e.node(n).rank + (i ? o.minlen : -o.minlen));
              });
          })(t, e);
      }
      function y(t, e, r) {
        return r.low <= e.lim && e.lim <= r.lim;
      }
      (t.exports = h),
        (h.initLowLimValues = f),
        (h.initCutValues = c),
        (h.calcCutValue = l),
        (h.leaveEdge = v),
        (h.enterEdge = p),
        (h.exchangeEdges = m);
    },
    76681: function (t, e, r) {
      'use strict';
      var n = r(38436);
      t.exports = {
        longestPath: function (t) {
          var e = {};
          n.forEach(t.sources(), function r(o) {
            var i = t.node(o);
            if (n.has(e, o)) return i.rank;
            e[o] = !0;
            var s = n.min(
              n.map(t.outEdges(o), function (e) {
                return r(e.w) - t.edge(e).minlen;
              }),
            );
            return (
              (s !== Number.POSITIVE_INFINITY && null != s) || (s = 0),
              (i.rank = s)
            );
          });
        },
        slack: function (t, e) {
          return t.node(e.w).rank - t.node(e.v).rank - t.edge(e).minlen;
        },
      };
    },
    11138: function (t, e, r) {
      'use strict';
      var n = r(38436),
        o = r(70574).Graph;
      function i(t, e, r, o) {
        var i;
        do {
          i = n.uniqueId(o);
        } while (t.hasNode(i));
        return (r.dummy = e), t.setNode(i, r), i;
      }
      function s(t) {
        return n.max(
          n.map(t.nodes(), function (e) {
            var r = t.node(e).rank;
            if (!n.isUndefined(r)) return r;
          }),
        );
      }
      t.exports = {
        addDummyNode: i,
        simplify: function (t) {
          var e = new o().setGraph(t.graph());
          return (
            n.forEach(t.nodes(), function (r) {
              e.setNode(r, t.node(r));
            }),
            n.forEach(t.edges(), function (r) {
              var n = e.edge(r.v, r.w) || { weight: 0, minlen: 1 },
                o = t.edge(r);
              e.setEdge(r.v, r.w, {
                weight: n.weight + o.weight,
                minlen: Math.max(n.minlen, o.minlen),
              });
            }),
            e
          );
        },
        asNonCompoundGraph: function (t) {
          var e = new o({ multigraph: t.isMultigraph() }).setGraph(t.graph());
          return (
            n.forEach(t.nodes(), function (r) {
              t.children(r).length || e.setNode(r, t.node(r));
            }),
            n.forEach(t.edges(), function (r) {
              e.setEdge(r, t.edge(r));
            }),
            e
          );
        },
        successorWeights: function (t) {
          var e = n.map(t.nodes(), function (e) {
            var r = {};
            return (
              n.forEach(t.outEdges(e), function (e) {
                r[e.w] = (r[e.w] || 0) + t.edge(e).weight;
              }),
              r
            );
          });
          return n.zipObject(t.nodes(), e);
        },
        predecessorWeights: function (t) {
          var e = n.map(t.nodes(), function (e) {
            var r = {};
            return (
              n.forEach(t.inEdges(e), function (e) {
                r[e.v] = (r[e.v] || 0) + t.edge(e).weight;
              }),
              r
            );
          });
          return n.zipObject(t.nodes(), e);
        },
        intersectRect: function (t, e) {
          var r,
            n,
            o = t.x,
            i = t.y,
            s = e.x - o,
            a = e.y - i,
            u = t.width / 2,
            d = t.height / 2;
          if (!s && !a)
            throw new Error(
              'Not possible to find intersection inside of the rectangle',
            );
          Math.abs(a) * u > Math.abs(s) * d
            ? (a < 0 && (d = -d), (r = (d * s) / a), (n = d))
            : (s < 0 && (u = -u), (r = u), (n = (u * a) / s));
          return { x: o + r, y: i + n };
        },
        buildLayerMatrix: function (t) {
          var e = n.map(n.range(s(t) + 1), function () {
            return [];
          });
          return (
            n.forEach(t.nodes(), function (r) {
              var o = t.node(r),
                i = o.rank;
              n.isUndefined(i) || (e[i][o.order] = r);
            }),
            e
          );
        },
        normalizeRanks: function (t) {
          var e = n.min(
            n.map(t.nodes(), function (e) {
              return t.node(e).rank;
            }),
          );
          n.forEach(t.nodes(), function (r) {
            var o = t.node(r);
            n.has(o, 'rank') && (o.rank -= e);
          });
        },
        removeEmptyRanks: function (t) {
          var e = n.min(
              n.map(t.nodes(), function (e) {
                return t.node(e).rank;
              }),
            ),
            r = [];
          n.forEach(t.nodes(), function (n) {
            var o = t.node(n).rank - e;
            r[o] || (r[o] = []), r[o].push(n);
          });
          var o = 0,
            i = t.graph().nodeRankFactor;
          n.forEach(r, function (e, r) {
            n.isUndefined(e) && r % i != 0
              ? --o
              : o &&
                n.forEach(e, function (e) {
                  t.node(e).rank += o;
                });
          });
        },
        addBorderNode: function (t, e, r, n) {
          var o = { width: 0, height: 0 };
          arguments.length >= 4 && ((o.rank = r), (o.order = n));
          return i(t, 'border', o, e);
        },
        maxRank: s,
        partition: function (t, e) {
          var r = { lhs: [], rhs: [] };
          return (
            n.forEach(t, function (t) {
              e(t) ? r.lhs.push(t) : r.rhs.push(t);
            }),
            r
          );
        },
        time: function (t, e) {
          var r = n.now();
          try {
            return e();
          } finally {
            console.log(t + ' time: ' + (n.now() - r) + 'ms');
          }
        },
        notime: function (t, e) {
          return e();
        },
      };
    },
    88177: function (t) {
      t.exports = '0.8.5';
    },
    28282: function (t, e, r) {
      var n = r(82354);
      t.exports = {
        Graph: n.Graph,
        json: r(28974),
        alg: r(12440),
        version: n.version,
      };
    },
    2842: function (t, e, r) {
      var n = r(89126);
      t.exports = function (t) {
        var e,
          r = {},
          o = [];
        function i(o) {
          n.has(r, o) ||
            ((r[o] = !0),
            e.push(o),
            n.each(t.successors(o), i),
            n.each(t.predecessors(o), i));
        }
        return (
          n.each(t.nodes(), function (t) {
            (e = []), i(t), e.length && o.push(e);
          }),
          o
        );
      };
    },
    53984: function (t, e, r) {
      var n = r(89126);
      function o(t, e, r, i, s, a) {
        n.has(i, e) ||
          ((i[e] = !0),
          r || a.push(e),
          n.each(s(e), function (e) {
            o(t, e, r, i, s, a);
          }),
          r && a.push(e));
      }
      t.exports = function (t, e, r) {
        n.isArray(e) || (e = [e]);
        var i = (t.isDirected() ? t.successors : t.neighbors).bind(t),
          s = [],
          a = {};
        return (
          n.each(e, function (e) {
            if (!t.hasNode(e))
              throw new Error('Graph does not have node: ' + e);
            o(t, e, 'post' === r, a, i, s);
          }),
          s
        );
      };
    },
    84847: function (t, e, r) {
      var n = r(63763),
        o = r(89126);
      t.exports = function (t, e, r) {
        return o.transform(
          t.nodes(),
          function (o, i) {
            o[i] = n(t, i, e, r);
          },
          {},
        );
      };
    },
    63763: function (t, e, r) {
      var n = r(89126),
        o = r(75639);
      t.exports = function (t, e, r, n) {
        return (function (t, e, r, n) {
          var i,
            s,
            a = {},
            u = new o(),
            d = function (t) {
              var e = t.v !== i ? t.v : t.w,
                n = a[e],
                o = r(t),
                d = s.distance + o;
              if (o < 0)
                throw new Error(
                  'dijkstra does not allow negative edge weights. Bad edge: ' +
                    t +
                    ' Weight: ' +
                    o,
                );
              d < n.distance &&
                ((n.distance = d), (n.predecessor = i), u.decrease(e, d));
            };
          t.nodes().forEach(function (t) {
            var r = t === e ? 0 : Number.POSITIVE_INFINITY;
            (a[t] = { distance: r }), u.add(t, r);
          });
          for (
            ;
            u.size() > 0 &&
            ((i = u.removeMin()),
            (s = a[i]).distance !== Number.POSITIVE_INFINITY);

          )
            n(i).forEach(d);
          return a;
        })(
          t,
          String(e),
          r || i,
          n ||
            function (e) {
              return t.outEdges(e);
            },
        );
      };
      var i = n.constant(1);
    },
    9096: function (t, e, r) {
      var n = r(89126),
        o = r(5023);
      t.exports = function (t) {
        return n.filter(o(t), function (e) {
          return e.length > 1 || (1 === e.length && t.hasEdge(e[0], e[0]));
        });
      };
    },
    38924: function (t, e, r) {
      var n = r(89126);
      t.exports = function (t, e, r) {
        return (function (t, e, r) {
          var n = {},
            o = t.nodes();
          return (
            o.forEach(function (t) {
              (n[t] = {}),
                (n[t][t] = { distance: 0 }),
                o.forEach(function (e) {
                  t !== e && (n[t][e] = { distance: Number.POSITIVE_INFINITY });
                }),
                r(t).forEach(function (r) {
                  var o = r.v === t ? r.w : r.v,
                    i = e(r);
                  n[t][o] = { distance: i, predecessor: t };
                });
            }),
            o.forEach(function (t) {
              var e = n[t];
              o.forEach(function (r) {
                var i = n[r];
                o.forEach(function (r) {
                  var n = i[t],
                    o = e[r],
                    s = i[r],
                    a = n.distance + o.distance;
                  a < s.distance &&
                    ((s.distance = a), (s.predecessor = o.predecessor));
                });
              });
            }),
            n
          );
        })(
          t,
          e || o,
          r ||
            function (e) {
              return t.outEdges(e);
            },
        );
      };
      var o = n.constant(1);
    },
    12440: function (t, e, r) {
      t.exports = {
        components: r(2842),
        dijkstra: r(63763),
        dijkstraAll: r(84847),
        findCycles: r(9096),
        floydWarshall: r(38924),
        isAcyclic: r(62707),
        postorder: r(63308),
        preorder: r(92648),
        prim: r(80514),
        tarjan: r(5023),
        topsort: r(2166),
      };
    },
    62707: function (t, e, r) {
      var n = r(2166);
      t.exports = function (t) {
        try {
          n(t);
        } catch (t) {
          if (t instanceof n.CycleException) return !1;
          throw t;
        }
        return !0;
      };
    },
    63308: function (t, e, r) {
      var n = r(53984);
      t.exports = function (t, e) {
        return n(t, e, 'post');
      };
    },
    92648: function (t, e, r) {
      var n = r(53984);
      t.exports = function (t, e) {
        return n(t, e, 'pre');
      };
    },
    80514: function (t, e, r) {
      var n = r(89126),
        o = r(30771),
        i = r(75639);
      t.exports = function (t, e) {
        var r,
          s = new o(),
          a = {},
          u = new i();
        function d(t) {
          var n = t.v === r ? t.w : t.v,
            o = u.priority(n);
          if (void 0 !== o) {
            var i = e(t);
            i < o && ((a[n] = r), u.decrease(n, i));
          }
        }
        if (0 === t.nodeCount()) return s;
        n.each(t.nodes(), function (t) {
          u.add(t, Number.POSITIVE_INFINITY), s.setNode(t);
        }),
          u.decrease(t.nodes()[0], 0);
        var h = !1;
        for (; u.size() > 0; ) {
          if (((r = u.removeMin()), n.has(a, r))) s.setEdge(r, a[r]);
          else {
            if (h) throw new Error('Input graph is not connected: ' + t);
            h = !0;
          }
          t.nodeEdges(r).forEach(d);
        }
        return s;
      };
    },
    5023: function (t, e, r) {
      var n = r(89126);
      t.exports = function (t) {
        var e = 0,
          r = [],
          o = {},
          i = [];
        function s(a) {
          var u = (o[a] = { onStack: !0, lowlink: e, index: e++ });
          if (
            (r.push(a),
            t.successors(a).forEach(function (t) {
              n.has(o, t)
                ? o[t].onStack && (u.lowlink = Math.min(u.lowlink, o[t].index))
                : (s(t), (u.lowlink = Math.min(u.lowlink, o[t].lowlink)));
            }),
            u.lowlink === u.index)
          ) {
            var d,
              h = [];
            do {
              (d = r.pop()), (o[d].onStack = !1), h.push(d);
            } while (a !== d);
            i.push(h);
          }
        }
        return (
          t.nodes().forEach(function (t) {
            n.has(o, t) || s(t);
          }),
          i
        );
      };
    },
    2166: function (t, e, r) {
      var n = r(89126);
      function o(t) {
        var e = {},
          r = {},
          o = [];
        if (
          (n.each(t.sinks(), function s(a) {
            if (n.has(r, a)) throw new i();
            n.has(e, a) ||
              ((r[a] = !0),
              (e[a] = !0),
              n.each(t.predecessors(a), s),
              delete r[a],
              o.push(a));
          }),
          n.size(e) !== t.nodeCount())
        )
          throw new i();
        return o;
      }
      function i() {}
      (t.exports = o), (o.CycleException = i), (i.prototype = new Error());
    },
    75639: function (t, e, r) {
      var n = r(89126);
      function o() {
        (this._arr = []), (this._keyIndices = {});
      }
      (t.exports = o),
        (o.prototype.size = function () {
          return this._arr.length;
        }),
        (o.prototype.keys = function () {
          return this._arr.map(function (t) {
            return t.key;
          });
        }),
        (o.prototype.has = function (t) {
          return n.has(this._keyIndices, t);
        }),
        (o.prototype.priority = function (t) {
          var e = this._keyIndices[t];
          if (void 0 !== e) return this._arr[e].priority;
        }),
        (o.prototype.min = function () {
          if (0 === this.size()) throw new Error('Queue underflow');
          return this._arr[0].key;
        }),
        (o.prototype.add = function (t, e) {
          var r = this._keyIndices;
          if (((t = String(t)), !n.has(r, t))) {
            var o = this._arr,
              i = o.length;
            return (
              (r[t] = i), o.push({ key: t, priority: e }), this._decrease(i), !0
            );
          }
          return !1;
        }),
        (o.prototype.removeMin = function () {
          this._swap(0, this._arr.length - 1);
          var t = this._arr.pop();
          return delete this._keyIndices[t.key], this._heapify(0), t.key;
        }),
        (o.prototype.decrease = function (t, e) {
          var r = this._keyIndices[t];
          if (e > this._arr[r].priority)
            throw new Error(
              'New priority is greater than current priority. Key: ' +
                t +
                ' Old: ' +
                this._arr[r].priority +
                ' New: ' +
                e,
            );
          (this._arr[r].priority = e), this._decrease(r);
        }),
        (o.prototype._heapify = function (t) {
          var e = this._arr,
            r = 2 * t,
            n = r + 1,
            o = t;
          r < e.length &&
            ((o = e[r].priority < e[o].priority ? r : o),
            n < e.length && (o = e[n].priority < e[o].priority ? n : o),
            o !== t && (this._swap(t, o), this._heapify(o)));
        }),
        (o.prototype._decrease = function (t) {
          for (
            var e, r = this._arr, n = r[t].priority;
            0 !== t && !(r[(e = t >> 1)].priority < n);

          )
            this._swap(t, e), (t = e);
        }),
        (o.prototype._swap = function (t, e) {
          var r = this._arr,
            n = this._keyIndices,
            o = r[t],
            i = r[e];
          (r[t] = i), (r[e] = o), (n[i.key] = t), (n[o.key] = e);
        });
    },
    30771: function (t, e, r) {
      'use strict';
      var n = r(89126);
      t.exports = i;
      var o = '\0';
      function i(t) {
        (this._isDirected = !n.has(t, 'directed') || t.directed),
          (this._isMultigraph = !!n.has(t, 'multigraph') && t.multigraph),
          (this._isCompound = !!n.has(t, 'compound') && t.compound),
          (this._label = void 0),
          (this._defaultNodeLabelFn = n.constant(void 0)),
          (this._defaultEdgeLabelFn = n.constant(void 0)),
          (this._nodes = {}),
          this._isCompound &&
            ((this._parent = {}),
            (this._children = {}),
            (this._children[o] = {})),
          (this._in = {}),
          (this._preds = {}),
          (this._out = {}),
          (this._sucs = {}),
          (this._edgeObjs = {}),
          (this._edgeLabels = {});
      }
      function s(t, e) {
        t[e] ? t[e]++ : (t[e] = 1);
      }
      function a(t, e) {
        --t[e] || delete t[e];
      }
      function u(t, e, r, o) {
        var i = '' + e,
          s = '' + r;
        if (!t && i > s) {
          var a = i;
          (i = s), (s = a);
        }
        return i + '' + s + '' + (n.isUndefined(o) ? '\0' : o);
      }
      function d(t, e) {
        return u(t, e.v, e.w, e.name);
      }
      (i.prototype._nodeCount = 0),
        (i.prototype._edgeCount = 0),
        (i.prototype.isDirected = function () {
          return this._isDirected;
        }),
        (i.prototype.isMultigraph = function () {
          return this._isMultigraph;
        }),
        (i.prototype.isCompound = function () {
          return this._isCompound;
        }),
        (i.prototype.setGraph = function (t) {
          return (this._label = t), this;
        }),
        (i.prototype.graph = function () {
          return this._label;
        }),
        (i.prototype.setDefaultNodeLabel = function (t) {
          return (
            n.isFunction(t) || (t = n.constant(t)),
            (this._defaultNodeLabelFn = t),
            this
          );
        }),
        (i.prototype.nodeCount = function () {
          return this._nodeCount;
        }),
        (i.prototype.nodes = function () {
          return n.keys(this._nodes);
        }),
        (i.prototype.sources = function () {
          var t = this;
          return n.filter(this.nodes(), function (e) {
            return n.isEmpty(t._in[e]);
          });
        }),
        (i.prototype.sinks = function () {
          var t = this;
          return n.filter(this.nodes(), function (e) {
            return n.isEmpty(t._out[e]);
          });
        }),
        (i.prototype.setNodes = function (t, e) {
          var r = arguments,
            o = this;
          return (
            n.each(t, function (t) {
              r.length > 1 ? o.setNode(t, e) : o.setNode(t);
            }),
            this
          );
        }),
        (i.prototype.setNode = function (t, e) {
          return n.has(this._nodes, t)
            ? (arguments.length > 1 && (this._nodes[t] = e), this)
            : ((this._nodes[t] =
                arguments.length > 1 ? e : this._defaultNodeLabelFn(t)),
              this._isCompound &&
                ((this._parent[t] = o),
                (this._children[t] = {}),
                (this._children[o][t] = !0)),
              (this._in[t] = {}),
              (this._preds[t] = {}),
              (this._out[t] = {}),
              (this._sucs[t] = {}),
              ++this._nodeCount,
              this);
        }),
        (i.prototype.node = function (t) {
          return this._nodes[t];
        }),
        (i.prototype.hasNode = function (t) {
          return n.has(this._nodes, t);
        }),
        (i.prototype.removeNode = function (t) {
          var e = this;
          if (n.has(this._nodes, t)) {
            var r = function (t) {
              e.removeEdge(e._edgeObjs[t]);
            };
            delete this._nodes[t],
              this._isCompound &&
                (this._removeFromParentsChildList(t),
                delete this._parent[t],
                n.each(this.children(t), function (t) {
                  e.setParent(t);
                }),
                delete this._children[t]),
              n.each(n.keys(this._in[t]), r),
              delete this._in[t],
              delete this._preds[t],
              n.each(n.keys(this._out[t]), r),
              delete this._out[t],
              delete this._sucs[t],
              --this._nodeCount;
          }
          return this;
        }),
        (i.prototype.setParent = function (t, e) {
          if (!this._isCompound)
            throw new Error('Cannot set parent in a non-compound graph');
          if (n.isUndefined(e)) e = o;
          else {
            for (var r = (e += ''); !n.isUndefined(r); r = this.parent(r))
              if (r === t)
                throw new Error(
                  'Setting ' +
                    e +
                    ' as parent of ' +
                    t +
                    ' would create a cycle',
                );
            this.setNode(e);
          }
          return (
            this.setNode(t),
            this._removeFromParentsChildList(t),
            (this._parent[t] = e),
            (this._children[e][t] = !0),
            this
          );
        }),
        (i.prototype._removeFromParentsChildList = function (t) {
          delete this._children[this._parent[t]][t];
        }),
        (i.prototype.parent = function (t) {
          if (this._isCompound) {
            var e = this._parent[t];
            if (e !== o) return e;
          }
        }),
        (i.prototype.children = function (t) {
          if ((n.isUndefined(t) && (t = o), this._isCompound)) {
            var e = this._children[t];
            if (e) return n.keys(e);
          } else {
            if (t === o) return this.nodes();
            if (this.hasNode(t)) return [];
          }
        }),
        (i.prototype.predecessors = function (t) {
          var e = this._preds[t];
          if (e) return n.keys(e);
        }),
        (i.prototype.successors = function (t) {
          var e = this._sucs[t];
          if (e) return n.keys(e);
        }),
        (i.prototype.neighbors = function (t) {
          var e = this.predecessors(t);
          if (e) return n.union(e, this.successors(t));
        }),
        (i.prototype.isLeaf = function (t) {
          return (
            0 ===
            (this.isDirected() ? this.successors(t) : this.neighbors(t)).length
          );
        }),
        (i.prototype.filterNodes = function (t) {
          var e = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound,
          });
          e.setGraph(this.graph());
          var r = this;
          n.each(this._nodes, function (r, n) {
            t(n) && e.setNode(n, r);
          }),
            n.each(this._edgeObjs, function (t) {
              e.hasNode(t.v) && e.hasNode(t.w) && e.setEdge(t, r.edge(t));
            });
          var o = {};
          function i(t) {
            var n = r.parent(t);
            return void 0 === n || e.hasNode(n)
              ? ((o[t] = n), n)
              : n in o
                ? o[n]
                : i(n);
          }
          return (
            this._isCompound &&
              n.each(e.nodes(), function (t) {
                e.setParent(t, i(t));
              }),
            e
          );
        }),
        (i.prototype.setDefaultEdgeLabel = function (t) {
          return (
            n.isFunction(t) || (t = n.constant(t)),
            (this._defaultEdgeLabelFn = t),
            this
          );
        }),
        (i.prototype.edgeCount = function () {
          return this._edgeCount;
        }),
        (i.prototype.edges = function () {
          return n.values(this._edgeObjs);
        }),
        (i.prototype.setPath = function (t, e) {
          var r = this,
            o = arguments;
          return (
            n.reduce(t, function (t, n) {
              return o.length > 1 ? r.setEdge(t, n, e) : r.setEdge(t, n), n;
            }),
            this
          );
        }),
        (i.prototype.setEdge = function () {
          var t,
            e,
            r,
            o,
            i = !1,
            a = arguments[0];
          'object' == typeof a && null !== a && 'v' in a
            ? ((t = a.v),
              (e = a.w),
              (r = a.name),
              2 === arguments.length && ((o = arguments[1]), (i = !0)))
            : ((t = a),
              (e = arguments[1]),
              (r = arguments[3]),
              arguments.length > 2 && ((o = arguments[2]), (i = !0))),
            (t = '' + t),
            (e = '' + e),
            n.isUndefined(r) || (r = '' + r);
          var d = u(this._isDirected, t, e, r);
          if (n.has(this._edgeLabels, d))
            return i && (this._edgeLabels[d] = o), this;
          if (!n.isUndefined(r) && !this._isMultigraph)
            throw new Error(
              'Cannot set a named edge when isMultigraph = false',
            );
          this.setNode(t),
            this.setNode(e),
            (this._edgeLabels[d] = i ? o : this._defaultEdgeLabelFn(t, e, r));
          var h = (function (t, e, r, n) {
            var o = '' + e,
              i = '' + r;
            if (!t && o > i) {
              var s = o;
              (o = i), (i = s);
            }
            var a = { v: o, w: i };
            n && (a.name = n);
            return a;
          })(this._isDirected, t, e, r);
          return (
            (t = h.v),
            (e = h.w),
            Object.freeze(h),
            (this._edgeObjs[d] = h),
            s(this._preds[e], t),
            s(this._sucs[t], e),
            (this._in[e][d] = h),
            (this._out[t][d] = h),
            this._edgeCount++,
            this
          );
        }),
        (i.prototype.edge = function (t, e, r) {
          var n =
            1 === arguments.length
              ? d(this._isDirected, arguments[0])
              : u(this._isDirected, t, e, r);
          return this._edgeLabels[n];
        }),
        (i.prototype.hasEdge = function (t, e, r) {
          var o =
            1 === arguments.length
              ? d(this._isDirected, arguments[0])
              : u(this._isDirected, t, e, r);
          return n.has(this._edgeLabels, o);
        }),
        (i.prototype.removeEdge = function (t, e, r) {
          var n =
              1 === arguments.length
                ? d(this._isDirected, arguments[0])
                : u(this._isDirected, t, e, r),
            o = this._edgeObjs[n];
          return (
            o &&
              ((t = o.v),
              (e = o.w),
              delete this._edgeLabels[n],
              delete this._edgeObjs[n],
              a(this._preds[e], t),
              a(this._sucs[t], e),
              delete this._in[e][n],
              delete this._out[t][n],
              this._edgeCount--),
            this
          );
        }),
        (i.prototype.inEdges = function (t, e) {
          var r = this._in[t];
          if (r) {
            var o = n.values(r);
            return e
              ? n.filter(o, function (t) {
                  return t.v === e;
                })
              : o;
          }
        }),
        (i.prototype.outEdges = function (t, e) {
          var r = this._out[t];
          if (r) {
            var o = n.values(r);
            return e
              ? n.filter(o, function (t) {
                  return t.w === e;
                })
              : o;
          }
        }),
        (i.prototype.nodeEdges = function (t, e) {
          var r = this.inEdges(t, e);
          if (r) return r.concat(this.outEdges(t, e));
        });
    },
    82354: function (t, e, r) {
      t.exports = { Graph: r(30771), version: r(49631) };
    },
    28974: function (t, e, r) {
      var n = r(89126),
        o = r(30771);
      function i(t) {
        return n.map(t.nodes(), function (e) {
          var r = t.node(e),
            o = t.parent(e),
            i = { v: e };
          return (
            n.isUndefined(r) || (i.value = r),
            n.isUndefined(o) || (i.parent = o),
            i
          );
        });
      }
      function s(t) {
        return n.map(t.edges(), function (e) {
          var r = t.edge(e),
            o = { v: e.v, w: e.w };
          return (
            n.isUndefined(e.name) || (o.name = e.name),
            n.isUndefined(r) || (o.value = r),
            o
          );
        });
      }
      t.exports = {
        write: function (t) {
          var e = {
            options: {
              directed: t.isDirected(),
              multigraph: t.isMultigraph(),
              compound: t.isCompound(),
            },
            nodes: i(t),
            edges: s(t),
          };
          n.isUndefined(t.graph()) || (e.value = n.clone(t.graph()));
          return e;
        },
        read: function (t) {
          var e = new o(t.options).setGraph(t.value);
          return (
            n.each(t.nodes, function (t) {
              e.setNode(t.v, t.value), t.parent && e.setParent(t.v, t.parent);
            }),
            n.each(t.edges, function (t) {
              e.setEdge({ v: t.v, w: t.w, name: t.name }, t.value);
            }),
            e
          );
        },
      };
    },
    89126: function (t, e, r) {
      var n;
      try {
        n = {
          clone: r(66678),
          constant: r(75703),
          each: r(66073),
          filter: r(63105),
          has: r(18721),
          isArray: r(1469),
          isEmpty: r(41609),
          isFunction: r(23560),
          isUndefined: r(52353),
          keys: r(3674),
          map: r(35161),
          reduce: r(54061),
          size: r(84238),
          transform: r(68718),
          union: r(93386),
          values: r(52628),
        };
      } catch (t) {}
      n || (n = window._), (t.exports = n);
    },
    49631: function (t) {
      t.exports = '2.1.8';
    },
    44091: function (t, e, r) {
      'use strict';
      r.r(e),
        r.d(e, {
          isAnyArray: function () {
            return o;
          },
        });
      const n = Object.prototype.toString;
      function o(t) {
        const e = n.call(t);
        return e.endsWith('Array]') && !e.includes('Big');
      }
    },
    47443: function (t, e, r) {
      var n = r(42118);
      t.exports = function (t, e) {
        return !!(null == t ? 0 : t.length) && n(t, e, 0) > -1;
      };
    },
    1196: function (t) {
      t.exports = function (t, e, r) {
        for (var n = -1, o = null == t ? 0 : t.length; ++n < o; )
          if (r(e, t[n])) return !0;
        return !1;
      };
    },
    48983: function (t, e, r) {
      var n = r(40371)('length');
      t.exports = n;
    },
    86556: function (t, e, r) {
      var n = r(89465),
        o = r(77813);
      t.exports = function (t, e, r) {
        ((void 0 !== r && !o(t[e], r)) || (void 0 === r && !(e in t))) &&
          n(t, e, r);
      };
    },
    89881: function (t, e, r) {
      var n = r(47816),
        o = r(99291)(n);
      t.exports = o;
    },
    56029: function (t, e, r) {
      var n = r(33448);
      t.exports = function (t, e, r) {
        for (var o = -1, i = t.length; ++o < i; ) {
          var s = t[o],
            a = e(s);
          if (null != a && (void 0 === u ? a == a && !n(a) : r(a, u)))
            var u = a,
              d = s;
        }
        return d;
      };
    },
    80760: function (t, e, r) {
      var n = r(89881);
      t.exports = function (t, e) {
        var r = [];
        return (
          n(t, function (t, n, o) {
            e(t, n, o) && r.push(t);
          }),
          r
        );
      };
    },
    41848: function (t) {
      t.exports = function (t, e, r, n) {
        for (var o = t.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
          if (e(t[i], i, t)) return i;
        return -1;
      };
    },
    28483: function (t, e, r) {
      var n = r(25063)();
      t.exports = n;
    },
    47816: function (t, e, r) {
      var n = r(28483),
        o = r(3674);
      t.exports = function (t, e) {
        return t && n(t, e, o);
      };
    },
    53325: function (t) {
      t.exports = function (t, e) {
        return t > e;
      };
    },
    78565: function (t) {
      var e = Object.prototype.hasOwnProperty;
      t.exports = function (t, r) {
        return null != t && e.call(t, r);
      };
    },
    13: function (t) {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    42118: function (t, e, r) {
      var n = r(41848),
        o = r(62722),
        i = r(39375);
      t.exports = function (t, e, r) {
        return e == e ? i(t, e, r) : n(t, o, r);
      };
    },
    2958: function (t, e, r) {
      var n = r(46384),
        o = r(90939);
      t.exports = function (t, e, r, i) {
        var s = r.length,
          a = s,
          u = !i;
        if (null == t) return !a;
        for (t = Object(t); s--; ) {
          var d = r[s];
          if (u && d[2] ? d[1] !== t[d[0]] : !(d[0] in t)) return !1;
        }
        for (; ++s < a; ) {
          var h = (d = r[s])[0],
            c = t[h],
            l = d[1];
          if (u && d[2]) {
            if (void 0 === c && !(h in t)) return !1;
          } else {
            var f = new n();
            if (i) var g = i(c, l, h, t, e, f);
            if (!(void 0 === g ? o(l, c, 3, i, f) : g)) return !1;
          }
        }
        return !0;
      };
    },
    62722: function (t) {
      t.exports = function (t) {
        return t != t;
      };
    },
    67206: function (t, e, r) {
      var n = r(91573),
        o = r(16432),
        i = r(6557),
        s = r(1469),
        a = r(39601);
      t.exports = function (t) {
        return 'function' == typeof t
          ? t
          : null == t
            ? i
            : 'object' == typeof t
              ? s(t)
                ? o(t[0], t[1])
                : n(t)
              : a(t);
      };
    },
    70433: function (t) {
      t.exports = function (t, e) {
        return t < e;
      };
    },
    69199: function (t, e, r) {
      var n = r(89881),
        o = r(98612);
      t.exports = function (t, e) {
        var r = -1,
          i = o(t) ? Array(t.length) : [];
        return (
          n(t, function (t, n, o) {
            i[++r] = e(t, n, o);
          }),
          i
        );
      };
    },
    91573: function (t, e, r) {
      var n = r(2958),
        o = r(1499),
        i = r(42634);
      t.exports = function (t) {
        var e = o(t);
        return 1 == e.length && e[0][2]
          ? i(e[0][0], e[0][1])
          : function (r) {
              return r === t || n(r, t, e);
            };
      };
    },
    16432: function (t, e, r) {
      var n = r(90939),
        o = r(27361),
        i = r(79095),
        s = r(15403),
        a = r(89162),
        u = r(42634),
        d = r(40327);
      t.exports = function (t, e) {
        return s(t) && a(e)
          ? u(d(t), e)
          : function (r) {
              var s = o(r, t);
              return void 0 === s && s === e ? i(r, t) : n(e, s, 3);
            };
      };
    },
    42980: function (t, e, r) {
      var n = r(46384),
        o = r(86556),
        i = r(28483),
        s = r(59783),
        a = r(13218),
        u = r(81704),
        d = r(36390);
      t.exports = function t(e, r, h, c, l) {
        e !== r &&
          i(
            r,
            function (i, u) {
              if ((l || (l = new n()), a(i))) s(e, r, u, h, t, c, l);
              else {
                var f = c ? c(d(e, u), i, u + '', e, r, l) : void 0;
                void 0 === f && (f = i), o(e, u, f);
              }
            },
            u,
          );
      };
    },
    59783: function (t, e, r) {
      var n = r(86556),
        o = r(64626),
        i = r(77133),
        s = r(6450),
        a = r(38517),
        u = r(35694),
        d = r(1469),
        h = r(29246),
        c = r(44144),
        l = r(23560),
        f = r(13218),
        g = r(68630),
        v = r(36719),
        p = r(36390),
        m = r(59881);
      t.exports = function (t, e, r, y, w, x, b) {
        var E = p(t, r),
          N = p(e, r),
          M = b.get(N);
        if (M) n(t, r, M);
        else {
          var k = x ? x(E, N, r + '', t, e, b) : void 0,
            _ = void 0 === k;
          if (_) {
            var S = d(N),
              A = !S && c(N),
              O = !S && !A && v(N);
            (k = N),
              S || A || O
                ? d(E)
                  ? (k = E)
                  : h(E)
                    ? (k = s(E))
                    : A
                      ? ((_ = !1), (k = o(N, !0)))
                      : O
                        ? ((_ = !1), (k = i(N, !0)))
                        : (k = [])
                : g(N) || u(N)
                  ? ((k = E), u(E) ? (k = m(E)) : (f(E) && !l(E)) || (k = a(N)))
                  : (_ = !1);
          }
          _ && (b.set(N, k), w(k, N, y, x, b), b.delete(N)), n(t, r, k);
        }
      };
    },
    82689: function (t, e, r) {
      var n = r(29932),
        o = r(97786),
        i = r(67206),
        s = r(69199),
        a = r(71131),
        u = r(51717),
        d = r(85022),
        h = r(6557),
        c = r(1469);
      t.exports = function (t, e, r) {
        e = e.length
          ? n(e, function (t) {
              return c(t)
                ? function (e) {
                    return o(e, 1 === t.length ? t[0] : t);
                  }
                : t;
            })
          : [h];
        var l = -1;
        e = n(e, u(i));
        var f = s(t, function (t, r, o) {
          return {
            criteria: n(e, function (e) {
              return e(t);
            }),
            index: ++l,
            value: t,
          };
        });
        return a(f, function (t, e) {
          return d(t, e, r);
        });
      };
    },
    25970: function (t, e, r) {
      var n = r(63012),
        o = r(79095);
      t.exports = function (t, e) {
        return n(t, e, function (e, r) {
          return o(t, r);
        });
      };
    },
    63012: function (t, e, r) {
      var n = r(97786),
        o = r(10611),
        i = r(71811);
      t.exports = function (t, e, r) {
        for (var s = -1, a = e.length, u = {}; ++s < a; ) {
          var d = e[s],
            h = n(t, d);
          r(h, d) && o(u, i(d, t), h);
        }
        return u;
      };
    },
    40371: function (t) {
      t.exports = function (t) {
        return function (e) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    79152: function (t, e, r) {
      var n = r(97786);
      t.exports = function (t) {
        return function (e) {
          return n(e, t);
        };
      };
    },
    40098: function (t) {
      var e = Math.ceil,
        r = Math.max;
      t.exports = function (t, n, o, i) {
        for (var s = -1, a = r(e((n - t) / (o || 1)), 0), u = Array(a); a--; )
          (u[i ? a : ++s] = t), (t += o);
        return u;
      };
    },
    10107: function (t) {
      t.exports = function (t, e, r, n, o) {
        return (
          o(t, function (t, o, i) {
            r = n ? ((n = !1), t) : e(r, t, o, i);
          }),
          r
        );
      };
    },
    5976: function (t, e, r) {
      var n = r(6557),
        o = r(45357),
        i = r(30061);
      t.exports = function (t, e) {
        return i(o(t, e, n), t + '');
      };
    },
    10611: function (t, e, r) {
      var n = r(34865),
        o = r(71811),
        i = r(65776),
        s = r(13218),
        a = r(40327);
      t.exports = function (t, e, r, u) {
        if (!s(t)) return t;
        for (
          var d = -1, h = (e = o(e, t)).length, c = h - 1, l = t;
          null != l && ++d < h;

        ) {
          var f = a(e[d]),
            g = r;
          if ('__proto__' === f || 'constructor' === f || 'prototype' === f)
            return t;
          if (d != c) {
            var v = l[f];
            void 0 === (g = u ? u(v, f, l) : void 0) &&
              (g = s(v) ? v : i(e[d + 1]) ? [] : {});
          }
          n(l, f, g), (l = l[f]);
        }
        return t;
      };
    },
    71131: function (t) {
      t.exports = function (t, e) {
        var r = t.length;
        for (t.sort(e); r--; ) t[r] = t[r].value;
        return t;
      };
    },
    45652: function (t, e, r) {
      var n = r(88668),
        o = r(47443),
        i = r(1196),
        s = r(74757),
        a = r(23593),
        u = r(21814);
      t.exports = function (t, e, r) {
        var d = -1,
          h = o,
          c = t.length,
          l = !0,
          f = [],
          g = f;
        if (r) (l = !1), (h = i);
        else if (c >= 200) {
          var v = e ? null : a(t);
          if (v) return u(v);
          (l = !1), (h = s), (g = new n());
        } else g = e ? [] : f;
        t: for (; ++d < c; ) {
          var p = t[d],
            m = e ? e(p) : p;
          if (((p = r || 0 !== p ? p : 0), l && m == m)) {
            for (var y = g.length; y--; ) if (g[y] === m) continue t;
            e && g.push(m), f.push(p);
          } else h(g, m, r) || (g !== f && g.push(m), f.push(p));
        }
        return f;
      };
    },
    47415: function (t, e, r) {
      var n = r(29932);
      t.exports = function (t, e) {
        return n(e, function (e) {
          return t[e];
        });
      };
    },
    1757: function (t) {
      t.exports = function (t, e, r) {
        for (var n = -1, o = t.length, i = e.length, s = {}; ++n < o; ) {
          var a = n < i ? e[n] : void 0;
          r(s, t[n], a);
        }
        return s;
      };
    },
    54290: function (t, e, r) {
      var n = r(6557);
      t.exports = function (t) {
        return 'function' == typeof t ? t : n;
      };
    },
    26393: function (t, e, r) {
      var n = r(33448);
      t.exports = function (t, e) {
        if (t !== e) {
          var r = void 0 !== t,
            o = null === t,
            i = t == t,
            s = n(t),
            a = void 0 !== e,
            u = null === e,
            d = e == e,
            h = n(e);
          if (
            (!u && !h && !s && t > e) ||
            (s && a && d && !u && !h) ||
            (o && a && d) ||
            (!r && d) ||
            !i
          )
            return 1;
          if (
            (!o && !s && !h && t < e) ||
            (h && r && i && !o && !s) ||
            (u && r && i) ||
            (!a && i) ||
            !d
          )
            return -1;
        }
        return 0;
      };
    },
    85022: function (t, e, r) {
      var n = r(26393);
      t.exports = function (t, e, r) {
        for (
          var o = -1,
            i = t.criteria,
            s = e.criteria,
            a = i.length,
            u = r.length;
          ++o < a;

        ) {
          var d = n(i[o], s[o]);
          if (d) return o >= u ? d : d * ('desc' == r[o] ? -1 : 1);
        }
        return t.index - e.index;
      };
    },
    21463: function (t, e, r) {
      var n = r(5976),
        o = r(16612);
      t.exports = function (t) {
        return n(function (e, r) {
          var n = -1,
            i = r.length,
            s = i > 1 ? r[i - 1] : void 0,
            a = i > 2 ? r[2] : void 0;
          for (
            s = t.length > 3 && 'function' == typeof s ? (i--, s) : void 0,
              a && o(r[0], r[1], a) && ((s = i < 3 ? void 0 : s), (i = 1)),
              e = Object(e);
            ++n < i;

          ) {
            var u = r[n];
            u && t(e, u, n, s);
          }
          return e;
        });
      };
    },
    99291: function (t, e, r) {
      var n = r(98612);
      t.exports = function (t, e) {
        return function (r, o) {
          if (null == r) return r;
          if (!n(r)) return t(r, o);
          for (
            var i = r.length, s = e ? i : -1, a = Object(r);
            (e ? s-- : ++s < i) && !1 !== o(a[s], s, a);

          );
          return r;
        };
      };
    },
    25063: function (t) {
      t.exports = function (t) {
        return function (e, r, n) {
          for (var o = -1, i = Object(e), s = n(e), a = s.length; a--; ) {
            var u = s[t ? a : ++o];
            if (!1 === r(i[u], u, i)) break;
          }
          return e;
        };
      };
    },
    67740: function (t, e, r) {
      var n = r(67206),
        o = r(98612),
        i = r(3674);
      t.exports = function (t) {
        return function (e, r, s) {
          var a = Object(e);
          if (!o(e)) {
            var u = n(r, 3);
            (e = i(e)),
              (r = function (t) {
                return u(a[t], t, a);
              });
          }
          var d = t(e, r, s);
          return d > -1 ? a[u ? e[d] : d] : void 0;
        };
      };
    },
    47445: function (t, e, r) {
      var n = r(40098),
        o = r(16612),
        i = r(18601);
      t.exports = function (t) {
        return function (e, r, s) {
          return (
            s && 'number' != typeof s && o(e, r, s) && (r = s = void 0),
            (e = i(e)),
            void 0 === r ? ((r = e), (e = 0)) : (r = i(r)),
            (s = void 0 === s ? (e < r ? 1 : -1) : i(s)),
            n(e, r, s, t)
          );
        };
      };
    },
    23593: function (t, e, r) {
      var n = r(58525),
        o = r(28117),
        i = r(21814),
        s =
          n && 1 / i(new n([, -0]))[1] == 1 / 0
            ? function (t) {
                return new n(t);
              }
            : o;
      t.exports = s;
    },
    1499: function (t, e, r) {
      var n = r(89162),
        o = r(3674);
      t.exports = function (t) {
        for (var e = o(t), r = e.length; r--; ) {
          var i = e[r],
            s = t[i];
          e[r] = [i, s, n(s)];
        }
        return e;
      };
    },
    222: function (t, e, r) {
      var n = r(71811),
        o = r(35694),
        i = r(1469),
        s = r(65776),
        a = r(41780),
        u = r(40327);
      t.exports = function (t, e, r) {
        for (var d = -1, h = (e = n(e, t)).length, c = !1; ++d < h; ) {
          var l = u(e[d]);
          if (!(c = null != t && r(t, l))) break;
          t = t[l];
        }
        return c || ++d != h
          ? c
          : !!(h = null == t ? 0 : t.length) &&
              a(h) &&
              s(l, h) &&
              (i(t) || o(t));
      };
    },
    16612: function (t, e, r) {
      var n = r(77813),
        o = r(98612),
        i = r(65776),
        s = r(13218);
      t.exports = function (t, e, r) {
        if (!s(r)) return !1;
        var a = typeof e;
        return (
          !!('number' == a
            ? o(r) && i(e, r.length)
            : 'string' == a && e in r) && n(r[e], t)
        );
      };
    },
    89162: function (t, e, r) {
      var n = r(13218);
      t.exports = function (t) {
        return t == t && !n(t);
      };
    },
    42634: function (t) {
      t.exports = function (t, e) {
        return function (r) {
          return null != r && r[t] === e && (void 0 !== e || t in Object(r));
        };
      };
    },
    36390: function (t) {
      t.exports = function (t, e) {
        if (
          ('constructor' !== e || 'function' != typeof t[e]) &&
          '__proto__' != e
        )
          return t[e];
      };
    },
    39375: function (t) {
      t.exports = function (t, e, r) {
        for (var n = r - 1, o = t.length; ++n < o; ) if (t[n] === e) return n;
        return -1;
      };
    },
    88016: function (t, e, r) {
      var n = r(48983),
        o = r(62689),
        i = r(21903);
      t.exports = function (t) {
        return o(t) ? i(t) : n(t);
      };
    },
    21903: function (t) {
      var e = '\\ud800-\\udfff',
        r = '[' + e + ']',
        n = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
        o = '\\ud83c[\\udffb-\\udfff]',
        i = '[^' + e + ']',
        s = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        a = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        u = '(?:' + n + '|' + o + ')' + '?',
        d = '[\\ufe0e\\ufe0f]?',
        h =
          d + u + ('(?:\\u200d(?:' + [i, s, a].join('|') + ')' + d + u + ')*'),
        c = '(?:' + [i + n + '?', n, s, a, r].join('|') + ')',
        l = RegExp(o + '(?=' + o + ')|' + c + h, 'g');
      t.exports = function (t) {
        for (var e = (l.lastIndex = 0); l.test(t); ) ++e;
        return e;
      };
    },
    66678: function (t, e, r) {
      var n = r(85990);
      t.exports = function (t) {
        return n(t, 4);
      };
    },
    50361: function (t, e, r) {
      var n = r(85990);
      t.exports = function (t) {
        return n(t, 5);
      };
    },
    91747: function (t, e, r) {
      var n = r(5976),
        o = r(77813),
        i = r(16612),
        s = r(81704),
        a = Object.prototype,
        u = a.hasOwnProperty,
        d = n(function (t, e) {
          t = Object(t);
          var r = -1,
            n = e.length,
            d = n > 2 ? e[2] : void 0;
          for (d && i(e[0], e[1], d) && (n = 1); ++r < n; )
            for (var h = e[r], c = s(h), l = -1, f = c.length; ++l < f; ) {
              var g = c[l],
                v = t[g];
              (void 0 === v || (o(v, a[g]) && !u.call(t, g))) && (t[g] = h[g]);
            }
          return t;
        });
      t.exports = d;
    },
    66073: function (t, e, r) {
      t.exports = r(84486);
    },
    63105: function (t, e, r) {
      var n = r(34963),
        o = r(80760),
        i = r(67206),
        s = r(1469);
      t.exports = function (t, e) {
        return (s(t) ? n : o)(t, i(e, 3));
      };
    },
    13311: function (t, e, r) {
      var n = r(67740)(r(30998));
      t.exports = n;
    },
    30998: function (t, e, r) {
      var n = r(41848),
        o = r(67206),
        i = r(40554),
        s = Math.max;
      t.exports = function (t, e, r) {
        var a = null == t ? 0 : t.length;
        if (!a) return -1;
        var u = null == r ? 0 : i(r);
        return u < 0 && (u = s(a + u, 0)), n(t, o(e, 3), u);
      };
    },
    84486: function (t, e, r) {
      var n = r(77412),
        o = r(89881),
        i = r(54290),
        s = r(1469);
      t.exports = function (t, e) {
        return (s(t) ? n : o)(t, i(e));
      };
    },
    62620: function (t, e, r) {
      var n = r(28483),
        o = r(54290),
        i = r(81704);
      t.exports = function (t, e) {
        return null == t ? t : n(t, o(e), i);
      };
    },
    18721: function (t, e, r) {
      var n = r(78565),
        o = r(222);
      t.exports = function (t, e) {
        return null != t && o(t, e, n);
      };
    },
    79095: function (t, e, r) {
      var n = r(13),
        o = r(222);
      t.exports = function (t, e) {
        return null != t && o(t, e, n);
      };
    },
    29246: function (t, e, r) {
      var n = r(98612),
        o = r(37005);
      t.exports = function (t) {
        return o(t) && n(t);
      };
    },
    41609: function (t, e, r) {
      var n = r(280),
        o = r(64160),
        i = r(35694),
        s = r(1469),
        a = r(98612),
        u = r(44144),
        d = r(25726),
        h = r(36719),
        c = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (null == t) return !0;
        if (
          a(t) &&
          (s(t) ||
            'string' == typeof t ||
            'function' == typeof t.splice ||
            u(t) ||
            h(t) ||
            i(t))
        )
          return !t.length;
        var e = o(t);
        if ('[object Map]' == e || '[object Set]' == e) return !t.size;
        if (d(t)) return !n(t).length;
        for (var r in t) if (c.call(t, r)) return !1;
        return !0;
      };
    },
    52353: function (t) {
      t.exports = function (t) {
        return void 0 === t;
      };
    },
    35161: function (t, e, r) {
      var n = r(29932),
        o = r(67206),
        i = r(69199),
        s = r(1469);
      t.exports = function (t, e) {
        return (s(t) ? n : i)(t, o(e, 3));
      };
    },
    6162: function (t, e, r) {
      var n = r(56029),
        o = r(53325),
        i = r(6557);
      t.exports = function (t) {
        return t && t.length ? n(t, i, o) : void 0;
      };
    },
    82492: function (t, e, r) {
      var n = r(42980),
        o = r(21463)(function (t, e, r) {
          n(t, e, r);
        });
      t.exports = o;
    },
    53632: function (t, e, r) {
      var n = r(56029),
        o = r(70433),
        i = r(6557);
      t.exports = function (t) {
        return t && t.length ? n(t, i, o) : void 0;
      };
    },
    22762: function (t, e, r) {
      var n = r(56029),
        o = r(67206),
        i = r(70433);
      t.exports = function (t, e) {
        return t && t.length ? n(t, o(e, 2), i) : void 0;
      };
    },
    28117: function (t) {
      t.exports = function () {};
    },
    78718: function (t, e, r) {
      var n = r(25970),
        o = r(92129)(function (t, e) {
          return null == t ? {} : n(t, e);
        });
      t.exports = o;
    },
    39601: function (t, e, r) {
      var n = r(40371),
        o = r(79152),
        i = r(15403),
        s = r(40327);
      t.exports = function (t) {
        return i(t) ? n(s(t)) : o(t);
      };
    },
    96026: function (t, e, r) {
      var n = r(47445)();
      t.exports = n;
    },
    54061: function (t, e, r) {
      var n = r(62663),
        o = r(89881),
        i = r(67206),
        s = r(10107),
        a = r(1469);
      t.exports = function (t, e, r) {
        var u = a(t) ? n : s,
          d = arguments.length < 3;
        return u(t, i(e, 4), r, d, o);
      };
    },
    84238: function (t, e, r) {
      var n = r(280),
        o = r(64160),
        i = r(98612),
        s = r(47037),
        a = r(88016);
      t.exports = function (t) {
        if (null == t) return 0;
        if (i(t)) return s(t) ? a(t) : t.length;
        var e = o(t);
        return '[object Map]' == e || '[object Set]' == e
          ? t.size
          : n(t).length;
      };
    },
    89734: function (t, e, r) {
      var n = r(21078),
        o = r(82689),
        i = r(5976),
        s = r(16612),
        a = i(function (t, e) {
          if (null == t) return [];
          var r = e.length;
          return (
            r > 1 && s(t, e[0], e[1])
              ? (e = [])
              : r > 2 && s(e[0], e[1], e[2]) && (e = [e[0]]),
            o(t, n(e, 1), [])
          );
        });
      t.exports = a;
    },
    18601: function (t, e, r) {
      var n = r(14841),
        o = 1 / 0;
      t.exports = function (t) {
        return t
          ? (t = n(t)) === o || t === -1 / 0
            ? 17976931348623157e292 * (t < 0 ? -1 : 1)
            : t == t
              ? t
              : 0
          : 0 === t
            ? t
            : 0;
      };
    },
    40554: function (t, e, r) {
      var n = r(18601);
      t.exports = function (t) {
        var e = n(t),
          r = e % 1;
        return e == e ? (r ? e - r : e) : 0;
      };
    },
    59881: function (t, e, r) {
      var n = r(98363),
        o = r(81704);
      t.exports = function (t) {
        return n(t, o(t));
      };
    },
    68718: function (t, e, r) {
      var n = r(77412),
        o = r(3118),
        i = r(47816),
        s = r(67206),
        a = r(85924),
        u = r(1469),
        d = r(44144),
        h = r(23560),
        c = r(13218),
        l = r(36719);
      t.exports = function (t, e, r) {
        var f = u(t),
          g = f || d(t) || l(t);
        if (((e = s(e, 4)), null == r)) {
          var v = t && t.constructor;
          r = g ? (f ? new v() : []) : c(t) && h(v) ? o(a(t)) : {};
        }
        return (
          (g ? n : i)(t, function (t, n, o) {
            return e(r, t, n, o);
          }),
          r
        );
      };
    },
    93386: function (t, e, r) {
      var n = r(21078),
        o = r(5976),
        i = r(45652),
        s = r(29246),
        a = o(function (t) {
          return i(n(t, 1, s, !0));
        });
      t.exports = a;
    },
    60835: function (t, e, r) {
      var n = r(79833),
        o = 0;
      t.exports = function (t) {
        var e = ++o;
        return n(t) + e;
      };
    },
    52628: function (t, e, r) {
      var n = r(47415),
        o = r(3674);
      t.exports = function (t) {
        return null == t ? [] : n(t, o(t));
      };
    },
    7287: function (t, e, r) {
      var n = r(34865),
        o = r(1757);
      t.exports = function (t, e) {
        return o(t || [], e || [], n);
      };
    },
    75823: function (t, e, r) {
      'use strict';
      r.r(e),
        r.d(e, {
          default: function () {
            return o;
          },
        });
      var n = r(44091);
      function o(t) {
        var e,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(0, n.isAnyArray)(t))
          throw new TypeError('input must be an array');
        if (0 === t.length) throw new TypeError('input must not be empty');
        if (void 0 !== r.output) {
          if (!(0, n.isAnyArray)(r.output))
            throw new TypeError('output option must be an array if specified');
          e = r.output;
        } else e = new Array(t.length);
        var o = (function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if (!(0, n.isAnyArray)(t))
              throw new TypeError('input must be an array');
            if (0 === t.length) throw new TypeError('input must not be empty');
            var r = e.fromIndex,
              o = void 0 === r ? 0 : r,
              i = e.toIndex,
              s = void 0 === i ? t.length : i;
            if (o < 0 || o >= t.length || !Number.isInteger(o))
              throw new Error(
                'fromIndex must be a positive integer smaller than length',
              );
            if (s <= o || s > t.length || !Number.isInteger(s))
              throw new Error(
                'toIndex must be an integer greater than fromIndex and at most equal to length',
              );
            for (var a = t[o], u = o + 1; u < s; u++) t[u] < a && (a = t[u]);
            return a;
          })(t),
          i = (function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if (!(0, n.isAnyArray)(t))
              throw new TypeError('input must be an array');
            if (0 === t.length) throw new TypeError('input must not be empty');
            var r = e.fromIndex,
              o = void 0 === r ? 0 : r,
              i = e.toIndex,
              s = void 0 === i ? t.length : i;
            if (o < 0 || o >= t.length || !Number.isInteger(o))
              throw new Error(
                'fromIndex must be a positive integer smaller than length',
              );
            if (s <= o || s > t.length || !Number.isInteger(s))
              throw new Error(
                'toIndex must be an integer greater than fromIndex and at most equal to length',
              );
            for (var a = t[o], u = o + 1; u < s; u++) t[u] > a && (a = t[u]);
            return a;
          })(t);
        if (o === i)
          throw new RangeError(
            'minimum and maximum input values are equal. Cannot rescale a constant array',
          );
        var s = r.min,
          a = void 0 === s ? (r.autoMinMax ? o : 0) : s,
          u = r.max,
          d = void 0 === u ? (r.autoMinMax ? i : 1) : u;
        if (a >= d)
          throw new RangeError('min option must be smaller than max option');
        for (var h = (d - a) / (i - o), c = 0; c < t.length; c++)
          e[c] = (t[c] - o) * h + a;
        return e;
      }
    },
    25098: function (t) {
      (t.exports = function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    97235: function (t) {
      (t.exports = function (t, e) {
        if (e.has(t))
          throw new TypeError(
            'Cannot initialize the same private elements twice on an object',
          );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    30480: function (t) {
      (t.exports = function (t, e) {
        return e.get ? e.get.call(t) : e.value;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    40008: function (t) {
      (t.exports = function (t, e, r) {
        if (e.set) e.set.call(t, r);
        else {
          if (!e.writable)
            throw new TypeError('attempted to set read only private field');
          e.value = r;
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    56194: function (t) {
      (t.exports = function (t, e, r) {
        if (!e.has(t))
          throw new TypeError(
            'attempted to ' + r + ' private field on non-instance',
          );
        return e.get(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    33862: function (t, e, r) {
      var n = r(30480),
        o = r(56194);
      (t.exports = function (t, e) {
        var r = o(t, e, 'get');
        return n(t, r);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    29777: function (t, e, r) {
      var n = r(97235);
      (t.exports = function (t, e, r) {
        n(t, e), e.set(t, r);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    25457: function (t, e, r) {
      var n = r(40008),
        o = r(56194);
      (t.exports = function (t, e, r) {
        var i = o(t, e, 'set');
        return n(t, i, r), r;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    74978: function (t) {
      (t.exports = function (t, e, r) {
        if (!e.has(t))
          throw new TypeError('attempted to get private field on non-instance');
        return r;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    80363: function (t, e, r) {
      var n = r(97235);
      (t.exports = function (t, e) {
        n(t, e), e.add(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    26037: function (t, e, r) {
      var n = r(48374),
        o = r(21771),
        i = r(73408);
      (t.exports = function (t) {
        var e = o();
        return function () {
          var r,
            o = n(t);
          if (e) {
            var s = n(this).constructor;
            r = Reflect.construct(o, arguments, s);
          } else r = o.apply(this, arguments);
          return i(this, r);
        };
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    28785: function (t, e, r) {
      var n = r(70426);
      function o() {
        return (
          'undefined' != typeof Reflect && Reflect.get
            ? ((t.exports = o = Reflect.get.bind()),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports))
            : ((t.exports = o =
                function (t, e, r) {
                  var o = n(t, e);
                  if (o) {
                    var i = Object.getOwnPropertyDescriptor(o, e);
                    return i.get
                      ? i.get.call(arguments.length < 3 ? t : r)
                      : i.value;
                  }
                }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports)),
          o.apply(this, arguments)
        );
      }
      (t.exports = o),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    48374: function (t) {
      function e(r) {
        return (
          (t.exports = e =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          e(r)
        );
      }
      (t.exports = e),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    31996: function (t, e, r) {
      var n = r(21314);
      (t.exports = function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          e && n(t, e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    21771: function (t) {
      (t.exports = function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    73408: function (t, e, r) {
      var n = r(52677).default,
        o = r(25098);
      (t.exports = function (t, e) {
        if (e && ('object' === n(e) || 'function' == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          );
        return o(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    21314: function (t) {
      function e(r, n) {
        return (
          (t.exports = e =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          e(r, n)
        );
      }
      (t.exports = e),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    70426: function (t, e, r) {
      var n = r(48374);
      (t.exports = function (t, e) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = n(t));

        );
        return t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    32014: function (t, e, r) {
      'use strict';
      r.d(e, {
        Sc: function () {
          return i;
        },
        y3: function () {
          return o;
        },
      });
      var n = r(49612),
        o = (n.XA, n.a_, n.yQ, n.Hs, n.Ec, n.dx, n.LU, n.Rm, n.y3),
        i =
          (n.qK,
          n.pb,
          n.j,
          n.sO,
          n.BZ,
          n.EK,
          n.Db,
          n.Fx,
          n.tU,
          n.Ym,
          n.rs,
          n.QR,
          n.TB,
          n.oH,
          n.Sc);
      n.BN,
        n.it,
        n.$r,
        n.QM,
        n.AV,
        n.y3,
        n.y3,
        n.GH,
        n.SO,
        n.uZ,
        n.yU,
        n.F1,
        n.re;
    },
    33953: function (t, e, r) {
      'use strict';
      function n(t, e, r, n, o) {
        if (isNaN(e) || isNaN(r) || isNaN(n)) return t;
        var i,
          s,
          a,
          u,
          d,
          h,
          c,
          l,
          f,
          g,
          v,
          p,
          m = t._root,
          y = { data: o },
          w = t._x0,
          x = t._y0,
          b = t._z0,
          E = t._x1,
          N = t._y1,
          M = t._z1;
        if (!m) return (t._root = y), t;
        for (; m.length; )
          if (
            ((l = e >= (s = (w + E) / 2)) ? (w = s) : (E = s),
            (f = r >= (a = (x + N) / 2)) ? (x = a) : (N = a),
            (g = n >= (u = (b + M) / 2)) ? (b = u) : (M = u),
            (i = m),
            !(m = m[(v = (g << 2) | (f << 1) | l)]))
          )
            return (i[v] = y), t;
        if (
          ((d = +t._x.call(null, m.data)),
          (h = +t._y.call(null, m.data)),
          (c = +t._z.call(null, m.data)),
          e === d && r === h && n === c)
        )
          return (y.next = m), i ? (i[v] = y) : (t._root = y), t;
        do {
          (i = i ? (i[v] = new Array(8)) : (t._root = new Array(8))),
            (l = e >= (s = (w + E) / 2)) ? (w = s) : (E = s),
            (f = r >= (a = (x + N) / 2)) ? (x = a) : (N = a),
            (g = n >= (u = (b + M) / 2)) ? (b = u) : (M = u);
        } while (
          (v = (g << 2) | (f << 1) | l) ==
          (p = ((c >= u) << 2) | ((h >= a) << 1) | (d >= s))
        );
        return (i[p] = m), (i[v] = y), t;
      }
      function o(t, e, r, n, o, i, s) {
        (this.node = t),
          (this.x0 = e),
          (this.y0 = r),
          (this.z0 = n),
          (this.x1 = o),
          (this.y1 = i),
          (this.z1 = s);
      }
      function i(t) {
        return t[0];
      }
      function s(t) {
        return t[1];
      }
      function a(t) {
        return t[2];
      }
      function u(t, e, r, n) {
        var o = new d(
          null == e ? i : e,
          null == r ? s : r,
          null == n ? a : n,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
        );
        return null == t ? o : o.addAll(t);
      }
      function d(t, e, r, n, o, i, s, a, u) {
        (this._x = t),
          (this._y = e),
          (this._z = r),
          (this._x0 = n),
          (this._y0 = o),
          (this._z0 = i),
          (this._x1 = s),
          (this._y1 = a),
          (this._z1 = u),
          (this._root = void 0);
      }
      function h(t) {
        for (var e = { data: t.data }, r = e; (t = t.next); )
          r = r.next = { data: t.data };
        return e;
      }
      r.d(e, {
        Z: function () {
          return u;
        },
      });
      var c = (u.prototype = d.prototype);
      (c.copy = function () {
        var t,
          e,
          r = new d(
            this._x,
            this._y,
            this._z,
            this._x0,
            this._y0,
            this._z0,
            this._x1,
            this._y1,
            this._z1,
          ),
          n = this._root;
        if (!n) return r;
        if (!n.length) return (r._root = h(n)), r;
        for (
          t = [{ source: n, target: (r._root = new Array(8)) }];
          (n = t.pop());

        )
          for (var o = 0; o < 8; ++o)
            (e = n.source[o]) &&
              (e.length
                ? t.push({ source: e, target: (n.target[o] = new Array(8)) })
                : (n.target[o] = h(e)));
        return r;
      }),
        (c.add = function (t) {
          const e = +this._x.call(null, t),
            r = +this._y.call(null, t),
            o = +this._z.call(null, t);
          return n(this.cover(e, r, o), e, r, o, t);
        }),
        (c.addAll = function (t) {
          Array.isArray(t) || (t = Array.from(t));
          const e = t.length,
            r = new Float64Array(e),
            o = new Float64Array(e),
            i = new Float64Array(e);
          let s = 1 / 0,
            a = 1 / 0,
            u = 1 / 0,
            d = -1 / 0,
            h = -1 / 0,
            c = -1 / 0;
          for (let n, l, f, g, v = 0; v < e; ++v)
            isNaN((l = +this._x.call(null, (n = t[v])))) ||
              isNaN((f = +this._y.call(null, n))) ||
              isNaN((g = +this._z.call(null, n))) ||
              ((r[v] = l),
              (o[v] = f),
              (i[v] = g),
              l < s && (s = l),
              l > d && (d = l),
              f < a && (a = f),
              f > h && (h = f),
              g < u && (u = g),
              g > c && (c = g));
          if (s > d || a > h || u > c) return this;
          this.cover(s, a, u).cover(d, h, c);
          for (let s = 0; s < e; ++s) n(this, r[s], o[s], i[s], t[s]);
          return this;
        }),
        (c.cover = function (t, e, r) {
          if (isNaN((t = +t)) || isNaN((e = +e)) || isNaN((r = +r)))
            return this;
          var n = this._x0,
            o = this._y0,
            i = this._z0,
            s = this._x1,
            a = this._y1,
            u = this._z1;
          if (isNaN(n))
            (s = (n = Math.floor(t)) + 1),
              (a = (o = Math.floor(e)) + 1),
              (u = (i = Math.floor(r)) + 1);
          else {
            for (
              var d, h, c = s - n || 1, l = this._root;
              n > t || t >= s || o > e || e >= a || i > r || r >= u;

            )
              switch (
                ((h = ((r < i) << 2) | ((e < o) << 1) | (t < n)),
                ((d = new Array(8))[h] = l),
                (l = d),
                (c *= 2),
                h)
              ) {
                case 0:
                  (s = n + c), (a = o + c), (u = i + c);
                  break;
                case 1:
                  (n = s - c), (a = o + c), (u = i + c);
                  break;
                case 2:
                  (s = n + c), (o = a - c), (u = i + c);
                  break;
                case 3:
                  (n = s - c), (o = a - c), (u = i + c);
                  break;
                case 4:
                  (s = n + c), (a = o + c), (i = u - c);
                  break;
                case 5:
                  (n = s - c), (a = o + c), (i = u - c);
                  break;
                case 6:
                  (s = n + c), (o = a - c), (i = u - c);
                  break;
                case 7:
                  (n = s - c), (o = a - c), (i = u - c);
              }
            this._root && this._root.length && (this._root = l);
          }
          return (
            (this._x0 = n),
            (this._y0 = o),
            (this._z0 = i),
            (this._x1 = s),
            (this._y1 = a),
            (this._z1 = u),
            this
          );
        }),
        (c.data = function () {
          var t = [];
          return (
            this.visit(function (e) {
              if (!e.length)
                do {
                  t.push(e.data);
                } while ((e = e.next));
            }),
            t
          );
        }),
        (c.extent = function (t) {
          return arguments.length
            ? this.cover(+t[0][0], +t[0][1], +t[0][2]).cover(
                +t[1][0],
                +t[1][1],
                +t[1][2],
              )
            : isNaN(this._x0)
              ? void 0
              : [
                  [this._x0, this._y0, this._z0],
                  [this._x1, this._y1, this._z1],
                ];
        }),
        (c.find = function (t, e, r, n) {
          var i,
            s,
            a,
            u,
            d,
            h,
            c,
            l,
            f,
            g = this._x0,
            v = this._y0,
            p = this._z0,
            m = this._x1,
            y = this._y1,
            w = this._z1,
            x = [],
            b = this._root;
          for (
            b && x.push(new o(b, g, v, p, m, y, w)),
              null == n
                ? (n = 1 / 0)
                : ((g = t - n),
                  (v = e - n),
                  (p = r - n),
                  (m = t + n),
                  (y = e + n),
                  (w = r + n),
                  (n *= n));
            (l = x.pop());

          )
            if (
              !(
                !(b = l.node) ||
                (s = l.x0) > m ||
                (a = l.y0) > y ||
                (u = l.z0) > w ||
                (d = l.x1) < g ||
                (h = l.y1) < v ||
                (c = l.z1) < p
              )
            )
              if (b.length) {
                var E = (s + d) / 2,
                  N = (a + h) / 2,
                  M = (u + c) / 2;
                x.push(
                  new o(b[7], E, N, M, d, h, c),
                  new o(b[6], s, N, M, E, h, c),
                  new o(b[5], E, a, M, d, N, c),
                  new o(b[4], s, a, M, E, N, c),
                  new o(b[3], E, N, u, d, h, M),
                  new o(b[2], s, N, u, E, h, M),
                  new o(b[1], E, a, u, d, N, M),
                  new o(b[0], s, a, u, E, N, M),
                ),
                  (f = ((r >= M) << 2) | ((e >= N) << 1) | (t >= E)) &&
                    ((l = x[x.length - 1]),
                    (x[x.length - 1] = x[x.length - 1 - f]),
                    (x[x.length - 1 - f] = l));
              } else {
                var k = t - +this._x.call(null, b.data),
                  _ = e - +this._y.call(null, b.data),
                  S = r - +this._z.call(null, b.data),
                  A = k * k + _ * _ + S * S;
                if (A < n) {
                  var O = Math.sqrt((n = A));
                  (g = t - O),
                    (v = e - O),
                    (p = r - O),
                    (m = t + O),
                    (y = e + O),
                    (w = r + O),
                    (i = b.data);
                }
              }
          return i;
        }),
        (c.remove = function (t) {
          if (
            isNaN((i = +this._x.call(null, t))) ||
            isNaN((s = +this._y.call(null, t))) ||
            isNaN((a = +this._z.call(null, t)))
          )
            return this;
          var e,
            r,
            n,
            o,
            i,
            s,
            a,
            u,
            d,
            h,
            c,
            l,
            f,
            g,
            v,
            p = this._root,
            m = this._x0,
            y = this._y0,
            w = this._z0,
            x = this._x1,
            b = this._y1,
            E = this._z1;
          if (!p) return this;
          if (p.length)
            for (;;) {
              if (
                ((c = i >= (u = (m + x) / 2)) ? (m = u) : (x = u),
                (l = s >= (d = (y + b) / 2)) ? (y = d) : (b = d),
                (f = a >= (h = (w + E) / 2)) ? (w = h) : (E = h),
                (e = p),
                !(p = p[(g = (f << 2) | (l << 1) | c)]))
              )
                return this;
              if (!p.length) break;
              (e[(g + 1) & 7] ||
                e[(g + 2) & 7] ||
                e[(g + 3) & 7] ||
                e[(g + 4) & 7] ||
                e[(g + 5) & 7] ||
                e[(g + 6) & 7] ||
                e[(g + 7) & 7]) &&
                ((r = e), (v = g));
            }
          for (; p.data !== t; ) if (((n = p), !(p = p.next))) return this;
          return (
            (o = p.next) && delete p.next,
            n
              ? (o ? (n.next = o) : delete n.next, this)
              : e
                ? (o ? (e[g] = o) : delete e[g],
                  (p =
                    e[0] ||
                    e[1] ||
                    e[2] ||
                    e[3] ||
                    e[4] ||
                    e[5] ||
                    e[6] ||
                    e[7]) &&
                    p ===
                      (e[7] ||
                        e[6] ||
                        e[5] ||
                        e[4] ||
                        e[3] ||
                        e[2] ||
                        e[1] ||
                        e[0]) &&
                    !p.length &&
                    (r ? (r[v] = p) : (this._root = p)),
                  this)
                : ((this._root = o), this)
          );
        }),
        (c.removeAll = function (t) {
          for (var e = 0, r = t.length; e < r; ++e) this.remove(t[e]);
          return this;
        }),
        (c.root = function () {
          return this._root;
        }),
        (c.size = function () {
          var t = 0;
          return (
            this.visit(function (e) {
              if (!e.length)
                do {
                  ++t;
                } while ((e = e.next));
            }),
            t
          );
        }),
        (c.visit = function (t) {
          var e,
            r,
            n,
            i,
            s,
            a,
            u,
            d,
            h = [],
            c = this._root;
          for (
            c &&
            h.push(
              new o(
                c,
                this._x0,
                this._y0,
                this._z0,
                this._x1,
                this._y1,
                this._z1,
              ),
            );
            (e = h.pop());

          )
            if (
              !t(
                (c = e.node),
                (n = e.x0),
                (i = e.y0),
                (s = e.z0),
                (a = e.x1),
                (u = e.y1),
                (d = e.z1),
              ) &&
              c.length
            ) {
              var l = (n + a) / 2,
                f = (i + u) / 2,
                g = (s + d) / 2;
              (r = c[7]) && h.push(new o(r, l, f, g, a, u, d)),
                (r = c[6]) && h.push(new o(r, n, f, g, l, u, d)),
                (r = c[5]) && h.push(new o(r, l, i, g, a, f, d)),
                (r = c[4]) && h.push(new o(r, n, i, g, l, f, d)),
                (r = c[3]) && h.push(new o(r, l, f, s, a, u, g)),
                (r = c[2]) && h.push(new o(r, n, f, s, l, u, g)),
                (r = c[1]) && h.push(new o(r, l, i, s, a, f, g)),
                (r = c[0]) && h.push(new o(r, n, i, s, l, f, g));
            }
          return this;
        }),
        (c.visitAfter = function (t) {
          var e,
            r = [],
            n = [];
          for (
            this._root &&
            r.push(
              new o(
                this._root,
                this._x0,
                this._y0,
                this._z0,
                this._x1,
                this._y1,
                this._z1,
              ),
            );
            (e = r.pop());

          ) {
            var i = e.node;
            if (i.length) {
              var s,
                a = e.x0,
                u = e.y0,
                d = e.z0,
                h = e.x1,
                c = e.y1,
                l = e.z1,
                f = (a + h) / 2,
                g = (u + c) / 2,
                v = (d + l) / 2;
              (s = i[0]) && r.push(new o(s, a, u, d, f, g, v)),
                (s = i[1]) && r.push(new o(s, f, u, d, h, g, v)),
                (s = i[2]) && r.push(new o(s, a, g, d, f, c, v)),
                (s = i[3]) && r.push(new o(s, f, g, d, h, c, v)),
                (s = i[4]) && r.push(new o(s, a, u, v, f, g, l)),
                (s = i[5]) && r.push(new o(s, f, u, v, h, g, l)),
                (s = i[6]) && r.push(new o(s, a, g, v, f, c, l)),
                (s = i[7]) && r.push(new o(s, f, g, v, h, c, l));
            }
            n.push(e);
          }
          for (; (e = n.pop()); ) t(e.node, e.x0, e.y0, e.z0, e.x1, e.y1, e.z1);
          return this;
        }),
        (c.x = function (t) {
          return arguments.length ? ((this._x = t), this) : this._x;
        }),
        (c.y = function (t) {
          return arguments.length ? ((this._y = t), this) : this._y;
        }),
        (c.z = function (t) {
          return arguments.length ? ((this._z = t), this) : this._z;
        });
    },
  },
]);
//# sourceMappingURL=3478.ae8f0689.async.js.map
