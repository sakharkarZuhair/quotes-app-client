import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { postReducer } from "./post";
import { commentReducer } from "./comment";

export default combineReducers({
  posts: postReducer,
  auth: authReducer,
  comment: commentReducer,
});
