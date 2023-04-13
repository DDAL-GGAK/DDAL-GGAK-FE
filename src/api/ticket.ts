import { Axios } from 'libs';
import { TicketCreateForm, Query, SetLabelForm } from 'types';
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

export const deleteTicket = async (ticketId: string | number) => {
  const res = await api.delete(API_ROUTE.TICKET.DELETE, ticketId);

  return res;
};

export const changeTicketStatus = async (ticketId: string | number) => {
  const res = await api.post(
    API_ROUTE.TICKET.CHANGE_STATUS(String(ticketId)),
    {}
  );

  return res;
};

export const sendTicketReview = async (ticketId: string) => {
  const res = await api.post(API_ROUTE.TICKET.SEND_REVIEW(ticketId), {});

  return res;
};

export const assignTicket = async (ticketId: string) => {
  const res = await api.post(API_ROUTE.TICKET.ASSIGN_TICKET(ticketId), {});

  return res;
};

export const setLabel = async ({ ticketId, labelId }: SetLabelForm) => {
  const res = await api.post(API_ROUTE.TICKET.SET_LABEL(ticketId), {
    labelId: Number(labelId),
  });

  return res;
};
