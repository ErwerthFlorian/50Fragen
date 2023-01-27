
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

type AvatarURL = `blob:http://${string}`

export interface ServerToClientEvents {
   roomCreated: (roomId: string) => void;
   joinedRoom: (playerName: string, roomNumber: string, avatar: AvatarURL) => void;
   communicateBuzzered: (id: string) => void;
   registerPlayer: () => number;
}

export interface ClientToServerEvents {
   createRoom: (difficulty: string) => void;
   joinRoom: (playerName: string, roomNumber: string, avatar: AvatarURL) => void;
   playerBuzzered: () => void;
}
export interface SocketData {
   id: string;
}