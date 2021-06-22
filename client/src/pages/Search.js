import React, { useState } from 'react';
import useStyles from '../assets/useStyles';
import ResultsContainer from '../components/ResultsContainer';
import SearchBox from '../components/SearchBox';
import API from '../utils/API';

export default function Search({ currentPage }) {
	const [searchResults, setSearchResults] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	const queryBooks = (query) => {
		API.searchBooks(query)
			.then((res) => {
				setSearchResults(res.data.items.map((item) => item));
			})
			.catch((err) => console.log(err.message));
	};

	const handleChange = (e) => {
		const { value } = e.target;
		setSearchQuery(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		queryBooks(searchQuery);
	};

	const handleKeyUp = (e) => {
		console.log(searchQuery);
		if (e.key === 'Enter' && searchQuery !== undefined) queryBooks(searchQuery);
	};

	const handleSave = (bookId) => {
		console.log(bookId);
		// const bookInfo = searchResults[]
		searchResults.map((book) => {
			if (book.id === bookId) {
				let bookData = {
					_id: book.id,
					volumeInfo: {
						title: book.volumeInfo.title,
						authors: book.volumeInfo.authors,
						description: book.volumeInfo.description,
						imageLinks: { thumbnail: book.volumeInfo.imageLinks.thumbnail },
						previewLink: book.volumeInfo.infoLink,
					},
				};
				console.log('bookData:', bookData);
				API.saveBook(bookData).then((res) => {
					console.log(res.data);
					setSearchResults(searchResults.filter((book) => book.id !== bookId));
				});
			}
		});
	};

	const classes = useStyles();
	console.log(searchResults);
	return (
		<>
			<SearchBox
				classes={classes}
				onChange={handleChange}
				onSubmit={handleSubmit}
				onKeyUp={handleKeyUp}
				value={searchQuery}
			/>
			{searchResults.length !== 0 && (
				<ResultsContainer
					classes={classes}
					results={searchResults}
					handleSave={handleSave}
					currentPage={currentPage}
				/>
			)}
		</>
	);
}
