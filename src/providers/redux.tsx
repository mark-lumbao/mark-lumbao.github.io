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

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const middleware: any = [sagaMiddleware];

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
