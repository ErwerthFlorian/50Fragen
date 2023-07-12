import {createSelector} from "@reduxjs/toolkit";
import {AppState} from "../index";

export const getState = createSelector([(state: AppState) => state], (state) => state);
