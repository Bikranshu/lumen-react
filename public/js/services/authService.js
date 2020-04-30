import axios from 'axios';

import * as ActionType from '../constants/actionType';
import AppConstant from '../constants/app';
import {clearToken, setToken, getToken} from '../utils/actionUtil';
import * as apiAction from '../actions/apiAction';
import * as FlashMessage from '../actions/flashMessage';

export function login({email, password}) {
    return function (dispatch) {
        dispatch(apiAction.apiRequest());
        axios.post(AppConstant.API_URL + 'auth/login', {email, password}).then((response) => {
            dispatch({
                type: ActionType.LOG_IN_SUCCESS,
                payload: response.data.token
            });

            setToken(response.data.token);

            window.location.href = AppConstant.ROOT_URL + 'dashboard';
        })
            .catch((error) => {
                authErrorHandler(dispatch, error.response, ActionType.LOG_IN_FAILURE);
                dispatch(FlashMessage.addFlashMessage('error', 'Invalid username and password.'));
            });
    };
}

export function verifyToken() {
    return (dispatch) => {
        const token = getToken();
        // Update application state. User has token and is probably authenticated
        if (token) {
            dispatch({type: ActionType.LOG_IN_SUCCESS, payload: token});
        }
    };
}

export function logout() {
    clearToken();
    window.location.href = AppConstant.ROOT_URL;
   
}

export function authErrorHandler(dispatch, error, type) {
    let errorMessage = (error.data.message) ? error.data.message : error.data;

    // NOT AUTHENTICATED ERROR
    if (error.status === 401) {
        errorMessage = 'You are not authorized to do this. Please login and try again.';
    }

    dispatch({
        type,
        payload: errorMessage,
    });
}