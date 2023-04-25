import { useEffect, useState } from 'react';
import { checkAuth } from 'utils';

export const useIsLogin = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkValidation = async () => {
      const auth = await checkAuth();
      setIsAuth(auth);
    };

    checkValidation();
  }, []);

  return isAuth;
};
