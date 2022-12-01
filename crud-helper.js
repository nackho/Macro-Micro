// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Bodypart = require('./models/bodypart');
const Split = require('./models/split');
const Workout = require('./models/workout');

// Local variables will come in handy for holding retrieved documents
let user, bodypart, split, workout;
let users, bodyparts, splits, workouts;
