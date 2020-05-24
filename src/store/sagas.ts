import { all, fork } from "redux-saga/effects";
import { tilesSaga } from "./tiles/sagas";

export const rootSaga = function* () {
  yield all([fork(tilesSaga)]);
}