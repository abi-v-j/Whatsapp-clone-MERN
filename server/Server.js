import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
   cors: {
      origin: 'http://localhost:3001',
   },
})

io.on('connection', (socket) => {
   socket.on('hello', (arg) => {
      console.log(arg) // world
      socket.broadcast.emit("hello",arg);
    })
})

httpServer.listen(5000)
