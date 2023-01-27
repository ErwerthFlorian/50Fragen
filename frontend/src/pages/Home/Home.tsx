import {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./styles";
import {Paths} from "../../App";
import {getClasses} from "../../components/types";
import {Container} from "../../components/Container/Container";
import {Title} from "../../components/Title/Title";
import {Explaination} from "../../components/Explaination/Explaination";
import {RoomButton} from "../../components/Button/Button";

const cssClasses = getClasses(styles);

export const Home = () => {
   return (
      <Container>
         <Title/>
         <div className={cssClasses.button}>
            <CreateRoom/>
         </div>
         <Explaination/>
      </Container>
   );
}

const CreateRoom = () => {
   const navigate = useNavigate();
   const handleCreateRoom = useCallback(() => {
      navigate(Paths.CHOOSE_TOPIC);
   }, []);
   return <RoomButton translationComponent={"CreateRoomButton"} onClick={handleCreateRoom}/>
}

