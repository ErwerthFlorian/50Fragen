import {Reducer} from "@reduxjs/toolkit";
import {DELETE_PLAYER, PlayerModelActions, UPDATE_PLAYER} from "./PlayerModelActions";
import {PlayerModel} from "./PlayerModel";

export const PlayerModelRecuder: Reducer<PlayerModel, PlayerModelActions> = (state = { id: "", avatar: "", name: "" }, action) => {

   let newState: PlayerModel;
   switch (action.type) {
      case UPDATE_PLAYER: {
         newState = {...state,...action.payload}
      }
      break;
      case DELETE_PLAYER: {
         newState = { id: undefined, name: undefined, avatar: undefined}
      }
      break;
   }

   return newState;
}