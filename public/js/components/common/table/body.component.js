import React, {Component} from 'react';

class Body extends Component {

    render() {
        let columns = this.props.columns, // [{title, accessor}]
            data = this.props.data;

        return (
            <tbody>
            {
                data.map(function (item) {
                    // handle the column data within each row
                    let cells = columns.map(function (colData) {
                        // colData.accessor might be "firstName"
                        if (colData.accessor == '') {
                            return <td style={{textAlign: "center"}}>
                                <a href="javascript:void(0)" title="View" className="view-btn"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
                                <a href="javascript:void(0)" title="Edit" className="edit-btn"><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;
                                <a href="javascript:void(0)" title="Remove" className="delete-btn" data-toggle='modal' data-target='#product-confirm-modal'><i className="glyphicon glyphicon-trash"></i></a>
                            </td>
                        } else {
                        return <td> {item[colData.accessor]} </td>;
                        }
                    })
                    return <tr key={item.id}> {cells} </tr>;
                })
            }
            </tbody>
        );
    }
}

export default Body