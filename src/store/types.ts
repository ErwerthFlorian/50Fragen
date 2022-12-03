import {Player} from "./PlayerModel/PlayerModel";

interface GameRoom {
   id: string;
   players: Player[];
}

export interface Store {
   gameRoom: GameRoom;
}
