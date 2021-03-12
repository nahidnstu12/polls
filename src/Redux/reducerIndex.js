// Set up your root reducer here...
import { combineReducers } from 'redux';
import  polls  from './pollReducers';

const createRootReducer = combineReducers(
    { polls }
)
export default createRootReducer