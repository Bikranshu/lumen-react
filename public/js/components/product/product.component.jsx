import React, { Component } from 'react';

// Import custom components
import Title from './title.component.jsx'
import ProductListBox from './product-list-box.component.jsx'
import ProductConfirmBox from './product-confirm-box.component.jsx'

class Product extends Component {
    render(){
        return (
            <div>
                <Title />

                <section className="content">

                     <ProductListBox />

                     <ProductConfirmBox />

                </section>

            </div>
        );
    }
}

export default Product