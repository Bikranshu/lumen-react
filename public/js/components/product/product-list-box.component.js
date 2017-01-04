import React, { Component } from 'react';

class ProductListBox extends Component {
    render(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="box box-info">
                        <div className="box-header">
                            <h3 className="box-title">Product List:</h3>
                            <div className="pull-right box-tools">
                                <a href="#" className="btn btn-primary" role="button" data-toggle="modal" data-target="#product-add-modal" title="Add Product"><i className="glyphicon glyphicon-plus"></i>&nbsp;Add Product</a>
                            </div>
                        </div>
                        <div className="box-body">
                            <table id="product" className="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th style={{textAlign: "center"}}>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Trident</td>
                                    <td>Internet
                                        Explorer 4.0
                                    </td>
                                    <td>Win 95+</td>
                                    <td> 4</td>
                                    <td>X</td>
                                    <td style={{textAlign: "center"}}>
                                        <a href="javascript:void(0)" title="View" className="view-btn"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Edit" className="edit-btn"><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Remove" className="delete-btn" data-toggle='modal' data-target='#product-confirm-modal'><i className="glyphicon glyphicon-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>Internet
                                        Explorer 5.0
                                    </td>
                                    <td>Win 95+</td>
                                    <td>5</td>
                                    <td>C</td>
                                    <td style={{textAlign: "center"}}>
                                        <a href="javascript:void(0)" title="View" className="view-btn"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Edit" className="edit-btn"><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Remove" className="delete-btn" data-toggle='modal' data-target='#product-confirm-modal'><i className="glyphicon glyphicon-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>Internet
                                        Explorer 6
                                    </td>
                                    <td>Win 98+</td>
                                    <td>6</td>
                                    <td>A</td>
                                    <td style={{textAlign: "center"}}>
                                        <a href="javascript:void(0)" title="View" className="view-btn"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Edit" className="edit-btn"><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Remove" className="delete-btn" data-toggle='modal' data-target='#product-confirm-modal'><i className="glyphicon glyphicon-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>Internet Explorer 7</td>
                                    <td>Win XP SP2+</td>
                                    <td>7</td>
                                    <td>A</td>
                                    <td style={{textAlign: "center"}}>
                                        <a href="javascript:void(0)" title="View" className="view-btn"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Edit" className="edit-btn"><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Remove" className="delete-btn" data-toggle='modal' data-target='#product-confirm-modal'><i className="glyphicon glyphicon-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trident</td>
                                    <td>AOL browser (AOL desktop)</td>
                                    <td>Win XP</td>
                                    <td>6</td>
                                    <td>A</td>
                                    <td style={{textAlign: "center"}}>
                                        <a href="javascript:void(0)" title="View" className="view-btn"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Edit" className="edit-btn"><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Remove" className="delete-btn" data-toggle='modal' data-target='#product-confirm-modal'><i className="glyphicon glyphicon-trash"></i></a>
                                    </td>
                               </tr>
                                <tr>
                                    <td>Presto</td>
                                    <td>Opera 8.5</td>
                                    <td>Win 95+ / OSX.2+</td>
                                    <td>-</td>
                                    <td>A</td>
                                    <td style={{textAlign: "center"}}>
                                        <a href="javascript:void(0)" title="View" className="view-btn"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Edit" className="edit-btn"><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Remove" className="delete-btn" data-toggle='modal' data-target='#product-confirm-modal'><i className="glyphicon glyphicon-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Presto</td>
                                    <td>Opera 9.0</td>
                                    <td>Win 95+ / OSX.3+</td>
                                    <td>-</td>
                                    <td>A</td>
                                    <td style={{textAlign: "center"}}>
                                        <a href="javascript:void(0)" title="View" className="view-btn"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Edit" className="edit-btn"><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Remove" className="delete-btn" data-toggle='modal' data-target='#product-confirm-modal'><i className="glyphicon glyphicon-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Presto</td>
                                    <td>Nintendo DS browser</td>
                                    <td>Nintendo DS</td>
                                    <td>8.5</td>
                                    <td>C/A<sup>1</sup></td>
                                    <td style={{textAlign: "center"}}>
                                        <a href="javascript:void(0)" title="View" className="view-btn"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Edit" className="edit-btn"><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Remove" className="delete-btn" data-toggle='modal' data-target='#product-confirm-modal'><i className="glyphicon glyphicon-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Other browsers</td>
                                    <td>All others</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>U</td>
                                    <td style={{textAlign: "center"}}>
                                        <a href="javascript:void(0)" title="View" className="view-btn"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Edit" className="edit-btn"><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;
                                        <a href="javascript:void(0)" title="Remove" className="delete-btn" data-toggle='modal' data-target='#product-confirm-modal'><i className="glyphicon glyphicon-trash"></i></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductListBox