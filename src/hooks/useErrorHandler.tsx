import { ErrorForm } from 'types';
import { ERROR } from 'constants/';
import { useNavigateBack } from 'hooks';

export function useErrorHandler() {
  const navigateBack = useNavigateBack();

  const errorHandler = (err: unknown) => {
    const error = err as ErrorForm;
    if (error.message === ERROR.FORBIDDEN.NO_ACCESS_RIGHTS) navigateBack();
    if (error.message === ERROR.NOT_FOUND.USER_NOT_FOUND) navigateBack();
  };

  return { errorHandler };
}
