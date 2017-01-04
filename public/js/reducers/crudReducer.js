//libraries
import _ from 'lodash';

// Import constants
import * as ActionType from '../constants/actionType';

var initialState = {
    products: [],
    pagination: {},
};

export default function (state , action) {
    state = state || initialState;

    switch (action.type) {
        case ActionType.LIST:
            var newState = _.cloneDeep(state);
            newState[action.entity] = _.cloneDeep(action.data.data);
            return newState;


        case ActionType.DELETE:
            var newState = _.cloneDeep(state);
            var data = newState[action.entity];
            var index = _.indexOf(data, _.find(data, {id: action.id}));
            data.splice(index, 1);
            return newState;

        case ActionType.CLEAR_LIST:
            var newState = _.cloneDeep(state);
            newState[action.entity] = {};
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