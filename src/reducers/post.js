import {
  GET_POST,
  CREATE_POST,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

export const postReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_POST:
      return { ...state, posts: action?.payload?.posts };
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action?.payload] };
    default:
      return state;
  }
};
