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

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_get_analysis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/get_analysis.js */ \"./src/client/js/get_analysis.js\");\n //How to use env var here?\n\nconst URL = 'http://localhost:5000/send-url';\nconst form = document.getElementById('input-form');\nform.addEventListener('submit', _js_get_analysis_js__WEBPACK_IMPORTED_MODULE_0__.checkURL);\n\n//# sourceURL=webpack://nlp/./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/get_analysis.js":
/*!***************************************!*\
  !*** ./src/client/js/get_analysis.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkURL\": () => (/* binding */ checkURL)\n/* harmony export */ });\n/* harmony import */ var _inject_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inject_results */ \"./src/client/js/inject_results.js\");\n\nconst URL = 'http://localhost:5000/send-url';\nconst excludedProperties = ['sentence_list', 'sentimented_concept_list', 'sentimented_entity_list', 'status'];\nconst checkURL = async e => {\n  const url2analize = document.getElementById('url-input').value;\n  e.preventDefault();\n  console.log('hola Jose');\n  const response = await fetch(URL, {\n    method: 'Post',\n    mode: 'cors',\n    credentials: 'same-origin',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    redirect: 'follow',\n    body: JSON.stringify({\n      url: url2analize\n    })\n  });\n  const sentimentResponse = await response.json();\n  console.log(sentimentResponse);\n  (0,_inject_results__WEBPACK_IMPORTED_MODULE_0__.injectResults)(sentimentResponse, excludedProperties);\n  return sentimentResponse;\n};\n\n//# sourceURL=webpack://nlp/./src/client/js/get_analysis.js?");

/***/ }),

/***/ "./src/client/js/inject_results.js":
/*!*****************************************!*\
  !*** ./src/client/js/inject_results.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"injectResults\": () => (/* binding */ injectResults)\n/* harmony export */ });\nfunction injectResults(results, excludedProperties) {\n  const results_list = document.createElement('ul');\n\n  for (const result in results) {\n    if (excludedProperties.includes(result)) {// do nothing\n    } else {\n      console.log(result, results[result]);\n      const result_item = document.createElement('li');\n      result_item.innerText = `${result}: ${results[result]}`;\n      results_list.appendChild(result_item);\n    }\n  }\n\n  document.getElementById('results').appendChild(results_list);\n}\n;\n\n//# sourceURL=webpack://nlp/./src/client/js/inject_results.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/index.js");
/******/ 	
/******/ })()
;