import { Axios } from 'libs';
import { API_ROUTE } from 'constants/';
import { RegisterField } from 'types/';

const unAuthAPI = new Axios();
const authAPI = new Axios(true);

export const signUp = async ({ email, password }: RegisterField) => {
  const res = await unAuthAPI.post(API_ROUTE.AUTH.SIGN_UP, { email, password });

  return res;
};

export const checkEmail = async ({ email }: RegisterField) => {
  const res = await unAuthAPI.post(API_ROUTE.AUTH.CHECK_EMAIL, { email });

  return res;
};

export const logIn = async ({ email, password }: RegisterField) => {
  const response = await authAPI.post(API_ROUTE.AUTH.LOG_IN, {
    email,
    password,
  });

  return response;
};

export const logOut = async () => authAPI.post(API_ROUTE.AUTH.LOG_OUT, {});
