import React, {Component, PropTypes} from 'react';


const renderRadioGroup = ({input, label, type, data, meta: {touched, error, invalid, warning}}) => (

    <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
        <label htmlFor={input.name}
               className="col-md-4 control-label">{label}:</label>
        <div className="col-md-8">
            <div className="col-sm-7">
                <label>
                    <input {...input} type={type} value="0" className="flat-red" id={input.name} checked={data == 0}/>
                    Open
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label>
                    <input {...input} type={type} value="1" className="flat-red" id={input.name} checked={data == 1}/>
                    Close
                </label>
                <div className="help-block">
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        </div>
    </div>

);

renderRadioGroup.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    data: PropTypes.number,
    meta: PropTypes.object,
};

export default renderRadioGroup;