import { checkAuth } from 'utils';
import { useState, useEffect } from 'react';
import { Navigate, NavigateProps } from 'react-router-dom';
import { AuthRouteProps } from 'types';

export function AuthRoute({ element: Component, ...rest }: AuthRouteProps) {
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
    Component
  ) : (
    <Navigate
      to={
        {
          pathname: '/login',
          state: { from: rest.location },
        } as NavigateProps['to']
      }
      replace
    />
  );
}
