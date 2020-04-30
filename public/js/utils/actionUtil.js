import Cookies from 'universal-cookie';

const cookies = new Cookies();

import AppConstant from '../constants/app';

export const setToken = token => cookies.set(AppConstant.TOKEN, token, {path: '/'});
export const getToken = () => cookies.get(AppConstant.TOKEN);
export const clearToken = () => cookies.remove(AppConstant.TOKEN, {path: '/'});