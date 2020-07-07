const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv').config();
const routes = require('./routes');

// Init Express app
const app = express();

// Configure for CORS
app.use(cors());
app.use(helmet());

// Transform requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure routes
app.use('/', routes);

// Export for use as google cloud function
exports.app = app;
