import { TileState, TilePosition } from "../store/tiles/tiles.types";
import { toNumberArray } from "./array.utils";

export const getTileId = (column: number, row: number) => `${column}:${row}`;

export const getTilePositions = (columns: number[], rows: number[]): TilePosition[] => rows.flatMap(row => columns.map(column => ({ column, row })));

export const getTilePosition = (tileId: string): TilePosition => {
    const [ column, row ] = toNumberArray(tileId.split(':'));
    return { column, row };
}

export const getGridCode = (tiles: TileState) =>
    Object.keys(tiles)
    .reduce((str, tileId) => `${str ? `${str},`: ''}${tileId}=${tiles[tileId]}`, '');

export const getGrid = (gridCode: string): TileState =>
    gridCode
    .split(',')
    .map(tileCode => tileCode.split('='))
    .reduce((obj, [ tileId, colorId ]) => ({ ...obj, [tileId]: colorId }), {});

type TileColorGetter = (column: number, row: number) => string;

const isTileColorGetter = (color: string | TileColorGetter): color is TileColorGetter => typeof color === 'function';

export const getTileState = (tilePositions: TilePosition[], color: string | TileColorGetter) =>
    tilePositions.reduce<TileState>((prevTiles, { column, row }) => ({
        ...prevTiles,
        [getTileId(column, row)]: isTileColorGetter(color)
            ? color(column, row)
            : color
    }), {});