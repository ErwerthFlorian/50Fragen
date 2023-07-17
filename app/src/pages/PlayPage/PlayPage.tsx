import { useAppSelector } from "../../store";
import { PlayPageHeader } from "../../components/Header/PlayPageHeader";
import { useCallback, useMemo } from "react";
import { socket } from "../../index.tsx";
import {
    getBuzzer,
    getConnectedPlayers,
    getCurrentPairs,
    getCurrentQuestion,
    getIsAnswerRevealed,
    getIsBuzzerLocked,
    getIsModerator,
    getNumberOfQuestions,
    getQuestionAnserIndex,
    getRoomID,
} from "../../store/selectors/gameSelectors.ts";
import { PlayerCard } from "../../components/PlayerCard/PlayerCard.tsx";
import "./styles.css";
import { QuestionTracker } from "../../components/QuestionTracker/QuestionTracker.tsx";
import { registerPlayPageEvents } from "../../serverEvents/playPageEvents.tsx";
import { BuzzerFunctions, LockBuzzerFunctions } from "../../serverEvents/functions/buzzer.ts";
import { getUserName } from "../../store/selectors/authSelectors.ts";
import { AnswerFunctions, QuestionNext, QuestionPrevious } from "../../serverEvents/functions/questionAnswer.ts";

export const PlayPage = () => {
    const roomId = useAppSelector(getRoomID);
    const connectedPlayers = useAppSelector(getConnectedPlayers);
    const buzzer = useAppSelector(getBuzzer);
    const isModerator = useAppSelector(getIsModerator);
    const currentQuestionAnswerPair = useAppSelector(getCurrentQuestion);
    const currentQuestionAnswerIndex = useAppSelector(getQuestionAnserIndex);
    const pairs = useAppSelector(getCurrentPairs);
    const name = useAppSelector(getUserName);
    const buzzerLocked = useAppSelector(getIsBuzzerLocked);
    const answerRevealed = useAppSelector(getIsAnswerRevealed);
    const numberOfQuestions = useAppSelector(getNumberOfQuestions);

    registerPlayPageEvents();

    const handleBuzzer = useCallback(() => {
        BuzzerFunctions.in(roomId, name);
    }, [roomId, socket]);

    const buzzerClassName = useMemo(
        () => `${buzzerLocked && "play-page-buzzer-locked"} ${Boolean(buzzer && buzzer.socketId === socket.id) && "play-page-buzzered"} play-page-buzzer`,
        [buzzerLocked, buzzer, socket]
    );

    const handleLockBuzzer = useCallback(() => {
        LockBuzzerFunctions.in(roomId, !buzzerLocked);
    }, [buzzerLocked]);

    const handleRevealAnswer = useCallback(() => {
        AnswerFunctions.in(roomId);
    }, [roomId]);

    const handleNextQuestion = useCallback(() => {
        QuestionNext.in(roomId);
    }, [roomId, numberOfQuestions, currentQuestionAnswerIndex]);

    const handlePreviousQuestion = useCallback(() => {
        QuestionPrevious.in(roomId);
    }, [roomId, currentQuestionAnswerIndex]);

    if (!currentQuestionAnswerPair || !pairs) {
        return null;
    }

    return (
        <>
            <PlayPageHeader />
            <div className="play-page">
                <QuestionTracker />
                <div className={"play-page-question"}>{answerRevealed ? currentQuestionAnswerPair.answer : currentQuestionAnswerPair.question}</div>
                {isModerator ? (
                    <div>
                        {pairs[currentQuestionAnswerIndex + 1] && <button onClick={handleNextQuestion}>Nächste Frage</button>}
                        {currentQuestionAnswerIndex > 0 && <button onClick={handlePreviousQuestion}>Vorherige Frage</button>}
                        <button onClick={handleLockBuzzer}>{buzzerLocked ? "Buzzer entsperren" : "Buzzer sperren"}</button>
                        <button onClick={handleRevealAnswer}>Antwort anzeigen</button>
                    </div>
                ) : (
                    <button onClick={handleBuzzer} className={buzzerClassName} />
                )}
                <div className="play-page-players">
                    {connectedPlayers.map((player) => (
                        <PlayerCard player={player} />
                    ))}
                </div>
            </div>
        </>
    );
};
