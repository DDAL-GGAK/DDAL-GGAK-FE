import { COOKIE, ERROR, QUERY, ROUTE, STATUS_CODES } from 'constants/';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { removeUserData } from 'redux/modules/userData';

interface RouteForm {
  route: string | null | undefined;
}

export function useErrorHandler({ route }: RouteForm = { route: null }) {
  const navigate = useNavigate();
  const defaultRoute = ROUTE.HOME;
  const moveTo = route || defaultRoute;
  const cookie = new Cookies();
  const dispatch = useDispatch();

  const errorHandler = (err: unknown) => {
    const error = err as AxiosError;

    if (error.message === ERROR.FORBIDDEN.NO_ACCESS_RIGHTS)
      return navigate(moveTo);
    if (error.message === ERROR.NOT_FOUND.USER_NOT_FOUND)
      return navigate(moveTo);
    if (
      (error?.response?.status as number) === STATUS_CODES.ERROR.UNAUTHORIZED
    ) {
      cookie.remove(COOKIE.KEY.ACCESS_TOKEN, {
        ...COOKIE.CONFIG.DEFAULT,
      });
      localStorage.removeItem(QUERY.KEY.USER_DATA);
      dispatch(removeUserData());
    }
    if ((error?.response?.status as number) >= 400) return navigate(moveTo);
  };

  return { errorHandler };
}
