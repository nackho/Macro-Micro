const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    type: String,
    bodypart: { String, required: true },
    date: { type: Date, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);