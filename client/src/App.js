import Container from '@material-ui/core/Container';
import 'fontsource-roboto';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Saved from './Saved/index';
import Search from './Search/index';

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Container>
					<Switch>
						<Route exact path={['/', '/search']} component={Search} />
						<Route exact path="/saved" component={Saved} />
					</Switch>
				</Container>
			</div>
		</Router>
	);
}

export default App;
