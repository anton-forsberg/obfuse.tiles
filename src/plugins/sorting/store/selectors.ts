import { AppState } from "../../../store";

export const slicer = (state: AppState) => state.plugins.sorting;

export const selectIsRunning = (state: AppState) => slicer(state).isRunning;
export const selectHighlightedColumns = (state: AppState) => slicer(state).highlightedColumns;
export const selectSortingValues = (state: AppState) => slicer(state).sortingValues;