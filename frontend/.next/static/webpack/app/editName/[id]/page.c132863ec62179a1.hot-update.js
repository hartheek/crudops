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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst EditNameForm = (param)=>{\n    let { id, name, university } = param;\n    _s();\n    const [newName, setNewName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(name || \"\");\n    const [newUniveristy, setNewUniveristy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(university || \"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!newName.trim() || !newUniveristy.trim()) {\n            alert(\"Both fields are required.\");\n            return;\n        }\n        try {\n            const res = await fetch(\"http://localhost:3001/names/\".concat(id), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name: newName,\n                    university: newUniveristy\n                })\n            });\n            if (!res.ok) {\n                throw new Error(\"Failed to update\");\n            }\n            router.refresh();\n            router.push(\"/\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"flex flex-col gap-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"border border-slate-600 px-8 py-2\",\n                type: \"text\",\n                placeholder: \"Name\",\n                value: newName,\n                onChange: (e)=>setNewName(e.target.value)\n            }, void 0, false, {\n                fileName: \"/home/pratheek/Desktop/UpUnikSelf/frontend/src/components/editNameForm.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"border border-slate-600 px-8 py-2\",\n                type: \"text\",\n                placeholder: \"University Name\",\n                value: newUniveristy,\n                onChange: (e)=>setNewUniveristy(e.target.value)\n            }, void 0, false, {\n                fileName: \"/home/pratheek/Desktop/UpUnikSelf/frontend/src/components/editNameForm.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-slate-100 font-bold py-3 px-6 w-fit\",\n                type: \"submit\",\n                children: \"Update Name\"\n            }, void 0, false, {\n                fileName: \"/home/pratheek/Desktop/UpUnikSelf/frontend/src/components/editNameForm.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pratheek/Desktop/UpUnikSelf/frontend/src/components/editNameForm.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EditNameForm, \"2jpsLhpmhqmKjZXOOlOvB6DNx1o=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = EditNameForm;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditNameForm);\nvar _c;\n$RefreshReg$(_c, \"EditNameForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2VkaXROYW1lRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpQztBQUNXO0FBRTVDLE1BQU1FLGVBQWE7UUFBQyxFQUFDQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFDOztJQUN0QyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBRVAsK0NBQVFBLENBQUNJLFFBQU07SUFDNUMsTUFBTSxDQUFDSSxlQUFlQyxpQkFBaUIsR0FBRVQsK0NBQVFBLENBQUNLLGNBQVk7SUFDOUQsTUFBTUssU0FBU1QsMERBQVNBO0lBRTFCLE1BQU1VLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSSxDQUFDUCxRQUFRUSxJQUFJLE1BQU0sQ0FBQ04sY0FBY00sSUFBSSxJQUFJO1lBQzFDQyxNQUFNO1lBRU47UUFDRjtRQUVGLElBQUk7WUFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQU0sK0JBQWtDLE9BQUhkLEtBQU07Z0JBQzNEZSxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRWxCLE1BQU1FO29CQUFTRCxZQUFZRztnQkFBYztZQUNsRTtZQUVBLElBQUksQ0FBQ1EsSUFBSU8sRUFBRSxFQUFFO2dCQUNYLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUVBZCxPQUFPZSxPQUFPO1lBQ2RmLE9BQU9nQixJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0Y7SUFFRSxxQkFDSSw4REFBQ0c7UUFBS0MsVUFBVXBCO1FBQWNxQixXQUFVOzswQkFDeEMsOERBQUNDO2dCQUFNRCxXQUFVO2dCQUFvQ0UsTUFBSztnQkFBT0MsYUFBWTtnQkFBT0MsT0FBTzlCO2dCQUFTK0IsVUFBVSxDQUFDekIsSUFBTUwsV0FBV0ssRUFBRTBCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzBCQUM5SSw4REFBQ0g7Z0JBQU1ELFdBQVU7Z0JBQW9DRSxNQUFLO2dCQUFPQyxhQUFZO2dCQUFrQkMsT0FBTzVCO2dCQUFlNkIsVUFBVSxDQUFDekIsSUFBS0gsaUJBQWlCRyxFQUFFMEIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7MEJBQ3BLLDhEQUFDRztnQkFBT1AsV0FBVTtnQkFBeUNFLE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUdqRjtHQXhDTWhDOztRQUdhRCxzREFBU0E7OztLQUh0QkM7QUF5Q04saUVBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL3ByYXRoZWVrL0Rlc2t0b3AvVXBVbmlrU2VsZi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9lZGl0TmFtZUZvcm0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5jb25zdCBFZGl0TmFtZUZvcm09KHtpZCwgbmFtZSwgdW5pdmVyc2l0eX0pPT57XG4gICAgY29uc3QgW25ld05hbWUsIHNldE5ld05hbWVdPSB1c2VTdGF0ZShuYW1lfHxcIlwiKTtcbiAgICBjb25zdCBbbmV3VW5pdmVyaXN0eSwgc2V0TmV3VW5pdmVyaXN0eV09IHVzZVN0YXRlKHVuaXZlcnNpdHl8fFwiXCIpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghbmV3TmFtZS50cmltKCkgfHwgIW5ld1VuaXZlcmlzdHkudHJpbSgpKSB7XG4gICAgICAgIGFsZXJ0KFwiQm90aCBmaWVsZHMgYXJlIHJlcXVpcmVkLlwiKTtcbiAgICBcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvbmFtZXMvJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWU6IG5ld05hbWUsIHVuaXZlcnNpdHk6IG5ld1VuaXZlcmlzdHkgfSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZVwiKTtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLnJlZnJlc2goKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTNcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTggcHktMlwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdmFsdWU9e25ld05hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3TmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtNjAwIHB4LTggcHktMlwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVbml2ZXJzaXR5IE5hbWVcIiB2YWx1ZT17bmV3VW5pdmVyaXN0eX0gb25DaGFuZ2U9eyhlKT0+IHNldE5ld1VuaXZlcmlzdHkoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctc2xhdGUtMTAwIGZvbnQtYm9sZCBweS0zIHB4LTYgdy1maXRcIiB0eXBlPVwic3VibWl0XCI+VXBkYXRlIE5hbWU8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgRWRpdE5hbWVGb3JtOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkVkaXROYW1lRm9ybSIsImlkIiwibmFtZSIsInVuaXZlcnNpdHkiLCJuZXdOYW1lIiwic2V0TmV3TmFtZSIsIm5ld1VuaXZlcmlzdHkiLCJzZXROZXdVbml2ZXJpc3R5Iiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImFsZXJ0IiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwicmVmcmVzaCIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/editNameForm.tsx\n"));

/***/ })

});