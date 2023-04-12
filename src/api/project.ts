import { Axios } from 'libs';
import { API_ROUTE } from 'constants/';

const api = new Axios(true);
/* Project */
export const getUserProjects = async () => {
  const { data: res } = await api.get(API_ROUTE.PROJECT.GET_USER_PROJECTS);

  return res;
};

export const createProject = async (data: FormData) => {
  const { data: res } = await api.postMultipartFormData(
    API_ROUTE.PROJECT.CREATE,
    data
  );

  return res;
};

export const joinProject = async (projectId: string | number) => {
  const { data: res } = await api.post(
    API_ROUTE.PROJECT.JOIN_PROJECT(projectId),
    {}
  );

  return res;
};

export const getProjectData = async (param: string) => {
  const { data: res } = await api.getByParams(
    API_ROUTE.PROJECT.GET_DATA,
    param
  );

  return res;
};

export const setProjectThumbnail = async (data: FormData) => {
  await api.putFormData(API_ROUTE.PROJECT.SET_THUMBNAIL, data);
};

export const setProjectTitle = async (data: string | undefined) => {
  if (!data) return;
  await api.put(API_ROUTE.PROJECT.SET_TITLE, { title: data });
};
