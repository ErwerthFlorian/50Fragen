import { useAppDispatch, useAppSelector } from "../../store";
import { getConnectedPlayers, getGameStarted, getHostName, getIsJoining, getRoomID } from "../../store/selectors/gameSelectors.ts";
import { getUserName } from "../../store/selectors/authSelectors.ts";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { setConnected, setConnectedPlayers, setHostName, setRoomID, setStartGame } from "../../store/reducers/game.ts";
import { socket } from "../../index.tsx";
import { getChosenGeneralTopic, getChosenPackName } from "../../store/selectors/topicSelectors.ts";
import { setChosenGeneralTopic, setChosenPackName } from "../../store/reducers/topics.ts";
import { PlayerNameOverlay } from "../../components/PlayerNameOverlay/PlayerNameOverlay.tsx";

export const PlayPagePreroom = () => {
    const hostName = useAppSelector(getHostName);
    const name = useAppSelector(getUserName);
    const gameStarted = useAppSelector(getGameStarted);
    const connectedPlayers = useAppSelector(getConnectedPlayers);
    const chosenPackname = useAppSelector(getChosenPackName);
    const chosenTopic = useAppSelector(getChosenGeneralTopic);
    const userName = useAppSelector(getUserName);
    const roomId = useAppSelector(getRoomID);
    const isJoining = useAppSelector(getIsJoining);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (isJoining && id) {
            dispatch(setRoomID(id));
        } else {
            if (chosenPackname && chosenTopic && roomId) {
                socket.emit("doCreateRoom", roomId, chosenTopic, chosenPackname, userName);
                socket.on("onCreateRoom", () => {
                    dispatch(setHostName(userName));
                    dispatch(setConnected(true));
                });
            } else {
                navigate("/");
            }
        }
        socket.on("onJoinRoomSuccess", (roomData) => {
            if (roomData.players) {
                dispatch(setConnectedPlayers(roomData.players));
                dispatch(setChosenPackName(roomData.packname));
                dispatch(setHostName(roomData.hostName));
                dispatch(setChosenGeneralTopic(roomData.generalTopic));
                dispatch(setConnected(true));
            }
        });
        socket.on("onStartGame", () => {
            dispatch(setStartGame(true));
        });
        socket.on("onJoinRoomError", (message) => {
            console.log(message);
            navigate("/");
        });
    }, []);

    const handleStartGame = useCallback(() => {
        socket.emit("doStartGame", roomId);
        dispatch(setStartGame(true));
    }, []);

    useEffect(() => {
        if (gameStarted) {
            navigate(`/play/${roomId}`);
        }
    }, [gameStarted]);

    return (
        <>
            {hostName ? (
                <div className={"play-page-moderator"}>
                    {name === hostName ? (
                        <>
                            {gameStarted ? (
                                <Outlet />
                            ) : (
                                <div>
                                    Beigetretene Spieler:
                                    {connectedPlayers.map((player) => (
                                        <>{player.userName}</>
                                    ))}
                                </div>
                            )}
                            <button onClick={handleStartGame}>Spiel starten</button>
                            <button>Raum schließen</button>
                        </>
                    ) : (
                        `Warte bis der Moderator das Spiel startet...`
                    )}
                </div>
            ) : (
                <PlayerNameOverlay />
            )}
        </>
    );
};
