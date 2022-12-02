import sendRequest from './send-request';

const BASE_URL = '/api/workouts';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an item to the cart
export function addBodypartToCart(bodypartId) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/cart/bodyparts/${bodypartId}`, 'POST');
}

export function addBodypartToWorkout(workoutId, bodypartId) {
  return sendRequest(`${BASE_URL}/cart/bodyparts/${workoutId}/${bodypartId}`, 'POST');
}

// Update the item's qty in the cart
// Will add the item to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setBodypartQtyInCart(bodypartId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { bodypartId, newQty });
}

export function setBodypartQtyInWorkout(workoutId, bodypartId, newQty) {
  return sendRequest(`${BASE_URL}/cart/workout/qty`, 'PUT', { workoutId, bodypartId, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
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