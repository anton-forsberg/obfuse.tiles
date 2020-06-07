import { produce } from 'immer';
import { DEFAULT_TILE_SCALE, DEFAULT_GRID_ROWS, DEFAULT_GRID_COLUMNS } from './selections.constants';
import { SelectionState, SelectionAction, SelectionActionTypes as ActionTypes } from './selections.types';
import { getDefaultPalettes } from '../palettes/palettes.constants';

const getInitialState = (): SelectionState => {
    const palettes = getDefaultPalettes();
    const [ paletteId ] = Object.keys(palettes);
    const palette = palettes[paletteId] ?? {};
    const [ colorId ] = Object.keys(palette);

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
        case ActionTypes.SET_SELECTED_COLOR_ID:
            return produce(state, draft => { draft.colorId = action.value });
        case ActionTypes.SET_SELECTED_PALETTE_ID:
            return produce(state, draft => { draft.paletteId = action.value });
        case ActionTypes.SET_SELECTED_TILE_SCALE:
            return produce(state, draft => { draft.scale = action.value });
        case ActionTypes.SET_SELECTED_GRID_ROWS:
            return produce(state, draft => { draft.rows = action.value });
        case ActionTypes.SET_SELECTED_GRID_COLUMNS:
            return produce(state, draft => { draft.columns = action.value });
        case ActionTypes.SET_SELECTED_PLUGIN_ID:
            return produce(state, draft => { draft.pluginId = action.value });
        case ActionTypes.SET_SELECTED_GRID_SIZE:
            return produce(state, draft => ({
                ...draft,
                rows: action.rows,
                columns: action.columns,
                scale: action.scale ?? draft.scale,
            }));
        default:
            return state;
    }
};