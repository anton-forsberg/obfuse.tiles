import { SortingAction, SortingActionTypes, SortingAlgorithm } from "./types";

export const setIsRunning = (value: boolean): SortingAction => ({
    type: SortingActionTypes.SET_IS_RUNNING,
    value,
});

export const toggleIsRunning = (algorithm: SortingAlgorithm): SortingAction => ({
    type: SortingActionTypes.TOGGLE_IS_RUNNING,
    algorithm,
});

export const prepareSort = (): SortingAction => ({
    type: SortingActionTypes.PREPARE_SORT,
});

export const setSortingValues = (values: number[]): SortingAction => ({
    type: SortingActionTypes.SET_SORTING_VALUES,
    values,
});

export const setHighlightedColumns = (columns: number[]): SortingAction => ({
    type: SortingActionTypes.SET_HIGHLIGHTED_COLUMNS,
    columns,
});

export const quickSort = (): SortingAction => ({
    type: SortingActionTypes.QUICK_SORT,
});


export const mergeSort = (): SortingAction => ({
    type: SortingActionTypes.MERGE_SORT,
});