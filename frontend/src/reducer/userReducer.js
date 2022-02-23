import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../action/actionType";

const initialState = {

}

export const userLoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAILURE:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return initialState

        default:
            return initialState;
    }
}