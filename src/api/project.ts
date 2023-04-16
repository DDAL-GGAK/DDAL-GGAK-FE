import { Axios } from 'libs';
import { API_ROUTE } from 'constants/';
import { UpdateProjectDataProps } from 'types';

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
  const res = await api.post(
    API_ROUTE.PROJECT.JOIN_PROJECT(projectId as string),
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

export const updateProjectThumbnail = async ({
  data,
  projectId,
}: UpdateProjectDataProps) => {
  const res = await api.postMultipartFormData(
    API_ROUTE.PROJECT.SET_THUMBNAIL(projectId as string),
    data as FormData
  );

  return res;
};

export const updateProjectTitle = async ({
  data,
  projectId,
}: UpdateProjectDataProps) => {
  if (!data) return;
  const res = await api.postMultipartFormData(
    API_ROUTE.PROJECT.SET_TITLE(projectId as string),
    data as FormData
  );

  return res;
};

export const deleteProject = async (projectId: string) => {
  const res = await api.delete(API_ROUTE.PROJECT.DELETE, projectId);

  return res;
};

export const createProjectInviteCode = async (projectId: string) => {
  const { data: res } = await api.post(
    API_ROUTE.PROJECT.CREATE_INVITE_CODE(projectId),
    {}
  );

  return res;
};
