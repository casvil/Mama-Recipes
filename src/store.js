import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export const history = createBrowserHistory(); // history object provided to ConnectedRouter
const initialState = {};
const middleware = [thunk, routerMiddleware(history)];

export const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  compose(
    applyMiddleware(...middleware),
    process.env.NODE_ENV === 'development' ||
    window.navigator.userAgent.includes('Chrome')
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose
  )
);
