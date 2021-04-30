
import { Express } from 'express'
import { Socket } from 'socket.io';

import { ServerApp } from './server'

require('dotenv').config()

const Server_PORT = process.env.PORT;


import { latency, disconnect } from './controllers/socket'

import { onUserMessage, joinRoom, setConnectedRoomId } from './controllers/player';

import { ReqStartMatch } from './controllers/frontend';

export interface socketEvent {
    function: any
}

const SocketEvents: socketEvent[] = [
    {
        function: latency,
    },
    {
        function: disconnect,
    }
]

const FrontEndEvents: socketEvent[] = [
    {
        function: ReqStartMatch,
    }
]

const PlayerEvents: socketEvent[] = [
    {
        function: onUserMessage
    },
    {
        function: joinRoom
    }
]


export const createSocketConnection = (express_server: Express) => {
    const http = require('http').Server(express_server)

    const socketConnection = require('socket.io')(http, {
        pingInterval: 5000,
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    }).listen(Server_PORT)

    return socketConnection;

}

export default () => {

    ServerApp.socket.on('connection', (socket: Socket) => {

        setConnectedRoomId('');

        SocketEvents.map((event) => {
            socket.on(event.function.name, (a: any, b: any) => {
                event.function(a, b, socket)
            })
        })

        FrontEndEvents.map((event) => {
            socket.on(event.function.name, (a: any, b: any) => {
                event.function(a, b, socket)
            })
        })

        PlayerEvents.map((event) => {
            socket.on(event.function.name, (a: any, b: any) => {
                event.function(a, b, socket)
            })
        })

        

    })

};