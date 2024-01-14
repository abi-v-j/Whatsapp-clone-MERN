import BaseController from './BaseController.js'
import Chat from '../../Models/Chat.js'
import jwt from 'jsonwebtoken'
import '../../Env.js'
import fs from 'fs'

export default class MessageController extends BaseController {
  SendMessage = async ({ message, Id, Uid }) => {
    const decodedToken = jwt.verify(Uid, process.env.JWT_SECRET)
    const userId = decodedToken.user.id

    console.log(userId)
    console.log(message)
    console.log(Id)

    const chat = new Chat({
      message,
      sessionId: Id,
      UserId: userId,
    })
    await chat.save()
    console.log(chat);

    this.socket.broadcast.to(Id).emit('toServer-sendMessage', { chat })
  }
}
