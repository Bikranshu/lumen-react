import React, {Component, PropTypes} from 'react';


const renderSelect = ({input, label, data, meta: {touched, error, invalid, warning}, children}) => (

    <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
        <label className="col-md-4 control-label">{label}:</label>
        <div className="col-md-8">
            <select {...input} className="form-control" value={data}>
                {children}
            </select>
            <div className="help-block">
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    </div>

);

renderSelect.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    data: PropTypes.string,
    meta: PropTypes.object,
    children: React.PropTypes.array.isRequired
};

export default renderSelect;