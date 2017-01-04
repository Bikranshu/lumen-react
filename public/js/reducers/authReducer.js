//libraries
import _ from 'lodash';

// Import constants
import * as ActionType from '../constants/actionType';

var initialState = {
        token: null,
        isAuthenticated: false,
};

export default function (state , action) {
    state = state || initialState;

    switch (action.type) {
        case ActionType.LOG_IN_SUCCESS:
            var newState = _.cloneDeep(state);
            newState.isAuthenticated = true;
            newState.token = action.token;
            return newState;

        case ActionType.LOG_IN_FAILURE:
            var newState = _.cloneDeep(state);
            newState.isAuthenticated = false;
            newState.token = null;
            return newState;

        case ActionType.LOG_OUT:
            var newState = _.cloneDeep(state);
            newState.isAuthenticated = false;
            newState.token = null;
            return newState;

        default:
            return state;
    }
}