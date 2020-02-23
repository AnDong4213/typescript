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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/8-advanced-types.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/8-advanced-types.ts":
/*!*********************************!*\
  !*** ./src/8-advanced-types.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 交叉类型  Intersection Types\r\nfunction extend(first, second) {\r\n    var result = {};\r\n    for (var id in first) {\r\n        result[id] = first[id];\r\n    }\r\n    for (var id in second) {\r\n        if (!result.hasOwnProperty(id)) {\r\n            result[id] = second[id];\r\n        }\r\n    }\r\n    return result;\r\n}\r\nvar Person2 = /** @class */ (function () {\r\n    function Person2(name) {\r\n        this.name = name;\r\n    }\r\n    return Person2;\r\n}());\r\nvar ConsoleLogger = /** @class */ (function () {\r\n    function ConsoleLogger() {\r\n    }\r\n    ConsoleLogger.prototype.log = function () {\r\n        console.log(777);\r\n    };\r\n    return ConsoleLogger;\r\n}());\r\nvar jim = extend(new Person2('救赎之路--许巍'), new ConsoleLogger());\r\nconsole.log(jim.name);\r\njim.log();\r\n/* function extend<First, Second>(first: First, second: Second): First & Second {\r\n  const result: Partial<First & Second> = {}\r\n  for (const prop in first) {\r\n    if (first.hasOwnProperty(prop)) {\r\n      (result as First)[prop] = first[prop]\r\n    }\r\n  }\r\n  for (const prop in second) {\r\n    if (!result.hasOwnProperty(prop) && second.hasOwnProperty(prop)) {\r\n      (result as Second)[prop] = second[prop]\r\n    }\r\n  }\r\n\r\n  return result as First & Second\r\n}\r\nclass Person2 {\r\n  constructor(public name: string) { }\r\n}\r\ninterface Loggable {\r\n  name: string\r\n  log(name: string): void\r\n}\r\nclass ConsoleLogger implements Loggable {\r\n  name: string\r\n  constructor(name: string) {\r\n    this.name = name\r\n  }\r\n  log(name) {\r\n    console.log(`Hello, I'm ${name}.`);\r\n  }\r\n}\r\nconsole.log(ConsoleLogger.prototype)\r\nconst jim = extend(new Person2('DDD'), ConsoleLogger.prototype);\r\njim.log(jim.name); */\r\n// 联合类型  Union Types\r\n// 联合类型与交叉类型很有关联，但是使用上却完全不同。 偶尔你会遇到这种情况，一个代码库希望传入 number 或 string 类型的参数。\r\n/* function padLeft(value: string, padding: string | number) {\r\n  if (typeof padding === 'number') {\r\n    return Array(padding + 1).join(' ') + value\r\n  }\r\n  if (typeof padding === 'string') {\r\n    return padding + value\r\n  }\r\n  throw new Error(`Expected string or number, got '${padding}'.`)\r\n}\r\nconsole.log(padLeft('H', 10))\r\n// console.log(padLeft('H', true))  // any 的话编译阶段通过，运行时报错\r\nconsole.log(padLeft('H', 'MMMM')) */\r\n// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。\r\n/* interface Bird {\r\n  fly()\r\n  layEggs()\r\n}\r\ninterface Fish {\r\n  swim()\r\n  layEggs()\r\n}\r\nfunction getSmallPet(): Fish | Bird {\r\n  // ...\r\n}\r\nlet pet = getSmallPet()\r\npet.layEggs()\r\npet.swim() */ // 报错 swim只在Fish中存在\r\n// 类型防护和区分类型  Type Guards and Differentiating Types\r\n/* interface Bird {\r\n  fly()\r\n  layEggs()\r\n}\r\ninterface Fish {\r\n  swim()\r\n  layEggs()\r\n}\r\nfunction getSmallPet(): Fish | Bird {\r\n  // ...\r\n}\r\nlet pet = getSmallPet()\r\n// 类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个类型谓词：  pet is Fish 就是类型谓词。谓词为 parameterName is Type 这种形式， parameterName 必须是来自于当前函数签名里的一个参数名。\r\nfunction isFish(pet: Fish | Bird): pet is Fish {\r\n  return (pet as Fish).swim !== undefined\r\n}\r\nif (isFish(pet)) {\r\n  pet.swim()\r\n} else {\r\n  pet.fly()\r\n}\r\nfunction move(pet: Fish | Bird) {\r\n  if (\"swim\" in pet) {\r\n    return pet.swim();\r\n  }\r\n  return pet.fly();\r\n} */\r\n// typeof 类型保护\r\nfunction isNumber(x) {\r\n    return typeof x === 'number';\r\n}\r\nfunction isString(x) {\r\n    return typeof x === 'string';\r\n}\r\nfunction padLeft(value, padding) {\r\n    if (isNumber(padding)) {\r\n        return Array(padding + 1).join(' ') + value;\r\n    }\r\n    if (isString(padding)) {\r\n        return padding + value;\r\n    }\r\n    throw new Error(\"Expected string or number, got '\" + padding + \"'.\");\r\n}\r\nconsole.log(padLeft('Hello', 90));\r\nconsole.log(padLeft('Hello', 'true'));\r\n// instanceof 类型保护\r\nvar Bird = /** @class */ (function () {\r\n    function Bird() {\r\n    }\r\n    Bird.prototype.fly = function () {\r\n        console.log('bird fly');\r\n    };\r\n    Bird.prototype.layEggs = function () {\r\n        console.log('bird lay eggs');\r\n    };\r\n    return Bird;\r\n}());\r\nvar Fish = /** @class */ (function () {\r\n    function Fish() {\r\n    }\r\n    Fish.prototype.swim = function () {\r\n        console.log('fish swim');\r\n    };\r\n    Fish.prototype.layEggs = function () {\r\n        console.log('fish lay eggs');\r\n    };\r\n    return Fish;\r\n}());\r\nfunction getRandomPet() {\r\n    return Math.random() > 0.5 ? new Bird() : new Fish();\r\n}\r\nvar pet = getRandomPet();\r\nif (pet instanceof Bird) {\r\n    pet.fly();\r\n}\r\nif (pet instanceof Fish) {\r\n    pet.swim();\r\n}\r\nfunction broken(name) {\r\n    function postfix(epithet) {\r\n        return name.charAt(0) + '.  the ' + epithet; // error, 'name' 可能为 null\r\n    }\r\n    name = name || 'Bob';\r\n    return postfix('great');\r\n}\r\nconsole.log(broken(null));\r\n\n\n//# sourceURL=webpack:///./src/8-advanced-types.ts?");

/***/ })

/******/ });