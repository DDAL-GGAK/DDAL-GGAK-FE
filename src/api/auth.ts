import {instance} from './instance';


export const signUp = async ({ email, password }: any) => {
  const response = await instance.post("/api/auth/signup", { email, password });
  return response;
};

export const logIn = async ({ email, password }: any) => {
  const response = await instance.post("/api/auth/login", { email, password });
  return response;
};

