import {AvatarURL} from "../components/Display/Avatar/Avatar";
import {createContext, useEffect, useState} from "react";
import {WithChildren} from "../types";

interface GameContext {
   roomNumber: number | undefined,
   playerName: string | undefined,
   setRoomNumber?: ReactDispatch<number | undefined>
   setPlayerName?: ReactDispatch<string | undefined>,
   setPlayerAvatar?: ReactDispatch<AvatarURL>,
   avatar: AvatarURL,
}

const DefaultGameContext: GameContext = {roomNumber: undefined, playerName: undefined, avatar: undefined};

export const GameContext = createContext<GameContext>(DefaultGameContext);

type ReactDispatch<T> =  React.Dispatch<React.SetStateAction<T>>;

export const GameContextProvider = ({children}: WithChildren) => {

   const [roomNumber, setRoomNumber] = useState<number | undefined>(undefined);
   const [playerName, setPlayerName] = useState<string | undefined>(undefined);
   const [playerAvatar, setPlayerAvatar] = useState<AvatarURL>(undefined);

   useEffect(() =>{
      console.log(playerName, playerAvatar, roomNumber);
   }, [roomNumber, playerName, playerAvatar])

   return <GameContext.Provider value={{...DefaultGameContext, setRoomNumber, setPlayerName, setPlayerAvatar}}>{children}</GameContext.Provider>
}