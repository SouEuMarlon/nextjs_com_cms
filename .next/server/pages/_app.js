"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_theme_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/theme/GlobalStyle */ \"./src/theme/GlobalStyle.js\");\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_theme_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__.GlobalStyle, {}, void 0, false, {\n                fileName: \"/Users/marlonmnz/Desktop/Development/Alura/NextJS/melhore_sua_app_com_next/Aula2/trabalhando_com_CMS/pages/_app.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/marlonmnz/Desktop/Development/Alura/NextJS/melhore_sua_app_com_next/Aula2/trabalhando_com_CMS/pages/_app.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUF1RDtBQUV4QyxTQUFTQyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUNwRCxxQkFDRTs7MEJBQ0UsOERBQUNILCtEQUFXOzs7O29CQUFHOzBCQUNmLDhEQUFDRSxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOztvQkFDM0IsQ0FDSjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3Vyc28wNC1uZXh0anMtZmxvdy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gJy4uL3NyYy90aGVtZS9HbG9iYWxTdHlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/theme/GlobalStyle.js":
/*!**********************************!*\
  !*** ./src/theme/GlobalStyle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalStyle\": () => (/* binding */ GlobalStyle)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  * {\n    box-sizing:  border-box;\n  }\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    font-family: sans-serif;\n  }\n\n  /* Min Height */\n  html {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n  }\n  #__next,\n  body {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    min-height: 100%;\n    flex: 1;\n  }\n  /* Min Height */\n\n  /* Default Hover */\n  a,\n  button {\n    cursor: pointer;\n    transition: .3s ease-in-out;\n  }\n  a:hover,\n  button:hover {\n    opacity: 0.5;\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUvR2xvYmFsU3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBRS9DLE1BQU1DLFdBQVcsR0FBR0QsZ0VBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUM3QyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXJzbzA0LW5leHRqcy1mbG93Ly4vc3JjL3RoZW1lL0dsb2JhbFN0eWxlLmpzPzBmNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAqIHtcbiAgICBib3gtc2l6aW5nOiAgYm9yZGVyLWJveDtcbiAgfVxuICBodG1sLFxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB9XG5cbiAgLyogTWluIEhlaWdodCAqL1xuICBodG1sIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gIH1cbiAgI19fbmV4dCxcbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgZmxleDogMTtcbiAgfVxuICAvKiBNaW4gSGVpZ2h0ICovXG5cbiAgLyogRGVmYXVsdCBIb3ZlciAqL1xuICBhLFxuICBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgYTpob3ZlcixcbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbmA7XG5cblxuIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwiR2xvYmFsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/theme/GlobalStyle.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();