/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

instance.interceptors.request.use(
  (config) => {
    const token = cookies.get("authorization");
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export {instance}
