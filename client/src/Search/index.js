import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	container: {
		padding: '2rem 0',
		width: '100%',
		textAlign: 'center',
		background: 'white',
	},
	h6: {
		fontSize: '1.75rem',
	},
	body1: {
		fontSize: '1rem',
		marginTop: '1rem',
	},
	searchContainer: {
		padding: '2rem',
		background: 'lightgrey',
		color: 'white',
		display: 'flex',
		flexWrap: 'wrap',
	},
	searchInput: {
		margin: '1.5rem 0',
	},
	searchButton: {
		marginLeft: 'auto',
	},
}));

export default function Search() {
	const classes = useStyles();
	return (
		<>
			<div id="searchHeaderContainer" className={classes.container}>
				<Typography
					id="searchHeader"
					variant="h4"
					component="div"
					className={classes.h6}
				>
					(REACT) GOOGLE BOOKS SEARCH
					<Typography
						id="searchHeaderBody"
						variant="body1"
						className={classes.body1}
					>
						Search for and Save Books of Interest
					</Typography>
				</Typography>
			</div>
			<div className={classes.searchContainer}>
				<Typography variant="subtitle1">Book Search</Typography>
				<TextField
					id="outlined-full-width"
					className={classes.searchInput}
					label="Book"
					placeholder="Harry Potter"
					color="secondary"
					fullWidth
					margin="normal"
					InputLabelProps={{
						shrink: true,
					}}
					variant="outlined"
				/>
				<Button
					color="secondary"
					variant="outlined"
					className={classes.searchButton}
				>
					Search
				</Button>
			</div>
		</>
	);
}
