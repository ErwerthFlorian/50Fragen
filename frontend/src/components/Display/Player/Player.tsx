import {AvatarURL} from "../Avatar/Avatar";
import {useContext} from "react";
import {GameContext} from "../../../context/GameContext";

export interface Player {
   name: string,
   avatar: AvatarURL | undefined,
}
export const Player = () => {
   const {playerName, avatar, roomNumber} = useContext(GameContext)
   return (
   <>
      {playerName}{avatar}{roomNumber}
   </>
   );
}