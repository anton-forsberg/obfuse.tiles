import { all, fork } from "redux-saga/effects";
import { gameOfLifeSaga } from "./gameOfLife/store/gameOfLife.sagas";
import { sortingSaga } from "./sorting/store/sorting.sagas";

export const pluginsSaga = function* () {
    yield all([
        fork(gameOfLifeSaga),
        fork(sortingSaga),
    ]);
}