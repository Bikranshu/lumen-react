import cookie from 'react-cookie';
import AppConstant from '../constants/app';

export const setToken = token => cookie.save(AppConstant.TOKEN, token, {path: '/'});
export const getToken = () => cookie.load(AppConstant.TOKEN);
export const clearToken = () => cookie.remove(AppConstant.TOKEN, {path: '/'});