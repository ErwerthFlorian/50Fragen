import styles from "./styles";
import {getClasses} from "../types";
import {Button} from "../Button/button";
import {Topic as TopicType} from "../../../questions/Topics";
import {useTranslation} from "../../../translation/useTranslation";
import {useCallback, useContext} from "react";
import {socket} from "../../../socket/socket";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../../App";
import {GameContext} from "../../../context/GameContext";

const topicClasses = getClasses(styles);
export const Topic = ({name, date, numQuestions, difficulty}: TopicType) => {
   const translations = useTopicTranslation();
   const navigate = useNavigate();
   const {setRoomNumber} = useContext(GameContext);

   const handleRoomCreation = useCallback(() => {
      socket.emit("createRoom", name);
      socket.on("roomCreated", (roomNumber: string) => {
         console.log("room with number: ", roomNumber, " created.");
         setRoomNumber?.(roomNumber);
         navigate(Paths.GAMEROOM);
      })
   }, []);


   return (<Button onClick={handleRoomCreation} className={topicClasses.cardWrapper}>
      <h2 className={topicClasses.title}>{name}</h2>
      <div className={topicClasses.difficulty}>{translations.difficulty.concat(": ", difficulty)}</div>
      <div className={topicClasses.date}>{translations.date.concat(": ",date)}</div>
      <div className={topicClasses.numQuestions}>{translations.numQuestions.concat(": ",numQuestions.toString())}</div>
   </Button>);


}

const useTopicTranslation =()=>{
   const difficulty= useTranslation("TopicDifficulty");
   const date=useTranslation("TopicDate");
   const numQuestions=useTranslation("TopicNumQuestions");

   return {difficulty, date, numQuestions};
}