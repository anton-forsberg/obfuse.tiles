import { AppState } from "../reducer";
import { COLUMN_HIGHLIGHT_COLORS } from "./columns.constants";

export const slicer = (state: AppState) => state.columns;

export const selectHighlightedColumnSets = (state: AppState) => slicer(state).highlightedColumnSets;
export const selectColumnHeights = (state: AppState) => slicer(state).heights;
export const selectHighlightedColumnColor = (state: AppState, column: number): string | undefined => {
    const highlightedColumnSets = selectHighlightedColumnSets(state);
    const highlightedIndex = highlightedColumnSets.findIndex(sets => sets.includes(column));
    return COLUMN_HIGHLIGHT_COLORS[highlightedIndex];
}