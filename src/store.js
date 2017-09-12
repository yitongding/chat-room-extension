import { applyMiddleware, createStore, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducer';

const initialState = {};
const enhancers = [];
const middleware = [
  promise(),
  thunk,
  logger,
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(reducer, initialState, composedEnhancers);

export default store;
