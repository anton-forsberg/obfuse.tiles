export interface ColumnsState {
    highlightedColumnSets: number[][];
    heights: number[];
}

export enum ColumnsActionTypes {
    SET_HIGHLIGHTED_COLUMN_SETS = "SET_HIGHLIGHTED_COLUMN_SETS",
    SET_COLUMNS_HEIGHTS = "SET_COLUMNS_HEIGHTS",
    FILL_COLUMN_TILES = "FILL_COLUMN_TILES"
}

export interface SetHighlightedColumnsAction {
    type: ColumnsActionTypes.SET_HIGHLIGHTED_COLUMN_SETS;
    columnSets: number[][];
}

export interface SetColumnsAction {
    type: ColumnsActionTypes.SET_COLUMNS_HEIGHTS;
    heights: number[];
    highlightedColumnSets?: number[][]
}

export interface FillColumnTilesAction {
    type: ColumnsActionTypes.FILL_COLUMN_TILES;
}

export type ColumnsAction = SetHighlightedColumnsAction
    | SetColumnsAction
    | FillColumnTilesAction;