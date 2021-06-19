import React, { useState } from 'react';
import useStyles from '../assets/useStyles';
import API from '../utils/API';
import ResultsContainer from './ResultsContainer';
import SearchBox from './SearchBox';

export default function Search() {
	const [searchResults, setsearchResults] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	const queryBooks = (query) => {
		console.log('query:', query);
		API.searchBooks(query)
			.then((res) => setsearchResults(res.data.items))
			.then(console.log(searchResults, searchQuery))
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
	// console.log(
	// 	API.searchBooks(`harry+potter`).then((res) => res.data.items[2].volumeInfo)
	// );
	const classes = useStyles();
	return (
		<>
			<SearchBox
				classes={classes}
				onChange={handleChange}
				onSubmit={handleSubmit}
				onKeyUp={handleKeyUp}
				value={searchQuery}
			/>
			<ResultsContainer classes={classes} />
		</>
	);
}
