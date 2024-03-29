import { socket } from "../index.tsx";
import { resetBuzzer, setActiveBuzzer, setAnswerRevealed, setBuzzerLocked, setConnectedPlayers, setQuestionAnswerIndex } from "../store/reducers/game.ts";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { getQuestionAnserIndex } from "../store/selectors/gameSelectors.ts";
import { QuestionNext, QuestionPrevious } from "./functions/questionAnswer.ts";
import { ResetBuzzerFunctions } from "./functions/buzzer.ts";

export const registerPlayPageEvents = () => {
    const dispatch = useAppDispatch();
    const answerIndex = useAppSelector(getQuestionAnserIndex);
    useEffect(() => {
        socket.on("leaveRoom/success", (roomData) => {
            if (roomData.players) {
                dispatch(setConnectedPlayers(roomData.players));
            }
        });
        socket.on("buzzer/out", ({ socketId, userName }) => {
            console.log(socketId, " has buzzered");
            dispatch(setActiveBuzzer({ socketId, userName }));
        });
        socket.on("resetBuzzer/out", () => {
            dispatch(resetBuzzer());
        });
        socket.on("lockBuzzer/out", (locked) => {
            dispatch(setBuzzerLocked(locked));
        });
        socket.on("revealAnswer/out", () => {
            dispatch(setAnswerRevealed(true));
        });
        QuestionNext.out(() => {
            dispatch(setAnswerRevealed(false));
            dispatch(setQuestionAnswerIndex(answerIndex + 1));
        });
        QuestionPrevious.out(() => {
            dispatch(setQuestionAnswerIndex(answerIndex - 1));
        });
        ResetBuzzerFunctions.out(() => {
            dispatch(setActiveBuzzer(undefined));
        });
    }, [answerIndex]);
};
