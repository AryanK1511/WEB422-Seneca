"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/artwork",{

/***/ "./pages/artwork/index.jsx":
/*!*********************************!*\
  !*** ./pages/artwork/index.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtHome; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_data_validObjectIDList_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/data/validObjectIDList.json */ \"./public/data/validObjectIDList.json\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Pagination */ \"./node_modules/react-bootstrap/esm/Pagination.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var _components_ArtworkCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ArtworkCard */ \"./components/ArtworkCard.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst PER_PAGE = 12;\nfunction ArtHome() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    let finalQuery = router.asPath.split(\"?\")[1];\n    // Add the artworkList and page to the state\n    let [artworkList, setArtworkList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    let [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    // Make a call to the museum API using the objectID passed as props to this component\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"https://collectionapi.metmuseum.org/public/collection/v1/search?\".concat(finalQuery));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(_public_data_validObjectIDList_json__WEBPACK_IMPORTED_MODULE_3__);\n    // console.log('Artwork List:', artworkList);\n    }, [\n        artworkList\n    ]);\n    // Create a 2D array of data for paging that is set in the state \n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data != null && data != undefined) {\n            // This has the effect of eliminating objectIDs from our search results that are not in the validObjectIDList\n            let filteredResults = _public_data_validObjectIDList_json__WEBPACK_IMPORTED_MODULE_3__.objectIDs.filter((x)=>{\n                var _data_objectIDs;\n                return (_data_objectIDs = data.objectIDs) === null || _data_objectIDs === void 0 ? void 0 : _data_objectIDs.includes(x);\n            });\n            let results = [];\n            for(let i = 0; i < filteredResults.length; i += PER_PAGE){\n                const chunk = filteredResults.slice(i, i + PER_PAGE);\n                results.push(chunk);\n            }\n            setArtworkList(results);\n            setPage(1);\n        }\n    }, [\n        data\n    ]);\n    // Throw an error if the API request fails\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_5___default()), {\n            statusCode: 404\n        }, void 0, false, {\n            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n            lineNumber: 48,\n            columnNumber: 16\n        }, this);\n    } else {\n        if (!artworkList) {\n            return null;\n        }\n    }\n    // Increase the value of page by 1\n    const nextPage = ()=>page < artworkList.length && setPage(++page);\n    // Decrease the value of page by 1\n    const previousPage = ()=>page > 1 && setPage(--page);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: artworkList.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        className: \"gy-4\",\n                        children: artworkList[page - 1].map((currentObjectID)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                lg: 3,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArtworkCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    objectID: currentObjectID\n                                }, void 0, false, {\n                                    fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 21\n                                }, this)\n                            }, currentObjectID, false, {\n                                fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 35\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Prev, {\n                                            onClick: previousPage\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Item, {\n                                            children: page\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Next, {\n                                            onClick: nextPage\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_11__[\"default\"].Body, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"Nothing Here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Try searching for something else.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n                lineNumber: 85,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/pages/artwork/index.jsx\",\n            lineNumber: 63,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(ArtHome, \"3D1azihBJ1le91adrpLcYK3E8SU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = ArtHome;\nvar _c;\n$RefreshReg$(_c, \"ArtHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7S0FUVlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0d29yay9pbmRleC5qc3g/YWY4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB2YWxpZE9iamVjdElETGlzdCBmcm9tICdAL3B1YmxpYy9kYXRhL3ZhbGlkT2JqZWN0SURMaXN0Lmpzb24nO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL1BhZ2luYXRpb24nO1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xuaW1wb3J0IEFydHdvcmtDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9BcnR3b3JrQ2FyZCc7XG5cbmNvbnN0IFBFUl9QQUdFID0gMTJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0SG9tZSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBsZXQgZmluYWxRdWVyeSA9IHJvdXRlci5hc1BhdGguc3BsaXQoJz8nKVsxXTtcblxuICAgIC8vIEFkZCB0aGUgYXJ0d29ya0xpc3QgYW5kIHBhZ2UgdG8gdGhlIHN0YXRlXG4gICAgbGV0IFsgYXJ0d29ya0xpc3QsIHNldEFydHdvcmtMaXN0IF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBsZXQgWyBwYWdlLCBzZXRQYWdlIF0gPSB1c2VTdGF0ZSgxKVxuXG4gICAgLy8gTWFrZSBhIGNhbGwgdG8gdGhlIG11c2V1bSBBUEkgdXNpbmcgdGhlIG9iamVjdElEIHBhc3NlZCBhcyBwcm9wcyB0byB0aGlzIGNvbXBvbmVudFxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgaHR0cHM6Ly9jb2xsZWN0aW9uYXBpLm1ldG11c2V1bS5vcmcvcHVibGljL2NvbGxlY3Rpb24vdjEvc2VhcmNoPyR7ZmluYWxRdWVyeX1gKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbGlkT2JqZWN0SURMaXN0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0FydHdvcmsgTGlzdDonLCBhcnR3b3JrTGlzdCk7XG4gICAgICB9LCBbYXJ0d29ya0xpc3RdKTtcbiAgICAgIFxuICAgIC8vIENyZWF0ZSBhIDJEIGFycmF5IG9mIGRhdGEgZm9yIHBhZ2luZyB0aGF0IGlzIHNldCBpbiB0aGUgc3RhdGUgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCAmJiBkYXRhICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gVGhpcyBoYXMgdGhlIGVmZmVjdCBvZiBlbGltaW5hdGluZyBvYmplY3RJRHMgZnJvbSBvdXIgc2VhcmNoIHJlc3VsdHMgdGhhdCBhcmUgbm90IGluIHRoZSB2YWxpZE9iamVjdElETGlzdFxuICAgICAgICAgICAgbGV0IGZpbHRlcmVkUmVzdWx0cyA9IHZhbGlkT2JqZWN0SURMaXN0Lm9iamVjdElEcy5maWx0ZXIoeCA9PiBkYXRhLm9iamVjdElEcz8uaW5jbHVkZXMoeCkpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJlZFJlc3VsdHMubGVuZ3RoOyBpICs9IFBFUl9QQUdFKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBmaWx0ZXJlZFJlc3VsdHMuc2xpY2UoaSwgaSArIFBFUl9QQUdFKTtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goY2h1bmspO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0QXJ0d29ya0xpc3QocmVzdWx0cyk7XG4gICAgICAgICAgICBzZXRQYWdlKDEpO1xuICAgICAgICB9XG4gICAgfSwgW2RhdGFdKTtcblxuICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBBUEkgcmVxdWVzdCBmYWlsc1xuICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezQwNH0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFhcnR3b3JrTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbmNyZWFzZSB0aGUgdmFsdWUgb2YgcGFnZSBieSAxXG4gICAgY29uc3QgbmV4dFBhZ2UgPSAoKSA9PiBwYWdlIDwgYXJ0d29ya0xpc3QubGVuZ3RoICYmIHNldFBhZ2UoKytwYWdlKTtcbiAgICBcbiAgICAvLyBEZWNyZWFzZSB0aGUgdmFsdWUgb2YgcGFnZSBieSAxXG4gICAgY29uc3QgcHJldmlvdXNQYWdlID0gKCkgPT4gcGFnZSA+IDEgJiYgc2V0UGFnZSgtLXBhZ2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICB7YXJ0d29ya0xpc3QubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImd5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthcnR3b3JrTGlzdFtwYWdlIC0gMV0ubWFwKChjdXJyZW50T2JqZWN0SUQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBrZXk9e2N1cnJlbnRPYmplY3RJRH0+XG4gICAgICAgICAgICAgICAgICAgIDxBcnR3b3JrQ2FyZCBvYmplY3RJRD17Y3VycmVudE9iamVjdElEfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24uUHJldiBvbkNsaWNrPXtwcmV2aW91c1BhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uLkl0ZW0+e3BhZ2V9PC9QYWdpbmF0aW9uLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uLk5leHQgb25DbGljaz17bmV4dFBhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxoND5Ob3RoaW5nIEhlcmU8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cD5Ucnkgc2VhcmNoaW5nIGZvciBzb21ldGhpbmcgZWxzZS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ2YWxpZE9iamVjdElETGlzdCIsInVzZVNXUiIsIkNvbCIsIkNvbnRhaW5lciIsIlJvdyIsIkVycm9yIiwiUGFnaW5hdGlvbiIsIkNhcmQiLCJBcnR3b3JrQ2FyZCIsIlBFUl9QQUdFIiwiQXJ0SG9tZSIsInJvdXRlciIsImZpbmFsUXVlcnkiLCJhc1BhdGgiLCJzcGxpdCIsImFydHdvcmtMaXN0Iiwic2V0QXJ0d29ya0xpc3QiLCJwYWdlIiwic2V0UGFnZSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJmaWx0ZXJlZFJlc3VsdHMiLCJvYmplY3RJRHMiLCJmaWx0ZXIiLCJ4IiwiaW5jbHVkZXMiLCJyZXN1bHRzIiwiaSIsImxlbmd0aCIsImNodW5rIiwic2xpY2UiLCJwdXNoIiwic3RhdHVzQ29kZSIsIm5leHRQYWdlIiwicHJldmlvdXNQYWdlIiwiY2xhc3NOYW1lIiwibWFwIiwiY3VycmVudE9iamVjdElEIiwibGciLCJvYmplY3RJRCIsImJyIiwiUHJldiIsIm9uQ2xpY2siLCJJdGVtIiwiTmV4dCIsIkJvZHkiLCJoNCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/artwork/index.jsx\n"));

/***/ })

});