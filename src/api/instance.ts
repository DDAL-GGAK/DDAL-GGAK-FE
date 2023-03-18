/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

/* request interceptor */
const reqOnValid = (config: any) => {
  const token = cookies.get("authorization");
  config.headers.Authorization = token;
  return config;
}

const reqOnInvalid = (error: any) => {
  return Promise.reject(error);
}

/* response interceptor */
const resOnValid = (res: any) => {
  return res;
}

const resOnInvalid = (error: any) => {
  return Promise.reject(error);
}


/* Axios interceptor */
instance.interceptors.request.use(reqOnValid,reqOnInvalid);
instance.interceptors.response.use(resOnValid, resOnInvalid);


export default instance;
