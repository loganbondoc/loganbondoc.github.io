// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gP2K6":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4d0423473b06b0f7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"2OD7o":[function(require,module,exports) {
// Importing Director
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _directorMinJs = require("./director.min.js");
var _directorMinJsDefault = parcelHelpers.interopDefault(_directorMinJs);
console.log("hello!");
// Setup for line
let DOMTranslateX = 0;
const lineElement = document.querySelector("#line");
const lineContainer = document.querySelector("#i-am-spacer");
const calculateTranslateXOffset = ()=>{
    const lineBounds = lineElement.getBoundingClientRect();
    const containerBounds = lineContainer.getBoundingClientRect();
    const lineWidth = lineBounds.width;
    const containerWidth = containerBounds.width;
    const cardToContainerRatio = lineWidth / containerWidth;
    const translateDistance = (1 - cardToContainerRatio) / cardToContainerRatio;
    return translateDistance * 100;
};
DOMTranslateX = calculateTranslateXOffset();
// animating line
const DOMLineWrapper = document.querySelector("#i-am-spacer");
const DOMCameraLine = document.querySelector("#line");
const DOMLineScene = new (0, _directorMinJsDefault.default).Scene();
DOMLineScene.fromTo(DOMCameraLine, {
    translateX: [
        DOMTranslateX / 4,
        DOMTranslateX / 2
    ]
}, {
    duration: 1,
    ease: "easeOutQuint"
}, 0.25);
const DOMCamera = new (0, _directorMinJsDefault.default).Camera(DOMLineWrapper, DOMLineScene);
var update = ()=>{
    DOMLineScene.setProgress(DOMCamera.progress);
    window.requestAnimationFrame(update);
};
window.requestAnimationFrame(update);
// // when scrolled past a certain point, change line position to be fixed
const line = document.getElementById("line");
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
const centerLine = document.getElementById("center-line");
const centerLineContainer = document.getElementById("center-line-container");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            // making line replacement
            line.style.display = "none";
            centerLineContainer.style.display = "flex";
        } else {
            // If the "designer" div is not intersecting with the viewport, revert the display property of the "line" div to its default value
            line.style.display = "block";
            line.style.position = "absolute";
            line.style.top = "80vh";
            centerLineContainer.style.display = "none";
        }
    });
});
// observe to see if line should be visible
const lineVisible = document.getElementById("line-visible");
observer.observe(lineVisible);
// DOM Camera 2
const iAmContainer = document.getElementById("i-am-container");
const iAmSection = document.getElementById("i-am");
const iAmText = document.getElementById("i-am-text");
const DOMIAmScene = new (0, _directorMinJsDefault.default).Scene();
DOMIAmScene.fromTo(iAmText, {
    opacity: [
        0,
        1
    ]
}, {
    duration: 1,
    ease: "easeInCirc"
}, 0.25);
const DOMCamera2 = new (0, _directorMinJsDefault.default).Camera(iAmSection, DOMIAmScene, {
    offset: 1000
});
var update2 = ()=>{
    DOMIAmScene.setProgress(DOMCamera2.progress);
    window.requestAnimationFrame(update2);
};
window.requestAnimationFrame(update2);
// when scrolled past a certain point, change "I am" position to be fixed
const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            // If the "designer" div is intersecting with the viewport, change the display property of the "I am" div to "fixed"
            iAmText.style.position = "fixed";
            iAmText.style.left = "35vw";
            iAmText.style.top = "47.5vh";
        } else {
            // If the "designer" div is not intersecting with the viewport, revert the display property of the "I am" div to its default value
            iAmText.style.position = "absolute";
            iAmText.style.left = "35vw";
            iAmText.style.top = "10vh";
        }
    });
});
const iAmVisible = document.getElementById("i-am-visible");
observer2.observe(iAmVisible);
const designerSvg = document.getElementById("designer-svg");
// DOM Camera 3
const designerSection = document.getElementById("designer");
const DOMDesignerScene = new (0, _directorMinJsDefault.default).Scene();
DOMDesignerScene.fromTo(designerSvg, {
    opacity: [
        0,
        1
    ]
}, {
    duration: 1,
    ease: "easeInCirc"
}, 0.25);
const DOMCamera3 = new (0, _directorMinJsDefault.default).Camera(designerSection, DOMDesignerScene, {
    offset: 1000
});
var update3 = ()=>{
    DOMDesignerScene.setProgress(DOMCamera3.progress);
    window.requestAnimationFrame(update3);
};
window.requestAnimationFrame(update3);
// when scrolled past a certain point, change "I am" position to be fixed
const observer3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) // If the "designer" div is intersecting with the viewport, change the display property of the "I am" div to "fixed"
        // designerSvg.style.position = 'fixed';
        // designerSvg.style.left = '65vw';
        // designerSvg.style.top = '50vh';
        designerSvg.style.display = "block";
        else // If the "designer" div is not intersecting with the viewport, revert the display property of the "I am" div to its default value
        // designerSvg.style.position = 'absolute';
        // designerSvg.style.left = '65vw';
        // designerSvg.style.top = '50vh';
        designerSvg.style.display = "none";
    });
});
const designerVisible = document.getElementById("designer-visible");
observer3.observe(designerVisible);
// DOM Camera 4
const developerSpacer = document.getElementById("developer-spacer");
const blackBackground = document.querySelector(".black-background");
// const fixedCenterLine = document.getElementById('center-line');
const DOMDeveloperSpacerScene = new (0, _directorMinJsDefault.default).Scene();
DOMDeveloperSpacerScene.fromTo(designerSvg, {
    opacity: [
        1,
        0
    ]
}, {
    duration: 1,
    ease: "easeInCirc"
}, 0.25);
DOMDeveloperSpacerScene.fromTo(centerLine, {
    scaleY: [
        1,
        0.25
    ]
}, {
    duration: 1,
    ease: "easeInCirc"
}, 0.25);
DOMDeveloperSpacerScene.fromTo(blackBackground, {
    scale: [
        0,
        1
    ],
    opacity: [
        0,
        1
    ]
}, {
    duration: 1,
    ease: "easeInCirc"
}, 0.25);
const DOMCamera4 = new (0, _directorMinJsDefault.default).Camera(developerSpacer, DOMDeveloperSpacerScene, {
    offset: 1000
});
// fade background to black
// change I am a text to white
var update4 = ()=>{
    DOMDeveloperSpacerScene.setProgress(DOMCamera4.progress);
    window.requestAnimationFrame(update4);
};
window.requestAnimationFrame(update4);
// when scrolled past a certain point, change black background is fixed
const observer4 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            // If the "designer" div is intersecting with the viewport, change the display property of the "I am" div to "fixed"
            blackBackground.style.position = "fixed";
            blackBackground.style.top = "0vh";
        } else // If the "designer" div is not intersecting with the viewport, revert the display property of the "I am" div to its default value
        blackBackground.style.position = "absolute";
    });
});
const blackBgVisible = document.getElementById("black-bg-visible");
observer4.observe(blackBgVisible);
function typeWord(word, target) {
    if (typeof word !== "string") {
        console.error('The "word" parameter must be a string.');
        return;
    }
    let wordArray = word.split("");
    var displayText = "";
    for(let i = 0; i < wordArray.length; i++)setTimeout(()=>{
        displayText = displayText + wordArray[i];
        target.innerHTML = displayText;
    }, 200 * i); // Multiply the delay by 'i' to increment the delay for each character
}
// when scrolled past a certain point, change black background is fixed
const typedText = document.getElementById("typed-text");
const observer5 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            (0, _directorMinJsDefault.default).addClass(iAmText, {
                class: "white-txt"
            });
            // add a new line that is the same dimensions and is in the middle of screen
            (0, _directorMinJsDefault.default).addClass(centerLine, {
                class: "blinking"
            });
            typeWord("developer", typedText);
        // make text colour white
        // make line blink
        // wait a lil bit then start adding span stuff
        } else {
            (0, _directorMinJsDefault.default).removeClass(iAmText, {
                class: "white-txt"
            });
            (0, _directorMinJsDefault.default).removeClass(centerLine, {
                class: "blinking"
            });
            typedText.innerHTML = "";
        // text colour is black
        // line is not blinking
        // delete whatever is in the span
        }
    });
});
const developerTypeSection = document.getElementById("developer-type");
observer5.observe(developerTypeSection);
// DOM Camera 5
const blackBgExit = document.getElementById("black-bg-exit");
const blackBgExitScene = new (0, _directorMinJsDefault.default).Scene();
// blackBgExitScene.fromTo(designerSvg, {opacity: [1, 0]}, { duration: 1, ease: 'easeInCirc' }, 0.25)
blackBgExitScene.fromTo(centerLine, {
    opacity: [
        1,
        0
    ]
}, {
    duration: 1,
    ease: "easeInCirc"
}, 0.25);
blackBgExitScene.fromTo(blackBackground, {
    opacity: [
        1,
        0
    ]
}, {
    duration: 1,
    ease: "easeInCirc"
}, 0.25);
blackBgExitScene.fromTo(iAmText, {
    opacity: [
        1,
        0
    ]
}, {
    duration: 1,
    ease: "easeInCirc"
}, 0.25);
blackBgExitScene.fromTo(typedText, {
    opacity: [
        1,
        0
    ]
}, {
    duration: 1,
    ease: "easeInCirc"
}, 0.25);
const DOMCamera5 = new (0, _directorMinJsDefault.default).Camera(blackBgExit, blackBgExitScene, {
    offset: 1000
});
var update5 = ()=>{
    blackBgExitScene.setProgress(DOMCamera5.progress);
    window.requestAnimationFrame(update5);
};
window.requestAnimationFrame(update5) // fade background to black
 // change I am a text to white
 // add scroll down element for intro
 //https://www.youtube.com/watch?v=cBOW8Nbb2PQ
 // writing effect for designer part
;

},{"./director.min.js":"eThzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eThzt":[function(require,module,exports) {
var y = Object.defineProperty;
var D = (f)=>y(f, "__esModule", {
        value: !0
    });
var b = (f, t)=>{
    D(f);
    for(var s in t)y(f, s, {
        get: t[s],
        enumerable: !0
    });
};
b(exports, {
    default: ()=>w
});
var p = class {
    static get(t) {
        switch(t){
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
    static _easeLinear(t) {
        return t;
    }
    static _easeInSine(t) {
        return -Math.cos(t * (Math.PI / 2)) + 1;
    }
    static _easeOutSine(t) {
        return Math.sin(t * (Math.PI / 2));
    }
    static _easeInOutSine(t) {
        return -0.5 * (Math.cos(Math.PI * t) - 1);
    }
    static _easeInQuad(t) {
        return t ** 2;
    }
    static _easeOutQuad(t) {
        return 1 - (1 - t) ** 2;
    }
    static _easeInOutQuad(t) {
        return t < .5 ? (t * 2) ** 2 / 2 : 1 - ((1 - t) * 2) ** 2 / 2;
    }
    static _easeInCubic(t) {
        return t ** 3;
    }
    static _easeOutCubic(t) {
        return 1 - (1 - t) ** 3;
    }
    static _easeInOutCubic(t) {
        return t < .5 ? (t * 2) ** 3 / 2 : 1 - ((1 - t) * 2) ** 3 / 2;
    }
    static _easeInQuartic(t) {
        return t ** 4;
    }
    static _easeOutQuartic(t) {
        return 1 - (1 - t) ** 4;
    }
    static _easeInOutQuartic(t) {
        return t < .5 ? (t * 2) ** 4 / 2 : 1 - ((1 - t) * 2) ** 4 / 2;
    }
    static _easeInQuintic(t) {
        return t ** 5;
    }
    static _easeOutQuintic(t) {
        return 1 - (1 - t) ** 5;
    }
    static _easeInOutQuintic(t) {
        return t < .5 ? (t * 2) ** 5 / 2 : 1 - ((1 - t) * 2) ** 5 / 2;
    }
    static _easeInExpo(t) {
        return Math.pow(2, 10 * (t - 1)) - .001;
    }
    static _easeOutExpo(t) {
        return 1 - Math.pow(2, -10 * t);
    }
    static _easeInOutExpo(t) {
        return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
    }
    static _easeOutSpring(t) {
        let s = 1, e = .3, i = e / (Math.PI * 2) * (Math.asin(1 / s) || 0);
        return s * Math.pow(2, -10 * t) * Math.sin((t - i) * (Math.PI * 2) / e) + 1;
    }
    static _easeOutBack(t) {
        let s = 1.70158;
        return (t = t - 1) * t * ((s + 1) * t + s) + 1;
    }
};
var m = class {
    static multiply2DMatricies(t, s) {
        let e = t[0], i = t[1], n = t[2], r = t[3], a = t[4], h = t[5], o = t[6], c = t[7], d = t[8], g = s[0], T = s[1], O = s[2], E = s[3], I = s[4], S = s[5], x = s[6], L = s[7], C = s[8];
        return [
            g * e + T * r + O * o,
            g * i + T * a + O * c,
            g * n + T * h + O * d,
            E * e + I * r + S * o,
            E * i + I * a + S * c,
            E * n + I * h + S * d,
            x * e + L * r + C * o,
            x * i + L * a + C * c,
            x * n + L * h + C * d
        ];
    }
    static translate2D(t, s) {
        return [
            1,
            0,
            t,
            0,
            1,
            s,
            0,
            0,
            1
        ];
    }
    static scale2D(t, s) {
        return [
            t,
            0,
            0,
            0,
            s,
            0,
            0,
            0,
            1
        ];
    }
    static rotate2D(t) {
        return [
            Math.cos(t),
            -Math.sin(t),
            0,
            Math.sin(t),
            Math.cos(t),
            0,
            0,
            0,
            1
        ];
    }
};
var l = class {
    constructor(t, s, e, i, n, r){
        this.target = t, this.property = s, this.targetValue = e, this.currentValue = i, this.units = n, this.direction = r, this.propertyDelta = {}, this.setProperties();
    }
    setProperties() {
        switch(this.direction){
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
                this.classFunction = ()=>{
                    this.target.classList.add(this.targetValue);
                };
                break;
            case "removeClass":
                this.classFunction = ()=>{
                    this.target.classList.remove(this.targetValue);
                };
                break;
            default:
                break;
        }
    }
    update(t) {
        this.property !== "class" ? this.target[this.property] = this.propertyDelta.start + t * this.propertyDelta.delta + this.units : (t === 0 && (this.direction === "addClass" ? this.target.classList.remove(this.targetValue) : this.target.classList.add(this.targetValue)), t === 1 && this.classFunction());
    }
};
var u = class {
    constructor(t, s, e, i){
        this.target = t, this.properties = s, this.direction = e, this.isDOM = i, this.unitExpression = /[a-z]+|%/, this.hasTransform = !1, this.transformPropertyKeys = [
            "translateX",
            "translateY",
            "rotate",
            "scale",
            "scaleX",
            "scaleY"
        ], this.transformMatrix = {}, this.isDOM && (this.bounds = this.target.getBoundingClientRect()), this.setProperties();
    }
    _getTransformMatrix(t) {
        if (t === "none" || t === void 0) return {
            translateX: 0,
            translateY: 0,
            scaleX: 1,
            scaleY: 1,
            rotate: 0
        };
        this.transformType = t.includes("3d") ? "3d" : "2d";
        let s = t.match(/matrix.*\((.+)\)/)[1].split(", ");
        if (this.transformType === "2d") return {
            translateX: s[4],
            translateY: s[5],
            scaleX: s[0],
            scaleY: s[3],
            rotate: Math.atan2(s[1], s[0]) * (180 / Math.PI)
        };
    }
    _getTransformPercentage(t, s) {
        return t === "translateX" ? s *= this.bounds.width / 100 : s *= this.bounds.height / 100;
    }
    setProperties() {
        if (this.actions = [], this.isDOM) {
            let t = getComputedStyle(this.target);
            this.transformMatrix = this._getTransformMatrix(t.transform);
            for(let s in this.properties)if (this.transformPropertyKeys.includes(s)) {
                if (this.hasTransform = !0, s === "scale") this.direction === "fromTo" ? (this.actions.push(new l(this.transformMatrix, "scaleX", this.properties.scale[1], this.properties.scale[0], null, this.direction)), this.actions.push(new l(this.transformMatrix, "scaleY", this.properties.scale[1], this.properties.scale[0], null, this.direction))) : (this.actions.push(new l(this.transformMatrix, "scaleX", this.properties.scale, parseFloat(this.transformMatrix.scaleX), null, this.direction)), this.actions.push(new l(this.transformMatrix, "scaleY", this.properties.scale, parseFloat(this.transformMatrix.scaleY), null, this.direction)));
                else if ((s === "translateX" || s === "translateY") && this.isDOM) {
                    if (this.direction === "fromTo") {
                        let e = this._getTransformPercentage(s, this.properties[s][1]), i = this._getTransformPercentage(s, this.properties[s][0]);
                        this.actions.push(new l(this.transformMatrix, s, e, i, null, this.direction));
                    } else {
                        let e = this._getTransformPercentage(s, this.properties[s]);
                        this.actions.push(new l(this.transformMatrix, s, e, parseFloat(this.transformMatrix[s]), null, this.direction));
                    }
                } else this.direction === "fromTo" ? this.actions.push(new l(this.transformMatrix, s, this.properties[s][1], this.properties[s][0], null, this.direction)) : this.actions.push(new l(this.transformMatrix, s, this.properties[s], parseFloat(this.transformMatrix[s]), null, this.direction));
            } else if (s !== "class") {
                if (this.direction === "fromTo") this.actions.push(new l(this.target.style, s, this.properties[s][1], this.properties[s][0], null, this.direction));
                else {
                    let e = this.unitExpression.exec(t[s]), i = parseFloat(t[s].split(e)[0]);
                    this.actions.push(new l(this.target.style, s, this.properties[s], i, e, this.direction));
                }
            } else this.actions.push(new l(this.target, s, this.properties[s], null, null, this.direction));
        } else for(let t in this.properties)this.direction === "fromTo" ? this.actions.push(new l(this.target, t, this.properties[t][1], this.properties[t][0], null, this.direction)) : this.actions.push(new l(this.target, t, this.properties[t], this.target[t], null, this.direction));
        for (let t of this.actions)t.setProperties();
    }
    update(t) {
        for (let s of this.actions)s.update(t);
        if (this.hasTransform) {
            let s = m.multiply2DMatricies(m.multiply2DMatricies(m.scale2D(this.transformMatrix.scaleX, this.transformMatrix.scaleY), m.rotate2D(this.transformMatrix.rotate * (Math.PI / 180))), m.translate2D(this.transformMatrix.translateX, this.transformMatrix.translateY));
            this.target.style.transform = `matrix(${s[0]}, ${s[3]}, ${s[1]}, ${s[4]}, ${s[2]}, ${s[5]})`;
        }
    }
};
var _ = class {
    constructor(){
        this.timeScale = 1e3, this.duration = 0, this.startTime = 0, this.currentTime = 0, this.progress = 0, this.started = !1, this.paused = !1, this.rewinding = !1, this.currentAnimationFrame = null, this.previousActionDuration = 0, this.actions = [];
    }
    play() {
        this.rewinding = !1, this.started || (this.onStartCallback && this.onStartCallback(), this.started = !0), this.paused ? this.startTime = performance.now() - this.duration * this.progress : this.startTime = performance.now(), this.paused = !1;
        let t = (s)=>{
            let e = s - this.startTime;
            this.progress = Math.min(e / this.duration, 1), this._animate(), this.progress < 1 && (this.currentAnimationFrame = requestAnimationFrame(t));
        };
        this.currentAnimationFrame = requestAnimationFrame(t);
    }
    pause() {
        this.paused = !0, cancelAnimationFrame(this.currentAnimationFrame);
    }
    rewind() {
        this.rewinding = !0, this.paused ? this.startTime = performance.now() - this.duration * (1 - this.progress) : this.startTime = performance.now(), this.paused = !1;
        let t = (s)=>{
            let e = this.duration - (s - this.startTime);
            this.progress = Math.min(e / this.duration, 1), this._animate(), this.progress > 0 && (this.currentAnimationFrame = requestAnimationFrame(t));
        };
        this.currentAnimationFrame = requestAnimationFrame(t);
    }
    setProgress(t) {
        this.progress = t, !this.started && this.progress > 0 && (this.onStartCallback && this.onStartCallback(), this.started = !0);
        let s = (e)=>{
            let i = this.duration * this.progress;
            this._animate();
        };
        this.currentAnimationFrame = requestAnimationFrame(s);
    }
    setProgressImmediately(t) {
        this.progress = t, !this.started && this.progress > 0 && (this.onStartCallback && this.onStartCallback(), this.started = !0), this._animate();
    }
    _animate() {
        this.currentTime = this.duration * this.progress, this.actions.forEach((t, s)=>{
            t.progress = (this.currentTime - t.timings.start) / t.timings.totalDuration, t.started && !t.completed && (t.options.onUpdate && t.options.onUpdate(), t.moments.forEach((e, i)=>{
                let n = Math.max(this.currentTime - t.timings.start - t.timings.stagger * i, 0), r = Math.min(n / t.timings.duration, 1), a = t.timings.easing(r);
                e.update(a), t.options.toggle && r !== 1 && e.update(0);
            })), t.progress > 0 ? (t.started || (t.options.onStart && t.options.onStart(), t.timings.start !== 0 && t.direction !== "from" && t.moments.forEach((e)=>{
                e.setProperties();
            })), t.started = !0) : (t.started && (t.direction === "from" || t.direction === "fromTo") ? t.direction === "from" ? t.timings.start !== 0 ? t.moments.forEach((e)=>{
                e.update(1);
            }) : t.moments.forEach((e)=>{
                e.update(0);
            }) : t.moments.forEach((e)=>{
                e.update(0);
            }) : !t.started && !t.initialized && (t.direction === "from" || t.direction === "fromTo") && (t.moments.forEach((e)=>{
                e.update(0);
            }), t.initialized = !0), t.options.toggle && t.moments.forEach((e)=>{
                e.update(0);
            }), t.started = !1), t.progress >= 1 ? (t.completed || (t.moments.forEach((e)=>{
                e.update(1);
            }), t.options.onComplete && t.options.onComplete()), t.completed = !0) : t.completed = !1;
        });
    }
    to(t, s, e, i = null) {
        let n = !1, r = t;
        (t instanceof window.HTMLElement || t instanceof window.NodeList || t instanceof window.SVGPathElement || t instanceof window.SVGElement || t instanceof window.SVGCircleElement) && (n = !0, t instanceof window.NodeList && (r = [
            ...t
        ]));
        let a = this._setTargets(r), h = this._setTimings(a, e, i), o = [];
        a.forEach((c)=>{
            o.push(new u(c, s, "to", n));
        }), this._add(o, h, e, "to");
    }
    from(t, s, e, i = null) {
        let n = !1, r = t;
        (t instanceof window.HTMLElement || t instanceof window.NodeList || t instanceof window.SVGPathElement || t instanceof window.SVGElement || t instanceof window.SVGCircleElement) && (n = !0, t instanceof window.NodeList && (r = [
            ...t
        ]));
        let a = this._setTargets(r), h = this._setTimings(a, e, i), o = [];
        a.forEach((c)=>{
            o.push(new u(c, s, "from", n));
        }), this._add(o, h, e, "from");
    }
    fromTo(t, s, e, i = null) {
        let n = !1, r = t;
        (t instanceof window.HTMLElement || t instanceof window.NodeList || t instanceof window.SVGPathElement || t instanceof window.SVGElement || t instanceof window.SVGCircleElement) && (n = !0, t instanceof window.NodeList && (r = [
            ...t
        ]));
        let a = this._setTargets(r), h = this._setTimings(a, e, i), o = [];
        a.forEach((c)=>{
            o.push(new u(c, s, "fromTo", n));
        }), this._add(o, h, e, "fromTo");
    }
    addClass(t, s, e, i = null) {
        let n = !1, r = t;
        (t instanceof window.HTMLElement || t instanceof window.NodeList) && (n = !0, t instanceof window.NodeList && (r = [
            ...t
        ]));
        let a = this._setTargets(r), h = this._setTimings(a, e, i), o = [];
        a.forEach((c)=>{
            o.push(new u(c, s, "addClass", n));
        }), this._add(o, h, e, "addClass");
    }
    removeClass(t, s, e, i = null) {
        let n = !1, r = t;
        (t instanceof window.HTMLElement || t instanceof window.NodeList) && (n = !0, t instanceof window.NodeList && (r = [
            ...t
        ]));
        let a = this._setTargets(r), h = this._setTimings(a, e, i), o = [];
        a.forEach((c)=>{
            o.push(new u(c, s, "removeClass", n));
        }), this._add(o, h, e, "removeClass");
    }
    onStart(t) {
        this.onStartCallback = t;
    }
    _add(t, s, e, i) {
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
    _setTargets(t) {
        let s = null;
        return Array.isArray(t) ? s = t : s = [
            t
        ], s;
    }
    _setTimings(t, s, e) {
        let i = {}, n = s.duration ? s.duration * this.timeScale : 1, r = 0;
        e !== null ? r = e * this.timeScale : r = this.duration, i.stagger = s.stagger ? s.stagger * this.timeScale : 0;
        let a = s.delay ? s.delay * this.timeScale + r : r, h = n + (t.length - 1) * i.stagger;
        return i.start = a, i.end = a + h, i.duration = n, i.totalDuration = h, i.easing = p.get(s.ease), this.previousActionDuration = i.end, this.duration = Math.max(this.previousActionDuration, this.duration), i;
    }
};
var M = class {
    constructor(t, s, e = {}){
        this.element = t, this.scene = s, this.options = e, this._init();
    }
    _init() {
        this.observer = null, this.progress = 0, this.scrollDistance = 0, this.scrollPosition = 0, this.element.parentElement.style.height = "auto", this.viewportHeight = window.innerHeight, this.isIntersecting = !1, this.options.pinned ? (this.offset = this.element.parentElement.offsetTop, this.offset += this.options.beginOnIntersection ? -this.element.parentElement.offsetHeight : 0, this.scrollHeight = this.scene.duration, this._setScrollHeight(), this.scrollHeight += this.options.offset ? this.options.offset : 0) : (this.offset = window.pageYOffset + this.element.getBoundingClientRect().top - this.viewportHeight, this.scrollHeight = this.viewportHeight + this.element.offsetHeight), this._scrollListener = this._scrollListener.bind(this), this._createObserver();
    }
    resize() {
        this.viewportHeight = window.innerHeight, this.options.pinned ? (this.offset = this.element.parentElement.offsetTop, this.offset += this.options.beginOnIntersection ? -this.element.parentElement.offsetHeight : 0, this.scrollHeight = this.scene.duration, this._setScrollHeight(), this.scrollHeight += this.options.offset ? this.options.offset : 0) : (this.offset = window.pageYOffset + this.element.getBoundingClientRect().top - this.viewportHeight, this.scrollHeight = this.viewportHeight + this.element.offsetHeight);
    }
    setScene(t) {
        this.scene = t, this._init();
    }
    _setScrollHeight() {
        let t = this.scrollHeight + (this.options.beginOnIntersection ? 0 : this.viewportHeight);
        this.element.parentElement.style.height = `${t / this.viewportHeight * 100}vh`;
    }
    _scrollListener(t) {
        this.scrollDistance = t.target.scrollingElement.scrollTop, this.scrollPosition = this.scrollDistance - this.offset, this.progress = Math.min(Math.max(this.scrollPosition / this.scrollHeight, 0), 1);
    }
    _createObserver() {
        this.observer = new IntersectionObserver((t)=>{
            t.forEach((s)=>{
                s.isIntersecting ? (this.isIntersecting = !0, window.addEventListener("scroll", this._scrollListener)) : (this.isIntersecting = !1, window.removeEventListener("scroll", this._scrollListener), this.progress = Math.round(this.progress));
            });
        }, {
            threshold: this.options.threshold ? this.options.threshold : 0
        }), this.observer.observe(this.element);
    }
};
var w = class {
    static to(t, s, e) {
        let i = !1, n = t;
        (t instanceof window.HTMLElement || t instanceof window.NodeList) && (i = !0, t instanceof window.NodeList && (n = [
            ...t
        ]));
        let r = this._setTargets(n), a = this._setTimings(r, e), h = [];
        r.forEach((o)=>{
            h.push(new u(o, s, "to", i));
        }), this._animate(h, a, e);
    }
    static from(t, s, e) {
        let i = !1, n = t;
        (t instanceof window.HTMLElement || t instanceof window.NodeList) && (i = !0, t instanceof window.NodeList && (n = [
            ...t
        ]));
        let r = this._setTargets(n), a = this._setTimings(r, e), h = [];
        r.forEach((o)=>{
            h.push(new u(o, s, "from", i));
        }), this._animate(h, a, e);
    }
    static fromTo(t, s, e) {
        let i = !1, n = t;
        (t instanceof window.HTMLElement || t instanceof window.NodeList) && (i = !0, t instanceof window.NodeList && (n = [
            ...t
        ]));
        let r = this._setTargets(n), a = this._setTimings(r, e), h = [];
        r.forEach((o)=>{
            h.push(new u(o, s, "fromTo", i));
        }), this._animate(h, a, e);
    }
    static addClass(t, s, e) {
        let i = !1, n = t, r = e || {};
        (t instanceof window.HTMLElement || t instanceof window.NodeList) && (i = !0, t instanceof window.NodeList && (n = [
            ...t
        ]));
        let a = this._setTargets(n), h = this._setTimings(a, r), o = [];
        a.forEach((c)=>{
            o.push(new u(c, s, "addClass", i));
        }), this._animate(o, h, r);
    }
    static removeClass(t, s, e) {
        let i = !1, n = t, r = e || {};
        (t instanceof window.HTMLElement || t instanceof window.NodeList) && (i = !0, t instanceof window.NodeList && (n = [
            ...t
        ]));
        let a = this._setTargets(n), h = this._setTimings(a, r), o = [];
        a.forEach((c)=>{
            o.push(new u(c, s, "removeClass", i));
        }), this._animate(o, h, r);
    }
    static _animate(t, s, e) {
        function i(r) {
            let a = r - n - s.delay, h = Math.min(a / s.totalDuration, 1);
            t.forEach((o, c)=>{
                let d = Math.min((a - s.stagger * c) / s.duration, 1);
                if (d > 0) {
                    let g = s.easing(d);
                    o.update(g);
                }
            }), h < 1 ? (e.onUpdate && e.onUpdate(), requestAnimationFrame(i)) : (t.forEach((o)=>{
                o.update(1);
            }), e.onComplete && e.onComplete());
        }
        e.onStart && e.onStart();
        let n = performance.now();
        requestAnimationFrame(i);
    }
    static _setTargets(t) {
        let s = null;
        return Array.isArray(t) ? s = t : s = [
            t
        ], s;
    }
    static _setTimings(t, s) {
        let e = 1e3, i = {};
        return i.duration = s.duration ? s.duration * e : 1, i.delay = s.delay ? s.delay * e : 0, i.stagger = s.stagger ? s.stagger * e : 0, i.totalDuration = i.duration + (t.length - 1) * i.stagger, i.easing = p.get(s.ease), i;
    }
};
w.Scene = _;
w.Camera = M;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["gP2K6","2OD7o"], "2OD7o", "parcelRequire2041")

//# sourceMappingURL=index.3b06b0f7.js.map
