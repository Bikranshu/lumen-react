import { createStore, applyMiddleware, compose } from 'redux';

// middlewares
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Import custom components
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk, logger),

    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.devToolsExtension ? window.devToolsExtension() : function (f) {
        return f;
    }
));
export default store;