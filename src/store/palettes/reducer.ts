import { dusk, fadedRainBow, rainBow, PaletteState, flowers } from "./types"

const getInitialState = (): PaletteState => ({
    '1': dusk(),
    '2': fadedRainBow(),
    '3': rainBow(),
    '4': flowers(),
});

export const paletteReducer = (state = getInitialState()) => {
    return state;
}