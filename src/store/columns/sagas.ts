import { all, fork, put, takeLatest, select } from 'redux-saga/effects'
import { getTileState } from "../tiles/utils";
import { setHighlightedColumnSets, setColumnHeights } from "./actions";
import { setTiles } from "../tiles/actions";
import { selectGridRows, selectGridColumns } from "../selections/selectors";
import { selectColumnHeights } from "./selectors";
import { AppState } from "..";
import { ColumnsActionTypes } from './types';
import { getAutomaticColor } from '../../utils/color';

const fillColumnTiles = function*() {
    const state: AppState = yield select();
    const columnHeights = selectColumnHeights(state);
    const rows = selectGridRows(state);
    const columns = selectGridColumns(state);

    const tileState = getTileState(rows
        .flatMap(row => columns.map(column => [column, row]))
        .filter(([column, row]) => row < columnHeights[column]), getAutomaticColor);
    
    yield put(setColumnHeights([]));
    yield put(setHighlightedColumnSets([]));
    yield put(setTiles(tileState));
}

const watchColumnActions = function* () {
    yield takeLatest(ColumnsActionTypes.FILL_COLUMN_TILES, fillColumnTiles);
}

export const columnsSaga = function* () {
    yield all([fork(watchColumnActions)]);
}