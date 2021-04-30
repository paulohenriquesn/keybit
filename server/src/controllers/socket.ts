
import { Socket } from 'socket.io';
import { ServerApp } from '../server'

import Room, { RoomStatus } from '../entities/room'

import { rooms } from './room'

import { getConnectedRoomId } from './player'

export const latency = (startTime: any, cb: any) => {
    cb(startTime);
}

export const disconnect = (a: any, b: any, socket: Socket) => {
    const SocketConnection = ServerApp.socket;

    const room: Room = rooms.get(getConnectedRoomId())
    if (!room) return;

    try {
        room.removePlayer(socket.id)
    } catch {
        if (Object.values(room.players).length === 0) {
            rooms.delete(room.id)
        }
    }

    SocketConnection.in(room.id).emit('player-disconnected', room);
}