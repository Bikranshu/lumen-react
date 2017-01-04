import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//libraries
import _ from 'lodash';

// Import constants
import ActionType from '../../constants/actionType';
import Message from '../../constants/message';
import Common from '../../constants/common';

// Import apiAction
import * as apiAction from '../../actions/apiAction';
import * as crudAction from '../../actions/crudAction';

// Import apiService
import apiService from '../../services/apiService';

// Import custom components
import Title from './title.component';
import ProductListBox from './product-list-box.component';
import ProductConfirmBox from './product-confirm-box.component';

class Product extends Component {
    static defaultProps() {
        return {
            offset: parseInt(Common.OFFSET)
        }
    }

    componentWillMount() {
        this.fetchData();
    }

    componentWillUnmount() {

    }

    fetchData() {
        this.props.actions.fetchAll(Common.PRODUCT);
    }

    render() {
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


function mapStateToProps(state) {
    return {
        product: state.crud.product,
        pagination: state.crud.pagination,
        apiState: state.api
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(_.assign({}, crudAction, apiAction), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);