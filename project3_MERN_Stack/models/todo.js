const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema for todo
const TodoSchema = new Schema({
	action: {
			type: String,
			required: [true, 'Text field is requied for a taski']
	}
});

// create model for todo
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;
