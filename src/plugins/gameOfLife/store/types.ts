export enum GameOfLifeActionTypes {
    SET_IS_RUNNING = 'gameOfLife/SET_IS_RUNNING',
    TOGGLE_IS_RUNNING = 'gameOfLife/TOGGLE_IS_RUNNING',
    NEXT_GENERATION = 'gameOfLife/GENERATION',
    SET_GENERATION_TIME = 'gameOfLife/SET_GENERATION_TIME',
}

export interface SetIsRunningAction {
    type: GameOfLifeActionTypes.SET_IS_RUNNING;
    value: boolean;
}

export interface NextGenerationAction {
    type: GameOfLifeActionTypes.NEXT_GENERATION;
    value: number;
}

export interface ToggleIsRunningAction {
    type: GameOfLifeActionTypes.TOGGLE_IS_RUNNING;
}

export interface SetGenerationTimeAction {
    type: GameOfLifeActionTypes.SET_GENERATION_TIME;
    value: number;
}

export type GameOfLifeAction = SetIsRunningAction
    | NextGenerationAction
    | ToggleIsRunningAction
    | SetGenerationTimeAction;

export interface GameOfLifeState {
    isRunning: boolean;
    generationTime: number;
}