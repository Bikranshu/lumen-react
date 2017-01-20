import { createStore, applyMiddleware, compose } from 'redux';

// middlewares
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
const logger = createLogger();

// Import custom components
import rootReducer from '../reducers/rootReducer';

/**
 * Create a Redux store that holds the app state.
 */
const store = createStore(rootReducer, compose(
    applyMiddleware(thunkMiddleware, logger),

    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.devToolsExtension ? window.devToolsExtension() : function (f) {
        return f;
    }
));
export default store;