"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/News.js":
/*!********************************!*\
  !*** ./src/components/News.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_gopur_dn8352_Downloads_softrate_project_dizme_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_gopur_dn8352_Downloads_softrate_project_dizme_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_gopur_dn8352_Downloads_softrate_project_dizme_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilits */ \"./src/utilits.js\");\n/* harmony import */ var _popup_BlogPopUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup/BlogPopUp */ \"./src/components/popup/BlogPopUp.js\");\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar News = function() {\n    var _this1 = _this;\n    var openLinkInNewWindow = function openLinkInNewWindow(url) {\n        window.open(url, '_blank');\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), popupData = ref1[0], setPopupData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), popup = ref2[0], setPopup = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(C_Users_gopur_dn8352_Downloads_softrate_project_dizme_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_gopur_dn8352_Downloads_softrate_project_dizme_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.t0 = setData;\n                    _ctx.next = 3;\n                    return (0,_utilits__WEBPACK_IMPORTED_MODULE_3__.fatchData)(\"/static/blog.json\");\n                case 3:\n                    _ctx.t1 = _ctx.sent;\n                    (0, _ctx.t0)(_ctx.t1);\n                    (0,_utilits__WEBPACK_IMPORTED_MODULE_3__.aTagClick)();\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    var boxShadowStyle = {\n        boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)'\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"dizme_tm_section\",\n        id: \"blog\",\n        style: {\n            marginBottom: '50px'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_popup_BlogPopUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: popup,\n                data: popupData,\n                close: function() {\n                    return setPopup(false);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"dizme_tm_news\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"dizme_tm_main_title\",\n                            \"data-align\": \"center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    className: \" wow fadeInUp\",\n                                    \"data-wow-duration\": \"1s\",\n                                    children: \"From social Media\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \" wow fadeInUp\",\n                                    \"data-wow-duration\": \"1s\",\n                                    children: \"Our Recent Updates\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"news_list\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                children: data && data.map(function(blog, i1) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                        className: \"wow fadeInUp\",\n                                        \"data-wow-duration\": \"1s\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"list_inner\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    className: \"image\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                            src: \"img/thumbs/42-29.jpg\",\n                                                            alt: \"image\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                                            lineNumber: 34,\n                                                            columnNumber: 25\n                                                        }, _this1),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                            className: \"main\",\n                                                            \"data-img-url\": blog && blog.img,\n                                                            style: {\n                                                                backgroundImage: \"url(\".concat(blog && blog.img, \")\")\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                                            lineNumber: 35,\n                                                            columnNumber: 25\n                                                        }, _this1),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                            className: \"dizme_tm_full_link\",\n                                                            href: \"#\",\n                                                            onClick: function() {\n                                                                setPopupData(blog && blog);\n                                                                setPopup(true);\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                                            lineNumber: 46,\n                                                            columnNumber: 25\n                                                        }, _this1)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 23\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    className: \"details\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                            className: \"category\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                                href: \"#\",\n                                                                children: blog.category\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                                                lineNumber: 57,\n                                                                columnNumber: 27\n                                                            }, _this1)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                                            lineNumber: 56,\n                                                            columnNumber: 25\n                                                        }, _this1),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                            className: \"title\",\n                                                            onClick: function(e) {\n                                                                e.preventDefault(); // Prevents the default behavior (following the link)\n                                                                openLinkInNewWindow(blog.blink);\n                                                            },\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                                href: \"#\",\n                                                                children: blog.title\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                                                lineNumber: 63,\n                                                                columnNumber: 27\n                                                            }, _this1)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 25\n                                                        }, _this1)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 23\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    className: \"news_hidden_details\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                        className: \"news_popup_informations\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                            className: \"text\",\n                                                            children: blog.details && blog.details.map(function(details, i) {\n                                                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                                    children: details\n                                                                }, i, false, {\n                                                                    fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                                                    lineNumber: 71,\n                                                                    columnNumber: 33\n                                                                }, _this1);\n                                                            })\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                                            lineNumber: 68,\n                                                            columnNumber: 27\n                                                        }, _this1)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 25\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 23\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 21\n                                        }, _this1)\n                                    }, i1, false, {\n                                        fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 19\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\News.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this));\n};\n_s(News, \"iPImTJqj66EJ3YhTouWCpXiLyCs=\");\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SkEsSUFBSTtBQXdGViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05ld3MuanM/NGZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGFUYWdDbGljaywgZmF0Y2hEYXRhIH0gZnJvbSBcIi4uL3V0aWxpdHNcIjtcclxuaW1wb3J0IEJsb2dQb3BVcCBmcm9tIFwiLi9wb3B1cC9CbG9nUG9wVXBcIjtcclxuY29uc3QgTmV3cyA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BvcHVwRGF0YSwgc2V0UG9wdXBEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0RGF0YShhd2FpdCBmYXRjaERhdGEoXCIvc3RhdGljL2Jsb2cuanNvblwiKSk7XHJcbiAgICBhVGFnQ2xpY2soKTtcclxuICB9LCBbXSk7XHJcbiAgZnVuY3Rpb24gb3BlbkxpbmtJbk5ld1dpbmRvdyh1cmwpIHtcclxuICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gIH1cclxuICBjb25zdCBib3hTaGFkb3dTdHlsZSA9IHtcclxuICAgIGJveFNoYWRvdzogJzBweCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSknLFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl6bWVfdG1fc2VjdGlvblwiIGlkPVwiYmxvZ1wiIHN0eWxlPXt7bWFyZ2luQm90dG9tOic1MHB4J319PlxyXG4gICAgICA8QmxvZ1BvcFVwIG9wZW49e3BvcHVwfSBkYXRhPXtwb3B1cERhdGF9IGNsb3NlPXsoKSA9PiBzZXRQb3B1cChmYWxzZSl9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl6bWVfdG1fbmV3c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpem1lX3RtX21haW5fdGl0bGVcIiBkYXRhLWFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB3b3cgZmFkZUluVXBcImRhdGEtd293LWR1cmF0aW9uPVwiMXNcIj5Gcm9tIHNvY2lhbCBNZWRpYTwvc3Bhbj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIiB3b3cgZmFkZUluVXBcImRhdGEtd293LWR1cmF0aW9uPVwiMXNcIj57YE91ciBSZWNlbnQgVXBkYXRlc2B9PC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX2xpc3RcIiA+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7ZGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0YS5tYXAoKGJsb2csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy90aHVtYnMvNDItMjkuanBnXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWctdXJsPXtibG9nICYmIGJsb2cuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtibG9nICYmIGJsb2cuaW1nfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2Jsb2cgJiYgYmxvZy5kYXRlICYmIGJsb2cuZGF0ZS5kYXRlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Jsb2cgJiYgYmxvZy5kYXRlICYmIGJsb2cuZGF0ZS5tb250aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXptZV90bV9mdWxsX2xpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3B1cERhdGEoYmxvZyAmJiBibG9nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvcHVwKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e2Jsb2cuY2F0ZWdvcnl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50cyB0aGUgZGVmYXVsdCBiZWhhdmlvciAoZm9sbG93aW5nIHRoZSBsaW5rKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5MaW5rSW5OZXdXaW5kb3coYmxvZy5ibGluayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPntibG9nLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX2hpZGRlbl9kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19wb3B1cF9pbmZvcm1hdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9nLmRldGFpbHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvZy5kZXRhaWxzLm1hcCgoZGV0YWlscywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aX0+e2RldGFpbHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYnJ1c2hfMSB3b3cgem9vbUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYnJ1c2hlcy9uZXdzLzEucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJ1c2hfMiB3b3cgem9vbUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYnJ1c2hlcy9uZXdzLzIucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhVGFnQ2xpY2siLCJmYXRjaERhdGEiLCJCbG9nUG9wVXAiLCJOZXdzIiwib3BlbkxpbmtJbk5ld1dpbmRvdyIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJkYXRhIiwic2V0RGF0YSIsInBvcHVwRGF0YSIsInNldFBvcHVwRGF0YSIsInBvcHVwIiwic2V0UG9wdXAiLCJib3hTaGFkb3dTdHlsZSIsImJveFNoYWRvdyIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJjbG9zZSIsImRhdGEtYWxpZ24iLCJzcGFuIiwiZGF0YS13b3ctZHVyYXRpb24iLCJoMyIsInVsIiwibWFwIiwiYmxvZyIsImkiLCJsaSIsImltZyIsInNyYyIsImFsdCIsImRhdGEtaW1nLXVybCIsImJhY2tncm91bmRJbWFnZSIsImEiLCJocmVmIiwib25DbGljayIsImNhdGVnb3J5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmxpbmsiLCJ0aXRsZSIsImRldGFpbHMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/News.js\n");

/***/ })

});