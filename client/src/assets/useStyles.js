import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
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
	headerContainer: {
		padding: '4rem 0',
		width: '100%',
		textAlign: 'center',
		background: 'lightgrey',
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
		color: 'black',
		display: 'flex',
		flexWrap: 'wrap',
		margin: '1rem 0',
	},
	searchInput: {
		margin: '1.5rem 0',
	},
	searchButton: {
		marginLeft: 'auto',
	},
	resultsContainer: {
		padding: '2rem',
		color: 'black',
		display: 'flex',
		margin: '1rem 0',
		flexDirection: 'column',
	},
	resultButton: {
		margin: '.25rem',
	},
	bookContainer: {
		border: '1px solid black',
		padding: '1rem',
		margin: '1rem',
		// width: '100%',
	},
	bookHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '1rem',
	},
	bookDetails: {
		display: 'flex',
		alignItems: 'center',
	},
	bookSummary: {
		padding: '1rem',
	},
}));

export default useStyles;
