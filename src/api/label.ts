import { Axios } from 'libs';
import { API_ROUTE } from 'constants/';

const api = new Axios(true);

interface CreateLabelArg {
  taskId: string | number;
  labelTitle: string;
}

export const createLabel = async ({ taskId, labelTitle }: CreateLabelArg) => {
  const res = await api.post(API_ROUTE.LABEL.CREATE(taskId), { labelTitle });

  return res;
};
