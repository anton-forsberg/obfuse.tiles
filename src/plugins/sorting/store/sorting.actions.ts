import { SortingAction as Action, SortingActionTypes as ActionTypes, SortingAlgorithmType } from "./sorting.types";

export const setIsRunning = (value: boolean): Action => ({
    type: ActionTypes.SET_IS_RUNNING,
    value,
});

export const toggleIsRunning = (algorithmType?: SortingAlgorithmType): Action => ({
    type: ActionTypes.TOGGLE_IS_RUNNING,
    algorithmType,
});

export const prepareSort = (): Action => ({
    type: ActionTypes.PREPARE_SORT,
});

export const setSelectedAlgorithmType = (value?: SortingAlgorithmType): Action => ({
    type: ActionTypes.SET_SELECTED_ALGORITHM_TYPE,
    value,
});

export const quickSort = (): Action => ({
    type: ActionTypes.QUICK_SORT,
});

export const mergeSort = (): Action => ({
    type: ActionTypes.MERGE_SORT,
});