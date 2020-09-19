(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tweetButton"],{

/***/ "./resources/js/components/tweets/tweetButton.jsx":
/*!********************************************************!*\
  !*** ./resources/js/components/tweets/tweetButton.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_ducks_tweets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/ducks/tweets */ \"./resources/js/state/ducks/tweets/index.js\");\n/* harmony import */ var _state_ducks_replies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/ducks/replies */ \"./resources/js/state/ducks/replies/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar TweetButton = function TweetButton(_ref) {\n  var _ref$tweetId = _ref.tweetId,\n      tweetId = _ref$tweetId === void 0 ? null : _ref$tweetId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState2 = _slicedToArray(_useState, 2),\n      tweet = _useState2[0],\n      setTweet = _useState2[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.auth.user;\n  });\n\n  var submit = function submit() {\n    if (tweetId) {\n      dispatch(Object(_state_ducks_replies__WEBPACK_IMPORTED_MODULE_4__[\"fetchReplies\"])(\"/api/tweet/\".concat(tweetId, \"/reply\"), 'POST', 'POST', {\n        tweet: tweet\n      }));\n    } else {\n      dispatch(Object(_state_ducks_tweets__WEBPACK_IMPORTED_MODULE_3__[\"fetchTweets\"])('/api/tweet', 'POST', 'POST', {\n        tweet: tweet\n      }));\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"button__info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"button__image\",\n    src: user.profile_photo,\n    alt: \"User profile photo\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"button__body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    contentEditable: true,\n    placeholder: \"What is on your mind?\",\n    className: \"button__message\",\n    onInput: function onInput(e) {\n      return setTweet(e.target.innerText);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"button__helpers\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button__submit btn-primary\",\n    onClick: function onClick() {\n      return submit();\n    }\n  }, \"Tweet\"))));\n};\n\nTweetButton.propTypes = {\n  tweetId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TweetButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy90d2VldHMvdHdlZXRCdXR0b24uanN4PzhkMzciXSwibmFtZXMiOlsiVHdlZXRCdXR0b24iLCJ0d2VldElkIiwidXNlU3RhdGUiLCJ0d2VldCIsInNldFR3ZWV0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsInN1Ym1pdCIsImZldGNoUmVwbGllcyIsImZldGNoVHdlZXRzIiwicHJvZmlsZV9waG90byIsImUiLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUF3QjtBQUFBLDBCQUFyQkMsT0FBcUI7QUFBQSxNQUFyQkEsT0FBcUIsNkJBQVgsSUFBVzs7QUFBQSxrQkFDaEJDLHNEQUFRLENBQUMsRUFBRCxDQURRO0FBQUE7QUFBQSxNQUNuQ0MsS0FEbUM7QUFBQSxNQUM1QkMsUUFENEI7O0FBRTFDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSCxJQUFmO0FBQUEsR0FBTixDQUF4Qjs7QUFDQSxNQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFFBQUlWLE9BQUosRUFBYTtBQUNYSSxjQUFRLENBQ05PLHlFQUFZLHNCQUFlWCxPQUFmLGFBQWdDLE1BQWhDLEVBQXdDLE1BQXhDLEVBQWdEO0FBQUVFLGFBQUssRUFBTEE7QUFBRixPQUFoRCxDQUROLENBQVI7QUFHRCxLQUpELE1BSU87QUFDTEUsY0FBUSxDQUFDUSx1RUFBVyxDQUFDLFlBQUQsRUFBZSxNQUFmLEVBQXVCLE1BQXZCLEVBQStCO0FBQUVWLGFBQUssRUFBTEE7QUFBRixPQUEvQixDQUFaLENBQVI7QUFDRDtBQUNGLEdBUkQ7O0FBVUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQ0UsYUFBUyxFQUFDLGVBRFo7QUFFRSxPQUFHLEVBQUVJLElBQUksQ0FBQ08sYUFGWjtBQUdFLE9BQUcsRUFBQztBQUhOLElBREYsQ0FERixlQVFFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFDRSxtQkFBZSxNQURqQjtBQUVFLGVBQVcsRUFBQyx1QkFGZDtBQUdFLGFBQVMsRUFBQyxpQkFIWjtBQUlFLFdBQU8sRUFBRSxpQkFBQUMsQ0FBQztBQUFBLGFBQUlYLFFBQVEsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLFNBQVYsQ0FBWjtBQUFBO0FBSlosSUFERixlQU9FO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFDRSxhQUFTLEVBQUMsNEJBRFo7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNTixNQUFNLEVBQVo7QUFBQTtBQUZYLGFBREYsQ0FQRixDQVJGLENBREY7QUEyQkQsQ0F6Q0Q7O0FBMkNBWCxXQUFXLENBQUNrQixTQUFaLEdBQXdCO0FBQ3RCakIsU0FBTyxFQUFFa0IsaURBQVMsQ0FBQ0M7QUFERyxDQUF4QjtBQUllcEIsMEVBQWYiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy90d2VldHMvdHdlZXRCdXR0b24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGZldGNoVHdlZXRzIH0gZnJvbSAnLi4vLi4vc3RhdGUvZHVja3MvdHdlZXRzJztcbmltcG9ydCB7IGZldGNoUmVwbGllcyB9IGZyb20gJy4uLy4uL3N0YXRlL2R1Y2tzL3JlcGxpZXMnO1xuXG5jb25zdCBUd2VldEJ1dHRvbiA9ICh7IHR3ZWV0SWQgPSBudWxsIH0pID0+IHtcbiAgY29uc3QgW3R3ZWV0LCBzZXRUd2VldF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmF1dGgudXNlcik7XG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAodHdlZXRJZCkge1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGZldGNoUmVwbGllcyhgL2FwaS90d2VldC8ke3R3ZWV0SWR9L3JlcGx5YCwgJ1BPU1QnLCAnUE9TVCcsIHsgdHdlZXQgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKGZldGNoVHdlZXRzKCcvYXBpL3R3ZWV0JywgJ1BPU1QnLCAnUE9TVCcsIHsgdHdlZXQgfSkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbl9faW5mb1wiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uX19pbWFnZVwiXG4gICAgICAgICAgc3JjPXt1c2VyLnByb2ZpbGVfcGhvdG99XG4gICAgICAgICAgYWx0PVwiVXNlciBwcm9maWxlIHBob3RvXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25fX2JvZHlcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyBvbiB5b3VyIG1pbmQ/XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25fX21lc3NhZ2VcIlxuICAgICAgICAgIG9uSW5wdXQ9e2UgPT4gc2V0VHdlZXQoZS50YXJnZXQuaW5uZXJUZXh0KX1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbl9faGVscGVyc1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbl9fc3VibWl0IGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN1Ym1pdCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFR3ZWV0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Ud2VldEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIHR3ZWV0SWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFR3ZWV0QnV0dG9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/components/tweets/tweetButton.jsx\n");

/***/ })

}]);