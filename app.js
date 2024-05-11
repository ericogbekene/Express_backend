const express = require('express');
const swagger = require('./swagger');
const app = express();
const router=express.Router()
const Order = require('./models/orders');
const mongoose = require('mongoose');
require('dotenv').config();



app.get('/', (request, response) => {
	response.type('text/html');
	response.status(200);
	response.send('<h1> Welcome User <h1/>');
});


app.get('/login', (req, res) => {
	res.status(200);
	res.type('text/text');
	let message = ""
	res.send("message: 'Welcome to the login page'")

});



app.post('/login', (req,res) => {
	// logic for login post goes here
	//should take to login dashboard/homepage.
})
/* 

// this to create a new order
app.post('/orders', (req, res) => {
	login_data = {}
	res.type = {'application/json'}
	res.body = {}
	let collection = await db.collection("orders");
	let newDocument = req.body;
	newDocument.date = new Date();
	let result = await collection.insertOne(newDocument);
	res.send(result).status(204);
	// create dictionary for user info
	send data using Json to database to authenticate

});
*/
app.get('/orders', (req, res) => {
	//returns all available orders
})
/*
logic for Sign-up
*/

// Using swagger UI for documentation

swagger(app)


// connect to mongoose on startup

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful connection
    app.listen(3000, () => {
      console.log('Server is listening on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
// tell the app which port to listen on
//
/*
app.listen(2121, () => {
	console.log(`Server is lisening at http://localhost:2121`);
});
*/
