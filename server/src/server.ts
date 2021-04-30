import { App } from './app'
require('dotenv').config()

export const ServerApp = new App();

export const Server_PORT = process.env.PORT;

ServerApp.frontend.listen(7475, () => {
  console.log('FrontEnd Initialized 🚀 http://keybit.wemakean.com/')
})

export default {};