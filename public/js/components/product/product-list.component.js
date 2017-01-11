import React, {Component} from 'react';

// Import custom components
import Table from '../common/table/table.component';

class ProductListBox extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="box box-info">
                        <div className="box-header">
                            <h3 className="box-title">Product List:</h3>
                            <div className="pull-right box-tools">
                                <a href="#" className="btn btn-primary" role="button" data-toggle="modal"
                                   data-target="#product-add-modal" title="Add Product"><i
                                    className="glyphicon glyphicon-plus"></i>&nbsp;Add Product</a>
                            </div>
                        </div>
                        <div className="box-body">

                            <Table data={this.props.data} default={tableDefaults}/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const tableDefaults = {
    tableId: 'product',
    tableClassName: 'table table-bordered table-striped',
};

export default ProductListBox