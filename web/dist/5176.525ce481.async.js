'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [5176],
  {
    20364: function (t, e, s) {
      s.d(e, {
        r: function () {
          return v;
        },
      });
      var r = s(62435),
        i = s(67112);
      s(86074);
      function n() {
        let t = !1;
        return {
          clearReset: () => {
            t = !1;
          },
          reset: () => {
            t = !0;
          },
          isReset: () => t,
        };
      }
      var u = r.createContext(n()),
        o = () => r.useContext(u),
        a = s(30202),
        c = r.createContext(!1),
        h = () => r.useContext(c),
        l = (c.Provider, s(86290)),
        d = (t, e) => {
          (t.suspense || t.throwOnError) &&
            (e.isReset() || (t.retryOnMount = !1));
        },
        p = (t) => {
          r.useEffect(() => {
            t.clearReset();
          }, [t]);
        },
        f = ({ result: t, errorResetBoundary: e, throwOnError: s, query: r }) =>
          t.isError &&
          !e.isReset() &&
          !t.isFetching &&
          r &&
          (0, l.L)(s, [t.error, r]),
        y = (t) => {
          t.suspense && 'number' != typeof t.staleTime && (t.staleTime = 1e3);
        },
        R = (t, e) => t?.suspense && e.isPending,
        b = (t, e, s) =>
          e.fetchOptimistic(t).catch(() => {
            s.clearReset();
          });
      function v(t, e, s) {
        const n = (0, a.NL)(s),
          u = h(),
          c = o(),
          l = n.defaultQueryOptions(t);
        n.getDefaultOptions().queries?._experimental_beforeQuery?.(l),
          (l._optimisticResults = u ? 'isRestoring' : 'optimistic'),
          y(l),
          d(l, c),
          p(c);
        const [v] = r.useState(() => new e(n, l)),
          m = v.getOptimisticResult(l);
        if (
          (r.useSyncExternalStore(
            r.useCallback(
              (t) => {
                const e = u ? () => {} : v.subscribe(i.V.batchCalls(t));
                return v.updateResult(), e;
              },
              [v, u],
            ),
            () => v.getCurrentResult(),
            () => v.getCurrentResult(),
          ),
          r.useEffect(() => {
            v.setOptions(l, { listeners: !1 });
          }, [l, v]),
          R(l, m))
        )
          throw b(l, v, c);
        if (
          f({
            result: m,
            errorResetBoundary: c,
            throwOnError: l.throwOnError,
            query: n.getQueryCache().get(l.queryHash),
          })
        )
          throw m.error;
        return (
          n.getDefaultOptions().queries?._experimental_afterQuery?.(l, m),
          l.notifyOnChangeProps ? m : v.trackResult(m)
        );
      }
    },
    4527: function (t, e, s) {
      s.d(e, {
        D: function () {
          return l;
        },
      });
      var r = s(62435),
        i = s(79063),
        n = s(67112),
        u = s(64254),
        o = s(44493),
        a = class extends u.l {
          #t;
          #e = void 0;
          #s;
          #r;
          constructor(t, e) {
            super(),
              (this.#t = t),
              this.setOptions(e),
              this.bindMethods(),
              this.#i();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(t) {
            const e = this.options;
            (this.options = this.#t.defaultMutationOptions(t)),
              (0, o.VS)(this.options, e) ||
                this.#t
                  .getMutationCache()
                  .notify({
                    type: 'observerOptionsUpdated',
                    mutation: this.#s,
                    observer: this,
                  }),
              e?.mutationKey &&
              this.options.mutationKey &&
              (0, o.Ym)(e.mutationKey) !== (0, o.Ym)(this.options.mutationKey)
                ? this.reset()
                : 'pending' === this.#s?.state.status &&
                  this.#s.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#s?.removeObserver(this);
          }
          onMutationUpdate(t) {
            this.#i(), this.#n(t);
          }
          getCurrentResult() {
            return this.#e;
          }
          reset() {
            this.#s?.removeObserver(this),
              (this.#s = void 0),
              this.#i(),
              this.#n();
          }
          mutate(t, e) {
            return (
              (this.#r = e),
              this.#s?.removeObserver(this),
              (this.#s = this.#t
                .getMutationCache()
                .build(this.#t, this.options)),
              this.#s.addObserver(this),
              this.#s.execute(t)
            );
          }
          #i() {
            const t = this.#s?.state ?? (0, i.R)();
            this.#e = {
              ...t,
              isPending: 'pending' === t.status,
              isSuccess: 'success' === t.status,
              isError: 'error' === t.status,
              isIdle: 'idle' === t.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #n(t) {
            n.V.batch(() => {
              if (this.#r && this.hasListeners()) {
                const e = this.#e.variables,
                  s = this.#e.context;
                'success' === t?.type
                  ? (this.#r.onSuccess?.(t.data, e, s),
                    this.#r.onSettled?.(t.data, null, e, s))
                  : 'error' === t?.type &&
                    (this.#r.onError?.(t.error, e, s),
                    this.#r.onSettled?.(void 0, t.error, e, s));
              }
              this.listeners.forEach((t) => {
                t(this.#e);
              });
            });
          }
        },
        c = s(30202),
        h = s(86290);
      function l(t, e) {
        const s = (0, c.NL)(e),
          [i] = r.useState(() => new a(s, t));
        r.useEffect(() => {
          i.setOptions(t);
        }, [i, t]);
        const u = r.useSyncExternalStore(
            r.useCallback((t) => i.subscribe(n.V.batchCalls(t)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult(),
          ),
          o = r.useCallback(
            (t, e) => {
              i.mutate(t, e).catch(h.Z);
            },
            [i],
          );
        if (u.error && (0, h.L)(i.options.throwOnError, [u.error]))
          throw u.error;
        return { ...u, mutate: o, mutateAsync: u.mutate };
      }
    },
    78551: function (t, e, s) {
      s.d(e, {
        a: function () {
          return n;
        },
      });
      var r = s(4447),
        i = s(20364);
      function n(t, e) {
        return (0, i.r)(t, r.z, e);
      }
    },
    86290: function (t, e, s) {
      function r(t, e) {
        return 'function' == typeof t ? t(...e) : !!t;
      }
      function i() {}
      s.d(e, {
        L: function () {
          return r;
        },
        Z: function () {
          return i;
        },
      });
    },
    4447: function (t, e, s) {
      s.d(e, {
        z: function () {
          return a;
        },
      });
      var r = s(44493),
        i = s(67112),
        n = s(68801),
        u = s(64254),
        o = s(69648),
        a = class extends u.l {
          constructor(t, e) {
            super(),
              (this.options = e),
              (this.#t = t),
              (this.#u = null),
              this.bindMethods(),
              this.setOptions(e);
          }
          #t;
          #o = void 0;
          #a = void 0;
          #e = void 0;
          #c;
          #h;
          #u;
          #l;
          #d;
          #p;
          #f;
          #y;
          #R;
          #b = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#o.addObserver(this),
              c(this.#o, this.options) ? this.#v() : this.updateResult(),
              this.#m());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return h(this.#o, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return h(this.#o, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#O(),
              this.#Q(),
              this.#o.removeObserver(this);
          }
          setOptions(t, e) {
            const s = this.options,
              i = this.#o;
            if (
              ((this.options = this.#t.defaultQueryOptions(t)),
              void 0 !== this.options.enabled &&
                'boolean' != typeof this.options.enabled &&
                'function' != typeof this.options.enabled &&
                'boolean' != typeof (0, r.Nc)(this.options.enabled, this.#o))
            )
              throw new Error(
                'Expected enabled to be a boolean or a callback that returns a boolean',
              );
            this.#g(),
              this.#o.setOptions(this.options),
              s._defaulted &&
                !(0, r.VS)(this.options, s) &&
                this.#t
                  .getQueryCache()
                  .notify({
                    type: 'observerOptionsUpdated',
                    query: this.#o,
                    observer: this,
                  });
            const n = this.hasListeners();
            n && l(this.#o, i, this.options, s) && this.#v(),
              this.updateResult(e),
              !n ||
                (this.#o === i &&
                  (0, r.Nc)(this.options.enabled, this.#o) ===
                    (0, r.Nc)(s.enabled, this.#o) &&
                  (0, r.KC)(this.options.staleTime, this.#o) ===
                    (0, r.KC)(s.staleTime, this.#o)) ||
                this.#C();
            const u = this.#I();
            !n ||
              (this.#o === i &&
                (0, r.Nc)(this.options.enabled, this.#o) ===
                  (0, r.Nc)(s.enabled, this.#o) &&
                u === this.#R) ||
              this.#S(u);
          }
          getOptimisticResult(t) {
            const e = this.#t.getQueryCache().build(this.#t, t),
              s = this.createResult(e, t);
            return (
              (function (t, e) {
                if (!(0, r.VS)(t.getCurrentResult(), e)) return !0;
                return !1;
              })(this, s) &&
                ((this.#e = s),
                (this.#h = this.options),
                (this.#c = this.#o.state)),
              s
            );
          }
          getCurrentResult() {
            return this.#e;
          }
          trackResult(t, e) {
            const s = {};
            return (
              Object.keys(t).forEach((r) => {
                Object.defineProperty(s, r, {
                  configurable: !1,
                  enumerable: !0,
                  get: () => (this.trackProp(r), e?.(r), t[r]),
                });
              }),
              s
            );
          }
          trackProp(t) {
            this.#b.add(t);
          }
          getCurrentQuery() {
            return this.#o;
          }
          refetch({ ...t } = {}) {
            return this.fetch({ ...t });
          }
          fetchOptimistic(t) {
            const e = this.#t.defaultQueryOptions(t),
              s = this.#t.getQueryCache().build(this.#t, e);
            return (
              (s.isFetchingOptimistic = !0),
              s.fetch().then(() => this.createResult(s, e))
            );
          }
          fetch(t) {
            return this.#v({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#e),
            );
          }
          #v(t) {
            this.#g();
            let e = this.#o.fetch(this.options, t);
            return t?.throwOnError || (e = e.catch(r.ZT)), e;
          }
          #C() {
            this.#O();
            const t = (0, r.KC)(this.options.staleTime, this.#o);
            if (r.sk || this.#e.isStale || !(0, r.PN)(t)) return;
            const e = (0, r.Kp)(this.#e.dataUpdatedAt, t) + 1;
            this.#f = setTimeout(() => {
              this.#e.isStale || this.updateResult();
            }, e);
          }
          #I() {
            return (
              ('function' == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#o)
                : this.options.refetchInterval) ?? !1
            );
          }
          #S(t) {
            this.#Q(),
              (this.#R = t),
              !r.sk &&
                !1 !== (0, r.Nc)(this.options.enabled, this.#o) &&
                (0, r.PN)(this.#R) &&
                0 !== this.#R &&
                (this.#y = setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    n.j.isFocused()) &&
                    this.#v();
                }, this.#R));
          }
          #m() {
            this.#C(), this.#S(this.#I());
          }
          #O() {
            this.#f && (clearTimeout(this.#f), (this.#f = void 0));
          }
          #Q() {
            this.#y && (clearInterval(this.#y), (this.#y = void 0));
          }
          createResult(t, e) {
            const s = this.#o,
              i = this.options,
              n = this.#e,
              u = this.#c,
              a = this.#h,
              h = t !== s ? t.state : this.#a,
              { state: p } = t;
            let f,
              y = { ...p },
              R = !1;
            if (e._optimisticResults) {
              const r = this.hasListeners(),
                n = !r && c(t, e),
                u = r && l(t, s, e, i);
              (n || u) && (y = { ...y, ...(0, o.z)(p.data, t.options) }),
                'isRestoring' === e._optimisticResults &&
                  (y.fetchStatus = 'idle');
            }
            let { error: b, errorUpdatedAt: v, status: m } = y;
            if (e.select && void 0 !== y.data)
              if (n && y.data === u?.data && e.select === this.#l) f = this.#d;
              else
                try {
                  (this.#l = e.select),
                    (f = e.select(y.data)),
                    (f = (0, r.oE)(n?.data, f, e)),
                    (this.#d = f),
                    (this.#u = null);
                } catch (t) {
                  this.#u = t;
                }
            else f = y.data;
            if (
              void 0 !== e.placeholderData &&
              void 0 === f &&
              'pending' === m
            ) {
              let t;
              if (
                n?.isPlaceholderData &&
                e.placeholderData === a?.placeholderData
              )
                t = n.data;
              else if (
                ((t =
                  'function' == typeof e.placeholderData
                    ? e.placeholderData(this.#p?.state.data, this.#p)
                    : e.placeholderData),
                e.select && void 0 !== t)
              )
                try {
                  (t = e.select(t)), (this.#u = null);
                } catch (t) {
                  this.#u = t;
                }
              void 0 !== t &&
                ((m = 'success'), (f = (0, r.oE)(n?.data, t, e)), (R = !0));
            }
            this.#u &&
              ((b = this.#u), (f = this.#d), (v = Date.now()), (m = 'error'));
            const O = 'fetching' === y.fetchStatus,
              Q = 'pending' === m,
              g = 'error' === m,
              C = Q && O,
              I = void 0 !== f;
            return {
              status: m,
              fetchStatus: y.fetchStatus,
              isPending: Q,
              isSuccess: 'success' === m,
              isError: g,
              isInitialLoading: C,
              isLoading: C,
              data: f,
              dataUpdatedAt: y.dataUpdatedAt,
              error: b,
              errorUpdatedAt: v,
              failureCount: y.fetchFailureCount,
              failureReason: y.fetchFailureReason,
              errorUpdateCount: y.errorUpdateCount,
              isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
              isFetchedAfterMount:
                y.dataUpdateCount > h.dataUpdateCount ||
                y.errorUpdateCount > h.errorUpdateCount,
              isFetching: O,
              isRefetching: O && !Q,
              isLoadingError: g && !I,
              isPaused: 'paused' === y.fetchStatus,
              isPlaceholderData: R,
              isRefetchError: g && I,
              isStale: d(t, e),
              refetch: this.refetch,
            };
          }
          updateResult(t) {
            const e = this.#e,
              s = this.createResult(this.#o, this.options);
            if (
              ((this.#c = this.#o.state),
              (this.#h = this.options),
              void 0 !== this.#c.data && (this.#p = this.#o),
              (0, r.VS)(s, e))
            )
              return;
            this.#e = s;
            const i = {};
            !1 !== t?.listeners &&
              (() => {
                if (!e) return !0;
                const { notifyOnChangeProps: t } = this.options,
                  s = 'function' == typeof t ? t() : t;
                if ('all' === s || (!s && !this.#b.size)) return !0;
                const r = new Set(s ?? this.#b);
                return (
                  this.options.throwOnError && r.add('error'),
                  Object.keys(this.#e).some((t) => {
                    const s = t;
                    return this.#e[s] !== e[s] && r.has(s);
                  })
                );
              })() &&
              (i.listeners = !0),
              this.#n({ ...i, ...t });
          }
          #g() {
            const t = this.#t.getQueryCache().build(this.#t, this.options);
            if (t === this.#o) return;
            const e = this.#o;
            (this.#o = t),
              (this.#a = t.state),
              this.hasListeners() &&
                (e?.removeObserver(this), t.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#m();
          }
          #n(t) {
            i.V.batch(() => {
              t.listeners &&
                this.listeners.forEach((t) => {
                  t(this.#e);
                }),
                this.#t
                  .getQueryCache()
                  .notify({ query: this.#o, type: 'observerResultsUpdated' });
            });
          }
        };
      function c(t, e) {
        return (
          (function (t, e) {
            return (
              !1 !== (0, r.Nc)(e.enabled, t) &&
              void 0 === t.state.data &&
              !('error' === t.state.status && !1 === e.retryOnMount)
            );
          })(t, e) ||
          (void 0 !== t.state.data && h(t, e, e.refetchOnMount))
        );
      }
      function h(t, e, s) {
        if (!1 !== (0, r.Nc)(e.enabled, t)) {
          const r = 'function' == typeof s ? s(t) : s;
          return 'always' === r || (!1 !== r && d(t, e));
        }
        return !1;
      }
      function l(t, e, s, i) {
        return (
          (t !== e || !1 === (0, r.Nc)(i.enabled, t)) &&
          (!s.suspense || 'error' !== t.state.status) &&
          d(t, s)
        );
      }
      function d(t, e) {
        return (
          !1 !== (0, r.Nc)(e.enabled, t) &&
          t.isStaleByTime((0, r.KC)(e.staleTime, t))
        );
      }
    },
  },
]);
//# sourceMappingURL=5176.525ce481.async.js.map
