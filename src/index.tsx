/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import 'assets/tailwind.css';
import rootReducer from 'reducers/';
import App from 'components/app';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware: any = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

ReactDOM.render(
  <Provider
    store={store}
  >
    <App />
  </Provider>,
  document.querySelector('#root'),
);
