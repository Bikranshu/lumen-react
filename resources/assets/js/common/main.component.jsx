import React, {Component} from 'react';

class Main extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Krishna Timilsina</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="/#">Home <span className="sr-only">(current)</span></a></li>
                                <li><a href="/#/about">About</a></li>
                                <li><a href="/#/portfolio">Portfolio</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main