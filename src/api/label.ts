import { Axios } from 'libs';
import { API_ROUTE } from 'constants/';
import { LabelCreateForm } from 'types';

const api = new Axios(true);

export const createLabel = async (data: LabelCreateForm) => {
  const res = await api.post(API_ROUTE.LABEL.CREATE, data);

  return res;
};
