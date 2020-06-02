import { tilesReducer } from './tiles/tiles.reducer';
import { selectionReducer } from './selections/selections.reducer';
import { paletteReducer } from './palettes/palettes.reducer';
import { columnsReducer } from './columns/columns.reducer';
import { pluginsReducer } from '../plugins/plugins.reducer';
import { combineReducers } from 'redux';
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

export const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    selections: selectionReducer,
    tiles: tilesReducer,
    palettes: paletteReducer,
    columns: columnsReducer,
    plugins: pluginsReducer,
});

export type AppState = ReturnType<ReturnType<typeof createRootReducer>>;