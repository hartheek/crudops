"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/api/navigation.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/api/navigation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\");\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=navigation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOztBQUVoRCIsInNvdXJjZXMiOlsiL2hvbWUvcHJhdGhlZWsvRGVza3RvcC9VcFVuaWtTZWxmL2Zyb250ZW5kL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi4vY2xpZW50L2NvbXBvbmVudHMvbmF2aWdhdGlvbic7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5hdmlnYXRpb24uanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/navigation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/removebtn.tsx":
/*!**************************************!*\
  !*** ./src/components/removebtn.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_HiOutlineTrash_react_icons_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=HiOutlineTrash!=!react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst RemoveBtn = (param)=>{\n    let { id } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const removeName = async ()=>{\n        const confirmed = confirm('Are you sure');\n        if (confirmed) {\n            const res = await fetch(\"http://localhost:3001/names/\".concat(id), {\n                method: \"DELETE\"\n            });\n            if (res.ok) {\n                router.refresh();\n                alert(\"deleted\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: removeName,\n        className: \"text-red-400\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineTrash_react_icons_hi__WEBPACK_IMPORTED_MODULE_2__.HiOutlineTrash, {\n            size: 24\n        }, void 0, false, {\n            fileName: \"/home/pratheek/Desktop/UpUnikSelf/frontend/src/components/removebtn.tsx\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/pratheek/Desktop/UpUnikSelf/frontend/src/components/removebtn.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RemoveBtn, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = RemoveBtn;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveBtn);\nvar _c;\n$RefreshReg$(_c, \"RemoveBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3JlbW92ZWJ0bi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWdEO0FBQ0o7QUFHNUMsTUFBTUUsWUFBVTtRQUFDLEVBQUNDLEVBQUUsRUFBQzs7SUFDakIsTUFBTUMsU0FBUUgsMERBQVNBO0lBRXZCLE1BQU1JLGFBQVk7UUFDZCxNQUFNQyxZQUFZQyxRQUFRO1FBQzFCLElBQUdELFdBQVU7WUFDVCxNQUFNRSxNQUFLLE1BQU1DLE1BQU0sK0JBQWtDLE9BQUhOLEtBQUs7Z0JBQ3ZETyxRQUFPO1lBRVg7WUFDQSxJQUFHRixJQUFJRyxFQUFFLEVBQUM7Z0JBQ05QLE9BQU9RLE9BQU87Z0JBQ2RDLE1BQU07WUFDVjtRQUdKO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ0M7UUFBT0MsU0FBU1Y7UUFBWVcsV0FBVTtrQkFDbkMsNEVBQUNoQixnR0FBY0E7WUFBQ2lCLE1BQU07Ozs7Ozs7Ozs7O0FBR2xDO0dBdkJNZjs7UUFDWUQsc0RBQVNBOzs7S0FEckJDO0FBd0JOLGlFQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyIvaG9tZS9wcmF0aGVlay9EZXNrdG9wL1VwVW5pa1NlbGYvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvcmVtb3ZlYnRuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgSGlPdXRsaW5lVHJhc2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuXG5jb25zdCBSZW1vdmVCdG49KHtpZH0pPT57XG4gICAgY29uc3Qgcm91dGVyID11c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IHJlbW92ZU5hbWU9IGFzeW5jKCk9PntcbiAgICAgICAgY29uc3QgY29uZmlybWVkID0gY29uZmlybSgnQXJlIHlvdSBzdXJlJyk7XG4gICAgICAgIGlmKGNvbmZpcm1lZCl7XG4gICAgICAgICAgICBjb25zdCByZXMgPWF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvbmFtZXMvJHtpZH1gLHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6XCJERUxFVEVcIixcbiAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYocmVzLm9rKXtcbiAgICAgICAgICAgICAgICByb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiZGVsZXRlZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZlTmFtZX0gY2xhc3NOYW1lPVwidGV4dC1yZWQtNDAwXCI+XG4gICAgICAgICAgICA8SGlPdXRsaW5lVHJhc2ggc2l6ZT17MjR9Lz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgUmVtb3ZlQnRuOyJdLCJuYW1lcyI6WyJIaU91dGxpbmVUcmFzaCIsInVzZVJvdXRlciIsIlJlbW92ZUJ0biIsImlkIiwicm91dGVyIiwicmVtb3ZlTmFtZSIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsIm9rIiwicmVmcmVzaCIsImFsZXJ0IiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsInNpemUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/removebtn.tsx\n"));

/***/ })

});