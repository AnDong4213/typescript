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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/6-generics.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/6-generics.ts":
/*!***************************!*\
  !*** ./src/6-generics.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 泛型基础示例\r\n/* function identity(arg: number): number {\r\n  return arg\r\n} */\r\n/* function identity(arg: any): any {\r\n  return arg\r\n} */\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n// 需要一种方法使返回值的类型与传入参数的类型是相同的。使用了--类型变量，它是一种特殊的变量，只用于表示类型而不是值。\r\nfunction identity(arg) {\r\n    return arg;\r\n}\r\n// let output = identity<string>('myString2')   // 传入所有的参数，包含类型参数：\r\nvar output = identity(33); // 利用类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定 T 的类型：\r\nconsole.log(output);\r\n// 使用泛型变量\r\nfunction loggingIdentity(arg) {\r\n    console.log(arg.length);\r\n    return arg;\r\n}\r\nconsole.log(loggingIdentity([1, '2', 3, { a: 2 }]));\r\n// 泛型类型\r\nvar myIdentity = identity;\r\nvar myIdentity2 = identity;\r\nvar myIdentity3 = identity;\r\nconsole.log(myIdentity3(444444444555));\r\n// 泛型类\r\n// 泛型类看上去与泛型接口差不多。 泛型类使用（ <>）括起泛型类型，跟在类名后面。\r\nvar GenericNumber = /** @class */ (function () {\r\n    function GenericNumber() {\r\n    }\r\n    return GenericNumber;\r\n}());\r\nvar myGenericNumber = new GenericNumber();\r\nmyGenericNumber.zeroValue = 9;\r\nmyGenericNumber.add = function (x, y) {\r\n    return x + y;\r\n};\r\nconsole.log(myGenericNumber.add(9, 6));\r\nfunction createSquare(config) {\r\n    return {\r\n        data: Number(config),\r\n        status: {}\r\n    };\r\n}\r\nconsole.log(createSquare('7'));\r\nfunction loggingIdentity2(arg) {\r\n    console.log(arg.length);\r\n    return arg;\r\n}\r\nconsole.log(loggingIdentity2('ww'));\r\n// 在泛型约束中使用类型参数\r\n// 你可以声明一个类型参数，且它被另一个类型参数所约束。 比如，现在我们想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 obj 上，因此我们需要在这两个类型之间使用约束。\r\nfunction getProperty(obj, key) {\r\n    return obj[key];\r\n}\r\nvar qq = { a: 1, b: 2, c: 3, d: 4 };\r\nconsole.log(getProperty(qq, 'a'));\r\nconsole.log(getProperty(qq, 'd'));\r\n// 在泛型中使用类类型\r\nvar BeeKeeper = /** @class */ (function () {\r\n    function BeeKeeper() {\r\n    }\r\n    return BeeKeeper;\r\n}());\r\nvar ZooKeeper = /** @class */ (function () {\r\n    function ZooKeeper() {\r\n        this.nametag = '看看';\r\n    }\r\n    return ZooKeeper;\r\n}());\r\nvar Animal2 = /** @class */ (function () {\r\n    function Animal2() {\r\n    }\r\n    return Animal2;\r\n}());\r\nvar Bee = /** @class */ (function (_super) {\r\n    __extends(Bee, _super);\r\n    function Bee() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    return Bee;\r\n}(Animal2));\r\nvar Lion = /** @class */ (function (_super) {\r\n    __extends(Lion, _super);\r\n    function Lion() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    return Lion;\r\n}(Animal2));\r\nfunction createInstance(c) {\r\n    return new c();\r\n}\r\n// createInstance(Lion).keeper.nametag\r\n// createInstance(Bee).keeper.hasMask;\r\n\n\n//# sourceURL=webpack:///./src/6-generics.ts?");

/***/ })

/******/ });