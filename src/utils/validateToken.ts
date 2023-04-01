import { Cookies } from 'react-cookie';
import { COOKIE } from 'constants/';
import { validateToken } from 'api';

export const checkAuth = async () => {
  const cookie = new Cookies();
  const hasToken = cookie.get(COOKIE.KEY.ACCESS_TOKEN);
  if (!hasToken) return false;
  try {
    const { status } = await validateToken();

    return status === 200;
  } catch (err: unknown) {
    return false;
  }
};
