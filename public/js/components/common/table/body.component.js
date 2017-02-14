import React, {Component, PropTypes} from 'react';

class Body extends Component {

    constructor(props) {
        super(props);
    }

    handleItem(id, event) {
        event.preventDefault();
        $("#"+ this.props.options.model +"-id").val(id);

    }

    render() {
        let columns = this.props.columns, // [{displayName, attribute}]
            data = this.props.data,
            options = this.props.options;

        let _this = this;

        return (
            <tbody>
            {
                data.map(function (item) {
                    // handle the column data within each row
                    let cells = columns.map(function (colData, index) {
                        // colData.attribute might be "first_name"
                        if (colData.attribute == '') {
                            return <td style={{textAlign: "center"}} key={index}>
                                <a href={"/#/" + options.model + "/" + item.id + "/view"} title="View"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
                                <a href={"/#/" + options.model + "/" + item.id} title="Edit"><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;
                                <a href="javascript:void(0)" onClick={_this.handleItem.bind(_this, item.id)}
                                   title="Remove" data-toggle='modal' data-target={'#' + options.model+ '-box-modal'}><i className="glyphicon glyphicon-trash"></i></a>
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