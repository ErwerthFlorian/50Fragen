
type Topic = {
   name: string;
   date: string;
   questions: number;
}

export type Room = {
   id: string;
   hostId: string;
   players: Player[];
}

export type Player = {
   id: string;
   name: string;
}

export interface ServerToClientEvents {
   roomCreated: (roomId: string) => void;
   joinedRoom: (message: string) => void;
   registerPlayer: () => number;
}

export interface ClientToServerEvents {
   createRoom: (socketId: string, difficulty: string) => void;
   joinRoom: (roomNumber: string, name: string) => void;
}

export interface SocketData {
   id: string;
}