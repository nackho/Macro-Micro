const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bodypartSchema = require('./bodypartSchema')

const lineItemSchema = new Schema({
    qty: {type: Number, default: 1 },
    item: bodypartSchema
}, { 
    timestamps: true,
    toJSON: { virtuals: true }
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
    return this.id.slice(-6).toUpperCase();
});

workoutSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isComplete: false }, 
        { user: userId }, 
        { upsert: true, new: true }
    )
}

workoutSchema.methods.addBodypartToCart = async function (bodypartId) { 
    const cart = this
    const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(bodypartId));
    if(lineItem) {
        lineItem.qty += 1
    } else {
        const bodypart = await mongoose.model('Bodypart').findById(bodypartId);
        cart.lineItems.push({item: bodypart});
    }
    return cart.save()
}

workoutSchema.methods.setBodypartQty = function(bodypartId, newQty) {
    const cart = this;
    const lineItem = cart.lineItems.find(lineItem => lineItem._id.equals(bodypartId));
    if (lineItem && newQty <= 0) {
        lineItem.remove();
    } else if (lineItem) {
        lineItem.qty = newQty;
    }
    return cart.save()
}

workoutSchema.statics.deleteWorkout = async function(workoutId) {
    await mongoose.model('Workout').findOneAndDelete({_id: workoutId});
    return;
}

workoutSchema.statics.getWorkout = async function(workoutId) {
    return this.findOneAndUpdate(
        { _id: workoutId }, 
        { isComplete: false },
        { upsert: true, new: true }
    )
}

module.exports = mongoose.model('Workout', workoutSchema);