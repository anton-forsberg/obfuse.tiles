import { getTileId } from './utils';
import { TileState, TileAction, TileActionTypes } from './types';
import { produce } from 'immer';

const getInitialState = (): TileState => ({});

export const tilesReducer = (state = getInitialState(), action: TileAction) => {
    switch(action.type) {
        case TileActionTypes.FILL_TILE_SUCCESS:
            return produce(state, draft => {
                draft[getTileId(action.row, action.column)] = action.color;
            });
        case TileActionTypes.CLEAR_TILE:
            return produce(state, draft => {
                delete draft[getTileId(action.row, action.column)];
            });
        default:
            return state;
    }
}