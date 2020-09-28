module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/tickets/new.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hooks/useForm.js":
/*!**************************!*\
  !*** ./hooks/useForm.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_errMsg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/errMsg */ "./utils/errMsg.js");
/* harmony import */ var _utils_consoleMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/consoleMessage */ "./utils/consoleMessage.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const INIT_STATUS = {
  loading: false,
  error: "",
  success: ""
};
function useForm(INIT_DATA = {}, onSubmitCallback, validator, initStatus = INIT_STATUS) {
  const [formState, setFormState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(INIT_DATA);
  const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(initStatus);
  const timerIdRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    return () => {
      clearTimeout(timerIdRef.current);
    };
  }, []);

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.currentTarget;

    if (name === "image") {
      let imagePreview = window.URL.createObjectURL(files[0]);
      setFormState(state => _objectSpread(_objectSpread({}, state), {}, {
        image: files[0],
        imagePreview
      }));
    } else {
      setFormState(state => _objectSpread(_objectSpread({}, state), {}, {
        [name]: value
      }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({
      loading: true,
      error: "",
      success: ""
    });

    try {
      await validator(formState);
      const {
        success,
        clear
      } = (await onSubmitCallback(formState, setFormState)) || {};

      if (success) {
        setStatus({
          loading: false,
          error: "",
          success
        });
        clearTimeout(timerIdRef.current);
        timerIdRef.current = setTimeout(() => setStatus(state => _objectSpread(_objectSpread({}, state), {}, {
          success: ""
        })), 4000);
      }

      if (clear) {
        setFormState(INIT_DATA);
      }
    } catch (e) {
      setStatus({
        loading: false,
        error: Object(_utils_errMsg__WEBPACK_IMPORTED_MODULE_1__["errMsg"])(e),
        success: ""
      });
      Object(_utils_consoleMessage__WEBPACK_IMPORTED_MODULE_2__["consoleErrorClient"])(e, "Error useForm handleSubmit");
    }
  };

  return [formState, status, handleChange, handleSubmit, setFormState];
}

/***/ }),

/***/ "./pages/tickets/new.js":
/*!******************************!*\
  !*** ./pages/tickets/new.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useForm */ "./hooks/useForm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_consoleMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/consoleMessage */ "./utils/consoleMessage.js");
var _jsxFileName = "D:\\WebStormProject\\Microservices with Node JS and React\\micros-ticketing\\client\\pages\\tickets\\new.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const INIT_STATE = {
  title: "",
  price: ""
};

const CreateTicketPage = () => {
  const [formState, status, handleChange, handleSubmit, setState] = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_1__["default"])(INIT_STATE, onSubmit, validator);
  const {
    title,
    price
  } = formState;
  const {
    loading,
    error,
    success
  } = status; // consoleLogClient("CreateTicketPage Render", success);

  const handleBlur = e => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setState(_objectSpread(_objectSpread({}, formState), {}, {
      price: value.toFixed(2)
    }));
  };

  async function validator(state) {}

  async function onSubmit(state) {
    const {
      title,
      price
    } = state;
    await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/tickets", {
      title,
      price
    });
    return {
      success: "Success",
      clear: true
    };
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Create New Ticket"), __jsx("form", {
    onSubmit: handleSubmit,
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Title"), __jsx("input", {
    type: "text",
    name: "title",
    value: title,
    className: "form-control",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Price"), __jsx("input", {
    type: "number",
    name: "price",
    value: price,
    className: "form-control",
    onChange: handleChange,
    onBlur: handleBlur,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  })), __jsx("button", {
    type: "submit",
    className: "btn btn-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Submit")), error && __jsx("div", {
    className: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 18
    }
  }, error), success && __jsx("div", {
    className: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 20
    }
  }, success));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateTicketPage);

/***/ }),

/***/ "./utils/consoleMessage.js":
/*!*********************************!*\
  !*** ./utils/consoleMessage.js ***!
  \*********************************/
/*! exports provided: consoleLogClient, consoleErrorClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleLogClient", function() { return consoleLogClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleErrorClient", function() { return consoleErrorClient; });
const consoleLogClient = (...arg) => {
  console.log("╥", ...arg);
};
const consoleErrorClient = (e, text, ...arr) => {
  if (e.response) {
    // console.error("╥", `${text} ==>`, e.response.data, );
    console.log("╥", `${text} ==>`, e.response.data);
    console.log("╥", `${text} ==>`, {
      ["╥err"]: e
    });
  } else {
    // console.error("╥", `${text} ==>`, e.message);
    console.log("╥", `${text} ==>`, e.message);
    console.log("╥", `${text} ==>`, {
      ["╥err"]: e
    });
  }
};

/***/ }),

/***/ "./utils/errMsg.js":
/*!*************************!*\
  !*** ./utils/errMsg.js ***!
  \*************************/
/*! exports provided: errMsg, errFld */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errMsg", function() { return errMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errFld", function() { return errFld; });
function errMsg(e) {
  try {
    if (e.response && e.response.data) {
      if (typeof e.response.data === "string") {
        return e.response.data;
      }

      return e.response.data.errors[0].message;
    } else {
      return e.message;
    }
  } catch (e) {
    return "Error: Unrecognized Error!!!";
  }
}
function errFld(e) {
  try {
    if (e.response && e.response.data) {
      return e.response.data.errors[0].field;
    }
  } catch (e) {}

  return "";
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy90aWNrZXRzL25ldy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25zb2xlTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJNc2cuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIklOSVRfU1RBVFVTIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsInVzZUZvcm0iLCJJTklUX0RBVEEiLCJvblN1Ym1pdENhbGxiYWNrIiwidmFsaWRhdG9yIiwiaW5pdFN0YXR1cyIsImZvcm1TdGF0ZSIsInNldEZvcm1TdGF0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ0aW1lcklkUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY2xlYXJUaW1lb3V0IiwiY3VycmVudCIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJmaWxlcyIsImN1cnJlbnRUYXJnZXQiLCJpbWFnZVByZXZpZXciLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdGF0ZSIsImltYWdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjbGVhciIsInNldFRpbWVvdXQiLCJlcnJNc2ciLCJjb25zb2xlRXJyb3JDbGllbnQiLCJJTklUX1NUQVRFIiwidGl0bGUiLCJwcmljZSIsIkNyZWF0ZVRpY2tldFBhZ2UiLCJzZXRTdGF0ZSIsIm9uU3VibWl0IiwiaGFuZGxlQmx1ciIsInBhcnNlRmxvYXQiLCJpc05hTiIsInRvRml4ZWQiLCJheGlvcyIsInBvc3QiLCJjb25zb2xlTG9nQ2xpZW50IiwiYXJnIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJhcnIiLCJyZXNwb25zZSIs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T3JDLENBQUMsQ0FBQ3FDLE9BQVQ7QUFDRDtBQUNGLEdBVEQsQ0FTRSxPQUFPckMsQ0FBUCxFQUFVO0FBQ1YsV0FBTyw4QkFBUDtBQUNEO0FBQ0Y7QUFDTSxTQUFTdUMsTUFBVCxDQUFnQnZDLENBQWhCLEVBQWtCO0FBQ3ZCLE1BQUk7QUFDRixRQUFJQSxDQUFDLENBQUNtQyxRQUFGLElBQWNuQyxDQUFDLENBQUNtQyxRQUFGLENBQVdDLElBQTdCLEVBQW1DO0FBQ2pDLGFBQU9wQyxDQUFDLENBQUNtQyxRQUFGLENBQVdDLElBQVgsQ0FBZ0JFLE1BQWhCLENBQXVCLENBQXZCLEVBQTBCRSxLQUFqQztBQUNEO0FBQ0YsR0FKRCxDQUlFLE9BQU94QyxDQUFQLEVBQVUsQ0FBSTs7QUFDaEIsU0FBTyxFQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUN0QkQsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvdGlja2V0cy9uZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3RpY2tldHMvbmV3LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2Vyck1zZ30gZnJvbSBcIi4uL3V0aWxzL2Vyck1zZ1wiO1xyXG5pbXBvcnQge2NvbnNvbGVFcnJvckNsaWVudH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVNZXNzYWdlXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IElOSVRfU1RBVFVTID0ge2xvYWRpbmc6ZmFsc2UsIGVycm9yOlwiXCIsIHN1Y2Nlc3M6XCJcIiwgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0gKElOSVRfREFUQT17fSwgb25TdWJtaXRDYWxsYmFjaywgdmFsaWRhdG9yLCBpbml0U3RhdHVzPUlOSVRfU1RBVFVTLCApe1xyXG4gIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShJTklUX0RBVEEpO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSBSZWFjdC51c2VTdGF0ZShpbml0U3RhdHVzKTtcclxuICBjb25zdCB0aW1lcklkUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICByZXR1cm4gKCk9PntjbGVhclRpbWVvdXQodGltZXJJZFJlZi5jdXJyZW50KTsgfVxyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3Qge25hbWUsIHZhbHVlLCBmaWxlcywgfSA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIGlmIChuYW1lID09PSBcImltYWdlXCIpIHtcclxuICAgICAgbGV0IGltYWdlUHJldmlldyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKTtcclxuICAgICAgc2V0Rm9ybVN0YXRlKCBzdGF0ZSA9PiAoeyAuLi5zdGF0ZSwgaW1hZ2U6ZmlsZXNbMF0sIGltYWdlUHJldmlldyB9KSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Rm9ybVN0YXRlKCBzdGF0ZSA9PiAoeyAuLi5zdGF0ZSwgW25hbWVdOnZhbHVlIH0pICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTdGF0dXMoe2xvYWRpbmc6IHRydWUsIGVycm9yOlwiXCIsIHN1Y2Nlc3M6XCJcIiwgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCB2YWxpZGF0b3IoZm9ybVN0YXRlKTtcclxuXHJcbiAgICAgIGNvbnN0IHtzdWNjZXNzLCBjbGVhcn0gPSBhd2FpdCBvblN1Ym1pdENhbGxiYWNrKGZvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlKSB8fCB7fTtcclxuICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICBzZXRTdGF0dXMoe2xvYWRpbmc6IGZhbHNlLCBlcnJvcjpcIlwiLCBzdWNjZXNzLCB9KTtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZFJlZi5jdXJyZW50KTtcclxuICAgICAgICB0aW1lcklkUmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpPT5zZXRTdGF0dXMoc3RhdGU9Pih7Li4uc3RhdGUsIHN1Y2Nlc3M6XCJcIix9KSApLCA0MDAwKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY2xlYXIpIHtzZXRGb3JtU3RhdGUoSU5JVF9EQVRBKTsgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBzZXRTdGF0dXMoe2xvYWRpbmc6IGZhbHNlLCBlcnJvcjogZXJyTXNnKGUpLCBzdWNjZXNzOlwiXCIsIH0pO1xyXG4gICAgICBjb25zb2xlRXJyb3JDbGllbnQoZSwgXCJFcnJvciB1c2VGb3JtIGhhbmRsZVN1Ym1pdFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHJldHVybiBbZm9ybVN0YXRlLCBzdGF0dXMsIGhhbmRsZUNoYW5nZSwgaGFuZGxlU3VibWl0LCBzZXRGb3JtU3RhdGUgXVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlRm9ybVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7Y29uc29sZUxvZ0NsaWVudH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnNvbGVNZXNzYWdlXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IElOSVRfU1RBVEUgPSB7dGl0bGU6XCJcIiwgcHJpY2U6XCJcIn07XHJcblxyXG5jb25zdCBDcmVhdGVUaWNrZXRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtU3RhdGUsIHN0YXR1cywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVTdWJtaXQsIHNldFN0YXRlXSA9IHVzZUZvcm0oSU5JVF9TVEFURSwgb25TdWJtaXQsIHZhbGlkYXRvciApO1xyXG4gIGNvbnN0IHt0aXRsZSwgcHJpY2V9ID0gZm9ybVN0YXRlO1xyXG4gIGNvbnN0IHtsb2FkaW5nLCBlcnJvciwgc3VjY2Vzc30gPSBzdGF0dXM7XHJcbiAgLy8gY29uc29sZUxvZ0NsaWVudChcIkNyZWF0ZVRpY2tldFBhZ2UgUmVuZGVyXCIsIHN1Y2Nlc3MpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQmx1ciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQocHJpY2UpO1xyXG4gICAgaWYgKGlzTmFOKHZhbHVlKSkge3JldHVybjsgfVxyXG4gICAgc2V0U3RhdGUoey4uLmZvcm1TdGF0ZSwgcHJpY2U6dmFsdWUudG9GaXhlZCgyKX0pO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRvciAoc3RhdGUpIHt9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0IChzdGF0ZSkge1xyXG4gICAgY29uc3Qge3RpdGxlLCBwcmljZX0gPSBzdGF0ZTtcclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3RpY2tldHNcIiwge3RpdGxlLCBwcmljZX0pO1xyXG4gICAgcmV0dXJuIHtzdWNjZXNzOlwiU3VjY2Vzc1wiLCBjbGVhcjp0cnVlfTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+Q3JlYXRlIE5ldyBUaWNrZXQ8L2gxPlxyXG5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+UHJpY2U8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpY2VcIiB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICB7ZXJyb3IgJiYgKDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRcIj57ZXJyb3J9PC9kaXY+KSB9XHJcbiAgICAgIHtzdWNjZXNzICYmICg8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0XCI+e3N1Y2Nlc3N9PC9kaXY+KSB9XHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVGlja2V0UGFnZTsiLCJcclxuZXhwb3J0IGNvbnN0IGNvbnNvbGVMb2dDbGllbnQgPSAoIC4uLmFyZykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwi4pWlXCIsIC4uLmFyZyk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnNvbGVFcnJvckNsaWVudCA9IChlLCB0ZXh0LCAuLi5hcnIgKSA9PiB7XHJcbiAgaWYgKGUucmVzcG9uc2UpIHtcclxuICAgIC8vIGNvbnNvbGUuZXJyb3IoXCLilaVcIiwgYCR7dGV4dH0gPT0+YCwgZS5yZXNwb25zZS5kYXRhLCApO1xyXG4gICAgY29uc29sZS5sb2coXCLilaVcIiwgYCR7dGV4dH0gPT0+YCwgIGUucmVzcG9uc2UuZGF0YSApO1xyXG4gICAgY29uc29sZS5sb2coXCLilaVcIiwgYCR7dGV4dH0gPT0+YCwgIHtbXCLilaVlcnJcIl06IGV9ICk7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBjb25zb2xlLmVycm9yKFwi4pWlXCIsIGAke3RleHR9ID09PmAsIGUubWVzc2FnZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIuKVpVwiLCBgJHt0ZXh0fSA9PT5gLCAgZS5tZXNzYWdlICk7XHJcbiAgICBjb25zb2xlLmxvZyhcIuKVpVwiLCBgJHt0ZXh0fSA9PT5gLCAge1tcIuKVpWVyclwiXTogZX0gKTtcclxuXHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuIiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBlcnJNc2coZSl7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChlLnJlc3BvbnNlICYmIGUucmVzcG9uc2UuZGF0YSl7XHJcbiAgICAgIGlmICh0eXBlb2YoZS5yZXNwb25zZS5kYXRhKSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBlLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGUucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0ubWVzc2FnZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBlLm1lc3NhZ2U7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIFwiRXJyb3I6IFVucmVjb2duaXplZCBFcnJvciEhIVwiO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXJyRmxkKGUpe1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoZS5yZXNwb25zZSAmJiBlLnJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgcmV0dXJuIGUucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0uZmllbGQ7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkgeyAgfVxyXG4gIHJldHVybiBcIlwiO1xyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9