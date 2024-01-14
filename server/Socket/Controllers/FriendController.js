import User from '../../Models/User.js'
import Friends from '../../Models/Friends.js'
import BaseController from './BaseController.js'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

export default class TypingController extends BaseController {
  MakeFriends = async ({ data }) => {
    try {
      const { Uid, Id } = data

      const decodedToken = jwt.verify(Uid, process.env.JWT_SECRET)
      const userOne = new mongoose.Types.ObjectId(decodedToken.user.id)
      const userTwo = new mongoose.Types.ObjectId(Id)

      console.log('UserOne:', userOne)
      console.log('UserTwo:', userTwo)

      let friendsData = await Friends.findOne({
        $or: [
          { UserOne: userOne, UserTwo: userTwo },
          { UserOne: userTwo, UserTwo: userOne },
        ],
      })

      if (friendsData) {
        console.log('Friendship already exists:', friendsData)
      } else {
        friendsData = new Friends({
          UserOne: userOne,
          UserTwo: userTwo,
        })
        await friendsData.save()
        console.log('Friendship saved:', friendsData)
      }

      this.socket.join(friendsData._id)


      // this.socket.emit("fromServer-Friends", { data });
    } catch (error) {
      console.error('Error in makeFriends:', error)
      // Handle the error appropriately
    }
  }
}
