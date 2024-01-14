import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import MongoDB from './Config/MongoDb.js'
import Socket from './Socket/Socket.js'
import userRoutes from './CRUD/User.js'
import loginRoute from './CRUD/Login.js'
import chatListRoute from './CRUD/ChatList.js'
import Cors from 'cors'
import BodyParser from 'body-parser'
import './Env.js'

const PORT = process.env.PORT

const app = express()
const httpServer = createServer(app)
 const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
})
app.use(Cors())
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))

app.use('/user', userRoutes)
app.use('/Login', loginRoute)
app.use('/chatList', chatListRoute)

io.on('connection', Socket)

httpServer.listen(PORT, () => {
  MongoDB().then(() => {
    console.log('server is running ')
  })
})
