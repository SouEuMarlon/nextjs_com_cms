"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/faq/[id]",{

/***/ "./src/components/commons/Footer/index.js":
/*!************************************************!*\
  !*** ./src/components/commons/Footer/index.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/components */ \"./src/theme/components.js\");\n\n\nfunction Footer(param) {\n    var description = param.description;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"footer\",\n        styleSheet: {\n            backgroundColor: _theme_components__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutral.x800\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                overflow: \"hidden\",\n                maxWidth: _theme_components__WEBPACK_IMPORTED_MODULE_1__.theme.space.xcontainer_xl,\n                marginLeft: \"auto\",\n                marginRight: \"auto\",\n                paddingVertical: _theme_components__WEBPACK_IMPORTED_MODULE_1__.theme.space.x8,\n                paddingHorizontal: _theme_components__WEBPACK_IMPORTED_MODULE_1__.theme.space.x4\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                styleSheet: {\n                    justifyContent: \"center\",\n                    color: _theme_components__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutral.x000\n                },\n                children: [\n                    \"\\xa9 \",\n                    new Date().getFullYear(),\n                    \" \",\n                    description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marlonmnz/Desktop/Development/Alura/NextJS/melhore_sua_app_com_next/Aula2/trabalhando_com_CMS/src/components/commons/Footer/index.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/marlonmnz/Desktop/Development/Alura/NextJS/melhore_sua_app_com_next/Aula2/trabalhando_com_CMS/src/components/commons/Footer/index.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/marlonmnz/Desktop/Development/Alura/NextJS/melhore_sua_app_com_next/Aula2/trabalhando_com_CMS/src/components/commons/Footer/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb25zL0Zvb3Rlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBNkQ7QUFFdEQsU0FBU0csTUFBTSxDQUFDLEtBQWEsRUFBRTtRQUFmLFdBQVksR0FBWixLQUFhLENBQVpDLFdBQVc7SUFDakMscUJBQ0UsOERBQUNKLGtEQUFHO1FBQ0ZLLEdBQUcsRUFBQyxRQUFRO1FBQ1pDLFVBQVUsRUFBRTtZQUNWQyxlQUFlLEVBQUVMLHdFQUF5QjtTQUMzQztrQkFFRCw0RUFBQ0Ysa0RBQUc7WUFDRk0sVUFBVSxFQUFFO2dCQUNWSyxRQUFRLEVBQUUsUUFBUTtnQkFDbEJDLFFBQVEsRUFBRVYsd0VBQXlCO2dCQUNuQ2EsVUFBVSxFQUFFLE1BQU07Z0JBQ2xCQyxXQUFXLEVBQUUsTUFBTTtnQkFDbkJDLGVBQWUsRUFBRWYsNkRBQWM7Z0JBQy9CaUIsaUJBQWlCLEVBQUVqQiw2REFBYzthQUNsQztzQkFFRCw0RUFBQ0QsbURBQUk7Z0JBQ0hLLFVBQVUsRUFBRTtvQkFDVmUsY0FBYyxFQUFFLFFBQVE7b0JBQ3hCQyxLQUFLLEVBQUVwQix3RUFBeUI7aUJBQ2pDOztvQkFDRixPQUNRO29CQUFDLElBQUlzQixJQUFJLEVBQUUsQ0FBQ0MsV0FBVyxFQUFFO29CQUFDLEdBQUM7b0JBQUNyQixXQUFXOzs7Ozs7b0JBQ3pDOzs7OztnQkFDSDs7Ozs7WUFDRixDQUNQO0NBQ0Y7QUE3QmVELEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9Gb290ZXIvaW5kZXguanM/Njc4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIHRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vdGhlbWUvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoe2Rlc2NyaXB0aW9ufSkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHRhZz1cImZvb3RlclwiXG4gICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLm5ldXRyYWwueDgwMCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNlLnhjb250YWluZXJfeGwsXG4gICAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgIHBhZGRpbmdWZXJ0aWNhbDogdGhlbWUuc3BhY2UueDgsXG4gICAgICAgICAgcGFkZGluZ0hvcml6b250YWw6IHRoZW1lLnNwYWNlLng0LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMubmV1dHJhbC54MDAwXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsInRoZW1lIiwiRm9vdGVyIiwiZGVzY3JpcHRpb24iLCJ0YWciLCJzdHlsZVNoZWV0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwibmV1dHJhbCIsIng4MDAiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwic3BhY2UiLCJ4Y29udGFpbmVyX3hsIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1ZlcnRpY2FsIiwieDgiLCJwYWRkaW5nSG9yaXpvbnRhbCIsIng0IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsIngwMDAiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/commons/Footer/index.js\n");

/***/ })

});