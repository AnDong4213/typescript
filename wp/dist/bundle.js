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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/3-interface2.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/3-interface2.ts":
/*!*****************************!*\
  !*** ./src/3-interface2.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// console.log(Math.trunc(0.492))\r\n// console.log(Array.from([1, 2, 3], function (item) { return item * 6 }))\r\n// console.log(Array.from([1, 2, 3, 5], item => item * 6))  //  [6, 12, 18, 30]\r\n/* function test(...args) {\r\n  console.log(args) // [\"a\", \"b\", \"c\"]\r\n  for (let value of args) {\r\n    console.log(value)\r\n  }\r\n}\r\ntest('a', 'b', 'c')\r\nfor (let i of [{ a: 2, c: 4 }, { a: 2, c: 4 }]) {\r\n  console.log(i)\r\n} */\r\n/* for (let a in { a: 2, c: 3, d: 5 }) {\r\n  console.log(a) // key值\r\n} */\r\n// 类类型\r\n/* interface ClockInterface {\r\n  currentTime: Date\r\n  setTime(d: Date)\r\n}\r\ninterface ClockConstructor {\r\n  new(h: number, m: number)\r\n}\r\n// 定义一个类来实现这个接口   类的实例接口与构造器接口\r\nclass Clock implements ClockInterface {\r\n  currentTime: Date\r\n  constructor(h: number, m: number) { }\r\n  setTime(d: Date) {\r\n    console.log(d)\r\n    this.currentTime = d\r\n  }\r\n}\r\nnew Clock(1, 2).setTime(new Date()) */\r\n/* interface ClockInterface {\r\n  haha: number;\r\n  tick(): void;\r\n}\r\ninterface ClockConstructor {\r\n  new(hour: number, minute: number): ClockInterface\r\n  // new(hour: number, minute: number)\r\n}\r\nfunction createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {\r\n  return new ctor(hour, minute)\r\n}\r\nclass DigitalClock implements ClockInterface {\r\n  haha: number = 123\r\n  constructor(h: number, m: number) {\r\n    console.log(this.haha)\r\n  }\r\n  tick() {\r\n    console.log('beep beep67766')\r\n    console.log(this.haha)\r\n  }\r\n}\r\nclass AnalogClock implements ClockInterface {\r\n  haha: 8;\r\n  constructor(h: number, m: number) { }\r\n  tick() {\r\n    console.log('tick tock')\r\n  }\r\n}\r\nlet digital = createClock(DigitalClock, 12, 17)\r\ndigital.tick()\r\nconsole.log(digital.haha) */\r\n// 继承接口\r\n/* interface Shape {\r\n  color: string\r\n}\r\ninterface PenStroke {\r\n  penWidth: number\r\n}\r\ninterface Square extends Shape, PenStroke {\r\n  sideLength: number\r\n}\r\nlet square = {} as Square\r\nsquare.color = 'red'\r\nsquare.sideLength = 6\r\nsquare.penWidth = 5.0\r\nconsole.log(square) */\r\n// 混合类型\r\n/* interface Counter {\r\n  (start: number): string;\r\n  interval: number;\r\n  reset(): void;\r\n}\r\nfunction getCounter(): Counter {\r\n  let counter = (function (start: number) { }) as Counter;\r\n  counter.interval = 123;\r\n  counter.reset = function () {\r\n    console.log(99)\r\n  };\r\n  return counter;\r\n}\r\nlet c = getCounter();\r\nc(10);\r\nc.reset();\r\nc.interval = 5.0; */\r\n// 接口继承类   用到的不是很多\r\n\n\n//# sourceURL=webpack:///./src/3-interface2.ts?");

/***/ })

/******/ });