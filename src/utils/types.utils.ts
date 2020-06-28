import { FC } from "react";
import { Effect } from "redux-saga/effects";

export type DictionaryKey = string | number | symbol;

export type Dictionary<T, K extends DictionaryKey = string> = {
    [key in K]?: T;
}

export type StrictDictionary<T, K extends DictionaryKey = string> = {
    [key in K]: T;
}

export interface Plugin {
    name: string;
    id: string;
    component: React.LazyExoticComponent<FC>;
}

export type RecursiveGenerator<T> = Generator<Effect, T, any>;

export type SelectValue = string | number | string[];