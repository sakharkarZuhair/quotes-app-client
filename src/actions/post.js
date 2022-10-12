import {
  GET_POST,
  CREATE_POST,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";
import * as api from "../api/index";

export const getPostsAction = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    // console.log("action", data);
    dispatch({ type: GET_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(formData);
    dispatch({ type: CREATE_POST, payload: data });
    dispatch({ type: END_LOADING });
    // navigate("/home");
  } catch (error) {
    console.log(error);
  }
};
