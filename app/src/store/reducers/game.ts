import { createAction, createReducer } from "@reduxjs/toolkit";

type Player = { userName: string };
type Buzzer = { socketId: string } | undefined;
export const setRoomID = createAction<string>("game/set_room_id");
export const setConnected = createAction<boolean>("game/connected");
export const setIsJoining = createAction<boolean>("game/joining");
export const setConnectedPlayers = createAction<Player[]>("game/add_connected_player");
export const setHostName = createAction<string>("game/set_host_name");
export const setActiveBuzzer = createAction<Buzzer>("game/buzzer");
export const resetBuzzer = createAction<undefined>("game/buzzer_reset");
export const setStartGame = createAction<boolean>("game/set_start_game");
export const setQuestionAnswerIndex = createAction<number>("game/set_question_anser_index");

export type GameState = {
    gameStarted: boolean;
    buzzer: Buzzer;
    roomId: string;
    connected: boolean;
    isJoining: boolean;
    connectedPlayers: Player[];
    hostName: string;
    questionAnserIndex: number;
};
const initialGameState: GameState = {
    questionAnserIndex: 0,
    gameStarted: false,
    buzzer: undefined,
    roomId: "",
    connected: false,
    isJoining: true,
    connectedPlayers: [],
    hostName: "",
};

const gameReducer = createReducer<GameState>(initialGameState, (builder) => {
    builder
        .addCase(setRoomID, (state, action) => {
            if (state) {
                state.roomId = action.payload;
            }
        })
        .addCase(setQuestionAnswerIndex, (state, action) => {
            if (state) {
                state.questionAnserIndex = action.payload;
            }
        })
        .addCase(setStartGame, (state, action) => {
            if (state) {
                state.gameStarted = action.payload;
            }
        })
        .addCase(setHostName, (state, action) => {
            if (state) {
                state.hostName = action.payload;
            }
        })
        .addCase(setActiveBuzzer, (state, action) => {
            if (!state.buzzer) {
                state.buzzer = action.payload;
            }
        })
        .addCase(resetBuzzer, (state, action) => {
            state.buzzer = action.payload;
        })
        .addCase(setConnected, (state, action) => {
            if (state) {
                state.connected = action.payload;
            }
        })
        .addCase(setIsJoining, (state, action) => {
            if (state) {
                state.isJoining = action.payload;
            }
        })
        .addCase(setConnectedPlayers, (state, action) => {
            if (state && state.connectedPlayers.length < 4) {
                state.connectedPlayers = action.payload;
            }
        });
});

export default gameReducer;
