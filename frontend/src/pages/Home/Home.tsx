import {useCallback, useContext} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./styles";
import {getClasses} from "../../components/Display/types";
import {Container} from "../../components/Layout/container/container";
import {MainHeader} from "../../components/Display/TextDisplays/Header/Header";
import {Avatar} from "../../components/Display/Avatar/Avatar";
import {Paths} from "../../App";
import {RoomButton} from "../../components/Display/Button/button";
import {GameContext} from "../../context/GameContext";

const cssClasses = getClasses(styles);

export const Home = () => {
   return (
      <Container>
         <MainHeader headerStyle={"h1"}/>
         <Avatar/>
         <div className={cssClasses.buttons} >
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

