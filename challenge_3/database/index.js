const mongoose = require('mongoose');

const connectionString = 'mongoddb://localhost/multistepCheckout';

mongoose.connect(connectionString);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', console.log('mongo connected'));
