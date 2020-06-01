export interface SortingAlgorithm {
    name: string;
    type: SortingAlgorithmType;
}

export enum SortingAlgorithmType {
    QuickSort,
    MergeSort,
}

export interface SortingState {
    isRunning: boolean;
    selectedAlgorithmType?: SortingAlgorithmType;
}

export enum SortingActionTypes {
    TOGGLE_IS_RUNNING = "sorting/TOGGLE_IS_RUNNING",
    SET_IS_RUNNING = "sorting/SET_IS_RUNNING",
    PREPARE_SORT = "sorting/PREPARE_SORT",
    QUICK_SORT = "sorting/QUICK_SORT",
    MERGE_SORT = "sorting/MERGE_SORT",
    SET_SELECTED_ALGORITHM_TYPE = "sorting/SET_SELECTED_ALGORITHM_TYPE",
    FINISHED_SORT = "sorting/FINISHED_SORT",
}

export interface ToggleIsRunningAction {
    type: SortingActionTypes.TOGGLE_IS_RUNNING;
    algorithmType?: SortingAlgorithmType;
}

export interface SetIsRunningAction {
    type: SortingActionTypes.SET_IS_RUNNING;
    value: boolean;
}

export interface SetSelectedAlgorithmTypeAction {
    type: SortingActionTypes.SET_SELECTED_ALGORITHM_TYPE;
    value?: SortingAlgorithmType;
}

export interface PrepareSortAction {
    type: SortingActionTypes.PREPARE_SORT;
}

export interface QuickSortAction {
    type: SortingActionTypes.QUICK_SORT;
}

export interface MergeSortAction {
    type: SortingActionTypes.MERGE_SORT;
}

export type SortingAction = ToggleIsRunningAction
    | SetIsRunningAction
    | SetSelectedAlgorithmTypeAction
    | PrepareSortAction
    | QuickSortAction
    | MergeSortAction;
