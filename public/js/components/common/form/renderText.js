import React, {Component, PropTypes} from 'react';


const renderText = ({input, label, type, data, meta: {touched, error, invalid, warning}}) => (

    <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
        <label className="col-md-4 control-label">{label}:</label>
        <div className="col-md-8">
            <input {...input} type={type} value={data} className="form-control" placeholder={label}/>
            <div className="help-block">
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    </div>

);

renderText.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    data: PropTypes.string,
    meta: PropTypes.object,
};

export default renderText;