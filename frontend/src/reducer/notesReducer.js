import {
  NOTES_LIST_FAILURE,
  NOTES_LIST_REQUEST,
  NOTES_LIST_SUCCESS,
} from "../action/actionType";

export const noteListReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTES_LIST_REQUEST:
      return { loading: true };
    case NOTES_LIST_SUCCESS:
      return { loading: false, notes: action.payload };
    case NOTES_LIST_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
