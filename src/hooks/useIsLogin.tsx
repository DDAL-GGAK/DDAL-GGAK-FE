import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export const useIsLogin = () => {
  const isLogin = useSelector((state: RootState) => state.userDataSlicer);

  return !!isLogin;
};
