import {Header} from "../components/Display/TextDisplays/Header/Header";
import {useTranslation, useTranslationData} from "../translation/useTranslation";
import {Container} from "../components/Layout/container/container";
import {css} from "@emotion/css";
import {useMemo} from "react";
import {HorizontalGrid} from "../components/Layout/Grids/HorizontalGrid";
import {topics} from "../questions/Topics";
import {Topic} from "../components/Display/Topic/Topic";

export const CreateRoom = () => {
   const translation = useTranslation("CreateRoomHeader");
   return <>
      <Header headerStyle={"h2"}>{translation}</Header>
      <Topics />
   </>
}


const Topics = () => {
   const {language} = useTranslationData();
   const extraGridClasses = useMemo(() => css({gap: 20,placeItems: "initial"}), []);
return <Container>
      <HorizontalGrid extraStyles={extraGridClasses} spaces={4}>
         <>{topics?.map((topic, index) => <Topic key={index} name={topic[language].name} date={topic[language].date} difficulty={topic[language].difficulty} numQuestions={topic[language].numQuestions}/>)}</>
      </HorizontalGrid>
   </Container>
}