import { io } from 'socket.io-client'
export const socket = io('http://localhost:5000')

// export const Socket = () => {

//    socket.on('connect', () => {
//       const engine = socket.io.engine
//       console.log(engine.transport.name) // in most cases, prints "polling"

//       engine.once('upgrade', () => {
//          // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)
//          console.log(engine.transport.name) // in most cases, prints "websocket"
//       })

//       engine.on('packet', ({ type, data }) => {
//          // called for each packet received
//       })

//       engine.on('packetCreate', ({ type, data }) => {
//          // called for each packet sent
//       })

//       engine.on('drain', () => {
//          // called when the write buffer is drained
//       })

//       engine.on('close', (reason) => {
//          // called when the underlying connection is closed
//       })
//    })

//    socket.on('disconnect', () => {
//       console.log(socket.id) // undefined
//    })
//    return
// }

