import { Button, Container, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	headerContainer: {
		padding: '2rem 0',
		width: '100%',
		textAlign: 'center',
		background: 'lightgrey',
		margin: '2rem 0',
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
		color: 'black',
		display: 'flex',
		flexWrap: 'wrap',
		margin: '2rem 0',
	},
	searchInput: {
		margin: '1.5rem 0',
	},
	searchButton: {
		marginLeft: 'auto',
	},
	resultsContainer: {
		padding: '2rem',
		background: 'lightgrey',
		color: 'black',
		display: 'flex',
		flexWrap: 'wrap',
		margin: '2rem 0',
	},
	resultButton: {
		margin: '.25rem',
	},
	bookContainer: {
		border: '1px solid black',
		padding: '1rem',
		margin: '1rem 0',
	},
	bookHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '1rem',
	},
	bookDetails: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	bookSummary: {
		padding: '1rem',
	},
}));

export default function Search() {
	const classes = useStyles();
	return (
		<>
			<div id="searchHeaderContainer" className={classes.headerContainer}>
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
			<div className={classes.resultsContainer}>
				<Typography variant="h5">Results</Typography>
				<Container className={classes.bookContainer}>
					<div className={classes.bookHeader}>
						<div>
							<Typography variant="h5">Book Title</Typography>
							<Typography variant="caption">Brief description</Typography>
							<Typography variant="body1">Written By: John Doe</Typography>
						</div>
						<div>
							<Button
								variant="outlined"
								color="secondary"
								className={classes.resultButton}
							>
								View
							</Button>
							<Button
								variant="outlined"
								color="secondary"
								className={classes.resultButton}
							>
								Save
							</Button>
						</div>
					</div>
					<div className={classes.bookDetails}>
						<div>
							<img src="https://via.placeholder.com/200" alt="" />
						</div>
						<div>
							<Typography variant="body2" className={classes.bookSummary}>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
								deserunt molestias veritatis corrupti sequi nulla, ipsum
								molestiae suscipit porro nemo asperiores laborum, id illo.
								Architecto, modi error. Perspiciatis dicta tempora voluptas
								accusamus veritatis laudantium eum repellat, vero cumque? Minima
								iusto modi rem possimus similique facere tenetur veritatis
								accusamus, eveniet excepturi aut. Error atque laborum quos? Unde
								laudantium non ducimus quos consequatur deserunt sed nisi
								deleniti, molestias quod cum quidem eaque, nostrum dolorem
								incidunt esse. Quaerat ab nesciunt voluptas enim quae excepturi,
								quibusdam sequi quod porro neque ea dolor. Corporis culpa velit
								voluptatum cumque voluptate nemo ea magnam voluptates dolorum
								eum!
							</Typography>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}
