const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');

// GET /api/orders/cart
router.get('/cart', workoutsCtrl.cart);
// GET /api/orders/user
router.get('/user', workoutsCtrl.forUser);
// POST /api/orders/cart/items/:id
router.post('/cart/bodyparts/:id', workoutsCtrl.addBodypartToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', workoutsCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', workoutsCtrl.setBodypartQtyInCart);

router.post('/cart/bodyparts/:workoutId/:id', workoutsCtrl.addBodypartToWorkout);
router.post('/cart/checkout/:id', workoutsCtrl.checkoutWorkout);
router.put('/cart/workout/qty', workoutsCtrl.setBodypartQtyInWorkout);

router.delete('/cart/workout/:id', workoutsCtrl.deleteWorkout);

module.exports = router;