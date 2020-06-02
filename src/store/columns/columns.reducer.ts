import { ColumnsState, ColumnsAction, ColumnsActionTypes as ActionTypes } from "./columns.types"
import produce from "immer"

const getInitialState = (): ColumnsState => ({
    highlightedColumnSets: [],
    heights: [],
})

export const columnsReducer = (state = getInitialState(), action: ColumnsAction) => {
    switch(action.type) {
        case ActionTypes.SET_HIGHLIGHTED_COLUMN_SETS:
            return produce(state, draft => { draft.highlightedColumnSets = action.columnSets });
        case ActionTypes.SET_COLUMNS_HEIGHTS:
            return produce(state, draft => ({
                heights: action.heights,
                highlightedColumnSets: action.highlightedColumnSets ?? draft.highlightedColumnSets
            }));
        default:
            return state;
    }
}