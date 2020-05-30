import { TileState } from "../store/tiles/types";
import { getTileId } from "../store/tiles/utils";

type TileColorGetter = string | ((row: number, column: number) => string);

export const getTileState = (rowColumnPairs: number[][], color: TileColorGetter) =>
    rowColumnPairs.reduce<TileState>((prevTiles, [row, column]) => ({
        ...prevTiles,
        [getTileId(row, column)]: typeof color === 'function'
            ? color(row, column)
            : color
    }), {});