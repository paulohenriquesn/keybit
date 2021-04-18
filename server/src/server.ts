import express from 'express'
import cors from 'cors'
import { Socket } from 'socket.io'

import Room, { RoomStatus } from './entities/room'
import Player from './entities/player'

const app = express()
app.use(express.json())
app.use(cors())

const rooms = new Map()
interface JoinRoom {
  nickname: string;
  roomId: string;
}

const http = require('http').Server(app)
const io = require('socket.io')(http, {
  pingInterval: 5000,
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

io.on('connection', async (socket: Socket) => {
  let connectedRoomId = '';

  socket.on('latency', (startTime, cb) => {
    cb(startTime);
  });

  socket.on('disconnect', () => {
    const room: Room = rooms.get(connectedRoomId)
    if (!room) return;

    room.removePlayer(socket.id)

    if (Object.values(room.players).length === 0) {
      rooms.delete(room.id)
    }

    io.in(room.id).emit('player-disconnected', room);
  });

  socket.on('user-message', (data) => {
    const { message, roomId, player } = data;

    socket.broadcast.to(roomId).emit('new-message', {
      message, player
    });
  })

  socket.on('joinRoom', (data: JoinRoom) => {
    const { roomId, nickname } = data;

    const room: Room = rooms.get(roomId);
    socket.join(roomId);
    connectedRoomId = roomId;

    if (!room) {
      const adminPlayer = new Player(nickname, socket.id, true)

      const newRoom = new Room(roomId)
      newRoom.addPlayer(adminPlayer)

      rooms.set(roomId, newRoom)

      io.to(socket.id).emit('createdRoom', { room: newRoom, player: adminPlayer })
      return;
    }

    const normalPlayer = new Player(nickname, socket.id, false)
    room.addPlayer(normalPlayer)

    io.to(socket.id).emit('joined', { room, player: normalPlayer })
    socket.broadcast.to(roomId).emit('new-player', room);
  })

  socket.on('REQ-START-MATCH', (data: any) => {
    const room: Room = rooms.get(data.roomId);

    room.setStatus(RoomStatus.STARTING);
    room.resetPlayersAttributes();
    room.resetAlivePlayersList();

    io.in(room.id).emit('UPDATE-ROOM', room);

    let counter = 4;
    const counterInterval = setInterval(() => {
      if (counter === 0) return startMatch();

      io.in(room.id).emit('RES-UPDATE-COUNTER', counter--);
    }, 1000)

    function startMatch() {
      clearInterval(counterInterval)
      room.setStatus(RoomStatus.INGAME);
      room.setDate();
      io.in(room.id).emit('UPDATE-ROOM', room);
    }
  })

  socket.on("REQ-ATTACK-ENEMY", (data: any) => {
    const room: Room = rooms.get(data.roomId);
    const me = room.players[socket.id];

    const alivePlayers = Object.values(room.alivePlayers)
    const randomPlayer: Player = alivePlayers[Math.floor(Math.random() * alivePlayers.length)];
    const alivePlayer = room.alivePlayers[randomPlayer.id]

    alivePlayer.setHp(alivePlayer.hp - 4);
    me.setCombo(me.combo + 1);

    if (alivePlayer.hp <= 0) {
      alivePlayer.setIsAlive(false);
      alivePlayer.setDeath();
      room.removeFromAlive(alivePlayer.id);
    }

    const updatedPlayers = Object.values(room.alivePlayers)
    if (updatedPlayers.length === 1) {

      const winner = room.alivePlayers[updatedPlayers[0].id]
      winner.addWin()
      winner.setDeath()
      room.resetPlayersAttributes();

      room.setStatus(RoomStatus.FINISH);
      io.in(room.id).emit('WINNER', {
        room,
        winner: winner.username
      });

      setTimeout(() => {
        room.setStatus(RoomStatus.WAITING)
        io.in(room.id).emit('UPDATE-ROOM', room);
      }, 10000)

      return;
    }

    io.in(room.id).emit('UPDATE-ROOM', room);
  })

  // socket.on("REQ-RESET-COMBO", (data: any) => {
  //   const room: Room = rooms.get(data.roomId);

  //   if (data.target === 'P1') {
  //     room.player1.setCombo(0)
  //   }

  //   if (data.target === 'P2') {
  //     room.player2?.setCombo(0)
  //   }

  //   io.in(room.id).emit('UPDATE-ROOM', room);
  // })

  // socket.on("BACK-TO-CHAT", (data: any) => {
  //   const room: Room = rooms.get(data.roomId);
  //   room.setStatus(RoomStatus.WAITING)

  //   io.in(room.id).emit('UPDATE-ROOM', room);
  // })
})

http.listen(process.env.PORT || 3333, () => {
  console.log('🚀 | Socket server started')
})