import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export const history = createBrowserHistory(); // history object provided to ConnectedRouter
const initialState = {
  user: { authToken: localStorage.getItem('token') }
};
const middleware = [thunk, routerMiddleware(history)];

export const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : compose
  )
);
