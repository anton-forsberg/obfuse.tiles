import { getTileId } from './utils';
import { TileState, TileAction, TileActionTypes } from './types';
import { produce } from 'immer';

const getInitialState = (): TileState => ({});

export const tilesReducer = (state = getInitialState(), action: TileAction) => {
    switch(action.type) {
        case TileActionTypes.FILL_TILE_SUCCESS:
            return produce(state, draft => {
                draft[getTileId(action.column, action.row)] = action.color;
            });
        case TileActionTypes.CLEAR_TILE:
            return produce(state, draft => {
                delete draft[getTileId(action.column, action.row)];
            });
        case TileActionTypes.SET_TILES:
            return produce(state, () => action.tiles);
        default:
            return state;
    }
}