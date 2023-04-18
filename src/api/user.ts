import { Axios } from 'libs';
import { API_ROUTE } from 'constants/';
import { NicknameForm, TicketData } from 'types';

const api = new Axios(true);

export const getUserData = async () => {
  const res = await api.get(API_ROUTE.USER.GET_DATA);

  return res;
};

export const getUserTicketCount = async (userId: string): Promise<TicketData[]> => {
  const res = await api.get(API_ROUTE.USER.GET_USERTICKETCOUNT(userId));

  return res.data;
}

export const getUserTotalTicket = async (userId: string, status: string) => {
  const res = await api.get(API_ROUTE.USER.GET_USERTOTALTICKET(userId, status));

  return res.data;
}


export const setUserProfile = async (data: FormData) => {
  const res = await api.putFormData(API_ROUTE.USER.SET_PROFILE, data);

  return res;
};

export const setUserNickname = async (data: NicknameForm) => {
  const res = await api.put(API_ROUTE.USER.SET_NICKNAME, data);

  return res;
};
