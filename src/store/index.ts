import { tilesReducer } from './tiles/reducer';
import { colorReducer } from './colors/reducer';
import { combineReducers } from 'redux';
import { selectionReducer } from './selections/reducer';
import { createStore, compose } from 'redux';

const appReducer = combineReducers({
    selections: selectionReducer,
    colors: colorReducer,
    tiles: tilesReducer,
});

export type AppState = ReturnType<typeof appReducer>;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loadState = () => {
    const state = localStorage.getItem('state');
    return state ? { tiles: JSON.parse(state).tiles }: undefined;
}

const saveState = (state: AppState) => localStorage.setItem('state', JSON.stringify(state));

export const store = createStore(
    appReducer,
    loadState(),
    composeEnhancers(),
);

store.subscribe(() => saveState(store.getState()));