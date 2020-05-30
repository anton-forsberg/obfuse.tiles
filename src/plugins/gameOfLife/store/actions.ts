import { GameOfLifeActionTypes, GameOfLifeAction } from "./types";

export const toggleIsRunning = (): GameOfLifeAction => ({
    type: GameOfLifeActionTypes.TOGGLE_IS_RUNNING,
});

export const setIsRunning = (value: boolean): GameOfLifeAction => ({
    type: GameOfLifeActionTypes.SET_IS_RUNNING,
    value,
});

export const setGenerationTime = (value: number): GameOfLifeAction => ({
    type: GameOfLifeActionTypes.SET_GENERATION_TIME,
    value,
});

export const nextGeneration = (value = 0): GameOfLifeAction => ({
    type: GameOfLifeActionTypes.NEXT_GENERATION,
    value,
});