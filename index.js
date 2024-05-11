//logic to listen for server goes Here 

// In your server.js or app.js file

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// Load environment variables
//import "./loadEnvironment.js";

// Import routes
const ordersRoute = require('./routes/order');
const usersRoute = require('./routes/users');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://ericogbekene:admin@cluster0.lafqven.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Mount routes
app.use('/api/orders', ordersRoute);
app.use('/api/users', usersRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
