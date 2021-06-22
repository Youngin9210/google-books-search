import { Typography } from '@material-ui/core';
import React from 'react';
import BookCard from './BookCard';

export default function ResultsContainer({
	classes,
	results,
	handleSave,
	currentPage,
	handleDelete,
}) {
	return (
		<div className={classes.resultsContainer}>
			<Typography variant="h5">
				{window.location.pathname === '/saved' ? 'Saved Books' : 'Results'}
			</Typography>
			{results.map((book) => {
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
						id={_id}
						key={_id}
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
