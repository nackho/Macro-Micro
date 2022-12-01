const mongoose = require('mongoose')
const Schema = mongoose.Schema
const itemSchema = require('./itemSchema')

const lineItemSchema = new Schema({
    qty: {type: Number, default: 1 },
    item: itemSchema
}, { 
    timestamps: true 
});

const workoutSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true },
    lineItems: [lineItemSchema],
    isComplete: {type: Boolean, default: false},
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

workoutSchema.virtual('totalQty').get(function() {
    return this.lineItems.reduce((total, bodypart) => total + bodypart.qty, 0)
});

workoutSchema.virtual('workoutId').get(function() {
    return this.id.slice(-8).toUpperCase();
});

module.exports = mongoose.model('Workout', workoutSchema);