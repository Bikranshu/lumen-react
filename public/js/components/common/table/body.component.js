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
                    let cells = columns.map(function (colData, index) {
                        // colData.attribute might be "first_name"
                        if (colData.attribute == '') {
                            return <td style={{textAlign: "center"}} key={index}>
                                <a href="javascript:void(0)" title="View" className="view-btn"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
                                <a href="javascript:void(0)" title="Edit" className="edit-btn"><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;
                                <a href="javascript:void(0)" title="Remove" className="delete-btn" data-toggle='modal' data-target='#product-confirm-modal'><i className="glyphicon glyphicon-trash"></i></a>
                            </td>;
                        } else {
                            return <td key={index}>{item[colData.attribute]}</td>;
                        }
                    });
                    return <tr key={item.id}>{cells}</tr>;
                })
            }
            </tbody>
        );
    }
}

export default Body