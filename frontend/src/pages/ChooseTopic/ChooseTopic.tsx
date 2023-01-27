import {categories} from "../../games/categories/Categories";
import {Topic} from "../../components/Topic/Topic";
import {getClasses} from "../../components/types";
import styles from "./styles";
import {useCallback} from "react";
import {Paths} from "../../App";
import {useNavigate} from "react-router-dom";
import {Topics} from "../../games/topics/Topics";
import {RoomButton} from "../../components/Button/Button";

const getAvailableCategories = (topic: keyof typeof Topics) => {
   return categories.get(topic)?.length ?? 0;
}

const cssClasses = getClasses(styles);


export const ChooseTopic = () => {

   const navigate = useNavigate();
   const handleReturn = useCallback(() => navigate(Paths.HOME), []);

   return <div className={cssClasses.mainWrapper}>
      <div className={cssClasses.subWrapper}>
         {Object.values(Topics).map((topic, index) => {
            const currentTopic = topic as keyof typeof Topic
            return <Topic
               key={index} topic={currentTopic} numberOfCategories={getAvailableCategories(currentTopic)}/>
         })}
      </div>
      <RoomButton className={cssClasses.home} translationComponent={"TopicReturnHome"} onClick={handleReturn}/>
   </div>
};
