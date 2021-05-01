webpackHotUpdate_N_E("pages/match/[id]",{

/***/ "./src/hooks/connection.tsx":
/*!**********************************!*\
  !*** ./src/hooks/connection.tsx ***!
  \**********************************/
/*! exports provided: ConnectionProvider, useConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionProvider", function() { return ConnectionProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConnection", function() { return useConnection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/mnt/g/Projetos/keybit/web-client/src/hooks/connection.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ConnectionContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
function ConnectionProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      ping = _useState[0],
      setPing = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    var socketIO = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_1__["io"])("http://api.wemakean.com/");
    return socketIO;
  }),
      socket = _useState2[0],
      setSocket = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getPing();
    setInterval(function () {
      return getPing();
    }, 5000);
  }, [socket]);

  function getPing() {
    socket.emit("latency", Date.now(), function (startTime) {
      var latency = Date.now() - startTime;
      setPing(latency);
    });
  }

  return __jsx(ConnectionContext.Provider, {
    value: {
      socket: socket,
      setSocket: setSocket,
      ping: ping,
      setPing: setPing
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, children);
}

_s(ConnectionProvider, "HRJx+1P3SJhlICvrHZB2HZiahGs=");

_c = ConnectionProvider;
function useConnection() {
  _s2();

  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ConnectionContext);

  if (!context) {
    throw new Error("useConnection must be used within a ConnectionProvider");
  }

  return context;
}

_s2(useConnection, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

var _c;

$RefreshReg$(_c, "ConnectionProvider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL2Nvbm5lY3Rpb24udHN4Il0sIm5hbWVzIjpbIkNvbm5lY3Rpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvbm5lY3Rpb25Qcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJwaW5nIiwic2V0UGluZyIsInNvY2tldElPIiwiaW8iLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJ1c2VFZmZlY3QiLCJnZXRQaW5nIiwic2V0SW50ZXJ2YWwiLCJlbWl0IiwiRGF0ZSIsIm5vdyIsInN0YXJ0VGltZSIsImxhdGVuY3kiLCJ1c2VDb25uZWN0aW9uIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFhQSxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQWdDLElBQWhDLENBQXZDO0FBRU8sU0FBU0Msa0JBQVQsT0FBbUU7QUFBQTs7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDOztBQUFBLGtCQUNoREMsc0RBQVEsQ0FBQyxDQUFELENBRHdDO0FBQUEsTUFDakVDLElBRGlFO0FBQUEsTUFDM0RDLE9BRDJEOztBQUFBLG1CQUU1Q0Ysc0RBQVEsQ0FBUyxZQUFNO0FBQ2pELFFBQU1HLFFBQVEsR0FBR0MsMkRBQUUsQ0FBQywwQkFBRCxDQUFuQjtBQUVBLFdBQU9ELFFBQVA7QUFDRCxHQUptQyxDQUZvQztBQUFBLE1BRWpFRSxNQUZpRTtBQUFBLE1BRXpEQyxTQUZ5RDs7QUFReEVDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPO0FBQ1BDLGVBQVcsQ0FBQztBQUFBLGFBQU1ELE9BQU8sRUFBYjtBQUFBLEtBQUQsRUFBa0IsSUFBbEIsQ0FBWDtBQUNELEdBSFEsRUFHTixDQUFDSCxNQUFELENBSE0sQ0FBVDs7QUFLQSxXQUFTRyxPQUFULEdBQW1CO0FBQ2pCSCxVQUFNLENBQUNLLElBQVAsQ0FBWSxTQUFaLEVBQXVCQyxJQUFJLENBQUNDLEdBQUwsRUFBdkIsRUFBbUMsVUFBQ0MsU0FBRCxFQUFvQjtBQUNyRCxVQUFNQyxPQUFPLEdBQUdILElBQUksQ0FBQ0MsR0FBTCxLQUFhQyxTQUE3QjtBQUNBWCxhQUFPLENBQUNZLE9BQUQsQ0FBUDtBQUNELEtBSEQ7QUFJRDs7QUFFRCxTQUNFLE1BQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFBNEIsU0FBSyxFQUFFO0FBQUVULFlBQU0sRUFBTkEsTUFBRjtBQUFVQyxlQUFTLEVBQVRBLFNBQVY7QUFBcUJMLFVBQUksRUFBSkEsSUFBckI7QUFBMkJDLGFBQU8sRUFBUEE7QUFBM0IsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxRQURILENBREY7QUFLRDs7R0F6QmVELGtCOztLQUFBQSxrQjtBQTJCVCxTQUFTaUIsYUFBVCxHQUFpRDtBQUFBOztBQUN0RCxNQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUNyQixpQkFBRCxDQUExQjs7QUFFQSxNQUFJLENBQUNvQixPQUFMLEVBQWM7QUFDWixVQUFNLElBQUlFLEtBQUosQ0FBVSx3REFBVixDQUFOO0FBQ0Q7O0FBRUQsU0FBT0YsT0FBUDtBQUNEOztJQVJlRCxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hdGNoL1tpZF0uZTVmMzQ2NDI0NGJhNmM3MDVjYjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbywgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcblxuaW50ZXJmYWNlIENvbm5lY3Rpb25Qcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuaW50ZXJmYWNlIENvbm5lY3Rpb25Db250ZXh0UHJvcHMge1xuICBzb2NrZXQ6IFNvY2tldDtcbiAgc2V0U29ja2V0KHNvY2tldDogU29ja2V0KTogdm9pZDtcbiAgcGluZzogbnVtYmVyO1xuICBzZXRQaW5nKHBpbmc6IG51bWJlcik6IHZvaWQ7XG59XG5cbmNvbnN0IENvbm5lY3Rpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb25uZWN0aW9uQ29udGV4dFByb3BzIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb25uZWN0aW9uUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDb25uZWN0aW9uUHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbcGluZywgc2V0UGluZ10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlPFNvY2tldD4oKCkgPT4ge1xuICAgIGNvbnN0IHNvY2tldElPID0gaW8oXCJodHRwOi8vYXBpLndlbWFrZWFuLmNvbS9cIik7XG5cbiAgICByZXR1cm4gc29ja2V0SU87XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UGluZygpO1xuICAgIHNldEludGVydmFsKCgpID0+IGdldFBpbmcoKSwgNTAwMCk7XG4gIH0sIFtzb2NrZXRdKTtcblxuICBmdW5jdGlvbiBnZXRQaW5nKCkge1xuICAgIHNvY2tldC5lbWl0KFwibGF0ZW5jeVwiLCBEYXRlLm5vdygpLCAoc3RhcnRUaW1lOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGxhdGVuY3kgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgICAgc2V0UGluZyhsYXRlbmN5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbm5lY3Rpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNvY2tldCwgc2V0U29ja2V0LCBwaW5nLCBzZXRQaW5nIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29ubmVjdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb25uZWN0aW9uKCk6IENvbm5lY3Rpb25Db250ZXh0UHJvcHMge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb25uZWN0aW9uQ29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQ29ubmVjdGlvbiBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQ29ubmVjdGlvblByb3ZpZGVyXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9