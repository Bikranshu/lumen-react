import axios from 'axios';
import cookie from 'react-cookie';

/**
 * Import all constants as an object.
 */
import * as ActionType from '../constants/actionType';
import AppConstant from '../constants/app';

/**
 * Import all apiAction as an object.
 */
import * as apiAction from '../actions/apiAction';

/**
 * Import flashMessage.
 */
import * as FlashMessage from '../actions/flashMessage';

export function login({email, password}) {
    return function (dispatch) {
        dispatch(apiAction.apiRequest());
        axios.post(AppConstant.API_URL + 'auth/login', {email, password}).then((response) => {
            dispatch({
                type: ActionType.LOG_IN_SUCCESS,
                payload: response.data.token
            });
            cookie.save(AppConstant.TOKEN, response.data.token, {path: '/'});
            window.location.href = AppConstant.ROOT_URL + 'dashboard';
        })
            .catch((error) => {
                authErrorHandler(dispatch, error.response, ActionType.LOG_IN_FAILURE);
                dispatch(FlashMessage.addFlashMessage('error', 'Invalid username and password.'));
            });
    };
}

// export function refreshToken() {
//     return axios
//         .post(AppConstant.API_URL + 'auth/login/refresh', {
//             headers: {'Authorization': AppConstant.BEARER + ' ' + cookie.load(AppConstant.TOKEN)}
//         }).then((response) => {
//             dispatch({
//                 type: ActionType.RECEIVE_REFRESH_TOKEN,
//                 payload: response.data.content,
//             });
//             window.location.href = ROOT_URL;
//         })
//         .catch((error) => {
//             authErrorHandler(dispatch, error.response, ActionType.LOG_IN_FAILURE);
//         });
// }

export function logout(error) {
    return function (dispatch) {
        dispatch({type: ActionType.LOG_OUT});
        cookie.remove(AppConstant.TOKEN, {path: '/'});

        window.location.href = AppConstant.ROOT_URL;
    };
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