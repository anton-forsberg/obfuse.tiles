import { FC } from "react";

export interface Dictionary<T> {
    [key: string]: T;
}

export interface Plugin {
    name: string;
    id: string;
    component: React.LazyExoticComponent<FC>;
}

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
    values.reduce((dictionary, value, i) =>({
        ...dictionary,
        [DEFAULT_IDS[i] ?? i.toString()]: value,
    }), {});