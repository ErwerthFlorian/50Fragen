import {ClientToServerEvents} from "./types";
import {io} from "socket.io-client";

export const socket = io("http://localhost:8080");

export const joinRoom: ClientToServerEvents["joinRoom"] = (roomNumber, name) => {
   socket.emit("joinRoom", roomNumber, name);
   socket.on("joinRoom", (message) => {
      console.log(message);
   })
}