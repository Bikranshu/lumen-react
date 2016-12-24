import React, { Component } from 'react';
import { render } from 'react-dom';

// Import routing components
import {hashHistory, Router, Route, IndexRoute} from 'react-router';

// Import custom components
import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './about/about.component.jsx'
import Portfolio from './portfolio/portfolio.component.jsx'

render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);