import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { AppContainer } from 'react-hot-loader';
import dotenv from 'dotenv';

import { store, history } from './store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

dotenv.config();

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
registerServiceWorker();
