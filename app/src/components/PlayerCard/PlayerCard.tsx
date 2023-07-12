import { Player } from "../../../../backend";
import "./styles.css";
import { Paper } from "@mui/material";
import { useAppSelector } from "../../store";
import { getBuzzer } from "../../store/selectors/gameSelectors.ts";
import { useMemo } from "react";
import { socket } from "../../index.tsx";

export const PlayerCard = ({ userName }: Omit<Player, "socketId">) => {
    const buzzer = useAppSelector(getBuzzer);

    const buzzerClasses = useMemo(() => `${Boolean(buzzer && buzzer.socketId === socket.id) && "buzzered"} buzzer`, [buzzer, socket]);

    return (
        <Paper elevation={2} className={"player-card"}>
            <div className={"player-name-wrapper"}>
                <div className={"player-name"}>{userName}</div>
                <div className={buzzerClasses}></div>
            </div>

            <div>Textfeld</div>
            <div>Punkte</div>
        </Paper>
    );
};
