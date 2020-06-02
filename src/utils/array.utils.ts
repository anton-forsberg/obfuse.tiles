import { Dictionary } from "./types.utils";

export const getArrayOfLength = (length: number) => [...Array(length)].map((e, i) => i);

export const swapElements = <T>(array: T[], index1: number, index2: number) => {
    const results = [...array];
    const item1 = array[index1];
    results[index1] = array[index2];
    results[index2] = item1;
    return results;
}

export const replaceElement = <T>(array: T[], index: number, item: T) => {
    const results = [...array];
    results.splice(index, 1, item);
    return results;
}

export const toNumberArray = (array: string[]) => array.map(e => Number(e));

type DictionaryKeyGetter<T> = (index: number, value: T) => string;
export const toDictionary = <T>(values: T[], getKey: DictionaryKeyGetter<T>): Dictionary<T> => 
    values.reduce((dictionary, value, i) =>({
        ...dictionary,
        [getKey(i, value)]: value,
    }), {});
