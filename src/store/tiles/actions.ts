import { TileAction, TileActionTypes, TileState } from './types';

export const setTiles = (tiles: TileState): TileAction => ({
    type: TileActionTypes.SET_TILES,
    tiles,
});

export const fillTileInit = (row: number, column: number): TileAction => ({
    type: TileActionTypes.FILL_TILE_INIT,
    row,
    column,
});

export const fillTileSuccess = (row: number, column: number, color: string): TileAction => ({
    type: TileActionTypes.FILL_TILE_SUCCESS,
    row,
    column,
    color,
});

export const clearTile = (row: number, column: number): TileAction => ({
    type: TileActionTypes.CLEAR_TILE,
    row,
    column,
})