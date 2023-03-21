import { Axios } from 'libs';

interface UserProps {
  email: string;
  password: string;
}

const unAuthAPI = new Axios();
const authAPI = new Axios(true);

export const signUp = async ({ email, password }: UserProps) => {
  const res = await unAuthAPI.post('/api/auth/signup', { email, password });

  return res;
};

export const checkEmail = async ({ email }: UserProps) => {
  const res = await unAuthAPI.post('/api/auth/email', { email });

  return res;
};

export const logIn = async ({ email, password }: UserProps) => {
  const response = await authAPI.post('/api/auth/login', { email, password });

  return response;
};
