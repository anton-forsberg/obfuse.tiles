import { ColumnsAction, ColumnsActionTypes } from "./types";

export const setColumnHeights = (heights: number[], highlightedColumnSets?: number[][]): ColumnsAction => ({
    type: ColumnsActionTypes.SET_COLUMNS_HEIGHTS,
    heights,
    highlightedColumnSets,
});

export const setHighlightedColumnSets = (columnSets: number[][]): ColumnsAction => ({
    type: ColumnsActionTypes.SET_HIGHLIGHTED_COLUMN_SETS,
    columnSets,
});

export const fillColumnTiles = (): ColumnsAction => ({
    type: ColumnsActionTypes.FILL_COLUMN_TILES,
});