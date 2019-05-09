import { applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';

const middlewares = applyMiddleware(
  reduxPromise,
  logger
);

export default middlewares;
