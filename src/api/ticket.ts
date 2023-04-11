import { Axios } from 'libs';
import { TicketCreateForm } from 'types';
import { API_ROUTE } from 'constants/';

const api = new Axios(true);

export const createTicket = async (data: TicketCreateForm) => {
  const res = await api.post(API_ROUTE.TICKET.CREATE, data);

  return res;
};
