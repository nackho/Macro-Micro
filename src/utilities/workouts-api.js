import sendRequest from './send-request';

const BASE_URL = '/api/workouts';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}


export function addBodypartToCart(bodypartId) {
  return sendRequest(`${BASE_URL}/cart/bodyparts/${bodypartId}`, 'POST');
}

export function addBodypartToWorkout(workoutId, bodypartId) {
  return sendRequest(`${BASE_URL}/cart/bodyparts/${workoutId}/${bodypartId}`, 'POST');
}

export function setBodypartQtyInCart(bodypartId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { bodypartId, newQty });
}

export function setBodypartQtyInWorkout(workoutId, bodypartId, newQty) {
  return sendRequest(`${BASE_URL}/cart/workout/qty`, 'PUT', { workoutId, bodypartId, newQty });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function checkoutWorkout(workoutId) {
  return sendRequest(`${BASE_URL}/cart/checkout/${workoutId}`, 'POST');
}

export function deleteWorkout(workoutId) {
  return sendRequest(`${BASE_URL}/cart/workout/${workoutId}`, 'DELETE')
}

export function getAllForUser() {
  return sendRequest(`${BASE_URL}/user`);
}