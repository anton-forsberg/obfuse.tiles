export enum SortingAlgorithm {
    QuickSort,
    MergeSort,
}

export interface SortingState {
    isRunning: boolean;
    highlightedColumns: number[]
    sortingValues: number[]
}

export enum SortingActionTypes {
    TOGGLE_IS_RUNNING = "sorting/TOGGLE_IS_RUNNING",
    SET_IS_RUNNING = "sorting/SET_IS_RUNNING",
    PREPARE_SORT = "sorting/PREPARE_SORT",
    QUICK_SORT = "sorting/QUICK_SORT",
    MERGE_SORT = "sorting/MERGE_SORT",
    SET_HIGHLIGHTED_COLUMNS = "sorting/SET_HIGHLIGHTED_COLUMNS",
    SET_SORTING_VALUES = "sorting/SET_SORTING_VALUES",
    QUICK_SORT_ITERATION = "sorting/QUICK_SORT_ITERATION",
}

export interface ToggleIsRunningAction {
    type: SortingActionTypes.TOGGLE_IS_RUNNING;
    algorithm: SortingAlgorithm;
}

export interface SetIsRunningAction {
    type: SortingActionTypes.SET_IS_RUNNING;
    value: boolean;
}

export interface PrepareSortAction {
    type: SortingActionTypes.PREPARE_SORT;
}

export interface SetHighlightedColumnsAction {
    type: SortingActionTypes.SET_HIGHLIGHTED_COLUMNS;
    columns: number[];
}

export interface SetSortingValuesAction {
    type: SortingActionTypes.SET_SORTING_VALUES;
    values: number[];
}

export interface QuickSortAction {
    type: SortingActionTypes.QUICK_SORT;
}

export interface MergeSortAction {
    type: SortingActionTypes.MERGE_SORT;
}

export type SortingAction = ToggleIsRunningAction
    | SetIsRunningAction
    | SetHighlightedColumnsAction
    | SetSortingValuesAction
    | PrepareSortAction
    | QuickSortAction
    | MergeSortAction;
