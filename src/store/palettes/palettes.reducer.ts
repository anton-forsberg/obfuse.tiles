import { getDefaultPalettes } from "./palettes.constants";

export const paletteReducer = (state = getDefaultPalettes()) => {
    return state;
}