import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	navBrand: {
		marginRight: '1rem',
		textDecoration: 'none',
		color: 'inherit',
	},
	link: {
		marginLeft: '.75rem',
		textDecoration: 'none',
		color: 'inherit',
	},
}));

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
							<Link to="/search" className={classes.link}>
								Search
							</Link>
							<Link to="/saved" className={classes.link}>
								Saved
							</Link>
						</Typography>
					</Typography>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
