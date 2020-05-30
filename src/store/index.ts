import { tilesReducer } from './tiles/reducer';
import { combineReducers } from 'redux';
import { selectionReducer } from './selections/reducer';
import { paletteReducer } from './palettes/reducer';
import { pluginsReducer } from '../plugins/reducer';
import { History } from 'history'

import { connectRouter } from 'connected-react-router'

export const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    selections: selectionReducer,
    tiles: tilesReducer,
    palettes: paletteReducer,
    plugins: pluginsReducer,
});

export type AppState = ReturnType<ReturnType<typeof createRootReducer>>;