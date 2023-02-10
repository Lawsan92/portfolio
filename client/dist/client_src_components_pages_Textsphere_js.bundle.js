"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["client_src_components_pages_Textsphere_js"],{

/***/ "./client/src/components/pages/Textsphere.js":
/*!***************************************************!*\
  !*** ./client/src/components/pages/Textsphere.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/icons.js */ \"./client/src/data/icons.js\");\n/* harmony import */ var _frank_mayer_react_tag_cloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frank-mayer/react-tag-cloud */ \"./node_modules/@frank-mayer/react-tag-cloud/module.js\");\n/* harmony import */ var _ThemeContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ThemeContext.js */ \"./client/src/components/ThemeContext.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Textsphere = function Textsphere() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth < 450 ? Math.floor(window.innerWidth * 0.5) : Math.floor(window.innerWidth * 0.18)),\n    _useState2 = _slicedToArray(_useState, 2),\n    sphereRadius = _useState2[0],\n    getSphereRadius = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth < 450 ? Math.floor(window.innerWidth * 0.18 * .2) : Math.floor(window.innerWidth * 0.18 * .1)),\n    _useState4 = _slicedToArray(_useState3, 2),\n    fontSize = _useState4[0],\n    getFontSize = _useState4[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    window.addEventListener('resize', function () {\n      if (window.innerWidth < 450) {\n        getSphereRadius(Math.floor(window.innerWidth * 0.5));\n        getFontSize(Math.floor(window.innerWidth * 0.2 * 0.2));\n      } else {\n        getSphereRadius(Math.floor(window.innerWidth * 0.2));\n        getFontSize(Math.floor(window.innerWidth * 0.2 * 0.1));\n      }\n    });\n  }, []);\n  var darkTheme = (0,_ThemeContext_js__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n  var tags = ['JavaScript', 'CSS', 'HTML', 'React', 'Redux', 'Sass', 'React-Router-Dom', 'Git', 'Node.js', 'MySQL', 'PostgreSQL', 'MongoDB', 'Express', 'Jest', 'Webpack', 'threejs', 'AWS', 'npm', 'nano', 'vim', 'K6', 'Bootstrap', 'Loader.io', 'Data Structures', 'Algorithms'];\n  var options = {\n    radius: sphereRadius,\n    maxSpeed: 'medium',\n    initSpeed: 'medium',\n    direction: 135,\n    keep: true,\n    useContainerInlineStyles: true\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_frank_mayer_react_tag_cloud__WEBPACK_IMPORTED_MODULE_2__.TagCloud, {\n    options: options,\n    style: {\n      fontSize: \"\".concat(fontSize, \"px\"),\n      zIndex: 1\n    }\n  }, tags);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textsphere);\n\n//# sourceURL=webpack://portfolio/./client/src/components/pages/Textsphere.js?");

/***/ })

}]);