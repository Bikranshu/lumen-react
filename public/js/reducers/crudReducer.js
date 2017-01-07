//libraries
import _ from 'lodash';

// Import constants
import * as ActionType from '../constants/actionType';

var initialState = {
    products: [],
    pagination: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state , action) {
    state = state || initialState;

    switch (action.type) {
        case ActionType.LIST:
            var newState = _.cloneDeep(state);
            newState[action.entity + 's'] = _.cloneDeep(action.data.data);
            return newState;


        case ActionType.DELETE:
            var newState = _.cloneDeep(state);
            var data = newState[action.entity + 's'];
            var index = _.indexOf(data, _.find(data, {id: action.id}));
            data.splice(index, 1);
            return newState;

        case ActionType.CLEAR_LIST:
            var newState = _.cloneDeep(state);
            newState[action.entity + 's'] = {};
            return newState;

        case ActionType.PAGINATION_INDEX:
            var newState = _.cloneDeep(state);
            newState.pagination.startPage = action.index;
            newState.pagination.count = action.count;
            return newState;

        default:
            return state;
    }
}