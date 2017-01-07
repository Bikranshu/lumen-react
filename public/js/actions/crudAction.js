// Import constants
import * as ActionType from '../constants/actionType';

// Import apiAction
import * as apiAction from './apiAction';

// Import apiService
import * as apiService from '../services/apiService';

/**
 * Actions that are dispatched from crudAction
 */
var commonActions = {
    list: function (entity, data) {
        return {
            type: ActionType.LIST,
            entity: entity,
            data: data
        }
    },

    delete: function (entity, id) {
        return {
            type: ActionType.DELETE,
            entity: entity,
            id: id
        }
    },

    pageIndex: function (data, count) {
        return {
            type: ActionType.PAGINATION_INDEX,
            index: data.start,
            count: count
        }
    }
};

/**
 * These are the actions every CRUD in the application uses.
 *
 * Every time an action that requires the API is called, it first Dispatches an "apiRequest" action.
 *
 * ApiService returns a promise which dispatches another action "apiResponse".
 *
 * entity = 'Product', 'Employee', ...
 */


export function fetchAll(entity, data) {
    return function (dispatch) {
        dispatch(apiAction.apiRequest());
        return apiService.fetch(entity, data) .then((response) => {
                dispatch(commonActions.list(entity, response.data));
            })
            .catch(response => dispatch(errorHandler(response.data.error)));
    };
}

export function errorHandler(dispatch, error, type) {
    let errorMessage = (error.data.error) ? error.data.error : error.data;

    // NOT AUTHENTICATED ERROR
    if (error.status === 401) {
        errorMessage = 'You are not authorized to do this. Please login and try again.';
    }

    dispatch({
        type,
        payload: errorMessage,
    });
}