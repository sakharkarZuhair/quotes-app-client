import axios from "axios";

const API = axios.create({
  baseURL: "https://python-quote-server.herokuapp.com",
});

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem("token")) {
//       req.headers.Authorization = `Bearer ${
//         JSON.parse(localStorage.getItem("token")).token
//       }`;
//     }
//     // console.log(req.headers.Authroization);
//     return req;
//   });

export const login = async (formData) => await API.post("/login", formData);
export const register = async (formData) =>
  await API.post("/register", formData);

export const getPosts = async () => await API.get("/getPosts");

export const createPost = async (formData) =>
  await API.post("/createPost", formData);

export const getComments = async () => await API.get("/getComment");
export const createComment = async (data) => await API.post("/comment", data);
