/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/date-picker.js":
/*!***************************************!*\
  !*** ./src/components/date-picker.js ***!
  \***************************************/
/***/ (() => {

eval("var switcher = document.getElementById('date-picker');\nvar menu = document.getElementById('date-selector');\nvar dateToday = document.getElementById('date-today');\nswitcher.addEventListener('click', showMenu);\nfunction showMenu() {\n  switcher.classList.add('hidden');\n  menu.classList.remove('hidden');\n}\nfunction selectDate() {\n  // need Factory Function here\n  var calendar = document.getElementById('date');\n  var date = new Date();\n  var currentDate = date.toISOString().substring(0, 10);\n  calendar.value = currentDate;\n}\ndateToday.addEventListener('click', selectDate);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/date-picker.js?");

/***/ }),

/***/ "./src/components/loadApp.js":
/*!***********************************!*\
  !*** ./src/components/loadApp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tasksToLoad),\n/* harmony export */   domConstructor: () => (/* binding */ domConstructor)\n/* harmony export */ });\n/* harmony import */ var _new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-task */ \"./src/components/new-task.js\");\n/* harmony import */ var _date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-picker */ \"./src/components/date-picker.js\");\n/* harmony import */ var _date_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_date_picker__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _remove_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-task */ \"./src/components/remove-task.js\");\n\n\n\nvar taskList = document.getElementById(\"task-list\");\nvar tasksToLoad = [];\nfunction parseStorage() {\n  var taskRegex = /\\btask(\\d+)\\b/; //task0, task1 ...\n\n  Object.keys(localStorage).forEach(function (key) {\n    if (taskRegex.test(key)) {\n      var e = JSON.parse(localStorage.getItem(key));\n      tasksToLoad.push(e);\n    }\n  });\n  return loadDom(tasksToLoad);\n}\nparseStorage();\nfunction loadDom() {\n  for (var i = 0; i < tasksToLoad.length; i++) {\n    var t = tasksToLoad[i];\n    domConstructor(t.id, t.task, t.priority);\n  }\n}\nfunction domConstructor(ID, task, priority) {\n  var li = document.createElement(\"li\");\n  li.innerHTML = task;\n  li.setAttribute(\"task-id\", ID);\n  var prio = document.createElement('span');\n  prio.innerHTML = priority;\n  var button = document.createElement(\"button\");\n  button.innerHTML = \"x\";\n  button.classList.add(\"remove-task\");\n  button.addEventListener(\"click\", _remove_task__WEBPACK_IMPORTED_MODULE_2__.removeTask);\n  li.appendChild(button);\n  li.appendChild(prio);\n  taskList.appendChild(li);\n  return console.log(\"dom created\");\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/loadApp.js?");

/***/ }),

/***/ "./src/components/new-task.js":
/*!************************************!*\
  !*** ./src/components/new-task.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _updateDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDB */ \"./src/components/updateDB.js\");\n/* harmony import */ var _loadApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadApp */ \"./src/components/loadApp.js\");\n\n\n\nvar taskInput = document.getElementById(\"new-task-input\");\nvar submitButton = document.getElementById(\"new-task-add\");\nfunction checkInput(task, priority) {\n  if (task === \"\") {\n    return showError(\"Input empty\");\n  }\n  return storeTask(task, priority);\n}\nfunction storeTask(task, priority) {\n  var ID = Math.floor(Math.random() * 999);\n  _loadApp__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push({\n    ID: ID,\n    task: task,\n    priority: priority\n  });\n  return (0,_loadApp__WEBPACK_IMPORTED_MODULE_1__.domConstructor)(ID, task, priority), (0,_updateDB__WEBPACK_IMPORTED_MODULE_0__.updateDB)(ID, task, priority, true);\n}\nsubmitButton.addEventListener(\"click\", function () {\n  checkInput(taskInput.value, priority.value);\n});\nfunction showError(error) {\n  console.log(error);\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/components/new-task.js?");

/***/ }),

/***/ "./src/components/remove-task.js":
/*!***************************************!*\
  !*** ./src/components/remove-task.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeTask: () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _loadApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadApp */ \"./src/components/loadApp.js\");\n/* harmony import */ var _updateDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDB */ \"./src/components/updateDB.js\");\n\n\nvar removeButtons = document.querySelectorAll(\".remove-task\");\nfunction removeTask() {\n  var taskID = this.parentElement.getAttribute(\"task-id\");\n  var i = _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length;\n  this.parentElement.remove();\n  while (i--) {\n    if (taskID == _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].ID) {\n      _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(i, 1);\n    }\n  }\n  return (0,_updateDB__WEBPACK_IMPORTED_MODULE_1__.updateDB)(taskID, 0, false);\n}\nremoveButtons.forEach(function (button) {\n  button.addEventListener(\"click\", removeTask);\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/remove-task.js?");

/***/ }),

/***/ "./src/components/updateDB.js":
/*!************************************!*\
  !*** ./src/components/updateDB.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateDB: () => (/* binding */ updateDB)\n/* harmony export */ });\nfunction updateDB(ID, task, priority, mode) {\n  var taskData = {\n    id: ID,\n    task: task,\n    priority: priority\n  };\n  if (mode) {\n    localStorage.setItem(\"task\".concat(ID), JSON.stringify(taskData));\n  } else {\n    localStorage.removeItem(\"task\".concat(ID));\n  }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/updateDB.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_loadApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loadApp */ \"./src/components/loadApp.js\");\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;