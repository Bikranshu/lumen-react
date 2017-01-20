import React, {Component} from 'react';

// Import custom components
import Title from './title.component';

class Product extends Component {

    render() {
        return (
            <div>
                <Title />

                <section className="content">

                    {this.props.children}

                </section>

            </div>
        );
    }
}

export default Product;