import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class FlashMessage extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const {message} = this.props;
        const type = message.type;
        const text = message.text;
        
        if(!text){
            return null;
        }
        return (
            <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'error',
                'alert-warning': type === 'warning',
                'alert-info': type === 'info'
            })}>
                {text}
            </div>
        );
    }
}

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired
};

export default FlashMessage;