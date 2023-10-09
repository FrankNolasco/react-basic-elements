var Wr = { exports: {} }, He = {}, Vr = { exports: {} }, g = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Yt() {
  if (dt)
    return g;
  dt = 1;
  var C = Symbol.for("react.element"), f = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), B = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), H = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), K = Symbol.iterator;
  function ae(n) {
    return n === null || typeof n != "object" ? null : (n = K && n[K] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var re = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, le = Object.assign, Fe = {};
  function ue(n, s, h) {
    this.props = n, this.context = s, this.refs = Fe, this.updater = h || re;
  }
  ue.prototype.isReactComponent = {}, ue.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, ue.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ie() {
  }
  ie.prototype = ue.prototype;
  function W(n, s, h) {
    this.props = n, this.context = s, this.refs = Fe, this.updater = h || re;
  }
  var me = W.prototype = new ie();
  me.constructor = W, le(me, ue.prototype), me.isPureReactComponent = !0;
  var se = Array.isArray, Y = Object.prototype.hasOwnProperty, Z = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(n, s, h) {
    var S, _ = {}, D = null, I = null;
    if (s != null)
      for (S in s.ref !== void 0 && (I = s.ref), s.key !== void 0 && (D = "" + s.key), s)
        Y.call(s, S) && !de.hasOwnProperty(S) && (_[S] = s[S]);
    var P = arguments.length - 2;
    if (P === 1)
      _.children = h;
    else if (1 < P) {
      for (var T = Array(P), G = 0; G < P; G++)
        T[G] = arguments[G + 2];
      _.children = T;
    }
    if (n && n.defaultProps)
      for (S in P = n.defaultProps, P)
        _[S] === void 0 && (_[S] = P[S]);
    return { $$typeof: C, type: n, key: D, ref: I, props: _, _owner: Z.current };
  }
  function we(n, s) {
    return { $$typeof: C, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Ce(n) {
    return typeof n == "object" && n !== null && n.$$typeof === C;
  }
  function Ye(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(h) {
      return s[h];
    });
  }
  var Se = /\/+/g;
  function ee(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Ye("" + n.key) : s.toString(36);
  }
  function te(n, s, h, S, _) {
    var D = typeof n;
    (D === "undefined" || D === "boolean") && (n = null);
    var I = !1;
    if (n === null)
      I = !0;
    else
      switch (D) {
        case "string":
        case "number":
          I = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case C:
            case f:
              I = !0;
          }
      }
    if (I)
      return I = n, _ = _(I), n = S === "" ? "." + ee(I, 0) : S, se(_) ? (h = "", n != null && (h = n.replace(Se, "$&/") + "/"), te(_, s, h, "", function(G) {
        return G;
      })) : _ != null && (Ce(_) && (_ = we(_, h + (!_.key || I && I.key === _.key ? "" : ("" + _.key).replace(Se, "$&/") + "/") + n)), s.push(_)), 1;
    if (I = 0, S = S === "" ? "." : S + ":", se(n))
      for (var P = 0; P < n.length; P++) {
        D = n[P];
        var T = S + ee(D, P);
        I += te(D, s, h, T, _);
      }
    else if (T = ae(n), typeof T == "function")
      for (n = T.call(n), P = 0; !(D = n.next()).done; )
        D = D.value, T = S + ee(D, P++), I += te(D, s, h, T, _);
    else if (D === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return I;
  }
  function J(n, s, h) {
    if (n == null)
      return n;
    var S = [], _ = 0;
    return te(n, S, "", "", function(D) {
      return s.call(h, D, _++);
    }), S;
  }
  function ce(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = h);
      }, function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = h);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var p = { current: null }, pe = { transition: null }, Te = { ReactCurrentDispatcher: p, ReactCurrentBatchConfig: pe, ReactCurrentOwner: Z };
  return g.Children = { map: J, forEach: function(n, s, h) {
    J(n, function() {
      s.apply(this, arguments);
    }, h);
  }, count: function(n) {
    var s = 0;
    return J(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return J(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!Ce(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, g.Component = ue, g.Fragment = x, g.Profiler = A, g.PureComponent = W, g.StrictMode = R, g.Suspense = k, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, g.cloneElement = function(n, s, h) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var S = le({}, n.props), _ = n.key, D = n.ref, I = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (D = s.ref, I = Z.current), s.key !== void 0 && (_ = "" + s.key), n.type && n.type.defaultProps)
        var P = n.type.defaultProps;
      for (T in s)
        Y.call(s, T) && !de.hasOwnProperty(T) && (S[T] = s[T] === void 0 && P !== void 0 ? P[T] : s[T]);
    }
    var T = arguments.length - 2;
    if (T === 1)
      S.children = h;
    else if (1 < T) {
      P = Array(T);
      for (var G = 0; G < T; G++)
        P[G] = arguments[G + 2];
      S.children = P;
    }
    return { $$typeof: C, type: n.type, key: _, ref: D, props: S, _owner: I };
  }, g.createContext = function(n) {
    return n = { $$typeof: B, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: U, _context: n }, n.Consumer = n;
  }, g.createElement = ye, g.createFactory = function(n) {
    var s = ye.bind(null, n);
    return s.type = n, s;
  }, g.createRef = function() {
    return { current: null };
  }, g.forwardRef = function(n) {
    return { $$typeof: q, render: n };
  }, g.isValidElement = Ce, g.lazy = function(n) {
    return { $$typeof: L, _payload: { _status: -1, _result: n }, _init: ce };
  }, g.memo = function(n, s) {
    return { $$typeof: H, type: n, compare: s === void 0 ? null : s };
  }, g.startTransition = function(n) {
    var s = pe.transition;
    pe.transition = {};
    try {
      n();
    } finally {
      pe.transition = s;
    }
  }, g.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, g.useCallback = function(n, s) {
    return p.current.useCallback(n, s);
  }, g.useContext = function(n) {
    return p.current.useContext(n);
  }, g.useDebugValue = function() {
  }, g.useDeferredValue = function(n) {
    return p.current.useDeferredValue(n);
  }, g.useEffect = function(n, s) {
    return p.current.useEffect(n, s);
  }, g.useId = function() {
    return p.current.useId();
  }, g.useImperativeHandle = function(n, s, h) {
    return p.current.useImperativeHandle(n, s, h);
  }, g.useInsertionEffect = function(n, s) {
    return p.current.useInsertionEffect(n, s);
  }, g.useLayoutEffect = function(n, s) {
    return p.current.useLayoutEffect(n, s);
  }, g.useMemo = function(n, s) {
    return p.current.useMemo(n, s);
  }, g.useReducer = function(n, s, h) {
    return p.current.useReducer(n, s, h);
  }, g.useRef = function(n) {
    return p.current.useRef(n);
  }, g.useState = function(n) {
    return p.current.useState(n);
  }, g.useSyncExternalStore = function(n, s, h) {
    return p.current.useSyncExternalStore(n, s, h);
  }, g.useTransition = function() {
    return p.current.useTransition();
  }, g.version = "18.2.0", g;
}
var Je = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Je.exports;
var pt;
function zt() {
  return pt || (pt = 1, function(C, f) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var x = "18.2.0", R = Symbol.for("react.element"), A = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), H = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), Fe = Symbol.for("react.offscreen"), ue = Symbol.iterator, ie = "@@iterator";
      function W(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ue && e[ue] || e[ie];
        return typeof r == "function" ? r : null;
      }
      var me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, se = {
        transition: null
      }, Y = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, de = {}, ye = null;
      function we(e) {
        ye = e;
      }
      de.setExtraStackFrame = function(e) {
        ye = e;
      }, de.getCurrentStack = null, de.getStackAddendum = function() {
        var e = "";
        ye && (e += ye);
        var r = de.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Ce = !1, Ye = !1, Se = !1, ee = !1, te = !1, J = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: se,
        ReactCurrentOwner: Z
      };
      J.ReactDebugCurrentFrame = de, J.ReactCurrentActQueue = Y;
      function ce(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          pe("warn", e, a);
        }
      }
      function p(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          pe("error", e, a);
        }
      }
      function pe(e, r, a) {
        {
          var o = J.ReactDebugCurrentFrame, i = o.getStackAddendum();
          i !== "" && (r += "%s", a = a.concat([i]));
          var v = a.map(function(d) {
            return String(d);
          });
          v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
        }
      }
      var Te = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", i = o + "." + r;
          if (Te[i])
            return;
          p("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Te[i] = !0;
        }
      }
      var s = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, h = Object.assign, S = {};
      Object.freeze(S);
      function _(e, r, a) {
        this.props = e, this.context = r, this.refs = S, this.updater = a || s;
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var D = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, I = function(e, r) {
          Object.defineProperty(_.prototype, e, {
            get: function() {
              ce("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var P in D)
          D.hasOwnProperty(P) && I(P, D[P]);
      }
      function T() {
      }
      T.prototype = _.prototype;
      function G(e, r, a) {
        this.props = e, this.context = r, this.refs = S, this.updater = a || s;
      }
      var ge = G.prototype = new T();
      ge.constructor = G, h(ge, _.prototype), ge.isPureReactComponent = !0;
      function mr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Xe = Array.isArray;
      function $e(e) {
        return Xe(e);
      }
      function gr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Le(e) {
        try {
          return Oe(e), !1;
        } catch {
          return !0;
        }
      }
      function Oe(e) {
        return "" + e;
      }
      function Pe(e) {
        if (Le(e))
          return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), Oe(e);
      }
      function Qe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var i = r.displayName || r.name || "";
        return i !== "" ? a + "(" + i + ")" : a;
      }
      function ke(e) {
        return e.displayName || "Context";
      }
      function ve(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case U:
            return "Fragment";
          case A:
            return "Portal";
          case q:
            return "Profiler";
          case B:
            return "StrictMode";
          case K:
            return "Suspense";
          case ae:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case H:
              var r = e;
              return ke(r) + ".Consumer";
            case k:
              var a = e;
              return ke(a._context) + ".Provider";
            case L:
              return Qe(e, e.render, "ForwardRef");
            case re:
              var o = e.displayName || null;
              return o !== null ? o : ve(e.type) || "Memo";
            case le: {
              var i = e, v = i._payload, d = i._init;
              try {
                return ve(d(v));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var je = Object.prototype.hasOwnProperty, Ne = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ze, er, Me;
      Me = {};
      function ze(e) {
        if (je.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function _e(e) {
        if (je.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function _r(e, r) {
        var a = function() {
          Ze || (Ze = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function rr(e, r) {
        var a = function() {
          er || (er = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function tr(e) {
        if (typeof e.ref == "string" && Z.current && e.__self && Z.current.stateNode !== e.__self) {
          var r = ve(Z.current.type);
          Me[r] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Me[r] = !0);
        }
      }
      var xe = function(e, r, a, o, i, v, d) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: R,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: d,
          // Record the component responsible for creating this element.
          _owner: v
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function br(e, r, a) {
        var o, i = {}, v = null, d = null, y = null, E = null;
        if (r != null) {
          ze(r) && (d = r.ref, tr(r)), _e(r) && (Pe(r.key), v = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            je.call(r, o) && !Ne.hasOwnProperty(o) && (i[o] = r[o]);
        }
        var j = arguments.length - 2;
        if (j === 1)
          i.children = a;
        else if (j > 1) {
          for (var F = Array(j), $ = 0; $ < j; $++)
            F[$] = arguments[$ + 2];
          Object.freeze && Object.freeze(F), i.children = F;
        }
        if (e && e.defaultProps) {
          var M = e.defaultProps;
          for (o in M)
            i[o] === void 0 && (i[o] = M[o]);
        }
        if (v || d) {
          var z = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && _r(i, z), d && rr(i, z);
        }
        return xe(e, v, d, y, E, Z.current, i);
      }
      function Er(e, r) {
        var a = xe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Rr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, i = h({}, e.props), v = e.key, d = e.ref, y = e._self, E = e._source, j = e._owner;
        if (r != null) {
          ze(r) && (d = r.ref, j = Z.current), _e(r) && (Pe(r.key), v = "" + r.key);
          var F;
          e.type && e.type.defaultProps && (F = e.type.defaultProps);
          for (o in r)
            je.call(r, o) && !Ne.hasOwnProperty(o) && (r[o] === void 0 && F !== void 0 ? i[o] = F[o] : i[o] = r[o]);
        }
        var $ = arguments.length - 2;
        if ($ === 1)
          i.children = a;
        else if ($ > 1) {
          for (var M = Array($), z = 0; z < $; z++)
            M[z] = arguments[z + 2];
          i.children = M;
        }
        return xe(e.type, v, d, y, E, j, i);
      }
      function be(e) {
        return typeof e == "object" && e !== null && e.$$typeof === R;
      }
      var nr = ".", wr = ":";
      function Cr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(i) {
          return a[i];
        });
        return "$" + o;
      }
      var We = !1, ar = /\/+/g;
      function he(e) {
        return e.replace(ar, "$&/");
      }
      function Ae(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Pe(e.key), Cr("" + e.key)) : r.toString(36);
      }
      function Ee(e, r, a, o, i) {
        var v = typeof e;
        (v === "undefined" || v === "boolean") && (e = null);
        var d = !1;
        if (e === null)
          d = !0;
        else
          switch (v) {
            case "string":
            case "number":
              d = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case R:
                case A:
                  d = !0;
              }
          }
        if (d) {
          var y = e, E = i(y), j = o === "" ? nr + Ae(y, 0) : o;
          if ($e(E)) {
            var F = "";
            j != null && (F = he(j) + "/"), Ee(E, r, F, "", function(Ut) {
              return Ut;
            });
          } else
            E != null && (be(E) && (E.key && (!y || y.key !== E.key) && Pe(E.key), E = Er(
              E,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (E.key && (!y || y.key !== E.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                he("" + E.key) + "/"
              ) : "") + j
            )), r.push(E));
          return 1;
        }
        var $, M, z = 0, Q = o === "" ? nr : o + wr;
        if ($e(e))
          for (var yr = 0; yr < e.length; yr++)
            $ = e[yr], M = Q + Ae($, yr), z += Ee($, r, a, M, i);
        else {
          var Nr = W(e);
          if (typeof Nr == "function") {
            var ct = e;
            Nr === ct.entries && (We || ce("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), We = !0);
            for (var Wt = Nr.call(ct), ft, Vt = 0; !(ft = Wt.next()).done; )
              $ = ft.value, M = Q + Ae($, Vt++), z += Ee($, r, a, M, i);
          } else if (v === "object") {
            var lt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (lt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : lt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return z;
      }
      function De(e, r, a) {
        if (e == null)
          return e;
        var o = [], i = 0;
        return Ee(e, o, "", "", function(v) {
          return r.call(a, v, i++);
        }), o;
      }
      function Sr(e) {
        var r = 0;
        return De(e, function() {
          r++;
        }), r;
      }
      function or(e, r, a) {
        De(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Tr(e) {
        return De(e, function(r) {
          return r;
        }) || [];
      }
      function ur(e) {
        if (!be(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ir(e) {
        var r = {
          $$typeof: H,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: k,
          _context: r
        };
        var a = !1, o = !1, i = !1;
        {
          var v = {
            $$typeof: H,
            _context: r
          };
          Object.defineProperties(v, {
            Provider: {
              get: function() {
                return o || (o = !0, p("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(d) {
                r.Provider = d;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(d) {
                r._currentValue = d;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(d) {
                r._currentValue2 = d;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(d) {
                r._threadCount = d;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, p("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(d) {
                i || (ce("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", d), i = !0);
              }
            }
          }), r.Consumer = v;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Ie = -1, Be = 0, qe = 1, Or = 2;
      function Pr(e) {
        if (e._status === Ie) {
          var r = e._result, a = r();
          if (a.then(function(v) {
            if (e._status === Be || e._status === Ie) {
              var d = e;
              d._status = qe, d._result = v;
            }
          }, function(v) {
            if (e._status === Be || e._status === Ie) {
              var d = e;
              d._status = Or, d._result = v;
            }
          }), e._status === Ie) {
            var o = e;
            o._status = Be, o._result = a;
          }
        }
        if (e._status === qe) {
          var i = e._result;
          return i === void 0 && p(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, i), "default" in i || p(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i), i.default;
        } else
          throw e._result;
      }
      function kr(e) {
        var r = {
          // We use these fields to store the result.
          _status: Ie,
          _result: e
        }, a = {
          $$typeof: le,
          _payload: r,
          _init: Pr
        };
        {
          var o, i;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(v) {
                p("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = v, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(v) {
                p("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = v, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function jr(e) {
        e != null && e.$$typeof === re ? p("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? p("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && p("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && p("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: L,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function u(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === U || e === q || te || e === B || e === K || e === ae || ee || e === Fe || Ce || Ye || Se || typeof e == "object" && e !== null && (e.$$typeof === le || e.$$typeof === re || e.$$typeof === k || e.$$typeof === H || e.$$typeof === L || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        u(e) || p("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: re,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(i) {
              o = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return a;
      }
      function l() {
        var e = me.current;
        return e === null && p(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function w(e) {
        var r = l();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? p("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && p("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function O(e) {
        var r = l();
        return r.useState(e);
      }
      function b(e, r, a) {
        var o = l();
        return o.useReducer(e, r, a);
      }
      function m(e) {
        var r = l();
        return r.useRef(e);
      }
      function X(e, r) {
        var a = l();
        return a.useEffect(e, r);
      }
      function N(e, r) {
        var a = l();
        return a.useInsertionEffect(e, r);
      }
      function V(e, r) {
        var a = l();
        return a.useLayoutEffect(e, r);
      }
      function ne(e, r) {
        var a = l();
        return a.useCallback(e, r);
      }
      function Re(e, r) {
        var a = l();
        return a.useMemo(e, r);
      }
      function sr(e, r, a) {
        var o = l();
        return o.useImperativeHandle(e, r, a);
      }
      function fe(e, r) {
        {
          var a = l();
          return a.useDebugValue(e, r);
        }
      }
      function mt() {
        var e = l();
        return e.useTransition();
      }
      function gt(e) {
        var r = l();
        return r.useDeferredValue(e);
      }
      function _t() {
        var e = l();
        return e.useId();
      }
      function bt(e, r, a) {
        var o = l();
        return o.useSyncExternalStore(e, r, a);
      }
      var Ge = 0, Yr, zr, Br, qr, Gr, Hr, Kr;
      function Jr() {
      }
      Jr.__reactDisabledLog = !0;
      function Et() {
        {
          if (Ge === 0) {
            Yr = console.log, zr = console.info, Br = console.warn, qr = console.error, Gr = console.group, Hr = console.groupCollapsed, Kr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Jr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Ge++;
        }
      }
      function Rt() {
        {
          if (Ge--, Ge === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: h({}, e, {
                value: Yr
              }),
              info: h({}, e, {
                value: zr
              }),
              warn: h({}, e, {
                value: Br
              }),
              error: h({}, e, {
                value: qr
              }),
              group: h({}, e, {
                value: Gr
              }),
              groupCollapsed: h({}, e, {
                value: Hr
              }),
              groupEnd: h({}, e, {
                value: Kr
              })
            });
          }
          Ge < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var xr = J.ReactCurrentDispatcher, Ar;
      function cr(e, r, a) {
        {
          if (Ar === void 0)
            try {
              throw Error();
            } catch (i) {
              var o = i.stack.trim().match(/\n( *(at )?)/);
              Ar = o && o[1] || "";
            }
          return `
` + Ar + e;
        }
      }
      var Dr = !1, fr;
      {
        var wt = typeof WeakMap == "function" ? WeakMap : Map;
        fr = new wt();
      }
      function Xr(e, r) {
        if (!e || Dr)
          return "";
        {
          var a = fr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Dr = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var v;
        v = xr.current, xr.current = null, Et();
        try {
          if (r) {
            var d = function() {
              throw Error();
            };
            if (Object.defineProperty(d.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(d, []);
              } catch (Q) {
                o = Q;
              }
              Reflect.construct(e, [], d);
            } else {
              try {
                d.call();
              } catch (Q) {
                o = Q;
              }
              e.call(d.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Q) {
              o = Q;
            }
            e();
          }
        } catch (Q) {
          if (Q && o && typeof Q.stack == "string") {
            for (var y = Q.stack.split(`
`), E = o.stack.split(`
`), j = y.length - 1, F = E.length - 1; j >= 1 && F >= 0 && y[j] !== E[F]; )
              F--;
            for (; j >= 1 && F >= 0; j--, F--)
              if (y[j] !== E[F]) {
                if (j !== 1 || F !== 1)
                  do
                    if (j--, F--, F < 0 || y[j] !== E[F]) {
                      var $ = `
` + y[j].replace(" at new ", " at ");
                      return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && fr.set(e, $), $;
                    }
                  while (j >= 1 && F >= 0);
                break;
              }
          }
        } finally {
          Dr = !1, xr.current = v, Rt(), Error.prepareStackTrace = i;
        }
        var M = e ? e.displayName || e.name : "", z = M ? cr(M) : "";
        return typeof e == "function" && fr.set(e, z), z;
      }
      function Ct(e, r, a) {
        return Xr(e, !1);
      }
      function St(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function lr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Xr(e, St(e));
        if (typeof e == "string")
          return cr(e);
        switch (e) {
          case K:
            return cr("Suspense");
          case ae:
            return cr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case L:
              return Ct(e.render);
            case re:
              return lr(e.type, r, a);
            case le: {
              var o = e, i = o._payload, v = o._init;
              try {
                return lr(v(i), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Qr = {}, Zr = J.ReactDebugCurrentFrame;
      function dr(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Zr.setExtraStackFrame(a);
        } else
          Zr.setExtraStackFrame(null);
      }
      function Tt(e, r, a, o, i) {
        {
          var v = Function.call.bind(je);
          for (var d in e)
            if (v(e, d)) {
              var y = void 0;
              try {
                if (typeof e[d] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[d](r, d, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (j) {
                y = j;
              }
              y && !(y instanceof Error) && (dr(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, d, typeof y), dr(null)), y instanceof Error && !(y.message in Qr) && (Qr[y.message] = !0, dr(i), p("Failed %s type: %s", a, y.message), dr(null));
            }
        }
      }
      function Ve(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          we(a);
        } else
          we(null);
      }
      var Ir;
      Ir = !1;
      function et() {
        if (Z.current) {
          var e = ve(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Ot(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Pt(e) {
        return e != null ? Ot(e.__source) : "";
      }
      var rt = {};
      function kt(e) {
        var r = et();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function tt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = kt(r);
          if (!rt[a]) {
            rt[a] = !0;
            var o = "";
            e && e._owner && e._owner !== Z.current && (o = " It was passed a child from " + ve(e._owner.type) + "."), Ve(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ve(null);
          }
        }
      }
      function nt(e, r) {
        if (typeof e == "object") {
          if ($e(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              be(o) && tt(o, r);
            }
          else if (be(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var i = W(e);
            if (typeof i == "function" && i !== e.entries)
              for (var v = i.call(e), d; !(d = v.next()).done; )
                be(d.value) && tt(d.value, r);
          }
        }
      }
      function at(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === L || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === re))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = ve(r);
            Tt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Ir) {
            Ir = !0;
            var i = ve(r);
            p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function jt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ve(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ve(null);
              break;
            }
          }
          e.ref !== null && (Ve(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
        }
      }
      function ot(e, r, a) {
        var o = u(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = Pt(r);
          v ? i += v : i += et();
          var d;
          e === null ? d = "null" : $e(e) ? d = "array" : e !== void 0 && e.$$typeof === R ? (d = "<" + (ve(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, p("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, i);
        }
        var y = br.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            nt(arguments[E], e);
        return e === U ? jt(y) : at(y), y;
      }
      var ut = !1;
      function xt(e) {
        var r = ot.bind(null, e);
        return r.type = e, ut || (ut = !0, ce("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ce("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function At(e, r, a) {
        for (var o = Rr.apply(this, arguments), i = 2; i < arguments.length; i++)
          nt(arguments[i], o.type);
        return at(o), o;
      }
      function Dt(e, r) {
        var a = se.transition;
        se.transition = {};
        var o = se.transition;
        se.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (se.transition = a, a === null && o._updatedFibers) {
            var i = o._updatedFibers.size;
            i > 10 && ce("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var it = !1, pr = null;
      function It(e) {
        if (pr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = C && C[r];
            pr = a.call(C, "timers").setImmediate;
          } catch {
            pr = function(i) {
              it === !1 && (it = !0, typeof MessageChannel > "u" && p("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var v = new MessageChannel();
              v.port1.onmessage = i, v.port2.postMessage(void 0);
            };
          }
        return pr(e);
      }
      var Ue = 0, st = !1;
      function Ft(e) {
        {
          var r = Ue;
          Ue++, Y.current === null && (Y.current = []);
          var a = Y.isBatchingLegacy, o;
          try {
            if (Y.isBatchingLegacy = !0, o = e(), !a && Y.didScheduleLegacyUpdate) {
              var i = Y.current;
              i !== null && (Y.didScheduleLegacyUpdate = !1, Lr(i));
            }
          } catch (M) {
            throw vr(r), M;
          } finally {
            Y.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var v = o, d = !1, y = {
              then: function(M, z) {
                d = !0, v.then(function(Q) {
                  vr(r), Ue === 0 ? Fr(Q, M, z) : M(Q);
                }, function(Q) {
                  vr(r), z(Q);
                });
              }
            };
            return !st && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              d || (st = !0, p("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (vr(r), Ue === 0) {
              var j = Y.current;
              j !== null && (Lr(j), Y.current = null);
              var F = {
                then: function(M, z) {
                  Y.current === null ? (Y.current = [], Fr(E, M, z)) : M(E);
                }
              };
              return F;
            } else {
              var $ = {
                then: function(M, z) {
                  M(E);
                }
              };
              return $;
            }
          }
        }
      }
      function vr(e) {
        e !== Ue - 1 && p("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ue = e;
      }
      function Fr(e, r, a) {
        {
          var o = Y.current;
          if (o !== null)
            try {
              Lr(o), It(function() {
                o.length === 0 ? (Y.current = null, r(e)) : Fr(e, r, a);
              });
            } catch (i) {
              a(i);
            }
          else
            r(e);
        }
      }
      var $r = !1;
      function Lr(e) {
        if (!$r) {
          $r = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            $r = !1;
          }
        }
      }
      var $t = ot, Lt = At, Nt = xt, Mt = {
        map: De,
        forEach: or,
        count: Sr,
        toArray: Tr,
        only: ur
      };
      f.Children = Mt, f.Component = _, f.Fragment = U, f.Profiler = q, f.PureComponent = G, f.StrictMode = B, f.Suspense = K, f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J, f.cloneElement = Lt, f.createContext = ir, f.createElement = $t, f.createFactory = Nt, f.createRef = mr, f.forwardRef = jr, f.isValidElement = be, f.lazy = kr, f.memo = c, f.startTransition = Dt, f.unstable_act = Ft, f.useCallback = ne, f.useContext = w, f.useDebugValue = fe, f.useDeferredValue = gt, f.useEffect = X, f.useId = _t, f.useImperativeHandle = sr, f.useInsertionEffect = N, f.useLayoutEffect = V, f.useMemo = Re, f.useReducer = b, f.useRef = m, f.useState = O, f.useSyncExternalStore = bt, f.useTransition = mt, f.version = x, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Je, Je.exports)), Je.exports;
}
process.env.NODE_ENV === "production" ? Vr.exports = Yt() : Vr.exports = zt();
var hr = Vr.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function Bt() {
  if (vt)
    return He;
  vt = 1;
  var C = hr, f = Symbol.for("react.element"), x = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, A = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(q, k, H) {
    var L, K = {}, ae = null, re = null;
    H !== void 0 && (ae = "" + H), k.key !== void 0 && (ae = "" + k.key), k.ref !== void 0 && (re = k.ref);
    for (L in k)
      R.call(k, L) && !U.hasOwnProperty(L) && (K[L] = k[L]);
    if (q && q.defaultProps)
      for (L in k = q.defaultProps, k)
        K[L] === void 0 && (K[L] = k[L]);
    return { $$typeof: f, type: q, key: ae, ref: re, props: K, _owner: A.current };
  }
  return He.Fragment = x, He.jsx = B, He.jsxs = B, He;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function qt() {
  return yt || (yt = 1, process.env.NODE_ENV !== "production" && function() {
    var C = hr, f = Symbol.for("react.element"), x = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), q = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), le = Symbol.iterator, Fe = "@@iterator";
    function ue(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = le && t[le] || t[Fe];
      return typeof u == "function" ? u : null;
    }
    var ie = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function W(t) {
      {
        for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), l = 1; l < u; l++)
          c[l - 1] = arguments[l];
        me("error", t, c);
      }
    }
    function me(t, u, c) {
      {
        var l = ie.ReactDebugCurrentFrame, w = l.getStackAddendum();
        w !== "" && (u += "%s", c = c.concat([w]));
        var O = c.map(function(b) {
          return String(b);
        });
        O.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, O);
      }
    }
    var se = !1, Y = !1, Z = !1, de = !1, ye = !1, we;
    we = Symbol.for("react.module.reference");
    function Ce(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === R || t === U || ye || t === A || t === H || t === L || de || t === re || se || Y || Z || typeof t == "object" && t !== null && (t.$$typeof === ae || t.$$typeof === K || t.$$typeof === B || t.$$typeof === q || t.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === we || t.getModuleId !== void 0));
    }
    function Ye(t, u, c) {
      var l = t.displayName;
      if (l)
        return l;
      var w = u.displayName || u.name || "";
      return w !== "" ? c + "(" + w + ")" : c;
    }
    function Se(t) {
      return t.displayName || "Context";
    }
    function ee(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && W("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case R:
          return "Fragment";
        case x:
          return "Portal";
        case U:
          return "Profiler";
        case A:
          return "StrictMode";
        case H:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case q:
            var u = t;
            return Se(u) + ".Consumer";
          case B:
            var c = t;
            return Se(c._context) + ".Provider";
          case k:
            return Ye(t, t.render, "ForwardRef");
          case K:
            var l = t.displayName || null;
            return l !== null ? l : ee(t.type) || "Memo";
          case ae: {
            var w = t, O = w._payload, b = w._init;
            try {
              return ee(b(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var te = Object.assign, J = 0, ce, p, pe, Te, n, s, h;
    function S() {
    }
    S.__reactDisabledLog = !0;
    function _() {
      {
        if (J === 0) {
          ce = console.log, p = console.info, pe = console.warn, Te = console.error, n = console.group, s = console.groupCollapsed, h = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: S,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        J++;
      }
    }
    function D() {
      {
        if (J--, J === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: te({}, t, {
              value: ce
            }),
            info: te({}, t, {
              value: p
            }),
            warn: te({}, t, {
              value: pe
            }),
            error: te({}, t, {
              value: Te
            }),
            group: te({}, t, {
              value: n
            }),
            groupCollapsed: te({}, t, {
              value: s
            }),
            groupEnd: te({}, t, {
              value: h
            })
          });
        }
        J < 0 && W("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = ie.ReactCurrentDispatcher, P;
    function T(t, u, c) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (w) {
            var l = w.stack.trim().match(/\n( *(at )?)/);
            P = l && l[1] || "";
          }
        return `
` + P + t;
      }
    }
    var G = !1, ge;
    {
      var mr = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new mr();
    }
    function Xe(t, u) {
      if (!t || G)
        return "";
      {
        var c = ge.get(t);
        if (c !== void 0)
          return c;
      }
      var l;
      G = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = I.current, I.current = null, _();
      try {
        if (u) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (fe) {
              l = fe;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (fe) {
              l = fe;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            l = fe;
          }
          t();
        }
      } catch (fe) {
        if (fe && l && typeof fe.stack == "string") {
          for (var m = fe.stack.split(`
`), X = l.stack.split(`
`), N = m.length - 1, V = X.length - 1; N >= 1 && V >= 0 && m[N] !== X[V]; )
            V--;
          for (; N >= 1 && V >= 0; N--, V--)
            if (m[N] !== X[V]) {
              if (N !== 1 || V !== 1)
                do
                  if (N--, V--, V < 0 || m[N] !== X[V]) {
                    var ne = `
` + m[N].replace(" at new ", " at ");
                    return t.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", t.displayName)), typeof t == "function" && ge.set(t, ne), ne;
                  }
                while (N >= 1 && V >= 0);
              break;
            }
        }
      } finally {
        G = !1, I.current = O, D(), Error.prepareStackTrace = w;
      }
      var Re = t ? t.displayName || t.name : "", sr = Re ? T(Re) : "";
      return typeof t == "function" && ge.set(t, sr), sr;
    }
    function $e(t, u, c) {
      return Xe(t, !1);
    }
    function gr(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function Le(t, u, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Xe(t, gr(t));
      if (typeof t == "string")
        return T(t);
      switch (t) {
        case H:
          return T("Suspense");
        case L:
          return T("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case k:
            return $e(t.render);
          case K:
            return Le(t.type, u, c);
          case ae: {
            var l = t, w = l._payload, O = l._init;
            try {
              return Le(O(w), u, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, Pe = {}, Qe = ie.ReactDebugCurrentFrame;
    function ke(t) {
      if (t) {
        var u = t._owner, c = Le(t.type, t._source, u ? u.type : null);
        Qe.setExtraStackFrame(c);
      } else
        Qe.setExtraStackFrame(null);
    }
    function ve(t, u, c, l, w) {
      {
        var O = Function.call.bind(Oe);
        for (var b in t)
          if (O(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var X = Error((l || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              m = t[b](u, b, l, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              m = N;
            }
            m && !(m instanceof Error) && (ke(w), W("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", c, b, typeof m), ke(null)), m instanceof Error && !(m.message in Pe) && (Pe[m.message] = !0, ke(w), W("Failed %s type: %s", c, m.message), ke(null));
          }
      }
    }
    var je = Array.isArray;
    function Ne(t) {
      return je(t);
    }
    function Ze(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, c = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function er(t) {
      try {
        return Me(t), !1;
      } catch {
        return !0;
      }
    }
    function Me(t) {
      return "" + t;
    }
    function ze(t) {
      if (er(t))
        return W("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(t)), Me(t);
    }
    var _e = ie.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, xe;
    xe = {};
    function br(t) {
      if (Oe.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Er(t) {
      if (Oe.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rr(t, u) {
      if (typeof t.ref == "string" && _e.current && u && _e.current.stateNode !== u) {
        var c = ee(_e.current.type);
        xe[c] || (W('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee(_e.current.type), t.ref), xe[c] = !0);
      }
    }
    function be(t, u) {
      {
        var c = function() {
          rr || (rr = !0, W("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function nr(t, u) {
      {
        var c = function() {
          tr || (tr = !0, W("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var wr = function(t, u, c, l, w, O, b) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: c,
        props: b,
        // Record the component responsible for creating this element.
        _owner: O
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Cr(t, u, c, l, w) {
      {
        var O, b = {}, m = null, X = null;
        c !== void 0 && (ze(c), m = "" + c), Er(u) && (ze(u.key), m = "" + u.key), br(u) && (X = u.ref, Rr(u, w));
        for (O in u)
          Oe.call(u, O) && !_r.hasOwnProperty(O) && (b[O] = u[O]);
        if (t && t.defaultProps) {
          var N = t.defaultProps;
          for (O in N)
            b[O] === void 0 && (b[O] = N[O]);
        }
        if (m || X) {
          var V = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && be(b, V), X && nr(b, V);
        }
        return wr(t, m, X, w, l, _e.current, b);
      }
    }
    var We = ie.ReactCurrentOwner, ar = ie.ReactDebugCurrentFrame;
    function he(t) {
      if (t) {
        var u = t._owner, c = Le(t.type, t._source, u ? u.type : null);
        ar.setExtraStackFrame(c);
      } else
        ar.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Ee(t) {
      return typeof t == "object" && t !== null && t.$$typeof === f;
    }
    function De() {
      {
        if (We.current) {
          var t = ee(We.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Sr(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + u + ":" + c + ".";
        }
        return "";
      }
    }
    var or = {};
    function Tr(t) {
      {
        var u = De();
        if (!u) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (u = `

Check the top-level render call using <` + c + ">.");
        }
        return u;
      }
    }
    function ur(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Tr(u);
        if (or[c])
          return;
        or[c] = !0;
        var l = "";
        t && t._owner && t._owner !== We.current && (l = " It was passed a child from " + ee(t._owner.type) + "."), he(t), W('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, l), he(null);
      }
    }
    function ir(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Ne(t))
          for (var c = 0; c < t.length; c++) {
            var l = t[c];
            Ee(l) && ur(l, u);
          }
        else if (Ee(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var w = ue(t);
          if (typeof w == "function" && w !== t.entries)
            for (var O = w.call(t), b; !(b = O.next()).done; )
              Ee(b.value) && ur(b.value, u);
        }
      }
    }
    function Ie(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var c;
        if (typeof u == "function")
          c = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === K))
          c = u.propTypes;
        else
          return;
        if (c) {
          var l = ee(u);
          ve(c, t.props, "prop", l, t);
        } else if (u.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var w = ee(u);
          W("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && W("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Be(t) {
      {
        for (var u = Object.keys(t.props), c = 0; c < u.length; c++) {
          var l = u[c];
          if (l !== "children" && l !== "key") {
            he(t), W("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), he(null);
            break;
          }
        }
        t.ref !== null && (he(t), W("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    function qe(t, u, c, l, w, O) {
      {
        var b = Ce(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = Sr(w);
          X ? m += X : m += De();
          var N;
          t === null ? N = "null" : Ne(t) ? N = "array" : t !== void 0 && t.$$typeof === f ? (N = "<" + (ee(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : N = typeof t, W("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, m);
        }
        var V = Cr(t, u, c, w, O);
        if (V == null)
          return V;
        if (b) {
          var ne = u.children;
          if (ne !== void 0)
            if (l)
              if (Ne(ne)) {
                for (var Re = 0; Re < ne.length; Re++)
                  ir(ne[Re], t);
                Object.freeze && Object.freeze(ne);
              } else
                W("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ir(ne, t);
        }
        return t === R ? Be(V) : Ie(V), V;
      }
    }
    function Or(t, u, c) {
      return qe(t, u, c, !0);
    }
    function Pr(t, u, c) {
      return qe(t, u, c, !1);
    }
    var kr = Pr, jr = Or;
    Ke.Fragment = R, Ke.jsx = kr, Ke.jsxs = jr;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Wr.exports = Bt() : Wr.exports = qt();
var oe = Wr.exports;
const ht = ({ children: C, style: f, ...x }) => {
  const {
    width: R,
    padding: A,
    margin: U,
    border: B,
    height: q,
    addShadow: k,
    ...H
  } = x;
  return /* @__PURE__ */ oe.jsx(
    "div",
    {
      style: {
        width: R,
        padding: A,
        margin: U,
        border: B,
        height: q,
        boxShadow: k ? "0px 2px 16px 3px rgba(85,109,235,0.29)" : "none",
        ...f
      },
      ...H,
      children: C
    }
  );
}, Ur = ({ children: C, style: f, ...x }) => {
  const {
    justify: R,
    items: A,
    self: U,
    content: B,
    direction: q,
    wrap: k,
    gap: H,
    ...L
  } = x;
  return /* @__PURE__ */ oe.jsx(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: q ?? "row",
        justifyContent: R ?? "flex-start",
        alignItems: A ?? "flex-start",
        alignContent: B ?? "flex-start",
        alignSelf: U ?? "flex-start",
        gap: H,
        flexWrap: k ?? "inherit",
        ...f
      },
      ...L,
      children: C
    }
  );
}, Gt = ({
  children: C,
  direction: f = "column",
  ...x
}) => /* @__PURE__ */ oe.jsx(Ur, { direction: f, ...x, children: C }), Mr = ({
  children: C,
  direction: f = "row",
  items: x,
  ...R
}) => /* @__PURE__ */ oe.jsx(Ur, { direction: f, items: x ?? "center", ...R, children: C }), Ht = ({ children: C, style: f, ...x }) => {
  const { cols: R, gap: A, ...U } = x;
  return /* @__PURE__ */ oe.jsx(
    ht,
    {
      style: {
        display: "grid",
        gridGap: A,
        gridTemplateColumns: `repeat(${R ?? "auto-fill"}, 1fr)`,
        ...f
      },
      ...U,
      children: C
    }
  );
}, Qt = ({
  children: C,
  style: f,
  ...x
}) => {
  const { span: R, spanCol: A, spanRow: U, ...B } = x;
  return /* @__PURE__ */ oe.jsx(
    ht,
    {
      style: {
        gridColumn: A ?? "span " + (R ?? 1),
        gridRow: U ?? "auto",
        ...f
      },
      ...B,
      children: C
    }
  );
}, Kt = {
  h1: 30,
  h2: 22,
  h3: 18,
  h4: 16,
  h5: 10,
  h6: 8,
  span: 14,
  p: 15,
  label: 12
}, Jt = {
  h1: 15,
  h2: 11,
  h3: 9,
  h4: 8,
  h5: 5,
  h6: 4,
  span: 7,
  p: 7.5,
  label: 6
}, Xt = (C, f) => {
  let x = 14;
  return C && (x = (f ? Jt : Kt)[C] ?? 14), `${x}px`;
}, Zt = ({
  children: C,
  variant: f,
  style: x,
  fw: R,
  color: A,
  center: U,
  ...B
}) => {
  const [q, k] = hr.useState("14px");
  return hr.useEffect(() => (k(Xt(f)), () => {
  }), [f]), /* @__PURE__ */ oe.jsx(
    "span",
    {
      style: {
        fontWeight: R ?? "normal",
        fontSize: q,
        color: A ?? "inherit",
        textAlign: U ? "center" : "inherit",
        margin: 0,
        padding: 0,
        ...x
      },
      ...B,
      children: C
    }
  );
}, en = ({
  type: C,
  gap: f = "10px",
  cols: x = 2,
  children: R,
  ...A
}) => {
  switch (C) {
    case "grid":
      return /* @__PURE__ */ oe.jsx(Ht, { gap: f, cols: x, ...A, children: R });
    case "flex":
      return /* @__PURE__ */ oe.jsx(Ur, { gap: f, ...A, children: R });
    case "column":
      return /* @__PURE__ */ oe.jsx(Gt, { gap: f, ...A, children: R });
    case "row":
      return /* @__PURE__ */ oe.jsx(Mr, { gap: f, ...A, children: R });
    case "row-wrap":
      return /* @__PURE__ */ oe.jsx(Mr, { gap: f, wrap: "wrap", ...A, children: R });
    default:
      return /* @__PURE__ */ oe.jsx(Mr, { gap: f, ...A, children: R });
  }
};
export {
  ht as Box,
  Gt as Column,
  en as DisplaySelector,
  Ur as Flex,
  Ht as Grid,
  Qt as GridChild,
  Mr as Row,
  Zt as Typography
};
