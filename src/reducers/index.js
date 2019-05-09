import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import carsReducer from './cars_reducer';

const defaultReducer = (state = null) => state;
const rootReducer = combineReducers({
  garage: defaultReducer,
  cars: carsReducer,
  form: formReducer
});
export default rootReducer;
