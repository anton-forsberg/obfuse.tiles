import { Dictionary } from "./types.utils";
import { toDictionary } from "./array.utils";

export const DEFAULT_IDS = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
];

export const toIdDictionary = <T>(values: T[]): Dictionary<T> =>
    toDictionary(values, i => DEFAULT_IDS[i] ?? i.toString());
