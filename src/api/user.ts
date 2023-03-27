import { Axios } from 'libs';
import { API_ROUTE } from 'constants/';

const api = new Axios(true);

export const getUserData = async () => {
  const res = await api.get(API_ROUTE.USER.GET_DATA);

  return res;
};

export const setUserProfile = async (data: FormData) => {
  await api.putFormData(API_ROUTE.USER.SET_PROFILE, data);
};

export const setUserNickname = async (data: string | undefined) => {
  if (!data) return;
  await api.put(API_ROUTE.USER.SET_NICKNAME, { nickname: data });
};