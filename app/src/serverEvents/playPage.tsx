import { socket } from "../index.tsx";
import { resetBuzzer, setActiveBuzzer, setConnectedPlayers } from "../store/reducers/game.ts";
import { useEffect } from "react";
import { useAppDispatch } from "../store";

export const usePlayPageEvents = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        socket.on("leaveRoom/success", (roomData) => {
            if (roomData.players) {
                dispatch(setConnectedPlayers(roomData.players));
            }
        });
        socket.on("buzzer/out", (socketId) => {
            console.log(socketId, " has buzzered");
            dispatch(setActiveBuzzer({ socketId }));
        });

        socket.on("resetBuzzer/out", () => {
            dispatch(resetBuzzer());
        });
    }, []);
};
