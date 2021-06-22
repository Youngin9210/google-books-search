const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	_id: { type: String, required: true },
	volumeInfo: {
		title: { type: String, required: true },
		authors: [{ type: Array, required: true }],
		publishedDate: { type: String },
		description: { type: String, required: true },
		imageLinks: {
			thumbnail: { type: String },
		},
		previewlink: { type: String },
	},
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
