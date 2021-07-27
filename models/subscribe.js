const mongoose = require('mongoose');
const usersubscribe = new mongoose.Schema({
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
module.exports = mongoose.model('Subs', usersubscribe);
