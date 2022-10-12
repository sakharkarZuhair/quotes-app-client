import { GET_COMMENT, CREATE_COMMENT } from "../constants/actionTypes";

export const commentReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case GET_COMMENT:
      return { ...state, comments: action?.payload.comments };
    case CREATE_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};
