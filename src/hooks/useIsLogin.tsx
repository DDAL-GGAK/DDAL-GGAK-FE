import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { QUERY } from 'constants/';

export const useIsLogin = () => {
  const storeData = !!useSelector((state: RootState) => state.userDataSlicer);
  const localStorageData = !!localStorage.getItem(QUERY.KEY.USER_DATA);

  return storeData || localStorageData;
};
