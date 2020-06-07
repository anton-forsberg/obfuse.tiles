import { all, fork, put, takeLatest, select, delay } from 'redux-saga/effects'
import { AppState } from '../../../store/reducer';
import { selectTiles } from '../../../store/tiles/tiles.selectors';
import { setAllTiles } from '../../../store/tiles/tiles.actions';
import { selectGridRows, selectGridColumns } from '../../../store/selections/selections.selectors';
import { GameOfLifeActionTypes as ActionTypes, NextGenerationAction } from './gameOfLife.types';
import * as actions from './gameOfLife.actions';
import { getGenerationTiles } from '../utils/gameOfLife.utils';
import { selectIsRunning, selectGenerationTime } from './gameOfLife.selectors';
import { selectSelectedPaletteColorCount } from '../../../store/palettes/palettes.selectors';
import { getPositionInPulse } from '../../../utils/number.utils';

const generation = function* ({ value }: NextGenerationAction) {
    const state: AppState = yield select();
    const colorId = getPositionInPulse(value, selectSelectedPaletteColorCount(state)) + 1;
    const tiles = selectTiles(state);
    const rows = selectGridRows(state);
    const columns = selectGridColumns(state);
    const generationTiles = getGenerationTiles(columns, rows, tiles, String(colorId));
    yield put(setAllTiles(generationTiles));
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