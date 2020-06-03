import { getTileId } from '../../utils/tiles.utils';
import { AppState } from '../reducer';
import { selectSelectedPaletteColor, selectSelectedPalette } from '../palettes/palettes.selectors';
import { Dictionary } from '../../utils/types.utils';
import { TileColorCount } from './tiles.types';
import { selectColumnHeights, selectHighlightedColumnColor } from '../columns/columns.selectors';
import { getAutomaticColor } from '../../utils/color.utils';
import tinycolor from 'tinycolor2';

const slicer = (state: AppState) => state.tiles;

export const selectTiles = (state: AppState) => slicer(state);
export const selectTileColorId = (state: AppState, column: number, row: number) => slicer(state)[getTileId(column, row)];
export const selectTileColor = (state: AppState, column: number, row: number) => {
    const colorId = selectTileColorId(state, column, row);
    if (!colorId) return;
    return selectSelectedPaletteColor(state, colorId);
}

const selectColumnTileColor = (state: AppState, column: number, row: number, columnHeight: number) => {
    const columnColor = selectHighlightedColumnColor(state, column);
    if (columnColor || row >= columnHeight) return columnColor;
    return getAutomaticColor(column, row);
}

export const selectTileColorToDraw = (state: AppState, column: number, row: number) => {
    const columnHeights = selectColumnHeights(state);
    const colorId = columnHeights.length
        ? selectColumnTileColor(state, column, row, columnHeights[column])
        : selectTileColorId(state, column, row);
    if (!colorId) return;

    return selectSelectedPaletteColor(state, colorId) ?? colorId;
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