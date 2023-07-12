import {useCallback, useState} from "react";
import { Button, Paper, TextField } from "@mui/material";
import "./style.css";

import { useAppDispatch } from "../../store";
import { setUserName } from "../../store/reducers/auth";
import { useNavigate } from "react-router-dom";
import {setConnected, setIsJoining, setRoomID} from "../../store/reducers/game.ts";
import {useEffectOnce} from "react-use";

export const MainPage = () => {
    const [name, setName] = useState("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffectOnce(() => {
        dispatch(setIsJoining(false));
        return () => {
            dispatch(setConnected(false));
            dispatch(setRoomID(""));
        }
    })

    const handleSetName = useCallback((value: string) => {
        if (name.length < 15) {
            setName(value);
        }
    }, []);

    const handleConfirmName = useCallback(() => {
        if (name.length > 0) {
            dispatch(setUserName(name));
            navigate("/generalTopic");
        }
    }, [name]);

    return (
        <div className="main-page-content">
            <h1 className="main-page-title">50 Fragen Online</h1>
            <p className="main-page-description">Hier kannst Du Fragen beantworten, die auch den Jungs von Pietsmiet gestellt wurden. Beachte, dass dies keine offizielle Webseite von Pietsmiet ist. Bei Probleme, Anregungen, Lob oder Kritik gibt es unten auf der Seite eine Kontaktmöglichkeit.</p>
            <Paper elevation={3}>
                <div className="main-page-actions">
                    <p>Um eine Spieleraum erstellen zu können brauchen wir einen Spitznamen von Dir</p>
                    <div className="main-page-name">
                        <TextField size="small" placeholder="Dein Spitzname" onChange={(e) => handleSetName(e.target.value)} />
                        <Button onClick={handleConfirmName}>Spitznamen bestätigen</Button>
                    </div>
                </div>
            </Paper>
        </div>
    );
};
