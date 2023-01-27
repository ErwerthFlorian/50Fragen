import {useCallback, useContext} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./styles";
import {Paths} from "../../App";
import {GameContext} from "../../context/GameContext";
import {getClasses} from "../../components/types";
import {Container} from "../../components/Container/Container";
import {MainHeader} from "../../components/Headline/Headline";
import {Avatar} from "../../components/Avatar/Avatar";
import {RoomButton} from "../../components/Button/button";

const cssClasses = getClasses(styles);

export const Home = () => {
   return (
      <Container>
         <MainHeader headerStyle={"h1"}/>
         <Avatar/>
         <div className={cssClasses.buttons}>
            <CreateRoom/>
            <JoinRoom/>
         </div>
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

   return (<div>
      <RoomButton translationComponent={"JoinRoomButton"} onClick={handleJoinRoom}/>
   </div>)
}

