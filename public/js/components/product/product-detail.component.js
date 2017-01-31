import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//libraries
import _ from 'lodash';

/**
 * Import all constants as an object.
 */
import * as ActionType from '../../constants/actionType';
import Message from '../../constants/message';
import Common from '../../constants/common';

/**
 * Import all apiAction and crudAction as an object.
 */
import * as apiAction from '../../actions/apiAction';
import * as crudAction from '../../actions/crudAction';

// Import custom components
import DataTable from '../common/table/table.component';
import ProductConfirmBox from './product-confirm-box.component';

class ProductDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {

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
                                        <dd>Krishna Timilsina</dd>
                                    </dl>
                                </div>
                                <div className="col-sm-6">
                                    <dl className="dl-horizontal">
                                        <dt>Name:</dt>
                                        <dd>fsdfsdf</dd>
                                    </dl>
                                </div>
                                <div className="col-sm-6">
                                    <dl className="dl-horizontal">
                                        <dt>Description:</dt>
                                        <dd>fsdfsdf</dd>
                                    </dl>
                                </div>
                                <div className="col-sm-6">
                                    <dl className="dl-horizontal">
                                        <dt>Created By:</dt>
                                        <dd>fsdfsdf</dd>
                                    </dl>
                                </div>
                                <div className="col-sm-6">
                                    <dl className="dl-horizontal">
                                        <dt>Status:</dt>
                                        <dd>fsdfsdf</dd>
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

export default ProductDetail