import { TileAction, TileActionTypes } from './types';

export const setTile = (row: number, column: number, value?: string): TileAction => ({
    type: TileActionTypes.SET_TILE,
    row,
    column,
    value,
});