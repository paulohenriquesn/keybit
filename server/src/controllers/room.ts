import Room, { RoomStatus } from '../entities/room'

import { ServerApp } from '../server'

import { connectedRoomId } from './player'

import Player from '../entities/player'
import { Socket } from 'socket.io';


export const rooms = new Map()

export interface IJoinRoom {
    nickname: string;
    roomId: string;
}

export const createRoom = (roomId: string, adminPlayer: Player) => {
    const newRoom = new Room(roomId)
    newRoom.addPlayer(adminPlayer)
    rooms.set(roomId, newRoom)
    return newRoom;
}

export const startMatch = (data: any) => {
    const room: Room = rooms.get(data.roomId);
    if (room) {
        room.setStatus(RoomStatus.STARTING);
        room.resetPlayersAttributes();
        room.resetAlivePlayersList();
    }
    return room;
}

export const changeState = async (room: any, status: RoomStatus, io: Socket,) => {
    if (room) {
        room.setStatus(status);
        room.setDate();
        io.in(room.id).emit('UPDATE-ROOM', room);
    }
}

