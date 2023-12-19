const express = require("express");
const http = require('http');  // Use 'http' instead of 'node:http'
const { createServer } = http;

const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require('./config/DB')
const { Server } = require('socket.io');
const server = createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
});

const port = 7000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const chatRoute = require('./crud/Chat')
const userRoute = require('./crud/User')

app.use('/chat', chatRoute)
app.use('/user', userRoute)

// Start server and connect to the database
server.listen(port, () => {
  connectDB()
    .then(() => {
      console.log('Connected to the database');
      console.log(`Server is running on port ${port}`);
    })
    .catch(error => {
      console.error('Error connecting to the database:', error);
    });
});
