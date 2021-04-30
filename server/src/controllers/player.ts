import { Socket } from 'socket.io';
import Player from '../entities/player'
import { ServerApp } from '../server'

import Room, { RoomStatus } from '../entities/room'

import { rooms } from './room'

export let connectedRoomId: string;

interface IMessage {
    message: string,
    roomId: string,
    player: string
}

export const getConnectedRoomId = () => {
    return connectedRoomId;
}

export const setConnectedRoomId = (roomId: string) => {
    connectedRoomId = roomId;
}

export const onUserMessage = (data: IMessage, b: any, socket: Socket) => {
    const { message, roomId, player } = data;

    socket.broadcast.to(roomId).emit('new-message', {
        message, player
    });
}

import { createRoom, IJoinRoom } from './room'

export const joinRoom = (data: IJoinRoom, b: any, socket: Socket) => {

    const SocketConnection = ServerApp.socket;

    const { roomId, nickname } = data;

    const room: Room = rooms.get(roomId);
    socket.join(roomId);
    setConnectedRoomId(roomId);

    if (!room) {
        const adminPlayer = new Player(nickname, socket.id, true)

        let newRoom = createRoom(roomId, adminPlayer);

        SocketConnection.to(socket.id).emit('createdRoom', { room: newRoom, player: adminPlayer })
        return;
    }

    const normalPlayer = new Player(nickname, socket.id, false)
    room.addPlayer(normalPlayer)

    SocketConnection.to(socket.id).emit('joined', { room, player: normalPlayer })
    socket.broadcast.to(roomId).emit('new-player', room);

}

export const Attack = (me: any, room: any, socket: Socket) => {
    const alivePlayers = Object.values(room.alivePlayers)

    let getRandomPlayerAlive = () => {
        const randomPlayer: any = alivePlayers[Math.floor(Math.random() * alivePlayers.length)];
        return room.alivePlayers[randomPlayer.id]
    }

    var alivePlayer = getRandomPlayerAlive();

    while (alivePlayer.username == me.username) {
        alivePlayer = getRandomPlayerAlive();
    }

    alivePlayer.setHp(alivePlayer.hp - 4);
    me.setCombo(me.combo + 1);

    if (alivePlayer.hp <= 0) {
        alivePlayer.setIsAlive(false);
        alivePlayer.setDeath();
        room.removeFromAlive(alivePlayer.id);
    }

    const updatedPlayers: any = Object.values(room.alivePlayers)

    if (updatedPlayers.length === 1) {

        const winner = room.alivePlayers[updatedPlayers[0].id]
        winner.addWin()
        winner.setDeath()
        room.resetPlayersAttributes();

        room.setStatus(RoomStatus.FINISH);
        socket.in(room.id).emit('WINNER', {
            room,
            winner: winner.username
        });

        setTimeout(() => {
            room.setStatus(RoomStatus.WAITING)
            socket.in(room.id).emit('UPDATE-ROOM', room);
        }, 10000)
        return;
    }

    socket.in(room.id).emit('UPDATE-ROOM', room);

}