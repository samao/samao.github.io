(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("compat", [], factory);
	else if(typeof exports === 'object')
		exports["compat"] = factory();
	else
		root["compat"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/com/idzeir/compat.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/com/idzeir/compat.ts":
/*!**********************************!*\
  !*** ./src/com/idzeir/compat.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = y[op[0] & 2 ? \"return\" : op[0] ? \"throw\" : \"next\"]) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [0, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __values = (this && this.__values) || function (o) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator], i = 0;\n    if (m) return m.call(o);\n    return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n};\n(function (glob, doc) {\n    function lazyScript(urls) {\n        return __awaiter(this, void 0, void 0, function () {\n            var _loop_1, urls_1, urls_1_1, url, e_1_1, e_1, _a;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        _loop_1 = function () {\n                            var script;\n                            return __generator(this, function (_a) {\n                                switch (_a.label) {\n                                    case 0:\n                                        script = doc.createElement('script');\n                                        return [4, new Promise(function (res, rej) {\n                                                script.onload = function () {\n                                                    res();\n                                                };\n                                                script.src = url;\n                                                doc.body.appendChild(script);\n                                            })];\n                                    case 1:\n                                        _a.sent();\n                                        return [2];\n                                }\n                            });\n                        };\n                        _b.label = 1;\n                    case 1:\n                        _b.trys.push([1, 6, 7, 8]);\n                        urls_1 = __values(urls), urls_1_1 = urls_1.next();\n                        _b.label = 2;\n                    case 2:\n                        if (!!urls_1_1.done) return [3, 5];\n                        url = urls_1_1.value;\n                        return [5, _loop_1()];\n                    case 3:\n                        _b.sent();\n                        _b.label = 4;\n                    case 4:\n                        urls_1_1 = urls_1.next();\n                        return [3, 2];\n                    case 5: return [3, 8];\n                    case 6:\n                        e_1_1 = _b.sent();\n                        e_1 = { error: e_1_1 };\n                        return [3, 8];\n                    case 7:\n                        try {\n                            if (urls_1_1 && !urls_1_1.done && (_a = urls_1.return)) _a.call(urls_1);\n                        }\n                        finally { if (e_1) throw e_1.error; }\n                        return [7];\n                    case 8: return [2];\n                }\n            });\n        });\n    }\n    lazyScript(['commons.js', 'H5Player.js']).then(function () {\n        console.log('异步js加载完毕');\n        var player = glob.H5Player.createPlayer(document.querySelector('.player-wrap'), { debug: false, loglevel: 2 });\n    });\n})(window, document);\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/com/idzeir/compat.ts?");

/***/ })

/******/ })["default"];
});