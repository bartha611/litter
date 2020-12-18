(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

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

/***/ "./resources/js/views/Home.jsx":
/*!*************************************!*\
  !*** ./resources/js/views/Home.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_state_ducks_tweets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/state/ducks/tweets */ "./resources/js/state/ducks/tweets/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Tweet_TweetButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Tweet/TweetButton */ "./resources/js/components/Tweet/TweetButton.jsx");
/* harmony import */ var _components_Tweet_TweetList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tweet/TweetList */ "./resources/js/components/Tweet/TweetList.jsx");
/* harmony import */ var _utils_useFetchTweet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useFetchTweet */ "./resources/js/utils/useFetchTweet.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);









var Home = function Home(_ref) {
  var background = _ref.background;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var tweets = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.tweets.tweets;
  });
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useLocation"])();
  var from = location.state && location.state.from;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!background && (from !== '/compose/tweet' || tweets.length === 0)) {
      dispatch(Object(_js_state_ducks_tweets__WEBPACK_IMPORTED_MODULE_1__["fetchTweets"])('/api/tweet', 'GET', 'READ'));
      window.scrollTo(0, 0);
    }
  }, []);
  Object(_utils_useFetchTweet__WEBPACK_IMPORTED_MODULE_5__["useFetchTweets"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tweet_TweetButton__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tweet_TweetList__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

Home.propTypes = {
  background: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    hash: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
    key: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
    search: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
    state: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
      from: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
    })
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

}]);