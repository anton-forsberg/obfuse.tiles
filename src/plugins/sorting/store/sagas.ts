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
    const lastIndex = array.length - 1;
                 
    for (let size = 1; size <= lastIndex; size = 2 * size) 
    { 
        for (let start = 0; start < lastIndex; start += 2 * size) 
        { 
            const mid = Math.min(start + size - 1, lastIndex); 
            const end = Math.min(start + 2 * size - 1, lastIndex); 
        
            const leftSize = mid - start + 1; 
            const rightSize = end - mid; 
        
            const leftArray = []; 
            const rightArray = []; 
        
            for (let i = 0; i < leftSize; i++) leftArray[i] = array[start + i]; 
            for (let j = 0; j < rightSize; j++) rightArray[j] = array[mid + 1 + j]; 
        
            let leftIndex = 0; 
            let rightIndex = 0; 
            let index = start; 
            while (leftIndex < leftSize && rightIndex < rightSize) 
            {
                const leftIndexInMainArray = start + leftIndex;
                const rightIndexInMainArray = mid + 1 + rightIndex;
                let indexInMainArray = -1;

                if (leftArray[leftIndex] <= rightArray[rightIndex])
                {
                    array = replaceElement(array, index, leftArray[leftIndex]);
                    indexInMainArray = leftIndexInMainArray;
                    leftIndex++;
                }
                else
                {
                    array = replaceElement(array, index, rightArray[rightIndex]);
                    indexInMainArray = rightIndexInMainArray;
                    rightIndex++;
                }

                if (indexInMainArray !== index) {
                    yield put(actions.setHighlightedColumns([leftIndexInMainArray, rightIndexInMainArray, index]));
                    yield delay(MERGE_SORT_DELAY_TIME);
                    yield put(actions.setSortingValues(array));
                    yield delay(MERGE_SORT_DELAY_TIME);
                }
                index++;
            } 
        
            while (leftIndex < leftSize) 
            { 
                array = replaceElement(array, index, leftArray[leftIndex]);
                const leftIndexInMainArray = start + leftIndex;
                const rightIndexInMainArray = mid + 1 + rightIndex;
                if (leftIndexInMainArray !== index) {
                    yield put(actions.setHighlightedColumns([leftIndexInMainArray, rightIndexInMainArray, index]));
                    yield delay(MERGE_SORT_DELAY_TIME);
                    yield put(actions.setSortingValues(array));
                    yield delay(MERGE_SORT_DELAY_TIME);
                }
                leftIndex++;
                index++;
            } 

            while (rightIndex < rightSize) 
            { 
                array = replaceElement(array, index, rightArray[rightIndex]);
                const leftIndexInMainArray = start + leftIndex;
                const rightIndexInMainArray = mid + 1 + rightIndex;
                if (rightIndexInMainArray !== index) {
                    yield put(actions.setHighlightedColumns([leftIndexInMainArray, rightIndexInMainArray, index]));
                    yield delay(MERGE_SORT_DELAY_TIME);
                    yield put(actions.setSortingValues(array));
                    yield delay(MERGE_SORT_DELAY_TIME);
                }
                rightIndex++; 
                index++;
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