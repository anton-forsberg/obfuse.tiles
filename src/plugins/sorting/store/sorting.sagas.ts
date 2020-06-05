import { all, fork, put, takeLatest, select, delay, call } from 'redux-saga/effects'
import { SortingActionTypes as ActionTypes, ToggleIsRunningAction, SortingAlgorithmType } from './sorting.types';
import { selectIsRunning } from './sorting.selectors';
import * as actions from './sorting.actions';
import { selectGridRows, selectGridColumns } from '../../../store/selections/selections.selectors';
import { AppState } from '../../../store/reducer';
import { setColumnHeights, fillColumnTiles, setHighlightedColumnSets } from '../../../store/columns/columns.actions';
import { selectColumnHeights } from '../../../store/columns/columns.selectors';
import { QUICK_SORT_DELAY_TIME, MERGE_SORT_DELAY_TIME } from './sorting.constants';
import { RecursiveGenerator } from '../../../utils/types.utils';

const prepareSort = function*() {
    const state: AppState = yield select();
    const rows = selectGridRows(state);
    const columns = selectGridColumns(state);
    const unsortedArray = columns.map(() => Math.round(Math.random() * rows.length))

    yield put(setColumnHeights(unsortedArray));
}

const initiateQuickSort = function*() {
    const array = selectColumnHeights(yield select());
    yield call(quickSort, array.slice());
    yield put(fillColumnTiles());
    yield put(actions.setIsRunning(false));
}

const quickSort = function* (array: number[], start = 0, end = array.length - 1): RecursiveGenerator<number[]> {
    if (!array.length || !selectIsRunning(yield select())) return array;

    const partitionIndex = yield call(partition, array, start, end);

    if(start < partitionIndex - 1) yield call(quickSort, array, start, partitionIndex - 1);
    if(partitionIndex < end) yield call(quickSort, array, partitionIndex, end);

    return array;
}

const partition = function* (array: number[], start: number, end: number) {
    const middle = Math.floor((start + end) / 2);
    const pivot = array[middle];
    let i = start;
    let j = end;

    while(i <= j) {
        while(array[i] < pivot) {
            if (!selectIsRunning(yield select())) return i;
            yield call(animateQuickSortColumns, [i, j, middle]);
            i++;
        }
        while(array[j] > pivot) {
            if (!selectIsRunning(yield select())) return i;
            yield call(animateQuickSortColumns, [i, j, middle]);
            j--;
        }

        if(i <= j) {
            if (!selectIsRunning(yield select())) return i;
            [array[i], array[j]] = [array[j], array[i]];
            yield call(animateQuickSortColumns, [i, j, middle], array);
            i++;
            j--;
        }
    }

    return i;
}

const animateQuickSortColumns = function*(highlightedColumns: number[], columnHeights?: number[]) {
    yield put(setHighlightedColumnSets(highlightedColumns.map(h => [h])));
    yield delay(QUICK_SORT_DELAY_TIME);

    if (columnHeights) {
        yield put(setColumnHeights(columnHeights.slice()));
        yield delay(QUICK_SORT_DELAY_TIME);
    }
}

const initiateMergeSort = function*() {
    const array = selectColumnHeights(yield select());
    yield call(mergeSort, array.slice());
    yield put(fillColumnTiles());
    yield put(actions.setIsRunning(false));
}

const mergeSort = function* (array: number[], helper: number[] = [], start = 0, end = array.length - 1): RecursiveGenerator<number[]> {
    if (start >= end) return array;

    const middle = Math.floor(start + (end - start) / 2);

    yield call(mergeSort, array, helper, start, middle);
    yield call(mergeSort, array, helper, middle + 1, end);
    yield call(merge, array, helper, start, middle, end);

    return array;
}

const merge = function* (array: number[], helper: number[], start: number, middle: number, end: number) {
    for (let i = start; i <= end; i++) {
        helper[i] = array[i];
    }

    let i = start;
    let j = middle + 1;
    let k = start;

    while (i <= middle && j <= end) {
        if (helper[i] < helper[j]) array[k] = helper[i++];
        else array[k] = helper[j++];

        if (!selectIsRunning(yield select())) return;
        yield put(setColumnHeights(array.slice(), [[k], [start, end]]));
        yield delay(MERGE_SORT_DELAY_TIME);
        k++;
    }

    while (i <= middle) {
        array[k] = helper[i];
        if (!selectIsRunning(yield select())) return;
        yield put(setColumnHeights(array.slice(), [[k], [start, end]]));
        yield delay(MERGE_SORT_DELAY_TIME);
        k++;
        i++;
    }

}

const toggleSort = function*({ algorithmType }: ToggleIsRunningAction) {
    const newIsRunning = !selectIsRunning(yield select());
    yield put(actions.setIsRunning(newIsRunning));
    if (!newIsRunning) return;
    yield put(actions.prepareSort());
    yield delay(1000);

    switch(algorithmType) {
        case SortingAlgorithmType.QuickSort:
            return yield put(actions.quickSort());
        case SortingAlgorithmType.MergeSort:
            return yield put(actions.mergeSort())
    }
}

const watchSortingActions = function* () {
    yield takeLatest(ActionTypes.TOGGLE_IS_RUNNING, toggleSort);
    yield takeLatest(ActionTypes.PREPARE_SORT, prepareSort);
    yield takeLatest(ActionTypes.QUICK_SORT, initiateQuickSort);
    yield takeLatest(ActionTypes.MERGE_SORT, initiateMergeSort);
}

export const sortingSaga = function* () {
    yield all([fork(watchSortingActions)]);
}