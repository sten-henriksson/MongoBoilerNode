const models = require('./model.js');
const express = require('express');
const app = express();
app.get('/', function(req, res) {
	res.send('Hello World');
});
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	console.log('connected');
});
const silence = new models.kitten({ name: 'mio', age: 2 });
silence.save();
models.kitten.find(function(err, temp) {
	if (err) return console.error(err);
	console.log(temp);
});

const server = app.listen(8081, function() {
	const host = server.address().address;
	const port = server.address().port;

	console.log(models.asdd, host, port);
});
