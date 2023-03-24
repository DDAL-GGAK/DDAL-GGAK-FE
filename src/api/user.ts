import { Axios } from 'libs';
import { API_ROUTE } from 'constants/';

const api = new Axios(true);

export const getUserData = async () => {
  const { data } = await api.get(API_ROUTE.USER.GET_DATA);

  return data;
};
