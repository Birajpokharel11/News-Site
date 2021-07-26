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
    required: true
  }
});
module.exports = mongoose.model('Subs', usersubscribe);
