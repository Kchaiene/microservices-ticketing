webpackHotUpdate_N_E("pages/orders",{

/***/ "./pages/orders/index.js":
/*!*******************************!*\
  !*** ./pages/orders/index.js ***!
  \*******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "D:\\WebStormProject\\Microservices with Node JS and React\\micros-ticketing\\client\\pages\\orders\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var OrdersListPage = function OrdersListPage(_ref) {
  var orders = _ref.orders;

  var showOrders = function showOrders(orders) {
    return orders.map(function (order) {
      return Boolean(order) && __jsx("li", {
        key: order.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 5
        }
      }, order.ticket.title, " - ", order.status);
    });
  };

  return __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "Orders List "), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, orders && showOrders(orders)));
};

_c = OrdersListPage;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (OrdersListPage);

var _c;

$RefreshReg$(_c, "OrdersListPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk9yZGVyc0xpc3RQYWdlIiwib3JkZXJzIiwic2hvd09yZGVycyIsIm1hcCIsIm9yZGVyIiwiQm9vbGVhbiIsImlkIiwidGlja2V0IiwidGl0bGUiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUtBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBZ0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBRXJDLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFELE1BQU07QUFBQSxXQUFJQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFBQyxLQUFLO0FBQUEsYUFBR0MsT0FBTyxDQUFDRCxLQUFELENBQVAsSUFDOUM7QUFBSSxXQUFHLEVBQUVBLEtBQUssQ0FBQ0UsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQURoQixTQUMwQkosS0FBSyxDQUFDSyxNQURoQyxDQUQyQztBQUFBLEtBQWhCLENBQUo7QUFBQSxHQUF6Qjs7QUFNQSxTQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dSLE1BQU0sSUFBSUMsVUFBVSxDQUFDRCxNQUFELENBRHZCLENBRkYsQ0FERjtBQVFELENBaEJEOztLQUFNRCxjOztBQWdDU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3JkZXJzLjgyYTFmZTEyNGYzNzMzMzIwN2JjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7c2VydlRpY2tldGluZ30gZnJvbSBcIi4uLy4uL2FwaS9idWlsZC1jbGllbnRcIjtcclxuXHJcblxyXG5cclxuY29uc3QgT3JkZXJzTGlzdFBhZ2UgPSAoeyBvcmRlcnMgfSkgPT4ge1xyXG5cclxuICBjb25zdCBzaG93T3JkZXJzID0gb3JkZXJzID0+IG9yZGVycy5tYXAob3JkZXI9PiBCb29sZWFuKG9yZGVyKSAmJlxyXG4gICAgPGxpIGtleT17b3JkZXIuaWR9PlxyXG4gICAgICB7b3JkZXIudGlja2V0LnRpdGxlfSAtIHtvcmRlci5zdGF0dXN9XHJcbiAgICA8L2xpPiApO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMj5PcmRlcnMgTGlzdCA8L2gyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge29yZGVycyAmJiBzaG93T3JkZXJzKG9yZGVycyl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7aGVhZGVyczogY3R4LnJlcS5oZWFkZXJzIH07XHJcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBzZXJ2VGlja2V0aW5nLmdldChcIi9hcGkvb3JkZXJzXCIsIG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHtwcm9wczp7b3JkZXJzOiBkYXRhfX1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIE9yZGVyTGlzdCBTZXJ2ZXJTaWRlID09PlwiLCBlLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIHtwcm9wczp7fX1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlcnNMaXN0UGFnZTsiXSwic291cmNlUm9vdCI6IiJ9