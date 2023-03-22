import { Axios } from 'libs';
import { API_ROUTE } from 'constants/';

interface UserProps {
  email: string;
  password: string;
}

const unAuthAPI = new Axios();
const authAPI = new Axios(true);

export const signUp = async ({ email, password }: UserProps) => {
  const res = await unAuthAPI.post(API_ROUTE.AUTH.SIGN_UP, { email, password });

  return res;
};

export const checkEmail = async ({ email }: UserProps) => {
  const res = await unAuthAPI.post(API_ROUTE.AUTH.CHECK_EMAIL, { email });

  return res;
};

export const logIn = async ({ email, password }: UserProps) => {
  const response = await authAPI.post(API_ROUTE.AUTH.LOG_IN, {
    email,
    password,
  });

  return response;
};

export const logOut = async () => authAPI.post(API_ROUTE.AUTH.LOG_OUT, {});
