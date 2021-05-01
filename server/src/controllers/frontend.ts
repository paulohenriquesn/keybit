import { Socket } from "socket.io";
import { changeState, startMatch } from './room'
import { ServerApp } from '../server'
import Room, { RoomStatus } from "../entities/room";

import { rooms } from './room'

import { Attack as playerAttack } from './player'

export const ReqStartMatch = (data: any, b: any, socket: Socket) => {
    const SocketConnection = ServerApp.socket;
    let room = startMatch(data);
    SocketConnection.in(room.id).emit('UPDATE-ROOM', room);

    let counter = 4;
    const counterInterval = setInterval(() => {
        if (counter === 0) return changeState(room, RoomStatus.INGAME, SocketConnection).then(() => {
            clearInterval(counterInterval);
        });

        SocketConnection.in(room.id).emit('RES-UPDATE-COUNTER', counter--);
    }, 1000)

}

export const ReqAttackEnemy = (data: any, b: any, socket: Socket) => {
    
        const SocketConnection = ServerApp.socket;
        const room: Room = rooms.get(data.roomId);
        const playerRequested = room.players[socket.id];

       playerAttack(playerRequested, room, SocketConnection)
}
