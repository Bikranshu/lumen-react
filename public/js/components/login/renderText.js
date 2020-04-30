import React from 'react';
import PropTypes from 'prop-types';

const renderText = ({input, label, type, meta: {touched, error, invalid, warning}, children}) => (

    <div className={`form-group has-feedback ${touched && invalid ? 'has-error' : ''}`}>
        <input {...input} type={type} className="form-control" placeholder={label}/>
        {children}
        <div className="help-block">
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>

);

renderText.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    meta: PropTypes.object,
    children: PropTypes.node.isRequired
};

export default renderText;