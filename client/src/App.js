import 'fontsource-roboto';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Saved from './pages/Saved';
import Search from './pages/Search';

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Header />
				<div>
					<Switch>
						<Route exact path="/" component={Search} />
						<Route exact path="/saved" component={Saved} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
