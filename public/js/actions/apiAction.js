// Import actionType constants
import * as ActionType from '../constants/actionType';

/**
 * These are the actions dispatched whenever the API is used
 */

// Everytime an API request is made, this action gets called
export function apiRequest() {
    return {
        type: ActionType.API_REQUEST
    }
}

// Everytime a response is received, this action gets called
export function apiResponse() {
    return {
        type: ActionType.API_RESPONSE
    }
}

// Everytime a component unmounts, this action gets called
export function apiClearState() {
    return {
        type: ActionType.API_CLEAR_STATE
    }
}