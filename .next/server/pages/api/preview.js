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
exports.id = "pages/api/preview";
exports.ids = ["pages/api/preview"];
exports.modules = {

/***/ "(api)/./pages/api/preview.js":
/*!******************************!*\
  !*** ./pages/api/preview.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const previousPage = req.headers.referer;\n    // SE TIVER LIGADO O PREVIEW: DESLIGA\n    if (req.preview) {\n        res.clearPreviewData();\n        res.writeHead(307, {\n            Location: previousPage\n        });\n        return res.end();\n    }\n    const password = \"SENHASEGURA\";\n    if (req.query.password !== password) {\n        return res.status(401).json({\n            message: \"Invalid password\"\n        });\n    }\n    // SE TIVER DESLIGADO O PREVIEW: LIGA\n    res.setPreviewData({});\n    res.writeHead(307, {\n        Location: previousPage\n    });\n    return res.end();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJldmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUM3QyxNQUFNQyxZQUFZLEdBQUdGLEdBQUcsQ0FBQ0csT0FBTyxDQUFDQyxPQUFPO0lBRXhDLHFDQUFxQztJQUNyQyxJQUFHSixHQUFHLENBQUNLLE9BQU8sRUFBQztRQUNiSixHQUFHLENBQUNLLGdCQUFnQixFQUFFLENBQUM7UUFDdkJMLEdBQUcsQ0FBQ00sU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUFFQyxRQUFRLEVBQUVOLFlBQVk7U0FBRSxDQUFDLENBQUM7UUFDL0MsT0FBT0QsR0FBRyxDQUFDUSxHQUFHLEVBQUUsQ0FBQztLQUNsQjtJQUVELE1BQU1DLFFBQVEsR0FBRyxhQUFhO0lBRTlCLElBQUdWLEdBQUcsQ0FBQ1csS0FBSyxDQUFDRCxRQUFRLEtBQUtBLFFBQVEsRUFBQztRQUNqQyxPQUFPVCxHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxrQkFBa0I7U0FBRSxDQUFDLENBQUM7S0FDOUQ7SUFFRCxxQ0FBcUM7SUFDckNiLEdBQUcsQ0FBQ2MsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCZCxHQUFHLENBQUNNLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFBRUMsUUFBUSxFQUFFTixZQUFZO0tBQUUsQ0FBQyxDQUFDO0lBQy9DLE9BQU9ELEdBQUcsQ0FBQ1EsR0FBRyxFQUFFLENBQUM7Q0FDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXJzbzA0LW5leHRqcy1mbG93Ly4vcGFnZXMvYXBpL3ByZXZpZXcuanM/ODgzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKXtcbiAgY29uc3QgcHJldmlvdXNQYWdlID0gcmVxLmhlYWRlcnMucmVmZXJlcjtcblxuICAvLyBTRSBUSVZFUiBMSUdBRE8gTyBQUkVWSUVXOiBERVNMSUdBXG4gIGlmKHJlcS5wcmV2aWV3KXtcbiAgICByZXMuY2xlYXJQcmV2aWV3RGF0YSgpO1xuICAgIHJlcy53cml0ZUhlYWQoMzA3LCB7IExvY2F0aW9uOiBwcmV2aW91c1BhZ2UgfSk7XG4gICAgcmV0dXJuIHJlcy5lbmQoKTtcbiAgfVxuXG4gIGNvbnN0IHBhc3N3b3JkID0gJ1NFTkhBU0VHVVJBJztcblxuICBpZihyZXEucXVlcnkucGFzc3dvcmQgIT09IHBhc3N3b3JkKXtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBwYXNzd29yZCcgfSk7XG4gIH1cblxuICAvLyBTRSBUSVZFUiBERVNMSUdBRE8gTyBQUkVWSUVXOiBMSUdBXG4gIHJlcy5zZXRQcmV2aWV3RGF0YSh7fSk7XG4gIHJlcy53cml0ZUhlYWQoMzA3LCB7IExvY2F0aW9uOiBwcmV2aW91c1BhZ2UgfSk7XG4gIHJldHVybiByZXMuZW5kKCk7XG59Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwcmV2aW91c1BhZ2UiLCJoZWFkZXJzIiwicmVmZXJlciIsInByZXZpZXciLCJjbGVhclByZXZpZXdEYXRhIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJwYXNzd29yZCIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJzZXRQcmV2aWV3RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/preview.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/preview.js"));
module.exports = __webpack_exports__;

})();