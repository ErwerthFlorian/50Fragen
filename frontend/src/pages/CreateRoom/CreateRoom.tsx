import styles from "./styles";
import {useTranslation, useTranslationData} from "../../translation/useTranslation";
import {topics} from "../../questions/Topics";
import {getClasses} from "../../components/types";
import {Container} from "../../components/Container/Container";
import {Topic} from "../../components/Topic/Topic";

export const CreateRoom = () => {
   const translation = useTranslation("CreateRoomHeader");
   return <>
      <h2>{translation}</h2>
      <Topics/>
   </>
}

const cssClasses = getClasses(styles);

const Topics = () => {
   const {language} = useTranslationData();
   return <Container>
      <div className={cssClasses.wrapper}>
         <>{topics?.map((topic, index) => <Topic key={index} name={topic[language].name} date={topic[language].date}
                                                 difficulty={topic[language].difficulty}
                                                 numQuestions={topic[language].numQuestions}/>)}</>
      </div>
   </Container>
}