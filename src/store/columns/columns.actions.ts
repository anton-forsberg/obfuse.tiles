import { ColumnsAction as Action, ColumnsActionTypes as ActionTypes } from "./columns.types";

export const setColumnHeights = (heights: number[], highlightedColumnSets?: number[][]): Action => ({
    type: ActionTypes.SET_COLUMNS_HEIGHTS,
    heights,
    highlightedColumnSets,
});

export const setHighlightedColumnSets = (columnSets: number[][]): Action => ({
    type: ActionTypes.SET_HIGHLIGHTED_COLUMN_SETS,
    columnSets,
});

export const fillColumnTiles = (): Action => ({
    type: ActionTypes.FILL_COLUMN_TILES,
});