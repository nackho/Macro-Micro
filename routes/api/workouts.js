const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');

// GET /api/orders/cart
router.get('/cart', workoutsCtrl.cart);
// POST /api/orders/cart/items/:id
router.post('/cart/bodyparts/:id', workoutsCtrl.addToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', wokroutsCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', workoutsCtrl.setItemQtyInCart);

module.exports = router;