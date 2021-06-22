import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

export default function ResultsContainer({
	classes,
	results,
	handleSave,
	handleDelete,
}) {
	const [currentPage, setCurrentPage] = useState('');
	useEffect(() => {
		window.location.pathname === '/'
			? setCurrentPage('search')
			: setCurrentPage('saved');
		console.log(currentPage);
		return;
	}, [currentPage]);

	return (
		<div className={classes.resultsContainer}>
			<Typography variant="h5">
				{window.location.pathname === '/saved' ? 'Saved Books' : 'Results'}
			</Typography>
			{results.map((book) => {
				const { id } = book;
				const { _id } = book;
				const {
					title,
					publishedDate,
					description,
					authors,
					imageLinks,
					previewLink,
				} = book.volumeInfo;
				return (
					<BookCard
						id={currentPage === 'search' ? id : _id}
						key={currentPage === 'search' ? id : _id}
						title={title}
						publishedDate={publishedDate}
						description={description}
						authors={authors}
						imageLinks={imageLinks}
						previewLink={previewLink}
						classes={classes}
						handleSave={handleSave}
						handleDelete={handleDelete}
						currentPage={currentPage}
					/>
				);
			})}
		</div>
	);
}
