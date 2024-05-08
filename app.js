const express = require('express');
const swagger = require('./swagger');
const app = express();
const router=express.Router()


app.get('/', (request, response) => {
	response.type('text/html');
	response.status(200);
	response.send('<h1> Welcome User <h1/>');
});


app.get('/login', (req, res) => {
	res.status(200);
	res.type('text/text');
	res.send("message: 'Welcome to the login page'")

});

// logic for login post goes here
/* 
app.post('/orders', (req, res) => {
	login_data = {}
	res.type = {'application/json'}
	res.body = {}
	let collection = await db.collection("posts");
	let newDocument = req.body;
	newDocument.date = new Date();
	let result = await collection.insertOne(newDocument);
	res.send(result).status(204);
	// create dictionary for user info
	send data using Json to database to authenticate

});
*/

/*
logic for Sign-up
*/

// Using swagger UI for documentation

swagger(app)

// tell the app which port to listen on

app.listen(2121, () => {
	console.log(`Server is lisening at http://localhost:2121`);
});
