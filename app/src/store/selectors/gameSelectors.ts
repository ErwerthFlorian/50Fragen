import { createSelector } from "@reduxjs/toolkit";
import { getState } from "./baseSelectors";
import { getUserName } from "./authSelectors.ts";

const getGameState = createSelector([getState], (state) => state.gameModel);
export const getRoomID = createSelector([getGameState], (gameState) => gameState.roomId);
export const getIsConnected = createSelector([getGameState], (gameState) => gameState.connected);
export const getIsJoining = createSelector([getGameState], (gameState) => gameState.isJoining);
export const getConnectedPlayers = createSelector([getGameState], (gameState) => {
    return gameState.connectedPlayers;
});
export const getBuzzer = createSelector([getGameState], (state) => state.buzzer);
export const getHostName = createSelector([getGameState], (state) => state.hostName);
export const getGameStarted = createSelector([getGameState], (state) => state.gameStarted);
export const getIsModerator = createSelector([getHostName, getUserName], (hostname, username) => hostname === username);
