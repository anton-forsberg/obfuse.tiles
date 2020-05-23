import { SelectionAction, SelectionActionTypes } from "./types";

export const setSelectedColorId = (value: string): SelectionAction => ({
    type: SelectionActionTypes.SET_SELECTED_COLOR_ID,
    value
});

export const setSelectedPaletteId = (value: string): SelectionAction => ({
    type: SelectionActionTypes.SET_SELECTED_PALETTE_ID,
    value
});

export const setSelectedGridColumns = (value: number): SelectionAction => ({
    type: SelectionActionTypes.SET_SELECTED_GRID_COLUMNS,
    value
});

export const setSelectedGridRows = (value: number): SelectionAction => ({
    type: SelectionActionTypes.SET_SELECTED_GRID_ROWS,
    value
});

export const setSelectedTileScale = (value: number): SelectionAction => ({
    type: SelectionActionTypes.SET_SELECTED_TILE_SCALE,
    value
});