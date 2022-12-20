import {Socket} from "socket.io";
import {Room} from "./types";
import {Adapter} from "socket.io-adapter";

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

export const joinRoom = (roomNumber: string, socket: Socket) => {
   socket.join(roomNumber);
   return {name: Math.random().toString(), avatar: undefined};
}

export const roomListeners = (adapter: Adapter, socket: Socket) => {

   socket.on("createRoom", () => {
      const roomNumber = createRandomId();
      socket.join(roomNumber);
      socket.emit("roomCreated", roomNumber);
   })

   socket.on("joinRoom", (roomNumber) => {
      socket.to(roomNumber).emit("joinedRoom", joinRoom(roomNumber, socket));
   });
}
