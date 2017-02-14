import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import custom components
import authReducer from './authReducer';
import crudReducer from './crudReducer';
import apiReducer from './apiReducer';
import flashMessageReducer from './flashMessageReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    crud: crudReducer,
    api: apiReducer,
    flash: flashMessageReducer,
    routing: routerReducer
});

export default rootReducer;