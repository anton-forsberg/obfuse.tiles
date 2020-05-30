import { TileState } from "../../../store/tiles/types";
import { getTileId } from "../../../store/tiles/utils";
import { getTileState } from "../../../utils/tiles";

export const getTileNeighbours = (row: number, column: number, tiles: TileState) => {
    const prevRow = row - 1;
    const nextRow = row + 1;
    const prevCol = column - 1;
    const nextCol = column + 1;

    const n = [prevRow, column];
    const ne = [prevRow, nextCol];
    const e = [row, nextCol];
    const se = [nextRow, nextCol];
    const s = [nextRow, column];
    const sw = [nextRow, prevCol];
    const w = [row, prevCol];
    const nw = [prevRow, prevCol];
    
    return [n, ne, e, se, s, sw, w, nw].reduce<number[][]>((neighbours, [r, c]) =>
        tiles[getTileId(r, c)] ? [ ...neighbours, [r, c] ] : neighbours, []);
}

export const shouldSurvive = (row: number, column: number, tiles: TileState) => {
    const neighbours = getTileNeighbours(row, column, tiles);
    const tileId = getTileId(row, column);
    const isAlive = Boolean(tiles[tileId]);

    if (isAlive && neighbours.length < 2) return false; // Death by underpopulation
    if (isAlive && neighbours.length > 3) return false; // Death by overpopulation
    if (!isAlive && neighbours.length === 3) return true; // Birth by reproduction

    return isAlive;
}

export const getGenerationTiles = (rows: number[], columns: number[], tiles: TileState, colorId: string) =>
    getTileState(rows.flatMap(row => columns.map(column => [row, column]))
        .filter(([row, column]) => shouldSurvive(row, column, tiles)), colorId)