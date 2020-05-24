import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { loadState, composeEnhancers, saveState } from './utils/redux';
import { createRootReducer } from './store';
import { rootSaga } from './store/sagas';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory()

export const configureStore = () => {
    const store = createStore(
        createRootReducer(history),
        loadState(),
        composeEnhancers(applyMiddleware(sagaMiddleware)),
    );

    store.subscribe(() => saveState(store.getState()));
    sagaMiddleware.run(rootSaga);

    return store;
};
