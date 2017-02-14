import React, {Component, PropTypes} from 'react';

// Import custom components
import Header from './header.component';
import Body from './body.component';

class Table extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Get the DOM node and store the jQuery element reference
        this.$node = $(this.refs.datatable);
        this.$node.dataTable({
            "oLanguage": {"sSearch": ""},
            "aaSorting": [[1, "desc"]],
            "aoColumnDefs": [
                {'bSortable': false, 'aTargets': [0, 5]}
            ]
        });
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillUnmount() {
        // Clean up the mess when the component unmounts
        this.$node.dataTable({
            "oLanguage": {"sSearch": ""},
            "aaSorting": [[1, "desc"]],
            "aoColumnDefs": [
                {'bSortable': false, 'aTargets': [0, 5]}
            ],
            "bDestroy": true
        });
    }

    componentWillReceiveProps(nextProps) {
        // return this.props !== nextProps
        this.$node.dataTable({
            "oLanguage": {"sSearch": ""},
            "aaSorting": [[1, "desc"]],
            "aoColumnDefs": [
                {'bSortable': false, 'aTargets': [0, 5]}
            ],
            "bDestroy": true
        });
    }

    render() {

        return (
            <table ref="datatable" className="table table-bordered table-striped">
                <Header {...this.props}/>
                <Body {...this.props}/>
            </table>
        );
    }
}

export default Table