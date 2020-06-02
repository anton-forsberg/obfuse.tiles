import { AppState } from "../reducer";
import { selectSelectedPaletteId } from "../selections/selections.selectors";

export const slicer = (state: AppState) => state.palettes;

export const selectPaletteIds = (state: AppState) => Object.keys(slicer(state));
export const selectPalette = (state: AppState, paletteId: string) => slicer(state)[paletteId];
export const selectPaletteColors = (state: AppState, paletteId: string) => Object.values(selectPalette(state, paletteId));
export const selectPaletteColorCount = (state: AppState, paletteId: string) => selectPaletteColors(state, paletteId).length;
export const selectPaletteColorIds = (state: AppState, paletteId: string) => Object.keys(selectPalette(state, paletteId));
export const selectPaletteColor = (state: AppState, paletteId: string, colorId: string) => selectPalette(state, paletteId)[colorId];

export const selectSelectedPalette = (state: AppState) => {
    const paletteId = selectSelectedPaletteId(state);
    if (!paletteId) return;
    return selectPalette(state, paletteId);
}

export const selectSelectedPaletteColors = (state: AppState) => {
    const paletteId = selectSelectedPaletteId(state);
    if (!paletteId) return [];
    return selectPaletteColors(state, paletteId);
}
export const selectSelectedPaletteColorCount = (state: AppState) => {
    const paletteId = selectSelectedPaletteId(state);
    if (!paletteId) return 0;
    return selectPaletteColorCount(state, paletteId);
}
export const selectSelectedPaletteColorIds = (state: AppState) => {
    const paletteId = selectSelectedPaletteId(state);
    if (!paletteId) return [];
    return selectPaletteColorIds(state, paletteId);
}
export const selectSelectedPaletteColor = (state: AppState, colorId: string) => {
    const paletteId = selectSelectedPaletteId(state);
    if (!paletteId) return;
    return selectPaletteColor(state, paletteId, colorId);
}