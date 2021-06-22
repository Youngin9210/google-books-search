import 'fontsource-roboto';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Saved from './pages/Saved';
import Search from './pages/Search';

function App() {
	const [currentPage, setCurrentPage] = useState('');
	useEffect(() => {
		window.location.pathname === '/'
			? setCurrentPage('search')
			: setCurrentPage('saved');
		console.log(currentPage);
		return;
	}, [currentPage]);
	return (
		<Router>
			<div>
				<Nav />
				<Header />
				<div>
					<Switch>
						<Route
							exact
							path="/"
							component={Search}
							currentPage={currentPage}
						/>
						<Route
							exact
							path="/saved"
							component={Saved}
							currentPage={currentPage}
						/>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
