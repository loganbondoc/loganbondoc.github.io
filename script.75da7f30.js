// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"director.min.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var y = Object.defineProperty;
var D = function D(f) {
  return y(f, "__esModule", {
    value: !0
  });
};
var b = function b(f, t) {
  D(f);
  for (var s in t) y(f, s, {
    get: t[s],
    enumerable: !0
  });
};
b(exports, {
  default: function _default() {
    return w;
  }
});
var p = /*#__PURE__*/function () {
  function p() {
    _classCallCheck(this, p);
  }
  _createClass(p, null, [{
    key: "get",
    value: function get(t) {
      switch (t) {
        case "linear":
          return this._easeLinear;
        case "easeInSine":
          return this._easeInSine;
        case "easeOutSine":
          return this._easeOutSine;
        case "easeInOutSine":
          return this._easeInOutSine;
        case "easeInQuad":
          return this._easeInQuad;
        case "easeOutQuad":
          return this._easeOutQuad;
        case "easeInOutQuad":
          return this._easeInOutQuad;
        case "easeInCubic":
          return this._easeInCubic;
        case "easeOutCubic":
          return this._easeOutCubic;
        case "easeInOutCubic":
          return this._easeInOutCubic;
        case "easeInQuart":
          return this._easeInQuartic;
        case "easeOutQuart":
          return this._easeOutQuartic;
        case "easeInOutQuart":
          return this._easeInOutQuartic;
        case "easeInQuint":
          return this._easeInQuintic;
        case "easeOutQuint":
          return this._easeOutQuintic;
        case "easeInOutQuint":
          return this._easeInOutQuintic;
        case "easeInExpo":
          return this._easeInExpo;
        case "easeOutExpo":
          return this._easeOutExpo;
        case "easeInOutExpo":
          return this._easeInOutExpo;
        case "easeOutSpring":
          return this._easeOutSpring;
        case "easeOutBack":
          return this._easeOutBack;
        default:
          return this._easeLinear;
      }
    }
  }, {
    key: "_easeLinear",
    value: function _easeLinear(t) {
      return t;
    }
  }, {
    key: "_easeInSine",
    value: function _easeInSine(t) {
      return -Math.cos(t * (Math.PI / 2)) + 1;
    }
  }, {
    key: "_easeOutSine",
    value: function _easeOutSine(t) {
      return Math.sin(t * (Math.PI / 2));
    }
  }, {
    key: "_easeInOutSine",
    value: function _easeInOutSine(t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    }
  }, {
    key: "_easeInQuad",
    value: function _easeInQuad(t) {
      return Math.pow(t, 2);
    }
  }, {
    key: "_easeOutQuad",
    value: function _easeOutQuad(t) {
      return 1 - Math.pow(1 - t, 2);
    }
  }, {
    key: "_easeInOutQuad",
    value: function _easeInOutQuad(t) {
      return t < .5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2;
    }
  }, {
    key: "_easeInCubic",
    value: function _easeInCubic(t) {
      return Math.pow(t, 3);
    }
  }, {
    key: "_easeOutCubic",
    value: function _easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }
  }, {
    key: "_easeInOutCubic",
    value: function _easeInOutCubic(t) {
      return t < .5 ? Math.pow(t * 2, 3) / 2 : 1 - Math.pow((1 - t) * 2, 3) / 2;
    }
  }, {
    key: "_easeInQuartic",
    value: function _easeInQuartic(t) {
      return Math.pow(t, 4);
    }
  }, {
    key: "_easeOutQuartic",
    value: function _easeOutQuartic(t) {
      return 1 - Math.pow(1 - t, 4);
    }
  }, {
    key: "_easeInOutQuartic",
    value: function _easeInOutQuartic(t) {
      return t < .5 ? Math.pow(t * 2, 4) / 2 : 1 - Math.pow((1 - t) * 2, 4) / 2;
    }
  }, {
    key: "_easeInQuintic",
    value: function _easeInQuintic(t) {
      return Math.pow(t, 5);
    }
  }, {
    key: "_easeOutQuintic",
    value: function _easeOutQuintic(t) {
      return 1 - Math.pow(1 - t, 5);
    }
  }, {
    key: "_easeInOutQuintic",
    value: function _easeInOutQuintic(t) {
      return t < .5 ? Math.pow(t * 2, 5) / 2 : 1 - Math.pow((1 - t) * 2, 5) / 2;
    }
  }, {
    key: "_easeInExpo",
    value: function _easeInExpo(t) {
      return Math.pow(2, 10 * (t - 1)) - .001;
    }
  }, {
    key: "_easeOutExpo",
    value: function _easeOutExpo(t) {
      return 1 - Math.pow(2, -10 * t);
    }
  }, {
    key: "_easeInOutExpo",
    value: function _easeInOutExpo(t) {
      return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
    }
  }, {
    key: "_easeOutSpring",
    value: function _easeOutSpring(t) {
      var s = 1,
        e = .3,
        i = e / (Math.PI * 2) * (Math.asin(1 / s) || 0);
      return s * Math.pow(2, -10 * t) * Math.sin((t - i) * (Math.PI * 2) / e) + 1;
    }
  }, {
    key: "_easeOutBack",
    value: function _easeOutBack(t) {
      var s = 1.70158;
      return (t = t - 1) * t * ((s + 1) * t + s) + 1;
    }
  }]);
  return p;
}();
var m = /*#__PURE__*/function () {
  function m() {
    _classCallCheck(this, m);
  }
  _createClass(m, null, [{
    key: "multiply2DMatricies",
    value: function multiply2DMatricies(t, s) {
      var e = t[0 * 3 + 0],
        i = t[0 * 3 + 1],
        n = t[0 * 3 + 2],
        r = t[1 * 3 + 0],
        a = t[1 * 3 + 1],
        h = t[1 * 3 + 2],
        o = t[2 * 3 + 0],
        c = t[2 * 3 + 1],
        d = t[2 * 3 + 2],
        g = s[0 * 3 + 0],
        T = s[0 * 3 + 1],
        O = s[0 * 3 + 2],
        E = s[1 * 3 + 0],
        I = s[1 * 3 + 1],
        S = s[1 * 3 + 2],
        x = s[2 * 3 + 0],
        L = s[2 * 3 + 1],
        C = s[2 * 3 + 2];
      return [g * e + T * r + O * o, g * i + T * a + O * c, g * n + T * h + O * d, E * e + I * r + S * o, E * i + I * a + S * c, E * n + I * h + S * d, x * e + L * r + C * o, x * i + L * a + C * c, x * n + L * h + C * d];
    }
  }, {
    key: "translate2D",
    value: function translate2D(t, s) {
      return [1, 0, t, 0, 1, s, 0, 0, 1];
    }
  }, {
    key: "scale2D",
    value: function scale2D(t, s) {
      return [t, 0, 0, 0, s, 0, 0, 0, 1];
    }
  }, {
    key: "rotate2D",
    value: function rotate2D(t) {
      return [Math.cos(t), -Math.sin(t), 0, Math.sin(t), Math.cos(t), 0, 0, 0, 1];
    }
  }]);
  return m;
}();
var l = /*#__PURE__*/function () {
  function l(t, s, e, i, n, r) {
    _classCallCheck(this, l);
    this.target = t, this.property = s, this.targetValue = e, this.currentValue = i, this.units = n, this.direction = r, this.propertyDelta = {}, this.setProperties();
  }
  _createClass(l, [{
    key: "setProperties",
    value: function setProperties() {
      var _this = this;
      switch (this.direction) {
        case "to":
          this.propertyDelta = {
            start: this.currentValue,
            delta: this.targetValue - this.currentValue
          };
          break;
        case "from":
          this.propertyDelta = {
            start: this.targetValue,
            delta: this.currentValue - this.targetValue
          };
          break;
        case "fromTo":
          this.propertyDelta = {
            start: this.currentValue,
            delta: this.targetValue - this.currentValue
          };
          break;
        case "addClass":
          this.classFunction = function () {
            _this.target.classList.add(_this.targetValue);
          };
          break;
        case "removeClass":
          this.classFunction = function () {
            _this.target.classList.remove(_this.targetValue);
          };
          break;
        default:
          break;
      }
    }
  }, {
    key: "update",
    value: function update(t) {
      this.property !== "class" ? this.target[this.property] = this.propertyDelta.start + t * this.propertyDelta.delta + this.units : (t === 0 && (this.direction === "addClass" ? this.target.classList.remove(this.targetValue) : this.target.classList.add(this.targetValue)), t === 1 && this.classFunction());
    }
  }]);
  return l;
}();
var u = /*#__PURE__*/function () {
  function u(t, s, e, i) {
    _classCallCheck(this, u);
    this.target = t, this.properties = s, this.direction = e, this.isDOM = i, this.unitExpression = /[a-z]+|%/, this.hasTransform = !1, this.transformPropertyKeys = ["translateX", "translateY", "rotate", "scale", "scaleX", "scaleY"], this.transformMatrix = {}, this.isDOM && (this.bounds = this.target.getBoundingClientRect()), this.setProperties();
  }
  _createClass(u, [{
    key: "_getTransformMatrix",
    value: function _getTransformMatrix(t) {
      if (t === "none" || t === void 0) return {
        translateX: 0,
        translateY: 0,
        scaleX: 1,
        scaleY: 1,
        rotate: 0
      };
      this.transformType = t.includes("3d") ? "3d" : "2d";
      var s = t.match(/matrix.*\((.+)\)/)[1].split(", ");
      if (this.transformType === "2d") return {
        translateX: s[4],
        translateY: s[5],
        scaleX: s[0],
        scaleY: s[3],
        rotate: Math.atan2(s[1], s[0]) * (180 / Math.PI)
      };
    }
  }, {
    key: "_getTransformPercentage",
    value: function _getTransformPercentage(t, s) {
      return t === "translateX" ? s *= this.bounds.width / 100 : s *= this.bounds.height / 100;
    }
  }, {
    key: "setProperties",
    value: function setProperties() {
      if (this.actions = [], this.isDOM) {
        var t = getComputedStyle(this.target);
        this.transformMatrix = this._getTransformMatrix(t.transform);
        for (var s in this.properties) if (this.transformPropertyKeys.includes(s)) {
          if (this.hasTransform = !0, s === "scale") this.direction === "fromTo" ? (this.actions.push(new l(this.transformMatrix, "scaleX", this.properties.scale[1], this.properties.scale[0], null, this.direction)), this.actions.push(new l(this.transformMatrix, "scaleY", this.properties.scale[1], this.properties.scale[0], null, this.direction))) : (this.actions.push(new l(this.transformMatrix, "scaleX", this.properties.scale, parseFloat(this.transformMatrix.scaleX), null, this.direction)), this.actions.push(new l(this.transformMatrix, "scaleY", this.properties.scale, parseFloat(this.transformMatrix.scaleY), null, this.direction)));else if ((s === "translateX" || s === "translateY") && this.isDOM) {
            if (this.direction === "fromTo") {
              var e = this._getTransformPercentage(s, this.properties[s][1]),
                i = this._getTransformPercentage(s, this.properties[s][0]);
              this.actions.push(new l(this.transformMatrix, s, e, i, null, this.direction));
            } else {
              var _e = this._getTransformPercentage(s, this.properties[s]);
              this.actions.push(new l(this.transformMatrix, s, _e, parseFloat(this.transformMatrix[s]), null, this.direction));
            }
          } else this.direction === "fromTo" ? this.actions.push(new l(this.transformMatrix, s, this.properties[s][1], this.properties[s][0], null, this.direction)) : this.actions.push(new l(this.transformMatrix, s, this.properties[s], parseFloat(this.transformMatrix[s]), null, this.direction));
        } else if (s !== "class") {
          if (this.direction === "fromTo") this.actions.push(new l(this.target.style, s, this.properties[s][1], this.properties[s][0], null, this.direction));else {
            var _e2 = this.unitExpression.exec(t[s]),
              _i = parseFloat(t[s].split(_e2)[0]);
            this.actions.push(new l(this.target.style, s, this.properties[s], _i, _e2, this.direction));
          }
        } else this.actions.push(new l(this.target, s, this.properties[s], null, null, this.direction));
      } else for (var _t in this.properties) this.direction === "fromTo" ? this.actions.push(new l(this.target, _t, this.properties[_t][1], this.properties[_t][0], null, this.direction)) : this.actions.push(new l(this.target, _t, this.properties[_t], this.target[_t], null, this.direction));
      var _iterator = _createForOfIteratorHelper(this.actions),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _t2 = _step.value;
          _t2.setProperties();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "update",
    value: function update(t) {
      var _iterator2 = _createForOfIteratorHelper(this.actions),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _s = _step2.value;
          _s.update(t);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (this.hasTransform) {
        var s = m.multiply2DMatricies(m.multiply2DMatricies(m.scale2D(this.transformMatrix.scaleX, this.transformMatrix.scaleY), m.rotate2D(this.transformMatrix.rotate * (Math.PI / 180))), m.translate2D(this.transformMatrix.translateX, this.transformMatrix.translateY));
        this.target.style.transform = "matrix(".concat(s[0], ", ").concat(s[3], ", ").concat(s[1], ", ").concat(s[4], ", ").concat(s[2], ", ").concat(s[5], ")");
      }
    }
  }]);
  return u;
}();
var _ = /*#__PURE__*/function () {
  function _() {
    _classCallCheck(this, _);
    this.timeScale = 1e3, this.duration = 0, this.startTime = 0, this.currentTime = 0, this.progress = 0, this.started = !1, this.paused = !1, this.rewinding = !1, this.currentAnimationFrame = null, this.previousActionDuration = 0, this.actions = [];
  }
  _createClass(_, [{
    key: "play",
    value: function play() {
      var _this2 = this;
      this.rewinding = !1, this.started || (this.onStartCallback && this.onStartCallback(), this.started = !0), this.paused ? this.startTime = performance.now() - this.duration * this.progress : this.startTime = performance.now(), this.paused = !1;
      var t = function t(s) {
        var e = s - _this2.startTime;
        _this2.progress = Math.min(e / _this2.duration, 1), _this2._animate(), _this2.progress < 1 && (_this2.currentAnimationFrame = requestAnimationFrame(t));
      };
      this.currentAnimationFrame = requestAnimationFrame(t);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = !0, cancelAnimationFrame(this.currentAnimationFrame);
    }
  }, {
    key: "rewind",
    value: function rewind() {
      var _this3 = this;
      this.rewinding = !0, this.paused ? this.startTime = performance.now() - this.duration * (1 - this.progress) : this.startTime = performance.now(), this.paused = !1;
      var t = function t(s) {
        var e = _this3.duration - (s - _this3.startTime);
        _this3.progress = Math.min(e / _this3.duration, 1), _this3._animate(), _this3.progress > 0 && (_this3.currentAnimationFrame = requestAnimationFrame(t));
      };
      this.currentAnimationFrame = requestAnimationFrame(t);
    }
  }, {
    key: "setProgress",
    value: function setProgress(t) {
      var _this4 = this;
      this.progress = t, !this.started && this.progress > 0 && (this.onStartCallback && this.onStartCallback(), this.started = !0);
      var s = function s(e) {
        var i = _this4.duration * _this4.progress;
        _this4._animate();
      };
      this.currentAnimationFrame = requestAnimationFrame(s);
    }
  }, {
    key: "setProgressImmediately",
    value: function setProgressImmediately(t) {
      this.progress = t, !this.started && this.progress > 0 && (this.onStartCallback && this.onStartCallback(), this.started = !0), this._animate();
    }
  }, {
    key: "_animate",
    value: function _animate() {
      var _this5 = this;
      this.currentTime = this.duration * this.progress, this.actions.forEach(function (t, s) {
        t.progress = (_this5.currentTime - t.timings.start) / t.timings.totalDuration, t.started && !t.completed && (t.options.onUpdate && t.options.onUpdate(), t.moments.forEach(function (e, i) {
          var n = Math.max(_this5.currentTime - t.timings.start - t.timings.stagger * i, 0),
            r = Math.min(n / t.timings.duration, 1),
            a = t.timings.easing(r);
          e.update(a), t.options.toggle && r !== 1 && e.update(0);
        })), t.progress > 0 ? (t.started || (t.options.onStart && t.options.onStart(), t.timings.start !== 0 && t.direction !== "from" && t.moments.forEach(function (e) {
          e.setProperties();
        })), t.started = !0) : (t.started && (t.direction === "from" || t.direction === "fromTo") ? t.direction === "from" ? t.timings.start !== 0 ? t.moments.forEach(function (e) {
          e.update(1);
        }) : t.moments.forEach(function (e) {
          e.update(0);
        }) : t.moments.forEach(function (e) {
          e.update(0);
        }) : !t.started && !t.initialized && (t.direction === "from" || t.direction === "fromTo") && (t.moments.forEach(function (e) {
          e.update(0);
        }), t.initialized = !0), t.options.toggle && t.moments.forEach(function (e) {
          e.update(0);
        }), t.started = !1), t.progress >= 1 ? (t.completed || (t.moments.forEach(function (e) {
          e.update(1);
        }), t.options.onComplete && t.options.onComplete()), t.completed = !0) : t.completed = !1;
      });
    }
  }, {
    key: "to",
    value: function to(t, s, e) {
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var n = !1,
        r = t;
      (t instanceof window.HTMLElement || t instanceof window.NodeList || t instanceof window.SVGPathElement || t instanceof window.SVGElement || t instanceof window.SVGCircleElement) && (n = !0, t instanceof window.NodeList && (r = _toConsumableArray(t)));
      var a = this._setTargets(r),
        h = this._setTimings(a, e, i),
        o = [];
      a.forEach(function (c) {
        o.push(new u(c, s, "to", n));
      }), this._add(o, h, e, "to");
    }
  }, {
    key: "from",
    value: function from(t, s, e) {
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var n = !1,
        r = t;
      (t instanceof window.HTMLElement || t instanceof window.NodeList || t instanceof window.SVGPathElement || t instanceof window.SVGElement || t instanceof window.SVGCircleElement) && (n = !0, t instanceof window.NodeList && (r = _toConsumableArray(t)));
      var a = this._setTargets(r),
        h = this._setTimings(a, e, i),
        o = [];
      a.forEach(function (c) {
        o.push(new u(c, s, "from", n));
      }), this._add(o, h, e, "from");
    }
  }, {
    key: "fromTo",
    value: function fromTo(t, s, e) {
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var n = !1,
        r = t;
      (t instanceof window.HTMLElement || t instanceof window.NodeList || t instanceof window.SVGPathElement || t instanceof window.SVGElement || t instanceof window.SVGCircleElement) && (n = !0, t instanceof window.NodeList && (r = _toConsumableArray(t)));
      var a = this._setTargets(r),
        h = this._setTimings(a, e, i),
        o = [];
      a.forEach(function (c) {
        o.push(new u(c, s, "fromTo", n));
      }), this._add(o, h, e, "fromTo");
    }
  }, {
    key: "addClass",
    value: function addClass(t, s, e) {
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var n = !1,
        r = t;
      (t instanceof window.HTMLElement || t instanceof window.NodeList) && (n = !0, t instanceof window.NodeList && (r = _toConsumableArray(t)));
      var a = this._setTargets(r),
        h = this._setTimings(a, e, i),
        o = [];
      a.forEach(function (c) {
        o.push(new u(c, s, "addClass", n));
      }), this._add(o, h, e, "addClass");
    }
  }, {
    key: "removeClass",
    value: function removeClass(t, s, e) {
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var n = !1,
        r = t;
      (t instanceof window.HTMLElement || t instanceof window.NodeList) && (n = !0, t instanceof window.NodeList && (r = _toConsumableArray(t)));
      var a = this._setTargets(r),
        h = this._setTimings(a, e, i),
        o = [];
      a.forEach(function (c) {
        o.push(new u(c, s, "removeClass", n));
      }), this._add(o, h, e, "removeClass");
    }
  }, {
    key: "onStart",
    value: function onStart(t) {
      this.onStartCallback = t;
    }
  }, {
    key: "_add",
    value: function _add(t, s, e, i) {
      this.actions.push({
        moments: t,
        timings: s,
        options: e,
        direction: i,
        progress: 0,
        initialized: !1,
        started: !1,
        completed: !1
      }), this.setProgress(0);
    }
  }, {
    key: "_setTargets",
    value: function _setTargets(t) {
      var s = null;
      return Array.isArray(t) ? s = t : s = [t], s;
    }
  }, {
    key: "_setTimings",
    value: function _setTimings(t, s, e) {
      var i = {},
        n = s.duration ? s.duration * this.timeScale : 1,
        r = 0;
      e !== null ? r = e * this.timeScale : r = this.duration, i.stagger = s.stagger ? s.stagger * this.timeScale : 0;
      var a = s.delay ? s.delay * this.timeScale + r : r,
        h = n + (t.length - 1) * i.stagger;
      return i.start = a, i.end = a + h, i.duration = n, i.totalDuration = h, i.easing = p.get(s.ease), this.previousActionDuration = i.end, this.duration = Math.max(this.previousActionDuration, this.duration), i;
    }
  }]);
  return _;
}();
var M = /*#__PURE__*/function () {
  function M(t, s) {
    var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, M);
    this.element = t, this.scene = s, this.options = e, this._init();
  }
  _createClass(M, [{
    key: "_init",
    value: function _init() {
      this.observer = null, this.progress = 0, this.scrollDistance = 0, this.scrollPosition = 0, this.element.parentElement.style.height = "auto", this.viewportHeight = window.innerHeight, this.isIntersecting = !1, this.options.pinned ? (this.offset = this.element.parentElement.offsetTop, this.offset += this.options.beginOnIntersection ? -this.element.parentElement.offsetHeight : 0, this.scrollHeight = this.scene.duration, this._setScrollHeight(), this.scrollHeight += this.options.offset ? this.options.offset : 0) : (this.offset = window.pageYOffset + this.element.getBoundingClientRect().top - this.viewportHeight, this.scrollHeight = this.viewportHeight + this.element.offsetHeight), this._scrollListener = this._scrollListener.bind(this), this._createObserver();
    }
  }, {
    key: "resize",
    value: function resize() {
      this.viewportHeight = window.innerHeight, this.options.pinned ? (this.offset = this.element.parentElement.offsetTop, this.offset += this.options.beginOnIntersection ? -this.element.parentElement.offsetHeight : 0, this.scrollHeight = this.scene.duration, this._setScrollHeight(), this.scrollHeight += this.options.offset ? this.options.offset : 0) : (this.offset = window.pageYOffset + this.element.getBoundingClientRect().top - this.viewportHeight, this.scrollHeight = this.viewportHeight + this.element.offsetHeight);
    }
  }, {
    key: "setScene",
    value: function setScene(t) {
      this.scene = t, this._init();
    }
  }, {
    key: "_setScrollHeight",
    value: function _setScrollHeight() {
      var t = this.scrollHeight + (this.options.beginOnIntersection ? 0 : this.viewportHeight);
      this.element.parentElement.style.height = "".concat(t / this.viewportHeight * 100, "vh");
    }
  }, {
    key: "_scrollListener",
    value: function _scrollListener(t) {
      this.scrollDistance = t.target.scrollingElement.scrollTop, this.scrollPosition = this.scrollDistance - this.offset, this.progress = Math.min(Math.max(this.scrollPosition / this.scrollHeight, 0), 1);
    }
  }, {
    key: "_createObserver",
    value: function _createObserver() {
      var _this6 = this;
      this.observer = new IntersectionObserver(function (t) {
        t.forEach(function (s) {
          s.isIntersecting ? (_this6.isIntersecting = !0, window.addEventListener("scroll", _this6._scrollListener)) : (_this6.isIntersecting = !1, window.removeEventListener("scroll", _this6._scrollListener), _this6.progress = Math.round(_this6.progress));
        });
      }, {
        threshold: this.options.threshold ? this.options.threshold : 0
      }), this.observer.observe(this.element);
    }
  }]);
  return M;
}();
var w = /*#__PURE__*/function () {
  function w() {
    _classCallCheck(this, w);
  }
  _createClass(w, null, [{
    key: "to",
    value: function to(t, s, e) {
      var i = !1,
        n = t;
      (t instanceof window.HTMLElement || t instanceof window.NodeList) && (i = !0, t instanceof window.NodeList && (n = _toConsumableArray(t)));
      var r = this._setTargets(n),
        a = this._setTimings(r, e),
        h = [];
      r.forEach(function (o) {
        h.push(new u(o, s, "to", i));
      }), this._animate(h, a, e);
    }
  }, {
    key: "from",
    value: function from(t, s, e) {
      var i = !1,
        n = t;
      (t instanceof window.HTMLElement || t instanceof window.NodeList) && (i = !0, t instanceof window.NodeList && (n = _toConsumableArray(t)));
      var r = this._setTargets(n),
        a = this._setTimings(r, e),
        h = [];
      r.forEach(function (o) {
        h.push(new u(o, s, "from", i));
      }), this._animate(h, a, e);
    }
  }, {
    key: "fromTo",
    value: function fromTo(t, s, e) {
      var i = !1,
        n = t;
      (t instanceof window.HTMLElement || t instanceof window.NodeList) && (i = !0, t instanceof window.NodeList && (n = _toConsumableArray(t)));
      var r = this._setTargets(n),
        a = this._setTimings(r, e),
        h = [];
      r.forEach(function (o) {
        h.push(new u(o, s, "fromTo", i));
      }), this._animate(h, a, e);
    }
  }, {
    key: "addClass",
    value: function addClass(t, s, e) {
      var i = !1,
        n = t,
        r = e || {};
      (t instanceof window.HTMLElement || t instanceof window.NodeList) && (i = !0, t instanceof window.NodeList && (n = _toConsumableArray(t)));
      var a = this._setTargets(n),
        h = this._setTimings(a, r),
        o = [];
      a.forEach(function (c) {
        o.push(new u(c, s, "addClass", i));
      }), this._animate(o, h, r);
    }
  }, {
    key: "removeClass",
    value: function removeClass(t, s, e) {
      var i = !1,
        n = t,
        r = e || {};
      (t instanceof window.HTMLElement || t instanceof window.NodeList) && (i = !0, t instanceof window.NodeList && (n = _toConsumableArray(t)));
      var a = this._setTargets(n),
        h = this._setTimings(a, r),
        o = [];
      a.forEach(function (c) {
        o.push(new u(c, s, "removeClass", i));
      }), this._animate(o, h, r);
    }
  }, {
    key: "_animate",
    value: function _animate(t, s, e) {
      function i(r) {
        var a = r - n - s.delay,
          h = Math.min(a / s.totalDuration, 1);
        t.forEach(function (o, c) {
          var d = Math.min((a - s.stagger * c) / s.duration, 1);
          if (d > 0) {
            var g = s.easing(d);
            o.update(g);
          }
        }), h < 1 ? (e.onUpdate && e.onUpdate(), requestAnimationFrame(i)) : (t.forEach(function (o) {
          o.update(1);
        }), e.onComplete && e.onComplete());
      }
      e.onStart && e.onStart();
      var n = performance.now();
      requestAnimationFrame(i);
    }
  }, {
    key: "_setTargets",
    value: function _setTargets(t) {
      var s = null;
      return Array.isArray(t) ? s = t : s = [t], s;
    }
  }, {
    key: "_setTimings",
    value: function _setTimings(t, s) {
      var e = 1e3,
        i = {};
      return i.duration = s.duration ? s.duration * e : 1, i.delay = s.delay ? s.delay * e : 0, i.stagger = s.stagger ? s.stagger * e : 0, i.totalDuration = i.duration + (t.length - 1) * i.stagger, i.easing = p.get(s.ease), i;
    }
  }]);
  return w;
}();
w.Scene = _;
w.Camera = M;
0 && (module.exports = {});
},{}],"script.js":[function(require,module,exports) {
"use strict";

var _directorMin = _interopRequireDefault(require("./director.min.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Importing Director

console.log("hello!");

// Setup for line

var DOMTranslateX = 0;
var lineElement = document.querySelector('#line');
var lineContainer = document.querySelector('#i-am-spacer');
var calculateTranslateXOffset = function calculateTranslateXOffset() {
  var lineBounds = lineElement.getBoundingClientRect();
  var containerBounds = lineContainer.getBoundingClientRect();
  var lineWidth = lineBounds.width;
  var containerWidth = containerBounds.width;
  var cardToContainerRatio = lineWidth / containerWidth;
  var translateDistance = (1 - cardToContainerRatio) / cardToContainerRatio;
  return translateDistance * 100;
};
DOMTranslateX = calculateTranslateXOffset();

// animating line
var DOMLineWrapper = document.querySelector('#i-am-spacer');
var DOMCameraLine = document.querySelector('#line');
var DOMLineScene = new _directorMin.default.Scene();
DOMLineScene.fromTo(DOMCameraLine, {
  translateX: [DOMTranslateX / 4, DOMTranslateX / 2]
}, {
  duration: 1,
  ease: 'easeOutQuint'
}, 0.25);
var DOMCamera = new _directorMin.default.Camera(DOMLineWrapper, DOMLineScene);
var update = function update() {
  DOMLineScene.setProgress(DOMCamera.progress);
  window.requestAnimationFrame(update);
};
window.requestAnimationFrame(update);

// // when scrolled past a certain point, change line position to be fixed
var line = document.getElementById('line');
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // If the "designer" div is intersecting with the viewport, change the display property of the "line" div to "fixed"
//         line.style.position = 'fixed';
// 		    line.style.top = '12.5vh';
//       } else {
//         // If the "designer" div is not intersecting with the viewport, revert the display property of the "line" div to its default value
//         line.style.position = 'absolute';
// 		    line.style.top = '80vh';
//       }
//     });
//   });

// when scrolled past a certain point, change line position to be fixed

var centerLine = document.getElementById('center-line');
var centerLineContainer = document.getElementById('center-line-container');
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // making line replacement
      line.style.display = 'none';
      centerLineContainer.style.display = 'flex';
    } else {
      // If the "designer" div is not intersecting with the viewport, revert the display property of the "line" div to its default value
      line.style.display = 'block';
      line.style.position = 'absolute';
      line.style.top = '80vh';
      centerLineContainer.style.display = 'none';
    }
  });
});

// observe to see if line should be visible
var lineVisible = document.getElementById('line-visible');
observer.observe(lineVisible);

// DOM Camera 2
var iAmContainer = document.getElementById('i-am-container');
var iAmSection = document.getElementById('i-am');
var iAmText = document.getElementById('i-am-text');
var DOMIAmScene = new _directorMin.default.Scene();
DOMIAmScene.fromTo(iAmText, {
  opacity: [0, 1]
}, {
  duration: 1,
  ease: 'easeInCirc'
}, 0.25);
var DOMCamera2 = new _directorMin.default.Camera(iAmSection, DOMIAmScene, {
  offset: 1000
});
var update2 = function update2() {
  DOMIAmScene.setProgress(DOMCamera2.progress);
  window.requestAnimationFrame(update2);
};
window.requestAnimationFrame(update2);

// when scrolled past a certain point, change "I am" position to be fixed
var observer2 = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // If the "designer" div is intersecting with the viewport, change the display property of the "I am" div to "fixed"
      iAmText.style.position = 'fixed';
      iAmText.style.left = '35vw';
      iAmText.style.top = '47.5vh';
    } else {
      // If the "designer" div is not intersecting with the viewport, revert the display property of the "I am" div to its default value
      iAmText.style.position = 'absolute';
      iAmText.style.left = '35vw';
      iAmText.style.top = '10vh';
    }
  });
});
var iAmVisible = document.getElementById('i-am-visible');
observer2.observe(iAmVisible);
var designerSvg = document.getElementById('designer-svg');

// DOM Camera 3
var designerSection = document.getElementById('designer');
var DOMDesignerScene = new _directorMin.default.Scene();
DOMDesignerScene.fromTo(designerSvg, {
  opacity: [0, 1]
}, {
  duration: 1,
  ease: 'easeInCirc'
}, 0.25);
var DOMCamera3 = new _directorMin.default.Camera(designerSection, DOMDesignerScene, {
  offset: 1000
});
var update3 = function update3() {
  DOMDesignerScene.setProgress(DOMCamera3.progress);
  window.requestAnimationFrame(update3);
};
window.requestAnimationFrame(update3);

// when scrolled past a certain point, change "I am" position to be fixed
var observer3 = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // If the "designer" div is intersecting with the viewport, change the display property of the "I am" div to "fixed"
      designerSvg.style.position = 'fixed';
      designerSvg.style.left = '75vw';
      designerSvg.style.top = '50vh';
    } else {
      // If the "designer" div is not intersecting with the viewport, revert the display property of the "I am" div to its default value
      designerSvg.style.position = 'absolute';
      designerSvg.style.left = '75vw';
      designerSvg.style.top = '50vh';
    }
  });
});
var designerVisible = document.getElementById("designer-visible");
observer3.observe(designerVisible);

// DOM Camera 4
var developerSpacer = document.getElementById('developer-spacer');
var blackBackground = document.querySelector('.black-background');
// const fixedCenterLine = document.getElementById('center-line');
var DOMDeveloperSpacerScene = new _directorMin.default.Scene();
DOMDeveloperSpacerScene.fromTo(designerSvg, {
  opacity: [1, 0]
}, {
  duration: 1,
  ease: 'easeInCirc'
}, 0.25);
DOMDeveloperSpacerScene.fromTo(centerLine, {
  scaleY: [1, 0.25]
}, {
  duration: 1,
  ease: 'easeInCirc'
}, 0.25);
DOMDeveloperSpacerScene.fromTo(blackBackground, {
  scale: [0, 1],
  opacity: [0, 1]
}, {
  duration: 1,
  ease: 'easeInCirc'
}, 0.25);
var DOMCamera4 = new _directorMin.default.Camera(developerSpacer, DOMDeveloperSpacerScene, {
  offset: 1000
});
// fade background to black
// change I am a text to white

var update4 = function update4() {
  DOMDeveloperSpacerScene.setProgress(DOMCamera4.progress);
  window.requestAnimationFrame(update4);
};
window.requestAnimationFrame(update4);

// when scrolled past a certain point, change black background is fixed
var observer4 = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // If the "designer" div is intersecting with the viewport, change the display property of the "I am" div to "fixed"
      blackBackground.style.position = 'fixed';
      blackBackground.style.top = '0vh';
    } else {
      // If the "designer" div is not intersecting with the viewport, revert the display property of the "I am" div to its default value
      blackBackground.style.position = 'absolute';
    }
  });
});
var blackBgVisible = document.getElementById("black-bg-visible");
observer4.observe(blackBgVisible);
function typeWord(word, target) {
  if (typeof word !== 'string') {
    console.error('The "word" parameter must be a string.');
    return;
  }
  var wordArray = word.split("");
  var displayText = "";
  var _loop = function _loop(i) {
    setTimeout(function () {
      // Use an anonymous function or arrow function to preserve the current value of 'i'
      displayText = displayText + wordArray[i];
      target.innerHTML = displayText;
    }, 200 * i); // Multiply the delay by 'i' to increment the delay for each character
  };
  for (var i = 0; i < wordArray.length; i++) {
    _loop(i);
  }
}

// when scrolled past a certain point, change black background is fixed
var typedText = document.getElementById("typed-text");
var observer5 = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      _directorMin.default.addClass(iAmText, {
        class: "white-txt"
      });
      // add a new line that is the same dimensions and is in the middle of screen
      _directorMin.default.addClass(centerLine, {
        class: "blinking"
      });
      typeWord('developer', typedText);

      // make text colour white
      // make line blink
      // wait a lil bit then start adding span stuff
    } else {
      _directorMin.default.removeClass(iAmText, {
        class: "white-txt"
      });
      _directorMin.default.removeClass(centerLine, {
        class: "blinking"
      });
      typedText.innerHTML = "";
      // text colour is black
      // line is not blinking
      // delete whatever is in the span
    }
  });
});

var developerTypeSection = document.getElementById("developer-type");
observer5.observe(developerTypeSection);

// DOM Camera 5
var blackBgExit = document.getElementById('black-bg-exit');
var blackBgExitScene = new _directorMin.default.Scene();

// blackBgExitScene.fromTo(designerSvg, {opacity: [1, 0]}, { duration: 1, ease: 'easeInCirc' }, 0.25)
blackBgExitScene.fromTo(centerLine, {
  opacity: [1, 0]
}, {
  duration: 1,
  ease: 'easeInCirc'
}, 0.25);
blackBgExitScene.fromTo(blackBackground, {
  opacity: [1, 0]
}, {
  duration: 1,
  ease: 'easeInCirc'
}, 0.25);
blackBgExitScene.fromTo(iAmText, {
  opacity: [1, 0]
}, {
  duration: 1,
  ease: 'easeInCirc'
}, 0.25);
blackBgExitScene.fromTo(typedText, {
  opacity: [1, 0]
}, {
  duration: 1,
  ease: 'easeInCirc'
}, 0.25);
var DOMCamera5 = new _directorMin.default.Camera(blackBgExit, blackBgExitScene, {
  offset: 1000
});
var update5 = function update5() {
  blackBgExitScene.setProgress(DOMCamera5.progress);
  window.requestAnimationFrame(update5);
};
window.requestAnimationFrame(update5);

// fade background to black
// change I am a text to white

// add scroll down element for intro

//https://www.youtube.com/watch?v=cBOW8Nbb2PQ
// writing effect for designer part
},{"./director.min.js":"director.min.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56545" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map