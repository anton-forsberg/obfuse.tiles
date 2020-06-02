import { FC } from "react";

export interface Dictionary<T> {
    [key: string]: T;
}

export interface Plugin {
    name: string;
    id: string;
    component: React.LazyExoticComponent<FC>;
}
