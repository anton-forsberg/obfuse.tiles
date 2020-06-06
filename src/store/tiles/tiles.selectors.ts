import { getTileId } from '../../utils/tiles.utils';
import { AppState } from '../reducer';
import { selectSelectedPaletteColor } from '../palettes/palettes.selectors';
import { selectColumnHeights, selectHighlightedColumnColor } from '../columns/columns.selectors';
import { getAutomaticColor } from '../../utils/color.utils';

const slicer = (state: AppState) => state.tiles;

export const selectTiles = (state: AppState) => slicer(state);
export const selectTileColorId = (state: AppState, column: number, row: number) => selectTiles(state)[getTileId(column, row)];
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

export const selectColorCount = (state: AppState, colorId: string) =>
    Object.values(selectTiles(state)).filter(tileColorId => tileColorId === colorId).length
