import { SelectionAction as Action, SelectionActionTypes as ActionTypes } from "./selections.types";

export const setSelectedColorId = (value: string): Action => ({
    type: ActionTypes.SET_SELECTED_COLOR_ID,
    value
});

export const setSelectedPaletteId = (value: string): Action => ({
    type: ActionTypes.SET_SELECTED_PALETTE_ID,
    value
});

export const setSelectedPluginId = (value?: string): Action => ({
    type: ActionTypes.SET_SELECTED_PLUGIN_ID,
    value
});

export const setSelectedGridColumns = (value: number): Action => ({
    type: ActionTypes.SET_SELECTED_GRID_COLUMNS,
    value
});

export const setSelectedGridRows = (value: number): Action => ({
    type: ActionTypes.SET_SELECTED_GRID_ROWS,
    value
});

export const setSelectedGridSize = (columns: number, rows: number): Action => ({
    type: ActionTypes.SET_SELECTED_GRID_SIZE,
    columns,
    rows,
});

export const setSelectedTileScale = (value: number): Action => ({
    type: ActionTypes.SET_SELECTED_TILE_SCALE,
    value
});