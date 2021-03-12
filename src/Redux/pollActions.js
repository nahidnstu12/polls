import * as actionTypes from './Types'
import {Polls} from '../data'

function loadPollsSuccess(polls){
    return {
        type:actionTypes.LOAD_POLLS_SUCCESS,
        polls
    }
}

function addNewPollSuccess(poll){
    return{
        type:actionTypes.ADD_POLLS_SUCCESS,
        poll
    }
}

export const loadPolls = () => {
    return function (dispatch){
         dispatch(loadPollsSuccess(Polls))
    }
}

export const addNewPoll = (poll) =>{
    return function (dispatch){
        dispatch(addNewPollSuccess(poll))
    }
    
}

