import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../assets/useStyles';

export default function Header() {
	const classes = useStyles();
	return (
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
	);
}
