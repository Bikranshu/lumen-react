import React, { Component } from 'react';

// Import custom components
import Header from './common/header/header.component';
import Sidebar from './common/sidebar/sidebar.component';
import Footer from './common/footer/footer.component';

class App extends Component {
    render(){
        return (
            <div className="wrapper">
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                   {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default App