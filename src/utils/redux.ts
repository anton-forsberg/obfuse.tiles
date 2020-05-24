import { compose } from "redux";
import { AppState } from "../store";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const loadState = () => {
    const state = localStorage.getItem('state');
    if (!state) return undefined;
    const { tiles, selections } = JSON.parse(state) as AppState;

    return {
        tiles,
        selections,
    };
}

export const saveState = (state: AppState) => localStorage.setItem('state', JSON.stringify(state));
