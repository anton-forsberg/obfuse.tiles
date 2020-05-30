import { all, fork } from "redux-saga/effects";
import { gameOfLifeSaga } from "./gameOfLife/store/sagas";
import { sortingSaga } from "./sorting/store/sagas";

export const pluginsSaga = function* () {
    yield all([
        fork(gameOfLifeSaga),
        fork(sortingSaga),
    ]);
}