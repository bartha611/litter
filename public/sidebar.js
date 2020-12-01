(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidebar"],{

/***/ "./resources/js/components/Sidebar.jsx":
/*!*********************************************!*\
  !*** ./resources/js/components/Sidebar.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.es.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\n\nvar Sidebar = function Sidebar() {\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"useHistory\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.auth;\n  }),\n      user = _useSelector.user;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"sidebar__nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"sidebar__item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"sidebar__button\",\n    onClick: function onClick() {\n      return history.push('/');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[\"FontAwesomeIcon\"], {\n    color: \"white\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__[\"faHouseUser\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"sidebar__title\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"sidebar__item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"sidebar__button\",\n    onClick: function onClick() {\n      return history.push('/search');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[\"FontAwesomeIcon\"], {\n    color: \"white\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__[\"faSearch\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"sidebar__title\"\n  }, \"Search\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"sidebar__item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"sidebar__button\",\n    onClick: function onClick() {\n      return history.push('/notifications');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[\"FontAwesomeIcon\"], {\n    color: \"white\",\n    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faBell\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"sidebar__title\"\n  }, \"Notifications\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"sidebar__item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"sidebar__button\",\n    onClick: function onClick() {\n      return history.push('/messages');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[\"FontAwesomeIcon\"], {\n    color: \"white\",\n    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faEnvelope\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"sidebar__title\"\n  }, \"Messages\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"sidebar__item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"sidebar__button\",\n    onClick: function onClick() {\n      return history.push(\"/\".concat(user.username));\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[\"FontAwesomeIcon\"], {\n    color: \"white\",\n    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faUser\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"sidebar__title\"\n  }, \"Profile\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9TaWRlYmFyLmpzeD80NGRlIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhdXRoIiwidXNlciIsInB1c2giLCJmYUhvdXNlVXNlciIsImZhU2VhcmNoIiwiZmFCZWxsIiwiZmFFbnZlbG9wZSIsInVzZXJuYW1lIiwiZmFVc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsTUFBTUMsT0FBTyxHQUFHQyxtRUFBVSxFQUExQjs7QUFEb0IscUJBRUhDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLEdBQU4sQ0FGUjtBQUFBLE1BRVpDLElBRlksZ0JBRVpBLElBRlk7O0FBR3BCLHNCQUNFLHFGQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsa0JBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxrQkFDRTtBQUFRLGFBQVMsRUFBQyxpQkFBbEI7QUFBb0MsV0FBTyxFQUFFO0FBQUEsYUFBTUwsT0FBTyxDQUFDTSxJQUFSLENBQWEsR0FBYixDQUFOO0FBQUE7QUFBN0Msa0JBQ0UsMkRBQUMsOEVBQUQ7QUFBaUIsU0FBSyxFQUFDLE9BQXZCO0FBQStCLFFBQUksRUFBRUMsNkVBQVdBO0FBQWhELElBREYsQ0FERixlQUlFO0FBQU0sYUFBUyxFQUFDO0FBQWhCLFlBSkYsQ0FERixlQU9FO0FBQUksYUFBUyxFQUFDO0FBQWQsa0JBQ0U7QUFDRSxhQUFTLEVBQUMsaUJBRFo7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNUCxPQUFPLENBQUNNLElBQVIsQ0FBYSxTQUFiLENBQU47QUFBQTtBQUZYLGtCQUlFLDJEQUFDLDhFQUFEO0FBQWlCLFNBQUssRUFBQyxPQUF2QjtBQUErQixRQUFJLEVBQUVFLDBFQUFRQTtBQUE3QyxJQUpGLENBREYsZUFPRTtBQUFNLGFBQVMsRUFBQztBQUFoQixjQVBGLENBUEYsZUFnQkU7QUFBSSxhQUFTLEVBQUM7QUFBZCxrQkFDRTtBQUNFLGFBQVMsRUFBQyxpQkFEWjtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU1SLE9BQU8sQ0FBQ00sSUFBUixDQUFhLGdCQUFiLENBQU47QUFBQTtBQUZYLGtCQUlFLDJEQUFDLDhFQUFEO0FBQWlCLFNBQUssRUFBQyxPQUF2QjtBQUErQixRQUFJLEVBQUVHLDBFQUFNQTtBQUEzQyxJQUpGLENBREYsZUFPRTtBQUFNLGFBQVMsRUFBQztBQUFoQixxQkFQRixDQWhCRixlQXlCRTtBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNFO0FBQ0UsYUFBUyxFQUFDLGlCQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTVQsT0FBTyxDQUFDTSxJQUFSLENBQWEsV0FBYixDQUFOO0FBQUE7QUFGWCxrQkFJRSwyREFBQyw4RUFBRDtBQUFpQixTQUFLLEVBQUMsT0FBdkI7QUFBK0IsUUFBSSxFQUFFSSw4RUFBVUE7QUFBL0MsSUFKRixDQURGLGVBT0U7QUFBTSxhQUFTLEVBQUM7QUFBaEIsZ0JBUEYsQ0F6QkYsZUFrQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxrQkFDRTtBQUNFLGFBQVMsRUFBQyxpQkFEWjtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU1WLE9BQU8sQ0FBQ00sSUFBUixZQUFpQkQsSUFBSSxDQUFDTSxRQUF0QixFQUFOO0FBQUE7QUFGWCxrQkFJRSwyREFBQyw4RUFBRDtBQUFpQixTQUFLLEVBQUMsT0FBdkI7QUFBK0IsUUFBSSxFQUFFQywwRUFBTUE7QUFBM0MsSUFKRixDQURGLGVBT0U7QUFBTSxhQUFTLEVBQUM7QUFBaEIsZUFQRixDQWxDRixDQURGLENBREY7QUFnREQsQ0FuREQ7O0FBcURlYixzRUFBZiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1NpZGViYXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUhvdXNlVXNlciwgZmFTZWFyY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHtcbiAgZmFCZWxsLFxuICBmYUVudmVsb3BlLFxuICBmYVVzZXJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyX19uYXZcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX2l0ZW1cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNpZGViYXJfX2J1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnLycpfT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY29sb3I9XCJ3aGl0ZVwiIGljb249e2ZhSG91c2VVc2VyfSAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpZGViYXJfX3RpdGxlXCI+SG9tZTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX2l0ZW1cIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlYmFyX19idXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGlzdG9yeS5wdXNoKCcvc2VhcmNoJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjb2xvcj1cIndoaXRlXCIgaWNvbj17ZmFTZWFyY2h9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2lkZWJhcl9fdGl0bGVcIj5TZWFyY2g8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19pdGVtXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lkZWJhcl9fYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnL25vdGlmaWNhdGlvbnMnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNvbG9yPVwid2hpdGVcIiBpY29uPXtmYUJlbGx9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2lkZWJhcl9fdGl0bGVcIj5Ob3RpZmljYXRpb25zPC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9faXRlbVwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZGViYXJfX2J1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LnB1c2goJy9tZXNzYWdlcycpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY29sb3I9XCJ3aGl0ZVwiIGljb249e2ZhRW52ZWxvcGV9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2lkZWJhcl9fdGl0bGVcIj5NZXNzYWdlczwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX2l0ZW1cIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlYmFyX19idXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGlzdG9yeS5wdXNoKGAvJHt1c2VyLnVzZXJuYW1lfWApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY29sb3I9XCJ3aGl0ZVwiIGljb249e2ZhVXNlcn0gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaWRlYmFyX190aXRsZVwiPlByb2ZpbGU8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/components/Sidebar.jsx\n");

/***/ })

}]);