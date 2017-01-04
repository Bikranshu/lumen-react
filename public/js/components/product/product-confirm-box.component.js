import React, { Component } from 'react';

class ProductConfirmBox extends Component {
    render(){
        return (
                <div className="modal fade" id="product-confirm-modal" tabIndex="1" role="dialog" aria-labelledby="confirm-modal-label" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content confirm-modal-box-small">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h4 className="modal-title" id="myModalLabel">Delete</h4>
                            </div>

                            <div className="modal-body">
                                <input id="product-id" value="" type="hidden"/>
                                <p>Are you sure you want to delete?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="product-delete-yes-btn btn btn-primary"><span className="glyphicon glyphicon-ok-sign"></span>&nbsp;Yes</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span>&nbsp;No</button>
                            </div>

                        </div>
                    </div>
                </div>
        );
    }
}

export default ProductConfirmBox