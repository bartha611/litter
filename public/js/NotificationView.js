(self["webpackChunk"] = self["webpackChunk"] || []).push([["NotificationView"],{

/***/ "./resources/js/components/Notification/Notification.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/Notification/Notification.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Notification = function Notification(_ref) {
  var type = _ref.type,
      data = _ref.data,
      read_at = _ref.read_at;

  var getTitle = function getTitle(type, name) {
    if (type === 'App\\Notifications\\createComment') {
      return "Recent reply from ".concat(name);
    } else {
      return "Recent like from ".concat(name);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "notification ".concat(!read_at ? "notification--highlight" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "notification__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "notification__photo",
    src: data.photo,
    alt: "User profile photo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "notification__title"
  }, getTitle(type, data.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "notification__body"
  }, data.tweet));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification);

/***/ }),

/***/ "./resources/js/components/Notification/NotificationList.jsx":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Notification/NotificationList.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notification */ "./resources/js/components/Notification/Notification.jsx");




var NotificationList = function NotificationList() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.notifications;
  }),
      loading = _useSelector.loading,
      notifications = _useSelector.notifications;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "notification__list"
  }, !loading && notifications.map(function (notification) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Notification__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: notification.id,
      data: notification.data,
      type: notification.type
    });
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationList);

/***/ }),

/***/ "./resources/js/views/NotificationView.jsx":
/*!*************************************************!*\
  !*** ./resources/js/views/NotificationView.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _state_ducks_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/ducks/notifications */ "./resources/js/state/ducks/notifications/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Notification_NotificationList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Notification/NotificationList */ "./resources/js/components/Notification/NotificationList.jsx");





var NavigationView = function NavigationView() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_state_ducks_notifications__WEBPACK_IMPORTED_MODULE_1__.fetchNotification)('/api/notification'));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Notification_NotificationList__WEBPACK_IMPORTED_MODULE_3__.default, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationView);

/***/ })

}]);