import express, { Express } from 'express'
import cors from 'cors'

import { createSocketConnection } from './socket'

import SocketConnection from './socket'

import { Server_PORT } from './server'

var timeout = require('connect-timeout')
var path = require('path');

export class App {
    server: Express;
    socket: any

    constructor() {
        this.server = express()
        this.middlewares().then(() => SocketConnection())

    }

    async middlewares() {
        this.server.use(express.json())
        this.server.use(cors())
        this.server.use(timeout('5s'))
        this.socket = createSocketConnection(this.server)

    }
}