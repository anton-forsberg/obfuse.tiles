import { TileState } from "../../../store/tiles/types";
import { getTileId, getTileState } from "../../../store/tiles/utils";
import { toNumberArray } from "../../../utils/array";

export const getTileNeighbours = (column: number, row: number, tiles: TileState) => {
    const prevRow = row - 1;
    const nextRow = row + 1;
    const prevCol = column - 1;
    const nextCol = column + 1;

    const n = [column, prevRow];
    const ne = [nextCol, prevRow];
    const e = [nextCol, row];
    const se = [nextCol, nextRow];
    const s = [column, nextRow];
    const sw = [prevCol, nextRow];
    const w = [prevCol, row];
    const nw = [prevCol, prevRow];
    
    return [n, ne, e, se, s, sw, w, nw].reduce<number[][]>((neighbours, [c, r]) =>
        tiles[getTileId(c, r)] ? [ ...neighbours, [c, r] ] : neighbours, []);
}

export const shouldSurvive = (column: number, row: number, tiles: TileState) => {
    const neighbours = getTileNeighbours(column, row, tiles);
    const tileId = getTileId(column, row);
    const isAlive = Boolean(tiles[tileId]);

    if (isAlive && neighbours.length < 2) return false; // Death by underpopulation
    if (isAlive && neighbours.length > 3) return false; // Death by overpopulation
    if (!isAlive && neighbours.length === 3) return true; // Birth by reproduction

    return isAlive;
}

export const getGenerationTiles = (rows: number[], columns: number[], tiles: TileState, colorId: string) =>
    getTileState(rows.flatMap(row => columns.map(column => [column, row]))
        .filter(([column, row]) => shouldSurvive(column, row, tiles)), colorId);

export const getTilesOffset = (tiles: TileState, columnOffset: number, rowOffset: number) => getTileState(
        Object.keys(tiles)
        .map(tileId => toNumberArray(tileId.split(':')))
        .map(([column, row]) => [column + columnOffset, row + rowOffset]),
    '1');