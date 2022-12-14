import {Container} from "../components/Layout/container/container";
import {MainHeader} from "../components/Display/TextDisplays/Header/Header";
import {HorizontalGrid} from "../components/Layout/Grids/HorizontalGrid";
import {Avatar} from "../components/Display/Avatar/Avatar";
import {RoomButton} from "../components/Display/Button/button";
import {useTranslation} from "../translation/useTranslation";
import {Input} from "../components/Input/Input";
import {useCallback, useMemo, useState} from "react";
import {ErrorMessage} from "../components/Display/Error/ErrorMessage";
import {joinRoom} from "../socket/socket";
import {useNavigate} from "react-router-dom";

export const Welcome = () => {
   return (
      <Container>
         <MainHeader headerStyle={"h1"} />
         <Avatar />
         <HorizontalGrid spaces={2}>
            <CreateRoom />
            <JoinRoom />
         </HorizontalGrid>
      </Container>
   );
}

const CreateRoom = () => {
   const navigate = useNavigate();
   const handleCreateRoom = useCallback(() => {
      navigate("/create-room");
   }, []);
   return <RoomButton translationComponent={"CreateRoomButton"} onClick={handleCreateRoom} />
}

const JoinRoom = () => {
   const translation = useTranslation("JoinRoomLabel");
   const [roomNumber, setRoomNumber] = useState<string>("");
   const hasError = useMemo(() => roomNumber.length > 5, [roomNumber]);

   const handleJoinRoom = useCallback(() => {
      joinRoom(roomNumber, "Peter");
   }, [roomNumber])

   return (<div>
      <ErrorMessage hasError={hasError} errorComponent={"JoinRoomLabelError"} />
      <Input hasError={hasError} onValueChange={(e) => setRoomNumber(e.currentTarget.value)} label={translation} />
      <RoomButton translationComponent={"JoinRoomButton"} onClick={handleJoinRoom} />
   </div>)
}