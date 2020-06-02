import { getTileId } from '../../utils/tiles.utils';
import { TileState, TileAction, TileActionTypes as ActionTypes } from './tiles.types';
import { produce } from 'immer';

const getInitialState = (): TileState => ({});

export const tilesReducer = (state = getInitialState(), action: TileAction) => {
    switch(action.type) {
        case ActionTypes.FILL_TILE_SUCCESS:
            return produce(state, draft => { draft[getTileId(action.column, action.row)] = action.color; });
        case ActionTypes.CLEAR_TILE:
            return produce(state, draft => { delete draft[getTileId(action.column, action.row)]; });
        case ActionTypes.SET_TILES:
            return produce(state, () => action.tiles);
        default:
            return state;
    }
}