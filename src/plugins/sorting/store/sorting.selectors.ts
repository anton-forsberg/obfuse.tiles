import { AppState } from "../../../store/reducer";

export const slicer = (state: AppState) => state.plugins.sorting;

export const selectIsRunning = (state: AppState) => slicer(state).isRunning;
export const selectSelectedAlgorithmType = (state: AppState) => slicer(state).selectedAlgorithmType;