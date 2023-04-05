import { Axios } from 'libs';
import { TaskCreateForm } from 'types';
import { API_ROUTE } from 'constants/';

const api = new Axios(true);

export const createTask = async (data: TaskCreateForm) => {
  await api.post(API_ROUTE.TASK.CREATE, data);
};

export const getTaskData = async (id: string) => {
  await api.getByParams(API_ROUTE.TASK.GET_DATA, id);
};
