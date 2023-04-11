import { ERROR, ROUTE } from 'constants/';
import { AxiosError } from 'axios';
import { sendToast } from 'libs';
import { useNavigate } from 'react-router-dom';

interface RouteForm {
  route: string | null | undefined;
}

export function useErrorHandler({ route }: RouteForm = { route: null }) {
  const navigate = useNavigate();
  const defaultRoute = ROUTE.HOME;
  const moveTo = route || defaultRoute;
  const errorHandler = (err: unknown) => {
    const error = err as AxiosError;
    sendToast.error(error.message);

    if (error.message === ERROR.FORBIDDEN.NO_ACCESS_RIGHTS)
      return navigate(moveTo);
    if (error.message === ERROR.NOT_FOUND.USER_NOT_FOUND)
      return navigate(moveTo);
    if ((error?.response?.status as number) >= 400) return navigate(moveTo);
  };

  return { errorHandler };
}
