const express = require('express');
const swagger = require('./swagger');
const app = express();
const router=express.Router()
const Order = require('./models/orders');
const mongoose = require('mongoose');
require('dotenv').config();


app.post('/login', (req,res) => {
	// logic for login post goes here
	//should take to login dashboard/homepage.
})


// this to create a new order


// Using swagger UI for documentation

swagger(app)


// connect to mongoose on startup
