import { all, fork, put, takeLatest, select } from 'redux-saga/effects'
import { getTileState, getTilePositions } from "../../utils/tiles.utils";
import { setHighlightedColumnSets, setColumnHeights } from "./columns.actions";
import { setTiles } from "../tiles/tiles.actions";
import { selectGridRows, selectGridColumns } from "../selections/selections.selectors";
import { selectColumnHeights } from "./columns.selectors";
import { AppState } from "../reducer";
import { ColumnsActionTypes as ActionTypes } from './columns.types';
import { getAutomaticColor } from '../../utils/color.utils';

const fillColumnTiles = function*() {
    const state: AppState = yield select();
    const columnHeights = selectColumnHeights(state);
    const rows = selectGridRows(state);
    const columns = selectGridColumns(state);

    const tileState = getTileState(getTilePositions(columns, rows)
        .filter(({ column, row }) => row < columnHeights[column]), getAutomaticColor);
    
    yield put(setColumnHeights([]));
    yield put(setHighlightedColumnSets([]));
    yield put(setTiles(tileState));
}

const watchColumnActions = function* () {
    yield takeLatest(ActionTypes.FILL_COLUMN_TILES, fillColumnTiles);
}

export const columnsSaga = function* () {
    yield all([fork(watchColumnActions)]);
}