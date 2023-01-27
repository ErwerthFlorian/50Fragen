import {useTranslation, useTranslationData} from "../../translation/useTranslation";
import {getClasses} from "../../components/types";
import styles from "./styles";
import {categories} from "../../games/categories/Categories";
import {Category} from "../../components/Category/Category";
import {useCallback, useContext, useEffect} from "react";
import {GameContext} from "../../context/GameContext";
import {Topics} from "../../games/topics/Topics";
import {RoomButton} from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../App";

const cssClasses = getClasses(styles);

export const ChooseCategory = () => {
   const header = useTranslation("ChooseCategoryHeader");
   const navigate = useNavigate();
   const {chosenTopic} = useContext(GameContext);

   useEffect(() => {
      if (!chosenTopic) {
         navigate(Paths.HOME);
      }
   })

   const handleReturn = useCallback(() => {
      navigate(Paths.CHOOSE_TOPIC);
   }, []);

   return <div className={cssClasses.wrapper}>
      <h2>{header}</h2>
      <Categories/>
      <RoomButton translationComponent={"ChooseCategoryReturn"} onClick={handleReturn}/>
   </div>


}


const Categories = () => {
   const {language} = useTranslationData();
   const {chosenTopic} = useContext(GameContext);
   const currentCategories = categories.get(chosenTopic as keyof typeof Topics);

   return <div className={cssClasses.categoriesWrapper}>
      <>{currentCategories?.map((category, index) =>
         <Category key={index} name={category.data[language].name}
                   date={category.data[language].date}
                   difficulty={category.difficulty}
                   numQuestions={category.data[language].numQuestions}
         />)}
      </>
   </div>


}