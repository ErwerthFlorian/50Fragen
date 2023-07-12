import type {Server as ServerType, Socket} from "socket.io";
import {GeneralTopicName} from "../app/src/data/";

const express = require("express");
const {Server} = require("socket.io");

const app = express();
const server = app.listen(3001, () => {
   console.log("Server is listening on port 3001");
});

export type Player = { socketId: string; userName: string };

type RoomData = {
   [key: string]: {
      packname: string;
      generalTopic: GeneralTopicName;
      hostName: string;
      players?: Array<Player>
   }
};

const roomData: RoomData = {};

export type IncommingMessages = {
   connection: "connection";
   doCreateRoom: (roomNumber: string, chosenGeneralTopic: GeneralTopicName, chosenPackname: string, hostName: string) => void;
   doJoinRoom: (roomNumber: string, userName: string, socketId: string) => void;
   doLeaveRoom: (roomNumber: string, userName: string) => void;
   doBuzzer: (roomNumber: string, socketId: string) => void;
   doBuzzerReset: (roomNumber: string) => void;
   doStartGame: (roomNumber: string) => void;
}

export type OutgoingMessages = {
   connection: "connection";
   onCreateRoom: (roomId: string) => void;
   onLeaveRoom: (roomId: string, userName: string) => void;
   onJoinRoomSuccess: (roomData: RoomData[string]) => void;
   onJoinRoomError: (message: string) => void;
   onLeaveRoomSuccess: (roomData: RoomData[string]) => void;
   onLeaveRoomError: (message: string) => void;
   onBuzzer: (buzzerData: string) => void;
   onBuzzerReset: () => void;
   onStartGame: () => void;
}


export const io = new Server(server, {
   cors: {
      origin: '*',
      methods: ['GET', 'POST']
   }
}) as ServerType<IncommingMessages, OutgoingMessages>;

io.on("connection", (socket: Socket<IncommingMessages, OutgoingMessages>) => {
   console.log("socket connected");

   socket.on("disconnect", () => {
      console.log("socket disconnected");
   });

   socket.on("doBuzzer", (roomNumber, socketId) => {
      socket.to(roomNumber).emit("onBuzzer", socketId);
      socket.emit("onBuzzer", socketId);
   });

   socket.on("doBuzzerReset", (roomNumber) => {
      io.to(roomNumber).emit("onBuzzerReset");
   })

   socket.on("disconnecting", () => {
      const roomNumbers = Object.keys(roomData);
      const roomNumber = Array.from(socket.rooms.values()).find((number) => roomNumbers.find((roomNumber) => roomNumber === number));
      if(roomNumber && roomData[roomNumber]) {
         const room = roomData[roomNumber];
         if(room.players) {
            room.players = room.players.filter(({socketId}) => socketId !== socket.id);
            socket.emit("onLeaveRoomSuccess", room);
            socket.to(roomNumber).emit("onLeaveRoomSuccess", room);
         }
      }
      else {
         socket.emit("onLeaveRoomError", "");
      }
   });

   socket.on("doCreateRoom", (roomNumber, chosenGeneralTopic, chosenPackname, hostName) => {
      if (!Array.from(socket.rooms.values()).includes(roomNumber)) {
         if (!Object.keys(roomData).includes(roomNumber)) {
            roomData[roomNumber] = {generalTopic: chosenGeneralTopic, packname: chosenPackname, hostName};
            socket.join(roomNumber);
            socket.emit("onCreateRoom", (roomNumber));
         }
      }
   });

   socket.on("doStartGame", (roomNumber) => {
      io.to(roomNumber).emit("onStartGame");
   })

   socket.on("doJoinRoom", (roomNumber, userName, socketId) => {
      if (Object.keys(roomData).includes(roomNumber)) {
         const room = roomData[roomNumber];
         if (room) {
            if (room.players && room.players.length > 0) {
               if (room.players.length < 4) {
                  if (!room.players.find(({userName: joinedName}) => joinedName === userName)) {
                     room.players = [...room.players, {userName, socketId}];
                  }
               } else {
                  socket.emit("onJoinRoomError", "Zu viele Spieler.");
               }

            } else {
               room.players = [{userName, socketId}];
            }
            socket.join(roomNumber);
            io.to(roomNumber).emit("onJoinRoomSuccess", room);
         } else {
            socket.emit("onJoinRoomError", "Raum nicht gefunden.");
         }
      } else {
         socket.emit("onJoinRoomError", "Raum nicht gefunden.");
      }
   });

   socket.on("doLeaveRoom", (roomNumber: string, userName: string) => {
      if (Object.keys(roomData).includes(roomNumber)) {
         if (roomData[roomNumber]) {
            socket.leave(roomNumber);
            const room = roomData[roomNumber];
            if(room && room.players) {
               room.players = room.players?.filter(({userName: joinedName}) => joinedName !== userName);
               io.to(roomNumber).emit("onLeaveRoomSuccess", room);
            } else {
               socket.emit("onLeaveRoomError", "");
            }
         }

      } else {
         socket.emit("onLeaveRoomError", "Raum nicht gefunden.");
      }
   });

})
io.of("/").adapter.on("delete-room", (room) => {
   if (roomData[room]) {
      delete roomData[room];
   }
});