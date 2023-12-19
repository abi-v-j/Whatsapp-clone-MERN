const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  time: {
    type: String,
    default: () => new Date().toISOString(),
  },
  chatMessage: {
    type: String,
  },
  
  fromUserId: {
    type: String
  },
  toUserId: {
    type: String
  },

});
module.exports = Chat = mongoose.model('chat', chatSchema);