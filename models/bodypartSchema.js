const Schema = require('mongoose').Schema;

const bodypartSchema = new Schema({
  name: { type: String, required: true },
  split: {type: Schema.Types.ObjectId, ref: 'Split'},
}, {
  timestamps: true
});

module.exports = bodypartSchema;
