import { TileAction, TileActionTypes, TileState } from './types';

export const setTiles = (tiles: TileState): TileAction => ({
    type: TileActionTypes.SET_TILES,
    tiles,
});

export const fillTileInit = (column: number, row: number): TileAction => ({
    type: TileActionTypes.FILL_TILE_INIT,
    column,
    row,
});

export const fillTileSuccess = (column: number, row: number, color: string): TileAction => ({
    type: TileActionTypes.FILL_TILE_SUCCESS,
    row,
    column,
    color,
});

export const clearTile = (column: number, row: number): TileAction => ({
    type: TileActionTypes.CLEAR_TILE,
    row,
    column,
});