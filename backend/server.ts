import {Server, Socket} from "socket.io";
import {ClientToServerEvents, ServerToClientEvents, SocketData} from "./types";
import {roomListeners} from "./rooms";
import {Adapter} from "socket.io-adapter";


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
   public rooms: Map<string, Set<string>>;
   public adapter: Adapter;

   constructor(server: typeof http) {
      if(ServerSocket.instance === undefined) {
         ServerSocket.instance = this;
      }
      this.io = new Server<ClientToServerEvents, ServerToClientEvents, SocketData>(server, {
         cors: {
            methods: "*",
            allowedHeaders: "*",
            origin: "*",
         }
      });
      this.rooms = this.io.of("/").adapter.rooms;
      this.io.on("connect", this.startListeners);
      this.adapter = this.io.of("/").adapter;
   }

   startListeners = (socket: Socket) => {
      console.log("Socket", socket.id, "connected.")

      socket.on("disconnect", () => {
         console.log("Socket", socket.id, "disconnected.");
         console.log(this.rooms);
      })

      this.adapter.on("create-room", (room) => {
         console.log("Created room with ", room);
         console.log(this.rooms);
      })
      this.adapter.on("join-room", (room, socketId) => {
         console.log("Player ", socketId, " joined ", room);
         console.log(this.rooms);
      })

      roomListeners(this.adapter, socket);
   }
}


new ServerSocket(server);
