import React, { useEffect, useState } from 'react';
import useStyles from '../assets/useStyles';
import ResultsContainer from '../components/ResultsContainer';
import API from '../utils/API';

export default function Saved() {
	const [savedBooks, setSavedBooks] = useState([]);
	useEffect(() => {
		getBooks();
		return;
	}, []);

	const getBooks = () => {
		API.getSavedBooks()
			.then((res) => setSavedBooks(res.data))
			.catch((err) => console.log(err.message));
	};

	const handleDelete = (bookId) => {
		console.log('bookId:', bookId);
		API.deleteBook(bookId).then(() =>
			setSavedBooks(savedBooks.filter((book) => book._id !== bookId))
		);
	};

	const classes = useStyles();
	return (
		<>
			<ResultsContainer
				classes={classes}
				results={savedBooks}
				handleDelete={handleDelete}
			/>
		</>
	);
}
