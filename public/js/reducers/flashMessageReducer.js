//libraries
import _ from 'lodash';

/**
 * Import actionType.
 */
import { FLASH_MESSAGE } from '../constants/actionType';

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

    switch (action.type) {
        case FLASH_MESSAGE:
            let newState = _.cloneDeep(state);
            newState.message['type'] = action.message.type;
            newState.message['text'] = action.message.text;
            return newState;

        default:
            return state;
    }
}