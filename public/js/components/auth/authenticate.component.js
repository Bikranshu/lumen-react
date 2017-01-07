import React, {Component, PropTypes } from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {

    class Authenticate extends Component {

        static contextTypes = {
            router: PropTypes.object.isRequired
        };

        static propTypes = {
            isAuthenticated: PropTypes.bool.isRequired,
        };

        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.context.router.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
                this.context.router.push('/dashboard');
            }
        }


        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated
        };
    }

    return connect(mapStateToProps)(Authenticate);
}
