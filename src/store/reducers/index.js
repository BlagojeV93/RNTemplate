import { combineReducers } from 'redux';
import { createStore } from 'redux';

import FirstReducer from './FirstReducer'

const reducers = combineReducers({
    first: FirstReducer
});

export default store = createStore(reducers);