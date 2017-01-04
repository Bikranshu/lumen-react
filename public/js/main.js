import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import routing components
import {hashHistory, Router, Route, IndexRoute} from 'react-router';

// Import custom components
import App from './components/app.component';
import NotFoundPage from './components/error/not-found.component';
import Login from './components/login/login.component';
import Dashboard from './components/dashboard/dashboard.component';
import Product from './components/product/product.component';
import store from './store/store';

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Login}/>
            <Route path="/dashboard" component={App}>
                <IndexRoute component={Dashboard} />
                <Route path="/products" component={Product}/>
            </Route>
            <Route path="*" component={NotFoundPage} />
        </Router>
    </Provider>,
    document.getElementById('root-container')
);