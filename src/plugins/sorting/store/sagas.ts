import { all, fork, put, takeLatest, select, delay } from 'redux-saga/effects'
import { SortingActionTypes as ActionTypes, ToggleIsRunningAction, SortingAlgorithm } from './types';
import { selectIsRunning, selectSortingValues, selectHighlightedColumns } from './selectors';
import * as actions from './actions';
import { selectGridRows, selectGridColumns } from '../../../store/selections/selectors';
import { AppState } from '../../../store';
import { getTileState } from '../../../utils/tiles';
import { setTiles } from '../../../store/tiles/actions';
import { getPositionInPulse } from '../../../utils/number';
import { swapElements } from '../../../utils/array';

const HIGHLIGHT_COLOR = '#00ffb8';
const SECONDARY_HIGHLIGHT_COLOR = '#2cb9fd';
const SORT_DELAY_TIME = 100;

const drawTiles = function*() {
    const state: AppState = yield select();
    const sortingValues = selectSortingValues(state);
    const highlightedColumns = selectHighlightedColumns(state);
    const rows = selectGridRows(state);
    const columns = selectGridColumns(state);

    const getTileColor = (row: number, column: number) => {
        const index = highlightedColumns.indexOf(column);
        if (index > 1) return SECONDARY_HIGHLIGHT_COLOR;
        if (index > -1) return HIGHLIGHT_COLOR;
        return String(getPositionInPulse(row, 8) + 1);
    }

    const tileState = getTileState(rows
        .flatMap(row => columns.map(column => [row, column]))
        .filter(([row, column]) => row >= rows.length - sortingValues[column]), getTileColor);
    
    yield put(setTiles(tileState))
}

const prepareSort = function*() {
    const state: AppState = yield select();
    const rows = selectGridRows(state);
    const columns = selectGridColumns(state);
    const unsortedArray = columns.map(() => Math.round(Math.random() * rows.length))

    yield put(actions.setSortingValues(unsortedArray));
}

const quickSort = function*() {
    let array = selectSortingValues(yield select());
    const stack: number[] = [0, array.length];

    while(stack.length) {
        const end = stack.pop() ?? 0;
        const start = stack.pop() ?? 0;

        if (end - start < 2) continue;

        let pivotIndex = Math.floor(start + ((end - start) / 2));
        let low = start;
        let high = end - 2;
        let pivot = array[pivotIndex];
        array = swapElements(array, pivotIndex, end - 1);

        while(low < high) {
            if (array[low] < pivot) low++;
            else if (array[high] >= pivot) high--;
            else {
                array = swapElements(array, low, high);
                yield put(actions.setHighlightedColumns([low, high, pivotIndex]));
                yield delay(SORT_DELAY_TIME);
                yield put(actions.setSortingValues(array));
                yield delay(SORT_DELAY_TIME);
            }
        }

        if (array[high] < pivot) high++;
        array = swapElements(array, end - 1, high);
        yield put(actions.setHighlightedColumns([end - 1, high, pivotIndex]));
        yield delay(SORT_DELAY_TIME);
        yield put(actions.setSortingValues(array))
        yield delay(SORT_DELAY_TIME);

        stack.push(high + 1);
        stack.push(end);

        stack.push(start);
        stack.push(high);
    }

    yield put(actions.setHighlightedColumns([]));
    yield put(actions.setSortingValues(array));
    yield put(actions.setIsRunning(false));
}

const mergeSort = function*() {

}

const toggleGame = function*({ algorithm }: ToggleIsRunningAction) {
    const newIsRunning = !selectIsRunning(yield select());
    yield put(actions.setIsRunning(newIsRunning));
    if (!newIsRunning) return;

    yield put(actions.prepareSort());
    yield delay(1000);

    switch(algorithm) {
        case SortingAlgorithm.QuickSort:
            return yield put(actions.quickSort());
        case SortingAlgorithm.MergeSort:
            return yield put(actions.mergeSort())
    }
}

const watchSortingActions = function* () {
    yield takeLatest(ActionTypes.TOGGLE_IS_RUNNING, toggleGame);
    yield takeLatest(ActionTypes.PREPARE_SORT, prepareSort);
    yield takeLatest(ActionTypes.QUICK_SORT, quickSort);
    yield takeLatest(ActionTypes.MERGE_SORT, mergeSort);
    yield takeLatest(ActionTypes.SET_HIGHLIGHTED_COLUMNS, drawTiles);
    yield takeLatest(ActionTypes.SET_SORTING_VALUES, drawTiles);
}

export const sortingSaga = function* () {
    yield all([fork(watchSortingActions)]);
}