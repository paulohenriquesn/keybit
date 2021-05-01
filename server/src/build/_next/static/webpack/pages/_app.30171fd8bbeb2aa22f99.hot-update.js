webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3Jvb20udHN4Il0sIm5hbWVzIjpbIlJvb21Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJvb21Qcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJyb29tIiwic2V0Um9vbSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJtZSIsInNldE1lIiwiY291bnRlciIsInNldENvdW50ZXIiLCJ3aW5uZXIiLCJzZXRXaW5uZXIiLCJ1c2VDb25uZWN0aW9uIiwic29ja2V0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwib24iLCJkYXRhIiwicGxheWVyIiwicHVzaCIsImlkIiwidG9hc3QiLCJpY29uIiwicGxheWVycyIsImlzQWRtaW4iLCJtZXNzYWdlIiwiaXNNZSIsImRhdGUiLCJEYXRlIiwidXBkYXRlZFJvb20iLCJqb2luUm9vbSIsImVtaXQiLCJuaWNrbmFtZSIsInJvb21JZCIsInNlbmRNZXNzYWdlIiwic3RhcnRNYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhdHRhY2tFbmVteSIsInRhcmdldCIsInJlc2V0Q29tYm8iLCJ1c2VSb29tIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUF5QkEsSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBMEIsSUFBMUIsQ0FBakM7QUFFTyxTQUFTQyxZQUFULE9BQXVEO0FBQUE7O0FBQUEsTUFBL0JDLFFBQStCLFFBQS9CQSxRQUErQjs7QUFBQSxrQkFDcENDLHNEQUFRLENBQWMsSUFBZCxDQUQ0QjtBQUFBLE1BQ3JEQyxJQURxRDtBQUFBLE1BQy9DQyxPQUQrQzs7QUFBQSxtQkFFNUJGLHNEQUFRLENBQWlCLEVBQWpCLENBRm9CO0FBQUEsTUFFckRHLFFBRnFEO0FBQUEsTUFFM0NDLFdBRjJDOztBQUFBLG1CQUd4Q0osc0RBQVEs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QXFDO0FBQUE7O0FBQzFDLE1BQU1DLE9BQU8sR0FBR0Msd0RBQVUsQ0FBQy9DLFdBQUQsQ0FBMUI7O0FBRUEsTUFBSSxDQUFDOEMsT0FBTCxFQUFjO0FBQ1osVUFBTSxJQUFJRSxLQUFKLENBQVUsNENBQVYsQ0FBTjtBQUNEOztBQUVELFNBQU9GLE9BQVA7QUFDRDs7SUFSZUQsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjMwMTcxZmQ4YmJlYjJhYTIyZjk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgeyB1c2VDb25uZWN0aW9uIH0gZnJvbSBcIi4vY29ubmVjdGlvblwiO1xuaW1wb3J0IHsgUGxheWVyLCBSb29tLCBNZXNzYWdlIH0gZnJvbSBcIi4uL0B0eXBlcy9lbnRpdGllc1wiO1xuXG5pbnRlcmZhY2UgUm9vbVByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5pbnRlcmZhY2UgSm9pblJvb20ge1xuICBuaWNrbmFtZTogc3RyaW5nO1xuICByb29tSWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFJvb21Db250ZXh0UHJvcHMge1xuICBtZTogUGxheWVyIHwgbnVsbDtcbiAgcm9vbTogUm9vbSB8IG51bGw7XG4gIG1lc3NhZ2VzOiBNZXNzYWdlW107XG4gIGNvdW50ZXI6IG51bWJlcjtcbiAgd2lubmVyOiBzdHJpbmc7XG4gIGpvaW5Sb29tKGRhdGE6IEpvaW5Sb29tKTogdm9pZDtcbiAgc2VuZE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcbiAgc3RhcnRNYXRjaCgpOiB2b2lkO1xuICBhdHRhY2tFbmVteSgpOiB2b2lkO1xuICByZXNldENvbWJvKCk6IHZvaWQ7XG59XG5cbmNvbnN0IFJvb21Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxSb29tQ29udGV4dFByb3BzIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBSb29tUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBSb29tUHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbcm9vbSwgc2V0Um9vbV0gPSB1c2VTdGF0ZTxSb29tIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8TWVzc2FnZVtdIHwgW10+KFtdKTtcbiAgY29uc3QgW21lLCBzZXRNZV0gPSB1c2VTdGF0ZTxQbGF5ZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoNSk7XG4gIGNvbnN0IFt3aW5uZXIsIHNldFdpbm5lcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCB7IHNvY2tldCB9ID0gdXNlQ29ubmVjdGlvbigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNvY2tldC5vbihcImNyZWF0ZWRSb29tXCIsIChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHNldFJvb20oZGF0YS5yb29tKTtcbiAgICAgIHNldE1lKGRhdGEucGxheWVyKTtcblxuICAgICAgcm91dGVyLnB1c2goYC9tYXRjaC8ke2RhdGEucm9vbS5pZH1gKTtcbiAgICAgIHRvYXN0KFwic2FsYSBjcmlhZGEgY29tIHN1Y2Vzc29cIiwge1xuICAgICAgICBpY29uOiBcIvCfjolcIixcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwiam9pbmVkXCIsIChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHNldFJvb20oZGF0YS5yb29tKTtcbiAgICAgIHNldE1lKGRhdGEucGxheWVyKTtcbiAgICAgIHRvYXN0KFwidm9jw6ogZW50cm91IG5hIHNhbGFcIiwge1xuICAgICAgICBpY29uOiBcIvCfpbNcIixcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwibmV3LXBsYXllclwiLCAoZGF0YTogUm9vbSkgPT4ge1xuICAgICAgc2V0Um9vbShkYXRhKTtcbiAgICAgIHRvYXN0KFwidW0gcGxheWVyIHNlIGNvbmVjdG91IGEgc2FsYVwiLCB7XG4gICAgICAgIGljb246IFwi8J+SpVwiLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oXCJwbGF5ZXItZGlzY29ubmVjdGVkXCIsIChkYXRhOiBSb29tKSA9PiB7XG4gICAgICBzZXRSb29tKGRhdGEpO1xuXG4gICAgICBpZiAoIW1lKSByZXR1cm47XG5cbiAgICAgIHNldE1lKGRhdGEucGxheWVyc1ttZS5pZF0pO1xuICAgICAgdG9hc3QoXCJ1bSBwbGF5ZXIgc2FpdVwiLCB7XG4gICAgICAgIGljb246IFwi8J+Pg+KAjeKZgu+4j1wiLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhLnBsYXllcnNbbWUuaWRdLmlzQWRtaW4pIHtcbiAgICAgICAgdG9hc3QoXCJ2b2PDqiBhZ29yYSDDqSBvIGFkbWluaXN0cmFkb3IgZGEgc2FsYVwiLCB7XG4gICAgICAgICAgaWNvbjogXCLwn5SwXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICBzb2NrZXQub24oXCJuZXctbWVzc2FnZVwiLCAoZGF0YTogTWVzc2FnZSkgPT4ge1xuICAgICAgc2V0TWVzc2FnZXMoW1xuICAgICAgICAuLi5tZXNzYWdlcyxcbiAgICAgICAge1xuICAgICAgICAgIHBsYXllcjogZGF0YS5wbGF5ZXIsXG4gICAgICAgICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxuICAgICAgICAgIGlzTWU6IGZhbHNlLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgIH0sXG4gICAgICBdKTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcIlVQREFURS1ST09NXCIsICh1cGRhdGVkUm9vbTogUm9vbSkgPT4ge1xuICAgICAgc2V0Q291bnRlcig1KTtcbiAgICAgIHNldFJvb20odXBkYXRlZFJvb20pO1xuXG4gICAgICBpZiAoIW1lKSByZXR1cm47XG5cbiAgICAgIHNldE1lKHVwZGF0ZWRSb29tLnBsYXllcnNbbWUuaWRdKTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbihcIlJFUy1VUERBVEUtQ09VTlRFUlwiLCAoY291bnRlcjogbnVtYmVyKSA9PiB7XG4gICAgICBzZXRDb3VudGVyKGNvdW50ZXIpO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKFwiV0lOTkVSXCIsIChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHNldFJvb20oZGF0YS5yb29tKTtcbiAgICAgIHNldFdpbm5lcihkYXRhLndpbm5lcik7XG4gICAgfSk7XG4gIH0sIFttZXNzYWdlcywgbWVdKTtcblxuICBmdW5jdGlvbiBqb2luUm9vbShkYXRhOiBKb2luUm9vbSkge1xuICAgIHNvY2tldC5lbWl0KFwiam9pblJvb21cIiwge1xuICAgICAgbmlja25hbWU6IGRhdGEubmlja25hbWUsXG4gICAgICByb29tSWQ6IGRhdGEucm9vbUlkLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgaWYgKG1lKSB7XG4gICAgICBzZXRNZXNzYWdlcyhbXG4gICAgICAgIC4uLm1lc3NhZ2VzLFxuICAgICAgICB7XG4gICAgICAgICAgcGxheWVyOiBtZSxcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgIGlzTWU6IHRydWUsXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgfSxcbiAgICAgIF0pO1xuXG4gICAgICBzb2NrZXQuZW1pdChcIm9uVXNlck1lc3NhZ2VcIiwge1xuICAgICAgICBtZXNzYWdlLFxuICAgICAgICByb29tSWQ6IHJvb20/LmlkLFxuICAgICAgICBwbGF5ZXI6IG1lLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRNYXRjaCgpIHtcbiAgICBjb25zb2xlLmxvZygncmVxdWVzdCBhdHRhY2snKVxuICAgIHNvY2tldC5lbWl0KFwiUmVxU3RhcnRNYXRjaFwiLCB7XG4gICAgICByb29tSWQ6IHJvb20/LmlkLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNrRW5lbXkoKSB7XG4gICAgc29ja2V0LmVtaXQoXCJSZXFBdHRhY2tFbmVteVwiLCB7XG4gICAgICByb29tSWQ6IHJvb20/LmlkLFxuICAgICAgdGFyZ2V0OiBtZT8uaXNBZG1pbiA/IFwiUDJcIiA6IFwiUDFcIixcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Q29tYm8oKSB7XG4gICAgc29ja2V0LmVtaXQoXCJSRVEtUkVTRVQtQ09NQk9cIiwge1xuICAgICAgcm9vbUlkOiByb29tPy5pZCxcbiAgICAgIHRhcmdldDogbWU/LmlzQWRtaW4gPyBcIlAxXCIgOiBcIlAyXCIsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSb29tQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgbWUsXG4gICAgICAgIGpvaW5Sb29tLFxuICAgICAgICByb29tLFxuICAgICAgICBzZW5kTWVzc2FnZSxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICAgIHN0YXJ0TWF0Y2gsXG4gICAgICAgIGNvdW50ZXIsXG4gICAgICAgIGF0dGFja0VuZW15LFxuICAgICAgICByZXNldENvbWJvLFxuICAgICAgICB3aW5uZXIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1Jvb21Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm9vbSgpOiBSb29tQ29udGV4dFByb3BzIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoUm9vbUNvbnRleHQpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInVzZVJvb20gbXVzdCBiZSB1c2VkIHdpdGhpbiBhIFJvb21Qcm92aWRlclwiKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==