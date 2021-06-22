import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../assets/useStyles';

export default function Nav() {
	const classes = useStyles();
	return (
		<div id="nav" className={classes.root}>
			<AppBar position="static" color="secondary">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						<Link to="/" className={classes.navBrand}>
							Google Books Search
						</Link>
						<Typography variant="subtitle1" component="span">
							<Link to="/" className={classes.link}>
								Search
							</Link>
							<Link to="/saved" className={classes.link}>
								Saved
							</Link>
						</Typography>
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
