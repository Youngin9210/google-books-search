import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';

export default function SearchBox({ classes }) {
	return (
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
	);
}
