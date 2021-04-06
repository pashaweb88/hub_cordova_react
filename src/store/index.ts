import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rooReducer } from './reducers';

export const store = createStore(rooReducer, applyMiddleware(thunk));