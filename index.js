/**
 * Created by Administrator on 2017/1/10 0010.
 */
import React from 'react';
import {
	render
} from 'react-dom';


import App from './app';
import Index from './views/index/index';
import Search from './views/search/search';
import FundDiagnosis from './views/fundDiagnosis/fundDiagnosis';
import {
	Router,
	Route,
	IndexRoute,
	hashHistory
} from 'react-router';


render((
	<Router history={hashHistory}>
        <Route path="/" component={App}>
        	<IndexRoute  component={Index}/>
			<Route path="search" component={Search}/>
	        <Route path="fundDiagnosis" component={FundDiagnosis}/>
        </Route>
    </Router>

), document.getElementById('app'));