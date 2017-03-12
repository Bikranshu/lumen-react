import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

class FlashMessage extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const type = this.props.message.type;
        const text = this.props.message.text;
        
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