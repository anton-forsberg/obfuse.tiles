import { getTileId } from '../../utils/tiles.utils';
import { TileState, TileAction, TileActionTypes as ActionTypes } from './tiles.types';
import { produce } from 'immer';

const getInitialState = (): TileState => ({});

export const tilesReducer = (state = getInitialState(), action: TileAction) => {
    switch(action.type) {
        case ActionTypes.FILL_TILE_SUCCESS:
            return produce(state, draft => { draft[getTileId(action.column, action.row)] = action.color; });
        case ActionTypes.FILL_TILES_SUCCESS:
            return produce(state, draft => { action.tileIds.forEach(tileId => draft[tileId] = action.color); });
        case ActionTypes.CLEAR_TILE:
            return produce(state, draft => { draft[getTileId(action.column, action.row)] = undefined; });
        case ActionTypes.SET_TILES:
            return produce(state, () => action.tiles);
        default:
            return state;
    }
}