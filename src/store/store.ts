import {configureStore} from "@reduxjs/toolkit";
import {PlayerModelRecuder} from "./PlayerModel/PlayerModelRecuder";

export const store = configureStore({reducer: PlayerModelRecuder})