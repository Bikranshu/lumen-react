//libraries
import _ from 'lodash';

// Import constants
import * as ActionType from '../constants/actionType';

var initialState = {
    products: [],
    selectedItem: {
        product: {},
    },
    pagination: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
    state = state || initialState;
    let newState;

    switch (action.type) {
        case ActionType.LIST:
            newState = _.cloneDeep(state);
            newState[action.entity + 's'] = _.cloneDeep(action.data.data);
            return newState;

        case ActionType.SELECT_ITEM:
            newState = _.cloneDeep(state);
            newState.selectedItem[action.entity] = action.data.data;
            return newState;

        case ActionType.UPDATE_SELECTED_ITEM:
            newState = _.cloneDeep(state);
            newState.selectedItem[action.entity][action.key] = action.value;
            return newState;

        case ActionType.DELETE:
            newState = _.cloneDeep(state);
            let data = newState[action.entity + 's'];
            let index = _.indexOf(data, _.find(data, {id: action.id}));
            data.splice(index, 1);
            return newState;

        case ActionType.CLEAR_LIST:
            newState = _.cloneDeep(state);
            newState[action.entity + 's'] = {};
            return newState;

        case ActionType.CLEAR_SELECTED_ITEM:
            newState = _.cloneDeep(state);
            newState.selectedItem[action.entity] = {};
            return newState;

        default:
            return state;
    }
}