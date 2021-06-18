import React from 'react';
import useStyles from '../assets/useStyles';
import API from '../utils/API';
import ResultsContainer from './ResultsContainer';
import SearchBox from './SearchBox';

export default function Search() {
	console.log(
		API.searchBooks(`harry+potter`).then((res) => res.data.items[2].volumeInfo)
	);
	const classes = useStyles();
	return (
		<>
			<SearchBox classes={classes} />
			<ResultsContainer classes={classes} />
		</>
	);
}
