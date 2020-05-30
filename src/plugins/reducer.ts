import { combineReducers } from "redux";
import { gameOfLifeReducer } from './gameOfLife/store/reducer';
import { sortingReducer } from './sorting/store/reducer';


export const pluginsReducer = combineReducers({
    gameOfLife: gameOfLifeReducer,
    sorting: sortingReducer,
});
