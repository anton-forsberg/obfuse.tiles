import { Dictionary } from "./types.utils";
import { toDictionary } from "./array.utils";
import { DEFAULT_IDS } from "../constants/ids.constants";

export const toIdDictionary = <T>(values: T[]): Dictionary<T> =>
    toDictionary(values, i => DEFAULT_IDS[i] ?? i.toString());
