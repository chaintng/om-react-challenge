import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers';
import injectGlobalByTheme from './globalStyled';

const loggerMiddleware = createLogger();

const reduxMiddleware = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  reduxMiddleware.push(loggerMiddleware);
}

const store = createStore(rootReducer, applyMiddleware(...reduxMiddleware));

const selectedTheme = store.getState().selectedTheme || 'default';

injectGlobalByTheme(selectedTheme);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);