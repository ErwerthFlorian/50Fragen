import {useTranslation, useTranslationData} from "../../translation/useTranslation";
import {getClasses} from "../../components/types";
import styles from "../ChooseTopic/styles";
import {Container} from "../../components/Container/Container";
import {categories} from "../../games/categories/Categories";
import {Category} from "../../components/Category/Category";
import {useContext} from "react";
import {GameContext} from "../../context/GameContext";
import {Topics} from "../../games/topics/Topics";

export const ChooseCategory = () => {
   const header = useTranslation("CreateRoomHeader");
   return <>
      <h2>{header}</h2>
      <Categories/>
   </>
}

const cssClasses = getClasses(styles);

const Categories = () => {
   const {language} = useTranslationData();
   const {chosenTopic} = useContext(GameContext);
   const currentCategories = categories.get(chosenTopic as keyof typeof Topics);
   
   return <Container>
      <div className={cssClasses.wrapper}>
         <>{currentCategories?.map((category, index) =>
            <Category key={index} name={category.data[language].name}
                      date={category.data[language].date}
                      difficulty={category.difficulty}
                      numQuestions={category.data[language].numQuestions}
            />)}
         </>
      </div>
   </Container>
}