(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Profile"],{

/***/ "./resources/js/components/Profile/Biography.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/Profile/Biography.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






var About = function About() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.tweets;
  }),
      user = _useSelector.user;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();

  var formatDate = function formatDate(date) {
    var options = {
      month: 'long',
      year: 'numeric'
    };
    return " Joined ".concat(new Date(date).toLocaleDateString(undefined, options));
  };

  var formatCounts = function formatCounts(count) {
    if (count < 1000) {
      return count;
    } else if (count < 1000000) {
      return "".concat(_.round(count / 1000, 1), "K ");
    } else {
      return "".concat(_.round(count / 1000000), "M ");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about"
  }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__name"
  }, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__username"
  }, "@", user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__biography"
  }, user.biography), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__joinedDate text-muted"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendar"]
  }), formatDate(user.created_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__followerCounts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return history.push("".concat(user.username, "/following"));
    },
    className: "about__following"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "about__counts"
  }, formatCounts(user.following_count), ' '), "Following"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__followers",
    onClick: function onClick() {
      return history.push("".concat(user.username, "/followers"));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "about__counts"
  }, formatCounts(user.followers_count), ' '), "Followers"))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./resources/js/components/Profile/Header.jsx":
/*!****************************************************!*\
  !*** ./resources/js/components/Profile/Header.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "header__name"
  }, user.name), user.tweets_count ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "header__tweets_count text-muted"
  }, user.tweets_count, " Tweets") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "header__username text-muted"
  }, "@", user.name));
};

Header.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    tweets_count: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./resources/js/components/Profile/ProfileBackground.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/Profile/ProfileBackground.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./resources/js/components/Profile/Header.jsx");





var Background = function Background() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.tweets;
  }),
      user = _useSelector.user;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth;
  }),
      authUser = _useSelector2.user;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile"
  }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile__background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile__backgroundImage",
    style: {
      backgroundImage: "url('".concat(authUser.background_image, "')")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "profile__image",
    src: user.profile_photo,
    alt: "User profile photo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile__edit"
  }, authUser.id === user.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "profile__button",
    onClick: function onClick() {
      return history.push("/settings/profile", {
        background: location
      });
    }
  }, "Edit Profile"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "./resources/js/components/Tweet/TweetList.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/Tweet/TweetList.jsx ***!
  \*****************************************************/
/*! exports provided: TweetList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetList", function() { return TweetList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tweet */ "./resources/js/components/Tweet/Tweet.jsx");



/**
 * Component that displays list of tweets
 */

var TweetList = function TweetList() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.tweets;
  }),
      tweets = _useSelector.tweets;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tweetList"
  }, tweets.map(function (tweet) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tweet__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: tweet.id,
      tweet: tweet,
      line: false,
      disabled: false
    });
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (TweetList);

/***/ }),

/***/ "./resources/js/utils/useFetchTweet.jsx":
/*!**********************************************!*\
  !*** ./resources/js/utils/useFetchTweet.jsx ***!
  \**********************************************/
/*! exports provided: useFetchTweets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchTweets", function() { return useFetchTweets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_ducks_tweets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/ducks/tweets */ "./resources/js/state/ducks/tweets/index.js");



var useFetchTweets = function useFetchTweets() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var tweet = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.tweets;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var url = !name ? '/api/tweet' : "/api/user/".concat(name, "/tweet");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var handleScroll = function handleScroll() {
      if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight || !tweet.cursor || tweet.loading) return;
      dispatch(Object(_state_ducks_tweets__WEBPACK_IMPORTED_MODULE_2__["fetchTweets"])("".concat(url, "?cursor=").concat(tweet.cursor), 'GET', 'PAGINATE'));
    };

    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  });
};

/***/ }),

/***/ "./resources/js/views/Profile.jsx":
/*!****************************************!*\
  !*** ./resources/js/views/Profile.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_ducks_tweets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/ducks/tweets */ "./resources/js/state/ducks/tweets/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Tweet_TweetList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tweet/TweetList */ "./resources/js/components/Tweet/TweetList.jsx");
/* harmony import */ var _components_Profile_ProfileBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Profile/ProfileBackground */ "./resources/js/components/Profile/ProfileBackground.jsx");
/* harmony import */ var _components_Profile_Biography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Profile/Biography */ "./resources/js/components/Profile/Biography.jsx");
/* harmony import */ var _utils_useFetchTweet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useFetchTweet */ "./resources/js/utils/useFetchTweet.jsx");









var Profile = function Profile(_ref) {
  var background = _ref.background;
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.tweets;
  }),
      tweets = _useSelector.tweets;

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
      name = _useParams.name;

  var from = location.state && location.state.from;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!background && (from !== '/compose/tweet' || tweets.length === 0)) {
      dispatch(Object(_state_ducks_tweets__WEBPACK_IMPORTED_MODULE_2__["fetchTweets"])("/api/user/".concat(name, "/tweet"), 'GET', 'READ'));
      window.scrollTo(0, 0);
    }
  }, []);
  Object(_utils_useFetchTweet__WEBPACK_IMPORTED_MODULE_7__["useFetchTweets"])(name);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_ProfileBackground__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_Biography__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tweet_TweetList__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

}]);