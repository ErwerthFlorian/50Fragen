import {getClasses} from "../../components/Display/types";
import styles from "./styles";
import {useTranslation, useTranslationData} from "../../translation/useTranslation";
import {Container} from "../../components/Layout/container/container";
import {topics} from "../../questions/Topics";
import {Topic} from "../../components/Display/Topic/Topic";
import {Header} from "../../components/Display/TextDisplays/Header/Header";

export const CreateRoom = () => {
   const translation = useTranslation("CreateRoomHeader");
   return <>
      <Header headerStyle={"h2"}>{translation}</Header>
      <Topics />
   </>
}

const cssClasses = getClasses(styles);

const Topics = () => {
   const {language} = useTranslationData();
return <Container>
      <div className={cssClasses.wrapper} >
         <>{topics?.map((topic, index) => <Topic key={index} name={topic[language].name} date={topic[language].date} difficulty={topic[language].difficulty} numQuestions={topic[language].numQuestions}/>)}</>
      </div>
   </Container>
}