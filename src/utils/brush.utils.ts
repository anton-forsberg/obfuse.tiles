import { getTileId } from "./tiles.utils"
import { StrictDictionary } from "./types.utils";

export enum BrushSize {
    SM,
    MD,
    LG,
    XL,
}

type BrushTilesGetter = (c: number, r: number) => number[][];

const getBrushTilesSM: BrushTilesGetter = (column, row) => [[column, row]]

const getBrushTilesMD: BrushTilesGetter = (column, row) => [
    ...getBrushTilesSM(column, row),
    [column, row - 1],
    [column - 1, row],
    [column + 1, row],
    [column, row + 1]
];

const getBrushTilesLG: BrushTilesGetter = (column, row) => [
    ...getBrushTilesMD(column, row),
    [column, row - 2],
    [column - 1, row - 1],
    [column + 1, row - 1],
    [column - 2, row],
    [column + 2, row],
    [column - 1, row + 1],
    [column + 1, row + 1],
    [column, row + 2]
];

const getBrushTilesXL: BrushTilesGetter = (column, row) => [
    ...getBrushTilesLG(column, row),
    [column - 1, row - 2],
    [column - 2, row - 1],
    [column + 1, row - 2],
    [column + 2, row - 1],
    [column - 2, row + 1],
    [column - 1, row + 2],
    [column + 2, row + 1],
    [column + 1, row + 2]
]

type BrushTiles = StrictDictionary<BrushTilesGetter, BrushSize>;
const brushTiles: BrushTiles = {
    [BrushSize.SM]: getBrushTilesSM,
    [BrushSize.MD]: getBrushTilesMD,
    [BrushSize.LG]: getBrushTilesLG,
    [BrushSize.XL]: getBrushTilesXL
}

export const getBrushTiles = (column: number, row: number, brushSize = BrushSize.SM) =>
    brushTiles[brushSize](column, row).map(([c, r]) => getTileId(c, r));