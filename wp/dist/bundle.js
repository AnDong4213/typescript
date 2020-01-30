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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/3-interface_0118.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/3-interface_0118.ts":
/*!*********************************!*\
  !*** ./src/3-interface_0118.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar p1 = { x: 2, y: 3 };\r\nvar a = [1, 2, 3];\r\nvar ro = a;\r\n// ro.push(9)\r\nconsole.log(ro);\r\nfunction createSquare(config) {\r\n    var newSquare = { color: 'white', area: 100 };\r\n    if (config.color) {\r\n        newSquare.color = config.color;\r\n    }\r\n    if (config.width) {\r\n        newSquare.area = config.width * config.width;\r\n    }\r\n    return newSquare;\r\n}\r\n// let obj = { color: 'red', width: 8, bb: 9 } // 就是squareOptions\r\n// let mySquare = createSquare(obj) // 不报错\r\n// let mySquare = createSquare({ color: 'red', width: 67, bb: 9 } as SquareConfig)  // 不报错\r\nvar mySquare = createSquare({ color: 'red', width: 5, bb: 9 });\r\nconsole.log(mySquare);\r\nvar mySearch = function (src, sub) {\r\n    var result = src.search(sub);\r\n    return result > -1;\r\n};\r\nconsole.log(mySearch('andong', 'an6'));\r\nvar arr = [99, 77, 666];\r\nconsole.log(arr[2]);\r\nvar arr2 = { a: 1, b: 9999 };\r\nconsole.log(arr2['b']);\r\n// TypeScript 支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。\r\nvar Animal = /** @class */ (function () {\r\n    function Animal() {\r\n    }\r\n    return Animal;\r\n}());\r\nvar Dog = /** @class */ (function (_super) {\r\n    __extends(Dog, _super);\r\n    function Dog() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    return Dog;\r\n}(Animal));\r\nvar myArray2 = ['Alice', 'Bob', 'tom'];\r\n// myArray2[2] = '999' // 类型“ReadonlyStringArray”中的索引签名仅允许读取。\r\nconsole.log(myArray2);\r\n\n\n//# sourceURL=webpack:///./src/3-interface_0118.ts?");

/***/ })

/******/ });