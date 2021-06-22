import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';

export default function SearchBox({
	classes,
	onChange,
	onSubmit,
	onKeyUp,
	value,
}) {
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
				type="search"
				margin="normal"
				InputLabelProps={{
					shrink: true,
				}}
				variant="outlined"
				onChange={onChange}
				onKeyUp={onKeyUp}
				value={value}
			/>
			<Button
				type="submit"
				color="secondary"
				variant="outlined"
				className={classes.searchButton}
				onClick={onSubmit}
			>
				Search
			</Button>
		</div>
	);
}
