import {createContext, useContext, useEffect, useState} from "react";
import {WithChildren} from "../types";
import {Topics} from "../games/topics/Topics";
import {AvatarURL} from "../components/Avatar/Avatar";

interface GameContext {
   roomNumber: string | undefined,
   playerName: string | undefined,
   chosenTopic?: keyof typeof Topics | undefined,
   setRoomNumber?: ReactDispatch<string | undefined>
   setChosenTopic?: ReactDispatch<keyof typeof Topics | undefined>
   setPlayerName?: ReactDispatch<string | undefined>,
   setPlayerAvatar?: ReactDispatch<AvatarURL>,
   avatar: AvatarURL,
}

const DefaultGameContext: GameContext = {roomNumber: undefined, playerName: undefined, avatar: undefined};

export const GameContext = createContext<GameContext>(DefaultGameContext);

type ReactDispatch<T> = React.Dispatch<React.SetStateAction<T>>;

export const GameContextProvider = ({children}: WithChildren) => {

   const [roomNumber, setRoomNumber] = useState<GameContext["roomNumber"]>(undefined);
   const [playerName, setPlayerName] = useState<GameContext["playerName"]>(undefined);
   const [avatar, setPlayerAvatar] = useState<GameContext["avatar"]>(undefined);
   const [chosenTopic, setChosenTopic] = useState<GameContext["chosenTopic"]>(undefined);

   return <GameContext.Provider value={{
      roomNumber,
      playerName,
      avatar,
      chosenTopic,
      setRoomNumber,
      setPlayerName,
      setPlayerAvatar,
      setChosenTopic
   }}>{children}</GameContext.Provider>
}


export const useName = () => {
   const [name, setName] = useState<string>("");
   const {setPlayerName} = useContext(GameContext);
   useEffect(() => {
      setPlayerName?.(name);
   }, [name])
   return {name, setName};
}

export const useAvatar = () => {
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