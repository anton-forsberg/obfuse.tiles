import { all, fork, put, takeEvery, select } from 'redux-saga/effects'
import { TileActionTypes as ActionTypes, FillTileRequestAction } from './tiles.types'
import { selectSelectedColorId, selectSelectedBrush } from '../selections/selections.selectors';
import * as actions from './tiles.actions';
import { AppState } from '../reducer';
import { getBrushTileIds } from '../../utils/brush.utils';

const fillTile = (clear?: boolean) => function* ({ column, row }: FillTileRequestAction) {
    const state: AppState = yield select();
    const selectedColorId = selectSelectedColorId(state);
    if (!selectedColorId && !clear) return;
    const brush = selectSelectedBrush(state);
    const tileIds = getBrushTileIds(column, row, brush);
    const colorId = clear ? undefined : selectedColorId;
    yield put(actions.fillTilesSuccess(tileIds, colorId));
}

const watchTileActions = function* () {
    yield takeEvery(ActionTypes.FILL_TILE_INIT, fillTile());
    yield takeEvery(ActionTypes.CLEAR_TILE, fillTile(true));
}

export const tilesSaga = function* () {
    yield all([fork(watchTileActions)]);
}