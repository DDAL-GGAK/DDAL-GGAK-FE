import {instance} from './instance';
// import {UserInfo} from '../pages/Signup'


export const signUp = async ({ email, password }: any) => {
  const response = await instance.post("/api/auth/signup", { email, password });
  console.log(response);
  return response;
};

export const logIn = async ({ email, password }: any) => {
  const response = await instance.post("/api/auth/login", { email, password });
  console.log(response);
  return response;
};

