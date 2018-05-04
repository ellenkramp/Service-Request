import { combineReducers } from 'redux';
import initialState from './initialState';

let requests = (state = initialState.requests, action) => {
    let newRequest = {
        status: 'incomplete',
        ...action.payload
    }

    switch (action.type) {
        case 'NEW_REQUEST' : 
            return [ newRequest, ...state ]
    };
    return state
};


export default combineReducers({ 
    requests, 
});