import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 2.3.7
                </div>
                <strong>Copyright &copy; 2014-2016 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights
                reserved.
            </footer>
        );
    }
}

export default Footer