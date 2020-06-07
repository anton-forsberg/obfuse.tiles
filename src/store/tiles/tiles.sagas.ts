import { all, fork, put, takeEvery, select } from 'redux-saga/effects'
import { TileActionTypes as ActionTypes, FillTileRequestAction } from './tiles.types'
import { selectSelectedColorId } from '../selections/selections.selectors';
import * as actions from './tiles.actions';
import { AppState } from '../reducer';
import { getBrushTiles, BrushSize } from '../../utils/brush.utils';

const fillTile = function* ({ column, row }: FillTileRequestAction) {
    const state: AppState = yield select();
    const selectedColorId = selectSelectedColorId(state);
    if (!selectedColorId) return;
    const tileIds = getBrushTiles(column, row, BrushSize.LG);
    yield put(actions.fillTilesSuccess(tileIds, selectedColorId));
}

const watchTileActions = function* () {
    yield takeEvery(ActionTypes.FILL_TILE_INIT, fillTile);
}

export const tilesSaga = function* () {
    yield all([fork(watchTileActions)]);
}