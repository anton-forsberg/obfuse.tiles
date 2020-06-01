import { SortingState, SortingAction, SortingActionTypes, SortingAlgorithmType } from "./types"
import produce from "immer"

const getInitialState = (): SortingState => ({
    isRunning: false,
    selectedAlgorithmType: SortingAlgorithmType.QuickSort,
})

export const sortingReducer = (state = getInitialState(), action: SortingAction) => {
    switch(action.type) {
        case SortingActionTypes.SET_IS_RUNNING:
            return produce(state, draft => { draft.isRunning = action.value });
        case SortingActionTypes.SET_SELECTED_ALGORITHM_TYPE:
            return produce(state, draft => { draft.selectedAlgorithmType = action.value });
        default:
            return state;
    }
}