import mongoose from 'mongoose';
import moment from "moment-timezone";
import { createAdapter } from '@socket.io/mongo-adapter';

const chatSchema = new mongoose.Schema({
  dateTime: {
    type: String,
    default: () => moment().tz("Asia/Kolkata").format(), // Use the timezone "Asia/Kolkata" for IST

  },
  message: {
    type:String,
  },
  UserId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
  },
  sessionId:{
    type:String
  },
  image:{
    type:String
  },
  video:{
    type:String
  },
  pdf:{
    type:String
  }
 

});

// Pre-save middleware to convert the date to IST before saving to the database
chatSchema.pre("save", function (next) {
  this.doj = moment(this.doj).tz("Asia/Kolkata").format();
  next();
});

io.adapter(createAdapter(chatSchema));


export default  mongoose.model('chat', chatSchema);