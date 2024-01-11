const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  education: [String],
  role: { type: String, default: 'customer' },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
