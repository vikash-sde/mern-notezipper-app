import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../action/actionType";

const initialState = {
    loading: false,
    userInfo: null,
    error: null,
}

export const userLoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { ...state,loading: true }
        case USER_LOGIN_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload }
        case USER_LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case USER_LOGOUT:
            return state

        default:
            return state;
    }
}

export const userRegistrationReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { ...state,loading: true }
        case USER_REGISTER_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload }
        case USER_REGISTER_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case USER_LOGOUT:
            return state

        default:
            return state;
    }
}