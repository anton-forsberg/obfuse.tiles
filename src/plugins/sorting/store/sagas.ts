import { all, fork, put, takeLatest, select, delay } from 'redux-saga/effects'
import { SortingActionTypes as ActionTypes, ToggleIsRunningAction, SortingAlgorithmType } from './types';
import { selectIsRunning, selectSortingValues, selectHighlightedColumns } from './selectors';
import * as actions from './actions';
import { selectGridRows, selectGridColumns } from '../../../store/selections/selectors';
import { AppState } from '../../../store';
import { getTileState } from '../../../utils/tiles';
import { setTiles } from '../../../store/tiles/actions';
import { getPositionInPulse } from '../../../utils/number';
import { swapElements, replaceElement } from '../../../utils/array';

const HIGHLIGHT_COLOR = '#00ffb8';
const SECONDARY_HIGHLIGHT_COLOR = '#2cb9fd';
const QUICK_SORT_DELAY_TIME = 200;
const MERGE_SORT_DELAY_TIME = 20;

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
    const stack = [[0, array.length]];

    while(stack.length) {
        const [start, end] = stack.pop() ?? [];
        if (end - start < 2) continue;

        let pivotIndex = Math.floor(start + ((end - start) / 2));
        let low = start;
        let high = end - 2;
        let pivot = array[pivotIndex];
        if (array[pivotIndex] !== array[end - 1]) {
            array = swapElements(array, pivotIndex, end - 1);
            yield put(actions.setHighlightedColumns([pivotIndex, end - 1]));
            yield delay(QUICK_SORT_DELAY_TIME);
            yield put(actions.setSortingValues(array));
            yield delay(QUICK_SORT_DELAY_TIME);
        }

        while(low < high) {
            if (array[low] < pivot) low++;
            else if (array[high] >= pivot) high--;
            else {
                array = swapElements(array, low, high);
                yield put(actions.setHighlightedColumns([low, high, pivotIndex]));
                yield delay(QUICK_SORT_DELAY_TIME);
                yield put(actions.setSortingValues(array));
                yield delay(QUICK_SORT_DELAY_TIME);
            }
        }

        if (array[high] < pivot) high++;
        low = end - 1;
        if (array[high] !== array[low]) {
            array = swapElements(array, low, high);
            yield put(actions.setHighlightedColumns([low, high, pivotIndex]));
            yield delay(QUICK_SORT_DELAY_TIME);
            yield put(actions.setSortingValues(array))
            yield delay(QUICK_SORT_DELAY_TIME);
        }

        stack.push([high + 1, end]);
        stack.push([start, high]);
    }

    yield put(actions.setHighlightedColumns([]));
    yield put(actions.setSortingValues(array));
    yield put(actions.setIsRunning(false));
}

const mergeSort = function*() {
    const sortingValues = selectSortingValues(yield select());
    let array = [...sortingValues];
    const n = array.length;
                 
    for (let size = 1; size <= n - 1; size = 2 * size) 
    { 
        for (let start = 0; start < n - 1; start += 2 * size) 
        { 
            let mid = Math.min(start + size - 1, n-1); 
            let end = Math.min(start + 2 * size - 1, n-1); 
        
            let leftSize = mid - start + 1; 
            let rightSize = end - mid; 
        
            let leftArray = []; 
            let rightArray = []; 
        
            for (let i = 0; i < leftSize; i++) 
                leftArray[i] = array[start + i]; 
            for (let j = 0; j < rightSize; j++) 
                rightArray[j] = array[mid + 1 + j]; 
        
            let leftIndex = 0; 
            let rightIndex = 0; 
            let k = start; 
            while (leftIndex < leftSize && rightIndex < rightSize) 
            {
                if (leftArray[leftIndex] <= rightArray[rightIndex]) 
                {
                    array = replaceElement(array, k, leftArray[leftIndex]);
                    yield put(actions.setHighlightedColumns([k, start + leftIndex]));
                    leftIndex++;
                }
                else
                {
                    array = replaceElement(array, k, rightArray[rightIndex]);
                    yield put(actions.setHighlightedColumns([k, mid + 1 + rightIndex]));
                    rightIndex++;
                } 
                k++;

                yield delay(MERGE_SORT_DELAY_TIME);
                yield put(actions.setSortingValues(array));
                yield delay(MERGE_SORT_DELAY_TIME);
            } 
        
            while (leftIndex < leftSize) 
            { 
                array = replaceElement(array, k, leftArray[leftIndex]);
                leftIndex++; 
                k++;
                
                yield put(actions.setHighlightedColumns([k, start + leftIndex]));
                yield delay(MERGE_SORT_DELAY_TIME);
                yield put(actions.setSortingValues(array));
                yield delay(MERGE_SORT_DELAY_TIME);
            } 

            while (rightIndex < rightSize) 
            { 
                array = replaceElement(array, k, rightArray[rightIndex]);
                rightIndex++; 
                k++;

                yield put(actions.setHighlightedColumns([k, mid + 1 + rightIndex]));
                yield delay(MERGE_SORT_DELAY_TIME);
                yield put(actions.setSortingValues(array));
                yield delay(MERGE_SORT_DELAY_TIME);
            } 
        } 
    } 

    yield put(actions.setHighlightedColumns([]));
    yield put(actions.setSortingValues(array));
    yield put(actions.setIsRunning(false));
}

const toggleGame = function*({ algorithmType }: ToggleIsRunningAction) {
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