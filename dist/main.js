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

/***/ "./node_modules/boxicons/dist/boxicons.js":
/*!************************************************!*\
  !*** ./node_modules/boxicons/dist/boxicons.js ***!
  \************************************************/
/***/ ((module) => {

eval("!function (t, e, n, r, o) {\n  if (\"customElements\" in n) o();else {\n    if (n.AWAITING_WEB_COMPONENTS_POLYFILL) return void n.AWAITING_WEB_COMPONENTS_POLYFILL.then(o);\n    var a = n.AWAITING_WEB_COMPONENTS_POLYFILL = f();\n    a.then(o);\n    var i = n.WEB_COMPONENTS_POLYFILL || \"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js\",\n      s = n.ES6_CORE_POLYFILL || \"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js\";\n    \"Promise\" in n ? c(i).then(function () {\n      a.isDone = !0, a.exec();\n    }) : c(s).then(function () {\n      c(i).then(function () {\n        a.isDone = !0, a.exec();\n      });\n    });\n  }\n  function f() {\n    var t = [];\n    return t.isDone = !1, t.exec = function () {\n      t.splice(0).forEach(function (t) {\n        t();\n      });\n    }, t.then = function (e) {\n      return t.isDone ? e() : t.push(e), t;\n    }, t;\n  }\n  function c(t) {\n    var e = f(),\n      n = r.createElement(\"script\");\n    return n.type = \"text/javascript\", n.readyState ? n.onreadystatechange = function () {\n      \"loaded\" != n.readyState && \"complete\" != n.readyState || (n.onreadystatechange = null, e.isDone = !0, e.exec());\n    } : n.onload = function () {\n      e.isDone = !0, e.exec();\n    }, n.src = t, r.getElementsByTagName(\"head\")[0].appendChild(n), n.then = e.then, n;\n  }\n}(0, 0, window, document, function () {\n  var t, e;\n  t = window, e = function () {\n    return function (t) {\n      var e = {};\n      function n(r) {\n        if (e[r]) return e[r].exports;\n        var o = e[r] = {\n          i: r,\n          l: !1,\n          exports: {}\n        };\n        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;\n      }\n      return n.m = t, n.c = e, n.d = function (t, e, r) {\n        n.o(t, e) || Object.defineProperty(t, e, {\n          enumerable: !0,\n          get: r\n        });\n      }, n.r = function (t) {\n        \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {\n          value: \"Module\"\n        }), Object.defineProperty(t, \"__esModule\", {\n          value: !0\n        });\n      }, n.t = function (t, e) {\n        if (1 & e && (t = n(t)), 8 & e) return t;\n        if (4 & e && \"object\" == typeof t && t && t.__esModule) return t;\n        var r = Object.create(null);\n        if (n.r(r), Object.defineProperty(r, \"default\", {\n          enumerable: !0,\n          value: t\n        }), 2 & e && \"string\" != typeof t) for (var o in t) n.d(r, o, function (e) {\n          return t[e];\n        }.bind(null, o));\n        return r;\n      }, n.n = function (t) {\n        var e = t && t.__esModule ? function () {\n          return t.default;\n        } : function () {\n          return t;\n        };\n        return n.d(e, \"a\", e), e;\n      }, n.o = function (t, e) {\n        return Object.prototype.hasOwnProperty.call(t, e);\n      }, n.p = \"\", n(n.s = 5);\n    }([function (t, e) {\n      t.exports = function (t) {\n        var e = [];\n        return e.toString = function () {\n          return this.map(function (e) {\n            var n = function (t, e) {\n              var n,\n                r = t[1] || \"\",\n                o = t[3];\n              if (!o) return r;\n              if (e && \"function\" == typeof btoa) {\n                var a = (n = o, \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + \" */\"),\n                  i = o.sources.map(function (t) {\n                    return \"/*# sourceURL=\" + o.sourceRoot + t + \" */\";\n                  });\n                return [r].concat(i).concat([a]).join(\"\\n\");\n              }\n              return [r].join(\"\\n\");\n            }(e, t);\n            return e[2] ? \"@media \" + e[2] + \"{\" + n + \"}\" : n;\n          }).join(\"\");\n        }, e.i = function (t, n) {\n          \"string\" == typeof t && (t = [[null, t, \"\"]]);\n          for (var r = {}, o = 0; o < this.length; o++) {\n            var a = this[o][0];\n            \"number\" == typeof a && (r[a] = !0);\n          }\n          for (o = 0; o < t.length; o++) {\n            var i = t[o];\n            \"number\" == typeof i[0] && r[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = \"(\" + i[2] + \") and (\" + n + \")\"), e.push(i));\n          }\n        }, e;\n      };\n    }, function (t, e, n) {\n      var r = n(3);\n      t.exports = \"string\" == typeof r ? r : r.toString();\n    }, function (t, e, n) {\n      var r = n(4);\n      t.exports = \"string\" == typeof r ? r : r.toString();\n    }, function (t, e, n) {\n      (t.exports = n(0)(!1)).push([t.i, \"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}\", \"\"]);\n    }, function (t, e, n) {\n      (t.exports = n(0)(!1)).push([t.i, '.bx-rotate-90{transform:rotate(90deg);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}', \"\"]);\n    }, function (t, e, n) {\n      \"use strict\";\n\n      n.r(e), n.d(e, \"BoxIconElement\", function () {\n        return g;\n      });\n      var r,\n        o,\n        a,\n        i,\n        s = n(1),\n        f = n.n(s),\n        c = n(2),\n        l = n.n(c),\n        m = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (t) {\n          return typeof t;\n        } : function (t) {\n          return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : typeof t;\n        },\n        u = function () {\n          function t(t, e) {\n            for (var n = 0; n < e.length; n++) {\n              var r = e[n];\n              r.enumerable = r.enumerable || !1, r.configurable = !0, \"value\" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);\n            }\n          }\n          return function (e, n, r) {\n            return n && t(e.prototype, n), r && t(e, r), e;\n          };\n        }(),\n        d = (o = (r = Object).getPrototypeOf || function (t) {\n          return t.__proto__;\n        }, a = r.setPrototypeOf || function (t, e) {\n          return t.__proto__ = e, t;\n        }, i = \"object\" === (\"undefined\" == typeof Reflect ? \"undefined\" : m(Reflect)) ? Reflect.construct : function (t, e, n) {\n          var r,\n            o = [null];\n          return o.push.apply(o, e), r = t.bind.apply(t, o), a(new r(), n.prototype);\n        }, function (t) {\n          var e = o(t);\n          return a(t, a(function () {\n            return i(e, arguments, o(this).constructor);\n          }, e));\n        }),\n        p = window,\n        b = {},\n        y = document.createElement(\"template\"),\n        h = function () {\n          return !!p.ShadyCSS;\n        };\n      y.innerHTML = '\\n<style>\\n:host {\\n  display: inline-block;\\n  font-size: initial;\\n  box-sizing: border-box;\\n  width: 24px;\\n  height: 24px;\\n}\\n:host([size=xs]) {\\n    width: 0.8rem;\\n    height: 0.8rem;\\n}\\n:host([size=sm]) {\\n    width: 1.55rem;\\n    height: 1.55rem;\\n}\\n:host([size=md]) {\\n    width: 2.25rem;\\n    height: 2.25rem;\\n}\\n:host([size=lg]) {\\n    width: 3.0rem;\\n    height: 3.0rem;\\n}\\n\\n:host([size]:not([size=\"\"]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\\n    width: auto;\\n    height: auto;\\n}\\n:host([pull=left]) #icon {\\n    float: left;\\n    margin-right: .3em!important;\\n}\\n:host([pull=right]) #icon {\\n    float: right;\\n    margin-left: .3em!important;\\n}\\n:host([border=square]) #icon {\\n    padding: .25em;\\n    border: .07em solid rgba(0,0,0,.1);\\n    border-radius: .25em;\\n}\\n:host([border=circle]) #icon {\\n    padding: .25em;\\n    border: .07em solid rgba(0,0,0,.1);\\n    border-radius: 50%;\\n}\\n#icon,\\nsvg {\\n  width: 100%;\\n  height: 100%;\\n}\\n#icon {\\n    box-sizing: border-box;\\n} \\n' + f.a + \"\\n\" + l.a + '\\n</style>\\n<div id=\"icon\"></div>';\n      var g = d(function (t) {\n        function e() {\n          !function (t, e) {\n            if (!(t instanceof e)) throw new TypeError(\"Cannot call a class as a function\");\n          }(this, e);\n          var t = function (t, e) {\n            if (!t) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n            return !e || \"object\" != typeof e && \"function\" != typeof e ? t : e;\n          }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));\n          return t.$ui = t.attachShadow({\n            mode: \"open\"\n          }), t.$ui.appendChild(t.ownerDocument.importNode(y.content, !0)), h() && p.ShadyCSS.styleElement(t), t._state = {\n            $iconHolder: t.$ui.getElementById(\"icon\"),\n            type: t.getAttribute(\"type\")\n          }, t;\n        }\n        return function (t, e) {\n          if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function, not \" + typeof e);\n          t.prototype = Object.create(e && e.prototype, {\n            constructor: {\n              value: t,\n              enumerable: !1,\n              writable: !0,\n              configurable: !0\n            }\n          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);\n        }(e, HTMLElement), u(e, null, [{\n          key: \"getIconSvg\",\n          value: function (t, e) {\n            var n = this.cdnUrl + \"/regular/bx-\" + t + \".svg\";\n            return \"solid\" === e ? n = this.cdnUrl + \"/solid/bxs-\" + t + \".svg\" : \"logo\" === e && (n = this.cdnUrl + \"/logos/bxl-\" + t + \".svg\"), n && b[n] || (b[n] = new Promise(function (t, e) {\n              var r = new XMLHttpRequest();\n              r.addEventListener(\"load\", function () {\n                this.status < 200 || this.status >= 300 ? e(new Error(this.status + \" \" + this.responseText)) : t(this.responseText);\n              }), r.onerror = e, r.onabort = e, r.open(\"GET\", n), r.send();\n            })), b[n];\n          }\n        }, {\n          key: \"define\",\n          value: function (t) {\n            t = t || this.tagName, h() && p.ShadyCSS.prepareTemplate(y, t), customElements.define(t, this);\n          }\n        }, {\n          key: \"cdnUrl\",\n          get: function () {\n            return \"//unpkg.com/boxicons@2.1.4/svg\";\n          }\n        }, {\n          key: \"tagName\",\n          get: function () {\n            return \"box-icon\";\n          }\n        }, {\n          key: \"observedAttributes\",\n          get: function () {\n            return [\"type\", \"name\", \"color\", \"size\", \"rotate\", \"flip\", \"animation\", \"border\", \"pull\"];\n          }\n        }]), u(e, [{\n          key: \"attributeChangedCallback\",\n          value: function (t, e, n) {\n            var r = this._state.$iconHolder;\n            switch (t) {\n              case \"type\":\n                !function (t, e, n) {\n                  var r = t._state;\n                  r.$iconHolder.textContent = \"\", r.type && (r.type = null), r.type = !n || \"solid\" !== n && \"logo\" !== n ? \"regular\" : n, void 0 !== r.currentName && t.constructor.getIconSvg(r.currentName, r.type).then(function (t) {\n                    r.type === n && (r.$iconHolder.innerHTML = t);\n                  }).catch(function (t) {\n                    console.error(\"Failed to load icon: \" + r.currentName + \"\\n\" + t);\n                  });\n                }(this, 0, n);\n                break;\n              case \"name\":\n                !function (t, e, n) {\n                  var r = t._state;\n                  r.currentName = n, r.$iconHolder.textContent = \"\", n && void 0 !== r.type && t.constructor.getIconSvg(n, r.type).then(function (t) {\n                    r.currentName === n && (r.$iconHolder.innerHTML = t);\n                  }).catch(function (t) {\n                    console.error(\"Failed to load icon: \" + n + \"\\n\" + t);\n                  });\n                }(this, 0, n);\n                break;\n              case \"color\":\n                r.style.fill = n || \"\";\n                break;\n              case \"size\":\n                !function (t, e, n) {\n                  var r = t._state;\n                  r.size && (r.$iconHolder.style.width = r.$iconHolder.style.height = \"\", r.size = r.sizeType = null), n && !/^(xs|sm|md|lg)$/.test(r.size) && (r.size = n.trim(), r.$iconHolder.style.width = r.$iconHolder.style.height = r.size);\n                }(this, 0, n);\n                break;\n              case \"rotate\":\n                e && r.classList.remove(\"bx-rotate-\" + e), n && r.classList.add(\"bx-rotate-\" + n);\n                break;\n              case \"flip\":\n                e && r.classList.remove(\"bx-flip-\" + e), n && r.classList.add(\"bx-flip-\" + n);\n                break;\n              case \"animation\":\n                e && r.classList.remove(\"bx-\" + e), n && r.classList.add(\"bx-\" + n);\n            }\n          }\n        }, {\n          key: \"connectedCallback\",\n          value: function () {\n            h() && p.ShadyCSS.styleElement(this);\n          }\n        }]), e;\n      }());\n      e.default = g, g.define();\n    }]);\n  },  true ? module.exports = e() : 0;\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/boxicons/dist/boxicons.js?");

/***/ }),

/***/ "./src/components/date-picker.js":
/*!***************************************!*\
  !*** ./src/components/date-picker.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-task */ \"./src/components/new-task.js\");\n\nvar switcher = document.getElementById(\"date-picker\");\nvar menu = document.getElementById(\"date-selector\");\nvar dateToday = document.getElementById(\"date-today\");\nvar dateTomorrow = document.getElementById(\"date-tomorrow\");\nswitcher.addEventListener(\"click\", showMenu);\nfunction showMenu() {\n  switcher.classList.add(\"hidden\");\n  menu.classList.remove(\"hidden\");\n}\nfunction selectDate(day) {\n  var date = new Date();\n  var currentDate = date.toISOString().substring(0, 10);\n  if (day === \"tomorrow\") {\n    date = new Date(+new Date() + 86400000);\n  }\n  console.log(day);\n  currentDate = date.toISOString().substring(0, 10);\n  _new_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"].value = currentDate;\n}\ndateToday.addEventListener(\"click\", function () {\n  selectDate(\"today\");\n});\ndateTomorrow.addEventListener(\"click\", function () {\n  selectDate(\"tomorrow\");\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/components/date-picker.js?");

/***/ }),

/***/ "./src/components/loadApp.js":
/*!***********************************!*\
  !*** ./src/components/loadApp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projToLoad),\n/* harmony export */   domConstructor: () => (/* binding */ domConstructor),\n/* harmony export */   loadTasks: () => (/* binding */ loadTasks),\n/* harmony export */   taskList: () => (/* binding */ taskList)\n/* harmony export */ });\n/* harmony import */ var _new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-task */ \"./src/components/new-task.js\");\n/* harmony import */ var _date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-picker */ \"./src/components/date-picker.js\");\n/* harmony import */ var _remove_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-task */ \"./src/components/remove-task.js\");\n/* harmony import */ var _remove_proj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-proj */ \"./src/components/remove-proj.js\");\n\n\n\n\nvar taskList = document.getElementById(\"task-list\");\nvar projList = document.getElementById(\"projects\");\nvar projToLoad = [];\nfunction loadProj() {\n  var projRegex = /\\bproj(\\d+)\\b/; //proj0, proj1 ...\n  projToLoad = [];\n  Object.keys(localStorage).forEach(function (key) {\n    if (projRegex.test(key)) {\n      var e = JSON.parse(localStorage.getItem(key));\n      projToLoad.push(e);\n    }\n  });\n  for (var p = 0; p < projToLoad.length; p++) {\n    var l = projToLoad[p];\n    projConstructor(l.id, l.proj);\n  }\n}\nloadProj();\nfunction loadTasks() {\n  var tasksToLoad = [];\n  taskList.innerHTML = ''; //temporal decision, need to create garbage bin for this.\n  var taskRegex = /\\btask(\\d+)\\b/; //task0, task1 ...\n  Object.keys(localStorage).forEach(function (key) {\n    if (taskRegex.test(key)) {\n      var e = JSON.parse(localStorage.getItem(key));\n      tasksToLoad.push(e);\n    }\n  });\n  for (var i = 0; i < tasksToLoad.length; i++) {\n    var t = tasksToLoad[i];\n    if (t.projID == document.querySelector('.chosen-proj').getAttribute('proj-id')) {\n      domConstructor(t.id, t.task, t.priority, t.date);\n    }\n  }\n}\nloadTasks();\nfunction domConstructor(ID, task, priority, date) {\n  var li = document.createElement(\"li\");\n  var span = document.createElement(\"span\");\n  span.innerHTML = task;\n  span.classList.add('single-task');\n  li.setAttribute(\"task-id\", ID);\n  var prio = document.createElement('span');\n  prio.classList.add('task-priority');\n  prio.innerHTML = \"Priority: \".concat(priority);\n  var taskDate = document.createElement('span');\n  taskDate.classList.add('task-date');\n  taskDate.innerHTML = \"Date: \".concat(date);\n  var remove = document.createElement(\"button\");\n  remove.innerHTML = \"x\";\n  remove.classList.add(\"remove-task\");\n  remove.addEventListener(\"click\", _remove_task__WEBPACK_IMPORTED_MODULE_2__.removeTask);\n  li.appendChild(remove);\n  li.appendChild(span);\n  li.appendChild(prio);\n  li.appendChild(taskDate);\n  taskList.appendChild(li);\n  return console.log(\"dom created\");\n}\nfunction projConstructor(ID, proj) {\n  var li = document.createElement(\"li\");\n  var span = document.createElement('span');\n  span.setAttribute(\"proj-id\", ID);\n  span.innerHTML = proj;\n  var remove = document.createElement(\"button\");\n  remove.innerHTML = \"x\";\n  remove.classList.add(\"remove-proj\");\n  remove.addEventListener(\"click\", _remove_proj__WEBPACK_IMPORTED_MODULE_3__.removeProj);\n  li.appendChild(span);\n  li.appendChild(remove);\n  projList.appendChild(li);\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/loadApp.js?");

/***/ }),

/***/ "./src/components/new-proj.js":
/*!************************************!*\
  !*** ./src/components/new-proj.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _remove_proj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-proj */ \"./src/components/remove-proj.js\");\n/* harmony import */ var _updateProj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateProj */ \"./src/components/updateProj.js\");\n/* harmony import */ var _select_proj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-proj */ \"./src/components/select-proj.js\");\n\n\n\nvar newProjButton = document.getElementById(\"new-proj\");\nvar projectList = document.getElementById(\"projects\");\nnewProjButton.addEventListener(\"click\", addProj);\nfunction addProj() {\n  var proj = document.createElement(\"li\");\n  var input = document.createElement(\"input\");\n  var save = document.createElement(\"button\");\n  input.value = \"New project\";\n  input.classList.add(\"proj-name\");\n  save.classList.add(\"save-proj\");\n  save.innerHTML = \"s\";\n  save.addEventListener(\"click\", saveProj);\n  proj.append(input, save);\n  projectList.appendChild(proj);\n}\nfunction saveProj() {\n  var ID = Math.floor(Math.random() * 999);\n  var input = document.querySelector(\".proj-name\");\n  var name = input.value;\n  var parent = this.parentElement;\n  var span = document.createElement(\"span\");\n  span.innerHTML = name;\n  span.setAttribute(\"proj-id\", ID);\n  span.addEventListener('click', _select_proj__WEBPACK_IMPORTED_MODULE_2__.selectProj);\n  parent.prepend(span);\n  this.innerHTML = \"x\";\n  this.removeEventListener(\"click\", saveProj);\n  this.addEventListener(\"click\", _remove_proj__WEBPACK_IMPORTED_MODULE_0__.removeProj);\n  input.remove();\n  return (0,_updateProj__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ID, name, true);\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/components/new-proj.js?");

/***/ }),

/***/ "./src/components/new-task.js":
/*!************************************!*\
  !*** ./src/components/new-task.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDB */ \"./src/components/updateDB.js\");\n/* harmony import */ var _loadApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadApp */ \"./src/components/loadApp.js\");\n\n\n\nvar taskInput = document.getElementById(\"new-task-input\");\nvar calendar = document.getElementById(\"date\");\nvar submitButton = document.getElementById(\"new-task-add\");\nfunction checkInput(task, priority, date) {\n  if (task === \"\") {\n    return showError(\"Input empty\");\n  }\n  return storeTask(task, priority, date);\n}\nfunction storeTask(task, priority, date) {\n  var ID = Math.floor(Math.random() * 999);\n  var projID = document.querySelector('.chosen-proj').getAttribute('proj-id');\n  _loadApp__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push({\n    ID: ID,\n    task: task,\n    priority: priority,\n    date: date\n  });\n  return (0,_loadApp__WEBPACK_IMPORTED_MODULE_1__.domConstructor)(ID, task, priority, date), (0,_updateDB__WEBPACK_IMPORTED_MODULE_0__.updateDB)(ID, task, priority, true, date, projID);\n}\nsubmitButton.addEventListener(\"click\", function () {\n  checkInput(taskInput.value, priority.value, calendar.value);\n});\nfunction showError(error) {\n  console.log(error);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calendar);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/new-task.js?");

/***/ }),

/***/ "./src/components/remove-proj.js":
/*!***************************************!*\
  !*** ./src/components/remove-proj.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeProj: () => (/* binding */ removeProj)\n/* harmony export */ });\n/* harmony import */ var _loadApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadApp */ \"./src/components/loadApp.js\");\n/* harmony import */ var _updateProj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateProj */ \"./src/components/updateProj.js\");\n\n\nvar removeButtons = document.querySelectorAll(\".remove-proj\");\nfunction removeProj() {\n  var defaultProj = document.querySelector('.default-proj > span');\n  var projID = this.parentElement.firstChild.getAttribute(\"proj-id\");\n  var i = _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length;\n  this.parentElement.remove();\n  defaultProj.classList.add('chosen-proj');\n  while (i--) {\n    if (projID == _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].ID) {\n      _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(i, 1);\n    }\n  }\n  (0,_updateProj__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projID, 0, false);\n}\nremoveButtons.forEach(function (button) {\n  button.addEventListener(\"click\", removeProj);\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/remove-proj.js?");

/***/ }),

/***/ "./src/components/remove-task.js":
/*!***************************************!*\
  !*** ./src/components/remove-task.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeTask: () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _loadApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadApp */ \"./src/components/loadApp.js\");\n/* harmony import */ var _updateDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDB */ \"./src/components/updateDB.js\");\n\n\nvar removeButtons = document.querySelectorAll(\".remove-task\");\nfunction removeTask() {\n  var taskID = this.parentElement.getAttribute(\"task-id\");\n  var i = _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length;\n  this.parentElement.remove();\n  while (i--) {\n    if (taskID == _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].ID) {\n      _loadApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(i, 1);\n    }\n  }\n  return (0,_updateDB__WEBPACK_IMPORTED_MODULE_1__.updateDB)(taskID, 0, false);\n}\nremoveButtons.forEach(function (button) {\n  button.addEventListener(\"click\", removeTask);\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/remove-task.js?");

/***/ }),

/***/ "./src/components/select-proj.js":
/*!***************************************!*\
  !*** ./src/components/select-proj.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   selectProj: () => (/* binding */ selectProj)\n/* harmony export */ });\n/* harmony import */ var _loadApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadApp */ \"./src/components/loadApp.js\");\n\nvar allProjects = document.querySelectorAll(\"#projects > li > span\");\nfunction selectProj() {\n  var selectedProj = document.querySelector(\".chosen-proj\");\n  selectedProj.classList.remove(\"chosen-proj\");\n  this.classList.add(\"chosen-proj\");\n  (0,_loadApp__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();\n}\nallProjects.forEach(function (project) {\n  project.addEventListener(\"click\", selectProj);\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/select-proj.js?");

/***/ }),

/***/ "./src/components/updateDB.js":
/*!************************************!*\
  !*** ./src/components/updateDB.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateDB: () => (/* binding */ updateDB)\n/* harmony export */ });\nfunction updateDB(ID, task, priority, mode, date, projID) {\n  var taskData = {\n    id: ID,\n    task: task,\n    priority: priority,\n    date: date,\n    projID: projID\n  };\n  if (mode) {\n    localStorage.setItem(\"task\".concat(ID), JSON.stringify(taskData));\n  } else {\n    localStorage.removeItem(\"task\".concat(ID));\n  }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/updateDB.js?");

/***/ }),

/***/ "./src/components/updateProj.js":
/*!**************************************!*\
  !*** ./src/components/updateProj.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction updateProj(ID, proj, mode) {\n  var projData = {\n    id: ID,\n    proj: proj\n  };\n  if (mode) {\n    localStorage.setItem(\"proj\".concat(ID), JSON.stringify(projData));\n  } else {\n    localStorage.removeItem(\"proj\".concat(ID));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateProj);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/updateProj.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var boxicons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! boxicons */ \"./node_modules/boxicons/dist/boxicons.js\");\n/* harmony import */ var boxicons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(boxicons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_loadApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loadApp */ \"./src/components/loadApp.js\");\n/* harmony import */ var _components_select_proj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/select-proj */ \"./src/components/select-proj.js\");\n/* harmony import */ var _components_new_proj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/new-proj */ \"./src/components/new-proj.js\");\n/* harmony import */ var _components_remove_proj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/remove-proj */ \"./src/components/remove-proj.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

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