import { Axios } from 'libs';
import { TicketCreateForm, Query } from 'types';
import { API_ROUTE } from 'constants/';

const api = new Axios(true);

export const createTicket = async (data: TicketCreateForm) => {
  const res = await api.post(API_ROUTE.TICKET.CREATE, data);

  return res;
};

export const getTicketData = async ({
  param,
  query,
}: {
  param: string;
  query: Query;
}) => {
  const { data: res } = await api.getByQuery(
    API_ROUTE.TICKET.GET_DATA(param),
    query
  );

  return res;
};
