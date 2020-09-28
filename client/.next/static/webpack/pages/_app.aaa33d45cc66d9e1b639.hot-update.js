webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/_App/Header.js":
/*!***********************************!*\
  !*** ./components/_App/Header.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_context_user_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../react-context/user-context */ "./react-context/user-context.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "D:\\WebStormProject\\Microservices with Node JS and React\\micros-ticketing\\client\\components\\_App\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Header = function Header() {
  _s();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_react_context_user_context__WEBPACK_IMPORTED_MODULE_1__["UserContext"]),
      currentUser = _React$useContext.currentUser;

  var currentUserId = currentUser && currentUser.id;
  var links = [!currentUserId && {
    label: "Sign Up",
    href: "/auth/signup"
  }, !currentUserId && {
    label: "Sign In",
    href: "/auth/signin"
  }, currentUserId && {
    label: "Sell Tickets",
    href: "/tickets/new"
  }, currentUserId && {
    label: "Sign Out",
    href: "/auth/signout"
  }];

  var showLinks = function showLinks(links) {
    return links.map(function (link) {
      return Boolean(link) && __jsx("li", {
        key: link.href,
        className: "nav-item",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: link.href,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 30
        }
      }, link.label)));
    });
  }; // console.log("Header Render", currentUser);


  return __jsx("nav", {
    className: "navbar navbar-light bg-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 22
    }
  }, "GitTix")), __jsx("div", {
    className: "d-flex justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "nav d-flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, showLinks(links))));
};

_s(Header, "T/0NbE5fCPzJ+82MNh+lO012Fso=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsImN1cnJlbnRVc2VyIiwiY3VycmVudFVzZXJJZCIsImlkIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJzaG93TGlua3MiLCJtYXAiLCJsaW5rIiwiQm9vbGVhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSwwQkFDR0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsdUVBQWpCLENBREg7QUFBQSxNQUNaQyxXQURZLHFCQUNaQSxXQURZOztBQUVuQixNQUFNQyxhQUFhLEdBQUdELFdBQVcsSUFBSUEsV0FBVyxDQUFDRSxFQUFqRDtBQUNBLE1BQU1DLEtBQUssR0FBRyxDQUNaLENBQUNGLGFBQUQsSUFBa0I7QUFBQ0csU0FBSyxFQUFDLFNBQVA7QUFBa0JDLFFBQUksRUFBQztBQUF2QixHQUROLEVBRVosQ0FBQ0osYUFBRCxJQUFrQjtBQUFDRyxTQUFLLEVBQUMsU0FBUDtBQUFrQkMsUUFBSSxFQUFDO0FBQXZCLEdBRk4sRUFHWkosYUFBYSxJQUFJO0FBQUNHLFNBQUssRUFBQyxjQUFQO0FBQXVCQyxRQUFJLEVBQUM7QUFBNUIsR0FITCxFQUlaSixhQUFhLElBQUk7QUFBQ0csU0FBSyxFQUFDLFVBQVA7QUFBbUJDLFFBQUksRUFBQztBQUF4QixHQUpMLENBQWQ7O0FBT0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQUgsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxhQUFHQyxPQUFPLENBQUNELElBQUQsQ0FBUCxJQUMxQztBQUFJLFdBQUcsRUFBRUEsSUFBSSxDQUFDSCxJQUFkO0FBQW9CLGlCQUFTLEVBQUMsVUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUVHLElBQUksQ0FBQ0gsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF1QjtBQUFHLGlCQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXlCRyxJQUFJLENBQUNKLEtBQTlCLENBQXZCLENBREYsQ0FEdUM7QUFBQSxLQUFkLENBQUo7QUFBQSxHQUF2QixDQVZtQixDQWlCbkI7OztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWU7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWYsQ0FERixFQUdFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQywrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLFNBQVMsQ0FBQ0gsS0FBRCxDQURaLENBREYsQ0FIRixDQURGO0FBV0QsQ0E5QkQ7O0dBQU1QLE07O0tBQUFBLE07QUFpQ1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWFhMzNkNDVjYzY2ZDllMWI2MzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSBcIi4uLy4uL3JlYWN0LWNvbnRleHQvdXNlci1jb250ZXh0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qge2N1cnJlbnRVc2VyfSA9IFJlYWN0LnVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci5pZDtcclxuICBjb25zdCBsaW5rcyA9IFtcclxuICAgICFjdXJyZW50VXNlcklkICYmIHtsYWJlbDpcIlNpZ24gVXBcIiwgaHJlZjpcIi9hdXRoL3NpZ251cFwifSxcclxuICAgICFjdXJyZW50VXNlcklkICYmIHtsYWJlbDpcIlNpZ24gSW5cIiwgaHJlZjpcIi9hdXRoL3NpZ25pblwifSxcclxuICAgIGN1cnJlbnRVc2VySWQgJiYge2xhYmVsOlwiU2VsbCBUaWNrZXRzXCIsIGhyZWY6XCIvdGlja2V0cy9uZXdcIn0sXHJcbiAgICBjdXJyZW50VXNlcklkICYmIHtsYWJlbDpcIlNpZ24gT3V0XCIsIGhyZWY6XCIvYXV0aC9zaWdub3V0XCJ9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHNob3dMaW5rcyA9IGxpbmtzID0+IGxpbmtzLm1hcChsaW5rPT4gQm9vbGVhbihsaW5rKSAmJlxyXG4gICAgPGxpIGtleT17bGluay5ocmVmfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICA8TGluayBocmVmPXtsaW5rLmhyZWZ9PjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e2xpbmsubGFiZWx9PC9hPjwvTGluaz5cclxuICAgIDwvbGk+ICk7XHJcblxyXG5cclxuXHJcbiAgLy8gY29uc29sZS5sb2coXCJIZWFkZXIgUmVuZGVyXCIsIGN1cnJlbnRVc2VyKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPkdpdFRpeDwvYT48L0xpbms+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICB7c2hvd0xpbmtzKGxpbmtzKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gIClcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==