const mongoose = require('mongoose');
exports.asdd = 'asdad';

const kittySchema = new mongoose.Schema({
	name: String,
	age:Number,
});

const Kitten = mongoose.model('Kitten', kittySchema);
exports.kitten = Kitten;

