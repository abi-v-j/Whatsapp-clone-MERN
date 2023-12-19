const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require('./config/DB')

const port = 7000
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


connectDB()





app.listen(port, () => {
    console.log("Server is Running");
  });
  
