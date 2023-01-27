import {AvatarURL} from "../components/Display/Avatar/Avatar";

export interface ServerToClientEvents {
   roomCreated: (roomId: string) => void;
   joinedRoom: (playerName: string, roomNumber: string, avatar: AvatarURL) => void;
   registerPlayer: () => number;
   communicateBuzzered: (id: string) => void;

}

export interface ClientToServerEvents {
   createRoom: (difficulty: string) => void;
   joinRoom: (playerName: string, roomNumber: string, avatar: AvatarURL) => void;
   playerBuzzered: () => void;
}
