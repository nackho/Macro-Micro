const Workout = require('../../models/workout');
// const Bodypart = require('../../models/bodypart');

module.exports = {
    cart,
    addBodypartToCart,
    setBodypartQtyInCart,
    checkout,
    forUser,
    deleteWorkout,
    addBodypartToWorkout,
    setBodypartQtyInWorkout,
    checkoutWorkout
  };
  
  async function forUser(req, res) {
    // get orders for the logged in user
    const workouts = await Workout.find({user: req.user._id, isComplete: true}).sort('-updatedAt');
    res.json(workouts);
  }

  // A cart is the unpaid order for a user
  async function cart(req, res) {
    const cart = await Workout.getCart(req.user._id)
    res.json(cart)
  }
  
  // Add an item to the cart
  async function addBodypartToCart(req, res) {
    const cart = await Workout.getCart(req.user._id)
    await cart.addBodypartToCart(req.params.id)
    res.json(cart)
  }

  async function addBodypartToWorkout(req, res) {
    const cart = await Workout.getWorkout(req.params.workoutId)
    await cart.addBodypartToCart(req.params.id)
    res.json(cart)
  }

  // Updates an item's qty in the cart
  async function setBodypartQtyInCart(req, res) {
    const cart = await Workout.getCart(req.user._id);
    await cart.setBodypartQty(req.body.bodypartId, req.body.newQty);
    res.json(cart);
  }
  
  async function setBodypartQtyInWorkout(req, res) {
    const cart = await Workout.getWorkout(req.body.workoutId);
    await cart.setBodypartQty(req.body.bodypartId, req.body.newQty);
    res.json(cart);
  }

  // Update the cart's isPaid property to true
  async function checkout(req, res) {
    const cart = await Workout.getCart(req.user._id);
    cart.isComplete = true;
    await cart.save();
    res.json(cart);
  }

  async function checkoutWorkout(req, res) {
    const cart = await Workout.getWorkout(req.params.id);
    cart.isComplete = true;
    await cart.save();
    res.json(cart);
  }

  async function deleteWorkout(req, res) {
    await Workout.deleteWorkout(req.params.id);
    res.json({});
  }