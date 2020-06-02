import { SortingState, SortingAction, SortingActionTypes as ActionTypes, SortingAlgorithmType } from "./sorting.types"
import produce from "immer"

const getInitialState = (): SortingState => ({
    isRunning: false,
    selectedAlgorithmType: SortingAlgorithmType.QuickSort,
})

export const sortingReducer = (state = getInitialState(), action: SortingAction) => {
    switch(action.type) {
        case ActionTypes.SET_IS_RUNNING:
            return produce(state, draft => { draft.isRunning = action.value });
        case ActionTypes.SET_SELECTED_ALGORITHM_TYPE:
            return produce(state, draft => { draft.selectedAlgorithmType = action.value });
        default:
            return state;
    }
}