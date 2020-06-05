import { getArrayOfLength } from "../utils/array.utils";

export const DEFAULT_IDS_COUNT = 8;
export const DEFAULT_IDS = getArrayOfLength(DEFAULT_IDS_COUNT).map(i => (i + 1).toString());