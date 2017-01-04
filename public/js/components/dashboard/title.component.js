import React, { Component } from 'react';

class Title extends Component {
    render(){
        return (
                <section className="content-header">
                    <h1>Dashboard</h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active">Dashboard</li>
                    </ol>
                </section>
        );
    }
}

export default Title