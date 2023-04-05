import { Axios } from 'libs';
import { API_ROUTE } from 'constants/';

const api = new Axios(true);
/* Project */
export const getUserProjects = async () => {
  const res = await api.get(API_ROUTE.PROJECT.GET_USER_PROJECTS);

  return res;
};

export const createProject = async (data: FormData) => {
  const res = await api.postMultipartFormData(API_ROUTE.PROJECT.CREATE, data);

  return res;
};

export const joinProject = async (projectId: string | number) => {
  const res = await api.post(API_ROUTE.PROJECT.JOIN_PROJECT(projectId), {});

  return res;
};

export const getProjectData = async (param: string) => {
  const res = await api.getByParams(API_ROUTE.PROJECT.GET_DATA, param);

  return res;
};
