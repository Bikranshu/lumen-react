import axios from 'axios';
import cookie from 'react-cookie';

export function fetch(url, pathParam) {
    return axios
        .get(url + pathParam, {
            headers: {'Authorization': 'Bearer' + ' ' + cookie.load('token')}
        });
}

export function store(url, pathParam, data) {
    return axios
        .post(url + pathParam, data, {
            headers: {'Authorization': 'Bearer' + ' ' + cookie.load('token')}
        });
}

export function update(url, pathParam, data) {
    return axios
        .put(url + pathParam, data, {
            headers: {'Authorization': 'Bearer' + ' ' + cookie.load('token')}
        });
}

export function destroy(url, pathParam) {
    return axios
        .delete(url + pathParam, {
            headers: {'Authorization': 'Bearer' + ' ' + cookie.load('token')}
        });
}