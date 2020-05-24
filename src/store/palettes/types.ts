import { Dictionary } from "../../utils/types";

export type PaletteState = Dictionary<PaletteColors>;
export type PaletteColors = Dictionary<string>;

export const PALETTE_COLOR_SIZE = 20;

export const getDefaultPalettes = (): PaletteState => ({
    '1': dusk(),
    '2': fadedRainBow(),
    '3': rainBow(),
    '4': flowers(),
});

const dusk = (): PaletteColors => ({
    '1': '#003f5c',
    '2': '#2f4b7c',
    '3': '#665191',
    '4': '#a05195',
    '5': '#d45087',
    '6': '#f95d6a',
    '7': '#ff7c43',
    '8': '#ffa600',
});

const fadedRainBow = (): PaletteColors => ({
    '1': '#ffadad',
    '2': '#ffd6a5',
    '3': '#fdffb6',
    '4': '#caffbf',
    '5': '#9bf6ff',
    '6': '#a0c4ff',
    '7': '#bdb2ff',
    '8': '#ffc6ff',
});

const rainBow = (): PaletteColors => ({
    '1': '#f94144',
    '2': '#f3722c',
    '3': '#f8961e',
    '4': '#f9c74f',
    '5': '#90be6d',
    '6': '#43aa8b',
    '7': '#577590',
    '8': '#5d5282',
});

const flowers = (): PaletteColors => ({
    '1': '#f9d5e5',
    '2': '#eeac99',
    '3': '#e06377',
    '4': '#c83349',
    '5': '#5b9aa0',
    '6': '#d6d4e0',
    '7': '#b8a9c9',
    '8': '#622569',
});