import { toIdDictionary } from "../../utils/ids.utils";

export const PALETTE_COLOR_SIZE = 20;
export const PALETTE_COLOR_SIZE_MOBILE = 30;

export const getDefaultPalettes = () => toIdDictionary([
    dusk(),
    fadedRainBow(),
    rainBow(),
    flowers(),
]);

const dusk = () => toIdDictionary([
    '#003f5c',
    '#2f4b7c',
    '#665191',
    '#a05195',
    '#d45087',
    '#f95d6a',
    '#ff7c43',
    '#ffa600',
]);

const fadedRainBow = () => toIdDictionary([
    '#ffadad',
    '#ffd6a5',
    '#fdffb6',
    '#caffbf',
    '#9bf6ff',
    '#a0c4ff',
    '#bdb2ff',
    '#ffc6ff',
]);

const rainBow = () => toIdDictionary([
    '#f94144',
    '#f3722c',
    '#f8961e',
    '#f9c74f',
    '#90be6d',
    '#43aa8b',
    '#577590',
    '#5d5282',
]);

const flowers = () => toIdDictionary([
    '#f9d5e5',
    '#eeac99',
    '#e06377',
    '#c83349',
    '#5b9aa0',
    '#d6d4e0',
    '#b8a9c9',
    '#622569',
]);
