const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');

// GET /api/orders/cart
router.get('/cart', workoutsCtrl.cart);
// GET /api/orders/user
// router.get('/user', workoutsCtrl.forUser);
// POST /api/orders/cart/items/:id
router.post('/cart/bodyparts/:id', workoutsCtrl.addBodypartToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', workoutsCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', workoutsCtrl.setBodypartQtyInCart);

module.exports = router;