import React, {Component, PropTypes} from 'react';

// Import custom components
import Header from './header.component';
import Body from './body.component';

class Table extends Component {

    componentDidMount() {
        let jqueryTable = $('#' + this.props.tableId);
        let self = this;
        jqueryTable.dataTable({
            "oLanguage": {"sSearch": ""},
            "aaSorting": [[1, "desc"]],
            "aoColumnDefs": [
                {'bSortable': false, 'aTargets': [0, 5]}
            ],
            "fnDrawCallback": function () {
                self.forceUpdate();
            },
            "bDestroy": true
        });

    }

    componentDidUpdate() {
        let jqueryTable = $('#' + this.props.tableId);
        jqueryTable.dataTable({
            "oLanguage": {"sSearch": ""},
            "aaSorting": [[1, "desc"]],
            "aoColumnDefs": [
                {'bSortable': false, 'aTargets': [0, 5]}
            ],
            "bDestroy": true
        });
    }

    componentWillUnmount() {
        return false;
    }


    static propTypes = {
        data: PropTypes.array,
        columns: PropTypes.array,
        tableClassName: PropTypes.string,
        tableId: PropTypes.string,
    };

    static defaultProps() {
        return {
            data: [],
            tableClassName: 'table table-bordered table-striped',
            tableId: 'product',
        }
    }

    render() {

        const {columns, data, tableId, tableClassName} = this.props;

        return (
            <table id={tableId} className={tableClassName}>
                <Header columns={columns}/>
                <Body columns={columns} data={data}/>
            </table>
        );
    }
}

export default Table