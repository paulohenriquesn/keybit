import { App } from './app'
require('dotenv').config()

export const ServerApp = new App();

export const Server_PORT = process.env.PORT;

export default {};