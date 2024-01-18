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

/***/ "(app-client)/./components/skills.tsx":
/*!*******************************!*\
  !*** ./components/skills.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _section_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section-heading */ \"(app-client)/./components/section-heading.tsx\");\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/data */ \"(app-client)/./lib/data.ts\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/hooks */ \"(app-client)/./lib/hooks.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst fadeInAnimationVariants = {\n    initial: {\n        opacity: 0,\n        y: 100\n    },\n    animate: (index)=>({\n            opacity: 1,\n            y: 0,\n            transition: {\n                delay: 0.05 * index\n            }\n        })\n};\nfunction Skills() {\n    _s();\n    const { ref } = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useSectionInView)(\"Skills\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"skills\",\n        ref: ref,\n        className: \"mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_heading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: \"My skills\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Work\\\\website\\\\MY LANDING\\\\My_Portofolio_neo\\\\myportfolio\\\\components\\\\skills.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-wrap justify-center gap-2 text-lg text-gray-800\",\n                children: _lib_data__WEBPACK_IMPORTED_MODULE_4__.skillsData.map((skill, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.li, {\n                        className: \"bg-white borderBlack  object-cover rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80\",\n                        variants: fadeInAnimationVariants,\n                        initial: \"initial\",\n                        whileInView: \"animate\",\n                        viewport: {\n                            once: true\n                        },\n                        custom: index,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: skill.icon,\n                                alt: skill.name,\n                                width: 50,\n                                height: 50\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Work\\\\website\\\\MY LANDING\\\\My_Portofolio_neo\\\\myportfolio\\\\components\\\\skills.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"E:\\\\Work\\\\website\\\\MY LANDING\\\\My_Portofolio_neo\\\\myportfolio\\\\components\\\\skills.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this),\n                            skill.name\n                        ]\n                    }, index, true, {\n                        fileName: \"E:\\\\Work\\\\website\\\\MY LANDING\\\\My_Portofolio_neo\\\\myportfolio\\\\components\\\\skills.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\Work\\\\website\\\\MY LANDING\\\\My_Portofolio_neo\\\\myportfolio\\\\components\\\\skills.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Work\\\\website\\\\MY LANDING\\\\My_Portofolio_neo\\\\myportfolio\\\\components\\\\skills.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Skills, \"vuV2Oqy/m5Sj7a/N+PFePPf5wkY=\", false, function() {\n    return [\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useSectionInView\n    ];\n});\n_c = Skills;\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9za2lsbHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUUwQjtBQUNLO0FBQ2dCO0FBQ1A7QUFDTztBQUNSO0FBRXZDLE1BQU1NLDBCQUEwQjtJQUM5QkMsU0FBUztRQUNQQyxTQUFTO1FBQ1RDLEdBQUc7SUFDTDtJQUNBQyxTQUFTLENBQUNDLFFBQW1CO1lBQzNCSCxTQUFTO1lBQ1RDLEdBQUc7WUFDSEcsWUFBWTtnQkFDVkMsT0FBTyxPQUFPRjtZQUNoQjtRQUNGO0FBQ0Y7QUFFZSxTQUFTRzs7SUFDdEIsTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBR1gsNERBQWdCQSxDQUFDO0lBRWpDLHFCQUNFLDhEQUFDWTtRQUNDQyxJQUFHO1FBQ0hGLEtBQUtBO1FBQ0xHLFdBQVU7OzBCQUVWLDhEQUFDaEIsd0RBQWNBOzBCQUFDOzs7Ozs7MEJBQ2hCLDhEQUFDaUI7Z0JBQUdELFdBQVU7MEJBQ1hmLGlEQUFVQSxDQUFDaUIsR0FBRyxDQUFDLENBQUNDLE9BQU9WLHNCQUN0Qiw4REFBQ04saURBQU1BLENBQUNpQixFQUFFO3dCQUNSSixXQUFVO3dCQUVWSyxVQUFVakI7d0JBQ1ZDLFNBQVE7d0JBQ1JpQixhQUFZO3dCQUNaQyxVQUFVOzRCQUNSQyxNQUFNO3dCQUNSO3dCQUNBQyxRQUFRaEI7OzBDQUVOLDhEQUFDVixtREFBS0E7Z0NBQUMyQixLQUFLUCxNQUFNUSxJQUFJO2dDQUFFQyxLQUFLVCxNQUFNVSxJQUFJO2dDQUFFQyxPQUFPO2dDQUFJQyxRQUFROzs7Ozs7MENBQzVELDhEQUFDQzs7Ozs7NEJBQ0FiLE1BQU1VLElBQUk7O3VCQVhScEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmpCO0dBL0J3Qkc7O1FBQ05WLHdEQUFnQkE7OztLQURWVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NraWxscy50c3g/MjI3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gXCIuL3NlY3Rpb24taGVhZGluZ1wiO1xuaW1wb3J0IHsgc2tpbGxzRGF0YSB9IGZyb20gXCJAL2xpYi9kYXRhXCI7XG5pbXBvcnQgeyB1c2VTZWN0aW9uSW5WaWV3IH0gZnJvbSBcIkAvbGliL2hvb2tzXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBmYWRlSW5BbmltYXRpb25WYXJpYW50cyA9IHtcbiAgaW5pdGlhbDoge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgeTogMTAwLFxuICB9LFxuICBhbmltYXRlOiAoaW5kZXg6IG51bWJlcikgPT4gKHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHk6IDAsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZGVsYXk6IDAuMDUgKiBpbmRleCxcbiAgICB9LFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscygpIHtcbiAgY29uc3QgeyByZWYgfSA9IHVzZVNlY3Rpb25JblZpZXcoXCJTa2lsbHNcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgaWQ9XCJza2lsbHNcIlxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9XCJtYi0yOCBtYXgtdy1bNTNyZW1dIHNjcm9sbC1tdC0yOCB0ZXh0LWNlbnRlciBzbTptYi00MFwiXG4gICAgPlxuICAgICAgPFNlY3Rpb25IZWFkaW5nPk15IHNraWxsczwvU2VjdGlvbkhlYWRpbmc+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTIgdGV4dC1sZyB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgIHtza2lsbHNEYXRhLm1hcCgoc2tpbGwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyQmxhY2sgIG9iamVjdC1jb3ZlciByb3VuZGVkLXhsIHB4LTUgcHktMyBkYXJrOmJnLXdoaXRlLzEwIGRhcms6dGV4dC13aGl0ZS84MFwiXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVJbkFuaW1hdGlvblZhcmlhbnRzfVxuICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJhbmltYXRlXCJcbiAgICAgICAgICAgIHZpZXdwb3J0PXt7XG4gICAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY3VzdG9tPXtpbmRleH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NraWxsLmljb259IGFsdD17c2tpbGwubmFtZX0gd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfS8+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAge3NraWxsLm5hbWV9XG4gICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIlNlY3Rpb25IZWFkaW5nIiwic2tpbGxzRGF0YSIsInVzZVNlY3Rpb25JblZpZXciLCJtb3Rpb24iLCJmYWRlSW5BbmltYXRpb25WYXJpYW50cyIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJpbmRleCIsInRyYW5zaXRpb24iLCJkZWxheSIsIlNraWxscyIsInJlZiIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwic2tpbGwiLCJsaSIsInZhcmlhbnRzIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJjdXN0b20iLCJzcmMiLCJpY29uIiwiYWx0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/skills.tsx\n"));

/***/ })

});