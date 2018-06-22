import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {};
export const history = createBrowserHistory(); // history object provided to ConnectedRouter
const middleware = [thunk, routerMiddleware(history)];
export const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.navigator.userAgent.includes('Chrome')
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose
  )
);
