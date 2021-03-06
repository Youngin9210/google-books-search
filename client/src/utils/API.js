import axios from 'axios';
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const API_PARAMS = '&langRestrict=en&orderBy=relevance&printType=BOOKS';

export default {
	// get a list of books from search
	searchBooks: function (query) {
		return axios.get(API_URL + query + API_PARAMS);
	},
	// Gets all saved books
	getSavedBooks: function () {
		return axios.get('/api/books');
	},
	// Gets the book with the given id
	getBook: function (id) {
		return axios.get('/api/books/' + id);
	},
	// Deletes the book with the given id
	deleteBook: function (id) {
		return axios.delete('/api/books/' + id);
	},
	// Saves a book to the database
	saveBook: function (bookData) {
		return axios.post('/api/books', bookData);
	},
};
