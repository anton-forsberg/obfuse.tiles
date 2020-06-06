import { getTileId } from "./tiles.utils"

export const getBrushTiles = (column: number, row: number) => [
    [column, row - 1],
    [column - 1, row],
    [column, row],
    [column + 1, row],
    [column, row + 1]
].map(([c, r]) => getTileId(c, r));