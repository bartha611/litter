(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HomePage"],{

/***/ "./resources/js/utils/useFetchTweet.jsx":
/*!**********************************************!*\
  !*** ./resources/js/utils/useFetchTweet.jsx ***!
  \**********************************************/
/*! exports provided: useFetchTweets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useFetchTweets\", function() { return useFetchTweets; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_ducks_tweets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/ducks/tweets */ \"./resources/js/state/ducks/tweets/index.js\");\n\n\n\nvar useFetchTweets = function useFetchTweets(path) {\n  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var tweet = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.tweets;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var url = path + (name ? \"/\".concat(name) : '');\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var handleScroll = function handleScroll() {\n      if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight || !tweet.cursor || tweet.loading) return;\n      dispatch(Object(_state_ducks_tweets__WEBPACK_IMPORTED_MODULE_2__[\"fetchTweets\"])(\"\".concat(url, \"?cursor=\").concat(tweet.cursor), 'GET', 'PAGINATE'));\n    };\n\n    window.addEventListener('scroll', handleScroll);\n    return function () {\n      return window.removeEventListener('scroll', handleScroll);\n    };\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXRpbHMvdXNlRmV0Y2hUd2VldC5qc3g/NjAyNSJdLCJuYW1lcyI6WyJ1c2VGZXRjaFR3ZWV0cyIsInBhdGgiLCJuYW1lIiwidHdlZXQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidHdlZXRzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVybCIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJvZmZzZXRIZWlnaHQiLCJjdXJzb3IiLCJsb2FkaW5nIiwiZmV0Y2hUd2VldHMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxJQUFELEVBQXVCO0FBQUEsTUFBaEJDLElBQWdCLHVFQUFULElBQVM7QUFDbkQsTUFBTUMsS0FBSyxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLE1BQVY7QUFBQSxHQUFOLENBQXpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEdBQUcsR0FBR1IsSUFBSSxJQUFJQyxJQUFJLGNBQU9BLElBQVAsSUFBZ0IsRUFBeEIsQ0FBaEI7QUFFQVEseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixVQUNFQyxNQUFNLENBQUNDLFdBQVAsR0FBcUJDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBOUMsR0FDRUYsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUQzQixJQUVBLENBQUNkLEtBQUssQ0FBQ2UsTUFGUCxJQUdBZixLQUFLLENBQUNnQixPQUpSLEVBTUU7QUFDRlosY0FBUSxDQUFDYSx1RUFBVyxXQUFJWCxHQUFKLHFCQUFrQk4sS0FBSyxDQUFDZSxNQUF4QixHQUFrQyxLQUFsQyxFQUF5QyxVQUF6QyxDQUFaLENBQVI7QUFDRCxLQVREOztBQVVBTixVQUFNLENBQUNTLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDVixZQUFsQztBQUNBLFdBQU87QUFBQSxhQUFNQyxNQUFNLENBQUNVLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDWCxZQUFyQyxDQUFOO0FBQUEsS0FBUDtBQUNELEdBYlEsQ0FBVDtBQWNELENBbkJNIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3V0aWxzL3VzZUZldGNoVHdlZXQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hUd2VldHMgfSBmcm9tICcuLi9zdGF0ZS9kdWNrcy90d2VldHMnO1xuXG5leHBvcnQgY29uc3QgdXNlRmV0Y2hUd2VldHMgPSAocGF0aCwgbmFtZSA9IG51bGwpID0+IHtcbiAgY29uc3QgdHdlZXQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS50d2VldHMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHVybCA9IHBhdGggKyAobmFtZSA/IGAvJHtuYW1lfWAgOiAnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPFxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgfHxcbiAgICAgICAgIXR3ZWV0LmN1cnNvciB8fFxuICAgICAgICB0d2VldC5sb2FkaW5nXG4gICAgICApXG4gICAgICAgIHJldHVybjtcbiAgICAgIGRpc3BhdGNoKGZldGNoVHdlZXRzKGAke3VybH0/Y3Vyc29yPSR7dHdlZXQuY3Vyc29yfWAsICdHRVQnLCAnUEFHSU5BVEUnKSk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/utils/useFetchTweet.jsx\n");

/***/ }),

/***/ "./resources/js/views/Home.jsx":
/*!*************************************!*\
  !*** ./resources/js/views/Home.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_state_ducks_tweets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/state/ducks/tweets */ \"./resources/js/state/ducks/tweets/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _utils_useFetchTweet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useFetchTweet */ \"./resources/js/utils/useFetchTweet.jsx\");\n\n\n\nvar TweetButton = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() | tweetButton */ \"tweetButton\").then(__webpack_require__.bind(null, /*! ../components/Tweet/TweetButton */ \"./resources/js/components/Tweet/TweetButton.jsx\"));\n});\nvar TweetList = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return Promise.all(/*! import() | tweetList */[__webpack_require__.e(\"vendors~tweetList\"), __webpack_require__.e(\"tweetList\")]).then(__webpack_require__.bind(null, /*! ../components/Tweet/TweetList */ \"./resources/js/components/Tweet/TweetList.jsx\"));\n});\n\n\nvar Home = function Home() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch(Object(_js_state_ducks_tweets__WEBPACK_IMPORTED_MODULE_1__[\"fetchTweets\"])('/api/tweet', 'GET', 'READ'));\n  }, []);\n  Object(_utils_useFetchTweet__WEBPACK_IMPORTED_MODULE_3__[\"useFetchTweets\"])('/api/tweet', null);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TweetButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TweetList, null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSG9tZS5qc3g/NTY1NSJdLCJuYW1lcyI6WyJUd2VldEJ1dHRvbiIsImxhenkiLCJUd2VldExpc3QiLCJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImZldGNoVHdlZXRzIiwidXNlRmV0Y2hUd2VldHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsZ0JBQUdDLGtEQUFJLENBQUM7QUFBQSxTQUN2QixpTUFEdUI7QUFBQSxDQUFELENBQXhCO0FBTUEsSUFBTUMsU0FBUyxnQkFBR0Qsa0RBQUksQ0FBQztBQUFBLFNBQ3JCLG1QQURxQjtBQUFBLENBQUQsQ0FBdEI7QUFJQTs7QUFFQSxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RGLFlBQVEsQ0FBQ0csMEVBQVcsQ0FBQyxZQUFELEVBQWUsS0FBZixFQUFzQixNQUF0QixDQUFaLENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFDLDZFQUFjLENBQUMsWUFBRCxFQUFlLElBQWYsQ0FBZDtBQUNBLHNCQUNFLHFGQUNFLDJEQUFDLFdBQUQsT0FERixlQUVFLDJEQUFDLFNBQUQsT0FGRixDQURGO0FBTUQsQ0FkRDs7QUFnQmVMLG1FQUFmIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3ZpZXdzL0hvbWUuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgbGF6eSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZldGNoVHdlZXRzIH0gZnJvbSAnLi4vLi4vanMvc3RhdGUvZHVja3MvdHdlZXRzJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBUd2VldEJ1dHRvbiA9IGxhenkoKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6ICd0d2VldEJ1dHRvbicgKi8gJy4uL2NvbXBvbmVudHMvVHdlZXQvVHdlZXRCdXR0b24nXG4gIClcbik7XG5cbmNvbnN0IFR3ZWV0TGlzdCA9IGxhenkoKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICd0d2VldExpc3QnICovICcuLi9jb21wb25lbnRzL1R3ZWV0L1R3ZWV0TGlzdCcpXG4pO1xuXG5pbXBvcnQgeyB1c2VGZXRjaFR3ZWV0cyB9IGZyb20gJy4uL3V0aWxzL3VzZUZldGNoVHdlZXQnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFR3ZWV0cygnL2FwaS90d2VldCcsICdHRVQnLCAnUkVBRCcpKTtcbiAgfSwgW10pO1xuXG4gIHVzZUZldGNoVHdlZXRzKCcvYXBpL3R3ZWV0JywgbnVsbCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUd2VldEJ1dHRvbiAvPlxuICAgICAgPFR3ZWV0TGlzdCAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/views/Home.jsx\n");

/***/ })

}]);