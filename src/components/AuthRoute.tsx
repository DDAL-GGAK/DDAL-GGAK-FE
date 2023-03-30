import { checkAuth } from 'utils';
import { useState, useEffect } from 'react';
import { Route, Navigate, NavigateProps } from 'react-router-dom';

type AuthRouteProps = {
  component: React.ComponentType<any>;
  [key: string]: any;
} & React.ComponentProps<typeof Route>;

export function AuthRoute({ component: Component, ...rest }: AuthRouteProps) {
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

  return (
    <Route
      {...rest}
      element={
        isAuth ? (
          <Component />
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
        )
      }
    />
  );
}
