(self["webpackChunk"] = self["webpackChunk"] || []).push([["Comment"],{

/***/ "./resources/js/components/Comment/CommentHeader.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/components/Comment/CommentHeader.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Tweet_Tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tweet/Tweet */ "./resources/js/components/Tweet/Tweet.jsx");
/* harmony import */ var _Tweet_TweetParent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tweet/TweetParent */ "./resources/js/components/Tweet/TweetParent.jsx");





var CommentHeader = function CommentHeader() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.replies;
  }),
      parent_tweets = _useSelector.parent_tweets;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, parent_tweets && parent_tweets.map(function (tweet, index) {
    return index !== parent_tweets.length - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tweet_Tweet__WEBPACK_IMPORTED_MODULE_2__.default, {
      tweet: tweet,
      key: tweet.id,
      disabled: false,
      line: true
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tweet_TweetParent__WEBPACK_IMPORTED_MODULE_3__.default, {
      key: tweet.id,
      tweet: tweet
    });
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentHeader);

/***/ }),

/***/ "./resources/js/components/Comment/CommentList.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/Comment/CommentList.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Tweet_Tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tweet/Tweet */ "./resources/js/components/Tweet/Tweet.jsx");




var CommentList = function CommentList() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.replies;
  }),
      reply_tweets = _useSelector.reply_tweets;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, reply_tweets.map(function (comment) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tweet_Tweet__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: comment.id,
      disabled: false,
      tweet: comment,
      line: false
    });
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentList);

/***/ }),

/***/ "./resources/js/components/Tweet/TweetParent.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/Tweet/TweetParent.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./resources/js/helpers/index.js");




/**
 * @param {object} props Component props
 * @param {Object} props.tweet - The Tweet that will be rendered into HTML
 * @param {string} props.tweet.id - Id of the tweet
 * @param {string} props.tweet.tweet - The content of the tweet
 * @param {number} props.tweet.likes_count - The total likes of the tweet
 * @param {number} props.tweet.retweets_count - The total retweets of tweet
 * @param {number} props.tweet.replies_count - The total replies of the tweet
 * @param {string} props.tweet.updated_at - The time when tweet was last updated
 * @param {Object} props.tweet.user - The user who wrote the tweet
 * @param {string} props.tweet.user.username - The username of user who wrote the tweet
 * @param {string} props.tweet.user.name - The name of the user who wrote the tweet
 * @param {string} props.tweet.user.profile_photo - The profile photo of user who wrote the tweet
 *
 */

var TweetParent = function TweetParent(_ref) {
  var tweet = _ref.tweet;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "TweetParent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "TweetParent__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "TweetParent__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: tweet.user.profile_photo,
    alt: "User Profile photo",
    className: "TweetParent__photo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "TweetParent__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "TweetParent__author"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/".concat(encodeURIComponent(tweet.user.username))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, tweet.user.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "TweetParent__username"
  }, tweet.user.username))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "TweetParent__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "TweetParent__tweet"
  }, tweet.tweet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "TweetParent__dateInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "TweetParent__time"
  }, (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getTime)(tweet)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "TweetParent__date"
  }, (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDate)(tweet))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "TweetParent__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "TweetParent__retweets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: {
      pathname: "".concat(location.pathname, "/retweets"),
      state: {
        background: location
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "TweetParent__counts"
  }, (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.formatCounts)(tweet.retweets_count)), "Retweets")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "TweetParent__likes"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: {
      pathname: "".concat(location.pathname, "/likes"),
      state: {
        background: location
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "TweetParent__counts"
  }, (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.formatCounts)(tweet.likes_count)), "Likes")))));
};

TweetParent.propTypes = {
  tweet: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
    replies_count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
    likes_count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
    liked_tweet: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
    retweets_count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
    tweet: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    updated_at: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    user: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
      username: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
      name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
      profile_photo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
    }).isRequired
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TweetParent);

/***/ }),

/***/ "./resources/js/utils/useFetchComment.jsx":
/*!************************************************!*\
  !*** ./resources/js/utils/useFetchComment.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFetchComments": () => (/* binding */ useFetchComments)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_ducks_replies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/ducks/replies */ "./resources/js/state/ducks/replies/index.js");



var useFetchComments = function useFetchComments(path) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var comment = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.comments;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var url = path + (name ? "/".concat(name) : '');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleScroll = function handleScroll() {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !comment.cursor || comment.loading) return;
      dispatch((0,_state_ducks_replies__WEBPACK_IMPORTED_MODULE_2__.fetchReplies)("".concat(url, "?cursor=").concat(comment.cursor), 'GET', 'PAGINATION'));
    };

    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  });
};

/***/ }),

/***/ "./resources/js/views/Comment.jsx":
/*!****************************************!*\
  !*** ./resources/js/views/Comment.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _state_ducks_replies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/ducks/replies */ "./resources/js/state/ducks/replies/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _utils_useFetchComment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useFetchComment */ "./resources/js/utils/useFetchComment.jsx");
/* harmony import */ var _components_Comment_CommentList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Comment/CommentList */ "./resources/js/components/Comment/CommentList.jsx");
/* harmony import */ var _components_Comment_CommentHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Comment/CommentHeader */ "./resources/js/components/Comment/CommentHeader.jsx");








var Comment = function Comment(_ref) {
  var background = _ref.background;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.replies;
  }),
      parent_tweets = _useSelector.parent_tweets;

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)(),
      tweet = _useParams.tweet,
      name = _useParams.name;

  var from = location.state && location.state.from;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!background && (from !== "/".concat(name, "/status/").concat(tweet, "/likes") || parent_tweets.length === 0)) {
      dispatch((0,_state_ducks_replies__WEBPACK_IMPORTED_MODULE_1__.fetchReplies)("/api/tweet/".concat(tweet, "/reply"), 'GET', 'READ'));
      window.scrollTo(0, 0);
    }
  }, [location]);
  (0,_utils_useFetchComment__WEBPACK_IMPORTED_MODULE_3__.useFetchComments)("/api/tweet/".concat(tweet, "/comment"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Comment_CommentHeader__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Comment_CommentList__WEBPACK_IMPORTED_MODULE_4__.default, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

/***/ })

}]);