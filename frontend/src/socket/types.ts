export interface ServerToClientEvents {
   roomCreated: (roomId: string) => void;
   joinedRoom: (message: string) => void;
   registerPlayer: () => number;
}

export interface ClientToServerEvents {
   createRoom: (hostId: string) => void;
   joinRoom: (roomNumber: string, name: string) => void;
}

