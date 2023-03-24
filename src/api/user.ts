import { Axios } from 'libs';

const api = new Axios(true);

export const getUserData = async () => {
  const { data } = await api.get('/api/user');

  return data;
};
