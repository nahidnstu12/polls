// import { Polls } from '../data';
import * as actionTypes from './Types'

export default function pollsReducer  (state = [],action){

    switch(action.type){

        case actionTypes.LOAD_POLLS_SUCCESS:
            return action.polls;

        case actionTypes.ADD_POLLS_SUCCESS:
           
            return [ ...state, action.poll]

        default:
            return state
    }
} 


export const initialState =  {
    polls : []
}