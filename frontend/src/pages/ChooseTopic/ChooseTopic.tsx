import {Topics} from "../../games/topics/Topics";
import {categories} from "../../games/categories/Categories";
import {Topic} from "../../components/Topic/Topic";
import {getClasses} from "../../components/types";
import styles from "./styles";

const getAvailableCategories = (topic: keyof typeof Topics) => {
   return categories.get(topic)?.length ?? 0;
}

const cssClasses = getClasses(styles);

export const ChooseTopic = () => {
   return <div className={cssClasses.wrapper}>{Object.values(Topics).map((topic, index) => {
      const currentTopic = topic as keyof typeof Topic
      return <Topic
         key={index} topic={currentTopic} numberOfCategories={getAvailableCategories(currentTopic)}/>
   })}</div>
};