import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index";

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    };
    const { data } = await api.login(formData, config);

    dispatch({ type: AUTH, data });
    navigate("/home");
  } catch (error) {
    console.log(error);
  }
};

export const register = (formData, navigate) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    };

    const { data } = await api.register(formData, config);
    console.log(data);

    dispatch({ type: AUTH, data });
    navigate("/home");
  } catch (error) {
    console.log(error);
  }
};
