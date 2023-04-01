import { Axios } from 'libs';
import { API_ROUTE } from 'constants/';

const api = new Axios(true);
/* Project */
export const getUserProjects = async () => {
  const res = await api.get(API_ROUTE.PROJECT.GET_USER_PROJECTS);

  return res;
};

export const getProjectData = async (param: string) => {
  const res = await api.getByParams(API_ROUTE.PROJECT.GET_DATA, param);

  return res;
};

export const setProjectThumbnail = async (data: FormData) => {
  await api.putFormData(API_ROUTE.PROJECT.SET_THUMBNAIL, data);
};

export const setProjectTitle = async (data: string | undefined) => {
  if (!data) return;
  await api.put(API_ROUTE.PROJECT.SET_TITLE, { title: data });
};

/* Task */
export const getTaskData = async (param: string) => {
  const res = await api.getByParams(API_ROUTE.TASK.GET_DATA, param);

  return res;
};
