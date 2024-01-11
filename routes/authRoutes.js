const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Customer = require('../models/customer');

// Secret key for JWT
const jwtSecret = 'humai';

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Here you should implement your authentication logic, e.g., checking the database
  if (email === 'admin@example.com' && password === 'adminpassword') {
    const token = jwt.sign({ email, role: 'admin' }, jwtSecret, { expiresIn: '6h', algorithm: 'HS256' });

    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials.' });
  }
});

module.exports = router;
