import { Axios } from 'libs';
import { TaskCreateForm } from 'types';
import { API_ROUTE } from 'constants/';

const api = new Axios(true);

export const createTask = async (data: TaskCreateForm) => {
  await api.post(API_ROUTE.TASK.CREATE, data);
};
