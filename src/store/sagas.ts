import { all, fork } from "redux-saga/effects";
import { tilesSaga } from "./tiles/sagas";
import { pluginsSaga } from "../plugins/sagas";

export const rootSaga = function* () {
  yield all([
        fork(tilesSaga),
        fork(pluginsSaga),
    ]);
}