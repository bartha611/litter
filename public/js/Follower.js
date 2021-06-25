(self["webpackChunk"] = self["webpackChunk"] || []).push([["Follower"],{

/***/ "./resources/js/components/User/User.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/User/User.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _state_ducks_user_userThunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/ducks/user/userThunk */ "./resources/js/state/ducks/user/userThunk.js");






/**
 * User component that provides User information in addition to a Following Button
 *
 * @param {Object} props - Component props
 * @param {Object} props.user - User object
 * @param {number} props.user.id - Id of user
 * @param {string} props.user.name - Name of user
 * @param {string} props.user.username - Username of user
 * @param {string} props.user.profile_photo - Profile photo user
 * @param {string|null} props.user.biography - Biography of user.  Null if user has no biography
 * @param {number|null} props.user.followed_user - Following id if logged-in user follows person otherwise null
 */

var User = function User(_ref) {
  var user = _ref.user;

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.auth;
  }),
      AuthUser = _useSelector.user;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();

  var submit = function submit(_ref2) {
    var followed_user = _ref2.followed_user,
        username = _ref2.username;

    if (followed_user > 0) {
      dispatch((0,_state_ducks_user_userThunk__WEBPACK_IMPORTED_MODULE_4__.fetchUsers)("/api/follower/".concat(followed_user), 'DELETE', 'DELETE_FOLLOWER'));
    } else {
      dispatch((0,_state_ducks_user_userThunk__WEBPACK_IMPORTED_MODULE_4__.fetchUsers)("/api/user/".concat(username, "/follower"), 'POST', 'CREATE_FOLLOWER'));
    }
  };

  var _onClick = function _onClick(e) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.split)(e.target.className, ' ')[0] !== 'follower__button') {
      history.push("/".concat(user.username));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "user",
    key: user.id,
    onClick: function onClick(e) {
      return _onClick(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "user__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: user.profile_photo,
    alt: "User Profile Photo",
    className: "user__photo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "user__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "user__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "user__user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "user__name"
  }, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "user__username"
  }, user.username)), user.id !== AuthUser.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return submit(user);
    },
    className: "follower__button follower__button--".concat(user.followed_user === null ? 'follow' : 'unfollow')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "user__biography"
  }, user.biography)));
};

User.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    username: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    profile_photo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    biography: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    followed_user: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./resources/js/components/User/UserList.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/User/UserList.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./resources/js/components/User/User.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




var UserList = function UserList() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.user;
  }),
      users = _useSelector.users;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "users"
  }, users.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_User__WEBPACK_IMPORTED_MODULE_1__.default, {
      user: user,
      key: user.id
    });
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserList);

/***/ }),

/***/ "./resources/js/utils/useFetchFollower.jsx":
/*!*************************************************!*\
  !*** ./resources/js/utils/useFetchFollower.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFetchFollowers": () => (/* binding */ useFetchFollowers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_ducks_user_userThunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/ducks/user/userThunk */ "./resources/js/state/ducks/user/userThunk.js");



var useFetchFollowers = function useFetchFollowers(name, type) {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.user;
  }),
      cursor = _useSelector.cursor;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var url = "/api/user/".concat(name, "/").concat(type);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleScroll = function handleScroll() {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !cursor) return;
      dispatch((0,_state_ducks_user_userThunk__WEBPACK_IMPORTED_MODULE_2__.fetchUsers)("".concat(url, "?cursor=").concat(followers.cursor), 'GET', 'PAGINATE'));
    };

    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  });
};

/***/ }),

/***/ "./resources/js/views/FollowerView.jsx":
/*!*********************************************!*\
  !*** ./resources/js/views/FollowerView.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_User_UserList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/User/UserList */ "./resources/js/components/User/UserList.jsx");
/* harmony import */ var _state_ducks_user_userThunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/ducks/user/userThunk */ "./resources/js/state/ducks/user/userThunk.js");
/* harmony import */ var _utils_useFetchFollower__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useFetchFollower */ "./resources/js/utils/useFetchFollower.jsx");







var FollowerView = function FollowerView() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  var arr = location.pathname.split('/');
  var type = arr[arr.length - 1];

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
      name = _useParams.name;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_state_ducks_user_userThunk__WEBPACK_IMPORTED_MODULE_3__.fetchUsers)("/api/user/".concat(name, "/").concat(type), 'GET', 'READ'));
  }, []);
  (0,_utils_useFetchFollower__WEBPACK_IMPORTED_MODULE_4__.useFetchFollowers)(name, type);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_User_UserList__WEBPACK_IMPORTED_MODULE_2__.default, null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowerView);

/***/ })

}]);