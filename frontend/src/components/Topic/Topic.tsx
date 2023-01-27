import {getTopicNames, Topics} from "../../games/topics/Topics";
import {getClasses} from "../types";
import styles from "./styles";
import {useCallback, useContext, useMemo} from "react";
import {useTranslation, useTranslationData} from "../../translation/useTranslation";
import {GameContext} from "../../context/GameContext";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../App";

interface TopicProps {
   topic: keyof typeof Topics;
   numberOfCategories: number;
}

const cssClasses = getClasses(styles);

export const Topic = ({topic, numberOfCategories}: TopicProps) => {
   const {language} = useTranslationData();
   const topicName = useMemo(() => getTopicNames(topic)[language], [language])
   const availableCategoriesTranslation = useTranslation("TopicAvailableCategories");

   const {setChosenTopic} = useContext(GameContext);
   const navigate = useNavigate();

   const handleChooseTopic = useCallback(() => {
      setChosenTopic?.(topic);
      navigate(Paths.CHOOSE_CATEGORY);
   }, [])

   return <button onClick={handleChooseTopic} className={cssClasses.wrapper}><h3
      className={cssClasses.header}>{topicName}</h3>
      <div>{availableCategoriesTranslation}: {numberOfCategories}</div>
   </button>
};