import express, { Express } from 'express'
import cors from 'cors'

import { createSocketConnection } from './socket'

import SocketConnection from './socket'

import { Server_PORT } from './server'

var path = require('path');

export class App {
    server: Express;
    frontend: Express;
    socket: any

    constructor() {
        this.server = express()
        this.frontend = express()
        this.middlewares().then(() => SocketConnection())

    }

    async middlewares() {
        this.server.use(express.json())
        this.server.use(cors())

        this.socket = createSocketConnection(this.server)

        
        this.frontend.use(express.static(path.join(__dirname, 'build')));
        this.frontend.get('/*', function (req, res) {
            res.sendFile(path.join(__dirname, 'build', 'index.html'));
        });

    }
}