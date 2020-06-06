import { TileState } from "../../../store/tiles/tiles.types";
import { getTileId, getTileState, getTilePositions, getTilePosition } from "../../../utils/tiles.utils";
import { UNDERPOPULATION_NEIGHBOURS, OVERPOPULATION_NEIGHBOURS, REPRODUCTION_NEIGHBOURS } from "../store/gameOfLife.constants";
import { DEFAULT_IDS } from "../../../constants/ids.constants";

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

    if (isAlive && neighbours.length <= UNDERPOPULATION_NEIGHBOURS) return false; // Death by underpopulation
    if (isAlive && neighbours.length >= OVERPOPULATION_NEIGHBOURS) return false; // Death by overpopulation
    if (!isAlive && neighbours.length === REPRODUCTION_NEIGHBOURS) return true; // Birth by reproduction

    return isAlive;
}

export const getGenerationTiles = (columns: number[], rows: number[], tiles: TileState, colorId: string) =>
    getTileState(getTilePositions(columns, rows)
        .filter(({ column, row }) => shouldSurvive(column, row, tiles)), colorId);

export const getTilesOffset = (tiles: TileState, columnOffset: number, rowOffset: number) =>
    getTileState(
        Object.keys(tiles)
        .map(tileId => getTilePosition(tileId))
        .map(({ column, row }) => ({ column: column + columnOffset, row: row + rowOffset })),
    DEFAULT_IDS[0]);