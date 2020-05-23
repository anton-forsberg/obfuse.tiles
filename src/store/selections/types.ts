export interface SelectionState {
    colorId?: string;
    paletteId?: string;
    scale: number;
    rows: number;
    columns: number;
}

export const DEFAULT_TILE_SIZE = 100;
export const DEFAULT_TILE_SCALE = .5;
export const DEFAULT_GRID_COLUMNS = 40;
export const DEFAULT_GRID_ROWS = DEFAULT_GRID_COLUMNS * 0.6;

export enum SelectionActionTypes {
    SET_SELECTED_COLOR_ID = 'SET_SELECTED_COLOR_ID',
    SET_SELECTED_PALETTE_ID = 'SET_SELECTED_PALETTE_ID',
    SET_SELECTED_TILE_SCALE = 'SET_SELECTED_TILE_SCALE',
    SET_SELECTED_GRID_ROWS = 'SET_SELECTED_GRID_ROWS',
    SET_SELECTED_GRID_COLUMNS = 'SET_SELECTED_GRID_COLUMNS',
}

interface SetSelectedColorIdAction {
    type: SelectionActionTypes.SET_SELECTED_COLOR_ID;
    value: string;
}

interface SetSelectedPaletteIdAction {
    type: SelectionActionTypes.SET_SELECTED_PALETTE_ID;
    value: string;
}

interface SetSelectedTileScaleAction {
    type: SelectionActionTypes.SET_SELECTED_TILE_SCALE;
    value: number;
}

interface SetSelectedTileRowsAction {
    type: SelectionActionTypes.SET_SELECTED_GRID_ROWS;
    value: number;
}

interface SetSelectedTileColumnsAction {
    type: SelectionActionTypes.SET_SELECTED_GRID_COLUMNS;
    value: number;
}

export type SelectionAction =
    SetSelectedColorIdAction |
    SetSelectedTileScaleAction |
    SetSelectedTileRowsAction |
    SetSelectedTileColumnsAction |
    SetSelectedPaletteIdAction;