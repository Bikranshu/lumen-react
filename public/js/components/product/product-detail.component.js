import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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

class ProductDetail extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.params.id) {
            this.props.actions.fetchById(Common.PRODUCT, this.props.params.id);
        }
    }

    componentWillUnmount() {
        this.props.actions.clearSelectedItem(Common.PRODUCT);
        this.props.actions.apiClearState();
    }

    render() {

        const status = this.props.selectedItem.product.status === 0 ? 'Open' : 'Close';

        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="box box-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">Detail Product:</h3>
                        </div>
                        <div className="box-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <dl className="dl-horizontal">
                                        <dt>Code:</dt>
                                        <dd>{this.props.selectedItem.product.code}</dd>
                                    </dl>
                                </div>
                                <div className="col-sm-6">
                                    <dl className="dl-horizontal">
                                        <dt>Name:</dt>
                                        <dd>{this.props.selectedItem.product.name}</dd>
                                    </dl>
                                </div>
                                <div className="col-sm-6">
                                    <dl className="dl-horizontal">
                                        <dt>Description:</dt>
                                        <dd>{this.props.selectedItem.product.description}</dd>
                                    </dl>
                                </div>
                                <div className="col-sm-6">
                                    <dl className="dl-horizontal">
                                        <dt>Created By:</dt>
                                        <dd>{this.props.selectedItem.product.created_by}</dd>
                                    </dl>
                                </div>
                                <div className="col-sm-6">
                                    <dl className="dl-horizontal">
                                        <dt>Status:</dt>
                                        <dd>{status}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

/**
 * Map the state to props.
 */
function mapStateToProps(state) {
    return {
        selectedItem: state.crud.selectedItem,
        apiState: state.api
    }
}

/**
 * Map the actions to props.
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(_.assign({}, crudAction, apiAction), dispatch)
    }
}

/**
 * Connect the component to the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)