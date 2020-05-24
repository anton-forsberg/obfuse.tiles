import { TileAction, TileActionTypes } from './types';

export const fillTileRequest = (row: number, column: number): TileAction => ({
    type: TileActionTypes.FILL_TILE_REQUEST,
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