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

/***/ "./src/components/date-picker.js":
/*!***************************************!*\
  !*** ./src/components/date-picker.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-task */ \"./src/components/new-task.js\");\n\nvar switcher = document.getElementById(\"date-picker\");\nvar menu = document.getElementById(\"date-selector\");\nvar dateToday = document.getElementById(\"date-today\");\nvar dateTomorrow = document.getElementById(\"date-tomorrow\");\nswitcher.addEventListener(\"click\", showMenu);\nfunction showMenu() {\n  switcher.classList.add(\"hidden\");\n  menu.classList.remove(\"hidden\");\n}\nfunction selectDate(day) {\n  var date = new Date();\n  var currentDate = date.toISOString().substring(0, 10);\n  if (day === \"tomorrow\") {\n    date = new Date(+new Date() + 86400000);\n  }\n  console.log(day);\n  currentDate = date.toISOString().substring(0, 10);\n  _new_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"].value = currentDate;\n}\ndateToday.addEventListener(\"click\", function () {\n  selectDate(\"today\");\n});\ndateTomorrow.addEventListener(\"click\", function () {\n  selectDate(\"tomorrow\");\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/components/date-picker.js?");

/***/ }),

/***/ "./src/components/loadApp.js":
/*!***********************************!*\
  !*** ./src/components/loadApp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projToLoad),\n/* harmony export */   domConstructor: () => (/* binding */ domConstructor),\n/* harmony export */   loadTasks: () => (/* binding */ loadTasks),\n/* harmony export */   taskList: () => (/* binding */ taskList)\n/* harmony export */ });\n/* harmony import */ var _new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-task */ \"./src/components/new-task.js\");\n/* harmony import */ var _date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-picker */ \"./src/components/date-picker.js\");\n/* harmony import */ var _remove_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-task */ \"./src/components/remove-task.js\");\n/* harmony import */ var _remove_proj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-proj */ \"./src/components/remove-proj.js\");\n\n\n\n\nvar taskList = document.getElementById(\"task-list\");\nvar projList = document.getElementById(\"projects\");\nvar projToLoad = [];\nfunction loadProj() {\n  var projRegex = /\\bproj(\\d+)\\b/; //proj0, proj1 ...\n  projToLoad = [];\n  Object.keys(localStorage).forEach(function (key) {\n    if (projRegex.test(key)) {\n      var e = JSON.parse(localStorage.getItem(key));\n      projToLoad.push(e);\n    }\n  });\n  for (var p = 0; p < projToLoad.length; p++) {\n    var l = projToLoad[p];\n    projConstructor(l.id, l.proj);\n  }\n}\nloadProj();\nfunction loadTasks() {\n  var tasksToLoad = [];\n  taskList.innerHTML = ''; //temporal decision, need to create garbage bin for this.\n  var taskRegex = /\\btask(\\d+)\\b/; //task0, task1 ...\n  Object.keys(localStorage).forEach(function (key) {\n    if (taskRegex.test(key)) {\n      var e = JSON.parse(localStorage.getItem(key));\n      tasksToLoad.push(e);\n    }\n  });\n  for (var i = 0; i < tasksToLoad.length; i++) {\n    var t = tasksToLoad[i];\n    if (t.projID == document.querySelector('.chosen-proj').getAttribute('proj-id')) {\n      domConstructor(t.id, t.task, t.priority, t.date);\n    }\n  }\n}\nloadTasks();\nfunction domConstructor(ID, task, priority, date) {\n  var li = document.createElement(\"li\");\n  var span = document.createElement(\"span\");\n  span.innerHTML = task;\n  span.classList.add('single-task');\n  li.setAttribute(\"task-id\", ID);\n  var prio = document.createElement('span');\n  prio.classList.add('task-priority');\n  prio.innerHTML = \"Priority: \".concat(priority, \".\");\n  var taskDate = document.createElement('span');\n  taskDate.classList.add('task-date');\n  taskDate.innerHTML = \"Date: \".concat(date);\n  var iconRemove = document.createElement('span');\n  iconRemove.classList.add('material-icons');\n  iconRemove.innerHTML = 'motion_photos_on';\n  var remove = document.createElement(\"button\");\n  remove.classList.add(\"remove-task\");\n  remove.addEventListener(\"click\", _remove_task__WEBPACK_IMPORTED_MODULE_2__.removeTask);\n  remove.appendChild(iconRemove);\n  li.appendChild(remove);\n  li.appendChild(span);\n  li.appendChild(prio);\n  li.appendChild(taskDate);\n  taskList.appendChild(li);\n  return console.log(\"dom created\");\n}\nfunction projConstructor(ID, proj) {\n  var li = document.createElement(\"li\");\n  var span = document.createElement('span');\n  var iconRemove = document.createElement('span');\n  span.setAttribute(\"proj-id\", ID);\n  span.innerHTML = proj;\n  iconRemove.classList.add('material-icons');\n  iconRemove.innerHTML = 'close';\n  var remove = document.createElement(\"button\");\n  remove.classList.add(\"remove-proj\");\n  remove.addEventListener(\"click\", _remove_proj__WEBPACK_IMPORTED_MODULE_3__.removeProj);\n  remove.appendChild(iconRemove);\n  li.appendChild(span);\n  li.appendChild(remove);\n  projList.appendChild(li);\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/loadApp.js?");

/***/ }),

/***/ "./src/components/new-proj.js":
/*!************************************!*\
  !*** ./src/components/new-proj.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _remove_proj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-proj */ \"./src/components/remove-proj.js\");\n/* harmony import */ var _updateProj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateProj */ \"./src/components/updateProj.js\");\n/* harmony import */ var _select_proj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-proj */ \"./src/components/select-proj.js\");\n\n\n\nvar newProjButton = document.getElementById(\"new-proj\");\nvar projectList = document.getElementById(\"projects\");\nnewProjButton.addEventListener(\"click\", addProj);\nfunction addProj() {\n  var proj = document.createElement(\"li\");\n  var input = document.createElement(\"input\");\n  var save = document.createElement(\"button\");\n  var saveIcon = document.createElement('span');\n  input.value = \"New project\";\n  input.classList.add(\"proj-name\");\n  save.classList.add(\"save-proj\");\n  save.addEventListener(\"click\", saveProj);\n  saveIcon.classList.add('material-icons');\n  saveIcon.innerHTML = 'done';\n  save.append(saveIcon);\n  proj.append(input, save);\n  projectList.appendChild(proj);\n}\nfunction saveProj() {\n  var ID = Math.floor(Math.random() * 999);\n  var input = document.querySelector(\".proj-name\");\n  var name = input.value;\n  var parent = this.parentElement;\n  var span = document.createElement(\"span\");\n  span.innerHTML = name;\n  span.setAttribute(\"proj-id\", ID);\n  span.addEventListener('click', _select_proj__WEBPACK_IMPORTED_MODULE_2__.selectProj);\n  parent.prepend(span);\n  this.innerHTML = \"x\";\n  this.removeEventListener(\"click\", saveProj);\n  this.addEventListener(\"click\", _remove_proj__WEBPACK_IMPORTED_MODULE_0__.removeProj);\n  input.remove();\n  return (0,_updateProj__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ID, name, true);\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/components/new-proj.js?");

/***/ }),

/***/ "./src/components/new-task.js":
/*!************************************!*\
  !*** ./src/components/new-task.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDB */ \"./src/components/updateDB.js\");\n/* harmony import */ var _loadApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadApp */ \"./src/components/loadApp.js\");\n\n\n\nvar taskInput = document.getElementById(\"new-task-input\");\nvar calendar = document.getElementById(\"date\");\nvar submitButton = document.getElementById(\"new-task-add\");\nfunction checkInput(task, priority, date) {\n  if (task === \"\") {\n    return showError(\"Input empty\");\n  }\n  return storeTask(task, priority, date);\n}\nfunction storeTask(task, priority, date) {\n  var ID = Math.floor(Math.random() * 999);\n  var projID = document.querySelector('.chosen-proj').getAttribute('proj-id');\n  _loadApp__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push({\n    ID: ID,\n    task: task,\n    priority: priority,\n    date: date\n  });\n  return (0,_loadApp__WEBPACK_IMPORTED_MODULE_1__.domConstructor)(ID, task, priority, date), (0,_updateDB__WEBPACK_IMPORTED_MODULE_0__.updateDB)(ID, task, priority, true, date, projID);\n}\nsubmitButton.addEventListener(\"click\", function () {\n  checkInput(taskInput.value, priority.value, calendar.value);\n});\nfunction showError(error) {\n  console.log(error);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calendar);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/new-task.js?");

/***/ }),

/***/ "./src/components/remove-proj.js":
/*!***************************************!*\
  !*** ./src/components/remove-proj.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeProj: () => (/* binding */ removeProj)\n/* harmony export */ });\n/* harmony import */ var _loadApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadApp */ \"./src/components/loadApp.js\");\n/* harmony import */ var _updateProj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateProj */ \"./src/components/updateProj.js\");\n\n\nvar removeButtons = document.querySelectorAll(\".remove-proj\");\nfunction removeProj() {\n  var defaultProj = document.querySelector('.default-proj > span');\n  var projID = this.parentElement.firstChild.getAttribute(\"proj-id\");\n  var i = _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length;\n  this.parentElement.remove();\n  defaultProj.classList.add('chosen-proj');\n  while (i--) {\n    if (projID == _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].ID) {\n      _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(i, 1);\n    }\n  }\n  (0,_updateProj__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projID, 0, false);\n}\nremoveButtons.forEach(function (button) {\n  button.addEventListener(\"click\", removeProj);\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/remove-proj.js?");

/***/ }),

/***/ "./src/components/remove-task.js":
/*!***************************************!*\
  !*** ./src/components/remove-task.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeTask: () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _loadApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadApp */ \"./src/components/loadApp.js\");\n/* harmony import */ var _updateDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDB */ \"./src/components/updateDB.js\");\n\n\nvar removeButtons = document.querySelectorAll(\".remove-task\");\nfunction removeTask() {\n  var taskID = this.parentElement.getAttribute(\"task-id\");\n  var i = _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length;\n  this.parentElement.classList.add('removed');\n  while (i--) {\n    if (taskID == _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].ID) {\n      _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(i, 1);\n    }\n  }\n  return (0,_updateDB__WEBPACK_IMPORTED_MODULE_1__.updateDB)(taskID, 0, false);\n}\nremoveButtons.forEach(function (button) {\n  button.addEventListener(\"click\", removeTask);\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/remove-task.js?");

/***/ }),

/***/ "./src/components/select-proj.js":
/*!***************************************!*\
  !*** ./src/components/select-proj.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   selectProj: () => (/* binding */ selectProj)\n/* harmony export */ });\n/* harmony import */ var _loadApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadApp */ \"./src/components/loadApp.js\");\n\nvar allProjects = document.querySelectorAll(\"#projects > li > span\");\nfunction selectProj() {\n  var selectedProj = document.querySelector(\".chosen-proj\");\n  selectedProj.classList.remove(\"chosen-proj\");\n  this.classList.add(\"chosen-proj\");\n  (0,_loadApp__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();\n}\nallProjects.forEach(function (project) {\n  project.addEventListener(\"click\", selectProj);\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/select-proj.js?");

/***/ }),

/***/ "./src/components/updateDB.js":
/*!************************************!*\
  !*** ./src/components/updateDB.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateDB: () => (/* binding */ updateDB)\n/* harmony export */ });\nfunction updateDB(ID, task, priority, mode, date, projID) {\n  var taskData = {\n    id: ID,\n    task: task,\n    priority: priority,\n    date: date,\n    projID: projID\n  };\n  if (mode) {\n    localStorage.setItem(\"task\".concat(ID), JSON.stringify(taskData));\n  } else {\n    localStorage.removeItem(\"task\".concat(ID));\n  }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/updateDB.js?");

/***/ }),

/***/ "./src/components/updateProj.js":
/*!**************************************!*\
  !*** ./src/components/updateProj.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction updateProj(ID, proj, mode) {\n  var projData = {\n    id: ID,\n    proj: proj\n  };\n  if (mode) {\n    localStorage.setItem(\"proj\".concat(ID), JSON.stringify(projData));\n  } else {\n    localStorage.removeItem(\"proj\".concat(ID));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateProj);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/updateProj.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_loadApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loadApp */ \"./src/components/loadApp.js\");\n/* harmony import */ var _components_select_proj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/select-proj */ \"./src/components/select-proj.js\");\n/* harmony import */ var _components_new_proj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/new-proj */ \"./src/components/new-proj.js\");\n/* harmony import */ var _components_remove_proj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/remove-proj */ \"./src/components/remove-proj.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

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