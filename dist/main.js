/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/new-task.js":
/*!************************************!*\
  !*** ./src/components/new-task.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _remove_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-task */ \"./src/components/remove-task.js\");\n/* harmony import */ var _updateDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDB */ \"./src/components/updateDB.js\");\n\n\nvar taskList = document.getElementById(\"task-list\");\nvar taskInput = document.getElementById(\"new-task-input\");\nvar submitButton = document.getElementById(\"new-task-add\");\nvar taskStorage = [];\nfunction checkInput(task) {\n  if (task === \"\") {\n    return showError(\"Input empty\");\n  }\n  return storeTask(task);\n}\nfunction storeTask(task) {\n  var ID = taskStorage.length;\n  taskStorage.push({\n    ID: ID,\n    task: task\n  });\n  return domConstructor(ID, task), (0,_updateDB__WEBPACK_IMPORTED_MODULE_1__.updateDB)(ID, task, true);\n}\nfunction domConstructor(ID, task) {\n  var li = document.createElement(\"li\");\n  li.innerHTML = task;\n  li.setAttribute(\"task-id\", ID);\n  var button = document.createElement(\"button\");\n  button.innerHTML = \"x\";\n  button.classList.add(\"remove-task\");\n  button.addEventListener(\"click\", _remove_task__WEBPACK_IMPORTED_MODULE_0__.removeTask);\n  li.appendChild(button);\n  taskList.appendChild(li);\n  return console.log(\"dom created\");\n}\nsubmitButton.addEventListener(\"click\", function () {\n  checkInput(taskInput.value);\n});\nfunction showError(error) {\n  console.log(error);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskStorage);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/new-task.js?");

/***/ }),

/***/ "./src/components/remove-task.js":
/*!***************************************!*\
  !*** ./src/components/remove-task.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeTask: () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-task */ \"./src/components/new-task.js\");\n/* harmony import */ var _updateDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDB */ \"./src/components/updateDB.js\");\n\n\nvar removeButtons = document.querySelectorAll(\".remove-task\");\nfunction removeTask() {\n  var taskID = this.parentElement.getAttribute(\"task-id\");\n  var i = _new_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length;\n  while (i--) {\n    if (taskID == _new_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].ID) {\n      _new_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(i, 1);\n      this.parentElement.remove();\n    }\n  }\n  return (0,_updateDB__WEBPACK_IMPORTED_MODULE_1__.updateDB)(taskID, 0, false);\n}\nremoveButtons.forEach(function (button) {\n  button.addEventListener(\"click\", removeTask);\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/remove-task.js?");

/***/ }),

/***/ "./src/components/updateDB.js":
/*!************************************!*\
  !*** ./src/components/updateDB.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateDB: () => (/* binding */ updateDB)\n/* harmony export */ });\n/* harmony import */ var _new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-task */ \"./src/components/new-task.js\");\n\nfunction updateDB(ID, task, mode) {\n  var taskData = {\n    id: ID,\n    task: task\n  };\n  if (mode) {\n    localStorage.setItem(ID, JSON.stringify(taskData));\n  } else {\n    localStorage.removeItem(ID);\n  }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/updateDB.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_new_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/new-task */ \"./src/components/new-task.js\");\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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