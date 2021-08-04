const mongoose = require('mongoose');

const SubscribeSchema = new mongoose.Schema({
  name: {
    type: String
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Subscribe', SubscribeSchema);
