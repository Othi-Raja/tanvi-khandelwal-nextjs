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

/***/ "./src/components/Testimonial.js":
/*!***************************************!*\
  !*** ./src/components/Testimonial.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_gopur_dn8352_Downloads_softrate_project_dizme_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_gopur_dn8352_Downloads_softrate_project_dizme_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_gopur_dn8352_Downloads_softrate_project_dizme_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilits */ \"./src/utilits.js\");\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nswiper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use([\n    swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,\n    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,\n    swiper__WEBPACK_IMPORTED_MODULE_4__.EffectFade,\n    swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay\n]);\nvar Testimonial = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), /*#__PURE__*/ data1 = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(_asyncToGenerator(C_Users_gopur_dn8352_Downloads_softrate_project_dizme_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_gopur_dn8352_Downloads_softrate_project_dizme_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.t0 = setData;\n                    _ctx.next = 3;\n                    return (0,_utilits__WEBPACK_IMPORTED_MODULE_6__.fatchData)(\"/static/testimonial.json\");\n                case 3:\n                    _ctx.t1 = _ctx.sent;\n                    (0, _ctx.t0)(_ctx.t1);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    var props = {\n        slidesPerView: 1,\n        loop: true,\n        pagination: {\n            el: \".owl-dots\",\n            clickable: true\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-3acb263598b83eaa\" + \" \" + \"dizme_tm_section\",\n        children: [\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"3acb263598b83eaa\",\n                children: \".testimo.jsx-3acb263598b83eaa{font-size:2.3rem}\\n@media (max-width:600px) {.testimo.jsx-3acb263598b83eaa{font-size:1.4rem}}\"\n            }, void 0, false, void 0, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"jsx-3acb263598b83eaa\" + \" \" + \"dizme_tm_testimonials\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        \"data-align\": \"center\",\n                        className: \"jsx-3acb263598b83eaa\" + \" \" + \"dizme_tm_main_title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                \"data-wow-duration\": \"1.4s\",\n                                className: \"jsx-3acb263598b83eaa\" + \" \" + \" wow fadeInUp\",\n                                children: \"Testimonials\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, _this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {\n                                className: \"jsx-3acb263598b83eaa\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                                lineNumber: 43,\n                                columnNumber: 87\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                \"data-wow-duration\": \"2s\",\n                                className: \"jsx-3acb263598b83eaa\" + \" \" + \"testimo wow fadeInUp\",\n                                children: \"What My Clients Say\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"jsx-3acb263598b83eaa\" + \" \" + \"list_wrapper\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-3acb263598b83eaa\" + \" \" + \"total\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"jsx-3acb263598b83eaa\" + \" \" + \"in\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, _objectSpread({}, props, {\n                                        className: \"\",\n                                        children: data1 && data1.map(function(data, i) {\n                                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    className: \"jsx-3acb263598b83eaa\" + \" \" + \"text\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                        className: \"jsx-3acb263598b83eaa\",\n                                                        children: data.details\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 25\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 23\n                                                }, _this1)\n                                            }, i, false, {\n                                                fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 21\n                                            }, _this1);\n                                        })\n                                    }), void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"jsx-3acb263598b83eaa\" + \" \" + \"owl-dots\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        \"data-wow-duration\": \"1s\",\n                        className: \"jsx-3acb263598b83eaa\" + \" \" + \"brush_1 wow fadeInRight\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: \"img/brushes/testimonials/1.png\",\n                            alt: \"image\",\n                            className: \"jsx-3acb263598b83eaa\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                            lineNumber: 148,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gopur_dn8352\\\\Downloads\\\\softrate project\\\\dizme\\\\src\\\\components\\\\Testimonial.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this));\n};\n_s(Testimonial, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Testimonial;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonial);\nvar _c;\n$RefreshReg$(_c, \"Testimonial\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZXN0aW1vbmlhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFNNUI7QUFDbUM7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3RDRSxrREFBYyxDQUFDLENBQUNJO0lBQUFBLDhDQUFVO0lBQUVELDhDQUFVO0lBQUVELDhDQUFVO0lBQUVELDRDQUFRO0FBQUEsQ0FBQztBQUU3RCxHQUFLLENBQUNRLFdBQVcsR0FBRyxRQUFRLEdBQUYsQ0FBQzs7O0lBQ3pCLEdBQUssQ0FBbUJWLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsaUJBQTVCVyxLQUFJLEdBQWFYLEdBQVksS0FBdkJZLE9BQU8sR0FBSVosR0FBWTtJQUNwQ0QsZ0RBQVMsb0xBQUMsUUFBUSxXQUFJLENBQUM7Ozs7OEJBQ3JCYSxPQUFPOzsyQkFBT0osbURBQVMsQ0FBQyxDQUEwQjs7Ozs7Ozs7O0lBQ3BELENBQUMsSUFBRSxDQUFDLENBQUM7SUFDTCxHQUFLLENBQUNLLEtBQUssR0FBRyxDQUFDO1FBQ2JDLGFBQWEsRUFBRSxDQUFDO1FBQ2hCQyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxVQUFVLEVBQUUsQ0FBQztZQUNYQyxFQUFFLEVBQUUsQ0FBVztZQUNmQyxTQUFTLEVBQUUsSUFBSTtRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sNkVBRUhDLENBQUc7a0RBQVcsQ0FBa0I7Ozs7Ozt3RkFhOUJBLENBQUc7MERBQVcsQ0FBdUI7O2dHQUNuQ0EsQ0FBRzt3QkFBaUNDLENBQVUsYUFBQyxDQUFRO2tFQUF6QyxDQUFxQjs7d0dBQ2pDQyxDQUFJO2dDQUEwQkMsQ0FBaUIsb0JBQUMsQ0FBTTswRUFBdkMsQ0FBZUE7MENBQXlCLENBQVk7Ozs7Ozs0QkFBTyxDQUFDO3dHQUFDQyxDQUFFOzs7Ozs7O3dHQUM5RUYsQ0FBSTtnQ0FBa0NDLENBQWlCLG9CQUFDLENBQUk7MEVBQTdDLENBQXNCOzBDQUF3QixDQUFtQjs7Ozs7Ozs7Ozs7O2dHQU1sRkgsQ0FBRztrRUFBVyxDQUFjOzhHQUMxQkEsQ0FBRztzRUFBVyxDQUFPO2tIQUNuQkEsQ0FBRzswRUFBVyxDQUFJOztnSEFDaEJiLGdEQUFNLG9CQUFLTyxLQUFLO3dDQUFFVyxTQUFTLEVBQUMsQ0FBRTtrREFDNUJiLEtBQUksSUFDSEEsS0FBSSxDQUFDYyxHQUFHLENBQUMsUUFBUSxDQUFQZCxJQUFJLEVBQUVlLENBQUM7MERBQ2YsTUFBTSwrREFBTG5CLHFEQUFXO3NJQXNCVFksQ0FBRzs4RkFBVyxDQUFNOzBJQUNsQlEsQ0FBQzs7a0VBQUVoQixJQUFJLENBQUNpQixPQUFPOzs7Ozs7Ozs7OzsrQ0F2QkZGLENBQUM7Ozs7Ozs7Ozs7O2dIQXFDeEJQLENBQUc7a0ZBQVcsQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnR0FzRDlCQSxDQUFHO3dCQUFxQ0csQ0FBaUIsb0JBQUMsQ0FBSTtrRUFBaEQsQ0FBeUI7OEdBQ3JDTyxDQUFHOzRCQUFDQyxHQUFHLEVBQUMsQ0FBZ0M7NEJBQUNDLEdBQUcsRUFBQyxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0QsQ0FBQztHQTdJS3JCLFdBQVc7S0FBWEEsV0FBVztBQThJakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UZXN0aW1vbmlhbC5qcz80ZTQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN3aXBlckNvcmUsIHtcclxuICBBdXRvcGxheSxcclxuICBFZmZlY3RGYWRlLFxyXG4gIE5hdmlnYXRpb24sXHJcbiAgUGFnaW5hdGlvbixcclxufSBmcm9tIFwic3dpcGVyXCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCB7IGZhdGNoRGF0YSB9IGZyb20gXCIuLi91dGlsaXRzXCI7XHJcblN3aXBlckNvcmUudXNlKFtQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uLCBFZmZlY3RGYWRlLCBBdXRvcGxheV0pO1xyXG5cclxuY29uc3QgVGVzdGltb25pYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBzZXREYXRhKGF3YWl0IGZhdGNoRGF0YShcIi9zdGF0aWMvdGVzdGltb25pYWwuanNvblwiKSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHByb3BzID0ge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi5vd2wtZG90c1wiLFxyXG4gICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl6bWVfdG1fc2VjdGlvblwiPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAudGVzdGltbyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLnRlc3RpbW8ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTsgLyogQWRqdXN0IHRoZSBmb250IHNpemUgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXptZV90bV90ZXN0aW1vbmlhbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpem1lX3RtX21haW5fdGl0bGVcIiBkYXRhLWFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgd293IGZhZGVJblVwXCJkYXRhLXdvdy1kdXJhdGlvbj1cIjEuNHNcIj5UZXN0aW1vbmlhbHM8L3NwYW4+IDxici8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0aW1vIHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIj5XaGF0IE15IENsaWVudHMgU2F5PC9zcGFuPlxyXG4gICAgICAgICAgey8qIDxwPlxyXG4gICAgICAgICAgICBNb3N0IGNvbW1vbiBtZXRob2RzIGZvciBkZXNpZ25pbmcgd2Vic2l0ZXMgdGhhdCB3b3JrIHdlbGwgb24gZGVza3RvcFxyXG4gICAgICAgICAgICBpcyByZXNwb25zaXZlIGFuZCBhZGFwdGl2ZSBkZXNpZ25cclxuICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X3dyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpblwiPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXIgey4uLnByb3BzfSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChkYXRhLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJMYXllcl8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB5PVwiMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjc5NiA2OTggMjAwIDIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyA3OTYgNjk4IDIwMCAyMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2ZyByZXBsYWNlZC1zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTg4NS4yMDgsNzQ5LjczOXYtNDAuOTQ4QzgzNi4wMTksNzA4Ljc5MSw3OTYsNzQ4LjgxLDc5Niw3OTh2ODkuMjA5aDg5LjIwOFY3OThoLTQ4LjI2ICAgQzgzNi45NDgsNzcxLjM5LDg1OC41OTgsNzQ5LjczOSw4ODUuMjA4LDc0OS43Mzl6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTk2LDc0OS43Mzl2LTQwLjk0OGMtNDkuMTksMC04OS4yMDksNDAuMDE5LTg5LjIwOSw4OS4yMDl2ODkuMjA5SDk5NlY3OThoLTQ4LjI2ICAgQzk0Ny43NCw3NzEuMzksOTY5LjM5LDc0OS43MzksOTk2LDc0OS43Mzl6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhLmRldGFpbHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzaG9ydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCIgZGF0YS1pbWctdXJsPXtkYXRhLmltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntkYXRhLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YS5wcm9mZXNzaW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd2wtZG90c1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibGVmdF9kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0X2ltYWdlIG9uZSB3b3cgZmFkZUluXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1pbWctdXJsPVwiaW1nL3Rlc3RpbW9uaWFscy9pY29uczgtY2VsZWJyYXRlLTQ4LnBuZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXRfaW1hZ2UgdHdvIHdvdyBmYWRlSW5cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1pbWctdXJsPVwiaW1nL3Rlc3RpbW9uaWFscy9pY29uczgtaGVhcnQtNDgucG5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldF9pbWFnZSB0aHJlZSB3b3cgZmFkZUluXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIwLjRzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaW1nLXVybD1cImltZy90ZXN0aW1vbmlhbHMvaWNvbnM4LWZhY2Vib29rLWxpa2UtNTAucG5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldF9pbWFnZSBmb3VyIHdvdyBmYWRlSW5cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT1cIjAuNnNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1pbWctdXJsPVwiaW1nL3Rlc3RpbW9uaWFscy9pY29uczgtY2xhcHBpbmctaGFuZHMtbGlnaHQtc2tpbi10b25lLTQ4LnBuZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXJjbGUgZ3JlZW4gYW5pbVB1bHNlXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXJjbGUgeWVsbG93IGFuaW1QdWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2lyY2xlIGJvcmRlciBhbmltUHVsc2VcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0X2RldGFpbHNcIj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXRfaW1hZ2Ugb25lIHdvdyBmYWRlSW5cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWltZy11cmw9XCJpbWcvdGVzdGltb25pYWxzL2ljb25zOC1idWxsc2V5ZS00OC5wbmdcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0X2ltYWdlIHR3byB3b3cgZmFkZUluXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaW1nLXVybD1cImltZy90ZXN0aW1vbmlhbHMvaWNvbnM4LXNwYXJrbGVzLTQ4LnBuZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXRfaW1hZ2UgdGhyZWUgd293IGZhZGVJblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PVwiMC40c1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWltZy11cmw9XCJpbWcvdGVzdGltb25pYWxzL2ljb25zOC1mb3VyLWxlYWYtY2xvdmVyLTk2LnBuZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXJjbGUgeWVsbG93IGFuaW1QdWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2lyY2xlIHB1cnBsZSBhbmltUHVsc2VcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpcmNsZSBib3JkZXIgYW5pbVB1bHNlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicnVzaF8xIHdvdyBmYWRlSW5SaWdodFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2JydXNoZXMvdGVzdGltb25pYWxzLzEucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTd2lwZXJDb3JlIiwiQXV0b3BsYXkiLCJFZmZlY3RGYWRlIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsImZhdGNoRGF0YSIsInVzZSIsIlRlc3RpbW9uaWFsIiwiZGF0YSIsInNldERhdGEiLCJwcm9wcyIsInNsaWRlc1BlclZpZXciLCJsb29wIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwiZGl2IiwiZGF0YS1hbGlnbiIsInNwYW4iLCJkYXRhLXdvdy1kdXJhdGlvbiIsImJyIiwiY2xhc3NOYW1lIiwibWFwIiwiaSIsInAiLCJkZXRhaWxzIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Testimonial.js\n");

/***/ })

});