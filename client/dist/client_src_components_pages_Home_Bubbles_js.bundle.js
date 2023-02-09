"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["client_src_components_pages_Home_Bubbles_js"],{

/***/ "./client/src/components/pages/Home/Bubbles.js":
/*!*****************************************************!*\
  !*** ./client/src/components/pages/Home/Bubbles.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/icons.js */ \"./client/src/data/icons.js\");\n/* harmony import */ var _ThemeContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ThemeContext.js */ \"./client/src/components/ThemeContext.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar Bubbles = function Bubbles() {\n  var darkTheme = (0,_ThemeContext_js__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    isClicked = _useState2[0],\n    setClick = _useState2[1];\n  var toggleClick = function toggleClick(i) {\n    setClick(function (prevState) {\n      return _objectSpread(_objectSpread({}, isClicked), {}, _defineProperty({}, i, !prevState[i]));\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"home_assets\"\n  }, !isClicked[1] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: darkTheme ? 'home_assets circ1 dark' : 'home_assets circ1',\n    onClick: function onClick() {\n      toggleClick(1);\n    }\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small\",\n    style: {\n      marginTop: '2em'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small circ1\",\n    onClick: function onClick() {\n      toggleClick(1);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"small img1\",\n    src: \"https://res.cloudinary.com/darp0mj9i/image/upload/v1667314229/icons/javascript-seeklogo.com_jplqiw.svg\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small circ2\",\n    onClick: function onClick() {\n      toggleClick(1);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"small img2\",\n    src: \"https://res.cloudinary.com/darp0mj9i/image/upload/v1667314518/icons/icons8-html-5_ydkc4r.svg\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small circ3\",\n    onClick: function onClick() {\n      toggleClick(1);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"small img3\",\n    src: \"https://res.cloudinary.com/darp0mj9i/image/upload/v1667312947/icons/icons8-css3-color/icons8-css3-240_nc7v0r.svg\"\n  }))), !isClicked[2] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: darkTheme ? 'home_assets circ2 dark' : 'home_assets circ2',\n    onClick: function onClick() {\n      toggleClick(2);\n    }\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small2 circ1\",\n    onClick: function onClick() {\n      toggleClick(2);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"small2 img1\",\n    src: \"https://res.cloudinary.com/darp0mj9i/image/upload/v1667313722/icons/icons8-react-native_muuptm.svg\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small2 circ2\",\n    onClick: function onClick() {\n      toggleClick(2);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"small2 img2\",\n    src: \"https://res.cloudinary.com/darp0mj9i/image/upload/v1667314438/icons/icons8-webpack_ueency.svg\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small2 circ3\",\n    onClick: function onClick() {\n      toggleClick(2);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"small2 img3\",\n    src: \"https://res.cloudinary.com/darp0mj9i/image/upload/v1667313787/icons/icons8-node-js_atum9p.svg\"\n  }))), !isClicked[3] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: darkTheme ? 'home_assets circ3 dark' : 'home_assets circ3',\n    onClick: function onClick() {\n      toggleClick(3);\n    }\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small3 circ1\",\n    onClick: function onClick() {\n      toggleClick(3);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"small3 img1\",\n    src: \"https://res.cloudinary.com/darp0mj9i/image/upload/v1667314161/icons/icons8-express-js_hljtpv.svg\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small3 circ2\",\n    onClick: function onClick() {\n      toggleClick(3);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"small3 img2\",\n    src: \"https://res.cloudinary.com/darp0mj9i/image/upload/v1667314067/icons/icons8-mongodb_hsiufh.svg\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small3 circ3\",\n    onClick: function onClick() {\n      toggleClick(3);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"small3 img3\",\n    src: \"https://res.cloudinary.com/darp0mj9i/image/upload/v1667314370/icons/jest-seeklogo.com_eyoiqb.svg\"\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bubbles);\n\n//# sourceURL=webpack://portfolio/./client/src/components/pages/Home/Bubbles.js?");

/***/ })

}]);