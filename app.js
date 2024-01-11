const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
app.use(cors('*'))
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running.');
});

app.use('/auth', authRoutes);
app.use('/customers', customerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
