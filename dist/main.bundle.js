"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapstone_kanban"] = self["webpackChunkcapstone_kanban"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  text-decoration: none;\\r\\n  list-style-type: none;\\r\\n  font-family: 'Baumans', 'Courier New', Courier, monospace;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 1rem 4rem 10rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n.main {\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  align-items: baseline;\\r\\n  gap: 4rem;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n  flex: 1;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  text-decoration-line: underline;\\r\\n}\\r\\n\\r\\n#comments-popup {\\r\\n  top: 1rem;\\r\\n  left: 1rem;\\r\\n  right: 1rem;\\r\\n  bottom: 3rem;\\r\\n  padding: 1rem;\\r\\n  background-color: lightgoldenrodyellow;\\r\\n  position: fixed;\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  align-items: stretch;\\r\\n  gap: 1rem;\\r\\n  overflow-y: scroll;\\r\\n  color: darkslategray;\\r\\n  box-shadow: 0 0 16px 0 darkgoldenrod;\\r\\n}\\r\\n\\r\\n.poke-name {\\r\\n  align-self: center;\\r\\n  font-size: xx-large;\\r\\n}\\r\\n\\r\\n#comments-popup * {\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\n#char li * {\\r\\n  padding: 0.3rem;\\r\\n}\\r\\n\\r\\n#comments-popup > *:not(:first-child) {\\r\\n  margin: 0 5rem;\\r\\n}\\r\\n\\r\\n.popup-img {\\r\\n  width: 40%;\\r\\n  height: auto;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.features {\\r\\n  display: grid;\\r\\n  grid-template-columns: 50% 50%;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.features :nth-child(4) {\\r\\n  grid-area: 2 / 2 / span 2 / span 1;\\r\\n}\\r\\n\\r\\n.comments-form {\\r\\n  display: flex;\\r\\n  gap: 1rem;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  align-self: flex-start;\\r\\n  font-size: 48px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  padding: 1% 10%;\\r\\n  background: #2468b1;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#char {\\r\\n  display: grid;\\r\\n  grid-template-columns: 18% 18% 18% 18% 18%;\\r\\n  gap: 2.5%;\\r\\n  grid-auto-rows: auto;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n#char li {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: end;\\r\\n  align-items: stretch;\\r\\n  gap: 1rem;\\r\\n  background-color: yellow;\\r\\n  box-shadow: 2px 2px 8px 0 orange;\\r\\n  padding: 1rem;\\r\\n  border-radius: 1rem;\\r\\n}\\r\\n\\r\\n#char li img {\\r\\n  max-width: 100%;\\r\\n  aspect-ratio: 1/1;\\r\\n}\\r\\n\\r\\n#char li p {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: baseline;\\r\\n}\\r\\n\\r\\n#char span {\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n#char li p span {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#char li p span:hover {\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-kanban/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-kanban/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/like.js */ \"./src/modules/like.js\");\n\r\n\r\n\r\n\r\n\r\nconst asyncList = async () => {\r\n  const likes = await (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();\r\n  (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_2__.RefreshList)(likes);\r\n};\r\n\r\nasyncList();\r\n\r\nconst asyncLikes = async (index) => {\r\n  const likes = await (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();\r\n  const likeCount = document.getElementById(`like-count${index + 1}`);\r\n  likeCount.innerHTML = `${(0,_modules_home_js__WEBPACK_IMPORTED_MODULE_2__.countLikes)(likes[index])} Likes`;\r\n  await (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_3__.addLike)(index);\r\n};\r\n\r\nconst char = document.getElementById('char');\r\nconst commentsPopup = document.getElementById('comments-popup');\r\n\r\nchar.addEventListener('click', (event) => {\r\n  if (event.target.tagName === 'BUTTON' && event.target.id.startsWith('btn')) {\r\n    const buttonId = event.target.id;\r\n    const index = buttonId.replace('btn', '');\r\n    commentsPopup.style.display = 'flex';\r\n    (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_1__.RefreshPopup)(index);\r\n  }\r\n  if (event.target.tagName === 'SPAN' && event.target.id.startsWith('like')) {\r\n    const buttonId = event.target.id;\r\n    const index = buttonId.replace('like', '');\r\n    asyncLikes(index - 1);\r\n  }\r\n});\r\n\r\nconst closeIcon = document.querySelector('.close');\r\ncloseIcon.addEventListener('click', () => {\r\n  commentsPopup.style.display = 'none';\r\n});\r\n\r\n// async function createApp() {\r\n//   const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\n//   const response = await fetch(url, {\r\n//     method: 'POST',\r\n//   });\r\n//   const data = await response.text();\r\n//   return data;\r\n// }\r\n// const appId = await createApp();\r\n// console.log(appId);\n\n//# sourceURL=webpack://capstone-kanban/./src/index.js?");

/***/ }),

/***/ "./src/modules/game_id.js":
/*!********************************!*\
  !*** ./src/modules/game_id.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// async function createApp() {\r\n//     const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/`;\r\n//     const response = await fetch(url, {\r\n//       method: \"POST\",\r\n//     });\r\n//       const data = await response.text();\r\n//       return data;\r\n//   }\r\n//   const appId = await createApp();\r\n//   console.log(appId)\r\n\r\nconst getGameId = () => 'EBkC2Y4aegtBUGvvfuOj';\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGameId);\n\n//# sourceURL=webpack://capstone-kanban/./src/modules/game_id.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RefreshList: () => (/* binding */ RefreshList),\n/* harmony export */   countLikes: () => (/* binding */ countLikes)\n/* harmony export */ });\nconst RefreshList = async (likes) => {\r\n  const response = await fetch(\r\n    'https://pokeapi.co/api/v2/pokemon?limit=21&offset=0/',\r\n  );\r\n\r\n  const json = await response.json();\r\n\r\n  for (let i = 1; i < 21; i += 1) {\r\n    if (likes[i - 1] === undefined) {\r\n      likes[i - 1] = 0;\r\n    }\r\n\r\n    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`;\r\n    const { name } = json.results[i - 1];\r\n    const char = document.getElementById('char');\r\n    char.innerHTML += `\r\n      <li>\r\n        <img src='${image}' alt=\"image\">\r\n        <span>${name.toUpperCase()}</span> \r\n        <p><i id=\"like-count${i}\"> ${likes[i - 1]} Likes</i>  <span id=\"like${i}\">&#10084;&#65039;</span> </p>\r\n        <button id=\"btn${i}\">Comment</button>\r\n      </li>\r\n    `;\r\n  }\r\n};\r\n\r\nconst countLikes = (counter) => {\r\n  const newCount = counter + 1;\r\n  return newCount;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://capstone-kanban/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   getLikes: () => (/* binding */ getLikes)\n/* harmony export */ });\n/* harmony import */ var _game_id_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_id.js */ \"./src/modules/game_id.js\");\n\r\n\r\nconst appId = (0,_game_id_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nconst addLike = async (index) => {\r\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\r\n  const data = {\r\n    item_id: index.toString(),\r\n  };\r\n  const response = await fetch(url, {\r\n    method: 'POST',\r\n    body: JSON.stringify(data),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  return response.status;\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\r\n  const response = await fetch(url);\r\n  const data = await response.json();\r\n  const likesArray = [];\r\n  data.forEach((element) => {\r\n    likesArray[parseInt(element.item_id, 10)] = element.likes;\r\n  });\r\n  return likesArray;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://capstone-kanban/./src/modules/like.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RefreshPopup: () => (/* binding */ RefreshPopup),\n/* harmony export */   countComment: () => (/* binding */ countComment)\n/* harmony export */ });\n/* harmony import */ var _images_pokemon_preview_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pokemon-preview.gif */ \"./src/images/pokemon-preview.gif\");\n/* harmony import */ var _game_id_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_id.js */ \"./src/modules/game_id.js\");\n\r\n\r\n\r\nconst commentsPopup = document.getElementById('comments-popup');\r\nconst lastComments = document.querySelector('.last-comments');\r\nconst commentsCount = document.querySelector('.comments-count');\r\n\r\nconst appId = (0,_game_id_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nconst countComment = (counter) => {\r\n  const newCount = counter + 1;\r\n  return newCount;\r\n};\r\nconst getComments = async (index) => {\r\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${index}`;\r\n  const response = await fetch(url);\r\n  const data = await response.json();\r\n\r\n  if (data.length !== undefined) {\r\n    lastComments.innerHTML = '';\r\n    let counter = 0;\r\n    for (let i = data.length - 1; i >= 0; i -= 1) {\r\n      lastComments.innerHTML += `\r\n            <li>\r\n            ${data[i].creation_date} ${data[i].username}: ${data[i].comment}\r\n            </li>\r\n            `;\r\n      counter = countComment(counter);\r\n    }\r\n    commentsCount.innerHTML = `(${counter})`;\r\n  } else {\r\n    commentsCount.innerHTML = '(0)';\r\n    lastComments.innerHTML = 'no comments...';\r\n  }\r\n};\r\n\r\nconst RefreshPopup = async (index) => {\r\n  const popupImg = document.querySelector('.popup-img');\r\n  popupImg.src = _images_pokemon_preview_gif__WEBPACK_IMPORTED_MODULE_0__;\r\n  const pokeName = document.querySelector('.poke-name');\r\n  const features = document.querySelector('.features');\r\n  const commentsForm = document.querySelector('.comments-form');\r\n\r\n  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);\r\n  const json = await response.json();\r\n\r\n  pokeName.innerHTML = json.name.charAt(0).toUpperCase() + json.name.slice(1);\r\n  let abilities = '';\r\n  for (let j = 0; j < json.abilities.length; j += 1) {\r\n    abilities += json.abilities[j].ability.name;\r\n    if (j !== json.abilities.length - 1) {\r\n      abilities += ', ';\r\n    }\r\n  }\r\n  let moves = '';\r\n  for (let j = 0; j < 3; j += 1) {\r\n    moves += json.moves[j].move.name;\r\n    if (j !== 2) {\r\n      moves += ', ';\r\n    }\r\n  }\r\n\r\n  features.innerHTML = `\r\n    <li>Height: ${json.height / 10} m</li>\r\n    <li>Abilities: ${abilities}</li>\r\n    <li>Weight: ${json.weight / 10} kg</li>\r\n    <li>Moves: ${moves}</li>\r\n    <li>Base Experience: ${json.base_experience}</li>\r\n    `;\r\n\r\n  await getComments(index);\r\n\r\n  const addComment = async () => {\r\n    const username = document.getElementById('username');\r\n    const comment = document.getElementById('comment');\r\n\r\n    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;\r\n    const data = {\r\n      item_id: index.toString(),\r\n      username: username.value,\r\n      comment: comment.value,\r\n    };\r\n    const response = await fetch(url, {\r\n      method: 'POST',\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n    });\r\n\r\n    await getComments(index);\r\n    return response;\r\n  };\r\n  commentsForm.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const username = document.getElementById('username');\r\n    const comment = document.getElementById('comment');\r\n    addComment();\r\n    commentsPopup.scrollTo(0, -100);\r\n    username.value = '';\r\n    comment.value = '';\r\n    const clonedElement = commentsForm.cloneNode(true);\r\n    commentsForm.parentNode.replaceChild(clonedElement, commentsForm);\r\n  });\r\n  popupImg.src = json.sprites.other['official-artwork'].front_default;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://capstone-kanban/./src/modules/popup.js?");

/***/ }),

/***/ "./src/images/pokemon-preview.gif":
/*!****************************************!*\
  !*** ./src/images/pokemon-preview.gif ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"18262ee6914906c3bdd4.gif\";\n\n//# sourceURL=webpack://capstone-kanban/./src/images/pokemon-preview.gif?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);