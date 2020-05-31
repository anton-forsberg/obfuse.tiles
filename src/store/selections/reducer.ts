import { produce } from 'immer';
import { SelectionState, SelectionAction, SelectionActionTypes, DEFAULT_TILE_SCALE, DEFAULT_GRID_COLUMNS, DEFAULT_GRID_ROWS } from './types';
import { getDefaultPalettes } from '../palettes/types';

const getInitialState = (): SelectionState => {
    const palettes = getDefaultPalettes();
    const [ paletteId ] = Object.keys(palettes);
    const [ colorId ] = Object.keys(palettes[paletteId]);

    return {
        paletteId,
        colorId,
        scale: DEFAULT_TILE_SCALE,
        rows: DEFAULT_GRID_ROWS,
        columns: DEFAULT_GRID_COLUMNS,
    };
}

export const selectionReducer = (state = getInitialState(), action: SelectionAction) => {
    switch(action.type) {
        case SelectionActionTypes.SET_SELECTED_COLOR_ID:
            return produce(state, draft => { draft.colorId = action.value });
        case SelectionActionTypes.SET_SELECTED_PALETTE_ID:
            return produce(state, draft => { draft.paletteId = action.value });
        case SelectionActionTypes.SET_SELECTED_TILE_SCALE:
            return produce(state, draft => { draft.scale = action.value });
        case SelectionActionTypes.SET_SELECTED_GRID_ROWS:
            return produce(state, draft => { draft.rows = action.value });
        case SelectionActionTypes.SET_SELECTED_GRID_COLUMNS:
            return produce(state, draft => { draft.columns = action.value });
        case SelectionActionTypes.SET_SELECTED_PLUGIN_ID:
            return produce(state, draft => { draft.pluginId = action.value });
        default:
            return state;
    }
};