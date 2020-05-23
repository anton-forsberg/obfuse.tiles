import { DEFAULT_TILE_SIZE } from './types';
import { AppState } from './../';
import { selectColor } from '../colors/selectors';

const slicer = (state: AppState) => state.selections;

export const selectSelectedColorId = (state: AppState) => slicer(state).colorId;

export const selectSelectedColor = (state: AppState) => {
    const selectedColorId = selectSelectedColorId(state);
    if (!selectedColorId) return;
    return selectColor(state, selectedColorId);
}
export const selectSelectedTileScale = (state: AppState) => slicer(state).scale;
export const selectSelectedTileSize = (state: AppState) => selectSelectedTileScale(state) * DEFAULT_TILE_SIZE;
export const selectSelectedGridRows = (state: AppState) => slicer(state).rows;
export const selectSelectedGridColumns = (state: AppState) => slicer(state).columns;