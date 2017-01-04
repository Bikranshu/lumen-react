import React, { Component } from 'react';

// Import custom components
import Title from './title.component';
import BoxRowOne from './box-row-one.component';

class Dashboard extends Component {
    render(){
        return (
            <div>
                <Title />

                <section className="content">
                   <BoxRowOne />
                </section>

            </div>
        );
    }
}

export default Dashboard