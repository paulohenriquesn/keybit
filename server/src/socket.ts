
import { Express } from 'express'
import { Socket } from 'socket.io';

import { ServerApp } from './server'

require('dotenv').config()

const Server_PORT = process.env.PORT;

var fs = require('fs')
var https = require('https');

var privateKey = fs.readFileSync(__dirname + '/ssl/server.key', 'utf8');
var certificate = fs.readFileSync(__dirname + '/ssl/server.crt', 'utf8');

var credentials = { key: privateKey, cert: certificate };

import { latency, disconnect } from './controllers/socket'

import { onUserMessage, joinRoom, setConnectedRoomId } from './controllers/player';

import { ReqAttackEnemy, ReqStartMatch } from './controllers/frontend';

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
    },
    {
        function: ReqAttackEnemy
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
    
    const https = require('https').Server(credentials,express_server)

    const socketConnection = require('socket.io')(https, {
        pingInterval: 5000,
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    })

    https.listen(Server_PORT,() => {
        console.log('Servidor Initialized 🚀 http://keybit.wemakean.com/')
    })

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