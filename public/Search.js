(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Search"],{

/***/ "./resources/js/components/searchBar.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/searchBar.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_ducks_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/ducks/search */ \"./resources/js/state/ducks/search/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar SearchBar = function SearchBar() {\n  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"useLocation\"])();\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"useHistory\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setSearch('');\n  }, []);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState2 = _slicedToArray(_useState, 2),\n      search = _useState2[0],\n      setSearch = _useState2[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.search;\n  }),\n      users = _useSelector.users;\n\n  var submit = function submit(event) {\n    setSearch(event.target.value);\n\n    if (event.target.value.length > 0) {\n      dispatch(Object(_state_ducks_search__WEBPACK_IMPORTED_MODULE_4__[\"fetchUsers\"])(event.target.value));\n    }\n  };\n\n  var isFollower = function isFollower(user) {\n    if (user.follower_user === '1') {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"search__check\"\n      }, \"\\u2714\");\n    } else {\n      return '';\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"search\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[\"FontAwesomeIcon\"], {\n    color: \"blue\",\n    className: \"search__icon\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__[\"faSearch\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"search__input\",\n    onChange: function onChange(e) {\n      return submit(e);\n    },\n    placeholder: \"Search...\",\n    value: search\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"search__menu\"\n  }, search.length > 0 && users.map(function (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"search__item border-bottom-0\",\n      key: user.id,\n      onClick: function onClick() {\n        return history.push(\"/\".concat(user.username));\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"search__photo\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: user.profile_photo,\n      alt: \"User Profile Photo\",\n      className: \"search__image\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"search__body\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"search__name\"\n    }, user.name, isFollower(user)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"search__username\"\n    }, \"@\", user.username)));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9zZWFyY2hCYXIuanN4Pzc0ZTciXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwibG9jYXRpb24iLCJ1c2VMb2NhdGlvbiIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwidXNlRWZmZWN0Iiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJzZWFyY2giLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXJzIiwic3VibWl0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsImZldGNoVXNlcnMiLCJpc0ZvbGxvd2VyIiwidXNlciIsImZvbGxvd2VyX3VzZXIiLCJmYVNlYXJjaCIsImUiLCJtYXAiLCJpZCIsInB1c2giLCJ1c2VybmFtZSIsInByb2ZpbGVfcGhvdG8iLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLE1BQU1DLFFBQVEsR0FBR0Msb0VBQVcsRUFBNUI7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLG1FQUFVLEVBQTFCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxhQUFTLENBQUMsRUFBRCxDQUFUO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFKc0Isa0JBUU1DLHNEQUFRLENBQUMsRUFBRCxDQVJkO0FBQUE7QUFBQSxNQVFmQyxNQVJlO0FBQUEsTUFRUEYsU0FSTzs7QUFTdEIsTUFBTUcsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFUc0IscUJBVUpDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0osTUFBVjtBQUFBLEdBQU4sQ0FWUDtBQUFBLE1BVWRLLEtBVmMsZ0JBVWRBLEtBVmM7O0FBWXRCLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUN0QlQsYUFBUyxDQUFDUyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFUOztBQUNBLFFBQUlGLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFiLENBQW1CQyxNQUFuQixHQUE0QixDQUFoQyxFQUFtQztBQUNqQ1QsY0FBUSxDQUFDVSxzRUFBVSxDQUFDSixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFYLENBQVI7QUFDRDtBQUNGLEdBTEQ7O0FBTUEsTUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsSUFBSSxFQUFJO0FBQ3pCLFFBQUlBLElBQUksQ0FBQ0MsYUFBTCxLQUF1QixHQUEzQixFQUFnQztBQUM5QiwwQkFBTztBQUFNLGlCQUFTLEVBQUM7QUFBaEIsa0JBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLEVBQVA7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSwyREFBQyw4RUFBRDtBQUFpQixTQUFLLEVBQUMsTUFBdkI7QUFBOEIsYUFBUyxFQUFDLGNBQXhDO0FBQXVELFFBQUksRUFBRUMsMEVBQVFBO0FBQXJFLElBREYsZUFFRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLGVBRlo7QUFHRSxZQUFRLEVBQUUsa0JBQUFDLENBQUM7QUFBQSxhQUFJVixNQUFNLENBQUNVLENBQUQsQ0FBVjtBQUFBLEtBSGI7QUFJRSxlQUFXLEVBQUMsV0FKZDtBQUtFLFNBQUssRUFBRWhCO0FBTFQsSUFGRixlQVNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0EsTUFBTSxDQUFDVSxNQUFQLEdBQWdCLENBQWhCLElBQ0NMLEtBQUssQ0FBQ1ksR0FBTixDQUFVLFVBQUFKLElBQUksRUFBSTtBQUNoQix3QkFDRTtBQUNFLGVBQVMsRUFBQyw4QkFEWjtBQUVFLFNBQUcsRUFBRUEsSUFBSSxDQUFDSyxFQUZaO0FBR0UsYUFBTyxFQUFFO0FBQUEsZUFBTXZCLE9BQU8sQ0FBQ3dCLElBQVIsWUFBaUJOLElBQUksQ0FBQ08sUUFBdEIsRUFBTjtBQUFBO0FBSFgsb0JBS0U7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDRTtBQUNFLFNBQUcsRUFBRVAsSUFBSSxDQUFDUSxhQURaO0FBRUUsU0FBRyxFQUFDLG9CQUZOO0FBR0UsZUFBUyxFQUFDO0FBSFosTUFERixDQUxGLGVBWUU7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0dSLElBQUksQ0FBQ1MsSUFEUixFQUVHVixVQUFVLENBQUNDLElBQUQsQ0FGYixDQURGLGVBS0U7QUFBSyxlQUFTLEVBQUM7QUFBZixZQUFvQ0EsSUFBSSxDQUFDTyxRQUF6QyxDQUxGLENBWkYsQ0FERjtBQXNCRCxHQXZCRCxDQUZKLENBVEYsQ0FERjtBQXVDRCxDQWpFRDs7QUFtRWU1Qix3RUFBZiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3NlYXJjaEJhci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBmZXRjaFVzZXJzIH0gZnJvbSAnLi4vc3RhdGUvZHVja3Mvc2VhcmNoJztcbmltcG9ydCB7IHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IFNlYXJjaEJhciA9ICgpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VhcmNoKCcnKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyB1c2VycyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2VhcmNoKTtcblxuICBjb25zdCBzdWJtaXQgPSBldmVudCA9PiB7XG4gICAgc2V0U2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBkaXNwYXRjaChmZXRjaFVzZXJzKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaXNGb2xsb3dlciA9IHVzZXIgPT4ge1xuICAgIGlmICh1c2VyLmZvbGxvd2VyX3VzZXIgPT09ICcxJykge1xuICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaF9fY2hlY2tcIj4mIzEwMDA0Ozwvc3Bhbj47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjb2xvcj1cImJsdWVcIiBjbGFzc05hbWU9XCJzZWFyY2hfX2ljb25cIiBpY29uPXtmYVNlYXJjaH0gLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaF9faW5wdXRcIlxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzdWJtaXQoZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcbiAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaF9fbWVudVwiPlxuICAgICAgICB7c2VhcmNoLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICB1c2Vycy5tYXAodXNlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoX19pdGVtIGJvcmRlci1ib3R0b20tMFwiXG4gICAgICAgICAgICAgICAga2V5PXt1c2VyLmlkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaChgLyR7dXNlci51c2VybmFtZX1gKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX19waG90b1wiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3VzZXIucHJvZmlsZV9waG90b31cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiVXNlciBQcm9maWxlIFBob3RvXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoX19pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaF9fbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICB7dXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICB7aXNGb2xsb3dlcih1c2VyKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfX3VzZXJuYW1lXCI+QHt1c2VyLnVzZXJuYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/components/searchBar.jsx\n");

/***/ })

}]);