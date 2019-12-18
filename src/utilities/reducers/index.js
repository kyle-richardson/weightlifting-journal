import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    HANDLE_CHANGE,
    RESET_CREDS
    } 
from "../actions"

const initialState = {
    credentials: {},
    error: '',
    token: '',
    isLogging: false,
    isRegistering: false,
    isFetching: false,
}

export const rootReducer = (state = initialState, {type, payload})=> {
switch (type) {
    case LOGIN_START:
        return {
            ...state,
            isLogging: true,
            error: ''
        }
    case LOGIN_SUCCESS:
        return {
            ...state,
            isLogging: false,
            error: ''
        }
    case LOGIN_FAIL:
        return {
            ...state,
            isLogging: false,
            error: 'Login Fail'
        }
    case HANDLE_CHANGE:
        return {
            ...state,
            [payload.form]: 
            {
                ...state[payload.form],
                [payload.target.name]: payload.target.value
            }
        }
    case RESET_CREDS:
        return {
            ...state,
            credentials: {}
        }
    case LOGOUT:
        return initialState
    default:
        return state
}
}
