import { Axios } from 'libs';
import { API_ROUTE } from 'constants/';
import { LabelCreateForm } from 'types';

const api = new Axios(true);

export const createLabel = async (data: LabelCreateForm) => {
  const { data: res } = await api.post(API_ROUTE.LABEL.CREATE, data);

  return res;
};

export const deleteLabel = async (labelId: number) => {
  const { data: res } = await api.delete(API_ROUTE.LABEL.DELETE, labelId);

  return res;
};
