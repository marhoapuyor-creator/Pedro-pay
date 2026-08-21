const mongoose = require('mongoose');

const withdrawalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  method: {
    type: String,
    enum: ['bank', 'paypal', 'crypto'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'completed'],
    default: 'pending'
  },
  accountDetails: {
    type: String,
    required: true
  },
  requestedAt: {
    type: Date,
    default: Date.now
  },
  processedAt: Date,
  transactionId: String
});

module.exports = mongoose.model('Withdrawal', withdrawalSchema);
