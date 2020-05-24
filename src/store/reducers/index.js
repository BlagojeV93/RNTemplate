import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import FirstReducer from './FirstReducer'

const reducers = combineReducers({
    first: FirstReducer
});

export default store = createStore(reducers, {}, applyMiddleware(ReduxThunk));