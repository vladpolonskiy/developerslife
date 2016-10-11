import React from 'react';
import App from './containers/App';
import EntriesList from './containers/EntriesList';
import EntriesSingle from './containers/EntriesSingle';
import NotFound from './components/NotFound';
import {Route, IndexRedirect} from 'react-router';

export const routes = (
	<div>
		<Route path="/" component={App}>
			<IndexRedirect to="/entries" />
			<Route path="/entries" component={EntriesList} />
			<Route path="/entries/(:id)" component={EntriesSingle} />
		</Route>
		<Route path="*" component={NotFound} />
	</div>
);