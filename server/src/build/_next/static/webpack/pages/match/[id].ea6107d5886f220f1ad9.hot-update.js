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
    console.log('key disparada');

    if (e.key.toLowerCase() === key) {
      var _counterRef$current;

      console.log('key');
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
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "counter",
    ref: counterRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, key), __jsx("div", {
    className: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "attribute",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "vida"), __jsx("div", {
    className: "value",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, me.hp)), __jsx("div", {
    className: "attribute",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "combo"), __jsx("div", {
    className: "value combo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, me.combo)))) : __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    hp: "#721BE1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_2__["GiDeathSkull"], {
    color: "#721BE1",
    size: 80,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "Voc\xEA foi eliminado"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWF0Y2gvaW5kZXgudHN4Il0sIm5hbWVzIjpbIk1hdGNoIiwidXNlU3RhdGUiLCJrZXkiLCJzZXRLZXkiLCJ1c2VSb29tIiwiYXR0YWNrRW5lbXkiLCJyZXNldENvbWJvIiwibWUiLCJyb29tIiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwiY291bnRlclJlZiIsInVzZUVmZmVjdCIsInNob3dLZXkiLCJjdXJyZW50IiwiZm9jdXMiLCJuZXdLZXkiLCJhbHBoYWJldCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhhbmRsZUtleSIsImUiLCJjb25zb2xlIiwibG9nIiwidG9Mb3dlckNhc2UiLCJhbmltYXRlIiwidHJhbnNmb3JtIiwiZHVyYXRpb24iLCJoYW5kbGVUaW1lIiwiZGlmZiIsImRpZmZlcmVuY2VJblNlY29uZHMiLCJkZWF0aEluIiwic3RhcnRlZEluIiwiYWRkIiwiYWRkU2Vjb25kcyIsInN0YXJ0T2ZEYXkiLCJEYXRlIiwiZm9ybWF0IiwiaXNBbGl2ZSIsImhhbmRsZUhwIiwiaHAiLCJjb21ibyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDLEVBQUQsQ0FEQTtBQUFBLE1BQ3ZCQyxHQUR1QjtBQUFBLE1BQ2xCQyxNQURrQjs7QUFBQSxpQkFHZ0JDLDJEQUFPLEVBSHZCO0FBQUEsTUFHdEJDLFdBSHNCLFlBR3RCQSxXQUhzQjtBQUFBLE1BR1RDLFVBSFMsWUFHVEEsVUFIUztBQUFBLE1BR0dDLEVBSEgsWUFHR0EsRUFISDtBQUFBLE1BR09DLElBSFAsWUFHT0EsSUFIUDs7QUFLOUIsTUFBTUMsWUFBWSxHQUFHQyxvREFBTSxDQUFpQixJQUFqQixDQUEzQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0Qsb0RBQU0sQ0FB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QUFFLENBQUNtQyxLQUFqQyxDQUhGLENBTkYsQ0FWRixDQURELEdBeUJDLE1BQUMsaURBQUQ7QUFBYSxNQUFFLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBYyxTQUFLLEVBQUMsU0FBcEI7QUFBOEIsUUFBSSxFQUFFLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtiLFVBQVUsRUFBZixDQUhGLENBMUJKLENBREY7QUFtQ0Q7O0dBcEZ1QjdCLEs7VUFHd0JJLG1EOzs7S0FIeEJKLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWF0Y2gvW2lkXS5lYTYxMDdkNTg4NmYyMjBmMWFkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkU2Vjb25kcywgZGlmZmVyZW5jZUluU2Vjb25kcywgZm9ybWF0LCBzdGFydE9mRGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdpRGVhdGhTa3VsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuXG5pbXBvcnQgeyB1c2VSb29tIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3Jvb21cIjtcbmltcG9ydCBhbHBoYWJldCBmcm9tIFwiLi4vLi4vdXRpbHMvYWxwaGFiZXRcIjtcbmltcG9ydCBoYW5kbGVIcCBmcm9tIFwiLi4vLi4vdXRpbHMvaHAtY29sb3JcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoKCkge1xuICBjb25zdCBba2V5LCBzZXRLZXldID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgeyBhdHRhY2tFbmVteSwgcmVzZXRDb21ibywgbWUsIHJvb20gfSA9IHVzZVJvb20oKTtcblxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjb3VudGVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250YWluZXJSZWYpIHtcbiAgICAgIHNob3dLZXkoKTtcbiAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50Py5mb2N1cygpO1xuICAgIH1cbiAgfSwgW2NvbnRhaW5lclJlZl0pO1xuXG4gIGZ1bmN0aW9uIHNob3dLZXkoKSB7XG4gICAgY29uc3QgbmV3S2V5ID0gYWxwaGFiZXRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjYpXTtcblxuICAgIHNldEtleShuZXdLZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5KGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdrZXkgZGlzcGFyYWRhJylcbiAgICBpZiAoZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0ga2V5KSB7XG4gICAgICBjb25zb2xlLmxvZygna2V5JylcbiAgICAgIGF0dGFja0VuZW15KCk7XG4gICAgICBzaG93S2V5KCk7XG4gICAgICBjb3VudGVyUmVmPy5jdXJyZW50Py5hbmltYXRlKFxuICAgICAgICBbeyB0cmFuc2Zvcm06IFwic2NhbGUoMSlcIiB9LCB7IHRyYW5zZm9ybTogXCJzY2FsZSgxLjIpXCIgfV0sXG4gICAgICAgIHtcbiAgICAgICAgICBkdXJhdGlvbjogMTUwLFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL3Jlc2V0Q29tYm8oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUaW1lKCkge1xuICAgIGlmIChyb29tICYmIG1lKSB7XG4gICAgICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluU2Vjb25kcyhtZT8uZGVhdGhJbiwgcm9vbS5zdGFydGVkSW4pO1xuICAgICAgY29uc3QgYWRkID0gYWRkU2Vjb25kcyhzdGFydE9mRGF5KG5ldyBEYXRlKCkpLCBkaWZmKTtcblxuICAgICAgcmV0dXJuIGZvcm1hdChhZGQsIFwibW06c3NcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bWU/LmlzQWxpdmUgPyAoXG4gICAgICAgIDxTLkNvbnRhaW5lclxuICAgICAgICAgIGhwPXtoYW5kbGVIcChtZS5ocCl9XG4gICAgICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGlkPVwiY291bnRlclwiIHJlZj17Y291bnRlclJlZn0+XG4gICAgICAgICAgICB7a2V5fVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRlXCI+XG4gICAgICAgICAgICAgIDxzcGFuPnZpZGE8L3NwYW4+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPnttZS5ocH08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGVcIj5cbiAgICAgICAgICAgICAgPHNwYW4+Y29tYm88L3NwYW4+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZSBjb21ib1wiPnttZS5jb21ib308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1MuQ29udGFpbmVyPlxuICAgICAgKSA6IChcbiAgICAgICAgPFMuQ29udGFpbmVyIGhwPVwiIzcyMUJFMVwiPlxuICAgICAgICAgIDxHaURlYXRoU2t1bGwgY29sb3I9XCIjNzIxQkUxXCIgc2l6ZT17ODB9IC8+XG4gICAgICAgICAgPGgyPlZvY8OqIGZvaSBlbGltaW5hZG88L2gyPlxuICAgICAgICAgIDxoND57aGFuZGxlVGltZSgpfTwvaDQ+XG4gICAgICAgIDwvUy5Db250YWluZXI+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==