import { createStore, compose } from 'redux';
import { tilesReducer } from './tiles/reducer';
import { combineReducers } from 'redux';
import { selectionReducer } from './selections/reducer';
import { paletteReducer } from './palettes/reducer';

const appReducer = combineReducers({
    selections: selectionReducer,
    tiles: tilesReducer,
    palettes: paletteReducer,
});

export type AppState = ReturnType<typeof appReducer>;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loadPersistedState = () => {
    const state = localStorage.getItem('state');
    if (!state) return undefined;
    const { tiles, selections } = JSON.parse(state);

    return {
        tiles,
        selections,
    };
}

const saveState = (state: AppState) => localStorage.setItem('state', JSON.stringify(state));

export const store = createStore(
    appReducer,
    loadPersistedState(),
    composeEnhancers(),
);

store.subscribe(() => saveState(store.getState()));