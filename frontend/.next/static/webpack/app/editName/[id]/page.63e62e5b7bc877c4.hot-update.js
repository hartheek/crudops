"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/editName/[id]/page",{

/***/ "(app-pages-browser)/./src/components/editNameForm.tsx":
/*!*****************************************!*\
  !*** ./src/components/editNameForm.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst EditNameForm = (param)=>{\n    let { id, name, university } = param;\n    _s();\n    const [newName, setNewName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(name);\n    const [newUniveristy, setNewUniveristy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(university);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const res = await fetch(\"http://localhost:3001/names/\".concat(id), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    newName,\n                    newUniveristy\n                })\n            });\n            if (!res.ok) {\n                throw new Error(\"Failed to update\");\n            }\n            router.refresh();\n            router.push(\"/\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"flex flex-col gap-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"border border-slate-600 px-8 py-2\",\n                type: \"text\",\n                placeholder: \"Name\",\n                value: name,\n                onChange: (e)=>setNewName(e.target.value)\n            }, void 0, false, {\n                fileName: \"/home/pratheek/Desktop/UpUnikSelf/frontend/src/components/editNameForm.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"border border-slate-600 px-8 py-2\",\n                type: \"text\",\n                placeholder: \"University Name\",\n                value: university,\n                onChange: (e)=>setNewUniveristy(e.target.value)\n            }, void 0, false, {\n                fileName: \"/home/pratheek/Desktop/UpUnikSelf/frontend/src/components/editNameForm.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-slate-100 font-bold py-3 px-6 w-fit\",\n                type: \"submit\",\n                children: \"Update Name\"\n            }, void 0, false, {\n                fileName: \"/home/pratheek/Desktop/UpUnikSelf/frontend/src/components/editNameForm.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pratheek/Desktop/UpUnikSelf/frontend/src/components/editNameForm.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EditNameForm, \"P2MGe+Sp5Zl5FvaI7jS4K+GBFxc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = EditNameForm;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditNameForm);\nvar _c;\n$RefreshReg$(_c, \"EditNameForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2VkaXROYW1lRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpQztBQUNXO0FBRTVDLE1BQU1FLGVBQWE7UUFBQyxFQUFDQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFDOztJQUN0QyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBRVAsK0NBQVFBLENBQUNJO0lBQ3RDLE1BQU0sQ0FBQ0ksZUFBZUMsaUJBQWlCLEdBQUVULCtDQUFRQSxDQUFDSztJQUNsRCxNQUFNSyxTQUFTVCwwREFBU0E7SUFFMUIsTUFBTVUsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLCtCQUFrQyxPQUFIWixLQUFNO2dCQUMzRGEsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVkO29CQUFTRTtnQkFBYztZQUNoRDtZQUVBLElBQUksQ0FBQ00sSUFBSU8sRUFBRSxFQUFFO2dCQUNYLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUVBWixPQUFPYSxPQUFPO1lBQ2RiLE9BQU9jLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUVFLHFCQUNJLDhEQUFDRztRQUFLQyxVQUFVbEI7UUFBY21CLFdBQVU7OzBCQUN4Qyw4REFBQ0M7Z0JBQU1ELFdBQVU7Z0JBQW9DRSxNQUFLO2dCQUFPQyxhQUFZO2dCQUFPQyxPQUFPOUI7Z0JBQU0rQixVQUFVLENBQUN2QixJQUFNTCxXQUFXSyxFQUFFd0IsTUFBTSxDQUFDRixLQUFLOzs7Ozs7MEJBQzNJLDhEQUFDSDtnQkFBTUQsV0FBVTtnQkFBb0NFLE1BQUs7Z0JBQU9DLGFBQVk7Z0JBQWtCQyxPQUFPN0I7Z0JBQVk4QixVQUFVLENBQUN2QixJQUFLSCxpQkFBaUJHLEVBQUV3QixNQUFNLENBQUNGLEtBQUs7Ozs7OzswQkFDakssOERBQUNHO2dCQUFPUCxXQUFVO2dCQUF5Q0UsTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBR2pGO0dBbkNNOUI7O1FBR2FELHNEQUFTQTs7O0tBSHRCQztBQW9DTixpRUFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsiL2hvbWUvcHJhdGhlZWsvRGVza3RvcC9VcFVuaWtTZWxmL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2VkaXROYW1lRm9ybS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IEVkaXROYW1lRm9ybT0oe2lkLCBuYW1lLCB1bml2ZXJzaXR5fSk9PntcbiAgICBjb25zdCBbbmV3TmFtZSwgc2V0TmV3TmFtZV09IHVzZVN0YXRlKG5hbWUpO1xuICAgIGNvbnN0IFtuZXdVbml2ZXJpc3R5LCBzZXROZXdVbml2ZXJpc3R5XT0gdXNlU3RhdGUodW5pdmVyc2l0eSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9uYW1lcy8ke2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmV3TmFtZSwgbmV3VW5pdmVyaXN0eSB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlXCIpO1xuICAgICAgfVxuXG4gICAgICByb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtM1wiPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtOCBweS0yXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdOYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zbGF0ZS02MDAgcHgtOCBweS0yXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVuaXZlcnNpdHkgTmFtZVwiIHZhbHVlPXt1bml2ZXJzaXR5fSBvbkNoYW5nZT17KGUpPT4gc2V0TmV3VW5pdmVyaXN0eShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1zbGF0ZS0xMDAgZm9udC1ib2xkIHB5LTMgcHgtNiB3LWZpdFwiIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgTmFtZTwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBFZGl0TmFtZUZvcm07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiRWRpdE5hbWVGb3JtIiwiaWQiLCJuYW1lIiwidW5pdmVyc2l0eSIsIm5ld05hbWUiLCJzZXROZXdOYW1lIiwibmV3VW5pdmVyaXN0eSIsInNldE5ld1VuaXZlcmlzdHkiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJyZWZyZXNoIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/editNameForm.tsx\n"));

/***/ })

});