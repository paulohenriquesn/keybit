
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
    
    rooms.forEach((role, key) => {
        if (role.players[socket.id] != undefined) {

            const room: Room = rooms.get(key)
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
    })


   
}