webpackHotUpdate_N_E("pages/match/[id]",{

/***/ "./src/components/Match/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Match/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Match; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var _hooks_room__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/room */ "./src/hooks/room.tsx");
/* harmony import */ var _utils_alphabet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/alphabet */ "./src/utils/alphabet.ts");
/* harmony import */ var _utils_hp_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/hp-color */ "./src/utils/hp-color.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/components/Match/styles.ts");
var _jsxFileName = "/mnt/g/Projetos/keybit/web-client/src/components/Match/index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Match() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      key = _useState[0],
      setKey = _useState[1];

  var _useRoom = Object(_hooks_room__WEBPACK_IMPORTED_MODULE_3__["useRoom"])(),
      attackEnemy = _useRoom.attackEnemy,
      resetCombo = _useRoom.resetCombo,
      me = _useRoom.me,
      room = _useRoom.room;

  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var counterRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (containerRef) {
      var _containerRef$current;

      showKey();
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.focus();
    }
  }, [containerRef]);

  function showKey() {
    var newKey = _utils_alphabet__WEBPACK_IMPORTED_MODULE_4__["default"][Math.floor(Math.random() * 26)];
    setKey(newKey);
  }

  function handleKey(e) {
    if (e.key.toLowerCase() === key) {
      var _counterRef$current;

      attackEnemy();
      showKey();
      counterRef === null || counterRef === void 0 ? void 0 : (_counterRef$current = counterRef.current) === null || _counterRef$current === void 0 ? void 0 : _counterRef$current.animate([{
        transform: "scale(1)"
      }, {
        transform: "scale(1.2)"
      }], {
        duration: 150
      });
    } else {//resetCombo();
    }
  }

  function handleTime() {
    if (room && me) {
      var diff = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInSeconds"])(me === null || me === void 0 ? void 0 : me.deathIn, room.startedIn);
      var add = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addSeconds"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()), diff);
      return Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(add, "mm:ss");
    }

    return "";
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, me !== null && me !== void 0 && me.isAlive ? __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    hp: Object(_utils_hp_color__WEBPACK_IMPORTED_MODULE_5__["default"])(me.hp),
    ref: containerRef,
    tabIndex: 1,
    onKeyDown: handleKey,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "counter",
    ref: counterRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, key), __jsx("div", {
    className: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "attribute",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, "vida"), __jsx("div", {
    className: "value",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, me.hp)), __jsx("div", {
    className: "attribute",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "combo"), __jsx("div", {
    className: "value combo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, me.combo)))) : __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    hp: "#721BE1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_2__["GiDeathSkull"], {
    color: "#721BE1",
    size: 80,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "Voc\xEA foi eliminado"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, handleTime())));
}

_s(Match, "+j4uWtQWtzfH3tdLVYra0A4Ek5E=", false, function () {
  return [_hooks_room__WEBPACK_IMPORTED_MODULE_3__["useRoom"]];
});

_c = Match;

var _c;

$RefreshReg$(_c, "Match");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWF0Y2gvaW5kZXgudHN4Il0sIm5hbWVzIjpbIk1hdGNoIiwidXNlU3RhdGUiLCJrZXkiLCJzZXRLZXkiLCJ1c2VSb29tIiwiYXR0YWNrRW5lbXkiLCJyZXNldENvbWJvIiwibWUiLCJyb29tIiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwiY291bnRlclJlZiIsInVzZUVmZmVjdCIsInNob3dLZXkiLCJjdXJyZW50IiwiZm9jdXMiLCJuZXdLZXkiLCJhbHBoYWJldCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhhbmRsZUtleSIsImUiLCJ0b0xvd2VyQ2FzZSIsImFuaW1hdGUiLCJ0cmFuc2Zvcm0iLCJkdXJhdGlvbiIsImhhbmRsZVRpbWUiLCJkaWZmIiwiZGlmZmVyZW5jZUluU2Vjb25kcyIsImRlYXRoSW4iLCJzdGFydGVkSW4iLCJhZGQiLCJhZGRTZWNvbmRzIiwic3RhcnRPZkRheSIsIkRhdGUiLCJmb3JtYXQiLCJpc0FsaXZlIiwiaGFuZGxlSHAiLCJocCIsImNvbWJvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsRUFBRCxDQURBO0FBQUEsTUFDdkJDLEdBRHVCO0FBQUEsTUFDbEJDLE1BRGtCOztBQUFBLGlCQUdnQkMsMkRBQU8sRUFIdkI7QUFBQSxNQUd0QkMsV0FIc0IsWUFHdEJBLFdBSHNCO0FBQUEsTUFHVEMsVUFIUyxZQUdUQSxVQUhTO0FBQUEsTUFHR0MsRUFISCxZQUdHQSxFQUhIO0FBQUEsTUFHT0MsSUFIUCxZQUdPQSxJQUhQOztBQUs5QixNQUFNQyxZQUFZLEdBQUdDLG9EQUFNLENBQWlCLElBQWpCLENBQTNCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHRCxvREFBTSxDQUFpQixJQUFqQixDQUF6QjtB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQWMsU0FBSyxFQUFDLFNBQXBCO0FBQThCLFFBQUksRUFBRSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLYixVQUFVLEVBQWYsQ0FIRixDQTFCSixDQURGO0FBbUNEOztHQWxGdUIzQixLO1VBR3dCSSxtRDs7O0tBSHhCSixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hdGNoL1tpZF0uZGRmNDY5ZGU3M2JhNzJkZmIwOWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZFNlY29uZHMsIGRpZmZlcmVuY2VJblNlY29uZHMsIGZvcm1hdCwgc3RhcnRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHaURlYXRoU2t1bGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcblxuaW1wb3J0IHsgdXNlUm9vbSB9IGZyb20gXCIuLi8uLi9ob29rcy9yb29tXCI7XG5pbXBvcnQgYWxwaGFiZXQgZnJvbSBcIi4uLy4uL3V0aWxzL2FscGhhYmV0XCI7XG5pbXBvcnQgaGFuZGxlSHAgZnJvbSBcIi4uLy4uL3V0aWxzL2hwLWNvbG9yXCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaCgpIHtcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHsgYXR0YWNrRW5lbXksIHJlc2V0Q29tYm8sIG1lLCByb29tIH0gPSB1c2VSb29tKCk7XG5cbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgY291bnRlclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udGFpbmVyUmVmKSB7XG4gICAgICBzaG93S2V5KCk7XG4gICAgICBjb250YWluZXJSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICB9XG4gIH0sIFtjb250YWluZXJSZWZdKTtcblxuICBmdW5jdGlvbiBzaG93S2V5KCkge1xuICAgIGNvbnN0IG5ld0tleSA9IGFscGhhYmV0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI2KV07XG5cbiAgICBzZXRLZXkobmV3S2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUtleShlOiBhbnkpIHtcbiAgICBpZiAoZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0ga2V5KSB7XG4gICAgICBhdHRhY2tFbmVteSgpO1xuICAgICAgc2hvd0tleSgpO1xuICAgICAgY291bnRlclJlZj8uY3VycmVudD8uYW5pbWF0ZShcbiAgICAgICAgW3sgdHJhbnNmb3JtOiBcInNjYWxlKDEpXCIgfSwgeyB0cmFuc2Zvcm06IFwic2NhbGUoMS4yKVwiIH1dLFxuICAgICAgICB7XG4gICAgICAgICAgZHVyYXRpb246IDE1MCxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9yZXNldENvbWJvKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVGltZSgpIHtcbiAgICBpZiAocm9vbSAmJiBtZSkge1xuICAgICAgY29uc3QgZGlmZiA9IGRpZmZlcmVuY2VJblNlY29uZHMobWU/LmRlYXRoSW4sIHJvb20uc3RhcnRlZEluKTtcbiAgICAgIGNvbnN0IGFkZCA9IGFkZFNlY29uZHMoc3RhcnRPZkRheShuZXcgRGF0ZSgpKSwgZGlmZik7XG5cbiAgICAgIHJldHVybiBmb3JtYXQoYWRkLCBcIm1tOnNzXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge21lPy5pc0FsaXZlID8gKFxuICAgICAgICA8Uy5Db250YWluZXJcbiAgICAgICAgICBocD17aGFuZGxlSHAobWUuaHApfVxuICAgICAgICAgIHJlZj17Y29udGFpbmVyUmVmfVxuICAgICAgICAgIHRhYkluZGV4PXsxfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBpZD1cImNvdW50ZXJcIiByZWY9e2NvdW50ZXJSZWZ9PlxuICAgICAgICAgICAge2tleX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpYnV0ZVwiPlxuICAgICAgICAgICAgICA8c3Bhbj52aWRhPC9zcGFuPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj57bWUuaHB9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRlXCI+XG4gICAgICAgICAgICAgIDxzcGFuPmNvbWJvPC9zcGFuPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsdWUgY29tYm9cIj57bWUuY29tYm99PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TLkNvbnRhaW5lcj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxTLkNvbnRhaW5lciBocD1cIiM3MjFCRTFcIj5cbiAgICAgICAgICA8R2lEZWF0aFNrdWxsIGNvbG9yPVwiIzcyMUJFMVwiIHNpemU9ezgwfSAvPlxuICAgICAgICAgIDxoMj5Wb2PDqiBmb2kgZWxpbWluYWRvPC9oMj5cbiAgICAgICAgICA8aDQ+e2hhbmRsZVRpbWUoKX08L2g0PlxuICAgICAgICA8L1MuQ29udGFpbmVyPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=