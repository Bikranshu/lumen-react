import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {IndexLink} from 'react-router';

//libraries
import _ from 'lodash';

/**
 * Import all constants as an object.
 */
import Common from '../../constants/common';

/**
 * Import all apiAction and crudAction as an object.
 */
import * as apiAction from '../../actions/apiAction';
import * as crudAction from '../../actions/crudAction';
import * as flashMessage  from '../../actions/flashMessage';

// Import custom components
import DataTable from '../common/table/table.component';
import ProductModelBox from './product-model-box.component';
import FlashMessage from '../common/flash/message.component';

class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        data: PropTypes.array.isRequired,
        columns: PropTypes.array.isRequired,
        options: PropTypes.object.isRequired,
    };

    componentWillMount() {
        this.fetchData();
    }

    componentWillUnmount() {
        this.props.actions.clearList(Common.PRODUCT);
        this.props.actions.removeFlashMessage();
        this.props.actions.apiClearState();
    }

    fetchData() {
        this.props.actions.fetchAll(Common.PRODUCT);
    }

    render() {

        let data = this.props.products;
        let message = this.props.message;

        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="box box-primary">
                        <div className="box-header">
                            <h3 className="box-title">Product List:</h3>
                            <div className="pull-right box-tools">
                                <IndexLink to={'/products/new'} className="btn btn-primary" title="Add Product"><i
                                    className="glyphicon glyphicon-plus"></i>&nbsp;Add Product
                                </IndexLink>
                            </div>
                        </div>

                        <FlashMessage message={message} />

                        <div className="box-body">
                            {data.length > 0 && <DataTable columns={columns} data={data} options={options}/>}
                        </div>

                    </div>
                </div>

                <ProductModelBox />

            </div>

        );
    }
}

/**
 * Map the state to props.
 */
function mapStateToProps(state) {
    return {
        products: state.crud.products,
        apiState: state.api,
        message: state.flash.message
    }
}

/**
 * Map the actions to props.
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(_.assign({}, crudAction, apiAction, flashMessage), dispatch)
    }
}

const columns = [
    {displayName: 'ID', attribute: 'id'},
    {displayName: 'Code', attribute: 'code'},
    {displayName: 'Name', attribute: 'name'},
    {displayName: 'Description', attribute: 'description'},
    {displayName: 'Status', attribute: 'status'},
    {displayName: 'Actions', attribute: ''}
];

const options = {model: 'products'};

/**
 * Connect the component to the Redux store.
 */

export default  connect(mapStateToProps, mapDispatchToProps)(ProductList)