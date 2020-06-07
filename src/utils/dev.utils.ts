import { Dictionary } from "./types.utils";

const isDev = process.env.NODE_ENV === 'development'

const ITERATION_RESET_TIME = 500;
const iterations: Dictionary<number> = {};
const timers: Dictionary<number> = {};

export const logIterationCount = (type: string, extraInfo = '') => {
    if (!iterations[type]) iterations[type] = 0;
    if (timers[type]) clearTimeout(timers[type])
    timers[type] = setTimeout(() => iterations[type] = 0, ITERATION_RESET_TIME);
    console.log(type, ++iterations[type]!, extraInfo);
}

export const devOnly = <T>(callback: () => T): T | undefined => {
    if (!isDev) return;
    return callback();
}