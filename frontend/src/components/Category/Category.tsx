import styles from "./styles";
import {getClasses} from "../types";
import {useCallback, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {GameContext} from "../../context/GameContext";
import {socket} from "../../socket/socket";
import {Paths} from "../../App";
import {useTranslation} from "../../translation/useTranslation";
import {CategoryData} from "../../games/categories/Categories";
import {Button} from "../Button/Button";


const cssClasses = getClasses(styles);
export const Category = ({name, date, numQuestions, difficulty}: CategoryData & { difficulty: string }) => {

   const translations = useCategoryTranslation();
   const navigate = useNavigate();
   const {setRoomNumber, chosenTopic} = useContext(GameContext);

   const handleRoomCreation = useCallback(() => {
      socket.emit("createRoom", name);
      socket.on("roomCreated", (roomNumber: string) => {
         console.log("room with number: ", roomNumber, " created.");
         setRoomNumber?.(roomNumber);
         navigate(Paths.GAME_ROOM);
      })
   }, []);


   return (<Button onClick={handleRoomCreation} className={cssClasses.cardWrapper}>
      <h2 className={cssClasses.title}>{name}</h2>
      <div className={cssClasses.difficulty}>{translations.difficulty.concat(": ", difficulty)}</div>
      <div className={cssClasses.date}>{translations.date.concat(": ", date)}</div>
      <div className={cssClasses.numQuestions}>{translations.numQuestions.concat(": ", numQuestions.toString())}</div>
   </Button>);


}

const useCategoryTranslation = () => {
   const difficulty = useTranslation("CategoryDifficulty");
   const date = useTranslation("CategoryDate");
   const numQuestions = useTranslation("CategoryNumQuestions");

   return {difficulty, date, numQuestions};
}