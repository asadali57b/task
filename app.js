// app.js
const express = require('express');
const mongoose = require('mongoose');
const DbConnection = require('./core_app_connectivities/db');
const userRoutes = require('./routes/user_routes');
const ErrorMiddleware = require('./middleware/error_handler');
const setupUserCreatedListener = require('./event_driven_services/data_pulse.events');
setupUserCreatedListener();


// Initialize Express app
const app = express();
app.use(express.json());

// Load routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(ErrorMiddleware.errorHandler);

// Connect to MongoDB
const dbConnection = new DbConnection();
dbConnection.connect();

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
