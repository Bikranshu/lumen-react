import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import cookie from 'react-cookie';

// Import higher order components
import RequireAuth from './components/auth/authenticate.component';

// Import routing components
import {hashHistory, Router, Route, IndexRoute} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Import custom components
import App from './components/app.component';
import NotFoundPage from './components/error/not-found.component';
import Login from './components/login/login.component';
import Dashboard from './components/dashboard/dashboard.component';
import Product from './components/product/product.component';
import ProductList from './components/product/product-list.component';
import ProductForm from './components/product/product-form.component';
import ProductDetail from './components/product/product-detail.component';
import store from './store/store';

/**
 * Import all constants as an object.
 */
import * as ActionType from './constants/actionType';

const history = syncHistoryWithStore(hashHistory, store);
const token = cookie.load('token');
if (token) {
    // Update application state. User has token and is probably authenticated
    store.dispatch({
        type: ActionType.LOG_IN_SUCCESS,
        payload: token
    });
}

render(
    <Provider store={store}>
        <Router  history={history}>
            <Route path="/" component={Login}/>
            <Route path="/dashboard" component={App}>
                <IndexRoute component={RequireAuth(Dashboard)} />
                <Route path="/products" component={RequireAuth(Product)}>
                    <IndexRoute component={ProductList}/>
                    <Route path="new" component={ProductForm}/>
                    <Route path=":id" component={ProductForm}/>
                    <Route path=":id/view" component={ProductDetail}/>
                </Route>
            </Route>
            <Route path="*" component={NotFoundPage} />
        </Router>
    </Provider>,
    document.getElementById('root-container')
);