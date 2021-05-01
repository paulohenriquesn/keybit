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

_s(Match, "WXy87d0U9KjpxwoZ3oI1B4ZDpvE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWF0Y2gvaW5kZXgudHN4Il0sIm5hbWVzIjpbIk1hdGNoIiwidXNlU3RhdGUiLCJrZXkiLCJzZXRLZXkiLCJ1c2VSb29tIiwiYXR0YWNrRW5lbXkiLCJtZSIsInJvb20iLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJjb3VudGVyUmVmIiwidXNlRWZmZWN0Iiwic2hvd0tleSIsImN1cnJlbnQiLCJmb2N1cyIsIm5ld0tleSIsImFscGhhYmV0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaGFuZGxlS2V5IiwiZSIsInRvTG93ZXJDYXNlIiwiYW5pbWF0ZSIsInRyYW5zZm9ybSIsImR1cmF0aW9uIiwiaGFuZGxlVGltZSIsImRpZmYiLCJkaWZmZXJlbmNlSW5TZWNvbmRzIiwiZGVhdGhJbiIsInN0YXJ0ZWRJbiIsImFkZCIsImFkZFNlY29uZHMiLCJzdGFydE9mRGF5IiwiRGF0ZSIsImZvcm1hdCIsImlzQWxpdmUiLCJoYW5kbGVIcCIsImhwIiwiY29tYm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDUkMsc0RBQVEsQ0FBQyxFQUFELENBREE7QUFBQSxNQUN2QkMsR0FEdUI7QUFBQSxNQUNsQkMsTUFEa0I7O0FBQUEsaUJBR0lDLDJEQUFPLEVBSFg7QUFBQSxNQUd0QkMsV0FIc0IsWUFHdEJBLFdBSHNCO0FBQUEsTUFHVEMsRUFIUyxZQUdUQSxFQUhTO0FBQUEsTUFHTEMsSUFISyxZQUdMQSxJQUhLOztBQUs5QixNQUFNQyxZQUFZLEdBQUdDLG9EQUFNLENBQWlCLElBQWpCLENBQTNCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHRCxvREFBTSxDQUFpQixJQUFqQixDQUF6QjtBQUVBRSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSCxZQUFKLEVBQWtC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O0FBQWMsU0FBSyxFQUFDLFNBQXBCO0FBQThCLFFBQUksRUFBRSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLYixVQUFVLEVBQWYsQ0FIRixDQTFCSixDQURGO0FBbUNEOztHQWxGdUIxQixLO1VBR1lJLG1EOzs7S0FIWkosSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXRjaC9baWRdLmEwNzdhYTEwMjE3NzBjM2ZhZGQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRTZWNvbmRzLCBkaWZmZXJlbmNlSW5TZWNvbmRzLCBmb3JtYXQsIHN0YXJ0T2ZEYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2lEZWF0aFNrdWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XG5cbmltcG9ydCB7IHVzZVJvb20gfSBmcm9tIFwiLi4vLi4vaG9va3Mvcm9vbVwiO1xuaW1wb3J0IGFscGhhYmV0IGZyb20gXCIuLi8uLi91dGlscy9hbHBoYWJldFwiO1xuaW1wb3J0IGhhbmRsZUhwIGZyb20gXCIuLi8uLi91dGlscy9ocC1jb2xvclwiO1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2goKSB7XG4gIGNvbnN0IFtrZXksIHNldEtleV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCB7IGF0dGFja0VuZW15LCBtZSwgcm9vbSB9ID0gdXNlUm9vbSgpO1xuXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGNvdW50ZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lclJlZikge1xuICAgICAgc2hvd0tleSgpO1xuICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbY29udGFpbmVyUmVmXSk7XG5cbiAgZnVuY3Rpb24gc2hvd0tleSgpIHtcbiAgICBjb25zdCBuZXdLZXkgPSBhbHBoYWJldFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNildO1xuXG4gICAgc2V0S2V5KG5ld0tleSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVLZXkoZTogYW55KSB7XG4gICAgaWYgKGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IGtleSkge1xuICAgICAgYXR0YWNrRW5lbXkoKTtcbiAgICAgIHNob3dLZXkoKTtcbiAgICAgIGNvdW50ZXJSZWY/LmN1cnJlbnQ/LmFuaW1hdGUoXG4gICAgICAgIFt7IHRyYW5zZm9ybTogXCJzY2FsZSgxKVwiIH0sIHsgdHJhbnNmb3JtOiBcInNjYWxlKDEuMilcIiB9XSxcbiAgICAgICAge1xuICAgICAgICAgIGR1cmF0aW9uOiAxNTAsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vcmVzZXRDb21ibygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRpbWUoKSB7XG4gICAgaWYgKHJvb20gJiYgbWUpIHtcbiAgICAgIGNvbnN0IGRpZmYgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKG1lPy5kZWF0aEluLCByb29tLnN0YXJ0ZWRJbik7XG4gICAgICBjb25zdCBhZGQgPSBhZGRTZWNvbmRzKHN0YXJ0T2ZEYXkobmV3IERhdGUoKSksIGRpZmYpO1xuXG4gICAgICByZXR1cm4gZm9ybWF0KGFkZCwgXCJtbTpzc1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHttZT8uaXNBbGl2ZSA/IChcbiAgICAgICAgPFMuQ29udGFpbmVyXG4gICAgICAgICAgaHA9e2hhbmRsZUhwKG1lLmhwKX1cbiAgICAgICAgICByZWY9e2NvbnRhaW5lclJlZn1cbiAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgaWQ9XCJjb3VudGVyXCIgcmVmPXtjb3VudGVyUmVmfT5cbiAgICAgICAgICAgIHtrZXl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGVcIj5cbiAgICAgICAgICAgICAgPHNwYW4+dmlkYTwvc3Bhbj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+e21lLmhwfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpYnV0ZVwiPlxuICAgICAgICAgICAgICA8c3Bhbj5jb21ibzwvc3Bhbj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlIGNvbWJvXCI+e21lLmNvbWJvfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUy5Db250YWluZXI+XG4gICAgICApIDogKFxuICAgICAgICA8Uy5Db250YWluZXIgaHA9XCIjNzIxQkUxXCI+XG4gICAgICAgICAgPEdpRGVhdGhTa3VsbCBjb2xvcj1cIiM3MjFCRTFcIiBzaXplPXs4MH0gLz5cbiAgICAgICAgICA8aDI+Vm9jw6ogZm9pIGVsaW1pbmFkbzwvaDI+XG4gICAgICAgICAgPGg0PntoYW5kbGVUaW1lKCl9PC9oND5cbiAgICAgICAgPC9TLkNvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9