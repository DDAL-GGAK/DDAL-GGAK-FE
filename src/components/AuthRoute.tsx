import { checkAuth } from 'utils';
import { useState, useEffect } from 'react';
import { Navigate, NavigateProps } from 'react-router-dom';
import { AuthRouteProps } from 'types';
import { ROUTE } from 'constants/';
import { useDispatch } from 'react-redux';
import { setAuthLoading } from 'redux/modules/authLoading';
import { Loading } from './Loading';

export function AuthRoute({ element, ...rest }: AuthRouteProps) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthLoading(true));
    const checkValidation = async () => {
      const auth = await checkAuth();
      setIsAuth(auth);
      setLoading(false);
      dispatch(setAuthLoading(false));
    };

    checkValidation();
  }, []);

  if (loading) return <Loading />;

  return isAuth ? (
    element
  ) : (
    <Navigate
      to={
        {
          pathname: ROUTE.LOGIN,
          state: { from: rest.location },
        } as NavigateProps['to']
      }
      replace
    />
  );
}
