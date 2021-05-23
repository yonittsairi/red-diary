import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'


import { postReducer } from './reducer/postReducer.js';
import { userReducer } from './reducer/userReducer.js';

const rootReducer = combineReducers({
    postModule: postReducer,
    userModule: userReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
