import { combineReducers } from "redux";
import { gameOfLifeReducer } from './gameOfLife/store/gameOfLife.reducer';
import { sortingReducer } from './sorting/store/sorting.reducer';

export const pluginsReducer = combineReducers({
    gameOfLife: gameOfLifeReducer,
    sorting: sortingReducer,
});
