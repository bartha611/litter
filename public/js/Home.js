(self["webpackChunk"] = self["webpackChunk"] || []).push([["Home"],{

/***/ "./resources/js/components/Tweet/TweetButton.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/Tweet/TweetButton.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_ducks_tweets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/ducks/tweets */ "./resources/js/state/ducks/tweets/index.js");
/* harmony import */ var _state_ducks_replies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/ducks/replies */ "./resources/js/state/ducks/replies/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/**
 * Component that allows user to write a tweet reply
 *
 * @param {string} tweetId - Id of tweet being replied to
 * @param {func} back - Boolean that helps determine whether to go back on submit
 */

var TweetButton = function TweetButton(_ref) {
  var _ref$tweetId = _ref.tweetId,
      tweetId = _ref$tweetId === void 0 ? null : _ref$tweetId,
      _ref$setCancel = _ref.setCancel,
      setCancel = _ref$setCancel === void 0 ? null : _ref$setCancel;
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      tweet = _useState2[0],
      setTweet = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.auth.user;
  });

  var submit = function submit() {
    if (tweetId) {
      dispatch((0,_state_ducks_replies__WEBPACK_IMPORTED_MODULE_4__.fetchReplies)("/api/tweet/".concat(tweetId, "/reply"), 'POST', 'CREATE', {
        tweet: tweet
      }, history, location));
    } else {
      dispatch((0,_state_ducks_tweets__WEBPACK_IMPORTED_MODULE_3__.fetchTweets)('/api/tweet', 'POST', 'CREATE', {
        tweet: tweet
      }));
    }

    setTweet('');

    if (setCancel !== null) {
      setCancel(true);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tweetButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tweetButton__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "tweetButton__image",
    src: user.profile_photo,
    alt: "User profile photo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tweetButton__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_6__.default, {
    placeholder: "What is on your mind?",
    className: "tweetButton__message",
    value: tweet,
    onChange: function onChange(e) {
      return setTweet(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tweetButton__helpers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "tweetButton__submit",
    disabled: tweet.length > 0 ? false : true,
    onClick: function onClick() {
      return submit();
    }
  }, "Tweet"))));
};

TweetButton.propTypes = {
  tweetId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  setCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TweetButton);

/***/ }),

/***/ "./resources/js/components/Tweet/TweetList.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/Tweet/TweetList.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TweetList": () => (/* binding */ TweetList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tweet */ "./resources/js/components/Tweet/Tweet.jsx");



/**
 * Component that displays list of tweets
 */

var TweetList = function TweetList() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.tweets;
  }),
      tweets = _useSelector.tweets;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tweetList"
  }, tweets.map(function (tweet) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tweet__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: tweet.id,
      tweet: tweet,
      line: false
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TweetList);

/***/ }),

/***/ "./resources/js/utils/useFetchTweet.jsx":
/*!**********************************************!*\
  !*** ./resources/js/utils/useFetchTweet.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFetchTweets": () => (/* binding */ useFetchTweets)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_ducks_tweets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/ducks/tweets */ "./resources/js/state/ducks/tweets/index.js");



var useFetchTweets = function useFetchTweets() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var tweet = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.tweets;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var url = !name ? '/api/tweet' : "/api/user/".concat(name, "/tweet");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleScroll = function handleScroll() {
      if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight || !tweet.cursor || tweet.loading) return;
      dispatch((0,_state_ducks_tweets__WEBPACK_IMPORTED_MODULE_2__.fetchTweets)("".concat(url, "?cursor=").concat(tweet.cursor), 'GET', 'PAGINATE'));
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _js_state_ducks_tweets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/state/ducks/tweets */ "./resources/js/state/ducks/tweets/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Tweet_TweetButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Tweet/TweetButton */ "./resources/js/components/Tweet/TweetButton.jsx");
/* harmony import */ var _components_Tweet_TweetList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tweet/TweetList */ "./resources/js/components/Tweet/TweetList.jsx");
/* harmony import */ var _utils_useFetchTweet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useFetchTweet */ "./resources/js/utils/useFetchTweet.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _state_ducks_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/ducks/notifications */ "./resources/js/state/ducks/notifications/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);










var Home = function Home(_ref) {
  var background = _ref.background;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var tweets = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.tweets.tweets;
  });
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useLocation)();
  var from = location.state && location.state.from;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!background && (from !== '/compose/tweet' || tweets.length === 0)) {
      dispatch((0,_js_state_ducks_tweets__WEBPACK_IMPORTED_MODULE_1__.fetchTweets)('/api/tweet', 'GET', 'READ'));
      window.scrollTo(0, 0);
    }

    dispatch((0,_state_ducks_notifications__WEBPACK_IMPORTED_MODULE_6__.fetchNotification)('/api/notification'));
  }, []);
  (0,_utils_useFetchTweet__WEBPACK_IMPORTED_MODULE_5__.useFetchTweets)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Tweet_TweetButton__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Tweet_TweetList__WEBPACK_IMPORTED_MODULE_4__.default, null));
};

Home.propTypes = {
  background: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    hash: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired),
    key: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired),
    pathname: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired),
    search: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired),
    state: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
      from: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)
    })
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var use_latest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-latest */ "./node_modules/use-latest/dist/use-latest.esm.js");
/* harmony import */ var use_composed_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-composed-ref */ "./node_modules/use-composed-ref/dist/use-composed-ref.esm.js");






var HIDDEN_TEXTAREA_STYLE = {
  'min-height': '0',
  'max-height': 'none',
  height: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  position: 'absolute',
  'z-index': '-1000',
  top: '0',
  right: '0'
};

var forceHiddenStyles = function forceHiddenStyles(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function (key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');
  });
};

//   export type CalculatedNodeHeights = [height: number, rowHeight: number];
// https://github.com/microsoft/TypeScript/issues/28259

var hiddenTextarea = null;

var getHeight = function getHeight(node, sizingData) {
  var height = node.scrollHeight;

  if (sizingData.sizingStyle.boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    return height + sizingData.borderSize;
  } // remove padding, since height = content


  return height - sizingData.paddingSize;
};

function calculateNodeHeight(sizingData, value, minRows, maxRows) {
  if (minRows === void 0) {
    minRows = 1;
  }

  if (maxRows === void 0) {
    maxRows = Infinity;
  }

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tabindex', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    forceHiddenStyles(hiddenTextarea);
  }

  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }

  var paddingSize = sizingData.paddingSize,
      borderSize = sizingData.borderSize,
      sizingStyle = sizingData.sizingStyle;
  var boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function (_key) {
    var key = _key;
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles(hiddenTextarea);
  hiddenTextarea.value = value;
  var height = getHeight(hiddenTextarea, sizingData); // measure height of a textarea with a single row

  hiddenTextarea.value = 'x';
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
  var minHeight = rowHeight * minRows;

  if (boxSizing === 'border-box') {
    minHeight = minHeight + paddingSize + borderSize;
  }

  height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;

  if (boxSizing === 'border-box') {
    maxHeight = maxHeight + paddingSize + borderSize;
  }

  height = Math.min(maxHeight, height);
  return [height, rowHeight];
}

var noop = function noop() {};
var pick = function pick(props, obj) {
  return props.reduce(function (acc, prop) {
    acc[prop] = obj[prop];
    return acc;
  }, {});
};

var SIZING_STYLE = ['borderBottomWidth', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'boxSizing', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'lineHeight', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', // non-standard
'tabSize', 'textIndent', // non-standard
'textRendering', 'textTransform', 'width', 'wordBreak'];
var isIE = !!document.documentElement.currentStyle ;

var getSizingData = function getSizingData(node) {
  var style = window.getComputedStyle(node);

  if (style === null) {
    return null;
  }

  var sizingStyle = pick(SIZING_STYLE, style);
  var boxSizing = sizingStyle.boxSizing; // probably node is detached from DOM, can't read computed dimensions

  if (boxSizing === '') {
    return null;
  } // IE (Edge has already correct behaviour) returns content width as computed width
  // so we need to add manually padding and border widths


  if (isIE && boxSizing === 'border-box') {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + 'px';
  }

  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
  var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize
  };
};

var useWindowResizeListener = function useWindowResizeListener(listener) {
  var latestListener = (0,use_latest__WEBPACK_IMPORTED_MODULE_3__.default)(listener);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(function () {
    var handler = function handler(event) {
      latestListener.current(event);
    };

    window.addEventListener('resize', handler);
    return function () {
      window.removeEventListener('resize', handler);
    };
  }, []);
};

var TextareaAutosize = function TextareaAutosize(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements,
      maxRows = _ref.maxRows,
      minRows = _ref.minRows,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
      _ref$onHeightChange = _ref.onHeightChange,
      onHeightChange = _ref$onHeightChange === void 0 ? noop : _ref$onHeightChange,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]);

  if ( true && props.style) {
    if ('maxHeight' in props.style) {
      throw new Error('Using `style.maxHeight` for <TextareaAutosize/> is not supported. Please use `maxRows`.');
    }

    if ('minHeight' in props.style) {
      throw new Error('Using `style.minHeight` for <TextareaAutosize/> is not supported. Please use `minRows`.');
    }
  }

  var isControlled = props.value !== undefined;
  var libRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var ref = (0,use_composed_ref__WEBPACK_IMPORTED_MODULE_4__.default)(libRef, userRef);
  var heightRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
  var measurementsCacheRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();

  var resizeTextarea = function resizeTextarea() {
    var node = libRef.current;
    var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData(node);

    if (!nodeSizingData) {
      return;
    }

    measurementsCacheRef.current = nodeSizingData;

    var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || 'x', minRows, maxRows),
        height = _calculateNodeHeight[0],
        rowHeight = _calculateNodeHeight[1];

    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty('height', height + "px", 'important');
      onHeightChange(height, {
        rowHeight: rowHeight
      });
    }
  };

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      resizeTextarea();
    }

    onChange(event);
  };

  {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(resizeTextarea);
    useWindowResizeListener(resizeTextarea);
  }

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("textarea", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
    onChange: handleChange,
    ref: ref
  }));
};

var index = /* #__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(TextareaAutosize);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/use-composed-ref/dist/use-composed-ref.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-composed-ref/dist/use-composed-ref.esm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var updateRef = function updateRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }
  ref.current = value;
};

var useComposedRef = function useComposedRef(libRef, userRef) {
  var prevUserRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (instance) {
    libRef.current = instance;

    if (prevUserRef.current) {
      updateRef(prevUserRef.current, null);
    }

    prevUserRef.current = userRef;

    if (!userRef) {
      return;
    }

    updateRef(userRef, instance);
  }, [userRef]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useComposedRef);


/***/ }),

/***/ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var index =  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect ;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/use-latest/dist/use-latest.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/use-latest/dist/use-latest.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-isomorphic-layout-effect */ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");



var useLatest = function useLatest(value) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  (0,use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__.default)(function () {
    ref.current = value;
  });
  return ref;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLatest);


/***/ })

}]);