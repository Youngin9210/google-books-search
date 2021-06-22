import { Button, Typography } from '@material-ui/core';
import React from 'react';

export default function BookCard({
	id,
	title,
	publishedDate,
	description,
	authors,
	imageLinks,
	previewLink,
	classes,
	handleSave,
	handleDelete,
	currentPage,
}) {
	const handleClick = (bookId) => {
		console.log(bookId);
		currentPage === 'search' && handleSave(bookId);
		currentPage === 'saved' && handleDelete(bookId);
	};
	return (
		<div className={classes.bookContainer}>
			<div className={classes.bookHeader}>
				<div>
					<Typography variant="h6">{title}</Typography>
					<Typography variant="caption">
						Published Date: {publishedDate}
					</Typography>
					<Typography variant="body1">Authors: {authors}</Typography>
				</div>
				<div>
					<Button
						variant="outlined"
						color="secondary"
						className={classes.resultButton}
						href={previewLink}
						target="_blank"
						data-id={id}
					>
						View
					</Button>
					<Button
						variant="outlined"
						color="secondary"
						className={classes.resultButton}
						id={id}
						onClick={() => handleClick(id)}
					>
						{currentPage === 'search' ? 'Save' : 'Delete'}
					</Button>
				</div>
			</div>
			<div className={classes.bookDetails}>
				<div>
					<img src={imageLinks.thumbnail} alt="" />
				</div>
				<div>
					<Typography variant="body2" className={classes.bookSummary}>
						{description}
					</Typography>
				</div>
			</div>
		</div>
	);
}
