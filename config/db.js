const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crm_system', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
