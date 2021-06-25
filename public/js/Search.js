(self["webpackChunk"] = self["webpackChunk"] || []).push([["Search"],{

/***/ "./resources/js/components/searchBar.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/searchBar.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_ducks_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/ducks/user */ "./resources/js/state/ducks/user/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var SearchBar = function SearchBar() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.user;
  }),
      users = _useSelector.search;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setSearch('');
  }, []);

  var submit = function submit(event) {
    setSearch(event.target.value);

    if (event.target.value.length > 0) {
      dispatch((0,_state_ducks_user__WEBPACK_IMPORTED_MODULE_3__.fetchUsers)("/api/user?search=".concat(event.target.value), 'GET', 'SEARCH'));
    }
  };

  var isFollower = function isFollower(user) {
    if (user.follower_user === '1') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "search__check"
      }, "\u2714");
    } else {
      return '';
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    color: "blue",
    className: "search__icon",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "search__input",
    onChange: function onChange(e) {
      return submit(e);
    },
    placeholder: "Search...",
    value: search
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "search__menu"
  }, search.length > 0 && users.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "search__item border-bottom-0",
      key: user.id,
      onClick: function onClick() {
        return history.push("/".concat(user.username));
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "search__photo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: user.profile_photo,
      alt: "User Profile Photo",
      className: "search__image"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "search__body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "search__name"
    }, user.name, isFollower(user)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "search__username"
    }, "@", user.username)));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

/***/ })

}]);