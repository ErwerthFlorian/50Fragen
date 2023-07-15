import { Modal } from "../Modal/Modal.tsx";
import { Button, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { setUserName } from "../../store/reducers/auth.ts";
import { useAppDispatch, useAppSelector } from "../../store";
import { getRoomID } from "../../store/selectors/gameSelectors.ts";
import { JoinRoomFunctions } from "../../serverEvents/functions/joinRoom.ts";

export const PlayerNameOverlay = () => {
    const [name, setName] = useState("");
    const dispatch = useAppDispatch();
    const roomId = useAppSelector(getRoomID);
    const handleNameChange = useCallback((name: string) => {
        setName(name);
    }, []);

    const handleNameConfirm = useCallback(() => {
        if (name && roomId) {
            dispatch(setUserName(name));
            JoinRoomFunctions.in(roomId, name);
        }
    }, [roomId, name]);

    return (
        <Modal open={true}>
            <div>Damit deine Mitspieler wissen wer Du bist, musst Du noch einen Spitznamen eingeben</div>
            <TextField placeholder="Dein Spitzname" onChange={(e) => handleNameChange(e.target.value)} />
            <Button onClick={handleNameConfirm}>Spitznamen bestätigen</Button>
            <Button>Abbrechen</Button>
        </Modal>
    );
};
