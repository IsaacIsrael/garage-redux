import { FECTH_CARS, FECTH_CAR } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FECTH_CARS:
      return action.payload;
    case FECTH_CAR:
      return [action.payload];
    default:
      return state;
  }
}

