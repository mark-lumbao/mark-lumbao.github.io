import { ReactNode } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer from 'store/reducers';
import rootSaga from 'store/sagas';

export type ReduxProviderProps = {
  children: ReactNode,
};

const sagaMiddleware = createSagaMiddleware();

const isProd = process.env.NODE_ENV !== 'production';

const composeEnhancers = isProd ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const middleware = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

const ReduxProvider = ({ children }: ReduxProviderProps) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default ReduxProvider;
