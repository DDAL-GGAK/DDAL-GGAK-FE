import { COOKIE, QUERY } from 'constants/';
import { Cookies } from 'react-cookie';

export const syncLogin = () => {
  const cookie = new Cookies();
  const userData = cookie.get(COOKIE.KEY.ACCESS_TOKEN);

  if (!userData) localStorage.removeItem(QUERY.KEY.USER_DATA);
};
