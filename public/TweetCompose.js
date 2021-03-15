(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TweetCompose"],{

/***/ "./resources/js/components/Tweet/TweetCompose.jsx":
/*!********************************************************!*\
  !*** ./resources/js/components/Tweet/TweetCompose.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tweet */ "./resources/js/components/Tweet/Tweet.jsx");
/* harmony import */ var _TweetButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TweetButton */ "./resources/js/components/Tweet/TweetButton.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







/**
 * Creates a tweet compose modal
 *
 * @param {Object} props - The props of the component
 * @param {Object|null} props.tweet - Tweet id of
 * @param {function} setCancel - UseState hook inherited from modal that cancels modal
 */

var TweetCompose = function TweetCompose(_ref) {
  var _ref$tweet = _ref.tweet,
      tweet = _ref$tweet === void 0 ? null : _ref$tweet,
      setCancel = _ref.setCancel;
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  var tweetId = location.state && location.state.tweet.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TweetCompose"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TweetCompose__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TweetCompose__close",
    onClick: function onClick() {
      return setCancel(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTimes"],
    size: "lg"
  }))), tweet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tweet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tweet: tweet,
    line: true,
    disabled: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TweetButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tweetId: tweetId,
    setCancel: setCancel
  }));
};

TweetCompose.propTypes = {
  tweet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
    replies_count: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
    likes_count: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
    liked_tweet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
    tweet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
    updated_at: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
    user: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
      username: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
      name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
      profile_photo: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
    }).isRequired
  }),
  setCancel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TweetCompose);

/***/ })

}]);