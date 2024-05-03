const express = require('express');
//const res = require('express/lib/response');
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

// tell the app which port to listen on

app.listen(2121, () => {
	console.log(`Server is lisening at http://localhost:2121`);
});
