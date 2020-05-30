import { all, fork, put, takeLatest, select, delay } from 'redux-saga/effects'
import { AppState } from '../../../store';
import { selectTiles } from '../../../store/tiles/selectors';
import { setTiles } from '../../../store/tiles/actions';
import { selectGridRows, selectGridColumns } from '../../../store/selections/selectors';
import { GameOfLifeActionTypes as ActionTypes, NextGenerationAction } from './types';
import * as actions from './actions';
import { getGenerationTiles } from './utils';
import { selectIsRunning, selectGenerationTime } from './selectors';
import { selectSelectedPaletteColorCount } from '../../../store/palettes/selectors';
import { getPositionInPulse } from '../../../utils/number';

const generation = function* ({ value }: NextGenerationAction) {
    const state: AppState = yield select();
    const colorId = getPositionInPulse(value, selectSelectedPaletteColorCount(state)) + 1;
    const tiles = selectTiles(state);
    const rows = selectGridRows(state);
    const columns = selectGridColumns(state);
    const generationTiles = getGenerationTiles(rows, columns, tiles, String(colorId));
    yield put(setTiles(generationTiles));
    yield delay(selectGenerationTime(state));
    if (selectIsRunning(yield select())) yield put(actions.nextGeneration(value + 1));
}

const toggleGame = function*() {
    const newIsPlaying = !selectIsRunning(yield select());
    yield put(actions.setIsRunning(newIsPlaying));
    if (newIsPlaying) yield put(actions.nextGeneration());
}

const watchGameOfLifeActions = function* () {
    yield takeLatest(ActionTypes.TOGGLE_IS_RUNNING, toggleGame);
    yield takeLatest(ActionTypes.NEXT_GENERATION, generation);
}

export const gameOfLifeSaga = function* () {
    yield all([fork(watchGameOfLifeActions)]);
}