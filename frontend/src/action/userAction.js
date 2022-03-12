import axios from "axios";
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./actionType";


// user login
export const login = (email, password) => async (dispatch) => {

    try {
        dispatch(userLoginRequest())
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };


        const { data } = await axios.post(
            "api/users/login",
            {
                email,
                password,
            },
            config
        );
        dispatch(userLoginSuccess(data))
        // console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch(userLoginFailure(error.response.data.message))
    }
}
export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch(userLogout())

}

export const userLoginRequest = () => (
    {
        type: USER_LOGIN_REQUEST,
    }
)
export const userLoginSuccess = (data) => (
    {
        type: USER_LOGIN_SUCCESS,
        payload: data
    }
)
export const userLoginFailure = (error) => (
    {
        type: USER_LOGIN_FAILURE,
        payload: error
    }
)
export const userLogout = () => (
    {
        type: USER_LOGOUT,
    }
)


//user registration


export const register = (name , email, password, pic) => async (dispatch) => {

    try {
        dispatch(userRegisterRequest())
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };


        const { data } = await axios.post(
            "api/users",
            {
                name,
                email,
                password,
                pic,
            },
            config
        );
        dispatch(userRegisterSuccess(data))
        dispatch(userLoginSuccess(data))
        // console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch(userRegisterFailure(error.response.data.message))
    }
}


export const userRegisterRequest = () => (
    {
        type: USER_REGISTER_REQUEST,
    }
)
export const userRegisterSuccess = (data) => (
    {
        type: USER_REGISTER_SUCCESS,
        payload: data
    }
)
export const userRegisterFailure = (error) => (
    {
        type: USER_REGISTER_FAILURE,
        payload: error
    }
)