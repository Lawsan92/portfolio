"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["client_src_components_pages_NavBar_Logo_js"],{

/***/ "./client/src/components/pages/NavBar/Logo.js":
/*!****************************************************!*\
  !*** ./client/src/components/pages/NavBar/Logo.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/index-7dbf758c.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _ThemeContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ThemeContext.js */ \"./client/src/components/ThemeContext.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Box = function Box() {\n  var darkTheme = (0,_ThemeContext_js__WEBPACK_IMPORTED_MODULE_1__.useTheme)();\n  var texture = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load('https://res.cloudinary.com/darp0mj9i/image/upload/v1673782343/icons/Screen_Shot_2023-01-15_at_05.32.19_dl0qkv.jpg');\n  var darkTexture = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load('https://res.cloudinary.com/darp0mj9i/image/upload/v1675142019/icons/Screen_Shot_2023-01-30_at_23.13.35_wbbr6b.jpg');\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth),\n    _useState2 = _slicedToArray(_useState, 2),\n    windowWidth = _useState2[0],\n    getWidth = _useState2[1];\n  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.A)(function () {\n    ref.current.rotation.x += 0.005;\n    ref.current.rotation.y += 0.015;\n    ref.current.rotation.z += 0.01;\n  });\n  var handleResize = function handleResize() {\n    window.addEventListener('resize', function () {\n      getWidth(windowWidth.innerWidth);\n    });\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    handleResize();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"mesh\", {\n    ref: ref,\n    scale: window.innerWidth < 450 ? 3.5 : 2.5\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"boxGeometry\", {\n    args: [1, 1, 1]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meshStandardMaterial\", {\n    map: !darkTheme ? texture : darkTexture\n  }));\n};\nvar Logo = function Logo() {\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n      height: window.innerWidth < 450 ? 260 : 160,\n      width: window.innerWidth < 450 ? 260 : 160\n    }),\n    _useState4 = _slicedToArray(_useState3, 2),\n    canvasSize = _useState4[0],\n    getSize = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n      height: 160,\n      width: 160\n    }),\n    _useState6 = _slicedToArray(_useState5, 2),\n    canvasContainer = _useState6[0],\n    getMeasure = _useState6[1];\n  var styles = {\n    container: {\n      display: 'flex',\n      justifyContent: 'center',\n      height: \"\".concat(canvasContainer.height, \"px\"),\n      width: \"\".concat(canvasContainer.width, \"px\")\n    }\n  };\n  var handleLogoResize = function handleLogoResize() {\n    window.addEventListener('resize', function () {\n      var canvasHeight = window.getComputedStyle(document.querySelector(\".navbar_logo\")).height;\n      var canvasWidth = window.getComputedStyle(document.querySelector(\".navbar_logo\")).width;\n      var navbarHeight = window.getComputedStyle(document.querySelector(\".navbar\")).height;\n      var navbarWidth = window.getComputedStyle(document.querySelector(\".navbar\")).width;\n      var CanvasLargerThanNavbar = Math.floor(window.innerWidth / 10) < 120;\n      if (CanvasLargerThanNavbar) {\n        getMeasure(_objectSpread(_objectSpread({}, canvasContainer), {}, {\n          height: navbarWidth,\n          width: navbarWidth\n        }));\n        getSize(_objectSpread(_objectSpread({}, canvasSize), {}, {\n          height: navbarWidth,\n          width: navbarWidth\n        }));\n      }\n\n      // console.log('navbarWidth:', navbarWidth, 'navbarHeight:', navbarHeight);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    handleLogoResize();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"navbar_logo\",\n    style: styles.container\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"loading...\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.Canvas, {\n    style: {\n      height: \"\".concat(canvasContainer.height, \"px\"),\n      width: \"\".concat(canvasContainer.width, \"px\")\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ambientLight\", {\n    intensity: 1\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"spotLight\", {\n    position: [10, 10, 10],\n    angle: 0.15,\n    penumbra: 1\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"pointLight\", {\n    position: [-10, -10, -10]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Box, {\n    position: [-1.2, 0, 0]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Box, {\n    position: [1.2, 0, 0]\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);\n\n//# sourceURL=webpack://portfolio/./client/src/components/pages/NavBar/Logo.js?");

/***/ })

}]);