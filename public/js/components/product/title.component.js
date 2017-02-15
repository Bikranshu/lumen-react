import React, { Component } from 'react';
import {IndexLink} from 'react-router';

class Title extends Component {
    render(){
        return (
                <section className="content-header">
                    <h1>Product</h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active">
                            <IndexLink to={'/products'}>Product</IndexLink>
                        </li>
                    </ol>
                </section>
        );
    }
}

export default Title