import {Server, Socket} from "socket.io";
import {ClientToServerEvents, ServerToClientEvents, SocketData} from "./types";
import {roomListeners} from "./rooms";


const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();
app.use(cors());

const server = http.createServer(app);
server.listen(8080, () => {
   console.log("Server is listening on 8080");
});


export class ServerSocket {
   public static instance: ServerSocket;
   public io: Server<ClientToServerEvents, ServerToClientEvents, SocketData>;

   constructor(server: typeof http) {
      ServerSocket.instance = this;
      this.io = new Server<ClientToServerEvents, ServerToClientEvents, SocketData>(server, {
         cors: {
            methods: "*",
            allowedHeaders: "*",
            origin: "*",
         }
      });

      this.io.on("connect", this.startListeners);
   }

   startListeners = (socket: Socket) => {
      console.log("Socket", socket.id, "connected.")

      socket.on("disconnect", () => {
         console.log("Socket", socket.id, "disconnected.");
      })

      roomListeners(socket);
   }
}


new ServerSocket(server);
