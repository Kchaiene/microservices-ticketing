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
  }, !currentUserId && {
    label: "Sell Tickets",
    href: "/tickets/new"
  }, !currentUserId && {
    label: "My Orders",
    href: "/orders"
  }, !currentUserId && {
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
          lineNumber: 18,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: link.href,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsImN1cnJlbnRVc2VyIiwiY3VycmVudFVzZXJJZCIsImlkIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJzaG93TGlua3MiLCJtYXAiLCJsaW5rIiwiQm9vbGVhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSwwQkFDR0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsdUVBQWpCLENBREg7QUFBQSxNQUNaQyxXQURZLHFCQUNaQSxXQURZOztBQUVuQixNQUFNQyxhQUFhLEdBQUdELFdBQVcsSUFBSUEsV0FBVyxDQUFDRSxFQUFqRDtBQUNBLE1BQU1DLEtBQUssR0FBRyxDQUNaLENBQUNGLGFBQUQsSUFBa0I7QUFBQ0csU0FBSyxFQUFDLFNBQVA7QUFBa0JDLFFBQUksRUFBQztBQUF2QixHQUROLEVBRVosQ0FBQ0osYUFBRCxJQUFrQjtBQUFDRyxTQUFLLEVBQUMsU0FBUDtBQUFrQkMsUUFBSSxFQUFDO0FBQXZCLEdBRk4sRUFHWixDQUFDSixhQUFELElBQWtCO0FBQUNHLFNBQUssRUFBQyxjQUFQO0FBQXVCQyxRQUFJLEVBQUM7QUFBNUIsR0FITixFQUlaLENBQUNKLGFBQUQsSUFBa0I7QUFBQ0csU0FBSyxFQUFDLFdBQVA7QUFBb0JDLFFBQUksRUFBQztBQUF6QixHQUpOLEVBS1osQ0FBQ0osYUFBRCxJQUFrQjtBQUFDRyxTQUFLLEVBQUMsVUFBUDtBQUFtQkMsUUFBSSxFQUFDO0FBQXhCLEdBTE4sQ0FBZDs7QUFRQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBSCxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLGFBQUdDLE9BQU8sQ0FBQ0QsSUFBRCxDQUFQLElBQzFDO0FBQUksV0FBRyxFQUFFQSxJQUFJLENBQUNILElBQWQ7QUFBb0IsaUJBQVMsRUFBQyxVQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRUcsSUFBSSxDQUFDSCxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXVCO0FBQUcsaUJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBeUJHLElBQUksQ0FBQ0osS0FBOUIsQ0FBdkIsQ0FERixDQUR1QztBQUFBLEtBQWQsQ0FBSjtBQUFBLEdBQXZCLENBWG1CLENBZW5COzs7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFmLENBREYsRUFHRTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsK0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxTQUFTLENBQUNILEtBQUQsQ0FEWixDQURGLENBSEYsQ0FERjtBQVdELENBOUJEOztHQUFNUCxNOztLQUFBQSxNO0FBaUNTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY1MWRiZjFlNjU5NzNhODZmZDIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VXNlckNvbnRleHR9IGZyb20gXCIuLi8uLi9yZWFjdC1jb250ZXh0L3VzZXItY29udGV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtjdXJyZW50VXNlcn0gPSBSZWFjdC51c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBjdXJyZW50VXNlcklkID0gY3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIuaWQ7XHJcbiAgY29uc3QgbGlua3MgPSBbXHJcbiAgICAhY3VycmVudFVzZXJJZCAmJiB7bGFiZWw6XCJTaWduIFVwXCIsIGhyZWY6XCIvYXV0aC9zaWdudXBcIn0sXHJcbiAgICAhY3VycmVudFVzZXJJZCAmJiB7bGFiZWw6XCJTaWduIEluXCIsIGhyZWY6XCIvYXV0aC9zaWduaW5cIn0sXHJcbiAgICAhY3VycmVudFVzZXJJZCAmJiB7bGFiZWw6XCJTZWxsIFRpY2tldHNcIiwgaHJlZjpcIi90aWNrZXRzL25ld1wifSxcclxuICAgICFjdXJyZW50VXNlcklkICYmIHtsYWJlbDpcIk15IE9yZGVyc1wiLCBocmVmOlwiL29yZGVyc1wifSxcclxuICAgICFjdXJyZW50VXNlcklkICYmIHtsYWJlbDpcIlNpZ24gT3V0XCIsIGhyZWY6XCIvYXV0aC9zaWdub3V0XCJ9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHNob3dMaW5rcyA9IGxpbmtzID0+IGxpbmtzLm1hcChsaW5rPT4gQm9vbGVhbihsaW5rKSAmJlxyXG4gICAgPGxpIGtleT17bGluay5ocmVmfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICA8TGluayBocmVmPXtsaW5rLmhyZWZ9PjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e2xpbmsubGFiZWx9PC9hPjwvTGluaz5cclxuICAgIDwvbGk+ICk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJIZWFkZXIgUmVuZGVyXCIsIGN1cnJlbnRVc2VyKTtcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+R2l0VGl4PC9hPjwvTGluaz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIHtzaG93TGlua3MobGlua3MpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9