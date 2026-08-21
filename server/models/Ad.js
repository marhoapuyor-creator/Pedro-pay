const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  type: {
    type: String,
    enum: ['video', 'image', 'display'],
    required: true
  },
  duration: {
    type: Number, // in seconds
    required: true
  },
  url: {
    type: String,
    required: true
  },
  reward: {
    type: Number,
    required: true
  },
  imageUrl: String,
  isActive: {
    type: Boolean,
    default: true
  },
  viewCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  expiresAt: Date
});

module.exports = mongoose.model('Ad', adSchema);
