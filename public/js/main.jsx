import React, { Component } from 'react';
import { render } from 'react-dom';

// Import routing components
import {hashHistory, Router, Route, IndexRoute} from 'react-router';

// Import custom components
import App from './components/app.component.jsx'
import Dashboard from './components/dashboard/dashboard.component.jsx'
import Product from './components/product/product.component.jsx'

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="/products" component={Product}/>
        </Route>
    </Router>,
    document.getElementById('dashboard-container')
);