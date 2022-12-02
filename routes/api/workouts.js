const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');

router.get('/cart', workoutsCtrl.cart);

router.get('/user', workoutsCtrl.forUser);

router.post('/cart/bodyparts/:id', workoutsCtrl.addBodypartToCart);

router.post('/cart/checkout', workoutsCtrl.checkout);

router.post('/cart/bodyparts/:workoutId/:id', workoutsCtrl.addBodypartToWorkout);

router.post('/cart/checkout/:id', workoutsCtrl.checkoutWorkout);

router.put('/cart/qty', workoutsCtrl.setBodypartQtyInCart);

router.put('/cart/workout/qty', workoutsCtrl.setBodypartQtyInWorkout);

router.delete('/cart/workout/:id', workoutsCtrl.deleteWorkout);

module.exports = router;