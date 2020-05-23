import { AppState } from './../index';
import { selectTileColorCount } from '../tiles/selectors';
import { Color } from './types';

const slicer = (state: AppState) => state.colors;

export const selectColors = (state: AppState): Color[] => Object.keys(slicer(state)).map(id => ({ id, value: selectColor(state, id)! }));
export const selectColor = (state: AppState, colorId: string = '') => slicer(state)[colorId];
export const selectColorCount = (state: AppState) => {
    const tileColorCount = selectTileColorCount(state);
    const colors = slicer(state);
    return Object.keys(colors).map(colorId => ({
        color: colors[colorId],
        count: tileColorCount[colorId] || 0,
    })).filter(({ count }) => count > 0);
}