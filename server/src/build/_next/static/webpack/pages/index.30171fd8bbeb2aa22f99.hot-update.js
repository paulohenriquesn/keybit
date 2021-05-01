webpackHotUpdate_N_E("pages/index",{

/***/ "./src/hooks/room.tsx":
/*!****************************!*\
  !*** ./src/hooks/room.tsx ***!
  \****************************/
/*! exports provided: RoomProvider, useRoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomProvider", function() { return RoomProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRoom", function() { return useRoom; });
/* harmony import */ var _mnt_g_Projetos_keybit_web_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connection */ "./src/hooks/connection.tsx");


var _jsxFileName = "/mnt/g/Projetos/keybit/web-client/src/hooks/room.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var RoomContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
function RoomProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      room = _useState[0],
      setRoom = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      messages = _useState2[0],
      setMessages = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      me = _useState3[0],
      setMe = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(5),
      counter = _useState4[0],
      setCounter = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      winner = _useState5[0],
      setWinner = _useState5[1];

  var _useConnection = Object(_connection__WEBPACK_IMPORTED_MODULE_4__["useConnection"])(),
      socket = _useConnection.socket;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    socket.on("createdRoom", function (data) {
      setRoom(data.room);
      setMe(data.player);
      router.push("/match/".concat(data.room.id));
      Object(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"])("sala criada com sucesso", {
        icon: "🎉"
      });
    });
    socket.on("joined", function (data) {
      setRoom(data.room);
      setMe(data.player);
      Object(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"])("você entrou na sala", {
        icon: "🥳"
      });
    });
    socket.on("new-player", function (data) {
      setRoom(data);
      Object(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"])("um player se conectou a sala", {
        icon: "💥"
      });
    });
    socket.on("player-disconnected", function (data) {
      setRoom(data);
      if (!me) return;
      setMe(data.players[me.id]);
      Object(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"])("um player saiu", {
        icon: "🏃‍♂️"
      });

      if (data.players[me.id].isAdmin) {
        Object(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"])("você agora é o administrador da sala", {
          icon: "🔰"
        });
      }
    });
    socket.on("new-message", function (data) {
      setMessages([].concat(Object(_mnt_g_Projetos_keybit_web_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(messages), [{
        player: data.player,
        message: data.message,
        isMe: false,
        date: new Date()
      }]));
    });
    socket.on("UPDATE-ROOM", function (updatedRoom) {
      setCounter(5);
      setRoom(updatedRoom);
      if (!me) return;
      setMe(updatedRoom.players[me.id]);
    });
    socket.on("RES-UPDATE-COUNTER", function (counter) {
      setCounter(counter);
    });
    socket.on("WINNER", function (data) {
      setRoom(data.room);
      setWinner(data.winner);
    });
  }, [messages, me]);

  function joinRoom(data) {
    socket.emit("joinRoom", {
      nickname: data.nickname,
      roomId: data.roomId
    });
  }

  function sendMessage(message) {
    if (me) {
      setMessages([].concat(Object(_mnt_g_Projetos_keybit_web_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(messages), [{
        player: me,
        message: message,
        isMe: true,
        date: new Date()
      }]));
      socket.emit("onUserMessage", {
        message: message,
        roomId: room === null || room === void 0 ? void 0 : room.id,
        player: me
      });
    }
  }

  function startMatch() {
    console.log('request attack');
    socket.emit("ReqStartMatch", {
      roomId: room === null || room === void 0 ? void 0 : room.id
    });
  }

  function attackEnemy() {
    socket.emit("ReqAttackEnemy", {
      roomId: room === null || room === void 0 ? void 0 : room.id,
      target: me !== null && me !== void 0 && me.isAdmin ? "P2" : "P1"
    });
  }

  function resetCombo() {
    socket.emit("REQ-RESET-COMBO", {
      roomId: room === null || room === void 0 ? void 0 : room.id,
      target: me !== null && me !== void 0 && me.isAdmin ? "P1" : "P2"
    });
  }

  return __jsx(RoomContext.Provider, {
    value: {
      me: me,
      joinRoom: joinRoom,
      room: room,
      sendMessage: sendMessage,
      messages: messages,
      startMatch: startMatch,
      counter: counter,
      attackEnemy: attackEnemy,
      resetCombo: resetCombo,
      winner: winner
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 5
    }
  }, children);
}

_s(RoomProvider, "g7mfsA8ZkPcFbimJiEkoSsteV5E=", false, function () {
  return [_connection__WEBPACK_IMPORTED_MODULE_4__["useConnection"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = RoomProvider;
function useRoom() {
  _s2();

  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(RoomContext);

  if (!context) {
    throw new Error("useRoom must be used within a RoomProvider");
  }

  return context;
}

_s2(useRoom, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

var _c;

$RefreshReg$(_c, "RoomProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3Jvb20udHN4Il0sIm5hbWVzIjpbIlJvb21Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJvb21Qcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJyb29tIiwic2V0Um9vbSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJtZSIsInNldE1lIiwiY291bnRlciIsInNldENvdW50ZXIiLCJ3aW5uZXIiLCJzZXRXaW5uZXIiLCJ1c2VDb25uZWN0aW9uIiwic29ja2V0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwib24iLCJkYXRhIiwicGxheWVyIiwicHVzaCIsImlkIiwidG9hc3QiLCJpY29uIiwicGxheWVycyIsImlzQWRtaW4iLCJtZXNzYWdlIiwiaXNNZSIsImRhdGUiLCJEYXRlIiwidXBkYXRlZFJvb20iLCJqb2luUm9vbSIsImVtaXQiLCJuaWNrbmFtZSIsInJvb21JZCIsInNlbmRNZXNzYWdlIiwic3RhcnRNYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhdHRhY2tFbmVteSIsInRhcmdldCIsInJlc2V0Q29tYm8iLCJ1c2VSb29tIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUF5QkEsSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBMEIsSUFBMUIsQ0FBakM7QUFFTyxTQUFTQyxZQUFULE9BQXVEO0FBQUE7O0FBQUEsTUFBL0JDLFFBQStCLFFBQS9CQSxRQUErQjs7QUFBQSxrQkFDcENDLHNEQUFRLENBQWMsSUFBZCxDQUQ0QjtBQUFBLE1BQ3JEQyxJQURxRDtBQUFBLE1BQy9DQyxPQUQrQzs7QUFBQSxtQkFFNUJGLHNEQUFRLENBQWlCLEVBQWpCLENBRm9CO0FBQUEsTUFFckRHLFFBRnFEO0FBQUEsTUFFM0NDLFdBRjJDOztBQUFBLG1CQUd4Q0osc0RBQVEs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QXFDO0FBQUE7O0FBQzFDLE1BQU1DLE9BQU8sR0FBR0Msd0RBQVUsQ0FBQy9DLFdBQUQsQ0FBMUI7O0FBRUEsTUFBSSxDQUFDOEMsT0FBTCxFQUFjO0FBQ1osVUFBTSxJQUFJRSxLQUFKLENBQVUsNENBQVYsQ0FBTjtBQUNEOztBQUVELFNBQU9GLE9BQVA7QUFDRDs7SUFSZUQsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMDE3MWZkOGJiZWIyYWEyMmY5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgdXNlQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFBsYXllciwgUm9vbSwgTWVzc2FnZSB9IGZyb20gXCIuLi9AdHlwZXMvZW50aXRpZXNcIjtcblxuaW50ZXJmYWNlIFJvb21Qcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuaW50ZXJmYWNlIEpvaW5Sb29tIHtcbiAgbmlja25hbWU6IHN0cmluZztcbiAgcm9vbUlkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBSb29tQ29udGV4dFByb3BzIHtcbiAgbWU6IFBsYXllciB8IG51bGw7XG4gIHJvb206IFJvb20gfCBudWxsO1xuICBtZXNzYWdlczogTWVzc2FnZVtdO1xuICBjb3VudGVyOiBudW1iZXI7XG4gIHdpbm5lcjogc3RyaW5nO1xuICBqb2luUm9vbShkYXRhOiBKb2luUm9vbSk6IHZvaWQ7XG4gIHNlbmRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XG4gIHN0YXJ0TWF0Y2goKTogdm9pZDtcbiAgYXR0YWNrRW5lbXkoKTogdm9pZDtcbiAgcmVzZXRDb21ibygpOiB2b2lkO1xufVxuXG5jb25zdCBSb29tQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Um9vbUNvbnRleHRQcm9wcyB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gUm9vbVByb3ZpZGVyKHsgY2hpbGRyZW4gfTogUm9vbVByb3ZpZGVyUHJvcHMpIHtcbiAgY29uc3QgW3Jvb20sIHNldFJvb21dID0gdXNlU3RhdGU8Um9vbSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPE1lc3NhZ2VbXSB8IFtdPihbXSk7XG4gIGNvbnN0IFttZSwgc2V0TWVdID0gdXNlU3RhdGU8UGxheWVyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDUpO1xuICBjb25zdCBbd2lubmVyLCBzZXRXaW5uZXJdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgeyBzb2NrZXQgfSA9IHVzZUNvbm5lY3Rpb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQub24oXCJjcmVhdGVkUm9vbVwiLCAoZGF0YTogYW55KSA9PiB7XG4gICAgICBzZXRSb29tKGRhdGEucm9vbSk7XG4gICAgICBzZXRNZShkYXRhLnBsYXllcik7XG5cbiAgICAgIHJvdXRlci5wdXNoKGAvbWF0Y2gvJHtkYXRhLnJvb20uaWR9YCk7XG4gICAgICB0b2FzdChcInNhbGEgY3JpYWRhIGNvbSBzdWNlc3NvXCIsIHtcbiAgICAgICAgaWNvbjogXCLwn46JXCIsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcImpvaW5lZFwiLCAoZGF0YTogYW55KSA9PiB7XG4gICAgICBzZXRSb29tKGRhdGEucm9vbSk7XG4gICAgICBzZXRNZShkYXRhLnBsYXllcik7XG4gICAgICB0b2FzdChcInZvY8OqIGVudHJvdSBuYSBzYWxhXCIsIHtcbiAgICAgICAgaWNvbjogXCLwn6WzXCIsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcIm5ldy1wbGF5ZXJcIiwgKGRhdGE6IFJvb20pID0+IHtcbiAgICAgIHNldFJvb20oZGF0YSk7XG4gICAgICB0b2FzdChcInVtIHBsYXllciBzZSBjb25lY3RvdSBhIHNhbGFcIiwge1xuICAgICAgICBpY29uOiBcIvCfkqVcIixcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwicGxheWVyLWRpc2Nvbm5lY3RlZFwiLCAoZGF0YTogUm9vbSkgPT4ge1xuICAgICAgc2V0Um9vbShkYXRhKTtcblxuICAgICAgaWYgKCFtZSkgcmV0dXJuO1xuXG4gICAgICBzZXRNZShkYXRhLnBsYXllcnNbbWUuaWRdKTtcbiAgICAgIHRvYXN0KFwidW0gcGxheWVyIHNhaXVcIiwge1xuICAgICAgICBpY29uOiBcIvCfj4PigI3imYLvuI9cIixcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YS5wbGF5ZXJzW21lLmlkXS5pc0FkbWluKSB7XG4gICAgICAgIHRvYXN0KFwidm9jw6ogYWdvcmEgw6kgbyBhZG1pbmlzdHJhZG9yIGRhIHNhbGFcIiwge1xuICAgICAgICAgIGljb246IFwi8J+UsFwiLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgc29ja2V0Lm9uKFwibmV3LW1lc3NhZ2VcIiwgKGRhdGE6IE1lc3NhZ2UpID0+IHtcbiAgICAgIHNldE1lc3NhZ2VzKFtcbiAgICAgICAgLi4ubWVzc2FnZXMsXG4gICAgICAgIHtcbiAgICAgICAgICBwbGF5ZXI6IGRhdGEucGxheWVyLFxuICAgICAgICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcbiAgICAgICAgICBpc01lOiBmYWxzZSxcbiAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICB9LFxuICAgICAgXSk7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJVUERBVEUtUk9PTVwiLCAodXBkYXRlZFJvb206IFJvb20pID0+IHtcbiAgICAgIHNldENvdW50ZXIoNSk7XG4gICAgICBzZXRSb29tKHVwZGF0ZWRSb29tKTtcblxuICAgICAgaWYgKCFtZSkgcmV0dXJuO1xuXG4gICAgICBzZXRNZSh1cGRhdGVkUm9vbS5wbGF5ZXJzW21lLmlkXSk7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJSRVMtVVBEQVRFLUNPVU5URVJcIiwgKGNvdW50ZXI6IG51bWJlcikgPT4ge1xuICAgICAgc2V0Q291bnRlcihjb3VudGVyKTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcIldJTk5FUlwiLCAoZGF0YTogYW55KSA9PiB7XG4gICAgICBzZXRSb29tKGRhdGEucm9vbSk7XG4gICAgICBzZXRXaW5uZXIoZGF0YS53aW5uZXIpO1xuICAgIH0pO1xuICB9LCBbbWVzc2FnZXMsIG1lXSk7XG5cbiAgZnVuY3Rpb24gam9pblJvb20oZGF0YTogSm9pblJvb20pIHtcbiAgICBzb2NrZXQuZW1pdChcImpvaW5Sb29tXCIsIHtcbiAgICAgIG5pY2tuYW1lOiBkYXRhLm5pY2tuYW1lLFxuICAgICAgcm9vbUlkOiBkYXRhLnJvb21JZCxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGlmIChtZSkge1xuICAgICAgc2V0TWVzc2FnZXMoW1xuICAgICAgICAuLi5tZXNzYWdlcyxcbiAgICAgICAge1xuICAgICAgICAgIHBsYXllcjogbWUsXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICBpc01lOiB0cnVlLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgIH0sXG4gICAgICBdKTtcblxuICAgICAgc29ja2V0LmVtaXQoXCJvblVzZXJNZXNzYWdlXCIsIHtcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgcm9vbUlkOiByb29tPy5pZCxcbiAgICAgICAgcGxheWVyOiBtZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0TWF0Y2goKSB7XG4gICAgY29uc29sZS5sb2coJ3JlcXVlc3QgYXR0YWNrJylcbiAgICBzb2NrZXQuZW1pdChcIlJlcVN0YXJ0TWF0Y2hcIiwge1xuICAgICAgcm9vbUlkOiByb29tPy5pZCxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFja0VuZW15KCkge1xuICAgIHNvY2tldC5lbWl0KFwiUmVxQXR0YWNrRW5lbXlcIiwge1xuICAgICAgcm9vbUlkOiByb29tPy5pZCxcbiAgICAgIHRhcmdldDogbWU/LmlzQWRtaW4gPyBcIlAyXCIgOiBcIlAxXCIsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENvbWJvKCkge1xuICAgIHNvY2tldC5lbWl0KFwiUkVRLVJFU0VULUNPTUJPXCIsIHtcbiAgICAgIHJvb21JZDogcm9vbT8uaWQsXG4gICAgICB0YXJnZXQ6IG1lPy5pc0FkbWluID8gXCJQMVwiIDogXCJQMlwiLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Um9vbUNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIG1lLFxuICAgICAgICBqb2luUm9vbSxcbiAgICAgICAgcm9vbSxcbiAgICAgICAgc2VuZE1lc3NhZ2UsXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgICBzdGFydE1hdGNoLFxuICAgICAgICBjb3VudGVyLFxuICAgICAgICBhdHRhY2tFbmVteSxcbiAgICAgICAgcmVzZXRDb21ibyxcbiAgICAgICAgd2lubmVyLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Sb29tQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvb20oKTogUm9vbUNvbnRleHRQcm9wcyB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFJvb21Db250ZXh0KTtcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VSb29tIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBSb29tUHJvdmlkZXJcIik7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=