import { SortingState, SortingAction, SortingActionTypes, SortingAlgorithmType } from "./types"
import produce from "immer"

const getInitialState = (): SortingState => ({
    isRunning: false,
    highlightedColumns: [],
    sortingValues: [],
    selectedAlgorithmType: SortingAlgorithmType.QuickSort,
})

export const sortingReducer = (state = getInitialState(), action: SortingAction) => {
    switch(action.type) {
        case SortingActionTypes.SET_IS_RUNNING:
            return produce(state, draft => { draft.isRunning = action.value });
        case SortingActionTypes.SET_HIGHLIGHTED_COLUMNS:
            return produce(state, draft => { draft.highlightedColumns = action.columns });
        case SortingActionTypes.SET_SORTING_VALUES:
            return produce(state, draft => { draft.sortingValues = action.values });
        case SortingActionTypes.SET_SELECTED_ALGORITHM_TYPE:
            return produce(state, draft => { draft.selectedAlgorithmType = action.value });
        default:
            return state;
    }
}