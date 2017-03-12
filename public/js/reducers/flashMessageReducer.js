//libraries
import _ from 'lodash';

/**
 * Import actionType.
 */
import {ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE} from '../constants/actionType';

var initialState = {
    message: {
        type: null,
        text: null,
    }
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
    state = state || initialState;
    let newState;
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            newState = _.cloneDeep(state);
            newState.message['type'] = action.message.type;
            newState.message['text'] = action.message.text;
            return newState;

        case REMOVE_FLASH_MESSAGE:
            newState = _.cloneDeep(state);
            newState.message['type'] = null;
            newState.message['text'] = null;
            return newState;

        default:
            return state;
    }
}