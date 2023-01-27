import {AvatarURL} from "../components/Display/Avatar/Avatar";
import {createContext, useContext, useEffect, useState} from "react";
import {WithChildren} from "../types";

interface GameContext {
   roomNumber: string | undefined,
   playerName: string | undefined,
   setRoomNumber?: ReactDispatch<string | undefined>
   setPlayerName?: ReactDispatch<string | undefined>,
   setPlayerAvatar?: ReactDispatch<AvatarURL>,
   avatar: AvatarURL,
}

const DefaultGameContext: GameContext = {roomNumber: undefined, playerName: undefined, avatar: undefined};

export const GameContext = createContext<GameContext>(DefaultGameContext);

type ReactDispatch<T> =  React.Dispatch<React.SetStateAction<T>>;

export const GameContextProvider = ({children}: WithChildren) => {

   const [roomNumber, setRoomNumber] = useState<string | undefined>(undefined);
   const [playerName, setPlayerName] = useState<string | undefined>(undefined);
   const [avatar, setPlayerAvatar] = useState<AvatarURL>(undefined);

   return <GameContext.Provider value={{roomNumber, playerName, avatar, setRoomNumber, setPlayerName, setPlayerAvatar}}>{children}</GameContext.Provider>
}


export const useName = () =>{
   const [name, setName] = useState<string>("");
   const {setPlayerName} = useContext(GameContext);
   useEffect(() => {
      setPlayerName?.(name);
   }, [name])
   return {name, setName};
}

export const useAvatar = () =>{
   const [avatar, setAvatar] = useState<AvatarURL>();
   const {setPlayerAvatar} = useContext(GameContext);
   useEffect(() => {
      setPlayerAvatar?.(avatar);
   }, [avatar])
   return {avatar, setAvatar};
}


export const useRoomNumber = () => {
   const [roomNumber, setNumber] = useState<string>("");
   const {setRoomNumber} = useContext(GameContext);
   useEffect(() => {
      setRoomNumber?.(roomNumber);
   }, [roomNumber])
   return {roomNumber, setRoomNumber: setNumber};
}