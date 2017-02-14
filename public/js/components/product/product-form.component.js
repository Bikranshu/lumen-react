import React, {Component, PropTypes} from 'react';
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
import * as flashMessage  from '../../actions/flashMessage';

class ProductForm extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // static defaultProps = {
    //     maxLoops: 10
    // };
    //
    // static propTypes = {
    //     maxLoops: PropTypes.number.isRequired,
    // };

    componentWillMount() {
        if (this.props.params.id) {
            this.props.actions.fetchById(Common.PRODUCT, this.props.params.id);
        }
    }

    componentWillUnmount() {
        this.props.actions.clearSelectedItem(Common.PRODUCT);
        this.props.actions.apiClearState();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.actions.submitForm(Common.PRODUCT, this.props.selectedItem.product, this.props.params.id);

    }

    handleChange(event) {
        var key = event.target.name;
        var value = event.target.value;
        this.props.actions.updateSelectedItem(Common.PRODUCT, key, value);
    }

    render() {

        const status = this.props.selectedItem.product.status || '0';

        return (

            <div className="row">
                <div className="col-xs-12">
                    <div className="box box-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">{(this.props.params.id) ? 'Edit Product' : 'Add Product'}</h3>
                        </div>
                        <form className="form-horizontal" onSubmit={this.handleSubmit}>
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <div className="form-group">
                                            <label htmlFor="account-id"
                                                   className="col-md-4 control-label">Code:</label>
                                            <div className="col-md-8">
                                                <input
                                                    type="text"
                                                    name="code"
                                                    className="form-control"
                                                    placeholder="Code"
                                                    value={this.props.selectedItem.product.code}
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="owner-id"
                                                   className="col-md-4 control-label">Status:</label>
                                            <div className="col-md-8">
                                                <div className="col-sm-7">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="status"
                                                            value="0"
                                                            className="flat-red"
                                                            checked={status == 0}
                                                            onChange={this.handleChange}
                                                        />
                                                        Open
                                                    </label>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="status"
                                                            value="1"
                                                            className="flat-red"
                                                            checked={status == 1}
                                                            onChange={this.handleChange}
                                                        />
                                                        Close
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-6">
                                        <div className="form-group">
                                            <label htmlFor="name"
                                                   className="col-md-4 control-label">Name:</label>
                                            <div className="col-md-8">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    value={this.props.selectedItem.product.name}
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description"
                                                   className="col-md-4 control-label">Description:</label>
                                            <div className="col-md-8">
                                                <textarea
                                                    placeholder="Description"
                                                    className="form-control"
                                                    name="description"
                                                    cols="40"
                                                    rows="3"
                                                    value={this.props.selectedItem.product.description}
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="col-xs-6">
                                    <div className="form-group">
                                        <button type="submit"
                                                className="btn btn-primary">{(this.props.params.id) ? 'Update' : 'Save'}</button>
                                    </div>
                                </div>
                            </div>
                        </form>
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

/**
 * Connect the component to the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)