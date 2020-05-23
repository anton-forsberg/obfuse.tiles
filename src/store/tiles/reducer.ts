import { getTileId } from './utils';
import { TileState, TileAction, TileActionTypes } from './types';
import { produce } from 'immer';

const getInitialState = (): TileState => ({});

export const tilesReducer = (state = getInitialState(), action: TileAction) => {
    switch(action.type) {
        case TileActionTypes.SET_TILE:
            return produce(state, draft => {
                const tileId = getTileId(action.row, action.column);
                action.value ? draft[tileId] = action.value : delete draft[tileId];
            });
        default:
            return state;
    }
}