const mongoose = require('mongoose');
require('./split');
const bodypartSchema = require('./bodypartSchema');

module.exports = mongoose.model('Bodypart', bodypartSchema);
