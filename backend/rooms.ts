import {Socket} from "socket.io";
import {Room} from "./types";

const rooms: Room[] = [];
const numbers = "1234567890";

const createRandomId = () => {
   let id: string = "";
   for(let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length - 1);
      id += numbers.at(randomIndex);
   }
   return id;
}

export const createRoom = (hostId: string) => {
   const id = createRandomId();
   rooms.push({id, hostId, players: []})
   return id;
}

const getRoom = (roomNumber: string) => {
   return rooms.find(room => room.id === roomNumber);
}
const isPlayerInRoom = (room: Room, id: string) => {
   return Boolean(room.players.find(player => player.id === id));
}

export const joinRoom = (roomNumber: string, socketId: string, name: string) => {
   const room = getRoom(roomNumber);
   if(room && !isPlayerInRoom(room, socketId)) {
      room.players =  [...room.players, {id: socketId, name}];
      console.log(room);
      return "Joined room.";
   }

   return "Cannot join room.";
}

export const roomListeners = (socket: Socket) => {
   socket.on("createRoom", (id, roomNumber) => {
      socket.join(roomNumber)
      socket.emit("roomCreated", createRoom(id))
   })

   socket.on("joinRoom", (roomNumber, name) => {
      socket.emit("joinedRoom", joinRoom(roomNumber, socket.id, name));
   });
}
