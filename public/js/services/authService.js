import axios from 'axios';
import cookie from 'react-cookie';

/**
 * Import all constants as an object.
 */
import * as ActionType from '../constants/actionType';

import AppConstant from '../constants/app';

export function login({ email, password }) {
    return function (dispatch) {
         axios.post(AppConstant.API_URL + 'auth/login', { email, password }).then((response) => {
                    dispatch({
                        type: ActionType.LOG_IN_SUCCESS,
                        payload: response.data.token
                    });
                    cookie.save(AppConstant.TOKEN, response.data.token, { path: '/' });
                    window.location.href = AppConstant.ROOT_URL + 'dashboard';
                })
                .catch((error) => {
                    errorHandler(dispatch, error.response,  ActionType.LOG_IN_FAILURE);
                });
    };
}

export function refreshToken() {
    return axios
        .post(AppConstant.API_URL + 'auth/login/refresh', {
            headers: {'Authorization': AppConstant.BEARER + ' ' + cookie.load(AppConstant.TOKEN)}
        }).then((response) => {
            dispatch({
                type: ActionType.RECEIVE_REFRESH_TOKEN,
                payload: response.data.content,
            });
            window.location.href = ROOT_URL;
        })
        .catch((error) => {
            errorHandler(dispatch, error.response, ActionType.LOG_IN_FAILURE);
        });
}

export function logout(error) {
    return function (dispatch) {
        dispatch({ type: ActionType.LOG_OUT });
        cookie.remove(AppConstant.TOKEN, { path: '/' });

        window.location.href = AppConstant.ROOT_URL;
    };
}