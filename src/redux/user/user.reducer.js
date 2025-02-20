import {UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser:null
}

const userReducer = (state = INITIAL_STATE , action) => {           //state takes the default value as INITIAL_STATE 
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload
            }
        default:
            return state
    }
}   

export default userReducer
