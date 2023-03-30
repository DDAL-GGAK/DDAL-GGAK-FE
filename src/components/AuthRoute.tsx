import { checkAuth } from 'utils';
import { useState, useEffect } from 'react';
import { Navigate, NavigateProps } from 'react-router-dom';
import { AuthRouteProps } from 'types';
import { ROUTE } from 'constants/';

export function AuthRoute({ element, ...rest }: AuthRouteProps) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkValidation = async () => {
      const auth = await checkAuth();
      setIsAuth(auth);
      setLoading(false);
    };
    checkValidation();
  }, []);

  if (loading) return <div>Loading...</div>;

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
