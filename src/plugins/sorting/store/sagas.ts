import { all, fork, put, takeLatest, select, delay } from 'redux-saga/effects'
import { SortingActionTypes as ActionTypes, ToggleIsRunningAction, SortingAlgorithmType } from './types';
import { selectIsRunning } from './selectors';
import * as actions from './actions';
import { selectGridRows, selectGridColumns } from '../../../store/selections/selectors';
import { AppState } from '../../../store';
import { swapElements, replaceElement } from '../../../utils/array';
import { setColumnHeights, fillColumnTiles } from '../../../store/columns/actions';
import { selectColumnHeights } from '../../../store/columns/selectors';

const QUICK_SORT_DELAY_TIME = 10;
const MERGE_SORT_DELAY_TIME = 10;

const prepareSort = function*() {
    const state: AppState = yield select();
    const rows = selectGridRows(state);
    const columns = selectGridColumns(state);
    const unsortedArray = columns.map(() => Math.round(Math.random() * rows.length))

    yield put(setColumnHeights(unsortedArray));
}

const quickSort = function*() {
    let array = selectColumnHeights(yield select());
    const stack = [[0, array.length]];

    while(stack.length) {
        const [start, end] = stack.pop() ?? [];
        if (end - start < 2) continue;

        let pivotIndex = Math.floor(start + ((end - start) / 2));
        let low = start;
        let high = end - 2;
        let pivot = array[pivotIndex];
        if (array[pivotIndex] !== array[high + 1]) {
            array = swapElements(array, pivotIndex, high + 1);
            yield put(setColumnHeights(array, [[low], [high + 1]]));
            yield delay(QUICK_SORT_DELAY_TIME);
        }

        while(low < high) {
            if (array[low] < pivot) low++;
            else if (array[high] >= pivot) high--;
            else array = swapElements(array, low, high);
            
            yield put(setColumnHeights(array, [[low], [high]]));
            yield delay(QUICK_SORT_DELAY_TIME);
        }

        if (array[high] < pivot) high++;
        low = end - 1;
        if (array[high] !== array[low]) {
            array = swapElements(array, low, high);
            yield put(setColumnHeights(array, [[low], [high]]))
            yield delay(QUICK_SORT_DELAY_TIME);
        }

        stack.push([high + 1, end]);
        stack.push([start, high]);
    }

    yield put(fillColumnTiles());
    yield put(actions.setIsRunning(false));
}

const mergeSort = function*() {
    const columnHeights = selectColumnHeights(yield select());
    let array = [...columnHeights];
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
                if (leftArray[leftIndex] <= rightArray[rightIndex])
                {
                    if (leftArray[leftIndex] !== array[index]) {
                        array = replaceElement(array, index, leftArray[leftIndex]);
                        yield put(setColumnHeights(array, [[index], [index + 1]]));
                        yield delay(MERGE_SORT_DELAY_TIME);
                    }

                    leftIndex++;
                }
                else
                {
                    if (rightArray[rightIndex] !== array[index]) {
                        array = replaceElement(array, index, rightArray[rightIndex]);
                        yield put(setColumnHeights(array, [[index], [index + 1]]));
                        yield delay(MERGE_SORT_DELAY_TIME);
                    }
                    
                    rightIndex++;
                }

                index++;
            } 
        
            while (leftIndex < leftSize) 
            { 
                if (leftArray[leftIndex] !== array[index]) {
                    array = replaceElement(array, index, leftArray[leftIndex]);
                    yield put(setColumnHeights(array, [[index], [index + 1]]));
                    yield delay(MERGE_SORT_DELAY_TIME);
                }

                leftIndex++;
                index++;
            } 

            while (rightIndex < rightSize) 
            { 
                if (rightArray[rightIndex] !== array[index]) {
                    array = replaceElement(array, index, rightArray[rightIndex]);
                    yield put(setColumnHeights(array, [[index], [index + 1]]));
                    yield delay(MERGE_SORT_DELAY_TIME);
                }

                rightIndex++; 
                index++;
            }
        } 
    }

    yield put(fillColumnTiles());
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
}

export const sortingSaga = function* () {
    yield all([fork(watchSortingActions)]);
}