import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export const history = createBrowserHistory(); // history object provided to ConnectedRouter
const initialState = {};
const middleware = [thunk, routerMiddleware(history)];

console.log('typeof PROCESS.ENV.NODE_ENV', typeof process.env.NODE_ENV);
export const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.navigator.userAgent.includes('Chrome')
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose
  )
);
