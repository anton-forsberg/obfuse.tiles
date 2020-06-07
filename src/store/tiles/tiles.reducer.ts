import { TileState, TileAction, TileActionTypes as ActionTypes } from './tiles.types';
import { produce } from 'immer';

const getInitialState = (): TileState => ({});

export const tilesReducer = (state = getInitialState(), action: TileAction) => {
    switch(action.type) {
        case ActionTypes.SET_TILES_SUCCESS:
            return produce(state, draft => { action.tileIds.forEach(tileId => draft[tileId] = action.color); });
        case ActionTypes.SET_ALL_TILES:
            return produce(state, () => action.tiles);
        default:
            return state;
    }
}