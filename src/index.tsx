import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { configureStore, history } from './configureStore';
import { Route, Switch, Redirect } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { routes } from './utils/routes.utils';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <Switch>
            {routes.map(({ path, component }) =>
              <Route key={path} exact path={path} component={component} />)}
            <Redirect from='*' to={routes[0].path} />
          </Switch>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);