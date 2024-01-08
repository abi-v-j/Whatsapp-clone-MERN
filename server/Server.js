import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import MongoDB from "./Config/MongoDb.js";
import Socket from "./Socket/Socket.js";
import userRoutes from "./CRUD/User.js";
import Cors from "cors";
import BodyParser from "body-parser";

const PORT = 5000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});
app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));





app.use("/user", userRoutes);

io.on("connection", Socket);

httpServer.listen(PORT, () => {
  MongoDB().then(() => {
    console.log("server is running ");
  });
});
