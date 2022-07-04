import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

let userRequest;

let user = JSON.parse(localStorage.getItem("persist:root") || "{}")?.user;
let currentUser = user && JSON.parse(user).currentUser;
let TOKEN = currentUser?.accessToken;

export function getToken() {
  user = JSON.parse(localStorage.getItem("persist:root") || "{}")?.user;
  currentUser = user && JSON.parse(user).currentUser;
  TOKEN = currentUser?.accessToken;

  userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
  });
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

export { userRequest };
