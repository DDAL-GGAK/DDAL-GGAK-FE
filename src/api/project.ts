import { Axios } from 'libs';

const api = new Axios(true);
export const getProjectData = async (param: string) => {
  const res = await api.getByParams('/api/project', param);

  return res;
};

export const getTaskData = async (param: string) => {
  const res = await api.getByParams('/api', param);

  return res;
};
