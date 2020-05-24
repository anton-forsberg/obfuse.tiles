import { getTileId } from './utils';
import { AppState } from './../';
import { selectSelectedPaletteColor, selectSelectedPalette } from '../palettes/selectors';
import { Dictionary } from '../../utils/types';
import { TileColorCount } from './types';

const slicer = (state: AppState) => state.tiles;

export const selectTiles = (state: AppState) => slicer(state);
export const selectTileColorId = (state: AppState, row: number, column: number) => slicer(state)[getTileId(row, column)];
export const selectTileColor = (state: AppState, row: number, column: number) => {
    const colorId = selectTileColorId(state, row, column);
    if (!colorId) return;
    return selectSelectedPaletteColor(state, colorId);
}

export const selectTileColorCount = (state: AppState): TileColorCount[] => {
    const palette = selectSelectedPalette(state);
    if (!palette) return [];

    const dictionary = Object.values(slicer(state))
    .reduce<Dictionary<number>>((colors, colorId) => {
        const color = palette[colorId];
        return color ? {
            ...colors,
            [color]: (colors[color] ?? 0) + 1,
        } : colors;
    }, {});

    return Object.values(palette).map(color => ({
        color,
        count: dictionary[color] ?? 0,
    }))
}