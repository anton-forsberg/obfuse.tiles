import { all, fork, put, takeEvery, select } from 'redux-saga/effects'
import { TileActionTypes as ActionTypes, SetTilesInitAction, SetTileOperation } from './tiles.types'
import { selectSelectedColorId, selectSelectedBrush } from '../selections/selections.selectors';
import * as actions from './tiles.actions';
import { AppState } from '../reducer';
import { getBrushTileIds } from '../../utils/brush.utils';

const setTile = function* ({ column, row, operation }: SetTilesInitAction) {
    const state: AppState = yield select();
    const selectedColorId = selectSelectedColorId(state);
    const brush = selectSelectedBrush(state);
    const tileIds = getBrushTileIds(column, row, brush);
    const colorId = operation === SetTileOperation.Clear
        ? undefined
        : selectedColorId;
    yield put(actions.setTilesSuccess(tileIds, colorId));
}

const watchTileActions = function* () {
    yield takeEvery(ActionTypes.SET_TILES_INIT, setTile);
}

export const tilesSaga = function* () {
    yield all([fork(watchTileActions)]);
}