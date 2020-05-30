import { GameOfLifeAction, GameOfLifeState, GameOfLifeActionTypes } from "./types";
import produce from "immer";

const getInitialState = (): GameOfLifeState => ({
    isRunning: false,
    generationTime: 500,
});

export const gameOfLifeReducer = (state = getInitialState(), action: GameOfLifeAction): GameOfLifeState => {
    switch(action.type) {
        case GameOfLifeActionTypes.SET_IS_RUNNING:
            return produce(state, draft => { draft.isRunning = action.value });
        case GameOfLifeActionTypes.SET_GENERATION_TIME:
            return produce(state, draft => { draft.generationTime = action.value });
        default:
            return state;
    }
}