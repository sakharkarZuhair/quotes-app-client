import * as api from "../api/index";
import { GET_COMMENT, CREATE_COMMENT } from "../constants/actionTypes";

export const getComment = () => async (dispatch) => {
  try {
    const { data } = await api.getComments();
    dispatch({ type: GET_COMMENT, payload: data });
    // console.log("action", data);
  } catch (error) {
    console.log(error);
  }
};

export const createComment = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createComment(formData);
    console.log(data);
    dispatch({ type: CREATE_COMMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
