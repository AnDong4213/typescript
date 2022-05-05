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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/1-基础类型.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/1-基础类型.ts":
/*!***********************!*\
  !*** ./src/1-基础类型.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* import * as _ from 'lodash';\r\nclass Greeter {\r\n  age = 13\r\n  greeting: string\r\n  constructor(message: string) {\r\n    this.greeting = message;\r\n  }\r\n  greet() {\r\n    return _.join(['Hello', ' ', this.greeting], '');\r\n  }\r\n};\r\nlet greeter = new Greeter('world');\r\nconsole.log(greeter)\r\nconsole.log(greeter.greet())\r\nclass Child extends Greeter {\r\n  names = 88\r\n  name() {\r\n    return 'Dog'\r\n  }\r\n}\r\nconsole.log(new Child('TS'))\r\nconsole.log(new Child('TS').name()) */\r\nvar isDone = true;\r\n// 十进制\r\nvar decLiteral = 20;\r\nvar binaryLiteral = 20;\r\nvar octalLiteral = 20;\r\nvar hexLiteral = 0x14;\r\nconsole.log(hexLiteral); // 20\r\nvar list = [1, 2, 3, 8];\r\nvar list2 = [1, 2, 9];\r\nconsole.log(list2);\r\n// 元组 Tuple  表示一个已知元素数量和类型的数组\r\nvar x = [10, 'abcdef'];\r\n// x = [10, 'abcdef']\r\nconsole.log(x[1].substr(1, 2));\r\n// 枚举  如果Green = 'yy'，则下边的都得初始化，否则报错;如果没有初始化，{0: \"Red\", Red: 0}\r\nvar Color;\r\n(function (Color) {\r\n    Color[Color[\"Red\"] = 0] = \"Red\";\r\n    Color[\"Green\"] = \"yy\";\r\n    Color[\"Blue\"] = \"kk\";\r\n})(Color || (Color = {}));\r\nvar c = Color.Green;\r\nvar d = Color[0];\r\nvar e = Color['kk'];\r\nconsole.log(Color);\r\n// {0: \"Red\", Red: 0, Green: \"yy\", Blue: \"kk\"}\r\nconsole.log(c); //  yy\r\nconsole.log(d); //  Red\r\nconsole.log(Color['Red']); //  0\r\nconsole.log(e + '--------------------------------------'); // undefined\r\n// any 在编程阶段还不清楚类型的变量指定一个类型\r\nvar notSure = 4;\r\nnotSure = 'string';\r\nnotSure = false;\r\nconsole.log(notSure);\r\nvar anyList = [1, 'hh', true];\r\nconsole.log(anyList);\r\n// void 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。\r\nfunction warnUser() {\r\n    // return '99'  // 不可以\r\n    // console.log(9989)\r\n    return null;\r\n}\r\nwarnUser();\r\nconsole.log(warnUser());\r\n// 声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null：\r\nvar unusable = undefined;\r\n// null 和 undefined    TypeScript里，undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null。 和 void 相似，它们的本身的类型用处不是很大： 当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自\r\n// 默认情况下 null 和 undefined 是所有类型的子类型。\r\n// let u: undefined = null   // 严格模式下不可以\r\nvar u = undefined; // 严格模式下可以\r\nvar m = 37777;\r\nconsole.log(m);\r\n// never类型   never 类型表示的是那些永不存在的值的类型。\r\nfunction error(message) {\r\n    throw new Error(message);\r\n}\r\nfunction fail() {\r\n    return error('something failed');\r\n}\r\n// console.log(fail())\r\n// 返回never的函数必须存在无法达到的终点\r\nfunction infiniteLoop() {\r\n    while (true) { }\r\n}\r\n// object   object表示非原始类型，也就是除 number，string，boolean，symbol，null或undefined 之外的类型\r\n// declare function create(o: object | null): void\r\n// create({prop: 0})\r\n// create(null)\r\n// 类型断言  有两种形式。 其一是“尖括号”语法： 另一个为 as 语法：\r\nvar someValue = 'hello';\r\n// let strL = someValue.length\r\n// let strL: number = (<string>someValue).length\r\nvar strL = someValue.length;\r\nconsole.log(strL);\r\n\n\n//# sourceURL=webpack:///./src/1-%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B.ts?");

/***/ })

/******/ });