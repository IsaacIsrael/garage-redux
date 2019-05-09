// TODO: add and export your own actions
const ROOT_URL = 'https://wagon-garage-api.herokuapp.com/';

export const FECTH_CARS = 'FECTH_CARS';
export const FECTH_CAR = 'FECTH_CAR';
export const CAR_CREATED = 'CAR_CREATED';
export const CAR_REMOVED = 'CAR_REMOVED';


export function fetchCars (garage) {
  const promise = fetch(`${ROOT_URL}/${garage}/cars`)
    .then(response => response.json());

  return {
    type: FECTH_CARS,
    payload: promise
  };
}

export function fetchCar (id) {
  const promise = fetch(`${ROOT_URL}/cars/${id}`)
    .then(response => response.json());

  return {
    type: FECTH_CAR,
    payload: promise
  };
}

export function createCar (garage, body, callback) {
  const request = fetch(`${ROOT_URL}/${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(callback);

  return {
    type: CAR_CREATED,
    payload: request
  };
}

export function removeCar(id, callback) {
  const request = fetch(`${ROOT_URL}/cars/${id}`, { method: 'DELETE' })
    .then(callback);

  return {
    type: CAR_REMOVED,
    payload: request
  };
}
