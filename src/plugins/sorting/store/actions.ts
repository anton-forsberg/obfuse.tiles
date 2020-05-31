import { SortingAction, SortingActionTypes, SortingAlgorithmType } from "./types";

export const setIsRunning = (value: boolean): SortingAction => ({
    type: SortingActionTypes.SET_IS_RUNNING,
    value,
});

export const toggleIsRunning = (algorithmType?: SortingAlgorithmType): SortingAction => ({
    type: SortingActionTypes.TOGGLE_IS_RUNNING,
    algorithmType,
});

export const prepareSort = (): SortingAction => ({
    type: SortingActionTypes.PREPARE_SORT,
});

export const setSelectedAlgorithmType = (value?: SortingAlgorithmType): SortingAction => ({
    type: SortingActionTypes.SET_SELECTED_ALGORITHM_TYPE,
    value,
})

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