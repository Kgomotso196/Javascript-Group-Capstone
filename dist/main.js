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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst UNIQUE_APP_ID = '8ADn2pupA2eWcFJ0PR1Y';\nconst DEFAULT = {\n  MOVE_API_URL: 'https://api.tvmaze.com/shows',\n  PAGINATION_ITEM_PER_PAGE: 30,\n  INVOLVEMENT_API_BASEURL: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${UNIQUE_APP_ID}`,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DEFAULT);\n\n\n//# sourceURL=webpack://browse-movie-app/./config/default.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/comment.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/comment.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".comment-popup {\\r\\n  display: none;\\r\\n  background-color: hsl(216, 50%, 16%);\\r\\n  padding: 4px 15px;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 98%;\\r\\n  height: 100vh;\\r\\n  z-index: 2;\\r\\n}\\r\\n\\r\\n.popup-wrapper {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  border: 2px solid hsl(178, 100%, 50%);\\r\\n  position: relative;\\r\\n  font-size: 18px;\\r\\n  height: 95%;\\r\\n}\\r\\n\\r\\n.popup-wrapper .comment-cross {\\r\\n  position: absolute;\\r\\n  font-size: 40px;\\r\\n  right: 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popup-wrapper .img-container img {\\r\\n  display: flex;\\r\\n  height: 250px;\\r\\n  width: 200px;\\r\\n}\\r\\n\\r\\n.movie-details {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.right-detail {\\r\\n  padding-left: 30px;\\r\\n}\\r\\n\\r\\n.comment-holder {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  max-height: 200px;\\r\\n  overflow-y: scroll;\\r\\n  border: 1px solid hsl(178, 100%, 50%);\\r\\n  margin: 5px;\\r\\n}\\r\\n\\r\\n.comment-detail {\\r\\n  list-style: none;\\r\\n  padding-top: 3px;\\r\\n}\\r\\n\\r\\n#comment-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.comment-inputs {\\r\\n  margin-bottom: 15px;\\r\\n}\\r\\n\\r\\n.comment-text {\\r\\n  height: 70px;\\r\\n}\\r\\n\\r\\n#comment-form .comment-btn {\\r\\n  align-self: flex-start;\\r\\n  padding: 5px;\\r\\n  border: 1px solid hsl(178, 100%, 50%);\\r\\n  margin-bottom: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#comment-form .comment-btn:hover {\\r\\n  border: 2px solid #4caf50;\\r\\n  margin-bottom: 5px;\\r\\n  -moz-box-shadow: inset 0 0 5px hsl(178, 100%, 50%);\\r\\n  -webkit-box-shadow: inset 0 0 5px hsl(178, 100%, 50%);\\r\\n  box-shadow: inset 0 0 5px hsl(178, 100%, 50%);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://browse-movie-app/./src/css/comment.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./comment.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/comment.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.google.com/specimen/Outfit);\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #00d5ff;\\r\\n  font-family:\\r\\n    Outfit,\\r\\n    -apple-system,\\r\\n    BlinkMacSystemFont,\\r\\n    'Segoe UI',\\r\\n    Roboto,\\r\\n    Oxygen,\\r\\n    Ubuntu,\\r\\n    Cantarell,\\r\\n    'Open Sans',\\r\\n    'Helvetica Neue',\\r\\n    sans-serif;\\r\\n  font-size: 14px;\\r\\n  color: white;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\ninput[type='submit']:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.List {\\r\\n  transition: all 1s;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-evenly;\\r\\n  margin: 100px 0;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: flex;\\r\\n  background-color: hsl(216, 50%, 16%);\\r\\n  flex-direction: column;\\r\\n  border-radius: 15px;\\r\\n  width: 250px;\\r\\n  margin: 6px;\\r\\n  padding: 10px;\\r\\n  box-shadow: 0 32px 97px 0 rgb(0 0 0 / 20%), 0 9px 4px 0 rgb(0 0 0 / 19%);\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  border-radius: 15px;\\r\\n  margin: 10px;\\r\\n  width: auto;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\nul {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.tooltip ul li {\\r\\n  list-style: initial;\\r\\n}\\r\\n\\r\\n.tooltip ul li:first-child {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.card-header {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.contatin {\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n.material-symbols-outlined {\\r\\n  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  color: hsl(178, 100%, 50%);\\r\\n  background-color: hsl(216, 50%, 16%);\\r\\n  text-align: center;\\r\\n  font-size: large;\\r\\n  padding: 20px;\\r\\n  border: none;\\r\\n  border-radius: 0;\\r\\n  cursor: pointer;\\r\\n  margin: 2px;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  transition: all 0.3s;\\r\\n  color: hsl(215, 96%, 43%);\\r\\n}\\r\\n\\r\\n.tooltip {\\r\\n  position: relative;\\r\\n  display: inline-block;\\r\\n  border-radius: 4px;\\r\\n  border-color: aqua;\\r\\n}\\r\\n\\r\\n.tooltip .tooltiptext {\\r\\n  transition: all 0.2s;\\r\\n  visibility: hidden;\\r\\n  background-color: hsl(217, 61%, 10%);\\r\\n  color: hsl(176, 48%, 89%);\\r\\n  text-align: center;\\r\\n  font-size: medium;\\r\\n  padding: 0 5px;\\r\\n  border-radius: 6px;\\r\\n  position: absolute;\\r\\n  z-index: 1;\\r\\n  max-height: 195px;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.tooltip:hover .tooltiptext {\\r\\n  border: 1px solid rgb(40, 189, 202);\\r\\n  transition: all 0.1s;\\r\\n  visibility: visible;\\r\\n}\\r\\n\\r\\n.Pagination {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.pagination {\\r\\n  align-items: center;\\r\\n  display: inline-block;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-align: center;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.pagination a {\\r\\n  color: rgb(13, 181, 207);\\r\\n  float: left;\\r\\n  padding: 8px 16px;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.pagination a.active {\\r\\n  background-color: #4caf50;\\r\\n  color: white;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.logo img {\\r\\n  width: 120px;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n.header-items li a {\\r\\n  color: var(--soft-blue);\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.header-items li a:hover {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.pagination a:hover:not(.active) {\\r\\n  background-color: #ddd;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --soft-blue: hsl(215, 51%, 70%);\\r\\n  --Cyan: hsl(178, 100%, 50%);\\r\\n  --blue-header-BG: hsl(217, 54%, 11%);\\r\\n  --blue-card-BG: hsl(216, 50%, 16%);\\r\\n  --blue-line: hsl(215, 32%, 27%);\\r\\n  --White: hsl(0, 0%, 100%);\\r\\n}\\r\\n\\r\\n.header {\\r\\n  line-height: 60px;\\r\\n  background-color: var(--blue-header-BG);\\r\\n  border-bottom: 1px solid var(--blue-line);\\r\\n}\\r\\n\\r\\n.header-items {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 0 40px;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.header-items a .x {\\r\\n  font-size: 25px;\\r\\n  color: var(--Cyan);\\r\\n}\\r\\n\\r\\n.search {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.search-icon {\\r\\n  color: black;\\r\\n  position: absolute;\\r\\n  right: 5px;\\r\\n  top: 3px;\\r\\n}\\r\\n\\r\\n.search-input {\\r\\n  width: 300px;\\r\\n  height: 35px;\\r\\n  font-size: 15px;\\r\\n  padding-left: 5px;\\r\\n  border-radius: 6px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  height: 50px;\\r\\n  background: var(--soft-blue);\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-weight: bolder;\\r\\n  position: sticky;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n}\\r\\n\\r\\n.red {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.popup-container {\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  height: 100vh;\\r\\n  width: 100vw;\\r\\n  background: rgba(255, 255, 255, 0.45);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  overflow: scroll;\\r\\n}\\r\\n\\r\\n.reserve-popup {\\r\\n  margin: 50px 0;\\r\\n  padding: 40px;\\r\\n  width: 80%;\\r\\n  max-width: 400px;\\r\\n  background: white;\\r\\n  background: hsl(217, 54%, 11%);\\r\\n  border-radius: 5px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  gap: 30px;\\r\\n}\\r\\n\\r\\n.reservations ul {\\r\\n  flex-direction: column;\\r\\n  gap: 3px;\\r\\n}\\r\\n\\r\\n.reserve-popup .item-details ul {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n  gap: 10px 0;\\r\\n  flex-direction: column;\\r\\n  justify-content: flex-start;\\r\\n}\\r\\n\\r\\n.reserve-popup .caption {\\r\\n  color: var(--Cyan);\\r\\n}\\r\\n\\r\\n.reserve-popup .movie-img {\\r\\n  width: 250px;\\r\\n}\\r\\n\\r\\n.reserve-popup h2 {\\r\\n  margin-bottom: 20px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.item-details {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.material-symbols-outlined.close {\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  top: 0;\\r\\n  font-size: 30px;\\r\\n}\\r\\n\\r\\n.add-reservation {\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.add-reservation input {\\r\\n  width: 92.5%;\\r\\n  padding: 10px;\\r\\n  margin: 5px 0;\\r\\n}\\r\\n\\r\\n.add-reservation input[type='submit'] {\\r\\n  background: var(--soft-blue);\\r\\n  width: 100%;\\r\\n  font-size: larger;\\r\\n  font-weight: bolder;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n/* @media only screen and (max-width: 400px){\\r\\n\\r\\n} */\\r\\n\\r\\n@media only screen and (max-width: 800px) {\\r\\n  .header-items {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .search-input {\\r\\n    width: 250px;\\r\\n    padding-left: 25px;\\r\\n  }\\r\\n\\r\\n  .search-icon {\\r\\n    color: black;\\r\\n    position: absolute;\\r\\n    left: 5px;\\r\\n    top: 3px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://browse-movie-app/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://browse-movie-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://browse-movie-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://browse-movie-app/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://browse-movie-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://browse-movie-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://browse-movie-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://browse-movie-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://browse-movie-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://browse-movie-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_Home_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Home.service.js */ \"./src/modules/Home.service.js\");\n\n\n\n(async () => {\n  // TODO: HOME PAGE\n  (0,_modules_Home_service_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  // TODO: COMMENT\n})();\n\n//# sourceURL=webpack://browse-movie-app/./src/js/index.js?");

/***/ }),

/***/ "./src/modules/Home.controller.js":
/*!****************************************!*\
  !*** ./src/modules/Home.controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get\": () => (/* binding */ get),\n/* harmony export */   \"getMovieHandler\": () => (/* binding */ getMovieHandler),\n/* harmony export */   \"homeMovieCounter\": () => (/* binding */ homeMovieCounter),\n/* harmony export */   \"jump\": () => (/* binding */ jump),\n/* harmony export */   \"nextPage\": () => (/* binding */ nextPage),\n/* harmony export */   \"paginationHandler\": () => (/* binding */ paginationHandler),\n/* harmony export */   \"prevPage\": () => (/* binding */ prevPage),\n/* harmony export */   \"renderMovieHandler\": () => (/* binding */ renderMovieHandler),\n/* harmony export */   \"renderPaginationHandler\": () => (/* binding */ renderPaginationHandler),\n/* harmony export */   \"set\": () => (/* binding */ set)\n/* harmony export */ });\n/* harmony import */ var _config_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/default.js */ \"./config/default.js\");\n/* harmony import */ var _Likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Likes.js */ \"./src/modules/Likes.js\");\n/* harmony import */ var _Home_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.counter.js */ \"./src/modules/Home.counter.js\");\n\n\n\n\nconst getMoviewithLikeList = (movies, likes) => {\n  // - TODO: if there is no like just send the default data\n  if (!likes.length) return movies;\n  //  TODO: if there is append the data\n  likes.forEach((element) => {\n    const index = movies.findIndex((movie) => movie.id === element.item_id);\n    if (index !== -1) movies[index].likes = element.likes;\n  });\n  return likes;\n};\n\nconst homeMovieCounter = () => {\n  const movieCounter = document.querySelectorAll('.card');\n  const movieItems = (0,_Home_counter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movieCounter);\n  const displayMovieCounter = document.querySelector('#movie-counter');\n  displayMovieCounter.innerHTML = `Movies(${movieItems})`;\n};\n\nconst getMovieHandler = async () => {\n  try {\n    const moveList = await fetch(_config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MOVE_API_URL);\n    const likeList = await (0,_Likes_js__WEBPACK_IMPORTED_MODULE_1__.getLike)();\n    const movieListsJson = await moveList.json();\n    getMoviewithLikeList(movieListsJson, likeList);\n    return movieListsJson;\n  } catch (error) {\n    throw new Error(error);\n  }\n};\n\n// - TODO: SET AND GET IN LOCAL STORAGE\nconst get = (key) => JSON.parse(localStorage.getItem(key));\nconst set = (key, value) => localStorage.setItem(key, JSON.stringify(value));\n// - TODO: SET AND GET CURRENT ACTIVE DATA\nconst currentData = (data) => {\n  const currentPage = get('currentPage') || 1;\n  const begin = (currentPage - 1) * _config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PAGINATION_ITEM_PER_PAGE;\n  const end = begin + _config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PAGINATION_ITEM_PER_PAGE;\n  return data.slice(begin, end);\n};\n\nconst paginationHandler = (movieList) => {\n  const maxPage = Math.ceil(\n    movieList.length / _config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PAGINATION_ITEM_PER_PAGE,\n  );\n  set('maxPage', maxPage);\n  return maxPage;\n};\n\nconst renderMovieHandler = (Database) => currentData(Database)\n  .map(\n    (movie) => ` <div class=\"tooltip\">\n        <div class=\"card\" id=${movie.id}>\n        <a href=${movie.officialSite}><img src=${\n  movie.image.medium\n} alt=\"\" class=\"movie-img  \"/></a>\n        <div class=\"container\">\n        <div class=\"card-header\">\n            <Label class=\"movie-name\">${movie.name}</Label>\n            <span  id=${movie.id} class=\"material-symbols-outlined\">\n            favorite \n            </span>\n            </div>\n        <ul>\n            <li class=\"premiered\">${movie.premiered}</li>\n            <li class=\"duration\">${movie.averageRuntime} min</li>\n            <li id=like_${movie.id} class=\"likes\">${\n  movie.likes ? movie.likes : '0'\n} Likes</li>\n            </ul>\n            <button id=comment_${\n  movie.id\n} class=\"home-comment-btn\">Comment</button>\n            </div>\n    </div>\n  <span class=\"tooltiptext\">${JSON.stringify(movie.summary)}</span>\n</div>`,\n  )\n  .join(' ');\n\nconst renderPaginationHandler = (\n  ListOfmovies,\n) => `<div class=\"pagination\">\n    <a href=\"#\" class=\"previousPage\">&laquo;</a>\n    ${new Array(paginationHandler(ListOfmovies))\n    .fill(0)\n    .map(\n      (page, index) => `<a href=\"#\" class=\"selector\" id=${index + 1}>${index + 1}</a>`,\n    )\n    .join(' ')}\n    <a href=\"#\" class=\"nextPage\">&raquo;</a>\n    </div>`;\n\nconst setCurrentPage = (currentPage) => set('currentPage', currentPage.toString());\n\n// - TODO: NAVIGATION FOR PAGINATION\nconst nextPage = () => setCurrentPage(Math.min(get('currentPage') + 1, get('maxPage')));\nconst prevPage = () => setCurrentPage(Math.max(get('currentPage') - 1, 1));\nconst jump = (page) => {\n  const pageNumber = Math.max(1, page);\n  setCurrentPage(Math.min(pageNumber, get('maxPage')));\n};\n\n\n//# sourceURL=webpack://browse-movie-app/./src/modules/Home.controller.js?");

/***/ }),

/***/ "./src/modules/Home.counter.js":
/*!*************************************!*\
  !*** ./src/modules/Home.counter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Homepage counter\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((movieCounter) => movieCounter.length);\n\n\n//# sourceURL=webpack://browse-movie-app/./src/modules/Home.counter.js?");

/***/ }),

/***/ "./src/modules/Home.service.js":
/*!*************************************!*\
  !*** ./src/modules/Home.service.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.controller.js */ \"./src/modules/Home.controller.js\");\n/* harmony import */ var _Likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Likes.js */ \"./src/modules/Likes.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n\n\n\n\n\nconst movieLists = document.querySelector('.List');\nconst pagination = document.querySelector('.Pagination');\n\nconst HomePage = async () => {\n  const movieListData = await (0,_Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.getMovieHandler)();\n  if (movieListData.length < 0) {\n    // ? could use spinner component here when fetching data\n    movieLists.innerHTML = 'loading';\n  } else {\n    movieLists.innerHTML = (0,_Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.renderMovieHandler)(movieListData);\n  }\n  pagination.innerHTML = (0,_Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.renderPaginationHandler)(movieListData);\n  // - TODO: attach event listner to Like button\n\n  const likeButtons = document.querySelectorAll('.material-symbols-outlined');\n  likeButtons.forEach((likeButton) => {\n    likeButton.addEventListener('click', (event) => {\n      likeButton.classList.add('red');\n      // - TODO: also increment in the UI\n      (0,_Likes_js__WEBPACK_IMPORTED_MODULE_1__.postLike)(event.target.id).then(() => {\n        const a = document.querySelector(`#like_${event.target.id}`);\n        let previousValue = parseInt(a.innerHTML.split(' ')[0], 10);\n        previousValue += 1;\n        a.innerHTML = `${previousValue} Likes</p>`;\n      });\n    });\n  });\n  // - TODO render counter\n  (0,_Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.homeMovieCounter)();\n\n  // renderCommentPopup()\n  (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.commentListener)();\n\n  // - TODO: end\n  const previousButton = document.querySelector('.previousPage');\n  const nextButton = document.querySelector('.nextPage');\n  previousButton.addEventListener('click', _Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.prevPage);\n  nextButton.addEventListener('click', _Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.nextPage);\n  const paginationButton = document.querySelectorAll('.selector');\n  paginationButton.forEach((element) => {\n    element.addEventListener('click', (event) => {\n      event.target.classList.add('.active');\n      (0,_Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.jump)(event.target.id);\n      (0,_Home_controller_js__WEBPACK_IMPORTED_MODULE_0__.set)('selectedPageNumber', event.target.id);\n      window.location.reload();\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n\n//# sourceURL=webpack://browse-movie-app/./src/modules/Home.service.js?");

/***/ }),

/***/ "./src/modules/Likes.js":
/*!******************************!*\
  !*** ./src/modules/Likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLike\": () => (/* binding */ getLike),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\n/* harmony import */ var _config_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/default.js */ \"./config/default.js\");\n\n\nconst getLike = async () => {\n  try {\n    const Likes = await fetch(`${_config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INVOLVEMENT_API_BASEURL}/likes/`);\n    const likeData = await Likes.json();\n    return likeData;\n  } catch (error) {\n    throw new Error('unable to get a Data');\n  }\n};\n\n// Function to add new like\nconst postLike = async (id) => {\n  try {\n    await fetch(`${_config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INVOLVEMENT_API_BASEURL}/likes/`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: Number(id),\n      }),\n    });\n  } catch (error) {\n    throw new Error('Can not post Like');\n  }\n};\n\n\n//# sourceURL=webpack://browse-movie-app/./src/modules/Likes.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (indices) => {\n  const sum = indices.length;\n  return sum;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://browse-movie-app/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"commentListener\": () => (/* binding */ commentListener),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"hidePopup\": () => (/* binding */ hidePopup)\n/* harmony export */ });\n/* harmony import */ var _config_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/default.js */ \"./config/default.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\n\nconst postUrl = `${_config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INVOLVEMENT_API_BASEURL}/comments`;\n\nconst getUrl = `${_config_default_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INVOLVEMENT_API_BASEURL}/comments?item_id=`;\n\nconst crossBtn = document.querySelector('.comment-cross');\nconst commentPopup = document.querySelector('.comment-popup');\nlet commentBtn;\nconst hidePopup = () => {\n  commentPopup.style.display = 'none';\n};\n\ncrossBtn.addEventListener('click', hidePopup);\n\n// This function adds new comment\nconst addComment = async (data) => {\n  const response = await fetch(postUrl, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: data.itemId,\n      username: data.username,\n      comment: data.comment,\n    }),\n  });\n  const commentCall = await response.text();\n  return commentCall;\n};\n\nconst getData = async (id) => {\n  const getResponse = await fetch(`${getUrl}${id}`);\n  const result = await getResponse.json();\n  return result;\n};\n\n// Comment showing functions added\nconst display = (comments) => {\n  let li = '';\n  comments.forEach((commentItem) => {\n    li += `\n    <li class=\"comment-detail\">\n    <span class=\"date\">${commentItem.creation_date}</span>\n    <span class=\"name\">${commentItem.username}:</span>\n    <span class=\"commet\">${commentItem.comment}</span>\n    </li>\n    `;\n  });\n  document.querySelector('.comment-holder').innerHTML = li;\n};\n\nconst commentCounterUpdate = (indices) => {\n  const sum = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(indices);\n  document.querySelector(\n    '.comment-heading-container',\n  ).innerHTML = ` <h3 class=\"comment-heading\">Comments(${sum})</h3> `;\n};\n\nconst insertComment = async (id) => {\n  const insertDom = await getData(id);\n  display(insertDom);\n  commentCounterUpdate(insertDom);\n};\nconst renderCommentPopup = async (e) => {\n  const movieId = parseInt(e.target.id.split('_')[1], 10);\n  const movieCard = e.target.parentElement.parentElement;\n  const cardImageUrl = movieCard.firstElementChild.firstElementChild.src;\n  const releaseDate = movieCard.querySelector('.premiered').innerText;\n  const duration = movieCard.querySelector('.duration').innerText;\n  const name = movieCard.querySelector('.movie-name').innerText;\n  const likes = movieCard.querySelector('.likes').innerText;\n\n  let movieDescription = '';\n  movieDescription += `\n      <div class=\"img-container\">\n      <img src=\"${cardImageUrl}\" alt=\"${name}\">\n      <h1 class=\"movie-title\">${name}</h1>\n    </div>\n    <div class=\"movie-details\">\n      <div class=\"left-detail\">\n        <div class=\"starring\">Release Date: ${releaseDate}</div>\n        <div class=\"Quality\">Quality: HD</div>\n      </div>\n      <div class=\"right-detail\">\n        <div class=\"Genre\">Duration: ${duration}</div>\n        <div class=\"director\">👍${likes}</div>\n      </div>\n    </div>\n    <div class=\"comment-heading-container\"></div>\n    <ul class=\"comment-holder\">\n\n    </ul>\n    <h4 class=\"add-comment\">Add comment</h4>\n    <form action=\"#\" id=\"comment-form\">\n        <input type=\"text\" placeholder=\"Name\" class=\"comment-inputs name-input\">\n        <textarea name=\"Your insights\" id=\"text-area\" cols=\"30\" rows=\"10\" class=\"comment-inputs comment-text\"></textarea>\n        <button type=\"button\" id=${movieId} class=\"comment-btn\">Comment</button>\n    </form>\n  `;\n  document.querySelector('.movie-description').innerHTML = movieDescription;\n  commentBtn = document.querySelector('.comment-btn');\n  commentBtn.addEventListener('click', async (e) => {\n    e.preventDefault();\n    const username = document.querySelector('.name-input').value.trim();\n    const comment = document.querySelector('.comment-text').value.trim();\n    const itemId = e.target.id;\n    if (username !== '' && comment !== '') {\n      await addComment({ itemId, username, comment });\n      insertComment(itemId);\n    }\n    document.getElementById('comment-form').reset();\n  });\n  insertComment(movieId);\n  commentPopup.style.display = 'block';\n};\n\nconst commentListener = () => {\n  const homeCommentBtns = document.querySelectorAll('.home-comment-btn');\n  homeCommentBtns.forEach((homeCommentBtn) => {\n    homeCommentBtn.addEventListener('click', renderCommentPopup);\n  });\n};\n\n\n\n\n//# sourceURL=webpack://browse-movie-app/./src/modules/comments.js?");

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