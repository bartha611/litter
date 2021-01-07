(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EditProfile"],{

/***/ "./resources/js/components/Profile/ProfileForm.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/Profile/ProfileForm.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Component for editing Profile
 * @param {Object} props - Component props
 * @param {string} props.title - Field name of form
 * @param {number} props.maxCharacters - Total characters allowed
 * @param {string} props.value - Value of field
 * @param {function} prop.setValue - React hook to set value after change
 *
 */

var ProfileForm = function ProfileForm(_ref) {
  var title = _ref.title,
      maxCharacters = _ref.maxCharacters,
      value = _ref.value,
      setValue = _ref.setValue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ProfileForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ProfileForm__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ProfileForm__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ProfileForm__count"
  }, value.length, "/", maxCharacters)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: "ProfileForm__input",
    value: value,
    rows: title === 'Name' ? 1 : 2,
    maxLength: maxCharacters,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  }));
};

ProfileForm.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  maxCharacters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProfileForm);

/***/ }),

/***/ "./resources/js/views/EditProfile.jsx":
/*!********************************************!*\
  !*** ./resources/js/views/EditProfile.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Profile_CropPicture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Profile/CropPicture */ "./resources/js/components/Profile/CropPicture.jsx");
/* harmony import */ var _components_Profile_ProfileForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Profile/ProfileForm */ "./resources/js/components/Profile/ProfileForm.jsx");
/* harmony import */ var _state_ducks_auth_authThunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/ducks/auth/authThunk */ "./resources/js/state/ducks/auth/authThunk.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var EditProfile = function EditProfile(_ref) {
  var setCancel = _ref.setCancel;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.auth;
  }),
      user = _useSelector.user,
      loading = _useSelector.loading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      crop = _useState2[0],
      setCrop = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      backgroundImage = _useState4[0],
      setBackgroundImage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      profileImage = _useState6[0],
      setProfileImage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(user.name),
      _useState8 = _slicedToArray(_useState7, 2),
      name = _useState8[0],
      setName = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(user.biography),
      _useState10 = _slicedToArray(_useState9, 2),
      biography = _useState10[0],
      setBiography = _useState10[1];

  var handleFileChange = function handleFileChange(e) {
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      var id = e.target.id;
      reader.addEventListener('load', function () {
        setCrop({
          aspect: id === 'file-background' ? 3 : 1,
          src: reader.result
        });
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  var DataUrlToFile = function DataUrlToFile(url, filename) {
    var arr = url.split(',');
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    var croppedImageFile = new File([u8arr], filename, {
      type: 'image/png'
    });
    return croppedImageFile;
  };

  var handleSubmit = function handleSubmit() {
    var formData = new FormData();

    if (profileImage !== '') {
      var profile_file = DataUrlToFile(profileImage, "".concat(user.username, "_profile"));
      formData.append('profile_photo', profile_file);
    }

    if (backgroundImage !== '') {
      formData.append('background_image', DataUrlToFile(backgroundImage, "".concat(user.username, "_background")));
    }

    formData.append('name', name);
    formData.append('biography', biography);
    dispatch(Object(_state_ducks_auth_authThunk__WEBPACK_IMPORTED_MODULE_6__["fetchAuth"])("/api/user/".concat(user.username), 'UPDATE', history, formData));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _.isEmpty(crop) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editProfile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editProfile__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return setCancel(true);
    },
    className: "editProfile__cancel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"],
    size: "lg",
    className: "editProfile__icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editProfile__title"
  }, "Edit Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "editProfile__save",
    disabled: loading,
    onClick: handleSubmit
  }, "Save")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editProfile__form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editProfile__background",
    style: {
      backgroundImage: "url('".concat(!backgroundImage ? user.background_image : backgroundImage, "')")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editProfile__box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editProfile__centering"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editProfile__option"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "file-background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCamera"],
    color: "grey",
    className: "editProfile__icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    id: "file-background",
    className: "editProfile__imageFile",
    onChange: function onChange(e) {
      return handleFileChange(e);
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editProfile__picture",
    style: {
      backgroundImage: "url('".concat(!profileImage ? user.profile_photo : profileImage, "')")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editProfile__option editProfile__option--picture"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "file-picture"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCamera"],
    color: "grey",
    className: "editProfile__icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "file-picture",
    type: "file",
    className: "editProfile__imageFile",
    onChange: function onChange(e) {
      return handleFileChange(e);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editProfile__name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_ProfileForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Name",
    maxCharacters: "50",
    value: name,
    setValue: setName
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editProfile__biography"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_ProfileForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Bio",
    maxCharacters: "160",
    value: biography,
    setValue: setBiography
  })))), !_.isEmpty(crop) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_CropPicture__WEBPACK_IMPORTED_MODULE_4__["default"], {
    settings: crop,
    setCancelCrop: setCrop,
    setBackgroundImage: setBackgroundImage,
    setProfileImage: setProfileImage
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EditProfile);

/***/ })

}]);