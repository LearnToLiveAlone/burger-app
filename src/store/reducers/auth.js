import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

 const initialState = {
    idToken: null,
    userId: null,
    loading: false,
    error: null
}

const authStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        idToken: action.idToken,
        userId: action.userId
    })
}

const authFail = (state,action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

const reducer = ( state =initialState, action ) => {
    switch(action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        default:
            return state;
    }
}

export default reducer