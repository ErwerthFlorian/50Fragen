import { useAppDispatch, useAppSelector } from "../../store";
import { PlayPageHeader } from "../../components/Header/PlayPageHeader";
import { useCallback, useEffect, useMemo } from "react";
import { socket } from "../../index.tsx";
import {
    getBuzzer,
    getConnectedPlayers,
    getCurrentPairs,
    getCurrentQuestion,
    getIsModerator,
    getQuestionAnserIndex,
    getRoomID,
} from "../../store/selectors/gameSelectors.ts";
import { setQuestionAnswerIndex } from "../../store/reducers/game.ts";
import { PlayerCard } from "../../components/PlayerCard/PlayerCard.tsx";
import "./styles.css";
import { QuestionTracker } from "../../components/QuestionTracker/QuestionTracker.tsx";
import { usePlayPageEvents } from "../../serverEvents/playPage.tsx";
import { BuzzerFunctions } from "../../serverEvents/functions/buzzer.ts";

export const PlayPage = () => {
    const dispatch = useAppDispatch();
    const roomId = useAppSelector(getRoomID);
    const connectedPlayers = useAppSelector(getConnectedPlayers);
    const buzzer = useAppSelector(getBuzzer);
    const isModerator = useAppSelector(getIsModerator);
    const currentQuestionAnswerPair = useAppSelector(getCurrentQuestion);
    const currentQuestionAnswerIndex = useAppSelector(getQuestionAnserIndex);
    const pairs = useAppSelector(getCurrentPairs);
    usePlayPageEvents();

    if (!currentQuestionAnswerPair || !pairs) {
        return null;
    }

    useEffect(() => {}, []);

    const handleBuzzer = useCallback(() => {
        BuzzerFunctions.in(roomId);
    }, [roomId, socket]);

    const buzzerClassName = useMemo(() => `${Boolean(buzzer && buzzer.socketId === socket.id) && "play-page-buzzered"} play-page-buzzer`, [buzzer, socket]);

    return (
        <>
            <PlayPageHeader />
            <div className="play-page">
                <QuestionTracker />
                <div className={"play-page-question"}>{currentQuestionAnswerPair.question}</div>
                {isModerator ? (
                    <div>
                        {pairs[currentQuestionAnswerIndex + 1] && (
                            <button onClick={() => dispatch(setQuestionAnswerIndex(currentQuestionAnswerIndex + 1))}>Nächste Frage</button>
                        )}
                        {currentQuestionAnswerIndex > 0 && (
                            <button onClick={() => dispatch(setQuestionAnswerIndex(currentQuestionAnswerIndex - 1))}>Vorherige Frage</button>
                        )}
                        <button onClick={() => dispatch(setQuestionAnswerIndex(currentQuestionAnswerIndex - 1))}>Buzzer sperren / Buzzer entsperren</button>
                        <button onClick={() => dispatch(setQuestionAnswerIndex(currentQuestionAnswerIndex - 1))}>Antwort anzeigen</button>
                    </div>
                ) : (
                    <button onClick={handleBuzzer} className={buzzerClassName} />
                )}
                <div className="play-page-players">
                    {connectedPlayers.map(({ userName }) => (
                        <PlayerCard userName={userName} />
                    ))}
                </div>
            </div>
        </>
    );
};
