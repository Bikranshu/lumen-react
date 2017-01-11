import React, {Component} from 'react';

// Import custom components
import Table from '../common/table/table.component';

class ProductList extends Component {

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

                            <Table
                                tableId={tableDefaults.tableId}
                                tableClassName={tableDefaults.tableClassName}
                                columns={columns}
                                data={this.props.data}
                            />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const columns = [{
    title: 'ID', accessor: 'id'
}, {
    title: 'Code', accessor: 'code'
}, {
    title: 'Name', accessor: 'name'
}, {
    title: 'Description', accessor: 'description'
}, {
    title: 'Status', accessor: 'status'
}, {
    title: 'Actions', accessor: '',
}];

const tableDefaults = {
    tableId: 'product',
    tableClassName: 'table table-bordered table-striped',
};


export default ProductList