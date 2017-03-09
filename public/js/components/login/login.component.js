import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

/**
 * Import all authService as an object.
 */
import * as authService from '../../services/authService';

import * as flashMessage  from '../../actions/flashMessage';

/**
 * Import custom components
 */
import FlashMessage from '../common/flash/message.component';

class Login extends Component {

    componentWillMount() {
        window.$('body').addClass('hold-transition login-page');
    }

    handleSubmit(e) {
        e.preventDefault();
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        this.props.actions.login({email, password});
    }

    render() {
        let message = this.props.message;

        return (
            <div className="login-box">
                <div className="login-logo">
                    <a href="#"><b>Admin</b>LTE</a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>

                    {message !== null && <FlashMessage message={message} />}

                    <form method="post" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email" ref="email"/>
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password" ref="password"/>
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <a href="#">I forgot my password</a>
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

/**
 * Map the state to props.
 */
function mapStateToProps(state) {
    return {
        token: state.auth.token,
        isAuthenticated: state.auth.isAuthenticated,
        message: state.flash.message
    }
}

/**
 * Map the actions to props.
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(_.assign({}, authService, flashMessage), dispatch)
    }
}

/**
 * Connect the component to the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Login)