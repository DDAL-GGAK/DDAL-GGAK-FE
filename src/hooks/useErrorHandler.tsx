import { COOKIE, ROUTE, STATUS_CODES } from 'constants/';
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
    const statusCode = error?.response?.status as number;

    if (statusCode === STATUS_CODES.ERROR.UNAUTHORIZED) {
      cookie.remove(COOKIE.KEY.ACCESS_TOKEN, {
        ...COOKIE.CONFIG.DEFAULT,
      });
      dispatch(removeUserData());

      return navigate(ROUTE.LOGIN);
    }

    return navigate(moveTo);
  };

  return { errorHandler };
}
