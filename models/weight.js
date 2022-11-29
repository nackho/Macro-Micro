const mongoose = require('mongoose')
const Schema = mongoose.Schema

const weightSchema = new Schema ({
    amount: { type: number, required: true },
    measurement: { type: String, required: true },
    date: {type: Date, required: true }
}, {
    timestamp: true
})

module.exports = mongoose.model('Weight', weightSchema);