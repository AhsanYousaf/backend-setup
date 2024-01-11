const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const authenticateUser = require('../middleware/authMiddleware');

// Retrieving a list of customers
router.get('/',authenticateUser, async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.status(200).json(customers);
  } catch (error) {
    console.error('Error retrieving customers:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Adding a new customer
router.post('/',authenticateUser, async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error('Error adding customer:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Updating customer details
router.put('/:customerId',authenticateUser, async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.customerId, req.body, { new: true });
    res.status(200).json(updatedCustomer);
  } catch (error) {
    console.error('Error updating customer:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Deleting a customer
router.delete('/:customerId',authenticateUser, async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.customerId);
    res.status(200).json(deletedCustomer);
  } catch (error) {
    console.error('Error deleting customer:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
