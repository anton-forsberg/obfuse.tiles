import { TileAction as Action, TileActionTypes as ActionTypes, TileState, SetTileOperation } from './tiles.types';

export const setAllTiles = (tiles: TileState = {}): Action => ({
    type: ActionTypes.SET_ALL_TILES,
    tiles,
});

export const setTilesInit = (column: number, row: number, operation: SetTileOperation): Action => ({
    type: ActionTypes.SET_TILES_INIT,
    column,
    row,
    operation,
});

export const setTilesSuccess = (tileIds: string[], color?: string): Action => ({
    type: ActionTypes.SET_TILES_SUCCESS,
    tileIds,
    color,
});
