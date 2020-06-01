import { all, fork, put, takeEvery, select } from 'redux-saga/effects'
import { TileActionTypes, FillTileRequestAction } from './types'
import { selectSelectedColorId } from '../selections/selectors';
import * as actions from './actions';
import { AppState } from '..';

const fillTile = function* ({ column, row }: FillTileRequestAction) {
    const state: AppState = yield select();
    const selectedColorId = selectSelectedColorId(state);
    if (!selectedColorId) return;
    yield put(actions.fillTileSuccess(column, row, selectedColorId));
}

const watchTileActions = function* () {
    yield takeEvery(TileActionTypes.FILL_TILE_INIT, fillTile);
}

export const tilesSaga = function* () {
    yield all([fork(watchTileActions)]);
}