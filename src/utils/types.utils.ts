import { FC } from "react";
import { Effect } from "redux-saga/effects";

export interface Dictionary<T> {
    [key: string]: T;
}

export interface Plugin {
    name: string;
    id: string;
    component: React.LazyExoticComponent<FC>;
}

export type RecursiveGenerator<T> = Generator<Effect, T, any>;