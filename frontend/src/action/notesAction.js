import axios from "axios";
import {
  NOTES_LIST_FAILURE,
  NOTES_LIST_REQUEST,
  NOTES_LIST_SUCCESS,
} from "./actionType";

export const noteListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: NOTES_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // console.log(userInfo);

    const { data } = await axios.get("api/notes", config);
    dispatch({
      type: NOTES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: NOTES_LIST_FAILURE,
      payload: message,
    });
  }
};
