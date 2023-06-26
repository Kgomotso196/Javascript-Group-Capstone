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

/***/ "./config/default.js":
/*!***************************!*\
  !*** ./config/default.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst UNIQUE_APP_ID = '8ADn2pupA2eWcFJ0PR1Y';\nconst DEFAULT = {\n  MOVE_API_URL: 'https://api.tvmaze.com/shows',\n  PAGINATION_ITEM_PER_PAGE: 30,\n  INVOLVEMENT_API_BASEURL: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${UNIQUE_APP_ID}`,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DEFAULT);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./config/default.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.google.com/specimen/Outfit);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #00d5ff;\\r\\n  font-family: Outfit, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\\r\\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\r\\n  font-size: 14px;\\r\\n  color: white;\\r\\n  position: relative;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_Home_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Home.service.js */ \"./src/modules/Home.service.js\");\n\r\n\r\n\r\n(async () => {\r\n  // TODO: HOME PAGE\r\n  (0,_modules_Home_service_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n  // TODO: COMMENT\r\n})();\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/js/index.js?");

/***/ }),

/***/ "./src/modules/Home.controller.js":
/*!****************************************!*\
  !*** ./src/modules/Home.controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get\": () => (/* binding */ get),\n/* harmony export */   \"getMovieHandler\": () => (/* binding */ getMovieHandler),\n/* harmony export */   \"homeMovieCounter\": () => (/* binding */ homeMovieCounter),\n/* harmony export */   \"jump\": () => (/* binding */ jump),\n/* harmony export */   \"nextPage\": () => (/* binding */ nextPage),\n/* harmony export */   \"paginationHandler\": () => (/* binding */ paginationHandler),\n/* harmony export */   \"prevPage\": () => (/* binding */ prevPage),\n/* harmony export */   \"renderMovieHandler\": () => (/* binding */ renderMovieHandler),\n/* harmony export */   \"renderPaginationHandler\": () => (/* binding */ renderPaginationHandler),\n/* harmony export */   \"set\": () => (/* binding */ set)\n/* harmony export */ });\n/* harmony import */ var _config_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/default.js */ \"./config/default.js\");\n/* harmony import */ var _Likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Likes.js */ \"./src/modules/Likes.js\");\n/* harmony import */ var _Home_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.counter.js */ \"./src/modules/Home.counter.js\");\n\n\n\n\nconst getMoviewithLikeList = (movies, likes) => {\n  // - TODO: if there is no like just send the default data\n  if (!likes.length) return movies;\n  //  TODO: if there is append the data\n  likes.forEach((element) => {\n    const index = movies.findIndex((movie) => movie.id === element.item_id);\n    if (index !== -1) movies[index].likes = element.likes;\n  });\n  return likes;\n};\n\nconst homeMovieCounter = () => {\n  const movieCounter = document.querySelectorAll('.card');\n  const movieItems = (0,_Home_counter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movieCounter);\n  const displayMovieCounter = document.querySelector('#movie-counter');\n  displayMovieCounter.innerHTML = `Movies(${movieItems})`;\n};\n\nconst getMovieHandler = async () => {\n  try {\n    const moveList = await fetch(_config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MOVE_API_URL);\n    const likeList = await (0,_Likes_js__WEBPACK_IMPORTED_MODULE_1__.getLike)();\n    const movieListsJson = await moveList.json();\n    getMoviewithLikeList(movieListsJson, likeList);\n    return movieListsJson;\n  } catch (error) {\n    throw new Error(error);\n  }\n};\n\n// - TODO: SET AND GET IN LOCAL STORAGE\nconst get = (key) => JSON.parse(localStorage.getItem(key));\nconst set = (key, value) => localStorage.setItem(key, JSON.stringify(value));\n// - TODO: SET AND GET CURRENT ACTIVE DATA\nconst currentData = (data) => {\n  const currentPage = get('currentPage') || 1;\n  const begin = (currentPage - 1) * _config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PAGINATION_ITEM_PER_PAGE;\n  const end = begin + _config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PAGINATION_ITEM_PER_PAGE;\n  return data.slice(begin, end);\n};\n\nconst paginationHandler = (movieList) => {\n  const maxPage = Math.ceil(\n    movieList.length / _config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PAGINATION_ITEM_PER_PAGE,\n  );\n  set('maxPage', maxPage);\n  return maxPage;\n};\n\nconst renderMovieHandler = (Database) => currentData(Database)\n  .map(\n    (movie) => ` <div class=\"tooltip\">\n        <div class=\"card\" id=${movie.id}>\n        <a href=${movie.officialSite}><img src=${\n  movie.image.medium\n} alt=\"\" class=\"movie-img  \"/></a>\n        <div class=\"container\">\n        <div class=\"card-header\">\n            <Label class=\"movie-name\">${movie.name}</Label>\n            <span  id=${movie.id} class=\"material-symbols-outlined\">\n            favorite \n            </span>\n            </div>\n        <ul>\n            <li class=\"premiered\">${movie.premiered}</li>\n            <li class=\"duration\">${movie.averageRuntime} min</li>\n            <li id=like_${movie.id} class=\"likes\">${\n  movie.likes ? movie.likes : '0'\n} Likes</li>\n            </ul>\n            <button id=comment_${\n  movie.id\n} class=\"home-comment-btn\">Comment</button>\n            </div>\n    </div>\n  <span class=\"tooltiptext\">${JSON.stringify(movie.summary)}</span>\n</div>`,\n  )\n  .join(' ');\n\nconst renderPaginationHandler = (\n  ListOfmovies,\n) => `<div class=\"pagination\">\n    <a href=\"#\" class=\"previousPage\">&laquo;</a>\n    ${new Array(paginationHandler(ListOfmovies))\n    .fill(0)\n    .map(\n      (page, index) => `<a href=\"#\" class=\"selector\" id=${index + 1}>${index + 1}</a>`,\n    )\n    .join(' ')}\n    <a href=\"#\" class=\"nextPage\">&raquo;</a>\n    </div>`;\n\nconst setCurrentPage = (currentPage) => set('currentPage', currentPage.toString());\n\n// - TODO: NAVIGATION FOR PAGINATION\nconst nextPage = () => setCurrentPage(Math.min(get('currentPage') + 1, get('maxPage')));\nconst prevPage = () => setCurrentPage(Math.max(get('currentPage') - 1, 1));\nconst jump = (page) => {\n  const pageNumber = Math.max(1, page);\n  setCurrentPage(Math.min(pageNumber, get('maxPage')));\n};\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/Home.controller.js?");

/***/ }),

/***/ "./src/modules/Home.counter.js":
/*!*************************************!*\
  !*** ./src/modules/Home.counter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((movieCounter) => movieCounter.length);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/Home.counter.js?");

/***/ }),

/***/ "./src/modules/Home.service.js":
/*!*************************************!*\
  !*** ./src/modules/Home.service.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.controller.js */ \"./src/modules/Home.controller.js\");\n/* harmony import */ var _Likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Likes.js */ \"./src/modules/Likes.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n\n\n\n\n\nconst movieLists = document.querySelector('.List');\nconst pagination = document.querySelector('.Pagination');\n\nconst HomePage = async () => {\n  const movieListData = await (0,_Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.getMovieHandler)();\n  if (movieListData.length < 0) {\n    // ? could use spinner component here when fetching data\n    movieLists.innerHTML = 'loading';\n  } else {\n    movieLists.innerHTML = (0,_Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.renderMovieHandler)(movieListData);\n  }\n  pagination.innerHTML = (0,_Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.renderPaginationHandler)(movieListData);\n  // - TODO: attach event listner to Like button\n\n  const likeButtons = document.querySelectorAll('.material-symbols-outlined');\n  likeButtons.forEach((likeButton) => {\n    likeButton.addEventListener('click', (event) => {\n      likeButton.classList.add('red');\n      // - TODO: also increment in the UI\n      (0,_Likes_js__WEBPACK_IMPORTED_MODULE_1__.postLike)(event.target.id).then(() => {\n        const a = document.querySelector(`#like_${event.target.id}`);\n        let previousValue = parseInt(a.innerHTML.split(' ')[0], 10);\n        previousValue += 1;\n        a.innerHTML = `${previousValue} Likes</p>`;\n      });\n    });\n  });\n  // - TODO render counter\n  (0,_Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.homeMovieCounter)();\n\n  // renderCommentPopup()\n  (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.commentListener)();\n\n  // - TODO: end\n  const previousButton = document.querySelector('.previousPage');\n  const nextButton = document.querySelector('.nextPage');\n  previousButton.addEventListener('click', _Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.prevPage);\n  nextButton.addEventListener('click', _Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.nextPage);\n  const paginationButton = document.querySelectorAll('.selector');\n  paginationButton.forEach((element) => {\n    element.addEventListener('click', (event) => {\n      event.target.classList.add('.active');\n      (0,_Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.jump)(event.target.id);\n      (0,_Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.set)('selectedPageNumber', event.target.id);\n      window.location.reload();\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/Home.service.js?");

/***/ }),

/***/ "./src/modules/Likes.js":
/*!******************************!*\
  !*** ./src/modules/Likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLike\": () => (/* binding */ getLike),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\n/* harmony import */ var _config_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/default.js */ \"./config/default.js\");\n\n\nconst getLike = async () => {\n  try {\n    const Likes = await fetch(`${_config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INVOLVEMENT_API_BASEURL}/likes/`);\n    const likeData = await Likes.json();\n    return likeData;\n  } catch (error) {\n    throw new Error('unable to get a Data');\n  }\n};\n\n// Function to add new like\nconst postLike = async (id) => {\n  try {\n    await fetch(`${_config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INVOLVEMENT_API_BASEURL}/likes/`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: Number(id),\n      }),\n    });\n  } catch (error) {\n    throw new Error('Can not post Like');\n  }\n};\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/Likes.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (indices) => {\n  const sum = indices.length;\n  return sum;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"commentListener\": () => (/* binding */ commentListener),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"hidePopup\": () => (/* binding */ hidePopup)\n/* harmony export */ });\n/* harmony import */ var _config_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/default.js */ \"./config/default.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\r\n\r\n\r\nconst postUrl = `${_config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INVOLVEMENT_API_BASEURL}/comments`;\r\n\r\nconst getUrl = `${_config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INVOLVEMENT_API_BASEURL}/comments?item_id=`;\r\n\r\nconst crossBtn = document.querySelector('.comment-cross');\r\nconst commentPopup = document.querySelector('.comment-popup');\r\nlet commentBtn;\r\nconst hidePopup = () => {\r\n  commentPopup.style.display = 'none';\r\n};\r\n\r\ncrossBtn.addEventListener('click', hidePopup);\r\n\r\n//This function adds new comment\r\nconst addComment = async (data) => {\r\n  const response = await fetch(postUrl, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: data.itemId,\r\n      username: data.username,\r\n      comment: data.comment,\r\n    }),\r\n  });\r\n  const commentCall = await response.text();\r\n  return commentCall;\r\n};\r\n\r\nconst getData = async (id) => {\r\n  const getResponse = await fetch(`${getUrl}${id}`);\r\n  const result = await getResponse.json();\r\n  return result;\r\n};\r\n//Comment showing functions added\r\n\r\nconst display = (comments) => {\r\n  let li = '';\r\n  comments.forEach((commentItem) => {\r\n    li += `\r\n    <li class=\"comment-detail\">\r\n    <span class=\"date\">${commentItem.creation_date}</span>\r\n    <span class=\"name\">${commentItem.username}:</span>\r\n    <span class=\"commet\">${commentItem.comment}</span>\r\n    </li>\r\n    `;\r\n  });\r\n  document.querySelector('.comment-holder').innerHTML = li;\r\n};\r\n\r\nconst commentCounterUpdate = (indices) => {\r\n  const sum = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(indices);\r\n  document.querySelector('.comment-heading-container').innerHTML = ` <h3 class=\"comment-heading\">Comments(${sum})</h3> `;\r\n};\r\n\r\nconst insertComment = async (id) => {\r\n  const insertDom = await getData(id);\r\n  display(insertDom);\r\n  commentCounterUpdate(insertDom);\r\n};\r\nconst renderCommentPopup = async (e) => {\r\n  const movieId = parseInt(e.target.id.split('_')[1], 10);\r\n  const movieCard = e.target.parentElement.parentElement;\r\n  const cardImageUrl = movieCard.firstElementChild.firstElementChild.src;\r\n  const releaseDate = movieCard.querySelector('.premiered').innerText;\r\n  const duration = movieCard.querySelector('.duration').innerText;\r\n  const name = movieCard.querySelector('.movie-name').innerText;\r\n  const likes = movieCard.querySelector('.likes').innerText;\r\n\r\n  let movieDescription = '';\r\n  movieDescription += `\r\n      <div class=\"img-container\">\r\n      <img src=\"${cardImageUrl}\" alt=\"${name}\">\r\n      <h1 class=\"movie-title\">${name}</h1>\r\n    </div>\r\n    <div class=\"movie-details\">\r\n      <div class=\"left-detail\">\r\n        <div class=\"starring\">Release Date: ${releaseDate}</div>\r\n        <div class=\"Quality\">Quality: HD</div>\r\n      </div>\r\n      <div class=\"right-detail\">\r\n        <div class=\"Genre\">Duration: ${duration}</div>\r\n        <div class=\"director\">👍${likes}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"comment-heading-container\"></div>\r\n    <ul class=\"comment-holder\">\r\n\r\n    </ul>\r\n    <h4 class=\"add-comment\">Add comment</h4>\r\n    <form action=\"#\" id=\"comment-form\">\r\n        <input type=\"text\" placeholder=\"Name\" class=\"comment-inputs name-input\">\r\n        <textarea name=\"Your insights\" id=\"text-area\" cols=\"30\" rows=\"10\" class=\"comment-inputs comment-text\"></textarea>\r\n        <button type=\"button\" id=${movieId} class=\"comment-btn\">Comment</button>\r\n    </form>\r\n  `;\r\n  document.querySelector('.movie-description').innerHTML = movieDescription;\r\n  commentBtn = document.querySelector('.comment-btn');\r\n  commentBtn.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n    const username = document.querySelector('.name-input').value.trim();\r\n    const comment = document.querySelector('.comment-text').value.trim();\r\n    const itemId = e.target.id;\r\n    if (username !== '' && comment !== '') {\r\n      await addComment({ itemId, username, comment });\r\n      insertComment(itemId);\r\n    }\r\n    document.getElementById('comment-form').reset();\r\n  });\r\n  insertComment(movieId);\r\n  commentPopup.style.display = 'block';\r\n};\r\n\r\nconst commentListener = () => {\r\n  const homeCommentBtns = document.querySelectorAll('.home-comment-btn');\r\n  homeCommentBtns.forEach((homeCommentBtn) => {\r\n    homeCommentBtn.addEventListener('click', renderCommentPopup);\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/comments.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;