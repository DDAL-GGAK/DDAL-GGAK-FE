import instance from './instance';

interface UserProps {
  email: string;
  password: string;
}

export const signUp = async ({ email, password }: UserProps) => {
  const res = await instance.post("/api/auth/signup", { email, password });
  return res;
};

export const checkEmail = async ({email}: UserProps) => {
  const res = await instance.post("/api/auth/email", {email});
  return res;
}

export const logIn = async ({ email, password }: UserProps) => {
  const response = await instance.post("/api/auth/login", { email, password });
  return response;
};