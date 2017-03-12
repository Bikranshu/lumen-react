import React, {Component, PropTypes} from 'react';


const renderTextArea = ({input, label, data, meta: {touched, error, invalid, warning}, cols, rows}) => (
    <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
        <label className="col-md-4 control-label">{label}</label>
        <div className="col-md-8">
            <textarea {...input} className="form-control" placeholder={label} value={data} cols={cols} rows={rows}/>
            <div className="help-block">
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    </div>
);

renderTextArea.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    data: PropTypes.string,
    meta: PropTypes.object,
    cols: PropTypes.string.isRequired,
    rows: PropTypes.string.isRequired,
};

export default renderTextArea;