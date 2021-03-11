(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TweetUserView"],{

/***/ "./resources/js/components/User/User.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/User/User.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _state_ducks_user_userThunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/ducks/user/userThunk */ "./resources/js/state/ducks/user/userThunk.js");






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

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.auth;
  }),
      AuthUser = _useSelector.user;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();

  var submit = function submit(_ref2) {
    var followed_user = _ref2.followed_user,
        username = _ref2.username;

    if (followed_user > 0) {
      dispatch(Object(_state_ducks_user_userThunk__WEBPACK_IMPORTED_MODULE_5__["fetchUsers"])("/api/follower/".concat(followed_user), 'DELETE', 'DELETE_FOLLOWER'));
    } else {
      dispatch(Object(_state_ducks_user_userThunk__WEBPACK_IMPORTED_MODULE_5__["fetchUsers"])("/api/user/".concat(username, "/follower"), 'POST', 'CREATE_FOLLOWER'));
    }
  };

  var _onClick = function _onClick(e) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["split"])(e.target.className, ' ')[0] !== 'follower__button') {
      history.push("/".concat(user.username));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user",
    key: user.id,
    onClick: function onClick(e) {
      return _onClick(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: user.profile_photo,
    alt: "User Profile Photo",
    className: "user__photo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__name"
  }, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__username"
  }, user.username)), user.id !== AuthUser.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return submit(user);
    },
    className: "follower__button follower__button--".concat(user.followed_user === null ? 'follow' : 'unfollow')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__biography"
  }, user.biography)));
};

User.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    username: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    profile_photo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    biography: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    followed_user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })
};
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./resources/js/components/User/UserList.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/User/UserList.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./resources/js/components/User/User.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




var UserList = function UserList() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      users = _useSelector.users;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "users"
  }, users.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_1__["default"], {
      user: user,
      key: user.id
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserList);

/***/ }),

/***/ "./resources/js/views/TweetUserView.jsx":
/*!**********************************************!*\
  !*** ./resources/js/views/TweetUserView.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _state_ducks_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/ducks/user */ "./resources/js/state/ducks/user/index.js");
/* harmony import */ var _components_User_UserList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/User/UserList */ "./resources/js/components/User/UserList.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");






/**
 * Component that renders a user list for modal
 *
 * @param {string} type - Type
 */

var TweetUserView = function TweetUserView(_ref) {
  var type = _ref.type,
      title = _ref.title;
  console.log("title is ".concat(title));
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      tweet = _useParams.tweet;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (type === 'likes') {
      dispatch(Object(_state_ducks_user__WEBPACK_IMPORTED_MODULE_3__["fetchUsers"])("/api/tweet/".concat(tweet, "/likes"), 'GET', 'READ'));
    } else {
      dispatch(Object(_state_ducks_user__WEBPACK_IMPORTED_MODULE_3__["fetchUsers"])("/api/tweet/".concat(tweet, "/retweets"), 'GET', 'READ'));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modalCustom__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modalCustom__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_User_UserList__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};

TweetUserView.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TweetUserView);

/***/ })

}]);