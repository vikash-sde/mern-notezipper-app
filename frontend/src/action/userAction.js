import axios from "axios";
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actionType";

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
