import {Socket} from "socket.io";
import {ClientToServerEvents, Room, ServerToClientEvents} from "./types";
import {Adapter} from "socket.io-adapter";
import {ServerSocket} from "./server";

const numbers = "1234567890";

const createRandomId = () => {
   let id: string = "";
   for(let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length - 1);
      id += numbers.at(randomIndex);
   }
   return id;
}


const isPlayerInRoom = (room: Room, id: string) => {
   return Boolean(room.players.find(player => player.id === id));
}

export const roomListeners = (adapter: Adapter, socket: Socket<ClientToServerEvents & ServerToClientEvents>) => {

   socket.on("createRoom", () => {
      const roomNumber = createRandomId();
      socket.join(roomNumber);
      socket.emit("roomCreated", roomNumber);
   })

   socket.on("joinRoom", (playerName, roomNumber, avatar) => {
      socket.join(roomNumber);
      ServerSocket.instance.io.to(roomNumber).emit("joinedRoom", playerName, roomNumber, avatar);
   });
}
