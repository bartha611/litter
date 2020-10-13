(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Profilebackground"],{

/***/ "./resources/js/components/Profile/Header.jsx":
/*!****************************************************!*\
  !*** ./resources/js/components/Profile/Header.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Header = function Header(_ref) {\n  var user = _ref.user;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"header__name\"\n  }, user.name), user.tweets_count ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"header__tweets_count text-muted\"\n  }, user.tweets_count, \" Tweets\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"header__username text-muted\"\n  }, \"@\", user.name));\n};\n\nHeader.propTypes = {\n  user: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({\n    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,\n    name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,\n    tweets_count: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number\n  })\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9maWxlL0hlYWRlci5qc3g/YjJjMyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VyIiwibmFtZSIsInR3ZWV0c19jb3VudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwiaWQiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzNCLHNCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUErQkEsSUFBSSxDQUFDQyxJQUFwQyxDQURGLEVBRUdELElBQUksQ0FBQ0UsWUFBTCxnQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dGLElBQUksQ0FBQ0UsWUFEUixZQURELGdCQUtDO0FBQUssYUFBUyxFQUFDO0FBQWYsVUFBK0NGLElBQUksQ0FBQ0MsSUFBcEQsQ0FQSixDQURGO0FBWUQsQ0FiRDs7QUFlQUYsTUFBTSxDQUFDSSxTQUFQLEdBQW1CO0FBQ2pCSCxNQUFJLEVBQUVJLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDcEJDLE1BQUUsRUFBRUYsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkMsVUFERDtBQUVwQlAsUUFBSSxFQUFFRyxpREFBUyxDQUFDSyxNQUFWLENBQWlCRCxVQUZIO0FBR3BCTixnQkFBWSxFQUFFRSxpREFBUyxDQUFDRztBQUhKLEdBQWhCO0FBRFcsQ0FBbkI7QUFRZVIscUVBQWYiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9maWxlL0hlYWRlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSGVhZGVyID0gKHsgdXNlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19uYW1lXCI+e3VzZXIubmFtZX08L2Rpdj5cbiAgICAgIHt1c2VyLnR3ZWV0c19jb3VudCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3R3ZWV0c19jb3VudCB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAge3VzZXIudHdlZXRzX2NvdW50fSBUd2VldHNcbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdXNlcm5hbWUgdGV4dC1tdXRlZFwiPkB7dXNlci5uYW1lfTwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHVzZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdHdlZXRzX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/components/Profile/Header.jsx\n");

/***/ }),

/***/ "./resources/js/components/profileBackground.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/profileBackground.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Profile_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Profile/Header */ \"./resources/js/components/Profile/Header.jsx\");\n\n\n\n\n\nvar Background = function Background() {\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.tweets;\n  }),\n      user = _useSelector.user;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"profile\"\n  }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Profile_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    user: user\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"profile__background\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"profile__backgroundImage\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"profile__image\",\n    src: user.profile_photo,\n    alt: \"User profile photo\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wcm9maWxlQmFja2dyb3VuZC5qc3g/NzE2NiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInR3ZWV0cyIsInVzZXIiLCJwcm9maWxlX3Bob3RvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQSxxQkFDTkMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxNQUFWO0FBQUEsR0FBTixDQURMO0FBQUEsTUFDZkMsSUFEZSxnQkFDZkEsSUFEZTs7QUFFdkIsc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHQSxJQUFJLGlCQUNILHFGQUNFLDJEQUFDLHVEQUFEO0FBQVEsUUFBSSxFQUFFQTtBQUFkLElBREYsZUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFERixlQUVFO0FBQ0UsYUFBUyxFQUFDLGdCQURaO0FBRUUsT0FBRyxFQUFFQSxJQUFJLENBQUNDLGFBRlo7QUFHRSxPQUFHLEVBQUM7QUFITixJQUZGLENBRkYsQ0FGSixDQURGO0FBaUJELENBbkJEOztBQXFCZUwseUVBQWYiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wcm9maWxlQmFja2dyb3VuZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL1Byb2ZpbGUvSGVhZGVyJztcblxuY29uc3QgQmFja2dyb3VuZCA9ICgpID0+IHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS50d2VldHMpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxuICAgICAge3VzZXIgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkZXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVfX2JhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZV9fYmFja2dyb3VuZEltYWdlXCI+PC9kaXY+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2ZpbGVfX2ltYWdlXCJcbiAgICAgICAgICAgICAgc3JjPXt1c2VyLnByb2ZpbGVfcGhvdG99XG4gICAgICAgICAgICAgIGFsdD1cIlVzZXIgcHJvZmlsZSBwaG90b1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/components/profileBackground.jsx\n");

/***/ })

}]);