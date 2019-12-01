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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/2-变量声明.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/2-变量声明.tsx":
/*!************************!*\
  !*** ./src/2-变量声明.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* function sumMatrix(matrix: number[][]) {\r\n  var sum = 0\r\n  for (var i = 0; i < matrix.length; i++) {\r\n    var currentRow = matrix[i]\r\n    for (var i = 0; i < currentRow.length; i++) {\r\n      sum += currentRow[i]   // 都改为j的话是 21\r\n    }\r\n  }\r\n  return sum\r\n}\r\nvar matrix = [\r\n  [1, 2, 3],\r\n  [4, 5, 6]\r\n]\r\nconsole.log(sumMatrix(matrix)) */ // 6\r\n/* for (var i = 0; i < 10; i++) {\r\n  // console.log(i)  // 直接输入是 0 - 9\r\n\r\n  // setTimeout(() => {\r\n  //   console.log(i)\r\n  // }, 100 * i)  // 10个10\r\n\r\n  (function(j) {\r\n    setTimeout(() => {\r\n      console.log(j)\r\n    }, 100 * j)\r\n  })(i)\r\n\r\n} */\r\n/* function foo() {\r\n  return a\r\n}\r\nfoo()\r\nlet a */\r\nfunction keepWholeObject(wholeObject) {\r\n    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;\r\n    console.log(a);\r\n    console.log(b);\r\n}\r\nkeepWholeObject({ b: 1, a: 'u' });\r\n\n\n//# sourceURL=webpack:///./src/2-%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E.tsx?");

/***/ })

/******/ });