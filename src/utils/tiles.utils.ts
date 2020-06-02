import { TileState } from "../store/tiles/tiles.types";
import { toNumberArray } from "./array.utils";

export const getTileId = (column: number, row: number) => `${column}:${row}`;

export const getTilePairs = (tiles: TileState) => Object.keys(tiles).map(tileId => toNumberArray(tileId.split(':')))

export const getGridCode = (tiles: TileState) =>
    Object.keys(tiles)
    .reduce((str, tileId) => `${str ? `${str},`: ''}${tileId}-${tiles[tileId]}`, '');

export const getGrid = (gridCode: string): TileState =>
    gridCode
    .split(',')
    .map(tileCode => tileCode.split('-'))
    .reduce((obj, [ tileId, colorId ]) => ({ ...obj, [tileId]: colorId }), {});

type TileColorGetter = string | ((column: number, row: number) => string);
export const getTileState = (rowColumnPairs: number[][], color: TileColorGetter) =>
    rowColumnPairs.reduce<TileState>((prevTiles, [column, row]) => ({
        ...prevTiles,
        [getTileId(column, row)]: typeof color === 'function'
            ? color(column, row)
            : color
    }), {});