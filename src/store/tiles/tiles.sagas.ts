import { all, fork, put, takeEvery, select, call } from 'redux-saga/effects'
import { TileActionTypes as ActionTypes, FillTileRequestAction } from './tiles.types'
import { selectSelectedColorId } from '../selections/selections.selectors';
import * as actions from './tiles.actions';
import { AppState } from '../reducer';

const fillTile = function* ({ column, row }: FillTileRequestAction) {
    const state: AppState = yield select();
    const selectedColorId = selectSelectedColorId(state);
    if (!selectedColorId) return;
    yield put(actions.fillTileSuccess(column, row, selectedColorId));
}

const watchTileActions = function* () {
    yield takeEvery(ActionTypes.FILL_TILE_INIT, fillTile);
}

export const tilesSaga = function* () {
    yield all([fork(watchTileActions)]);
}