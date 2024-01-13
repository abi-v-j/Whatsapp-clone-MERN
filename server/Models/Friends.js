import mongoose from 'mongoose'

const friendSchema = new mongoose.Schema({
  UserOne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  UserTwo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
})
friendSchema.index({ UserOne: 1, UserTwo: 1 }, { unique: true });

export default mongoose.model('friends', friendSchema)
