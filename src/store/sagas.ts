import { all, fork } from "redux-saga/effects";
import { tilesSaga } from "./tiles/tiles.sagas";
import { pluginsSaga } from "../plugins/plugins.sagas";
import { columnsSaga } from "./columns/columns.sagas";

export const rootSaga = function* () {
  yield all([
        fork(tilesSaga),
        fork(columnsSaga),
        fork(pluginsSaga),
    ]);
}