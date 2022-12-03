import {Player} from "./PlayerModel";


export const UPDATE_PLAYER = "playerModel/UPDATE_PLAYER";
export const DELETE_PLAYER = "playerModel/DELETE_PLAYER";

export type PlayerModelActions = {type: typeof UPDATE_PLAYER, payload: Player }
   | {type: typeof DELETE_PLAYER, payload: Player }

export const updatePlayer = (player: Player): PlayerModelActions => {
   return {type: UPDATE_PLAYER, payload: player}
}

export const deletePlayer = (player: Player): PlayerModelActions => {
   return {type: DELETE_PLAYER, payload: player}
}