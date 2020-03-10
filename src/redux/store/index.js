import { createStore, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducer from '../reducers/index';

const createRedux = () => {
  const middlewares = [
    thunk,
    promise,
  ];

  if (process.env.ACTION_LOGGING) {
    middlewares.push(createLogger({
      collapsed: true,
      logErrors: process.env.ACTION_LOGGING,
    }));
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancers = composeEnhancers(
    applyMiddleware(...middlewares),
  );

  const store = createStore(reducer, enhancers);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default createRedux();