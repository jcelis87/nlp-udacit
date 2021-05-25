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

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ (() => {

eval("const form = document.getElementById('input-form');\r\n\r\n\r\n\r\n//How to use env var here?\r\nconst URL = 'http://localhost:5000/send-url';\r\n\r\nconst   checkURL = async (e) => {\r\n    \r\n    const url2analize = document.getElementById('url-input').value;\r\n    e.preventDefault();\r\n    console.log('hola Jose');\r\n\r\n    const response = await fetch (URL, {\r\n        method: 'Post',\r\n        mode: 'cors',\r\n        credentials: 'same-origin',\r\n        headers: {'Content-Type': 'application/json'},\r\n        redirect: 'follow',\r\n        body: JSON.stringify({url: url2analize}),\r\n    });\r\n    const sentimentResponse = await response.json();\r\n\r\n    console.log(sentimentResponse);\r\n    return sentimentResponse;\r\n};\r\n\r\nform.addEventListener('submit', checkURL);\r\n\r\n\r\n\n\n//# sourceURL=webpack://nlp/./src/client/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/index.js"]();
/******/ 	
/******/ })()
;