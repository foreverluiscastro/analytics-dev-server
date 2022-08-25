// Import environment parameters
require("dotenv").config();

// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');

// Import configuration parameters
const config = require('../config');

// Initialize database connection
const cn = config.db;

// Connect the database to our server using Mongoose
mongoose.connect(cn);
const db = mongoose.connection;


//     **** These methods fire when the db connects
db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Welcome to the jungle.');
})


// Initialize express
const app = express();

// middleware to send responses as json **** This should happen before app.use()
// so that requests can be read by the router, otherwise undefined gets recieved
app.use(express.json());


// route all requests ot the router
app.use('/', router)

const port = parseInt(config.server.port);
const host = config.server.host;

app.listen(port, () => {
    console.log(`Example app listening at http://${host}:${port}`)
});

module.exports = db;