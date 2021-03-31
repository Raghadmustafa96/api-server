'use strict';

const mongoose = require('mongoose');
require('dotenv').config();
const server = require('./src/server');

const port = process.env.PORT;


mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.start(port);
  })
  .catch((error) => {
    console.log('__CONNECTION ERROR__', error.message);
  });
