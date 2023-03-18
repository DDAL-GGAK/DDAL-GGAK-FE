import instance from './instance';


export const signUp = async ({ email, password }: any) => {
  const res = await instance.post("/api/auth/signup", { email, password });
  return res;
};

export const logIn = async ({ email, password }: any) => {
  const response = await instance.post("/api/auth/login", { email, password });
  return response;
};