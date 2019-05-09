import { createStore } from 'redux';

import reducers from '../reducers';
import middlewares from './middlewares';
import initialState from './initial_state';

const store = createStore(reducers, initialState, middlewares);

export default store;
