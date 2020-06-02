import { AppState } from "../../../store/reducer";

const slicer = (state: AppState) => state.plugins.gameOfLife;

export const selectIsRunning = (state: AppState) => slicer(state).isRunning;
export const selectGenerationTime = (state: AppState) => slicer(state).generationTime;