// Import utils
import * as ApiUtil from '../utils/apiUtil';
import * as Converter from '../utils/converter';

import AppConstant from '../constants/app';

export function fetch(pathParam, data) {
    return ApiUtil.fetch(AppConstant.API_URL, pathParam.toLowerCase());
}

export function store(resourceName, data) {
    return ApiUtil.store(AppConstant.API_URL, resourceName.toLowerCase(), data);
}

export function update(resourceName, data, dataId) {
    return ApiUtil.update(AppConstant.API_URL, Converter.getPathParam(resourceName.toLowerCase(), dataId), data);
}

export function destroy(resourceName, dataId) {
    return ApiUtil.destroy(AppConstant.API_URL, Converter.getPathParam(resourceName.toLowerCase(), dataId));
}
