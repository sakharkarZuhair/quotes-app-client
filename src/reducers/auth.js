import { AUTH } from "../constants/actionTypes";

export const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("userInfo", JSON.stringify(action?.data));
      return { ...state, authData: action?.data };
    default:
      return state;
  }
};
