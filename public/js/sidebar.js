(self["webpackChunk"] = self["webpackChunk"] || []).push([["sidebar"],{

/***/ "./resources/js/components/Sidebar.jsx":
/*!*********************************************!*\
  !*** ./resources/js/components/Sidebar.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var Sidebar = function Sidebar() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.auth;
  }),
      user = _useSelector.user;

  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.notifications;
  }),
      notifications = _useSelector2.notifications;

  var totalUnreadNotifications = function totalUnreadNotifications(notifications) {
    var total = 0;

    var _iterator = _createForOfIteratorHelper(notifications),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var note = _step.value;

        if (!note.read_at) {
          total += 1;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return total;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "sidebar__nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar__item",
    onClick: function onClick() {
      return history.push('/');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar__button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    color: "white",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHouseUser
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sidebar__title"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar__item",
    onClick: function onClick() {
      return history.push('/search');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar__button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    color: "white",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sidebar__title"
  }, "Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar__item",
    onClick: function onClick() {
      return history.push('/notifications');
    }
  }, totalUnreadNotifications(notifications) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar__notification"
  }, totalUnreadNotifications(notifications)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar__button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    color: "white",
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faBell
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sidebar__title"
  }, "Notifications")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar__item",
    onClick: function onClick() {
      return history.push('/messages');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar__button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    color: "white",
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faEnvelope
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sidebar__title"
  }, "Messages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "sidebar__item",
    onClick: function onClick() {
      return history.push("/".concat(user.username));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar__button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    color: "white",
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUser
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sidebar__title"
  }, "Profile"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ })

}]);