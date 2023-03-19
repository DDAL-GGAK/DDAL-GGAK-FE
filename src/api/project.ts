import { Axios } from 'libs';

const api = new Axios(true);
export const getProjectData = async (param: string) =>
  api.getByParams('url', param);
