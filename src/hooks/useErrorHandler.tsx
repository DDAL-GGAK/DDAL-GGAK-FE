import { ERROR } from 'constants/';
import { useNavigateBack } from 'hooks';
import { AxiosError } from 'axios';
import { sendToast } from 'libs';

export function useErrorHandler() {
  const navigateBack = useNavigateBack();

  const errorHandler = (err: unknown) => {
    const error = err as AxiosError;
    console.log('handleError!');

    sendToast.error(error.message);
    if (error.message === ERROR.FORBIDDEN.NO_ACCESS_RIGHTS)
      return navigateBack();
    if (error.message === ERROR.NOT_FOUND.USER_NOT_FOUND) return navigateBack();
    if ((error?.response?.status as number) >= 400) return navigateBack();
    console.log(error);
    console.log('pass');
  };

  return { errorHandler };
}
