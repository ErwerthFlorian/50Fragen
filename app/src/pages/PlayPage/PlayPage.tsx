import { useAppDispatch, useAppSelector } from "../../store";
import { PlayPageHeader } from "../../components/Header/PlayPageHeader";
import { useCallback, useEffect, useMemo } from "react";
import { socket } from "../../index.tsx";
import { getBuzzer, getConnectedPlayers, getIsModerator, getRoomID } from "../../store/selectors/gameSelectors.ts";
import { resetBuzzer, setActiveBuzzer, setConnectedPlayers } from "../../store/reducers/game.ts";
import { PlayerCard } from "../../components/PlayerCard/PlayerCard.tsx";
import "./styles.css";
import { QuestionTracker } from "../../components/QuestionTracker/QuestionTracker.tsx";

export const PlayPage = () => {
    const dispatch = useAppDispatch();
    const roomId = useAppSelector(getRoomID);
    const connectedPlayers = useAppSelector(getConnectedPlayers);
    const buzzer = useAppSelector(getBuzzer);
    const isModerator = useAppSelector(getIsModerator);

    useEffect(() => {
        socket.on("onLeaveRoomSuccess", (roomData) => {
            if (roomData.players) {
                dispatch(setConnectedPlayers(roomData.players));
            }
        });

        socket.on("onBuzzer", (socketId) => {
            console.log(socketId, " has buzzered");
            dispatch(setActiveBuzzer({ socketId }));
        });

        socket.on("onBuzzerReset", () => {
            dispatch(resetBuzzer());
        });
    }, []);

    const handleBuzzer = useCallback(() => {
        socket.emit("doBuzzer", roomId, socket.id);
    }, [roomId, socket]);

    const buzzerClassName = useMemo(() => `${Boolean(buzzer && buzzer.socketId === socket.id) && "play-page-buzzered"} play-page-buzzer`, [buzzer, socket]);

    return (
        <>
            <PlayPageHeader />
            <div className="play-page">
                <QuestionTracker />
                <div className={"play-page-question"}>Wie lautet das Familienmotto der Starks?</div>
                {!isModerator && <button onClick={handleBuzzer} className={buzzerClassName} />}
                <div className="play-page-players">
                    {connectedPlayers.map(({ userName }) => (
                        <PlayerCard userName={userName} />
                    ))}
                </div>
            </div>
        </>
    );
};
