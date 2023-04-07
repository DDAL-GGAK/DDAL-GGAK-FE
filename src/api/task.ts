import { Axios } from 'libs';
import { TaskCreateForm, Query } from 'types';
import { API_ROUTE } from 'constants/';

const api = new Axios(true);

export const createTask = async (data: TaskCreateForm) => {
  const res = await api.post(API_ROUTE.TASK.CREATE, data);

  return res;
};

export const getTaskData = async ({
  param,
  query,
}: {
  param: string;
  query: Query;
}) => {
  const { data: res } = await api.getByQuery(
    API_ROUTE.TASK.GET_DATA(param),
    query
  );

  return res;
};
