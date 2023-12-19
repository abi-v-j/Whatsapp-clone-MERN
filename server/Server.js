const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require('./config/DB')

const port = 7000
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const chatRoute = require('./crud/Chat')
app.use('/chat', chatRoute)







app.listen(port, () => {
  connectDB().then(() => {
    console.log('Server is Running')
  })
});

