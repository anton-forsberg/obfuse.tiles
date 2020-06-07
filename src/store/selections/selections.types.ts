import { BrushType } from "../../utils/brush.utils";

export interface SelectionState {
    colorId?: string;
    paletteId?: string;
    scale: number;
    rows: number;
    columns: number;
    pluginId?: string;
    brush: BrushType;
}

export enum SelectionActionTypes {
    SET_SELECTED_COLOR_ID = 'SET_SELECTED_COLOR_ID',
    SET_SELECTED_PALETTE_ID = 'SET_SELECTED_PALETTE_ID',
    SET_SELECTED_TILE_SCALE = 'SET_SELECTED_TILE_SCALE',
    SET_SELECTED_GRID_ROWS = 'SET_SELECTED_GRID_ROWS',
    SET_SELECTED_GRID_COLUMNS = 'SET_SELECTED_GRID_COLUMNS',
    SET_SELECTED_PLUGIN_ID = 'SET_SELECTED_PLUGIN_ID',
    SET_SELECTED_GRID_SIZE = 'SET_SELECTED_GRID_SIZE',
    SET_SELECTED_BRUSH = 'SET_SELECTED_BRUSH',
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

interface SetSelectedPluginIdAction {
    type: SelectionActionTypes.SET_SELECTED_PLUGIN_ID;
    value?: string;
}

interface SetSelectedGridSizeAction {
    type: SelectionActionTypes.SET_SELECTED_GRID_SIZE,
    columns: number;
    rows: number;
    scale?: number;
}

interface SetSelectedBrushAction {
    type: SelectionActionTypes.SET_SELECTED_BRUSH,
    value: BrushType;
}

export type SelectionAction = SetSelectedColorIdAction
    | SetSelectedTileScaleAction
    | SetSelectedTileRowsAction
    | SetSelectedTileColumnsAction
    | SetSelectedPaletteIdAction
    | SetSelectedPluginIdAction
    | SetSelectedGridSizeAction
    | SetSelectedBrushAction;