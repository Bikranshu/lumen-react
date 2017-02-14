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

class ProductModelBox extends Component {

    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(event) {
        event.preventDefault();
        let id = $("#products-id").val();
        this.props.actions.destroyItem(Common.PRODUCT, id);
        $("#products-box-modal").modal('hide');

    }

    render() {
        return (
            <div className="modal fade" id="products-box-modal" tabIndex="1" role="dialog"
                 aria-labelledby="confirm-modal-label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content confirm-modal-box-small">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title" id="myModalLabel">Delete</h4>
                        </div>

                        <div className="modal-body">
                            <input id="products-id" value="" type="hidden"/>
                            <p>Are you sure you want to delete?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="product-delete-yes-btn btn btn-primary"
                                    onClick={this.handleRemove}><span
                                className="glyphicon glyphicon-ok-sign"></span>&nbsp;Yes
                            </button>
                            <button type="button" className="btn btn-default" data-dismiss="modal"><span
                                className="glyphicon glyphicon-remove"></span>&nbsp;No
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
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

export default connect(null, mapDispatchToProps)(ProductModelBox)