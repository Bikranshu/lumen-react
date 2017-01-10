//libraries
import _ from 'lodash';

/**
 * Import all constants as an object.
 */
import * as ActionType from '../constants/actionType';

var initialState = {
        token: null,
        isAuthenticated: false,
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state , action) {
    state = state || initialState;

    switch (action.type) {
        case ActionType.LOG_IN_SUCCESS:
            return _.assign({}, state, {
                isAuthenticated: true,
                token: action.payload,
            });

        case ActionType.LOG_IN_FAILURE:
            return _.assign({}, state, {
                isAuthenticated: false,
                token: null,
            });

        case ActionType.LOG_OUT:
            return _.assign({}, state, {
                isAuthenticated: false,
                token: null,
            });

        default:
            return state;
    }
}