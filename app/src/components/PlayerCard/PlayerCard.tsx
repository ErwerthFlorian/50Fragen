import "./styles.css";
import { Paper } from "@mui/material";
import { useAppSelector } from "../../store";
import { getBuzzer, getIsModerator, getRoomID } from "../../store/selectors/gameSelectors.ts";
import { useCallback, useMemo } from "react";
import { CorrectAnswer, IncorrectAnswer } from "../../serverEvents/functions/questionAnswer.ts";
import { Player } from "../../../../backend";
import { usePlayerCardEvents } from "../../serverEvents/playerCardEvents.tsx";

export const PlayerCard = ({ player }: { player: Player }) => {
    usePlayerCardEvents();
    const buzzer = useAppSelector(getBuzzer);
    const roomId = useAppSelector(getRoomID);
    const isHost = useAppSelector(getIsModerator);

    const buzzerClasses = useMemo(() => `${Boolean(buzzer && buzzer.userName === player.userName) && "buzzered"} buzzer`, [buzzer, player]);
    const playerCardClasses = useMemo(
        () => `${Boolean(buzzer && buzzer.userName === player.userName) && "player-card-buzzered"} player-card`,
        [buzzer, player]
    );

    const handleCorrectAnswer = useCallback(() => {
        const newPlayer: Player = { ...player, points: player.points + 4 };
        CorrectAnswer.in(roomId, newPlayer);
    }, [player, roomId]);

    const handleIncorrectAnswer = useCallback(() => {
        IncorrectAnswer.in(roomId, player);
    }, [roomId, player]);

    return (
        <Paper elevation={2} className={playerCardClasses}>
            <div className={"player-name-wrapper"}>
                <div className={"player-name"}>{player.userName}</div>
                <div className={buzzerClasses}></div>
                <>
                    {buzzer && buzzer.userName === player.userName && isHost && (
                        <div>
                            <button onClick={handleCorrectAnswer}>Richtig</button>
                            <button onClick={handleIncorrectAnswer}>Falsch</button>
                        </div>
                    )}
                </>
            </div>

            <div>Textfeld</div>
            <div>{player.points}</div>
        </Paper>
    );
};
