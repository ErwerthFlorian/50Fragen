import {useCallback, useContext} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./styles";
import {Paths} from "../../App";
import {GameContext} from "../../context/GameContext";
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
      navigate(Paths.CREATEROOM);
   }, []);
   return <RoomButton translationComponent={"CreateRoomButton"} onClick={handleCreateRoom}/>
}

const JoinRoom = () => {
   const {avatar, playerName, roomNumber} = useContext(GameContext);
   const navigate = useNavigate();
   const handleJoinRoom = useCallback(() => {
      navigate(Paths.GAMEROOM);
   }, [playerName, avatar, roomNumber])

   return <RoomButton translationComponent={"JoinRoomButton"} onClick={handleJoinRoom}/>
}

