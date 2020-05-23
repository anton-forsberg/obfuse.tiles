import { ColorState } from './types';

const getInitialState = (): ColorState => ({
    '1': '#003f5c',
    '2': '#2f4b7c',
    '3': '#665191',
    '4': '#a05195',
    '5': '#d45087',
    '6': '#f95d6a',
    '7': '#ff7c43',
    '8': '#ffa600',
});
export const colorReducer = (state = getInitialState()) => {
    return state;
};