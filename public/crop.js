(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crop"],{

/***/ "./resources/js/components/Profile/CropPicture.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/Profile/CropPicture.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image-crop */ "./node_modules/react-image-crop/dist/ReactCrop.min.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ "./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/**
 * Component that crops picture for background or profile pictures
 *
 * @param {Object} props - Props for component
 * @param {Object} props.settings - Settings property that contains src and aspect ratio
 * @param {Number} props.settings.aspect - Aspect ratio for cropping image
 * @param {File} props.settings.src - - Src for image
 * @param {function} props.setCancelCrop - React hook for Crop Settings.  Set to null to cancel
 * @param {function} props.setBackgroundImage - React hook that sets new Cropped Background Image.  Aspect 3:1.
 * @param {function} props.setProfileImage - React hook that sets new Cropped Profile Image.  Aspect 1:1
 *
 */

var CropPicture = function CropPicture(_ref) {
  var setCancelCrop = _ref.setCancelCrop,
      settings = _ref.settings,
      setBackgroundImage = _ref.setBackgroundImage,
      setProfileImage = _ref.setProfileImage;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      completedCrop = _useState4[0],
      setCompletedCrop = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    unit: '%',
    x: 0,
    y: 22.5,
    width: 100,
    aspect: settings.aspect
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      crop = _useState6[0],
      setCrop = _useState6[1];

  var onLoad = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (img) {
    imageRef.current = img;
  });

  var handleSubmit = function handleSubmit() {
    if (crop.aspect === 1) {
      setProfileImage(file);
    } else {
      setBackgroundImage(file);
    }

    setCancelCrop(null);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!imageRef.current || !completedCrop) {
      return;
    }

    var canvas = document.createElement('canvas');
    var image = imageRef.current;
    var scaleX = image.naturalWidth / image.width;
    var scaleY = image.naturalHeight / image.height;
    var crop = completedCrop;
    canvas.width = crop.width;
    canvas.height = crop.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(image, scaleX * crop.x, scaleY * crop.y, scaleX * crop.width, scaleY * crop.height, 0, 0, crop.width, crop.height);
    var reader = new FileReader();
    canvas.toBlob(function (blob) {
      reader.readAsDataURL(blob);

      reader.onloadend = function () {
        setFile(reader.result);
      };
    });
  }, [completedCrop]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "CropPicture"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "CropPicture__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "CropPicture__cancel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faArrowLeft"],
    size: "lg",
    onClick: function onClick() {
      return setCancelCrop(null);
    },
    className: "CropPicture__icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "CropPicture__title"
  }, "Edit Media"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "CropPicture__save"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "CropPicture__button",
    onClick: handleSubmit
  }, "Apply"))), settings.src && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_image_crop__WEBPACK_IMPORTED_MODULE_3___default.a, {
    ruleOfThirds: true,
    src: settings.src,
    crop: crop,
    onImageLoaded: onLoad,
    onChange: function onChange(c) {
      return setCrop(c);
    },
    onComplete: function onComplete(c) {
      return setCompletedCrop(c);
    },
    style: {
      width: '100%'
    }
  }));
};

CropPicture.propTypes = {
  settings: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    src: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
    aspect: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired
  }).isRequired,
  setCancelCrop: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  setBackgroundImage: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  setProfileImage: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CropPicture);

/***/ })

}]);