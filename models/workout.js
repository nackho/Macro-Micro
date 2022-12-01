const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bodypartSchema = require('./bodypartSchema')

const lineItemSchema = new Schema({
    qty: {type: Number, default: 1 },
    item: bodypartSchema
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

workoutSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isComplete: false }, 
        { user: userId }, 
        { upsert: true, new: true }
    )
}

module.exports = mongoose.model('Workout', workoutSchema);