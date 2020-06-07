import { getTilePosition as tile, getTileIdByPostition } from "./tiles.utils"
import { StrictDictionary } from "./types.utils";
import { TilePosition } from "../store/tiles/tiles.types";

export enum BrushType {
    XS,
    SM,
    MD,
    LG,
    XL,
}

const isBrushType = (value: string | BrushType): value is BrushType => typeof value === "number";
export const getBrushTypes = () => Object.values(BrushType).filter(isBrushType)

type BrushTilesGetter = (c?: number, r?: number) => TilePosition[];

const getBrushTilesXS: BrushTilesGetter = (column = 0, row = 0) => [tile(column, row)];

const getBrushTilesSM: BrushTilesGetter = (column = 0, row = 0) => [
    ...getBrushTilesXS(column, row),
    tile(column, row - 1),
    tile(column - 1, row),
    tile(column + 1, row),
    tile(column, row + 1)
];

const getBrushTilesMD: BrushTilesGetter = (column = 0, row = 0) => [
    ...getBrushTilesSM(column, row),
    tile(column - 1, row - 1),
    tile(column + 1, row - 1),
    tile(column - 1, row + 1),
    tile(column + 1, row + 1),
]

const getBrushTilesLG: BrushTilesGetter = (column = 0, row = 0) => [
    ...getBrushTilesMD(column, row),
    tile(column, row - 2),
    tile(column - 2, row),
    tile(column + 2, row),
    tile(column, row + 2)
];

const getBrushTilesXL: BrushTilesGetter = (column = 0, row = 0) => [
    ...getBrushTilesLG(column, row),
    tile(column - 1, row - 2),
    tile(column - 2, row - 1),
    tile(column + 1, row - 2),
    tile(column + 2, row - 1),
    tile(column - 2, row + 1),
    tile(column - 1, row + 2),
    tile(column + 2, row + 1),
    tile(column + 1, row + 2)
]

type Brushes = StrictDictionary<BrushTilesGetter, BrushType>;
export const brushes: Brushes = {
    [BrushType.XS]: getBrushTilesXS,
    [BrushType.SM]: getBrushTilesSM,
    [BrushType.MD]: getBrushTilesMD,
    [BrushType.LG]: getBrushTilesLG,
    [BrushType.XL]: getBrushTilesXL
}

export const getBrushTileIds = (column: number, row: number, brushType = BrushType.SM) =>
    brushes[brushType](column, row).map(getTileIdByPostition);