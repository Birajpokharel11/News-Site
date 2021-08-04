const mongoose = require('mongoose');

const SubscribeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Subscribe', SubscribeSchema);
