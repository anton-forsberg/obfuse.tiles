import { DEFAULT_TILE_SIZE } from './types';
import { AppState } from './../';
import { selectSelectedPaletteColor } from '../palettes/selectors';
import { getArrayOfLength } from '../../utils/array';

const slicer = (state: AppState) => state.selections;

export const selectSelectedColorId = (state: AppState) => slicer(state).colorId;

export const selectSelectedColor = (state: AppState) => {
    const selectedColorId = selectSelectedColorId(state);
    if (!selectedColorId) return;
    return selectSelectedPaletteColor(state, selectedColorId);
}
export const selectSelectedTileScale = (state: AppState) => slicer(state).scale;
export const selectSelectedTileSize = (state: AppState) => selectSelectedTileScale(state) * DEFAULT_TILE_SIZE;
export const selectSelectedGridRows = (state: AppState) => slicer(state).rows;
export const selectGridRows = (state: AppState) => getArrayOfLength(selectSelectedGridRows(state));
export const selectSelectedGridColumns = (state: AppState) => slicer(state).columns;
export const selectGridColumns = (state: AppState) => getArrayOfLength(selectSelectedGridColumns(state));
export const selectSelectedPaletteId = (state: AppState) => slicer(state).paletteId;
export const selectSelectedPluginId = (state: AppState) => slicer(state).pluginId;