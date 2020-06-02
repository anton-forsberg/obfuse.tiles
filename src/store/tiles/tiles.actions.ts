import { TileAction as Action, TileActionTypes as ActionTypes, TileState } from './tiles.types';

export const setTiles = (tiles: TileState): Action => ({
    type: ActionTypes.SET_TILES,
    tiles,
});

export const fillTileInit = (column: number, row: number): Action => ({
    type: ActionTypes.FILL_TILE_INIT,
    column,
    row,
});

export const fillTileSuccess = (column: number, row: number, color: string): Action => ({
    type: ActionTypes.FILL_TILE_SUCCESS,
    row,
    column,
    color,
});

export const clearTile = (column: number, row: number): Action => ({
    type: ActionTypes.CLEAR_TILE,
    row,
    column,
});