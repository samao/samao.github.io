window["compat"] =
/******/ (function(modules) { // webpackBootstrap
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/logger */ \"./src/com/idzeir/utils/logger.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = y[op[0] & 2 ? \"return\" : op[0] ? \"throw\" : \"next\"]) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [0, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __values = (undefined && undefined.__values) || function (o) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator], i = 0;\n    if (m) return m.call(o);\n    return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n};\n\n(function (glob, doc) {\n    var waitMap = [];\n    function lazyScript(urls) {\n        return __awaiter(this, void 0, void 0, function () {\n            var _loop_1, urls_1, urls_1_1, url, e_1_1, e_1, _a;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        _loop_1 = function () {\n                            var script;\n                            return __generator(this, function (_a) {\n                                switch (_a.label) {\n                                    case 0:\n                                        script = doc.createElement('script');\n                                        return [4, new Promise(function (res, rej) {\n                                                script.onload = function () {\n                                                    res();\n                                                };\n                                                script.src = (isProduction() ? \"//cdn.aixifan.com/player/\" + \"1.0.8\" : '') + '/' + url;\n                                                doc.body.appendChild(script);\n                                            })];\n                                    case 1:\n                                        _a.sent();\n                                        return [2];\n                                }\n                            });\n                        };\n                        _b.label = 1;\n                    case 1:\n                        _b.trys.push([1, 6, 7, 8]);\n                        urls_1 = __values(urls), urls_1_1 = urls_1.next();\n                        _b.label = 2;\n                    case 2:\n                        if (!!urls_1_1.done) return [3, 5];\n                        url = urls_1_1.value;\n                        return [5, _loop_1()];\n                    case 3:\n                        _b.sent();\n                        _b.label = 4;\n                    case 4:\n                        urls_1_1 = urls_1.next();\n                        return [3, 2];\n                    case 5: return [3, 8];\n                    case 6:\n                        e_1_1 = _b.sent();\n                        e_1 = { error: e_1_1 };\n                        return [3, 8];\n                    case 7:\n                        try {\n                            if (urls_1_1 && !urls_1_1.done && (_a = urls_1.return)) _a.call(urls_1);\n                        }\n                        finally { if (e_1) throw e_1.error; }\n                        return [7];\n                    case 8: return [2];\n                }\n            });\n        });\n    }\n    function isProduction() {\n        return \"development\" === 'production';\n    }\n    function go() {\n        var isMiner = isProduction();\n        lazyScript([\"commons\" + (isMiner ? '.min' : '') + \".js\", \"H5Player\" + (isMiner ? '.min' : '') + \".js\"]).then(function () {\n            _utils_logger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log('[@compat]', '异步js加载完毕.', waitMap.length);\n            if (waitMap.length > 0) {\n                waitMap.forEach(function (_a) {\n                    var vid = _a.vid, el = _a.el, options = _a.options, proxy = _a.proxy;\n                    createPlayer({ vid: vid, el: el, options: options, proxy: proxy });\n                });\n                waitMap.length = 0;\n            }\n        }).catch(function (reason) { return _utils_logger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].warn('[@compat]', \"\\u64AD\\u653Esdk\\u83B7\\u53D6\\u5931\\u8D25:\" + reason); });\n    }\n    function SDK_READY() {\n        return glob.hasOwnProperty('H5Player');\n    }\n    function prepareTips() {\n        return \"<div style=\\\"font-size: 12px; font-weight: blod; color: white;width: 100%; height: 100%; position: relative; background: black;display:flex; justify-content: center; align-items: center\\\"><span>AC\\u5A18\\u68B3\\u5986\\u4E2D...</span></div>\";\n    }\n    function noMutiPlayer() {\n        return \"<div style=\\\"font-size: 12px; font-weight: blod; color: white;width: 100%; height: 100%; position: relative; background: black;display:flex; justify-content: center; align-items: center\\\"><span>\\u76EE\\u524D\\u4E0D\\u652F\\u6301\\u5355\\u9875\\u9762\\u591A\\u64AD\\u653E\\u5668</span></div>\";\n    }\n    var player = null;\n    function createPlayer(_a) {\n        var vid = _a.vid, el = _a.el, _b = _a.options, options = _b === void 0 ? {} : _b, proxy = _a.proxy;\n        if (!el)\n            throw new ReferenceError(\"\\u89C6\\u9891\\u6302\\u8F7Ddom\\u4E3A\\u7A7A, \\u65E0\\u6CD5\\u64AD\\u653E\\uFF01\\uFF01\\uFF01\");\n        if (!SDK_READY()) {\n            _utils_logger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log('[@compat]', 'SDK未就绪等待中...');\n            waitMap.push({ vid: vid, el: el, options: options, proxy: proxy });\n            el.innerHTML = prepareTips();\n            return;\n        }\n        el.innerHTML = player ? noMutiPlayer() : '';\n        _utils_logger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log('[@compat]', \"\\u64AD\\u653E\\u89C6\\u9891: \" + vid);\n        var merge = Object.assign({\n            debug: /debug=1/i.test(location.search),\n            vid: '6048291',\n            backgroundURL: 'http://imgs.aixifan.com/content/2018_04_08/1523189114.png',\n            autoplay: true,\n            type: 'auto',\n            loglevel: parseInt((location.search.match(/daddy=(\\d)/i) || ['0', '1'])[1]),\n        }, options, { vid: vid, proxy: proxy });\n        var H5Player = glob.H5Player;\n        if (H5Player) {\n            if (player)\n                return;\n            player = H5Player.createPlayer(el, merge);\n            _utils_logger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log('[@compat]', 'callback = ', merge.cb);\n            if (merge.cb) {\n                merge.cb.call(player);\n            }\n        }\n        else {\n            _utils_logger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error('[@compat]', '未发现播放SDK');\n        }\n    }\n    function destroyPlayer(el) {\n        var H5Player = glob.H5Player;\n        if (H5Player) {\n            H5Player.destroyPlayer(el);\n        }\n        else {\n            _utils_logger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error('[@compat]', '未发现播放SDK无法销毁');\n        }\n        player = null;\n    }\n    if (!doc.body) {\n        glob.onload = function () {\n            glob.onload = null;\n            go();\n        };\n    }\n    else\n        go();\n    glob.crPlayer = createPlayer;\n    glob.dePlayer = destroyPlayer;\n    _utils_logger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log('[@compat]', '播放接口导出成功');\n})(window, document);\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/com/idzeir/compat.ts?");

/***/ }),

/***/ "./src/com/idzeir/utils/logger.ts":
/*!****************************************!*\
  !*** ./src/com/idzeir/utils/logger.ts ***!
  \****************************************/
/*! exports provided: LogLevel, Logger, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogLevel\", function() { return LogLevel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logger\", function() { return Logger; });\nvar LogLevel;\n(function (LogLevel) {\n    LogLevel[LogLevel[\"error\"] = 0] = \"error\";\n    LogLevel[LogLevel[\"warn\"] = 1] = \"warn\";\n    LogLevel[LogLevel[\"log\"] = 2] = \"log\";\n    LogLevel[LogLevel[\"debug\"] = 3] = \"debug\";\n})(LogLevel || (LogLevel = {}));\nvar Logger = (function () {\n    function Logger(level) {\n        if (level === void 0) { level = LogLevel.error; }\n        this.level = level;\n    }\n    Logger.prototype.debug = function () {\n        var value = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            value[_i] = arguments[_i];\n        }\n        if (this.level >= LogLevel.debug && value.length > 0)\n            this.print(LogLevel.debug, value, 'color: blue; font-weight: bold;');\n    };\n    Logger.prototype.log = function () {\n        var value = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            value[_i] = arguments[_i];\n        }\n        if (this.level >= LogLevel.log && value.length > 0)\n            this.print(LogLevel.log, value, 'color: #000; font-weight: bold;');\n    };\n    Logger.prototype.warn = function () {\n        var value = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            value[_i] = arguments[_i];\n        }\n        if (this.level >= LogLevel.warn && value.length > 0)\n            this.print(LogLevel.warn, value, 'color: green; font-weight: bold;');\n    };\n    Logger.prototype.error = function () {\n        var value = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            value[_i] = arguments[_i];\n        }\n        if (this.level >= LogLevel.error && value.length > 0)\n            this.print(LogLevel.error, value, 'color: red; font-weight: bold');\n    };\n    Logger.prototype.now = function () {\n        return new Date().toLocaleTimeString();\n    };\n    Logger.prototype.print = function (type, value, style) {\n        console.log(\"%c[\" + LogLevel[type].toUpperCase() + \"] %c\" + this.now() + \" -- \" + value.join(' '), style, 'color: black; font-weight:normal;');\n    };\n    return Logger;\n}());\n\nvar logger = new Logger();\n/* harmony default export */ __webpack_exports__[\"default\"] = (logger);\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/com/idzeir/utils/logger.ts?");

/***/ })

/******/ })["default"];