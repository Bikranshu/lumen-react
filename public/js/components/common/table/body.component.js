import React, {Component} from 'react';

class Body extends Component {

    render() {
        let columns = this.props.columns, // [{displayName, attribute}]
            data = this.props.data,
            options = this.props.options;

        return (
            <tbody>
            {
                data.map(function (item) {
                    // handle the column data within each row
                    let cells = columns.map(function (colData, index) {
                        // colData.attribute might be "first_name"
                        if (colData.attribute == '') {
                            return <td style={{textAlign: "center"}} key={index}>
                                <a href={"/#/" + options.model + "/" + item.id + "/view"} title="View"
                                   className="view-btn"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
                                <a href={"/#/" + options.model + "/" + item.id} title="Edit" className="edit-btn"><i
                                    className="glyphicon glyphicon-pencil"></i></a>&nbsp;
                                <a href="javascript:void(0)" data-id={item.id} title="Remove" className="delete-btn"
                                   data-toggle='modal' data-target='#product-confirm-modal'><i
                                    className="glyphicon glyphicon-trash"></i></a>
                            </td>;
                        } else if (colData.attribute == 'status') {
                            const classNames = item[colData.attribute] === 0 ? "label label-success" : "label label-warning";
                            const status = item[colData.attribute] === 0 ? "Open" : "Close";
                            return <td key={index}><span className={classNames}>{status}</span></td>;
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