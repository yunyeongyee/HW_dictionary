import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import Store from './modules/Store';

const rootReducer = combineReducers({ Store });

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares); 

const store = createStore(rootReducer, enhancer);

export default store;