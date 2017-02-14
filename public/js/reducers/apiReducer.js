//libraries
import _ from 'lodash';

// Import constants
import * as ActionType from '../constants/actionType';

var initialState = {
    isRequesting: false,
    numberOfRequests: 0
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
    state = state || initialState;
    let newState;

    switch (action.type) {
        case ActionType.API_REQUEST:
            newState = _.cloneDeep(state);
            newState.isRequesting = true;
            newState.numberOfRequests++;
            return newState;

        case ActionType.API_RESPONSE:
            newState = _.cloneDeep(state);
            newState.numberOfRequests--;
            //set it false only if all responses are received
            if (newState.numberOfRequests <= 0) {
                newState.isRequesting = false;
            }
            return newState;

        case ActionType.API_CLEAR_STATE:
            newState = _.cloneDeep(state);
            newState.numberOfRequests = 0;
            newState.isRequesting = false;
            return newState;

        default:
            return state;
    }
}