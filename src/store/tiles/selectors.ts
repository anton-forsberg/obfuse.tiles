import { getTileId } from './utils';
import { AppState } from './../';

const slicer = (state: AppState) => state.tiles;

export const selectTile = (state: AppState, row: number, column: number) => slicer(state)[getTileId(row, column)]
export const selectTileColorCount = (state: AppState) => Object.values(slicer(state))
    .reduce<{ [colorId: string]: number }>((colors, colorId) => ({
        ...colors,
        [colorId!]: (colors[colorId!] ?? 0) + 1,
    }), {});