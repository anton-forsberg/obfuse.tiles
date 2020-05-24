import { all, fork, put, takeEvery, select } from 'redux-saga/effects'
import { TileActionTypes, FillTileRequestAction } from './types'
import { selectSelectedColorId } from '../selections/selectors';
import * as actions from './actions';
import { AppState } from '..';

const fillTile = function* ({ row, column }: FillTileRequestAction) {
    const state: AppState = yield select();
    const selectedColorId = selectSelectedColorId(state);
    if (!selectedColorId) return;
    yield put(actions.fillTileSuccess(row, column, selectedColorId))
}

const watchTileActions = function* () {
    yield takeEvery(TileActionTypes.FILL_TILE_REQUEST, fillTile);
}

export const tilesSaga = function* () {
    yield all([fork(watchTileActions)])
}