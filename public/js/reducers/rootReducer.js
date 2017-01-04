import { combineReducers } from 'redux';

// Import custom components
import authReducer from './authReducer';
import crudReducer from './crudReducer';
import apiReducer from './apiReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    crud: crudReducer,
    api: apiReducer
});

export default rootReducer;