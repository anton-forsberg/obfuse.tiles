import { TileState } from "./types";

export const getTileId = (row: number, column: number) => `${row}:${column}`;

export const getGridCode = (tiles: TileState) =>
    Object.keys(tiles)
    .reduce((str, tileId) => `${str ? `${str},`: ''}${tileId}-${tiles[tileId]}`, '');

export const getGrid = (gridCode: string): TileState =>
    gridCode
    .split(',')
    .map(tileCode => tileCode.split('-'))
    .reduce((obj, [ tileId, colorId ]) => ({ ...obj, [tileId]: colorId }), {});