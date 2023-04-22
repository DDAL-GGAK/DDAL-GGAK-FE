import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export const useIsLogin = () => {
  const storeData = !!useSelector((state: RootState) => state.userDataSlicer);

  return storeData;
};
